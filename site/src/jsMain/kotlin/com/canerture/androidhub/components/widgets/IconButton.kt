package com.canerture.androidhub.components.widgets

import androidx.compose.runtime.Composable
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.setVariable
import com.varabyte.kobweb.silk.components.forms.Button
import com.varabyte.kobweb.silk.components.forms.ButtonVars
import org.jetbrains.compose.web.css.em
import com.canerture.androidhub.CircleButtonVariant
import com.canerture.androidhub.UncoloredButtonVariant

@Composable
fun IconButton(onClick: () -> Unit, content: @Composable () -> Unit) {
    Button(
        onClick = { onClick() },
        Modifier.setVariable(ButtonVars.FontSize, 1.em), // Make button icon size relative to parent container font size
        variant = CircleButtonVariant.then(UncoloredButtonVariant)
    ) {
        content()
    }
}