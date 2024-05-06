package com.canerture.androidhub.pages.index

import androidx.compose.runtime.Composable
import com.canerture.androidhub.ShadowedGrayButtonVariant
import com.canerture.androidhub.data.model.Post
import com.canerture.androidhub.data.model.colorParse
import com.canerture.androidhub.getSitePalette
import com.canerture.androidhub.navigation.Screen
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.backgroundColor
import com.varabyte.kobweb.compose.ui.modifiers.borderRadius
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.fontSize
import com.varabyte.kobweb.compose.ui.modifiers.fontWeight
import com.varabyte.kobweb.compose.ui.modifiers.height
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.marginBlock
import com.varabyte.kobweb.compose.ui.modifiers.marginInline
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.compose.ui.modifiers.width
import com.varabyte.kobweb.core.rememberPageContext
import com.varabyte.kobweb.silk.components.forms.Button
import com.varabyte.kobweb.silk.components.icons.fa.FaClock
import com.varabyte.kobweb.silk.components.icons.fa.FaUser
import com.varabyte.kobweb.silk.components.navigation.Link
import com.varabyte.kobweb.silk.components.style.breakpoint.Breakpoint
import com.varabyte.kobweb.silk.components.style.toModifier
import com.varabyte.kobweb.silk.components.text.SpanText
import com.varabyte.kobweb.silk.theme.breakpoint.rememberBreakpoint
import kotlinx.browser.window
import org.jetbrains.compose.web.css.cssRem
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.Text

@Composable
fun PopularArticleItem(article: Post) {
    val context = rememberPageContext()
    Column(
        modifier = ShadowedGrayButtonVariant.toModifier()
            .marginInline(start = 1.cssRem, end = 1.cssRem)
            .marginBlock(end = 2.5.cssRem)
            .backgroundColor(colorParse(article.category.color))
            .borderRadius(1.cssRem),
    ) {
        SpanText(
            modifier = Modifier
                .margin(top = 1.5.cssRem, bottom = 1.cssRem)
                .backgroundColor(getSitePalette().grayTransparent)
                .fontSize(14.px)
                .borderRadius(topRight = 1.cssRem, bottomRight = 1.cssRem)
                .padding(topBottom = 0.5.cssRem, leftRight = 1.7.cssRem),
            text = article.category.name
        )

        Row(
            modifier = Modifier
                .fillMaxWidth()
                .weight(1f)
                .margin(left = 1.7.cssRem, bottom = 1.5.cssRem)
                .padding(right = 3.cssRem),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Column(
                modifier = Modifier.weight(0.5f)
            ) {
                Row(
                    modifier = Modifier.margin(bottom = 1.cssRem),
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    FaUser(
                        modifier = Modifier
                            .height(13.px)
                            .margin(right = 8.px),
                    )
                    SpanText(
                        modifier = Modifier.fontSize(12.px),
                        text = article.authorName
                    )
                }

                Row(
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    FaClock(
                        modifier = Modifier
                            .height(13.px)
                            .margin(right = 8.px),
                    )
                    SpanText(
                        modifier = Modifier.fontSize(12.px),
                        text = "1 min read",
                    )
                }
            }

            Box(modifier = Modifier.width(1.cssRem))

            Link(
                path = Screen.PostPage.getPost(short = article.short),
            ) {
                SpanText(
                    modifier = Modifier
                        .weight(0.4f)
                        .fontWeight(FontWeight.Bold)
                        .fontSize(18.px)
                        .color(getSitePalette().white),
                    text = article.title
                )
            }
        }

        Button(
            modifier = Modifier
                .margin(1.5.cssRem)
                .align(Alignment.End)
                .backgroundColor(getSitePalette().blue),
            onClick = {
                context.router.navigateTo(Screen.PostPage.getPost(short = article.short))
            },
        ) {
            Text("Read More")
        }
    }
}