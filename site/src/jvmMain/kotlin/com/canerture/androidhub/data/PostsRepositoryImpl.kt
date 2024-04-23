package com.canerture.androidhub.data

import com.canerture.androidhub.serialization.GetPostsResponse
import com.canerture.androidhub.serialization.Post
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.json.Json
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.OkHttpClient
import okhttp3.Request

const val BASE_URL = "https://androidhub.dev/api/"
val JSON_MEDIA_TYPE = "application/json".toMediaType()

class PostsRepositoryImpl(
    private val json: Json,
    private val httpClient: OkHttpClient,
) : PostsRepository {
    override suspend fun getPosts(): List<Post> {
        val request = Request.Builder()
            .url("${BASE_URL}get_posts.php")
            .get()
            .build()

        val response = httpClient.newCall(request).execute()

        return json.decodeFromString<GetPostsResponse>(response.body.toString()).posts
    }
}