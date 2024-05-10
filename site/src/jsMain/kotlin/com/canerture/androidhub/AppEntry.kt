package com.canerture.androidhub

import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import com.canerture.androidhub.common.Res
import com.varabyte.kobweb.compose.css.ScrollBehavior
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.display
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxSize
import com.varabyte.kobweb.compose.ui.modifiers.minHeight
import com.varabyte.kobweb.compose.ui.modifiers.minWidth
import com.varabyte.kobweb.compose.ui.modifiers.onClick
import com.varabyte.kobweb.compose.ui.modifiers.scrollBehavior
import com.varabyte.kobweb.compose.ui.modifiers.size
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.core.App
import com.varabyte.kobweb.silk.SilkApp
import com.varabyte.kobweb.silk.components.graphics.Image
import com.varabyte.kobweb.silk.components.layout.Surface
import com.varabyte.kobweb.silk.components.style.toModifier
import kotlinx.browser.document
import kotlinx.browser.window
import org.jetbrains.compose.web.css.DisplayStyle
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.css.vh
import org.jetbrains.compose.web.css.vw
import org.jetbrains.compose.web.dom.Div
import org.w3c.dom.SMOOTH
import org.w3c.dom.ScrollToOptions

@App
@Composable
fun AppEntry(content: @Composable () -> Unit) {
    SilkApp {
        var isButtonVisible by remember { mutableStateOf(false) }

        window.onscroll = {
            if (document.body!!.scrollTop > 300 || document.documentElement!!.scrollTop > 300) {
                isButtonVisible = true
            } else {
                isButtonVisible = false
            }
        }

        Surface(
            Modifier
                .minHeight(100.vh)
                .minWidth(100.vw)
                .scrollBehavior(ScrollBehavior.Smooth)
        ) {
            Box(
                contentAlignment = Alignment.Center,
                modifier = Modifier.fillMaxSize()
            ) {
                content()

                Div(
                    attrs = ScrollToTopStyle.toModifier()
                        .display(
                            if (isButtonVisible) DisplayStyle.Block else DisplayStyle.None
                        )
                        .onClick {
                            document.documentElement?.scrollTo(
                                ScrollToOptions(
                                    behavior = org.w3c.dom.ScrollBehavior.SMOOTH,
                                    top = 0.0
                                )
                            )
                        }.toAttrs()
                ) {
                    Image(
                        src = Res.Image.JETPACK,
                        modifier = Modifier.size(80.px, 80.px)
                    )
                }
            }
        }
    }
}