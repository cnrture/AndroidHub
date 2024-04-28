package com.canerture.androidhub.data.repository

import com.canerture.androidhub.common.Resource
import com.canerture.androidhub.data.model.Post

interface PostsRepository {
    suspend fun getPosts(): Resource<List<Post>>
}