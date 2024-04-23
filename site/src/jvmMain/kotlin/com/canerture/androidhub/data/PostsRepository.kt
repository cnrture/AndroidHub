package com.canerture.androidhub.data

import com.canerture.androidhub.serialization.Post

interface PostsRepository {
    suspend fun getPosts(): List<Post>
}