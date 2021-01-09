// source: auth.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var github_com_EmptyShadow_eltech_journal_api_domain_pb = require('./github.com/EmptyShadow/eltech.journal/api/domain_pb.js');
goog.object.extend(proto, github_com_EmptyShadow_eltech_journal_api_domain_pb);
goog.exportSymbol('proto.github.com.EmptyShadow.eltech.journal.api.RefreshRequest', null, global);
goog.exportSymbol('proto.github.com.EmptyShadow.eltech.journal.api.RefreshResponse', null, global);
goog.exportSymbol('proto.github.com.EmptyShadow.eltech.journal.api.TrustRequest', null, global);
goog.exportSymbol('proto.github.com.EmptyShadow.eltech.journal.api.TrustResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.EmptyShadow.eltech.journal.api.TrustRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.EmptyShadow.eltech.journal.api.TrustRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.EmptyShadow.eltech.journal.api.TrustRequest.displayName = 'proto.github.com.EmptyShadow.eltech.journal.api.TrustRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.EmptyShadow.eltech.journal.api.TrustResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.EmptyShadow.eltech.journal.api.TrustResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.EmptyShadow.eltech.journal.api.TrustResponse.displayName = 'proto.github.com.EmptyShadow.eltech.journal.api.TrustResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.EmptyShadow.eltech.journal.api.RefreshRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.EmptyShadow.eltech.journal.api.RefreshRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.EmptyShadow.eltech.journal.api.RefreshRequest.displayName = 'proto.github.com.EmptyShadow.eltech.journal.api.RefreshRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.EmptyShadow.eltech.journal.api.RefreshResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.EmptyShadow.eltech.journal.api.RefreshResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.EmptyShadow.eltech.journal.api.RefreshResponse.displayName = 'proto.github.com.EmptyShadow.eltech.journal.api.RefreshResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.EmptyShadow.eltech.journal.api.TrustRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.EmptyShadow.eltech.journal.api.TrustRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.EmptyShadow.eltech.journal.api.TrustRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.EmptyShadow.eltech.journal.api.TrustRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    credentials: (f = msg.getCredentials()) && github_com_EmptyShadow_eltech_journal_api_domain_pb.Credentials.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.EmptyShadow.eltech.journal.api.TrustRequest}
 */
proto.github.com.EmptyShadow.eltech.journal.api.TrustRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.EmptyShadow.eltech.journal.api.TrustRequest;
  return proto.github.com.EmptyShadow.eltech.journal.api.TrustRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.EmptyShadow.eltech.journal.api.TrustRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.EmptyShadow.eltech.journal.api.TrustRequest}
 */
proto.github.com.EmptyShadow.eltech.journal.api.TrustRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_EmptyShadow_eltech_journal_api_domain_pb.Credentials;
      reader.readMessage(value,github_com_EmptyShadow_eltech_journal_api_domain_pb.Credentials.deserializeBinaryFromReader);
      msg.setCredentials(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.EmptyShadow.eltech.journal.api.TrustRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.EmptyShadow.eltech.journal.api.TrustRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.EmptyShadow.eltech.journal.api.TrustRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.EmptyShadow.eltech.journal.api.TrustRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCredentials();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_EmptyShadow_eltech_journal_api_domain_pb.Credentials.serializeBinaryToWriter
    );
  }
};


/**
 * optional Credentials Credentials = 1;
 * @return {?proto.github.com.EmptyShadow.eltech.journal.api.Credentials}
 */
proto.github.com.EmptyShadow.eltech.journal.api.TrustRequest.prototype.getCredentials = function() {
  return /** @type{?proto.github.com.EmptyShadow.eltech.journal.api.Credentials} */ (
    jspb.Message.getWrapperField(this, github_com_EmptyShadow_eltech_journal_api_domain_pb.Credentials, 1));
};


/**
 * @param {?proto.github.com.EmptyShadow.eltech.journal.api.Credentials|undefined} value
 * @return {!proto.github.com.EmptyShadow.eltech.journal.api.TrustRequest} returns this
*/
proto.github.com.EmptyShadow.eltech.journal.api.TrustRequest.prototype.setCredentials = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.EmptyShadow.eltech.journal.api.TrustRequest} returns this
 */
proto.github.com.EmptyShadow.eltech.journal.api.TrustRequest.prototype.clearCredentials = function() {
  return this.setCredentials(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.EmptyShadow.eltech.journal.api.TrustRequest.prototype.hasCredentials = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.EmptyShadow.eltech.journal.api.TrustResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.EmptyShadow.eltech.journal.api.TrustResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.EmptyShadow.eltech.journal.api.TrustResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.EmptyShadow.eltech.journal.api.TrustResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    tokens: (f = msg.getTokens()) && github_com_EmptyShadow_eltech_journal_api_domain_pb.Tokens.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.EmptyShadow.eltech.journal.api.TrustResponse}
 */
proto.github.com.EmptyShadow.eltech.journal.api.TrustResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.EmptyShadow.eltech.journal.api.TrustResponse;
  return proto.github.com.EmptyShadow.eltech.journal.api.TrustResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.EmptyShadow.eltech.journal.api.TrustResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.EmptyShadow.eltech.journal.api.TrustResponse}
 */
proto.github.com.EmptyShadow.eltech.journal.api.TrustResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_EmptyShadow_eltech_journal_api_domain_pb.Tokens;
      reader.readMessage(value,github_com_EmptyShadow_eltech_journal_api_domain_pb.Tokens.deserializeBinaryFromReader);
      msg.setTokens(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.EmptyShadow.eltech.journal.api.TrustResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.EmptyShadow.eltech.journal.api.TrustResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.EmptyShadow.eltech.journal.api.TrustResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.EmptyShadow.eltech.journal.api.TrustResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTokens();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_EmptyShadow_eltech_journal_api_domain_pb.Tokens.serializeBinaryToWriter
    );
  }
};


