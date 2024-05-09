package com.canerture.androidhub.data

import com.canerture.androidhub.common.Constants
import com.canerture.androidhub.data.ApiUtils.safeApiCall
import com.canerture.androidhub.data.model.LoginRequest
import com.canerture.androidhub.data.model.RegisterRequest
import com.canerture.androidhub.data.model.User
import com.varabyte.kobweb.browser.http.http
import kotlinx.browser.window
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json

suspend fun login(
    email: String,
    password: String,
    onSuccess: (User) -> Unit = {},
    onError: (String) -> Unit = {}
) = safeApiCall<User>(
    call = {
        val request = Json.encodeToString(LoginRequest(email, password)).encodeToByteArray()
        window.http.post(
            resource = Constants.BASE_URL.plus("login.php"),
            body = request
        )
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
        val request = Json.encodeToString(RegisterRequest(name, email, password)).encodeToByteArray()
        window.http.post(
            resource = Constants.BASE_URL.plus("register.php"),
            body = request
        )
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
        window.http.get(
            resource = Constants.BASE_URL.plus("check_user_id.php").plus("?userId=$userId")
        )
    },
    onSuccess = onSuccess,
    onError = onError
)