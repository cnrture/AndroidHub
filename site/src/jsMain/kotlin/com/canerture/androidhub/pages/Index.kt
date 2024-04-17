package com.canerture.androidhub.pages

import androidx.compose.runtime.Composable
import com.canerture.androidhub.HeadlineTextStyle
import com.canerture.androidhub.SubheadlineTextStyle
import com.canerture.androidhub.components.layouts.PageLayout
import com.canerture.androidhub.getSitePalette
import com.varabyte.kobweb.compose.css.TextAlign
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.foundation.layout.Spacer
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.display
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.fontSize
import com.varabyte.kobweb.compose.ui.modifiers.gap
import com.varabyte.kobweb.compose.ui.modifiers.height
import com.varabyte.kobweb.compose.ui.modifiers.lineHeight
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.setVariable
import com.varabyte.kobweb.compose.ui.modifiers.textAlign
import com.varabyte.kobweb.core.Page
import com.varabyte.kobweb.core.rememberPageContext
import com.varabyte.kobweb.silk.components.forms.Button
import com.varabyte.kobweb.silk.components.forms.ButtonSize
import com.varabyte.kobweb.silk.components.forms.ButtonVars
import com.varabyte.kobweb.silk.components.graphics.Image
import com.varabyte.kobweb.silk.components.style.ComponentStyle
import com.varabyte.kobweb.silk.components.style.breakpoint.Breakpoint
import com.varabyte.kobweb.silk.components.style.toModifier
import com.varabyte.kobweb.silk.components.text.SpanText
import org.jetbrains.compose.web.css.DisplayStyle
import org.jetbrains.compose.web.css.cssRem
import org.jetbrains.compose.web.css.vh
import org.jetbrains.compose.web.dom.Div

val HeroContainerStyle by ComponentStyle {
    base { Modifier.fillMaxWidth().gap(1.cssRem) }
    Breakpoint.MD { Modifier.margin { top(6.vh) } }
}

@Page
@Composable
fun HomePage() {
    PageLayout("Home") {
        Row(
            modifier = HeroContainerStyle.toModifier(),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Column {
                Div {
                    SpanText(
                        text = "Hi \uD83D\uDC4B",
                        modifier = HeadlineTextStyle.toModifier().color(getSitePalette().green)
                    )
                    Spacer()
                    SpanText(
                        text = "Let’s explore everything about the exciting world of Android together. On this platform, you can delve into the vast opportunities offered by the Android operating system and examine the latest developments in the field. Come on, let’s discover the limitless world of Android together!",
                        modifier = SubheadlineTextStyle.toModifier().color(getSitePalette().blue)
                    )
                    Spacer()
                    val ctx = rememberPageContext()
                    Button(
                        onClick = {
                            ctx.router.tryRoutingTo("/about")
                        },
                        modifier = Modifier
                            .margin(top = 1.cssRem)
                            .setVariable(ButtonVars.BackgroundDefaultColor, getSitePalette().green)
                            .setVariable(ButtonVars.BackgroundHoverColor, getSitePalette().blue),
                        size = ButtonSize.LG,
                    ) {
                        SpanText(
                            text = "Apply to be an author",
                            modifier = Modifier
                                .fontSize(1.25.cssRem)
                                .lineHeight(2)
                                .textAlign(TextAlign.Start)
                                .color(getSitePalette().white)
                        )
                    }
                }
            }

            Image("/android-figure.png", "Android Figure", Modifier.height(28.cssRem).display(DisplayStyle.Block))
        }
    }
}
