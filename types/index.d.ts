export type Value = string | number | object;

export type Sensor = {
  name: string;
  devEui: string;
  value: Value;
  type: number;
  resources?: object;
  resource: number;
  createdAt: Date;
  lastSignal: Date;
  frameCounter: number;
  icons?: string[];
  colors?: object;
  transportProtocol: string;
  transportProtocolVersion?: string;
  messageProtocol: string;
  messageProtocolVersion?: string;
  nativeSensorId: string;
  nativeNodeId?: string;
  nativeType: number;
  nativeResource?: number;
  inputPath?: string;
  outputPath?: string;
  inPrefix?: string;
  outPrefix?: string;
};

export type LoraPacketBuffer = {
  PHYPayload: Buffer;
  MHDR: Buffer;
  MACPayload: Buffer;
  MACPayloadWithMIC: Buffer;
  // isJoinRequestMessage
  AppEUI?: Buffer;
  DevEUI?: Buffer;
  DevNonce?: Buffer;
  MIC: Buffer;
  // isJoinAcceptMessage
  AppNonce?: Buffer;
  NetID?: Buffer;
  DevAddr?: Buffer;
  DLSettings?: Buffer;
  RxDelay?: Buffer;
  CFList?: Buffer;
  // isDataMessage
  FCtrl?: Buffer;
  FOpts?: Buffer;
  FHDR?: Buffer;
  // DevAddr:? Buffer;
  FCnt?: Buffer;
  FPort?: Buffer;
  FRMPayload?: Buffer;
};

export type LoraPacket = {
  getPacket: () => LoraPacketBuffer;
  isJoinRequestMessage: () => boolean;
  isJoinAcceptMessage: () => boolean;
  isDataMessage: () => boolean;
  getMType: () => Methods;
  getDir: () => Directions;
  getFPort: () => number;
  getFCnt: () => number;
  // getCFListFreqChFour: () => Buffer;
  // getCFListFreqChEight: () => Buffer;
  getPHYPayload: () => LoraPacketBuffer['PHYPayload'];
  getBuffers: () => LoraPacketBuffer;
  toString: () => string;
};

export declare const DIGITAL_INPUT = 0x00;
export declare const DIGITAL_OUTPUT = 0x01;
export declare const ANALOG_INPUT = 0x02;
export declare const ANALOG_OUTPUT = 0x03;
export declare const LUMINOSITY = 0x65;
export declare const PRESENCE = 0x66;
export declare const TEMPERATURE = 0x67;
export declare const HUMIDITY = 0x68;
export declare const ACCELEROMETER = 0x71;
export declare const BAROMETER = 0x73;
export declare const UNIXTIME = 0x85;
export declare const GYROMETER = 0x86;
export declare const LOCATION = 0x88;

export enum SensorTypes {
  DIGITAL_INPUT,
  DIGITAL_OUTPUT,
  ANALOG_INPUT,
  ANALOG_OUTPUT,
  LUMINOSITY,
  PRESENCE,
  TEMPERATURE,
  HUMIDITY,
  ACCELEROMETER,
  BAROMETER,
  UNIXTIME,
  GYROMETER,
  LOCATION,
}

export enum OuputMethods {
  'HEAD',
  'POST',
  'GET',
  'PUT',
  'DELETE',
  'STREAM',
}

export enum Methods {
  'Join Request',
  'Join Accept',
  'Unconfirmed Data Up',
  'Unconfirmed Data Down',
  'Confirmed Data Up',
  'Confirmed Data Down',
  'RFU',
  'Proprietary',
}

export enum Directions {
  'up',
  'down',
}

export type Channels = {
  // [key: SensorTypes]: {[key : OMAResources] : Value};
  [key: string]: {[key: string]: Value};
};

export type CayenneLPPProtocol = {
  appEui: string;
  devEui?: string;
  devAddr?: string;
  frameCounter?: number;
  method: Methods;
  direction: Directions;
  packet: LoraPacket;
};

export type Pattern = {
  name: string;
  params: CayenneLPPProtocol;
};

export type Packet = {
  topic: string;
  payload: Value;
};

export declare function cayenneBufferEncoder(
  buffer: Buffer,
  type: number,
  channel: number,
  value: Value,
): Buffer | null;

export declare function cayenneEncoder(instance: Sensor): Buffer | null;

export declare function cayenneBufferDecoder(packet: LoraPacket): Channels;

export declare function cayenneToOmaObject(
  packet: LoraPacket,
  protocol: CayenneLPPProtocol,
): Sensor[] | null;

export declare function cayenneToOmaResources(
  packet: LoraPacket,
  protocol: CayenneLPPProtocol,
): Sensor[] | null;

export declare function cayenneDecoder(
  packet: LoraPacket,
  protocol: CayenneLPPProtocol,
): (packet: LoraPacket, protocol: CayenneLPPProtocol) => Sensor[] | null;

export declare function cayennePatternDetector(
  payload: Packet['payload'],
): Pattern | null;
