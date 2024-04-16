package com.canerture.androidhub.data.model.agents

import com.canerture.valorantcmp.data.model.agents.Ability
import com.canerture.valorantcmp.data.model.agents.Role
import kotlinx.serialization.SerialName

@Serializable
data class Agent(
    val abilities: List<Ability>?,
    val description: String?,
    val displayName: String?,
    val fullPortrait: String?,
    val fullPortraitV2: String?,
    val role: Role?,
    @SerialName("uuid") val id: String?,
    val background: String?,
)
