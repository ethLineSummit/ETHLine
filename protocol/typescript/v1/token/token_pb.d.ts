import * as jspb from 'google-protobuf'

import * as v1_core_payload_pb from '../../v1/core/payload_pb';
import * as v1_core_result_pb from '../../v1/core/result_pb';


export class TokenRequest extends jspb.Message {
  getPublicKey(): Uint8Array | string;
  getPublicKey_asU8(): Uint8Array;
  getPublicKey_asB64(): string;
  setPublicKey(value: Uint8Array | string): TokenRequest;

  getMessage(): Uint8Array | string;
  getMessage_asU8(): Uint8Array;
  getMessage_asB64(): string;
  setMessage(value: Uint8Array | string): TokenRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TokenRequest): TokenRequest.AsObject;
  static serializeBinaryToWriter(message: TokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenRequest;
  static deserializeBinaryFromReader(message: TokenRequest, reader: jspb.BinaryReader): TokenRequest;
}

export namespace TokenRequest {
  export type AsObject = {
    publicKey: Uint8Array | string,
    message: Uint8Array | string,
  }
}

export class TokenResponse extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): TokenResponse;

  getSurvivalTime(): number;
  setSurvivalTime(value: number): TokenResponse;

  getSeed(): Uint8Array | string;
  getSeed_asU8(): Uint8Array;
  getSeed_asB64(): string;
  setSeed(value: Uint8Array | string): TokenResponse;

  getCode(): number;
  setCode(value: number): TokenResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TokenResponse): TokenResponse.AsObject;
  static serializeBinaryToWriter(message: TokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenResponse;
  static deserializeBinaryFromReader(message: TokenResponse, reader: jspb.BinaryReader): TokenResponse;
}

export namespace TokenResponse {
  export type AsObject = {
    data: Uint8Array | string,
    survivalTime: number,
    seed: Uint8Array | string,
    code: number,
  }
}

