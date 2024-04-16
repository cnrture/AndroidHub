(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kobweb-frontend-browser-ext.js', './compose-multiplatform-core-compose-runtime-runtime.js', './html-html-core.js', './kobweb-common-client-server-internal.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-browser-ext.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./html-html-core.js'), require('./kobweb-common-client-server-internal.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-kobweb-core'.");
    }
    if (typeof this['kobweb-frontend-browser-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-core'. Its dependency 'kobweb-frontend-browser-ext' was not found. Please, check whether 'kobweb-frontend-browser-ext' is loaded prior to 'kobweb-frontend-kobweb-core'.");
    }
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-core'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-kobweb-core'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-core'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-kobweb-core'.");
    }
    if (typeof this['kobweb-common-client-server-internal'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-core'. Its dependency 'kobweb-common-client-server-internal' was not found. Please, check whether 'kobweb-common-client-server-internal' is loaded prior to 'kobweb-frontend-kobweb-core'.");
    }
    root['kobweb-frontend-kobweb-core'] = factory(typeof this['kobweb-frontend-kobweb-core'] === 'undefined' ? {} : this['kobweb-frontend-kobweb-core'], this['kotlin-kotlin-stdlib'], this['kobweb-frontend-browser-ext'], this['compose-multiplatform-core-compose-runtime-runtime'], this['html-html-core'], this['kobweb-common-client-server-internal']);
  }
}(this, function (_, kotlin_kotlin, kotlin_com_varabyte_kobweb_browser_ext, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_client_server_internal) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.f2;
  var charArrayOf = kotlin_kotlin.$_$.aa;
  var trimStart = kotlin_kotlin.$_$.ce;
  var get_http = kotlin_com_varabyte_kobweb_browser_ext.$_$.b;
  var Unit_getInstance = kotlin_kotlin.$_$.l4;
  var protoOf = kotlin_kotlin.$_$.ob;
  var VOID = kotlin_kotlin.$_$.e;
  var classMeta = kotlin_kotlin.$_$.ea;
  var setMetadataFor = kotlin_kotlin.$_$.pb;
  var KProperty1 = kotlin_kotlin.$_$.fc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ma;
  var KMutableProperty0 = kotlin_kotlin.$_$.cc;
  var KMutableProperty1 = kotlin_kotlin.$_$.dc;
  var lazy = kotlin_kotlin.$_$.qf;
  var THROW_CCE = kotlin_kotlin.$_$.ve;
  var Annotation = kotlin_kotlin.$_$.he;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var Style = kotlin_org_jetbrains_compose_html_html_core.$_$.e6;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.f5;
  var padding = kotlin_org_jetbrains_compose_html_html_core.$_$.c5;
  var margin = kotlin_org_jetbrains_compose_html_html_core.$_$.v4;
  var boxSizing = kotlin_org_jetbrains_compose_html_html_core.$_$.r3;
  var StyleSheet = kotlin_org_jetbrains_compose_html_html_core.$_$.g3;
  var StyleSheet_init_$Init$ = kotlin_org_jetbrains_compose_html_html_core.$_$.b;
  var objectMeta = kotlin_kotlin.$_$.nb;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.xf;
  var toString = kotlin_kotlin.$_$.rb;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.r1;
  var getValue = kotlin_kotlin.$_$.a7;
  var getStringHashCode = kotlin_kotlin.$_$.na;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var substringAfterLast = kotlin_kotlin.$_$.od;
  var plus = kotlin_kotlin.$_$.u7;
  var equals = kotlin_kotlin.$_$.ha;
  var hashCode = kotlin_kotlin.$_$.oa;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var interfaceMeta = kotlin_kotlin.$_$.qa;
  var A = kotlin_org_jetbrains_compose_html_html_core.$_$.n5;
  var THROW_IAE = kotlin_kotlin.$_$.we;
  var enumEntries = kotlin_kotlin.$_$.u9;
  var Enum = kotlin_kotlin.$_$.ke;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.d1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var charSequenceLength = kotlin_kotlin.$_$.da;
  var joinToString = kotlin_kotlin.$_$.e7;
  var objectCreate = kotlin_kotlin.$_$.mb;
  var removePrefix = kotlin_kotlin.$_$.ed;
  var startsWith = kotlin_kotlin.$_$.md;
  var drop = kotlin_kotlin.$_$.sc;
  var first = kotlin_kotlin.$_$.vc;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.t;
  var split = kotlin_kotlin.$_$.kd;
  var getOrNull = kotlin_kotlin.$_$.z6;
  var Exception = kotlin_kotlin.$_$.me;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.i1;
  var captureStack = kotlin_kotlin.$_$.z9;
  var substringAfterLast_0 = kotlin_kotlin.$_$.pd;
  var ensureNotNull = kotlin_kotlin.$_$.of;
  var isBlank = kotlin_kotlin.$_$.yc;
  var startsWith_0 = kotlin_kotlin.$_$.nd;
  var endsWith = kotlin_kotlin.$_$.tc;
  var dropLast = kotlin_kotlin.$_$.rc;
  var CoroutineImpl = kotlin_kotlin.$_$.q9;
  var SequenceScope = kotlin_kotlin.$_$.hc;
  var mutableListOf = kotlin_kotlin.$_$.s7;
  var removeFirst = kotlin_kotlin.$_$.b8;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.k;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.b9;
  var kebabCaseToCamelCase = kotlin_com_varabyte_kobweb_browser_ext.$_$.d;
  var replace = kotlin_kotlin.$_$.id;
  var contains = kotlin_kotlin.$_$.oc;
  var sequence = kotlin_kotlin.$_$.lc;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var get_lastIndex = kotlin_kotlin.$_$.h7;
  var PatternMapper_init_$Create$ = kotlin_com_varabyte_kobweb_client_server_internal.$_$.a;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var emptyMap = kotlin_kotlin.$_$.s6;
  var last = kotlin_kotlin.$_$.k7;
  var replace_0 = kotlin_kotlin.$_$.jd;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var Div = kotlin_org_jetbrains_compose_html_html_core.$_$.r5;
  var Text = kotlin_org_jetbrains_compose_html_html_core.$_$.g6;
  var SuspendFunction1 = kotlin_kotlin.$_$.r9;
  var substringBefore = kotlin_kotlin.$_$.td;
  var to = kotlin_kotlin.$_$.zf;
  var CompositionLocalProvider = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var listOf = kotlin_kotlin.$_$.n7;
  var removeSuffix = kotlin_kotlin.$_$.fd;
  var setOf = kotlin_kotlin.$_$.d8;
  var charSequenceGet = kotlin_kotlin.$_$.ca;
  var substringAfter = kotlin_kotlin.$_$.qd;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.d4;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.f;
  var toDuration = kotlin_kotlin.$_$.ge;
  var Companion_getInstance_1 = kotlin_com_varabyte_kobweb_browser_ext.$_$.k;
  var setInterval = kotlin_com_varabyte_kobweb_browser_ext.$_$.f;
  var toMutableMap = kotlin_kotlin.$_$.w8;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ApiFetcher, 'ApiFetcher', classMeta, VOID, VOID, VOID, VOID, VOID, [4, 5]);
  setMetadataFor(App, 'App', classMeta, VOID, [Annotation]);
  setMetadataFor(DefaultStyleSheet, 'DefaultStyleSheet', objectMeta, StyleSheet);
  setMetadataFor(AppGlobals, 'AppGlobals', objectMeta);
  setMetadataFor(Page, 'Page', classMeta, VOID, [Annotation]);
  setMetadataFor(RouteInfo, 'RouteInfo', classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(PageContext, 'PageContext', classMeta);
  setMetadataFor(InitKobwebContext, 'InitKobwebContext', classMeta);
  setMetadataFor(KobwebConfig, 'KobwebConfig', interfaceMeta);
  setMetadataFor(MutableKobwebConfig, 'MutableKobwebConfig', classMeta, VOID, [KobwebConfig], MutableKobwebConfig);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(OpenLinkStrategies, 'OpenLinkStrategies', interfaceMeta);
  setMetadataFor(MutableOpenLinkStrategies, 'MutableOpenLinkStrategies', classMeta, VOID, [OpenLinkStrategies], MutableOpenLinkStrategies);
  setMetadataFor(OpenLinkStrategy, 'OpenLinkStrategy', classMeta, Enum);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(Route, 'Route', classMeta);
  setMetadataFor(RouteException, 'RouteException', classMeta, Exception);
  setMetadataFor(RoutePrefix, 'RoutePrefix', interfaceMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta, VOID, [RoutePrefix]);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(RoutePrefixImpl, 'RoutePrefixImpl', classMeta, VOID, [RoutePrefix]);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(RouteTree$Node$_get_nodes_$slambda_9kqj3, 'RouteTree$Node$<get-nodes>$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(Node, 'Node', classMeta);
  setMetadataFor(RootNode, 'RootNode', classMeta, Node, VOID, RootNode);
  setMetadataFor(ChildNode, 'ChildNode', classMeta, Node);
  setMetadataFor(StaticNode, 'StaticNode', classMeta, ChildNode);
  setMetadataFor(DynamicNode, 'DynamicNode', classMeta, ChildNode);
  setMetadataFor(RouteTree, 'RouteTree', classMeta, VOID, VOID, RouteTree);
  setMetadataFor(PageData, 'PageData', classMeta);
  setMetadataFor(ComposableSingletons$RouteTreeKt, 'ComposableSingletons$RouteTreeKt', objectMeta);
  setMetadataFor(LegacyRouteRedirectStrategy, 'LegacyRouteRedirectStrategy', classMeta, Enum);
  setMetadataFor(Router, 'Router', classMeta, VOID, VOID, Router);
  setMetadataFor(RouteInterceptorScope, 'RouteInterceptorScope', classMeta);
  setMetadataFor(ComposableSingletons$RouterKt, 'ComposableSingletons$RouterKt', objectMeta);
  setMetadataFor(UpdateHistoryMode, 'UpdateHistoryMode', classMeta, Enum);
  //endregion
  function get_api(_this__u8e3s4) {
    _init_properties_ApiFetcher_kt__epxlpv();
    // Inline function 'kotlin.getValue' call
    var this_0 = api$delegate;
    api$factory();
    return this_0.get_value_j01efc_k$();
  }
  var api$delegate;
  function _get_window__ax0zxh($this) {
    return $this.window_1;
  }
  function toResource($this, apiPath, autoPrefix) {
    return prependIf(Companion_getInstance_5(), autoPrefix, '/api/' + trimStart(apiPath, charArrayOf([_Char___init__impl__6a9atx(47)])));
  }
  function ApiFetcher(window_0) {
    this.window_1 = window_0;
    this.logOnError$delegate_1 = logOnError$factory(get_http(this.window_1));
  }
  protoOf(ApiFetcher).set_logOnError_wi584t_k$ = function (_set____db54di) {
    var this_0 = this.logOnError$delegate_1;
    logOnError$factory_0();
    this_0.set(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(ApiFetcher).get_logOnError_4wpkhe_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.logOnError$delegate_1;
    logOnError$factory_1();
    return this_0.get();
  };
  protoOf(ApiFetcher).delete_e7furc_k$ = function (apiPath, headers, abortController, autoPrefix, $completion) {
    return get_http(this.window_1).delete_czyy2p_k$(toResource(this, apiPath, autoPrefix), headers, abortController, $completion);
  };
  protoOf(ApiFetcher).delete$default_5nl1op_k$ = function (apiPath, headers, abortController, autoPrefix, $completion, $super) {
    headers = headers === VOID ? null : headers;
    abortController = abortController === VOID ? null : abortController;
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    return $super === VOID ? this.delete_e7furc_k$(apiPath, headers, abortController, autoPrefix, $completion) : $super.delete_e7furc_k$.call(this, apiPath, headers, abortController, autoPrefix, $completion);
  };
  protoOf(ApiFetcher).tryDelete_vataru_k$ = function (apiPath, headers, abortController, autoPrefix, $completion) {
    return get_http(this.window_1).tryDelete_l20sgr_k$(toResource(this, apiPath, autoPrefix), headers, abortController, $completion);
  };
  protoOf(ApiFetcher).tryDelete$default_ric579_k$ = function (apiPath, headers, abortController, autoPrefix, $completion, $super) {
    headers = headers === VOID ? null : headers;
    abortController = abortController === VOID ? null : abortController;
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    return $super === VOID ? this.tryDelete_vataru_k$(apiPath, headers, abortController, autoPrefix, $completion) : $super.tryDelete_vataru_k$.call(this, apiPath, headers, abortController, autoPrefix, $completion);
  };
  protoOf(ApiFetcher).get_3u5zdv_k$ = function (apiPath, headers, abortController, autoPrefix, $completion) {
    return get_http(this.window_1).get_89f2h8_k$(toResource(this, apiPath, autoPrefix), headers, abortController, $completion);
  };
  protoOf(ApiFetcher).get$default_m5lv9o_k$ = function (apiPath, headers, abortController, autoPrefix, $completion, $super) {
    headers = headers === VOID ? null : headers;
    abortController = abortController === VOID ? null : abortController;
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    return $super === VOID ? this.get_3u5zdv_k$(apiPath, headers, abortController, autoPrefix, $completion) : $super.get_3u5zdv_k$.call(this, apiPath, headers, abortController, autoPrefix, $completion);
  };
  protoOf(ApiFetcher).tryGet_ooosld_k$ = function (apiPath, headers, abortController, autoPrefix, $completion) {
    return get_http(this.window_1).tryGet_34zl6u_k$(toResource(this, apiPath, autoPrefix), headers, abortController, $completion);
  };
  protoOf(ApiFetcher).tryGet$default_tg3lb4_k$ = function (apiPath, headers, abortController, autoPrefix, $completion, $super) {
    headers = headers === VOID ? null : headers;
    abortController = abortController === VOID ? null : abortController;
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    return $super === VOID ? this.tryGet_ooosld_k$(apiPath, headers, abortController, autoPrefix, $completion) : $super.tryGet_ooosld_k$.call(this, apiPath, headers, abortController, autoPrefix, $completion);
  };
  protoOf(ApiFetcher).head_5k21yl_k$ = function (apiPath, headers, abortController, autoPrefix, $completion) {
    return get_http(this.window_1).head_pjkk9i_k$(toResource(this, apiPath, autoPrefix), headers, abortController, $completion);
  };
  protoOf(ApiFetcher).head$default_tbzqwy_k$ = function (apiPath, headers, abortController, autoPrefix, $completion, $super) {
    headers = headers === VOID ? null : headers;
    abortController = abortController === VOID ? null : abortController;
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    return $super === VOID ? this.head_5k21yl_k$(apiPath, headers, abortController, autoPrefix, $completion) : $super.head_5k21yl_k$.call(this, apiPath, headers, abortController, autoPrefix, $completion);
  };
  protoOf(ApiFetcher).tryHead_kgw3xb_k$ = function (apiPath, headers, abortController, autoPrefix, $completion) {
    return get_http(this.window_1).tryHead_lpxy06_k$(toResource(this, apiPath, autoPrefix), headers, abortController, $completion);
  };
  protoOf(ApiFetcher).tryHead$default_edmj9c_k$ = function (apiPath, headers, abortController, autoPrefix, $completion, $super) {
    headers = headers === VOID ? null : headers;
    abortController = abortController === VOID ? null : abortController;
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    return $super === VOID ? this.tryHead_kgw3xb_k$(apiPath, headers, abortController, autoPrefix, $completion) : $super.tryHead_kgw3xb_k$.call(this, apiPath, headers, abortController, autoPrefix, $completion);
  };
  protoOf(ApiFetcher).options_xeix0r_k$ = function (apiPath, headers, abortController, autoPrefix, $completion) {
    return get_http(this.window_1).options_3iya98_k$(toResource(this, apiPath, autoPrefix), headers, abortController, $completion);
  };
  protoOf(ApiFetcher).options$default_sepn44_k$ = function (apiPath, headers, abortController, autoPrefix, $completion, $super) {
    headers = headers === VOID ? null : headers;
    abortController = abortController === VOID ? null : abortController;
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    return $super === VOID ? this.options_xeix0r_k$(apiPath, headers, abortController, autoPrefix, $completion) : $super.options_xeix0r_k$.call(this, apiPath, headers, abortController, autoPrefix, $completion);
  };
  protoOf(ApiFetcher).tryOptions_akrm61_k$ = function (apiPath, headers, abortController, autoPrefix, $completion) {
    return get_http(this.window_1).tryOptions_obw9j2_k$(toResource(this, apiPath, autoPrefix), headers, abortController, $completion);
  };
  protoOf(ApiFetcher).tryOptions$default_zcjx7c_k$ = function (apiPath, headers, abortController, autoPrefix, $completion, $super) {
    headers = headers === VOID ? null : headers;
    abortController = abortController === VOID ? null : abortController;
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    return $super === VOID ? this.tryOptions_akrm61_k$(apiPath, headers, abortController, autoPrefix, $completion) : $super.tryOptions_akrm61_k$.call(this, apiPath, headers, abortController, autoPrefix, $completion);
  };
  protoOf(ApiFetcher).patch_7hvlyc_k$ = function (apiPath, headers, body, abortController, autoPrefix, $completion) {
    return get_http(this.window_1).patch_cfzfvp_k$(toResource(this, apiPath, autoPrefix), headers, body, abortController, $completion);
  };
  protoOf(ApiFetcher).patch$default_ihejn2_k$ = function (apiPath, headers, body, abortController, autoPrefix, $completion, $super) {
    headers = headers === VOID ? null : headers;
    body = body === VOID ? null : body;
    abortController = abortController === VOID ? null : abortController;
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    return $super === VOID ? this.patch_7hvlyc_k$(apiPath, headers, body, abortController, autoPrefix, $completion) : $super.patch_7hvlyc_k$.call(this, apiPath, headers, body, abortController, autoPrefix, $completion);
  };
  protoOf(ApiFetcher).tryPatch_7fi0sy_k$ = function (apiPath, headers, body, abortController, autoPrefix, $completion) {
    return get_http(this.window_1).tryPatch_d2m29j_k$(toResource(this, apiPath, autoPrefix), headers, body, abortController, $completion);
  };
  protoOf(ApiFetcher).tryPatch$default_m4ivmi_k$ = function (apiPath, headers, body, abortController, autoPrefix, $completion, $super) {
    headers = headers === VOID ? null : headers;
    body = body === VOID ? null : body;
    abortController = abortController === VOID ? null : abortController;
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    return $super === VOID ? this.tryPatch_7fi0sy_k$(apiPath, headers, body, abortController, autoPrefix, $completion) : $super.tryPatch_7fi0sy_k$.call(this, apiPath, headers, body, abortController, autoPrefix, $completion);
  };
  protoOf(ApiFetcher).post_9dpbuk_k$ = function (apiPath, headers, body, abortController, autoPrefix, $completion) {
    return get_http(this.window_1).post_ghi243_k$(toResource(this, apiPath, autoPrefix), headers, body, abortController, $completion);
  };
  protoOf(ApiFetcher).post$default_83dwsm_k$ = function (apiPath, headers, body, abortController, autoPrefix, $completion, $super) {
    headers = headers === VOID ? null : headers;
    body = body === VOID ? null : body;
    abortController = abortController === VOID ? null : abortController;
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    return $super === VOID ? this.post_9dpbuk_k$(apiPath, headers, body, abortController, autoPrefix, $completion) : $super.post_9dpbuk_k$.call(this, apiPath, headers, body, abortController, autoPrefix, $completion);
  };
  protoOf(ApiFetcher).tryPost_21av4_k$ = function (apiPath, headers, body, abortController, autoPrefix, $completion) {
    return get_http(this.window_1).tryPost_2me7ol_k$(toResource(this, apiPath, autoPrefix), headers, body, abortController, $completion);
  };
  protoOf(ApiFetcher).tryPost$default_gns3yg_k$ = function (apiPath, headers, body, abortController, autoPrefix, $completion, $super) {
    headers = headers === VOID ? null : headers;
    body = body === VOID ? null : body;
    abortController = abortController === VOID ? null : abortController;
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    return $super === VOID ? this.tryPost_21av4_k$(apiPath, headers, body, abortController, autoPrefix, $completion) : $super.tryPost_21av4_k$.call(this, apiPath, headers, body, abortController, autoPrefix, $completion);
  };
  protoOf(ApiFetcher).put_gu8arv_k$ = function (apiPath, headers, body, abortController, autoPrefix, $completion) {
    return get_http(this.window_1).put_7rx0te_k$(toResource(this, apiPath, autoPrefix), headers, body, abortController, $completion);
  };
  protoOf(ApiFetcher).put$default_8ncdbp_k$ = function (apiPath, headers, body, abortController, autoPrefix, $completion, $super) {
    headers = headers === VOID ? null : headers;
    body = body === VOID ? null : body;
    abortController = abortController === VOID ? null : abortController;
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    return $super === VOID ? this.put_gu8arv_k$(apiPath, headers, body, abortController, autoPrefix, $completion) : $super.put_gu8arv_k$.call(this, apiPath, headers, body, abortController, autoPrefix, $completion);
  };
  protoOf(ApiFetcher).tryPut_vojdsp_k$ = function (apiPath, headers, body, abortController, autoPrefix, $completion) {
    return get_http(this.window_1).tryPut_nzvd26_k$(toResource(this, apiPath, autoPrefix), headers, body, abortController, $completion);
  };
  protoOf(ApiFetcher).tryPut$default_9j4ps1_k$ = function (apiPath, headers, body, abortController, autoPrefix, $completion, $super) {
    headers = headers === VOID ? null : headers;
    body = body === VOID ? null : body;
    abortController = abortController === VOID ? null : abortController;
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    return $super === VOID ? this.tryPut_vojdsp_k$(apiPath, headers, body, abortController, autoPrefix, $completion) : $super.tryPut_vojdsp_k$.call(this, apiPath, headers, body, abortController, autoPrefix, $completion);
  };
  function api$delegate$lambda() {
    _init_properties_ApiFetcher_kt__epxlpv();
    return new ApiFetcher(window);
  }
  function api$factory() {
    return getPropertyCallableRef('api', 1, KProperty1, function (receiver) {
      return get_api(receiver);
    }, null);
  }
  function logOnError$factory($b0) {
    return getPropertyCallableRef('logOnError', 0, KMutableProperty0, function () {
      return $b0.get_logOnError_4wpkhe_k$();
    }, function (value) {
      return $b0.set_logOnError_wi584t_k$(value);
    });
  }
  function logOnError$factory_0() {
    return getPropertyCallableRef('logOnError', 1, KMutableProperty1, function (receiver) {
      return receiver.get_logOnError_4wpkhe_k$();
    }, function (receiver, value) {
      return receiver.set_logOnError_wi584t_k$(value);
    });
  }
  function logOnError$factory_1() {
    return getPropertyCallableRef('logOnError', 1, KMutableProperty1, function (receiver) {
      return receiver.get_logOnError_4wpkhe_k$();
    }, function (receiver, value) {
      return receiver.set_logOnError_wi584t_k$(value);
    });
  }
  var properties_initialized_ApiFetcher_kt_nwc4x;
  function _init_properties_ApiFetcher_kt__epxlpv() {
    if (!properties_initialized_ApiFetcher_kt_nwc4x) {
      properties_initialized_ApiFetcher_kt_nwc4x = true;
      api$delegate = lazy(api$delegate$lambda);
    }
  }
  function App() {
  }
  protoOf(App).equals = function (other) {
    if (!(other instanceof App))
      return false;
    other instanceof App || THROW_CCE();
    return true;
  };
  protoOf(App).hashCode = function () {
    return 0;
  };
  protoOf(App).toString = function () {
    return '@com.varabyte.kobweb.core.App()';
  };
  function KobwebApp(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-728368768);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-728368768, $dirty, -1, 'com.varabyte.kobweb.core.KobwebApp (App.kt:39)');
      }
      // Inline function 'org.jetbrains.compose.web.css.Style' call
      var styleSheet = DefaultStyleSheet_getInstance();
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-1196466140);
      Style(null, styleSheet.get_cssRules_jdoznh_k$(), $composer_1, 0, 1);
      $composer_1.endReplaceableGroup_ern0ak_k$();
      content($composer_0, 14 & $dirty);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(KobwebApp$lambda(content, $changed));
    }
  }
  function DefaultStyleSheet$lambda($this$null) {
    padding($this$null, [get_px(0)]);
    margin($this$null, [get_px(0)]);
    return Unit_getInstance();
  }
  function DefaultStyleSheet$lambda_0($this$null) {
    boxSizing($this$null, 'border-box');
    return Unit_getInstance();
  }
  function DefaultStyleSheet() {
    DefaultStyleSheet_instance = this;
    StyleSheet_init_$Init$(VOID, VOID, this);
    this.style_qsvaqb_k$('html, body', DefaultStyleSheet$lambda);
    this.style_qsvaqb_k$('*', DefaultStyleSheet$lambda_0);
  }
  protoOf(DefaultStyleSheet).style_r4zx12_k$ = function (selector, cssRule) {
    return this.style_pgxmpo_k$(selector, cssRule);
  };
  var DefaultStyleSheet_instance;
  function DefaultStyleSheet_getInstance() {
    if (DefaultStyleSheet_instance == null)
      new DefaultStyleSheet();
    return DefaultStyleSheet_instance;
  }
  function KobwebApp$lambda($content, $$changed) {
    return function ($composer, $force) {
      KobwebApp($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function _set__values__wkt36s($this, _set____db54di) {
    $this._values_1 = _set____db54di;
  }
  function _get__values__6yksts($this) {
    var tmp = $this._values_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('_values');
    }
  }
  function AppGlobals() {
    AppGlobals_instance = this;
  }
  protoOf(AppGlobals).initialize_8ufbf0_k$ = function (values) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!!(this._values_1 == null)) {
      // Inline function 'com.varabyte.kobweb.core.AppGlobals.initialize.<anonymous>' call
      var message = 'Cannot initialize AppGlobals more than once';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this._values_1 = values;
  };
  protoOf(AppGlobals).get_6bo4tg_k$ = function (key) {
    return _get__values__6yksts(this).get_wei43m_k$(key);
  };
  protoOf(AppGlobals).getValue_r24mvz_k$ = function (key) {
    return getValue(_get__values__6yksts(this), key);
  };
  var AppGlobals_instance;
  function AppGlobals_getInstance() {
    if (AppGlobals_instance == null)
      new AppGlobals();
    return AppGlobals_instance;
  }
  function Page(routeOverride) {
    routeOverride = routeOverride === VOID ? '' : routeOverride;
    this.routeOverride_1 = routeOverride;
  }
  protoOf(Page).get_routeOverride_6ld14k_k$ = function () {
    return this.routeOverride_1;
  };
  protoOf(Page).equals = function (other) {
    if (!(other instanceof Page))
      return false;
    var tmp0_other_with_cast = other instanceof Page ? other : THROW_CCE();
    if (!(this.routeOverride_1 === tmp0_other_with_cast.routeOverride_1))
      return false;
    return true;
  };
  protoOf(Page).hashCode = function () {
    return imul(getStringHashCode('routeOverride'), 127) ^ getStringHashCode(this.routeOverride_1);
  };
  protoOf(Page).toString = function () {
    return '@com.varabyte.kobweb.core.Page(routeOverride=' + this.routeOverride_1 + ')';
  };
  function get_PageContextLocal() {
    _init_properties_PageContext_kt__u2hiem();
    return PageContextLocal;
  }
  var PageContextLocal;
  function rememberPageContext($composer, $changed) {
    _init_properties_PageContext_kt__u2hiem();
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(979146567);
    if (isTraceInProgress()) {
      traceEventStart(979146567, $changed, -1, 'com.varabyte.kobweb.core.rememberPageContext (PageContext.kt:165)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_PageContextLocal();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_ebzcrh_k$(this_0);
    sourceInformationMarkerEnd($composer_1);
    var tmp;
    if (tmp0 == null) {
      var message = 'PageContext is only valid within a @Page composable';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0;
    }
    var tmp0_0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0_0;
  }
  function _get_route__bsf68o($this) {
    return $this.route_1;
  }
  function _get_dynamicParams__m1vbg($this) {
    return $this.dynamicParams_1;
  }
  function RouteInfo(route, dynamicParams) {
    this.route_1 = route;
    this.dynamicParams_1 = dynamicParams;
    this.slug_1 = substringAfterLast(this.route_1.get_path_wos8ry_k$(), _Char___init__impl__6a9atx(47));
    this.path_1 = this.route_1.get_path_wos8ry_k$();
    this.params_1 = plus(this.route_1.get_queryParams_8o6v3v_k$(), this.dynamicParams_1);
    this.queryParams_1 = this.route_1.get_queryParams_8o6v3v_k$();
    this.fragment_1 = this.route_1.get_fragment_bxnb4p_k$();
  }
  protoOf(RouteInfo).get_origin_hq9xkf_k$ = function () {
    return window.location.origin;
  };
  protoOf(RouteInfo).get_slug_woudx0_k$ = function () {
    return this.slug_1;
  };
  protoOf(RouteInfo).get_path_wos8ry_k$ = function () {
    return this.path_1;
  };
  protoOf(RouteInfo).get_params_hy4oen_k$ = function () {
    return this.params_1;
  };
  protoOf(RouteInfo).get_queryParams_8o6v3v_k$ = function () {
    return this.queryParams_1;
  };
  protoOf(RouteInfo).get_fragment_bxnb4p_k$ = function () {
    return this.fragment_1;
  };
  protoOf(RouteInfo).get_pathQueryAndFragment_8mv2zx_k$ = function () {
    return this.route_1.toString();
  };
  protoOf(RouteInfo).toString = function () {
    return this.get_pathQueryAndFragment_8mv2zx_k$();
  };
  protoOf(RouteInfo).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof RouteInfo) {
      tmp_1 = other.path_1 === this.path_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals(other.params_1, this.params_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.fragment_1 == this.fragment_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(RouteInfo).hashCode = function () {
    var result = getStringHashCode(this.path_1);
    result = imul(31, result) + hashCode(this.params_1) | 0;
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.fragment_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(RouteInfo).copy_bbhpbo_k$ = function (path, queryParams, fragment, dynamicParams) {
    return new RouteInfo(Route_init_$Create$(path, queryParams, fragment), dynamicParams);
  };
  protoOf(RouteInfo).copy$default_uhlh95_k$ = function (path, queryParams, fragment, dynamicParams, $super) {
    path = path === VOID ? this.route_1.get_path_wos8ry_k$() : path;
    queryParams = queryParams === VOID ? this.route_1.get_queryParams_8o6v3v_k$() : queryParams;
    fragment = fragment === VOID ? this.route_1.get_fragment_bxnb4p_k$() : fragment;
    dynamicParams = dynamicParams === VOID ? this.dynamicParams_1 : dynamicParams;
    return $super === VOID ? this.copy_bbhpbo_k$(path, queryParams, fragment, dynamicParams) : $super.copy_bbhpbo_k$.call(this, path, queryParams, fragment, dynamicParams);
  };
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).set_instance_nao43g_k$ = function (_set____db54di) {
    this.instance_1 = _set____db54di;
  };
  protoOf(Companion).get_instance_mmff6q_k$ = function () {
    var tmp = this.instance_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('instance');
    }
  };
  protoOf(Companion).init_wjgy2w_k$ = function (router) {
    this.instance_1 = new PageContext(router);
  };
  var Companion_instance;
  function Companion_getInstance_2() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function PageContext(router) {
    Companion_getInstance_2();
    this.router_1 = router;
    this.routeState_1 = mutableStateOf(null);
  }
  protoOf(PageContext).get_router_j3zccy_k$ = function () {
    return this.router_1;
  };
  protoOf(PageContext).get_routeState_59fhkf_k$ = function () {
    return this.routeState_1;
  };
  protoOf(PageContext).set_route_bdtx77_k$ = function (value) {
    this.routeState_1.set_value_v1vabv_k$(value);
  };
  protoOf(PageContext).get_route_iy3cio_k$ = function () {
    var tmp0_elvis_lhs = this.routeState_1.get_value_j01efc_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'PageContext route info is only valid within a @Page composable';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  function PageContextLocal$lambda() {
    _init_properties_PageContext_kt__u2hiem();
    return null;
  }
  var properties_initialized_PageContext_kt_8ruj8w;
  function _init_properties_PageContext_kt__u2hiem() {
    if (!properties_initialized_PageContext_kt_8ruj8w) {
      properties_initialized_PageContext_kt_8ruj8w = true;
      PageContextLocal = staticCompositionLocalOf(PageContextLocal$lambda);
    }
  }
  function initKobweb(router, init) {
    var config = new MutableKobwebConfig();
    init(new InitKobwebContext(config, router));
    set_MutableKobwebConfigInstance(config);
  }
  function InitKobwebContext(config, router) {
    this.config_1 = config;
    this.router_1 = router;
  }
  protoOf(InitKobwebContext).get_config_c0698r_k$ = function () {
    return this.config_1;
  };
  protoOf(InitKobwebContext).get_router_j3zccy_k$ = function () {
    return this.router_1;
  };
  function set_MutableKobwebConfigInstance(_set____db54di) {
    _init_properties_KobwebConfig_kt__rz30d4();
    MutableKobwebConfigInstance = _set____db54di;
  }
  function get_MutableKobwebConfigInstance() {
    _init_properties_KobwebConfig_kt__rz30d4();
    return MutableKobwebConfigInstance;
  }
  var MutableKobwebConfigInstance;
  function MutableKobwebConfig() {
    this.openLinkStrategies_1 = new MutableOpenLinkStrategies();
  }
  protoOf(MutableKobwebConfig).get_openLinkStrategies_sr8wv2_k$ = function () {
    return this.openLinkStrategies_1;
  };
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).get_Instance_ljxvgi_k$ = function () {
    return get_MutableKobwebConfigInstance();
  };
  var Companion_instance_0;
  function Companion_getInstance_3() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function KobwebConfig() {
  }
  function MutableOpenLinkStrategies(internal, external) {
    internal = internal === VOID ? OpenLinkStrategy_IN_PLACE_getInstance() : internal;
    external = external === VOID ? OpenLinkStrategy_IN_NEW_TAB_getInstance() : external;
    this.internal_1 = internal;
    this.external_1 = external;
  }
  protoOf(MutableOpenLinkStrategies).set_internal_x2k4j8_k$ = function (_set____db54di) {
    this.internal_1 = _set____db54di;
  };
  protoOf(MutableOpenLinkStrategies).get_internal_mdbuyi_k$ = function () {
    return this.internal_1;
  };
  protoOf(MutableOpenLinkStrategies).set_external_q3km6y_k$ = function (_set____db54di) {
    this.external_1 = _set____db54di;
  };
  protoOf(MutableOpenLinkStrategies).get_external_945310_k$ = function () {
    return this.external_1;
  };
  function OpenLinkStrategies() {
  }
  var properties_initialized_KobwebConfig_kt_yaxikm;
  function _init_properties_KobwebConfig_kt__rz30d4() {
    if (!properties_initialized_KobwebConfig_kt_yaxikm) {
      properties_initialized_KobwebConfig_kt_yaxikm = true;
      MutableKobwebConfigInstance = new MutableKobwebConfig();
    }
  }
  function Anchor(href, attrs, openInternalLinksStrategy, openExternalLinksStrategy, autoPrefix, content, $composer, $changed, $default) {
    var attrs_0 = {_v: attrs};
    var openInternalLinksStrategy_0 = {_v: openInternalLinksStrategy};
    var openExternalLinksStrategy_0 = {_v: openExternalLinksStrategy};
    var autoPrefix_0 = {_v: autoPrefix};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1753910468);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(href) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(openInternalLinksStrategy_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(openExternalLinksStrategy_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(autoPrefix_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content_0._v) ? 131072 : 65536);
    if (!(($dirty & 374491) === 74898) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 2) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        openInternalLinksStrategy_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        openExternalLinksStrategy_0._v = null;
      }
      if (!(($default & 16) === 0)) {
        autoPrefix_0._v = true;
      }
      if (!(($default & 32) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1753910468, $dirty, -1, 'com.varabyte.kobweb.navigation.Anchor (Anchor.kt:39)');
      }
      var href_0 = prependIf(Companion_getInstance_5(), autoPrefix_0._v, href);
      var ctx = rememberPageContext($composer_0, 0);
      A(href_0, Anchor$lambda(attrs_0, openInternalLinksStrategy_0, openExternalLinksStrategy_0, ctx, href_0), content_0._v, $composer_0, 896 & $dirty >> 9, 0);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(Anchor$lambda_0(href, attrs_0, openInternalLinksStrategy_0, openExternalLinksStrategy_0, autoPrefix_0, content_0, $changed, $default));
    }
  }
  function Anchor$lambda$lambda($openInternalLinksStrategy, $openExternalLinksStrategy, $ctx, $href) {
    return function (evt) {
      var tmp0_elvis_lhs = $openInternalLinksStrategy._v;
      var openInternalLinksStrategy = tmp0_elvis_lhs == null ? toOpenLinkStrategy(evt, Companion_getInstance_3().get_Instance_ljxvgi_k$().get_openLinkStrategies_sr8wv2_k$().get_internal_mdbuyi_k$()) : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = $openExternalLinksStrategy._v;
      var openExternalLinksStrategy = tmp1_elvis_lhs == null ? toOpenLinkStrategy(evt, Companion_getInstance_3().get_Instance_ljxvgi_k$().get_openLinkStrategies_sr8wv2_k$().get_external_945310_k$()) : tmp1_elvis_lhs;
      $ctx.get_router_j3zccy_k$().navigateTo$default_onbd51_k$($href, VOID, openInternalLinksStrategy, openExternalLinksStrategy);
      evt.preventDefault_xs6po9_k$();
      evt.stopPropagation_5qf8uy_k$();
      return Unit_getInstance();
    };
  }
  function Anchor$lambda($attrs, $openInternalLinksStrategy, $openExternalLinksStrategy, $ctx, $href) {
    return function ($this$A) {
      var tmp;
      if (!($attrs._v == null)) {
        tmp = $attrs._v($this$A);
      }
      $this$A.onClick_q9cds6_k$(Anchor$lambda$lambda($openInternalLinksStrategy, $openExternalLinksStrategy, $ctx, $href));
      return Unit_getInstance();
    };
  }
  function Anchor$lambda_0($href, $attrs, $openInternalLinksStrategy, $openExternalLinksStrategy, $autoPrefix, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Anchor($href, $attrs._v, $openInternalLinksStrategy._v, $openExternalLinksStrategy._v, $autoPrefix._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  var OpenLinkStrategy_IN_PLACE_instance;
  var OpenLinkStrategy_IN_NEW_TAB_instance;
  function values() {
    return [OpenLinkStrategy_IN_PLACE_getInstance(), OpenLinkStrategy_IN_NEW_TAB_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'IN_PLACE':
        return OpenLinkStrategy_IN_PLACE_getInstance();
      case 'IN_NEW_TAB':
        return OpenLinkStrategy_IN_NEW_TAB_getInstance();
      default:
        OpenLinkStrategy_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var OpenLinkStrategy_entriesInitialized;
  function OpenLinkStrategy_initEntries() {
    if (OpenLinkStrategy_entriesInitialized)
      return Unit_getInstance();
    OpenLinkStrategy_entriesInitialized = true;
    OpenLinkStrategy_IN_PLACE_instance = new OpenLinkStrategy('IN_PLACE', 0);
    OpenLinkStrategy_IN_NEW_TAB_instance = new OpenLinkStrategy('IN_NEW_TAB', 1);
  }
  var $ENTRIES;
  function OpenLinkStrategy(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function open(_this__u8e3s4, href, strategy) {
    var tmp0 = strategy.get_ordinal_ip24qg_k$();
    if (tmp0 === 0) {
      _this__u8e3s4.open(href, '_self');
    } else if (tmp0 === 1) {
      _this__u8e3s4.open(href, '_blank');
    }
  }
  function toOpenLinkStrategy(_this__u8e3s4, default_0) {
    default_0 = default_0 === VOID ? OpenLinkStrategy_IN_PLACE_getInstance() : default_0;
    return (_this__u8e3s4.get_ctrlKey_jfc6q3_k$() ? true : _this__u8e3s4.get_shiftKey_ujdkqu_k$()) ? OpenLinkStrategy_IN_NEW_TAB_getInstance() : default_0;
  }
  function OpenLinkStrategy_IN_PLACE_getInstance() {
    OpenLinkStrategy_initEntries();
    return OpenLinkStrategy_IN_PLACE_instance;
  }
  function OpenLinkStrategy_IN_NEW_TAB_getInstance() {
    OpenLinkStrategy_initEntries();
    return OpenLinkStrategy_IN_NEW_TAB_instance;
  }
  function Route_init_$Init$(path, queryParams, fragment, $this) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.navigation.Route.<init>.<anonymous>' call
    this_0.append_22ad7x_k$(path);
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!queryParams.isEmpty_y1axqb_k$()) {
      this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(63));
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(queryParams.get_size_woubt6_k$());
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator = queryParams.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        // Inline function 'com.varabyte.kobweb.navigation.Route.<init>.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.component1' call
        var key = item.get_key_18j28a_k$();
        // Inline function 'kotlin.collections.component2' call
        var value = item.get_value_j01efc_k$();
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_1 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.navigation.Route.<init>.<anonymous>.<anonymous>.<anonymous>' call
        this_1.append_22ad7x_k$(key);
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(value) > 0) {
          this_1.append_am5a4z_k$(_Char___init__impl__6a9atx(61));
          this_1.append_22ad7x_k$(value);
        }
        var tmp$ret$7 = this_1.toString();
        destination.add_utx5q5_k$(tmp$ret$7);
      }
      this_0.append_22ad7x_k$(joinToString(destination, '&'));
    }
    if (!(fragment == null)) {
      this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(35));
      this_0.append_22ad7x_k$(fragment);
    }
    var tmp$ret$11 = this_0.toString();
    Route.call($this, tmp$ret$11);
    return $this;
  }
  function Route_init_$Create$(path, queryParams, fragment) {
    return Route_init_$Init$(path, queryParams, fragment, objectCreate(protoOf(Route)));
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).isRoute_nlgap1_k$ = function (path) {
    return !(this.tryCreate_50aflp_k$(path) == null);
  };
  protoOf(Companion_1).tryCreate_50aflp_k$ = function (path) {
    var tmp;
    try {
      tmp = new Route(path);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof RouteException) {
        var ex = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Companion_1).fromUrl_6grbna_k$ = function (url) {
    var tmp0_elvis_lhs = this.tryCreate_50aflp_k$(removePrefix(url.href, url.origin));
    return tmp0_elvis_lhs == null ? new Route('') : tmp0_elvis_lhs;
  };
  var Companion_instance_1;
  function Companion_getInstance_4() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function _get_url__e6i4g2($this) {
    return $this.url_1;
  }
  function Route(pathQueryAndFragment) {
    Companion_getInstance_4();
    var tmp;
    try {
      new URL(pathQueryAndFragment);
      tmp = false;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var ex = $p;
        tmp_0 = true;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var isValidRoute = tmp;
    if (!isValidRoute) {
      throw new RouteException(pathQueryAndFragment);
    }
    this.url_1 = new URL(pathQueryAndFragment, 'http://unused.com');
    var isAbsolute = startsWith(pathQueryAndFragment, '/');
    var tmp_1 = this;
    var tmp_2;
    if (isAbsolute) {
      tmp_2 = this.url_1.pathname;
    } else {
      // Inline function 'kotlin.also' call
      var this_0 = drop(this.url_1.pathname, 1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.navigation.Route.<anonymous>' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(first(this.url_1.pathname) === _Char___init__impl__6a9atx(47))) {
        // Inline function 'kotlin.check.<anonymous>' call
        var message = 'Check failed.';
        throw IllegalStateException_init_$Create$(toString(message));
      }
      tmp_2 = this_0;
    }
    tmp_1.path_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.collections.mutableMapOf' call
    var this_1 = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    $l$block: {
      // Inline function 'com.varabyte.kobweb.navigation.Route.<anonymous>' call
      // Inline function 'kotlin.text.isEmpty' call
      var this_2 = this.url_1.search;
      if (charSequenceLength(this_2) === 0) {
        break $l$block;
      }
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = split(removePrefix(this.url_1.search, '?'), charArrayOf([_Char___init__impl__6a9atx(38)])).iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'com.varabyte.kobweb.navigation.Route.<anonymous>.<anonymous>' call
        var keyValue = split(element, charArrayOf([_Char___init__impl__6a9atx(61)]), VOID, 2);
        var key = keyValue.get_c1px32_k$(0);
        // Inline function 'kotlin.collections.set' call
        // Inline function 'kotlin.collections.elementAtOrNull' call
        var tmp0_elvis_lhs = getOrNull(keyValue, 1);
        var value = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        this_1.put_4fpzoq_k$(key, value);
      }
    }
    tmp_3.queryParams_1 = this_1;
    var tmp_4 = this;
    // Inline function 'kotlin.takeIf' call
    var this_3 = this.url_1.hash;
    // Inline function 'kotlin.contracts.contract' call
    var tmp_5;
    // Inline function 'com.varabyte.kobweb.navigation.Route.<anonymous>' call
    if (startsWith(this_3, '#')) {
      tmp_5 = this_3;
    } else {
      tmp_5 = null;
    }
    var tmp0_safe_receiver = tmp_5;
    tmp_4.fragment_1 = tmp0_safe_receiver == null ? null : removePrefix(tmp0_safe_receiver, '#');
  }
  protoOf(Route).get_path_wos8ry_k$ = function () {
    return this.path_1;
  };
  protoOf(Route).get_queryParams_8o6v3v_k$ = function () {
    return this.queryParams_1;
  };
  protoOf(Route).get_fragment_bxnb4p_k$ = function () {
    return this.fragment_1;
  };
  protoOf(Route).toString = function () {
    return this.path_1 + this.url_1.search + this.url_1.hash;
  };
  function RouteException(value) {
    Exception_init_$Init$('Failed to create a route. Routes should be valid URLs without a leading domain. Got: ' + value, this);
    captureStack(this, RouteException);
  }
  function get_slug(_this__u8e3s4) {
    return substringAfterLast_0(_this__u8e3s4.path_1, '/');
  }
  function prependIf(_this__u8e3s4, condition, path) {
    return condition ? Companion_getInstance_5().prepend_osifcc_k$(path) : path;
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  protoOf(Companion_2).set_wjk6wo_k$ = function (value) {
    Companion_getInstance_6().set__instance_4ws2a9_k$(new RoutePrefixImpl(value));
  };
  protoOf(Companion_2).get_value_j01efc_k$ = function () {
    return Companion_getInstance_6().get_instance_mmff6q_k$().value_1;
  };
  protoOf(Companion_2).prepend_osifcc_k$ = function (path) {
    return Companion_getInstance_6().get_instance_mmff6q_k$().prepend_osifcc_k$(path);
  };
  var Companion_instance_2;
  function Companion_getInstance_5() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function RoutePrefix() {
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this._instance_1 = null;
  }
  protoOf(Companion_3).set__instance_4ws2a9_k$ = function (value) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this._instance_1 == null)) {
      // Inline function 'com.varabyte.kobweb.navigation.Companion.<set-_instance>.<anonymous>' call
      var message = 'Cannot overwrite route prefix once set';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this._instance_1 = value;
  };
  protoOf(Companion_3).get__instance_j6x8p7_k$ = function () {
    if (this._instance_1 == null) {
      this._instance_1 = new RoutePrefixImpl('');
    }
    return this._instance_1;
  };
  protoOf(Companion_3).get_instance_mmff6q_k$ = function () {
    return ensureNotNull(this.get__instance_j6x8p7_k$());
  };
  var Companion_instance_3;
  function Companion_getInstance_6() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function RoutePrefixImpl(value) {
    Companion_getInstance_6();
    var tmp = this;
    // Inline function 'kotlin.takeIf' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0;
    // Inline function 'com.varabyte.kobweb.navigation.RoutePrefixImpl.value.<anonymous>' call
    // Inline function 'kotlin.text.isNotBlank' call
    if (!isBlank(value)) {
      tmp_0 = value;
    } else {
      tmp_0 = null;
    }
    var tmp0_safe_receiver = tmp_0;
    var tmp_1;
    if (tmp0_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.navigation.RoutePrefixImpl.value.<anonymous>' call
      tmp_1 = startsWith_0(tmp0_safe_receiver, _Char___init__impl__6a9atx(47)) ? tmp0_safe_receiver : '/' + tmp0_safe_receiver;
    }
    var tmp1_safe_receiver = tmp_1;
    var tmp_2;
    if (tmp1_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.navigation.RoutePrefixImpl.value.<anonymous>' call
      tmp_2 = endsWith(tmp1_safe_receiver, _Char___init__impl__6a9atx(47)) ? tmp1_safe_receiver : tmp1_safe_receiver + '/';
    }
    var tmp2_elvis_lhs = tmp_2;
    tmp.value_1 = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
  }
  protoOf(RoutePrefixImpl).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(RoutePrefixImpl).prepend_osifcc_k$ = function (path) {
    if (isBlank(this.value_1))
      return path;
    if (!startsWith(path, '/'))
      return path;
    return dropLast(this.value_1, 1) + path;
  };
  protoOf(RoutePrefixImpl).toString = function () {
    return this.value_1;
  };
  function remove(_this__u8e3s4, path) {
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    var this_0 = _this__u8e3s4.get_value_j01efc_k$();
    if (charSequenceLength(this_0) > 0) {
      tmp = removePrefix(path, dropLast(_this__u8e3s4.get_value_j01efc_k$(), 1));
    } else {
      tmp = path;
    }
    return tmp;
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.UseLegacySearch_1 = false;
  }
  protoOf(Companion_4).set_UseLegacySearch_1t8md6_k$ = function (_set____db54di) {
    this.UseLegacySearch_1 = _set____db54di;
  };
  protoOf(Companion_4).get_UseLegacySearch_eggh67_k$ = function () {
    return this.UseLegacySearch_1;
  };
  var Companion_instance_4;
  function Companion_getInstance_7() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function _get__children__n7wjoz($this) {
    return $this._children_1;
  }
  function RouteTree$Node$_get_nodes_$slambda_9kqj3(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RouteTree$Node$_get_nodes_$slambda_9kqj3).invoke_qhgu63_k$ = function ($this$sequence, $completion) {
    var tmp = this.create_9iddkf_k$($this$sequence, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(RouteTree$Node$_get_nodes_$slambda_9kqj3).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_qhgu63_k$(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RouteTree$Node$_get_nodes_$slambda_9kqj3).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.nodeQueue0__1 = mutableListOf([this.this$0__1]);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!!this.nodeQueue0__1.isEmpty_y1axqb_k$()) {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

            this.node1__1 = removeFirst(this.nodeQueue0__1);
            var tmp_0 = this;
            tmp_0.nodePath2__1 = ArrayList_init_$Create$_0();
            this.nodePath2__1.add_utx5q5_k$(this.node1__1);
            this.parent3__1 = this.node1__1.parent_1;
            while (!(this.parent3__1 == null)) {
              this.nodePath2__1.add_dl6gt3_k$(0, this.parent3__1);
              this.parent3__1 = this.parent3__1.parent_1;
            }

            this.set_state_rjd8d0_k$(2);
            suspendResult = this.$this$sequence_1.yield_3xhcex_k$(this.nodePath2__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.nodeQueue0__1.addAll_4lagoh_k$(this.node1__1._children_1);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            return Unit_getInstance();
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
  protoOf(RouteTree$Node$_get_nodes_$slambda_9kqj3).create_9iddkf_k$ = function ($this$sequence, completion) {
    var i = new RouteTree$Node$_get_nodes_$slambda_9kqj3(this.this$0__1, completion);
    i.$this$sequence_1 = $this$sequence;
    return i;
  };
  protoOf(RouteTree$Node$_get_nodes_$slambda_9kqj3).create_wyq9v6_k$ = function (value, completion) {
    return this.create_9iddkf_k$(value instanceof SequenceScope ? value : THROW_CCE(), completion);
  };
  function RouteTree$Node$_get_nodes_$slambda_9kqj3_0(this$0, resultContinuation) {
    var i = new RouteTree$Node$_get_nodes_$slambda_9kqj3(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.invoke_qhgu63_k$($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Node(parent, name, method) {
    Companion_getInstance_7();
    parent = parent === VOID ? null : parent;
    this.parent_1 = parent;
    this.name_1 = name;
    this.method_1 = method;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp._children_1 = ArrayList_init_$Create$_0();
    this.children_1 = this._children_1;
  }
  protoOf(Node).get_parent_hy4reb_k$ = function () {
    return this.parent_1;
  };
  protoOf(Node).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(Node).set_method_78wcv1_k$ = function (_set____db54di) {
    this.method_1 = _set____db54di;
  };
  protoOf(Node).get_method_gl8esq_k$ = function () {
    return this.method_1;
  };
  protoOf(Node).get_children_4cwbp4_k$ = function () {
    return this.children_1;
  };
  protoOf(Node).matches_j19087_k$ = function (name) {
    var tmp;
    if (this.name_1 === name) {
      tmp = true;
    } else {
      var tmp_0;
      if (Companion_getInstance_7().UseLegacySearch_1 ? contains(this.name_1, _Char___init__impl__6a9atx(45)) : false) {
        var isLastPart = this.children_1.isEmpty_y1axqb_k$();
        var tmp_1;
        if (isLastPart) {
          tmp_1 = replace(this.name_1, '-', '') === name;
        } else {
          tmp_1 = kebabCaseToCamelCase(this.name_1) === name;
        }
        tmp_0 = tmp_1;
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Node).createChild_7odmmp_k$ = function (routePart, method) {
    var tmp;
    if (startsWith_0(routePart, _Char___init__impl__6a9atx(123)) ? endsWith(routePart, _Char___init__impl__6a9atx(125)) : false) {
      // Inline function 'kotlin.text.substring' call
      var endIndex = routePart.length - 1 | 0;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = routePart.substring(1, endIndex);
      tmp = new DynamicNode(this, tmp$ret$1, method);
    } else {
      tmp = new StaticNode(this, routePart, method);
    }
    var node = tmp;
    this._children_1.add_utx5q5_k$(node);
    return node;
  };
  protoOf(Node).findChild_rhky47_k$ = function (routePart) {
    // Inline function 'kotlin.collections.find' call
    var this_0 = this._children_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'com.varabyte.kobweb.navigation.Node.findChild.<anonymous>' call
        if (element.matches_j19087_k$(routePart)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  };
  protoOf(Node).get_nodes_ivvt6w_k$ = function () {
    return sequence(RouteTree$Node$_get_nodes_$slambda_9kqj3_0(this, null));
  };
  function RootNode() {
    Node.call(this, null, '', null);
  }
  function ChildNode(parent, name, method) {
    Node.call(this, parent, name, method);
  }
  function StaticNode(parent, name, method) {
    ChildNode.call(this, parent, name, method);
  }
  function DynamicNode(parent, name, method) {
    ChildNode.call(this, parent, name, method);
  }
  protoOf(DynamicNode).matches_j19087_k$ = function (name) {
    return true;
  };
  function toRouteString(_this__u8e3s4, $this) {
    return '/' + joinToString(_this__u8e3s4, '/', VOID, VOID, VOID, VOID, RouteTree$toRouteString$lambda);
  }
  function _get_root__dd8asp($this) {
    return $this.root_1;
  }
  function _get_redirects__2c3o62($this) {
    return $this.redirects_1;
  }
  function resolve($this, route) {
    var routeParts = split(route, charArrayOf([_Char___init__impl__6a9atx(47)]));
    // Inline function 'kotlin.collections.mutableListOf' call
    var resolved = ArrayList_init_$Create$_0();
    var currNode = $this.root_1;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(routeParts.get_c1px32_k$(0) === $this.root_1.name_1)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 1;
    var last = routeParts.get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var routePart = routeParts.get_c1px32_k$(i);
        var tmp1_elvis_lhs = currNode.findChild_rhky47_k$(routePart);
        var tmp;
        if (tmp1_elvis_lhs == null) {
          return null;
        } else {
          tmp = tmp1_elvis_lhs;
        }
        currNode = tmp;
        resolved.add_utx5q5_k$(currNode);
      }
       while (inductionVariable < last);
    return resolved;
  }
  function resolveAllowingRedirects($this, route, showLegacyWarning) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = route;
    var tmp0_iterator = $this.redirects_1.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.navigation.RouteTree.resolveAllowingRedirects.<anonymous>' call
      var route_0 = accumulator;
      var tmp0_elvis_lhs = element.map_epzkwu_k$(route_0);
      accumulator = tmp0_elvis_lhs == null ? route_0 : tmp0_elvis_lhs;
    }
    var redirectedRoute = accumulator;
    var resolvedNodes = resolve($this, redirectedRoute);
    if (resolvedNodes == null ? !$this.legacyRouteRedirectStrategy_1.equals(LegacyRouteRedirectStrategy_DISALLOW_getInstance()) : false) {
      Companion_getInstance_7().UseLegacySearch_1 = true;
      try {
        var tmp0_safe_receiver = resolve($this, route);
        var tmp;
        if (tmp0_safe_receiver == null) {
          tmp = null;
        } else {
          // Inline function 'kotlin.also' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'com.varabyte.kobweb.navigation.RouteTree.resolveAllowingRedirects.<anonymous>' call
          if (showLegacyWarning) {
            console.warn('Legacy route "' + route + '" is automatically being redirected to "' + toRouteString(tmp0_safe_receiver, $this) + '". The site owner can disable this by setting `kobweb.app.legacyRouteRedirectStrategy` to `DISALLOW` in the site\'s build script, or they can register an explicit redirect in the `conf.yaml` file which would also make this warning go away.');
          }
          tmp = tmp0_safe_receiver;
        }
        resolvedNodes = tmp;
      }finally {
        Companion_getInstance_7().UseLegacySearch_1 = false;
      }
    }
    return resolvedNodes;
  }
  function checkRoute($this, route) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.root_1.children_1.isEmpty_y1axqb_k$()) {
      // Inline function 'com.varabyte.kobweb.navigation.RouteTree.checkRoute.<anonymous>' call
      var message = "No routes were ever registered. This is unexpected and probably means no `@Page` was defined (or pages were defined in the wrong place where Kobweb couldn't discover them).";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!startsWith_0(route, _Char___init__impl__6a9atx(47))) {
      // Inline function 'com.varabyte.kobweb.navigation.RouteTree.checkRoute.<anonymous>' call
      var message_0 = 'When checking a route, it must begin with a slash. Got: "' + route + '"';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var tmp0_elvis_lhs = resolveAllowingRedirects($this, route, false);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var resolvedNodes = tmp;
    return toRouteString(resolvedNodes, $this);
  }
  function RouteTree$toRouteString$lambda(it) {
    return it.name_1;
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function RouteTree$createPageData$lambda(this$0) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1742599790, $changed, -1, 'com.varabyte.kobweb.navigation.RouteTree.createPageData.<anonymous> (RouteTree.kt:231)');
        }
        this$0.errorHandler_1(404, $composer_0, 6);
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
  function RouteTree() {
    this.root_1 = new RootNode();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.redirects_1 = ArrayList_init_$Create$_0();
    this.errorHandler_1 = ComposableSingletons$RouteTreeKt_getInstance().lambda_1_r8sbbp_1;
    this.legacyRouteRedirectStrategy_1 = LegacyRouteRedirectStrategy_WARN_getInstance();
  }
  protoOf(RouteTree).set_errorHandler_pl76aa_k$ = function (_set____db54di) {
    this.errorHandler_1 = _set____db54di;
  };
  protoOf(RouteTree).get_errorHandler_k3vn8r_k$ = function () {
    return this.errorHandler_1;
  };
  protoOf(RouteTree).set_legacyRouteRedirectStrategy_iwyfh2_k$ = function (_set____db54di) {
    this.legacyRouteRedirectStrategy_1 = _set____db54di;
  };
  protoOf(RouteTree).get_legacyRouteRedirectStrategy_b2yfu_k$ = function () {
    return this.legacyRouteRedirectStrategy_1;
  };
  protoOf(RouteTree).isRegistered_1ncfv6_k$ = function (route) {
    return !(checkRoute(this, route) == null);
  };
  protoOf(RouteTree).register_u71vor_k$ = function (route, method) {
    if (!(resolve(this, route) == null))
      return false;
    var routeParts = split(route, charArrayOf([_Char___init__impl__6a9atx(47)]));
    var currNode = this.root_1;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(routeParts.get_c1px32_k$(0) === this.root_1.name_1)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 1;
    var last = routeParts.get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var routePart = routeParts.get_c1px32_k$(i);
        var tmp1_elvis_lhs = currNode.findChild_rhky47_k$(routePart);
        var tmp;
        if (tmp1_elvis_lhs == null) {
          var tmp_0 = currNode;
          // Inline function 'kotlin.takeIf' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp_1;
          // Inline function 'com.varabyte.kobweb.navigation.RouteTree.register.<anonymous>' call
          if (i === get_lastIndex(routeParts)) {
            tmp_1 = method;
          } else {
            tmp_1 = null;
          }
          var tmp$ret$2 = tmp_1;
          tmp = tmp_0.createChild_7odmmp_k$(routePart, tmp$ret$2);
        } else {
          tmp = tmp1_elvis_lhs;
        }
        currNode = tmp;
      }
       while (inductionVariable < last);
    return true;
  };
  protoOf(RouteTree).registerRedirect_o9yje9_k$ = function (redirectRoute, actualRoute) {
    this.redirects_1.add_utx5q5_k$(PatternMapper_init_$Create$('^' + redirectRoute + '$', actualRoute));
  };
  protoOf(RouteTree).createPageData_su7bov_k$ = function (route) {
    var errorPageMethod = ComposableLambda$invoke$ref(composableLambdaInstance(1742599790, true, RouteTree$createPageData$lambda(this)));
    var tmp0_elvis_lhs = resolveAllowingRedirects(this, route.get_path_wos8ry_k$(), this.legacyRouteRedirectStrategy_1.equals(LegacyRouteRedirectStrategy_WARN_getInstance()));
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return new PageData(errorPageMethod, new RouteInfo(route, emptyMap()));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var resolvedNodes = tmp;
    var tmp1_elvis_lhs = last(resolvedNodes).method_1;
    var pageMethod = tmp1_elvis_lhs == null ? errorPageMethod : tmp1_elvis_lhs;
    // Inline function 'kotlin.collections.mutableMapOf' call
    var dynamicParams = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = resolvedNodes.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.navigation.RouteTree.createPageData.<anonymous>' call
      if (element instanceof DynamicNode) {
        var routePart = element.name_1;
        // Inline function 'kotlin.collections.set' call
        var key = element.name_1;
        dynamicParams.put_4fpzoq_k$(key, routePart);
        if (!this.legacyRouteRedirectStrategy_1.equals(LegacyRouteRedirectStrategy_DISALLOW_getInstance()) ? contains(element.name_1, _Char___init__impl__6a9atx(45)) : false) {
          // Inline function 'kotlin.collections.set' call
          var key_0 = replace(element.name_1, '-', '');
          dynamicParams.put_4fpzoq_k$(key_0, routePart);
          // Inline function 'kotlin.collections.set' call
          var key_1 = kebabCaseToCamelCase(element.name_1);
          dynamicParams.put_4fpzoq_k$(key_1, routePart);
          // Inline function 'kotlin.collections.set' call
          var key_2 = replace_0(element.name_1, _Char___init__impl__6a9atx(45), _Char___init__impl__6a9atx(95));
          dynamicParams.put_4fpzoq_k$(key_2, routePart);
        }
      }
    }
    return new PageData(pageMethod, new RouteInfo(Route_init_$Create$(toRouteString(resolvedNodes, this), route.get_queryParams_8o6v3v_k$(), route.get_fragment_bxnb4p_k$()), dynamicParams));
  };
  protoOf(RouteTree).get_nodes_ivvt6w_k$ = function () {
    return this.root_1.get_nodes_ivvt6w_k$();
  };
  function PageData(pageMethod, routeInfo) {
    this.pageMethod_1 = pageMethod;
    this.routeInfo_1 = routeInfo;
  }
  protoOf(PageData).get_pageMethod_1yegx3_k$ = function () {
    return this.pageMethod_1;
  };
  protoOf(PageData).get_routeInfo_ba59f2_k$ = function () {
    return this.routeInfo_1;
  };
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$RouteTreeKt$lambda_1$lambda_h43un7(errorCode, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(errorCode) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-557678680, $dirty, -1, 'com.varabyte.kobweb.navigation.ComposableSingletons$RouteTreeKt.lambda-1.<anonymous> (RouteTree.kt:114)');
      }
      ErrorPage(errorCode, $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$RouteTreeKt() {
    ComposableSingletons$RouteTreeKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-557678680, false, ComposableSingletons$RouteTreeKt$lambda_1$lambda_h43un7));
  }
  protoOf(ComposableSingletons$RouteTreeKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$RouteTreeKt_instance;
  function ComposableSingletons$RouteTreeKt_getInstance() {
    if (ComposableSingletons$RouteTreeKt_instance == null)
      new ComposableSingletons$RouteTreeKt();
    return ComposableSingletons$RouteTreeKt_instance;
  }
  function ErrorPage(errorCode, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1287308146);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(errorCode) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1287308146, $dirty, -1, 'com.varabyte.kobweb.navigation.ErrorPage (RouteTree.kt:23)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.navigation.ErrorPage.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, 542436721, true, ErrorPage$lambda(errorCode));
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
        // Inline function 'com.varabyte.kobweb.navigation.ErrorPage.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Div(null, tmp0, $composer_0, 48, 1);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(ErrorPage$lambda_0(errorCode, $changed));
    }
  }
  function ErrorPage$lambda($errorCode) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(542436721, $changed, -1, 'com.varabyte.kobweb.navigation.ErrorPage.<anonymous> (RouteTree.kt:25)');
      }
      Text('Error code: ' + $errorCode, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ErrorPage$lambda_0($errorCode, $$changed) {
    return function ($composer, $force) {
      ErrorPage($errorCode, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var LegacyRouteRedirectStrategy_ALLOW_instance;
  var LegacyRouteRedirectStrategy_WARN_instance;
  var LegacyRouteRedirectStrategy_DISALLOW_instance;
  function values_0() {
    return [LegacyRouteRedirectStrategy_ALLOW_getInstance(), LegacyRouteRedirectStrategy_WARN_getInstance(), LegacyRouteRedirectStrategy_DISALLOW_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'ALLOW':
        return LegacyRouteRedirectStrategy_ALLOW_getInstance();
      case 'WARN':
        return LegacyRouteRedirectStrategy_WARN_getInstance();
      case 'DISALLOW':
        return LegacyRouteRedirectStrategy_DISALLOW_getInstance();
      default:
        LegacyRouteRedirectStrategy_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var LegacyRouteRedirectStrategy_entriesInitialized;
  function LegacyRouteRedirectStrategy_initEntries() {
    if (LegacyRouteRedirectStrategy_entriesInitialized)
      return Unit_getInstance();
    LegacyRouteRedirectStrategy_entriesInitialized = true;
    LegacyRouteRedirectStrategy_ALLOW_instance = new LegacyRouteRedirectStrategy('ALLOW', 0);
    LegacyRouteRedirectStrategy_WARN_instance = new LegacyRouteRedirectStrategy('WARN', 1);
    LegacyRouteRedirectStrategy_DISALLOW_instance = new LegacyRouteRedirectStrategy('DISALLOW', 2);
  }
  var $ENTRIES_0;
  function LegacyRouteRedirectStrategy(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function _set_activePageMethod__f6z3vj($this, _set____db54di) {
    var this_0 = $this.activePageMethod$delegate_1;
    activePageMethod$factory();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get_activePageMethod__dw5579($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.activePageMethod$delegate_1;
    activePageMethod$factory_0();
    return this_0.get_value_j01efc_k$();
  }
  function _get_routeTree__6p9yza($this) {
    return $this.routeTree_1;
  }
  function _get_interceptors__h4min7($this) {
    return $this.interceptors_1;
  }
  function updatePageContext(_this__u8e3s4, $this, pathQueryAndFragment) {
    if (startsWith(pathQueryAndFragment, '#')) {
      var tmp0_safe_receiver = _this__u8e3s4.get_routeState_59fhkf_k$().get_value_j01efc_k$();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        _this__u8e3s4.get_routeState_59fhkf_k$().set_value_v1vabv_k$(tmp0_safe_receiver.copy$default_uhlh95_k$(VOID, VOID, removePrefix(pathQueryAndFragment, '#')));
        return true;
      }
      if (tmp == null) {
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        return false;
      }
    }
    var route = Companion_getInstance_4().tryCreate_50aflp_k$(pathQueryAndFragment);
    var tmp_0;
    if (!(route == null)) {
      var data = $this.routeTree_1.createPageData_su7bov_k$(route);
      _set_activePageMethod__f6z3vj($this, data.get_pageMethod_1yegx3_k$());
      _this__u8e3s4.set_route_bdtx77_k$(data.get_routeInfo_ba59f2_k$());
      tmp_0 = true;
    } else {
      tmp_0 = false;
    }
    return tmp_0;
  }
  function normalize(_this__u8e3s4, $this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!Companion_getInstance_4().isRoute_nlgap1_k$(_this__u8e3s4)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var hrefResolved = Companion_getInstance_4().fromUrl_6grbna_k$(new URL(_this__u8e3s4, window.location.href)).toString();
    // Inline function 'kotlin.takeIf' call
    var this_0 = remove(Companion_getInstance_5(), hrefResolved);
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'com.varabyte.kobweb.navigation.Router.normalize.<anonymous>' call
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_0) > 0) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var tmp0_elvis_lhs = tmp;
    var withoutPrefix = tmp0_elvis_lhs == null ? '/' : tmp0_elvis_lhs;
    var hadPrefix = !(withoutPrefix === hrefResolved);
    var tmp_0 = Companion_getInstance_5();
    // Inline function 'kotlin.collections.fold' call
    var this_1 = $this.interceptors_1;
    var accumulator = (new Route(withoutPrefix)).toString();
    var tmp0_iterator = this_1.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.navigation.Router.normalize.<anonymous>' call
      var acc = accumulator;
      var interceptor = new RouteInterceptorScope(acc);
      element(interceptor);
      accumulator = interceptor.get_pathQueryAndFragment_8mv2zx_k$();
    }
    var tmp$ret$5 = accumulator;
    return prependIf(tmp_0, hadPrefix, tmp$ret$5);
  }
  function partitionPath(_this__u8e3s4, $this) {
    var pathPart = substringBefore(substringBefore(_this__u8e3s4, _Char___init__impl__6a9atx(63)), _Char___init__impl__6a9atx(35));
    return to(pathPart, removePrefix(_this__u8e3s4, pathPart));
  }
  function Router$lambda(this$0) {
    return function (it) {
      var tmp = Companion_getInstance_2().get_instance_mmff6q_k$();
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.navigation.Router.<anonymous>.<anonymous>' call
      var it_0 = ensureNotNull(document.location);
      var tmp$ret$1 = removePrefix(it_0.href, it_0.origin);
      return updatePageContext(tmp, this$0, tmp$ret$1);
    };
  }
  function Router$renderActivePage$lambda$lambda($pageMethod) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(613218228, $changed, -1, 'com.varabyte.kobweb.navigation.Router.renderActivePage.<anonymous>.<anonymous> (Router.kt:173)');
        }
        $pageMethod($composer_0, 0);
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
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function Router$renderActivePage$lambda($pageWrapper, $pageMethod) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-628364167, $changed, -1, 'com.varabyte.kobweb.navigation.Router.renderActivePage.<anonymous> (Router.kt:172)');
        }
        var tmp_0 = $pageWrapper._v;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.navigation.Router.renderActivePage.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, 613218228, true, Router$renderActivePage$lambda$lambda($pageMethod));
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
          // Inline function 'com.varabyte.kobweb.navigation.Router.renderActivePage.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_2(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        tmp_0(tmp0, $composer_0, 6);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function Router$renderActivePage$lambda_0($tmp0_rcvr, $pageWrapper, $$changed, $$default) {
    return function ($composer, $force) {
      $tmp0_rcvr.renderActivePage_fc13h0_k$($pageWrapper._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Router$tryRoutingTo$lambda($fragment, $attempts, $handle) {
    return function () {
      var element = document.getElementById($fragment);
      var tmp;
      if (!(element == null)) {
        element.scrollIntoView({behavior: 'smooth'});
        $attempts._v = 0;
        tmp = Unit_getInstance();
      } else {
        var tmp0 = $attempts._v;
        $attempts._v = tmp0 - 1 | 0;
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if ($attempts._v === 0) {
        $handle._v.cancel_2l89ey_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function LegacyRouteRedirectStrategy_ALLOW_getInstance() {
    LegacyRouteRedirectStrategy_initEntries();
    return LegacyRouteRedirectStrategy_ALLOW_instance;
  }
  function LegacyRouteRedirectStrategy_WARN_getInstance() {
    LegacyRouteRedirectStrategy_initEntries();
    return LegacyRouteRedirectStrategy_WARN_instance;
  }
  function LegacyRouteRedirectStrategy_DISALLOW_getInstance() {
    LegacyRouteRedirectStrategy_initEntries();
    return LegacyRouteRedirectStrategy_DISALLOW_instance;
  }
  function Router() {
    this.activePageMethod$delegate_1 = mutableStateOf(null);
    this.routeTree_1 = new RouteTree();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.interceptors_1 = ArrayList_init_$Create$_0();
    Companion_getInstance_2().init_wjgy2w_k$(this);
    var tmp_0 = window;
    tmp_0.onpopstate = Router$lambda(this);
  }
  protoOf(Router).renderActivePage_fc13h0_k$ = function (pageWrapper, $composer, $changed, $default) {
    var pageWrapper_0 = {_v: pageWrapper};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1032287943);
    if (!(($default & 1) === 0)) {
      pageWrapper_0._v = ComposableSingletons$RouterKt_getInstance().lambda_1_r8sbbp_1;
    }
    if (isTraceInProgress()) {
      traceEventStart(-1032287943, $changed, -1, 'com.varabyte.kobweb.navigation.Router.renderActivePage (Router.kt:165)');
    }
    var tmp0_elvis_lhs = _get_activePageMethod__dw5579(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = "Call 'navigateTo' at least once before calling 'renderActivePage'";
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var pageMethod = tmp;
    var tmp_0 = get_PageContextLocal().provides_3agxel_k$(Companion_getInstance_2().get_instance_mmff6q_k$());
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.navigation.Router.renderActivePage.<anonymous>' call
    var tmp_1 = $composer_0;
    var dispatchReceiver = composableLambda(tmp_1, -628364167, true, Router$renderActivePage$lambda(pageWrapper_0, pageMethod));
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
      // Inline function 'com.varabyte.kobweb.navigation.Router.renderActivePage.<anonymous>.<anonymous>' call
      var value = ComposableLambda$invoke$ref_3(dispatchReceiver);
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
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(Router$renderActivePage$lambda_0(this, pageWrapper_0, $changed, $default));
    }
  };
  protoOf(Router).register_mqla9e_k$ = function (route, autoPrefix, pageMethod) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(Companion_getInstance_4().isRoute_nlgap1_k$(route) ? startsWith_0(route, _Char___init__impl__6a9atx(47)) : false)) {
      // Inline function 'com.varabyte.kobweb.navigation.Router.register.<anonymous>' call
      var message = 'Registration only allowed for internal, rooted routes, e.g. /example/path. Got: ' + route;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.routeTree_1.register_u71vor_k$(prependIf(Companion_getInstance_5(), autoPrefix, route), pageMethod)) {
      // Inline function 'com.varabyte.kobweb.navigation.Router.register.<anonymous>' call
      var message_0 = 'Registration failure. Path is already registered: ' + route;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  };
  protoOf(Router).register$default_rn243d_k$ = function (route, autoPrefix, pageMethod, $super) {
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    var tmp;
    if ($super === VOID) {
      this.register_mqla9e_k$(route, autoPrefix, pageMethod);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.register_mqla9e_k$.call(this, route, autoPrefix, pageMethod);
    }
    return tmp;
  };
  protoOf(Router).registerRedirect_m67p7u_k$ = function (fromRoute, toRoute, autoPrefix) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = listOf([fromRoute, toRoute]).iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.navigation.Router.registerRedirect.<anonymous>' call
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(Companion_getInstance_4().isRoute_nlgap1_k$(element) ? startsWith_0(element, _Char___init__impl__6a9atx(47)) : false)) {
        // Inline function 'com.varabyte.kobweb.navigation.Router.registerRedirect.<anonymous>.<anonymous>' call
        var message = 'Registration only allowed for rooted routes, e.g. `/example/path`. Got: ' + element;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    var prefix = autoPrefix ? removeSuffix(Companion_getInstance_5().get_value_j01efc_k$(), '/') : '';
    this.routeTree_1.registerRedirect_o9yje9_k$(prefix + fromRoute, prefix + toRoute);
  };
  protoOf(Router).registerRedirect$default_vz67bp_k$ = function (fromRoute, toRoute, autoPrefix, $super) {
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    var tmp;
    if ($super === VOID) {
      this.registerRedirect_m67p7u_k$(fromRoute, toRoute, autoPrefix);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.registerRedirect_m67p7u_k$.call(this, fromRoute, toRoute, autoPrefix);
    }
    return tmp;
  };
  protoOf(Router).setErrorHandler_prgyif_k$ = function (errorHandler) {
    this.routeTree_1.set_errorHandler_pl76aa_k$(errorHandler);
  };
  protoOf(Router).setLegacyRouteRedirectStrategy_dj372z_k$ = function (strategy) {
    this.routeTree_1.set_legacyRouteRedirectStrategy_iwyfh2_k$(strategy);
  };
  protoOf(Router).addRouteInterceptor_kgq7h7_k$ = function (interceptor) {
    this.interceptors_1.add_utx5q5_k$(interceptor);
  };
  protoOf(Router).tryRoutingTo_5doa86_k$ = function (pathQueryAndFragment, updateHistoryMode, openLinkStrategy) {
    var tmp0_safe_receiver = Companion_getInstance_4().tryCreate_50aflp_k$(pathQueryAndFragment);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_slug(tmp0_safe_receiver);
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : substringAfterLast(tmp1_safe_receiver, _Char___init__impl__6a9atx(46), '');
    var tmp;
    if (tmp2_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      // Inline function 'com.varabyte.kobweb.navigation.Router.tryRoutingTo.<anonymous>' call
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(tmp2_safe_receiver) > 0) {
        tmp_0 = tmp2_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var extension = tmp;
    if (!(extension == null) ? !setOf(['html', 'htm']).contains_aljjnj_k$(extension) : false) {
      return false;
    }
    var pathQueryAndFragment_0 = pathQueryAndFragment;
    if (Companion_getInstance_4().isRoute_nlgap1_k$(pathQueryAndFragment_0)) {
      pathQueryAndFragment_0 = normalize(pathQueryAndFragment_0, this);
      var tmp$ret$4;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var indexedObject = pathQueryAndFragment_0;
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(indexedObject)) {
          var element = charSequenceGet(indexedObject, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'com.varabyte.kobweb.navigation.Router.tryRoutingTo.<anonymous>' call
          if (!(!(element === _Char___init__impl__6a9atx(35)) ? !(element === _Char___init__impl__6a9atx(63)) : false)) {
            tmp$ret$4 = false;
            break $l$block;
          }
        }
        tmp$ret$4 = true;
      }
      if (tmp$ret$4) {
        var route = pathQueryAndFragment_0;
        if (!this.routeTree_1.isRegistered_1ncfv6_k$(route) ? !(route === '/') : false) {
          if (endsWith(route, _Char___init__impl__6a9atx(47))) {
            var withoutSlash = removeSuffix(route, '/');
            if (this.routeTree_1.isRegistered_1ncfv6_k$(withoutSlash)) {
              pathQueryAndFragment_0 = withoutSlash;
            }
          } else {
            var withSlash = route + '/';
            if (this.routeTree_1.isRegistered_1ncfv6_k$(withSlash)) {
              pathQueryAndFragment_0 = withSlash;
            }
          }
        }
      }
    }
    if (!openLinkStrategy.equals(OpenLinkStrategy_IN_PLACE_getInstance())) {
      open(window, pathQueryAndFragment_0, openLinkStrategy);
      return true;
    }
    var tmp_1;
    if (updatePageContext(Companion_getInstance_2().get_instance_mmff6q_k$(), this, pathQueryAndFragment_0)) {
      pathQueryAndFragment_0 = Companion_getInstance_2().get_instance_mmff6q_k$().get_route_iy3cio_k$().get_path_wos8ry_k$() + partitionPath(pathQueryAndFragment_0, this).get_second_jf7fjx_k$();
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var url = window.location.origin + pathQueryAndFragment_0;
      if (!(window.location.href === url)) {
        var newPathname = !(window.location.pathname === Companion_getInstance_4().fromUrl_6grbna_k$(new URL(url)).get_path_wos8ry_k$());
        var tmp0 = updateHistoryMode.get_ordinal_ip24qg_k$();
        if (tmp0 === 0) {
          window.history.pushState(window.history.state, '', url);
        } else if (tmp0 === 1) {
          window.history.replaceState(window.history.state, '', url);
        }
        if (newPathname) {
          var tmp1_safe_receiver_0 = document.documentElement;
          if (tmp1_safe_receiver_0 != null) {
            tmp1_safe_receiver_0.scrollTop = 0.0;
          }
        }
      }
      var tmp_2;
      if (contains(url, _Char___init__impl__6a9atx(35))) {
        var fragment = substringAfter(url, _Char___init__impl__6a9atx(35));
        var attempts = {_v: 10};
        // Inline function 'kotlin.time.Companion.milliseconds' call
        Companion_getInstance_0();
        var timeToWaitPerAttempt = toDuration(100, DurationUnit_MILLISECONDS_getInstance());
        var handle = {_v: Companion_getInstance_1().get_Stub_woa49j_k$()};
        var tmp_3 = window;
        handle._v = setInterval(tmp_3, timeToWaitPerAttempt, Router$tryRoutingTo$lambda(fragment, attempts, handle));
        tmp_2 = Unit_getInstance();
      }
      tmp_1 = true;
    } else {
      tmp_1 = false;
    }
    return tmp_1;
  };
  protoOf(Router).tryRoutingTo$default_gm9buu_k$ = function (pathQueryAndFragment, updateHistoryMode, openLinkStrategy, $super) {
    updateHistoryMode = updateHistoryMode === VOID ? UpdateHistoryMode_PUSH_getInstance() : updateHistoryMode;
    openLinkStrategy = openLinkStrategy === VOID ? OpenLinkStrategy_IN_PLACE_getInstance() : openLinkStrategy;
    return $super === VOID ? this.tryRoutingTo_5doa86_k$(pathQueryAndFragment, updateHistoryMode, openLinkStrategy) : $super.tryRoutingTo_5doa86_k$.call(this, pathQueryAndFragment, updateHistoryMode, openLinkStrategy);
  };
  protoOf(Router).navigateTo_5oprea_k$ = function (pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy, openExternalLinksStrategy) {
    if (!this.tryRoutingTo_5doa86_k$(pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy)) {
      open(window, pathQueryAndFragment, openExternalLinksStrategy);
    }
  };
  protoOf(Router).navigateTo$default_onbd51_k$ = function (pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy, openExternalLinksStrategy, $super) {
    updateHistoryMode = updateHistoryMode === VOID ? UpdateHistoryMode_PUSH_getInstance() : updateHistoryMode;
    openInternalLinksStrategy = openInternalLinksStrategy === VOID ? OpenLinkStrategy_IN_PLACE_getInstance() : openInternalLinksStrategy;
    openExternalLinksStrategy = openExternalLinksStrategy === VOID ? OpenLinkStrategy_IN_NEW_TAB_getInstance() : openExternalLinksStrategy;
    var tmp;
    if ($super === VOID) {
      this.navigateTo_5oprea_k$(pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy, openExternalLinksStrategy);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.navigateTo_5oprea_k$.call(this, pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy, openExternalLinksStrategy);
    }
    return tmp;
  };
  function _get_route__bsf68o_0($this) {
    return $this.route_1;
  }
  function RouteInterceptorScope(pathQueryAndFragment) {
    this.route_1 = new Route(pathQueryAndFragment);
    this.path_1 = this.route_1.get_path_wos8ry_k$();
    this.queryParams_1 = toMutableMap(this.route_1.get_queryParams_8o6v3v_k$());
    this.fragment_1 = this.route_1.get_fragment_bxnb4p_k$();
  }
  protoOf(RouteInterceptorScope).set_path_tgrnnc_k$ = function (value) {
    this.path_1 = startsWith_0(value, _Char___init__impl__6a9atx(47)) ? value : '/' + value;
  };
  protoOf(RouteInterceptorScope).get_path_wos8ry_k$ = function () {
    return this.path_1;
  };
  protoOf(RouteInterceptorScope).set_queryParams_v3ipd5_k$ = function (_set____db54di) {
    this.queryParams_1 = _set____db54di;
  };
  protoOf(RouteInterceptorScope).get_queryParams_8o6v3v_k$ = function () {
    return this.queryParams_1;
  };
  protoOf(RouteInterceptorScope).set_fragment_dufueu_k$ = function (_set____db54di) {
    this.fragment_1 = _set____db54di;
  };
  protoOf(RouteInterceptorScope).get_fragment_bxnb4p_k$ = function () {
    return this.fragment_1;
  };
  protoOf(RouteInterceptorScope).get_pathQueryAndFragment_8mv2zx_k$ = function () {
    return Route_init_$Create$(this.path_1, this.queryParams_1, this.fragment_1).toString();
  };
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$RouterKt$lambda_1$lambda_cmwzz7(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(it) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-12986461, $dirty, -1, 'com.varabyte.kobweb.navigation.ComposableSingletons$RouterKt.lambda-1.<anonymous> (Router.kt:165)');
      }
      it($composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$RouterKt() {
    ComposableSingletons$RouterKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(-12986461, false, ComposableSingletons$RouterKt$lambda_1$lambda_cmwzz7));
  }
  protoOf(ComposableSingletons$RouterKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$RouterKt_instance;
  function ComposableSingletons$RouterKt_getInstance() {
    if (ComposableSingletons$RouterKt_instance == null)
      new ComposableSingletons$RouterKt();
    return ComposableSingletons$RouterKt_instance;
  }
  var UpdateHistoryMode_PUSH_instance;
  var UpdateHistoryMode_REPLACE_instance;
  function values_1() {
    return [UpdateHistoryMode_PUSH_getInstance(), UpdateHistoryMode_REPLACE_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'PUSH':
        return UpdateHistoryMode_PUSH_getInstance();
      case 'REPLACE':
        return UpdateHistoryMode_REPLACE_getInstance();
      default:
        UpdateHistoryMode_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
  }
  var UpdateHistoryMode_entriesInitialized;
  function UpdateHistoryMode_initEntries() {
    if (UpdateHistoryMode_entriesInitialized)
      return Unit_getInstance();
    UpdateHistoryMode_entriesInitialized = true;
    UpdateHistoryMode_PUSH_instance = new UpdateHistoryMode('PUSH', 0);
    UpdateHistoryMode_REPLACE_instance = new UpdateHistoryMode('REPLACE', 1);
  }
  var $ENTRIES_1;
  function UpdateHistoryMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var com_varabyte_kobweb_navigation_Router$stable;
  function UpdateHistoryMode_PUSH_getInstance() {
    UpdateHistoryMode_initEntries();
    return UpdateHistoryMode_PUSH_instance;
  }
  function UpdateHistoryMode_REPLACE_getInstance() {
    UpdateHistoryMode_initEntries();
    return UpdateHistoryMode_REPLACE_instance;
  }
  function activePageMethod$factory() {
    return getPropertyCallableRef('activePageMethod', 1, KMutableProperty1, function (receiver) {
      return _get_activePageMethod__dw5579(receiver);
    }, function (receiver, value) {
      return _set_activePageMethod__f6z3vj(receiver, value);
    });
  }
  function activePageMethod$factory_0() {
    return getPropertyCallableRef('activePageMethod', 1, KMutableProperty1, function (receiver) {
      return _get_activePageMethod__dw5579(receiver);
    }, function (receiver, value) {
      return _set_activePageMethod__f6z3vj(receiver, value);
    });
  }
  //region block: init
  com_varabyte_kobweb_navigation_Router$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_api;
  _.$_$.b = initKobweb;
  _.$_$.c = KobwebApp;
  _.$_$.d = rememberPageContext;
  _.$_$.e = Anchor;
  _.$_$.f = Router;
  _.$_$.g = prependIf;
  _.$_$.h = LegacyRouteRedirectStrategy_DISALLOW_getInstance;
  _.$_$.i = UpdateHistoryMode_REPLACE_getInstance;
  _.$_$.j = AppGlobals_getInstance;
  _.$_$.k = Companion_getInstance_5;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-kobweb-core.js.map
