package com.canerture.androidhub.pages

import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import com.canerture.androidhub.HeadlineTextStyle
import com.canerture.androidhub.SubheadlineTextStyle
import com.canerture.androidhub.components.layouts.PageLayout
import com.canerture.androidhub.components.widgets.LatestArticleItem
import com.canerture.androidhub.components.widgets.PopularArticleItem
import com.canerture.androidhub.data.getPosts
import com.canerture.androidhub.getHeadlineFontSize
import com.canerture.androidhub.getSitePalette
import com.canerture.androidhub.getSubheadlineFontSize
import com.canerture.androidhub.models.Post
import com.varabyte.kobweb.browser.http.http
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.css.TextAlign
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.foundation.layout.Spacer
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.display
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.fontSize
import com.varabyte.kobweb.compose.ui.modifiers.fontWeight
import com.varabyte.kobweb.compose.ui.modifiers.height
import com.varabyte.kobweb.compose.ui.modifiers.lineHeight
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.setVariable
import com.varabyte.kobweb.compose.ui.modifiers.textAlign
import com.varabyte.kobweb.core.Page
import com.varabyte.kobweb.core.rememberPageContext
import com.varabyte.kobweb.silk.components.forms.Button
import com.varabyte.kobweb.silk.components.forms.ButtonSize
import com.varabyte.kobweb.silk.components.forms.ButtonVars
import com.varabyte.kobweb.silk.components.graphics.Image
import com.varabyte.kobweb.silk.components.layout.SimpleGrid
import com.varabyte.kobweb.silk.components.style.breakpoint.Breakpoint
import com.varabyte.kobweb.silk.components.style.breakpoint.ResponsiveValues
import com.varabyte.kobweb.silk.components.style.toModifier
import com.varabyte.kobweb.silk.components.text.SpanText
import com.varabyte.kobweb.silk.theme.breakpoint.rememberBreakpoint
import kotlinx.browser.window
import org.jetbrains.compose.web.css.DisplayStyle
import org.jetbrains.compose.web.css.cssRem
import org.jetbrains.compose.web.dom.Text

data class PopularArticle(
    val category: String,
    val authorName: String,
    val readTime: String,
    val title: String,
)

@Page
@Composable
fun HomePage() {
    val breakpoint = rememberBreakpoint()

    var postList by remember { mutableStateOf<List<Post>>(emptyList()) }
    var error by remember { mutableStateOf<String?>(null) }

    LaunchedEffect(Unit) {
        val result = window.http.get("https://androidhub.dev/api/get_posts.php").decodeToString()
        println(result)
        getPosts(
            onSuccess = {
                postList = it
            },
            onError = {
                error = it.message.toString()
            }
        )
    }

    val popularList = listOf(
        PopularArticle(
            category = "Category 1",
            authorName = "Author 1",
            readTime = "1 Min",
            title = "Title 1"
        ),
        PopularArticle(
            category = "Category 2",
            authorName = "Author 2",
            readTime = "5 Min",
            title = "Title 2"
        ),
        PopularArticle(
            category = "Category 3",
            authorName = "Author 2",
            readTime = "10 Min",
            title = "Title 3"
        )
    )

    val latestList = listOf(
        PopularArticle(
            category = "Category 1",
            authorName = "Author 1",
            readTime = "1 Min",
            title = "Title 1"
        ),
        PopularArticle(
            category = "Category 2",
            authorName = "Author 2",
            readTime = "5 Min",
            title = "Title 2"
        ),
        PopularArticle(
            category = "Category 3",
            authorName = "Author 2",
            readTime = "10 Min",
            title = "Title 3"
        ),
        PopularArticle(
            category = "Category 3",
            authorName = "Author 2",
            readTime = "10 Min",
            title = "Title 3"
        ),
        PopularArticle(
            category = "Category 3",
            authorName = "Author 2",
            readTime = "10 Min",
            title = "Title 3"
        ),
    )

    PageLayout("Home") {
        AndroidHeroContent(breakpoint)

        if (postList.isNotEmpty()) {
            Text(postList.toString())
        }

        if (error != null) {
            Text("Error: $error")
        }

        PopularPosts(
            list = popularList
        )

        LatestPosts(
            list = latestList
        )
    }
}

@Composable
fun AndroidHeroContent(
    breakpoint: Breakpoint
) {
    Row(
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
                    .color(getSitePalette().blue)
                    .fontSize(getSubheadlineFontSize(breakpoint))
            )
            Spacer()
            val ctx = rememberPageContext()
            Button(
                onClick = {
                    ctx.router.tryRoutingTo("/about")
                },
                modifier = Modifier
                    .margin(top = 1.cssRem)
                    .setVariable(ButtonVars.BackgroundDefaultColor, getSitePalette().green)
                    .setVariable(ButtonVars.BackgroundHoverColor, getSitePalette().blue),
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
    list: List<PopularArticle>
) {
    SpanText(
        text = "Popular Posts",
        modifier = Modifier
            .textAlign(TextAlign.Center)
            .fontWeight(FontWeight.Bold)
            .color(getSitePalette().blue.toRgb())
            .margin(bottom = 1.cssRem)
    )
    Row(
        modifier = Modifier.fillMaxWidth(),
        verticalAlignment = Alignment.CenterVertically
    ) {
        list.forEachIndexed { index, article ->
            PopularArticleItem(
                isLastItem = index == list.lastIndex,
                article = article
            )
        }
    }
}

@Composable
fun LatestPosts(
    list: List<PopularArticle>,
) {
    SpanText(
        text = "Latest Posts",
        modifier = Modifier
            .fillMaxWidth()
            .textAlign(TextAlign.Start)
            .fontWeight(FontWeight.Bold)
            .color(getSitePalette().blue.toRgb())
            .margin(top = 3.cssRem, bottom = 1.cssRem)
    )

    SimpleGrid(
        modifier = Modifier.fillMaxWidth(),
        numColumns = ResponsiveValues(2, 1, 3, 3, 3),
        content = {
            list.forEachIndexed { index, article ->
                LatestArticleItem(
                    isLastItem = index == list.lastIndex,
                    article = article
                )
            }
        }
    )
}
