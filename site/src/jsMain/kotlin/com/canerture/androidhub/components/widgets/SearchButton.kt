package com.canerture.androidhub.components.widgets

import androidx.compose.runtime.Composable
import com.canerture.androidhub.getSitePalette
import com.varabyte.kobweb.compose.dom.svg.Circle
import com.varabyte.kobweb.compose.dom.svg.Line
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.silk.components.icons.IconRenderStyle
import com.varabyte.kobweb.silk.components.icons.createIcon

@Composable
fun SearchButton(modifier: Modifier = Modifier, onClick: () -> Unit) {
    IconButton(onClick) {
        createIcon(
            renderStyle = IconRenderStyle.Stroke(3),
            attrs = Modifier.color(getSitePalette().green).then(modifier).toAttrs()
        ) {
            Circle {
                cx(12)
                cy(12)
                r(8)
            }
            Line {
                x1(19)
                y1(19)
                x2(56)
                y2(56)
            }
        }
    }
}