package com.canerture.androidhub.data

import com.canerture.androidhub.common.Constants
import com.canerture.androidhub.data.ApiUtils.client
import com.canerture.androidhub.data.ApiUtils.safeApiCall
import com.canerture.androidhub.data.model.LoginRequest
import com.canerture.androidhub.data.model.RegisterRequest
import com.canerture.androidhub.data.model.User
import io.ktor.client.call.body
import io.ktor.client.request.get
import io.ktor.client.request.parameter
import io.ktor.client.request.post
import io.ktor.client.request.setBody
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json

suspend fun login(
    email: String,
    password: String,
    onSuccess: (User) -> Unit = {},
    onError: (String) -> Unit = {}
) = safeApiCall<User>(
    call = {
        client.post(Constants.BASE_URL.plus("login.php")) {
            val request = Json.encodeToString(LoginRequest(email, password))
            setBody(request)
        }.body<String>()
    },
    onSuccess = onSuccess,
    onError = onError
)

suspend fun register(
    name: String,
    email: String,
    password: String,
    onSuccess: (User) -> Unit = {},
    onError: (String) -> Unit = {}
) = safeApiCall<User>(
    call = {
        client.post(Constants.BASE_URL.plus("register.php")) {
            val request = Json.encodeToString(RegisterRequest(name, email, password))
            setBody(request)
        }.body<String>()
    },
    onSuccess = onSuccess,
    onError = onError
)

suspend fun checkUserId(
    userId: String,
    onSuccess: (Boolean) -> Unit = {},
    onError: (String) -> Unit = {}
) = safeApiCall<Boolean>(
    call = {
        client.get(Constants.BASE_URL.plus("check_user_id.php")) {
            parameter("userId", userId)
        }.body<String>()
    },
    onSuccess = onSuccess,
    onError = onError
)