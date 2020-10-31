/**
 * @fileoverview gRPC-Web generated client stub for eltech.journal.health.v0
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.eltech = {};
proto.eltech.journal = {};
proto.eltech.journal.health = {};
proto.eltech.journal.health.v0 = require('./health_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.eltech.journal.health.v0.HealthClient =
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
proto.eltech.journal.health.v0.HealthPromiseClient =
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
 *   !proto.eltech.journal.health.v0.HealthCheckRequest,
 *   !proto.eltech.journal.health.v0.HealthCheckResponse>}
 */
const methodDescriptor_Health_Check = new grpc.web.MethodDescriptor(
  '/eltech.journal.health.v0.Health/Check',
  grpc.web.MethodType.UNARY,
  proto.eltech.journal.health.v0.HealthCheckRequest,
  proto.eltech.journal.health.v0.HealthCheckResponse,
  /**
   * @param {!proto.eltech.journal.health.v0.HealthCheckRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.eltech.journal.health.v0.HealthCheckResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.eltech.journal.health.v0.HealthCheckRequest,
 *   !proto.eltech.journal.health.v0.HealthCheckResponse>}
 */
const methodInfo_Health_Check = new grpc.web.AbstractClientBase.MethodInfo(
  proto.eltech.journal.health.v0.HealthCheckResponse,
  /**
   * @param {!proto.eltech.journal.health.v0.HealthCheckRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.eltech.journal.health.v0.HealthCheckResponse.deserializeBinary
);


/**
 * @param {!proto.eltech.journal.health.v0.HealthCheckRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.eltech.journal.health.v0.HealthCheckResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.eltech.journal.health.v0.HealthCheckResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.eltech.journal.health.v0.HealthClient.prototype.check =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/eltech.journal.health.v0.Health/Check',
      request,
      metadata || {},
      methodDescriptor_Health_Check,
      callback);
};


/**
 * @param {!proto.eltech.journal.health.v0.HealthCheckRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.eltech.journal.health.v0.HealthCheckResponse>}
 *     Promise that resolves to the response
 */
proto.eltech.journal.health.v0.HealthPromiseClient.prototype.check =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/eltech.journal.health.v0.Health/Check',
      request,
      metadata || {},
      methodDescriptor_Health_Check);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.eltech.journal.health.v0.HealthCheckRequest,
 *   !proto.eltech.journal.health.v0.HealthCheckResponse>}
 */
const methodDescriptor_Health_Watch = new grpc.web.MethodDescriptor(
  '/eltech.journal.health.v0.Health/Watch',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.eltech.journal.health.v0.HealthCheckRequest,
  proto.eltech.journal.health.v0.HealthCheckResponse,
  /**
   * @param {!proto.eltech.journal.health.v0.HealthCheckRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.eltech.journal.health.v0.HealthCheckResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.eltech.journal.health.v0.HealthCheckRequest,
 *   !proto.eltech.journal.health.v0.HealthCheckResponse>}
 */
const methodInfo_Health_Watch = new grpc.web.AbstractClientBase.MethodInfo(
  proto.eltech.journal.health.v0.HealthCheckResponse,
  /**
   * @param {!proto.eltech.journal.health.v0.HealthCheckRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.eltech.journal.health.v0.HealthCheckResponse.deserializeBinary
);


/**
 * @param {!proto.eltech.journal.health.v0.HealthCheckRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.eltech.journal.health.v0.HealthCheckResponse>}
 *     The XHR Node Readable Stream
 */
proto.eltech.journal.health.v0.HealthClient.prototype.watch =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/eltech.journal.health.v0.Health/Watch',
      request,
      metadata || {},
      methodDescriptor_Health_Watch);
};


/**
 * @param {!proto.eltech.journal.health.v0.HealthCheckRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.eltech.journal.health.v0.HealthCheckResponse>}
 *     The XHR Node Readable Stream
 */
proto.eltech.journal.health.v0.HealthPromiseClient.prototype.watch =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/eltech.journal.health.v0.Health/Watch',
      request,
      metadata || {},
      methodDescriptor_Health_Watch);
};


module.exports = proto.eltech.journal.health.v0;

