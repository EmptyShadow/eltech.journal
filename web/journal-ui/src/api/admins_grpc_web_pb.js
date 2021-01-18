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


var github_com_EmptyShadow_eltech_journal_api_domain_pb = require('./github.com/EmptyShadow/eltech.journal/api/domain_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.github = {};
proto.github.com = {};
proto.github.com.EmptyShadow = {};
proto.github.com.EmptyShadow.eltech = {};
proto.github.com.EmptyShadow.eltech.journal = {};
proto.github.com.EmptyShadow.eltech.journal.api = require('./admins_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.github.com.EmptyShadow.eltech.journal.api.AdminsProfilesClient =
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
proto.github.com.EmptyShadow.eltech.journal.api.AdminsProfilesPromiseClient =
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
 *   !proto.github.com.EmptyShadow.eltech.journal.api.CreateRequest,
 *   !proto.github.com.EmptyShadow.eltech.journal.api.CreateResponse>}
 */
const methodDescriptor_AdminsProfiles_Create = new grpc.web.MethodDescriptor(
  '/github.com.EmptyShadow.eltech.journal.api.AdminsProfiles/Create',
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
const methodInfo_AdminsProfiles_Create = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.github.com.EmptyShadow.eltech.journal.api.AdminsProfilesClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/github.com.EmptyShadow.eltech.journal.api.AdminsProfiles/Create',
      request,
      metadata || {},
      methodDescriptor_AdminsProfiles_Create,
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
proto.github.com.EmptyShadow.eltech.journal.api.AdminsProfilesPromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/github.com.EmptyShadow.eltech.journal.api.AdminsProfiles/Create',
      request,
      metadata || {},
      methodDescriptor_AdminsProfiles_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.github.com.EmptyShadow.eltech.journal.api.ReadRequest,
 *   !proto.github.com.EmptyShadow.eltech.journal.api.ReadResponse>}
 */
const methodDescriptor_AdminsProfiles_Read = new grpc.web.MethodDescriptor(
  '/github.com.EmptyShadow.eltech.journal.api.AdminsProfiles/Read',
  grpc.web.MethodType.UNARY,
  proto.github.com.EmptyShadow.eltech.journal.api.ReadRequest,
  proto.github.com.EmptyShadow.eltech.journal.api.ReadResponse,
  /**
   * @param {!proto.github.com.EmptyShadow.eltech.journal.api.ReadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.github.com.EmptyShadow.eltech.journal.api.ReadResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.github.com.EmptyShadow.eltech.journal.api.ReadRequest,
 *   !proto.github.com.EmptyShadow.eltech.journal.api.ReadResponse>}
 */
const methodInfo_AdminsProfiles_Read = new grpc.web.AbstractClientBase.MethodInfo(
  proto.github.com.EmptyShadow.eltech.journal.api.ReadResponse,
  /**
   * @param {!proto.github.com.EmptyShadow.eltech.journal.api.ReadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.github.com.EmptyShadow.eltech.journal.api.ReadResponse.deserializeBinary
);


/**
 * @param {!proto.github.com.EmptyShadow.eltech.journal.api.ReadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.github.com.EmptyShadow.eltech.journal.api.ReadResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.github.com.EmptyShadow.eltech.journal.api.ReadResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.github.com.EmptyShadow.eltech.journal.api.AdminsProfilesClient.prototype.read =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/github.com.EmptyShadow.eltech.journal.api.AdminsProfiles/Read',
      request,
      metadata || {},
      methodDescriptor_AdminsProfiles_Read,
      callback);
};


/**
 * @param {!proto.github.com.EmptyShadow.eltech.journal.api.ReadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.github.com.EmptyShadow.eltech.journal.api.ReadResponse>}
 *     Promise that resolves to the response
 */
proto.github.com.EmptyShadow.eltech.journal.api.AdminsProfilesPromiseClient.prototype.read =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/github.com.EmptyShadow.eltech.journal.api.AdminsProfiles/Read',
      request,
      metadata || {},
      methodDescriptor_AdminsProfiles_Read);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.github.com.EmptyShadow.eltech.journal.api.ReadAllRequest,
 *   !proto.github.com.EmptyShadow.eltech.journal.api.ReadAllResponse>}
 */
const methodDescriptor_AdminsProfiles_ReadAll = new grpc.web.MethodDescriptor(
  '/github.com.EmptyShadow.eltech.journal.api.AdminsProfiles/ReadAll',
  grpc.web.MethodType.UNARY,
  proto.github.com.EmptyShadow.eltech.journal.api.ReadAllRequest,
  proto.github.com.EmptyShadow.eltech.journal.api.ReadAllResponse,
  /**
   * @param {!proto.github.com.EmptyShadow.eltech.journal.api.ReadAllRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.github.com.EmptyShadow.eltech.journal.api.ReadAllResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.github.com.EmptyShadow.eltech.journal.api.ReadAllRequest,
 *   !proto.github.com.EmptyShadow.eltech.journal.api.ReadAllResponse>}
 */
const methodInfo_AdminsProfiles_ReadAll = new grpc.web.AbstractClientBase.MethodInfo(
  proto.github.com.EmptyShadow.eltech.journal.api.ReadAllResponse,
  /**
   * @param {!proto.github.com.EmptyShadow.eltech.journal.api.ReadAllRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.github.com.EmptyShadow.eltech.journal.api.ReadAllResponse.deserializeBinary
);


/**
 * @param {!proto.github.com.EmptyShadow.eltech.journal.api.ReadAllRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.github.com.EmptyShadow.eltech.journal.api.ReadAllResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.github.com.EmptyShadow.eltech.journal.api.ReadAllResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.github.com.EmptyShadow.eltech.journal.api.AdminsProfilesClient.prototype.readAll =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/github.com.EmptyShadow.eltech.journal.api.AdminsProfiles/ReadAll',
      request,
      metadata || {},
      methodDescriptor_AdminsProfiles_ReadAll,
      callback);
};


/**
 * @param {!proto.github.com.EmptyShadow.eltech.journal.api.ReadAllRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.github.com.EmptyShadow.eltech.journal.api.ReadAllResponse>}
 *     Promise that resolves to the response
 */
proto.github.com.EmptyShadow.eltech.journal.api.AdminsProfilesPromiseClient.prototype.readAll =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/github.com.EmptyShadow.eltech.journal.api.AdminsProfiles/ReadAll',
      request,
      metadata || {},
      methodDescriptor_AdminsProfiles_ReadAll);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.github.com.EmptyShadow.eltech.journal.api.ReadResponse>}
 */
const methodDescriptor_AdminsProfiles_ReadMyProfile = new grpc.web.MethodDescriptor(
  '/github.com.EmptyShadow.eltech.journal.api.AdminsProfiles/ReadMyProfile',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.github.com.EmptyShadow.eltech.journal.api.ReadResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.github.com.EmptyShadow.eltech.journal.api.ReadResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.github.com.EmptyShadow.eltech.journal.api.ReadResponse>}
 */
const methodInfo_AdminsProfiles_ReadMyProfile = new grpc.web.AbstractClientBase.MethodInfo(
  proto.github.com.EmptyShadow.eltech.journal.api.ReadResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.github.com.EmptyShadow.eltech.journal.api.ReadResponse.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.github.com.EmptyShadow.eltech.journal.api.ReadResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.github.com.EmptyShadow.eltech.journal.api.ReadResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.github.com.EmptyShadow.eltech.journal.api.AdminsProfilesClient.prototype.readMyProfile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/github.com.EmptyShadow.eltech.journal.api.AdminsProfiles/ReadMyProfile',
      request,
      metadata || {},
      methodDescriptor_AdminsProfiles_ReadMyProfile,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.github.com.EmptyShadow.eltech.journal.api.ReadResponse>}
 *     Promise that resolves to the response
 */
proto.github.com.EmptyShadow.eltech.journal.api.AdminsProfilesPromiseClient.prototype.readMyProfile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/github.com.EmptyShadow.eltech.journal.api.AdminsProfiles/ReadMyProfile',
      request,
      metadata || {},
      methodDescriptor_AdminsProfiles_ReadMyProfile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.github.com.EmptyShadow.eltech.journal.api.UpdateRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_AdminsProfiles_Update = new grpc.web.MethodDescriptor(
  '/github.com.EmptyShadow.eltech.journal.api.AdminsProfiles/Update',
  grpc.web.MethodType.UNARY,
  proto.github.com.EmptyShadow.eltech.journal.api.UpdateRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.github.com.EmptyShadow.eltech.journal.api.UpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.github.com.EmptyShadow.eltech.journal.api.UpdateRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_AdminsProfiles_Update = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.github.com.EmptyShadow.eltech.journal.api.UpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.github.com.EmptyShadow.eltech.journal.api.UpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.github.com.EmptyShadow.eltech.journal.api.AdminsProfilesClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/github.com.EmptyShadow.eltech.journal.api.AdminsProfiles/Update',
      request,
      metadata || {},
      methodDescriptor_AdminsProfiles_Update,
      callback);
};


