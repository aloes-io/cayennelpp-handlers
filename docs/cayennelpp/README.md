## Objects

<dl>
<dt><a href="#protocolRef">protocolRef</a> : <code>object</code></dt>
<dd><p>References used to validate payloads</p>
<p>LPP_TYPE = IPSO_OBJECT_ID - 3200</p>
</dd>
<dt><a href="#types">types</a> : <code>object</code></dt>
<dd><p>References used to identify sensor types</p>
<p>LPP_TYPE = IPSO_OBJECT_ID - 3200</p>
</dd>
<dt><a href="#units">units</a> : <code>object</code></dt>
<dd><p>References used to identify sensor units</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#getAnalogInput">getAnalogInput()</a> ⇒ <code>object</code></dt>
<dd><p>Return a float value and
increment the buffer cursor</p>
</dd>
<dt><a href="#getDigitalInput">getDigitalInput()</a> ⇒ <code>object</code></dt>
<dd><p>Return an integer value</p>
</dd>
<dt><a href="#getLuminosity">getLuminosity()</a> ⇒ <code>object</code></dt>
<dd><p>Return a luminosity in Lux and
increment the buffer cursor</p>
</dd>
<dt><a href="#getPresence">getPresence()</a> ⇒ <code>object</code></dt>
<dd><p>Return an integer value</p>
</dd>
<dt><a href="#getTemperature">getTemperature()</a> ⇒ <code>object</code></dt>
<dd><p>Return a temperature and
increment the buffer cursor</p>
</dd>
<dt><a href="#getRelativeHumidity">getRelativeHumidity()</a> ⇒ <code>object</code></dt>
<dd><p>Return a relative humidity value in percents and
increment the buffer cursor</p>
</dd>
<dt><a href="#getAccelerometer">getAccelerometer()</a> ⇒ <code>object</code></dt>
<dd><p>Return axis coordinates and
increment the buffer cursor</p>
</dd>
<dt><a href="#getBarometer">getBarometer()</a> ⇒ <code>object</code></dt>
<dd><p>Return a pressure and
increment the buffer cursor</p>
</dd>
<dt><a href="#getUnixTime">getUnixTime()</a> ⇒ <code>object</code></dt>
<dd><p>Return a timestamp and
increment the buffer cursor</p>
</dd>
<dt><a href="#getGyrometer">getGyrometer()</a> ⇒ <code>object</code></dt>
<dd><p>Return axis coordinates and
increment the buffer cursor</p>
</dd>
<dt><a href="#getLocation">getLocation()</a> ⇒ <code>object</code></dt>
<dd><p>Return location coordinates and
increment the buffer cursor</p>
</dd>
<dt><a href="#cayenneBufferDecoder">cayenneBufferDecoder(packet)</a> ⇒ <code>object</code> | <code>null</code></dt>
<dd><p>Decode LoraWan buffer containing a <a href="/cayennelpp/#cayennelpp">CayenneLPP</a> payload</p>
</dd>
<dt><a href="#cayenneToOmaObject">cayenneToOmaObject(packet, protocol)</a> ⇒ <code>Array.&lt;object&gt;</code> | <code>null</code></dt>
<dd><p>Find corresponding <a href="/cayennelpp/#omaobjects">OMA Object</a> to incoming <a href="/cayennelpp/#cayennelpp">CayenneLPP</a> datas
pattern - &#39;+appEui/+type/+method/+gatewayId/#device&#39;</p>
</dd>
<dt><a href="#cayenneToOmaResources">cayenneToOmaResources(packet, protocol)</a> ⇒ <code>Array.&lt;object&gt;</code> | <code>null</code></dt>
<dd><p>Find corresponding <a href="/cayennelpp/#omaresources">OMA Resources</a> to incoming <a href="/cayennelpp/#cayennelpp">CayenneLPP</a> datas
pattern - &#39;+appEui/+type/+method/+gatewayId/#device&#39;</p>
</dd>
<dt><a href="#cayenneDecoder">cayenneDecoder(packet, protocol)</a> ⇒ <code>functions</code> | <code>null</code></dt>
<dd><p>Convert incoming <a href="/cayennelpp/#cayennelpp">CayenneLPP</a> data to Aloes Client sensor instance
pattern - &quot;+prefixedDevEui/+nodeId/+sensorId/+method/+ack/+subType&quot;</p>
</dd>
<dt><a href="#cayennePatternDetector">cayennePatternDetector(payload)</a> ⇒ <code>object</code> | <code>null</code></dt>
<dd><p>Check incoming MQTT packet.payload against <a href="/cayennelpp/#cayennelpp">CayenneLPP</a>
pattern &#39;+appEui/+type/+method/+gatewayId/#device&#39;</p>
</dd>
<dt><a href="#validate">validate(channel)</a></dt>
<dd><p>Validate chosen channel</p>
</dd>
<dt><a href="#addAnalogInput">addAnalogInput(buffer, cursor, channel, value)</a> ⇒ <code>number</code></dt>
<dd><p>Creates a payload with type ANALOG_INPUT.
unit = UNIT.UNDEFINED</p>
</dd>
<dt><a href="#addDigitalInput">addDigitalInput(buffer, cursor, channel, value)</a> ⇒ <code>number</code></dt>
<dd><p>Creates a payload with type DIGITAL_INPUT.
unit = UNIT.UNDEFINED</p>
</dd>
<dt><a href="#addLuminosity">addLuminosity(buffer, cursor, channel, value)</a> ⇒ <code>number</code></dt>
<dd><p>Creates a payload with type LUMINOSITY.
unit = UNIT.LUX</p>
</dd>
<dt><a href="#addPresence">addPresence(buffer, cursor, channel, value)</a> ⇒ <code>number</code></dt>
<dd><p>Creates a payload with type PRESENCE.</p>
</dd>
<dt><a href="#addTemperature">addTemperature(buffer, cursor, channel, value)</a> ⇒ <code>number</code></dt>
<dd><p>Creates a payload with type TEMPERATURE.
unit = UNIT.CELSIUS</p>
</dd>
<dt><a href="#addRelativeHumidity">addRelativeHumidity(buffer, cursor, channel, value)</a> ⇒ <code>number</code></dt>
<dd><p>Creates a payload with type HUMIDITY.
unit = UNIT.PERCENT</p>
</dd>
<dt><a href="#addAccelerometer">addAccelerometer(buffer, cursor, channel, value)</a> ⇒ <code>number</code></dt>
<dd><p>Creates a payload with type ACCELEROMETER.
unit = UNIT.UNDEFINED</p>
</dd>
<dt><a href="#addBarometer">addBarometer(buffer, cursor, channel, value)</a> ⇒ <code>number</code></dt>
<dd><p>Creates a payload with type BAROMETER.
unit = UNIT.PRESSURE</p>
</dd>
<dt><a href="#addUnixTime">addUnixTime(buffer, cursor, channel, value)</a> ⇒ <code>number</code></dt>
<dd><p>Creates a payload with type UNIXTIME.
unit = UNIT.UNDEFINED</p>
</dd>
<dt><a href="#addGyrometer">addGyrometer(buffer, cursor, channel, value)</a> ⇒ <code>number</code></dt>
<dd><p>Creates a payload with type GYROMETER.
unit = UNIT.UNDEFINED</p>
</dd>
<dt><a href="#addLocation">addLocation(buffer, cursor, channel, value)</a> ⇒ <code>number</code></dt>
<dd><p>Creates a payload with type LOCATION.
unit = UNIT.UNDEFINED</p>
</dd>
<dt><a href="#getPayload">getPayload(buffer, cursor)</a> ⇒ <code>object</code></dt>
<dd><p>Reading the composed buffer from 0 to the cursor position.</p>
</dd>
<dt><a href="#cayenneBufferEncoder">cayenneBufferEncoder(buffer, type, channel, value)</a> ⇒ <code>object</code> | <code>null</code></dt>
<dd><p>Filling the buffer with desired sensor parameters and value</p>
</dd>
<dt><a href="#cayenneEncoder">cayenneEncoder(instance)</a> ⇒ <code>object</code> | <code>null</code></dt>
<dd><p>Convert incoming Aloes Client data to <a href="/cayennelpp/#cayennelpp">CayenneLPP</a>
pattern - &#39;+appEui/+type/+method/+gatewayId/#device&#39;</p>
</dd>
</dl>