/**
 * optional Tokens Tokens = 1;
 * @return {?proto.github.com.EmptyShadow.eltech.journal.api.Tokens}
 */
proto.github.com.EmptyShadow.eltech.journal.api.TrustResponse.prototype.getTokens = function() {
  return /** @type{?proto.github.com.EmptyShadow.eltech.journal.api.Tokens} */ (
    jspb.Message.getWrapperField(this, github_com_EmptyShadow_eltech_journal_api_domain_pb.Tokens, 1));
};


/**
 * @param {?proto.github.com.EmptyShadow.eltech.journal.api.Tokens|undefined} value
 * @return {!proto.github.com.EmptyShadow.eltech.journal.api.TrustResponse} returns this
*/
proto.github.com.EmptyShadow.eltech.journal.api.TrustResponse.prototype.setTokens = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.EmptyShadow.eltech.journal.api.TrustResponse} returns this
 */
proto.github.com.EmptyShadow.eltech.journal.api.TrustResponse.prototype.clearTokens = function() {
  return this.setTokens(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.EmptyShadow.eltech.journal.api.TrustResponse.prototype.hasTokens = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.EmptyShadow.eltech.journal.api.RefreshRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.EmptyShadow.eltech.journal.api.RefreshRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.EmptyShadow.eltech.journal.api.RefreshRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.EmptyShadow.eltech.journal.api.RefreshRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    refreshtoken: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.EmptyShadow.eltech.journal.api.RefreshRequest}
 */
proto.github.com.EmptyShadow.eltech.journal.api.RefreshRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.EmptyShadow.eltech.journal.api.RefreshRequest;
  return proto.github.com.EmptyShadow.eltech.journal.api.RefreshRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.EmptyShadow.eltech.journal.api.RefreshRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.EmptyShadow.eltech.journal.api.RefreshRequest}
 */
proto.github.com.EmptyShadow.eltech.journal.api.RefreshRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefreshtoken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.EmptyShadow.eltech.journal.api.RefreshRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.EmptyShadow.eltech.journal.api.RefreshRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.EmptyShadow.eltech.journal.api.RefreshRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.EmptyShadow.eltech.journal.api.RefreshRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRefreshtoken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string RefreshToken = 1;
 * @return {string}
 */
proto.github.com.EmptyShadow.eltech.journal.api.RefreshRequest.prototype.getRefreshtoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.EmptyShadow.eltech.journal.api.RefreshRequest} returns this
 */
proto.github.com.EmptyShadow.eltech.journal.api.RefreshRequest.prototype.setRefreshtoken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.EmptyShadow.eltech.journal.api.RefreshResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.EmptyShadow.eltech.journal.api.RefreshResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.EmptyShadow.eltech.journal.api.RefreshResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.EmptyShadow.eltech.journal.api.RefreshResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    tokens: (f = msg.getTokens()) && github_com_EmptyShadow_eltech_journal_api_domain_pb.Tokens.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.EmptyShadow.eltech.journal.api.RefreshResponse}
 */
proto.github.com.EmptyShadow.eltech.journal.api.RefreshResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.EmptyShadow.eltech.journal.api.RefreshResponse;
  return proto.github.com.EmptyShadow.eltech.journal.api.RefreshResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.EmptyShadow.eltech.journal.api.RefreshResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.EmptyShadow.eltech.journal.api.RefreshResponse}
 */
proto.github.com.EmptyShadow.eltech.journal.api.RefreshResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_EmptyShadow_eltech_journal_api_domain_pb.Tokens;
      reader.readMessage(value,github_com_EmptyShadow_eltech_journal_api_domain_pb.Tokens.deserializeBinaryFromReader);
      msg.setTokens(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.EmptyShadow.eltech.journal.api.RefreshResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.EmptyShadow.eltech.journal.api.RefreshResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.EmptyShadow.eltech.journal.api.RefreshResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.EmptyShadow.eltech.journal.api.RefreshResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTokens();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_EmptyShadow_eltech_journal_api_domain_pb.Tokens.serializeBinaryToWriter
    );
  }
};


/**
 * optional Tokens Tokens = 1;
 * @return {?proto.github.com.EmptyShadow.eltech.journal.api.Tokens}
 */
proto.github.com.EmptyShadow.eltech.journal.api.RefreshResponse.prototype.getTokens = function() {
  return /** @type{?proto.github.com.EmptyShadow.eltech.journal.api.Tokens} */ (
    jspb.Message.getWrapperField(this, github_com_EmptyShadow_eltech_journal_api_domain_pb.Tokens, 1));
};


/**
 * @param {?proto.github.com.EmptyShadow.eltech.journal.api.Tokens|undefined} value
 * @return {!proto.github.com.EmptyShadow.eltech.journal.api.RefreshResponse} returns this
*/
proto.github.com.EmptyShadow.eltech.journal.api.RefreshResponse.prototype.setTokens = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.EmptyShadow.eltech.journal.api.RefreshResponse} returns this
 */
proto.github.com.EmptyShadow.eltech.journal.api.RefreshResponse.prototype.clearTokens = function() {
  return this.setTokens(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.EmptyShadow.eltech.journal.api.RefreshResponse.prototype.hasTokens = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.github.com.EmptyShadow.eltech.journal.api);
