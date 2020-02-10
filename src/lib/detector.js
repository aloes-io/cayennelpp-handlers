const loraPacket = require('lora-packet');
const logger = require('aloes-logger');
const protocolRef = require('./common');

/**
 * Check incoming MQTT packet.payload against [CayenneLPP]{@link /cayennelpp/#cayennelpp}
 * pattern '+appEui/+type/+method/+gatewayId/#device'
 * @method cayennePatternDetector
 * @param {object} packet - The MQTT packet, including LoraWan PHYPayload.
 * @returns {object} found pattern.name and pattern.params
 */

const cayennePatternDetector = payload => {
  try {
    const pattern = {name: 'empty', params: {}};
    const packet = loraPacket.fromWire(payload);
    logger(
      2,
      'cayennelpp-handlers',
      'patternDetector:req',
      packet.getMType().toString('hex'),
    );
    if (!packet || packet === null || !packet.getBuffers()) {
      throw new Error('Missing packet');
    }
    const method = packet.getMType().toString('hex');
    if (!method || method === null) {
      throw new Error('Invalid packet');
    }
    const methodExists = protocolRef.validators.methods.some(
      meth => meth === method,
    );
    let deviceIsValid = false;

    if (
      packet.getBuffers().DevAddr &&
      packet.getBuffers().DevAddr.toString('hex').length ===
        Number(protocolRef.validators.devAddrLength)
    ) {
      deviceIsValid = true;
      pattern.params.devAddr = packet.getBuffers().DevAddr.toString('hex');
      pattern.params.frameCounter = packet.getFCnt();
    } else if (
      packet.getBuffers().DevEUI &&
      packet.getBuffers().DevEUI.toString('hex').length ===
        Number(protocolRef.validators.devEuiLength)
    ) {
      // validate devEui => https://github.com/AdamMagaluk/eui64
      deviceIsValid = true;
      pattern.params.devEui = packet.getBuffers().DevEUI.toString('hex');
      pattern.params.appEui = packet.getBuffers().AppEUI.toString('hex');
      pattern.params.devNonce = packet.getBuffers().DevNonce.toString('hex');
    } else {
      return pattern;
    }

    if (methodExists && deviceIsValid) {
      pattern.name = 'cayenneLPP';
      pattern.params.method = method;
      pattern.params.packet = packet;
      return pattern;
    }
    return pattern;
  } catch (error) {
    logger(2, 'cayennelpp-handlers', 'patternDetector:err', error);
    return null;
  }
};

module.exports = {
  cayennePatternDetector,
};
