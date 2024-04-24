package com.canerture.androidhub.data

import com.canerture.androidhub.serialization.Post
import com.varabyte.kobweb.browser.api
import kotlinx.browser.window
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.json.Json

suspend fun getPosts(
    onSuccess: (List<Post>) -> Unit,
    onError: (Exception) -> Unit
) {
    try {
        val result = window.api.tryGet("get_posts.php")?.decodeToString()
        if (result != null) {
            onSuccess(Json.decodeFromString(result))
        } else {
            onError(Exception("Something went wrong"))
        }
    } catch (e: Exception) {
        println(e)
        onError(e)
    }
}