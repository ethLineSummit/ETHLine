import * as jspb from 'google-protobuf'



export class PingRequest extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): PingRequest;

  getTimestamp(): number;
  setTimestamp(value: number): PingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PingRequest): PingRequest.AsObject;
  static serializeBinaryToWriter(message: PingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PingRequest;
  static deserializeBinaryFromReader(message: PingRequest, reader: jspb.BinaryReader): PingRequest;
}

export namespace PingRequest {
  export type AsObject = {
    message: string,
    timestamp: number,
  }
}

export class PingResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): PingResponse;

  getHandleTimestamp(): number;
  setHandleTimestamp(value: number): PingResponse;

  getTimestamp(): number;
  setTimestamp(value: number): PingResponse;

  getServiceid(): string;
  setServiceid(value: string): PingResponse;

  getPublicKey(): Uint8Array | string;
  getPublicKey_asU8(): Uint8Array;
  getPublicKey_asB64(): string;
  setPublicKey(value: Uint8Array | string): PingResponse;

  getSign(): string;
  setSign(value: string): PingResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PingResponse): PingResponse.AsObject;
  static serializeBinaryToWriter(message: PingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PingResponse;
  static deserializeBinaryFromReader(message: PingResponse, reader: jspb.BinaryReader): PingResponse;
}

export namespace PingResponse {
  export type AsObject = {
    message: string,
    handleTimestamp: number,
    timestamp: number,
    serviceid: string,
    publicKey: Uint8Array | string,
    sign: string,
  }
}

