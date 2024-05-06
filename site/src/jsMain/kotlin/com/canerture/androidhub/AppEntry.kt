package com.canerture.androidhub

import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import com.varabyte.kobweb.compose.css.ScrollBehavior
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.minHeight
import com.varabyte.kobweb.compose.ui.modifiers.minWidth
import com.varabyte.kobweb.compose.ui.modifiers.scrollBehavior
import com.varabyte.kobweb.core.App
import com.varabyte.kobweb.silk.SilkApp
import com.varabyte.kobweb.silk.components.layout.Surface
import kotlinx.browser.document
import kotlinx.browser.window
import org.jetbrains.compose.web.css.vh
import org.jetbrains.compose.web.css.vw

@App
@Composable
fun AppEntry(content: @Composable () -> Unit) {
    SilkApp {
        var isButtonVisible by remember { mutableStateOf(false) }

        window.onscroll = {
            if (document.body!!.scrollTop > 800 || document.documentElement!!.scrollTop > 800) {
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
            content()
            /*Box(
                contentAlignment = Alignment.Center,
                modifier = Modifier.alignContent(AlignContent.Center).align(Alignment.Center)
            ) {
                content()

                Div(
                    attrs = MyBtnStyle.toModifier()
                        .display(
                            if (isButtonVisible) {
                                DisplayStyle.Block
                            } else {
                                DisplayStyle.None
                            }
                        )
                        .onClick {
                            document.documentElement?.scrollTop = 0.0
                        }.toAttrs()
                ) {
                    FaArrowUp()
                }
            }*/
        }
    }
}