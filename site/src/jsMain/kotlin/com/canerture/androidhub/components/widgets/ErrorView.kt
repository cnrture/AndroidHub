package com.canerture.androidhub.components.widgets

import androidx.compose.runtime.Composable
import com.canerture.androidhub.getSitePalette
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxSize
import com.varabyte.kobweb.compose.ui.modifiers.fontSize
import com.varabyte.kobweb.compose.ui.modifiers.fontWeight
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.silk.components.icons.fa.FaX
import com.varabyte.kobweb.silk.components.icons.fa.IconSize
import com.varabyte.kobweb.silk.components.text.SpanText
import org.jetbrains.compose.web.css.px

@Composable
fun ErrorView(
    message: String = ""
) {
    Column(
        modifier = Modifier
            .fillMaxSize(),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        FaX(
            size = IconSize.X6,
            modifier = Modifier
                .padding(bottom = 48.px)
                .color(getSitePalette().blue)
        )

        SpanText(
            text = if (message.isNotEmpty()) message else "An error occurred while loading the page.",
            modifier = Modifier
                .color(getSitePalette().blue)
                .fontSize(24.px)
                .fontWeight(FontWeight.Bold)
        )
    }
}