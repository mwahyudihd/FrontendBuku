plugins {
    id("com.android.library")
    id("org.jetbrains.kotlin.android")
    id("com.google.protobuf") // Plugin untuk generate stub gRPC
}

android {
    namespace = "com.example.grpcnative"
    compileSdk = 34

    defaultConfig {
        minSdk = 21
        targetSdk = 34
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            proguardFiles(getDefaultProguardFile("proguard-android-optimize.txt"), "proguard-rules.pro")
        }
    }
}

dependencies {
    implementation("io.grpc:grpc-okhttp:1.55.1") // Transport gRPC
    implementation("io.grpc:grpc-protobuf:1.55.1") // Parsing protobuf
    implementation("io.grpc:grpc-stub:1.55.1") // Stub gRPC
    implementation("javax.annotation:javax.annotation-api:1.3.2")
}

protobuf {
    protoc {
        artifact = "com.google.protobuf:protoc:3.21.12"
    }
    plugins {
        grpc {
            artifact = "io.grpc:protoc-gen-grpc-java:1.55.1"
        }
    }
    generateProtoTasks {
        all().forEach {
            it.plugins {
                create("grpc")
            }
        }
    }
}