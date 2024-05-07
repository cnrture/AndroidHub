package com.canerture.androidhub.pages.login

import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import com.canerture.androidhub.ShadowedGreenButtonVariant
import com.canerture.androidhub.data.login
import com.canerture.androidhub.data.model.User
import com.canerture.androidhub.data.register
import com.canerture.androidhub.getSitePalette
import com.canerture.androidhub.navigation.Screen
import com.canerture.androidhub.utils.Constants.FONT_FAMILY
import com.canerture.androidhub.utils.Id
import com.canerture.androidhub.utils.Res
import com.canerture.androidhub.utils.noBorder
import com.varabyte.kobweb.compose.css.CSSTransition
import com.varabyte.kobweb.compose.css.Cursor
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.css.TextAlign
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.backgroundColor
import com.varabyte.kobweb.compose.ui.modifiers.border
import com.varabyte.kobweb.compose.ui.modifiers.borderRadius
import com.varabyte.kobweb.compose.ui.modifiers.boxShadow
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.cursor
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxSize
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.fontFamily
import com.varabyte.kobweb.compose.ui.modifiers.fontSize
import com.varabyte.kobweb.compose.ui.modifiers.fontWeight
import com.varabyte.kobweb.compose.ui.modifiers.height
import com.varabyte.kobweb.compose.ui.modifiers.id
import com.varabyte.kobweb.compose.ui.modifiers.lineHeight
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.onClick
import com.varabyte.kobweb.compose.ui.modifiers.outline
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.compose.ui.modifiers.textAlign
import com.varabyte.kobweb.compose.ui.modifiers.transition
import com.varabyte.kobweb.compose.ui.modifiers.width
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.core.Page
import com.varabyte.kobweb.core.rememberPageContext
import com.varabyte.kobweb.silk.components.forms.Button
import com.varabyte.kobweb.silk.components.forms.ButtonSize
import com.varabyte.kobweb.silk.components.graphics.Image
import com.varabyte.kobweb.silk.components.style.ComponentStyle
import com.varabyte.kobweb.silk.components.style.focus
import com.varabyte.kobweb.silk.components.style.toModifier
import com.varabyte.kobweb.silk.components.text.SpanText
import kotlinx.browser.document
import kotlinx.browser.localStorage
import kotlinx.coroutines.launch
import org.jetbrains.compose.web.attributes.InputType
import org.jetbrains.compose.web.css.Color
import org.jetbrains.compose.web.css.LineStyle
import org.jetbrains.compose.web.css.cssRem
import org.jetbrains.compose.web.css.ms
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.Input
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.set

sealed interface LoginRegisterState {
    data object Login : LoginRegisterState
    data object Register : LoginRegisterState
}

