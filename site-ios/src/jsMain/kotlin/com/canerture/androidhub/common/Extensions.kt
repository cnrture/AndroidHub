package com.canerture.androidhub.common

import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.border
import com.varabyte.kobweb.compose.ui.modifiers.outline
import org.jetbrains.compose.web.css.LineStyle
import org.jetbrains.compose.web.css.px
import kotlin.js.Date

fun Modifier.noBorder(): Modifier {
    return this.border(
        width = 0.px,
        style = LineStyle.None,
        color = Colors.Transparent
    ).outline(
        width = 0.px,
        style = LineStyle.None,
        color = Colors.Transparent
    )
}

fun Long.parseDateString() = Date(this).toLocaleDateString()

fun String.formatShort() = replace(" ", "-").lowercase()
    .replace("ğ", "g")
    .replace("ü", "u")
    .replace("ş", "s")
    .replace("ı", "i")
    .replace("ö", "o")
    .replace("ç", "c")
    .replace("'", "")