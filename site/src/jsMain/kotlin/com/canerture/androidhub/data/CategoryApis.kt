package com.canerture.androidhub.data

import com.canerture.androidhub.common.Constants
import com.canerture.androidhub.data.ApiUtils.safeApiCall
import com.canerture.androidhub.data.model.Category
import com.varabyte.kobweb.browser.http.http
import kotlinx.browser.window

suspend fun getCategories(
    onSuccess: (List<Category>) -> Unit = {},
    onError: (String) -> Unit = {}
) = safeApiCall<List<Category>>(
    call = {
        window.http.get(Constants.BASE_URL.plus("categories.php"))
    },
    onSuccess = onSuccess,
    onError = onError
)
