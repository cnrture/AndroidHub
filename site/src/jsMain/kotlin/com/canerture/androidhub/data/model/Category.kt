package com.canerture.androidhub.data.model

import com.github.ajalt.colormath.model.RGBInt
import com.github.ajalt.colormath.parse
import kotlinx.serialization.Serializable
import org.jetbrains.compose.web.css.Color

@Serializable
data class Category(
    val id: Int = 0,
    val name: String = "",
    val short: String = "",
    val color: String = "",
    val parentCategory: String = "",
)

data class ParentCategory(
    val id: Int = 0,
    val name: String = "",
    val short: String = "",
    val color: String = "",
    val subCategories: MutableList<SubCategory> = mutableListOf(),
)

data class SubCategory(
    val id: Int = 0,
    val name: String = "",
    val short: String = "",
    val color: String = "",
    val parentCategory: String = "",
)

fun colorParse(color: String): com.varabyte.kobweb.compose.ui.graphics.Color {
    return com.github.ajalt.colormath.Color.parse("#$color").toComposeColor()
}

fun com.github.ajalt.colormath.Color.toComposeColor(): com.varabyte.kobweb.compose.ui.graphics.Color {
    return if (this is RGBInt) {
        com.varabyte.kobweb.compose.ui.graphics.Color.rgb(argb.toInt())
    } else {
        val (r, g, b, a) = toSRGB()
        com.varabyte.kobweb.compose.ui.graphics.Color.rgba(r, g, b, a)
    }
}