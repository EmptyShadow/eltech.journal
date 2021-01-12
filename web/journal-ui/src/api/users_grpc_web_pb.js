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
proto.github.com.EmptyShadow.eltech.journal.api = require('./users_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.github.com.EmptyShadow.eltech.journal.api.UsersClient =
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
proto.github.com.EmptyShadow.eltech.journal.api.UsersPromiseClient =
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
 *   !proto.github.com.EmptyShadow.eltech.journal.api.CreateRequest,
 *   !proto.github.com.EmptyShadow.eltech.journal.api.CreateResponse>}
 */
const methodDescriptor_Users_Create = new grpc.web.MethodDescriptor(
  '/github.com.EmptyShadow.eltech.journal.api.Users/Create',
  grpc.web.MethodType.UNARY,
  proto.github.com.EmptyShadow.eltech.journal.api.CreateRequest,
  proto.github.com.EmptyShadow.eltech.journal.api.CreateResponse,
  /**
   * @param {!proto.github.com.EmptyShadow.eltech.journal.api.CreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.github.com.EmptyShadow.eltech.journal.api.CreateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.github.com.EmptyShadow.eltech.journal.api.CreateRequest,
 *   !proto.github.com.EmptyShadow.eltech.journal.api.CreateResponse>}
 */
const methodInfo_Users_Create = new grpc.web.AbstractClientBase.MethodInfo(
  proto.github.com.EmptyShadow.eltech.journal.api.CreateResponse,
  /**
   * @param {!proto.github.com.EmptyShadow.eltech.journal.api.CreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.github.com.EmptyShadow.eltech.journal.api.CreateResponse.deserializeBinary
);


/**
 * @param {!proto.github.com.EmptyShadow.eltech.journal.api.CreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.github.com.EmptyShadow.eltech.journal.api.CreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.github.com.EmptyShadow.eltech.journal.api.CreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.github.com.EmptyShadow.eltech.journal.api.UsersClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/github.com.EmptyShadow.eltech.journal.api.Users/Create',
      request,
      metadata || {},
      methodDescriptor_Users_Create,
      callback);
};


/**
 * @param {!proto.github.com.EmptyShadow.eltech.journal.api.CreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.github.com.EmptyShadow.eltech.journal.api.CreateResponse>}
 *     Promise that resolves to the response
 */
proto.github.com.EmptyShadow.eltech.journal.api.UsersPromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/github.com.EmptyShadow.eltech.journal.api.Users/Create',
      request,
      metadata || {},
      methodDescriptor_Users_Create);
};


module.exports = proto.github.com.EmptyShadow.eltech.journal.api;

