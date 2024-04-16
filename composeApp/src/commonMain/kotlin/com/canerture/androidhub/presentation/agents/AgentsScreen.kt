package com.canerture.androidhub.presentation.agents

import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState

@Composable
fun AgentsScreen(
    viewModel: AgentsScreenModel
) {

    val state = viewModel.state.collectAsState().value

    viewModel.getAgents()

    when (state) {
        AgentsState.Loading -> Text("Loading")
        AgentsState.Empty -> Text("Empty")

        is AgentsState.Content -> {
            Text(state.agents.toString())
            println(state.agents)
        }

        is AgentsState.ShowError -> Text(state.message.orEmpty())
    }
}