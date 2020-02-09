const {omaObjects, omaViews} = require('oma-json');
const logger = require('aloes-logger');
const {
  ANALOG_INPUT,
  DIGITAL_INPUT,
  PRESENCE,
  LUMINOSITY,
  TEMPERATURE,
  HUMIDITY,
  ACCELEROMETER,
  BAROMETER,
  UNIXTIME,
  GYROMETER,
  LOCATION,
} = require('./common');

/**
 * Return a float value and
 * increment the buffer cursor
 * @static
 * @return float
 */
const getAnalogInput = (buffer, cursor) => {
  //  const value = this.buffer.readInt16BE(++this.cursor);
  const value = buffer.readInt16BE((cursor += 1));
  cursor += 1;
  return {'5600': value / 100};
};

/**
 * Return an integer value
 * @static
 * @return integer
 */
const getDigitalInput = (buffer, cursor) => {
  const value = buffer[(cursor += 1)];
  return {'5500': value};
};

/**
 * Return a luminosity in Lux and
 * increment the buffer cursor
 * @static
 * @return integer
 */
const getLuminosity = (buffer, cursor) => {
  const value = buffer.readInt16BE((cursor += 1));
  cursor += 1;
  return {'5700': value};
};

/**
 * Return an integer value
 * @static
 * @return integer
 */
const getPresence = (buffer, cursor) => {
  const value = buffer[(cursor += 1)];
  return {'5500': value};
};

/**
 * Return a temperature and
 * increment the buffer cursor
 * @static
 * @return float
 */
const getTemperature = (buffer, cursor) => {
  const value = buffer.readInt16BE((cursor += 1));
  cursor += 1;
  return {'5700': value / 10};
};

/**
 * Return a relative humidity value in percents and
 * increment the buffer cursor
 * @static
 * @returns float
 */
const getRelativeHumidity = (buffer, cursor) => {
  // const value = this.buffer[(this.cursor += 1)] / 2;
  const value = buffer[(cursor += 1)] / 2;
  cursor += 1;
  return {'5700': value};
};

/**
 * Return axis coordinates and
 * increment the buffer cursor
 * @static
 * @return object
 */
const getAccelerometer = (buffer, cursor) => {
  const x = buffer.readInt16BE((cursor += 1));
  const y = buffer.readInt16BE((cursor += 1));
  const z = buffer.readInt16BE((cursor += 1));
  return {
    '5702': x,
    '5703': y,
    '5704': z,
  };
};

/**
 * Return a pressure and
 * increment the buffer cursor
 * @static
 * @return float
 */
const getBarometer = (buffer, cursor) => {
  const value = buffer.readInt16BE((cursor += 1));
  return {'5700': value};
};

/**
 * Return a timestamp and
 * increment the buffer cursor
 * @static
 * @return float
 */
const getUnixTime = (buffer, cursor) => {
  const value = buffer.readInt32BE((cursor += 1));
  return {'5506': value};
};

/**
 * Return axis coordinates and
 * increment the buffer cursor
 * @static
 * @return object
 */
const getGyrometer = (buffer, cursor) => {
  const x = buffer.readInt16BE((cursor += 1));
  const y = buffer.readInt16BE((cursor += 1));
  const z = buffer.readInt16BE((cursor += 1));
  return {
    '5702': x,
    '5703': y,
    '5704': z,
  };
};

/**
 * Return location coordinates and
 * increment the buffer cursor
 * @static
 * @return object
 */
const getLocation = (buffer, cursor) => {
  const latitude = buffer.readInt16BE((cursor += 1));
  const longitude = buffer.readInt16BE((cursor += 1));
  const meters = buffer.readInt16BE((cursor += 1));
  return {
    '5514': latitude,
    '5515': longitude,
    '5516': meters,
    '5518': new Date(),
  };
};

/**
 * Decode LoraWan buffer containing a [CayenneLPP]{@link /cayennelpp/#cayennelpp} payload
 * @method cayenneBufferDecoder
 * @param {object} buffer - Decoded LoraWan packet.
 * @returns {object} Decoded channels
 */
