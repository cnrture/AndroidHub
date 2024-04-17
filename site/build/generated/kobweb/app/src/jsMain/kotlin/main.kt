import androidx.compose.runtime.CompositionLocalProvider
import com.varabyte.kobweb.core.AppGlobals
import com.varabyte.kobweb.navigation.RoutePrefix
import com.varabyte.kobweb.navigation.Router
import com.varabyte.kobweb.navigation.UpdateHistoryMode
import com.varabyte.kobweb.silk.components.animation.registerKeyframes
import com.varabyte.kobweb.silk.defer.renderWithDeferred
import kotlinx.browser.document
import kotlinx.browser.window
import org.jetbrains.compose.web.renderComposable

public fun main() {
    RoutePrefix.set("")
    val router = Router()
    com.varabyte.kobweb.core.init.initKobweb(router) { ctx ->
        ctx.router.register("/") { com.canerture.androidhub.pages.HomePage() }
        ctx.router.register("/about") { com.canerture.androidhub.pages.AboutPage() }

    }
    router.setLegacyRouteRedirectStrategy(Router.LegacyRouteRedirectStrategy.DISALLOW)
    router.addRouteInterceptor {
        path = path.removeSuffix(".html").removeSuffix(".htm")
    }

    com.varabyte.kobweb.silk.init.additionalSilkInitialization = { ctx ->
        com.varabyte.kobweb.silk.init.initSilkWidgets(ctx)
        com.varabyte.kobweb.silk.init.initSilkWidgetsKobweb(ctx)
        ctx.theme.registerComponentStyle(com.canerture.androidhub.HeadlineTextStyle)
        ctx.theme.registerComponentStyle(com.canerture.androidhub.SubheadlineTextStyle)
        ctx.theme.registerComponentStyle(com.canerture.androidhub.components.layouts.MarkdownStyle)
        ctx.theme.registerComponentStyle(com.canerture.androidhub.components.layouts.PageContentStyle)
        ctx.theme.registerComponentStyle(com.canerture.androidhub.components.sections.FooterStyle)
        ctx.theme.registerComponentStyle(com.canerture.androidhub.components.sections.NavHeaderStyle)
        ctx.theme.registerComponentStyle(com.canerture.androidhub.pages.HeroContainerStyle)
        ctx.theme.registerComponentStyle(com.canerture.androidhub.pages.HomeGridStyle)
        ctx.theme.registerComponentStyle(com.canerture.androidhub.pages.HomeGridCellStyle)
        ctx.theme.registerComponentVariants(com.canerture.androidhub.CircleButtonVariant)
        ctx.theme.registerComponentVariants(com.canerture.androidhub.UncoloredButtonVariant)
        ctx.stylesheet.registerKeyframes(com.canerture.androidhub.components.sections.SideMenuSlideInAnim)
        com.canerture.androidhub.initColorMode(ctx)
        com.canerture.androidhub.initSiteStyles(ctx)
        com.canerture.androidhub.initTheme(ctx)
    }

    // For SEO, we may bake the contents of a page in at build time. However, we will
    // overwrite them the first time we render this page with their composable, dynamic
    // versions. Think of this as poor man's hydration :)
    // See also: https://en.wikipedia.org/wiki/Hydration_(web_development)
    router.navigateTo(window.location.href.removePrefix(window.location.origin),
            UpdateHistoryMode.REPLACE)

    val root = document.getElementById("root")!!
    while (root.firstChild != null) { root.removeChild(root.firstChild!!) }

    AppGlobals.initialize(mapOf("title" to "."))
    renderComposable(rootElementId = "root") {
        com.canerture.androidhub.AppEntry {
            router.renderActivePage { renderWithDeferred { it() } }
        }
    }
}
