package com.canerture.androidhub

import com.varabyte.kobweb.compose.css.TextAlign
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.silk.components.forms.ButtonStyle
import com.varabyte.kobweb.silk.components.forms.ButtonVars
import com.varabyte.kobweb.silk.components.layout.HorizontalDividerStyle
import com.varabyte.kobweb.silk.components.style.ComponentStyle
import com.varabyte.kobweb.silk.components.style.addVariantBase
import com.varabyte.kobweb.silk.components.style.base
import com.varabyte.kobweb.silk.components.style.breakpoint.Breakpoint
import com.varabyte.kobweb.silk.init.InitSilk
import com.varabyte.kobweb.silk.init.InitSilkContext
import com.varabyte.kobweb.silk.init.registerStyleBase
import com.varabyte.kobweb.silk.theme.colors.palette.color
import com.varabyte.kobweb.silk.theme.colors.palette.toPalette
import com.varabyte.kobweb.silk.theme.modifyComponentStyleBase
import org.jetbrains.compose.web.css.CSSSizeValue
import org.jetbrains.compose.web.css.CSSUnit
import org.jetbrains.compose.web.css.cssRem
import org.jetbrains.compose.web.css.percent
import org.jetbrains.compose.web.css.px

@InitSilk
fun initSiteStyles(ctx: InitSilkContext) {
    ctx.stylesheet.registerStyleBase("body") {
        Modifier
            .fontFamily(
                "-apple-system", "BlinkMacSystemFont", "DM Sans", "Urbanist"
            )
            .fontSize(18.px)
            .lineHeight(1.5)
    }

    // Silk dividers only extend 90% by default; we want full width dividers in our site
    ctx.theme.modifyComponentStyleBase(HorizontalDividerStyle) {
        Modifier.fillMaxWidth()
    }
}

fun getHeadlineFontSize(breakpoint: Breakpoint): CSSSizeValue<CSSUnit.rem> {
    return when (breakpoint) {
        Breakpoint.ZERO -> 1.4.cssRem
        Breakpoint.SM -> 1.5.cssRem
        Breakpoint.MD -> 1.7.cssRem
        Breakpoint.LG -> 1.8.cssRem
        Breakpoint.XL -> 2.cssRem
    }
}

fun getSubheadlineFontSize(breakpoint: Breakpoint): CSSSizeValue<CSSUnit.rem> {
    return when (breakpoint) {
        Breakpoint.ZERO -> 0.8.cssRem
        Breakpoint.SM -> 1.05.cssRem
        Breakpoint.MD -> 1.1.cssRem
        Breakpoint.LG -> 1.2.cssRem
        Breakpoint.XL -> 1.25.cssRem
    }
}

val HeadlineTextStyle by ComponentStyle.base {
    Modifier
        .fontSize(2.cssRem)
        .fontWeight(700)
        .textAlign(TextAlign.Start)
}

val SubheadlineTextStyle by ComponentStyle.base {
    Modifier
        .textAlign(TextAlign.Start)
        .color(getSitePalette().blue.toRgb())
}

val CircleButtonVariant by ButtonStyle.addVariantBase {
    Modifier.padding(0.px).borderRadius(50.percent)
}

val UncoloredButtonVariant by ButtonStyle.addVariantBase {
    Modifier.setVariable(ButtonVars.BackgroundDefaultColor, Colors.Transparent)
}
