(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-runtime-runtime.js', './kobweb-frontend-kobweb-compose.js', './html-html-core.js', './kobweb-frontend-compose-html-ext.js', './kobweb-frontend-browser-ext.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./html-html-core.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./kobweb-frontend-browser-ext.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof this['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof this['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof this['kobweb-frontend-browser-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kobweb-frontend-browser-ext' was not found. Please, check whether 'kobweb-frontend-browser-ext' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    root['kobweb-frontend-silk-foundation'] = factory(typeof this['kobweb-frontend-silk-foundation'] === 'undefined' ? {} : this['kobweb-frontend-silk-foundation'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-compose-runtime-runtime'], this['kobweb-frontend-kobweb-compose'], this['html-html-core'], this['kobweb-frontend-compose-html-ext'], this['kobweb-frontend-browser-ext']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_com_varabyte_kobweb_browser_ext) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.d2;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var THROW_CCE = kotlin_kotlin.$_$.n8;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var KobwebComposeStyleSheet_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g3;
  var Style = kotlin_org_jetbrains_compose_html_html_core.$_$.v3;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var StyleSheet = kotlin_org_jetbrains_compose_html_html_core.$_$.h1;
  var VOID = kotlin_kotlin.$_$.c;
  var StyleSheet_init_$Init$ = kotlin_org_jetbrains_compose_html_html_core.$_$.b;
  var protoOf = kotlin_kotlin.$_$.j6;
  var objectMeta = kotlin_kotlin.$_$.i6;
  var setMetadataFor = kotlin_kotlin.$_$.k6;
  var mapCapacity = kotlin_kotlin.$_$.u3;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.n;
  var ComparableStyleScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d;
  var toStyles = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e3;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.o;
  var From_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.h;
  var to = kotlin_kotlin.$_$.c9;
  var To_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.i;
  var equals = kotlin_kotlin.$_$.q5;
  var hashCode = kotlin_kotlin.$_$.w5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.g;
  var StyleScopeBuilder = kotlin_org_jetbrains_compose_html_html_core.$_$.f1;
  var CSSKeyframeRuleDeclaration = kotlin_org_jetbrains_compose_html_html_core.$_$.x;
  var CSSKeyframesRuleDeclaration = kotlin_org_jetbrains_compose_html_html_core.$_$.y;
  var classMeta = kotlin_kotlin.$_$.n5;
  var listOf = kotlin_kotlin.$_$.t3;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.u2;
  var distinct = kotlin_kotlin.$_$.z2;
  var lazy = kotlin_kotlin.$_$.v8;
  var removeSuffix = kotlin_kotlin.$_$.n7;
  var titleCamelCaseToKebabCase = kotlin_com_varabyte_kobweb_browser_ext.$_$.e;
  var toString = kotlin_kotlin.$_$.m6;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.e1;
  var CSSAnimation = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c;
  var KProperty1 = kotlin_kotlin.$_$.v6;
  var getPropertyCallableRef = kotlin_kotlin.$_$.u5;
  var Raw = kotlin_org_jetbrains_compose_html_html_core.$_$.a1;
  var classNames = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w;
  var Companion_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r3;
  var Companion_instance_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.k;
  var display = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z;
  var KProperty0 = kotlin_kotlin.$_$.u6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.h;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.n1;
  var ComparableAttrsScope_init_$Create$ = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l2;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d3;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.w;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.q1;
  var charSequenceLength = kotlin_kotlin.$_$.m5;
  var charSequenceGet = kotlin_kotlin.$_$.l5;
  var substringAfter = kotlin_kotlin.$_$.y7;
  var substringBefore = kotlin_kotlin.$_$.z7;
  var substringAfterLast = kotlin_kotlin.$_$.w7;
  var removePrefix = kotlin_kotlin.$_$.m7;
  var kebabCaseToTitleCamelCase = kotlin_com_varabyte_kobweb_browser_ext.$_$.c;
  var joinToString = kotlin_kotlin.$_$.l3;
  var isNotEmpty = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a1;
  var media = kotlin_org_jetbrains_compose_html_html_core.$_$.p2;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.b1;
  var mutableListOf = kotlin_kotlin.$_$.x3;
  var plus = kotlin_kotlin.$_$.a4;
  var substringAfterLast_0 = kotlin_kotlin.$_$.v7;
  var toSet = kotlin_kotlin.$_$.m4;
  var endsWith = kotlin_kotlin.$_$.f7;
  var copyToArray = kotlin_kotlin.$_$.y2;
  var getValue = kotlin_kotlin.$_$.j3;
  var toList = kotlin_kotlin.$_$.k4;
  var listOf_0 = kotlin_kotlin.$_$.s3;
  var emptyList = kotlin_kotlin.$_$.a3;
  var getStringHashCode = kotlin_kotlin.$_$.v5;
  var isBlank = kotlin_kotlin.$_$.h7;
  var first = kotlin_kotlin.$_$.g7;
  var Char = kotlin_kotlin.$_$.g8;
  var setOf = kotlin_kotlin.$_$.f4;
  var enumEntries = kotlin_kotlin.$_$.f5;
  var Enum = kotlin_kotlin.$_$.h8;
  var endsWith_0 = kotlin_kotlin.$_$.e7;
  var startsWith = kotlin_kotlin.$_$.u7;
  var Companion_instance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d3;
  var whiteSpace = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z2;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var Span = kotlin_org_jetbrains_compose_html_html_core.$_$.u3;
  var registerRefScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e2;
  var Text = kotlin_org_jetbrains_compose_html_html_core.$_$.x3;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o;
  var CompositionLocalProvider = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var DisposableEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var invokeLater = kotlin_com_varabyte_kobweb_browser_ext.$_$.a;
  var asList = kotlin_kotlin.$_$.e9;
  var Map = kotlin_kotlin.$_$.n2;
  var isInterface = kotlin_kotlin.$_$.b6;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.p;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.s1;
  var trimIndent = kotlin_kotlin.$_$.c8;
  var MediaFeature = kotlin_org_jetbrains_compose_html_html_core.$_$.z;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.x2;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.w8;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l;
  var Companion_instance_2 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h3;
  var interfaceMeta = kotlin_kotlin.$_$.y5;
  var ensureNotNull = kotlin_kotlin.$_$.u8;
  var styleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b3;
  var objectCreate = kotlin_kotlin.$_$.h6;
  //endregion
  //region block: pre-declaration
  setMetadataFor(SilkStyleSheet, 'SilkStyleSheet', objectMeta, StyleSheet);
  setMetadataFor(KeyframesBuilder, 'KeyframesBuilder', classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(Keyframes, 'Keyframes', classMeta);
  setMetadataFor(CacheByPropertyNameDelegate, 'CacheByPropertyNameDelegate', classMeta);
  setMetadataFor(KeyframesProvider, 'KeyframesProvider', classMeta, CacheByPropertyNameDelegate);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(ComponentStyle, 'ComponentStyle', classMeta);
  setMetadataFor(ComponentStyleProvider, 'ComponentStyleProvider', classMeta, CacheByPropertyNameDelegate);
  setMetadataFor(StyleModifiers, 'StyleModifiers', classMeta);
  setMetadataFor(ComponentModifiers, 'ComponentModifiers', classMeta, StyleModifiers);
  setMetadataFor(Light, 'Light', classMeta);
  setMetadataFor(Dark, 'Dark', classMeta);
  setMetadataFor(ColorAgnostic, 'ColorAgnostic', classMeta);
  setMetadataFor(ColorAware, 'ColorAware', classMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(ImmutableComponentStyle, 'ImmutableComponentStyle', classMeta);
  setMetadataFor(ComponentBaseModifier, 'ComponentBaseModifier', classMeta);
  setMetadataFor(ComponentVariant, 'ComponentVariant', classMeta);
  setMetadataFor(SimpleComponentVariant, 'SimpleComponentVariant', classMeta, ComponentVariant);
  setMetadataFor(CompositeComponentVariant, 'CompositeComponentVariant', classMeta, ComponentVariant);
  setMetadataFor(ComponentVariantProvider, 'ComponentVariantProvider', classMeta, CacheByPropertyNameDelegate);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(CssRule, 'CssRule', classMeta);
  setMetadataFor(NonMediaCssRule, 'NonMediaCssRule', classMeta, CssRule);
  setMetadataFor(OfAttributeSelector, 'OfAttributeSelector', classMeta, NonMediaCssRule);
  setMetadataFor(OfPseudoClass, 'OfPseudoClass', classMeta, NonMediaCssRule);
  setMetadataFor(OfPseudoElement, 'OfPseudoElement', classMeta, NonMediaCssRule);
  setMetadataFor(CompositeOpen, 'CompositeOpen', classMeta, NonMediaCssRule);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(Key, 'Key', classMeta);
  setMetadataFor(CssModifier, 'CssModifier', classMeta);
  setMetadataFor(Breakpoint, 'Breakpoint', classMeta, Enum);
  setMetadataFor(BreakpointValues, 'BreakpointValues', classMeta);
  setMetadataFor(BreakpointUnitValue, 'BreakpointUnitValue', classMeta);
  setMetadataFor(Rem, 'Rem', classMeta, BreakpointUnitValue);
  setMetadataFor(Entry, 'Entry', classMeta);
  setMetadataFor(DeferredComposablesState, 'DeferredComposablesState', classMeta, VOID, VOID, DeferredComposablesState);
  setMetadataFor(ComposableSingletons$DeferredKt, 'ComposableSingletons$DeferredKt', objectMeta);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta);
  setMetadataFor(InitSilkContext, 'InitSilkContext', classMeta);
  setMetadataFor(MutableSilkConfig, 'MutableSilkConfig', classMeta, VOID, VOID, MutableSilkConfig);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(SilkStylesheetInstance, 'SilkStylesheetInstance', objectMeta);
  setMetadataFor(MutableSilkTheme, 'MutableSilkTheme', classMeta, VOID, VOID, MutableSilkTheme);
  setMetadataFor(ImmutableSilkTheme, 'ImmutableSilkTheme', classMeta);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(ColorMode, 'ColorMode', classMeta, Enum);
  setMetadataFor(Red, 'Red', objectMeta);
  setMetadataFor(Blue, 'Blue', objectMeta);
  setMetadataFor(Gray, 'Gray', objectMeta);
  function get(colorMode) {
    var tmp;
    switch (colorMode.t9_1) {
      case 0:
        tmp = this.j2v();
        break;
      case 1:
        tmp = this.k2v();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  setMetadataFor(Palettes, 'Palettes', interfaceMeta);
  setMetadataFor(MutablePalettes, 'MutablePalettes', classMeta, VOID, [Palettes], MutablePalettes);
  function getValue_0(key) {
    return ensureNotNull(this.m2v(key));
  }
  setMetadataFor(Palette, 'Palette', interfaceMeta);
  setMetadataFor(EntryDelegate, 'EntryDelegate', classMeta);
  setMetadataFor(ColorGroup, 'ColorGroup', classMeta);
  setMetadataFor(MutablePalette, 'MutablePalette', classMeta, VOID, [Palette], MutablePalette);
  setMetadataFor(RectF, 'RectF', classMeta, VOID, VOID, RectF_init_$Create$);
  setMetadataFor(Path, 'Path', classMeta);
  setMetadataFor(InsetPath, 'InsetPath', classMeta, Path);
  //endregion
  function prepareSilkFoundation(initSilk_0, content, $composer, $changed, $default) {
    var initSilk_1 = {_v: initSilk_0};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h19(-776510055);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.k18(initSilk_1._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.k18(content) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.k17()) {
      if (!(($default & 1) === 0)) {
        $composer_0.p17(2035960038);
        // Inline function 'androidx.compose.runtime.cache' call
        var this_0 = $composer_0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = this_0.t18();
        var tmp;
        if (false ? true : it === Companion_getInstance().h12_1) {
          // Inline function 'com.varabyte.kobweb.silk.prepareSilkFoundation.<anonymous>' call
          var value = prepareSilkFoundation$lambda;
          this_0.z18(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        $composer_0.q17();
        initSilk_1._v = tmp0_group;
      }
      if (isTraceInProgress()) {
        traceEventStart(-776510055, $dirty, -1, 'com.varabyte.kobweb.silk.prepareSilkFoundation (PrepareSilkFoundation.kt:10)');
      }
      $composer_0.s14(2035960081, Unit_instance);
      $composer_0.p17(2035960185);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.t18();
      var tmp_1;
      if (invalid ? true : it_0 === Companion_getInstance().h12_1) {
        // Inline function 'com.varabyte.kobweb.silk.prepareSilkFoundation.<anonymous>' call
        var value_0 = prepareSilkFoundation$lambda_0(initSilk_1);
        this_1.z18(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.q17();
      initSilk(tmp1_group);
      $composer_0.v14();
      // Inline function 'org.jetbrains.compose.web.css.Style' call
      var styleSheet = KobwebComposeStyleSheet_getInstance();
      var $composer_1 = $composer_0;
      $composer_1.p17(-1196466140);
      Style(null, styleSheet.a28(), $composer_1, 0, 1);
      $composer_1.q17();
      // Inline function 'org.jetbrains.compose.web.css.Style' call
      var styleSheet_0 = SilkStyleSheet_getInstance();
      var $composer_2 = $composer_0;
      $composer_2.p17(-1196466140);
      Style(null, styleSheet_0.a28(), $composer_2, 0, 1);
      $composer_2.q17();
      content($composer_0, 14 & $dirty >> 3);
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
      tmp2_safe_receiver.f1e(prepareSilkFoundation$lambda_1(initSilk_1, content, $changed, $default));
    }
  }
  function prepareSilkFoundation$lambda(it) {
    return Unit_instance;
  }
  function prepareSilkFoundation$lambda_0($initSilk) {
    return function (ctx) {
      $initSilk._v(ctx);
      return Unit_instance;
    };
  }
  function prepareSilkFoundation$lambda_1($initSilk, $content, $$changed, $$default) {
    return function ($composer, $force) {
      prepareSilkFoundation($initSilk._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function SilkStyleSheet() {
    SilkStyleSheet_instance = this;
    StyleSheet_init_$Init$(VOID, VOID, this);
  }
  protoOf(SilkStyleSheet).e28 = function (selector, cssRule) {
    return this.d28(selector, cssRule);
  };
  var SilkStyleSheet_instance;
  function SilkStyleSheet_getInstance() {
    if (SilkStyleSheet_instance == null)
      new SilkStyleSheet();
    return SilkStyleSheet_instance;
  }
  function _get_comparableKeyframeStyles__erog4h($this) {
    // Inline function 'kotlin.collections.mapValues' call
    var this_0 = $this.u2o_1;
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination = LinkedHashMap_init_$Create$(mapCapacity(this_0.i()));
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_iterator = this_0.f2().k();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      var tmp = element.i2();
      // Inline function 'com.varabyte.kobweb.silk.components.animation.KeyframesBuilder.<get-comparableKeyframeStyles>.<anonymous>' call
      // Inline function 'kotlin.collections.component2' call
      var modifier = element.j2();
      // Inline function 'kotlin.apply' call
      var this_1 = new ComparableStyleScope();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.animation.KeyframesBuilder.<get-comparableKeyframeStyles>.<anonymous>.<anonymous>' call
      toStyles(modifier)(this_1);
      destination.g2(tmp, this_1);
    }
    return destination;
  }
  function KeyframesBuilder(colorMode) {
    this.t2o_1 = colorMode;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.u2o_1 = LinkedHashMap_init_$Create$_0();
  }
  protoOf(KeyframesBuilder).v2o = function (createStyle) {
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = this.u2o_1;
    var pair = to(From_getInstance(), createStyle());
    this_0.g2(pair.ce_1, pair.de_1);
  };
  protoOf(KeyframesBuilder).w2o = function (createStyle) {
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = this.u2o_1;
    var pair = to(To_getInstance(), createStyle());
    this_0.g2(pair.ce_1, pair.de_1);
  };
  protoOf(KeyframesBuilder).equals = function (other) {
    if (!(other instanceof KeyframesBuilder))
      return false;
    return this === other ? true : equals(_get_comparableKeyframeStyles__erog4h(this), _get_comparableKeyframeStyles__erog4h(other));
  };
  protoOf(KeyframesBuilder).hashCode = function () {
    return hashCode(_get_comparableKeyframeStyles__erog4h(this));
  };
  protoOf(KeyframesBuilder).x2o = function (stylesheet, keyframesName) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.u2o_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(this_0.i());
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this_0.f2().k();
    while (tmp0_iterator.x()) {
      var item = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.components.animation.KeyframesBuilder.addKeyframesIntoStylesheet.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var keyframe = item.i2();
      // Inline function 'kotlin.collections.component2' call
      var modifier = item.j2();
      var styles = toStyles(modifier);
      var cssRuleBuilder = new StyleScopeBuilder();
      styles(cssRuleBuilder);
      var tmp$ret$3 = new CSSKeyframeRuleDeclaration(keyframe, cssRuleBuilder);
      destination.u(tmp$ret$3);
    }
    var keyframeRules = destination;
    stylesheet.o26(new CSSKeyframesRuleDeclaration(keyframesName, keyframeRules));
  };
  function Companion() {
  }
  protoOf(Companion).y2o = function (build) {
    // Inline function 'kotlin.collections.count' call
    // Inline function 'kotlin.collections.map' call
    var this_0 = listOf([ColorMode_LIGHT_getInstance(), ColorMode_DARK_getInstance()]);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.k();
    while (tmp0_iterator.x()) {
      var item = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.components.animation.Companion.isColorModeAgnostic.<anonymous>' call
      // Inline function 'kotlin.apply' call
      var this_1 = new KeyframesBuilder(item);
      // Inline function 'kotlin.contracts.contract' call
      build(this_1);
      destination.u(this_1);
    }
    return distinct(destination).i() === 1;
  };
  var Companion_instance_3;
  function Companion_getInstance_0() {
    return Companion_instance_3;
  }
  function Keyframes$usesColorMode$delegate$lambda(this$0) {
    return function () {
      return !Companion_instance_3.y2o(this$0.z2o_1);
    };
  }
  function Keyframes(name, prefix, init) {
    prefix = prefix === VOID ? null : prefix;
    this.z2o_1 = init;
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
    tmp.a2p_1 = tmp1_elvis_lhs == null ? name : tmp1_elvis_lhs;
    var tmp_1 = this;
    tmp_1.b2p_1 = lazy(Keyframes$usesColorMode$delegate$lambda(this));
  }
  protoOf(Keyframes).c2p = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.b2p_1;
    usesColorMode$factory();
    return this_0.j2();
  };
  function KeyframesProvider(prefix, init) {
    CacheByPropertyNameDelegate.call(this);
    this.e2p_1 = prefix;
    this.f2p_1 = init;
  }
  protoOf(KeyframesProvider).p2g = function (propertyName) {
    var name = titleCamelCaseToKebabCase(removeSuffix(removeSuffix(removeSuffix(propertyName, 'Anim'), 'Animation'), 'Keyframes'));
    return new Keyframes(name, this.e2p_1, this.f2p_1);
  };
  function Keyframes_0(prefix, init) {
    prefix = prefix === VOID ? null : prefix;
    return new KeyframesProvider(prefix, init);
  }
  function registerKeyframes(_this__u8e3s4, keyframes) {
    return _this__u8e3s4.h2p(keyframes.a2p_1, keyframes.z2o_1);
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
    $composer_0.p17(-792208502);
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
    var colorMode = _this__u8e3s4.c2p() ? Companion_instance_9.i2p($composer_0, 6) : null;
    var tmp0 = toAnimation_0(_this__u8e3s4, colorMode, duration_0, timingFunction_0, delay_0, iterationCount_0, direction_0, fillMode_0, playState_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.q17();
    return tmp0;
  }
  function toAnimation_0(_this__u8e3s4, colorMode, duration, timingFunction, delay, iterationCount, direction, fillMode, playState) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    iterationCount = iterationCount === VOID ? null : iterationCount;
    direction = direction === VOID ? null : direction;
    fillMode = fillMode === VOID ? null : fillMode;
    playState = playState === VOID ? null : playState;
    var tmp;
    if (_this__u8e3s4.c2p()) {
      var tmp_0;
      if (colorMode == null) {
        var message = 'Animation ' + _this__u8e3s4.a2p_1 + " depends on the site's color mode but no color mode was specified.";
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
      tmp_1 = suffixedWith(_this__u8e3s4.a2p_1, colorMode_0);
    } else {
      tmp_1 = _this__u8e3s4.a2p_1;
    }
    var finalName = tmp_1;
    return new CSSAnimation(finalName, duration, timingFunction, delay, iterationCount, direction, fillMode, playState);
  }
  function usesColorMode$factory() {
    return getPropertyCallableRef('usesColorMode', 1, KProperty1, function (receiver) {
      return receiver.c2p();
    }, null);
  }
  function get_DisplayIfAtLeastZeroStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastZeroStyle$delegate.i2f(null, DisplayIfAtLeastZeroStyle$factory());
  }
  var DisplayIfAtLeastZeroStyle$delegate;
  function get_DisplayIfAtLeastSmStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastSmStyle$delegate.i2f(null, DisplayIfAtLeastSmStyle$factory());
  }
  var DisplayIfAtLeastSmStyle$delegate;
  function get_DisplayIfAtLeastMdStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastMdStyle$delegate.i2f(null, DisplayIfAtLeastMdStyle$factory());
  }
  var DisplayIfAtLeastMdStyle$delegate;
  function get_DisplayIfAtLeastLgStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastLgStyle$delegate.i2f(null, DisplayIfAtLeastLgStyle$factory());
  }
  var DisplayIfAtLeastLgStyle$delegate;
  function get_DisplayIfAtLeastXlStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastXlStyle$delegate.i2f(null, DisplayIfAtLeastXlStyle$factory());
  }
  var DisplayIfAtLeastXlStyle$delegate;
  function get_DisplayUntilZeroStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilZeroStyle$delegate.i2f(null, DisplayUntilZeroStyle$factory());
  }
  var DisplayUntilZeroStyle$delegate;
  function get_DisplayUntilSmStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilSmStyle$delegate.i2f(null, DisplayUntilSmStyle$factory());
  }
  var DisplayUntilSmStyle$delegate;
  function get_DisplayUntilMdStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilMdStyle$delegate.i2f(null, DisplayUntilMdStyle$factory());
  }
  var DisplayUntilMdStyle$delegate;
  function get_DisplayUntilLgStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilLgStyle$delegate.i2f(null, DisplayUntilLgStyle$factory());
  }
  var DisplayUntilLgStyle$delegate;
  function get_DisplayUntilXlStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilXlStyle$delegate.i2f(null, DisplayUntilXlStyle$factory());
  }
  var DisplayUntilXlStyle$delegate;
  function invert(_this__u8e3s4) {
    _init_properties_BreakpointConditions_kt__53om95();
    return new Raw('not all and ' + _this__u8e3s4);
  }
  function displayUntil(_this__u8e3s4, breakpoint) {
    _init_properties_BreakpointConditions_kt__53om95();
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = breakpoint.s9_1.toLowerCase();
    return classNames(_this__u8e3s4, ['silk-display-until-' + tmp$ret$1]);
  }
  function displayIfAtLeast(_this__u8e3s4, breakpoint) {
    _init_properties_BreakpointConditions_kt__53om95();
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = breakpoint.s9_1.toLowerCase();
    return classNames(_this__u8e3s4, ['silk-display-if-at-least-' + tmp$ret$1]);
  }
  function DisplayIfAtLeastZeroStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_ZERO_getInstance()));
    $this$ComponentStyle.l2p(tmp, DisplayIfAtLeastZeroStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function DisplayIfAtLeastZeroStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayIfAtLeastSmStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_SM_getInstance()));
    $this$ComponentStyle.l2p(tmp, DisplayIfAtLeastSmStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function DisplayIfAtLeastSmStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayIfAtLeastMdStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_MD_getInstance()));
    $this$ComponentStyle.l2p(tmp, DisplayIfAtLeastMdStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function DisplayIfAtLeastMdStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayIfAtLeastLgStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_LG_getInstance()));
    $this$ComponentStyle.l2p(tmp, DisplayIfAtLeastLgStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function DisplayIfAtLeastLgStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayIfAtLeastXlStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_XL_getInstance()));
    $this$ComponentStyle.l2p(tmp, DisplayIfAtLeastXlStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function DisplayIfAtLeastXlStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayUntilZeroStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_ZERO_getInstance();
    $this$ComponentStyle.m2p(tmp, DisplayUntilZeroStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function DisplayUntilZeroStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayUntilSmStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_SM_getInstance();
    $this$ComponentStyle.m2p(tmp, DisplayUntilSmStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function DisplayUntilSmStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayUntilMdStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_MD_getInstance();
    $this$ComponentStyle.m2p(tmp, DisplayUntilMdStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function DisplayUntilMdStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayUntilLgStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_LG_getInstance();
    $this$ComponentStyle.m2p(tmp, DisplayUntilLgStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function DisplayUntilLgStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayUntilXlStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_XL_getInstance();
    $this$ComponentStyle.m2p(tmp, DisplayUntilXlStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function DisplayUntilXlStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
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
      DisplayIfAtLeastZeroStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayIfAtLeastZeroStyle$delegate$lambda);
      DisplayIfAtLeastSmStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayIfAtLeastSmStyle$delegate$lambda);
      DisplayIfAtLeastMdStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayIfAtLeastMdStyle$delegate$lambda);
      DisplayIfAtLeastLgStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayIfAtLeastLgStyle$delegate$lambda);
      DisplayIfAtLeastXlStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayIfAtLeastXlStyle$delegate$lambda);
      DisplayUntilZeroStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayUntilZeroStyle$delegate$lambda);
      DisplayUntilSmStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayUntilSmStyle$delegate$lambda);
      DisplayUntilMdStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayUntilMdStyle$delegate$lambda);
      DisplayUntilLgStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayUntilLgStyle$delegate$lambda);
      DisplayUntilXlStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayUntilXlStyle$delegate$lambda);
    }
  }
  function Companion_0() {
  }
  var Companion_instance_4;
  function Companion_getInstance_1() {
    return Companion_instance_4;
  }
  function addStyles(_this__u8e3s4, $this, cssRule, styles) {
    _this__u8e3s4.f28(cssRule, ComponentStyle$addStyles$lambda(styles));
  }
  function withFinalSelectorName($this, selectorBaseName, group, handler) {
    if (group instanceof Light)
      handler(suffixedWith(selectorBaseName, ColorMode_LIGHT_getInstance()), group.r2p_1);
    else {
      if (group instanceof Dark)
        handler(suffixedWith(selectorBaseName, ColorMode_DARK_getInstance()), group.q2p_1);
      else {
        if (group instanceof ColorAgnostic)
          handler(selectorBaseName, group.p2p_1);
        else {
          if (group instanceof ColorAware) {
            handler(suffixedWith(selectorBaseName, ColorMode_LIGHT_getInstance()), group.n2p_1);
            handler(suffixedWith(selectorBaseName, ColorMode_DARK_getInstance()), group.o2p_1);
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
    var this_0 = _this__u8e3s4.k2p_1;
    var destination = LinkedHashMap_init_$Create$_0();
    var tmp0_iterator = this_0.k();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.mergeCssModifiers.<anonymous>' call
      var key = element.i2();
      // Inline function 'kotlin.collections.getOrPut' call
      var value = destination.p2(key);
      var tmp;
      if (value == null) {
        // Inline function 'kotlin.collections.groupByTo.<anonymous>' call
        var answer = ArrayList_init_$Create$_0();
        destination.g2(key, answer);
        tmp = answer;
      } else {
        tmp = value;
      }
      var list = tmp;
      list.u(element);
    }
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination_0 = LinkedHashMap_init_$Create$(mapCapacity(destination.i()));
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_iterator_0 = destination.f2().k();
    while (tmp0_iterator_0.x()) {
      var element_0 = tmp0_iterator_0.z();
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      var tmp_0 = element_0.i2();
      // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.mergeCssModifiers.<anonymous>' call
      // Inline function 'kotlin.collections.component2' call
      var group = element_0.j2();
      // Inline function 'kotlin.collections.reduce' call
      var iterator = group.k();
      if (!iterator.x())
        throw UnsupportedOperationException_init_$Create$("Empty collection can't be reduced.");
      var accumulator = iterator.z();
      while (iterator.x()) {
        // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.mergeCssModifiers.<anonymous>.<anonymous>' call
        var acc = accumulator;
        var curr = iterator.z();
        accumulator = acc.v2p(curr);
      }
      var tmp$ret$10 = accumulator;
      destination_0.g2(tmp_0, tmp$ret$10);
    }
    return destination_0;
  }
  function assertNoAttributeModifiers(_this__u8e3s4, $this, selectorName) {
    // Inline function 'kotlin.collections.onEach' call
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.onEach.<anonymous>' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = _this__u8e3s4.f2().k();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      $l$block: {
        // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.assertNoAttributeModifiers.<anonymous>' call
        // Inline function 'kotlin.collections.component2' call
        var cssModifier = element.j2();
        var attrsScope = ComparableAttrsScope_init_$Create$();
        toAttrs(cssModifier.s2p_1)(attrsScope);
        if (attrsScope.b2c_1.o()) {
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
        this_0.q5(value).r5(_Char___init__impl__6a9atx(10));
        // Inline function 'kotlin.text.appendLine' call
        this_0.r5(_Char___init__impl__6a9atx(10));
        // Inline function 'kotlin.text.appendLine' call
        var value_0 = 'Details:';
        // Inline function 'kotlin.text.appendLine' call
        this_0.q5(value_0).r5(_Char___init__impl__6a9atx(10));
        this_0.q5('\tCSS rule: ');
        this_0.q5('"' + selectorName);
        if (!(cssModifier.t2p_1 == null)) {
          this_0.p5(cssModifier.t2p_1);
        }
        if (!(cssModifier.u2p_1 == null)) {
          this_0.q5(cssModifier.u2p_1);
        }
        this_0.q5('"');
        this_0.q5(' (do you declare a property called ');
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
          this_0.q5('`' + kebabCaseToTitleCamelCase(styleName) + 'Style`');
        } else {
          var variantPart = removePrefix(substringAfterLast(selectorName, '.'), styleName + '-');
          this_0.q5('`' + kebabCaseToTitleCamelCase(styleName + '-' + variantPart) + 'Variant`');
          this_0.q5(' or ');
          this_0.q5('`' + kebabCaseToTitleCamelCase(variantPart + '-' + styleName) + 'Variant`');
        }
        // Inline function 'kotlin.text.appendLine' call
        // Inline function 'kotlin.text.appendLine' call
        this_0.q5('?)').r5(_Char___init__impl__6a9atx(10));
        // Inline function 'kotlin.text.appendLine' call
        var tmp = attrsScope.b2c_1.d2();
        var value_1 = '\tAttribute(s): ' + joinToString(tmp, ', ', VOID, VOID, VOID, VOID, ComponentStyle$assertNoAttributeModifiers$lambda);
        // Inline function 'kotlin.text.appendLine' call
        this_0.q5(value_1).r5(_Char___init__impl__6a9atx(10));
        // Inline function 'kotlin.text.appendLine' call
        this_0.r5(_Char___init__impl__6a9atx(10));
        // Inline function 'kotlin.text.appendLine' call
        var value_2 = 'An example of how to fix this:';
        // Inline function 'kotlin.text.appendLine' call
        this_0.q5(value_2).r5(_Char___init__impl__6a9atx(10));
        // Inline function 'kotlin.text.appendLine' call
        var value_3 = '   // Before\n   val ExampleStyle by ComponentStyle {\n       base {\n          Modifier\n              .backgroundColor(Colors.Magenta))\n              .tabIndex(0) // <-- The offending attribute modifier\n       }\n   }\n   \n   // After\n   val ExampleStyle by ComponentStyle(extraModifiers = Modifier.tabIndex(0)) {\n       base {\n           Modifier.backgroundColor(Colors.Magenta)\n       }\n   }';
        // Inline function 'kotlin.text.appendLine' call
        this_0.q5(value_3).r5(_Char___init__impl__6a9atx(10));
        var message = this_0.toString();
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
    return _this__u8e3s4;
  }
  function ComponentStyle$addStyles$lambda($styles) {
    return function ($this$null) {
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator = $styles.v2c_1.f2().k();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addStyles.<anonymous>.<anonymous>' call
        $this$null.c27(element.i2(), element.j2());
      }
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator_0 = $styles.w2c_1.f2().k();
      while (tmp0_iterator_0.x()) {
        var element_0 = tmp0_iterator_0.z();
        // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addStyles.<anonymous>.<anonymous>' call
        $this$null.i27(element_0.i2(), element_0.j2());
      }
      return Unit_instance;
    };
  }
  function ComponentStyle$assertNoAttributeModifiers$lambda(it) {
    return '"' + it + '"';
  }
  function ComponentStyle$addStylesInto$lambda($classNames, this$0, $styleSheet) {
    return function (name, styles) {
      var tmp;
      if (isNotEmpty(styles)) {
        $classNames.u(name);
        addStyles($styleSheet, this$0, name, styles);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComponentStyle$addStylesInto$lambda$lambda(this$0, $cssRule, $styles) {
    return function ($this$media) {
      addStyles($this$media, this$0, $cssRule, $styles);
      return Unit_instance;
    };
  }
  function ComponentStyle$addStylesInto$lambda_0($classNames, $cssRuleKey, $styleSheet, this$0) {
    return function (name, styles) {
      var tmp;
      if (isNotEmpty(styles)) {
        $classNames.u(name);
        // Inline function 'kotlin.text.orEmpty' call
        var tmp0_elvis_lhs = $cssRuleKey.x2p_1;
        var cssRule = name + (tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs);
        var tmp_0;
        if (!($cssRuleKey.w2p_1 == null)) {
          // Inline function 'kotlin.apply' call
          var this_0 = $styleSheet;
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addStylesInto.<anonymous>.<anonymous>' call
          media(this_0, $cssRuleKey.w2p_1, ComponentStyle$addStylesInto$lambda$lambda(this$0, cssRule, styles));
          tmp_0 = Unit_instance;
        } else {
          addStyles($styleSheet, this$0, cssRule, styles);
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      }
      return Unit_instance;
    };
  }
  function ComponentStyle(name, extraModifiers, prefix, init) {
    prefix = prefix === VOID ? null : prefix;
    this.y2p_1 = extraModifiers;
    this.z2p_1 = prefix;
    this.a2q_1 = init;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(charSequenceLength(name) > 0)) {
      // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.<anonymous>' call
      var message = 'ComponentStyle name must not be empty';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.b2q_1 = name;
    var tmp = this;
    var tmp0_safe_receiver = this.z2p_1;
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
    tmp.c2q_1 = tmp1_elvis_lhs == null ? name : tmp1_elvis_lhs;
  }
  protoOf(ComponentStyle).d2q = function (name, extraModifiers, init) {
    return new SimpleComponentVariant(new ComponentStyle(this.c2q_1 + '-' + name, extraModifiers, null, init), this);
  };
  protoOf(ComponentStyle).e2q = function (styleSheet, selectorName) {
    var classNames = mutableListOf([selectorName]);
    var lightModifiers = assertNoAttributeModifiers(mergeCssModifiers(new ComponentModifiers(ColorMode_LIGHT_getInstance()), this, this.a2q_1), this, selectorName);
    var darkModifiers = assertNoAttributeModifiers(mergeCssModifiers(new ComponentModifiers(ColorMode_DARK_getInstance()), this, this.a2q_1), this, selectorName);
    var tmp = Companion_instance_5;
    var tmp0_safe_receiver = lightModifiers.p2(Companion_getInstance_4().f2q_1);
    var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s2p_1;
    var tmp1_safe_receiver = darkModifiers.p2(Companion_getInstance_4().f2q_1);
    var tmp2_safe_receiver = tmp.g2q(tmp_0, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.s2p_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      withFinalSelectorName(this, selectorName, tmp2_safe_receiver, ComponentStyle$addStylesInto$lambda(classNames, this, styleSheet));
    }
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_0 = plus(lightModifiers.d2(), darkModifiers.d2());
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = this_0.k();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addStylesInto.<anonymous>' call
      if (!element.equals(Companion_getInstance_4().f2q_1)) {
        destination.u(element);
      }
    }
    var allCssRuleKeys = destination;
    var tmp3_iterator = allCssRuleKeys.k();
    $l$loop: while (tmp3_iterator.x()) {
      var cssRuleKey = tmp3_iterator.z();
      var tmp_1 = Companion_instance_5;
      var tmp4_safe_receiver = lightModifiers.p2(cssRuleKey);
      var tmp_2 = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.s2p_1;
      var tmp5_safe_receiver = darkModifiers.p2(cssRuleKey);
      var tmp6_elvis_lhs = tmp_1.g2q(tmp_2, tmp5_safe_receiver == null ? null : tmp5_safe_receiver.s2p_1);
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
  protoOf(ComponentStyle).h2q = function (styleSheet) {
    return this.e2q(styleSheet, '.' + this.c2q_1);
  };
  protoOf(ComponentStyle).i2q = function (classSelectors) {
    return new ImmutableComponentStyle(classSelectors, this.y2p_1);
  };
  function ComponentStyleProvider(extraModifiers, prefix, init) {
    prefix = prefix === VOID ? null : prefix;
    CacheByPropertyNameDelegate.call(this);
    this.k2q_1 = extraModifiers;
    this.l2q_1 = prefix;
    this.m2q_1 = init;
  }
  protoOf(ComponentStyleProvider).p2g = function (propertyName) {
    var name = titleCamelCaseToKebabCase(removeSuffix(propertyName, 'Style'));
    return new ComponentStyle(name, this.k2q_1, this.l2q_1, this.m2q_1);
  };
  function ComponentStyle_0(extraModifiers, prefix, init) {
    extraModifiers = extraModifiers === VOID ? Companion_instance : extraModifiers;
    prefix = prefix === VOID ? null : prefix;
    return ComponentStyle_1(ComponentStyle$lambda(extraModifiers), prefix, init);
  }
  function ComponentModifiers(colorMode) {
    StyleModifiers.call(this);
    this.p2q_1 = colorMode;
  }
  protoOf(ComponentModifiers).q2q = function () {
    return this.p2q_1;
  };
  function Light(styles) {
    this.r2p_1 = styles;
  }
  function Dark(styles) {
    this.q2p_1 = styles;
  }
  function ColorAgnostic(styles) {
    this.p2p_1 = styles;
  }
  function ColorAware(lightStyles, darkStyles) {
    this.n2p_1 = lightStyles;
    this.o2p_1 = darkStyles;
  }
  function Companion_1() {
  }
  protoOf(Companion_1).g2q = function (lightModifiers, darkModifiers) {
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
  var Companion_instance_5;
  function Companion_getInstance_2() {
    return Companion_instance_5;
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
    var tmp0_iterator = this_0.k();
    while (tmp0_iterator.x()) {
      var item = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.components.style.ClassSelectors.<get-classNames>.<anonymous>' call
      var tmp$ret$0 = substringAfterLast_0(item, _Char___init__impl__6a9atx(46));
      destination.u(tmp$ret$0);
    }
    return destination;
  }
  function ImmutableComponentStyle(classSelectors, extraModifiers) {
    this.u2q_1 = extraModifiers;
    this.v2q_1 = toSet(_ClassSelectors___get_classNames__impl__eyto04(classSelectors));
  }
  protoOf(ImmutableComponentStyle).w2q = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.p17(-1123366866);
    if (isTraceInProgress()) {
      traceEventStart(-1123366866, $changed, -1, 'com.varabyte.kobweb.silk.components.style.ImmutableComponentStyle.toModifier (ComponentStyle.kt:287)');
    }
    $composer_0.p17(1240656943);
    // Inline function 'kotlin.collections.filterNot' call
    // Inline function 'kotlin.collections.filterNotTo' call
    var this_0 = this.v2q_1;
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = this_0.k();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.components.style.ImmutableComponentStyle.toModifier.<anonymous>' call
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = Companion_instance_9.i2p($composer_0, 6).z2q().s9_1.toLowerCase();
      if (!endsWith(element, tmp$ret$1)) {
        destination.u(element);
      }
    }
    $composer_0.q17();
    var currentClassNames = destination;
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!currentClassNames.o()) {
      var tmp_0 = Companion_instance;
      // Inline function 'kotlin.collections.toTypedArray' call
      var tmp$ret$6 = copyToArray(currentClassNames);
      tmp = classNames(tmp_0, tmp$ret$6.slice());
    } else {
      tmp = Companion_instance;
    }
    var tmp0 = tmp.t2m(this.u2q_1($composer_0, 0));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.q17();
    return tmp0;
  };
  function ComponentStyle_1(extraModifiers, prefix, init) {
    prefix = prefix === VOID ? null : prefix;
    return new ComponentStyleProvider(extraModifiers, prefix, init);
  }
  function toModifier(_this__u8e3s4, variants, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.p17(-974293209);
    if (isTraceInProgress()) {
      traceEventStart(-974293209, $changed, -1, 'com.varabyte.kobweb.silk.components.style.toModifier (ComponentStyle.kt:456)');
    }
    var tmp = getValue(get_SilkTheme().e2r_1, _this__u8e3s4.c2q_1).w2q($composer_0, 8);
    var tmp0_safe_receiver = combine(toList(variants), $composer_0, 8);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w2q($composer_0, 0);
    var tmp0 = tmp.t2m(tmp1_elvis_lhs == null ? Companion_instance : tmp1_elvis_lhs);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.q17();
    return tmp0;
  }
  function base(_this__u8e3s4, extraModifiers, prefix, init) {
    extraModifiers = extraModifiers === VOID ? Companion_instance : extraModifiers;
    prefix = prefix === VOID ? null : prefix;
    return base_1(_this__u8e3s4, base$lambda(extraModifiers), prefix, init);
  }
  function ComponentBaseModifier(colorMode) {
    this.f2r_1 = colorMode;
  }
  protoOf(ComponentBaseModifier).q2q = function () {
    return this.f2r_1;
  };
  function base_0(_this__u8e3s4, className, extraModifiers, init) {
    extraModifiers = extraModifiers === VOID ? Companion_instance : extraModifiers;
    return base_2(_this__u8e3s4, className, base$lambda_0(extraModifiers), init);
  }
  function base_1(_this__u8e3s4, extraModifiers, prefix, init) {
    prefix = prefix === VOID ? null : prefix;
    return new ComponentStyleProvider(extraModifiers, prefix, base$lambda_1(init));
  }
  function base_2(_this__u8e3s4, className, extraModifiers, init) {
    return new ComponentStyle(className, extraModifiers, VOID, base$lambda_2(init));
  }
  function ComponentStyle$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.p17(1744510051);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(1744510051, $changed, -1, 'com.varabyte.kobweb.silk.components.style.ComponentStyle.<anonymous> (ComponentStyle.kt:427)');
        tmp = Unit_instance;
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.q17();
      return tmp0;
    };
  }
  function base$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.p17(-1565522235);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-1565522235, $changed, -1, 'com.varabyte.kobweb.silk.components.style.base.<anonymous> (ComponentStyle.kt:439)');
        tmp = Unit_instance;
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.q17();
      return tmp0;
    };
  }
  function base$lambda_0($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.p17(1154855457);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(1154855457, $changed, -1, 'com.varabyte.kobweb.silk.components.style.base.<anonymous> (ComponentStyle.kt:396)');
        tmp = Unit_instance;
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.q17();
      return tmp0;
    };
  }
  function base$lambda$lambda($this_$receiver, $init) {
    return function () {
      // Inline function 'kotlin.let' call
      var this_0 = new ComponentBaseModifier($this_$receiver.p2q_1);
      // Inline function 'kotlin.contracts.contract' call
      return $init(this_0);
    };
  }
  function base$lambda_1($init) {
    return function ($this$$receiver) {
      $this$$receiver.r2q(base$lambda$lambda($this$$receiver, $init));
      return Unit_instance;
    };
  }
  function base$lambda$lambda_0($this_$receiver, $init) {
    return function () {
      // Inline function 'kotlin.let' call
      var this_0 = new ComponentBaseModifier($this_$receiver.p2q_1);
      // Inline function 'kotlin.contracts.contract' call
      return $init(this_0);
    };
  }
  function base$lambda_2($init) {
    return function ($this$$receiver) {
      $this$$receiver.r2q(base$lambda$lambda_0($this$$receiver, $init));
      return Unit_instance;
    };
  }
  function ComponentVariant() {
  }
  protoOf(ComponentVariant).g2r = function (next) {
    return new CompositeComponentVariant(this, next);
  };
  function SimpleComponentVariant(style, baseStyle) {
    ComponentVariant.call(this);
    this.h2r_1 = style;
    this.i2r_1 = baseStyle;
  }
  protoOf(SimpleComponentVariant).h2q = function (styleSheet) {
    return this.h2r_1.e2q(styleSheet, '.' + this.i2r_1.c2q_1 + '.' + this.h2r_1.c2q_1);
  };
  protoOf(SimpleComponentVariant).w2q = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.p17(25327230);
    if (isTraceInProgress()) {
      traceEventStart(25327230, $changed, -1, 'com.varabyte.kobweb.silk.components.style.SimpleComponentVariant.toModifier (ComponentVariant.kt:49)');
    }
    var tmp0 = toModifier(this.h2r_1, [], $composer_0, 64);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.q17();
    return tmp0;
  };
  protoOf(SimpleComponentVariant).i2q = function (classSelectors) {
    return this.h2r_1.i2q(classSelectors);
  };
  function CompositeComponentVariant(head, tail) {
    ComponentVariant.call(this);
    this.j2r_1 = head;
    this.k2r_1 = tail;
  }
  protoOf(CompositeComponentVariant).w2q = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.p17(-1522694879);
    if (isTraceInProgress()) {
      traceEventStart(-1522694879, $changed, -1, 'com.varabyte.kobweb.silk.components.style.CompositeComponentVariant.toModifier (ComponentVariant.kt:60)');
    }
    var tmp0 = this.j2r_1.w2q($composer_0, 0).t2m(this.k2r_1.w2q($composer_0, 0));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.q17();
    return tmp0;
  };
  function combine(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.p17(-1181076790);
    if (isTraceInProgress()) {
      traceEventStart(-1181076790, $changed, -1, 'com.varabyte.kobweb.silk.components.style.combine (ComponentVariant.kt:85)');
    }
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.collections.reduceOrNull' call
      var iterator = _this__u8e3s4.k();
      if (!iterator.x()) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var accumulator = iterator.z();
      while (iterator.x()) {
        // Inline function 'com.varabyte.kobweb.silk.components.style.combine.<anonymous>' call
        var acc = accumulator;
        var variant = iterator.z();
        var tmp;
        if (!(acc == null) ? !(variant == null) : false) {
          tmp = acc.g2r(variant);
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
    $composer_0.q17();
    return tmp0;
  }
  function ComponentVariantProvider(style, extraModifiers, init) {
    CacheByPropertyNameDelegate.call(this);
    this.m2r_1 = style;
    this.n2r_1 = extraModifiers;
    this.o2r_1 = init;
  }
  protoOf(ComponentVariantProvider).p2g = function (propertyName) {
    var withoutSuffix = titleCamelCaseToKebabCase(removeSuffix(propertyName, 'Variant'));
    // Inline function 'kotlin.takeIf' call
    var this_0 = removeSuffix(removePrefix(withoutSuffix, this.m2r_1.b2q_1 + '-'), '-' + this.m2r_1.b2q_1);
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
    return this.m2r_1.d2q(name, this.n2r_1, this.o2r_1);
  };
  function addVariantBase(_this__u8e3s4, extraModifiers, init) {
    extraModifiers = extraModifiers === VOID ? Companion_instance : extraModifiers;
    return addVariantBase_0(_this__u8e3s4, addVariantBase$lambda(extraModifiers), init);
  }
  function addVariant(_this__u8e3s4, extraModifiers, init) {
    extraModifiers = extraModifiers === VOID ? Companion_instance : extraModifiers;
    return addVariant_0(_this__u8e3s4, addVariant$lambda(extraModifiers), init);
  }
  function addVariantBase_0(_this__u8e3s4, extraModifiers, init) {
    return new ComponentVariantProvider(_this__u8e3s4, extraModifiers, addVariantBase$lambda_0(init));
  }
  function addVariant_0(_this__u8e3s4, extraModifiers, init) {
    return new ComponentVariantProvider(_this__u8e3s4, extraModifiers, init);
  }
  function addVariantBase$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.p17(-723673224);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-723673224, $changed, -1, 'com.varabyte.kobweb.silk.components.style.addVariantBase.<anonymous> (ComponentVariant.kt:125)');
        tmp = Unit_instance;
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.q17();
      return tmp0;
    };
  }
  function addVariant$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.p17(532712666);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(532712666, $changed, -1, 'com.varabyte.kobweb.silk.components.style.addVariant.<anonymous> (ComponentVariant.kt:119)');
        tmp = Unit_instance;
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.q17();
      return tmp0;
    };
  }
  function addVariantBase$lambda$lambda($this_$receiver, $init) {
    return function () {
      // Inline function 'kotlin.let' call
      var this_0 = new ComponentBaseModifier($this_$receiver.p2q_1);
      // Inline function 'kotlin.contracts.contract' call
      return $init(this_0);
    };
  }
  function addVariantBase$lambda_0($init) {
    return function ($this$$receiver) {
      $this$$receiver.r2q(addVariantBase$lambda$lambda($this$$receiver, $init));
      return Unit_instance;
    };
  }
  function Companion_2() {
  }
  protoOf(Companion_2).p2r = function (target, pseudoClass, params) {
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
      var tmp0_safe_receiver = element.s2r();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        destination.u(tmp0_safe_receiver);
      }
    }
    return new OfPseudoClass(target, pseudoClass + '(' + joinToString(destination) + ')');
  };
  var Companion_instance_6;
  function Companion_getInstance_3() {
    return Companion_instance_6;
  }
  function NonMediaCssRule(target) {
    CssRule.call(this, target);
  }
  function OfAttributeSelector(target, attributeSelector) {
    NonMediaCssRule.call(this, target);
    this.y2r_1 = attributeSelector;
  }
  protoOf(OfAttributeSelector).s2r = function () {
    return this.v2r(listOf_0(this), emptyList(), null);
  };
  function OfPseudoClass(target, pseudoClass) {
    NonMediaCssRule.call(this, target);
    this.b2s_1 = pseudoClass;
  }
  protoOf(OfPseudoClass).s2r = function () {
    return this.v2r(emptyList(), listOf_0(this), null);
  };
  protoOf(OfPseudoClass).c2s = function (other) {
    return new CompositeOpen(this.q2r_1, null, emptyList(), listOf([this, other]));
  };
  function OfPseudoElement(target, pseudoElement) {
    NonMediaCssRule.call(this, target);
    this.f2s_1 = pseudoElement;
  }
  protoOf(OfPseudoElement).s2r = function () {
    return this.v2r(emptyList(), emptyList(), this);
  };
  function CompositeOpen(target, mediaQuery, attributeSelectors, pseudoClasses) {
    NonMediaCssRule.call(this, target);
    this.i2s_1 = mediaQuery;
    this.j2s_1 = attributeSelectors;
    this.k2s_1 = pseudoClasses;
  }
  protoOf(CompositeOpen).u2r = function () {
    return this.i2s_1;
  };
  protoOf(CompositeOpen).s2r = function () {
    return this.v2r(this.j2s_1, this.k2s_1, null);
  };
  function CssRule(target) {
    this.q2r_1 = target;
    this.r2r_1 = null;
  }
  protoOf(CssRule).t2r = function (createModifier) {
    this.q2r_1.s2q(this.u2r(), this.s2r(), createModifier);
  };
  protoOf(CssRule).u2r = function () {
    return this.r2r_1;
  };
  protoOf(CssRule).s2r = function () {
    return null;
  };
  protoOf(CssRule).v2r = function (attributeSelectors, pseudoClasses, pseudoElement) {
    // Inline function 'kotlin.takeIf' call
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.components.style.CssRule.buildSelectorText.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = attributeSelectors.k();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.components.style.CssRule.buildSelectorText.<anonymous>.<anonymous>' call
      this_0.q5('[' + element.y2r_1 + ']');
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = pseudoClasses.k();
    while (tmp0_iterator_0.x()) {
      var element_0 = tmp0_iterator_0.z();
      // Inline function 'com.varabyte.kobweb.silk.components.style.CssRule.buildSelectorText.<anonymous>.<anonymous>' call
      this_0.q5(':' + element_0.b2s_1);
    }
    if (!(pseudoElement == null)) {
      this_0.q5('::' + pseudoElement.f2s_1);
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
    return Companion_instance_6.p2r(_this__u8e3s4, 'not', params.slice());
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
    Companion_instance_7 = this;
    this.f2q_1 = new Key(null, null);
  }
  var Companion_instance_7;
  function Companion_getInstance_4() {
    if (Companion_instance_7 == null)
      new Companion_3();
    return Companion_instance_7;
  }
  function Key(mediaQuery, suffix) {
    this.w2p_1 = mediaQuery;
    this.x2p_1 = suffix;
  }
  protoOf(Key).toString = function () {
    return 'Key(mediaQuery=' + this.w2p_1 + ', suffix=' + this.x2p_1 + ')';
  };
  protoOf(Key).hashCode = function () {
    var result = this.w2p_1 == null ? 0 : getStringHashCode(this.w2p_1);
    result = imul(result, 31) + (this.x2p_1 == null ? 0 : getStringHashCode(this.x2p_1)) | 0;
    return result;
  };
  protoOf(Key).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Key))
      return false;
    var tmp0_other_with_cast = other instanceof Key ? other : THROW_CCE();
    if (!(this.w2p_1 == tmp0_other_with_cast.w2p_1))
      return false;
    if (!(this.x2p_1 == tmp0_other_with_cast.x2p_1))
      return false;
    return true;
  };
  function CssModifier(modifier, mediaQuery, suffix) {
    Companion_getInstance_4();
    mediaQuery = mediaQuery === VOID ? null : mediaQuery;
    suffix = suffix === VOID ? null : suffix;
    this.s2p_1 = modifier;
    this.t2p_1 = mediaQuery;
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
      tmp_2 = !get_selectorSeparators().m(new Char(first(tmp1_safe_receiver))) ? ' ' + tmp1_safe_receiver : tmp1_safe_receiver;
    }
    tmp.u2p_1 = tmp_2;
  }
  protoOf(CssModifier).v2p = function (other) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((!(this === other) ? equals(this.t2p_1, other.t2p_1) : false) ? this.u2p_1 == other.u2p_1 : false)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return new CssModifier(this.s2p_1.t2m(other.s2p_1), this.t2p_1, this.u2p_1);
  };
  protoOf(CssModifier).i2 = function () {
    var tmp0_safe_receiver = this.t2p_1;
    return new Key(tmp0_safe_receiver == null ? null : toString(tmp0_safe_receiver), this.u2p_1);
  };
  function StyleModifiers() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.j2p_1 = ArrayList_init_$Create$_0();
    this.k2p_1 = this.j2p_1;
  }
  protoOf(StyleModifiers).r2q = function (createModifier) {
    this.j2p_1.u(new CssModifier(createModifier()));
  };
  protoOf(StyleModifiers).s2q = function (mediaQuery, suffix, createModifier) {
    this.j2p_1.u(new CssModifier(createModifier(), mediaQuery, suffix));
  };
  protoOf(StyleModifiers).t2q = function (suffix, createModifier) {
    this.j2p_1.u(new CssModifier(createModifier(), null, suffix));
  };
  protoOf(StyleModifiers).l2p = function (mediaQuery, createModifier) {
    this.j2p_1.u(new CssModifier(createModifier(), mediaQuery));
  };
  protoOf(StyleModifiers).m2p = function (_this__u8e3s4, createModifier) {
    this.l2p(toMinWidthQuery(_this__u8e3s4), createModifier);
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
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var Breakpoint_entriesInitialized;
  function Breakpoint_initEntries() {
    if (Breakpoint_entriesInitialized)
      return Unit_instance;
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
    this.l2s_1 = sm;
    this.m2s_1 = md;
    this.n2s_1 = lg;
    this.o2s_1 = xl;
  }
  protoOf(BreakpointValues).toString = function () {
    return 'BreakpointValues(sm=' + this.l2s_1 + ', md=' + this.m2s_1 + ', lg=' + this.n2s_1 + ', xl=' + this.o2s_1 + ')';
  };
  protoOf(BreakpointValues).hashCode = function () {
    var result = hashCode(this.l2s_1);
    result = imul(result, 31) + hashCode(this.m2s_1) | 0;
    result = imul(result, 31) + hashCode(this.n2s_1) | 0;
    result = imul(result, 31) + hashCode(this.o2s_1) | 0;
    return result;
  };
  protoOf(BreakpointValues).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BreakpointValues))
      return false;
    var tmp0_other_with_cast = other instanceof BreakpointValues ? other : THROW_CCE();
    if (!equals(this.l2s_1, tmp0_other_with_cast.l2s_1))
      return false;
    if (!equals(this.m2s_1, tmp0_other_with_cast.m2s_1))
      return false;
    if (!equals(this.n2s_1, tmp0_other_with_cast.n2s_1))
      return false;
    if (!equals(this.o2s_1, tmp0_other_with_cast.o2s_1))
      return false;
    return true;
  };
  function BreakpointSizes(sm, md, lg, xl) {
    return new BreakpointValues(new Rem(sm), new Rem(md), new Rem(lg), new Rem(xl));
  }
  function Rem(value) {
    BreakpointUnitValue.call(this, value);
  }
  function BreakpointUnitValue(width) {
    this.p2s_1 = width;
  }
  function get_SpanTextStyle() {
    _init_properties_SpanText_kt__upt1hl();
    return SpanTextStyle$delegate.i2f(null, SpanTextStyle$factory());
  }
  var SpanTextStyle$delegate;
  function SpanText(text, modifier, variant, ref, $composer, $changed, $default) {
    _init_properties_SpanText_kt__upt1hl();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h19(-542643488);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.iz(text) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 16;
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.iz(variant_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.iz(ref_0._v) ? 2048 : 1024);
    if (!(($default & 2) === 2) ? true : !(($dirty & 5851) === 1170) ? true : !$composer_0.k17()) {
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
        traceEventStart(-542643488, $dirty, -1, 'com.varabyte.kobweb.silk.components.text.SpanText (SpanText.kt:49)');
      }
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
      var this_0 = toModifier(get_SpanTextStyle(), [variant_0._v], $composer_0, 0).t2m(modifier_0._v);
      var tmp;
      if (startsWith(text, _Char___init__impl__6a9atx(32)) ? true : endsWith_0(text, _Char___init__impl__6a9atx(32))) {
        // Inline function 'com.varabyte.kobweb.silk.components.text.SpanText.<anonymous>' call
        tmp = whiteSpace(Companion_instance, Companion_instance_1.n2f());
      } else {
        tmp = Companion_instance;
      }
      var finalModifier = this_0.t2m(tmp);
      var tmp_0 = toAttrs(finalModifier);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.text.SpanText.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -539273278, true, SpanText$lambda(ref_0, text));
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
        // Inline function 'com.varabyte.kobweb.silk.components.text.SpanText.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_1.z18(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.q17();
      Span(tmp_0, tmp0, $composer_0, 48, 0);
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
      tmp0_safe_receiver.f1e(SpanText$lambda_0(text, modifier_0, variant_0, ref_0, $changed, $default));
    }
  }
  function SpanTextStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_SpanText_kt__upt1hl();
    return Unit_instance;
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
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
    };
  }
  function SpanText$lambda_0($text, $modifier, $variant, $ref, $$changed, $$default) {
    return function ($composer, $force) {
      SpanText($text, $modifier._v, $variant._v, $ref._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
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
      SpanTextStyle$delegate = ComponentStyle_0(VOID, 'silk', SpanTextStyle$delegate$lambda);
    }
  }
  function CacheByPropertyNameDelegate() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.g2p_1 = LinkedHashMap_init_$Create$_0();
  }
  protoOf(CacheByPropertyNameDelegate).i2f = function (thisRef, property) {
    var name = property.callableName;
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.g2p_1;
    var value = this_0.p2(name);
    var tmp;
    if (value == null) {
      // Inline function 'com.varabyte.kobweb.silk.components.util.internal.CacheByPropertyNameDelegate.getValue.<anonymous>' call
      var answer = this.p2g(name);
      this_0.g2(name, answer);
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
  function DeferredComposablesState$Entry$dismiss$lambda(this$0, this$1) {
    return function () {
      this$0.s2s_1.c22(this$1);
      return Unit_instance;
    };
  }
  function invokeLater_0($this, block) {
    $this.r2s_1.u(block);
    if ($this.q2s_1 === -1) {
      var tmp = $this;
      var tmp_0 = window;
      tmp.q2s_1 = tmp_0.setTimeout(DeferredComposablesState$invokeLater$lambda($this));
    }
  }
  function Entry($outer) {
    this.u2s_1 = $outer;
    this.t2s_1 = null;
  }
  protoOf(Entry).v2s = function () {
    invokeLater_0(this.u2s_1, DeferredComposablesState$Entry$dismiss$lambda(this.u2s_1, this));
  };
  function DeferredComposablesState$invokeLater$lambda(this$0) {
    return function () {
      var tmp0_iterator = this$0.r2s_1.k();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        // Inline function 'com.varabyte.kobweb.silk.defer.DeferredComposablesState.invokeLater.<anonymous>.<anonymous>' call
        element();
      }
      this$0.r2s_1.b1();
      this$0.q2s_1 = -1;
      return Unit_instance;
    };
  }
  function DeferredComposablesState$append$lambda(this$0, $it) {
    return function () {
      this$0.s2s_1.f16($it);
      return Unit_instance;
    };
  }
  function DeferredComposablesState$forEach$lambda($tmp0_rcvr, $render, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.w2s($render, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function DeferredComposablesState() {
    this.q2s_1 = -1;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.r2s_1 = ArrayList_init_$Create$_0();
    this.s2s_1 = mutableStateListOf();
  }
  protoOf(DeferredComposablesState).x2s = function () {
    // Inline function 'kotlin.also' call
    var this_0 = new Entry(this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.defer.DeferredComposablesState.append.<anonymous>' call
    invokeLater_0(this, DeferredComposablesState$append$lambda(this, this_0));
    return this_0;
  };
  protoOf(DeferredComposablesState).w2s = function (render, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h19(-1296527038);
    var $dirty = $changed;
    if (isTraceInProgress()) {
      traceEventStart(-1296527038, $dirty, -1, 'com.varabyte.kobweb.silk.defer.DeferredComposablesState.forEach (Deferred.kt:31)');
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.s2s_1.k();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.defer.DeferredComposablesState.forEach.<anonymous>' call
      render(element, $composer_0, 8 | 112 & $dirty << 3);
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp1_safe_receiver = $composer_0.i19();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.f1e(DeferredComposablesState$forEach$lambda(this, render, $changed));
    }
  };
  function renderWithDeferred(content, $composer, $changed) {
    _init_properties_Deferred_kt__im2yn();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h19(2037104680);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.k18(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.k17()) {
      if (isTraceInProgress()) {
        traceEventStart(2037104680, $dirty, -1, 'com.varabyte.kobweb.silk.defer.renderWithDeferred (Deferred.kt:75)');
      }
      var state = new DeferredComposablesState();
      var tmp = get_LocalDeferred().d1e(state);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.defer.renderWithDeferred.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 564114664, true, renderWithDeferred$lambda(content, state));
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
        // Inline function 'com.varabyte.kobweb.silk.defer.renderWithDeferred.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.z18(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.q17();
      CompositionLocalProvider(tmp, tmp0, $composer_0, 56);
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
      tmp0_safe_receiver.f1e(renderWithDeferred$lambda_0(content, $changed));
    }
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
    };
  }
  function ComposableSingletons$DeferredKt$lambda_1$lambda_ynev9p(entry, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-300134205, $changed, -1, 'com.varabyte.kobweb.silk.defer.ComposableSingletons$DeferredKt.lambda-1.<anonymous> (Deferred.kt:83)');
    }
    var tmp0_safe_receiver = entry.t2s_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      renderWithDeferred(tmp0_safe_receiver, $composer_0, 0);
      tmp = Unit_instance;
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$DeferredKt() {
    ComposableSingletons$DeferredKt_instance = this;
    var tmp = this;
    tmp.y2s_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-300134205, false, ComposableSingletons$DeferredKt$lambda_1$lambda_ynev9p));
  }
  var ComposableSingletons$DeferredKt_instance;
  function ComposableSingletons$DeferredKt_getInstance() {
    if (ComposableSingletons$DeferredKt_instance == null)
      new ComposableSingletons$DeferredKt();
    return ComposableSingletons$DeferredKt_instance;
  }
  function deferRender(content, $composer, $changed) {
    _init_properties_Deferred_kt__im2yn();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h19(-1215818569);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.k18(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.k17()) {
      if (isTraceInProgress()) {
        traceEventStart(-1215818569, $dirty, -1, 'com.varabyte.kobweb.silk.defer.deferRender (Deferred.kt:59)');
      }
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var this_0 = get_LocalDeferred();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.c19(this_0);
      sourceInformationMarkerEnd($composer_1);
      var state = tmp0;
      $composer_0.p17(-1824718458);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      var invalid = $composer_0.iz(state);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_1.t18();
      var tmp;
      if (invalid ? true : it === Companion_getInstance().h12_1) {
        // Inline function 'com.varabyte.kobweb.silk.defer.deferRender.<anonymous>' call
        var value = state.x2s();
        this_1.z18(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.q17();
      var deferredEntry = tmp0_group;
      deferredEntry.t2s_1 = content;
      DisposableEffect(deferredEntry, deferRender$lambda(deferredEntry), $composer_0, 8);
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
      tmp1_safe_receiver.f1e(deferRender$lambda_0(content, $changed));
    }
  }
  function LocalDeferred$lambda() {
    _init_properties_Deferred_kt__im2yn();
    var message = 'Attempting to defer rendering without calling `renderWithDeferred`, a required pre-requisite.';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function renderWithDeferred$lambda($content, $state) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.k17()) {
        if (isTraceInProgress()) {
          traceEventStart(564114664, $changed, -1, 'com.varabyte.kobweb.silk.defer.renderWithDeferred.<anonymous> (Deferred.kt:78)');
        }
        $content($composer_0, 0);
        $state.w2s(ComposableSingletons$DeferredKt_getInstance().y2s_1, $composer_0, 70);
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
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.i17(p0, p1);
    };
  }
  function renderWithDeferred$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      renderWithDeferred($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function _no_name_provided__qut3iv($deferredEntry) {
    this.z2s_1 = $deferredEntry;
  }
  protoOf(_no_name_provided__qut3iv).nk = function () {
    // Inline function 'com.varabyte.kobweb.silk.defer.deferRender.<anonymous>.<anonymous>' call
    this.z2s_1.v2s();
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
      return Unit_instance;
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
    this.a2t_1 = config;
    this.b2t_1 = stylesheet;
    this.c2t_1 = theme;
  }
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
    mutableTheme.l2t(get_SpanTextStyle());
    var ctx = new InitSilkContext(config, SilkStylesheetInstance_getInstance(), mutableTheme);
    additionalInit(ctx);
    get_additionalSilkInitialization()(ctx);
    var displayStyles = listOf([get_DisplayIfAtLeastZeroStyle(), get_DisplayIfAtLeastSmStyle(), get_DisplayIfAtLeastMdStyle(), get_DisplayIfAtLeastLgStyle(), get_DisplayIfAtLeastXlStyle(), get_DisplayUntilZeroStyle(), get_DisplayUntilSmStyle(), get_DisplayUntilMdStyle(), get_DisplayUntilLgStyle(), get_DisplayUntilXlStyle()]);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = displayStyles.k();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>' call
      mutableTheme.l2t(element);
    }
    var tmp_0 = window;
    invokeLater(tmp_0, initSilk$lambda_0(displayStyles));
    set_MutableSilkConfigInstance(config);
    set__SilkTheme(new ImmutableSilkTheme(mutableTheme));
    SilkStylesheetInstance_getInstance().o2t(SilkStyleSheet_getInstance());
    get_SilkTheme().p2t(SilkStyleSheet_getInstance());
  }
  function additionalSilkInitialization$lambda(it) {
    _init_properties_InitSilk_kt__vukue3();
    return Unit_instance;
  }
  function initSilk$lambda(it) {
    _init_properties_InitSilk_kt__vukue3();
    return Unit_instance;
  }
  function initSilk$lambda_0($displayStyles) {
    return function () {
      // Inline function 'kotlin.collections.map' call
      var this_0 = $displayStyles;
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var tmp0_iterator = this_0.k();
      while (tmp0_iterator.x()) {
        var item = tmp0_iterator.z();
        // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>' call
        var tmp$ret$0 = '.' + item.c2q_1;
        destination.u(tmp$ret$0);
      }
      var displayStyleSelectorNames = toSet(destination);
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterIsInstance' call
      // Inline function 'kotlin.collections.filterIsInstanceTo' call
      var this_1 = asList(document.styleSheets);
      var destination_0 = ArrayList_init_$Create$_0();
      var tmp0_iterator_0 = this_1.k();
      while (tmp0_iterator_0.x()) {
        var element = tmp0_iterator_0.z();
        if (element instanceof CSSStyleSheet) {
          destination_0.u(element);
        }
      }
      // Inline function 'kotlin.collections.filterTo' call
      var destination_1 = ArrayList_init_$Create$_0();
      var tmp0_iterator_1 = destination_0.k();
      while (tmp0_iterator_1.x()) {
        var element_0 = tmp0_iterator_1.z();
        // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>' call
        if (element_0.href == null) {
          destination_1.u(element_0);
        }
      }
      var tmp0_iterator_2 = destination_1.k();
      while (tmp0_iterator_2.x()) {
        var element_1 = tmp0_iterator_2.z();
        // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.forEach' call
        // Inline function 'kotlin.collections.filter' call
        // Inline function 'kotlin.collections.filterIsInstance' call
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var this_2 = asList(element_1.cssRules);
        var destination_2 = ArrayList_init_$Create$_0();
        var tmp0_iterator_3 = this_2.k();
        while (tmp0_iterator_3.x()) {
          var element_2 = tmp0_iterator_3.z();
          if (element_2 instanceof CSSGroupingRule) {
            destination_2.u(element_2);
          }
        }
        // Inline function 'kotlin.collections.filterTo' call
        var destination_3 = ArrayList_init_$Create$_0();
        var tmp0_iterator_4 = destination_2.k();
        while (tmp0_iterator_4.x()) {
          var element_3 = tmp0_iterator_4.z();
          // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>.<anonymous>' call
          if (element_3.type === CSSRule.MEDIA_RULE) {
            destination_3.u(element_3);
          }
        }
        var tmp0_iterator_5 = destination_3.k();
        while (tmp0_iterator_5.x()) {
          var element_4 = tmp0_iterator_5.z();
          // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>.<anonymous>' call
          // Inline function 'kotlin.collections.forEach' call
          // Inline function 'kotlin.collections.filterIsInstance' call
          // Inline function 'kotlin.collections.filterIsInstanceTo' call
          var this_3 = asList(element_4.cssRules);
          var destination_4 = ArrayList_init_$Create$_0();
          var tmp0_iterator_6 = this_3.k();
          while (tmp0_iterator_6.x()) {
            var element_5 = tmp0_iterator_6.z();
            if (element_5 instanceof CSSStyleRule) {
              destination_4.u(element_5);
            }
          }
          var tmp0_iterator_7 = destination_4.k();
          while (tmp0_iterator_7.x()) {
            var element_6 = tmp0_iterator_7.z();
            // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var selectorText = element_6.selectorText;
            var innerStyle = element_6.style;
            if (displayStyleSelectorNames.m(selectorText)) {
              var displayValue = innerStyle.getPropertyValue('display');
              innerStyle.setProperty('display', displayValue, 'important');
            }
          }
        }
      }
      return Unit_instance;
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
    this.q2t_1 = ColorMode_LIGHT_getInstance();
  }
  protoOf(MutableSilkConfig).r2t = function () {
    return this.q2t_1;
  };
  function Companion_4() {
  }
  protoOf(Companion_4).z2j = function () {
    return get_MutableSilkConfigInstance();
  };
  var Companion_instance_8;
  function Companion_getInstance_5() {
    return Companion_instance_8;
  }
  var properties_initialized_SilkConfig_kt_bfwaef;
  function _init_properties_SilkConfig_kt__z9kok7() {
    if (!properties_initialized_SilkConfig_kt_bfwaef) {
      properties_initialized_SilkConfig_kt_bfwaef = true;
      MutableSilkConfigInstance = new MutableSilkConfig();
    }
  }
  function registerStyleBase(_this__u8e3s4, cssSelector, extraModifiers, init) {
    extraModifiers = extraModifiers === VOID ? Companion_instance : extraModifiers;
    registerStyleBase_0(_this__u8e3s4, cssSelector, registerStyleBase$lambda(extraModifiers), init);
  }
  function registerStyleBase_0(_this__u8e3s4, cssSelector, extraModifiers, init) {
    _this__u8e3s4.s2t(cssSelector, extraModifiers, registerStyleBase$lambda_0(init));
  }
  function SilkStylesheetInstance() {
    SilkStylesheetInstance_instance = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.m2t_1 = ArrayList_init_$Create$_0();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.n2t_1 = LinkedHashMap_init_$Create$_0();
  }
  protoOf(SilkStylesheetInstance).s2t = function (cssSelector, extraModifiers, init) {
    this.m2t_1.u(new ComponentStyle(cssSelector, extraModifiers, null, init));
  };
  protoOf(SilkStylesheetInstance).h2p = function (name, build) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this.n2t_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!!(isInterface(this_0, Map) ? this_0 : THROW_CCE()).m2(name)) {
      // Inline function 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.registerKeyframes.<anonymous>' call
      var message = 'User is registering duplicate keyframe name: ' + name;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    this.n2t_1.g2(name, build);
  };
  protoOf(SilkStylesheetInstance).o2t = function (siteStyleSheet) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.m2t_1.k();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.registerStylesAndKeyframesInto.<anonymous>' call
      element.e2q(siteStyleSheet, element.c2q_1);
    }
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.n2t_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(this_0.i());
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_0 = this_0.f2().k();
    while (tmp0_iterator_0.x()) {
      var item = tmp0_iterator_0.z();
      // Inline function 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.registerStylesAndKeyframesInto.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var name = item.i2();
      // Inline function 'kotlin.collections.component2' call
      var build = item.j2();
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
        lightBuilder.x2o(siteStyleSheet, name);
      } else {
        lightBuilder.x2o(siteStyleSheet, suffixedWith(name, ColorMode_LIGHT_getInstance()));
        darkBuilder.x2o(siteStyleSheet, suffixedWith(name, ColorMode_DARK_getInstance()));
      }
      destination.u(Unit_instance);
    }
  };
  var SilkStylesheetInstance_instance;
  function SilkStylesheetInstance_getInstance() {
    if (SilkStylesheetInstance_instance == null)
      new SilkStylesheetInstance();
    return SilkStylesheetInstance_instance;
  }
  function registerStyleBase$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.p17(1076693533);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(1076693533, $changed, -1, 'com.varabyte.kobweb.silk.init.registerStyleBase.<anonymous> (SilkStylesheet.kt:130)');
        tmp = Unit_instance;
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.q17();
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
      $this$registerStyle.r2q(registerStyleBase$lambda$lambda($init));
      return Unit_instance;
    };
  }
  function set__SilkTheme(_set____db54di) {
    _SilkTheme = _set____db54di;
  }
  var _SilkTheme;
  function MutableSilkTheme() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.d2t_1 = LinkedHashMap_init_$Create$_0();
    this.e2t_1 = this.d2t_1;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_0.f2t_1 = LinkedHashSet_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.g2t_1 = LinkedHashMap_init_$Create$_0();
    this.h2t_1 = this.g2t_1;
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_2.i2t_1 = LinkedHashSet_init_$Create$();
    this.j2t_1 = new MutablePalettes();
    this.k2t_1 = BreakpointSizes(get_cssRem(30), get_cssRem(48), get_cssRem(62), get_cssRem(80));
  }
  protoOf(MutableSilkTheme).l2t = function (style) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerComponentStyle.<anonymous>' call
    var it = this.e2t_1.p2(style.c2q_1);
    // Inline function 'kotlin.contracts.contract' call
    if (!(it == null ? true : it === style)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerComponentStyle.<anonymous>' call
      var message = trimIndent('\n                Attempting to register a second style with a name that\'s already used: "' + style.c2q_1 + '"\n\n                If this was an intentional override, you should use `replaceComponentStyle` instead.\n            ');
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.d2t_1;
    var key = style.c2q_1;
    this_0.g2(key, style);
  };
  protoOf(MutableSilkTheme).t2t = function (style, extraModifiers, init) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.collections.contains' call
    var this_0 = this.e2t_1;
    // Inline function 'kotlin.collections.containsKey' call
    var key = style.c2q_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!(isInterface(this_0, Map) ? this_0 : THROW_CCE()).m2(key)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.replaceComponentStyle.<anonymous>' call
      var message = 'Attempting to replace a style that was never registered: "' + style.c2q_1 + '"';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.f2t_1.u(style.c2q_1)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.replaceComponentStyle.<anonymous>' call
      var message_0 = 'Attempting to override style "' + style.c2q_1 + '" twice';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.collections.set' call
    var this_1 = this.d2t_1;
    var key_0 = style.c2q_1;
    var value = new ComponentStyle(style.b2q_1, extraModifiers, style.z2p_1, init);
    this_1.g2(key_0, value);
  };
  protoOf(MutableSilkTheme).u2t = function (variants) {
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
        destination.u(element);
      }
    }
    var tmp0_iterator = destination.k();
    while (tmp0_iterator.x()) {
      var element_0 = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerComponentVariants.<anonymous>' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerComponentVariants.<anonymous>.<anonymous>' call
      var it = this.h2t_1.p2(element_0.h2r_1.c2q_1);
      // Inline function 'kotlin.contracts.contract' call
      if (!(it == null ? true : it === element_0)) {
        // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerComponentVariants.<anonymous>.<anonymous>' call
        var message = trimIndent('\n                Attempting to register a second variant with a name that\'s already used: "' + element_0.h2r_1.c2q_1 + "\"\n\n                This isn't allowed. Please choose a different name. If there's a usecase for this I'm unaware of,\n                consider filing an issue at https://github.com/varabyte/kobweb/issues\n            ");
        throw IllegalStateException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.collections.set' call
      var this_0 = this.g2t_1;
      var key = element_0.h2r_1.c2q_1;
      this_0.g2(key, element_0);
    }
  };
  function ImmutableSilkTheme(mutableSilkTheme) {
    this.a2r_1 = mutableSilkTheme;
    var tmp = this;
    var tmp_0 = this.a2r_1.j2t_1;
    tmp.b2r_1 = isInterface(tmp_0, Palettes) ? tmp_0 : THROW_CCE();
    this.c2r_1 = this.a2r_1.k2t_1;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.d2r_1 = LinkedHashMap_init_$Create$_0();
    this.e2r_1 = this.d2r_1;
  }
  protoOf(ImmutableSilkTheme).p2t = function (componentStyleSheet) {
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
    var tmp0_iterator = this.a2r_1.e2t_1.e2().k();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStyles.<anonymous>' call
      var classNames = element.h2q(componentStyleSheet);
      // Inline function 'kotlin.collections.set' call
      var this_0 = this.d2r_1;
      var key = element.c2q_1;
      var value = element.i2q(classNames);
      this_0.g2(key, value);
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.filterIsInstance' call
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var this_1 = this.a2r_1.h2t_1.e2();
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator_0 = this_1.k();
    while (tmp0_iterator_0.x()) {
      var element_0 = tmp0_iterator_0.z();
      if (element_0 instanceof SimpleComponentVariant) {
        destination.u(element_0);
      }
    }
    var tmp0_iterator_1 = destination.k();
    while (tmp0_iterator_1.x()) {
      var element_1 = tmp0_iterator_1.z();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStyles.<anonymous>' call
      var classNames_0 = element_1.h2q(componentStyleSheet);
      // Inline function 'kotlin.collections.set' call
      var this_2 = this.d2r_1;
      var key_0 = element_1.h2r_1.c2q_1;
      var value_0 = element_1.i2q(classNames_0);
      this_2.g2(key_0, value_0);
    }
  };
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
  function modifyComponentStyleBase(_this__u8e3s4, style, extraModifiers, init) {
    extraModifiers = extraModifiers === VOID ? Companion_instance : extraModifiers;
    modifyComponentStyleBase_0(_this__u8e3s4, style, modifyComponentStyleBase$lambda(extraModifiers), init);
  }
  function modifyComponentStyleBase_0(_this__u8e3s4, style, extraModifiers, init) {
    modifyComponentStyle(_this__u8e3s4, style, extraModifiers, modifyComponentStyleBase$lambda_0(init));
  }
  function modifyComponentStyle(_this__u8e3s4, style, extraModifiers, init) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.collections.contains' call
    var this_0 = _this__u8e3s4.e2t_1;
    // Inline function 'kotlin.collections.containsKey' call
    var key = style.c2q_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!(isInterface(this_0, Map) ? this_0 : THROW_CCE()).m2(key)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.modifyComponentStyle.<anonymous>' call
      var message = 'Attempting to modify a style that was never registered: "' + style.c2q_1 + '"';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var existingExtraModifiers = style.y2p_1;
    var existingInit = style.a2q_1;
    var tmp = modifyComponentStyle$lambda(existingExtraModifiers, extraModifiers);
    _this__u8e3s4.t2t(style, tmp, modifyComponentStyle$lambda_0(existingInit, init));
  }
  function modifyComponentStyleBase$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.p17(-1714796074);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-1714796074, $changed, -1, 'com.varabyte.kobweb.silk.theme.modifyComponentStyleBase.<anonymous> (SilkTheme.kt:264)');
        tmp = Unit_instance;
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.q17();
      return tmp0;
    };
  }
  function modifyComponentStyleBase$lambda$lambda($this_modifyComponentStyle, $init) {
    return function () {
      // Inline function 'kotlin.let' call
      var this_0 = new ComponentBaseModifier($this_modifyComponentStyle.p2q_1);
      // Inline function 'kotlin.contracts.contract' call
      return $init(this_0);
    };
  }
  function modifyComponentStyleBase$lambda_0($init) {
    return function ($this$modifyComponentStyle) {
      $this$modifyComponentStyle.r2q(modifyComponentStyleBase$lambda$lambda($this$modifyComponentStyle, $init));
      return Unit_instance;
    };
  }
  function modifyComponentStyle$lambda($existingExtraModifiers, $extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.p17(-1936736259);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-1936736259, $changed, -1, 'com.varabyte.kobweb.silk.theme.modifyComponentStyle.<anonymous> (SilkTheme.kt:252)');
        tmp = Unit_instance;
      }
      var tmp0 = $existingExtraModifiers($composer_0, 0).t2m($extraModifiers($composer_0, 0));
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.q17();
      return tmp0;
    };
  }
  function modifyComponentStyle$lambda_0($existingInit, $init) {
    return function ($this$replaceComponentStyle) {
      $existingInit($this$replaceComponentStyle);
      $init($this$replaceComponentStyle);
      return Unit_instance;
    };
  }
  function toMinWidthQuery(_this__u8e3s4) {
    return new MediaFeature('min-width', toWidth(_this__u8e3s4));
  }
  function toWidth(_this__u8e3s4) {
    var tmp0_safe_receiver = toValue(_this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p2s_1;
    return tmp1_elvis_lhs == null ? get_px(0) : tmp1_elvis_lhs;
  }
  function toValue(_this__u8e3s4) {
    var tmp;
    switch (_this__u8e3s4.t9_1) {
      case 0:
        tmp = null;
        break;
      case 1:
        tmp = get_SilkTheme().c2r_1.l2s_1;
        break;
      case 2:
        tmp = get_SilkTheme().c2r_1.m2s_1;
        break;
      case 3:
        tmp = get_SilkTheme().c2r_1.n2s_1;
        break;
      case 4:
        tmp = get_SilkTheme().c2r_1.o2s_1;
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
    return this_0.j2();
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
    return _this__u8e3s4 + '_' + colorMode.s9_1.toLowerCase();
  }
  var ColorMode_LIGHT_instance;
  var ColorMode_DARK_instance;
  function Companion_5() {
  }
  protoOf(Companion_5).i2p = function ($composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-754713740, $changed, -1, 'com.varabyte.kobweb.silk.theme.colors.ColorMode.Companion.<get-current> (ColorMode.kt:33)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalColorMode();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.c19(this_0);
    sourceInformationMarkerEnd($composer_1);
    var tmp0_0 = tmp0.j2();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return tmp0_0;
  };
  var Companion_instance_9;
  function Companion_getInstance_6() {
    return Companion_instance_9;
  }
  var ColorMode_entriesInitialized;
  function ColorMode_initEntries() {
    if (ColorMode_entriesInitialized)
      return Unit_instance;
    ColorMode_entriesInitialized = true;
    ColorMode_LIGHT_instance = new ColorMode('LIGHT', 0);
    ColorMode_DARK_instance = new ColorMode('DARK', 1);
  }
  function ColorMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(ColorMode).v2t = function () {
    return this.equals(ColorMode_DARK_getInstance());
  };
  protoOf(ColorMode).z2q = function () {
    var tmp;
    switch (this.t9_1) {
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
  protoOf(ColorMode).w2t = function () {
    return get_LocalColorMode().d1e(mutableStateOf(this));
  };
  function rootColorModeState$delegate$lambda() {
    _init_properties_ColorMode_kt__lz79sc();
    return mutableStateOf(Companion_instance_8.z2j().r2t());
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
  function Red() {
    Red_instance = this;
    this.x2t_1 = Companion_instance_2.p2n(16772078);
    this.y2t_1 = Companion_instance_2.p2n(16764370);
    this.z2t_1 = Companion_instance_2.p2n(15702682);
    this.a2u_1 = Companion_instance_2.p2n(15037299);
    this.b2u_1 = Companion_instance_2.p2n(15684432);
    this.c2u_1 = Companion_instance_2.p2n(16007990);
    this.d2u_1 = Companion_instance_2.p2n(15022389);
    this.e2u_1 = Companion_instance_2.p2n(13840175);
    this.f2u_1 = Companion_instance_2.p2n(12986408);
    this.g2u_1 = Companion_instance_2.p2n(12000284);
  }
  protoOf(Red).h2u = function () {
    return this.z2t_1;
  };
  protoOf(Red).i2u = function () {
    return this.a2u_1;
  };
  protoOf(Red).j2u = function () {
    return this.b2u_1;
  };
  protoOf(Red).k2u = function () {
    return this.c2u_1;
  };
  protoOf(Red).l2u = function () {
    return this.d2u_1;
  };
  protoOf(Red).m2u = function () {
    return this.e2u_1;
  };
  var Red_instance;
  function Red_getInstance() {
    if (Red_instance == null)
      new Red();
    return Red_instance;
  }
  function Blue() {
    Blue_instance = this;
    this.n2u_1 = Companion_instance_2.p2n(14938877);
    this.o2u_1 = Companion_instance_2.p2n(12312315);
    this.p2u_1 = Companion_instance_2.p2n(9489145);
    this.q2u_1 = Companion_instance_2.p2n(6600182);
    this.r2u_1 = Companion_instance_2.p2n(4367861);
    this.s2u_1 = Companion_instance_2.p2n(2201331);
    this.t2u_1 = Companion_instance_2.p2n(2001125);
    this.u2u_1 = Companion_instance_2.p2n(1668818);
    this.v2u_1 = Companion_instance_2.p2n(1402304);
    this.w2u_1 = Companion_instance_2.p2n(870305);
  }
  protoOf(Blue).h2u = function () {
    return this.p2u_1;
  };
  protoOf(Blue).i2u = function () {
    return this.q2u_1;
  };
  protoOf(Blue).j2u = function () {
    return this.r2u_1;
  };
  protoOf(Blue).k2u = function () {
    return this.s2u_1;
  };
  protoOf(Blue).l2u = function () {
    return this.t2u_1;
  };
  protoOf(Blue).m2u = function () {
    return this.u2u_1;
  };
  var Blue_instance;
  function Blue_getInstance() {
    if (Blue_instance == null)
      new Blue();
    return Blue_instance;
  }
  function Gray() {
    Gray_instance = this;
    this.x2u_1 = Companion_instance_2.p2n(16448250);
    this.y2u_1 = Companion_instance_2.p2n(16119285);
    this.z2u_1 = Companion_instance_2.p2n(15658734);
    this.a2v_1 = Companion_instance_2.p2n(14737632);
    this.b2v_1 = Companion_instance_2.p2n(12434877);
    this.c2v_1 = Companion_instance_2.p2n(10395294);
    this.d2v_1 = Companion_instance_2.p2n(7697781);
    this.e2v_1 = Companion_instance_2.p2n(6381921);
    this.f2v_1 = Companion_instance_2.p2n(4342338);
    this.g2v_1 = Companion_instance_2.p2n(2171169);
  }
  protoOf(Gray).h2u = function () {
    return this.z2u_1;
  };
  protoOf(Gray).i2u = function () {
    return this.a2v_1;
  };
  protoOf(Gray).j2u = function () {
    return this.b2v_1;
  };
  protoOf(Gray).k2u = function () {
    return this.c2v_1;
  };
  protoOf(Gray).l2u = function () {
    return this.d2v_1;
  };
  protoOf(Gray).m2u = function () {
    return this.e2v_1;
  };
  var Gray_instance;
  function Gray_getInstance() {
    if (Gray_instance == null)
      new Gray();
    return Gray_instance;
  }
  function MutablePalettes() {
    this.h2v_1 = new MutablePalette();
    this.i2v_1 = new MutablePalette();
  }
  protoOf(MutablePalettes).j2v = function () {
    return this.h2v_1;
  };
  protoOf(MutablePalettes).k2v = function () {
    return this.i2v_1;
  };
  function Palettes() {
  }
  function Palette() {
  }
  function EntryDelegate(palette, prefix) {
    prefix = prefix === VOID ? null : prefix;
    this.o2v_1 = palette;
    this.p2v_1 = prefix;
  }
  protoOf(EntryDelegate).i2f = function (thisRef, property) {
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = this.p2v_1;
    var tmp$ret$0 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    return getValue(this.o2v_1.q2v_1, tmp$ret$0 + property.callableName);
  };
  protoOf(EntryDelegate).r2v = function (thisRef, property, value) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.o2v_1.q2v_1;
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = this.p2v_1;
    var key = (tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs) + property.callableName;
    this_0.g2(key, value);
  };
  function ColorGroup(palette, groupName) {
    this.s2v_1 = palette;
    this.t2v_1 = groupName;
  }
  protoOf(ColorGroup).u2v = function () {
    return new EntryDelegate(this.s2v_1, this.t2v_1 + '.');
  };
  function MutablePalette() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.q2v_1 = LinkedHashMap_init_$Create$_0();
  }
  protoOf(MutablePalette).m2v = function (key) {
    return this.q2v_1.p2(key);
  };
  protoOf(MutablePalette).v2v = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    this.q2v_1.g2(key, value);
  };
  function toPalette(_this__u8e3s4) {
    return get_SilkTheme().b2r_1.l2v(_this__u8e3s4);
  }
  function clip(_this__u8e3s4, shape) {
    var tmp0_safe_receiver = shape.w2v();
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
  function RectF_init_$Init$_1(side, cornerRadius, $this) {
    cornerRadius = cornerRadius === VOID ? get_px(0) : cornerRadius;
    RectF.call($this, to(side, side), from100(to(side, side)), cornerRadius);
    return $this;
  }
  function RectF_init_$Create$_0(side, cornerRadius) {
    return RectF_init_$Init$_1(side, cornerRadius, objectCreate(protoOf(RectF)));
  }
  function RectF(topLeft, botRight, cornerRadius) {
    cornerRadius = cornerRadius === VOID ? get_px(0) : cornerRadius;
    this.x2v_1 = topLeft;
    this.y2v_1 = botRight;
    this.z2v_1 = cornerRadius;
  }
  protoOf(RectF).w2v = function () {
    var tmp;
    if ((((!(this.x2v_1.ce_1 === 0.0) ? true : !(this.x2v_1.de_1 === 0.0)) ? true : !(this.y2v_1.ce_1 === 100.0)) ? true : !(this.y2v_1.de_1 === 100.0)) ? true : !equals(this.z2v_1, get_px(0))) {
      tmp = new InsetPath(this.x2v_1, this.y2v_1, this.z2v_1);
    } else {
      tmp = null;
    }
    return tmp;
  };
  function Path() {
  }
  protoOf(Path).b2w = function (_this__u8e3s4) {
    return toString(_this__u8e3s4) + '%';
  };
  protoOf(Path).c2w = function (_this__u8e3s4) {
    return toString(_this__u8e3s4.ce_1) + '% ' + toString(_this__u8e3s4.de_1) + '%';
  };
  function from100(_this__u8e3s4) {
    return to(100.0 - _this__u8e3s4.ce_1, 100.0 - _this__u8e3s4.de_1);
  }
  function InsetPath(topLeft, botRight, roundness) {
    roundness = roundness === VOID ? get_px(0) : roundness;
    Path.call(this);
    this.d2w_1 = topLeft;
    this.e2w_1 = roundness;
    this.f2w_1 = from100(botRight);
  }
  protoOf(InsetPath).a2w = function () {
    // Inline function 'kotlin.takeIf' call
    var this_0 = this.e2w_1;
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
    var left = this.d2w_1.ce_1;
    var top = this.d2w_1.de_1;
    var right = this.f2w_1.ce_1;
    var bottom = this.f2w_1.de_1;
    var insetPart = ((left === top ? right === bottom : false) ? left === right : false) ? this.b2w(left) : (left === right ? top === bottom : false) ? this.c2w(to(top, left)) : this.b2w(top) + ' ' + this.b2w(right) + ' ' + this.b2w(bottom) + ' ' + this.b2w(left);
    return 'inset(' + insetPart + roundnessPart + ')';
  };
  function clip$lambda($path) {
    return function ($this$styleModifier) {
      $this$styleModifier.c27('clip-path', $path.a2w());
      return Unit_instance;
    };
  }
  //region block: post-declaration
  protoOf(MutablePalettes).l2v = get;
  protoOf(MutablePalette).n2v = getValue_0;
  //endregion
  //region block: init
  Companion_instance_3 = new Companion();
  Companion_instance_4 = new Companion_0();
  Companion_instance_5 = new Companion_1();
  Companion_instance_6 = new Companion_2();
  Companion_instance_8 = new Companion_4();
  _SilkTheme = null;
  Companion_instance_9 = new Companion_5();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Keyframes_0;
  _.$_$.b = registerKeyframes;
  _.$_$.c = toAnimation;
  _.$_$.d = displayIfAtLeast;
  _.$_$.e = displayUntil;
  _.$_$.f = get_entries;
  _.$_$.g = ComponentStyle_0;
  _.$_$.h = ComponentStyle_1;
  _.$_$.i = get_active;
  _.$_$.j = addVariantBase;
  _.$_$.k = addVariant;
  _.$_$.l = get_ariaDisabled;
  _.$_$.m = get_ariaInvalid;
  _.$_$.n = base;
  _.$_$.o = base_1;
  _.$_$.p = base_0;
  _.$_$.q = get_disabled;
  _.$_$.r = get_focusVisible;
  _.$_$.s = get_hover;
  _.$_$.t = get_link;
  _.$_$.u = not;
  _.$_$.v = get_placeholder;
  _.$_$.w = toModifier;
  _.$_$.x = get_visited;
  _.$_$.y = SpanText;
  _.$_$.z = deferRender;
  _.$_$.a1 = renderWithDeferred;
  _.$_$.b1 = set_additionalSilkInitialization;
  _.$_$.c1 = registerStyleBase;
  _.$_$.d1 = ColorGroup;
  _.$_$.e1 = MutablePalette;
  _.$_$.f1 = toPalette;
  _.$_$.g1 = suffixedWith;
  _.$_$.h1 = clip;
  _.$_$.i1 = modifyComponentStyleBase;
  _.$_$.j1 = prepareSilkFoundation;
  _.$_$.k1 = Breakpoint_MD_getInstance;
  _.$_$.l1 = ColorMode_DARK_getInstance;
  _.$_$.m1 = ColorMode_LIGHT_getInstance;
  _.$_$.n1 = RectF_init_$Create$_0;
  _.$_$.o1 = Companion_instance_4;
  _.$_$.p1 = Companion_instance_9;
  _.$_$.q1 = Blue_getInstance;
  _.$_$.r1 = Gray_getInstance;
  _.$_$.s1 = Red_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-silk-foundation.js.map