/**
 * @param {!proto.github.com.EmptyShadow.eltech.journal.api.UpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.github.com.EmptyShadow.eltech.journal.api.AdminsProfilesPromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/github.com.EmptyShadow.eltech.journal.api.AdminsProfiles/Update',
      request,
      metadata || {},
      methodDescriptor_AdminsProfiles_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_AdminsProfiles_SwitchActivity = new grpc.web.MethodDescriptor(
  '/github.com.EmptyShadow.eltech.journal.api.AdminsProfiles/SwitchActivity',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_AdminsProfiles_SwitchActivity = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.github.com.EmptyShadow.eltech.journal.api.AdminsProfilesClient.prototype.switchActivity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/github.com.EmptyShadow.eltech.journal.api.AdminsProfiles/SwitchActivity',
      request,
      metadata || {},
      methodDescriptor_AdminsProfiles_SwitchActivity,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.github.com.EmptyShadow.eltech.journal.api.AdminsProfilesPromiseClient.prototype.switchActivity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/github.com.EmptyShadow.eltech.journal.api.AdminsProfiles/SwitchActivity',
      request,
      metadata || {},
      methodDescriptor_AdminsProfiles_SwitchActivity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_AdminsProfiles_DeleteMyProfile = new grpc.web.MethodDescriptor(
  '/github.com.EmptyShadow.eltech.journal.api.AdminsProfiles/DeleteMyProfile',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_AdminsProfiles_DeleteMyProfile = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.github.com.EmptyShadow.eltech.journal.api.AdminsProfilesClient.prototype.deleteMyProfile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/github.com.EmptyShadow.eltech.journal.api.AdminsProfiles/DeleteMyProfile',
      request,
      metadata || {},
      methodDescriptor_AdminsProfiles_DeleteMyProfile,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.github.com.EmptyShadow.eltech.journal.api.AdminsProfilesPromiseClient.prototype.deleteMyProfile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/github.com.EmptyShadow.eltech.journal.api.AdminsProfiles/DeleteMyProfile',
      request,
      metadata || {},
      methodDescriptor_AdminsProfiles_DeleteMyProfile);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.github.com.EmptyShadow.eltech.journal.api.AdminsActionsClient =
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
proto.github.com.EmptyShadow.eltech.journal.api.AdminsActionsPromiseClient =
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
 *   !proto.github.com.EmptyShadow.eltech.journal.api.ReadRequest,
 *   !proto.github.com.EmptyShadow.eltech.journal.api.ReadResponse>}
 */
