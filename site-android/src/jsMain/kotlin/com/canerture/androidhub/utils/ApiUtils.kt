package com.canerture.androidhub.utils

import com.canerture.androidhub.common.Constants
import com.canerture.androidhub.data.model.BaseResponse
import com.varabyte.kobweb.browser.http.http
import kotlinx.browser.window
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

    suspend fun get(path: String, param: Pair<String, Any>? = null): ByteArray {
        val url = if (param == null) {
            Constants.BASE_URL.plus(path)
        } else {
            Constants.BASE_URL.plus(path).plus("?${param.first}=${param.second}")
        }
        return window.http.get(url)
    }

    suspend fun post(path: String, body: ByteArray): ByteArray {
        return window.http.post(
            resource = Constants.BASE_URL.plus(path),
            body = body
        )
    }

    suspend fun put(path: String, body: ByteArray): ByteArray {
        return window.http.put(
            resource = Constants.BASE_URL.plus(path),
            body = body
        )
    }

    suspend fun delete(path: String, param: Pair<String, Any>? = null): ByteArray {
        val url = if (param == null) {
            Constants.BASE_URL.plus(path)
        } else {
            Constants.BASE_URL.plus(path).plus("?${param.first}=${param.second}")
        }
        return window.http.delete(url)
    }

    inline fun <reified T : Any> ByteArray?.parseData(): T {
        val json = this?.decodeToString().orEmpty()
        return Json.decodeFromString(json)
    }
}