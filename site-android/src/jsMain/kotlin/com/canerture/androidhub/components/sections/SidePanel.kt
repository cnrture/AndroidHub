package com.canerture.androidhub.components.sections

import androidx.compose.runtime.Composable
import com.canerture.androidhub.common.Constants.COLLAPSED_PANEL_HEIGHT
import com.canerture.androidhub.common.Constants.SIDE_PANEL_WIDTH
import com.canerture.androidhub.common.Id
import com.canerture.androidhub.common.Res
import com.canerture.androidhub.data.logout
import com.canerture.androidhub.getSitePalette
import com.canerture.androidhub.navigation.Screen
import com.varabyte.kobweb.compose.css.CSSTransition
import com.varabyte.kobweb.compose.css.Cursor
import com.varabyte.kobweb.compose.css.TransitionProperty
import com.varabyte.kobweb.compose.dom.svg.Path
import com.varabyte.kobweb.compose.dom.svg.Svg
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.backgroundColor
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.cursor
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.fontSize
import com.varabyte.kobweb.compose.ui.modifiers.height
import com.varabyte.kobweb.compose.ui.modifiers.id
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.onClick
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.compose.ui.modifiers.position
import com.varabyte.kobweb.compose.ui.modifiers.size
import com.varabyte.kobweb.compose.ui.modifiers.transition
import com.varabyte.kobweb.compose.ui.modifiers.width
import com.varabyte.kobweb.compose.ui.modifiers.zIndex
import com.varabyte.kobweb.compose.ui.styleModifier
import com.varabyte.kobweb.compose.ui.thenIf
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.core.rememberPageContext
import com.varabyte.kobweb.silk.components.graphics.Image
import com.varabyte.kobweb.silk.components.icons.fa.FaBars
import com.varabyte.kobweb.silk.components.icons.fa.IconSize
import com.varabyte.kobweb.silk.components.style.ComponentStyle
import com.varabyte.kobweb.silk.components.style.breakpoint.Breakpoint
import com.varabyte.kobweb.silk.components.style.toModifier
import com.varabyte.kobweb.silk.components.text.SpanText
import com.varabyte.kobweb.silk.theme.breakpoint.rememberBreakpoint
import kotlinx.browser.localStorage
import org.jetbrains.compose.web.css.Position
import org.jetbrains.compose.web.css.ms
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.css.vh

@Composable
fun SidePanel(onMenuClick: () -> Unit) {
    val breakpoint = rememberBreakpoint()
    if (breakpoint > Breakpoint.MD) {
        SidePanelInternal()
    } else {
        CollapsedSidePanel(onMenuClick = onMenuClick)
    }
}

@Composable
private fun SidePanelInternal() {
    val context = rememberPageContext()
    Column(
        modifier = Modifier
            .padding(leftRight = 40.px, topBottom = 50.px)
            .width(SIDE_PANEL_WIDTH.px)
            .height(100.vh)
            .position(Position.Fixed)
            .backgroundColor(getSitePalette().blue)
            .zIndex(9)
    ) {
        Image(
            modifier = Modifier
                .margin(bottom = 60.px)
                .width(160.px)
                .cursor(Cursor.Pointer)
                .onClick {
                    context.router.navigateTo(Screen.HomePage.route)
                },
            src = Res.Image.LOGO_DARK,
            alt = "Logo Image"
        )
        AdminNavigationItems()
    }
}

