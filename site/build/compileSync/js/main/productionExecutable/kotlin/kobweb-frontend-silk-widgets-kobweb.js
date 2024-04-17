(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kobweb-frontend-silk-widgets.js', './kobweb-frontend-compose-html-ext.js', './kotlin-kotlin-stdlib.js', './kobweb-frontend-kobweb-compose.js', './html-html-core.js', './kobweb-frontend-silk-foundation.js', './compose-multiplatform-core-compose-runtime-runtime.js', './kobweb-frontend-kobweb-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kobweb-frontend-silk-widgets.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./html-html-core.js'), require('./kobweb-frontend-silk-foundation.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kobweb-frontend-kobweb-core.js'));
  else {
    if (typeof this['kobweb-frontend-silk-widgets'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-silk-widgets' was not found. Please, check whether 'kobweb-frontend-silk-widgets' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof this['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof this['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof this['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof this['kobweb-frontend-kobweb-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-kobweb-core' was not found. Please, check whether 'kobweb-frontend-kobweb-core' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    root['kobweb-frontend-silk-widgets-kobweb'] = factory(typeof this['kobweb-frontend-silk-widgets-kobweb'] === 'undefined' ? {} : this['kobweb-frontend-silk-widgets-kobweb'], this['kobweb-frontend-silk-widgets'], this['kobweb-frontend-compose-html-ext'], this['kotlin-kotlin-stdlib'], this['kobweb-frontend-kobweb-compose'], this['html-html-core'], this['kobweb-frontend-silk-foundation'], this['compose-multiplatform-core-compose-runtime-runtime'], this['kobweb-frontend-kobweb-core']);
  }
}(this, function (_, kotlin_com_varabyte_kobweb_silk_widgets, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_com_varabyte_kobweb_kobweb_core) {
  'use strict';
  //region block: imports
  var get_BorderColorVar = kotlin_com_varabyte_kobweb_silk_widgets.$_$.j;
  var StyleVariable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i;
  var protoOf = kotlin_kotlin.$_$.j6;
  var objectMeta = kotlin_kotlin.$_$.i6;
  var setMetadataFor = kotlin_kotlin.$_$.k6;
  var Companion_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u3;
  var Companion_instance_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.v2;
  var listStyle = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r1;
  var Companion_instance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a3;
  var textAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t2;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.s1;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k2;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.a3;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p;
  var Companion_instance_2 = kotlin_org_jetbrains_compose_html_html_core.$_$.n;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r;
  var KProperty0 = kotlin_kotlin.$_$.u6;
  var getPropertyCallableRef = kotlin_kotlin.$_$.u5;
  var KProperty1 = kotlin_kotlin.$_$.v6;
  var Companion_instance_3 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.p1;
  var VOID = kotlin_kotlin.$_$.c;
  var base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n;
  var addVariantBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j;
  var Unit_instance = kotlin_kotlin.$_$.d2;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var Companion_instance_4 = kotlin_org_jetbrains_compose_html_html_core.$_$.k;
  var display = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g3;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var THROW_CCE = kotlin_kotlin.$_$.n8;
  var Div = kotlin_org_jetbrains_compose_html_html_core.$_$.l3;
  var Companion_instance_5 = kotlin_com_varabyte_kobweb_kobweb_core.$_$.j;
  var prependIf = kotlin_com_varabyte_kobweb_kobweb_core.$_$.f;
  var toModifier = kotlin_com_varabyte_kobweb_silk_foundation.$_$.x;
  var Img = kotlin_org_jetbrains_compose_html_html_core.$_$.t3;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.y2;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d3;
  var Companion_instance_6 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.w2;
  var objectFit = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a2;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var registerRefScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e2;
  var ComponentStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g;
  var StyleVariable_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h;
  var Anchor = kotlin_com_varabyte_kobweb_kobweb_core.$_$.d;
  var get_link = kotlin_com_varabyte_kobweb_silk_foundation.$_$.t;
  var get_visited = kotlin_com_varabyte_kobweb_silk_foundation.$_$.y;
  var get_hover = kotlin_com_varabyte_kobweb_silk_foundation.$_$.s;
  var Companion_instance_7 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b3;
  var textDecorationLine = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u2;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x;
  var get_ColorVar = kotlin_com_varabyte_kobweb_silk_widgets.$_$.k;
  var registerRefScope_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f2;
  var Text = kotlin_org_jetbrains_compose_html_html_core.$_$.a4;
  var addVariant = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k;
  var Colors_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l3;
  var get_SilkColorsStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.l;
  var modifyComponentStyleBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j1;
  var toPalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g1;
  var setVariable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q2;
  var ColorGroup = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e1;
  var classMeta = kotlin_kotlin.$_$.n5;
  var MutablePalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f1;
  var KMutableProperty1 = kotlin_kotlin.$_$.t6;
  //endregion
  //region block: pre-declaration
  setMetadataFor(TocVars, 'TocVars', objectMeta);
  setMetadataFor(LinkVars, 'LinkVars', objectMeta);
  setMetadataFor(MutableLink, 'MutableLink', classMeta, ColorGroup);
  //endregion
  function get_TocStyle() {
    _init_properties_Toc_kt__9n5312();
    return TocStyle$delegate.i2f(null, TocStyle$factory());
  }
  var TocStyle$delegate;
  function get_TocBorderedVariant() {
    _init_properties_Toc_kt__9n5312();
    return TocBorderedVariant$delegate.i2f(null, TocBorderedVariant$factory());
  }
  var TocBorderedVariant$delegate;
  function TocVars() {
    TocVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().c2f();
    tmp.c36_1 = StyleVariable(tmp0_defaultFallback, 'silk');
  }
  protoOf(TocVars).n2x = function () {
    return this.c36_1.i2f(this, BorderColor$factory());
  };
  var TocVars_instance;
  function TocVars_getInstance() {
    if (TocVars_instance == null)
      new TocVars();
    return TocVars_instance;
  }
  function TocStyle$delegate$lambda($this$base) {
    _init_properties_Toc_kt__9n5312();
    return padding(textAlign(listStyle(Companion_instance, Companion_instance_0.a2d()), Companion_instance_1.g2c()), get_cssRem(0));
  }
  function TocBorderedVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Toc_kt__9n5312();
    var tmp = borderRadius(Companion_instance, get_px(5));
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return padding(border(tmp, tmp_0, 'solid', TocVars_getInstance().n2x().c2f()), get_cssRem(1));
  }
  function TocStyle$factory() {
    return getPropertyCallableRef('TocStyle', 0, KProperty0, function () {
      return get_TocStyle();
    }, null);
  }
  function TocBorderedVariant$factory() {
    return getPropertyCallableRef('TocBorderedVariant', 0, KProperty0, function () {
      return get_TocBorderedVariant();
    }, null);
  }
  function BorderColor$factory() {
    return getPropertyCallableRef('BorderColor', 1, KProperty1, function (receiver) {
      return receiver.n2x();
    }, null);
  }
  var properties_initialized_Toc_kt_t9o4p4;
  function _init_properties_Toc_kt__9n5312() {
    if (!properties_initialized_Toc_kt_t9o4p4) {
      properties_initialized_Toc_kt_t9o4p4 = true;
      var tmp = Companion_instance_3;
      TocStyle$delegate = base(tmp, VOID, 'silk', TocStyle$delegate$lambda);
      var tmp_0 = get_TocStyle();
      TocBorderedVariant$delegate = addVariantBase(tmp_0, VOID, TocBorderedVariant$delegate$lambda);
    }
  }
  function get_ImageStyle() {
    _init_properties_Image_kt__h9v8mh();
    return ImageStyle$delegate.i2f(null, ImageStyle$factory());
  }
  var ImageStyle$delegate;
  function get_FitWidthImageVariant() {
    _init_properties_Image_kt__h9v8mh();
    return FitWidthImageVariant$delegate.i2f(null, FitWidthImageVariant$factory());
  }
  var FitWidthImageVariant$delegate;
  function Image(src, description, modifier, variant, width, height, autoPrefix, ref, $composer, $changed, $default) {
    _init_properties_Image_kt__h9v8mh();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var width_0 = {_v: width};
    var height_0 = {_v: height};
    var autoPrefix_0 = {_v: autoPrefix};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h19(1391855609);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.iz(src) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.iz(description) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 128;
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.iz(variant_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.iz(width_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.iz(height_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.l18(autoPrefix_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.iz(ref_0._v) ? 8388608 : 4194304);
    if (!(($default & 4) === 4) ? true : !(($dirty & 23967451) === 4793490) ? true : !$composer_0.k17()) {
      if (!(($default & 4) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 8) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 16) === 0)) {
        width_0._v = null;
      }
      if (!(($default & 32) === 0)) {
        height_0._v = null;
      }
      if (!(($default & 64) === 0)) {
        autoPrefix_0._v = true;
      }
      if (!(($default & 128) === 0)) {
        ref_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1391855609, $dirty, -1, 'com.varabyte.kobweb.silk.components.graphics.Image (Image.kt:92)');
      }
      Image_0(src, modifier_0._v, variant_0._v, width_0._v, height_0._v, description, autoPrefix_0._v, ref_0._v, $composer_0, 64 | 14 & $dirty | 0 | 896 & $dirty >> 3 | 7168 & $dirty >> 3 | 57344 & $dirty >> 3 | 458752 & $dirty << 12 | 3670016 & $dirty | 16777216 | 29360128 & $dirty, 0);
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
      tmp0_safe_receiver.f1e(Image$lambda(src, description, modifier_0, variant_0, width_0, height_0, autoPrefix_0, ref_0, $changed, $default));
    }
  }
  function Image_0(src, modifier, variant, width, height, alt, autoPrefix, ref, $composer, $changed, $default) {
    _init_properties_Image_kt__h9v8mh();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var width_0 = {_v: width};
    var height_0 = {_v: height};
    var alt_0 = {_v: alt};
    var autoPrefix_0 = {_v: autoPrefix};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h19(-2082436053);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.iz(src) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 16;
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.iz(variant_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.iz(width_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.iz(height_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.iz(alt_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.l18(autoPrefix_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.iz(ref_0._v) ? 8388608 : 4194304);
    if (!(($default & 2) === 2) ? true : !(($dirty & 23967451) === 4793490) ? true : !$composer_0.k17()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 4) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        width_0._v = null;
      }
      if (!(($default & 16) === 0)) {
        height_0._v = null;
      }
      if (!(($default & 32) === 0)) {
        alt_0._v = '';
      }
      if (!(($default & 64) === 0)) {
        autoPrefix_0._v = true;
      }
      if (!(($default & 128) === 0)) {
        ref_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-2082436053, $dirty, -1, 'com.varabyte.kobweb.silk.components.graphics.Image (Image.kt:54)');
      }
      $composer_0.p17(1385171914);
      if (!(ref_0._v == null)) {
        var tmp = Companion_instance;
        // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
        // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = toAttrs(display(tmp, 'none'));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.silk.components.graphics.Image.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, 78757125, true, Image$lambda_0(ref_0));
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
          // Inline function 'com.varabyte.kobweb.silk.components.graphics.Image.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref(dispatchReceiver);
          $composer_1.z18(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.q17();
        Div(tmp_0, tmp0, $composer_0, 48, 0);
      }
      $composer_0.q17();
      var tmp_4 = prependIf(Companion_instance_5, autoPrefix_0._v, src);
      var tmp_5 = alt_0._v;
      var tmp_6 = toModifier(get_ImageStyle(), [variant_0._v], $composer_0, 0).x2m(modifier_0._v);
      $composer_0.p17(1385172198);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid_0 = !!(($dirty & 7168) === 2048 | ($dirty & 57344) === 16384);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_0.t18();
      var tmp_7;
      if (invalid_0 ? true : it_0 === Companion_getInstance().h12_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.graphics.Image.<anonymous>' call
        var value_0 = Image$lambda_1(width_0, height_0);
        this_0.z18(value_0);
        tmp_7 = value_0;
      } else {
        tmp_7 = it_0;
      }
      var tmp_8 = tmp_7;
      var tmp0_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_0.q17();
      Img(tmp_4, tmp_5, toAttrs(tmp_6, tmp0_group), $composer_0, 112 & $dirty >> 12, 0);
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
      tmp1_safe_receiver.f1e(Image$lambda_2(src, modifier_0, variant_0, width_0, height_0, alt_0, autoPrefix_0, ref_0, $changed, $default));
    }
  }
  function ImageStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Image_kt__h9v8mh();
    return Unit_instance;
  }
  function FitWidthImageVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Image_kt__h9v8mh();
    return objectFit(width(Companion_instance, get_percent(100)), Companion_instance_6.j2e());
  }
  function Image$lambda($src, $description, $modifier, $variant, $width, $height, $autoPrefix, $ref, $$changed, $$default) {
    return function ($composer, $force) {
      Image($src, $description, $modifier._v, $variant._v, $width._v, $height._v, $autoPrefix._v, $ref._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Image$lambda$lambda(it) {
    _init_properties_Image_kt__h9v8mh();
    var tmp = it.nextSibling;
    return tmp instanceof HTMLImageElement ? tmp : THROW_CCE();
  }
  function Image$lambda_0($ref) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(78757125, $changed, -1, 'com.varabyte.kobweb.silk.components.graphics.Image.<anonymous> (Image.kt:57)');
      }
      var tmp = $ref._v;
      $composer_0.p17(-980642211);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.t18();
      var tmp_0;
      if (false ? true : it === Companion_getInstance().h12_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.graphics.Image.<anonymous>.<anonymous>.<anonymous>' call
        var value = Image$lambda$lambda;
        $composer_0.z18(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.q17();
      registerRefScope($this$Div, tmp, tmp0_group, $composer_0, 456);
      var tmp_2;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_2 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
    };
  }
  function Image$lambda_1($width, $height) {
    return function ($this$toAttrs) {
      var tmp;
      if (!($width._v == null)) {
        $this$toAttrs.m24('width', $width._v.toString());
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!($height._v == null)) {
        $this$toAttrs.m24('height', $height._v.toString());
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function Image$lambda_2($src, $modifier, $variant, $width, $height, $alt, $autoPrefix, $ref, $$changed, $$default) {
    return function ($composer, $force) {
      Image_0($src, $modifier._v, $variant._v, $width._v, $height._v, $alt._v, $autoPrefix._v, $ref._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function ImageStyle$factory() {
    return getPropertyCallableRef('ImageStyle', 0, KProperty0, function () {
      return get_ImageStyle();
    }, null);
  }
  function FitWidthImageVariant$factory() {
    return getPropertyCallableRef('FitWidthImageVariant', 0, KProperty0, function () {
      return get_FitWidthImageVariant();
    }, null);
  }
  var properties_initialized_Image_kt_7kjzpx;
  function _init_properties_Image_kt__h9v8mh() {
    if (!properties_initialized_Image_kt_7kjzpx) {
      properties_initialized_Image_kt_7kjzpx = true;
      ImageStyle$delegate = ComponentStyle(VOID, 'silk', ImageStyle$delegate$lambda);
      var tmp = get_ImageStyle();
      FitWidthImageVariant$delegate = addVariantBase(tmp, VOID, FitWidthImageVariant$delegate$lambda);
    }
  }
  function get_LinkStyle() {
    _init_properties_Link_kt__dm1ox2();
    return LinkStyle$delegate.i2f(null, LinkStyle$factory());
  }
  var LinkStyle$delegate;
  function get_UndecoratedLinkVariant() {
    _init_properties_Link_kt__dm1ox2();
    return UndecoratedLinkVariant$delegate.i2f(null, UndecoratedLinkVariant$factory());
  }
  var UndecoratedLinkVariant$delegate;
  function get_UncoloredLinkVariant() {
    _init_properties_Link_kt__dm1ox2();
    return UncoloredLinkVariant$delegate.i2f(null, UncoloredLinkVariant$factory());
  }
  var UncoloredLinkVariant$delegate;
  function get_AlwaysUnderlinedLinkVariant() {
    _init_properties_Link_kt__dm1ox2();
    return AlwaysUnderlinedLinkVariant$delegate.i2f(null, AlwaysUnderlinedLinkVariant$factory());
  }
  var AlwaysUnderlinedLinkVariant$delegate;
  function LinkVars() {
    LinkVars_instance = this;
    this.d36_1 = StyleVariable_0('silk');
    this.e36_1 = StyleVariable_0('silk');
  }
  protoOf(LinkVars).f36 = function () {
    return this.d36_1.i2f(this, DefaultColor$factory());
  };
  protoOf(LinkVars).g36 = function () {
    return this.e36_1.i2f(this, VisitedColor$factory());
  };
  var LinkVars_instance;
  function LinkVars_getInstance() {
    if (LinkVars_instance == null)
      new LinkVars();
    return LinkVars_instance;
  }
  function Link(path, modifier, variant, openInternalLinksStrategy, openExternalLinksStrategy, autoPrefix, ref, content, $composer, $changed, $default) {
    _init_properties_Link_kt__dm1ox2();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var openInternalLinksStrategy_0 = {_v: openInternalLinksStrategy};
    var openExternalLinksStrategy_0 = {_v: openExternalLinksStrategy};
    var autoPrefix_0 = {_v: autoPrefix};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h19(-1306658063);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.iz(path) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 16;
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.iz(variant_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.iz(openInternalLinksStrategy_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.iz(openExternalLinksStrategy_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.l18(autoPrefix_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.iz(ref_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.k18(content) ? 8388608 : 4194304);
    if (!(($default & 2) === 2) ? true : !(($dirty & 23967451) === 4793490) ? true : !$composer_0.k17()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 4) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        openInternalLinksStrategy_0._v = null;
      }
      if (!(($default & 16) === 0)) {
        openExternalLinksStrategy_0._v = null;
      }
      if (!(($default & 32) === 0)) {
        autoPrefix_0._v = true;
      }
      if (!(($default & 64) === 0)) {
        ref_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1306658063, $dirty, -1, 'com.varabyte.kobweb.silk.components.navigation.Link (Link.kt:116)');
      }
      var tmp = toAttrs(toModifier(get_LinkStyle(), [variant_0._v], $composer_0, 0).x2m(modifier_0._v));
      var tmp_0 = openInternalLinksStrategy_0._v;
      var tmp_1 = openExternalLinksStrategy_0._v;
      var tmp_2 = autoPrefix_0._v;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.navigation.Link.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, 2134514244, true, Link$lambda(ref_0, content));
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
      var tmp_4;
      if (invalid ? true : it === Companion_getInstance().h12_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.navigation.Link.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_0(dispatchReceiver);
        $composer_1.z18(value);
        tmp_4 = value;
      } else {
        tmp_4 = it;
      }
      var tmp_5 = tmp_4;
      var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_1.q17();
      Anchor(path, tmp, tmp_0, tmp_1, tmp_2, tmp0, $composer_0, 196608 | 14 & $dirty | 896 & $dirty >> 3 | 7168 & $dirty >> 3 | 57344 & $dirty >> 3, 0);
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
      tmp0_safe_receiver.f1e(Link$lambda_0(path, modifier_0, variant_0, openInternalLinksStrategy_0, openExternalLinksStrategy_0, autoPrefix_0, ref_0, content, $changed, $default));
    }
  }
  function Link_0(path, text, modifier, variant, openInternalLinksStrategy, openExternalLinksStrategy, autoPrefix, ref, $composer, $changed, $default) {
    _init_properties_Link_kt__dm1ox2();
    var text_0 = {_v: text};
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var openInternalLinksStrategy_0 = {_v: openInternalLinksStrategy};
    var openExternalLinksStrategy_0 = {_v: openExternalLinksStrategy};
    var autoPrefix_0 = {_v: autoPrefix};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h19(-1373730110);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.iz(path) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.iz(text_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 128;
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.iz(variant_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.iz(openInternalLinksStrategy_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.iz(openExternalLinksStrategy_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.l18(autoPrefix_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.iz(ref_0._v) ? 8388608 : 4194304);
    if (!(($default & 4) === 4) ? true : !(($dirty & 23967451) === 4793490) ? true : !$composer_0.k17()) {
      if (!(($default & 2) === 0)) {
        text_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 8) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 16) === 0)) {
        openInternalLinksStrategy_0._v = null;
      }
      if (!(($default & 32) === 0)) {
        openExternalLinksStrategy_0._v = null;
      }
      if (!(($default & 64) === 0)) {
        autoPrefix_0._v = true;
      }
      if (!(($default & 128) === 0)) {
        ref_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1373730110, $dirty, -1, 'com.varabyte.kobweb.silk.components.navigation.Link (Link.kt:95)');
      }
      var tmp = modifier_0._v;
      var tmp_0 = variant_0._v;
      var tmp_1 = openInternalLinksStrategy_0._v;
      var tmp_2 = openExternalLinksStrategy_0._v;
      var tmp_3 = autoPrefix_0._v;
      var tmp_4 = ref_0._v;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.navigation.Link.<anonymous>' call
      var tmp_5 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_5, 1642222480, true, Link$lambda_1(text_0, path));
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
      var tmp_6;
      if (invalid ? true : it === Companion_getInstance().h12_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.navigation.Link.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.z18(value);
        tmp_6 = value;
      } else {
        tmp_6 = it;
      }
      var tmp_7 = tmp_6;
      var tmp0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      $composer_1.q17();
      Link(path, tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp0, $composer_0, 12582976 | 14 & $dirty | 0 | 896 & $dirty >> 3 | 7168 & $dirty >> 3 | 57344 & $dirty >> 3 | 458752 & $dirty >> 3 | 2097152 | 3670016 & $dirty >> 3, 0);
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
      tmp0_safe_receiver.f1e(Link$lambda_2(path, text_0, modifier_0, variant_0, openInternalLinksStrategy_0, openExternalLinksStrategy_0, autoPrefix_0, ref_0, $changed, $default));
    }
  }
  function LinkStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Link_kt__dm1ox2();
    $this$ComponentStyle.w2q(LinkStyle$delegate$lambda$lambda);
    var tmp = get_link($this$ComponentStyle);
    tmp.y2r(LinkStyle$delegate$lambda$lambda_0);
    var tmp_0 = get_visited($this$ComponentStyle);
    tmp_0.y2r(LinkStyle$delegate$lambda$lambda_1);
    var tmp_1 = get_hover($this$ComponentStyle);
    tmp_1.y2r(LinkStyle$delegate$lambda$lambda_2);
    return Unit_instance;
  }
  function LinkStyle$delegate$lambda$lambda() {
    _init_properties_Link_kt__dm1ox2();
    return textDecorationLine(Companion_instance, Companion_instance_7.a2d());
  }
  function LinkStyle$delegate$lambda$lambda_0() {
    _init_properties_Link_kt__dm1ox2();
    return color(Companion_instance, LinkVars_getInstance().f36().c2f());
  }
  function LinkStyle$delegate$lambda$lambda_1() {
    _init_properties_Link_kt__dm1ox2();
    return color(Companion_instance, LinkVars_getInstance().g36().c2f());
  }
  function LinkStyle$delegate$lambda$lambda_2() {
    _init_properties_Link_kt__dm1ox2();
    return textDecorationLine(Companion_instance, Companion_instance_7.q2f());
  }
  function UndecoratedLinkVariant$delegate$lambda($this$addVariant) {
    _init_properties_Link_kt__dm1ox2();
    var tmp = get_hover($this$addVariant);
    tmp.y2r(UndecoratedLinkVariant$delegate$lambda$lambda);
    return Unit_instance;
  }
  function UndecoratedLinkVariant$delegate$lambda$lambda() {
    _init_properties_Link_kt__dm1ox2();
    return textDecorationLine(Companion_instance, Companion_instance_7.a2d());
  }
  function UncoloredLinkVariant$delegate$lambda($this$addVariant) {
    _init_properties_Link_kt__dm1ox2();
    var colorModifier = color(Companion_instance, get_ColorVar().c2f());
    var tmp = get_link($this$addVariant);
    tmp.y2r(UncoloredLinkVariant$delegate$lambda$lambda(colorModifier));
    var tmp_0 = get_visited($this$addVariant);
    tmp_0.y2r(UncoloredLinkVariant$delegate$lambda$lambda_0(colorModifier));
    return Unit_instance;
  }
  function UncoloredLinkVariant$delegate$lambda$lambda($colorModifier) {
    return function () {
      return $colorModifier;
    };
  }
  function UncoloredLinkVariant$delegate$lambda$lambda_0($colorModifier) {
    return function () {
      return $colorModifier;
    };
  }
  function AlwaysUnderlinedLinkVariant$delegate$lambda($this$addVariant) {
    _init_properties_Link_kt__dm1ox2();
    $this$addVariant.w2q(AlwaysUnderlinedLinkVariant$delegate$lambda$lambda);
    return Unit_instance;
  }
  function AlwaysUnderlinedLinkVariant$delegate$lambda$lambda() {
    _init_properties_Link_kt__dm1ox2();
    return textDecorationLine(Companion_instance, Companion_instance_7.q2f());
  }
  function Link$lambda($ref, $content) {
    return function ($this$Anchor, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(2134514244, $changed, -1, 'com.varabyte.kobweb.silk.components.navigation.Link.<anonymous> (Link.kt:124)');
      }
      registerRefScope_0($this$Anchor, $ref._v, $composer_0, 72);
      $content($composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
    };
  }
  function Link$lambda_0($path, $modifier, $variant, $openInternalLinksStrategy, $openExternalLinksStrategy, $autoPrefix, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Link($path, $modifier._v, $variant._v, $openInternalLinksStrategy._v, $openExternalLinksStrategy._v, $autoPrefix._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Link$lambda_1($text, $path) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.k17()) {
        if (isTraceInProgress()) {
          traceEventStart(1642222480, $changed, -1, 'com.varabyte.kobweb.silk.components.navigation.Link.<anonymous> (Link.kt:97)');
        }
        var tmp0_elvis_lhs = $text._v;
        Text(tmp0_elvis_lhs == null ? $path : tmp0_elvis_lhs, $composer_0, 0);
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
  function Link$lambda_2($path, $text, $modifier, $variant, $openInternalLinksStrategy, $openExternalLinksStrategy, $autoPrefix, $ref, $$changed, $$default) {
    return function ($composer, $force) {
      Link_0($path, $text._v, $modifier._v, $variant._v, $openInternalLinksStrategy._v, $openExternalLinksStrategy._v, $autoPrefix._v, $ref._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function LinkStyle$factory() {
    return getPropertyCallableRef('LinkStyle', 0, KProperty0, function () {
      return get_LinkStyle();
    }, null);
  }
  function UndecoratedLinkVariant$factory() {
    return getPropertyCallableRef('UndecoratedLinkVariant', 0, KProperty0, function () {
      return get_UndecoratedLinkVariant();
    }, null);
  }
  function UncoloredLinkVariant$factory() {
    return getPropertyCallableRef('UncoloredLinkVariant', 0, KProperty0, function () {
      return get_UncoloredLinkVariant();
    }, null);
  }
  function AlwaysUnderlinedLinkVariant$factory() {
    return getPropertyCallableRef('AlwaysUnderlinedLinkVariant', 0, KProperty0, function () {
      return get_AlwaysUnderlinedLinkVariant();
    }, null);
  }
  function DefaultColor$factory() {
    return getPropertyCallableRef('DefaultColor', 1, KProperty1, function (receiver) {
      return receiver.f36();
    }, null);
  }
  function VisitedColor$factory() {
    return getPropertyCallableRef('VisitedColor', 1, KProperty1, function (receiver) {
      return receiver.g36();
    }, null);
  }
  var properties_initialized_Link_kt_5x6v44;
  function _init_properties_Link_kt__dm1ox2() {
    if (!properties_initialized_Link_kt_5x6v44) {
      properties_initialized_Link_kt_5x6v44 = true;
      LinkStyle$delegate = ComponentStyle(VOID, 'silk', LinkStyle$delegate$lambda);
      var tmp = get_LinkStyle();
      UndecoratedLinkVariant$delegate = addVariant(tmp, VOID, UndecoratedLinkVariant$delegate$lambda);
      var tmp_0 = get_LinkStyle();
      UncoloredLinkVariant$delegate = addVariant(tmp_0, VOID, UncoloredLinkVariant$delegate$lambda);
      var tmp_1 = get_LinkStyle();
      AlwaysUnderlinedLinkVariant$delegate = addVariant(tmp_1, VOID, AlwaysUnderlinedLinkVariant$delegate$lambda);
    }
  }
  function initSilkWidgetsKobweb(ctx) {
    var mutableTheme = ctx.h2t_1;
    // Inline function 'kotlin.apply' call
    var this_0 = mutableTheme.o2t_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.init.initSilkWidgetsKobweb.<anonymous>' call
    // Inline function 'kotlin.apply' call
    var this_1 = this_0.w2v_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.init.initSilkWidgetsKobweb.<anonymous>.<anonymous>' call
    get_link_0(this_1).r34(Colors_instance.x2n(), Colors_instance.g2o());
    // Inline function 'kotlin.apply' call
    var this_2 = this_0.x2v_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.init.initSilkWidgetsKobweb.<anonymous>.<anonymous>' call
    get_link_0(this_2).r34(Colors_instance.z2n(), Colors_instance.h2o());
    var tmp = get_SilkColorsStyle();
    modifyComponentStyleBase(mutableTheme, tmp, VOID, initSilkWidgetsKobweb$lambda);
    mutableTheme.q2t(get_ImageStyle());
    mutableTheme.z2t([get_FitWidthImageVariant()]);
    mutableTheme.q2t(get_LinkStyle());
    mutableTheme.z2t([get_UncoloredLinkVariant(), get_UndecoratedLinkVariant(), get_AlwaysUnderlinedLinkVariant()]);
    mutableTheme.q2t(get_TocStyle());
    mutableTheme.z2t([get_TocBorderedVariant()]);
  }
  function initSilkWidgetsKobweb$lambda($this$modifyComponentStyleBase) {
    var palette = toPalette($this$modifyComponentStyleBase.v2q());
    return setVariable(setVariable(Companion_instance, LinkVars_getInstance().f36(), get_link_1(palette).s34()), LinkVars_getInstance().g36(), get_link_1(palette).l36());
  }
  function MutableLink(palette) {
    ColorGroup.call(this, palette, 'link');
    this.j36_1 = this.j2w();
    this.k36_1 = this.j2w();
  }
  protoOf(MutableLink).d35 = function (_set____db54di) {
    return this.j36_1.g2w(this, default$factory(), _set____db54di);
  };
  protoOf(MutableLink).s34 = function () {
    return this.j36_1.i2f(this, default$factory_0());
  };
  protoOf(MutableLink).m36 = function (_set____db54di) {
    return this.k36_1.g2w(this, visited$factory(), _set____db54di);
  };
  protoOf(MutableLink).l36 = function () {
    return this.k36_1.i2f(this, visited$factory_0());
  };
  protoOf(MutableLink).r34 = function (default_0, visited) {
    this.d35(default_0);
    this.m36(visited);
  };
  function get_link_0(_this__u8e3s4) {
    return new MutableLink(_this__u8e3s4);
  }
  function get_link_1(_this__u8e3s4) {
    return get_link_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function default$factory() {
    return getPropertyCallableRef('default', 1, KMutableProperty1, function (receiver) {
      return receiver.s34();
    }, function (receiver, value) {
      return receiver.d35(value);
    });
  }
  function default$factory_0() {
    return getPropertyCallableRef('default', 1, KMutableProperty1, function (receiver) {
      return receiver.s34();
    }, function (receiver, value) {
      return receiver.d35(value);
    });
  }
  function visited$factory() {
    return getPropertyCallableRef('visited', 1, KMutableProperty1, function (receiver) {
      return receiver.l36();
    }, function (receiver, value) {
      return receiver.m36(value);
    });
  }
  function visited$factory_0() {
    return getPropertyCallableRef('visited', 1, KMutableProperty1, function (receiver) {
      return receiver.l36();
    }, function (receiver, value) {
      return receiver.m36(value);
    });
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Image;
  _.$_$.b = Link;
  _.$_$.c = Link_0;
  _.$_$.d = get_UncoloredLinkVariant;
  _.$_$.e = initSilkWidgetsKobweb;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-silk-widgets-kobweb.js.map