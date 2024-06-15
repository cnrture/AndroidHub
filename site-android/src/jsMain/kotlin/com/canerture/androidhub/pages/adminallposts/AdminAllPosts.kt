package com.canerture.androidhub.pages.adminallposts

import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import com.canerture.androidhub.common.Constants.SIDE_PANEL_WIDTH
import com.canerture.androidhub.components.layouts.AdminPageLayout
import com.canerture.androidhub.components.widgets.PostsView
import com.canerture.androidhub.data.getAdminAllPosts
import com.canerture.androidhub.data.getDraftPosts
import com.canerture.androidhub.data.getPendingPosts
import com.canerture.androidhub.data.model.Post
import com.canerture.androidhub.getSitePalette
import com.canerture.androidhub.navigation.Screen
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxSize
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.fontSize
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.core.Page
import com.varabyte.kobweb.core.rememberPageContext
import com.varabyte.kobweb.silk.components.forms.Switch
import com.varabyte.kobweb.silk.components.forms.SwitchSize
import com.varabyte.kobweb.silk.components.layout.numColumns
import com.varabyte.kobweb.silk.components.style.breakpoint.Breakpoint
import com.varabyte.kobweb.silk.components.text.SpanText
import com.varabyte.kobweb.silk.theme.breakpoint.rememberBreakpoint
import org.jetbrains.compose.web.css.percent
import org.jetbrains.compose.web.css.px

data class AllPostsUIState(
    var isLoading: Boolean = true,
    var posts: List<Post> = emptyList(),
    var pendingPostEnabled: Boolean = false,
    var draftPostEnabled: Boolean = false,
)

@Page("/admin/all-posts")
@Composable
fun AdminAllPosts() {
    val context = rememberPageContext()
    val breakpoint = rememberBreakpoint()

    var state by remember { mutableStateOf(AllPostsUIState()) }

    LaunchedEffect(state.pendingPostEnabled || state.draftPostEnabled) {
        when {
            state.pendingPostEnabled -> getPendingPosts(
                onSuccess = {
                    state = state.copy(isLoading = false, posts = it)
                }
            )

            state.draftPostEnabled -> getDraftPosts(
                onSuccess = {
                    state = state.copy(isLoading = false, posts = it)
                }
            )

            else -> getAdminAllPosts(
                onSuccess = {
                    state = state.copy(isLoading = false, posts = it)
                }
            )
        }
    }

    AdminPageLayout {
        Column(
            modifier = Modifier
                .margin(topBottom = 60.px)
                .fillMaxSize()
                .padding(left = if (breakpoint > Breakpoint.MD) SIDE_PANEL_WIDTH.px else 0.px),
            verticalArrangement = Arrangement.Top,
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Row(
                modifier = Modifier
                    .fillMaxWidth(
                        if (breakpoint > Breakpoint.MD) 80.percent
                        else 90.percent
                    )
                    .margin(top = 80.px),
                horizontalArrangement = Arrangement.Start,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Switch(
                    modifier = Modifier.margin(right = 8.px),
                    checked = state.pendingPostEnabled,
                    onCheckedChange = {
                        state = state.copy(pendingPostEnabled = it)
                        if (it) {
                            state = state.copy(draftPostEnabled = false)
                        }
                    },
                    size = SwitchSize.MD
                )
                SpanText(
                    modifier = Modifier
                        .fontSize(14.px)
                        .color(getSitePalette().blue),
                    text = "Show Pending Posts"
                )

                Switch(
                    modifier = Modifier.margin(leftRight = 8.px),
                    checked = state.draftPostEnabled,
                    onCheckedChange = {
                        state = state.copy(draftPostEnabled = it)
                        if (it) {
                            state = state.copy(pendingPostEnabled = false)
                        }
                    },
                    size = SwitchSize.MD
                )
                SpanText(
                    modifier = Modifier
                        .fontSize(14.px)
                        .color(getSitePalette().blue),
                    text = "Show Draft Posts"
                )
            }
            PostsView(
                breakpoint = breakpoint,
                posts = state.posts,
                numColumns = numColumns(base = 1, sm = 1, md = 2, lg = 2),
                onClick = { context.router.navigateTo(Screen.AdminCreate.passPostId(short = it)) }
            )
        }
    }
}