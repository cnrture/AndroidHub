package com.canerture.androidhub.components.widgets

import androidx.compose.runtime.Composable
import com.canerture.androidhub.getSitePalette
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.classNames
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxSize
import com.varabyte.kobweb.compose.ui.modifiers.fontSize
import com.varabyte.kobweb.compose.ui.modifiers.height
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.silk.components.text.SpanText
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.css.vh
import org.jetbrains.compose.web.dom.Div

@Composable
fun LoadingIndicator(modifier: Modifier = Modifier) {
    Box(
        modifier = modifier
            .fillMaxSize()
            .height(100.vh)
            .padding(topBottom = 50.px),
        contentAlignment = Alignment.Center
    ) {
        Div(
            attrs = Modifier
                .classNames("spinner-border", "text-primary")
                .toAttrs()
        ) {
            SpanText(
                text = "Loading...",
                modifier = Modifier
                    .classNames("visually-hidden")
                    .color(getSitePalette().blue)
                    .fontSize(24.px)
            )
        }
    }
}