const methodDescriptor_AdminsActions_Read = new grpc.web.MethodDescriptor(
  '/github.com.EmptyShadow.eltech.journal.api.AdminsActions/Read',
  grpc.web.MethodType.UNARY,
  proto.github.com.EmptyShadow.eltech.journal.api.ReadRequest,
  proto.github.com.EmptyShadow.eltech.journal.api.ReadResponse,
  /**
   * @param {!proto.github.com.EmptyShadow.eltech.journal.api.ReadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.github.com.EmptyShadow.eltech.journal.api.ReadResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.github.com.EmptyShadow.eltech.journal.api.ReadRequest,
 *   !proto.github.com.EmptyShadow.eltech.journal.api.ReadResponse>}
 */
const methodInfo_AdminsActions_Read = new grpc.web.AbstractClientBase.MethodInfo(
  proto.github.com.EmptyShadow.eltech.journal.api.ReadResponse,
  /**
   * @param {!proto.github.com.EmptyShadow.eltech.journal.api.ReadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.github.com.EmptyShadow.eltech.journal.api.ReadResponse.deserializeBinary
);


/**
 * @param {!proto.github.com.EmptyShadow.eltech.journal.api.ReadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.github.com.EmptyShadow.eltech.journal.api.ReadResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.github.com.EmptyShadow.eltech.journal.api.ReadResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.github.com.EmptyShadow.eltech.journal.api.AdminsActionsClient.prototype.read =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/github.com.EmptyShadow.eltech.journal.api.AdminsActions/Read',
      request,
      metadata || {},
      methodDescriptor_AdminsActions_Read,
      callback);
};


/**
 * @param {!proto.github.com.EmptyShadow.eltech.journal.api.ReadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.github.com.EmptyShadow.eltech.journal.api.ReadResponse>}
 *     Promise that resolves to the response
 */
proto.github.com.EmptyShadow.eltech.journal.api.AdminsActionsPromiseClient.prototype.read =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/github.com.EmptyShadow.eltech.journal.api.AdminsActions/Read',
      request,
      metadata || {},
      methodDescriptor_AdminsActions_Read);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.github.com.EmptyShadow.eltech.journal.api.ReadAllRequest,
 *   !proto.github.com.EmptyShadow.eltech.journal.api.ReadAllResponse>}
 */
