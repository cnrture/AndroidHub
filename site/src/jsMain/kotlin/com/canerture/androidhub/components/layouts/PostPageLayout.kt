package com.canerture.androidhub.components.layouts

import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import com.canerture.androidhub.components.sections.Footer
import com.canerture.androidhub.components.sections.NavHeader
import com.canerture.androidhub.data.getPostDetail
import com.canerture.androidhub.data.model.Post
import com.canerture.androidhub.getSitePalette
import com.canerture.androidhub.utils.Constants.POST_ID_PARAM
import com.canerture.androidhub.utils.Id
import com.canerture.androidhub.utils.parseDateString
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.css.ObjectFit
import com.varabyte.kobweb.compose.css.Overflow
import com.varabyte.kobweb.compose.css.TextOverflow
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.backgroundColor
import com.varabyte.kobweb.compose.ui.modifiers.borderRadius
import com.varabyte.kobweb.compose.ui.modifiers.boxShadow
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxSize
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.fontSize
import com.varabyte.kobweb.compose.ui.modifiers.fontWeight
import com.varabyte.kobweb.compose.ui.modifiers.gridRow
import com.varabyte.kobweb.compose.ui.modifiers.gridTemplateRows
import com.varabyte.kobweb.compose.ui.modifiers.height
import com.varabyte.kobweb.compose.ui.modifiers.id
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.maxWidth
import com.varabyte.kobweb.compose.ui.modifiers.minHeight
import com.varabyte.kobweb.compose.ui.modifiers.objectFit
import com.varabyte.kobweb.compose.ui.modifiers.overflow
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.compose.ui.modifiers.textOverflow
import com.varabyte.kobweb.compose.ui.styleModifier
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.core.rememberPageContext
import com.varabyte.kobweb.silk.components.graphics.Image
import com.varabyte.kobweb.silk.components.style.ComponentStyle
import com.varabyte.kobweb.silk.components.style.breakpoint.Breakpoint
import com.varabyte.kobweb.silk.components.style.toModifier
import com.varabyte.kobweb.silk.components.text.SpanText
import com.varabyte.kobweb.silk.theme.breakpoint.rememberBreakpoint
import kotlinx.browser.document
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import org.jetbrains.compose.web.css.Color
import org.jetbrains.compose.web.css.cssRem
import org.jetbrains.compose.web.css.fr
import org.jetbrains.compose.web.css.percent
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.Div
import org.w3c.dom.HTMLDivElement

data class PostDetailUIState(
    val isLoading: Boolean = true,
    val post: Post? = null,
)

val PostPageContentStyle by ComponentStyle {
    base { Modifier.fillMaxSize().padding(leftRight = 2.cssRem, top = 4.cssRem) }
    Breakpoint.MD { Modifier.maxWidth(75.cssRem) }
}

@Composable
fun PostPageLayout(
    title: String,
) {
    LaunchedEffect(title) {
        document.title = title
    }

    val scope = rememberCoroutineScope()
    val context = rememberPageContext()
    val breakpoint = rememberBreakpoint()
    var state by remember { mutableStateOf(PostDetailUIState()) }

    val hasPostIdParam = remember(key1 = context.route) {
        context.route.params.containsKey(POST_ID_PARAM)
    }

    LaunchedEffect(key1 = context.route) {
        println(hasPostIdParam)
        if (hasPostIdParam) {
            val postId = context.route.params.getValue(POST_ID_PARAM).toInt()
            getPostDetail(
                id = postId,
                onSuccess = { state = PostDetailUIState(post = it, isLoading = false) },
                onError = { println(it) }
            )
        }
    }

    Box(
        Modifier
            .fillMaxWidth()
            .minHeight(100.percent)
            .gridTemplateRows { size(1.fr); size(minContent) },
        contentAlignment = Alignment.Center
    ) {
        Column(
            Modifier.fillMaxSize().gridRow(1),
            horizontalAlignment = Alignment.CenterHorizontally,
        ) {
            NavHeader()
            Row(
                PostPageContentStyle.toModifier().gridRow(2)
            ) {
                LeftSide(
                    state = state
                )
                RightSide(
                    state = state,
                    breakpoint = breakpoint
                )
            }
            Footer(Modifier.fillMaxWidth().gridRow(2))
        }
    }
}

