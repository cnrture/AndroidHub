package com.canerture.androidhub.pages.index

import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import com.canerture.androidhub.components.layouts.PageLayout
import com.canerture.androidhub.data.getPosts
import com.canerture.androidhub.data.model.Post
import com.canerture.androidhub.getSitePalette
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.css.TextAlign
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
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
import com.varabyte.kobweb.silk.components.icons.fa.FaBoltLightning
import com.varabyte.kobweb.silk.components.layout.SimpleGrid
import com.varabyte.kobweb.silk.components.style.breakpoint.ResponsiveValues
import com.varabyte.kobweb.silk.components.text.SpanText
import com.varabyte.kobweb.silk.theme.breakpoint.rememberBreakpoint
import org.jetbrains.compose.web.css.AlignContent
import org.jetbrains.compose.web.css.cssRem
import org.jetbrains.compose.web.css.px

data class IndexUIState(
    val isLoading: Boolean = true,
    val popularPosts: List<Post> = emptyList(),
    val latestPosts: List<Post> = emptyList(),
)

@Page("/")
@Composable
fun Index() {
    val breakpoint = rememberBreakpoint()

    var state by remember { mutableStateOf(IndexUIState()) }

    LaunchedEffect(Unit) {
        getPosts(
            onSuccess = { posts ->
                state = IndexUIState(
                    isLoading = false,
                    popularPosts = posts,
                    latestPosts = posts
                )
            }
        )
    }

    PageLayout("Home") {
        AndroidHeroContent(breakpoint)

        if (state.popularPosts.isNotEmpty()) {
            PopularPosts(
                list = state.popularPosts
            )
        }

        if (state.latestPosts.isNotEmpty()) {
            LatestPosts(
                list = state.latestPosts
            )
        }
    }
}

@Composable
fun PopularPosts(
    list: List<Post>,
    onPostClick: (String) -> Unit = {},
) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(bottom = 2.cssRem, top = 6.cssRem)
            .alignContent(AlignContent.Center),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.Center
    ) {
        FaBoltLightning(
            modifier = Modifier
                .height(20.px)
                .color(getSitePalette().green)
                .margin(right = 0.5.cssRem),
        )
        SpanText(
            text = "Popular Posts",
            modifier = Modifier
                .textAlign(TextAlign.Center)
                .fontWeight(FontWeight.Bold)
                .fontSize(1.25.cssRem)
                .color(getSitePalette().blue.toRgb())
        )
    }
    SimpleGrid(
        modifier = Modifier.fillMaxWidth(),
        numColumns = ResponsiveValues(1, 2, 3, 3, 3),
    ) {
        list.take(3).forEach { article ->
            PopularArticleItem(
                article = article
            )
        }
    }
}

@Composable
fun LatestPosts(
    list: List<Post>,
) {
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
            text = "Latest Posts",
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
