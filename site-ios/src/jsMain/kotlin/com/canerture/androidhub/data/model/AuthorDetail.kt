package com.canerture.androidhub.data.model

import kotlinx.serialization.Serializable

@Serializable
data class AuthorDetail(
    val authorName: String,
    val posts: List<Post>,
)
