package com.canerture.androidhub.components.widgets

import androidx.compose.runtime.Composable
import com.canerture.androidhub.data.model.Post
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.silk.components.layout.SimpleGrid
import com.varabyte.kobweb.silk.components.layout.numColumns
import com.varabyte.kobweb.silk.components.style.breakpoint.Breakpoint
import com.varabyte.kobweb.silk.components.style.breakpoint.ResponsiveValues
import org.jetbrains.compose.web.css.percent
import org.jetbrains.compose.web.css.px

@Composable
fun PostsView(
    breakpoint: Breakpoint,
    posts: List<Post>,
    numColumns: ResponsiveValues<Int> = numColumns(base = 1, sm = 2, md = 3, lg = 3),
    onClick: (String) -> Unit
) {
    SimpleGrid(
        modifier = Modifier
            .fillMaxWidth(
                if (breakpoint > Breakpoint.MD) 80.percent
                else 90.percent
            )
            .margin(top = 40.px),
        numColumns = numColumns
    ) {
        posts.forEach {
            PostPreview(
                post = it,
                onClick = onClick
            )
        }
    }
}