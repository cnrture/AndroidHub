package com.canerture.androidhub.domain.usecase.agents

import com.canerture.androidhub.domain.mapper.mapToAgentRoleUI
import com.canerture.androidhub.domain.model.AgentGroupUI
import com.canerture.androidhub.domain.repository.ValorantRepository

class GetAgentsUseCase(
    private val valorantRepository: ValorantRepository
) {
    suspend operator fun invoke(): Result<List<AgentGroupUI>> {
        return valorantRepository.getAgents().map {
            it.mapToAgentRoleUI()
        }
    }
}
