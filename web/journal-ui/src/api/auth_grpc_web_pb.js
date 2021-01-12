/**
 * @fileoverview gRPC-Web generated frontend stub for github.com.EmptyShadow.eltech.journal.api
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var github_com_EmptyShadow_eltech_journal_api_domain_pb = require('./github.com/EmptyShadow/eltech.journal/api/domain_pb.js')
const proto = {};
proto.github = {};
proto.github.com = {};
proto.github.com.EmptyShadow = {};
proto.github.com.EmptyShadow.eltech = {};
proto.github.com.EmptyShadow.eltech.journal = {};
proto.github.com.EmptyShadow.eltech.journal.api = require('./auth_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.github.com.EmptyShadow.eltech.journal.api.AuthClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The frontend
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
proto.github.com.EmptyShadow.eltech.journal.api.AuthPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The frontend
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
 *   !proto.github.com.EmptyShadow.eltech.journal.api.TrustRequest,
 *   !proto.github.com.EmptyShadow.eltech.journal.api.TrustResponse>}
 */
const methodDescriptor_Auth_Trust = new grpc.web.MethodDescriptor(
  '/github.com.EmptyShadow.eltech.journal.api.Auth/Trust',
  grpc.web.MethodType.UNARY,
  proto.github.com.EmptyShadow.eltech.journal.api.TrustRequest,
  proto.github.com.EmptyShadow.eltech.journal.api.TrustResponse,
  /**
   * @param {!proto.github.com.EmptyShadow.eltech.journal.api.TrustRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.github.com.EmptyShadow.eltech.journal.api.TrustResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.github.com.EmptyShadow.eltech.journal.api.TrustRequest,
 *   !proto.github.com.EmptyShadow.eltech.journal.api.TrustResponse>}
 */
const methodInfo_Auth_Trust = new grpc.web.AbstractClientBase.MethodInfo(
  proto.github.com.EmptyShadow.eltech.journal.api.TrustResponse,
  /**
   * @param {!proto.github.com.EmptyShadow.eltech.journal.api.TrustRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.github.com.EmptyShadow.eltech.journal.api.TrustResponse.deserializeBinary
);


/**
 * @param {!proto.github.com.EmptyShadow.eltech.journal.api.TrustRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.github.com.EmptyShadow.eltech.journal.api.TrustResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.github.com.EmptyShadow.eltech.journal.api.TrustResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.github.com.EmptyShadow.eltech.journal.api.AuthClient.prototype.trust =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/github.com.EmptyShadow.eltech.journal.api.Auth/Trust',
      request,
      metadata || {},
      methodDescriptor_Auth_Trust,
      callback);
};


/**
 * @param {!proto.github.com.EmptyShadow.eltech.journal.api.TrustRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.github.com.EmptyShadow.eltech.journal.api.TrustResponse>}
 *     Promise that resolves to the response
 */
proto.github.com.EmptyShadow.eltech.journal.api.AuthPromiseClient.prototype.trust =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/github.com.EmptyShadow.eltech.journal.api.Auth/Trust',
      request,
      metadata || {},
      methodDescriptor_Auth_Trust);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.github.com.EmptyShadow.eltech.journal.api.RefreshRequest,
 *   !proto.github.com.EmptyShadow.eltech.journal.api.RefreshResponse>}
 */
const methodDescriptor_Auth_Refresh = new grpc.web.MethodDescriptor(
  '/github.com.EmptyShadow.eltech.journal.api.Auth/Refresh',
  grpc.web.MethodType.UNARY,
  proto.github.com.EmptyShadow.eltech.journal.api.RefreshRequest,
  proto.github.com.EmptyShadow.eltech.journal.api.RefreshResponse,
  /**
   * @param {!proto.github.com.EmptyShadow.eltech.journal.api.RefreshRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.github.com.EmptyShadow.eltech.journal.api.RefreshResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.github.com.EmptyShadow.eltech.journal.api.RefreshRequest,
 *   !proto.github.com.EmptyShadow.eltech.journal.api.RefreshResponse>}
 */
const methodInfo_Auth_Refresh = new grpc.web.AbstractClientBase.MethodInfo(
  proto.github.com.EmptyShadow.eltech.journal.api.RefreshResponse,
  /**
   * @param {!proto.github.com.EmptyShadow.eltech.journal.api.RefreshRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.github.com.EmptyShadow.eltech.journal.api.RefreshResponse.deserializeBinary
);


/**
 * @param {!proto.github.com.EmptyShadow.eltech.journal.api.RefreshRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.github.com.EmptyShadow.eltech.journal.api.RefreshResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.github.com.EmptyShadow.eltech.journal.api.RefreshResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.github.com.EmptyShadow.eltech.journal.api.AuthClient.prototype.refresh =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/github.com.EmptyShadow.eltech.journal.api.Auth/Refresh',
      request,
      metadata || {},
      methodDescriptor_Auth_Refresh,
      callback);
};


/**
 * @param {!proto.github.com.EmptyShadow.eltech.journal.api.RefreshRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.github.com.EmptyShadow.eltech.journal.api.RefreshResponse>}
 *     Promise that resolves to the response
 */
proto.github.com.EmptyShadow.eltech.journal.api.AuthPromiseClient.prototype.refresh =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/github.com.EmptyShadow.eltech.journal.api.Auth/Refresh',
      request,
      metadata || {},
      methodDescriptor_Auth_Refresh);
};


module.exports = proto.github.com.EmptyShadow.eltech.journal.api;