const methodDescriptor_AdminsActions_ReadAll = new grpc.web.MethodDescriptor(
  '/github.com.EmptyShadow.eltech.journal.api.AdminsActions/ReadAll',
  grpc.web.MethodType.UNARY,
  proto.github.com.EmptyShadow.eltech.journal.api.ReadAllRequest,
  proto.github.com.EmptyShadow.eltech.journal.api.ReadAllResponse,
  /**
   * @param {!proto.github.com.EmptyShadow.eltech.journal.api.ReadAllRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.github.com.EmptyShadow.eltech.journal.api.ReadAllResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.github.com.EmptyShadow.eltech.journal.api.ReadAllRequest,
 *   !proto.github.com.EmptyShadow.eltech.journal.api.ReadAllResponse>}
 */
const methodInfo_AdminsActions_ReadAll = new grpc.web.AbstractClientBase.MethodInfo(
  proto.github.com.EmptyShadow.eltech.journal.api.ReadAllResponse,
  /**
   * @param {!proto.github.com.EmptyShadow.eltech.journal.api.ReadAllRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.github.com.EmptyShadow.eltech.journal.api.ReadAllResponse.deserializeBinary
);


/**
 * @param {!proto.github.com.EmptyShadow.eltech.journal.api.ReadAllRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.github.com.EmptyShadow.eltech.journal.api.ReadAllResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.github.com.EmptyShadow.eltech.journal.api.ReadAllResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.github.com.EmptyShadow.eltech.journal.api.AdminsActionsClient.prototype.readAll =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/github.com.EmptyShadow.eltech.journal.api.AdminsActions/ReadAll',
      request,
      metadata || {},
      methodDescriptor_AdminsActions_ReadAll,
      callback);
};


/**
 * @param {!proto.github.com.EmptyShadow.eltech.journal.api.ReadAllRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.github.com.EmptyShadow.eltech.journal.api.ReadAllResponse>}
 *     Promise that resolves to the response
 */
proto.github.com.EmptyShadow.eltech.journal.api.AdminsActionsPromiseClient.prototype.readAll =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/github.com.EmptyShadow.eltech.journal.api.AdminsActions/ReadAll',
      request,
      metadata || {},
      methodDescriptor_AdminsActions_ReadAll);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.github.com.EmptyShadow.eltech.journal.api.ReadAllRequest,
 *   !proto.github.com.EmptyShadow.eltech.journal.api.ReadAllResponse>}
 */
