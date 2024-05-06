package com.canerture.androidhub.pages.post

import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import com.canerture.androidhub.ContainerStyle
import com.canerture.androidhub.InputCheckBoxStyle
import com.canerture.androidhub.components.layouts.PageLayout
import com.canerture.androidhub.components.widgets.LoadingIndicator
import com.canerture.androidhub.data.getPostDetail
import com.canerture.androidhub.data.model.Post
import com.canerture.androidhub.getSitePalette
import com.canerture.androidhub.utils.Id
import com.canerture.androidhub.utils.noBorder
import com.canerture.androidhub.utils.parseDateString
import com.varabyte.kobweb.compose.css.Cursor
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.css.ObjectFit
import com.varabyte.kobweb.compose.css.Overflow
import com.varabyte.kobweb.compose.css.TextAlign
import com.varabyte.kobweb.compose.css.TextOverflow
import com.varabyte.kobweb.compose.css.WhiteSpace
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.backgroundColor
import com.varabyte.kobweb.compose.ui.modifiers.borderRadius
import com.varabyte.kobweb.compose.ui.modifiers.boxShadow
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.cursor
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.fontSize
import com.varabyte.kobweb.compose.ui.modifiers.fontWeight
import com.varabyte.kobweb.compose.ui.modifiers.gridRow
import com.varabyte.kobweb.compose.ui.modifiers.id
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.maxWidth
import com.varabyte.kobweb.compose.ui.modifiers.objectFit
import com.varabyte.kobweb.compose.ui.modifiers.onClick
import com.varabyte.kobweb.compose.ui.modifiers.overflow
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.compose.ui.modifiers.textAlign
import com.varabyte.kobweb.compose.ui.modifiers.textOverflow
import com.varabyte.kobweb.compose.ui.modifiers.whiteSpace
import com.varabyte.kobweb.compose.ui.styleModifier
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.core.Page
import com.varabyte.kobweb.core.rememberPageContext
import com.varabyte.kobweb.silk.components.forms.Button
import com.varabyte.kobweb.silk.components.graphics.Image
import com.varabyte.kobweb.silk.components.icons.fa.FaCalendar
import com.varabyte.kobweb.silk.components.icons.fa.FaClock
import com.varabyte.kobweb.silk.components.icons.fa.FaLinkedin
import com.varabyte.kobweb.silk.components.icons.fa.FaPerson
import com.varabyte.kobweb.silk.components.icons.fa.FaTelegram
import com.varabyte.kobweb.silk.components.icons.fa.FaTicket
import com.varabyte.kobweb.silk.components.icons.fa.FaTwitter
import com.varabyte.kobweb.silk.components.icons.fa.FaWhatsapp
import com.varabyte.kobweb.silk.components.icons.fa.IconSize
import com.varabyte.kobweb.silk.components.layout.HorizontalDivider
import com.varabyte.kobweb.silk.components.style.toModifier
import com.varabyte.kobweb.silk.components.text.SpanText
import kotlinx.browser.document
import kotlinx.browser.window
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import org.jetbrains.compose.web.attributes.InputType
import org.jetbrains.compose.web.css.Color
import org.jetbrains.compose.web.css.cssRem
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.dom.Input
import org.jetbrains.compose.web.dom.Label
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLInputElement

data class PostDetailUIState(
    val isLoading: Boolean = true,
    val post: Post? = null,
    val isCopied: Boolean = false
)

@Page("/posts")
@Composable
fun PostPageLayout() {
    val context = rememberPageContext()

    var state by remember { mutableStateOf(PostDetailUIState()) }

    val postShort = context.route.queryParams["short"].orEmpty()
    LaunchedEffect(key1 = postShort) {
        getPostDetail(
            short = postShort,
            onSuccess = { state = PostDetailUIState(post = it, isLoading = false) }
        )
    }

    if (state.isLoading) {
        LoadingIndicator()
    } else {
        PageLayout(state.post?.title ?: "Post") {
            Row(
                modifier = Modifier.gridRow(2)
            ) {
                state.post?.let {
                    LeftSide(it)
                    RightSide(it)
                }
            }
        }
    }
}

