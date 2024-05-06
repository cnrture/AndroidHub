package com.canerture.androidhub.components.sections

import androidx.compose.runtime.Composable
import com.canerture.androidhub.components.widgets.IconButton
import com.canerture.androidhub.getSitePalette
import com.canerture.androidhub.navigation.Screen
import com.canerture.androidhub.utils.Res
import com.varabyte.kobweb.compose.css.Cursor
import com.varabyte.kobweb.compose.dom.svg.Circle
import com.varabyte.kobweb.compose.dom.svg.Line
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.alignContent
import com.varabyte.kobweb.compose.ui.modifiers.backgroundColor
import com.varabyte.kobweb.compose.ui.modifiers.borderRadius
import com.varabyte.kobweb.compose.ui.modifiers.boxShadow
import com.varabyte.kobweb.compose.ui.modifiers.classNames
import com.varabyte.kobweb.compose.ui.modifiers.color
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
import com.varabyte.kobweb.silk.components.icons.IconRenderStyle
import com.varabyte.kobweb.silk.components.icons.createIcon
import com.varabyte.kobweb.silk.components.layout.breakpoint.displayIfAtLeast
import com.varabyte.kobweb.silk.components.navigation.Link
import com.varabyte.kobweb.silk.components.style.breakpoint.Breakpoint
import com.varabyte.kobweb.silk.components.text.SpanText
import com.varabyte.kobweb.silk.theme.breakpoint.rememberBreakpoint
import org.jetbrains.compose.web.css.AlignContent
import org.jetbrains.compose.web.css.Color
import org.jetbrains.compose.web.css.cssRem
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.Button
import org.jetbrains.compose.web.dom.Div

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

@Composable
fun NavHeader(
    modifier: Modifier = Modifier
) {
    val breakpoint = rememberBreakpoint()

    val logoWidth = when (breakpoint) {
        Breakpoint.ZERO -> 14.cssRem
        Breakpoint.SM -> 18.cssRem
        Breakpoint.MD -> 24.cssRem
        Breakpoint.LG -> 24.cssRem
        Breakpoint.XL -> 26.cssRem
    }

    Div(
        attrs = modifier.toAttrs()
    ) {
        Link(Screen.HomePage.route, Modifier.fillMaxWidth()) {
            Image(
                Res.Image.LOGO,
                "AndroidHub Logo",
                Modifier.width(logoWidth).alignContent(AlignContent.Center)
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
                attrs = Modifier.classNames("navbar").toAttrs(),
            ) {
                Div(attrs = Modifier.classNames("dropdown").toAttrs()) {
                    Button(
                        attrs = Modifier.classNames("dropbtn").toAttrs()
                    ) {
                        MenuItem("Article")
                    }
                }

                Div(attrs = Modifier.classNames("dropdown").toAttrs()) {
                    Button(
                        attrs = Modifier.classNames("dropbtn").toAttrs()
                    ) {
                        MenuItem("Project")
                    }
                }

                Div(attrs = Modifier.classNames("dropdown").toAttrs()) {
                    Button(
                        attrs = Modifier.classNames("dropbtn").toAttrs()
                    ) {
                        MenuItem("Extension")
                    }
                }

                Div(attrs = Modifier.classNames("dropdown").toAttrs()) {
                    Button(
                        attrs = Modifier.classNames("dropbtn").toAttrs()
                    ) {
                        MenuItem("Plugin")
                    }
                }

                Div(attrs = Modifier.classNames("dropdown").toAttrs()) {
                    Button(
                        attrs = Modifier.classNames("dropbtn").toAttrs()
                    ) {
                        MenuItem("Library")
                    }
                }

                Div(attrs = Modifier.classNames("dropdown").toAttrs()) {
                    Button(
                        attrs = Modifier.classNames("dropbtn").toAttrs()
                    ) {
                        MenuItem("Resources")
                    }
                }
            }

            SearchButton(onClick = {})
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
            modifier = Modifier.margin(top = 1.cssRem, bottom = 1.cssRem, left = 1.cssRem, right = 6.cssRem)
        ) {
            Image(
                Res.Image.LOGO,
                "AndroidHub Logo",
                Modifier.width(logoWidth)
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
                Div(attrs = Modifier.classNames("dropdown").toAttrs()) {
                    Button(
                        attrs = Modifier.classNames("dropbtn").toAttrs()
                    ) {
                        MenuItem("Article")
                    }
                }

                Div(attrs = Modifier.classNames("dropdown").toAttrs()) {
                    Button(
                        attrs = Modifier.classNames("dropbtn").toAttrs()
                    ) {
                        MenuItem("Project")
                    }
                }

                Div(attrs = Modifier.classNames("dropdown").toAttrs()) {
                    Button(
                        attrs = Modifier.classNames("dropbtn").toAttrs()
                    ) {
                        MenuItem("Extension")
                    }
                }

                Div(attrs = Modifier.classNames("dropdown").toAttrs()) {
                    Button(
                        attrs = Modifier.classNames("dropbtn").toAttrs()
                    ) {
                        MenuItem("Plugin")
                    }
                }

                Div(attrs = Modifier.classNames("dropdown").toAttrs()) {
                    Button(
                        attrs = Modifier.classNames("dropbtn").toAttrs()
                    ) {
                        MenuItem("Library")
                    }
                }

                Div(attrs = Modifier.classNames("dropdown").toAttrs()) {
                    Button(
                        attrs = Modifier.classNames("dropbtn").toAttrs()
                    ) {
                        MenuItem("Resources")
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
    SpanText(
        text = text,
        modifier = Modifier
            .cursor(Cursor.Pointer)
            .color(getSitePalette().blue)
            .onClick {
                context.router.navigateTo(Screen.CategoryPage.getCategoryPosts(text))
            }
    )
}
