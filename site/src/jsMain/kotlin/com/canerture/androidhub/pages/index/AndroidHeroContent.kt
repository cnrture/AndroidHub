package com.canerture.androidhub.pages.index

import androidx.compose.runtime.Composable
import com.canerture.androidhub.HeadlineTextStyle
import com.canerture.androidhub.ShadowedGreenButtonVariant
import com.canerture.androidhub.SubheadlineTextStyle
import com.canerture.androidhub.getHeadlineFontSize
import com.canerture.androidhub.getSitePalette
import com.canerture.androidhub.getSubheadlineFontSize
import com.canerture.androidhub.navigation.Screen
import com.canerture.androidhub.utils.Res
import com.canerture.androidhub.utils.isUserLoggedIn
import com.varabyte.kobweb.compose.css.AlignContent
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
import com.varabyte.kobweb.compose.ui.modifiers.lineHeight
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.compose.ui.modifiers.setVariable
import com.varabyte.kobweb.compose.ui.modifiers.size
import com.varabyte.kobweb.compose.ui.modifiers.textAlign
import com.varabyte.kobweb.core.rememberPageContext
import com.varabyte.kobweb.silk.components.forms.Button
import com.varabyte.kobweb.silk.components.forms.ButtonSize
import com.varabyte.kobweb.silk.components.forms.ButtonVars
import com.varabyte.kobweb.silk.components.graphics.Image
import com.varabyte.kobweb.silk.components.style.breakpoint.Breakpoint
import com.varabyte.kobweb.silk.components.style.toModifier
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
                src = Res.Image.ANDROID_FIGURE,
                description = "Android Figure",
                modifier = Modifier
                    .size(240.px)
                    .display(DisplayStyle.Block)
            )
            TextArea(
                breakpoint = breakpoint,
                modifier = Modifier.padding(leftRight = 2.cssRem).alignContent(AlignContent.Center)
            )
        }
    } else {
        Row(
            modifier = Modifier.padding(leftRight = 10.cssRem),
            verticalAlignment = Alignment.CenterVertically
        ) {
            TextArea(breakpoint)
            Image(
                src = Res.Image.ANDROID_FIGURE,
                description = "Android Figure",
                modifier = Modifier
                    .size(400.px)
                    .display(DisplayStyle.Block)
            )
        }
    }
}

@Composable
private fun TextArea(breakpoint: Breakpoint, modifier: Modifier = Modifier) {
    val context = rememberPageContext()
    val isUserLoggedIn = isUserLoggedIn()
    Column(
        modifier = modifier
    ) {
        SpanText(
            text = "Hi \uD83D\uDC4B",
            modifier = HeadlineTextStyle.toModifier()
                .color(getSitePalette().green)
                .fontSize(getHeadlineFontSize(breakpoint))
        )
        Spacer()
        SpanText(
            text = "Let’s explore everything about the exciting world of Android together. On this platform, you can delve into the vast opportunities offered by the Android operating system and examine the latest developments in the field. Come on, let’s discover the limitless world of Android together!",
            modifier = SubheadlineTextStyle.toModifier()
                .color(Color.gray)
                .fontSize(getSubheadlineFontSize(breakpoint))
                .lineHeight(2)
                .padding(right = 2.cssRem)
        )
        Spacer()
        Button(
            onClick = {
                if (isUserLoggedIn) {
                    context.router.navigateTo(Screen.AdminMyPosts.route)
                } else {
                    context.router.tryRoutingTo(Screen.AdminLogin.route)
                }
            },
            modifier = ShadowedGreenButtonVariant.toModifier()
                .margin(top = 2.cssRem)
                .setVariable(ButtonVars.BackgroundDefaultColor, getSitePalette().green)
                .setVariable(ButtonVars.BackgroundHoverColor, getSitePalette().green),
            size = ButtonSize.LG,
        ) {
            SpanText(
                text = "Join us",
                modifier = Modifier
                    .fontSize(1.25.cssRem)
                    .lineHeight(2)
                    .textAlign(TextAlign.Start)
                    .color(getSitePalette().white)
            )
        }
    }
}