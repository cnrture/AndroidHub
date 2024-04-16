package com.canerture.androidhub.data.model

import kotlinx.serialization.Serializable

@Serializable
data class Ability(
    val description: String?,
    val displayIcon: String?,
    val displayName: String?,
    val slot: String?
)
