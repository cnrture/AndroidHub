import androidx.compose.runtime.CompositionLocalProvider
import com.varabyte.kobweb.browser.api
import com.varabyte.kobweb.core.AppGlobals
import com.varabyte.kobweb.navigation.RoutePrefix
import com.varabyte.kobweb.navigation.Router
import com.varabyte.kobweb.navigation.UpdateHistoryMode
import com.varabyte.kobweb.silk.components.animation.registerKeyframes
import com.varabyte.kobweb.silk.defer.renderWithDeferred
import kotlinx.browser.document
import kotlinx.browser.window
import kotlinx.dom.hasClass
import kotlinx.dom.removeClass
import org.jetbrains.compose.web.renderComposable
import org.w3c.dom.EventSource
import org.w3c.dom.EventSourceInit
import org.w3c.dom.MessageEvent
import org.w3c.dom.`get`

private fun forceReloadNow() {
    window.stop()
    window.location.reload()
}

private fun handleServerStatusEvents() {
    val status = document.getElementById("status")!!
    var lastVersion: Int? = null
    var shouldReload = false

    val warningIcon = status.children[0]!!
    val spinnerIcon = status.children[1]!!
    val statusText = status.children[2]!!

    status.addEventListener("transitionend", {
        if (status.hasClass("fade-out")) {
            status.removeClass("fade-out")
            if (shouldReload) {
                forceReloadNow()
            }
        }
    })

    val eventSource = EventSource("/api/kobweb-status", EventSourceInit(true))
    eventSource.addEventListener("version", { evt ->
        val version = (evt as MessageEvent).data.toString().toInt()
        if (lastVersion == null) {
            lastVersion = version
        }
        if (lastVersion != version) {
            lastVersion = version
            if (status.className.isNotEmpty()) {
                shouldReload = true
            } else {
                // Not sure if we can get here but if we can't rely on the status transition
                // to reload we should do it ourselves.
                forceReloadNow()
            }
        }
    })

    eventSource.addEventListener("status", { evt ->
        val values: dynamic = JSON.parse<Any>((evt as MessageEvent).data.toString())
        val text = values.text as String
        val isError = (values.isError as String).toBoolean()
        if (text.isNotBlank()) {
            warningIcon.className = if (isError) "visible" else "hidden"
            spinnerIcon.className = if (isError) "hidden" else "visible"
            statusText.innerHTML = "<i>$text</i>"
            status.className = "fade-in"
        } else {
            if (status.className == "fade-in") {
                status.className = "fade-out"
            }
        }
    })

    eventSource.onerror = { eventSource.close() }
}

public fun main() {
    handleServerStatusEvents()

    window.api.logOnError = true

    RoutePrefix.set("")
    val router = Router()
    com.varabyte.kobweb.core.init.initKobweb(router) { ctx ->
        ctx.router.register("/") { com.canerture.androidhub.pages.HomePage() }
        ctx.router.register("/about") { com.canerture.androidhub.pages.AboutPage() }
        ctx.router.register("/post") { com.canerture.androidhub.pages.PostPage() }

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
        ctx.theme.registerComponentStyle(com.canerture.androidhub.components.layouts.PostPageContentStyle)
        ctx.theme.registerComponentStyle(com.canerture.androidhub.components.sections.FooterStyle)
        ctx.theme.registerComponentStyle(com.canerture.androidhub.components.sections.NavHeaderStyle)
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
