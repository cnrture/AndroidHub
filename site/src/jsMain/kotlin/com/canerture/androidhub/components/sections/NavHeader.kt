package com.canerture.androidhub.components.sections

import androidx.compose.runtime.Composable
import com.canerture.androidhub.NavItemStyle
import com.canerture.androidhub.NavbarStyle
import com.canerture.androidhub.components.widgets.SearchButton
import com.canerture.androidhub.getSitePalette
import com.canerture.androidhub.navigation.Screen
import com.canerture.androidhub.utils.Res
import com.varabyte.kobweb.compose.css.Cursor
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.alignContent
import com.varabyte.kobweb.compose.ui.modifiers.backgroundColor
import com.varabyte.kobweb.compose.ui.modifiers.borderRadius
import com.varabyte.kobweb.compose.ui.modifiers.boxShadow
import com.varabyte.kobweb.compose.ui.modifiers.classNames
import com.varabyte.kobweb.compose.ui.modifiers.cursor
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.gap
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.onClick
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.compose.ui.modifiers.width
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.core.rememberPageContext
import com.varabyte.kobweb.silk.components.graphics.Image
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
    onSearchClick: () -> Unit
) {
    val breakpoint = rememberBreakpoint()

    val logoWidth = when (breakpoint) {
        Breakpoint.ZERO -> 200.px
        Breakpoint.SM -> 200.px
        Breakpoint.MD -> 300.px
        Breakpoint.LG -> 320.px
        Breakpoint.XL -> 360.px
    }

    Div(
        attrs = modifier.toAttrs()
    ) {
        Link(Screen.HomePage.route, Modifier.fillMaxWidth()) {
            Image(
                src = Res.Image.LOGO,
                description = "AndroidHub Logo",
                modifier = Modifier.width(logoWidth).alignContent(AlignContent.Center)
            )
        }
    }

    Row(
        modifier = Modifier.fillMaxWidth().padding(leftRight = 1.cssRem),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.Center
    ) {
        Row(
            modifier = Modifier.gap(1.5.cssRem).displayIfAtLeast(Breakpoint.MD)
                .backgroundColor(getSitePalette().nearBackground)
                .borderRadius(5.cssRem)
                .boxShadow(0.px, 0.px, 5.px, 0.px, Color.lightgray)
                .padding(topBottom = 0.5.cssRem, leftRight = 2.cssRem),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Div(
                attrs = NavbarStyle.toAttrs(),
            ) {
                navItems.forEach { item ->
                    MenuItem(item)
                }
            }

            SearchButton(
                modifier = Modifier.cursor(Cursor.Pointer),
                onClick = onSearchClick
            )
        }
    }
}

@Composable
fun StickyHeader(
    modifier: Modifier = Modifier
) {
    val breakpoint = rememberBreakpoint()

    val logoWidth = when (breakpoint) {
        Breakpoint.ZERO -> 14.cssRem
        Breakpoint.SM -> 18.cssRem
        Breakpoint.MD -> 18.cssRem
        Breakpoint.LG -> 16.cssRem
        Breakpoint.XL -> 20.cssRem
    }

    Row(
        modifier = modifier.fillMaxWidth().padding(leftRight = 1.cssRem),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.Center
    ) {
        Link(
            path = Screen.HomePage.route,
            modifier = Modifier.margin(top = 2.cssRem, bottom = 1.cssRem, left = 1.cssRem, right = 6.cssRem)
        ) {
            Image(
                src = Res.Image.LOGO,
                description = "AndroidHub Logo",
                modifier = Modifier.width(logoWidth)
            )
        }
        Row(
            modifier = Modifier.gap(1.5.cssRem).displayIfAtLeast(Breakpoint.MD)
                .padding(topBottom = 0.5.cssRem, leftRight = 2.cssRem),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Div(
                attrs = Modifier.classNames("navbar").toAttrs(),
            ) {
                Div(
                    attrs = Modifier.classNames("navbar").toAttrs(),
                ) {
                    navItems.forEach { item ->
                        MenuItem(item)
                    }
                }
            }

            SearchButton(onClick = {})
        }
    }
}

@Composable
private fun MenuItem(
    text: String
) {
    val context = rememberPageContext()
    Div(attrs = Modifier.classNames("dropdown").toAttrs()) {
        Button(
            attrs = Modifier.classNames("dropbtn").toAttrs()
        ) {
            SpanText(
                text = text,
                modifier = NavItemStyle.toModifier()
                    .cursor(Cursor.Pointer)
                    .onClick {
                        context.router.tryRoutingTo(Screen.CategoryPage.getCategoryPosts(text))
                    }
            )
        }
    }
}
