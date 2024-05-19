package com.canerture.androidhub.components.widgets

import androidx.compose.runtime.Composable
import com.canerture.androidhub.data.model.Category
import com.canerture.androidhub.data.model.colorParse
import com.canerture.androidhub.getSitePalette
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.backgroundColor
import com.varabyte.kobweb.compose.ui.modifiers.borderRadius
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.fontSize
import com.varabyte.kobweb.compose.ui.modifiers.height
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.silk.components.text.SpanText
import org.jetbrains.compose.web.css.px

@Composable
fun CategoryChip(category: Category) {
    Box(
        modifier = Modifier
            .height(32.px)
            .padding(leftRight = 14.px)
            .borderRadius(r = 100.px)
            .backgroundColor(colorParse(category.color)),
        contentAlignment = Alignment.Center
    ) {
        SpanText(
            modifier = Modifier
                .fontSize(12.px)
                .color(getSitePalette().white),
            text = category.name
        )
    }
}