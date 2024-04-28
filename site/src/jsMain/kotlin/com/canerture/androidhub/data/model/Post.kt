package com.canerture.androidhub.data.model

import kotlinx.serialization.Serializable

@Serializable
data class Post(
    val id: Int = 0,
    val postAuthor: String = "",
    val postDate: Double = 0.0,
    val postContent: String,
    val postTitle: String,
    val postName: String,
    val postModified: Double = 0.0,
)