package com.canerture.androidhub.pages.admincreatepost

import com.canerture.androidhub.common.Id
import com.canerture.androidhub.models.ControlStyle
import com.canerture.androidhub.models.EditorControl
import kotlinx.browser.document
import org.w3c.dom.HTMLTextAreaElement

fun getEditor() = document.getElementById(Id.EDITOR) as HTMLTextAreaElement

fun getSelectedIntRange(): IntRange? {
    val editor = getEditor()
    val start = editor.selectionStart
    val end = editor.selectionEnd
    return if (start != null && end != null) {
        IntRange(start, (end - 1))
    } else null
}

fun getSelectedText(): String? {
    val range = getSelectedIntRange()
    return if (range != null) {
        getEditor().value.substring(range)
    } else null
}

fun applyStyle(controlStyle: ControlStyle) {
    val selectedText = getSelectedText()
    val selectedIntRange = getSelectedIntRange()
    if (selectedIntRange != null && selectedText != null) {
        getEditor().value = getEditor().value.replaceRange(
            range = selectedIntRange,
            replacement = controlStyle.style
        )
        document.getElementById(Id.EDITOR_PREVIEW)?.innerHTML = getEditor().value
    }
}

fun applyControlStyle(
    editorControl: EditorControl,
    onLinkClick: () -> Unit,
    onImageClick: () -> Unit
) {
    when (editorControl) {
        EditorControl.Bold -> {
            applyStyle(
                ControlStyle.Bold(
                    selectedText = getSelectedText()
                )
            )
        }

        EditorControl.Italic -> {
            applyStyle(
                ControlStyle.Italic(
                    selectedText = getSelectedText()
                )
            )
        }

        EditorControl.Link -> {
            onLinkClick()
        }

        EditorControl.Title -> {
            applyStyle(
                ControlStyle.Title(
                    selectedText = getSelectedText()
                )
            )
        }

        EditorControl.Subtitle -> {
            applyStyle(
                ControlStyle.Subtitle(
                    selectedText = getSelectedText(),
                )
            )
        }

        EditorControl.Quote -> {
            applyStyle(
                ControlStyle.Quote(
                    selectedText = getSelectedText()
                )
            )
        }

        EditorControl.Code -> {
            applyStyle(
                ControlStyle.Code(
                    selectedText = getSelectedText()
                )
            )
        }

        EditorControl.Image -> {
            onImageClick()
        }
    }
}