const cayenneBufferDecoder = buffer => {
  try {
    const channels = {};
    let cursor = 0;
    let current = null;
    logger(3, 'cayennelpp- handlers', 'bufferDecoder:req', {buffer, cursor});
    while (cursor < buffer.length) {
      if (current !== null) {
        // channel part is defined
        switch (buffer[cursor]) {
          case DIGITAL_INPUT:
            channels[`${DIGITAL_INPUT}`] = getDigitalInput(buffer, cursor);
            break;
          case ANALOG_INPUT:
            channels[`${ANALOG_INPUT}`] = getAnalogInput(buffer, cursor);
            break;
          case LUMINOSITY:
            channels[`${LUMINOSITY}`] = getLuminosity(buffer, cursor);
            break;
          case PRESENCE:
            channels[`${PRESENCE}`] = getPresence(buffer, cursor);
            break;
          case TEMPERATURE:
            channels[`${TEMPERATURE}`] = getTemperature(buffer, cursor);
            break;
          case HUMIDITY:
            channels[`${HUMIDITY}`] = getRelativeHumidity(buffer, cursor);
            break;
          case ACCELEROMETER:
            channels[`${ACCELEROMETER}`] = getAccelerometer(buffer, cursor);
            break;
          case BAROMETER:
            channels[`${BAROMETER}`] = getBarometer(buffer, cursor);
            break;
          case UNIXTIME:
            channels[`${UNIXTIME}`] = getUnixTime(buffer, cursor);
            break;
          case GYROMETER:
            channels[`${GYROMETER}`] = getGyrometer(buffer, cursor);
            break;
          case LOCATION:
            channels[`${LOCATION}`] = getLocation(buffer, cursor);
            break;
          default:
            delete channels[buffer[cursor]];
            logger(
              2,
              'cayennelpp- handlers',
              'Unsupported data type',
              `${buffer[cursor]}`,
            );
            break;
        }
        cursor += 1;
        current = null;
      } else {
        // new channel detection
        current = buffer[(cursor += 1)];
        // create the channel if not already declared
        if (current && !channels[current]) {
          channels[current] = {};
        }
      }
    }
    logger(2, 'cayennelpp- handlers', 'bufferDecoder:res', {channels});
    if (!channels) throw new Error('Unsupported data type');
    return channels;
  } catch (error) {
    logger(2, 'cayennelpp- handlers', 'bufferDecoder:err', error);
    return null;
  }
};

/**
 * Find corresponding [OMA Object]{@link /cayennelpp/#omaobjects} to incoming [CayenneLPP]{@link /cayennelpp/#cayennelpp} datas
 * pattern - '+appEui/+type/+method/+gatewayId/#device'
 * @method cayenneToOmaObject
 * @param {object} msg - Decoded MQTT packet.
 * @returns {object} composed instance
 */
const cayenneToOmaObject = (packet, protocol) => {
  try {
    if (!packet || packet === null) {
      throw new Error('Wrong packet input');
    }
    logger(4, 'cayennelpp- handlers', 'toOmaObject:req', packet);
    //  const maxsize = 51;
    const channels = cayenneBufferDecoder(packet);
    const nativeTypes = Object.getOwnPropertyNames(channels);
    const decoded = nativeTypes.map((nativeType, index) => {
      const nativeResource = Object.keys(channels[nativeType])[0];
      const omaObject = omaObjects.find(
        object => object.value === Number(nativeType) + 3200,
      );
      if (!omaObject) throw new Error('Wrong OMA Object id');
      const omaView = omaViews.find(
        object => object.value === Number(nativeType) + 3200,
      );
      const resources = {
        ...omaObject.resources,
        ...channels[nativeType],
      };

      return {
        packet,
        transportProtocol: protocol.transportProtocol || null,
        messageProtocol: 'cayenneLPP',
        name: omaObject.name,
        icons: omaView.icons,
        colors: omaView.resources,
        nativeType,
        nativeResource,
        nativeSensorId: index,
        type: Number(nativeType) + 3200,
        devEui: protocol.devEui,
        devAddr: protocol.devAddr,
        resources,
        resource: nativeResource,
        value: channels[nativeType][nativeResource],
        //  frameCounter: 0,
      };
    });

    logger(4, 'cayennelpp- handlers', 'toOmaObject:res', decoded);
    return decoded;
  } catch (error) {
    logger(2, 'cayennelpp- handlers', 'toOmaObject:err', error);
    return null;
  }
};

