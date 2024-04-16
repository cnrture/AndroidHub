package com.canerture.androidhub.data.repository

import com.canerture.androidhub.data.remote.ValorantService
import com.canerture.androidhub.domain.repository.ValorantRepository
import com.canerture.androidhub.data.model.BaseResponse

class ValorantRepositoryImpl(private val valorantService: ValorantService) : ValorantRepository {

    override suspend fun getAgents() = safeApiCall {
        valorantService.getAgents()
    }

    private suspend fun <T : Any> safeApiCall(call: suspend () -> BaseResponse<T>): Result<T?> {
        return try {
            val response = call()
            if (response.status == SUCCESS) {
                Result.success(response.data)
            } else {
                Result.failure(Exception(response.error.toString()))
            }
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    companion object {
        private const val SUCCESS = 200
    }
}
