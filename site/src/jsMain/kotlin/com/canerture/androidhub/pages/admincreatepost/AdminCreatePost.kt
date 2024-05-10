package com.canerture.androidhub.pages.admincreatepost

import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import com.canerture.androidhub.ErrorStyle
import com.canerture.androidhub.ShadowedBlueVariant
import com.canerture.androidhub.ShadowedRedVariant
import com.canerture.androidhub.SuccessStyle
import com.canerture.androidhub.common.Constants
import com.canerture.androidhub.common.Constants.SIDE_PANEL_WIDTH
import com.canerture.androidhub.common.Id
import com.canerture.androidhub.common.noBorder
import com.canerture.androidhub.components.layouts.AdminPageLayout
import com.canerture.androidhub.components.widgets.ControlPopup
import com.canerture.androidhub.data.addPost
import com.canerture.androidhub.data.deletePost
import com.canerture.androidhub.data.getCategories
import com.canerture.androidhub.data.getPostDetail
import com.canerture.androidhub.data.updatePost
import com.canerture.androidhub.getSitePalette
import com.canerture.androidhub.models.ControlStyle
import com.canerture.androidhub.models.EditorControl
import com.canerture.androidhub.navigation.Screen
import com.varabyte.kobweb.browser.file.loadDataUrlFromDisk
import com.varabyte.kobweb.compose.css.CSSTransition
import com.varabyte.kobweb.compose.css.Cursor
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.css.Overflow
import com.varabyte.kobweb.compose.css.Resize
import com.varabyte.kobweb.compose.css.ScrollBehavior
import com.varabyte.kobweb.compose.css.TextAlign
import com.varabyte.kobweb.compose.css.TextDecorationLine
import com.varabyte.kobweb.compose.css.Visibility
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.foundation.layout.RowScope
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.backgroundColor
import com.varabyte.kobweb.compose.ui.modifiers.borderRadius
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.cursor
import com.varabyte.kobweb.compose.ui.modifiers.disabled
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxHeight
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxSize
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.fontSize
import com.varabyte.kobweb.compose.ui.modifiers.fontWeight
import com.varabyte.kobweb.compose.ui.modifiers.height
import com.varabyte.kobweb.compose.ui.modifiers.id
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.maxHeight
import com.varabyte.kobweb.compose.ui.modifiers.maxWidth
import com.varabyte.kobweb.compose.ui.modifiers.onClick
import com.varabyte.kobweb.compose.ui.modifiers.onKeyDown
import com.varabyte.kobweb.compose.ui.modifiers.overflow
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.compose.ui.modifiers.resize
import com.varabyte.kobweb.compose.ui.modifiers.scrollBehavior
import com.varabyte.kobweb.compose.ui.modifiers.size
import com.varabyte.kobweb.compose.ui.modifiers.textAlign
import com.varabyte.kobweb.compose.ui.modifiers.textDecorationLine
import com.varabyte.kobweb.compose.ui.modifiers.transition
import com.varabyte.kobweb.compose.ui.modifiers.visibility
import com.varabyte.kobweb.compose.ui.modifiers.width
import com.varabyte.kobweb.compose.ui.modifiers.zIndex
import com.varabyte.kobweb.compose.ui.thenIf
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.core.Page
import com.varabyte.kobweb.core.rememberPageContext
import com.varabyte.kobweb.silk.components.forms.Checkbox
import com.varabyte.kobweb.silk.components.forms.CheckboxSize
import com.varabyte.kobweb.silk.components.forms.Switch
import com.varabyte.kobweb.silk.components.forms.SwitchSize
import com.varabyte.kobweb.silk.components.graphics.Image
import com.varabyte.kobweb.silk.components.layout.SimpleGrid
import com.varabyte.kobweb.silk.components.layout.numColumns
import com.varabyte.kobweb.silk.components.style.ComponentStyle
import com.varabyte.kobweb.silk.components.style.breakpoint.Breakpoint
import com.varabyte.kobweb.silk.components.style.hover
import com.varabyte.kobweb.silk.components.style.toAttrs
import com.varabyte.kobweb.silk.components.style.toModifier
import com.varabyte.kobweb.silk.components.text.SpanText
import com.varabyte.kobweb.silk.theme.breakpoint.rememberBreakpoint
import com.varabyte.kobweb.silk.theme.colors.ColorSchemes
import kotlinx.browser.document
import kotlinx.browser.localStorage
import kotlinx.coroutines.launch
import org.jetbrains.compose.web.attributes.InputType
import org.jetbrains.compose.web.css.Color
import org.jetbrains.compose.web.css.cssRem
import org.jetbrains.compose.web.css.ms
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.Button
import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.dom.Input
import org.jetbrains.compose.web.dom.Text
import org.jetbrains.compose.web.dom.TextArea
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.HTMLTextAreaElement
import org.w3c.dom.get

