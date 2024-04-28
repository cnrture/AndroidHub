package com.canerture.androidhub.data.model

import kotlinx.serialization.Serializable

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