## External

<dl>
<dt><a href="#external_OmaObjects">OmaObjects</a></dt>
<dd><p>Oma Object References.</p>
</dd>
<dt><a href="#external_OmaResources">OmaResources</a></dt>
<dd><p>Oma Resources References.</p>
</dd>
<dt><a href="#external_CayenneLPP">CayenneLPP</a></dt>
<dd><p>Cayenne Low Power Payload.</p>
</dd>
</dl>

<a name="protocolRef"></a>

## protocolRef : <code>object</code>
References used to validate payloads

LPP_TYPE = IPSO_OBJECT_ID - 3200

**Kind**: global namespace  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| pattern | <code>string</code> | The pattern used by [CayenneLPP](/cayennelpp/#cayennelpp) devices. |
| validators | <code>object</code> | Check inputs / build outputs |
| validators.methods | <code>array</code> | [0, 1, 2, 3, 4]. |

<a name="types"></a>

## types : <code>object</code>
References used to identify sensor types

LPP_TYPE = IPSO_OBJECT_ID - 3200

**Kind**: global namespace  
<a name="units"></a>

## units : <code>object</code>
References used to identify sensor units

**Kind**: global namespace  
<a name="getAnalogInput"></a>

## getAnalogInput() ⇒ <code>object</code>
Return a float value and
increment the buffer cursor

**Kind**: global function  
<a name="getDigitalInput"></a>

## getDigitalInput() ⇒ <code>object</code>
Return an integer value

**Kind**: global function  
<a name="getLuminosity"></a>

## getLuminosity() ⇒ <code>object</code>
Return a luminosity in Lux and
increment the buffer cursor

**Kind**: global function  
<a name="getPresence"></a>

## getPresence() ⇒ <code>object</code>
Return an integer value

**Kind**: global function  
<a name="getTemperature"></a>

## getTemperature() ⇒ <code>object</code>
Return a temperature and
increment the buffer cursor

**Kind**: global function  
<a name="getRelativeHumidity"></a>

## getRelativeHumidity() ⇒ <code>object</code>
Return a relative humidity value in percents and
increment the buffer cursor

**Kind**: global function  
<a name="getAccelerometer"></a>

## getAccelerometer() ⇒ <code>object</code>
Return axis coordinates and
increment the buffer cursor

**Kind**: global function  
<a name="getBarometer"></a>

## getBarometer() ⇒ <code>object</code>
Return a pressure and
increment the buffer cursor

**Kind**: global function  
<a name="getUnixTime"></a>

## getUnixTime() ⇒ <code>object</code>
Return a timestamp and
increment the buffer cursor

**Kind**: global function  
<a name="getGyrometer"></a>

## getGyrometer() ⇒ <code>object</code>
Return axis coordinates and
increment the buffer cursor

**Kind**: global function  
<a name="getLocation"></a>

## getLocation() ⇒ <code>object</code>
Return location coordinates and
increment the buffer cursor

**Kind**: global function  
<a name="cayenneBufferDecoder"></a>

## cayenneBufferDecoder(packet) ⇒ <code>object</code> \| <code>null</code>
Decode LoraWan buffer containing a [CayenneLPP](/cayennelpp/#cayennelpp) payload

**Kind**: global function  
**Returns**: <code>object</code> \| <code>null</code> - channels  

| Param | Type | Description |
| --- | --- | --- |
| packet | <code>buffer</code> | Incoming Lora packet. |

<a name="cayenneToOmaObject"></a>

## cayenneToOmaObject(packet, protocol) ⇒ <code>Array.&lt;object&gt;</code> \| <code>null</code>
Find corresponding [OMA Object](/cayennelpp/#omaobjects) to incoming [CayenneLPP](/cayennelpp/#cayennelpp) datas
pattern - '+appEui/+type/+method/+gatewayId/#device'

**Kind**: global function  
**Returns**: <code>Array.&lt;object&gt;</code> \| <code>null</code> - instances  

| Param | Type | Description |
| --- | --- | --- |
| packet | <code>buffer</code> | Incoming MQTT (Lora) packet. |
| protocol | <code>object</code> | Protocol paramters ( coming from patternDetector ). |

<a name="cayenneToOmaResources"></a>

## cayenneToOmaResources(packet, protocol) ⇒ <code>Array.&lt;object&gt;</code> \| <code>null</code>
Find corresponding [OMA Resources](/cayennelpp/#omaresources) to incoming [CayenneLPP](/cayennelpp/#cayennelpp) datas
pattern - '+appEui/+type/+method/+gatewayId/#device'

**Kind**: global function  
**Returns**: <code>Array.&lt;object&gt;</code> \| <code>null</code> - instances  

| Param | Type | Description |
| --- | --- | --- |
| packet | <code>buffer</code> | Incoming MQTT (Lora) packet. |
| protocol | <code>object</code> | Protocol paramters ( coming from patternDetector ). |

<a name="cayenneDecoder"></a>

## cayenneDecoder(packet, protocol) ⇒ <code>functions</code> \| <code>null</code>
Convert incoming [CayenneLPP](/cayennelpp/#cayennelpp) data to Aloes Client sensor instance
pattern - "+prefixedDevEui/+nodeId/+sensorId/+method/+ack/+subType"

**Kind**: global function  
**Returns**: <code>functions</code> \| <code>null</code> - cayenneToOmaObject | cayenneToOmaResources  

| Param | Type | Description |
| --- | --- | --- |
| packet | <code>object</code> | Incoming MQTT (Lora) packet. |
| protocol | <code>object</code> | Protocol paramters ( coming from patternDetector ). |

<a name="cayennePatternDetector"></a>

## cayennePatternDetector(payload) ⇒ <code>object</code> \| <code>null</code>
Check incoming MQTT packet.payload against [CayenneLPP](/cayennelpp/#cayennelpp)
pattern '+appEui/+type/+method/+gatewayId/#device'

**Kind**: global function  
**Returns**: <code>object</code> \| <code>null</code> - pattern  

| Param | Type | Description |
| --- | --- | --- |
| payload | <code>object</code> | The MQTT packet, including LoraWan PHYPayload. |

<a name="validate"></a>

## validate(channel)
Validate chosen channel

**Kind**: global function  
**Throws**:

- <code>Error</code> 'Channels above 100 are reserved.'


| Param | Type | Description |
| --- | --- | --- |
| channel | <code>int</code> | The channel selected |

<a name="addAnalogInput"></a>

## addAnalogInput(buffer, cursor, channel, value) ⇒ <code>number</code>
Creates a payload with type ANALOG_INPUT.
unit = UNIT.UNDEFINED

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| buffer | <code>object</code> | Empty buffer. |
| cursor | <code>number</code> | Writing position. |
| channel | <code>number</code> | The channel for this sensor. |
| value | <code>number</code> | A floating point number accurate to two decimal place. lodash.floor(value, 2) |

<a name="addDigitalInput"></a>

## addDigitalInput(buffer, cursor, channel, value) ⇒ <code>number</code>
Creates a payload with type DIGITAL_INPUT.
unit = UNIT.UNDEFINED

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| buffer | <code>object</code> | Empty buffer. |
| cursor | <code>number</code> | Writing position. |
| channel | <code>number</code> | The channel for this sensor. |
| value | <code>number</code> | The value, unsigned int8, should be 0 or 1. |

<a name="addLuminosity"></a>

## addLuminosity(buffer, cursor, channel, value) ⇒ <code>number</code>
Creates a payload with type LUMINOSITY.
unit = UNIT.LUX

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| buffer | <code>object</code> | Empty buffer. |
| cursor | <code>number</code> | Writing position. |
| channel | <code>number</code> | The channel for this sensor. |
| value | <code>number</code> | An unsigned int16 value. 0-65535. |

<a name="addPresence"></a>

## addPresence(buffer, cursor, channel, value) ⇒ <code>number</code>
Creates a payload with type PRESENCE.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| buffer | <code>object</code> | Empty buffer. |
| cursor | <code>number</code> | Writing position. |
| channel | <code>number</code> | The channel for this sensor. |
| value | <code>number</code> | An unsigned value. 0-1 |

<a name="addTemperature"></a>

## addTemperature(buffer, cursor, channel, value) ⇒ <code>number</code>
Creates a payload with type TEMPERATURE.
unit = UNIT.CELSIUS

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| buffer | <code>object</code> | Empty buffer. |
| cursor | <code>number</code> | Writing position. |
| channel | <code>number</code> | The channel for this sensor. |
| value | <code>number</code> | A floating point number accurate to one decimal place. lodash.floor(value, 1) |

<a name="addRelativeHumidity"></a>

## addRelativeHumidity(buffer, cursor, channel, value) ⇒ <code>number</code>
Creates a payload with type HUMIDITY.
unit = UNIT.PERCENT

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| buffer | <code>object</code> | Empty buffer. |
| cursor | <code>number</code> | Writing position. |
| channel | <code>number</code> | The channel for this sensor. |
| value | <code>number</code> | A floating point number (%) accurate to one decimal place in 0.5 increments. Math.floor10(value, -1) |

<a name="addAccelerometer"></a>

## addAccelerometer(buffer, cursor, channel, value) ⇒ <code>number</code>
Creates a payload with type ACCELEROMETER.
unit = UNIT.UNDEFINED

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| buffer | <code>object</code> | Empty buffer. |
| cursor | <code>number</code> | Writing position. |
| channel | <code>number</code> | The channel for this sensor. |
| value | <code>object</code> | Object containing X, Y, Z value |

<a name="addBarometer"></a>

## addBarometer(buffer, cursor, channel, value) ⇒ <code>number</code>
Creates a payload with type BAROMETER.
unit = UNIT.PRESSURE

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| buffer | <code>object</code> | Empty buffer. |
| cursor | <code>number</code> | Writing position. |
| channel | <code>number</code> | The channel for this sensor. |
| value | <code>number</code> | A floating point number accurate to one decimal place. lodash.floor(value, 1) |

<a name="addUnixTime"></a>

## addUnixTime(buffer, cursor, channel, value) ⇒ <code>number</code>
Creates a payload with type UNIXTIME.
unit = UNIT.UNDEFINED

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| buffer | <code>object</code> | Empty buffer. |
| cursor | <code>number</code> | Writing position. |
| channel | <code>number</code> | The channel for this sensor. |
| value | <code>object</code> | Date() object |

<a name="addGyrometer"></a>

## addGyrometer(buffer, cursor, channel, value) ⇒ <code>number</code>
Creates a payload with type GYROMETER.
unit = UNIT.UNDEFINED

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| buffer | <code>object</code> | Empty buffer. |
| cursor | <code>number</code> | Writing position. |
| channel | <code>number</code> | The channel for this sensor. |
| value | <code>object</code> | Object containing X, Y, Z value |

<a name="addLocation"></a>

## addLocation(buffer, cursor, channel, value) ⇒ <code>number</code>
Creates a payload with type LOCATION.
unit = UNIT.UNDEFINED

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| buffer | <code>object</code> | Empty buffer. |
| cursor | <code>number</code> | Writing position. |
| channel | <code>number</code> | The channel for this sensor. |
| value | <code>object</code> | Object containing latitude and longitude value |

<a name="getPayload"></a>

## getPayload(buffer, cursor) ⇒ <code>object</code>
Reading the composed buffer from 0 to the cursor position.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| buffer | <code>object</code> | Empty buffer. |
| cursor | <code>int</code> | Writing position. |

<a name="cayenneBufferEncoder"></a>

## cayenneBufferEncoder(buffer, type, channel, value) ⇒ <code>object</code> \| <code>null</code>
Filling the buffer with desired sensor parameters and value

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| buffer | <code>object</code> | Empty buffer. |
| type | <code>number</code> | CayenneLPP type. |
| channel | <code>number</code> | CayenneLPP Channel ( max value: 99 ). |
| value | <code>number</code> \| <code>object</code> | sensor value. |

<a name="cayenneEncoder"></a>

## cayenneEncoder(instance) ⇒ <code>object</code> \| <code>null</code>
Convert incoming Aloes Client data to [CayenneLPP](/cayennelpp/#cayennelpp)
pattern - '+appEui/+type/+method/+gatewayId/#device'

**Kind**: global function  
**Throws**:

- <code>Error</code> 'Invalid instance'


| Param | Type | Description |
| --- | --- | --- |
| instance | <code>object</code> | Sensor instance. |

<a name="external_OmaObjects"></a>

## OmaObjects
Oma Object References.

**Kind**: global external  
**See**: [https://aloes.io/app/api/omaObjects](https://aloes.io/app/api/omaObjects)  
<a name="external_OmaResources"></a>

## OmaResources
Oma Resources References.

**Kind**: global external  
**See**: [https://aloes.io/app/api/omaResources](https://aloes.io/app/api/omaResources)  
<a name="external_CayenneLPP"></a>

## CayenneLPP
Cayenne Low Power Payload.

**Kind**: global external  
**See**: [https://mydevices.com/cayenne/docs/lora/#lora-cayenne-low-power-payload](https://mydevices.com/cayenne/docs/lora/#lora-cayenne-low-power-payload)  
