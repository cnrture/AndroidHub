package com.canerture.androidhub.pages.index

import com.canerture.androidhub.data.repository.PostsRepository
import org.koin.core.component.KoinComponent
import org.koin.core.component.inject

class IndexVM : KoinComponent {
    private val postsRepository: PostsRepository by inject()

    suspend fun getPosts() = postsRepository.getPosts()
}
