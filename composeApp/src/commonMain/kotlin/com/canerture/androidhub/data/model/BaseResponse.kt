package com.canerture.valorantcmp.data.model

@Serializable
open class BaseResponse<T>(
    val status: Int? = null,
    val error: String? = null,
    val data: T? = null,
)
