package com.canerture.androidhub.data.model

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

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
