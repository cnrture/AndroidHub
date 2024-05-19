package com.canerture.androidhub.components.layouts

import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import com.canerture.androidhub.NavbarStyle
import com.canerture.androidhub.ShadowedGreenVariant
import com.canerture.androidhub.common.noBorder
import com.canerture.androidhub.components.sections.Footer
import com.canerture.androidhub.components.sections.NavHeader
import com.canerture.androidhub.components.sections.OverflowSidePanel
import com.canerture.androidhub.components.sections.SidePanelMenuItem
import com.canerture.androidhub.components.sections.navItems
import com.canerture.androidhub.components.widgets.MobileSearchArea
import com.canerture.androidhub.data.isUserLoggedIn
import com.canerture.androidhub.getSitePalette
import com.canerture.androidhub.navigation.Screen
import com.varabyte.kobweb.compose.css.Cursor
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.foundation.layout.ColumnScope
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.backgroundColor
import com.varabyte.kobweb.compose.ui.modifiers.borderRadius
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.cursor
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxSize
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.fontSize
import com.varabyte.kobweb.compose.ui.modifiers.gridRow
import com.varabyte.kobweb.compose.ui.modifiers.gridTemplateRows
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.maxWidth
import com.varabyte.kobweb.compose.ui.modifiers.minHeight
import com.varabyte.kobweb.compose.ui.modifiers.onClick
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.compose.ui.modifiers.setVariable
import com.varabyte.kobweb.compose.ui.modifiers.width
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.core.rememberPageContext
import com.varabyte.kobweb.silk.components.forms.ButtonVars
import com.varabyte.kobweb.silk.components.style.ComponentStyle
import com.varabyte.kobweb.silk.components.style.breakpoint.Breakpoint
import com.varabyte.kobweb.silk.components.style.toModifier
import com.varabyte.kobweb.silk.components.text.SpanText
import kotlinx.browser.document
import org.jetbrains.compose.web.css.cssRem
import org.jetbrains.compose.web.css.fr
import org.jetbrains.compose.web.css.percent
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.Button

val PageContentStyle by ComponentStyle {
    base { Modifier.fillMaxSize().padding(leftRight = 2.cssRem, top = 4.cssRem) }
    Breakpoint.MD { Modifier.maxWidth(90.cssRem) }
}

@Composable
fun PageLayout(title: String, content: @Composable ColumnScope.() -> Unit) {

    var overflowOpened by remember { mutableStateOf(false) }
    val isUserLoggedIn = isUserLoggedIn()
    val context = rememberPageContext()

    LaunchedEffect(title) {
        document.title = title
    }

    Box(
        Modifier
            .fillMaxWidth()
            .minHeight(100.percent)
            .gridTemplateRows { size(1.fr); size(minContent) },
        contentAlignment = Alignment.Center
    ) {
        Column(
            modifier = Modifier.fillMaxSize().gridRow(1),
            horizontalAlignment = Alignment.CenterHorizontally,
        ) {
            if (overflowOpened) {
                OverflowSidePanel(
                    onMenuClose = { overflowOpened = false },
                    content = {
                        Column {
                            navItems.forEach { item ->
                                SidePanelMenuItem(item)
                            }

                            Button(
                                attrs = ShadowedGreenVariant.toModifier()
                                    .backgroundColor(getSitePalette().primary)
                                    .setVariable(ButtonVars.BackgroundDefaultColor, getSitePalette().primary)
                                    .setVariable(ButtonVars.BackgroundHoverColor, getSitePalette().primary)
                                    .setVariable(ButtonVars.BackgroundPressedColor, getSitePalette().primary)
                                    .width(140.px)
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

                            MobileSearchArea()
                        }
                    }
                )
            }
            NavHeader(
                modifier = NavbarStyle.toModifier()
                    .margin(top = 4.cssRem, bottom = 2.cssRem, leftRight = 1.cssRem),
                onMenuOpen = { overflowOpened = true }
            )
            Column(
                modifier = PageContentStyle.toModifier(),
                horizontalAlignment = Alignment.CenterHorizontally
            ) {
                content()
            }
            Footer(Modifier.fillMaxWidth().gridRow(2))
        }
    }
}
