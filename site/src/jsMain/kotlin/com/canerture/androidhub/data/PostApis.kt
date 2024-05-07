package com.canerture.androidhub.data

import com.canerture.androidhub.common.Constants
import com.canerture.androidhub.data.ApiUtils.client
import com.canerture.androidhub.data.ApiUtils.safeApiCall
import com.canerture.androidhub.data.model.AddPostRequest
import com.canerture.androidhub.data.model.Post
import com.canerture.androidhub.data.model.UpdatePostRequest
import io.ktor.client.call.body
import io.ktor.client.request.get
import io.ktor.client.request.parameter
import io.ktor.client.request.post
import io.ktor.client.request.put
import io.ktor.client.request.setBody
import kotlinx.browser.localStorage
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json
import org.w3c.dom.get
import kotlin.js.Date

suspend fun getPosts(
    onSuccess: (List<Post>) -> Unit = {},
    onError: (String) -> Unit = {}
) = safeApiCall<List<Post>>(
    call = {
        client.get(Constants.BASE_URL.plus("posts.php")).body<String>()
    },
    onSuccess = onSuccess,
    onError = onError
)

suspend fun getPostDetail(
    short: String,
    onSuccess: (Post) -> Unit = {},
    onError: (String) -> Unit = {}
) = safeApiCall<Post>(
    call = {
        client.get(Constants.BASE_URL.plus("posts.php")) {
            parameter("short", short)
        }.body<String>()
    },
    onSuccess = onSuccess,
    onError = onError
)

suspend fun addPost(
    content: String,
    title: String,
    category: String,
    thumbnail: String,
    onSuccess: (String) -> Unit = {},
    onError: (String) -> Unit = {}
) = safeApiCall<String>(
    call = {
        client.post(Constants.BASE_URL.plus("posts.php")) {
            val short = title.replace(" ", "-").lowercase()
                .replace("ğ", "g")
                .replace("ü", "u")
                .replace("ş", "s")
                .replace("ı", "i")
                .replace("ö", "o")
                .replace("ç", "c")
            val request = Json.encodeToString(
                AddPostRequest(
                    authorId = localStorage["userId"] ?: "",
                    authorName = localStorage["name"] ?: "",
                    date = Date.now(),
                    content = content,
                    title = title,
                    short = short,
                    category = category,
                    thumbnail = thumbnail
                )
            )
            setBody(request)
        }.body<String>()
    },
    onSuccess = onSuccess,
    onError = onError
)

suspend fun updatePost(
    id: Int,
    content: String,
    title: String,
    category: String,
    thumbnail: String,
    onSuccess: (String) -> Unit = {},
    onError: (String) -> Unit = {}
) = safeApiCall<String>(
    call = {
        client.put(Constants.BASE_URL.plus("posts.php")) {
            val short = title.replace(" ", "-").lowercase()
                .replace("ğ", "g")
                .replace("ü", "u")
                .replace("ş", "s")
                .replace("ı", "i")
                .replace("ö", "o")
                .replace("ç", "c")
            val request = Json.encodeToString(
                UpdatePostRequest(
                    id = id,
                    date = Date.now(),
                    content = content,
                    title = title,
                    short = short,
                    category = category,
                    thumbnail = thumbnail
                )
            )
            setBody(request)
        }.body<String>()
    },
    onSuccess = onSuccess,
    onError = onError
)

suspend fun searchPostsByTitle(
    title: String,
    onSuccess: (List<Post>) -> Unit = {},
    onError: (String) -> Unit = {}
) = safeApiCall<List<Post>>(
    call = {
        client.get(Constants.BASE_URL.plus("posts.php")) {
            parameter("title", title)
        }.body<String>()
    },
    onSuccess = onSuccess,
    onError = onError
)

suspend fun getMyPosts(
    onSuccess: (List<Post>) -> Unit = {},
    onError: (String) -> Unit = {}
) = safeApiCall<List<Post>>(
    call = {
        client.get(Constants.BASE_URL.plus("posts.php")) {
            parameter("authorId", localStorage["userId"] ?: "")
        }.body<String>()
    },
    onSuccess = onSuccess,
    onError = onError
)

suspend fun deleteSelectedPosts(
    ids: List<Int>,
    onSuccess: (String) -> Unit = {},
    onError: (String) -> Unit = {}
) = safeApiCall<String>(
    call = {
        client.get(Constants.BASE_URL.plus("posts.php")) {
            parameter("authorId", localStorage["userId"] ?: "")
        }.body<String>()
    },
    onSuccess = onSuccess,
    onError = onError
)

suspend fun getPostsByCategory(
    category: String,
    onSuccess: (List<Post>) -> Unit = {},
    onError: (String) -> Unit = {}
) = safeApiCall<List<Post>>(
    call = {
        client.get(Constants.BASE_URL.plus("posts.php")) {
            parameter("category", category)
        }.body<String>()
    },
    onSuccess = onSuccess,
    onError = onError
)