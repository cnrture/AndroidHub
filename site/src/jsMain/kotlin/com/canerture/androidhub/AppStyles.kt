package com.canerture.androidhub

import com.canerture.androidhub.utils.noBorder
import com.varabyte.kobweb.compose.css.AlignContent
import com.varabyte.kobweb.compose.css.AnimationIterationCount
import com.varabyte.kobweb.compose.css.CSSFloat
import com.varabyte.kobweb.compose.css.CSSTransition
import com.varabyte.kobweb.compose.css.Cursor
import com.varabyte.kobweb.compose.css.Overflow
import com.varabyte.kobweb.compose.css.TextAlign
import com.varabyte.kobweb.compose.css.TransitionTimingFunction
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.alignContent
import com.varabyte.kobweb.compose.ui.modifiers.animation
import com.varabyte.kobweb.compose.ui.modifiers.backgroundColor
import com.varabyte.kobweb.compose.ui.modifiers.border
import com.varabyte.kobweb.compose.ui.modifiers.borderLeft
import com.varabyte.kobweb.compose.ui.modifiers.borderRadius
import com.varabyte.kobweb.compose.ui.modifiers.borderTop
import com.varabyte.kobweb.compose.ui.modifiers.bottom
import com.varabyte.kobweb.compose.ui.modifiers.boxShadow
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.cursor
import com.varabyte.kobweb.compose.ui.modifiers.display
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.float
import com.varabyte.kobweb.compose.ui.modifiers.fontFamily
import com.varabyte.kobweb.compose.ui.modifiers.fontSize
import com.varabyte.kobweb.compose.ui.modifiers.fontWeight
import com.varabyte.kobweb.compose.ui.modifiers.lineHeight
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.minWidth
import com.varabyte.kobweb.compose.ui.modifiers.outline
import com.varabyte.kobweb.compose.ui.modifiers.overflow
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.compose.ui.modifiers.position
import com.varabyte.kobweb.compose.ui.modifiers.right
import com.varabyte.kobweb.compose.ui.modifiers.setVariable
import com.varabyte.kobweb.compose.ui.modifiers.size
import com.varabyte.kobweb.compose.ui.modifiers.textAlign
import com.varabyte.kobweb.compose.ui.modifiers.top
import com.varabyte.kobweb.compose.ui.modifiers.transform
import com.varabyte.kobweb.compose.ui.modifiers.transition
import com.varabyte.kobweb.compose.ui.modifiers.zIndex
import com.varabyte.kobweb.silk.components.animation.Keyframes
import com.varabyte.kobweb.silk.components.animation.toAnimation
import com.varabyte.kobweb.silk.components.forms.ButtonStyle
import com.varabyte.kobweb.silk.components.forms.ButtonVars
import com.varabyte.kobweb.silk.components.layout.HorizontalDividerStyle
import com.varabyte.kobweb.silk.components.style.ComponentStyle
import com.varabyte.kobweb.silk.components.style.addVariantBase
import com.varabyte.kobweb.silk.components.style.base
import com.varabyte.kobweb.silk.components.style.breakpoint.Breakpoint
import com.varabyte.kobweb.silk.components.style.hover
import com.varabyte.kobweb.silk.init.InitSilk
import com.varabyte.kobweb.silk.init.InitSilkContext
import com.varabyte.kobweb.silk.init.registerStyleBase
import com.varabyte.kobweb.silk.theme.modifyComponentStyleBase
import org.jetbrains.compose.web.css.AnimationTimingFunction
import org.jetbrains.compose.web.css.CSSSizeValue
import org.jetbrains.compose.web.css.CSSUnit
import org.jetbrains.compose.web.css.Color
import org.jetbrains.compose.web.css.DisplayStyle
import org.jetbrains.compose.web.css.LineStyle
import org.jetbrains.compose.web.css.Position
import org.jetbrains.compose.web.css.cssRem
import org.jetbrains.compose.web.css.deg
import org.jetbrains.compose.web.css.ms
import org.jetbrains.compose.web.css.percent
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.css.s

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

val ShadowedGreenButtonVariant by ComponentStyle {
    hover {
        Modifier
            .boxShadow(0.px, 0.px, 20.px, 0.px, getSitePalette().green)
            .transition(CSSTransition(property = "box-shadow", duration = 400.ms))
    }
}

val ShadowedGrayButtonVariant by ComponentStyle {
    base {
        Modifier
            .boxShadow(0.px, 0.px, 3.px, 0.px, Color.lightgray)
    }
    hover {
        Modifier
            .boxShadow(0.px, 0.px, 20.px, 0.px, Color.gray)
            .transition(CSSTransition(property = "box-shadow", duration = 400.ms))
    }
}