data class CreatePageUiState(
    var isLoading: Boolean = true,
    var id: Int = 0,
    var title: String = "",
    var thumbnail: String = "",
    var thumbnailInputDisabled: Boolean = true,
    var content: String = "",
    var categories: List<String> = emptyList(),
    var category: String = "Category",
    var status: String = "",
    var buttonText: String = "Create",
    var editorVisibility: Boolean = true,
    var linkPopup: Boolean = false,
    var imagePopup: Boolean = false,
    var successMessageVisibility: Boolean = false,
    var errorMessageVisibility: Boolean = false,
    var message: String = "",
    var statusList: List<String> = listOf("Draft", "Pending", "Published"),
    var deletePopupVisibility: Boolean = false
) {
    fun reset() = this.copy(
        id = 0,
        title = "",
        thumbnail = "",
        content = "",
        categories = emptyList(),
        category = "Category",
        status = "",
        buttonText = "Create",
        editorVisibility = true,
        linkPopup = false,
        imagePopup = false,
        successMessageVisibility = false,
        message = "",
        statusList = listOf("Draft", "Pending", "Published")
    )
}

@Page("/admin/create-post")
@Composable
fun AdminCreatePost() {
    val scope = rememberCoroutineScope()
    val context = rememberPageContext()
    val breakpoint = rememberBreakpoint()
    var uiState by remember { mutableStateOf(CreatePageUiState()) }

    val hasPostIdParam = remember(key1 = context.route) {
        context.route.params.containsKey(Constants.POST_SHORT_PARAM)
    }

    LaunchedEffect(hasPostIdParam) {
        if (hasPostIdParam) {
            val postShort = context.route.params[Constants.POST_SHORT_PARAM].orEmpty()
            getPostDetail(
                short = postShort,
                onSuccess = { post ->
                    (document.getElementById(Id.EDITOR) as HTMLTextAreaElement).value = post.content
                    uiState = uiState.copy(
                        isLoading = false,
                        id = post.id,
                        title = post.title,
                        content = post.content,
                        category = post.category.name,
                        thumbnail = post.thumbnail,
                        buttonText = "Update",
                        status = post.status
                    )
                },
                onError = { uiState = uiState.copy(isLoading = false, errorMessageVisibility = true, message = it) }
            )
        } else {
            (document.getElementById(Id.EDITOR) as HTMLTextAreaElement).value = ""
            uiState = uiState.reset()
        }

        getCategories(
            onSuccess = { categoryList ->
                val categories = categoryList.map { it.name }

                uiState = uiState.copy(categories = categories)
            },
            onError = { uiState = uiState.copy(isLoading = false, errorMessageVisibility = true, message = it) }
        )
    }

    AdminPageLayout {
        Box(
            modifier = Modifier
                .fillMaxSize()
                .padding(left = if (breakpoint > Breakpoint.MD) SIDE_PANEL_WIDTH.px else 0.px),
            contentAlignment = Alignment.TopCenter
        ) {
            Column(
                modifier = Modifier
                    .fillMaxSize()
                    .margin(topBottom = 50.px)
                    .maxWidth(800.px),
                verticalArrangement = Arrangement.Top,
                horizontalAlignment = Alignment.CenterHorizontally
            ) {
                Input(
                    type = InputType.Text,
                    attrs = Modifier
                        .id(Id.TITLE_INPUT)
                        .fillMaxWidth()
                        .height(54.px)
                        .margin(topBottom = 1.5.cssRem)
                        .padding(leftRight = 20.px)
                        .backgroundColor(getSitePalette().white)
                        .borderRadius(r = 4.px)
                        .noBorder()
                        .fontSize(16.px)
                        .toAttrs {
                            attr("placeholder", "Title")
                            attr("value", uiState.title)
                        }
                )

                Row(
                    modifier = Modifier.fillMaxWidth().margin(topBottom = 1.5.cssRem),
                    horizontalArrangement = Arrangement.Start,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Switch(
                        modifier = Modifier.margin(right = 8.px),
                        checked = !uiState.thumbnailInputDisabled,
                        onCheckedChange = {
                            uiState = uiState.copy(thumbnailInputDisabled = !it, thumbnail = "")
                        },
                        size = SwitchSize.LG
                    )
                    SpanText(
                        modifier = Modifier
                            .fontSize(16.px)
                            .color(getSitePalette().blue),
                        text = "Paste an Image URL instead"
                    )
                }

                ThumbnailUploader(
                    thumbnail = uiState.thumbnail,
                    thumbnailInputDisabled = uiState.thumbnailInputDisabled,
                    onThumbnailSelect = { filename, file ->
                        (document.getElementById(Id.THUMBNAIL_INPUT) as HTMLInputElement).value = filename
                        uiState = uiState.copy(thumbnail = file)
                    }
                )

                EditorControls(
                    breakpoint = breakpoint,
                    editorVisibility = uiState.editorVisibility,
                    onEditorVisibilityChange = {
                        uiState = uiState.copy(
                            editorVisibility = !uiState.editorVisibility
                        )
                    },
                    onLinkClick = {
                        uiState = uiState.copy(linkPopup = true)
                    },
                    onImageClick = {
                        uiState = uiState.copy(imagePopup = true)
                    }
                )
                Editor(editorVisibility = uiState.editorVisibility)

                CategoryArea(
                    categoryList = uiState.categories,
                    currentCategory = uiState.category,
                    onCategoryChange = { uiState = uiState.copy(category = it) }
                )

                StatusArea(
                    currentStatus = uiState.status,
                    onStatusChange = { uiState = uiState.copy(status = it) }
                )

                ButtonsArea(
                    buttonText = uiState.buttonText,
                    onCreateClick = {
                        uiState = uiState.copy(
                            title = (document.getElementById(Id.TITLE_INPUT) as HTMLInputElement).value,
                            content = (document.getElementById(Id.EDITOR) as HTMLTextAreaElement).value
                        )

                        if (!uiState.thumbnailInputDisabled) {
                            uiState = uiState.copy(
                                thumbnail = (document.getElementById(Id.THUMBNAIL_INPUT) as HTMLInputElement).value
                            )
                        }

                        scope.launch {
                            uiState = uiState.copy(isLoading = true)
                            if (hasPostIdParam) {
                                updatePost(
                                    id = uiState.id,
                                    content = uiState.content,
                                    title = uiState.title,
                                    category = uiState.category,
                                    thumbnail = uiState.thumbnail,
                                    status = uiState.status,
                                    onSuccess = {
                                        uiState = uiState.copy(
                                            isLoading = false,
                                            successMessageVisibility = true,
                                            message = "Post updated successfully!"
                                        )
                                    },
                                    onError = {
                                        uiState = uiState.copy(
                                            isLoading = false,
                                            errorMessageVisibility = true,
                                            message = it
                                        )
                                    }
                                )
                            } else {
                                addPost(
                                    content = uiState.content,
                                    title = uiState.title,
                                    category = uiState.category,
                                    thumbnail = uiState.thumbnail,
                                    status = uiState.status,
                                    onSuccess = {
                                        uiState = uiState.copy(
                                            isLoading = false,
                                            successMessageVisibility = true,
                                            message = "Post added successfully!"
                                        )
                                    },
                                    onError = {
                                        uiState = uiState.copy(
                                            isLoading = false,
                                            errorMessageVisibility = true,
                                            message = it
                                        )
                                    }
                                )
                            }
                        }
                    },
                    onDeleteClick = {
                        uiState = uiState.copy(deletePopupVisibility = true)
                    }
                )

                if (uiState.successMessageVisibility) {
                    Div(
                        attrs = SuccessStyle.toAttrs()
                    ) {
                        Text(uiState.message)
                    }
                }

                if (uiState.errorMessageVisibility) {
                    Div(
                        attrs = ErrorStyle.toAttrs()
                    ) {
                        Text(uiState.message)
                    }
                }
            }
        }
    }

    if (uiState.linkPopup) {
        ControlPopup(
            editorControl = EditorControl.Link,
            onDialogDismiss = { uiState = uiState.copy(linkPopup = false) },
            onAddClick = { href, title ->
                applyStyle(
                    ControlStyle.Link(
                        selectedText = getSelectedText(),
                        href = href,
                        title = title
                    )
                )
            }
        )
    }

    if (uiState.imagePopup) {
        ControlPopup(
            editorControl = EditorControl.Image,
            onDialogDismiss = { uiState = uiState.copy(imagePopup = false) },
            onAddClick = { imageUrl, description ->
                applyStyle(
                    ControlStyle.Image(
                        selectedText = getSelectedText(),
                        imageUrl = imageUrl,
                        alt = description
                    )
                )
            }
        )
    }

    if (uiState.deletePopupVisibility) {
        DeletePopUp(
            onNoClick = { uiState = uiState.copy(deletePopupVisibility = false) },
            onYesClick = {
                uiState = uiState.copy(
                    isLoading = true,
                    deletePopupVisibility = false,
                )
                scope.launch {
                    deletePost(
                        id = uiState.id,
                        onSuccess = {
                            uiState = uiState.copy(
                                isLoading = false,
                                successMessageVisibility = true,
                                message = "Post deleted successfully!"
                            )
                            context.router.navigateTo(Screen.AdminMyPosts.route)
                        },
                        onError = {
                            uiState = uiState.copy(
                                isLoading = false,
                                errorMessageVisibility = true,
                                message = it
                            )
                        }
                    )
                }
            }
        )
    }
}

