package com.canerture.androidhub.data.model

import kotlinx.serialization.Serializable

@Serializable
data class BaseResponse<T>(
    val status: Int? = null,
    val message: String? = null,
    val data: T? = null
) {
    fun isSuccess() = status == 200
}