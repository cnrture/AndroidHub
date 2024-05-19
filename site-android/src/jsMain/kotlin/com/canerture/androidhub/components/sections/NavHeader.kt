package com.canerture.androidhub.components.sections

import androidx.compose.runtime.Composable
import com.canerture.androidhub.NavItemStyle
import com.canerture.androidhub.NavbarStyle
import com.canerture.androidhub.ShadowedGreenVariant
import com.canerture.androidhub.common.Res
import com.canerture.androidhub.common.noBorder
import com.canerture.androidhub.components.widgets.SearchArea
import com.canerture.androidhub.data.isUserLoggedIn
import com.canerture.androidhub.getSitePalette
import com.canerture.androidhub.navigation.Screen
import com.varabyte.kobweb.compose.css.Cursor
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.alignContent
import com.varabyte.kobweb.compose.ui.modifiers.backgroundColor
import com.varabyte.kobweb.compose.ui.modifiers.borderRadius
import com.varabyte.kobweb.compose.ui.modifiers.boxShadow
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.cursor
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.fontSize
import com.varabyte.kobweb.compose.ui.modifiers.height
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.onClick
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.compose.ui.modifiers.setVariable
import com.varabyte.kobweb.compose.ui.modifiers.size
import com.varabyte.kobweb.compose.ui.modifiers.width
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.core.rememberPageContext
import com.varabyte.kobweb.silk.components.forms.ButtonVars
import com.varabyte.kobweb.silk.components.graphics.Image
import com.varabyte.kobweb.silk.components.icons.fa.FaBars
import com.varabyte.kobweb.silk.components.icons.fa.IconSize
import com.varabyte.kobweb.silk.components.layout.breakpoint.displayIfAtLeast
import com.varabyte.kobweb.silk.components.navigation.Link
import com.varabyte.kobweb.silk.components.style.breakpoint.Breakpoint
import com.varabyte.kobweb.silk.components.style.toAttrs
import com.varabyte.kobweb.silk.components.style.toModifier
import com.varabyte.kobweb.silk.components.text.SpanText
import com.varabyte.kobweb.silk.theme.breakpoint.rememberBreakpoint
import org.jetbrains.compose.web.css.AlignContent
import org.jetbrains.compose.web.css.Color
import org.jetbrains.compose.web.css.cssRem
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.Button
import org.jetbrains.compose.web.dom.Div

val navItems = listOf("Article", "Project", "Extension", "Plugin", "Library", "Resources")

@Composable
fun NavHeader(
    modifier: Modifier = Modifier,
    onMenuOpen: () -> Unit
) {
    val breakpoint = rememberBreakpoint()
    val context = rememberPageContext()
    val isUserLoggedIn = isUserLoggedIn()

    val logoSize = if (breakpoint > Breakpoint.MD) Pair(340.px, 90.px) else Pair(250.px, 66.px)

    Row(
        modifier = modifier.fillMaxWidth(),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.Center
    ) {
        if (breakpoint < Breakpoint.MD) {
            FaBars(
                modifier = Modifier
                    .margin(right = 12.px, bottom = 12.px)
                    .color(getSitePalette().blue)
                    .cursor(Cursor.Pointer)
                    .onClick { onMenuOpen() },
                size = IconSize.XL
            )
        }

        Link(Screen.HomePage.route) {
            Image(
                src = Res.Image.LOGO,
                description = "AndroidHub Logo",
                modifier = Modifier.size(logoSize.first, logoSize.second)
            )
        }
    }

    Row(
        modifier = Modifier.fillMaxWidth().padding(leftRight = 1.cssRem),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.Center
    ) {
        Row(
            modifier = Modifier.displayIfAtLeast(Breakpoint.MD)
                .backgroundColor(getSitePalette().white)
                .borderRadius(5.cssRem)
                .boxShadow(0.px, 0.px, 5.px, 0.px, Color.lightgray)
                .padding(topBottom = 1.cssRem, leftRight = 2.cssRem),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Div(
                attrs = NavbarStyle.toAttrs(),
            ) {
                navItems.forEach { item ->
                    MenuItem(item)
                }
            }

            Button(
                attrs = ShadowedGreenVariant.toModifier()
                    .backgroundColor(getSitePalette().green)
                    .setVariable(ButtonVars.BackgroundDefaultColor, getSitePalette().green)
                    .setVariable(ButtonVars.BackgroundHoverColor, getSitePalette().green)
                    .setVariable(ButtonVars.BackgroundPressedColor, getSitePalette().green)
                    .width(120.px)
                    .borderRadius(3.cssRem)
                    .padding(leftRight = 1.cssRem, topBottom = 0.5.cssRem)
                    .margin(right = 12.px)
                    .noBorder()
                    .cursor(Cursor.Pointer)
                    .onClick {
                        if (isUserLoggedIn) {
                            context.router.navigateTo(Screen.AdminMyPosts.route)
                        } else {
                            context.router.navigateTo(Screen.Login.route)
                        }
                    }
                    .toAttrs(),
            ) {
                SpanText(
                    text = "Join us",
                    modifier = Modifier
                        .fontSize(16.px)
                        .color(getSitePalette().white)
                )
            }

            SearchArea()
        }
    }
}

@Composable
fun MenuItem(
    text: String
) {
    val context = rememberPageContext()
    SpanText(
        text = text,
        modifier = NavItemStyle.toModifier()
            .margin(leftRight = 8.px)
            .fontSize(16.px)
            .cursor(Cursor.Pointer)
            .onClick {
                context.router.tryRoutingTo(Screen.CategoryPage.getCategoryPosts(text))
            }
    )
}

@Composable
fun SidePanelMenuItem(
    text: String
) {
    val context = rememberPageContext()
    SpanText(
        text = text,
        modifier = Modifier
            .margin(left = 12.px, bottom = 32.px)
            .fontSize(16.px)
            .cursor(Cursor.Pointer)
            .onClick {
                context.router.tryRoutingTo(Screen.CategoryPage.getCategoryPosts(text))
            }
    )
}
