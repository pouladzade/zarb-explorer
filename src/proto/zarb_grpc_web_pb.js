/**
 * @fileoverview gRPC-Web generated client stub for zarb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../google/api/annotations_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.zarb = require('./zarb_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.zarb.ZarbClient =
  function (hostname, credentials, options) {
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
proto.zarb.ZarbPromiseClient =
  function (hostname, credentials, options) {
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
 *   !proto.zarb.BlockRequest,
 *   !proto.zarb.BlockResponse>}
 */
const methodDescriptor_Zarb_GetBlock = new grpc.web.MethodDescriptor(
  '/zarb.Zarb/GetBlock',
  grpc.web.MethodType.UNARY,
  proto.zarb.BlockRequest,
  proto.zarb.BlockResponse,
  /**
   * @param {!proto.zarb.BlockRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.zarb.BlockResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zarb.BlockRequest,
 *   !proto.zarb.BlockResponse>}
 */
const methodInfo_Zarb_GetBlock = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zarb.BlockResponse,
  /**
   * @param {!proto.zarb.BlockRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.zarb.BlockResponse.deserializeBinary
);


/**
 * @param {!proto.zarb.BlockRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zarb.BlockResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zarb.BlockResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zarb.ZarbClient.prototype.getBlock =
  function (request, metadata, callback) {
    return this.client_.rpcCall(this.hostname_ +
      '/zarb.Zarb/GetBlock',
      request,
      metadata || {},
      methodDescriptor_Zarb_GetBlock,
      callback);
  };


/**
 * @param {!proto.zarb.BlockRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zarb.BlockResponse>}
 *     Promise that resolves to the response
 */
proto.zarb.ZarbPromiseClient.prototype.getBlock =
  function (request, metadata) {
    return this.client_.unaryCall(this.hostname_ +
      '/zarb.Zarb/GetBlock',
      request,
      metadata || {},
      methodDescriptor_Zarb_GetBlock);
  };


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zarb.BlockHeightRequest,
 *   !proto.zarb.BlockHeightResponse>}
 */
const methodDescriptor_Zarb_GetBlockHeight = new grpc.web.MethodDescriptor(
  '/zarb.Zarb/GetBlockHeight',
  grpc.web.MethodType.UNARY,
  proto.zarb.BlockHeightRequest,
  proto.zarb.BlockHeightResponse,
  /**
   * @param {!proto.zarb.BlockHeightRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.zarb.BlockHeightResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zarb.BlockHeightRequest,
 *   !proto.zarb.BlockHeightResponse>}
 */
const methodInfo_Zarb_GetBlockHeight = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zarb.BlockHeightResponse,
  /**
   * @param {!proto.zarb.BlockHeightRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.zarb.BlockHeightResponse.deserializeBinary
);


/**
 * @param {!proto.zarb.BlockHeightRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zarb.BlockHeightResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zarb.BlockHeightResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zarb.ZarbClient.prototype.getBlockHeight =
  function (request, metadata, callback) {
    return this.client_.rpcCall(this.hostname_ +
      '/zarb.Zarb/GetBlockHeight',
      request,
      metadata || {},
      methodDescriptor_Zarb_GetBlockHeight,
      callback);
  };


/**
 * @param {!proto.zarb.BlockHeightRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zarb.BlockHeightResponse>}
 *     Promise that resolves to the response
 */
proto.zarb.ZarbPromiseClient.prototype.getBlockHeight =
  function (request, metadata) {
    return this.client_.unaryCall(this.hostname_ +
      '/zarb.Zarb/GetBlockHeight',
      request,
      metadata || {},
      methodDescriptor_Zarb_GetBlockHeight);
  };


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zarb.TransactionRequest,
 *   !proto.zarb.TransactionResponse>}
 */
