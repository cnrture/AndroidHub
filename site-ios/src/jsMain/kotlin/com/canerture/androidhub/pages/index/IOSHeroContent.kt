package com.canerture.androidhub.pages.index

import androidx.compose.runtime.Composable
import com.canerture.androidhub.common.Res
import com.canerture.androidhub.getSitePalette
import com.varabyte.kobweb.compose.css.AlignContent
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.css.TextAlign
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.foundation.layout.Spacer
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.alignContent
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.display
import com.varabyte.kobweb.compose.ui.modifiers.fontSize
import com.varabyte.kobweb.compose.ui.modifiers.fontWeight
import com.varabyte.kobweb.compose.ui.modifiers.lineHeight
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.compose.ui.modifiers.size
import com.varabyte.kobweb.compose.ui.modifiers.textAlign
import com.varabyte.kobweb.silk.components.graphics.Image
import com.varabyte.kobweb.silk.components.style.breakpoint.Breakpoint
import com.varabyte.kobweb.silk.components.text.SpanText
import org.jetbrains.compose.web.css.Color
import org.jetbrains.compose.web.css.DisplayStyle
import org.jetbrains.compose.web.css.cssRem
import org.jetbrains.compose.web.css.px

@Composable
fun AndroidHeroContent(
    breakpoint: Breakpoint
) {
    if (breakpoint < Breakpoint.SM) {
        Column(
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Image(
                src = Res.Image.IOS_FIGURE,
                description = "iOS Figure",
                modifier = Modifier
                    .size(140.px, 160.px)
                    .display(DisplayStyle.Block)
            )
            TextArea(
                breakpoint = breakpoint,
                modifier = Modifier
                    .padding(leftRight = 2.cssRem)
                    .alignContent(AlignContent.Center)
                    .margin(top = 64.px)
            )
        }
    } else {
        Row(
            modifier = Modifier.padding(leftRight = 13.cssRem),
            verticalAlignment = Alignment.CenterVertically
        ) {
            TextArea(breakpoint)
            Image(
                src = Res.Image.IOS_FIGURE,
                description = "iOS Figure",
                modifier = Modifier
                    .size(260.px)
                    .margin(left = 2.cssRem)
                    .display(DisplayStyle.Block)
            )
        }
    }
}

@Composable
private fun TextArea(breakpoint: Breakpoint, modifier: Modifier = Modifier) {
    Column(
        modifier = modifier
    ) {
        SpanText(
            text = "Hi \uD83D\uDC4B",
            modifier = Modifier
                .fontWeight(FontWeight.Bold)
                .textAlign(TextAlign.Start)
                .color(getSitePalette().primary)
                .fontSize(if (breakpoint < Breakpoint.MD) 18.px else 28.px)
        )
        Spacer()
        SpanText(
            text = "Let’s explore everything about the exciting world of iOS together. On this platform, you can delve into the vast opportunities offered by the iOS operating system and examine the latest developments in the field. Come on, let’s discover the limitless world of iOS together!",
            modifier = Modifier
                .textAlign(TextAlign.Start)
                .color(Color.gray)
                .fontSize(if (breakpoint < Breakpoint.MD) 14.px else 20.px)
                .lineHeight(2)
                .padding(right = 2.cssRem)
        )
    }
}