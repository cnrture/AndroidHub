package com.canerture.androidhub.domain.mapper

import com.canerture.androidhub.data.model.agents.Agent
import com.canerture.androidhub.domain.model.AbilityUI
import com.canerture.androidhub.domain.model.AgentGroupUI
import com.canerture.androidhub.domain.model.AgentUI
import com.canerture.androidhub.domain.model.RoleUI
import com.canerture.valorantcmp.data.model.agents.Ability
import com.canerture.valorantcmp.data.model.agents.Role

fun List<Agent>?.mapToAgentRoleUI(): List<AgentGroupUI> {
    val agents = this?.mapToAgentUI().orEmpty()
    return agents.groupBy { it.role.displayName }.map {
        AgentGroupUI(
            role = it.key,
            roleIcon = it.value.first().role.displayIcon,
            agents = it.value
        )
    }
}

fun List<Agent>?.mapToAgentUI() = this?.map { agent ->
    AgentUI(
        abilities = agent.abilities.mapToAbilityUI(),
        description = agent.description.orEmpty(),
        displayName = agent.displayName.orEmpty().uppercase(),
        fullPortrait = agent.fullPortraitV2 ?: agent.fullPortrait.orEmpty(),
        role = agent.role.mapToRoleUI(),
        id = agent.id.orEmpty(),
        background = agent.background.orEmpty(),
    )
}.orEmpty()

fun Agent?.mapToAgentUI() = AgentUI(
    abilities = this?.abilities.mapToAbilityUI(),
    description = this?.description.orEmpty(),
    displayName = this?.displayName.orEmpty().uppercase(),
    fullPortrait = this?.fullPortraitV2 ?: this?.fullPortrait.orEmpty(),
    role = this?.role.mapToRoleUI(),
    id = this?.id.orEmpty(),
    background = this?.background.orEmpty(),
)

fun Role?.mapToRoleUI() = RoleUI(
    displayIcon = this?.displayIcon.orEmpty(),
    displayName = this?.displayName.orEmpty()
)

fun List<Ability>?.mapToAbilityUI() = this?.map {
    AbilityUI(
        description = it.description.orEmpty(),
        displayIcon = it.displayIcon.orEmpty(),
        displayName = it.displayName.orEmpty(),
    )
}.orEmpty()
