package com.canerture.androidhub.components.layouts

import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import com.canerture.androidhub.NavbarStyle
import com.canerture.androidhub.components.sections.Footer
import com.canerture.androidhub.components.sections.NavHeader
import com.canerture.androidhub.getSitePalette
import com.canerture.androidhub.navigation.Screen
import com.canerture.androidhub.utils.Id
import com.varabyte.kobweb.compose.css.CSSTransition
import com.varabyte.kobweb.compose.css.Cursor
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.css.TextAlign
import com.varabyte.kobweb.compose.css.TransitionTimingFunction
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.foundation.layout.ColumnScope
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.backgroundColor
import com.varabyte.kobweb.compose.ui.modifiers.border
import com.varabyte.kobweb.compose.ui.modifiers.borderRadius
import com.varabyte.kobweb.compose.ui.modifiers.boxShadow
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.cursor
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxHeight
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxSize
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.fontSize
import com.varabyte.kobweb.compose.ui.modifiers.fontWeight
import com.varabyte.kobweb.compose.ui.modifiers.gridRow
import com.varabyte.kobweb.compose.ui.modifiers.gridTemplateRows
import com.varabyte.kobweb.compose.ui.modifiers.height
import com.varabyte.kobweb.compose.ui.modifiers.id
import com.varabyte.kobweb.compose.ui.modifiers.left
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.maxWidth
import com.varabyte.kobweb.compose.ui.modifiers.minHeight
import com.varabyte.kobweb.compose.ui.modifiers.onClick
import com.varabyte.kobweb.compose.ui.modifiers.onFocusIn
import com.varabyte.kobweb.compose.ui.modifiers.onFocusOut
import com.varabyte.kobweb.compose.ui.modifiers.onKeyDown
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.compose.ui.modifiers.position
import com.varabyte.kobweb.compose.ui.modifiers.size
import com.varabyte.kobweb.compose.ui.modifiers.textAlign
import com.varabyte.kobweb.compose.ui.modifiers.top
import com.varabyte.kobweb.compose.ui.modifiers.transition
import com.varabyte.kobweb.compose.ui.modifiers.width
import com.varabyte.kobweb.compose.ui.modifiers.zIndex
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.silk.components.forms.Button
import com.varabyte.kobweb.silk.components.icons.CloseIcon
import com.varabyte.kobweb.silk.components.style.ComponentStyle
import com.varabyte.kobweb.silk.components.style.breakpoint.Breakpoint
import com.varabyte.kobweb.silk.components.style.toModifier
import com.varabyte.kobweb.silk.components.text.SpanText
import kotlinx.browser.document
import kotlinx.browser.window
import org.jetbrains.compose.web.attributes.InputType
import org.jetbrains.compose.web.css.Color
import org.jetbrains.compose.web.css.LineStyle
import org.jetbrains.compose.web.css.Position
import org.jetbrains.compose.web.css.cssRem
import org.jetbrains.compose.web.css.fr
import org.jetbrains.compose.web.css.ms
import org.jetbrains.compose.web.css.percent
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.css.s
import org.jetbrains.compose.web.dom.Input
import org.w3c.dom.HTMLInputElement

val PageContentStyle by ComponentStyle {
    base { Modifier.fillMaxSize().padding(leftRight = 2.cssRem, top = 4.cssRem) }
    Breakpoint.MD { Modifier.maxWidth(90.cssRem) }
}

@Composable
fun PageLayout(title: String, content: @Composable ColumnScope.() -> Unit) {

    var isSearchOpen by remember { mutableStateOf(false) }
    var focused by remember { mutableStateOf(false) }

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
            modifier = Modifier.fillMaxSize().gridRow(1),
            horizontalAlignment = Alignment.CenterHorizontally,
        ) {
            NavHeader(
                modifier = NavbarStyle.toModifier()
                    .padding(top = 4.cssRem, bottom = 2.cssRem, leftRight = 3.cssRem),
                onSearchClick = {
                    isSearchOpen = true
                }
            )
            Column(
                modifier = PageContentStyle.toModifier(),
                horizontalAlignment = Alignment.CenterHorizontally
            ) {
                content()
            }
            Footer(Modifier.fillMaxWidth().gridRow(2))
        }

        if (isSearchOpen) {
            Box(
                modifier = Modifier
                    .position(Position.Fixed)
                    .transition(CSSTransition("transform", 0.25.s, TransitionTimingFunction.Ease))
                    .zIndex(1)
                    .top(0.px)
                    .left(0.px)
                    .backgroundColor(getSitePalette().blue)
                    .fillMaxSize()
            ) {
                Row(
                    modifier = Modifier
                        .align(Alignment.Center)
                        .width(40.percent)
                        .height(4.percent)
                ) {
                    Input(
                        type = InputType.Text,
                        attrs = Modifier
                            .id(Id.navbarSearchInput)
                            .textAlign(TextAlign.Center)
                            .fontSize(18.px)
                            .weight(1f)
                            .fillMaxHeight()
                            .border(
                                width = 2.px,
                                color = getSitePalette().green,
                                style = LineStyle.Solid
                            )
                            .borderRadius(5.px)
                            .onFocusIn { focused = true }
                            .onFocusOut { focused = false }
                            .onKeyDown {
                                if (it.key == "Enter") {
                                    isSearchOpen = false
                                    val input =
                                        (document.getElementById(Id.navbarSearchInput) as HTMLInputElement).value
                                    window.location.href = Screen.SearchPage.searchByTitle(input)
                                }
                            }
                            .toAttrs {
                                attr("placeholder", "Search...")
                            }
                    )
                    Button(
                        modifier = Modifier
                            .fillMaxHeight()
                            .color(getSitePalette().white)
                            .backgroundColor(getSitePalette().green)
                            .padding(leftRight = 1.cssRem, topBottom = 0.5.cssRem)
                            .margin(left = 1.cssRem)
                            .borderRadius(8.px)
                            .cursor(Cursor.Pointer)
                            .boxShadow(0.px, 0.px, 5.px, 0.px, Color.lightgray),
                        onClick = {
                            isSearchOpen = false
                            val input =
                                (document.getElementById(Id.navbarSearchInput) as HTMLInputElement).value
                            window.location.href = Screen.SearchPage.searchByTitle(input)
                        }
                    ) {
                        SpanText(
                            text = "Search",
                            modifier = Modifier
                                .fontWeight(FontWeight.Bold)
                                .fontSize(16.px)
                        )
                    }
                }

                CloseIcon(
                    modifier = Modifier
                        .align(Alignment.TopEnd)
                        .size(24.px)
                        .margin(30.px)
                        .cursor(Cursor.Pointer)
                        .onClick {
                            isSearchOpen = false
                        }
                )
            }
        }
    }
}
