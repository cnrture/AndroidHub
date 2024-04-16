package com.canerture.androidhub.presentation.agents

import com.canerture.androidhub.domain.model.AgentGroupUI
import com.canerture.androidhub.domain.usecase.agents.GetAgentsUseCase
import com.rickclephas.kmm.viewmodel.KMMViewModel
import com.rickclephas.kmm.viewmodel.coroutineScope
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch

class AgentsScreenModel(
    private val getAgentsUseCase: GetAgentsUseCase
) : KMMViewModel() {

    private val mutableState: MutableStateFlow<AgentsState> = MutableStateFlow(AgentsState.Loading)
    val state: StateFlow<AgentsState> = mutableState.asStateFlow()

    fun getAgents() {
        viewModelScope.coroutineScope.launch {
            getAgentsUseCase().onSuccess {
                if (it.isEmpty()) {
                    setState { AgentsState.Empty }
                } else {
                    setState { AgentsState.Content(it) }
                }
            }.onFailure {
                setState { AgentsState.ShowError(it.message) }
            }
        }
    }

    private fun setState(reducer: AgentsState.() -> AgentsState) {
        mutableState.update {
            reducer(it)
        }
    }
}

sealed interface AgentsState {
    data object Loading : AgentsState
    data object Empty : AgentsState
    data class Content(val agents: List<AgentGroupUI>) : AgentsState
    data class ShowError(val message: String?) : AgentsState
}
