package com.canerture.androidhub

import com.varabyte.kobweb.compose.ui.graphics.Color
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.silk.init.InitSilk
import com.varabyte.kobweb.silk.init.InitSilkContext
import com.varabyte.kobweb.silk.theme.colors.palette.background
import com.varabyte.kobweb.silk.theme.colors.palette.color

/**
 * @property nearBackground A useful color to apply to a container that should differentiate itself from the background
 *   but just a little.
 */
class SitePalette(
    val green: Color,
    val white: Color,
    val blue: Color,
    val gray: Color,
    val lightGray: Color,
    val grayTransparent: Color,
)

object SitePalettes {
    val palette = SitePalette(
        green = Color.rgb(0x3DDB86),
        white = Colors.White,
        blue = Color.rgb(0x092F42),
        gray = Color.rgb(0xC8C8C8),
        lightGray = Color.rgb(0xF0F0F0),
        grayTransparent = Color.rgba(255f, 255f, 255f, 0.15f),
    )
}

fun getSitePalette(): SitePalette {
    return SitePalettes.palette
}

@InitSilk
fun initTheme(ctx: InitSilkContext) {
    ctx.theme.palettes.light.background = Color.rgb(0xFAF8FF)
    ctx.theme.palettes.light.color = Colors.White
}
