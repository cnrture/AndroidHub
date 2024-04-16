(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-compose-runtime-runtime.js', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-core.js', './ktor-ktor-client-core.js', './ktor-ktor-client-content-negotiation.js', './ktor-ktor-http.js', './kotlinx-serialization-kotlinx-serialization-json.js', './ktor-ktor-serialization-kotlinx-json.js', './ktor-ktor-utils.js', './core-koin-core.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-ui-ui-text.js', './compose-multiplatform-core-compose-material3-material3.js', './kotlinx-coroutines-core.js', './kmm-viewmodel-kmm-viewmodel-core.js', './compose-multiplatform-core-compose-foundation-foundation.js', './compose-multiplatform-core-compose-ui-ui.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./ktor-ktor-client-core.js'), require('./ktor-ktor-client-content-negotiation.js'), require('./ktor-ktor-http.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'), require('./ktor-ktor-serialization-kotlinx-json.js'), require('./ktor-ktor-utils.js'), require('./core-koin-core.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-ui-ui-text.js'), require('./compose-multiplatform-core-compose-material3-material3.js'), require('./kotlinx-coroutines-core.js'), require('./kmm-viewmodel-kmm-viewmodel-core.js'), require('./compose-multiplatform-core-compose-foundation-foundation.js'), require('./compose-multiplatform-core-compose-ui-ui.js'));
  else {
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'AndroidHub:composeApp'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'AndroidHub:composeApp'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'AndroidHub:composeApp'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'AndroidHub:composeApp'.");
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
    root['AndroidHub:composeApp'] = factory(typeof this['AndroidHub:composeApp'] === 'undefined' ? {} : this['AndroidHub:composeApp'], this['compose-multiplatform-core-compose-runtime-runtime'], this['kotlin-kotlin-stdlib'], this['kotlinx-serialization-kotlinx-serialization-core'], this['ktor-ktor-client-core'], this['ktor-ktor-client-content-negotiation'], this['ktor-ktor-http'], this['kotlinx-serialization-kotlinx-serialization-json'], this['ktor-ktor-serialization-kotlinx-json'], this['ktor-ktor-utils'], this['core-koin-core'], this['compose-multiplatform-core-compose-ui-ui-graphics'], this['compose-multiplatform-core-compose-ui-ui-unit'], this['compose-multiplatform-core-compose-ui-ui-text'], this['compose-multiplatform-core-compose-material3-material3'], this['kotlinx-coroutines-core'], this['kmm-viewmodel-kmm-viewmodel-core'], this['compose-multiplatform-core-compose-foundation-foundation'], this['compose-multiplatform-core-compose-ui-ui']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_io_ktor_ktor_client_core, kotlin_io_ktor_ktor_client_content_negotiation, kotlin_io_ktor_ktor_http, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json, kotlin_io_ktor_ktor_serialization_kotlinx_json, kotlin_io_ktor_ktor_utils, kotlin_io_insert_koin_koin_core, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui_text, kotlin_org_jetbrains_compose_material3_material3, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_com_rickclephas_kmm_kmm_viewmodel_core, kotlin_org_jetbrains_compose_foundation_foundation, kotlin_org_jetbrains_compose_ui_ui) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var Unit_instance = kotlin_kotlin.$_$.k5;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p1;
  var THROW_CCE = kotlin_kotlin.$_$.ng;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var protoOf = kotlin_kotlin.$_$.ic;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var objectMeta = kotlin_kotlin.$_$.hc;
  var setMetadataFor = kotlin_kotlin.$_$.jc;
  var VOID = kotlin_kotlin.$_$.g;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var objectCreate = kotlin_kotlin.$_$.gc;
  var getStringHashCode = kotlin_kotlin.$_$.jb;
  var classMeta = kotlin_kotlin.$_$.xa;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var hashCode = kotlin_kotlin.$_$.kb;
  var equals = kotlin_kotlin.$_$.ab;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var defaultRequest = kotlin_io_ktor_ktor_client_core.$_$.e;
  var Plugin_getInstance = kotlin_io_ktor_ktor_client_content_negotiation.$_$.a;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.b;
  var contentType = kotlin_io_ktor_ktor_http.$_$.e1;
  var accept = kotlin_io_ktor_ktor_client_core.$_$.g;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var json = kotlin_io_ktor_ktor_serialization_kotlinx_json.$_$.a;
  var HttpClient = kotlin_io_ktor_ktor_client_core.$_$.k;
  var CoroutineImpl = kotlin_kotlin.$_$.ja;
  var HttpRequestBuilder = kotlin_io_ktor_ktor_client_core.$_$.f;
  var url = kotlin_io_ktor_ktor_client_core.$_$.h;
  var Companion_getInstance_0 = kotlin_io_ktor_ktor_http.$_$.f;
  var HttpStatement = kotlin_io_ktor_ktor_client_core.$_$.j;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.v9;
  var JsType_instance = kotlin_io_ktor_ktor_utils.$_$.b;
  var getKClass = kotlin_kotlin.$_$.e;
  var List = kotlin_kotlin.$_$.x5;
  var arrayOf = kotlin_kotlin.$_$.bh;
  var createKType = kotlin_kotlin.$_$.b;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.a;
  var typeInfoImpl = kotlin_io_ktor_ktor_utils.$_$.k;
  var Result = kotlin_kotlin.$_$.lg;
  var Companion_instance = kotlin_kotlin.$_$.f5;
  var toString = kotlin_kotlin.$_$.yh;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.q1;
  var createFailure = kotlin_kotlin.$_$.eh;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.b3;
  var Exception = kotlin_kotlin.$_$.dg;
  var startKoin = kotlin_io_insert_koin_koin_core.$_$.d;
  var Companion_getInstance_1 = kotlin_io_insert_koin_koin_core.$_$.c;
  var Kind_Singleton_getInstance = kotlin_io_insert_koin_koin_core.$_$.b;
  var emptyList = kotlin_kotlin.$_$.i7;
  var BeanDefinition = kotlin_io_insert_koin_koin_core.$_$.e;
  var SingleInstanceFactory = kotlin_io_insert_koin_koin_core.$_$.h;
  var KoinDefinition = kotlin_io_insert_koin_koin_core.$_$.f;
  var Kind_Factory_getInstance = kotlin_io_insert_koin_koin_core.$_$.a;
  var FactoryInstanceFactory = kotlin_io_insert_koin_koin_core.$_$.g;
  var onOptions = kotlin_io_insert_koin_koin_core.$_$.i;
  var module_0 = kotlin_io_insert_koin_koin_core.$_$.j;
  var listOf = kotlin_kotlin.$_$.n8;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.x;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.n;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.m;
  var first = kotlin_kotlin.$_$.s7;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.r6;
  var interfaceMeta = kotlin_kotlin.$_$.mb;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.f3;
  var _Result___get_isSuccess__impl__sndoy8 = kotlin_kotlin.$_$.e3;
  var collectAsState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var Long = kotlin_kotlin.$_$.gg;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.y3;
  var _Color___init__impl__r6cqi2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.z;
  var _TextUnit___init__impl__r5fj1s = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m1;
  var _TextOverflow___init__impl__obguoe = kotlin_org_jetbrains_compose_ui_ui_text.$_$.s;
  var Text = kotlin_org_jetbrains_compose_material3_material3.$_$.a;
  var toString_0 = kotlin_kotlin.$_$.nc;
  var println = kotlin_kotlin.$_$.na;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var isInterface = kotlin_kotlin.$_$.vb;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.c3;
  var KMMViewModel = kotlin_com_rickclephas_kmm_kmm_viewmodel_core.$_$.a;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var asStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var get_coroutineScope = kotlin_com_rickclephas_kmm_kmm_viewmodel_core.$_$.b;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t1;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.f;
  var Color__hashCode_impl_vjyivj = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.b1;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.e;
  var isSystemInDarkTheme = kotlin_org_jetbrains_compose_foundation_foundation.$_$.b;
  var CompositionLocalProvider = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.t1;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m1;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var CanvasBasedWindow = kotlin_org_jetbrains_compose_ui_ui.$_$.l1;
  //endregion
  //region block: pre-declaration
  setMetadataFor($serializer, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Ability, 'Ability', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor($serializer_0, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Agent, 'Agent', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
  setMetadataFor(Companion_0, 'Companion', objectMeta, VOID, [SerializerFactory]);
  setMetadataFor($serializer_1, '$serializer', classMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(BaseResponse, 'BaseResponse', classMeta, VOID, VOID, BaseResponse, VOID, {0: Companion_getInstance_4});
  setMetadataFor($serializer_2, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Role, 'Role', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
  setMetadataFor(KtorApi, 'KtorApi', classMeta);
  setMetadataFor($getAgentsCOROUTINE$0, '$getAgentsCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(ValorantService, 'ValorantService', classMeta, KtorApi, VOID, ValorantService, VOID, VOID, [0]);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(ValorantRepositoryImpl$getAgents$slambda, 'ValorantRepositoryImpl$getAgents$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor($safeApiCallCOROUTINE$1, '$safeApiCallCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(ValorantRepository, 'ValorantRepository', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(ValorantRepositoryImpl, 'ValorantRepositoryImpl', classMeta, VOID, [ValorantRepository], VOID, VOID, VOID, [0, 1]);
  setMetadataFor(AgentGroupUI, 'AgentGroupUI', classMeta);
  setMetadataFor(AgentUI, 'AgentUI', classMeta);
  setMetadataFor(AbilityUI, 'AbilityUI', classMeta);
  setMetadataFor(RoleUI, 'RoleUI', classMeta);
  setMetadataFor($invokeCOROUTINE$2, '$invokeCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor(GetAgentsUseCase, 'GetAgentsUseCase', classMeta, VOID, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(AgentsScreenModel$getAgents$slambda, 'AgentsScreenModel$getAgents$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(AgentsScreenModel, 'AgentsScreenModel', classMeta, KMMViewModel);
  setMetadataFor(Loading, 'Loading', objectMeta);
  setMetadataFor(Empty, 'Empty', objectMeta);
  setMetadataFor(Content, 'Content', classMeta);
  setMetadataFor(ShowError, 'ShowError', classMeta);
  setMetadataFor(ValorantColors, 'ValorantColors', classMeta);
  setMetadataFor(NavColors, 'NavColors', classMeta);
  setMetadataFor(ValorantTypography, 'ValorantTypography', classMeta, VOID, VOID, ValorantTypography);
  //endregion
  function App(viewModel, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1u(876278437);
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
    $composer_1.a1s(1157296644);
    sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_1.s1j(dispatchReceiver);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.m1t();
    var tmp_0;
    if (invalid ? true : it === Companion_getInstance().s1m_1) {
      // Inline function 'com.canerture.androidhub.App.<anonymous>.<anonymous>' call
      var value = ComposableLambda$invoke$ref(dispatchReceiver);
      $composer_1.s1t(value);
      tmp_0 = value;
    } else {
      tmp_0 = it;
    }
    var tmp_1 = tmp_0;
    var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    $composer_1.b1s();
    ValorantTheme(false, tmp0, $composer_0, 48, 1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_safe_receiver = $composer_0.d1u();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.c1z(App$lambda_0(viewModel, $changed));
    }
  }
  function App$lambda($viewModel) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.v1r()) {
        if (isTraceInProgress()) {
          traceEventStart(1565823423, $changed, -1, 'com.canerture.androidhub.App.<anonymous> (App.kt:14)');
        }
        AgentsScreen($viewModel, $composer_0, 8);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.m1m();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.t1r(p0, p1);
    };
  }
  function App$lambda_0($viewModel, $$changed) {
    return function ($composer, $force) {
      App($viewModel, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.canerture.androidhub.data.model.Ability', this, 4);
    tmp0_serialDesc.k8m('description', false);
    tmp0_serialDesc.k8m('displayIcon', false);
    tmp0_serialDesc.k8m('displayName', false);
    tmp0_serialDesc.k8m('slot', false);
    this.lac_1 = tmp0_serialDesc;
  }
  protoOf($serializer).i8c = function () {
    return this.lac_1;
  };
  protoOf($serializer).m8m = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  protoOf($serializer).k8c = function (decoder) {
    var tmp0_desc = this.lac_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.h8f(tmp0_desc);
    if (tmp8_input.x8f()) {
      tmp4_local0 = tmp8_input.v8f(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.v8f(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.v8f(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.v8f(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.y8f(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.v8f(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.v8f(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.v8f(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.v8f(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.i8f(tmp0_desc);
    return Ability_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer).mac = function (encoder, value) {
    var tmp0_desc = this.lac_1;
    var tmp1_output = encoder.h8f(tmp0_desc);
    tmp1_output.z8g(tmp0_desc, 0, StringSerializer_getInstance(), value.nac_1);
    tmp1_output.z8g(tmp0_desc, 1, StringSerializer_getInstance(), value.oac_1);
    tmp1_output.z8g(tmp0_desc, 2, StringSerializer_getInstance(), value.pac_1);
    tmp1_output.z8g(tmp0_desc, 3, StringSerializer_getInstance(), value.qac_1);
    tmp1_output.i8f(tmp0_desc);
  };
  protoOf($serializer).j8c = function (encoder, value) {
    return this.mac(encoder, value instanceof Ability ? value : THROW_CCE());
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function Ability_init_$Init$(seen1, description, displayIcon, displayName, slot, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen1))) {
      throwMissingFieldException(seen1, 15, $serializer_getInstance().lac_1);
    }
    $this.nac_1 = description;
    $this.oac_1 = displayIcon;
    $this.pac_1 = displayName;
    $this.qac_1 = slot;
    return $this;
  }
  function Ability_init_$Create$(seen1, description, displayIcon, displayName, slot, serializationConstructorMarker) {
    return Ability_init_$Init$(seen1, description, displayIcon, displayName, slot, serializationConstructorMarker, objectCreate(protoOf(Ability)));
  }
  function Ability() {
  }
  protoOf(Ability).toString = function () {
    return 'Ability(description=' + this.nac_1 + ', displayIcon=' + this.oac_1 + ', displayName=' + this.pac_1 + ', slot=' + this.qac_1 + ')';
  };
  protoOf(Ability).hashCode = function () {
    var result = this.nac_1 == null ? 0 : getStringHashCode(this.nac_1);
    result = imul(result, 31) + (this.oac_1 == null ? 0 : getStringHashCode(this.oac_1)) | 0;
    result = imul(result, 31) + (this.pac_1 == null ? 0 : getStringHashCode(this.pac_1)) | 0;
    result = imul(result, 31) + (this.qac_1 == null ? 0 : getStringHashCode(this.qac_1)) | 0;
    return result;
  };
  protoOf(Ability).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Ability))
      return false;
    var tmp0_other_with_cast = other instanceof Ability ? other : THROW_CCE();
    if (!(this.nac_1 == tmp0_other_with_cast.nac_1))
      return false;
    if (!(this.oac_1 == tmp0_other_with_cast.oac_1))
      return false;
    if (!(this.pac_1 == tmp0_other_with_cast.pac_1))
      return false;
    if (!(this.qac_1 == tmp0_other_with_cast.qac_1))
      return false;
    return true;
  };
  function Companion() {
    Companion_instance_0 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.rac_1 = [new ArrayListSerializer($serializer_getInstance()), null, null, null, null, null, null, null];
  }
  var Companion_instance_0;
  function Companion_getInstance_3() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.canerture.androidhub.data.model.Agent', this, 8);
    tmp0_serialDesc.k8m('abilities', false);
    tmp0_serialDesc.k8m('description', false);
    tmp0_serialDesc.k8m('displayName', false);
    tmp0_serialDesc.k8m('fullPortrait', false);
    tmp0_serialDesc.k8m('fullPortraitV2', false);
    tmp0_serialDesc.k8m('role', false);
    tmp0_serialDesc.k8m('uuid', false);
    tmp0_serialDesc.k8m('background', false);
    this.sac_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).i8c = function () {
    return this.sac_1;
  };
  protoOf($serializer_0).m8m = function () {
    var tmp0_cached = Companion_getInstance_3().rac_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0]), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_1()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  protoOf($serializer_0).k8c = function (decoder) {
    var tmp0_desc = this.sac_1;
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
    var tmp12_input = decoder.h8f(tmp0_desc);
    var tmp13_cached = Companion_getInstance_3().rac_1;
    if (tmp12_input.x8f()) {
      tmp4_local0 = tmp12_input.v8f(tmp0_desc, 0, tmp13_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.v8f(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.v8f(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.v8f(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.v8f(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.v8f(tmp0_desc, 5, $serializer_getInstance_1(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.v8f(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp12_input.v8f(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp12_input.y8f(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp12_input.v8f(tmp0_desc, 0, tmp13_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.v8f(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.v8f(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.v8f(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.v8f(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.v8f(tmp0_desc, 5, $serializer_getInstance_1(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.v8f(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp12_input.v8f(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp12_input.i8f(tmp0_desc);
    return Agent_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, null);
  };
  protoOf($serializer_0).tac = function (encoder, value) {
    var tmp0_desc = this.sac_1;
    var tmp1_output = encoder.h8f(tmp0_desc);
    var tmp2_cached = Companion_getInstance_3().rac_1;
    tmp1_output.z8g(tmp0_desc, 0, tmp2_cached[0], value.uac_1);
    tmp1_output.z8g(tmp0_desc, 1, StringSerializer_getInstance(), value.vac_1);
    tmp1_output.z8g(tmp0_desc, 2, StringSerializer_getInstance(), value.wac_1);
    tmp1_output.z8g(tmp0_desc, 3, StringSerializer_getInstance(), value.xac_1);
    tmp1_output.z8g(tmp0_desc, 4, StringSerializer_getInstance(), value.yac_1);
    tmp1_output.z8g(tmp0_desc, 5, $serializer_getInstance_1(), value.zac_1);
    tmp1_output.z8g(tmp0_desc, 6, StringSerializer_getInstance(), value.aad_1);
    tmp1_output.z8g(tmp0_desc, 7, StringSerializer_getInstance(), value.bad_1);
    tmp1_output.i8f(tmp0_desc);
  };
  protoOf($serializer_0).j8c = function (encoder, value) {
    return this.tac(encoder, value instanceof Agent ? value : THROW_CCE());
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function Agent_init_$Init$(seen1, abilities, description, displayName, fullPortrait, fullPortraitV2, role, id, background, serializationConstructorMarker, $this) {
    if (!(255 === (255 & seen1))) {
      throwMissingFieldException(seen1, 255, $serializer_getInstance_0().sac_1);
    }
    $this.uac_1 = abilities;
    $this.vac_1 = description;
    $this.wac_1 = displayName;
    $this.xac_1 = fullPortrait;
    $this.yac_1 = fullPortraitV2;
    $this.zac_1 = role;
    $this.aad_1 = id;
    $this.bad_1 = background;
    return $this;
  }
  function Agent_init_$Create$(seen1, abilities, description, displayName, fullPortrait, fullPortraitV2, role, id, background, serializationConstructorMarker) {
    return Agent_init_$Init$(seen1, abilities, description, displayName, fullPortrait, fullPortraitV2, role, id, background, serializationConstructorMarker, objectCreate(protoOf(Agent)));
  }
  function Agent(abilities, description, displayName, fullPortrait, fullPortraitV2, role, id, background) {
    Companion_getInstance_3();
    this.uac_1 = abilities;
    this.vac_1 = description;
    this.wac_1 = displayName;
    this.xac_1 = fullPortrait;
    this.yac_1 = fullPortraitV2;
    this.zac_1 = role;
    this.aad_1 = id;
    this.bad_1 = background;
  }
  protoOf(Agent).toString = function () {
    return 'Agent(abilities=' + this.uac_1 + ', description=' + this.vac_1 + ', displayName=' + this.wac_1 + ', fullPortrait=' + this.xac_1 + ', fullPortraitV2=' + this.yac_1 + ', role=' + this.zac_1 + ', id=' + this.aad_1 + ', background=' + this.bad_1 + ')';
  };
  protoOf(Agent).hashCode = function () {
    var result = this.uac_1 == null ? 0 : hashCode(this.uac_1);
    result = imul(result, 31) + (this.vac_1 == null ? 0 : getStringHashCode(this.vac_1)) | 0;
    result = imul(result, 31) + (this.wac_1 == null ? 0 : getStringHashCode(this.wac_1)) | 0;
    result = imul(result, 31) + (this.xac_1 == null ? 0 : getStringHashCode(this.xac_1)) | 0;
    result = imul(result, 31) + (this.yac_1 == null ? 0 : getStringHashCode(this.yac_1)) | 0;
    result = imul(result, 31) + (this.zac_1 == null ? 0 : this.zac_1.hashCode()) | 0;
    result = imul(result, 31) + (this.aad_1 == null ? 0 : getStringHashCode(this.aad_1)) | 0;
    result = imul(result, 31) + (this.bad_1 == null ? 0 : getStringHashCode(this.bad_1)) | 0;
    return result;
  };
  protoOf(Agent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Agent))
      return false;
    var tmp0_other_with_cast = other instanceof Agent ? other : THROW_CCE();
    if (!equals(this.uac_1, tmp0_other_with_cast.uac_1))
      return false;
    if (!(this.vac_1 == tmp0_other_with_cast.vac_1))
      return false;
    if (!(this.wac_1 == tmp0_other_with_cast.wac_1))
      return false;
    if (!(this.xac_1 == tmp0_other_with_cast.xac_1))
      return false;
    if (!(this.yac_1 == tmp0_other_with_cast.yac_1))
      return false;
    if (!equals(this.zac_1, tmp0_other_with_cast.zac_1))
      return false;
    if (!(this.aad_1 == tmp0_other_with_cast.aad_1))
      return false;
    if (!(this.bad_1 == tmp0_other_with_cast.bad_1))
      return false;
    return true;
  };
  function $serializer_init_$Init$(typeSerial0, $this) {
    $serializer_1.call($this);
    $this.dad_1 = typeSerial0;
    return $this;
  }
  function $serializer_init_$Create$(typeSerial0) {
    return $serializer_init_$Init$(typeSerial0, objectCreate(protoOf($serializer_1)));
  }
  function Companion_0() {
    Companion_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.canerture.androidhub.data.model.BaseResponse', null, 3);
    tmp0_serialDesc.k8m('status', true);
    tmp0_serialDesc.k8m('error', true);
    tmp0_serialDesc.k8m('data', true);
    this.ead_1 = tmp0_serialDesc;
  }
  protoOf(Companion_0).fad = function (typeSerial0) {
    return $serializer_init_$Create$(typeSerial0);
  };
  protoOf(Companion_0).x8m = function (typeParamsSerializers) {
    return this.fad(typeParamsSerializers[0]);
  };
  var Companion_instance_1;
  function Companion_getInstance_4() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function $serializer_1() {
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.canerture.androidhub.data.model.BaseResponse', this, 3);
    tmp0_serialDesc.k8m('status', true);
    tmp0_serialDesc.k8m('error', true);
    tmp0_serialDesc.k8m('data', true);
    this.cad_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).i8c = function () {
    return this.cad_1;
  };
  protoOf($serializer_1).m8m = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(this.dad_1)];
  };
  protoOf($serializer_1).k8c = function (decoder) {
    var tmp0_desc = this.cad_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.h8f(tmp0_desc);
    if (tmp7_input.x8f()) {
      tmp4_local0 = tmp7_input.v8f(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.v8f(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.v8f(tmp0_desc, 2, this.dad_1, tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.y8f(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.v8f(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.v8f(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.v8f(tmp0_desc, 2, this.dad_1, tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.i8f(tmp0_desc);
    return BaseResponse_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_1).gad = function (encoder, value) {
    var tmp0_desc = this.cad_1;
    var tmp1_output = encoder.h8f(tmp0_desc);
    if (tmp1_output.d8h(tmp0_desc, 0) ? true : !(value.had_1 == null)) {
      tmp1_output.z8g(tmp0_desc, 0, IntSerializer_getInstance(), value.had_1);
    }
    if (tmp1_output.d8h(tmp0_desc, 1) ? true : !(value.iad_1 == null)) {
      tmp1_output.z8g(tmp0_desc, 1, StringSerializer_getInstance(), value.iad_1);
    }
    if (tmp1_output.d8h(tmp0_desc, 2) ? true : !(value.jad_1 == null)) {
      tmp1_output.z8g(tmp0_desc, 2, this.dad_1, value.jad_1);
    }
    tmp1_output.i8f(tmp0_desc);
  };
  protoOf($serializer_1).j8c = function (encoder, value) {
    return this.gad(encoder, value instanceof BaseResponse ? value : THROW_CCE());
  };
  protoOf($serializer_1).n8m = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.dad_1];
  };
  function BaseResponse_init_$Init$(seen1, status, error, data, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen1))) {
      throwMissingFieldException(seen1, 0, Companion_getInstance_4().ead_1);
    }
    if (0 === (seen1 & 1))
      $this.had_1 = null;
    else
      $this.had_1 = status;
    if (0 === (seen1 & 2))
      $this.iad_1 = null;
    else
      $this.iad_1 = error;
    if (0 === (seen1 & 4))
      $this.jad_1 = null;
    else
      $this.jad_1 = data;
    return $this;
  }
  function BaseResponse_init_$Create$(seen1, status, error, data, serializationConstructorMarker) {
    return BaseResponse_init_$Init$(seen1, status, error, data, serializationConstructorMarker, objectCreate(protoOf(BaseResponse)));
  }
  function BaseResponse(status, error, data) {
    Companion_getInstance_4();
    status = status === VOID ? null : status;
    error = error === VOID ? null : error;
    data = data === VOID ? null : data;
    this.had_1 = status;
    this.iad_1 = error;
    this.jad_1 = data;
  }
  function $serializer_2() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.canerture.androidhub.data.model.Role', this, 2);
    tmp0_serialDesc.k8m('displayIcon', false);
    tmp0_serialDesc.k8m('displayName', false);
    this.kad_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).i8c = function () {
    return this.kad_1;
  };
  protoOf($serializer_2).m8m = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  protoOf($serializer_2).k8c = function (decoder) {
    var tmp0_desc = this.kad_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.h8f(tmp0_desc);
    if (tmp6_input.x8f()) {
      tmp4_local0 = tmp6_input.v8f(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.v8f(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.y8f(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.v8f(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.v8f(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.i8f(tmp0_desc);
    return Role_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_2).lad = function (encoder, value) {
    var tmp0_desc = this.kad_1;
    var tmp1_output = encoder.h8f(tmp0_desc);
    tmp1_output.z8g(tmp0_desc, 0, StringSerializer_getInstance(), value.mad_1);
    tmp1_output.z8g(tmp0_desc, 1, StringSerializer_getInstance(), value.nad_1);
    tmp1_output.i8f(tmp0_desc);
  };
  protoOf($serializer_2).j8c = function (encoder, value) {
    return this.lad(encoder, value instanceof Role ? value : THROW_CCE());
  };
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null)
      new $serializer_2();
    return $serializer_instance_1;
  }
  function Role_init_$Init$(seen1, displayIcon, displayName, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_1().kad_1);
    }
    $this.mad_1 = displayIcon;
    $this.nad_1 = displayName;
    return $this;
  }
  function Role_init_$Create$(seen1, displayIcon, displayName, serializationConstructorMarker) {
    return Role_init_$Init$(seen1, displayIcon, displayName, serializationConstructorMarker, objectCreate(protoOf(Role)));
  }
  function Role() {
  }
  protoOf(Role).toString = function () {
    return 'Role(displayIcon=' + this.mad_1 + ', displayName=' + this.nad_1 + ')';
  };
  protoOf(Role).hashCode = function () {
    var result = this.mad_1 == null ? 0 : getStringHashCode(this.mad_1);
    result = imul(result, 31) + (this.nad_1 == null ? 0 : getStringHashCode(this.nad_1)) | 0;
    return result;
  };
  protoOf(Role).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Role))
      return false;
    var tmp0_other_with_cast = other instanceof Role ? other : THROW_CCE();
    if (!(this.mad_1 == tmp0_other_with_cast.mad_1))
      return false;
    if (!(this.nad_1 == tmp0_other_with_cast.nad_1))
      return false;
    return true;
  };
  function KtorApi$client$lambda($this$HttpClient) {
    defaultRequest($this$HttpClient, KtorApi$client$lambda$lambda);
    var tmp = Plugin_getInstance();
    $this$HttpClient.g9e(tmp, KtorApi$client$lambda$lambda_0);
    return Unit_instance;
  }
  function KtorApi$client$lambda$lambda($this$defaultRequest) {
    contentType($this$defaultRequest, Application_getInstance().r7x_1);
    accept($this$defaultRequest, Application_getInstance().r7x_1);
    return Unit_instance;
  }
  function KtorApi$client$lambda$lambda_0($this$install) {
    json($this$install, Json(VOID, KtorApi$client$lambda$lambda$lambda));
    return Unit_instance;
  }
  function KtorApi$client$lambda$lambda$lambda($this$Json) {
    $this$Json.w90_1 = true;
    $this$Json.t90_1 = true;
    return Unit_instance;
  }
  function KtorApi() {
    var tmp = this;
    tmp.oad_1 = HttpClient(KtorApi$client$lambda);
  }
  function $getAgentsCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.xad_1 = _this__u8e3s4;
  }
  protoOf($getAgentsCOROUTINE$0).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 3;
            var tmp_0 = this;
            tmp_0.yad_1 = this.xad_1.oad_1;
            var tmp_1 = this;
            tmp_1.zad_1 = this.xad_1.iae_1 + '?isPlayableCharacter=true';
            var tmp_2 = this;
            tmp_2.aae_1 = this.yad_1;
            var tmp_3 = this;
            tmp_3.bae_1 = this.aae_1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.zad_1);
            tmp_4.cae_1 = this_0;
            this.cae_1.a9d_1 = Companion_getInstance_0().h83_1;
            var tmp_5 = this;
            tmp_5.dae_1 = this.bae_1;
            var tmp_6 = this;
            tmp_6.eae_1 = this.cae_1;
            this.ac_1 = 1;
            suspendResult = (new HttpStatement(this.eae_1, this.dae_1)).ba4(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.fae_1 = suspendResult;
            this.ac_1 = 2;
            var tmp_7 = this.fae_1.h9g();
            var tmp_8 = JsType_instance;
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

            suspendResult = tmp_7.k9f(typeInfoImpl(tmp_8, tmp_9, tmp_10), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult instanceof BaseResponse ? suspendResult : THROW_CCE();
          case 3:
            throw this.dc_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.bc_1 === 3) {
          throw e;
        } else {
          this.ac_1 = this.bc_1;
          this.dc_1 = e;
        }
      }
     while (true);
  };
  function ValorantService() {
    KtorApi.call(this);
    this.hae_1 = 'https://valorant-api.com/';
    this.iae_1 = this.hae_1 + 'v1/agents';
  }
  protoOf(ValorantService).jae = function ($completion) {
    var tmp = new $getAgentsCOROUTINE$0(this, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  function safeApiCall($this, call, $completion) {
    var tmp = new $safeApiCallCOROUTINE$1($this, call, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    var tmp_0 = tmp.mc();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  }
  function Companion_1() {
    this.vae_1 = 200;
  }
  var Companion_instance_2;
  function Companion_getInstance_5() {
    return Companion_instance_2;
  }
  function ValorantRepositoryImpl$getAgents$slambda(this$0, resultContinuation) {
    this.eaf_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ValorantRepositoryImpl$getAgents$slambda).faf = function ($completion) {
    var tmp = this.i48($completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(ValorantRepositoryImpl$getAgents$slambda).j48 = function ($completion) {
    return this.faf($completion);
  };
  protoOf(ValorantRepositoryImpl$getAgents$slambda).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 2;
            this.ac_1 = 1;
            suspendResult = this.eaf_1.gaf_1.jae(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.dc_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.bc_1 === 2) {
          throw e;
        } else {
          this.ac_1 = this.bc_1;
          this.dc_1 = e;
        }
      }
     while (true);
  };
  protoOf(ValorantRepositoryImpl$getAgents$slambda).i48 = function (completion) {
    return new ValorantRepositoryImpl$getAgents$slambda(this.eaf_1, completion);
  };
  function ValorantRepositoryImpl$getAgents$slambda_0(this$0, resultContinuation) {
    var i = new ValorantRepositoryImpl$getAgents$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.faf($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $safeApiCallCOROUTINE$1(_this__u8e3s4, call, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.sae_1 = _this__u8e3s4;
    this.tae_1 = call;
  }
  protoOf($safeApiCallCOROUTINE$1).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 3;
            this.bc_1 = 2;
            this.ac_1 = 1;
            suspendResult = this.tae_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var response = suspendResult;
            var tmp_0 = this;
            var tmp_1;
            if (response.had_1 === 200) {
              var value = response.jad_1;
              tmp_1 = _Result___init__impl__xyqfz8(value);
            } else {
              var exception = Exception_init_$Create$(toString(response.iad_1));
              tmp_1 = _Result___init__impl__xyqfz8(createFailure(exception));
            }

            tmp_0.uae_1 = tmp_1;
            this.bc_1 = 3;
            this.ac_1 = 4;
            continue $sm;
          case 2:
            this.bc_1 = 3;
            var tmp_2 = this.dc_1;
            if (tmp_2 instanceof Exception) {
              var e = this.dc_1;
              var tmp_3 = this;
              tmp_3.uae_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.ac_1 = 4;
              continue $sm;
            } else {
              throw this.dc_1;
            }

          case 3:
            throw this.dc_1;
          case 4:
            this.bc_1 = 3;
            return new Result(this.uae_1);
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.bc_1 === 3) {
          throw e_0;
        } else {
          this.ac_1 = this.bc_1;
          this.dc_1 = e_0;
        }
      }
     while (true);
  };
  function ValorantRepositoryImpl(valorantService) {
    this.gaf_1 = valorantService;
  }
  protoOf(ValorantRepositoryImpl).haf = function ($completion) {
    var tmp = safeApiCall(this, ValorantRepositoryImpl$getAgents$slambda_0(this, null), $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      return tmp;
    return tmp;
  };
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
  function dataModule$lambda($this$module) {
    _init_properties_Modules_kt__cej1lh();
    // Inline function 'org.koin.core.module.Module.single' call
    // Inline function 'org.koin.core.module._singleInstanceFactory' call
    var definition = dataModule$lambda$lambda;
    var scopeQualifier = Companion_getInstance_1().u79_1;
    // Inline function 'org.koin.core.definition._createDefinition' call
    var kind = Kind_Singleton_getInstance();
    var secondaryTypes = emptyList();
    var def = new BeanDefinition(scopeQualifier, getKClass(ValorantService), null, definition, kind, secondaryTypes);
    var factory = new SingleInstanceFactory(def);
    $this$module.z7a(factory);
    if (false ? true : $this$module.s7a_1) {
      $this$module.c7b(factory);
    }
    new KoinDefinition($this$module, factory);
    // Inline function 'org.koin.core.module.Module.single' call
    // Inline function 'org.koin.core.module._singleInstanceFactory' call
    var definition_0 = dataModule$lambda$lambda_0;
    var scopeQualifier_0 = Companion_getInstance_1().u79_1;
    // Inline function 'org.koin.core.definition._createDefinition' call
    var kind_0 = Kind_Singleton_getInstance();
    var secondaryTypes_0 = emptyList();
    var def_0 = new BeanDefinition(scopeQualifier_0, getKClass(ValorantRepository), null, definition_0, kind_0, secondaryTypes_0);
    var factory_0 = new SingleInstanceFactory(def_0);
    $this$module.z7a(factory_0);
    if (false ? true : $this$module.s7a_1) {
      $this$module.c7b(factory_0);
    }
    new KoinDefinition($this$module, factory_0);
    return Unit_instance;
  }
  function dataModule$lambda$lambda($this$single, it) {
    _init_properties_Modules_kt__cej1lh();
    return new ValorantService();
  }
  function dataModule$lambda$lambda_0($this$single, it) {
    _init_properties_Modules_kt__cej1lh();
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp$ret$0 = $this$single.a7c(getKClass(ValorantService), null, null);
    return new ValorantRepositoryImpl(tmp$ret$0);
  }
  function useCaseModule$lambda($this$module) {
    _init_properties_Modules_kt__cej1lh();
    // Inline function 'org.koin.core.module.dsl.factoryOf' call
    // Inline function 'org.koin.core.module.Module.factory' call
    // Inline function 'org.koin.core.module.Module.factory' call
    var definition = useCaseModule$lambda$lambda;
    // Inline function 'org.koin.core.module._factoryInstanceFactory' call
    var scopeQualifier = Companion_getInstance_1().u79_1;
    // Inline function 'org.koin.core.definition._createDefinition' call
    var kind = Kind_Factory_getInstance();
    var secondaryTypes = emptyList();
    var def = new BeanDefinition(scopeQualifier, getKClass(GetAgentsUseCase), null, definition, kind, secondaryTypes);
    var factory = new FactoryInstanceFactory(def);
    $this$module.z7a(factory);
    var tmp$ret$3 = new KoinDefinition($this$module, factory);
    onOptions(tmp$ret$3, null);
    return Unit_instance;
  }
  function useCaseModule$lambda$lambda($this$factory, it) {
    _init_properties_Modules_kt__cej1lh();
    // Inline function 'org.koin.core.module.dsl.new' call
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp$ret$0 = $this$factory.a7c(getKClass(ValorantRepository), null, null);
    return new GetAgentsUseCase(tmp$ret$0);
  }
  function initKoin$lambda($appDeclaration) {
    return function ($this$startKoin) {
      $this$startKoin.g79(get_sharedModules());
      $appDeclaration($this$startKoin);
      return Unit_instance;
    };
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
    var tmp0_iterator = agents.o();
    while (tmp0_iterator.d1()) {
      var element = tmp0_iterator.f1();
      // Inline function 'com.canerture.androidhub.domain.mapper.mapToAgentRoleUI.<anonymous>' call
      var key = element.oaf_1.jaf_1;
      // Inline function 'kotlin.collections.getOrPut' call
      var value = destination.x2(key);
      var tmp;
      if (value == null) {
        // Inline function 'kotlin.collections.groupByTo.<anonymous>' call
        var answer = ArrayList_init_$Create$();
        destination.n2(key, answer);
        tmp = answer;
      } else {
        tmp = value;
      }
      var list = tmp;
      list.a1(element);
    }
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$_0(destination.m());
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_0 = destination.m2().o();
    while (tmp0_iterator_0.d1()) {
      var item = tmp0_iterator_0.f1();
      // Inline function 'com.canerture.androidhub.domain.mapper.mapToAgentRoleUI.<anonymous>' call
      var tmp$ret$7 = new AgentGroupUI(item.p2(), first(item.q2()).oaf_1.iaf_1, item.q2());
      destination_0.a1(tmp$ret$7);
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
      var tmp0_iterator = _this__u8e3s4.o();
      while (tmp0_iterator.d1()) {
        var item = tmp0_iterator.f1();
        // Inline function 'com.canerture.androidhub.domain.mapper.mapToAgentUI.<anonymous>' call
        var tmp_0 = mapToAbilityUI(item.uac_1);
        // Inline function 'kotlin.text.orEmpty' call
        var tmp0_elvis_lhs = item.vac_1;
        var tmp_1 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        // Inline function 'kotlin.text.uppercase' call
        // Inline function 'kotlin.text.orEmpty' call
        var tmp0_elvis_lhs_0 = item.wac_1;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_2 = (tmp0_elvis_lhs_0 == null ? '' : tmp0_elvis_lhs_0).toUpperCase();
        var tmp0_elvis_lhs_1 = item.yac_1;
        var tmp_3;
        if (tmp0_elvis_lhs_1 == null) {
          // Inline function 'kotlin.text.orEmpty' call
          var tmp0_elvis_lhs_2 = item.xac_1;
          tmp_3 = tmp0_elvis_lhs_2 == null ? '' : tmp0_elvis_lhs_2;
        } else {
          tmp_3 = tmp0_elvis_lhs_1;
        }
        var tmp_4 = tmp_3;
        var tmp_5 = mapToRoleUI(item.zac_1);
        // Inline function 'kotlin.text.orEmpty' call
        var tmp0_elvis_lhs_3 = item.aad_1;
        var tmp_6 = tmp0_elvis_lhs_3 == null ? '' : tmp0_elvis_lhs_3;
        // Inline function 'kotlin.text.orEmpty' call
        var tmp0_elvis_lhs_4 = item.bad_1;
        var tmp$ret$6 = tmp0_elvis_lhs_4 == null ? '' : tmp0_elvis_lhs_4;
        var tmp$ret$7 = new AgentUI(tmp_0, tmp_1, tmp_2, tmp_4, tmp_5, tmp_6, tmp$ret$6);
        destination.a1(tmp$ret$7);
      }
      tmp = destination;
    }
    var tmp0_elvis_lhs_5 = tmp;
    return tmp0_elvis_lhs_5 == null ? emptyList() : tmp0_elvis_lhs_5;
  }
  function mapToRoleUI(_this__u8e3s4) {
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = _this__u8e3s4 == null ? null : _this__u8e3s4.mad_1;
    var tmp = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs_0 = _this__u8e3s4 == null ? null : _this__u8e3s4.nad_1;
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
      var tmp0_iterator = _this__u8e3s4.o();
      while (tmp0_iterator.d1()) {
        var item = tmp0_iterator.f1();
        // Inline function 'com.canerture.androidhub.domain.mapper.mapToAbilityUI.<anonymous>' call
        // Inline function 'kotlin.text.orEmpty' call
        var tmp0_elvis_lhs = item.nac_1;
        var tmp_0 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        // Inline function 'kotlin.text.orEmpty' call
        var tmp0_elvis_lhs_0 = item.oac_1;
        var tmp_1 = tmp0_elvis_lhs_0 == null ? '' : tmp0_elvis_lhs_0;
        // Inline function 'kotlin.text.orEmpty' call
        var tmp0_elvis_lhs_1 = item.pac_1;
        var tmp$ret$2 = tmp0_elvis_lhs_1 == null ? '' : tmp0_elvis_lhs_1;
        var tmp$ret$3 = new AbilityUI(tmp_0, tmp_1, tmp$ret$2);
        destination.a1(tmp$ret$3);
      }
      tmp = destination;
    }
    var tmp0_elvis_lhs_2 = tmp;
    return tmp0_elvis_lhs_2 == null ? emptyList() : tmp0_elvis_lhs_2;
  }
  function AgentGroupUI(role, roleIcon, agents) {
    this.raf_1 = role;
    this.saf_1 = roleIcon;
    this.taf_1 = agents;
  }
  protoOf(AgentGroupUI).toString = function () {
    return 'AgentGroupUI(role=' + this.raf_1 + ', roleIcon=' + this.saf_1 + ', agents=' + this.taf_1 + ')';
  };
  protoOf(AgentGroupUI).hashCode = function () {
    var result = getStringHashCode(this.raf_1);
    result = imul(result, 31) + getStringHashCode(this.saf_1) | 0;
    result = imul(result, 31) + hashCode(this.taf_1) | 0;
    return result;
  };
  protoOf(AgentGroupUI).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AgentGroupUI))
      return false;
    var tmp0_other_with_cast = other instanceof AgentGroupUI ? other : THROW_CCE();
    if (!(this.raf_1 === tmp0_other_with_cast.raf_1))
      return false;
    if (!(this.saf_1 === tmp0_other_with_cast.saf_1))
      return false;
    if (!equals(this.taf_1, tmp0_other_with_cast.taf_1))
      return false;
    return true;
  };
  function AgentUI(abilities, description, displayName, fullPortrait, role, id, background) {
    this.kaf_1 = abilities;
    this.laf_1 = description;
    this.maf_1 = displayName;
    this.naf_1 = fullPortrait;
    this.oaf_1 = role;
    this.paf_1 = id;
    this.qaf_1 = background;
  }
  protoOf(AgentUI).toString = function () {
    return 'AgentUI(abilities=' + this.kaf_1 + ', description=' + this.laf_1 + ', displayName=' + this.maf_1 + ', fullPortrait=' + this.naf_1 + ', role=' + this.oaf_1 + ', id=' + this.paf_1 + ', background=' + this.qaf_1 + ')';
  };
  protoOf(AgentUI).hashCode = function () {
    var result = hashCode(this.kaf_1);
    result = imul(result, 31) + getStringHashCode(this.laf_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.maf_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.naf_1) | 0;
    result = imul(result, 31) + this.oaf_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.paf_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.qaf_1) | 0;
    return result;
  };
  protoOf(AgentUI).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AgentUI))
      return false;
    var tmp0_other_with_cast = other instanceof AgentUI ? other : THROW_CCE();
    if (!equals(this.kaf_1, tmp0_other_with_cast.kaf_1))
      return false;
    if (!(this.laf_1 === tmp0_other_with_cast.laf_1))
      return false;
    if (!(this.maf_1 === tmp0_other_with_cast.maf_1))
      return false;
    if (!(this.naf_1 === tmp0_other_with_cast.naf_1))
      return false;
    if (!this.oaf_1.equals(tmp0_other_with_cast.oaf_1))
      return false;
    if (!(this.paf_1 === tmp0_other_with_cast.paf_1))
      return false;
    if (!(this.qaf_1 === tmp0_other_with_cast.qaf_1))
      return false;
    return true;
  };
  function AbilityUI(description, displayIcon, displayName) {
    this.uaf_1 = description;
    this.vaf_1 = displayIcon;
    this.waf_1 = displayName;
  }
  protoOf(AbilityUI).toString = function () {
    return 'AbilityUI(description=' + this.uaf_1 + ', displayIcon=' + this.vaf_1 + ', displayName=' + this.waf_1 + ')';
  };
  protoOf(AbilityUI).hashCode = function () {
    var result = getStringHashCode(this.uaf_1);
    result = imul(result, 31) + getStringHashCode(this.vaf_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.waf_1) | 0;
    return result;
  };
  protoOf(AbilityUI).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AbilityUI))
      return false;
    var tmp0_other_with_cast = other instanceof AbilityUI ? other : THROW_CCE();
    if (!(this.uaf_1 === tmp0_other_with_cast.uaf_1))
      return false;
    if (!(this.vaf_1 === tmp0_other_with_cast.vaf_1))
      return false;
    if (!(this.waf_1 === tmp0_other_with_cast.waf_1))
      return false;
    return true;
  };
  function RoleUI(displayIcon, displayName) {
    this.iaf_1 = displayIcon;
    this.jaf_1 = displayName;
  }
  protoOf(RoleUI).toString = function () {
    return 'RoleUI(displayIcon=' + this.iaf_1 + ', displayName=' + this.jaf_1 + ')';
  };
  protoOf(RoleUI).hashCode = function () {
    var result = getStringHashCode(this.iaf_1);
    result = imul(result, 31) + getStringHashCode(this.jaf_1) | 0;
    return result;
  };
  protoOf(RoleUI).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RoleUI))
      return false;
    var tmp0_other_with_cast = other instanceof RoleUI ? other : THROW_CCE();
    if (!(this.iaf_1 === tmp0_other_with_cast.iaf_1))
      return false;
    if (!(this.jaf_1 === tmp0_other_with_cast.jaf_1))
      return false;
    return true;
  };
  function ValorantRepository() {
  }
  function $invokeCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.fag_1 = _this__u8e3s4;
  }
  protoOf($invokeCOROUTINE$2).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 3;
            this.ac_1 = 1;
            suspendResult = this.fag_1.gag_1.haf(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.ac_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.si_1;
            suspendResult = new Result(unboxed);
            this.ac_1 = 2;
            continue $sm;
          case 2:
            var this_0 = suspendResult.si_1;
            var tmp_0;
            if (_Result___get_isSuccess__impl__sndoy8(this_0)) {
              var tmp_1 = _Result___get_value__impl__bjfvqg(this_0);
              var it = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
              var value = mapToAgentRoleUI(it);
              tmp_0 = _Result___init__impl__xyqfz8(value);
            } else {
              tmp_0 = _Result___init__impl__xyqfz8(_Result___get_value__impl__bjfvqg(this_0));
            }

            return new Result(tmp_0);
          case 3:
            throw this.dc_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.bc_1 === 3) {
          throw e;
        } else {
          this.ac_1 = this.bc_1;
          this.dc_1 = e;
        }
      }
     while (true);
  };
  function GetAgentsUseCase(valorantRepository) {
    this.gag_1 = valorantRepository;
  }
  protoOf(GetAgentsUseCase).hag = function ($completion) {
    var tmp = new $invokeCOROUTINE$2(this, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    var tmp_0 = tmp.mc();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  function AgentsScreen(viewModel, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1u(1964399077);
    if (isTraceInProgress()) {
      traceEventStart(1964399077, $changed, -1, 'com.canerture.androidhub.presentation.agents.AgentsScreen (AgentsScreen.kt:9)');
    }
    var state = collectAsState(viewModel.lag_1, null, $composer_0, 8, 1).q2();
    viewModel.mag();
    if (equals(state, Loading_instance)) {
      $composer_0.a1s(2134632093);
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text('Loading', null, tmp, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, null, $composer_0, 6, 0, 131070);
      $composer_0.b1s();
    } else {
      if (equals(state, Empty_instance)) {
        $composer_0.a1s(2134632138);
        var tmp_4 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_5 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_6 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_7 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_8 = _TextOverflow___init__impl__obguoe(0);
        Text('Empty', null, tmp_4, tmp_5, null, null, null, tmp_6, null, null, tmp_7, tmp_8, false, 0, 0, null, null, $composer_0, 6, 0, 131070);
        $composer_0.b1s();
      } else {
        if (state instanceof Content) {
          $composer_0.a1s(2134632187);
          var tmp_9 = toString_0(state.oag_1);
          var tmp_10 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_11 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_12 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_13 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_14 = _TextOverflow___init__impl__obguoe(0);
          Text(tmp_9, null, tmp_10, tmp_11, null, null, null, tmp_12, null, null, tmp_13, tmp_14, false, 0, 0, null, null, $composer_0, 0, 0, 131070);
          println(state.oag_1);
          $composer_0.b1s();
        } else {
          if (state instanceof ShowError) {
            $composer_0.a1s(2134632312);
            // Inline function 'kotlin.text.orEmpty' call
            var tmp0_elvis_lhs = state.nag_1;
            var tmp_15 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
            var tmp_16 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
            var tmp_17 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
            var tmp_18 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
            var tmp_19 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
            var tmp_20 = _TextOverflow___init__impl__obguoe(0);
            Text(tmp_15, null, tmp_16, tmp_17, null, null, null, tmp_18, null, null, tmp_19, tmp_20, false, 0, 0, null, null, $composer_0, 0, 0, 131070);
            $composer_0.b1s();
          } else {
            $composer_0.a1s(2134632347);
            $composer_0.b1s();
          }
        }
      }
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_safe_receiver = $composer_0.d1u();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.c1z(AgentsScreen$lambda(viewModel, $changed));
    }
  }
  function AgentsScreen$lambda($viewModel, $$changed) {
    return function ($composer, $force) {
      AgentsScreen($viewModel, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function AgentsScreenModel$getAgents$slambda$lambda($this$setState) {
    return Empty_instance;
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
  function setState($this, reducer) {
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.update' call
      var this_0 = $this.kag_1;
      while (true) {
        var prevValue = this_0.q2();
        // Inline function 'com.canerture.androidhub.presentation.agents.AgentsScreenModel.setState.<anonymous>' call
        var nextValue = reducer(prevValue);
        if (this_0.e1a(prevValue, nextValue)) {
          break $l$block;
        }
      }
    }
  }
  function AgentsScreenModel$getAgents$slambda(this$0, resultContinuation) {
    this.xag_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AgentsScreenModel$getAgents$slambda).j20 = function ($this$launch, $completion) {
    var tmp = this.k20($this$launch, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(AgentsScreenModel$getAgents$slambda).yc = function (p1, $completion) {
    return this.j20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AgentsScreenModel$getAgents$slambda).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 3;
            this.ac_1 = 1;
            suspendResult = this.xag_1.jag_1.hag(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.ac_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.si_1;
            suspendResult = new Result(unboxed);
            this.ac_1 = 2;
            continue $sm;
          case 2:
            var this_0 = suspendResult.si_1;
            if (_Result___get_isSuccess__impl__sndoy8(this_0)) {
              var tmp_0 = _Result___get_value__impl__bjfvqg(this_0);
              var it = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
              if (it.u()) {
                setState(this.xag_1, AgentsScreenModel$getAgents$slambda$lambda);
              } else {
                setState(this.xag_1, AgentsScreenModel$getAgents$slambda$lambda_0(it));
              }
            }

            var tmp0_safe_receiver = Result__exceptionOrNull_impl_p6xea9(this_0);
            if (tmp0_safe_receiver == null)
              null;
            else {
              setState(this.xag_1, AgentsScreenModel$getAgents$slambda$lambda_1(tmp0_safe_receiver));
            }

            return Unit_instance;
          case 3:
            throw this.dc_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.bc_1 === 3) {
          throw e;
        } else {
          this.ac_1 = this.bc_1;
          this.dc_1 = e;
        }
      }
     while (true);
  };
  protoOf(AgentsScreenModel$getAgents$slambda).k20 = function ($this$launch, completion) {
    var i = new AgentsScreenModel$getAgents$slambda(this.xag_1, completion);
    i.yag_1 = $this$launch;
    return i;
  };
  function AgentsScreenModel$getAgents$slambda_0(this$0, resultContinuation) {
    var i = new AgentsScreenModel$getAgents$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.j20($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AgentsScreenModel(getAgentsUseCase) {
    KMMViewModel.call(this);
    this.jag_1 = getAgentsUseCase;
    this.kag_1 = MutableStateFlow(Loading_instance);
    this.lag_1 = asStateFlow(this.kag_1);
  }
  protoOf(AgentsScreenModel).mag = function () {
    var tmp = get_coroutineScope(this.g78_1);
    launch(tmp, VOID, VOID, AgentsScreenModel$getAgents$slambda_0(this, null));
  };
  function Loading() {
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
    return Loading_instance;
  }
  function Empty() {
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
    return Empty_instance;
  }
  function Content(agents) {
    this.oag_1 = agents;
  }
  protoOf(Content).toString = function () {
    return 'Content(agents=' + this.oag_1 + ')';
  };
  protoOf(Content).hashCode = function () {
    return hashCode(this.oag_1);
  };
  protoOf(Content).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Content))
      return false;
    var tmp0_other_with_cast = other instanceof Content ? other : THROW_CCE();
    if (!equals(this.oag_1, tmp0_other_with_cast.oag_1))
      return false;
    return true;
  };
  function ShowError(message) {
    this.nag_1 = message;
  }
  protoOf(ShowError).toString = function () {
    return 'ShowError(message=' + this.nag_1 + ')';
  };
  protoOf(ShowError).hashCode = function () {
    return this.nag_1 == null ? 0 : getStringHashCode(this.nag_1);
  };
  protoOf(ShowError).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ShowError))
      return false;
    var tmp0_other_with_cast = other instanceof ShowError ? other : THROW_CCE();
    if (!(this.nag_1 == tmp0_other_with_cast.nag_1))
      return false;
    return true;
  };
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
    this.zag_1 = primary;
    this.aah_1 = secondary;
    this.bah_1 = background;
    this.cah_1 = defaultWhite;
    this.dah_1 = defaultBlue;
    this.eah_1 = defaultLightBlue;
    this.fah_1 = defaultRed;
    this.gah_1 = navColors;
    this.hah_1 = cardBackground;
    this.iah_1 = cardBackgroundSecondary;
  }
  protoOf(ValorantColors).toString = function () {
    return 'ValorantColors(primary=' + new Color(this.zag_1) + ', secondary=' + new Color(this.aah_1) + ', background=' + new Color(this.bah_1) + ', defaultWhite=' + new Color(this.cah_1) + ', defaultBlue=' + new Color(this.dah_1) + ', defaultLightBlue=' + new Color(this.eah_1) + ', defaultRed=' + new Color(this.fah_1) + ', navColors=' + this.gah_1 + ', cardBackground=' + new Color(this.hah_1) + ', cardBackgroundSecondary=' + new Color(this.iah_1) + ')';
  };
  protoOf(ValorantColors).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.zag_1);
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.aah_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.bah_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.cah_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.dah_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.eah_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.fah_1) | 0;
    result = imul(result, 31) + this.gah_1.hashCode() | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.hah_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.iah_1) | 0;
    return result;
  };
  protoOf(ValorantColors).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ValorantColors))
      return false;
    var tmp0_other_with_cast = other instanceof ValorantColors ? other : THROW_CCE();
    if (!equals(this.zag_1, tmp0_other_with_cast.zag_1))
      return false;
    if (!equals(this.aah_1, tmp0_other_with_cast.aah_1))
      return false;
    if (!equals(this.bah_1, tmp0_other_with_cast.bah_1))
      return false;
    if (!equals(this.cah_1, tmp0_other_with_cast.cah_1))
      return false;
    if (!equals(this.dah_1, tmp0_other_with_cast.dah_1))
      return false;
    if (!equals(this.eah_1, tmp0_other_with_cast.eah_1))
      return false;
    if (!equals(this.fah_1, tmp0_other_with_cast.fah_1))
      return false;
    if (!this.gah_1.equals(tmp0_other_with_cast.gah_1))
      return false;
    if (!equals(this.hah_1, tmp0_other_with_cast.hah_1))
      return false;
    if (!equals(this.iah_1, tmp0_other_with_cast.iah_1))
      return false;
    return true;
  };
  function NavColors(containerColor, selectedIconColor, selectedTextColor, selectedIndicatorColor, unselectedIconColor, unselectedTextColor, disabledIconColor, disabledTextColor) {
    this.jah_1 = containerColor;
    this.kah_1 = selectedIconColor;
    this.lah_1 = selectedTextColor;
    this.mah_1 = selectedIndicatorColor;
    this.nah_1 = unselectedIconColor;
    this.oah_1 = unselectedTextColor;
    this.pah_1 = disabledIconColor;
    this.qah_1 = disabledTextColor;
  }
  protoOf(NavColors).toString = function () {
    return 'NavColors(containerColor=' + new Color(this.jah_1) + ', selectedIconColor=' + new Color(this.kah_1) + ', selectedTextColor=' + new Color(this.lah_1) + ', selectedIndicatorColor=' + new Color(this.mah_1) + ', unselectedIconColor=' + new Color(this.nah_1) + ', unselectedTextColor=' + new Color(this.oah_1) + ', disabledIconColor=' + new Color(this.pah_1) + ', disabledTextColor=' + new Color(this.qah_1) + ')';
  };
  protoOf(NavColors).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.jah_1);
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.kah_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.lah_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.mah_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.nah_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.oah_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.pah_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.qah_1) | 0;
    return result;
  };
  protoOf(NavColors).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NavColors))
      return false;
    var tmp0_other_with_cast = other instanceof NavColors ? other : THROW_CCE();
    if (!equals(this.jah_1, tmp0_other_with_cast.jah_1))
      return false;
    if (!equals(this.kah_1, tmp0_other_with_cast.kah_1))
      return false;
    if (!equals(this.lah_1, tmp0_other_with_cast.lah_1))
      return false;
    if (!equals(this.mah_1, tmp0_other_with_cast.mah_1))
      return false;
    if (!equals(this.nah_1, tmp0_other_with_cast.nah_1))
      return false;
    if (!equals(this.oah_1, tmp0_other_with_cast.oah_1))
      return false;
    if (!equals(this.pah_1, tmp0_other_with_cast.pah_1))
      return false;
    if (!equals(this.qah_1, tmp0_other_with_cast.qah_1))
      return false;
    return true;
  };
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
    $composer_0 = $composer_0.c1u(472868764);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ((($default & 1) === 0 ? $composer_0.a1t(darkTheme_0._v) : false) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.z1s(content) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.v1r()) {
      $composer_0.c1s();
      if (($changed & 1) === 0 ? true : $composer_0.g1s()) {
        if (!(($default & 1) === 0)) {
          darkTheme_0._v = isSystemInDarkTheme($composer_0, 0);
          $dirty = $dirty & -15;
        }
      } else {
        $composer_0.m1m();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
      }
      $composer_0.d1s();
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
      var tmp_0 = [get_LocalValorantColors().z1y(colors), get_LocalValorantTypography().z1y(new ValorantTypography())];
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.canerture.androidhub.presentation.theme.ValorantTheme.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 1767844572, true, ValorantTheme$lambda(content));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.a1s(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.s1j(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.m1t();
      var tmp_2;
      if (invalid ? true : it === Companion_getInstance().s1m_1) {
        // Inline function 'com.canerture.androidhub.presentation.theme.ValorantTheme.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_0(dispatchReceiver);
        $composer_1.s1t(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.b1s();
      CompositionLocalProvider(tmp_0, tmp0, $composer_0, 56);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m1m();
    }
    var tmp0_safe_receiver = $composer_0.d1u();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.c1z(ValorantTheme$lambda_0(darkTheme_0, content, $changed, $default));
    }
  }
  function LocalValorantColors$lambda() {
    _init_properties_Theme_kt__w31tqv();
    return new ValorantColors(Companion_getInstance_2().i3l_1, Companion_getInstance_2().i3l_1, Companion_getInstance_2().i3l_1, Companion_getInstance_2().i3l_1, Companion_getInstance_2().i3l_1, Companion_getInstance_2().i3l_1, Companion_getInstance_2().i3l_1, new NavColors(Companion_getInstance_2().i3l_1, Companion_getInstance_2().i3l_1, Companion_getInstance_2().i3l_1, Companion_getInstance_2().i3l_1, Companion_getInstance_2().i3l_1, Companion_getInstance_2().i3l_1, Companion_getInstance_2().i3l_1, Companion_getInstance_2().i3l_1), Companion_getInstance_2().i3l_1, Companion_getInstance_2().i3l_1);
  }
  function LocalValorantTypography$lambda() {
    _init_properties_Theme_kt__w31tqv();
    return new ValorantTypography();
  }
  function ValorantTheme$lambda($content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.v1r()) {
        if (isTraceInProgress()) {
          traceEventStart(1767844572, $changed, -1, 'com.canerture.androidhub.presentation.theme.ValorantTheme.<anonymous> (Theme.kt:24)');
        }
        $content($composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.m1m();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.t1r(p0, p1);
    };
  }
  function ValorantTheme$lambda_0($darkTheme, $content, $$changed, $$default) {
    return function ($composer, $force) {
      ValorantTheme($darkTheme._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var properties_initialized_Theme_kt_uwj6hl;
  function _init_properties_Theme_kt__w31tqv() {
    if (!properties_initialized_Theme_kt_uwj6hl) {
      properties_initialized_Theme_kt_uwj6hl = true;
      darkColors = new ValorantColors(get_White(), get_Blue(), get_Blue(), get_White(), get_Blue(), get_LightBlue(), get_Red(), new NavColors(get_LightBlue(), get_Red(), get_White(), Companion_getInstance_2().h3l_1, Color__copy$default_impl_ectz3s(get_White(), 0.3), Color__copy$default_impl_ectz3s(get_White(), 0.3), get_White(), get_White()), get_LightBlue(), get_LightBlue());
      lightColors = new ValorantColors(get_Blue(), get_White(), get_White(), get_White(), get_Blue(), get_LightBlue(), get_Red(), new NavColors(Color__copy$default_impl_ectz3s(get_LightBlue(), 0.05), get_Red(), get_Blue(), Companion_getInstance_2().h3l_1, Color__copy$default_impl_ectz3s(get_Blue(), 0.3), Color__copy$default_impl_ectz3s(get_Blue(), 0.3), Companion_getInstance_2().h3l_1, Companion_getInstance_2().h3l_1), Color__copy$default_impl_ectz3s(get_LightBlue(), 0.05), Color__copy$default_impl_ectz3s(get_LightBlue(), 0.1));
      LocalValorantColors = staticCompositionLocalOf(LocalValorantColors$lambda);
      LocalValorantTypography = staticCompositionLocalOf(LocalValorantTypography$lambda);
    }
  }
  function ValorantTypography() {
  }
  function main() {
    var koin = initKoin(main$lambda).d79_1;
    // Inline function 'org.koin.core.Koin.get' call
    // Inline function 'org.koin.core.scope.Scope.get' call
    var useCase = koin.j78_1.w78_1.a7c(getKClass(GetAgentsUseCase), null, null);
    var viewModel = new AgentsScreenModel(useCase);
    onWasmReady(main$lambda_0(viewModel));
  }
  function main$lambda($this$initKoin) {
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.t1r(p0, p1);
    };
  }
  function main$lambda$lambda($viewModel) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.v1r()) {
        if (isTraceInProgress()) {
          traceEventStart(-1587894689, $changed, -1, 'main.<anonymous>.<anonymous> (main.kt:15)');
        }
        App($viewModel, $composer_0, 8);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.m1m();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function main$lambda_0($viewModel) {
    return function () {
      CanvasBasedWindow(VOID, 'ComposeTarget', VOID, VOID, ComposableLambda$invoke$ref_1(composableLambdaInstance(-1587894689, true, main$lambda$lambda($viewModel))));
      return Unit_instance;
    };
  }
  //region block: post-declaration
  protoOf($serializer).n8m = typeParametersSerializers;
  protoOf($serializer_0).n8m = typeParametersSerializers;
  protoOf($serializer_2).n8m = typeParametersSerializers;
  //endregion
  //region block: init
  Companion_instance_2 = new Companion_1();
  Loading_instance = new Loading();
  Empty_instance = new Empty();
  //endregion
  main();
  return _;
}));

//# sourceMappingURL=AndroidHub-composeApp.js.map
