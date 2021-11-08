/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as v1_core_payload_pb from '../../v1/core/payload_pb';
import * as v1_core_result_pb from '../../v1/core/result_pb';
import * as v1_token_token_pb from '../../v1/token/token_pb';


export class TokenServiceClient {
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

  methodInfohandshake = new grpcWeb.MethodDescriptor(
    '/TokenService/handshake',
    grpcWeb.MethodType.UNARY,
    v1_token_token_pb.TokenRequest,
    v1_token_token_pb.TokenResponse,
    (request: v1_token_token_pb.TokenRequest) => {
      return request.serializeBinary();
    },
    v1_token_token_pb.TokenResponse.deserializeBinary
  );

  handshake(
    request: v1_token_token_pb.TokenRequest,
    metadata: grpcWeb.Metadata | null): Promise<v1_token_token_pb.TokenResponse>;

  handshake(
    request: v1_token_token_pb.TokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: v1_token_token_pb.TokenResponse) => void): grpcWeb.ClientReadableStream<v1_token_token_pb.TokenResponse>;

  handshake(
    request: v1_token_token_pb.TokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: v1_token_token_pb.TokenResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/TokenService/handshake',
        request,
        metadata || {},
        this.methodInfohandshake,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/TokenService/handshake',
    request,
    metadata || {},
    this.methodInfohandshake);
  }

  methodInfolive = new grpcWeb.MethodDescriptor(
    '/TokenService/live',
    grpcWeb.MethodType.UNARY,
    v1_core_payload_pb.PayloadWrap,
    v1_core_result_pb.ResultPayload,
    (request: v1_core_payload_pb.PayloadWrap) => {
      return request.serializeBinary();
    },
    v1_core_result_pb.ResultPayload.deserializeBinary
  );

  live(
    request: v1_core_payload_pb.PayloadWrap,
    metadata: grpcWeb.Metadata | null): Promise<v1_core_result_pb.ResultPayload>;

  live(
    request: v1_core_payload_pb.PayloadWrap,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: v1_core_result_pb.ResultPayload) => void): grpcWeb.ClientReadableStream<v1_core_result_pb.ResultPayload>;

  live(
    request: v1_core_payload_pb.PayloadWrap,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: v1_core_result_pb.ResultPayload) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/TokenService/live',
        request,
        metadata || {},
        this.methodInfolive,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/TokenService/live',
    request,
    metadata || {},
    this.methodInfolive);
  }

}

