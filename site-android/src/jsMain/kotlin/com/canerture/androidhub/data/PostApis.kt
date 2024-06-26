package com.canerture.androidhub.data

import com.canerture.androidhub.common.formatShort
import com.canerture.androidhub.data.model.AddPostRequest
import com.canerture.androidhub.data.model.AuthorDetail
import com.canerture.androidhub.data.model.GetPostsResponse
import com.canerture.androidhub.data.model.Post
import com.canerture.androidhub.data.model.UpdatePostRequest
import com.canerture.androidhub.utils.ApiUtils.delete
import com.canerture.androidhub.utils.ApiUtils.get
import com.canerture.androidhub.utils.ApiUtils.post
import com.canerture.androidhub.utils.ApiUtils.safeApiCall
import kotlinx.browser.localStorage
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json
import org.w3c.dom.get
import kotlin.js.Date

suspend fun getAdminAllPosts(
    onSuccess: (List<Post>) -> Unit = {},
    onError: (String) -> Unit = {}
) = safeApiCall<List<Post>>(
    call = { get("admin_all_posts") },
    onSuccess = onSuccess,
    onError = onError
)

suspend fun getPosts(
    page: Int = 0,
    onSuccess: (GetPostsResponse) -> Unit = {},
    onError: (String) -> Unit = {}
) = safeApiCall<GetPostsResponse>(
    call = { get("posts", "page" to page) },
    onSuccess = onSuccess,
    onError = onError
)

suspend fun getPopularPosts(
    onSuccess: (List<Post>) -> Unit = {},
    onError: (String) -> Unit = {}
) = safeApiCall<List<Post>>(
    call = { get("posts", "popular" to "") },
    onSuccess = onSuccess,
    onError = onError
)

suspend fun getPostDetail(
    short: String,
    onSuccess: (Post) -> Unit = {},
    onError: (String) -> Unit = {}
) = safeApiCall<Post>(
    call = { get("posts", "short" to short) },
    onSuccess = onSuccess,
    onError = onError
)

suspend fun getPendingPosts(
    onSuccess: (List<Post>) -> Unit = {},
    onError: (String) -> Unit = {}
) = safeApiCall<List<Post>>(
    call = { get("pending_posts") },
    onSuccess = onSuccess,
    onError = onError
)

suspend fun getDraftPosts(
    onSuccess: (List<Post>) -> Unit = {},
    onError: (String) -> Unit = {}
) = safeApiCall<List<Post>>(
    call = { get("draft_posts") },
    onSuccess = onSuccess,
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
        val id = localStorage["userId"] ?: ""
        val name = localStorage["name"] ?: ""
        val short = title.formatShort()
        post(
            path = "posts",
            body = Json.encodeToString(
                AddPostRequest(id, name, Date.now(), content, title, short, category, thumbnail, status)
            ).encodeToByteArray()
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
        val short = title.formatShort()
        post(
            path = "posts",
            body = Json.encodeToString(
                UpdatePostRequest(id, Date.now(), content, title, short, category, thumbnail, status)
            ).encodeToByteArray()
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
    call = { get("posts", "title" to title) },
    onSuccess = onSuccess,
    onError = onError
)

suspend fun getMyPosts(
    onSuccess: (AuthorDetail) -> Unit = {},
    onError: (String) -> Unit = {}
) = safeApiCall<AuthorDetail>(
    call = { get("posts", "authorId" to localStorage["userId"].orEmpty()) },
    onSuccess = onSuccess,
    onError = onError
)

suspend fun deletePost(
    id: Int,
    onSuccess: (String) -> Unit = {},
    onError: (String) -> Unit = {}
) = safeApiCall<String>(
    call = { delete("posts", "id" to id) },
    onSuccess = onSuccess,
    onError = onError
)

suspend fun getPostsByCategory(
    category: String,
    onSuccess: (List<Post>) -> Unit = {},
    onError: (String) -> Unit = {}
) = safeApiCall<List<Post>>(
    call = { get("posts", "category" to category) },
    onSuccess = onSuccess,
    onError = onError
)

suspend fun getPostsByAuthorId(
    authorId: String,
    onSuccess: (AuthorDetail) -> Unit = {},
    onError: (String) -> Unit = {}
) = safeApiCall<AuthorDetail>(
    call = { get("posts", "authorId" to authorId) },
    onSuccess = onSuccess,
    onError = onError
)