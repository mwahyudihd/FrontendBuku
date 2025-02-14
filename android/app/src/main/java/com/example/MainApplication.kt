import com.example.grpc.GrpcModule

override fun getPackages(): List<ReactPackage> {
    return listOf(
        MainReactPackage(),
        object : ReactPackage {
            override fun createNativeModules(reactContext: ReactApplicationContext) =
                listOf(GrpcModule(reactContext))

            override fun createViewManagers(reactContext: ReactApplicationContext) = emptyList<ViewManager<*, *>>()
        }
    )
}