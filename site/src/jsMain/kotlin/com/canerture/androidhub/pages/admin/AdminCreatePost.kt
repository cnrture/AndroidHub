package com.canerture.androidhub.pages.admin

import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import com.canerture.androidhub.ShadowedGreenButtonVariant
import com.canerture.androidhub.SuccessStyle
import com.canerture.androidhub.components.layouts.AdminPageLayout
import com.canerture.androidhub.components.widgets.ControlPopup
import com.canerture.androidhub.components.widgets.MessagePopup
import com.canerture.androidhub.data.addPost
import com.canerture.androidhub.data.getCategories
import com.canerture.androidhub.data.getPostDetail
import com.canerture.androidhub.data.model.ParentCategory
import com.canerture.androidhub.data.model.SubCategory
import com.canerture.androidhub.getSitePalette
import com.canerture.androidhub.models.ControlStyle
import com.canerture.androidhub.models.EditorControl
import com.canerture.androidhub.navigation.Screen
import com.canerture.androidhub.utils.Constants
import com.canerture.androidhub.utils.Constants.FONT_FAMILY
import com.canerture.androidhub.utils.Constants.SIDE_PANEL_WIDTH
import com.canerture.androidhub.utils.Id
import com.canerture.androidhub.utils.applyControlStyle
import com.canerture.androidhub.utils.applyStyle
import com.canerture.androidhub.utils.getEditor
import com.canerture.androidhub.utils.getSelectedText
import com.canerture.androidhub.utils.noBorder
import com.varabyte.kobweb.browser.file.loadDataUrlFromDisk
import com.varabyte.kobweb.compose.css.CSSTransition
import com.varabyte.kobweb.compose.css.Cursor
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.css.Overflow
import com.varabyte.kobweb.compose.css.Resize
import com.varabyte.kobweb.compose.css.ScrollBehavior
import com.varabyte.kobweb.compose.css.Visibility
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.backgroundColor
import com.varabyte.kobweb.compose.ui.modifiers.border
import com.varabyte.kobweb.compose.ui.modifiers.borderRadius
import com.varabyte.kobweb.compose.ui.modifiers.classNames
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.cursor
import com.varabyte.kobweb.compose.ui.modifiers.disabled
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxHeight
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxSize
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.fontFamily
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
import com.varabyte.kobweb.compose.ui.modifiers.transition
import com.varabyte.kobweb.compose.ui.modifiers.visibility
import com.varabyte.kobweb.compose.ui.thenIf
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.core.Page
import com.varabyte.kobweb.core.rememberPageContext
import com.varabyte.kobweb.silk.components.forms.Checkbox
import com.varabyte.kobweb.silk.components.forms.Switch
import com.varabyte.kobweb.silk.components.forms.SwitchSize
import com.varabyte.kobweb.silk.components.graphics.Image
import com.varabyte.kobweb.silk.components.layout.SimpleGrid
import com.varabyte.kobweb.silk.components.layout.numColumns
import com.varabyte.kobweb.silk.components.style.ComponentStyle
import com.varabyte.kobweb.silk.components.style.breakpoint.Breakpoint
import com.varabyte.kobweb.silk.components.style.hover
import com.varabyte.kobweb.silk.components.style.toModifier
import com.varabyte.kobweb.silk.components.text.SpanText
import com.varabyte.kobweb.silk.theme.breakpoint.rememberBreakpoint
import kotlinx.browser.document
import kotlinx.browser.window
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import org.jetbrains.compose.web.attributes.InputType
import org.jetbrains.compose.web.css.LineStyle
import org.jetbrains.compose.web.css.ms
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.Button
import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.dom.Input
import org.jetbrains.compose.web.dom.Text
import org.jetbrains.compose.web.dom.TextArea
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.HTMLTextAreaElement

data class CreatePageUiState(
    var id: Int = 0,
    var title: String = "",
    var thumbnail: String = "",
    var thumbnailInputDisabled: Boolean = true,
    var content: String = "",
    var categories: List<ParentCategory> = emptyList(),
    var category: String = "Category",
    var buttonText: String = "Create",
    var editorVisibility: Boolean = true,
    var messagePopup: Boolean = false,
    var linkPopup: Boolean = false,
    var imagePopup: Boolean = false
) {
    fun reset() = this.copy(
        id = 0,
        title = "",
        thumbnail = "",
        content = "",
        categories = emptyList(),
        category = "Category",
        buttonText = "Create",
        editorVisibility = true,
        messagePopup = false,
        linkPopup = false,
        imagePopup = false
    )
}

