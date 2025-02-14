package com.example.grpc

import buku.BukuServiceGrpc
import buku.BukuOuterClass
import io.grpc.ManagedChannel
import io.grpc.ManagedChannelBuilder
import com.facebook.react.bridge.*
import kotlinx.coroutines.*

class GrpcModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    private val channel: ManagedChannel = ManagedChannelBuilder.forAddress("10.0.2.2", 50051)
        .usePlaintext()
        .build()

    private val stub: BukuServiceGrpc.BukuServiceBlockingStub = BukuServiceGrpc.newBlockingStub(channel)

    override fun getName(): String {
        return "GrpcModule"
    }

    @ReactMethod
    fun listBuku(promise: Promise) {
        CoroutineScope(Dispatchers.IO).launch {
            try {
                val response = stub.listBuku(BukuOuterClass.Empty.getDefaultInstance())
                val books = response.bukuList.map {
                    mapOf(
                        "id_buku" to it.idBuku,
                        "judul" to it.judul,
                        "penulis" to it.penulis,
                        "penerbit" to it.penerbit,
                        "tahun_terbit" to it.tahunTerbit,
                        "harga" to it.harga,
                        "stok" to it.stok
                    )
                }
                promise.resolve(Arguments.makeNativeArray(books))
            } catch (e: Exception) {
                promise.reject("GRPC_ERROR", e.message)
            }
        }
    }
}