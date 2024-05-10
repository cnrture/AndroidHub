package com.canerture.androidhub.data

import com.canerture.androidhub.data.model.Category
import com.canerture.androidhub.utils.ApiUtils.get
import com.canerture.androidhub.utils.ApiUtils.safeApiCall

suspend fun getCategories(
    onSuccess: (List<Category>) -> Unit = {},
    onError: (String) -> Unit = {}
) = safeApiCall<List<Category>>(
    call = { get("categories") },
    onSuccess = onSuccess,
    onError = onError
)