@Page("/admin/create-post")
@Composable
fun AdminCreatePost() {
    val scope = rememberCoroutineScope()
    val context = rememberPageContext()
    val breakpoint = rememberBreakpoint()
    var uiState by remember { mutableStateOf(CreatePageUiState()) }
    var isSuccessMessageVisible by remember { mutableStateOf(false) }

    val hasPostIdParam = remember(key1 = context.route) {
        context.route.params.containsKey(Constants.POST_SHORT_PARAM)
    }

    LaunchedEffect(hasPostIdParam) {
        if (hasPostIdParam) {
            val postShort = context.route.params[Constants.POST_SHORT_PARAM].orEmpty()
            getPostDetail(
                short = postShort,
                onSuccess = { post ->
                    (document.getElementById(Id.editor) as HTMLTextAreaElement).value = post.content
                    uiState = uiState.copy(
                        id = post.id,
                        title = post.title,
                        content = post.content,
                        category = post.category.name,
                        thumbnail = post.thumbnail,
                        buttonText = "Update"
                    )
                },
            )
        } else {
            (document.getElementById(Id.editor) as HTMLTextAreaElement).value = ""
            uiState = uiState.reset()
            getCategories(
                onSuccess = { categoryList ->
                    val parentCategories = categoryList.filter { it.parentCategory == "None" }.map {
                        ParentCategory(
                            id = it.id,
                            name = it.name,
                            short = it.short,
                        )
                    }
                    val subCategories = categoryList.filter { it.parentCategory.isNotEmpty() }
                    subCategories.forEach { subCategory ->
                        val parent = parentCategories.find { subCategory.parentCategory == it.name }
                        parent?.subCategories?.add(
                            SubCategory(
                                id = subCategory.id,
                                name = subCategory.name,
                                short = subCategory.short,
                                parentCategory = subCategory.parentCategory
                            )
                        )
                    }

                    uiState = uiState.copy(categories = parentCategories)
                },
            )
        }
    }

    AdminPageLayout {
        Box(
            modifier = Modifier
                .fillMaxSize()
                .margin(topBottom = 50.px)
                .padding(left = if (breakpoint > Breakpoint.MD) SIDE_PANEL_WIDTH.px else 0.px),
            contentAlignment = Alignment.TopCenter
        ) {
            Column(
                modifier = Modifier
                    .fillMaxSize()
                    .maxWidth(700.px),
                verticalArrangement = Arrangement.Top,
                horizontalAlignment = Alignment.CenterHorizontally
            ) {
                if (isSuccessMessageVisible) {
                    Box(
                        modifier = SuccessStyle.toModifier()
                    ) {
                        Text("Post created successfully!")
                    }
                }
                SimpleGrid(numColumns = numColumns(base = 1, sm = 3)) {
                    uiState.categories.forEach { category ->
                        Box(
                            modifier = Modifier
                                .padding(12.px)
                                .border(
                                    width = 1.px,
                                    style = LineStyle.Solid,
                                    color = getSitePalette().blue
                                )
                                .borderRadius(r = 4.px)
                                .margin(6.px)
                        ) {
                            Column {
                                Checkbox(
                                    modifier = Modifier.margin(
                                        right = 24.px,
                                        bottom = if (breakpoint < Breakpoint.SM) 12.px else 0.px
                                    ),
                                    checked = uiState.category == category.name,
                                    onCheckedChange = { uiState = uiState.copy(category = category.name) },
                                    content = {
                                        SpanText(
                                            modifier = Modifier
                                                .fontSize(14.px)
                                                .fontFamily(FONT_FAMILY)
                                                .color(getSitePalette().blue),
                                            text = category.name
                                        )
                                    }
                                )

                                category.subCategories.forEach { subCategory ->
                                    Checkbox(
                                        modifier = Modifier.margin(
                                            left = 12.px,
                                            right = 24.px,
                                            bottom = if (breakpoint < Breakpoint.SM) 12.px else 0.px
                                        ),
                                        checked = uiState.category == subCategory.name,
                                        onCheckedChange = { uiState = uiState.copy(category = subCategory.name) },
                                        content = {
                                            SpanText(
                                                modifier = Modifier
                                                    .fontSize(14.px)
                                                    .fontFamily(FONT_FAMILY)
                                                    .color(getSitePalette().blue),
                                                text = subCategory.name
                                            )
                                        }
                                    )
                                }
                            }
                        }
                    }
                }
                Input(
                    type = InputType.Text,
                    attrs = Modifier
                        .id(Id.titleInput)
                        .fillMaxWidth()
                        .height(54.px)
                        .margin(topBottom = 12.px)
                        .padding(leftRight = 20.px)
                        .backgroundColor(getSitePalette().white)
                        .borderRadius(r = 4.px)
                        .noBorder()
                        .fontFamily(FONT_FAMILY)
                        .fontSize(16.px)
                        .toAttrs {
                            attr("placeholder", "Title")
                            attr("value", uiState.title)
                        }
                )

                Row(
                    modifier = Modifier.fillMaxWidth().margin(topBottom = 12.px),
                    horizontalArrangement = Arrangement.Start,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Switch(
                        modifier = Modifier.margin(right = 8.px),
                        checked = !uiState.thumbnailInputDisabled,
                        onCheckedChange = { uiState = uiState.copy(thumbnailInputDisabled = !it) },
                        size = SwitchSize.MD
                    )
                    SpanText(
                        modifier = Modifier
                            .fontSize(14.px)
                            .fontFamily(FONT_FAMILY)
                            .color(getSitePalette().blue),
                        text = "Paste an Image URL instead"
                    )
                }
                ThumbnailUploader(
                    thumbnail = uiState.thumbnail,
                    thumbnailInputDisabled = uiState.thumbnailInputDisabled,
                    onThumbnailSelect = { filename, file ->
                        (document.getElementById(Id.thumbnailInput) as HTMLInputElement).value = filename
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
                CreateButton(
                    text = uiState.buttonText,
                    onClick = {
                        uiState = uiState.copy(
                            title = (document.getElementById(Id.titleInput) as HTMLInputElement).value,
                            content = (document.getElementById(Id.editor) as HTMLTextAreaElement).value
                        )

                        if (!uiState.thumbnailInputDisabled) {
                            uiState = uiState.copy(
                                thumbnail = (document.getElementById(Id.thumbnailInput) as HTMLInputElement).value
                            )
                        }

                        if (uiState.title.isNotEmpty() && uiState.content.isNotEmpty()) {
                            scope.launch {
                                if (hasPostIdParam) {
                                    /*val result = updatePost(
                                        Post(
                                            _id = uiState.id,
                                            title = uiState.title,
                                            subtitle = uiState.subtitle,
                                            thumbnail = uiState.thumbnail,
                                            content = uiState.content,
                                            category = uiState.category,
                                            popular = uiState.popular,
                                            main = uiState.main,
                                            sponsored = uiState.sponsored
                                        )
                                    )
                                    if (result) {
                                        context.router.navigateTo(Screen.AdminSuccess.postUpdated())
                                    }*/
                                } else {
                                    addPost(
                                        content = uiState.content,
                                        title = uiState.title,
                                        category = uiState.category,
                                        thumbnail = uiState.thumbnail,
                                        onSuccess = {
                                            scope.launch {
                                                isSuccessMessageVisible = true
                                                delay(2000)
                                                isSuccessMessageVisible = false
                                                context.router.navigateTo(Screen.AdminMyPosts.route)
                                            }
                                        },
                                        onError = {
                                            uiState = uiState.copy(messagePopup = false)
                                        }
                                    )
                                }
                            }
                        } else {
                            scope.launch {
                                uiState = uiState.copy(messagePopup = true)
                                delay(2000)
                                uiState = uiState.copy(messagePopup = false)
                            }
                        }
                    }
                )
            }
        }
    }
    if (uiState.messagePopup) {
        MessagePopup(
            message = "Please fill out all fields.",
            onDialogDismiss = { uiState = uiState.copy(messagePopup = false) }
        )
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
            .height(54.px)
    ) {
        Input(
            type = InputType.Text,
            attrs = Modifier
                .id(Id.thumbnailInput)
                .fillMaxSize()
                .margin(right = 12.px)
                .padding(leftRight = 20.px)
                .backgroundColor(getSitePalette().white)
                .borderRadius(r = 4.px)
                .noBorder()
                .fontFamily(FONT_FAMILY)
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
                .fillMaxHeight()
                .padding(leftRight = 24.px)
                .backgroundColor(if (!thumbnailInputDisabled) getSitePalette().white else getSitePalette().blue)
                .color(if (!thumbnailInputDisabled) getSitePalette().green else Colors.White)
                .borderRadius(r = 4.px)
                .noBorder()
                .fontFamily(FONT_FAMILY)
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
    Box(modifier = Modifier.fillMaxWidth()) {
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
                            document.getElementById(Id.editorPreview)?.innerHTML = getEditor().value
                            js("hljs.highlightAll()") as Unit
                        }
                        .toAttrs()
                ) {
                    SpanText(
                        modifier = Modifier
                            .fontFamily(FONT_FAMILY)
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
                .id(Id.editor)
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
                .fontFamily(FONT_FAMILY)
                .fontSize(16.px)
                .toAttrs {
                    attr("placeholder", "Type here...")
                }
        )
        Div(
            attrs = Modifier
                .id(Id.editorPreview)
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
fun CreateButton(
    text: String,
    onClick: () -> Unit
) {
    Button(
        attrs = ShadowedGreenButtonVariant.toModifier()
            .onClick { onClick() }
            .fillMaxWidth()
            .cursor(Cursor.Pointer)
            .height(54.px)
            .margin(top = 24.px)
            .backgroundColor(getSitePalette().green)
            .color(Colors.White)
            .borderRadius(r = 4.px)
            .noBorder()
            .fontFamily(FONT_FAMILY)
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