@Composable
private fun CategoryArea(
    categoryList: List<String>,
    currentCategory: String,
    onCategoryChange: (String) -> Unit
) {
    SpanText(
        modifier = Modifier
            .margin(top = 2.cssRem, bottom = 1.cssRem)
            .fillMaxWidth()
            .textDecorationLine(TextDecorationLine.Underline)
            .fontSize(18.px)
            .fontWeight(FontWeight.SemiBold)
            .color(getSitePalette().blue),
        text = "Category"
    )

    SimpleGrid(
        modifier = Modifier.fillMaxWidth().margin(topBottom = 12.px),
        numColumns = numColumns(1, 4, 4, 4)
    ) {
        categoryList.forEach { category ->
            Checkbox(
                modifier = Modifier.color(getSitePalette().green).margin(12.px),
                size = CheckboxSize.LG,
                borderColor = getSitePalette().green,
                colorScheme = ColorSchemes.Green,
                checked = currentCategory == category,
                onCheckedChange = { onCategoryChange(category) },
                content = {
                    SpanText(
                        modifier = Modifier
                            .fontSize(16.px)
                            .color(getSitePalette().blue),
                        text = category
                    )
                }
            )
        }
    }
}

@Composable
private fun StatusArea(
    currentStatus: String,
    onStatusChange: (String) -> Unit
) {
    val statusList = listOf("Draft", "Pending", "Published")
    SpanText(
        modifier = Modifier
            .margin(top = 1.cssRem, bottom = 1.cssRem)
            .fillMaxWidth()
            .textDecorationLine(TextDecorationLine.Underline)
            .fontSize(18.px)
            .fontWeight(FontWeight.SemiBold)
            .color(getSitePalette().blue),
        text = "Status"
    )

    Row(
        modifier = Modifier.fillMaxWidth(),
        verticalAlignment = Alignment.CenterVertically
    ) {
        statusList.forEach { status ->
            val isPublishedEnabled = if (status == "Published") {
                localStorage["isAdmin"] == "true"
            } else {
                true
            }
            Checkbox(
                enabled = isPublishedEnabled,
                modifier = Modifier.color(getSitePalette().green).margin(12.px),
                size = CheckboxSize.LG,
                borderColor = getSitePalette().green,
                colorScheme = ColorSchemes.Green,
                checked = currentStatus == status,
                onCheckedChange = { onStatusChange(status) },
                content = {
                    SpanText(
                        modifier = Modifier
                            .fontSize(16.px)
                            .color(getSitePalette().blue),
                        text = status
                    )
                }
            )
        }
    }
}

