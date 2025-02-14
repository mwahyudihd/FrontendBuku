/**
 * @fileoverview gRPC-Web generated client stub for buku
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v3.21.12
// source: buku.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.buku = require('./buku_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.buku.BukuServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.buku.BukuServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.buku.Buku,
 *   !proto.buku.Buku>}
 */
const methodDescriptor_BukuService_CreateBuku = new grpc.web.MethodDescriptor(
  '/buku.BukuService/CreateBuku',
  grpc.web.MethodType.UNARY,
  proto.buku.Buku,
  proto.buku.Buku,
  /**
   * @param {!proto.buku.Buku} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.buku.Buku.deserializeBinary
);


/**
 * @param {!proto.buku.Buku} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.buku.Buku)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.buku.Buku>|undefined}
 *     The XHR Node Readable Stream
 */
proto.buku.BukuServiceClient.prototype.createBuku =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/buku.BukuService/CreateBuku',
      request,
      metadata || {},
      methodDescriptor_BukuService_CreateBuku,
      callback);
};


/**
 * @param {!proto.buku.Buku} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.buku.Buku>}
 *     Promise that resolves to the response
 */
proto.buku.BukuServicePromiseClient.prototype.createBuku =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/buku.BukuService/CreateBuku',
      request,
      metadata || {},
      methodDescriptor_BukuService_CreateBuku);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.buku.IdRequest,
 *   !proto.buku.Buku>}
 */
const methodDescriptor_BukuService_ReadBuku = new grpc.web.MethodDescriptor(
  '/buku.BukuService/ReadBuku',
  grpc.web.MethodType.UNARY,
  proto.buku.IdRequest,
  proto.buku.Buku,
  /**
   * @param {!proto.buku.IdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.buku.Buku.deserializeBinary
);


/**
 * @param {!proto.buku.IdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.buku.Buku)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.buku.Buku>|undefined}
 *     The XHR Node Readable Stream
 */
proto.buku.BukuServiceClient.prototype.readBuku =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/buku.BukuService/ReadBuku',
      request,
      metadata || {},
      methodDescriptor_BukuService_ReadBuku,
      callback);
};


/**
 * @param {!proto.buku.IdRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.buku.Buku>}
 *     Promise that resolves to the response
 */
proto.buku.BukuServicePromiseClient.prototype.readBuku =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/buku.BukuService/ReadBuku',
      request,
      metadata || {},
      methodDescriptor_BukuService_ReadBuku);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.buku.Buku,
 *   !proto.buku.Buku>}
 */
const methodDescriptor_BukuService_UpdateBuku = new grpc.web.MethodDescriptor(
  '/buku.BukuService/UpdateBuku',
  grpc.web.MethodType.UNARY,
  proto.buku.Buku,
  proto.buku.Buku,
  /**
   * @param {!proto.buku.Buku} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.buku.Buku.deserializeBinary
);


/**
 * @param {!proto.buku.Buku} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.buku.Buku)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.buku.Buku>|undefined}
 *     The XHR Node Readable Stream
 */
proto.buku.BukuServiceClient.prototype.updateBuku =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/buku.BukuService/UpdateBuku',
      request,
      metadata || {},
      methodDescriptor_BukuService_UpdateBuku,
      callback);
};


/**
 * @param {!proto.buku.Buku} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.buku.Buku>}
 *     Promise that resolves to the response
 */
proto.buku.BukuServicePromiseClient.prototype.updateBuku =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/buku.BukuService/UpdateBuku',
      request,
      metadata || {},
      methodDescriptor_BukuService_UpdateBuku);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.buku.IdRequest,
 *   !proto.buku.Empty>}
 */
const methodDescriptor_BukuService_DeleteBuku = new grpc.web.MethodDescriptor(
  '/buku.BukuService/DeleteBuku',
  grpc.web.MethodType.UNARY,
  proto.buku.IdRequest,
  proto.buku.Empty,
  /**
   * @param {!proto.buku.IdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.buku.Empty.deserializeBinary
);


/**
 * @param {!proto.buku.IdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.buku.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.buku.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.buku.BukuServiceClient.prototype.deleteBuku =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/buku.BukuService/DeleteBuku',
      request,
      metadata || {},
      methodDescriptor_BukuService_DeleteBuku,
      callback);
};


/**
 * @param {!proto.buku.IdRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.buku.Empty>}
 *     Promise that resolves to the response
 */
proto.buku.BukuServicePromiseClient.prototype.deleteBuku =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/buku.BukuService/DeleteBuku',
      request,
      metadata || {},
      methodDescriptor_BukuService_DeleteBuku);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.buku.Empty,
 *   !proto.buku.BukuList>}
 */
const methodDescriptor_BukuService_ListBuku = new grpc.web.MethodDescriptor(
  '/buku.BukuService/ListBuku',
  grpc.web.MethodType.UNARY,
  proto.buku.Empty,
  proto.buku.BukuList,
  /**
   * @param {!proto.buku.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.buku.BukuList.deserializeBinary
);


/**
 * @param {!proto.buku.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.buku.BukuList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.buku.BukuList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.buku.BukuServiceClient.prototype.listBuku =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/buku.BukuService/ListBuku',
      request,
      metadata || {},
      methodDescriptor_BukuService_ListBuku,
      callback);
};


/**
 * @param {!proto.buku.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.buku.BukuList>}
 *     Promise that resolves to the response
 */
proto.buku.BukuServicePromiseClient.prototype.listBuku =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/buku.BukuService/ListBuku',
      request,
      metadata || {},
      methodDescriptor_BukuService_ListBuku);
};


module.exports = proto.buku;

