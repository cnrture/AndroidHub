package com.canerture.androidhub.components.widgets

import androidx.compose.runtime.Composable
import com.canerture.androidhub.data.model.Post
import com.canerture.androidhub.getSitePalette
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.css.TextAlign
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.backgroundColor
import com.varabyte.kobweb.compose.ui.modifiers.borderRadius
import com.varabyte.kobweb.compose.ui.modifiers.boxShadow
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.fontWeight
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.marginBlock
import com.varabyte.kobweb.compose.ui.modifiers.marginInline
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.compose.ui.modifiers.textAlign
import com.varabyte.kobweb.silk.components.navigation.Link
import com.varabyte.kobweb.silk.components.text.SpanText
import org.jetbrains.compose.web.css.Color
import org.jetbrains.compose.web.css.cssRem
import org.jetbrains.compose.web.css.px

@Composable
fun LatestArticleItem(
    isLastItem: Boolean,
    article: Post,
) {
    Column(
        modifier = Modifier
            .marginInline(end = if (!isLastItem) 1.cssRem else 0.cssRem)
            .marginBlock(end = if (!isLastItem) 1.cssRem else 0.cssRem)
            .backgroundColor(getSitePalette().white)
            .borderRadius(1.cssRem)
            .boxShadow(0.px, 0.px, 5.px, 0.px, Color.lightgray),
    ) {
        SpanText(
            modifier = Modifier
                .margin(top = 1.cssRem)
                .backgroundColor(getSitePalette().blue)
                .borderRadius(topRight = 1.cssRem, bottomRight = 1.cssRem)
                .padding(topBottom = 0.3.cssRem, leftRight = 1.cssRem),
            text = article.postModified.toString()
        )

        Link(
            path = "/post",
            text = article.postTitle,
            modifier = Modifier
                .fillMaxWidth()
                .padding(1.cssRem)
                .textAlign(TextAlign.Center)
                .fontWeight(FontWeight.Bold)
                .color(getSitePalette().blue),
        )

        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(1.cssRem),
            horizontalArrangement = Arrangement.Center
        ) {
            SpanText(
                text = article.postAuthor,
                modifier = Modifier.color(getSitePalette().blue).margin(right = 1.cssRem)
            )
            SpanText(
                text = article.postDate.toString(),
                modifier = Modifier.color(getSitePalette().blue)
            )
        }
    }
}