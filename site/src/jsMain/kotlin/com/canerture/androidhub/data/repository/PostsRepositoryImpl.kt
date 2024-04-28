package com.canerture.androidhub.data.repository

import com.canerture.androidhub.common.Constants
import com.canerture.androidhub.common.Resource
import com.canerture.androidhub.data.BaseResponse
import com.canerture.androidhub.data.KtorApi
import com.canerture.androidhub.data.model.Post
import io.ktor.client.call.body
import io.ktor.client.request.get
import io.ktor.util.logging.KtorSimpleLogger
import io.ktor.util.logging.Logger
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.json.Json

class PostsRepositoryImpl : PostsRepository, KtorApi() {

    override suspend fun getPosts(): Resource<List<Post>> {
        return safeApiCall<List<Post>> {
            client.get(Constants.BASE_URL.plus("get_posts.php")).body<String>()
        }
    }

    private inline fun <reified T : Any> safeApiCall(call: () -> String): Resource<T> {
        return try {
            val response = call().parseData<BaseResponse<T>>()
            if (response.status == 200 && response.data != null) {
                Resource.Success(response.data)
            } else {
                println(response.message.orEmpty())
                Resource.Error(response.message.orEmpty())
            }
        } catch (e: Exception) {
            println(e.message.orEmpty())
            Resource.Error(e.message.orEmpty())
        }
    }

    private inline fun <reified T> String?.parseData(): T {
        println(this.toString())
        KtorSimpleLogger(this.toString())
        return Json.decodeFromString(this.toString())
    }
}