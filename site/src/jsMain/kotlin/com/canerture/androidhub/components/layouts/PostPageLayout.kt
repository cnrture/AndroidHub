package com.canerture.androidhub.components.layouts

import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import com.canerture.androidhub.components.sections.Footer
import com.canerture.androidhub.components.sections.NavHeader
import com.canerture.androidhub.getSitePalette
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.css.TextAlign
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
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.maxWidth
import com.varabyte.kobweb.compose.ui.modifiers.minHeight
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.compose.ui.modifiers.textAlign
import com.varabyte.kobweb.silk.components.layout.HorizontalDivider
import com.varabyte.kobweb.silk.components.layout.HorizontalDividerStyle
import com.varabyte.kobweb.silk.components.style.ComponentStyle
import com.varabyte.kobweb.silk.components.style.breakpoint.Breakpoint
import com.varabyte.kobweb.silk.components.style.toModifier
import com.varabyte.kobweb.silk.components.text.SpanText
import kotlinx.browser.document
import org.jetbrains.compose.web.css.Color
import org.jetbrains.compose.web.css.cssRem
import org.jetbrains.compose.web.css.fr
import org.jetbrains.compose.web.css.percent
import org.jetbrains.compose.web.css.px

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
                LeftSide()
                RightSide()
            }
            Footer(Modifier.fillMaxWidth().gridRow(2))
        }
    }
}

@Composable
fun LeftSide() {
    Column {
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
                value = "Multiplatform"
            )
            LeftSideItem(
                title = "Updated",
                value = "2024-04-08"
            )
            LeftSideItem(
                title = "Author",
                value = "Caner Türe"
            )
            LeftSideItem(
                title = "Reading time",
                value = "1 Min"
            )
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
fun RightSide() {
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .margin(left = 4.cssRem)
            .backgroundColor(getSitePalette().white)
            .borderRadius(1.cssRem)
            .padding(1.cssRem)
            .boxShadow(0.px, 0.px, 5.px, 0.px, Color.lightgray)
            .padding(leftRight = 4.cssRem, topBottom = 4.cssRem),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        SpanText(
            text = "Valorant App Compose Multiplatform",
            modifier = Modifier
                .textAlign(TextAlign.Center)
                .fontWeight(FontWeight.Bold)
                .fontSize(32.px)
                .color(getSitePalette().blue)
                .padding(bottom = 1.cssRem, leftRight = 12.cssRem)
        )

        SpanText(
            text = "Published: 2024-03-22",
            modifier = Modifier
                .fontWeight(FontWeight.Bold)
                .fontSize(12.px)
                .color(getSitePalette().blue)
        )

        HorizontalDivider(HorizontalDividerStyle.toModifier().margin(topBottom = 3.cssRem))

        SpanText(
            text = "Share Article:",
            modifier = Modifier
                .textAlign(TextAlign.Center)
                .fontWeight(FontWeight.Medium)
                .fontSize(16.px)
                .color(getSitePalette().blue)
        )
    }
}
