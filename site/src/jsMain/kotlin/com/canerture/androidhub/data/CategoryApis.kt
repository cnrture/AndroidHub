package com.canerture.androidhub.data

import com.canerture.androidhub.common.Constants
import com.canerture.androidhub.data.ApiUtils.client
import com.canerture.androidhub.data.ApiUtils.safeApiCall
import com.canerture.androidhub.data.model.Category
import io.ktor.client.call.body
import io.ktor.client.request.get

suspend fun getCategories(
    onSuccess: (List<Category>) -> Unit = {},
    onError: (String) -> Unit = {}
) = safeApiCall<List<Category>>(
    call = {
        client.get(Constants.BASE_URL.plus("categories.php")).body<String>()
    },
    onSuccess = onSuccess,
    onError = onError
)
