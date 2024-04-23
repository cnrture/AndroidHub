package com.canerture.androidhub.serialization

import kotlinx.serialization.ExperimentalSerializationApi
import kotlinx.serialization.json.Json

val JsonSerializer = Json {
    @ExperimentalSerializationApi
    ignoreUnknownKeys = true
}
