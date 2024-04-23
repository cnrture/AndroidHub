package com.canerture.androidhub.api

import com.canerture.androidhub.data.PostsRepository
import com.varabyte.kobweb.api.Api
import com.varabyte.kobweb.api.ApiContext
import com.varabyte.kobweb.api.data.getValue
import com.varabyte.kobweb.api.http.setBodyText
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json

@Api(routeOverride = "get_posts.php")
suspend fun getPosts(context: ApiContext) {
    try {
        val posts = context.data.getValue<PostsRepository>().getPosts()
        context.res.setBodyText(Json.encodeToString(posts))
    } catch (e: Exception) {
        context.res.setBodyText(Json.encodeToString(e))
    }
}