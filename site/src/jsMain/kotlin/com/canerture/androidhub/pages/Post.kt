package com.canerture.androidhub.pages

import androidx.compose.runtime.Composable
import com.canerture.androidhub.components.layouts.PostPageLayout
import com.varabyte.kobweb.core.Page

@Page
@Composable
fun PostPage() {
    PostPageLayout(
        title = "Post"
    )
}