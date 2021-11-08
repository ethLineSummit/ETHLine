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


export class AddressServiceClient {
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

  methodInfoonline = new grpcWeb.MethodDescriptor(
    '/AddressService/online',
    grpcWeb.MethodType.SERVER_STREAMING,
    v1_core_payload_pb.PayloadWrap,
    v1_core_payload_pb.PayloadWrap,
    (request: v1_core_payload_pb.PayloadWrap) => {
      return request.serializeBinary();
    },
    v1_core_payload_pb.PayloadWrap.deserializeBinary
  );

  online(
    request: v1_core_payload_pb.PayloadWrap,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/AddressService/online',
      request,
      metadata || {},
      this.methodInfoonline);
  }

}

