/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as v1_broadcast_ping_pb from '../../v1/broadcast/ping_pb';


export class PingServiceClient {
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

  methodInfoServerInfo = new grpcWeb.MethodDescriptor(
    '/PingService/ServerInfo',
    grpcWeb.MethodType.UNARY,
    v1_broadcast_ping_pb.PingRequest,
    v1_broadcast_ping_pb.PingResponse,
    (request: v1_broadcast_ping_pb.PingRequest) => {
      return request.serializeBinary();
    },
    v1_broadcast_ping_pb.PingResponse.deserializeBinary
  );

  serverInfo(
    request: v1_broadcast_ping_pb.PingRequest,
    metadata: grpcWeb.Metadata | null): Promise<v1_broadcast_ping_pb.PingResponse>;

  serverInfo(
    request: v1_broadcast_ping_pb.PingRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: v1_broadcast_ping_pb.PingResponse) => void): grpcWeb.ClientReadableStream<v1_broadcast_ping_pb.PingResponse>;

  serverInfo(
    request: v1_broadcast_ping_pb.PingRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: v1_broadcast_ping_pb.PingResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/PingService/ServerInfo',
        request,
        metadata || {},
        this.methodInfoServerInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/PingService/ServerInfo',
    request,
    metadata || {},
    this.methodInfoServerInfo);
  }

}