val DropdownStyle by ComponentStyle {
    base {
        Modifier
            .float(CSSFloat.Left)
            .overflow(Overflow.Hidden)
    }
    cssRule(" .dropbtn") {
        Modifier
            .fontSize(16.px)
            .noBorder()
            .color(getSitePalette().blue)
            .padding(14.px, 16.px)
            .backgroundColor(getSitePalette().white)
    }
    cssRule(":hover .dropdown-content") {
        Modifier.display(DisplayStyle.Block)
    }
}

val DropdownContentStyle by ComponentStyle {
    base {
        Modifier
            .display(DisplayStyle.None)
            .position(Position.Absolute)
            .padding(10.px, 14.px)
            .backgroundColor(getSitePalette().white)
            .minWidth(160.px)
            .boxShadow(0.px, 0.px, 1.px, 0.px, getSitePalette().blue)
            .borderRadius(2.px)
            .transition(CSSTransition(property = "box-shadow", duration = 400.ms))
    }
    cssRule(" a") {
        Modifier
            .float(CSSFloat.None)
            .color(Colors.Black)
            .padding(8.px)
            .display(DisplayStyle.Block)
            .textAlign(TextAlign.Left)
    }
    cssRule(" a:hover") {
        Modifier.backgroundColor(getSitePalette().white)
    }
}

val InputCheckBoxStyle by ComponentStyle {
    base {
        Modifier
            .display(DisplayStyle.None)
    }
    cssRule(":checked ~ label > img") {
        Modifier
            .transform { scale(2) }
            .cursor(Cursor.ZoomOut)
    }
}
val ContainerStyle by ComponentStyle {
    cssRule(" img") {
        Modifier
            .transition(CSSTransition("transform", 0.25.s, TransitionTimingFunction.Ease))
            .cursor(Cursor.ZoomIn)
    }
}

val SuccessStyle by ComponentStyle.base {
    Modifier
        .fillMaxWidth()
        .backgroundColor(getSitePalette().green)
        .borderLeft(6.px, LineStyle.Solid, getSitePalette().blue)
        .padding(12.px)
        .margin(topBottom = 24.px)
        .transition(CSSTransition("transform", 0.25.s, TransitionTimingFunction.Ease))
}

val LoaderStyle by ComponentStyle.base {
    Modifier
        .border(10.px, LineStyle.Solid, getSitePalette().blue)
        .borderTop(10.px, LineStyle.Solid, getSitePalette().green)
        .borderRadius(50.percent)
        .animation(
            Spin.toAnimation(
                colorMode,
                duration = 1.s,
                timingFunction = AnimationTimingFunction.Linear,
                iterationCount = AnimationIterationCount.Infinite
            )
        )
        .size(72.px)
}
val Spin by Keyframes {
    0.percent {
        Modifier
            .transform { rotate(0.deg) }
    }
    100.percent {
        Modifier
            .transform { rotate(360.deg) }
    }
}

val MyBtnStyle by ComponentStyle {
    base {
        Modifier
            .position(Position.Fixed)
            .bottom(20.px)
            .right(30.px)
            .zIndex(99)
            .border(0.px)
            .outline(0.px)
            .backgroundColor(getSitePalette().green)
            .color(Colors.White)
            .cursor(Cursor.Pointer)
            .borderRadius(100.percent)
            .padding(topBottom = 15.px, leftRight = 22.px)
    }
}

val HeaderStyle by ComponentStyle.base {
    Modifier
        .backgroundColor(getSitePalette().green)
        .padding(30.px)
        .textAlign(TextAlign.Center)
}

val NavbarStyle by ComponentStyle {
    base {
        Modifier
            .fillMaxWidth()
            .alignContent(AlignContent.Center)
            .overflow(Overflow.Hidden)
    }
    cssRule(" a") {
        Modifier
            .float(CSSFloat.Left)
            .display(DisplayStyle.Block)
            .color(getSitePalette().white)
            .textAlign(TextAlign.Center)
            .padding(14.px, 16.px)
            .fontSize(17.px)
    }
    cssRule(" a.active") {
        Modifier
            .backgroundColor(getSitePalette().green)
            .color(Colors.White)
    }
}

val StickyStyle by ComponentStyle {
    base {
        Modifier
            .position(Position.Fixed)
            .top(0.px)
            .fillMaxWidth()
            .backgroundColor(getSitePalette().white)
    }
    cssRule(" + .content") {
        Modifier
            .padding(top = 60.px)
    }
}

