(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kobweb-frontend-compose-html-ext.js', './html-html-core.js', './kotlin-kotlin-stdlib.js', './kobweb-frontend-kobweb-compose.js', './compose-multiplatform-core-compose-runtime-runtime.js', './kobweb-frontend-silk-foundation.js', './kotlinx-coroutines-core.js', './kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kobweb-frontend-compose-html-ext.js'), require('./html-html-core.js'), require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kobweb-frontend-silk-foundation.js'), require('./kotlinx-coroutines-core.js'), require('./kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'));
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
    if (typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' was not found. Please, check whether 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    root['kobweb-frontend-silk-widgets'] = factory(typeof this['kobweb-frontend-silk-widgets'] === 'undefined' ? {} : this['kobweb-frontend-silk-widgets'], this['kobweb-frontend-compose-html-ext'], this['html-html-core'], this['kotlin-kotlin-stdlib'], this['kobweb-frontend-kobweb-compose'], this['compose-multiplatform-core-compose-runtime-runtime'], this['kobweb-frontend-silk-foundation'], this['kotlinx-coroutines-core'], kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat);
  }
}(this, function (_, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_org_jetbrains_compose_html_html_core, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat) {
  'use strict';
  //region block: imports
  var StyleVariable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h;
  var StyleVariable_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.x2;
  var StyleVariable_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g;
  var protoOf = kotlin_kotlin.$_$.fa;
  var objectMeta = kotlin_kotlin.$_$.ea;
  var setMetadataFor = kotlin_kotlin.$_$.ga;
  var Unit_instance = kotlin_kotlin.$_$.h4;
  var Companion_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u3;
  var fillMaxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d1;
  var Companion_instance_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.n;
  var borderBottom = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o;
  var tabIndex = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t2;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var get_ariaDisabled = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m;
  var get_hover = kotlin_com_varabyte_kobweb_silk_foundation.$_$.t;
  var not = kotlin_com_varabyte_kobweb_silk_foundation.$_$.v;
  var get_active = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j;
  var Companion_instance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.t2;
  var cursor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z;
  var Companion_instance_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.s2;
  var listOf = kotlin_kotlin.$_$.s6;
  var transition = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x2;
  var backgroundColor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y;
  var Companion_instance_3 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e3;
  var userSelect = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a3;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.t1;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k2;
  var calc = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a;
  var VOID = kotlin_kotlin.$_$.g;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w1;
  var flexGrow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e1;
  var overflow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g2;
  var Companion_instance_4 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.z2;
  var KProperty0 = kotlin_kotlin.$_$.va;
  var getPropertyCallableRef = kotlin_kotlin.$_$.d9;
  var KProperty1 = kotlin_kotlin.$_$.wa;
  var ComponentStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h;
  var Companion_instance_5 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.u1;
  var base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o;
  var ComponentStyle_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.i;
  var ButtonType_Button_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.a;
  var toModifier = kotlin_com_varabyte_kobweb_silk_foundation.$_$.x;
  var thenIf = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f3;
  var ensureNotNull = kotlin_kotlin.$_$.ce;
  var Companion_instance_6 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.v1;
  var get_isBright = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f;
  var ColorMode_DARK_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.r1;
  var ColorMode_LIGHT_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.s1;
  var toPalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h1;
  var setVariable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r2;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var THROW_CCE = kotlin_kotlin.$_$.kd;
  var onClick = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c2;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g3;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var Button = kotlin_org_jetbrains_compose_html_html_core.$_$.g3;
  var get_focusVisible = kotlin_com_varabyte_kobweb_silk_foundation.$_$.s;
  var lineHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p1;
  var height = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n1;
  var minWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z1;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g1;
  var Companion_instance_7 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.u2;
  var fontWeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h1;
  var Companion_instance_8 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g3;
  var whiteSpace = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c3;
  var padding_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m2;
  var Companion_instance_9 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f3;
  var verticalAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b3;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t;
  var CSSTransition_init_$Create$ = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p2;
  var Colors_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l3;
  var outline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e2;
  var boxShadow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v;
  var type = kotlin_org_jetbrains_compose_html_html_core.$_$.v;
  var registerRefScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h2;
  var Center_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i3;
  var CenterVertically_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o3;
  var Row = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var gap = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j1;
  var Companion_instance_10 = kotlin_org_jetbrains_compose_html_html_core.$_$.o;
  var position = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n2;
  var opacity = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d2;
  var size = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s2;
  var border_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s;
  var transition_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y2;
  var rowClasses = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e;
  var Keyframes = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a;
  var addVariantBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k;
  var addVariant = kotlin_com_varabyte_kobweb_silk_foundation.$_$.l;
  var StyleVariable_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f;
  var paddingInline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i2;
  var get_placeholder = kotlin_com_varabyte_kobweb_silk_foundation.$_$.w;
  var Companion_instance_11 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.q2;
  var appearance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i;
  var get_ariaInvalid = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n;
  var get_disabled = kotlin_com_varabyte_kobweb_silk_foundation.$_$.r;
  var margin_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u1;
  var RectF_init_$Create$ = kotlin_com_varabyte_kobweb_silk_foundation.$_$.t1;
  var clip = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j1;
  var overflow_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h2;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d3;
  var minHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y1;
  var Companion_instance_12 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r2;
  var boxSizing = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w;
  var translateX = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z2;
  var ariaHidden = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k;
  var Companion_instance_13 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h3;
  var get_em = kotlin_org_jetbrains_compose_html_html_core.$_$.v1;
  var Svg = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d2;
  var classMeta = kotlin_kotlin.$_$.v8;
  var Path = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a2;
  var Polyline = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b2;
  var to = kotlin_kotlin.$_$.qe;
  var Circle = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.x1;
  var Line = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.z1;
  var Rect = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c2;
  var Group = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.y1;
  var SVGStrokeLineJoin_Round_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l2;
  var SVGStrokeLineCap_Round_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k2;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ie;
  var SVGStrokeType_CurrentColor_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m2;
  var SVGFillType_None_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j2;
  var SVGFillType_CurrentColor_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i2;
  var SVGStrokeType_None_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.n2;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.v2;
  var Hr = kotlin_org_jetbrains_compose_html_html_core.$_$.p3;
  var borderTop = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r;
  var borderLeft = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n;
  var Breakpoint_ZERO_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.q1;
  var getValue = kotlin_kotlin.$_$.f6;
  var setVariable_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q2;
  var Breakpoint_SM_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o1;
  var Breakpoint_MD_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n1;
  var Breakpoint_LG_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m1;
  var Breakpoint_XL_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.p1;
  var Div = kotlin_org_jetbrains_compose_html_html_core.$_$.i3;
  var Companion_instance_14 = kotlin_org_jetbrains_compose_html_html_core.$_$.k;
  var display = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a1;
  var get_fr = kotlin_org_jetbrains_compose_html_html_core.$_$.b2;
  var gridTemplateColumns = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l1;
  var get_entries = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.g5;
  var mapCapacity = kotlin_kotlin.$_$.t6;
  var coerceAtLeast = kotlin_kotlin.$_$.ma;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.u;
  var NumberValue = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e;
  var TopStart_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t3;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var refScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f2;
  var Box = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a;
  var KMutableProperty0 = kotlin_kotlin.$_$.ta;
  var THROW_ISE = kotlin_kotlin.$_$.ld;
  var getLocalDelegateReference = kotlin_kotlin.$_$.b9;
  var CoroutineImpl = kotlin_kotlin.$_$.i8;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var isInterface = kotlin_kotlin.$_$.q9;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j;
  var CompositionLocalProvider = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var TopCenter_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s3;
  var deferRender = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a1;
  var top = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w2;
  var bottom = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u;
  var left = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o1;
  var right = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o2;
  var styleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e3;
  var unaryMinus = kotlin_org_jetbrains_compose_html_html_core.$_$.b3;
  var margin_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t1;
  var base_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.q;
  var ariaDisabled = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j;
  var base_1 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.p;
  var get_ms = kotlin_org_jetbrains_compose_html_html_core.$_$.s2;
  var Blue_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.w1;
  var Gray_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.x1;
  var Red_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.y1;
  var lightened = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g;
  var registerKeyframes = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b;
  var suffixedWith = kotlin_com_varabyte_kobweb_silk_foundation.$_$.i1;
  var removeClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.b;
  var addClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.a;
  var ColorGroup = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f1;
  var MutablePalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g1;
  var KMutableProperty1 = kotlin_kotlin.$_$.ua;
  //endregion
  //region block: pre-declaration
  setMetadataFor(TabVars, 'TabVars', objectMeta);
  setMetadataFor(ButtonVars, 'ButtonVars', objectMeta);
  setMetadataFor(MD, 'MD', objectMeta);
  setMetadataFor(LG, 'LG', objectMeta);
  setMetadataFor(CheckboxVars, 'CheckboxVars', objectMeta);
  setMetadataFor(InputVars, 'InputVars', objectMeta);
  setMetadataFor(SwitchVars, 'SwitchVars', objectMeta);
  setMetadataFor(Fill, 'Fill', classMeta);
  setMetadataFor(Stroke, 'Stroke', classMeta, VOID, VOID, Stroke);
  setMetadataFor(ComposableSingletons$IconsKt, 'ComposableSingletons$IconsKt', objectMeta);
  setMetadataFor(DividerVars, 'DividerVars', objectMeta);
  setMetadataFor(SurfaceVars, 'SurfaceVars', objectMeta);
  setMetadataFor(Surface$lambda$lambda$slambda, 'Surface$lambda$lambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(OverlayVars, 'OverlayVars', objectMeta);
  setMetadataFor(ComposableSingletons$OverlayKt, 'ComposableSingletons$OverlayKt', objectMeta);
  setMetadataFor(PopupVars, 'PopupVars', objectMeta);
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
    return TabsStyle$delegate.z2m(null, TabsStyle$factory());
  }
  var TabsStyle$delegate;
  function get_TabsTabRowStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsTabRowStyle$delegate.z2m(null, TabsTabRowStyle$factory());
  }
  var TabsTabRowStyle$delegate;
  function get_TabsTabStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsTabStyle$delegate.z2m(null, TabsTabStyle$factory());
  }
  var TabsTabStyle$delegate;
  function get_TabsPanelStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsPanelStyle$delegate.z2m(null, TabsPanelStyle$factory());
  }
  var TabsPanelStyle$delegate;
  function TabVars() {
    TabVars_instance = this;
    this.n3s_1 = StyleVariable('silk');
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().t2m();
    tmp.o3s_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.p3s_1 = StyleVariable('silk');
    this.q3s_1 = StyleVariable('silk');
    this.r3s_1 = StyleVariable('silk');
    this.s3s_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_px(2);
    tmp_0.t3s_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().d3t().t2m();
    tmp_1.u3s_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
  }
  protoOf(TabVars).e3t = function () {
    return this.n3s_1.z2m(this, Color$factory());
  };
  protoOf(TabVars).f3t = function () {
    return this.o3s_1.z2m(this, BorderColor$factory());
  };
  protoOf(TabVars).g3t = function () {
    return this.p3s_1.z2m(this, BackgroundColor$factory());
  };
  protoOf(TabVars).h3t = function () {
    return this.q3s_1.z2m(this, DisabledBackgroundColor$factory());
  };
  protoOf(TabVars).i3t = function () {
    return this.r3s_1.z2m(this, HoverBackgroundColor$factory());
  };
  protoOf(TabVars).j3t = function () {
    return this.s3s_1.z2m(this, PressedBackgroundColor$factory());
  };
  protoOf(TabVars).k3t = function () {
    return this.t3s_1.z2m(this, BorderThickness$factory());
  };
  protoOf(TabVars).l3t = function () {
    return this.u3s_1.z2m(this, ColorTransitionDuration$factory());
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
    var tmp_0 = TabVars_getInstance().k3t().t2m();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp, tmp_0, 'solid', TabVars_getInstance().f3t().t2m());
  }
  function TabsTabStyle$delegate$lambda($composer, $changed) {
    _init_properties_Tabs_kt__myintq();
    var $composer_0 = $composer;
    $composer_0.j1e(-900500012);
    if (isTraceInProgress()) {
      traceEventStart(-900500012, $changed, -1, 'com.varabyte.kobweb.silk.components.disclosure.TabsTabStyle$delegate.<anonymous> (Tabs.kt:52)');
    }
    var tmp0 = tabIndex(Companion_instance, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.k1e();
    return tmp0;
  }
  function TabsTabStyle$delegate$lambda_0($this$ComponentStyle) {
    _init_properties_Tabs_kt__myintq();
    $this$ComponentStyle.g3m(TabsTabStyle$delegate$lambda$lambda);
    var tmp = get_ariaDisabled($this$ComponentStyle);
    tmp.i3n(TabsTabStyle$delegate$lambda$lambda_0);
    var tmp_0 = get_hover($this$ComponentStyle).r3n(not($this$ComponentStyle, [get_ariaDisabled($this$ComponentStyle)]));
    tmp_0.i3n(TabsTabStyle$delegate$lambda$lambda_1);
    var tmp_1 = get_active($this$ComponentStyle).r3n(not($this$ComponentStyle, [get_ariaDisabled($this$ComponentStyle)]));
    tmp_1.i3n(TabsTabStyle$delegate$lambda$lambda_2);
    return Unit_instance;
  }
  function TabsTabStyle$delegate$lambda$lambda() {
    _init_properties_Tabs_kt__myintq();
    var tmp = padding(userSelect(color(backgroundColor(transition(cursor(Companion_instance, Companion_instance_1.l2k()), Companion_instance_2.k2n(listOf(['background-color', 'color', 'border-color']), TabVars_getInstance().l3t().t2m()).slice()), TabVars_getInstance().g3t().t2m()), TabVars_getInstance().e3t().t2m()), Companion_instance_3.o2k()), get_cssRem(0.5));
    var tmp_0 = margin(tmp, VOID, VOID, calc(TabsTabStyle$delegate$lambda$lambda$lambda));
    var tmp_1 = TabVars_getInstance().k3t().t2m();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp_0, tmp_1, 'solid', TabVars_getInstance().f3t().t2m());
  }
  function TabsTabStyle$delegate$lambda$lambda$lambda($this$calc) {
    _init_properties_Tabs_kt__myintq();
    return $this$calc.r2n(TabVars_getInstance().k3t().t2m());
  }
  function TabsTabStyle$delegate$lambda$lambda_0() {
    _init_properties_Tabs_kt__myintq();
    return cursor(backgroundColor(Companion_instance, TabVars_getInstance().h3t().t2m()), Companion_instance_1.m2k());
  }
  function TabsTabStyle$delegate$lambda$lambda_1() {
    _init_properties_Tabs_kt__myintq();
    return backgroundColor(Companion_instance, TabVars_getInstance().i3t().t2m());
  }
  function TabsTabStyle$delegate$lambda$lambda_2() {
    _init_properties_Tabs_kt__myintq();
    return backgroundColor(Companion_instance, TabVars_getInstance().j3t().t2m());
  }
  function TabsPanelStyle$delegate$lambda($this$base) {
    _init_properties_Tabs_kt__myintq();
    var tmp = flexGrow(fillMaxWidth(padding(Companion_instance, get_cssRem(1))), 1);
    return overflow(tmp, TabsPanelStyle$delegate$lambda$lambda);
  }
  function TabsPanelStyle$delegate$lambda$lambda($this$overflow) {
    _init_properties_Tabs_kt__myintq();
    $this$overflow.c3k(Companion_instance_4.g2m());
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
      return receiver.e3t();
    }, null);
  }
  function BorderColor$factory() {
    return getPropertyCallableRef('BorderColor', 1, KProperty1, function (receiver) {
      return receiver.f3t();
    }, null);
  }
  function BackgroundColor$factory() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.g3t();
    }, null);
  }
  function DisabledBackgroundColor$factory() {
    return getPropertyCallableRef('DisabledBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.h3t();
    }, null);
  }
  function HoverBackgroundColor$factory() {
    return getPropertyCallableRef('HoverBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.i3t();
    }, null);
  }
  function PressedBackgroundColor$factory() {
    return getPropertyCallableRef('PressedBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.j3t();
    }, null);
  }
  function BorderThickness$factory() {
    return getPropertyCallableRef('BorderThickness', 1, KProperty1, function (receiver) {
      return receiver.k3t();
    }, null);
  }
  function ColorTransitionDuration$factory() {
    return getPropertyCallableRef('ColorTransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.l3t();
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
    return ButtonStyle$delegate.z2m(null, ButtonStyle$factory());
  }
  var ButtonStyle$delegate;
  function ButtonVars() {
    ButtonVars_instance = this;
    this.m3t_1 = StyleVariable('silk');
    var tmp = this;
    var tmp0_defaultFallback = get_FocusOutlineColorVar().t2m();
    tmp.n3t_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.o3t_1 = StyleVariable('silk');
    this.p3t_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_ColorVar().t2m();
    tmp_0.q3t_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().d3t().t2m();
    tmp_1.r3t_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
    this.s3t_1 = StyleVariable('silk');
    this.t3t_1 = StyleVariable('silk');
    this.u3t_1 = StyleVariable('silk');
  }
  protoOf(ButtonVars).v3t = function () {
    return this.m3t_1.z2m(this, BackgroundDefaultColor$factory());
  };
  protoOf(ButtonVars).w3t = function () {
    return this.n3t_1.z2m(this, BackgroundFocusColor$factory());
  };
  protoOf(ButtonVars).x3t = function () {
    return this.o3t_1.z2m(this, BackgroundHoverColor$factory());
  };
  protoOf(ButtonVars).y3t = function () {
    return this.p3t_1.z2m(this, BackgroundPressedColor$factory());
  };
  protoOf(ButtonVars).e3t = function () {
    return this.q3t_1.z2m(this, Color$factory_0());
  };
  protoOf(ButtonVars).l3t = function () {
    return this.r3t_1.z2m(this, ColorTransitionDuration$factory_0());
  };
  protoOf(ButtonVars).z3t = function () {
    return this.s3t_1.z2m(this, FontSize$factory());
  };
  protoOf(ButtonVars).a3u = function () {
    return this.t3t_1.z2m(this, Height$factory());
  };
  protoOf(ButtonVars).b3u = function () {
    return this.u3t_1.z2m(this, PaddingHorizontal$factory());
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
    $composer_0 = $composer_0.b1g(-1357113061);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.e1f(onClick_0) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 16;
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.c16(variant_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.c16(type_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.f1f(enabled_0._v) ? 16384 : 8192);
    if (($changed & 458752) === 0)
      $dirty = $dirty | ((($default & 32) === 0 ? $composer_0.c16(size_0._v) : false) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 524288;
    if (!(($default & 128) === 0))
      $dirty = $dirty | 4194304;
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 234881024) === 0)
      $dirty = $dirty | ($composer_0.c16(ref_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 1879048192) === 0)
      $dirty = $dirty | ($composer_0.e1f(content) ? 536870912 : 268435456);
    if (!(($default & 194) === 194) ? true : !(($dirty & 1533916891) === 306783378) ? true : !$composer_0.e1e()) {
      $composer_0.l1e();
      if (($changed & 1) === 0 ? true : $composer_0.p1e()) {
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
        $composer_0.v18();
        if (!(($default & 32) === 0))
          $dirty = $dirty & -458753;
      }
      $composer_0.m1e();
      if (isTraceInProgress()) {
        traceEventStart(-1357113061, $dirty, -1, 'com.varabyte.kobweb.silk.components.forms.Button (Button.kt:147)');
      }
      $composer_0.j1e(994961418);
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
      $composer_0.j1e(994960472);
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
      var this_0 = thenIf(toModifier(get_ButtonStyle(), [variant_0._v], $composer_0, 0), !enabled_0._v, toModifier(get_DisabledStyle(), [], $composer_0, 64)).k3i(toModifier_0(size_0._v));
      var tmp;
      if (!(colorScheme_0._v == null)) {
        // Inline function 'com.varabyte.kobweb.silk.components.forms.Button.<anonymous>' call
        var colorScheme_1 = ensureNotNull(colorScheme_0._v);
        var isDark = Companion_instance_6.x3k($composer_0, 8).d3q();
        var isBrightColor = get_isBright(isDark ? colorScheme_1.p3q() : colorScheme_1.s3q());
        tmp = setVariable(setVariable(setVariable(setVariable(Companion_instance, ButtonVars_getInstance().e3t(), get_color(toPalette(isBrightColor ? ColorMode_LIGHT_getInstance() : ColorMode_DARK_getInstance()))), ButtonVars_getInstance().v3t(), isDark ? colorScheme_1.p3q() : colorScheme_1.s3q()), ButtonVars_getInstance().x3t(), isDark ? colorScheme_1.q3q() : colorScheme_1.t3q()), ButtonVars_getInstance().y3t(), isDark ? colorScheme_1.r3q() : colorScheme_1.u3q());
      } else {
        tmp = Companion_instance;
      }
      var tmp0_group = this_0.k3i(tmp);
      $composer_0.k1e();
      var this_1 = setVariable(tmp0_group, ButtonVars_getInstance().w3t(), focusBorderColor_0._v).k3i(modifier_0._v);
      var tmp_0;
      if (enabled_0._v) {
        // Inline function 'com.varabyte.kobweb.silk.components.forms.Button.<anonymous>' call
        var tmp_1 = Companion_instance;
        $composer_0.j1e(2066661363);
        // Inline function 'androidx.compose.runtime.cache' call
        var this_2 = $composer_0;
        var invalid = ($dirty & 14) === 4;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = this_2.n1f();
        var tmp_2;
        if (invalid ? true : it === Companion_getInstance().b19_1) {
          // Inline function 'com.varabyte.kobweb.silk.components.forms.Button.<anonymous>.<anonymous>' call
          var value = Button$lambda(onClick_0);
          this_2.t1f(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0_group_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_0.k1e();
        tmp_0 = onClick(tmp_1, tmp0_group_0);
      } else {
        tmp_0 = Companion_instance;
      }
      var tmp1_group = this_1.k3i(tmp_0);
      $composer_0.k1e();
      $composer_0.j1e(994961639);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_3 = $composer_0;
      var invalid_0 = ($dirty & 7168) === 2048;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_3.n1f();
      var tmp_4;
      if (invalid_0 ? true : it_0 === Companion_getInstance().b19_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.forms.Button.<anonymous>' call
        var value_0 = Button$lambda_0(type_0);
        this_3.t1f(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = it_0;
      }
      var tmp_5 = tmp_4;
      var tmp2_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_0.k1e();
      var tmp_6 = toAttrs(tmp1_group, tmp2_group);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.forms.Button.<anonymous>' call
      var tmp_7 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_7, 580157781, true, Button$lambda_1(ref_0, content));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.j1e(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_1.c16(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_1.n1f();
      var tmp_8;
      if (invalid_1 ? true : it_1 === Companion_getInstance().b19_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.forms.Button.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_1.t1f(value_1);
        tmp_8 = value_1;
      } else {
        tmp_8 = it_1;
      }
      var tmp_9 = tmp_8;
      var tmp0 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
      $composer_1.k1e();
      Button(tmp_6, tmp0, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v18();
    }
    var tmp3_safe_receiver = $composer_0.c1g();
    if (tmp3_safe_receiver == null)
      null;
    else {
      tmp3_safe_receiver.y1k(Button$lambda_2(onClick_0, modifier_0, variant_0, type_0, enabled_0, size_0, colorScheme_0, focusBorderColor_0, ref_0, content, $changed, $default));
    }
  }
  function MD() {
    MD_instance = this;
    this.c3u_1 = FontSizeVars_getInstance().j3u().t2m();
    this.d3u_1 = get_cssRem(2.5);
    this.e3u_1 = get_cssRem(1);
  }
  protoOf(MD).k3u = function () {
    return this.c3u_1;
  };
  protoOf(MD).l3u = function () {
    return this.d3u_1;
  };
  protoOf(MD).m3u = function () {
    return this.e3u_1;
  };
  var MD_instance;
  function MD_getInstance() {
    if (MD_instance == null)
      new MD();
    return MD_instance;
  }
  function LG() {
    LG_instance = this;
    this.n3u_1 = FontSizeVars_getInstance().q3u().t2m();
    this.o3u_1 = get_cssRem(3);
    this.p3u_1 = get_cssRem(1.5);
  }
  protoOf(LG).k3u = function () {
    return this.n3u_1;
  };
  protoOf(LG).l3u = function () {
    return this.o3u_1;
  };
  protoOf(LG).m3u = function () {
    return this.p3u_1;
  };
  var LG_instance;
  function LG_getInstance() {
    if (LG_instance == null)
      new LG();
    return LG_instance;
  }
  function toModifier_0(_this__u8e3s4) {
    _init_properties_Button_kt__2845m6();
    return setVariable(setVariable(setVariable(Companion_instance, ButtonVars_getInstance().z3t(), _this__u8e3s4.k3u()), ButtonVars_getInstance().a3u(), _this__u8e3s4.l3u()), ButtonVars_getInstance().b3u(), _this__u8e3s4.m3u());
  }
  function ButtonStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Button_kt__2845m6();
    $this$ComponentStyle.g3m(ButtonStyle$delegate$lambda$lambda);
    var tmp = get_hover($this$ComponentStyle).r3n(not($this$ComponentStyle, [get_ariaDisabled($this$ComponentStyle)]));
    tmp.i3n(ButtonStyle$delegate$lambda$lambda_0);
    var tmp_0 = get_focusVisible($this$ComponentStyle).r3n(not($this$ComponentStyle, [get_ariaDisabled($this$ComponentStyle)]));
    tmp_0.i3n(ButtonStyle$delegate$lambda$lambda_1);
    var tmp_1 = get_active($this$ComponentStyle).r3n(not($this$ComponentStyle, [get_ariaDisabled($this$ComponentStyle)]));
    tmp_1.i3n(ButtonStyle$delegate$lambda$lambda_2);
    return Unit_instance;
  }
  function ButtonStyle$delegate$lambda$lambda() {
    _init_properties_Button_kt__2845m6();
    var tmp = borderRadius(verticalAlign(padding_0(whiteSpace(fontWeight(fontSize(minWidth(height(lineHeight(backgroundColor(color(Companion_instance, ButtonVars_getInstance().e3t().t2m()), ButtonVars_getInstance().v3t().t2m()), 1.2), ButtonVars_getInstance().a3u().t2m()), ButtonVars_getInstance().a3u().t2m()), ButtonVars_getInstance().z3t().t2m()), Companion_instance_7.s2k()), Companion_instance_8.d2n()), VOID, ButtonVars_getInstance().b3u().t2m()), Companion_instance_9.x2l()), get_cssRem(0.375));
    return transition(userSelect(border(tmp, ButtonStyle$delegate$lambda$lambda$lambda), Companion_instance_3.o2k()), [CSSTransition_init_$Create$('background-color', ButtonVars_getInstance().l3t().t2m())]);
  }
  function ButtonStyle$delegate$lambda$lambda$lambda($this$border) {
    _init_properties_Button_kt__2845m6();
    $this$border.z3j(get_px(0));
    return Unit_instance;
  }
  function ButtonStyle$delegate$lambda$lambda_0() {
    _init_properties_Button_kt__2845m6();
    return cursor(backgroundColor(Companion_instance, ButtonVars_getInstance().x3t().t2m()), Companion_instance_1.l2k());
  }
  function ButtonStyle$delegate$lambda$lambda_1() {
    _init_properties_Button_kt__2845m6();
    var tmp = Companion_instance;
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return boxShadow(outline(tmp, tmp_0, 'solid', Colors_instance.i3j()), VOID, VOID, VOID, get_cssRem(0.1875), ButtonVars_getInstance().w3t().t2m());
  }
  function ButtonStyle$delegate$lambda$lambda_2() {
    _init_properties_Button_kt__2845m6();
    return backgroundColor(Companion_instance, ButtonVars_getInstance().y3t().t2m());
  }
  function Button$lambda($onClick) {
    return function (evt) {
      $onClick(evt);
      evt.f2i();
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
      return $boundThis.y29(p0, p1, p2);
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
      return receiver.v3t();
    }, null);
  }
  function BackgroundFocusColor$factory() {
    return getPropertyCallableRef('BackgroundFocusColor', 1, KProperty1, function (receiver) {
      return receiver.w3t();
    }, null);
  }
  function BackgroundHoverColor$factory() {
    return getPropertyCallableRef('BackgroundHoverColor', 1, KProperty1, function (receiver) {
      return receiver.x3t();
    }, null);
  }
  function BackgroundPressedColor$factory() {
    return getPropertyCallableRef('BackgroundPressedColor', 1, KProperty1, function (receiver) {
      return receiver.y3t();
    }, null);
  }
  function Color$factory_0() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.e3t();
    }, null);
  }
  function ColorTransitionDuration$factory_0() {
    return getPropertyCallableRef('ColorTransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.l3t();
    }, null);
  }
  function FontSize$factory() {
    return getPropertyCallableRef('FontSize', 1, KProperty1, function (receiver) {
      return receiver.z3t();
    }, null);
  }
  function Height$factory() {
    return getPropertyCallableRef('Height', 1, KProperty1, function (receiver) {
      return receiver.a3u();
    }, null);
  }
  function PaddingHorizontal$factory() {
    return getPropertyCallableRef('PaddingHorizontal', 1, KProperty1, function (receiver) {
      return receiver.b3u();
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
    return CheckboxStyle$delegate.z2m(null, CheckboxStyle$factory());
  }
  var CheckboxStyle$delegate;
  function get_CheckboxEnabledAnim() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxEnabledAnim$delegate.z2m(null, CheckboxEnabledAnim$factory());
  }
  var CheckboxEnabledAnim$delegate;
  function get_CheckboxIconContainerStyle() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxIconContainerStyle$delegate.z2m(null, CheckboxIconContainerStyle$factory());
  }
  var CheckboxIconContainerStyle$delegate;
  function get_UncheckedCheckboxIconContainerVariant() {
    _init_properties_Checkbox_kt__x46qhp();
    return UncheckedCheckboxIconContainerVariant$delegate.z2m(null, UncheckedCheckboxIconContainerVariant$factory());
  }
  var UncheckedCheckboxIconContainerVariant$delegate;
  function get_CheckedCheckboxIconContainerVariant() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckedCheckboxIconContainerVariant$delegate.z2m(null, CheckedCheckboxIconContainerVariant$factory());
  }
  var CheckedCheckboxIconContainerVariant$delegate;
  function get_CheckboxIconStyle() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxIconStyle$delegate.z2m(null, CheckboxIconStyle$factory());
  }
  var CheckboxIconStyle$delegate;
  function get_CheckboxInputVariant() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxInputVariant$delegate.z2m(null, CheckboxInputVariant$factory());
  }
  var CheckboxInputVariant$delegate;
  function CheckboxVars() {
    CheckboxVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().t2m();
    tmp.r3u_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_cssRem(0.125);
    tmp_0.s3u_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_cssRem(0.125);
    tmp_1.t3u_1 = StyleVariable_0(tmp0_defaultFallback_1, 'silk');
    this.u3u_1 = StyleVariable('silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_cssRem(0.5);
    tmp_2.v3u_1 = StyleVariable_0(tmp0_defaultFallback_2, 'silk');
    this.w3u_1 = StyleVariable('silk');
    this.x3u_1 = StyleVariable('silk');
    var tmp_3 = this;
    var tmp0_defaultFallback_3 = get_FocusOutlineColorVar().t2m();
    tmp_3.y3u_1 = StyleVariable_0(tmp0_defaultFallback_3, 'silk');
    var tmp_4 = this;
    var tmp0_defaultFallback_4 = get_cssRem(0.1875);
    tmp_4.z3u_1 = StyleVariable_0(tmp0_defaultFallback_4, 'silk');
    this.a3v_1 = StyleVariable('silk');
    this.b3v_1 = StyleVariable('silk');
    this.c3v_1 = StyleVariable('silk');
    this.d3v_1 = StyleVariable('silk');
    var tmp_5 = this;
    var tmp0_defaultFallback_5 = TransitionDurationVars_getInstance().f3v().t2m();
    tmp_5.e3v_1 = StyleVariable_1(tmp0_defaultFallback_5, 'silk');
  }
  protoOf(CheckboxVars).f3t = function () {
    return this.r3u_1.z2m(this, BorderColor$factory_0());
  };
  protoOf(CheckboxVars).g3v = function () {
    return this.s3u_1.z2m(this, BorderRadius$factory());
  };
  protoOf(CheckboxVars).h3v = function () {
    return this.t3u_1.z2m(this, BorderWidth$factory());
  };
  protoOf(CheckboxVars).i3v = function () {
    return this.u3u_1.z2m(this, Size$factory());
  };
  protoOf(CheckboxVars).j3v = function () {
    return this.v3u_1.z2m(this, Spacing$factory());
  };
  protoOf(CheckboxVars).z3t = function () {
    return this.w3u_1.z2m(this, FontSize$factory_0());
  };
  protoOf(CheckboxVars).k3v = function () {
    return this.x3u_1.z2m(this, IconSize$factory());
  };
  protoOf(CheckboxVars).l3v = function () {
    return this.y3u_1.z2m(this, FocusOutlineColor$factory());
  };
  protoOf(CheckboxVars).m3v = function () {
    return this.z3u_1.z2m(this, FocusOutlineSpread$factory());
  };
  protoOf(CheckboxVars).n3v = function () {
    return this.a3v_1.z2m(this, UncheckedBackgroundColor$factory());
  };
  protoOf(CheckboxVars).o3v = function () {
    return this.b3v_1.z2m(this, IconColor$factory());
  };
  protoOf(CheckboxVars).p3v = function () {
    return this.c3v_1.z2m(this, IconBackgroundColor$factory());
  };
  protoOf(CheckboxVars).q3v = function () {
    return this.d3v_1.z2m(this, IconBackgroundHoverColor$factory());
  };
  protoOf(CheckboxVars).r3v = function () {
    return this.e3v_1.z2m(this, TransitionDuration$factory());
  };
  var CheckboxVars_instance;
  function CheckboxVars_getInstance() {
    if (CheckboxVars_instance == null)
      new CheckboxVars();
    return CheckboxVars_instance;
  }
  function CheckboxStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$ComponentStyle.g3m(CheckboxStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function CheckboxStyle$delegate$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = cursor(fontSize(userSelect(gap(Companion_instance, CheckboxVars_getInstance().j3v().t2m()), Companion_instance_3.o2k()), CheckboxVars_getInstance().z3t().t2m()), Companion_instance_1.l2k());
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'relative';
    return position(tmp, tmp$ret$3);
  }
  function CheckboxEnabledAnim$delegate$lambda($this$Keyframes) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$Keyframes.k3k(CheckboxEnabledAnim$delegate$lambda$lambda);
    $this$Keyframes.l3k(CheckboxEnabledAnim$delegate$lambda$lambda_0);
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
    $this$ComponentStyle.g3m(CheckboxIconContainerStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function CheckboxIconContainerStyle$delegate$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = size(fontSize(Companion_instance, CheckboxVars_getInstance().k3v().t2m()), CheckboxVars_getInstance().i3v().t2m());
    var tmp_0 = CheckboxVars_getInstance().h3v().t2m();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition_0(borderRadius(border_0(tmp, tmp_0, 'solid', CheckboxVars_getInstance().f3t().t2m()), CheckboxVars_getInstance().g3v().t2m()), Companion_instance_2.k2n(listOf(['background-color', 'border-color']), CheckboxVars_getInstance().r3v().t2m()));
  }
  function UncheckedCheckboxIconContainerVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Checkbox_kt__x46qhp();
    return backgroundColor(Companion_instance, CheckboxVars_getInstance().n3v().t2m());
  }
  function CheckedCheckboxIconContainerVariant$delegate$lambda($this$addVariant) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$addVariant.g3m(CheckedCheckboxIconContainerVariant$delegate$lambda$lambda);
    return Unit_instance;
  }
  function CheckedCheckboxIconContainerVariant$delegate$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = backgroundColor(Companion_instance, CheckboxVars_getInstance().p3v().t2m());
    return border(tmp, CheckedCheckboxIconContainerVariant$delegate$lambda$lambda$lambda);
  }
  function CheckedCheckboxIconContainerVariant$delegate$lambda$lambda$lambda($this$border) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$border.x3j(CheckboxVars_getInstance().p3v().t2m());
    return Unit_instance;
  }
  function CheckboxIconStyle$delegate$lambda($this$base) {
    _init_properties_Checkbox_kt__x46qhp();
    return color(size(Companion_instance, CheckboxVars_getInstance().i3v().t2m()), CheckboxVars_getInstance().o3v().t2m());
  }
  function CheckboxInputVariant$delegate$lambda($this$addVariant) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$addVariant.g3m(CheckboxInputVariant$delegate$lambda$lambda);
    $this$addVariant.i3m(':focus-visible + *', CheckboxInputVariant$delegate$lambda$lambda_0);
    $this$addVariant.i3m(':not([aria-disabled]):hover + *', CheckboxInputVariant$delegate$lambda$lambda_1);
    return Unit_instance;
  }
  function CheckboxInputVariant$delegate$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    return get_HiddenInputModifier();
  }
  function CheckboxInputVariant$delegate$lambda$lambda_0() {
    _init_properties_Checkbox_kt__x46qhp();
    return boxShadow(Companion_instance, VOID, VOID, VOID, CheckboxVars_getInstance().m3v().t2m(), CheckboxVars_getInstance().l3v().t2m());
  }
  function CheckboxInputVariant$delegate$lambda$lambda_1() {
    _init_properties_Checkbox_kt__x46qhp();
    return setVariable(Companion_instance, CheckboxVars_getInstance().p3v(), CheckboxVars_getInstance().q3v().t2m());
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
      return receiver.f3t();
    }, null);
  }
  function BorderRadius$factory() {
    return getPropertyCallableRef('BorderRadius', 1, KProperty1, function (receiver) {
      return receiver.g3v();
    }, null);
  }
  function BorderWidth$factory() {
    return getPropertyCallableRef('BorderWidth', 1, KProperty1, function (receiver) {
      return receiver.h3v();
    }, null);
  }
  function Size$factory() {
    return getPropertyCallableRef('Size', 1, KProperty1, function (receiver) {
      return receiver.i3v();
    }, null);
  }
  function Spacing$factory() {
    return getPropertyCallableRef('Spacing', 1, KProperty1, function (receiver) {
      return receiver.j3v();
    }, null);
  }
  function FontSize$factory_0() {
    return getPropertyCallableRef('FontSize', 1, KProperty1, function (receiver) {
      return receiver.z3t();
    }, null);
  }
  function IconSize$factory() {
    return getPropertyCallableRef('IconSize', 1, KProperty1, function (receiver) {
      return receiver.k3v();
    }, null);
  }
  function FocusOutlineColor$factory() {
    return getPropertyCallableRef('FocusOutlineColor', 1, KProperty1, function (receiver) {
      return receiver.l3v();
    }, null);
  }
  function FocusOutlineSpread$factory() {
    return getPropertyCallableRef('FocusOutlineSpread', 1, KProperty1, function (receiver) {
      return receiver.m3v();
    }, null);
  }
  function UncheckedBackgroundColor$factory() {
    return getPropertyCallableRef('UncheckedBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.n3v();
    }, null);
  }
  function IconColor$factory() {
    return getPropertyCallableRef('IconColor', 1, KProperty1, function (receiver) {
      return receiver.o3v();
    }, null);
  }
  function IconBackgroundColor$factory() {
    return getPropertyCallableRef('IconBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.p3v();
    }, null);
  }
  function IconBackgroundHoverColor$factory() {
    return getPropertyCallableRef('IconBackgroundHoverColor', 1, KProperty1, function (receiver) {
      return receiver.q3v();
    }, null);
  }
  function TransitionDuration$factory() {
    return getPropertyCallableRef('TransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.r3v();
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
    return InputGroupStyle$delegate.z2m(null, InputGroupStyle$factory());
  }
  var InputGroupStyle$delegate;
  function get_InputStyle() {
    _init_properties_Input_kt__b04mg8();
    return InputStyle$delegate.z2m(null, InputStyle$factory());
  }
  var InputStyle$delegate;
  function get_OutlinedInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return OutlinedInputVariant$delegate.z2m(null, OutlinedInputVariant$factory());
  }
  var OutlinedInputVariant$delegate;
  function get_FilledInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return FilledInputVariant$delegate.z2m(null, FilledInputVariant$factory());
  }
  var FilledInputVariant$delegate;
  function get_FlushedInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return FlushedInputVariant$delegate.z2m(null, FlushedInputVariant$factory());
  }
  var FlushedInputVariant$delegate;
  function get_UnstyledInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return UnstyledInputVariant$delegate.z2m(null, UnstyledInputVariant$factory());
  }
  var UnstyledInputVariant$delegate;
  function InputVars() {
    InputVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().t2m();
    tmp.s3v_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.t3v_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_FocusOutlineColorVar().t2m();
    tmp_0.u3v_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    this.v3v_1 = StyleVariable('silk');
    this.w3v_1 = StyleVariable('silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().d3t().t2m();
    tmp_1.x3v_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
    this.y3v_1 = StyleVariable('silk');
    this.z3v_1 = StyleVariable('silk');
    this.a3w_1 = StyleVariable('silk');
    this.b3w_1 = StyleVariable('silk');
    this.c3w_1 = StyleVariable('silk');
    this.d3w_1 = StyleVariable('silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_PlaceholderOpacityVar().t2m();
    tmp_2.e3w_1 = StyleVariable_2(tmp0_defaultFallback_2, 'silk');
    var tmp_3 = this;
    var tmp0_defaultFallback_3 = get_PlaceholderColorVar().t2m();
    tmp_3.f3w_1 = StyleVariable_0(tmp0_defaultFallback_3, 'silk');
    var tmp_4 = this;
    var tmp0_defaultFallback_4 = get_cssRem(2.25);
    tmp_4.g3w_1 = StyleVariable_0(tmp0_defaultFallback_4, 'silk');
    var tmp_5 = this;
    var tmp0_defaultFallback_5 = get_cssRem(2.25);
    tmp_5.h3w_1 = StyleVariable_0(tmp0_defaultFallback_5, 'silk');
  }
  protoOf(InputVars).f3t = function () {
    return this.s3v_1.z2m(this, BorderColor$factory_1());
  };
  protoOf(InputVars).g3v = function () {
    return this.t3v_1.z2m(this, BorderRadius$factory_0());
  };
  protoOf(InputVars).i3w = function () {
    return this.u3v_1.z2m(this, BorderFocusColor$factory());
  };
  protoOf(InputVars).j3w = function () {
    return this.v3v_1.z2m(this, BorderHoverColor$factory());
  };
  protoOf(InputVars).k3w = function () {
    return this.w3v_1.z2m(this, BorderInvalidColor$factory());
  };
  protoOf(InputVars).l3t = function () {
    return this.x3v_1.z2m(this, ColorTransitionDuration$factory_1());
  };
  protoOf(InputVars).l3w = function () {
    return this.y3v_1.z2m(this, FilledColor$factory());
  };
  protoOf(InputVars).m3w = function () {
    return this.z3v_1.z2m(this, FilledHoverColor$factory());
  };
  protoOf(InputVars).n3w = function () {
    return this.a3w_1.z2m(this, FilledFocusColor$factory());
  };
  protoOf(InputVars).z3t = function () {
    return this.b3w_1.z2m(this, FontSize$factory_1());
  };
  protoOf(InputVars).a3u = function () {
    return this.c3w_1.z2m(this, Height$factory_0());
  };
  protoOf(InputVars).o3w = function () {
    return this.d3w_1.z2m(this, Padding$factory());
  };
  protoOf(InputVars).p3w = function () {
    return this.e3w_1.z2m(this, PlaceholderOpacity$factory());
  };
  protoOf(InputVars).q3w = function () {
    return this.f3w_1.z2m(this, PlaceholderColor$factory());
  };
  var InputVars_instance;
  function InputVars_getInstance() {
    if (InputVars_instance == null)
      new InputVars();
    return InputVars_instance;
  }
  function inputPadding(_this__u8e3s4) {
    _init_properties_Input_kt__b04mg8();
    var padding = InputVars_getInstance().o3w().t2m();
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
    var tmp_1 = outline(tmp, tmp_0, 'solid', Colors_instance.i3j());
    var tmp_2 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return fontSize(borderRadius(border_0(tmp_1, tmp_2, 'solid', Colors_instance.i3j()), InputVars_getInstance().g3v().t2m()), InputVars_getInstance().z3t().t2m());
  }
  function InputStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Input_kt__b04mg8();
    $this$ComponentStyle.g3m(InputStyle$delegate$lambda$lambda);
    var tmp = get_placeholder($this$ComponentStyle);
    tmp.i3n(InputStyle$delegate$lambda$lambda_0);
    return Unit_instance;
  }
  function InputStyle$delegate$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = backgroundColor(fontSize(height(color(appearance(Companion_instance, Companion_instance_11.o2k()), get_ColorVar().t2m()), InputVars_getInstance().a3u().t2m()), InputVars_getInstance().z3t().t2m()), Colors_instance.i3j());
    var tmp_0 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = outline(tmp, tmp_0, 'solid', Colors_instance.i3j());
    var tmp_2 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition_0(border_0(tmp_1, tmp_2, 'solid', Colors_instance.i3j()), Companion_instance_2.k2n(listOf(['border-color', 'box-shadow', 'background-color']), InputVars_getInstance().l3t().t2m()));
  }
  function InputStyle$delegate$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return color(opacity(Companion_instance, InputVars_getInstance().p3w().t2m()), InputVars_getInstance().q3w().t2m());
  }
  function OutlinedInputVariant$delegate$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.g3m(OutlinedInputVariant$delegate$lambda$lambda);
    var tmp = get_ariaInvalid($this$addVariant);
    tmp.i3n(OutlinedInputVariant$delegate$lambda$lambda_0);
    var tmp_0 = get_hover($this$addVariant).r3n(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_0.i3n(OutlinedInputVariant$delegate$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).r3n(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_1.i3n(OutlinedInputVariant$delegate$lambda$lambda_2);
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
    var tmp = borderRadius(inputPadding(Companion_instance), InputVars_getInstance().g3v().t2m());
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border_0(tmp, tmp_0, 'solid', InputVars_getInstance().f3t().t2m());
  }
  function OutlinedInputVariant$delegate$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered(Companion_instance, InputVars_getInstance().k3w().t2m());
  }
  function OutlinedInputVariant$delegate$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    return border(tmp, OutlinedInputVariant$delegate$lambda$lambda$lambda);
  }
  function OutlinedInputVariant$delegate$lambda$lambda$lambda($this$border) {
    _init_properties_Input_kt__b04mg8();
    $this$border.x3j(InputVars_getInstance().j3w().t2m());
    return Unit_instance;
  }
  function OutlinedInputVariant$delegate$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered(Companion_instance, InputVars_getInstance().i3w().t2m());
  }
  function FilledInputVariant$delegate$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.g3m(FilledInputVariant$delegate$lambda$lambda);
    var tmp = get_hover($this$addVariant).r3n(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp.i3n(FilledInputVariant$delegate$lambda$lambda_0);
    var tmp_0 = get_ariaInvalid($this$addVariant);
    tmp_0.i3n(FilledInputVariant$delegate$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).r3n(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_1.i3n(FilledInputVariant$delegate$lambda$lambda_2);
    return Unit_instance;
  }
  function invoke$bordered_0(_this__u8e3s4, color) {
    return boxShadow(border(_this__u8e3s4, FilledInputVariant$delegate$lambda$bordered$lambda(color)), VOID, VOID, VOID, get_px(1), color);
  }
  function FilledInputVariant$delegate$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = borderRadius(backgroundColor(inputPadding(Companion_instance), InputVars_getInstance().l3w().t2m()), InputVars_getInstance().g3v().t2m());
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border_0(tmp, tmp_0, 'solid', Colors_instance.i3j());
  }
  function FilledInputVariant$delegate$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return backgroundColor(Companion_instance, InputVars_getInstance().m3w().t2m());
  }
  function FilledInputVariant$delegate$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_0(Companion_instance, InputVars_getInstance().k3w().t2m());
  }
  function FilledInputVariant$delegate$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_0(backgroundColor(Companion_instance, InputVars_getInstance().n3w().t2m()), InputVars_getInstance().i3w().t2m());
  }
  function FilledInputVariant$delegate$lambda$bordered$lambda($color) {
    return function ($this$border) {
      $this$border.x3j($color);
      return Unit_instance;
    };
  }
  function FlushedInputVariant$delegate$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.g3m(FlushedInputVariant$delegate$lambda$lambda);
    var tmp = get_ariaInvalid($this$addVariant);
    tmp.i3n(FlushedInputVariant$delegate$lambda$lambda_0);
    var tmp_0 = get_hover($this$addVariant).r3n(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_0.i3n(FlushedInputVariant$delegate$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).r3n(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_1.i3n(FlushedInputVariant$delegate$lambda$lambda_2);
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
    return borderBottom(tmp, tmp_0, 'solid', InputVars_getInstance().f3t().t2m());
  }
  function FlushedInputVariant$delegate$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_1(Companion_instance, InputVars_getInstance().k3w().t2m());
  }
  function FlushedInputVariant$delegate$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    return border(tmp, FlushedInputVariant$delegate$lambda$lambda$lambda);
  }
  function FlushedInputVariant$delegate$lambda$lambda$lambda($this$border) {
    _init_properties_Input_kt__b04mg8();
    $this$border.x3j(InputVars_getInstance().j3w().t2m());
    return Unit_instance;
  }
  function FlushedInputVariant$delegate$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_1(Companion_instance, InputVars_getInstance().i3w().t2m());
  }
  function FlushedInputVariant$delegate$lambda$bordered$lambda($color) {
    return function ($this$border) {
      $this$border.x3j($color);
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
      return receiver.f3t();
    }, null);
  }
  function BorderRadius$factory_0() {
    return getPropertyCallableRef('BorderRadius', 1, KProperty1, function (receiver) {
      return receiver.g3v();
    }, null);
  }
  function BorderFocusColor$factory() {
    return getPropertyCallableRef('BorderFocusColor', 1, KProperty1, function (receiver) {
      return receiver.i3w();
    }, null);
  }
  function BorderHoverColor$factory() {
    return getPropertyCallableRef('BorderHoverColor', 1, KProperty1, function (receiver) {
      return receiver.j3w();
    }, null);
  }
  function BorderInvalidColor$factory() {
    return getPropertyCallableRef('BorderInvalidColor', 1, KProperty1, function (receiver) {
      return receiver.k3w();
    }, null);
  }
  function ColorTransitionDuration$factory_1() {
    return getPropertyCallableRef('ColorTransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.l3t();
    }, null);
  }
  function FilledColor$factory() {
    return getPropertyCallableRef('FilledColor', 1, KProperty1, function (receiver) {
      return receiver.l3w();
    }, null);
  }
  function FilledHoverColor$factory() {
    return getPropertyCallableRef('FilledHoverColor', 1, KProperty1, function (receiver) {
      return receiver.m3w();
    }, null);
  }
  function FilledFocusColor$factory() {
    return getPropertyCallableRef('FilledFocusColor', 1, KProperty1, function (receiver) {
      return receiver.n3w();
    }, null);
  }
  function FontSize$factory_1() {
    return getPropertyCallableRef('FontSize', 1, KProperty1, function (receiver) {
      return receiver.z3t();
    }, null);
  }
  function Height$factory_0() {
    return getPropertyCallableRef('Height', 1, KProperty1, function (receiver) {
      return receiver.a3u();
    }, null);
  }
  function Padding$factory() {
    return getPropertyCallableRef('Padding', 1, KProperty1, function (receiver) {
      return receiver.o3w();
    }, null);
  }
  function PlaceholderOpacity$factory() {
    return getPropertyCallableRef('PlaceholderOpacity', 1, KProperty1, function (receiver) {
      return receiver.p3w();
    }, null);
  }
  function PlaceholderColor$factory() {
    return getPropertyCallableRef('PlaceholderColor', 1, KProperty1, function (receiver) {
      return receiver.q3w();
    }, null);
  }
  var properties_initialized_Input_kt_tklayu;
  function _init_properties_Input_kt__b04mg8() {
    if (!properties_initialized_Input_kt_tklayu) {
      properties_initialized_Input_kt_tklayu = true;
      var tmp = whiteSpace(overflow_0(clip(padding(margin_0(size(border_0(Companion_instance, get_px(0)), get_px(1)), get_px(-1)), get_px(0)), RectF_init_$Create$(50.0)), Companion_instance_4.f2m()), Companion_instance_8.d2n());
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
    return SwitchStyle$delegate.z2m(null, SwitchStyle$factory());
  }
  var SwitchStyle$delegate;
  function get_SwitchTrackStyle() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchTrackStyle$delegate.z2m(null, SwitchTrackStyle$factory());
  }
  var SwitchTrackStyle$delegate;
  function get_SwitchInputVariant() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchInputVariant$delegate.z2m(null, SwitchInputVariant$factory());
  }
  var SwitchInputVariant$delegate;
  function get_SwitchThumbStyle() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchThumbStyle$delegate.z2m(null, SwitchThumbStyle$factory());
  }
  var SwitchThumbStyle$delegate;
  function SwitchVars() {
    SwitchVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_px(9999);
    tmp.r3w_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.s3w_1 = StyleVariable('silk');
    this.t3w_1 = StyleVariable('silk');
    this.u3w_1 = StyleVariable('silk');
    this.v3w_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_FocusOutlineColorVar().t2m();
    tmp_0.w3w_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    this.x3w_1 = StyleVariable('silk');
    this.y3w_1 = StyleVariable('silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().a3x().t2m();
    tmp_1.z3w_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
  }
  protoOf(SwitchVars).g3v = function () {
    return this.r3w_1.z2m(this, BorderRadius$factory_1());
  };
  protoOf(SwitchVars).b3x = function () {
    return this.s3w_1.z2m(this, TrackWidth$factory());
  };
  protoOf(SwitchVars).c3x = function () {
    return this.t3w_1.z2m(this, TrackHeight$factory());
  };
  protoOf(SwitchVars).d3x = function () {
    return this.u3w_1.z2m(this, TrackPadding$factory());
  };
  protoOf(SwitchVars).e3x = function () {
    return this.v3w_1.z2m(this, TrackBackgroundColor$factory());
  };
  protoOf(SwitchVars).f3x = function () {
    return this.w3w_1.z2m(this, FocusColor$factory());
  };
  protoOf(SwitchVars).g3x = function () {
    return this.x3w_1.z2m(this, ThumbOffset$factory());
  };
  protoOf(SwitchVars).h3x = function () {
    return this.y3w_1.z2m(this, ThumbColor$factory());
  };
  protoOf(SwitchVars).r3v = function () {
    return this.z3w_1.z2m(this, TransitionDuration$factory_0());
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
    $this$ComponentStyle.g3m(SwitchTrackStyle$delegate$lambda$lambda);
    var tmp = get_hover($this$ComponentStyle).r3n(not($this$ComponentStyle, [get_ariaDisabled($this$ComponentStyle)]));
    tmp.i3n(SwitchTrackStyle$delegate$lambda$lambda_0);
    return Unit_instance;
  }
  function SwitchTrackStyle$delegate$lambda$lambda() {
    _init_properties_Switch_kt__dwcqr0();
    return boxSizing(transition(backgroundColor(borderRadius(padding(minHeight(height(minWidth(width(Companion_instance, SwitchVars_getInstance().b3x().t2m()), SwitchVars_getInstance().b3x().t2m()), SwitchVars_getInstance().c3x().t2m()), SwitchVars_getInstance().c3x().t2m()), SwitchVars_getInstance().d3x().t2m()), SwitchVars_getInstance().g3v().t2m()), SwitchVars_getInstance().e3x().t2m()), [CSSTransition_init_$Create$('background-color', SwitchVars_getInstance().r3v().t2m())]), Companion_instance_12.h2k());
  }
  function SwitchTrackStyle$delegate$lambda$lambda_0() {
    _init_properties_Switch_kt__dwcqr0();
    return cursor(Companion_instance, Companion_instance_1.l2k());
  }
  function SwitchInputVariant$delegate$lambda($this$addVariant) {
    _init_properties_Switch_kt__dwcqr0();
    $this$addVariant.g3m(SwitchInputVariant$delegate$lambda$lambda);
    $this$addVariant.i3m(':focus-visible + *', SwitchInputVariant$delegate$lambda$lambda_0);
    return Unit_instance;
  }
  function SwitchInputVariant$delegate$lambda$lambda() {
    _init_properties_Switch_kt__dwcqr0();
    return get_HiddenInputModifier();
  }
  function SwitchInputVariant$delegate$lambda$lambda_0() {
    _init_properties_Switch_kt__dwcqr0();
    return boxShadow(Companion_instance, VOID, VOID, VOID, get_cssRem(0.1875), SwitchVars_getInstance().f3x().t2m());
  }
  function SwitchThumbStyle$delegate$lambda($this$base) {
    _init_properties_Switch_kt__dwcqr0();
    return transition(translateX(backgroundColor(borderRadius(size(Companion_instance, SwitchVars_getInstance().c3x().t2m()), SwitchVars_getInstance().g3v().t2m()), SwitchVars_getInstance().h3x().t2m()), SwitchVars_getInstance().g3x().t2m()), [CSSTransition_init_$Create$('translate', SwitchVars_getInstance().r3v().t2m())]);
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
      return receiver.g3v();
    }, null);
  }
  function TrackWidth$factory() {
    return getPropertyCallableRef('TrackWidth', 1, KProperty1, function (receiver) {
      return receiver.b3x();
    }, null);
  }
  function TrackHeight$factory() {
    return getPropertyCallableRef('TrackHeight', 1, KProperty1, function (receiver) {
      return receiver.c3x();
    }, null);
  }
  function TrackPadding$factory() {
    return getPropertyCallableRef('TrackPadding', 1, KProperty1, function (receiver) {
      return receiver.d3x();
    }, null);
  }
  function TrackBackgroundColor$factory() {
    return getPropertyCallableRef('TrackBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.e3x();
    }, null);
  }
  function FocusColor$factory() {
    return getPropertyCallableRef('FocusColor', 1, KProperty1, function (receiver) {
      return receiver.f3x();
    }, null);
  }
  function ThumbOffset$factory() {
    return getPropertyCallableRef('ThumbOffset', 1, KProperty1, function (receiver) {
      return receiver.g3x();
    }, null);
  }
  function ThumbColor$factory() {
    return getPropertyCallableRef('ThumbColor', 1, KProperty1, function (receiver) {
      return receiver.h3x();
    }, null);
  }
  function TransitionDuration$factory_0() {
    return getPropertyCallableRef('TransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.r3v();
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
    return CanvasStyle$delegate.z2m(null, CanvasStyle$factory());
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
  function HamburgerIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.b1g(-1069051533);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 2;
    if (!(($default & 1) === 1) ? true : !(($dirty & 11) === 2) ? true : !$composer_0.e1e()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1069051533, $dirty, -1, 'com.varabyte.kobweb.silk.components.icons.HamburgerIcon (Icons.kt:325)');
      }
      createIcon(null, null, new Stroke(3), toAttrs(modifier_0._v), ComposableSingletons$IconsKt_getInstance().v3x_1, $composer_0, 25088, 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v18();
    }
    var tmp0_safe_receiver = $composer_0.c1g();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y1k(HamburgerIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function CloseIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.b1g(-15719902);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 2;
    if (!(($default & 1) === 1) ? true : !(($dirty & 11) === 2) ? true : !$composer_0.e1e()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (isTraceInProgress()) {
        traceEventStart(-15719902, $dirty, -1, 'com.varabyte.kobweb.silk.components.icons.CloseIcon (Icons.kt:280)');
      }
      createIcon(null, null, new Stroke(3), toAttrs(modifier_0._v), ComposableSingletons$IconsKt_getInstance().t3x_1, $composer_0, 25088, 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v18();
    }
    var tmp0_safe_receiver = $composer_0.c1g();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y1k(CloseIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function createIcon(viewBox, width, renderStyle, attrs, content, $composer, $changed, $default) {
    var viewBox_0 = {_v: viewBox};
    var width_0 = {_v: width};
    var renderStyle_0 = {_v: renderStyle};
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.b1g(-26632938);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ((($default & 1) === 0 ? $composer_0.c16(viewBox_0._v) : false) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 16;
    if (($changed & 896) === 0)
      $dirty = $dirty | ((($default & 4) === 0 ? $composer_0.c16(renderStyle_0._v) : false) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.e1f(attrs_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.e1f(content) ? 16384 : 8192);
    if (!(($default & 2) === 2) ? true : !(($dirty & 46811) === 9362) ? true : !$composer_0.e1e()) {
      $composer_0.l1e();
      if (($changed & 1) === 0 ? true : $composer_0.p1e()) {
        if (!(($default & 1) === 0)) {
          viewBox_0._v = Companion_instance_13.l2p(24);
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
        $composer_0.v18();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.m1e();
      if (isTraceInProgress()) {
        traceEventStart(-26632938, $dirty, -1, 'com.varabyte.kobweb.silk.components.icons.createIcon (Icons.kt:56)');
      }
      Svg(createIcon$lambda(width_0, viewBox_0, renderStyle_0, attrs_0), content, $composer_0, 112 & $dirty >> 9, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v18();
    }
    var tmp0_safe_receiver = $composer_0.c1g();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y1k(createIcon$lambda_0(viewBox_0, width_0, renderStyle_0, attrs_0, content, $changed, $default));
    }
  }
  function Fill() {
  }
  function Stroke(strokeWidth) {
    strokeWidth = strokeWidth === VOID ? null : strokeWidth;
    this.c3y_1 = strokeWidth;
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.y29(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_1$lambda_21hevk($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(187923078, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-1.<anonymous> (Icons.kt:82)');
    }
    $composer_0.j1e(-1310550210);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.n1f();
    var tmp;
    if (false ? true : it === Companion_getInstance().b19_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-1.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_1$lambda$lambda_6jt1tn;
      $composer_0.t1f(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.k1e();
    Path($this$createIcon, tmp0_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_1$lambda$lambda_6jt1tn($this$Path) {
    $this$Path.s2p(ComposableSingletons$IconsKt$lambda_1$lambda$lambda$lambda_jixjw0);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_1$lambda$lambda$lambda_jixjw0($this$d) {
    $this$d.u2p(20, 11);
    $this$d.a2q(7.83);
    $this$d.v2p(5.59, -5.59, true);
    $this$d.w2p(12, 4);
    $this$d.v2p(-8, 8, true);
    $this$d.v2p(8, 8, true);
    $this$d.v2p(1.41, -1.41, true);
    $this$d.w2p(7.83, 13);
    $this$d.a2q(20);
    $this$d.x2p(-2, true);
    $this$d.d2q();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.y29(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_2$lambda_qs526n($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(465018625, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-2.<anonymous> (Icons.kt:103)');
    }
    $composer_0.j1e(-1816108166);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.n1f();
    var tmp;
    if (false ? true : it === Companion_getInstance().b19_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-2.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_2$lambda$lambda_vhd48s;
      $composer_0.t1f(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.k1e();
    Path($this$createIcon, tmp0_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_2$lambda$lambda_vhd48s($this$Path) {
    $this$Path.s2p(ComposableSingletons$IconsKt$lambda_2$lambda$lambda$lambda_hsrvsf);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_2$lambda$lambda$lambda_hsrvsf($this$d) {
    $this$d.u2p(20, 12);
    $this$d.v2p(-1.41, -1.41, true);
    $this$d.w2p(13, 16.17);
    $this$d.y2p(4);
    $this$d.z2p(-2, true);
    $this$d.x2p(12.17, true);
    $this$d.v2p(-5.58, -5.59, true);
    $this$d.w2p(4, 12);
    $this$d.v2p(8, 8, true);
    $this$d.v2p(8, -8, true);
    $this$d.d2q();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.y29(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_3$lambda_ffciqa($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1093309942, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-3.<anonymous> (Icons.kt:124)');
    }
    $composer_0.j1e(1973301197);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.n1f();
    var tmp;
    if (false ? true : it === Companion_getInstance().b19_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-3.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_3$lambda$lambda_em6vb7;
      $composer_0.t1f(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.k1e();
    Path($this$createIcon, tmp0_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_3$lambda$lambda_em6vb7($this$Path) {
    $this$Path.s2p(ComposableSingletons$IconsKt$lambda_3$lambda$lambda$lambda_fwmqia);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_3$lambda$lambda$lambda_fwmqia($this$d) {
    $this$d.u2p(12, 4);
    $this$d.v2p(-1.14, 1.41, true);
    $this$d.w2p(16.17, 11);
    $this$d.a2q(4);
    $this$d.x2p(2, true);
    $this$d.z2p(12.17, true);
    $this$d.v2p(-5.58, 5.59, true);
    $this$d.w2p(12, 20);
    $this$d.v2p(8, -8, true);
    $this$d.d2q();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.y29(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_4$lambda_de9ybx($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(353353466, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-4.<anonymous> (Icons.kt:144)');
    }
    $composer_0.j1e(1467743210);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.n1f();
    var tmp;
    if (false ? true : it === Companion_getInstance().b19_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-4.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_4$lambda$lambda_abd73y;
      $composer_0.t1f(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.k1e();
    Path($this$createIcon, tmp0_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_4$lambda$lambda_abd73y($this$Path) {
    $this$Path.s2p(ComposableSingletons$IconsKt$lambda_4$lambda$lambda$lambda_lf2p65);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_4$lambda$lambda$lambda_lf2p65($this$d) {
    $this$d.u2p(4, 12);
    $this$d.v2p(1.41, 1.41, true);
    $this$d.w2p(11, 7.83);
    $this$d.y2p(20);
    $this$d.z2p(2, true);
    $this$d.y2p(7.83);
    $this$d.v2p(5.58, 5.59, true);
    $this$d.w2p(20, 12);
    $this$d.v2p(-8, -8, true);
    $this$d.v2p(-8, 8, true);
    $this$d.d2q();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.y29(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_5$lambda_st7ml0($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(14879965, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-5.<anonymous> (Icons.kt:165)');
    }
    $composer_0.j1e(962185252);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.n1f();
    var tmp;
    if (false ? true : it === Companion_getInstance().b19_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-5.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_5$lambda$lambda_z8x9j3;
      $composer_0.t1f(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.k1e();
    Path($this$createIcon, tmp0_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_5$lambda$lambda_z8x9j3($this$Path) {
    $this$Path.s2p(ComposableSingletons$IconsKt$lambda_5$lambda$lambda$lambda_cabx4k);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_5$lambda$lambda$lambda_cabx4k($this$d) {
    $this$d.u2p(21.843, 3.455);
    $this$d.b2q(6.961, 6.961, 0, 0, 0, -9.846, 0, true);
    $this$d.w2p(1.619, 13.832);
    $this$d.b2q(5.128, 5.128, 0, 0, 0, 7.252, 7.252, true);
    $this$d.w2p(17.3, 12.653);
    $this$d.c2q(3.293, 3.293, 0, 1, 0, 12.646, 8);
    $this$d.w2p(7.457, 13.184);
    $this$d.c2q(1, 1, 0, 1, 0, 8.871, 14.6);
    $this$d.w2p(14.06, 9.409);
    $this$d.b2q(1.294, 1.294, 0, 0, 1, 1.829, 1.83, true);
    $this$d.w2p(7.457, 19.67);
    $this$d.b2q(3.128, 3.128, 0, 0, 1, -4.424, -4.424, true);
    $this$d.w2p(13.411, 4.869);
    $this$d.b2q(4.962, 4.962, 0, 1, 1, 7.018, 7.018, true);
    $this$d.w2p(12.646, 19.67);
    $this$d.b2q(1, 1, 0, 1, 0, 1.414, 1.414, true);
    $this$d.w2p(21.843, 13.3);
    $this$d.b2q(6.96, 6.96, 0, 0, 0, 0, -9.846, true);
    $this$d.d2q();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.y29(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_6$lambda_euh7($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(343641086, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-6.<anonymous> (Icons.kt:194)');
    }
    $composer_0.j1e(456627938);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.n1f();
    var tmp;
    if (false ? true : it === Companion_getInstance().b19_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-6.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_6$lambda$lambda_aumq0w;
      $composer_0.t1f(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.k1e();
    Polyline($this$createIcon, tmp0_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_6$lambda$lambda_aumq0w($this$Polyline) {
    $this$Polyline.f2q([to(3, 12), to(9, 18), to(21, 2)]);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.y29(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_7$lambda_su1bje($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1021140685, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-7.<anonymous> (Icons.kt:203)');
    }
    $composer_0.j1e(-48930456);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.n1f();
    var tmp;
    if (false ? true : it === Companion_getInstance().b19_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-7.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_7$lambda$lambda_e2xce9;
      $composer_0.t1f(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.k1e();
    Path($this$createIcon, tmp0_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_7$lambda$lambda_e2xce9($this$Path) {
    $this$Path.s2p(ComposableSingletons$IconsKt$lambda_7$lambda$lambda$lambda_8o13qu);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_7$lambda$lambda$lambda_8o13qu($this$d) {
    $this$d.u2p(16.59, 8.59);
    $this$d.w2p(12, 13.17);
    $this$d.w2p(7.41, 8.59);
    $this$d.w2p(6, 10);
    $this$d.v2p(6, 6, true);
    $this$d.v2p(6, -6, true);
    $this$d.d2q();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.y29(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_8$lambda_ddg9dj($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-507764776, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-8.<anonymous> (Icons.kt:220)');
    }
    $composer_0.j1e(-554488632);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.n1f();
    var tmp;
    if (false ? true : it === Companion_getInstance().b19_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-8.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_8$lambda$lambda_w0mn5q;
      $composer_0.t1f(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.k1e();
    Path($this$createIcon, tmp0_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_8$lambda$lambda_w0mn5q($this$Path) {
    $this$Path.s2p(ComposableSingletons$IconsKt$lambda_8$lambda$lambda$lambda_snobxl);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_8$lambda$lambda$lambda_snobxl($this$d) {
    $this$d.u2p(15.41, 7.41);
    $this$d.w2p(14, 6);
    $this$d.v2p(-6, 6, true);
    $this$d.v2p(6, 6, true);
    $this$d.v2p(1.41, -1.41, true);
    $this$d.w2p(10.83, 12);
    $this$d.d2q();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.y29(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_9$lambda_fg67oo($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-79892645, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-9.<anonymous> (Icons.kt:237)');
    }
    $composer_0.j1e(-1060046800);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.n1f();
    var tmp;
    if (false ? true : it === Companion_getInstance().b19_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-9.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_9$lambda$lambda_732kql;
      $composer_0.t1f(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.k1e();
    Path($this$createIcon, tmp0_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_9$lambda$lambda_732kql($this$Path) {
    $this$Path.s2p(ComposableSingletons$IconsKt$lambda_9$lambda$lambda$lambda_51qad4);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_9$lambda$lambda$lambda_51qad4($this$d) {
    $this$d.u2p(10, 6);
    $this$d.w2p(8.59, 7.41);
    $this$d.w2p(13.17, 12);
    $this$d.v2p(-4.58, 4.59, true);
    $this$d.w2p(10, 18);
    $this$d.v2p(6, -6, true);
    $this$d.d2q();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.y29(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_10$lambda_c69byu($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(660186540, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-10.<anonymous> (Icons.kt:254)');
    }
    $composer_0.j1e(923945435);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.n1f();
    var tmp;
    if (false ? true : it === Companion_getInstance().b19_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-10.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_10$lambda$lambda_rzmap7;
      $composer_0.t1f(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.k1e();
    Path($this$createIcon, tmp0_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_10$lambda$lambda_rzmap7($this$Path) {
    $this$Path.s2p(ComposableSingletons$IconsKt$lambda_10$lambda$lambda$lambda_2vrjey);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_10$lambda$lambda$lambda_2vrjey($this$d) {
    $this$d.u2p(12, 8);
    $this$d.v2p(-6, 6, true);
    $this$d.v2p(1.41, 1.41, true);
    $this$d.w2p(12, 10.83);
    $this$d.v2p(4.59, 4.58, true);
    $this$d.w2p(18, 14);
    $this$d.d2q();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.y29(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_11$lambda_u188y3($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(2025461450, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-11.<anonymous> (Icons.kt:271)');
    }
    $composer_0.j1e(418387260);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.n1f();
    var tmp;
    if (false ? true : it === Companion_getInstance().b19_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-11.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_11$lambda$lambda_3228a2;
      $composer_0.t1f(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.k1e();
    Circle($this$createIcon, tmp0_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_11$lambda$lambda_3228a2($this$Circle) {
    $this$Circle.q2o(12);
    $this$Circle.r2o(12);
    $this$Circle.o2o(8);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.y29(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_12$lambda_17lrvw($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1212129518, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-12.<anonymous> (Icons.kt:282)');
    }
    $composer_0.j1e(-87171131);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.n1f();
    var tmp;
    if (false ? true : it === Companion_getInstance().b19_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-12.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_12$lambda$lambda_lvhu53;
      $composer_0.t1f(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.k1e();
    Line($this$createIcon, tmp0_group, $composer_0, 56);
    $composer_0.j1e(-87171032);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.n1f();
    var tmp_1;
    if (false ? true : it_0 === Companion_getInstance().b19_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-12.<anonymous>.<anonymous>' call
      var value_0 = ComposableSingletons$IconsKt$lambda_12$lambda$lambda_lvhu53_0;
      $composer_0.t1f(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.k1e();
    Line($this$createIcon, tmp1_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_12$lambda$lambda_lvhu53($this$Line) {
    $this$Line.u2o(1);
    $this$Line.v2o(23);
    $this$Line.w2o(1);
    $this$Line.x2o(23);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_12$lambda$lambda_lvhu53_0($this$Line) {
    $this$Line.u2o(23);
    $this$Line.v2o(1);
    $this$Line.w2o(1);
    $this$Line.x2o(23);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.y29(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_13$lambda_rm0p6b($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-769560574, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-13.<anonymous> (Icons.kt:300)');
    }
    $composer_0.j1e(-592729371);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.n1f();
    var tmp;
    if (false ? true : it === Companion_getInstance().b19_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-13.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_13$lambda$lambda_o825ew;
      $composer_0.t1f(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.k1e();
    Path($this$createIcon, tmp0_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_13$lambda$lambda_o825ew($this$Path) {
    $this$Path.s2p(ComposableSingletons$IconsKt$lambda_13$lambda$lambda$lambda_wyvcbx);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_13$lambda$lambda$lambda_wyvcbx($this$d) {
    $this$d.u2p(11.2857, 6.05714);
    $this$d.w2p(10.08571, 4.85714);
    $this$d.w2p(7.85714, 7.14786);
    $this$d.w2p(7.85714, 1);
    $this$d.w2p(6.14286, 1);
    $this$d.w2p(6.14286, 7.14786);
    $this$d.w2p(3.91429, 4.85714);
    $this$d.w2p(2.71429, 6.05714);
    $this$d.w2p(7, 10.42857);
    $this$d.w2p(11.2857, 6.05714);
    $this$d.d2q();
    $this$d.u2p(1, 11.2857);
    $this$d.w2p(1, 13);
    $this$d.w2p(13, 13);
    $this$d.w2p(13, 11.2857);
    $this$d.w2p(1, 11.2857);
    $this$d.d2q();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.y29(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_14$lambda_elgvqm($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-725431745, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-14.<anonymous> (Icons.kt:327)');
    }
    var tmp0_iterator = listOf([3, 12, 21]).n();
    while (tmp0_iterator.b1()) {
      var y = tmp0_iterator.d1();
      $composer_0.j1e(-1098287123);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.g1f(y);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.n1f();
      var tmp;
      if (invalid ? true : it === Companion_getInstance().b19_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-14.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$IconsKt$lambda_14$lambda$lambda_phx09(y);
        $composer_0.t1f(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.k1e();
      Line($this$createIcon, tmp0_group, $composer_0, 8);
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_14$lambda$lambda_phx09($y) {
    return function ($this$Line) {
      $this$Line.u2o(0);
      $this$Line.v2o(23);
      $this$Line.w2o($y);
      $this$Line.x2o($y);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_14($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.y29(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_15$lambda_e85lbl($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-2035566234, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-15.<anonymous> (Icons.kt:346)');
    }
    $composer_0.j1e(-1603845372);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.n1f();
    var tmp;
    if (false ? true : it === Companion_getInstance().b19_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-15.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_15$lambda$lambda_pn1zfe;
      $composer_0.t1f(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.k1e();
    Line($this$createIcon, tmp0_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_15$lambda$lambda_pn1zfe($this$Line) {
    $this$Line.u2o(3);
    $this$Line.v2o(21);
    $this$Line.w2o(12);
    $this$Line.x2o(12);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_15($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.y29(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_16$lambda_rzbzlc($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1115382124, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-16.<anonymous> (Icons.kt:358)');
    }
    $composer_0.j1e(-2109403744);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.n1f();
    var tmp;
    if (false ? true : it === Companion_getInstance().b19_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-16.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_16$lambda$lambda_kgi04l;
      $composer_0.t1f(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.k1e();
    Line($this$createIcon, tmp0_group, $composer_0, 56);
    $composer_0.j1e(-2109403644);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.n1f();
    var tmp_1;
    if (false ? true : it_0 === Companion_getInstance().b19_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-16.<anonymous>.<anonymous>' call
      var value_0 = ComposableSingletons$IconsKt$lambda_16$lambda$lambda_kgi04l_0;
      $composer_0.t1f(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.k1e();
    Line($this$createIcon, tmp1_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_16$lambda$lambda_kgi04l($this$Line) {
    $this$Line.u2o(3);
    $this$Line.v2o(21);
    $this$Line.w2o(12);
    $this$Line.x2o(12);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_16$lambda$lambda_kgi04l_0($this$Line) {
    $this$Line.u2o(12);
    $this$Line.v2o(12);
    $this$Line.w2o(3);
    $this$Line.x2o(21);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_16($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.y29(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_17$lambda_uahgv($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(862240855, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-17.<anonymous> (Icons.kt:376)');
    }
    $composer_0.j1e(1680005279);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.n1f();
    var tmp;
    if (false ? true : it === Companion_getInstance().b19_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-17.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_17$lambda$lambda_4h22ak;
      $composer_0.t1f(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.k1e();
    Rect($this$createIcon, tmp0_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_17$lambda$lambda_4h22ak($this$Rect) {
    $this$Rect.g2p(4);
    $this$Rect.h2p(4);
    $this$Rect.j2p(16);
    $this$Rect.i2p(16);
    $this$Rect.i2q(2);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_17($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.y29(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_18$lambda_tnwyj2($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(2069599163, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-18.<anonymous> (Icons.kt:389)');
    }
    $composer_0.j1e(1174446950);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.n1f();
    var tmp;
    if (false ? true : it === Companion_getInstance().b19_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-18.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_18$lambda$lambda_tem4pp;
      $composer_0.t1f(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.k1e();
    Path($this$createIcon, tmp0_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_18$lambda$lambda_tem4pp($this$Path) {
    $this$Path.s2p(ComposableSingletons$IconsKt$lambda_18$lambda$lambda$lambda_blfq3y);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_18$lambda$lambda$lambda_blfq3y($this$d) {
    $this$d.u2p(175, 106.583);
    $this$d.c2q(75, 75, 0, 1, 1, 93.417, 25);
    $this$d.c2q(58.333, 58.333, 0, 0, 0, 175, 106.583);
    $this$d.d2q();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_18($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.y29(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda_cjkmdv($this$Group, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(747380469, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-19.<anonymous> (Icons.kt:408)');
    }
    $composer_0.j1e(668888871);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.n1f();
    var tmp;
    if (false ? true : it === Companion_getInstance().b19_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-19.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua;
      $composer_0.t1f(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.k1e();
    Circle($this$Group, tmp0_group, $composer_0, 56);
    $composer_0.j1e(668888971);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.n1f();
    var tmp_1;
    if (false ? true : it_0 === Companion_getInstance().b19_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-19.<anonymous>.<anonymous>' call
      var value_0 = ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_0;
      $composer_0.t1f(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.k1e();
    Path($this$Group, tmp1_group, $composer_0, 56);
    $composer_0.j1e(668889120);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_1 = $composer_0.n1f();
    var tmp_3;
    if (false ? true : it_1 === Companion_getInstance().b19_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-19.<anonymous>.<anonymous>' call
      var value_1 = ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_1;
      $composer_0.t1f(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = it_1;
    }
    var tmp_4 = tmp_3;
    var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
    $composer_0.k1e();
    Path($this$Group, tmp2_group, $composer_0, 56);
    $composer_0.j1e(668889270);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_2 = $composer_0.n1f();
    var tmp_5;
    if (false ? true : it_2 === Companion_getInstance().b19_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-19.<anonymous>.<anonymous>' call
      var value_2 = ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_2;
      $composer_0.t1f(value_2);
      tmp_5 = value_2;
    } else {
      tmp_5 = it_2;
    }
    var tmp_6 = tmp_5;
    var tmp3_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
    $composer_0.k1e();
    Path($this$Group, tmp3_group, $composer_0, 56);
    $composer_0.j1e(668889425);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_3 = $composer_0.n1f();
    var tmp_7;
    if (false ? true : it_3 === Companion_getInstance().b19_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-19.<anonymous>.<anonymous>' call
      var value_3 = ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_3;
      $composer_0.t1f(value_3);
      tmp_7 = value_3;
    } else {
      tmp_7 = it_3;
    }
    var tmp_8 = tmp_7;
    var tmp4_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
    $composer_0.k1e();
    Path($this$Group, tmp4_group, $composer_0, 56);
    $composer_0.j1e(668889582);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_4 = $composer_0.n1f();
    var tmp_9;
    if (false ? true : it_4 === Companion_getInstance().b19_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-19.<anonymous>.<anonymous>' call
      var value_4 = ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_4;
      $composer_0.t1f(value_4);
      tmp_9 = value_4;
    } else {
      tmp_9 = it_4;
    }
    var tmp_10 = tmp_9;
    var tmp5_group = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
    $composer_0.k1e();
    Path($this$Group, tmp5_group, $composer_0, 56);
    $composer_0.j1e(668889733);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_5 = $composer_0.n1f();
    var tmp_11;
    if (false ? true : it_5 === Companion_getInstance().b19_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-19.<anonymous>.<anonymous>' call
      var value_5 = ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_5;
      $composer_0.t1f(value_5);
      tmp_11 = value_5;
    } else {
      tmp_11 = it_5;
    }
    var tmp_12 = tmp_11;
    var tmp6_group = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
    $composer_0.k1e();
    Path($this$Group, tmp6_group, $composer_0, 56);
    $composer_0.j1e(668889885);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_6 = $composer_0.n1f();
    var tmp_13;
    if (false ? true : it_6 === Companion_getInstance().b19_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-19.<anonymous>.<anonymous>' call
      var value_6 = ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_6;
      $composer_0.t1f(value_6);
      tmp_13 = value_6;
    } else {
      tmp_13 = it_6;
    }
    var tmp_14 = tmp_13;
    var tmp7_group = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
    $composer_0.k1e();
    Path($this$Group, tmp7_group, $composer_0, 56);
    $composer_0.j1e(668890042);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_7 = $composer_0.n1f();
    var tmp_15;
    if (false ? true : it_7 === Companion_getInstance().b19_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-19.<anonymous>.<anonymous>' call
      var value_7 = ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_7;
      $composer_0.t1f(value_7);
      tmp_15 = value_7;
    } else {
      tmp_15 = it_7;
    }
    var tmp_16 = tmp_15;
    var tmp8_group = (tmp_16 == null ? true : !(tmp_16 == null)) ? tmp_16 : THROW_CCE();
    $composer_0.k1e();
    Path($this$Group, tmp8_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua($this$Circle) {
    $this$Circle.q2o(12);
    $this$Circle.r2o(12);
    $this$Circle.o2o(5);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_0($this$Path) {
    $this$Path.s2p(ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r($this$d) {
    $this$d.u2p(12, 1);
    $this$d.x2p(2, true);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_1($this$Path) {
    $this$Path.s2p(ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_0);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_0($this$d) {
    $this$d.u2p(12, 21);
    $this$d.x2p(2, true);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_2($this$Path) {
    $this$Path.s2p(ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_1);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_1($this$d) {
    $this$d.u2p(4.22, 4.22);
    $this$d.v2p(1.42, 1.42, true);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_3($this$Path) {
    $this$Path.s2p(ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_2);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_2($this$d) {
    $this$d.u2p(18.36, 18.36);
    $this$d.v2p(1.42, 1.42, true);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_4($this$Path) {
    $this$Path.s2p(ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_3);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_3($this$d) {
    $this$d.u2p(1, 12);
    $this$d.z2p(2, true);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_5($this$Path) {
    $this$Path.s2p(ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_4);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_4($this$d) {
    $this$d.u2p(21, 12);
    $this$d.z2p(2, true);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_6($this$Path) {
    $this$Path.s2p(ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_5);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_5($this$d) {
    $this$d.u2p(4.22, 19.78);
    $this$d.v2p(1.42, -1.42, true);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_7($this$Path) {
    $this$Path.s2p(ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_6);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_6($this$d) {
    $this$d.u2p(18.36, 5.64);
    $this$d.v2p(1.42, -1.42, true);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_19($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.y29(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_20$lambda_hpuotl($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1299612222, $changed, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-20.<anonymous> (Icons.kt:404)');
    }
    $composer_0.j1e(-1863466423);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.n1f();
    var tmp;
    if (false ? true : it === Companion_getInstance().b19_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-20.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IconsKt$lambda_20$lambda$lambda_ylj8l0;
      $composer_0.t1f(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.k1e();
    Group($this$createIcon, tmp0_group, ComposableSingletons$IconsKt_getInstance().a3y_1, $composer_0, 440, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_20$lambda$lambda_ylj8l0($this$Group) {
    $this$Group.f2p(SVGStrokeLineJoin_Round_getInstance());
    $this$Group.e2p(SVGStrokeLineCap_Round_getInstance());
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt() {
    ComposableSingletons$IconsKt_instance = this;
    var tmp = this;
    tmp.i3x_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(187923078, false, ComposableSingletons$IconsKt$lambda_1$lambda_21hevk));
    var tmp_0 = this;
    tmp_0.j3x_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(465018625, false, ComposableSingletons$IconsKt$lambda_2$lambda_qs526n));
    var tmp_1 = this;
    tmp_1.k3x_1 = ComposableLambda$invoke$ref_2(composableLambdaInstance(1093309942, false, ComposableSingletons$IconsKt$lambda_3$lambda_ffciqa));
    var tmp_2 = this;
    tmp_2.l3x_1 = ComposableLambda$invoke$ref_3(composableLambdaInstance(353353466, false, ComposableSingletons$IconsKt$lambda_4$lambda_de9ybx));
    var tmp_3 = this;
    tmp_3.m3x_1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(14879965, false, ComposableSingletons$IconsKt$lambda_5$lambda_st7ml0));
    var tmp_4 = this;
    tmp_4.n3x_1 = ComposableLambda$invoke$ref_5(composableLambdaInstance(343641086, false, ComposableSingletons$IconsKt$lambda_6$lambda_euh7));
    var tmp_5 = this;
    tmp_5.o3x_1 = ComposableLambda$invoke$ref_6(composableLambdaInstance(-1021140685, false, ComposableSingletons$IconsKt$lambda_7$lambda_su1bje));
    var tmp_6 = this;
    tmp_6.p3x_1 = ComposableLambda$invoke$ref_7(composableLambdaInstance(-507764776, false, ComposableSingletons$IconsKt$lambda_8$lambda_ddg9dj));
    var tmp_7 = this;
    tmp_7.q3x_1 = ComposableLambda$invoke$ref_8(composableLambdaInstance(-79892645, false, ComposableSingletons$IconsKt$lambda_9$lambda_fg67oo));
    var tmp_8 = this;
    tmp_8.r3x_1 = ComposableLambda$invoke$ref_9(composableLambdaInstance(660186540, false, ComposableSingletons$IconsKt$lambda_10$lambda_c69byu));
    var tmp_9 = this;
    tmp_9.s3x_1 = ComposableLambda$invoke$ref_10(composableLambdaInstance(2025461450, false, ComposableSingletons$IconsKt$lambda_11$lambda_u188y3));
    var tmp_10 = this;
    tmp_10.t3x_1 = ComposableLambda$invoke$ref_11(composableLambdaInstance(1212129518, false, ComposableSingletons$IconsKt$lambda_12$lambda_17lrvw));
    var tmp_11 = this;
    tmp_11.u3x_1 = ComposableLambda$invoke$ref_12(composableLambdaInstance(-769560574, false, ComposableSingletons$IconsKt$lambda_13$lambda_rm0p6b));
    var tmp_12 = this;
    tmp_12.v3x_1 = ComposableLambda$invoke$ref_13(composableLambdaInstance(-725431745, false, ComposableSingletons$IconsKt$lambda_14$lambda_elgvqm));
    var tmp_13 = this;
    tmp_13.w3x_1 = ComposableLambda$invoke$ref_14(composableLambdaInstance(-2035566234, false, ComposableSingletons$IconsKt$lambda_15$lambda_e85lbl));
    var tmp_14 = this;
    tmp_14.x3x_1 = ComposableLambda$invoke$ref_15(composableLambdaInstance(-1115382124, false, ComposableSingletons$IconsKt$lambda_16$lambda_rzbzlc));
    var tmp_15 = this;
    tmp_15.y3x_1 = ComposableLambda$invoke$ref_16(composableLambdaInstance(862240855, false, ComposableSingletons$IconsKt$lambda_17$lambda_uahgv));
    var tmp_16 = this;
    tmp_16.z3x_1 = ComposableLambda$invoke$ref_17(composableLambdaInstance(2069599163, false, ComposableSingletons$IconsKt$lambda_18$lambda_tnwyj2));
    var tmp_17 = this;
    tmp_17.a3y_1 = ComposableLambda$invoke$ref_18(composableLambdaInstance(747380469, false, ComposableSingletons$IconsKt$lambda_19$lambda_cjkmdv));
    var tmp_18 = this;
    tmp_18.b3y_1 = ComposableLambda$invoke$ref_19(composableLambdaInstance(-1299612222, false, ComposableSingletons$IconsKt$lambda_20$lambda_hpuotl));
  }
  var ComposableSingletons$IconsKt_instance;
  function ComposableSingletons$IconsKt_getInstance() {
    if (ComposableSingletons$IconsKt_instance == null)
      new ComposableSingletons$IconsKt();
    return ComposableSingletons$IconsKt_instance;
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
        $this$Svg.c2p(tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $viewBox._v;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        $this$Svg.d2p(tmp1_safe_receiver.m2p_1, tmp1_safe_receiver.n2p_1, tmp1_safe_receiver.o2p_1, tmp1_safe_receiver.p2p_1);
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
          $this$Svg.b2p(SVGFillType_CurrentColor_getInstance());
          tmp = $this$Svg.z2o(SVGStrokeType_None_getInstance());
        } else {
          if (tmp2_safe_receiver instanceof Stroke) {
            $this$Svg.z2o(SVGStrokeType_CurrentColor_getInstance());
            $this$Svg.b2p(SVGFillType_None_getInstance());
            var tmp1_safe_receiver_0 = tmp2_safe_receiver.c3y_1;
            var tmp_0;
            if (tmp1_safe_receiver_0 == null) {
              tmp_0 = null;
            } else {
              // Inline function 'kotlin.let' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'com.varabyte.kobweb.silk.components.icons.createIcon.<anonymous>.<anonymous>.<anonymous>' call
              tmp_0 = $this$Svg.a2p(tmp1_safe_receiver_0);
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
    return HorizontalDividerStyle$delegate.z2m(null, HorizontalDividerStyle$factory());
  }
  var HorizontalDividerStyle$delegate;
  var DividerStyle;
  function get_VerticalDividerStyle() {
    _init_properties_Divider_kt__8b5dnr();
    return VerticalDividerStyle$delegate.z2m(null, VerticalDividerStyle$factory());
  }
  var VerticalDividerStyle$delegate;
  function DividerVars() {
    DividerVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().t2m();
    tmp.d3y_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_percent(90);
    tmp_0.e3y_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
  }
  protoOf(DividerVars).e3t = function () {
    return this.d3y_1.z2m(this, Color$factory_1());
  };
  protoOf(DividerVars).f3y = function () {
    return this.e3y_1.z2m(this, Length$factory());
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
    $composer_0 = $composer_0.b1g(385015105);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 2;
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.c16(variant_0._v) ? 32 : 16);
    if (!(($default & 1) === 1) ? true : !(($dirty & 91) === 18) ? true : !$composer_0.e1e()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 2) === 0)) {
        variant_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(385015105, $dirty, -1, 'com.varabyte.kobweb.silk.components.layout.HorizontalDivider (Divider.kt:51)');
      }
      Hr(toAttrs(toModifier(get_HorizontalDividerStyle(), [variant_0._v], $composer_0, 0).k3i(modifier_0._v)), $composer_0, 0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v18();
    }
    var tmp0_safe_receiver = $composer_0.c1g();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y1k(HorizontalDivider$lambda(modifier_0, variant_0, $changed, $default));
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
    return width(borderTop(tmp, tmp_0, 'solid', DividerVars_getInstance().e3t().t2m()), DividerVars_getInstance().f3y().t2m());
  }
  function VerticalDividerStyle$delegate$lambda($this$base) {
    _init_properties_Divider_kt__8b5dnr();
    var tmp = Companion_instance;
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return height(borderLeft(tmp, tmp_0, 'solid', DividerVars_getInstance().e3t().t2m()), DividerVars_getInstance().f3y().t2m());
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
      return receiver.e3t();
    }, null);
  }
  function Length$factory() {
    return getPropertyCallableRef('Length', 1, KProperty1, function (receiver) {
      return receiver.f3y();
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
    return SimpleGridStyle$delegate.z2m(null, SimpleGridStyle$factory());
  }
  var SimpleGridStyle$delegate;
  function SimpleGrid(numColumns, modifier, variant, ref, content, $composer, $changed, $default) {
    _init_properties_SimpleGrid_kt__tvipdk();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.b1g(1529613202);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.c16(numColumns) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 16;
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.c16(variant_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.c16(ref_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.e1f(content) ? 16384 : 8192);
    if (!(($default & 2) === 2) ? true : !(($dirty & 46811) === 9362) ? true : !$composer_0.e1e()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 4) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        ref_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1529613202, $dirty, -1, 'com.varabyte.kobweb.silk.components.layout.SimpleGrid (SimpleGrid.kt:72)');
      }
      var tmp = toAttrs(setVariable_0(setVariable_0(setVariable_0(setVariable_0(setVariable_0(toModifier(get_SimpleGridStyle(), [variant_0._v], $composer_0, 0), getValue(get_columnVariables(), Breakpoint_ZERO_getInstance()), numColumns.h3o_1), getValue(get_columnVariables(), Breakpoint_SM_getInstance()), numColumns.i3o_1), getValue(get_columnVariables(), Breakpoint_MD_getInstance()), numColumns.j3o_1), getValue(get_columnVariables(), Breakpoint_LG_getInstance()), numColumns.k3o_1), getValue(get_columnVariables(), Breakpoint_XL_getInstance()), numColumns.l3o_1).k3i(modifier_0._v));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.layout.SimpleGrid.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, -2129314893, true, SimpleGrid$lambda(ref_0, content));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.j1e(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.c16(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.n1f();
      var tmp_1;
      if (invalid ? true : it === Companion_getInstance().b19_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.layout.SimpleGrid.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_20(dispatchReceiver);
        $composer_1.t1f(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.k1e();
      Div(tmp, tmp0, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v18();
    }
    var tmp0_safe_receiver = $composer_0.c1g();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y1k(SimpleGrid$lambda_0(numColumns, modifier_0, variant_0, ref_0, content, $changed, $default));
    }
  }
  function SimpleGridStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_SimpleGrid_kt__tvipdk();
    $this$ComponentStyle.g3m(SimpleGridStyle$delegate$lambda$lambda);
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = get_columnVariables().k2().n();
    while (tmp0_iterator.b1()) {
      var element = tmp0_iterator.d1();
      // Inline function 'com.varabyte.kobweb.silk.components.layout.SimpleGridStyle$delegate.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var breakpoint = element.n2();
      // Inline function 'kotlin.collections.component2' call
      var variable = element.o2();
      $this$ComponentStyle.b3l(breakpoint, SimpleGridStyle$delegate$lambda$lambda_0(variable));
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
    $this$repeat.c2l(get_fr(1));
    return Unit_instance;
  }
  function SimpleGridStyle$delegate$lambda$lambda$lambda($variable) {
    return function ($this$gridTemplateColumns) {
      var tmp = $variable.t2m();
      $this$gridTemplateColumns.x2k(tmp, SimpleGridStyle$delegate$lambda$lambda$lambda$lambda);
      return Unit_instance;
    };
  }
  function SimpleGridStyle$delegate$lambda$lambda_0($variable) {
    return function () {
      var tmp = Companion_instance;
      return gridTemplateColumns(tmp, SimpleGridStyle$delegate$lambda$lambda$lambda($variable));
    };
  }
  function SimpleGrid$lambda($ref, $content) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-2129314893, $changed, -1, 'com.varabyte.kobweb.silk.components.layout.SimpleGrid.<anonymous> (SimpleGrid.kt:83)');
      }
      registerRefScope($this$Div, $ref._v, $composer_0, 72);
      $content($composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_20($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.y29(p0, p1, p2);
    };
  }
  function SimpleGrid$lambda_0($numColumns, $modifier, $variant, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      SimpleGrid($numColumns, $modifier._v, $variant._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
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
      var tmp0_iterator = this_0.n();
      while (tmp0_iterator.b1()) {
        var element = tmp0_iterator.d1();
        // Inline function 'com.varabyte.kobweb.silk.components.layout.columnVariables.<anonymous>' call
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = element.sa_1.toLowerCase();
        var tmp$ret$2 = new NumberValue('simple-grid-col-count-' + tmp$ret$1, VOID, 'silk');
        result.l2(element, tmp$ret$2);
      }
      columnVariables = result;
      SimpleGridStyle$delegate = ComponentStyle(VOID, 'silk', SimpleGridStyle$delegate$lambda);
    }
  }
  function get_SurfaceStyle() {
    _init_properties_Surface_kt__8o7unv();
    return SurfaceStyle$delegate.z2m(null, SurfaceStyle$factory());
  }
  var SurfaceStyle$delegate;
  function SurfaceVars() {
    SurfaceVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BackgroundColorVar().t2m();
    tmp.g3y_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_ColorVar().t2m();
    tmp_0.h3y_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
  }
  protoOf(SurfaceVars).g3t = function () {
    return this.g3y_1.z2m(this, BackgroundColor$factory_0());
  };
  protoOf(SurfaceVars).e3t = function () {
    return this.h3y_1.z2m(this, Color$factory_2());
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
    $composer_0 = $composer_0.b1g(-1707116076);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 2;
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.c16(variant_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.c16(colorModeOverride_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 1024;
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.c16(ref_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.e1f(content) ? 131072 : 65536);
    if (!(($default & 9) === 9) ? true : !(($dirty & 374491) === 74898) ? true : !$composer_0.e1e()) {
      $composer_0.l1e();
      if (($changed & 1) === 0 ? true : $composer_0.p1e()) {
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
        $composer_0.v18();
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
      }
      $composer_0.m1e();
      if (isTraceInProgress()) {
        traceEventStart(-1707116076, $dirty, -1, 'com.varabyte.kobweb.silk.components.layout.Surface (Surface.kt:55)');
      }
      $composer_0.j1e(-1164412473);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.n1f();
      var tmp;
      if (false ? true : it === Companion_getInstance().b19_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>' call
        var value = mutableStateOf(null);
        this_0.t1f(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.k1e();
      var surfaceElement$delegate = tmp0_group;
      var tmp_1 = toModifier(get_SurfaceStyle(), [variant_0._v], $composer_0, 0).k3i(modifier_0._v);
      var tmp_2 = contentAlignment_0._v;
      var tmp_3 = refScope(Surface$lambda_1(ref_0, surfaceElement$delegate));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>' call
      var tmp_4 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_4, 1158565978, true, Surface$lambda_2(colorModeOverride_0, content, surfaceElement$delegate));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.j1e(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.c16(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.n1f();
      var tmp_5;
      if (invalid ? true : it_0 === Companion_getInstance().b19_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_22(dispatchReceiver);
        $composer_1.t1f(value_0);
        tmp_5 = value_0;
      } else {
        tmp_5 = it_0;
      }
      var tmp_6 = tmp_5;
      var tmp0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_1.k1e();
      Box(tmp_1, tmp_2, tmp_3, tmp0, $composer_0, 3656, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v18();
    }
    var tmp1_safe_receiver = $composer_0.c1g();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.y1k(Surface$lambda_3(modifier_0, variant_0, colorModeOverride_0, contentAlignment_0, ref_0, content, $changed, $default));
    }
  }
  function Surface$lambda($surfaceElement$delegate) {
    _init_properties_Surface_kt__8o7unv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('surfaceElement', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $surfaceElement$delegate.o2();
  }
  function Surface$lambda_0($surfaceElement$delegate, value) {
    _init_properties_Surface_kt__8o7unv();
    getLocalDelegateReference('surfaceElement', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $surfaceElement$delegate.kv(value);
    return Unit_instance;
  }
  function SurfaceStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Surface_kt__8o7unv();
    $this$ComponentStyle.g3m(SurfaceStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function SurfaceStyle$delegate$lambda$lambda() {
    _init_properties_Surface_kt__8o7unv();
    return color(backgroundColor(Companion_instance, SurfaceVars_getInstance().g3t().t2m()), SurfaceVars_getInstance().e3t().t2m());
  }
  function Surface$lambda$lambda($surfaceElement$delegate) {
    return function (it) {
      Surface$lambda_0($surfaceElement$delegate, it);
      return Unit_instance;
    };
  }
  function Surface$lambda_1($ref, $surfaceElement$delegate) {
    return function ($this$refScope) {
      $this$refScope.b2o($ref._v);
      $this$refScope.a2o([], Surface$lambda$lambda($surfaceElement$delegate));
      return Unit_instance;
    };
  }
  function Surface$lambda$lambda$slambda($surfaceElement, $currColorMode, resultContinuation) {
    this.q3y_1 = $surfaceElement;
    this.r3y_1 = $currColorMode;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Surface$lambda$lambda$slambda).az = function ($this$LaunchedEffect, $completion) {
    var tmp = this.bz($this$LaunchedEffect, $completion);
    tmp.cd_1 = Unit_instance;
    tmp.dd_1 = null;
    return tmp.md();
  };
  protoOf(Surface$lambda$lambda$slambda).yd = function (p1, $completion) {
    return this.az((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Surface$lambda$lambda$slambda).md = function () {
    var suspendResult = this.cd_1;
    $sm: do
      try {
        var tmp = this.ad_1;
        if (tmp === 0) {
          this.bd_1 = 1;
          setSilkWidgetVariables(this.q3y_1, this.r3y_1);
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.dd_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(Surface$lambda$lambda$slambda).bz = function ($this$LaunchedEffect, completion) {
    var i = new Surface$lambda$lambda$slambda(this.q3y_1, this.r3y_1, completion);
    i.s3y_1 = $this$LaunchedEffect;
    return i;
  };
  function Surface$lambda$lambda$slambda_0($surfaceElement, $currColorMode, resultContinuation) {
    var i = new Surface$lambda$lambda$slambda($surfaceElement, $currColorMode, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.az($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Surface$lambda$lambda_0($content, $this_Box, $surfaceElement) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.e1e()) {
        if (isTraceInProgress()) {
          traceEventStart(-314059711, $changed, -1, 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>.<anonymous>.<anonymous> (Surface.kt:68)');
        }
        var currColorMode = Companion_instance_6.x3k($composer_0, 8);
        LaunchedEffect(currColorMode, Surface$lambda$lambda$slambda_0($surfaceElement, currColorMode, null), $composer_0, 64);
        $content($this_Box, $composer_0, 8);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.v18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_21($boundThis) {
    return function (p0, p1) {
      return $boundThis.c1e(p0, p1);
    };
  }
  function Surface$lambda_2($colorModeOverride, $content, $surfaceElement$delegate) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1158565978, $changed, -1, 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous> (Surface.kt:65)');
      }
      if (!($colorModeOverride._v == null)) {
        $composer_0.j1e(321050292);
        var tmp0_safe_receiver = Surface$lambda($surfaceElement$delegate);
        var tmp;
        if (tmp0_safe_receiver == null) {
          tmp = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp_0 = $colorModeOverride._v.e3q();
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_1 = $composer_0;
          var dispatchReceiver = composableLambda(tmp_1, -314059711, true, Surface$lambda$lambda_0($content, $this$Box, tmp0_safe_receiver));
          // Inline function 'androidx.compose.runtime.remember' call
          var $composer_1 = $composer_0;
          $composer_1.j1e(1157296644);
          sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid = $composer_1.c16(dispatchReceiver);
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it = $composer_1.n1f();
          var tmp_2;
          if (invalid ? true : it === Companion_getInstance().b19_1) {
            // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value = ComposableLambda$invoke$ref_21(dispatchReceiver);
            $composer_1.t1f(value);
            tmp_2 = value;
          } else {
            tmp_2 = it;
          }
          var tmp_3 = tmp_2;
          var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
          $composer_1.k1e();
          CompositionLocalProvider(tmp_0, tmp0, $composer_0, 48);
          tmp = Unit_instance;
        }
        $composer_0.k1e();
      } else {
        $composer_0.j1e(321050701);
        $content($this$Box, $composer_0, 8);
        $composer_0.k1e();
      }
      var tmp_4;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_4 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_22($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.y29(p0, p1, p2);
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
      return receiver.g3t();
    }, null);
  }
  function Color$factory_2() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.e3t();
    }, null);
  }
  var properties_initialized_Surface_kt_k203pf;
  function _init_properties_Surface_kt__8o7unv() {
    if (!properties_initialized_Surface_kt_k203pf) {
      properties_initialized_Surface_kt_k203pf = true;
      SurfaceStyle$delegate = ComponentStyle(VOID, 'silk', SurfaceStyle$delegate$lambda);
    }
  }
  function get_OverlayStyle() {
    _init_properties_Overlay_kt__p5agwu();
    return OverlayStyle$delegate.z2m(null, OverlayStyle$factory());
  }
  var OverlayStyle$delegate;
  function OverlayVars() {
    OverlayVars_instance = this;
    this.t3y_1 = StyleVariable('silk');
  }
  protoOf(OverlayVars).g3t = function () {
    return this.t3y_1.z2m(this, BackgroundColor$factory_1());
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
    $composer_0 = $composer_0.b1g(-1849203310);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 2;
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.c16(variant_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 128;
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.c16(ref_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.e1f(content_0._v) ? 16384 : 8192);
    if (!(($default & 5) === 5) ? true : !(($dirty & 46811) === 9362) ? true : !$composer_0.e1e()) {
      $composer_0.l1e();
      if (($changed & 1) === 0 ? true : $composer_0.p1e()) {
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
          content_0._v = ComposableSingletons$OverlayKt_getInstance().u3y_1;
        }
      } else {
        $composer_0.v18();
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.m1e();
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
      $composer_1.j1e(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.c16(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.n1f();
      var tmp_0;
      if (invalid ? true : it === Companion_getInstance().b19_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.overlay.Overlay.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_24(dispatchReceiver);
        $composer_1.t1f(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.k1e();
      deferRender(tmp0, $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v18();
    }
    var tmp0_safe_receiver = $composer_0.c1g();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y1k(Overlay$lambda_0(modifier_0, variant_0, contentAlignment_0, ref_0, content_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_23($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.y29(p0, p1, p2);
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
    tmp.u3y_1 = ComposableLambda$invoke$ref_23(composableLambdaInstance(1721412430, false, ComposableSingletons$OverlayKt$lambda_1$lambda_mpnfty));
  }
  var ComposableSingletons$OverlayKt_instance;
  function ComposableSingletons$OverlayKt_getInstance() {
    if (ComposableSingletons$OverlayKt_instance == null)
      new ComposableSingletons$OverlayKt();
    return ComposableSingletons$OverlayKt_instance;
  }
  function OverlayStyle$delegate$lambda($this$base) {
    _init_properties_Overlay_kt__p5agwu();
    return backgroundColor(Companion_instance, OverlayVars_getInstance().g3t().t2m());
  }
  function Overlay$lambda($variant, $modifier, $contentAlignment, $ref, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.e1e()) {
        if (isTraceInProgress()) {
          traceEventStart(228061525, $changed, -1, 'com.varabyte.kobweb.silk.components.overlay.Overlay.<anonymous> (Overlay.kt:59)');
        }
        var tmp_0 = toModifier(get_OverlayStyle(), [$variant._v], $composer_0, 0);
        // Inline function 'org.jetbrains.compose.web.css.Companion.Fixed' call
        // Inline function 'org.jetbrains.compose.web.css.Position' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        Box(right(left(bottom(top(position(tmp_0, 'fixed'), get_px(0)), get_px(0)), get_px(0)), get_px(0)).k3i($modifier._v), $contentAlignment._v, $ref._v, $content._v, $composer_0, 584, 0);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_instance;
        }
        tmp = tmp_1;
      } else {
        $composer_0.v18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_24($boundThis) {
    return function (p0, p1) {
      return $boundThis.c1e(p0, p1);
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
      return receiver.g3t();
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
  function get_PopupStyle() {
    _init_properties_Popup_kt__lluomy();
    return PopupStyle$delegate.z2m(null, PopupStyle$factory());
  }
  var PopupStyle$delegate;
  function PopupVars() {
    PopupVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = TransitionDurationVars_getInstance().a3x().t2m();
    tmp.v3y_1 = StyleVariable_1(tmp0_defaultFallback, 'silk');
  }
  protoOf(PopupVars).r3v = function () {
    return this.v3y_1.z2m(this, TransitionDuration$factory_1());
  };
  var PopupVars_instance;
  function PopupVars_getInstance() {
    if (PopupVars_instance == null)
      new PopupVars();
    return PopupVars_instance;
  }
  function PopupStyle$delegate$lambda($this$base) {
    _init_properties_Popup_kt__lluomy();
    return transition(Companion_instance, [CSSTransition_init_$Create$('opacity', PopupVars_getInstance().r3v().t2m())]);
  }
  function PopupStyle$factory() {
    return getPropertyCallableRef('PopupStyle', 0, KProperty0, function () {
      return get_PopupStyle();
    }, null);
  }
  function TransitionDuration$factory_1() {
    return getPropertyCallableRef('TransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.r3v();
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
    return TooltipStyle$delegate.z2m(null, TooltipStyle$factory());
  }
  var TooltipStyle$delegate;
  function get_TooltipArrowStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipArrowStyle$delegate.z2m(null, TooltipArrowStyle$factory());
  }
  var TooltipArrowStyle$delegate;
  function get_TopLeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopLeftTooltipArrowVariant$delegate.z2m(null, TopLeftTooltipArrowVariant$factory());
  }
  var TopLeftTooltipArrowVariant$delegate;
  function get_TopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopTooltipArrowVariant$delegate.z2m(null, TopTooltipArrowVariant$factory());
  }
  var TopTooltipArrowVariant$delegate;
  function get_TopRightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopRightTooltipArrowVariant$delegate.z2m(null, TopRightTooltipArrowVariant$factory());
  }
  var TopRightTooltipArrowVariant$delegate;
  function get_LeftTopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftTopTooltipArrowVariant$delegate.z2m(null, LeftTopTooltipArrowVariant$factory());
  }
  var LeftTopTooltipArrowVariant$delegate;
  function get_LeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftTooltipArrowVariant$delegate.z2m(null, LeftTooltipArrowVariant$factory());
  }
  var LeftTooltipArrowVariant$delegate;
  function get_LeftBottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftBottomTooltipArrowVariant$delegate.z2m(null, LeftBottomTooltipArrowVariant$factory());
  }
  var LeftBottomTooltipArrowVariant$delegate;
  function get_RightTopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightTopTooltipArrowVariant$delegate.z2m(null, RightTopTooltipArrowVariant$factory());
  }
  var RightTopTooltipArrowVariant$delegate;
  function get_RightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightTooltipArrowVariant$delegate.z2m(null, RightTooltipArrowVariant$factory());
  }
  var RightTooltipArrowVariant$delegate;
  function get_RightBottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightBottomTooltipArrowVariant$delegate.z2m(null, RightBottomTooltipArrowVariant$factory());
  }
  var RightBottomTooltipArrowVariant$delegate;
  function get_BottomLeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomLeftTooltipArrowVariant$delegate.z2m(null, BottomLeftTooltipArrowVariant$factory());
  }
  var BottomLeftTooltipArrowVariant$delegate;
  function get_BottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomTooltipArrowVariant$delegate.z2m(null, BottomTooltipArrowVariant$factory());
  }
  var BottomTooltipArrowVariant$delegate;
  function get_BottomRightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomRightTooltipArrowVariant$delegate.z2m(null, BottomRightTooltipArrowVariant$factory());
  }
  var BottomRightTooltipArrowVariant$delegate;
  function get_TooltipTextContainerStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipTextContainerStyle;
  }
  var TooltipTextContainerStyle;
  function TooltipVars() {
    TooltipVars_instance = this;
    this.w3y_1 = StyleVariable('silk');
    this.x3y_1 = StyleVariable('silk');
  }
  protoOf(TooltipVars).g3t = function () {
    return this.w3y_1.z2m(this, BackgroundColor$factory_2());
  };
  protoOf(TooltipVars).e3t = function () {
    return this.x3y_1.z2m(this, Color$factory_3());
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
  function TooltipStyle$delegate$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'relative';
    return borderRadius(color(backgroundColor(position(tmp, tmp$ret$3), TooltipVars_getInstance().g3t().t2m()), TooltipVars_getInstance().e3t().t2m()), get_px(6));
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
    $this$border.z3j(get_TRIANGLE_WIDTH());
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    $this$border.y3j('solid');
    return Unit_instance;
  }
  function TopLeftTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_left = get_TRIANGLE_WIDTH_2X();
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(margin_1(Companion_instance, tmp2_top, VOID, VOID, tmp1_left), get_px(0)), TooltipVars_getInstance().g3t().t2m());
  }
  function TopTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_left = unaryMinus(get_TRIANGLE_WIDTH());
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(left(margin_1(Companion_instance, tmp2_top, VOID, VOID, tmp1_left), get_percent(50)), get_px(0)), TooltipVars_getInstance().g3t().t2m());
  }
  function TopRightTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_right = get_TRIANGLE_WIDTH_2X();
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(right(margin_1(Companion_instance, tmp2_top, tmp1_right), get_px(0)), get_px(0)), TooltipVars_getInstance().g3t().t2m());
  }
  function LeftTopTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(top(left(margin_1(Companion_instance, get_TRIANGLE_WIDTH_2X(), VOID, VOID, unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().g3t().t2m());
  }
  function LeftTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(top(left(margin_1(Companion_instance, unaryMinus(get_TRIANGLE_WIDTH()), VOID, VOID, unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_percent(50)), TooltipVars_getInstance().g3t().t2m());
  }
  function LeftBottomTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(bottom(left(margin_1(Companion_instance, VOID, VOID, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().g3t().t2m());
  }
  function RightTopTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleRight(top(right(margin_1(Companion_instance, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().g3t().t2m());
  }
  function RightTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleRight(top(right(margin_1(Companion_instance, unaryMinus(get_TRIANGLE_WIDTH()), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_percent(50)), TooltipVars_getInstance().g3t().t2m());
  }
  function RightBottomTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_bottom = get_TRIANGLE_WIDTH_2X();
    var tmp2_right = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleRight(bottom(right(margin_1(Companion_instance, VOID, tmp2_right, tmp1_bottom), get_px(0)), get_px(0)), TooltipVars_getInstance().g3t().t2m());
  }
  function BottomLeftTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_left = get_TRIANGLE_WIDTH_2X();
    var tmp2_bottom = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleUp(bottom(left(margin_1(Companion_instance, VOID, VOID, tmp2_bottom, tmp1_left), get_px(0)), get_px(0)), TooltipVars_getInstance().g3t().t2m());
  }
  function BottomTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_left = unaryMinus(get_TRIANGLE_WIDTH());
    var tmp2_bottom = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleUp(bottom(left(margin_1(Companion_instance, VOID, VOID, tmp2_bottom, tmp1_left), get_percent(50)), get_px(0)), TooltipVars_getInstance().g3t().t2m());
  }
  function BottomRightTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleUp(bottom(right(margin_1(Companion_instance, VOID, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().g3t().t2m());
  }
  function TooltipTextContainerStyle$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    return padding(Companion_instance, get_px(5));
  }
  function triangleDown$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.q2e('border-color', 'transparent transparent ' + $color + ' transparent');
      return Unit_instance;
    };
  }
  function triangleLeft$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.q2e('border-color', 'transparent ' + $color + ' transparent transparent');
      return Unit_instance;
    };
  }
  function triangleRight$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.q2e('border-color', 'transparent transparent transparent ' + $color);
      return Unit_instance;
    };
  }
  function triangleUp$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.q2e('border-color', '' + $color + ' transparent transparent transparent');
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
      return receiver.g3t();
    }, null);
  }
  function Color$factory_3() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.e3t();
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
    return DisabledStyle$delegate.z2m(null, DisabledStyle$factory());
  }
  var DisabledStyle$delegate;
  function get_SmoothColorTransitionDurationVar() {
    _init_properties_CommonStyles_kt__a7wisz();
    return SmoothColorTransitionDurationVar$delegate.z2m(null, SmoothColorTransitionDurationVar$factory());
  }
  var SmoothColorTransitionDurationVar$delegate;
  function get_SmoothColorStyle() {
    _init_properties_CommonStyles_kt__a7wisz();
    return SmoothColorStyle$delegate.z2m(null, SmoothColorStyle$factory());
  }
  var SmoothColorStyle$delegate;
  function DisabledStyle$delegate$lambda($composer, $changed) {
    _init_properties_CommonStyles_kt__a7wisz();
    var $composer_0 = $composer;
    $composer_0.j1e(1529746738);
    if (isTraceInProgress()) {
      traceEventStart(1529746738, $changed, -1, 'com.varabyte.kobweb.silk.components.style.common.DisabledStyle$delegate.<anonymous> (CommonStyles.kt:17)');
    }
    var tmp0 = tabIndex(ariaDisabled(Companion_instance), -1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.k1e();
    return tmp0;
  }
  function DisabledStyle$delegate$lambda_0($this$base) {
    _init_properties_CommonStyles_kt__a7wisz();
    return cursor(opacity(Companion_instance, 0.5), Companion_instance_1.m2k());
  }
  function SmoothColorStyle$delegate$lambda($this$base) {
    _init_properties_CommonStyles_kt__a7wisz();
    return transition(Companion_instance, [CSSTransition_init_$Create$('background-color', get_SmoothColorTransitionDurationVar().t2m())]);
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
      var tmp0_defaultFallback = TransitionDurationVars_getInstance().d3t().t2m();
      SmoothColorTransitionDurationVar$delegate = StyleVariable_1(tmp0_defaultFallback, 'silk');
      var tmp_1 = Companion_instance_5;
      SmoothColorStyle$delegate = base(tmp_1, VOID, 'silk', SmoothColorStyle$delegate$lambda);
    }
  }
  function TransitionDurationVars() {
    TransitionDurationVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_ms(0);
    tmp.v3s_1 = StyleVariable_1(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_ms(50);
    tmp_0.w3s_1 = StyleVariable_1(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_ms(100);
    tmp_1.x3s_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_ms(150);
    tmp_2.y3s_1 = StyleVariable_1(tmp0_defaultFallback_2, 'silk');
    var tmp_3 = this;
    var tmp0_defaultFallback_3 = get_ms(200);
    tmp_3.z3s_1 = StyleVariable_1(tmp0_defaultFallback_3, 'silk');
    var tmp_4 = this;
    var tmp0_defaultFallback_4 = get_ms(300);
    tmp_4.a3t_1 = StyleVariable_1(tmp0_defaultFallback_4, 'silk');
    var tmp_5 = this;
    var tmp0_defaultFallback_5 = get_ms(400);
    tmp_5.b3t_1 = StyleVariable_1(tmp0_defaultFallback_5, 'silk');
    var tmp_6 = this;
    var tmp0_defaultFallback_6 = get_ms(500);
    tmp_6.c3t_1 = StyleVariable_1(tmp0_defaultFallback_6, 'silk');
  }
  protoOf(TransitionDurationVars).f3v = function () {
    return this.x3s_1.z2m(this, VeryFast$factory());
  };
  protoOf(TransitionDurationVars).a3x = function () {
    return this.y3s_1.z2m(this, Fast$factory());
  };
  protoOf(TransitionDurationVars).d3t = function () {
    return this.z3s_1.z2m(this, Normal$factory());
  };
  var TransitionDurationVars_instance;
  function TransitionDurationVars_getInstance() {
    if (TransitionDurationVars_instance == null)
      new TransitionDurationVars();
    return TransitionDurationVars_instance;
  }
  function VeryFast$factory() {
    return getPropertyCallableRef('VeryFast', 1, KProperty1, function (receiver) {
      return receiver.f3v();
    }, null);
  }
  function Fast$factory() {
    return getPropertyCallableRef('Fast', 1, KProperty1, function (receiver) {
      return receiver.a3x();
    }, null);
  }
  function Normal$factory() {
    return getPropertyCallableRef('Normal', 1, KProperty1, function (receiver) {
      return receiver.d3t();
    }, null);
  }
  function get_BackgroundColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return BackgroundColorVar$delegate.z2m(null, BackgroundColorVar$factory());
  }
  var BackgroundColorVar$delegate;
  function get_ColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return ColorVar$delegate.z2m(null, ColorVar$factory());
  }
  var ColorVar$delegate;
  function get_BorderColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return BorderColorVar$delegate.z2m(null, BorderColorVar$factory());
  }
  var BorderColorVar$delegate;
  function get_FocusOutlineColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return FocusOutlineColorVar$delegate.z2m(null, FocusOutlineColorVar$factory());
  }
  var FocusOutlineColorVar$delegate;
  function get_PlaceholderOpacityVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return PlaceholderOpacityVar$delegate.z2m(null, PlaceholderOpacityVar$factory());
  }
  var PlaceholderOpacityVar$delegate;
  function get_PlaceholderColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return PlaceholderColorVar$delegate.z2m(null, PlaceholderColorVar$factory());
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
    tmp.f3u_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_cssRem(0.875);
    tmp_0.g3u_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_cssRem(1);
    tmp_1.h3u_1 = StyleVariable_0(tmp0_defaultFallback_1, 'silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_cssRem(1.125);
    tmp_2.i3u_1 = StyleVariable_0(tmp0_defaultFallback_2, 'silk');
  }
  protoOf(FontSizeVars).j3u = function () {
    return this.h3u_1.z2m(this, MD$factory());
  };
  protoOf(FontSizeVars).q3u = function () {
    return this.i3u_1.z2m(this, LG$factory());
  };
  var FontSizeVars_instance;
  function FontSizeVars_getInstance() {
    if (FontSizeVars_instance == null)
      new FontSizeVars();
    return FontSizeVars_instance;
  }
  function MD$factory() {
    return getPropertyCallableRef('MD', 1, KProperty1, function (receiver) {
      return receiver.j3u();
    }, null);
  }
  function LG$factory() {
    return getPropertyCallableRef('LG', 1, KProperty1, function (receiver) {
      return receiver.q3u();
    }, null);
  }
  function get_SilkColorsStyle() {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    return SilkColorsStyle$delegate.z2m(null, SilkColorsStyle$factory());
  }
  var SilkColorsStyle$delegate;
  function initSilkWidgets(ctx) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var mutableTheme = ctx.y3o_1;
    // Inline function 'kotlin.apply' call
    var this_0 = ctx.y3o_1.f3p_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.init.initSilkWidgets.<anonymous>' call
    var focusOutline = Blue_getInstance().a3r_1.f3j().e3j(VOID, VOID, VOID, 0.5);
    var placeholder = Gray_getInstance().k3r_1;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var color = Colors_instance.j3j();
    set_background(this_0.p3r_1, Colors_instance.u3j());
    set_color(this_0.p3r_1, color);
    set_border(this_0.p3r_1, color.e3j(VOID, VOID, VOID, 0.2));
    set_focusOutline(this_0.p3r_1, focusOutline);
    set_overlay(this_0.p3r_1, color.e3j(VOID, VOID, VOID, 0.5));
    set_placeholder(this_0.p3r_1, placeholder);
    var buttonBase = Colors_instance.u3j().b3j(0.2);
    get_button_0(this_0.p3r_1).e3z(buttonBase, buttonBase.b3j(0.2), Colors_instance.l3j(), buttonBase.b3j(0.4));
    get_checkbox_0(this_0.p3r_1).k3z(Blue_getInstance().a3r_1, Blue_getInstance().b3r_1, Colors_instance.u3j());
    var inputFilled = Gray_getInstance().h3r_1;
    var tmp0_$this = get_input_0(this_0.p3r_1);
    var tmp1_filledFocus = Colors_instance.i3j();
    var tmp2_hoveredBorder = Gray_getInstance().k3r_1;
    var tmp3_invalidBorder = Red_getInstance().o3q_1;
    var tmp4_filledHover = inputFilled.b3j(0.1);
    tmp0_$this.s3z(tmp2_hoveredBorder, tmp3_invalidBorder, inputFilled, tmp4_filledHover, tmp1_filledFocus);
    var tmp5_$this = get_switch_0(this_0.p3r_1);
    var tmp6_thumb = Colors_instance.u3j();
    var tmp7_backgroundOn = Colors_instance.p3j();
    var tmp8_backgroundOff = Colors_instance.q3j();
    tmp5_$this.k3z(tmp7_backgroundOn, tmp8_backgroundOff, tmp6_thumb);
    get_tab_0(this_0.p3r_1).i40(Colors_instance.j3j(), Colors_instance.u3j(), Colors_instance.l3j(), VOID, VOID, Colors_instance.q3j(), Colors_instance.v3j(), Colors_instance.u3j());
    get_tooltip_0(this_0.p3r_1).n40(get_color_0(this_0.p3r_1), get_background_0(this_0.p3r_1));
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var color_0 = Colors_instance.u3j();
    set_background(this_0.q3r_1, Colors_instance.j3j());
    set_color(this_0.q3r_1, color_0);
    set_border(this_0.q3r_1, color_0.e3j(VOID, VOID, VOID, 0.2));
    set_focusOutline(this_0.q3r_1, focusOutline);
    set_overlay(this_0.q3r_1, color_0.e3j(VOID, VOID, VOID, 0.5));
    set_placeholder(this_0.q3r_1, placeholder);
    var buttonBase_0 = lightened(Colors_instance.j3j(), 0.2);
    get_button_0(this_0.q3r_1).e3z(buttonBase_0, lightened(buttonBase_0, 0.2), Colors_instance.r3j(), lightened(buttonBase_0, 0.4));
    get_checkbox_0(this_0.q3r_1).k3z(Blue_getInstance().x3q_1, Blue_getInstance().y3q_1, Colors_instance.j3j());
    var inputFilled_0 = Gray_getInstance().o3r_1;
    var tmp0_$this_0 = get_input_0(this_0.q3r_1);
    var tmp1_filledFocus_0 = Colors_instance.i3j();
    var tmp2_hoveredBorder_0 = Gray_getInstance().l3r_1;
    var tmp3_invalidBorder_0 = Red_getInstance().i3q_1;
    var tmp4_filledHover_0 = lightened(inputFilled_0, 0.1);
    tmp0_$this_0.s3z(tmp2_hoveredBorder_0, tmp3_invalidBorder_0, inputFilled_0, tmp4_filledHover_0, tmp1_filledFocus_0);
    var tmp5_$this_0 = get_switch_0(this_0.q3r_1);
    var tmp6_thumb_0 = Colors_instance.u3j();
    var tmp7_backgroundOn_0 = Colors_instance.r3j();
    var tmp8_backgroundOff_0 = Colors_instance.n3j();
    tmp5_$this_0.k3z(tmp7_backgroundOn_0, tmp8_backgroundOff_0, tmp6_thumb_0);
    get_tab_0(this_0.q3r_1).i40(Colors_instance.u3j(), Colors_instance.j3j(), Colors_instance.r3j(), VOID, VOID, Colors_instance.o3j(), Colors_instance.n3j(), Colors_instance.j3j());
    get_tooltip_0(this_0.q3r_1).n40(get_color_0(this_0.q3r_1), get_background_0(this_0.q3r_1));
    mutableTheme.h3p(get_SilkColorsStyle());
    mutableTheme.h3p(get_DisabledStyle());
    mutableTheme.h3p(get_SmoothColorStyle());
    mutableTheme.h3p(get_ButtonStyle());
    mutableTheme.h3p(get_CanvasStyle());
    mutableTheme.h3p(get_CheckboxStyle());
    mutableTheme.q3p([get_CheckboxInputVariant()]);
    mutableTheme.h3p(get_CheckboxIconContainerStyle());
    mutableTheme.h3p(get_CheckboxIconStyle());
    mutableTheme.q3p([get_CheckedCheckboxIconContainerVariant(), get_UncheckedCheckboxIconContainerVariant()]);
    mutableTheme.h3p(get_OverlayStyle());
    mutableTheme.h3p(get_PopupStyle());
    mutableTheme.h3p(get_SimpleGridStyle());
    mutableTheme.h3p(get_SurfaceStyle());
    mutableTheme.h3p(get_HorizontalDividerStyle());
    mutableTheme.h3p(get_VerticalDividerStyle());
    mutableTheme.h3p(get_SwitchStyle());
    mutableTheme.h3p(get_SwitchTrackStyle());
    mutableTheme.h3p(get_SwitchThumbStyle());
    mutableTheme.q3p([get_SwitchInputVariant()]);
    mutableTheme.h3p(get_TabsStyle());
    mutableTheme.h3p(get_TabsTabRowStyle());
    mutableTheme.h3p(get_TabsTabStyle());
    mutableTheme.h3p(get_TabsPanelStyle());
    mutableTheme.h3p(get_InputStyle());
    mutableTheme.q3p([get_OutlinedInputVariant(), get_FilledInputVariant(), get_FlushedInputVariant(), get_UnstyledInputVariant()]);
    mutableTheme.h3p(get_InputGroupStyle());
    mutableTheme.h3p(get_TooltipArrowStyle());
    mutableTheme.q3p([get_TopLeftTooltipArrowVariant(), get_TopTooltipArrowVariant(), get_TopRightTooltipArrowVariant(), get_LeftTopTooltipArrowVariant(), get_LeftTooltipArrowVariant(), get_LeftBottomTooltipArrowVariant(), get_RightTopTooltipArrowVariant(), get_RightTooltipArrowVariant(), get_RightBottomTooltipArrowVariant(), get_BottomLeftTooltipArrowVariant(), get_BottomTooltipArrowVariant(), get_BottomRightTooltipArrowVariant()]);
    mutableTheme.h3p(get_TooltipStyle());
    mutableTheme.h3p(get_TooltipTextContainerStyle());
    registerKeyframes(ctx.x3o_1, get_CheckboxEnabledAnim());
  }
  function setSilkWidgetVariables(_this__u8e3s4, colorMode) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    removeClass(_this__u8e3s4, [suffixedWith(get_SilkColorsStyle().r3l_1, colorMode.o3m())]);
    addClass(_this__u8e3s4, [suffixedWith(get_SilkColorsStyle().r3l_1, colorMode)]);
  }
  function setSilkWidgetVariables_0(_this__u8e3s4, $composer, $changed) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.b1g(-938405995);
    if (isTraceInProgress()) {
      traceEventStart(-938405995, $changed, -1, 'com.varabyte.kobweb.silk.init.setSilkWidgetVariables (InitSilkWidgets.kt:308)');
    }
    $composer_0.j1e(263026394);
    // Inline function 'androidx.compose.runtime.cache' call
    var this_0 = $composer_0;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = this_0.n1f();
    var tmp;
    if (false ? true : it === Companion_getInstance().b19_1) {
      // Inline function 'com.varabyte.kobweb.silk.init.setSilkWidgetVariables.<anonymous>' call
      var tmp_0 = _this__u8e3s4.getElementById('root');
      var value = tmp_0 instanceof HTMLElement ? tmp_0 : THROW_CCE();
      this_0.t1f(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_1 = tmp;
    var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    $composer_0.k1e();
    var root = tmp0_group;
    setSilkWidgetVariables_1(root, $composer_0, 8);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp1_safe_receiver = $composer_0.c1g();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.y1k(setSilkWidgetVariables$lambda(_this__u8e3s4, $changed));
    }
  }
  function setSilkWidgetVariables_1(_this__u8e3s4, $composer, $changed) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.b1g(1180012187);
    if (isTraceInProgress()) {
      traceEventStart(1180012187, $changed, -1, 'com.varabyte.kobweb.silk.init.setSilkWidgetVariables (InitSilkWidgets.kt:314)');
    }
    setSilkWidgetVariables(_this__u8e3s4, Companion_instance_6.x3k($composer_0, 8));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_safe_receiver = $composer_0.c1g();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y1k(setSilkWidgetVariables$lambda_0(_this__u8e3s4, $changed));
    }
  }
  function SilkColorsStyle$delegate$lambda($this$base) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var palette = toPalette($this$base.u3m_1);
    return setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(Companion_instance, get_BackgroundColorVar(), get_background(palette)), get_ColorVar(), get_color(palette)), get_BorderColorVar(), get_border(palette)), get_FocusOutlineColorVar(), get_focusOutline(palette)), get_PlaceholderColorVar(), get_placeholder_0(palette)), ButtonVars_getInstance().v3t(), get_button(palette).o40()), ButtonVars_getInstance().x3t(), get_button(palette).v2f()), ButtonVars_getInstance().y3t(), get_button(palette).p40()), CheckboxVars_getInstance().p3v(), get_checkbox(palette).q40()), CheckboxVars_getInstance().q3v(), get_checkbox(palette).v2f()), CheckboxVars_getInstance().o3v(), get_checkbox(palette).r40()), InputVars_getInstance().j3w(), get_input(palette).s40()), InputVars_getInstance().k3w(), get_input(palette).t40()), InputVars_getInstance().l3w(), get_input(palette).u40()), InputVars_getInstance().m3w(), get_input(palette).v40()), InputVars_getInstance().n3w(), get_input(palette).w40()), OverlayVars_getInstance().g3t(), get_overlay(palette)), SwitchVars_getInstance().h3x(), get_switch(palette).x40()), TabVars_getInstance().e3t(), get_tab(palette).r40()), TabVars_getInstance().g3t(), get_tab(palette).q40()), TabVars_getInstance().h3t(), get_tab(palette).y40()), TabVars_getInstance().i3t(), get_tab(palette).v2f()), TabVars_getInstance().j3t(), get_tab(palette).p40()), TooltipVars_getInstance().g3t(), get_tooltip(palette).q40()), TooltipVars_getInstance().e3t(), get_tooltip(palette).r40());
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
    this.a3z_1 = this.b3s();
    this.b3z_1 = this.b3s();
    this.c3z_1 = this.b3s();
    this.d3z_1 = this.b3s();
  }
  protoOf(MutableButton).z40 = function (_set____db54di) {
    return this.a3z_1.y3r(this, default$factory(), _set____db54di);
  };
  protoOf(MutableButton).o40 = function () {
    return this.a3z_1.z2m(this, default$factory_0());
  };
  protoOf(MutableButton).a41 = function (_set____db54di) {
    return this.b3z_1.y3r(this, hover$factory(), _set____db54di);
  };
  protoOf(MutableButton).v2f = function () {
    return this.b3z_1.z2m(this, hover$factory_0());
  };
  protoOf(MutableButton).b41 = function (_set____db54di) {
    return this.c3z_1.y3r(this, focus$factory(), _set____db54di);
  };
  protoOf(MutableButton).c41 = function () {
    return this.c3z_1.z2m(this, focus$factory_0());
  };
  protoOf(MutableButton).d41 = function (_set____db54di) {
    return this.d3z_1.y3r(this, pressed$factory(), _set____db54di);
  };
  protoOf(MutableButton).p40 = function () {
    return this.d3z_1.z2m(this, pressed$factory_0());
  };
  protoOf(MutableButton).e3z = function (default_0, hover, focus, pressed) {
    this.z40(default_0);
    this.a41(hover);
    this.b41(focus);
    this.d41(pressed);
  };
  function MutableCheckbox(palette) {
    ColorGroup.call(this, palette, 'checkbox');
    this.h3z_1 = this.b3s();
    this.i3z_1 = this.b3s();
    this.j3z_1 = this.b3s();
  }
  protoOf(MutableCheckbox).e41 = function (_set____db54di) {
    return this.h3z_1.y3r(this, background$factory(), _set____db54di);
  };
  protoOf(MutableCheckbox).q40 = function () {
    return this.h3z_1.z2m(this, background$factory_0());
  };
  protoOf(MutableCheckbox).a41 = function (_set____db54di) {
    return this.i3z_1.y3r(this, hover$factory_1(), _set____db54di);
  };
  protoOf(MutableCheckbox).v2f = function () {
    return this.i3z_1.z2m(this, hover$factory_2());
  };
  protoOf(MutableCheckbox).f41 = function (_set____db54di) {
    return this.j3z_1.y3r(this, color$factory(), _set____db54di);
  };
  protoOf(MutableCheckbox).r40 = function () {
    return this.j3z_1.z2m(this, color$factory_0());
  };
  protoOf(MutableCheckbox).k3z = function (background, hover, color) {
    this.e41(background);
    this.a41(hover);
    this.f41(color);
  };
  function MutableInput(palette) {
    ColorGroup.call(this, palette, 'input');
    this.n3z_1 = this.b3s();
    this.o3z_1 = this.b3s();
    this.p3z_1 = this.b3s();
    this.q3z_1 = this.b3s();
    this.r3z_1 = this.b3s();
  }
  protoOf(MutableInput).g41 = function (_set____db54di) {
    return this.n3z_1.y3r(this, hoveredBorder$factory(), _set____db54di);
  };
  protoOf(MutableInput).s40 = function () {
    return this.n3z_1.z2m(this, hoveredBorder$factory_0());
  };
  protoOf(MutableInput).h41 = function (_set____db54di) {
    return this.o3z_1.y3r(this, invalidBorder$factory(), _set____db54di);
  };
  protoOf(MutableInput).t40 = function () {
    return this.o3z_1.z2m(this, invalidBorder$factory_0());
  };
  protoOf(MutableInput).i41 = function (_set____db54di) {
    return this.p3z_1.y3r(this, filled$factory(), _set____db54di);
  };
  protoOf(MutableInput).u40 = function () {
    return this.p3z_1.z2m(this, filled$factory_0());
  };
  protoOf(MutableInput).j41 = function (_set____db54di) {
    return this.q3z_1.y3r(this, filledHover$factory(), _set____db54di);
  };
  protoOf(MutableInput).v40 = function () {
    return this.q3z_1.z2m(this, filledHover$factory_0());
  };
  protoOf(MutableInput).k41 = function (_set____db54di) {
    return this.r3z_1.y3r(this, filledFocus$factory(), _set____db54di);
  };
  protoOf(MutableInput).w40 = function () {
    return this.r3z_1.z2m(this, filledFocus$factory_0());
  };
  protoOf(MutableInput).s3z = function (hoveredBorder, invalidBorder, filled, filledHover, filledFocus) {
    this.g41(hoveredBorder);
    this.h41(invalidBorder);
    this.i41(filled);
    this.j41(filledHover);
    this.k41(filledFocus);
  };
  function MutableSwitch(palette) {
    ColorGroup.call(this, palette, 'switch');
    this.v3z_1 = this.b3s();
    this.w3z_1 = this.b3s();
    this.x3z_1 = this.b3s();
  }
  protoOf(MutableSwitch).l41 = function (_set____db54di) {
    return this.v3z_1.y3r(this, backgroundOn$factory(), _set____db54di);
  };
  protoOf(MutableSwitch).m41 = function () {
    return this.v3z_1.z2m(this, backgroundOn$factory_0());
  };
  protoOf(MutableSwitch).n41 = function (_set____db54di) {
    return this.w3z_1.y3r(this, backgroundOff$factory(), _set____db54di);
  };
  protoOf(MutableSwitch).o41 = function () {
    return this.w3z_1.z2m(this, backgroundOff$factory_0());
  };
  protoOf(MutableSwitch).p41 = function (_set____db54di) {
    return this.x3z_1.y3r(this, thumb$factory(), _set____db54di);
  };
  protoOf(MutableSwitch).x40 = function () {
    return this.x3z_1.z2m(this, thumb$factory_0());
  };
  protoOf(MutableSwitch).k3z = function (backgroundOn, backgroundOff, thumb) {
    this.l41(backgroundOn);
    this.n41(backgroundOff);
    this.p41(thumb);
  };
  function MutableTab(palette) {
    ColorGroup.call(this, palette, 'tab');
    this.a40_1 = this.b3s();
    this.b40_1 = this.b3s();
    this.c40_1 = this.b3s();
    this.d40_1 = this.b3s();
    this.e40_1 = this.b3s();
    this.f40_1 = this.b3s();
    this.g40_1 = this.b3s();
    this.h40_1 = this.b3s();
  }
  protoOf(MutableTab).f41 = function (_set____db54di) {
    return this.a40_1.y3r(this, color$factory_1(), _set____db54di);
  };
  protoOf(MutableTab).r40 = function () {
    return this.a40_1.z2m(this, color$factory_2());
  };
  protoOf(MutableTab).e41 = function (_set____db54di) {
    return this.b40_1.y3r(this, background$factory_1(), _set____db54di);
  };
  protoOf(MutableTab).q40 = function () {
    return this.b40_1.z2m(this, background$factory_2());
  };
  protoOf(MutableTab).q41 = function (_set____db54di) {
    return this.c40_1.y3r(this, selectedColor$factory(), _set____db54di);
  };
  protoOf(MutableTab).r41 = function () {
    return this.c40_1.z2m(this, selectedColor$factory_0());
  };
  protoOf(MutableTab).s41 = function (_set____db54di) {
    return this.d40_1.y3r(this, selectedBackground$factory(), _set____db54di);
  };
  protoOf(MutableTab).t41 = function () {
    return this.d40_1.z2m(this, selectedBackground$factory_0());
  };
  protoOf(MutableTab).u41 = function (_set____db54di) {
    return this.e40_1.y3r(this, selectedBorder$factory(), _set____db54di);
  };
  protoOf(MutableTab).v41 = function () {
    return this.e40_1.z2m(this, selectedBorder$factory_0());
  };
  protoOf(MutableTab).a41 = function (_set____db54di) {
    return this.f40_1.y3r(this, hover$factory_3(), _set____db54di);
  };
  protoOf(MutableTab).v2f = function () {
    return this.f40_1.z2m(this, hover$factory_4());
  };
  protoOf(MutableTab).d41 = function (_set____db54di) {
    return this.g40_1.y3r(this, pressed$factory_1(), _set____db54di);
  };
  protoOf(MutableTab).p40 = function () {
    return this.g40_1.z2m(this, pressed$factory_2());
  };
  protoOf(MutableTab).w41 = function (_set____db54di) {
    return this.h40_1.y3r(this, disabled$factory(), _set____db54di);
  };
  protoOf(MutableTab).y40 = function () {
    return this.h40_1.z2m(this, disabled$factory_0());
  };
  protoOf(MutableTab).x41 = function (color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled) {
    this.f41(color);
    this.e41(background);
    this.q41(selectedColor);
    this.s41(selectedBackground);
    this.u41(selectedBorder);
    this.a41(hover);
    this.d41(pressed);
    this.w41(disabled);
  };
  protoOf(MutableTab).i40 = function (color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled, $super) {
    selectedBackground = selectedBackground === VOID ? background : selectedBackground;
    selectedBorder = selectedBorder === VOID ? selectedColor : selectedBorder;
    var tmp;
    if ($super === VOID) {
      this.x41(color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled);
      tmp = Unit_instance;
    } else {
      tmp = $super.x41.call(this, color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled);
    }
    return tmp;
  };
  function MutableTooltip(palette) {
    ColorGroup.call(this, palette, 'tooltip');
    this.l40_1 = this.b3s();
    this.m40_1 = this.b3s();
  }
  protoOf(MutableTooltip).e41 = function (_set____db54di) {
    return this.l40_1.y3r(this, background$factory_3(), _set____db54di);
  };
  protoOf(MutableTooltip).q40 = function () {
    return this.l40_1.z2m(this, background$factory_4());
  };
  protoOf(MutableTooltip).f41 = function (_set____db54di) {
    return this.m40_1.y3r(this, color$factory_3(), _set____db54di);
  };
  protoOf(MutableTooltip).r40 = function () {
    return this.m40_1.z2m(this, color$factory_4());
  };
  protoOf(MutableTooltip).n40 = function (background, color) {
    this.e41(background);
    this.f41(color);
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
    return _this__u8e3s4.u3r('overlay');
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
    return _this__u8e3s4.u3r('placeholder');
  }
  function get_focusOutline(_this__u8e3s4) {
    return _this__u8e3s4.u3r('focusOutline');
  }
  function get_border(_this__u8e3s4) {
    return _this__u8e3s4.u3r('border');
  }
  function get_color(_this__u8e3s4) {
    return _this__u8e3s4.u3r('color');
  }
  function get_background(_this__u8e3s4) {
    return _this__u8e3s4.u3r('background');
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
    _this__u8e3s4.c3s('background', value);
  }
  function get_background_0(_this__u8e3s4) {
    return _this__u8e3s4.u3r('background');
  }
  function set_color(_this__u8e3s4, value) {
    _this__u8e3s4.c3s('color', value);
  }
  function get_color_0(_this__u8e3s4) {
    return _this__u8e3s4.u3r('color');
  }
  function set_border(_this__u8e3s4, value) {
    _this__u8e3s4.c3s('border', value);
  }
  function set_focusOutline(_this__u8e3s4, value) {
    _this__u8e3s4.c3s('focusOutline', value);
  }
  function set_overlay(_this__u8e3s4, value) {
    _this__u8e3s4.c3s('overlay', value);
  }
  function set_placeholder(_this__u8e3s4, value) {
    _this__u8e3s4.c3s('placeholder', value);
  }
  function default$factory() {
    return getPropertyCallableRef('default', 1, KMutableProperty1, function (receiver) {
      return receiver.o40();
    }, function (receiver, value) {
      return receiver.z40(value);
    });
  }
  function default$factory_0() {
    return getPropertyCallableRef('default', 1, KMutableProperty1, function (receiver) {
      return receiver.o40();
    }, function (receiver, value) {
      return receiver.z40(value);
    });
  }
  function hover$factory() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.v2f();
    }, function (receiver, value) {
      return receiver.a41(value);
    });
  }
  function hover$factory_0() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.v2f();
    }, function (receiver, value) {
      return receiver.a41(value);
    });
  }
  function focus$factory() {
    return getPropertyCallableRef('focus', 1, KMutableProperty1, function (receiver) {
      return receiver.c41();
    }, function (receiver, value) {
      return receiver.b41(value);
    });
  }
  function focus$factory_0() {
    return getPropertyCallableRef('focus', 1, KMutableProperty1, function (receiver) {
      return receiver.c41();
    }, function (receiver, value) {
      return receiver.b41(value);
    });
  }
  function pressed$factory() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.p40();
    }, function (receiver, value) {
      return receiver.d41(value);
    });
  }
  function pressed$factory_0() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.p40();
    }, function (receiver, value) {
      return receiver.d41(value);
    });
  }
  function background$factory() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.q40();
    }, function (receiver, value) {
      return receiver.e41(value);
    });
  }
  function background$factory_0() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.q40();
    }, function (receiver, value) {
      return receiver.e41(value);
    });
  }
  function hover$factory_1() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.v2f();
    }, function (receiver, value) {
      return receiver.a41(value);
    });
  }
  function hover$factory_2() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.v2f();
    }, function (receiver, value) {
      return receiver.a41(value);
    });
  }
  function color$factory() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.r40();
    }, function (receiver, value) {
      return receiver.f41(value);
    });
  }
  function color$factory_0() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.r40();
    }, function (receiver, value) {
      return receiver.f41(value);
    });
  }
  function hoveredBorder$factory() {
    return getPropertyCallableRef('hoveredBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.s40();
    }, function (receiver, value) {
      return receiver.g41(value);
    });
  }
  function hoveredBorder$factory_0() {
    return getPropertyCallableRef('hoveredBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.s40();
    }, function (receiver, value) {
      return receiver.g41(value);
    });
  }
  function invalidBorder$factory() {
    return getPropertyCallableRef('invalidBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.t40();
    }, function (receiver, value) {
      return receiver.h41(value);
    });
  }
  function invalidBorder$factory_0() {
    return getPropertyCallableRef('invalidBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.t40();
    }, function (receiver, value) {
      return receiver.h41(value);
    });
  }
  function filled$factory() {
    return getPropertyCallableRef('filled', 1, KMutableProperty1, function (receiver) {
      return receiver.u40();
    }, function (receiver, value) {
      return receiver.i41(value);
    });
  }
  function filled$factory_0() {
    return getPropertyCallableRef('filled', 1, KMutableProperty1, function (receiver) {
      return receiver.u40();
    }, function (receiver, value) {
      return receiver.i41(value);
    });
  }
  function filledHover$factory() {
    return getPropertyCallableRef('filledHover', 1, KMutableProperty1, function (receiver) {
      return receiver.v40();
    }, function (receiver, value) {
      return receiver.j41(value);
    });
  }
  function filledHover$factory_0() {
    return getPropertyCallableRef('filledHover', 1, KMutableProperty1, function (receiver) {
      return receiver.v40();
    }, function (receiver, value) {
      return receiver.j41(value);
    });
  }
  function filledFocus$factory() {
    return getPropertyCallableRef('filledFocus', 1, KMutableProperty1, function (receiver) {
      return receiver.w40();
    }, function (receiver, value) {
      return receiver.k41(value);
    });
  }
  function filledFocus$factory_0() {
    return getPropertyCallableRef('filledFocus', 1, KMutableProperty1, function (receiver) {
      return receiver.w40();
    }, function (receiver, value) {
      return receiver.k41(value);
    });
  }
  function backgroundOn$factory() {
    return getPropertyCallableRef('backgroundOn', 1, KMutableProperty1, function (receiver) {
      return receiver.m41();
    }, function (receiver, value) {
      return receiver.l41(value);
    });
  }
  function backgroundOn$factory_0() {
    return getPropertyCallableRef('backgroundOn', 1, KMutableProperty1, function (receiver) {
      return receiver.m41();
    }, function (receiver, value) {
      return receiver.l41(value);
    });
  }
  function backgroundOff$factory() {
    return getPropertyCallableRef('backgroundOff', 1, KMutableProperty1, function (receiver) {
      return receiver.o41();
    }, function (receiver, value) {
      return receiver.n41(value);
    });
  }
  function backgroundOff$factory_0() {
    return getPropertyCallableRef('backgroundOff', 1, KMutableProperty1, function (receiver) {
      return receiver.o41();
    }, function (receiver, value) {
      return receiver.n41(value);
    });
  }
  function thumb$factory() {
    return getPropertyCallableRef('thumb', 1, KMutableProperty1, function (receiver) {
      return receiver.x40();
    }, function (receiver, value) {
      return receiver.p41(value);
    });
  }
  function thumb$factory_0() {
    return getPropertyCallableRef('thumb', 1, KMutableProperty1, function (receiver) {
      return receiver.x40();
    }, function (receiver, value) {
      return receiver.p41(value);
    });
  }
  function color$factory_1() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.r40();
    }, function (receiver, value) {
      return receiver.f41(value);
    });
  }
  function color$factory_2() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.r40();
    }, function (receiver, value) {
      return receiver.f41(value);
    });
  }
  function background$factory_1() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.q40();
    }, function (receiver, value) {
      return receiver.e41(value);
    });
  }
  function background$factory_2() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.q40();
    }, function (receiver, value) {
      return receiver.e41(value);
    });
  }
  function selectedColor$factory() {
    return getPropertyCallableRef('selectedColor', 1, KMutableProperty1, function (receiver) {
      return receiver.r41();
    }, function (receiver, value) {
      return receiver.q41(value);
    });
  }
  function selectedColor$factory_0() {
    return getPropertyCallableRef('selectedColor', 1, KMutableProperty1, function (receiver) {
      return receiver.r41();
    }, function (receiver, value) {
      return receiver.q41(value);
    });
  }
  function selectedBackground$factory() {
    return getPropertyCallableRef('selectedBackground', 1, KMutableProperty1, function (receiver) {
      return receiver.t41();
    }, function (receiver, value) {
      return receiver.s41(value);
    });
  }
  function selectedBackground$factory_0() {
    return getPropertyCallableRef('selectedBackground', 1, KMutableProperty1, function (receiver) {
      return receiver.t41();
    }, function (receiver, value) {
      return receiver.s41(value);
    });
  }
  function selectedBorder$factory() {
    return getPropertyCallableRef('selectedBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.v41();
    }, function (receiver, value) {
      return receiver.u41(value);
    });
  }
  function selectedBorder$factory_0() {
    return getPropertyCallableRef('selectedBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.v41();
    }, function (receiver, value) {
      return receiver.u41(value);
    });
  }
  function hover$factory_3() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.v2f();
    }, function (receiver, value) {
      return receiver.a41(value);
    });
  }
  function hover$factory_4() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.v2f();
    }, function (receiver, value) {
      return receiver.a41(value);
    });
  }
  function pressed$factory_1() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.p40();
    }, function (receiver, value) {
      return receiver.d41(value);
    });
  }
  function pressed$factory_2() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.p40();
    }, function (receiver, value) {
      return receiver.d41(value);
    });
  }
  function disabled$factory() {
    return getPropertyCallableRef('disabled', 1, KMutableProperty1, function (receiver) {
      return receiver.y40();
    }, function (receiver, value) {
      return receiver.w41(value);
    });
  }
  function disabled$factory_0() {
    return getPropertyCallableRef('disabled', 1, KMutableProperty1, function (receiver) {
      return receiver.y40();
    }, function (receiver, value) {
      return receiver.w41(value);
    });
  }
  function background$factory_3() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.q40();
    }, function (receiver, value) {
      return receiver.e41(value);
    });
  }
  function background$factory_4() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.q40();
    }, function (receiver, value) {
      return receiver.e41(value);
    });
  }
  function color$factory_3() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.r40();
    }, function (receiver, value) {
      return receiver.f41(value);
    });
  }
  function color$factory_4() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.r40();
    }, function (receiver, value) {
      return receiver.f41(value);
    });
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_ButtonStyle;
  _.$_$.b = Button_0;
  _.$_$.c = CloseIcon;
  _.$_$.d = HamburgerIcon;
  _.$_$.e = Stroke;
  _.$_$.f = createIcon;
  _.$_$.g = get_HorizontalDividerStyle;
  _.$_$.h = HorizontalDivider;
  _.$_$.i = SimpleGrid;
  _.$_$.j = Surface;
  _.$_$.k = Overlay;
  _.$_$.l = get_SmoothColorStyle;
  _.$_$.m = get_BorderColorVar;
  _.$_$.n = get_ColorVar;
  _.$_$.o = get_SilkColorsStyle;
  _.$_$.p = initSilkWidgets;
  _.$_$.q = setSilkWidgetVariables_0;
  _.$_$.r = set_background;
  _.$_$.s = get_color;
  _.$_$.t = set_color;
  _.$_$.u = LG_getInstance;
  _.$_$.v = ButtonVars_getInstance;
  _.$_$.w = OverlayVars_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-silk-widgets.js.map
