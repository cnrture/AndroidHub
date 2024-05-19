package com.canerture.androidhub.pages.index

import androidx.compose.runtime.Composable
import com.canerture.androidhub.ShadowedGrayVariant
import com.canerture.androidhub.data.model.Post
import com.canerture.androidhub.data.model.colorParse
import com.canerture.androidhub.getSitePalette
import com.canerture.androidhub.navigation.Screen
import com.varabyte.kobweb.compose.css.Cursor
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
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
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.marginBlock
import com.varabyte.kobweb.compose.ui.modifiers.marginInline
import com.varabyte.kobweb.compose.ui.modifiers.onClick
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.compose.ui.modifiers.width
import com.varabyte.kobweb.compose.ui.styleModifier
import com.varabyte.kobweb.compose.ui.thenIf
import com.varabyte.kobweb.core.rememberPageContext
import com.varabyte.kobweb.silk.components.forms.Button
import com.varabyte.kobweb.silk.components.icons.fa.FaClock
import com.varabyte.kobweb.silk.components.icons.fa.FaUser
import com.varabyte.kobweb.silk.components.navigation.Link
import com.varabyte.kobweb.silk.components.style.breakpoint.Breakpoint
import com.varabyte.kobweb.silk.components.style.toModifier
import com.varabyte.kobweb.silk.components.text.SpanText
import com.varabyte.kobweb.silk.theme.breakpoint.rememberBreakpoint
import org.jetbrains.compose.web.css.AlignContent
import org.jetbrains.compose.web.css.cssRem
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.Text

@Composable
fun PopularArticleItem(article: Post) {
    val context = rememberPageContext()
    val breakpoint = rememberBreakpoint()
    Column(
        modifier = ShadowedGrayVariant.toModifier()
            .marginInline(start = 1.cssRem, end = 1.cssRem)
            .marginBlock(end = 2.5.cssRem)
            .thenIf(breakpoint < Breakpoint.MD, Modifier.width(300.px))
            .backgroundColor(colorParse(article.category.color))
            .borderRadius(1.cssRem),
    ) {
        Box(
            modifier = Modifier
                .fillMaxWidth()
                .margin(top = 1.5.cssRem, bottom = 1.cssRem),
        ) {
            SpanText(
                modifier = Modifier
                    .align(Alignment.CenterStart)
                    .backgroundColor(getSitePalette().grayTransparent)
                    .fontSize(14.px)
                    .fontWeight(FontWeight.SemiBold)
                    .borderRadius(topRight = 1.cssRem, bottomRight = 1.cssRem)
                    .padding(topBottom = 0.5.cssRem, leftRight = 1.7.cssRem)
                    .cursor(Cursor.Pointer)
                    .onClick {
                        context.router.navigateTo(Screen.CategoryPage.getCategoryPosts(article.category.name))
                    },
                text = article.category.name
            )

            Row(
                modifier = Modifier
                    .align(Alignment.CenterEnd)
                    .margin(right = 1.7.cssRem)
                    .cursor(Cursor.Pointer)
                    .onClick {
                        context.router.navigateTo(Screen.AuthorPage.getAuthor(article.authorId))
                    },
                verticalAlignment = Alignment.CenterVertically
            ) {
                FaUser(
                    modifier = Modifier
                        .height(13.px)
                        .alignContent(AlignContent.Center)
                        .margin(right = 8.px),
                )
                SpanText(
                    modifier = Modifier
                        .fontSize(12.px)
                        .fontWeight(FontWeight.Bold),
                    text = article.authorName
                )
            }
        }

        Link(
            modifier = Modifier
                .fillMaxWidth()
                .weight(1f),
            path = Screen.PostPage.getPost(short = article.short),
        ) {
            SpanText(
                modifier = Modifier
                    .fontWeight(FontWeight.SemiBold)
                    .margin(leftRight = 1.7.cssRem, topBottom = 1.5.cssRem)
                    .fontSize(if (breakpoint < Breakpoint.MD) 16.px else 18.px)
                    .color(getSitePalette().white)
                    .styleModifier {
                        property("display", "-webkit-box")
                        property("-webkit-line-clamp", "2")
                        property("line-clamp", "2")
                        property("-webkit-box-orient", "vertical")
                    },
                text = article.title
            )
        }

        Box(
            modifier = Modifier.fillMaxWidth(),
        ) {
            Row(
                modifier = Modifier
                    .align(Alignment.CenterStart)
                    .margin(left = 1.7.cssRem),
                verticalAlignment = Alignment.CenterVertically
            ) {
                FaClock(
                    modifier = Modifier
                        .height(13.px)
                        .alignContent(AlignContent.Center)
                        .margin(right = 8.px),
                )
                SpanText(
                    modifier = Modifier.fontSize(12.px),
                    text = "1 min read",
                )
            }

            Button(
                modifier = Modifier
                    .margin(1.5.cssRem)
                    .align(Alignment.CenterEnd)
                    .backgroundColor(getSitePalette().secondary),
                onClick = {
                    context.router.navigateTo(Screen.PostPage.getPost(short = article.short))
                },
            ) {
                Text("Read More")
            }
        }
    }
}