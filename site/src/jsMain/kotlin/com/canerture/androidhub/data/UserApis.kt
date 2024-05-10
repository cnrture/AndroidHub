package com.canerture.androidhub.data

import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import com.canerture.androidhub.data.model.LoginRequest
import com.canerture.androidhub.data.model.RegisterRequest
import com.canerture.androidhub.data.model.User
import com.canerture.androidhub.utils.ApiUtils.get
import com.canerture.androidhub.utils.ApiUtils.post
import com.canerture.androidhub.utils.ApiUtils.safeApiCall
import kotlinx.browser.localStorage
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json
import org.w3c.dom.get
import org.w3c.dom.set

suspend fun login(
    email: String,
    password: String,
    onSuccess: (User) -> Unit = {},
    onError: (String) -> Unit = {}
) = safeApiCall<User>(
    call = {
        post(
            path = "login",
            body = Json.encodeToString(LoginRequest(email, password)).encodeToByteArray()
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
        post(
            path = "register",
            body = Json.encodeToString(RegisterRequest(name, email, password)).encodeToByteArray()
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
    call = { get("check_user_id", "userId" to userId) },
    onSuccess = onSuccess,
    onError = onError
)

@Composable
fun isUserLoggedIn(): Boolean {
    val remembered = remember { localStorage["remember"].toBoolean() }
    val userId = remember { localStorage["userId"] }
    var userIdExists by remember { mutableStateOf<Boolean?>(null) }
    LaunchedEffect(key1 = Unit) {
        if (!userId.isNullOrEmpty()) {
            checkUserId(
                userId = userId,
                onSuccess = {
                    userIdExists = it
                },
                onError = {
                    userIdExists = null
                }
            )
        }
    }

    return remembered && userIdExists ?: false
}

fun logout() {
    localStorage["remember"] = "false"
    localStorage["userId"] = ""
    localStorage["username"] = ""
}