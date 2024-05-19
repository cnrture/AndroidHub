package com.canerture.androidhub.components.widgets

import androidx.compose.runtime.Composable
import com.canerture.androidhub.ShadowedGrayVariant
import com.canerture.androidhub.common.parseDateString
import com.canerture.androidhub.data.model.Post
import com.canerture.androidhub.getSitePalette
import com.varabyte.kobweb.compose.css.CSSTransition
import com.varabyte.kobweb.compose.css.Cursor
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.css.Overflow
import com.varabyte.kobweb.compose.css.TextOverflow
import com.varabyte.kobweb.compose.css.TransitionProperty
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.backgroundColor
import com.varabyte.kobweb.compose.ui.modifiers.borderRadius
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.cursor
import com.varabyte.kobweb.compose.ui.modifiers.fontSize
import com.varabyte.kobweb.compose.ui.modifiers.fontWeight
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.marginBlock
import com.varabyte.kobweb.compose.ui.modifiers.marginInline
import com.varabyte.kobweb.compose.ui.modifiers.onClick
import com.varabyte.kobweb.compose.ui.modifiers.overflow
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.compose.ui.modifiers.textOverflow
import com.varabyte.kobweb.compose.ui.modifiers.transition
import com.varabyte.kobweb.silk.components.style.toModifier
import com.varabyte.kobweb.silk.components.text.SpanText
import org.jetbrains.compose.web.css.cssRem
import org.jetbrains.compose.web.css.ms
import org.jetbrains.compose.web.css.px

@Composable
fun PostPreview(
    post: Post,
    onClick: (String) -> Unit
) {
    Column(
        modifier = ShadowedGrayVariant.toModifier()
            .marginInline(end = 1.5.cssRem)
            .marginBlock(end = 1.5.cssRem)
            .backgroundColor(getSitePalette().white)
            .borderRadius(r = 10.px)
            .padding(all = 18.px)
            .transition(CSSTransition(property = TransitionProperty.All, duration = 400.ms))
            .cursor(Cursor.Pointer)
            .onClick { onClick(post.short) }
    ) {
        SpanText(
            modifier = Modifier
                .fontSize(12.px)
                .color(getSitePalette().blue),
            text = post.date.toLong().parseDateString()
        )
        SpanText(
            modifier = Modifier
                .weight(1f)
                .margin(topBottom = 12.px)
                .fontSize(20.px)
                .fontWeight(FontWeight.Bold)
                .color(getSitePalette().blue)
                .textOverflow(TextOverflow.Ellipsis)
                .overflow(Overflow.Hidden),
            text = post.title
        )
        CategoryChip(category = post.category)
    }
}