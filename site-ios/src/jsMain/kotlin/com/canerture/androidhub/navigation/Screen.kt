package com.canerture.androidhub.navigation

import com.canerture.androidhub.common.Constants.CATEGORY_PARAM
import com.canerture.androidhub.common.Constants.POST_AUTHOR_ID_PARAM
import com.canerture.androidhub.common.Constants.POST_SHORT_PARAM
import com.canerture.androidhub.common.Constants.QUERY_PARAM

sealed class Screen(val route: String) {
    data object HomePage : Screen(route = "/")

    data object PostPage : Screen(route = "/posts") {
        fun getPost(short: String) = "/posts?${POST_SHORT_PARAM}=$short"
    }

    data object AuthorPage : Screen(route = "/author") {
        fun getAuthor(authorId: String) = "/author?${POST_AUTHOR_ID_PARAM}=$authorId"
    }

    data object CategoryPage : Screen(route = "/category") {
        fun getCategoryPosts(category: String) = "/category?${CATEGORY_PARAM}=${category}"
    }

    data object Login : Screen(route = "/login")

    data object AdminCreate : Screen(route = "/admin/create-post") {
        fun passPostId(short: String) = "/admin/create-post?${POST_SHORT_PARAM}=$short"
    }

    data object AdminMyPosts : Screen(route = "/admin/my-posts")

    data object AdminAllPosts : Screen(route = "/admin/all-posts")

    data object SearchPage : Screen(route = "/search") {
        fun searchByTitle(query: String) = "/search?${QUERY_PARAM}=$query"
    }
}