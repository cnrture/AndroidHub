package com.canerture.androidhub.data.model

data class User(
    val id: String = "",
    val username: String = "",
    val password: String = "",
)

data class UserWithoutPassword(
    val id: String = "",
    val username: String = ""
)