const methodDescriptor_AdminsActions_ReadAllOnValidate = new grpc.web.MethodDescriptor(
  '/github.com.EmptyShadow.eltech.journal.api.AdminsActions/ReadAllOnValidate',
  grpc.web.MethodType.UNARY,
  proto.github.com.EmptyShadow.eltech.journal.api.ReadAllRequest,
  proto.github.com.EmptyShadow.eltech.journal.api.ReadAllResponse,
  /**
   * @param {!proto.github.com.EmptyShadow.eltech.journal.api.ReadAllRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.github.com.EmptyShadow.eltech.journal.api.ReadAllResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.github.com.EmptyShadow.eltech.journal.api.ReadAllRequest,
 *   !proto.github.com.EmptyShadow.eltech.journal.api.ReadAllResponse>}
 */
const methodInfo_AdminsActions_ReadAllOnValidate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.github.com.EmptyShadow.eltech.journal.api.ReadAllResponse,
  /**
   * @param {!proto.github.com.EmptyShadow.eltech.journal.api.ReadAllRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.github.com.EmptyShadow.eltech.journal.api.ReadAllResponse.deserializeBinary
);


/**
 * @param {!proto.github.com.EmptyShadow.eltech.journal.api.ReadAllRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.github.com.EmptyShadow.eltech.journal.api.ReadAllResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.github.com.EmptyShadow.eltech.journal.api.ReadAllResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.github.com.EmptyShadow.eltech.journal.api.AdminsActionsClient.prototype.readAllOnValidate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/github.com.EmptyShadow.eltech.journal.api.AdminsActions/ReadAllOnValidate',
      request,
      metadata || {},
      methodDescriptor_AdminsActions_ReadAllOnValidate,
      callback);
};


/**
 * @param {!proto.github.com.EmptyShadow.eltech.journal.api.ReadAllRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.github.com.EmptyShadow.eltech.journal.api.ReadAllResponse>}
 *     Promise that resolves to the response
 */
proto.github.com.EmptyShadow.eltech.journal.api.AdminsActionsPromiseClient.prototype.readAllOnValidate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/github.com.EmptyShadow.eltech.journal.api.AdminsActions/ReadAllOnValidate',
      request,
      metadata || {},
      methodDescriptor_AdminsActions_ReadAllOnValidate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.github.com.EmptyShadow.eltech.journal.api.SwitchStatusToActiveRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_AdminsActions_SwitchStatusToActive = new grpc.web.MethodDescriptor(
  '/github.com.EmptyShadow.eltech.journal.api.AdminsActions/SwitchStatusToActive',
  grpc.web.MethodType.UNARY,
  proto.github.com.EmptyShadow.eltech.journal.api.SwitchStatusToActiveRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.github.com.EmptyShadow.eltech.journal.api.SwitchStatusToActiveRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.github.com.EmptyShadow.eltech.journal.api.SwitchStatusToActiveRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_AdminsActions_SwitchStatusToActive = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.github.com.EmptyShadow.eltech.journal.api.SwitchStatusToActiveRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.github.com.EmptyShadow.eltech.journal.api.SwitchStatusToActiveRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.github.com.EmptyShadow.eltech.journal.api.AdminsActionsClient.prototype.switchStatusToActive =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/github.com.EmptyShadow.eltech.journal.api.AdminsActions/SwitchStatusToActive',
      request,
      metadata || {},
      methodDescriptor_AdminsActions_SwitchStatusToActive,
      callback);
};


