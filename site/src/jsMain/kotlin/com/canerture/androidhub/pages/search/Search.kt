package com.canerture.androidhub.pages.search

import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import com.canerture.androidhub.components.layouts.PageLayout
import com.canerture.androidhub.components.widgets.ErrorView
import com.canerture.androidhub.components.widgets.LoadingIndicator
import com.canerture.androidhub.data.model.Post
import com.canerture.androidhub.data.searchPostsByTitle
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
import com.varabyte.kobweb.silk.components.style.breakpoint.ResponsiveValues
import com.varabyte.kobweb.silk.components.text.SpanText
import kotlinx.browser.document
import org.jetbrains.compose.web.css.AlignContent
import org.jetbrains.compose.web.css.cssRem
import org.jetbrains.compose.web.css.px

data class SearchUIState(
    val isLoading: Boolean = true,
    val posts: List<Post> = emptyList(),
    val query: String = "",
    val isError: Boolean = false,
)

@Page("/search")
@Composable
fun Search() {
    val context = rememberPageContext()

    var state by remember { mutableStateOf(SearchUIState()) }

    state = state.copy(query = context.route.queryParams["query"].orEmpty())

    LaunchedEffect(state.query) {
        state = state.copy(isLoading = true)
        document.title = state.query
        searchPostsByTitle(
            title = state.query,
            onSuccess = { posts ->
                state = SearchUIState(
                    isLoading = false,
                    posts = posts
                )
            },
            onError = {
                state = state.copy(
                    isLoading = false,
                    isError = true
                )
            }
        )
    }

    if (state.isLoading) {
        LoadingIndicator()
    } else {
        PageLayout("Search") {
            if (state.isError) {
                ErrorView()
                return@PageLayout
            }

            if (state.posts.isNotEmpty()) {
                SearchPosts(state.query, state.posts)
            }
        }
    }
}

@Composable
private fun SearchPosts(query: String, list: List<Post>) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(bottom = 2.cssRem, top = 6.cssRem, leftRight = 6.cssRem),
        verticalAlignment = Alignment.CenterVertically
    ) {
        FaBoltLightning(
            modifier = Modifier
                .height(20.px)
                .color(getSitePalette().green)
                .margin(right = 0.5.cssRem)
                .alignContent(AlignContent.Start),
        )
        SpanText(
            text = "${list.size} posts found for \"$query\"",
            modifier = Modifier
                .textAlign(TextAlign.Center)
                .fontWeight(FontWeight.Bold)
                .fontSize(1.25.cssRem)
                .color(getSitePalette().blue.toRgb())
        )
    }

    SimpleGrid(
        modifier = Modifier.fillMaxWidth().padding(leftRight = 6.cssRem),
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