package com.canerture.androidhub.pages

import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import com.canerture.androidhub.HeadlineTextStyle
import com.canerture.androidhub.ShadowedGreenButtonVariant
import com.canerture.androidhub.SubheadlineTextStyle
import com.canerture.androidhub.components.layouts.PageLayout
import com.canerture.androidhub.components.widgets.LatestArticleItem
import com.canerture.androidhub.components.widgets.LoadingIndicator
import com.canerture.androidhub.components.widgets.PopularArticleItem
import com.canerture.androidhub.data.getPosts
import com.canerture.androidhub.data.model.Post
import com.canerture.androidhub.getHeadlineFontSize
import com.canerture.androidhub.getSitePalette
import com.canerture.androidhub.getSubheadlineFontSize
import com.canerture.androidhub.navigation.Screen
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.css.TextAlign
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.foundation.layout.Spacer
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.alignContent
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.display
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.fontSize
import com.varabyte.kobweb.compose.ui.modifiers.fontWeight
import com.varabyte.kobweb.compose.ui.modifiers.height
import com.varabyte.kobweb.compose.ui.modifiers.lineHeight
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.compose.ui.modifiers.setVariable
import com.varabyte.kobweb.compose.ui.modifiers.textAlign
import com.varabyte.kobweb.core.Page
import com.varabyte.kobweb.core.rememberPageContext
import com.varabyte.kobweb.silk.components.forms.Button
import com.varabyte.kobweb.silk.components.forms.ButtonSize
import com.varabyte.kobweb.silk.components.forms.ButtonVars
import com.varabyte.kobweb.silk.components.graphics.Image
import com.varabyte.kobweb.silk.components.icons.fa.FaBoltLightning
import com.varabyte.kobweb.silk.components.layout.SimpleGrid
import com.varabyte.kobweb.silk.components.style.breakpoint.Breakpoint
import com.varabyte.kobweb.silk.components.style.breakpoint.ResponsiveValues
import com.varabyte.kobweb.silk.components.style.toModifier
import com.varabyte.kobweb.silk.components.text.SpanText
import com.varabyte.kobweb.silk.theme.breakpoint.rememberBreakpoint
import org.jetbrains.compose.web.css.AlignContent
import org.jetbrains.compose.web.css.Color
import org.jetbrains.compose.web.css.DisplayStyle
import org.jetbrains.compose.web.css.cssRem
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.Text

sealed interface IndexUIState {
    data object Loading : IndexUIState
    data class Success(
        val popularPosts: List<Post>,
        val latestPosts: List<Post>,
    ) : IndexUIState

    data class Error(val message: String) : IndexUIState
}

@Page
@Composable
fun Index() {
    val breakpoint = rememberBreakpoint()

    var state by remember { mutableStateOf<IndexUIState>(IndexUIState.Loading) }

    LaunchedEffect(Unit) {
        state = IndexUIState.Loading
        getPosts(
            onSuccess = { posts ->
                state = IndexUIState.Success(
                    popularPosts = posts,
                    latestPosts = posts
                )
            },
            onError = { message ->
                state = IndexUIState.Error(message)
            }
        )
    }

    when (state) {
        IndexUIState.Loading -> {
            LoadingIndicator()
        }

        is IndexUIState.Success -> {
            PageLayout("Home") {
                AndroidHeroContent(breakpoint)

                PopularPosts(
                    list = (state as IndexUIState.Success).popularPosts
                )

                LatestPosts(
                    list = (state as IndexUIState.Success).latestPosts
                )
            }
        }

        is IndexUIState.Error -> {
            Text("Error: ${(state as IndexUIState.Error).message}")
        }
    }
}

@Composable
fun AndroidHeroContent(
    breakpoint: Breakpoint
) {
    Row(
        modifier = Modifier.padding(leftRight = 10.cssRem),
        verticalAlignment = Alignment.CenterVertically
    ) {
        Column {
            SpanText(
                text = "Hi \uD83D\uDC4B",
                modifier = HeadlineTextStyle.toModifier()
                    .color(getSitePalette().green)
                    .fontSize(getHeadlineFontSize(breakpoint))
            )
            Spacer()
            SpanText(
                text = "Let’s explore everything about the exciting world of Android together. On this platform, you can delve into the vast opportunities offered by the Android operating system and examine the latest developments in the field. Come on, let’s discover the limitless world of Android together!",
                modifier = SubheadlineTextStyle.toModifier()
                    .color(Color.gray)
                    .fontSize(getSubheadlineFontSize(breakpoint))
                    .lineHeight(2)
                    .padding(right = 2.cssRem)
            )
            Spacer()
            val ctx = rememberPageContext()
            Button(
                onClick = {
                    ctx.router.tryRoutingTo(Screen.AdminLogin.route)
                },
                modifier = ShadowedGreenButtonVariant.toModifier()
                    .margin(top = 2.cssRem)
                    .setVariable(ButtonVars.BackgroundDefaultColor, getSitePalette().green)
                    .setVariable(ButtonVars.BackgroundHoverColor, getSitePalette().green),
                size = ButtonSize.LG,
            ) {
                SpanText(
                    text = "Apply to be an author",
                    modifier = Modifier
                        .fontSize(1.25.cssRem)
                        .lineHeight(2)
                        .textAlign(TextAlign.Start)
                        .color(getSitePalette().white)
                )
            }
        }

        Image("/android-figure.png", "Android Figure", Modifier.height(28.cssRem).display(DisplayStyle.Block))
    }
}

@Composable
fun PopularPosts(
    list: List<Post>
) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(bottom = 2.cssRem, top = 6.cssRem)
            .alignContent(AlignContent.Center),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.Center
    ) {
        FaBoltLightning(
            modifier = Modifier
                .height(20.px)
                .color(getSitePalette().green)
                .margin(right = 0.5.cssRem),
        )
        SpanText(
            text = "Popular Posts",
            modifier = Modifier
                .textAlign(TextAlign.Center)
                .fontWeight(FontWeight.Bold)
                .fontSize(1.25.cssRem)
                .color(getSitePalette().blue.toRgb())
        )
    }
    Row(
        modifier = Modifier.fillMaxWidth(),
        verticalAlignment = Alignment.CenterVertically
    ) {
        list.take(3).forEachIndexed { index, article ->
            PopularArticleItem(
                isLastItem = index == list.lastIndex,
                article = article
            )
        }
    }
}

@Composable
fun LatestPosts(
    list: List<Post>,
) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(bottom = 2.cssRem, top = 6.cssRem, leftRight = 6.cssRem),
        verticalAlignment = Alignment.CenterVertically
    ) {
        FaBoltLightning(
            modifier = Modifier
                .height(20.px)
                .color(getSitePalette().green)
                .margin(right = 0.5.cssRem)
                .alignContent(AlignContent.Start),
        )
        SpanText(
            text = "Latest Posts",
            modifier = Modifier
                .textAlign(TextAlign.Center)
                .fontWeight(FontWeight.Bold)
                .fontSize(1.25.cssRem)
                .color(getSitePalette().blue.toRgb())
        )
    }

    SimpleGrid(
        modifier = Modifier.fillMaxWidth().padding(leftRight = 6.cssRem),
        numColumns = ResponsiveValues(2, 1, 3, 3, 3),
        content = {
            list.forEach { article ->
                LatestArticleItem(
                    article = article
                )
            }
        }
    )
}
