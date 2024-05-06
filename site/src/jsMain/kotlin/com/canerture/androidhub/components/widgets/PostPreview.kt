package com.canerture.androidhub.components.widgets

import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import com.canerture.androidhub.data.model.Post
import com.canerture.androidhub.getSitePalette
import com.canerture.androidhub.utils.parseDateString
import com.varabyte.kobweb.compose.css.CSSTransition
import com.varabyte.kobweb.compose.css.Cursor
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.css.Overflow
import com.varabyte.kobweb.compose.css.TextOverflow
import com.varabyte.kobweb.compose.css.TransitionProperty
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.border
import com.varabyte.kobweb.compose.ui.modifiers.borderRadius
import com.varabyte.kobweb.compose.ui.modifiers.boxShadow
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.cursor
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.fontSize
import com.varabyte.kobweb.compose.ui.modifiers.fontWeight
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.onClick
import com.varabyte.kobweb.compose.ui.modifiers.overflow
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.compose.ui.modifiers.scale
import com.varabyte.kobweb.compose.ui.modifiers.size
import com.varabyte.kobweb.compose.ui.modifiers.textOverflow
import com.varabyte.kobweb.compose.ui.modifiers.transition
import com.varabyte.kobweb.compose.ui.styleModifier
import com.varabyte.kobweb.compose.ui.thenIf
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.silk.components.style.ComponentStyle
import com.varabyte.kobweb.silk.components.style.hover
import com.varabyte.kobweb.silk.components.text.SpanText
import org.jetbrains.compose.web.css.CSSColorValue
import org.jetbrains.compose.web.css.LineStyle
import org.jetbrains.compose.web.css.ms
import org.jetbrains.compose.web.css.percent
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.css.rgba
import org.jetbrains.compose.web.dom.CheckboxInput

@Composable
fun PostPreview(
    modifier: Modifier = Modifier,
    post: Post,
    selectableMode: Boolean = false,
    vertical: Boolean = true,
    titleMaxLines: Int = 2,
    onSelect: (Int) -> Unit = {},
    onDeselect: (Int) -> Unit = {},
    onClick: (String) -> Unit
) {
    var checked by remember(selectableMode) { mutableStateOf(false) }
    if (vertical) {
        Column(
            modifier = Modifier
                .then(modifier)
                .fillMaxWidth()
                .margin(bottom = 24.px)
                .padding(all = if (selectableMode) 10.px else 0.px)
                .borderRadius(r = 4.px)
                .border(
                    width = if (selectableMode) 4.px else 0.px,
                    style = if (selectableMode) LineStyle.Solid else LineStyle.None,
                    color = if (checked) getSitePalette().blue else getSitePalette().white
                )
                .onClick {
                    if (selectableMode) {
                        checked = !checked
                        if (checked) {
                            onSelect(post.id)
                        } else {
                            onDeselect(post.id)
                        }
                    } else {
                        onClick(post.short)
                    }
                }
                .transition(CSSTransition(property = TransitionProperty.All, duration = 200.ms))
                .cursor(Cursor.Pointer)
        ) {
            PostContent(
                post = post,
                selectableMode = selectableMode,
                vertical = vertical,
                titleMaxLines = titleMaxLines,
                titleColor = getSitePalette().blue,
                checked = checked
            )
        }
    } else {
        Row(
            modifier = Modifier
                .then(modifier)
                .onClick { onClick(post.short) }
                .cursor(Cursor.Pointer)
        ) {
            PostContent(
                post = post,
                selectableMode = selectableMode,
                vertical = vertical,
                titleMaxLines = titleMaxLines,
                titleColor = getSitePalette().blue,
                checked = checked
            )
        }
    }
}

@Composable
fun PostContent(
    post: Post,
    selectableMode: Boolean,
    vertical: Boolean,
    titleMaxLines: Int,
    titleColor: CSSColorValue,
    checked: Boolean
) {
    Column(
        modifier = Modifier
            .thenIf(
                condition = !vertical,
                other = Modifier.margin(left = 20.px)
            )
            .padding(all = 12.px)
            .fillMaxWidth()
    ) {
        SpanText(
            modifier = Modifier
                .fontSize(12.px)
                .color(getSitePalette().blue),
            text = post.date.toLong().parseDateString()
        )
        SpanText(
            modifier = Modifier
                .margin(bottom = 12.px)
                .fontSize(20.px)
                .fontWeight(FontWeight.Bold)
                .color(titleColor)
                .textOverflow(TextOverflow.Ellipsis)
                .overflow(Overflow.Hidden)
                .styleModifier {
                    property("display", "-webkit-box")
                    property("-webkit-line-clamp", "$titleMaxLines")
                    property("line-clamp", "$titleMaxLines")
                    property("-webkit-box-orient", "vertical")
                },
            text = post.title
        )
        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically
        ) {
            CategoryChip(category = post.category)
            if (selectableMode) {
                CheckboxInput(
                    checked = checked,
                    attrs = Modifier
                        .size(20.px)
                        .toAttrs()
                )
            }
        }
    }
}

val PostPreviewStyle by ComponentStyle {
    base {
        Modifier
            .scale(100.percent)
            .transition(CSSTransition(property = TransitionProperty.All, duration = 100.ms))
    }
    hover {
        Modifier
            .boxShadow(
                offsetY = 0.px,
                offsetX = 0.px,
                blurRadius = 8.px,
                spreadRadius = 6.px,
                color = rgba(0, 0, 0, 0.06)
            )
            .scale(102.percent)
    }
}

val MainPostPreviewStyle by ComponentStyle {
    base {
        Modifier
            .scale(100.percent)
            .transition(CSSTransition(property = TransitionProperty.All, duration = 100.ms))
    }
    hover {
        Modifier
            .boxShadow(
                offsetY = 0.px,
                offsetX = 0.px,
                blurRadius = 8.px,
                spreadRadius = 6.px,
                color = rgba(0, 162, 255, 0.06)
            )
            .scale(102.percent)
    }
}