@Composable
fun LeftSide(post: Post) {
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
                .padding(top = 2.cssRem, bottom = 2.cssRem, left = 2.cssRem, right = 5.cssRem)
        ) {
            LeftSideItem(
                icon = {
                    FaTicket(
                        size = IconSize.X1,
                        modifier = Modifier.color(getSitePalette().green)
                    )
                },
                title = "Category",
                value = post.category.name
            )
            LeftSideItem(
                icon = {
                    FaCalendar(
                        size = IconSize.X1,
                        modifier = Modifier.color(getSitePalette().green)
                    )
                },
                title = "Updated",
                value = post.date.toLong().parseDateString()
            )
            LeftSideItem(
                icon = {
                    FaPerson(
                        size = IconSize.X1,
                        modifier = Modifier.color(getSitePalette().green)
                    )
                },
                title = "Author",
                value = post.authorName
            )
            LeftSideItem(
                icon = {
                    FaClock(
                        size = IconSize.X1,
                        modifier = Modifier.color(getSitePalette().green)
                    )
                },
                title = "Reading time",
                value = "1 Min"
            )
        }
    }
}

@Composable
fun LeftSideItem(icon: @Composable () -> Unit, title: String, value: String) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .margin(topBottom = 0.4.cssRem)
    ) {
        icon()
        SpanText(
            text = "$title: ",
            modifier = Modifier
                .color(getSitePalette().blue)
                .fontSize(14.px)
                .padding(left = 0.5.cssRem)
        )
        SpanText(
            text = value,
            modifier = Modifier
                .color(getSitePalette().blue)
                .fontWeight(FontWeight.Thin)
                .fontSize(14.px)
        )
    }
}

@Composable
fun RightSide(post: Post) {
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
        PostContent(
            post = post,
        )
    }
}

