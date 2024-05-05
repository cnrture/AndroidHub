package com.canerture.androidhub.components.sections

import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.key
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import com.canerture.androidhub.components.widgets.IconButton
import com.canerture.androidhub.getSitePalette
import com.varabyte.kobweb.compose.css.functions.clamp
import com.varabyte.kobweb.compose.dom.svg.Circle
import com.varabyte.kobweb.compose.dom.svg.Line
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.foundation.layout.Spacer
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.animation
import com.varabyte.kobweb.compose.ui.modifiers.backgroundColor
import com.varabyte.kobweb.compose.ui.modifiers.borderRadius
import com.varabyte.kobweb.compose.ui.modifiers.boxShadow
import com.varabyte.kobweb.compose.ui.modifiers.classNames
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.display
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxHeight
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.fontSize
import com.varabyte.kobweb.compose.ui.modifiers.gap
import com.varabyte.kobweb.compose.ui.modifiers.onAnimationEnd
import com.varabyte.kobweb.compose.ui.modifiers.onClick
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.compose.ui.modifiers.setVariable
import com.varabyte.kobweb.compose.ui.modifiers.translateX
import com.varabyte.kobweb.compose.ui.modifiers.width
import com.varabyte.kobweb.compose.ui.thenIf
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.silk.components.animation.Keyframes
import com.varabyte.kobweb.silk.components.animation.toAnimation
import com.varabyte.kobweb.silk.components.graphics.Image
import com.varabyte.kobweb.silk.components.icons.CloseIcon
import com.varabyte.kobweb.silk.components.icons.HamburgerIcon
import com.varabyte.kobweb.silk.components.icons.IconRenderStyle
import com.varabyte.kobweb.silk.components.icons.createIcon
import com.varabyte.kobweb.silk.components.layout.breakpoint.displayIfAtLeast
import com.varabyte.kobweb.silk.components.layout.breakpoint.displayUntil
import com.varabyte.kobweb.silk.components.navigation.Link
import com.varabyte.kobweb.silk.components.navigation.UncoloredLinkVariant
import com.varabyte.kobweb.silk.components.overlay.Overlay
import com.varabyte.kobweb.silk.components.overlay.OverlayVars
import com.varabyte.kobweb.silk.components.style.ComponentStyle
import com.varabyte.kobweb.silk.components.style.base
import com.varabyte.kobweb.silk.components.style.breakpoint.Breakpoint
import com.varabyte.kobweb.silk.components.style.toModifier
import com.varabyte.kobweb.silk.components.style.vars.color.ColorVar
import com.varabyte.kobweb.silk.components.text.SpanText
import com.varabyte.kobweb.silk.theme.breakpoint.rememberBreakpoint
import org.jetbrains.compose.web.css.AnimationDirection
import org.jetbrains.compose.web.css.AnimationFillMode
import org.jetbrains.compose.web.css.AnimationTimingFunction
import org.jetbrains.compose.web.css.Color
import org.jetbrains.compose.web.css.DisplayStyle
import org.jetbrains.compose.web.css.cssRem
import org.jetbrains.compose.web.css.ms
import org.jetbrains.compose.web.css.percent
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.Button
import org.jetbrains.compose.web.dom.Div

val NavHeaderStyle by ComponentStyle.base {
    Modifier.fillMaxWidth().padding(top = 4.cssRem, leftRight = 3.cssRem)
}

@Composable
private fun NavLink(path: String, text: String, modifier: Modifier = Modifier) {
    Link(
        path,
        text,
        Modifier.fontSize(1.cssRem).setVariable(ColorVar, Color.black).then(modifier),
        UncoloredLinkVariant
    )
}

@Composable
private fun MenuItems() {
    MenuItem()
    NavLink("/", "Projects")
    NavLink("/", "Extensions")
    NavLink("/", "Plugins")
    NavLink("/", "Library")
    NavLink("/", "Resources")
}

@Composable
private fun MenuItem() {
    var isOpen by remember { mutableStateOf(false) }
    Column {
        NavLink("/", "Articles", Modifier.onClick { isOpen = !isOpen })

        if (isOpen) {
            NavLink("/", "Android")
            NavLink("/", "Kotlin")
            NavLink("/", "Jetpack")
        }
    }
}

@Composable
private fun HamburgerButton(onClick: () -> Unit) {
    IconButton(onClick) {
        HamburgerIcon(Modifier.color(getSitePalette().blue))
    }
}

@Composable
private fun CloseButton(onClick: () -> Unit) {
    IconButton(onClick) {
        CloseIcon()
    }
}