/**
 * @param {!proto.github.com.EmptyShadow.eltech.journal.api.SwitchStatusToActiveRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.github.com.EmptyShadow.eltech.journal.api.AdminsActionsPromiseClient.prototype.switchStatusToActive =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/github.com.EmptyShadow.eltech.journal.api.AdminsActions/SwitchStatusToActive',
      request,
      metadata || {},
      methodDescriptor_AdminsActions_SwitchStatusToActive);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.github.com.EmptyShadow.eltech.journal.api.SwitchStatusToBlockedRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_AdminsActions_SwitchStatusToBlocked = new grpc.web.MethodDescriptor(
  '/github.com.EmptyShadow.eltech.journal.api.AdminsActions/SwitchStatusToBlocked',
  grpc.web.MethodType.UNARY,
  proto.github.com.EmptyShadow.eltech.journal.api.SwitchStatusToBlockedRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.github.com.EmptyShadow.eltech.journal.api.SwitchStatusToBlockedRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.github.com.EmptyShadow.eltech.journal.api.SwitchStatusToBlockedRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_AdminsActions_SwitchStatusToBlocked = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.github.com.EmptyShadow.eltech.journal.api.SwitchStatusToBlockedRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.github.com.EmptyShadow.eltech.journal.api.SwitchStatusToBlockedRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.github.com.EmptyShadow.eltech.journal.api.AdminsActionsClient.prototype.switchStatusToBlocked =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/github.com.EmptyShadow.eltech.journal.api.AdminsActions/SwitchStatusToBlocked',
      request,
      metadata || {},
      methodDescriptor_AdminsActions_SwitchStatusToBlocked,
      callback);
};


/**
 * @param {!proto.github.com.EmptyShadow.eltech.journal.api.SwitchStatusToBlockedRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.github.com.EmptyShadow.eltech.journal.api.AdminsActionsPromiseClient.prototype.switchStatusToBlocked =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/github.com.EmptyShadow.eltech.journal.api.AdminsActions/SwitchStatusToBlocked',
      request,
      metadata || {},
      methodDescriptor_AdminsActions_SwitchStatusToBlocked);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.github.com.EmptyShadow.eltech.journal.api.DeleteRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_AdminsActions_Delete = new grpc.web.MethodDescriptor(
  '/github.com.EmptyShadow.eltech.journal.api.AdminsActions/Delete',
  grpc.web.MethodType.UNARY,
  proto.github.com.EmptyShadow.eltech.journal.api.DeleteRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.github.com.EmptyShadow.eltech.journal.api.DeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.github.com.EmptyShadow.eltech.journal.api.DeleteRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_AdminsActions_Delete = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.github.com.EmptyShadow.eltech.journal.api.DeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.github.com.EmptyShadow.eltech.journal.api.DeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.github.com.EmptyShadow.eltech.journal.api.AdminsActionsClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/github.com.EmptyShadow.eltech.journal.api.AdminsActions/Delete',
      request,
      metadata || {},
      methodDescriptor_AdminsActions_Delete,
      callback);
};


/**
 * @param {!proto.github.com.EmptyShadow.eltech.journal.api.DeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.github.com.EmptyShadow.eltech.journal.api.AdminsActionsPromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/github.com.EmptyShadow.eltech.journal.api.AdminsActions/Delete',
      request,
      metadata || {},
      methodDescriptor_AdminsActions_Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.github.com.EmptyShadow.eltech.journal.api.DeleteScopeRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_AdminsActions_DeleteScope = new grpc.web.MethodDescriptor(
  '/github.com.EmptyShadow.eltech.journal.api.AdminsActions/DeleteScope',
  grpc.web.MethodType.UNARY,
  proto.github.com.EmptyShadow.eltech.journal.api.DeleteScopeRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.github.com.EmptyShadow.eltech.journal.api.DeleteScopeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.github.com.EmptyShadow.eltech.journal.api.DeleteScopeRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_AdminsActions_DeleteScope = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.github.com.EmptyShadow.eltech.journal.api.DeleteScopeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.github.com.EmptyShadow.eltech.journal.api.DeleteScopeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.github.com.EmptyShadow.eltech.journal.api.AdminsActionsClient.prototype.deleteScope =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/github.com.EmptyShadow.eltech.journal.api.AdminsActions/DeleteScope',
      request,
      metadata || {},
      methodDescriptor_AdminsActions_DeleteScope,
      callback);
};


/**
 * @param {!proto.github.com.EmptyShadow.eltech.journal.api.DeleteScopeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.github.com.EmptyShadow.eltech.journal.api.AdminsActionsPromiseClient.prototype.deleteScope =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/github.com.EmptyShadow.eltech.journal.api.AdminsActions/DeleteScope',
      request,
      metadata || {},
      methodDescriptor_AdminsActions_DeleteScope);
};


module.exports = proto.github.com.EmptyShadow.eltech.journal.api;

