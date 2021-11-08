import * as jspb from 'google-protobuf'



export class Payload extends jspb.Message {
  getType(): Type;
  setType(value: Type): Payload;

  getEncryptionType(): EncryptionType;
  setEncryptionType(value: EncryptionType): Payload;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): Payload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Payload.AsObject;
  static toObject(includeInstance: boolean, msg: Payload): Payload.AsObject;
  static serializeBinaryToWriter(message: Payload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Payload;
  static deserializeBinaryFromReader(message: Payload, reader: jspb.BinaryReader): Payload;
}

export namespace Payload {
  export type AsObject = {
    type: Type,
    encryptionType: EncryptionType,
    data: Uint8Array | string,
  }
}

export class PayloadWrap extends jspb.Message {
  getIdentity(): Payload | undefined;
  setIdentity(value?: Payload): PayloadWrap;
  hasIdentity(): boolean;
  clearIdentity(): PayloadWrap;

  getToken(): string;
  setToken(value: string): PayloadWrap;

  getData(): Payload | undefined;
  setData(value?: Payload): PayloadWrap;
  hasData(): boolean;
  clearData(): PayloadWrap;

  getTimestamp(): number;
  setTimestamp(value: number): PayloadWrap;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PayloadWrap.AsObject;
  static toObject(includeInstance: boolean, msg: PayloadWrap): PayloadWrap.AsObject;
  static serializeBinaryToWriter(message: PayloadWrap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PayloadWrap;
  static deserializeBinaryFromReader(message: PayloadWrap, reader: jspb.BinaryReader): PayloadWrap;
}

export namespace PayloadWrap {
  export type AsObject = {
    identity?: Payload.AsObject,
    token: string,
    data?: Payload.AsObject,
    timestamp: number,
  }
}

export enum Type { 
  UNKNOWN = 0,
  JSON = 1,
  TEXT = 2,
  FILE = 3,
}
export enum EncryptionType { 
  AES_256_CBC = 0,
  NONE = 1,
  RABBIT = 2,
  SHADOW = 3,
}
