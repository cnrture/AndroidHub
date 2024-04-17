(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-compose-runtime-runtime.js', './kotlin-kotlin-stdlib.js', './kobweb-frontend-kobweb-compose.js', './html-html-core.js', './kobweb-frontend-browser-ext.js', './kobweb-frontend-compose-html-ext.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./html-html-core.js'), require('./kobweb-frontend-browser-ext.js'), require('./kobweb-frontend-compose-html-ext.js'));
  else {
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof this['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof this['kobweb-frontend-browser-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kobweb-frontend-browser-ext' was not found. Please, check whether 'kobweb-frontend-browser-ext' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof this['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    root['kobweb-frontend-silk-foundation'] = factory(typeof this['kobweb-frontend-silk-foundation'] === 'undefined' ? {} : this['kobweb-frontend-silk-foundation'], this['compose-multiplatform-core-compose-runtime-runtime'], this['kotlin-kotlin-stdlib'], this['kobweb-frontend-kobweb-compose'], this['html-html-core'], this['kobweb-frontend-browser-ext'], this['kobweb-frontend-compose-html-ext']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_browser_ext, kotlin_com_varabyte_kobweb_compose_html_ext) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var THROW_CCE = kotlin_kotlin.$_$.re;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var Unit_getInstance = kotlin_kotlin.$_$.l4;
  var KobwebComposeStyleSheet_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j3;
  var Style = kotlin_org_jetbrains_compose_html_html_core.$_$.d6;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var StyleSheet = kotlin_org_jetbrains_compose_html_html_core.$_$.g3;
  var VOID = kotlin_kotlin.$_$.e;
  var StyleSheet_init_$Init$ = kotlin_org_jetbrains_compose_html_html_core.$_$.b;
  var protoOf = kotlin_kotlin.$_$.ob;
  var objectMeta = kotlin_kotlin.$_$.nb;
  var setMetadataFor = kotlin_kotlin.$_$.pb;
  var listOf = kotlin_kotlin.$_$.n7;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.a6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var distinct = kotlin_kotlin.$_$.q6;
  var lazy = kotlin_kotlin.$_$.mf;
  var classMeta = kotlin_kotlin.$_$.ea;
  var removeSuffix = kotlin_kotlin.$_$.ed;
  var titleCamelCaseToKebabCase = kotlin_com_varabyte_kobweb_browser_ext.$_$.f;
  var mapCapacity = kotlin_kotlin.$_$.o7;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s;
  var ComparableStyleScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d;
  var toStyles = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h3;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.t;
  var From_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.h;
  var to = kotlin_kotlin.$_$.vf;
  var To_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.i;
  var Percentage = kotlin_org_jetbrains_compose_html_html_core.$_$.q2;
  var toList = kotlin_kotlin.$_$.s8;
  var Combine = kotlin_org_jetbrains_compose_html_html_core.$_$.p2;
  var equals = kotlin_kotlin.$_$.ha;
  var hashCode = kotlin_kotlin.$_$.oa;
  var StyleScopeBuilder = kotlin_org_jetbrains_compose_html_html_core.$_$.e3;
  var CSSKeyframeRuleDeclaration = kotlin_org_jetbrains_compose_html_html_core.$_$.r2;
  var CSSKeyframesRuleDeclaration = kotlin_org_jetbrains_compose_html_html_core.$_$.s2;
  var toString = kotlin_kotlin.$_$.rb;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.r1;
  var CSSAnimation = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c;
  var KProperty1 = kotlin_kotlin.$_$.fc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ma;
  var Raw = kotlin_org_jetbrains_compose_html_html_core.$_$.u2;
  var classNames = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w;
  var Companion_getInstance_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u3;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_html_html_core.$_$.k;
  var display = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z;
  var KProperty0 = kotlin_kotlin.$_$.ec;
  var getValue = kotlin_kotlin.$_$.a7;
  var objectCreate = kotlin_kotlin.$_$.mb;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.k;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.b2;
  var ComparableAttrsScope_init_$Create$ = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.t2;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g3;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.d1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.f2;
  var charSequenceLength = kotlin_kotlin.$_$.da;
  var charSequenceGet = kotlin_kotlin.$_$.ca;
  var substringAfter = kotlin_kotlin.$_$.qd;
  var substringBefore = kotlin_kotlin.$_$.rd;
  var substringAfterLast = kotlin_kotlin.$_$.od;
  var removePrefix = kotlin_kotlin.$_$.dd;
  var kebabCaseToTitleCamelCase = kotlin_com_varabyte_kobweb_browser_ext.$_$.d;
  var joinToString = kotlin_kotlin.$_$.e7;
  var isNotEmpty = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g1;
  var media = kotlin_org_jetbrains_compose_html_html_core.$_$.x4;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var mutableListOf = kotlin_kotlin.$_$.s7;
  var plus = kotlin_kotlin.$_$.v7;
  var toSet = kotlin_kotlin.$_$.x8;
  var endsWith = kotlin_kotlin.$_$.tc;
  var copyToArray = kotlin_kotlin.$_$.p6;
  var interfaceMeta = kotlin_kotlin.$_$.qa;
  var substringAfterLast_0 = kotlin_kotlin.$_$.nd;
  var plus_0 = kotlin_kotlin.$_$.x7;
  var emptyList = kotlin_kotlin.$_$.r6;
  var listOf_0 = kotlin_kotlin.$_$.m7;
  var plus_1 = kotlin_kotlin.$_$.y7;
  var getStringHashCode = kotlin_kotlin.$_$.na;
  var isBlank = kotlin_kotlin.$_$.xc;
  var first = kotlin_kotlin.$_$.uc;
  var Char = kotlin_kotlin.$_$.ee;
  var setOf = kotlin_kotlin.$_$.d8;
  var THROW_IAE = kotlin_kotlin.$_$.se;
  var enumEntries = kotlin_kotlin.$_$.u9;
  var Enum = kotlin_kotlin.$_$.ge;
  var numberToDouble = kotlin_kotlin.$_$.kb;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.f5;
  var toIntOrNull = kotlin_kotlin.$_$.td;
  var endsWith_0 = kotlin_kotlin.$_$.sc;
  var startsWith = kotlin_kotlin.$_$.md;
  var Companion_getInstance_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l3;
  var whiteSpace = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c3;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var Span = kotlin_org_jetbrains_compose_html_html_core.$_$.c6;
  var registerRefScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m2;
  var Text = kotlin_org_jetbrains_compose_html_html_core.$_$.f6;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var DisposableEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var CompositionLocalProvider = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var DisposableEffectResult = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var invokeLater = kotlin_com_varabyte_kobweb_browser_ext.$_$.b;
  var Annotation = kotlin_kotlin.$_$.de;
  var asList = kotlin_kotlin.$_$.xf;
  var Map = kotlin_kotlin.$_$.f5;
  var isInterface = kotlin_kotlin.$_$.za;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.v;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.u3;
  var trimIndent = kotlin_kotlin.$_$.xd;
  var MediaFeature = kotlin_org_jetbrains_compose_html_html_core.$_$.t2;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.nf;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var Companion_getInstance_3 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k3;
  var ensureNotNull = kotlin_kotlin.$_$.kf;
  var styleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e3;
  //endregion
  //region block: pre-declaration
  setMetadataFor(SilkStyleSheet, 'SilkStyleSheet', objectMeta, StyleSheet);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(Keyframes, 'Keyframes', classMeta);
  setMetadataFor(CacheByPropertyNameDelegate, 'CacheByPropertyNameDelegate', classMeta);
  setMetadataFor(KeyframesProvider, 'KeyframesProvider', classMeta, CacheByPropertyNameDelegate);
  setMetadataFor(KeyframesBuilder, 'KeyframesBuilder', classMeta);
  setMetadataFor(ComponentModifier, 'ComponentModifier', interfaceMeta);
  setMetadataFor(StyleModifiers, 'StyleModifiers', classMeta);
  setMetadataFor(ComponentModifiers, 'ComponentModifiers', classMeta, StyleModifiers, [ComponentModifier, StyleModifiers]);
  setMetadataFor(ComponentBaseModifier, 'ComponentBaseModifier', classMeta, VOID, [ComponentModifier]);
  setMetadataFor(ComponentStyleProvider, 'ComponentStyleProvider', classMeta, CacheByPropertyNameDelegate);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(ComponentStyle_0, 'ComponentStyle', classMeta);
  setMetadataFor(ImmutableComponentStyle, 'ImmutableComponentStyle', classMeta);
  setMetadataFor(StyleGroup, 'StyleGroup', interfaceMeta);
  setMetadataFor(Light, 'Light', classMeta, VOID, [StyleGroup]);
  setMetadataFor(Dark, 'Dark', classMeta, VOID, [StyleGroup]);
  setMetadataFor(ColorAgnostic, 'ColorAgnostic', classMeta, VOID, [StyleGroup]);
  setMetadataFor(ColorAware, 'ColorAware', classMeta, VOID, [StyleGroup]);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(ClassSelectors, 'ClassSelectors', classMeta);
  setMetadataFor(ComponentVariantProvider, 'ComponentVariantProvider', classMeta, CacheByPropertyNameDelegate);
  setMetadataFor(ComponentVariant, 'ComponentVariant', classMeta);
  setMetadataFor(SimpleComponentVariant, 'SimpleComponentVariant', classMeta, ComponentVariant);
  setMetadataFor(CompositeComponentVariant, 'CompositeComponentVariant', classMeta, ComponentVariant);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(CssRule, 'CssRule', classMeta);
  setMetadataFor(OfMedia, 'OfMedia', classMeta, CssRule);
  setMetadataFor(NonMediaCssRule, 'NonMediaCssRule', classMeta, CssRule);
  setMetadataFor(OfAttributeSelector, 'OfAttributeSelector', classMeta, NonMediaCssRule);
  setMetadataFor(OfPseudoClass, 'OfPseudoClass', classMeta, NonMediaCssRule);
  setMetadataFor(OfPseudoElement, 'OfPseudoElement', classMeta, NonMediaCssRule);
  setMetadataFor(CompositeOpen, 'CompositeOpen', classMeta, NonMediaCssRule);
  setMetadataFor(CompositeClosed, 'CompositeClosed', classMeta, NonMediaCssRule);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(Key, 'Key', classMeta);
  setMetadataFor(CssModifier, 'CssModifier', classMeta);
  setMetadataFor(Breakpoint, 'Breakpoint', classMeta, Enum);
  setMetadataFor(BreakpointValues, 'BreakpointValues', classMeta);
  setMetadataFor(BreakpointUnitValue, 'BreakpointUnitValue', classMeta);
  setMetadataFor(Px, 'Px', classMeta, BreakpointUnitValue);
  setMetadataFor(Em, 'Em', classMeta, BreakpointUnitValue);
  setMetadataFor(Rem, 'Rem', classMeta, BreakpointUnitValue);
  setMetadataFor(Entry, 'Entry', classMeta);
  setMetadataFor(DeferredComposablesState, 'DeferredComposablesState', classMeta, VOID, VOID, DeferredComposablesState);
  setMetadataFor(ComposableSingletons$DeferredKt, 'ComposableSingletons$DeferredKt', objectMeta);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, VOID, [DisposableEffectResult]);
  setMetadataFor(InitSilkContext, 'InitSilkContext', classMeta);
  setMetadataFor(InitSilk, 'InitSilk', classMeta, VOID, [Annotation]);
  setMetadataFor(SilkConfig, 'SilkConfig', interfaceMeta);
  setMetadataFor(MutableSilkConfig, 'MutableSilkConfig', classMeta, VOID, [SilkConfig], MutableSilkConfig);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  function registerStyle(cssSelector, extraModifiers, init) {
    this.registerStyle_3m3zng_k$(cssSelector, SilkStylesheet$registerStyle$lambda(extraModifiers), init);
  }
  function registerStyle$default(cssSelector, extraModifiers, init, $super) {
    extraModifiers = extraModifiers === VOID ? Companion_getInstance_0() : extraModifiers;
    var tmp;
    if ($super === VOID) {
      this.registerStyle_ug9rpu_k$(cssSelector, extraModifiers, init);
      tmp = Unit_getInstance();
    } else {
      registerStyle(cssSelector, extraModifiers, init);
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  setMetadataFor(SilkStylesheet, 'SilkStylesheet', interfaceMeta);
  setMetadataFor(SilkStylesheetInstance, 'SilkStylesheetInstance', objectMeta, VOID, [SilkStylesheet]);
  setMetadataFor(ImmutableSilkTheme, 'ImmutableSilkTheme', classMeta);
  setMetadataFor(MutableSilkTheme, 'MutableSilkTheme', classMeta, VOID, VOID, MutableSilkTheme);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(ColorMode, 'ColorMode', classMeta, Enum);
  setMetadataFor(ColorScheme, 'ColorScheme', interfaceMeta);
  setMetadataFor(Monochrome, 'Monochrome', objectMeta, VOID, [ColorScheme]);
  setMetadataFor(Red, 'Red', objectMeta, VOID, [ColorScheme]);
  setMetadataFor(Pink, 'Pink', objectMeta, VOID, [ColorScheme]);
  setMetadataFor(Purple, 'Purple', objectMeta, VOID, [ColorScheme]);
  setMetadataFor(DeepPurple, 'DeepPurple', objectMeta, VOID, [ColorScheme]);
  setMetadataFor(Indigo, 'Indigo', objectMeta, VOID, [ColorScheme]);
  setMetadataFor(Blue, 'Blue', objectMeta, VOID, [ColorScheme]);
  setMetadataFor(LightBlue, 'LightBlue', objectMeta, VOID, [ColorScheme]);
  setMetadataFor(Cyan, 'Cyan', objectMeta, VOID, [ColorScheme]);
  setMetadataFor(Teal, 'Teal', objectMeta, VOID, [ColorScheme]);
  setMetadataFor(Green, 'Green', objectMeta, VOID, [ColorScheme]);
  setMetadataFor(LightGreen, 'LightGreen', objectMeta, VOID, [ColorScheme]);
  setMetadataFor(Lime, 'Lime', objectMeta, VOID, [ColorScheme]);
  setMetadataFor(Yellow, 'Yellow', objectMeta, VOID, [ColorScheme]);
  setMetadataFor(Amber, 'Amber', objectMeta, VOID, [ColorScheme]);
  setMetadataFor(Orange, 'Orange', objectMeta, VOID, [ColorScheme]);
  setMetadataFor(DeepOrange, 'DeepOrange', objectMeta, VOID, [ColorScheme]);
  setMetadataFor(Brown, 'Brown', objectMeta, VOID, [ColorScheme]);
  setMetadataFor(Gray, 'Gray', objectMeta, VOID, [ColorScheme]);
  setMetadataFor(BlueGray, 'BlueGray', objectMeta, VOID, [ColorScheme]);
  setMetadataFor(ColorSchemes, 'ColorSchemes', objectMeta);
  setMetadataFor(EntryDelegate, 'EntryDelegate', classMeta);
  setMetadataFor(ColorGroup, 'ColorGroup', classMeta);
  function getValue_0(key) {
    return ensureNotNull(this.get_6bo4tg_k$(key));
  }
  setMetadataFor(Palette, 'Palette', interfaceMeta);
  setMetadataFor(MutablePalette, 'MutablePalette', classMeta, VOID, [Palette], MutablePalette);
  function get(colorMode) {
    var tmp;
    switch (colorMode.get_ordinal_ip24qg_k$()) {
      case 0:
        tmp = this.get_light_iuogdp_k$();
        break;
      case 1:
        tmp = this.get_dark_wokkvz_k$();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  setMetadataFor(Palettes, 'Palettes', interfaceMeta);
  setMetadataFor(MutablePalettes, 'MutablePalettes', classMeta, VOID, [Palettes], MutablePalettes);
  setMetadataFor(Shape, 'Shape', interfaceMeta);
  setMetadataFor(RectF, 'RectF', classMeta, VOID, [Shape], RectF_init_$Create$);
  setMetadataFor(Path, 'Path', classMeta);
  setMetadataFor(InsetPath, 'InsetPath', classMeta, Path);
  //endregion
  function prepareSilkFoundation(initSilk_0, content, $composer, $changed, $default) {
    var initSilk_1 = {_v: initSilk_0};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-776510055);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(initSilk_1._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        $composer_0.startReplaceableGroup_ip860b_k$(2035960038);
        // Inline function 'androidx.compose.runtime.cache' call
        var this_0 = $composer_0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = this_0.rememberedValue_4dg93v_k$();
        var tmp;
        if (false ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'com.varabyte.kobweb.silk.prepareSilkFoundation.<anonymous>' call
          var value = prepareSilkFoundation$lambda;
          this_0.updateRememberedValue_l1wh71_k$(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        initSilk_1._v = tmp0_group;
      }
      if (isTraceInProgress()) {
        traceEventStart(-776510055, $dirty, -1, 'com.varabyte.kobweb.silk.prepareSilkFoundation (PrepareSilkFoundation.kt:10)');
      }
      $composer_0.startMovableGroup_clfloq_k$(2035960081, Unit_getInstance());
      $composer_0.startReplaceableGroup_ip860b_k$(2035960185);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid ? true : it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'com.varabyte.kobweb.silk.prepareSilkFoundation.<anonymous>' call
        var value_0 = prepareSilkFoundation$lambda_0(initSilk_1);
        this_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      initSilk(tmp1_group);
      $composer_0.endMovableGroup_kd2hcs_k$();
      // Inline function 'org.jetbrains.compose.web.css.Style' call
      var styleSheet = KobwebComposeStyleSheet_getInstance();
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-1196466140);
      Style(null, styleSheet.get_cssRules_jdoznh_k$(), $composer_1, 0, 1);
      $composer_1.endReplaceableGroup_ern0ak_k$();
      // Inline function 'org.jetbrains.compose.web.css.Style' call
      var styleSheet_0 = SilkStyleSheet_getInstance();
      var $composer_2 = $composer_0;
      $composer_2.startReplaceableGroup_ip860b_k$(-1196466140);
      Style(null, styleSheet_0.get_cssRules_jdoznh_k$(), $composer_2, 0, 1);
      $composer_2.endReplaceableGroup_ern0ak_k$();
      content($composer_0, 14 & $dirty >> 3);
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
      tmp2_safe_receiver.updateScope_t8jcf_k$(prepareSilkFoundation$lambda_1(initSilk_1, content, $changed, $default));
    }
  }
  function prepareSilkFoundation$lambda(it) {
    return Unit_getInstance();
  }
  function prepareSilkFoundation$lambda_0($initSilk) {
    return function (ctx) {
      $initSilk._v(ctx);
      return Unit_getInstance();
    };
  }
  function prepareSilkFoundation$lambda_1($initSilk, $content, $$changed, $$default) {
    return function ($composer, $force) {
      prepareSilkFoundation($initSilk._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function SilkStyleSheet() {
    SilkStyleSheet_instance = this;
    StyleSheet_init_$Init$(VOID, VOID, this);
  }
  protoOf(SilkStyleSheet).style_r4zx12_k$ = function (selector, cssRule) {
    return this.style_pgxmpo_k$(selector, cssRule);
  };
  var SilkStyleSheet_instance;
  function SilkStyleSheet_getInstance() {
    if (SilkStyleSheet_instance == null)
      new SilkStyleSheet();
    return SilkStyleSheet_instance;
  }
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).isColorModeAgnostic_ijx3jt_k$ = function (build) {
    // Inline function 'kotlin.collections.count' call
    // Inline function 'kotlin.collections.map' call
    var this_0 = listOf([ColorMode_LIGHT_getInstance(), ColorMode_DARK_getInstance()]);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.components.animation.Companion.isColorModeAgnostic.<anonymous>' call
      // Inline function 'kotlin.apply' call
      var this_1 = new KeyframesBuilder(item);
      // Inline function 'kotlin.contracts.contract' call
      build(this_1);
      destination.add_utx5q5_k$(this_1);
    }
    return distinct(destination).get_size_woubt6_k$() === 1;
  };
  var Companion_instance;
  function Companion_getInstance_4() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Keyframes$usesColorMode$delegate$lambda(this$0) {
    return function () {
      return !Companion_getInstance_4().isColorModeAgnostic_ijx3jt_k$(this$0.init_1);
    };
  }
  function Keyframes(name, prefix, init) {
    Companion_getInstance_4();
    prefix = prefix === VOID ? null : prefix;
    this.init_1 = init;
    var tmp = this;
    var tmp_0;
    if (prefix == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.animation.Keyframes.name.<anonymous>' call
      tmp_0 = prefix + '-' + name;
    }
    var tmp1_elvis_lhs = tmp_0;
    tmp.name_1 = tmp1_elvis_lhs == null ? name : tmp1_elvis_lhs;
    var tmp_1 = this;
    tmp_1.usesColorMode$delegate_1 = lazy(Keyframes$usesColorMode$delegate$lambda(this));
  }
  protoOf(Keyframes).get_init_woo195_k$ = function () {
    return this.init_1;
  };
  protoOf(Keyframes).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(Keyframes).get_usesColorMode_a99qlr_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.usesColorMode$delegate_1;
    usesColorMode$factory();
    return this_0.get_value_j01efc_k$();
  };
  function _get_prefix__wiwq7t($this) {
    return $this.prefix_1;
  }
  function _get_init__d89e0r($this) {
    return $this.init_1;
  }
  function KeyframesProvider(prefix, init) {
    CacheByPropertyNameDelegate.call(this);
    this.prefix_1 = prefix;
    this.init_1 = init;
  }
  protoOf(KeyframesProvider).create_oysagu_k$ = function (propertyName) {
    var name = titleCamelCaseToKebabCase(removeSuffix(removeSuffix(removeSuffix(propertyName, 'Anim'), 'Animation'), 'Keyframes'));
    return new Keyframes(name, this.prefix_1, this.init_1);
  };
  function _get_keyframeStyles__di4hej($this) {
    return $this.keyframeStyles_1;
  }
  function _get_comparableKeyframeStyles__erog4h($this) {
    // Inline function 'kotlin.collections.mapValues' call
    var this_0 = $this.keyframeStyles_1;
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination = LinkedHashMap_init_$Create$(mapCapacity(this_0.get_size_woubt6_k$()));
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_iterator = this_0.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      var tmp = element.get_key_18j28a_k$();
      // Inline function 'com.varabyte.kobweb.silk.components.animation.KeyframesBuilder.<get-comparableKeyframeStyles>.<anonymous>' call
      // Inline function 'kotlin.collections.component2' call
      var modifier = element.get_value_j01efc_k$();
      // Inline function 'kotlin.apply' call
      var this_1 = new ComparableStyleScope();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.animation.KeyframesBuilder.<get-comparableKeyframeStyles>.<anonymous>.<anonymous>' call
      toStyles(modifier)(this_1);
      destination.put_4fpzoq_k$(tmp, this_1);
    }
    return destination;
  }
  function KeyframesBuilder(colorMode) {
    this.colorMode_1 = colorMode;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.keyframeStyles_1 = LinkedHashMap_init_$Create$_0();
  }
  protoOf(KeyframesBuilder).get_colorMode_trbg8z_k$ = function () {
    return this.colorMode_1;
  };
  protoOf(KeyframesBuilder).from_1urvt_k$ = function (createStyle) {
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = this.keyframeStyles_1;
    var pair = to(From_getInstance(), createStyle());
    this_0.put_4fpzoq_k$(pair.get_first_irdx8n_k$(), pair.get_second_jf7fjx_k$());
  };
  protoOf(KeyframesBuilder).to_txs6jq_k$ = function (createStyle) {
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = this.keyframeStyles_1;
    var pair = to(To_getInstance(), createStyle());
    this_0.put_4fpzoq_k$(pair.get_first_irdx8n_k$(), pair.get_second_jf7fjx_k$());
  };
  protoOf(KeyframesBuilder).invoke_u48aa2_k$ = function (_this__u8e3s4, createStyle) {
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = this.keyframeStyles_1;
    var pair = to(new Percentage(_this__u8e3s4), createStyle());
    this_0.put_4fpzoq_k$(pair.get_first_irdx8n_k$(), pair.get_second_jf7fjx_k$());
  };
  protoOf(KeyframesBuilder).each_dzjs38_k$ = function (keys, createStyle) {
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = this.keyframeStyles_1;
    var pair = to(new Combine(toList(keys)), createStyle());
    this_0.put_4fpzoq_k$(pair.get_first_irdx8n_k$(), pair.get_second_jf7fjx_k$());
  };
  protoOf(KeyframesBuilder).equals = function (other) {
    if (!(other instanceof KeyframesBuilder))
      return false;
    return this === other ? true : equals(_get_comparableKeyframeStyles__erog4h(this), _get_comparableKeyframeStyles__erog4h(other));
  };
  protoOf(KeyframesBuilder).hashCode = function () {
    return hashCode(_get_comparableKeyframeStyles__erog4h(this));
  };
  protoOf(KeyframesBuilder).addKeyframesIntoStylesheet_3orify_k$ = function (stylesheet, keyframesName) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.keyframeStyles_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(this_0.get_size_woubt6_k$());
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this_0.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.components.animation.KeyframesBuilder.addKeyframesIntoStylesheet.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var keyframe = item.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var modifier = item.get_value_j01efc_k$();
      var styles = toStyles(modifier);
      var cssRuleBuilder = new StyleScopeBuilder();
      styles(cssRuleBuilder);
      var tmp$ret$3 = new CSSKeyframeRuleDeclaration(keyframe, cssRuleBuilder);
      destination.add_utx5q5_k$(tmp$ret$3);
    }
    var keyframeRules = destination;
    stylesheet.add_19esmm_k$(new CSSKeyframesRuleDeclaration(keyframesName, keyframeRules));
  };
  function Keyframes_0(prefix, init) {
    prefix = prefix === VOID ? null : prefix;
    return new KeyframesProvider(prefix, init);
  }
  function registerKeyframes(_this__u8e3s4, keyframes) {
    return _this__u8e3s4.registerKeyframes_n0b7tv_k$(keyframes.name_1, keyframes.init_1);
  }
  function toAnimation(_this__u8e3s4, duration, timingFunction, delay, iterationCount, direction, fillMode, playState, $composer, $changed, $default) {
    var duration_0 = duration;
    var timingFunction_0 = timingFunction;
    var delay_0 = delay;
    var iterationCount_0 = iterationCount;
    var direction_0 = direction;
    var fillMode_0 = fillMode;
    var playState_0 = playState;
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-792208502);
    if (!(($default & 1) === 0))
      duration_0 = null;
    if (!(($default & 2) === 0))
      timingFunction_0 = null;
    if (!(($default & 4) === 0))
      delay_0 = null;
    if (!(($default & 8) === 0))
      iterationCount_0 = null;
    if (!(($default & 16) === 0))
      direction_0 = null;
    if (!(($default & 32) === 0))
      fillMode_0 = null;
    if (!(($default & 64) === 0))
      playState_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(-792208502, $changed, -1, 'com.varabyte.kobweb.silk.components.animation.toAnimation (Keyframes.kt:208)');
    }
    var colorMode = _this__u8e3s4.get_usesColorMode_a99qlr_k$() ? Companion_getInstance_10().get_current_2iudd5_k$($composer_0, 6) : null;
    var tmp0 = toAnimation_0(_this__u8e3s4, colorMode, duration_0, timingFunction_0, delay_0, iterationCount_0, direction_0, fillMode_0, playState_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  }
  var com_varabyte_kobweb_silk_components_animation_Keyframes$stable;
  function toAnimation_0(_this__u8e3s4, colorMode, duration, timingFunction, delay, iterationCount, direction, fillMode, playState) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    iterationCount = iterationCount === VOID ? null : iterationCount;
    direction = direction === VOID ? null : direction;
    fillMode = fillMode === VOID ? null : fillMode;
    playState = playState === VOID ? null : playState;
    var tmp;
    if (_this__u8e3s4.get_usesColorMode_a99qlr_k$()) {
      var tmp_0;
      if (colorMode == null) {
        var message = 'Animation ' + _this__u8e3s4.name_1 + " depends on the site's color mode but no color mode was specified.";
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp_0 = colorMode;
      }
      tmp = tmp_0;
    } else {
      tmp = null;
    }
    var colorMode_0 = tmp;
    var tmp_1;
    if (!(colorMode_0 == null)) {
      tmp_1 = suffixedWith(_this__u8e3s4.name_1, colorMode_0);
    } else {
      tmp_1 = _this__u8e3s4.name_1;
    }
    var finalName = tmp_1;
    return new CSSAnimation(finalName, duration, timingFunction, delay, iterationCount, direction, fillMode, playState);
  }
  function usesColorMode$factory() {
    return getPropertyCallableRef('usesColorMode', 1, KProperty1, function (receiver) {
      return receiver.get_usesColorMode_a99qlr_k$();
    }, null);
  }
  function get_DisplayIfAtLeastZeroStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastZeroStyle$delegate.getValue_fbnwi2_k$(null, DisplayIfAtLeastZeroStyle$factory());
  }
  var DisplayIfAtLeastZeroStyle$delegate;
  function get_DisplayIfAtLeastSmStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastSmStyle$delegate.getValue_fbnwi2_k$(null, DisplayIfAtLeastSmStyle$factory());
  }
  var DisplayIfAtLeastSmStyle$delegate;
  function get_DisplayIfAtLeastMdStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastMdStyle$delegate.getValue_fbnwi2_k$(null, DisplayIfAtLeastMdStyle$factory());
  }
  var DisplayIfAtLeastMdStyle$delegate;
  function get_DisplayIfAtLeastLgStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastLgStyle$delegate.getValue_fbnwi2_k$(null, DisplayIfAtLeastLgStyle$factory());
  }
  var DisplayIfAtLeastLgStyle$delegate;
  function get_DisplayIfAtLeastXlStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastXlStyle$delegate.getValue_fbnwi2_k$(null, DisplayIfAtLeastXlStyle$factory());
  }
  var DisplayIfAtLeastXlStyle$delegate;
  function get_DisplayUntilZeroStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilZeroStyle$delegate.getValue_fbnwi2_k$(null, DisplayUntilZeroStyle$factory());
  }
  var DisplayUntilZeroStyle$delegate;
  function get_DisplayUntilSmStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilSmStyle$delegate.getValue_fbnwi2_k$(null, DisplayUntilSmStyle$factory());
  }
  var DisplayUntilSmStyle$delegate;
  function get_DisplayUntilMdStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilMdStyle$delegate.getValue_fbnwi2_k$(null, DisplayUntilMdStyle$factory());
  }
  var DisplayUntilMdStyle$delegate;
  function get_DisplayUntilLgStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilLgStyle$delegate.getValue_fbnwi2_k$(null, DisplayUntilLgStyle$factory());
  }
  var DisplayUntilLgStyle$delegate;
  function get_DisplayUntilXlStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilXlStyle$delegate.getValue_fbnwi2_k$(null, DisplayUntilXlStyle$factory());
  }
  var DisplayUntilXlStyle$delegate;
  function invert(_this__u8e3s4) {
    _init_properties_BreakpointConditions_kt__53om95();
    return new Raw('not all and ' + _this__u8e3s4);
  }
  function displayIfAtLeast(_this__u8e3s4, breakpoint) {
    _init_properties_BreakpointConditions_kt__53om95();
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = breakpoint.get_name_woqyms_k$().toLowerCase();
    return classNames(_this__u8e3s4, ['silk-display-if-at-least-' + tmp$ret$1]);
  }
  function displayUntil(_this__u8e3s4, breakpoint) {
    _init_properties_BreakpointConditions_kt__53om95();
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = breakpoint.get_name_woqyms_k$().toLowerCase();
    return classNames(_this__u8e3s4, ['silk-display-until-' + tmp$ret$1]);
  }
  function DisplayIfAtLeastZeroStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_ZERO_getInstance()));
    $this$ComponentStyle.cssRule_7fzdgd_k$(tmp, DisplayIfAtLeastZeroStyle$delegate$lambda$lambda);
    return Unit_getInstance();
  }
  function DisplayIfAtLeastZeroStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    Companion_getInstance_1();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayIfAtLeastSmStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_SM_getInstance()));
    $this$ComponentStyle.cssRule_7fzdgd_k$(tmp, DisplayIfAtLeastSmStyle$delegate$lambda$lambda);
    return Unit_getInstance();
  }
  function DisplayIfAtLeastSmStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    Companion_getInstance_1();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayIfAtLeastMdStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_MD_getInstance()));
    $this$ComponentStyle.cssRule_7fzdgd_k$(tmp, DisplayIfAtLeastMdStyle$delegate$lambda$lambda);
    return Unit_getInstance();
  }
  function DisplayIfAtLeastMdStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    Companion_getInstance_1();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayIfAtLeastLgStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_LG_getInstance()));
    $this$ComponentStyle.cssRule_7fzdgd_k$(tmp, DisplayIfAtLeastLgStyle$delegate$lambda$lambda);
    return Unit_getInstance();
  }
  function DisplayIfAtLeastLgStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    Companion_getInstance_1();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayIfAtLeastXlStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_XL_getInstance()));
    $this$ComponentStyle.cssRule_7fzdgd_k$(tmp, DisplayIfAtLeastXlStyle$delegate$lambda$lambda);
    return Unit_getInstance();
  }
  function DisplayIfAtLeastXlStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    Companion_getInstance_1();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayUntilZeroStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_ZERO_getInstance();
    $this$ComponentStyle.invoke_hmyoxj_k$(tmp, DisplayUntilZeroStyle$delegate$lambda$lambda);
    return Unit_getInstance();
  }
  function DisplayUntilZeroStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    Companion_getInstance_1();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayUntilSmStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_SM_getInstance();
    $this$ComponentStyle.invoke_hmyoxj_k$(tmp, DisplayUntilSmStyle$delegate$lambda$lambda);
    return Unit_getInstance();
  }
  function DisplayUntilSmStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    Companion_getInstance_1();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayUntilMdStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_MD_getInstance();
    $this$ComponentStyle.invoke_hmyoxj_k$(tmp, DisplayUntilMdStyle$delegate$lambda$lambda);
    return Unit_getInstance();
  }
  function DisplayUntilMdStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    Companion_getInstance_1();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayUntilLgStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_LG_getInstance();
    $this$ComponentStyle.invoke_hmyoxj_k$(tmp, DisplayUntilLgStyle$delegate$lambda$lambda);
    return Unit_getInstance();
  }
  function DisplayUntilLgStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    Companion_getInstance_1();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayUntilXlStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_XL_getInstance();
    $this$ComponentStyle.invoke_hmyoxj_k$(tmp, DisplayUntilXlStyle$delegate$lambda$lambda);
    return Unit_getInstance();
  }
  function DisplayUntilXlStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    Companion_getInstance_1();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayIfAtLeastZeroStyle$factory() {
    return getPropertyCallableRef('DisplayIfAtLeastZeroStyle', 0, KProperty0, function () {
      return get_DisplayIfAtLeastZeroStyle();
    }, null);
  }
  function DisplayIfAtLeastSmStyle$factory() {
    return getPropertyCallableRef('DisplayIfAtLeastSmStyle', 0, KProperty0, function () {
      return get_DisplayIfAtLeastSmStyle();
    }, null);
  }
  function DisplayIfAtLeastMdStyle$factory() {
    return getPropertyCallableRef('DisplayIfAtLeastMdStyle', 0, KProperty0, function () {
      return get_DisplayIfAtLeastMdStyle();
    }, null);
  }
  function DisplayIfAtLeastLgStyle$factory() {
    return getPropertyCallableRef('DisplayIfAtLeastLgStyle', 0, KProperty0, function () {
      return get_DisplayIfAtLeastLgStyle();
    }, null);
  }
  function DisplayIfAtLeastXlStyle$factory() {
    return getPropertyCallableRef('DisplayIfAtLeastXlStyle', 0, KProperty0, function () {
      return get_DisplayIfAtLeastXlStyle();
    }, null);
  }
  function DisplayUntilZeroStyle$factory() {
    return getPropertyCallableRef('DisplayUntilZeroStyle', 0, KProperty0, function () {
      return get_DisplayUntilZeroStyle();
    }, null);
  }
  function DisplayUntilSmStyle$factory() {
    return getPropertyCallableRef('DisplayUntilSmStyle', 0, KProperty0, function () {
      return get_DisplayUntilSmStyle();
    }, null);
  }
  function DisplayUntilMdStyle$factory() {
    return getPropertyCallableRef('DisplayUntilMdStyle', 0, KProperty0, function () {
      return get_DisplayUntilMdStyle();
    }, null);
  }
  function DisplayUntilLgStyle$factory() {
    return getPropertyCallableRef('DisplayUntilLgStyle', 0, KProperty0, function () {
      return get_DisplayUntilLgStyle();
    }, null);
  }
  function DisplayUntilXlStyle$factory() {
    return getPropertyCallableRef('DisplayUntilXlStyle', 0, KProperty0, function () {
      return get_DisplayUntilXlStyle();
    }, null);
  }
  var properties_initialized_BreakpointConditions_kt_kx7tgr;
  function _init_properties_BreakpointConditions_kt__53om95() {
    if (!properties_initialized_BreakpointConditions_kt_kx7tgr) {
      properties_initialized_BreakpointConditions_kt_kx7tgr = true;
      DisplayIfAtLeastZeroStyle$delegate = ComponentStyle(VOID, 'silk', DisplayIfAtLeastZeroStyle$delegate$lambda);
      DisplayIfAtLeastSmStyle$delegate = ComponentStyle(VOID, 'silk', DisplayIfAtLeastSmStyle$delegate$lambda);
      DisplayIfAtLeastMdStyle$delegate = ComponentStyle(VOID, 'silk', DisplayIfAtLeastMdStyle$delegate$lambda);
      DisplayIfAtLeastLgStyle$delegate = ComponentStyle(VOID, 'silk', DisplayIfAtLeastLgStyle$delegate$lambda);
      DisplayIfAtLeastXlStyle$delegate = ComponentStyle(VOID, 'silk', DisplayIfAtLeastXlStyle$delegate$lambda);
      DisplayUntilZeroStyle$delegate = ComponentStyle(VOID, 'silk', DisplayUntilZeroStyle$delegate$lambda);
      DisplayUntilSmStyle$delegate = ComponentStyle(VOID, 'silk', DisplayUntilSmStyle$delegate$lambda);
      DisplayUntilMdStyle$delegate = ComponentStyle(VOID, 'silk', DisplayUntilMdStyle$delegate$lambda);
      DisplayUntilLgStyle$delegate = ComponentStyle(VOID, 'silk', DisplayUntilLgStyle$delegate$lambda);
      DisplayUntilXlStyle$delegate = ComponentStyle(VOID, 'silk', DisplayUntilXlStyle$delegate$lambda);
    }
  }
  function base(_this__u8e3s4, extraModifiers, prefix, init) {
    extraModifiers = extraModifiers === VOID ? Companion_getInstance_0() : extraModifiers;
    prefix = prefix === VOID ? null : prefix;
    return base_0(_this__u8e3s4, base$lambda(extraModifiers), prefix, init);
  }
  function ComponentStyle(extraModifiers, prefix, init) {
    extraModifiers = extraModifiers === VOID ? Companion_getInstance_0() : extraModifiers;
    prefix = prefix === VOID ? null : prefix;
    return ComponentStyle_1(ComponentStyle$lambda(extraModifiers), prefix, init);
  }
  function toModifier(_this__u8e3s4, variants, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-974293209);
    if (isTraceInProgress()) {
      traceEventStart(-974293209, $changed, -1, 'com.varabyte.kobweb.silk.components.style.toModifier (ComponentStyle.kt:456)');
    }
    var tmp = getValue(get_SilkTheme().get_componentStyles_qanhau_k$(), _this__u8e3s4.name_1).toModifier_7iov47_k$($composer_0, 8);
    var tmp0_safe_receiver = combine(toList(variants), $composer_0, 8);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toModifier_7iov47_k$($composer_0, 0);
    var tmp0 = tmp.then_mmfvo6_k$(tmp1_elvis_lhs == null ? Companion_getInstance_0() : tmp1_elvis_lhs);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  }
  function ComponentModifiers(colorMode) {
    StyleModifiers.call(this);
    this.colorMode_1 = colorMode;
  }
  protoOf(ComponentModifiers).get_colorMode_trbg8z_k$ = function () {
    return this.colorMode_1;
  };
  function ComponentBaseModifier(colorMode) {
    this.colorMode_1 = colorMode;
  }
  protoOf(ComponentBaseModifier).get_colorMode_trbg8z_k$ = function () {
    return this.colorMode_1;
  };
  function _get_extraModifiers__fohold($this) {
    return $this.extraModifiers_1;
  }
  function _get_prefix__wiwq7t_0($this) {
    return $this.prefix_1;
  }
  function _get_init__d89e0r_0($this) {
    return $this.init_1;
  }
  function ComponentStyleProvider(extraModifiers, prefix, init) {
    prefix = prefix === VOID ? null : prefix;
    CacheByPropertyNameDelegate.call(this);
    this.extraModifiers_1 = extraModifiers;
    this.prefix_1 = prefix;
    this.init_1 = init;
  }
  protoOf(ComponentStyleProvider).create_oysagu_k$ = function (propertyName) {
    var name = titleCamelCaseToKebabCase(removeSuffix(propertyName, 'Style'));
    return new ComponentStyle_0(name, this.extraModifiers_1, this.prefix_1, this.init_1);
  };
  var com_varabyte_kobweb_silk_components_style_ComponentStyle$stable;
  function ComponentStyle_init_$Init$(name, extraModifiers, prefix, init, $this) {
    extraModifiers = extraModifiers === VOID ? Companion_getInstance_0() : extraModifiers;
    prefix = prefix === VOID ? null : prefix;
    ComponentStyle_0.call($this, name, ComponentStyle$_init_$lambda_6xe5ih(extraModifiers), prefix, init);
    return $this;
  }
  function ComponentStyle_init_$Create$(name, extraModifiers, prefix, init) {
    return ComponentStyle_init_$Init$(name, extraModifiers, prefix, init, objectCreate(protoOf(ComponentStyle_0)));
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  var Companion_instance_0;
  function Companion_getInstance_5() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function addStyles(_this__u8e3s4, $this, cssRule, styles) {
    _this__u8e3s4.style_qsvaqb_k$(cssRule, ComponentStyle$addStyles$lambda(styles));
  }
  function withFinalSelectorName($this, selectorBaseName, group, handler) {
    if (group instanceof Light)
      handler(suffixedWith(selectorBaseName, ColorMode_LIGHT_getInstance()), group.styles_1);
    else {
      if (group instanceof Dark)
        handler(suffixedWith(selectorBaseName, ColorMode_DARK_getInstance()), group.styles_1);
      else {
        if (group instanceof ColorAgnostic)
          handler(selectorBaseName, group.styles_1);
        else {
          if (group instanceof ColorAware) {
            handler(suffixedWith(selectorBaseName, ColorMode_LIGHT_getInstance()), group.lightStyles_1);
            handler(suffixedWith(selectorBaseName, ColorMode_DARK_getInstance()), group.darkStyles_1);
          }
        }
      }
    }
  }
  function mergeCssModifiers(_this__u8e3s4, $this, init) {
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.groupBy' call
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    init(_this__u8e3s4);
    // Inline function 'kotlin.collections.groupByTo' call
    var this_0 = _this__u8e3s4.get_cssModifiers_m7qozi_k$();
    var destination = LinkedHashMap_init_$Create$_0();
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.mergeCssModifiers.<anonymous>' call
      var key = element.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.getOrPut' call
      var value = destination.get_wei43m_k$(key);
      var tmp;
      if (value == null) {
        // Inline function 'kotlin.collections.groupByTo.<anonymous>' call
        var answer = ArrayList_init_$Create$_0();
        destination.put_4fpzoq_k$(key, answer);
        tmp = answer;
      } else {
        tmp = value;
      }
      var list = tmp;
      list.add_utx5q5_k$(element);
    }
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination_0 = LinkedHashMap_init_$Create$(mapCapacity(destination.get_size_woubt6_k$()));
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_iterator_0 = destination.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      var tmp_0 = element_0.get_key_18j28a_k$();
      // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.mergeCssModifiers.<anonymous>' call
      // Inline function 'kotlin.collections.component2' call
      var group = element_0.get_value_j01efc_k$();
      // Inline function 'kotlin.collections.reduce' call
      var iterator = group.iterator_jk1svi_k$();
      if (!iterator.hasNext_bitz1p_k$())
        throw UnsupportedOperationException_init_$Create$("Empty collection can't be reduced.");
      var accumulator = iterator.next_20eer_k$();
      while (iterator.hasNext_bitz1p_k$()) {
        // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.mergeCssModifiers.<anonymous>.<anonymous>' call
        var acc = accumulator;
        var curr = iterator.next_20eer_k$();
        accumulator = acc.mergeWith_2pm19d_k$(curr);
      }
      var tmp$ret$10 = accumulator;
      destination_0.put_4fpzoq_k$(tmp_0, tmp$ret$10);
    }
    return destination_0;
  }
  function assertNoAttributeModifiers(_this__u8e3s4, $this, selectorName) {
    // Inline function 'kotlin.collections.onEach' call
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.onEach.<anonymous>' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = _this__u8e3s4.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      $l$block: {
        // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.assertNoAttributeModifiers.<anonymous>' call
        // Inline function 'kotlin.collections.component2' call
        var cssModifier = element.get_value_j01efc_k$();
        var attrsScope = ComparableAttrsScope_init_$Create$();
        toAttrs(cssModifier.get_modifier_t1pq5c_k$())(attrsScope);
        if (attrsScope.get_attributes_dgqof4_k$().isEmpty_y1axqb_k$()) {
          break $l$block;
        }
        // Inline function 'kotlin.error' call
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_0 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.assertNoAttributeModifiers.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.text.appendLine' call
        var value = "ComponentStyle declarations cannot contain Modifiers that specify attributes. Please move Modifiers associated with attributes to the ComponentStyle's `extraModifiers` parameter.";
        // Inline function 'kotlin.text.appendLine' call
        this_0.append_22ad7x_k$(value).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
        // Inline function 'kotlin.text.appendLine' call
        this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(10));
        // Inline function 'kotlin.text.appendLine' call
        var value_0 = 'Details:';
        // Inline function 'kotlin.text.appendLine' call
        this_0.append_22ad7x_k$(value_0).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
        this_0.append_22ad7x_k$('\tCSS rule: ');
        this_0.append_22ad7x_k$('"' + selectorName);
        if (!(cssModifier.get_mediaQuery_bp0atp_k$() == null)) {
          this_0.append_t8pm91_k$(cssModifier.get_mediaQuery_bp0atp_k$());
        }
        if (!(cssModifier.get_suffix_jo1v8a_k$() == null)) {
          this_0.append_22ad7x_k$(cssModifier.get_suffix_jo1v8a_k$());
        }
        this_0.append_22ad7x_k$('"');
        this_0.append_22ad7x_k$(' (do you declare a property called ');
        // Inline function 'kotlin.text.count' call
        var count = 0;
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(selectorName)) {
          var element_0 = charSequenceGet(selectorName, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.assertNoAttributeModifiers.<anonymous>.<anonymous>.<anonymous>' call
          if (element_0 === _Char___init__impl__6a9atx(46)) {
            count = count + 1 | 0;
          }
        }
        var isStyle = count === 1;
        var styleName = substringBefore(substringAfter(selectorName, '.'), '.');
        if (isStyle) {
          this_0.append_22ad7x_k$('`' + kebabCaseToTitleCamelCase(styleName) + 'Style`');
        } else {
          var variantPart = removePrefix(substringAfterLast(selectorName, '.'), styleName + '-');
          this_0.append_22ad7x_k$('`' + kebabCaseToTitleCamelCase(styleName + '-' + variantPart) + 'Variant`');
          this_0.append_22ad7x_k$(' or ');
          this_0.append_22ad7x_k$('`' + kebabCaseToTitleCamelCase(variantPart + '-' + styleName) + 'Variant`');
        }
        // Inline function 'kotlin.text.appendLine' call
        // Inline function 'kotlin.text.appendLine' call
        this_0.append_22ad7x_k$('?)').append_am5a4z_k$(_Char___init__impl__6a9atx(10));
        // Inline function 'kotlin.text.appendLine' call
        var tmp = attrsScope.get_attributes_dgqof4_k$().get_keys_wop4xp_k$();
        var value_1 = '\tAttribute(s): ' + joinToString(tmp, ', ', VOID, VOID, VOID, VOID, ComponentStyle$assertNoAttributeModifiers$lambda);
        // Inline function 'kotlin.text.appendLine' call
        this_0.append_22ad7x_k$(value_1).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
        // Inline function 'kotlin.text.appendLine' call
        this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(10));
        // Inline function 'kotlin.text.appendLine' call
        var value_2 = 'An example of how to fix this:';
        // Inline function 'kotlin.text.appendLine' call
        this_0.append_22ad7x_k$(value_2).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
        // Inline function 'kotlin.text.appendLine' call
        var value_3 = '   // Before\n   val ExampleStyle by ComponentStyle {\n       base {\n          Modifier\n              .backgroundColor(Colors.Magenta))\n              .tabIndex(0) // <-- The offending attribute modifier\n       }\n   }\n   \n   // After\n   val ExampleStyle by ComponentStyle(extraModifiers = Modifier.tabIndex(0)) {\n       base {\n           Modifier.backgroundColor(Colors.Magenta)\n       }\n   }';
        // Inline function 'kotlin.text.appendLine' call
        this_0.append_22ad7x_k$(value_3).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
        var message = this_0.toString();
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
    return _this__u8e3s4;
  }
  function ComponentStyle$_init_$lambda_6xe5ih($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_ip860b_k$(-1698572553);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-1698572553, $changed, -1, 'com.varabyte.kobweb.silk.components.style.ComponentStyle.<init>.<anonymous> (ComponentStyle.kt:70)');
        tmp = Unit_getInstance();
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_getInstance();
      }
      $composer_0.endReplaceableGroup_ern0ak_k$();
      return tmp0;
    };
  }
  function ComponentStyle$addVariant$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_ip860b_k$(-2083936979);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-2083936979, $changed, -1, 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addVariant.<anonymous> (ComponentStyle.kt:85)');
        tmp = Unit_getInstance();
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_getInstance();
      }
      $composer_0.endReplaceableGroup_ern0ak_k$();
      return tmp0;
    };
  }
  function ComponentStyle$addStyles$lambda($styles) {
    return function ($this$null) {
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator = $styles.get_properties_zhllqc_k$().get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addStyles.<anonymous>.<anonymous>' call
        $this$null.property_wcrait_k$(element.get_key_18j28a_k$(), element.get_value_j01efc_k$());
      }
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator_0 = $styles.get_variables_75f0zy_k$().get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element_0 = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addStyles.<anonymous>.<anonymous>' call
        $this$null.variable_kvosx8_k$(element_0.get_key_18j28a_k$(), element_0.get_value_j01efc_k$());
      }
      return Unit_getInstance();
    };
  }
  function ComponentStyle$assertNoAttributeModifiers$lambda(it) {
    return '"' + it + '"';
  }
  function ComponentStyle$addStylesInto$lambda($classNames, this$0, $styleSheet) {
    return function (name, styles) {
      var tmp;
      if (isNotEmpty(styles)) {
        $classNames.add_utx5q5_k$(name);
        addStyles($styleSheet, this$0, name, styles);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComponentStyle$addStylesInto$lambda$lambda(this$0, $cssRule, $styles) {
    return function ($this$media) {
      addStyles($this$media, this$0, $cssRule, $styles);
      return Unit_getInstance();
    };
  }
  function ComponentStyle$addStylesInto$lambda_0($classNames, $cssRuleKey, $styleSheet, this$0) {
    return function (name, styles) {
      var tmp;
      if (isNotEmpty(styles)) {
        $classNames.add_utx5q5_k$(name);
        // Inline function 'kotlin.text.orEmpty' call
        var tmp0_elvis_lhs = $cssRuleKey.get_suffix_jo1v8a_k$();
        var cssRule = name + (tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs);
        var tmp_0;
        if (!($cssRuleKey.get_mediaQuery_bp0atp_k$() == null)) {
          // Inline function 'kotlin.apply' call
          var this_0 = $styleSheet;
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addStylesInto.<anonymous>.<anonymous>' call
          var tmp_1 = $cssRuleKey.get_mediaQuery_bp0atp_k$();
          media(this_0, tmp_1, ComponentStyle$addStylesInto$lambda$lambda(this$0, cssRule, styles));
          tmp_0 = Unit_getInstance();
        } else {
          addStyles($styleSheet, this$0, cssRule, styles);
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      }
      return Unit_getInstance();
    };
  }
  function ComponentStyle_0(name, extraModifiers, prefix, init) {
    Companion_getInstance_5();
    prefix = prefix === VOID ? null : prefix;
    this.extraModifiers_1 = extraModifiers;
    this.prefix_1 = prefix;
    this.init_1 = init;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(charSequenceLength(name) > 0)) {
      // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.<anonymous>' call
      var message = 'ComponentStyle name must not be empty';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.nameWithoutPrefix_1 = name;
    var tmp = this;
    var tmp0_safe_receiver = this.prefix_1;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.name.<anonymous>' call
      tmp_0 = tmp0_safe_receiver + '-' + name;
    }
    var tmp1_elvis_lhs = tmp_0;
    tmp.name_1 = tmp1_elvis_lhs == null ? name : tmp1_elvis_lhs;
  }
  protoOf(ComponentStyle_0).get_extraModifiers_h2rw6j_k$ = function () {
    return this.extraModifiers_1;
  };
  protoOf(ComponentStyle_0).get_prefix_i78za3_k$ = function () {
    return this.prefix_1;
  };
  protoOf(ComponentStyle_0).get_init_woo195_k$ = function () {
    return this.init_1;
  };
  protoOf(ComponentStyle_0).get_nameWithoutPrefix_lto6iu_k$ = function () {
    return this.nameWithoutPrefix_1;
  };
  protoOf(ComponentStyle_0).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(ComponentStyle_0).addVariant_jzm308_k$ = function (name, extraModifiers, init) {
    return this.addVariant_meui_k$(name, ComponentStyle$addVariant$lambda(extraModifiers), init);
  };
  protoOf(ComponentStyle_0).addVariant$default_dlxnlm_k$ = function (name, extraModifiers, init, $super) {
    extraModifiers = extraModifiers === VOID ? Companion_getInstance_0() : extraModifiers;
    return $super === VOID ? this.addVariant_jzm308_k$(name, extraModifiers, init) : $super.addVariant_jzm308_k$.call(this, name, extraModifiers, init);
  };
  protoOf(ComponentStyle_0).addVariant_meui_k$ = function (name, extraModifiers, init) {
    return new SimpleComponentVariant(new ComponentStyle_0(this.name_1 + '-' + name, extraModifiers, null, init), this);
  };
  protoOf(ComponentStyle_0).addStylesInto_7ve9v0_k$ = function (styleSheet, selectorName) {
    var classNames = mutableListOf([selectorName]);
    var lightModifiers = assertNoAttributeModifiers(mergeCssModifiers(new ComponentModifiers(ColorMode_LIGHT_getInstance()), this, this.init_1), this, selectorName);
    var darkModifiers = assertNoAttributeModifiers(mergeCssModifiers(new ComponentModifiers(ColorMode_DARK_getInstance()), this, this.init_1), this, selectorName);
    var tmp = Companion_getInstance_6();
    var tmp0_safe_receiver = lightModifiers.get_wei43m_k$(Companion_getInstance_8().get_BaseKey_nalpdx_k$());
    var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_modifier_t1pq5c_k$();
    var tmp1_safe_receiver = darkModifiers.get_wei43m_k$(Companion_getInstance_8().get_BaseKey_nalpdx_k$());
    var tmp2_safe_receiver = tmp.from_e5pdcm_k$(tmp_0, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_modifier_t1pq5c_k$());
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      withFinalSelectorName(this, selectorName, tmp2_safe_receiver, ComponentStyle$addStylesInto$lambda(classNames, this, styleSheet));
    }
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_0 = plus(lightModifiers.get_keys_wop4xp_k$(), darkModifiers.get_keys_wop4xp_k$());
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addStylesInto.<anonymous>' call
      if (!element.equals(Companion_getInstance_8().get_BaseKey_nalpdx_k$())) {
        destination.add_utx5q5_k$(element);
      }
    }
    var allCssRuleKeys = destination;
    var tmp3_iterator = allCssRuleKeys.iterator_jk1svi_k$();
    $l$loop: while (tmp3_iterator.hasNext_bitz1p_k$()) {
      var cssRuleKey = tmp3_iterator.next_20eer_k$();
      var tmp_1 = Companion_getInstance_6();
      var tmp4_safe_receiver = lightModifiers.get_wei43m_k$(cssRuleKey);
      var tmp_2 = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.get_modifier_t1pq5c_k$();
      var tmp5_safe_receiver = darkModifiers.get_wei43m_k$(cssRuleKey);
      var tmp6_elvis_lhs = tmp_1.from_e5pdcm_k$(tmp_2, tmp5_safe_receiver == null ? null : tmp5_safe_receiver.get_modifier_t1pq5c_k$());
      var tmp_3;
      if (tmp6_elvis_lhs == null) {
        continue $l$loop;
      } else {
        tmp_3 = tmp6_elvis_lhs;
      }
      var group = tmp_3;
      withFinalSelectorName(this, selectorName, group, ComponentStyle$addStylesInto$lambda_0(classNames, cssRuleKey, styleSheet, this));
    }
    return _ClassSelectors___init__impl__tbnzdx(classNames);
  };
  protoOf(ComponentStyle_0).addStylesInto_gj0mv0_k$ = function (styleSheet) {
    return this.addStylesInto_7ve9v0_k$(styleSheet, '.' + this.name_1);
  };
  protoOf(ComponentStyle_0).intoImmutableStyle_g690ow_k$ = function (classSelectors) {
    return new ImmutableComponentStyle(classSelectors, this.extraModifiers_1);
  };
  function ComponentStyle_1(extraModifiers, prefix, init) {
    prefix = prefix === VOID ? null : prefix;
    return new ComponentStyleProvider(extraModifiers, prefix, init);
  }
  function base_0(_this__u8e3s4, extraModifiers, prefix, init) {
    prefix = prefix === VOID ? null : prefix;
    return new ComponentStyleProvider(extraModifiers, prefix, base$lambda_0(init));
  }
  function _get_extraModifiers__fohold_0($this) {
    return $this.extraModifiers_1;
  }
  function _get_classNames__oqef2z($this) {
    return $this.classNames_1;
  }
  function ImmutableComponentStyle(classSelectors, extraModifiers) {
    this.extraModifiers_1 = extraModifiers;
    this.classNames_1 = toSet(_ClassSelectors___get_classNames__impl__eyto04(classSelectors));
  }
  protoOf(ImmutableComponentStyle).toModifier_7iov47_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-1123366866);
    if (isTraceInProgress()) {
      traceEventStart(-1123366866, $changed, -1, 'com.varabyte.kobweb.silk.components.style.ImmutableComponentStyle.toModifier (ComponentStyle.kt:287)');
    }
    $composer_0.startReplaceableGroup_ip860b_k$(1240656943);
    // Inline function 'kotlin.collections.filterNot' call
    // Inline function 'kotlin.collections.filterNotTo' call
    var this_0 = this.classNames_1;
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.components.style.ImmutableComponentStyle.toModifier.<anonymous>' call
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = Companion_getInstance_10().get_current_2iudd5_k$($composer_0, 6).get_opposite_ywslzk_k$().get_name_woqyms_k$().toLowerCase();
      if (!endsWith(element, tmp$ret$1)) {
        destination.add_utx5q5_k$(element);
      }
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    var currentClassNames = destination;
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!currentClassNames.isEmpty_y1axqb_k$()) {
      var tmp_0 = Companion_getInstance_0();
      // Inline function 'kotlin.collections.toTypedArray' call
      var tmp$ret$6 = copyToArray(currentClassNames);
      tmp = classNames(tmp_0, tmp$ret$6.slice());
    } else {
      tmp = Companion_getInstance_0();
    }
    var tmp0 = tmp.then_mmfvo6_k$(this.extraModifiers_1($composer_0, 0));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  };
  function ComponentModifier() {
  }
  function Light(styles) {
    this.styles_1 = styles;
  }
  protoOf(Light).get_styles_jnubqj_k$ = function () {
    return this.styles_1;
  };
  function Dark(styles) {
    this.styles_1 = styles;
  }
  protoOf(Dark).get_styles_jnubqj_k$ = function () {
    return this.styles_1;
  };
  function ColorAgnostic(styles) {
    this.styles_1 = styles;
  }
  protoOf(ColorAgnostic).get_styles_jnubqj_k$ = function () {
    return this.styles_1;
  };
  function ColorAware(lightStyles, darkStyles) {
    this.lightStyles_1 = lightStyles;
    this.darkStyles_1 = darkStyles;
  }
  protoOf(ColorAware).get_lightStyles_rob4y9_k$ = function () {
    return this.lightStyles_1;
  };
  protoOf(ColorAware).get_darkStyles_j1rmo1_k$ = function () {
    return this.darkStyles_1;
  };
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).from_e5pdcm_k$ = function (lightModifiers, darkModifiers) {
    var tmp;
    if (lightModifiers == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.style.Companion.from.<anonymous>' call
      // Inline function 'kotlin.apply' call
      var this_0 = new ComparableStyleScope();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.style.Companion.from.<anonymous>.<anonymous>' call
      toStyles(lightModifiers)(this_0);
      tmp = this_0;
    }
    var lightStyles = tmp;
    var tmp_0;
    if (darkModifiers == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.style.Companion.from.<anonymous>' call
      // Inline function 'kotlin.apply' call
      var this_1 = new ComparableStyleScope();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.style.Companion.from.<anonymous>.<anonymous>' call
      toStyles(darkModifiers)(this_1);
      tmp_0 = this_1;
    }
    var darkStyles = tmp_0;
    if (lightStyles == null ? darkStyles == null : false)
      return null;
    if (!(lightStyles == null) ? darkStyles == null : false)
      return new Light(lightStyles);
    if (lightStyles == null ? !(darkStyles == null) : false)
      return new Dark(darkStyles);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(!(lightStyles == null) ? !(darkStyles == null) : false)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp_1;
    if (equals(lightStyles, darkStyles)) {
      tmp_1 = new ColorAgnostic(lightStyles);
    } else {
      tmp_1 = new ColorAware(lightStyles, darkStyles);
    }
    return tmp_1;
  };
  var Companion_instance_1;
  function Companion_getInstance_6() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function StyleGroup() {
  }
  function _ClassSelectors___init__impl__tbnzdx(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function _ClassSelectors___get_classNames__impl__eyto04($this) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = _get_value__a43j40($this);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.components.style.ClassSelectors.<get-classNames>.<anonymous>' call
      var tmp$ret$0 = substringAfterLast_0(item, _Char___init__impl__6a9atx(46));
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    return destination;
  }
  function ClassSelectors__plus_impl_eu2y3b($this, other) {
    return _ClassSelectors___init__impl__tbnzdx(plus_0(_get_value__a43j40($this), _get_value__a43j40(other)));
  }
  function ClassSelectors__toString_impl_82ebnf($this) {
    return 'ClassSelectors(value=' + $this + ')';
  }
  function ClassSelectors__hashCode_impl_ttk8ga($this) {
    return hashCode($this);
  }
  function ClassSelectors__equals_impl_a7r10u($this, other) {
    if (!(other instanceof ClassSelectors))
      return false;
    var tmp0_other_with_cast = other instanceof ClassSelectors ? other.value_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function ClassSelectors(value) {
    this.value_1 = value;
  }
  protoOf(ClassSelectors).toString = function () {
    return ClassSelectors__toString_impl_82ebnf(this.value_1);
  };
  protoOf(ClassSelectors).hashCode = function () {
    return ClassSelectors__hashCode_impl_ttk8ga(this.value_1);
  };
  protoOf(ClassSelectors).equals = function (other) {
    return ClassSelectors__equals_impl_a7r10u(this.value_1, other);
  };
  function base_1(_this__u8e3s4, className, extraModifiers, init) {
    extraModifiers = extraModifiers === VOID ? Companion_getInstance_0() : extraModifiers;
    return base_2(_this__u8e3s4, className, base$lambda_1(extraModifiers), init);
  }
  function toAttrs_0(_this__u8e3s4, variant, finalHandler, $composer, $changed, $default) {
    var finalHandler_0 = finalHandler;
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-745290385);
    if (!(($default & 2) === 0))
      finalHandler_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(-745290385, $changed, -1, 'com.varabyte.kobweb.silk.components.style.toAttrs (ComponentStyle.kt:470)');
    }
    var tmp0 = toAttrs(toModifier(_this__u8e3s4, variant.slice(), $composer_0, 14 & $changed), finalHandler_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  }
  function base_2(_this__u8e3s4, className, extraModifiers, init) {
    return new ComponentStyle_0(className, extraModifiers, VOID, base$lambda_2(init));
  }
  function base$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_ip860b_k$(-1565522235);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-1565522235, $changed, -1, 'com.varabyte.kobweb.silk.components.style.base.<anonymous> (ComponentStyle.kt:439)');
        tmp = Unit_getInstance();
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_getInstance();
      }
      $composer_0.endReplaceableGroup_ern0ak_k$();
      return tmp0;
    };
  }
  function ComponentStyle$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_ip860b_k$(1744510051);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(1744510051, $changed, -1, 'com.varabyte.kobweb.silk.components.style.ComponentStyle.<anonymous> (ComponentStyle.kt:427)');
        tmp = Unit_getInstance();
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_getInstance();
      }
      $composer_0.endReplaceableGroup_ern0ak_k$();
      return tmp0;
    };
  }
  function base$lambda$lambda($this_$receiver, $init) {
    return function () {
      // Inline function 'kotlin.let' call
      var this_0 = new ComponentBaseModifier($this_$receiver.colorMode_1);
      // Inline function 'kotlin.contracts.contract' call
      return $init(this_0);
    };
  }
  function base$lambda_0($init) {
    return function ($this$$receiver) {
      $this$$receiver.base_y8uu8g_k$(base$lambda$lambda($this$$receiver, $init));
      return Unit_getInstance();
    };
  }
  function base$lambda_1($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_ip860b_k$(1154855457);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(1154855457, $changed, -1, 'com.varabyte.kobweb.silk.components.style.base.<anonymous> (ComponentStyle.kt:396)');
        tmp = Unit_getInstance();
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_getInstance();
      }
      $composer_0.endReplaceableGroup_ern0ak_k$();
      return tmp0;
    };
  }
  function base$lambda$lambda_0($this_$receiver, $init) {
    return function () {
      // Inline function 'kotlin.let' call
      var this_0 = new ComponentBaseModifier($this_$receiver.colorMode_1);
      // Inline function 'kotlin.contracts.contract' call
      return $init(this_0);
    };
  }
  function base$lambda_2($init) {
    return function ($this$$receiver) {
      $this$$receiver.base_y8uu8g_k$(base$lambda$lambda_0($this$$receiver, $init));
      return Unit_getInstance();
    };
  }
  function _get_style__b8k6v4($this) {
    return $this.style_1;
  }
  function _get_extraModifiers__fohold_1($this) {
    return $this.extraModifiers_1;
  }
  function _get_init__d89e0r_1($this) {
    return $this.init_1;
  }
  function ComponentVariantProvider(style, extraModifiers, init) {
    CacheByPropertyNameDelegate.call(this);
    this.style_1 = style;
    this.extraModifiers_1 = extraModifiers;
    this.init_1 = init;
  }
  protoOf(ComponentVariantProvider).create_oysagu_k$ = function (propertyName) {
    var withoutSuffix = titleCamelCaseToKebabCase(removeSuffix(propertyName, 'Variant'));
    // Inline function 'kotlin.takeIf' call
    var this_0 = removeSuffix(removePrefix(withoutSuffix, this.style_1.get_nameWithoutPrefix_lto6iu_k$() + '-'), '-' + this.style_1.get_nameWithoutPrefix_lto6iu_k$());
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentVariantProvider.create.<anonymous>' call
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_0) > 0) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var tmp0_elvis_lhs = tmp;
    var name = tmp0_elvis_lhs == null ? withoutSuffix : tmp0_elvis_lhs;
    return this.style_1.addVariant_meui_k$(name, this.extraModifiers_1, this.init_1);
  };
  var com_varabyte_kobweb_silk_components_style_ComponentVariant$stable;
  function ComponentVariant() {
  }
  protoOf(ComponentVariant).then_x4ddsu_k$ = function (next) {
    return new CompositeComponentVariant(this, next);
  };
  function addVariantBase(_this__u8e3s4, extraModifiers, init) {
    extraModifiers = extraModifiers === VOID ? Companion_getInstance_0() : extraModifiers;
    return addVariantBase_0(_this__u8e3s4, addVariantBase$lambda(extraModifiers), init);
  }
  function addVariant(_this__u8e3s4, extraModifiers, init) {
    extraModifiers = extraModifiers === VOID ? Companion_getInstance_0() : extraModifiers;
    return addVariant_0(_this__u8e3s4, addVariant$lambda(extraModifiers), init);
  }
  function combine(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-1181076790);
    if (isTraceInProgress()) {
      traceEventStart(-1181076790, $changed, -1, 'com.varabyte.kobweb.silk.components.style.combine (ComponentVariant.kt:85)');
    }
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.collections.reduceOrNull' call
      var iterator = _this__u8e3s4.iterator_jk1svi_k$();
      if (!iterator.hasNext_bitz1p_k$()) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var accumulator = iterator.next_20eer_k$();
      while (iterator.hasNext_bitz1p_k$()) {
        // Inline function 'com.varabyte.kobweb.silk.components.style.combine.<anonymous>' call
        var acc = accumulator;
        var variant = iterator.next_20eer_k$();
        var tmp;
        if (!(acc == null) ? !(variant == null) : false) {
          tmp = acc.then_x4ddsu_k$(variant);
        } else {
          tmp = acc == null ? variant : acc;
        }
        accumulator = tmp;
      }
      tmp$ret$0 = accumulator;
    }
    var tmp0 = tmp$ret$0;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  }
  function SimpleComponentVariant(style, baseStyle) {
    ComponentVariant.call(this);
    this.style_1 = style;
    this.baseStyle_1 = baseStyle;
  }
  protoOf(SimpleComponentVariant).get_style_iyqetk_k$ = function () {
    return this.style_1;
  };
  protoOf(SimpleComponentVariant).get_baseStyle_lpil3d_k$ = function () {
    return this.baseStyle_1;
  };
  protoOf(SimpleComponentVariant).get_name_woqyms_k$ = function () {
    return removePrefix(this.style_1.get_name_woqyms_k$(), this.baseStyle_1.get_name_woqyms_k$() + '-');
  };
  protoOf(SimpleComponentVariant).addStylesInto_gj0mv0_k$ = function (styleSheet) {
    return this.style_1.addStylesInto_7ve9v0_k$(styleSheet, '.' + this.baseStyle_1.get_name_woqyms_k$() + '.' + this.style_1.get_name_woqyms_k$());
  };
  protoOf(SimpleComponentVariant).toModifier_7iov47_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(25327230);
    if (isTraceInProgress()) {
      traceEventStart(25327230, $changed, -1, 'com.varabyte.kobweb.silk.components.style.SimpleComponentVariant.toModifier (ComponentVariant.kt:49)');
    }
    var tmp0 = toModifier(this.style_1, [], $composer_0, 64);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  };
  protoOf(SimpleComponentVariant).intoImmutableStyle_g690ow_k$ = function (classSelectors) {
    return this.style_1.intoImmutableStyle_g690ow_k$(classSelectors);
  };
  function _get_head__d7jo8b($this) {
    return $this.head_1;
  }
  function _get_tail__de2tiz($this) {
    return $this.tail_1;
  }
  function CompositeComponentVariant(head, tail) {
    ComponentVariant.call(this);
    this.head_1 = head;
    this.tail_1 = tail;
  }
  protoOf(CompositeComponentVariant).addStylesInto_gj0mv0_k$ = function (styleSheet) {
    return ClassSelectors__plus_impl_eu2y3b(this.head_1.addStylesInto_gj0mv0_k$(styleSheet), this.tail_1.addStylesInto_gj0mv0_k$(styleSheet));
  };
  protoOf(CompositeComponentVariant).toModifier_7iov47_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-1522694879);
    if (isTraceInProgress()) {
      traceEventStart(-1522694879, $changed, -1, 'com.varabyte.kobweb.silk.components.style.CompositeComponentVariant.toModifier (ComponentVariant.kt:60)');
    }
    var tmp0 = this.head_1.toModifier_7iov47_k$($composer_0, 0).then_mmfvo6_k$(this.tail_1.toModifier_7iov47_k$($composer_0, 0));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  };
  function addVariantBase_0(_this__u8e3s4, extraModifiers, init) {
    return new ComponentVariantProvider(_this__u8e3s4, extraModifiers, addVariantBase$lambda_0(init));
  }
  function addVariant_0(_this__u8e3s4, extraModifiers, init) {
    return new ComponentVariantProvider(_this__u8e3s4, extraModifiers, init);
  }
  function addVariantBase$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_ip860b_k$(-723673224);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-723673224, $changed, -1, 'com.varabyte.kobweb.silk.components.style.addVariantBase.<anonymous> (ComponentVariant.kt:125)');
        tmp = Unit_getInstance();
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_getInstance();
      }
      $composer_0.endReplaceableGroup_ern0ak_k$();
      return tmp0;
    };
  }
  function addVariant$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_ip860b_k$(532712666);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(532712666, $changed, -1, 'com.varabyte.kobweb.silk.components.style.addVariant.<anonymous> (ComponentVariant.kt:119)');
        tmp = Unit_getInstance();
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_getInstance();
      }
      $composer_0.endReplaceableGroup_ern0ak_k$();
      return tmp0;
    };
  }
  function addVariantBase$lambda$lambda($this_$receiver, $init) {
    return function () {
      // Inline function 'kotlin.let' call
      var this_0 = new ComponentBaseModifier($this_$receiver.get_colorMode_trbg8z_k$());
      // Inline function 'kotlin.contracts.contract' call
      return $init(this_0);
    };
  }
  function addVariantBase$lambda_0($init) {
    return function ($this$$receiver) {
      $this$$receiver.base_y8uu8g_k$(addVariantBase$lambda$lambda($this$$receiver, $init));
      return Unit_getInstance();
    };
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  protoOf(Companion_2).OfFunctionalPseudoClass_1c334c_k$ = function (target, pseudoClass, params) {
    // Inline function 'kotlin.collections.mapNotNull' call
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var destination = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.forEach' call
    var inductionVariable = 0;
    var last = params.length;
    while (inductionVariable < last) {
      var element = params[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      // Inline function 'com.varabyte.kobweb.silk.components.style.Companion.OfFunctionalPseudoClass.<anonymous>' call
      var tmp0_safe_receiver = element.toSelectorText_wuaxtz_k$();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        destination.add_utx5q5_k$(tmp0_safe_receiver);
      }
    }
    return new OfPseudoClass(target, pseudoClass + '(' + joinToString(destination) + ')');
  };
  var Companion_instance_2;
  function Companion_getInstance_7() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function OfMedia(target, mediaQuery) {
    CssRule.call(this, target);
    this.mediaQuery_2 = mediaQuery;
  }
  protoOf(OfMedia).get_mediaQuery_bp0atp_k$ = function () {
    return this.mediaQuery_2;
  };
  protoOf(OfMedia).plus_laux6y_k$ = function (other) {
    return new CompositeOpen(this.target_1, this.mediaQuery_2, emptyList(), listOf_0(other));
  };
  protoOf(OfMedia).plus_yjyv46_k$ = function (other) {
    return new CompositeClosed(this.target_1, this.mediaQuery_2, emptyList(), emptyList(), other);
  };
  function NonMediaCssRule(target) {
    CssRule.call(this, target);
  }
  function OfAttributeSelector(target, attributeSelector) {
    NonMediaCssRule.call(this, target);
    this.attributeSelector_1 = attributeSelector;
  }
  protoOf(OfAttributeSelector).get_attributeSelector_29w3da_k$ = function () {
    return this.attributeSelector_1;
  };
  protoOf(OfAttributeSelector).toSelectorText_wuaxtz_k$ = function () {
    return this.buildSelectorText_ozeigq_k$(listOf_0(this), emptyList(), null);
  };
  protoOf(OfAttributeSelector).plus_hzbhfb_k$ = function (other) {
    return new CompositeOpen(this.target_1, null, listOf([this, other]), emptyList());
  };
  protoOf(OfAttributeSelector).plus_laux6y_k$ = function (other) {
    return new CompositeOpen(this.target_1, null, listOf_0(this), listOf_0(other));
  };
  protoOf(OfAttributeSelector).plus_yjyv46_k$ = function (other) {
    return new CompositeClosed(this.target_1, null, listOf_0(this), emptyList(), other);
  };
  function OfPseudoClass(target, pseudoClass) {
    NonMediaCssRule.call(this, target);
    this.pseudoClass_1 = pseudoClass;
  }
  protoOf(OfPseudoClass).get_pseudoClass_x3c835_k$ = function () {
    return this.pseudoClass_1;
  };
  protoOf(OfPseudoClass).toSelectorText_wuaxtz_k$ = function () {
    return this.buildSelectorText_ozeigq_k$(emptyList(), listOf_0(this), null);
  };
  protoOf(OfPseudoClass).plus_laux6y_k$ = function (other) {
    return new CompositeOpen(this.target_1, null, emptyList(), listOf([this, other]));
  };
  protoOf(OfPseudoClass).plus_yjyv46_k$ = function (other) {
    return new CompositeClosed(this.target_1, null, emptyList(), listOf_0(this), other);
  };
  function OfPseudoElement(target, pseudoElement) {
    NonMediaCssRule.call(this, target);
    this.pseudoElement_1 = pseudoElement;
  }
  protoOf(OfPseudoElement).get_pseudoElement_9pr039_k$ = function () {
    return this.pseudoElement_1;
  };
  protoOf(OfPseudoElement).toSelectorText_wuaxtz_k$ = function () {
    return this.buildSelectorText_ozeigq_k$(emptyList(), emptyList(), this);
  };
  function CompositeOpen(target, mediaQuery, attributeSelectors, pseudoClasses) {
    NonMediaCssRule.call(this, target);
    this.mediaQuery_2 = mediaQuery;
    this.attributeSelectors_1 = attributeSelectors;
    this.pseudoClasses_1 = pseudoClasses;
  }
  protoOf(CompositeOpen).get_mediaQuery_bp0atp_k$ = function () {
    return this.mediaQuery_2;
  };
  protoOf(CompositeOpen).get_attributeSelectors_ih5mp_k$ = function () {
    return this.attributeSelectors_1;
  };
  protoOf(CompositeOpen).get_pseudoClasses_jp4mn5_k$ = function () {
    return this.pseudoClasses_1;
  };
  protoOf(CompositeOpen).toSelectorText_wuaxtz_k$ = function () {
    return this.buildSelectorText_ozeigq_k$(this.attributeSelectors_1, this.pseudoClasses_1, null);
  };
  protoOf(CompositeOpen).plus_laux6y_k$ = function (other) {
    return new CompositeOpen(this.target_1, null, this.attributeSelectors_1, plus_1(this.pseudoClasses_1, other));
  };
  protoOf(CompositeOpen).plus_hzbhfb_k$ = function (other) {
    return new CompositeOpen(this.target_1, null, plus_1(this.attributeSelectors_1, other), this.pseudoClasses_1);
  };
  protoOf(CompositeOpen).plus_yjyv46_k$ = function (other) {
    return new CompositeClosed(this.target_1, null, this.attributeSelectors_1, this.pseudoClasses_1, other);
  };
  function CompositeClosed(target, mediaQuery, attributeSelectors, pseudoClasses, pseudoElement) {
    NonMediaCssRule.call(this, target);
    this.mediaQuery_2 = mediaQuery;
    this.attributeSelectors_1 = attributeSelectors;
    this.pseudoClasses_1 = pseudoClasses;
    this.pseudoElement_1 = pseudoElement;
  }
  protoOf(CompositeClosed).get_mediaQuery_bp0atp_k$ = function () {
    return this.mediaQuery_2;
  };
  protoOf(CompositeClosed).get_attributeSelectors_ih5mp_k$ = function () {
    return this.attributeSelectors_1;
  };
  protoOf(CompositeClosed).get_pseudoClasses_jp4mn5_k$ = function () {
    return this.pseudoClasses_1;
  };
  protoOf(CompositeClosed).get_pseudoElement_9pr039_k$ = function () {
    return this.pseudoElement_1;
  };
  protoOf(CompositeClosed).toSelectorText_wuaxtz_k$ = function () {
    return this.buildSelectorText_ozeigq_k$(this.attributeSelectors_1, this.pseudoClasses_1, this.pseudoElement_1);
  };
  function CssRule(target) {
    Companion_getInstance_7();
    this.target_1 = target;
    this.mediaQuery_1 = null;
  }
  protoOf(CssRule).get_target_juba8q_k$ = function () {
    return this.target_1;
  };
  protoOf(CssRule).invoke_ts7809_k$ = function (createModifier) {
    this.target_1.cssRule_bfjnx7_k$(this.get_mediaQuery_bp0atp_k$(), this.toSelectorText_wuaxtz_k$(), createModifier);
  };
  protoOf(CssRule).get_mediaQuery_bp0atp_k$ = function () {
    return this.mediaQuery_1;
  };
  protoOf(CssRule).toSelectorText_wuaxtz_k$ = function () {
    return null;
  };
  protoOf(CssRule).buildSelectorText_ozeigq_k$ = function (attributeSelectors, pseudoClasses, pseudoElement) {
    // Inline function 'kotlin.takeIf' call
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.components.style.CssRule.buildSelectorText.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = attributeSelectors.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.components.style.CssRule.buildSelectorText.<anonymous>.<anonymous>' call
      this_0.append_22ad7x_k$('[' + element.attributeSelector_1 + ']');
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = pseudoClasses.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.components.style.CssRule.buildSelectorText.<anonymous>.<anonymous>' call
      this_0.append_22ad7x_k$(':' + element_0.pseudoClass_1);
    }
    if (!(pseudoElement == null)) {
      this_0.append_22ad7x_k$('::' + pseudoElement.pseudoElement_1);
    }
    var this_1 = this_0.toString();
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'com.varabyte.kobweb.silk.components.style.CssRule.buildSelectorText.<anonymous>' call
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_1) > 0) {
      tmp = this_1;
    } else {
      tmp = null;
    }
    return tmp;
  };
  function get_ariaDisabled(_this__u8e3s4) {
    return new OfAttributeSelector(_this__u8e3s4, 'aria-disabled="true"');
  }
  function not(_this__u8e3s4, params) {
    return Companion_getInstance_7().OfFunctionalPseudoClass_1c334c_k$(_this__u8e3s4, 'not', params.slice());
  }
  function get_hover(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'hover');
  }
  function get_active(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'active');
  }
  function get_focusVisible(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'focus-visible');
  }
  function get_placeholder(_this__u8e3s4) {
    return new OfPseudoElement(_this__u8e3s4, 'placeholder');
  }
  function get_ariaInvalid(_this__u8e3s4) {
    return new OfAttributeSelector(_this__u8e3s4, 'aria-invalid="true"');
  }
  function get_disabled(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'disabled');
  }
  function get_link(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'link');
  }
  function get_visited(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'visited');
  }
  function get_selectorSeparators() {
    _init_properties_StyleModifiers_kt__g9u6y3();
    return selectorSeparators;
  }
  var selectorSeparators;
  function Companion_3() {
    Companion_instance_3 = this;
    this.BaseKey_1 = new Key(null, null);
  }
  protoOf(Companion_3).get_BaseKey_nalpdx_k$ = function () {
    return this.BaseKey_1;
  };
  var Companion_instance_3;
  function Companion_getInstance_8() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function Key(mediaQuery, suffix) {
    this.mediaQuery_1 = mediaQuery;
    this.suffix_1 = suffix;
  }
  protoOf(Key).get_mediaQuery_bp0atp_k$ = function () {
    return this.mediaQuery_1;
  };
  protoOf(Key).get_suffix_jo1v8a_k$ = function () {
    return this.suffix_1;
  };
  protoOf(Key).component1_7eebsc_k$ = function () {
    return this.mediaQuery_1;
  };
  protoOf(Key).component2_7eebsb_k$ = function () {
    return this.suffix_1;
  };
  protoOf(Key).copy_jhsqnb_k$ = function (mediaQuery, suffix) {
    return new Key(mediaQuery, suffix);
  };
  protoOf(Key).copy$default_h2svgr_k$ = function (mediaQuery, suffix, $super) {
    mediaQuery = mediaQuery === VOID ? this.mediaQuery_1 : mediaQuery;
    suffix = suffix === VOID ? this.suffix_1 : suffix;
    return $super === VOID ? this.copy_jhsqnb_k$(mediaQuery, suffix) : $super.copy_jhsqnb_k$.call(this, mediaQuery, suffix);
  };
  protoOf(Key).toString = function () {
    return 'Key(mediaQuery=' + this.mediaQuery_1 + ', suffix=' + this.suffix_1 + ')';
  };
  protoOf(Key).hashCode = function () {
    var result = this.mediaQuery_1 == null ? 0 : getStringHashCode(this.mediaQuery_1);
    result = imul(result, 31) + (this.suffix_1 == null ? 0 : getStringHashCode(this.suffix_1)) | 0;
    return result;
  };
  protoOf(Key).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Key))
      return false;
    var tmp0_other_with_cast = other instanceof Key ? other : THROW_CCE();
    if (!(this.mediaQuery_1 == tmp0_other_with_cast.mediaQuery_1))
      return false;
    if (!(this.suffix_1 == tmp0_other_with_cast.suffix_1))
      return false;
    return true;
  };
  function CssModifier(modifier, mediaQuery, suffix) {
    Companion_getInstance_8();
    mediaQuery = mediaQuery === VOID ? null : mediaQuery;
    suffix = suffix === VOID ? null : suffix;
    this.modifier_1 = modifier;
    this.mediaQuery_1 = mediaQuery;
    var tmp = this;
    var tmp_0;
    if (suffix == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_1;
      // Inline function 'com.varabyte.kobweb.silk.components.style.CssModifier.suffix.<anonymous>' call
      // Inline function 'kotlin.text.isNotBlank' call
      if (!isBlank(suffix)) {
        tmp_1 = suffix;
      } else {
        tmp_1 = null;
      }
      tmp_0 = tmp_1;
    }
    var tmp1_safe_receiver = tmp_0;
    var tmp_2;
    if (tmp1_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.style.CssModifier.suffix.<anonymous>' call
      tmp_2 = !get_selectorSeparators().contains_aljjnj_k$(new Char(first(tmp1_safe_receiver))) ? ' ' + tmp1_safe_receiver : tmp1_safe_receiver;
    }
    tmp.suffix_1 = tmp_2;
  }
  protoOf(CssModifier).get_modifier_t1pq5c_k$ = function () {
    return this.modifier_1;
  };
  protoOf(CssModifier).get_mediaQuery_bp0atp_k$ = function () {
    return this.mediaQuery_1;
  };
  protoOf(CssModifier).get_suffix_jo1v8a_k$ = function () {
    return this.suffix_1;
  };
  protoOf(CssModifier).mergeWith_2pm19d_k$ = function (other) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((!(this === other) ? equals(this.mediaQuery_1, other.mediaQuery_1) : false) ? this.suffix_1 == other.suffix_1 : false)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return new CssModifier(this.modifier_1.then_mmfvo6_k$(other.modifier_1), this.mediaQuery_1, this.suffix_1);
  };
  protoOf(CssModifier).get_key_18j28a_k$ = function () {
    var tmp0_safe_receiver = this.mediaQuery_1;
    return new Key(tmp0_safe_receiver == null ? null : toString(tmp0_safe_receiver), this.suffix_1);
  };
  function _get__cssModifiers__il7nll($this) {
    return $this._cssModifiers_1;
  }
  function StyleModifiers() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp._cssModifiers_1 = ArrayList_init_$Create$_0();
    this.cssModifiers_1 = this._cssModifiers_1;
  }
  protoOf(StyleModifiers).get_cssModifiers_m7qozi_k$ = function () {
    return this.cssModifiers_1;
  };
  protoOf(StyleModifiers).base_y8uu8g_k$ = function (createModifier) {
    this._cssModifiers_1.add_utx5q5_k$(new CssModifier(createModifier()));
  };
  protoOf(StyleModifiers).cssRule_bfjnx7_k$ = function (mediaQuery, suffix, createModifier) {
    this._cssModifiers_1.add_utx5q5_k$(new CssModifier(createModifier(), mediaQuery, suffix));
  };
  protoOf(StyleModifiers).cssRule_fe6cwq_k$ = function (suffix, createModifier) {
    this._cssModifiers_1.add_utx5q5_k$(new CssModifier(createModifier(), null, suffix));
  };
  protoOf(StyleModifiers).cssRule_7fzdgd_k$ = function (mediaQuery, createModifier) {
    this._cssModifiers_1.add_utx5q5_k$(new CssModifier(createModifier(), mediaQuery));
  };
  protoOf(StyleModifiers).invoke_hmyoxj_k$ = function (_this__u8e3s4, createModifier) {
    this.cssRule_7fzdgd_k$(toMinWidthQuery(_this__u8e3s4), createModifier);
  };
  var properties_initialized_StyleModifiers_kt_29xuzx;
  function _init_properties_StyleModifiers_kt__g9u6y3() {
    if (!properties_initialized_StyleModifiers_kt_29xuzx) {
      properties_initialized_StyleModifiers_kt_29xuzx = true;
      selectorSeparators = setOf([new Char(_Char___init__impl__6a9atx(32)), new Char(_Char___init__impl__6a9atx(62)), new Char(_Char___init__impl__6a9atx(43)), new Char(_Char___init__impl__6a9atx(126)), new Char(_Char___init__impl__6a9atx(46)), new Char(_Char___init__impl__6a9atx(58)), new Char(_Char___init__impl__6a9atx(44)), new Char(_Char___init__impl__6a9atx(91))]);
    }
  }
  var Breakpoint_ZERO_instance;
  var Breakpoint_SM_instance;
  var Breakpoint_MD_instance;
  var Breakpoint_LG_instance;
  var Breakpoint_XL_instance;
  function values() {
    return [Breakpoint_ZERO_getInstance(), Breakpoint_SM_getInstance(), Breakpoint_MD_getInstance(), Breakpoint_LG_getInstance(), Breakpoint_XL_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'ZERO':
        return Breakpoint_ZERO_getInstance();
      case 'SM':
        return Breakpoint_SM_getInstance();
      case 'MD':
        return Breakpoint_MD_getInstance();
      case 'LG':
        return Breakpoint_LG_getInstance();
      case 'XL':
        return Breakpoint_XL_getInstance();
      default:
        Breakpoint_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var Breakpoint_entriesInitialized;
  function Breakpoint_initEntries() {
    if (Breakpoint_entriesInitialized)
      return Unit_getInstance();
    Breakpoint_entriesInitialized = true;
    Breakpoint_ZERO_instance = new Breakpoint('ZERO', 0);
    Breakpoint_SM_instance = new Breakpoint('SM', 1);
    Breakpoint_MD_instance = new Breakpoint('MD', 2);
    Breakpoint_LG_instance = new Breakpoint('LG', 3);
    Breakpoint_XL_instance = new Breakpoint('XL', 4);
  }
  var $ENTRIES;
  function Breakpoint(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Breakpoint_ZERO_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_ZERO_instance;
  }
  function Breakpoint_SM_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_SM_instance;
  }
  function Breakpoint_MD_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_MD_instance;
  }
  function Breakpoint_LG_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_LG_instance;
  }
  function Breakpoint_XL_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_XL_instance;
  }
  function BreakpointValues(sm, md, lg, xl) {
    this.sm_1 = sm;
    this.md_1 = md;
    this.lg_1 = lg;
    this.xl_1 = xl;
  }
  protoOf(BreakpointValues).get_sm_kntnod_k$ = function () {
    return this.sm_1;
  };
  protoOf(BreakpointValues).get_md_kntnts_k$ = function () {
    return this.md_1;
  };
  protoOf(BreakpointValues).get_lg_kntnuk_k$ = function () {
    return this.lg_1;
  };
  protoOf(BreakpointValues).get_xl_kntnk3_k$ = function () {
    return this.xl_1;
  };
  protoOf(BreakpointValues).component1_7eebsc_k$ = function () {
    return this.sm_1;
  };
  protoOf(BreakpointValues).component2_7eebsb_k$ = function () {
    return this.md_1;
  };
  protoOf(BreakpointValues).component3_7eebsa_k$ = function () {
    return this.lg_1;
  };
  protoOf(BreakpointValues).component4_7eebs9_k$ = function () {
    return this.xl_1;
  };
  protoOf(BreakpointValues).copy_1gpx6z_k$ = function (sm, md, lg, xl) {
    return new BreakpointValues(sm, md, lg, xl);
  };
  protoOf(BreakpointValues).copy$default_itz3kn_k$ = function (sm, md, lg, xl, $super) {
    sm = sm === VOID ? this.sm_1 : sm;
    md = md === VOID ? this.md_1 : md;
    lg = lg === VOID ? this.lg_1 : lg;
    xl = xl === VOID ? this.xl_1 : xl;
    return $super === VOID ? this.copy_1gpx6z_k$(sm, md, lg, xl) : $super.copy_1gpx6z_k$.call(this, sm, md, lg, xl);
  };
  protoOf(BreakpointValues).toString = function () {
    return 'BreakpointValues(sm=' + this.sm_1 + ', md=' + this.md_1 + ', lg=' + this.lg_1 + ', xl=' + this.xl_1 + ')';
  };
  protoOf(BreakpointValues).hashCode = function () {
    var result = hashCode(this.sm_1);
    result = imul(result, 31) + hashCode(this.md_1) | 0;
    result = imul(result, 31) + hashCode(this.lg_1) | 0;
    result = imul(result, 31) + hashCode(this.xl_1) | 0;
    return result;
  };
  protoOf(BreakpointValues).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BreakpointValues))
      return false;
    var tmp0_other_with_cast = other instanceof BreakpointValues ? other : THROW_CCE();
    if (!equals(this.sm_1, tmp0_other_with_cast.sm_1))
      return false;
    if (!equals(this.md_1, tmp0_other_with_cast.md_1))
      return false;
    if (!equals(this.lg_1, tmp0_other_with_cast.lg_1))
      return false;
    if (!equals(this.xl_1, tmp0_other_with_cast.xl_1))
      return false;
    return true;
  };
  function BreakpointSizes(sm, md, lg, xl) {
    return new BreakpointValues(new Rem(sm), new Rem(md), new Rem(lg), new Rem(xl));
  }
  function Px(value) {
    BreakpointUnitValue.call(this, value);
  }
  protoOf(Px).toPx_24esj_k$ = function () {
    return this.width_1;
  };
  function Em(value) {
    BreakpointUnitValue.call(this, value);
  }
  protoOf(Em).toPx_24esj_k$ = function () {
    return get_px(this.width_1.value * numberToDouble(get_bodyFontSize(window)));
  };
  function Rem(value) {
    BreakpointUnitValue.call(this, value);
  }
  protoOf(Rem).toPx_24esj_k$ = function () {
    return get_px(this.width_1.value * numberToDouble(get_bodyFontSize(window)));
  };
  function BreakpointUnitValue(width) {
    this.width_1 = width;
  }
  protoOf(BreakpointUnitValue).get_width_j0q4yl_k$ = function () {
    return this.width_1;
  };
  function get_bodyFontSize(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.document.body;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.style.breakpoint.<get-bodyFontSize>.<anonymous>' call
      tmp = toIntOrNull(removeSuffix(_this__u8e3s4.getComputedStyle(tmp0_safe_receiver).getPropertyValue('font-size'), 'px'));
    }
    var bodySize = tmp;
    return bodySize == null ? 16 : bodySize;
  }
  function get_SpanTextStyle() {
    _init_properties_SpanText_kt__upt1hl();
    return SpanTextStyle$delegate.getValue_fbnwi2_k$(null, SpanTextStyle$factory());
  }
  var SpanTextStyle$delegate;
  function SpanText(text, modifier, variant, ref, $composer, $changed, $default) {
    _init_properties_SpanText_kt__upt1hl();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-542643488);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(text) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 16;
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(variant_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(ref_0._v) ? 2048 : 1024);
    if (!(($default & 2) === 2) ? true : !(($dirty & 5851) === 1170) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance_0();
      }
      if (!(($default & 4) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        ref_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-542643488, $dirty, -1, 'com.varabyte.kobweb.silk.components.text.SpanText (SpanText.kt:49)');
      }
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
      var this_0 = toModifier(get_SpanTextStyle(), [variant_0._v], $composer_0, 0).then_mmfvo6_k$(modifier_0._v);
      var tmp;
      if (startsWith(text, _Char___init__impl__6a9atx(32)) ? true : endsWith_0(text, _Char___init__impl__6a9atx(32))) {
        // Inline function 'com.varabyte.kobweb.silk.components.text.SpanText.<anonymous>' call
        tmp = whiteSpace(Companion_getInstance_0(), Companion_getInstance_2().get_PreWrap_nintz8_k$());
      } else {
        tmp = Companion_getInstance_0();
      }
      var finalModifier = this_0.then_mmfvo6_k$(tmp);
      var tmp_0 = toAttrs(finalModifier);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.text.SpanText.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -539273278, true, SpanText$lambda(ref_0, text));
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
        // Inline function 'com.varabyte.kobweb.silk.components.text.SpanText.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Span(tmp_0, tmp0, $composer_0, 48, 0);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(SpanText$lambda_0(text, modifier_0, variant_0, ref_0, $changed, $default));
    }
  }
  function SpanTextStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_SpanText_kt__upt1hl();
    return Unit_getInstance();
  }
  function SpanText$lambda($ref, $text) {
    return function ($this$Span, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-539273278, $changed, -1, 'com.varabyte.kobweb.silk.components.text.SpanText.<anonymous> (SpanText.kt:58)');
      }
      registerRefScope($this$Span, $ref._v, $composer_0, 72);
      Text($text, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function SpanText$lambda_0($text, $modifier, $variant, $ref, $$changed, $$default) {
    return function ($composer, $force) {
      SpanText($text, $modifier._v, $variant._v, $ref._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function SpanTextStyle$factory() {
    return getPropertyCallableRef('SpanTextStyle', 0, KProperty0, function () {
      return get_SpanTextStyle();
    }, null);
  }
  var properties_initialized_SpanText_kt_kccny1;
  function _init_properties_SpanText_kt__upt1hl() {
    if (!properties_initialized_SpanText_kt_kccny1) {
      properties_initialized_SpanText_kt_kccny1 = true;
      SpanTextStyle$delegate = ComponentStyle(VOID, 'silk', SpanTextStyle$delegate$lambda);
    }
  }
  function _get_cache__j44d4h($this) {
    return $this.cache_1;
  }
  function CacheByPropertyNameDelegate() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.cache_1 = LinkedHashMap_init_$Create$_0();
  }
  protoOf(CacheByPropertyNameDelegate).getValue_fbnwi2_k$ = function (thisRef, property) {
    var name = property.callableName;
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.cache_1;
    var value = this_0.get_wei43m_k$(name);
    var tmp;
    if (value == null) {
      // Inline function 'com.varabyte.kobweb.silk.components.util.internal.CacheByPropertyNameDelegate.getValue.<anonymous>' call
      var answer = this.create_oysagu_k$(name);
      this_0.put_4fpzoq_k$(name, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    return tmp;
  };
  function get_LocalDeferred() {
    _init_properties_Deferred_kt__im2yn();
    return LocalDeferred;
  }
  var LocalDeferred;
  function deferRender(content, $composer, $changed) {
    _init_properties_Deferred_kt__im2yn();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1215818569);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1215818569, $dirty, -1, 'com.varabyte.kobweb.silk.defer.deferRender (Deferred.kt:59)');
      }
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var this_0 = get_LocalDeferred();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.consume_ebzcrh_k$(this_0);
      sourceInformationMarkerEnd($composer_1);
      var state = tmp0;
      $composer_0.startReplaceableGroup_ip860b_k$(-1824718458);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      var invalid = $composer_0.changed_ga7h3f_k$(state);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'com.varabyte.kobweb.silk.defer.deferRender.<anonymous>' call
        var value = state.append_nc4352_k$();
        this_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var deferredEntry = tmp0_group;
      deferredEntry.content_1 = content;
      DisposableEffect(deferredEntry, deferRender$lambda(deferredEntry), $composer_0, 8);
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
      tmp1_safe_receiver.updateScope_t8jcf_k$(deferRender$lambda_0(content, $changed));
    }
  }
  function DeferredComposablesState$Entry$dismiss$lambda(this$0, this$1) {
    return function () {
      this$0.entries_1.remove_an8aut_k$(this$1);
      return Unit_getInstance();
    };
  }
  function _set_timeoutHandle__bya7pg($this, _set____db54di) {
    $this.timeoutHandle_1 = _set____db54di;
  }
  function _get_timeoutHandle__r61q7s($this) {
    return $this.timeoutHandle_1;
  }
  function _get_batchedCommands__4uvets($this) {
    return $this.batchedCommands_1;
  }
  function _get_entries__iz8n5($this) {
    return $this.entries_1;
  }
  function invokeLater_0($this, block) {
    $this.batchedCommands_1.add_utx5q5_k$(block);
    if ($this.timeoutHandle_1 === -1) {
      var tmp = $this;
      var tmp_0 = window;
      tmp.timeoutHandle_1 = tmp_0.setTimeout(DeferredComposablesState$invokeLater$lambda($this));
    }
  }
  function Entry($outer) {
    this.$this_1 = $outer;
    this.content_1 = null;
  }
  protoOf(Entry).set_content_3bx335_k$ = function (_set____db54di) {
    this.content_1 = _set____db54di;
  };
  protoOf(Entry).get_content_h02jrk_k$ = function () {
    return this.content_1;
  };
  protoOf(Entry).dismiss_53zbra_k$ = function () {
    invokeLater_0(this.$this_1, DeferredComposablesState$Entry$dismiss$lambda(this.$this_1, this));
  };
  function DeferredComposablesState$invokeLater$lambda(this$0) {
    return function () {
      var tmp0_iterator = this$0.batchedCommands_1.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'com.varabyte.kobweb.silk.defer.DeferredComposablesState.invokeLater.<anonymous>.<anonymous>' call
        element();
      }
      this$0.batchedCommands_1.clear_j9egeb_k$();
      this$0.timeoutHandle_1 = -1;
      return Unit_getInstance();
    };
  }
  function DeferredComposablesState$append$lambda(this$0, $it) {
    return function () {
      this$0.entries_1.add_wl2rvy_k$($it);
      return Unit_getInstance();
    };
  }
  function DeferredComposablesState$forEach$lambda($tmp0_rcvr, $render, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.forEach_g6nq7p_k$($render, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function DeferredComposablesState() {
    this.timeoutHandle_1 = -1;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.batchedCommands_1 = ArrayList_init_$Create$_0();
    this.entries_1 = mutableStateListOf();
  }
  protoOf(DeferredComposablesState).append_nc4352_k$ = function () {
    // Inline function 'kotlin.also' call
    var this_0 = new Entry(this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.defer.DeferredComposablesState.append.<anonymous>' call
    invokeLater_0(this, DeferredComposablesState$append$lambda(this, this_0));
    return this_0;
  };
  protoOf(DeferredComposablesState).forEach_g6nq7p_k$ = function (render, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1296527038);
    var $dirty = $changed;
    if (isTraceInProgress()) {
      traceEventStart(-1296527038, $dirty, -1, 'com.varabyte.kobweb.silk.defer.DeferredComposablesState.forEach (Deferred.kt:31)');
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.entries_1.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.defer.DeferredComposablesState.forEach.<anonymous>' call
      render(element, $composer_0, 8 | 112 & $dirty << 3);
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(DeferredComposablesState$forEach$lambda(this, render, $changed));
    }
  };
  function renderWithDeferred(content, $composer, $changed) {
    _init_properties_Deferred_kt__im2yn();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(2037104680);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(2037104680, $dirty, -1, 'com.varabyte.kobweb.silk.defer.renderWithDeferred (Deferred.kt:75)');
      }
      var state = new DeferredComposablesState();
      var tmp = get_LocalDeferred().provides_3agxel_k$(state);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.defer.renderWithDeferred.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 564114664, true, renderWithDeferred$lambda(content, state));
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
      if (invalid ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'com.varabyte.kobweb.silk.defer.renderWithDeferred.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      CompositionLocalProvider(tmp, tmp0, $composer_0, 56);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(renderWithDeferred$lambda_0(content, $changed));
    }
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$DeferredKt$lambda_1$lambda_ynev9p(entry, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-300134205, $changed, -1, 'com.varabyte.kobweb.silk.defer.ComposableSingletons$DeferredKt.lambda-1.<anonymous> (Deferred.kt:83)');
    }
    var tmp0_safe_receiver = entry.content_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      renderWithDeferred(tmp0_safe_receiver, $composer_0, 0);
      tmp = Unit_getInstance();
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$DeferredKt() {
    ComposableSingletons$DeferredKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-300134205, false, ComposableSingletons$DeferredKt$lambda_1$lambda_ynev9p));
  }
  protoOf(ComposableSingletons$DeferredKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$DeferredKt_instance;
  function ComposableSingletons$DeferredKt_getInstance() {
    if (ComposableSingletons$DeferredKt_instance == null)
      new ComposableSingletons$DeferredKt();
    return ComposableSingletons$DeferredKt_instance;
  }
  function LocalDeferred$lambda() {
    _init_properties_Deferred_kt__im2yn();
    var message = 'Attempting to defer rendering without calling `renderWithDeferred`, a required pre-requisite.';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function _no_name_provided__qut3iv($deferredEntry) {
    this.$deferredEntry_1 = $deferredEntry;
  }
  protoOf(_no_name_provided__qut3iv).dispose_3nnxhr_k$ = function () {
    // Inline function 'com.varabyte.kobweb.silk.defer.deferRender.<anonymous>.<anonymous>' call
    this.$deferredEntry_1.dismiss_53zbra_k$();
  };
  function deferRender$lambda($deferredEntry) {
    return function ($this$DisposableEffect) {
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv($deferredEntry);
    };
  }
  function deferRender$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      deferRender($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function renderWithDeferred$lambda($content, $state) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(564114664, $changed, -1, 'com.varabyte.kobweb.silk.defer.renderWithDeferred.<anonymous> (Deferred.kt:78)');
        }
        $content($composer_0, 0);
        $state.forEach_g6nq7p_k$(ComposableSingletons$DeferredKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 70);
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
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function renderWithDeferred$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      renderWithDeferred($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var properties_initialized_Deferred_kt_1ab2bj;
  function _init_properties_Deferred_kt__im2yn() {
    if (!properties_initialized_Deferred_kt_1ab2bj) {
      properties_initialized_Deferred_kt_1ab2bj = true;
      LocalDeferred = staticCompositionLocalOf(LocalDeferred$lambda);
    }
  }
  function set_additionalSilkInitialization(_set____db54di) {
    _init_properties_InitSilk_kt__vukue3();
    additionalSilkInitialization = _set____db54di;
  }
  function get_additionalSilkInitialization() {
    _init_properties_InitSilk_kt__vukue3();
    return additionalSilkInitialization;
  }
  var additionalSilkInitialization;
  function InitSilkContext(config, stylesheet, theme) {
    this.config_1 = config;
    this.stylesheet_1 = stylesheet;
    this.theme_1 = theme;
  }
  protoOf(InitSilkContext).get_config_c0698r_k$ = function () {
    return this.config_1;
  };
  protoOf(InitSilkContext).get_stylesheet_hk204p_k$ = function () {
    return this.stylesheet_1;
  };
  protoOf(InitSilkContext).get_theme_iz24rk_k$ = function () {
    return this.theme_1;
  };
  function initSilk(additionalInit) {
    var tmp;
    if (additionalInit === VOID) {
      tmp = initSilk$lambda;
    } else {
      tmp = additionalInit;
    }
    additionalInit = tmp;
    _init_properties_InitSilk_kt__vukue3();
    var mutableTheme = new MutableSilkTheme();
    var config = new MutableSilkConfig();
    mutableTheme.registerComponentStyle_covb7k_k$(get_SpanTextStyle());
    var ctx = new InitSilkContext(config, SilkStylesheetInstance_getInstance(), mutableTheme);
    additionalInit(ctx);
    get_additionalSilkInitialization()(ctx);
    var displayStyles = listOf([get_DisplayIfAtLeastZeroStyle(), get_DisplayIfAtLeastSmStyle(), get_DisplayIfAtLeastMdStyle(), get_DisplayIfAtLeastLgStyle(), get_DisplayIfAtLeastXlStyle(), get_DisplayUntilZeroStyle(), get_DisplayUntilSmStyle(), get_DisplayUntilMdStyle(), get_DisplayUntilLgStyle(), get_DisplayUntilXlStyle()]);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = displayStyles.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>' call
      mutableTheme.registerComponentStyle_covb7k_k$(element);
    }
    var tmp_0 = window;
    invokeLater(tmp_0, initSilk$lambda_0(displayStyles));
    set_MutableSilkConfigInstance(config);
    set__SilkTheme(new ImmutableSilkTheme(mutableTheme));
    SilkStylesheetInstance_getInstance().registerStylesAndKeyframesInto_i9rw0p_k$(SilkStyleSheet_getInstance());
    get_SilkTheme().registerStyles_qysvzp_k$(SilkStyleSheet_getInstance());
  }
  function InitSilk() {
  }
  protoOf(InitSilk).equals = function (other) {
    if (!(other instanceof InitSilk))
      return false;
    other instanceof InitSilk || THROW_CCE();
    return true;
  };
  protoOf(InitSilk).hashCode = function () {
    return 0;
  };
  protoOf(InitSilk).toString = function () {
    return '@com.varabyte.kobweb.silk.init.InitSilk()';
  };
  function additionalSilkInitialization$lambda(it) {
    _init_properties_InitSilk_kt__vukue3();
    return Unit_getInstance();
  }
  function initSilk$lambda(it) {
    _init_properties_InitSilk_kt__vukue3();
    return Unit_getInstance();
  }
  function initSilk$lambda_0($displayStyles) {
    return function () {
      // Inline function 'kotlin.collections.map' call
      var this_0 = $displayStyles;
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>' call
        var tmp$ret$0 = '.' + item.get_name_woqyms_k$();
        destination.add_utx5q5_k$(tmp$ret$0);
      }
      var displayStyleSelectorNames = toSet(destination);
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterIsInstance' call
      // Inline function 'kotlin.collections.filterIsInstanceTo' call
      var this_1 = asList(document.styleSheets);
      var destination_0 = ArrayList_init_$Create$_0();
      var tmp0_iterator_0 = this_1.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator_0.next_20eer_k$();
        if (element instanceof CSSStyleSheet) {
          destination_0.add_utx5q5_k$(element);
        }
      }
      // Inline function 'kotlin.collections.filterTo' call
      var destination_1 = ArrayList_init_$Create$_0();
      var tmp0_iterator_1 = destination_0.iterator_jk1svi_k$();
      while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
        var element_0 = tmp0_iterator_1.next_20eer_k$();
        // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>' call
        if (element_0.href == null) {
          destination_1.add_utx5q5_k$(element_0);
        }
      }
      var tmp0_iterator_2 = destination_1.iterator_jk1svi_k$();
      while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
        var element_1 = tmp0_iterator_2.next_20eer_k$();
        // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.forEach' call
        // Inline function 'kotlin.collections.filter' call
        // Inline function 'kotlin.collections.filterIsInstance' call
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var this_2 = asList(element_1.cssRules);
        var destination_2 = ArrayList_init_$Create$_0();
        var tmp0_iterator_3 = this_2.iterator_jk1svi_k$();
        while (tmp0_iterator_3.hasNext_bitz1p_k$()) {
          var element_2 = tmp0_iterator_3.next_20eer_k$();
          if (element_2 instanceof CSSGroupingRule) {
            destination_2.add_utx5q5_k$(element_2);
          }
        }
        // Inline function 'kotlin.collections.filterTo' call
        var destination_3 = ArrayList_init_$Create$_0();
        var tmp0_iterator_4 = destination_2.iterator_jk1svi_k$();
        while (tmp0_iterator_4.hasNext_bitz1p_k$()) {
          var element_3 = tmp0_iterator_4.next_20eer_k$();
          // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>.<anonymous>' call
          if (element_3.type === CSSRule.MEDIA_RULE) {
            destination_3.add_utx5q5_k$(element_3);
          }
        }
        var tmp0_iterator_5 = destination_3.iterator_jk1svi_k$();
        while (tmp0_iterator_5.hasNext_bitz1p_k$()) {
          var element_4 = tmp0_iterator_5.next_20eer_k$();
          // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>.<anonymous>' call
          // Inline function 'kotlin.collections.forEach' call
          // Inline function 'kotlin.collections.filterIsInstance' call
          // Inline function 'kotlin.collections.filterIsInstanceTo' call
          var this_3 = asList(element_4.cssRules);
          var destination_4 = ArrayList_init_$Create$_0();
          var tmp0_iterator_6 = this_3.iterator_jk1svi_k$();
          while (tmp0_iterator_6.hasNext_bitz1p_k$()) {
            var element_5 = tmp0_iterator_6.next_20eer_k$();
            if (element_5 instanceof CSSStyleRule) {
              destination_4.add_utx5q5_k$(element_5);
            }
          }
          var tmp0_iterator_7 = destination_4.iterator_jk1svi_k$();
          while (tmp0_iterator_7.hasNext_bitz1p_k$()) {
            var element_6 = tmp0_iterator_7.next_20eer_k$();
            // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var selectorText = element_6.selectorText;
            var innerStyle = element_6.style;
            if (displayStyleSelectorNames.contains_aljjnj_k$(selectorText)) {
              var displayValue = innerStyle.getPropertyValue('display');
              innerStyle.setProperty('display', displayValue, 'important');
            }
          }
        }
      }
      return Unit_getInstance();
    };
  }
  var properties_initialized_InitSilk_kt_8x89gn;
  function _init_properties_InitSilk_kt__vukue3() {
    if (!properties_initialized_InitSilk_kt_8x89gn) {
      properties_initialized_InitSilk_kt_8x89gn = true;
      additionalSilkInitialization = additionalSilkInitialization$lambda;
    }
  }
  function set_MutableSilkConfigInstance(_set____db54di) {
    _init_properties_SilkConfig_kt__z9kok7();
    MutableSilkConfigInstance = _set____db54di;
  }
  function get_MutableSilkConfigInstance() {
    _init_properties_SilkConfig_kt__z9kok7();
    return MutableSilkConfigInstance;
  }
  var MutableSilkConfigInstance;
  function MutableSilkConfig() {
    this.initialColorMode_1 = ColorMode_LIGHT_getInstance();
  }
  protoOf(MutableSilkConfig).set_initialColorMode_lmyh2d_k$ = function (_set____db54di) {
    this.initialColorMode_1 = _set____db54di;
  };
  protoOf(MutableSilkConfig).get_initialColorMode_i1z52t_k$ = function () {
    return this.initialColorMode_1;
  };
  function Companion_4() {
    Companion_instance_4 = this;
  }
  protoOf(Companion_4).get_Instance_ljxvgi_k$ = function () {
    return get_MutableSilkConfigInstance();
  };
  var Companion_instance_4;
  function Companion_getInstance_9() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function SilkConfig() {
  }
  var properties_initialized_SilkConfig_kt_bfwaef;
  function _init_properties_SilkConfig_kt__z9kok7() {
    if (!properties_initialized_SilkConfig_kt_bfwaef) {
      properties_initialized_SilkConfig_kt_bfwaef = true;
      MutableSilkConfigInstance = new MutableSilkConfig();
    }
  }
  function SilkStylesheet$registerStyle$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_ip860b_k$(1471466098);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(1471466098, $changed, -1, 'com.varabyte.kobweb.silk.init.SilkStylesheet.registerStyle.<anonymous> (SilkStylesheet.kt:65)');
        tmp = Unit_getInstance();
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_getInstance();
      }
      $composer_0.endReplaceableGroup_ern0ak_k$();
      return tmp0;
    };
  }
  function SilkStylesheet() {
  }
  function _get_styles__6s6eeh($this) {
    return $this.styles_1;
  }
  function _get_keyframes__i12zvw($this) {
    return $this.keyframes_1;
  }
  function SilkStylesheetInstance() {
    SilkStylesheetInstance_instance = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.styles_1 = ArrayList_init_$Create$_0();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.keyframes_1 = LinkedHashMap_init_$Create$_0();
  }
  protoOf(SilkStylesheetInstance).registerStyle_3m3zng_k$ = function (cssSelector, extraModifiers, init) {
    this.styles_1.add_utx5q5_k$(new ComponentStyle_0(cssSelector, extraModifiers, null, init));
  };
  protoOf(SilkStylesheetInstance).registerKeyframes_n0b7tv_k$ = function (name, build) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this.keyframes_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!!(isInterface(this_0, Map) ? this_0 : THROW_CCE()).containsKey_aw81wo_k$(name)) {
      // Inline function 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.registerKeyframes.<anonymous>' call
      var message = 'User is registering duplicate keyframe name: ' + name;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    this.keyframes_1.put_4fpzoq_k$(name, build);
  };
  protoOf(SilkStylesheetInstance).registerStylesAndKeyframesInto_i9rw0p_k$ = function (siteStyleSheet) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.styles_1.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.registerStylesAndKeyframesInto.<anonymous>' call
      element.addStylesInto_7ve9v0_k$(siteStyleSheet, element.get_name_woqyms_k$());
    }
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.keyframes_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(this_0.get_size_woubt6_k$());
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_0 = this_0.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.registerStylesAndKeyframesInto.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var name = item.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var build = item.get_value_j01efc_k$();
      // Inline function 'kotlin.apply' call
      var this_1 = new KeyframesBuilder(ColorMode_LIGHT_getInstance());
      // Inline function 'kotlin.contracts.contract' call
      build(this_1);
      var lightBuilder = this_1;
      // Inline function 'kotlin.apply' call
      var this_2 = new KeyframesBuilder(ColorMode_DARK_getInstance());
      // Inline function 'kotlin.contracts.contract' call
      build(this_2);
      var darkBuilder = this_2;
      if (lightBuilder.equals(darkBuilder)) {
        lightBuilder.addKeyframesIntoStylesheet_3orify_k$(siteStyleSheet, name);
      } else {
        lightBuilder.addKeyframesIntoStylesheet_3orify_k$(siteStyleSheet, suffixedWith(name, ColorMode_LIGHT_getInstance()));
        darkBuilder.addKeyframesIntoStylesheet_3orify_k$(siteStyleSheet, suffixedWith(name, ColorMode_DARK_getInstance()));
      }
      destination.add_utx5q5_k$(Unit_getInstance());
    }
  };
  var SilkStylesheetInstance_instance;
  function SilkStylesheetInstance_getInstance() {
    if (SilkStylesheetInstance_instance == null)
      new SilkStylesheetInstance();
    return SilkStylesheetInstance_instance;
  }
  function registerStyleBase(_this__u8e3s4, cssSelector, extraModifiers, init) {
    extraModifiers = extraModifiers === VOID ? Companion_getInstance_0() : extraModifiers;
    registerStyleBase_0(_this__u8e3s4, cssSelector, registerStyleBase$lambda(extraModifiers), init);
  }
  function registerStyleBase_0(_this__u8e3s4, cssSelector, extraModifiers, init) {
    _this__u8e3s4.registerStyle_3m3zng_k$(cssSelector, extraModifiers, registerStyleBase$lambda_0(init));
  }
  function registerStyleBase$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_ip860b_k$(1076693533);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(1076693533, $changed, -1, 'com.varabyte.kobweb.silk.init.registerStyleBase.<anonymous> (SilkStylesheet.kt:130)');
        tmp = Unit_getInstance();
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_getInstance();
      }
      $composer_0.endReplaceableGroup_ern0ak_k$();
      return tmp0;
    };
  }
  function registerStyleBase$lambda$lambda($init) {
    return function () {
      return $init();
    };
  }
  function registerStyleBase$lambda_0($init) {
    return function ($this$registerStyle) {
      $this$registerStyle.base_y8uu8g_k$(registerStyleBase$lambda$lambda($init));
      return Unit_getInstance();
    };
  }
  function set__SilkTheme(_set____db54di) {
    _SilkTheme = _set____db54di;
  }
  function get__SilkTheme() {
    return _SilkTheme;
  }
  var _SilkTheme;
  function get_SilkTheme() {
    var tmp0_elvis_lhs = _SilkTheme;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = "You can't access SilkTheme before first calling SilkApp";
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_mutableSilkTheme__kqd2n1($this) {
    return $this.mutableSilkTheme_1;
  }
  function _get__componentStyles__eema7p($this) {
    return $this._componentStyles_1;
  }
  function ImmutableSilkTheme(mutableSilkTheme) {
    this.mutableSilkTheme_1 = mutableSilkTheme;
    var tmp = this;
    var tmp_0 = this.mutableSilkTheme_1.palettes_1;
    tmp.palettes_1 = isInterface(tmp_0, Palettes) ? tmp_0 : THROW_CCE();
    this.breakpoints_1 = this.mutableSilkTheme_1.breakpoints_1;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1._componentStyles_1 = LinkedHashMap_init_$Create$_0();
    this.componentStyles_1 = this._componentStyles_1;
  }
  protoOf(ImmutableSilkTheme).get_palettes_f7ft27_k$ = function () {
    return this.palettes_1;
  };
  protoOf(ImmutableSilkTheme).get_palette_vetkex_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1777229, $changed, -1, 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.<get-palette> (SilkTheme.kt:350)');
    }
    var tmp0 = this.palettes_1.get_4bsmki_k$(Companion_getInstance_10().get_current_2iudd5_k$($composer_0, 6));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return tmp0;
  };
  protoOf(ImmutableSilkTheme).get_breakpoints_k65pzb_k$ = function () {
    return this.breakpoints_1;
  };
  protoOf(ImmutableSilkTheme).get_componentStyles_qanhau_k$ = function () {
    return this.componentStyles_1;
  };
  protoOf(ImmutableSilkTheme).registerStyles_qysvzp_k$ = function (componentStyleSheet) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(_SilkTheme == null)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.mutableSilkTheme_1.componentStyles_1.get_values_ksazhn_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStyles.<anonymous>' call
      var classNames = element.addStylesInto_gj0mv0_k$(componentStyleSheet);
      // Inline function 'kotlin.collections.set' call
      var this_0 = this._componentStyles_1;
      var key = element.get_name_woqyms_k$();
      var value = element.intoImmutableStyle_g690ow_k$(classNames);
      this_0.put_4fpzoq_k$(key, value);
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.filterIsInstance' call
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var this_1 = this.mutableSilkTheme_1.componentVariants_1.get_values_ksazhn_k$();
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator_0 = this_1.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      if (element_0 instanceof SimpleComponentVariant) {
        destination.add_utx5q5_k$(element_0);
      }
    }
    var tmp0_iterator_1 = destination.iterator_jk1svi_k$();
    while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
      var element_1 = tmp0_iterator_1.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStyles.<anonymous>' call
      var classNames_0 = element_1.addStylesInto_gj0mv0_k$(componentStyleSheet);
      // Inline function 'kotlin.collections.set' call
      var this_2 = this._componentStyles_1;
      var key_0 = element_1.get_style_iyqetk_k$().get_name_woqyms_k$();
      var value_0 = element_1.intoImmutableStyle_g690ow_k$(classNames_0);
      this_2.put_4fpzoq_k$(key_0, value_0);
    }
  };
  function _get__componentStyles__eema7p_0($this) {
    return $this._componentStyles_1;
  }
  function _get_overriddenStyles__hyvinf($this) {
    return $this.overriddenStyles_1;
  }
  function _get__componentVariants__og4i75($this) {
    return $this._componentVariants_1;
  }
  function _get_overriddenVariants__wbvyw9($this) {
    return $this.overriddenVariants_1;
  }
  function MutableSilkTheme$replaceComponentStyle$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_ip860b_k$(-1131711582);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-1131711582, $changed, -1, 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.replaceComponentStyle.<anonymous> (SilkTheme.kt:99)');
        tmp = Unit_getInstance();
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_getInstance();
      }
      $composer_0.endReplaceableGroup_ern0ak_k$();
      return tmp0;
    };
  }
  function MutableSilkTheme$replaceComponentVariant$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_ip860b_k$(939054606);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(939054606, $changed, -1, 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.replaceComponentVariant.<anonymous> (SilkTheme.kt:152)');
        tmp = Unit_getInstance();
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_getInstance();
      }
      $composer_0.endReplaceableGroup_ern0ak_k$();
      return tmp0;
    };
  }
  function MutableSilkTheme() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp._componentStyles_1 = LinkedHashMap_init_$Create$_0();
    this.componentStyles_1 = this._componentStyles_1;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_0.overriddenStyles_1 = LinkedHashSet_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1._componentVariants_1 = LinkedHashMap_init_$Create$_0();
    this.componentVariants_1 = this._componentVariants_1;
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_2.overriddenVariants_1 = LinkedHashSet_init_$Create$();
    this.palettes_1 = new MutablePalettes();
    this.breakpoints_1 = BreakpointSizes(get_cssRem(30), get_cssRem(48), get_cssRem(62), get_cssRem(80));
  }
  protoOf(MutableSilkTheme).get_componentStyles_qanhau_k$ = function () {
    return this.componentStyles_1;
  };
  protoOf(MutableSilkTheme).get_componentVariants_oc6iq_k$ = function () {
    return this.componentVariants_1;
  };
  protoOf(MutableSilkTheme).get_palettes_f7ft27_k$ = function () {
    return this.palettes_1;
  };
  protoOf(MutableSilkTheme).set_breakpoints_xlpvkc_k$ = function (_set____db54di) {
    this.breakpoints_1 = _set____db54di;
  };
  protoOf(MutableSilkTheme).get_breakpoints_k65pzb_k$ = function () {
    return this.breakpoints_1;
  };
  protoOf(MutableSilkTheme).registerComponentStyle_covb7k_k$ = function (style) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerComponentStyle.<anonymous>' call
    var it = this.componentStyles_1.get_wei43m_k$(style.get_name_woqyms_k$());
    // Inline function 'kotlin.contracts.contract' call
    if (!(it == null ? true : it === style)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerComponentStyle.<anonymous>' call
      var message = trimIndent('\n                Attempting to register a second style with a name that\'s already used: "' + style.get_name_woqyms_k$() + '"\n\n                If this was an intentional override, you should use `replaceComponentStyle` instead.\n            ');
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    var this_0 = this._componentStyles_1;
    var key = style.get_name_woqyms_k$();
    this_0.put_4fpzoq_k$(key, style);
  };
  protoOf(MutableSilkTheme).replaceComponentStyle_amraq5_k$ = function (style, extraModifiers, init) {
    this.replaceComponentStyle_9jmgrf_k$(style, MutableSilkTheme$replaceComponentStyle$lambda(extraModifiers), init);
  };
  protoOf(MutableSilkTheme).replaceComponentStyle$default_v7tija_k$ = function (style, extraModifiers, init, $super) {
    extraModifiers = extraModifiers === VOID ? Companion_getInstance_0() : extraModifiers;
    var tmp;
    if ($super === VOID) {
      this.replaceComponentStyle_amraq5_k$(style, extraModifiers, init);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.replaceComponentStyle_amraq5_k$.call(this, style, extraModifiers, init);
    }
    return tmp;
  };
  protoOf(MutableSilkTheme).replaceComponentStyle_9jmgrf_k$ = function (style, extraModifiers, init) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.collections.contains' call
    var this_0 = this.componentStyles_1;
    // Inline function 'kotlin.collections.containsKey' call
    var key = style.get_name_woqyms_k$();
    // Inline function 'kotlin.contracts.contract' call
    if (!(isInterface(this_0, Map) ? this_0 : THROW_CCE()).containsKey_aw81wo_k$(key)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.replaceComponentStyle.<anonymous>' call
      var message = 'Attempting to replace a style that was never registered: "' + style.get_name_woqyms_k$() + '"';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.overriddenStyles_1.add_utx5q5_k$(style.get_name_woqyms_k$())) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.replaceComponentStyle.<anonymous>' call
      var message_0 = 'Attempting to override style "' + style.get_name_woqyms_k$() + '" twice';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.collections.set' call
    var this_1 = this._componentStyles_1;
    var key_0 = style.get_name_woqyms_k$();
    var value = new ComponentStyle_0(style.get_nameWithoutPrefix_lto6iu_k$(), extraModifiers, style.get_prefix_i78za3_k$(), init);
    this_1.put_4fpzoq_k$(key_0, value);
  };
  protoOf(MutableSilkTheme).registerComponentVariants_gvd8pt_k$ = function (variants) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.filterIsInstance' call
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var destination = ArrayList_init_$Create$_0();
    var inductionVariable = 0;
    var last = variants.length;
    while (inductionVariable < last) {
      var element = variants[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (element instanceof SimpleComponentVariant) {
        destination.add_utx5q5_k$(element);
      }
    }
    var tmp0_iterator = destination.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerComponentVariants.<anonymous>' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerComponentVariants.<anonymous>.<anonymous>' call
      var it = this.componentVariants_1.get_wei43m_k$(element_0.get_style_iyqetk_k$().get_name_woqyms_k$());
      // Inline function 'kotlin.contracts.contract' call
      if (!(it == null ? true : it === element_0)) {
        // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerComponentVariants.<anonymous>.<anonymous>' call
        var message = trimIndent('\n                Attempting to register a second variant with a name that\'s already used: "' + element_0.get_style_iyqetk_k$().get_name_woqyms_k$() + "\"\n\n                This isn't allowed. Please choose a different name. If there's a usecase for this I'm unaware of,\n                consider filing an issue at https://github.com/varabyte/kobweb/issues\n            ");
        throw IllegalStateException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.collections.set' call
      var this_0 = this._componentVariants_1;
      var key = element_0.get_style_iyqetk_k$().get_name_woqyms_k$();
      this_0.put_4fpzoq_k$(key, element_0);
    }
  };
  protoOf(MutableSilkTheme).replaceComponentVariant_d7hibx_k$ = function (variant, extraModifiers, init) {
    this.replaceComponentVariant_rjqjs5_k$(variant, MutableSilkTheme$replaceComponentVariant$lambda(extraModifiers), init);
  };
  protoOf(MutableSilkTheme).replaceComponentVariant$default_663846_k$ = function (variant, extraModifiers, init, $super) {
    extraModifiers = extraModifiers === VOID ? Companion_getInstance_0() : extraModifiers;
    var tmp;
    if ($super === VOID) {
      this.replaceComponentVariant_d7hibx_k$(variant, extraModifiers, init);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.replaceComponentVariant_d7hibx_k$.call(this, variant, extraModifiers, init);
    }
    return tmp;
  };
  protoOf(MutableSilkTheme).replaceComponentVariant_rjqjs5_k$ = function (variant, extraModifiers, init) {
    var tmp0_elvis_lhs = variant instanceof SimpleComponentVariant ? variant : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'You can only replace variants created by `addVariant` or `addVariantBase`.';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var variant_0 = tmp;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.collections.contains' call
    var this_0 = this.componentVariants_1;
    // Inline function 'kotlin.collections.containsKey' call
    var key = variant_0.get_style_iyqetk_k$().get_name_woqyms_k$();
    // Inline function 'kotlin.contracts.contract' call
    if (!(isInterface(this_0, Map) ? this_0 : THROW_CCE()).containsKey_aw81wo_k$(key)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.replaceComponentVariant.<anonymous>' call
      var message_0 = 'Attempting to replace a variant that was never registered: "' + variant_0.get_style_iyqetk_k$().get_name_woqyms_k$() + '"';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.overriddenVariants_1.add_utx5q5_k$(variant_0.get_style_iyqetk_k$().get_name_woqyms_k$())) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.replaceComponentVariant.<anonymous>' call
      var message_1 = 'Attempting to override variant "' + variant_0.get_style_iyqetk_k$().get_name_woqyms_k$() + '" twice';
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.collections.set' call
    var this_1 = this._componentVariants_1;
    var key_0 = variant_0.get_style_iyqetk_k$().get_name_woqyms_k$();
    var value = variant_0.get_baseStyle_lpil3d_k$().addVariant_meui_k$(variant_0.get_name_woqyms_k$(), extraModifiers, init);
    this_1.put_4fpzoq_k$(key_0, value);
  };
  function modifyComponentStyleBase(_this__u8e3s4, style, extraModifiers, init) {
    extraModifiers = extraModifiers === VOID ? Companion_getInstance_0() : extraModifiers;
    modifyComponentStyleBase_0(_this__u8e3s4, style, modifyComponentStyleBase$lambda(extraModifiers), init);
  }
  function modifyComponentStyleBase_0(_this__u8e3s4, style, extraModifiers, init) {
    modifyComponentStyle(_this__u8e3s4, style, extraModifiers, modifyComponentStyleBase$lambda_0(init));
  }
  function modifyComponentStyle(_this__u8e3s4, style, extraModifiers, init) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.collections.contains' call
    var this_0 = _this__u8e3s4.componentStyles_1;
    // Inline function 'kotlin.collections.containsKey' call
    var key = style.get_name_woqyms_k$();
    // Inline function 'kotlin.contracts.contract' call
    if (!(isInterface(this_0, Map) ? this_0 : THROW_CCE()).containsKey_aw81wo_k$(key)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.modifyComponentStyle.<anonymous>' call
      var message = 'Attempting to modify a style that was never registered: "' + style.get_name_woqyms_k$() + '"';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var existingExtraModifiers = style.get_extraModifiers_h2rw6j_k$();
    var existingInit = style.get_init_woo195_k$();
    var tmp = modifyComponentStyle$lambda(existingExtraModifiers, extraModifiers);
    _this__u8e3s4.replaceComponentStyle_9jmgrf_k$(style, tmp, modifyComponentStyle$lambda_0(existingInit, init));
  }
  function modifyComponentStyleBase$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_ip860b_k$(-1714796074);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-1714796074, $changed, -1, 'com.varabyte.kobweb.silk.theme.modifyComponentStyleBase.<anonymous> (SilkTheme.kt:264)');
        tmp = Unit_getInstance();
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_getInstance();
      }
      $composer_0.endReplaceableGroup_ern0ak_k$();
      return tmp0;
    };
  }
  function modifyComponentStyleBase$lambda$lambda($this_modifyComponentStyle, $init) {
    return function () {
      // Inline function 'kotlin.let' call
      var this_0 = new ComponentBaseModifier($this_modifyComponentStyle.get_colorMode_trbg8z_k$());
      // Inline function 'kotlin.contracts.contract' call
      return $init(this_0);
    };
  }
  function modifyComponentStyleBase$lambda_0($init) {
    return function ($this$modifyComponentStyle) {
      $this$modifyComponentStyle.base_y8uu8g_k$(modifyComponentStyleBase$lambda$lambda($this$modifyComponentStyle, $init));
      return Unit_getInstance();
    };
  }
  function modifyComponentStyle$lambda($existingExtraModifiers, $extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_ip860b_k$(-1936736259);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-1936736259, $changed, -1, 'com.varabyte.kobweb.silk.theme.modifyComponentStyle.<anonymous> (SilkTheme.kt:252)');
        tmp = Unit_getInstance();
      }
      var tmp0 = $existingExtraModifiers($composer_0, 0).then_mmfvo6_k$($extraModifiers($composer_0, 0));
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_getInstance();
      }
      $composer_0.endReplaceableGroup_ern0ak_k$();
      return tmp0;
    };
  }
  function modifyComponentStyle$lambda_0($existingInit, $init) {
    return function ($this$replaceComponentStyle) {
      $existingInit($this$replaceComponentStyle);
      $init($this$replaceComponentStyle);
      return Unit_getInstance();
    };
  }
  function toMinWidthQuery(_this__u8e3s4) {
    return new MediaFeature('min-width', toWidth(_this__u8e3s4));
  }
  function toWidth(_this__u8e3s4) {
    var tmp0_safe_receiver = toValue(_this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_width_j0q4yl_k$();
    return tmp1_elvis_lhs == null ? get_px(0) : tmp1_elvis_lhs;
  }
  function toValue(_this__u8e3s4) {
    var tmp;
    switch (_this__u8e3s4.get_ordinal_ip24qg_k$()) {
      case 0:
        tmp = null;
        break;
      case 1:
        tmp = get_SilkTheme().get_breakpoints_k65pzb_k$().get_sm_kntnod_k$();
        break;
      case 2:
        tmp = get_SilkTheme().get_breakpoints_k65pzb_k$().get_md_kntnts_k$();
        break;
      case 3:
        tmp = get_SilkTheme().get_breakpoints_k65pzb_k$().get_lg_kntnuk_k$();
        break;
      case 4:
        tmp = get_SilkTheme().get_breakpoints_k65pzb_k$().get_xl_kntnk3_k$();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function get_rootColorModeState() {
    _init_properties_ColorMode_kt__lz79sc();
    // Inline function 'kotlin.getValue' call
    var this_0 = rootColorModeState$delegate;
    rootColorModeState$factory();
    return this_0.get_value_j01efc_k$();
  }
  var rootColorModeState$delegate;
  function get_LocalColorMode() {
    _init_properties_ColorMode_kt__lz79sc();
    return LocalColorMode;
  }
  var LocalColorMode;
  function suffixedWith(_this__u8e3s4, colorMode) {
    _init_properties_ColorMode_kt__lz79sc();
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4 + '_' + colorMode.get_name_woqyms_k$().toLowerCase();
  }
  var ColorMode_LIGHT_instance;
  var ColorMode_DARK_instance;
  function Companion_5() {
    Companion_instance_5 = this;
  }
  protoOf(Companion_5).get_currentState_dmzs7c_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-974960061);
    if (isTraceInProgress()) {
      traceEventStart(-974960061, $changed, -1, 'com.varabyte.kobweb.silk.theme.colors.ColorMode.Companion.<get-currentState> (ColorMode.kt:23)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalColorMode();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_ebzcrh_k$(this_0);
    sourceInformationMarkerEnd($composer_1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  };
  protoOf(Companion_5).get_current_2iudd5_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-754713740, $changed, -1, 'com.varabyte.kobweb.silk.theme.colors.ColorMode.Companion.<get-current> (ColorMode.kt:33)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalColorMode();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_ebzcrh_k$(this_0);
    sourceInformationMarkerEnd($composer_1);
    var tmp0_0 = tmp0.get_value_j01efc_k$();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return tmp0_0;
  };
  var Companion_instance_5;
  function Companion_getInstance_10() {
    ColorMode_initEntries();
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function values_0() {
    return [ColorMode_LIGHT_getInstance(), ColorMode_DARK_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'LIGHT':
        return ColorMode_LIGHT_getInstance();
      case 'DARK':
        return ColorMode_DARK_getInstance();
      default:
        ColorMode_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var ColorMode_entriesInitialized;
  function ColorMode_initEntries() {
    if (ColorMode_entriesInitialized)
      return Unit_getInstance();
    ColorMode_entriesInitialized = true;
    ColorMode_LIGHT_instance = new ColorMode('LIGHT', 0);
    ColorMode_DARK_instance = new ColorMode('DARK', 1);
    Companion_getInstance_10();
  }
  var $ENTRIES_0;
  function ColorMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(ColorMode).get_isLight_zemp0j_k$ = function () {
    return this.equals(ColorMode_LIGHT_getInstance());
  };
  protoOf(ColorMode).get_isDark_evw91l_k$ = function () {
    return this.equals(ColorMode_DARK_getInstance());
  };
  protoOf(ColorMode).get_opposite_ywslzk_k$ = function () {
    var tmp;
    switch (this.get_ordinal_ip24qg_k$()) {
      case 0:
        tmp = ColorMode_DARK_getInstance();
        break;
      case 1:
        tmp = ColorMode_LIGHT_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(ColorMode).provide_53xuu7_k$ = function () {
    return get_LocalColorMode().provides_3agxel_k$(mutableStateOf(this));
  };
  function rootColorModeState$delegate$lambda() {
    _init_properties_ColorMode_kt__lz79sc();
    return mutableStateOf(Companion_getInstance_9().get_Instance_ljxvgi_k$().get_initialColorMode_i1z52t_k$());
  }
  function LocalColorMode$lambda() {
    _init_properties_ColorMode_kt__lz79sc();
    return get_rootColorModeState();
  }
  function ColorMode_LIGHT_getInstance() {
    ColorMode_initEntries();
    return ColorMode_LIGHT_instance;
  }
  function ColorMode_DARK_getInstance() {
    ColorMode_initEntries();
    return ColorMode_DARK_instance;
  }
  function rootColorModeState$factory() {
    return getPropertyCallableRef('rootColorModeState', 0, KProperty0, function () {
      return get_rootColorModeState();
    }, null);
  }
  var properties_initialized_ColorMode_kt_kbhp7u;
  function _init_properties_ColorMode_kt__lz79sc() {
    if (!properties_initialized_ColorMode_kt_kbhp7u) {
      properties_initialized_ColorMode_kt_kbhp7u = true;
      rootColorModeState$delegate = lazy(rootColorModeState$delegate$lambda);
      LocalColorMode = compositionLocalOf(VOID, LocalColorMode$lambda);
    }
  }
  function Monochrome() {
    Monochrome_instance = this;
    this._50__1 = Companion_getInstance_3().rgb_6orfmz_k$(15921906);
    this._100__1 = Companion_getInstance_3().rgb_6orfmz_k$(15132390);
    this._200__1 = Companion_getInstance_3().rgb_6orfmz_k$(13421772);
    this._300__1 = Companion_getInstance_3().rgb_6orfmz_k$(11776947);
    this._400__1 = Companion_getInstance_3().rgb_6orfmz_k$(10066329);
    this._500__1 = Companion_getInstance_3().rgb_6orfmz_k$(8421504);
    this._600__1 = Companion_getInstance_3().rgb_6orfmz_k$(6710886);
    this._700__1 = Companion_getInstance_3().rgb_6orfmz_k$(5066061);
    this._800__1 = Companion_getInstance_3().rgb_6orfmz_k$(3355443);
    this._900__1 = Companion_getInstance_3().rgb_6orfmz_k$(1710618);
  }
  protoOf(Monochrome).get__50_18jcbz_k$ = function () {
    return this._50__1;
  };
  protoOf(Monochrome).get__100_wogcqj_k$ = function () {
    return this._100__1;
  };
  protoOf(Monochrome).get__200_wogdh8_k$ = function () {
    return this._200__1;
  };
  protoOf(Monochrome).get__300_woge7x_k$ = function () {
    return this._300__1;
  };
  protoOf(Monochrome).get__400_wogeym_k$ = function () {
    return this._400__1;
  };
  protoOf(Monochrome).get__500_wogfpb_k$ = function () {
    return this._500__1;
  };
  protoOf(Monochrome).get__600_woggg0_k$ = function () {
    return this._600__1;
  };
  protoOf(Monochrome).get__700_wogh6p_k$ = function () {
    return this._700__1;
  };
  protoOf(Monochrome).get__800_woghxe_k$ = function () {
    return this._800__1;
  };
  protoOf(Monochrome).get__900_wogio3_k$ = function () {
    return this._900__1;
  };
  var Monochrome_instance;
  function Monochrome_getInstance() {
    if (Monochrome_instance == null)
      new Monochrome();
    return Monochrome_instance;
  }
  function Red() {
    Red_instance = this;
    this._50__1 = Companion_getInstance_3().rgb_6orfmz_k$(16772078);
    this._100__1 = Companion_getInstance_3().rgb_6orfmz_k$(16764370);
    this._200__1 = Companion_getInstance_3().rgb_6orfmz_k$(15702682);
    this._300__1 = Companion_getInstance_3().rgb_6orfmz_k$(15037299);
    this._400__1 = Companion_getInstance_3().rgb_6orfmz_k$(15684432);
    this._500__1 = Companion_getInstance_3().rgb_6orfmz_k$(16007990);
    this._600__1 = Companion_getInstance_3().rgb_6orfmz_k$(15022389);
    this._700__1 = Companion_getInstance_3().rgb_6orfmz_k$(13840175);
    this._800__1 = Companion_getInstance_3().rgb_6orfmz_k$(12986408);
    this._900__1 = Companion_getInstance_3().rgb_6orfmz_k$(12000284);
  }
  protoOf(Red).get__50_18jcbz_k$ = function () {
    return this._50__1;
  };
  protoOf(Red).get__100_wogcqj_k$ = function () {
    return this._100__1;
  };
  protoOf(Red).get__200_wogdh8_k$ = function () {
    return this._200__1;
  };
  protoOf(Red).get__300_woge7x_k$ = function () {
    return this._300__1;
  };
  protoOf(Red).get__400_wogeym_k$ = function () {
    return this._400__1;
  };
  protoOf(Red).get__500_wogfpb_k$ = function () {
    return this._500__1;
  };
  protoOf(Red).get__600_woggg0_k$ = function () {
    return this._600__1;
  };
  protoOf(Red).get__700_wogh6p_k$ = function () {
    return this._700__1;
  };
  protoOf(Red).get__800_woghxe_k$ = function () {
    return this._800__1;
  };
  protoOf(Red).get__900_wogio3_k$ = function () {
    return this._900__1;
  };
  var Red_instance;
  function Red_getInstance() {
    if (Red_instance == null)
      new Red();
    return Red_instance;
  }
  function Pink() {
    Pink_instance = this;
    this._50__1 = Companion_getInstance_3().rgb_6orfmz_k$(16573676);
    this._100__1 = Companion_getInstance_3().rgb_6orfmz_k$(16301008);
    this._200__1 = Companion_getInstance_3().rgb_6orfmz_k$(16027569);
    this._300__1 = Companion_getInstance_3().rgb_6orfmz_k$(15753874);
    this._400__1 = Companion_getInstance_3().rgb_6orfmz_k$(15483002);
    this._500__1 = Companion_getInstance_3().rgb_6orfmz_k$(15277667);
    this._600__1 = Companion_getInstance_3().rgb_6orfmz_k$(14162784);
    this._700__1 = Companion_getInstance_3().rgb_6orfmz_k$(12720219);
    this._800__1 = Companion_getInstance_3().rgb_6orfmz_k$(11342935);
    this._900__1 = Companion_getInstance_3().rgb_6orfmz_k$(8916559);
  }
  protoOf(Pink).get__50_18jcbz_k$ = function () {
    return this._50__1;
  };
  protoOf(Pink).get__100_wogcqj_k$ = function () {
    return this._100__1;
  };
  protoOf(Pink).get__200_wogdh8_k$ = function () {
    return this._200__1;
  };
  protoOf(Pink).get__300_woge7x_k$ = function () {
    return this._300__1;
  };
  protoOf(Pink).get__400_wogeym_k$ = function () {
    return this._400__1;
  };
  protoOf(Pink).get__500_wogfpb_k$ = function () {
    return this._500__1;
  };
  protoOf(Pink).get__600_woggg0_k$ = function () {
    return this._600__1;
  };
  protoOf(Pink).get__700_wogh6p_k$ = function () {
    return this._700__1;
  };
  protoOf(Pink).get__800_woghxe_k$ = function () {
    return this._800__1;
  };
  protoOf(Pink).get__900_wogio3_k$ = function () {
    return this._900__1;
  };
  var Pink_instance;
  function Pink_getInstance() {
    if (Pink_instance == null)
      new Pink();
    return Pink_instance;
  }
  function Purple() {
    Purple_instance = this;
    this._50__1 = Companion_getInstance_3().rgb_6orfmz_k$(15984117);
    this._100__1 = Companion_getInstance_3().rgb_6orfmz_k$(14794471);
    this._200__1 = Companion_getInstance_3().rgb_6orfmz_k$(13538264);
    this._300__1 = Companion_getInstance_3().rgb_6orfmz_k$(12216520);
    this._400__1 = Companion_getInstance_3().rgb_6orfmz_k$(11225020);
    this._500__1 = Companion_getInstance_3().rgb_6orfmz_k$(10233776);
    this._600__1 = Companion_getInstance_3().rgb_6orfmz_k$(9315498);
    this._700__1 = Companion_getInstance_3().rgb_6orfmz_k$(8069026);
    this._800__1 = Companion_getInstance_3().rgb_6orfmz_k$(6953882);
    this._900__1 = Companion_getInstance_3().rgb_6orfmz_k$(4854924);
  }
  protoOf(Purple).get__50_18jcbz_k$ = function () {
    return this._50__1;
  };
  protoOf(Purple).get__100_wogcqj_k$ = function () {
    return this._100__1;
  };
  protoOf(Purple).get__200_wogdh8_k$ = function () {
    return this._200__1;
  };
  protoOf(Purple).get__300_woge7x_k$ = function () {
    return this._300__1;
  };
  protoOf(Purple).get__400_wogeym_k$ = function () {
    return this._400__1;
  };
  protoOf(Purple).get__500_wogfpb_k$ = function () {
    return this._500__1;
  };
  protoOf(Purple).get__600_woggg0_k$ = function () {
    return this._600__1;
  };
  protoOf(Purple).get__700_wogh6p_k$ = function () {
    return this._700__1;
  };
  protoOf(Purple).get__800_woghxe_k$ = function () {
    return this._800__1;
  };
  protoOf(Purple).get__900_wogio3_k$ = function () {
    return this._900__1;
  };
  var Purple_instance;
  function Purple_getInstance() {
    if (Purple_instance == null)
      new Purple();
    return Purple_instance;
  }
  function DeepPurple() {
    DeepPurple_instance = this;
    this._50__1 = Companion_getInstance_3().rgb_6orfmz_k$(15591414);
    this._100__1 = Companion_getInstance_3().rgb_6orfmz_k$(13747433);
    this._200__1 = Companion_getInstance_3().rgb_6orfmz_k$(11771355);
    this._300__1 = Companion_getInstance_3().rgb_6orfmz_k$(9795021);
    this._400__1 = Companion_getInstance_3().rgb_6orfmz_k$(8280002);
    this._500__1 = Companion_getInstance_3().rgb_6orfmz_k$(6765239);
    this._600__1 = Companion_getInstance_3().rgb_6orfmz_k$(6174129);
    this._700__1 = Companion_getInstance_3().rgb_6orfmz_k$(5320104);
    this._800__1 = Companion_getInstance_3().rgb_6orfmz_k$(4532128);
    this._900__1 = Companion_getInstance_3().rgb_6orfmz_k$(3218322);
  }
  protoOf(DeepPurple).get__50_18jcbz_k$ = function () {
    return this._50__1;
  };
  protoOf(DeepPurple).get__100_wogcqj_k$ = function () {
    return this._100__1;
  };
  protoOf(DeepPurple).get__200_wogdh8_k$ = function () {
    return this._200__1;
  };
  protoOf(DeepPurple).get__300_woge7x_k$ = function () {
    return this._300__1;
  };
  protoOf(DeepPurple).get__400_wogeym_k$ = function () {
    return this._400__1;
  };
  protoOf(DeepPurple).get__500_wogfpb_k$ = function () {
    return this._500__1;
  };
  protoOf(DeepPurple).get__600_woggg0_k$ = function () {
    return this._600__1;
  };
  protoOf(DeepPurple).get__700_wogh6p_k$ = function () {
    return this._700__1;
  };
  protoOf(DeepPurple).get__800_woghxe_k$ = function () {
    return this._800__1;
  };
  protoOf(DeepPurple).get__900_wogio3_k$ = function () {
    return this._900__1;
  };
  var DeepPurple_instance;
  function DeepPurple_getInstance() {
    if (DeepPurple_instance == null)
      new DeepPurple();
    return DeepPurple_instance;
  }
  function Indigo() {
    Indigo_instance = this;
    this._50__1 = Companion_getInstance_3().rgb_6orfmz_k$(15264502);
    this._100__1 = Companion_getInstance_3().rgb_6orfmz_k$(12962537);
    this._200__1 = Companion_getInstance_3().rgb_6orfmz_k$(10463450);
    this._300__1 = Companion_getInstance_3().rgb_6orfmz_k$(7964363);
    this._400__1 = Companion_getInstance_3().rgb_6orfmz_k$(6056896);
    this._500__1 = Companion_getInstance_3().rgb_6orfmz_k$(4149685);
    this._600__1 = Companion_getInstance_3().rgb_6orfmz_k$(3754411);
    this._700__1 = Companion_getInstance_3().rgb_6orfmz_k$(3162015);
    this._800__1 = Companion_getInstance_3().rgb_6orfmz_k$(2635155);
    this._900__1 = Companion_getInstance_3().rgb_6orfmz_k$(1713022);
  }
  protoOf(Indigo).get__50_18jcbz_k$ = function () {
    return this._50__1;
  };
  protoOf(Indigo).get__100_wogcqj_k$ = function () {
    return this._100__1;
  };
  protoOf(Indigo).get__200_wogdh8_k$ = function () {
    return this._200__1;
  };
  protoOf(Indigo).get__300_woge7x_k$ = function () {
    return this._300__1;
  };
  protoOf(Indigo).get__400_wogeym_k$ = function () {
    return this._400__1;
  };
  protoOf(Indigo).get__500_wogfpb_k$ = function () {
    return this._500__1;
  };
  protoOf(Indigo).get__600_woggg0_k$ = function () {
    return this._600__1;
  };
  protoOf(Indigo).get__700_wogh6p_k$ = function () {
    return this._700__1;
  };
  protoOf(Indigo).get__800_woghxe_k$ = function () {
    return this._800__1;
  };
  protoOf(Indigo).get__900_wogio3_k$ = function () {
    return this._900__1;
  };
  var Indigo_instance;
  function Indigo_getInstance() {
    if (Indigo_instance == null)
      new Indigo();
    return Indigo_instance;
  }
  function Blue() {
    Blue_instance = this;
    this._50__1 = Companion_getInstance_3().rgb_6orfmz_k$(14938877);
    this._100__1 = Companion_getInstance_3().rgb_6orfmz_k$(12312315);
    this._200__1 = Companion_getInstance_3().rgb_6orfmz_k$(9489145);
    this._300__1 = Companion_getInstance_3().rgb_6orfmz_k$(6600182);
    this._400__1 = Companion_getInstance_3().rgb_6orfmz_k$(4367861);
    this._500__1 = Companion_getInstance_3().rgb_6orfmz_k$(2201331);
    this._600__1 = Companion_getInstance_3().rgb_6orfmz_k$(2001125);
    this._700__1 = Companion_getInstance_3().rgb_6orfmz_k$(1668818);
    this._800__1 = Companion_getInstance_3().rgb_6orfmz_k$(1402304);
    this._900__1 = Companion_getInstance_3().rgb_6orfmz_k$(870305);
  }
  protoOf(Blue).get__50_18jcbz_k$ = function () {
    return this._50__1;
  };
  protoOf(Blue).get__100_wogcqj_k$ = function () {
    return this._100__1;
  };
  protoOf(Blue).get__200_wogdh8_k$ = function () {
    return this._200__1;
  };
  protoOf(Blue).get__300_woge7x_k$ = function () {
    return this._300__1;
  };
  protoOf(Blue).get__400_wogeym_k$ = function () {
    return this._400__1;
  };
  protoOf(Blue).get__500_wogfpb_k$ = function () {
    return this._500__1;
  };
  protoOf(Blue).get__600_woggg0_k$ = function () {
    return this._600__1;
  };
  protoOf(Blue).get__700_wogh6p_k$ = function () {
    return this._700__1;
  };
  protoOf(Blue).get__800_woghxe_k$ = function () {
    return this._800__1;
  };
  protoOf(Blue).get__900_wogio3_k$ = function () {
    return this._900__1;
  };
  var Blue_instance;
  function Blue_getInstance() {
    if (Blue_instance == null)
      new Blue();
    return Blue_instance;
  }
  function LightBlue() {
    LightBlue_instance = this;
    this._50__1 = Companion_getInstance_3().rgb_6orfmz_k$(14808574);
    this._100__1 = Companion_getInstance_3().rgb_6orfmz_k$(11789820);
    this._200__1 = Companion_getInstance_3().rgb_6orfmz_k$(8508666);
    this._300__1 = Companion_getInstance_3().rgb_6orfmz_k$(5227511);
    this._400__1 = Companion_getInstance_3().rgb_6orfmz_k$(2733814);
    this._500__1 = Companion_getInstance_3().rgb_6orfmz_k$(240116);
    this._600__1 = Companion_getInstance_3().rgb_6orfmz_k$(236517);
    this._700__1 = Companion_getInstance_3().rgb_6orfmz_k$(166097);
    this._800__1 = Companion_getInstance_3().rgb_6orfmz_k$(161725);
    this._900__1 = Companion_getInstance_3().rgb_6orfmz_k$(87963);
  }
  protoOf(LightBlue).get__50_18jcbz_k$ = function () {
    return this._50__1;
  };
  protoOf(LightBlue).get__100_wogcqj_k$ = function () {
    return this._100__1;
  };
  protoOf(LightBlue).get__200_wogdh8_k$ = function () {
    return this._200__1;
  };
  protoOf(LightBlue).get__300_woge7x_k$ = function () {
    return this._300__1;
  };
  protoOf(LightBlue).get__400_wogeym_k$ = function () {
    return this._400__1;
  };
  protoOf(LightBlue).get__500_wogfpb_k$ = function () {
    return this._500__1;
  };
  protoOf(LightBlue).get__600_woggg0_k$ = function () {
    return this._600__1;
  };
  protoOf(LightBlue).get__700_wogh6p_k$ = function () {
    return this._700__1;
  };
  protoOf(LightBlue).get__800_woghxe_k$ = function () {
    return this._800__1;
  };
  protoOf(LightBlue).get__900_wogio3_k$ = function () {
    return this._900__1;
  };
  var LightBlue_instance;
  function LightBlue_getInstance() {
    if (LightBlue_instance == null)
      new LightBlue();
    return LightBlue_instance;
  }
  function Cyan() {
    Cyan_instance = this;
    this._50__1 = Companion_getInstance_3().rgb_6orfmz_k$(14743546);
    this._100__1 = Companion_getInstance_3().rgb_6orfmz_k$(11725810);
    this._200__1 = Companion_getInstance_3().rgb_6orfmz_k$(8445674);
    this._300__1 = Companion_getInstance_3().rgb_6orfmz_k$(5099745);
    this._400__1 = Companion_getInstance_3().rgb_6orfmz_k$(2541274);
    this._500__1 = Companion_getInstance_3().rgb_6orfmz_k$(48340);
    this._600__1 = Companion_getInstance_3().rgb_6orfmz_k$(44225);
    this._700__1 = Companion_getInstance_3().rgb_6orfmz_k$(38823);
    this._800__1 = Companion_getInstance_3().rgb_6orfmz_k$(33679);
    this._900__1 = Companion_getInstance_3().rgb_6orfmz_k$(24676);
  }
  protoOf(Cyan).get__50_18jcbz_k$ = function () {
    return this._50__1;
  };
  protoOf(Cyan).get__100_wogcqj_k$ = function () {
    return this._100__1;
  };
  protoOf(Cyan).get__200_wogdh8_k$ = function () {
    return this._200__1;
  };
  protoOf(Cyan).get__300_woge7x_k$ = function () {
    return this._300__1;
  };
  protoOf(Cyan).get__400_wogeym_k$ = function () {
    return this._400__1;
  };
  protoOf(Cyan).get__500_wogfpb_k$ = function () {
    return this._500__1;
  };
  protoOf(Cyan).get__600_woggg0_k$ = function () {
    return this._600__1;
  };
  protoOf(Cyan).get__700_wogh6p_k$ = function () {
    return this._700__1;
  };
  protoOf(Cyan).get__800_woghxe_k$ = function () {
    return this._800__1;
  };
  protoOf(Cyan).get__900_wogio3_k$ = function () {
    return this._900__1;
  };
  var Cyan_instance;
  function Cyan_getInstance() {
    if (Cyan_instance == null)
      new Cyan();
    return Cyan_instance;
  }
  function Teal() {
    Teal_instance = this;
    this._50__1 = Companion_getInstance_3().rgb_6orfmz_k$(14742257);
    this._100__1 = Companion_getInstance_3().rgb_6orfmz_k$(11722715);
    this._200__1 = Companion_getInstance_3().rgb_6orfmz_k$(8440772);
    this._300__1 = Companion_getInstance_3().rgb_6orfmz_k$(5093036);
    this._400__1 = Companion_getInstance_3().rgb_6orfmz_k$(2533018);
    this._500__1 = Companion_getInstance_3().rgb_6orfmz_k$(38536);
    this._600__1 = Companion_getInstance_3().rgb_6orfmz_k$(35195);
    this._700__1 = Companion_getInstance_3().rgb_6orfmz_k$(31083);
    this._800__1 = Companion_getInstance_3().rgb_6orfmz_k$(26972);
    this._900__1 = Companion_getInstance_3().rgb_6orfmz_k$(19776);
  }
  protoOf(Teal).get__50_18jcbz_k$ = function () {
    return this._50__1;
  };
  protoOf(Teal).get__100_wogcqj_k$ = function () {
    return this._100__1;
  };
  protoOf(Teal).get__200_wogdh8_k$ = function () {
    return this._200__1;
  };
  protoOf(Teal).get__300_woge7x_k$ = function () {
    return this._300__1;
  };
  protoOf(Teal).get__400_wogeym_k$ = function () {
    return this._400__1;
  };
  protoOf(Teal).get__500_wogfpb_k$ = function () {
    return this._500__1;
  };
  protoOf(Teal).get__600_woggg0_k$ = function () {
    return this._600__1;
  };
  protoOf(Teal).get__700_wogh6p_k$ = function () {
    return this._700__1;
  };
  protoOf(Teal).get__800_woghxe_k$ = function () {
    return this._800__1;
  };
  protoOf(Teal).get__900_wogio3_k$ = function () {
    return this._900__1;
  };
  var Teal_instance;
  function Teal_getInstance() {
    if (Teal_instance == null)
      new Teal();
    return Teal_instance;
  }
  function Green() {
    Green_instance = this;
    this._50__1 = Companion_getInstance_3().rgb_6orfmz_k$(15267305);
    this._100__1 = Companion_getInstance_3().rgb_6orfmz_k$(13166281);
    this._200__1 = Companion_getInstance_3().rgb_6orfmz_k$(10868391);
    this._300__1 = Companion_getInstance_3().rgb_6orfmz_k$(8505220);
    this._400__1 = Companion_getInstance_3().rgb_6orfmz_k$(6732650);
    this._500__1 = Companion_getInstance_3().rgb_6orfmz_k$(5025616);
    this._600__1 = Companion_getInstance_3().rgb_6orfmz_k$(4431943);
    this._700__1 = Companion_getInstance_3().rgb_6orfmz_k$(3706428);
    this._800__1 = Companion_getInstance_3().rgb_6orfmz_k$(3046706);
    this._900__1 = Companion_getInstance_3().rgb_6orfmz_k$(1793568);
  }
  protoOf(Green).get__50_18jcbz_k$ = function () {
    return this._50__1;
  };
  protoOf(Green).get__100_wogcqj_k$ = function () {
    return this._100__1;
  };
  protoOf(Green).get__200_wogdh8_k$ = function () {
    return this._200__1;
  };
  protoOf(Green).get__300_woge7x_k$ = function () {
    return this._300__1;
  };
  protoOf(Green).get__400_wogeym_k$ = function () {
    return this._400__1;
  };
  protoOf(Green).get__500_wogfpb_k$ = function () {
    return this._500__1;
  };
  protoOf(Green).get__600_woggg0_k$ = function () {
    return this._600__1;
  };
  protoOf(Green).get__700_wogh6p_k$ = function () {
    return this._700__1;
  };
  protoOf(Green).get__800_woghxe_k$ = function () {
    return this._800__1;
  };
  protoOf(Green).get__900_wogio3_k$ = function () {
    return this._900__1;
  };
  var Green_instance;
  function Green_getInstance() {
    if (Green_instance == null)
      new Green();
    return Green_instance;
  }
  function LightGreen() {
    LightGreen_instance = this;
    this._50__1 = Companion_getInstance_3().rgb_6orfmz_k$(15857897);
    this._100__1 = Companion_getInstance_3().rgb_6orfmz_k$(14478792);
    this._200__1 = Companion_getInstance_3().rgb_6orfmz_k$(12968357);
    this._300__1 = Companion_getInstance_3().rgb_6orfmz_k$(11457921);
    this._400__1 = Companion_getInstance_3().rgb_6orfmz_k$(10275941);
    this._500__1 = Companion_getInstance_3().rgb_6orfmz_k$(9159498);
    this._600__1 = Companion_getInstance_3().rgb_6orfmz_k$(8172354);
    this._700__1 = Companion_getInstance_3().rgb_6orfmz_k$(6856504);
    this._800__1 = Companion_getInstance_3().rgb_6orfmz_k$(5606191);
    this._900__1 = Companion_getInstance_3().rgb_6orfmz_k$(3369246);
  }
  protoOf(LightGreen).get__50_18jcbz_k$ = function () {
    return this._50__1;
  };
  protoOf(LightGreen).get__100_wogcqj_k$ = function () {
    return this._100__1;
  };
  protoOf(LightGreen).get__200_wogdh8_k$ = function () {
    return this._200__1;
  };
  protoOf(LightGreen).get__300_woge7x_k$ = function () {
    return this._300__1;
  };
  protoOf(LightGreen).get__400_wogeym_k$ = function () {
    return this._400__1;
  };
  protoOf(LightGreen).get__500_wogfpb_k$ = function () {
    return this._500__1;
  };
  protoOf(LightGreen).get__600_woggg0_k$ = function () {
    return this._600__1;
  };
  protoOf(LightGreen).get__700_wogh6p_k$ = function () {
    return this._700__1;
  };
  protoOf(LightGreen).get__800_woghxe_k$ = function () {
    return this._800__1;
  };
  protoOf(LightGreen).get__900_wogio3_k$ = function () {
    return this._900__1;
  };
  var LightGreen_instance;
  function LightGreen_getInstance() {
    if (LightGreen_instance == null)
      new LightGreen();
    return LightGreen_instance;
  }
  function Lime() {
    Lime_instance = this;
    this._50__1 = Companion_getInstance_3().rgb_6orfmz_k$(16382951);
    this._100__1 = Companion_getInstance_3().rgb_6orfmz_k$(15791299);
    this._200__1 = Companion_getInstance_3().rgb_6orfmz_k$(15134364);
    this._300__1 = Companion_getInstance_3().rgb_6orfmz_k$(14477173);
    this._400__1 = Companion_getInstance_3().rgb_6orfmz_k$(13951319);
    this._500__1 = Companion_getInstance_3().rgb_6orfmz_k$(13491257);
    this._600__1 = Companion_getInstance_3().rgb_6orfmz_k$(12634675);
    this._700__1 = Companion_getInstance_3().rgb_6orfmz_k$(11514923);
    this._800__1 = Companion_getInstance_3().rgb_6orfmz_k$(10394916);
    this._900__1 = Companion_getInstance_3().rgb_6orfmz_k$(8550167);
  }
  protoOf(Lime).get__50_18jcbz_k$ = function () {
    return this._50__1;
  };
  protoOf(Lime).get__100_wogcqj_k$ = function () {
    return this._100__1;
  };
  protoOf(Lime).get__200_wogdh8_k$ = function () {
    return this._200__1;
  };
  protoOf(Lime).get__300_woge7x_k$ = function () {
    return this._300__1;
  };
  protoOf(Lime).get__400_wogeym_k$ = function () {
    return this._400__1;
  };
  protoOf(Lime).get__500_wogfpb_k$ = function () {
    return this._500__1;
  };
  protoOf(Lime).get__600_woggg0_k$ = function () {
    return this._600__1;
  };
  protoOf(Lime).get__700_wogh6p_k$ = function () {
    return this._700__1;
  };
  protoOf(Lime).get__800_woghxe_k$ = function () {
    return this._800__1;
  };
  protoOf(Lime).get__900_wogio3_k$ = function () {
    return this._900__1;
  };
  var Lime_instance;
  function Lime_getInstance() {
    if (Lime_instance == null)
      new Lime();
    return Lime_instance;
  }
  function Yellow() {
    Yellow_instance = this;
    this._50__1 = Companion_getInstance_3().rgb_6orfmz_k$(16776679);
    this._100__1 = Companion_getInstance_3().rgb_6orfmz_k$(16775620);
    this._200__1 = Companion_getInstance_3().rgb_6orfmz_k$(16774557);
    this._300__1 = Companion_getInstance_3().rgb_6orfmz_k$(16773494);
    this._400__1 = Companion_getInstance_3().rgb_6orfmz_k$(16772696);
    this._500__1 = Companion_getInstance_3().rgb_6orfmz_k$(16771899);
    this._600__1 = Companion_getInstance_3().rgb_6orfmz_k$(16635957);
    this._700__1 = Companion_getInstance_3().rgb_6orfmz_k$(16498733);
    this._800__1 = Companion_getInstance_3().rgb_6orfmz_k$(16361509);
    this._900__1 = Companion_getInstance_3().rgb_6orfmz_k$(16088855);
  }
  protoOf(Yellow).get__50_18jcbz_k$ = function () {
    return this._50__1;
  };
  protoOf(Yellow).get__100_wogcqj_k$ = function () {
    return this._100__1;
  };
  protoOf(Yellow).get__200_wogdh8_k$ = function () {
    return this._200__1;
  };
  protoOf(Yellow).get__300_woge7x_k$ = function () {
    return this._300__1;
  };
  protoOf(Yellow).get__400_wogeym_k$ = function () {
    return this._400__1;
  };
  protoOf(Yellow).get__500_wogfpb_k$ = function () {
    return this._500__1;
  };
  protoOf(Yellow).get__600_woggg0_k$ = function () {
    return this._600__1;
  };
  protoOf(Yellow).get__700_wogh6p_k$ = function () {
    return this._700__1;
  };
  protoOf(Yellow).get__800_woghxe_k$ = function () {
    return this._800__1;
  };
  protoOf(Yellow).get__900_wogio3_k$ = function () {
    return this._900__1;
  };
  var Yellow_instance;
  function Yellow_getInstance() {
    if (Yellow_instance == null)
      new Yellow();
    return Yellow_instance;
  }
  function Amber() {
    Amber_instance = this;
    this._50__1 = Companion_getInstance_3().rgb_6orfmz_k$(16775393);
    this._100__1 = Companion_getInstance_3().rgb_6orfmz_k$(16772275);
    this._200__1 = Companion_getInstance_3().rgb_6orfmz_k$(16769154);
    this._300__1 = Companion_getInstance_3().rgb_6orfmz_k$(16766287);
    this._400__1 = Companion_getInstance_3().rgb_6orfmz_k$(16763432);
    this._500__1 = Companion_getInstance_3().rgb_6orfmz_k$(16761095);
    this._600__1 = Companion_getInstance_3().rgb_6orfmz_k$(16757504);
    this._700__1 = Companion_getInstance_3().rgb_6orfmz_k$(16752640);
    this._800__1 = Companion_getInstance_3().rgb_6orfmz_k$(16748288);
    this._900__1 = Companion_getInstance_3().rgb_6orfmz_k$(16740096);
  }
  protoOf(Amber).get__50_18jcbz_k$ = function () {
    return this._50__1;
  };
  protoOf(Amber).get__100_wogcqj_k$ = function () {
    return this._100__1;
  };
  protoOf(Amber).get__200_wogdh8_k$ = function () {
    return this._200__1;
  };
  protoOf(Amber).get__300_woge7x_k$ = function () {
    return this._300__1;
  };
  protoOf(Amber).get__400_wogeym_k$ = function () {
    return this._400__1;
  };
  protoOf(Amber).get__500_wogfpb_k$ = function () {
    return this._500__1;
  };
  protoOf(Amber).get__600_woggg0_k$ = function () {
    return this._600__1;
  };
  protoOf(Amber).get__700_wogh6p_k$ = function () {
    return this._700__1;
  };
  protoOf(Amber).get__800_woghxe_k$ = function () {
    return this._800__1;
  };
  protoOf(Amber).get__900_wogio3_k$ = function () {
    return this._900__1;
  };
  var Amber_instance;
  function Amber_getInstance() {
    if (Amber_instance == null)
      new Amber();
    return Amber_instance;
  }
  function Orange() {
    Orange_instance = this;
    this._50__1 = Companion_getInstance_3().rgb_6orfmz_k$(16774112);
    this._100__1 = Companion_getInstance_3().rgb_6orfmz_k$(16769202);
    this._200__1 = Companion_getInstance_3().rgb_6orfmz_k$(16764032);
    this._300__1 = Companion_getInstance_3().rgb_6orfmz_k$(16758605);
    this._400__1 = Companion_getInstance_3().rgb_6orfmz_k$(16754470);
    this._500__1 = Companion_getInstance_3().rgb_6orfmz_k$(16750592);
    this._600__1 = Companion_getInstance_3().rgb_6orfmz_k$(16485376);
    this._700__1 = Companion_getInstance_3().rgb_6orfmz_k$(16088064);
    this._800__1 = Companion_getInstance_3().rgb_6orfmz_k$(15690752);
    this._900__1 = Companion_getInstance_3().rgb_6orfmz_k$(15094016);
  }
  protoOf(Orange).get__50_18jcbz_k$ = function () {
    return this._50__1;
  };
  protoOf(Orange).get__100_wogcqj_k$ = function () {
    return this._100__1;
  };
  protoOf(Orange).get__200_wogdh8_k$ = function () {
    return this._200__1;
  };
  protoOf(Orange).get__300_woge7x_k$ = function () {
    return this._300__1;
  };
  protoOf(Orange).get__400_wogeym_k$ = function () {
    return this._400__1;
  };
  protoOf(Orange).get__500_wogfpb_k$ = function () {
    return this._500__1;
  };
  protoOf(Orange).get__600_woggg0_k$ = function () {
    return this._600__1;
  };
  protoOf(Orange).get__700_wogh6p_k$ = function () {
    return this._700__1;
  };
  protoOf(Orange).get__800_woghxe_k$ = function () {
    return this._800__1;
  };
  protoOf(Orange).get__900_wogio3_k$ = function () {
    return this._900__1;
  };
  var Orange_instance;
  function Orange_getInstance() {
    if (Orange_instance == null)
      new Orange();
    return Orange_instance;
  }
  function DeepOrange() {
    DeepOrange_instance = this;
    this._50__1 = Companion_getInstance_3().rgb_6orfmz_k$(16509415);
    this._100__1 = Companion_getInstance_3().rgb_6orfmz_k$(16764092);
    this._200__1 = Companion_getInstance_3().rgb_6orfmz_k$(16755601);
    this._300__1 = Companion_getInstance_3().rgb_6orfmz_k$(16747109);
    this._400__1 = Companion_getInstance_3().rgb_6orfmz_k$(16740419);
    this._500__1 = Companion_getInstance_3().rgb_6orfmz_k$(16733986);
    this._600__1 = Companion_getInstance_3().rgb_6orfmz_k$(16011550);
    this._700__1 = Companion_getInstance_3().rgb_6orfmz_k$(15092249);
    this._800__1 = Companion_getInstance_3().rgb_6orfmz_k$(14172949);
    this._900__1 = Companion_getInstance_3().rgb_6orfmz_k$(12531212);
  }
  protoOf(DeepOrange).get__50_18jcbz_k$ = function () {
    return this._50__1;
  };
  protoOf(DeepOrange).get__100_wogcqj_k$ = function () {
    return this._100__1;
  };
  protoOf(DeepOrange).get__200_wogdh8_k$ = function () {
    return this._200__1;
  };
  protoOf(DeepOrange).get__300_woge7x_k$ = function () {
    return this._300__1;
  };
  protoOf(DeepOrange).get__400_wogeym_k$ = function () {
    return this._400__1;
  };
  protoOf(DeepOrange).get__500_wogfpb_k$ = function () {
    return this._500__1;
  };
  protoOf(DeepOrange).get__600_woggg0_k$ = function () {
    return this._600__1;
  };
  protoOf(DeepOrange).get__700_wogh6p_k$ = function () {
    return this._700__1;
  };
  protoOf(DeepOrange).get__800_woghxe_k$ = function () {
    return this._800__1;
  };
  protoOf(DeepOrange).get__900_wogio3_k$ = function () {
    return this._900__1;
  };
  var DeepOrange_instance;
  function DeepOrange_getInstance() {
    if (DeepOrange_instance == null)
      new DeepOrange();
    return DeepOrange_instance;
  }
  function Brown() {
    Brown_instance = this;
    this._50__1 = Companion_getInstance_3().rgb_6orfmz_k$(15723497);
    this._100__1 = Companion_getInstance_3().rgb_6orfmz_k$(14142664);
    this._200__1 = Companion_getInstance_3().rgb_6orfmz_k$(12364452);
    this._300__1 = Companion_getInstance_3().rgb_6orfmz_k$(10586239);
    this._400__1 = Companion_getInstance_3().rgb_6orfmz_k$(9268835);
    this._500__1 = Companion_getInstance_3().rgb_6orfmz_k$(7951688);
    this._600__1 = Companion_getInstance_3().rgb_6orfmz_k$(7162945);
    this._700__1 = Companion_getInstance_3().rgb_6orfmz_k$(6111287);
    this._800__1 = Companion_getInstance_3().rgb_6orfmz_k$(5125166);
    this._900__1 = Companion_getInstance_3().rgb_6orfmz_k$(4073251);
  }
  protoOf(Brown).get__50_18jcbz_k$ = function () {
    return this._50__1;
  };
  protoOf(Brown).get__100_wogcqj_k$ = function () {
    return this._100__1;
  };
  protoOf(Brown).get__200_wogdh8_k$ = function () {
    return this._200__1;
  };
  protoOf(Brown).get__300_woge7x_k$ = function () {
    return this._300__1;
  };
  protoOf(Brown).get__400_wogeym_k$ = function () {
    return this._400__1;
  };
  protoOf(Brown).get__500_wogfpb_k$ = function () {
    return this._500__1;
  };
  protoOf(Brown).get__600_woggg0_k$ = function () {
    return this._600__1;
  };
  protoOf(Brown).get__700_wogh6p_k$ = function () {
    return this._700__1;
  };
  protoOf(Brown).get__800_woghxe_k$ = function () {
    return this._800__1;
  };
  protoOf(Brown).get__900_wogio3_k$ = function () {
    return this._900__1;
  };
  var Brown_instance;
  function Brown_getInstance() {
    if (Brown_instance == null)
      new Brown();
    return Brown_instance;
  }
  function Gray() {
    Gray_instance = this;
    this._50__1 = Companion_getInstance_3().rgb_6orfmz_k$(16448250);
    this._100__1 = Companion_getInstance_3().rgb_6orfmz_k$(16119285);
    this._200__1 = Companion_getInstance_3().rgb_6orfmz_k$(15658734);
    this._300__1 = Companion_getInstance_3().rgb_6orfmz_k$(14737632);
    this._400__1 = Companion_getInstance_3().rgb_6orfmz_k$(12434877);
    this._500__1 = Companion_getInstance_3().rgb_6orfmz_k$(10395294);
    this._600__1 = Companion_getInstance_3().rgb_6orfmz_k$(7697781);
    this._700__1 = Companion_getInstance_3().rgb_6orfmz_k$(6381921);
    this._800__1 = Companion_getInstance_3().rgb_6orfmz_k$(4342338);
    this._900__1 = Companion_getInstance_3().rgb_6orfmz_k$(2171169);
  }
  protoOf(Gray).get__50_18jcbz_k$ = function () {
    return this._50__1;
  };
  protoOf(Gray).get__100_wogcqj_k$ = function () {
    return this._100__1;
  };
  protoOf(Gray).get__200_wogdh8_k$ = function () {
    return this._200__1;
  };
  protoOf(Gray).get__300_woge7x_k$ = function () {
    return this._300__1;
  };
  protoOf(Gray).get__400_wogeym_k$ = function () {
    return this._400__1;
  };
  protoOf(Gray).get__500_wogfpb_k$ = function () {
    return this._500__1;
  };
  protoOf(Gray).get__600_woggg0_k$ = function () {
    return this._600__1;
  };
  protoOf(Gray).get__700_wogh6p_k$ = function () {
    return this._700__1;
  };
  protoOf(Gray).get__800_woghxe_k$ = function () {
    return this._800__1;
  };
  protoOf(Gray).get__900_wogio3_k$ = function () {
    return this._900__1;
  };
  var Gray_instance;
  function Gray_getInstance() {
    if (Gray_instance == null)
      new Gray();
    return Gray_instance;
  }
  function BlueGray() {
    BlueGray_instance = this;
    this._50__1 = Companion_getInstance_3().rgb_6orfmz_k$(15527921);
    this._100__1 = Companion_getInstance_3().rgb_6orfmz_k$(13621468);
    this._200__1 = Companion_getInstance_3().rgb_6orfmz_k$(11583173);
    this._300__1 = Companion_getInstance_3().rgb_6orfmz_k$(9479342);
    this._400__1 = Companion_getInstance_3().rgb_6orfmz_k$(7901340);
    this._500__1 = Companion_getInstance_3().rgb_6orfmz_k$(6323595);
    this._600__1 = Companion_getInstance_3().rgb_6orfmz_k$(5533306);
    this._700__1 = Companion_getInstance_3().rgb_6orfmz_k$(4545124);
    this._800__1 = Companion_getInstance_3().rgb_6orfmz_k$(3622735);
    this._900__1 = Companion_getInstance_3().rgb_6orfmz_k$(2503224);
  }
  protoOf(BlueGray).get__50_18jcbz_k$ = function () {
    return this._50__1;
  };
  protoOf(BlueGray).get__100_wogcqj_k$ = function () {
    return this._100__1;
  };
  protoOf(BlueGray).get__200_wogdh8_k$ = function () {
    return this._200__1;
  };
  protoOf(BlueGray).get__300_woge7x_k$ = function () {
    return this._300__1;
  };
  protoOf(BlueGray).get__400_wogeym_k$ = function () {
    return this._400__1;
  };
  protoOf(BlueGray).get__500_wogfpb_k$ = function () {
    return this._500__1;
  };
  protoOf(BlueGray).get__600_woggg0_k$ = function () {
    return this._600__1;
  };
  protoOf(BlueGray).get__700_wogh6p_k$ = function () {
    return this._700__1;
  };
  protoOf(BlueGray).get__800_woghxe_k$ = function () {
    return this._800__1;
  };
  protoOf(BlueGray).get__900_wogio3_k$ = function () {
    return this._900__1;
  };
  var BlueGray_instance;
  function BlueGray_getInstance() {
    if (BlueGray_instance == null)
      new BlueGray();
    return BlueGray_instance;
  }
  function ColorSchemes() {
    ColorSchemes_instance = this;
  }
  var ColorSchemes_instance;
  function ColorSchemes_getInstance() {
    if (ColorSchemes_instance == null)
      new ColorSchemes();
    return ColorSchemes_instance;
  }
  var com_varabyte_kobweb_silk_theme_colors_ColorSchemes_Blue$stable;
  function ColorScheme() {
  }
  function _get_palette__j9ubre($this) {
    return $this.palette_1;
  }
  function _get_prefix__wiwq7t_1($this) {
    return $this.prefix_1;
  }
  function _get_palette__j9ubre_0($this) {
    return $this.palette_1;
  }
  function _get_groupName__oqexl($this) {
    return $this.groupName_1;
  }
  function EntryDelegate(palette, prefix) {
    prefix = prefix === VOID ? null : prefix;
    this.palette_1 = palette;
    this.prefix_1 = prefix;
  }
  protoOf(EntryDelegate).getValue_fbnwi2_k$ = function (thisRef, property) {
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = this.prefix_1;
    var tmp$ret$0 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    return getValue(this.palette_1.colors_1, tmp$ret$0 + property.callableName);
  };
  protoOf(EntryDelegate).setValue_jpcais_k$ = function (thisRef, property, value) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.palette_1.colors_1;
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = this.prefix_1;
    var key = (tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs) + property.callableName;
    this_0.put_4fpzoq_k$(key, value);
  };
  function ColorGroup(palette, groupName) {
    this.palette_1 = palette;
    this.groupName_1 = groupName;
  }
  protoOf(ColorGroup).paletteEntry_4qg1pz_k$ = function () {
    return new EntryDelegate(this.palette_1, this.groupName_1 + '.');
  };
  function _get_colors__hj58bp($this) {
    return $this.colors_1;
  }
  function MutablePalette() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.colors_1 = LinkedHashMap_init_$Create$_0();
  }
  protoOf(MutablePalette).get_6bo4tg_k$ = function (key) {
    return this.colors_1.get_wei43m_k$(key);
  };
  protoOf(MutablePalette).set_17rjxm_k$ = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    this.colors_1.put_4fpzoq_k$(key, value);
  };
  function Palette() {
  }
  function Palettes() {
  }
  function MutablePalettes() {
    this.light_1 = new MutablePalette();
    this.dark_1 = new MutablePalette();
  }
  protoOf(MutablePalettes).get_light_iuogdp_k$ = function () {
    return this.light_1;
  };
  protoOf(MutablePalettes).get_dark_wokkvz_k$ = function () {
    return this.dark_1;
  };
  function toPalette(_this__u8e3s4) {
    return get_SilkTheme().get_palettes_f7ft27_k$().get_4bsmki_k$(_this__u8e3s4);
  }
  function clip(_this__u8e3s4, shape) {
    var tmp0_safe_receiver = shape.get_path_wos8ry_k$();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.theme.shapes.clip.<anonymous>' call
      tmp = styleModifier(_this__u8e3s4, clip$lambda(tmp0_safe_receiver));
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function RectF_init_$Init$($this) {
    RectF_init_$Init$_0(get_px(0), $this);
    return $this;
  }
  function RectF_init_$Create$() {
    return RectF_init_$Init$(objectCreate(protoOf(RectF)));
  }
  function RectF_init_$Init$_0(cornerRadius, $this) {
    RectF.call($this, to(0.0, 0.0), to(100.0, 100.0), cornerRadius);
    return $this;
  }
  function RectF_init_$Create$_0(cornerRadius) {
    return RectF_init_$Init$_0(cornerRadius, objectCreate(protoOf(RectF)));
  }
  function RectF_init_$Init$_1(topBottom, leftRight, cornerRadius, $this) {
    cornerRadius = cornerRadius === VOID ? get_px(0) : cornerRadius;
    RectF.call($this, to(leftRight, topBottom), from100(to(leftRight, topBottom)), cornerRadius);
    return $this;
  }
  function RectF_init_$Create$_1(topBottom, leftRight, cornerRadius) {
    return RectF_init_$Init$_1(topBottom, leftRight, cornerRadius, objectCreate(protoOf(RectF)));
  }
  function RectF_init_$Init$_2(side, cornerRadius, $this) {
    cornerRadius = cornerRadius === VOID ? get_px(0) : cornerRadius;
    RectF.call($this, to(side, side), from100(to(side, side)), cornerRadius);
    return $this;
  }
  function RectF_init_$Create$_2(side, cornerRadius) {
    return RectF_init_$Init$_2(side, cornerRadius, objectCreate(protoOf(RectF)));
  }
  function RectF(topLeft, botRight, cornerRadius) {
    cornerRadius = cornerRadius === VOID ? get_px(0) : cornerRadius;
    this.topLeft_1 = topLeft;
    this.botRight_1 = botRight;
    this.cornerRadius_1 = cornerRadius;
  }
  protoOf(RectF).get_topLeft_hl8stp_k$ = function () {
    return this.topLeft_1;
  };
  protoOf(RectF).get_botRight_3cfala_k$ = function () {
    return this.botRight_1;
  };
  protoOf(RectF).get_cornerRadius_e70s5s_k$ = function () {
    return this.cornerRadius_1;
  };
  protoOf(RectF).get_path_wos8ry_k$ = function () {
    var tmp;
    if ((((!(this.topLeft_1.get_first_irdx8n_k$() === 0.0) ? true : !(this.topLeft_1.get_second_jf7fjx_k$() === 0.0)) ? true : !(this.botRight_1.get_first_irdx8n_k$() === 100.0)) ? true : !(this.botRight_1.get_second_jf7fjx_k$() === 100.0)) ? true : !equals(this.cornerRadius_1, get_px(0))) {
      tmp = new InsetPath(this.topLeft_1, this.botRight_1, this.cornerRadius_1);
    } else {
      tmp = null;
    }
    return tmp;
  };
  function Shape() {
  }
  function Path() {
  }
  protoOf(Path).toPercentStr_u2meev_k$ = function (_this__u8e3s4) {
    return toString(_this__u8e3s4) + '%';
  };
  protoOf(Path).toPercentStr_wblpxu_k$ = function (_this__u8e3s4) {
    return toString(_this__u8e3s4.get_first_irdx8n_k$()) + '% ' + toString(_this__u8e3s4.get_second_jf7fjx_k$()) + '%';
  };
  function from100(_this__u8e3s4) {
    return to(100.0 - _this__u8e3s4.get_first_irdx8n_k$(), 100.0 - _this__u8e3s4.get_second_jf7fjx_k$());
  }
  function _get_topLeft__ivx3md($this) {
    return $this.topLeft_1;
  }
  function _get_roundness__ntilf8($this) {
    return $this.roundness_1;
  }
  function _get_botRight__mdby22($this) {
    return $this.botRight_1;
  }
  function InsetPath(topLeft, botRight, roundness) {
    roundness = roundness === VOID ? get_px(0) : roundness;
    Path.call(this);
    this.topLeft_1 = topLeft;
    this.roundness_1 = roundness;
    this.botRight_1 = from100(botRight);
  }
  protoOf(InsetPath).toPathStr_ufnqhd_k$ = function () {
    // Inline function 'kotlin.takeIf' call
    var this_0 = this.roundness_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'com.varabyte.kobweb.silk.theme.shapes.InsetPath.toPathStr.<anonymous>' call
    if (!equals(this_0, get_px(0))) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.theme.shapes.InsetPath.toPathStr.<anonymous>' call
      tmp_0 = 'round ' + tmp0_safe_receiver;
    }
    var tmp1_elvis_lhs = tmp_0;
    var roundnessPart = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    var left = this.topLeft_1.get_first_irdx8n_k$();
    var top = this.topLeft_1.get_second_jf7fjx_k$();
    var right = this.botRight_1.get_first_irdx8n_k$();
    var bottom = this.botRight_1.get_second_jf7fjx_k$();
    var insetPart = ((left === top ? right === bottom : false) ? left === right : false) ? this.toPercentStr_u2meev_k$(left) : (left === right ? top === bottom : false) ? this.toPercentStr_wblpxu_k$(to(top, left)) : this.toPercentStr_u2meev_k$(top) + ' ' + this.toPercentStr_u2meev_k$(right) + ' ' + this.toPercentStr_u2meev_k$(bottom) + ' ' + this.toPercentStr_u2meev_k$(left);
    return 'inset(' + insetPart + roundnessPart + ')';
  };
  function clip$lambda($path) {
    return function ($this$styleModifier) {
      $this$styleModifier.property_wcrait_k$('clip-path', $path.toPathStr_ufnqhd_k$());
      return Unit_getInstance();
    };
  }
  //region block: post-declaration
  protoOf(SilkStylesheetInstance).registerStyle_ug9rpu_k$ = registerStyle;
  protoOf(SilkStylesheetInstance).registerStyle$default_n7lw5n_k$ = registerStyle$default;
  protoOf(MutablePalette).getValue_r24mvz_k$ = getValue_0;
  protoOf(MutablePalettes).get_4bsmki_k$ = get;
  //endregion
  //region block: init
  com_varabyte_kobweb_silk_components_animation_Keyframes$stable = 8;
  com_varabyte_kobweb_silk_components_style_ComponentStyle$stable = 0;
  com_varabyte_kobweb_silk_components_style_ComponentVariant$stable = 0;
  _SilkTheme = null;
  com_varabyte_kobweb_silk_theme_colors_ColorSchemes_Blue$stable = 0;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Keyframes_0;
  _.$_$.b = registerKeyframes;
  _.$_$.c = toAnimation;
  _.$_$.d = displayIfAtLeast;
  _.$_$.e = displayUntil;
  _.$_$.f = get_entries;
  _.$_$.g = ComponentStyle;
  _.$_$.h = ComponentStyle_1;
  _.$_$.i = get_active;
  _.$_$.j = addVariantBase;
  _.$_$.k = addVariant;
  _.$_$.l = get_ariaDisabled;
  _.$_$.m = get_ariaInvalid;
  _.$_$.n = base;
  _.$_$.o = base_0;
  _.$_$.p = base_1;
  _.$_$.q = get_disabled;
  _.$_$.r = get_focusVisible;
  _.$_$.s = get_hover;
  _.$_$.t = get_link;
  _.$_$.u = not;
  _.$_$.v = get_placeholder;
  _.$_$.w = toAttrs_0;
  _.$_$.x = toModifier;
  _.$_$.y = get_visited;
  _.$_$.z = SpanText;
  _.$_$.a1 = deferRender;
  _.$_$.b1 = renderWithDeferred;
  _.$_$.c1 = set_additionalSilkInitialization;
  _.$_$.d1 = registerStyleBase;
  _.$_$.e1 = ColorGroup;
  _.$_$.f1 = MutablePalette;
  _.$_$.g1 = toPalette;
  _.$_$.h1 = suffixedWith;
  _.$_$.i1 = clip;
  _.$_$.j1 = modifyComponentStyleBase;
  _.$_$.k1 = prepareSilkFoundation;
  _.$_$.l1 = Breakpoint_MD_getInstance;
  _.$_$.m1 = ColorMode_DARK_getInstance;
  _.$_$.n1 = ColorMode_LIGHT_getInstance;
  _.$_$.o1 = RectF_init_$Create$_2;
  _.$_$.p1 = Companion_getInstance_5;
  _.$_$.q1 = Companion_getInstance_10;
  _.$_$.r1 = Blue_getInstance;
  _.$_$.s1 = Gray_getInstance;
  _.$_$.t1 = Monochrome_getInstance;
  _.$_$.u1 = Red_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-silk-foundation.js.map
