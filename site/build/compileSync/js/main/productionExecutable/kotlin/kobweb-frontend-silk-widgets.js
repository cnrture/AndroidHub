(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kobweb-frontend-compose-html-ext.js', './html-html-core.js', './kotlin-kotlin-stdlib.js', './kobweb-frontend-kobweb-compose.js', './compose-multiplatform-core-compose-runtime-runtime.js', './kobweb-frontend-silk-foundation.js', './kotlinx-coroutines-core.js', './kobweb-frontend-browser-ext.js', './kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kobweb-frontend-compose-html-ext.js'), require('./html-html-core.js'), require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kobweb-frontend-silk-foundation.js'), require('./kotlinx-coroutines-core.js'), require('./kobweb-frontend-browser-ext.js'), require('./kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'));
  else {
    if (typeof this['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['kobweb-frontend-browser-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-browser-ext' was not found. Please, check whether 'kobweb-frontend-browser-ext' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' was not found. Please, check whether 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    root['kobweb-frontend-silk-widgets'] = factory(typeof this['kobweb-frontend-silk-widgets'] === 'undefined' ? {} : this['kobweb-frontend-silk-widgets'], this['kobweb-frontend-compose-html-ext'], this['html-html-core'], this['kotlin-kotlin-stdlib'], this['kobweb-frontend-kobweb-compose'], this['compose-multiplatform-core-compose-runtime-runtime'], this['kobweb-frontend-silk-foundation'], this['kotlinx-coroutines-core'], this['kobweb-frontend-browser-ext'], kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat);
  }
}(this, function (_, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_org_jetbrains_compose_html_html_core, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_com_varabyte_kobweb_browser_ext, kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat) {
  'use strict';
  //region block: imports
  var StyleVariable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i;
  var StyleVariable_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.y2;
  var StyleVariable_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h;
  var protoOf = kotlin_kotlin.$_$.m6;
  var objectMeta = kotlin_kotlin.$_$.l6;
  var setMetadataFor = kotlin_kotlin.$_$.n6;
  var Unit_instance = kotlin_kotlin.$_$.g2;
  var Companion_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x3;
  var fillMaxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e1;
  var Companion_instance_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.m;
  var borderBottom = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var tabIndex = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v2;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var get_ariaDisabled = kotlin_com_varabyte_kobweb_silk_foundation.$_$.l;
  var get_hover = kotlin_com_varabyte_kobweb_silk_foundation.$_$.s;
  var not = kotlin_com_varabyte_kobweb_silk_foundation.$_$.u;
  var get_active = kotlin_com_varabyte_kobweb_silk_foundation.$_$.i;
  var Companion_instance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.x2;
  var cursor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a1;
  var Companion_instance_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.w2;
  var listOf = kotlin_kotlin.$_$.w3;
  var transition = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a3;
  var backgroundColor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z;
  var Companion_instance_3 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i3;
  var userSelect = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d3;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.q1;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n2;
  var calc = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b;
  var VOID = kotlin_kotlin.$_$.d;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y1;
  var flexGrow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f1;
  var overflow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j2;
  var Companion_instance_4 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d3;
  var KProperty0 = kotlin_kotlin.$_$.x6;
  var getPropertyCallableRef = kotlin_kotlin.$_$.x5;
  var KProperty1 = kotlin_kotlin.$_$.y6;
  var ComponentStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g;
  var Companion_instance_5 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.q1;
  var base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n;
  var ComponentStyle_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h;
  var ButtonType_Button_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.a;
  var toModifier = kotlin_com_varabyte_kobweb_silk_foundation.$_$.x;
  var thenIf = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i3;
  var ensureNotNull = kotlin_kotlin.$_$.f9;
  var Companion_instance_6 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.r1;
  var get_isBright = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h;
  var ColorMode_DARK_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n1;
  var ColorMode_LIGHT_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o1;
  var toPalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g1;
  var setVariable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t2;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var THROW_CCE = kotlin_kotlin.$_$.w8;
  var onClick = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e2;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j3;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var Button = kotlin_org_jetbrains_compose_html_html_core.$_$.i3;
  var get_focusVisible = kotlin_com_varabyte_kobweb_silk_foundation.$_$.r;
  var lineHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s1;
  var height = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q1;
  var minWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b2;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h1;
  var Companion_instance_7 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.y2;
  var fontWeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i1;
  var Companion_instance_8 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k3;
  var whiteSpace = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f3;
  var padding_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p2;
  var Companion_instance_9 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j3;
  var verticalAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e3;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u;
  var CSSTransition_init_$Create$ = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.s2;
  var Colors_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o3;
  var outline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h2;
  var boxShadow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w;
  var type = kotlin_org_jetbrains_compose_html_html_core.$_$.u;
  var registerRefScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k2;
  var Center_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l3;
  var CenterVertically_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r3;
  var Row = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var gap = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k1;
  var Companion_instance_10 = kotlin_org_jetbrains_compose_html_html_core.$_$.n;
  var position = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q2;
  var opacity = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g2;
  var size = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u2;
  var border_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t;
  var transition_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b3;
  var rowClasses = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g;
  var Keyframes = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a;
  var addVariantBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j;
  var addVariant = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k;
  var StyleVariable_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g;
  var paddingInline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l2;
  var get_placeholder = kotlin_com_varabyte_kobweb_silk_foundation.$_$.v;
  var Companion_instance_11 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.u2;
  var appearance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k;
  var get_ariaInvalid = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m;
  var get_disabled = kotlin_com_varabyte_kobweb_silk_foundation.$_$.q;
  var margin_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v1;
  var RectF_init_$Create$ = kotlin_com_varabyte_kobweb_silk_foundation.$_$.p1;
  var clip = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j1;
  var overflow_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k2;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g3;
  var minHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a2;
  var Companion_instance_12 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.v2;
  var boxSizing = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x;
  var translateX = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c3;
  var ariaHidden = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m;
  var Companion_instance_13 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l3;
  var get_em = kotlin_org_jetbrains_compose_html_html_core.$_$.s1;
  var Svg = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f2;
  var classMeta = kotlin_kotlin.$_$.q5;
  var Path = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a2;
  var Polyline = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b2;
  var to = kotlin_kotlin.$_$.o9;
  var Circle = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.w1;
  var Line = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.z1;
  var Rect = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d2;
  var Group = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.y1;
  var SVGStrokeLineJoin_Round_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o2;
  var SVGStrokeLineCap_Round_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.n2;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.h9;
  var SVGStrokeType_CurrentColor_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p2;
  var SVGFillType_None_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m2;
  var SVGFillType_CurrentColor_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l2;
  var SVGStrokeType_None_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.q2;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.w2;
  var Hr = kotlin_org_jetbrains_compose_html_html_core.$_$.r3;
  var borderTop = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s;
  var borderLeft = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p;
  var Companion_instance_14 = kotlin_org_jetbrains_compose_html_html_core.$_$.j;
  var display = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b1;
  var get_fr = kotlin_org_jetbrains_compose_html_html_core.$_$.y1;
  var gridTemplateColumns = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n1;
  var get_entries = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.x2;
  var mapCapacity = kotlin_kotlin.$_$.x3;
  var coerceAtLeast = kotlin_kotlin.$_$.q6;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.o;
  var NumberValue = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f;
  var TopStart_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w3;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var refScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i2;
  var Box = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c;
  var KMutableProperty0 = kotlin_kotlin.$_$.v6;
  var THROW_ISE = kotlin_kotlin.$_$.y8;
  var getLocalDelegateReference = kotlin_kotlin.$_$.v5;
  var CoroutineImpl = kotlin_kotlin.$_$.g5;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var isInterface = kotlin_kotlin.$_$.e6;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j;
  var CompositionLocalProvider = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var asStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var EventListenerManager = kotlin_com_varabyte_kobweb_browser_ext.$_$.a;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h;
  var merge = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var onEach = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var asCoroutineDispatcher = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var launchIn = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var Enum = kotlin_kotlin.$_$.p8;
  var TopCenter_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v3;
  var deferRender = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a1;
  var top = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z2;
  var bottom = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v;
  var left = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r1;
  var right = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r2;
  var disposableRef = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h2;
  var toDouble = kotlin_kotlin.$_$.g8;
  var toString = kotlin_kotlin.$_$.p6;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.g1;
  var interfaceMeta = kotlin_kotlin.$_$.b6;
  var IllegalStateException = kotlin_kotlin.$_$.s8;
  var onTransitionEnd = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f2;
  var KMutableProperty1 = kotlin_kotlin.$_$.w6;
  var EventListener = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.d;
  var ResizeObserver_init_$Create$ = kotlin_com_varabyte_kobweb_browser_ext.$_$.h;
  var numberToDouble = kotlin_kotlin.$_$.i6;
  var align = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a;
  var BoxScope = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b;
  var styleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h3;
  var unaryMinus = kotlin_org_jetbrains_compose_html_html_core.$_$.c3;
  var margin_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u1;
  var split = kotlin_kotlin.$_$.w7;
  var charSequenceLength = kotlin_kotlin.$_$.p5;
  var Br = kotlin_org_jetbrains_compose_html_html_core.$_$.h3;
  var SpanText = kotlin_com_varabyte_kobweb_silk_foundation.$_$.z;
  var Column = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d;
  var base_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.p;
  var ariaDisabled = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l;
  var base_1 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o;
  var get_ms = kotlin_org_jetbrains_compose_html_html_core.$_$.t2;
  var Blue_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.s1;
  var Gray_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.t1;
  var Red_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.v1;
  var lightened = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i;
  var registerKeyframes = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b;
  var suffixedWith = kotlin_com_varabyte_kobweb_silk_foundation.$_$.i1;
  var removeClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.c;
  var addClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.a;
  var ColorGroup = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e1;
  var MutablePalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(TabVars, 'TabVars', objectMeta);
  setMetadataFor(ButtonVars, 'ButtonVars', objectMeta);
  setMetadataFor(MD, 'MD', objectMeta);
  setMetadataFor(CheckboxVars, 'CheckboxVars', objectMeta);
  setMetadataFor(InputVars, 'InputVars', objectMeta);
  setMetadataFor(SwitchVars, 'SwitchVars', objectMeta);
  setMetadataFor(Fill, 'Fill', classMeta);
  setMetadataFor(Stroke, 'Stroke', classMeta, VOID, VOID, Stroke);
  setMetadataFor(ComposableSingletons$IconsKt, 'ComposableSingletons$IconsKt', objectMeta);
  setMetadataFor(DividerVars, 'DividerVars', objectMeta);
  setMetadataFor(SurfaceVars, 'SurfaceVars', objectMeta);
  setMetadataFor(Surface$lambda$lambda$slambda, 'Surface$lambda$lambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(KeepPopupOpenStrategy, 'KeepPopupOpenStrategy', classMeta);
  setMetadataFor(never$1, VOID, classMeta, KeepPopupOpenStrategy);
  setMetadataFor(onFocus$1, VOID, classMeta, KeepPopupOpenStrategy);
  setMetadataFor(onHover$1, VOID, classMeta, KeepPopupOpenStrategy);
  setMetadataFor(combine$o$slambda, 'combine$o$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(combine$1, VOID, classMeta, KeepPopupOpenStrategy);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(OpenClosePopupStrategy, 'OpenClosePopupStrategy', classMeta);
  setMetadataFor(OpenClose, 'OpenClose', classMeta, Enum);
  setMetadataFor(onFocus$1_0, VOID, classMeta, OpenClosePopupStrategy);
  setMetadataFor(onHover$1_0, VOID, classMeta, OpenClosePopupStrategy);
  setMetadataFor(combine$o$slambda_1, 'combine$o$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(combine$1_0, VOID, classMeta, OpenClosePopupStrategy);
  setMetadataFor(OverlayVars, 'OverlayVars', objectMeta);
  setMetadataFor(ComposableSingletons$OverlayKt, 'ComposableSingletons$OverlayKt', objectMeta);
  setMetadataFor(PopoverShowHideSettings, 'PopoverShowHideSettings', classMeta);
  setMetadataFor(PopoverStateController$slambda, 'PopoverStateController$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(PopoverStateController$slambda_1, 'PopoverStateController$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(PopoverStateController, 'PopoverStateController', classMeta);
  setMetadataFor(PopoverElements, 'PopoverElements', classMeta);
  setMetadataFor(Uninitialized, 'Uninitialized', objectMeta);
  setMetadataFor(Initialized, 'Initialized', interfaceMeta);
  setMetadataFor(FoundElements, 'FoundElements', classMeta, VOID, [Initialized]);
  setMetadataFor(Visible, 'Visible', interfaceMeta, VOID, [Initialized]);
  setMetadataFor(Calculating, 'Calculating', classMeta, VOID, [Visible]);
  setMetadataFor(Shown, 'Shown', classMeta, VOID, [Visible]);
  setMetadataFor(Hiding, 'Hiding', classMeta, VOID, [Visible]);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta);
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta);
  setMetadataFor(PopupVars, 'PopupVars', objectMeta);
  setMetadataFor(PopupPlacement, 'PopupPlacement', classMeta, Enum);
  setMetadataFor(PopupPlacementStrategy, 'PopupPlacementStrategy', classMeta);
  setMetadataFor(PopupPlacementStrategy$Companion$of$1, VOID, classMeta, PopupPlacementStrategy);
  setMetadataFor(Position, 'Position', classMeta);
  setMetadataFor(PositionAndPlacement, 'PositionAndPlacement', classMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(PopupScope, 'PopupScope', classMeta, VOID, [BoxScope]);
  setMetadataFor(TooltipVars, 'TooltipVars', objectMeta);
  setMetadataFor(TransitionDurationVars, 'TransitionDurationVars', objectMeta);
  setMetadataFor(FontSizeVars, 'FontSizeVars', objectMeta);
  setMetadataFor(MutableButton, 'MutableButton', classMeta, ColorGroup);
  setMetadataFor(MutableCheckbox, 'MutableCheckbox', classMeta, ColorGroup);
  setMetadataFor(MutableInput, 'MutableInput', classMeta, ColorGroup);
  setMetadataFor(MutableSwitch, 'MutableSwitch', classMeta, ColorGroup);
  setMetadataFor(MutableTab, 'MutableTab', classMeta, ColorGroup);
  setMetadataFor(MutableTooltip, 'MutableTooltip', classMeta, ColorGroup);
  //endregion
  function get_TabsStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsStyle$delegate.u2u(null, TabsStyle$factory());
  }
  var TabsStyle$delegate;
  function get_TabsTabRowStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsTabRowStyle$delegate.u2u(null, TabsTabRowStyle$factory());
  }
  var TabsTabRowStyle$delegate;
  function get_TabsTabStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsTabStyle$delegate.u2u(null, TabsTabStyle$factory());
  }
  var TabsTabStyle$delegate;
  function get_TabsPanelStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsPanelStyle$delegate.u2u(null, TabsPanelStyle$factory());
  }
  var TabsPanelStyle$delegate;
  function TabVars() {
    TabVars_instance = this;
    this.e3e_1 = StyleVariable('silk');
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().o2u();
    tmp.f3e_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.g3e_1 = StyleVariable('silk');
    this.h3e_1 = StyleVariable('silk');
    this.i3e_1 = StyleVariable('silk');
    this.j3e_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_px(2);
    tmp_0.k3e_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().u3e().o2u();
    tmp_1.l3e_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
  }
  protoOf(TabVars).v3e = function () {
    return this.e3e_1.u2u(this, Color$factory());
  };
  protoOf(TabVars).w3e = function () {
    return this.f3e_1.u2u(this, BorderColor$factory());
  };
  protoOf(TabVars).x3e = function () {
    return this.g3e_1.u2u(this, BackgroundColor$factory());
  };
  protoOf(TabVars).y3e = function () {
    return this.h3e_1.u2u(this, DisabledBackgroundColor$factory());
  };
  protoOf(TabVars).z3e = function () {
    return this.i3e_1.u2u(this, HoverBackgroundColor$factory());
  };
  protoOf(TabVars).a3f = function () {
    return this.j3e_1.u2u(this, PressedBackgroundColor$factory());
  };
  protoOf(TabVars).b3f = function () {
    return this.k3e_1.u2u(this, BorderThickness$factory());
  };
  protoOf(TabVars).c3f = function () {
    return this.l3e_1.u2u(this, ColorTransitionDuration$factory());
  };
  var TabVars_instance;
  function TabVars_getInstance() {
    if (TabVars_instance == null)
      new TabVars();
    return TabVars_instance;
  }
  function TabsStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Tabs_kt__myintq();
    return Unit_instance;
  }
  function TabsTabRowStyle$delegate$lambda($this$base) {
    _init_properties_Tabs_kt__myintq();
    var tmp = fillMaxWidth(Companion_instance);
    var tmp_0 = TabVars_getInstance().b3f().o2u();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp, tmp_0, 'solid', TabVars_getInstance().w3e().o2u());
  }
  function TabsTabStyle$delegate$lambda($composer, $changed) {
    _init_properties_Tabs_kt__myintq();
    var $composer_0 = $composer;
    $composer_0.z1m(-900500012);
    if (isTraceInProgress()) {
      traceEventStart(-900500012, $changed, -1, 'com.varabyte.kobweb.silk.components.disclosure.TabsTabStyle$delegate.<anonymous> (Tabs.kt:52)');
    }
    var tmp0 = tabIndex(Companion_instance, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.a1n();
    return tmp0;
  }
  function TabsTabStyle$delegate$lambda_0($this$ComponentStyle) {
    _init_properties_Tabs_kt__myintq();
    $this$ComponentStyle.d38(TabsTabStyle$delegate$lambda$lambda);
    var tmp = get_ariaDisabled($this$ComponentStyle);
    tmp.f39(TabsTabStyle$delegate$lambda$lambda_0);
    var tmp_0 = get_hover($this$ComponentStyle).o39(not($this$ComponentStyle, [get_ariaDisabled($this$ComponentStyle)]));
    tmp_0.f39(TabsTabStyle$delegate$lambda$lambda_1);
    var tmp_1 = get_active($this$ComponentStyle).o39(not($this$ComponentStyle, [get_ariaDisabled($this$ComponentStyle)]));
    tmp_1.f39(TabsTabStyle$delegate$lambda$lambda_2);
    return Unit_instance;
  }
  function TabsTabStyle$delegate$lambda$lambda() {
    _init_properties_Tabs_kt__myintq();
    var tmp = padding(userSelect(color(backgroundColor(transition(cursor(Companion_instance, Companion_instance_1.j2s()), Companion_instance_2.j2v(listOf(['background-color', 'color', 'border-color']), TabVars_getInstance().c3f().o2u()).slice()), TabVars_getInstance().x3e().o2u()), TabVars_getInstance().v3e().o2u()), Companion_instance_3.m2s()), get_cssRem(0.5));
    var tmp_0 = margin(tmp, VOID, VOID, calc(TabsTabStyle$delegate$lambda$lambda$lambda));
    var tmp_1 = TabVars_getInstance().b3f().o2u();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp_0, tmp_1, 'solid', TabVars_getInstance().w3e().o2u());
  }
  function TabsTabStyle$delegate$lambda$lambda$lambda($this$calc) {
    _init_properties_Tabs_kt__myintq();
    return $this$calc.q2v(TabVars_getInstance().b3f().o2u());
  }
  function TabsTabStyle$delegate$lambda$lambda_0() {
    _init_properties_Tabs_kt__myintq();
    return cursor(backgroundColor(Companion_instance, TabVars_getInstance().y3e().o2u()), Companion_instance_1.k2s());
  }
  function TabsTabStyle$delegate$lambda$lambda_1() {
    _init_properties_Tabs_kt__myintq();
    return backgroundColor(Companion_instance, TabVars_getInstance().z3e().o2u());
  }
  function TabsTabStyle$delegate$lambda$lambda_2() {
    _init_properties_Tabs_kt__myintq();
    return backgroundColor(Companion_instance, TabVars_getInstance().a3f().o2u());
  }
  function TabsPanelStyle$delegate$lambda($this$base) {
    _init_properties_Tabs_kt__myintq();
    var tmp = flexGrow(fillMaxWidth(padding(Companion_instance, get_cssRem(1))), 1);
    return overflow(tmp, TabsPanelStyle$delegate$lambda$lambda);
  }
  function TabsPanelStyle$delegate$lambda$lambda($this$overflow) {
    _init_properties_Tabs_kt__myintq();
    $this$overflow.x35(Companion_instance_4.b2u());
    return Unit_instance;
  }
  function TabsStyle$factory() {
    return getPropertyCallableRef('TabsStyle', 0, KProperty0, function () {
      return get_TabsStyle();
    }, null);
  }
  function TabsTabRowStyle$factory() {
    return getPropertyCallableRef('TabsTabRowStyle', 0, KProperty0, function () {
      return get_TabsTabRowStyle();
    }, null);
  }
  function TabsTabStyle$factory() {
    return getPropertyCallableRef('TabsTabStyle', 0, KProperty0, function () {
      return get_TabsTabStyle();
    }, null);
  }
  function TabsPanelStyle$factory() {
    return getPropertyCallableRef('TabsPanelStyle', 0, KProperty0, function () {
      return get_TabsPanelStyle();
    }, null);
  }
  function Color$factory() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.v3e();
    }, null);
  }
  function BorderColor$factory() {
    return getPropertyCallableRef('BorderColor', 1, KProperty1, function (receiver) {
      return receiver.w3e();
    }, null);
  }
  function BackgroundColor$factory() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.x3e();
    }, null);
  }
  function DisabledBackgroundColor$factory() {
    return getPropertyCallableRef('DisabledBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.y3e();
    }, null);
  }
  function HoverBackgroundColor$factory() {
    return getPropertyCallableRef('HoverBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.z3e();
    }, null);
  }
  function PressedBackgroundColor$factory() {
    return getPropertyCallableRef('PressedBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.a3f();
    }, null);
  }
  function BorderThickness$factory() {
    return getPropertyCallableRef('BorderThickness', 1, KProperty1, function (receiver) {
      return receiver.b3f();
    }, null);
  }
  function ColorTransitionDuration$factory() {
    return getPropertyCallableRef('ColorTransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.c3f();
    }, null);
  }
  var properties_initialized_Tabs_kt_moodfk;
  function _init_properties_Tabs_kt__myintq() {
    if (!properties_initialized_Tabs_kt_moodfk) {
      properties_initialized_Tabs_kt_moodfk = true;
      TabsStyle$delegate = ComponentStyle(VOID, 'silk', TabsStyle$delegate$lambda);
      var tmp = Companion_instance_5;
      TabsTabRowStyle$delegate = base(tmp, VOID, 'silk', TabsTabRowStyle$delegate$lambda);
      var tmp_0 = TabsTabStyle$delegate$lambda;
      TabsTabStyle$delegate = ComponentStyle_0(tmp_0, 'silk', TabsTabStyle$delegate$lambda_0);
      var tmp_1 = Companion_instance_5;
      TabsPanelStyle$delegate = base(tmp_1, VOID, 'silk', TabsPanelStyle$delegate$lambda);
    }
  }
  function get_ButtonStyle() {
    _init_properties_Button_kt__2845m6();
    return ButtonStyle$delegate.u2u(null, ButtonStyle$factory());
  }
  var ButtonStyle$delegate;
  function ButtonVars() {
    ButtonVars_instance = this;
    this.d3f_1 = StyleVariable('silk');
    var tmp = this;
    var tmp0_defaultFallback = get_FocusOutlineColorVar().o2u();
    tmp.e3f_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.f3f_1 = StyleVariable('silk');
    this.g3f_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_ColorVar().o2u();
    tmp_0.h3f_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().u3e().o2u();
    tmp_1.i3f_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
    this.j3f_1 = StyleVariable('silk');
    this.k3f_1 = StyleVariable('silk');
    this.l3f_1 = StyleVariable('silk');
  }
  protoOf(ButtonVars).m3f = function () {
    return this.d3f_1.u2u(this, BackgroundDefaultColor$factory());
  };
  protoOf(ButtonVars).n3f = function () {
    return this.e3f_1.u2u(this, BackgroundFocusColor$factory());
  };
  protoOf(ButtonVars).o3f = function () {
    return this.f3f_1.u2u(this, BackgroundHoverColor$factory());
  };
  protoOf(ButtonVars).p3f = function () {
    return this.g3f_1.u2u(this, BackgroundPressedColor$factory());
  };
  protoOf(ButtonVars).v3e = function () {
    return this.h3f_1.u2u(this, Color$factory_0());
  };
  protoOf(ButtonVars).c3f = function () {
    return this.i3f_1.u2u(this, ColorTransitionDuration$factory_0());
  };
  protoOf(ButtonVars).q3f = function () {
    return this.j3f_1.u2u(this, FontSize$factory());
  };
  protoOf(ButtonVars).r3f = function () {
    return this.k3f_1.u2u(this, Height$factory());
  };
  protoOf(ButtonVars).s3f = function () {
    return this.l3f_1.u2u(this, PaddingHorizontal$factory());
  };
  var ButtonVars_instance;
  function ButtonVars_getInstance() {
    if (ButtonVars_instance == null)
      new ButtonVars();
    return ButtonVars_instance;
  }
  function Button_0(onClick_0, modifier, variant, type, enabled, size, colorScheme, focusBorderColor, ref, content, $composer, $changed, $default) {
    _init_properties_Button_kt__2845m6();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var type_0 = {_v: type};
    var enabled_0 = {_v: enabled};
    var size_0 = {_v: size};
    var colorScheme_0 = {_v: colorScheme};
    var focusBorderColor_0 = {_v: focusBorderColor};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.r1o(-1357113061);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.u1n(onClick_0) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 16;
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.s1e(variant_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.s1e(type_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.v1n(enabled_0._v) ? 16384 : 8192);
    if (($changed & 458752) === 0)
      $dirty = $dirty | ((($default & 32) === 0 ? $composer_0.s1e(size_0._v) : false) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 524288;
    if (!(($default & 128) === 0))
      $dirty = $dirty | 4194304;
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 234881024) === 0)
      $dirty = $dirty | ($composer_0.s1e(ref_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 1879048192) === 0)
      $dirty = $dirty | ($composer_0.u1n(content) ? 536870912 : 268435456);
    if (!(($default & 194) === 194) ? true : !(($dirty & 1533916891) === 306783378) ? true : !$composer_0.u1m()) {
      $composer_0.b1n();
      if (($changed & 1) === 0 ? true : $composer_0.f1n()) {
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 4) === 0)) {
          variant_0._v = null;
        }
        if (!(($default & 8) === 0)) {
          type_0._v = ButtonType_Button_getInstance();
        }
        if (!(($default & 16) === 0)) {
          enabled_0._v = true;
        }
        if (!(($default & 32) === 0)) {
          size_0._v = MD_getInstance();
          $dirty = $dirty & -458753;
        }
        if (!(($default & 64) === 0)) {
          colorScheme_0._v = null;
        }
        if (!(($default & 128) === 0)) {
          focusBorderColor_0._v = null;
        }
        if (!(($default & 256) === 0)) {
          ref_0._v = null;
        }
      } else {
        $composer_0.l1h();
        if (!(($default & 32) === 0))
          $dirty = $dirty & -458753;
      }
      $composer_0.c1n();
      if (isTraceInProgress()) {
        traceEventStart(-1357113061, $dirty, -1, 'com.varabyte.kobweb.silk.components.forms.Button (Button.kt:147)');
      }
      $composer_0.z1m(994961418);
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
      $composer_0.z1m(994960472);
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
      var this_0 = thenIf(toModifier(get_ButtonStyle(), [variant_0._v], $composer_0, 0), !enabled_0._v, toModifier(get_DisabledStyle(), [], $composer_0, 64)).e34(toModifier_0(size_0._v));
      var tmp;
      if (!(colorScheme_0._v == null)) {
        // Inline function 'com.varabyte.kobweb.silk.components.forms.Button.<anonymous>' call
        var colorScheme_1 = ensureNotNull(colorScheme_0._v);
        var isDark = Companion_instance_6.u36($composer_0, 8).j3b();
        var isBrightColor = get_isBright(isDark ? colorScheme_1.v3b() : colorScheme_1.y3b());
        tmp = setVariable(setVariable(setVariable(setVariable(Companion_instance, ButtonVars_getInstance().v3e(), get_color(toPalette(isBrightColor ? ColorMode_LIGHT_getInstance() : ColorMode_DARK_getInstance()))), ButtonVars_getInstance().m3f(), isDark ? colorScheme_1.v3b() : colorScheme_1.y3b()), ButtonVars_getInstance().o3f(), isDark ? colorScheme_1.w3b() : colorScheme_1.z3b()), ButtonVars_getInstance().p3f(), isDark ? colorScheme_1.x3b() : colorScheme_1.a3c());
      } else {
        tmp = Companion_instance;
      }
      var tmp0_group = this_0.e34(tmp);
      $composer_0.a1n();
      var this_1 = setVariable(tmp0_group, ButtonVars_getInstance().n3f(), focusBorderColor_0._v).e34(modifier_0._v);
      var tmp_0;
      if (enabled_0._v) {
        // Inline function 'com.varabyte.kobweb.silk.components.forms.Button.<anonymous>' call
        var tmp_1 = Companion_instance;
        $composer_0.z1m(2066661363);
        // Inline function 'androidx.compose.runtime.cache' call
        var this_2 = $composer_0;
        var invalid = ($dirty & 14) === 4;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = this_2.d1o();
        var tmp_2;
        if (invalid ? true : it === Companion_getInstance().r1h_1) {
          // Inline function 'com.varabyte.kobweb.silk.components.forms.Button.<anonymous>.<anonymous>' call
          var value = Button$lambda(onClick_0);
          this_2.j1o(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0_group_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_0.a1n();
        tmp_0 = onClick(tmp_1, tmp0_group_0);
      } else {
        tmp_0 = Companion_instance;
      }
      var tmp1_group = this_1.e34(tmp_0);
      $composer_0.a1n();
      $composer_0.z1m(994961639);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_3 = $composer_0;
      var invalid_0 = ($dirty & 7168) === 2048;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_3.d1o();
      var tmp_4;
      if (invalid_0 ? true : it_0 === Companion_getInstance().r1h_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.forms.Button.<anonymous>' call
        var value_0 = Button$lambda_0(type_0);
        this_3.j1o(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = it_0;
      }
      var tmp_5 = tmp_4;
      var tmp2_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_0.a1n();
      var tmp_6 = toAttrs(tmp1_group, tmp2_group);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.forms.Button.<anonymous>' call
      var tmp_7 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_7, 580157781, true, Button$lambda_1(ref_0, content));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.z1m(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_1.s1e(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_1.d1o();
      var tmp_8;
      if (invalid_1 ? true : it_1 === Companion_getInstance().r1h_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.forms.Button.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_1.j1o(value_1);
        tmp_8 = value_1;
      } else {
        tmp_8 = it_1;
      }
      var tmp_9 = tmp_8;
      var tmp0 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
      $composer_1.a1n();
      Button(tmp_6, tmp0, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l1h();
    }
    var tmp3_safe_receiver = $composer_0.s1o();
    if (tmp3_safe_receiver == null)
      null;
    else {
      tmp3_safe_receiver.p1t(Button$lambda_2(onClick_0, modifier_0, variant_0, type_0, enabled_0, size_0, colorScheme_0, focusBorderColor_0, ref_0, content, $changed, $default));
    }
  }
  function MD() {
    MD_instance = this;
    this.t3f_1 = FontSizeVars_getInstance().a3g().o2u();
    this.u3f_1 = get_cssRem(2.5);
    this.v3f_1 = get_cssRem(1);
  }
  protoOf(MD).b3g = function () {
    return this.t3f_1;
  };
  protoOf(MD).c3g = function () {
    return this.u3f_1;
  };
  protoOf(MD).d3g = function () {
    return this.v3f_1;
  };
  var MD_instance;
  function MD_getInstance() {
    if (MD_instance == null)
      new MD();
    return MD_instance;
  }
  function toModifier_0(_this__u8e3s4) {
    _init_properties_Button_kt__2845m6();
    return setVariable(setVariable(setVariable(Companion_instance, ButtonVars_getInstance().q3f(), _this__u8e3s4.b3g()), ButtonVars_getInstance().r3f(), _this__u8e3s4.c3g()), ButtonVars_getInstance().s3f(), _this__u8e3s4.d3g());
  }
  function ButtonStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Button_kt__2845m6();
    $this$ComponentStyle.d38(ButtonStyle$delegate$lambda$lambda);
    var tmp = get_hover($this$ComponentStyle).o39(not($this$ComponentStyle, [get_ariaDisabled($this$ComponentStyle)]));
    tmp.f39(ButtonStyle$delegate$lambda$lambda_0);
    var tmp_0 = get_focusVisible($this$ComponentStyle).o39(not($this$ComponentStyle, [get_ariaDisabled($this$ComponentStyle)]));
    tmp_0.f39(ButtonStyle$delegate$lambda$lambda_1);
    var tmp_1 = get_active($this$ComponentStyle).o39(not($this$ComponentStyle, [get_ariaDisabled($this$ComponentStyle)]));
    tmp_1.f39(ButtonStyle$delegate$lambda$lambda_2);
    return Unit_instance;
  }
  function ButtonStyle$delegate$lambda$lambda() {
    _init_properties_Button_kt__2845m6();
    var tmp = borderRadius(verticalAlign(padding_0(whiteSpace(fontWeight(fontSize(minWidth(height(lineHeight(backgroundColor(color(Companion_instance, ButtonVars_getInstance().v3e().o2u()), ButtonVars_getInstance().m3f().o2u()), 1.2), ButtonVars_getInstance().r3f().o2u()), ButtonVars_getInstance().r3f().o2u()), ButtonVars_getInstance().q3f().o2u()), Companion_instance_7.o2s()), Companion_instance_8.y2u()), VOID, ButtonVars_getInstance().s3f().o2u()), Companion_instance_9.s2t()), get_cssRem(0.375));
    return transition(userSelect(border(tmp, ButtonStyle$delegate$lambda$lambda$lambda), Companion_instance_3.m2s()), [CSSTransition_init_$Create$('background-color', ButtonVars_getInstance().c3f().o2u())]);
  }
  function ButtonStyle$delegate$lambda$lambda$lambda($this$border) {
    _init_properties_Button_kt__2845m6();
    $this$border.u35(get_px(0));
    return Unit_instance;
  }
  function ButtonStyle$delegate$lambda$lambda_0() {
    _init_properties_Button_kt__2845m6();
    return cursor(backgroundColor(Companion_instance, ButtonVars_getInstance().o3f().o2u()), Companion_instance_1.j2s());
  }
  function ButtonStyle$delegate$lambda$lambda_1() {
    _init_properties_Button_kt__2845m6();
    var tmp = Companion_instance;
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return boxShadow(outline(tmp, tmp_0, 'solid', Colors_instance.c35()), VOID, VOID, VOID, get_cssRem(0.1875), ButtonVars_getInstance().n3f().o2u());
  }
  function ButtonStyle$delegate$lambda$lambda_2() {
    _init_properties_Button_kt__2845m6();
    return backgroundColor(Companion_instance, ButtonVars_getInstance().p3f().o2u());
  }
  function Button$lambda($onClick) {
    return function (evt) {
      $onClick(evt);
      evt.x2p();
      return Unit_instance;
    };
  }
  function Button$lambda_0($type) {
    return function ($this$toAttrs) {
      type($this$toAttrs, $type._v);
      return Unit_instance;
    };
  }
  function Button$lambda_1($ref, $content) {
    return function ($this$Button, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(580157781, $changed, -1, 'com.varabyte.kobweb.silk.components.forms.Button.<anonymous> (Button.kt:176)');
      }
      registerRefScope($this$Button, $ref._v, $composer_0, 72);
      var tmp = Center_instance;
      var tmp_0 = CenterVertically_instance;
      Row(null, tmp, tmp_0, null, $content, $composer_0, 0, 9);
      var tmp_1;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_1 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.r2h(p0, p1, p2);
    };
  }
  function Button$lambda_2($onClick, $modifier, $variant, $type, $enabled, $size, $colorScheme, $focusBorderColor, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Button_0($onClick, $modifier._v, $variant._v, $type._v, $enabled._v, $size._v, $colorScheme._v, $focusBorderColor._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function ButtonStyle$factory() {
    return getPropertyCallableRef('ButtonStyle', 0, KProperty0, function () {
      return get_ButtonStyle();
    }, null);
  }
  function BackgroundDefaultColor$factory() {
    return getPropertyCallableRef('BackgroundDefaultColor', 1, KProperty1, function (receiver) {
      return receiver.m3f();
    }, null);
  }
  function BackgroundFocusColor$factory() {
    return getPropertyCallableRef('BackgroundFocusColor', 1, KProperty1, function (receiver) {
      return receiver.n3f();
    }, null);
  }
  function BackgroundHoverColor$factory() {
    return getPropertyCallableRef('BackgroundHoverColor', 1, KProperty1, function (receiver) {
      return receiver.o3f();
    }, null);
  }
  function BackgroundPressedColor$factory() {
    return getPropertyCallableRef('BackgroundPressedColor', 1, KProperty1, function (receiver) {
      return receiver.p3f();
    }, null);
  }
  function Color$factory_0() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.v3e();
    }, null);
  }
  function ColorTransitionDuration$factory_0() {
    return getPropertyCallableRef('ColorTransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.c3f();
    }, null);
  }
  function FontSize$factory() {
    return getPropertyCallableRef('FontSize', 1, KProperty1, function (receiver) {
      return receiver.q3f();
    }, null);
  }
  function Height$factory() {
    return getPropertyCallableRef('Height', 1, KProperty1, function (receiver) {
      return receiver.r3f();
    }, null);
  }
  function PaddingHorizontal$factory() {
    return getPropertyCallableRef('PaddingHorizontal', 1, KProperty1, function (receiver) {
      return receiver.s3f();
    }, null);
  }
  var properties_initialized_Button_kt_yov184;
  function _init_properties_Button_kt__2845m6() {
    if (!properties_initialized_Button_kt_yov184) {
      properties_initialized_Button_kt_yov184 = true;
      ButtonStyle$delegate = ComponentStyle(VOID, 'silk', ButtonStyle$delegate$lambda);
    }
  }
  function get_CheckboxStyle() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxStyle$delegate.u2u(null, CheckboxStyle$factory());
  }
  var CheckboxStyle$delegate;
  function get_CheckboxEnabledAnim() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxEnabledAnim$delegate.u2u(null, CheckboxEnabledAnim$factory());
  }
  var CheckboxEnabledAnim$delegate;
  function get_CheckboxIconContainerStyle() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxIconContainerStyle$delegate.u2u(null, CheckboxIconContainerStyle$factory());
  }
  var CheckboxIconContainerStyle$delegate;
  function get_UncheckedCheckboxIconContainerVariant() {
    _init_properties_Checkbox_kt__x46qhp();
    return UncheckedCheckboxIconContainerVariant$delegate.u2u(null, UncheckedCheckboxIconContainerVariant$factory());
  }
  var UncheckedCheckboxIconContainerVariant$delegate;
  function get_CheckedCheckboxIconContainerVariant() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckedCheckboxIconContainerVariant$delegate.u2u(null, CheckedCheckboxIconContainerVariant$factory());
  }
  var CheckedCheckboxIconContainerVariant$delegate;
  function get_CheckboxIconStyle() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxIconStyle$delegate.u2u(null, CheckboxIconStyle$factory());
  }
  var CheckboxIconStyle$delegate;
  function get_CheckboxInputVariant() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxInputVariant$delegate.u2u(null, CheckboxInputVariant$factory());
  }
  var CheckboxInputVariant$delegate;
  function CheckboxVars() {
    CheckboxVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().o2u();
    tmp.e3g_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_cssRem(0.125);
    tmp_0.f3g_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_cssRem(0.125);
    tmp_1.g3g_1 = StyleVariable_0(tmp0_defaultFallback_1, 'silk');
    this.h3g_1 = StyleVariable('silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_cssRem(0.5);
    tmp_2.i3g_1 = StyleVariable_0(tmp0_defaultFallback_2, 'silk');
    this.j3g_1 = StyleVariable('silk');
    this.k3g_1 = StyleVariable('silk');
    var tmp_3 = this;
    var tmp0_defaultFallback_3 = get_FocusOutlineColorVar().o2u();
    tmp_3.l3g_1 = StyleVariable_0(tmp0_defaultFallback_3, 'silk');
    var tmp_4 = this;
    var tmp0_defaultFallback_4 = get_cssRem(0.1875);
    tmp_4.m3g_1 = StyleVariable_0(tmp0_defaultFallback_4, 'silk');
    this.n3g_1 = StyleVariable('silk');
    this.o3g_1 = StyleVariable('silk');
    this.p3g_1 = StyleVariable('silk');
    this.q3g_1 = StyleVariable('silk');
    var tmp_5 = this;
    var tmp0_defaultFallback_5 = TransitionDurationVars_getInstance().s3g().o2u();
    tmp_5.r3g_1 = StyleVariable_1(tmp0_defaultFallback_5, 'silk');
  }
  protoOf(CheckboxVars).w3e = function () {
    return this.e3g_1.u2u(this, BorderColor$factory_0());
  };
  protoOf(CheckboxVars).t3g = function () {
    return this.f3g_1.u2u(this, BorderRadius$factory());
  };
  protoOf(CheckboxVars).u3g = function () {
    return this.g3g_1.u2u(this, BorderWidth$factory());
  };
  protoOf(CheckboxVars).v3g = function () {
    return this.h3g_1.u2u(this, Size$factory());
  };
  protoOf(CheckboxVars).w3g = function () {
    return this.i3g_1.u2u(this, Spacing$factory());
  };
  protoOf(CheckboxVars).q3f = function () {
    return this.j3g_1.u2u(this, FontSize$factory_0());
  };
  protoOf(CheckboxVars).x3g = function () {
    return this.k3g_1.u2u(this, IconSize$factory());
  };
  protoOf(CheckboxVars).y3g = function () {
    return this.l3g_1.u2u(this, FocusOutlineColor$factory());
  };
  protoOf(CheckboxVars).z3g = function () {
    return this.m3g_1.u2u(this, FocusOutlineSpread$factory());
  };
  protoOf(CheckboxVars).a3h = function () {
    return this.n3g_1.u2u(this, UncheckedBackgroundColor$factory());
  };
  protoOf(CheckboxVars).b3h = function () {
    return this.o3g_1.u2u(this, IconColor$factory());
  };
  protoOf(CheckboxVars).c3h = function () {
    return this.p3g_1.u2u(this, IconBackgroundColor$factory());
  };
  protoOf(CheckboxVars).d3h = function () {
    return this.q3g_1.u2u(this, IconBackgroundHoverColor$factory());
  };
  protoOf(CheckboxVars).e3h = function () {
    return this.r3g_1.u2u(this, TransitionDuration$factory());
  };
  var CheckboxVars_instance;
  function CheckboxVars_getInstance() {
    if (CheckboxVars_instance == null)
      new CheckboxVars();
    return CheckboxVars_instance;
  }
  function CheckboxStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$ComponentStyle.d38(CheckboxStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function CheckboxStyle$delegate$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = cursor(fontSize(userSelect(gap(Companion_instance, CheckboxVars_getInstance().w3g().o2u()), Companion_instance_3.m2s()), CheckboxVars_getInstance().q3f().o2u()), Companion_instance_1.j2s());
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'relative';
    return position(tmp, tmp$ret$3);
  }
  function CheckboxEnabledAnim$delegate$lambda($this$Keyframes) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$Keyframes.h36(CheckboxEnabledAnim$delegate$lambda$lambda);
    $this$Keyframes.i36(CheckboxEnabledAnim$delegate$lambda$lambda_0);
    return Unit_instance;
  }
  function CheckboxEnabledAnim$delegate$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    return opacity(Companion_instance, 0);
  }
  function CheckboxEnabledAnim$delegate$lambda$lambda_0() {
    _init_properties_Checkbox_kt__x46qhp();
    return opacity(Companion_instance, 1);
  }
  function CheckboxIconContainerStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$ComponentStyle.d38(CheckboxIconContainerStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function CheckboxIconContainerStyle$delegate$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = size(fontSize(Companion_instance, CheckboxVars_getInstance().x3g().o2u()), CheckboxVars_getInstance().v3g().o2u());
    var tmp_0 = CheckboxVars_getInstance().u3g().o2u();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition_0(borderRadius(border_0(tmp, tmp_0, 'solid', CheckboxVars_getInstance().w3e().o2u()), CheckboxVars_getInstance().t3g().o2u()), Companion_instance_2.j2v(listOf(['background-color', 'border-color']), CheckboxVars_getInstance().e3h().o2u()));
  }
  function UncheckedCheckboxIconContainerVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Checkbox_kt__x46qhp();
    return backgroundColor(Companion_instance, CheckboxVars_getInstance().a3h().o2u());
  }
  function CheckedCheckboxIconContainerVariant$delegate$lambda($this$addVariant) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$addVariant.d38(CheckedCheckboxIconContainerVariant$delegate$lambda$lambda);
    return Unit_instance;
  }
  function CheckedCheckboxIconContainerVariant$delegate$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = backgroundColor(Companion_instance, CheckboxVars_getInstance().c3h().o2u());
    return border(tmp, CheckedCheckboxIconContainerVariant$delegate$lambda$lambda$lambda);
  }
  function CheckedCheckboxIconContainerVariant$delegate$lambda$lambda$lambda($this$border) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$border.s35(CheckboxVars_getInstance().c3h().o2u());
    return Unit_instance;
  }
  function CheckboxIconStyle$delegate$lambda($this$base) {
    _init_properties_Checkbox_kt__x46qhp();
    return color(size(Companion_instance, CheckboxVars_getInstance().v3g().o2u()), CheckboxVars_getInstance().b3h().o2u());
  }
  function CheckboxInputVariant$delegate$lambda($this$addVariant) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$addVariant.d38(CheckboxInputVariant$delegate$lambda$lambda);
    $this$addVariant.f38(':focus-visible + *', CheckboxInputVariant$delegate$lambda$lambda_0);
    $this$addVariant.f38(':not([aria-disabled]):hover + *', CheckboxInputVariant$delegate$lambda$lambda_1);
    return Unit_instance;
  }
  function CheckboxInputVariant$delegate$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    return get_HiddenInputModifier();
  }
  function CheckboxInputVariant$delegate$lambda$lambda_0() {
    _init_properties_Checkbox_kt__x46qhp();
    return boxShadow(Companion_instance, VOID, VOID, VOID, CheckboxVars_getInstance().z3g().o2u(), CheckboxVars_getInstance().y3g().o2u());
  }
  function CheckboxInputVariant$delegate$lambda$lambda_1() {
    _init_properties_Checkbox_kt__x46qhp();
    return setVariable(Companion_instance, CheckboxVars_getInstance().c3h(), CheckboxVars_getInstance().d3h().o2u());
  }
  function CheckboxStyle$factory() {
    return getPropertyCallableRef('CheckboxStyle', 0, KProperty0, function () {
      return get_CheckboxStyle();
    }, null);
  }
  function CheckboxEnabledAnim$factory() {
    return getPropertyCallableRef('CheckboxEnabledAnim', 0, KProperty0, function () {
      return get_CheckboxEnabledAnim();
    }, null);
  }
  function CheckboxIconContainerStyle$factory() {
    return getPropertyCallableRef('CheckboxIconContainerStyle', 0, KProperty0, function () {
      return get_CheckboxIconContainerStyle();
    }, null);
  }
  function UncheckedCheckboxIconContainerVariant$factory() {
    return getPropertyCallableRef('UncheckedCheckboxIconContainerVariant', 0, KProperty0, function () {
      return get_UncheckedCheckboxIconContainerVariant();
    }, null);
  }
  function CheckedCheckboxIconContainerVariant$factory() {
    return getPropertyCallableRef('CheckedCheckboxIconContainerVariant', 0, KProperty0, function () {
      return get_CheckedCheckboxIconContainerVariant();
    }, null);
  }
  function CheckboxIconStyle$factory() {
    return getPropertyCallableRef('CheckboxIconStyle', 0, KProperty0, function () {
      return get_CheckboxIconStyle();
    }, null);
  }
  function CheckboxInputVariant$factory() {
    return getPropertyCallableRef('CheckboxInputVariant', 0, KProperty0, function () {
      return get_CheckboxInputVariant();
    }, null);
  }
  function BorderColor$factory_0() {
    return getPropertyCallableRef('BorderColor', 1, KProperty1, function (receiver) {
      return receiver.w3e();
    }, null);
  }
  function BorderRadius$factory() {
    return getPropertyCallableRef('BorderRadius', 1, KProperty1, function (receiver) {
      return receiver.t3g();
    }, null);
  }
  function BorderWidth$factory() {
    return getPropertyCallableRef('BorderWidth', 1, KProperty1, function (receiver) {
      return receiver.u3g();
    }, null);
  }
  function Size$factory() {
    return getPropertyCallableRef('Size', 1, KProperty1, function (receiver) {
      return receiver.v3g();
    }, null);
  }
  function Spacing$factory() {
    return getPropertyCallableRef('Spacing', 1, KProperty1, function (receiver) {
      return receiver.w3g();
    }, null);
  }
  function FontSize$factory_0() {
    return getPropertyCallableRef('FontSize', 1, KProperty1, function (receiver) {
      return receiver.q3f();
    }, null);
  }
  function IconSize$factory() {
    return getPropertyCallableRef('IconSize', 1, KProperty1, function (receiver) {
      return receiver.x3g();
    }, null);
  }
  function FocusOutlineColor$factory() {
    return getPropertyCallableRef('FocusOutlineColor', 1, KProperty1, function (receiver) {
      return receiver.y3g();
    }, null);
  }
  function FocusOutlineSpread$factory() {
    return getPropertyCallableRef('FocusOutlineSpread', 1, KProperty1, function (receiver) {
      return receiver.z3g();
    }, null);
  }
  function UncheckedBackgroundColor$factory() {
    return getPropertyCallableRef('UncheckedBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.a3h();
    }, null);
  }
  function IconColor$factory() {
    return getPropertyCallableRef('IconColor', 1, KProperty1, function (receiver) {
      return receiver.b3h();
    }, null);
  }
  function IconBackgroundColor$factory() {
    return getPropertyCallableRef('IconBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.c3h();
    }, null);
  }
  function IconBackgroundHoverColor$factory() {
    return getPropertyCallableRef('IconBackgroundHoverColor', 1, KProperty1, function (receiver) {
      return receiver.d3h();
    }, null);
  }
  function TransitionDuration$factory() {
    return getPropertyCallableRef('TransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.e3h();
    }, null);
  }
  var properties_initialized_Checkbox_kt_pem0wr;
  function _init_properties_Checkbox_kt__x46qhp() {
    if (!properties_initialized_Checkbox_kt_pem0wr) {
      properties_initialized_Checkbox_kt_pem0wr = true;
      var tmp0_extraModifiers = rowClasses(Companion_instance, VOID, CenterVertically_instance);
      CheckboxStyle$delegate = ComponentStyle(tmp0_extraModifiers, 'silk', CheckboxStyle$delegate$lambda);
      CheckboxEnabledAnim$delegate = Keyframes('silk', CheckboxEnabledAnim$delegate$lambda);
      CheckboxIconContainerStyle$delegate = ComponentStyle(VOID, 'silk', CheckboxIconContainerStyle$delegate$lambda);
      var tmp = get_CheckboxIconContainerStyle();
      UncheckedCheckboxIconContainerVariant$delegate = addVariantBase(tmp, VOID, UncheckedCheckboxIconContainerVariant$delegate$lambda);
      var tmp_0 = get_CheckboxIconContainerStyle();
      CheckedCheckboxIconContainerVariant$delegate = addVariant(tmp_0, VOID, CheckedCheckboxIconContainerVariant$delegate$lambda);
      var tmp_1 = Companion_instance_5;
      CheckboxIconStyle$delegate = base(tmp_1, VOID, 'silk', CheckboxIconStyle$delegate$lambda);
      var tmp_2 = get_InputStyle();
      CheckboxInputVariant$delegate = addVariant(tmp_2, VOID, CheckboxInputVariant$delegate$lambda);
    }
  }
  function get_HiddenInputModifier() {
    _init_properties_Input_kt__b04mg8();
    return HiddenInputModifier;
  }
  var HiddenInputModifier;
  function get_InputGroupStyle() {
    _init_properties_Input_kt__b04mg8();
    return InputGroupStyle$delegate.u2u(null, InputGroupStyle$factory());
  }
  var InputGroupStyle$delegate;
  function get_InputStyle() {
    _init_properties_Input_kt__b04mg8();
    return InputStyle$delegate.u2u(null, InputStyle$factory());
  }
  var InputStyle$delegate;
  function get_OutlinedInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return OutlinedInputVariant$delegate.u2u(null, OutlinedInputVariant$factory());
  }
  var OutlinedInputVariant$delegate;
  function get_FilledInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return FilledInputVariant$delegate.u2u(null, FilledInputVariant$factory());
  }
  var FilledInputVariant$delegate;
  function get_FlushedInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return FlushedInputVariant$delegate.u2u(null, FlushedInputVariant$factory());
  }
  var FlushedInputVariant$delegate;
  function get_UnstyledInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return UnstyledInputVariant$delegate.u2u(null, UnstyledInputVariant$factory());
  }
  var UnstyledInputVariant$delegate;
  function InputVars() {
    InputVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().o2u();
    tmp.f3h_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.g3h_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_FocusOutlineColorVar().o2u();
    tmp_0.h3h_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    this.i3h_1 = StyleVariable('silk');
    this.j3h_1 = StyleVariable('silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().u3e().o2u();
    tmp_1.k3h_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
    this.l3h_1 = StyleVariable('silk');
    this.m3h_1 = StyleVariable('silk');
    this.n3h_1 = StyleVariable('silk');
    this.o3h_1 = StyleVariable('silk');
    this.p3h_1 = StyleVariable('silk');
    this.q3h_1 = StyleVariable('silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_PlaceholderOpacityVar().o2u();
    tmp_2.r3h_1 = StyleVariable_2(tmp0_defaultFallback_2, 'silk');
    var tmp_3 = this;
    var tmp0_defaultFallback_3 = get_PlaceholderColorVar().o2u();
    tmp_3.s3h_1 = StyleVariable_0(tmp0_defaultFallback_3, 'silk');
    var tmp_4 = this;
    var tmp0_defaultFallback_4 = get_cssRem(2.25);
    tmp_4.t3h_1 = StyleVariable_0(tmp0_defaultFallback_4, 'silk');
    var tmp_5 = this;
    var tmp0_defaultFallback_5 = get_cssRem(2.25);
    tmp_5.u3h_1 = StyleVariable_0(tmp0_defaultFallback_5, 'silk');
  }
  protoOf(InputVars).w3e = function () {
    return this.f3h_1.u2u(this, BorderColor$factory_1());
  };
  protoOf(InputVars).t3g = function () {
    return this.g3h_1.u2u(this, BorderRadius$factory_0());
  };
  protoOf(InputVars).v3h = function () {
    return this.h3h_1.u2u(this, BorderFocusColor$factory());
  };
  protoOf(InputVars).w3h = function () {
    return this.i3h_1.u2u(this, BorderHoverColor$factory());
  };
  protoOf(InputVars).x3h = function () {
    return this.j3h_1.u2u(this, BorderInvalidColor$factory());
  };
  protoOf(InputVars).c3f = function () {
    return this.k3h_1.u2u(this, ColorTransitionDuration$factory_1());
  };
  protoOf(InputVars).y3h = function () {
    return this.l3h_1.u2u(this, FilledColor$factory());
  };
  protoOf(InputVars).z3h = function () {
    return this.m3h_1.u2u(this, FilledHoverColor$factory());
  };
  protoOf(InputVars).a3i = function () {
    return this.n3h_1.u2u(this, FilledFocusColor$factory());
  };
  protoOf(InputVars).q3f = function () {
    return this.o3h_1.u2u(this, FontSize$factory_1());
  };
  protoOf(InputVars).r3f = function () {
    return this.p3h_1.u2u(this, Height$factory_0());
  };
  protoOf(InputVars).b3i = function () {
    return this.q3h_1.u2u(this, Padding$factory());
  };
  protoOf(InputVars).c3i = function () {
    return this.r3h_1.u2u(this, PlaceholderOpacity$factory());
  };
  protoOf(InputVars).d3i = function () {
    return this.s3h_1.u2u(this, PlaceholderColor$factory());
  };
  var InputVars_instance;
  function InputVars_getInstance() {
    if (InputVars_instance == null)
      new InputVars();
    return InputVars_instance;
  }
  function inputPadding(_this__u8e3s4) {
    _init_properties_Input_kt__b04mg8();
    var padding = InputVars_getInstance().b3i().o2u();
    return paddingInline(_this__u8e3s4, padding, padding);
  }
  function InputGroupStyle$delegate$lambda($this$base) {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    var tmp_0 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = outline(tmp, tmp_0, 'solid', Colors_instance.c35());
    var tmp_2 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return fontSize(borderRadius(border_0(tmp_1, tmp_2, 'solid', Colors_instance.c35()), InputVars_getInstance().t3g().o2u()), InputVars_getInstance().q3f().o2u());
  }
  function InputStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Input_kt__b04mg8();
    $this$ComponentStyle.d38(InputStyle$delegate$lambda$lambda);
    var tmp = get_placeholder($this$ComponentStyle);
    tmp.f39(InputStyle$delegate$lambda$lambda_0);
    return Unit_instance;
  }
  function InputStyle$delegate$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = backgroundColor(fontSize(height(color(appearance(Companion_instance, Companion_instance_11.m2s()), get_ColorVar().o2u()), InputVars_getInstance().r3f().o2u()), InputVars_getInstance().q3f().o2u()), Colors_instance.c35());
    var tmp_0 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = outline(tmp, tmp_0, 'solid', Colors_instance.c35());
    var tmp_2 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition_0(border_0(tmp_1, tmp_2, 'solid', Colors_instance.c35()), Companion_instance_2.j2v(listOf(['border-color', 'box-shadow', 'background-color']), InputVars_getInstance().c3f().o2u()));
  }
  function InputStyle$delegate$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return color(opacity(Companion_instance, InputVars_getInstance().c3i().o2u()), InputVars_getInstance().d3i().o2u());
  }
  function OutlinedInputVariant$delegate$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.d38(OutlinedInputVariant$delegate$lambda$lambda);
    var tmp = get_ariaInvalid($this$addVariant);
    tmp.f39(OutlinedInputVariant$delegate$lambda$lambda_0);
    var tmp_0 = get_hover($this$addVariant).o39(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_0.f39(OutlinedInputVariant$delegate$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).o39(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_1.f39(OutlinedInputVariant$delegate$lambda$lambda_2);
    return Unit_instance;
  }
  function invoke$bordered(_this__u8e3s4, color) {
    var tmp = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return boxShadow(border_0(_this__u8e3s4, tmp, 'solid', color), VOID, VOID, VOID, get_px(1), color);
  }
  function OutlinedInputVariant$delegate$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = borderRadius(inputPadding(Companion_instance), InputVars_getInstance().t3g().o2u());
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border_0(tmp, tmp_0, 'solid', InputVars_getInstance().w3e().o2u());
  }
  function OutlinedInputVariant$delegate$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered(Companion_instance, InputVars_getInstance().x3h().o2u());
  }
  function OutlinedInputVariant$delegate$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    return border(tmp, OutlinedInputVariant$delegate$lambda$lambda$lambda);
  }
  function OutlinedInputVariant$delegate$lambda$lambda$lambda($this$border) {
    _init_properties_Input_kt__b04mg8();
    $this$border.s35(InputVars_getInstance().w3h().o2u());
    return Unit_instance;
  }
  function OutlinedInputVariant$delegate$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered(Companion_instance, InputVars_getInstance().v3h().o2u());
  }
  function FilledInputVariant$delegate$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.d38(FilledInputVariant$delegate$lambda$lambda);
    var tmp = get_hover($this$addVariant).o39(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp.f39(FilledInputVariant$delegate$lambda$lambda_0);
    var tmp_0 = get_ariaInvalid($this$addVariant);
    tmp_0.f39(FilledInputVariant$delegate$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).o39(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_1.f39(FilledInputVariant$delegate$lambda$lambda_2);
    return Unit_instance;
  }
  function invoke$bordered_0(_this__u8e3s4, color) {
    return boxShadow(border(_this__u8e3s4, FilledInputVariant$delegate$lambda$bordered$lambda(color)), VOID, VOID, VOID, get_px(1), color);
  }
  function FilledInputVariant$delegate$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = borderRadius(backgroundColor(inputPadding(Companion_instance), InputVars_getInstance().y3h().o2u()), InputVars_getInstance().t3g().o2u());
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border_0(tmp, tmp_0, 'solid', Colors_instance.c35());
  }
  function FilledInputVariant$delegate$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return backgroundColor(Companion_instance, InputVars_getInstance().z3h().o2u());
  }
  function FilledInputVariant$delegate$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_0(Companion_instance, InputVars_getInstance().x3h().o2u());
  }
  function FilledInputVariant$delegate$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_0(backgroundColor(Companion_instance, InputVars_getInstance().a3i().o2u()), InputVars_getInstance().v3h().o2u());
  }
  function FilledInputVariant$delegate$lambda$bordered$lambda($color) {
    return function ($this$border) {
      $this$border.s35($color);
      return Unit_instance;
    };
  }
  function FlushedInputVariant$delegate$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.d38(FlushedInputVariant$delegate$lambda$lambda);
    var tmp = get_ariaInvalid($this$addVariant);
    tmp.f39(FlushedInputVariant$delegate$lambda$lambda_0);
    var tmp_0 = get_hover($this$addVariant).o39(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_0.f39(FlushedInputVariant$delegate$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).o39(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_1.f39(FlushedInputVariant$delegate$lambda$lambda_2);
    return Unit_instance;
  }
  function invoke$bordered_1(_this__u8e3s4, color) {
    return boxShadow(border(_this__u8e3s4, FlushedInputVariant$delegate$lambda$bordered$lambda(color)), VOID, get_px(1), VOID, VOID, color);
  }
  function FlushedInputVariant$delegate$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp, tmp_0, 'solid', InputVars_getInstance().w3e().o2u());
  }
  function FlushedInputVariant$delegate$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_1(Companion_instance, InputVars_getInstance().x3h().o2u());
  }
  function FlushedInputVariant$delegate$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    return border(tmp, FlushedInputVariant$delegate$lambda$lambda$lambda);
  }
  function FlushedInputVariant$delegate$lambda$lambda$lambda($this$border) {
    _init_properties_Input_kt__b04mg8();
    $this$border.s35(InputVars_getInstance().w3h().o2u());
    return Unit_instance;
  }
  function FlushedInputVariant$delegate$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_1(Companion_instance, InputVars_getInstance().v3h().o2u());
  }
  function FlushedInputVariant$delegate$lambda$bordered$lambda($color) {
    return function ($this$border) {
      $this$border.s35($color);
      return Unit_instance;
    };
  }
  function UnstyledInputVariant$delegate$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    return Unit_instance;
  }
  function InputGroupStyle$factory() {
    return getPropertyCallableRef('InputGroupStyle', 0, KProperty0, function () {
      return get_InputGroupStyle();
    }, null);
  }
  function InputStyle$factory() {
    return getPropertyCallableRef('InputStyle', 0, KProperty0, function () {
      return get_InputStyle();
    }, null);
  }
  function OutlinedInputVariant$factory() {
    return getPropertyCallableRef('OutlinedInputVariant', 0, KProperty0, function () {
      return get_OutlinedInputVariant();
    }, null);
  }
  function FilledInputVariant$factory() {
    return getPropertyCallableRef('FilledInputVariant', 0, KProperty0, function () {
      return get_FilledInputVariant();
    }, null);
  }
  function FlushedInputVariant$factory() {
    return getPropertyCallableRef('FlushedInputVariant', 0, KProperty0, function () {
      return get_FlushedInputVariant();
    }, null);
  }
  function UnstyledInputVariant$factory() {
    return getPropertyCallableRef('UnstyledInputVariant', 0, KProperty0, function () {
      return get_UnstyledInputVariant();
    }, null);
  }
  function BorderColor$factory_1() {
    return getPropertyCallableRef('BorderColor', 1, KProperty1, function (receiver) {
      return receiver.w3e();
    }, null);
  }
  function BorderRadius$factory_0() {
    return getPropertyCallableRef('BorderRadius', 1, KProperty1, function (receiver) {
      return receiver.t3g();
    }, null);
  }
  function BorderFocusColor$factory() {
    return getPropertyCallableRef('BorderFocusColor', 1, KProperty1, function (receiver) {
      return receiver.v3h();
    }, null);
  }
  function BorderHoverColor$factory() {
    return getPropertyCallableRef('BorderHoverColor', 1, KProperty1, function (receiver) {
      return receiver.w3h();
    }, null);
  }
  function BorderInvalidColor$factory() {
    return getPropertyCallableRef('BorderInvalidColor', 1, KProperty1, function (receiver) {
      return receiver.x3h();
    }, null);
  }
  function ColorTransitionDuration$factory_1() {
    return getPropertyCallableRef('ColorTransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.c3f();
    }, null);
  }
  function FilledColor$factory() {
    return getPropertyCallableRef('FilledColor', 1, KProperty1, function (receiver) {
      return receiver.y3h();
    }, null);
  }
  function FilledHoverColor$factory() {
    return getPropertyCallableRef('FilledHoverColor', 1, KProperty1, function (receiver) {
      return receiver.z3h();
    }, null);
  }
  function FilledFocusColor$factory() {
    return getPropertyCallableRef('FilledFocusColor', 1, KProperty1, function (receiver) {
      return receiver.a3i();
    }, null);
  }
  function FontSize$factory_1() {
    return getPropertyCallableRef('FontSize', 1, KProperty1, function (receiver) {
      return receiver.q3f();
    }, null);
  }
  function Height$factory_0() {
    return getPropertyCallableRef('Height', 1, KProperty1, function (receiver) {
      return receiver.r3f();
    }, null);
  }
  function Padding$factory() {
    return getPropertyCallableRef('Padding', 1, KProperty1, function (receiver) {
      return receiver.b3i();
    }, null);
  }
  function PlaceholderOpacity$factory() {
    return getPropertyCallableRef('PlaceholderOpacity', 1, KProperty1, function (receiver) {
      return receiver.c3i();
    }, null);
  }
  function PlaceholderColor$factory() {
    return getPropertyCallableRef('PlaceholderColor', 1, KProperty1, function (receiver) {
      return receiver.d3i();
    }, null);
  }
  var properties_initialized_Input_kt_tklayu;
  function _init_properties_Input_kt__b04mg8() {
    if (!properties_initialized_Input_kt_tklayu) {
      properties_initialized_Input_kt_tklayu = true;
      var tmp = whiteSpace(overflow_0(clip(padding(margin_0(size(border_0(Companion_instance, get_px(0)), get_px(1)), get_px(-1)), get_px(0)), RectF_init_$Create$(50.0)), Companion_instance_4.a2u()), Companion_instance_8.y2u());
      // Inline function 'org.jetbrains.compose.web.css.Companion.Absolute' call
      // Inline function 'org.jetbrains.compose.web.css.Position' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$3 = 'absolute';
      HiddenInputModifier = position(tmp, tmp$ret$3);
      var tmp_0 = Companion_instance_5;
      InputGroupStyle$delegate = base(tmp_0, VOID, 'silk', InputGroupStyle$delegate$lambda);
      InputStyle$delegate = ComponentStyle(VOID, 'silk', InputStyle$delegate$lambda);
      var tmp_1 = get_InputStyle();
      OutlinedInputVariant$delegate = addVariant(tmp_1, VOID, OutlinedInputVariant$delegate$lambda);
      var tmp_2 = get_InputStyle();
      FilledInputVariant$delegate = addVariant(tmp_2, VOID, FilledInputVariant$delegate$lambda);
      var tmp_3 = get_InputStyle();
      FlushedInputVariant$delegate = addVariant(tmp_3, VOID, FlushedInputVariant$delegate$lambda);
      var tmp_4 = get_InputStyle();
      UnstyledInputVariant$delegate = addVariant(tmp_4, VOID, UnstyledInputVariant$delegate$lambda);
    }
  }
  function get_SwitchStyle() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchStyle$delegate.u2u(null, SwitchStyle$factory());
  }
  var SwitchStyle$delegate;
  function get_SwitchTrackStyle() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchTrackStyle$delegate.u2u(null, SwitchTrackStyle$factory());
  }
  var SwitchTrackStyle$delegate;
  function get_SwitchInputVariant() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchInputVariant$delegate.u2u(null, SwitchInputVariant$factory());
  }
  var SwitchInputVariant$delegate;
  function get_SwitchThumbStyle() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchThumbStyle$delegate.u2u(null, SwitchThumbStyle$factory());
  }
  var SwitchThumbStyle$delegate;
  function SwitchVars() {
    SwitchVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_px(9999);
    tmp.e3i_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.f3i_1 = StyleVariable('silk');
    this.g3i_1 = StyleVariable('silk');
    this.h3i_1 = StyleVariable('silk');
    this.i3i_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_FocusOutlineColorVar().o2u();
    tmp_0.j3i_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    this.k3i_1 = StyleVariable('silk');
    this.l3i_1 = StyleVariable('silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().n3i().o2u();
    tmp_1.m3i_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
  }
  protoOf(SwitchVars).t3g = function () {
    return this.e3i_1.u2u(this, BorderRadius$factory_1());
  };
  protoOf(SwitchVars).o3i = function () {
    return this.f3i_1.u2u(this, TrackWidth$factory());
  };
  protoOf(SwitchVars).p3i = function () {
    return this.g3i_1.u2u(this, TrackHeight$factory());
  };
  protoOf(SwitchVars).q3i = function () {
    return this.h3i_1.u2u(this, TrackPadding$factory());
  };
  protoOf(SwitchVars).r3i = function () {
    return this.i3i_1.u2u(this, TrackBackgroundColor$factory());
  };
  protoOf(SwitchVars).s3i = function () {
    return this.j3i_1.u2u(this, FocusColor$factory());
  };
  protoOf(SwitchVars).t3i = function () {
    return this.k3i_1.u2u(this, ThumbOffset$factory());
  };
  protoOf(SwitchVars).u3i = function () {
    return this.l3i_1.u2u(this, ThumbColor$factory());
  };
  protoOf(SwitchVars).e3h = function () {
    return this.m3i_1.u2u(this, TransitionDuration$factory_0());
  };
  var SwitchVars_instance;
  function SwitchVars_getInstance() {
    if (SwitchVars_instance == null)
      new SwitchVars();
    return SwitchVars_instance;
  }
  function SwitchStyle$delegate$lambda($this$base) {
    _init_properties_Switch_kt__dwcqr0();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'relative';
    return position(tmp, tmp$ret$3);
  }
  function SwitchTrackStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Switch_kt__dwcqr0();
    $this$ComponentStyle.d38(SwitchTrackStyle$delegate$lambda$lambda);
    var tmp = get_hover($this$ComponentStyle).o39(not($this$ComponentStyle, [get_ariaDisabled($this$ComponentStyle)]));
    tmp.f39(SwitchTrackStyle$delegate$lambda$lambda_0);
    return Unit_instance;
  }
  function SwitchTrackStyle$delegate$lambda$lambda() {
    _init_properties_Switch_kt__dwcqr0();
    return boxSizing(transition(backgroundColor(borderRadius(padding(minHeight(height(minWidth(width(Companion_instance, SwitchVars_getInstance().o3i().o2u()), SwitchVars_getInstance().o3i().o2u()), SwitchVars_getInstance().p3i().o2u()), SwitchVars_getInstance().p3i().o2u()), SwitchVars_getInstance().q3i().o2u()), SwitchVars_getInstance().t3g().o2u()), SwitchVars_getInstance().r3i().o2u()), [CSSTransition_init_$Create$('background-color', SwitchVars_getInstance().e3h().o2u())]), Companion_instance_12.f2s());
  }
  function SwitchTrackStyle$delegate$lambda$lambda_0() {
    _init_properties_Switch_kt__dwcqr0();
    return cursor(Companion_instance, Companion_instance_1.j2s());
  }
  function SwitchInputVariant$delegate$lambda($this$addVariant) {
    _init_properties_Switch_kt__dwcqr0();
    $this$addVariant.d38(SwitchInputVariant$delegate$lambda$lambda);
    $this$addVariant.f38(':focus-visible + *', SwitchInputVariant$delegate$lambda$lambda_0);
    return Unit_instance;
  }
  function SwitchInputVariant$delegate$lambda$lambda() {
    _init_properties_Switch_kt__dwcqr0();
    return get_HiddenInputModifier();
  }
  function SwitchInputVariant$delegate$lambda$lambda_0() {
    _init_properties_Switch_kt__dwcqr0();
    return boxShadow(Companion_instance, VOID, VOID, VOID, get_cssRem(0.1875), SwitchVars_getInstance().s3i().o2u());
  }
  function SwitchThumbStyle$delegate$lambda($this$base) {
    _init_properties_Switch_kt__dwcqr0();
    return transition(translateX(backgroundColor(borderRadius(size(Companion_instance, SwitchVars_getInstance().p3i().o2u()), SwitchVars_getInstance().t3g().o2u()), SwitchVars_getInstance().u3i().o2u()), SwitchVars_getInstance().t3i().o2u()), [CSSTransition_init_$Create$('translate', SwitchVars_getInstance().e3h().o2u())]);
  }
  function SwitchStyle$factory() {
    return getPropertyCallableRef('SwitchStyle', 0, KProperty0, function () {
      return get_SwitchStyle();
    }, null);
  }
  function SwitchTrackStyle$factory() {
    return getPropertyCallableRef('SwitchTrackStyle', 0, KProperty0, function () {
      return get_SwitchTrackStyle();
    }, null);
  }
  function SwitchInputVariant$factory() {
    return getPropertyCallableRef('SwitchInputVariant', 0, KProperty0, function () {
      return get_SwitchInputVariant();
    }, null);
  }
  function SwitchThumbStyle$factory() {
    return getPropertyCallableRef('SwitchThumbStyle', 0, KProperty0, function () {
      return get_SwitchThumbStyle();
    }, null);
  }
  function BorderRadius$factory_1() {
    return getPropertyCallableRef('BorderRadius', 1, KProperty1, function (receiver) {
      return receiver.t3g();
    }, null);
  }
  function TrackWidth$factory() {
    return getPropertyCallableRef('TrackWidth', 1, KProperty1, function (receiver) {
      return receiver.o3i();
    }, null);
  }
  function TrackHeight$factory() {
    return getPropertyCallableRef('TrackHeight', 1, KProperty1, function (receiver) {
      return receiver.p3i();
    }, null);
  }
  function TrackPadding$factory() {
    return getPropertyCallableRef('TrackPadding', 1, KProperty1, function (receiver) {
      return receiver.q3i();
    }, null);
  }
  function TrackBackgroundColor$factory() {
    return getPropertyCallableRef('TrackBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.r3i();
    }, null);
  }
  function FocusColor$factory() {
    return getPropertyCallableRef('FocusColor', 1, KProperty1, function (receiver) {
      return receiver.s3i();
    }, null);
  }
  function ThumbOffset$factory() {
    return getPropertyCallableRef('ThumbOffset', 1, KProperty1, function (receiver) {
      return receiver.t3i();
    }, null);
  }
  function ThumbColor$factory() {
    return getPropertyCallableRef('ThumbColor', 1, KProperty1, function (receiver) {
      return receiver.u3i();
    }, null);
  }
  function TransitionDuration$factory_0() {
    return getPropertyCallableRef('TransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.e3h();
    }, null);
  }
  var properties_initialized_Switch_kt_7kkg8m;
  function _init_properties_Switch_kt__dwcqr0() {
    if (!properties_initialized_Switch_kt_7kkg8m) {
      properties_initialized_Switch_kt_7kkg8m = true;
      var tmp = Companion_instance_5;
      SwitchStyle$delegate = base(tmp, VOID, 'silk', SwitchStyle$delegate$lambda);
      var tmp0_extraModifiers = ariaHidden(tabIndex(Companion_instance, -1));
      SwitchTrackStyle$delegate = ComponentStyle(tmp0_extraModifiers, 'silk', SwitchTrackStyle$delegate$lambda);
      var tmp_0 = get_InputStyle();
      SwitchInputVariant$delegate = addVariant(tmp_0, VOID, SwitchInputVariant$delegate$lambda);
      var tmp_1 = Companion_instance_5;
      SwitchThumbStyle$delegate = base(tmp_1, VOID, 'silk', SwitchThumbStyle$delegate$lambda);
    }
  }
  function get_CanvasStyle() {
    _init_properties_Canvas_kt__g1lz20();
    return CanvasStyle$delegate.u2u(null, CanvasStyle$factory());
  }
  var CanvasStyle$delegate;
  function CanvasStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Canvas_kt__g1lz20();
    return Unit_instance;
  }
  function CanvasStyle$factory() {
    return getPropertyCallableRef('CanvasStyle', 0, KProperty0, function () {
      return get_CanvasStyle();
    }, null);
  }
  var properties_initialized_Canvas_kt_i28dei;
  function _init_properties_Canvas_kt__g1lz20() {
    if (!properties_initialized_Canvas_kt_i28dei) {
      properties_initialized_Canvas_kt_i28dei = true;
      CanvasStyle$delegate = ComponentStyle(VOID, 'silk', CanvasStyle$delegate$lambda);
    }
  }
  function MoonIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.r1o(-325313529);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 2;
    if (!(($default & 1) === 1) ? true : !(($dirty & 11) === 2) ? true : !$composer_0.u1m()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (isTraceInProgress()) {
        traceEventStart(-325313529, $dirty, -1, 'com.varabyte.kobweb.silk.components.icons.MoonIcon (Icons.kt:387)');
      }
      var tmp = Companion_instance_13.h2y(200);
      createIcon(tmp, null, new Stroke(20), toAttrs(modifier_0._v), ComposableSingletons$IconsKt_getInstance().m3j_1, $composer_0, 25088, 2);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l1h();
    }
    var tmp0_safe_receiver = $composer_0.s1o();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.p1t(MoonIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function SunIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.r1o(-1238320138);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 2;
    if (!(($default & 1) === 1) ? true : !(($dirty & 11) === 2) ? true : !$composer_0.u1m()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1238320138, $dirty, -1, 'com.varabyte.kobweb.silk.components.icons.SunIcon (Icons.kt:402)');
      }
      createIcon(null, null, new Stroke(2), toAttrs(modifier_0._v), ComposableSingletons$IconsKt_getInstance().o3j_1, $composer_0, 25088, 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l1h();
    }
    var tmp0_safe_receiver = $composer_0.s1o();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.p1t(SunIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function HamburgerIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.r1o(-1069051533);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 2;
    if (!(($default & 1) === 1) ? true : !(($dirty & 11) === 2) ? true : !$composer_0.u1m()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1069051533, $dirty, -1, 'com.varabyte.kobweb.silk.components.icons.HamburgerIcon (Icons.kt:325)');
      }
      createIcon(null, null, new Stroke(3), toAttrs(modifier_0._v), ComposableSingletons$IconsKt_getInstance().i3j_1, $composer_0, 25088, 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l1h();
    }
    var tmp0_safe_receiver = $composer_0.s1o();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.p1t(HamburgerIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function CloseIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.r1o(-15719902);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 2;
    if (!(($default & 1) === 1) ? true : !(($dirty & 11) === 2) ? true : !$composer_0.u1m()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (isTraceInProgress()) {
        traceEventStart(-15719902, $dirty, -1, 'com.varabyte.kobweb.silk.components.icons.CloseIcon (Icons.kt:280)');
      }
      createIcon(null, null, new Stroke(3), toAttrs(modifier_0._v), ComposableSingletons$IconsKt_getInstance().g3j_1, $composer_0, 25088, 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l1h();
    }
    var tmp0_safe_receiver = $composer_0.s1o();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.p1t(CloseIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function createIcon(viewBox, width, renderStyle, attrs, content, $composer, $changed, $default) {
    var viewBox_0 = {_v: viewBox};
    var width_0 = {_v: width};
    var renderStyle_0 = {_v: renderStyle};
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.r1o(-26632938);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ((($default & 1) === 0 ? $composer_0.s1e(viewBox_0._v) : false) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 16;
    if (($changed & 896) === 0)
      $dirty = $dirty | ((($default & 4) === 0 ? $composer_0.s1e(renderStyle_0._v) : false) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.u1n(attrs_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.u1n(content) ? 16384 : 8192);
    if (!(($default & 2) === 2) ? true : !(($dirty & 46811) === 9362) ? true : !$composer_0.u1m()) {
      $composer_0.b1n();
      if (($changed & 1) === 0 ? true : $composer_0.f1n()) {
        if (!(($default & 1) === 0)) {
          viewBox_0._v = Companion_instance_13.h2y(24);
          $dirty = $dirty & -15;
        }
        if (!(($default & 2) === 0)) {
          width_0._v = get_em(1);
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          renderStyle_0._v = new Stroke();
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          attrs_0._v = null;
        }
      } else {
        $composer_0.l1h();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.c1n();
      if (isTraceInProgress()) {
        traceEventStart(-26632938, $dirty, -1, 'com.varabyte.kobweb.silk.components.icons.createIcon (Icons.kt:56)');
      }
      Svg(createIcon$lambda(width_0, viewBox_0, renderStyle_0, attrs_0), content, $composer_0, 112 & $dirty >> 9, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l1h();
    }
    var tmp0_safe_receiver = $composer_0.s1o();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.p1t(createIcon$lambda_0(viewBox_0, width_0, renderStyle_0, attrs_0, content, $changed, $default));
    }
  }
  function Fill() {
  }
  function Stroke(strokeWidth) {
    strokeWidth = strokeWidth === VOID ? null : strokeWidth;
    this.p3j_1 = strokeWidth;
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.r2h(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_1$lambda_21hevk($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(187923078, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-1.<anonymous> (Icons.kt:82)');
    }
    $composer_0.z1m(-1310550210);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.d1o();
    var tmp;
    if (false ? true : it === Companion_getInstance().r1h_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-1.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_1$lambda$lambda_6jt1tn;
      $composer_0.j1o(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.a1n();
    Path($this$createIcon, tmp0_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_1$lambda$lambda_6jt1tn($this$Path) {
    $this$Path.d2x(ComposableSingletons$IconsKt$lambda_1$lambda$lambda$lambda_jixjw0);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_1$lambda$lambda$lambda_jixjw0($this$d) {
    $this$d.w2x(20, 11);
    $this$d.c2y(7.83);
    $this$d.x2x(5.59, -5.59, true);
    $this$d.y2x(12, 4);
    $this$d.x2x(-8, 8, true);
    $this$d.x2x(8, 8, true);
    $this$d.x2x(1.41, -1.41, true);
    $this$d.y2x(7.83, 13);
    $this$d.c2y(20);
    $this$d.z2x(-2, true);
    $this$d.f2y();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.r2h(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_2$lambda_qs526n($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(465018625, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-2.<anonymous> (Icons.kt:103)');
    }
    $composer_0.z1m(-1816108166);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.d1o();
    var tmp;
    if (false ? true : it === Companion_getInstance().r1h_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-2.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_2$lambda$lambda_vhd48s;
      $composer_0.j1o(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.a1n();
    Path($this$createIcon, tmp0_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_2$lambda$lambda_vhd48s($this$Path) {
    $this$Path.d2x(ComposableSingletons$IconsKt$lambda_2$lambda$lambda$lambda_hsrvsf);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_2$lambda$lambda$lambda_hsrvsf($this$d) {
    $this$d.w2x(20, 12);
    $this$d.x2x(-1.41, -1.41, true);
    $this$d.y2x(13, 16.17);
    $this$d.a2y(4);
    $this$d.b2y(-2, true);
    $this$d.z2x(12.17, true);
    $this$d.x2x(-5.58, -5.59, true);
    $this$d.y2x(4, 12);
    $this$d.x2x(8, 8, true);
    $this$d.x2x(8, -8, true);
    $this$d.f2y();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.r2h(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_3$lambda_ffciqa($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1093309942, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-3.<anonymous> (Icons.kt:124)');
    }
    $composer_0.z1m(1973301197);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.d1o();
    var tmp;
    if (false ? true : it === Companion_getInstance().r1h_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-3.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_3$lambda$lambda_em6vb7;
      $composer_0.j1o(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.a1n();
    Path($this$createIcon, tmp0_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_3$lambda$lambda_em6vb7($this$Path) {
    $this$Path.d2x(ComposableSingletons$IconsKt$lambda_3$lambda$lambda$lambda_fwmqia);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_3$lambda$lambda$lambda_fwmqia($this$d) {
    $this$d.w2x(12, 4);
    $this$d.x2x(-1.14, 1.41, true);
    $this$d.y2x(16.17, 11);
    $this$d.c2y(4);
    $this$d.z2x(2, true);
    $this$d.b2y(12.17, true);
    $this$d.x2x(-5.58, 5.59, true);
    $this$d.y2x(12, 20);
    $this$d.x2x(8, -8, true);
    $this$d.f2y();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.r2h(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_4$lambda_de9ybx($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(353353466, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-4.<anonymous> (Icons.kt:144)');
    }
    $composer_0.z1m(1467743210);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.d1o();
    var tmp;
    if (false ? true : it === Companion_getInstance().r1h_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-4.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_4$lambda$lambda_abd73y;
      $composer_0.j1o(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.a1n();
    Path($this$createIcon, tmp0_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_4$lambda$lambda_abd73y($this$Path) {
    $this$Path.d2x(ComposableSingletons$IconsKt$lambda_4$lambda$lambda$lambda_lf2p65);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_4$lambda$lambda$lambda_lf2p65($this$d) {
    $this$d.w2x(4, 12);
    $this$d.x2x(1.41, 1.41, true);
    $this$d.y2x(11, 7.83);
    $this$d.a2y(20);
    $this$d.b2y(2, true);
    $this$d.a2y(7.83);
    $this$d.x2x(5.58, 5.59, true);
    $this$d.y2x(20, 12);
    $this$d.x2x(-8, -8, true);
    $this$d.x2x(-8, 8, true);
    $this$d.f2y();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.r2h(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_5$lambda_st7ml0($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(14879965, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-5.<anonymous> (Icons.kt:165)');
    }
    $composer_0.z1m(962185252);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.d1o();
    var tmp;
    if (false ? true : it === Companion_getInstance().r1h_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-5.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_5$lambda$lambda_z8x9j3;
      $composer_0.j1o(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.a1n();
    Path($this$createIcon, tmp0_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_5$lambda$lambda_z8x9j3($this$Path) {
    $this$Path.d2x(ComposableSingletons$IconsKt$lambda_5$lambda$lambda$lambda_cabx4k);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_5$lambda$lambda$lambda_cabx4k($this$d) {
    $this$d.w2x(21.843, 3.455);
    $this$d.d2y(6.961, 6.961, 0, 0, 0, -9.846, 0, true);
    $this$d.y2x(1.619, 13.832);
    $this$d.d2y(5.128, 5.128, 0, 0, 0, 7.252, 7.252, true);
    $this$d.y2x(17.3, 12.653);
    $this$d.e2y(3.293, 3.293, 0, 1, 0, 12.646, 8);
    $this$d.y2x(7.457, 13.184);
    $this$d.e2y(1, 1, 0, 1, 0, 8.871, 14.6);
    $this$d.y2x(14.06, 9.409);
    $this$d.d2y(1.294, 1.294, 0, 0, 1, 1.829, 1.83, true);
    $this$d.y2x(7.457, 19.67);
    $this$d.d2y(3.128, 3.128, 0, 0, 1, -4.424, -4.424, true);
    $this$d.y2x(13.411, 4.869);
    $this$d.d2y(4.962, 4.962, 0, 1, 1, 7.018, 7.018, true);
    $this$d.y2x(12.646, 19.67);
    $this$d.d2y(1, 1, 0, 1, 0, 1.414, 1.414, true);
    $this$d.y2x(21.843, 13.3);
    $this$d.d2y(6.96, 6.96, 0, 0, 0, 0, -9.846, true);
    $this$d.f2y();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.r2h(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_6$lambda_euh7($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(343641086, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-6.<anonymous> (Icons.kt:194)');
    }
    $composer_0.z1m(456627938);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.d1o();
    var tmp;
    if (false ? true : it === Companion_getInstance().r1h_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-6.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_6$lambda$lambda_aumq0w;
      $composer_0.j1o(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.a1n();
    Polyline($this$createIcon, tmp0_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_6$lambda$lambda_aumq0w($this$Polyline) {
    $this$Polyline.n2y([to(3, 12), to(9, 18), to(21, 2)]);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.r2h(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_7$lambda_su1bje($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1021140685, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-7.<anonymous> (Icons.kt:203)');
    }
    $composer_0.z1m(-48930456);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.d1o();
    var tmp;
    if (false ? true : it === Companion_getInstance().r1h_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-7.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_7$lambda$lambda_e2xce9;
      $composer_0.j1o(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.a1n();
    Path($this$createIcon, tmp0_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_7$lambda$lambda_e2xce9($this$Path) {
    $this$Path.d2x(ComposableSingletons$IconsKt$lambda_7$lambda$lambda$lambda_8o13qu);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_7$lambda$lambda$lambda_8o13qu($this$d) {
    $this$d.w2x(16.59, 8.59);
    $this$d.y2x(12, 13.17);
    $this$d.y2x(7.41, 8.59);
    $this$d.y2x(6, 10);
    $this$d.x2x(6, 6, true);
    $this$d.x2x(6, -6, true);
    $this$d.f2y();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.r2h(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_8$lambda_ddg9dj($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-507764776, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-8.<anonymous> (Icons.kt:220)');
    }
    $composer_0.z1m(-554488632);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.d1o();
    var tmp;
    if (false ? true : it === Companion_getInstance().r1h_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-8.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_8$lambda$lambda_w0mn5q;
      $composer_0.j1o(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.a1n();
    Path($this$createIcon, tmp0_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_8$lambda$lambda_w0mn5q($this$Path) {
    $this$Path.d2x(ComposableSingletons$IconsKt$lambda_8$lambda$lambda$lambda_snobxl);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_8$lambda$lambda$lambda_snobxl($this$d) {
    $this$d.w2x(15.41, 7.41);
    $this$d.y2x(14, 6);
    $this$d.x2x(-6, 6, true);
    $this$d.x2x(6, 6, true);
    $this$d.x2x(1.41, -1.41, true);
    $this$d.y2x(10.83, 12);
    $this$d.f2y();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.r2h(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_9$lambda_fg67oo($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-79892645, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-9.<anonymous> (Icons.kt:237)');
    }
    $composer_0.z1m(-1060046800);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.d1o();
    var tmp;
    if (false ? true : it === Companion_getInstance().r1h_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-9.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_9$lambda$lambda_732kql;
      $composer_0.j1o(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.a1n();
    Path($this$createIcon, tmp0_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_9$lambda$lambda_732kql($this$Path) {
    $this$Path.d2x(ComposableSingletons$IconsKt$lambda_9$lambda$lambda$lambda_51qad4);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_9$lambda$lambda$lambda_51qad4($this$d) {
    $this$d.w2x(10, 6);
    $this$d.y2x(8.59, 7.41);
    $this$d.y2x(13.17, 12);
    $this$d.x2x(-4.58, 4.59, true);
    $this$d.y2x(10, 18);
    $this$d.x2x(6, -6, true);
    $this$d.f2y();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.r2h(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_10$lambda_c69byu($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(660186540, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-10.<anonymous> (Icons.kt:254)');
    }
    $composer_0.z1m(923945435);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.d1o();
    var tmp;
    if (false ? true : it === Companion_getInstance().r1h_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-10.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_10$lambda$lambda_rzmap7;
      $composer_0.j1o(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.a1n();
    Path($this$createIcon, tmp0_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_10$lambda$lambda_rzmap7($this$Path) {
    $this$Path.d2x(ComposableSingletons$IconsKt$lambda_10$lambda$lambda$lambda_2vrjey);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_10$lambda$lambda$lambda_2vrjey($this$d) {
    $this$d.w2x(12, 8);
    $this$d.x2x(-6, 6, true);
    $this$d.x2x(1.41, 1.41, true);
    $this$d.y2x(12, 10.83);
    $this$d.x2x(4.59, 4.58, true);
    $this$d.y2x(18, 14);
    $this$d.f2y();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.r2h(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_11$lambda_u188y3($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(2025461450, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-11.<anonymous> (Icons.kt:271)');
    }
    $composer_0.z1m(418387260);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.d1o();
    var tmp;
    if (false ? true : it === Companion_getInstance().r1h_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-11.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_11$lambda$lambda_3228a2;
      $composer_0.j1o(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.a1n();
    Circle($this$createIcon, tmp0_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_11$lambda$lambda_3228a2($this$Circle) {
    $this$Circle.y2w(12);
    $this$Circle.z2w(12);
    $this$Circle.q2y(8);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.r2h(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_12$lambda_17lrvw($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1212129518, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-12.<anonymous> (Icons.kt:282)');
    }
    $composer_0.z1m(-87171131);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.d1o();
    var tmp;
    if (false ? true : it === Companion_getInstance().r1h_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-12.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_12$lambda$lambda_lvhu53;
      $composer_0.j1o(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.a1n();
    Line($this$createIcon, tmp0_group, $composer_0, 56);
    $composer_0.z1m(-87171032);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.d1o();
    var tmp_1;
    if (false ? true : it_0 === Companion_getInstance().r1h_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-12.<anonymous>.<anonymous>' call
      var value_0 = ComposableSingletons$IconsKt$lambda_12$lambda$lambda_lvhu53_0;
      $composer_0.j1o(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.a1n();
    Line($this$createIcon, tmp1_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_12$lambda$lambda_lvhu53($this$Line) {
    $this$Line.t2y(1);
    $this$Line.u2y(23);
    $this$Line.v2y(1);
    $this$Line.w2y(23);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_12$lambda$lambda_lvhu53_0($this$Line) {
    $this$Line.t2y(23);
    $this$Line.u2y(1);
    $this$Line.v2y(1);
    $this$Line.w2y(23);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.r2h(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_13$lambda_rm0p6b($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-769560574, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-13.<anonymous> (Icons.kt:300)');
    }
    $composer_0.z1m(-592729371);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.d1o();
    var tmp;
    if (false ? true : it === Companion_getInstance().r1h_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-13.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_13$lambda$lambda_o825ew;
      $composer_0.j1o(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.a1n();
    Path($this$createIcon, tmp0_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_13$lambda$lambda_o825ew($this$Path) {
    $this$Path.d2x(ComposableSingletons$IconsKt$lambda_13$lambda$lambda$lambda_wyvcbx);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_13$lambda$lambda$lambda_wyvcbx($this$d) {
    $this$d.w2x(11.2857, 6.05714);
    $this$d.y2x(10.08571, 4.85714);
    $this$d.y2x(7.85714, 7.14786);
    $this$d.y2x(7.85714, 1);
    $this$d.y2x(6.14286, 1);
    $this$d.y2x(6.14286, 7.14786);
    $this$d.y2x(3.91429, 4.85714);
    $this$d.y2x(2.71429, 6.05714);
    $this$d.y2x(7, 10.42857);
    $this$d.y2x(11.2857, 6.05714);
    $this$d.f2y();
    $this$d.w2x(1, 11.2857);
    $this$d.y2x(1, 13);
    $this$d.y2x(13, 13);
    $this$d.y2x(13, 11.2857);
    $this$d.y2x(1, 11.2857);
    $this$d.f2y();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.r2h(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_14$lambda_elgvqm($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-725431745, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-14.<anonymous> (Icons.kt:327)');
    }
    var tmp0_iterator = listOf([3, 12, 21]).k();
    while (tmp0_iterator.x()) {
      var y = tmp0_iterator.z();
      $composer_0.z1m(-1098287123);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.w1n(y);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.d1o();
      var tmp;
      if (invalid ? true : it === Companion_getInstance().r1h_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-14.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$IconsKt$lambda_14$lambda$lambda_phx09(y);
        $composer_0.j1o(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.a1n();
      Line($this$createIcon, tmp0_group, $composer_0, 8);
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_14$lambda$lambda_phx09($y) {
    return function ($this$Line) {
      $this$Line.t2y(0);
      $this$Line.u2y(23);
      $this$Line.v2y($y);
      $this$Line.w2y($y);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_14($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.r2h(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_15$lambda_e85lbl($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-2035566234, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-15.<anonymous> (Icons.kt:346)');
    }
    $composer_0.z1m(-1603845372);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.d1o();
    var tmp;
    if (false ? true : it === Companion_getInstance().r1h_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-15.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_15$lambda$lambda_pn1zfe;
      $composer_0.j1o(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.a1n();
    Line($this$createIcon, tmp0_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_15$lambda$lambda_pn1zfe($this$Line) {
    $this$Line.t2y(3);
    $this$Line.u2y(21);
    $this$Line.v2y(12);
    $this$Line.w2y(12);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_15($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.r2h(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_16$lambda_rzbzlc($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1115382124, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-16.<anonymous> (Icons.kt:358)');
    }
    $composer_0.z1m(-2109403744);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.d1o();
    var tmp;
    if (false ? true : it === Companion_getInstance().r1h_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-16.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_16$lambda$lambda_kgi04l;
      $composer_0.j1o(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.a1n();
    Line($this$createIcon, tmp0_group, $composer_0, 56);
    $composer_0.z1m(-2109403644);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.d1o();
    var tmp_1;
    if (false ? true : it_0 === Companion_getInstance().r1h_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-16.<anonymous>.<anonymous>' call
      var value_0 = ComposableSingletons$IconsKt$lambda_16$lambda$lambda_kgi04l_0;
      $composer_0.j1o(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.a1n();
    Line($this$createIcon, tmp1_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_16$lambda$lambda_kgi04l($this$Line) {
    $this$Line.t2y(3);
    $this$Line.u2y(21);
    $this$Line.v2y(12);
    $this$Line.w2y(12);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_16$lambda$lambda_kgi04l_0($this$Line) {
    $this$Line.t2y(12);
    $this$Line.u2y(12);
    $this$Line.v2y(3);
    $this$Line.w2y(21);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_16($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.r2h(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_17$lambda_uahgv($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(862240855, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-17.<anonymous> (Icons.kt:376)');
    }
    $composer_0.z1m(1680005279);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.d1o();
    var tmp;
    if (false ? true : it === Companion_getInstance().r1h_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-17.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_17$lambda$lambda_4h22ak;
      $composer_0.j1o(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.a1n();
    Rect($this$createIcon, tmp0_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_17$lambda$lambda_4h22ak($this$Rect) {
    $this$Rect.n2x(4);
    $this$Rect.o2x(4);
    $this$Rect.q2x(16);
    $this$Rect.p2x(16);
    $this$Rect.z2y(2);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_17($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.r2h(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_18$lambda_tnwyj2($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(2069599163, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-18.<anonymous> (Icons.kt:389)');
    }
    $composer_0.z1m(1174446950);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.d1o();
    var tmp;
    if (false ? true : it === Companion_getInstance().r1h_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-18.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_18$lambda$lambda_tem4pp;
      $composer_0.j1o(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.a1n();
    Path($this$createIcon, tmp0_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_18$lambda$lambda_tem4pp($this$Path) {
    $this$Path.d2x(ComposableSingletons$IconsKt$lambda_18$lambda$lambda$lambda_blfq3y);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_18$lambda$lambda$lambda_blfq3y($this$d) {
    $this$d.w2x(175, 106.583);
    $this$d.e2y(75, 75, 0, 1, 1, 93.417, 25);
    $this$d.e2y(58.333, 58.333, 0, 0, 0, 175, 106.583);
    $this$d.f2y();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_18($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.r2h(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda_cjkmdv($this$Group, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(747380469, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-19.<anonymous> (Icons.kt:408)');
    }
    $composer_0.z1m(668888871);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.d1o();
    var tmp;
    if (false ? true : it === Companion_getInstance().r1h_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-19.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua;
      $composer_0.j1o(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.a1n();
    Circle($this$Group, tmp0_group, $composer_0, 56);
    $composer_0.z1m(668888971);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.d1o();
    var tmp_1;
    if (false ? true : it_0 === Companion_getInstance().r1h_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-19.<anonymous>.<anonymous>' call
      var value_0 = ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_0;
      $composer_0.j1o(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.a1n();
    Path($this$Group, tmp1_group, $composer_0, 56);
    $composer_0.z1m(668889120);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_1 = $composer_0.d1o();
    var tmp_3;
    if (false ? true : it_1 === Companion_getInstance().r1h_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-19.<anonymous>.<anonymous>' call
      var value_1 = ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_1;
      $composer_0.j1o(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = it_1;
    }
    var tmp_4 = tmp_3;
    var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
    $composer_0.a1n();
    Path($this$Group, tmp2_group, $composer_0, 56);
    $composer_0.z1m(668889270);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_2 = $composer_0.d1o();
    var tmp_5;
    if (false ? true : it_2 === Companion_getInstance().r1h_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-19.<anonymous>.<anonymous>' call
      var value_2 = ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_2;
      $composer_0.j1o(value_2);
      tmp_5 = value_2;
    } else {
      tmp_5 = it_2;
    }
    var tmp_6 = tmp_5;
    var tmp3_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
    $composer_0.a1n();
    Path($this$Group, tmp3_group, $composer_0, 56);
    $composer_0.z1m(668889425);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_3 = $composer_0.d1o();
    var tmp_7;
    if (false ? true : it_3 === Companion_getInstance().r1h_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-19.<anonymous>.<anonymous>' call
      var value_3 = ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_3;
      $composer_0.j1o(value_3);
      tmp_7 = value_3;
    } else {
      tmp_7 = it_3;
    }
    var tmp_8 = tmp_7;
    var tmp4_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
    $composer_0.a1n();
    Path($this$Group, tmp4_group, $composer_0, 56);
    $composer_0.z1m(668889582);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_4 = $composer_0.d1o();
    var tmp_9;
    if (false ? true : it_4 === Companion_getInstance().r1h_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-19.<anonymous>.<anonymous>' call
      var value_4 = ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_4;
      $composer_0.j1o(value_4);
      tmp_9 = value_4;
    } else {
      tmp_9 = it_4;
    }
    var tmp_10 = tmp_9;
    var tmp5_group = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
    $composer_0.a1n();
    Path($this$Group, tmp5_group, $composer_0, 56);
    $composer_0.z1m(668889733);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_5 = $composer_0.d1o();
    var tmp_11;
    if (false ? true : it_5 === Companion_getInstance().r1h_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-19.<anonymous>.<anonymous>' call
      var value_5 = ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_5;
      $composer_0.j1o(value_5);
      tmp_11 = value_5;
    } else {
      tmp_11 = it_5;
    }
    var tmp_12 = tmp_11;
    var tmp6_group = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
    $composer_0.a1n();
    Path($this$Group, tmp6_group, $composer_0, 56);
    $composer_0.z1m(668889885);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_6 = $composer_0.d1o();
    var tmp_13;
    if (false ? true : it_6 === Companion_getInstance().r1h_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-19.<anonymous>.<anonymous>' call
      var value_6 = ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_6;
      $composer_0.j1o(value_6);
      tmp_13 = value_6;
    } else {
      tmp_13 = it_6;
    }
    var tmp_14 = tmp_13;
    var tmp7_group = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
    $composer_0.a1n();
    Path($this$Group, tmp7_group, $composer_0, 56);
    $composer_0.z1m(668890042);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_7 = $composer_0.d1o();
    var tmp_15;
    if (false ? true : it_7 === Companion_getInstance().r1h_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-19.<anonymous>.<anonymous>' call
      var value_7 = ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_7;
      $composer_0.j1o(value_7);
      tmp_15 = value_7;
    } else {
      tmp_15 = it_7;
    }
    var tmp_16 = tmp_15;
    var tmp8_group = (tmp_16 == null ? true : !(tmp_16 == null)) ? tmp_16 : THROW_CCE();
    $composer_0.a1n();
    Path($this$Group, tmp8_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua($this$Circle) {
    $this$Circle.y2w(12);
    $this$Circle.z2w(12);
    $this$Circle.q2y(5);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_0($this$Path) {
    $this$Path.d2x(ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r($this$d) {
    $this$d.w2x(12, 1);
    $this$d.z2x(2, true);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_1($this$Path) {
    $this$Path.d2x(ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_0);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_0($this$d) {
    $this$d.w2x(12, 21);
    $this$d.z2x(2, true);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_2($this$Path) {
    $this$Path.d2x(ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_1);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_1($this$d) {
    $this$d.w2x(4.22, 4.22);
    $this$d.x2x(1.42, 1.42, true);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_3($this$Path) {
    $this$Path.d2x(ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_2);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_2($this$d) {
    $this$d.w2x(18.36, 18.36);
    $this$d.x2x(1.42, 1.42, true);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_4($this$Path) {
    $this$Path.d2x(ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_3);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_3($this$d) {
    $this$d.w2x(1, 12);
    $this$d.b2y(2, true);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_5($this$Path) {
    $this$Path.d2x(ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_4);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_4($this$d) {
    $this$d.w2x(21, 12);
    $this$d.b2y(2, true);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_6($this$Path) {
    $this$Path.d2x(ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_5);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_5($this$d) {
    $this$d.w2x(4.22, 19.78);
    $this$d.x2x(1.42, -1.42, true);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_7($this$Path) {
    $this$Path.d2x(ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_6);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_6($this$d) {
    $this$d.w2x(18.36, 5.64);
    $this$d.x2x(1.42, -1.42, true);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_19($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.r2h(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_20$lambda_hpuotl($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1299612222, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-20.<anonymous> (Icons.kt:404)');
    }
    $composer_0.z1m(-1863466423);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.d1o();
    var tmp;
    if (false ? true : it === Companion_getInstance().r1h_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-20.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_20$lambda$lambda_ylj8l0;
      $composer_0.j1o(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.a1n();
    Group($this$createIcon, tmp0_group, ComposableSingletons$IconsKt_getInstance().n3j_1, $composer_0, 440, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_20$lambda$lambda_ylj8l0($this$Group) {
    $this$Group.m2x(SVGStrokeLineJoin_Round_getInstance());
    $this$Group.l2x(SVGStrokeLineCap_Round_getInstance());
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt() {
    ComposableSingletons$IconsKt_instance = this;
    var tmp = this;
    tmp.v3i_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(187923078, false, ComposableSingletons$IconsKt$lambda_1$lambda_21hevk));
    var tmp_0 = this;
    tmp_0.w3i_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(465018625, false, ComposableSingletons$IconsKt$lambda_2$lambda_qs526n));
    var tmp_1 = this;
    tmp_1.x3i_1 = ComposableLambda$invoke$ref_2(composableLambdaInstance(1093309942, false, ComposableSingletons$IconsKt$lambda_3$lambda_ffciqa));
    var tmp_2 = this;
    tmp_2.y3i_1 = ComposableLambda$invoke$ref_3(composableLambdaInstance(353353466, false, ComposableSingletons$IconsKt$lambda_4$lambda_de9ybx));
    var tmp_3 = this;
    tmp_3.z3i_1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(14879965, false, ComposableSingletons$IconsKt$lambda_5$lambda_st7ml0));
    var tmp_4 = this;
    tmp_4.a3j_1 = ComposableLambda$invoke$ref_5(composableLambdaInstance(343641086, false, ComposableSingletons$IconsKt$lambda_6$lambda_euh7));
    var tmp_5 = this;
    tmp_5.b3j_1 = ComposableLambda$invoke$ref_6(composableLambdaInstance(-1021140685, false, ComposableSingletons$IconsKt$lambda_7$lambda_su1bje));
    var tmp_6 = this;
    tmp_6.c3j_1 = ComposableLambda$invoke$ref_7(composableLambdaInstance(-507764776, false, ComposableSingletons$IconsKt$lambda_8$lambda_ddg9dj));
    var tmp_7 = this;
    tmp_7.d3j_1 = ComposableLambda$invoke$ref_8(composableLambdaInstance(-79892645, false, ComposableSingletons$IconsKt$lambda_9$lambda_fg67oo));
    var tmp_8 = this;
    tmp_8.e3j_1 = ComposableLambda$invoke$ref_9(composableLambdaInstance(660186540, false, ComposableSingletons$IconsKt$lambda_10$lambda_c69byu));
    var tmp_9 = this;
    tmp_9.f3j_1 = ComposableLambda$invoke$ref_10(composableLambdaInstance(2025461450, false, ComposableSingletons$IconsKt$lambda_11$lambda_u188y3));
    var tmp_10 = this;
    tmp_10.g3j_1 = ComposableLambda$invoke$ref_11(composableLambdaInstance(1212129518, false, ComposableSingletons$IconsKt$lambda_12$lambda_17lrvw));
    var tmp_11 = this;
    tmp_11.h3j_1 = ComposableLambda$invoke$ref_12(composableLambdaInstance(-769560574, false, ComposableSingletons$IconsKt$lambda_13$lambda_rm0p6b));
    var tmp_12 = this;
    tmp_12.i3j_1 = ComposableLambda$invoke$ref_13(composableLambdaInstance(-725431745, false, ComposableSingletons$IconsKt$lambda_14$lambda_elgvqm));
    var tmp_13 = this;
    tmp_13.j3j_1 = ComposableLambda$invoke$ref_14(composableLambdaInstance(-2035566234, false, ComposableSingletons$IconsKt$lambda_15$lambda_e85lbl));
    var tmp_14 = this;
    tmp_14.k3j_1 = ComposableLambda$invoke$ref_15(composableLambdaInstance(-1115382124, false, ComposableSingletons$IconsKt$lambda_16$lambda_rzbzlc));
    var tmp_15 = this;
    tmp_15.l3j_1 = ComposableLambda$invoke$ref_16(composableLambdaInstance(862240855, false, ComposableSingletons$IconsKt$lambda_17$lambda_uahgv));
    var tmp_16 = this;
    tmp_16.m3j_1 = ComposableLambda$invoke$ref_17(composableLambdaInstance(2069599163, false, ComposableSingletons$IconsKt$lambda_18$lambda_tnwyj2));
    var tmp_17 = this;
    tmp_17.n3j_1 = ComposableLambda$invoke$ref_18(composableLambdaInstance(747380469, false, ComposableSingletons$IconsKt$lambda_19$lambda_cjkmdv));
    var tmp_18 = this;
    tmp_18.o3j_1 = ComposableLambda$invoke$ref_19(composableLambdaInstance(-1299612222, false, ComposableSingletons$IconsKt$lambda_20$lambda_hpuotl));
  }
  var ComposableSingletons$IconsKt_instance;
  function ComposableSingletons$IconsKt_getInstance() {
    if (ComposableSingletons$IconsKt_instance == null)
      new ComposableSingletons$IconsKt();
    return ComposableSingletons$IconsKt_instance;
  }
  function MoonIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      MoonIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function SunIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      SunIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function HamburgerIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      HamburgerIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function CloseIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      CloseIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function createIcon$lambda($width, $viewBox, $renderStyle, $attrs) {
    return function ($this$Svg) {
      var tmp0_safe_receiver = $width._v;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        $this$Svg.t2w(tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $viewBox._v;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        $this$Svg.u2w(tmp1_safe_receiver.i2y_1, tmp1_safe_receiver.j2y_1, tmp1_safe_receiver.k2y_1, tmp1_safe_receiver.l2y_1);
      }
      var tmp2_safe_receiver = $renderStyle._v;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.silk.components.icons.createIcon.<anonymous>.<anonymous>' call
        var tmp;
        if (tmp2_safe_receiver instanceof Fill) {
          $this$Svg.r2w(SVGFillType_CurrentColor_getInstance());
          tmp = $this$Svg.p2w(SVGStrokeType_None_getInstance());
        } else {
          if (tmp2_safe_receiver instanceof Stroke) {
            $this$Svg.p2w(SVGStrokeType_CurrentColor_getInstance());
            $this$Svg.r2w(SVGFillType_None_getInstance());
            var tmp1_safe_receiver_0 = tmp2_safe_receiver.p3j_1;
            var tmp_0;
            if (tmp1_safe_receiver_0 == null) {
              tmp_0 = null;
            } else {
              // Inline function 'kotlin.let' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'com.varabyte.kobweb.silk.components.icons.createIcon.<anonymous>.<anonymous>.<anonymous>' call
              tmp_0 = $this$Svg.q2w(tmp1_safe_receiver_0);
            }
            tmp = tmp_0;
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
      var tmp3_safe_receiver = $attrs._v;
      if (tmp3_safe_receiver == null)
        null;
      else
        tmp3_safe_receiver($this$Svg);
      return Unit_instance;
    };
  }
  function createIcon$lambda_0($viewBox, $width, $renderStyle, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      createIcon($viewBox._v, $width._v, $renderStyle._v, $attrs._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function get_HorizontalDividerStyle() {
    _init_properties_Divider_kt__8b5dnr();
    return HorizontalDividerStyle$delegate.u2u(null, HorizontalDividerStyle$factory());
  }
  var HorizontalDividerStyle$delegate;
  var DividerStyle;
  function get_VerticalDividerStyle() {
    _init_properties_Divider_kt__8b5dnr();
    return VerticalDividerStyle$delegate.u2u(null, VerticalDividerStyle$factory());
  }
  var VerticalDividerStyle$delegate;
  function DividerVars() {
    DividerVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().o2u();
    tmp.q3j_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_percent(90);
    tmp_0.r3j_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
  }
  protoOf(DividerVars).v3e = function () {
    return this.q3j_1.u2u(this, Color$factory_1());
  };
  protoOf(DividerVars).s3j = function () {
    return this.r3j_1.u2u(this, Length$factory());
  };
  var DividerVars_instance;
  function DividerVars_getInstance() {
    if (DividerVars_instance == null)
      new DividerVars();
    return DividerVars_instance;
  }
  function HorizontalDivider(modifier, variant, $composer, $changed, $default) {
    _init_properties_Divider_kt__8b5dnr();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.r1o(385015105);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 2;
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.s1e(variant_0._v) ? 32 : 16);
    if (!(($default & 1) === 1) ? true : !(($dirty & 91) === 18) ? true : !$composer_0.u1m()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 2) === 0)) {
        variant_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(385015105, $dirty, -1, 'com.varabyte.kobweb.silk.components.layout.HorizontalDivider (Divider.kt:51)');
      }
      Hr(toAttrs(toModifier(get_HorizontalDividerStyle(), [variant_0._v], $composer_0, 0).e34(modifier_0._v)), $composer_0, 0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l1h();
    }
    var tmp0_safe_receiver = $composer_0.s1o();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.p1t(HorizontalDivider$lambda(modifier_0, variant_0, $changed, $default));
    }
  }
  function HorizontalDividerStyle$delegate$lambda($this$base) {
    _init_properties_Divider_kt__8b5dnr();
    var tmp = Companion_instance;
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return width(borderTop(tmp, tmp_0, 'solid', DividerVars_getInstance().v3e().o2u()), DividerVars_getInstance().s3j().o2u());
  }
  function VerticalDividerStyle$delegate$lambda($this$base) {
    _init_properties_Divider_kt__8b5dnr();
    var tmp = Companion_instance;
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return height(borderLeft(tmp, tmp_0, 'solid', DividerVars_getInstance().v3e().o2u()), DividerVars_getInstance().s3j().o2u());
  }
  function HorizontalDivider$lambda($modifier, $variant, $$changed, $$default) {
    return function ($composer, $force) {
      HorizontalDivider($modifier._v, $variant._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function HorizontalDividerStyle$factory() {
    return getPropertyCallableRef('HorizontalDividerStyle', 0, KProperty0, function () {
      return get_HorizontalDividerStyle();
    }, null);
  }
  function VerticalDividerStyle$factory() {
    return getPropertyCallableRef('VerticalDividerStyle', 0, KProperty0, function () {
      return get_VerticalDividerStyle();
    }, null);
  }
  function Color$factory_1() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.v3e();
    }, null);
  }
  function Length$factory() {
    return getPropertyCallableRef('Length', 1, KProperty1, function (receiver) {
      return receiver.s3j();
    }, null);
  }
  var properties_initialized_Divider_kt_k1kxcn;
  function _init_properties_Divider_kt__8b5dnr() {
    if (!properties_initialized_Divider_kt_k1kxcn) {
      properties_initialized_Divider_kt_k1kxcn = true;
      var tmp = Companion_instance_5;
      HorizontalDividerStyle$delegate = base(tmp, VOID, 'silk', HorizontalDividerStyle$delegate$lambda);
      DividerStyle = get_HorizontalDividerStyle();
      var tmp_0 = Companion_instance_5;
      VerticalDividerStyle$delegate = base(tmp_0, VOID, 'silk', VerticalDividerStyle$delegate$lambda);
    }
  }
  function get_columnVariables() {
    _init_properties_SimpleGrid_kt__tvipdk();
    return columnVariables;
  }
  var columnVariables;
  function get_SimpleGridStyle() {
    _init_properties_SimpleGrid_kt__tvipdk();
    return SimpleGridStyle$delegate.u2u(null, SimpleGridStyle$factory());
  }
  var SimpleGridStyle$delegate;
  function SimpleGridStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_SimpleGrid_kt__tvipdk();
    $this$ComponentStyle.d38(SimpleGridStyle$delegate$lambda$lambda);
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = get_columnVariables().f2().k();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.components.layout.SimpleGridStyle$delegate.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var breakpoint = element.i2();
      // Inline function 'kotlin.collections.component2' call
      var variable = element.j2();
      $this$ComponentStyle.y36(breakpoint, SimpleGridStyle$delegate$lambda$lambda_0(variable));
    }
    return Unit_instance;
  }
  function SimpleGridStyle$delegate$lambda$lambda() {
    _init_properties_SimpleGrid_kt__tvipdk();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Grid' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'grid');
  }
  function SimpleGridStyle$delegate$lambda$lambda$lambda$lambda($this$repeat) {
    _init_properties_SimpleGrid_kt__tvipdk();
    $this$repeat.x2s(get_fr(1));
    return Unit_instance;
  }
  function SimpleGridStyle$delegate$lambda$lambda$lambda($variable) {
    return function ($this$gridTemplateColumns) {
      var tmp = $variable.o2u();
      $this$gridTemplateColumns.s2s(tmp, SimpleGridStyle$delegate$lambda$lambda$lambda$lambda);
      return Unit_instance;
    };
  }
  function SimpleGridStyle$delegate$lambda$lambda_0($variable) {
    return function () {
      var tmp = Companion_instance;
      return gridTemplateColumns(tmp, SimpleGridStyle$delegate$lambda$lambda$lambda($variable));
    };
  }
  function SimpleGridStyle$factory() {
    return getPropertyCallableRef('SimpleGridStyle', 0, KProperty0, function () {
      return get_SimpleGridStyle();
    }, null);
  }
  var properties_initialized_SimpleGrid_kt_fum19i;
  function _init_properties_SimpleGrid_kt__tvipdk() {
    if (!properties_initialized_SimpleGrid_kt_fum19i) {
      properties_initialized_SimpleGrid_kt_fum19i = true;
      // Inline function 'kotlin.collections.associateWith' call
      var this_0 = get_entries();
      var result = LinkedHashMap_init_$Create$(coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16));
      // Inline function 'kotlin.collections.associateWithTo' call
      var tmp0_iterator = this_0.k();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        // Inline function 'com.varabyte.kobweb.silk.components.layout.columnVariables.<anonymous>' call
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = element.t9_1.toLowerCase();
        var tmp$ret$2 = new NumberValue('simple-grid-col-count-' + tmp$ret$1, VOID, 'silk');
        result.g2(element, tmp$ret$2);
      }
      columnVariables = result;
      SimpleGridStyle$delegate = ComponentStyle(VOID, 'silk', SimpleGridStyle$delegate$lambda);
    }
  }
  function get_SurfaceStyle() {
    _init_properties_Surface_kt__8o7unv();
    return SurfaceStyle$delegate.u2u(null, SurfaceStyle$factory());
  }
  var SurfaceStyle$delegate;
  function SurfaceVars() {
    SurfaceVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BackgroundColorVar().o2u();
    tmp.t3j_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_ColorVar().o2u();
    tmp_0.u3j_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
  }
  protoOf(SurfaceVars).x3e = function () {
    return this.t3j_1.u2u(this, BackgroundColor$factory_0());
  };
  protoOf(SurfaceVars).v3e = function () {
    return this.u3j_1.u2u(this, Color$factory_2());
  };
  var SurfaceVars_instance;
  function SurfaceVars_getInstance() {
    if (SurfaceVars_instance == null)
      new SurfaceVars();
    return SurfaceVars_instance;
  }
  function Surface(modifier, variant, colorModeOverride, contentAlignment, ref, content, $composer, $changed, $default) {
    _init_properties_Surface_kt__8o7unv();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var colorModeOverride_0 = {_v: colorModeOverride};
    var contentAlignment_0 = {_v: contentAlignment};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.r1o(-1707116076);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 2;
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.s1e(variant_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.s1e(colorModeOverride_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 1024;
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.s1e(ref_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.u1n(content) ? 131072 : 65536);
    if (!(($default & 9) === 9) ? true : !(($dirty & 374491) === 74898) ? true : !$composer_0.u1m()) {
      $composer_0.b1n();
      if (($changed & 1) === 0 ? true : $composer_0.f1n()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 2) === 0)) {
          variant_0._v = null;
        }
        if (!(($default & 4) === 0)) {
          colorModeOverride_0._v = null;
        }
        if (!(($default & 8) === 0)) {
          contentAlignment_0._v = TopStart_instance;
          $dirty = $dirty & -7169;
        }
        if (!(($default & 16) === 0)) {
          ref_0._v = null;
        }
      } else {
        $composer_0.l1h();
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
      }
      $composer_0.c1n();
      if (isTraceInProgress()) {
        traceEventStart(-1707116076, $dirty, -1, 'com.varabyte.kobweb.silk.components.layout.Surface (Surface.kt:55)');
      }
      $composer_0.z1m(-1164412473);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.d1o();
      var tmp;
      if (false ? true : it === Companion_getInstance().r1h_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>' call
        var value = mutableStateOf(null);
        this_0.j1o(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.a1n();
      var surfaceElement$delegate = tmp0_group;
      var tmp_1 = toModifier(get_SurfaceStyle(), [variant_0._v], $composer_0, 0).e34(modifier_0._v);
      var tmp_2 = contentAlignment_0._v;
      var tmp_3 = refScope(Surface$lambda_1(ref_0, surfaceElement$delegate));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>' call
      var tmp_4 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_4, 1158565978, true, Surface$lambda_2(colorModeOverride_0, content, surfaceElement$delegate));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.z1m(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.s1e(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.d1o();
      var tmp_5;
      if (invalid ? true : it_0 === Companion_getInstance().r1h_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_21(dispatchReceiver);
        $composer_1.j1o(value_0);
        tmp_5 = value_0;
      } else {
        tmp_5 = it_0;
      }
      var tmp_6 = tmp_5;
      var tmp0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_1.a1n();
      Box(tmp_1, tmp_2, tmp_3, tmp0, $composer_0, 3656, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l1h();
    }
    var tmp1_safe_receiver = $composer_0.s1o();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.p1t(Surface$lambda_3(modifier_0, variant_0, colorModeOverride_0, contentAlignment_0, ref_0, content, $changed, $default));
    }
  }
  function Surface$lambda($surfaceElement$delegate) {
    _init_properties_Surface_kt__8o7unv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('surfaceElement', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $surfaceElement$delegate.j2();
  }
  function Surface$lambda_0($surfaceElement$delegate, value) {
    _init_properties_Surface_kt__8o7unv();
    getLocalDelegateReference('surfaceElement', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $surfaceElement$delegate.lz(value);
    return Unit_instance;
  }
  function SurfaceStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Surface_kt__8o7unv();
    $this$ComponentStyle.d38(SurfaceStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function SurfaceStyle$delegate$lambda$lambda() {
    _init_properties_Surface_kt__8o7unv();
    return color(backgroundColor(Companion_instance, SurfaceVars_getInstance().x3e().o2u()), SurfaceVars_getInstance().v3e().o2u());
  }
  function Surface$lambda$lambda($surfaceElement$delegate) {
    return function (it) {
      Surface$lambda_0($surfaceElement$delegate, it);
      return Unit_instance;
    };
  }
  function Surface$lambda_1($ref, $surfaceElement$delegate) {
    return function ($this$refScope) {
      $this$refScope.c2w($ref._v);
      $this$refScope.a2w([], Surface$lambda$lambda($surfaceElement$delegate));
      return Unit_instance;
    };
  }
  function Surface$lambda$lambda$slambda($surfaceElement, $currColorMode, resultContinuation) {
    this.d3k_1 = $surfaceElement;
    this.e3k_1 = $currColorMode;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Surface$lambda$lambda$slambda).k11 = function ($this$LaunchedEffect, $completion) {
    var tmp = this.l11($this$LaunchedEffect, $completion);
    tmp.bc_1 = Unit_instance;
    tmp.cc_1 = null;
    return tmp.lc();
  };
  protoOf(Surface$lambda$lambda$slambda).xc = function (p1, $completion) {
    return this.k11((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Surface$lambda$lambda$slambda).lc = function () {
    var suspendResult = this.bc_1;
    $sm: do
      try {
        var tmp = this.zb_1;
        if (tmp === 0) {
          this.ac_1 = 1;
          setSilkWidgetVariables(this.d3k_1, this.e3k_1);
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.cc_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(Surface$lambda$lambda$slambda).l11 = function ($this$LaunchedEffect, completion) {
    var i = new Surface$lambda$lambda$slambda(this.d3k_1, this.e3k_1, completion);
    i.f3k_1 = $this$LaunchedEffect;
    return i;
  };
  function Surface$lambda$lambda$slambda_0($surfaceElement, $currColorMode, resultContinuation) {
    var i = new Surface$lambda$lambda$slambda($surfaceElement, $currColorMode, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.k11($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Surface$lambda$lambda_0($content, $this_Box, $surfaceElement) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.u1m()) {
        if (isTraceInProgress()) {
          traceEventStart(-314059711, $changed, -1, 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>.<anonymous>.<anonymous> (Surface.kt:68)');
        }
        var currColorMode = Companion_instance_6.u36($composer_0, 8);
        LaunchedEffect(currColorMode, Surface$lambda$lambda$slambda_0($surfaceElement, currColorMode, null), $composer_0, 64);
        $content($this_Box, $composer_0, 8);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.l1h();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_20($boundThis) {
    return function (p0, p1) {
      return $boundThis.s1m(p0, p1);
    };
  }
  function Surface$lambda_2($colorModeOverride, $content, $surfaceElement$delegate) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1158565978, $changed, -1, 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous> (Surface.kt:65)');
      }
      if (!($colorModeOverride._v == null)) {
        $composer_0.z1m(321050292);
        var tmp0_safe_receiver = Surface$lambda($surfaceElement$delegate);
        var tmp;
        if (tmp0_safe_receiver == null) {
          tmp = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp_0 = $colorModeOverride._v.k3b();
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_1 = $composer_0;
          var dispatchReceiver = composableLambda(tmp_1, -314059711, true, Surface$lambda$lambda_0($content, $this$Box, tmp0_safe_receiver));
          // Inline function 'androidx.compose.runtime.remember' call
          var $composer_1 = $composer_0;
          $composer_1.z1m(1157296644);
          sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid = $composer_1.s1e(dispatchReceiver);
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it = $composer_1.d1o();
          var tmp_2;
          if (invalid ? true : it === Companion_getInstance().r1h_1) {
            // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value = ComposableLambda$invoke$ref_20(dispatchReceiver);
            $composer_1.j1o(value);
            tmp_2 = value;
          } else {
            tmp_2 = it;
          }
          var tmp_3 = tmp_2;
          var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
          $composer_1.a1n();
          CompositionLocalProvider(tmp_0, tmp0, $composer_0, 48);
          tmp = Unit_instance;
        }
        $composer_0.a1n();
      } else {
        $composer_0.z1m(321050701);
        $content($this$Box, $composer_0, 8);
        $composer_0.a1n();
      }
      var tmp_4;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_4 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_21($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.r2h(p0, p1, p2);
    };
  }
  function Surface$lambda_3($modifier, $variant, $colorModeOverride, $contentAlignment, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Surface($modifier._v, $variant._v, $colorModeOverride._v, $contentAlignment._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function SurfaceStyle$factory() {
    return getPropertyCallableRef('SurfaceStyle', 0, KProperty0, function () {
      return get_SurfaceStyle();
    }, null);
  }
  function BackgroundColor$factory_0() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.x3e();
    }, null);
  }
  function Color$factory_2() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.v3e();
    }, null);
  }
  var properties_initialized_Surface_kt_k203pf;
  function _init_properties_Surface_kt__8o7unv() {
    if (!properties_initialized_Surface_kt_k203pf) {
      properties_initialized_Surface_kt_k203pf = true;
      SurfaceStyle$delegate = ComponentStyle(VOID, 'silk', SurfaceStyle$delegate$lambda);
    }
  }
  function Companion() {
  }
  var Companion_instance_15;
  function Companion_getInstance_0() {
    return Companion_instance_15;
  }
  function KeepPopupOpenStrategy(defaultValue) {
    defaultValue = defaultValue === VOID ? false : defaultValue;
    this.g3k_1 = defaultValue;
    this.h3k_1 = MutableStateFlow(this.g3k_1);
    this.i3k_1 = false;
    this.j3k_1 = asStateFlow(this.h3k_1);
  }
  protoOf(KeepPopupOpenStrategy).k3k = function (popupElement) {
    this.h3k_1.lz(this.g3k_1);
    this.l3k(popupElement);
    this.i3k_1 = true;
  };
  protoOf(KeepPopupOpenStrategy).l3k = function (popupElement) {
    return Unit_instance;
  };
  protoOf(KeepPopupOpenStrategy).m3k = function (shouldKeepOpen) {
    if (this.i3k_1) {
      this.h3k_1.lz(shouldKeepOpen);
    }
  };
  protoOf(KeepPopupOpenStrategy).v1z = function () {
    this.i3k_1 = false;
    this.n3k();
    this.h3k_1.lz(this.g3k_1);
  };
  protoOf(KeepPopupOpenStrategy).n3k = function () {
    return Unit_instance;
  };
  function never(_this__u8e3s4) {
    return new never$1();
  }
  function plus(_this__u8e3s4, other) {
    return combine(Companion_instance_15, [_this__u8e3s4, other]);
  }
  function onFocus(_this__u8e3s4) {
    return new onFocus$1();
  }
  function onHover(_this__u8e3s4) {
    return new onHover$1();
  }
  function get_shouldKeepOpen(_this__u8e3s4) {
    return _this__u8e3s4.j3k_1.j2();
  }
  function combine(_this__u8e3s4, strategies) {
    return new combine$1(strategies);
  }
  function never$1() {
    KeepPopupOpenStrategy.call(this);
  }
  function onFocus$o$onInit$lambda(this$0) {
    return function (it) {
      this$0.m3k(true);
      return Unit_instance;
    };
  }
  function onFocus$o$onInit$lambda_0(this$0, $popupElement) {
    return function (evt) {
      var focusEvent = evt instanceof FocusEvent ? evt : THROW_CCE();
      var tmp = focusEvent.relatedTarget;
      var newFocus = tmp instanceof Node ? tmp : null;
      this$0.m3k(!(newFocus == null) ? $popupElement.contains(newFocus) : false);
      return Unit_instance;
    };
  }
  function onFocus$1() {
    KeepPopupOpenStrategy.call(this);
    this.s3k_1 = null;
  }
  protoOf(onFocus$1).l3k = function (popupElement) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new EventListenerManager(popupElement);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.components.overlay.<no name provided>.onInit.<anonymous>' call
    this_0.s17('focusin', onFocus$o$onInit$lambda(this));
    this_0.s17('focusout', onFocus$o$onInit$lambda_0(this, popupElement));
    tmp.s3k_1 = this_0;
  };
  protoOf(onFocus$1).n3k = function () {
    ensureNotNull(this.s3k_1).t17();
    this.s3k_1 = null;
  };
  function onHover$o$onInit$lambda(this$0) {
    return function (it) {
      this$0.m3k(true);
      return Unit_instance;
    };
  }
  function onHover$o$onInit$lambda_0(this$0) {
    return function (it) {
      this$0.m3k(false);
      return Unit_instance;
    };
  }
  function onHover$1() {
    KeepPopupOpenStrategy.call(this);
    this.x3k_1 = null;
  }
  protoOf(onHover$1).l3k = function (popupElement) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new EventListenerManager(popupElement);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.components.overlay.<no name provided>.onInit.<anonymous>' call
    this_0.s17('mouseenter', onHover$o$onInit$lambda(this));
    this_0.s17('mouseleave', onHover$o$onInit$lambda_0(this));
    tmp.x3k_1 = this_0;
  };
  protoOf(onHover$1).n3k = function () {
    ensureNotNull(this.x3k_1).t17();
    this.x3k_1 = null;
  };
  function combine$o$slambda($strategies, this$0, resultContinuation) {
    this.g3l_1 = $strategies;
    this.h3l_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(combine$o$slambda).j3l = function (it, $completion) {
    var tmp = this.k3l(it, $completion);
    tmp.bc_1 = Unit_instance;
    tmp.cc_1 = null;
    return tmp.lc();
  };
  protoOf(combine$o$slambda).xc = function (p1, $completion) {
    return this.j3l((!(p1 == null) ? typeof p1 === 'boolean' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(combine$o$slambda).lc = function () {
    var suspendResult = this.bc_1;
    $sm: do
      try {
        var tmp = this.zb_1;
        if (tmp === 0) {
          this.ac_1 = 1;
          var tmp$ret$0;
          l$ret$1: do {
            var indexedObject = this.g3l_1;
            var inductionVariable = 0;
            var last = indexedObject.length;
            while (inductionVariable < last) {
              var element = indexedObject[inductionVariable];
              inductionVariable = inductionVariable + 1 | 0;
              if (get_shouldKeepOpen(element)) {
                tmp$ret$0 = true;
                break l$ret$1;
              }
            }
            tmp$ret$0 = false;
          }
           while (false);
          var anyKeepOpen = tmp$ret$0;
          if (!(anyKeepOpen === this.h3l_1.j3k_1.j2())) {
            this.h3l_1.m3k(anyKeepOpen);
          }
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.cc_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(combine$o$slambda).k3l = function (it, completion) {
    var i = new combine$o$slambda(this.g3l_1, this.h3l_1, completion);
    i.i3l_1 = it;
    return i;
  };
  function combine$o$slambda_0($strategies, this$0, resultContinuation) {
    var i = new combine$o$slambda($strategies, this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.j3l(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function combine$1($strategies) {
    this.p3l_1 = $strategies;
    KeepPopupOpenStrategy.call(this);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$($strategies.length);
    var inductionVariable = 0;
    var last = $strategies.length;
    while (inductionVariable < last) {
      var item = $strategies[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.<no name provided>.<anonymous>' call
      var tmp$ret$0 = item.j3k_1;
      destination.u(tmp$ret$0);
    }
    var tmp = merge(destination);
    launchIn(onEach(tmp, combine$o$slambda_0($strategies, this, null)), CoroutineScope_0(asCoroutineDispatcher(window)));
  }
  protoOf(combine$1).l3k = function (popupElement) {
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = this.p3l_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.<no name provided>.onInit.<anonymous>' call
      element.k3k(popupElement);
    }
  };
  protoOf(combine$1).n3k = function () {
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = this.p3l_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.<no name provided>.onResetting.<anonymous>' call
      element.v1z();
    }
  };
  function Companion_0() {
  }
  var Companion_instance_16;
  function Companion_getInstance_1() {
    return Companion_instance_16;
  }
  function OpenClosePopupStrategy() {
    this.q3l_1 = MutableStateFlow(OpenClose_CLOSE_getInstance());
    this.r3l_1 = asStateFlow(this.q3l_1);
  }
  protoOf(OpenClosePopupStrategy).k3k = function (targetElement) {
    return Unit_instance;
  };
  protoOf(OpenClosePopupStrategy).v1z = function () {
    return Unit_instance;
  };
  protoOf(OpenClosePopupStrategy).s3l = function (request) {
    this.q3l_1.nz(request);
  };
  var OpenClose_OPEN_instance;
  var OpenClose_CLOSE_instance;
  var OpenClose_entriesInitialized;
  function OpenClose_initEntries() {
    if (OpenClose_entriesInitialized)
      return Unit_instance;
    OpenClose_entriesInitialized = true;
    OpenClose_OPEN_instance = new OpenClose('OPEN', 0);
    OpenClose_CLOSE_instance = new OpenClose('CLOSE', 1);
  }
  function OpenClose(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function plus_0(_this__u8e3s4, other) {
    return combine_0(Companion_instance_16, [_this__u8e3s4, other]);
  }
  function onFocus_0(_this__u8e3s4) {
    return new onFocus$1_0();
  }
  function onHover_0(_this__u8e3s4) {
    return new onHover$1_0();
  }
  function combine_0(_this__u8e3s4, strategies) {
    return new combine$1_0(strategies);
  }
  function onFocus$o$init$lambda(this$0) {
    return function (it) {
      this$0.s3l(OpenClose_OPEN_getInstance());
      return Unit_instance;
    };
  }
  function onFocus$o$init$lambda_0(this$0) {
    return function (it) {
      this$0.s3l(OpenClose_CLOSE_getInstance());
      return Unit_instance;
    };
  }
  function onFocus$1_0() {
    OpenClosePopupStrategy.call(this);
    this.v3l_1 = null;
  }
  protoOf(onFocus$1_0).k3k = function (targetElement) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new EventListenerManager(targetElement);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.components.overlay.<no name provided>.init.<anonymous>' call
    this_0.s17('focusin', onFocus$o$init$lambda(this));
    this_0.s17('focusout', onFocus$o$init$lambda_0(this));
    if (targetElement.contains(document.activeElement)) {
      this.s3l(OpenClose_OPEN_getInstance());
    }
    tmp.v3l_1 = this_0;
  };
  protoOf(onFocus$1_0).v1z = function () {
    ensureNotNull(this.v3l_1).t17();
    this.v3l_1 = null;
  };
  function onHover$o$init$lambda(this$0) {
    return function (it) {
      this$0.s3l(OpenClose_OPEN_getInstance());
      return Unit_instance;
    };
  }
  function onHover$o$init$lambda_0(this$0) {
    return function (it) {
      this$0.s3l(OpenClose_CLOSE_getInstance());
      return Unit_instance;
    };
  }
  function onHover$1_0() {
    OpenClosePopupStrategy.call(this);
    this.y3l_1 = null;
  }
  protoOf(onHover$1_0).k3k = function (targetElement) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new EventListenerManager(targetElement);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.components.overlay.<no name provided>.init.<anonymous>' call
    this_0.s17('mouseenter', onHover$o$init$lambda(this));
    this_0.s17('mouseleave', onHover$o$init$lambda_0(this));
    if (targetElement.matches(':hover')) {
      this.s3l(OpenClose_OPEN_getInstance());
    }
    tmp.y3l_1 = this_0;
  };
  protoOf(onHover$1_0).v1z = function () {
    ensureNotNull(this.y3l_1).t17();
    this.y3l_1 = null;
  };
  function combine$o$slambda_1(this$0, resultContinuation) {
    this.h3m_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(combine$o$slambda_1).j3m = function (it, $completion) {
    var tmp = this.k3m(it, $completion);
    tmp.bc_1 = Unit_instance;
    tmp.cc_1 = null;
    return tmp.lc();
  };
  protoOf(combine$o$slambda_1).xc = function (p1, $completion) {
    return this.j3m(p1 instanceof OpenClose ? p1 : THROW_CCE(), $completion);
  };
  protoOf(combine$o$slambda_1).lc = function () {
    var suspendResult = this.bc_1;
    $sm: do
      try {
        var tmp = this.zb_1;
        if (tmp === 0) {
          this.ac_1 = 1;
          this.h3m_1.s3l(this.i3m_1);
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.cc_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(combine$o$slambda_1).k3m = function (it, completion) {
    var i = new combine$o$slambda_1(this.h3m_1, completion);
    i.i3m_1 = it;
    return i;
  };
  function combine$o$slambda_2(this$0, resultContinuation) {
    var i = new combine$o$slambda_1(this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.j3m(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function combine$1_0($strategies) {
    this.n3m_1 = $strategies;
    OpenClosePopupStrategy.call(this);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$($strategies.length);
    var inductionVariable = 0;
    var last = $strategies.length;
    while (inductionVariable < last) {
      var item = $strategies[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.<no name provided>.<anonymous>' call
      var tmp$ret$0 = item.r3l_1;
      destination.u(tmp$ret$0);
    }
    var tmp = merge(destination);
    launchIn(onEach(tmp, combine$o$slambda_2(this, null)), CoroutineScope_0(asCoroutineDispatcher(window)));
  }
  protoOf(combine$1_0).k3k = function (targetElement) {
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = this.n3m_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.<no name provided>.init.<anonymous>' call
      element.k3k(targetElement);
    }
  };
  protoOf(combine$1_0).v1z = function () {
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = this.n3m_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.<no name provided>.reset.<anonymous>' call
      element.v1z();
    }
  };
  function OpenClose_OPEN_getInstance() {
    OpenClose_initEntries();
    return OpenClose_OPEN_instance;
  }
  function OpenClose_CLOSE_getInstance() {
    OpenClose_initEntries();
    return OpenClose_CLOSE_instance;
  }
  function get_OverlayStyle() {
    _init_properties_Overlay_kt__p5agwu();
    return OverlayStyle$delegate.u2u(null, OverlayStyle$factory());
  }
  var OverlayStyle$delegate;
  function OverlayVars() {
    OverlayVars_instance = this;
    this.o3m_1 = StyleVariable('silk');
  }
  protoOf(OverlayVars).x3e = function () {
    return this.o3m_1.u2u(this, BackgroundColor$factory_1());
  };
  var OverlayVars_instance;
  function OverlayVars_getInstance() {
    if (OverlayVars_instance == null)
      new OverlayVars();
    return OverlayVars_instance;
  }
  function Overlay(modifier, variant, contentAlignment, ref, content, $composer, $changed, $default) {
    _init_properties_Overlay_kt__p5agwu();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var contentAlignment_0 = {_v: contentAlignment};
    var ref_0 = {_v: ref};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.r1o(-1849203310);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 2;
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.s1e(variant_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 128;
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.s1e(ref_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.u1n(content_0._v) ? 16384 : 8192);
    if (!(($default & 5) === 5) ? true : !(($dirty & 46811) === 9362) ? true : !$composer_0.u1m()) {
      $composer_0.b1n();
      if (($changed & 1) === 0 ? true : $composer_0.f1n()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 2) === 0)) {
          variant_0._v = null;
        }
        if (!(($default & 4) === 0)) {
          contentAlignment_0._v = TopCenter_instance;
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          ref_0._v = null;
        }
        if (!(($default & 16) === 0)) {
          content_0._v = ComposableSingletons$OverlayKt_getInstance().p3m_1;
        }
      } else {
        $composer_0.l1h();
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.c1n();
      if (isTraceInProgress()) {
        traceEventStart(-1849203310, $dirty, -1, 'com.varabyte.kobweb.silk.components.overlay.Overlay (Overlay.kt:57)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.Overlay.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, 228061525, true, Overlay$lambda(variant_0, modifier_0, contentAlignment_0, ref_0, content_0));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.z1m(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.s1e(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.d1o();
      var tmp_0;
      if (invalid ? true : it === Companion_getInstance().r1h_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.overlay.Overlay.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_23(dispatchReceiver);
        $composer_1.j1o(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.a1n();
      deferRender(tmp0, $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l1h();
    }
    var tmp0_safe_receiver = $composer_0.s1o();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.p1t(Overlay$lambda_0(modifier_0, variant_0, contentAlignment_0, ref_0, content_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_22($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.r2h(p0, p1, p2);
    };
  }
  function ComposableSingletons$OverlayKt$lambda_1$lambda_mpnfty($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1721412430, $changed, -1, 'com.varabyte.kobweb.silk.components.overlay.ComposableSingletons$OverlayKt.lambda-1.<anonymous> (Overlay.kt:56)');
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$OverlayKt() {
    ComposableSingletons$OverlayKt_instance = this;
    var tmp = this;
    tmp.p3m_1 = ComposableLambda$invoke$ref_22(composableLambdaInstance(1721412430, false, ComposableSingletons$OverlayKt$lambda_1$lambda_mpnfty));
  }
  var ComposableSingletons$OverlayKt_instance;
  function ComposableSingletons$OverlayKt_getInstance() {
    if (ComposableSingletons$OverlayKt_instance == null)
      new ComposableSingletons$OverlayKt();
    return ComposableSingletons$OverlayKt_instance;
  }
  function OverlayStyle$delegate$lambda($this$base) {
    _init_properties_Overlay_kt__p5agwu();
    return backgroundColor(Companion_instance, OverlayVars_getInstance().x3e().o2u());
  }
  function Overlay$lambda($variant, $modifier, $contentAlignment, $ref, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.u1m()) {
        if (isTraceInProgress()) {
          traceEventStart(228061525, $changed, -1, 'com.varabyte.kobweb.silk.components.overlay.Overlay.<anonymous> (Overlay.kt:59)');
        }
        var tmp_0 = toModifier(get_OverlayStyle(), [$variant._v], $composer_0, 0);
        // Inline function 'org.jetbrains.compose.web.css.Companion.Fixed' call
        // Inline function 'org.jetbrains.compose.web.css.Position' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        Box(right(left(bottom(top(position(tmp_0, 'fixed'), get_px(0)), get_px(0)), get_px(0)), get_px(0)).e34($modifier._v), $contentAlignment._v, $ref._v, $content._v, $composer_0, 584, 0);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_instance;
        }
        tmp = tmp_1;
      } else {
        $composer_0.l1h();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_23($boundThis) {
    return function (p0, p1) {
      return $boundThis.s1m(p0, p1);
    };
  }
  function Overlay$lambda_0($modifier, $variant, $contentAlignment, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Overlay($modifier._v, $variant._v, $contentAlignment._v, $ref._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function OverlayStyle$factory() {
    return getPropertyCallableRef('OverlayStyle', 0, KProperty0, function () {
      return get_OverlayStyle();
    }, null);
  }
  function BackgroundColor$factory_1() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.x3e();
    }, null);
  }
  var properties_initialized_Overlay_kt_mvmds0;
  function _init_properties_Overlay_kt__p5agwu() {
    if (!properties_initialized_Overlay_kt_mvmds0) {
      properties_initialized_Overlay_kt_mvmds0 = true;
      var tmp = Companion_instance_5;
      OverlayStyle$delegate = base(tmp, VOID, 'silk', OverlayStyle$delegate$lambda);
    }
  }
  function AdvancedPopover(target, modifier, hiddenModifier, variant, showDelayMs, hideDelayMs, openCloseStrategy, placementTarget, placementStrategy, keepOpenStrategy, ref, content, $composer, $changed, $changed1, $default) {
    var modifier_0 = {_v: modifier};
    var hiddenModifier_0 = {_v: hiddenModifier};
    var variant_0 = {_v: variant};
    var showDelayMs_0 = {_v: showDelayMs};
    var hideDelayMs_0 = {_v: hideDelayMs};
    var openCloseStrategy_0 = {_v: openCloseStrategy};
    var placementTarget_0 = {_v: placementTarget};
    var placementStrategy_0 = {_v: placementStrategy};
    var keepOpenStrategy_0 = {_v: keepOpenStrategy};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.r1o(703588025);
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (!(($default & 2) === 0)) {
      modifier_0._v = Companion_instance;
    }
    if (!(($default & 4) === 0)) {
      hiddenModifier_0._v = Companion_instance;
    }
    if (!(($default & 8) === 0)) {
      variant_0._v = null;
    }
    if (!(($default & 16) === 0)) {
      showDelayMs_0._v = 0;
    }
    if (!(($default & 32) === 0)) {
      hideDelayMs_0._v = 0;
    }
    if (!(($default & 64) === 0)) {
      openCloseStrategy_0._v = null;
    }
    if (!(($default & 128) === 0)) {
      placementTarget_0._v = null;
    }
    if (!(($default & 256) === 0)) {
      placementStrategy_0._v = null;
    }
    if (!(($default & 512) === 0)) {
      keepOpenStrategy_0._v = null;
    }
    if (!(($default & 1024) === 0)) {
      ref_0._v = null;
    }
    if (isTraceInProgress()) {
      traceEventStart(703588025, $dirty, $dirty1, 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover (Popover.kt:313)');
    }
    $composer_0.z1m(49691339);
    // Inline function 'androidx.compose.runtime.cache' call
    var this_0 = $composer_0;
    var invalid = $composer_0.s1e(openCloseStrategy_0._v);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = this_0.d1o();
    var tmp;
    if (invalid ? true : it === Companion_getInstance().r1h_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>' call
      var tmp0_elvis_lhs = openCloseStrategy_0._v;
      var value = tmp0_elvis_lhs == null ? plus_0(onHover_0(Companion_instance_16), onFocus_0(Companion_instance_16)) : tmp0_elvis_lhs;
      this_0.j1o(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.a1n();
    var openCloseStrategy_1 = tmp0_group;
    $composer_0.z1m(49691510);
    // Inline function 'androidx.compose.runtime.cache' call
    var this_1 = $composer_0;
    var invalid_0 = !!(!!($composer_0.s1e(hiddenModifier_0._v) | ((($changed & 57344 ^ 24576) > 16384 ? $composer_0.w1n(showDelayMs_0._v) : false) ? true : ($changed & 24576) === 16384)) | ((($changed & 458752 ^ 196608) > 131072 ? $composer_0.w1n(hideDelayMs_0._v) : false) ? true : ($changed & 196608) === 131072));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = this_1.d1o();
    var tmp_1;
    if (invalid_0 ? true : it_0 === Companion_getInstance().r1h_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>' call
      var value_0 = new PopoverShowHideSettings(hiddenModifier_0._v, showDelayMs_0._v, hideDelayMs_0._v);
      this_1.j1o(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.a1n();
    var showHideSettings = tmp1_group;
    $composer_0.z1m(49691782);
    // Inline function 'androidx.compose.runtime.cache' call
    var this_2 = $composer_0;
    var invalid_1 = (($changed & 234881024 ^ 100663296) > 67108864 ? $composer_0.s1e(placementStrategy_0._v) : false) ? true : ($changed & 100663296) === 67108864;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_1 = this_2.d1o();
    var tmp_3;
    if (invalid_1 ? true : it_1 === Companion_getInstance().r1h_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>' call
      var tmp0_elvis_lhs_0 = placementStrategy_0._v;
      var value_1 = tmp0_elvis_lhs_0 == null ? Companion_instance_17.q3m(PopupPlacement_Bottom_getInstance()) : tmp0_elvis_lhs_0;
      this_2.j1o(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = it_1;
    }
    var tmp_4 = tmp_3;
    var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
    $composer_0.a1n();
    var placementStrategy_1 = tmp2_group;
    $composer_0.z1m(49691944);
    // Inline function 'androidx.compose.runtime.cache' call
    var this_3 = $composer_0;
    var invalid_2 = $composer_0.s1e(keepOpenStrategy_0._v);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_2 = this_3.d1o();
    var tmp_5;
    if (invalid_2 ? true : it_2 === Companion_getInstance().r1h_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>' call
      var tmp0_elvis_lhs_1 = keepOpenStrategy_0._v;
      var value_2 = tmp0_elvis_lhs_1 == null ? plus(onHover(Companion_instance_15), onFocus(Companion_instance_15)) : tmp0_elvis_lhs_1;
      this_3.j1o(value_2);
      tmp_5 = value_2;
    } else {
      tmp_5 = it_2;
    }
    var tmp_6 = tmp_5;
    var tmp3_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
    $composer_0.a1n();
    var keepOpenStrategy_1 = tmp3_group;
    $composer_0.z1m(49692116);
    // Inline function 'androidx.compose.runtime.cache' call
    var this_4 = $composer_0;
    var invalid_3 = !!(!!(!!($composer_0.s1e(openCloseStrategy_1) | $composer_0.s1e(showHideSettings)) | $composer_0.s1e(placementStrategy_1)) | $composer_0.s1e(keepOpenStrategy_1));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_3 = this_4.d1o();
    var tmp_7;
    if (invalid_3 ? true : it_3 === Companion_getInstance().r1h_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>' call
      var value_3 = new PopoverStateController(openCloseStrategy_1, showHideSettings, placementStrategy_1, keepOpenStrategy_1);
      this_4.j1o(value_3);
      tmp_7 = value_3;
    } else {
      tmp_7 = it_3;
    }
    var tmp_8 = tmp_7;
    var tmp4_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
    $composer_0.a1n();
    var popoverStateController = tmp4_group;
    var tmp_9 = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_10 = display(tmp_9, 'none');
    var tmp_11 = [popoverStateController, target, placementTarget_0._v];
    var tmp_12 = disposableRef(tmp_11, AdvancedPopover$lambda(target, placementTarget_0, popoverStateController, openCloseStrategy_1));
    Box(tmp_10, null, tmp_12, null, $composer_0, 520, 10);
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>' call
    var tmp_13 = $composer_0;
    var dispatchReceiver = composableLambda(tmp_13, -1574969194, true, AdvancedPopover$lambda_0(popoverStateController, variant_0, modifier_0, ref_0, placementStrategy_1, content));
    // Inline function 'androidx.compose.runtime.remember' call
    var $composer_1 = $composer_0;
    $composer_1.z1m(1157296644);
    sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_4 = $composer_1.s1e(dispatchReceiver);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_4 = $composer_1.d1o();
    var tmp_14;
    if (invalid_4 ? true : it_4 === Companion_getInstance().r1h_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>.<anonymous>' call
      var value_4 = ComposableLambda$invoke$ref_25(dispatchReceiver);
      $composer_1.j1o(value_4);
      tmp_14 = value_4;
    } else {
      tmp_14 = it_4;
    }
    var tmp_15 = tmp_14;
    var tmp0 = (tmp_15 == null ? true : !(tmp_15 == null)) ? tmp_15 : THROW_CCE();
    $composer_1.a1n();
    deferRender(tmp0, $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp5_safe_receiver = $composer_0.s1o();
    if (tmp5_safe_receiver == null)
      null;
    else {
      tmp5_safe_receiver.p1t(AdvancedPopover$lambda_1(target, modifier_0, hiddenModifier_0, variant_0, showDelayMs_0, hideDelayMs_0, openCloseStrategy_0, placementTarget_0, placementStrategy_0, keepOpenStrategy_0, ref_0, content, $changed, $changed1, $default));
    }
  }
  function PopoverShowHideSettings(hiddenModifier, showDelayMs, hideDelayMs) {
    this.r3m_1 = coerceAtLeast(showDelayMs, 0);
    this.s3m_1 = coerceAtLeast(hideDelayMs, 0);
    this.t3m_1 = opacity(hiddenModifier, 0);
  }
  function _set__state__4o0y7v($this, _set____db54di) {
    var this_0 = $this.x3m_1;
    _state$factory();
    this_0.lz(_set____db54di);
    return Unit_instance;
  }
  function _get__state__37adl3($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.x3m_1;
    _state$factory_0();
    return this_0.j2();
  }
  function resetTimers($this) {
    window.clearTimeout($this.y3m_1);
    window.clearTimeout($this.z3m_1);
  }
  function PopoverStateController$requestShowPopup$lambda(this$0, $state) {
    return function () {
      _set__state__4o0y7v(this$0, new Calculating($state.a3n(), this$0.u3m_1));
      var tmp0_safe_receiver = $state.a3n().d3n_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.takeIf' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp_0;
        // Inline function 'com.varabyte.kobweb.silk.components.overlay.PopoverStateController.requestShowPopup.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.silk.components.overlay.PopoverStateController.requestShowPopup.<anonymous>.<anonymous>.<anonymous>' call
        var rect = tmp0_safe_receiver.getBoundingClientRect();
        if (rect.width * rect.height > 0.0) {
          tmp_0 = tmp0_safe_receiver;
        } else {
          tmp_0 = null;
        }
        tmp = tmp_0;
      }
      var tmp_1;
      if (tmp == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        this$0.e3n();
        tmp_1 = Unit_instance;
      }
      return tmp_1;
    };
  }
  function PopoverStateController$requestHidePopup$lambda(this$0, $state) {
    return function () {
      var tmp;
      if (!get_shouldKeepOpen(this$0.w3m_1)) {
        var tmp0_safe_receiver = $state.a3n().d3n_1;
        var tmp_0;
        if (tmp0_safe_receiver == null) {
          tmp_0 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'com.varabyte.kobweb.silk.components.overlay.PopoverStateController.requestHidePopup.<anonymous>.<anonymous>' call
          tmp_0 = toDouble(window.getComputedStyle(tmp0_safe_receiver).getPropertyValue('opacity'));
        }
        var currentOpacity = tmp_0;
        _set__state__4o0y7v(this$0, new Hiding($state.a3n(), this$0.v3m_1, this$0.u3m_1, $state.f3n()));
        var tmp_1;
        if (currentOpacity == null ? true : currentOpacity === 0.0) {
          this$0.g3n($state.a3n());
          tmp_1 = Unit_instance;
        }
        tmp = tmp_1;
      }
      return Unit_instance;
    };
  }
  function PopoverStateController$slambda(this$0, resultContinuation) {
    this.p3n_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(PopoverStateController$slambda).j3l = function (keepOpen, $completion) {
    var tmp = this.k3l(keepOpen, $completion);
    tmp.bc_1 = Unit_instance;
    tmp.cc_1 = null;
    return tmp.lc();
  };
  protoOf(PopoverStateController$slambda).xc = function (p1, $completion) {
    return this.j3l((!(p1 == null) ? typeof p1 === 'boolean' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(PopoverStateController$slambda).lc = function () {
    var suspendResult = this.bc_1;
    $sm: do
      try {
        var tmp = this.zb_1;
        if (tmp === 0) {
          this.ac_1 = 1;
          if (!this.q3n_1) {
            this.p3n_1.r3n();
          }
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.cc_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(PopoverStateController$slambda).k3l = function (keepOpen, completion) {
    var i = new PopoverStateController$slambda(this.p3n_1, completion);
    i.q3n_1 = keepOpen;
    return i;
  };
  function PopoverStateController$slambda_0(this$0, resultContinuation) {
    var i = new PopoverStateController$slambda(this$0, resultContinuation);
    var l = function (keepOpen, $completion) {
      return i.j3l(keepOpen, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function PopoverStateController$slambda_1(this$0, resultContinuation) {
    this.a3o_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(PopoverStateController$slambda_1).j3m = function (request, $completion) {
    var tmp = this.k3m(request, $completion);
    tmp.bc_1 = Unit_instance;
    tmp.cc_1 = null;
    return tmp.lc();
  };
  protoOf(PopoverStateController$slambda_1).xc = function (p1, $completion) {
    return this.j3m(p1 instanceof OpenClose ? p1 : THROW_CCE(), $completion);
  };
  protoOf(PopoverStateController$slambda_1).lc = function () {
    var suspendResult = this.bc_1;
    $sm: do
      try {
        var tmp = this.zb_1;
        if (tmp === 0) {
          this.ac_1 = 1;
          var tmp0 = this.b3o_1.u9_1;
          if (tmp0 === 0) {
            this.a3o_1.c3o();
          } else if (tmp0 === 1) {
            this.a3o_1.r3n();
          }
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.cc_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(PopoverStateController$slambda_1).k3m = function (request, completion) {
    var i = new PopoverStateController$slambda_1(this.a3o_1, completion);
    i.b3o_1 = request;
    return i;
  };
  function PopoverStateController$slambda_2(this$0, resultContinuation) {
    var i = new PopoverStateController$slambda_1(this$0, resultContinuation);
    var l = function (request, $completion) {
      return i.j3m(request, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function PopoverStateController(openCloseStrategy, showHideSettings, placementStrategy, keepOpenStrategy) {
    this.u3m_1 = showHideSettings;
    this.v3m_1 = placementStrategy;
    this.w3m_1 = keepOpenStrategy;
    this.x3m_1 = mutableStateOf(Uninitialized_instance);
    this.y3m_1 = -1;
    this.z3m_1 = -1;
    var scope = CoroutineScope_0(asCoroutineDispatcher(window));
    launchIn(onEach(this.w3m_1.j3k_1, PopoverStateController$slambda_0(this, null)), scope);
    launchIn(onEach(openCloseStrategy.r3l_1, PopoverStateController$slambda_2(this, null)), scope);
  }
  protoOf(PopoverStateController).xh = function () {
    return _get__state__37adl3(this);
  };
  protoOf(PopoverStateController).d3o = function () {
    var state = _get__state__37adl3(this);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!isInterface(state, Initialized)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    resetTimers(this);
    _set__state__4o0y7v(this, new FoundElements(state.a3n()));
  };
  protoOf(PopoverStateController).e3o = function (elements) {
    var state = _get__state__37adl3(this);
    if (isInterface(state, Initialized)) {
      state.f3o(elements);
    } else {
      _set__state__4o0y7v(this, new FoundElements(elements));
    }
  };
  protoOf(PopoverStateController).c3o = function () {
    var state = _get__state__37adl3(this);
    if (!isInterface(state, Initialized))
      return Unit_instance;
    resetTimers(this);
    var tmp = this;
    var tmp_0 = window;
    tmp.y3m_1 = tmp_0.setTimeout(PopoverStateController$requestShowPopup$lambda(this, state), this.u3m_1.r3m_1);
  };
  protoOf(PopoverStateController).g3o = function (popupElement) {
    var state = _get__state__37adl3(this);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!isInterface(state, Initialized)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.w3m_1.k3k(popupElement);
    state.a3n().d3n_1 = popupElement;
  };
  protoOf(PopoverStateController).h3o = function () {
    var state = _get__state__37adl3(this);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!isInterface(state, Initialized)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.w3m_1.v1z();
    state.a3n().d3n_1 = null;
  };
  protoOf(PopoverStateController).e3n = function () {
    var state = _get__state__37adl3(this);
    if (!(state instanceof Calculating))
      return Unit_instance;
    var popupElement = state.i3o_1.d3n_1;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(popupElement == null)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    _set__state__4o0y7v(this, new Shown(state.i3o_1, this.v3m_1));
  };
  protoOf(PopoverStateController).r3n = function () {
    var state = _get__state__37adl3(this);
    if (state instanceof FoundElements) {
      resetTimers(this);
      return Unit_instance;
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!isInterface(state, Visible)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    resetTimers(this);
    var tmp = this;
    var tmp_0 = window;
    tmp.z3m_1 = tmp_0.setTimeout(PopoverStateController$requestHidePopup$lambda(this, state), this.u3m_1.s3m_1);
  };
  protoOf(PopoverStateController).g3n = function (elements) {
    var state = _get__state__37adl3(this);
    if (!(state instanceof Hiding))
      return Unit_instance;
    _set__state__4o0y7v(this, new FoundElements(elements));
    resetTimers(this);
  };
  function resolve(_this__u8e3s4, $this, targetFinder) {
    if (_this__u8e3s4 == null ? true : targetFinder == null)
      return _this__u8e3s4;
    return targetFinder.b17(_this__u8e3s4);
  }
  function PopoverElements(srcElement, popupTarget, placementTarget) {
    var tmp = this;
    var tmp0_elvis_lhs = resolve(srcElement, this, popupTarget);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      var message = 'Target element finder returned null';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    tmp.b3n_1 = tmp_0;
    var tmp_1 = this;
    var tmp_2;
    if (placementTarget == null) {
      tmp_2 = this.b3n_1;
    } else {
      var tmp0_elvis_lhs_0 = resolve(srcElement, this, placementTarget);
      var tmp_3;
      if (tmp0_elvis_lhs_0 == null) {
        var message_0 = 'Placement element finder returned null';
        throw IllegalStateException_init_$Create$(toString(message_0));
      } else {
        tmp_3 = tmp0_elvis_lhs_0;
      }
      tmp_2 = tmp_3;
    }
    tmp_1.c3n_1 = tmp_2;
    this.d3n_1 = null;
  }
  function Uninitialized() {
  }
  var Uninitialized_instance;
  function Uninitialized_getInstance() {
    return Uninitialized_instance;
  }
  function Initialized() {
  }
  function FoundElements(elements) {
    this.l3o_1 = elements;
  }
  protoOf(FoundElements).f3o = function (_set____db54di) {
    this.l3o_1 = _set____db54di;
  };
  protoOf(FoundElements).a3n = function () {
    return this.l3o_1;
  };
  function Visible() {
  }
  function Calculating(elements, showHideSettings) {
    this.i3o_1 = elements;
    this.j3o_1 = left(top(showHideSettings.t3m_1, get_percent(-100)), get_percent(-100));
    this.k3o_1 = null;
  }
  protoOf(Calculating).f3o = function (_set____db54di) {
    this.i3o_1 = _set____db54di;
  };
  protoOf(Calculating).a3n = function () {
    return this.i3o_1;
  };
  protoOf(Calculating).m3o = function () {
    return this.j3o_1;
  };
  protoOf(Calculating).f3n = function () {
    return this.k3o_1;
  };
  function Shown(elements, placementStrategy) {
    this.n3o_1 = elements;
    this.o3o_1 = placementStrategy.r3o();
    this.p3o_1 = Companion_instance.e34(toModifier_1(this.o3o_1.s3o_1));
    this.q3o_1 = this.o3o_1.t3o_1;
  }
  protoOf(Shown).f3o = function (_set____db54di) {
    this.n3o_1 = _set____db54di;
  };
  protoOf(Shown).a3n = function () {
    return this.n3o_1;
  };
  protoOf(Shown).m3o = function () {
    return this.p3o_1;
  };
  protoOf(Shown).f3n = function () {
    return this.q3o_1;
  };
  function Hiding(elements, placementStrategy, showHideSettings, placement) {
    this.u3o_1 = elements;
    this.v3o_1 = placement;
    var tmp = this;
    // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
    var this_0 = showHideSettings.t3m_1;
    var tmp_0;
    if (!(this.u3o_1.d3n_1 == null)) {
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.Hiding.modifier.<anonymous>' call
      tmp_0 = toModifier_1(placementStrategy.r3o().s3o_1);
    } else {
      tmp_0 = Companion_instance;
    }
    tmp.w3o_1 = this_0.e34(tmp_0);
  }
  protoOf(Hiding).f3o = function (_set____db54di) {
    this.u3o_1 = _set____db54di;
  };
  protoOf(Hiding).a3n = function () {
    return this.u3o_1;
  };
  protoOf(Hiding).f3n = function () {
    return this.v3o_1;
  };
  protoOf(Hiding).m3o = function () {
    return this.w3o_1;
  };
  function toModifier_1(_this__u8e3s4) {
    return left(top(Companion_instance, _this__u8e3s4.x3o_1), _this__u8e3s4.y3o_1);
  }
  function _no_name_provided__qut3iv($openCloseStrategy) {
    this.z3o_1 = $openCloseStrategy;
  }
  protoOf(_no_name_provided__qut3iv).hl = function () {
    // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>.<anonymous>' call
    this.z3o_1.v1z();
  };
  function AdvancedPopover$lambda($target, $placementTarget, $popoverStateController, $openCloseStrategy) {
    return function ($this$disposableRef, element) {
      var tmp;
      try {
        // Inline function 'kotlin.apply' call
        var this_0 = new PopoverElements(element, $target, $placementTarget._v);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>.<anonymous>' call
        var tmp_0 = this_0;
        var tmp_1 = $popoverStateController.xh();
        var tmp0_safe_receiver = isInterface(tmp_1, Initialized) ? tmp_1 : null;
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a3n();
        tmp_0.d3n_1 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.d3n_1;
        var popoverElements = this_0;
        // Inline function 'kotlin.apply' call
        var this_1 = popoverElements.b3n_1;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>.<anonymous>' call
        $openCloseStrategy.k3k(this_1);
        $popoverStateController.e3o(popoverElements);
        tmp = Unit_instance;
      } catch ($p) {
        var tmp_2;
        if ($p instanceof IllegalStateException) {
          var _ = $p;
          tmp_2 = Unit_instance;
        } else {
          throw $p;
        }
        tmp = tmp_2;
      }
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv($openCloseStrategy);
    };
  }
  function AdvancedPopover$lambda$lambda($popoverStateController) {
    return function (evt) {
      var state = $popoverStateController.xh();
      var tmp;
      var tmp_0;
      if (evt.m2z_1 === 'opacity') {
        tmp_0 = state instanceof Hiding;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        $popoverStateController.g3n(state.u3o_1);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function _no_name_provided__qut3iv_0($popoverStateController, $placementStrategy) {
    this.a3p_1 = $popoverStateController;
    this.b3p_1 = $placementStrategy;
  }
  protoOf(_no_name_provided__qut3iv_0).hl = function () {
    // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    this.a3p_1.h3o();
    this.a3p_1.d3o();
    this.b3p_1.v1z();
  };
  function AdvancedPopover$lambda$lambda$lambda($placementStrategy, $visiblePopoverState, $popoverStateController) {
    return function ($this$disposableRef, popupElement) {
      $placementStrategy.c3p($visiblePopoverState.a3n().c3n_1, popupElement);
      $popoverStateController.g3o(popupElement);
      $popoverStateController.e3n();
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv_0($popoverStateController, $placementStrategy);
    };
  }
  function AdvancedPopover$lambda$lambda_0($ref, $placementStrategy, $visiblePopoverState, $popoverStateController) {
    return function ($this$refScope) {
      $this$refScope.b2w([], AdvancedPopover$lambda$lambda$lambda($placementStrategy, $visiblePopoverState, $popoverStateController));
      $this$refScope.c2w($ref._v);
      return Unit_instance;
    };
  }
  function AdvancedPopover$lambda$lambda_1($content, $visiblePopoverState) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(541450320, $changed, -1, 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>.<anonymous> (Popover.kt:388)');
      }
      $content(new PopupScope($visiblePopoverState.f3n()), $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_24($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.r2h(p0, p1, p2);
    };
  }
  function AdvancedPopover$lambda_0($popoverStateController, $variant, $modifier, $ref, $placementStrategy, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.u1m()) {
        if (isTraceInProgress()) {
          traceEventStart(-1574969194, $changed, -1, 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous> (Popover.kt:361)');
        }
        var tmp_0 = $popoverStateController.xh();
        var tmp0_elvis_lhs = isInterface(tmp_0, Visible) ? tmp_0 : null;
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          if (isTraceInProgress()) {
            traceEventEnd();
          }
          return Unit_instance;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var visiblePopoverState = tmp_1;
        var tmp_2 = toModifier(get_PopupStyle(), [$variant._v], $composer_0, 0);
        // Inline function 'org.jetbrains.compose.web.css.Companion.Fixed' call
        // Inline function 'org.jetbrains.compose.web.css.Position' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_3 = position(tmp_2, 'fixed').e34(visiblePopoverState.m3o()).e34($modifier._v);
        var tmp_4 = onTransitionEnd(tmp_3, AdvancedPopover$lambda$lambda($popoverStateController));
        var tmp_5 = refScope(AdvancedPopover$lambda$lambda_0($ref, $placementStrategy, visiblePopoverState, $popoverStateController));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_6 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_6, 541450320, true, AdvancedPopover$lambda$lambda_1($content, visiblePopoverState));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.z1m(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.s1e(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.d1o();
        var tmp_7;
        if (invalid ? true : it === Companion_getInstance().r1h_1) {
          // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_24(dispatchReceiver);
          $composer_1.j1o(value);
          tmp_7 = value;
        } else {
          tmp_7 = it;
        }
        var tmp_8 = tmp_7;
        var tmp0 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
        $composer_1.a1n();
        Box(tmp_4, null, tmp_5, tmp0, $composer_0, 3592, 2);
        var tmp_9;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_9 = Unit_instance;
        }
        tmp = tmp_9;
      } else {
        $composer_0.l1h();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_25($boundThis) {
    return function (p0, p1) {
      return $boundThis.s1m(p0, p1);
    };
  }
  function AdvancedPopover$lambda_1($target, $modifier, $hiddenModifier, $variant, $showDelayMs, $hideDelayMs, $openCloseStrategy, $placementTarget, $placementStrategy, $keepOpenStrategy, $ref, $content, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      AdvancedPopover($target, $modifier._v, $hiddenModifier._v, $variant._v, $showDelayMs._v, $hideDelayMs._v, $openCloseStrategy._v, $placementTarget._v, $placementStrategy._v, $keepOpenStrategy._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_instance;
    };
  }
  function _state$factory() {
    return getPropertyCallableRef('_state', 1, KMutableProperty1, function (receiver) {
      return _get__state__37adl3(receiver);
    }, function (receiver, value) {
      return _set__state__4o0y7v(receiver, value);
    });
  }
  function _state$factory_0() {
    return getPropertyCallableRef('_state', 1, KMutableProperty1, function (receiver) {
      return _get__state__37adl3(receiver);
    }, function (receiver, value) {
      return _set__state__4o0y7v(receiver, value);
    });
  }
  function get_PopupStyle() {
    _init_properties_Popup_kt__lluomy();
    return PopupStyle$delegate.u2u(null, PopupStyle$factory());
  }
  var PopupStyle$delegate;
  function PopupVars() {
    PopupVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = TransitionDurationVars_getInstance().n3i().o2u();
    tmp.d3p_1 = StyleVariable_1(tmp0_defaultFallback, 'silk');
  }
  protoOf(PopupVars).e3h = function () {
    return this.d3p_1.u2u(this, TransitionDuration$factory_1());
  };
  var PopupVars_instance;
  function PopupVars_getInstance() {
    if (PopupVars_instance == null)
      new PopupVars();
    return PopupVars_instance;
  }
  var PopupPlacement_TopLeft_instance;
  var PopupPlacement_Top_instance;
  var PopupPlacement_TopRight_instance;
  var PopupPlacement_LeftTop_instance;
  var PopupPlacement_RightTop_instance;
  var PopupPlacement_Left_instance;
  var PopupPlacement_Right_instance;
  var PopupPlacement_LeftBottom_instance;
  var PopupPlacement_RightBottom_instance;
  var PopupPlacement_BottomLeft_instance;
  var PopupPlacement_Bottom_instance;
  var PopupPlacement_BottomRight_instance;
  var PopupPlacement_entriesInitialized;
  function PopupPlacement_initEntries() {
    if (PopupPlacement_entriesInitialized)
      return Unit_instance;
    PopupPlacement_entriesInitialized = true;
    PopupPlacement_TopLeft_instance = new PopupPlacement('TopLeft', 0);
    PopupPlacement_Top_instance = new PopupPlacement('Top', 1);
    PopupPlacement_TopRight_instance = new PopupPlacement('TopRight', 2);
    PopupPlacement_LeftTop_instance = new PopupPlacement('LeftTop', 3);
    PopupPlacement_RightTop_instance = new PopupPlacement('RightTop', 4);
    PopupPlacement_Left_instance = new PopupPlacement('Left', 5);
    PopupPlacement_Right_instance = new PopupPlacement('Right', 6);
    PopupPlacement_LeftBottom_instance = new PopupPlacement('LeftBottom', 7);
    PopupPlacement_RightBottom_instance = new PopupPlacement('RightBottom', 8);
    PopupPlacement_BottomLeft_instance = new PopupPlacement('BottomLeft', 9);
    PopupPlacement_Bottom_instance = new PopupPlacement('Bottom', 10);
    PopupPlacement_BottomRight_instance = new PopupPlacement('BottomRight', 11);
  }
  function PopupPlacement(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function get_DEFAULT_POPUP_OFFSET_PX() {
    return DEFAULT_POPUP_OFFSET_PX;
  }
  var DEFAULT_POPUP_OFFSET_PX;
  function updatePopupPosition($this) {
    updatePosition(ensureNotNull($this.f3p_1), $this.r3o().s3o_1);
  }
  function PopupPlacementStrategy$Companion$of$o$updatePopupPositionListener$lambda(this$0) {
    return function (it) {
      updatePopupPosition(this$0);
      return Unit_instance;
    };
  }
  function PopupPlacementStrategy$Companion$of$o$init$lambda(this$0) {
    return function (_anonymous_parameter_0__qggqh8) {
      updatePopupPosition(this$0);
      return Unit_instance;
    };
  }
  function PopupPlacementStrategy$Companion$of$o$init$lambda_0(this$0) {
    return function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd) {
      updatePopupPosition(this$0);
      return Unit_instance;
    };
  }
  function PopupPlacementStrategy$Companion$of$1($placement, $offsetPixels) {
    this.j3p_1 = $placement;
    this.k3p_1 = $offsetPixels;
    PopupPlacementStrategy.call(this);
    this.e3p_1 = null;
    this.f3p_1 = null;
    this.g3p_1 = null;
    this.h3p_1 = null;
    var tmp = this;
    tmp.i3p_1 = EventListener(PopupPlacementStrategy$Companion$of$o$updatePopupPositionListener$lambda(this));
  }
  protoOf(PopupPlacementStrategy$Companion$of$1).c3p = function (placementElement, popupElement) {
    this.e3p_1 = placementElement;
    this.f3p_1 = popupElement;
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = ResizeObserver_init_$Create$(PopupPlacementStrategy$Companion$of$o$init$lambda(this));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.components.overlay.<no name provided>.init.<anonymous>' call
    this_0.n17(popupElement);
    this_0.n17(placementElement);
    tmp.g3p_1 = this_0;
    var tmp_0 = this;
    // Inline function 'kotlin.apply' call
    var this_1 = new MutationObserver(PopupPlacementStrategy$Companion$of$o$init$lambda_0(this));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.components.overlay.<no name provided>.init.<anonymous>' call
    // Inline function 'org.w3c.dom.MutationObserverInit' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var attributeFilter = ['style'];
    var characterData = undefined;
    var attributeOldValue = undefined;
    var characterDataOldValue = undefined;
    var o = {};
    o['childList'] = false;
    o['attributes'] = true;
    o['characterData'] = characterData;
    o['subtree'] = false;
    o['attributeOldValue'] = attributeOldValue;
    o['characterDataOldValue'] = characterDataOldValue;
    o['attributeFilter'] = attributeFilter;
    this_1.observe(placementElement, o);
    tmp_0.h3p_1 = this_1;
    window.addEventListener('scroll', this.i3p_1);
    window.addEventListener('resize', this.i3p_1);
  };
  protoOf(PopupPlacementStrategy$Companion$of$1).r3o = function () {
    var placementBounds = ensureNotNull(this.e3p_1).getBoundingClientRect();
    var popupBounds = ensureNotNull(this.f3p_1).getBoundingClientRect();
    var popupWidth = popupBounds.width;
    var popupHeight = popupBounds.height;
    return new PositionAndPlacement(this.l3p(this.j3p_1, popupWidth, popupHeight, placementBounds, this.k3p_1), this.j3p_1);
  };
  protoOf(PopupPlacementStrategy$Companion$of$1).v1z = function () {
    this.e3p_1 = null;
    this.f3p_1 = null;
    ensureNotNull(this.g3p_1).o17();
    this.g3p_1 = null;
    ensureNotNull(this.h3p_1).disconnect();
    this.h3p_1 = null;
    window.removeEventListener('scroll', this.i3p_1);
    window.removeEventListener('resize', this.i3p_1);
  };
  function Position(top, left) {
    this.x3o_1 = top;
    this.y3o_1 = left;
  }
  function PositionAndPlacement(position, placement) {
    placement = placement === VOID ? null : placement;
    this.s3o_1 = position;
    this.t3o_1 = placement;
  }
  function Companion_1() {
  }
  protoOf(Companion_1).m3p = function (placement, offsetPixels) {
    return new PopupPlacementStrategy$Companion$of$1(placement, offsetPixels);
  };
  protoOf(Companion_1).q3m = function (placement, offsetPixels, $super) {
    offsetPixels = offsetPixels === VOID ? 15 : offsetPixels;
    return $super === VOID ? this.m3p(placement, offsetPixels) : $super.m3p.call(this, placement, offsetPixels);
  };
  var Companion_instance_17;
  function Companion_getInstance_2() {
    return Companion_instance_17;
  }
  function PopupPlacementStrategy() {
  }
  protoOf(PopupPlacementStrategy).l3p = function (placement, popupWidth, popupHeight, placementBounds, offsetPixels) {
    var offsetPixels_0 = numberToDouble(offsetPixels);
    var tmp;
    switch (placement.u9_1) {
      case 0:
        tmp = new Position(get_px(placementBounds.top - offsetPixels_0 - popupHeight), get_px(placementBounds.left));
        break;
      case 1:
        tmp = new Position(get_px(placementBounds.top - offsetPixels_0 - popupHeight), get_px(placementBounds.left - (popupWidth - placementBounds.width) / 2));
        break;
      case 2:
        tmp = new Position(get_px(placementBounds.top - offsetPixels_0 - popupHeight), get_px(placementBounds.left + (placementBounds.width - popupWidth)));
        break;
      case 3:
        tmp = new Position(get_px(placementBounds.top), get_px(placementBounds.left - offsetPixels_0 - popupWidth));
        break;
      case 4:
        tmp = new Position(get_px(placementBounds.top), get_px(placementBounds.right + offsetPixels_0));
        break;
      case 5:
        tmp = new Position(get_px(placementBounds.top - (popupHeight - placementBounds.height) / 2), get_px(placementBounds.left - offsetPixels_0 - popupWidth));
        break;
      case 6:
        tmp = new Position(get_px(placementBounds.top - (popupHeight - placementBounds.height) / 2), get_px(placementBounds.right + offsetPixels_0));
        break;
      case 7:
        tmp = new Position(get_px(placementBounds.top + (placementBounds.height - popupHeight)), get_px(placementBounds.left - offsetPixels_0 - popupWidth));
        break;
      case 8:
        tmp = new Position(get_px(placementBounds.top + (placementBounds.height - popupHeight)), get_px(placementBounds.right + offsetPixels_0));
        break;
      case 9:
        tmp = new Position(get_px(placementBounds.bottom + offsetPixels_0), get_px(placementBounds.left));
        break;
      case 10:
        tmp = new Position(get_px(placementBounds.bottom + offsetPixels_0), get_px(placementBounds.left - (popupWidth - placementBounds.width) / 2));
        break;
      case 11:
        tmp = new Position(get_px(placementBounds.bottom + offsetPixels_0), get_px(placementBounds.left + (placementBounds.width - popupWidth)));
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  function PopupScope(placement) {
    this.n3p_1 = placement;
  }
  function updatePosition(_this__u8e3s4, position) {
    _init_properties_Popup_kt__lluomy();
    _this__u8e3s4.style.top = '' + position.x3o_1;
    _this__u8e3s4.style.left = '' + position.y3o_1;
  }
  function PopupStyle$delegate$lambda($this$base) {
    _init_properties_Popup_kt__lluomy();
    return transition(Companion_instance, [CSSTransition_init_$Create$('opacity', PopupVars_getInstance().e3h().o2u())]);
  }
  function PopupPlacement_Bottom_getInstance() {
    PopupPlacement_initEntries();
    return PopupPlacement_Bottom_instance;
  }
  function PopupPlacement_BottomRight_getInstance() {
    PopupPlacement_initEntries();
    return PopupPlacement_BottomRight_instance;
  }
  function PopupStyle$factory() {
    return getPropertyCallableRef('PopupStyle', 0, KProperty0, function () {
      return get_PopupStyle();
    }, null);
  }
  function TransitionDuration$factory_1() {
    return getPropertyCallableRef('TransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.e3h();
    }, null);
  }
  var properties_initialized_Popup_kt_wwy6qs;
  function _init_properties_Popup_kt__lluomy() {
    if (!properties_initialized_Popup_kt_wwy6qs) {
      properties_initialized_Popup_kt_wwy6qs = true;
      var tmp = Companion_instance_5;
      PopupStyle$delegate = base(tmp, VOID, 'silk', PopupStyle$delegate$lambda);
    }
  }
  function get_TRIANGLE_WIDTH() {
    _init_properties_Tooltip_kt__palx2n();
    return TRIANGLE_WIDTH;
  }
  var TRIANGLE_WIDTH;
  function get_TRIANGLE_WIDTH_2X() {
    _init_properties_Tooltip_kt__palx2n();
    return TRIANGLE_WIDTH_2X;
  }
  var TRIANGLE_WIDTH_2X;
  function get_TooltipStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipStyle$delegate.u2u(null, TooltipStyle$factory());
  }
  var TooltipStyle$delegate;
  function get_TooltipArrowStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipArrowStyle$delegate.u2u(null, TooltipArrowStyle$factory());
  }
  var TooltipArrowStyle$delegate;
  function get_TopLeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopLeftTooltipArrowVariant$delegate.u2u(null, TopLeftTooltipArrowVariant$factory());
  }
  var TopLeftTooltipArrowVariant$delegate;
  function get_TopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopTooltipArrowVariant$delegate.u2u(null, TopTooltipArrowVariant$factory());
  }
  var TopTooltipArrowVariant$delegate;
  function get_TopRightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopRightTooltipArrowVariant$delegate.u2u(null, TopRightTooltipArrowVariant$factory());
  }
  var TopRightTooltipArrowVariant$delegate;
  function get_LeftTopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftTopTooltipArrowVariant$delegate.u2u(null, LeftTopTooltipArrowVariant$factory());
  }
  var LeftTopTooltipArrowVariant$delegate;
  function get_LeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftTooltipArrowVariant$delegate.u2u(null, LeftTooltipArrowVariant$factory());
  }
  var LeftTooltipArrowVariant$delegate;
  function get_LeftBottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftBottomTooltipArrowVariant$delegate.u2u(null, LeftBottomTooltipArrowVariant$factory());
  }
  var LeftBottomTooltipArrowVariant$delegate;
  function get_RightTopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightTopTooltipArrowVariant$delegate.u2u(null, RightTopTooltipArrowVariant$factory());
  }
  var RightTopTooltipArrowVariant$delegate;
  function get_RightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightTooltipArrowVariant$delegate.u2u(null, RightTooltipArrowVariant$factory());
  }
  var RightTooltipArrowVariant$delegate;
  function get_RightBottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightBottomTooltipArrowVariant$delegate.u2u(null, RightBottomTooltipArrowVariant$factory());
  }
  var RightBottomTooltipArrowVariant$delegate;
  function get_BottomLeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomLeftTooltipArrowVariant$delegate.u2u(null, BottomLeftTooltipArrowVariant$factory());
  }
  var BottomLeftTooltipArrowVariant$delegate;
  function get_BottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomTooltipArrowVariant$delegate.u2u(null, BottomTooltipArrowVariant$factory());
  }
  var BottomTooltipArrowVariant$delegate;
  function get_BottomRightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomRightTooltipArrowVariant$delegate.u2u(null, BottomRightTooltipArrowVariant$factory());
  }
  var BottomRightTooltipArrowVariant$delegate;
  function get_TooltipTextContainerStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipTextContainerStyle;
  }
  var TooltipTextContainerStyle;
  function TooltipVars() {
    TooltipVars_instance = this;
    this.o3p_1 = StyleVariable('silk');
    this.p3p_1 = StyleVariable('silk');
  }
  protoOf(TooltipVars).x3e = function () {
    return this.o3p_1.u2u(this, BackgroundColor$factory_2());
  };
  protoOf(TooltipVars).v3e = function () {
    return this.p3p_1.u2u(this, Color$factory_3());
  };
  var TooltipVars_instance;
  function TooltipVars_getInstance() {
    if (TooltipVars_instance == null)
      new TooltipVars();
    return TooltipVars_instance;
  }
  function triangleDown(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleDown$lambda(color));
  }
  function triangleLeft(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleLeft$lambda(color));
  }
  function triangleRight(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleRight$lambda(color));
  }
  function triangleUp(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleUp$lambda(color));
  }
  function Tooltip(target, text, modifier, variant, placement, hasArrow, offsetPixels, placementTarget, showDelayMs, hideDelayMs, keepOpenStrategy, ref, $composer, $changed, $changed1, $default) {
    _init_properties_Tooltip_kt__palx2n();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var placement_0 = {_v: placement};
    var hasArrow_0 = {_v: hasArrow};
    var offsetPixels_0 = {_v: offsetPixels};
    var placementTarget_0 = {_v: placementTarget};
    var showDelayMs_0 = {_v: showDelayMs};
    var hideDelayMs_0 = {_v: hideDelayMs};
    var keepOpenStrategy_0 = {_v: keepOpenStrategy};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.r1o(615678963);
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (!(($default & 4) === 0)) {
      modifier_0._v = Companion_instance;
    }
    if (!(($default & 8) === 0)) {
      variant_0._v = null;
    }
    if (!(($default & 16) === 0)) {
      placement_0._v = PopupPlacement_Bottom_getInstance();
    }
    if (!(($default & 32) === 0)) {
      hasArrow_0._v = true;
    }
    if (!(($default & 64) === 0)) {
      offsetPixels_0._v = get_DEFAULT_POPUP_OFFSET_PX();
    }
    if (!(($default & 128) === 0)) {
      placementTarget_0._v = null;
    }
    if (!(($default & 256) === 0)) {
      showDelayMs_0._v = 0;
    }
    if (!(($default & 512) === 0)) {
      hideDelayMs_0._v = 0;
    }
    if (!(($default & 1024) === 0)) {
      keepOpenStrategy_0._v = null;
    }
    if (!(($default & 2048) === 0)) {
      ref_0._v = null;
    }
    if (isTraceInProgress()) {
      traceEventStart(615678963, $dirty, $dirty1, 'com.varabyte.kobweb.silk.components.overlay.Tooltip (Tooltip.kt:246)');
    }
    $composer_0.z1m(-1592962979);
    // Inline function 'androidx.compose.runtime.cache' call
    var this_0 = $composer_0;
    var invalid = (($changed & 57344 ^ 24576) > 16384 ? $composer_0.s1e(placement_0._v) : false) ? true : ($changed & 24576) === 16384;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = this_0.d1o();
    var tmp;
    if (invalid ? true : it === Companion_getInstance().r1h_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.Tooltip.<anonymous>' call
      var value = Companion_instance_17.m3p(placement_0._v, offsetPixels_0._v);
      this_0.j1o(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.a1n();
    var placementStrategy = tmp0_group;
    AdvancedTooltip(target, text, modifier_0._v, Companion_instance, variant_0._v, hasArrow_0._v, showDelayMs_0._v, hideDelayMs_0._v, null, placementTarget_0._v, placementStrategy, keepOpenStrategy_0._v, ref_0._v, $composer_0, 1174409736 | 112 & $dirty | 0 | 57344 & $dirty << 3 | 458752 & $dirty | 3670016 & $dirty >> 6 | 29360128 & $dirty >> 6, 576 | 896 & $dirty1 << 3, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp1_safe_receiver = $composer_0.s1o();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.p1t(Tooltip$lambda(target, text, modifier_0, variant_0, placement_0, hasArrow_0, offsetPixels_0, placementTarget_0, showDelayMs_0, hideDelayMs_0, keepOpenStrategy_0, ref_0, $changed, $changed1, $default));
    }
  }
  function AdvancedTooltip(target, text, modifier, hiddenModifier, variant, hasArrow, showDelayMs, hideDelayMs, openCloseStrategy, placementTarget, placementStrategy, keepOpenStrategy, ref, $composer, $changed, $changed1, $default) {
    _init_properties_Tooltip_kt__palx2n();
    var modifier_0 = {_v: modifier};
    var hiddenModifier_0 = {_v: hiddenModifier};
    var variant_0 = {_v: variant};
    var hasArrow_0 = {_v: hasArrow};
    var showDelayMs_0 = {_v: showDelayMs};
    var hideDelayMs_0 = {_v: hideDelayMs};
    var openCloseStrategy_0 = {_v: openCloseStrategy};
    var placementTarget_0 = {_v: placementTarget};
    var placementStrategy_0 = {_v: placementStrategy};
    var keepOpenStrategy_0 = {_v: keepOpenStrategy};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.r1o(-1750516105);
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (!(($default & 4) === 0)) {
      modifier_0._v = Companion_instance;
    }
    if (!(($default & 8) === 0)) {
      hiddenModifier_0._v = Companion_instance;
    }
    if (!(($default & 16) === 0)) {
      variant_0._v = null;
    }
    if (!(($default & 32) === 0)) {
      hasArrow_0._v = true;
    }
    if (!(($default & 64) === 0)) {
      showDelayMs_0._v = 0;
    }
    if (!(($default & 128) === 0)) {
      hideDelayMs_0._v = 0;
    }
    if (!(($default & 256) === 0)) {
      openCloseStrategy_0._v = null;
    }
    if (!(($default & 512) === 0)) {
      placementTarget_0._v = null;
    }
    if (!(($default & 1024) === 0)) {
      placementStrategy_0._v = null;
    }
    if (!(($default & 2048) === 0)) {
      keepOpenStrategy_0._v = null;
    }
    if (!(($default & 4096) === 0)) {
      ref_0._v = null;
    }
    if (isTraceInProgress()) {
      traceEventStart(-1750516105, $dirty, $dirty1, 'com.varabyte.kobweb.silk.components.overlay.AdvancedTooltip (Tooltip.kt:347)');
    }
    var tmp = modifier_0._v;
    var tmp_0 = hiddenModifier_0._v;
    var tmp_1 = variant_0._v;
    var tmp_2 = hasArrow_0._v;
    var tmp_3 = showDelayMs_0._v;
    var tmp_4 = hideDelayMs_0._v;
    var tmp_5 = openCloseStrategy_0._v;
    var tmp_6 = placementTarget_0._v;
    var tmp_7 = placementStrategy_0._v;
    var tmp_8 = keepOpenStrategy_0._v;
    var tmp_9 = ref_0._v;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedTooltip.<anonymous>' call
    var tmp_10 = $composer_0;
    var dispatchReceiver = composableLambda(tmp_10, 1808558052, true, AdvancedTooltip$lambda(text));
    // Inline function 'androidx.compose.runtime.remember' call
    var $composer_1 = $composer_0;
    $composer_1.z1m(1157296644);
    sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_1.s1e(dispatchReceiver);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.d1o();
    var tmp_11;
    if (invalid ? true : it === Companion_getInstance().r1h_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedTooltip.<anonymous>.<anonymous>' call
      var value = ComposableLambda$invoke$ref_27(dispatchReceiver);
      $composer_1.j1o(value);
      tmp_11 = value;
    } else {
      tmp_11 = it;
    }
    var tmp_12 = tmp_11;
    var tmp0 = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
    $composer_1.a1n();
    AdvancedTooltip_0(target, tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp0, $composer_0, 150995528 | 7168 & $dirty >> 3 | 57344 & $dirty >> 3 | 458752 & $dirty >> 3 | 3670016 & $dirty >> 3 | 1879048192 & $dirty1 << 27, 456 | 112 & $dirty1 >> 3, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_safe_receiver = $composer_0.s1o();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.p1t(AdvancedTooltip$lambda_0(target, text, modifier_0, hiddenModifier_0, variant_0, hasArrow_0, showDelayMs_0, hideDelayMs_0, openCloseStrategy_0, placementTarget_0, placementStrategy_0, keepOpenStrategy_0, ref_0, $changed, $changed1, $default));
    }
  }
  function AdvancedTooltip_0(target, modifier, hiddenModifier, variant, hasArrow, showDelayMs, hideDelayMs, openCloseStrategy, placementTarget, placementStrategy, keepOpenStrategy, ref, content, $composer, $changed, $changed1, $default) {
    _init_properties_Tooltip_kt__palx2n();
    var modifier_0 = {_v: modifier};
    var hiddenModifier_0 = {_v: hiddenModifier};
    var variant_0 = {_v: variant};
    var hasArrow_0 = {_v: hasArrow};
    var showDelayMs_0 = {_v: showDelayMs};
    var hideDelayMs_0 = {_v: hideDelayMs};
    var openCloseStrategy_0 = {_v: openCloseStrategy};
    var placementTarget_0 = {_v: placementTarget};
    var placementStrategy_0 = {_v: placementStrategy};
    var keepOpenStrategy_0 = {_v: keepOpenStrategy};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.r1o(-553325155);
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (!(($default & 2) === 0)) {
      modifier_0._v = Companion_instance;
    }
    if (!(($default & 4) === 0)) {
      hiddenModifier_0._v = Companion_instance;
    }
    if (!(($default & 8) === 0)) {
      variant_0._v = null;
    }
    if (!(($default & 16) === 0)) {
      hasArrow_0._v = true;
    }
    if (!(($default & 32) === 0)) {
      showDelayMs_0._v = 0;
    }
    if (!(($default & 64) === 0)) {
      hideDelayMs_0._v = 0;
    }
    if (!(($default & 128) === 0)) {
      openCloseStrategy_0._v = null;
    }
    if (!(($default & 256) === 0)) {
      placementTarget_0._v = null;
    }
    if (!(($default & 512) === 0)) {
      placementStrategy_0._v = null;
    }
    if (!(($default & 1024) === 0)) {
      keepOpenStrategy_0._v = null;
    }
    if (!(($default & 2048) === 0)) {
      ref_0._v = null;
    }
    if (isTraceInProgress()) {
      traceEventStart(-553325155, $dirty, $dirty1, 'com.varabyte.kobweb.silk.components.overlay.AdvancedTooltip (Tooltip.kt:286)');
    }
    $composer_0.z1m(-1600460472);
    // Inline function 'androidx.compose.runtime.cache' call
    var this_0 = $composer_0;
    var invalid = $composer_0.s1e(keepOpenStrategy_0._v);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = this_0.d1o();
    var tmp;
    if (invalid ? true : it === Companion_getInstance().r1h_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedTooltip.<anonymous>' call
      var tmp0_elvis_lhs = keepOpenStrategy_0._v;
      var value = tmp0_elvis_lhs == null ? never(Companion_instance_15) : tmp0_elvis_lhs;
      this_0.j1o(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.a1n();
    var keepOpenStrategy_1 = tmp0_group;
    var tmp_1 = toModifier(get_TooltipStyle(), [variant_0._v], $composer_0, 0).e34(modifier_0._v);
    var tmp_2 = hiddenModifier_0._v;
    var tmp_3 = showDelayMs_0._v;
    var tmp_4 = hideDelayMs_0._v;
    var tmp_5 = openCloseStrategy_0._v;
    var tmp_6 = placementTarget_0._v;
    var tmp_7 = placementStrategy_0._v;
    var tmp_8 = ref_0._v;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedTooltip.<anonymous>' call
    var tmp_9 = $composer_0;
    var dispatchReceiver = composableLambda(tmp_9, 1036834515, true, AdvancedTooltip$lambda_1(content, hasArrow_0));
    // Inline function 'androidx.compose.runtime.remember' call
    var $composer_1 = $composer_0;
    $composer_1.z1m(1157296644);
    sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = $composer_1.s1e(dispatchReceiver);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_1.d1o();
    var tmp_10;
    if (invalid_0 ? true : it_0 === Companion_getInstance().r1h_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedTooltip.<anonymous>.<anonymous>' call
      var value_0 = ComposableLambda$invoke$ref_28(dispatchReceiver);
      $composer_1.j1o(value_0);
      tmp_10 = value_0;
    } else {
      tmp_10 = it_0;
    }
    var tmp_11 = tmp_10;
    var tmp0 = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
    $composer_1.a1n();
    AdvancedPopover(target, tmp_1, tmp_2, null, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, keepOpenStrategy_1, tmp_8, tmp0, $composer_0, 1092619848 | 57344 & $dirty >> 3 | 458752 & $dirty >> 3 | 234881024 & $dirty >> 3, 56 | 14 & $dirty1 >> 3, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp1_safe_receiver = $composer_0.s1o();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.p1t(AdvancedTooltip$lambda_2(target, modifier_0, hiddenModifier_0, variant_0, hasArrow_0, showDelayMs_0, hideDelayMs_0, openCloseStrategy_0, placementTarget_0, placementStrategy_0, keepOpenStrategy_0, ref_0, content, $changed, $changed1, $default));
    }
  }
  function TooltipStyle$delegate$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'relative';
    return borderRadius(color(backgroundColor(position(tmp, tmp$ret$3), TooltipVars_getInstance().x3e().o2u()), TooltipVars_getInstance().v3e().o2u()), get_px(6));
  }
  function TooltipArrowStyle$delegate$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Absolute' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'absolute';
    var tmp_0 = position(tmp, tmp$ret$3);
    return border(tmp_0, TooltipArrowStyle$delegate$lambda$lambda);
  }
  function TooltipArrowStyle$delegate$lambda$lambda($this$border) {
    _init_properties_Tooltip_kt__palx2n();
    $this$border.u35(get_TRIANGLE_WIDTH());
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    $this$border.t35('solid');
    return Unit_instance;
  }
  function TopLeftTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_left = get_TRIANGLE_WIDTH_2X();
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(margin_1(Companion_instance, tmp2_top, VOID, VOID, tmp1_left), get_px(0)), TooltipVars_getInstance().x3e().o2u());
  }
  function TopTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_left = unaryMinus(get_TRIANGLE_WIDTH());
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(left(margin_1(Companion_instance, tmp2_top, VOID, VOID, tmp1_left), get_percent(50)), get_px(0)), TooltipVars_getInstance().x3e().o2u());
  }
  function TopRightTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_right = get_TRIANGLE_WIDTH_2X();
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(right(margin_1(Companion_instance, tmp2_top, tmp1_right), get_px(0)), get_px(0)), TooltipVars_getInstance().x3e().o2u());
  }
  function LeftTopTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(top(left(margin_1(Companion_instance, get_TRIANGLE_WIDTH_2X(), VOID, VOID, unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().x3e().o2u());
  }
  function LeftTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(top(left(margin_1(Companion_instance, unaryMinus(get_TRIANGLE_WIDTH()), VOID, VOID, unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_percent(50)), TooltipVars_getInstance().x3e().o2u());
  }
  function LeftBottomTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(bottom(left(margin_1(Companion_instance, VOID, VOID, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().x3e().o2u());
  }
  function RightTopTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleRight(top(right(margin_1(Companion_instance, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().x3e().o2u());
  }
  function RightTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleRight(top(right(margin_1(Companion_instance, unaryMinus(get_TRIANGLE_WIDTH()), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_percent(50)), TooltipVars_getInstance().x3e().o2u());
  }
  function RightBottomTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_bottom = get_TRIANGLE_WIDTH_2X();
    var tmp2_right = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleRight(bottom(right(margin_1(Companion_instance, VOID, tmp2_right, tmp1_bottom), get_px(0)), get_px(0)), TooltipVars_getInstance().x3e().o2u());
  }
  function BottomLeftTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_left = get_TRIANGLE_WIDTH_2X();
    var tmp2_bottom = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleUp(bottom(left(margin_1(Companion_instance, VOID, VOID, tmp2_bottom, tmp1_left), get_px(0)), get_px(0)), TooltipVars_getInstance().x3e().o2u());
  }
  function BottomTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_left = unaryMinus(get_TRIANGLE_WIDTH());
    var tmp2_bottom = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleUp(bottom(left(margin_1(Companion_instance, VOID, VOID, tmp2_bottom, tmp1_left), get_percent(50)), get_px(0)), TooltipVars_getInstance().x3e().o2u());
  }
  function BottomRightTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleUp(bottom(right(margin_1(Companion_instance, VOID, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().x3e().o2u());
  }
  function TooltipTextContainerStyle$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    return padding(Companion_instance, get_px(5));
  }
  function triangleDown$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.j2m('border-color', 'transparent transparent ' + $color + ' transparent');
      return Unit_instance;
    };
  }
  function triangleLeft$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.j2m('border-color', 'transparent ' + $color + ' transparent transparent');
      return Unit_instance;
    };
  }
  function triangleRight$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.j2m('border-color', 'transparent transparent transparent ' + $color);
      return Unit_instance;
    };
  }
  function triangleUp$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.j2m('border-color', '' + $color + ' transparent transparent transparent');
      return Unit_instance;
    };
  }
  function Tooltip$lambda($target, $text, $modifier, $variant, $placement, $hasArrow, $offsetPixels, $placementTarget, $showDelayMs, $hideDelayMs, $keepOpenStrategy, $ref, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      Tooltip($target, $text, $modifier._v, $variant._v, $placement._v, $hasArrow._v, $offsetPixels._v, $placementTarget._v, $showDelayMs._v, $hideDelayMs._v, $keepOpenStrategy._v, $ref._v, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_instance;
    };
  }
  function AdvancedTooltip$lambda$lambda($text) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1488025435, $changed, -1, 'com.varabyte.kobweb.silk.components.overlay.AdvancedTooltip.<anonymous>.<anonymous> (Tooltip.kt:363)');
      }
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = split($text, ['\n']).k();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedTooltip.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(element) > 0) {
          $composer_0.z1m(1593247616);
          SpanText(element, null, null, null, $composer_0, 0, 14);
          $composer_0.a1n();
        } else {
          $composer_0.z1m(1593247636);
          Br(null, $composer_0, 0, 1);
          $composer_0.a1n();
        }
      }
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_26($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.r2h(p0, p1, p2);
    };
  }
  function AdvancedTooltip$lambda($text) {
    return function ($this$AdvancedTooltip, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.u1m()) {
        if (isTraceInProgress()) {
          traceEventStart(1808558052, $changed, -1, 'com.varabyte.kobweb.silk.components.overlay.AdvancedTooltip.<anonymous> (Tooltip.kt:362)');
        }
        var tmp_0 = toModifier(get_TooltipTextContainerStyle(), [], $composer_0, 64);
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedTooltip.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, 1488025435, true, AdvancedTooltip$lambda$lambda($text));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.z1m(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.s1e(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.d1o();
        var tmp_2;
        if (invalid ? true : it === Companion_getInstance().r1h_1) {
          // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedTooltip.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_26(dispatchReceiver);
          $composer_1.j1o(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.a1n();
        Column(tmp_0, null, null, null, tmp0, $composer_0, 24584, 14);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_instance;
        }
        tmp = tmp_4;
      } else {
        $composer_0.l1h();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_27($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.r2h(p0, p1, p2);
    };
  }
  function AdvancedTooltip$lambda_0($target, $text, $modifier, $hiddenModifier, $variant, $hasArrow, $showDelayMs, $hideDelayMs, $openCloseStrategy, $placementTarget, $placementStrategy, $keepOpenStrategy, $ref, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      AdvancedTooltip($target, $text, $modifier._v, $hiddenModifier._v, $variant._v, $hasArrow._v, $showDelayMs._v, $hideDelayMs._v, $openCloseStrategy._v, $placementTarget._v, $placementStrategy._v, $keepOpenStrategy._v, $ref._v, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_instance;
    };
  }
  function AdvancedTooltip$lambda_1($content, $hasArrow) {
    return function ($this$AdvancedPopover, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.s1e($this$AdvancedPopover) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.u1m()) {
        if (isTraceInProgress()) {
          traceEventStart(1036834515, $dirty, -1, 'com.varabyte.kobweb.silk.components.overlay.AdvancedTooltip.<anonymous> (Tooltip.kt:301)');
        }
        $content($this$AdvancedPopover, $composer_0, 14 & $dirty);
        var placement = $this$AdvancedPopover.n3p_1;
        if ($hasArrow._v ? !(placement == null) : false) {
          var tmp_1 = get_TooltipArrowStyle();
          var tmp_2;
          switch (placement.u9_1) {
            case 0:
              tmp_2 = get_BottomLeftTooltipArrowVariant();
              break;
            case 1:
              tmp_2 = get_BottomTooltipArrowVariant();
              break;
            case 2:
              tmp_2 = get_BottomRightTooltipArrowVariant();
              break;
            case 3:
              tmp_2 = get_RightTopTooltipArrowVariant();
              break;
            case 5:
              tmp_2 = get_RightTooltipArrowVariant();
              break;
            case 7:
              tmp_2 = get_RightBottomTooltipArrowVariant();
              break;
            case 4:
              tmp_2 = get_LeftTopTooltipArrowVariant();
              break;
            case 6:
              tmp_2 = get_LeftTooltipArrowVariant();
              break;
            case 8:
              tmp_2 = get_LeftBottomTooltipArrowVariant();
              break;
            case 9:
              tmp_2 = get_TopLeftTooltipArrowVariant();
              break;
            case 10:
              tmp_2 = get_TopTooltipArrowVariant();
              break;
            case 11:
              tmp_2 = get_TopRightTooltipArrowVariant();
              break;
            default:
              noWhenBranchMatchedException();
              break;
          }
          var tmp_3 = toModifier(tmp_1, [tmp_2], $composer_0, 0);
          Box(tmp_3, null, null, null, $composer_0, 8, 14);
        }
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_instance;
        }
        tmp_0 = tmp_4;
      } else {
        $composer_0.l1h();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_28($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.r2h(p0, p1, p2);
    };
  }
  function AdvancedTooltip$lambda_2($target, $modifier, $hiddenModifier, $variant, $hasArrow, $showDelayMs, $hideDelayMs, $openCloseStrategy, $placementTarget, $placementStrategy, $keepOpenStrategy, $ref, $content, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      AdvancedTooltip_0($target, $modifier._v, $hiddenModifier._v, $variant._v, $hasArrow._v, $showDelayMs._v, $hideDelayMs._v, $openCloseStrategy._v, $placementTarget._v, $placementStrategy._v, $keepOpenStrategy._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_instance;
    };
  }
  function TooltipStyle$factory() {
    return getPropertyCallableRef('TooltipStyle', 0, KProperty0, function () {
      return get_TooltipStyle();
    }, null);
  }
  function TooltipArrowStyle$factory() {
    return getPropertyCallableRef('TooltipArrowStyle', 0, KProperty0, function () {
      return get_TooltipArrowStyle();
    }, null);
  }
  function TopLeftTooltipArrowVariant$factory() {
    return getPropertyCallableRef('TopLeftTooltipArrowVariant', 0, KProperty0, function () {
      return get_TopLeftTooltipArrowVariant();
    }, null);
  }
  function TopTooltipArrowVariant$factory() {
    return getPropertyCallableRef('TopTooltipArrowVariant', 0, KProperty0, function () {
      return get_TopTooltipArrowVariant();
    }, null);
  }
  function TopRightTooltipArrowVariant$factory() {
    return getPropertyCallableRef('TopRightTooltipArrowVariant', 0, KProperty0, function () {
      return get_TopRightTooltipArrowVariant();
    }, null);
  }
  function LeftTopTooltipArrowVariant$factory() {
    return getPropertyCallableRef('LeftTopTooltipArrowVariant', 0, KProperty0, function () {
      return get_LeftTopTooltipArrowVariant();
    }, null);
  }
  function LeftTooltipArrowVariant$factory() {
    return getPropertyCallableRef('LeftTooltipArrowVariant', 0, KProperty0, function () {
      return get_LeftTooltipArrowVariant();
    }, null);
  }
  function LeftBottomTooltipArrowVariant$factory() {
    return getPropertyCallableRef('LeftBottomTooltipArrowVariant', 0, KProperty0, function () {
      return get_LeftBottomTooltipArrowVariant();
    }, null);
  }
  function RightTopTooltipArrowVariant$factory() {
    return getPropertyCallableRef('RightTopTooltipArrowVariant', 0, KProperty0, function () {
      return get_RightTopTooltipArrowVariant();
    }, null);
  }
  function RightTooltipArrowVariant$factory() {
    return getPropertyCallableRef('RightTooltipArrowVariant', 0, KProperty0, function () {
      return get_RightTooltipArrowVariant();
    }, null);
  }
  function RightBottomTooltipArrowVariant$factory() {
    return getPropertyCallableRef('RightBottomTooltipArrowVariant', 0, KProperty0, function () {
      return get_RightBottomTooltipArrowVariant();
    }, null);
  }
  function BottomLeftTooltipArrowVariant$factory() {
    return getPropertyCallableRef('BottomLeftTooltipArrowVariant', 0, KProperty0, function () {
      return get_BottomLeftTooltipArrowVariant();
    }, null);
  }
  function BottomTooltipArrowVariant$factory() {
    return getPropertyCallableRef('BottomTooltipArrowVariant', 0, KProperty0, function () {
      return get_BottomTooltipArrowVariant();
    }, null);
  }
  function BottomRightTooltipArrowVariant$factory() {
    return getPropertyCallableRef('BottomRightTooltipArrowVariant', 0, KProperty0, function () {
      return get_BottomRightTooltipArrowVariant();
    }, null);
  }
  function BackgroundColor$factory_2() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.x3e();
    }, null);
  }
  function Color$factory_3() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.v3e();
    }, null);
  }
  var properties_initialized_Tooltip_kt_68t07n;
  function _init_properties_Tooltip_kt__palx2n() {
    if (!properties_initialized_Tooltip_kt_68t07n) {
      properties_initialized_Tooltip_kt_68t07n = true;
      TRIANGLE_WIDTH = get_px(5);
      TRIANGLE_WIDTH_2X = get_px(9);
      var tmp = Companion_instance_5;
      TooltipStyle$delegate = base(tmp, VOID, 'silk', TooltipStyle$delegate$lambda);
      var tmp_0 = Companion_instance_5;
      TooltipArrowStyle$delegate = base(tmp_0, VOID, 'silk', TooltipArrowStyle$delegate$lambda);
      var tmp_1 = get_TooltipArrowStyle();
      TopLeftTooltipArrowVariant$delegate = addVariantBase(tmp_1, VOID, TopLeftTooltipArrowVariant$delegate$lambda);
      var tmp_2 = get_TooltipArrowStyle();
      TopTooltipArrowVariant$delegate = addVariantBase(tmp_2, VOID, TopTooltipArrowVariant$delegate$lambda);
      var tmp_3 = get_TooltipArrowStyle();
      TopRightTooltipArrowVariant$delegate = addVariantBase(tmp_3, VOID, TopRightTooltipArrowVariant$delegate$lambda);
      var tmp_4 = get_TooltipArrowStyle();
      LeftTopTooltipArrowVariant$delegate = addVariantBase(tmp_4, VOID, LeftTopTooltipArrowVariant$delegate$lambda);
      var tmp_5 = get_TooltipArrowStyle();
      LeftTooltipArrowVariant$delegate = addVariantBase(tmp_5, VOID, LeftTooltipArrowVariant$delegate$lambda);
      var tmp_6 = get_TooltipArrowStyle();
      LeftBottomTooltipArrowVariant$delegate = addVariantBase(tmp_6, VOID, LeftBottomTooltipArrowVariant$delegate$lambda);
      var tmp_7 = get_TooltipArrowStyle();
      RightTopTooltipArrowVariant$delegate = addVariantBase(tmp_7, VOID, RightTopTooltipArrowVariant$delegate$lambda);
      var tmp_8 = get_TooltipArrowStyle();
      RightTooltipArrowVariant$delegate = addVariantBase(tmp_8, VOID, RightTooltipArrowVariant$delegate$lambda);
      var tmp_9 = get_TooltipArrowStyle();
      RightBottomTooltipArrowVariant$delegate = addVariantBase(tmp_9, VOID, RightBottomTooltipArrowVariant$delegate$lambda);
      var tmp_10 = get_TooltipArrowStyle();
      BottomLeftTooltipArrowVariant$delegate = addVariantBase(tmp_10, VOID, BottomLeftTooltipArrowVariant$delegate$lambda);
      var tmp_11 = get_TooltipArrowStyle();
      BottomTooltipArrowVariant$delegate = addVariantBase(tmp_11, VOID, BottomTooltipArrowVariant$delegate$lambda);
      var tmp_12 = get_TooltipArrowStyle();
      BottomRightTooltipArrowVariant$delegate = addVariantBase(tmp_12, VOID, BottomRightTooltipArrowVariant$delegate$lambda);
      var tmp_13 = Companion_instance_5;
      TooltipTextContainerStyle = base_0(tmp_13, 'tooltip-text', VOID, TooltipTextContainerStyle$lambda);
    }
  }
  function get_DisabledStyle() {
    _init_properties_CommonStyles_kt__a7wisz();
    return DisabledStyle$delegate.u2u(null, DisabledStyle$factory());
  }
  var DisabledStyle$delegate;
  function get_SmoothColorTransitionDurationVar() {
    _init_properties_CommonStyles_kt__a7wisz();
    return SmoothColorTransitionDurationVar$delegate.u2u(null, SmoothColorTransitionDurationVar$factory());
  }
  var SmoothColorTransitionDurationVar$delegate;
  function get_SmoothColorStyle() {
    _init_properties_CommonStyles_kt__a7wisz();
    return SmoothColorStyle$delegate.u2u(null, SmoothColorStyle$factory());
  }
  var SmoothColorStyle$delegate;
  function DisabledStyle$delegate$lambda($composer, $changed) {
    _init_properties_CommonStyles_kt__a7wisz();
    var $composer_0 = $composer;
    $composer_0.z1m(1529746738);
    if (isTraceInProgress()) {
      traceEventStart(1529746738, $changed, -1, 'com.varabyte.kobweb.silk.components.style.common.DisabledStyle$delegate.<anonymous> (CommonStyles.kt:17)');
    }
    var tmp0 = tabIndex(ariaDisabled(Companion_instance), -1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.a1n();
    return tmp0;
  }
  function DisabledStyle$delegate$lambda_0($this$base) {
    _init_properties_CommonStyles_kt__a7wisz();
    return cursor(opacity(Companion_instance, 0.5), Companion_instance_1.k2s());
  }
  function SmoothColorStyle$delegate$lambda($this$base) {
    _init_properties_CommonStyles_kt__a7wisz();
    return transition(Companion_instance, [CSSTransition_init_$Create$('background-color', get_SmoothColorTransitionDurationVar().o2u())]);
  }
  function DisabledStyle$factory() {
    return getPropertyCallableRef('DisabledStyle', 0, KProperty0, function () {
      return get_DisabledStyle();
    }, null);
  }
  function SmoothColorTransitionDurationVar$factory() {
    return getPropertyCallableRef('SmoothColorTransitionDurationVar', 0, KProperty0, function () {
      return get_SmoothColorTransitionDurationVar();
    }, null);
  }
  function SmoothColorStyle$factory() {
    return getPropertyCallableRef('SmoothColorStyle', 0, KProperty0, function () {
      return get_SmoothColorStyle();
    }, null);
  }
  var properties_initialized_CommonStyles_kt_zd2b1t;
  function _init_properties_CommonStyles_kt__a7wisz() {
    if (!properties_initialized_CommonStyles_kt_zd2b1t) {
      properties_initialized_CommonStyles_kt_zd2b1t = true;
      var tmp = Companion_instance_5;
      var tmp_0 = DisabledStyle$delegate$lambda;
      DisabledStyle$delegate = base_1(tmp, tmp_0, 'silk', DisabledStyle$delegate$lambda_0);
      var tmp0_defaultFallback = TransitionDurationVars_getInstance().u3e().o2u();
      SmoothColorTransitionDurationVar$delegate = StyleVariable_1(tmp0_defaultFallback, 'silk');
      var tmp_1 = Companion_instance_5;
      SmoothColorStyle$delegate = base(tmp_1, VOID, 'silk', SmoothColorStyle$delegate$lambda);
    }
  }
  function TransitionDurationVars() {
    TransitionDurationVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_ms(0);
    tmp.m3e_1 = StyleVariable_1(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_ms(50);
    tmp_0.n3e_1 = StyleVariable_1(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_ms(100);
    tmp_1.o3e_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_ms(150);
    tmp_2.p3e_1 = StyleVariable_1(tmp0_defaultFallback_2, 'silk');
    var tmp_3 = this;
    var tmp0_defaultFallback_3 = get_ms(200);
    tmp_3.q3e_1 = StyleVariable_1(tmp0_defaultFallback_3, 'silk');
    var tmp_4 = this;
    var tmp0_defaultFallback_4 = get_ms(300);
    tmp_4.r3e_1 = StyleVariable_1(tmp0_defaultFallback_4, 'silk');
    var tmp_5 = this;
    var tmp0_defaultFallback_5 = get_ms(400);
    tmp_5.s3e_1 = StyleVariable_1(tmp0_defaultFallback_5, 'silk');
    var tmp_6 = this;
    var tmp0_defaultFallback_6 = get_ms(500);
    tmp_6.t3e_1 = StyleVariable_1(tmp0_defaultFallback_6, 'silk');
  }
  protoOf(TransitionDurationVars).s3g = function () {
    return this.o3e_1.u2u(this, VeryFast$factory());
  };
  protoOf(TransitionDurationVars).n3i = function () {
    return this.p3e_1.u2u(this, Fast$factory());
  };
  protoOf(TransitionDurationVars).u3e = function () {
    return this.q3e_1.u2u(this, Normal$factory());
  };
  var TransitionDurationVars_instance;
  function TransitionDurationVars_getInstance() {
    if (TransitionDurationVars_instance == null)
      new TransitionDurationVars();
    return TransitionDurationVars_instance;
  }
  function VeryFast$factory() {
    return getPropertyCallableRef('VeryFast', 1, KProperty1, function (receiver) {
      return receiver.s3g();
    }, null);
  }
  function Fast$factory() {
    return getPropertyCallableRef('Fast', 1, KProperty1, function (receiver) {
      return receiver.n3i();
    }, null);
  }
  function Normal$factory() {
    return getPropertyCallableRef('Normal', 1, KProperty1, function (receiver) {
      return receiver.u3e();
    }, null);
  }
  function get_BackgroundColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return BackgroundColorVar$delegate.u2u(null, BackgroundColorVar$factory());
  }
  var BackgroundColorVar$delegate;
  function get_ColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return ColorVar$delegate.u2u(null, ColorVar$factory());
  }
  var ColorVar$delegate;
  function get_BorderColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return BorderColorVar$delegate.u2u(null, BorderColorVar$factory());
  }
  var BorderColorVar$delegate;
  function get_FocusOutlineColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return FocusOutlineColorVar$delegate.u2u(null, FocusOutlineColorVar$factory());
  }
  var FocusOutlineColorVar$delegate;
  function get_PlaceholderOpacityVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return PlaceholderOpacityVar$delegate.u2u(null, PlaceholderOpacityVar$factory());
  }
  var PlaceholderOpacityVar$delegate;
  function get_PlaceholderColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return PlaceholderColorVar$delegate.u2u(null, PlaceholderColorVar$factory());
  }
  var PlaceholderColorVar$delegate;
  function BackgroundColorVar$factory() {
    return getPropertyCallableRef('BackgroundColorVar', 0, KProperty0, function () {
      return get_BackgroundColorVar();
    }, null);
  }
  function ColorVar$factory() {
    return getPropertyCallableRef('ColorVar', 0, KProperty0, function () {
      return get_ColorVar();
    }, null);
  }
  function BorderColorVar$factory() {
    return getPropertyCallableRef('BorderColorVar', 0, KProperty0, function () {
      return get_BorderColorVar();
    }, null);
  }
  function FocusOutlineColorVar$factory() {
    return getPropertyCallableRef('FocusOutlineColorVar', 0, KProperty0, function () {
      return get_FocusOutlineColorVar();
    }, null);
  }
  function PlaceholderOpacityVar$factory() {
    return getPropertyCallableRef('PlaceholderOpacityVar', 0, KProperty0, function () {
      return get_PlaceholderOpacityVar();
    }, null);
  }
  function PlaceholderColorVar$factory() {
    return getPropertyCallableRef('PlaceholderColorVar', 0, KProperty0, function () {
      return get_PlaceholderColorVar();
    }, null);
  }
  var properties_initialized_ColorVars_kt_3y5hvl;
  function _init_properties_ColorVars_kt__w8x7ib() {
    if (!properties_initialized_ColorVars_kt_3y5hvl) {
      properties_initialized_ColorVars_kt_3y5hvl = true;
      BackgroundColorVar$delegate = StyleVariable('silk');
      ColorVar$delegate = StyleVariable('silk');
      BorderColorVar$delegate = StyleVariable('silk');
      FocusOutlineColorVar$delegate = StyleVariable('silk');
      PlaceholderOpacityVar$delegate = StyleVariable_2(1.0, 'silk');
      PlaceholderColorVar$delegate = StyleVariable('silk');
    }
  }
  function FontSizeVars() {
    FontSizeVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_cssRem(0.75);
    tmp.w3f_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_cssRem(0.875);
    tmp_0.x3f_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_cssRem(1);
    tmp_1.y3f_1 = StyleVariable_0(tmp0_defaultFallback_1, 'silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_cssRem(1.125);
    tmp_2.z3f_1 = StyleVariable_0(tmp0_defaultFallback_2, 'silk');
  }
  protoOf(FontSizeVars).a3g = function () {
    return this.y3f_1.u2u(this, MD$factory());
  };
  var FontSizeVars_instance;
  function FontSizeVars_getInstance() {
    if (FontSizeVars_instance == null)
      new FontSizeVars();
    return FontSizeVars_instance;
  }
  function MD$factory() {
    return getPropertyCallableRef('MD', 1, KProperty1, function (receiver) {
      return receiver.a3g();
    }, null);
  }
  function get_SilkColorsStyle() {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    return SilkColorsStyle$delegate.u2u(null, SilkColorsStyle$factory());
  }
  var SilkColorsStyle$delegate;
  function initSilkWidgets(ctx) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var mutableTheme = ctx.o3a_1;
    // Inline function 'kotlin.apply' call
    var this_0 = ctx.o3a_1.v3a_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.init.initSilkWidgets.<anonymous>' call
    var focusOutline = Blue_getInstance().q3c_1.z34().y34(VOID, VOID, VOID, 0.5);
    var placeholder = Gray_getInstance().a3d_1;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var color = Colors_instance.d35();
    set_background(this_0.f3d_1, Colors_instance.p35());
    set_color(this_0.f3d_1, color);
    set_border(this_0.f3d_1, color.y34(VOID, VOID, VOID, 0.2));
    set_focusOutline(this_0.f3d_1, focusOutline);
    set_overlay(this_0.f3d_1, color.y34(VOID, VOID, VOID, 0.5));
    set_placeholder(this_0.f3d_1, placeholder);
    var buttonBase = Colors_instance.p35().v34(0.2);
    get_button_0(this_0.f3d_1).w3p(buttonBase, buttonBase.v34(0.2), Colors_instance.f35(), buttonBase.v34(0.4));
    get_checkbox_0(this_0.f3d_1).c3q(Blue_getInstance().q3c_1, Blue_getInstance().r3c_1, Colors_instance.p35());
    var inputFilled = Gray_getInstance().x3c_1;
    var tmp0_$this = get_input_0(this_0.f3d_1);
    var tmp1_filledFocus = Colors_instance.c35();
    var tmp2_hoveredBorder = Gray_getInstance().a3d_1;
    var tmp3_invalidBorder = Red_getInstance().k3c_1;
    var tmp4_filledHover = inputFilled.v34(0.1);
    tmp0_$this.k3q(tmp2_hoveredBorder, tmp3_invalidBorder, inputFilled, tmp4_filledHover, tmp1_filledFocus);
    var tmp5_$this = get_switch_0(this_0.f3d_1);
    var tmp6_thumb = Colors_instance.p35();
    var tmp7_backgroundOn = Colors_instance.j35();
    var tmp8_backgroundOff = Colors_instance.l35();
    tmp5_$this.c3q(tmp7_backgroundOn, tmp8_backgroundOff, tmp6_thumb);
    get_tab_0(this_0.f3d_1).a3r(Colors_instance.d35(), Colors_instance.p35(), Colors_instance.f35(), VOID, VOID, Colors_instance.l35(), Colors_instance.q35(), Colors_instance.p35());
    get_tooltip_0(this_0.f3d_1).f3r(get_color_0(this_0.f3d_1), get_background_0(this_0.f3d_1));
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var color_0 = Colors_instance.p35();
    set_background(this_0.g3d_1, Colors_instance.d35());
    set_color(this_0.g3d_1, color_0);
    set_border(this_0.g3d_1, color_0.y34(VOID, VOID, VOID, 0.2));
    set_focusOutline(this_0.g3d_1, focusOutline);
    set_overlay(this_0.g3d_1, color_0.y34(VOID, VOID, VOID, 0.5));
    set_placeholder(this_0.g3d_1, placeholder);
    var buttonBase_0 = lightened(Colors_instance.d35(), 0.2);
    get_button_0(this_0.g3d_1).w3p(buttonBase_0, lightened(buttonBase_0, 0.2), Colors_instance.m35(), lightened(buttonBase_0, 0.4));
    get_checkbox_0(this_0.g3d_1).c3q(Blue_getInstance().n3c_1, Blue_getInstance().o3c_1, Colors_instance.d35());
    var inputFilled_0 = Gray_getInstance().e3d_1;
    var tmp0_$this_0 = get_input_0(this_0.g3d_1);
    var tmp1_filledFocus_0 = Colors_instance.c35();
    var tmp2_hoveredBorder_0 = Gray_getInstance().b3d_1;
    var tmp3_invalidBorder_0 = Red_getInstance().e3c_1;
    var tmp4_filledHover_0 = lightened(inputFilled_0, 0.1);
    tmp0_$this_0.k3q(tmp2_hoveredBorder_0, tmp3_invalidBorder_0, inputFilled_0, tmp4_filledHover_0, tmp1_filledFocus_0);
    var tmp5_$this_0 = get_switch_0(this_0.g3d_1);
    var tmp6_thumb_0 = Colors_instance.p35();
    var tmp7_backgroundOn_0 = Colors_instance.m35();
    var tmp8_backgroundOff_0 = Colors_instance.h35();
    tmp5_$this_0.c3q(tmp7_backgroundOn_0, tmp8_backgroundOff_0, tmp6_thumb_0);
    get_tab_0(this_0.g3d_1).a3r(Colors_instance.p35(), Colors_instance.d35(), Colors_instance.m35(), VOID, VOID, Colors_instance.i35(), Colors_instance.h35(), Colors_instance.d35());
    get_tooltip_0(this_0.g3d_1).f3r(get_color_0(this_0.g3d_1), get_background_0(this_0.g3d_1));
    mutableTheme.x3a(get_SilkColorsStyle());
    mutableTheme.x3a(get_DisabledStyle());
    mutableTheme.x3a(get_SmoothColorStyle());
    mutableTheme.x3a(get_ButtonStyle());
    mutableTheme.x3a(get_CanvasStyle());
    mutableTheme.x3a(get_CheckboxStyle());
    mutableTheme.g3b([get_CheckboxInputVariant()]);
    mutableTheme.x3a(get_CheckboxIconContainerStyle());
    mutableTheme.x3a(get_CheckboxIconStyle());
    mutableTheme.g3b([get_CheckedCheckboxIconContainerVariant(), get_UncheckedCheckboxIconContainerVariant()]);
    mutableTheme.x3a(get_OverlayStyle());
    mutableTheme.x3a(get_PopupStyle());
    mutableTheme.x3a(get_SimpleGridStyle());
    mutableTheme.x3a(get_SurfaceStyle());
    mutableTheme.x3a(get_HorizontalDividerStyle());
    mutableTheme.x3a(get_VerticalDividerStyle());
    mutableTheme.x3a(get_SwitchStyle());
    mutableTheme.x3a(get_SwitchTrackStyle());
    mutableTheme.x3a(get_SwitchThumbStyle());
    mutableTheme.g3b([get_SwitchInputVariant()]);
    mutableTheme.x3a(get_TabsStyle());
    mutableTheme.x3a(get_TabsTabRowStyle());
    mutableTheme.x3a(get_TabsTabStyle());
    mutableTheme.x3a(get_TabsPanelStyle());
    mutableTheme.x3a(get_InputStyle());
    mutableTheme.g3b([get_OutlinedInputVariant(), get_FilledInputVariant(), get_FlushedInputVariant(), get_UnstyledInputVariant()]);
    mutableTheme.x3a(get_InputGroupStyle());
    mutableTheme.x3a(get_TooltipArrowStyle());
    mutableTheme.g3b([get_TopLeftTooltipArrowVariant(), get_TopTooltipArrowVariant(), get_TopRightTooltipArrowVariant(), get_LeftTopTooltipArrowVariant(), get_LeftTooltipArrowVariant(), get_LeftBottomTooltipArrowVariant(), get_RightTopTooltipArrowVariant(), get_RightTooltipArrowVariant(), get_RightBottomTooltipArrowVariant(), get_BottomLeftTooltipArrowVariant(), get_BottomTooltipArrowVariant(), get_BottomRightTooltipArrowVariant()]);
    mutableTheme.x3a(get_TooltipStyle());
    mutableTheme.x3a(get_TooltipTextContainerStyle());
    registerKeyframes(ctx.n3a_1, get_CheckboxEnabledAnim());
  }
  function setSilkWidgetVariables(_this__u8e3s4, colorMode) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    removeClass(_this__u8e3s4, [suffixedWith(get_SilkColorsStyle().o37_1, colorMode.l38())]);
    addClass(_this__u8e3s4, [suffixedWith(get_SilkColorsStyle().o37_1, colorMode)]);
  }
  function setSilkWidgetVariables_0(_this__u8e3s4, $composer, $changed) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.r1o(-938405995);
    if (isTraceInProgress()) {
      traceEventStart(-938405995, $changed, -1, 'com.varabyte.kobweb.silk.init.setSilkWidgetVariables (InitSilkWidgets.kt:308)');
    }
    $composer_0.z1m(263026394);
    // Inline function 'androidx.compose.runtime.cache' call
    var this_0 = $composer_0;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = this_0.d1o();
    var tmp;
    if (false ? true : it === Companion_getInstance().r1h_1) {
      // Inline function 'com.varabyte.kobweb.silk.init.setSilkWidgetVariables.<anonymous>' call
      var tmp_0 = _this__u8e3s4.getElementById('root');
      var value = tmp_0 instanceof HTMLElement ? tmp_0 : THROW_CCE();
      this_0.j1o(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_1 = tmp;
    var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    $composer_0.a1n();
    var root = tmp0_group;
    setSilkWidgetVariables_1(root, $composer_0, 8);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp1_safe_receiver = $composer_0.s1o();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.p1t(setSilkWidgetVariables$lambda(_this__u8e3s4, $changed));
    }
  }
  function setSilkWidgetVariables_1(_this__u8e3s4, $composer, $changed) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.r1o(1180012187);
    if (isTraceInProgress()) {
      traceEventStart(1180012187, $changed, -1, 'com.varabyte.kobweb.silk.init.setSilkWidgetVariables (InitSilkWidgets.kt:314)');
    }
    setSilkWidgetVariables(_this__u8e3s4, Companion_instance_6.u36($composer_0, 8));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_safe_receiver = $composer_0.s1o();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.p1t(setSilkWidgetVariables$lambda_0(_this__u8e3s4, $changed));
    }
  }
  function SilkColorsStyle$delegate$lambda($this$base) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var palette = toPalette($this$base.r38_1);
    return setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(Companion_instance, get_BackgroundColorVar(), get_background(palette)), get_ColorVar(), get_color(palette)), get_BorderColorVar(), get_border(palette)), get_FocusOutlineColorVar(), get_focusOutline(palette)), get_PlaceholderColorVar(), get_placeholder_0(palette)), ButtonVars_getInstance().m3f(), get_button(palette).g3r()), ButtonVars_getInstance().o3f(), get_button(palette).n2n()), ButtonVars_getInstance().p3f(), get_button(palette).h3r()), CheckboxVars_getInstance().c3h(), get_checkbox(palette).i3r()), CheckboxVars_getInstance().d3h(), get_checkbox(palette).n2n()), CheckboxVars_getInstance().b3h(), get_checkbox(palette).j3r()), InputVars_getInstance().w3h(), get_input(palette).k3r()), InputVars_getInstance().x3h(), get_input(palette).l3r()), InputVars_getInstance().y3h(), get_input(palette).m3r()), InputVars_getInstance().z3h(), get_input(palette).n3r()), InputVars_getInstance().a3i(), get_input(palette).o3r()), OverlayVars_getInstance().x3e(), get_overlay(palette)), SwitchVars_getInstance().u3i(), get_switch(palette).p3r()), TabVars_getInstance().v3e(), get_tab(palette).j3r()), TabVars_getInstance().x3e(), get_tab(palette).i3r()), TabVars_getInstance().y3e(), get_tab(palette).q3r()), TabVars_getInstance().z3e(), get_tab(palette).n2n()), TabVars_getInstance().a3f(), get_tab(palette).h3r()), TooltipVars_getInstance().x3e(), get_tooltip(palette).i3r()), TooltipVars_getInstance().v3e(), get_tooltip(palette).j3r());
  }
  function setSilkWidgetVariables$lambda($this_setSilkWidgetVariables, $$changed) {
    return function ($composer, $force) {
      setSilkWidgetVariables_0($this_setSilkWidgetVariables, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function setSilkWidgetVariables$lambda_0($this_setSilkWidgetVariables, $$changed) {
    return function ($composer, $force) {
      setSilkWidgetVariables_1($this_setSilkWidgetVariables, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function SilkColorsStyle$factory() {
    return getPropertyCallableRef('SilkColorsStyle', 0, KProperty0, function () {
      return get_SilkColorsStyle();
    }, null);
  }
  var properties_initialized_InitSilkWidgets_kt_dse0va;
  function _init_properties_InitSilkWidgets_kt__62z9ag() {
    if (!properties_initialized_InitSilkWidgets_kt_dse0va) {
      properties_initialized_InitSilkWidgets_kt_dse0va = true;
      var tmp = Companion_instance_5;
      SilkColorsStyle$delegate = base(tmp, VOID, VOID, SilkColorsStyle$delegate$lambda);
    }
  }
  function MutableButton(palette) {
    ColorGroup.call(this, palette, 'button');
    this.s3p_1 = this.s3d();
    this.t3p_1 = this.s3d();
    this.u3p_1 = this.s3d();
    this.v3p_1 = this.s3d();
  }
  protoOf(MutableButton).r3r = function (_set____db54di) {
    return this.s3p_1.p3d(this, default$factory(), _set____db54di);
  };
  protoOf(MutableButton).g3r = function () {
    return this.s3p_1.u2u(this, default$factory_0());
  };
  protoOf(MutableButton).s3r = function (_set____db54di) {
    return this.t3p_1.p3d(this, hover$factory(), _set____db54di);
  };
  protoOf(MutableButton).n2n = function () {
    return this.t3p_1.u2u(this, hover$factory_0());
  };
  protoOf(MutableButton).t3r = function (_set____db54di) {
    return this.u3p_1.p3d(this, focus$factory(), _set____db54di);
  };
  protoOf(MutableButton).u3r = function () {
    return this.u3p_1.u2u(this, focus$factory_0());
  };
  protoOf(MutableButton).v3r = function (_set____db54di) {
    return this.v3p_1.p3d(this, pressed$factory(), _set____db54di);
  };
  protoOf(MutableButton).h3r = function () {
    return this.v3p_1.u2u(this, pressed$factory_0());
  };
  protoOf(MutableButton).w3p = function (default_0, hover, focus, pressed) {
    this.r3r(default_0);
    this.s3r(hover);
    this.t3r(focus);
    this.v3r(pressed);
  };
  function MutableCheckbox(palette) {
    ColorGroup.call(this, palette, 'checkbox');
    this.z3p_1 = this.s3d();
    this.a3q_1 = this.s3d();
    this.b3q_1 = this.s3d();
  }
  protoOf(MutableCheckbox).w3r = function (_set____db54di) {
    return this.z3p_1.p3d(this, background$factory(), _set____db54di);
  };
  protoOf(MutableCheckbox).i3r = function () {
    return this.z3p_1.u2u(this, background$factory_0());
  };
  protoOf(MutableCheckbox).s3r = function (_set____db54di) {
    return this.a3q_1.p3d(this, hover$factory_1(), _set____db54di);
  };
  protoOf(MutableCheckbox).n2n = function () {
    return this.a3q_1.u2u(this, hover$factory_2());
  };
  protoOf(MutableCheckbox).x3r = function (_set____db54di) {
    return this.b3q_1.p3d(this, color$factory(), _set____db54di);
  };
  protoOf(MutableCheckbox).j3r = function () {
    return this.b3q_1.u2u(this, color$factory_0());
  };
  protoOf(MutableCheckbox).c3q = function (background, hover, color) {
    this.w3r(background);
    this.s3r(hover);
    this.x3r(color);
  };
  function MutableInput(palette) {
    ColorGroup.call(this, palette, 'input');
    this.f3q_1 = this.s3d();
    this.g3q_1 = this.s3d();
    this.h3q_1 = this.s3d();
    this.i3q_1 = this.s3d();
    this.j3q_1 = this.s3d();
  }
  protoOf(MutableInput).y3r = function (_set____db54di) {
    return this.f3q_1.p3d(this, hoveredBorder$factory(), _set____db54di);
  };
  protoOf(MutableInput).k3r = function () {
    return this.f3q_1.u2u(this, hoveredBorder$factory_0());
  };
  protoOf(MutableInput).z3r = function (_set____db54di) {
    return this.g3q_1.p3d(this, invalidBorder$factory(), _set____db54di);
  };
  protoOf(MutableInput).l3r = function () {
    return this.g3q_1.u2u(this, invalidBorder$factory_0());
  };
  protoOf(MutableInput).a3s = function (_set____db54di) {
    return this.h3q_1.p3d(this, filled$factory(), _set____db54di);
  };
  protoOf(MutableInput).m3r = function () {
    return this.h3q_1.u2u(this, filled$factory_0());
  };
  protoOf(MutableInput).b3s = function (_set____db54di) {
    return this.i3q_1.p3d(this, filledHover$factory(), _set____db54di);
  };
  protoOf(MutableInput).n3r = function () {
    return this.i3q_1.u2u(this, filledHover$factory_0());
  };
  protoOf(MutableInput).c3s = function (_set____db54di) {
    return this.j3q_1.p3d(this, filledFocus$factory(), _set____db54di);
  };
  protoOf(MutableInput).o3r = function () {
    return this.j3q_1.u2u(this, filledFocus$factory_0());
  };
  protoOf(MutableInput).k3q = function (hoveredBorder, invalidBorder, filled, filledHover, filledFocus) {
    this.y3r(hoveredBorder);
    this.z3r(invalidBorder);
    this.a3s(filled);
    this.b3s(filledHover);
    this.c3s(filledFocus);
  };
  function MutableSwitch(palette) {
    ColorGroup.call(this, palette, 'switch');
    this.n3q_1 = this.s3d();
    this.o3q_1 = this.s3d();
    this.p3q_1 = this.s3d();
  }
  protoOf(MutableSwitch).d3s = function (_set____db54di) {
    return this.n3q_1.p3d(this, backgroundOn$factory(), _set____db54di);
  };
  protoOf(MutableSwitch).e3s = function () {
    return this.n3q_1.u2u(this, backgroundOn$factory_0());
  };
  protoOf(MutableSwitch).f3s = function (_set____db54di) {
    return this.o3q_1.p3d(this, backgroundOff$factory(), _set____db54di);
  };
  protoOf(MutableSwitch).g3s = function () {
    return this.o3q_1.u2u(this, backgroundOff$factory_0());
  };
  protoOf(MutableSwitch).h3s = function (_set____db54di) {
    return this.p3q_1.p3d(this, thumb$factory(), _set____db54di);
  };
  protoOf(MutableSwitch).p3r = function () {
    return this.p3q_1.u2u(this, thumb$factory_0());
  };
  protoOf(MutableSwitch).c3q = function (backgroundOn, backgroundOff, thumb) {
    this.d3s(backgroundOn);
    this.f3s(backgroundOff);
    this.h3s(thumb);
  };
  function MutableTab(palette) {
    ColorGroup.call(this, palette, 'tab');
    this.s3q_1 = this.s3d();
    this.t3q_1 = this.s3d();
    this.u3q_1 = this.s3d();
    this.v3q_1 = this.s3d();
    this.w3q_1 = this.s3d();
    this.x3q_1 = this.s3d();
    this.y3q_1 = this.s3d();
    this.z3q_1 = this.s3d();
  }
  protoOf(MutableTab).x3r = function (_set____db54di) {
    return this.s3q_1.p3d(this, color$factory_1(), _set____db54di);
  };
  protoOf(MutableTab).j3r = function () {
    return this.s3q_1.u2u(this, color$factory_2());
  };
  protoOf(MutableTab).w3r = function (_set____db54di) {
    return this.t3q_1.p3d(this, background$factory_1(), _set____db54di);
  };
  protoOf(MutableTab).i3r = function () {
    return this.t3q_1.u2u(this, background$factory_2());
  };
  protoOf(MutableTab).i3s = function (_set____db54di) {
    return this.u3q_1.p3d(this, selectedColor$factory(), _set____db54di);
  };
  protoOf(MutableTab).j3s = function () {
    return this.u3q_1.u2u(this, selectedColor$factory_0());
  };
  protoOf(MutableTab).k3s = function (_set____db54di) {
    return this.v3q_1.p3d(this, selectedBackground$factory(), _set____db54di);
  };
  protoOf(MutableTab).l3s = function () {
    return this.v3q_1.u2u(this, selectedBackground$factory_0());
  };
  protoOf(MutableTab).m3s = function (_set____db54di) {
    return this.w3q_1.p3d(this, selectedBorder$factory(), _set____db54di);
  };
  protoOf(MutableTab).n3s = function () {
    return this.w3q_1.u2u(this, selectedBorder$factory_0());
  };
  protoOf(MutableTab).s3r = function (_set____db54di) {
    return this.x3q_1.p3d(this, hover$factory_3(), _set____db54di);
  };
  protoOf(MutableTab).n2n = function () {
    return this.x3q_1.u2u(this, hover$factory_4());
  };
  protoOf(MutableTab).v3r = function (_set____db54di) {
    return this.y3q_1.p3d(this, pressed$factory_1(), _set____db54di);
  };
  protoOf(MutableTab).h3r = function () {
    return this.y3q_1.u2u(this, pressed$factory_2());
  };
  protoOf(MutableTab).o3s = function (_set____db54di) {
    return this.z3q_1.p3d(this, disabled$factory(), _set____db54di);
  };
  protoOf(MutableTab).q3r = function () {
    return this.z3q_1.u2u(this, disabled$factory_0());
  };
  protoOf(MutableTab).p3s = function (color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled) {
    this.x3r(color);
    this.w3r(background);
    this.i3s(selectedColor);
    this.k3s(selectedBackground);
    this.m3s(selectedBorder);
    this.s3r(hover);
    this.v3r(pressed);
    this.o3s(disabled);
  };
  protoOf(MutableTab).a3r = function (color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled, $super) {
    selectedBackground = selectedBackground === VOID ? background : selectedBackground;
    selectedBorder = selectedBorder === VOID ? selectedColor : selectedBorder;
    var tmp;
    if ($super === VOID) {
      this.p3s(color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled);
      tmp = Unit_instance;
    } else {
      tmp = $super.p3s.call(this, color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled);
    }
    return tmp;
  };
  function MutableTooltip(palette) {
    ColorGroup.call(this, palette, 'tooltip');
    this.d3r_1 = this.s3d();
    this.e3r_1 = this.s3d();
  }
  protoOf(MutableTooltip).w3r = function (_set____db54di) {
    return this.d3r_1.p3d(this, background$factory_3(), _set____db54di);
  };
  protoOf(MutableTooltip).i3r = function () {
    return this.d3r_1.u2u(this, background$factory_4());
  };
  protoOf(MutableTooltip).x3r = function (_set____db54di) {
    return this.e3r_1.p3d(this, color$factory_3(), _set____db54di);
  };
  protoOf(MutableTooltip).j3r = function () {
    return this.e3r_1.u2u(this, color$factory_4());
  };
  protoOf(MutableTooltip).f3r = function (background, color) {
    this.w3r(background);
    this.x3r(color);
  };
  function get_tooltip(_this__u8e3s4) {
    return get_tooltip_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_tab(_this__u8e3s4) {
    return get_tab_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_switch(_this__u8e3s4) {
    return get_switch_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_overlay(_this__u8e3s4) {
    return _this__u8e3s4.l3d('overlay');
  }
  function get_input(_this__u8e3s4) {
    return get_input_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_checkbox(_this__u8e3s4) {
    return get_checkbox_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_button(_this__u8e3s4) {
    return get_button_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_placeholder_0(_this__u8e3s4) {
    return _this__u8e3s4.l3d('placeholder');
  }
  function get_focusOutline(_this__u8e3s4) {
    return _this__u8e3s4.l3d('focusOutline');
  }
  function get_border(_this__u8e3s4) {
    return _this__u8e3s4.l3d('border');
  }
  function get_color(_this__u8e3s4) {
    return _this__u8e3s4.l3d('color');
  }
  function get_background(_this__u8e3s4) {
    return _this__u8e3s4.l3d('background');
  }
  function get_tooltip_0(_this__u8e3s4) {
    return new MutableTooltip(_this__u8e3s4);
  }
  function get_tab_0(_this__u8e3s4) {
    return new MutableTab(_this__u8e3s4);
  }
  function get_switch_0(_this__u8e3s4) {
    return new MutableSwitch(_this__u8e3s4);
  }
  function get_input_0(_this__u8e3s4) {
    return new MutableInput(_this__u8e3s4);
  }
  function get_checkbox_0(_this__u8e3s4) {
    return new MutableCheckbox(_this__u8e3s4);
  }
  function get_button_0(_this__u8e3s4) {
    return new MutableButton(_this__u8e3s4);
  }
  function set_background(_this__u8e3s4, value) {
    _this__u8e3s4.t3d('background', value);
  }
  function get_background_0(_this__u8e3s4) {
    return _this__u8e3s4.l3d('background');
  }
  function set_color(_this__u8e3s4, value) {
    _this__u8e3s4.t3d('color', value);
  }
  function get_color_0(_this__u8e3s4) {
    return _this__u8e3s4.l3d('color');
  }
  function set_border(_this__u8e3s4, value) {
    _this__u8e3s4.t3d('border', value);
  }
  function set_focusOutline(_this__u8e3s4, value) {
    _this__u8e3s4.t3d('focusOutline', value);
  }
  function set_overlay(_this__u8e3s4, value) {
    _this__u8e3s4.t3d('overlay', value);
  }
  function set_placeholder(_this__u8e3s4, value) {
    _this__u8e3s4.t3d('placeholder', value);
  }
  function default$factory() {
    return getPropertyCallableRef('default', 1, KMutableProperty1, function (receiver) {
      return receiver.g3r();
    }, function (receiver, value) {
      return receiver.r3r(value);
    });
  }
  function default$factory_0() {
    return getPropertyCallableRef('default', 1, KMutableProperty1, function (receiver) {
      return receiver.g3r();
    }, function (receiver, value) {
      return receiver.r3r(value);
    });
  }
  function hover$factory() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.n2n();
    }, function (receiver, value) {
      return receiver.s3r(value);
    });
  }
  function hover$factory_0() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.n2n();
    }, function (receiver, value) {
      return receiver.s3r(value);
    });
  }
  function focus$factory() {
    return getPropertyCallableRef('focus', 1, KMutableProperty1, function (receiver) {
      return receiver.u3r();
    }, function (receiver, value) {
      return receiver.t3r(value);
    });
  }
  function focus$factory_0() {
    return getPropertyCallableRef('focus', 1, KMutableProperty1, function (receiver) {
      return receiver.u3r();
    }, function (receiver, value) {
      return receiver.t3r(value);
    });
  }
  function pressed$factory() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.h3r();
    }, function (receiver, value) {
      return receiver.v3r(value);
    });
  }
  function pressed$factory_0() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.h3r();
    }, function (receiver, value) {
      return receiver.v3r(value);
    });
  }
  function background$factory() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.i3r();
    }, function (receiver, value) {
      return receiver.w3r(value);
    });
  }
  function background$factory_0() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.i3r();
    }, function (receiver, value) {
      return receiver.w3r(value);
    });
  }
  function hover$factory_1() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.n2n();
    }, function (receiver, value) {
      return receiver.s3r(value);
    });
  }
  function hover$factory_2() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.n2n();
    }, function (receiver, value) {
      return receiver.s3r(value);
    });
  }
  function color$factory() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.j3r();
    }, function (receiver, value) {
      return receiver.x3r(value);
    });
  }
  function color$factory_0() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.j3r();
    }, function (receiver, value) {
      return receiver.x3r(value);
    });
  }
  function hoveredBorder$factory() {
    return getPropertyCallableRef('hoveredBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.k3r();
    }, function (receiver, value) {
      return receiver.y3r(value);
    });
  }
  function hoveredBorder$factory_0() {
    return getPropertyCallableRef('hoveredBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.k3r();
    }, function (receiver, value) {
      return receiver.y3r(value);
    });
  }
  function invalidBorder$factory() {
    return getPropertyCallableRef('invalidBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.l3r();
    }, function (receiver, value) {
      return receiver.z3r(value);
    });
  }
  function invalidBorder$factory_0() {
    return getPropertyCallableRef('invalidBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.l3r();
    }, function (receiver, value) {
      return receiver.z3r(value);
    });
  }
  function filled$factory() {
    return getPropertyCallableRef('filled', 1, KMutableProperty1, function (receiver) {
      return receiver.m3r();
    }, function (receiver, value) {
      return receiver.a3s(value);
    });
  }
  function filled$factory_0() {
    return getPropertyCallableRef('filled', 1, KMutableProperty1, function (receiver) {
      return receiver.m3r();
    }, function (receiver, value) {
      return receiver.a3s(value);
    });
  }
  function filledHover$factory() {
    return getPropertyCallableRef('filledHover', 1, KMutableProperty1, function (receiver) {
      return receiver.n3r();
    }, function (receiver, value) {
      return receiver.b3s(value);
    });
  }
  function filledHover$factory_0() {
    return getPropertyCallableRef('filledHover', 1, KMutableProperty1, function (receiver) {
      return receiver.n3r();
    }, function (receiver, value) {
      return receiver.b3s(value);
    });
  }
  function filledFocus$factory() {
    return getPropertyCallableRef('filledFocus', 1, KMutableProperty1, function (receiver) {
      return receiver.o3r();
    }, function (receiver, value) {
      return receiver.c3s(value);
    });
  }
  function filledFocus$factory_0() {
    return getPropertyCallableRef('filledFocus', 1, KMutableProperty1, function (receiver) {
      return receiver.o3r();
    }, function (receiver, value) {
      return receiver.c3s(value);
    });
  }
  function backgroundOn$factory() {
    return getPropertyCallableRef('backgroundOn', 1, KMutableProperty1, function (receiver) {
      return receiver.e3s();
    }, function (receiver, value) {
      return receiver.d3s(value);
    });
  }
  function backgroundOn$factory_0() {
    return getPropertyCallableRef('backgroundOn', 1, KMutableProperty1, function (receiver) {
      return receiver.e3s();
    }, function (receiver, value) {
      return receiver.d3s(value);
    });
  }
  function backgroundOff$factory() {
    return getPropertyCallableRef('backgroundOff', 1, KMutableProperty1, function (receiver) {
      return receiver.g3s();
    }, function (receiver, value) {
      return receiver.f3s(value);
    });
  }
  function backgroundOff$factory_0() {
    return getPropertyCallableRef('backgroundOff', 1, KMutableProperty1, function (receiver) {
      return receiver.g3s();
    }, function (receiver, value) {
      return receiver.f3s(value);
    });
  }
  function thumb$factory() {
    return getPropertyCallableRef('thumb', 1, KMutableProperty1, function (receiver) {
      return receiver.p3r();
    }, function (receiver, value) {
      return receiver.h3s(value);
    });
  }
  function thumb$factory_0() {
    return getPropertyCallableRef('thumb', 1, KMutableProperty1, function (receiver) {
      return receiver.p3r();
    }, function (receiver, value) {
      return receiver.h3s(value);
    });
  }
  function color$factory_1() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.j3r();
    }, function (receiver, value) {
      return receiver.x3r(value);
    });
  }
  function color$factory_2() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.j3r();
    }, function (receiver, value) {
      return receiver.x3r(value);
    });
  }
  function background$factory_1() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.i3r();
    }, function (receiver, value) {
      return receiver.w3r(value);
    });
  }
  function background$factory_2() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.i3r();
    }, function (receiver, value) {
      return receiver.w3r(value);
    });
  }
  function selectedColor$factory() {
    return getPropertyCallableRef('selectedColor', 1, KMutableProperty1, function (receiver) {
      return receiver.j3s();
    }, function (receiver, value) {
      return receiver.i3s(value);
    });
  }
  function selectedColor$factory_0() {
    return getPropertyCallableRef('selectedColor', 1, KMutableProperty1, function (receiver) {
      return receiver.j3s();
    }, function (receiver, value) {
      return receiver.i3s(value);
    });
  }
  function selectedBackground$factory() {
    return getPropertyCallableRef('selectedBackground', 1, KMutableProperty1, function (receiver) {
      return receiver.l3s();
    }, function (receiver, value) {
      return receiver.k3s(value);
    });
  }
  function selectedBackground$factory_0() {
    return getPropertyCallableRef('selectedBackground', 1, KMutableProperty1, function (receiver) {
      return receiver.l3s();
    }, function (receiver, value) {
      return receiver.k3s(value);
    });
  }
  function selectedBorder$factory() {
    return getPropertyCallableRef('selectedBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.n3s();
    }, function (receiver, value) {
      return receiver.m3s(value);
    });
  }
  function selectedBorder$factory_0() {
    return getPropertyCallableRef('selectedBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.n3s();
    }, function (receiver, value) {
      return receiver.m3s(value);
    });
  }
  function hover$factory_3() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.n2n();
    }, function (receiver, value) {
      return receiver.s3r(value);
    });
  }
  function hover$factory_4() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.n2n();
    }, function (receiver, value) {
      return receiver.s3r(value);
    });
  }
  function pressed$factory_1() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.h3r();
    }, function (receiver, value) {
      return receiver.v3r(value);
    });
  }
  function pressed$factory_2() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.h3r();
    }, function (receiver, value) {
      return receiver.v3r(value);
    });
  }
  function disabled$factory() {
    return getPropertyCallableRef('disabled', 1, KMutableProperty1, function (receiver) {
      return receiver.q3r();
    }, function (receiver, value) {
      return receiver.o3s(value);
    });
  }
  function disabled$factory_0() {
    return getPropertyCallableRef('disabled', 1, KMutableProperty1, function (receiver) {
      return receiver.q3r();
    }, function (receiver, value) {
      return receiver.o3s(value);
    });
  }
  function background$factory_3() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.i3r();
    }, function (receiver, value) {
      return receiver.w3r(value);
    });
  }
  function background$factory_4() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.i3r();
    }, function (receiver, value) {
      return receiver.w3r(value);
    });
  }
  function color$factory_3() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.j3r();
    }, function (receiver, value) {
      return receiver.x3r(value);
    });
  }
  function color$factory_4() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.j3r();
    }, function (receiver, value) {
      return receiver.x3r(value);
    });
  }
  //region block: post-declaration
  protoOf(PopupScope).r33 = align;
  //endregion
  //region block: init
  Companion_instance_15 = new Companion();
  Companion_instance_16 = new Companion_0();
  Uninitialized_instance = new Uninitialized();
  DEFAULT_POPUP_OFFSET_PX = 15;
  Companion_instance_17 = new Companion_1();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_ButtonStyle;
  _.$_$.b = Button_0;
  _.$_$.c = CloseIcon;
  _.$_$.d = HamburgerIcon;
  _.$_$.e = MoonIcon;
  _.$_$.f = SunIcon;
  _.$_$.g = get_HorizontalDividerStyle;
  _.$_$.h = HorizontalDivider;
  _.$_$.i = Surface;
  _.$_$.j = Overlay;
  _.$_$.k = Tooltip;
  _.$_$.l = get_SmoothColorStyle;
  _.$_$.m = get_BorderColorVar;
  _.$_$.n = get_ColorVar;
  _.$_$.o = get_SilkColorsStyle;
  _.$_$.p = initSilkWidgets;
  _.$_$.q = setSilkWidgetVariables_0;
  _.$_$.r = set_background;
  _.$_$.s = get_color;
  _.$_$.t = set_color;
  _.$_$.u = PopupPlacement_BottomRight_getInstance;
  _.$_$.v = ButtonVars_getInstance;
  _.$_$.w = OverlayVars_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-silk-widgets.js.map
