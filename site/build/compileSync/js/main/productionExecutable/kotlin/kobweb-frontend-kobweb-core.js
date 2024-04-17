(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-runtime-runtime.js', './html-html-core.js', './kobweb-frontend-browser-ext.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./html-html-core.js'), require('./kobweb-frontend-browser-ext.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-kobweb-core'.");
    }
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-core'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-kobweb-core'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-core'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-kobweb-core'.");
    }
    if (typeof this['kobweb-frontend-browser-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-core'. Its dependency 'kobweb-frontend-browser-ext' was not found. Please, check whether 'kobweb-frontend-browser-ext' is loaded prior to 'kobweb-frontend-kobweb-core'.");
    }
    root['kobweb-frontend-kobweb-core'] = factory(typeof this['kobweb-frontend-kobweb-core'] === 'undefined' ? {} : this['kobweb-frontend-kobweb-core'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-compose-runtime-runtime'], this['html-html-core'], this['kobweb-frontend-browser-ext']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_browser_ext) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.d2;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var Style = kotlin_org_jetbrains_compose_html_html_core.$_$.y3;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.a3;
  var padding = kotlin_org_jetbrains_compose_html_html_core.$_$.x2;
  var margin = kotlin_org_jetbrains_compose_html_html_core.$_$.q2;
  var boxSizing = kotlin_org_jetbrains_compose_html_html_core.$_$.p1;
  var StyleSheet = kotlin_org_jetbrains_compose_html_html_core.$_$.h1;
  var VOID = kotlin_kotlin.$_$.c;
  var StyleSheet_init_$Init$ = kotlin_org_jetbrains_compose_html_html_core.$_$.b;
  var protoOf = kotlin_kotlin.$_$.j6;
  var objectMeta = kotlin_kotlin.$_$.i6;
  var setMetadataFor = kotlin_kotlin.$_$.k6;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var toString = kotlin_kotlin.$_$.m6;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.e1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.q1;
  var substringAfterLast = kotlin_kotlin.$_$.v7;
  var plus = kotlin_kotlin.$_$.z3;
  var equals = kotlin_kotlin.$_$.q5;
  var getStringHashCode = kotlin_kotlin.$_$.v5;
  var hashCode = kotlin_kotlin.$_$.w5;
  var classMeta = kotlin_kotlin.$_$.n5;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.a9;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var A = kotlin_org_jetbrains_compose_html_html_core.$_$.i3;
  var Enum = kotlin_kotlin.$_$.h8;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.w;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.g;
  var charSequenceLength = kotlin_kotlin.$_$.m5;
  var joinToString = kotlin_kotlin.$_$.l3;
  var objectCreate = kotlin_kotlin.$_$.h6;
  var removePrefix = kotlin_kotlin.$_$.m7;
  var startsWith = kotlin_kotlin.$_$.t7;
  var drop = kotlin_kotlin.$_$.d7;
  var first = kotlin_kotlin.$_$.g7;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.o;
  var charArrayOf = kotlin_kotlin.$_$.k5;
  var split = kotlin_kotlin.$_$.r7;
  var getOrNull = kotlin_kotlin.$_$.i3;
  var Exception = kotlin_kotlin.$_$.j8;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.a1;
  var captureStack = kotlin_kotlin.$_$.j5;
  var substringAfterLast_0 = kotlin_kotlin.$_$.w7;
  var ensureNotNull = kotlin_kotlin.$_$.u8;
  var isBlank = kotlin_kotlin.$_$.h7;
  var startsWith_0 = kotlin_kotlin.$_$.u7;
  var endsWith = kotlin_kotlin.$_$.e7;
  var dropLast = kotlin_kotlin.$_$.c7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.h;
  var kebabCaseToCamelCase = kotlin_com_varabyte_kobweb_browser_ext.$_$.b;
  var replace = kotlin_kotlin.$_$.p7;
  var contains = kotlin_kotlin.$_$.a7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.b1;
  var get_lastIndex = kotlin_kotlin.$_$.o3;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var emptyMap = kotlin_kotlin.$_$.b3;
  var last = kotlin_kotlin.$_$.q3;
  var replace_0 = kotlin_kotlin.$_$.q7;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var THROW_CCE = kotlin_kotlin.$_$.n8;
  var Div = kotlin_org_jetbrains_compose_html_html_core.$_$.l3;
  var Text = kotlin_org_jetbrains_compose_html_html_core.$_$.a4;
  var substringBefore = kotlin_kotlin.$_$.a8;
  var to = kotlin_kotlin.$_$.c9;
  var CompositionLocalProvider = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var setOf = kotlin_kotlin.$_$.f4;
  var charSequenceGet = kotlin_kotlin.$_$.l5;
  var removeSuffix = kotlin_kotlin.$_$.n7;
  var substringAfter = kotlin_kotlin.$_$.x7;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.a2;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.d;
  var toDuration = kotlin_kotlin.$_$.f8;
  var Companion_getInstance_1 = kotlin_com_varabyte_kobweb_browser_ext.$_$.f;
  var setInterval = kotlin_com_varabyte_kobweb_browser_ext.$_$.d;
  var toMutableMap = kotlin_kotlin.$_$.l4;
  var KMutableProperty1 = kotlin_kotlin.$_$.t6;
  var getPropertyCallableRef = kotlin_kotlin.$_$.u5;
  //endregion
  //region block: pre-declaration
  setMetadataFor(DefaultStyleSheet, 'DefaultStyleSheet', objectMeta, StyleSheet);
  setMetadataFor(AppGlobals, 'AppGlobals', objectMeta);
  setMetadataFor(RouteInfo, 'RouteInfo', classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(PageContext, 'PageContext', classMeta);
  setMetadataFor(InitKobwebContext, 'InitKobwebContext', classMeta);
  setMetadataFor(MutableKobwebConfig, 'MutableKobwebConfig', classMeta, VOID, VOID, MutableKobwebConfig);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(MutableOpenLinkStrategies, 'MutableOpenLinkStrategies', classMeta, VOID, VOID, MutableOpenLinkStrategies);
  setMetadataFor(OpenLinkStrategy, 'OpenLinkStrategy', classMeta, Enum);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(Route, 'Route', classMeta);
  setMetadataFor(RouteException, 'RouteException', classMeta, Exception);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(RoutePrefixImpl, 'RoutePrefixImpl', classMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
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
  function KobwebApp(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h19(-728368768);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.k18(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.k17()) {
      if (isTraceInProgress()) {
        traceEventStart(-728368768, $dirty, -1, 'com.varabyte.kobweb.core.KobwebApp (App.kt:39)');
      }
      // Inline function 'org.jetbrains.compose.web.css.Style' call
      var styleSheet = DefaultStyleSheet_getInstance();
      var $composer_1 = $composer_0;
      $composer_1.p17(-1196466140);
      Style(null, styleSheet.a28(), $composer_1, 0, 1);
      $composer_1.q17();
      content($composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.b12();
    }
    var tmp0_safe_receiver = $composer_0.i19();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.f1e(KobwebApp$lambda(content, $changed));
    }
  }
  function DefaultStyleSheet$lambda($this$null) {
    padding($this$null, [get_px(0)]);
    margin($this$null, [get_px(0)]);
    return Unit_instance;
  }
  function DefaultStyleSheet$lambda_0($this$null) {
    boxSizing($this$null, 'border-box');
    return Unit_instance;
  }
  function DefaultStyleSheet() {
    DefaultStyleSheet_instance = this;
    StyleSheet_init_$Init$(VOID, VOID, this);
    this.f28('html, body', DefaultStyleSheet$lambda);
    this.f28('*', DefaultStyleSheet$lambda_0);
  }
  protoOf(DefaultStyleSheet).e28 = function (selector, cssRule) {
    return this.d28(selector, cssRule);
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
      return Unit_instance;
    };
  }
  function AppGlobals() {
  }
  protoOf(AppGlobals).d2j = function (values) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!!(this.c2j_1 == null)) {
      // Inline function 'com.varabyte.kobweb.core.AppGlobals.initialize.<anonymous>' call
      var message = 'Cannot initialize AppGlobals more than once';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.c2j_1 = values;
  };
  var AppGlobals_instance;
  function AppGlobals_getInstance() {
    return AppGlobals_instance;
  }
  function get_PageContextLocal() {
    _init_properties_PageContext_kt__u2hiem();
    return PageContextLocal;
  }
  var PageContextLocal;
  function RouteInfo(route, dynamicParams) {
    this.e2j_1 = route;
    this.f2j_1 = dynamicParams;
    this.g2j_1 = substringAfterLast(this.e2j_1.m2j_1, _Char___init__impl__6a9atx(47));
    this.h2j_1 = this.e2j_1.m2j_1;
    this.i2j_1 = plus(this.e2j_1.n2j_1, this.f2j_1);
    this.j2j_1 = this.e2j_1.n2j_1;
    this.k2j_1 = this.e2j_1.o2j_1;
  }
  protoOf(RouteInfo).p2j = function () {
    return this.e2j_1.toString();
  };
  protoOf(RouteInfo).toString = function () {
    return this.p2j();
  };
  protoOf(RouteInfo).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof RouteInfo) {
      tmp_1 = other.h2j_1 === this.h2j_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals(other.i2j_1, this.i2j_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.k2j_1 == this.k2j_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(RouteInfo).hashCode = function () {
    var result = getStringHashCode(this.h2j_1);
    result = imul(31, result) + hashCode(this.i2j_1) | 0;
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.k2j_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(RouteInfo).q2j = function (path, queryParams, fragment, dynamicParams) {
    return new RouteInfo(Route_init_$Create$(path, queryParams, fragment), dynamicParams);
  };
  protoOf(RouteInfo).r2j = function (path, queryParams, fragment, dynamicParams, $super) {
    path = path === VOID ? this.e2j_1.m2j_1 : path;
    queryParams = queryParams === VOID ? this.e2j_1.n2j_1 : queryParams;
    fragment = fragment === VOID ? this.e2j_1.o2j_1 : fragment;
    dynamicParams = dynamicParams === VOID ? this.f2j_1 : dynamicParams;
    return $super === VOID ? this.q2j(path, queryParams, fragment, dynamicParams) : $super.q2j.call(this, path, queryParams, fragment, dynamicParams);
  };
  function Companion() {
  }
  protoOf(Companion).t2j = function () {
    var tmp = this.s2j_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('instance');
    }
  };
  protoOf(Companion).u2j = function (router) {
    this.s2j_1 = new PageContext(router);
  };
  var Companion_instance;
  function Companion_getInstance_2() {
    return Companion_instance;
  }
  function PageContext(router) {
    this.v2j_1 = router;
    this.w2j_1 = mutableStateOf(null);
  }
  protoOf(PageContext).x2j = function (value) {
    this.w2j_1.kq(value);
  };
  protoOf(PageContext).y2j = function () {
    var tmp0_elvis_lhs = this.w2j_1.j2();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'PageContext route info is only valid within a @Page composable';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  function rememberPageContext($composer, $changed) {
    _init_properties_PageContext_kt__u2hiem();
    var $composer_0 = $composer;
    $composer_0.p17(979146567);
    if (isTraceInProgress()) {
      traceEventStart(979146567, $changed, -1, 'com.varabyte.kobweb.core.rememberPageContext (PageContext.kt:165)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_PageContextLocal();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.c19(this_0);
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
    $composer_0.q17();
    return tmp0_0;
  }
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
    this.z2j_1 = config;
    this.a2k_1 = router;
  }
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
    this.b2k_1 = new MutableOpenLinkStrategies();
  }
  protoOf(MutableKobwebConfig).c2k = function () {
    return this.b2k_1;
  };
  function Companion_0() {
  }
  protoOf(Companion_0).d2k = function () {
    return get_MutableKobwebConfigInstance();
  };
  var Companion_instance_0;
  function Companion_getInstance_3() {
    return Companion_instance_0;
  }
  function MutableOpenLinkStrategies(internal, external) {
    internal = internal === VOID ? OpenLinkStrategy_IN_PLACE_getInstance() : internal;
    external = external === VOID ? OpenLinkStrategy_IN_NEW_TAB_getInstance() : external;
    this.e2k_1 = internal;
    this.f2k_1 = external;
  }
  protoOf(MutableOpenLinkStrategies).g2k = function () {
    return this.e2k_1;
  };
  protoOf(MutableOpenLinkStrategies).h2k = function () {
    return this.f2k_1;
  };
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
    $composer_0 = $composer_0.h19(1753910468);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.iz(href) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.k18(attrs_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.iz(openInternalLinksStrategy_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.iz(openExternalLinksStrategy_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.l18(autoPrefix_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.k18(content_0._v) ? 131072 : 65536);
    if (!(($dirty & 374491) === 74898) ? true : !$composer_0.k17()) {
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
      var href_0 = prependIf(Companion_instance_2, autoPrefix_0._v, href);
      var ctx = rememberPageContext($composer_0, 0);
      A(href_0, Anchor$lambda(attrs_0, openInternalLinksStrategy_0, openExternalLinksStrategy_0, ctx, href_0), content_0._v, $composer_0, 896 & $dirty >> 9, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.b12();
    }
    var tmp0_safe_receiver = $composer_0.i19();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.f1e(Anchor$lambda_0(href, attrs_0, openInternalLinksStrategy_0, openExternalLinksStrategy_0, autoPrefix_0, content_0, $changed, $default));
    }
  }
  function Anchor$lambda$lambda($openInternalLinksStrategy, $openExternalLinksStrategy, $ctx, $href) {
    return function (evt) {
      var tmp0_elvis_lhs = $openInternalLinksStrategy._v;
      var openInternalLinksStrategy = tmp0_elvis_lhs == null ? toOpenLinkStrategy(evt, Companion_instance_0.d2k().c2k().g2k()) : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = $openExternalLinksStrategy._v;
      var openExternalLinksStrategy = tmp1_elvis_lhs == null ? toOpenLinkStrategy(evt, Companion_instance_0.d2k().c2k().h2k()) : tmp1_elvis_lhs;
      $ctx.v2j_1.l2k($href, VOID, openInternalLinksStrategy, openExternalLinksStrategy);
      evt.q2a();
      evt.r2a();
      return Unit_instance;
    };
  }
  function Anchor$lambda($attrs, $openInternalLinksStrategy, $openExternalLinksStrategy, $ctx, $href) {
    return function ($this$A) {
      var tmp;
      if (!($attrs._v == null)) {
        tmp = $attrs._v($this$A);
      }
      $this$A.t24(Anchor$lambda$lambda($openInternalLinksStrategy, $openExternalLinksStrategy, $ctx, $href));
      return Unit_instance;
    };
  }
  function Anchor$lambda_0($href, $attrs, $openInternalLinksStrategy, $openExternalLinksStrategy, $autoPrefix, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Anchor($href, $attrs._v, $openInternalLinksStrategy._v, $openExternalLinksStrategy._v, $autoPrefix._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var OpenLinkStrategy_IN_PLACE_instance;
  var OpenLinkStrategy_IN_NEW_TAB_instance;
  var OpenLinkStrategy_entriesInitialized;
  function OpenLinkStrategy_initEntries() {
    if (OpenLinkStrategy_entriesInitialized)
      return Unit_instance;
    OpenLinkStrategy_entriesInitialized = true;
    OpenLinkStrategy_IN_PLACE_instance = new OpenLinkStrategy('IN_PLACE', 0);
    OpenLinkStrategy_IN_NEW_TAB_instance = new OpenLinkStrategy('IN_NEW_TAB', 1);
  }
  function OpenLinkStrategy(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function open(_this__u8e3s4, href, strategy) {
    var tmp0 = strategy.t9_1;
    if (tmp0 === 0) {
      _this__u8e3s4.open(href, '_self');
    } else if (tmp0 === 1) {
      _this__u8e3s4.open(href, '_blank');
    }
  }
  function toOpenLinkStrategy(_this__u8e3s4, default_0) {
    default_0 = default_0 === VOID ? OpenLinkStrategy_IN_PLACE_getInstance() : default_0;
    return (_this__u8e3s4.k2b_1 ? true : _this__u8e3s4.w2b_1) ? OpenLinkStrategy_IN_NEW_TAB_getInstance() : default_0;
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
    this_0.q5(path);
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!queryParams.o()) {
      this_0.r5(_Char___init__impl__6a9atx(63));
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(queryParams.i());
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator = queryParams.f2().k();
      while (tmp0_iterator.x()) {
        var item = tmp0_iterator.z();
        // Inline function 'com.varabyte.kobweb.navigation.Route.<init>.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.component1' call
        var key = item.i2();
        // Inline function 'kotlin.collections.component2' call
        var value = item.j2();
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_1 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.navigation.Route.<init>.<anonymous>.<anonymous>.<anonymous>' call
        this_1.q5(key);
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(value) > 0) {
          this_1.r5(_Char___init__impl__6a9atx(61));
          this_1.q5(value);
        }
        var tmp$ret$7 = this_1.toString();
        destination.u(tmp$ret$7);
      }
      this_0.q5(joinToString(destination, '&'));
    }
    if (!(fragment == null)) {
      this_0.r5(_Char___init__impl__6a9atx(35));
      this_0.q5(fragment);
    }
    var tmp$ret$11 = this_0.toString();
    Route.call($this, tmp$ret$11);
    return $this;
  }
  function Route_init_$Create$(path, queryParams, fragment) {
    return Route_init_$Init$(path, queryParams, fragment, objectCreate(protoOf(Route)));
  }
  function Companion_1() {
  }
  protoOf(Companion_1).m2k = function (path) {
    return !(this.n2k(path) == null);
  };
  protoOf(Companion_1).n2k = function (path) {
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
  protoOf(Companion_1).o2k = function (url) {
    var tmp0_elvis_lhs = this.n2k(removePrefix(url.href, url.origin));
    return tmp0_elvis_lhs == null ? new Route('') : tmp0_elvis_lhs;
  };
  var Companion_instance_1;
  function Companion_getInstance_4() {
    return Companion_instance_1;
  }
  function Route(pathQueryAndFragment) {
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
    this.l2j_1 = new URL(pathQueryAndFragment, 'http://unused.com');
    var isAbsolute = startsWith(pathQueryAndFragment, '/');
    var tmp_1 = this;
    var tmp_2;
    if (isAbsolute) {
      tmp_2 = this.l2j_1.pathname;
    } else {
      // Inline function 'kotlin.also' call
      var this_0 = drop(this.l2j_1.pathname, 1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.navigation.Route.<anonymous>' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(first(this.l2j_1.pathname) === _Char___init__impl__6a9atx(47))) {
        // Inline function 'kotlin.check.<anonymous>' call
        var message = 'Check failed.';
        throw IllegalStateException_init_$Create$(toString(message));
      }
      tmp_2 = this_0;
    }
    tmp_1.m2j_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.collections.mutableMapOf' call
    var this_1 = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    $l$block: {
      // Inline function 'com.varabyte.kobweb.navigation.Route.<anonymous>' call
      // Inline function 'kotlin.text.isEmpty' call
      var this_2 = this.l2j_1.search;
      if (charSequenceLength(this_2) === 0) {
        break $l$block;
      }
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = split(removePrefix(this.l2j_1.search, '?'), charArrayOf([_Char___init__impl__6a9atx(38)])).k();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        // Inline function 'com.varabyte.kobweb.navigation.Route.<anonymous>.<anonymous>' call
        var keyValue = split(element, charArrayOf([_Char___init__impl__6a9atx(61)]), VOID, 2);
        var key = keyValue.j(0);
        // Inline function 'kotlin.collections.set' call
        // Inline function 'kotlin.collections.elementAtOrNull' call
        var tmp0_elvis_lhs = getOrNull(keyValue, 1);
        var value = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        this_1.g2(key, value);
      }
    }
    tmp_3.n2j_1 = this_1;
    var tmp_4 = this;
    // Inline function 'kotlin.takeIf' call
    var this_3 = this.l2j_1.hash;
    // Inline function 'kotlin.contracts.contract' call
    var tmp_5;
    // Inline function 'com.varabyte.kobweb.navigation.Route.<anonymous>' call
    if (startsWith(this_3, '#')) {
      tmp_5 = this_3;
    } else {
      tmp_5 = null;
    }
    var tmp0_safe_receiver = tmp_5;
    tmp_4.o2j_1 = tmp0_safe_receiver == null ? null : removePrefix(tmp0_safe_receiver, '#');
  }
  protoOf(Route).toString = function () {
    return this.m2j_1 + this.l2j_1.search + this.l2j_1.hash;
  };
  function RouteException(value) {
    Exception_init_$Init$('Failed to create a route. Routes should be valid URLs without a leading domain. Got: ' + value, this);
    captureStack(this, RouteException);
  }
  function get_slug(_this__u8e3s4) {
    return substringAfterLast_0(_this__u8e3s4.m2j_1, '/');
  }
  function prependIf(_this__u8e3s4, condition, path) {
    return condition ? Companion_instance_2.p2k(path) : path;
  }
  function Companion_2() {
  }
  protoOf(Companion_2).q2k = function (value) {
    Companion_instance_3.s2k(new RoutePrefixImpl(value));
  };
  protoOf(Companion_2).j2 = function () {
    return Companion_instance_3.t2j().t2k_1;
  };
  protoOf(Companion_2).p2k = function (path) {
    return Companion_instance_3.t2j().p2k(path);
  };
  var Companion_instance_2;
  function Companion_getInstance_5() {
    return Companion_instance_2;
  }
  function Companion_3() {
    this.r2k_1 = null;
  }
  protoOf(Companion_3).s2k = function (value) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.r2k_1 == null)) {
      // Inline function 'com.varabyte.kobweb.navigation.Companion.<set-_instance>.<anonymous>' call
      var message = 'Cannot overwrite route prefix once set';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.r2k_1 = value;
  };
  protoOf(Companion_3).u2k = function () {
    if (this.r2k_1 == null) {
      this.r2k_1 = new RoutePrefixImpl('');
    }
    return this.r2k_1;
  };
  protoOf(Companion_3).t2j = function () {
    return ensureNotNull(this.u2k());
  };
  var Companion_instance_3;
  function Companion_getInstance_6() {
    return Companion_instance_3;
  }
  function RoutePrefixImpl(value) {
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
    tmp.t2k_1 = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
  }
  protoOf(RoutePrefixImpl).p2k = function (path) {
    if (isBlank(this.t2k_1))
      return path;
    if (!startsWith(path, '/'))
      return path;
    return dropLast(this.t2k_1, 1) + path;
  };
  protoOf(RoutePrefixImpl).toString = function () {
    return this.t2k_1;
  };
  function remove(_this__u8e3s4, path) {
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    var this_0 = _this__u8e3s4.j2();
    if (charSequenceLength(this_0) > 0) {
      tmp = removePrefix(path, dropLast(_this__u8e3s4.j2(), 1));
    } else {
      tmp = path;
    }
    return tmp;
  }
  function Companion_4() {
    this.v2k_1 = false;
  }
  var Companion_instance_4;
  function Companion_getInstance_7() {
    return Companion_instance_4;
  }
  function Node(parent, name, method) {
    parent = parent === VOID ? null : parent;
    this.w2k_1 = parent;
    this.x2k_1 = name;
    this.y2k_1 = method;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.z2k_1 = ArrayList_init_$Create$_0();
    this.a2l_1 = this.z2k_1;
  }
  protoOf(Node).b2l = function (name) {
    var tmp;
    if (this.x2k_1 === name) {
      tmp = true;
    } else {
      var tmp_0;
      if (Companion_instance_4.v2k_1 ? contains(this.x2k_1, _Char___init__impl__6a9atx(45)) : false) {
        var isLastPart = this.a2l_1.o();
        var tmp_1;
        if (isLastPart) {
          tmp_1 = replace(this.x2k_1, '-', '') === name;
        } else {
          tmp_1 = kebabCaseToCamelCase(this.x2k_1) === name;
        }
        tmp_0 = tmp_1;
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Node).c2l = function (routePart, method) {
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
    this.z2k_1.u(node);
    return node;
  };
  protoOf(Node).d2l = function (routePart) {
    // Inline function 'kotlin.collections.find' call
    var this_0 = this.z2k_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = this_0.k();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        // Inline function 'com.varabyte.kobweb.navigation.Node.findChild.<anonymous>' call
        if (element.b2l(routePart)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
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
  protoOf(DynamicNode).b2l = function (name) {
    return true;
  };
  function toRouteString(_this__u8e3s4, $this) {
    return '/' + joinToString(_this__u8e3s4, '/', VOID, VOID, VOID, VOID, RouteTree$toRouteString$lambda);
  }
  function resolve($this, route) {
    var routeParts = split(route, charArrayOf([_Char___init__impl__6a9atx(47)]));
    // Inline function 'kotlin.collections.mutableListOf' call
    var resolved = ArrayList_init_$Create$_0();
    var currNode = $this.j2l_1;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(routeParts.j(0) === $this.j2l_1.x2k_1)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 1;
    var last = routeParts.i();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var routePart = routeParts.j(i);
        var tmp1_elvis_lhs = currNode.d2l(routePart);
        var tmp;
        if (tmp1_elvis_lhs == null) {
          return null;
        } else {
          tmp = tmp1_elvis_lhs;
        }
        currNode = tmp;
        resolved.u(currNode);
      }
       while (inductionVariable < last);
    return resolved;
  }
  function resolveAllowingRedirects($this, route, showLegacyWarning) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = route;
    var tmp0_iterator = $this.k2l_1.k();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.navigation.RouteTree.resolveAllowingRedirects.<anonymous>' call
      var route_0 = accumulator;
      var tmp0_elvis_lhs = element.p2l(route_0);
      accumulator = tmp0_elvis_lhs == null ? route_0 : tmp0_elvis_lhs;
    }
    var redirectedRoute = accumulator;
    var resolvedNodes = resolve($this, redirectedRoute);
    if (resolvedNodes == null ? !$this.m2l_1.equals(LegacyRouteRedirectStrategy_DISALLOW_getInstance()) : false) {
      Companion_instance_4.v2k_1 = true;
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
        Companion_instance_4.v2k_1 = false;
      }
    }
    return resolvedNodes;
  }
  function checkRoute($this, route) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.j2l_1.a2l_1.o()) {
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
    return it.x2k_1;
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.i17(p0, p1);
    };
  }
  function RouteTree$createPageData$lambda(this$0) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.k17()) {
        if (isTraceInProgress()) {
          traceEventStart(1742599790, $changed, -1, 'com.varabyte.kobweb.navigation.RouteTree.createPageData.<anonymous> (RouteTree.kt:231)');
        }
        this$0.l2l_1(404, $composer_0, 6);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.b12();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function RouteTree() {
    this.j2l_1 = new RootNode();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.k2l_1 = ArrayList_init_$Create$_0();
    this.l2l_1 = ComposableSingletons$RouteTreeKt_getInstance().q2l_1;
    this.m2l_1 = LegacyRouteRedirectStrategy_WARN_getInstance();
  }
  protoOf(RouteTree).r2l = function (route) {
    return !(checkRoute(this, route) == null);
  };
  protoOf(RouteTree).s2l = function (route, method) {
    if (!(resolve(this, route) == null))
      return false;
    var routeParts = split(route, charArrayOf([_Char___init__impl__6a9atx(47)]));
    var currNode = this.j2l_1;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(routeParts.j(0) === this.j2l_1.x2k_1)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 1;
    var last = routeParts.i();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var routePart = routeParts.j(i);
        var tmp1_elvis_lhs = currNode.d2l(routePart);
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
          tmp = tmp_0.c2l(routePart, tmp$ret$2);
        } else {
          tmp = tmp1_elvis_lhs;
        }
        currNode = tmp;
      }
       while (inductionVariable < last);
    return true;
  };
  protoOf(RouteTree).t2l = function (route) {
    var errorPageMethod = ComposableLambda$invoke$ref(composableLambdaInstance(1742599790, true, RouteTree$createPageData$lambda(this)));
    var tmp0_elvis_lhs = resolveAllowingRedirects(this, route.m2j_1, this.m2l_1.equals(LegacyRouteRedirectStrategy_WARN_getInstance()));
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return new PageData(errorPageMethod, new RouteInfo(route, emptyMap()));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var resolvedNodes = tmp;
    var tmp1_elvis_lhs = last(resolvedNodes).y2k_1;
    var pageMethod = tmp1_elvis_lhs == null ? errorPageMethod : tmp1_elvis_lhs;
    // Inline function 'kotlin.collections.mutableMapOf' call
    var dynamicParams = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = resolvedNodes.k();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.navigation.RouteTree.createPageData.<anonymous>' call
      if (element instanceof DynamicNode) {
        var routePart = element.x2k_1;
        // Inline function 'kotlin.collections.set' call
        var key = element.x2k_1;
        dynamicParams.g2(key, routePart);
        if (!this.m2l_1.equals(LegacyRouteRedirectStrategy_DISALLOW_getInstance()) ? contains(element.x2k_1, _Char___init__impl__6a9atx(45)) : false) {
          // Inline function 'kotlin.collections.set' call
          var key_0 = replace(element.x2k_1, '-', '');
          dynamicParams.g2(key_0, routePart);
          // Inline function 'kotlin.collections.set' call
          var key_1 = kebabCaseToCamelCase(element.x2k_1);
          dynamicParams.g2(key_1, routePart);
          // Inline function 'kotlin.collections.set' call
          var key_2 = replace_0(element.x2k_1, _Char___init__impl__6a9atx(45), _Char___init__impl__6a9atx(95));
          dynamicParams.g2(key_2, routePart);
        }
      }
    }
    return new PageData(pageMethod, new RouteInfo(Route_init_$Create$(toRouteString(resolvedNodes, this), route.n2j_1, route.o2j_1), dynamicParams));
  };
  function PageData(pageMethod, routeInfo) {
    this.u2l_1 = pageMethod;
    this.v2l_1 = routeInfo;
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
    };
  }
  function ComposableSingletons$RouteTreeKt$lambda_1$lambda_h43un7(errorCode, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.m18(errorCode) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.k17()) {
      if (isTraceInProgress()) {
        traceEventStart(-557678680, $dirty, -1, 'com.varabyte.kobweb.navigation.ComposableSingletons$RouteTreeKt.lambda-1.<anonymous> (RouteTree.kt:114)');
      }
      ErrorPage(errorCode, $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.b12();
    }
    return Unit_instance;
  }
  function ComposableSingletons$RouteTreeKt() {
    ComposableSingletons$RouteTreeKt_instance = this;
    var tmp = this;
    tmp.q2l_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-557678680, false, ComposableSingletons$RouteTreeKt$lambda_1$lambda_h43un7));
  }
  var ComposableSingletons$RouteTreeKt_instance;
  function ComposableSingletons$RouteTreeKt_getInstance() {
    if (ComposableSingletons$RouteTreeKt_instance == null)
      new ComposableSingletons$RouteTreeKt();
    return ComposableSingletons$RouteTreeKt_instance;
  }
  function ErrorPage(errorCode, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h19(1287308146);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.m18(errorCode) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.k17()) {
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
      $composer_1.p17(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.iz(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.t18();
      var tmp_0;
      if (invalid ? true : it === Companion_getInstance().h12_1) {
        // Inline function 'com.varabyte.kobweb.navigation.ErrorPage.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.z18(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.q17();
      Div(null, tmp0, $composer_0, 48, 1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.b12();
    }
    var tmp0_safe_receiver = $composer_0.i19();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.f1e(ErrorPage$lambda_0(errorCode, $changed));
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
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
    };
  }
  function ErrorPage$lambda_0($errorCode, $$changed) {
    return function ($composer, $force) {
      ErrorPage($errorCode, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var LegacyRouteRedirectStrategy_ALLOW_instance;
  var LegacyRouteRedirectStrategy_WARN_instance;
  var LegacyRouteRedirectStrategy_DISALLOW_instance;
  var LegacyRouteRedirectStrategy_entriesInitialized;
  function LegacyRouteRedirectStrategy_initEntries() {
    if (LegacyRouteRedirectStrategy_entriesInitialized)
      return Unit_instance;
    LegacyRouteRedirectStrategy_entriesInitialized = true;
    LegacyRouteRedirectStrategy_ALLOW_instance = new LegacyRouteRedirectStrategy('ALLOW', 0);
    LegacyRouteRedirectStrategy_WARN_instance = new LegacyRouteRedirectStrategy('WARN', 1);
    LegacyRouteRedirectStrategy_DISALLOW_instance = new LegacyRouteRedirectStrategy('DISALLOW', 2);
  }
  function LegacyRouteRedirectStrategy(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function _set_activePageMethod__f6z3vj($this, _set____db54di) {
    var this_0 = $this.i2k_1;
    activePageMethod$factory();
    this_0.kq(_set____db54di);
    return Unit_instance;
  }
  function _get_activePageMethod__dw5579($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.i2k_1;
    activePageMethod$factory_0();
    return this_0.j2();
  }
  function updatePageContext(_this__u8e3s4, $this, pathQueryAndFragment) {
    if (startsWith(pathQueryAndFragment, '#')) {
      var tmp0_safe_receiver = _this__u8e3s4.w2j_1.j2();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        _this__u8e3s4.w2j_1.kq(tmp0_safe_receiver.r2j(VOID, VOID, removePrefix(pathQueryAndFragment, '#')));
        return true;
      }
      if (tmp == null) {
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        return false;
      }
    }
    var route = Companion_instance_1.n2k(pathQueryAndFragment);
    var tmp_0;
    if (!(route == null)) {
      var data = $this.j2k_1.t2l(route);
      _set_activePageMethod__f6z3vj($this, data.u2l_1);
      _this__u8e3s4.x2j(data.v2l_1);
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
    if (!Companion_instance_1.m2k(_this__u8e3s4)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var hrefResolved = Companion_instance_1.o2k(new URL(_this__u8e3s4, window.location.href)).toString();
    // Inline function 'kotlin.takeIf' call
    var this_0 = remove(Companion_instance_2, hrefResolved);
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
    var tmp_0 = Companion_instance_2;
    // Inline function 'kotlin.collections.fold' call
    var this_1 = $this.k2k_1;
    var accumulator = (new Route(withoutPrefix)).toString();
    var tmp0_iterator = this_1.k();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.navigation.Router.normalize.<anonymous>' call
      var acc = accumulator;
      var interceptor = new RouteInterceptorScope(acc);
      element(interceptor);
      accumulator = interceptor.p2j();
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
      var tmp = Companion_instance.t2j();
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
      if (!(($changed & 11) === 2) ? true : !$composer_0.k17()) {
        if (isTraceInProgress()) {
          traceEventStart(613218228, $changed, -1, 'com.varabyte.kobweb.navigation.Router.renderActivePage.<anonymous>.<anonymous> (Router.kt:173)');
        }
        $pageMethod($composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.b12();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1) {
      return $boundThis.i17(p0, p1);
    };
  }
  function Router$renderActivePage$lambda($pageWrapper, $pageMethod) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.k17()) {
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
        $composer_1.p17(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.iz(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.t18();
        var tmp_2;
        if (invalid ? true : it === Companion_getInstance().h12_1) {
          // Inline function 'com.varabyte.kobweb.navigation.Router.renderActivePage.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_2(dispatchReceiver);
          $composer_1.z18(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.q17();
        tmp_0(tmp0, $composer_0, 6);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_instance;
        }
        tmp = tmp_4;
      } else {
        $composer_0.b12();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1) {
      return $boundThis.i17(p0, p1);
    };
  }
  function Router$renderActivePage$lambda_0($tmp0_rcvr, $pageWrapper, $$changed, $$default) {
    return function ($composer, $force) {
      $tmp0_rcvr.a2m($pageWrapper._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Router$tryRoutingTo$lambda($fragment, $attempts, $handle) {
    return function () {
      var element = document.getElementById($fragment);
      var tmp;
      if (!(element == null)) {
        element.scrollIntoView({behavior: 'smooth'});
        $attempts._v = 0;
        tmp = Unit_instance;
      } else {
        var tmp0 = $attempts._v;
        $attempts._v = tmp0 - 1 | 0;
        tmp = Unit_instance;
      }
      var tmp_0;
      if ($attempts._v === 0) {
        $handle._v.ps();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
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
    this.i2k_1 = mutableStateOf(null);
    this.j2k_1 = new RouteTree();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.k2k_1 = ArrayList_init_$Create$_0();
    Companion_instance.u2j(this);
    var tmp_0 = window;
    tmp_0.onpopstate = Router$lambda(this);
  }
  protoOf(Router).a2m = function (pageWrapper, $composer, $changed, $default) {
    var pageWrapper_0 = {_v: pageWrapper};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h19(-1032287943);
    if (!(($default & 1) === 0)) {
      pageWrapper_0._v = ComposableSingletons$RouterKt_getInstance().b2m_1;
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
    var tmp_0 = get_PageContextLocal().d1e(Companion_instance.t2j());
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.navigation.Router.renderActivePage.<anonymous>' call
    var tmp_1 = $composer_0;
    var dispatchReceiver = composableLambda(tmp_1, -628364167, true, Router$renderActivePage$lambda(pageWrapper_0, pageMethod));
    // Inline function 'androidx.compose.runtime.remember' call
    var $composer_1 = $composer_0;
    $composer_1.p17(1157296644);
    sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_1.iz(dispatchReceiver);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.t18();
    var tmp_2;
    if (invalid ? true : it === Companion_getInstance().h12_1) {
      // Inline function 'com.varabyte.kobweb.navigation.Router.renderActivePage.<anonymous>.<anonymous>' call
      var value = ComposableLambda$invoke$ref_3(dispatchReceiver);
      $composer_1.z18(value);
      tmp_2 = value;
    } else {
      tmp_2 = it;
    }
    var tmp_3 = tmp_2;
    var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
    $composer_1.q17();
    CompositionLocalProvider(tmp_0, tmp0, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp1_safe_receiver = $composer_0.i19();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.f1e(Router$renderActivePage$lambda_0(this, pageWrapper_0, $changed, $default));
    }
  };
  protoOf(Router).c2m = function (route, autoPrefix, pageMethod) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(Companion_instance_1.m2k(route) ? startsWith_0(route, _Char___init__impl__6a9atx(47)) : false)) {
      // Inline function 'com.varabyte.kobweb.navigation.Router.register.<anonymous>' call
      var message = 'Registration only allowed for internal, rooted routes, e.g. /example/path. Got: ' + route;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.j2k_1.s2l(prependIf(Companion_instance_2, autoPrefix, route), pageMethod)) {
      // Inline function 'com.varabyte.kobweb.navigation.Router.register.<anonymous>' call
      var message_0 = 'Registration failure. Path is already registered: ' + route;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  };
  protoOf(Router).d2m = function (route, autoPrefix, pageMethod, $super) {
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    var tmp;
    if ($super === VOID) {
      this.c2m(route, autoPrefix, pageMethod);
      tmp = Unit_instance;
    } else {
      tmp = $super.c2m.call(this, route, autoPrefix, pageMethod);
    }
    return tmp;
  };
  protoOf(Router).e2m = function (strategy) {
    this.j2k_1.m2l_1 = strategy;
  };
  protoOf(Router).f2m = function (interceptor) {
    this.k2k_1.u(interceptor);
  };
  protoOf(Router).g2m = function (pathQueryAndFragment, updateHistoryMode, openLinkStrategy) {
    var tmp0_safe_receiver = Companion_instance_1.n2k(pathQueryAndFragment);
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
    if (!(extension == null) ? !setOf(['html', 'htm']).m(extension) : false) {
      return false;
    }
    var pathQueryAndFragment_0 = pathQueryAndFragment;
    if (Companion_instance_1.m2k(pathQueryAndFragment_0)) {
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
        if (!this.j2k_1.r2l(route) ? !(route === '/') : false) {
          if (endsWith(route, _Char___init__impl__6a9atx(47))) {
            var withoutSlash = removeSuffix(route, '/');
            if (this.j2k_1.r2l(withoutSlash)) {
              pathQueryAndFragment_0 = withoutSlash;
            }
          } else {
            var withSlash = route + '/';
            if (this.j2k_1.r2l(withSlash)) {
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
    if (updatePageContext(Companion_instance.t2j(), this, pathQueryAndFragment_0)) {
      pathQueryAndFragment_0 = Companion_instance.t2j().y2j().h2j_1 + partitionPath(pathQueryAndFragment_0, this).de_1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var url = window.location.origin + pathQueryAndFragment_0;
      if (!(window.location.href === url)) {
        var newPathname = !(window.location.pathname === Companion_instance_1.o2k(new URL(url)).m2j_1);
        var tmp0 = updateHistoryMode.t9_1;
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
        var handle = {_v: Companion_getInstance_1().ms_1};
        var tmp_3 = window;
        handle._v = setInterval(tmp_3, timeToWaitPerAttempt, Router$tryRoutingTo$lambda(fragment, attempts, handle));
        tmp_2 = Unit_instance;
      }
      tmp_1 = true;
    } else {
      tmp_1 = false;
    }
    return tmp_1;
  };
  protoOf(Router).h2m = function (pathQueryAndFragment, updateHistoryMode, openLinkStrategy, $super) {
    updateHistoryMode = updateHistoryMode === VOID ? UpdateHistoryMode_PUSH_getInstance() : updateHistoryMode;
    openLinkStrategy = openLinkStrategy === VOID ? OpenLinkStrategy_IN_PLACE_getInstance() : openLinkStrategy;
    return $super === VOID ? this.g2m(pathQueryAndFragment, updateHistoryMode, openLinkStrategy) : $super.g2m.call(this, pathQueryAndFragment, updateHistoryMode, openLinkStrategy);
  };
  protoOf(Router).i2m = function (pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy, openExternalLinksStrategy) {
    if (!this.g2m(pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy)) {
      open(window, pathQueryAndFragment, openExternalLinksStrategy);
    }
  };
  protoOf(Router).l2k = function (pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy, openExternalLinksStrategy, $super) {
    updateHistoryMode = updateHistoryMode === VOID ? UpdateHistoryMode_PUSH_getInstance() : updateHistoryMode;
    openInternalLinksStrategy = openInternalLinksStrategy === VOID ? OpenLinkStrategy_IN_PLACE_getInstance() : openInternalLinksStrategy;
    openExternalLinksStrategy = openExternalLinksStrategy === VOID ? OpenLinkStrategy_IN_NEW_TAB_getInstance() : openExternalLinksStrategy;
    var tmp;
    if ($super === VOID) {
      this.i2m(pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy, openExternalLinksStrategy);
      tmp = Unit_instance;
    } else {
      tmp = $super.i2m.call(this, pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy, openExternalLinksStrategy);
    }
    return tmp;
  };
  function RouteInterceptorScope(pathQueryAndFragment) {
    this.w2l_1 = new Route(pathQueryAndFragment);
    this.x2l_1 = this.w2l_1.m2j_1;
    this.y2l_1 = toMutableMap(this.w2l_1.n2j_1);
    this.z2l_1 = this.w2l_1.o2j_1;
  }
  protoOf(RouteInterceptorScope).j2m = function (value) {
    this.x2l_1 = startsWith_0(value, _Char___init__impl__6a9atx(47)) ? value : '/' + value;
  };
  protoOf(RouteInterceptorScope).p2j = function () {
    return Route_init_$Create$(this.x2l_1, this.y2l_1, this.z2l_1).toString();
  };
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
    };
  }
  function ComposableSingletons$RouterKt$lambda_1$lambda_cmwzz7(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.k18(it) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.k17()) {
      if (isTraceInProgress()) {
        traceEventStart(-12986461, $dirty, -1, 'com.varabyte.kobweb.navigation.ComposableSingletons$RouterKt.lambda-1.<anonymous> (Router.kt:165)');
      }
      it($composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.b12();
    }
    return Unit_instance;
  }
  function ComposableSingletons$RouterKt() {
    ComposableSingletons$RouterKt_instance = this;
    var tmp = this;
    tmp.b2m_1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(-12986461, false, ComposableSingletons$RouterKt$lambda_1$lambda_cmwzz7));
  }
  var ComposableSingletons$RouterKt_instance;
  function ComposableSingletons$RouterKt_getInstance() {
    if (ComposableSingletons$RouterKt_instance == null)
      new ComposableSingletons$RouterKt();
    return ComposableSingletons$RouterKt_instance;
  }
  var UpdateHistoryMode_PUSH_instance;
  var UpdateHistoryMode_REPLACE_instance;
  var UpdateHistoryMode_entriesInitialized;
  function UpdateHistoryMode_initEntries() {
    if (UpdateHistoryMode_entriesInitialized)
      return Unit_instance;
    UpdateHistoryMode_entriesInitialized = true;
    UpdateHistoryMode_PUSH_instance = new UpdateHistoryMode('PUSH', 0);
    UpdateHistoryMode_REPLACE_instance = new UpdateHistoryMode('REPLACE', 1);
  }
  function UpdateHistoryMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
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
  AppGlobals_instance = new AppGlobals();
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  Companion_instance_2 = new Companion_2();
  Companion_instance_3 = new Companion_3();
  Companion_instance_4 = new Companion_4();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = initKobweb;
  _.$_$.b = KobwebApp;
  _.$_$.c = rememberPageContext;
  _.$_$.d = Anchor;
  _.$_$.e = Router;
  _.$_$.f = prependIf;
  _.$_$.g = LegacyRouteRedirectStrategy_DISALLOW_getInstance;
  _.$_$.h = UpdateHistoryMode_REPLACE_getInstance;
  _.$_$.i = AppGlobals_instance;
  _.$_$.j = Companion_instance_2;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-kobweb-core.js.map
