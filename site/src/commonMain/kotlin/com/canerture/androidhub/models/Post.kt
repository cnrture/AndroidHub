package com.canerture.androidhub.models

import kotlinx.serialization.Serializable

@Serializable
data class Post(
    val id: String = "",
    val author: String = "",
    val date: Double = 0.0,
    val title: String,
    val subtitle: String,
    val thumbnail: String,
    val content: String,
    val category: Category,
    val popular: Boolean = false,
    val main: Boolean = false,
    val sponsored: Boolean = false
)

@Serializable
data class PostWithoutDetails(
    val id: String = "",
    val author: String,
    val date: Double,
    val title: String,
    val subtitle: String,
    val thumbnail: String,
    val category: Category,
    val popular: Boolean = false,
    val main: Boolean = false,
    val sponsored: Boolean = false
)