@Composable
fun PostContent(post: Post) {
    val context = rememberPageContext()
    val scope = rememberCoroutineScope()
    var isCopied by remember { mutableStateOf(false) }

    LaunchedEffect(post) {
        (document.getElementById(Id.postContent) as HTMLDivElement).innerHTML = post.content
    }
    SpanText(
        modifier = Modifier
            .fillMaxWidth()
            .margin(bottom = 20.px)
            .color(getSitePalette().blue)
            .fontSize(40.px)
            .fontWeight(FontWeight.Bold)
            .overflow(Overflow.Hidden)
            .textAlign(TextAlign.Center)
            .textOverflow(TextOverflow.Ellipsis)
            .styleModifier {
                property("display", "-webkit-box")
                property("-webkit-line-clamp", "2")
                property("line-clamp", "2")
                property("-webkit-box-orient", "vertical")
            },
        text = post.title
    )
    Row(
        modifier = Modifier.fillMaxWidth().margin(bottom = 40.px),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.Center
    ) {
        FaCalendar(
            size = IconSize.X1,
            modifier = Modifier.color(getSitePalette().green).margin(right = 8.px)
        )
        SpanText(
            modifier = Modifier
                .color(getSitePalette().blue)
                .fontSize(14.px),
            text = "Published: ${post.date.toLong().parseDateString()}",
        )
    }

    Div(
        attrs = ContainerStyle.toModifier().toAttrs()
    ) {
        Input(
            type = InputType.Checkbox,
            attrs = InputCheckBoxStyle.toModifier().id("zoomCheck").toAttrs()
        )

        Label(forId = "zoomCheck") {
            Image(
                modifier = Modifier
                    .margin(bottom = 40.px)
                    .fillMaxWidth()
                    .objectFit(ObjectFit.ScaleDown)
                    .borderRadius(r = 4.px)
                    .boxShadow(0.px, 0.px, 10.px, 0.px, getSitePalette().blue),
                src = post.thumbnail,
            )
        }
    }
    Div(
        attrs = Modifier
            .id(Id.postContent)
            .color(getSitePalette().blue)
            .fillMaxWidth()
            .toAttrs()
    )

    HorizontalDivider(modifier = Modifier.fillMaxWidth().margin(leftRight = 0.5.cssRem, topBottom = 3.cssRem))

    Row(
        horizontalArrangement = Arrangement.Center,
        verticalAlignment = Alignment.CenterVertically
    ) {
        SpanText(
            text = "Share Article:",
            modifier = Modifier
                .color(getSitePalette().blue)
                .fontWeight(FontWeight.Bold)
                .fontSize(16.px)
                .padding(right = 1.cssRem)
        )
        FaTwitter(
            modifier = Modifier
                .cursor(Cursor.Pointer)
                .color(Color("#222"))
                .fontSize(24.px)
                .margin(right = 1f.cssRem)
                .onClick {
                    window.open("https://x.com", "_blank")
                }
        )
        FaLinkedin(
            modifier = Modifier
                .cursor(Cursor.Pointer)
                .color(Color("#0077b5"))
                .fontSize(24.px)
                .margin(right = 1f.cssRem)
                .onClick {
                    window.open("https://www.linkedin.com", "_blank")
                }
        )
        FaTelegram(
            modifier = Modifier
                .cursor(Cursor.Pointer)
                .color(Color("#0088cc"))
                .fontSize(24.px)
                .margin(right = 1f.cssRem)
                .onClick {
                    window.open("https://telegram.org", "_blank")
                }
        )
        FaWhatsapp(
            modifier = Modifier
                .cursor(Cursor.Pointer)
                .color(Color("#1FB381"))
                .fontSize(24.px)
                .onClick {
                    window.open("https://api.whatsapp.com", "_blank")
                }
        )
    }

    Row(
        modifier = Modifier
            .fillMaxWidth()
            .margin(top = 2.cssRem)
            .padding(topBottom = 1.cssRem, leftRight = 0.5.cssRem)
            .backgroundColor(getSitePalette().blue)
            .borderRadius(8.px)
            .boxShadow(0.px, 0.px, 5.px, 0.px, Color.lightgray),
        verticalAlignment = Alignment.CenterVertically
    ) {
        Input(
            type = InputType.Text,
            attrs = Modifier
                .id("postLink")
                .color(getSitePalette().white)
                .fontWeight(FontWeight.Bold)
                .fontSize(16.px)
                .backgroundColor(Color.transparent)
                .noBorder()
                .padding(leftRight = 1.cssRem)
                .weight(1f)
                .textOverflow(TextOverflow.Ellipsis)
                .whiteSpace(WhiteSpace.NoWrap)
                .overflow(Overflow.Hidden)
                .toAttrs {
                    attr("value", "${context.route.origin}/posts?short=${post.short}")
                    attr("readonly", "true")
                }
        )

        Button(
            modifier = Modifier
                .color(getSitePalette().white)
                .backgroundColor(getSitePalette().green)
                .padding(leftRight = 1.cssRem, topBottom = 0.5.cssRem)
                .margin(right = 1.cssRem)
                .borderRadius(8.px)
                .boxShadow(0.px, 0.px, 5.px, 0.px, Color.lightgray),
            onClick = {
                isCopied = true
                val linkInput = document.getElementById("postLink") as HTMLInputElement
                linkInput.select()
                linkInput.setSelectionRange(0, 99999)
                window.navigator.clipboard.writeText(linkInput.value)
            }
        ) {
            SpanText(
                text = if (isCopied) "Copied!" else "Copy",
                modifier = Modifier
                    .id("copyButton")
                    .fontWeight(FontWeight.Bold)
                    .fontSize(16.px)
            )
        }

        if (isCopied) {
            println("isCopied: $isCopied")
            scope.launch {
                delay(2000)
                isCopied = false
            }
        }
    }
}