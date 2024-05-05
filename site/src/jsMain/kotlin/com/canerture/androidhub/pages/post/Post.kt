package com.canerture.androidhub.pages.post

import androidx.compose.runtime.Composable
import com.canerture.androidhub.components.layouts.PostPageLayout
import com.varabyte.kobweb.core.Page

@Page("/posts")
@Composable
fun PostPage() {
    PostPageLayout(
        title = "Post"
    )
}