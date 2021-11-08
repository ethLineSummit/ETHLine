/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as v1_core_result_pb from '../../v1/core/result_pb';


export class AppServiceClient {
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

  methodInfoAndroidInfo = new grpcWeb.MethodDescriptor(
    '/AppService/AndroidInfo',
    grpcWeb.MethodType.UNARY,
    v1_core_result_pb.ResultPayload,
    v1_core_result_pb.ResultPayload,
    (request: v1_core_result_pb.ResultPayload) => {
      return request.serializeBinary();
    },
    v1_core_result_pb.ResultPayload.deserializeBinary
  );

  androidInfo(
    request: v1_core_result_pb.ResultPayload,
    metadata: grpcWeb.Metadata | null): Promise<v1_core_result_pb.ResultPayload>;

  androidInfo(
    request: v1_core_result_pb.ResultPayload,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: v1_core_result_pb.ResultPayload) => void): grpcWeb.ClientReadableStream<v1_core_result_pb.ResultPayload>;

  androidInfo(
    request: v1_core_result_pb.ResultPayload,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: v1_core_result_pb.ResultPayload) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/AppService/AndroidInfo',
        request,
        metadata || {},
        this.methodInfoAndroidInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/AppService/AndroidInfo',
    request,
    metadata || {},
    this.methodInfoAndroidInfo);
  }

}