@Page("/login")
@Composable
fun LoginScreen() {
    val scope = rememberCoroutineScope()
    val context = rememberPageContext()
    var errorText by remember { mutableStateOf(" ") }
    var loginRegisterState by remember { mutableStateOf<LoginRegisterState>(LoginRegisterState.Login) }

    Box(
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.Center
    ) {
        Column(
            modifier = Modifier
                .borderRadius(r = 8.px)
                .backgroundColor(getSitePalette().blue)
                .boxShadow(0.px, 0.px, 20.px, 0.px, Color.black),
            verticalArrangement = Arrangement.Center,
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(bottom = 24.px)
                    .backgroundColor(getSitePalette().blue),
                horizontalArrangement = Arrangement.Center
            ) {
                SpanText(
                    modifier = Modifier
                        .fillMaxWidth()
                        .textAlign(TextAlign.Center)
                        .padding(topBottom = 10.px)
                        .fontWeight(FontWeight.Medium)
                        .color(if (loginRegisterState == LoginRegisterState.Login) getSitePalette().blue else getSitePalette().white)
                        .backgroundColor(if (loginRegisterState == LoginRegisterState.Login) getSitePalette().green else getSitePalette().blue)
                        .transition(CSSTransition(property = "background-color", duration = 400.ms))
                        .cursor(Cursor.Pointer)
                        .onClick {
                            loginRegisterState = LoginRegisterState.Login
                        },
                    text = "Login"
                )
                SpanText(
                    modifier = Modifier
                        .fillMaxWidth()
                        .textAlign(TextAlign.Center)
                        .padding(topBottom = 10.px)
                        .fontWeight(FontWeight.Medium)
                        .color(if (loginRegisterState == LoginRegisterState.Register) getSitePalette().blue else getSitePalette().white)
                        .backgroundColor(if (loginRegisterState == LoginRegisterState.Register) getSitePalette().green else getSitePalette().blue)
                        .transition(CSSTransition(property = "background-color", duration = 400.ms))
                        .cursor(Cursor.Pointer)
                        .onClick {
                            loginRegisterState = LoginRegisterState.Register
                        },
                    text = "Register"
                )
            }

            Column(
                modifier = Modifier.padding(leftRight = 50.px, top = 20.px, bottom = 24.px),
                horizontalAlignment = Alignment.CenterHorizontally
            ) {
                Image(
                    modifier = Modifier
                        .margin(bottom = 50.px, top = 40.px)
                        .width(300.px)
                        .cursor(Cursor.Pointer)
                        .onClick {
                            context.router.navigateTo(Screen.HomePage.route)
                        },
                    src = Res.Image.LOGO_DARK,
                    alt = "Logo Image"
                )
                if (loginRegisterState == LoginRegisterState.Register) {
                    Input(
                        type = InputType.Text,
                        attrs = LoginInputStyle.toModifier()
                            .id(Id.nameInput)
                            .margin(bottom = 12.px)
                            .width(350.px)
                            .height(54.px)
                            .padding(leftRight = 20.px)
                            .backgroundColor(Colors.White)
                            .fontFamily(FONT_FAMILY)
                            .fontSize(14.px)
                            .outline(
                                width = 0.px,
                                style = LineStyle.None,
                                color = Colors.Transparent
                            )
                            .toAttrs {
                                attr("placeholder", "Name Surname")
                            }
                    )
                }
                Input(
                    type = InputType.Text,
                    attrs = LoginInputStyle.toModifier()
                        .id(Id.emailInput)
                        .margin(bottom = 12.px)
                        .width(350.px)
                        .height(54.px)
                        .padding(leftRight = 20.px)
                        .backgroundColor(Colors.White)
                        .fontFamily(FONT_FAMILY)
                        .fontSize(14.px)
                        .outline(
                            width = 0.px,
                            style = LineStyle.None,
                            color = Colors.Transparent
                        )
                        .toAttrs {
                            attr("placeholder", "E-Mail")
                        }
                )
                Input(
                    type = InputType.Password,
                    attrs = LoginInputStyle.toModifier()
                        .id(Id.passwordInput)
                        .margin(bottom = 20.px)
                        .width(350.px)
                        .height(54.px)
                        .padding(leftRight = 20.px)
                        .backgroundColor(Colors.White)
                        .fontFamily(FONT_FAMILY)
                        .fontSize(14.px)
                        .outline(
                            width = 0.px,
                            style = LineStyle.None,
                            color = Colors.Transparent
                        )
                        .toAttrs {
                            attr("placeholder", "Password")
                        }
                )

                if (loginRegisterState == LoginRegisterState.Login) {
                    ButtonContent(
                        text = "Login",
                        onClick = {
                            scope.launch {
                                val email = (document.getElementById(Id.emailInput) as HTMLInputElement).value
                                val password = (document.getElementById(Id.passwordInput) as HTMLInputElement).value
                                login(
                                    email = email,
                                    password = password,
                                    onSuccess = { user ->
                                        rememberLoggedIn(true, user)
                                        context.router.navigateTo(Screen.AdminMyPosts.route)
                                    },
                                    onError = { message ->
                                        errorText = message
                                    }
                                )
                            }
                        }
                    )
                } else {
                    ButtonContent(
                        text = "Register",
                        onClick = {
                            scope.launch {
                                val name = (document.getElementById(Id.nameInput) as HTMLInputElement).value
                                val email = (document.getElementById(Id.emailInput) as HTMLInputElement).value
                                val password = (document.getElementById(Id.passwordInput) as HTMLInputElement).value
                                register(
                                    name = name,
                                    email = email,
                                    password = password,
                                    onSuccess = { user ->
                                        rememberLoggedIn(true, user)
                                        context.router.navigateTo(Screen.AdminMyPosts.route)
                                    },
                                    onError = { message ->
                                        errorText = message
                                    }
                                )
                            }
                        }
                    )
                }

                SpanText(
                    modifier = Modifier
                        .width(350.px)
                        .color(Colors.Red)
                        .textAlign(TextAlign.Center)
                        .fontFamily(FONT_FAMILY),
                    text = errorText
                )
            }
        }
    }
}

@Composable
fun ButtonContent(
    text: String,
    onClick: () -> Unit,
) {
    Button(
        modifier = ShadowedGreenButtonVariant.toModifier()
            .margin(bottom = 24.px)
            .width(350.px)
            .height(54.px)
            .backgroundColor(getSitePalette().green)
            .color(getSitePalette().blue)
            .borderRadius(r = 4.px)
            .fontSize(14.px)
            .noBorder()
            .cursor(Cursor.Pointer),
        size = ButtonSize.LG,
        onClick = {
            onClick()
        }
    ) {
        SpanText(
            text = text,
            modifier = Modifier
                .fontSize(1.25.cssRem)
                .lineHeight(2)
                .textAlign(TextAlign.Start)
                .color(getSitePalette().white)
        )
    }
}

private fun rememberLoggedIn(
    remember: Boolean,
    user: User,
) {
    localStorage["remember"] = remember.toString()
    localStorage["userId"] = user.userId
    localStorage["email"] = user.email
    localStorage["name"] = user.name
}

val LoginInputStyle by ComponentStyle {
    base {
        Modifier
            .border(
                width = 2.px,
                style = LineStyle.Solid,
                color = Colors.Transparent
            )
            .transition(CSSTransition(property = "border", duration = 300.ms))
    }
    focus {
        Modifier.border(
            width = 4.px,
            style = LineStyle.Solid,
            color = getSitePalette().green
        )
    }
}