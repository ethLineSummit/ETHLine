/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as v1_line_chat_line_pb from '../../v1/line/chat_line_pb';
import * as v1_core_payload_pb from '../../v1/core/payload_pb';
import * as v1_core_result_pb from '../../v1/core/result_pb';


export class ChatLineServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfotransferChatMessage = new grpcWeb.MethodDescriptor(
    '/ChatLineService/transferChatMessage',
    grpcWeb.MethodType.UNARY,
    v1_core_payload_pb.PayloadWrap,
    v1_core_result_pb.ResultPayload,
    (request: v1_core_payload_pb.PayloadWrap) => {
      return request.serializeBinary();
    },
    v1_core_result_pb.ResultPayload.deserializeBinary
  );

  transferChatMessage(
    request: v1_core_payload_pb.PayloadWrap,
    metadata: grpcWeb.Metadata | null): Promise<v1_core_result_pb.ResultPayload>;

  transferChatMessage(
    request: v1_core_payload_pb.PayloadWrap,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: v1_core_result_pb.ResultPayload) => void): grpcWeb.ClientReadableStream<v1_core_result_pb.ResultPayload>;

  transferChatMessage(
    request: v1_core_payload_pb.PayloadWrap,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: v1_core_result_pb.ResultPayload) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ChatLineService/transferChatMessage',
        request,
        metadata || {},
        this.methodInfotransferChatMessage,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ChatLineService/transferChatMessage',
    request,
    metadata || {},
    this.methodInfotransferChatMessage);
  }

  methodInfosendChatMessage = new grpcWeb.MethodDescriptor(
    '/ChatLineService/sendChatMessage',
    grpcWeb.MethodType.SERVER_STREAMING,
    v1_core_payload_pb.PayloadWrap,
    v1_line_chat_line_pb.ChatMessageResultPayload,
    (request: v1_core_payload_pb.PayloadWrap) => {
      return request.serializeBinary();
    },
    v1_line_chat_line_pb.ChatMessageResultPayload.deserializeBinary
  );

  sendChatMessage(
    request: v1_core_payload_pb.PayloadWrap,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/ChatLineService/sendChatMessage',
      request,
      metadata || {},
      this.methodInfosendChatMessage);
  }

  methodInforeceiveChatMessage = new grpcWeb.MethodDescriptor(
    '/ChatLineService/receiveChatMessage',
    grpcWeb.MethodType.SERVER_STREAMING,
    v1_core_payload_pb.PayloadWrap,
    v1_line_chat_line_pb.ChatMessageResultPayload,
    (request: v1_core_payload_pb.PayloadWrap) => {
      return request.serializeBinary();
    },
    v1_line_chat_line_pb.ChatMessageResultPayload.deserializeBinary
  );

  receiveChatMessage(
    request: v1_core_payload_pb.PayloadWrap,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/ChatLineService/receiveChatMessage',
      request,
      metadata || {},
      this.methodInforeceiveChatMessage);
  }

  methodInfohistoryChatMessage = new grpcWeb.MethodDescriptor(
    '/ChatLineService/historyChatMessage',
    grpcWeb.MethodType.SERVER_STREAMING,
    v1_core_payload_pb.PayloadWrap,
    v1_line_chat_line_pb.ChatMessageResultPayload,
    (request: v1_core_payload_pb.PayloadWrap) => {
      return request.serializeBinary();
    },
    v1_line_chat_line_pb.ChatMessageResultPayload.deserializeBinary
  );

  historyChatMessage(
    request: v1_core_payload_pb.PayloadWrap,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/ChatLineService/historyChatMessage',
      request,
      metadata || {},
      this.methodInfohistoryChatMessage);
  }

}

