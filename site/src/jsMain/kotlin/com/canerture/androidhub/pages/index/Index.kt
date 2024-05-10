package com.canerture.androidhub.pages.index

import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import com.canerture.androidhub.components.layouts.PageLayout
import com.canerture.androidhub.components.widgets.ErrorView
import com.canerture.androidhub.components.widgets.LoadingIndicator
import com.canerture.androidhub.data.getPopularPosts
import com.canerture.androidhub.data.getPosts
import com.canerture.androidhub.data.model.Post
import com.canerture.androidhub.getSitePalette
import com.varabyte.kobweb.compose.css.Cursor
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.css.TextAlign
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.alignContent
import com.varabyte.kobweb.compose.ui.modifiers.backgroundColor
import com.varabyte.kobweb.compose.ui.modifiers.borderRadius
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.cursor
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.fontSize
import com.varabyte.kobweb.compose.ui.modifiers.fontWeight
import com.varabyte.kobweb.compose.ui.modifiers.height
import com.varabyte.kobweb.compose.ui.modifiers.id
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.onClick
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.compose.ui.modifiers.textAlign
import com.varabyte.kobweb.core.Page
import com.varabyte.kobweb.silk.components.icons.fa.FaBoltLightning
import com.varabyte.kobweb.silk.components.icons.fa.FaChevronLeft
import com.varabyte.kobweb.silk.components.icons.fa.FaChevronRight
import com.varabyte.kobweb.silk.components.layout.SimpleGrid
import com.varabyte.kobweb.silk.components.style.breakpoint.Breakpoint
import com.varabyte.kobweb.silk.components.style.breakpoint.ResponsiveValues
import com.varabyte.kobweb.silk.components.text.SpanText
import com.varabyte.kobweb.silk.theme.breakpoint.rememberBreakpoint
import kotlinx.browser.window
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import org.jetbrains.compose.web.css.AlignContent
import org.jetbrains.compose.web.css.cssRem
import org.jetbrains.compose.web.css.px
import org.w3c.dom.SMOOTH
import org.w3c.dom.ScrollBehavior
import org.w3c.dom.ScrollToOptions

data class IndexUIState(
    val isLoading: Boolean = true,
    val popularPosts: List<Post> = emptyList(),
    val latestPosts: List<Post> = emptyList(),
    val isError: Boolean = false,
    val totalPage: Int = 1,
    val page: Int = 1,
    val currentPage: Int = 1,
)

@Page("/")
@Composable
fun Index() {
    val breakpoint = rememberBreakpoint()
    val scope = rememberCoroutineScope()
    var state by remember { mutableStateOf(IndexUIState()) }

    LaunchedEffect(state.page) {
        getPosts(
            page = state.page,
            onSuccess = {
                state = state.copy(
                    isLoading = false,
                    latestPosts = it.posts,
                    totalPage = it.totalPage
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

    LaunchedEffect(Unit) {
        getPopularPosts(
            onSuccess = { posts ->
                state = state.copy(
                    popularPosts = posts
                )
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
            AndroidHeroContent(breakpoint)

            if (state.popularPosts.isNotEmpty()) {
                PopularPosts(state.popularPosts)
            }

            if (state.latestPosts.isNotEmpty()) {
                LatestPosts(state.latestPosts)
            }

            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(top = 1.cssRem, bottom = 6.cssRem)
                    .alignContent(AlignContent.Center),
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.Center
            ) {
                FaChevronLeft(
                    modifier = Modifier
                        .height(20.px)
                        .color(getSitePalette().blue)
                        .margin(right = 1.cssRem)
                        .cursor(Cursor.Pointer)
                        .onClick {
                            scope.launch {
                                window.document.getElementById("latest-posts")
                                    ?.scrollIntoView(ScrollToOptions(behavior = ScrollBehavior.SMOOTH))
                                delay(500)
                                state = state.copy(
                                    currentPage = state.currentPage - 1,
                                    page = state.currentPage - 1
                                )
                            }
                        },
                )
                for (i in 1..state.totalPage) {
                    PaginationItem(
                        page = i,
                        isActive = i == state.currentPage,
                        onClick = {
                            scope.launch {
                                window.document.getElementById("latest-posts")
                                    ?.scrollIntoView(ScrollToOptions(behavior = ScrollBehavior.SMOOTH))
                                delay(500)
                                state = state.copy(currentPage = it, page = it)
                            }
                        }
                    )
                }
                FaChevronRight(
                    modifier = Modifier
                        .height(20.px)
                        .color(getSitePalette().blue)
                        .margin(left = 1.cssRem)
                        .cursor(Cursor.Pointer)
                        .onClick {
                            scope.launch {
                                window.document.getElementById("latest-posts")
                                    ?.scrollIntoView(ScrollToOptions(behavior = ScrollBehavior.SMOOTH))
                                delay(500)
                                state = state.copy(
                                    currentPage = state.currentPage + 1,
                                    page = state.currentPage + 1
                                )
                            }
                        }
                )
            }
        }
    }
}

@Composable
fun PopularPosts(list: List<Post>) {
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
                .fontSize(20.px)
                .color(getSitePalette().blue.toRgb())
        )
    }
    SimpleGrid(
        modifier = Modifier.fillMaxWidth(),
        numColumns = ResponsiveValues(1, 1, 3, 3, 3),
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
    val breakpoint = rememberBreakpoint()
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
                .margin(right = 0.5.cssRem),
        )
        SpanText(
            text = "Latest Posts",
            modifier = Modifier
                .id("latest-posts")
                .textAlign(TextAlign.Center)
                .fontWeight(FontWeight.Bold)
                .fontSize(20.px)
                .color(getSitePalette().blue.toRgb())
        )
    }

    SimpleGrid(
        modifier = Modifier.fillMaxWidth().padding(leftRight = if (breakpoint < Breakpoint.MD) 1.cssRem else 6.cssRem),
        numColumns = ResponsiveValues(1, 1, 3, 3, 3),
        content = {
            list.forEach { article ->
                LatestArticleItem(
                    article = article
                )
            }
        }
    )
}

@Composable
private fun PaginationItem(
    page: Int,
    isActive: Boolean,
    onClick: (Int) -> Unit
) {
    SpanText(
        text = page.toString(),
        modifier = Modifier
            .borderRadius(1.cssRem)
            .padding(1.3.cssRem)
            .backgroundColor(if (isActive) getSitePalette().blue else getSitePalette().white)
            .color(if (isActive) getSitePalette().white else getSitePalette().blue)
            .fontWeight(FontWeight.Bold)
            .fontSize(16.px)
            .textAlign(TextAlign.Center)
            .margin(leftRight = 6.px)
            .cursor(Cursor.Pointer)
            .onClick { onClick(page) }
    )
}
