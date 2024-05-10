package com.canerture.androidhub.pages.index

import androidx.compose.runtime.Composable
import com.canerture.androidhub.ShadowedGrayVariant
import com.canerture.androidhub.data.model.Post
import com.canerture.androidhub.data.model.colorParse
import com.canerture.androidhub.getSitePalette
import com.canerture.androidhub.navigation.Screen
import com.varabyte.kobweb.compose.css.Cursor
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.css.TextAlign
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
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
import com.varabyte.kobweb.compose.ui.modifiers.maxWidth
import com.varabyte.kobweb.compose.ui.modifiers.onClick
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.compose.ui.modifiers.textAlign
import com.varabyte.kobweb.compose.ui.modifiers.width
import com.varabyte.kobweb.compose.ui.styleModifier
import com.varabyte.kobweb.compose.ui.thenIf
import com.varabyte.kobweb.core.rememberPageContext
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

@Composable
fun LatestArticleItem(article: Post) {
    val context = rememberPageContext()
    val breakpoint = rememberBreakpoint()
    Column(
        modifier = ShadowedGrayVariant.toModifier()
            .thenIf(breakpoint > Breakpoint.MD, Modifier.marginInline(end = 2.5.cssRem))
            .marginBlock(end = 2.5.cssRem)
            .thenIf(breakpoint < Breakpoint.MD, Modifier.width(300.px))
            .backgroundColor(getSitePalette().white)
            .borderRadius(1.cssRem),
    ) {
        SpanText(
            modifier = Modifier
                .margin(top = 1.5.cssRem)
                .backgroundColor(colorParse(article.category.color))
                .fontSize(0.75.cssRem)
                .borderRadius(topRight = 1.cssRem, bottomRight = 1.cssRem)
                .padding(topBottom = 0.5.cssRem, leftRight = 1.7.cssRem)
                .cursor(Cursor.Pointer)
                .onClick {
                    context.router.navigateTo(Screen.CategoryPage.getCategoryPosts(article.category.name))
                },
            text = article.category.name
        )

        Box(
            modifier = Modifier.fillMaxWidth().weight(1f),
            contentAlignment = Alignment.Center
        ) {
            Link(
                path = Screen.PostPage.getPost(article.short),
                text = article.title,
                modifier = Modifier
                    .align(Alignment.Center)
                    .padding(top = 1.5.cssRem, bottom = 2.cssRem, leftRight = 1.cssRem)
                    .fontSize(if (breakpoint < Breakpoint.MD) 16.px else 18.px)
                    .textAlign(TextAlign.Center)
                    .fontWeight(FontWeight.Bold)
                    .color(getSitePalette().blue)
                    .styleModifier {
                        property("display", "-webkit-box")
                        property("-webkit-line-clamp", "2")
                        property("line-clamp", "2")
                        property("-webkit-box-orient", "vertical")
                    },
            )
        }

        Row(
            modifier = Modifier.fillMaxWidth().padding(leftRight = 1.cssRem, bottom = 2.cssRem),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.Center
        ) {
            FaUser(
                modifier = Modifier
                    .height(14.px)
                    .color(getSitePalette().blue)
                    .margin(right = 0.5.cssRem)
                    .alignContent(AlignContent.Center),
            )
            SpanText(
                modifier = Modifier
                    .fontSize(13.px)
                    .color(getSitePalette().blue)
                    .margin(right = 1.cssRem)
                    .cursor(Cursor.Pointer)
                    .onClick {
                        context.router.navigateTo(Screen.AuthorPage.getAuthor(article.authorId))
                    },
                text = article.authorName
            )
            FaClock(
                modifier = Modifier
                    .height(14.px)
                    .color(getSitePalette().green)
                    .margin(right = 0.5.cssRem)
                    .alignContent(AlignContent.Center),
            )
            SpanText(
                modifier = Modifier
                    .fontSize(13.px)
                    .color(getSitePalette().blue),
                text = "1 min read",
            )
        }
    }
}