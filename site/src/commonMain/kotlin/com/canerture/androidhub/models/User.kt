package com.canerture.androidhub.models

data class User(
    val id: String = "",
    val username: String = "",
    val password: String = "",
)

data class UserWithoutPassword(
    val id: String = "",
    val username: String = ""
)