@Composable
private fun ButtonsArea(
    buttonText: String,
    onCreateClick: () -> Unit,
    onDeleteClick: () -> Unit
) {
    Row(
        modifier = Modifier.fillMaxWidth().margin(top = 24.px)
    ) {
        CreateButton(
            text = buttonText,
            onClick = onCreateClick
        )

        Button(
            attrs = ShadowedRedVariant.toModifier()
                .cursor(Cursor.Pointer)
                .height(54.px)
                .margin(left = 10.px)
                .backgroundColor(Color.red)
                .color(getSitePalette().white)
                .borderRadius(r = 4.px)
                .noBorder()
                .fontSize(16.px)
                .onClick { onDeleteClick() }
                .toAttrs()
        ) {
            SpanText(text = "Delete Post")
        }
    }
}

@Composable
private fun DeletePopUp(
    onNoClick: () -> Unit,
    onYesClick: () -> Unit
) {
    Box(
        modifier = Modifier
            .fillMaxSize()
            .zIndex(1)
            .backgroundColor(getSitePalette().lightGray),
        contentAlignment = Alignment.Center
    ) {
        Column(
            modifier = Modifier
                .width(400.px)
                .padding(20.px)
                .borderRadius(r = 8.px)
                .backgroundColor(getSitePalette().white)
        ) {
            SpanText(
                text = "Are you sure?",
                modifier = Modifier
                    .fillMaxWidth()
                    .textAlign(TextAlign.Center)
                    .fontSize(24.px)
                    .color(getSitePalette().blue)
                    .margin(bottom = 12.px)
            )

            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.Center,
            ) {
                Button(
                    attrs = ShadowedBlueVariant.toModifier()
                        .cursor(Cursor.Pointer)
                        .weight(1f)
                        .height(54.px)
                        .backgroundColor(getSitePalette().blue)
                        .color(getSitePalette().white)
                        .margin(right = 8.px)
                        .borderRadius(r = 4.px)
                        .noBorder()
                        .fontSize(16.px)
                        .onClick { onNoClick() }
                        .toAttrs()
                ) {
                    SpanText(text = "No")
                }

                Button(
                    attrs = ShadowedRedVariant.toModifier()
                        .cursor(Cursor.Pointer)
                        .weight(1f)
                        .height(54.px)
                        .backgroundColor(Color.red)
                        .color(Colors.White)
                        .borderRadius(r = 4.px)
                        .noBorder()
                        .fontSize(16.px)
                        .onClick { onYesClick() }
                        .toAttrs()
                ) {
                    SpanText(text = "Yes")
                }
            }
        }
    }
}