@Composable
private fun SearchButton(onClick: () -> Unit) {
    IconButton(onClick) {
        createIcon(renderStyle = IconRenderStyle.Stroke(3), attrs = Modifier.color(getSitePalette().blue).toAttrs()) {
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

val SideMenuSlideInAnim by Keyframes {
    from {
        Modifier.translateX(100.percent)
    }

    to {
        Modifier
    }
}

enum class SideMenuState {
    CLOSED,
    OPEN,
    CLOSING;

    fun close() = when (this) {
        CLOSED -> CLOSED
        OPEN -> CLOSING
        CLOSING -> CLOSING
    }
}

@Composable
fun NavHeader() {
    var menuState by remember { mutableStateOf(SideMenuState.CLOSED) }

    val breakpoint = rememberBreakpoint()

    val logoWidth = when (breakpoint) {
        Breakpoint.ZERO -> 14.cssRem
        Breakpoint.SM -> 18.cssRem
        Breakpoint.MD -> 24.cssRem
        Breakpoint.LG -> 24.cssRem
        Breakpoint.XL -> 26.cssRem
    }

    Row(
        modifier = NavHeaderStyle.toModifier(),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.Center
    ) {
        Link("https://androidhub.dev", Modifier.thenIf(breakpoint < Breakpoint.MD, Modifier.weight(1f))) {
            Image("/androidhub-logo.png", "AndroidHub Logo", Modifier.width(logoWidth).display(DisplayStyle.Block))
        }

        Row(
            Modifier
                .fontSize(1.5.cssRem)
                .displayUntil(Breakpoint.MD),
            verticalAlignment = Alignment.CenterVertically
        ) {
            HamburgerButton(onClick = { menuState = SideMenuState.OPEN })

            if (menuState != SideMenuState.CLOSED) {
                SideMenu(
                    menuState,
                    close = { menuState = menuState.close() },
                    onAnimationEnd = { if (menuState == SideMenuState.CLOSING) menuState = SideMenuState.CLOSED }
                )
            }
        }
    }

    Row(
        modifier = Modifier.fillMaxWidth().padding(top = 2.cssRem, leftRight = 3.cssRem),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.Center
    ) {
        Row(
            modifier = Modifier.gap(1.5.cssRem).displayIfAtLeast(Breakpoint.MD)
                .backgroundColor(getSitePalette().nearBackground)
                .borderRadius(5.cssRem)
                .boxShadow(0.px, 0.px, 5.px, 0.px, Color.lightgray)
                .padding(topBottom = 0.5.cssRem, leftRight = 3.cssRem),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Div(
                attrs = Modifier.classNames("navbar").toAttrs(),
            ) {
                Div(attrs = Modifier.classNames("dropdown").toAttrs()) {
                    Button(
                        attrs = Modifier.classNames("dropbtn").toAttrs()
                    ) {
                        SpanText("Articles")
                    }
                    Div(attrs = Modifier.classNames("dropdown-content").toAttrs()) {
                        SpanText("Android Studio")
                    }
                }

                Div(attrs = Modifier.classNames("dropdown").toAttrs()) {
                    Button(
                        attrs = Modifier.classNames("dropbtn").toAttrs()
                    ) {
                        SpanText("Projects")
                    }
                    Div(attrs = Modifier.classNames("dropdown-content").toAttrs()) {
                        SpanText("Multiplatform")
                    }
                }

                Div(attrs = Modifier.classNames("dropdown").toAttrs()) {
                    Button(
                        attrs = Modifier.classNames("dropbtn").toAttrs()
                    ) {
                        SpanText("Extensions")
                    }
                    Div(attrs = Modifier.classNames("dropdown-content").toAttrs()) {
                        SpanText("View")
                        SpanText("Intent")
                    }
                }

                Div(attrs = Modifier.classNames("dropdown").toAttrs()) {
                    Button(
                        attrs = Modifier.classNames("dropbtn").toAttrs()
                    ) {
                        SpanText("Plugins")
                    }
                }

                Div(attrs = Modifier.classNames("dropdown").toAttrs()) {
                    Button(
                        attrs = Modifier.classNames("dropbtn").toAttrs()
                    ) {
                        SpanText("Library")
                    }
                }

                Div(attrs = Modifier.classNames("dropdown").toAttrs()) {
                    Button(
                        attrs = Modifier.classNames("dropbtn").toAttrs()
                    ) {
                        SpanText("Resources")
                    }
                    Div(attrs = Modifier.classNames("dropdown-content").toAttrs()) {
                        SpanText("Courses")
                        Spacer()
                        SpanText("Youtube")
                    }
                }
            }

            SearchButton(onClick = {})
        }
    }
}

@Composable
private fun SideMenu(menuState: SideMenuState, close: () -> Unit, onAnimationEnd: () -> Unit) {
    Overlay(
        Modifier
            .setVariable(OverlayVars.BackgroundColor, Colors.Transparent)
            .onClick { close() }
    ) {
        key(menuState) {
            Column(
                Modifier
                    .fillMaxHeight()
                    .width(clamp(8.cssRem, 33.percent, 10.cssRem))
                    .align(Alignment.CenterEnd)
                    .padding(top = 1.cssRem, leftRight = 1.cssRem)
                    .gap(1.5.cssRem)
                    .backgroundColor(getSitePalette().nearBackground)
                    .animation(
                        SideMenuSlideInAnim.toAnimation(
                            duration = 200.ms,
                            timingFunction = if (menuState == SideMenuState.OPEN) AnimationTimingFunction.EaseOut else AnimationTimingFunction.EaseIn,
                            direction = if (menuState == SideMenuState.OPEN) AnimationDirection.Normal else AnimationDirection.Reverse,
                            fillMode = AnimationFillMode.Forwards
                        )
                    )
                    .borderRadius(topLeft = 2.cssRem)
                    .onClick { it.stopPropagation() }
                    .onAnimationEnd { onAnimationEnd() },
                horizontalAlignment = Alignment.End
            ) {
                CloseButton(onClick = { close() })
                Column(
                    Modifier.padding(right = 0.75.cssRem).gap(1.5.cssRem).fontSize(1.4.cssRem),
                    horizontalAlignment = Alignment.End
                ) {
                    MenuItems()
                }
            }
        }
    }
}
