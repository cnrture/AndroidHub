package com.canerture.androidhub.components.sections

import androidx.compose.runtime.Composable
import com.canerture.androidhub.ShadowedGreenVariant
import com.canerture.androidhub.common.noBorder
import com.canerture.androidhub.data.isUserLoggedIn
import com.canerture.androidhub.getSitePalette
import com.canerture.androidhub.navigation.Screen
import com.varabyte.kobweb.compose.css.Cursor
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.css.TextAlign
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.backgroundColor
import com.varabyte.kobweb.compose.ui.modifiers.borderRadius
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.cursor
import com.varabyte.kobweb.compose.ui.modifiers.fontSize
import com.varabyte.kobweb.compose.ui.modifiers.fontWeight
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.onClick
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.compose.ui.modifiers.setVariable
import com.varabyte.kobweb.compose.ui.modifiers.textAlign
import com.varabyte.kobweb.compose.ui.modifiers.width
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.core.rememberPageContext
import com.varabyte.kobweb.silk.components.forms.ButtonVars
import com.varabyte.kobweb.silk.components.navigation.Link
import com.varabyte.kobweb.silk.components.style.ComponentStyle
import com.varabyte.kobweb.silk.components.style.base
import com.varabyte.kobweb.silk.components.style.toModifier
import com.varabyte.kobweb.silk.components.text.SpanText
import org.jetbrains.compose.web.css.cssRem
import org.jetbrains.compose.web.css.percent
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.Button
import org.jetbrains.compose.web.dom.Span

val FooterStyle by ComponentStyle.base {
    Modifier.padding(topBottom = 5.cssRem, leftRight = 10.percent)
}

@Composable
fun Footer(modifier: Modifier = Modifier) {
    val context = rememberPageContext()
    val isUserLoggedIn = isUserLoggedIn()
    Column(
        modifier = FooterStyle.toModifier().then(modifier),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Button(
            attrs = ShadowedGreenVariant.toModifier()
                .backgroundColor(getSitePalette().primary)
                .setVariable(ButtonVars.BackgroundDefaultColor, getSitePalette().primary)
                .setVariable(ButtonVars.BackgroundHoverColor, getSitePalette().primary)
                .setVariable(ButtonVars.BackgroundPressedColor, getSitePalette().primary)
                .width(120.px)
                .borderRadius(3.cssRem)
                .padding(leftRight = 1.cssRem, topBottom = 0.5.cssRem)
                .margin(bottom = 1.cssRem)
                .noBorder()
                .cursor(Cursor.Pointer)
                .onClick {
                    if (isUserLoggedIn) {
                        context.router.navigateTo(Screen.AdminMyPosts.route)
                    } else {
                        context.router.navigateTo(Screen.Login.route)
                    }
                }
                .toAttrs(),
        ) {
            SpanText(
                text = "Join us",
                modifier = Modifier
                    .fontSize(16.px)
                    .color(getSitePalette().white)
            )
        }

        Span(Modifier.textAlign(TextAlign.Center).toAttrs()) {
            Link("https://bento.me/canerture") {
                SpanText(
                    text = "2024 - Caner Ture",
                    modifier = Modifier
                        .color(getSitePalette().primary)
                        .fontWeight(FontWeight.Bold)
                )
            }
        }
    }
}
