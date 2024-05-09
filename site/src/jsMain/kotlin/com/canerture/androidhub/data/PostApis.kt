package com.canerture.androidhub.data

import com.canerture.androidhub.common.Constants
import com.canerture.androidhub.data.ApiUtils.safeApiCall
import com.canerture.androidhub.data.model.AddPostRequest
import com.canerture.androidhub.data.model.Post
import com.canerture.androidhub.data.model.UpdatePostRequest
import com.varabyte.kobweb.browser.http.http
import kotlinx.browser.localStorage
import kotlinx.browser.window
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json
import org.w3c.dom.get
import kotlin.js.Date

suspend fun getPosts(
    onSuccess: (List<Post>) -> Unit = {},
    onError: (String) -> Unit = {}
) = safeApiCall<List<Post>>(
    call = {
        window.http.get(
            resource = Constants.BASE_URL.plus("posts")
        )
    },
    onSuccess = {
        onSuccess(it.sortedByDescending { post -> post.date })
    },
    onError = onError
)

suspend fun getPopularPosts(
    onSuccess: (List<Post>) -> Unit = {},
    onError: (String) -> Unit = {}
) = safeApiCall<List<Post>>(
    call = {
        window.http.get(Constants.BASE_URL.plus("posts").plus("?popular="))
    },
    onSuccess = {
        onSuccess(it.sortedByDescending { post -> post.date })
    },
    onError = onError
)

suspend fun getPostDetail(
    short: String,
    onSuccess: (Post) -> Unit = {},
    onError: (String) -> Unit = {}
) = safeApiCall<Post>(
    call = {
        window.http.get(Constants.BASE_URL.plus("posts").plus("?short=$short"))
    },
    onSuccess = onSuccess,
    onError = onError
)

suspend fun getPendingPosts(
    onSuccess: (List<Post>) -> Unit = {},
    onError: (String) -> Unit = {}
) = safeApiCall<List<Post>>(
    call = {
        window.http.get(Constants.BASE_URL.plus("pending_posts"))
    },
    onSuccess = {
        onSuccess(it.sortedByDescending { post -> post.date })
    },
    onError = onError
)

suspend fun addPost(
    content: String,
    title: String,
    category: String,
    thumbnail: String,
    status: String,
    onSuccess: (String) -> Unit = {},
    onError: (String) -> Unit = {}
) = safeApiCall<String>(
    call = {
        val short = title.replace(" ", "-").lowercase()
            .replace("ğ", "g")
            .replace("ü", "u")
            .replace("ş", "s")
            .replace("ı", "i")
            .replace("ö", "o")
            .replace("ç", "c")
            .replace("'", "")
        val request = Json.encodeToString(
            AddPostRequest(
                authorId = localStorage["userId"] ?: "",
                authorName = localStorage["name"] ?: "",
                date = Date.now(),
                content = content,
                title = title,
                short = short,
                category = category,
                thumbnail = thumbnail,
                status = status
            )
        ).encodeToByteArray()

        window.http.post(
            resource = Constants.BASE_URL.plus("posts"),
            body = request
        )
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
    status: String,
    onSuccess: (String) -> Unit = {},
    onError: (String) -> Unit = {}
) = safeApiCall<String>(
    call = {
        val short = title.replace(" ", "-").lowercase()
            .replace("ğ", "g")
            .replace("ü", "u")
            .replace("ş", "s")
            .replace("ı", "i")
            .replace("ö", "o")
            .replace("ç", "c")
            .replace("'", "")
        val request = Json.encodeToString(
            UpdatePostRequest(
                id = id,
                date = Date.now(),
                content = content,
                title = title,
                short = short,
                category = category,
                thumbnail = thumbnail,
                status = status
            )
        ).encodeToByteArray()

        window.http.post(
            resource = Constants.BASE_URL.plus("posts"),
            body = request
        )
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
        window.http.get(
            resource = Constants.BASE_URL.plus("posts").plus("?title=$title")
        )
    },
    onSuccess = {
        onSuccess(it.sortedByDescending { post -> post.date })
    },
    onError = onError
)

suspend fun getMyPosts(
    onSuccess: (List<Post>) -> Unit = {},
    onError: (String) -> Unit = {}
) = safeApiCall<List<Post>>(
    call = {
        window.http.get(
            resource = Constants.BASE_URL.plus("posts").plus("?authorId=${localStorage["userId"]}")
        )
    },
    onSuccess = {
        onSuccess(it.sortedByDescending { post -> post.date })
    },
    onError = onError
)

suspend fun deletePost(
    id: Int,
    onSuccess: (String) -> Unit = {},
    onError: (String) -> Unit = {}
) = safeApiCall<String>(
    call = {
        window.http.delete(
            resource = Constants.BASE_URL.plus("posts").plus("?id=$id")
        )
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
        window.http.get(
            resource = Constants.BASE_URL.plus("posts").plus("?category=$category")
        )
    },
    onSuccess = {
        onSuccess(it.sortedByDescending { post -> post.date })
    },
    onError = onError
)