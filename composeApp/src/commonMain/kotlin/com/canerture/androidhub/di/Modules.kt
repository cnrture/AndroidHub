package com.canerture.androidhub.di

import com.canerture.androidhub.data.remote.ValorantService
import com.canerture.androidhub.data.repository.ValorantRepositoryImpl
import com.canerture.androidhub.domain.repository.ValorantRepository
import com.canerture.androidhub.domain.usecase.agents.GetAgentsUseCase
import org.koin.core.context.startKoin
import org.koin.core.module.dsl.factoryOf
import org.koin.dsl.KoinAppDeclaration
import org.koin.dsl.module

val dataModule = module {
    single<ValorantService> { ValorantService() }
    single<ValorantRepository> { ValorantRepositoryImpl(get()) }
}

val useCaseModule = module {
    factoryOf(::GetAgentsUseCase)
}

private val sharedModules = listOf(useCaseModule, dataModule)

fun initKoin(appDeclaration: KoinAppDeclaration) = startKoin {
    modules(sharedModules)
    appDeclaration()
}

fun initKoin() = initKoin { }