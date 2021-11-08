import * as jspb from 'google-protobuf'

import * as v1_core_payload_pb from '../../v1/core/payload_pb';
import * as v1_core_result_pb from '../../v1/core/result_pb';


export class ChatMessageWrap extends jspb.Message {
  getUuid(): number;
  setUuid(value: number): ChatMessageWrap;

  getTimestamp(): number;
  setTimestamp(value: number): ChatMessageWrap;

  getPayload(): v1_core_payload_pb.Payload | undefined;
  setPayload(value?: v1_core_payload_pb.Payload): ChatMessageWrap;
  hasPayload(): boolean;
  clearPayload(): ChatMessageWrap;

  getType(): number;
  setType(value: number): ChatMessageWrap;

  getAddress(): string;
  setAddress(value: string): ChatMessageWrap;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatMessageWrap.AsObject;
  static toObject(includeInstance: boolean, msg: ChatMessageWrap): ChatMessageWrap.AsObject;
  static serializeBinaryToWriter(message: ChatMessageWrap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatMessageWrap;
  static deserializeBinaryFromReader(message: ChatMessageWrap, reader: jspb.BinaryReader): ChatMessageWrap;
}

export namespace ChatMessageWrap {
  export type AsObject = {
    uuid: number,
    timestamp: number,
    payload?: v1_core_payload_pb.Payload.AsObject,
    type: number,
    address: string,
  }
}

export class ChatMessageResultPayload extends jspb.Message {
  getMessagesList(): Array<ChatMessageWrap>;
  setMessagesList(value: Array<ChatMessageWrap>): ChatMessageResultPayload;
  clearMessagesList(): ChatMessageResultPayload;
  addMessages(value?: ChatMessageWrap, index?: number): ChatMessageWrap;

  getCode(): number;
  setCode(value: number): ChatMessageResultPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatMessageResultPayload.AsObject;
  static toObject(includeInstance: boolean, msg: ChatMessageResultPayload): ChatMessageResultPayload.AsObject;
  static serializeBinaryToWriter(message: ChatMessageResultPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatMessageResultPayload;
  static deserializeBinaryFromReader(message: ChatMessageResultPayload, reader: jspb.BinaryReader): ChatMessageResultPayload;
}

export namespace ChatMessageResultPayload {
  export type AsObject = {
    messagesList: Array<ChatMessageWrap.AsObject>,
    code: number,
  }
}

