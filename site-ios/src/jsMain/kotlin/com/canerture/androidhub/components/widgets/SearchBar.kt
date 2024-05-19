package com.canerture.androidhub.components.widgets

import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import com.canerture.androidhub.common.Id
import com.canerture.androidhub.common.noBorder
import com.canerture.androidhub.getSitePalette
import com.varabyte.kobweb.compose.css.CSSTransition
import com.varabyte.kobweb.compose.css.Cursor
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.backgroundColor
import com.varabyte.kobweb.compose.ui.modifiers.border
import com.varabyte.kobweb.compose.ui.modifiers.borderRadius
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.cursor
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxSize
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.height
import com.varabyte.kobweb.compose.ui.modifiers.id
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.onClick
import com.varabyte.kobweb.compose.ui.modifiers.onFocusIn
import com.varabyte.kobweb.compose.ui.modifiers.onFocusOut
import com.varabyte.kobweb.compose.ui.modifiers.onKeyDown
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.compose.ui.modifiers.transition
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.silk.components.icons.fa.FaMagnifyingGlass
import com.varabyte.kobweb.silk.components.icons.fa.IconSize
import com.varabyte.kobweb.silk.components.style.breakpoint.Breakpoint
import org.jetbrains.compose.web.attributes.InputType
import org.jetbrains.compose.web.css.LineStyle
import org.jetbrains.compose.web.css.ms
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.Input

@Composable
fun SearchBar(
    breakpoint: Breakpoint,
    modifier: Modifier = Modifier,
    onEnterClick: () -> Unit,
    onSearchIconClick: (Boolean) -> Unit
) {
    var focused by remember { mutableStateOf(false) }

    LaunchedEffect(breakpoint) {
        if (breakpoint >= Breakpoint.SM) onSearchIconClick(false)
    }

    if (breakpoint >= Breakpoint.SM) {
        Row(
            modifier = modifier
                .fillMaxWidth()
                .padding(left = 20.px)
                .height(54.px)
                .backgroundColor(getSitePalette().white)
                .borderRadius(r = 100.px)
                .border(
                    width = 2.px,
                    style = LineStyle.Solid,
                    color = if (focused) getSitePalette().primary else getSitePalette().secondary
                )
                .transition(CSSTransition(property = "border", duration = 200.ms)),
            verticalAlignment = Alignment.CenterVertically
        ) {
            FaMagnifyingGlass(
                modifier = Modifier
                    .margin(right = 14.px)
                    .color(if (focused) getSitePalette().primary else getSitePalette().secondary)
                    .transition(CSSTransition(property = "color", duration = 200.ms)),
                size = IconSize.SM
            )
            Input(
                type = InputType.Text,
                attrs = Modifier
                    .id(Id.ADMIN_SEARCH_BAR)
                    .fillMaxSize()
                    .color(getSitePalette().secondary)
                    .backgroundColor(Colors.Transparent)
                    .noBorder()
                    .onFocusIn { focused = true }
                    .onFocusOut { focused = false }
                    .onKeyDown {
                        if (it.key == "Enter") {
                            onEnterClick()
                        }
                    }
                    .toAttrs {
                        attr("placeholder", "Search...")
                    }
            )
        }
    } else {
        FaMagnifyingGlass(
            modifier = Modifier
                .margin(right = 14.px)
                .color(getSitePalette().primary)
                .cursor(Cursor.Pointer)
                .onClick { onSearchIconClick(true) },
            size = IconSize.SM
        )
    }
}