package com.canerture.androidhub.components.widgets

import androidx.compose.runtime.Composable
import com.canerture.androidhub.ShadowedGrayButtonVariant
import com.canerture.androidhub.data.model.Post
import com.canerture.androidhub.data.model.colorParse
import com.canerture.androidhub.getSitePalette
import com.canerture.androidhub.navigation.Screen
import com.canerture.androidhub.utils.Res
import com.varabyte.kobweb.compose.css.Cursor
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.foundation.layout.RowScope
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.backgroundColor
import com.varabyte.kobweb.compose.ui.modifiers.borderRadius
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.cursor
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.fontSize
import com.varabyte.kobweb.compose.ui.modifiers.fontWeight
import com.varabyte.kobweb.compose.ui.modifiers.height
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.core.rememberPageContext
import com.varabyte.kobweb.silk.components.forms.Button
import com.varabyte.kobweb.silk.components.graphics.Image
import com.varabyte.kobweb.silk.components.icons.fa.FaClock
import com.varabyte.kobweb.silk.components.icons.fa.FaPerson
import com.varabyte.kobweb.silk.components.icons.fa.FaUser
import com.varabyte.kobweb.silk.components.navigation.Link
import com.varabyte.kobweb.silk.components.style.toModifier
import com.varabyte.kobweb.silk.components.text.SpanText
import org.jetbrains.compose.web.css.cssRem
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.Text

@Composable
fun RowScope.PopularArticleItem(
    isLastItem: Boolean,
    article: Post,
) {
    val context = rememberPageContext()
    Column(
        modifier = ShadowedGrayButtonVariant.toModifier()
            .weight(1f)
            .margin(right = if (!isLastItem) 2.cssRem else 0.cssRem)
            .backgroundColor(colorParse(article.category.color))
            .borderRadius(1.cssRem),
    ) {
        SpanText(
            modifier = Modifier
                .margin(topBottom = 2.cssRem)
                .backgroundColor(getSitePalette().grayTransparent)
                .fontSize(0.75.cssRem)
                .borderRadius(topRight = 1.cssRem, bottomRight = 1.cssRem)
                .padding(topBottom = 0.5.cssRem, leftRight = 1.7.cssRem),
            text = article.category.name
        )

        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(leftRight = 1.7.cssRem, top = 0.5.cssRem, bottom = 1.5.cssRem),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Column(
                modifier = Modifier.margin(right = 2.5.cssRem)
            ) {
                Row(
                    modifier = Modifier.margin(bottom = 1.cssRem),
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    FaUser(
                        modifier = Modifier
                            .height(14.px)
                            .cursor(Cursor.Pointer)
                            .margin(right = 0.5.cssRem),
                    )
                    SpanText(
                        modifier = Modifier.fontSize(13.px),
                        text = article.authorName
                    )
                }

                Row(
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    FaClock(
                        modifier = Modifier
                            .height(14.px)
                            .cursor(Cursor.Pointer)
                            .margin(right = 0.5.cssRem),
                    )
                    SpanText(
                        modifier = Modifier.fontSize(13.px),
                        text = "1 min read",
                    )
                }
            }

            Link(
                path = "https://androidhub.dev",
                modifier = Modifier.weight(1f).color(getSitePalette().white),
            ) {
                SpanText(
                    modifier = Modifier.weight(1f),
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
                context.router.navigateTo(Screen.PostPage.getPost(id = article.id))
            },
        ) {
            Text("Read More")
        }
    }
}