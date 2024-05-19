package com.canerture.androidhub.pages.category

import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import com.canerture.androidhub.components.layouts.PageLayout
import com.canerture.androidhub.components.widgets.ErrorView
import com.canerture.androidhub.components.widgets.LoadingIndicator
import com.canerture.androidhub.data.getPostsByCategory
import com.canerture.androidhub.data.model.Post
import com.canerture.androidhub.getSitePalette
import com.canerture.androidhub.pages.index.LatestArticleItem
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.css.TextAlign
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.alignContent
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.fontSize
import com.varabyte.kobweb.compose.ui.modifiers.fontWeight
import com.varabyte.kobweb.compose.ui.modifiers.height
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.compose.ui.modifiers.textAlign
import com.varabyte.kobweb.core.Page
import com.varabyte.kobweb.core.rememberPageContext
import com.varabyte.kobweb.silk.components.icons.fa.FaBoltLightning
import com.varabyte.kobweb.silk.components.layout.SimpleGrid
import com.varabyte.kobweb.silk.components.style.breakpoint.Breakpoint
import com.varabyte.kobweb.silk.components.style.breakpoint.ResponsiveValues
import com.varabyte.kobweb.silk.components.text.SpanText
import com.varabyte.kobweb.silk.theme.breakpoint.rememberBreakpoint
import kotlinx.browser.document
import org.jetbrains.compose.web.css.AlignContent
import org.jetbrains.compose.web.css.cssRem
import org.jetbrains.compose.web.css.px

data class CategoryUIState(
    val isLoading: Boolean = true,
    val posts: List<Post> = emptyList(),
    val category: String = "",
    val isError: Boolean = false
)

@Page("/category")
@Composable
fun Category() {
    val context = rememberPageContext()

    var state by remember { mutableStateOf(CategoryUIState()) }

    state = state.copy(category = context.route.queryParams["category"].orEmpty())

    LaunchedEffect(state.category) {
        state = state.copy(isLoading = true)
        document.title = state.category
        getPostsByCategory(
            category = state.category,
            onSuccess = { posts ->
                state = CategoryUIState(
                    isLoading = false,
                    posts = posts
                )
            },
            onError = {
                state = state.copy(isLoading = false, isError = true)
            }
        )
    }

    if (state.isLoading) {
        LoadingIndicator()
    } else {
        PageLayout("Home") {
            if (state.isError) {
                ErrorView()
                return@PageLayout
            }

            if (state.posts.isNotEmpty()) {
                CategoryPosts(state.category, state.posts)
            }
        }
    }
}

@Composable
private fun CategoryPosts(category: String, list: List<Post>) {
    val breakpoint = rememberBreakpoint()
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(bottom = 2.cssRem, top = if (breakpoint < Breakpoint.MD) 1.cssRem else 6.cssRem, leftRight = 6.cssRem),
        verticalAlignment = Alignment.CenterVertically
    ) {
        FaBoltLightning(
            modifier = Modifier
                .height(20.px)
                .color(getSitePalette().primary)
                .margin(right = 0.5.cssRem)
                .alignContent(AlignContent.Start),
        )
        SpanText(
            text = category,
            modifier = Modifier
                .textAlign(TextAlign.Center)
                .fontWeight(FontWeight.Bold)
                .fontSize(1.25.cssRem)
                .color(getSitePalette().secondary.toRgb())
        )
    }

    SimpleGrid(
        modifier = Modifier.fillMaxWidth().padding(leftRight = if (breakpoint < Breakpoint.MD) 1.cssRem else 6.cssRem),
        numColumns = ResponsiveValues(1, 2, 3, 3, 3),
        content = {
            list.forEach { article ->
                LatestArticleItem(
                    article = article
                )
            }
        }
    )
}
