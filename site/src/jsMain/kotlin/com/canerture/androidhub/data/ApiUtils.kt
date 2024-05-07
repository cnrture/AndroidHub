package com.canerture.androidhub.data

import io.ktor.client.HttpClient
import io.ktor.client.plugins.contentnegotiation.ContentNegotiation
import io.ktor.client.plugins.defaultRequest
import io.ktor.client.request.accept
import io.ktor.client.request.header
import io.ktor.http.ContentType
import io.ktor.http.contentType
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.json.Json

object ApiUtils {
    val client = HttpClient {
        defaultRequest {
            contentType(ContentType.Application.Json)
            accept(ContentType.Application.Json)
            header("Access-Control-Allow-Origin", "*")
        }

        install(ContentNegotiation) {
            Json {
                ignoreUnknownKeys = true
            }
        }
    }

    inline fun <reified T : Any> safeApiCall(
        call: () -> String,
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

    inline fun <reified T : Any> String?.parseData(): T {
        return Json.decodeFromString(this.toString())
    }
}