package com.canerture.androidhub.domain.model

data class AgentGroupUI(
    val role: String,
    val roleIcon: String,
    val agents: List<AgentUI>
)

data class AgentUI(
    val abilities: List<AbilityUI>,
    val description: String,
    val displayName: String,
    val fullPortrait: String,
    val role: RoleUI,
    val id: String,
    val background: String,
)

data class AbilityUI(
    val description: String,
    val displayIcon: String,
    val displayName: String,
)

data class RoleUI(
    val displayIcon: String,
    val displayName: String
)
