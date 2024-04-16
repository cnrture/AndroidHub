package com.canerture.androidhub

import androidx.compose.runtime.Composable
import com.canerture.androidhub.presentation.agents.AgentsScreen
import com.canerture.androidhub.presentation.agents.AgentsScreenModel
import com.canerture.androidhub.presentation.theme.ValorantTheme
import org.jetbrains.compose.ui.tooling.preview.Preview

@Composable
@Preview
fun App(
    viewModel: AgentsScreenModel
) {
    ValorantTheme {
        AgentsScreen(viewModel)
    }
}