const methodDescriptor_Zarb_GetTransaction = new grpc.web.MethodDescriptor(
  '/zarb.Zarb/GetTransaction',
  grpc.web.MethodType.UNARY,
  proto.zarb.TransactionRequest,
  proto.zarb.TransactionResponse,
  /**
   * @param {!proto.zarb.TransactionRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.zarb.TransactionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zarb.TransactionRequest,
 *   !proto.zarb.TransactionResponse>}
 */
const methodInfo_Zarb_GetTransaction = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zarb.TransactionResponse,
  /**
   * @param {!proto.zarb.TransactionRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.zarb.TransactionResponse.deserializeBinary
);


/**
 * @param {!proto.zarb.TransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zarb.TransactionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zarb.TransactionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zarb.ZarbClient.prototype.getTransaction =
  function (request, metadata, callback) {
    return this.client_.rpcCall(this.hostname_ +
      '/zarb.Zarb/GetTransaction',
      request,
      metadata || {},
      methodDescriptor_Zarb_GetTransaction,
      callback);
  };


/**
 * @param {!proto.zarb.TransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zarb.TransactionResponse>}
 *     Promise that resolves to the response
 */
proto.zarb.ZarbPromiseClient.prototype.getTransaction =
  function (request, metadata) {
    return this.client_.unaryCall(this.hostname_ +
      '/zarb.Zarb/GetTransaction',
      request,
      metadata || {},
      methodDescriptor_Zarb_GetTransaction);
  };


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zarb.AccountRequest,
 *   !proto.zarb.AccountResponse>}
 */
const methodDescriptor_Zarb_GetAccount = new grpc.web.MethodDescriptor(
  '/zarb.Zarb/GetAccount',
  grpc.web.MethodType.UNARY,
  proto.zarb.AccountRequest,
  proto.zarb.AccountResponse,
  /**
   * @param {!proto.zarb.AccountRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.zarb.AccountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zarb.AccountRequest,
 *   !proto.zarb.AccountResponse>}
 */
const methodInfo_Zarb_GetAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zarb.AccountResponse,
  /**
   * @param {!proto.zarb.AccountRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.zarb.AccountResponse.deserializeBinary
);


/**
 * @param {!proto.zarb.AccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zarb.AccountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zarb.AccountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zarb.ZarbClient.prototype.getAccount =
  function (request, metadata, callback) {
    return this.client_.rpcCall(this.hostname_ +
      '/zarb.Zarb/GetAccount',
      request,
      metadata || {},
      methodDescriptor_Zarb_GetAccount,
      callback);
  };


/**
 * @param {!proto.zarb.AccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zarb.AccountResponse>}
 *     Promise that resolves to the response
 */
proto.zarb.ZarbPromiseClient.prototype.getAccount =
  function (request, metadata) {
    return this.client_.unaryCall(this.hostname_ +
      '/zarb.Zarb/GetAccount',
      request,
      metadata || {},
      methodDescriptor_Zarb_GetAccount);
  };


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zarb.ValidatorsRequest,
 *   !proto.zarb.ValidatorsResponse>}
 */
const methodDescriptor_Zarb_GetValidators = new grpc.web.MethodDescriptor(
  '/zarb.Zarb/GetValidators',
  grpc.web.MethodType.UNARY,
  proto.zarb.ValidatorsRequest,
  proto.zarb.ValidatorsResponse,
  /**
   * @param {!proto.zarb.ValidatorsRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.zarb.ValidatorsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zarb.ValidatorsRequest,
 *   !proto.zarb.ValidatorsResponse>}
 */
const methodInfo_Zarb_GetValidators = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zarb.ValidatorsResponse,
  /**
   * @param {!proto.zarb.ValidatorsRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.zarb.ValidatorsResponse.deserializeBinary
);


/**
 * @param {!proto.zarb.ValidatorsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zarb.ValidatorsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zarb.ValidatorsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zarb.ZarbClient.prototype.getValidators =
  function (request, metadata, callback) {
    return this.client_.rpcCall(this.hostname_ +
      '/zarb.Zarb/GetValidators',
      request,
      metadata || {},
      methodDescriptor_Zarb_GetValidators,
      callback);
  };


/**
 * @param {!proto.zarb.ValidatorsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zarb.ValidatorsResponse>}
 *     Promise that resolves to the response
 */
proto.zarb.ZarbPromiseClient.prototype.getValidators =
  function (request, metadata) {
    return this.client_.unaryCall(this.hostname_ +
      '/zarb.Zarb/GetValidators',
      request,
      metadata || {},
      methodDescriptor_Zarb_GetValidators);
  };


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zarb.ValidatorRequest,
 *   !proto.zarb.ValidatorResponse>}
 */