/**
 * Find corresponding [OMA Resources]{@link /cayennelpp/#omaresources} to incoming [CayenneLPP]{@link /cayennelpp/#cayennelpp} datas
 * pattern - '+appEui/+type/+method/+gatewayId/#device'
 * @static
 * @param {object} msg - Decoded MQTT packet.
 * @returns {object} composed instance
 */
const cayenneToOmaResources = (packet, protocol) => {
  try {
    if (!packet || packet == null) {
      throw new Error('Wrong packet input');
    }
    logger(4, 'cayennelpp- handlers', 'toOmaResources:req', packet);

    //  const maxsize = 51;
    const channels = cayenneBufferDecoder(packet);
    const nativeTypes = Object.getOwnPropertyNames(channels);
    const decoded = nativeTypes.map((nativeType, index) => {
      const nativeResource = Object.keys(channels[nativeType])[0];
      const omaObject = omaObjects.find(
        object => object.value === Number(nativeType) + 3200,
      );
      if (!omaObject) throw new Error('Wrong OMA Object id');
      const resources = {
        ...omaObject.resources,
        ...channels[nativeType],
      };
      return {
        packet,
        transportProtocol: protocol.transportProtocol || null,
        messageProtocol: 'cayenneLPP',
        nativeType,
        nativeResource,
        nativeSensorId: index,
        type: Number(nativeType) + 3200,
        devEui: protocol.devEui,
        devAddr: protocol.devAddr,
        resources,
        resource: nativeResource,
        value: channels[nativeType][nativeResource],
      };
    });

    logger(4, 'cayennelpp- handlers', 'toOmaResources:res', decoded);
    return decoded;
  } catch (error) {
    logger(2, 'cayennelpp- handlers', 'toOmaResources:err', error);
    return null;
  }
};

/**
 * Convert incoming [CayenneLPP]{@link /cayennelpp/#cayennelpp} data to Aloes Client sensor instance
 * pattern - "+prefixedDevEui/+nodeId/+sensorId/+method/+ack/+subType"
 * @param {object} packet - Incoming MQTT packet.
 * @param {object} protocol - Protocol paramters ( coming from patternDetector ).
 * @returns {object} composed sensor instance
 */
const cayenneDecoder = (packet, protocol) => {
  try {
    if (!protocol.packet || !protocol.packet.getBuffers()) {
      throw new Error('Wrong packet input');
    }
    logger(4, 'cayennelpp- handlers', 'decoder:req', protocol.method);

    if (protocol.method && (protocol.devEui || protocol.devAddr)) {
      protocol.transportProtocol = 'loraWan';
      if (
        protocol.method === 'Unconfirmed Data Up' ||
        protocol.method === 'Confirmed Data Up'
      ) {
        //  if (protocol.packet.getFCnt() < 1) {
        return cayenneToOmaObject(packet, protocol);
        //  }
      }
      if (protocol.method === 'Join Request') {
        return cayenneToOmaObject(packet, protocol);
      }
      if (
        protocol.method === 'Unconfirmed Data Down' ||
        protocol.method === 'Confirmed Data Down'
      ) {
        //  if (protocol.packet.getFCnt() > 1) {
        return cayenneToOmaResources(packet, protocol);
        //  }
      }
      throw new Error('Invalid method');
    }
    throw new Error('Invalid params');
  } catch (error) {
    logger(2, 'cayennelpp- handlers', 'decoder:err', error);
    return null;
  }
};

module.exports = {
  cayenneToOmaObject,
  cayenneToOmaResources,
  cayenneBufferDecoder,
  cayenneDecoder,
};
