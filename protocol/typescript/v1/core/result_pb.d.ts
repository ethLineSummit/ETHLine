import * as jspb from 'google-protobuf'



export class ResultPayload extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): ResultPayload;

  getInfo(): string;
  setInfo(value: string): ResultPayload;

  getCode(): number;
  setCode(value: number): ResultPayload;

  getTimestamp(): number;
  setTimestamp(value: number): ResultPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResultPayload.AsObject;
  static toObject(includeInstance: boolean, msg: ResultPayload): ResultPayload.AsObject;
  static serializeBinaryToWriter(message: ResultPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResultPayload;
  static deserializeBinaryFromReader(message: ResultPayload, reader: jspb.BinaryReader): ResultPayload;
}

export namespace ResultPayload {
  export type AsObject = {
    data: Uint8Array | string,
    info: string,
    code: number,
    timestamp: number,
  }
}

