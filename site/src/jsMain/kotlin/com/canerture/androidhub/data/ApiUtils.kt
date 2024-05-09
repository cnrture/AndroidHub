package com.canerture.androidhub.data

import kotlinx.serialization.decodeFromString
import kotlinx.serialization.json.Json

object ApiUtils {
    inline fun <reified T : Any> safeApiCall(
        call: () -> ByteArray,
        onSuccess: (T) -> Unit,
        onError: (String) -> Unit,
    ) {
        try {
            val response = call().parseData<BaseResponse<T>>()
            if (response.status == 200) {
                onSuccess(response.data!!)
            } else {
                onError(response.message.orEmpty())
            }
        } catch (e: Exception) {
            onError(e.message.orEmpty())
        }
    }

    inline fun <reified T : Any> ByteArray?.parseData(): T {
        val json = this?.decodeToString().orEmpty()
        return Json.decodeFromString(json)
    }
}