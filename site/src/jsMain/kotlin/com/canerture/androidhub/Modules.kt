package com.canerture.androidhub

import com.canerture.androidhub.data.repository.PostsRepository
import com.canerture.androidhub.data.repository.PostsRepositoryImpl
import org.koin.core.context.startKoin
import org.koin.dsl.module

val dataModule = module {
    single<PostsRepository> { PostsRepositoryImpl() }
}

fun initKoin() = startKoin { modules(dataModule) }