@Composable
fun ThumbnailUploader(
    thumbnail: String,
    thumbnailInputDisabled: Boolean,
    onThumbnailSelect: (String, String) -> Unit
) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .margin(bottom = 20.px)
            .height(if (thumbnail.isNotEmpty() && thumbnailInputDisabled) 200.px else 54.px)
    ) {
        if (thumbnail.isNotEmpty() && thumbnailInputDisabled) {
            Box(
                modifier = Modifier.weight(1),
                contentAlignment = Alignment.Center,
            ) {
                Image(
                    src = thumbnail,
                    modifier = Modifier.height(200.px).margin(right = 12.px)
                )
            }
        } else {
            Input(
                type = InputType.Text,
                attrs = Modifier
                    .id(Id.THUMBNAIL_INPUT)
                    .fillMaxSize()
                    .margin(right = 12.px)
                    .padding(leftRight = 20.px)
                    .backgroundColor(getSitePalette().white)
                    .borderRadius(r = 4.px)
                    .noBorder()
                    .fontSize(16.px)
                    .thenIf(
                        condition = thumbnailInputDisabled,
                        other = Modifier.disabled()
                    )
                    .toAttrs {
                        attr("placeholder", "Thumbnail")
                        attr("value", thumbnail)
                    }
            )
        }
        Button(
            attrs = Modifier
                .onClick {
                    document.loadDataUrlFromDisk(
                        accept = "image/webp, image/gif",
                        onLoad = {
                            onThumbnailSelect(filename, it)
                        }
                    )
                }
                .padding(leftRight = 24.px)
                .height(54.px)
                .backgroundColor(if (!thumbnailInputDisabled) getSitePalette().gray else getSitePalette().blue)
                .color(getSitePalette().white)
                .borderRadius(r = 4.px)
                .noBorder()
                .fontWeight(FontWeight.Medium)
                .fontSize(14.px)
                .thenIf(
                    condition = !thumbnailInputDisabled,
                    other = Modifier.disabled()
                )
                .toAttrs()
        ) {
            SpanText(text = "Upload")
        }
    }
}

