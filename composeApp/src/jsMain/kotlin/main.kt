import androidx.compose.ui.ExperimentalComposeUiApi
import androidx.compose.ui.window.CanvasBasedWindow
import com.canerture.androidhub.App
import com.canerture.androidhub.di.initKoin
import com.canerture.androidhub.domain.usecase.agents.GetAgentsUseCase
import com.canerture.androidhub.presentation.agents.AgentsScreenModel
import org.jetbrains.skiko.wasm.onWasmReady

@OptIn(ExperimentalComposeUiApi::class)
fun main() {
    val koin = initKoin { }.koin
    val useCase = koin.get<GetAgentsUseCase>()
    val viewModel = AgentsScreenModel(useCase)
    onWasmReady {
        CanvasBasedWindow(canvasElementId = "ComposeTarget") {
            App(viewModel)
        }
    }
}