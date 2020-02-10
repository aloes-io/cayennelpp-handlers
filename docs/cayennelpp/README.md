## Objects

<dl>
<dt><a href="#protocolRef">protocolRef</a> : <code>object</code></dt>
<dd><p>References used to validate payloads</p>
<p>LPP_TYPE = IPSO_OBJECT_ID - 3200</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#getAnalogInput">getAnalogInput()</a> ⇒</dt>
<dd><p>Return a float value and
increment the buffer cursor</p>
</dd>
<dt><a href="#getDigitalInput">getDigitalInput()</a> ⇒</dt>
<dd><p>Return an integer value</p>
</dd>
<dt><a href="#getLuminosity">getLuminosity()</a> ⇒</dt>
<dd><p>Return a luminosity in Lux and
increment the buffer cursor</p>
</dd>
<dt><a href="#getPresence">getPresence()</a> ⇒</dt>
<dd><p>Return an integer value</p>
</dd>
<dt><a href="#getTemperature">getTemperature()</a> ⇒</dt>
<dd><p>Return a temperature and
increment the buffer cursor</p>
</dd>
<dt><a href="#getRelativeHumidity">getRelativeHumidity()</a> ⇒</dt>
<dd><p>Return a relative humidity value in percents and
increment the buffer cursor</p>
</dd>
<dt><a href="#getAccelerometer">getAccelerometer()</a> ⇒</dt>
<dd><p>Return axis coordinates and
increment the buffer cursor</p>
</dd>
<dt><a href="#getBarometer">getBarometer()</a> ⇒</dt>
<dd><p>Return a pressure and
increment the buffer cursor</p>
</dd>
<dt><a href="#getUnixTime">getUnixTime()</a> ⇒</dt>
<dd><p>Return a timestamp and
increment the buffer cursor</p>
</dd>
<dt><a href="#getGyrometer">getGyrometer()</a> ⇒</dt>
<dd><p>Return axis coordinates and
increment the buffer cursor</p>
</dd>
<dt><a href="#getLocation">getLocation()</a> ⇒</dt>
<dd><p>Return location coordinates and
increment the buffer cursor</p>
</dd>
<dt><a href="#cayenneBufferDecoder">cayenneBufferDecoder(packet)</a> ⇒ <code>object</code></dt>
<dd><p>Decode LoraWan buffer containing a <a href="/cayennelpp/#cayennelpp">CayenneLPP</a> payload</p>
</dd>
<dt><a href="#cayenneToOmaObject">cayenneToOmaObject(packet, protocol)</a> ⇒ <code>Array.&lt;object&gt;</code></dt>
<dd><p>Find corresponding <a href="/cayennelpp/#omaobjects">OMA Object</a> to incoming <a href="/cayennelpp/#cayennelpp">CayenneLPP</a> datas
pattern - &#39;+appEui/+type/+method/+gatewayId/#device&#39;</p>
</dd>
<dt><a href="#cayenneToOmaResources">cayenneToOmaResources(packet, protocol)</a> ⇒ <code>Array.&lt;object&gt;</code></dt>
<dd><p>Find corresponding <a href="/cayennelpp/#omaresources">OMA Resources</a> to incoming <a href="/cayennelpp/#cayennelpp">CayenneLPP</a> datas
pattern - &#39;+appEui/+type/+method/+gatewayId/#device&#39;</p>
</dd>
<dt><a href="#cayenneDecoder">cayenneDecoder(packet, protocol)</a> ⇒ <code>functions</code></dt>
<dd><p>Convert incoming <a href="/cayennelpp/#cayennelpp">CayenneLPP</a> data to Aloes Client sensor instance
pattern - &quot;+prefixedDevEui/+nodeId/+sensorId/+method/+ack/+subType&quot;</p>
</dd>
<dt><a href="#cayennePatternDetector">cayennePatternDetector(packet)</a> ⇒ <code>object</code></dt>
<dd><p>Check incoming MQTT packet.payload against <a href="/cayennelpp/#cayennelpp">CayenneLPP</a>
pattern &#39;+appEui/+type/+method/+gatewayId/#device&#39;</p>
</dd>
<dt><a href="#validate">validate(channel)</a></dt>
<dd><p>Validate chosen channel</p>
</dd>
<dt><a href="#addAnalogInput">addAnalogInput(buffer, cursor, channel, value)</a></dt>
<dd><p>Creates a payload with type ANALOG_INPUT.
unit = UNIT.UNDEFINED</p>
</dd>
<dt><a href="#addDigitalInput">addDigitalInput(buffer, cursor, channel, value)</a></dt>
<dd><p>Creates a payload with type DIGITAL_INPUT.
unit = UNIT.UNDEFINED</p>
</dd>
<dt><a href="#addLuminosity">addLuminosity(buffer, cursor, channel, value)</a></dt>
<dd><p>Creates a payload with type LUMINOSITY.
unit = UNIT.LUX</p>
</dd>
<dt><a href="#addTemperature">addTemperature(buffer, cursor, channel, value)</a></dt>
<dd><p>Creates a payload with type TEMPERATURE.
unit = UNIT.CELSIUS</p>
</dd>
<dt><a href="#addRelativeHumidity">addRelativeHumidity(buffer, cursor, channel, value)</a></dt>
<dd><p>Creates a payload with type HUMIDITY.
unit = UNIT.PERCENT</p>
</dd>
<dt><a href="#addAccelerometer">addAccelerometer(buffer, cursor, channel, value)</a></dt>
<dd><p>Creates a payload with type ACCELEROMETER.
unit = UNIT.UNDEFINED</p>
</dd>
<dt><a href="#addBarometer">addBarometer(buffer, cursor, channel, value)</a></dt>
<dd><p>Creates a payload with type BAROMETER.
unit = UNIT.PRESSURE</p>
</dd>
<dt><a href="#addUnixTime">addUnixTime(buffer, cursor, channel, value)</a></dt>
<dd><p>Creates a payload with type UNIXTIME.
unit = UNIT.UNDEFINED</p>
</dd>
<dt><a href="#addGyrometer">addGyrometer(buffer, cursor, channel, value)</a></dt>
<dd><p>Creates a payload with type GYROMETER.
unit = UNIT.UNDEFINED</p>
</dd>
<dt><a href="#addLocation">addLocation(buffer, cursor, channel, value)</a></dt>
<dd><p>Creates a payload with type LOCATION.
unit = UNIT.UNDEFINED</p>
</dd>
<dt><a href="#getPayload">getPayload(buffer, cursor)</a></dt>
<dd><p>Reading the composed buffer from 0 to the cursor position.</p>
</dd>
<dt><a href="#cayenneBufferEncoder">cayenneBufferEncoder(buffer, type, channel, value)</a></dt>
<dd><p>Filling the buffer with desired sensor parameters and value</p>
</dd>
<dt><a href="#cayenneEncoder">cayenneEncoder(packet)</a></dt>
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

