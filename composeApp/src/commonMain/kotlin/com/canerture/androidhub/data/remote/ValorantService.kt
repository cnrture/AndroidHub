package com.canerture.androidhub.data.remote

import com.canerture.androidhub.data.model.Agent
import com.canerture.androidhub.data.model.BaseResponse
import io.ktor.client.call.body
import io.ktor.client.request.get

class ValorantService : KtorApi() {

    private val baseUrl = "https://valorant-api.com/"
    private val agents = baseUrl.plus("v1/agents")

    suspend fun getAgents(): BaseResponse<List<Agent>> {
        return client.get(agents.plus("?isPlayableCharacter=true")).body<BaseResponse<List<Agent>>>()
    }
}