const methodDescriptor_Zarb_GetValidator = new grpc.web.MethodDescriptor(
  '/zarb.Zarb/GetValidator',
  grpc.web.MethodType.UNARY,
  proto.zarb.ValidatorRequest,
  proto.zarb.ValidatorResponse,
  /**
   * @param {!proto.zarb.ValidatorRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.zarb.ValidatorResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zarb.ValidatorRequest,
 *   !proto.zarb.ValidatorResponse>}
 */
const methodInfo_Zarb_GetValidator = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zarb.ValidatorResponse,
  /**
   * @param {!proto.zarb.ValidatorRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.zarb.ValidatorResponse.deserializeBinary
);


/**
 * @param {!proto.zarb.ValidatorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zarb.ValidatorResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zarb.ValidatorResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zarb.ZarbClient.prototype.getValidator =
  function (request, metadata, callback) {
    return this.client_.rpcCall(this.hostname_ +
      '/zarb.Zarb/GetValidator',
      request,
      metadata || {},
      methodDescriptor_Zarb_GetValidator,
      callback);
  };


/**
 * @param {!proto.zarb.ValidatorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zarb.ValidatorResponse>}
 *     Promise that resolves to the response
 */
proto.zarb.ZarbPromiseClient.prototype.getValidator =
  function (request, metadata) {
    return this.client_.unaryCall(this.hostname_ +
      '/zarb.Zarb/GetValidator',
      request,
      metadata || {},
      methodDescriptor_Zarb_GetValidator);
  };


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zarb.ValidatorByNumberRequest,
 *   !proto.zarb.ValidatorResponse>}
 */
const methodDescriptor_Zarb_GetValidatorByNumber = new grpc.web.MethodDescriptor(
  '/zarb.Zarb/GetValidatorByNumber',
  grpc.web.MethodType.UNARY,
  proto.zarb.ValidatorByNumberRequest,
  proto.zarb.ValidatorResponse,
  /**
   * @param {!proto.zarb.ValidatorByNumberRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.zarb.ValidatorResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zarb.ValidatorByNumberRequest,
 *   !proto.zarb.ValidatorResponse>}
 */
const methodInfo_Zarb_GetValidatorByNumber = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zarb.ValidatorResponse,
  /**
   * @param {!proto.zarb.ValidatorByNumberRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.zarb.ValidatorResponse.deserializeBinary
);


/**
 * @param {!proto.zarb.ValidatorByNumberRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zarb.ValidatorResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zarb.ValidatorResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zarb.ZarbClient.prototype.getValidatorByNumber =
  function (request, metadata, callback) {
    return this.client_.rpcCall(this.hostname_ +
      '/zarb.Zarb/GetValidatorByNumber',
      request,
      metadata || {},
      methodDescriptor_Zarb_GetValidatorByNumber,
      callback);
  };


/**
 * @param {!proto.zarb.ValidatorByNumberRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zarb.ValidatorResponse>}
 *     Promise that resolves to the response
 */
proto.zarb.ZarbPromiseClient.prototype.getValidatorByNumber =
  function (request, metadata) {
    return this.client_.unaryCall(this.hostname_ +
      '/zarb.Zarb/GetValidatorByNumber',
      request,
      metadata || {},
      methodDescriptor_Zarb_GetValidatorByNumber);
  };


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zarb.BlockchainInfoRequest,
 *   !proto.zarb.BlockchainInfoResponse>}
 */
const methodDescriptor_Zarb_GetBlockchainInfo = new grpc.web.MethodDescriptor(
  '/zarb.Zarb/GetBlockchainInfo',
  grpc.web.MethodType.UNARY,
  proto.zarb.BlockchainInfoRequest,
  proto.zarb.BlockchainInfoResponse,
  /**
   * @param {!proto.zarb.BlockchainInfoRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.zarb.BlockchainInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zarb.BlockchainInfoRequest,
 *   !proto.zarb.BlockchainInfoResponse>}
 */
const methodInfo_Zarb_GetBlockchainInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zarb.BlockchainInfoResponse,
  /**
   * @param {!proto.zarb.BlockchainInfoRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.zarb.BlockchainInfoResponse.deserializeBinary
);


/**
 * @param {!proto.zarb.BlockchainInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zarb.BlockchainInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zarb.BlockchainInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zarb.ZarbClient.prototype.getBlockchainInfo =
  function (request, metadata, callback) {
    return this.client_.rpcCall(this.hostname_ +
      '/zarb.Zarb/GetBlockchainInfo',
      request,
      metadata || {},
      methodDescriptor_Zarb_GetBlockchainInfo,
      callback);
  };


/**
 * @param {!proto.zarb.BlockchainInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zarb.BlockchainInfoResponse>}
 *     Promise that resolves to the response
 */
proto.zarb.ZarbPromiseClient.prototype.getBlockchainInfo =
  function (request, metadata) {
    return this.client_.unaryCall(this.hostname_ +
      '/zarb.Zarb/GetBlockchainInfo',
      request,
      metadata || {},
      methodDescriptor_Zarb_GetBlockchainInfo);
  };


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zarb.NetworkInfoRequest,
 *   !proto.zarb.NetworkInfoResponse>}
 */