<a name="getAnalogInput"></a>

## getAnalogInput() ⇒
Return a float value and
increment the buffer cursor

**Kind**: global function  
**Returns**: float  
<a name="getDigitalInput"></a>

## getDigitalInput() ⇒
Return an integer value

**Kind**: global function  
**Returns**: integer  
<a name="getLuminosity"></a>

## getLuminosity() ⇒
Return a luminosity in Lux and
increment the buffer cursor

**Kind**: global function  
**Returns**: integer  
<a name="getPresence"></a>

## getPresence() ⇒
Return an integer value

**Kind**: global function  
**Returns**: integer  
<a name="getTemperature"></a>

## getTemperature() ⇒
Return a temperature and
increment the buffer cursor

**Kind**: global function  
**Returns**: float  
<a name="getRelativeHumidity"></a>

## getRelativeHumidity() ⇒
Return a relative humidity value in percents and
increment the buffer cursor

**Kind**: global function  
**Returns**: float  
<a name="getAccelerometer"></a>

## getAccelerometer() ⇒
Return axis coordinates and
increment the buffer cursor

**Kind**: global function  
**Returns**: object  
<a name="getBarometer"></a>

## getBarometer() ⇒
Return a pressure and
increment the buffer cursor

**Kind**: global function  
**Returns**: float  
<a name="getUnixTime"></a>

## getUnixTime() ⇒
Return a timestamp and
increment the buffer cursor

**Kind**: global function  
**Returns**: float  
<a name="getGyrometer"></a>

## getGyrometer() ⇒
Return axis coordinates and
increment the buffer cursor

