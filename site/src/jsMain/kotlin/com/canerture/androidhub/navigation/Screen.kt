package com.canerture.androidhub.navigation

import com.canerture.androidhub.data.model.Category
import com.canerture.androidhub.utils.Constants.CATEGORY_PARAM
import com.canerture.androidhub.utils.Constants.POST_SHORT_PARAM
import com.canerture.androidhub.utils.Constants.QUERY_PARAM

sealed class Screen(val route: String) {
    data object AdminHome : Screen(route = "/admin")
    data object AdminLogin : Screen(route = "/admin/login")
    data object AdminCreate : Screen(route = "/admin/create-post") {
        fun passPostId(id: Int) = "/admin/create-post?${POST_SHORT_PARAM}=$id"
    }

    data object AdminMyPosts : Screen(route = "/admin/my-posts") {
        fun searchByTitle(query: String) = "/admin/my-posts?${QUERY_PARAM}=$query"
    }

    data object HomePage : Screen(route = "/")
    data object CategoryPage : Screen(route = "/category") {
        fun getCategoryPosts(category: String) = "/category?${CATEGORY_PARAM}=${category}"
    }

    data object SearchPage : Screen(route = "/search/query") {
        fun searchByTitle(query: String) = "/search/query?${QUERY_PARAM}=$query"
    }

    data object PostPage : Screen(route = "/posts") {
        fun getPost(short: String) = "/posts?${POST_SHORT_PARAM}=$short"
    }
}