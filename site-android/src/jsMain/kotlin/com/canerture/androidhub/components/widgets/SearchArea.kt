package com.canerture.androidhub.components.widgets

import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import com.canerture.androidhub.common.Id
import com.canerture.androidhub.common.noBorder
import com.canerture.androidhub.getSitePalette
import com.canerture.androidhub.navigation.Screen
import com.varabyte.kobweb.compose.css.CSSTransition
import com.varabyte.kobweb.compose.css.Cursor
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.border
import com.varabyte.kobweb.compose.ui.modifiers.borderRadius
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.cursor
import com.varabyte.kobweb.compose.ui.modifiers.display
import com.varabyte.kobweb.compose.ui.modifiers.fontSize
import com.varabyte.kobweb.compose.ui.modifiers.id
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.onClick
import com.varabyte.kobweb.compose.ui.modifiers.onFocusIn
import com.varabyte.kobweb.compose.ui.modifiers.onFocusOut
import com.varabyte.kobweb.compose.ui.modifiers.onKeyDown
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.compose.ui.modifiers.size
import com.varabyte.kobweb.compose.ui.modifiers.transition
import com.varabyte.kobweb.compose.ui.modifiers.width
import com.varabyte.kobweb.compose.ui.thenIf
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.core.rememberPageContext
import com.varabyte.kobweb.silk.components.icons.CloseIcon
import com.varabyte.kobweb.silk.components.icons.fa.FaMagnifyingGlass
import com.varabyte.kobweb.silk.components.icons.fa.IconSize
import kotlinx.browser.document
import org.jetbrains.compose.web.attributes.InputType
import org.jetbrains.compose.web.css.DisplayStyle
import org.jetbrains.compose.web.css.LineStyle
import org.jetbrains.compose.web.css.cssRem
import org.jetbrains.compose.web.css.ms
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.Input
import org.w3c.dom.HTMLInputElement

@Composable
fun SearchArea() {
    var isSearchOpen by remember { mutableStateOf(false) }
    var focused by remember { mutableStateOf(false) }
    val context = rememberPageContext()

    Row(
        modifier = Modifier
            .thenIf(isSearchOpen, Modifier.borderRadius(5.cssRem))
            .thenIf(isSearchOpen, Modifier.border(2.px, LineStyle.Solid, getSitePalette().blue)),
        verticalAlignment = Alignment.CenterVertically
    ) {
        FaMagnifyingGlass(
            modifier = Modifier
                .margin(16.px)
                .color(getSitePalette().blue)
                .cursor(Cursor.Pointer)
                .transition(CSSTransition(property = "color", duration = 200.ms))
                .onClick {
                    isSearchOpen = true

                },
            size = IconSize.SM
        )

        Row(
            verticalAlignment = Alignment.CenterVertically
        ) {
            Input(
                type = InputType.Text,
                attrs = Modifier
                    .id(Id.NAVBAR_SEARCH_INPUT)
                    .width(if (isSearchOpen) 140.px else 0.px)
                    .transition(CSSTransition("width", 500.ms))
                    .fontSize(18.px)
                    .weight(1)
                    .onFocusIn { focused = true }
                    .onFocusOut { focused = false }
                    .onKeyDown {
                        if (it.key == "Enter") {
                            val input =
                                (document.getElementById(Id.NAVBAR_SEARCH_INPUT) as HTMLInputElement).value
                            context.router.navigateTo(Screen.SearchPage.searchByTitle(input))
                        }
                    }
                    .noBorder()
                    .toAttrs {
                        attr("placeholder", "Search...")
                    }
            )

            CloseIcon(
                modifier = Modifier
                    .display(if (isSearchOpen) DisplayStyle.Block else DisplayStyle.None)
                    .size(12.px)
                    .margin(leftRight = 12.px)
                    .cursor(Cursor.Pointer)
                    .color(getSitePalette().blue)
                    .onClick {
                        isSearchOpen = false
                    }
            )
        }
    }
}

@Composable
fun MobileSearchArea() {
    var focused by remember { mutableStateOf(false) }
    val context = rememberPageContext()

    Input(
        type = InputType.Text,
        attrs = Modifier
            .id(Id.NAVBAR_SEARCH_INPUT)
            .margin(top = 1.cssRem)
            .padding(0.5.cssRem, 1.cssRem)
            .fontSize(14.px)
            .width(140.px)
            .onFocusIn { focused = true }
            .onFocusOut { focused = false }
            .onKeyDown {
                if (it.key == "Enter") {
                    val input =
                        (document.getElementById(Id.NAVBAR_SEARCH_INPUT) as HTMLInputElement).value
                    context.router.navigateTo(Screen.SearchPage.searchByTitle(input))
                }
            }
            .borderRadius(5.cssRem)
            .border(2.px, LineStyle.Solid, getSitePalette().blue)
            .toAttrs {
                attr("placeholder", "Search...")
            }
    )
}