**Kind**: global function  
**Returns**: object  
<a name="getLocation"></a>

## getLocation() ⇒
Return location coordinates and
increment the buffer cursor

**Kind**: global function  
**Returns**: object  
<a name="cayenneBufferDecoder"></a>

## cayenneBufferDecoder(packet) ⇒ <code>object</code>
Decode LoraWan buffer containing a [CayenneLPP](/cayennelpp/#cayennelpp) payload

**Kind**: global function  
**Returns**: <code>object</code> - Decoded channels  

| Param | Type | Description |
| --- | --- | --- |
| packet | <code>buffer</code> | Incoming Lora packet. |

<a name="cayenneToOmaObject"></a>

## cayenneToOmaObject(packet, protocol) ⇒ <code>Array.&lt;object&gt;</code>
Find corresponding [OMA Object](/cayennelpp/#omaobjects) to incoming [CayenneLPP](/cayennelpp/#cayennelpp) datas
pattern - '+appEui/+type/+method/+gatewayId/#device'

**Kind**: global function  
**Returns**: <code>Array.&lt;object&gt;</code> - composed instances  

| Param | Type | Description |
| --- | --- | --- |
| packet | <code>buffer</code> | Incoming MQTT (Lora) packet. |
| protocol | <code>object</code> | Protocol paramters ( coming from patternDetector ). |

<a name="cayenneToOmaResources"></a>

## cayenneToOmaResources(packet, protocol) ⇒ <code>Array.&lt;object&gt;</code>
Find corresponding [OMA Resources](/cayennelpp/#omaresources) to incoming [CayenneLPP](/cayennelpp/#cayennelpp) datas
pattern - '+appEui/+type/+method/+gatewayId/#device'

**Kind**: global function  
**Returns**: <code>Array.&lt;object&gt;</code> - composed instances  

| Param | Type | Description |
| --- | --- | --- |
| packet | <code>buffer</code> | Incoming MQTT (Lora) packet. |
| protocol | <code>object</code> | Protocol paramters ( coming from patternDetector ). |

<a name="cayenneDecoder"></a>

## cayenneDecoder(packet, protocol) ⇒ <code>functions</code>
Convert incoming [CayenneLPP](/cayennelpp/#cayennelpp) data to Aloes Client sensor instance
pattern - "+prefixedDevEui/+nodeId/+sensorId/+method/+ack/+subType"

**Kind**: global function  
**Returns**: <code>functions</code> - cayenneToOmaObject | cayenneToOmaResources  

| Param | Type | Description |
| --- | --- | --- |
| packet | <code>object</code> | Incoming MQTT (Lora) packet. |
| protocol | <code>object</code> | Protocol paramters ( coming from patternDetector ). |

<a name="cayennePatternDetector"></a>

## cayennePatternDetector(packet) ⇒ <code>object</code>
Check incoming MQTT packet.payload against [CayenneLPP](/cayennelpp/#cayennelpp)
pattern '+appEui/+type/+method/+gatewayId/#device'

**Kind**: global function  
**Returns**: <code>object</code> - found pattern.name and pattern.params  

| Param | Type | Description |
| --- | --- | --- |
| packet | <code>object</code> | The MQTT packet, including LoraWan PHYPayload. |

<a name="validate"></a>

## validate(channel)
Validate chosen channel

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| channel | <code>int</code> | The channel selected |

<a name="addAnalogInput"></a>

## addAnalogInput(buffer, cursor, channel, value)
Creates a payload with type ANALOG_INPUT.
unit = UNIT.UNDEFINED

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| buffer | <code>object</code> | Empty buffer. |
| cursor | <code>int</code> | Writing position. |
| channel | <code>int</code> | The channel for this sensor. |
| value | <code>float</code> | A floating point number accurate to two decimal place. lodash.floor(value, 2) |

<a name="addDigitalInput"></a>

## addDigitalInput(buffer, cursor, channel, value)
Creates a payload with type DIGITAL_INPUT.
unit = UNIT.UNDEFINED

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| buffer | <code>object</code> | Empty buffer. |
| cursor | <code>int</code> | Writing position. |
| channel | <code>int</code> | The channel for this sensor. |
| value | <code>int</code> | The value, unsigned int8, should be 0 or 1. |

<a name="addLuminosity"></a>

## addLuminosity(buffer, cursor, channel, value)
Creates a payload with type LUMINOSITY.
unit = UNIT.LUX

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| buffer | <code>object</code> | Empty buffer. |
| cursor | <code>int</code> | Writing position. |
| channel | <code>int</code> | The channel for this sensor. |
| value | <code>float</code> | An unsigned int16 value. 0-65535. |

<a name="addTemperature"></a>

## addTemperature(buffer, cursor, channel, value)
Creates a payload with type TEMPERATURE.
unit = UNIT.CELSIUS

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| buffer | <code>object</code> | Empty buffer. |
| cursor | <code>int</code> | Writing position. |
| channel | <code>int</code> | The channel for this sensor. |
| value | <code>float</code> | A floating point number accurate to one decimal place. lodash.floor(value, 1) |

<a name="addRelativeHumidity"></a>

## addRelativeHumidity(buffer, cursor, channel, value)
Creates a payload with type HUMIDITY.
unit = UNIT.PERCENT

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| buffer | <code>object</code> | Empty buffer. |
| cursor | <code>int</code> | Writing position. |
| channel | <code>int</code> | The channel for this sensor. |
| value | <code>float</code> | A floating point number (%) accurate to one decimal place in 0.5 increments. Math.floor10(value, -1) |

<a name="addAccelerometer"></a>

## addAccelerometer(buffer, cursor, channel, value)
Creates a payload with type ACCELEROMETER.
unit = UNIT.UNDEFINED

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| buffer | <code>object</code> | Empty buffer. |
| cursor | <code>int</code> | Writing position. |
| channel | <code>int</code> | The channel for this sensor. |
| value | <code>object</code> | Object containing X, Y, Z value |

<a name="addBarometer"></a>

## addBarometer(buffer, cursor, channel, value)
Creates a payload with type BAROMETER.
unit = UNIT.PRESSURE

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| buffer | <code>object</code> | Empty buffer. |
| cursor | <code>int</code> | Writing position. |
| channel | <code>int</code> | The channel for this sensor. |
| value | <code>float</code> | A floating point number accurate to one decimal place. lodash.floor(value, 1) |

<a name="addUnixTime"></a>

## addUnixTime(buffer, cursor, channel, value)
Creates a payload with type UNIXTIME.
unit = UNIT.UNDEFINED

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| buffer | <code>object</code> | Empty buffer. |
| cursor | <code>int</code> | Writing position. |
| channel | <code>int</code> | The channel for this sensor. |
| value | <code>object</code> | Date() object |

<a name="addGyrometer"></a>

## addGyrometer(buffer, cursor, channel, value)
Creates a payload with type GYROMETER.
unit = UNIT.UNDEFINED

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| buffer | <code>object</code> | Empty buffer. |
| cursor | <code>int</code> | Writing position. |
| channel | <code>int</code> | The channel for this sensor. |
| value | <code>object</code> | Object containing X, Y, Z value |

<a name="addLocation"></a>

## addLocation(buffer, cursor, channel, value)
Creates a payload with type LOCATION.
unit = UNIT.UNDEFINED

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| buffer | <code>object</code> | Empty buffer. |
| cursor | <code>int</code> | Writing position. |
| channel | <code>int</code> | The channel for this sensor. |
| value | <code>object</code> | Object containing latitude and longitude value |

<a name="getPayload"></a>

## getPayload(buffer, cursor)
Reading the composed buffer from 0 to the cursor position.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| buffer | <code>object</code> | Empty buffer. |
| cursor | <code>int</code> | Writing position. |

<a name="cayenneBufferEncoder"></a>

## cayenneBufferEncoder(buffer, type, channel, value)
Filling the buffer with desired sensor parameters and value

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| buffer | <code>object</code> | Empty buffer. |
| type | <code>int</code> | CayenneLPP type. |
| channel | <code>int</code> | CayenneLPP Channel ( max value: 99 ). |
| value | <code>float</code> | sensor value. |

<a name="cayenneEncoder"></a>

## cayenneEncoder(packet)
Convert incoming Aloes Client data to [CayenneLPP](/cayennelpp/#cayennelpp)
pattern - '+appEui/+type/+method/+gatewayId/#device'

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| packet | <code>object</code> | Sensor instance. |

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
