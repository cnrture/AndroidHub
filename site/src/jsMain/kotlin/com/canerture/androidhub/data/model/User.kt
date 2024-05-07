package com.canerture.androidhub.data.model

import kotlinx.serialization.Serializable

@Serializable
data class User(
    val userId: String,
    val name: String,
    val email: String,
    val isAdmin: Boolean
)
