(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kobweb-frontend-kobweb-core.js', './kobweb-frontend-silk-foundation.js', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-runtime-runtime.js', './html-internal-html-core-runtime.js', './kobweb-frontend-silk-widgets.js', './kobweb-frontend-silk-widgets-kobweb.js', './html-html-core.js', './kobweb-frontend-compose-html-ext.js', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlinx-serialization-kotlinx-serialization-json.js', './kobweb-frontend-kobweb-silk.js', './kotlinx-coroutines-core.js', './kobweb-frontend-kobweb-compose.js', './kobweb-frontend-browser-ext.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kobweb-frontend-kobweb-core.js'), require('./kobweb-frontend-silk-foundation.js'), require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./html-internal-html-core-runtime.js'), require('./kobweb-frontend-silk-widgets.js'), require('./kobweb-frontend-silk-widgets-kobweb.js'), require('./html-html-core.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'), require('./kobweb-frontend-kobweb-silk.js'), require('./kotlinx-coroutines-core.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./kobweb-frontend-browser-ext.js'));
  else {
    if (typeof this['kobweb-frontend-kobweb-core'] === 'undefined') {
      throw new Error("Error loading module 'com.canerture.androidhub:site'. Its dependency 'kobweb-frontend-kobweb-core' was not found. Please, check whether 'kobweb-frontend-kobweb-core' is loaded prior to 'com.canerture.androidhub:site'.");
    }
    if (typeof this['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'com.canerture.androidhub:site'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'com.canerture.androidhub:site'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'com.canerture.androidhub:site'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'com.canerture.androidhub:site'.");
    }
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'com.canerture.androidhub:site'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'com.canerture.androidhub:site'.");
    }
    if (typeof this['html-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'com.canerture.androidhub:site'. Its dependency 'html-internal-html-core-runtime' was not found. Please, check whether 'html-internal-html-core-runtime' is loaded prior to 'com.canerture.androidhub:site'.");
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
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'com.canerture.androidhub:site'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'com.canerture.androidhub:site'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'com.canerture.androidhub:site'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'com.canerture.androidhub:site'.");
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
    root['com.canerture.androidhub:site'] = factory(typeof this['com.canerture.androidhub:site'] === 'undefined' ? {} : this['com.canerture.androidhub:site'], this['kobweb-frontend-kobweb-core'], this['kobweb-frontend-silk-foundation'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-compose-runtime-runtime'], this['html-internal-html-core-runtime'], this['kobweb-frontend-silk-widgets'], this['kobweb-frontend-silk-widgets-kobweb'], this['html-html-core'], this['kobweb-frontend-compose-html-ext'], this['kotlinx-serialization-kotlinx-serialization-core'], this['kotlinx-serialization-kotlinx-serialization-json'], this['kobweb-frontend-kobweb-silk'], this['kotlinx-coroutines-core'], this['kobweb-frontend-kobweb-compose'], this['kobweb-frontend-browser-ext']);
  }
}(this, function (_, kotlin_com_varabyte_kobweb_kobweb_core, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_internal_html_core_runtime, kotlin_com_varabyte_kobweb_silk_widgets, kotlin_com_varabyte_kobweb_silk_widgets_kobweb, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json, kotlin_com_varabyte_kobweb_kobweb_silk, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_com_varabyte_kobweb_browser_ext) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Companion_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.k;
  var Router = kotlin_com_varabyte_kobweb_kobweb_core.$_$.f;
  var initKobweb = kotlin_com_varabyte_kobweb_kobweb_core.$_$.b;
  var LegacyRouteRedirectStrategy_DISALLOW_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.h;
  var set_additionalSilkInitialization = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c1;
  var removePrefix = kotlin_kotlin.$_$.fe;
  var UpdateHistoryMode_REPLACE_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.i;
  var ensureNotNull = kotlin_kotlin.$_$.dh;
  var AppGlobals_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.j;
  var to = kotlin_kotlin.$_$.sh;
  var mapOf = kotlin_kotlin.$_$.e8;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var renderComposable = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.e;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var Unit_getInstance = kotlin_kotlin.$_$.w4;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var THROW_CCE = kotlin_kotlin.$_$.jg;
  var renderWithDeferred = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b1;
  var protoOf = kotlin_kotlin.$_$.gc;
  var objectMeta = kotlin_kotlin.$_$.fc;
  var setMetadataFor = kotlin_kotlin.$_$.hc;
  var VOID = kotlin_kotlin.$_$.g;
  var removeSuffix = kotlin_kotlin.$_$.ge;
  var initSilkWidgets = kotlin_com_varabyte_kobweb_silk_widgets.$_$.p;
  var initSilkWidgetsKobweb = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.e;
  var registerKeyframes = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b;
  var Text = kotlin_org_jetbrains_compose_html_html_core.$_$.z5;
  var Code = kotlin_org_jetbrains_compose_html_html_core.$_$.j5;
  var GenericTag = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l2;
  var Li = kotlin_org_jetbrains_compose_html_html_core.$_$.t5;
  var Em = kotlin_org_jetbrains_compose_html_html_core.$_$.m5;
  var Link = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.b;
  var H1 = kotlin_org_jetbrains_compose_html_html_core.$_$.n5;
  var P = kotlin_org_jetbrains_compose_html_html_core.$_$.v5;
  var HorizontalDivider = kotlin_com_varabyte_kobweb_silk_widgets.$_$.h;
  var H2 = kotlin_org_jetbrains_compose_html_html_core.$_$.o5;
  var H3 = kotlin_org_jetbrains_compose_html_html_core.$_$.p5;
  var H4 = kotlin_org_jetbrains_compose_html_html_core.$_$.q5;
  var Ul = kotlin_org_jetbrains_compose_html_html_core.$_$.a6;
  var Pre = kotlin_org_jetbrains_compose_html_html_core.$_$.u5;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var ObjectSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var objectCreate = kotlin_kotlin.$_$.ec;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.i;
  var lazy = kotlin_kotlin.$_$.hh;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var hashCode = kotlin_kotlin.$_$.fb;
  var equals = kotlin_kotlin.$_$.ya;
  var classMeta = kotlin_kotlin.$_$.va;
  var getStringHashCode = kotlin_kotlin.$_$.eb;
  var JsonContentPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.b;
  var getKClass = kotlin_kotlin.$_$.e;
  var get_jsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.c;
  var Map = kotlin_kotlin.$_$.r5;
  var isInterface = kotlin_kotlin.$_$.qb;
  var THROW_IAE = kotlin_kotlin.$_$.kg;
  var enumEntries = kotlin_kotlin.$_$.ka;
  var Enum = kotlin_kotlin.$_$.yf;
  var interfaceMeta = kotlin_kotlin.$_$.hb;
  var EnumSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var DoubleSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var BooleanSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var getNumberHashCode = kotlin_kotlin.$_$.cb;
  var getBooleanHashCode = kotlin_kotlin.$_$.ab;
  var ColorMode_LIGHT_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.s1;
  var SilkApp = kotlin_com_varabyte_kobweb_kobweb_silk.$_$.a;
  var CoroutineImpl = kotlin_kotlin.$_$.ga;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var Companion_getInstance_1 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.v1;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k;
  var get_SmoothColorStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.l;
  var toModifier = kotlin_com_varabyte_kobweb_silk_foundation.$_$.x;
  var get_vh = kotlin_org_jetbrains_compose_html_html_core.$_$.e5;
  var minHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y1;
  var Companion_getInstance_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i3;
  var scrollBehavior = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p2;
  var Surface = kotlin_com_varabyte_kobweb_silk_widgets.$_$.j;
  var SuspendFunction1 = kotlin_kotlin.$_$.ha;
  var registerStyleBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d1;
  var get_HorizontalDividerStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.g;
  var modifyComponentStyleBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k1;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.v3;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.jh;
  var Companion_getInstance_3 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u3;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g1;
  var fontWeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i1;
  var Companion_getInstance_4 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j3;
  var textAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u2;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.z4;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k2;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.x4;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p;
  var ButtonVars_getInstance = kotlin_com_varabyte_kobweb_silk_widgets.$_$.v;
  var Colors_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l3;
  var setVariable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r2;
  var fontFamily = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f1;
  var lineHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p1;
  var fillMaxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d1;
  var KProperty0 = kotlin_kotlin.$_$.bd;
  var getPropertyCallableRef = kotlin_kotlin.$_$.db;
  var Companion_getInstance_5 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.u1;
  var base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o;
  var get_ButtonStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.a;
  var addVariantBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k;
  var Companion_getInstance_6 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k3;
  var set_background = kotlin_com_varabyte_kobweb_silk_widgets.$_$.r;
  var set_color = kotlin_com_varabyte_kobweb_silk_widgets.$_$.t;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w1;
  var margin_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v1;
  var Companion_getInstance_7 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b3;
  var fontWeight_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h1;
  var Companion_getInstance_8 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h3;
  var overflowWrap = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f2;
  var toPalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h1;
  var get_color = kotlin_com_varabyte_kobweb_silk_widgets.$_$.s;
  var Companion_getInstance_9 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g3;
  var Companion_getInstance_10 = kotlin_org_jetbrains_compose_html_html_core.$_$.k;
  var display = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a1;
  var backgroundColor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l;
  var Companion_getInstance_11 = kotlin_org_jetbrains_compose_html_html_core.$_$.n;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s;
  var overflow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g2;
  var fillMaxSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c1;
  var Start_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r3;
  var Column = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b;
  var ComponentStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h;
  var gridTemplateRows = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m1;
  var Center_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p3;
  var Box = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a;
  var Breakpoint_MD_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n1;
  var padding_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l2;
  var maxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x1;
  var get_fr = kotlin_org_jetbrains_compose_html_html_core.$_$.d4;
  var CenterHorizontally_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n3;
  var gridRow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k1;
  var Row = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c;
  var margin_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t1;
  var Color_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.j;
  var Color = kotlin_org_jetbrains_compose_html_html_core.$_$.w2;
  var boxShadow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v;
  var padding_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m2;
  var SpanText = kotlin_com_varabyte_kobweb_silk_foundation.$_$.z;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g3;
  var Span = kotlin_org_jetbrains_compose_html_html_core.$_$.w5;
  var get_ColorVar = kotlin_com_varabyte_kobweb_silk_widgets.$_$.n;
  var get_UncoloredLinkVariant = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.d;
  var Link_0 = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.c;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var rememberBreakpoint = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e1;
  var CenterVertically_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o3;
  var Center_getInstance_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i3;
  var OverlayVars_getInstance = kotlin_com_varabyte_kobweb_silk_widgets.$_$.w;
  var onClick = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c2;
  var Overlay = kotlin_com_varabyte_kobweb_silk_widgets.$_$.k;
  var HamburgerIcon = kotlin_com_varabyte_kobweb_silk_widgets.$_$.d;
  var CloseIcon = kotlin_com_varabyte_kobweb_silk_widgets.$_$.c;
  var Circle = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e2;
  var Line = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g2;
  var Stroke = kotlin_com_varabyte_kobweb_silk_widgets.$_$.e;
  var createIcon = kotlin_com_varabyte_kobweb_silk_widgets.$_$.f;
  var gap = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j1;
  var displayIfAtLeast = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d;
  var KMutableProperty0 = kotlin_kotlin.$_$.zc;
  var THROW_ISE = kotlin_kotlin.$_$.lg;
  var getLocalDelegateReference = kotlin_kotlin.$_$.bb;
  var translateX = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z2;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d3;
  var Image = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.a;
  var thenIf = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f3;
  var displayUntil = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e;
  var padding_2 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j2;
  var End_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q3;
  var fillMaxHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b1;
  var clamp = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b;
  var CenterEnd_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m3;
  var get_ms = kotlin_org_jetbrains_compose_html_html_core.$_$.u4;
  var Companion_getInstance_12 = kotlin_org_jetbrains_compose_html_html_core.$_$.g;
  var Companion_getInstance_13 = kotlin_org_jetbrains_compose_html_html_core.$_$.e;
  var Companion_getInstance_14 = kotlin_org_jetbrains_compose_html_html_core.$_$.f;
  var toAnimation = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c;
  var animation = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h;
  var borderRadius_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o;
  var onAnimationEnd = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b2;
  var Keyframes = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a;
  var get_em = kotlin_org_jetbrains_compose_html_html_core.$_$.x3;
  var Button = kotlin_com_varabyte_kobweb_silk_widgets.$_$.b;
  var marginInline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s1;
  var marginBlock = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r1;
  var borderRadius_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q;
  var Spacer = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d;
  var margin_2 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u1;
  var get_api = kotlin_com_varabyte_kobweb_kobweb_core.$_$.a;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.r9;
  var decodeToString = kotlin_kotlin.$_$.nd;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.m1;
  var Default_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var List = kotlin_kotlin.$_$.p5;
  var arrayOf = kotlin_kotlin.$_$.yg;
  var createKType = kotlin_kotlin.$_$.b;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.a;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k2;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var println = kotlin_kotlin.$_$.la;
  var Exception = kotlin_kotlin.$_$.ag;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var emptyList = kotlin_kotlin.$_$.e7;
  var listOf = kotlin_kotlin.$_$.c8;
  var ResponsiveValues = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g;
  var SimpleGrid = kotlin_com_varabyte_kobweb_silk_widgets.$_$.i;
  var toString = kotlin_kotlin.$_$.rh;
  var get_http = kotlin_com_varabyte_kobweb_browser_ext.$_$.a;
  var toString_0 = kotlin_kotlin.$_$.lc;
  var rememberPageContext = kotlin_com_varabyte_kobweb_kobweb_core.$_$.d;
  var LG_getInstance = kotlin_com_varabyte_kobweb_silk_widgets.$_$.u;
  var height = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n1;
  var checkIndexOverflow = kotlin_kotlin.$_$.l6;
  var get_lastIndex = kotlin_kotlin.$_$.w7;
  var encodeToByteArray = kotlin_kotlin.$_$.qd;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.n4;
  var toDouble = kotlin_kotlin.$_$.cf;
  var toBoolean = kotlin_kotlin.$_$.af;
  var replace = kotlin_kotlin.$_$.ke;
  var outline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e2;
  var IntRange = kotlin_kotlin.$_$.qc;
  var substring = kotlin_kotlin.$_$.xe;
  var isCharSequence = kotlin_kotlin.$_$.mb;
  var replaceRange = kotlin_kotlin.$_$.je;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.e1;
  var charSequenceLength = kotlin_kotlin.$_$.ta;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt', objectMeta);
  setMetadataFor(ComposableSingletons$AboutKt, 'ComposableSingletons$AboutKt', objectMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor($serializer, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor($serializer_0, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(ApiListResponse, 'ApiListResponse', classMeta, VOID, VOID, VOID, VOID, {0: ApiListResponseSerializer_getInstance});
  setMetadataFor(Idle, 'Idle', objectMeta, ApiListResponse, [ApiListResponse, SerializerFactory], VOID, VOID, {0: Idle_getInstance});
  setMetadataFor(Success, 'Success', classMeta, ApiListResponse, VOID, VOID, VOID, {0: $serializer_getInstance});
  setMetadataFor(Error_0, 'Error', classMeta, ApiListResponse, VOID, VOID, VOID, {0: $serializer_getInstance_0});
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor($serializer_1, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor($serializer_2, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(ApiResponse, 'ApiResponse', classMeta, VOID, VOID, VOID, VOID, {0: ApiResponseSerializer_getInstance});
  setMetadataFor(Idle_0, 'Idle', objectMeta, ApiResponse, [ApiResponse, SerializerFactory], VOID, VOID, {0: Idle_getInstance_0});
  setMetadataFor(Success_0, 'Success', classMeta, ApiResponse, VOID, VOID, VOID, {0: $serializer_getInstance_1});
  setMetadataFor(Error_1, 'Error', classMeta, ApiResponse, VOID, VOID, VOID, {0: $serializer_getInstance_2});
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(ApiListResponseSerializer, 'ApiListResponseSerializer', objectMeta, JsonContentPolymorphicSerializer);
  setMetadataFor(ApiResponseSerializer, 'ApiResponseSerializer', objectMeta, JsonContentPolymorphicSerializer);
  setMetadataFor(CategoryColor, 'CategoryColor', interfaceMeta);
  setMetadataFor(Category, 'Category', classMeta, Enum, [Enum, CategoryColor]);
  setMetadataFor(Category$Technology, 'Technology', classMeta, Category);
  setMetadataFor(Category$Programming, 'Programming', classMeta, Category);
  setMetadataFor(Category$Design, 'Design', classMeta, Category);
  setMetadataFor(Constants, 'Constants', objectMeta);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor($serializer_3, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Newsletter, 'Newsletter', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_3});
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor($serializer_4, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Post, 'Post', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_4});
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor($serializer_5, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(PostWithoutDetails, 'PostWithoutDetails', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_5});
  setMetadataFor(User, 'User', classMeta, VOID, VOID, User);
  setMetadataFor(UserWithoutPassword, 'UserWithoutPassword', classMeta, VOID, VOID, UserWithoutPassword);
  setMetadataFor(AppEntry$lambda$slambda, 'AppEntry$lambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(SitePalette, 'SitePalette', classMeta);
  setMetadataFor(SitePalettes, 'SitePalettes', objectMeta);
  setMetadataFor(PageLayout$slambda, 'PageLayout$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(ComposableSingletons$PostPageLayoutKt, 'ComposableSingletons$PostPageLayoutKt', objectMeta);
  setMetadataFor(PostPageLayout$slambda, 'PostPageLayout$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(ComposableSingletons$FooterKt, 'ComposableSingletons$FooterKt', objectMeta);
  setMetadataFor(SideMenuState, 'SideMenuState', classMeta, Enum);
  setMetadataFor(ComposableSingletons$NavHeaderKt, 'ComposableSingletons$NavHeaderKt', objectMeta);
  setMetadataFor(ComposableSingletons$PopularArticleItemKt, 'ComposableSingletons$PopularArticleItemKt', objectMeta);
  setMetadataFor($getPostsCOROUTINE$0, '$getPostsCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(ControlStyle, 'ControlStyle', classMeta);
  setMetadataFor(Bold, 'Bold', classMeta, ControlStyle);
  setMetadataFor(Italic, 'Italic', classMeta, ControlStyle);
  setMetadataFor(Link_1, 'Link', classMeta, ControlStyle);
  setMetadataFor(Title, 'Title', classMeta, ControlStyle);
  setMetadataFor(Subtitle, 'Subtitle', classMeta, ControlStyle);
  setMetadataFor(Quote, 'Quote', classMeta, ControlStyle);
  setMetadataFor(Code_0, 'Code', classMeta, ControlStyle);
  setMetadataFor(Image_0, 'Image', classMeta, ControlStyle);
  setMetadataFor(Break, 'Break', classMeta, ControlStyle);
  setMetadataFor(EditorControl, 'EditorControl', classMeta, Enum);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor($serializer_6, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(RandomJoke, 'RandomJoke', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_6});
  setMetadataFor(PopularArticle, 'PopularArticle', classMeta);
  setMetadataFor(ComposableSingletons$IndexKt, 'ComposableSingletons$IndexKt', objectMeta);
  setMetadataFor(HomePage$slambda, 'HomePage$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor($checkUserExistenceCOROUTINE$1, '$checkUserExistenceCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor($checkUserIdCOROUTINE$2, '$checkUserIdCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor($fetchRandomJokeCOROUTINE$3, '$fetchRandomJokeCOROUTINE$3', classMeta, CoroutineImpl);
  setMetadataFor($addPostCOROUTINE$4, '$addPostCOROUTINE$4', classMeta, CoroutineImpl);
  setMetadataFor($updatePostCOROUTINE$5, '$updatePostCOROUTINE$5', classMeta, CoroutineImpl);
  setMetadataFor($fetchMyPostsCOROUTINE$6, '$fetchMyPostsCOROUTINE$6', classMeta, CoroutineImpl);
  setMetadataFor($fetchMainPostsCOROUTINE$7, '$fetchMainPostsCOROUTINE$7', classMeta, CoroutineImpl);
  setMetadataFor($fetchLatestPostsCOROUTINE$8, '$fetchLatestPostsCOROUTINE$8', classMeta, CoroutineImpl);
  setMetadataFor($fetchSponsoredPostsCOROUTINE$9, '$fetchSponsoredPostsCOROUTINE$9', classMeta, CoroutineImpl);
  setMetadataFor($fetchPopularPostsCOROUTINE$10, '$fetchPopularPostsCOROUTINE$10', classMeta, CoroutineImpl);
  setMetadataFor($deleteSelectedPostsCOROUTINE$11, '$deleteSelectedPostsCOROUTINE$11', classMeta, CoroutineImpl);
  setMetadataFor($searchPostsByTitleCOROUTINE$12, '$searchPostsByTitleCOROUTINE$12', classMeta, CoroutineImpl);
  setMetadataFor($searchPostsByCategoryCOROUTINE$13, '$searchPostsByCategoryCOROUTINE$13', classMeta, CoroutineImpl);
  setMetadataFor($fetchSelectedPostCOROUTINE$14, '$fetchSelectedPostCOROUTINE$14', classMeta, CoroutineImpl);
  setMetadataFor($subscribeToNewsletterCOROUTINE$15, '$subscribeToNewsletterCOROUTINE$15', classMeta, CoroutineImpl);
  setMetadataFor(Constants_0, 'Constants', objectMeta);
  setMetadataFor(Image_1, 'Image', objectMeta);
  setMetadataFor(Icon, 'Icon', objectMeta);
  setMetadataFor(PathIcon, 'PathIcon', objectMeta);
  setMetadataFor(Res, 'Res', objectMeta);
  setMetadataFor(Id, 'Id', objectMeta);
  setMetadataFor(isUserLoggedIn$slambda, 'isUserLoggedIn$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  //endregion
  function main() {
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
    renderComposable('root', ComposableLambda$invoke$ref_4(composableLambdaInstance(1108811911, true, main$lambda_2(router))));
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
        traceEventStart(-994802423, $changed, -1, 'ComposableSingletons$MainKt.lambda-1.<anonymous> (main.kt:15)');
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
        traceEventStart(-1296252800, $changed, -1, 'ComposableSingletons$MainKt.lambda-2.<anonymous> (main.kt:16)');
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
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_3$lambda_ezu85n($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(197659649, $changed, -1, 'ComposableSingletons$MainKt.lambda-3.<anonymous> (main.kt:17)');
      }
      PostPage($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_4$lambda_r7ncra(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(it) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1940211355, $dirty, -1, 'ComposableSingletons$MainKt.lambda-4.<anonymous> (main.kt:56)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ComposableSingletons$MainKt.lambda-4.<anonymous>.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, 2103839155, true, ComposableSingletons$MainKt$lambda_4$lambda$lambda_tu4lbz(it));
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
        // Inline function 'ComposableSingletons$MainKt.lambda-4.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_3(dispatchReceiver);
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
  function ComposableSingletons$MainKt$lambda_4$lambda$lambda_tu4lbz($it) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(2103839155, $changed, -1, 'ComposableSingletons$MainKt.lambda-4.<anonymous>.<anonymous> (main.kt:56)');
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
  function ComposableLambda$invoke$ref_3($boundThis) {
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
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(197659649, false, ComposableSingletons$MainKt$lambda_3$lambda_ezu85n));
    var tmp_2 = this;
    tmp_2.lambda_4_r8sbbm_1 = ComposableLambda$invoke$ref_2(composableLambdaInstance(1940211355, false, ComposableSingletons$MainKt$lambda_4$lambda_r7ncra));
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
  protoOf(ComposableSingletons$MainKt).get_lambda_4_bzdzzr_k$ = function () {
    return this.lambda_4_r8sbbm_1;
  };
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function main$lambda(ctx) {
    ctx.get_router_j3zccy_k$().register$default_rn243d_k$('/', VOID, ComposableSingletons$MainKt_getInstance().lambda_1_r8sbbp_1);
    ctx.get_router_j3zccy_k$().register$default_rn243d_k$('/about', VOID, ComposableSingletons$MainKt_getInstance().lambda_2_r8sbbo_1);
    ctx.get_router_j3zccy_k$().register$default_rn243d_k$('/post', VOID, ComposableSingletons$MainKt_getInstance().lambda_3_r8sbbn_1);
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
    ctx.get_theme_iz24rk_k$().registerComponentStyle_covb7k_k$(get_PostPageContentStyle());
    ctx.get_theme_iz24rk_k$().registerComponentStyle_covb7k_k$(get_FooterStyle());
    ctx.get_theme_iz24rk_k$().registerComponentStyle_covb7k_k$(get_NavHeaderStyle());
    ctx.get_theme_iz24rk_k$().registerComponentVariants_gvd8pt_k$([get_CircleButtonVariant()]);
    ctx.get_theme_iz24rk_k$().registerComponentVariants_gvd8pt_k$([get_UncoloredButtonVariant()]);
    registerKeyframes(ctx.get_stylesheet_hk204p_k$(), get_SideMenuSlideInAnim());
    initColorMode(ctx);
    initSiteStyles(ctx);
    initTheme(ctx);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
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
          traceEventStart(-1190994075, $changed, -1, 'main.<anonymous>.<anonymous> (main.kt:56)');
        }
        $router.renderActivePage_fc13h0_k$(ComposableSingletons$MainKt_getInstance().lambda_4_r8sbbm_1, $composer_0, 70, 0);
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
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function main$lambda_2($router) {
    return function ($this$renderComposable, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1108811911, $changed, -1, 'main.<anonymous> (main.kt:55)');
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
        var value = ComposableLambda$invoke$ref_5(dispatchReceiver);
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
  function ComposableLambda$invoke$ref_6($boundThis) {
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
  function ComposableLambda$invoke$ref_7($boundThis) {
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
  function ComposableLambda$invoke$ref_8($boundThis) {
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
  function ComposableLambda$invoke$ref_9($boundThis) {
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
  function ComposableLambda$invoke$ref_10($boundThis) {
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
  function ComposableLambda$invoke$ref_11($boundThis) {
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
  function ComposableLambda$invoke$ref_12($boundThis) {
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
  function ComposableLambda$invoke$ref_13($boundThis) {
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
  function ComposableLambda$invoke$ref_14($boundThis) {
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
  function ComposableLambda$invoke$ref_15($boundThis) {
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
  function ComposableLambda$invoke$ref_16($boundThis) {
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
  function ComposableLambda$invoke$ref_17($boundThis) {
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
  function ComposableLambda$invoke$ref_18($boundThis) {
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
  function ComposableLambda$invoke$ref_19($boundThis) {
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
  function ComposableLambda$invoke$ref_20($boundThis) {
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
  function ComposableLambda$invoke$ref_21($boundThis) {
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
  function ComposableLambda$invoke$ref_22($boundThis) {
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
  function ComposableLambda$invoke$ref_23($boundThis) {
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
  function ComposableLambda$invoke$ref_24($boundThis) {
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
  function ComposableLambda$invoke$ref_25($boundThis) {
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
  function ComposableLambda$invoke$ref_26($boundThis) {
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
  function ComposableLambda$invoke$ref_27($boundThis) {
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
  function ComposableLambda$invoke$ref_28($boundThis) {
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
  function ComposableLambda$invoke$ref_29($boundThis) {
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
  function ComposableLambda$invoke$ref_30($boundThis) {
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
  function ComposableLambda$invoke$ref_31($boundThis) {
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
  function ComposableLambda$invoke$ref_32($boundThis) {
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
  function ComposableLambda$invoke$ref_33($boundThis) {
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
  function ComposableLambda$invoke$ref_34($boundThis) {
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
  function ComposableLambda$invoke$ref_35($boundThis) {
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
  function ComposableLambda$invoke$ref_36($boundThis) {
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
  function ComposableLambda$invoke$ref_37($boundThis) {
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
  function ComposableLambda$invoke$ref_38($boundThis) {
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
  function ComposableLambda$invoke$ref_39($boundThis) {
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
  function ComposableLambda$invoke$ref_40($boundThis) {
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
  function ComposableLambda$invoke$ref_41($boundThis) {
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
  function ComposableLambda$invoke$ref_42($boundThis) {
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
  function ComposableLambda$invoke$ref_43($boundThis) {
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
  function ComposableLambda$invoke$ref_44($boundThis) {
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
  function ComposableLambda$invoke$ref_45($boundThis) {
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
  function ComposableLambda$invoke$ref_46($boundThis) {
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
  function ComposableLambda$invoke$ref_47($boundThis) {
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
  function ComposableLambda$invoke$ref_48($boundThis) {
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
  function ComposableLambda$invoke$ref_49($boundThis) {
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
  function ComposableLambda$invoke$ref_50($boundThis) {
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
  function ComposableLambda$invoke$ref_51($boundThis) {
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
  function ComposableLambda$invoke$ref_52($boundThis) {
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
  function ComposableLambda$invoke$ref_53($boundThis) {
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
  function ComposableLambda$invoke$ref_54($boundThis) {
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
  function ComposableLambda$invoke$ref_55($boundThis) {
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
  function ComposableLambda$invoke$ref_56($boundThis) {
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
  function ComposableLambda$invoke$ref_57($boundThis) {
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
  function ComposableLambda$invoke$ref_58($boundThis) {
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
  function ComposableLambda$invoke$ref_59($boundThis) {
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
  function ComposableLambda$invoke$ref_60($boundThis) {
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
  function ComposableLambda$invoke$ref_61($boundThis) {
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
  function ComposableLambda$invoke$ref_62($boundThis) {
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
  function ComposableLambda$invoke$ref_63($boundThis) {
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
  function ComposableLambda$invoke$ref_64($boundThis) {
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
  function ComposableLambda$invoke$ref_65($boundThis) {
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
  function ComposableLambda$invoke$ref_66($boundThis) {
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
  function ComposableLambda$invoke$ref_67($boundThis) {
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
  function ComposableLambda$invoke$ref_68($boundThis) {
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
  function ComposableLambda$invoke$ref_69($boundThis) {
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
  function ComposableLambda$invoke$ref_70($boundThis) {
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
  function ComposableLambda$invoke$ref_71($boundThis) {
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
  function ComposableLambda$invoke$ref_72($boundThis) {
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
  function ComposableLambda$invoke$ref_73($boundThis) {
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
  function ComposableLambda$invoke$ref_74($boundThis) {
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
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_6(composableLambdaInstance(655888299, false, ComposableSingletons$AboutKt$lambda_1$lambda_irurs3));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_7(composableLambdaInstance(443045834, false, ComposableSingletons$AboutKt$lambda_2$lambda_nfmt4u));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_8(composableLambdaInstance(1882134090, false, ComposableSingletons$AboutKt$lambda_3$lambda_5dznxd));
    var tmp_2 = this;
    tmp_2.lambda_4_r8sbbm_1 = ComposableLambda$invoke$ref_9(composableLambdaInstance(574934067, false, ComposableSingletons$AboutKt$lambda_4$lambda_y7m4zk));
    var tmp_3 = this;
    tmp_3.lambda_5_r8sbbl_1 = ComposableLambda$invoke$ref_10(composableLambdaInstance(-1186587415, false, ComposableSingletons$AboutKt$lambda_5$lambda_7zvfxd));
    var tmp_4 = this;
    tmp_4.lambda_6_r8sbbk_1 = ComposableLambda$invoke$ref_11(composableLambdaInstance(39658376, false, ComposableSingletons$AboutKt$lambda_6$lambda_ktr14u));
    var tmp_5 = this;
    tmp_5.lambda_7_r8sbbj_1 = ComposableLambda$invoke$ref_12(composableLambdaInstance(-1055744463, false, ComposableSingletons$AboutKt$lambda_7$lambda_ldqjs3));
    var tmp_6 = this;
    tmp_6.lambda_8_r8sbbi_1 = ComposableLambda$invoke$ref_13(composableLambdaInstance(1801179858, false, ComposableSingletons$AboutKt$lambda_8$lambda_7fvxa4));
    var tmp_7 = this;
    tmp_7.lambda_9_r8sbbh_1 = ComposableLambda$invoke$ref_14(composableLambdaInstance(-533356431, false, ComposableSingletons$AboutKt$lambda_9$lambda_yrlnmt));
    var tmp_8 = this;
    tmp_8.lambda_10_7sywo5__1 = ComposableLambda$invoke$ref_15(composableLambdaInstance(-1267541647, false, ComposableSingletons$AboutKt$lambda_10$lambda_i5qkjn));
    var tmp_9 = this;
    tmp_9.lambda_11_7sywo6__1 = ComposableLambda$invoke$ref_16(composableLambdaInstance(692889360, false, ComposableSingletons$AboutKt$lambda_11$lambda_o1r0da));
    var tmp_10 = this;
    tmp_10.lambda_12_7sywo7__1 = ComposableLambda$invoke$ref_17(composableLambdaInstance(-41295856, false, ComposableSingletons$AboutKt$lambda_12$lambda_4rvgox));
    var tmp_11 = this;
    tmp_11.lambda_13_7sywo8__1 = ComposableLambda$invoke$ref_18(composableLambdaInstance(1919135151, false, ComposableSingletons$AboutKt$lambda_13$lambda_xlhxr4));
    var tmp_12 = this;
    tmp_12.lambda_14_7sywo9__1 = ComposableLambda$invoke$ref_19(composableLambdaInstance(1184949935, false, ComposableSingletons$AboutKt$lambda_14$lambda_8lzn5t));
    var tmp_13 = this;
    tmp_13.lambda_15_7sywoa_1 = ComposableLambda$invoke$ref_20(composableLambdaInstance(672559373, false, ComposableSingletons$AboutKt$lambda_15$lambda_k7mtwe));
    var tmp_14 = this;
    tmp_14.lambda_16_7sywob_1 = ComposableLambda$invoke$ref_21(composableLambdaInstance(1697742766, false, ComposableSingletons$AboutKt$lambda_16$lambda_lzur0j));
    var tmp_15 = this;
    tmp_15.lambda_17_7sywoc_1 = ComposableLambda$invoke$ref_22(composableLambdaInstance(1820169028, false, ComposableSingletons$AboutKt$lambda_17$lambda_6trq1o));
    var tmp_16 = this;
    tmp_16.lambda_18_7sywod_1 = ComposableLambda$invoke$ref_23(composableLambdaInstance(-821068379, false, ComposableSingletons$AboutKt$lambda_18$lambda_zdpuv9));
    var tmp_17 = this;
    tmp_17.lambda_19_7sywoe_1 = ComposableLambda$invoke$ref_24(composableLambdaInstance(1116306053, false, ComposableSingletons$AboutKt$lambda_19$lambda_6k3dt2));
    var tmp_18 = this;
    tmp_18.lambda_20_7sywp0__1 = ComposableLambda$invoke$ref_25(composableLambdaInstance(-1524931354, false, ComposableSingletons$AboutKt$lambda_20$lambda_bqdg8s));
    var tmp_19 = this;
    tmp_19.lambda_21_7sywp1__1 = ComposableLambda$invoke$ref_26(composableLambdaInstance(245760669, false, ComposableSingletons$AboutKt$lambda_21$lambda_h390tf));
    var tmp_20 = this;
    tmp_20.lambda_22_7sywp2__1 = ComposableLambda$invoke$ref_27(composableLambdaInstance(-1149586354, false, ComposableSingletons$AboutKt$lambda_22$lambda_p48k3i));
    var tmp_21 = this;
    tmp_21.lambda_23_7sywp3__1 = ComposableLambda$invoke$ref_28(composableLambdaInstance(-445728595, false, ComposableSingletons$AboutKt$lambda_23$lambda_3pdwyp));
    var tmp_22 = this;
    tmp_22.lambda_24_7sywp4__1 = ComposableLambda$invoke$ref_29(composableLambdaInstance(1296049558, false, ComposableSingletons$AboutKt$lambda_24$lambda_wj0e0w));
    var tmp_23 = this;
    tmp_23.lambda_25_7sywp5__1 = ComposableLambda$invoke$ref_30(composableLambdaInstance(951133813, false, ComposableSingletons$AboutKt$lambda_25$lambda_9oh6w1));
    var tmp_24 = this;
    tmp_24.lambda_26_7sywp6__1 = ComposableLambda$invoke$ref_31(composableLambdaInstance(-1883771570, false, ComposableSingletons$AboutKt$lambda_26$lambda_j55a66));
    var tmp_25 = this;
    tmp_25.lambda_27_7sywp7__1 = ComposableLambda$invoke$ref_32(composableLambdaInstance(76659437, false, ComposableSingletons$AboutKt$lambda_27$lambda_n2caqr));
    var tmp_26 = this;
    tmp_26.lambda_28_7sywp8__1 = ComposableLambda$invoke$ref_33(composableLambdaInstance(2094112950, false, ComposableSingletons$AboutKt$lambda_28$lambda_5ra6bg));
    var tmp_27 = this;
    tmp_27.lambda_29_7sywp9__1 = ComposableLambda$invoke$ref_34(composableLambdaInstance(-547124457, false, ComposableSingletons$AboutKt$lambda_29$lambda_ykwndn));
    var tmp_28 = this;
    tmp_28.lambda_30_7sywpv_1 = ComposableLambda$invoke$ref_35(composableLambdaInstance(1140396333, false, ComposableSingletons$AboutKt$lambda_30$lambda_temkxx));
    var tmp_29 = this;
    tmp_29.lambda_31_7sywpw_1 = ComposableLambda$invoke$ref_36(composableLambdaInstance(1236920142, false, ComposableSingletons$AboutKt$lambda_31$lambda_csuzz0));
    var tmp_30 = this;
    tmp_30.lambda_32_7sywpx_1 = ComposableLambda$invoke$ref_37(composableLambdaInstance(-37548474, false, ComposableSingletons$AboutKt$lambda_32$lambda_g0rh37));
    var tmp_31 = this;
    tmp_31.lambda_33_7sywpy_1 = ComposableLambda$invoke$ref_38(composableLambdaInstance(-2134522478, false, ComposableSingletons$AboutKt$lambda_33$lambda_q6q3tq));
    var tmp_32 = this;
    tmp_32.lambda_34_7sywpz_1 = ComposableLambda$invoke$ref_39(composableLambdaInstance(-657525779, false, ComposableSingletons$AboutKt$lambda_34$lambda_2mwd8h));
    var tmp_33 = this;
    tmp_33.lambda_35_7sywq0__1 = ComposableLambda$invoke$ref_40(composableLambdaInstance(1302905228, false, ComposableSingletons$AboutKt$lambda_35$lambda_vgiuao));
    var tmp_34 = this;
    tmp_34.lambda_36_7sywq1__1 = ComposableLambda$invoke$ref_41(composableLambdaInstance(2006762987, false, ComposableSingletons$AboutKt$lambda_36$lambda_aqyqm9));
    var tmp_35 = this;
    tmp_35.lambda_37_7sywq2__1 = ComposableLambda$invoke$ref_42(composableLambdaInstance(568720012, false, ComposableSingletons$AboutKt$lambda_37$lambda_i2nqfy));
    var tmp_36 = this;
    tmp_36.lambda_38_7sywq3__1 = ComposableLambda$invoke$ref_43(composableLambdaInstance(-1765816277, false, ComposableSingletons$AboutKt$lambda_38$lambda_o4tugz));
    var tmp_37 = this;
    tmp_37.lambda_39_7sywq4__1 = ComposableLambda$invoke$ref_44(composableLambdaInstance(-1061958518, false, ComposableSingletons$AboutKt$lambda_39$lambda_4osml8));
    var tmp_38 = this;
    tmp_38.lambda_40_7sywqq_1 = ComposableLambda$invoke$ref_45(composableLambdaInstance(1794965803, false, ComposableSingletons$AboutKt$lambda_40$lambda_hhfui));
    var tmp_39 = this;
    tmp_39.lambda_41_7sywqr_1 = ComposableLambda$invoke$ref_46(composableLambdaInstance(-539570486, false, ComposableSingletons$AboutKt$lambda_41$lambda_sc517p));
    var tmp_40 = this;
    tmp_40.lambda_42_7sywqs_1 = ComposableLambda$invoke$ref_47(composableLambdaInstance(-1610511413, false, ComposableSingletons$AboutKt$lambda_42$lambda_dvcjp8));
    var tmp_41 = this;
    tmp_41.lambda_43_7sywqt_1 = ComposableLambda$invoke$ref_48(composableLambdaInstance(686675305, false, ComposableSingletons$AboutKt$lambda_43$lambda_ey9xcz));
    var tmp_42 = this;
    tmp_42.lambda_44_7sywqu_1 = ComposableLambda$invoke$ref_49(composableLambdaInstance(-384265622, false, ComposableSingletons$AboutKt$lambda_44$lambda_r97njy));
    var tmp_43 = this;
    tmp_43.lambda_45_7sywqv_1 = ComposableLambda$invoke$ref_50(composableLambdaInstance(559278771, false, ComposableSingletons$AboutKt$lambda_45$lambda_1keti9));
    var tmp_44 = this;
    tmp_44.lambda_46_7sywqw_1 = ComposableLambda$invoke$ref_51(composableLambdaInstance(1478401541, false, ComposableSingletons$AboutKt$lambda_46$lambda_ue1akg));
    var tmp_45 = this;
    tmp_45.lambda_47_7sywqx_1 = ComposableLambda$invoke$ref_52(composableLambdaInstance(841980169, false, ComposableSingletons$AboutKt$lambda_47$lambda_btgach));
    var tmp_46 = this;
    tmp_46.lambda_48_7sywqy_1 = ComposableLambda$invoke$ref_53(composableLambdaInstance(2068225960, false, ComposableSingletons$AboutKt$lambda_48$lambda_h066pq));
    var tmp_47 = this;
    tmp_47.lambda_49_7sywqz_1 = ComposableLambda$invoke$ref_54(composableLambdaInstance(-187836906, false, ComposableSingletons$AboutKt$lambda_49$lambda_p7be77));
    var tmp_48 = this;
    tmp_48.lambda_50_7sywrl_1 = ComposableLambda$invoke$ref_55(composableLambdaInstance(-1625879881, false, ComposableSingletons$AboutKt$lambda_50$lambda_udlgmx));
    var tmp_49 = this;
    tmp_49.lambda_51_7sywrm_1 = ComposableLambda$invoke$ref_56(composableLambdaInstance(-1000495545, false, ComposableSingletons$AboutKt$lambda_51$lambda_1jyzkq));
    var tmp_50 = this;
    tmp_50.lambda_52_7sywrn_1 = ComposableLambda$invoke$ref_57(composableLambdaInstance(1785524562, false, ComposableSingletons$AboutKt$lambda_52$lambda_r9nhhh));
    var tmp_51 = this;
    tmp_51.lambda_53_7sywro_1 = ComposableLambda$invoke$ref_58(composableLambdaInstance(225750246, false, ComposableSingletons$AboutKt$lambda_53$lambda_exu3fg));
    var tmp_52 = this;
    tmp_52.lambda_54_7sywrp_1 = ComposableLambda$invoke$ref_59(composableLambdaInstance(2088417409, false, ComposableSingletons$AboutKt$lambda_54$lambda_dvsdmr));
    var tmp_53 = this;
    tmp_53.lambda_55_7sywrq_1 = ComposableLambda$invoke$ref_60(composableLambdaInstance(223327736, false, ComposableSingletons$AboutKt$lambda_55$lambda_sbp7a6));
    var tmp_54 = this;
    tmp_54.lambda_56_7sywrr_1 = ComposableLambda$invoke$ref_61(composableLambdaInstance(940845651, false, ComposableSingletons$AboutKt$lambda_56$lambda_hx9s1));
    var tmp_55 = this;
    tmp_55.lambda_57_7sywrs_1 = ComposableLambda$invoke$ref_62(composableLambdaInstance(1451996037, false, ComposableSingletons$AboutKt$lambda_57$lambda_tbjqu8));
    var tmp_56 = this;
    tmp_56.lambda_58_7sywrt_1 = ComposableLambda$invoke$ref_63(composableLambdaInstance(-1616725468, false, ComposableSingletons$AboutKt$lambda_58$lambda_cvxu2p));
    var tmp_57 = this;
    tmp_57.lambda_59_7sywru_1 = ComposableLambda$invoke$ref_64(composableLambdaInstance(-112990337, false, ComposableSingletons$AboutKt$lambda_59$lambda_fxomzi));
    var tmp_58 = this;
    tmp_58.lambda_60_7sywsg_1 = ComposableLambda$invoke$ref_65(composableLambdaInstance(907180000, false, ComposableSingletons$AboutKt$lambda_60$lambda_arekjs));
    var tmp_59 = this;
    tmp_59.lambda_61_7sywsh_1 = ComposableLambda$invoke$ref_66(composableLambdaInstance(1239179588, false, ComposableSingletons$AboutKt$lambda_61$lambda_vg30d5));
    var tmp_60 = this;
    tmp_60.lambda_62_7sywsi_1 = ComposableLambda$invoke$ref_67(composableLambdaInstance(-390479677, false, ComposableSingletons$AboutKt$lambda_62$lambda_2mgjay));
    var tmp_61 = this;
    tmp_61.lambda_63_7sywsj_1 = ComposableLambda$invoke$ref_68(composableLambdaInstance(835766114, false, ComposableSingletons$AboutKt$lambda_63$lambda_q75xr9));
    var tmp_62 = this;
    tmp_62.lambda_64_7sywsk_1 = ComposableLambda$invoke$ref_69(composableLambdaInstance(1113255454, false, ComposableSingletons$AboutKt$lambda_64$lambda_g0bn5o));
    var tmp_63 = this;
    tmp_63.lambda_65_7sywsl_1 = ComposableLambda$invoke$ref_70(composableLambdaInstance(2133425791, false, ComposableSingletons$AboutKt$lambda_65$lambda_ctatwj));
    var tmp_64 = this;
    tmp_64.lambda_66_7sywsm_1 = ComposableLambda$invoke$ref_71(composableLambdaInstance(2043369740, false, ComposableSingletons$AboutKt$lambda_66$lambda_te6r0e));
    var tmp_65 = this;
    tmp_65.lambda_67_7sywsn_1 = ComposableLambda$invoke$ref_72(composableLambdaInstance(-1536502151, false, ComposableSingletons$AboutKt$lambda_67$lambda_kk9y7));
    var tmp_66 = this;
    tmp_66.lambda_68_7sywso_1 = ComposableLambda$invoke$ref_73(composableLambdaInstance(-1025351765, false, ComposableSingletons$AboutKt$lambda_68$lambda_s92740));
    var tmp_67 = this;
    tmp_67.lambda_69_7sywsp_1 = ComposableLambda$invoke$ref_74(composableLambdaInstance(1129324712, false, ComposableSingletons$AboutKt$lambda_69$lambda_dyfdsx));
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
  function _get_$cachedSerializer__te6jhj($this) {
    return $this.$cachedSerializer$delegate_1.get_value_j01efc_k$();
  }
  function ApiListResponse$Idle$_anonymous__yiluc8() {
    var tmp = Idle_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    return ObjectSerializer_init_$Create$('idle', tmp, tmp$ret$2);
  }
  function _get_$childSerializers__r2zwns($this) {
    return $this.$childSerializers_1;
  }
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.$childSerializers_1 = [new ArrayListSerializer($serializer_getInstance_5())];
  }
  protoOf(Companion).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance();
  };
  var Companion_instance;
  function Companion_getInstance_15() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('success', this, 1);
    tmp0_serialDesc.addElement_5pzumi_k$('data', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_15().$childSerializers_1[0]];
  };
  protoOf($serializer).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp6_cached = Companion_getInstance_15().$childSerializers_1;
    if (tmp5_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp5_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 0, tmp6_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 0, tmp6_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.endStructure_1xqz0n_k$(tmp0_desc);
    return Success_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer).serialize_x12w6p_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp2_cached = Companion_getInstance_15().$childSerializers_1;
    tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 0, tmp2_cached[0], value.data_1);
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_x12w6p_k$(encoder, value instanceof Success ? value : THROW_CCE());
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function Success_init_$Init$(seen1, data, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance().descriptor_1);
    }
    ApiListResponse.call($this);
    $this.data_1 = data;
    return $this;
  }
  function Success_init_$Create$(seen1, data, serializationConstructorMarker) {
    return Success_init_$Init$(seen1, data, serializationConstructorMarker, objectCreate(protoOf(Success)));
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_0();
  };
  var Companion_instance_0;
  function Companion_getInstance_16() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('error', this, 1);
    tmp0_serialDesc.addElement_5pzumi_k$('message', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_0).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  };
  protoOf($serializer_0).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp5_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp5_input.decodeStringElement_3oenpg_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.decodeStringElement_3oenpg_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.endStructure_1xqz0n_k$(tmp0_desc);
    return Error_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_0).serialize_sxwnre_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 0, value.message_1);
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_0).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_sxwnre_k$(encoder, value instanceof Error_0 ? value : THROW_CCE());
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function Error_init_$Init$(seen1, message, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_0().descriptor_1);
    }
    ApiListResponse.call($this);
    $this.message_1 = message;
    return $this;
  }
  function Error_init_$Create$(seen1, message, serializationConstructorMarker) {
    return Error_init_$Init$(seen1, message, serializationConstructorMarker, objectCreate(protoOf(Error_0)));
  }
  function Idle() {
    Idle_instance = this;
    ApiListResponse.call(this);
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.$cachedSerializer$delegate_1 = lazy(tmp_0, ApiListResponse$Idle$_anonymous__yiluc8);
  }
  protoOf(Idle).toString = function () {
    return 'Idle';
  };
  protoOf(Idle).hashCode = function () {
    return -1214139185;
  };
  protoOf(Idle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Idle))
      return false;
    other instanceof Idle || THROW_CCE();
    return true;
  };
  protoOf(Idle).serializer_9w0wvi_k$ = function () {
    return _get_$cachedSerializer__te6jhj(this);
  };
  protoOf(Idle).serializer_nv39qc_k$ = function (typeParamsSerializers) {
    return this.serializer_9w0wvi_k$();
  };
  var Idle_instance;
  function Idle_getInstance() {
    if (Idle_instance == null)
      new Idle();
    return Idle_instance;
  }
  function Success(data) {
    Companion_getInstance_15();
    ApiListResponse.call(this);
    this.data_1 = data;
  }
  protoOf(Success).get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  protoOf(Success).component1_7eebsc_k$ = function () {
    return this.data_1;
  };
  protoOf(Success).copy_jwxjyh_k$ = function (data) {
    return new Success(data);
  };
  protoOf(Success).copy$default_56hycg_k$ = function (data, $super) {
    data = data === VOID ? this.data_1 : data;
    return $super === VOID ? this.copy_jwxjyh_k$(data) : $super.copy_jwxjyh_k$.call(this, data);
  };
  protoOf(Success).toString = function () {
    return 'Success(data=' + this.data_1 + ')';
  };
  protoOf(Success).hashCode = function () {
    return hashCode(this.data_1);
  };
  protoOf(Success).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Success))
      return false;
    var tmp0_other_with_cast = other instanceof Success ? other : THROW_CCE();
    if (!equals(this.data_1, tmp0_other_with_cast.data_1))
      return false;
    return true;
  };
  function Error_0(message) {
    Companion_getInstance_16();
    ApiListResponse.call(this);
    this.message_1 = message;
  }
  protoOf(Error_0).get_message_h23axq_k$ = function () {
    return this.message_1;
  };
  protoOf(Error_0).component1_7eebsc_k$ = function () {
    return this.message_1;
  };
  protoOf(Error_0).copy_a35qlh_k$ = function (message) {
    return new Error_0(message);
  };
  protoOf(Error_0).copy$default_jf0yhj_k$ = function (message, $super) {
    message = message === VOID ? this.message_1 : message;
    return $super === VOID ? this.copy_a35qlh_k$(message) : $super.copy_a35qlh_k$.call(this, message);
  };
  protoOf(Error_0).toString = function () {
    return 'Error(message=' + this.message_1 + ')';
  };
  protoOf(Error_0).hashCode = function () {
    return getStringHashCode(this.message_1);
  };
  protoOf(Error_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Error_0))
      return false;
    var tmp0_other_with_cast = other instanceof Error_0 ? other : THROW_CCE();
    if (!(this.message_1 === tmp0_other_with_cast.message_1))
      return false;
    return true;
  };
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).serializer_9w0wvi_k$ = function () {
    return ApiListResponseSerializer_getInstance();
  };
  var Companion_instance_1;
  function Companion_getInstance_17() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function ApiListResponse() {
    Companion_getInstance_17();
  }
  function _get_$cachedSerializer__te6jhj_0($this) {
    return $this.$cachedSerializer$delegate_1.get_value_j01efc_k$();
  }
  function ApiResponse$Idle$_anonymous__9fg1y2() {
    var tmp = Idle_getInstance_0();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    return ObjectSerializer_init_$Create$('idle', tmp, tmp$ret$2);
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  protoOf(Companion_2).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_1();
  };
  var Companion_instance_2;
  function Companion_getInstance_18() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('success', this, 1);
    tmp0_serialDesc.addElement_5pzumi_k$('data', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_1).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [$serializer_getInstance_4()];
  };
  protoOf($serializer_1).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp5_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp5_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 0, $serializer_getInstance_4(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 0, $serializer_getInstance_4(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.endStructure_1xqz0n_k$(tmp0_desc);
    return Success_init_$Create$_0(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_1).serialize_ouy8ej_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 0, $serializer_getInstance_4(), value.data_1);
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_1).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_ouy8ej_k$(encoder, value instanceof Success_0 ? value : THROW_CCE());
  };
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null)
      new $serializer_1();
    return $serializer_instance_1;
  }
  function Success_init_$Init$_0(seen1, data, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_1().descriptor_1);
    }
    ApiResponse.call($this);
    $this.data_1 = data;
    return $this;
  }
  function Success_init_$Create$_0(seen1, data, serializationConstructorMarker) {
    return Success_init_$Init$_0(seen1, data, serializationConstructorMarker, objectCreate(protoOf(Success_0)));
  }
  function Companion_3() {
    Companion_instance_3 = this;
  }
  protoOf(Companion_3).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_2();
  };
  var Companion_instance_3;
  function Companion_getInstance_19() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function $serializer_2() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('error', this, 1);
    tmp0_serialDesc.addElement_5pzumi_k$('message', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_2).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  };
  protoOf($serializer_2).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp5_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp5_input.decodeStringElement_3oenpg_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.decodeStringElement_3oenpg_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.endStructure_1xqz0n_k$(tmp0_desc);
    return Error_init_$Create$_0(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_2).serialize_mhu8jq_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 0, value.message_1);
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_2).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_mhu8jq_k$(encoder, value instanceof Error_1 ? value : THROW_CCE());
  };
  var $serializer_instance_2;
  function $serializer_getInstance_2() {
    if ($serializer_instance_2 == null)
      new $serializer_2();
    return $serializer_instance_2;
  }
  function Error_init_$Init$_0(seen1, message, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_2().descriptor_1);
    }
    ApiResponse.call($this);
    $this.message_1 = message;
    return $this;
  }
  function Error_init_$Create$_0(seen1, message, serializationConstructorMarker) {
    return Error_init_$Init$_0(seen1, message, serializationConstructorMarker, objectCreate(protoOf(Error_1)));
  }
  function Idle_0() {
    Idle_instance_0 = this;
    ApiResponse.call(this);
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.$cachedSerializer$delegate_1 = lazy(tmp_0, ApiResponse$Idle$_anonymous__9fg1y2);
  }
  protoOf(Idle_0).toString = function () {
    return 'Idle';
  };
  protoOf(Idle_0).hashCode = function () {
    return 170281677;
  };
  protoOf(Idle_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Idle_0))
      return false;
    other instanceof Idle_0 || THROW_CCE();
    return true;
  };
  protoOf(Idle_0).serializer_9w0wvi_k$ = function () {
    return _get_$cachedSerializer__te6jhj_0(this);
  };
  protoOf(Idle_0).serializer_nv39qc_k$ = function (typeParamsSerializers) {
    return this.serializer_9w0wvi_k$();
  };
  var Idle_instance_0;
  function Idle_getInstance_0() {
    if (Idle_instance_0 == null)
      new Idle_0();
    return Idle_instance_0;
  }
  function Success_0(data) {
    Companion_getInstance_18();
    ApiResponse.call(this);
    this.data_1 = data;
  }
  protoOf(Success_0).get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  protoOf(Success_0).component1_7eebsc_k$ = function () {
    return this.data_1;
  };
  protoOf(Success_0).copy_8f5hsf_k$ = function (data) {
    return new Success_0(data);
  };
  protoOf(Success_0).copy$default_ms5sz8_k$ = function (data, $super) {
    data = data === VOID ? this.data_1 : data;
    return $super === VOID ? this.copy_8f5hsf_k$(data) : $super.copy_8f5hsf_k$.call(this, data);
  };
  protoOf(Success_0).toString = function () {
    return 'Success(data=' + this.data_1 + ')';
  };
  protoOf(Success_0).hashCode = function () {
    return this.data_1.hashCode();
  };
  protoOf(Success_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Success_0))
      return false;
    var tmp0_other_with_cast = other instanceof Success_0 ? other : THROW_CCE();
    if (!this.data_1.equals(tmp0_other_with_cast.data_1))
      return false;
    return true;
  };
  function Error_1(message) {
    Companion_getInstance_19();
    ApiResponse.call(this);
    this.message_1 = message;
  }
  protoOf(Error_1).get_message_h23axq_k$ = function () {
    return this.message_1;
  };
  protoOf(Error_1).component1_7eebsc_k$ = function () {
    return this.message_1;
  };
  protoOf(Error_1).copy_a35qlh_k$ = function (message) {
    return new Error_1(message);
  };
  protoOf(Error_1).copy$default_8bq4a1_k$ = function (message, $super) {
    message = message === VOID ? this.message_1 : message;
    return $super === VOID ? this.copy_a35qlh_k$(message) : $super.copy_a35qlh_k$.call(this, message);
  };
  protoOf(Error_1).toString = function () {
    return 'Error(message=' + this.message_1 + ')';
  };
  protoOf(Error_1).hashCode = function () {
    return getStringHashCode(this.message_1);
  };
  protoOf(Error_1).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Error_1))
      return false;
    var tmp0_other_with_cast = other instanceof Error_1 ? other : THROW_CCE();
    if (!(this.message_1 === tmp0_other_with_cast.message_1))
      return false;
    return true;
  };
  function Companion_4() {
    Companion_instance_4 = this;
  }
  protoOf(Companion_4).serializer_9w0wvi_k$ = function () {
    return ApiResponseSerializer_getInstance();
  };
  var Companion_instance_4;
  function Companion_getInstance_20() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function ApiResponse() {
    Companion_getInstance_20();
  }
  function ApiListResponseSerializer() {
    ApiListResponseSerializer_instance = this;
    JsonContentPolymorphicSerializer.call(this, getKClass(ApiListResponse));
  }
  protoOf(ApiListResponseSerializer).selectDeserializer_70cedr_k$ = function (element) {
    var tmp;
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = get_jsonObject(element);
    if ((isInterface(this_0, Map) ? this_0 : THROW_CCE()).containsKey_aw81wo_k$('data')) {
      tmp = Companion_getInstance_15().serializer_9w0wvi_k$();
    } else {
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var this_1 = get_jsonObject(element);
      if ((isInterface(this_1, Map) ? this_1 : THROW_CCE()).containsKey_aw81wo_k$('message')) {
        tmp = Companion_getInstance_16().serializer_9w0wvi_k$();
      } else {
        tmp = Idle_getInstance().serializer_9w0wvi_k$();
      }
    }
    return tmp;
  };
  var ApiListResponseSerializer_instance;
  function ApiListResponseSerializer_getInstance() {
    if (ApiListResponseSerializer_instance == null)
      new ApiListResponseSerializer();
    return ApiListResponseSerializer_instance;
  }
  function ApiResponseSerializer() {
    ApiResponseSerializer_instance = this;
    JsonContentPolymorphicSerializer.call(this, getKClass(ApiResponse));
  }
  protoOf(ApiResponseSerializer).selectDeserializer_70cedr_k$ = function (element) {
    var tmp;
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = get_jsonObject(element);
    if ((isInterface(this_0, Map) ? this_0 : THROW_CCE()).containsKey_aw81wo_k$('data')) {
      tmp = Companion_getInstance_18().serializer_9w0wvi_k$();
    } else {
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var this_1 = get_jsonObject(element);
      if ((isInterface(this_1, Map) ? this_1 : THROW_CCE()).containsKey_aw81wo_k$('message')) {
        tmp = Companion_getInstance_19().serializer_9w0wvi_k$();
      } else {
        tmp = Idle_getInstance_0().serializer_9w0wvi_k$();
      }
    }
    return tmp;
  };
  var ApiResponseSerializer_instance;
  function ApiResponseSerializer_getInstance() {
    if (ApiResponseSerializer_instance == null)
      new ApiResponseSerializer();
    return ApiResponseSerializer_instance;
  }
  var com_canerture_androidhub_models_ApiListResponse_Idle$stable;
  var com_canerture_androidhub_models_ApiListResponse_Success_$serializer$stable;
  var com_canerture_androidhub_models_ApiListResponse_Success$stable;
  var com_canerture_androidhub_models_ApiListResponse_Error_$serializer$stable;
  var com_canerture_androidhub_models_ApiListResponse_Error$stable;
  var com_canerture_androidhub_models_ApiListResponse$stable;
  var com_canerture_androidhub_models_ApiResponse_Idle$stable;
  var com_canerture_androidhub_models_ApiResponse_Success_$serializer$stable;
  var com_canerture_androidhub_models_ApiResponse_Success$stable;
  var com_canerture_androidhub_models_ApiResponse_Error_$serializer$stable;
  var com_canerture_androidhub_models_ApiResponse_Error$stable;
  var com_canerture_androidhub_models_ApiResponse$stable;
  var com_canerture_androidhub_models_ApiListResponseSerializer$stable;
  var com_canerture_androidhub_models_ApiResponseSerializer$stable;
  function Category$Technology() {
    Category.call(this, 'Technology', 0);
    Category_Technology_instance = this;
  }
  protoOf(Category$Technology).get_color_ipu8u2_k$ = function () {
    return '#FF0000';
  };
  var Category_Technology_instance;
  function Category$Programming() {
    Category.call(this, 'Programming', 1);
    Category_Programming_instance = this;
  }
  protoOf(Category$Programming).get_color_ipu8u2_k$ = function () {
    return '#00FF00';
  };
  var Category_Programming_instance;
  function Category$Design() {
    Category.call(this, 'Design', 2);
    Category_Design_instance = this;
  }
  protoOf(Category$Design).get_color_ipu8u2_k$ = function () {
    return '#0000FF';
  };
  var Category_Design_instance;
  function values() {
    return [Category_Technology_getInstance(), Category_Programming_getInstance(), Category_Design_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'Technology':
        return Category_Technology_getInstance();
      case 'Programming':
        return Category_Programming_getInstance();
      case 'Design':
        return Category_Design_getInstance();
      default:
        Category_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var Category_entriesInitialized;
  function Category_initEntries() {
    if (Category_entriesInitialized)
      return Unit_getInstance();
    Category_entriesInitialized = true;
    Category_Technology_instance = new Category$Technology();
    Category_Programming_instance = new Category$Programming();
    Category_Design_instance = new Category$Design();
  }
  var $ENTRIES;
  function Category(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function CategoryColor() {
  }
  function Category_Technology_getInstance() {
    Category_initEntries();
    return Category_Technology_instance;
  }
  function Category_Programming_getInstance() {
    Category_initEntries();
    return Category_Programming_instance;
  }
  function Category_Design_getInstance() {
    Category_initEntries();
    return Category_Design_instance;
  }
  function Constants() {
    Constants_instance = this;
    this.POSTS_PER_PAGE_1 = 8;
    this.QUERY_PARAM_1 = 'query';
    this.CATEGORY_PARAM_1 = 'category';
    this.POST_ID_PARAM_1 = 'postId';
    this.SKIP_PARAM_1 = 'skip';
    this.AUTHOR_PARAM_1 = 'author';
    this.UPDATED_PARAM_1 = 'updated';
  }
  protoOf(Constants).get_POSTS_PER_PAGE_y967h6_k$ = function () {
    return this.POSTS_PER_PAGE_1;
  };
  protoOf(Constants).get_QUERY_PARAM_lmeus3_k$ = function () {
    return this.QUERY_PARAM_1;
  };
  protoOf(Constants).get_CATEGORY_PARAM_qz86iz_k$ = function () {
    return this.CATEGORY_PARAM_1;
  };
  protoOf(Constants).get_POST_ID_PARAM_nkrdb5_k$ = function () {
    return this.POST_ID_PARAM_1;
  };
  protoOf(Constants).get_SKIP_PARAM_bcznli_k$ = function () {
    return this.SKIP_PARAM_1;
  };
  protoOf(Constants).get_AUTHOR_PARAM_2lltdq_k$ = function () {
    return this.AUTHOR_PARAM_1;
  };
  protoOf(Constants).get_UPDATED_PARAM_yyv6n4_k$ = function () {
    return this.UPDATED_PARAM_1;
  };
  var Constants_instance;
  function Constants_getInstance() {
    if (Constants_instance == null)
      new Constants();
    return Constants_instance;
  }
  var com_canerture_androidhub_models_Constants$stable;
  function Companion_5() {
    Companion_instance_5 = this;
  }
  protoOf(Companion_5).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_3();
  };
  var Companion_instance_5;
  function Companion_getInstance_21() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function $serializer_3() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.example.blogmultiplatform.models.Newsletter', this, 1);
    tmp0_serialDesc.addElement_5pzumi_k$('email', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_3).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_3).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  };
  protoOf($serializer_3).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp5_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp5_input.decodeStringElement_3oenpg_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.decodeStringElement_3oenpg_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.endStructure_1xqz0n_k$(tmp0_desc);
    return Newsletter_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_3).serialize_76wpdr_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 0, value.email_1);
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_3).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_76wpdr_k$(encoder, value instanceof Newsletter ? value : THROW_CCE());
  };
  var $serializer_instance_3;
  function $serializer_getInstance_3() {
    if ($serializer_instance_3 == null)
      new $serializer_3();
    return $serializer_instance_3;
  }
  function Newsletter_init_$Init$(seen1, email, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_3().descriptor_1);
    }
    $this.email_1 = email;
    return $this;
  }
  function Newsletter_init_$Create$(seen1, email, serializationConstructorMarker) {
    return Newsletter_init_$Init$(seen1, email, serializationConstructorMarker, objectCreate(protoOf(Newsletter)));
  }
  function Newsletter(email) {
    Companion_getInstance_21();
    this.email_1 = email;
  }
  protoOf(Newsletter).get_email_iqwbqr_k$ = function () {
    return this.email_1;
  };
  protoOf(Newsletter).component1_7eebsc_k$ = function () {
    return this.email_1;
  };
  protoOf(Newsletter).copy_a35qlh_k$ = function (email) {
    return new Newsletter(email);
  };
  protoOf(Newsletter).copy$default_xnegpu_k$ = function (email, $super) {
    email = email === VOID ? this.email_1 : email;
    return $super === VOID ? this.copy_a35qlh_k$(email) : $super.copy_a35qlh_k$.call(this, email);
  };
  protoOf(Newsletter).toString = function () {
    return 'Newsletter(email=' + this.email_1 + ')';
  };
  protoOf(Newsletter).hashCode = function () {
    return getStringHashCode(this.email_1);
  };
  protoOf(Newsletter).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Newsletter))
      return false;
    var tmp0_other_with_cast = other instanceof Newsletter ? other : THROW_CCE();
    if (!(this.email_1 === tmp0_other_with_cast.email_1))
      return false;
    return true;
  };
  var com_example_blogmultiplatform_models_Newsletter_$serializer$stable;
  var com_example_blogmultiplatform_models_Newsletter$stable;
  function _get_$childSerializers__r2zwns_0($this) {
    return $this.$childSerializers_1;
  }
  function Companion_6() {
    Companion_instance_6 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.$childSerializers_1 = [null, null, null, null, null, null, null, new EnumSerializer('com.canerture.androidhub.models.Category', values()), null, null, null];
  }
  protoOf(Companion_6).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_4();
  };
  var Companion_instance_6;
  function Companion_getInstance_22() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function $serializer_4() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.canerture.androidhub.models.Post', this, 11);
    tmp0_serialDesc.addElement_5pzumi_k$('id', true);
    tmp0_serialDesc.addElement_5pzumi_k$('author', true);
    tmp0_serialDesc.addElement_5pzumi_k$('date', true);
    tmp0_serialDesc.addElement_5pzumi_k$('title', false);
    tmp0_serialDesc.addElement_5pzumi_k$('subtitle', false);
    tmp0_serialDesc.addElement_5pzumi_k$('thumbnail', false);
    tmp0_serialDesc.addElement_5pzumi_k$('content', false);
    tmp0_serialDesc.addElement_5pzumi_k$('category', false);
    tmp0_serialDesc.addElement_5pzumi_k$('popular', true);
    tmp0_serialDesc.addElement_5pzumi_k$('main', true);
    tmp0_serialDesc.addElement_5pzumi_k$('sponsored', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_4).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_4).childSerializers_5ghqw5_k$ = function () {
    var tmp0_cached = Companion_getInstance_22().$childSerializers_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), DoubleSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[7], BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance()];
  };
  protoOf($serializer_4).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = 0.0;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = false;
    var tmp13_local9 = false;
    var tmp14_local10 = false;
    var tmp15_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp16_cached = Companion_getInstance_22().$childSerializers_1;
    if (tmp15_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp15_input.decodeStringElement_3oenpg_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp15_input.decodeStringElement_3oenpg_k$(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp15_input.decodeDoubleElement_isei84_k$(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp15_input.decodeStringElement_3oenpg_k$(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp15_input.decodeStringElement_3oenpg_k$(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp15_input.decodeStringElement_3oenpg_k$(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp15_input.decodeStringElement_3oenpg_k$(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp15_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 7, tmp16_cached[7], tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp15_input.decodeBooleanElement_vuyhtj_k$(tmp0_desc, 8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp15_input.decodeBooleanElement_vuyhtj_k$(tmp0_desc, 9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp15_input.decodeBooleanElement_vuyhtj_k$(tmp0_desc, 10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp15_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp15_input.decodeStringElement_3oenpg_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp15_input.decodeStringElement_3oenpg_k$(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp15_input.decodeDoubleElement_isei84_k$(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp15_input.decodeStringElement_3oenpg_k$(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp15_input.decodeStringElement_3oenpg_k$(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp15_input.decodeStringElement_3oenpg_k$(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp15_input.decodeStringElement_3oenpg_k$(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp15_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 7, tmp16_cached[7], tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp15_input.decodeBooleanElement_vuyhtj_k$(tmp0_desc, 8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp15_input.decodeBooleanElement_vuyhtj_k$(tmp0_desc, 9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp15_input.decodeBooleanElement_vuyhtj_k$(tmp0_desc, 10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp15_input.endStructure_1xqz0n_k$(tmp0_desc);
    return Post_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, null);
  };
  protoOf($serializer_4).serialize_w07p4p_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp2_cached = Companion_getInstance_22().$childSerializers_1;
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 0) ? true : !(value.id_1 === '')) {
      tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 0, value.id_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 1) ? true : !(value.author_1 === '')) {
      tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 1, value.author_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 2) ? true : !equals(value.date_1, 0.0)) {
      tmp1_output.encodeDoubleElement_a6rqhe_k$(tmp0_desc, 2, value.date_1);
    }
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 3, value.title_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 4, value.subtitle_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 5, value.thumbnail_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 6, value.content_1);
    tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 7, tmp2_cached[7], value.category_1);
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 8) ? true : !(value.popular_1 === false)) {
      tmp1_output.encodeBooleanElement_ydht7q_k$(tmp0_desc, 8, value.popular_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 9) ? true : !(value.main_1 === false)) {
      tmp1_output.encodeBooleanElement_ydht7q_k$(tmp0_desc, 9, value.main_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 10) ? true : !(value.sponsored_1 === false)) {
      tmp1_output.encodeBooleanElement_ydht7q_k$(tmp0_desc, 10, value.sponsored_1);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_4).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_w07p4p_k$(encoder, value instanceof Post ? value : THROW_CCE());
  };
  var $serializer_instance_4;
  function $serializer_getInstance_4() {
    if ($serializer_instance_4 == null)
      new $serializer_4();
    return $serializer_instance_4;
  }
  function Post_init_$Init$(seen1, id, author, date, title, subtitle, thumbnail, content, category, popular, main, sponsored, serializationConstructorMarker, $this) {
    if (!(248 === (248 & seen1))) {
      throwMissingFieldException(seen1, 248, $serializer_getInstance_4().descriptor_1);
    }
    if (0 === (seen1 & 1))
      $this.id_1 = '';
    else
      $this.id_1 = id;
    if (0 === (seen1 & 2))
      $this.author_1 = '';
    else
      $this.author_1 = author;
    if (0 === (seen1 & 4))
      $this.date_1 = 0.0;
    else
      $this.date_1 = date;
    $this.title_1 = title;
    $this.subtitle_1 = subtitle;
    $this.thumbnail_1 = thumbnail;
    $this.content_1 = content;
    $this.category_1 = category;
    if (0 === (seen1 & 256))
      $this.popular_1 = false;
    else
      $this.popular_1 = popular;
    if (0 === (seen1 & 512))
      $this.main_1 = false;
    else
      $this.main_1 = main;
    if (0 === (seen1 & 1024))
      $this.sponsored_1 = false;
    else
      $this.sponsored_1 = sponsored;
    return $this;
  }
  function Post_init_$Create$(seen1, id, author, date, title, subtitle, thumbnail, content, category, popular, main, sponsored, serializationConstructorMarker) {
    return Post_init_$Init$(seen1, id, author, date, title, subtitle, thumbnail, content, category, popular, main, sponsored, serializationConstructorMarker, objectCreate(protoOf(Post)));
  }
  function Post(id, author, date, title, subtitle, thumbnail, content, category, popular, main, sponsored) {
    Companion_getInstance_22();
    id = id === VOID ? '' : id;
    author = author === VOID ? '' : author;
    date = date === VOID ? 0.0 : date;
    popular = popular === VOID ? false : popular;
    main = main === VOID ? false : main;
    sponsored = sponsored === VOID ? false : sponsored;
    this.id_1 = id;
    this.author_1 = author;
    this.date_1 = date;
    this.title_1 = title;
    this.subtitle_1 = subtitle;
    this.thumbnail_1 = thumbnail;
    this.content_1 = content;
    this.category_1 = category;
    this.popular_1 = popular;
    this.main_1 = main;
    this.sponsored_1 = sponsored;
  }
  protoOf(Post).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(Post).get_author_b5hnkk_k$ = function () {
    return this.author_1;
  };
  protoOf(Post).get_date_wokkxj_k$ = function () {
    return this.date_1;
  };
  protoOf(Post).get_title_iz32un_k$ = function () {
    return this.title_1;
  };
  protoOf(Post).get_subtitle_55eoyp_k$ = function () {
    return this.subtitle_1;
  };
  protoOf(Post).get_thumbnail_uioqpv_k$ = function () {
    return this.thumbnail_1;
  };
  protoOf(Post).get_content_h02jrk_k$ = function () {
    return this.content_1;
  };
  protoOf(Post).get_category_uyv41l_k$ = function () {
    return this.category_1;
  };
  protoOf(Post).get_popular_58zk7k_k$ = function () {
    return this.popular_1;
  };
  protoOf(Post).get_main_woqbk2_k$ = function () {
    return this.main_1;
  };
  protoOf(Post).get_sponsored_9fi7ao_k$ = function () {
    return this.sponsored_1;
  };
  protoOf(Post).component1_7eebsc_k$ = function () {
    return this.id_1;
  };
  protoOf(Post).component2_7eebsb_k$ = function () {
    return this.author_1;
  };
  protoOf(Post).component3_7eebsa_k$ = function () {
    return this.date_1;
  };
  protoOf(Post).component4_7eebs9_k$ = function () {
    return this.title_1;
  };
  protoOf(Post).component5_7eebs8_k$ = function () {
    return this.subtitle_1;
  };
  protoOf(Post).component6_7eebs7_k$ = function () {
    return this.thumbnail_1;
  };
  protoOf(Post).component7_7eebs6_k$ = function () {
    return this.content_1;
  };
  protoOf(Post).component8_7eebs5_k$ = function () {
    return this.category_1;
  };
  protoOf(Post).component9_7eebs4_k$ = function () {
    return this.popular_1;
  };
  protoOf(Post).component10_gazzfo_k$ = function () {
    return this.main_1;
  };
  protoOf(Post).component11_gazzfn_k$ = function () {
    return this.sponsored_1;
  };
  protoOf(Post).copy_5msvn5_k$ = function (id, author, date, title, subtitle, thumbnail, content, category, popular, main, sponsored) {
    return new Post(id, author, date, title, subtitle, thumbnail, content, category, popular, main, sponsored);
  };
  protoOf(Post).copy$default_9az7qe_k$ = function (id, author, date, title, subtitle, thumbnail, content, category, popular, main, sponsored, $super) {
    id = id === VOID ? this.id_1 : id;
    author = author === VOID ? this.author_1 : author;
    date = date === VOID ? this.date_1 : date;
    title = title === VOID ? this.title_1 : title;
    subtitle = subtitle === VOID ? this.subtitle_1 : subtitle;
    thumbnail = thumbnail === VOID ? this.thumbnail_1 : thumbnail;
    content = content === VOID ? this.content_1 : content;
    category = category === VOID ? this.category_1 : category;
    popular = popular === VOID ? this.popular_1 : popular;
    main = main === VOID ? this.main_1 : main;
    sponsored = sponsored === VOID ? this.sponsored_1 : sponsored;
    return $super === VOID ? this.copy_5msvn5_k$(id, author, date, title, subtitle, thumbnail, content, category, popular, main, sponsored) : $super.copy_5msvn5_k$.call(this, id, author, date, title, subtitle, thumbnail, content, category, popular, main, sponsored);
  };
  protoOf(Post).toString = function () {
    return 'Post(id=' + this.id_1 + ', author=' + this.author_1 + ', date=' + this.date_1 + ', title=' + this.title_1 + ', subtitle=' + this.subtitle_1 + ', thumbnail=' + this.thumbnail_1 + ', content=' + this.content_1 + ', category=' + this.category_1 + ', popular=' + this.popular_1 + ', main=' + this.main_1 + ', sponsored=' + this.sponsored_1 + ')';
  };
  protoOf(Post).hashCode = function () {
    var result = getStringHashCode(this.id_1);
    result = imul(result, 31) + getStringHashCode(this.author_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.date_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.title_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.subtitle_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.thumbnail_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.content_1) | 0;
    result = imul(result, 31) + this.category_1.hashCode() | 0;
    result = imul(result, 31) + getBooleanHashCode(this.popular_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.main_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.sponsored_1) | 0;
    return result;
  };
  protoOf(Post).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Post))
      return false;
    var tmp0_other_with_cast = other instanceof Post ? other : THROW_CCE();
    if (!(this.id_1 === tmp0_other_with_cast.id_1))
      return false;
    if (!(this.author_1 === tmp0_other_with_cast.author_1))
      return false;
    if (!equals(this.date_1, tmp0_other_with_cast.date_1))
      return false;
    if (!(this.title_1 === tmp0_other_with_cast.title_1))
      return false;
    if (!(this.subtitle_1 === tmp0_other_with_cast.subtitle_1))
      return false;
    if (!(this.thumbnail_1 === tmp0_other_with_cast.thumbnail_1))
      return false;
    if (!(this.content_1 === tmp0_other_with_cast.content_1))
      return false;
    if (!this.category_1.equals(tmp0_other_with_cast.category_1))
      return false;
    if (!(this.popular_1 === tmp0_other_with_cast.popular_1))
      return false;
    if (!(this.main_1 === tmp0_other_with_cast.main_1))
      return false;
    if (!(this.sponsored_1 === tmp0_other_with_cast.sponsored_1))
      return false;
    return true;
  };
  function _get_$childSerializers__r2zwns_1($this) {
    return $this.$childSerializers_1;
  }
  function Companion_7() {
    Companion_instance_7 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.$childSerializers_1 = [null, null, null, null, null, null, new EnumSerializer('com.canerture.androidhub.models.Category', values()), null, null, null];
  }
  protoOf(Companion_7).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_5();
  };
  var Companion_instance_7;
  function Companion_getInstance_23() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function $serializer_5() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.canerture.androidhub.models.PostWithoutDetails', this, 10);
    tmp0_serialDesc.addElement_5pzumi_k$('id', true);
    tmp0_serialDesc.addElement_5pzumi_k$('author', false);
    tmp0_serialDesc.addElement_5pzumi_k$('date', false);
    tmp0_serialDesc.addElement_5pzumi_k$('title', false);
    tmp0_serialDesc.addElement_5pzumi_k$('subtitle', false);
    tmp0_serialDesc.addElement_5pzumi_k$('thumbnail', false);
    tmp0_serialDesc.addElement_5pzumi_k$('category', false);
    tmp0_serialDesc.addElement_5pzumi_k$('popular', true);
    tmp0_serialDesc.addElement_5pzumi_k$('main', true);
    tmp0_serialDesc.addElement_5pzumi_k$('sponsored', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_5).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_5).childSerializers_5ghqw5_k$ = function () {
    var tmp0_cached = Companion_getInstance_23().$childSerializers_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), DoubleSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[6], BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance()];
  };
  protoOf($serializer_5).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = 0.0;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = false;
    var tmp12_local8 = false;
    var tmp13_local9 = false;
    var tmp14_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp15_cached = Companion_getInstance_23().$childSerializers_1;
    if (tmp14_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp14_input.decodeStringElement_3oenpg_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp14_input.decodeStringElement_3oenpg_k$(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp14_input.decodeDoubleElement_isei84_k$(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp14_input.decodeStringElement_3oenpg_k$(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp14_input.decodeStringElement_3oenpg_k$(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp14_input.decodeStringElement_3oenpg_k$(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp14_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 6, tmp15_cached[6], tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp14_input.decodeBooleanElement_vuyhtj_k$(tmp0_desc, 7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp14_input.decodeBooleanElement_vuyhtj_k$(tmp0_desc, 8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp14_input.decodeBooleanElement_vuyhtj_k$(tmp0_desc, 9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp14_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp14_input.decodeStringElement_3oenpg_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp14_input.decodeStringElement_3oenpg_k$(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp14_input.decodeDoubleElement_isei84_k$(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp14_input.decodeStringElement_3oenpg_k$(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp14_input.decodeStringElement_3oenpg_k$(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp14_input.decodeStringElement_3oenpg_k$(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp14_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 6, tmp15_cached[6], tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp14_input.decodeBooleanElement_vuyhtj_k$(tmp0_desc, 7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp14_input.decodeBooleanElement_vuyhtj_k$(tmp0_desc, 8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp14_input.decodeBooleanElement_vuyhtj_k$(tmp0_desc, 9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp14_input.endStructure_1xqz0n_k$(tmp0_desc);
    return PostWithoutDetails_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, null);
  };
  protoOf($serializer_5).serialize_xxi6v5_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp2_cached = Companion_getInstance_23().$childSerializers_1;
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 0) ? true : !(value.id_1 === '')) {
      tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 0, value.id_1);
    }
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 1, value.author_1);
    tmp1_output.encodeDoubleElement_a6rqhe_k$(tmp0_desc, 2, value.date_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 3, value.title_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 4, value.subtitle_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 5, value.thumbnail_1);
    tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 6, tmp2_cached[6], value.category_1);
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 7) ? true : !(value.popular_1 === false)) {
      tmp1_output.encodeBooleanElement_ydht7q_k$(tmp0_desc, 7, value.popular_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 8) ? true : !(value.main_1 === false)) {
      tmp1_output.encodeBooleanElement_ydht7q_k$(tmp0_desc, 8, value.main_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 9) ? true : !(value.sponsored_1 === false)) {
      tmp1_output.encodeBooleanElement_ydht7q_k$(tmp0_desc, 9, value.sponsored_1);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_5).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_xxi6v5_k$(encoder, value instanceof PostWithoutDetails ? value : THROW_CCE());
  };
  var $serializer_instance_5;
  function $serializer_getInstance_5() {
    if ($serializer_instance_5 == null)
      new $serializer_5();
    return $serializer_instance_5;
  }
  function PostWithoutDetails_init_$Init$(seen1, id, author, date, title, subtitle, thumbnail, category, popular, main, sponsored, serializationConstructorMarker, $this) {
    if (!(126 === (126 & seen1))) {
      throwMissingFieldException(seen1, 126, $serializer_getInstance_5().descriptor_1);
    }
    if (0 === (seen1 & 1))
      $this.id_1 = '';
    else
      $this.id_1 = id;
    $this.author_1 = author;
    $this.date_1 = date;
    $this.title_1 = title;
    $this.subtitle_1 = subtitle;
    $this.thumbnail_1 = thumbnail;
    $this.category_1 = category;
    if (0 === (seen1 & 128))
      $this.popular_1 = false;
    else
      $this.popular_1 = popular;
    if (0 === (seen1 & 256))
      $this.main_1 = false;
    else
      $this.main_1 = main;
    if (0 === (seen1 & 512))
      $this.sponsored_1 = false;
    else
      $this.sponsored_1 = sponsored;
    return $this;
  }
  function PostWithoutDetails_init_$Create$(seen1, id, author, date, title, subtitle, thumbnail, category, popular, main, sponsored, serializationConstructorMarker) {
    return PostWithoutDetails_init_$Init$(seen1, id, author, date, title, subtitle, thumbnail, category, popular, main, sponsored, serializationConstructorMarker, objectCreate(protoOf(PostWithoutDetails)));
  }
  function PostWithoutDetails(id, author, date, title, subtitle, thumbnail, category, popular, main, sponsored) {
    Companion_getInstance_23();
    id = id === VOID ? '' : id;
    popular = popular === VOID ? false : popular;
    main = main === VOID ? false : main;
    sponsored = sponsored === VOID ? false : sponsored;
    this.id_1 = id;
    this.author_1 = author;
    this.date_1 = date;
    this.title_1 = title;
    this.subtitle_1 = subtitle;
    this.thumbnail_1 = thumbnail;
    this.category_1 = category;
    this.popular_1 = popular;
    this.main_1 = main;
    this.sponsored_1 = sponsored;
  }
  protoOf(PostWithoutDetails).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(PostWithoutDetails).get_author_b5hnkk_k$ = function () {
    return this.author_1;
  };
  protoOf(PostWithoutDetails).get_date_wokkxj_k$ = function () {
    return this.date_1;
  };
  protoOf(PostWithoutDetails).get_title_iz32un_k$ = function () {
    return this.title_1;
  };
  protoOf(PostWithoutDetails).get_subtitle_55eoyp_k$ = function () {
    return this.subtitle_1;
  };
  protoOf(PostWithoutDetails).get_thumbnail_uioqpv_k$ = function () {
    return this.thumbnail_1;
  };
  protoOf(PostWithoutDetails).get_category_uyv41l_k$ = function () {
    return this.category_1;
  };
  protoOf(PostWithoutDetails).get_popular_58zk7k_k$ = function () {
    return this.popular_1;
  };
  protoOf(PostWithoutDetails).get_main_woqbk2_k$ = function () {
    return this.main_1;
  };
  protoOf(PostWithoutDetails).get_sponsored_9fi7ao_k$ = function () {
    return this.sponsored_1;
  };
  protoOf(PostWithoutDetails).component1_7eebsc_k$ = function () {
    return this.id_1;
  };
  protoOf(PostWithoutDetails).component2_7eebsb_k$ = function () {
    return this.author_1;
  };
  protoOf(PostWithoutDetails).component3_7eebsa_k$ = function () {
    return this.date_1;
  };
  protoOf(PostWithoutDetails).component4_7eebs9_k$ = function () {
    return this.title_1;
  };
  protoOf(PostWithoutDetails).component5_7eebs8_k$ = function () {
    return this.subtitle_1;
  };
  protoOf(PostWithoutDetails).component6_7eebs7_k$ = function () {
    return this.thumbnail_1;
  };
  protoOf(PostWithoutDetails).component7_7eebs6_k$ = function () {
    return this.category_1;
  };
  protoOf(PostWithoutDetails).component8_7eebs5_k$ = function () {
    return this.popular_1;
  };
  protoOf(PostWithoutDetails).component9_7eebs4_k$ = function () {
    return this.main_1;
  };
  protoOf(PostWithoutDetails).component10_gazzfo_k$ = function () {
    return this.sponsored_1;
  };
  protoOf(PostWithoutDetails).copy_nkkeaf_k$ = function (id, author, date, title, subtitle, thumbnail, category, popular, main, sponsored) {
    return new PostWithoutDetails(id, author, date, title, subtitle, thumbnail, category, popular, main, sponsored);
  };
  protoOf(PostWithoutDetails).copy$default_9m4njt_k$ = function (id, author, date, title, subtitle, thumbnail, category, popular, main, sponsored, $super) {
    id = id === VOID ? this.id_1 : id;
    author = author === VOID ? this.author_1 : author;
    date = date === VOID ? this.date_1 : date;
    title = title === VOID ? this.title_1 : title;
    subtitle = subtitle === VOID ? this.subtitle_1 : subtitle;
    thumbnail = thumbnail === VOID ? this.thumbnail_1 : thumbnail;
    category = category === VOID ? this.category_1 : category;
    popular = popular === VOID ? this.popular_1 : popular;
    main = main === VOID ? this.main_1 : main;
    sponsored = sponsored === VOID ? this.sponsored_1 : sponsored;
    return $super === VOID ? this.copy_nkkeaf_k$(id, author, date, title, subtitle, thumbnail, category, popular, main, sponsored) : $super.copy_nkkeaf_k$.call(this, id, author, date, title, subtitle, thumbnail, category, popular, main, sponsored);
  };
  protoOf(PostWithoutDetails).toString = function () {
    return 'PostWithoutDetails(id=' + this.id_1 + ', author=' + this.author_1 + ', date=' + this.date_1 + ', title=' + this.title_1 + ', subtitle=' + this.subtitle_1 + ', thumbnail=' + this.thumbnail_1 + ', category=' + this.category_1 + ', popular=' + this.popular_1 + ', main=' + this.main_1 + ', sponsored=' + this.sponsored_1 + ')';
  };
  protoOf(PostWithoutDetails).hashCode = function () {
    var result = getStringHashCode(this.id_1);
    result = imul(result, 31) + getStringHashCode(this.author_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.date_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.title_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.subtitle_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.thumbnail_1) | 0;
    result = imul(result, 31) + this.category_1.hashCode() | 0;
    result = imul(result, 31) + getBooleanHashCode(this.popular_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.main_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.sponsored_1) | 0;
    return result;
  };
  protoOf(PostWithoutDetails).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PostWithoutDetails))
      return false;
    var tmp0_other_with_cast = other instanceof PostWithoutDetails ? other : THROW_CCE();
    if (!(this.id_1 === tmp0_other_with_cast.id_1))
      return false;
    if (!(this.author_1 === tmp0_other_with_cast.author_1))
      return false;
    if (!equals(this.date_1, tmp0_other_with_cast.date_1))
      return false;
    if (!(this.title_1 === tmp0_other_with_cast.title_1))
      return false;
    if (!(this.subtitle_1 === tmp0_other_with_cast.subtitle_1))
      return false;
    if (!(this.thumbnail_1 === tmp0_other_with_cast.thumbnail_1))
      return false;
    if (!this.category_1.equals(tmp0_other_with_cast.category_1))
      return false;
    if (!(this.popular_1 === tmp0_other_with_cast.popular_1))
      return false;
    if (!(this.main_1 === tmp0_other_with_cast.main_1))
      return false;
    if (!(this.sponsored_1 === tmp0_other_with_cast.sponsored_1))
      return false;
    return true;
  };
  var com_canerture_androidhub_models_Post_$serializer$stable;
  var com_canerture_androidhub_models_Post$stable;
  var com_canerture_androidhub_models_PostWithoutDetails_$serializer$stable;
  var com_canerture_androidhub_models_PostWithoutDetails$stable;
  function User(id, username, password) {
    id = id === VOID ? '' : id;
    username = username === VOID ? '' : username;
    password = password === VOID ? '' : password;
    this.id_1 = id;
    this.username_1 = username;
    this.password_1 = password;
  }
  protoOf(User).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(User).get_username_ytz5i7_k$ = function () {
    return this.username_1;
  };
  protoOf(User).get_password_bodifw_k$ = function () {
    return this.password_1;
  };
  protoOf(User).component1_7eebsc_k$ = function () {
    return this.id_1;
  };
  protoOf(User).component2_7eebsb_k$ = function () {
    return this.username_1;
  };
  protoOf(User).component3_7eebsa_k$ = function () {
    return this.password_1;
  };
  protoOf(User).copy_nc7k0r_k$ = function (id, username, password) {
    return new User(id, username, password);
  };
  protoOf(User).copy$default_yk7uk5_k$ = function (id, username, password, $super) {
    id = id === VOID ? this.id_1 : id;
    username = username === VOID ? this.username_1 : username;
    password = password === VOID ? this.password_1 : password;
    return $super === VOID ? this.copy_nc7k0r_k$(id, username, password) : $super.copy_nc7k0r_k$.call(this, id, username, password);
  };
  protoOf(User).toString = function () {
    return 'User(id=' + this.id_1 + ', username=' + this.username_1 + ', password=' + this.password_1 + ')';
  };
  protoOf(User).hashCode = function () {
    var result = getStringHashCode(this.id_1);
    result = imul(result, 31) + getStringHashCode(this.username_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.password_1) | 0;
    return result;
  };
  protoOf(User).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof User))
      return false;
    var tmp0_other_with_cast = other instanceof User ? other : THROW_CCE();
    if (!(this.id_1 === tmp0_other_with_cast.id_1))
      return false;
    if (!(this.username_1 === tmp0_other_with_cast.username_1))
      return false;
    if (!(this.password_1 === tmp0_other_with_cast.password_1))
      return false;
    return true;
  };
  function UserWithoutPassword(id, username) {
    id = id === VOID ? '' : id;
    username = username === VOID ? '' : username;
    this.id_1 = id;
    this.username_1 = username;
  }
  protoOf(UserWithoutPassword).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(UserWithoutPassword).get_username_ytz5i7_k$ = function () {
    return this.username_1;
  };
  protoOf(UserWithoutPassword).component1_7eebsc_k$ = function () {
    return this.id_1;
  };
  protoOf(UserWithoutPassword).component2_7eebsb_k$ = function () {
    return this.username_1;
  };
  protoOf(UserWithoutPassword).copy_plwnsl_k$ = function (id, username) {
    return new UserWithoutPassword(id, username);
  };
  protoOf(UserWithoutPassword).copy$default_ui3qi7_k$ = function (id, username, $super) {
    id = id === VOID ? this.id_1 : id;
    username = username === VOID ? this.username_1 : username;
    return $super === VOID ? this.copy_plwnsl_k$(id, username) : $super.copy_plwnsl_k$.call(this, id, username);
  };
  protoOf(UserWithoutPassword).toString = function () {
    return 'UserWithoutPassword(id=' + this.id_1 + ', username=' + this.username_1 + ')';
  };
  protoOf(UserWithoutPassword).hashCode = function () {
    var result = getStringHashCode(this.id_1);
    result = imul(result, 31) + getStringHashCode(this.username_1) | 0;
    return result;
  };
  protoOf(UserWithoutPassword).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof UserWithoutPassword))
      return false;
    var tmp0_other_with_cast = other instanceof UserWithoutPassword ? other : THROW_CCE();
    if (!(this.id_1 === tmp0_other_with_cast.id_1))
      return false;
    if (!(this.username_1 === tmp0_other_with_cast.username_1))
      return false;
    return true;
  };
  var com_canerture_androidhub_models_User$stable;
  var com_canerture_androidhub_models_UserWithoutPassword$stable;
  function get_COLOR_MODE_KEY() {
    return COLOR_MODE_KEY;
  }
  var COLOR_MODE_KEY;
  function initColorMode(ctx) {
    ctx.get_config_c0698r_k$().set_initialColorMode_lmyh2d_k$(ColorMode_LIGHT_getInstance());
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
        var value = ComposableLambda$invoke$ref_76(dispatchReceiver);
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
  function ComposableLambda$invoke$ref_75($boundThis) {
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
        $composer_0.startReplaceableGroup_ip860b_k$(-226072114);
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
          var value_0 = ComposableLambda$invoke$ref_75(dispatchReceiver);
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
  function ComposableLambda$invoke$ref_76($boundThis) {
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
  function getHeadlineFontSize(breakpoint) {
    _init_properties_AppStyles_kt__9fg0zz();
    var tmp;
    switch (breakpoint.get_ordinal_ip24qg_k$()) {
      case 0:
        tmp = get_cssRem(1.4);
        break;
      case 1:
        tmp = get_cssRem(1.5);
        break;
      case 2:
        tmp = get_cssRem(1.7);
        break;
      case 3:
        tmp = get_cssRem(1.8);
        break;
      case 4:
        tmp = get_cssRem(2);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function getSubheadlineFontSize(breakpoint) {
    _init_properties_AppStyles_kt__9fg0zz();
    var tmp;
    switch (breakpoint.get_ordinal_ip24qg_k$()) {
      case 0:
        tmp = get_cssRem(0.8);
        break;
      case 1:
        tmp = get_cssRem(1.05);
        break;
      case 2:
        tmp = get_cssRem(1.1);
        break;
      case 3:
        tmp = get_cssRem(1.2);
        break;
      case 4:
        tmp = get_cssRem(1.25);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function HeadlineTextStyle$delegate$lambda($this$base) {
    _init_properties_AppStyles_kt__9fg0zz();
    return textAlign(fontWeight(fontSize(Companion_getInstance_3(), get_cssRem(2)), 700), Companion_getInstance_4().get_Start_ih4i6x_k$());
  }
  function SubheadlineTextStyle$delegate$lambda($this$base) {
    _init_properties_AppStyles_kt__9fg0zz();
    return color(textAlign(Companion_getInstance_3(), Companion_getInstance_4().get_Start_ih4i6x_k$()), getSitePalette().get_blue_wojj4z_k$().toRgb_1tsrpu_k$());
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
    return lineHeight(fontSize(fontFamily(Companion_getInstance_3(), ['-apple-system', 'BlinkMacSystemFont', 'DM Sans', 'Urbanist']), get_px(18)), 1.5);
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
  function SitePalette(nearBackground, green, white, blue) {
    this.nearBackground_1 = nearBackground;
    this.green_1 = green;
    this.white_1 = white;
    this.blue_1 = blue;
  }
  protoOf(SitePalette).get_nearBackground_c1s3l_k$ = function () {
    return this.nearBackground_1;
  };
  protoOf(SitePalette).get_green_is36qi_k$ = function () {
    return this.green_1;
  };
  protoOf(SitePalette).get_white_j0plog_k$ = function () {
    return this.white_1;
  };
  protoOf(SitePalette).get_blue_wojj4z_k$ = function () {
    return this.blue_1;
  };
  function SitePalettes() {
    SitePalettes_instance = this;
    this.palette_1 = new SitePalette(Colors_getInstance().get_White_ij46ow_k$(), Companion_getInstance_6().rgb_6orfmz_k$(4053894), Colors_getInstance().get_White_ij46ow_k$(), Companion_getInstance_6().rgb_6orfmz_k$(601922));
  }
  protoOf(SitePalettes).get_palette_by3him_k$ = function () {
    return this.palette_1;
  };
  var SitePalettes_instance;
  function SitePalettes_getInstance() {
    if (SitePalettes_instance == null)
      new SitePalettes();
    return SitePalettes_instance;
  }
  function getSitePalette() {
    return SitePalettes_getInstance().palette_1;
  }
  function initTheme(ctx) {
    set_background(ctx.get_theme_iz24rk_k$().get_palettes_f7ft27_k$().get_light_iuogdp_k$(), Companion_getInstance_6().rgb_6orfmz_k$(16447743));
    set_color(ctx.get_theme_iz24rk_k$().get_palettes_f7ft27_k$().get_light_iuogdp_k$(), Colors_getInstance().get_White_ij46ow_k$());
  }
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
        var value = ComposableLambda$invoke$ref_78(dispatchReceiver);
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
      var tmp_0 = backgroundColor(fillMaxWidth(display(tmp, 'block')), getSitePalette().get_nearBackground_c1s3l_k$());
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
  function ComposableLambda$invoke$ref_77($boundThis) {
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
        var value = ComposableLambda$invoke$ref_77(dispatchReceiver);
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
  function ComposableLambda$invoke$ref_78($boundThis) {
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
        traceEventStart(928443343, $dirty, -1, 'com.canerture.androidhub.components.layouts.PageLayout (PageLayout.kt:32)');
      }
      $composer_0.startReplaceableGroup_ip860b_k$(-408735861);
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
      $composer_0.startReplaceableGroup_ip860b_k$(-408735685);
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
        var value_1 = ComposableLambda$invoke$ref_81(dispatchReceiver);
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
    return maxWidth(Companion_getInstance_3(), get_cssRem(70));
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
          document.title = 'AndroidHub - ' + this.$title_1;
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
        traceEventStart(-1846496957, $changed, -1, 'com.canerture.androidhub.components.layouts.PageLayout.<anonymous>.<anonymous>.<anonymous> (PageLayout.kt:53)');
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
  function ComposableLambda$invoke$ref_79($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function PageLayout$lambda$lambda($content) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1667179892, $changed, -1, 'com.canerture.androidhub.components.layouts.PageLayout.<anonymous>.<anonymous> (PageLayout.kt:48)');
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
        var value = ComposableLambda$invoke$ref_79(dispatchReceiver);
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
  function ComposableLambda$invoke$ref_80($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function PageLayout$lambda_0($content) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-885316011, $changed, -1, 'com.canerture.androidhub.components.layouts.PageLayout.<anonymous> (PageLayout.kt:44)');
      }
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
        var value = ComposableLambda$invoke$ref_80(dispatchReceiver);
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
  function ComposableLambda$invoke$ref_81($boundThis) {
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
  function get_PostPageContentStyle() {
    _init_properties_PostPageLayout_kt__nbcuux();
    return PostPageContentStyle$delegate.getValue_fbnwi2_k$(null, PostPageContentStyle$factory());
  }
  var PostPageContentStyle$delegate;
  function PostPageLayout(title, $composer, $changed) {
    _init_properties_PostPageLayout_kt__nbcuux();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-991946174);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(title) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-991946174, $dirty, -1, 'com.canerture.androidhub.components.layouts.PostPageLayout (PostPageLayout.kt:50)');
      }
      $composer_0.startReplaceableGroup_ip860b_k$(-451652190);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.components.layouts.PostPageLayout.<anonymous>' call
        var value = PostPageLayout$slambda_0(title, null);
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
      $composer_0.startReplaceableGroup_ip860b_k$(-451652030);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (false ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.components.layouts.PostPageLayout.<anonymous>' call
        var value_0 = PostPageLayout$lambda;
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
      Box(tmp_4, tmp_5, null, ComposableSingletons$PostPageLayoutKt_getInstance().lambda_3_r8sbbn_1, $composer_0, 3080, 4);
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
      tmp2_safe_receiver.updateScope_t8jcf_k$(PostPageLayout$lambda_0(title, $changed));
    }
  }
  function LeftSide($composer, $changed) {
    _init_properties_PostPageLayout_kt__nbcuux();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1745680564);
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1745680564, $changed, -1, 'com.canerture.androidhub.components.layouts.LeftSide (PostPageLayout.kt:79)');
      }
      Column(null, null, null, null, ComposableSingletons$PostPageLayoutKt_getInstance().lambda_5_r8sbbl_1, $composer_0, 24576, 15);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(LeftSide$lambda($changed));
    }
  }
  function LeftSideItem(title, value, $composer, $changed) {
    _init_properties_PostPageLayout_kt__nbcuux();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1322085805);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(title) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(value) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1322085805, $dirty, -1, 'com.canerture.androidhub.components.layouts.LeftSideItem (PostPageLayout.kt:120)');
      }
      var tmp = margin_0(Companion_getInstance_3(), get_cssRem(0.2));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.canerture.androidhub.components.layouts.LeftSideItem.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 903088112, true, LeftSideItem$lambda(title, value));
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
        // Inline function 'com.canerture.androidhub.components.layouts.LeftSideItem.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_88(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Row(tmp, null, null, null, tmp0, $composer_0, 24584, 14);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(LeftSideItem$lambda_0(title, value, $changed));
    }
  }
  function RightSide($composer, $changed) {
    _init_properties_PostPageLayout_kt__nbcuux();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1918674957);
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1918674957, $changed, -1, 'com.canerture.androidhub.components.layouts.RightSide (PostPageLayout.kt:140)');
      }
      var tmp = padding(borderRadius(backgroundColor(margin_1(fillMaxWidth(Companion_getInstance_3()), VOID, VOID, VOID, get_cssRem(4)), getSitePalette().get_white_j0plog_k$()), get_cssRem(1)), get_cssRem(1));
      var tmp_0 = get_px(0);
      var tmp_1 = get_px(0);
      var tmp_2 = get_px(5);
      var tmp_3 = get_px(0);
      // Inline function 'org.jetbrains.compose.web.css.Color.lightgray' call
      Color_getInstance();
      var tmp$ret$0 = Color('lightgray');
      var tmp0_$receiver = boxShadow(tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp$ret$0);
      var tmp1_leftRight = get_cssRem(4);
      var tmp2_topBottom = get_cssRem(4);
      var tmp_4 = padding_1(tmp0_$receiver, tmp2_topBottom, tmp1_leftRight);
      var tmp_5 = CenterHorizontally_getInstance();
      Column(tmp_4, null, tmp_5, null, ComposableSingletons$PostPageLayoutKt_getInstance().lambda_6_r8sbbk_1, $composer_0, 24584, 10);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(RightSide$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_82($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$PostPageLayoutKt$lambda_1$lambda_ndl3pv($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1143543870, $changed, -1, 'com.canerture.androidhub.components.layouts.ComposableSingletons$PostPageLayoutKt.lambda-1.<anonymous> (PostPageLayout.kt:70)');
    }
    LeftSide($composer_0, 0);
    RightSide($composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_83($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$PostPageLayoutKt$lambda_2$lambda_5g1dcc($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(140547135, $changed, -1, 'com.canerture.androidhub.components.layouts.ComposableSingletons$PostPageLayoutKt.lambda-2.<anonymous> (PostPageLayout.kt:66)');
    }
    NavHeader($composer_0, 0);
    var tmp = gridRow(toModifier(get_PostPageContentStyle(), [], $composer_0, 64), 2);
    Row(tmp, null, null, null, ComposableSingletons$PostPageLayoutKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 24584, 14);
    Footer(gridRow(fillMaxWidth(Companion_getInstance_3()), 2), $composer_0, 8, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_84($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$PostPageLayoutKt$lambda_3$lambda_y9nuej($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1954726328, $changed, -1, 'com.canerture.androidhub.components.layouts.ComposableSingletons$PostPageLayoutKt.lambda-3.<anonymous> (PostPageLayout.kt:62)');
    }
    var tmp = gridRow(fillMaxSize(Companion_getInstance_3()), 1);
    var tmp_0 = CenterHorizontally_getInstance();
    Column(tmp, null, tmp_0, null, ComposableSingletons$PostPageLayoutKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 24584, 10);
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
  function ComposableSingletons$PostPageLayoutKt$lambda_4$lambda_7xtqie($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(168024890, $changed, -1, 'com.canerture.androidhub.components.layouts.ComposableSingletons$PostPageLayoutKt.lambda-4.<anonymous> (PostPageLayout.kt:96)');
    }
    LeftSideItem('Category', 'Multiplatform', $composer_0, 54);
    LeftSideItem('Updated', '2024-04-08', $composer_0, 54);
    LeftSideItem('Author', 'Caner T\xFCre', $composer_0, 54);
    LeftSideItem('Reading time', '1 Min', $composer_0, 54);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_86($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$PostPageLayoutKt$lambda_5$lambda_kvsqjt($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(575078403, $changed, -1, 'com.canerture.androidhub.components.layouts.ComposableSingletons$PostPageLayoutKt.lambda-5.<anonymous> (PostPageLayout.kt:81)');
    }
    var tmp = margin(color(fontWeight_0(Companion_getInstance_3(), Companion_getInstance_7().get_Bold_wnz5ke_k$()), getSitePalette().get_blue_wojj4z_k$()), VOID, VOID, get_cssRem(1));
    SpanText('Post Information', tmp, null, null, $composer_0, 70, 12);
    var tmp_0 = borderRadius(backgroundColor(Companion_getInstance_3(), getSitePalette().get_white_j0plog_k$()), get_cssRem(1));
    var tmp_1 = get_px(0);
    var tmp_2 = get_px(0);
    var tmp_3 = get_px(5);
    var tmp_4 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Color.lightgray' call
    Color_getInstance();
    var tmp$ret$0 = Color('lightgray');
    var tmp_5 = padding(boxShadow(tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp$ret$0), get_cssRem(2));
    Column(tmp_5, null, null, null, ComposableSingletons$PostPageLayoutKt_getInstance().lambda_4_r8sbbm_1, $composer_0, 24584, 14);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_87($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$PostPageLayoutKt$lambda_6$lambda_lboud4($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1305376284, $changed, -1, 'com.canerture.androidhub.components.layouts.ComposableSingletons$PostPageLayoutKt.lambda-6.<anonymous> (PostPageLayout.kt:152)');
    }
    var tmp0_$receiver = color(fontSize(fontWeight_0(textAlign(Companion_getInstance_3(), Companion_getInstance_4().get_Center_3arb0i_k$()), Companion_getInstance_7().get_Bold_wnz5ke_k$()), get_px(32)), getSitePalette().get_blue_wojj4z_k$());
    var tmp1_bottom = get_cssRem(1);
    var tmp2_leftRight = get_cssRem(12);
    var tmp = padding_0(tmp0_$receiver, VOID, tmp2_leftRight, tmp1_bottom);
    SpanText('Valorant App Compose Multiplatform', tmp, null, null, $composer_0, 70, 12);
    var tmp_0 = color(fontSize(fontWeight_0(Companion_getInstance_3(), Companion_getInstance_7().get_Bold_wnz5ke_k$()), get_px(12)), getSitePalette().get_blue_wojj4z_k$());
    SpanText('Published: 2024-03-22', tmp_0, null, null, $composer_0, 70, 12);
    var tmp_1 = margin_0(toModifier(get_HorizontalDividerStyle(), [], $composer_0, 64), get_cssRem(3));
    HorizontalDivider(tmp_1, null, $composer_0, 8, 2);
    var tmp_2 = color(fontSize(fontWeight_0(textAlign(Companion_getInstance_3(), Companion_getInstance_4().get_Center_3arb0i_k$()), Companion_getInstance_7().get_Medium_1fiba6_k$()), get_px(16)), getSitePalette().get_blue_wojj4z_k$());
    SpanText('Share Article:', tmp_2, null, null, $composer_0, 70, 12);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$PostPageLayoutKt() {
    ComposableSingletons$PostPageLayoutKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_82(composableLambdaInstance(-1143543870, false, ComposableSingletons$PostPageLayoutKt$lambda_1$lambda_ndl3pv));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_83(composableLambdaInstance(140547135, false, ComposableSingletons$PostPageLayoutKt$lambda_2$lambda_5g1dcc));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_84(composableLambdaInstance(-1954726328, false, ComposableSingletons$PostPageLayoutKt$lambda_3$lambda_y9nuej));
    var tmp_2 = this;
    tmp_2.lambda_4_r8sbbm_1 = ComposableLambda$invoke$ref_85(composableLambdaInstance(168024890, false, ComposableSingletons$PostPageLayoutKt$lambda_4$lambda_7xtqie));
    var tmp_3 = this;
    tmp_3.lambda_5_r8sbbl_1 = ComposableLambda$invoke$ref_86(composableLambdaInstance(575078403, false, ComposableSingletons$PostPageLayoutKt$lambda_5$lambda_kvsqjt));
    var tmp_4 = this;
    tmp_4.lambda_6_r8sbbk_1 = ComposableLambda$invoke$ref_87(composableLambdaInstance(1305376284, false, ComposableSingletons$PostPageLayoutKt$lambda_6$lambda_lboud4));
  }
  protoOf(ComposableSingletons$PostPageLayoutKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$PostPageLayoutKt).get_lambda_2_bzdzzp_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$PostPageLayoutKt).get_lambda_3_bzdzzq_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  protoOf(ComposableSingletons$PostPageLayoutKt).get_lambda_4_bzdzzr_k$ = function () {
    return this.lambda_4_r8sbbm_1;
  };
  protoOf(ComposableSingletons$PostPageLayoutKt).get_lambda_5_bzdzzs_k$ = function () {
    return this.lambda_5_r8sbbl_1;
  };
  protoOf(ComposableSingletons$PostPageLayoutKt).get_lambda_6_bzdzzt_k$ = function () {
    return this.lambda_6_r8sbbk_1;
  };
  var ComposableSingletons$PostPageLayoutKt_instance;
  function ComposableSingletons$PostPageLayoutKt_getInstance() {
    if (ComposableSingletons$PostPageLayoutKt_instance == null)
      new ComposableSingletons$PostPageLayoutKt();
    return ComposableSingletons$PostPageLayoutKt_instance;
  }
  function PostPageContentStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_PostPageLayout_kt__nbcuux();
    $this$ComponentStyle.base_y8uu8g_k$(PostPageContentStyle$delegate$lambda$lambda);
    var tmp = Breakpoint_MD_getInstance();
    $this$ComponentStyle.invoke_hmyoxj_k$(tmp, PostPageContentStyle$delegate$lambda$lambda_0);
    return Unit_getInstance();
  }
  function PostPageContentStyle$delegate$lambda$lambda() {
    _init_properties_PostPageLayout_kt__nbcuux();
    var tmp0_$receiver = fillMaxSize(Companion_getInstance_3());
    var tmp1_leftRight = get_cssRem(2);
    var tmp2_top = get_cssRem(4);
    return padding_0(tmp0_$receiver, tmp2_top, tmp1_leftRight);
  }
  function PostPageContentStyle$delegate$lambda$lambda_0() {
    _init_properties_PostPageLayout_kt__nbcuux();
    return maxWidth(Companion_getInstance_3(), get_cssRem(75));
  }
  function PostPageLayout$slambda($title, resultContinuation) {
    this.$title_1 = $title;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(PostPageLayout$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(PostPageLayout$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(PostPageLayout$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          document.title = this.$title_1;
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
  protoOf(PostPageLayout$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new PostPageLayout$slambda(this.$title_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(PostPageLayout$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function PostPageLayout$slambda_0($title, resultContinuation) {
    var i = new PostPageLayout$slambda($title, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function PostPageLayout$lambda($this$gridTemplateRows) {
    _init_properties_PostPageLayout_kt__nbcuux();
    $this$gridTemplateRows.size_q03g6h_k$(get_fr(1));
    $this$gridTemplateRows.size_azcpvi_k$($this$gridTemplateRows.get_minContent_f65gog_k$());
    return Unit_getInstance();
  }
  function PostPageLayout$lambda_0($title, $$changed) {
    return function ($composer, $force) {
      PostPageLayout($title, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function LeftSide$lambda($$changed) {
    return function ($composer, $force) {
      LeftSide($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function LeftSideItem$lambda($title, $value) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(903088112, $changed, -1, 'com.canerture.androidhub.components.layouts.LeftSideItem.<anonymous> (PostPageLayout.kt:125)');
      }
      var tmp = $title + ': ';
      var tmp_0 = color(Companion_getInstance_3(), getSitePalette().get_blue_wojj4z_k$());
      SpanText(tmp, tmp_0, null, null, $composer_0, 64, 12);
      var tmp_1 = fontWeight_0(color(Companion_getInstance_3(), getSitePalette().get_blue_wojj4z_k$()), Companion_getInstance_7().get_Thin_woai2q_k$());
      SpanText($value, tmp_1, null, null, $composer_0, 64, 12);
      var tmp_2;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_2 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_88($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function LeftSideItem$lambda_0($title, $value, $$changed) {
    return function ($composer, $force) {
      LeftSideItem($title, $value, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function RightSide$lambda($$changed) {
    return function ($composer, $force) {
      RightSide($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function PostPageContentStyle$factory() {
    return getPropertyCallableRef('PostPageContentStyle', 0, KProperty0, function () {
      return get_PostPageContentStyle();
    }, null);
  }
  var properties_initialized_PostPageLayout_kt_wbjssl;
  function _init_properties_PostPageLayout_kt__nbcuux() {
    if (!properties_initialized_PostPageLayout_kt_wbjssl) {
      properties_initialized_PostPageLayout_kt_wbjssl = true;
      PostPageContentStyle$delegate = ComponentStyle(VOID, VOID, PostPageContentStyle$delegate$lambda);
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
        traceEventStart(571317305, $dirty, -1, 'com.canerture.androidhub.components.sections.Footer (Footer.kt:27)');
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
  function ComposableLambda$invoke$ref_89($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$FooterKt$lambda_1$lambda_a73781($this$Span, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1858395691, $changed, -1, 'com.canerture.androidhub.components.sections.ComposableSingletons$FooterKt.lambda-1.<anonymous> (Footer.kt:30)');
    }
    var tmp = color(Companion_getInstance_3(), getSitePalette().get_green_is36qi_k$());
    SpanText('2024 - Caner Ture', tmp, null, null, $composer_0, 70, 12);
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
  function ComposableSingletons$FooterKt$lambda_2$lambda_imj9u6($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-284662157, $changed, -1, 'com.canerture.androidhub.components.sections.ComposableSingletons$FooterKt.lambda-2.<anonymous> (Footer.kt:29)');
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
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_89(composableLambdaInstance(-1858395691, false, ComposableSingletons$FooterKt$lambda_1$lambda_a73781));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_90(composableLambdaInstance(-284662157, false, ComposableSingletons$FooterKt$lambda_2$lambda_imj9u6));
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
    return padding_1(Companion_getInstance_3(), get_cssRem(1.5), get_percent(10));
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
        traceEventStart(844555591, $dirty, -1, 'com.canerture.androidhub.components.sections.NavLink (NavHeader.kt:71)');
      }
      var tmp = fontSize(Companion_getInstance_3(), get_cssRem(1));
      var tmp_0 = get_ColorVar();
      // Inline function 'org.jetbrains.compose.web.css.Color.black' call
      Color_getInstance();
      var tmp$ret$0 = Color('black');
      var tmp_1 = setVariable(tmp, tmp_0, tmp$ret$0);
      var tmp_2 = get_UncoloredLinkVariant();
      Link_0(path, text, tmp_1, tmp_2, null, null, false, null, $composer_0, 512 | 14 & $dirty | 112 & $dirty | 0, 240);
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
        traceEventStart(-1327933143, $changed, -1, 'com.canerture.androidhub.components.sections.MenuItems (NavHeader.kt:81)');
      }
      NavLink('/', 'Articles', $composer_0, 54);
      NavLink('/', 'Projects', $composer_0, 54);
      NavLink('/', 'Extensions', $composer_0, 54);
      NavLink('/', 'Plugins', $composer_0, 54);
      NavLink('/', 'Library', $composer_0, 54);
      NavLink('/', 'Resources', $composer_0, 54);
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
  function HamburgerButton(onClick, $composer, $changed) {
    _init_properties_NavHeader_kt__vdotjy();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1913630033);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onClick) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1913630033, $dirty, -1, 'com.canerture.androidhub.components.sections.HamburgerButton (NavHeader.kt:91)');
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
        traceEventStart(1136291648, $dirty, -1, 'com.canerture.androidhub.components.sections.CloseButton (NavHeader.kt:98)');
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
  function SearchButton(onClick, $composer, $changed) {
    _init_properties_NavHeader_kt__vdotjy();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-32044788);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onClick) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-32044788, $dirty, -1, 'com.canerture.androidhub.components.sections.SearchButton (NavHeader.kt:105)');
      }
      IconButton(onClick, ComposableSingletons$NavHeaderKt_getInstance().lambda_4_r8sbbm_1, $composer_0, 48 | 14 & $dirty);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(SearchButton$lambda(onClick, $changed));
    }
  }
  var SideMenuState_CLOSED_instance;
  var SideMenuState_OPEN_instance;
  var SideMenuState_CLOSING_instance;
  function values_0() {
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
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
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
  var $ENTRIES_0;
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
        traceEventStart(-1108811238, $changed, -1, 'com.canerture.androidhub.components.sections.NavHeader (NavHeader.kt:146)');
      }
      $composer_0.startReplaceableGroup_ip860b_k$(-1812890251);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.components.sections.NavHeader.<anonymous>' call
        var value = mutableStateOf(SideMenuState_CLOSED_getInstance());
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var menuState$delegate = tmp0_group;
      var breakpoint = rememberBreakpoint($composer_0, 0);
      var tmp_1;
      switch (breakpoint.get_ordinal_ip24qg_k$()) {
        case 0:
          tmp_1 = get_cssRem(14);
          break;
        case 1:
          tmp_1 = get_cssRem(18);
          break;
        case 2:
          tmp_1 = get_cssRem(24);
          break;
        case 3:
          tmp_1 = get_cssRem(24);
          break;
        case 4:
          tmp_1 = get_cssRem(26);
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var logoWidth = tmp_1;
      var tmp1_modifier = toModifier(get_NavHeaderStyle(), [], $composer_0, 64);
      var tmp2_verticalAlignment = CenterVertically_getInstance();
      var tmp3_horizontalArrangement = Center_getInstance_0();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.canerture.androidhub.components.sections.NavHeader.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, -872052681, true, NavHeader$lambda_1(breakpoint, logoWidth, menuState$delegate));
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
      var tmp_3;
      if (invalid ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.components.sections.NavHeader.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_100(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Row(tmp1_modifier, tmp3_horizontalArrangement, tmp2_verticalAlignment, null, tmp0, $composer_0, 24584, 8);
      var tmp4_modifier = padding_0(fillMaxWidth(Companion_getInstance_3()), get_cssRem(2), get_cssRem(3));
      var tmp5_verticalAlignment = CenterVertically_getInstance();
      var tmp6_horizontalArrangement = Center_getInstance_0();
      Row(tmp4_modifier, tmp6_horizontalArrangement, tmp5_verticalAlignment, null, ComposableSingletons$NavHeaderKt_getInstance().lambda_6_r8sbbk_1, $composer_0, 24584, 8);
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
      tmp1_safe_receiver.updateScope_t8jcf_k$(NavHeader$lambda_2($changed));
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
        traceEventStart(1445021827, $dirty, -1, 'com.canerture.androidhub.components.sections.SideMenu (NavHeader.kt:206)');
      }
      var tmp = setVariable(Companion_getInstance_3(), OverlayVars_getInstance().get_BackgroundColor_qhx06s_k$(), Colors_getInstance().get_Transparent_cxh4g9_k$());
      $composer_0.startReplaceableGroup_ip860b_k$(-760352966);
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
        var value_0 = ComposableLambda$invoke$ref_102(dispatchReceiver);
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
  function ComposableLambda$invoke$ref_91($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$NavHeaderKt$lambda_1$lambda_vv16hm($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1563565610, $changed, -1, 'com.canerture.androidhub.components.sections.ComposableSingletons$NavHeaderKt.lambda-1.<anonymous> (NavHeader.kt:93)');
      }
      HamburgerIcon(color(Companion_getInstance_3(), getSitePalette().get_blue_wojj4z_k$()), $composer_0, 8, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_92($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$NavHeaderKt$lambda_2$lambda_31epff($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1424045209, $changed, -1, 'com.canerture.androidhub.components.sections.ComposableSingletons$NavHeaderKt.lambda-2.<anonymous> (NavHeader.kt:100)');
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
  function ComposableLambda$invoke$ref_93($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$NavHeaderKt$lambda_3$lambda_ps7rms($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1815233913, $changed, -1, 'com.canerture.androidhub.components.sections.ComposableSingletons$NavHeaderKt.lambda-3.<anonymous> (NavHeader.kt:108)');
    }
    $composer_0.startReplaceableGroup_ip860b_k$(-1342297626);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'com.canerture.androidhub.components.sections.ComposableSingletons$NavHeaderKt.lambda-3.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$NavHeaderKt$lambda_3$lambda$lambda_kbp4qh;
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    Circle($this$createIcon, tmp0_group, $composer_0, 56);
    $composer_0.startReplaceableGroup_ip860b_k$(-1342297526);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_1;
    if (false ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'com.canerture.androidhub.components.sections.ComposableSingletons$NavHeaderKt.lambda-3.<anonymous>.<anonymous>' call
      var value_0 = ComposableSingletons$NavHeaderKt$lambda_3$lambda$lambda_kbp4qh_0;
      $composer_0.updateRememberedValue_l1wh71_k$(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    Line($this$createIcon, tmp1_group, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$NavHeaderKt$lambda_3$lambda$lambda_kbp4qh($this$Circle) {
    $this$Circle.cx_7c4b4q_k$(12);
    $this$Circle.cy_5a8zln_k$(12);
    $this$Circle.r_4ompmx_k$(8);
    return Unit_getInstance();
  }
  function ComposableSingletons$NavHeaderKt$lambda_3$lambda$lambda_kbp4qh_0($this$Line) {
    $this$Line.x1_oqfh9a_k$(19);
    $this$Line.y1_w5klst_k$(19);
    $this$Line.x2_mok5q7_k$(56);
    $this$Line.y2_u3pa9q_k$(56);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_94($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$NavHeaderKt$lambda_4$lambda_gf9ta5($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(298381011, $changed, -1, 'com.canerture.androidhub.components.sections.ComposableSingletons$NavHeaderKt.lambda-4.<anonymous> (NavHeader.kt:107)');
      }
      createIcon(null, null, new Stroke(3), toAttrs(color(Companion_getInstance_3(), getSitePalette().get_blue_wojj4z_k$())), ComposableSingletons$NavHeaderKt_getInstance().lambda_3_r8sbbn_1, $composer_0, 25088, 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_95($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$NavHeaderKt$lambda_5$lambda_cecns2($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-342585411, $changed, -1, 'com.canerture.androidhub.components.sections.ComposableSingletons$NavHeaderKt.lambda-5.<anonymous> (NavHeader.kt:199)');
    }
    MenuItems($composer_0, 0);
    $composer_0.startReplaceableGroup_ip860b_k$(1941555018);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'com.canerture.androidhub.components.sections.ComposableSingletons$NavHeaderKt.lambda-5.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$NavHeaderKt$lambda_5$lambda$lambda_tjf03t;
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    SearchButton(tmp0_group, $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$NavHeaderKt$lambda_5$lambda$lambda_tjf03t() {
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_96($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$NavHeaderKt$lambda_6$lambda_tt4x4v($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-653953120, $changed, -1, 'com.canerture.androidhub.components.sections.ComposableSingletons$NavHeaderKt.lambda-6.<anonymous> (NavHeader.kt:191)');
    }
    var tmp = borderRadius(backgroundColor(displayIfAtLeast(gap(Companion_getInstance_3(), get_cssRem(1.5)), Breakpoint_MD_getInstance()), getSitePalette().get_nearBackground_c1s3l_k$()), get_cssRem(5));
    var tmp_0 = get_px(0);
    var tmp_1 = get_px(0);
    var tmp_2 = get_px(5);
    var tmp_3 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Color.lightgray' call
    Color_getInstance();
    var tmp$ret$0 = Color('lightgray');
    var tmp_4 = padding_1(boxShadow(tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp$ret$0), get_cssRem(0.5), get_cssRem(3));
    var tmp_5 = CenterVertically_getInstance();
    Row(tmp_4, null, tmp_5, null, ComposableSingletons$NavHeaderKt_getInstance().lambda_5_r8sbbl_1, $composer_0, 24584, 10);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_97($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$NavHeaderKt$lambda_7$lambda_zig2o($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1280507252, $changed, -1, 'com.canerture.androidhub.components.sections.ComposableSingletons$NavHeaderKt.lambda-7.<anonymous> (NavHeader.kt:239)');
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
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_91(composableLambdaInstance(1563565610, false, ComposableSingletons$NavHeaderKt$lambda_1$lambda_vv16hm));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_92(composableLambdaInstance(1424045209, false, ComposableSingletons$NavHeaderKt$lambda_2$lambda_31epff));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_93(composableLambdaInstance(-1815233913, false, ComposableSingletons$NavHeaderKt$lambda_3$lambda_ps7rms));
    var tmp_2 = this;
    tmp_2.lambda_4_r8sbbm_1 = ComposableLambda$invoke$ref_94(composableLambdaInstance(298381011, false, ComposableSingletons$NavHeaderKt$lambda_4$lambda_gf9ta5));
    var tmp_3 = this;
    tmp_3.lambda_5_r8sbbl_1 = ComposableLambda$invoke$ref_95(composableLambdaInstance(-342585411, false, ComposableSingletons$NavHeaderKt$lambda_5$lambda_cecns2));
    var tmp_4 = this;
    tmp_4.lambda_6_r8sbbk_1 = ComposableLambda$invoke$ref_96(composableLambdaInstance(-653953120, false, ComposableSingletons$NavHeaderKt$lambda_6$lambda_tt4x4v));
    var tmp_5 = this;
    tmp_5.lambda_7_r8sbbj_1 = ComposableLambda$invoke$ref_97(composableLambdaInstance(1280507252, false, ComposableSingletons$NavHeaderKt$lambda_7$lambda_zig2o));
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
  function NavHeader$lambda($menuState$delegate) {
    _init_properties_NavHeader_kt__vdotjy();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('menuState', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $menuState$delegate.get_value_j01efc_k$();
  }
  function NavHeader$lambda_0($menuState$delegate, value) {
    _init_properties_NavHeader_kt__vdotjy();
    getLocalDelegateReference('menuState', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $menuState$delegate.set_value_v1vabv_k$(value);
    return Unit_getInstance();
  }
  function NavHeaderStyle$delegate$lambda($this$base) {
    _init_properties_NavHeader_kt__vdotjy();
    return padding_0(fillMaxWidth(Companion_getInstance_3()), get_cssRem(4), get_cssRem(3));
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
  function SearchButton$lambda($onClick, $$changed) {
    return function ($composer, $force) {
      SearchButton($onClick, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function NavHeader$lambda$lambda($logoWidth) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(61045801, $changed, -1, 'com.canerture.androidhub.components.sections.NavHeader.<anonymous>.<anonymous> (NavHeader.kt:165)');
        }
        var tmp_0 = width(Companion_getInstance_3(), $logoWidth);
        // Inline function 'org.jetbrains.compose.web.css.Companion.Block' call
        Companion_getInstance_10();
        // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_1 = display(tmp_0, 'block');
        Image('/androidhub-logo.png', 'AndroidHub Logo', tmp_1, null, null, null, false, null, $composer_0, 566, 248);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp = tmp_2;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_98($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function NavHeader$lambda$lambda$lambda($menuState$delegate) {
    return function () {
      NavHeader$lambda_0($menuState$delegate, SideMenuState_OPEN_getInstance());
      return Unit_getInstance();
    };
  }
  function NavHeader$lambda$lambda$lambda_0($menuState$delegate) {
    return function () {
      NavHeader$lambda_0($menuState$delegate, NavHeader$lambda($menuState$delegate).close_1keygo_k$());
      return Unit_getInstance();
    };
  }
  function NavHeader$lambda$lambda$lambda_1($menuState$delegate) {
    return function () {
      var tmp;
      if (NavHeader$lambda($menuState$delegate).equals(SideMenuState_CLOSING_getInstance())) {
        NavHeader$lambda_0($menuState$delegate, SideMenuState_CLOSED_getInstance());
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function NavHeader$lambda$lambda_0($menuState$delegate) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(214303636, $changed, -1, 'com.canerture.androidhub.components.sections.NavHeader.<anonymous>.<anonymous> (NavHeader.kt:174)');
      }
      $composer_0.startReplaceableGroup_ip860b_k$(-1190397458);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.components.sections.NavHeader.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = NavHeader$lambda$lambda$lambda($menuState$delegate);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      HamburgerButton(tmp0_group, $composer_0, 6);
      if (!NavHeader$lambda($menuState$delegate).equals(SideMenuState_CLOSED_getInstance())) {
        var tmp_1 = NavHeader$lambda($menuState$delegate);
        $composer_0.startReplaceableGroup_ip860b_k$(-1190397283);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (false ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.canerture.androidhub.components.sections.NavHeader.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = NavHeader$lambda$lambda$lambda_0($menuState$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = it_0;
        }
        var tmp_3 = tmp_2;
        var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        $composer_0.startReplaceableGroup_ip860b_k$(-1190397211);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_4;
        if (false ? true : it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.canerture.androidhub.components.sections.NavHeader.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = NavHeader$lambda$lambda$lambda_1($menuState$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value_1);
          tmp_4 = value_1;
        } else {
          tmp_4 = it_1;
        }
        var tmp_5 = tmp_4;
        var tmp2_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        SideMenu(tmp_1, tmp1_group, tmp2_group, $composer_0, 432);
      }
      var tmp_6;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_6 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_99($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function NavHeader$lambda_1($breakpoint, $logoWidth, $menuState$delegate) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-872052681, $changed, -1, 'com.canerture.androidhub.components.sections.NavHeader.<anonymous> (NavHeader.kt:164)');
      }
      var tmp = thenIf(Companion_getInstance_3(), $breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) < 0, $this$Row.weight_stvlsa_k$(Companion_getInstance_3(), 1.0));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.canerture.androidhub.components.sections.NavHeader.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 61045801, true, NavHeader$lambda$lambda($logoWidth));
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
        // Inline function 'com.canerture.androidhub.components.sections.NavHeader.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_98(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Link('https://androidhub.dev', tmp, null, null, null, false, null, tmp0, $composer_0, 12582982, 124);
      var tmp_3 = displayUntil(fontSize(Companion_getInstance_3(), get_cssRem(1.5)), Breakpoint_MD_getInstance());
      var tmp_4 = CenterVertically_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.canerture.androidhub.components.sections.NavHeader.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_5 = $composer_0;
      var dispatchReceiver_0 = composableLambda(tmp_5, 214303636, true, NavHeader$lambda$lambda_0($menuState$delegate));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      $composer_2.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_2, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_6;
      if (invalid_0 ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.components.sections.NavHeader.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_99(dispatchReceiver_0);
        $composer_2.updateRememberedValue_l1wh71_k$(value_0);
        tmp_6 = value_0;
      } else {
        tmp_6 = it_0;
      }
      var tmp_7 = tmp_6;
      var tmp0_0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      $composer_2.endReplaceableGroup_ern0ak_k$();
      Row(tmp_3, null, tmp_4, null, tmp0_0, $composer_0, 24584, 10);
      var tmp_8;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_8 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_100($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function NavHeader$lambda_2($$changed) {
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
        traceEventStart(-206915651, $changed, -1, 'com.canerture.androidhub.components.sections.SideMenu.<anonymous>.<anonymous>.<anonymous> (NavHeader.kt:234)');
      }
      $composer_0.startReplaceableGroup_ip860b_k$(-1518990362);
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
  function ComposableLambda$invoke$ref_101($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function SideMenu$lambda_0($menuState, $onAnimationEnd, $close) {
    return function ($this$Overlay, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-36487783, $changed, -1, 'com.canerture.androidhub.components.sections.SideMenu.<anonymous> (NavHeader.kt:212)');
      }
      $composer_0.startMovableGroup_clfloq_k$(629541751, $menuState);
      var tmp = backgroundColor(gap(padding_0($this$Overlay.align_s6rwef_k$(width(fillMaxHeight(Companion_getInstance_3()), clamp(get_cssRem(8), get_percent(33), get_cssRem(10))), CenterEnd_getInstance()), get_cssRem(1), get_cssRem(1)), get_cssRem(1.5)), getSitePalette().get_nearBackground_c1s3l_k$());
      var tmp_0 = get_SideMenuSlideInAnim();
      var tmp_1 = get_ms(200);
      var tmp_2;
      if ($menuState.equals(SideMenuState_OPEN_getInstance())) {
        // Inline function 'org.jetbrains.compose.web.css.Companion.EaseOut' call
        Companion_getInstance_12();
        // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_2 = 'ease-out';
      } else {
        // Inline function 'org.jetbrains.compose.web.css.Companion.EaseIn' call
        Companion_getInstance_12();
        // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_2 = 'ease-in';
      }
      var tmp_3 = tmp_2;
      var tmp_4;
      if ($menuState.equals(SideMenuState_OPEN_getInstance())) {
        // Inline function 'org.jetbrains.compose.web.css.Companion.Normal' call
        Companion_getInstance_13();
        // Inline function 'org.jetbrains.compose.web.css.AnimationDirection' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_4 = 'normal';
      } else {
        // Inline function 'org.jetbrains.compose.web.css.Companion.Reverse' call
        Companion_getInstance_13();
        // Inline function 'org.jetbrains.compose.web.css.AnimationDirection' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_4 = 'reverse';
      }
      var tmp_5 = tmp_4;
      // Inline function 'org.jetbrains.compose.web.css.Companion.Forwards' call
      Companion_getInstance_14();
      // Inline function 'org.jetbrains.compose.web.css.AnimationFillMode' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_6 = 'forwards';
      var tmp_7 = borderRadius_0(animation(tmp, [toAnimation(tmp_0, tmp_1, tmp_3, null, null, tmp_5, tmp_6, null, $composer_0, 2359880, 76)]), get_cssRem(2));
      $composer_0.startReplaceableGroup_ip860b_k$(629542759);
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
      $composer_0.startReplaceableGroup_ip860b_k$(629542820);
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
        var value_1 = ComposableLambda$invoke$ref_101(dispatchReceiver);
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
  function ComposableLambda$invoke$ref_102($boundThis) {
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
        var value_0 = ComposableLambda$invoke$ref_103(dispatchReceiver);
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
  function ComposableLambda$invoke$ref_103($boundThis) {
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
  function LatestArticleItem(isLastItem, article, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(873134260);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(isLastItem) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(article) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(873134260, $dirty, -1, 'com.canerture.androidhub.components.widgets.LatestArticleItem (LatestArticleItem.kt:32)');
      }
      var tmp = borderRadius(backgroundColor(marginBlock(marginInline(Companion_getInstance_3(), VOID, !isLastItem ? get_cssRem(1) : get_cssRem(0)), VOID, !isLastItem ? get_cssRem(1) : get_cssRem(0)), getSitePalette().get_white_j0plog_k$()), get_cssRem(1));
      var tmp_0 = get_px(0);
      var tmp_1 = get_px(0);
      var tmp_2 = get_px(5);
      var tmp_3 = get_px(0);
      // Inline function 'org.jetbrains.compose.web.css.Color.lightgray' call
      Color_getInstance();
      var tmp$ret$0 = Color('lightgray');
      var tmp_4 = boxShadow(tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp$ret$0);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.canerture.androidhub.components.widgets.LatestArticleItem.<anonymous>' call
      var tmp_5 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_5, -397278293, true, LatestArticleItem$lambda(article));
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
      var tmp_6;
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.components.widgets.LatestArticleItem.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_105(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_6 = value;
      } else {
        tmp_6 = it;
      }
      var tmp_7 = tmp_6;
      var tmp0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Column(tmp_4, null, null, null, tmp0, $composer_0, 24584, 14);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(LatestArticleItem$lambda_0(isLastItem, article, $changed));
    }
  }
  function LatestArticleItem$lambda$lambda($article) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(370470958, $changed, -1, 'com.canerture.androidhub.components.widgets.LatestArticleItem.<anonymous>.<anonymous> (LatestArticleItem.kt:67)');
      }
      var tmp = $article.get_authorName_q0vry7_k$();
      var tmp_0 = margin_1(color(Companion_getInstance_3(), getSitePalette().get_blue_wojj4z_k$()), VOID, get_cssRem(1));
      SpanText(tmp, tmp_0, null, null, $composer_0, 64, 12);
      var tmp_1 = $article.get_readTime_ovnxho_k$();
      var tmp_2 = color(Companion_getInstance_3(), getSitePalette().get_blue_wojj4z_k$());
      SpanText(tmp_1, tmp_2, null, null, $composer_0, 64, 12);
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_104($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function LatestArticleItem$lambda($article) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-397278293, $changed, -1, 'com.canerture.androidhub.components.widgets.LatestArticleItem.<anonymous> (LatestArticleItem.kt:41)');
      }
      var tmp0_modifier = padding_1(borderRadius_1(backgroundColor(margin(Companion_getInstance_3(), get_cssRem(1)), getSitePalette().get_blue_wojj4z_k$()), VOID, get_cssRem(1), get_cssRem(1)), get_cssRem(0.3), get_cssRem(1));
      var tmp1_text = $article.get_category_uyv41l_k$();
      SpanText(tmp1_text, tmp0_modifier, null, null, $composer_0, 64, 12);
      var tmp = $article.get_title_iz32un_k$();
      var tmp_0 = color(fontWeight_0(textAlign(padding(fillMaxWidth(Companion_getInstance_3()), get_cssRem(1)), Companion_getInstance_4().get_Center_3arb0i_k$()), Companion_getInstance_7().get_Bold_wnz5ke_k$()), getSitePalette().get_blue_wojj4z_k$());
      Link_0('/post', tmp, tmp_0, null, null, null, false, null, $composer_0, 518, 248);
      var tmp_1 = padding(fillMaxWidth(Companion_getInstance_3()), get_cssRem(1));
      var tmp_2 = Center_getInstance_0();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.canerture.androidhub.components.widgets.LatestArticleItem.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, 370470958, true, LatestArticleItem$lambda$lambda($article));
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
      var tmp_4;
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.components.widgets.LatestArticleItem.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_104(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_4 = value;
      } else {
        tmp_4 = it;
      }
      var tmp_5 = tmp_4;
      var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Row(tmp_1, tmp_2, null, null, tmp0, $composer_0, 24584, 12);
      var tmp_6;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_6 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_105($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function LatestArticleItem$lambda_0($isLastItem, $article, $$changed) {
    return function ($composer, $force) {
      LatestArticleItem($isLastItem, $article, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function PopularArticleItem(_this__u8e3s4, isLastItem, article, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1541016390);
    if (isTraceInProgress()) {
      traceEventStart(1541016390, $changed, -1, 'com.canerture.androidhub.components.widgets.PopularArticleItem (PopularArticleItem.kt:28)');
    }
    var tmp = borderRadius(backgroundColor(margin_1(_this__u8e3s4.weight_stvlsa_k$(Companion_getInstance_3(), 1.0), VOID, !isLastItem ? get_cssRem(1) : get_cssRem(0)), getSitePalette().get_green_is36qi_k$().toRgb_1tsrpu_k$()), get_cssRem(1));
    var tmp_0 = get_px(0);
    var tmp_1 = get_px(0);
    var tmp_2 = get_px(5);
    var tmp_3 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Color.lightgray' call
    Color_getInstance();
    var tmp$ret$0 = Color('lightgray');
    var tmp_4 = boxShadow(tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp$ret$0);
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.canerture.androidhub.components.widgets.PopularArticleItem.<anonymous>' call
    var tmp_5 = $composer_0;
    var dispatchReceiver = composableLambda(tmp_5, 1645170671, true, PopularArticleItem$lambda(article));
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
    var tmp_6;
    if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'com.canerture.androidhub.components.widgets.PopularArticleItem.<anonymous>.<anonymous>' call
      var value = ComposableLambda$invoke$ref_109(dispatchReceiver);
      $composer_1.updateRememberedValue_l1wh71_k$(value);
      tmp_6 = value;
    } else {
      tmp_6 = it;
    }
    var tmp_7 = tmp_6;
    var tmp0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
    $composer_1.endReplaceableGroup_ern0ak_k$();
    Column(tmp_4, null, null, null, tmp0, $composer_0, 24584, 14);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(PopularArticleItem$lambda_0(_this__u8e3s4, isLastItem, article, $changed));
    }
  }
  function ComposableLambda$invoke$ref_106($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$PopularArticleItemKt$lambda_1$lambda_ngbeak($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1212217857, $changed, -1, 'com.canerture.androidhub.components.widgets.ComposableSingletons$PopularArticleItemKt.lambda-1.<anonymous> (PopularArticleItem.kt:70)');
    }
    Text('Read More', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$PopularArticleItemKt() {
    ComposableSingletons$PopularArticleItemKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_106(composableLambdaInstance(-1212217857, false, ComposableSingletons$PopularArticleItemKt$lambda_1$lambda_ngbeak));
  }
  protoOf(ComposableSingletons$PopularArticleItemKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$PopularArticleItemKt_instance;
  function ComposableSingletons$PopularArticleItemKt_getInstance() {
    if (ComposableSingletons$PopularArticleItemKt_instance == null)
      new ComposableSingletons$PopularArticleItemKt();
    return ComposableSingletons$PopularArticleItemKt_instance;
  }
  function PopularArticleItem$lambda$lambda$lambda($article) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-333736459, $changed, -1, 'com.canerture.androidhub.components.widgets.PopularArticleItem.<anonymous>.<anonymous>.<anonymous> (PopularArticleItem.kt:54)');
      }
      Text($article.get_authorName_q0vry7_k$(), $composer_0, 0);
      Spacer($composer_0, 0);
      Text($article.get_readTime_ovnxho_k$(), $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_107($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function PopularArticleItem$lambda$lambda($article) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(459834252, $changed, -1, 'com.canerture.androidhub.components.widgets.PopularArticleItem.<anonymous>.<anonymous> (PopularArticleItem.kt:51)');
      }
      var tmp = margin_1(Companion_getInstance_3(), VOID, get_cssRem(2.5));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.canerture.androidhub.components.widgets.PopularArticleItem.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, -333736459, true, PopularArticleItem$lambda$lambda$lambda($article));
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
        // Inline function 'com.canerture.androidhub.components.widgets.PopularArticleItem.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_107(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Column(tmp, null, null, null, tmp0, $composer_0, 24584, 14);
      var tmp0_modifier = $this$Row.weight_stvlsa_k$(Companion_getInstance_3(), 1.0);
      var tmp1_text = $article.get_title_iz32un_k$();
      SpanText(tmp1_text, tmp0_modifier, null, null, $composer_0, 64, 12);
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_108($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function PopularArticleItem$lambda$lambda_0(it) {
    return Unit_getInstance();
  }
  function PopularArticleItem$lambda($article) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1645170671, $changed, -1, 'com.canerture.androidhub.components.widgets.PopularArticleItem.<anonymous> (PopularArticleItem.kt:37)');
      }
      var tmp0_modifier = padding_1(borderRadius_1(backgroundColor(margin_0(Companion_getInstance_3(), get_cssRem(1)), getSitePalette().get_blue_wojj4z_k$()), VOID, get_cssRem(1), get_cssRem(1)), get_cssRem(0.3), get_cssRem(1));
      var tmp1_text = $article.get_category_uyv41l_k$();
      SpanText(tmp1_text, tmp0_modifier, null, null, $composer_0, 64, 12);
      var tmp = padding_1(fillMaxWidth(Companion_getInstance_3()), VOID, get_cssRem(1));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.canerture.androidhub.components.widgets.PopularArticleItem.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 459834252, true, PopularArticleItem$lambda$lambda($article));
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
        // Inline function 'com.canerture.androidhub.components.widgets.PopularArticleItem.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_108(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Row(tmp, null, null, null, tmp0, $composer_0, 24584, 14);
      var tmp2_modifier = $this$Column.align_45bqjp_k$(margin_2(Companion_getInstance_3(), get_cssRem(1)), End_getInstance());
      $composer_0.startReplaceableGroup_ip860b_k$(1381317613);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (false ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.components.widgets.PopularArticleItem.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = PopularArticleItem$lambda$lambda_0;
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp0_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      Button(tmp0_group, tmp2_modifier, null, null, false, null, null, null, null, ComposableSingletons$PopularArticleItemKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 805306438, 508);
      var tmp_5;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_5 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_109($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function PopularArticleItem$lambda_0($this_PopularArticleItem, $isLastItem, $article, $$changed) {
    return function ($composer, $force) {
      PopularArticleItem($this_PopularArticleItem, $isLastItem, $article, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function getPosts(onSuccess, onError, $completion) {
    var tmp = new $getPostsCOROUTINE$0(onSuccess, onError, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function $getPostsCOROUTINE$0(onSuccess, onError, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.onSuccess_1 = onSuccess;
    this.onError_1 = onError;
  }
  protoOf($getPostsCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = get_api(window).tryGet$default_tg3lb4_k$('get_posts.php', VOID, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0_safe_receiver = suspendResult;
            var result = tmp0_safe_receiver == null ? null : decodeToString(tmp0_safe_receiver);
            if (!(result == null)) {
              var this_0 = Default_getInstance();
              var this_1 = this_0.get_serializersModule_piitvg_k$();
              var this_2 = serializer(this_1, createKType(getKClass(List), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Post), arrayOf([]), false))]), false));
              this.onSuccess_1(this_0.decodeFromString_jwu9sq_k$(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), result));
            } else {
              this.onError_1(Exception_init_$Create$('Something went wrong'));
            }

            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              println(e);
              this.onError_1(e);
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_fex74n_k$(3);
            return Unit_getInstance();
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
  function Bold(selectedText) {
    ControlStyle.call(this, '<strong>' + selectedText + '<\/strong>');
    this.selectedText_1 = selectedText;
  }
  protoOf(Bold).get_selectedText_oh03m7_k$ = function () {
    return this.selectedText_1;
  };
  protoOf(Bold).component1_7eebsc_k$ = function () {
    return this.selectedText_1;
  };
  protoOf(Bold).copy_q202ni_k$ = function (selectedText) {
    return new Bold(selectedText);
  };
  protoOf(Bold).copy$default_reb0ov_k$ = function (selectedText, $super) {
    selectedText = selectedText === VOID ? this.selectedText_1 : selectedText;
    return $super === VOID ? this.copy_q202ni_k$(selectedText) : $super.copy_q202ni_k$.call(this, selectedText);
  };
  protoOf(Bold).toString = function () {
    return 'Bold(selectedText=' + this.selectedText_1 + ')';
  };
  protoOf(Bold).hashCode = function () {
    return this.selectedText_1 == null ? 0 : getStringHashCode(this.selectedText_1);
  };
  protoOf(Bold).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Bold))
      return false;
    var tmp0_other_with_cast = other instanceof Bold ? other : THROW_CCE();
    if (!(this.selectedText_1 == tmp0_other_with_cast.selectedText_1))
      return false;
    return true;
  };
  function Italic(selectedText) {
    ControlStyle.call(this, '<em>' + selectedText + '<\/em>');
    this.selectedText_1 = selectedText;
  }
  protoOf(Italic).get_selectedText_oh03m7_k$ = function () {
    return this.selectedText_1;
  };
  protoOf(Italic).component1_7eebsc_k$ = function () {
    return this.selectedText_1;
  };
  protoOf(Italic).copy_q202ni_k$ = function (selectedText) {
    return new Italic(selectedText);
  };
  protoOf(Italic).copy$default_e7np9w_k$ = function (selectedText, $super) {
    selectedText = selectedText === VOID ? this.selectedText_1 : selectedText;
    return $super === VOID ? this.copy_q202ni_k$(selectedText) : $super.copy_q202ni_k$.call(this, selectedText);
  };
  protoOf(Italic).toString = function () {
    return 'Italic(selectedText=' + this.selectedText_1 + ')';
  };
  protoOf(Italic).hashCode = function () {
    return this.selectedText_1 == null ? 0 : getStringHashCode(this.selectedText_1);
  };
  protoOf(Italic).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Italic))
      return false;
    var tmp0_other_with_cast = other instanceof Italic ? other : THROW_CCE();
    if (!(this.selectedText_1 == tmp0_other_with_cast.selectedText_1))
      return false;
    return true;
  };
  function Link_1(selectedText, href, title) {
    ControlStyle.call(this, '<a href="' + href + '" title="' + title + '">' + selectedText + '<\/a>');
    this.selectedText_1 = selectedText;
    this.href_1 = href;
    this.title_1 = title;
  }
  protoOf(Link_1).get_selectedText_oh03m7_k$ = function () {
    return this.selectedText_1;
  };
  protoOf(Link_1).get_href_wonh4k_k$ = function () {
    return this.href_1;
  };
  protoOf(Link_1).get_title_iz32un_k$ = function () {
    return this.title_1;
  };
  protoOf(Link_1).component1_7eebsc_k$ = function () {
    return this.selectedText_1;
  };
  protoOf(Link_1).component2_7eebsb_k$ = function () {
    return this.href_1;
  };
  protoOf(Link_1).component3_7eebsa_k$ = function () {
    return this.title_1;
  };
  protoOf(Link_1).copy_tuo23y_k$ = function (selectedText, href, title) {
    return new Link_1(selectedText, href, title);
  };
  protoOf(Link_1).copy$default_tuljyk_k$ = function (selectedText, href, title, $super) {
    selectedText = selectedText === VOID ? this.selectedText_1 : selectedText;
    href = href === VOID ? this.href_1 : href;
    title = title === VOID ? this.title_1 : title;
    return $super === VOID ? this.copy_tuo23y_k$(selectedText, href, title) : $super.copy_tuo23y_k$.call(this, selectedText, href, title);
  };
  protoOf(Link_1).toString = function () {
    return 'Link(selectedText=' + this.selectedText_1 + ', href=' + this.href_1 + ', title=' + this.title_1 + ')';
  };
  protoOf(Link_1).hashCode = function () {
    var result = this.selectedText_1 == null ? 0 : getStringHashCode(this.selectedText_1);
    result = imul(result, 31) + getStringHashCode(this.href_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.title_1) | 0;
    return result;
  };
  protoOf(Link_1).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Link_1))
      return false;
    var tmp0_other_with_cast = other instanceof Link_1 ? other : THROW_CCE();
    if (!(this.selectedText_1 == tmp0_other_with_cast.selectedText_1))
      return false;
    if (!(this.href_1 === tmp0_other_with_cast.href_1))
      return false;
    if (!(this.title_1 === tmp0_other_with_cast.title_1))
      return false;
    return true;
  };
  function Title(selectedText) {
    ControlStyle.call(this, '<h1><strong>' + selectedText + '<\/strong><\/h1>');
    this.selectedText_1 = selectedText;
  }
  protoOf(Title).get_selectedText_oh03m7_k$ = function () {
    return this.selectedText_1;
  };
  protoOf(Title).component1_7eebsc_k$ = function () {
    return this.selectedText_1;
  };
  protoOf(Title).copy_q202ni_k$ = function (selectedText) {
    return new Title(selectedText);
  };
  protoOf(Title).copy$default_g63l6k_k$ = function (selectedText, $super) {
    selectedText = selectedText === VOID ? this.selectedText_1 : selectedText;
    return $super === VOID ? this.copy_q202ni_k$(selectedText) : $super.copy_q202ni_k$.call(this, selectedText);
  };
  protoOf(Title).toString = function () {
    return 'Title(selectedText=' + this.selectedText_1 + ')';
  };
  protoOf(Title).hashCode = function () {
    return this.selectedText_1 == null ? 0 : getStringHashCode(this.selectedText_1);
  };
  protoOf(Title).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Title))
      return false;
    var tmp0_other_with_cast = other instanceof Title ? other : THROW_CCE();
    if (!(this.selectedText_1 == tmp0_other_with_cast.selectedText_1))
      return false;
    return true;
  };
  function Subtitle(selectedText) {
    ControlStyle.call(this, '<h3>' + selectedText + '<\/h3>');
    this.selectedText_1 = selectedText;
  }
  protoOf(Subtitle).get_selectedText_oh03m7_k$ = function () {
    return this.selectedText_1;
  };
  protoOf(Subtitle).component1_7eebsc_k$ = function () {
    return this.selectedText_1;
  };
  protoOf(Subtitle).copy_q202ni_k$ = function (selectedText) {
    return new Subtitle(selectedText);
  };
  protoOf(Subtitle).copy$default_9n7e44_k$ = function (selectedText, $super) {
    selectedText = selectedText === VOID ? this.selectedText_1 : selectedText;
    return $super === VOID ? this.copy_q202ni_k$(selectedText) : $super.copy_q202ni_k$.call(this, selectedText);
  };
  protoOf(Subtitle).toString = function () {
    return 'Subtitle(selectedText=' + this.selectedText_1 + ')';
  };
  protoOf(Subtitle).hashCode = function () {
    return this.selectedText_1 == null ? 0 : getStringHashCode(this.selectedText_1);
  };
  protoOf(Subtitle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Subtitle))
      return false;
    var tmp0_other_with_cast = other instanceof Subtitle ? other : THROW_CCE();
    if (!(this.selectedText_1 == tmp0_other_with_cast.selectedText_1))
      return false;
    return true;
  };
  function Quote(selectedText) {
    ControlStyle.call(this, '<div style="background-color:#FAFAFA;padding:12px;border-radius:6px;"><em>\u275E ' + selectedText + '<\/em><\/div>');
    this.selectedText_1 = selectedText;
  }
  protoOf(Quote).get_selectedText_oh03m7_k$ = function () {
    return this.selectedText_1;
  };
  protoOf(Quote).component1_7eebsc_k$ = function () {
    return this.selectedText_1;
  };
  protoOf(Quote).copy_q202ni_k$ = function (selectedText) {
    return new Quote(selectedText);
  };
  protoOf(Quote).copy$default_3uqj4o_k$ = function (selectedText, $super) {
    selectedText = selectedText === VOID ? this.selectedText_1 : selectedText;
    return $super === VOID ? this.copy_q202ni_k$(selectedText) : $super.copy_q202ni_k$.call(this, selectedText);
  };
  protoOf(Quote).toString = function () {
    return 'Quote(selectedText=' + this.selectedText_1 + ')';
  };
  protoOf(Quote).hashCode = function () {
    return this.selectedText_1 == null ? 0 : getStringHashCode(this.selectedText_1);
  };
  protoOf(Quote).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Quote))
      return false;
    var tmp0_other_with_cast = other instanceof Quote ? other : THROW_CCE();
    if (!(this.selectedText_1 == tmp0_other_with_cast.selectedText_1))
      return false;
    return true;
  };
  function Code_0(selectedText) {
    ControlStyle.call(this, '<div style="background-color:#0d1117;padding:12px;border-radius:6px;"><pre><code class="language-kotlin"> ' + selectedText + ' <\/code><\/pre><\/div>');
    this.selectedText_1 = selectedText;
  }
  protoOf(Code_0).get_selectedText_oh03m7_k$ = function () {
    return this.selectedText_1;
  };
  protoOf(Code_0).component1_7eebsc_k$ = function () {
    return this.selectedText_1;
  };
  protoOf(Code_0).copy_q202ni_k$ = function (selectedText) {
    return new Code_0(selectedText);
  };
  protoOf(Code_0).copy$default_m7xhhz_k$ = function (selectedText, $super) {
    selectedText = selectedText === VOID ? this.selectedText_1 : selectedText;
    return $super === VOID ? this.copy_q202ni_k$(selectedText) : $super.copy_q202ni_k$.call(this, selectedText);
  };
  protoOf(Code_0).toString = function () {
    return 'Code(selectedText=' + this.selectedText_1 + ')';
  };
  protoOf(Code_0).hashCode = function () {
    return this.selectedText_1 == null ? 0 : getStringHashCode(this.selectedText_1);
  };
  protoOf(Code_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Code_0))
      return false;
    var tmp0_other_with_cast = other instanceof Code_0 ? other : THROW_CCE();
    if (!(this.selectedText_1 == tmp0_other_with_cast.selectedText_1))
      return false;
    return true;
  };
  function Image_0(selectedText, imageUrl, alt) {
    ControlStyle.call(this, '<img src="' + imageUrl + '" alt="' + alt + '" style="max-width: 100%">' + selectedText + '<\/img>');
    this.selectedText_1 = selectedText;
    this.imageUrl_1 = imageUrl;
    this.alt_1 = alt;
  }
  protoOf(Image_0).get_selectedText_oh03m7_k$ = function () {
    return this.selectedText_1;
  };
  protoOf(Image_0).get_imageUrl_p0dvj1_k$ = function () {
    return this.imageUrl_1;
  };
  protoOf(Image_0).get_alt_18j9hc_k$ = function () {
    return this.alt_1;
  };
  protoOf(Image_0).component1_7eebsc_k$ = function () {
    return this.selectedText_1;
  };
  protoOf(Image_0).component2_7eebsb_k$ = function () {
    return this.imageUrl_1;
  };
  protoOf(Image_0).component3_7eebsa_k$ = function () {
    return this.alt_1;
  };
  protoOf(Image_0).copy_tuo23y_k$ = function (selectedText, imageUrl, alt) {
    return new Image_0(selectedText, imageUrl, alt);
  };
  protoOf(Image_0).copy$default_93vzl_k$ = function (selectedText, imageUrl, alt, $super) {
    selectedText = selectedText === VOID ? this.selectedText_1 : selectedText;
    imageUrl = imageUrl === VOID ? this.imageUrl_1 : imageUrl;
    alt = alt === VOID ? this.alt_1 : alt;
    return $super === VOID ? this.copy_tuo23y_k$(selectedText, imageUrl, alt) : $super.copy_tuo23y_k$.call(this, selectedText, imageUrl, alt);
  };
  protoOf(Image_0).toString = function () {
    return 'Image(selectedText=' + this.selectedText_1 + ', imageUrl=' + this.imageUrl_1 + ', alt=' + this.alt_1 + ')';
  };
  protoOf(Image_0).hashCode = function () {
    var result = this.selectedText_1 == null ? 0 : getStringHashCode(this.selectedText_1);
    result = imul(result, 31) + getStringHashCode(this.imageUrl_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.alt_1) | 0;
    return result;
  };
  protoOf(Image_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Image_0))
      return false;
    var tmp0_other_with_cast = other instanceof Image_0 ? other : THROW_CCE();
    if (!(this.selectedText_1 == tmp0_other_with_cast.selectedText_1))
      return false;
    if (!(this.imageUrl_1 === tmp0_other_with_cast.imageUrl_1))
      return false;
    if (!(this.alt_1 === tmp0_other_with_cast.alt_1))
      return false;
    return true;
  };
  function Break(selectedText) {
    ControlStyle.call(this, '' + selectedText + '<br>');
    this.selectedText_1 = selectedText;
  }
  protoOf(Break).get_selectedText_oh03m7_k$ = function () {
    return this.selectedText_1;
  };
  protoOf(Break).component1_7eebsc_k$ = function () {
    return this.selectedText_1;
  };
  protoOf(Break).copy_q202ni_k$ = function (selectedText) {
    return new Break(selectedText);
  };
  protoOf(Break).copy$default_53frw5_k$ = function (selectedText, $super) {
    selectedText = selectedText === VOID ? this.selectedText_1 : selectedText;
    return $super === VOID ? this.copy_q202ni_k$(selectedText) : $super.copy_q202ni_k$.call(this, selectedText);
  };
  protoOf(Break).toString = function () {
    return 'Break(selectedText=' + this.selectedText_1 + ')';
  };
  protoOf(Break).hashCode = function () {
    return this.selectedText_1 == null ? 0 : getStringHashCode(this.selectedText_1);
  };
  protoOf(Break).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Break))
      return false;
    var tmp0_other_with_cast = other instanceof Break ? other : THROW_CCE();
    if (!(this.selectedText_1 == tmp0_other_with_cast.selectedText_1))
      return false;
    return true;
  };
  function ControlStyle(style) {
    this.style_1 = style;
  }
  protoOf(ControlStyle).get_style_iyqetk_k$ = function () {
    return this.style_1;
  };
  var com_example_blogmultiplatform_models_ControlStyle_Bold$stable;
  var com_example_blogmultiplatform_models_ControlStyle_Italic$stable;
  var com_example_blogmultiplatform_models_ControlStyle_Link$stable;
  var com_example_blogmultiplatform_models_ControlStyle_Title$stable;
  var com_example_blogmultiplatform_models_ControlStyle_Subtitle$stable;
  var com_example_blogmultiplatform_models_ControlStyle_Quote$stable;
  var com_example_blogmultiplatform_models_ControlStyle_Code$stable;
  var com_example_blogmultiplatform_models_ControlStyle_Image$stable;
  var com_example_blogmultiplatform_models_ControlStyle_Break$stable;
  var com_example_blogmultiplatform_models_ControlStyle$stable;
  var EditorControl_Bold_instance;
  var EditorControl_Italic_instance;
  var EditorControl_Link_instance;
  var EditorControl_Title_instance;
  var EditorControl_Subtitle_instance;
  var EditorControl_Quote_instance;
  var EditorControl_Code_instance;
  var EditorControl_Image_instance;
  function values_1() {
    return [EditorControl_Bold_getInstance(), EditorControl_Italic_getInstance(), EditorControl_Link_getInstance(), EditorControl_Title_getInstance(), EditorControl_Subtitle_getInstance(), EditorControl_Quote_getInstance(), EditorControl_Code_getInstance(), EditorControl_Image_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'Bold':
        return EditorControl_Bold_getInstance();
      case 'Italic':
        return EditorControl_Italic_getInstance();
      case 'Link':
        return EditorControl_Link_getInstance();
      case 'Title':
        return EditorControl_Title_getInstance();
      case 'Subtitle':
        return EditorControl_Subtitle_getInstance();
      case 'Quote':
        return EditorControl_Quote_getInstance();
      case 'Code':
        return EditorControl_Code_getInstance();
      case 'Image':
        return EditorControl_Image_getInstance();
      default:
        EditorControl_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
  }
  var EditorControl_entriesInitialized;
  function EditorControl_initEntries() {
    if (EditorControl_entriesInitialized)
      return Unit_getInstance();
    EditorControl_entriesInitialized = true;
    EditorControl_Bold_instance = new EditorControl('Bold', 0, Icon_getInstance().get_bold_wojl5a_k$());
    EditorControl_Italic_instance = new EditorControl('Italic', 1, Icon_getInstance().get_italic_ewys6x_k$());
    EditorControl_Link_instance = new EditorControl('Link', 2, Icon_getInstance().get_link_wopumb_k$());
    EditorControl_Title_instance = new EditorControl('Title', 3, Icon_getInstance().get_title_iz32un_k$());
    EditorControl_Subtitle_instance = new EditorControl('Subtitle', 4, Icon_getInstance().get_subtitle_55eoyp_k$());
    EditorControl_Quote_instance = new EditorControl('Quote', 5, Icon_getInstance().get_quote_ixn9eb_k$());
    EditorControl_Code_instance = new EditorControl('Code', 6, Icon_getInstance().get_code_wok7xy_k$());
    EditorControl_Image_instance = new EditorControl('Image', 7, Icon_getInstance().get_image_it3i2a_k$());
  }
  var $ENTRIES_1;
  function EditorControl(name, ordinal, icon) {
    Enum.call(this, name, ordinal);
    this.icon_1 = icon;
  }
  protoOf(EditorControl).get_icon_wont8i_k$ = function () {
    return this.icon_1;
  };
  function EditorControl_Bold_getInstance() {
    EditorControl_initEntries();
    return EditorControl_Bold_instance;
  }
  function EditorControl_Italic_getInstance() {
    EditorControl_initEntries();
    return EditorControl_Italic_instance;
  }
  function EditorControl_Link_getInstance() {
    EditorControl_initEntries();
    return EditorControl_Link_instance;
  }
  function EditorControl_Title_getInstance() {
    EditorControl_initEntries();
    return EditorControl_Title_instance;
  }
  function EditorControl_Subtitle_getInstance() {
    EditorControl_initEntries();
    return EditorControl_Subtitle_instance;
  }
  function EditorControl_Quote_getInstance() {
    EditorControl_initEntries();
    return EditorControl_Quote_instance;
  }
  function EditorControl_Code_getInstance() {
    EditorControl_initEntries();
    return EditorControl_Code_instance;
  }
  function EditorControl_Image_getInstance() {
    EditorControl_initEntries();
    return EditorControl_Image_instance;
  }
  function Companion_8() {
    Companion_instance_8 = this;
  }
  protoOf(Companion_8).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_6();
  };
  var Companion_instance_8;
  function Companion_getInstance_24() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function $serializer_6() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.example.blogmultiplatform.models.RandomJoke', this, 2);
    tmp0_serialDesc.addElement_5pzumi_k$('id', false);
    tmp0_serialDesc.addElement_5pzumi_k$('joke', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_6).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_6).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), StringSerializer_getInstance()];
  };
  protoOf($serializer_6).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp6_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp6_input.decodeIntElement_941u6a_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.decodeStringElement_3oenpg_k$(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.decodeIntElement_941u6a_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.decodeStringElement_3oenpg_k$(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.endStructure_1xqz0n_k$(tmp0_desc);
    return RandomJoke_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_6).serialize_twti3a_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 0, value.id_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 1, value.joke_1);
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_6).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_twti3a_k$(encoder, value instanceof RandomJoke ? value : THROW_CCE());
  };
  var $serializer_instance_6;
  function $serializer_getInstance_6() {
    if ($serializer_instance_6 == null)
      new $serializer_6();
    return $serializer_instance_6;
  }
  function RandomJoke_init_$Init$(seen1, id, joke, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_6().descriptor_1);
    }
    $this.id_1 = id;
    $this.joke_1 = joke;
    return $this;
  }
  function RandomJoke_init_$Create$(seen1, id, joke, serializationConstructorMarker) {
    return RandomJoke_init_$Init$(seen1, id, joke, serializationConstructorMarker, objectCreate(protoOf(RandomJoke)));
  }
  function RandomJoke(id, joke) {
    Companion_getInstance_24();
    this.id_1 = id;
    this.joke_1 = joke;
  }
  protoOf(RandomJoke).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(RandomJoke).get_joke_woop0o_k$ = function () {
    return this.joke_1;
  };
  protoOf(RandomJoke).component1_7eebsc_k$ = function () {
    return this.id_1;
  };
  protoOf(RandomJoke).component2_7eebsb_k$ = function () {
    return this.joke_1;
  };
  protoOf(RandomJoke).copy_xhhsuv_k$ = function (id, joke) {
    return new RandomJoke(id, joke);
  };
  protoOf(RandomJoke).copy$default_3bigry_k$ = function (id, joke, $super) {
    id = id === VOID ? this.id_1 : id;
    joke = joke === VOID ? this.joke_1 : joke;
    return $super === VOID ? this.copy_xhhsuv_k$(id, joke) : $super.copy_xhhsuv_k$.call(this, id, joke);
  };
  protoOf(RandomJoke).toString = function () {
    return 'RandomJoke(id=' + this.id_1 + ', joke=' + this.joke_1 + ')';
  };
  protoOf(RandomJoke).hashCode = function () {
    var result = this.id_1;
    result = imul(result, 31) + getStringHashCode(this.joke_1) | 0;
    return result;
  };
  protoOf(RandomJoke).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RandomJoke))
      return false;
    var tmp0_other_with_cast = other instanceof RandomJoke ? other : THROW_CCE();
    if (!(this.id_1 === tmp0_other_with_cast.id_1))
      return false;
    if (!(this.joke_1 === tmp0_other_with_cast.joke_1))
      return false;
    return true;
  };
  var com_example_blogmultiplatform_models_RandomJoke_$serializer$stable;
  var com_example_blogmultiplatform_models_RandomJoke$stable;
  function PopularArticle(category, authorName, readTime, title) {
    this.category_1 = category;
    this.authorName_1 = authorName;
    this.readTime_1 = readTime;
    this.title_1 = title;
  }
  protoOf(PopularArticle).get_category_uyv41l_k$ = function () {
    return this.category_1;
  };
  protoOf(PopularArticle).get_authorName_q0vry7_k$ = function () {
    return this.authorName_1;
  };
  protoOf(PopularArticle).get_readTime_ovnxho_k$ = function () {
    return this.readTime_1;
  };
  protoOf(PopularArticle).get_title_iz32un_k$ = function () {
    return this.title_1;
  };
  protoOf(PopularArticle).component1_7eebsc_k$ = function () {
    return this.category_1;
  };
  protoOf(PopularArticle).component2_7eebsb_k$ = function () {
    return this.authorName_1;
  };
  protoOf(PopularArticle).component3_7eebsa_k$ = function () {
    return this.readTime_1;
  };
  protoOf(PopularArticle).component4_7eebs9_k$ = function () {
    return this.title_1;
  };
  protoOf(PopularArticle).copy_hmmiyd_k$ = function (category, authorName, readTime, title) {
    return new PopularArticle(category, authorName, readTime, title);
  };
  protoOf(PopularArticle).copy$default_xa10wg_k$ = function (category, authorName, readTime, title, $super) {
    category = category === VOID ? this.category_1 : category;
    authorName = authorName === VOID ? this.authorName_1 : authorName;
    readTime = readTime === VOID ? this.readTime_1 : readTime;
    title = title === VOID ? this.title_1 : title;
    return $super === VOID ? this.copy_hmmiyd_k$(category, authorName, readTime, title) : $super.copy_hmmiyd_k$.call(this, category, authorName, readTime, title);
  };
  protoOf(PopularArticle).toString = function () {
    return 'PopularArticle(category=' + this.category_1 + ', authorName=' + this.authorName_1 + ', readTime=' + this.readTime_1 + ', title=' + this.title_1 + ')';
  };
  protoOf(PopularArticle).hashCode = function () {
    var result = getStringHashCode(this.category_1);
    result = imul(result, 31) + getStringHashCode(this.authorName_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.readTime_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.title_1) | 0;
    return result;
  };
  protoOf(PopularArticle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PopularArticle))
      return false;
    var tmp0_other_with_cast = other instanceof PopularArticle ? other : THROW_CCE();
    if (!(this.category_1 === tmp0_other_with_cast.category_1))
      return false;
    if (!(this.authorName_1 === tmp0_other_with_cast.authorName_1))
      return false;
    if (!(this.readTime_1 === tmp0_other_with_cast.readTime_1))
      return false;
    if (!(this.title_1 === tmp0_other_with_cast.title_1))
      return false;
    return true;
  };
  function HomePage($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-763277764);
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-763277764, $changed, -1, 'com.canerture.androidhub.pages.HomePage (Index.kt:62)');
      }
      var breakpoint = rememberBreakpoint($composer_0, 0);
      $composer_0.startReplaceableGroup_ip860b_k$(748809107);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.pages.HomePage.<anonymous>' call
        var value = mutableStateOf(emptyList());
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var postList$delegate = tmp0_group;
      $composer_0.startReplaceableGroup_ip860b_k$(748809177);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.pages.HomePage.<anonymous>' call
        var value_0 = mutableStateOf(null);
        this_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var error$delegate = tmp1_group;
      $composer_0.startReplaceableGroup_ip860b_k$(748809246);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_2.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (false ? true : it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.pages.HomePage.<anonymous>' call
        var value_1 = HomePage$slambda_0(postList$delegate, error$delegate, null);
        this_2.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      LaunchedEffect(Unit_getInstance(), tmp2_group, $composer_0, 70);
      var popularList = listOf([new PopularArticle('Category 1', 'Author 1', '1 Min', 'Title 1'), new PopularArticle('Category 2', 'Author 2', '5 Min', 'Title 2'), new PopularArticle('Category 3', 'Author 2', '10 Min', 'Title 3')]);
      var latestList = listOf([new PopularArticle('Category 1', 'Author 1', '1 Min', 'Title 1'), new PopularArticle('Category 2', 'Author 2', '5 Min', 'Title 2'), new PopularArticle('Category 3', 'Author 2', '10 Min', 'Title 3'), new PopularArticle('Category 3', 'Author 2', '10 Min', 'Title 3'), new PopularArticle('Category 3', 'Author 2', '10 Min', 'Title 3')]);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.canerture.androidhub.pages.HomePage.<anonymous>' call
      var tmp_5 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_5, -1997478029, true, HomePage$lambda_3(breakpoint, popularList, latestList, postList$delegate, error$delegate));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_6;
      if (invalid ? true : it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.pages.HomePage.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_111(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_2);
        tmp_6 = value_2;
      } else {
        tmp_6 = it_2;
      }
      var tmp_7 = tmp_6;
      var tmp0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      PageLayout('Home', tmp0, $composer_0, 54);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp3_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp3_safe_receiver == null)
      null;
    else {
      tmp3_safe_receiver.updateScope_t8jcf_k$(HomePage$lambda_4($changed));
    }
  }
  function AndroidHeroContent(breakpoint, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-657681109);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(breakpoint) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-657681109, $dirty, -1, 'com.canerture.androidhub.pages.AndroidHeroContent (Index.kt:159)');
      }
      var tmp = CenterVertically_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.canerture.androidhub.pages.AndroidHeroContent.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, -1908100434, true, AndroidHeroContent$lambda(breakpoint));
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
        // Inline function 'com.canerture.androidhub.pages.AndroidHeroContent.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_113(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Row(null, null, tmp, null, tmp0, $composer_0, 24576, 11);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(AndroidHeroContent$lambda_0(breakpoint, $changed));
    }
  }
  function PopularPosts(list, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1314021774);
    if (isTraceInProgress()) {
      traceEventStart(1314021774, $changed, -1, 'com.canerture.androidhub.pages.PopularPosts (Index.kt:207)');
    }
    var tmp = margin(color(fontWeight_0(textAlign(Companion_getInstance_3(), Companion_getInstance_4().get_Center_3arb0i_k$()), Companion_getInstance_7().get_Bold_wnz5ke_k$()), getSitePalette().get_blue_wojj4z_k$().toRgb_1tsrpu_k$()), VOID, VOID, get_cssRem(1));
    SpanText('Popular Posts', tmp, null, null, $composer_0, 70, 12);
    var tmp_0 = fillMaxWidth(Companion_getInstance_3());
    var tmp_1 = CenterVertically_getInstance();
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.canerture.androidhub.pages.PopularPosts.<anonymous>' call
    var tmp_2 = $composer_0;
    var dispatchReceiver = composableLambda(tmp_2, -1358926959, true, PopularPosts$lambda(list));
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
    var tmp_3;
    if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'com.canerture.androidhub.pages.PopularPosts.<anonymous>.<anonymous>' call
      var value = ComposableLambda$invoke$ref_114(dispatchReceiver);
      $composer_1.updateRememberedValue_l1wh71_k$(value);
      tmp_3 = value;
    } else {
      tmp_3 = it;
    }
    var tmp_4 = tmp_3;
    var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
    $composer_1.endReplaceableGroup_ern0ak_k$();
    Row(tmp_0, null, tmp_1, null, tmp0, $composer_0, 24584, 10);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(PopularPosts$lambda_0(list, $changed));
    }
  }
  function LatestPosts(list, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(726270168);
    if (isTraceInProgress()) {
      traceEventStart(726270168, $changed, -1, 'com.canerture.androidhub.pages.LatestPosts (Index.kt:232)');
    }
    var tmp = margin(color(fontWeight_0(textAlign(fillMaxWidth(Companion_getInstance_3()), Companion_getInstance_4().get_Start_ih4i6x_k$()), Companion_getInstance_7().get_Bold_wnz5ke_k$()), getSitePalette().get_blue_wojj4z_k$().toRgb_1tsrpu_k$()), get_cssRem(3), VOID, get_cssRem(1));
    SpanText('Latest Posts', tmp, null, null, $composer_0, 70, 12);
    var tmp0_modifier = fillMaxWidth(Companion_getInstance_3());
    var tmp1_numColumns = new ResponsiveValues(2, 1, 3, 3, 3);
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.canerture.androidhub.pages.LatestPosts.<anonymous>' call
    var tmp_0 = $composer_0;
    var dispatchReceiver = composableLambda(tmp_0, -1740246897, true, LatestPosts$lambda(list));
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
      // Inline function 'com.canerture.androidhub.pages.LatestPosts.<anonymous>.<anonymous>' call
      var value = ComposableLambda$invoke$ref_115(dispatchReceiver);
      $composer_1.updateRememberedValue_l1wh71_k$(value);
      tmp_1 = value;
    } else {
      tmp_1 = it;
    }
    var tmp_2 = tmp_1;
    var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_1.endReplaceableGroup_ern0ak_k$();
    SimpleGrid(tmp1_numColumns, tmp0_modifier, null, null, tmp0, $composer_0, 24640, 12);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(LatestPosts$lambda_0(list, $changed));
    }
  }
  var com_canerture_androidhub_pages_PopularArticle$stable;
  function ComposableLambda$invoke$ref_110($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_1$lambda_5yb608($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1189674197, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$IndexKt.lambda-1.<anonymous> (Index.kt:189)');
    }
    var tmp = color(textAlign(lineHeight(fontSize(Companion_getInstance_3(), get_cssRem(1.25)), 2), Companion_getInstance_4().get_Start_ih4i6x_k$()), getSitePalette().get_white_j0plog_k$());
    SpanText('Apply to be an author', tmp, null, null, $composer_0, 70, 12);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$IndexKt() {
    ComposableSingletons$IndexKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_110(composableLambdaInstance(1189674197, false, ComposableSingletons$IndexKt$lambda_1$lambda_5yb608));
  }
  protoOf(ComposableSingletons$IndexKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$IndexKt_instance;
  function ComposableSingletons$IndexKt_getInstance() {
    if (ComposableSingletons$IndexKt_instance == null)
      new ComposableSingletons$IndexKt();
    return ComposableSingletons$IndexKt_instance;
  }
  function HomePage$lambda($postList$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('postList', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $postList$delegate.get_value_j01efc_k$();
  }
  function HomePage$lambda_0($postList$delegate, value) {
    getLocalDelegateReference('postList', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $postList$delegate.set_value_v1vabv_k$(value);
    return Unit_getInstance();
  }
  function HomePage$lambda_1($error$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('error', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $error$delegate.get_value_j01efc_k$();
  }
  function HomePage$lambda_2($error$delegate, value) {
    getLocalDelegateReference('error', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $error$delegate.set_value_v1vabv_k$(value);
    return Unit_getInstance();
  }
  function HomePage$slambda$lambda($postList$delegate) {
    return function (it) {
      HomePage$lambda_0($postList$delegate, it);
      return Unit_getInstance();
    };
  }
  function HomePage$slambda$lambda_0($error$delegate) {
    return function (it) {
      HomePage$lambda_2($error$delegate, toString(it.message));
      return Unit_getInstance();
    };
  }
  function HomePage$slambda($postList$delegate, $error$delegate, resultContinuation) {
    this.$postList$delegate_1 = $postList$delegate;
    this.$error$delegate_1 = $error$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HomePage$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(HomePage$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HomePage$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = get_http(window).get$default_sm141l_k$('https://androidhub.dev/api/get_posts.php', VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ARGUMENT0__1 = suspendResult;
            this.result1__1 = decodeToString(this.ARGUMENT0__1);
            println(this.result1__1);
            this.set_state_rjd8d0_k$(2);
            var tmp_0 = HomePage$slambda$lambda(this.$postList$delegate_1);
            suspendResult = getPosts(tmp_0, HomePage$slambda$lambda_0(this.$error$delegate_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
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
  protoOf(HomePage$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new HomePage$slambda(this.$postList$delegate_1, this.$error$delegate_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(HomePage$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function HomePage$slambda_0($postList$delegate, $error$delegate, resultContinuation) {
    var i = new HomePage$slambda($postList$delegate, $error$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function HomePage$lambda_3($breakpoint, $popularList, $latestList, $postList$delegate, $error$delegate) {
    return function ($this$PageLayout, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1997478029, $changed, -1, 'com.canerture.androidhub.pages.HomePage.<anonymous> (Index.kt:136)');
      }
      AndroidHeroContent($breakpoint, $composer_0, 0);
      $composer_0.startReplaceableGroup_ip860b_k$(-219728282);
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!HomePage$lambda($postList$delegate).isEmpty_y1axqb_k$()) {
        Text(toString_0(HomePage$lambda($postList$delegate)), $composer_0, 0);
      }
      $composer_0.endReplaceableGroup_ern0ak_k$();
      $composer_0.startReplaceableGroup_ip860b_k$(-219728196);
      if (!(HomePage$lambda_1($error$delegate) == null)) {
        Text('Error: ' + HomePage$lambda_1($error$delegate), $composer_0, 0);
      }
      $composer_0.endReplaceableGroup_ern0ak_k$();
      PopularPosts($popularList, $composer_0, 0);
      LatestPosts($latestList, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_111($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function HomePage$lambda_4($$changed) {
    return function ($composer, $force) {
      HomePage($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function AndroidHeroContent$lambda$lambda$lambda($ctx) {
    return function (it) {
      $ctx.get_router_j3zccy_k$().tryRoutingTo$default_gm9buu_k$('/about');
      return Unit_getInstance();
    };
  }
  function AndroidHeroContent$lambda$lambda($breakpoint) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1836037349, $changed, -1, 'com.canerture.androidhub.pages.AndroidHeroContent.<anonymous>.<anonymous> (Index.kt:164)');
      }
      var tmp = fontSize(color(toModifier(get_HeadlineTextStyle(), [], $composer_0, 64), getSitePalette().get_green_is36qi_k$()), getHeadlineFontSize($breakpoint));
      SpanText('Hi \uD83D\uDC4B', tmp, null, null, $composer_0, 70, 12);
      Spacer($composer_0, 0);
      var tmp_0 = fontSize(color(toModifier(get_SubheadlineTextStyle(), [], $composer_0, 64), getSitePalette().get_blue_wojj4z_k$()), getSubheadlineFontSize($breakpoint));
      SpanText('Let\u2019s explore everything about the exciting world of Android together. On this platform, you can delve into the vast opportunities offered by the Android operating system and examine the latest developments in the field. Come on, let\u2019s discover the limitless world of Android together!', tmp_0, null, null, $composer_0, 70, 12);
      Spacer($composer_0, 0);
      var ctx = rememberPageContext($composer_0, 0);
      var tmp_1 = AndroidHeroContent$lambda$lambda$lambda(ctx);
      var tmp_2 = setVariable(setVariable(margin(Companion_getInstance_3(), get_cssRem(1)), ButtonVars_getInstance().get_BackgroundDefaultColor_so3bvr_k$(), getSitePalette().get_green_is36qi_k$()), ButtonVars_getInstance().get_BackgroundHoverColor_qkbxz2_k$(), getSitePalette().get_blue_wojj4z_k$());
      var tmp_3 = LG_getInstance();
      Button(tmp_1, tmp_2, null, null, false, tmp_3, null, null, null, ComposableSingletons$IndexKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 805568576, 476);
      var tmp_4;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_4 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_112($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function AndroidHeroContent$lambda($breakpoint) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1908100434, $changed, -1, 'com.canerture.androidhub.pages.AndroidHeroContent.<anonymous> (Index.kt:163)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.canerture.androidhub.pages.AndroidHeroContent.<anonymous>.<anonymous>.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, 1836037349, true, AndroidHeroContent$lambda$lambda($breakpoint));
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
        // Inline function 'com.canerture.androidhub.pages.AndroidHeroContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_112(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Column(null, null, null, null, tmp0, $composer_0, 24576, 15);
      var tmp_2 = height(Companion_getInstance_3(), get_cssRem(28));
      // Inline function 'org.jetbrains.compose.web.css.Companion.Block' call
      Companion_getInstance_10();
      // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_3 = display(tmp_2, 'block');
      Image('/android-figure.png', 'Android Figure', tmp_3, null, null, null, false, null, $composer_0, 566, 248);
      var tmp_4;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_4 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_113($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function AndroidHeroContent$lambda_0($breakpoint, $$changed) {
    return function ($composer, $force) {
      AndroidHeroContent($breakpoint, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function PopularPosts$lambda($list) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1358926959, $changed, -1, 'com.canerture.androidhub.pages.PopularPosts.<anonymous> (Index.kt:220)');
      }
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var tmp0_iterator = $list.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        // Inline function 'com.canerture.androidhub.pages.PopularPosts.<anonymous>.<anonymous>.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var index_0 = checkIndexOverflow(tmp1);
        PopularArticleItem($this$Row, index_0 === get_lastIndex($list), item, $composer_0, 8);
      }
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_114($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function PopularPosts$lambda_0($list, $$changed) {
    return function ($composer, $force) {
      PopularPosts($list, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function LatestPosts$lambda($list) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1740246897, $changed, -1, 'com.canerture.androidhub.pages.LatestPosts.<anonymous> (Index.kt:247)');
        }
        // Inline function 'kotlin.collections.forEachIndexed' call
        var index = 0;
        var tmp0_iterator = $list.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var item = tmp0_iterator.next_20eer_k$();
          // Inline function 'com.canerture.androidhub.pages.LatestPosts.<anonymous>.<anonymous>.<anonymous>' call
          var tmp1 = index;
          index = tmp1 + 1 | 0;
          var index_0 = checkIndexOverflow(tmp1);
          LatestArticleItem(index_0 === get_lastIndex($list), item, $composer_0, 0);
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
  function ComposableLambda$invoke$ref_115($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function LatestPosts$lambda_0($list, $$changed) {
    return function ($composer, $force) {
      LatestPosts($list, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function PostPage($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-96160543);
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-96160543, $changed, -1, 'com.canerture.androidhub.pages.PostPage (Post.kt:8)');
      }
      PostPageLayout('Post', $composer_0, 6);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(PostPage$lambda($changed));
    }
  }
  function PostPage$lambda($$changed) {
    return function ($composer, $force) {
      PostPage($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function checkUserExistence(user, $completion) {
    var tmp = new $checkUserExistenceCOROUTINE$1(user, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function checkUserId(id, $completion) {
    var tmp = new $checkUserIdCOROUTINE$2(id, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function fetchRandomJoke(onComplete, $completion) {
    var tmp = new $fetchRandomJokeCOROUTINE$3(onComplete, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function addPost(post, $completion) {
    var tmp = new $addPostCOROUTINE$4(post, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function updatePost(post, $completion) {
    var tmp = new $updatePostCOROUTINE$5(post, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function fetchMyPosts(skip, onSuccess, onError, $completion) {
    var tmp = new $fetchMyPostsCOROUTINE$6(skip, onSuccess, onError, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function fetchMainPosts(onSuccess, onError, $completion) {
    var tmp = new $fetchMainPostsCOROUTINE$7(onSuccess, onError, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function fetchLatestPosts(skip, onSuccess, onError, $completion) {
    var tmp = new $fetchLatestPostsCOROUTINE$8(skip, onSuccess, onError, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function fetchSponsoredPosts(onSuccess, onError, $completion) {
    var tmp = new $fetchSponsoredPostsCOROUTINE$9(onSuccess, onError, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function fetchPopularPosts(skip, onSuccess, onError, $completion) {
    var tmp = new $fetchPopularPostsCOROUTINE$10(skip, onSuccess, onError, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function deleteSelectedPosts(ids, $completion) {
    var tmp = new $deleteSelectedPostsCOROUTINE$11(ids, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function searchPostsByTitle(query, skip, onSuccess, onError, $completion) {
    var tmp = new $searchPostsByTitleCOROUTINE$12(query, skip, onSuccess, onError, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function searchPostsByCategory(category, skip, onSuccess, onError, $completion) {
    var tmp = new $searchPostsByCategoryCOROUTINE$13(category, skip, onSuccess, onError, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function fetchSelectedPost(id, $completion) {
    var tmp = new $fetchSelectedPostCOROUTINE$14(id, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function subscribeToNewsletter(newsletter, $completion) {
    var tmp = new $subscribeToNewsletterCOROUTINE$15(newsletter, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function $checkUserExistenceCOROUTINE$1(user, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.user_1 = user;
  }
  protoOf($checkUserExistenceCOROUTINE$1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var tmp_0 = get_api(window);
            var this_0 = Default_getInstance();
            var value = this.user_1;
            var this_1 = this_0.get_serializersModule_piitvg_k$();
            var this_2 = serializer(this_1, createKType(getKClass(User), arrayOf([]), false));
            suspendResult = tmp_0.tryPost$default_gns3yg_k$('usercheck', VOID, encodeToByteArray(this_0.encodeToString_k0apqx_k$(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), value)), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0_safe_receiver = suspendResult;
            var this_3 = tmp0_safe_receiver == null ? null : decodeToString(tmp0_safe_receiver);
            var tmp_1 = this;
            var this_4 = Default_getInstance();
            var string = toString(this_3);
            var this_5 = this_4.get_serializersModule_piitvg_k$();
            var this_6 = serializer(this_5, createKType(getKClass(UserWithoutPassword), arrayOf([]), true));
            tmp_1.TRY_RESULT0__1 = this_4.decodeFromString_jwu9sq_k$(isInterface(this_6, KSerializer) ? this_6 : THROW_CCE(), string);
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_2 = this.get_exception_x0n6w6_k$();
            if (tmp_2 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp_3 = this;
              println('CURRENT_USER');
              println(e.message);
              tmp_3.TRY_RESULT0__1 = null;
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_fex74n_k$(3);
            return this.TRY_RESULT0__1;
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
  function $checkUserIdCOROUTINE$2(id, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.id_1 = id;
  }
  protoOf($checkUserIdCOROUTINE$2).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var tmp_0 = get_api(window);
            var this_0 = Default_getInstance();
            var value = this.id_1;
            var this_1 = this_0.get_serializersModule_piitvg_k$();
            var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().get_stringClass_bik2gy_k$(), arrayOf([]), false));
            suspendResult = tmp_0.tryPost$default_gns3yg_k$('checkuserid', VOID, encodeToByteArray(this_0.encodeToString_k0apqx_k$(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), value)), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0_safe_receiver = suspendResult;
            var this_3 = tmp0_safe_receiver == null ? null : decodeToString(tmp0_safe_receiver);
            var tmp_1 = this;
            var this_4 = Default_getInstance();
            var string = toString(this_3);
            var this_5 = this_4.get_serializersModule_piitvg_k$();
            var this_6 = serializer(this_5, createKType(PrimitiveClasses_getInstance().get_booleanClass_d285fr_k$(), arrayOf([]), false));
            tmp_1.TRY_RESULT0__1 = this_4.decodeFromString_jwu9sq_k$(isInterface(this_6, KSerializer) ? this_6 : THROW_CCE(), string);
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_2 = this.get_exception_x0n6w6_k$();
            if (tmp_2 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp_3 = this;
              println(toString(e.message));
              tmp_3.TRY_RESULT0__1 = false;
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_fex74n_k$(3);
            return this.TRY_RESULT0__1;
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
  function $fetchRandomJokeCOROUTINE$3(onComplete, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.onComplete_1 = onComplete;
  }
  protoOf($fetchRandomJokeCOROUTINE$3).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(9);
            var tmp_0 = this;
            tmp_0.date0__1 = localStorage['date'];
            if (!(this.date0__1 == null)) {
              this.difference1__1 = Date.now() - toDouble(this.date0__1);
              this.dayHasPassed2__1 = this.difference1__1 >= 8.64E7;
              if (this.dayHasPassed2__1) {
                this.set_exceptionState_fex74n_k$(5);
                this.set_state_rjd8d0_k$(4);
                suspendResult = get_http(window).get$default_sm141l_k$(Constants_getInstance_0().get_HUMOR_API_URL_dfxjq3_k$(), VOID, VOID, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                try {
                  var tmp0_safe_receiver = localStorage['joke'];
                  var tmp_1;
                  if (tmp0_safe_receiver == null) {
                    tmp_1 = null;
                  } else {
                    var this_0 = Default_getInstance();
                    var string = toString(tmp0_safe_receiver);
                    var this_1 = this_0.get_serializersModule_piitvg_k$();
                    var this_2 = serializer(this_1, createKType(getKClass(RandomJoke), arrayOf([]), false));
                    tmp_1 = this_0.decodeFromString_jwu9sq_k$(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), string);
                  }
                  var tmp1_safe_receiver = tmp_1;
                  if (tmp1_safe_receiver == null)
                    null;
                  else {
                    this.onComplete_1(tmp1_safe_receiver);
                  }
                } catch ($p) {
                  if ($p instanceof Exception) {
                    var e = $p;
                    this.onComplete_1(new RandomJoke(-1, toString(e.message)));
                    println(e.message);
                  } else {
                    throw $p;
                  }
                }
                this.set_state_rjd8d0_k$(7);
                continue $sm;
              }
            } else {
              this.set_exceptionState_fex74n_k$(2);
              this.set_state_rjd8d0_k$(1);
              suspendResult = get_http(window).get$default_sm141l_k$(Constants_getInstance_0().get_HUMOR_API_URL_dfxjq3_k$(), VOID, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            var ARGUMENT = suspendResult;
            var result = decodeToString(ARGUMENT);
            var this_3 = Default_getInstance();
            var string_0 = toString(result);
            var this_4 = this_3.get_serializersModule_piitvg_k$();
            var this_5 = serializer(this_4, createKType(getKClass(RandomJoke), arrayOf([]), false));
            this.onComplete_1(this_3.decodeFromString_jwu9sq_k$(isInterface(this_5, KSerializer) ? this_5 : THROW_CCE(), string_0));
            localStorage['date'] = Date.now().toString();
            localStorage['joke'] = result;
            this.set_exceptionState_fex74n_k$(9);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(9);
            var tmp_2 = this.get_exception_x0n6w6_k$();
            if (tmp_2 instanceof Exception) {
              var e_0 = this.get_exception_x0n6w6_k$();
              this.onComplete_1(new RandomJoke(-1, toString(e_0.message)));
              println(e_0.message);
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            this.set_exceptionState_fex74n_k$(9);
            this.set_state_rjd8d0_k$(8);
            continue $sm;
          case 4:
            var ARGUMENT_0 = suspendResult;
            var result_0 = decodeToString(ARGUMENT_0);
            var this_6 = Default_getInstance();
            var string_1 = toString(result_0);
            var this_7 = this_6.get_serializersModule_piitvg_k$();
            var this_8 = serializer(this_7, createKType(getKClass(RandomJoke), arrayOf([]), false));
            this.onComplete_1(this_6.decodeFromString_jwu9sq_k$(isInterface(this_8, KSerializer) ? this_8 : THROW_CCE(), string_1));
            localStorage['date'] = Date.now().toString();
            localStorage['joke'] = result_0;
            this.set_exceptionState_fex74n_k$(9);
            this.set_state_rjd8d0_k$(6);
            continue $sm;
          case 5:
            this.set_exceptionState_fex74n_k$(9);
            var tmp_3 = this.get_exception_x0n6w6_k$();
            if (tmp_3 instanceof Exception) {
              var e_1 = this.get_exception_x0n6w6_k$();
              this.onComplete_1(new RandomJoke(-1, toString(e_1.message)));
              println(e_1.message);
              this.set_state_rjd8d0_k$(6);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 6:
            this.set_exceptionState_fex74n_k$(9);
            this.set_state_rjd8d0_k$(7);
            continue $sm;
          case 7:
            this.set_state_rjd8d0_k$(8);
            continue $sm;
          case 8:
            return Unit_getInstance();
          case 9:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_2 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 9) {
          throw e_2;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_2);
        }
      }
     while (true);
  };
  function $addPostCOROUTINE$4(post, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.post_1 = post;
  }
  protoOf($addPostCOROUTINE$4).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var tmp_0 = get_api(window);
            var this_0 = Default_getInstance();
            var value = this.post_1;
            var this_1 = this_0.get_serializersModule_piitvg_k$();
            var this_2 = serializer(this_1, createKType(getKClass(Post), arrayOf([]), false));
            suspendResult = tmp_0.tryPost$default_gns3yg_k$('addpost', VOID, encodeToByteArray(this_0.encodeToString_k0apqx_k$(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), value)), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0_safe_receiver = suspendResult;
            var ARGUMENT = tmp0_safe_receiver == null ? null : decodeToString(tmp0_safe_receiver);
            this.TRY_RESULT0__1 = toBoolean(ARGUMENT);
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp_2 = this;
              println(e.message);
              tmp_2.TRY_RESULT0__1 = false;
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_fex74n_k$(3);
            return this.TRY_RESULT0__1;
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
  function $updatePostCOROUTINE$5(post, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.post_1 = post;
  }
  protoOf($updatePostCOROUTINE$5).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var tmp_0 = get_api(window);
            var this_0 = Default_getInstance();
            var value = this.post_1;
            var this_1 = this_0.get_serializersModule_piitvg_k$();
            var this_2 = serializer(this_1, createKType(getKClass(Post), arrayOf([]), false));
            suspendResult = tmp_0.tryPost$default_gns3yg_k$('updatepost', VOID, encodeToByteArray(this_0.encodeToString_k0apqx_k$(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), value)), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0_safe_receiver = suspendResult;
            var ARGUMENT = tmp0_safe_receiver == null ? null : decodeToString(tmp0_safe_receiver);
            this.TRY_RESULT0__1 = toBoolean(ARGUMENT);
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp_2 = this;
              println(e.message);
              tmp_2.TRY_RESULT0__1 = false;
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_fex74n_k$(3);
            return this.TRY_RESULT0__1;
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
  function $fetchMyPostsCOROUTINE$6(skip, onSuccess, onError, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.skip_1 = skip;
    this.onSuccess_1 = onSuccess;
    this.onError_1 = onError;
  }
  protoOf($fetchMyPostsCOROUTINE$6).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var tmp_0 = get_api(window);
            var tmp_1 = Constants_getInstance().get_SKIP_PARAM_bcznli_k$();
            var tmp_2 = Constants_getInstance().get_AUTHOR_PARAM_2lltdq_k$();
            var this_0 = localStorage;
            var key = 'username';
            suspendResult = tmp_0.tryGet$default_tg3lb4_k$('readmyposts?' + tmp_1 + '=' + this.skip_1 + '&' + tmp_2 + '=' + this_0[key], VOID, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0_safe_receiver = suspendResult;
            var result = tmp0_safe_receiver == null ? null : decodeToString(tmp0_safe_receiver);
            var this_1 = Default_getInstance();
            var string = toString(result);
            var this_2 = this_1.get_serializersModule_piitvg_k$();
            var this_3 = serializer(this_2, createKType(getKClass(ApiListResponse), arrayOf([]), false));
            this.onSuccess_1(this_1.decodeFromString_jwu9sq_k$(isInterface(this_3, KSerializer) ? this_3 : THROW_CCE(), string));
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_3 = this.get_exception_x0n6w6_k$();
            if (tmp_3 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              println(e);
              this.onError_1(e);
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_fex74n_k$(3);
            return Unit_getInstance();
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
  function $fetchMainPostsCOROUTINE$7(onSuccess, onError, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.onSuccess_1 = onSuccess;
    this.onError_1 = onError;
  }
  protoOf($fetchMainPostsCOROUTINE$7).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = get_api(window).tryGet$default_tg3lb4_k$('readmainposts', VOID, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0_safe_receiver = suspendResult;
            var result = tmp0_safe_receiver == null ? null : decodeToString(tmp0_safe_receiver);
            var this_0 = Default_getInstance();
            var string = toString(result);
            var this_1 = this_0.get_serializersModule_piitvg_k$();
            var this_2 = serializer(this_1, createKType(getKClass(ApiListResponse), arrayOf([]), false));
            this.onSuccess_1(this_0.decodeFromString_jwu9sq_k$(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), string));
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              println(e);
              this.onError_1(e);
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_fex74n_k$(3);
            return Unit_getInstance();
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
  function $fetchLatestPostsCOROUTINE$8(skip, onSuccess, onError, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.skip_1 = skip;
    this.onSuccess_1 = onSuccess;
    this.onError_1 = onError;
  }
  protoOf($fetchLatestPostsCOROUTINE$8).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = get_api(window).tryGet$default_tg3lb4_k$('readlatestposts?' + Constants_getInstance().get_SKIP_PARAM_bcznli_k$() + '=' + this.skip_1, VOID, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0_safe_receiver = suspendResult;
            var result = tmp0_safe_receiver == null ? null : decodeToString(tmp0_safe_receiver);
            var this_0 = Default_getInstance();
            var string = toString(result);
            var this_1 = this_0.get_serializersModule_piitvg_k$();
            var this_2 = serializer(this_1, createKType(getKClass(ApiListResponse), arrayOf([]), false));
            this.onSuccess_1(this_0.decodeFromString_jwu9sq_k$(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), string));
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              println(e);
              this.onError_1(e);
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_fex74n_k$(3);
            return Unit_getInstance();
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
  function $fetchSponsoredPostsCOROUTINE$9(onSuccess, onError, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.onSuccess_1 = onSuccess;
    this.onError_1 = onError;
  }
  protoOf($fetchSponsoredPostsCOROUTINE$9).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = get_api(window).tryGet$default_tg3lb4_k$('readsponsoredposts', VOID, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0_safe_receiver = suspendResult;
            var result = tmp0_safe_receiver == null ? null : decodeToString(tmp0_safe_receiver);
            var this_0 = Default_getInstance();
            var string = toString(result);
            var this_1 = this_0.get_serializersModule_piitvg_k$();
            var this_2 = serializer(this_1, createKType(getKClass(ApiListResponse), arrayOf([]), false));
            this.onSuccess_1(this_0.decodeFromString_jwu9sq_k$(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), string));
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              println(e);
              this.onError_1(e);
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_fex74n_k$(3);
            return Unit_getInstance();
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
  function $fetchPopularPostsCOROUTINE$10(skip, onSuccess, onError, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.skip_1 = skip;
    this.onSuccess_1 = onSuccess;
    this.onError_1 = onError;
  }
  protoOf($fetchPopularPostsCOROUTINE$10).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = get_api(window).tryGet$default_tg3lb4_k$('readpopularposts?' + Constants_getInstance().get_SKIP_PARAM_bcznli_k$() + '=' + this.skip_1, VOID, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0_safe_receiver = suspendResult;
            var result = tmp0_safe_receiver == null ? null : decodeToString(tmp0_safe_receiver);
            var this_0 = Default_getInstance();
            var string = toString(result);
            var this_1 = this_0.get_serializersModule_piitvg_k$();
            var this_2 = serializer(this_1, createKType(getKClass(ApiListResponse), arrayOf([]), false));
            this.onSuccess_1(this_0.decodeFromString_jwu9sq_k$(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), string));
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              println(e);
              this.onError_1(e);
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_fex74n_k$(3);
            return Unit_getInstance();
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
  function $deleteSelectedPostsCOROUTINE$11(ids, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ids_1 = ids;
  }
  protoOf($deleteSelectedPostsCOROUTINE$11).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var tmp_0 = get_api(window);
            var this_0 = Default_getInstance();
            var value = this.ids_1;
            var this_1 = this_0.get_serializersModule_piitvg_k$();
            var this_2 = serializer(this_1, createKType(getKClass(List), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().get_stringClass_bik2gy_k$(), arrayOf([]), false))]), false));
            suspendResult = tmp_0.tryPost$default_gns3yg_k$('deleteselectedposts', VOID, encodeToByteArray(this_0.encodeToString_k0apqx_k$(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), value)), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0_safe_receiver = suspendResult;
            var result = tmp0_safe_receiver == null ? null : decodeToString(tmp0_safe_receiver);
            this.TRY_RESULT0__1 = toBoolean(result);
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp_2 = this;
              println(e.message);
              tmp_2.TRY_RESULT0__1 = false;
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_fex74n_k$(3);
            return this.TRY_RESULT0__1;
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
  function $searchPostsByTitleCOROUTINE$12(query, skip, onSuccess, onError, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.query_1 = query;
    this.skip_1 = skip;
    this.onSuccess_1 = onSuccess;
    this.onError_1 = onError;
  }
  protoOf($searchPostsByTitleCOROUTINE$12).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = get_api(window).tryGet$default_tg3lb4_k$('searchposts?' + Constants_getInstance().get_QUERY_PARAM_lmeus3_k$() + '=' + this.query_1 + '&' + Constants_getInstance().get_SKIP_PARAM_bcznli_k$() + '=' + this.skip_1, VOID, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0_safe_receiver = suspendResult;
            var result = tmp0_safe_receiver == null ? null : decodeToString(tmp0_safe_receiver);
            var this_0 = Default_getInstance();
            var string = toString(result);
            var this_1 = this_0.get_serializersModule_piitvg_k$();
            var this_2 = serializer(this_1, createKType(getKClass(ApiListResponse), arrayOf([]), false));
            this.onSuccess_1(this_0.decodeFromString_jwu9sq_k$(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), string));
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              println(e.message);
              this.onError_1(e);
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_fex74n_k$(3);
            return Unit_getInstance();
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
  function $searchPostsByCategoryCOROUTINE$13(category, skip, onSuccess, onError, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.category_1 = category;
    this.skip_1 = skip;
    this.onSuccess_1 = onSuccess;
    this.onError_1 = onError;
  }
  protoOf($searchPostsByCategoryCOROUTINE$13).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = get_api(window).tryGet$default_tg3lb4_k$('searchpostsbycategory?' + Constants_getInstance().get_CATEGORY_PARAM_qz86iz_k$() + '=' + this.category_1.get_name_woqyms_k$() + '&' + Constants_getInstance().get_SKIP_PARAM_bcznli_k$() + '=' + this.skip_1, VOID, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0_safe_receiver = suspendResult;
            var result = tmp0_safe_receiver == null ? null : decodeToString(tmp0_safe_receiver);
            var this_0 = Default_getInstance();
            var string = toString(result);
            var this_1 = this_0.get_serializersModule_piitvg_k$();
            var this_2 = serializer(this_1, createKType(getKClass(ApiListResponse), arrayOf([]), false));
            this.onSuccess_1(this_0.decodeFromString_jwu9sq_k$(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), string));
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              println(e.message);
              this.onError_1(e);
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_fex74n_k$(3);
            return Unit_getInstance();
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
  function $fetchSelectedPostCOROUTINE$14(id, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.id_1 = id;
  }
  protoOf($fetchSelectedPostCOROUTINE$14).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = get_api(window).tryGet$default_tg3lb4_k$('readselectedpost?' + Constants_getInstance().get_POST_ID_PARAM_nkrdb5_k$() + '=' + this.id_1, VOID, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0_safe_receiver = suspendResult;
            var result = tmp0_safe_receiver == null ? null : decodeToString(tmp0_safe_receiver);
            var tmp_0 = this;
            var tmp_1;
            if (result == null) {
              tmp_1 = null;
            } else {
              var this_0 = Default_getInstance();
              var string = toString(result);
              var this_1 = this_0.get_serializersModule_piitvg_k$();
              var this_2 = serializer(this_1, createKType(getKClass(ApiResponse), arrayOf([]), true));
              tmp_1 = this_0.decodeFromString_jwu9sq_k$(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), string);
            }

            var tmp2_elvis_lhs = tmp_1;
            tmp_0.TRY_RESULT0__1 = tmp2_elvis_lhs == null ? new Error_1('Result is null') : tmp2_elvis_lhs;
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_2 = this.get_exception_x0n6w6_k$();
            if (tmp_2 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp_3 = this;
              println(e);
              tmp_3.TRY_RESULT0__1 = new Error_1(toString(e.message));
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_fex74n_k$(3);
            return this.TRY_RESULT0__1;
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
  function $subscribeToNewsletterCOROUTINE$15(newsletter, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.newsletter_1 = newsletter;
  }
  protoOf($subscribeToNewsletterCOROUTINE$15).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var tmp_0 = get_api(window);
            var this_0 = Default_getInstance();
            var value = this.newsletter_1;
            var this_1 = this_0.get_serializersModule_piitvg_k$();
            var this_2 = serializer(this_1, createKType(getKClass(Newsletter), arrayOf([]), false));
            suspendResult = tmp_0.tryPost$default_gns3yg_k$('subscribe', VOID, encodeToByteArray(this_0.encodeToString_k0apqx_k$(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), value)), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0_safe_receiver = suspendResult;
            var ARGUMENT = tmp0_safe_receiver == null ? null : decodeToString(tmp0_safe_receiver);
            var ARGUMENT_0 = toString(ARGUMENT);
            return replace(ARGUMENT_0, '"', '');
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
  function Constants_0() {
    Constants_instance_0 = this;
    this.FONT_FAMILY_1 = 'Roboto';
    this.SIDE_PANEL_WIDTH_1 = 250;
    this.PAGE_WIDTH_1 = 1920;
    this.HEADER_HEIGHT_1 = 100;
    this.COLLAPSED_PANEL_HEIGHT_1 = 100;
    this.HUMOR_API_URL_1 = 'https://api.humorapi.com/jokes/random?api-key=f0cac1365ead42e58b2ee94684b45b56&max-length=180';
  }
  protoOf(Constants_0).get_FONT_FAMILY_nousyd_k$ = function () {
    return this.FONT_FAMILY_1;
  };
  protoOf(Constants_0).get_SIDE_PANEL_WIDTH_mwcp64_k$ = function () {
    return this.SIDE_PANEL_WIDTH_1;
  };
  protoOf(Constants_0).get_PAGE_WIDTH_u0d1fj_k$ = function () {
    return this.PAGE_WIDTH_1;
  };
  protoOf(Constants_0).get_HEADER_HEIGHT_dsrf8w_k$ = function () {
    return this.HEADER_HEIGHT_1;
  };
  protoOf(Constants_0).get_COLLAPSED_PANEL_HEIGHT_5tw4j7_k$ = function () {
    return this.COLLAPSED_PANEL_HEIGHT_1;
  };
  protoOf(Constants_0).get_HUMOR_API_URL_dfxjq3_k$ = function () {
    return this.HUMOR_API_URL_1;
  };
  var Constants_instance_0;
  function Constants_getInstance_0() {
    if (Constants_instance_0 == null)
      new Constants_0();
    return Constants_instance_0;
  }
  function Image_1() {
    Image_instance = this;
    this.logo_1 = '/logo.svg';
    this.logoHome_1 = 'logo.svg';
    this.laugh_1 = '/laugh.png';
  }
  protoOf(Image_1).get_logo_wopywk_k$ = function () {
    return this.logo_1;
  };
  protoOf(Image_1).get_logoHome_1pzuur_k$ = function () {
    return this.logoHome_1;
  };
  protoOf(Image_1).get_laugh_iujmu0_k$ = function () {
    return this.laugh_1;
  };
  var Image_instance;
  function Image_getInstance() {
    if (Image_instance == null)
      new Image_1();
    return Image_instance;
  }
  function Icon() {
    Icon_instance = this;
    this.bold_1 = '/bold.svg';
    this.italic_1 = '/italic.svg';
    this.link_1 = '/link.svg';
    this.title_1 = '/title.svg';
    this.subtitle_1 = '/subtitle.svg';
    this.quote_1 = '/quote.svg';
    this.code_1 = '/code.svg';
    this.image_1 = '/image.svg';
    this.checkmark_1 = '/checkmark.svg';
  }
  protoOf(Icon).get_bold_wojl5a_k$ = function () {
    return this.bold_1;
  };
  protoOf(Icon).get_italic_ewys6x_k$ = function () {
    return this.italic_1;
  };
  protoOf(Icon).get_link_wopumb_k$ = function () {
    return this.link_1;
  };
  protoOf(Icon).get_title_iz32un_k$ = function () {
    return this.title_1;
  };
  protoOf(Icon).get_subtitle_55eoyp_k$ = function () {
    return this.subtitle_1;
  };
  protoOf(Icon).get_quote_ixn9eb_k$ = function () {
    return this.quote_1;
  };
  protoOf(Icon).get_code_wok7xy_k$ = function () {
    return this.code_1;
  };
  protoOf(Icon).get_image_it3i2a_k$ = function () {
    return this.image_1;
  };
  protoOf(Icon).get_checkmark_f49nak_k$ = function () {
    return this.checkmark_1;
  };
  var Icon_instance;
  function Icon_getInstance() {
    if (Icon_instance == null)
      new Icon();
    return Icon_instance;
  }
  function PathIcon() {
    PathIcon_instance = this;
    this.home_1 = 'M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.2652 5.10536 20.5196 5.29289 20.7071C5.48043 20.8946 5.73478 21 6 21H9M19 10L21 12M19 10V20C19 20.2652 18.8946 20.5196 18.7071 20.7071C18.5196 20.8946 18.2652 21 18 21H15M9 21C9.26522 21 9.51957 20.8946 9.70711 20.7071C9.89464 20.5196 10 20.2652 10 20V16C10 15.7348 10.1054 15.4804 10.2929 15.2929C10.4804 15.1054 10.7348 15 11 15H13C13.2652 15 13.5196 15.1054 13.7071 15.2929C13.8946 15.4804 14 15.7348 14 16V20C14 20.2652 14.1054 20.5196 14.2929 20.7071C14.4804 20.8946 14.7348 21 15 21M9 21H15';
    this.create_1 = 'M12 9.52148V12.5215M12 12.5215V15.5215M12 12.5215H15M12 12.5215H9M21 12.5215C21 13.7034 20.7672 14.8737 20.3149 15.9656C19.8626 17.0576 19.1997 18.0497 18.364 18.8854C17.5282 19.7212 16.5361 20.3841 15.4442 20.8364C14.3522 21.2887 13.1819 21.5215 12 21.5215C10.8181 21.5215 9.64778 21.2887 8.55585 20.8364C7.46392 20.3841 6.47177 19.7212 5.63604 18.8854C4.80031 18.0497 4.13738 17.0576 3.68508 15.9656C3.23279 14.8737 3 13.7034 3 12.5215C3 10.1345 3.94821 7.84535 5.63604 6.15752C7.32387 4.4697 9.61305 3.52148 12 3.52148C14.3869 3.52148 16.6761 4.4697 18.364 6.15752C20.0518 7.84535 21 10.1345 21 12.5215Z';
    this.posts_1 = 'M9 5H7C6.46957 5 5.96086 5.21071 5.58579 5.58579C5.21071 5.96086 5 6.46957 5 7V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V7C19 6.46957 18.7893 5.96086 18.4142 5.58579C18.0391 5.21071 17.5304 5 17 5H15M9 5C9 5.53043 9.21071 6.03914 9.58579 6.41421C9.96086 6.78929 10.4696 7 11 7H13C13.5304 7 14.0391 6.78929 14.4142 6.41421C14.7893 6.03914 15 5.53043 15 5M9 5C9 4.46957 9.21071 3.96086 9.58579 3.58579C9.96086 3.21071 10.4696 3 11 3H13C13.5304 3 14.0391 3.21071 14.4142 3.58579C14.7893 3.96086 15 4.46957 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01';
    this.logout_1 = 'M11 16.5215L7 12.5215M7 12.5215L11 8.52148M7 12.5215H21M16 16.5215V17.5215C16 18.3171 15.6839 19.0802 15.1213 19.6428C14.5587 20.2054 13.7956 20.5215 13 20.5215H6C5.20435 20.5215 4.44129 20.2054 3.87868 19.6428C3.31607 19.0802 3 18.3171 3 17.5215V7.52148C3 6.72583 3.31607 5.96277 3.87868 5.40016C4.44129 4.83755 5.20435 4.52148 6 4.52148H13C13.7956 4.52148 14.5587 4.83755 15.1213 5.40016C15.6839 5.96277 16 6.72583 16 7.52148V8.52148';
  }
  protoOf(PathIcon).get_home_wonf3c_k$ = function () {
    return this.home_1;
  };
  protoOf(PathIcon).get_create_c1nsp1_k$ = function () {
    return this.create_1;
  };
  protoOf(PathIcon).get_posts_iwzpuy_k$ = function () {
    return this.posts_1;
  };
  protoOf(PathIcon).get_logout_g9gkur_k$ = function () {
    return this.logout_1;
  };
  var PathIcon_instance;
  function PathIcon_getInstance() {
    if (PathIcon_instance == null)
      new PathIcon();
    return PathIcon_instance;
  }
  function Res() {
    Res_instance = this;
  }
  var Res_instance;
  function Res_getInstance() {
    if (Res_instance == null)
      new Res();
    return Res_instance;
  }
  function Id() {
    Id_instance = this;
    this.usernameInput_1 = 'usernameInput';
    this.passwordInput_1 = 'passwordInput';
    this.svgParent_1 = 'svgParent';
    this.vectorIcon_1 = 'vectorIcon';
    this.navigationText_1 = 'navigationText';
    this.editor_1 = 'editor';
    this.editorPreview_1 = 'editorPreview';
    this.titleInput_1 = 'titleInput';
    this.subtitleInput_1 = 'subtitleInput';
    this.thumbnailInput_1 = 'thumbnailInput';
    this.linkHrefInput_1 = 'linkHrefInput';
    this.linkTitleInput_1 = 'linkTitleInput';
    this.adminSearchBar_1 = 'adminSearchBar';
    this.emailInput_1 = 'emailInput';
    this.postContent_1 = 'postContent';
  }
  protoOf(Id).get_usernameInput_i6vkh7_k$ = function () {
    return this.usernameInput_1;
  };
  protoOf(Id).get_passwordInput_57y4zq_k$ = function () {
    return this.passwordInput_1;
  };
  protoOf(Id).get_svgParent_vlv2bp_k$ = function () {
    return this.svgParent_1;
  };
  protoOf(Id).get_vectorIcon_jvh2qj_k$ = function () {
    return this.vectorIcon_1;
  };
  protoOf(Id).get_navigationText_yua55i_k$ = function () {
    return this.navigationText_1;
  };
  protoOf(Id).get_editor_cs4v3q_k$ = function () {
    return this.editor_1;
  };
  protoOf(Id).get_editorPreview_kj9y1a_k$ = function () {
    return this.editorPreview_1;
  };
  protoOf(Id).get_titleInput_l6ui1n_k$ = function () {
    return this.titleInput_1;
  };
  protoOf(Id).get_subtitleInput_fwb8tl_k$ = function () {
    return this.subtitleInput_1;
  };
  protoOf(Id).get_thumbnailInput_pfv83d_k$ = function () {
    return this.thumbnailInput_1;
  };
  protoOf(Id).get_linkHrefInput_q6hcgs_k$ = function () {
    return this.linkHrefInput_1;
  };
  protoOf(Id).get_linkTitleInput_c13ldh_k$ = function () {
    return this.linkTitleInput_1;
  };
  protoOf(Id).get_adminSearchBar_tdmj0l_k$ = function () {
    return this.adminSearchBar_1;
  };
  protoOf(Id).get_emailInput_1anwgn_k$ = function () {
    return this.emailInput_1;
  };
  protoOf(Id).get_postContent_wjt29c_k$ = function () {
    return this.postContent_1;
  };
  var Id_instance;
  function Id_getInstance() {
    if (Id_instance == null)
      new Id();
    return Id_instance;
  }
  var com_canerture_androidhub_util_Constants$stable;
  var com_canerture_androidhub_util_Res_Image$stable;
  var com_canerture_androidhub_util_Res_Icon$stable;
  var com_canerture_androidhub_util_Res_PathIcon$stable;
  var com_canerture_androidhub_util_Res$stable;
  var com_canerture_androidhub_util_Id$stable;
  function isUserLoggedIn(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(36115105);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(36115105, $dirty, -1, 'com.canerture.androidhub.util.isUserLoggedIn (Functions.kt:25)');
      }
      var context = rememberPageContext($composer_0, 0);
      $composer_0.startReplaceableGroup_ip860b_k$(-620138147);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.util.isUserLoggedIn.<anonymous>' call
        // Inline function 'org.w3c.dom.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = localStorage['remember'];
        var value = toBoolean(tmp$ret$1);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var remembered = tmp0_group;
      $composer_0.startReplaceableGroup_ip860b_k$(-620138080);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.util.isUserLoggedIn.<anonymous>' call
        // Inline function 'org.w3c.dom.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var value_0 = localStorage['userId'];
        this_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var userId = tmp1_group;
      $composer_0.startReplaceableGroup_ip860b_k$(-620138020);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_2.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (false ? true : it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.util.isUserLoggedIn.<anonymous>' call
        var value_1 = mutableStateOf(false);
        this_2.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var userIdExists$delegate = tmp2_group;
      $composer_0.startReplaceableGroup_ip860b_k$(-620137952);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_3 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = this_3.rememberedValue_4dg93v_k$();
      var tmp_5;
      if (false ? true : it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.canerture.androidhub.util.isUserLoggedIn.<anonymous>' call
        var value_2 = isUserLoggedIn$slambda_0(userId, remembered, userIdExists$delegate, null);
        this_3.updateRememberedValue_l1wh71_k$(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp3_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      LaunchedEffect(Unit_getInstance(), tmp3_group, $composer_0, 70);
      if (remembered ? isUserLoggedIn$lambda(userIdExists$delegate) : false) {
        content($composer_0, 14 & $dirty);
      } else {
        println('Loading...');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp4_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp4_safe_receiver == null)
      null;
    else {
      tmp4_safe_receiver.updateScope_t8jcf_k$(isUserLoggedIn$lambda_1(content, $changed));
    }
  }
  function logout() {
    // Inline function 'org.w3c.dom.set' call
    // Inline function 'kotlin.js.asDynamic' call
    localStorage['remember'] = 'false';
    // Inline function 'org.w3c.dom.set' call
    // Inline function 'kotlin.js.asDynamic' call
    localStorage['userId'] = '';
    // Inline function 'org.w3c.dom.set' call
    // Inline function 'kotlin.js.asDynamic' call
    localStorage['username'] = '';
  }
  function noBorder(_this__u8e3s4) {
    var tmp = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    Companion_getInstance_11();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = border(_this__u8e3s4, tmp, 'none', Colors_getInstance().get_Transparent_cxh4g9_k$());
    var tmp_1 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    Companion_getInstance_11();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return outline(tmp_0, tmp_1, 'none', Colors_getInstance().get_Transparent_cxh4g9_k$());
  }
  function getEditor() {
    var tmp = document.getElementById(Id_getInstance().get_editor_cs4v3q_k$());
    return tmp instanceof HTMLTextAreaElement ? tmp : THROW_CCE();
  }
  function getSelectedIntRange() {
    var editor = getEditor();
    var start = editor.selectionStart;
    var end = editor.selectionEnd;
    var tmp;
    if (!(start == null) ? !(end == null) : false) {
      tmp = new IntRange(start, end - 1 | 0);
    } else {
      tmp = null;
    }
    return tmp;
  }
  function getSelectedText() {
    var range = getSelectedIntRange();
    var tmp;
    if (!(range == null)) {
      tmp = substring(getEditor().value, range);
    } else {
      tmp = null;
    }
    return tmp;
  }
  function applyStyle(controlStyle) {
    var selectedText = getSelectedText();
    var selectedIntRange = getSelectedIntRange();
    if (!(selectedIntRange == null) ? !(selectedText == null) : false) {
      var tmp = getEditor();
      // Inline function 'kotlin.text.replaceRange' call
      var this_0 = getEditor().value;
      var replacement = controlStyle.get_style_iyqetk_k$();
      tmp.value = toString_0(replaceRange(isCharSequence(this_0) ? this_0 : THROW_CCE(), selectedIntRange, replacement));
      var tmp0_safe_receiver = document.getElementById(Id_getInstance().get_editorPreview_kj9y1a_k$());
      if (tmp0_safe_receiver != null) {
        tmp0_safe_receiver.innerHTML = getEditor().value;
      }
    }
  }
  function applyControlStyle(editorControl, onLinkClick, onImageClick) {
    switch (editorControl.get_ordinal_ip24qg_k$()) {
      case 0:
        applyStyle(new Bold(getSelectedText()));
        break;
      case 1:
        applyStyle(new Italic(getSelectedText()));
        break;
      case 2:
        onLinkClick();
        break;
      case 3:
        applyStyle(new Title(getSelectedText()));
        break;
      case 4:
        applyStyle(new Subtitle(getSelectedText()));
        break;
      case 5:
        applyStyle(new Quote(getSelectedText()));
        break;
      case 6:
        applyStyle(new Code_0(getSelectedText()));
        break;
      case 7:
        onImageClick();
        break;
    }
  }
  function parseDateString(_this__u8e3s4) {
    return (new Date(_this__u8e3s4)).toLocaleDateString();
  }
  function parseSwitchText(posts) {
    return posts.get_size_woubt6_k$() === 1 ? '1 Post Selected' : '' + posts.get_size_woubt6_k$() + ' Posts Selected';
  }
  function validateEmail(email) {
    var regex = '^[A-Za-z](.*)(@)(.+)(\\.)(.+)';
    // Inline function 'kotlin.text.toRegex' call
    return Regex_init_$Create$(regex).matches_evli6i_k$(email);
  }
  function isUserLoggedIn$lambda($userIdExists$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('userIdExists', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $userIdExists$delegate.get_value_j01efc_k$();
  }
  function isUserLoggedIn$lambda_0($userIdExists$delegate, value) {
    getLocalDelegateReference('userIdExists', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $userIdExists$delegate.set_value_v1vabv_k$(value);
    return Unit_getInstance();
  }
  function isUserLoggedIn$slambda($userId, $remembered, $userIdExists$delegate, resultContinuation) {
    this.$userId_1 = $userId;
    this.$remembered_1 = $remembered;
    this.$userIdExists$delegate_1 = $userIdExists$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(isUserLoggedIn$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(isUserLoggedIn$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(isUserLoggedIn$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            var this_0 = this.$userId_1;
            if (!(this_0 == null ? true : charSequenceLength(this_0) === 0)) {
              this.set_state_rjd8d0_k$(1);
              suspendResult = checkUserId(this.$userId_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.WHEN_RESULT0__1 = false;
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            }

          case 1:
            this.WHEN_RESULT0__1 = suspendResult;
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            var ARGUMENT = this.WHEN_RESULT0__1;
            isUserLoggedIn$lambda_0(this.$userIdExists$delegate_1, ARGUMENT);
            !this.$remembered_1 || !isUserLoggedIn$lambda(this.$userIdExists$delegate_1);
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
  protoOf(isUserLoggedIn$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new isUserLoggedIn$slambda(this.$userId_1, this.$remembered_1, this.$userIdExists$delegate_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(isUserLoggedIn$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function isUserLoggedIn$slambda_0($userId, $remembered, $userIdExists$delegate, resultContinuation) {
    var i = new isUserLoggedIn$slambda($userId, $remembered, $userIdExists$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function isUserLoggedIn$lambda_1($content, $$changed) {
    return function ($composer, $force) {
      isUserLoggedIn($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  //region block: post-declaration
  protoOf($serializer).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_0).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_1).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_2).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_3).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_4).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_5).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_6).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  //endregion
  //region block: init
  com_canerture_androidhub_models_ApiListResponse_Idle$stable = 0;
  com_canerture_androidhub_models_ApiListResponse_Success_$serializer$stable = 0;
  com_canerture_androidhub_models_ApiListResponse_Success$stable = 8;
  com_canerture_androidhub_models_ApiListResponse_Error_$serializer$stable = 0;
  com_canerture_androidhub_models_ApiListResponse_Error$stable = 0;
  com_canerture_androidhub_models_ApiListResponse$stable = 0;
  com_canerture_androidhub_models_ApiResponse_Idle$stable = 0;
  com_canerture_androidhub_models_ApiResponse_Success_$serializer$stable = 0;
  com_canerture_androidhub_models_ApiResponse_Success$stable = 0;
  com_canerture_androidhub_models_ApiResponse_Error_$serializer$stable = 0;
  com_canerture_androidhub_models_ApiResponse_Error$stable = 0;
  com_canerture_androidhub_models_ApiResponse$stable = 0;
  com_canerture_androidhub_models_ApiListResponseSerializer$stable = 0;
  com_canerture_androidhub_models_ApiResponseSerializer$stable = 0;
  com_canerture_androidhub_models_Constants$stable = 0;
  com_example_blogmultiplatform_models_Newsletter_$serializer$stable = 0;
  com_example_blogmultiplatform_models_Newsletter$stable = 0;
  com_canerture_androidhub_models_Post_$serializer$stable = 0;
  com_canerture_androidhub_models_Post$stable = 0;
  com_canerture_androidhub_models_PostWithoutDetails_$serializer$stable = 0;
  com_canerture_androidhub_models_PostWithoutDetails$stable = 0;
  com_canerture_androidhub_models_User$stable = 0;
  com_canerture_androidhub_models_UserWithoutPassword$stable = 0;
  COLOR_MODE_KEY = 'androidhub:colorMode';
  com_canerture_androidhub_SitePalette$stable = 8;
  com_canerture_androidhub_SitePalettes$stable = 8;
  com_example_blogmultiplatform_models_ControlStyle_Bold$stable = 0;
  com_example_blogmultiplatform_models_ControlStyle_Italic$stable = 0;
  com_example_blogmultiplatform_models_ControlStyle_Link$stable = 0;
  com_example_blogmultiplatform_models_ControlStyle_Title$stable = 0;
  com_example_blogmultiplatform_models_ControlStyle_Subtitle$stable = 0;
  com_example_blogmultiplatform_models_ControlStyle_Quote$stable = 0;
  com_example_blogmultiplatform_models_ControlStyle_Code$stable = 0;
  com_example_blogmultiplatform_models_ControlStyle_Image$stable = 0;
  com_example_blogmultiplatform_models_ControlStyle_Break$stable = 0;
  com_example_blogmultiplatform_models_ControlStyle$stable = 0;
  com_example_blogmultiplatform_models_RandomJoke_$serializer$stable = 0;
  com_example_blogmultiplatform_models_RandomJoke$stable = 0;
  com_canerture_androidhub_pages_PopularArticle$stable = 0;
  com_canerture_androidhub_util_Constants$stable = 0;
  com_canerture_androidhub_util_Res_Image$stable = 0;
  com_canerture_androidhub_util_Res_Icon$stable = 0;
  com_canerture_androidhub_util_Res_PathIcon$stable = 0;
  com_canerture_androidhub_util_Res$stable = 0;
  com_canerture_androidhub_util_Id$stable = 0;
  //endregion
  main();
  return _;
}));

//# sourceMappingURL=androidhub.js.map