const methodDescriptor_Zarb_GetNetworkInfo = new grpc.web.MethodDescriptor(
  '/zarb.Zarb/GetNetworkInfo',
  grpc.web.MethodType.UNARY,
  proto.zarb.NetworkInfoRequest,
  proto.zarb.NetworkInfoResponse,
  /**
   * @param {!proto.zarb.NetworkInfoRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.zarb.NetworkInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zarb.NetworkInfoRequest,
 *   !proto.zarb.NetworkInfoResponse>}
 */
const methodInfo_Zarb_GetNetworkInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zarb.NetworkInfoResponse,
  /**
   * @param {!proto.zarb.NetworkInfoRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.zarb.NetworkInfoResponse.deserializeBinary
);


/**
 * @param {!proto.zarb.NetworkInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zarb.NetworkInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zarb.NetworkInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zarb.ZarbClient.prototype.getNetworkInfo =
  function (request, metadata, callback) {
    return this.client_.rpcCall(this.hostname_ +
      '/zarb.Zarb/GetNetworkInfo',
      request,
      metadata || {},
      methodDescriptor_Zarb_GetNetworkInfo,
      callback);
  };


/**
 * @param {!proto.zarb.NetworkInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zarb.NetworkInfoResponse>}
 *     Promise that resolves to the response
 */
proto.zarb.ZarbPromiseClient.prototype.getNetworkInfo =
  function (request, metadata) {
    return this.client_.unaryCall(this.hostname_ +
      '/zarb.Zarb/GetNetworkInfo',
      request,
      metadata || {},
      methodDescriptor_Zarb_GetNetworkInfo);
  };


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zarb.SendRawTransactionRequest,
 *   !proto.zarb.SendRawTransactionResponse>}
 */
const methodDescriptor_Zarb_SendRawTransaction = new grpc.web.MethodDescriptor(
  '/zarb.Zarb/SendRawTransaction',
  grpc.web.MethodType.UNARY,
  proto.zarb.SendRawTransactionRequest,
  proto.zarb.SendRawTransactionResponse,
  /**
   * @param {!proto.zarb.SendRawTransactionRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.zarb.SendRawTransactionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zarb.SendRawTransactionRequest,
 *   !proto.zarb.SendRawTransactionResponse>}
 */
const methodInfo_Zarb_SendRawTransaction = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zarb.SendRawTransactionResponse,
  /**
   * @param {!proto.zarb.SendRawTransactionRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.zarb.SendRawTransactionResponse.deserializeBinary
);


/**
 * @param {!proto.zarb.SendRawTransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zarb.SendRawTransactionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zarb.SendRawTransactionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zarb.ZarbClient.prototype.sendRawTransaction =
  function (request, metadata, callback) {
    return this.client_.rpcCall(this.hostname_ +
      '/zarb.Zarb/SendRawTransaction',
      request,
      metadata || {},
      methodDescriptor_Zarb_SendRawTransaction,
      callback);
  };


/**
 * @param {!proto.zarb.SendRawTransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zarb.SendRawTransactionResponse>}
 *     Promise that resolves to the response
 */
proto.zarb.ZarbPromiseClient.prototype.sendRawTransaction =
  function (request, metadata) {
    return this.client_.unaryCall(this.hostname_ +
      '/zarb.Zarb/SendRawTransaction',
      request,
      metadata || {},
      methodDescriptor_Zarb_SendRawTransaction);
  };


module.exports = proto.zarb;

