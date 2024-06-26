package com.canerture.androidhub

import com.canerture.androidhub.common.noBorder
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
import com.varabyte.kobweb.compose.ui.modifiers.boxShadow
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.cursor
import com.varabyte.kobweb.compose.ui.modifiers.display
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.float
import com.varabyte.kobweb.compose.ui.modifiers.fontFamily
import com.varabyte.kobweb.compose.ui.modifiers.fontSize
import com.varabyte.kobweb.compose.ui.modifiers.lineHeight
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.minWidth
import com.varabyte.kobweb.compose.ui.modifiers.overflow
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.compose.ui.modifiers.position
import com.varabyte.kobweb.compose.ui.modifiers.size
import com.varabyte.kobweb.compose.ui.modifiers.textAlign
import com.varabyte.kobweb.compose.ui.modifiers.transform
import com.varabyte.kobweb.compose.ui.modifiers.transition
import com.varabyte.kobweb.silk.components.animation.Keyframes
import com.varabyte.kobweb.silk.components.animation.toAnimation
import com.varabyte.kobweb.silk.components.layout.HorizontalDividerStyle
import com.varabyte.kobweb.silk.components.style.ComponentStyle
import com.varabyte.kobweb.silk.components.style.base
import com.varabyte.kobweb.silk.components.style.hover
import com.varabyte.kobweb.silk.init.InitSilk
import com.varabyte.kobweb.silk.init.InitSilkContext
import com.varabyte.kobweb.silk.init.registerStyleBase
import com.varabyte.kobweb.silk.theme.modifyComponentStyleBase
import org.jetbrains.compose.web.css.AnimationTimingFunction
import org.jetbrains.compose.web.css.Color
import org.jetbrains.compose.web.css.DisplayStyle
import org.jetbrains.compose.web.css.LineStyle
import org.jetbrains.compose.web.css.Position
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
                "PT Sans",
            )
            .fontSize(18.px)
            .lineHeight(1.5)
    }

    // Silk dividers only extend 90% by default; we want full width dividers in our site
    ctx.theme.modifyComponentStyleBase(HorizontalDividerStyle) {
        Modifier.fillMaxWidth()
    }
}

val ShadowedBlueVariant by ComponentStyle {
    hover {
        Modifier
            .boxShadow(0.px, 0.px, 20.px, 0.px, getSitePalette().secondary)
            .transition(CSSTransition(property = "box-shadow", duration = 400.ms))
    }
}

val ShadowedGreenVariant by ComponentStyle {
    hover {
        Modifier
            .boxShadow(0.px, 0.px, 20.px, 0.px, getSitePalette().primary)
            .transition(CSSTransition(property = "box-shadow", duration = 400.ms))
    }
}

val ShadowedRedVariant by ComponentStyle {
    hover {
        Modifier
            .boxShadow(0.px, 0.px, 20.px, 0.px, Color.red)
            .transition(CSSTransition(property = "box-shadow", duration = 400.ms))
    }
}

val ShadowedGrayVariant by ComponentStyle {
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
            .color(getSitePalette().secondary)
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
            .boxShadow(0.px, 0.px, 1.px, 0.px, getSitePalette().secondary)
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
        .backgroundColor(getSitePalette().primary)
        .borderLeft(6.px, LineStyle.Solid, getSitePalette().secondary)
        .padding(12.px)
        .margin(topBottom = 24.px)
        .transition(CSSTransition("transform", 0.25.s, TransitionTimingFunction.Ease))
}

val ErrorStyle by ComponentStyle.base {
    Modifier
        .fillMaxWidth()
        .backgroundColor(Color.red)
        .color(getSitePalette().white)
        .borderLeft(6.px, LineStyle.Solid, getSitePalette().secondary)
        .padding(12.px)
        .margin(topBottom = 24.px)
        .transition(CSSTransition("transform", 0.25.s, TransitionTimingFunction.Ease))
}

val LoaderStyle by ComponentStyle.base {
    Modifier
        .border(10.px, LineStyle.Solid, getSitePalette().secondary)
        .borderTop(10.px, LineStyle.Solid, getSitePalette().primary)
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
    }
    cssRule(" a.active") {
        Modifier
            .backgroundColor(getSitePalette().primary)
            .color(Colors.White)
    }
}

val NavItemStyle by ComponentStyle {
    base {
        Modifier
            .color(getSitePalette().secondary)
    }
    hover {
        Modifier
            .color(getSitePalette().primary)
    }
}