@Composable
fun EditorControls(
    breakpoint: Breakpoint,
    editorVisibility: Boolean,
    onLinkClick: () -> Unit,
    onImageClick: () -> Unit,
    onEditorVisibilityChange: () -> Unit
) {
    Box(modifier = Modifier.fillMaxWidth().margin(top = 1.5.cssRem)) {
        SimpleGrid(
            modifier = Modifier.fillMaxWidth(),
            numColumns = numColumns(base = 1, sm = 2)
        ) {
            Row(
                modifier = Modifier
                    .backgroundColor(getSitePalette().white)
                    .borderRadius(r = 4.px)
                    .height(54.px)
            ) {
                EditorControl.entries.forEach {
                    EditorControlView(
                        control = it,
                        onClick = {
                            applyControlStyle(
                                editorControl = it,
                                onLinkClick = onLinkClick,
                                onImageClick = onImageClick
                            )
                        }
                    )
                }
            }
            Box(contentAlignment = Alignment.CenterEnd) {
                Button(
                    attrs = Modifier
                        .height(54.px)
                        .thenIf(
                            condition = breakpoint < Breakpoint.SM,
                            other = Modifier.fillMaxWidth()
                        )
                        .margin(topBottom = if (breakpoint < Breakpoint.SM) 12.px else 0.px)
                        .padding(leftRight = 24.px)
                        .borderRadius(r = 4.px)
                        .backgroundColor(
                            if (editorVisibility) getSitePalette().blue
                            else getSitePalette().green
                        )
                        .color(
                            if (editorVisibility) getSitePalette().white
                            else getSitePalette().white
                        )
                        .noBorder()
                        .onClick {
                            onEditorVisibilityChange()
                            document.getElementById(Id.EDITOR_PREVIEW)?.innerHTML = getEditor().value
                            js("hljs.highlightAll()") as Unit
                        }
                        .toAttrs()
                ) {
                    SpanText(
                        modifier = Modifier
                            .fontWeight(FontWeight.Medium)
                            .fontSize(14.px),
                        text = "Preview"
                    )
                }
            }
        }
    }
}

@Composable
fun EditorControlView(
    control: EditorControl,
    onClick: () -> Unit
) {
    Box(
        modifier = EditorKeyStyle.toModifier()
            .fillMaxHeight()
            .padding(leftRight = 12.px)
            .borderRadius(r = 4.px)
            .cursor(Cursor.Pointer)
            .onClick { onClick() },
        contentAlignment = Alignment.Center
    ) {
        Image(
            modifier = Modifier.size(if (control.name == "Subtitle") 12.px else 24.px),
            src = control.icon,
            alt = "${control.name} Icon"
        )
    }
}

@Composable
fun Editor(editorVisibility: Boolean) {
    Box(modifier = Modifier.fillMaxWidth()) {
        TextArea(
            attrs = Modifier
                .id(Id.EDITOR)
                .fillMaxWidth()
                .height(400.px)
                .maxHeight(400.px)
                .resize(Resize.None)
                .margin(top = 8.px)
                .padding(all = 20.px)
                .backgroundColor(getSitePalette().white)
                .color(getSitePalette().blue)
                .borderRadius(r = 4.px)
                .noBorder()
                .visibility(
                    if (editorVisibility) Visibility.Visible
                    else Visibility.Hidden
                )
                .onKeyDown {
                    if (it.code == "Enter") {
                        applyStyle(
                            controlStyle = ControlStyle.Break(
                                selectedText = getSelectedText()
                            )
                        )
                    }
                }
                .fontSize(16.px)
                .toAttrs {
                    attr("placeholder", "Type here...")
                }
        )
        Div(
            attrs = Modifier
                .id(Id.EDITOR_PREVIEW)
                .fillMaxWidth()
                .height(400.px)
                .maxHeight(400.px)
                .margin(top = 8.px)
                .padding(all = 20.px)
                .color(getSitePalette().blue)
                .backgroundColor(getSitePalette().white)
                .borderRadius(r = 4.px)
                .visibility(
                    if (editorVisibility) Visibility.Hidden
                    else Visibility.Visible
                )
                .overflow(Overflow.Auto)
                .scrollBehavior(ScrollBehavior.Smooth)
                .noBorder()
                .toAttrs()
        )
    }
}

@Composable
fun RowScope.CreateButton(
    text: String,
    onClick: () -> Unit
) {
    Button(
        attrs = ShadowedBlueVariant.toModifier()
            .onClick { onClick() }
            .weight(1f)
            .cursor(Cursor.Pointer)
            .height(54.px)
            .backgroundColor(getSitePalette().blue)
            .color(Colors.White)
            .borderRadius(r = 4.px)
            .noBorder()
            .fontSize(16.px)
            .toAttrs()
    ) {
        SpanText(text = text)
    }
}

val EditorKeyStyle by ComponentStyle {
    base {
        Modifier
            .backgroundColor(Colors.Transparent)
            .transition(CSSTransition(property = "background", duration = 300.ms))
    }
    hover {
        Modifier.backgroundColor(getSitePalette().green)
    }
}