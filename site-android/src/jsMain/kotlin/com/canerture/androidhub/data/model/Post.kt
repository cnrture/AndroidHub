package com.canerture.androidhub.data.model

import kotlinx.serialization.Serializable

@Serializable
data class AddPostRequest(
    val authorId: String = "",
    val authorName: String = "",
    val date: Double = 0.0,
    val content: String = "",
    val title: String = "",
    val short: String = "",
    val category: String = "",
    val thumbnail: String = "",
    val status: String = "",
)

@Serializable
data class UpdatePostRequest(
    val id: Int = 0,
    val date: Double = 0.0,
    val content: String = "",
    val title: String = "",
    val short: String = "",
    val category: String = "",
    val thumbnail: String = "",
    val status: String = "",
)

@Serializable
data class Post(
    val id: Int = 0,
    val authorId: String = "",
    val authorName: String = "",
    val date: Double = 0.0,
    val content: String = "",
    val title: String = "",
    val short: String = "",
    val category: Category = Category(),
    val thumbnail: String = "",
    val commentCount: Int = 0,
    val status: String = "",
)