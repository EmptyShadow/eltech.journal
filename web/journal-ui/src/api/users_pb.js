// source: users.proto
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
goog.exportSymbol('proto.github.com.EmptyShadow.eltech.journal.api.CreateRequest', null, global);
goog.exportSymbol('proto.github.com.EmptyShadow.eltech.journal.api.CreateResponse', null, global);
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
proto.github.com.EmptyShadow.eltech.journal.api.CreateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.EmptyShadow.eltech.journal.api.CreateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.EmptyShadow.eltech.journal.api.CreateRequest.displayName = 'proto.github.com.EmptyShadow.eltech.journal.api.CreateRequest';
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
proto.github.com.EmptyShadow.eltech.journal.api.CreateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.EmptyShadow.eltech.journal.api.CreateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.EmptyShadow.eltech.journal.api.CreateResponse.displayName = 'proto.github.com.EmptyShadow.eltech.journal.api.CreateResponse';
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
proto.github.com.EmptyShadow.eltech.journal.api.CreateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.EmptyShadow.eltech.journal.api.CreateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.EmptyShadow.eltech.journal.api.CreateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.EmptyShadow.eltech.journal.api.CreateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    credentials: (f = msg.getCredentials()) && github_com_EmptyShadow_eltech_journal_api_domain_pb.Credentials.toObject(includeInstance, f),
    fullname: (f = msg.getFullname()) && github_com_EmptyShadow_eltech_journal_api_domain_pb.FullName.toObject(includeInstance, f)
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
 * @return {!proto.github.com.EmptyShadow.eltech.journal.api.CreateRequest}
 */
proto.github.com.EmptyShadow.eltech.journal.api.CreateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.EmptyShadow.eltech.journal.api.CreateRequest;
  return proto.github.com.EmptyShadow.eltech.journal.api.CreateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.EmptyShadow.eltech.journal.api.CreateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.EmptyShadow.eltech.journal.api.CreateRequest}
 */
proto.github.com.EmptyShadow.eltech.journal.api.CreateRequest.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = new github_com_EmptyShadow_eltech_journal_api_domain_pb.FullName;
      reader.readMessage(value,github_com_EmptyShadow_eltech_journal_api_domain_pb.FullName.deserializeBinaryFromReader);
      msg.setFullname(value);
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
proto.github.com.EmptyShadow.eltech.journal.api.CreateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.EmptyShadow.eltech.journal.api.CreateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.EmptyShadow.eltech.journal.api.CreateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.EmptyShadow.eltech.journal.api.CreateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCredentials();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_EmptyShadow_eltech_journal_api_domain_pb.Credentials.serializeBinaryToWriter
    );
  }
  f = message.getFullname();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_EmptyShadow_eltech_journal_api_domain_pb.FullName.serializeBinaryToWriter
    );
  }
};


/**
 * optional Credentials Credentials = 1;
 * @return {?proto.github.com.EmptyShadow.eltech.journal.api.Credentials}
 */
proto.github.com.EmptyShadow.eltech.journal.api.CreateRequest.prototype.getCredentials = function() {
  return /** @type{?proto.github.com.EmptyShadow.eltech.journal.api.Credentials} */ (
    jspb.Message.getWrapperField(this, github_com_EmptyShadow_eltech_journal_api_domain_pb.Credentials, 1));
};


/**
 * @param {?proto.github.com.EmptyShadow.eltech.journal.api.Credentials|undefined} value
 * @return {!proto.github.com.EmptyShadow.eltech.journal.api.CreateRequest} returns this
*/
proto.github.com.EmptyShadow.eltech.journal.api.CreateRequest.prototype.setCredentials = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.EmptyShadow.eltech.journal.api.CreateRequest} returns this
 */
proto.github.com.EmptyShadow.eltech.journal.api.CreateRequest.prototype.clearCredentials = function() {
  return this.setCredentials(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.EmptyShadow.eltech.journal.api.CreateRequest.prototype.hasCredentials = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional FullName FullName = 2;
 * @return {?proto.github.com.EmptyShadow.eltech.journal.api.FullName}
 */
proto.github.com.EmptyShadow.eltech.journal.api.CreateRequest.prototype.getFullname = function() {
  return /** @type{?proto.github.com.EmptyShadow.eltech.journal.api.FullName} */ (
    jspb.Message.getWrapperField(this, github_com_EmptyShadow_eltech_journal_api_domain_pb.FullName, 2));
};


/**
 * @param {?proto.github.com.EmptyShadow.eltech.journal.api.FullName|undefined} value
 * @return {!proto.github.com.EmptyShadow.eltech.journal.api.CreateRequest} returns this
*/
proto.github.com.EmptyShadow.eltech.journal.api.CreateRequest.prototype.setFullname = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.EmptyShadow.eltech.journal.api.CreateRequest} returns this
 */
proto.github.com.EmptyShadow.eltech.journal.api.CreateRequest.prototype.clearFullname = function() {
  return this.setFullname(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.EmptyShadow.eltech.journal.api.CreateRequest.prototype.hasFullname = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.github.com.EmptyShadow.eltech.journal.api.CreateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.EmptyShadow.eltech.journal.api.CreateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.EmptyShadow.eltech.journal.api.CreateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.EmptyShadow.eltech.journal.api.CreateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    user: (f = msg.getUser()) && github_com_EmptyShadow_eltech_journal_api_domain_pb.User.toObject(includeInstance, f)
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
 * @return {!proto.github.com.EmptyShadow.eltech.journal.api.CreateResponse}
 */
proto.github.com.EmptyShadow.eltech.journal.api.CreateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.EmptyShadow.eltech.journal.api.CreateResponse;
  return proto.github.com.EmptyShadow.eltech.journal.api.CreateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.EmptyShadow.eltech.journal.api.CreateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.EmptyShadow.eltech.journal.api.CreateResponse}
 */
proto.github.com.EmptyShadow.eltech.journal.api.CreateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_EmptyShadow_eltech_journal_api_domain_pb.User;
      reader.readMessage(value,github_com_EmptyShadow_eltech_journal_api_domain_pb.User.deserializeBinaryFromReader);
      msg.setUser(value);
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
proto.github.com.EmptyShadow.eltech.journal.api.CreateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.EmptyShadow.eltech.journal.api.CreateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.EmptyShadow.eltech.journal.api.CreateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.EmptyShadow.eltech.journal.api.CreateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_EmptyShadow_eltech_journal_api_domain_pb.User.serializeBinaryToWriter
    );
  }
};


/**
 * optional User User = 1;
 * @return {?proto.github.com.EmptyShadow.eltech.journal.api.User}
 */
proto.github.com.EmptyShadow.eltech.journal.api.CreateResponse.prototype.getUser = function() {
  return /** @type{?proto.github.com.EmptyShadow.eltech.journal.api.User} */ (
    jspb.Message.getWrapperField(this, github_com_EmptyShadow_eltech_journal_api_domain_pb.User, 1));
};


/**
 * @param {?proto.github.com.EmptyShadow.eltech.journal.api.User|undefined} value
 * @return {!proto.github.com.EmptyShadow.eltech.journal.api.CreateResponse} returns this
*/
proto.github.com.EmptyShadow.eltech.journal.api.CreateResponse.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.EmptyShadow.eltech.journal.api.CreateResponse} returns this
 */
proto.github.com.EmptyShadow.eltech.journal.api.CreateResponse.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.EmptyShadow.eltech.journal.api.CreateResponse.prototype.hasUser = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.github.com.EmptyShadow.eltech.journal.api);
