(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './components-resources-library.js', './compose-multiplatform-core-compose-runtime-runtime.js', './kotlinx-serialization-kotlinx-serialization-core.js', './ktor-ktor-client-core.js', './ktor-ktor-client-content-negotiation.js', './ktor-ktor-http.js', './kotlinx-serialization-kotlinx-serialization-json.js', './ktor-ktor-serialization-kotlinx-json.js', './ktor-ktor-utils.js', './core-koin-core.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-ui-ui-text.js', './compose-multiplatform-core-compose-material3-material3.js', './kotlinx-coroutines-core.js', './kmm-viewmodel-kmm-viewmodel-core.js', './compose-multiplatform-core-compose-foundation-foundation.js', './compose-multiplatform-core-compose-ui-ui.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./components-resources-library.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./ktor-ktor-client-core.js'), require('./ktor-ktor-client-content-negotiation.js'), require('./ktor-ktor-http.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'), require('./ktor-ktor-serialization-kotlinx-json.js'), require('./ktor-ktor-utils.js'), require('./core-koin-core.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-ui-ui-text.js'), require('./compose-multiplatform-core-compose-material3-material3.js'), require('./kotlinx-coroutines-core.js'), require('./kmm-viewmodel-kmm-viewmodel-core.js'), require('./compose-multiplatform-core-compose-foundation-foundation.js'), require('./compose-multiplatform-core-compose-ui-ui.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'AndroidHub:composeApp'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'AndroidHub:composeApp'.");
    }
    if (typeof this['components-resources-library'] === 'undefined') {
      throw new Error("Error loading module 'AndroidHub:composeApp'. Its dependency 'components-resources-library' was not found. Please, check whether 'components-resources-library' is loaded prior to 'AndroidHub:composeApp'.");
    }
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'AndroidHub:composeApp'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'AndroidHub:composeApp'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'AndroidHub:composeApp'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'AndroidHub:composeApp'.");
    }
    if (typeof this['ktor-ktor-client-core'] === 'undefined') {
      throw new Error("Error loading module 'AndroidHub:composeApp'. Its dependency 'ktor-ktor-client-core' was not found. Please, check whether 'ktor-ktor-client-core' is loaded prior to 'AndroidHub:composeApp'.");
    }
    if (typeof this['ktor-ktor-client-content-negotiation'] === 'undefined') {
      throw new Error("Error loading module 'AndroidHub:composeApp'. Its dependency 'ktor-ktor-client-content-negotiation' was not found. Please, check whether 'ktor-ktor-client-content-negotiation' is loaded prior to 'AndroidHub:composeApp'.");
    }
    if (typeof this['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'AndroidHub:composeApp'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'AndroidHub:composeApp'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'AndroidHub:composeApp'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'AndroidHub:composeApp'.");
    }
    if (typeof this['ktor-ktor-serialization-kotlinx-json'] === 'undefined') {
      throw new Error("Error loading module 'AndroidHub:composeApp'. Its dependency 'ktor-ktor-serialization-kotlinx-json' was not found. Please, check whether 'ktor-ktor-serialization-kotlinx-json' is loaded prior to 'AndroidHub:composeApp'.");
    }
    if (typeof this['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'AndroidHub:composeApp'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'AndroidHub:composeApp'.");
    }
    if (typeof this['core-koin-core'] === 'undefined') {
      throw new Error("Error loading module 'AndroidHub:composeApp'. Its dependency 'core-koin-core' was not found. Please, check whether 'core-koin-core' is loaded prior to 'AndroidHub:composeApp'.");
    }
    if (typeof this['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'AndroidHub:composeApp'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'AndroidHub:composeApp'.");
    }
    if (typeof this['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'AndroidHub:composeApp'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'AndroidHub:composeApp'.");
    }
    if (typeof this['compose-multiplatform-core-compose-ui-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'AndroidHub:composeApp'. Its dependency 'compose-multiplatform-core-compose-ui-ui-text' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-text' is loaded prior to 'AndroidHub:composeApp'.");
    }
    if (typeof this['compose-multiplatform-core-compose-material3-material3'] === 'undefined') {
      throw new Error("Error loading module 'AndroidHub:composeApp'. Its dependency 'compose-multiplatform-core-compose-material3-material3' was not found. Please, check whether 'compose-multiplatform-core-compose-material3-material3' is loaded prior to 'AndroidHub:composeApp'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'AndroidHub:composeApp'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'AndroidHub:composeApp'.");
    }
    if (typeof this['kmm-viewmodel-kmm-viewmodel-core'] === 'undefined') {
      throw new Error("Error loading module 'AndroidHub:composeApp'. Its dependency 'kmm-viewmodel-kmm-viewmodel-core' was not found. Please, check whether 'kmm-viewmodel-kmm-viewmodel-core' is loaded prior to 'AndroidHub:composeApp'.");
    }
    if (typeof this['compose-multiplatform-core-compose-foundation-foundation'] === 'undefined') {
      throw new Error("Error loading module 'AndroidHub:composeApp'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation' is loaded prior to 'AndroidHub:composeApp'.");
    }
    if (typeof this['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'AndroidHub:composeApp'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'AndroidHub:composeApp'.");
    }
    root['AndroidHub:composeApp'] = factory(typeof this['AndroidHub:composeApp'] === 'undefined' ? {} : this['AndroidHub:composeApp'], this['kotlin-kotlin-stdlib'], this['components-resources-library'], this['compose-multiplatform-core-compose-runtime-runtime'], this['kotlinx-serialization-kotlinx-serialization-core'], this['ktor-ktor-client-core'], this['ktor-ktor-client-content-negotiation'], this['ktor-ktor-http'], this['kotlinx-serialization-kotlinx-serialization-json'], this['ktor-ktor-serialization-kotlinx-json'], this['ktor-ktor-utils'], this['core-koin-core'], this['compose-multiplatform-core-compose-ui-ui-graphics'], this['compose-multiplatform-core-compose-ui-ui-unit'], this['compose-multiplatform-core-compose-ui-ui-text'], this['compose-multiplatform-core-compose-material3-material3'], this['kotlinx-coroutines-core'], this['kmm-viewmodel-kmm-viewmodel-core'], this['compose-multiplatform-core-compose-foundation-foundation'], this['compose-multiplatform-core-compose-ui-ui']);
  }
}(this, function (_, kotlin_kotlin, kotlin_components_resources_library, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_io_ktor_ktor_client_core, kotlin_io_ktor_ktor_client_content_negotiation, kotlin_io_ktor_ktor_http, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json, kotlin_io_ktor_ktor_serialization_kotlinx_json, kotlin_io_ktor_ktor_utils, kotlin_io_insert_koin_koin_core, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui_text, kotlin_org_jetbrains_compose_material3_material3, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_com_rickclephas_kmm_kmm_viewmodel_core, kotlin_org_jetbrains_compose_foundation_foundation, kotlin_org_jetbrains_compose_ui_ui) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var emptySet = kotlin_kotlin.$_$.w8;
  var ResourceItem = kotlin_components_resources_library.$_$.c;
  var setOf = kotlin_kotlin.$_$.ab;
  var DrawableResource = kotlin_components_resources_library.$_$.b;
  var protoOf = kotlin_kotlin.$_$.cf;
  var objectMeta = kotlin_kotlin.$_$.bf;
  var setMetadataFor = kotlin_kotlin.$_$.df;
  var readResourceBytes = kotlin_components_resources_library.$_$.a;
  var VOID = kotlin_kotlin.$_$.g;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var THROW_CCE = kotlin_kotlin.$_$.ck;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v1;
  var Unit_getInstance = kotlin_kotlin.$_$.v5;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var objectCreate = kotlin_kotlin.$_$.af;
  var getStringHashCode = kotlin_kotlin.$_$.de;
  var classMeta = kotlin_kotlin.$_$.qd;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var hashCode = kotlin_kotlin.$_$.ee;
  var equals = kotlin_kotlin.$_$.ud;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var defaultRequest = kotlin_io_ktor_ktor_client_core.$_$.f;
  var Plugin_getInstance = kotlin_io_ktor_ktor_client_content_negotiation.$_$.a;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.b;
  var contentType = kotlin_io_ktor_ktor_http.$_$.h1;
  var accept = kotlin_io_ktor_ktor_client_core.$_$.h;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var json = kotlin_io_ktor_ktor_serialization_kotlinx_json.$_$.a;
  var HttpClient = kotlin_io_ktor_ktor_client_core.$_$.l;
  var CoroutineImpl = kotlin_kotlin.$_$.zc;
  var HttpRequestBuilder = kotlin_io_ktor_ktor_client_core.$_$.g;
  var url = kotlin_io_ktor_ktor_client_core.$_$.i;
  var Companion_getInstance_0 = kotlin_io_ktor_ktor_http.$_$.f;
  var HttpStatement = kotlin_io_ktor_ktor_client_core.$_$.k;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.kc;
  var JsType_getInstance = kotlin_io_ktor_ktor_utils.$_$.b;
  var getKClass = kotlin_kotlin.$_$.e;
  var List = kotlin_kotlin.$_$.o6;
  var arrayOf = kotlin_kotlin.$_$.rk;
  var createKType = kotlin_kotlin.$_$.b;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.a;
  var typeInfoImpl = kotlin_io_ktor_ktor_utils.$_$.k;
  var Result = kotlin_kotlin.$_$.ak;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.q5;
  var toString = kotlin_kotlin.$_$.rl;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.u1;
  var createFailure = kotlin_kotlin.$_$.vk;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.k3;
  var Exception = kotlin_kotlin.$_$.sj;
  var SuspendFunction0 = kotlin_kotlin.$_$.ad;
  var startKoin = kotlin_io_insert_koin_koin_core.$_$.d;
  var Companion_getInstance_2 = kotlin_io_insert_koin_koin_core.$_$.c;
  var Kind_Singleton_getInstance = kotlin_io_insert_koin_koin_core.$_$.b;
  var emptyList = kotlin_kotlin.$_$.u8;
  var BeanDefinition = kotlin_io_insert_koin_koin_core.$_$.e;
  var SingleInstanceFactory = kotlin_io_insert_koin_koin_core.$_$.h;
  var KoinDefinition = kotlin_io_insert_koin_koin_core.$_$.f;
  var Kind_Factory_getInstance = kotlin_io_insert_koin_koin_core.$_$.a;
  var FactoryInstanceFactory = kotlin_io_insert_koin_koin_core.$_$.g;
  var onOptions = kotlin_io_insert_koin_koin_core.$_$.i;
  var module_0 = kotlin_io_insert_koin_koin_core.$_$.j;
  var listOf = kotlin_kotlin.$_$.fa;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.z;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.p;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.o;
  var first = kotlin_kotlin.$_$.g9;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.s7;
  var interfaceMeta = kotlin_kotlin.$_$.ge;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.o3;
  var _Result___get_isSuccess__impl__sndoy8 = kotlin_kotlin.$_$.n3;
  var collectAsState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var Long = kotlin_kotlin.$_$.vj;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.h4;
  var _Color___init__impl__r6cqi2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h2;
  var _TextUnit___init__impl__r5fj1s = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u2;
  var _TextOverflow___init__impl__obguoe = kotlin_org_jetbrains_compose_ui_ui_text.$_$.b1;
  var Text = kotlin_org_jetbrains_compose_material3_material3.$_$.b;
  var toString_0 = kotlin_kotlin.$_$.hf;
  var println = kotlin_kotlin.$_$.gd;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v1;
  var isInterface = kotlin_kotlin.$_$.pe;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.l3;
  var KMMViewModel = kotlin_com_rickclephas_kmm_kmm_viewmodel_core.$_$.a;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var asStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var get_coroutineScope = kotlin_com_rickclephas_kmm_kmm_viewmodel_core.$_$.b;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n2;
  var SuspendFunction1 = kotlin_kotlin.$_$.bd;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j;
  var Color__hashCode_impl_vjyivj = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p2;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g2;
  var RoundedCornerShape = kotlin_org_jetbrains_compose_foundation_foundation.$_$.d;
  var Shapes = kotlin_org_jetbrains_compose_material3_material3.$_$.a;
  var isSystemInDarkTheme = kotlin_org_jetbrains_compose_foundation_foundation.$_$.k;
  var CompositionLocalProvider = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q1;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l3;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d3;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t1;
  var get_sp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t1;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.h1;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.m1;
  var TextStyle_init_$Create$ = kotlin_org_jetbrains_compose_ui_ui_text.$_$.a1;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var CanvasBasedWindow = kotlin_org_jetbrains_compose_ui_ui.$_$.h3;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Drawable0, 'Drawable0', objectMeta);
  setMetadataFor(drawable, 'drawable', objectMeta);
  setMetadataFor(string, 'string', objectMeta);
  setMetadataFor(font, 'font', objectMeta);
  setMetadataFor(Res, 'Res', objectMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor($serializer, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Ability, 'Ability', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor($serializer_0, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Agent, 'Agent', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
  setMetadataFor(Companion_1, 'Companion', objectMeta, VOID, [SerializerFactory]);
  setMetadataFor($serializer_1, '$serializer', classMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(BaseResponse, 'BaseResponse', classMeta, VOID, VOID, BaseResponse, VOID, {0: Companion_getInstance_8});
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor($serializer_2, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Role, 'Role', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
  setMetadataFor(KtorApi, 'KtorApi', classMeta);
  setMetadataFor($getAgentsCOROUTINE$0, '$getAgentsCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(ValorantService, 'ValorantService', classMeta, KtorApi, VOID, ValorantService, VOID, VOID, [0]);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(ValorantRepositoryImpl$getAgents$slambda, 'ValorantRepositoryImpl$getAgents$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [0]);
  setMetadataFor($safeApiCallCOROUTINE$1, '$safeApiCallCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(ValorantRepository, 'ValorantRepository', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(ValorantRepositoryImpl, 'ValorantRepositoryImpl', classMeta, VOID, [ValorantRepository], VOID, VOID, VOID, [0, 1]);
  setMetadataFor(AgentGroupUI, 'AgentGroupUI', classMeta);
  setMetadataFor(AgentUI, 'AgentUI', classMeta);
  setMetadataFor(AbilityUI, 'AbilityUI', classMeta);
  setMetadataFor(RoleUI, 'RoleUI', classMeta);
  setMetadataFor($invokeCOROUTINE$2, '$invokeCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor(GetAgentsUseCase, 'GetAgentsUseCase', classMeta, VOID, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(AgentsScreenModel$getAgents$slambda, 'AgentsScreenModel$getAgents$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(AgentsScreenModel, 'AgentsScreenModel', classMeta, KMMViewModel);
  setMetadataFor(AgentsState, 'AgentsState', interfaceMeta);
  setMetadataFor(Loading, 'Loading', objectMeta, VOID, [AgentsState]);
  setMetadataFor(Empty, 'Empty', objectMeta, VOID, [AgentsState]);
  setMetadataFor(Content, 'Content', classMeta, VOID, [AgentsState]);
  setMetadataFor(ShowError, 'ShowError', classMeta, VOID, [AgentsState]);
  setMetadataFor(ValorantColors, 'ValorantColors', classMeta);
  setMetadataFor(NavColors, 'NavColors', classMeta);
  setMetadataFor(ValorantTheme_0, 'ValorantTheme', objectMeta);
  setMetadataFor(ValorantTypography, 'ValorantTypography', classMeta, VOID, VOID, ValorantTypography);
  //endregion
  function Drawable0() {
    Drawable0_instance = this;
    var tmp = this;
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    tmp.compose_multiplatform_1 = new DrawableResource('drawable:compose_multiplatform', setOf(new ResourceItem(tmp$ret$0, 'drawable/compose-multiplatform.xml')));
  }
  protoOf(Drawable0).get_compose_multiplatform_u35ml2_k$ = function () {
    return this.compose_multiplatform_1;
  };
  var Drawable0_instance;
  function Drawable0_getInstance() {
    if (Drawable0_instance == null)
      new Drawable0();
    return Drawable0_instance;
  }
  function get_compose_multiplatform(_this__u8e3s4) {
    return Drawable0_getInstance().compose_multiplatform_1;
  }
  function drawable() {
    drawable_instance = this;
  }
  var drawable_instance;
  function drawable_getInstance() {
    if (drawable_instance == null)
      new drawable();
    return drawable_instance;
  }
  function string() {
    string_instance = this;
  }
  var string_instance;
  function string_getInstance() {
    if (string_instance == null)
      new string();
    return string_instance;
  }
  function font() {
    font_instance = this;
  }
  var font_instance;
  function font_getInstance() {
    if (font_instance == null)
      new font();
    return font_instance;
  }
  function Res() {
    Res_instance = this;
  }
  protoOf(Res).readBytes_74yvde_k$ = function (path, $completion) {
    return readResourceBytes(path, $completion);
  };
  var Res_instance;
  function Res_getInstance() {
    if (Res_instance == null)
      new Res();
    return Res_instance;
  }
  var androidhub_composeapp_generated_resources_Res_drawable$stable;
  var androidhub_composeapp_generated_resources_Res_string$stable;
  var androidhub_composeapp_generated_resources_Res_font$stable;
  var androidhub_composeapp_generated_resources_Res$stable;
  function App(viewModel, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(876278437);
    if (isTraceInProgress()) {
      traceEventStart(876278437, $changed, -1, 'com.canerture.androidhub.App (App.kt:12)');
    }
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.canerture.androidhub.App.<anonymous>' call
    var tmp = $composer_0;
    var dispatchReceiver = composableLambda(tmp, 1565823423, true, App$lambda(viewModel));
    // Inline function 'androidx.compose.runtime.remember' call
    var $composer_1 = $composer_0;
    $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
    sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.rememberedValue_4dg93v_k$();
    var tmp_0;
    if (invalid ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'com.canerture.androidhub.App.<anonymous>.<anonymous>' call
      var value = ComposableLambda$invoke$ref(dispatchReceiver);
      $composer_1.updateRememberedValue_l1wh71_k$(value);
      tmp_0 = value;
    } else {
      tmp_0 = it;
    }
    var tmp_1 = tmp_0;
    var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    $composer_1.endReplaceableGroup_ern0ak_k$();
    ValorantTheme(false, tmp0, $composer_0, 48, 1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(App$lambda_0(viewModel, $changed));
    }
  }
  function App$lambda($viewModel) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1565823423, $changed, -1, 'com.canerture.androidhub.App.<anonymous> (App.kt:14)');
        }
        AgentsScreen($viewModel, $composer_0, 8);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function App$lambda_0($viewModel, $$changed) {
    return function ($composer, $force) {
      App($viewModel, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance();
  };
  var Companion_instance;
  function Companion_getInstance_6() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.canerture.androidhub.data.model.Ability', this, 4);
    tmp0_serialDesc.addElement_5pzumi_k$('description', false);
    tmp0_serialDesc.addElement_5pzumi_k$('displayIcon', false);
    tmp0_serialDesc.addElement_5pzumi_k$('displayName', false);
    tmp0_serialDesc.addElement_5pzumi_k$('slot', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  protoOf($serializer).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp8_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp8_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.endStructure_1xqz0n_k$(tmp0_desc);
    return Ability_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer).serialize_v807gp_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 0, StringSerializer_getInstance(), value.description_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 1, StringSerializer_getInstance(), value.displayIcon_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 2, StringSerializer_getInstance(), value.displayName_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 3, StringSerializer_getInstance(), value.slot_1);
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_v807gp_k$(encoder, value instanceof Ability ? value : THROW_CCE());
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function Ability_init_$Init$(seen1, description, displayIcon, displayName, slot, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen1))) {
      throwMissingFieldException(seen1, 15, $serializer_getInstance().descriptor_1);
    }
    $this.description_1 = description;
    $this.displayIcon_1 = displayIcon;
    $this.displayName_1 = displayName;
    $this.slot_1 = slot;
    return $this;
  }
  function Ability_init_$Create$(seen1, description, displayIcon, displayName, slot, serializationConstructorMarker) {
    return Ability_init_$Init$(seen1, description, displayIcon, displayName, slot, serializationConstructorMarker, objectCreate(protoOf(Ability)));
  }
  function Ability(description, displayIcon, displayName, slot) {
    Companion_getInstance_6();
    this.description_1 = description;
    this.displayIcon_1 = displayIcon;
    this.displayName_1 = displayName;
    this.slot_1 = slot;
  }
  protoOf(Ability).get_description_emjre5_k$ = function () {
    return this.description_1;
  };
  protoOf(Ability).get_displayIcon_ssfspa_k$ = function () {
    return this.displayIcon_1;
  };
  protoOf(Ability).get_displayName_sscnb0_k$ = function () {
    return this.displayName_1;
  };
  protoOf(Ability).get_slot_wouds7_k$ = function () {
    return this.slot_1;
  };
  protoOf(Ability).component1_7eebsc_k$ = function () {
    return this.description_1;
  };
  protoOf(Ability).component2_7eebsb_k$ = function () {
    return this.displayIcon_1;
  };
  protoOf(Ability).component3_7eebsa_k$ = function () {
    return this.displayName_1;
  };
  protoOf(Ability).component4_7eebs9_k$ = function () {
    return this.slot_1;
  };
  protoOf(Ability).copy_a532cn_k$ = function (description, displayIcon, displayName, slot) {
    return new Ability(description, displayIcon, displayName, slot);
  };
  protoOf(Ability).copy$default_r7sgod_k$ = function (description, displayIcon, displayName, slot, $super) {
    description = description === VOID ? this.description_1 : description;
    displayIcon = displayIcon === VOID ? this.displayIcon_1 : displayIcon;
    displayName = displayName === VOID ? this.displayName_1 : displayName;
    slot = slot === VOID ? this.slot_1 : slot;
    return $super === VOID ? this.copy_a532cn_k$(description, displayIcon, displayName, slot) : $super.copy_a532cn_k$.call(this, description, displayIcon, displayName, slot);
  };
  protoOf(Ability).toString = function () {
    return 'Ability(description=' + this.description_1 + ', displayIcon=' + this.displayIcon_1 + ', displayName=' + this.displayName_1 + ', slot=' + this.slot_1 + ')';
  };
  protoOf(Ability).hashCode = function () {
    var result = this.description_1 == null ? 0 : getStringHashCode(this.description_1);
    result = imul(result, 31) + (this.displayIcon_1 == null ? 0 : getStringHashCode(this.displayIcon_1)) | 0;
    result = imul(result, 31) + (this.displayName_1 == null ? 0 : getStringHashCode(this.displayName_1)) | 0;
    result = imul(result, 31) + (this.slot_1 == null ? 0 : getStringHashCode(this.slot_1)) | 0;
    return result;
  };
  protoOf(Ability).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Ability))
      return false;
    var tmp0_other_with_cast = other instanceof Ability ? other : THROW_CCE();
    if (!(this.description_1 == tmp0_other_with_cast.description_1))
      return false;
    if (!(this.displayIcon_1 == tmp0_other_with_cast.displayIcon_1))
      return false;
    if (!(this.displayName_1 == tmp0_other_with_cast.displayName_1))
      return false;
    if (!(this.slot_1 == tmp0_other_with_cast.slot_1))
      return false;
    return true;
  };
  var com_canerture_androidhub_data_model_Ability_$serializer$stable;
  var com_canerture_androidhub_data_model_Ability$stable;
  function _get_$childSerializers__r2zwns($this) {
    return $this.$childSerializers_1;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.$childSerializers_1 = [new ArrayListSerializer($serializer_getInstance()), null, null, null, null, null, null, null];
  }
  protoOf(Companion_0).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_0();
  };
  var Companion_instance_0;
  function Companion_getInstance_7() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.canerture.androidhub.data.model.Agent', this, 8);
    tmp0_serialDesc.addElement_5pzumi_k$('abilities', false);
    tmp0_serialDesc.addElement_5pzumi_k$('description', false);
    tmp0_serialDesc.addElement_5pzumi_k$('displayName', false);
    tmp0_serialDesc.addElement_5pzumi_k$('fullPortrait', false);
    tmp0_serialDesc.addElement_5pzumi_k$('fullPortraitV2', false);
    tmp0_serialDesc.addElement_5pzumi_k$('role', false);
    tmp0_serialDesc.addElement_5pzumi_k$('uuid', false);
    tmp0_serialDesc.addElement_5pzumi_k$('background', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_0).childSerializers_5ghqw5_k$ = function () {
    var tmp0_cached = Companion_getInstance_7().$childSerializers_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0]), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_1()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  protoOf($serializer_0).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp13_cached = Companion_getInstance_7().$childSerializers_1;
    if (tmp12_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp12_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, tmp13_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 5, $serializer_getInstance_1(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp12_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp12_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp12_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, tmp13_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 5, $serializer_getInstance_1(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp12_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp12_input.endStructure_1xqz0n_k$(tmp0_desc);
    return Agent_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, null);
  };
  protoOf($serializer_0).serialize_otubxu_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp2_cached = Companion_getInstance_7().$childSerializers_1;
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 0, tmp2_cached[0], value.abilities_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 1, StringSerializer_getInstance(), value.description_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 2, StringSerializer_getInstance(), value.displayName_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 3, StringSerializer_getInstance(), value.fullPortrait_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 4, StringSerializer_getInstance(), value.fullPortraitV2__1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 5, $serializer_getInstance_1(), value.role_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 6, StringSerializer_getInstance(), value.id_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 7, StringSerializer_getInstance(), value.background_1);
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_0).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_otubxu_k$(encoder, value instanceof Agent ? value : THROW_CCE());
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function Agent_init_$Init$(seen1, abilities, description, displayName, fullPortrait, fullPortraitV2, role, id, background, serializationConstructorMarker, $this) {
    if (!(255 === (255 & seen1))) {
      throwMissingFieldException(seen1, 255, $serializer_getInstance_0().descriptor_1);
    }
    $this.abilities_1 = abilities;
    $this.description_1 = description;
    $this.displayName_1 = displayName;
    $this.fullPortrait_1 = fullPortrait;
    $this.fullPortraitV2__1 = fullPortraitV2;
    $this.role_1 = role;
    $this.id_1 = id;
    $this.background_1 = background;
    return $this;
  }
  function Agent_init_$Create$(seen1, abilities, description, displayName, fullPortrait, fullPortraitV2, role, id, background, serializationConstructorMarker) {
    return Agent_init_$Init$(seen1, abilities, description, displayName, fullPortrait, fullPortraitV2, role, id, background, serializationConstructorMarker, objectCreate(protoOf(Agent)));
  }
  function Agent(abilities, description, displayName, fullPortrait, fullPortraitV2, role, id, background) {
    Companion_getInstance_7();
    this.abilities_1 = abilities;
    this.description_1 = description;
    this.displayName_1 = displayName;
    this.fullPortrait_1 = fullPortrait;
    this.fullPortraitV2__1 = fullPortraitV2;
    this.role_1 = role;
    this.id_1 = id;
    this.background_1 = background;
  }
  protoOf(Agent).get_abilities_z38dpd_k$ = function () {
    return this.abilities_1;
  };
  protoOf(Agent).get_description_emjre5_k$ = function () {
    return this.description_1;
  };
  protoOf(Agent).get_displayName_sscnb0_k$ = function () {
    return this.displayName_1;
  };
  protoOf(Agent).get_fullPortrait_1ze7vx_k$ = function () {
    return this.fullPortrait_1;
  };
  protoOf(Agent).get_fullPortraitV2_bzh0fj_k$ = function () {
    return this.fullPortraitV2__1;
  };
  protoOf(Agent).get_role_wotsxr_k$ = function () {
    return this.role_1;
  };
  protoOf(Agent).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(Agent).get_background_stpfw7_k$ = function () {
    return this.background_1;
  };
  protoOf(Agent).component1_7eebsc_k$ = function () {
    return this.abilities_1;
  };
  protoOf(Agent).component2_7eebsb_k$ = function () {
    return this.description_1;
  };
  protoOf(Agent).component3_7eebsa_k$ = function () {
    return this.displayName_1;
  };
  protoOf(Agent).component4_7eebs9_k$ = function () {
    return this.fullPortrait_1;
  };
  protoOf(Agent).component5_7eebs8_k$ = function () {
    return this.fullPortraitV2__1;
  };
  protoOf(Agent).component6_7eebs7_k$ = function () {
    return this.role_1;
  };
  protoOf(Agent).component7_7eebs6_k$ = function () {
    return this.id_1;
  };
  protoOf(Agent).component8_7eebs5_k$ = function () {
    return this.background_1;
  };
  protoOf(Agent).copy_hjfxz7_k$ = function (abilities, description, displayName, fullPortrait, fullPortraitV2, role, id, background) {
    return new Agent(abilities, description, displayName, fullPortrait, fullPortraitV2, role, id, background);
  };
  protoOf(Agent).copy$default_2xe0aw_k$ = function (abilities, description, displayName, fullPortrait, fullPortraitV2, role, id, background, $super) {
    abilities = abilities === VOID ? this.abilities_1 : abilities;
    description = description === VOID ? this.description_1 : description;
    displayName = displayName === VOID ? this.displayName_1 : displayName;
    fullPortrait = fullPortrait === VOID ? this.fullPortrait_1 : fullPortrait;
    fullPortraitV2 = fullPortraitV2 === VOID ? this.fullPortraitV2__1 : fullPortraitV2;
    role = role === VOID ? this.role_1 : role;
    id = id === VOID ? this.id_1 : id;
    background = background === VOID ? this.background_1 : background;
    return $super === VOID ? this.copy_hjfxz7_k$(abilities, description, displayName, fullPortrait, fullPortraitV2, role, id, background) : $super.copy_hjfxz7_k$.call(this, abilities, description, displayName, fullPortrait, fullPortraitV2, role, id, background);
  };
  protoOf(Agent).toString = function () {
    return 'Agent(abilities=' + this.abilities_1 + ', description=' + this.description_1 + ', displayName=' + this.displayName_1 + ', fullPortrait=' + this.fullPortrait_1 + ', fullPortraitV2=' + this.fullPortraitV2__1 + ', role=' + this.role_1 + ', id=' + this.id_1 + ', background=' + this.background_1 + ')';
  };
  protoOf(Agent).hashCode = function () {
    var result = this.abilities_1 == null ? 0 : hashCode(this.abilities_1);
    result = imul(result, 31) + (this.description_1 == null ? 0 : getStringHashCode(this.description_1)) | 0;
    result = imul(result, 31) + (this.displayName_1 == null ? 0 : getStringHashCode(this.displayName_1)) | 0;
    result = imul(result, 31) + (this.fullPortrait_1 == null ? 0 : getStringHashCode(this.fullPortrait_1)) | 0;
    result = imul(result, 31) + (this.fullPortraitV2__1 == null ? 0 : getStringHashCode(this.fullPortraitV2__1)) | 0;
    result = imul(result, 31) + (this.role_1 == null ? 0 : this.role_1.hashCode()) | 0;
    result = imul(result, 31) + (this.id_1 == null ? 0 : getStringHashCode(this.id_1)) | 0;
    result = imul(result, 31) + (this.background_1 == null ? 0 : getStringHashCode(this.background_1)) | 0;
    return result;
  };
  protoOf(Agent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Agent))
      return false;
    var tmp0_other_with_cast = other instanceof Agent ? other : THROW_CCE();
    if (!equals(this.abilities_1, tmp0_other_with_cast.abilities_1))
      return false;
    if (!(this.description_1 == tmp0_other_with_cast.description_1))
      return false;
    if (!(this.displayName_1 == tmp0_other_with_cast.displayName_1))
      return false;
    if (!(this.fullPortrait_1 == tmp0_other_with_cast.fullPortrait_1))
      return false;
    if (!(this.fullPortraitV2__1 == tmp0_other_with_cast.fullPortraitV2__1))
      return false;
    if (!equals(this.role_1, tmp0_other_with_cast.role_1))
      return false;
    if (!(this.id_1 == tmp0_other_with_cast.id_1))
      return false;
    if (!(this.background_1 == tmp0_other_with_cast.background_1))
      return false;
    return true;
  };
  var com_canerture_androidhub_data_model_Agent_$serializer$stable;
  var com_canerture_androidhub_data_model_Agent$stable;
  function _get_typeSerial0__3fdbgx($this) {
    return $this.typeSerial0__1;
  }
  function $serializer_init_$Init$(typeSerial0, $this) {
    $serializer_1.call($this);
    $this.typeSerial0__1 = typeSerial0;
    return $this;
  }
  function $serializer_init_$Create$(typeSerial0) {
    return $serializer_init_$Init$(typeSerial0, objectCreate(protoOf($serializer_1)));
  }
  function Companion_1() {
    Companion_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.canerture.androidhub.data.model.BaseResponse', null, 3);
    tmp0_serialDesc.addElement_5pzumi_k$('status', true);
    tmp0_serialDesc.addElement_5pzumi_k$('error', true);
    tmp0_serialDesc.addElement_5pzumi_k$('data', true);
    this.$cachedDescriptor_1 = tmp0_serialDesc;
  }
  protoOf(Companion_1).serializer_ftvo48_k$ = function (typeSerial0) {
    return $serializer_init_$Create$(typeSerial0);
  };
  protoOf(Companion_1).serializer_nv39qc_k$ = function (typeParamsSerializers) {
    return this.serializer_ftvo48_k$(typeParamsSerializers[0]);
  };
  protoOf(Companion_1).get_$cachedDescriptor_3xtnpw_k$ = function () {
    return this.$cachedDescriptor_1;
  };
  var Companion_instance_1;
  function Companion_getInstance_8() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function $serializer_1() {
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.canerture.androidhub.data.model.BaseResponse', this, 3);
    tmp0_serialDesc.addElement_5pzumi_k$('status', true);
    tmp0_serialDesc.addElement_5pzumi_k$('error', true);
    tmp0_serialDesc.addElement_5pzumi_k$('data', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_1).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(this.typeSerial0__1)];
  };
  protoOf($serializer_1).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp7_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp7_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, this.typeSerial0__1, tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, this.typeSerial0__1, tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.endStructure_1xqz0n_k$(tmp0_desc);
    return BaseResponse_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_1).serialize_dce1rz_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 0) ? true : !(value.status_1 == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 0, IntSerializer_getInstance(), value.status_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 1) ? true : !(value.error_1 == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 1, StringSerializer_getInstance(), value.error_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 2) ? true : !(value.data_1 == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 2, this.typeSerial0__1, value.data_1);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_1).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_dce1rz_k$(encoder, value instanceof BaseResponse ? value : THROW_CCE());
  };
  protoOf($serializer_1).typeParametersSerializers_fr94fx_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.typeSerial0__1];
  };
  function BaseResponse_init_$Init$(seen1, status, error, data, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen1))) {
      throwMissingFieldException(seen1, 0, Companion_getInstance_8().$cachedDescriptor_1);
    }
    if (0 === (seen1 & 1))
      $this.status_1 = null;
    else
      $this.status_1 = status;
    if (0 === (seen1 & 2))
      $this.error_1 = null;
    else
      $this.error_1 = error;
    if (0 === (seen1 & 4))
      $this.data_1 = null;
    else
      $this.data_1 = data;
    return $this;
  }
  function BaseResponse_init_$Create$(seen1, status, error, data, serializationConstructorMarker) {
    return BaseResponse_init_$Init$(seen1, status, error, data, serializationConstructorMarker, objectCreate(protoOf(BaseResponse)));
  }
  function BaseResponse(status, error, data) {
    Companion_getInstance_8();
    status = status === VOID ? null : status;
    error = error === VOID ? null : error;
    data = data === VOID ? null : data;
    this.status_1 = status;
    this.error_1 = error;
    this.data_1 = data;
  }
  protoOf(BaseResponse).get_status_jnf6d7_k$ = function () {
    return this.status_1;
  };
  protoOf(BaseResponse).get_error_iqzvfj_k$ = function () {
    return this.error_1;
  };
  protoOf(BaseResponse).get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  var com_canerture_androidhub_data_model_BaseResponse_$serializer$stable;
  var com_canerture_androidhub_data_model_BaseResponse$stable;
  function Companion_2() {
    Companion_instance_2 = this;
  }
  protoOf(Companion_2).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_1();
  };
  var Companion_instance_2;
  function Companion_getInstance_9() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function $serializer_2() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.canerture.androidhub.data.model.Role', this, 2);
    tmp0_serialDesc.addElement_5pzumi_k$('displayIcon', false);
    tmp0_serialDesc.addElement_5pzumi_k$('displayName', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_2).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  protoOf($serializer_2).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp6_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp6_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.endStructure_1xqz0n_k$(tmp0_desc);
    return Role_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_2).serialize_qmrdab_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 0, StringSerializer_getInstance(), value.displayIcon_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 1, StringSerializer_getInstance(), value.displayName_1);
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_2).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_qmrdab_k$(encoder, value instanceof Role ? value : THROW_CCE());
  };
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null)
      new $serializer_2();
    return $serializer_instance_1;
  }
  function Role_init_$Init$(seen1, displayIcon, displayName, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_1().descriptor_1);
    }
    $this.displayIcon_1 = displayIcon;
    $this.displayName_1 = displayName;
    return $this;
  }
  function Role_init_$Create$(seen1, displayIcon, displayName, serializationConstructorMarker) {
    return Role_init_$Init$(seen1, displayIcon, displayName, serializationConstructorMarker, objectCreate(protoOf(Role)));
  }
  function Role(displayIcon, displayName) {
    Companion_getInstance_9();
    this.displayIcon_1 = displayIcon;
    this.displayName_1 = displayName;
  }
  protoOf(Role).get_displayIcon_ssfspa_k$ = function () {
    return this.displayIcon_1;
  };
  protoOf(Role).get_displayName_sscnb0_k$ = function () {
    return this.displayName_1;
  };
  protoOf(Role).component1_7eebsc_k$ = function () {
    return this.displayIcon_1;
  };
  protoOf(Role).component2_7eebsb_k$ = function () {
    return this.displayName_1;
  };
  protoOf(Role).copy_jhsqnb_k$ = function (displayIcon, displayName) {
    return new Role(displayIcon, displayName);
  };
  protoOf(Role).copy$default_wdy097_k$ = function (displayIcon, displayName, $super) {
    displayIcon = displayIcon === VOID ? this.displayIcon_1 : displayIcon;
    displayName = displayName === VOID ? this.displayName_1 : displayName;
    return $super === VOID ? this.copy_jhsqnb_k$(displayIcon, displayName) : $super.copy_jhsqnb_k$.call(this, displayIcon, displayName);
  };
  protoOf(Role).toString = function () {
    return 'Role(displayIcon=' + this.displayIcon_1 + ', displayName=' + this.displayName_1 + ')';
  };
  protoOf(Role).hashCode = function () {
    var result = this.displayIcon_1 == null ? 0 : getStringHashCode(this.displayIcon_1);
    result = imul(result, 31) + (this.displayName_1 == null ? 0 : getStringHashCode(this.displayName_1)) | 0;
    return result;
  };
  protoOf(Role).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Role))
      return false;
    var tmp0_other_with_cast = other instanceof Role ? other : THROW_CCE();
    if (!(this.displayIcon_1 == tmp0_other_with_cast.displayIcon_1))
      return false;
    if (!(this.displayName_1 == tmp0_other_with_cast.displayName_1))
      return false;
    return true;
  };
  var com_canerture_androidhub_data_model_Role_$serializer$stable;
  var com_canerture_androidhub_data_model_Role$stable;
  function KtorApi$client$lambda($this$HttpClient) {
    defaultRequest($this$HttpClient, KtorApi$client$lambda$lambda);
    var tmp = Plugin_getInstance();
    $this$HttpClient.install_6m4asv_k$(tmp, KtorApi$client$lambda$lambda_0);
    return Unit_getInstance();
  }
  function KtorApi$client$lambda$lambda($this$defaultRequest) {
    contentType($this$defaultRequest, Application_getInstance().get_Json_wo4ci9_k$());
    accept($this$defaultRequest, Application_getInstance().get_Json_wo4ci9_k$());
    return Unit_getInstance();
  }
  function KtorApi$client$lambda$lambda_0($this$install) {
    json($this$install, Json(VOID, KtorApi$client$lambda$lambda$lambda));
    return Unit_getInstance();
  }
  function KtorApi$client$lambda$lambda$lambda($this$Json) {
    $this$Json.set_prettyPrint_v2gnff_k$(true);
    $this$Json.set_ignoreUnknownKeys_pzvtne_k$(true);
    return Unit_getInstance();
  }
  function KtorApi() {
    var tmp = this;
    tmp.client_1 = HttpClient(KtorApi$client$lambda);
  }
  protoOf(KtorApi).get_client_byfnx0_k$ = function () {
    return this.client_1;
  };
  var com_canerture_androidhub_data_remote_KtorApi$stable;
  function _get_baseUrl__6ouw37($this) {
    return $this.baseUrl_1;
  }
  function _get_agents__k8y4e5($this) {
    return $this.agents_1;
  }
  function $getAgentsCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($getAgentsCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_0 = this;
            tmp_0.this0__1 = this._this__u8e3s4__1.get_client_byfnx0_k$();
            var tmp_1 = this;
            tmp_1.urlString1__1 = this._this__u8e3s4__1.agents_1 + '?isPlayableCharacter=true';
            var tmp_2 = this;
            tmp_2.this2__1 = this.this0__1;
            var tmp_3 = this;
            tmp_3.this3__1 = this.this2__1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.urlString1__1);
            tmp_4.builder4__1 = this_0;
            this.builder4__1.set_method_hoo95u_k$(Companion_getInstance_0().get_Get_18jsxf_k$());
            var tmp_5 = this;
            tmp_5.this5__1 = this.this3__1;
            var tmp_6 = this;
            tmp_6.builder6__1 = this.builder4__1;
            this.set_state_rjd8d0_k$(1);
            suspendResult = (new HttpStatement(this.builder6__1, this.this5__1)).execute_rsj18j_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.this7__1 = suspendResult;
            this.set_state_rjd8d0_k$(2);
            var tmp_7 = this.this7__1.get_call_wojxrb_k$();
            var tmp_8 = JsType_getInstance();
            var tmp_9 = getKClass(BaseResponse);
            var tmp_10;
            try {
              tmp_10 = createKType(getKClass(BaseResponse), arrayOf([createInvariantKTypeProjection(createKType(getKClass(List), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Agent), arrayOf([]), false))]), false))]), false);
            } catch ($p) {
              var tmp_11;
              if ($p instanceof Error) {
                var cause = $p;
                tmp_11 = null;
              } else {
                throw $p;
              }
              tmp_10 = tmp_11;
            }

            suspendResult = tmp_7.bodyNullable_wn8z59_k$(typeInfoImpl(tmp_8, tmp_9, tmp_10), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult instanceof BaseResponse ? suspendResult : THROW_CCE();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function ValorantService() {
    KtorApi.call(this);
    this.baseUrl_1 = 'https://valorant-api.com/';
    this.agents_1 = this.baseUrl_1 + 'v1/agents';
  }
  protoOf(ValorantService).getAgents_9sc4ry_k$ = function ($completion) {
    var tmp = new $getAgentsCOROUTINE$0(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  var com_canerture_androidhub_data_remote_ValorantService$stable;
  function _get_SUCCESS__e8l4su($this) {
    return $this.SUCCESS_1;
  }
  function _get_valorantService__srxum9($this) {
    return $this.valorantService_1;
  }
  function safeApiCall($this, call, $completion) {
    var tmp = new $safeApiCallCOROUTINE$1($this, call, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    var tmp_0 = tmp.doResume_5yljmg_k$();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.SUCCESS_1 = 200;
  }
  var Companion_instance_3;
  function Companion_getInstance_10() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function ValorantRepositoryImpl$getAgents$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ValorantRepositoryImpl$getAgents$slambda).invoke_h2p0v6_k$ = function ($completion) {
    var tmp = this.create_d196fn_k$($completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ValorantRepositoryImpl$getAgents$slambda).invoke_ib42db_k$ = function ($completion) {
    return this.invoke_h2p0v6_k$($completion);
  };
  protoOf(ValorantRepositoryImpl$getAgents$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1.valorantService_1.getAgents_9sc4ry_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(ValorantRepositoryImpl$getAgents$slambda).create_d196fn_k$ = function (completion) {
    return new ValorantRepositoryImpl$getAgents$slambda(this.this$0__1, completion);
  };
  function ValorantRepositoryImpl$getAgents$slambda_0(this$0, resultContinuation) {
    var i = new ValorantRepositoryImpl$getAgents$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.invoke_h2p0v6_k$($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $safeApiCallCOROUTINE$1(_this__u8e3s4, call, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.call_1 = call;
  }
  protoOf($safeApiCallCOROUTINE$1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.call_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var response = suspendResult;
            var tmp_0 = this;
            var tmp_1;
            if (response.get_status_jnf6d7_k$() === 200) {
              Companion_getInstance_1();
              var value = response.get_data_wokkxf_k$();
              tmp_1 = _Result___init__impl__xyqfz8(value);
            } else {
              Companion_getInstance_1();
              var exception = Exception_init_$Create$(toString(response.get_error_iqzvfj_k$()));
              tmp_1 = _Result___init__impl__xyqfz8(createFailure(exception));
            }

            tmp_0.TRY_RESULT0__1 = tmp_1;
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_2 = this.get_exception_x0n6w6_k$();
            if (tmp_2 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp_3 = this;
              Companion_getInstance_1();
              tmp_3.TRY_RESULT0__1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_fex74n_k$(3);
            return new Result(this.TRY_RESULT0__1);
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  function ValorantRepositoryImpl(valorantService) {
    Companion_getInstance_10();
    this.valorantService_1 = valorantService;
  }
  protoOf(ValorantRepositoryImpl).getAgents_3npu1e_k$ = function ($completion) {
    var tmp = safeApiCall(this, ValorantRepositoryImpl$getAgents$slambda_0(this, null), $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      return tmp;
    return tmp;
  };
  var com_canerture_androidhub_data_repository_ValorantRepositoryImpl$stable;
  function get_dataModule() {
    _init_properties_Modules_kt__cej1lh();
    return dataModule;
  }
  var dataModule;
  function get_useCaseModule() {
    _init_properties_Modules_kt__cej1lh();
    return useCaseModule;
  }
  var useCaseModule;
  function get_sharedModules() {
    _init_properties_Modules_kt__cej1lh();
    return sharedModules;
  }
  var sharedModules;
  function initKoin(appDeclaration) {
    _init_properties_Modules_kt__cej1lh();
    return startKoin(initKoin$lambda(appDeclaration));
  }
  function initKoin_0() {
    _init_properties_Modules_kt__cej1lh();
    return initKoin(initKoin$lambda_0);
  }
  function dataModule$lambda($this$module) {
    _init_properties_Modules_kt__cej1lh();
    // Inline function 'org.koin.core.module.Module.single' call
    // Inline function 'org.koin.core.module._singleInstanceFactory' call
    var definition = dataModule$lambda$lambda;
    var scopeQualifier = Companion_getInstance_2().get_rootScopeQualifier_6qrm0v_k$();
    // Inline function 'org.koin.core.definition._createDefinition' call
    var kind = Kind_Singleton_getInstance();
    var secondaryTypes = emptyList();
    var def = new BeanDefinition(scopeQualifier, getKClass(ValorantService), null, definition, kind, secondaryTypes);
    var factory = new SingleInstanceFactory(def);
    $this$module.indexPrimaryType_bfm8x4_k$(factory);
    if (false ? true : $this$module.get__createdAtStart_6om28z_k$()) {
      $this$module.prepareForCreationAtStart_txiz47_k$(factory);
    }
    new KoinDefinition($this$module, factory);
    // Inline function 'org.koin.core.module.Module.single' call
    // Inline function 'org.koin.core.module._singleInstanceFactory' call
    var definition_0 = dataModule$lambda$lambda_0;
    var scopeQualifier_0 = Companion_getInstance_2().get_rootScopeQualifier_6qrm0v_k$();
    // Inline function 'org.koin.core.definition._createDefinition' call
    var kind_0 = Kind_Singleton_getInstance();
    var secondaryTypes_0 = emptyList();
    var def_0 = new BeanDefinition(scopeQualifier_0, getKClass(ValorantRepository), null, definition_0, kind_0, secondaryTypes_0);
    var factory_0 = new SingleInstanceFactory(def_0);
    $this$module.indexPrimaryType_bfm8x4_k$(factory_0);
    if (false ? true : $this$module.get__createdAtStart_6om28z_k$()) {
      $this$module.prepareForCreationAtStart_txiz47_k$(factory_0);
    }
    new KoinDefinition($this$module, factory_0);
    return Unit_getInstance();
  }
  function dataModule$lambda$lambda($this$single, it) {
    _init_properties_Modules_kt__cej1lh();
    return new ValorantService();
  }
  function dataModule$lambda$lambda_0($this$single, it) {
    _init_properties_Modules_kt__cej1lh();
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp$ret$0 = $this$single.get_80ko8d_k$(getKClass(ValorantService), null, null);
    return new ValorantRepositoryImpl(tmp$ret$0);
  }
  function useCaseModule$lambda($this$module) {
    _init_properties_Modules_kt__cej1lh();
    // Inline function 'org.koin.core.module.dsl.factoryOf' call
    // Inline function 'org.koin.core.module.Module.factory' call
    // Inline function 'org.koin.core.module.Module.factory' call
    var definition = useCaseModule$lambda$lambda;
    // Inline function 'org.koin.core.module._factoryInstanceFactory' call
    var scopeQualifier = Companion_getInstance_2().get_rootScopeQualifier_6qrm0v_k$();
    // Inline function 'org.koin.core.definition._createDefinition' call
    var kind = Kind_Factory_getInstance();
    var secondaryTypes = emptyList();
    var def = new BeanDefinition(scopeQualifier, getKClass(GetAgentsUseCase), null, definition, kind, secondaryTypes);
    var factory = new FactoryInstanceFactory(def);
    $this$module.indexPrimaryType_bfm8x4_k$(factory);
    var tmp$ret$3 = new KoinDefinition($this$module, factory);
    onOptions(tmp$ret$3, null);
    return Unit_getInstance();
  }
  function useCaseModule$lambda$lambda($this$factory, it) {
    _init_properties_Modules_kt__cej1lh();
    // Inline function 'org.koin.core.module.dsl.new' call
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp$ret$0 = $this$factory.get_80ko8d_k$(getKClass(ValorantRepository), null, null);
    return new GetAgentsUseCase(tmp$ret$0);
  }
  function initKoin$lambda($appDeclaration) {
    return function ($this$startKoin) {
      $this$startKoin.modules_r3qc1t_k$(get_sharedModules());
      $appDeclaration($this$startKoin);
      return Unit_getInstance();
    };
  }
  function initKoin$lambda_0($this$initKoin) {
    _init_properties_Modules_kt__cej1lh();
    return Unit_getInstance();
  }
  var properties_initialized_Modules_kt_u8e0yf;
  function _init_properties_Modules_kt__cej1lh() {
    if (!properties_initialized_Modules_kt_u8e0yf) {
      properties_initialized_Modules_kt_u8e0yf = true;
      dataModule = module_0(VOID, dataModule$lambda);
      useCaseModule = module_0(VOID, useCaseModule$lambda);
      sharedModules = listOf([get_useCaseModule(), get_dataModule()]);
    }
  }
  function mapToAgentRoleUI(_this__u8e3s4) {
    // Inline function 'kotlin.collections.orEmpty' call
    var tmp0_elvis_lhs = _this__u8e3s4 == null ? null : mapToAgentUI(_this__u8e3s4);
    var agents = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.groupBy' call
    // Inline function 'kotlin.collections.groupByTo' call
    var destination = LinkedHashMap_init_$Create$();
    var tmp0_iterator = agents.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.canerture.androidhub.domain.mapper.mapToAgentRoleUI.<anonymous>' call
      var key = element.get_role_wotsxr_k$().get_displayName_sscnb0_k$();
      // Inline function 'kotlin.collections.getOrPut' call
      var value = destination.get_wei43m_k$(key);
      var tmp;
      if (value == null) {
        // Inline function 'kotlin.collections.groupByTo.<anonymous>' call
        var answer = ArrayList_init_$Create$();
        destination.put_4fpzoq_k$(key, answer);
        tmp = answer;
      } else {
        tmp = value;
      }
      var list = tmp;
      list.add_utx5q5_k$(element);
    }
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$_0(destination.get_size_woubt6_k$());
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_0 = destination.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'com.canerture.androidhub.domain.mapper.mapToAgentRoleUI.<anonymous>' call
      var tmp$ret$7 = new AgentGroupUI(item.get_key_18j28a_k$(), first(item.get_value_j01efc_k$()).get_role_wotsxr_k$().get_displayIcon_ssfspa_k$(), item.get_value_j01efc_k$());
      destination_0.add_utx5q5_k$(tmp$ret$7);
    }
    return destination_0;
  }
  function mapToAgentUI(_this__u8e3s4) {
    // Inline function 'kotlin.collections.orEmpty' call
    var tmp;
    if (_this__u8e3s4 == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(_this__u8e3s4, 10));
      var tmp0_iterator = _this__u8e3s4.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        // Inline function 'com.canerture.androidhub.domain.mapper.mapToAgentUI.<anonymous>' call
        var tmp_0 = mapToAbilityUI(item.get_abilities_z38dpd_k$());
        // Inline function 'kotlin.text.orEmpty' call
        var tmp0_elvis_lhs = item.get_description_emjre5_k$();
        var tmp_1 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        // Inline function 'kotlin.text.uppercase' call
        // Inline function 'kotlin.text.orEmpty' call
        var tmp0_elvis_lhs_0 = item.get_displayName_sscnb0_k$();
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_2 = (tmp0_elvis_lhs_0 == null ? '' : tmp0_elvis_lhs_0).toUpperCase();
        var tmp0_elvis_lhs_1 = item.get_fullPortraitV2_bzh0fj_k$();
        var tmp_3;
        if (tmp0_elvis_lhs_1 == null) {
          // Inline function 'kotlin.text.orEmpty' call
          var tmp0_elvis_lhs_2 = item.get_fullPortrait_1ze7vx_k$();
          tmp_3 = tmp0_elvis_lhs_2 == null ? '' : tmp0_elvis_lhs_2;
        } else {
          tmp_3 = tmp0_elvis_lhs_1;
        }
        var tmp_4 = tmp_3;
        var tmp_5 = mapToRoleUI(item.get_role_wotsxr_k$());
        // Inline function 'kotlin.text.orEmpty' call
        var tmp0_elvis_lhs_3 = item.get_id_kntnx8_k$();
        var tmp_6 = tmp0_elvis_lhs_3 == null ? '' : tmp0_elvis_lhs_3;
        // Inline function 'kotlin.text.orEmpty' call
        var tmp0_elvis_lhs_4 = item.get_background_stpfw7_k$();
        var tmp$ret$6 = tmp0_elvis_lhs_4 == null ? '' : tmp0_elvis_lhs_4;
        var tmp$ret$7 = new AgentUI(tmp_0, tmp_1, tmp_2, tmp_4, tmp_5, tmp_6, tmp$ret$6);
        destination.add_utx5q5_k$(tmp$ret$7);
      }
      tmp = destination;
    }
    var tmp0_elvis_lhs_5 = tmp;
    return tmp0_elvis_lhs_5 == null ? emptyList() : tmp0_elvis_lhs_5;
  }
  function mapToAgentUI_0(_this__u8e3s4) {
    var tmp = mapToAbilityUI(_this__u8e3s4 == null ? null : _this__u8e3s4.get_abilities_z38dpd_k$());
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = _this__u8e3s4 == null ? null : _this__u8e3s4.get_description_emjre5_k$();
    var tmp_0 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    // Inline function 'kotlin.text.uppercase' call
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs_0 = _this__u8e3s4 == null ? null : _this__u8e3s4.get_displayName_sscnb0_k$();
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = (tmp0_elvis_lhs_0 == null ? '' : tmp0_elvis_lhs_0).toUpperCase();
    var tmp5_elvis_lhs = _this__u8e3s4 == null ? null : _this__u8e3s4.get_fullPortraitV2_bzh0fj_k$();
    var tmp_2;
    if (tmp5_elvis_lhs == null) {
      // Inline function 'kotlin.text.orEmpty' call
      var tmp0_elvis_lhs_1 = _this__u8e3s4 == null ? null : _this__u8e3s4.get_fullPortrait_1ze7vx_k$();
      tmp_2 = tmp0_elvis_lhs_1 == null ? '' : tmp0_elvis_lhs_1;
    } else {
      tmp_2 = tmp5_elvis_lhs;
    }
    var tmp_3 = tmp_2;
    var tmp_4 = mapToRoleUI(_this__u8e3s4 == null ? null : _this__u8e3s4.get_role_wotsxr_k$());
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs_2 = _this__u8e3s4 == null ? null : _this__u8e3s4.get_id_kntnx8_k$();
    var tmp_5 = tmp0_elvis_lhs_2 == null ? '' : tmp0_elvis_lhs_2;
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs_3 = _this__u8e3s4 == null ? null : _this__u8e3s4.get_background_stpfw7_k$();
    var tmp$ret$6 = tmp0_elvis_lhs_3 == null ? '' : tmp0_elvis_lhs_3;
    return new AgentUI(tmp, tmp_0, tmp_1, tmp_3, tmp_4, tmp_5, tmp$ret$6);
  }
  function mapToRoleUI(_this__u8e3s4) {
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = _this__u8e3s4 == null ? null : _this__u8e3s4.get_displayIcon_ssfspa_k$();
    var tmp = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs_0 = _this__u8e3s4 == null ? null : _this__u8e3s4.get_displayName_sscnb0_k$();
    var tmp$ret$1 = tmp0_elvis_lhs_0 == null ? '' : tmp0_elvis_lhs_0;
    return new RoleUI(tmp, tmp$ret$1);
  }
  function mapToAbilityUI(_this__u8e3s4) {
    // Inline function 'kotlin.collections.orEmpty' call
    var tmp;
    if (_this__u8e3s4 == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(_this__u8e3s4, 10));
      var tmp0_iterator = _this__u8e3s4.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        // Inline function 'com.canerture.androidhub.domain.mapper.mapToAbilityUI.<anonymous>' call
        // Inline function 'kotlin.text.orEmpty' call
        var tmp0_elvis_lhs = item.get_description_emjre5_k$();
        var tmp_0 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        // Inline function 'kotlin.text.orEmpty' call
        var tmp0_elvis_lhs_0 = item.get_displayIcon_ssfspa_k$();
        var tmp_1 = tmp0_elvis_lhs_0 == null ? '' : tmp0_elvis_lhs_0;
        // Inline function 'kotlin.text.orEmpty' call
        var tmp0_elvis_lhs_1 = item.get_displayName_sscnb0_k$();
        var tmp$ret$2 = tmp0_elvis_lhs_1 == null ? '' : tmp0_elvis_lhs_1;
        var tmp$ret$3 = new AbilityUI(tmp_0, tmp_1, tmp$ret$2);
        destination.add_utx5q5_k$(tmp$ret$3);
      }
      tmp = destination;
    }
    var tmp0_elvis_lhs_2 = tmp;
    return tmp0_elvis_lhs_2 == null ? emptyList() : tmp0_elvis_lhs_2;
  }
  function AgentGroupUI(role, roleIcon, agents) {
    this.role_1 = role;
    this.roleIcon_1 = roleIcon;
    this.agents_1 = agents;
  }
  protoOf(AgentGroupUI).get_role_wotsxr_k$ = function () {
    return this.role_1;
  };
  protoOf(AgentGroupUI).get_roleIcon_yt95g8_k$ = function () {
    return this.roleIcon_1;
  };
  protoOf(AgentGroupUI).get_agents_axj313_k$ = function () {
    return this.agents_1;
  };
  protoOf(AgentGroupUI).component1_7eebsc_k$ = function () {
    return this.role_1;
  };
  protoOf(AgentGroupUI).component2_7eebsb_k$ = function () {
    return this.roleIcon_1;
  };
  protoOf(AgentGroupUI).component3_7eebsa_k$ = function () {
    return this.agents_1;
  };
  protoOf(AgentGroupUI).copy_a2ubs6_k$ = function (role, roleIcon, agents) {
    return new AgentGroupUI(role, roleIcon, agents);
  };
  protoOf(AgentGroupUI).copy$default_uxp3tl_k$ = function (role, roleIcon, agents, $super) {
    role = role === VOID ? this.role_1 : role;
    roleIcon = roleIcon === VOID ? this.roleIcon_1 : roleIcon;
    agents = agents === VOID ? this.agents_1 : agents;
    return $super === VOID ? this.copy_a2ubs6_k$(role, roleIcon, agents) : $super.copy_a2ubs6_k$.call(this, role, roleIcon, agents);
  };
  protoOf(AgentGroupUI).toString = function () {
    return 'AgentGroupUI(role=' + this.role_1 + ', roleIcon=' + this.roleIcon_1 + ', agents=' + this.agents_1 + ')';
  };
  protoOf(AgentGroupUI).hashCode = function () {
    var result = getStringHashCode(this.role_1);
    result = imul(result, 31) + getStringHashCode(this.roleIcon_1) | 0;
    result = imul(result, 31) + hashCode(this.agents_1) | 0;
    return result;
  };
  protoOf(AgentGroupUI).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AgentGroupUI))
      return false;
    var tmp0_other_with_cast = other instanceof AgentGroupUI ? other : THROW_CCE();
    if (!(this.role_1 === tmp0_other_with_cast.role_1))
      return false;
    if (!(this.roleIcon_1 === tmp0_other_with_cast.roleIcon_1))
      return false;
    if (!equals(this.agents_1, tmp0_other_with_cast.agents_1))
      return false;
    return true;
  };
  function AgentUI(abilities, description, displayName, fullPortrait, role, id, background) {
    this.abilities_1 = abilities;
    this.description_1 = description;
    this.displayName_1 = displayName;
    this.fullPortrait_1 = fullPortrait;
    this.role_1 = role;
    this.id_1 = id;
    this.background_1 = background;
  }
  protoOf(AgentUI).get_abilities_z38dpd_k$ = function () {
    return this.abilities_1;
  };
  protoOf(AgentUI).get_description_emjre5_k$ = function () {
    return this.description_1;
  };
  protoOf(AgentUI).get_displayName_sscnb0_k$ = function () {
    return this.displayName_1;
  };
  protoOf(AgentUI).get_fullPortrait_1ze7vx_k$ = function () {
    return this.fullPortrait_1;
  };
  protoOf(AgentUI).get_role_wotsxr_k$ = function () {
    return this.role_1;
  };
  protoOf(AgentUI).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(AgentUI).get_background_stpfw7_k$ = function () {
    return this.background_1;
  };
  protoOf(AgentUI).component1_7eebsc_k$ = function () {
    return this.abilities_1;
  };
  protoOf(AgentUI).component2_7eebsb_k$ = function () {
    return this.description_1;
  };
  protoOf(AgentUI).component3_7eebsa_k$ = function () {
    return this.displayName_1;
  };
  protoOf(AgentUI).component4_7eebs9_k$ = function () {
    return this.fullPortrait_1;
  };
  protoOf(AgentUI).component5_7eebs8_k$ = function () {
    return this.role_1;
  };
  protoOf(AgentUI).component6_7eebs7_k$ = function () {
    return this.id_1;
  };
  protoOf(AgentUI).component7_7eebs6_k$ = function () {
    return this.background_1;
  };
  protoOf(AgentUI).copy_ze16u7_k$ = function (abilities, description, displayName, fullPortrait, role, id, background) {
    return new AgentUI(abilities, description, displayName, fullPortrait, role, id, background);
  };
  protoOf(AgentUI).copy$default_s8vuqj_k$ = function (abilities, description, displayName, fullPortrait, role, id, background, $super) {
    abilities = abilities === VOID ? this.abilities_1 : abilities;
    description = description === VOID ? this.description_1 : description;
    displayName = displayName === VOID ? this.displayName_1 : displayName;
    fullPortrait = fullPortrait === VOID ? this.fullPortrait_1 : fullPortrait;
    role = role === VOID ? this.role_1 : role;
    id = id === VOID ? this.id_1 : id;
    background = background === VOID ? this.background_1 : background;
    return $super === VOID ? this.copy_ze16u7_k$(abilities, description, displayName, fullPortrait, role, id, background) : $super.copy_ze16u7_k$.call(this, abilities, description, displayName, fullPortrait, role, id, background);
  };
  protoOf(AgentUI).toString = function () {
    return 'AgentUI(abilities=' + this.abilities_1 + ', description=' + this.description_1 + ', displayName=' + this.displayName_1 + ', fullPortrait=' + this.fullPortrait_1 + ', role=' + this.role_1 + ', id=' + this.id_1 + ', background=' + this.background_1 + ')';
  };
  protoOf(AgentUI).hashCode = function () {
    var result = hashCode(this.abilities_1);
    result = imul(result, 31) + getStringHashCode(this.description_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.displayName_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.fullPortrait_1) | 0;
    result = imul(result, 31) + this.role_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.id_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.background_1) | 0;
    return result;
  };
  protoOf(AgentUI).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AgentUI))
      return false;
    var tmp0_other_with_cast = other instanceof AgentUI ? other : THROW_CCE();
    if (!equals(this.abilities_1, tmp0_other_with_cast.abilities_1))
      return false;
    if (!(this.description_1 === tmp0_other_with_cast.description_1))
      return false;
    if (!(this.displayName_1 === tmp0_other_with_cast.displayName_1))
      return false;
    if (!(this.fullPortrait_1 === tmp0_other_with_cast.fullPortrait_1))
      return false;
    if (!this.role_1.equals(tmp0_other_with_cast.role_1))
      return false;
    if (!(this.id_1 === tmp0_other_with_cast.id_1))
      return false;
    if (!(this.background_1 === tmp0_other_with_cast.background_1))
      return false;
    return true;
  };
  function AbilityUI(description, displayIcon, displayName) {
    this.description_1 = description;
    this.displayIcon_1 = displayIcon;
    this.displayName_1 = displayName;
  }
  protoOf(AbilityUI).get_description_emjre5_k$ = function () {
    return this.description_1;
  };
  protoOf(AbilityUI).get_displayIcon_ssfspa_k$ = function () {
    return this.displayIcon_1;
  };
  protoOf(AbilityUI).get_displayName_sscnb0_k$ = function () {
    return this.displayName_1;
  };
  protoOf(AbilityUI).component1_7eebsc_k$ = function () {
    return this.description_1;
  };
  protoOf(AbilityUI).component2_7eebsb_k$ = function () {
    return this.displayIcon_1;
  };
  protoOf(AbilityUI).component3_7eebsa_k$ = function () {
    return this.displayName_1;
  };
  protoOf(AbilityUI).copy_nc7k0r_k$ = function (description, displayIcon, displayName) {
    return new AbilityUI(description, displayIcon, displayName);
  };
  protoOf(AbilityUI).copy$default_fk9hs_k$ = function (description, displayIcon, displayName, $super) {
    description = description === VOID ? this.description_1 : description;
    displayIcon = displayIcon === VOID ? this.displayIcon_1 : displayIcon;
    displayName = displayName === VOID ? this.displayName_1 : displayName;
    return $super === VOID ? this.copy_nc7k0r_k$(description, displayIcon, displayName) : $super.copy_nc7k0r_k$.call(this, description, displayIcon, displayName);
  };
  protoOf(AbilityUI).toString = function () {
    return 'AbilityUI(description=' + this.description_1 + ', displayIcon=' + this.displayIcon_1 + ', displayName=' + this.displayName_1 + ')';
  };
  protoOf(AbilityUI).hashCode = function () {
    var result = getStringHashCode(this.description_1);
    result = imul(result, 31) + getStringHashCode(this.displayIcon_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.displayName_1) | 0;
    return result;
  };
  protoOf(AbilityUI).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AbilityUI))
      return false;
    var tmp0_other_with_cast = other instanceof AbilityUI ? other : THROW_CCE();
    if (!(this.description_1 === tmp0_other_with_cast.description_1))
      return false;
    if (!(this.displayIcon_1 === tmp0_other_with_cast.displayIcon_1))
      return false;
    if (!(this.displayName_1 === tmp0_other_with_cast.displayName_1))
      return false;
    return true;
  };
  function RoleUI(displayIcon, displayName) {
    this.displayIcon_1 = displayIcon;
    this.displayName_1 = displayName;
  }
  protoOf(RoleUI).get_displayIcon_ssfspa_k$ = function () {
    return this.displayIcon_1;
  };
  protoOf(RoleUI).get_displayName_sscnb0_k$ = function () {
    return this.displayName_1;
  };
  protoOf(RoleUI).component1_7eebsc_k$ = function () {
    return this.displayIcon_1;
  };
  protoOf(RoleUI).component2_7eebsb_k$ = function () {
    return this.displayName_1;
  };
  protoOf(RoleUI).copy_plwnsl_k$ = function (displayIcon, displayName) {
    return new RoleUI(displayIcon, displayName);
  };
  protoOf(RoleUI).copy$default_5gy63f_k$ = function (displayIcon, displayName, $super) {
    displayIcon = displayIcon === VOID ? this.displayIcon_1 : displayIcon;
    displayName = displayName === VOID ? this.displayName_1 : displayName;
    return $super === VOID ? this.copy_plwnsl_k$(displayIcon, displayName) : $super.copy_plwnsl_k$.call(this, displayIcon, displayName);
  };
  protoOf(RoleUI).toString = function () {
    return 'RoleUI(displayIcon=' + this.displayIcon_1 + ', displayName=' + this.displayName_1 + ')';
  };
  protoOf(RoleUI).hashCode = function () {
    var result = getStringHashCode(this.displayIcon_1);
    result = imul(result, 31) + getStringHashCode(this.displayName_1) | 0;
    return result;
  };
  protoOf(RoleUI).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RoleUI))
      return false;
    var tmp0_other_with_cast = other instanceof RoleUI ? other : THROW_CCE();
    if (!(this.displayIcon_1 === tmp0_other_with_cast.displayIcon_1))
      return false;
    if (!(this.displayName_1 === tmp0_other_with_cast.displayName_1))
      return false;
    return true;
  };
  var com_canerture_androidhub_domain_model_AgentGroupUI$stable;
  var com_canerture_androidhub_domain_model_AgentUI$stable;
  var com_canerture_androidhub_domain_model_AbilityUI$stable;
  var com_canerture_androidhub_domain_model_RoleUI$stable;
  function ValorantRepository() {
  }
  function _get_valorantRepository__urtag2($this) {
    return $this.valorantRepository_1;
  }
  function $invokeCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($invokeCOROUTINE$2).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.valorantRepository_1.getAgents_3npu1e_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 1:
            var unboxed = suspendResult.value_1;
            suspendResult = new Result(unboxed);
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            var this_0 = suspendResult.value_1;
            var tmp_0;
            if (_Result___get_isSuccess__impl__sndoy8(this_0)) {
              Companion_getInstance_1();
              var tmp_1 = _Result___get_value__impl__bjfvqg(this_0);
              var it = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
              var value = mapToAgentRoleUI(it);
              tmp_0 = _Result___init__impl__xyqfz8(value);
            } else {
              tmp_0 = _Result___init__impl__xyqfz8(_Result___get_value__impl__bjfvqg(this_0));
            }

            return new Result(tmp_0);
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function GetAgentsUseCase(valorantRepository) {
    this.valorantRepository_1 = valorantRepository;
  }
  protoOf(GetAgentsUseCase).invoke_k60w9y_k$ = function ($completion) {
    var tmp = new $invokeCOROUTINE$2(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    var tmp_0 = tmp.doResume_5yljmg_k$();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  var com_canerture_androidhub_domain_usecase_agents_GetAgentsUseCase$stable;
  function AgentsScreen(viewModel, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1964399077);
    if (isTraceInProgress()) {
      traceEventStart(1964399077, $changed, -1, 'com.canerture.androidhub.presentation.agents.AgentsScreen (AgentsScreen.kt:9)');
    }
    var tmp = viewModel.get_state_iypx7s_k$();
    var state = collectAsState(tmp, null, $composer_0, 8, 1).get_value_j01efc_k$();
    viewModel.getAgents_7wpzqs_k$();
    if (equals(state, Loading_getInstance())) {
      $composer_0.startReplaceableGroup_ip860b_k$(2134632093);
      var tmp_0 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_4 = _TextOverflow___init__impl__obguoe(0);
      Text('Loading', null, tmp_0, tmp_1, null, null, null, tmp_2, null, null, tmp_3, tmp_4, false, 0, 0, null, null, $composer_0, 6, 0, 131070);
      $composer_0.endReplaceableGroup_ern0ak_k$();
    } else {
      if (equals(state, Empty_getInstance())) {
        $composer_0.startReplaceableGroup_ip860b_k$(2134632138);
        var tmp_5 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_6 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_7 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_8 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_9 = _TextOverflow___init__impl__obguoe(0);
        Text('Empty', null, tmp_5, tmp_6, null, null, null, tmp_7, null, null, tmp_8, tmp_9, false, 0, 0, null, null, $composer_0, 6, 0, 131070);
        $composer_0.endReplaceableGroup_ern0ak_k$();
      } else {
        if (state instanceof Content) {
          $composer_0.startReplaceableGroup_ip860b_k$(2134632187);
          var tmp_10 = toString_0(state.get_agents_axj313_k$());
          var tmp_11 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_12 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_13 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_14 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_15 = _TextOverflow___init__impl__obguoe(0);
          Text(tmp_10, null, tmp_11, tmp_12, null, null, null, tmp_13, null, null, tmp_14, tmp_15, false, 0, 0, null, null, $composer_0, 0, 0, 131070);
          println(state.get_agents_axj313_k$());
          $composer_0.endReplaceableGroup_ern0ak_k$();
        } else {
          if (state instanceof ShowError) {
            $composer_0.startReplaceableGroup_ip860b_k$(2134632312);
            // Inline function 'kotlin.text.orEmpty' call
            var tmp0_elvis_lhs = state.get_message_h23axq_k$();
            var tmp_16 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
            var tmp_17 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
            var tmp_18 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
            var tmp_19 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
            var tmp_20 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
            var tmp_21 = _TextOverflow___init__impl__obguoe(0);
            Text(tmp_16, null, tmp_17, tmp_18, null, null, null, tmp_19, null, null, tmp_20, tmp_21, false, 0, 0, null, null, $composer_0, 0, 0, 131070);
            $composer_0.endReplaceableGroup_ern0ak_k$();
          } else {
            $composer_0.startReplaceableGroup_ip860b_k$(2134632347);
            $composer_0.endReplaceableGroup_ern0ak_k$();
          }
        }
      }
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(AgentsScreen$lambda(viewModel, $changed));
    }
  }
  function AgentsScreen$lambda($viewModel, $$changed) {
    return function ($composer, $force) {
      AgentsScreen($viewModel, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function AgentsScreenModel$getAgents$slambda$lambda($this$setState) {
    return Empty_getInstance();
  }
  function AgentsScreenModel$getAgents$slambda$lambda_0($it) {
    return function ($this$setState) {
      return new Content($it);
    };
  }
  function AgentsScreenModel$getAgents$slambda$lambda_1($it) {
    return function ($this$setState) {
      return new ShowError($it.message);
    };
  }
  function _get_getAgentsUseCase__wns9dk($this) {
    return $this.getAgentsUseCase_1;
  }
  function _get_mutableState__51bq1s($this) {
    return $this.mutableState_1;
  }
  function setState($this, reducer) {
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.update' call
      var this_0 = $this.mutableState_1;
      while (true) {
        var prevValue = this_0.get_value_j01efc_k$();
        // Inline function 'com.canerture.androidhub.presentation.agents.AgentsScreenModel.setState.<anonymous>' call
        var nextValue = reducer(prevValue);
        if (this_0.compareAndSet_l3595a_k$(prevValue, nextValue)) {
          break $l$block;
        }
      }
    }
  }
  function AgentsScreenModel$getAgents$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AgentsScreenModel$getAgents$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AgentsScreenModel$getAgents$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AgentsScreenModel$getAgents$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1.getAgentsUseCase_1.invoke_k60w9y_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 1:
            var unboxed = suspendResult.value_1;
            suspendResult = new Result(unboxed);
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            var this_0 = suspendResult.value_1;
            if (_Result___get_isSuccess__impl__sndoy8(this_0)) {
              var tmp_0 = _Result___get_value__impl__bjfvqg(this_0);
              var it = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
              if (it.isEmpty_y1axqb_k$()) {
                setState(this.this$0__1, AgentsScreenModel$getAgents$slambda$lambda);
              } else {
                setState(this.this$0__1, AgentsScreenModel$getAgents$slambda$lambda_0(it));
              }
            }

            var tmp0_safe_receiver = Result__exceptionOrNull_impl_p6xea9(this_0);
            if (tmp0_safe_receiver == null)
              null;
            else {
              setState(this.this$0__1, AgentsScreenModel$getAgents$slambda$lambda_1(tmp0_safe_receiver));
            }

            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(AgentsScreenModel$getAgents$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new AgentsScreenModel$getAgents$slambda(this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(AgentsScreenModel$getAgents$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function AgentsScreenModel$getAgents$slambda_0(this$0, resultContinuation) {
    var i = new AgentsScreenModel$getAgents$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AgentsScreenModel(getAgentsUseCase) {
    KMMViewModel.call(this);
    this.getAgentsUseCase_1 = getAgentsUseCase;
    this.mutableState_1 = MutableStateFlow(Loading_getInstance());
    this.state_1 = asStateFlow(this.mutableState_1);
  }
  protoOf(AgentsScreenModel).get_state_iypx7s_k$ = function () {
    return this.state_1;
  };
  protoOf(AgentsScreenModel).getAgents_7wpzqs_k$ = function () {
    var tmp = get_coroutineScope(this.get_viewModelScope_ryv1dz_k$());
    launch(tmp, VOID, VOID, AgentsScreenModel$getAgents$slambda_0(this, null));
  };
  function Loading() {
    Loading_instance = this;
  }
  protoOf(Loading).toString = function () {
    return 'Loading';
  };
  protoOf(Loading).hashCode = function () {
    return 303210183;
  };
  protoOf(Loading).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Loading))
      return false;
    other instanceof Loading || THROW_CCE();
    return true;
  };
  var Loading_instance;
  function Loading_getInstance() {
    if (Loading_instance == null)
      new Loading();
    return Loading_instance;
  }
  function Empty() {
    Empty_instance = this;
  }
  protoOf(Empty).toString = function () {
    return 'Empty';
  };
  protoOf(Empty).hashCode = function () {
    return 329001368;
  };
  protoOf(Empty).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Empty))
      return false;
    other instanceof Empty || THROW_CCE();
    return true;
  };
  var Empty_instance;
  function Empty_getInstance() {
    if (Empty_instance == null)
      new Empty();
    return Empty_instance;
  }
  function Content(agents) {
    this.agents_1 = agents;
  }
  protoOf(Content).get_agents_axj313_k$ = function () {
    return this.agents_1;
  };
  protoOf(Content).component1_7eebsc_k$ = function () {
    return this.agents_1;
  };
  protoOf(Content).copy_bc4hpz_k$ = function (agents) {
    return new Content(agents);
  };
  protoOf(Content).copy$default_gm2swu_k$ = function (agents, $super) {
    agents = agents === VOID ? this.agents_1 : agents;
    return $super === VOID ? this.copy_bc4hpz_k$(agents) : $super.copy_bc4hpz_k$.call(this, agents);
  };
  protoOf(Content).toString = function () {
    return 'Content(agents=' + this.agents_1 + ')';
  };
  protoOf(Content).hashCode = function () {
    return hashCode(this.agents_1);
  };
  protoOf(Content).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Content))
      return false;
    var tmp0_other_with_cast = other instanceof Content ? other : THROW_CCE();
    if (!equals(this.agents_1, tmp0_other_with_cast.agents_1))
      return false;
    return true;
  };
  function ShowError(message) {
    this.message_1 = message;
  }
  protoOf(ShowError).get_message_h23axq_k$ = function () {
    return this.message_1;
  };
  protoOf(ShowError).component1_7eebsc_k$ = function () {
    return this.message_1;
  };
  protoOf(ShowError).copy_q202ni_k$ = function (message) {
    return new ShowError(message);
  };
  protoOf(ShowError).copy$default_qh4we9_k$ = function (message, $super) {
    message = message === VOID ? this.message_1 : message;
    return $super === VOID ? this.copy_q202ni_k$(message) : $super.copy_q202ni_k$.call(this, message);
  };
  protoOf(ShowError).toString = function () {
    return 'ShowError(message=' + this.message_1 + ')';
  };
  protoOf(ShowError).hashCode = function () {
    return this.message_1 == null ? 0 : getStringHashCode(this.message_1);
  };
  protoOf(ShowError).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ShowError))
      return false;
    var tmp0_other_with_cast = other instanceof ShowError ? other : THROW_CCE();
    if (!(this.message_1 == tmp0_other_with_cast.message_1))
      return false;
    return true;
  };
  function AgentsState() {
  }
  var com_canerture_androidhub_presentation_agents_AgentsScreenModel$stable;
  var com_canerture_androidhub_presentation_agents_AgentsState_Loading$stable;
  var com_canerture_androidhub_presentation_agents_AgentsState_Empty$stable;
  var com_canerture_androidhub_presentation_agents_AgentsState_Content$stable;
  var com_canerture_androidhub_presentation_agents_AgentsState_ShowError$stable;
  function get_Blue() {
    _init_properties_Color_kt__6h0l1r();
    return Blue;
  }
  var Blue;
  function get_LightBlue() {
    _init_properties_Color_kt__6h0l1r();
    return LightBlue;
  }
  var LightBlue;
  function get_Red() {
    _init_properties_Color_kt__6h0l1r();
    return Red;
  }
  var Red;
  function get_White() {
    _init_properties_Color_kt__6h0l1r();
    return White;
  }
  var White;
  function ValorantColors(primary, secondary, background, defaultWhite, defaultBlue, defaultLightBlue, defaultRed, navColors, cardBackground, cardBackgroundSecondary) {
    this.primary_1 = primary;
    this.secondary_1 = secondary;
    this.background_1 = background;
    this.defaultWhite_1 = defaultWhite;
    this.defaultBlue_1 = defaultBlue;
    this.defaultLightBlue_1 = defaultLightBlue;
    this.defaultRed_1 = defaultRed;
    this.navColors_1 = navColors;
    this.cardBackground_1 = cardBackground;
    this.cardBackgroundSecondary_1 = cardBackgroundSecondary;
  }
  protoOf(ValorantColors).get_primary_gfn28_k$ = function () {
    return this.primary_1;
  };
  protoOf(ValorantColors).get_secondary_tgxf9q_k$ = function () {
    return this.secondary_1;
  };
  protoOf(ValorantColors).get_background_8l4942_k$ = function () {
    return this.background_1;
  };
  protoOf(ValorantColors).get_defaultWhite_8etr14_k$ = function () {
    return this.defaultWhite_1;
  };
  protoOf(ValorantColors).get_defaultBlue_iibvr_k$ = function () {
    return this.defaultBlue_1;
  };
  protoOf(ValorantColors).get_defaultLightBlue_xca9pd_k$ = function () {
    return this.defaultLightBlue_1;
  };
  protoOf(ValorantColors).get_defaultRed_v2mx6o_k$ = function () {
    return this.defaultRed_1;
  };
  protoOf(ValorantColors).get_navColors_33m216_k$ = function () {
    return this.navColors_1;
  };
  protoOf(ValorantColors).get_cardBackground_wrhenm_k$ = function () {
    return this.cardBackground_1;
  };
  protoOf(ValorantColors).get_cardBackgroundSecondary_8206rw_k$ = function () {
    return this.cardBackgroundSecondary_1;
  };
  protoOf(ValorantColors).component1_9lkot7_k$ = function () {
    return this.primary_1;
  };
  protoOf(ValorantColors).component2_ekm1j8_k$ = function () {
    return this.secondary_1;
  };
  protoOf(ValorantColors).component3_waba3h_k$ = function () {
    return this.background_1;
  };
  protoOf(ValorantColors).component4_844jr2_k$ = function () {
    return this.defaultWhite_1;
  };
  protoOf(ValorantColors).component5_g226ld_k$ = function () {
    return this.defaultBlue_1;
  };
  protoOf(ValorantColors).component6_usv51c_k$ = function () {
    return this.defaultLightBlue_1;
  };
  protoOf(ValorantColors).component7_6moeox_k$ = function () {
    return this.defaultRed_1;
  };
  protoOf(ValorantColors).component8_7eebs5_k$ = function () {
    return this.navColors_1;
  };
  protoOf(ValorantColors).component9_tbezz7_k$ = function () {
    return this.cardBackground_1;
  };
  protoOf(ValorantColors).component10_9b09ct_k$ = function () {
    return this.cardBackgroundSecondary_1;
  };
  protoOf(ValorantColors).copy_hnzqkp_k$ = function (primary, secondary, background, defaultWhite, defaultBlue, defaultLightBlue, defaultRed, navColors, cardBackground, cardBackgroundSecondary) {
    return new ValorantColors(primary, secondary, background, defaultWhite, defaultBlue, defaultLightBlue, defaultRed, navColors, cardBackground, cardBackgroundSecondary);
  };
  protoOf(ValorantColors).copy$default_chtole_k$ = function (primary, secondary, background, defaultWhite, defaultBlue, defaultLightBlue, defaultRed, navColors, cardBackground, cardBackgroundSecondary, $super) {
    primary = primary === VOID ? this.primary_1 : primary;
    secondary = secondary === VOID ? this.secondary_1 : secondary;
    background = background === VOID ? this.background_1 : background;
    defaultWhite = defaultWhite === VOID ? this.defaultWhite_1 : defaultWhite;
    defaultBlue = defaultBlue === VOID ? this.defaultBlue_1 : defaultBlue;
    defaultLightBlue = defaultLightBlue === VOID ? this.defaultLightBlue_1 : defaultLightBlue;
    defaultRed = defaultRed === VOID ? this.defaultRed_1 : defaultRed;
    navColors = navColors === VOID ? this.navColors_1 : navColors;
    cardBackground = cardBackground === VOID ? this.cardBackground_1 : cardBackground;
    cardBackgroundSecondary = cardBackgroundSecondary === VOID ? this.cardBackgroundSecondary_1 : cardBackgroundSecondary;
    return $super === VOID ? this.copy_hnzqkp_k$(primary, secondary, background, defaultWhite, defaultBlue, defaultLightBlue, defaultRed, navColors, cardBackground, cardBackgroundSecondary) : $super.copy_hnzqkp_k$.call(this, new Color(primary), new Color(secondary), new Color(background), new Color(defaultWhite), new Color(defaultBlue), new Color(defaultLightBlue), new Color(defaultRed), navColors, new Color(cardBackground), new Color(cardBackgroundSecondary));
  };
  protoOf(ValorantColors).toString = function () {
    return 'ValorantColors(primary=' + new Color(this.primary_1) + ', secondary=' + new Color(this.secondary_1) + ', background=' + new Color(this.background_1) + ', defaultWhite=' + new Color(this.defaultWhite_1) + ', defaultBlue=' + new Color(this.defaultBlue_1) + ', defaultLightBlue=' + new Color(this.defaultLightBlue_1) + ', defaultRed=' + new Color(this.defaultRed_1) + ', navColors=' + this.navColors_1 + ', cardBackground=' + new Color(this.cardBackground_1) + ', cardBackgroundSecondary=' + new Color(this.cardBackgroundSecondary_1) + ')';
  };
  protoOf(ValorantColors).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.primary_1);
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.secondary_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.background_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.defaultWhite_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.defaultBlue_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.defaultLightBlue_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.defaultRed_1) | 0;
    result = imul(result, 31) + this.navColors_1.hashCode() | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.cardBackground_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.cardBackgroundSecondary_1) | 0;
    return result;
  };
  protoOf(ValorantColors).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ValorantColors))
      return false;
    var tmp0_other_with_cast = other instanceof ValorantColors ? other : THROW_CCE();
    if (!equals(this.primary_1, tmp0_other_with_cast.primary_1))
      return false;
    if (!equals(this.secondary_1, tmp0_other_with_cast.secondary_1))
      return false;
    if (!equals(this.background_1, tmp0_other_with_cast.background_1))
      return false;
    if (!equals(this.defaultWhite_1, tmp0_other_with_cast.defaultWhite_1))
      return false;
    if (!equals(this.defaultBlue_1, tmp0_other_with_cast.defaultBlue_1))
      return false;
    if (!equals(this.defaultLightBlue_1, tmp0_other_with_cast.defaultLightBlue_1))
      return false;
    if (!equals(this.defaultRed_1, tmp0_other_with_cast.defaultRed_1))
      return false;
    if (!this.navColors_1.equals(tmp0_other_with_cast.navColors_1))
      return false;
    if (!equals(this.cardBackground_1, tmp0_other_with_cast.cardBackground_1))
      return false;
    if (!equals(this.cardBackgroundSecondary_1, tmp0_other_with_cast.cardBackgroundSecondary_1))
      return false;
    return true;
  };
  function NavColors(containerColor, selectedIconColor, selectedTextColor, selectedIndicatorColor, unselectedIconColor, unselectedTextColor, disabledIconColor, disabledTextColor) {
    this.containerColor_1 = containerColor;
    this.selectedIconColor_1 = selectedIconColor;
    this.selectedTextColor_1 = selectedTextColor;
    this.selectedIndicatorColor_1 = selectedIndicatorColor;
    this.unselectedIconColor_1 = unselectedIconColor;
    this.unselectedTextColor_1 = unselectedTextColor;
    this.disabledIconColor_1 = disabledIconColor;
    this.disabledTextColor_1 = disabledTextColor;
  }
  protoOf(NavColors).get_containerColor_qwz2lq_k$ = function () {
    return this.containerColor_1;
  };
  protoOf(NavColors).get_selectedIconColor_1uu44t_k$ = function () {
    return this.selectedIconColor_1;
  };
  protoOf(NavColors).get_selectedTextColor_y57cft_k$ = function () {
    return this.selectedTextColor_1;
  };
  protoOf(NavColors).get_selectedIndicatorColor_7eo21r_k$ = function () {
    return this.selectedIndicatorColor_1;
  };
  protoOf(NavColors).get_unselectedIconColor_apvims_k$ = function () {
    return this.unselectedIconColor_1;
  };
  protoOf(NavColors).get_unselectedTextColor_s0vb1c_k$ = function () {
    return this.unselectedTextColor_1;
  };
  protoOf(NavColors).get_disabledIconColor_gmh6do_k$ = function () {
    return this.disabledIconColor_1;
  };
  protoOf(NavColors).get_disabledTextColor_m49nag_k$ = function () {
    return this.disabledTextColor_1;
  };
  protoOf(NavColors).component1_9lkot7_k$ = function () {
    return this.containerColor_1;
  };
  protoOf(NavColors).component2_ekm1j8_k$ = function () {
    return this.selectedIconColor_1;
  };
  protoOf(NavColors).component3_waba3h_k$ = function () {
    return this.selectedTextColor_1;
  };
  protoOf(NavColors).component4_844jr2_k$ = function () {
    return this.selectedIndicatorColor_1;
  };
  protoOf(NavColors).component5_g226ld_k$ = function () {
    return this.unselectedIconColor_1;
  };
  protoOf(NavColors).component6_usv51c_k$ = function () {
    return this.unselectedTextColor_1;
  };
  protoOf(NavColors).component7_6moeox_k$ = function () {
    return this.disabledIconColor_1;
  };
  protoOf(NavColors).component8_hjibni_k$ = function () {
    return this.disabledTextColor_1;
  };
  protoOf(NavColors).copy_rnmzhf_k$ = function (containerColor, selectedIconColor, selectedTextColor, selectedIndicatorColor, unselectedIconColor, unselectedTextColor, disabledIconColor, disabledTextColor) {
    return new NavColors(containerColor, selectedIconColor, selectedTextColor, selectedIndicatorColor, unselectedIconColor, unselectedTextColor, disabledIconColor, disabledTextColor);
  };
  protoOf(NavColors).copy$default_qtcyi4_k$ = function (containerColor, selectedIconColor, selectedTextColor, selectedIndicatorColor, unselectedIconColor, unselectedTextColor, disabledIconColor, disabledTextColor, $super) {
    containerColor = containerColor === VOID ? this.containerColor_1 : containerColor;
    selectedIconColor = selectedIconColor === VOID ? this.selectedIconColor_1 : selectedIconColor;
    selectedTextColor = selectedTextColor === VOID ? this.selectedTextColor_1 : selectedTextColor;
    selectedIndicatorColor = selectedIndicatorColor === VOID ? this.selectedIndicatorColor_1 : selectedIndicatorColor;
    unselectedIconColor = unselectedIconColor === VOID ? this.unselectedIconColor_1 : unselectedIconColor;
    unselectedTextColor = unselectedTextColor === VOID ? this.unselectedTextColor_1 : unselectedTextColor;
    disabledIconColor = disabledIconColor === VOID ? this.disabledIconColor_1 : disabledIconColor;
    disabledTextColor = disabledTextColor === VOID ? this.disabledTextColor_1 : disabledTextColor;
    return $super === VOID ? this.copy_rnmzhf_k$(containerColor, selectedIconColor, selectedTextColor, selectedIndicatorColor, unselectedIconColor, unselectedTextColor, disabledIconColor, disabledTextColor) : $super.copy_rnmzhf_k$.call(this, new Color(containerColor), new Color(selectedIconColor), new Color(selectedTextColor), new Color(selectedIndicatorColor), new Color(unselectedIconColor), new Color(unselectedTextColor), new Color(disabledIconColor), new Color(disabledTextColor));
  };
  protoOf(NavColors).toString = function () {
    return 'NavColors(containerColor=' + new Color(this.containerColor_1) + ', selectedIconColor=' + new Color(this.selectedIconColor_1) + ', selectedTextColor=' + new Color(this.selectedTextColor_1) + ', selectedIndicatorColor=' + new Color(this.selectedIndicatorColor_1) + ', unselectedIconColor=' + new Color(this.unselectedIconColor_1) + ', unselectedTextColor=' + new Color(this.unselectedTextColor_1) + ', disabledIconColor=' + new Color(this.disabledIconColor_1) + ', disabledTextColor=' + new Color(this.disabledTextColor_1) + ')';
  };
  protoOf(NavColors).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.containerColor_1);
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.selectedIconColor_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.selectedTextColor_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.selectedIndicatorColor_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.unselectedIconColor_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.unselectedTextColor_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.disabledIconColor_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.disabledTextColor_1) | 0;
    return result;
  };
  protoOf(NavColors).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NavColors))
      return false;
    var tmp0_other_with_cast = other instanceof NavColors ? other : THROW_CCE();
    if (!equals(this.containerColor_1, tmp0_other_with_cast.containerColor_1))
      return false;
    if (!equals(this.selectedIconColor_1, tmp0_other_with_cast.selectedIconColor_1))
      return false;
    if (!equals(this.selectedTextColor_1, tmp0_other_with_cast.selectedTextColor_1))
      return false;
    if (!equals(this.selectedIndicatorColor_1, tmp0_other_with_cast.selectedIndicatorColor_1))
      return false;
    if (!equals(this.unselectedIconColor_1, tmp0_other_with_cast.unselectedIconColor_1))
      return false;
    if (!equals(this.unselectedTextColor_1, tmp0_other_with_cast.unselectedTextColor_1))
      return false;
    if (!equals(this.disabledIconColor_1, tmp0_other_with_cast.disabledIconColor_1))
      return false;
    if (!equals(this.disabledTextColor_1, tmp0_other_with_cast.disabledTextColor_1))
      return false;
    return true;
  };
  var com_canerture_androidhub_presentation_theme_ValorantColors$stable;
  var com_canerture_androidhub_presentation_theme_NavColors$stable;
  var properties_initialized_Color_kt_bdybnx;
  function _init_properties_Color_kt__6h0l1r() {
    if (!properties_initialized_Color_kt_bdybnx) {
      properties_initialized_Color_kt_bdybnx = true;
      Blue = Color_0(new Long(-15328221, 0));
      LightBlue = Color_0(new Long(-14604240, 0));
      Red = Color_0(new Long(-47532, 0));
      White = Color_0(new Long(-527, 0));
    }
  }
  function get_Shapes() {
    _init_properties_Shape_kt__4opktr();
    return Shapes_0;
  }
  var Shapes_0;
  var properties_initialized_Shape_kt_9gfamn;
  function _init_properties_Shape_kt__4opktr() {
    if (!properties_initialized_Shape_kt_9gfamn) {
      properties_initialized_Shape_kt_9gfamn = true;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$0 = _Dp___init__impl__ms3zkb(4);
      var tmp = RoundedCornerShape(tmp$ret$0);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$1 = _Dp___init__impl__ms3zkb(4);
      var tmp_0 = RoundedCornerShape(tmp$ret$1);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$2 = _Dp___init__impl__ms3zkb(0);
      Shapes_0 = new Shapes(VOID, tmp, tmp_0, RoundedCornerShape(tmp$ret$2));
    }
  }
  function get_darkColors() {
    _init_properties_Theme_kt__w31tqv();
    return darkColors;
  }
  var darkColors;
  function get_lightColors() {
    _init_properties_Theme_kt__w31tqv();
    return lightColors;
  }
  var lightColors;
  function get_LocalValorantColors() {
    _init_properties_Theme_kt__w31tqv();
    return LocalValorantColors;
  }
  var LocalValorantColors;
  function get_LocalValorantTypography() {
    _init_properties_Theme_kt__w31tqv();
    return LocalValorantTypography;
  }
  var LocalValorantTypography;
  function ValorantTheme(darkTheme, content, $composer, $changed, $default) {
    _init_properties_Theme_kt__w31tqv();
    var darkTheme_0 = {_v: darkTheme};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(472868764);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ((($default & 1) === 0 ? $composer_0.changed_jpyyrz_k$(darkTheme_0._v) : false) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g83kzo_k$();
      if (($changed & 1) === 0 ? true : $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 1) === 0)) {
          darkTheme_0._v = isSystemInDarkTheme($composer_0, 0);
          $dirty = $dirty & -15;
        }
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
      }
      $composer_0.endDefaults_b0s0ot_k$();
      if (isTraceInProgress()) {
        traceEventStart(472868764, $dirty, -1, 'com.canerture.androidhub.presentation.theme.ValorantTheme (Theme.kt:13)');
      }
      var tmp;
      if (darkTheme_0._v) {
        tmp = get_darkColors();
      } else {
        tmp = get_lightColors();
      }
      var colors = tmp;
      var tmp_0 = [get_LocalValorantColors().provides_3agxel_k$(colors), get_LocalValorantTypography().provides_3agxel_k$(new ValorantTypography())];
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.canerture.androidhub.presentation.theme.ValorantTheme.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 1767844572, true, ValorantTheme$lambda(content));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.presentation.theme.ValorantTheme.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_0(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      CompositionLocalProvider(tmp_0, tmp0, $composer_0, 56);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(ValorantTheme$lambda_0(darkTheme_0, content, $changed, $default));
    }
  }
  function ValorantTheme_0() {
    ValorantTheme_instance = this;
  }
  protoOf(ValorantTheme_0).get_colors_rimeqo_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(98802654, $changed, -1, 'com.canerture.androidhub.presentation.theme.ValorantTheme.<get-colors> (Theme.kt:76)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalValorantColors();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_ebzcrh_k$(this_0);
    sourceInformationMarkerEnd($composer_1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return tmp0;
  };
  protoOf(ValorantTheme_0).get_typography_xjkk5b_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1721908483, $changed, -1, 'com.canerture.androidhub.presentation.theme.ValorantTheme.<get-typography> (Theme.kt:81)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalValorantTypography();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_ebzcrh_k$(this_0);
    sourceInformationMarkerEnd($composer_1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return tmp0;
  };
  var ValorantTheme_instance;
  function ValorantTheme_getInstance() {
    if (ValorantTheme_instance == null)
      new ValorantTheme_0();
    return ValorantTheme_instance;
  }
  var com_canerture_androidhub_presentation_theme_ValorantTheme$stable;
  function LocalValorantColors$lambda() {
    _init_properties_Theme_kt__w31tqv();
    return new ValorantColors(Companion_getInstance_3().get_Unspecified_j397pn_k$(), Companion_getInstance_3().get_Unspecified_j397pn_k$(), Companion_getInstance_3().get_Unspecified_j397pn_k$(), Companion_getInstance_3().get_Unspecified_j397pn_k$(), Companion_getInstance_3().get_Unspecified_j397pn_k$(), Companion_getInstance_3().get_Unspecified_j397pn_k$(), Companion_getInstance_3().get_Unspecified_j397pn_k$(), new NavColors(Companion_getInstance_3().get_Unspecified_j397pn_k$(), Companion_getInstance_3().get_Unspecified_j397pn_k$(), Companion_getInstance_3().get_Unspecified_j397pn_k$(), Companion_getInstance_3().get_Unspecified_j397pn_k$(), Companion_getInstance_3().get_Unspecified_j397pn_k$(), Companion_getInstance_3().get_Unspecified_j397pn_k$(), Companion_getInstance_3().get_Unspecified_j397pn_k$(), Companion_getInstance_3().get_Unspecified_j397pn_k$()), Companion_getInstance_3().get_Unspecified_j397pn_k$(), Companion_getInstance_3().get_Unspecified_j397pn_k$());
  }
  function LocalValorantTypography$lambda() {
    _init_properties_Theme_kt__w31tqv();
    return new ValorantTypography();
  }
  function ValorantTheme$lambda($content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1767844572, $changed, -1, 'com.canerture.androidhub.presentation.theme.ValorantTheme.<anonymous> (Theme.kt:24)');
        }
        $content($composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ValorantTheme$lambda_0($darkTheme, $content, $$changed, $$default) {
    return function ($composer, $force) {
      ValorantTheme($darkTheme._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  var properties_initialized_Theme_kt_uwj6hl;
  function _init_properties_Theme_kt__w31tqv() {
    if (!properties_initialized_Theme_kt_uwj6hl) {
      properties_initialized_Theme_kt_uwj6hl = true;
      darkColors = new ValorantColors(get_White(), get_Blue(), get_Blue(), get_White(), get_Blue(), get_LightBlue(), get_Red(), new NavColors(get_LightBlue(), get_Red(), get_White(), Companion_getInstance_3().get_Transparent_if5ln4_k$(), Color__copy$default_impl_ectz3s(get_White(), 0.3), Color__copy$default_impl_ectz3s(get_White(), 0.3), get_White(), get_White()), get_LightBlue(), get_LightBlue());
      lightColors = new ValorantColors(get_Blue(), get_White(), get_White(), get_White(), get_Blue(), get_LightBlue(), get_Red(), new NavColors(Color__copy$default_impl_ectz3s(get_LightBlue(), 0.05), get_Red(), get_Blue(), Companion_getInstance_3().get_Transparent_if5ln4_k$(), Color__copy$default_impl_ectz3s(get_Blue(), 0.3), Color__copy$default_impl_ectz3s(get_Blue(), 0.3), Companion_getInstance_3().get_Transparent_if5ln4_k$(), Companion_getInstance_3().get_Transparent_if5ln4_k$()), Color__copy$default_impl_ectz3s(get_LightBlue(), 0.05), Color__copy$default_impl_ectz3s(get_LightBlue(), 0.1));
      LocalValorantColors = staticCompositionLocalOf(LocalValorantColors$lambda);
      LocalValorantTypography = staticCompositionLocalOf(LocalValorantTypography$lambda);
    }
  }
  function ValorantTypography() {
  }
  protoOf(ValorantTypography).get_titleLarge_pywuel_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-1358115318);
    if (isTraceInProgress()) {
      traceEventStart(-1358115318, $changed, -1, 'com.canerture.androidhub.presentation.theme.ValorantTypography.<get-titleLarge> (Type.kt:12)');
    }
    var tmp0_fontSize = get_sp(34);
    var tmp1_fontWeight = Companion_getInstance_4().get_Bold_wnz5ke_k$();
    var tmp2_color = ValorantTheme_getInstance().get_colors_rimeqo_k$($composer_0, 6).get_primary_gfn28_k$();
    var tmp3_textAlign = Companion_getInstance_5().get_Center_fp5t1o_k$();
    var tmp0 = TextStyle_init_$Create$(tmp2_color, tmp0_fontSize, tmp1_fontWeight, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp3_textAlign);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  };
  protoOf(ValorantTypography).get_titleMedium_ymp2yz_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-681321542);
    if (isTraceInProgress()) {
      traceEventStart(-681321542, $changed, -1, 'com.canerture.androidhub.presentation.theme.ValorantTypography.<get-titleMedium> (Type.kt:21)');
    }
    var tmp0_fontSize = get_sp(24);
    var tmp1_fontWeight = Companion_getInstance_4().get_SemiBold_aid1c4_k$();
    var tmp2_color = ValorantTheme_getInstance().get_colors_rimeqo_k$($composer_0, 6).get_primary_gfn28_k$();
    var tmp3_textAlign = Companion_getInstance_5().get_Center_fp5t1o_k$();
    var tmp0 = TextStyle_init_$Create$(tmp2_color, tmp0_fontSize, tmp1_fontWeight, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp3_textAlign);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  };
  protoOf(ValorantTypography).get_titleNormal_c4tim5_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-619459682);
    if (isTraceInProgress()) {
      traceEventStart(-619459682, $changed, -1, 'com.canerture.androidhub.presentation.theme.ValorantTypography.<get-titleNormal> (Type.kt:30)');
    }
    var tmp0_fontSize = get_sp(18);
    var tmp1_fontWeight = Companion_getInstance_4().get_SemiBold_aid1c4_k$();
    var tmp2_color = ValorantTheme_getInstance().get_colors_rimeqo_k$($composer_0, 6).get_primary_gfn28_k$();
    var tmp3_textAlign = Companion_getInstance_5().get_Center_fp5t1o_k$();
    var tmp0 = TextStyle_init_$Create$(tmp2_color, tmp0_fontSize, tmp1_fontWeight, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp3_textAlign);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  };
  protoOf(ValorantTypography).get_titleSmall_umfqlb_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-1637567350);
    if (isTraceInProgress()) {
      traceEventStart(-1637567350, $changed, -1, 'com.canerture.androidhub.presentation.theme.ValorantTypography.<get-titleSmall> (Type.kt:39)');
    }
    var tmp0_fontSize = get_sp(14);
    var tmp1_fontWeight = Companion_getInstance_4().get_SemiBold_aid1c4_k$();
    var tmp2_color = ValorantTheme_getInstance().get_colors_rimeqo_k$($composer_0, 6).get_primary_gfn28_k$();
    var tmp3_textAlign = Companion_getInstance_5().get_Center_fp5t1o_k$();
    var tmp0 = TextStyle_init_$Create$(tmp2_color, tmp0_fontSize, tmp1_fontWeight, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp3_textAlign);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  };
  protoOf(ValorantTypography).get_bodySmall_gy4qeb_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-469168534);
    if (isTraceInProgress()) {
      traceEventStart(-469168534, $changed, -1, 'com.canerture.androidhub.presentation.theme.ValorantTypography.<get-bodySmall> (Type.kt:48)');
    }
    var tmp0_fontSize = get_sp(14);
    var tmp1_fontWeight = Companion_getInstance_4().get_Normal_22avww_k$();
    var tmp2_color = ValorantTheme_getInstance().get_colors_rimeqo_k$($composer_0, 6).get_primary_gfn28_k$();
    var tmp3_textAlign = Companion_getInstance_5().get_Center_fp5t1o_k$();
    var tmp0 = TextStyle_init_$Create$(tmp2_color, tmp0_fontSize, tmp1_fontWeight, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp3_textAlign);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  };
  var com_canerture_androidhub_presentation_theme_ValorantTypography$stable;
  function main() {
    var koin = initKoin(main$lambda).get_koin_wopbyq_k$();
    // Inline function 'org.koin.core.Koin.get' call
    // Inline function 'org.koin.core.scope.Scope.get' call
    var useCase = koin.get_scopeRegistry_7zu3y0_k$().get_rootScope_60k1zr_k$().get_80ko8d_k$(getKClass(GetAgentsUseCase), null, null);
    var viewModel = new AgentsScreenModel(useCase);
    onWasmReady(main$lambda_0(viewModel));
  }
  function main$lambda($this$initKoin) {
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function main$lambda$lambda($viewModel) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1587894689, $changed, -1, 'main.<anonymous>.<anonymous> (main.kt:15)');
        }
        App($viewModel, $composer_0, 8);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function main$lambda_0($viewModel) {
    return function () {
      CanvasBasedWindow(VOID, 'ComposeTarget', VOID, VOID, ComposableLambda$invoke$ref_1(composableLambdaInstance(-1587894689, true, main$lambda$lambda($viewModel))));
      return Unit_getInstance();
    };
  }
  //region block: post-declaration
  protoOf($serializer).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_0).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_2).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  //endregion
  //region block: init
  androidhub_composeapp_generated_resources_Res_drawable$stable = 0;
  androidhub_composeapp_generated_resources_Res_string$stable = 0;
  androidhub_composeapp_generated_resources_Res_font$stable = 0;
  androidhub_composeapp_generated_resources_Res$stable = 0;
  com_canerture_androidhub_data_model_Ability_$serializer$stable = 0;
  com_canerture_androidhub_data_model_Ability$stable = 0;
  com_canerture_androidhub_data_model_Agent_$serializer$stable = 0;
  com_canerture_androidhub_data_model_Agent$stable = 8;
  com_canerture_androidhub_data_model_BaseResponse_$serializer$stable = 0;
  com_canerture_androidhub_data_model_BaseResponse$stable = 0;
  com_canerture_androidhub_data_model_Role_$serializer$stable = 0;
  com_canerture_androidhub_data_model_Role$stable = 0;
  com_canerture_androidhub_data_remote_KtorApi$stable = 8;
  com_canerture_androidhub_data_remote_ValorantService$stable = 0;
  com_canerture_androidhub_data_repository_ValorantRepositoryImpl$stable = 0;
  com_canerture_androidhub_domain_model_AgentGroupUI$stable = 8;
  com_canerture_androidhub_domain_model_AgentUI$stable = 8;
  com_canerture_androidhub_domain_model_AbilityUI$stable = 0;
  com_canerture_androidhub_domain_model_RoleUI$stable = 0;
  com_canerture_androidhub_domain_usecase_agents_GetAgentsUseCase$stable = 8;
  com_canerture_androidhub_presentation_agents_AgentsScreenModel$stable = 8;
  com_canerture_androidhub_presentation_agents_AgentsState_Loading$stable = 0;
  com_canerture_androidhub_presentation_agents_AgentsState_Empty$stable = 0;
  com_canerture_androidhub_presentation_agents_AgentsState_Content$stable = 8;
  com_canerture_androidhub_presentation_agents_AgentsState_ShowError$stable = 0;
  com_canerture_androidhub_presentation_theme_ValorantColors$stable = 0;
  com_canerture_androidhub_presentation_theme_NavColors$stable = 0;
  com_canerture_androidhub_presentation_theme_ValorantTheme$stable = 0;
  com_canerture_androidhub_presentation_theme_ValorantTypography$stable = 0;
  //endregion
  main();
  return _;
}));

//# sourceMappingURL=AndroidHub-composeApp.js.map
