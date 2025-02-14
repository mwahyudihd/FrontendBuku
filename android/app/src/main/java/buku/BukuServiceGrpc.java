package buku;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.42.1)",
    comments = "Source: buku.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class BukuServiceGrpc {

  private BukuServiceGrpc() {}

  public static final String SERVICE_NAME = "buku.BukuService";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<buku.BukuOuterClass.Buku,
      buku.BukuOuterClass.Buku> getCreateBukuMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "CreateBuku",
      requestType = buku.BukuOuterClass.Buku.class,
      responseType = buku.BukuOuterClass.Buku.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<buku.BukuOuterClass.Buku,
      buku.BukuOuterClass.Buku> getCreateBukuMethod() {
    io.grpc.MethodDescriptor<buku.BukuOuterClass.Buku, buku.BukuOuterClass.Buku> getCreateBukuMethod;
    if ((getCreateBukuMethod = BukuServiceGrpc.getCreateBukuMethod) == null) {
      synchronized (BukuServiceGrpc.class) {
        if ((getCreateBukuMethod = BukuServiceGrpc.getCreateBukuMethod) == null) {
          BukuServiceGrpc.getCreateBukuMethod = getCreateBukuMethod =
              io.grpc.MethodDescriptor.<buku.BukuOuterClass.Buku, buku.BukuOuterClass.Buku>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "CreateBuku"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  buku.BukuOuterClass.Buku.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  buku.BukuOuterClass.Buku.getDefaultInstance()))
              .setSchemaDescriptor(new BukuServiceMethodDescriptorSupplier("CreateBuku"))
              .build();
        }
      }
    }
    return getCreateBukuMethod;
  }

  private static volatile io.grpc.MethodDescriptor<buku.BukuOuterClass.IdRequest,
      buku.BukuOuterClass.Buku> getReadBukuMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ReadBuku",
      requestType = buku.BukuOuterClass.IdRequest.class,
      responseType = buku.BukuOuterClass.Buku.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<buku.BukuOuterClass.IdRequest,
      buku.BukuOuterClass.Buku> getReadBukuMethod() {
    io.grpc.MethodDescriptor<buku.BukuOuterClass.IdRequest, buku.BukuOuterClass.Buku> getReadBukuMethod;
    if ((getReadBukuMethod = BukuServiceGrpc.getReadBukuMethod) == null) {
      synchronized (BukuServiceGrpc.class) {
        if ((getReadBukuMethod = BukuServiceGrpc.getReadBukuMethod) == null) {
          BukuServiceGrpc.getReadBukuMethod = getReadBukuMethod =
              io.grpc.MethodDescriptor.<buku.BukuOuterClass.IdRequest, buku.BukuOuterClass.Buku>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ReadBuku"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  buku.BukuOuterClass.IdRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  buku.BukuOuterClass.Buku.getDefaultInstance()))
              .setSchemaDescriptor(new BukuServiceMethodDescriptorSupplier("ReadBuku"))
              .build();
        }
      }
    }
    return getReadBukuMethod;
  }

  private static volatile io.grpc.MethodDescriptor<buku.BukuOuterClass.Buku,
      buku.BukuOuterClass.Buku> getUpdateBukuMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "UpdateBuku",
      requestType = buku.BukuOuterClass.Buku.class,
      responseType = buku.BukuOuterClass.Buku.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<buku.BukuOuterClass.Buku,
      buku.BukuOuterClass.Buku> getUpdateBukuMethod() {
    io.grpc.MethodDescriptor<buku.BukuOuterClass.Buku, buku.BukuOuterClass.Buku> getUpdateBukuMethod;
    if ((getUpdateBukuMethod = BukuServiceGrpc.getUpdateBukuMethod) == null) {
      synchronized (BukuServiceGrpc.class) {
        if ((getUpdateBukuMethod = BukuServiceGrpc.getUpdateBukuMethod) == null) {
          BukuServiceGrpc.getUpdateBukuMethod = getUpdateBukuMethod =
              io.grpc.MethodDescriptor.<buku.BukuOuterClass.Buku, buku.BukuOuterClass.Buku>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "UpdateBuku"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  buku.BukuOuterClass.Buku.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  buku.BukuOuterClass.Buku.getDefaultInstance()))
              .setSchemaDescriptor(new BukuServiceMethodDescriptorSupplier("UpdateBuku"))
              .build();
        }
      }
    }
    return getUpdateBukuMethod;
  }

  private static volatile io.grpc.MethodDescriptor<buku.BukuOuterClass.IdRequest,
      buku.BukuOuterClass.Empty> getDeleteBukuMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "DeleteBuku",
      requestType = buku.BukuOuterClass.IdRequest.class,
      responseType = buku.BukuOuterClass.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<buku.BukuOuterClass.IdRequest,
      buku.BukuOuterClass.Empty> getDeleteBukuMethod() {
    io.grpc.MethodDescriptor<buku.BukuOuterClass.IdRequest, buku.BukuOuterClass.Empty> getDeleteBukuMethod;
    if ((getDeleteBukuMethod = BukuServiceGrpc.getDeleteBukuMethod) == null) {
      synchronized (BukuServiceGrpc.class) {
        if ((getDeleteBukuMethod = BukuServiceGrpc.getDeleteBukuMethod) == null) {
          BukuServiceGrpc.getDeleteBukuMethod = getDeleteBukuMethod =
              io.grpc.MethodDescriptor.<buku.BukuOuterClass.IdRequest, buku.BukuOuterClass.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "DeleteBuku"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  buku.BukuOuterClass.IdRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  buku.BukuOuterClass.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new BukuServiceMethodDescriptorSupplier("DeleteBuku"))
              .build();
        }
      }
    }
    return getDeleteBukuMethod;
  }

  private static volatile io.grpc.MethodDescriptor<buku.BukuOuterClass.Empty,
      buku.BukuOuterClass.BukuList> getListBukuMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ListBuku",
      requestType = buku.BukuOuterClass.Empty.class,
      responseType = buku.BukuOuterClass.BukuList.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<buku.BukuOuterClass.Empty,
      buku.BukuOuterClass.BukuList> getListBukuMethod() {
    io.grpc.MethodDescriptor<buku.BukuOuterClass.Empty, buku.BukuOuterClass.BukuList> getListBukuMethod;
    if ((getListBukuMethod = BukuServiceGrpc.getListBukuMethod) == null) {
      synchronized (BukuServiceGrpc.class) {
        if ((getListBukuMethod = BukuServiceGrpc.getListBukuMethod) == null) {
          BukuServiceGrpc.getListBukuMethod = getListBukuMethod =
              io.grpc.MethodDescriptor.<buku.BukuOuterClass.Empty, buku.BukuOuterClass.BukuList>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ListBuku"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  buku.BukuOuterClass.Empty.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  buku.BukuOuterClass.BukuList.getDefaultInstance()))
              .setSchemaDescriptor(new BukuServiceMethodDescriptorSupplier("ListBuku"))
              .build();
        }
      }
    }
    return getListBukuMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static BukuServiceStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<BukuServiceStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<BukuServiceStub>() {
        @java.lang.Override
        public BukuServiceStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new BukuServiceStub(channel, callOptions);
        }
      };
    return BukuServiceStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static BukuServiceBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<BukuServiceBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<BukuServiceBlockingStub>() {
        @java.lang.Override
        public BukuServiceBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new BukuServiceBlockingStub(channel, callOptions);
        }
      };
    return BukuServiceBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static BukuServiceFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<BukuServiceFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<BukuServiceFutureStub>() {
        @java.lang.Override
        public BukuServiceFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new BukuServiceFutureStub(channel, callOptions);
        }
      };
    return BukuServiceFutureStub.newStub(factory, channel);
  }

  /**
   */
  public static abstract class BukuServiceImplBase implements io.grpc.BindableService {

    /**
     */
    public void createBuku(buku.BukuOuterClass.Buku request,
        io.grpc.stub.StreamObserver<buku.BukuOuterClass.Buku> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getCreateBukuMethod(), responseObserver);
    }

    /**
     */
    public void readBuku(buku.BukuOuterClass.IdRequest request,
        io.grpc.stub.StreamObserver<buku.BukuOuterClass.Buku> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getReadBukuMethod(), responseObserver);
    }

    /**
     */
    public void updateBuku(buku.BukuOuterClass.Buku request,
        io.grpc.stub.StreamObserver<buku.BukuOuterClass.Buku> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getUpdateBukuMethod(), responseObserver);
    }

    /**
     */
    public void deleteBuku(buku.BukuOuterClass.IdRequest request,
        io.grpc.stub.StreamObserver<buku.BukuOuterClass.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getDeleteBukuMethod(), responseObserver);
    }

    /**
     */
    public void listBuku(buku.BukuOuterClass.Empty request,
        io.grpc.stub.StreamObserver<buku.BukuOuterClass.BukuList> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getListBukuMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getCreateBukuMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                buku.BukuOuterClass.Buku,
                buku.BukuOuterClass.Buku>(
                  this, METHODID_CREATE_BUKU)))
          .addMethod(
            getReadBukuMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                buku.BukuOuterClass.IdRequest,
                buku.BukuOuterClass.Buku>(
                  this, METHODID_READ_BUKU)))
          .addMethod(
            getUpdateBukuMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                buku.BukuOuterClass.Buku,
                buku.BukuOuterClass.Buku>(
                  this, METHODID_UPDATE_BUKU)))
          .addMethod(
            getDeleteBukuMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                buku.BukuOuterClass.IdRequest,
                buku.BukuOuterClass.Empty>(
                  this, METHODID_DELETE_BUKU)))
          .addMethod(
            getListBukuMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                buku.BukuOuterClass.Empty,
                buku.BukuOuterClass.BukuList>(
                  this, METHODID_LIST_BUKU)))
          .build();
    }
  }

  /**
   */
  public static final class BukuServiceStub extends io.grpc.stub.AbstractAsyncStub<BukuServiceStub> {
    private BukuServiceStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected BukuServiceStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new BukuServiceStub(channel, callOptions);
    }

    /**
     */
    public void createBuku(buku.BukuOuterClass.Buku request,
        io.grpc.stub.StreamObserver<buku.BukuOuterClass.Buku> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getCreateBukuMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void readBuku(buku.BukuOuterClass.IdRequest request,
        io.grpc.stub.StreamObserver<buku.BukuOuterClass.Buku> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getReadBukuMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void updateBuku(buku.BukuOuterClass.Buku request,
        io.grpc.stub.StreamObserver<buku.BukuOuterClass.Buku> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getUpdateBukuMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void deleteBuku(buku.BukuOuterClass.IdRequest request,
        io.grpc.stub.StreamObserver<buku.BukuOuterClass.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getDeleteBukuMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void listBuku(buku.BukuOuterClass.Empty request,
        io.grpc.stub.StreamObserver<buku.BukuOuterClass.BukuList> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getListBukuMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   */
  public static final class BukuServiceBlockingStub extends io.grpc.stub.AbstractBlockingStub<BukuServiceBlockingStub> {
    private BukuServiceBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected BukuServiceBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new BukuServiceBlockingStub(channel, callOptions);
    }

    /**
     */
    public buku.BukuOuterClass.Buku createBuku(buku.BukuOuterClass.Buku request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getCreateBukuMethod(), getCallOptions(), request);
    }

    /**
     */
    public buku.BukuOuterClass.Buku readBuku(buku.BukuOuterClass.IdRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getReadBukuMethod(), getCallOptions(), request);
    }

    /**
     */
    public buku.BukuOuterClass.Buku updateBuku(buku.BukuOuterClass.Buku request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getUpdateBukuMethod(), getCallOptions(), request);
    }

    /**
     */
    public buku.BukuOuterClass.Empty deleteBuku(buku.BukuOuterClass.IdRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getDeleteBukuMethod(), getCallOptions(), request);
    }

    /**
     */
    public buku.BukuOuterClass.BukuList listBuku(buku.BukuOuterClass.Empty request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getListBukuMethod(), getCallOptions(), request);
    }
  }

  /**
   */
  public static final class BukuServiceFutureStub extends io.grpc.stub.AbstractFutureStub<BukuServiceFutureStub> {
    private BukuServiceFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected BukuServiceFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new BukuServiceFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<buku.BukuOuterClass.Buku> createBuku(
        buku.BukuOuterClass.Buku request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getCreateBukuMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<buku.BukuOuterClass.Buku> readBuku(
        buku.BukuOuterClass.IdRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getReadBukuMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<buku.BukuOuterClass.Buku> updateBuku(
        buku.BukuOuterClass.Buku request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getUpdateBukuMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<buku.BukuOuterClass.Empty> deleteBuku(
        buku.BukuOuterClass.IdRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getDeleteBukuMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<buku.BukuOuterClass.BukuList> listBuku(
        buku.BukuOuterClass.Empty request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getListBukuMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_CREATE_BUKU = 0;
  private static final int METHODID_READ_BUKU = 1;
  private static final int METHODID_UPDATE_BUKU = 2;
  private static final int METHODID_DELETE_BUKU = 3;
  private static final int METHODID_LIST_BUKU = 4;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final BukuServiceImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(BukuServiceImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_CREATE_BUKU:
          serviceImpl.createBuku((buku.BukuOuterClass.Buku) request,
              (io.grpc.stub.StreamObserver<buku.BukuOuterClass.Buku>) responseObserver);
          break;
        case METHODID_READ_BUKU:
          serviceImpl.readBuku((buku.BukuOuterClass.IdRequest) request,
              (io.grpc.stub.StreamObserver<buku.BukuOuterClass.Buku>) responseObserver);
          break;
        case METHODID_UPDATE_BUKU:
          serviceImpl.updateBuku((buku.BukuOuterClass.Buku) request,
              (io.grpc.stub.StreamObserver<buku.BukuOuterClass.Buku>) responseObserver);
          break;
        case METHODID_DELETE_BUKU:
          serviceImpl.deleteBuku((buku.BukuOuterClass.IdRequest) request,
              (io.grpc.stub.StreamObserver<buku.BukuOuterClass.Empty>) responseObserver);
          break;
        case METHODID_LIST_BUKU:
          serviceImpl.listBuku((buku.BukuOuterClass.Empty) request,
              (io.grpc.stub.StreamObserver<buku.BukuOuterClass.BukuList>) responseObserver);
          break;
        default:
          throw new AssertionError();
      }
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public io.grpc.stub.StreamObserver<Req> invoke(
        io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        default:
          throw new AssertionError();
      }
    }
  }

  private static abstract class BukuServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    BukuServiceBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return buku.BukuOuterClass.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("BukuService");
    }
  }

  private static final class BukuServiceFileDescriptorSupplier
      extends BukuServiceBaseDescriptorSupplier {
    BukuServiceFileDescriptorSupplier() {}
  }

  private static final class BukuServiceMethodDescriptorSupplier
      extends BukuServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    BukuServiceMethodDescriptorSupplier(String methodName) {
      this.methodName = methodName;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.MethodDescriptor getMethodDescriptor() {
      return getServiceDescriptor().findMethodByName(methodName);
    }
  }

  private static volatile io.grpc.ServiceDescriptor serviceDescriptor;

  public static io.grpc.ServiceDescriptor getServiceDescriptor() {
    io.grpc.ServiceDescriptor result = serviceDescriptor;
    if (result == null) {
      synchronized (BukuServiceGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new BukuServiceFileDescriptorSupplier())
              .addMethod(getCreateBukuMethod())
              .addMethod(getReadBukuMethod())
              .addMethod(getUpdateBukuMethod())
              .addMethod(getDeleteBukuMethod())
              .addMethod(getListBukuMethod())
              .build();
        }
      }
    }
    return result;
  }
}