@Composable
fun AdminNavigationItems() {
    val context = rememberPageContext()
    val isAdmin = localStorage.getItem("isAdmin") == "true"
    SpanText(
        modifier = Modifier
            .margin(bottom = 30.px)
            .fontSize(14.px)
            .color(getSitePalette().white),
        text = "Dashboard"
    )

    if (isAdmin) {
        NavigationItem(
            modifier = Modifier.margin(bottom = 24.px),
            selected = context.route.path == Screen.AdminAllPosts.route,
            title = "All Posts",
            icon = Res.PathIcon.POSTS,
            onClick = {
                context.router.navigateTo(Screen.AdminAllPosts.route)
            }
        )
    }

    NavigationItem(
        modifier = Modifier.margin(bottom = 24.px),
        selected = context.route.path == Screen.AdminMyPosts.route,
        title = "My Posts",
        icon = Res.PathIcon.POSTS,
        onClick = {
            context.router.navigateTo(Screen.AdminMyPosts.route)
        }
    )
    NavigationItem(
        modifier = Modifier.margin(bottom = 24.px),
        selected = context.route.path == Screen.AdminCreate.route,
        title = "Create Post",
        icon = Res.PathIcon.CREATE,
        onClick = {
            context.router.navigateTo(Screen.AdminCreate.route)
        }
    )
    NavigationItem(
        title = "Logout",
        icon = Res.PathIcon.LOGOUT,
        onClick = {
            logout()
            context.router.navigateTo(Screen.Login.route)
        }
    )
}

@Composable
private fun NavigationItem(
    modifier: Modifier = Modifier,
    selected: Boolean = false,
    title: String,
    icon: String,
    onClick: () -> Unit
) {
    Row(
        modifier = NavigationItemStyle.toModifier()
            .then(modifier)
            .cursor(Cursor.Pointer)
            .onClick { onClick() },
        verticalAlignment = Alignment.CenterVertically
    ) {
        VectorIcon(
            modifier = Modifier.margin(right = 10.px),
            selected = selected,
            pathData = icon
        )
        SpanText(
            modifier = Modifier
                .id(Id.NAVIGATION_TEXT)
                .fontSize(16.px)
                .color(getSitePalette().white)
                .thenIf(
                    condition = selected,
                    other = Modifier.color(getSitePalette().green)
                ),
            text = title
        )
    }
}

@Composable
private fun VectorIcon(
    modifier: Modifier = Modifier,
    selected: Boolean,
    pathData: String
) {
    Svg(
        attrs = modifier
            .id(Id.SVG_PARENT)
            .size(24.px)
            .toAttrs {
                attr("viewBox", "0 0 24 24")
                attr("fill", "none")
            }
    ) {
        Path {
            if (selected) {
                attr(attr = "style", value = "stroke: ${getSitePalette().green}")
            } else {
                attr(attr = "style", value = "stroke: ${getSitePalette().white}")
            }
            attr(attr = "id", value = Id.VECTOR_ICON)
            attr(attr = "d", value = pathData)
            attr(attr = "stroke-width", value = "2")
            attr(attr = "stroke-linecap", value = "round")
            attr(attr = "stroke-linejoin", value = "round")
        }
    }
}

@Composable
private fun CollapsedSidePanel(onMenuClick: () -> Unit) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .height(COLLAPSED_PANEL_HEIGHT.px)
            .padding(leftRight = 24.px)
            .backgroundColor(getSitePalette().blue),
        verticalAlignment = Alignment.CenterVertically
    ) {
        FaBars(
            modifier = Modifier
                .margin(right = 24.px)
                .color(Colors.White)
                .cursor(Cursor.Pointer)
                .onClick { onMenuClick() },
            size = IconSize.XL
        )
        Image(
            modifier = Modifier.width(140.px),
            src = Res.Image.LOGO_DARK,
            alt = "Logo Image"
        )
    }
}

val NavigationItemStyle by ComponentStyle {
    cssRule(" > #${Id.SVG_PARENT} > #${Id.VECTOR_ICON}") {
        Modifier
            .transition(CSSTransition(property = TransitionProperty.All, duration = 300.ms))
            .styleModifier {
                property("stroke", getSitePalette().blue)
            }
    }
    cssRule(":hover > #${Id.SVG_PARENT} > #${Id.VECTOR_ICON}") {
        Modifier
            .styleModifier {
                property("stroke", getSitePalette().blue)
            }
    }
    cssRule(" > #${Id.NAVIGATION_TEXT}") {
        Modifier
            .transition(CSSTransition(property = TransitionProperty.All, duration = 300.ms))
            .color(getSitePalette().blue)
    }
    cssRule(":hover > #${Id.NAVIGATION_TEXT}") {
        Modifier.color(getSitePalette().blue)
    }
}