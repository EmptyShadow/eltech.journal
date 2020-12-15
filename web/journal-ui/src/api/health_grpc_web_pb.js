/**
 * @fileoverview gRPC-Web generated client stub for github.com.EmptyShadow.eltech.journal.api
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.github = {};
proto.github.com = {};
proto.github.com.EmptyShadow = {};
proto.github.com.EmptyShadow.eltech = {};
proto.github.com.EmptyShadow.eltech.journal = {};
proto.github.com.EmptyShadow.eltech.journal.api = require('./health_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.github.com.EmptyShadow.eltech.journal.api.HealthClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.github.com.EmptyShadow.eltech.journal.api.HealthPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.github.com.EmptyShadow.eltech.journal.api.HealthCheckRequest,
 *   !proto.github.com.EmptyShadow.eltech.journal.api.HealthCheckResponse>}
 */
const methodDescriptor_Health_Check = new grpc.web.MethodDescriptor(
  '/github.com.EmptyShadow.eltech.journal.api.Health/Check',
  grpc.web.MethodType.UNARY,
  proto.github.com.EmptyShadow.eltech.journal.api.HealthCheckRequest,
  proto.github.com.EmptyShadow.eltech.journal.api.HealthCheckResponse,
  /**
   * @param {!proto.github.com.EmptyShadow.eltech.journal.api.HealthCheckRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.github.com.EmptyShadow.eltech.journal.api.HealthCheckResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.github.com.EmptyShadow.eltech.journal.api.HealthCheckRequest,
 *   !proto.github.com.EmptyShadow.eltech.journal.api.HealthCheckResponse>}
 */
const methodInfo_Health_Check = new grpc.web.AbstractClientBase.MethodInfo(
  proto.github.com.EmptyShadow.eltech.journal.api.HealthCheckResponse,
  /**
   * @param {!proto.github.com.EmptyShadow.eltech.journal.api.HealthCheckRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.github.com.EmptyShadow.eltech.journal.api.HealthCheckResponse.deserializeBinary
);


/**
 * @param {!proto.github.com.EmptyShadow.eltech.journal.api.HealthCheckRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.github.com.EmptyShadow.eltech.journal.api.HealthCheckResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.github.com.EmptyShadow.eltech.journal.api.HealthCheckResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.github.com.EmptyShadow.eltech.journal.api.HealthClient.prototype.check =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/github.com.EmptyShadow.eltech.journal.api.Health/Check',
      request,
      metadata || {},
      methodDescriptor_Health_Check,
      callback);
};


/**
 * @param {!proto.github.com.EmptyShadow.eltech.journal.api.HealthCheckRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.github.com.EmptyShadow.eltech.journal.api.HealthCheckResponse>}
 *     Promise that resolves to the response
 */
proto.github.com.EmptyShadow.eltech.journal.api.HealthPromiseClient.prototype.check =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/github.com.EmptyShadow.eltech.journal.api.Health/Check',
      request,
      metadata || {},
      methodDescriptor_Health_Check);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.github.com.EmptyShadow.eltech.journal.api.HealthCheckRequest,
 *   !proto.github.com.EmptyShadow.eltech.journal.api.HealthCheckResponse>}
 */
const methodDescriptor_Health_Watch = new grpc.web.MethodDescriptor(
  '/github.com.EmptyShadow.eltech.journal.api.Health/Watch',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.github.com.EmptyShadow.eltech.journal.api.HealthCheckRequest,
  proto.github.com.EmptyShadow.eltech.journal.api.HealthCheckResponse,
  /**
   * @param {!proto.github.com.EmptyShadow.eltech.journal.api.HealthCheckRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.github.com.EmptyShadow.eltech.journal.api.HealthCheckResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.github.com.EmptyShadow.eltech.journal.api.HealthCheckRequest,
 *   !proto.github.com.EmptyShadow.eltech.journal.api.HealthCheckResponse>}
 */
const methodInfo_Health_Watch = new grpc.web.AbstractClientBase.MethodInfo(
  proto.github.com.EmptyShadow.eltech.journal.api.HealthCheckResponse,
  /**
   * @param {!proto.github.com.EmptyShadow.eltech.journal.api.HealthCheckRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.github.com.EmptyShadow.eltech.journal.api.HealthCheckResponse.deserializeBinary
);


/**
 * @param {!proto.github.com.EmptyShadow.eltech.journal.api.HealthCheckRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.github.com.EmptyShadow.eltech.journal.api.HealthCheckResponse>}
 *     The XHR Node Readable Stream
 */
proto.github.com.EmptyShadow.eltech.journal.api.HealthClient.prototype.watch =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/github.com.EmptyShadow.eltech.journal.api.Health/Watch',
      request,
      metadata || {},
      methodDescriptor_Health_Watch);
};


/**
 * @param {!proto.github.com.EmptyShadow.eltech.journal.api.HealthCheckRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.github.com.EmptyShadow.eltech.journal.api.HealthCheckResponse>}
 *     The XHR Node Readable Stream
 */
proto.github.com.EmptyShadow.eltech.journal.api.HealthPromiseClient.prototype.watch =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/github.com.EmptyShadow.eltech.journal.api.Health/Watch',
      request,
      metadata || {},
      methodDescriptor_Health_Watch);
};


module.exports = proto.github.com.EmptyShadow.eltech.journal.api;

