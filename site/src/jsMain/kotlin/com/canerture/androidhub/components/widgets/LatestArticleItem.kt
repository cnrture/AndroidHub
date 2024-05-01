package com.canerture.androidhub.components.widgets

import androidx.compose.runtime.Composable
import com.canerture.androidhub.ShadowedGrayButtonVariant
import com.canerture.androidhub.data.model.Post
import com.canerture.androidhub.data.model.colorParse
import com.canerture.androidhub.getSitePalette
import com.varabyte.kobweb.compose.css.Cursor
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.css.TextAlign
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.foundation.layout.Row
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
import com.varabyte.kobweb.compose.ui.modifiers.marginBlock
import com.varabyte.kobweb.compose.ui.modifiers.marginInline
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.compose.ui.modifiers.textAlign
import com.varabyte.kobweb.silk.components.icons.fa.FaClock
import com.varabyte.kobweb.silk.components.icons.fa.FaUser
import com.varabyte.kobweb.silk.components.navigation.Link
import com.varabyte.kobweb.silk.components.style.toModifier
import com.varabyte.kobweb.silk.components.text.SpanText
import org.jetbrains.compose.web.css.cssRem
import org.jetbrains.compose.web.css.px

@Composable
fun LatestArticleItem(
    article: Post,
) {
    Column(
        modifier = ShadowedGrayButtonVariant.toModifier()
            .marginInline(end = 2.5.cssRem)
            .marginBlock(end = 2.5.cssRem)
            .backgroundColor(getSitePalette().white)
            .borderRadius(1.cssRem),
    ) {
        SpanText(
            modifier = Modifier
                .margin(top = 2.cssRem)
                .backgroundColor(colorParse(article.category.color))
                .fontSize(0.75.cssRem)
                .borderRadius(topRight = 1.cssRem, bottomRight = 1.cssRem)
                .padding(topBottom = 0.5.cssRem, leftRight = 1.7.cssRem),
            text = article.category.name
        )

        Link(
            path = "/post",
            text = article.title,
            modifier = Modifier
                .fillMaxWidth()
                .padding(2.cssRem)
                .fontSize(22.px)
                .textAlign(TextAlign.Center)
                .fontWeight(FontWeight.Bold)
                .color(getSitePalette().blue),
        )

        Row(
            modifier = Modifier.fillMaxWidth().padding(leftRight = 1.cssRem, bottom = 2.cssRem),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.Center
        ) {
            FaUser(
                modifier = Modifier
                    .height(14.px)
                    .color(getSitePalette().blue)
                    .margin(right = 0.5.cssRem),
            )
            SpanText(
                modifier = Modifier
                    .fontSize(13.px)
                    .color(getSitePalette().blue)
                    .margin(right = 1.cssRem),
                text = article.authorName
            )
            FaClock(
                modifier = Modifier
                    .height(14.px)
                    .color(getSitePalette().green)
                    .margin(right = 0.5.cssRem),
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