package com.canerture.androidhub.components.widgets

import androidx.compose.runtime.Composable
import com.canerture.androidhub.getSitePalette
import com.canerture.androidhub.pages.PopularArticle
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.foundation.layout.RowScope
import com.varabyte.kobweb.compose.foundation.layout.Spacer
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.backgroundColor
import com.varabyte.kobweb.compose.ui.modifiers.borderRadius
import com.varabyte.kobweb.compose.ui.modifiers.boxShadow
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.silk.components.forms.Button
import com.varabyte.kobweb.silk.components.text.SpanText
import org.jetbrains.compose.web.css.Color
import org.jetbrains.compose.web.css.cssRem
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.Text

@Composable
fun RowScope.PopularArticleItem(
    isLastItem: Boolean,
    article: PopularArticle,
) {
    Column(
        modifier = Modifier
            .weight(1f)
            .margin(right = if (!isLastItem) 1.cssRem else 0.cssRem)
            .backgroundColor(getSitePalette().green.toRgb())
            .borderRadius(1.cssRem)
            .boxShadow(0.px, 0.px, 5.px, 0.px, Color.lightgray),
    ) {
        SpanText(
            modifier = Modifier
                .margin(topBottom = 1.cssRem)
                .backgroundColor(getSitePalette().blue)
                .borderRadius(topRight = 1.cssRem, bottomRight = 1.cssRem)
                .padding(topBottom = 0.3.cssRem, leftRight = 1.cssRem),
            text = article.category
        )

        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(leftRight = 1.cssRem)
        ) {
            Column(
                modifier = Modifier.margin(right = 2.5.cssRem)
            ) {
                Text(article.authorName)
                Spacer()
                Text(article.readTime)
            }
            SpanText(
                modifier = Modifier.weight(1f),
                text = article.title
            )
        }

        Button(
            modifier = Modifier
                .margin(1.cssRem)
                .align(Alignment.End),
            onClick = {},
        ) {
            Text("Read More")
        }
    }
}