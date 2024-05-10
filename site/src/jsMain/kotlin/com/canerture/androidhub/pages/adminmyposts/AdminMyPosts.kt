package com.canerture.androidhub.pages.adminmyposts

import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import com.canerture.androidhub.common.Constants.SIDE_PANEL_WIDTH
import com.canerture.androidhub.common.Id
import com.canerture.androidhub.components.layouts.AdminPageLayout
import com.canerture.androidhub.components.widgets.ErrorView
import com.canerture.androidhub.components.widgets.LoadingIndicator
import com.canerture.androidhub.components.widgets.PostsView
import com.canerture.androidhub.components.widgets.SearchBar
import com.canerture.androidhub.data.getMyPosts
import com.canerture.androidhub.data.model.Post
import com.canerture.androidhub.data.searchPostsByTitle
import com.canerture.androidhub.navigation.Screen
import com.varabyte.kobweb.compose.css.CSSTransition
import com.varabyte.kobweb.compose.css.TransitionProperty
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxSize
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.compose.ui.modifiers.transition
import com.varabyte.kobweb.core.Page
import com.varabyte.kobweb.core.rememberPageContext
import com.varabyte.kobweb.silk.components.style.breakpoint.Breakpoint
import com.varabyte.kobweb.silk.theme.breakpoint.rememberBreakpoint
import kotlinx.browser.document
import kotlinx.coroutines.launch
import org.jetbrains.compose.web.css.ms
import org.jetbrains.compose.web.css.percent
import org.jetbrains.compose.web.css.px
import org.w3c.dom.HTMLInputElement

data class AdminMyPostsUIState(
    var isLoading: Boolean = true,
    var posts: List<Post> = emptyList(),
    var isError: Boolean = false,
)

@Page("/admin/my-posts")
@Composable
fun MyPostsScreen() {
    val context = rememberPageContext()
    val breakpoint = rememberBreakpoint()
    val scope = rememberCoroutineScope()

    var state by remember { mutableStateOf(AdminMyPostsUIState()) }

    LaunchedEffect(context.route) {
        getMyPosts(
            onSuccess = {
                state = state.copy(isLoading = false, posts = it)
            },
            onError = {
                state = state.copy(isLoading = false, isError = true)
            }
        )
    }

    AdminPageLayout {
        Column(
            modifier = Modifier
                .margin(topBottom = 50.px)
                .fillMaxSize()
                .padding(left = if (breakpoint > Breakpoint.MD) SIDE_PANEL_WIDTH.px else 0.px),
            verticalArrangement = Arrangement.Top,
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Box(
                modifier = Modifier
                    .fillMaxWidth(
                        if (breakpoint > Breakpoint.MD) 30.percent
                        else 50.percent
                    )
                    .margin(bottom = 24.px),
                contentAlignment = Alignment.Center
            ) {
                SearchBar(
                    breakpoint = breakpoint,
                    modifier = Modifier
                        .transition(CSSTransition(property = TransitionProperty.All, duration = 200.ms)),
                    onEnterClick = {
                        val searchInput =
                            (document.getElementById(Id.ADMIN_SEARCH_BAR) as HTMLInputElement).value
                        scope.launch {
                            state = state.copy(isLoading = true)
                            if (searchInput.isNotEmpty()) {
                                searchPostsByTitle(
                                    title = searchInput,
                                    onSuccess = {
                                        state = state.copy(isLoading = false, posts = it)
                                    },
                                    onError = {
                                        state = state.copy(isLoading = false, isError = true)
                                    }
                                )
                            } else {
                                getMyPosts(
                                    onSuccess = {
                                        state = state.copy(isLoading = false, posts = it)
                                    },
                                )
                            }
                        }
                    },
                    onSearchIconClick = {}
                )
            }

            if (state.isLoading) {
                LoadingIndicator()
            } else {
                if (state.isError) {
                    ErrorView("You don't have a post yet")
                    return@Column
                }
                PostsView(
                    breakpoint = breakpoint,
                    posts = state.posts,
                    onClick = { context.router.navigateTo(Screen.AdminCreate.passPostId(short = it)) }
                )
            }
        }
    }
}