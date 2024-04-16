package com.canerture.androidhub.domain.repository

import com.canerture.androidhub.data.model.Agent

interface ValorantRepository {
    suspend fun getAgents(): Result<List<Agent>?>
}