@Composable
fun LeftSide(
    state: PostDetailUIState
) {
    state.post?.let { post ->
        Column(
            modifier = Modifier.margin(top = 4.cssRem)
        ) {
            SpanText(
                text = "Post Information",
                modifier = Modifier
                    .fontWeight(FontWeight.Bold)
                    .color(getSitePalette().blue)
                    .margin(bottom = 1.cssRem)
            )

            Column(
                modifier = Modifier
                    .backgroundColor(getSitePalette().white)
                    .borderRadius(1.cssRem)
                    .boxShadow(0.px, 0.px, 5.px, 0.px, Color.lightgray)
                    .padding(2.cssRem),
            ) {
                LeftSideItem(
                    title = "Category",
                    value = post.category.name
                )
                LeftSideItem(
                    title = "Updated",
                    value = post.date.toLong().parseDateString()
                )
                LeftSideItem(
                    title = "Author",
                    value = post.authorName
                )
                LeftSideItem(
                    title = "Reading time",
                    value = "1 Min"
                )
            }
        }
    }
}

@Composable
fun LeftSideItem(
    title: String,
    value: String
) {
    Row(
        modifier = Modifier
            .margin(topBottom = 0.2.cssRem)
    ) {
        SpanText(
            text = "$title: ",
            modifier = Modifier
                .color(getSitePalette().blue)
        )
        SpanText(
            text = value,
            modifier = Modifier
                .color(getSitePalette().blue)
                .fontWeight(FontWeight.Thin)
        )
    }
}

@Composable
fun RightSide(
    state: PostDetailUIState,
    breakpoint: Breakpoint
) {
    val scope = rememberCoroutineScope()
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .margin(left = 4.cssRem, top = 4.cssRem)
            .backgroundColor(getSitePalette().white)
            .borderRadius(1.cssRem)
            .padding(leftRight = 24.px)
            .maxWidth(800.px)
            .boxShadow(0.px, 0.px, 5.px, 0.px, Color.lightgray)
            .padding(leftRight = 4.cssRem, topBottom = 4.cssRem),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        state.post?.let {
            PostContent(
                post = it,
                breakpoint = breakpoint
            )
            scope.launch {
                delay(50)
                try {
                    js("hljs.highlightAll()") as Unit
                } catch (e: Exception) {
                    println(e.message)
                }
            }
        }
    }
}

@Composable
fun PostContent(
    post: Post,
    breakpoint: Breakpoint
) {
    LaunchedEffect(post) {
        (document.getElementById(Id.postContent) as HTMLDivElement).innerHTML = post.content
    }
    SpanText(
        modifier = Modifier
            .fillMaxWidth()
            .color(getSitePalette().blue)
            .fontSize(14.px),
        text = post.date.toLong().parseDateString()
    )
    SpanText(
        modifier = Modifier
            .fillMaxWidth()
            .margin(bottom = 20.px)
            .color(getSitePalette().blue)
            .fontSize(40.px)
            .fontWeight(FontWeight.Bold)
            .overflow(Overflow.Hidden)
            .textOverflow(TextOverflow.Ellipsis)
            .styleModifier {
                property("display", "-webkit-box")
                property("-webkit-line-clamp", "2")
                property("line-clamp", "2")
                property("-webkit-box-orient", "vertical")
            },
        text = post.title
    )
    Image(
        modifier = Modifier
            .margin(bottom = 40.px)
            .fillMaxWidth()
            .objectFit(ObjectFit.Cover)
            .height(
                if (breakpoint <= Breakpoint.SM) 250.px
                else if (breakpoint <= Breakpoint.MD) 400.px
                else 600.px
            ),
        src = post.thumbnail,
    )
    Div(
        attrs = Modifier
            .id(Id.postContent)
            .color(getSitePalette().blue)
            .fillMaxWidth()
            .toAttrs()
    )
}