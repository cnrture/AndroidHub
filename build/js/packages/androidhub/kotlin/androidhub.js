(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kobweb-frontend-kobweb-core.js', './kobweb-frontend-silk-foundation.js', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-runtime-runtime.js', './html-internal-html-core-runtime.js', './kobweb-frontend-silk-widgets.js', './kobweb-frontend-silk-widgets-kobweb.js', './html-html-core.js', './kobweb-frontend-compose-html-ext.js', './kobweb-frontend-kobweb-silk.js', './kotlinx-coroutines-core.js', './kobweb-frontend-kobweb-compose.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kobweb-frontend-kobweb-core.js'), require('./kobweb-frontend-silk-foundation.js'), require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./html-internal-html-core-runtime.js'), require('./kobweb-frontend-silk-widgets.js'), require('./kobweb-frontend-silk-widgets-kobweb.js'), require('./html-html-core.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./kobweb-frontend-kobweb-silk.js'), require('./kotlinx-coroutines-core.js'), require('./kobweb-frontend-kobweb-compose.js'));
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
    if (typeof this['kobweb-frontend-kobweb-silk'] === 'undefined') {
      throw new Error("Error loading module 'com.canerture.androidhub:site'. Its dependency 'kobweb-frontend-kobweb-silk' was not found. Please, check whether 'kobweb-frontend-kobweb-silk' is loaded prior to 'com.canerture.androidhub:site'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'com.canerture.androidhub:site'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'com.canerture.androidhub:site'.");
    }
    if (typeof this['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'com.canerture.androidhub:site'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'com.canerture.androidhub:site'.");
    }
    root['com.canerture.androidhub:site'] = factory(typeof this['com.canerture.androidhub:site'] === 'undefined' ? {} : this['com.canerture.androidhub:site'], this['kobweb-frontend-kobweb-core'], this['kobweb-frontend-silk-foundation'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-compose-runtime-runtime'], this['html-internal-html-core-runtime'], this['kobweb-frontend-silk-widgets'], this['kobweb-frontend-silk-widgets-kobweb'], this['html-html-core'], this['kobweb-frontend-compose-html-ext'], this['kobweb-frontend-kobweb-silk'], this['kotlinx-coroutines-core'], this['kobweb-frontend-kobweb-compose']);
  }
}(this, function (_, kotlin_com_varabyte_kobweb_kobweb_core, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_internal_html_core_runtime, kotlin_com_varabyte_kobweb_silk_widgets, kotlin_com_varabyte_kobweb_silk_widgets_kobweb, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_com_varabyte_kobweb_kobweb_silk, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_com_varabyte_kobweb_kobweb_compose) {
  'use strict';
  //region block: imports
  var Companion_instance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.j;
  var Router = kotlin_com_varabyte_kobweb_kobweb_core.$_$.e;
  var initKobweb = kotlin_com_varabyte_kobweb_kobweb_core.$_$.a;
  var LegacyRouteRedirectStrategy_DISALLOW_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.g;
  var set_additionalSilkInitialization = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c1;
  var removePrefix = kotlin_kotlin.$_$.m7;
  var UpdateHistoryMode_REPLACE_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.h;
  var ensureNotNull = kotlin_kotlin.$_$.u8;
  var Unit_instance = kotlin_kotlin.$_$.d2;
  var AppGlobals_instance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.i;
  var to = kotlin_kotlin.$_$.c9;
  var mapOf = kotlin_kotlin.$_$.v3;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var renderComposable = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.c;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var THROW_CCE = kotlin_kotlin.$_$.n8;
  var renderWithDeferred = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b1;
  var objectMeta = kotlin_kotlin.$_$.i6;
  var setMetadataFor = kotlin_kotlin.$_$.k6;
  var VOID = kotlin_kotlin.$_$.c;
  var removeSuffix = kotlin_kotlin.$_$.n7;
  var initSilkWidgets = kotlin_com_varabyte_kobweb_silk_widgets.$_$.m;
  var initSilkWidgetsKobweb = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.e;
  var registerKeyframes = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b;
  var Text = kotlin_org_jetbrains_compose_html_html_core.$_$.a4;
  var Code = kotlin_org_jetbrains_compose_html_html_core.$_$.k3;
  var GenericTag = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c2;
  var Li = kotlin_org_jetbrains_compose_html_html_core.$_$.u3;
  var Em = kotlin_org_jetbrains_compose_html_html_core.$_$.n3;
  var Link = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.b;
  var H1 = kotlin_org_jetbrains_compose_html_html_core.$_$.o3;
  var P = kotlin_org_jetbrains_compose_html_html_core.$_$.w3;
  var HorizontalDivider = kotlin_com_varabyte_kobweb_silk_widgets.$_$.f;
  var H2 = kotlin_org_jetbrains_compose_html_html_core.$_$.p3;
  var H3 = kotlin_org_jetbrains_compose_html_html_core.$_$.q3;
  var H4 = kotlin_org_jetbrains_compose_html_html_core.$_$.r3;
  var Ul = kotlin_org_jetbrains_compose_html_html_core.$_$.b4;
  var Pre = kotlin_org_jetbrains_compose_html_html_core.$_$.v3;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var ColorMode_LIGHT_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n1;
  var SilkApp = kotlin_com_varabyte_kobweb_kobweb_silk.$_$.a;
  var CoroutineImpl = kotlin_kotlin.$_$.d5;
  var protoOf = kotlin_kotlin.$_$.j6;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var isInterface = kotlin_kotlin.$_$.b6;
  var classMeta = kotlin_kotlin.$_$.n5;
  var Companion_instance_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.q1;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j;
  var get_SmoothColorStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.i;
  var toModifier = kotlin_com_varabyte_kobweb_silk_foundation.$_$.x;
  var get_vh = kotlin_org_jetbrains_compose_html_html_core.$_$.f3;
  var minHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y1;
  var Companion_instance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.z2;
  var scrollBehavior = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p2;
  var Surface = kotlin_com_varabyte_kobweb_silk_widgets.$_$.g;
  var registerStyleBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d1;
  var get_HorizontalDividerStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.e;
  var modifyComponentStyleBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j1;
  var Companion_instance_2 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u3;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.s1;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f1;
  var Companion_instance_3 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a3;
  var textAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t2;
  var lineHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q1;
  var toPalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g1;
  var get_color = kotlin_com_varabyte_kobweb_silk_widgets.$_$.p;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.a3;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k2;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.y2;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p;
  var ButtonVars_getInstance = kotlin_com_varabyte_kobweb_silk_widgets.$_$.r;
  var Colors_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l3;
  var setVariable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q2;
  var fontFamily = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e1;
  var fillMaxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c1;
  var KProperty0 = kotlin_kotlin.$_$.u6;
  var getPropertyCallableRef = kotlin_kotlin.$_$.u5;
  var Companion_instance_4 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.p1;
  var base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n;
  var get_ButtonStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.a;
  var addVariantBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j;
  var Companion_instance_5 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k3;
  var set_background = kotlin_com_varabyte_kobweb_silk_widgets.$_$.o;
  var set_color = kotlin_com_varabyte_kobweb_silk_widgets.$_$.q;
  var fontWeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h1;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w1;
  var margin_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v1;
  var Companion_instance_6 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.s2;
  var fontWeight_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g1;
  var Companion_instance_7 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.y2;
  var overflowWrap = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f2;
  var Companion_instance_8 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.x2;
  var Companion_instance_9 = kotlin_org_jetbrains_compose_html_html_core.$_$.k;
  var display = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z;
  var backgroundColor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l;
  var Companion_instance_10 = kotlin_org_jetbrains_compose_html_html_core.$_$.n;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r;
  var overflow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g2;
  var fillMaxSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b1;
  var Start_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r3;
  var Column = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b;
  var ComponentStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g;
  var gridTemplateRows = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m1;
  var Center_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p3;
  var Box = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a;
  var Breakpoint_MD_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.l1;
  var padding_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l2;
  var maxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x1;
  var get_fr = kotlin_org_jetbrains_compose_html_html_core.$_$.a2;
  var CenterHorizontally_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n3;
  var gridRow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k1;
  var SpanText = kotlin_com_varabyte_kobweb_silk_foundation.$_$.z;
  var get_ColorVar = kotlin_com_varabyte_kobweb_silk_widgets.$_$.k;
  var get_UncoloredLinkVariant = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.d;
  var Link_0 = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.c;
  var Companion_instance_11 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e3;
  var whiteSpace = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c3;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g3;
  var Span = kotlin_org_jetbrains_compose_html_html_core.$_$.x3;
  var padding_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m2;
  var Color_instance = kotlin_org_jetbrains_compose_html_html_core.$_$.j;
  var Color = kotlin_org_jetbrains_compose_html_html_core.$_$.b1;
  var Enum = kotlin_kotlin.$_$.h8;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.w8;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var CenterVertically_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o3;
  var Center_instance_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i3;
  var Row = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c;
  var Spacer = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d;
  var OverlayVars_getInstance = kotlin_com_varabyte_kobweb_silk_widgets.$_$.s;
  var onClick = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c2;
  var Overlay = kotlin_com_varabyte_kobweb_silk_widgets.$_$.h;
  var HamburgerIcon = kotlin_com_varabyte_kobweb_silk_widgets.$_$.d;
  var CloseIcon = kotlin_com_varabyte_kobweb_silk_widgets.$_$.c;
  var height = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o1;
  var Image = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.a;
  var gap = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i1;
  var displayIfAtLeast = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d;
  var KMutableProperty0 = kotlin_kotlin.$_$.s6;
  var THROW_ISE = kotlin_kotlin.$_$.o8;
  var getLocalDelegateReference = kotlin_kotlin.$_$.s5;
  var translateX = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z2;
  var displayUntil = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e;
  var padding_2 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j2;
  var End_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q3;
  var fillMaxHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a1;
  var clamp = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d3;
  var CenterEnd_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m3;
  var get_ms = kotlin_org_jetbrains_compose_html_html_core.$_$.v2;
  var Companion_instance_12 = kotlin_org_jetbrains_compose_html_html_core.$_$.g;
  var Companion_instance_13 = kotlin_org_jetbrains_compose_html_html_core.$_$.e;
  var Companion_instance_14 = kotlin_org_jetbrains_compose_html_html_core.$_$.f;
  var toAnimation = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c;
  var animation = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h;
  var borderRadius_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o;
  var onAnimationEnd = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b2;
  var Keyframes = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a;
  var get_em = kotlin_org_jetbrains_compose_html_html_core.$_$.u1;
  var Button = kotlin_com_varabyte_kobweb_silk_widgets.$_$.b;
  var gridItem = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j1;
  var Div = kotlin_org_jetbrains_compose_html_html_core.$_$.l3;
  var textShadow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v2;
  var toAttrs_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.w;
  var rememberPageContext = kotlin_com_varabyte_kobweb_kobweb_core.$_$.c;
  var Blue_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.r1;
  var Monochrome_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.t1;
  var grid = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n1;
  var margin_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u1;
  var boxShadow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u;
  var StyleVariable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt', objectMeta);
  setMetadataFor(ComposableSingletons$AboutKt, 'ComposableSingletons$AboutKt', objectMeta);
  setMetadataFor(AppEntry$lambda$slambda, 'AppEntry$lambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(Brand, 'Brand', classMeta, VOID, VOID, Brand);
  setMetadataFor(SitePalette, 'SitePalette', classMeta);
  setMetadataFor(SitePalettes, 'SitePalettes', objectMeta);
  setMetadataFor(PageLayout$slambda, 'PageLayout$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(ComposableSingletons$FooterKt, 'ComposableSingletons$FooterKt', objectMeta);
  setMetadataFor(SideMenuState, 'SideMenuState', classMeta, Enum);
  setMetadataFor(ComposableSingletons$NavHeaderKt, 'ComposableSingletons$NavHeaderKt', objectMeta);
  setMetadataFor(ComposableSingletons$IndexKt, 'ComposableSingletons$IndexKt', objectMeta);
  //endregion
  function main() {
    Companion_instance.q2k('');
    var router = new Router();
    initKobweb(router, main$lambda);
    router.e2m(LegacyRouteRedirectStrategy_DISALLOW_getInstance());
    router.f2m(main$lambda_0);
    set_additionalSilkInitialization(main$lambda_1);
    router.l2k(removePrefix(window.location.href, window.location.origin), UpdateHistoryMode_REPLACE_getInstance());
    var root = ensureNotNull(document.getElementById('root'));
    while (!(root.firstChild == null)) {
      root.removeChild(ensureNotNull(root.firstChild));
    }
    AppGlobals_instance.d2j(mapOf(to('title', '.')));
    renderComposable('root', ComposableLambda$invoke$ref_3(composableLambdaInstance(1108811911, true, main$lambda_2(router))));
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.i17(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.k17()) {
      if (isTraceInProgress()) {
        traceEventStart(-994802423, $changed, -1, 'ComposableSingletons$MainKt.lambda-1.<anonymous> (main.kt:15)');
      }
      HomePage($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.b12();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.i17(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_2$lambda_dts8wk($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.k17()) {
      if (isTraceInProgress()) {
        traceEventStart(-1296252800, $changed, -1, 'ComposableSingletons$MainKt.lambda-2.<anonymous> (main.kt:16)');
      }
      AboutPage($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.b12();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_3$lambda_ezu85n(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.k18(it) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.k17()) {
      if (isTraceInProgress()) {
        traceEventStart(1940211355, $dirty, -1, 'ComposableSingletons$MainKt.lambda-3.<anonymous> (main.kt:57)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ComposableSingletons$MainKt.lambda-3.<anonymous>.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, 2103839155, true, ComposableSingletons$MainKt$lambda_3$lambda$lambda_g9fe80(it));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.p17(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.iz(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.t18();
      var tmp_0;
      if (invalid ? true : it_0 === Companion_getInstance().h12_1) {
        // Inline function 'ComposableSingletons$MainKt.lambda-3.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_2(dispatchReceiver);
        $composer_1.z18(value);
        tmp_0 = value;
      } else {
        tmp_0 = it_0;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.q17();
      renderWithDeferred(tmp0, $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.b12();
    }
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda_3$lambda$lambda_g9fe80($it) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.k17()) {
        if (isTraceInProgress()) {
          traceEventStart(2103839155, $changed, -1, 'ComposableSingletons$MainKt.lambda-3.<anonymous>.<anonymous> (main.kt:57)');
        }
        $it($composer_0, 0);
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
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.n36_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-994802423, false, ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d));
    var tmp_0 = this;
    tmp_0.o36_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-1296252800, false, ComposableSingletons$MainKt$lambda_2$lambda_dts8wk));
    var tmp_1 = this;
    tmp_1.p36_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(1940211355, false, ComposableSingletons$MainKt$lambda_3$lambda_ezu85n));
  }
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function main$lambda(ctx) {
    ctx.a2k_1.d2m('/', VOID, ComposableSingletons$MainKt_getInstance().n36_1);
    ctx.a2k_1.d2m('/about', VOID, ComposableSingletons$MainKt_getInstance().o36_1);
    return Unit_instance;
  }
  function main$lambda_0($this$addRouteInterceptor) {
    $this$addRouteInterceptor.j2m(removeSuffix(removeSuffix($this$addRouteInterceptor.x2l_1, '.html'), '.htm'));
    return Unit_instance;
  }
  function main$lambda_1(ctx) {
    initSilkWidgets(ctx);
    initSilkWidgetsKobweb(ctx);
    ctx.h2t_1.q2t(get_HeadlineTextStyle());
    ctx.h2t_1.q2t(get_SubheadlineTextStyle());
    ctx.h2t_1.q2t(get_MarkdownStyle());
    ctx.h2t_1.q2t(get_PageContentStyle());
    ctx.h2t_1.q2t(get_FooterStyle());
    ctx.h2t_1.q2t(get_NavHeaderStyle());
    ctx.h2t_1.q2t(get_HeroContainerStyle());
    ctx.h2t_1.q2t(get_HomeGridStyle());
    ctx.h2t_1.q2t(get_HomeGridCellStyle());
    ctx.h2t_1.z2t([get_CircleButtonVariant()]);
    ctx.h2t_1.z2t([get_UncoloredButtonVariant()]);
    registerKeyframes(ctx.g2t_1, get_SideMenuSlideInAnim());
    initColorMode(ctx);
    initSiteStyles(ctx);
    initTheme(ctx);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
    };
  }
  function main$lambda$lambda($router) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.k17()) {
        if (isTraceInProgress()) {
          traceEventStart(-1190994075, $changed, -1, 'main.<anonymous>.<anonymous> (main.kt:57)');
        }
        $router.a2m(ComposableSingletons$MainKt_getInstance().p36_1, $composer_0, 70, 0);
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
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1) {
      return $boundThis.i17(p0, p1);
    };
  }
  function main$lambda_2($router) {
    return function ($this$renderComposable, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1108811911, $changed, -1, 'main.<anonymous> (main.kt:56)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'main.<anonymous>.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, -1190994075, true, main$lambda$lambda($router));
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
        // Inline function 'main.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_4(dispatchReceiver);
        $composer_1.z18(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.q17();
      AppEntry(tmp0, $composer_0, 6);
      var tmp_2;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_2 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function AboutPage($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h19(-2053218993);
    if (!($changed === 0) ? true : !$composer_0.k17()) {
      if (isTraceInProgress()) {
        traceEventStart(-2053218993, $changed, -1, 'com.canerture.androidhub.pages.AboutPage (About.kt:8)');
      }
      MarkdownLayout('About', ComposableSingletons$AboutKt_getInstance().g39_1, $composer_0, 54);
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
      tmp0_safe_receiver.f1e(AboutPage$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_8$lambda_7fvxa4($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1801179858, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-8.<anonymous> (About.kt:30)');
    }
    Text('This file declares a method that is an entry point for all pages on your site. You can rename the file and the method if you like. Kobweb searches for a single method at compile time annotated with ', $composer_0, 6);
    Code(null, ComposableSingletons$AboutKt_getInstance().w36_1, $composer_0, 48, 1);
    Text('.', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_14($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_15($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_16($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_17($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_18($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_19($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_20($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_16$lambda_lzur0j($this$Li, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1697742766, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-16.<anonymous> (About.kt:56)');
    }
    Code(null, ComposableSingletons$AboutKt_getInstance().e37_1, $composer_0, 48, 1);
    GenericTag('br', null, null, $composer_0, 54, 4);
    Text(' Represents top-level organization for pages', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_21($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_22($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_18$lambda_zdpuv9($this$Li, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-821068379, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-18.<anonymous> (About.kt:63)');
    }
    Code(null, ComposableSingletons$AboutKt_getInstance().g37_1, $composer_0, 48, 1);
    GenericTag('br', null, null, $composer_0, 54, 4);
    Text(' Areas of content that appear across multiple pages (such as nav bars and footers)', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_23($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_24($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_20$lambda_bqdg8s($this$Li, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1524931354, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-20.<anonymous> (About.kt:70)');
    }
    Code(null, ComposableSingletons$AboutKt_getInstance().i37_1, $composer_0, 48, 1);
    GenericTag('br', null, null, $composer_0, 54, 4);
    Text(' Home for low-level UI pieces that you can use around your site', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_25($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_21$lambda_h390tf($this$Ul, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(245760669, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-21.<anonymous> (About.kt:55)');
    }
    Li(null, ComposableSingletons$AboutKt_getInstance().f37_1, $composer_0, 48, 1);
    Li(null, ComposableSingletons$AboutKt_getInstance().h37_1, $composer_0, 48, 1);
    Li(null, ComposableSingletons$AboutKt_getInstance().j37_1, $composer_0, 48, 1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_26($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_27($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_28($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_29($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_30($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_26$lambda_j55a66($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1883771570, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-26.<anonymous> (About.kt:81)');
    }
    Text('Any ', $composer_0, 6);
    Code(null, ComposableSingletons$AboutKt_getInstance().m37_1, $composer_0, 48, 1);
    Text(' under this folder additionally tagged with ', $composer_0, 6);
    Code(null, ComposableSingletons$AboutKt_getInstance().n37_1, $composer_0, 48, 1);
    Text(' will have a route generated for it automatically. Defining a page outside of this folder will be flagged as an error by the Kobweb Gradle plugin at compile time. Note that additional pages (like this one!) might live under the ', $composer_0, 6);
    Code(null, ComposableSingletons$AboutKt_getInstance().o37_1, $composer_0, 48, 1);
    Text(' folder.', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_31($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_32($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_33($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_29$lambda_ykwndn($this$Li, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-547124457, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-29.<anonymous> (About.kt:100)');
    }
    Code(null, ComposableSingletons$AboutKt_getInstance().r37_1, $composer_0, 48, 1);
    GenericTag('br', null, null, $composer_0, 54, 4);
    Text(' If you want to host any media on your site (such as an icon, an image, text configuration files, movies, fonts, etc.), you should put it under this folder.', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_34($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_35($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_31$lambda_csuzz0($this$Li, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1236920142, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-31.<anonymous> (About.kt:107)');
    }
    Code(null, ComposableSingletons$AboutKt_getInstance().t37_1, $composer_0, 48, 1);
    GenericTag('br', null, null, $composer_0, 54, 4);
    Text(' Any markdown discovered in here by Kobweb at compile time will be converted into pages on your site.', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_36($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_32$lambda_g0rh37($this$Ul, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-37548474, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-32.<anonymous> (About.kt:99)');
    }
    Li(null, ComposableSingletons$AboutKt_getInstance().s37_1, $composer_0, 48, 1);
    Li(null, ComposableSingletons$AboutKt_getInstance().u37_1, $composer_0, 48, 1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_37($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_38($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_39($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_40($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_41($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_37$lambda_i2nqfy($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(568720012, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-37.<anonymous> (About.kt:124)');
    }
    Text('Kobweb introduces the ', $composer_0, 6);
    Code(null, ComposableSingletons$AboutKt_getInstance().z37_1, $composer_0, 48, 1);
    Text(' keyword that Android developers will recognize from the Jetpack Compose API. In a webdev context, this is used for setting CSS styles and html attributes on elements in the page.', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_42($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_43($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_44($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_40$lambda_hhfui($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1794965803, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-40.<anonymous> (About.kt:134)');
    }
    Text('Traditional HTML pages use CSS to style their UI. In Kobweb, these styles can be declared using the ', $composer_0, 6);
    Code(null, ComposableSingletons$AboutKt_getInstance().c38_1, $composer_0, 48, 1);
    Text(' class in a Kotlin-idiomatic way. You can find examples of component styles used throughout the template.', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_45($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_46($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_47($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_48($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_49($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_50($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_51($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_47$lambda_btgach($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(841980169, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-47.<anonymous> (About.kt:156)');
    }
    Text('This template aims to create some generally useful pieces that most sites will want to use. Making your own site could be as easy as deleting this ', $composer_0, 6);
    Em(null, ComposableSingletons$AboutKt_getInstance().j38_1, $composer_0, 48, 1);
    Text(" page and working from there. However, you are welcome to modify or delete anything you find in the template that you don't plan to use in your final site.", $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_52($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_53($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_54($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_50$lambda_udlgmx($this$Pre, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1625879881, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-50.<anonymous> (About.kt:165)');
    }
    Code(null, ComposableSingletons$AboutKt_getInstance().m38_1, $composer_0, 48, 1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_55($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_56($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_57($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_58($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_59($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_60($boundThis) {
    return function (p0, p1) {
      return $boundThis.i17(p0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda_56$lambda_hx9s1($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.k17()) {
      if (isTraceInProgress()) {
        traceEventStart(940845651, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-56.<anonymous> (About.kt:187)');
      }
      Text('read more about these choices here', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.b12();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_61($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_57$lambda_tbjqu8($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1451996037, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-57.<anonymous> (About.kt:177)');
    }
    Text('There are two flavors of Kobweb sites: ', $composer_0, 6);
    Em(null, ComposableSingletons$AboutKt_getInstance().r38_1, $composer_0, 48, 1);
    Text(' and ', $composer_0, 6);
    Em(null, ComposableSingletons$AboutKt_getInstance().s38_1, $composer_0, 48, 1);
    Text('. You can ', $composer_0, 6);
    Link('https://github.com/varabyte/kobweb#static-layout-vs-full-stack-sites', null, null, null, null, false, null, ComposableSingletons$AboutKt_getInstance().t38_1, $composer_0, 12582918, 126);
    Text('.', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_62($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_63($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_64($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_60$lambda_arekjs($this$Pre, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(907180000, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-60.<anonymous> (About.kt:194)');
    }
    Code(null, ComposableSingletons$AboutKt_getInstance().w38_1, $composer_0, 48, 1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_65($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_66($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_62$lambda_2mgjay($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-390479677, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-62.<anonymous> (About.kt:197)');
    }
    Text('After that runs for a little while, your production site should be generated! You can find the files under the ', $composer_0, 6);
    Code(null, ComposableSingletons$AboutKt_getInstance().y38_1, $composer_0, 48, 1);
    Text(' folder.', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_67($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_68($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_69($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_65$lambda_ctatwj($this$Pre, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(2133425791, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-65.<anonymous> (About.kt:206)');
    }
    Code(null, ComposableSingletons$AboutKt_getInstance().b39_1, $composer_0, 48, 1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_70($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_71($boundThis) {
    return function (p0, p1) {
      return $boundThis.i17(p0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda_67$lambda_kk9y7($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.k17()) {
      if (isTraceInProgress()) {
        traceEventStart(-1536502151, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-67.<anonymous> (About.kt:214)');
      }
      Text('read this blog post', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.b12();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_72($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_68$lambda_s92740($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1025351765, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-68.<anonymous> (About.kt:212)');
    }
    Text('You can ', $composer_0, 6);
    Link('https://bitspittle.dev/blog/2022/staticdeploy', null, null, null, null, false, null, ComposableSingletons$AboutKt_getInstance().e39_1, $composer_0, 12582918, 126);
    Text(' for some concrete examples of exporting a Kobweb site to two popular static website hosting providers.', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_73($boundThis) {
    return function (p0, p1) {
      return $boundThis.i17(p0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda_69$lambda_dyfdsx($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.k17()) {
      if (isTraceInProgress()) {
        traceEventStart(1129324712, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-69.<anonymous> (About.kt:10)');
      }
      $composer_0.p17(120959690);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.t18();
      var tmp;
      if (false ? true : it === Companion_getInstance().h12_1) {
        // Inline function 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-69.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng;
        $composer_0.z18(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.q17();
      H1(tmp0_group, ComposableSingletons$AboutKt_getInstance().q36_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().r36_1, $composer_0, 48, 1);
      HorizontalDivider(null, null, $composer_0, 0, 3);
      $composer_0.p17(120960172);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.t18();
      var tmp_1;
      if (false ? true : it_0 === Companion_getInstance().h12_1) {
        // Inline function 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-69.<anonymous>.<anonymous>' call
        var value_0 = ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_0;
        $composer_0.z18(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.q17();
      H2(tmp1_group, ComposableSingletons$AboutKt_getInstance().s36_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().t36_1, $composer_0, 48, 1);
      $composer_0.p17(120960539);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_0.t18();
      var tmp_3;
      if (false ? true : it_1 === Companion_getInstance().h12_1) {
        // Inline function 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-69.<anonymous>.<anonymous>' call
        var value_1 = ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_1;
        $composer_0.z18(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.q17();
      H3(tmp2_group, ComposableSingletons$AboutKt_getInstance().u36_1, $composer_0, 54, 0);
      $composer_0.p17(120960673);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_0.t18();
      var tmp_5;
      if (false ? true : it_2 === Companion_getInstance().h12_1) {
        // Inline function 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-69.<anonymous>.<anonymous>' call
        var value_2 = ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_2;
        $composer_0.z18(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp3_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_0.q17();
      H4(tmp3_group, ComposableSingletons$AboutKt_getInstance().v36_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().x36_1, $composer_0, 48, 1);
      $composer_0.p17(120961294);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = $composer_0.t18();
      var tmp_7;
      if (false ? true : it_3 === Companion_getInstance().h12_1) {
        // Inline function 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-69.<anonymous>.<anonymous>' call
        var value_3 = ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_3;
        $composer_0.z18(value_3);
        tmp_7 = value_3;
      } else {
        tmp_7 = it_3;
      }
      var tmp_8 = tmp_7;
      var tmp4_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_0.q17();
      H4(tmp4_group, ComposableSingletons$AboutKt_getInstance().y36_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().z36_1, $composer_0, 48, 1);
      $composer_0.p17(120961716);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_4 = $composer_0.t18();
      var tmp_9;
      if (false ? true : it_4 === Companion_getInstance().h12_1) {
        // Inline function 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-69.<anonymous>.<anonymous>' call
        var value_4 = ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_4;
        $composer_0.z18(value_4);
        tmp_9 = value_4;
      } else {
        tmp_9 = it_4;
      }
      var tmp_10 = tmp_9;
      var tmp5_group = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      $composer_0.q17();
      H4(tmp5_group, ComposableSingletons$AboutKt_getInstance().a37_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().b37_1, $composer_0, 48, 1);
      $composer_0.p17(120962073);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_5 = $composer_0.t18();
      var tmp_11;
      if (false ? true : it_5 === Companion_getInstance().h12_1) {
        // Inline function 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-69.<anonymous>.<anonymous>' call
        var value_5 = ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_5;
        $composer_0.z18(value_5);
        tmp_11 = value_5;
      } else {
        tmp_11 = it_5;
      }
      var tmp_12 = tmp_11;
      var tmp6_group = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
      $composer_0.q17();
      H4(tmp6_group, ComposableSingletons$AboutKt_getInstance().c37_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().d37_1, $composer_0, 48, 1);
      Ul(null, ComposableSingletons$AboutKt_getInstance().k37_1, $composer_0, 48, 1);
      $composer_0.p17(120963643);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_6 = $composer_0.t18();
      var tmp_13;
      if (false ? true : it_6 === Companion_getInstance().h12_1) {
        // Inline function 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-69.<anonymous>.<anonymous>' call
        var value_6 = ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_6;
        $composer_0.z18(value_6);
        tmp_13 = value_6;
      } else {
        tmp_13 = it_6;
      }
      var tmp_14 = tmp_13;
      var tmp7_group = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
      $composer_0.q17();
      H4(tmp7_group, ComposableSingletons$AboutKt_getInstance().l37_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().p37_1, $composer_0, 48, 1);
      $composer_0.p17(120964706);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_7 = $composer_0.t18();
      var tmp_15;
      if (false ? true : it_7 === Companion_getInstance().h12_1) {
        // Inline function 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-69.<anonymous>.<anonymous>' call
        var value_7 = ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_7;
        $composer_0.z18(value_7);
        tmp_15 = value_7;
      } else {
        tmp_15 = it_7;
      }
      var tmp_16 = tmp_15;
      var tmp8_group = (tmp_16 == null ? true : !(tmp_16 == null)) ? tmp_16 : THROW_CCE();
      $composer_0.q17();
      H4(tmp8_group, ComposableSingletons$AboutKt_getInstance().q37_1, $composer_0, 54, 0);
      Ul(null, ComposableSingletons$AboutKt_getInstance().v37_1, $composer_0, 48, 1);
      $composer_0.p17(120965807);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_8 = $composer_0.t18();
      var tmp_17;
      if (false ? true : it_8 === Companion_getInstance().h12_1) {
        // Inline function 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-69.<anonymous>.<anonymous>' call
        var value_8 = ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_8;
        $composer_0.z18(value_8);
        tmp_17 = value_8;
      } else {
        tmp_17 = it_8;
      }
      var tmp_18 = tmp_17;
      var tmp9_group = (tmp_18 == null ? true : !(tmp_18 == null)) ? tmp_18 : THROW_CCE();
      $composer_0.q17();
      H3(tmp9_group, ComposableSingletons$AboutKt_getInstance().w37_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().x37_1, $composer_0, 48, 1);
      $composer_0.p17(120966215);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_9 = $composer_0.t18();
      var tmp_19;
      if (false ? true : it_9 === Companion_getInstance().h12_1) {
        // Inline function 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-69.<anonymous>.<anonymous>' call
        var value_9 = ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_9;
        $composer_0.z18(value_9);
        tmp_19 = value_9;
      } else {
        tmp_19 = it_9;
      }
      var tmp_20 = tmp_19;
      var tmp10_group = (tmp_20 == null ? true : !(tmp_20 == null)) ? tmp_20 : THROW_CCE();
      $composer_0.q17();
      H4(tmp10_group, ComposableSingletons$AboutKt_getInstance().y37_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().a38_1, $composer_0, 48, 1);
      $composer_0.p17(120966836);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_10 = $composer_0.t18();
      var tmp_21;
      if (false ? true : it_10 === Companion_getInstance().h12_1) {
        // Inline function 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-69.<anonymous>.<anonymous>' call
        var value_10 = ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_10;
        $composer_0.z18(value_10);
        tmp_21 = value_10;
      } else {
        tmp_21 = it_10;
      }
      var tmp_22 = tmp_21;
      var tmp11_group = (tmp_22 == null ? true : !(tmp_22 == null)) ? tmp_22 : THROW_CCE();
      $composer_0.q17();
      H4(tmp11_group, ComposableSingletons$AboutKt_getInstance().b38_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().d38_1, $composer_0, 48, 1);
      $composer_0.p17(120967479);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_11 = $composer_0.t18();
      var tmp_23;
      if (false ? true : it_11 === Companion_getInstance().h12_1) {
        // Inline function 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-69.<anonymous>.<anonymous>' call
        var value_11 = ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_11;
        $composer_0.z18(value_11);
        tmp_23 = value_11;
      } else {
        tmp_23 = it_11;
      }
      var tmp_24 = tmp_23;
      var tmp12_group = (tmp_24 == null ? true : !(tmp_24 == null)) ? tmp_24 : THROW_CCE();
      $composer_0.q17();
      H4(tmp12_group, ComposableSingletons$AboutKt_getInstance().e38_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().f38_1, $composer_0, 48, 1);
      $composer_0.p17(120967855);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_12 = $composer_0.t18();
      var tmp_25;
      if (false ? true : it_12 === Companion_getInstance().h12_1) {
        // Inline function 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-69.<anonymous>.<anonymous>' call
        var value_12 = ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_12;
        $composer_0.z18(value_12);
        tmp_25 = value_12;
      } else {
        tmp_25 = it_12;
      }
      var tmp_26 = tmp_25;
      var tmp13_group = (tmp_26 == null ? true : !(tmp_26 == null)) ? tmp_26 : THROW_CCE();
      $composer_0.q17();
      H4(tmp13_group, ComposableSingletons$AboutKt_getInstance().g38_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().h38_1, $composer_0, 48, 1);
      $composer_0.p17(120968158);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_13 = $composer_0.t18();
      var tmp_27;
      if (false ? true : it_13 === Companion_getInstance().h12_1) {
        // Inline function 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-69.<anonymous>.<anonymous>' call
        var value_13 = ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_13;
        $composer_0.z18(value_13);
        tmp_27 = value_13;
      } else {
        tmp_27 = it_13;
      }
      var tmp_28 = tmp_27;
      var tmp14_group = (tmp_28 == null ? true : !(tmp_28 == null)) ? tmp_28 : THROW_CCE();
      $composer_0.q17();
      H2(tmp14_group, ComposableSingletons$AboutKt_getInstance().i38_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().k38_1, $composer_0, 48, 1);
      P(null, ComposableSingletons$AboutKt_getInstance().l38_1, $composer_0, 48, 1);
      Pre(null, ComposableSingletons$AboutKt_getInstance().n38_1, $composer_0, 48, 1);
      P(null, ComposableSingletons$AboutKt_getInstance().o38_1, $composer_0, 48, 1);
      $composer_0.p17(120969407);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_14 = $composer_0.t18();
      var tmp_29;
      if (false ? true : it_14 === Companion_getInstance().h12_1) {
        // Inline function 'com.canerture.androidhub.pages.ComposableSingletons$AboutKt.lambda-69.<anonymous>.<anonymous>' call
        var value_14 = ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_14;
        $composer_0.z18(value_14);
        tmp_29 = value_14;
      } else {
        tmp_29 = it_14;
      }
      var tmp_30 = tmp_29;
      var tmp15_group = (tmp_30 == null ? true : !(tmp_30 == null)) ? tmp_30 : THROW_CCE();
      $composer_0.q17();
      H2(tmp15_group, ComposableSingletons$AboutKt_getInstance().p38_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().q38_1, $composer_0, 48, 1);
      P(null, ComposableSingletons$AboutKt_getInstance().u38_1, $composer_0, 48, 1);
      P(null, ComposableSingletons$AboutKt_getInstance().v38_1, $composer_0, 48, 1);
      Pre(null, ComposableSingletons$AboutKt_getInstance().x38_1, $composer_0, 48, 1);
      P(null, ComposableSingletons$AboutKt_getInstance().z38_1, $composer_0, 48, 1);
      P(null, ComposableSingletons$AboutKt_getInstance().a39_1, $composer_0, 48, 1);
      Pre(null, ComposableSingletons$AboutKt_getInstance().c39_1, $composer_0, 48, 1);
      P(null, ComposableSingletons$AboutKt_getInstance().d39_1, $composer_0, 48, 1);
      P(null, ComposableSingletons$AboutKt_getInstance().f39_1, $composer_0, 48, 1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.b12();
    }
    return Unit_instance;
  }
  function ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng($this$H1) {
    $this$H1.q24('about-this-template');
    return Unit_instance;
  }
  function ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_0($this$H2) {
    $this$H2.q24('learn');
    return Unit_instance;
  }
  function ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_1($this$H3) {
    $this$H3.q24('files');
    return Unit_instance;
  }
  function ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_2($this$H4) {
    $this$H4.q24('appentry-kt');
    return Unit_instance;
  }
  function ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_3($this$H4) {
    $this$H4.q24('appstyles-kt');
    return Unit_instance;
  }
  function ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_4($this$H4) {
    $this$H4.q24('sitetheme-kt');
    return Unit_instance;
  }
  function ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_5($this$H4) {
    $this$H4.q24('components');
    return Unit_instance;
  }
  function ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_6($this$H4) {
    $this$H4.q24('pages');
    return Unit_instance;
  }
  function ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_7($this$H4) {
    $this$H4.q24('resources');
    return Unit_instance;
  }
  function ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_8($this$H3) {
    $this$H3.q24('classes');
    return Unit_instance;
  }
  function ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_9($this$H4) {
    $this$H4.q24('modifier');
    return Unit_instance;
  }
  function ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_10($this$H4) {
    $this$H4.q24('componentstyle');
    return Unit_instance;
  }
  function ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_11($this$H4) {
    $this$H4.q24('componentvariant');
    return Unit_instance;
  }
  function ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_12($this$H4) {
    $this$H4.q24('keyframes');
    return Unit_instance;
  }
  function ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_13($this$H2) {
    $this$H2.q24('starting-point');
    return Unit_instance;
  }
  function ComposableSingletons$AboutKt$lambda_69$lambda$lambda_myrqng_14($this$H2) {
    $this$H2.q24('export-and-deploy');
    return Unit_instance;
  }
  function ComposableSingletons$AboutKt() {
    ComposableSingletons$AboutKt_instance = this;
    var tmp = this;
    tmp.q36_1 = ComposableLambda$invoke$ref_5(composableLambdaInstance(655888299, false, ComposableSingletons$AboutKt$lambda_1$lambda_irurs3));
    var tmp_0 = this;
    tmp_0.r36_1 = ComposableLambda$invoke$ref_6(composableLambdaInstance(443045834, false, ComposableSingletons$AboutKt$lambda_2$lambda_nfmt4u));
    var tmp_1 = this;
    tmp_1.s36_1 = ComposableLambda$invoke$ref_7(composableLambdaInstance(1882134090, false, ComposableSingletons$AboutKt$lambda_3$lambda_5dznxd));
    var tmp_2 = this;
    tmp_2.t36_1 = ComposableLambda$invoke$ref_8(composableLambdaInstance(574934067, false, ComposableSingletons$AboutKt$lambda_4$lambda_y7m4zk));
    var tmp_3 = this;
    tmp_3.u36_1 = ComposableLambda$invoke$ref_9(composableLambdaInstance(-1186587415, false, ComposableSingletons$AboutKt$lambda_5$lambda_7zvfxd));
    var tmp_4 = this;
    tmp_4.v36_1 = ComposableLambda$invoke$ref_10(composableLambdaInstance(39658376, false, ComposableSingletons$AboutKt$lambda_6$lambda_ktr14u));
    var tmp_5 = this;
    tmp_5.w36_1 = ComposableLambda$invoke$ref_11(composableLambdaInstance(-1055744463, false, ComposableSingletons$AboutKt$lambda_7$lambda_ldqjs3));
    var tmp_6 = this;
    tmp_6.x36_1 = ComposableLambda$invoke$ref_12(composableLambdaInstance(1801179858, false, ComposableSingletons$AboutKt$lambda_8$lambda_7fvxa4));
    var tmp_7 = this;
    tmp_7.y36_1 = ComposableLambda$invoke$ref_13(composableLambdaInstance(-533356431, false, ComposableSingletons$AboutKt$lambda_9$lambda_yrlnmt));
    var tmp_8 = this;
    tmp_8.z36_1 = ComposableLambda$invoke$ref_14(composableLambdaInstance(-1267541647, false, ComposableSingletons$AboutKt$lambda_10$lambda_i5qkjn));
    var tmp_9 = this;
    tmp_9.a37_1 = ComposableLambda$invoke$ref_15(composableLambdaInstance(692889360, false, ComposableSingletons$AboutKt$lambda_11$lambda_o1r0da));
    var tmp_10 = this;
    tmp_10.b37_1 = ComposableLambda$invoke$ref_16(composableLambdaInstance(-41295856, false, ComposableSingletons$AboutKt$lambda_12$lambda_4rvgox));
    var tmp_11 = this;
    tmp_11.c37_1 = ComposableLambda$invoke$ref_17(composableLambdaInstance(1919135151, false, ComposableSingletons$AboutKt$lambda_13$lambda_xlhxr4));
    var tmp_12 = this;
    tmp_12.d37_1 = ComposableLambda$invoke$ref_18(composableLambdaInstance(1184949935, false, ComposableSingletons$AboutKt$lambda_14$lambda_8lzn5t));
    var tmp_13 = this;
    tmp_13.e37_1 = ComposableLambda$invoke$ref_19(composableLambdaInstance(672559373, false, ComposableSingletons$AboutKt$lambda_15$lambda_k7mtwe));
    var tmp_14 = this;
    tmp_14.f37_1 = ComposableLambda$invoke$ref_20(composableLambdaInstance(1697742766, false, ComposableSingletons$AboutKt$lambda_16$lambda_lzur0j));
    var tmp_15 = this;
    tmp_15.g37_1 = ComposableLambda$invoke$ref_21(composableLambdaInstance(1820169028, false, ComposableSingletons$AboutKt$lambda_17$lambda_6trq1o));
    var tmp_16 = this;
    tmp_16.h37_1 = ComposableLambda$invoke$ref_22(composableLambdaInstance(-821068379, false, ComposableSingletons$AboutKt$lambda_18$lambda_zdpuv9));
    var tmp_17 = this;
    tmp_17.i37_1 = ComposableLambda$invoke$ref_23(composableLambdaInstance(1116306053, false, ComposableSingletons$AboutKt$lambda_19$lambda_6k3dt2));
    var tmp_18 = this;
    tmp_18.j37_1 = ComposableLambda$invoke$ref_24(composableLambdaInstance(-1524931354, false, ComposableSingletons$AboutKt$lambda_20$lambda_bqdg8s));
    var tmp_19 = this;
    tmp_19.k37_1 = ComposableLambda$invoke$ref_25(composableLambdaInstance(245760669, false, ComposableSingletons$AboutKt$lambda_21$lambda_h390tf));
    var tmp_20 = this;
    tmp_20.l37_1 = ComposableLambda$invoke$ref_26(composableLambdaInstance(-1149586354, false, ComposableSingletons$AboutKt$lambda_22$lambda_p48k3i));
    var tmp_21 = this;
    tmp_21.m37_1 = ComposableLambda$invoke$ref_27(composableLambdaInstance(-445728595, false, ComposableSingletons$AboutKt$lambda_23$lambda_3pdwyp));
    var tmp_22 = this;
    tmp_22.n37_1 = ComposableLambda$invoke$ref_28(composableLambdaInstance(1296049558, false, ComposableSingletons$AboutKt$lambda_24$lambda_wj0e0w));
    var tmp_23 = this;
    tmp_23.o37_1 = ComposableLambda$invoke$ref_29(composableLambdaInstance(951133813, false, ComposableSingletons$AboutKt$lambda_25$lambda_9oh6w1));
    var tmp_24 = this;
    tmp_24.p37_1 = ComposableLambda$invoke$ref_30(composableLambdaInstance(-1883771570, false, ComposableSingletons$AboutKt$lambda_26$lambda_j55a66));
    var tmp_25 = this;
    tmp_25.q37_1 = ComposableLambda$invoke$ref_31(composableLambdaInstance(76659437, false, ComposableSingletons$AboutKt$lambda_27$lambda_n2caqr));
    var tmp_26 = this;
    tmp_26.r37_1 = ComposableLambda$invoke$ref_32(composableLambdaInstance(2094112950, false, ComposableSingletons$AboutKt$lambda_28$lambda_5ra6bg));
    var tmp_27 = this;
    tmp_27.s37_1 = ComposableLambda$invoke$ref_33(composableLambdaInstance(-547124457, false, ComposableSingletons$AboutKt$lambda_29$lambda_ykwndn));
    var tmp_28 = this;
    tmp_28.t37_1 = ComposableLambda$invoke$ref_34(composableLambdaInstance(1140396333, false, ComposableSingletons$AboutKt$lambda_30$lambda_temkxx));
    var tmp_29 = this;
    tmp_29.u37_1 = ComposableLambda$invoke$ref_35(composableLambdaInstance(1236920142, false, ComposableSingletons$AboutKt$lambda_31$lambda_csuzz0));
    var tmp_30 = this;
    tmp_30.v37_1 = ComposableLambda$invoke$ref_36(composableLambdaInstance(-37548474, false, ComposableSingletons$AboutKt$lambda_32$lambda_g0rh37));
    var tmp_31 = this;
    tmp_31.w37_1 = ComposableLambda$invoke$ref_37(composableLambdaInstance(-2134522478, false, ComposableSingletons$AboutKt$lambda_33$lambda_q6q3tq));
    var tmp_32 = this;
    tmp_32.x37_1 = ComposableLambda$invoke$ref_38(composableLambdaInstance(-657525779, false, ComposableSingletons$AboutKt$lambda_34$lambda_2mwd8h));
    var tmp_33 = this;
    tmp_33.y37_1 = ComposableLambda$invoke$ref_39(composableLambdaInstance(1302905228, false, ComposableSingletons$AboutKt$lambda_35$lambda_vgiuao));
    var tmp_34 = this;
    tmp_34.z37_1 = ComposableLambda$invoke$ref_40(composableLambdaInstance(2006762987, false, ComposableSingletons$AboutKt$lambda_36$lambda_aqyqm9));
    var tmp_35 = this;
    tmp_35.a38_1 = ComposableLambda$invoke$ref_41(composableLambdaInstance(568720012, false, ComposableSingletons$AboutKt$lambda_37$lambda_i2nqfy));
    var tmp_36 = this;
    tmp_36.b38_1 = ComposableLambda$invoke$ref_42(composableLambdaInstance(-1765816277, false, ComposableSingletons$AboutKt$lambda_38$lambda_o4tugz));
    var tmp_37 = this;
    tmp_37.c38_1 = ComposableLambda$invoke$ref_43(composableLambdaInstance(-1061958518, false, ComposableSingletons$AboutKt$lambda_39$lambda_4osml8));
    var tmp_38 = this;
    tmp_38.d38_1 = ComposableLambda$invoke$ref_44(composableLambdaInstance(1794965803, false, ComposableSingletons$AboutKt$lambda_40$lambda_hhfui));
    var tmp_39 = this;
    tmp_39.e38_1 = ComposableLambda$invoke$ref_45(composableLambdaInstance(-539570486, false, ComposableSingletons$AboutKt$lambda_41$lambda_sc517p));
    var tmp_40 = this;
    tmp_40.f38_1 = ComposableLambda$invoke$ref_46(composableLambdaInstance(-1610511413, false, ComposableSingletons$AboutKt$lambda_42$lambda_dvcjp8));
    var tmp_41 = this;
    tmp_41.g38_1 = ComposableLambda$invoke$ref_47(composableLambdaInstance(686675305, false, ComposableSingletons$AboutKt$lambda_43$lambda_ey9xcz));
    var tmp_42 = this;
    tmp_42.h38_1 = ComposableLambda$invoke$ref_48(composableLambdaInstance(-384265622, false, ComposableSingletons$AboutKt$lambda_44$lambda_r97njy));
    var tmp_43 = this;
    tmp_43.i38_1 = ComposableLambda$invoke$ref_49(composableLambdaInstance(559278771, false, ComposableSingletons$AboutKt$lambda_45$lambda_1keti9));
    var tmp_44 = this;
    tmp_44.j38_1 = ComposableLambda$invoke$ref_50(composableLambdaInstance(1478401541, false, ComposableSingletons$AboutKt$lambda_46$lambda_ue1akg));
    var tmp_45 = this;
    tmp_45.k38_1 = ComposableLambda$invoke$ref_51(composableLambdaInstance(841980169, false, ComposableSingletons$AboutKt$lambda_47$lambda_btgach));
    var tmp_46 = this;
    tmp_46.l38_1 = ComposableLambda$invoke$ref_52(composableLambdaInstance(2068225960, false, ComposableSingletons$AboutKt$lambda_48$lambda_h066pq));
    var tmp_47 = this;
    tmp_47.m38_1 = ComposableLambda$invoke$ref_53(composableLambdaInstance(-187836906, false, ComposableSingletons$AboutKt$lambda_49$lambda_p7be77));
    var tmp_48 = this;
    tmp_48.n38_1 = ComposableLambda$invoke$ref_54(composableLambdaInstance(-1625879881, false, ComposableSingletons$AboutKt$lambda_50$lambda_udlgmx));
    var tmp_49 = this;
    tmp_49.o38_1 = ComposableLambda$invoke$ref_55(composableLambdaInstance(-1000495545, false, ComposableSingletons$AboutKt$lambda_51$lambda_1jyzkq));
    var tmp_50 = this;
    tmp_50.p38_1 = ComposableLambda$invoke$ref_56(composableLambdaInstance(1785524562, false, ComposableSingletons$AboutKt$lambda_52$lambda_r9nhhh));
    var tmp_51 = this;
    tmp_51.q38_1 = ComposableLambda$invoke$ref_57(composableLambdaInstance(225750246, false, ComposableSingletons$AboutKt$lambda_53$lambda_exu3fg));
    var tmp_52 = this;
    tmp_52.r38_1 = ComposableLambda$invoke$ref_58(composableLambdaInstance(2088417409, false, ComposableSingletons$AboutKt$lambda_54$lambda_dvsdmr));
    var tmp_53 = this;
    tmp_53.s38_1 = ComposableLambda$invoke$ref_59(composableLambdaInstance(223327736, false, ComposableSingletons$AboutKt$lambda_55$lambda_sbp7a6));
    var tmp_54 = this;
    tmp_54.t38_1 = ComposableLambda$invoke$ref_60(composableLambdaInstance(940845651, false, ComposableSingletons$AboutKt$lambda_56$lambda_hx9s1));
    var tmp_55 = this;
    tmp_55.u38_1 = ComposableLambda$invoke$ref_61(composableLambdaInstance(1451996037, false, ComposableSingletons$AboutKt$lambda_57$lambda_tbjqu8));
    var tmp_56 = this;
    tmp_56.v38_1 = ComposableLambda$invoke$ref_62(composableLambdaInstance(-1616725468, false, ComposableSingletons$AboutKt$lambda_58$lambda_cvxu2p));
    var tmp_57 = this;
    tmp_57.w38_1 = ComposableLambda$invoke$ref_63(composableLambdaInstance(-112990337, false, ComposableSingletons$AboutKt$lambda_59$lambda_fxomzi));
    var tmp_58 = this;
    tmp_58.x38_1 = ComposableLambda$invoke$ref_64(composableLambdaInstance(907180000, false, ComposableSingletons$AboutKt$lambda_60$lambda_arekjs));
    var tmp_59 = this;
    tmp_59.y38_1 = ComposableLambda$invoke$ref_65(composableLambdaInstance(1239179588, false, ComposableSingletons$AboutKt$lambda_61$lambda_vg30d5));
    var tmp_60 = this;
    tmp_60.z38_1 = ComposableLambda$invoke$ref_66(composableLambdaInstance(-390479677, false, ComposableSingletons$AboutKt$lambda_62$lambda_2mgjay));
    var tmp_61 = this;
    tmp_61.a39_1 = ComposableLambda$invoke$ref_67(composableLambdaInstance(835766114, false, ComposableSingletons$AboutKt$lambda_63$lambda_q75xr9));
    var tmp_62 = this;
    tmp_62.b39_1 = ComposableLambda$invoke$ref_68(composableLambdaInstance(1113255454, false, ComposableSingletons$AboutKt$lambda_64$lambda_g0bn5o));
    var tmp_63 = this;
    tmp_63.c39_1 = ComposableLambda$invoke$ref_69(composableLambdaInstance(2133425791, false, ComposableSingletons$AboutKt$lambda_65$lambda_ctatwj));
    var tmp_64 = this;
    tmp_64.d39_1 = ComposableLambda$invoke$ref_70(composableLambdaInstance(2043369740, false, ComposableSingletons$AboutKt$lambda_66$lambda_te6r0e));
    var tmp_65 = this;
    tmp_65.e39_1 = ComposableLambda$invoke$ref_71(composableLambdaInstance(-1536502151, false, ComposableSingletons$AboutKt$lambda_67$lambda_kk9y7));
    var tmp_66 = this;
    tmp_66.f39_1 = ComposableLambda$invoke$ref_72(composableLambdaInstance(-1025351765, false, ComposableSingletons$AboutKt$lambda_68$lambda_s92740));
    var tmp_67 = this;
    tmp_67.g39_1 = ComposableLambda$invoke$ref_73(composableLambdaInstance(1129324712, false, ComposableSingletons$AboutKt$lambda_69$lambda_dyfdsx));
  }
  var ComposableSingletons$AboutKt_instance;
  function ComposableSingletons$AboutKt_getInstance() {
    if (ComposableSingletons$AboutKt_instance == null)
      new ComposableSingletons$AboutKt();
    return ComposableSingletons$AboutKt_instance;
  }
  function AboutPage$lambda($$changed) {
    return function ($composer, $force) {
      AboutPage($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function initColorMode(ctx) {
    ctx.f2t_1.v2t_1 = ColorMode_LIGHT_getInstance();
  }
  function AppEntry(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h19(-230830174);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.k18(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.k17()) {
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
        // Inline function 'com.canerture.androidhub.AppEntry.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_75(dispatchReceiver);
        $composer_1.z18(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.q17();
      SilkApp(tmp0, $composer_0, 6);
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
      tmp0_safe_receiver.f1e(AppEntry$lambda_0(content, $changed));
    }
  }
  function AppEntry$lambda$slambda($colorMode, resultContinuation) {
    this.p39_1 = $colorMode;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AppEntry$lambda$slambda).u1g = function ($this$LaunchedEffect, $completion) {
    var tmp = this.v1g($this$LaunchedEffect, $completion);
    tmp.xb_1 = Unit_instance;
    tmp.yb_1 = null;
    return tmp.hc();
  };
  protoOf(AppEntry$lambda$slambda).tc = function (p1, $completion) {
    return this.u1g((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AppEntry$lambda$slambda).hc = function () {
    var suspendResult = this.xb_1;
    $sm: do
      try {
        var tmp = this.vb_1;
        if (tmp === 0) {
          this.wb_1 = 1;
          localStorage.setItem('androidhub:colorMode', this.p39_1.s9_1);
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.yb_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(AppEntry$lambda$slambda).v1g = function ($this$LaunchedEffect, completion) {
    var i = new AppEntry$lambda$slambda(this.p39_1, completion);
    i.q39_1 = $this$LaunchedEffect;
    return i;
  };
  function AppEntry$lambda$slambda_0($colorMode, resultContinuation) {
    var i = new AppEntry$lambda$slambda($colorMode, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.u1g($this$LaunchedEffect, $completion);
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
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_74($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
    };
  }
  function AppEntry$lambda($content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.k17()) {
        if (isTraceInProgress()) {
          traceEventStart(-871536957, $changed, -1, 'com.canerture.androidhub.AppEntry.<anonymous> (AppEntry.kt:29)');
        }
        var colorMode = Companion_instance_0.n2p($composer_0, 8);
        $composer_0.p17(-226072114);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.iz(colorMode);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.t18();
        var tmp_0;
        if (invalid ? true : it === Companion_getInstance().h12_1) {
          // Inline function 'com.canerture.androidhub.AppEntry.<anonymous>.<anonymous>.<anonymous>' call
          var value = AppEntry$lambda$slambda_0(colorMode, null);
          $composer_0.z18(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.q17();
        LaunchedEffect(colorMode, tmp0_group, $composer_0, 64);
        var tmp_2 = scrollBehavior(minHeight(toModifier(get_SmoothColorStyle(), [], $composer_0, 64), get_vh(100)), Companion_instance_1.t2e());
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.canerture.androidhub.AppEntry.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_3 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_3, -1381754019, true, AppEntry$lambda$lambda($content));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.p17(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_1.iz(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.t18();
        var tmp_4;
        if (invalid_0 ? true : it_0 === Companion_getInstance().h12_1) {
          // Inline function 'com.canerture.androidhub.AppEntry.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_74(dispatchReceiver);
          $composer_1.z18(value_0);
          tmp_4 = value_0;
        } else {
          tmp_4 = it_0;
        }
        var tmp_5 = tmp_4;
        var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        $composer_1.q17();
        Surface(tmp_2, null, null, null, null, tmp0, $composer_0, 196616, 30);
        var tmp_6;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_6 = Unit_instance;
        }
        tmp = tmp_6;
      } else {
        $composer_0.b12();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_75($boundThis) {
    return function (p0, p1) {
      return $boundThis.i17(p0, p1);
    };
  }
  function AppEntry$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      AppEntry($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function get_HeadlineTextStyle() {
    _init_properties_AppStyles_kt__9fg0zz();
    return HeadlineTextStyle$delegate.i2f(null, HeadlineTextStyle$factory());
  }
  var HeadlineTextStyle$delegate;
  function get_SubheadlineTextStyle() {
    _init_properties_AppStyles_kt__9fg0zz();
    return SubheadlineTextStyle$delegate.i2f(null, SubheadlineTextStyle$factory());
  }
  var SubheadlineTextStyle$delegate;
  function get_CircleButtonVariant() {
    _init_properties_AppStyles_kt__9fg0zz();
    return CircleButtonVariant$delegate.i2f(null, CircleButtonVariant$factory());
  }
  var CircleButtonVariant$delegate;
  function get_UncoloredButtonVariant() {
    _init_properties_AppStyles_kt__9fg0zz();
    return UncoloredButtonVariant$delegate.i2f(null, UncoloredButtonVariant$factory());
  }
  var UncoloredButtonVariant$delegate;
  function initSiteStyles(ctx) {
    _init_properties_AppStyles_kt__9fg0zz();
    registerStyleBase(ctx.g2t_1, 'body', VOID, initSiteStyles$lambda);
    var tmp = get_HorizontalDividerStyle();
    modifyComponentStyleBase(ctx.h2t_1, tmp, VOID, initSiteStyles$lambda_0);
  }
  function HeadlineTextStyle$delegate$lambda($this$base) {
    _init_properties_AppStyles_kt__9fg0zz();
    return lineHeight(textAlign(fontSize(Companion_instance_2, get_cssRem(3)), Companion_instance_3.g2c()), 1.2);
  }
  function SubheadlineTextStyle$delegate$lambda($this$base) {
    _init_properties_AppStyles_kt__9fg0zz();
    return color(textAlign(fontSize(Companion_instance_2, get_cssRem(1)), Companion_instance_3.g2c()), get_color(toPalette($this$base.k2r_1)).s2n().r2n(VOID, VOID, VOID, 0.8));
  }
  function CircleButtonVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_AppStyles_kt__9fg0zz();
    return borderRadius(padding(Companion_instance_2, get_px(0)), get_percent(50));
  }
  function UncoloredButtonVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_AppStyles_kt__9fg0zz();
    return setVariable(Companion_instance_2, ButtonVars_getInstance().d2y(), Colors_instance.v2n());
  }
  function initSiteStyles$lambda() {
    _init_properties_AppStyles_kt__9fg0zz();
    return lineHeight(fontSize(fontFamily(Companion_instance_2, ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif']), get_px(18)), 1.5);
  }
  function initSiteStyles$lambda_0($this$modifyComponentStyleBase) {
    _init_properties_AppStyles_kt__9fg0zz();
    return fillMaxWidth(Companion_instance_2);
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
      var tmp = Companion_instance_4;
      HeadlineTextStyle$delegate = base(tmp, VOID, VOID, HeadlineTextStyle$delegate$lambda);
      var tmp_0 = Companion_instance_4;
      SubheadlineTextStyle$delegate = base(tmp_0, VOID, VOID, SubheadlineTextStyle$delegate$lambda);
      var tmp_1 = get_ButtonStyle();
      CircleButtonVariant$delegate = addVariantBase(tmp_1, VOID, CircleButtonVariant$delegate$lambda);
      var tmp_2 = get_ButtonStyle();
      UncoloredButtonVariant$delegate = addVariantBase(tmp_2, VOID, UncoloredButtonVariant$delegate$lambda);
    }
  }
  function Brand(primary, accent) {
    primary = primary === VOID ? Companion_instance_5.t2n(3965935) : primary;
    accent = accent === VOID ? Companion_instance_5.t2n(15981403) : accent;
    this.r39_1 = primary;
    this.s39_1 = accent;
  }
  function SitePalette(nearBackground, cobweb, brand, green, white, blue) {
    this.t39_1 = nearBackground;
    this.u39_1 = cobweb;
    this.v39_1 = brand;
    this.w39_1 = green;
    this.x39_1 = white;
    this.y39_1 = blue;
  }
  function SitePalettes() {
    SitePalettes_instance = this;
    this.z39_1 = new SitePalette(Companion_instance_5.t2n(16447743), Colors_instance.e2o().l2n(), new Brand(Companion_instance_5.t2n(3965935), Companion_instance_5.t2n(15981403)), Companion_instance_5.t2n(6967017), Colors_instance.i2o(), Companion_instance_5.t2n(601922));
  }
  var SitePalettes_instance;
  function SitePalettes_getInstance() {
    if (SitePalettes_instance == null)
      new SitePalettes();
    return SitePalettes_instance;
  }
  function getSitePalette() {
    return SitePalettes_getInstance().z39_1;
  }
  function initTheme(ctx) {
    set_background(ctx.h2t_1.o2t_1.w2v_1, Companion_instance_5.t2n(16448250));
    set_color(ctx.h2t_1.o2t_1.w2v_1, Colors_instance.i2o());
  }
  function get_MarkdownStyle() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return MarkdownStyle$delegate.i2f(null, MarkdownStyle$factory());
  }
  var MarkdownStyle$delegate;
  function MarkdownLayout(title, content, $composer, $changed) {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h19(1489817358);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.iz(title) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.k18(content) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.k17()) {
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
        // Inline function 'com.canerture.androidhub.components.layouts.MarkdownLayout.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_77(dispatchReceiver);
        $composer_1.z18(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.q17();
      PageLayout(title, tmp0, $composer_0, 48 | 14 & $dirty);
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
      tmp0_safe_receiver.f1e(MarkdownLayout$lambda_0(title, content, $changed));
    }
  }
  function MarkdownStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    $this$ComponentStyle.y2q('h1', MarkdownStyle$delegate$lambda$lambda);
    $this$ComponentStyle.y2q('h2', MarkdownStyle$delegate$lambda$lambda_0);
    $this$ComponentStyle.y2q('h3', MarkdownStyle$delegate$lambda$lambda_1);
    $this$ComponentStyle.y2q('h4', MarkdownStyle$delegate$lambda$lambda_2);
    $this$ComponentStyle.y2q('p', MarkdownStyle$delegate$lambda$lambda_3);
    $this$ComponentStyle.y2q('ul', MarkdownStyle$delegate$lambda$lambda_4);
    $this$ComponentStyle.y2q('li,ol,ul', MarkdownStyle$delegate$lambda$lambda_5);
    $this$ComponentStyle.y2q('code', MarkdownStyle$delegate$lambda$lambda_6($this$ComponentStyle));
    $this$ComponentStyle.y2q('pre', MarkdownStyle$delegate$lambda$lambda_7);
    $this$ComponentStyle.y2q('pre > code', MarkdownStyle$delegate$lambda$lambda_8($this$ComponentStyle));
    return Unit_instance;
  }
  function MarkdownStyle$delegate$lambda$lambda() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return lineHeight(margin(fontWeight(fontSize(Companion_instance_2, get_cssRem(3)), 400), VOID, VOID, get_cssRem(2.5)), 1.2);
  }
  function MarkdownStyle$delegate$lambda$lambda_0() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return margin_0(fontWeight(fontSize(Companion_instance_2, get_cssRem(3)), 300), get_cssRem(2));
  }
  function MarkdownStyle$delegate$lambda$lambda_1() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return margin_0(fontWeight(fontSize(Companion_instance_2, get_cssRem(2.4)), 300), get_cssRem(1.5));
  }
  function MarkdownStyle$delegate$lambda$lambda_2() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return margin(fontWeight_0(fontSize(Companion_instance_2, get_cssRem(1.2)), Companion_instance_6.d2d()), get_cssRem(1), VOID, get_cssRem(0.5));
  }
  function MarkdownStyle$delegate$lambda$lambda_3() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return margin(Companion_instance_2, VOID, VOID, get_cssRem(0.8));
  }
  function MarkdownStyle$delegate$lambda$lambda_4() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return overflowWrap(fillMaxWidth(Companion_instance_2), Companion_instance_7.r2e());
  }
  function MarkdownStyle$delegate$lambda$lambda_5() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return margin(Companion_instance_2, VOID, VOID, get_cssRem(0.25));
  }
  function MarkdownStyle$delegate$lambda$lambda_6($this_ComponentStyle) {
    return function () {
      return fontWeight_0(color(Companion_instance_2, get_color(toPalette($this_ComponentStyle.u2q_1)).s2n().r2n(VOID, VOID, VOID, 0.8)), Companion_instance_6.d2d());
    };
  }
  function MarkdownStyle$delegate$lambda$lambda_7() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return fillMaxWidth(margin(Companion_instance_2, get_cssRem(0.5), VOID, get_cssRem(2)));
  }
  function MarkdownStyle$delegate$lambda$lambda$lambda($this$overflow) {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    $this$overflow.p2o(Companion_instance_8.p2e());
    return Unit_instance;
  }
  function MarkdownStyle$delegate$lambda$lambda_8($this_ComponentStyle) {
    return function () {
      var tmp = Companion_instance_2;
      // Inline function 'org.jetbrains.compose.web.css.Companion.Block' call
      // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = backgroundColor(fillMaxWidth(display(tmp, 'block')), getSitePalette().t39_1);
      var tmp_1 = get_px(1);
      // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_2 = fontSize(padding(borderRadius(border(tmp_0, tmp_1, 'solid', get_color(toPalette($this_ComponentStyle.u2q_1))), get_cssRem(0.25)), get_cssRem(0.5)), get_cssRem(1));
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
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_76($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
    };
  }
  function MarkdownLayout$lambda($content) {
    return function ($this$PageLayout, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1316703803, $changed, -1, 'com.canerture.androidhub.components.layouts.MarkdownLayout.<anonymous> (MarkdownLayout.kt:93)');
      }
      var tmp = fillMaxSize(toModifier(get_MarkdownStyle(), [], $composer_0, 64));
      var tmp_0 = Start_instance;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.canerture.androidhub.components.layouts.MarkdownLayout.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -805280196, true, MarkdownLayout$lambda$lambda($content));
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
        // Inline function 'com.canerture.androidhub.components.layouts.MarkdownLayout.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_76(dispatchReceiver);
        $composer_1.z18(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.q17();
      Column(tmp, null, tmp_0, null, tmp0, $composer_0, 24584, 10);
      var tmp_4;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_4 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_77($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
    };
  }
  function MarkdownLayout$lambda_0($title, $content, $$changed) {
    return function ($composer, $force) {
      MarkdownLayout($title, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
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
    return PageContentStyle$delegate.i2f(null, PageContentStyle$factory());
  }
  var PageContentStyle$delegate;
  function PageLayout(title, content, $composer, $changed) {
    _init_properties_PageLayout_kt__pf69s7();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h19(928443343);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.iz(title) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.k18(content) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.k17()) {
      if (isTraceInProgress()) {
        traceEventStart(928443343, $dirty, -1, 'com.canerture.androidhub.components.layouts.PageLayout (PageLayout.kt:34)');
      }
      $composer_0.p17(-408735759);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.t18();
      var tmp;
      if (invalid ? true : it === Companion_getInstance().h12_1) {
        // Inline function 'com.canerture.androidhub.components.layouts.PageLayout.<anonymous>' call
        var value = PageLayout$slambda_0(title, null);
        this_0.z18(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.q17();
      LaunchedEffect(title, tmp0_group, $composer_0, 64 | 14 & $dirty);
      var tmp_1 = minHeight(fillMaxWidth(Companion_instance_2), get_percent(100));
      $composer_0.p17(-408735583);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.t18();
      var tmp_2;
      if (false ? true : it_0 === Companion_getInstance().h12_1) {
        // Inline function 'com.canerture.androidhub.components.layouts.PageLayout.<anonymous>' call
        var value_0 = PageLayout$lambda;
        this_1.z18(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_0.q17();
      var tmp_4 = gridTemplateRows(tmp_1, tmp1_group);
      var tmp_5 = Center_instance;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.canerture.androidhub.components.layouts.PageLayout.<anonymous>' call
      var tmp_6 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_6, -885316011, true, PageLayout$lambda_0(content));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.p17(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.iz(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_1.t18();
      var tmp_7;
      if (invalid_0 ? true : it_1 === Companion_getInstance().h12_1) {
        // Inline function 'com.canerture.androidhub.components.layouts.PageLayout.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_80(dispatchReceiver);
        $composer_1.z18(value_1);
        tmp_7 = value_1;
      } else {
        tmp_7 = it_1;
      }
      var tmp_8 = tmp_7;
      var tmp0 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_1.q17();
      Box(tmp_4, tmp_5, null, tmp0, $composer_0, 3080, 4);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.b12();
    }
    var tmp2_safe_receiver = $composer_0.i19();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.f1e(PageLayout$lambda_1(title, content, $changed));
    }
  }
  function PageContentStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_PageLayout_kt__pf69s7();
    $this$ComponentStyle.w2q(PageContentStyle$delegate$lambda$lambda);
    var tmp = Breakpoint_MD_getInstance();
    $this$ComponentStyle.r2p(tmp, PageContentStyle$delegate$lambda$lambda_0);
    return Unit_instance;
  }
  function PageContentStyle$delegate$lambda$lambda() {
    _init_properties_PageLayout_kt__pf69s7();
    var tmp0_$receiver = fillMaxSize(Companion_instance_2);
    var tmp1_leftRight = get_cssRem(2);
    var tmp2_top = get_cssRem(4);
    return padding_0(tmp0_$receiver, tmp2_top, tmp1_leftRight);
  }
  function PageContentStyle$delegate$lambda$lambda_0() {
    _init_properties_PageLayout_kt__pf69s7();
    return maxWidth(Companion_instance_2, get_cssRem(60));
  }
  function PageLayout$slambda($title, resultContinuation) {
    this.i3a_1 = $title;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(PageLayout$slambda).u1g = function ($this$LaunchedEffect, $completion) {
    var tmp = this.v1g($this$LaunchedEffect, $completion);
    tmp.xb_1 = Unit_instance;
    tmp.yb_1 = null;
    return tmp.hc();
  };
  protoOf(PageLayout$slambda).tc = function (p1, $completion) {
    return this.u1g((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(PageLayout$slambda).hc = function () {
    var suspendResult = this.xb_1;
    $sm: do
      try {
        var tmp = this.vb_1;
        if (tmp === 0) {
          this.wb_1 = 1;
          document.title = 'AndroidHub - ' + this.i3a_1;
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.yb_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(PageLayout$slambda).v1g = function ($this$LaunchedEffect, completion) {
    var i = new PageLayout$slambda(this.i3a_1, completion);
    i.j3a_1 = $this$LaunchedEffect;
    return i;
  };
  function PageLayout$slambda_0($title, resultContinuation) {
    var i = new PageLayout$slambda($title, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.u1g($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function PageLayout$lambda($this$gridTemplateRows) {
    _init_properties_PageLayout_kt__pf69s7();
    $this$gridTemplateRows.l2d(get_fr(1));
    $this$gridTemplateRows.k2d($this$gridTemplateRows.j2d());
    return Unit_instance;
  }
  function PageLayout$lambda$lambda$lambda($content) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1846496957, $changed, -1, 'com.canerture.androidhub.components.layouts.PageLayout.<anonymous>.<anonymous>.<anonymous> (PageLayout.kt:55)');
      }
      $content($this$Column, $composer_0, 8);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_78($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
    };
  }
  function PageLayout$lambda$lambda($content) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1667179892, $changed, -1, 'com.canerture.androidhub.components.layouts.PageLayout.<anonymous>.<anonymous> (PageLayout.kt:50)');
      }
      NavHeader($composer_0, 0);
      var tmp = toModifier(get_PageContentStyle(), [], $composer_0, 64);
      var tmp_0 = CenterHorizontally_instance;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.canerture.androidhub.components.layouts.PageLayout.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -1846496957, true, PageLayout$lambda$lambda$lambda($content));
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
        // Inline function 'com.canerture.androidhub.components.layouts.PageLayout.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_78(dispatchReceiver);
        $composer_1.z18(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.q17();
      Column(tmp, null, tmp_0, null, tmp0, $composer_0, 24584, 10);
      var tmp_4;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_4 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_79($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
    };
  }
  function PageLayout$lambda_0($content) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-885316011, $changed, -1, 'com.canerture.androidhub.components.layouts.PageLayout.<anonymous> (PageLayout.kt:46)');
      }
      var tmp = gridRow(fillMaxSize(Companion_instance_2), 1);
      var tmp_0 = CenterHorizontally_instance;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.canerture.androidhub.components.layouts.PageLayout.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -1667179892, true, PageLayout$lambda$lambda($content));
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
        // Inline function 'com.canerture.androidhub.components.layouts.PageLayout.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_79(dispatchReceiver);
        $composer_1.z18(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.q17();
      Column(tmp, null, tmp_0, null, tmp0, $composer_0, 24584, 10);
      Footer(gridRow(fillMaxWidth(Companion_instance_2), 2), $composer_0, 8, 0);
      var tmp_4;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_4 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_80($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
    };
  }
  function PageLayout$lambda_1($title, $content, $$changed) {
    return function ($composer, $force) {
      PageLayout($title, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
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
    return FooterStyle$delegate.i2f(null, FooterStyle$factory());
  }
  var FooterStyle$delegate;
  function Footer(modifier, $composer, $changed, $default) {
    _init_properties_Footer_kt__fc6p2z();
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h19(571317305);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 2;
    if (!(($default & 1) === 1) ? true : !(($dirty & 11) === 2) ? true : !$composer_0.k17()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance_2;
      }
      if (isTraceInProgress()) {
        traceEventStart(571317305, $dirty, -1, 'com.canerture.androidhub.components.sections.Footer (Footer.kt:29)');
      }
      var tmp = toModifier(get_FooterStyle(), [], $composer_0, 64).x2m(modifier_0._v);
      var tmp_0 = Center_instance;
      Box(tmp, tmp_0, null, ComposableSingletons$FooterKt_getInstance().l3a_1, $composer_0, 3080, 4);
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
      tmp0_safe_receiver.f1e(Footer$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_81($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
    };
  }
  function ComposableSingletons$FooterKt$lambda_1$lambda_a73781($this$Span, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1858395691, $changed, -1, 'com.canerture.androidhub.components.sections.ComposableSingletons$FooterKt.lambda-1.<anonymous> (Footer.kt:32)');
    }
    var sitePalette = getSitePalette();
    SpanText('Built with ', null, null, null, $composer_0, 6, 14);
    var tmp = setVariable(Companion_instance_2, get_ColorVar(), sitePalette.v39_1.r39_1);
    var tmp_0 = get_UncoloredLinkVariant();
    Link_0('https://github.com/varabyte/kobweb', 'Kobweb', tmp, tmp_0, null, null, false, null, $composer_0, 566, 240);
    SpanText(', template designed by ', null, null, null, $composer_0, 6, 14);
    var tmp_1 = whiteSpace(setVariable(Companion_instance_2, get_ColorVar(), sitePalette.v39_1.s39_1), Companion_instance_11.m2f());
    var tmp_2 = get_UncoloredLinkVariant();
    Link_0('https://ui-rocket.com', 'UI Rocket', tmp_1, tmp_2, null, null, false, null, $composer_0, 566, 240);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_82($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
    };
  }
  function ComposableSingletons$FooterKt$lambda_2$lambda_imj9u6($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-284662157, $changed, -1, 'com.canerture.androidhub.components.sections.ComposableSingletons$FooterKt.lambda-2.<anonymous> (Footer.kt:31)');
    }
    Span(toAttrs(textAlign(Companion_instance_2, Companion_instance_3.f2c())), ComposableSingletons$FooterKt_getInstance().k3a_1, $composer_0, 48, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$FooterKt() {
    ComposableSingletons$FooterKt_instance = this;
    var tmp = this;
    tmp.k3a_1 = ComposableLambda$invoke$ref_81(composableLambdaInstance(-1858395691, false, ComposableSingletons$FooterKt$lambda_1$lambda_a73781));
    var tmp_0 = this;
    tmp_0.l3a_1 = ComposableLambda$invoke$ref_82(composableLambdaInstance(-284662157, false, ComposableSingletons$FooterKt$lambda_2$lambda_imj9u6));
  }
  var ComposableSingletons$FooterKt_instance;
  function ComposableSingletons$FooterKt_getInstance() {
    if (ComposableSingletons$FooterKt_instance == null)
      new ComposableSingletons$FooterKt();
    return ComposableSingletons$FooterKt_instance;
  }
  function FooterStyle$delegate$lambda($this$base) {
    _init_properties_Footer_kt__fc6p2z();
    return padding_1(backgroundColor(Companion_instance_2, getSitePalette().t39_1), get_cssRem(1.5), get_percent(10));
  }
  function Footer$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      Footer($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
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
      var tmp = Companion_instance_4;
      FooterStyle$delegate = base(tmp, VOID, VOID, FooterStyle$delegate$lambda);
    }
  }
  function get_NavHeaderStyle() {
    _init_properties_NavHeader_kt__vdotjy();
    return NavHeaderStyle$delegate.i2f(null, NavHeaderStyle$factory());
  }
  var NavHeaderStyle$delegate;
  function get_SideMenuSlideInAnim() {
    _init_properties_NavHeader_kt__vdotjy();
    return SideMenuSlideInAnim$delegate.i2f(null, SideMenuSlideInAnim$factory());
  }
  var SideMenuSlideInAnim$delegate;
  function NavLink(path, text, $composer, $changed) {
    _init_properties_NavHeader_kt__vdotjy();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h19(844555591);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.iz(path) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.iz(text) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.k17()) {
      if (isTraceInProgress()) {
        traceEventStart(844555591, $dirty, -1, 'com.canerture.androidhub.components.sections.NavLink (NavHeader.kt:66)');
      }
      var tmp = Companion_instance_2;
      var tmp_0 = get_ColorVar();
      // Inline function 'org.jetbrains.compose.web.css.Color.black' call
      var tmp$ret$0 = Color('black');
      var tmp_1 = setVariable(tmp, tmp_0, tmp$ret$0);
      var tmp_2 = get_UncoloredLinkVariant();
      Link_0(path, text, tmp_1, tmp_2, null, null, false, null, $composer_0, 512 | 14 & $dirty | 112 & $dirty | 0, 240);
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
      tmp0_safe_receiver.f1e(NavLink$lambda(path, text, $changed));
    }
  }
  function MenuItems($composer, $changed) {
    _init_properties_NavHeader_kt__vdotjy();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h19(-1327933143);
    if (!($changed === 0) ? true : !$composer_0.k17()) {
      if (isTraceInProgress()) {
        traceEventStart(-1327933143, $changed, -1, 'com.canerture.androidhub.components.sections.MenuItems (NavHeader.kt:76)');
      }
      NavLink('/', 'Articles', $composer_0, 54);
      NavLink('/about', 'Projects', $composer_0, 54);
      NavLink('/about', 'Extensions', $composer_0, 54);
      NavLink('/about', 'Plugins', $composer_0, 54);
      NavLink('/about', 'Library', $composer_0, 54);
      NavLink('/about', 'Resources', $composer_0, 54);
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
      tmp0_safe_receiver.f1e(MenuItems$lambda($changed));
    }
  }
  function HamburgerButton(onClick, $composer, $changed) {
    _init_properties_NavHeader_kt__vdotjy();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h19(1913630033);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.k18(onClick) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.k17()) {
      if (isTraceInProgress()) {
        traceEventStart(1913630033, $dirty, -1, 'com.canerture.androidhub.components.sections.HamburgerButton (NavHeader.kt:86)');
      }
      IconButton(onClick, ComposableSingletons$NavHeaderKt_getInstance().m3a_1, $composer_0, 48 | 14 & $dirty);
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
      tmp0_safe_receiver.f1e(HamburgerButton$lambda(onClick, $changed));
    }
  }
  function CloseButton(onClick, $composer, $changed) {
    _init_properties_NavHeader_kt__vdotjy();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h19(1136291648);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.k18(onClick) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.k17()) {
      if (isTraceInProgress()) {
        traceEventStart(1136291648, $dirty, -1, 'com.canerture.androidhub.components.sections.CloseButton (NavHeader.kt:93)');
      }
      IconButton(onClick, ComposableSingletons$NavHeaderKt_getInstance().n3a_1, $composer_0, 48 | 14 & $dirty);
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
      tmp0_safe_receiver.f1e(CloseButton$lambda(onClick, $changed));
    }
  }
  var SideMenuState_CLOSED_instance;
  var SideMenuState_OPEN_instance;
  var SideMenuState_CLOSING_instance;
  var SideMenuState_entriesInitialized;
  function SideMenuState_initEntries() {
    if (SideMenuState_entriesInitialized)
      return Unit_instance;
    SideMenuState_entriesInitialized = true;
    SideMenuState_CLOSED_instance = new SideMenuState('CLOSED', 0);
    SideMenuState_OPEN_instance = new SideMenuState('OPEN', 1);
    SideMenuState_CLOSING_instance = new SideMenuState('CLOSING', 2);
  }
  function SideMenuState(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SideMenuState).u3a = function () {
    var tmp;
    switch (this.t9_1) {
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
    $composer_0 = $composer_0.h19(-1108811238);
    if (!($changed === 0) ? true : !$composer_0.k17()) {
      if (isTraceInProgress()) {
        traceEventStart(-1108811238, $changed, -1, 'com.canerture.androidhub.components.sections.NavHeader (NavHeader.kt:124)');
      }
      $composer_0.p17(-1812890811);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.t18();
      var tmp;
      if (false ? true : it === Companion_getInstance().h12_1) {
        // Inline function 'com.canerture.androidhub.components.sections.NavHeader.<anonymous>' call
        var value = mutableStateOf(SideMenuState_CLOSED_getInstance());
        this_0.z18(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.q17();
      var menuState$delegate = tmp0_group;
      var tmp0_modifier = toModifier(get_NavHeaderStyle(), [], $composer_0, 64);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.canerture.androidhub.components.sections.NavHeader.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -872052681, true, NavHeader$lambda_1(menuState$delegate));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.p17(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.iz(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.t18();
      var tmp_2;
      if (invalid ? true : it_0 === Companion_getInstance().h12_1) {
        // Inline function 'com.canerture.androidhub.components.sections.NavHeader.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_90(dispatchReceiver);
        $composer_1.z18(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.q17();
      Row(tmp0_modifier, Center_instance_0, CenterVertically_instance, null, tmp0, $composer_0, 24584, 8);
      Spacer($composer_0, 0);
      var tmp3_modifier = toModifier(get_NavHeaderStyle(), [], $composer_0, 64);
      Row(tmp3_modifier, Center_instance_0, CenterVertically_instance, null, ComposableSingletons$NavHeaderKt_getInstance().q3a_1, $composer_0, 24584, 8);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.b12();
    }
    var tmp1_safe_receiver = $composer_0.i19();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.f1e(NavHeader$lambda_2($changed));
    }
  }
  function SideMenu(menuState, close, onAnimationEnd, $composer, $changed) {
    _init_properties_NavHeader_kt__vdotjy();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h19(1445021827);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.iz(menuState) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.k18(close) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.k18(onAnimationEnd) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.k17()) {
      if (isTraceInProgress()) {
        traceEventStart(1445021827, $dirty, -1, 'com.canerture.androidhub.components.sections.SideMenu (NavHeader.kt:175)');
      }
      var tmp = setVariable(Companion_instance_2, OverlayVars_getInstance().o2x(), Colors_instance.v2n());
      $composer_0.p17(-760353971);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = ($dirty & 112) === 32;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.t18();
      var tmp_0;
      if (invalid ? true : it === Companion_getInstance().h12_1) {
        // Inline function 'com.canerture.androidhub.components.sections.SideMenu.<anonymous>' call
        var value = SideMenu$lambda(close);
        this_0.z18(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.q17();
      var tmp_2 = onClick(tmp, tmp0_group);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.canerture.androidhub.components.sections.SideMenu.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, -36487783, true, SideMenu$lambda_0(menuState, onAnimationEnd, close));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.p17(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.iz(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.t18();
      var tmp_4;
      if (invalid_0 ? true : it_0 === Companion_getInstance().h12_1) {
        // Inline function 'com.canerture.androidhub.components.sections.SideMenu.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_92(dispatchReceiver);
        $composer_1.z18(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = it_0;
      }
      var tmp_5 = tmp_4;
      var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_1.q17();
      Overlay(tmp_2, null, null, null, tmp0, $composer_0, 24584, 14);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.b12();
    }
    var tmp1_safe_receiver = $composer_0.i19();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.f1e(SideMenu$lambda_1(menuState, close, onAnimationEnd, $changed));
    }
  }
  function ComposableLambda$invoke$ref_83($boundThis) {
    return function (p0, p1) {
      return $boundThis.i17(p0, p1);
    };
  }
  function ComposableSingletons$NavHeaderKt$lambda_1$lambda_vv16hm($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.k17()) {
      if (isTraceInProgress()) {
        traceEventStart(1563565610, $changed, -1, 'com.canerture.androidhub.components.sections.ComposableSingletons$NavHeaderKt.lambda-1.<anonymous> (NavHeader.kt:88)');
      }
      HamburgerIcon(null, $composer_0, 0, 1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.b12();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_84($boundThis) {
    return function (p0, p1) {
      return $boundThis.i17(p0, p1);
    };
  }
  function ComposableSingletons$NavHeaderKt$lambda_2$lambda_31epff($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.k17()) {
      if (isTraceInProgress()) {
        traceEventStart(1424045209, $changed, -1, 'com.canerture.androidhub.components.sections.ComposableSingletons$NavHeaderKt.lambda-2.<anonymous> (NavHeader.kt:95)');
      }
      CloseIcon(null, $composer_0, 0, 1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.b12();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_85($boundThis) {
    return function (p0, p1) {
      return $boundThis.i17(p0, p1);
    };
  }
  function ComposableSingletons$NavHeaderKt$lambda_3$lambda_ps7rms($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.k17()) {
      if (isTraceInProgress()) {
        traceEventStart(61045801, $changed, -1, 'com.canerture.androidhub.components.sections.ComposableSingletons$NavHeaderKt.lambda-3.<anonymous> (NavHeader.kt:133)');
      }
      var tmp = height(Companion_instance_2, get_cssRem(5));
      // Inline function 'org.jetbrains.compose.web.css.Companion.Block' call
      // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = display(tmp, 'block');
      Image('/androidhub-logo.png', 'AndroidHub Logo', tmp_0, null, null, null, false, null, $composer_0, 566, 248);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.b12();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_86($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
    };
  }
  function ComposableSingletons$NavHeaderKt$lambda_4$lambda_gf9ta5($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-342585411, $changed, -1, 'com.canerture.androidhub.components.sections.ComposableSingletons$NavHeaderKt.lambda-4.<anonymous> (NavHeader.kt:169)');
    }
    MenuItems($composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_87($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
    };
  }
  function ComposableSingletons$NavHeaderKt$lambda_5$lambda_cecns2($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-653953120, $changed, -1, 'com.canerture.androidhub.components.sections.ComposableSingletons$NavHeaderKt.lambda-5.<anonymous> (NavHeader.kt:162)');
    }
    var tmp = displayIfAtLeast(gap(Companion_instance_2, get_cssRem(1.5)), Breakpoint_MD_getInstance());
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = 'solid';
    // Inline function 'org.jetbrains.compose.web.css.Color.black' call
    var tmp$ret$4 = Color('black');
    var tmp_2 = padding_1(borderRadius(border(tmp, tmp_0, tmp_1, tmp$ret$4), get_cssRem(1)), get_cssRem(1), get_cssRem(3));
    var tmp_3 = CenterVertically_instance;
    Row(tmp_2, null, tmp_3, null, ComposableSingletons$NavHeaderKt_getInstance().p3a_1, $composer_0, 24584, 10);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_88($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
    };
  }
  function ComposableSingletons$NavHeaderKt$lambda_6$lambda_tt4x4v($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1280507252, $changed, -1, 'com.canerture.androidhub.components.sections.ComposableSingletons$NavHeaderKt.lambda-6.<anonymous> (NavHeader.kt:210)');
    }
    MenuItems($composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$NavHeaderKt() {
    ComposableSingletons$NavHeaderKt_instance = this;
    var tmp = this;
    tmp.m3a_1 = ComposableLambda$invoke$ref_83(composableLambdaInstance(1563565610, false, ComposableSingletons$NavHeaderKt$lambda_1$lambda_vv16hm));
    var tmp_0 = this;
    tmp_0.n3a_1 = ComposableLambda$invoke$ref_84(composableLambdaInstance(1424045209, false, ComposableSingletons$NavHeaderKt$lambda_2$lambda_31epff));
    var tmp_1 = this;
    tmp_1.o3a_1 = ComposableLambda$invoke$ref_85(composableLambdaInstance(61045801, false, ComposableSingletons$NavHeaderKt$lambda_3$lambda_ps7rms));
    var tmp_2 = this;
    tmp_2.p3a_1 = ComposableLambda$invoke$ref_86(composableLambdaInstance(-342585411, false, ComposableSingletons$NavHeaderKt$lambda_4$lambda_gf9ta5));
    var tmp_3 = this;
    tmp_3.q3a_1 = ComposableLambda$invoke$ref_87(composableLambdaInstance(-653953120, false, ComposableSingletons$NavHeaderKt$lambda_5$lambda_cecns2));
    var tmp_4 = this;
    tmp_4.r3a_1 = ComposableLambda$invoke$ref_88(composableLambdaInstance(1280507252, false, ComposableSingletons$NavHeaderKt$lambda_6$lambda_tt4x4v));
  }
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
    return $menuState$delegate.j2();
  }
  function NavHeader$lambda_0($menuState$delegate, value) {
    _init_properties_NavHeader_kt__vdotjy();
    getLocalDelegateReference('menuState', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $menuState$delegate.kq(value);
    return Unit_instance;
  }
  function NavHeaderStyle$delegate$lambda($this$base) {
    _init_properties_NavHeader_kt__vdotjy();
    return padding(fillMaxWidth(Companion_instance_2), get_cssRem(3));
  }
  function SideMenuSlideInAnim$delegate$lambda($this$Keyframes) {
    _init_properties_NavHeader_kt__vdotjy();
    $this$Keyframes.a2p(SideMenuSlideInAnim$delegate$lambda$lambda);
    $this$Keyframes.b2p(SideMenuSlideInAnim$delegate$lambda$lambda_0);
    return Unit_instance;
  }
  function SideMenuSlideInAnim$delegate$lambda$lambda() {
    _init_properties_NavHeader_kt__vdotjy();
    return translateX(Companion_instance_2, get_percent(100));
  }
  function SideMenuSlideInAnim$delegate$lambda$lambda_0() {
    _init_properties_NavHeader_kt__vdotjy();
    return Companion_instance_2;
  }
  function NavLink$lambda($path, $text, $$changed) {
    return function ($composer, $force) {
      NavLink($path, $text, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function MenuItems$lambda($$changed) {
    return function ($composer, $force) {
      MenuItems($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function HamburgerButton$lambda($onClick, $$changed) {
    return function ($composer, $force) {
      HamburgerButton($onClick, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function CloseButton$lambda($onClick, $$changed) {
    return function ($composer, $force) {
      CloseButton($onClick, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function NavHeader$lambda$lambda$lambda($menuState$delegate) {
    return function () {
      NavHeader$lambda_0($menuState$delegate, SideMenuState_OPEN_getInstance());
      return Unit_instance;
    };
  }
  function NavHeader$lambda$lambda$lambda_0($menuState$delegate) {
    return function () {
      NavHeader$lambda_0($menuState$delegate, NavHeader$lambda($menuState$delegate).u3a());
      return Unit_instance;
    };
  }
  function NavHeader$lambda$lambda$lambda_1($menuState$delegate) {
    return function () {
      var tmp;
      if (NavHeader$lambda($menuState$delegate).equals(SideMenuState_CLOSING_getInstance())) {
        NavHeader$lambda_0($menuState$delegate, SideMenuState_CLOSED_getInstance());
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function NavHeader$lambda$lambda($menuState$delegate) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(214303636, $changed, -1, 'com.canerture.androidhub.components.sections.NavHeader.<anonymous>.<anonymous> (NavHeader.kt:143)');
      }
      $composer_0.p17(-1190398320);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.t18();
      var tmp;
      if (false ? true : it === Companion_getInstance().h12_1) {
        // Inline function 'com.canerture.androidhub.components.sections.NavHeader.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = NavHeader$lambda$lambda$lambda($menuState$delegate);
        $composer_0.z18(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.q17();
      HamburgerButton(tmp0_group, $composer_0, 6);
      if (!NavHeader$lambda($menuState$delegate).equals(SideMenuState_CLOSED_getInstance())) {
        var tmp_1 = NavHeader$lambda($menuState$delegate);
        $composer_0.p17(-1190398145);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_0.t18();
        var tmp_2;
        if (false ? true : it_0 === Companion_getInstance().h12_1) {
          // Inline function 'com.canerture.androidhub.components.sections.NavHeader.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = NavHeader$lambda$lambda$lambda_0($menuState$delegate);
          $composer_0.z18(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = it_0;
        }
        var tmp_3 = tmp_2;
        var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_0.q17();
        $composer_0.p17(-1190398073);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_0.t18();
        var tmp_4;
        if (false ? true : it_1 === Companion_getInstance().h12_1) {
          // Inline function 'com.canerture.androidhub.components.sections.NavHeader.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = NavHeader$lambda$lambda$lambda_1($menuState$delegate);
          $composer_0.z18(value_1);
          tmp_4 = value_1;
        } else {
          tmp_4 = it_1;
        }
        var tmp_5 = tmp_4;
        var tmp2_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        $composer_0.q17();
        SideMenu(tmp_1, tmp1_group, tmp2_group, $composer_0, 432);
      }
      var tmp_6;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_6 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_89($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
    };
  }
  function NavHeader$lambda_1($menuState$delegate) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-872052681, $changed, -1, 'com.canerture.androidhub.components.sections.NavHeader.<anonymous> (NavHeader.kt:132)');
      }
      Link('https://androidhub.dev', null, null, null, null, false, null, ComposableSingletons$NavHeaderKt_getInstance().o3a_1, $composer_0, 12582918, 126);
      var tmp = displayUntil(gap(fontSize(Companion_instance_2, get_cssRem(1.5)), get_cssRem(1)), Breakpoint_MD_getInstance());
      var tmp_0 = CenterVertically_instance;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.canerture.androidhub.components.sections.NavHeader.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 214303636, true, NavHeader$lambda$lambda($menuState$delegate));
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
        // Inline function 'com.canerture.androidhub.components.sections.NavHeader.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_89(dispatchReceiver);
        $composer_1.z18(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.q17();
      Row(tmp, null, tmp_0, null, tmp0, $composer_0, 24584, 10);
      var tmp_4;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_4 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_90($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
    };
  }
  function NavHeader$lambda_2($$changed) {
    return function ($composer, $force) {
      NavHeader($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function SideMenu$lambda($close) {
    return function (it) {
      $close();
      return Unit_instance;
    };
  }
  function SideMenu$lambda$lambda(it) {
    _init_properties_NavHeader_kt__vdotjy();
    it.r2a();
    return Unit_instance;
  }
  function SideMenu$lambda$lambda_0($onAnimationEnd) {
    return function (it) {
      $onAnimationEnd();
      return Unit_instance;
    };
  }
  function SideMenu$lambda$lambda$lambda($close) {
    return function () {
      $close();
      return Unit_instance;
    };
  }
  function SideMenu$lambda$lambda_1($close) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-206915651, $changed, -1, 'com.canerture.androidhub.components.sections.SideMenu.<anonymous>.<anonymous>.<anonymous> (NavHeader.kt:205)');
      }
      $composer_0.p17(-1518991120);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.iz($close);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.t18();
      var tmp;
      if (invalid ? true : it === Companion_getInstance().h12_1) {
        // Inline function 'com.canerture.androidhub.components.sections.SideMenu.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = SideMenu$lambda$lambda$lambda($close);
        $composer_0.z18(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.q17();
      CloseButton(tmp0_group, $composer_0, 0);
      var tmp_1 = fontSize(gap(padding_2(Companion_instance_2, VOID, get_cssRem(0.75)), get_cssRem(1.5)), get_cssRem(1.4));
      var tmp_2 = End_instance;
      Column(tmp_1, null, tmp_2, null, ComposableSingletons$NavHeaderKt_getInstance().r3a_1, $composer_0, 24584, 10);
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_91($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
    };
  }
  function SideMenu$lambda_0($menuState, $onAnimationEnd, $close) {
    return function ($this$Overlay, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-36487783, $changed, -1, 'com.canerture.androidhub.components.sections.SideMenu.<anonymous> (NavHeader.kt:181)');
      }
      $composer_0.s14(629540746, $menuState);
      var tmp = backgroundColor(gap(padding_0($this$Overlay.k2m(width(fillMaxHeight(Companion_instance_2), clamp(get_cssRem(8), get_percent(33), get_cssRem(10))), CenterEnd_instance), get_cssRem(1), get_cssRem(1)), get_cssRem(1.5)), getSitePalette().t39_1);
      var tmp_0 = get_SideMenuSlideInAnim();
      var tmp_1 = get_ms(200);
      var tmp_2;
      if ($menuState.equals(SideMenuState_OPEN_getInstance())) {
        // Inline function 'org.jetbrains.compose.web.css.Companion.EaseOut' call
        // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_2 = 'ease-out';
      } else {
        // Inline function 'org.jetbrains.compose.web.css.Companion.EaseIn' call
        // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_2 = 'ease-in';
      }
      var tmp_3 = tmp_2;
      var tmp_4;
      if ($menuState.equals(SideMenuState_OPEN_getInstance())) {
        // Inline function 'org.jetbrains.compose.web.css.Companion.Normal' call
        // Inline function 'org.jetbrains.compose.web.css.AnimationDirection' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_4 = 'normal';
      } else {
        // Inline function 'org.jetbrains.compose.web.css.Companion.Reverse' call
        // Inline function 'org.jetbrains.compose.web.css.AnimationDirection' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_4 = 'reverse';
      }
      var tmp_5 = tmp_4;
      // Inline function 'org.jetbrains.compose.web.css.Companion.Forwards' call
      // Inline function 'org.jetbrains.compose.web.css.AnimationFillMode' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_6 = 'forwards';
      var tmp_7 = borderRadius_0(animation(tmp, [toAnimation(tmp_0, tmp_1, tmp_3, null, null, tmp_5, tmp_6, null, $composer_0, 2359880, 76)]), get_cssRem(2));
      $composer_0.p17(629542001);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.t18();
      var tmp_8;
      if (false ? true : it === Companion_getInstance().h12_1) {
        // Inline function 'com.canerture.androidhub.components.sections.SideMenu.<anonymous>.<anonymous>.<anonymous>' call
        var value = SideMenu$lambda$lambda;
        $composer_0.z18(value);
        tmp_8 = value;
      } else {
        tmp_8 = it;
      }
      var tmp_9 = tmp_8;
      var tmp0_group = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
      $composer_0.q17();
      var tmp_10 = onClick(tmp_7, tmp0_group);
      $composer_0.p17(629542062);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.iz($onAnimationEnd);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.t18();
      var tmp_11;
      if (invalid ? true : it_0 === Companion_getInstance().h12_1) {
        // Inline function 'com.canerture.androidhub.components.sections.SideMenu.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = SideMenu$lambda$lambda_0($onAnimationEnd);
        $composer_0.z18(value_0);
        tmp_11 = value_0;
      } else {
        tmp_11 = it_0;
      }
      var tmp_12 = tmp_11;
      var tmp1_group = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
      $composer_0.q17();
      var tmp_13 = onAnimationEnd(tmp_10, tmp1_group);
      var tmp_14 = End_instance;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.canerture.androidhub.components.sections.SideMenu.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_15 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_15, -206915651, true, SideMenu$lambda$lambda_1($close));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.p17(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.iz(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_1.t18();
      var tmp_16;
      if (invalid_0 ? true : it_1 === Companion_getInstance().h12_1) {
        // Inline function 'com.canerture.androidhub.components.sections.SideMenu.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_91(dispatchReceiver);
        $composer_1.z18(value_1);
        tmp_16 = value_1;
      } else {
        tmp_16 = it_1;
      }
      var tmp_17 = tmp_16;
      var tmp0 = (tmp_17 == null ? true : !(tmp_17 == null)) ? tmp_17 : THROW_CCE();
      $composer_1.q17();
      Column(tmp_13, null, tmp_14, null, tmp0, $composer_0, 24584, 10);
      $composer_0.v14();
      var tmp_18;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_18 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_92($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
    };
  }
  function SideMenu$lambda_1($menuState, $close, $onAnimationEnd, $$changed) {
    return function ($composer, $force) {
      SideMenu($menuState, $close, $onAnimationEnd, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
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
      var tmp = Companion_instance_4;
      NavHeaderStyle$delegate = base(tmp, VOID, VOID, NavHeaderStyle$delegate$lambda);
      SideMenuSlideInAnim$delegate = Keyframes(VOID, SideMenuSlideInAnim$delegate$lambda);
    }
  }
  function IconButton(onClick, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h19(-2093742643);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.k18(onClick) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.k18(content) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.k17()) {
      if (isTraceInProgress()) {
        traceEventStart(-2093742643, $dirty, -1, 'com.canerture.androidhub.components.widgets.IconButton (IconButton.kt:12)');
      }
      $composer_0.p17(-896661888);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.t18();
      var tmp;
      if (invalid ? true : it === Companion_getInstance().h12_1) {
        // Inline function 'com.canerture.androidhub.components.widgets.IconButton.<anonymous>' call
        var value = IconButton$lambda(onClick);
        this_0.z18(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.q17();
      var tmp_1 = setVariable(Companion_instance_2, ButtonVars_getInstance().h2y(), get_em(1));
      var tmp_2 = get_CircleButtonVariant().l2r(get_UncoloredButtonVariant());
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.canerture.androidhub.components.widgets.IconButton.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, -362128419, true, IconButton$lambda_0(content));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.p17(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.iz(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.t18();
      var tmp_4;
      if (invalid_0 ? true : it_0 === Companion_getInstance().h12_1) {
        // Inline function 'com.canerture.androidhub.components.widgets.IconButton.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_93(dispatchReceiver);
        $composer_1.z18(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = it_0;
      }
      var tmp_5 = tmp_4;
      var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_1.q17();
      Button(tmp0_group, tmp_1, tmp_2, null, false, null, null, null, null, tmp0, $composer_0, 805306432, 504);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.b12();
    }
    var tmp1_safe_receiver = $composer_0.i19();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.f1e(IconButton$lambda_1(onClick, content, $changed));
    }
  }
  function IconButton$lambda($onClick) {
    return function (it) {
      $onClick();
      return Unit_instance;
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
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_93($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
    };
  }
  function IconButton$lambda_1($onClick, $content, $$changed) {
    return function ($composer, $force) {
      IconButton($onClick, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function get_HeroContainerStyle() {
    _init_properties_Index_kt__ifxcv4();
    return HeroContainerStyle$delegate.i2f(null, HeroContainerStyle$factory());
  }
  var HeroContainerStyle$delegate;
  function get_HomeGridStyle() {
    _init_properties_Index_kt__ifxcv4();
    return HomeGridStyle$delegate.i2f(null, HomeGridStyle$factory());
  }
  var HomeGridStyle$delegate;
  function get_GridCellColorVar() {
    _init_properties_Index_kt__ifxcv4();
    return GridCellColorVar$delegate.i2f(null, GridCellColorVar$factory());
  }
  var GridCellColorVar$delegate;
  function get_HomeGridCellStyle() {
    _init_properties_Index_kt__ifxcv4();
    return HomeGridCellStyle$delegate.i2f(null, HomeGridCellStyle$factory());
  }
  var HomeGridCellStyle$delegate;
  function GridCell(color, row, column, width, height, $composer, $changed, $default) {
    _init_properties_Index_kt__ifxcv4();
    var width_0 = {_v: width};
    var height_0 = {_v: height};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h19(1898381357);
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
    var tmp0_safe_receiver = $composer_0.i19();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.f1e(GridCell$lambda(color, row, column, width_0, height_0, $changed, $default));
    }
  }
  function HomePage($composer, $changed) {
    _init_properties_Index_kt__ifxcv4();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h19(-763277764);
    if (!($changed === 0) ? true : !$composer_0.k17()) {
      if (isTraceInProgress()) {
        traceEventStart(-763277764, $changed, -1, 'com.canerture.androidhub.pages.HomePage (Index.kt:67)');
      }
      PageLayout('Home', ComposableSingletons$IndexKt_getInstance().a3b_1, $composer_0, 54);
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
      tmp0_safe_receiver.f1e(HomePage$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_94($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_95($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
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
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_96($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_3$lambda_7fjxui($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-596361092, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$IndexKt.lambda-3.<anonymous> (Index.kt:71)');
    }
    var sitePalette = getSitePalette();
    var tmp = gap(Companion_instance_2, get_cssRem(2));
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.canerture.androidhub.pages.ComposableSingletons$IndexKt.lambda-3.<anonymous>.<anonymous>' call
    var tmp_0 = $composer_0;
    var dispatchReceiver = composableLambda(tmp_0, -2110878989, true, ComposableSingletons$IndexKt$lambda_3$lambda$lambda_h8z03p(sitePalette));
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
    var tmp_1;
    if (invalid ? true : it === Companion_getInstance().h12_1) {
      // Inline function 'com.canerture.androidhub.pages.ComposableSingletons$IndexKt.lambda-3.<anonymous>.<anonymous>.<anonymous>' call
      var value = ComposableLambda$invoke$ref_98(dispatchReceiver);
      $composer_1.z18(value);
      tmp_1 = value;
    } else {
      tmp_1 = it;
    }
    var tmp_2 = tmp_1;
    var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_1.q17();
    Column(tmp, null, null, null, tmp0, $composer_0, 24584, 14);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda_3$lambda$lambda$lambda_o3atbu($sitePalette) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-522564366, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$IndexKt.lambda-3.<anonymous>.<anonymous>.<anonymous> (Index.kt:75)');
      }
      var tmp = Companion_instance_2;
      var tmp_0;
      switch (Companion_instance_0.n2p($composer_0, 8).t9_1) {
        case 0:
          tmp_0 = Colors_instance.w2n();
          break;
        case 1:
          tmp_0 = Colors_instance.i2o();
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp_1 = color(tmp, tmp_0);
      SpanText('Use this template as your starting point for ', tmp_1, null, null, $composer_0, 70, 12);
      var tmp_2 = textShadow(color(Companion_instance_2, $sitePalette.v39_1.s39_1), get_px(0), get_px(0), get_cssRem(0.5), Colors_instance.d2o());
      SpanText('Kobweb', tmp_2, null, null, $composer_0, 70, 12);
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_97($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_3$lambda$lambda$lambda_o3atbu_0($ctx) {
    return function (it) {
      $ctx.v2j_1.h2m('/about');
      return Unit_instance;
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
        // Inline function 'com.canerture.androidhub.pages.ComposableSingletons$IndexKt.lambda-3.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_97(dispatchReceiver);
        $composer_1.z18(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.q17();
      Div(tmp_0, tmp0, $composer_0, 48, 0);
      var tmp_4 = get_SubheadlineTextStyle();
      Div(toAttrs_0(tmp_4, [], null, $composer_0, 64, 2), ComposableSingletons$IndexKt_getInstance().v3a_1, $composer_0, 48, 0);
      var ctx = rememberPageContext($composer_0, 0);
      var tmp_5 = ComposableSingletons$IndexKt$lambda_3$lambda$lambda$lambda_o3atbu_0(ctx);
      var tmp_6 = Blue_getInstance();
      Button(tmp_5, null, null, null, false, null, tmp_6, null, null, ComposableSingletons$IndexKt_getInstance().w3a_1, $composer_0, 805306368, 446);
      var tmp_7;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_7 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_98($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
    };
  }
  function ComposableLambda$invoke$ref_99($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_4$lambda_le2j7p($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1935791819, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$IndexKt.lambda-4.<anonymous> (Index.kt:119)');
    }
    var sitePalette = getSitePalette();
    GridCell(sitePalette.v39_1.r39_1, 1, 1, 2, 2, $composer_0, 28088, 0);
    var tmp = Monochrome_getInstance().i2u_1;
    GridCell(tmp, 1, 3, null, null, $composer_0, 432, 24);
    var tmp_0 = Monochrome_getInstance().d2u_1;
    GridCell(tmp_0, 1, 4, 2, null, $composer_0, 3504, 16);
    GridCell(sitePalette.v39_1.s39_1, 2, 3, 2, null, $composer_0, 3512, 16);
    var tmp_1 = Monochrome_getInstance().f2u_1;
    GridCell(tmp_1, 2, 5, null, null, $composer_0, 432, 24);
    var tmp_2 = Monochrome_getInstance().k2u_1;
    GridCell(tmp_2, 3, 1, 5, null, $composer_0, 3504, 16);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_100($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_5$lambda_ktf1p8($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-197148810, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$IndexKt.lambda-5.<anonymous> (Index.kt:70)');
    }
    Box(null, null, null, ComposableSingletons$IndexKt_getInstance().x3a_1, $composer_0, 3072, 7);
    var tmp = displayIfAtLeast(toModifier(get_HomeGridStyle(), [], $composer_0, 64), Breakpoint_MD_getInstance());
    $composer_0.p17(16459822);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.t18();
    var tmp_0;
    if (false ? true : it === Companion_getInstance().h12_1) {
      // Inline function 'com.canerture.androidhub.pages.ComposableSingletons$IndexKt.lambda-5.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$IndexKt$lambda_5$lambda$lambda_3x0x15;
      $composer_0.z18(value);
      tmp_0 = value;
    } else {
      tmp_0 = it;
    }
    var tmp_1 = tmp_0;
    var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    $composer_0.q17();
    Div(toAttrs(grid(tmp, tmp0_group)), ComposableSingletons$IndexKt_getInstance().y3a_1, $composer_0, 48, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda_5$lambda$lambda_3x0x15($this$grid) {
    $this$grid.e2e(ComposableSingletons$IndexKt$lambda_5$lambda$lambda$lambda_kgzzy4);
    $this$grid.d2e(ComposableSingletons$IndexKt$lambda_5$lambda$lambda$lambda_kgzzy4_0);
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda_5$lambda$lambda$lambda_kgzzy4($this$rows) {
    $this$rows.g2d(3, ComposableSingletons$IndexKt$lambda_5$lambda$lambda$lambda$lambda_o33jyx);
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda_5$lambda$lambda$lambda$lambda_o33jyx($this$repeat) {
    $this$repeat.l2d(get_fr(1));
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda_5$lambda$lambda$lambda_kgzzy4_0($this$columns) {
    $this$columns.g2d(5, ComposableSingletons$IndexKt$lambda_5$lambda$lambda$lambda$lambda_o33jyx_0);
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda_5$lambda$lambda$lambda$lambda_o33jyx_0($this$repeat) {
    $this$repeat.l2d(get_fr(1));
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_101($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_6$lambda_807fcz($this$PageLayout, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1997478029, $changed, -1, 'com.canerture.androidhub.pages.ComposableSingletons$IndexKt.lambda-6.<anonymous> (Index.kt:69)');
    }
    var tmp = toModifier(get_HeroContainerStyle(), [], $composer_0, 64);
    Row(tmp, null, null, null, ComposableSingletons$IndexKt_getInstance().z3a_1, $composer_0, 24584, 14);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt() {
    ComposableSingletons$IndexKt_instance = this;
    var tmp = this;
    tmp.v3a_1 = ComposableLambda$invoke$ref_94(composableLambdaInstance(1260269097, false, ComposableSingletons$IndexKt$lambda_1$lambda_5yb608));
    var tmp_0 = this;
    tmp_0.w3a_1 = ComposableLambda$invoke$ref_95(composableLambdaInstance(1692940003, false, ComposableSingletons$IndexKt$lambda_2$lambda_yrxn2f));
    var tmp_1 = this;
    tmp_1.x3a_1 = ComposableLambda$invoke$ref_96(composableLambdaInstance(-596361092, false, ComposableSingletons$IndexKt$lambda_3$lambda_7fjxui));
    var tmp_2 = this;
    tmp_2.y3a_1 = ComposableLambda$invoke$ref_99(composableLambdaInstance(-1935791819, false, ComposableSingletons$IndexKt$lambda_4$lambda_le2j7p));
    var tmp_3 = this;
    tmp_3.z3a_1 = ComposableLambda$invoke$ref_100(composableLambdaInstance(-197148810, false, ComposableSingletons$IndexKt$lambda_5$lambda_ktf1p8));
    var tmp_4 = this;
    tmp_4.a3b_1 = ComposableLambda$invoke$ref_101(composableLambdaInstance(-1997478029, false, ComposableSingletons$IndexKt$lambda_6$lambda_807fcz));
  }
  var ComposableSingletons$IndexKt_instance;
  function ComposableSingletons$IndexKt_getInstance() {
    if (ComposableSingletons$IndexKt_instance == null)
      new ComposableSingletons$IndexKt();
    return ComposableSingletons$IndexKt_instance;
  }
  function HeroContainerStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Index_kt__ifxcv4();
    $this$ComponentStyle.w2q(HeroContainerStyle$delegate$lambda$lambda);
    var tmp = Breakpoint_MD_getInstance();
    $this$ComponentStyle.r2p(tmp, HeroContainerStyle$delegate$lambda$lambda_0);
    return Unit_instance;
  }
  function HeroContainerStyle$delegate$lambda$lambda() {
    _init_properties_Index_kt__ifxcv4();
    return gap(fillMaxWidth(Companion_instance_2), get_cssRem(2));
  }
  function HeroContainerStyle$delegate$lambda$lambda_0() {
    _init_properties_Index_kt__ifxcv4();
    var tmp = Companion_instance_2;
    return margin_1(tmp, HeroContainerStyle$delegate$lambda$lambda$lambda);
  }
  function HeroContainerStyle$delegate$lambda$lambda$lambda($this$margin) {
    _init_properties_Index_kt__ifxcv4();
    $this$margin.s2o(get_vh(20));
    return Unit_instance;
  }
  function HomeGridStyle$delegate$lambda($this$base) {
    _init_properties_Index_kt__ifxcv4();
    return height(width(gap(Companion_instance_2, get_cssRem(0.5)), get_cssRem(70)), get_cssRem(18));
  }
  function HomeGridCellStyle$delegate$lambda($this$base) {
    _init_properties_Index_kt__ifxcv4();
    return borderRadius(boxShadow(backgroundColor(Companion_instance_2, get_GridCellColorVar().c2f()), VOID, VOID, get_cssRem(0.6), VOID, get_GridCellColorVar().c2f()), get_cssRem(1));
  }
  function GridCell$lambda($color, $row, $column, $width, $height, $$changed, $$default) {
    return function ($composer, $force) {
      GridCell($color, $row, $column, $width._v, $height._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function HomePage$lambda($$changed) {
    return function ($composer, $force) {
      HomePage($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
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
      var tmp = Companion_instance_4;
      HomeGridStyle$delegate = base(tmp, VOID, VOID, HomeGridStyle$delegate$lambda);
      GridCellColorVar$delegate = StyleVariable();
      var tmp_0 = Companion_instance_4;
      HomeGridCellStyle$delegate = base(tmp_0, VOID, VOID, HomeGridCellStyle$delegate$lambda);
    }
  }
  main();
  return _;
}));

//# sourceMappingURL=androidhub.js.map
