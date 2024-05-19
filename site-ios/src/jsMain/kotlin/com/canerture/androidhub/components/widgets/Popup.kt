package com.canerture.androidhub.components.widgets

import androidx.compose.runtime.Composable
import com.canerture.androidhub.common.Id
import com.canerture.androidhub.common.noBorder
import com.canerture.androidhub.getSitePalette
import com.canerture.androidhub.models.EditorControl
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.backgroundColor
import com.varabyte.kobweb.compose.ui.modifiers.borderRadius
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxSize
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.fontSize
import com.varabyte.kobweb.compose.ui.modifiers.height
import com.varabyte.kobweb.compose.ui.modifiers.id
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.onClick
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.compose.ui.modifiers.position
import com.varabyte.kobweb.compose.ui.modifiers.width
import com.varabyte.kobweb.compose.ui.modifiers.zIndex
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.silk.components.text.SpanText
import kotlinx.browser.document
import org.jetbrains.compose.web.attributes.InputType
import org.jetbrains.compose.web.css.Position
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.css.vh
import org.jetbrains.compose.web.css.vw
import org.jetbrains.compose.web.dom.Button
import org.jetbrains.compose.web.dom.Input
import org.w3c.dom.HTMLInputElement

@Composable
fun ControlPopup(
    editorControl: EditorControl,
    onDialogDismiss: () -> Unit,
    onAddClick: (String, String) -> Unit
) {
    Box(
        modifier = Modifier
            .width(100.vw)
            .height(100.vh)
            .position(Position.Fixed)
            .zIndex(19),
        contentAlignment = Alignment.Center
    ) {
        Box(
            modifier = Modifier
                .fillMaxSize()
                .backgroundColor(getSitePalette().secondary)
                .onClick { onDialogDismiss() }
        )
        Column(
            modifier = Modifier
                .width(500.px)
                .padding(all = 24.px)
                .backgroundColor(Colors.White)
                .borderRadius(r = 4.px)
        ) {
            Input(
                type = InputType.Text,
                attrs = Modifier
                    .id(Id.LINK_HREF_INPUT)
                    .fillMaxWidth()
                    .height(54.px)
                    .padding(left = 20.px)
                    .margin(bottom = 12.px)
                    .fontSize(14.px)
                    .noBorder()
                    .borderRadius(r = 4.px)
                    .backgroundColor(getSitePalette().white)
                    .toAttrs {
                        attr(
                            "placeholder",
                            if (editorControl == EditorControl.Link) "Href" else "Image URL"
                        )
                    }
            )
            Input(
                type = InputType.Text,
                attrs = Modifier
                    .id(Id.LINK_TITLE_INPUT)
                    .fillMaxWidth()
                    .height(54.px)
                    .padding(left = 20.px)
                    .margin(bottom = 20.px)
                    .fontSize(14.px)
                    .noBorder()
                    .borderRadius(r = 4.px)
                    .backgroundColor(getSitePalette().white)
                    .toAttrs {
                        attr(
                            "placeholder",
                            if (editorControl == EditorControl.Link) "Title" else "Description"
                        )
                    }
            )
            Button(
                attrs = Modifier
                    .onClick {
                        val href =
                            (document.getElementById(Id.LINK_HREF_INPUT) as HTMLInputElement).value
                        val title =
                            (document.getElementById(Id.LINK_TITLE_INPUT) as HTMLInputElement).value
                        onAddClick(href, title)
                        onDialogDismiss()
                    }
                    .fillMaxWidth()
                    .height(54.px)
                    .borderRadius(r = 4.px)
                    .backgroundColor(getSitePalette().secondary)
                    .color(Colors.White)
                    .noBorder()
                    .fontSize(14.px)
                    .toAttrs()
            ) {
                SpanText(text = "Add")
            }
        }
    }
}