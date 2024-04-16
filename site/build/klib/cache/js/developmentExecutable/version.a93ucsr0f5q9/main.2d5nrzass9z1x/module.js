(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kobweb-frontend-kobweb-core.js', './kobweb-frontend-silk-foundation.js', './compose-multiplatform-core-compose-runtime-runtime.js', './html-internal-html-core-runtime.js', './kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js', './kobweb-frontend-silk-widgets.js', './kobweb-frontend-silk-widgets-kobweb.js', './html-html-core.js', './kobweb-frontend-compose-html-ext.js', './kobweb-frontend-kobweb-silk.js', './kotlinx-coroutines-core.js', './kobweb-frontend-kobweb-compose.js', './kobweb-frontend-browser-ext.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-kobweb-core.js'), require('./kobweb-frontend-silk-foundation.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./html-internal-html-core-runtime.js'), require('./kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'), require('./kobweb-frontend-silk-widgets.js'), require('./kobweb-frontend-silk-widgets-kobweb.js'), require('./html-html-core.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./kobweb-frontend-kobweb-silk.js'), require('./kotlinx-coroutines-core.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./kobweb-frontend-browser-ext.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'com.canerture.androidhub:site'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'com.canerture.androidhub:site'.");
    }
    if (typeof this['kobweb-frontend-kobweb-core'] === 'undefined') {
      throw new Error("Error loading module 'com.canerture.androidhub:site'. Its dependency 'kobweb-frontend-kobweb-core' was not found. Please, check whether 'kobweb-frontend-kobweb-core' is loaded prior to 'com.canerture.androidhub:site'.");
    }
    if (typeof this['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'com.canerture.androidhub:site'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'com.canerture.androidhub:site'.");
    }
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'com.canerture.androidhub:site'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'com.canerture.androidhub:site'.");
    }
    if (typeof this['html-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'com.canerture.androidhub:site'. Its dependency 'html-internal-html-core-runtime' was not found. Please, check whether 'html-internal-html-core-runtime' is loaded prior to 'com.canerture.androidhub:site'.");
    }
    if (typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined') {
      throw new Error("Error loading module 'com.canerture.androidhub:site'. Its dependency 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' was not found. Please, check whether 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' is loaded prior to 'com.canerture.androidhub:site'.");
    }
    if (typeof this['kobweb-frontend-silk-widgets'] === 'undefined') {
      throw new Error("Error loading module 'com.canerture.androidhub:site'. Its dependency 'kobweb-frontend-silk-widgets' was not found. Please, check whether 'kobweb-frontend-silk-widgets' is loaded prior to 'com.canerture.androidhub:site'.");
    }
    if (typeof this['kobweb-frontend-silk-widgets-kobweb'] === 'undefined') {
      throw new Error("Error loading module 'com.canerture.androidhub:site'. Its dependency 'kobweb-frontend-silk-widgets-kobweb' was not found. Please, check whether 'kobweb-frontend-silk-widgets-kobweb' is loaded prior to 'com.canerture.androidhub:site'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'com.canerture.androidhub:site'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'com.canerture.androidhub:site'.");
    }
    if (typeof this['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'com.canerture.androidhub:site'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'com.canerture.androidhub:site'.");
    }
    if (typeof this['kobweb-frontend-kobweb-silk'] === 'undefined') {
      throw new Error("Error loading module 'com.canerture.androidhub:site'. Its dependency 'kobweb-frontend-kobweb-silk' was not found. Please, check whether 'kobweb-frontend-kobweb-silk' is loaded prior to 'com.canerture.androidhub:site'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'com.canerture.androidhub:site'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'com.canerture.androidhub:site'.");
    }
    if (typeof this['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'com.canerture.androidhub:site'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'com.canerture.androidhub:site'.");
    }
    if (typeof this['kobweb-frontend-browser-ext'] === 'undefined') {
      throw new Error("Error loading module 'com.canerture.androidhub:site'. Its dependency 'kobweb-frontend-browser-ext' was not found. Please, check whether 'kobweb-frontend-browser-ext' is loaded prior to 'com.canerture.androidhub:site'.");
    }
    root['com.canerture.androidhub:site'] = factory(typeof this['com.canerture.androidhub:site'] === 'undefined' ? {} : this['com.canerture.androidhub:site'], this['kotlin-kotlin-stdlib'], this['kobweb-frontend-kobweb-core'], this['kobweb-frontend-silk-foundation'], this['compose-multiplatform-core-compose-runtime-runtime'], this['html-internal-html-core-runtime'], kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, this['kobweb-frontend-silk-widgets'], this['kobweb-frontend-silk-widgets-kobweb'], this['html-html-core'], this['kobweb-frontend-compose-html-ext'], this['kobweb-frontend-kobweb-silk'], this['kotlinx-coroutines-core'], this['kobweb-frontend-kobweb-compose'], this['kobweb-frontend-browser-ext']);
  }
}(this, function (_, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_core, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_internal_html_core_runtime, kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, kotlin_com_varabyte_kobweb_silk_widgets, kotlin_com_varabyte_kobweb_silk_widgets_kobweb, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_com_varabyte_kobweb_kobweb_silk, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_com_varabyte_kobweb_browser_ext) {
  'use strict';
  //region block: imports
  var ensureNotNull = kotlin_kotlin.$_$.of;
  var get_api = kotlin_com_varabyte_kobweb_kobweb_core.$_$.a;
  var Companion_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.k;
  var Router = kotlin_com_varabyte_kobweb_kobweb_core.$_$.f;
  var initKobweb = kotlin_com_varabyte_kobweb_kobweb_core.$_$.b;
  var LegacyRouteRedirectStrategy_DISALLOW_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.h;
  var set_additionalSilkInitialization = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c1;
  var removePrefix = kotlin_kotlin.$_$.ed;
  var UpdateHistoryMode_REPLACE_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.i;
  var AppGlobals_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.j;
  var to = kotlin_kotlin.$_$.zf;
  var mapOf = kotlin_kotlin.$_$.p7;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var renderComposable = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.e;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var Unit_getInstance = kotlin_kotlin.$_$.l4;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var THROW_CCE = kotlin_kotlin.$_$.ve;
  var renderWithDeferred = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b1;
  var protoOf = kotlin_kotlin.$_$.ob;
  var objectMeta = kotlin_kotlin.$_$.nb;
  var setMetadataFor = kotlin_kotlin.$_$.pb;
  var removeClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.d;
  var hasClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.c;
  var toString = kotlin_kotlin.$_$.yf;
  var toInt = kotlin_kotlin.$_$.xd;
  var charSequenceLength = kotlin_kotlin.$_$.da;
  var toBoolean = kotlin_kotlin.$_$.ud;
  var isBlank = kotlin_kotlin.$_$.yc;
  var VOID = kotlin_kotlin.$_$.e;
  var removeSuffix = kotlin_kotlin.$_$.fd;
  var initSilkWidgets = kotlin_com_varabyte_kobweb_silk_widgets.$_$.p;
  var initSilkWidgetsKobweb = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.f;
  var registerKeyframes = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b;
  var Text = kotlin_org_jetbrains_compose_html_html_core.$_$.g6;
  var Code = kotlin_org_jetbrains_compose_html_html_core.$_$.q5;
  var GenericTag = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.n2;
  var Li = kotlin_org_jetbrains_compose_html_html_core.$_$.a6;
  var Em = kotlin_org_jetbrains_compose_html_html_core.$_$.t5;
  var Link = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.b;
  var H1 = kotlin_org_jetbrains_compose_html_html_core.$_$.u5;
  var P = kotlin_org_jetbrains_compose_html_html_core.$_$.c6;
  var HorizontalDivider = kotlin_com_varabyte_kobweb_silk_widgets.$_$.h;
  var H2 = kotlin_org_jetbrains_compose_html_html_core.$_$.v5;
  var H3 = kotlin_org_jetbrains_compose_html_html_core.$_$.w5;
  var H4 = kotlin_org_jetbrains_compose_html_html_core.$_$.x5;
  var Ul = kotlin_org_jetbrains_compose_html_html_core.$_$.h6;
  var Pre = kotlin_org_jetbrains_compose_html_html_core.$_$.b6;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var valueOf = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h1;
  var ColorMode_DARK_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n1;
  var SilkApp = kotlin_com_varabyte_kobweb_kobweb_silk.$_$.a;
  var CoroutineImpl = kotlin_kotlin.$_$.q9;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var isInterface = kotlin_kotlin.$_$.za;
  var classMeta = kotlin_kotlin.$_$.ea;
  var Companion_getInstance_1 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.r1;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k;
  var get_SmoothColorStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.l;
  var toModifier = kotlin_com_varabyte_kobweb_silk_foundation.$_$.x;
  var get_vh = kotlin_org_jetbrains_compose_html_html_core.$_$.k5;
  var minHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a2;
  var Companion_getInstance_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m3;
  var scrollBehavior = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s2;
  var Surface = kotlin_com_varabyte_kobweb_silk_widgets.$_$.i;
  var SuspendFunction1 = kotlin_kotlin.$_$.r9;
  var registerStyleBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d1;
  var get_HorizontalDividerStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.g;
  var modifyComponentStyleBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k1;
  var Companion_getInstance_3 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x3;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.u3;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h1;
  var Companion_getInstance_4 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.n3;
  var textAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w2;
  var lineHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s1;
  var toPalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g1;
  var get_color = kotlin_com_varabyte_kobweb_silk_widgets.$_$.s;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.f5;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n2;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.d5;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r;
  var ButtonVars_getInstance = kotlin_com_varabyte_kobweb_silk_widgets.$_$.v;
  var Colors_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o3;
  var setVariable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t2;
  var fontFamily = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g1;
  var fillMaxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e1;
  var KProperty0 = kotlin_kotlin.$_$.ec;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ma;
  var Companion_getInstance_5 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.q1;
  var base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n;
  var get_ButtonStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.a;
  var addVariantBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j;
  var Companion_getInstance_6 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n3;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.rf;
  var set_background = kotlin_com_varabyte_kobweb_silk_widgets.$_$.r;
  var set_color = kotlin_com_varabyte_kobweb_silk_widgets.$_$.t;
  var fontWeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j1;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y1;
  var margin_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x1;
  var Companion_getInstance_7 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f3;
  var fontWeight_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i1;
  var Companion_getInstance_8 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l3;
  var overflowWrap = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i2;
  var Companion_getInstance_9 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k3;
  var Companion_getInstance_10 = kotlin_org_jetbrains_compose_html_html_core.$_$.k;
  var display = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b1;
  var backgroundColor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n;
  var Companion_getInstance_11 = kotlin_org_jetbrains_compose_html_html_core.$_$.n;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t;
  var overflow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j2;
  var fillMaxSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d1;
  var Start_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u3;
  var Column = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d;
  var ComponentStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g;
  var maxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z1;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j3;
  var Svg = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m2;
  var gridTemplateRows = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o1;
  var Center_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s3;
  var Box = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c;
  var Breakpoint_MD_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m1;
  var padding_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o2;
  var Stop = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l2;
  var RadialGradient = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j2;
  var _SvgId___init__impl__pmt7ru = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a3;
  var Defs = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e2;
  var Path = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h2;
  var get_fr = kotlin_org_jetbrains_compose_html_html_core.$_$.c4;
  var CenterHorizontally_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q3;
  var gridRow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m1;
  var TopStart_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w3;
  var SpanText = kotlin_com_varabyte_kobweb_silk_foundation.$_$.z;
  var get_ColorVar = kotlin_com_varabyte_kobweb_silk_widgets.$_$.n;
  var get_UncoloredLinkVariant = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.d;
  var Link_0 = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.c;
  var Companion_getInstance_12 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r3;
  var whiteSpace = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f3;
  var Span = kotlin_org_jetbrains_compose_html_html_core.$_$.d6;
  var padding_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p2;
  var get_UndecoratedLinkVariant = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.e;
  var Companion_getInstance_13 = kotlin_com_varabyte_kobweb_browser_ext.$_$.j;
  var PopupPlacement_BottomRight_getInstance = kotlin_com_varabyte_kobweb_silk_widgets.$_$.u;
  var Tooltip = kotlin_com_varabyte_kobweb_silk_widgets.$_$.k;
  var THROW_IAE = kotlin_kotlin.$_$.we;
  var enumEntries = kotlin_kotlin.$_$.u9;
  var Enum = kotlin_kotlin.$_$.ke;
  var CenterVertically_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r3;
  var Row = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e;
  var OverlayVars_getInstance = kotlin_com_varabyte_kobweb_silk_widgets.$_$.w;
  var onClick = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e2;
  var Overlay = kotlin_com_varabyte_kobweb_silk_widgets.$_$.j;
  var HamburgerIcon = kotlin_com_varabyte_kobweb_silk_widgets.$_$.d;
  var CloseIcon = kotlin_com_varabyte_kobweb_silk_widgets.$_$.c;
  var height = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q1;
  var Image = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.a;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var KMutableProperty0 = kotlin_kotlin.$_$.cc;
  var THROW_ISE = kotlin_kotlin.$_$.xe;
  var getLocalDelegateReference = kotlin_kotlin.$_$.ka;
  var Spacer = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f;
  var gap = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k1;
  var displayIfAtLeast = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d;
  var displayUntil = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e;
  var translateX = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c3;
  var SunIcon = kotlin_com_varabyte_kobweb_silk_widgets.$_$.f;
  var MoonIcon = kotlin_com_varabyte_kobweb_silk_widgets.$_$.e;
  var padding_2 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m2;
  var End_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t3;
  var fillMaxHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c1;
  var clamp = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g3;
  var CenterEnd_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p3;
  var get_ms = kotlin_org_jetbrains_compose_html_html_core.$_$.a5;
  var Companion_getInstance_14 = kotlin_org_jetbrains_compose_html_html_core.$_$.g;
  var Companion_getInstance_15 = kotlin_org_jetbrains_compose_html_html_core.$_$.e;
  var Companion_getInstance_16 = kotlin_org_jetbrains_compose_html_html_core.$_$.f;
  var toAnimation = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c;
  var animation = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j;
  var borderRadius_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q;
  var onAnimationEnd = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d2;
  var Keyframes = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a;
  var get_em = kotlin_org_jetbrains_compose_html_html_core.$_$.w3;
  var Button = kotlin_com_varabyte_kobweb_silk_widgets.$_$.b;
  var gridItem = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l1;
  var Div = kotlin_org_jetbrains_compose_html_html_core.$_$.r5;
  var textShadow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y2;
  var toAttrs_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.w;
  var rememberPageContext = kotlin_com_varabyte_kobweb_kobweb_core.$_$.d;
  var Blue_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.s1;
  var Monochrome_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.u1;
  var grid = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p1;
  var margin_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w1;
  var boxShadow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w;
  var StyleVariable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt', objectMeta);
  setMetadataFor(ComposableSingletons$AboutKt, 'ComposableSingletons$AboutKt', objectMeta);
  setMetadataFor(AppEntry$lambda$slambda, 'AppEntry$lambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(Brand, 'Brand', classMeta, VOID, VOID, Brand);
  setMetadataFor(SitePalette, 'SitePalette', classMeta);
  setMetadataFor(SitePalettes, 'SitePalettes', objectMeta);
  setMetadataFor(PageLayout$slambda, 'PageLayout$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(ComposableSingletons$FooterKt, 'ComposableSingletons$FooterKt', objectMeta);
  setMetadataFor(SideMenuState, 'SideMenuState', classMeta, Enum);
  setMetadataFor(ComposableSingletons$NavHeaderKt, 'ComposableSingletons$NavHeaderKt', objectMeta);
  setMetadataFor(ComposableSingletons$IndexKt, 'ComposableSingletons$IndexKt', objectMeta);
  //endregion
  function forceReloadNow() {
    window.stop();
    window.location.reload();
  }
  function handleServerStatusEvents() {
    var status = ensureNotNull(document.getElementById('status'));
    var lastVersion = {_v: null};
    var shouldReload = {_v: false};
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = status.children[0];
    var warningIcon = ensureNotNull(tmp$ret$1);
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = status.children[1];
    var spinnerIcon = ensureNotNull(tmp$ret$3);
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = status.children[2];
    var statusText = ensureNotNull(tmp$ret$5);
    status.addEventListener('transitionend', handleServerStatusEvents$lambda(status, shouldReload));
    // Inline function 'org.w3c.dom.EventSourceInit' call
    var o = {};
    o['withCredentials'] = true;
    var eventSource = new EventSource('/api/kobweb-status', o);
    eventSource.addEventListener('version', handleServerStatusEvents$lambda_0(lastVersion, status, shouldReload));
    eventSource.addEventListener('status', handleServerStatusEvents$lambda_1(warningIcon, spinnerIcon, statusText, status));
    eventSource.onerror = handleServerStatusEvents$lambda_2(eventSource);
  }
  function main() {
    handleServerStatusEvents();
    get_api(window).set_logOnError_wi584t_k$(true);
    Companion_getInstance().set_wjk6wo_k$('');
    var router = new Router();
    initKobweb(router, main$lambda);
    router.setLegacyRouteRedirectStrategy_dj372z_k$(LegacyRouteRedirectStrategy_DISALLOW_getInstance());
    router.addRouteInterceptor_kgq7h7_k$(main$lambda_0);
    set_additionalSilkInitialization(main$lambda_1);
    router.navigateTo$default_onbd51_k$(removePrefix(window.location.href, window.location.origin), UpdateHistoryMode_REPLACE_getInstance());
    var root = ensureNotNull(document.getElementById('root'));
    while (!(root.firstChild == null)) {
      root.removeChild(ensureNotNull(root.firstChild));
    }
    AppGlobals_getInstance().initialize_8ufbf0_k$(mapOf(to('title', '.')));
    renderComposable('root', ComposableLambda$invoke$ref_3(composableLambdaInstance(1108811911, true, main$lambda_2(router))));
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-994802423, $changed, -1, 'ComposableSingletons$MainKt.lambda-1.<anonymous> (main.kt:86)');
      }
      HomePage($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_2$lambda_dts8wk($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1296252800, $changed, -1, 'ComposableSingletons$MainKt.lambda-2.<anonymous> (main.kt:87)');
      }
      AboutPage($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_3$lambda_ezu85n(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(it) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1940211355, $dirty, -1, 'ComposableSingletons$MainKt.lambda-3.<anonymous> (main.kt:128)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ComposableSingletons$MainKt.lambda-3.<anonymous>.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, 2103839155, true, ComposableSingletons$MainKt$lambda_3$lambda$lambda_g9fe80(it));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'ComposableSingletons$MainKt.lambda-3.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_2(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it_0;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      renderWithDeferred(tmp0, $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt$lambda_3$lambda$lambda_g9fe80($it) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(2103839155, $changed, -1, 'ComposableSingletons$MainKt.lambda-3.<anonymous>.<anonymous> (main.kt:128)');
        }
        $it($composer_0, 0);
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
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-994802423, false, ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-1296252800, false, ComposableSingletons$MainKt$lambda_2$lambda_dts8wk));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(1940211355, false, ComposableSingletons$MainKt$lambda_3$lambda_ezu85n));
  }
  protoOf(ComposableSingletons$MainKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_2_bzdzzp_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_3_bzdzzq_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function handleServerStatusEvents$lambda($status, $shouldReload) {
    return function (it) {
      var tmp;
      if (hasClass($status, 'fade-out')) {
        removeClass($status, ['fade-out']);
        var tmp_0;
        if ($shouldReload._v) {
          forceReloadNow();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      }
      return Unit_getInstance();
    };
  }
  function handleServerStatusEvents$lambda_0($lastVersion, $status, $shouldReload) {
    return function (evt) {
      var version = toInt(toString((evt instanceof MessageEvent ? evt : THROW_CCE()).data));
      var tmp;
      if ($lastVersion._v == null) {
        $lastVersion._v = version;
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!($lastVersion._v === version)) {
        $lastVersion._v = version;
        var tmp_1;
        // Inline function 'kotlin.text.isNotEmpty' call
        var this_0 = $status.className;
        if (charSequenceLength(this_0) > 0) {
          $shouldReload._v = true;
          tmp_1 = Unit_getInstance();
        } else {
          forceReloadNow();
          tmp_1 = Unit_getInstance();
        }
        tmp_0 = tmp_1;
      }
      return Unit_getInstance();
    };
  }
  function handleServerStatusEvents$lambda_1($warningIcon, $spinnerIcon, $statusText, $status) {
    return function (evt) {
      var tmp = JSON;
      var values = tmp.parse(toString((evt instanceof MessageEvent ? evt : THROW_CCE()).data));
      var tmp_0 = values.text;
      var text = (!(tmp_0 == null) ? typeof tmp_0 === 'string' : false) ? tmp_0 : THROW_CCE();
      var tmp_1 = values.isError;
      var isError = toBoolean((!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) ? tmp_1 : THROW_CCE());
      var tmp_2;
      // Inline function 'kotlin.text.isNotBlank' call
      if (!isBlank(text)) {
        $warningIcon.className = isError ? 'visible' : 'hidden';
        $spinnerIcon.className = isError ? 'hidden' : 'visible';
        $statusText.innerHTML = '<i>' + text + '<\/i>';
        $status.className = 'fade-in';
        tmp_2 = Unit_getInstance();
      } else {
        var tmp_3;
        if ($status.className === 'fade-in') {
          $status.className = 'fade-out';
          tmp_3 = Unit_getInstance();
        }
        tmp_2 = tmp_3;
      }
      return Unit_getInstance();
    };
  }
  function handleServerStatusEvents$lambda_2($eventSource) {
    return function (it) {
      $eventSource.close();
      return Unit_getInstance();
    };
  }
  function main$lambda(ctx) {
    ctx.get_router_j3zccy_k$().register$default_rn243d_k$('/', VOID, ComposableSingletons$MainKt_getInstance().lambda_1_r8sbbp_1);
    ctx.get_router_j3zccy_k$().register$default_rn243d_k$('/about', VOID, ComposableSingletons$MainKt_getInstance().lambda_2_r8sbbo_1);
    return Unit_getInstance();
  }
  function main$lambda_0($this$addRouteInterceptor) {
    $this$addRouteInterceptor.set_path_tgrnnc_k$(removeSuffix(removeSuffix($this$addRouteInterceptor.get_path_wos8ry_k$(), '.html'), '.htm'));
    return Unit_getInstance();
  }
  function main$lambda_1(ctx) {
    initSilkWidgets(ctx);
    initSilkWidgetsKobweb(ctx);
    ctx.get_theme_iz24rk_k$().registerComponentStyle_covb7k_k$(get_HeadlineTextStyle());
    ctx.get_theme_iz24rk_k$().registerComponentStyle_covb7k_k$(get_SubheadlineTextStyle());
    ctx.get_theme_iz24rk_k$().registerComponentStyle_covb7k_k$(get_MarkdownStyle());
    ctx.get_theme_iz24rk_k$().registerComponentStyle_covb7k_k$(get_PageContentStyle());
    ctx.get_theme_iz24rk_k$().registerComponentStyle_covb7k_k$(get_FooterStyle());
    ctx.get_theme_iz24rk_k$().registerComponentStyle_covb7k_k$(get_NavHeaderStyle());
    ctx.get_theme_iz24rk_k$().registerComponentStyle_covb7k_k$(get_HeroContainerStyle());
    ctx.get_theme_iz24rk_k$().registerComponentStyle_covb7k_k$(get_HomeGridStyle());
    ctx.get_theme_iz24rk_k$().registerComponentStyle_covb7k_k$(get_HomeGridCellStyle());
    ctx.get_theme_iz24rk_k$().registerComponentVariants_gvd8pt_k$([get_CircleButtonVariant()]);
    ctx.get_theme_iz24rk_k$().registerComponentVariants_gvd8pt_k$([get_UncoloredButtonVariant()]);
    registerKeyframes(ctx.get_stylesheet_hk204p_k$(), get_SideMenuSlideInAnim());
    initColorMode(ctx);
    initSiteStyles(ctx);
    initTheme(ctx);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function main$lambda$lambda($router) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1190994075, $changed, -1, 'main.<anonymous>.<anonymous> (main.kt:128)');
        }
        $router.renderActivePage_fc13h0_k$(ComposableSingletons$MainKt_getInstance().lambda_3_r8sbbn_1, $composer_0, 70, 0);
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
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function main$lambda_2($router) {
    return function ($this$renderComposable, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1108811911, $changed, -1, 'main.<anonymous> (main.kt:127)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'main.<anonymous>.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, -1190994075, true, main$lambda$lambda($router));
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
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'main.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_4(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      AppEntry(tmp0, $composer_0, 6);
      var tmp_2;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_2 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function AboutPage($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-2053218993);
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-2053218993, $changed, -1, 'com.canerture.androidhub.pages.AboutPage (About.kt:8)');
      }
      MarkdownLayout('About', ComposableSingletons$AboutKt_getInstance().lambda_69_7sywsp_1, $composer_0, 54);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(AboutPage$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_1$lambda_irurs3($this$H1, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(655888299, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-1.<anonymous> (About.kt:11)');
    }
    Text('About this template', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_2$lambda_nfmt4u($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(443045834, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-2.<anonymous> (About.kt:14)');
    }
    Text('This template is intended to both demonstrate some fundamentals of the Kobweb framework and act a starting point you can build your own site from.', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_3$lambda_5dznxd($this$H2, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1882134090, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-3.<anonymous> (About.kt:18)');
    }
    Text('Learn', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_4$lambda_y7m4zk($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(574934067, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-4.<anonymous> (About.kt:21)');
    }
    Text("If this is your first time using Kobweb, please open this site's project in an IDE and take a few minutes to look around the code.", $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_5$lambda_7zvfxd($this$H3, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1186587415, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-5.<anonymous> (About.kt:24)');
    }
    Text('Files', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_6$lambda_ktr14u($this$H4, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(39658376, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-6.<anonymous> (About.kt:27)');
    }
    Text('AppEntry.kt', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_7$lambda_ldqjs3($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1055744463, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-7.<anonymous> (About.kt:32)');
    }
    Text('@App', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_8$lambda_7fvxa4($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1801179858, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-8.<anonymous> (About.kt:30)');
    }
    Text('This file declares a method that is an entry point for all pages on your site. You can rename the file and the method if you like. Kobweb searches for a single method at compile time annotated with ', $composer_0, 6);
    Code(null, ComposableSingletons$AboutKt_getInstance().lambda_7_r8sbbj_1, $composer_0, 48, 1);
    Text('.', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_9$lambda_yrlnmt($this$H4, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-533356431, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-9.<anonymous> (About.kt:37)');
    }
    Text('AppStyles.kt', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_14($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_10$lambda_i5qkjn($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1267541647, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-10.<anonymous> (About.kt:40)');
    }
    Text('An example of declaring generally useful styles that can be used anywhere across the whole site. Otherwise, you normally declare styles close to the widget that uses them.', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_15($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_11$lambda_o1r0da($this$H4, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(692889360, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-11.<anonymous> (About.kt:43)');
    }
    Text('SiteTheme.kt', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_16($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_12$lambda_4rvgox($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-41295856, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-12.<anonymous> (About.kt:46)');
    }
    Text('An example of how to define some site-specific colors, effectively extending the palette provided by Silk.', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_17($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_13$lambda_xlhxr4($this$H4, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1919135151, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-13.<anonymous> (About.kt:49)');
    }
    Text('components/', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_18($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_14$lambda_8lzn5t($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1184949935, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-14.<anonymous> (About.kt:52)');
    }
    Text('By convention, Kobweb codebases organize reusable site components under this folder. Within it, you have:', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_19($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_15$lambda_k7mtwe($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(672559373, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-15.<anonymous> (About.kt:57)');
    }
    Text('layout/', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_20($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_16$lambda_lzur0j($this$Li, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1697742766, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-16.<anonymous> (About.kt:56)');
    }
    Code(null, ComposableSingletons$AboutKt_getInstance().lambda_15_7sywoa_1, $composer_0, 48, 1);
    GenericTag('br', null, null, $composer_0, 54, 4);
    Text(' Represents top-level organization for pages', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_21($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_17$lambda_6trq1o($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1820169028, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-17.<anonymous> (About.kt:64)');
    }
    Text('sections/', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_22($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_18$lambda_zdpuv9($this$Li, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-821068379, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-18.<anonymous> (About.kt:63)');
    }
    Code(null, ComposableSingletons$AboutKt_getInstance().lambda_17_7sywoc_1, $composer_0, 48, 1);
    GenericTag('br', null, null, $composer_0, 54, 4);
    Text(' Areas of content that appear across multiple pages (such as nav bars and footers)', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_23($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_19$lambda_6k3dt2($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1116306053, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-19.<anonymous> (About.kt:71)');
    }
    Text('widgets/', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_24($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_20$lambda_bqdg8s($this$Li, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1524931354, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-20.<anonymous> (About.kt:70)');
    }
    Code(null, ComposableSingletons$AboutKt_getInstance().lambda_19_7sywoe_1, $composer_0, 48, 1);
    GenericTag('br', null, null, $composer_0, 54, 4);
    Text(' Home for low-level UI pieces that you can use around your site', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_25($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_21$lambda_h390tf($this$Ul, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(245760669, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-21.<anonymous> (About.kt:55)');
    }
    Li(null, ComposableSingletons$AboutKt_getInstance().lambda_16_7sywob_1, $composer_0, 48, 1);
    Li(null, ComposableSingletons$AboutKt_getInstance().lambda_18_7sywod_1, $composer_0, 48, 1);
    Li(null, ComposableSingletons$AboutKt_getInstance().lambda_20_7sywp0__1, $composer_0, 48, 1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_26($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_22$lambda_p48k3i($this$H4, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1149586354, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-22.<anonymous> (About.kt:78)');
    }
    Text('pages/', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_27($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_23$lambda_3pdwyp($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-445728595, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-23.<anonymous> (About.kt:83)');
    }
    Text('@Composable', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_28($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_24$lambda_wj0e0w($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1296049558, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-24.<anonymous> (About.kt:87)');
    }
    Text('@Page', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_29($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_25$lambda_9oh6w1($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(951133813, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-25.<anonymous> (About.kt:91)');
    }
    Text('resources/markdown', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_30($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_26$lambda_j55a66($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1883771570, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-26.<anonymous> (About.kt:81)');
    }
    Text('Any ', $composer_0, 6);
    Code(null, ComposableSingletons$AboutKt_getInstance().lambda_23_7sywp3__1, $composer_0, 48, 1);
    Text(' under this folder additionally tagged with ', $composer_0, 6);
    Code(null, ComposableSingletons$AboutKt_getInstance().lambda_24_7sywp4__1, $composer_0, 48, 1);
    Text(' will have a route generated for it automatically. Defining a page outside of this folder will be flagged as an error by the Kobweb Gradle plugin at compile time. Note that additional pages (like this one!) might live under the ', $composer_0, 6);
    Code(null, ComposableSingletons$AboutKt_getInstance().lambda_25_7sywp5__1, $composer_0, 48, 1);
    Text(' folder.', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_31($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_27$lambda_n2caqr($this$H4, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(76659437, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-27.<anonymous> (About.kt:96)');
    }
    Text('resources/', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_32($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_28$lambda_5ra6bg($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(2094112950, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-28.<anonymous> (About.kt:101)');
    }
    Text('public', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_33($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_29$lambda_ykwndn($this$Li, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-547124457, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-29.<anonymous> (About.kt:100)');
    }
    Code(null, ComposableSingletons$AboutKt_getInstance().lambda_28_7sywp8__1, $composer_0, 48, 1);
    GenericTag('br', null, null, $composer_0, 54, 4);
    Text(' If you want to host any media on your site (such as an icon, an image, text configuration files, movies, fonts, etc.), you should put it under this folder.', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_34($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_30$lambda_temkxx($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1140396333, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-30.<anonymous> (About.kt:108)');
    }
    Text('markdown', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_35($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_31$lambda_csuzz0($this$Li, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1236920142, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-31.<anonymous> (About.kt:107)');
    }
    Code(null, ComposableSingletons$AboutKt_getInstance().lambda_30_7sywpv_1, $composer_0, 48, 1);
    GenericTag('br', null, null, $composer_0, 54, 4);
    Text(' Any markdown discovered in here by Kobweb at compile time will be converted into pages on your site.', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_36($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_32$lambda_g0rh37($this$Ul, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-37548474, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-32.<anonymous> (About.kt:99)');
    }
    Li(null, ComposableSingletons$AboutKt_getInstance().lambda_29_7sywp9__1, $composer_0, 48, 1);
    Li(null, ComposableSingletons$AboutKt_getInstance().lambda_31_7sywpw_1, $composer_0, 48, 1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_37($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_33$lambda_q6q3tq($this$H3, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-2134522478, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-33.<anonymous> (About.kt:115)');
    }
    Text('Classes', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_38($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_34$lambda_2mwd8h($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-657525779, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-34.<anonymous> (About.kt:118)');
    }
    Text('The Kobweb and Silk APIs introduce a lot of powerful concepts. Here are some of the most important ones to know about which you can find used throughout this template.', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_39($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_35$lambda_vgiuao($this$H4, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1302905228, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-35.<anonymous> (About.kt:121)');
    }
    Text('Modifier', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_40($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_36$lambda_aqyqm9($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(2006762987, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-36.<anonymous> (About.kt:126)');
    }
    Text('Modifier', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_41($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_37$lambda_i2nqfy($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(568720012, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-37.<anonymous> (About.kt:124)');
    }
    Text('Kobweb introduces the ', $composer_0, 6);
    Code(null, ComposableSingletons$AboutKt_getInstance().lambda_36_7sywq1__1, $composer_0, 48, 1);
    Text(' keyword that Android developers will recognize from the Jetpack Compose API. In a webdev context, this is used for setting CSS styles and html attributes on elements in the page.', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_42($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_38$lambda_o4tugz($this$H4, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1765816277, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-38.<anonymous> (About.kt:131)');
    }
    Text('ComponentStyle', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_43($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_39$lambda_4osml8($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1061958518, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-39.<anonymous> (About.kt:136)');
    }
    Text('ComponentStyle', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_44($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_40$lambda_hhfui($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1794965803, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-40.<anonymous> (About.kt:134)');
    }
    Text('Traditional HTML pages use CSS to style their UI. In Kobweb, these styles can be declared using the ', $composer_0, 6);
    Code(null, ComposableSingletons$AboutKt_getInstance().lambda_39_7sywq4__1, $composer_0, 48, 1);
    Text(' class in a Kotlin-idiomatic way. You can find examples of component styles used throughout the template.', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_45($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_41$lambda_sc517p($this$H4, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-539570486, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-41.<anonymous> (About.kt:141)');
    }
    Text('ComponentVariant', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_46($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_42$lambda_dvcjp8($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1610511413, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-42.<anonymous> (About.kt:144)');
    }
    Text('You can generate variants from component styles, which are ways to take base component styles and tweak them further.', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_47($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_43$lambda_ey9xcz($this$H4, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(686675305, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-43.<anonymous> (About.kt:147)');
    }
    Text('Keyframes', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_48($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_44$lambda_r97njy($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-384265622, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-44.<anonymous> (About.kt:150)');
    }
    Text('You can create animations by declaring keyframes for them.', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_49($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_45$lambda_1keti9($this$H2, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(559278771, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-45.<anonymous> (About.kt:153)');
    }
    Text('Starting Point', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_50($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_46$lambda_ue1akg($this$Em, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1478401541, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-46.<anonymous> (About.kt:158)');
    }
    Text('About', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_51($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_47$lambda_btgach($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(841980169, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-47.<anonymous> (About.kt:156)');
    }
    Text('This template aims to create some generally useful pieces that most sites will want to use. Making your own site could be as easy as deleting this ', $composer_0, 6);
    Em(null, ComposableSingletons$AboutKt_getInstance().lambda_46_7sywqw_1, $composer_0, 48, 1);
    Text(" page and working from there. However, you are welcome to modify or delete anything you find in the template that you don't plan to use in your final site.", $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_52($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_48$lambda_h066pq($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(2068225960, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-48.<anonymous> (About.kt:163)');
    }
    Text("If instead you'd like to start from scratch, you can run", $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_53($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_49$lambda_p7be77($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-187836906, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-49.<anonymous> (About.kt:165)');
    }
    Text('$ kobweb create app/empty\n', $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_54($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_50$lambda_udlgmx($this$Pre, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1625879881, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-50.<anonymous> (About.kt:165)');
    }
    Code(null, ComposableSingletons$AboutKt_getInstance().lambda_49_7sywqz_1, $composer_0, 48, 1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_55($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_51$lambda_1jyzkq($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1000495545, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-51.<anonymous> (About.kt:168)');
    }
    Text('which will create a new project with nothing inside of it except for a minimal, skeletal structure.', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_56($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_52$lambda_r9nhhh($this$H2, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1785524562, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-52.<anonymous> (About.kt:171)');
    }
    Text('Export and Deploy', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_57($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_53$lambda_exu3fg($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(225750246, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-53.<anonymous> (About.kt:174)');
    }
    Text("When you are ready to share your site with the world, you'll want to export it first. This will create a production snapshot of your site.", $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_58($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_54$lambda_dvsdmr($this$Em, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(2088417409, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-54.<anonymous> (About.kt:179)');
    }
    Text('static layout', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_59($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_55$lambda_sbp7a6($this$Em, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(223327736, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-55.<anonymous> (About.kt:183)');
    }
    Text('full stack', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_60($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda_56$lambda_hx9s1($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(940845651, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-56.<anonymous> (About.kt:187)');
      }
      Text('read more about these choices here', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_61($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_57$lambda_tbjqu8($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1451996037, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-57.<anonymous> (About.kt:177)');
    }
    Text('There are two flavors of Kobweb sites: ', $composer_0, 6);
    Em(null, ComposableSingletons$AboutKt_getInstance().lambda_54_7sywrp_1, $composer_0, 48, 1);
    Text(' and ', $composer_0, 6);
    Em(null, ComposableSingletons$AboutKt_getInstance().lambda_55_7sywrq_1, $composer_0, 48, 1);
    Text('. You can ', $composer_0, 6);
    Link('https://github.com/varabyte/kobweb#static-layout-vs-full-stack-sites', null, null, null, null, false, null, ComposableSingletons$AboutKt_getInstance().lambda_56_7sywrr_1, $composer_0, 12582918, 126);
    Text('.', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_62($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_58$lambda_cvxu2p($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1616725468, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-58.<anonymous> (About.kt:192)');
    }
    Text('For most sites, a static layout site is what you want, so to do that, return to the command line and run:', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_63($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_59$lambda_fxomzi($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-112990337, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-59.<anonymous> (About.kt:194)');
    }
    Text('$ kobweb export --layout static\n', $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_64($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_60$lambda_arekjs($this$Pre, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(907180000, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-60.<anonymous> (About.kt:194)');
    }
    Code(null, ComposableSingletons$AboutKt_getInstance().lambda_59_7sywru_1, $composer_0, 48, 1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_65($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_61$lambda_vg30d5($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1239179588, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-61.<anonymous> (About.kt:199)');
    }
    Text('.kobweb/site', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_66($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_62$lambda_2mgjay($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-390479677, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-62.<anonymous> (About.kt:197)');
    }
    Text('After that runs for a little while, your production site should be generated! You can find the files under the ', $composer_0, 6);
    Code(null, ComposableSingletons$AboutKt_getInstance().lambda_61_7sywsh_1, $composer_0, 48, 1);
    Text(' folder.', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_67($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_63$lambda_q75xr9($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(835766114, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-63.<anonymous> (About.kt:204)');
    }
    Text('Test it locally by running:', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_68($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_64$lambda_g0bn5o($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1113255454, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-64.<anonymous> (About.kt:206)');
    }
    Text('$ kobweb run --layout static --env prod\n', $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_69($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_65$lambda_ctatwj($this$Pre, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(2133425791, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-65.<anonymous> (About.kt:206)');
    }
    Code(null, ComposableSingletons$AboutKt_getInstance().lambda_64_7sywsk_1, $composer_0, 48, 1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_70($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_66$lambda_te6r0e($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(2043369740, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-66.<anonymous> (About.kt:209)');
    }
    Text("If you're satisfied, you can upload your site files to the static website host provider of your choice. Each provider has its own instructions for how it discovers your files, so please refer to their documentation.", $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_71($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda_67$lambda_kk9y7($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1536502151, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-67.<anonymous> (About.kt:214)');
      }
      Text('read this blog post', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_72($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_68$lambda_s92740($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1025351765, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-68.<anonymous> (About.kt:212)');
    }
    Text('You can ', $composer_0, 6);
    Link('https://bitspittle.dev/blog/2022/staticdeploy', null, null, null, null, false, null, ComposableSingletons$AboutKt_getInstance().lambda_67_7sywsn_1, $composer_0, 12582918, 126);
    Text(' for some concrete examples of exporting a Kobweb site to two popular static website hosting providers.', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_73($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda_69$lambda_dyfdsx($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1129324712, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-69.<anonymous> (About.kt:10)');
      }
      $composer_0.startReplaceableGroup_ip860b_k$(120959690);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-69.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      H1(tmp0_group, ComposableSingletons$AboutKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 48, 1);
      HorizontalDivider(null, null, $composer_0, 0, 3);
      $composer_0.startReplaceableGroup_ip860b_k$(120960172);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-69.<anonymous>.<anonymous>' call
        var value_0 = ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_0;
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      H2(tmp1_group, ComposableSingletons$AboutKt_getInstance().lambda_3_r8sbbn_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().lambda_4_r8sbbm_1, $composer_0, 48, 1);
      $composer_0.startReplaceableGroup_ip860b_k$(120960539);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (false ? true : it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-69.<anonymous>.<anonymous>' call
        var value_1 = ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_1;
        $composer_0.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      H3(tmp2_group, ComposableSingletons$AboutKt_getInstance().lambda_5_r8sbbl_1, $composer_0, 54, 0);
      $composer_0.startReplaceableGroup_ip860b_k$(120960673);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_5;
      if (false ? true : it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-69.<anonymous>.<anonymous>' call
        var value_2 = ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_2;
        $composer_0.updateRememberedValue_l1wh71_k$(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp3_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      H4(tmp3_group, ComposableSingletons$AboutKt_getInstance().lambda_6_r8sbbk_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().lambda_8_r8sbbi_1, $composer_0, 48, 1);
      $composer_0.startReplaceableGroup_ip860b_k$(120961294);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_7;
      if (false ? true : it_3 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-69.<anonymous>.<anonymous>' call
        var value_3 = ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_3;
        $composer_0.updateRememberedValue_l1wh71_k$(value_3);
        tmp_7 = value_3;
      } else {
        tmp_7 = it_3;
      }
      var tmp_8 = tmp_7;
      var tmp4_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      H4(tmp4_group, ComposableSingletons$AboutKt_getInstance().lambda_9_r8sbbh_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().lambda_10_7sywo5__1, $composer_0, 48, 1);
      $composer_0.startReplaceableGroup_ip860b_k$(120961716);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_4 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_9;
      if (false ? true : it_4 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-69.<anonymous>.<anonymous>' call
        var value_4 = ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_4;
        $composer_0.updateRememberedValue_l1wh71_k$(value_4);
        tmp_9 = value_4;
      } else {
        tmp_9 = it_4;
      }
      var tmp_10 = tmp_9;
      var tmp5_group = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      H4(tmp5_group, ComposableSingletons$AboutKt_getInstance().lambda_11_7sywo6__1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().lambda_12_7sywo7__1, $composer_0, 48, 1);
      $composer_0.startReplaceableGroup_ip860b_k$(120962073);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_5 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_11;
      if (false ? true : it_5 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-69.<anonymous>.<anonymous>' call
        var value_5 = ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_5;
        $composer_0.updateRememberedValue_l1wh71_k$(value_5);
        tmp_11 = value_5;
      } else {
        tmp_11 = it_5;
      }
      var tmp_12 = tmp_11;
      var tmp6_group = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      H4(tmp6_group, ComposableSingletons$AboutKt_getInstance().lambda_13_7sywo8__1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().lambda_14_7sywo9__1, $composer_0, 48, 1);
      Ul(null, ComposableSingletons$AboutKt_getInstance().lambda_21_7sywp1__1, $composer_0, 48, 1);
      $composer_0.startReplaceableGroup_ip860b_k$(120963643);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_6 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_13;
      if (false ? true : it_6 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-69.<anonymous>.<anonymous>' call
        var value_6 = ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_6;
        $composer_0.updateRememberedValue_l1wh71_k$(value_6);
        tmp_13 = value_6;
      } else {
        tmp_13 = it_6;
      }
      var tmp_14 = tmp_13;
      var tmp7_group = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      H4(tmp7_group, ComposableSingletons$AboutKt_getInstance().lambda_22_7sywp2__1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().lambda_26_7sywp6__1, $composer_0, 48, 1);
      $composer_0.startReplaceableGroup_ip860b_k$(120964706);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_7 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_15;
      if (false ? true : it_7 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-69.<anonymous>.<anonymous>' call
        var value_7 = ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_7;
        $composer_0.updateRememberedValue_l1wh71_k$(value_7);
        tmp_15 = value_7;
      } else {
        tmp_15 = it_7;
      }
      var tmp_16 = tmp_15;
      var tmp8_group = (tmp_16 == null ? true : !(tmp_16 == null)) ? tmp_16 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      H4(tmp8_group, ComposableSingletons$AboutKt_getInstance().lambda_27_7sywp7__1, $composer_0, 54, 0);
      Ul(null, ComposableSingletons$AboutKt_getInstance().lambda_32_7sywpx_1, $composer_0, 48, 1);
      $composer_0.startReplaceableGroup_ip860b_k$(120965807);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_8 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_17;
      if (false ? true : it_8 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-69.<anonymous>.<anonymous>' call
        var value_8 = ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_8;
        $composer_0.updateRememberedValue_l1wh71_k$(value_8);
        tmp_17 = value_8;
      } else {
        tmp_17 = it_8;
      }
      var tmp_18 = tmp_17;
      var tmp9_group = (tmp_18 == null ? true : !(tmp_18 == null)) ? tmp_18 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      H3(tmp9_group, ComposableSingletons$AboutKt_getInstance().lambda_33_7sywpy_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().lambda_34_7sywpz_1, $composer_0, 48, 1);
      $composer_0.startReplaceableGroup_ip860b_k$(120966215);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_9 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_19;
      if (false ? true : it_9 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-69.<anonymous>.<anonymous>' call
        var value_9 = ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_9;
        $composer_0.updateRememberedValue_l1wh71_k$(value_9);
        tmp_19 = value_9;
      } else {
        tmp_19 = it_9;
      }
      var tmp_20 = tmp_19;
      var tmp10_group = (tmp_20 == null ? true : !(tmp_20 == null)) ? tmp_20 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      H4(tmp10_group, ComposableSingletons$AboutKt_getInstance().lambda_35_7sywq0__1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().lambda_37_7sywq2__1, $composer_0, 48, 1);
      $composer_0.startReplaceableGroup_ip860b_k$(120966836);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_10 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_21;
      if (false ? true : it_10 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-69.<anonymous>.<anonymous>' call
        var value_10 = ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_10;
        $composer_0.updateRememberedValue_l1wh71_k$(value_10);
        tmp_21 = value_10;
      } else {
        tmp_21 = it_10;
      }
      var tmp_22 = tmp_21;
      var tmp11_group = (tmp_22 == null ? true : !(tmp_22 == null)) ? tmp_22 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      H4(tmp11_group, ComposableSingletons$AboutKt_getInstance().lambda_38_7sywq3__1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().lambda_40_7sywqq_1, $composer_0, 48, 1);
      $composer_0.startReplaceableGroup_ip860b_k$(120967479);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_11 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_23;
      if (false ? true : it_11 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-69.<anonymous>.<anonymous>' call
        var value_11 = ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_11;
        $composer_0.updateRememberedValue_l1wh71_k$(value_11);
        tmp_23 = value_11;
      } else {
        tmp_23 = it_11;
      }
      var tmp_24 = tmp_23;
      var tmp12_group = (tmp_24 == null ? true : !(tmp_24 == null)) ? tmp_24 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      H4(tmp12_group, ComposableSingletons$AboutKt_getInstance().lambda_41_7sywqr_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().lambda_42_7sywqs_1, $composer_0, 48, 1);
      $composer_0.startReplaceableGroup_ip860b_k$(120967855);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_12 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_25;
      if (false ? true : it_12 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-69.<anonymous>.<anonymous>' call
        var value_12 = ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_12;
        $composer_0.updateRememberedValue_l1wh71_k$(value_12);
        tmp_25 = value_12;
      } else {
        tmp_25 = it_12;
      }
      var tmp_26 = tmp_25;
      var tmp13_group = (tmp_26 == null ? true : !(tmp_26 == null)) ? tmp_26 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      H4(tmp13_group, ComposableSingletons$AboutKt_getInstance().lambda_43_7sywqt_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().lambda_44_7sywqu_1, $composer_0, 48, 1);
      $composer_0.startReplaceableGroup_ip860b_k$(120968158);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_13 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_27;
      if (false ? true : it_13 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-69.<anonymous>.<anonymous>' call
        var value_13 = ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_13;
        $composer_0.updateRememberedValue_l1wh71_k$(value_13);
        tmp_27 = value_13;
      } else {
        tmp_27 = it_13;
      }
      var tmp_28 = tmp_27;
      var tmp14_group = (tmp_28 == null ? true : !(tmp_28 == null)) ? tmp_28 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      H2(tmp14_group, ComposableSingletons$AboutKt_getInstance().lambda_45_7sywqv_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().lambda_47_7sywqx_1, $composer_0, 48, 1);
      P(null, ComposableSingletons$AboutKt_getInstance().lambda_48_7sywqy_1, $composer_0, 48, 1);
      Pre(null, ComposableSingletons$AboutKt_getInstance().lambda_50_7sywrl_1, $composer_0, 48, 1);
      P(null, ComposableSingletons$AboutKt_getInstance().lambda_51_7sywrm_1, $composer_0, 48, 1);
      $composer_0.startReplaceableGroup_ip860b_k$(120969407);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_14 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_29;
      if (false ? true : it_14 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-69.<anonymous>.<anonymous>' call
        var value_14 = ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_14;
        $composer_0.updateRememberedValue_l1wh71_k$(value_14);
        tmp_29 = value_14;
      } else {
        tmp_29 = it_14;
      }
      var tmp_30 = tmp_29;
      var tmp15_group = (tmp_30 == null ? true : !(tmp_30 == null)) ? tmp_30 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      H2(tmp15_group, ComposableSingletons$AboutKt_getInstance().lambda_52_7sywrn_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().lambda_53_7sywro_1, $composer_0, 48, 1);
      P(null, ComposableSingletons$AboutKt_getInstance().lambda_57_7sywrs_1, $composer_0, 48, 1);
      P(null, ComposableSingletons$AboutKt_getInstance().lambda_58_7sywrt_1, $composer_0, 48, 1);
      Pre(null, ComposableSingletons$AboutKt_getInstance().lambda_60_7sywsg_1, $composer_0, 48, 1);
      P(null, ComposableSingletons$AboutKt_getInstance().lambda_62_7sywsi_1, $composer_0, 48, 1);
      P(null, ComposableSingletons$AboutKt_getInstance().lambda_63_7sywsj_1, $composer_0, 48, 1);
      Pre(null, ComposableSingletons$AboutKt_getInstance().lambda_65_7sywsl_1, $composer_0, 48, 1);
      P(null, ComposableSingletons$AboutKt_getInstance().lambda_66_7sywsm_1, $composer_0, 48, 1);
      P(null, ComposableSingletons$AboutKt_getInstance().lambda_68_7sywso_1, $composer_0, 48, 1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng($this$H1) {
    $this$H1.id_e4l56n_k$('about-this-template');
    return Unit_getInstance();
  }
  function ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_0($this$H2) {
    $this$H2.id_e4l56n_k$('learn');
    return Unit_getInstance();
  }
  function ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_1($this$H3) {
    $this$H3.id_e4l56n_k$('files');
    return Unit_getInstance();
  }
  function ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_2($this$H4) {
    $this$H4.id_e4l56n_k$('appentry-kt');
    return Unit_getInstance();
  }
  function ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_3($this$H4) {
    $this$H4.id_e4l56n_k$('appstyles-kt');
    return Unit_getInstance();
  }
  function ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_4($this$H4) {
    $this$H4.id_e4l56n_k$('sitetheme-kt');
    return Unit_getInstance();
  }
  function ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_5($this$H4) {
    $this$H4.id_e4l56n_k$('components');
    return Unit_getInstance();
  }
  function ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_6($this$H4) {
    $this$H4.id_e4l56n_k$('pages');
    return Unit_getInstance();
  }
  function ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_7($this$H4) {
    $this$H4.id_e4l56n_k$('resources');
    return Unit_getInstance();
  }
  function ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_8($this$H3) {
    $this$H3.id_e4l56n_k$('classes');
    return Unit_getInstance();
  }
  function ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_9($this$H4) {
    $this$H4.id_e4l56n_k$('modifier');
    return Unit_getInstance();
  }
  function ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_10($this$H4) {
    $this$H4.id_e4l56n_k$('componentstyle');
    return Unit_getInstance();
  }
  function ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_11($this$H4) {
    $this$H4.id_e4l56n_k$('componentvariant');
    return Unit_getInstance();
  }
  function ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_12($this$H4) {
    $this$H4.id_e4l56n_k$('keyframes');
    return Unit_getInstance();
  }
  function ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_13($this$H2) {
    $this$H2.id_e4l56n_k$('starting-point');
    return Unit_getInstance();
  }
  function ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_14($this$H2) {
    $this$H2.id_e4l56n_k$('export-and-deploy');
    return Unit_getInstance();
  }
  function ComposableSingletons$AboutKt() {
    ComposableSingletons$AboutKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_5(composableLambdaInstance(655888299, false, ComposableSingletons$AboutKt$lambda_1$lambda_irurs3));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_6(composableLambdaInstance(443045834, false, ComposableSingletons$AboutKt$lambda_2$lambda_nfmt4u));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_7(composableLambdaInstance(1882134090, false, ComposableSingletons$AboutKt$lambda_3$lambda_5dznxd));
    var tmp_2 = this;
    tmp_2.lambda_4_r8sbbm_1 = ComposableLambda$invoke$ref_8(composableLambdaInstance(574934067, false, ComposableSingletons$AboutKt$lambda_4$lambda_y7m4zk));
    var tmp_3 = this;
    tmp_3.lambda_5_r8sbbl_1 = ComposableLambda$invoke$ref_9(composableLambdaInstance(-1186587415, false, ComposableSingletons$AboutKt$lambda_5$lambda_7zvfxd));
    var tmp_4 = this;
    tmp_4.lambda_6_r8sbbk_1 = ComposableLambda$invoke$ref_10(composableLambdaInstance(39658376, false, ComposableSingletons$AboutKt$lambda_6$lambda_ktr14u));
    var tmp_5 = this;
    tmp_5.lambda_7_r8sbbj_1 = ComposableLambda$invoke$ref_11(composableLambdaInstance(-1055744463, false, ComposableSingletons$AboutKt$lambda_7$lambda_ldqjs3));
    var tmp_6 = this;
    tmp_6.lambda_8_r8sbbi_1 = ComposableLambda$invoke$ref_12(composableLambdaInstance(1801179858, false, ComposableSingletons$AboutKt$lambda_8$lambda_7fvxa4));
    var tmp_7 = this;
    tmp_7.lambda_9_r8sbbh_1 = ComposableLambda$invoke$ref_13(composableLambdaInstance(-533356431, false, ComposableSingletons$AboutKt$lambda_9$lambda_yrlnmt));
    var tmp_8 = this;
    tmp_8.lambda_10_7sywo5__1 = ComposableLambda$invoke$ref_14(composableLambdaInstance(-1267541647, false, ComposableSingletons$AboutKt$lambda_10$lambda_i5qkjn));
    var tmp_9 = this;
    tmp_9.lambda_11_7sywo6__1 = ComposableLambda$invoke$ref_15(composableLambdaInstance(692889360, false, ComposableSingletons$AboutKt$lambda_11$lambda_o1r0da));
    var tmp_10 = this;
    tmp_10.lambda_12_7sywo7__1 = ComposableLambda$invoke$ref_16(composableLambdaInstance(-41295856, false, ComposableSingletons$AboutKt$lambda_12$lambda_4rvgox));
    var tmp_11 = this;
    tmp_11.lambda_13_7sywo8__1 = ComposableLambda$invoke$ref_17(composableLambdaInstance(1919135151, false, ComposableSingletons$AboutKt$lambda_13$lambda_xlhxr4));
    var tmp_12 = this;
    tmp_12.lambda_14_7sywo9__1 = ComposableLambda$invoke$ref_18(composableLambdaInstance(1184949935, false, ComposableSingletons$AboutKt$lambda_14$lambda_8lzn5t));
    var tmp_13 = this;
    tmp_13.lambda_15_7sywoa_1 = ComposableLambda$invoke$ref_19(composableLambdaInstance(672559373, false, ComposableSingletons$AboutKt$lambda_15$lambda_k7mtwe));
    var tmp_14 = this;
    tmp_14.lambda_16_7sywob_1 = ComposableLambda$invoke$ref_20(composableLambdaInstance(1697742766, false, ComposableSingletons$AboutKt$lambda_16$lambda_lzur0j));
    var tmp_15 = this;
    tmp_15.lambda_17_7sywoc_1 = ComposableLambda$invoke$ref_21(composableLambdaInstance(1820169028, false, ComposableSingletons$AboutKt$lambda_17$lambda_6trq1o));
    var tmp_16 = this;
    tmp_16.lambda_18_7sywod_1 = ComposableLambda$invoke$ref_22(composableLambdaInstance(-821068379, false, ComposableSingletons$AboutKt$lambda_18$lambda_zdpuv9));
    var tmp_17 = this;
    tmp_17.lambda_19_7sywoe_1 = ComposableLambda$invoke$ref_23(composableLambdaInstance(1116306053, false, ComposableSingletons$AboutKt$lambda_19$lambda_6k3dt2));
    var tmp_18 = this;
    tmp_18.lambda_20_7sywp0__1 = ComposableLambda$invoke$ref_24(composableLambdaInstance(-1524931354, false, ComposableSingletons$AboutKt$lambda_20$lambda_bqdg8s));
    var tmp_19 = this;
    tmp_19.lambda_21_7sywp1__1 = ComposableLambda$invoke$ref_25(composableLambdaInstance(245760669, false, ComposableSingletons$AboutKt$lambda_21$lambda_h390tf));
    var tmp_20 = this;
    tmp_20.lambda_22_7sywp2__1 = ComposableLambda$invoke$ref_26(composableLambdaInstance(-1149586354, false, ComposableSingletons$AboutKt$lambda_22$lambda_p48k3i));
    var tmp_21 = this;
    tmp_21.lambda_23_7sywp3__1 = ComposableLambda$invoke$ref_27(composableLambdaInstance(-445728595, false, ComposableSingletons$AboutKt$lambda_23$lambda_3pdwyp));
    var tmp_22 = this;
    tmp_22.lambda_24_7sywp4__1 = ComposableLambda$invoke$ref_28(composableLambdaInstance(1296049558, false, ComposableSingletons$AboutKt$lambda_24$lambda_wj0e0w));
    var tmp_23 = this;
    tmp_23.lambda_25_7sywp5__1 = ComposableLambda$invoke$ref_29(composableLambdaInstance(951133813, false, ComposableSingletons$AboutKt$lambda_25$lambda_9oh6w1));
    var tmp_24 = this;
    tmp_24.lambda_26_7sywp6__1 = ComposableLambda$invoke$ref_30(composableLambdaInstance(-1883771570, false, ComposableSingletons$AboutKt$lambda_26$lambda_j55a66));
    var tmp_25 = this;
    tmp_25.lambda_27_7sywp7__1 = ComposableLambda$invoke$ref_31(composableLambdaInstance(76659437, false, ComposableSingletons$AboutKt$lambda_27$lambda_n2caqr));
    var tmp_26 = this;
    tmp_26.lambda_28_7sywp8__1 = ComposableLambda$invoke$ref_32(composableLambdaInstance(2094112950, false, ComposableSingletons$AboutKt$lambda_28$lambda_5ra6bg));
    var tmp_27 = this;
    tmp_27.lambda_29_7sywp9__1 = ComposableLambda$invoke$ref_33(composableLambdaInstance(-547124457, false, ComposableSingletons$AboutKt$lambda_29$lambda_ykwndn));
    var tmp_28 = this;
    tmp_28.lambda_30_7sywpv_1 = ComposableLambda$invoke$ref_34(composableLambdaInstance(1140396333, false, ComposableSingletons$AboutKt$lambda_30$lambda_temkxx));
    var tmp_29 = this;
    tmp_29.lambda_31_7sywpw_1 = ComposableLambda$invoke$ref_35(composableLambdaInstance(1236920142, false, ComposableSingletons$AboutKt$lambda_31$lambda_csuzz0));
    var tmp_30 = this;
    tmp_30.lambda_32_7sywpx_1 = ComposableLambda$invoke$ref_36(composableLambdaInstance(-37548474, false, ComposableSingletons$AboutKt$lambda_32$lambda_g0rh37));
    var tmp_31 = this;
    tmp_31.lambda_33_7sywpy_1 = ComposableLambda$invoke$ref_37(composableLambdaInstance(-2134522478, false, ComposableSingletons$AboutKt$lambda_33$lambda_q6q3tq));
    var tmp_32 = this;
    tmp_32.lambda_34_7sywpz_1 = ComposableLambda$invoke$ref_38(composableLambdaInstance(-657525779, false, ComposableSingletons$AboutKt$lambda_34$lambda_2mwd8h));
    var tmp_33 = this;
    tmp_33.lambda_35_7sywq0__1 = ComposableLambda$invoke$ref_39(composableLambdaInstance(1302905228, false, ComposableSingletons$AboutKt$lambda_35$lambda_vgiuao));
    var tmp_34 = this;
    tmp_34.lambda_36_7sywq1__1 = ComposableLambda$invoke$ref_40(composableLambdaInstance(2006762987, false, ComposableSingletons$AboutKt$lambda_36$lambda_aqyqm9));
    var tmp_35 = this;
    tmp_35.lambda_37_7sywq2__1 = ComposableLambda$invoke$ref_41(composableLambdaInstance(568720012, false, ComposableSingletons$AboutKt$lambda_37$lambda_i2nqfy));
    var tmp_36 = this;
    tmp_36.lambda_38_7sywq3__1 = ComposableLambda$invoke$ref_42(composableLambdaInstance(-1765816277, false, ComposableSingletons$AboutKt$lambda_38$lambda_o4tugz));
    var tmp_37 = this;
    tmp_37.lambda_39_7sywq4__1 = ComposableLambda$invoke$ref_43(composableLambdaInstance(-1061958518, false, ComposableSingletons$AboutKt$lambda_39$lambda_4osml8));
    var tmp_38 = this;
    tmp_38.lambda_40_7sywqq_1 = ComposableLambda$invoke$ref_44(composableLambdaInstance(1794965803, false, ComposableSingletons$AboutKt$lambda_40$lambda_hhfui));
    var tmp_39 = this;
    tmp_39.lambda_41_7sywqr_1 = ComposableLambda$invoke$ref_45(composableLambdaInstance(-539570486, false, ComposableSingletons$AboutKt$lambda_41$lambda_sc517p));
    var tmp_40 = this;
    tmp_40.lambda_42_7sywqs_1 = ComposableLambda$invoke$ref_46(composableLambdaInstance(-1610511413, false, ComposableSingletons$AboutKt$lambda_42$lambda_dvcjp8));
    var tmp_41 = this;
    tmp_41.lambda_43_7sywqt_1 = ComposableLambda$invoke$ref_47(composableLambdaInstance(686675305, false, ComposableSingletons$AboutKt$lambda_43$lambda_ey9xcz));
    var tmp_42 = this;
    tmp_42.lambda_44_7sywqu_1 = ComposableLambda$invoke$ref_48(composableLambdaInstance(-384265622, false, ComposableSingletons$AboutKt$lambda_44$lambda_r97njy));
    var tmp_43 = this;
    tmp_43.lambda_45_7sywqv_1 = ComposableLambda$invoke$ref_49(composableLambdaInstance(559278771, false, ComposableSingletons$AboutKt$lambda_45$lambda_1keti9));
    var tmp_44 = this;
    tmp_44.lambda_46_7sywqw_1 = ComposableLambda$invoke$ref_50(composableLambdaInstance(1478401541, false, ComposableSingletons$AboutKt$lambda_46$lambda_ue1akg));
    var tmp_45 = this;
    tmp_45.lambda_47_7sywqx_1 = ComposableLambda$invoke$ref_51(composableLambdaInstance(841980169, false, ComposableSingletons$AboutKt$lambda_47$lambda_btgach));
    var tmp_46 = this;
    tmp_46.lambda_48_7sywqy_1 = ComposableLambda$invoke$ref_52(composableLambdaInstance(2068225960, false, ComposableSingletons$AboutKt$lambda_48$lambda_h066pq));
    var tmp_47 = this;
    tmp_47.lambda_49_7sywqz_1 = ComposableLambda$invoke$ref_53(composableLambdaInstance(-187836906, false, ComposableSingletons$AboutKt$lambda_49$lambda_p7be77));
    var tmp_48 = this;
    tmp_48.lambda_50_7sywrl_1 = ComposableLambda$invoke$ref_54(composableLambdaInstance(-1625879881, false, ComposableSingletons$AboutKt$lambda_50$lambda_udlgmx));
    var tmp_49 = this;
    tmp_49.lambda_51_7sywrm_1 = ComposableLambda$invoke$ref_55(composableLambdaInstance(-1000495545, false, ComposableSingletons$AboutKt$lambda_51$lambda_1jyzkq));
    var tmp_50 = this;
    tmp_50.lambda_52_7sywrn_1 = ComposableLambda$invoke$ref_56(composableLambdaInstance(1785524562, false, ComposableSingletons$AboutKt$lambda_52$lambda_r9nhhh));
    var tmp_51 = this;
    tmp_51.lambda_53_7sywro_1 = ComposableLambda$invoke$ref_57(composableLambdaInstance(225750246, false, ComposableSingletons$AboutKt$lambda_53$lambda_exu3fg));
    var tmp_52 = this;
    tmp_52.lambda_54_7sywrp_1 = ComposableLambda$invoke$ref_58(composableLambdaInstance(2088417409, false, ComposableSingletons$AboutKt$lambda_54$lambda_dvsdmr));
    var tmp_53 = this;
    tmp_53.lambda_55_7sywrq_1 = ComposableLambda$invoke$ref_59(composableLambdaInstance(223327736, false, ComposableSingletons$AboutKt$lambda_55$lambda_sbp7a6));
    var tmp_54 = this;
    tmp_54.lambda_56_7sywrr_1 = ComposableLambda$invoke$ref_60(composableLambdaInstance(940845651, false, ComposableSingletons$AboutKt$lambda_56$lambda_hx9s1));
    var tmp_55 = this;
    tmp_55.lambda_57_7sywrs_1 = ComposableLambda$invoke$ref_61(composableLambdaInstance(1451996037, false, ComposableSingletons$AboutKt$lambda_57$lambda_tbjqu8));
    var tmp_56 = this;
    tmp_56.lambda_58_7sywrt_1 = ComposableLambda$invoke$ref_62(composableLambdaInstance(-1616725468, false, ComposableSingletons$AboutKt$lambda_58$lambda_cvxu2p));
    var tmp_57 = this;
    tmp_57.lambda_59_7sywru_1 = ComposableLambda$invoke$ref_63(composableLambdaInstance(-112990337, false, ComposableSingletons$AboutKt$lambda_59$lambda_fxomzi));
    var tmp_58 = this;
    tmp_58.lambda_60_7sywsg_1 = ComposableLambda$invoke$ref_64(composableLambdaInstance(907180000, false, ComposableSingletons$AboutKt$lambda_60$lambda_arekjs));
    var tmp_59 = this;
    tmp_59.lambda_61_7sywsh_1 = ComposableLambda$invoke$ref_65(composableLambdaInstance(1239179588, false, ComposableSingletons$AboutKt$lambda_61$lambda_vg30d5));
    var tmp_60 = this;
    tmp_60.lambda_62_7sywsi_1 = ComposableLambda$invoke$ref_66(composableLambdaInstance(-390479677, false, ComposableSingletons$AboutKt$lambda_62$lambda_2mgjay));
    var tmp_61 = this;
    tmp_61.lambda_63_7sywsj_1 = ComposableLambda$invoke$ref_67(composableLambdaInstance(835766114, false, ComposableSingletons$AboutKt$lambda_63$lambda_q75xr9));
    var tmp_62 = this;
    tmp_62.lambda_64_7sywsk_1 = ComposableLambda$invoke$ref_68(composableLambdaInstance(1113255454, false, ComposableSingletons$AboutKt$lambda_64$lambda_g0bn5o));
    var tmp_63 = this;
    tmp_63.lambda_65_7sywsl_1 = ComposableLambda$invoke$ref_69(composableLambdaInstance(2133425791, false, ComposableSingletons$AboutKt$lambda_65$lambda_ctatwj));
    var tmp_64 = this;
    tmp_64.lambda_66_7sywsm_1 = ComposableLambda$invoke$ref_70(composableLambdaInstance(2043369740, false, ComposableSingletons$AboutKt$lambda_66$lambda_te6r0e));
    var tmp_65 = this;
    tmp_65.lambda_67_7sywsn_1 = ComposableLambda$invoke$ref_71(composableLambdaInstance(-1536502151, false, ComposableSingletons$AboutKt$lambda_67$lambda_kk9y7));
    var tmp_66 = this;
    tmp_66.lambda_68_7sywso_1 = ComposableLambda$invoke$ref_72(composableLambdaInstance(-1025351765, false, ComposableSingletons$AboutKt$lambda_68$lambda_s92740));
    var tmp_67 = this;
    tmp_67.lambda_69_7sywsp_1 = ComposableLambda$invoke$ref_73(composableLambdaInstance(1129324712, false, ComposableSingletons$AboutKt$lambda_69$lambda_dyfdsx));
  }
  protoOf(ComposableSingletons$AboutKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_2_bzdzzp_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_3_bzdzzq_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_4_bzdzzr_k$ = function () {
    return this.lambda_4_r8sbbm_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_5_bzdzzs_k$ = function () {
    return this.lambda_5_r8sbbl_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_6_bzdzzt_k$ = function () {
    return this.lambda_6_r8sbbk_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_7_bzdzzu_k$ = function () {
    return this.lambda_7_r8sbbj_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_8_bzdzzv_k$ = function () {
    return this.lambda_8_r8sbbi_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_9_bzdzzw_k$ = function () {
    return this.lambda_9_r8sbbh_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_10_gbhpvg_k$ = function () {
    return this.lambda_10_7sywo5__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_11_gbhpvh_k$ = function () {
    return this.lambda_11_7sywo6__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_12_gbhpvi_k$ = function () {
    return this.lambda_12_7sywo7__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_13_gbhpvj_k$ = function () {
    return this.lambda_13_7sywo8__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_14_gbhpvk_k$ = function () {
    return this.lambda_14_7sywo9__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_15_gbhpvl_k$ = function () {
    return this.lambda_15_7sywoa_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_16_gbhpvm_k$ = function () {
    return this.lambda_16_7sywob_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_17_gbhpvn_k$ = function () {
    return this.lambda_17_7sywoc_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_18_gbhpvo_k$ = function () {
    return this.lambda_18_7sywod_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_19_gbhpvp_k$ = function () {
    return this.lambda_19_7sywoe_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_20_gbhpwb_k$ = function () {
    return this.lambda_20_7sywp0__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_21_gbhpwc_k$ = function () {
    return this.lambda_21_7sywp1__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_22_gbhpwd_k$ = function () {
    return this.lambda_22_7sywp2__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_23_gbhpwe_k$ = function () {
    return this.lambda_23_7sywp3__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_24_gbhpwf_k$ = function () {
    return this.lambda_24_7sywp4__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_25_gbhpwg_k$ = function () {
    return this.lambda_25_7sywp5__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_26_gbhpwh_k$ = function () {
    return this.lambda_26_7sywp6__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_27_gbhpwi_k$ = function () {
    return this.lambda_27_7sywp7__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_28_gbhpwj_k$ = function () {
    return this.lambda_28_7sywp8__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_29_gbhpwk_k$ = function () {
    return this.lambda_29_7sywp9__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_30_gbhpx6_k$ = function () {
    return this.lambda_30_7sywpv_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_31_gbhpx7_k$ = function () {
    return this.lambda_31_7sywpw_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_32_gbhpx8_k$ = function () {
    return this.lambda_32_7sywpx_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_33_gbhpx9_k$ = function () {
    return this.lambda_33_7sywpy_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_34_gbhpxa_k$ = function () {
    return this.lambda_34_7sywpz_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_35_gbhpxb_k$ = function () {
    return this.lambda_35_7sywq0__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_36_gbhpxc_k$ = function () {
    return this.lambda_36_7sywq1__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_37_gbhpxd_k$ = function () {
    return this.lambda_37_7sywq2__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_38_gbhpxe_k$ = function () {
    return this.lambda_38_7sywq3__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_39_gbhpxf_k$ = function () {
    return this.lambda_39_7sywq4__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_40_gbhpy1_k$ = function () {
    return this.lambda_40_7sywqq_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_41_gbhpy2_k$ = function () {
    return this.lambda_41_7sywqr_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_42_gbhpy3_k$ = function () {
    return this.lambda_42_7sywqs_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_43_gbhpy4_k$ = function () {
    return this.lambda_43_7sywqt_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_44_gbhpy5_k$ = function () {
    return this.lambda_44_7sywqu_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_45_gbhpy6_k$ = function () {
    return this.lambda_45_7sywqv_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_46_gbhpy7_k$ = function () {
    return this.lambda_46_7sywqw_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_47_gbhpy8_k$ = function () {
    return this.lambda_47_7sywqx_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_48_gbhpy9_k$ = function () {
    return this.lambda_48_7sywqy_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_49_gbhpya_k$ = function () {
    return this.lambda_49_7sywqz_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_50_gbhpyw_k$ = function () {
    return this.lambda_50_7sywrl_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_51_gbhpyx_k$ = function () {
    return this.lambda_51_7sywrm_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_52_gbhpyy_k$ = function () {
    return this.lambda_52_7sywrn_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_53_gbhpyz_k$ = function () {
    return this.lambda_53_7sywro_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_54_gbhpz0_k$ = function () {
    return this.lambda_54_7sywrp_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_55_gbhpz1_k$ = function () {
    return this.lambda_55_7sywrq_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_56_gbhpz2_k$ = function () {
    return this.lambda_56_7sywrr_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_57_gbhpz3_k$ = function () {
    return this.lambda_57_7sywrs_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_58_gbhpz4_k$ = function () {
    return this.lambda_58_7sywrt_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_59_gbhpz5_k$ = function () {
    return this.lambda_59_7sywru_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_60_gbhpzr_k$ = function () {
    return this.lambda_60_7sywsg_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_61_gbhpzs_k$ = function () {
    return this.lambda_61_7sywsh_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_62_gbhpzt_k$ = function () {
    return this.lambda_62_7sywsi_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_63_gbhpzu_k$ = function () {
    return this.lambda_63_7sywsj_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_64_gbhpzv_k$ = function () {
    return this.lambda_64_7sywsk_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_65_gbhpzw_k$ = function () {
    return this.lambda_65_7sywsl_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_66_gbhpzx_k$ = function () {
    return this.lambda_66_7sywsm_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_67_gbhpzy_k$ = function () {
    return this.lambda_67_7sywsn_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_68_gbhpzz_k$ = function () {
    return this.lambda_68_7sywso_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_69_gbhq00_k$ = function () {
    return this.lambda_69_7sywsp_1;
  };
  var ComposableSingletons$AboutKt_instance;
  function ComposableSingletons$AboutKt_getInstance() {
    if (ComposableSingletons$AboutKt_instance == null)
      new ComposableSingletons$AboutKt();
    return ComposableSingletons$AboutKt_instance;
  }
  function AboutPage$lambda($$changed) {
    return function ($composer, $force) {
      AboutPage($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function get_COLOR_MODE_KEY() {
    return COLOR_MODE_KEY;
  }
  var COLOR_MODE_KEY;
  function initColorMode(ctx) {
    var tmp = ctx.get_config_c0698r_k$();
    var tmp0_safe_receiver = localStorage.getItem('androidhub:colorMode');
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.canerture.androidhub.initColorMode.<anonymous>' call
      tmp_0 = valueOf(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    tmp.set_initialColorMode_lmyh2d_k$(tmp1_elvis_lhs == null ? ColorMode_DARK_getInstance() : tmp1_elvis_lhs);
  }
  function AppEntry(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-230830174);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-230830174, $dirty, -1, 'com.canerture.androidhub.AppEntry (AppEntry.kt:27)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.canerture.androidhub.AppEntry.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, -871536957, true, AppEntry$lambda(content));
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
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.AppEntry.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_75(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      SilkApp(tmp0, $composer_0, 6);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(AppEntry$lambda_0(content, $changed));
    }
  }
  function AppEntry$lambda$slambda($colorMode, resultContinuation) {
    this.$colorMode_1 = $colorMode;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AppEntry$lambda$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AppEntry$lambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AppEntry$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          localStorage.setItem('androidhub:colorMode', this.$colorMode_1.get_name_woqyms_k$());
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(AppEntry$lambda$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new AppEntry$lambda$slambda(this.$colorMode_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(AppEntry$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function AppEntry$lambda$slambda_0($colorMode, resultContinuation) {
    var i = new AppEntry$lambda$slambda($colorMode, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AppEntry$lambda$lambda($content) {
    return function ($this$Surface, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1381754019, $changed, -1, 'com.canerture.androidhub.AppEntry.<anonymous>.<anonymous> (AppEntry.kt:39)');
      }
      $content($composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_74($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function AppEntry$lambda($content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-871536957, $changed, -1, 'com.canerture.androidhub.AppEntry.<anonymous> (AppEntry.kt:29)');
        }
        var colorMode = Companion_getInstance_1().get_current_2iudd5_k$($composer_0, 8);
        $composer_0.startReplaceableGroup_ip860b_k$(-226072044);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.changed_ga7h3f_k$(colorMode);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.canerture.androidhub.AppEntry.<anonymous>.<anonymous>.<anonymous>' call
          var value = AppEntry$lambda$slambda_0(colorMode, null);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        LaunchedEffect(colorMode, tmp0_group, $composer_0, 64);
        var tmp_2 = scrollBehavior(minHeight(toModifier(get_SmoothColorStyle(), [], $composer_0, 64), get_vh(100)), Companion_getInstance_2().get_Smooth_4edjo7_k$());
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.canerture.androidhub.AppEntry.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_3 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_3, -1381754019, true, AppEntry$lambda$lambda($content));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_4;
        if (invalid_0 ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.canerture.androidhub.AppEntry.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_74(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_4 = value_0;
        } else {
          tmp_4 = it_0;
        }
        var tmp_5 = tmp_4;
        var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Surface(tmp_2, null, null, null, null, tmp0, $composer_0, 196616, 30);
        var tmp_6;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_6 = Unit_getInstance();
        }
        tmp = tmp_6;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_75($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function AppEntry$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      AppEntry($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function get_HeadlineTextStyle() {
    _init_properties_AppStyles_kt__9fg0zz();
    return HeadlineTextStyle$delegate.getValue_fbnwi2_k$(null, HeadlineTextStyle$factory());
  }
  var HeadlineTextStyle$delegate;
  function get_SubheadlineTextStyle() {
    _init_properties_AppStyles_kt__9fg0zz();
    return SubheadlineTextStyle$delegate.getValue_fbnwi2_k$(null, SubheadlineTextStyle$factory());
  }
  var SubheadlineTextStyle$delegate;
  function get_CircleButtonVariant() {
    _init_properties_AppStyles_kt__9fg0zz();
    return CircleButtonVariant$delegate.getValue_fbnwi2_k$(null, CircleButtonVariant$factory());
  }
  var CircleButtonVariant$delegate;
  function get_UncoloredButtonVariant() {
    _init_properties_AppStyles_kt__9fg0zz();
    return UncoloredButtonVariant$delegate.getValue_fbnwi2_k$(null, UncoloredButtonVariant$factory());
  }
  var UncoloredButtonVariant$delegate;
  function initSiteStyles(ctx) {
    _init_properties_AppStyles_kt__9fg0zz();
    var tmp = ctx.get_stylesheet_hk204p_k$();
    registerStyleBase(tmp, 'body', VOID, initSiteStyles$lambda);
    var tmp_0 = ctx.get_theme_iz24rk_k$();
    var tmp_1 = get_HorizontalDividerStyle();
    modifyComponentStyleBase(tmp_0, tmp_1, VOID, initSiteStyles$lambda_0);
  }
  function HeadlineTextStyle$delegate$lambda($this$base) {
    _init_properties_AppStyles_kt__9fg0zz();
    return lineHeight(textAlign(fontSize(Companion_getInstance_3(), get_cssRem(3)), Companion_getInstance_4().get_Start_ih4i6x_k$()), 1.2);
  }
  function SubheadlineTextStyle$delegate$lambda($this$base) {
    _init_properties_AppStyles_kt__9fg0zz();
    return color(textAlign(fontSize(Companion_getInstance_3(), get_cssRem(1)), Companion_getInstance_4().get_Start_ih4i6x_k$()), get_color(toPalette($this$base.get_colorMode_trbg8z_k$())).toRgb_1tsrpu_k$().copyf$default_6pu18v_k$(VOID, VOID, VOID, 0.8));
  }
  function CircleButtonVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_AppStyles_kt__9fg0zz();
    return borderRadius(padding(Companion_getInstance_3(), get_px(0)), get_percent(50));
  }
  function UncoloredButtonVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_AppStyles_kt__9fg0zz();
    return setVariable(Companion_getInstance_3(), ButtonVars_getInstance().get_BackgroundDefaultColor_so3bvr_k$(), Colors_getInstance().get_Transparent_cxh4g9_k$());
  }
  function initSiteStyles$lambda() {
    _init_properties_AppStyles_kt__9fg0zz();
    return lineHeight(fontSize(fontFamily(Companion_getInstance_3(), ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif']), get_px(18)), 1.5);
  }
  function initSiteStyles$lambda_0($this$modifyComponentStyleBase) {
    _init_properties_AppStyles_kt__9fg0zz();
    return fillMaxWidth(Companion_getInstance_3());
  }
  function HeadlineTextStyle$factory() {
    return getPropertyCallableRef('HeadlineTextStyle', 0, KProperty0, function () {
      return get_HeadlineTextStyle();
    }, null);
  }
  function SubheadlineTextStyle$factory() {
    return getPropertyCallableRef('SubheadlineTextStyle', 0, KProperty0, function () {
      return get_SubheadlineTextStyle();
    }, null);
  }
  function CircleButtonVariant$factory() {
    return getPropertyCallableRef('CircleButtonVariant', 0, KProperty0, function () {
      return get_CircleButtonVariant();
    }, null);
  }
  function UncoloredButtonVariant$factory() {
    return getPropertyCallableRef('UncoloredButtonVariant', 0, KProperty0, function () {
      return get_UncoloredButtonVariant();
    }, null);
  }
  var properties_initialized_AppStyles_kt_kq2bkd;
  function _init_properties_AppStyles_kt__9fg0zz() {
    if (!properties_initialized_AppStyles_kt_kq2bkd) {
      properties_initialized_AppStyles_kt_kq2bkd = true;
      var tmp = Companion_getInstance_5();
      HeadlineTextStyle$delegate = base(tmp, VOID, VOID, HeadlineTextStyle$delegate$lambda);
      var tmp_0 = Companion_getInstance_5();
      SubheadlineTextStyle$delegate = base(tmp_0, VOID, VOID, SubheadlineTextStyle$delegate$lambda);
      var tmp_1 = get_ButtonStyle();
      CircleButtonVariant$delegate = addVariantBase(tmp_1, VOID, CircleButtonVariant$delegate$lambda);
      var tmp_2 = get_ButtonStyle();
      UncoloredButtonVariant$delegate = addVariantBase(tmp_2, VOID, UncoloredButtonVariant$delegate$lambda);
    }
  }
  function Brand(primary, accent) {
    primary = primary === VOID ? Companion_getInstance_6().rgb_6orfmz_k$(3965935) : primary;
    accent = accent === VOID ? Companion_getInstance_6().rgb_6orfmz_k$(15981403) : accent;
    this.primary_1 = primary;
    this.accent_1 = accent;
  }
  protoOf(Brand).get_primary_3xuktj_k$ = function () {
    return this.primary_1;
  };
  protoOf(Brand).get_accent_avafv7_k$ = function () {
    return this.accent_1;
  };
  function SitePalette(nearBackground, cobweb, brand) {
    this.nearBackground_1 = nearBackground;
    this.cobweb_1 = cobweb;
    this.brand_1 = brand;
  }
  protoOf(SitePalette).get_nearBackground_c1s3l_k$ = function () {
    return this.nearBackground_1;
  };
  protoOf(SitePalette).get_cobweb_bzyxwn_k$ = function () {
    return this.cobweb_1;
  };
  protoOf(SitePalette).get_brand_ipc50e_k$ = function () {
    return this.brand_1;
  };
  function SitePalettes() {
    SitePalettes_instance = this;
    this.light_1 = new SitePalette(Companion_getInstance_6().rgb_6orfmz_k$(16054010), Colors_getInstance().get_LightGray_i1h2r4_k$(), new Brand(Companion_getInstance_6().rgb_6orfmz_k$(3965935), Companion_getInstance_6().rgb_6orfmz_k$(16562691)));
    this.dark_1 = new SitePalette(Companion_getInstance_6().rgb_6orfmz_k$(1251103), Colors_getInstance().get_LightGray_i1h2r4_k$().inverted_adp911_k$(), new Brand(Companion_getInstance_6().rgb_6orfmz_k$(3965935), Companion_getInstance_6().rgb_6orfmz_k$(15981403)));
  }
  protoOf(SitePalettes).get_light_iuogdp_k$ = function () {
    return this.light_1;
  };
  protoOf(SitePalettes).get_dark_wokkvz_k$ = function () {
    return this.dark_1;
  };
  var SitePalettes_instance;
  function SitePalettes_getInstance() {
    if (SitePalettes_instance == null)
      new SitePalettes();
    return SitePalettes_instance;
  }
  function toSitePalette(_this__u8e3s4) {
    var tmp;
    switch (_this__u8e3s4.get_ordinal_ip24qg_k$()) {
      case 0:
        tmp = SitePalettes_getInstance().light_1;
        break;
      case 1:
        tmp = SitePalettes_getInstance().dark_1;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function initTheme(ctx) {
    set_background(ctx.get_theme_iz24rk_k$().get_palettes_f7ft27_k$().get_light_iuogdp_k$(), Companion_getInstance_6().rgb_6orfmz_k$(16448250));
    set_color(ctx.get_theme_iz24rk_k$().get_palettes_f7ft27_k$().get_light_iuogdp_k$(), Colors_getInstance().get_Black_i7mvue_k$());
    set_background(ctx.get_theme_iz24rk_k$().get_palettes_f7ft27_k$().get_dark_wokkvz_k$(), Companion_getInstance_6().rgb_6orfmz_k$(395275));
    set_color(ctx.get_theme_iz24rk_k$().get_palettes_f7ft27_k$().get_dark_wokkvz_k$(), Colors_getInstance().get_White_ij46ow_k$());
  }
  var com_canerture_androidhub_SitePalette_Brand$stable;
  var com_canerture_androidhub_SitePalette$stable;
  var com_canerture_androidhub_SitePalettes$stable;
  function get_MarkdownStyle() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return MarkdownStyle$delegate.getValue_fbnwi2_k$(null, MarkdownStyle$factory());
  }
  var MarkdownStyle$delegate;
  function MarkdownLayout(title, content, $composer, $changed) {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1489817358);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(title) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1489817358, $dirty, -1, 'com.canerture.androidhub.components.layouts.MarkdownLayout (MarkdownLayout.kt:91)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.canerture.androidhub.components.layouts.MarkdownLayout.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, -1316703803, true, MarkdownLayout$lambda(content));
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
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.components.layouts.MarkdownLayout.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_77(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      PageLayout(title, tmp0, $composer_0, 48 | 14 & $dirty);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(MarkdownLayout$lambda_0(title, content, $changed));
    }
  }
  function MarkdownStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    $this$ComponentStyle.cssRule_fe6cwq_k$('h1', MarkdownStyle$delegate$lambda$lambda);
    $this$ComponentStyle.cssRule_fe6cwq_k$('h2', MarkdownStyle$delegate$lambda$lambda_0);
    $this$ComponentStyle.cssRule_fe6cwq_k$('h3', MarkdownStyle$delegate$lambda$lambda_1);
    $this$ComponentStyle.cssRule_fe6cwq_k$('h4', MarkdownStyle$delegate$lambda$lambda_2);
    $this$ComponentStyle.cssRule_fe6cwq_k$('p', MarkdownStyle$delegate$lambda$lambda_3);
    $this$ComponentStyle.cssRule_fe6cwq_k$('ul', MarkdownStyle$delegate$lambda$lambda_4);
    $this$ComponentStyle.cssRule_fe6cwq_k$('li,ol,ul', MarkdownStyle$delegate$lambda$lambda_5);
    $this$ComponentStyle.cssRule_fe6cwq_k$('code', MarkdownStyle$delegate$lambda$lambda_6($this$ComponentStyle));
    $this$ComponentStyle.cssRule_fe6cwq_k$('pre', MarkdownStyle$delegate$lambda$lambda_7);
    $this$ComponentStyle.cssRule_fe6cwq_k$('pre > code', MarkdownStyle$delegate$lambda$lambda_8($this$ComponentStyle));
    return Unit_getInstance();
  }
  function MarkdownStyle$delegate$lambda$lambda() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return lineHeight(margin(fontWeight(fontSize(Companion_getInstance_3(), get_cssRem(3)), 400), VOID, VOID, get_cssRem(2.5)), 1.2);
  }
  function MarkdownStyle$delegate$lambda$lambda_0() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return margin_0(fontWeight(fontSize(Companion_getInstance_3(), get_cssRem(3)), 300), get_cssRem(2));
  }
  function MarkdownStyle$delegate$lambda$lambda_1() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return margin_0(fontWeight(fontSize(Companion_getInstance_3(), get_cssRem(2.4)), 300), get_cssRem(1.5));
  }
  function MarkdownStyle$delegate$lambda$lambda_2() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return margin(fontWeight_0(fontSize(Companion_getInstance_3(), get_cssRem(1.2)), Companion_getInstance_7().get_Bolder_3mclb9_k$()), get_cssRem(1), VOID, get_cssRem(0.5));
  }
  function MarkdownStyle$delegate$lambda$lambda_3() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return margin(Companion_getInstance_3(), VOID, VOID, get_cssRem(0.8));
  }
  function MarkdownStyle$delegate$lambda$lambda_4() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return overflowWrap(fillMaxWidth(Companion_getInstance_3()), Companion_getInstance_8().get_BreakWord_a9p49s_k$());
  }
  function MarkdownStyle$delegate$lambda$lambda_5() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return margin(Companion_getInstance_3(), VOID, VOID, get_cssRem(0.25));
  }
  function MarkdownStyle$delegate$lambda$lambda_6($this_ComponentStyle) {
    return function () {
      return fontWeight_0(color(Companion_getInstance_3(), get_color(toPalette($this_ComponentStyle.get_colorMode_trbg8z_k$())).toRgb_1tsrpu_k$().copyf$default_6pu18v_k$(VOID, VOID, VOID, 0.8)), Companion_getInstance_7().get_Bolder_3mclb9_k$());
    };
  }
  function MarkdownStyle$delegate$lambda$lambda_7() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return fillMaxWidth(margin(Companion_getInstance_3(), get_cssRem(0.5), VOID, get_cssRem(2)));
  }
  function MarkdownStyle$delegate$lambda$lambda$lambda($this$overflow) {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    $this$overflow.x_7tere2_k$(Companion_getInstance_9().get_Auto_wnyn88_k$());
    return Unit_getInstance();
  }
  function MarkdownStyle$delegate$lambda$lambda_8($this_ComponentStyle) {
    return function () {
      var tmp = Companion_getInstance_3();
      // Inline function 'org.jetbrains.compose.web.css.Companion.Block' call
      Companion_getInstance_10();
      // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = backgroundColor(fillMaxWidth(display(tmp, 'block')), toSitePalette($this_ComponentStyle.get_colorMode_trbg8z_k$()).get_nearBackground_c1s3l_k$());
      var tmp_1 = get_px(1);
      // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
      Companion_getInstance_11();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_2 = fontSize(padding(borderRadius(border(tmp_0, tmp_1, 'solid', get_color(toPalette($this_ComponentStyle.get_colorMode_trbg8z_k$()))), get_cssRem(0.25)), get_cssRem(0.5)), get_cssRem(1));
      return overflow(tmp_2, MarkdownStyle$delegate$lambda$lambda$lambda);
    };
  }
  function MarkdownLayout$lambda$lambda($content) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-805280196, $changed, -1, 'com.canerture.androidhub.components.layouts.MarkdownLayout.<anonymous>.<anonymous> (MarkdownLayout.kt:94)');
      }
      $content($composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_76($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function MarkdownLayout$lambda($content) {
    return function ($this$PageLayout, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1316703803, $changed, -1, 'com.canerture.androidhub.components.layouts.MarkdownLayout.<anonymous> (MarkdownLayout.kt:93)');
      }
      var tmp = fillMaxSize(toModifier(get_MarkdownStyle(), [], $composer_0, 64));
      var tmp_0 = Start_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.canerture.androidhub.components.layouts.MarkdownLayout.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -805280196, true, MarkdownLayout$lambda$lambda($content));
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
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.components.layouts.MarkdownLayout.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_76(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Column(tmp, null, tmp_0, null, tmp0, $composer_0, 24584, 10);
      var tmp_4;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_4 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_77($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function MarkdownLayout$lambda_0($title, $content, $$changed) {
    return function ($composer, $force) {
      MarkdownLayout($title, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function MarkdownStyle$factory() {
    return getPropertyCallableRef('MarkdownStyle', 0, KProperty0, function () {
      return get_MarkdownStyle();
    }, null);
  }
  var properties_initialized_MarkdownLayout_kt_c0ljiz;
  function _init_properties_MarkdownLayout_kt__1k3pk7() {
    if (!properties_initialized_MarkdownLayout_kt_c0ljiz) {
      properties_initialized_MarkdownLayout_kt_c0ljiz = true;
      MarkdownStyle$delegate = ComponentStyle(VOID, VOID, MarkdownStyle$delegate$lambda);
    }
  }
  function get_PageContentStyle() {
    _init_properties_PageLayout_kt__pf69s7();
    return PageContentStyle$delegate.getValue_fbnwi2_k$(null, PageContentStyle$factory());
  }
  var PageContentStyle$delegate;
  function SvgCobweb(modifier, $composer, $changed) {
    _init_properties_PageLayout_kt__pf69s7();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1264755707);
    if (isTraceInProgress()) {
      traceEventStart(1264755707, $changed, -1, 'com.canerture.androidhub.components.layouts.SvgCobweb (PageLayout.kt:32)');
    }
    var color = toSitePalette(Companion_getInstance_1().get_current_2iudd5_k$($composer_0, 8)).get_cobweb_bzyxwn_k$();
    var tmp = maxWidth(modifier, get_percent(100));
    $composer_0.startReplaceableGroup_ip860b_k$(433768573);
    // Inline function 'androidx.compose.runtime.cache' call
    var this_0 = $composer_0;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = this_0.rememberedValue_4dg93v_k$();
    var tmp_0;
    if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'com.canerture.androidhub.components.layouts.SvgCobweb.<anonymous>' call
      var value = SvgCobweb$lambda;
      this_0.updateRememberedValue_l1wh71_k$(value);
      tmp_0 = value;
    } else {
      tmp_0 = it;
    }
    var tmp_1 = tmp_0;
    var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    var tmp_2 = toAttrs(tmp, tmp0_group);
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.canerture.androidhub.components.layouts.SvgCobweb.<anonymous>' call
    var tmp_3 = $composer_0;
    var dispatchReceiver = composableLambda(tmp_3, 596297577, true, SvgCobweb$lambda_0(color));
    // Inline function 'androidx.compose.runtime.remember' call
    var $composer_1 = $composer_0;
    $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
    sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_1.rememberedValue_4dg93v_k$();
    var tmp_4;
    if (invalid ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'com.canerture.androidhub.components.layouts.SvgCobweb.<anonymous>.<anonymous>' call
      var value_0 = ComposableLambda$invoke$ref_80(dispatchReceiver);
      $composer_1.updateRememberedValue_l1wh71_k$(value_0);
      tmp_4 = value_0;
    } else {
      tmp_4 = it_0;
    }
    var tmp_5 = tmp_4;
    var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
    $composer_1.endReplaceableGroup_ern0ak_k$();
    Svg(tmp_2, tmp0, $composer_0, 48, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(SvgCobweb$lambda_1(modifier, $changed));
    }
  }
  function PageLayout(title, content, $composer, $changed) {
    _init_properties_PageLayout_kt__pf69s7();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(928443343);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(title) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(928443343, $dirty, -1, 'com.canerture.androidhub.components.layouts.PageLayout (PageLayout.kt:64)');
      }
      $composer_0.startReplaceableGroup_ip860b_k$(-408729338);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.components.layouts.PageLayout.<anonymous>' call
        var value = PageLayout$slambda_0(title, null);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      LaunchedEffect(title, tmp0_group, $composer_0, 64 | 14 & $dirty);
      var tmp_1 = minHeight(fillMaxWidth(Companion_getInstance_3()), get_percent(100));
      $composer_0.startReplaceableGroup_ip860b_k$(-408728568);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (false ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.components.layouts.PageLayout.<anonymous>' call
        var value_0 = PageLayout$lambda;
        this_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var tmp_4 = gridTemplateRows(tmp_1, tmp1_group);
      var tmp_5 = Center_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.canerture.androidhub.components.layouts.PageLayout.<anonymous>' call
      var tmp_6 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_6, -885316011, true, PageLayout$lambda_0(content));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_7;
      if (invalid_0 ? true : it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.components.layouts.PageLayout.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_83(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_1);
        tmp_7 = value_1;
      } else {
        tmp_7 = it_1;
      }
      var tmp_8 = tmp_7;
      var tmp0 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Box(tmp_4, tmp_5, null, tmp0, $composer_0, 3080, 4);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp2_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.updateScope_t8jcf_k$(PageLayout$lambda_1(title, content, $changed));
    }
  }
  function PageContentStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_PageLayout_kt__pf69s7();
    $this$ComponentStyle.base_y8uu8g_k$(PageContentStyle$delegate$lambda$lambda);
    var tmp = Breakpoint_MD_getInstance();
    $this$ComponentStyle.invoke_hmyoxj_k$(tmp, PageContentStyle$delegate$lambda$lambda_0);
    return Unit_getInstance();
  }
  function PageContentStyle$delegate$lambda$lambda() {
    _init_properties_PageLayout_kt__pf69s7();
    var tmp0_$receiver = fillMaxSize(Companion_getInstance_3());
    var tmp1_leftRight = get_cssRem(2);
    var tmp2_top = get_cssRem(4);
    return padding_0(tmp0_$receiver, tmp2_top, tmp1_leftRight);
  }
  function PageContentStyle$delegate$lambda$lambda_0() {
    _init_properties_PageLayout_kt__pf69s7();
    return maxWidth(Companion_getInstance_3(), get_cssRem(60));
  }
  function SvgCobweb$lambda($this$toAttrs) {
    _init_properties_PageLayout_kt__pf69s7();
    $this$toAttrs.width_3dri8b_k$(get_cssRem(25));
    $this$toAttrs.height_vnwjw4_k$(get_cssRem(20));
    return Unit_getInstance();
  }
  function SvgCobweb$lambda$lambda$lambda($this$RadialGradient) {
    _init_properties_PageLayout_kt__pf69s7();
    $this$RadialGradient.cx_7c4b4q_k$(0);
    $this$RadialGradient.cy_5a8zln_k$(0);
    $this$RadialGradient.r_uxqzt5_k$(get_percent(120));
    return Unit_getInstance();
  }
  function SvgCobweb$lambda$lambda$lambda_0($color) {
    return function ($this$RadialGradient, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(19619019, $changed, -1, 'com.canerture.androidhub.components.layouts.SvgCobweb.<anonymous>.<anonymous>.<anonymous> (PageLayout.kt:48)');
      }
      var tmp = get_percent(50);
      Stop($this$RadialGradient, tmp, $color, null, $composer_0, 584, 4);
      Stop($this$RadialGradient, get_percent(100), $color, 0.0, $composer_0, 3656, 0);
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_78($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function SvgCobweb$lambda$lambda($cobwebFadeOutId, $color) {
    return function ($this$Defs, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1110911751, $changed, -1, 'com.canerture.androidhub.components.layouts.SvgCobweb.<anonymous>.<anonymous> (PageLayout.kt:43)');
      }
      $composer_0.startReplaceableGroup_ip860b_k$(703561028);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.components.layouts.SvgCobweb.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = SvgCobweb$lambda$lambda$lambda;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.canerture.androidhub.components.layouts.SvgCobweb.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 19619019, true, SvgCobweb$lambda$lambda$lambda_0($color));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.components.layouts.SvgCobweb.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_78(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      RadialGradient($this$Defs, $cobwebFadeOutId, tmp0_group, tmp0, $composer_0, 3512, 0);
      var tmp_4;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_4 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_79($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function SvgCobweb$lambda$lambda$lambda_1($this$transform) {
    _init_properties_PageLayout_kt__pf69s7();
    $this$transform.scale$default_les05r_k$(0.6);
    return Unit_getInstance();
  }
  function SvgCobweb$lambda$lambda_0($cobwebFadeOutId) {
    return function ($this$Path) {
      $this$Path.d_e5qqiu_k$('M-19.5501 -131.516L37.5899-59.412C34.8649 -10.82 13.8419 26.38 -14.8001 60.62L-21.5161 58.86V78.18L-18.9591 78.852C-3.60911 123.917 -9.87111 169.679 -17.1391 217.146L-21.5151 219.193V239.823L-12.3351 235.529C-5.81911 246.236 1.32289 262.576 6.72489 276.859C10.0329 285.624 13.1183 294.472 15.9779 303.394L-21.5151 341.084V343.514H2.42689L30.9769 314.814C40.2469 314.451 72.7469 313.341 113.677 314.064C160.421 314.889 216.289 318.364 252.727 327.731L257.807 343.515H277.439L270.009 320.427C305.949 278.917 341.921 239.902 401.743 218.087L453.517 238.573V218.476L410.534 201.468C404.16 162.258 423.289 124.803 441.154 84.788L453.517 82.203V63.111L447.194 64.434L441.744 61.631C385.656 32.8 365.41 -16.36 348.444 -71.07L392.628 -131.516H369.478L330.878 -78.706C272.605 -77.452 218.403 -81.169 176.432 -116.496L174.158 -131.516H155.258L158.096 -112.766C130.96 -83.776 100.532 -64.812 53.5119 -69.41L4.29189 -131.516H-19.5521H-19.5501ZM180.367 -90.512C220.975 -64.208 268.865 -59.618 317.121 -59.882L283.981 -14.542C247.393 -14.146 214.125 -17.576 188.136 -39.18L180.367 -90.512ZM161.533 -90.072L169.823 -35.297C152.008 -16.681 132.529 -5.117 101.828 -8.443L68.7519 -50.18C107.345 -50.92 137.11 -67.324 161.532 -90.072H161.533ZM334.857 -52.48C350.393 -5.51302 371.907 40.21 419.407 70.242L367.639 81.062L366.823 80.645C329.553 61.5 316.378 29.005 304.888 -8.18501L304.172 -10.5L334.855 -52.48H334.857ZM54.1169 -38.562L88.5099 4.836C85.9869 34.419 73.1059 57.496 55.3699 79.043L4.96589 65.81C28.6799 36.036 47.6059 2.41699 54.1179 -38.563L54.1169 -38.562ZM191.965 -13.872C215.901 -0.177994 243.015 3.528 270.369 4.076L237.459 49.104C222.401 42.74 211.322 31.351 198.889 18.779L196.546 16.409L191.964 -13.871L191.965 -13.872ZM173.187 -13.062L178.779 23.893C167.603 31.393 154.343 36.043 139.733 39.385L116.831 10.488C139.541 9.093 157.926 -0.192001 173.187 -13.062ZM290.567 8.11099C300.313 37.266 313.713 66.128 341.147 86.601L285.219 98.291C272.222 87.109 265.242 73.557 258.063 58.401L256.393 54.871L290.567 8.11099ZM104.135 24.554L123.277 48.708L123.199 49.418C121.269 66.783 114.322 79.048 106.549 92.481L75.0129 84.201C88.2249 66.845 98.9529 47.373 104.133 24.554H104.135ZM181.809 43.907L187.821 83.649C184.26 84.3288 180.81 85.5 177.571 87.129L152.394 55.362C162.584 52.612 172.524 49.017 181.808 43.908L181.809 43.907ZM201.169 46.95C208.524 53.528 216.689 59.672 226.321 64.34L210.487 86.002C209.307 85.5035 208.103 85.0636 206.88 84.684L201.17 46.949L201.169 46.95ZM138.419 67.814L163.329 99.244C161.729 101.454 160.361 103.823 159.249 106.314L125.335 97.412C130.29 88.655 135.165 79.159 138.419 67.814ZM243.944 71.896C249.064 82.311 255.048 92.991 263.597 102.809L232.454 109.317C230.89 104.865 228.541 100.73 225.517 97.107L243.944 71.896ZM2.17189 84.4L51.0449 97.23C60.2719 125.445 56.8399 154.31 52.2449 184.678L3.17289 207.64C9.12289 167.493 13.4619 126.226 2.17189 84.4ZM418.314 89.562C403.381 122.197 388.2 156.295 390.881 193.692L347.141 176.385C343.541 151.369 355.917 126.94 367.866 100.107L418.316 89.563L418.314 89.562ZM71.7379 102.662L99.3519 109.91L99.9139 111.31C106.014 126.443 105.297 143.082 102.814 161.018L72.4959 175.203C75.7099 151.691 77.4719 127.39 71.7379 102.662ZM345.033 104.879C335.99 124.696 327.236 145.682 327.781 168.726L291.194 154.249C291.19 141.101 292.589 131.409 300.314 120.329L305.294 113.185L345.034 104.878L345.033 104.879ZM120.673 115.507L155.91 124.759C156.126 128.317 156.825 131.829 157.988 135.199L122.718 151.702C123.768 139.802 123.644 127.654 120.673 115.507ZM279.833 118.507C275.208 127.94 273.453 137.397 272.885 147.005L233.607 131.465C233.873 130.34 234.077 129.192 234.247 128.035L279.832 118.507H279.833ZM225.037 148.169L261.541 162.612C252.631 167.192 244.225 173.148 236.864 178.772C233.505 181.339 230.209 183.988 226.978 186.714L216.876 155.317C219.916 153.317 222.662 150.909 225.038 148.169H225.037ZM166.917 151.653L129.26 189.51C126.702 183.31 123.242 178.363 119.672 174.275L119.76 173.719L166.914 151.653H166.917ZM184.647 160.325C189.395 161.652 194.351 162.077 199.256 161.58L209.729 194.12C196.415 193.96 172.116 194.196 148.036 197.13L184.646 160.326L184.647 160.325ZM288.133 173.135L313.496 183.169C284.096 198.089 263.12 219.065 244.244 240.369L233.2 206.05C236.754 202.876 241.93 198.42 248.21 193.623C259.63 184.896 274.418 175.923 283.895 173.996L288.133 173.135ZM101.635 182.2L103.152 183.725C109 189.6 113.125 194.028 114.375 204.475L83.2319 235.783C82.8819 233.513 82.4939 231.153 82.0319 228.641C80.0219 217.691 77.5839 205.699 72.7069 195.737L101.635 182.202V182.2ZM337.563 192.693L376.781 208.211C327.358 230.711 293.866 264.895 263.331 299.681L250.896 261.034C274.999 233.196 298.569 207.418 337.564 192.694L337.563 192.693ZM55.5769 203.75C58.5789 210.587 61.7989 221.92 63.6529 232.016C65.2349 240.626 66.1529 248.096 66.6329 252.466L30.7509 288.541C28.6803 282.405 26.4966 276.307 24.2009 270.251C18.8269 256.035 12.2079 240.239 4.59089 227.611L55.5769 203.751V203.75ZM206.44 212.898C210.408 212.892 213.254 212.928 215.79 212.963L226.186 245.263C199.929 241.113 167.553 241.073 139.129 242.078C123.554 242.628 111.125 243.405 101.272 244.143L125.38 219.906L126.33 219.676C150.076 213.886 186.19 212.93 206.44 212.898ZM164.248 260.288C189.172 260.235 214.614 261.554 232.664 265.391L246.092 307.118C207.384 298.888 157.108 296.141 114.006 295.38C86.7839 294.898 64.7689 295.192 50.1359 295.553L80.9359 264.59C88.7009 263.833 111.646 261.748 139.789 260.754C147.689 260.474 155.939 260.304 164.247 260.287L164.248 260.288Z');
      $this$Path.transform_smv5a6_k$(SvgCobweb$lambda$lambda$lambda_1);
      $this$Path.fill_gyvskv_k$($cobwebFadeOutId);
      return Unit_getInstance();
    };
  }
  function SvgCobweb$lambda_0($color) {
    return function ($this$Svg, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(596297577, $changed, -1, 'com.canerture.androidhub.components.layouts.SvgCobweb.<anonymous> (PageLayout.kt:40)');
      }
      var cobwebFadeOutId = _SvgId___init__impl__pmt7ru('cobweb-fade-out');
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.canerture.androidhub.components.layouts.SvgCobweb.<anonymous>.<anonymous>.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, 1110911751, true, SvgCobweb$lambda$lambda(cobwebFadeOutId, $color));
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
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.components.layouts.SvgCobweb.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_79(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Defs($this$Svg, null, tmp0, $composer_0, 392, 1);
      $composer_0.startReplaceableGroup_ip860b_k$(-1166796534);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (false ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.components.layouts.SvgCobweb.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = SvgCobweb$lambda$lambda_0(cobwebFadeOutId);
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      Path($this$Svg, tmp0_group, $composer_0, 56);
      var tmp_4;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_4 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_80($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function SvgCobweb$lambda_1($modifier, $$changed) {
    return function ($composer, $force) {
      SvgCobweb($modifier, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function PageLayout$slambda($title, resultContinuation) {
    this.$title_1 = $title;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(PageLayout$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(PageLayout$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(PageLayout$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          document.title = 'Kobweb - ' + this.$title_1;
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(PageLayout$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new PageLayout$slambda(this.$title_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(PageLayout$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function PageLayout$slambda_0($title, resultContinuation) {
    var i = new PageLayout$slambda($title, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function PageLayout$lambda($this$gridTemplateRows) {
    _init_properties_PageLayout_kt__pf69s7();
    $this$gridTemplateRows.size_q03g6h_k$(get_fr(1));
    $this$gridTemplateRows.size_azcpvi_k$($this$gridTemplateRows.get_minContent_f65gog_k$());
    return Unit_getInstance();
  }
  function PageLayout$lambda$lambda$lambda($content) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1846496957, $changed, -1, 'com.canerture.androidhub.components.layouts.PageLayout.<anonymous>.<anonymous>.<anonymous> (PageLayout.kt:97)');
      }
      $content($this$Column, $composer_0, 8);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_81($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function PageLayout$lambda$lambda($content) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1667179892, $changed, -1, 'com.canerture.androidhub.components.layouts.PageLayout.<anonymous>.<anonymous> (PageLayout.kt:92)');
      }
      NavHeader($composer_0, 0);
      var tmp = toModifier(get_PageContentStyle(), [], $composer_0, 64);
      var tmp_0 = CenterHorizontally_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.canerture.androidhub.components.layouts.PageLayout.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -1846496957, true, PageLayout$lambda$lambda$lambda($content));
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
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.components.layouts.PageLayout.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_81(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Column(tmp, null, tmp_0, null, tmp0, $composer_0, 24584, 10);
      var tmp_4;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_4 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_82($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function PageLayout$lambda_0($content) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-885316011, $changed, -1, 'com.canerture.androidhub.components.layouts.PageLayout.<anonymous> (PageLayout.kt:82)');
      }
      SvgCobweb($this$Box.align_s6rwef_k$(gridRow(Companion_getInstance_3(), 1), TopStart_getInstance()), $composer_0, 8);
      var tmp = gridRow(fillMaxSize(Companion_getInstance_3()), 1);
      var tmp_0 = CenterHorizontally_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.canerture.androidhub.components.layouts.PageLayout.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -1667179892, true, PageLayout$lambda$lambda($content));
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
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.components.layouts.PageLayout.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_82(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Column(tmp, null, tmp_0, null, tmp0, $composer_0, 24584, 10);
      Footer(gridRow(fillMaxWidth(Companion_getInstance_3()), 2), $composer_0, 8, 0);
      var tmp_4;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_4 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_83($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function PageLayout$lambda_1($title, $content, $$changed) {
    return function ($composer, $force) {
      PageLayout($title, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function PageContentStyle$factory() {
    return getPropertyCallableRef('PageContentStyle', 0, KProperty0, function () {
      return get_PageContentStyle();
    }, null);
  }
  var properties_initialized_PageLayout_kt_piu0g5;
  function _init_properties_PageLayout_kt__pf69s7() {
    if (!properties_initialized_PageLayout_kt_piu0g5) {
      properties_initialized_PageLayout_kt_piu0g5 = true;
      PageContentStyle$delegate = ComponentStyle(VOID, VOID, PageContentStyle$delegate$lambda);
    }
  }
  function get_FooterStyle() {
    _init_properties_Footer_kt__fc6p2z();
    return FooterStyle$delegate.getValue_fbnwi2_k$(null, FooterStyle$factory());
  }
  var FooterStyle$delegate;
  function Footer(modifier, $composer, $changed, $default) {
    _init_properties_Footer_kt__fc6p2z();
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(571317305);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 2;
    if (!(($default & 1) === 1) ? true : !(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance_3();
      }
      if (isTraceInProgress()) {
        traceEventStart(571317305, $dirty, -1, 'com.canerture.androidhub.components.sections.Footer (Footer.kt:30)');
      }
      var tmp = toModifier(get_FooterStyle(), [], $composer_0, 64).then_mmfvo6_k$(modifier_0._v);
      var tmp_0 = Center_getInstance();
      Box(tmp, tmp_0, null, ComposableSingletons$FooterKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 3080, 4);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(Footer$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_84($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$FooterKt$lambda_1$lambda_a73781($this$Span, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1858395691, $changed, -1, 'com.canerture.androidhub.components.sections.ComposableSingletons$FooterKt.lambda-1.<anonymous> (Footer.kt:33)');
    }
    var sitePalette = toSitePalette(Companion_getInstance_1().get_current_2iudd5_k$($composer_0, 8));
    SpanText('Built with ', null, null, null, $composer_0, 6, 14);
    var tmp = setVariable(Companion_getInstance_3(), get_ColorVar(), sitePalette.get_brand_ipc50e_k$().get_primary_3xuktj_k$());
    var tmp_0 = get_UncoloredLinkVariant();
    Link_0('https://github.com/varabyte/kobweb', 'Kobweb', tmp, tmp_0, null, null, false, null, $composer_0, 566, 240);
    SpanText(', template designed by ', null, null, null, $composer_0, 6, 14);
    var tmp_1 = whiteSpace(setVariable(Companion_getInstance_3(), get_ColorVar(), sitePalette.get_brand_ipc50e_k$().get_accent_avafv7_k$()), Companion_getInstance_12().get_NoWrap_21tqz8_k$());
    var tmp_2 = get_UncoloredLinkVariant();
    Link_0('https://ui-rocket.com', 'UI Rocket', tmp_1, tmp_2, null, null, false, null, $composer_0, 566, 240);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_85($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$FooterKt$lambda_2$lambda_imj9u6($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-284662157, $changed, -1, 'com.canerture.androidhub.components.sections.ComposableSingletons$FooterKt.lambda-2.<anonymous> (Footer.kt:32)');
    }
    Span(toAttrs(textAlign(Companion_getInstance_3(), Companion_getInstance_4().get_Center_3arb0i_k$())), ComposableSingletons$FooterKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 48, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$FooterKt() {
    ComposableSingletons$FooterKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_84(composableLambdaInstance(-1858395691, false, ComposableSingletons$FooterKt$lambda_1$lambda_a73781));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_85(composableLambdaInstance(-284662157, false, ComposableSingletons$FooterKt$lambda_2$lambda_imj9u6));
  }
  protoOf(ComposableSingletons$FooterKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$FooterKt).get_lambda_2_bzdzzp_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  var ComposableSingletons$FooterKt_instance;
  function ComposableSingletons$FooterKt_getInstance() {
    if (ComposableSingletons$FooterKt_instance == null)
      new ComposableSingletons$FooterKt();
    return ComposableSingletons$FooterKt_instance;
  }
  function FooterStyle$delegate$lambda($this$base) {
    _init_properties_Footer_kt__fc6p2z();
    return padding_1(backgroundColor(Companion_getInstance_3(), toSitePalette($this$base.get_colorMode_trbg8z_k$()).get_nearBackground_c1s3l_k$()), get_cssRem(1.5), get_percent(10));
  }
  function Footer$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      Footer($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function FooterStyle$factory() {
    return getPropertyCallableRef('FooterStyle', 0, KProperty0, function () {
      return get_FooterStyle();
    }, null);
  }
  var properties_initialized_Footer_kt_pg7k03;
  function _init_properties_Footer_kt__fc6p2z() {
    if (!properties_initialized_Footer_kt_pg7k03) {
      properties_initialized_Footer_kt_pg7k03 = true;
      var tmp = Companion_getInstance_5();
      FooterStyle$delegate = base(tmp, VOID, VOID, FooterStyle$delegate$lambda);
    }
  }
  function get_NavHeaderStyle() {
    _init_properties_NavHeader_kt__vdotjy();
    return NavHeaderStyle$delegate.getValue_fbnwi2_k$(null, NavHeaderStyle$factory());
  }
  var NavHeaderStyle$delegate;
  function get_SideMenuSlideInAnim() {
    _init_properties_NavHeader_kt__vdotjy();
    return SideMenuSlideInAnim$delegate.getValue_fbnwi2_k$(null, SideMenuSlideInAnim$factory());
  }
  var SideMenuSlideInAnim$delegate;
  function NavLink(path, text, $composer, $changed) {
    _init_properties_NavHeader_kt__vdotjy();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(844555591);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(path) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(text) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(844555591, $dirty, -1, 'com.canerture.androidhub.components.sections.NavLink (NavHeader.kt:42)');
      }
      var tmp = get_UndecoratedLinkVariant().then_x4ddsu_k$(get_UncoloredLinkVariant());
      Link_0(path, text, null, tmp, null, null, false, null, $composer_0, 14 & $dirty | 112 & $dirty | 0, 244);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(NavLink$lambda(path, text, $changed));
    }
  }
  function MenuItems($composer, $changed) {
    _init_properties_NavHeader_kt__vdotjy();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1327933143);
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1327933143, $changed, -1, 'com.canerture.androidhub.components.sections.MenuItems (NavHeader.kt:47)');
      }
      NavLink('/', 'Home', $composer_0, 54);
      NavLink('/about', 'About', $composer_0, 54);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(MenuItems$lambda($changed));
    }
  }
  function ColorModeButton($composer, $changed) {
    _init_properties_NavHeader_kt__vdotjy();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(515910578);
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(515910578, $changed, -1, 'com.canerture.androidhub.components.sections.ColorModeButton (NavHeader.kt:53)');
      }
      var colorMode$delegate = Companion_getInstance_1().get_currentState_dmzs7c_k$($composer_0, 8);
      $composer_0.startReplaceableGroup_ip860b_k$(-1450829191);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = $composer_0.changed_ga7h3f_k$(colorMode$delegate);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.components.sections.ColorModeButton.<anonymous>' call
        var value = ColorModeButton$lambda_1(colorMode$delegate);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.canerture.androidhub.components.sections.ColorModeButton.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 1076343481, true, ColorModeButton$lambda_2(colorMode$delegate));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid_0 ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.components.sections.ColorModeButton.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_93(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      IconButton(tmp0_group, tmp0, $composer_0, 48);
      var tmp_4 = Companion_getInstance_13().get_PreviousSibling_b9lu4i_k$();
      var tmp_5 = PopupPlacement_BottomRight_getInstance();
      Tooltip(tmp_4, 'Toggle color mode', null, null, tmp_5, false, null, null, 0, 0, null, null, $composer_0, 24632, 0, 4076);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(ColorModeButton$lambda_3($changed));
    }
  }
  function HamburgerButton(onClick, $composer, $changed) {
    _init_properties_NavHeader_kt__vdotjy();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1913630033);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onClick) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1913630033, $dirty, -1, 'com.canerture.androidhub.components.sections.HamburgerButton (NavHeader.kt:62)');
      }
      IconButton(onClick, ComposableSingletons$NavHeaderKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 48 | 14 & $dirty);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(HamburgerButton$lambda(onClick, $changed));
    }
  }
  function CloseButton(onClick, $composer, $changed) {
    _init_properties_NavHeader_kt__vdotjy();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1136291648);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onClick) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1136291648, $dirty, -1, 'com.canerture.androidhub.components.sections.CloseButton (NavHeader.kt:69)');
      }
      IconButton(onClick, ComposableSingletons$NavHeaderKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 48 | 14 & $dirty);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(CloseButton$lambda(onClick, $changed));
    }
  }
  var SideMenuState_CLOSED_instance;
  var SideMenuState_OPEN_instance;
  var SideMenuState_CLOSING_instance;
  function values() {
    return [SideMenuState_CLOSED_getInstance(), SideMenuState_OPEN_getInstance(), SideMenuState_CLOSING_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'CLOSED':
        return SideMenuState_CLOSED_getInstance();
      case 'OPEN':
        return SideMenuState_OPEN_getInstance();
      case 'CLOSING':
        return SideMenuState_CLOSING_getInstance();
      default:
        SideMenuState_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var SideMenuState_entriesInitialized;
  function SideMenuState_initEntries() {
    if (SideMenuState_entriesInitialized)
      return Unit_getInstance();
    SideMenuState_entriesInitialized = true;
    SideMenuState_CLOSED_instance = new SideMenuState('CLOSED', 0);
    SideMenuState_OPEN_instance = new SideMenuState('OPEN', 1);
    SideMenuState_CLOSING_instance = new SideMenuState('CLOSING', 2);
  }
  var $ENTRIES;
  function SideMenuState(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SideMenuState).close_1keygo_k$ = function () {
    var tmp;
    switch (this.get_ordinal_ip24qg_k$()) {
      case 0:
        tmp = SideMenuState_CLOSED_getInstance();
        break;
      case 1:
        tmp = SideMenuState_CLOSING_getInstance();
        break;
      case 2:
        tmp = SideMenuState_CLOSING_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  function NavHeader($composer, $changed) {
    _init_properties_NavHeader_kt__vdotjy();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1108811238);
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1108811238, $changed, -1, 'com.canerture.androidhub.components.sections.NavHeader (NavHeader.kt:100)');
      }
      var tmp = toModifier(get_NavHeaderStyle(), [], $composer_0, 64);
      var tmp_0 = CenterVertically_getInstance();
      Row(tmp, null, tmp_0, null, ComposableSingletons$NavHeaderKt_getInstance().lambda_6_r8sbbk_1, $composer_0, 24584, 10);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(NavHeader$lambda($changed));
    }
  }
  function SideMenu(menuState, close, onAnimationEnd, $composer, $changed) {
    _init_properties_NavHeader_kt__vdotjy();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1445021827);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(menuState) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(close) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onAnimationEnd) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1445021827, $dirty, -1, 'com.canerture.androidhub.components.sections.SideMenu (NavHeader.kt:138)');
      }
      var tmp = setVariable(Companion_getInstance_3(), OverlayVars_getInstance().get_BackgroundColor_qhx06s_k$(), Colors_getInstance().get_Transparent_cxh4g9_k$());
      $composer_0.startReplaceableGroup_ip860b_k$(-760355384);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = ($dirty & 112) === 32;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.components.sections.SideMenu.<anonymous>' call
        var value = SideMenu$lambda(close);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var tmp_2 = onClick(tmp, tmp0_group);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.canerture.androidhub.components.sections.SideMenu.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, -36487783, true, SideMenu$lambda_0(menuState, onAnimationEnd, close));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_4;
      if (invalid_0 ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.components.sections.SideMenu.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_95(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = it_0;
      }
      var tmp_5 = tmp_4;
      var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Overlay(tmp_2, null, null, null, tmp0, $composer_0, 24584, 14);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(SideMenu$lambda_1(menuState, close, onAnimationEnd, $changed));
    }
  }
  function ComposableLambda$invoke$ref_86($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$NavHeaderKt$lambda_1$lambda_vv16hm($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1563565610, $changed, -1, 'com.canerture.androidhub.components.sections.ComposableSingletons$NavHeaderKt.lambda-1.<anonymous> (NavHeader.kt:64)');
      }
      HamburgerIcon(null, $composer_0, 0, 1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_87($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$NavHeaderKt$lambda_2$lambda_31epff($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1424045209, $changed, -1, 'com.canerture.androidhub.components.sections.ComposableSingletons$NavHeaderKt.lambda-2.<anonymous> (NavHeader.kt:71)');
      }
      CloseIcon(null, $composer_0, 0, 1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_88($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$NavHeaderKt$lambda_3$lambda_ps7rms($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(61045801, $changed, -1, 'com.canerture.androidhub.components.sections.ComposableSingletons$NavHeaderKt.lambda-3.<anonymous> (NavHeader.kt:104)');
      }
      var tmp = height(Companion_getInstance_3(), get_cssRem(2));
      // Inline function 'org.jetbrains.compose.web.css.Companion.Block' call
      Companion_getInstance_10();
      // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = display(tmp, 'block');
      Image('/kobweb-logo.png', 'Kobweb Logo', tmp_0, null, null, null, false, null, $composer_0, 566, 248);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_89($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$NavHeaderKt$lambda_4$lambda_gf9ta5($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(214303636, $changed, -1, 'com.canerture.androidhub.components.sections.ComposableSingletons$NavHeaderKt.lambda-4.<anonymous> (NavHeader.kt:110)');
    }
    MenuItems($composer_0, 0);
    ColorModeButton($composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_90($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$NavHeaderKt$lambda_5$lambda_cecns2($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1817535293, $changed, -1, 'com.canerture.androidhub.components.sections.ComposableSingletons$NavHeaderKt.lambda-5.<anonymous> (NavHeader.kt:121)');
    }
    $composer_0.startReplaceableGroup_ip860b_k$(1941552128);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'com.canerture.androidhub.components.sections.ComposableSingletons$NavHeaderKt.lambda-5.<anonymous>.<anonymous>' call
      var value = mutableStateOf(SideMenuState_CLOSED_getInstance());
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    var menuState$delegate = tmp0_group;
    ColorModeButton($composer_0, 0);
    $composer_0.startReplaceableGroup_ip860b_k$(1941552248);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_1;
    if (false ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'com.canerture.androidhub.components.sections.ComposableSingletons$NavHeaderKt.lambda-5.<anonymous>.<anonymous>' call
      var value_0 = ComposableSingletons$NavHeaderKt$lambda_5$lambda$lambda_tjf03t(menuState$delegate);
      $composer_0.updateRememberedValue_l1wh71_k$(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    HamburgerButton(tmp1_group, $composer_0, 6);
    if (!invoke$lambda(menuState$delegate).equals(SideMenuState_CLOSED_getInstance())) {
      var tmp_3 = invoke$lambda(menuState$delegate);
      $composer_0.startReplaceableGroup_ip860b_k$(1941552423);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_4;
      if (false ? true : it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.components.sections.ComposableSingletons$NavHeaderKt.lambda-5.<anonymous>.<anonymous>' call
        var value_1 = ComposableSingletons$NavHeaderKt$lambda_5$lambda$lambda_tjf03t_0(menuState$delegate);
        $composer_0.updateRememberedValue_l1wh71_k$(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp2_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      $composer_0.startReplaceableGroup_ip860b_k$(1941552495);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_6;
      if (false ? true : it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.components.sections.ComposableSingletons$NavHeaderKt.lambda-5.<anonymous>.<anonymous>' call
        var value_2 = ComposableSingletons$NavHeaderKt$lambda_5$lambda$lambda_tjf03t_1(menuState$delegate);
        $composer_0.updateRememberedValue_l1wh71_k$(value_2);
        tmp_6 = value_2;
      } else {
        tmp_6 = it_2;
      }
      var tmp_7 = tmp_6;
      var tmp3_group = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      SideMenu(tmp_3, tmp2_group, tmp3_group, $composer_0, 432);
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function invoke$lambda($menuState$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('menuState', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $menuState$delegate.get_value_j01efc_k$();
  }
  function invoke$lambda_0($menuState$delegate, value) {
    getLocalDelegateReference('menuState', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $menuState$delegate.set_value_v1vabv_k$(value);
    return Unit_getInstance();
  }
  function ComposableSingletons$NavHeaderKt$lambda_5$lambda$lambda_tjf03t($menuState$delegate) {
    return function () {
      invoke$lambda_0($menuState$delegate, SideMenuState_OPEN_getInstance());
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$NavHeaderKt$lambda_5$lambda$lambda_tjf03t_0($menuState$delegate) {
    return function () {
      invoke$lambda_0($menuState$delegate, invoke$lambda($menuState$delegate).close_1keygo_k$());
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$NavHeaderKt$lambda_5$lambda$lambda_tjf03t_1($menuState$delegate) {
    return function () {
      var tmp;
      if (invoke$lambda($menuState$delegate).equals(SideMenuState_CLOSING_getInstance())) {
        invoke$lambda_0($menuState$delegate, SideMenuState_CLOSED_getInstance());
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_91($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$NavHeaderKt$lambda_6$lambda_tt4x4v($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-872052681, $changed, -1, 'com.canerture.androidhub.components.sections.ComposableSingletons$NavHeaderKt.lambda-6.<anonymous> (NavHeader.kt:102)');
    }
    Link('https://kobweb.varabyte.com', null, null, null, null, false, null, ComposableSingletons$NavHeaderKt_getInstance().lambda_3_r8sbbn_1, $composer_0, 12582918, 126);
    Spacer($composer_0, 0);
    var tmp = displayIfAtLeast(gap(Companion_getInstance_3(), get_cssRem(1.5)), Breakpoint_MD_getInstance());
    var tmp_0 = CenterVertically_getInstance();
    Row(tmp, null, tmp_0, null, ComposableSingletons$NavHeaderKt_getInstance().lambda_4_r8sbbm_1, $composer_0, 24584, 10);
    var tmp_1 = displayUntil(gap(fontSize(Companion_getInstance_3(), get_cssRem(1.5)), get_cssRem(1)), Breakpoint_MD_getInstance());
    var tmp_2 = CenterVertically_getInstance();
    Row(tmp_1, null, tmp_2, null, ComposableSingletons$NavHeaderKt_getInstance().lambda_5_r8sbbl_1, $composer_0, 24584, 10);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_92($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$NavHeaderKt$lambda_7$lambda_zig2o($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1280507252, $changed, -1, 'com.canerture.androidhub.components.sections.ComposableSingletons$NavHeaderKt.lambda-7.<anonymous> (NavHeader.kt:170)');
    }
    MenuItems($composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$NavHeaderKt() {
    ComposableSingletons$NavHeaderKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_86(composableLambdaInstance(1563565610, false, ComposableSingletons$NavHeaderKt$lambda_1$lambda_vv16hm));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_87(composableLambdaInstance(1424045209, false, ComposableSingletons$NavHeaderKt$lambda_2$lambda_31epff));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_88(composableLambdaInstance(61045801, false, ComposableSingletons$NavHeaderKt$lambda_3$lambda_ps7rms));
    var tmp_2 = this;
    tmp_2.lambda_4_r8sbbm_1 = ComposableLambda$invoke$ref_89(composableLambdaInstance(214303636, false, ComposableSingletons$NavHeaderKt$lambda_4$lambda_gf9ta5));
    var tmp_3 = this;
    tmp_3.lambda_5_r8sbbl_1 = ComposableLambda$invoke$ref_90(composableLambdaInstance(1817535293, false, ComposableSingletons$NavHeaderKt$lambda_5$lambda_cecns2));
    var tmp_4 = this;
    tmp_4.lambda_6_r8sbbk_1 = ComposableLambda$invoke$ref_91(composableLambdaInstance(-872052681, false, ComposableSingletons$NavHeaderKt$lambda_6$lambda_tt4x4v));
    var tmp_5 = this;
    tmp_5.lambda_7_r8sbbj_1 = ComposableLambda$invoke$ref_92(composableLambdaInstance(1280507252, false, ComposableSingletons$NavHeaderKt$lambda_7$lambda_zig2o));
  }
  protoOf(ComposableSingletons$NavHeaderKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$NavHeaderKt).get_lambda_2_bzdzzp_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$NavHeaderKt).get_lambda_3_bzdzzq_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  protoOf(ComposableSingletons$NavHeaderKt).get_lambda_4_bzdzzr_k$ = function () {
    return this.lambda_4_r8sbbm_1;
  };
  protoOf(ComposableSingletons$NavHeaderKt).get_lambda_5_bzdzzs_k$ = function () {
    return this.lambda_5_r8sbbl_1;
  };
  protoOf(ComposableSingletons$NavHeaderKt).get_lambda_6_bzdzzt_k$ = function () {
    return this.lambda_6_r8sbbk_1;
  };
  protoOf(ComposableSingletons$NavHeaderKt).get_lambda_7_bzdzzu_k$ = function () {
    return this.lambda_7_r8sbbj_1;
  };
  var ComposableSingletons$NavHeaderKt_instance;
  function ComposableSingletons$NavHeaderKt_getInstance() {
    if (ComposableSingletons$NavHeaderKt_instance == null)
      new ComposableSingletons$NavHeaderKt();
    return ComposableSingletons$NavHeaderKt_instance;
  }
  function ColorModeButton$lambda($colorMode$delegate) {
    _init_properties_NavHeader_kt__vdotjy();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('colorMode', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $colorMode$delegate.get_value_j01efc_k$();
  }
  function ColorModeButton$lambda_0($colorMode$delegate, value) {
    _init_properties_NavHeader_kt__vdotjy();
    getLocalDelegateReference('colorMode', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $colorMode$delegate.set_value_v1vabv_k$(value);
    return Unit_getInstance();
  }
  function NavHeaderStyle$delegate$lambda($this$base) {
    _init_properties_NavHeader_kt__vdotjy();
    return padding(fillMaxWidth(Companion_getInstance_3()), get_cssRem(1));
  }
  function SideMenuSlideInAnim$delegate$lambda($this$Keyframes) {
    _init_properties_NavHeader_kt__vdotjy();
    $this$Keyframes.from_1urvt_k$(SideMenuSlideInAnim$delegate$lambda$lambda);
    $this$Keyframes.to_txs6jq_k$(SideMenuSlideInAnim$delegate$lambda$lambda_0);
    return Unit_getInstance();
  }
  function SideMenuSlideInAnim$delegate$lambda$lambda() {
    _init_properties_NavHeader_kt__vdotjy();
    return translateX(Companion_getInstance_3(), get_percent(100));
  }
  function SideMenuSlideInAnim$delegate$lambda$lambda_0() {
    _init_properties_NavHeader_kt__vdotjy();
    return Companion_getInstance_3();
  }
  function NavLink$lambda($path, $text, $$changed) {
    return function ($composer, $force) {
      NavLink($path, $text, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function MenuItems$lambda($$changed) {
    return function ($composer, $force) {
      MenuItems($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ColorModeButton$lambda_1($colorMode$delegate) {
    return function () {
      ColorModeButton$lambda_0($colorMode$delegate, ColorModeButton$lambda($colorMode$delegate).get_opposite_ywslzk_k$());
      return Unit_getInstance();
    };
  }
  function ColorModeButton$lambda_2($colorMode$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1076343481, $changed, -1, 'com.canerture.androidhub.components.sections.ColorModeButton.<anonymous> (NavHeader.kt:56)');
        }
        if (ColorModeButton$lambda($colorMode$delegate).get_isLight_zemp0j_k$()) {
          $composer_0.startReplaceableGroup_ip860b_k$(-1762424864);
          MoonIcon(null, $composer_0, 0, 1);
          $composer_0.endReplaceableGroup_ern0ak_k$();
        } else {
          $composer_0.startReplaceableGroup_ip860b_k$(-1762424848);
          SunIcon(null, $composer_0, 0, 1);
          $composer_0.endReplaceableGroup_ern0ak_k$();
        }
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
  function ComposableLambda$invoke$ref_93($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ColorModeButton$lambda_3($$changed) {
    return function ($composer, $force) {
      ColorModeButton($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function HamburgerButton$lambda($onClick, $$changed) {
    return function ($composer, $force) {
      HamburgerButton($onClick, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function CloseButton$lambda($onClick, $$changed) {
    return function ($composer, $force) {
      CloseButton($onClick, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function NavHeader$lambda($$changed) {
    return function ($composer, $force) {
      NavHeader($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function SideMenu$lambda($close) {
    return function (it) {
      $close();
      return Unit_getInstance();
    };
  }
  function SideMenu$lambda$lambda(it) {
    _init_properties_NavHeader_kt__vdotjy();
    it.stopPropagation_5qf8uy_k$();
    return Unit_getInstance();
  }
  function SideMenu$lambda$lambda_0($onAnimationEnd) {
    return function (it) {
      $onAnimationEnd();
      return Unit_getInstance();
    };
  }
  function SideMenu$lambda$lambda$lambda($close) {
    return function () {
      $close();
      return Unit_getInstance();
    };
  }
  function SideMenu$lambda$lambda_1($close) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-206915651, $changed, -1, 'com.canerture.androidhub.components.sections.SideMenu.<anonymous>.<anonymous>.<anonymous> (NavHeader.kt:168)');
      }
      $composer_0.startReplaceableGroup_ip860b_k$(-1518992516);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.changed_ga7h3f_k$($close);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.components.sections.SideMenu.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = SideMenu$lambda$lambda$lambda($close);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      CloseButton(tmp0_group, $composer_0, 0);
      var tmp_1 = fontSize(gap(padding_2(Companion_getInstance_3(), VOID, get_cssRem(0.75)), get_cssRem(1.5)), get_cssRem(1.4));
      var tmp_2 = End_getInstance();
      Column(tmp_1, null, tmp_2, null, ComposableSingletons$NavHeaderKt_getInstance().lambda_7_r8sbbj_1, $composer_0, 24584, 10);
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_94($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function SideMenu$lambda_0($menuState, $onAnimationEnd, $close) {
    return function ($this$Overlay, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-36487783, $changed, -1, 'com.canerture.androidhub.components.sections.SideMenu.<anonymous> (NavHeader.kt:144)');
      }
      $composer_0.startMovableGroup_clfloq_k$(629539333, $menuState);
      var tmp = backgroundColor(gap(padding_0($this$Overlay.align_s6rwef_k$(width(fillMaxHeight(Companion_getInstance_3()), clamp(get_cssRem(8), get_percent(33), get_cssRem(10))), CenterEnd_getInstance()), get_cssRem(1), get_cssRem(1)), get_cssRem(1.5)), toSitePalette(Companion_getInstance_1().get_current_2iudd5_k$($composer_0, 8)).get_nearBackground_c1s3l_k$());
      var tmp_0 = get_SideMenuSlideInAnim();
      var tmp_1 = get_ms(200);
      var tmp_2;
      if ($menuState.equals(SideMenuState_OPEN_getInstance())) {
        // Inline function 'org.jetbrains.compose.web.css.Companion.EaseOut' call
        Companion_getInstance_14();
        // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_2 = 'ease-out';
      } else {
        // Inline function 'org.jetbrains.compose.web.css.Companion.EaseIn' call
        Companion_getInstance_14();
        // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_2 = 'ease-in';
      }
      var tmp_3 = tmp_2;
      var tmp_4;
      if ($menuState.equals(SideMenuState_OPEN_getInstance())) {
        // Inline function 'org.jetbrains.compose.web.css.Companion.Normal' call
        Companion_getInstance_15();
        // Inline function 'org.jetbrains.compose.web.css.AnimationDirection' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_4 = 'normal';
      } else {
        // Inline function 'org.jetbrains.compose.web.css.Companion.Reverse' call
        Companion_getInstance_15();
        // Inline function 'org.jetbrains.compose.web.css.AnimationDirection' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_4 = 'reverse';
      }
      var tmp_5 = tmp_4;
      // Inline function 'org.jetbrains.compose.web.css.Companion.Forwards' call
      Companion_getInstance_16();
      // Inline function 'org.jetbrains.compose.web.css.AnimationFillMode' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_6 = 'forwards';
      var tmp_7 = borderRadius_0(animation(tmp, [toAnimation(tmp_0, tmp_1, tmp_3, null, null, tmp_5, tmp_6, null, $composer_0, 2359880, 76)]), get_cssRem(2));
      $composer_0.startReplaceableGroup_ip860b_k$(629540605);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_8;
      if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.components.sections.SideMenu.<anonymous>.<anonymous>.<anonymous>' call
        var value = SideMenu$lambda$lambda;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_8 = value;
      } else {
        tmp_8 = it;
      }
      var tmp_9 = tmp_8;
      var tmp0_group = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var tmp_10 = onClick(tmp_7, tmp0_group);
      $composer_0.startReplaceableGroup_ip860b_k$(629540666);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.changed_ga7h3f_k$($onAnimationEnd);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_11;
      if (invalid ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.components.sections.SideMenu.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = SideMenu$lambda$lambda_0($onAnimationEnd);
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_11 = value_0;
      } else {
        tmp_11 = it_0;
      }
      var tmp_12 = tmp_11;
      var tmp1_group = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var tmp_13 = onAnimationEnd(tmp_10, tmp1_group);
      var tmp_14 = End_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.canerture.androidhub.components.sections.SideMenu.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_15 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_15, -206915651, true, SideMenu$lambda$lambda_1($close));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_16;
      if (invalid_0 ? true : it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.components.sections.SideMenu.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_94(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_1);
        tmp_16 = value_1;
      } else {
        tmp_16 = it_1;
      }
      var tmp_17 = tmp_16;
      var tmp0 = (tmp_17 == null ? true : !(tmp_17 == null)) ? tmp_17 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Column(tmp_13, null, tmp_14, null, tmp0, $composer_0, 24584, 10);
      $composer_0.endMovableGroup_kd2hcs_k$();
      var tmp_18;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_18 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_95($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function SideMenu$lambda_1($menuState, $close, $onAnimationEnd, $$changed) {
    return function ($composer, $force) {
      SideMenu($menuState, $close, $onAnimationEnd, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function SideMenuState_CLOSED_getInstance() {
    SideMenuState_initEntries();
    return SideMenuState_CLOSED_instance;
  }
  function SideMenuState_OPEN_getInstance() {
    SideMenuState_initEntries();
    return SideMenuState_OPEN_instance;
  }
  function SideMenuState_CLOSING_getInstance() {
    SideMenuState_initEntries();
    return SideMenuState_CLOSING_instance;
  }
  function NavHeaderStyle$factory() {
    return getPropertyCallableRef('NavHeaderStyle', 0, KProperty0, function () {
      return get_NavHeaderStyle();
    }, null);
  }
  function SideMenuSlideInAnim$factory() {
    return getPropertyCallableRef('SideMenuSlideInAnim', 0, KProperty0, function () {
      return get_SideMenuSlideInAnim();
    }, null);
  }
  var properties_initialized_NavHeader_kt_f5zrgg;
  function _init_properties_NavHeader_kt__vdotjy() {
    if (!properties_initialized_NavHeader_kt_f5zrgg) {
      properties_initialized_NavHeader_kt_f5zrgg = true;
      var tmp = Companion_getInstance_5();
      NavHeaderStyle$delegate = base(tmp, VOID, VOID, NavHeaderStyle$delegate$lambda);
      SideMenuSlideInAnim$delegate = Keyframes(VOID, SideMenuSlideInAnim$delegate$lambda);
    }
  }
  function IconButton(onClick, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-2093742643);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onClick) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-2093742643, $dirty, -1, 'com.canerture.androidhub.components.widgets.IconButton (IconButton.kt:12)');
      }
      $composer_0.startReplaceableGroup_ip860b_k$(-896661888);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.components.widgets.IconButton.<anonymous>' call
        var value = IconButton$lambda(onClick);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var tmp_1 = setVariable(Companion_getInstance_3(), ButtonVars_getInstance().get_FontSize_oos3dz_k$(), get_em(1));
      var tmp_2 = get_CircleButtonVariant().then_x4ddsu_k$(get_UncoloredButtonVariant());
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.canerture.androidhub.components.widgets.IconButton.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, -362128419, true, IconButton$lambda_0(content));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_4;
      if (invalid_0 ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.components.widgets.IconButton.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_96(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = it_0;
      }
      var tmp_5 = tmp_4;
      var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Button(tmp0_group, tmp_1, tmp_2, null, false, null, null, null, null, tmp0, $composer_0, 805306432, 504);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(IconButton$lambda_1(onClick, content, $changed));
    }
  }
  function IconButton$lambda($onClick) {
    return function (it) {
      $onClick();
      return Unit_getInstance();
    };
  }
  function IconButton$lambda_0($content) {
    return function ($this$Button, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-362128419, $changed, -1, 'com.canerture.androidhub.components.widgets.IconButton.<anonymous> (IconButton.kt:18)');
      }
      $content($composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_96($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function IconButton$lambda_1($onClick, $content, $$changed) {
    return function ($composer, $force) {
      IconButton($onClick, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function get_HeroContainerStyle() {
    _init_properties_Index_kt__ifxcv4();
    return HeroContainerStyle$delegate.getValue_fbnwi2_k$(null, HeroContainerStyle$factory());
  }
  var HeroContainerStyle$delegate;
  function get_HomeGridStyle() {
    _init_properties_Index_kt__ifxcv4();
    return HomeGridStyle$delegate.getValue_fbnwi2_k$(null, HomeGridStyle$factory());
  }
  var HomeGridStyle$delegate;
  function get_GridCellColorVar() {
    _init_properties_Index_kt__ifxcv4();
    return GridCellColorVar$delegate.getValue_fbnwi2_k$(null, GridCellColorVar$factory());
  }
  var GridCellColorVar$delegate;
  function get_HomeGridCellStyle() {
    _init_properties_Index_kt__ifxcv4();
    return HomeGridCellStyle$delegate.getValue_fbnwi2_k$(null, HomeGridCellStyle$factory());
  }
  var HomeGridCellStyle$delegate;
  function GridCell(color, row, column, width, height, $composer, $changed, $default) {
    _init_properties_Index_kt__ifxcv4();
    var width_0 = {_v: width};
    var height_0 = {_v: height};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1898381357);
    if (!(($default & 8) === 0)) {
      width_0._v = null;
    }
    if (!(($default & 16) === 0)) {
      height_0._v = null;
    }
    if (isTraceInProgress()) {
      traceEventStart(1898381357, $changed, -1, 'com.canerture.androidhub.pages.GridCell (Index.kt:56)');
    }
    var tmp = toAttrs(gridItem(setVariable(toModifier(get_HomeGridCellStyle(), [], $composer_0, 64), get_GridCellColorVar(), color), row, column, width_0._v, height_0._v));
    Div(tmp, null, $composer_0, 0, 2);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(GridCell$lambda(color, row, column, width_0, height_0, $changed, $default));
    }
  }
  function HomePage($composer, $changed) {
    _init_properties_Index_kt__ifxcv4();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-763277764);
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-763277764, $changed, -1, 'com.canerture.androidhub.pages.HomePage (Index.kt:67)');
      }
      PageLayout('Home', ComposableSingletons$IndexKt_getInstance().lambda_6_r8sbbk_1, $composer_0, 54);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(HomePage$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_97($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_1$lambda_5yb608($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1260269097, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$IndexKt.lambda-1.<anonymous> (Index.kt:93)');
    }
    SpanText('You can read the ', null, null, null, $composer_0, 6, 14);
    Link_0('/about', 'About', null, null, null, null, false, null, $composer_0, 54, 252);
    SpanText(' page for more information.', null, null, null, $composer_0, 6, 14);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_98($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_2$lambda_yrxn2f($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1692940003, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$IndexKt.lambda-2.<anonymous> (Index.kt:105)');
    }
    Text('This could be your CTA', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_99($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_3$lambda_7fjxui($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-596361092, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$IndexKt.lambda-3.<anonymous> (Index.kt:71)');
    }
    var sitePalette = toSitePalette(Companion_getInstance_1().get_current_2iudd5_k$($composer_0, 8));
    var tmp = gap(Companion_getInstance_3(), get_cssRem(2));
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.canerture.androidhub.pages.ComposableSingletons$IndexKt.lambda-3.<anonymous>.<anonymous>' call
    var tmp_0 = $composer_0;
    var dispatchReceiver = composableLambda(tmp_0, -2110878989, true, ComposableSingletons$IndexKt$lambda_3$lambda$lambda_h8z03p(sitePalette));
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
    var tmp_1;
    if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'com.canerture.androidhub.pages.ComposableSingletons$IndexKt.lambda-3.<anonymous>.<anonymous>.<anonymous>' call
      var value = ComposableLambda$invoke$ref_101(dispatchReceiver);
      $composer_1.updateRememberedValue_l1wh71_k$(value);
      tmp_1 = value;
    } else {
      tmp_1 = it;
    }
    var tmp_2 = tmp_1;
    var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_1.endReplaceableGroup_ern0ak_k$();
    Column(tmp, null, null, null, tmp0, $composer_0, 24584, 14);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$IndexKt$lambda_3$lambda$lambda$lambda_o3atbu($sitePalette) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-522564366, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$IndexKt.lambda-3.<anonymous>.<anonymous>.<anonymous> (Index.kt:75)');
      }
      var tmp = Companion_getInstance_3();
      var tmp_0;
      switch (Companion_getInstance_1().get_current_2iudd5_k$($composer_0, 8).get_ordinal_ip24qg_k$()) {
        case 0:
          tmp_0 = Colors_getInstance().get_Black_i7mvue_k$();
          break;
        case 1:
          tmp_0 = Colors_getInstance().get_White_ij46ow_k$();
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp_1 = color(tmp, tmp_0);
      SpanText('Use this template as your starting point for ', tmp_1, null, null, $composer_0, 70, 12);
      var tmp_2 = textShadow(color(Companion_getInstance_3(), $sitePalette.get_brand_ipc50e_k$().get_accent_avafv7_k$()), get_px(0), get_px(0), get_cssRem(0.5), Colors_getInstance().get_Gray_wo2eh8_k$());
      SpanText('Kobweb', tmp_2, null, null, $composer_0, 70, 12);
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_100($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_3$lambda$lambda$lambda_o3atbu_0($ctx) {
    return function (it) {
      $ctx.get_router_j3zccy_k$().tryRoutingTo$default_gm9buu_k$('/about');
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$IndexKt$lambda_3$lambda$lambda_h8z03p($sitePalette) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-2110878989, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$IndexKt.lambda-3.<anonymous>.<anonymous> (Index.kt:74)');
      }
      var tmp = get_HeadlineTextStyle();
      var tmp_0 = toAttrs_0(tmp, [], null, $composer_0, 64, 2);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.canerture.androidhub.pages.ComposableSingletons$IndexKt.lambda-3.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -522564366, true, ComposableSingletons$IndexKt$lambda_3$lambda$lambda$lambda_o3atbu($sitePalette));
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
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.pages.ComposableSingletons$IndexKt.lambda-3.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_100(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Div(tmp_0, tmp0, $composer_0, 48, 0);
      var tmp_4 = get_SubheadlineTextStyle();
      Div(toAttrs_0(tmp_4, [], null, $composer_0, 64, 2), ComposableSingletons$IndexKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 48, 0);
      var ctx = rememberPageContext($composer_0, 0);
      var tmp_5 = ComposableSingletons$IndexKt$lambda_3$lambda$lambda$lambda_o3atbu_0(ctx);
      var tmp_6 = Blue_getInstance();
      Button(tmp_5, null, null, null, false, null, tmp_6, null, null, ComposableSingletons$IndexKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 805306368, 446);
      var tmp_7;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_7 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_101($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableLambda$invoke$ref_102($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_4$lambda_le2j7p($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1935791819, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$IndexKt.lambda-4.<anonymous> (Index.kt:119)');
    }
    var sitePalette = toSitePalette(Companion_getInstance_1().get_current_2iudd5_k$($composer_0, 8));
    GridCell(sitePalette.get_brand_ipc50e_k$().get_primary_3xuktj_k$(), 1, 1, 2, 2, $composer_0, 28088, 0);
    var tmp = Monochrome_getInstance().get__600_woggg0_k$();
    GridCell(tmp, 1, 3, null, null, $composer_0, 432, 24);
    var tmp_0 = Monochrome_getInstance().get__100_wogcqj_k$();
    GridCell(tmp_0, 1, 4, 2, null, $composer_0, 3504, 16);
    var tmp_1 = sitePalette.get_brand_ipc50e_k$().get_accent_avafv7_k$();
    GridCell(tmp_1, 2, 3, 2, null, $composer_0, 3512, 16);
    var tmp_2 = Monochrome_getInstance().get__300_woge7x_k$();
    GridCell(tmp_2, 2, 5, null, null, $composer_0, 432, 24);
    var tmp_3 = Monochrome_getInstance().get__800_woghxe_k$();
    GridCell(tmp_3, 3, 1, 5, null, $composer_0, 3504, 16);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_103($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_5$lambda_ktf1p8($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-197148810, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$IndexKt.lambda-5.<anonymous> (Index.kt:70)');
    }
    Box(null, null, null, ComposableSingletons$IndexKt_getInstance().lambda_3_r8sbbn_1, $composer_0, 3072, 7);
    var tmp = displayIfAtLeast(toModifier(get_HomeGridStyle(), [], $composer_0, 64), Breakpoint_MD_getInstance());
    $composer_0.startReplaceableGroup_ip860b_k$(16459838);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_0;
    if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'com.canerture.androidhub.pages.ComposableSingletons$IndexKt.lambda-5.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IndexKt$lambda_5$lambda$lambda_3x0x15;
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp_0 = value;
    } else {
      tmp_0 = it;
    }
    var tmp_1 = tmp_0;
    var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    Div(toAttrs(grid(tmp, tmp0_group)), ComposableSingletons$IndexKt_getInstance().lambda_4_r8sbbm_1, $composer_0, 48, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$IndexKt$lambda_5$lambda$lambda_3x0x15($this$grid) {
    $this$grid.rows_c0wtyb_k$(ComposableSingletons$IndexKt$lambda_5$lambda$lambda$lambda_kgzzy4);
    $this$grid.columns_o4h109_k$(ComposableSingletons$IndexKt$lambda_5$lambda$lambda$lambda_kgzzy4_0);
    return Unit_getInstance();
  }
  function ComposableSingletons$IndexKt$lambda_5$lambda$lambda$lambda_kgzzy4($this$rows) {
    $this$rows.repeat_n9ti1_k$(3, ComposableSingletons$IndexKt$lambda_5$lambda$lambda$lambda$lambda_o33jyx);
    return Unit_getInstance();
  }
  function ComposableSingletons$IndexKt$lambda_5$lambda$lambda$lambda$lambda_o33jyx($this$repeat) {
    $this$repeat.size_q03g6h_k$(get_fr(1));
    return Unit_getInstance();
  }
  function ComposableSingletons$IndexKt$lambda_5$lambda$lambda$lambda_kgzzy4_0($this$columns) {
    $this$columns.repeat_n9ti1_k$(5, ComposableSingletons$IndexKt$lambda_5$lambda$lambda$lambda$lambda_o33jyx_0);
    return Unit_getInstance();
  }
  function ComposableSingletons$IndexKt$lambda_5$lambda$lambda$lambda$lambda_o33jyx_0($this$repeat) {
    $this$repeat.size_q03g6h_k$(get_fr(1));
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_104($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_6$lambda_807fcz($this$PageLayout, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1997478029, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$IndexKt.lambda-6.<anonymous> (Index.kt:69)');
    }
    var tmp = toModifier(get_HeroContainerStyle(), [], $composer_0, 64);
    Row(tmp, null, null, null, ComposableSingletons$IndexKt_getInstance().lambda_5_r8sbbl_1, $composer_0, 24584, 14);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$IndexKt() {
    ComposableSingletons$IndexKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_97(composableLambdaInstance(1260269097, false, ComposableSingletons$IndexKt$lambda_1$lambda_5yb608));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_98(composableLambdaInstance(1692940003, false, ComposableSingletons$IndexKt$lambda_2$lambda_yrxn2f));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_99(composableLambdaInstance(-596361092, false, ComposableSingletons$IndexKt$lambda_3$lambda_7fjxui));
    var tmp_2 = this;
    tmp_2.lambda_4_r8sbbm_1 = ComposableLambda$invoke$ref_102(composableLambdaInstance(-1935791819, false, ComposableSingletons$IndexKt$lambda_4$lambda_le2j7p));
    var tmp_3 = this;
    tmp_3.lambda_5_r8sbbl_1 = ComposableLambda$invoke$ref_103(composableLambdaInstance(-197148810, false, ComposableSingletons$IndexKt$lambda_5$lambda_ktf1p8));
    var tmp_4 = this;
    tmp_4.lambda_6_r8sbbk_1 = ComposableLambda$invoke$ref_104(composableLambdaInstance(-1997478029, false, ComposableSingletons$IndexKt$lambda_6$lambda_807fcz));
  }
  protoOf(ComposableSingletons$IndexKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$IndexKt).get_lambda_2_bzdzzp_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$IndexKt).get_lambda_3_bzdzzq_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  protoOf(ComposableSingletons$IndexKt).get_lambda_4_bzdzzr_k$ = function () {
    return this.lambda_4_r8sbbm_1;
  };
  protoOf(ComposableSingletons$IndexKt).get_lambda_5_bzdzzs_k$ = function () {
    return this.lambda_5_r8sbbl_1;
  };
  protoOf(ComposableSingletons$IndexKt).get_lambda_6_bzdzzt_k$ = function () {
    return this.lambda_6_r8sbbk_1;
  };
  var ComposableSingletons$IndexKt_instance;
  function ComposableSingletons$IndexKt_getInstance() {
    if (ComposableSingletons$IndexKt_instance == null)
      new ComposableSingletons$IndexKt();
    return ComposableSingletons$IndexKt_instance;
  }
  function HeroContainerStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Index_kt__ifxcv4();
    $this$ComponentStyle.base_y8uu8g_k$(HeroContainerStyle$delegate$lambda$lambda);
    var tmp = Breakpoint_MD_getInstance();
    $this$ComponentStyle.invoke_hmyoxj_k$(tmp, HeroContainerStyle$delegate$lambda$lambda_0);
    return Unit_getInstance();
  }
  function HeroContainerStyle$delegate$lambda$lambda() {
    _init_properties_Index_kt__ifxcv4();
    return gap(fillMaxWidth(Companion_getInstance_3()), get_cssRem(2));
  }
  function HeroContainerStyle$delegate$lambda$lambda_0() {
    _init_properties_Index_kt__ifxcv4();
    var tmp = Companion_getInstance_3();
    return margin_1(tmp, HeroContainerStyle$delegate$lambda$lambda$lambda);
  }
  function HeroContainerStyle$delegate$lambda$lambda$lambda($this$margin) {
    _init_properties_Index_kt__ifxcv4();
    $this$margin.top_1wurxj_k$(get_vh(20));
    return Unit_getInstance();
  }
  function HomeGridStyle$delegate$lambda($this$base) {
    _init_properties_Index_kt__ifxcv4();
    return height(width(gap(Companion_getInstance_3(), get_cssRem(0.5)), get_cssRem(70)), get_cssRem(18));
  }
  function HomeGridCellStyle$delegate$lambda($this$base) {
    _init_properties_Index_kt__ifxcv4();
    return borderRadius(boxShadow(backgroundColor(Companion_getInstance_3(), get_GridCellColorVar().value$default_36t2hw_k$()), VOID, VOID, get_cssRem(0.6), VOID, get_GridCellColorVar().value$default_36t2hw_k$()), get_cssRem(1));
  }
  function GridCell$lambda($color, $row, $column, $width, $height, $$changed, $$default) {
    return function ($composer, $force) {
      GridCell($color, $row, $column, $width._v, $height._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function HomePage$lambda($$changed) {
    return function ($composer, $force) {
      HomePage($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function HeroContainerStyle$factory() {
    return getPropertyCallableRef('HeroContainerStyle', 0, KProperty0, function () {
      return get_HeroContainerStyle();
    }, null);
  }
  function HomeGridStyle$factory() {
    return getPropertyCallableRef('HomeGridStyle', 0, KProperty0, function () {
      return get_HomeGridStyle();
    }, null);
  }
  function GridCellColorVar$factory() {
    return getPropertyCallableRef('GridCellColorVar', 0, KProperty0, function () {
      return get_GridCellColorVar();
    }, null);
  }
  function HomeGridCellStyle$factory() {
    return getPropertyCallableRef('HomeGridCellStyle', 0, KProperty0, function () {
      return get_HomeGridCellStyle();
    }, null);
  }
  var properties_initialized_Index_kt_nnboou;
  function _init_properties_Index_kt__ifxcv4() {
    if (!properties_initialized_Index_kt_nnboou) {
      properties_initialized_Index_kt_nnboou = true;
      HeroContainerStyle$delegate = ComponentStyle(VOID, VOID, HeroContainerStyle$delegate$lambda);
      var tmp = Companion_getInstance_5();
      HomeGridStyle$delegate = base(tmp, VOID, VOID, HomeGridStyle$delegate$lambda);
      GridCellColorVar$delegate = StyleVariable();
      var tmp_0 = Companion_getInstance_5();
      HomeGridCellStyle$delegate = base(tmp_0, VOID, VOID, HomeGridCellStyle$delegate$lambda);
    }
  }
  //region block: init
  COLOR_MODE_KEY = 'androidhub:colorMode';
  com_canerture_androidhub_SitePalette_Brand$stable = 8;
  com_canerture_androidhub_SitePalette$stable = 8;
  com_canerture_androidhub_SitePalettes$stable = 8;
  //endregion
  main();
  return _;
}));
