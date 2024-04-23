package com.canerture.androidhub.init

import com.canerture.androidhub.data.PostsRepositoryImpl
import com.canerture.androidhub.serialization.JsonSerializer
import com.varabyte.kobweb.api.data.add
import com.varabyte.kobweb.api.init.InitApi
import com.varabyte.kobweb.api.init.InitApiContext
import kotlinx.serialization.json.Json
import okhttp3.OkHttpClient

@InitApi
fun initJson(ctx: InitApiContext) {
    ctx.data.add(JsonSerializer)
}

@InitApi
fun initPostsRepository(ctx: InitApiContext) {
    ctx.data.add(
        PostsRepositoryImpl(
            json = ctx.data[Json::class.java]!!,
            httpClient = OkHttpClient.Builder().build()
        )
    )
}