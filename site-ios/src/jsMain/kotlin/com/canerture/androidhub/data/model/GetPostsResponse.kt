package com.canerture.androidhub.data.model

import kotlinx.serialization.Serializable

@Serializable
data class GetPostsResponse(
    val totalPage: Int,
    val posts: List<Post>
)
