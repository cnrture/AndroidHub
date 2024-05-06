package com.canerture.androidhub.components.layouts

import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import com.canerture.androidhub.components.sections.NavigationItems
import com.canerture.androidhub.components.sections.OverflowSidePanel
import com.canerture.androidhub.components.sections.SidePanel
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxSize

@Composable
fun AdminPageLayout(content: @Composable () -> Unit) {
    var overflowOpened by remember { mutableStateOf(false) }
    Box(
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.Center
    ) {
        Column(
            modifier = Modifier
                .fillMaxSize()
        ) {
            SidePanel(onMenuClick = {
                overflowOpened = true
            })
            if (overflowOpened) {
                OverflowSidePanel(
                    onMenuClose = {
                        overflowOpened = false
                    },
                    content = {
                        NavigationItems()
                    }
                )
            }
            content()
        }
    }
}