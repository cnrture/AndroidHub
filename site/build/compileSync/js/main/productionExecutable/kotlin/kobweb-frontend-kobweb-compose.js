(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-runtime-runtime.js', './html-html-core.js', './kobweb-frontend-compose-html-ext.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./html-html-core.js'), require('./kobweb-frontend-compose-html-ext.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-compose'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-kobweb-compose'.");
    }
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-compose'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-kobweb-compose'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-compose'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-kobweb-compose'.");
    }
    if (typeof this['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-compose'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-kobweb-compose'.");
    }
    root['kobweb-frontend-kobweb-compose'] = factory(typeof this['kobweb-frontend-kobweb-compose'] === 'undefined' ? {} : this['kobweb-frontend-kobweb-compose'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-compose-runtime-runtime'], this['html-html-core'], this['kobweb-frontend-compose-html-ext']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_compose_html_ext) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.j6;
  var interfaceMeta = kotlin_kotlin.$_$.y5;
  var setMetadataFor = kotlin_kotlin.$_$.k6;
  var objectMeta = kotlin_kotlin.$_$.i6;
  var VOID = kotlin_kotlin.$_$.c;
  var Unit_instance = kotlin_kotlin.$_$.d2;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var THROW_CCE = kotlin_kotlin.$_$.n8;
  var Div = kotlin_org_jetbrains_compose_html_html_core.$_$.l3;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var registerRefScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f2;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.w8;
  var equals = kotlin_kotlin.$_$.q5;
  var isInterface = kotlin_kotlin.$_$.b6;
  var grid = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.z;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.a3;
  var get_fr = kotlin_org_jetbrains_compose_html_html_core.$_$.a2;
  var gridArea = kotlin_org_jetbrains_compose_html_html_core.$_$.c2;
  var Companion_instance = kotlin_org_jetbrains_compose_html_html_core.$_$.c;
  var alignItems = kotlin_org_jetbrains_compose_html_html_core.$_$.i1;
  var Companion_instance_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.t2;
  var justifyItems = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b1;
  var Companion_instance_1 = kotlin_org_jetbrains_compose_html_html_core.$_$.d;
  var alignSelf = kotlin_org_jetbrains_compose_html_html_core.$_$.j1;
  var Companion_instance_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.u2;
  var justifySelf = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c1;
  var Companion_instance_3 = kotlin_org_jetbrains_compose_html_html_core.$_$.k;
  var display = kotlin_org_jetbrains_compose_html_html_core.$_$.t1;
  var Companion_instance_4 = kotlin_org_jetbrains_compose_html_html_core.$_$.l;
  var flexDirection = kotlin_org_jetbrains_compose_html_html_core.$_$.v1;
  var Companion_instance_5 = kotlin_org_jetbrains_compose_html_html_core.$_$.m;
  var justifyContent = kotlin_org_jetbrains_compose_html_html_core.$_$.m2;
  var flexGrow = kotlin_org_jetbrains_compose_html_html_core.$_$.w1;
  var StyleSheet = kotlin_org_jetbrains_compose_html_html_core.$_$.h1;
  var StyleSheet_init_$Init$ = kotlin_org_jetbrains_compose_html_html_core.$_$.b;
  var hashCode = kotlin_kotlin.$_$.w5;
  var classMeta = kotlin_kotlin.$_$.n5;
  var ComparableAttrsScope_init_$Create$ = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m2;
  var ComparableStyleScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d;
  var toString = kotlin_kotlin.$_$.m6;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.b1;
  var coerceIn = kotlin_kotlin.$_$.p6;
  var numberToInt = kotlin_kotlin.$_$.g6;
  var ariaHidden = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m;
  var ariaDisabled = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l;
  var animation = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j;
  var backgroundColor = kotlin_org_jetbrains_compose_html_html_core.$_$.k1;
  var borderColor = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o;
  var borderStyle = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.q;
  var borderWidth = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.s;
  var borderBottom = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.n;
  var borderRadius = kotlin_org_jetbrains_compose_html_html_core.$_$.m1;
  var border = kotlin_org_jetbrains_compose_html_html_core.$_$.n1;
  var borderTop = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r;
  var borderLeft = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p;
  var borderRadius_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.l1;
  var boxShadow = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.t;
  var boxSizing = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.u;
  var color = kotlin_org_jetbrains_compose_html_html_core.$_$.r1;
  var opacity = kotlin_org_jetbrains_compose_html_html_core.$_$.w2;
  var appearance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k;
  var gap = kotlin_org_jetbrains_compose_html_html_core.$_$.b2;
  var fontWeight = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.w;
  var fontSize = kotlin_org_jetbrains_compose_html_html_core.$_$.y1;
  var fontFamily = kotlin_org_jetbrains_compose_html_html_core.$_$.x1;
  var fontWeight_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.z1;
  var gridTemplateColumns = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.x;
  var gridTemplateRows = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.y;
  var gridRow = kotlin_org_jetbrains_compose_html_html_core.$_$.i2;
  var gridRowStart = kotlin_org_jetbrains_compose_html_html_core.$_$.h2;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.e1;
  var gridColumnStart = kotlin_org_jetbrains_compose_html_html_core.$_$.f2;
  var gridColumn = kotlin_org_jetbrains_compose_html_html_core.$_$.g2;
  var userSelect = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.s1;
  var cursor = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.v;
  var overflowX = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h1;
  var overflowY = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i1;
  var marginTop = kotlin_org_jetbrains_compose_html_html_core.$_$.p2;
  var margin = kotlin_org_jetbrains_compose_html_html_core.$_$.q2;
  var padding = kotlin_org_jetbrains_compose_html_html_core.$_$.x2;
  var verticalAlign = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.t1;
  var lineHeight = kotlin_org_jetbrains_compose_html_html_core.$_$.o2;
  var overflow = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j1;
  var paddingInline = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k1;
  var overflowWrap = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g1;
  var listStyle = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d1;
  var objectFit = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e1;
  var outline = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f1;
  var position = kotlin_org_jetbrains_compose_html_html_core.$_$.z2;
  var top = kotlin_org_jetbrains_compose_html_html_core.$_$.d3;
  var left = kotlin_org_jetbrains_compose_html_html_core.$_$.n2;
  var right = kotlin_org_jetbrains_compose_html_html_core.$_$.b3;
  var bottom = kotlin_org_jetbrains_compose_html_html_core.$_$.o1;
  var scrollBehavior = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l1;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.y2;
  var width = kotlin_org_jetbrains_compose_html_html_core.$_$.g3;
  var minWidth = kotlin_org_jetbrains_compose_html_html_core.$_$.u2;
  var height = kotlin_org_jetbrains_compose_html_html_core.$_$.l2;
  var minHeight = kotlin_org_jetbrains_compose_html_html_core.$_$.t2;
  var maxWidth = kotlin_org_jetbrains_compose_html_html_core.$_$.r2;
  var whiteSpace = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.u1;
  var textAlign = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.n1;
  var textDecorationLine = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o1;
  var textShadow = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p1;
  var translateX = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r1;
  var transition = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.q1;
  var setVariable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(HorizontalOrVertical, 'HorizontalOrVertical', interfaceMeta);
  setMetadataFor(End, 'End', objectMeta);
  setMetadataFor(Start, 'Start', objectMeta);
  setMetadataFor(Top, 'Top', objectMeta);
  setMetadataFor(Bottom, 'Bottom', objectMeta);
  setMetadataFor(Center, 'Center', objectMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(SpaceEvenly, 'SpaceEvenly', objectMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(SpaceBetween, 'SpaceBetween', objectMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(SpaceAround, 'SpaceAround', objectMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(FromStyle, 'FromStyle', objectMeta, VOID, [HorizontalOrVertical]);
  function align(_this__u8e3s4, alignment) {
    return attrsModifier(_this__u8e3s4, BoxScope$align$lambda(alignment));
  }
  setMetadataFor(BoxScope, 'BoxScope', interfaceMeta);
  setMetadataFor(ComposableSingletons$BoxKt, 'ComposableSingletons$BoxKt', objectMeta);
  setMetadataFor(BoxScopeInstance, 'BoxScopeInstance', objectMeta, VOID, [BoxScope]);
  setMetadataFor(BoxDefaults, 'BoxDefaults', objectMeta);
  setMetadataFor(ColumnDefaults, 'ColumnDefaults', objectMeta);
  setMetadataFor(ColumnScopeInstance, 'ColumnScopeInstance', objectMeta);
  setMetadataFor(RowDefaults, 'RowDefaults', objectMeta);
  setMetadataFor(RowScopeInstance, 'RowScopeInstance', objectMeta);
  setMetadataFor(KobwebComposeStyleSheet, 'KobwebComposeStyleSheet', objectMeta, StyleSheet);
  setMetadataFor(TopStart, 'TopStart', objectMeta);
  setMetadataFor(TopCenter, 'TopCenter', objectMeta);
  setMetadataFor(TopEnd, 'TopEnd', objectMeta);
  setMetadataFor(CenterStart, 'CenterStart', objectMeta);
  setMetadataFor(Center_0, 'Center', objectMeta);
  setMetadataFor(CenterEnd, 'CenterEnd', objectMeta);
  setMetadataFor(BottomStart, 'BottomStart', objectMeta);
  setMetadataFor(BottomCenter, 'BottomCenter', objectMeta);
  setMetadataFor(BottomEnd, 'BottomEnd', objectMeta);
  setMetadataFor(Top_0, 'Top', objectMeta);
  setMetadataFor(CenterVertically, 'CenterVertically', objectMeta);
  setMetadataFor(Bottom_0, 'Bottom', objectMeta);
  setMetadataFor(Start_0, 'Start', objectMeta);
  setMetadataFor(CenterHorizontally, 'CenterHorizontally', objectMeta);
  setMetadataFor(End_0, 'End', objectMeta);
  setMetadataFor(FromStyle_0, 'FromStyle', objectMeta);
  function then(other) {
    return other === Companion_instance_6 ? this : new ChainedModifier(this, other);
  }
  setMetadataFor(Modifier, 'Modifier', interfaceMeta);
  function fold(initial, operation) {
    return operation(initial, this);
  }
  setMetadataFor(Element, 'Element', interfaceMeta, VOID, [Modifier]);
  setMetadataFor(Companion, 'Companion', objectMeta, VOID, [Modifier]);
  setMetadataFor(ChainedModifier, 'ChainedModifier', classMeta, VOID, [Modifier]);
  setMetadataFor(AttrsModifier, 'AttrsModifier', classMeta, VOID, [Element]);
  setMetadataFor(StyleModifier, 'StyleModifier', classMeta, VOID, [Element]);
  setMetadataFor(Rgb, 'Rgb', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(Colors, 'Colors', objectMeta);
  setMetadataFor(BorderScope, 'BorderScope', classMeta);
  setMetadataFor(OverflowScope, 'OverflowScope', classMeta);
  setMetadataFor(MarginScope, 'MarginScope', classMeta);
  //endregion
  function HorizontalOrVertical() {
  }
  function End() {
  }
  var End_instance;
  function End_getInstance() {
    return End_instance;
  }
  function Start() {
  }
  var Start_instance;
  function Start_getInstance() {
    return Start_instance;
  }
  function Top() {
  }
  var Top_instance;
  function Top_getInstance() {
    return Top_instance;
  }
  function Bottom() {
  }
  var Bottom_instance;
  function Bottom_getInstance() {
    return Bottom_instance;
  }
  function Center() {
  }
  var Center_instance;
  function Center_getInstance() {
    return Center_instance;
  }
  function SpaceEvenly() {
  }
  var SpaceEvenly_instance;
  function SpaceEvenly_getInstance() {
    return SpaceEvenly_instance;
  }
  function SpaceBetween() {
  }
  var SpaceBetween_instance;
  function SpaceBetween_getInstance() {
    return SpaceBetween_instance;
  }
  function SpaceAround() {
  }
  var SpaceAround_instance;
  function SpaceAround_getInstance() {
    return SpaceAround_instance;
  }
  function FromStyle() {
  }
  var FromStyle_instance;
  function FromStyle_getInstance() {
    return FromStyle_instance;
  }
  function BoxScope$align$lambda($alignment) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.p24([toClassName_0($alignment) + '-self']);
      return Unit_instance;
    };
  }
  function BoxScope() {
  }
  function Box(modifier, contentAlignment, ref, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var contentAlignment_0 = {_v: contentAlignment};
    var ref_0 = {_v: ref};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h19(287459556);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.iz(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.iz(contentAlignment_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.iz(ref_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.k18(content_0._v) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.k17()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance_6;
      }
      if (!(($default & 2) === 0)) {
        contentAlignment_0._v = TopStart_instance;
      }
      if (!(($default & 4) === 0)) {
        ref_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        content_0._v = ComposableSingletons$BoxKt_getInstance().l2m_1;
      }
      if (isTraceInProgress()) {
        traceEventStart(287459556, $dirty, -1, 'com.varabyte.kobweb.compose.foundation.layout.Box (Box.kt:44)');
      }
      var tmp = toAttrs(boxClasses(modifier_0._v, contentAlignment_0._v));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.foundation.layout.Box.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 721727587, true, Box$lambda(ref_0, content_0));
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
        // Inline function 'com.varabyte.kobweb.compose.foundation.layout.Box.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_0(dispatchReceiver);
        $composer_1.z18(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.q17();
      Div(tmp, tmp0, $composer_0, 48, 0);
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
      tmp0_safe_receiver.f1e(Box$lambda_0(modifier_0, contentAlignment_0, ref_0, content_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
    };
  }
  function ComposableSingletons$BoxKt$lambda_1$lambda_ab4h0h($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.k17()) {
      if (isTraceInProgress()) {
        traceEventStart(-1088174424, $changed, -1, 'com.varabyte.kobweb.compose.foundation.layout.ComposableSingletons$BoxKt.lambda-1.<anonymous> (Box.kt:43)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.b12();
    }
    return Unit_instance;
  }
  function ComposableSingletons$BoxKt() {
    ComposableSingletons$BoxKt_instance = this;
    var tmp = this;
    tmp.l2m_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-1088174424, false, ComposableSingletons$BoxKt$lambda_1$lambda_ab4h0h));
  }
  var ComposableSingletons$BoxKt_instance;
  function ComposableSingletons$BoxKt_getInstance() {
    if (ComposableSingletons$BoxKt_instance == null)
      new ComposableSingletons$BoxKt();
    return ComposableSingletons$BoxKt_instance;
  }
  function boxClasses(_this__u8e3s4, contentAlignment) {
    contentAlignment = contentAlignment === VOID ? BoxDefaults_getInstance().m2m_1 : contentAlignment;
    return classNames(_this__u8e3s4, ['kobweb-box', toClassName_0(contentAlignment)]);
  }
  function BoxScopeInstance() {
  }
  var BoxScopeInstance_instance;
  function BoxScopeInstance_getInstance() {
    return BoxScopeInstance_instance;
  }
  function BoxDefaults() {
    BoxDefaults_instance = this;
    this.m2m_1 = TopStart_instance;
  }
  var BoxDefaults_instance;
  function BoxDefaults_getInstance() {
    if (BoxDefaults_instance == null)
      new BoxDefaults();
    return BoxDefaults_instance;
  }
  function Box$lambda($ref, $content) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(721727587, $changed, -1, 'com.varabyte.kobweb.compose.foundation.layout.Box.<anonymous> (Box.kt:46)');
      }
      registerRefScope($this$Div, $ref._v, $composer_0, 72);
      $content._v(BoxScopeInstance_instance, $composer_0, 6);
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
  function Box$lambda_0($modifier, $contentAlignment, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Box($modifier._v, $contentAlignment._v, $ref._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Column(modifier, verticalArrangement, horizontalAlignment, ref, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var verticalArrangement_0 = {_v: verticalArrangement};
    var horizontalAlignment_0 = {_v: horizontalAlignment};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h19(-59454311);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.iz(modifier_0._v) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ((($default & 2) === 0 ? $composer_0.iz(verticalArrangement_0._v) : false) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ((($default & 4) === 0 ? $composer_0.iz(horizontalAlignment_0._v) : false) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.iz(ref_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.k18(content) ? 16384 : 8192);
    if (!(($dirty & 46811) === 9362) ? true : !$composer_0.k17()) {
      $composer_0.r17();
      if (($changed & 1) === 0 ? true : $composer_0.v17()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_instance_6;
        }
        if (!(($default & 2) === 0)) {
          verticalArrangement_0._v = ColumnDefaults_getInstance().n2m_1;
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          horizontalAlignment_0._v = ColumnDefaults_getInstance().o2m_1;
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          ref_0._v = null;
        }
      } else {
        $composer_0.b12();
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.s17();
      if (isTraceInProgress()) {
        traceEventStart(-59454311, $dirty, -1, 'com.varabyte.kobweb.compose.foundation.layout.Column (Column.kt:48)');
      }
      var tmp = toAttrs(columnClasses(modifier_0._v, verticalArrangement_0._v, horizontalAlignment_0._v));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.foundation.layout.Column.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 1861113368, true, Column$lambda(ref_0, content));
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
        // Inline function 'com.varabyte.kobweb.compose.foundation.layout.Column.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.z18(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.q17();
      Div(tmp, tmp0, $composer_0, 48, 0);
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
      tmp0_safe_receiver.f1e(Column$lambda_0(modifier_0, verticalArrangement_0, horizontalAlignment_0, ref_0, content, $changed, $default));
    }
  }
  function ColumnDefaults() {
    ColumnDefaults_instance = this;
    this.n2m_1 = Top_instance;
    this.o2m_1 = Start_instance_0;
  }
  var ColumnDefaults_instance;
  function ColumnDefaults_getInstance() {
    if (ColumnDefaults_instance == null)
      new ColumnDefaults();
    return ColumnDefaults_instance;
  }
  function columnClasses(_this__u8e3s4, verticalArrangement, horizontalAlignment) {
    verticalArrangement = verticalArrangement === VOID ? ColumnDefaults_getInstance().n2m_1 : verticalArrangement;
    horizontalAlignment = horizontalAlignment === VOID ? ColumnDefaults_getInstance().o2m_1 : horizontalAlignment;
    return classNames(_this__u8e3s4, ['kobweb-col', toClassName_3(verticalArrangement), toClassName_1(horizontalAlignment)]);
  }
  function ColumnScopeInstance() {
  }
  var ColumnScopeInstance_instance;
  function ColumnScopeInstance_getInstance() {
    return ColumnScopeInstance_instance;
  }
  function Column$lambda($ref, $content) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1861113368, $changed, -1, 'com.varabyte.kobweb.compose.foundation.layout.Column.<anonymous> (Column.kt:50)');
      }
      registerRefScope($this$Div, $ref._v, $composer_0, 72);
      $content(ColumnScopeInstance_instance, $composer_0, 6);
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
  function Column$lambda_0($modifier, $verticalArrangement, $horizontalAlignment, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Column($modifier._v, $verticalArrangement._v, $horizontalAlignment._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function rowClasses(_this__u8e3s4, horizontalArrangement, verticalAlignment) {
    horizontalArrangement = horizontalArrangement === VOID ? RowDefaults_getInstance().p2m_1 : horizontalArrangement;
    verticalAlignment = verticalAlignment === VOID ? RowDefaults_getInstance().q2m_1 : verticalAlignment;
    return classNames(_this__u8e3s4, ['kobweb-row', toClassName_2(horizontalArrangement), toClassName(verticalAlignment)]);
  }
  function Row(modifier, horizontalArrangement, verticalAlignment, ref, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var horizontalArrangement_0 = {_v: horizontalArrangement};
    var verticalAlignment_0 = {_v: verticalAlignment};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h19(-568516375);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.iz(modifier_0._v) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ((($default & 2) === 0 ? $composer_0.iz(horizontalArrangement_0._v) : false) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ((($default & 4) === 0 ? $composer_0.iz(verticalAlignment_0._v) : false) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.iz(ref_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.k18(content) ? 16384 : 8192);
    if (!(($dirty & 46811) === 9362) ? true : !$composer_0.k17()) {
      $composer_0.r17();
      if (($changed & 1) === 0 ? true : $composer_0.v17()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_instance_6;
        }
        if (!(($default & 2) === 0)) {
          horizontalArrangement_0._v = RowDefaults_getInstance().p2m_1;
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          verticalAlignment_0._v = RowDefaults_getInstance().q2m_1;
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          ref_0._v = null;
        }
      } else {
        $composer_0.b12();
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.s17();
      if (isTraceInProgress()) {
        traceEventStart(-568516375, $dirty, -1, 'com.varabyte.kobweb.compose.foundation.layout.Row (Row.kt:49)');
      }
      var tmp = toAttrs(rowClasses(modifier_0._v, horizontalArrangement_0._v, verticalAlignment_0._v));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.foundation.layout.Row.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 1725920680, true, Row$lambda(ref_0, content));
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
        // Inline function 'com.varabyte.kobweb.compose.foundation.layout.Row.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_2(dispatchReceiver);
        $composer_1.z18(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.q17();
      Div(tmp, tmp0, $composer_0, 48, 0);
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
      tmp0_safe_receiver.f1e(Row$lambda_0(modifier_0, horizontalArrangement_0, verticalAlignment_0, ref_0, content, $changed, $default));
    }
  }
  function RowDefaults() {
    RowDefaults_instance = this;
    this.p2m_1 = Start_instance;
    this.q2m_1 = Top_instance_0;
  }
  var RowDefaults_instance;
  function RowDefaults_getInstance() {
    if (RowDefaults_instance == null)
      new RowDefaults();
    return RowDefaults_instance;
  }
  function RowScopeInstance() {
  }
  var RowScopeInstance_instance;
  function RowScopeInstance_getInstance() {
    return RowScopeInstance_instance;
  }
  function Row$lambda($ref, $content) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1725920680, $changed, -1, 'com.varabyte.kobweb.compose.foundation.layout.Row.<anonymous> (Row.kt:51)');
      }
      registerRefScope($this$Div, $ref._v, $composer_0, 72);
      $content(RowScopeInstance_instance, $composer_0, 6);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j22(p0, p1, p2);
    };
  }
  function Row$lambda_0($modifier, $horizontalArrangement, $verticalAlignment, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Row($modifier._v, $horizontalArrangement._v, $verticalAlignment._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Spacer($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.h19(1962209258);
    if (!($changed === 0) ? true : !$composer_0.k17()) {
      if (isTraceInProgress()) {
        traceEventStart(1962209258, $changed, -1, 'com.varabyte.kobweb.compose.foundation.layout.Spacer (Spacer.kt:9)');
      }
      $composer_0.p17(-247832835);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.t18();
      var tmp;
      if (false ? true : it === Companion_getInstance().h12_1) {
        // Inline function 'com.varabyte.kobweb.compose.foundation.layout.Spacer.<anonymous>' call
        var value = Spacer$lambda;
        this_0.z18(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.q17();
      Div(tmp0_group, null, $composer_0, 6, 2);
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
      tmp1_safe_receiver.f1e(Spacer$lambda_0($changed));
    }
  }
  function Spacer$lambda($this$Div) {
    $this$Div.p24(['kobweb-spacer']);
    return Unit_instance;
  }
  function Spacer$lambda_0($$changed) {
    return function ($composer, $force) {
      Spacer($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function toClassName(_this__u8e3s4) {
    var tmp;
    if (equals(_this__u8e3s4, Top_instance_0)) {
      tmp = 'kobweb-align-top';
    } else if (equals(_this__u8e3s4, CenterVertically_instance)) {
      tmp = 'kobweb-align-center-vert';
    } else if (equals(_this__u8e3s4, Bottom_instance_0)) {
      tmp = 'kobweb-align-bottom';
    } else if (equals(_this__u8e3s4, FromStyle_instance_0)) {
      tmp = 'kobweb-align-from-style-vert';
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  }
  function toClassName_0(_this__u8e3s4) {
    var tmp;
    if (equals(_this__u8e3s4, TopStart_instance)) {
      tmp = 'kobweb-align-top-start';
    } else if (equals(_this__u8e3s4, TopCenter_instance)) {
      tmp = 'kobweb-align-top-center';
    } else if (equals(_this__u8e3s4, TopEnd_instance)) {
      tmp = 'kobweb-align-top-end';
    } else if (equals(_this__u8e3s4, CenterStart_instance)) {
      tmp = 'kobweb-align-center-start';
    } else if (equals(_this__u8e3s4, Center_instance_0)) {
      tmp = 'kobweb-align-center';
    } else if (equals(_this__u8e3s4, CenterEnd_instance)) {
      tmp = 'kobweb-align-center-end';
    } else if (equals(_this__u8e3s4, BottomStart_instance)) {
      tmp = 'kobweb-align-bottom-start';
    } else if (equals(_this__u8e3s4, BottomCenter_instance)) {
      tmp = 'kobweb-align-bottom-center';
    } else if (equals(_this__u8e3s4, BottomEnd_instance)) {
      tmp = 'kobweb-align-bottom-end';
    } else if (equals(_this__u8e3s4, FromStyle_instance_0)) {
      tmp = 'kobweb-align-from-style';
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  }
  function toClassName_1(_this__u8e3s4) {
    var tmp;
    if (equals(_this__u8e3s4, Start_instance_0)) {
      tmp = 'kobweb-align-start';
    } else if (equals(_this__u8e3s4, CenterHorizontally_instance)) {
      tmp = 'kobweb-align-center-horiz';
    } else if (equals(_this__u8e3s4, End_instance_0)) {
      tmp = 'kobweb-align-end';
    } else if (equals(_this__u8e3s4, FromStyle_instance_0)) {
      tmp = 'kobweb-align-from-style-horiz';
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  }
  function toClassName_2(_this__u8e3s4) {
    var tmp;
    if (equals(_this__u8e3s4, End_instance)) {
      tmp = 'kobweb-arrange-end';
    } else {
      if (equals(_this__u8e3s4, Start_instance)) {
        tmp = 'kobweb-arrange-start';
      } else {
        if (isInterface(_this__u8e3s4, HorizontalOrVertical)) {
          tmp = toClassName_4(_this__u8e3s4);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function toClassName_3(_this__u8e3s4) {
    var tmp;
    if (equals(_this__u8e3s4, Top_instance)) {
      tmp = 'kobweb-arrange-top';
    } else {
      if (equals(_this__u8e3s4, Bottom_instance)) {
        tmp = 'kobweb-arrange-bottom';
      } else {
        if (isInterface(_this__u8e3s4, HorizontalOrVertical)) {
          tmp = toClassName_4(_this__u8e3s4);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function toClassName_4(_this__u8e3s4) {
    var tmp;
    if (equals(_this__u8e3s4, Center_instance)) {
      tmp = 'kobweb-arrange-center';
    } else if (equals(_this__u8e3s4, SpaceAround_instance)) {
      tmp = 'kobweb-arrange-space-around';
    } else if (equals(_this__u8e3s4, SpaceBetween_instance)) {
      tmp = 'kobweb-arrange-space-between';
    } else if (equals(_this__u8e3s4, SpaceEvenly_instance)) {
      tmp = 'kobweb-arrange-space-evenly';
    } else if (equals(_this__u8e3s4, FromStyle_instance)) {
      tmp = 'kobweb-arrange-from-style';
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  }
  function initBox($this) {
    $this.g28('.kobweb-box', KobwebComposeStyleSheet$initBox$lambda);
    $this.g28('.kobweb-box > *', KobwebComposeStyleSheet$initBox$lambda_0);
    $this.g28('.kobweb-box.kobweb-align-top-start', KobwebComposeStyleSheet$initBox$lambda_1);
    $this.g28('.kobweb-box.kobweb-align-top-center', KobwebComposeStyleSheet$initBox$lambda_2);
    $this.g28('.kobweb-box.kobweb-align-top-end', KobwebComposeStyleSheet$initBox$lambda_3);
    $this.g28('.kobweb-box.kobweb-align-center-start', KobwebComposeStyleSheet$initBox$lambda_4);
    $this.g28('.kobweb-box.kobweb-align-center', KobwebComposeStyleSheet$initBox$lambda_5);
    $this.g28('.kobweb-box.kobweb-align-center-end', KobwebComposeStyleSheet$initBox$lambda_6);
    $this.g28('.kobweb-box.kobweb-align-bottom-start', KobwebComposeStyleSheet$initBox$lambda_7);
    $this.g28('.kobweb-box.kobweb-align-bottom-center', KobwebComposeStyleSheet$initBox$lambda_8);
    $this.g28('.kobweb-box.kobweb-align-bottom-end', KobwebComposeStyleSheet$initBox$lambda_9);
    $this.g28('.kobweb-box > .kobweb-align-top-start-self', KobwebComposeStyleSheet$initBox$lambda_10);
    $this.g28('.kobweb-box > .kobweb-align-top-center-self', KobwebComposeStyleSheet$initBox$lambda_11);
    $this.g28('.kobweb-box > .kobweb-align-top-end-self', KobwebComposeStyleSheet$initBox$lambda_12);
    $this.g28('.kobweb-box > .kobweb-align-center-start-self', KobwebComposeStyleSheet$initBox$lambda_13);
    $this.g28('.kobweb-box > .kobweb-align-center-self', KobwebComposeStyleSheet$initBox$lambda_14);
    $this.g28('.kobweb-box > .kobweb-align-center-end-self', KobwebComposeStyleSheet$initBox$lambda_15);
    $this.g28('.kobweb-box > .kobweb-align-bottom-start-self', KobwebComposeStyleSheet$initBox$lambda_16);
    $this.g28('.kobweb-box > .kobweb-align-bottom-center-self', KobwebComposeStyleSheet$initBox$lambda_17);
    $this.g28('.kobweb-box > .kobweb-align-bottom-end-self', KobwebComposeStyleSheet$initBox$lambda_18);
  }
  function initRow($this) {
    $this.g28('.kobweb-row', KobwebComposeStyleSheet$initRow$lambda);
    $this.g28('.kobweb-row.kobweb-arrange-start', KobwebComposeStyleSheet$initRow$lambda_0);
    $this.g28('.kobweb-row.kobweb-arrange-center', KobwebComposeStyleSheet$initRow$lambda_1);
    $this.g28('.kobweb-row.kobweb-arrange-end', KobwebComposeStyleSheet$initRow$lambda_2);
    $this.g28('.kobweb-row.kobweb-arrange-space-evenly', KobwebComposeStyleSheet$initRow$lambda_3);
    $this.g28('.kobweb-row.kobweb-arrange-space-between', KobwebComposeStyleSheet$initRow$lambda_4);
    $this.g28('.kobweb-row.kobweb-arrange-space-around', KobwebComposeStyleSheet$initRow$lambda_5);
    $this.g28('.kobweb-row.kobweb-align-top', KobwebComposeStyleSheet$initRow$lambda_6);
    $this.g28('.kobweb-row.kobweb-align-center-vert', KobwebComposeStyleSheet$initRow$lambda_7);
    $this.g28('.kobweb-row.kobweb-align-bottom', KobwebComposeStyleSheet$initRow$lambda_8);
    $this.g28('.kobweb-row > .kobweb-align-top-self', KobwebComposeStyleSheet$initRow$lambda_9);
    $this.g28('.kobweb-row > .kobweb-align-center-vert-self', KobwebComposeStyleSheet$initRow$lambda_10);
    $this.g28('.kobweb-row > .kobweb-align-bottom-self', KobwebComposeStyleSheet$initRow$lambda_11);
  }
  function initCol($this) {
    $this.g28('.kobweb-col', KobwebComposeStyleSheet$initCol$lambda);
    $this.g28('.kobweb-col.kobweb-arrange-top', KobwebComposeStyleSheet$initCol$lambda_0);
    $this.g28('.kobweb-col.kobweb-arrange-center', KobwebComposeStyleSheet$initCol$lambda_1);
    $this.g28('.kobweb-col.kobweb-arrange-bottom', KobwebComposeStyleSheet$initCol$lambda_2);
    $this.g28('.kobweb-col.kobweb-arrange-space-evenly', KobwebComposeStyleSheet$initCol$lambda_3);
    $this.g28('.kobweb-col.kobweb-arrange-space-between', KobwebComposeStyleSheet$initCol$lambda_4);
    $this.g28('.kobweb-col.kobweb-arrange-space-around', KobwebComposeStyleSheet$initCol$lambda_5);
    $this.g28('.kobweb-col.kobweb-align-start', KobwebComposeStyleSheet$initCol$lambda_6);
    $this.g28('.kobweb-col.kobweb-align-center-horiz', KobwebComposeStyleSheet$initCol$lambda_7);
    $this.g28('.kobweb-col.kobweb-align-end', KobwebComposeStyleSheet$initCol$lambda_8);
    $this.g28('.kobweb-col > .kobweb-align-start-self', KobwebComposeStyleSheet$initCol$lambda_9);
    $this.g28('.kobweb-col > .kobweb-align-center-horiz-self', KobwebComposeStyleSheet$initCol$lambda_10);
    $this.g28('.kobweb-col > .kobweb-align-end-self', KobwebComposeStyleSheet$initCol$lambda_11);
  }
  function initSpacer($this) {
    $this.g28('.kobweb-spacer', KobwebComposeStyleSheet$initSpacer$lambda);
  }
  function KobwebComposeStyleSheet$initBox$lambda($this$invoke) {
    grid($this$invoke, KobwebComposeStyleSheet$initBox$lambda$lambda);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda$lambda($this$grid) {
    $this$grid.d2e(KobwebComposeStyleSheet$initBox$lambda$lambda$lambda);
    $this$grid.e2e(KobwebComposeStyleSheet$initBox$lambda$lambda$lambda_0);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda$lambda$lambda($this$columns) {
    $this$columns.n2d(get_px(0), get_fr(1));
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda$lambda$lambda_0($this$rows) {
    $this$rows.n2d(get_px(0), get_fr(1));
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_0($this$invoke) {
    gridArea($this$invoke, '1', '1');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_1($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'start');
    justifyItems($this$invoke, Companion_instance_0.g2c());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_2($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'start');
    justifyItems($this$invoke, Companion_instance_0.f2c());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_3($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'start');
    justifyItems($this$invoke, Companion_instance_0.h2c());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_4($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'center');
    justifyItems($this$invoke, Companion_instance_0.g2c());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_5($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'center');
    justifyItems($this$invoke, Companion_instance_0.f2c());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_6($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'center');
    justifyItems($this$invoke, Companion_instance_0.h2c());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_7($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'end');
    justifyItems($this$invoke, Companion_instance_0.g2c());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_8($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'end');
    justifyItems($this$invoke, Companion_instance_0.f2c());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_9($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'end');
    justifyItems($this$invoke, Companion_instance_0.h2c());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_10($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'start');
    justifySelf($this$invoke, Companion_instance_2.g2c());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_11($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'start');
    justifySelf($this$invoke, Companion_instance_2.f2c());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_12($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'start');
    justifySelf($this$invoke, Companion_instance_2.h2c());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_13($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'center');
    justifySelf($this$invoke, Companion_instance_2.g2c());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_14($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'center');
    justifySelf($this$invoke, Companion_instance_2.f2c());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_15($this$invoke) {
    justifySelf($this$invoke, Companion_instance_2.h2c());
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'center');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_16($this$invoke) {
    justifySelf($this$invoke, Companion_instance_2.g2c());
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'end');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_17($this$invoke) {
    justifySelf($this$invoke, Companion_instance_2.f2c());
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'end');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_18($this$invoke) {
    justifySelf($this$invoke, Companion_instance_2.h2c());
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'end');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$invoke, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Row' call
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$invoke, 'row');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_0($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-start';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_1($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    justifyContent($this$invoke, 'center');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_2($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-end';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_3($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceEvenly' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'space-evenly';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_4($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceBetween' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'space-between';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_5($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceAround' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'space-around';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_6($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-start';
    alignItems($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_7($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'center');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_8($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-end';
    alignItems($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_9($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-start';
    alignSelf($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_10($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'center');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_11($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-end';
    alignSelf($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$invoke, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$invoke, 'column');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_0($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-start';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_1($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    justifyContent($this$invoke, 'center');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_2($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-end';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_3($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceEvenly' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'space-evenly';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_4($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceBetween' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'space-between';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_5($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceAround' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'space-around';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_6($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-start';
    alignItems($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_7($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'center');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_8($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-end';
    alignItems($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_9($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-start';
    alignSelf($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_10($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'center');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_11($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-end';
    alignSelf($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initSpacer$lambda($this$invoke) {
    flexGrow($this$invoke, 1);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet() {
    KobwebComposeStyleSheet_instance = this;
    StyleSheet_init_$Init$(VOID, VOID, this);
    initBox(this);
    initCol(this);
    initRow(this);
    initSpacer(this);
  }
  protoOf(KobwebComposeStyleSheet).e28 = function (selector, cssRule) {
    return this.d28(selector, cssRule);
  };
  var KobwebComposeStyleSheet_instance;
  function KobwebComposeStyleSheet_getInstance() {
    if (KobwebComposeStyleSheet_instance == null)
      new KobwebComposeStyleSheet();
    return KobwebComposeStyleSheet_instance;
  }
  function TopStart() {
  }
  var TopStart_instance;
  function TopStart_getInstance() {
    return TopStart_instance;
  }
  function TopCenter() {
  }
  var TopCenter_instance;
  function TopCenter_getInstance() {
    return TopCenter_instance;
  }
  function TopEnd() {
  }
  var TopEnd_instance;
  function TopEnd_getInstance() {
    return TopEnd_instance;
  }
  function CenterStart() {
  }
  var CenterStart_instance;
  function CenterStart_getInstance() {
    return CenterStart_instance;
  }
  function Center_0() {
  }
  var Center_instance_0;
  function Center_getInstance_0() {
    return Center_instance_0;
  }
  function CenterEnd() {
  }
  var CenterEnd_instance;
  function CenterEnd_getInstance() {
    return CenterEnd_instance;
  }
  function BottomStart() {
  }
  var BottomStart_instance;
  function BottomStart_getInstance() {
    return BottomStart_instance;
  }
  function BottomCenter() {
  }
  var BottomCenter_instance;
  function BottomCenter_getInstance() {
    return BottomCenter_instance;
  }
  function BottomEnd() {
  }
  var BottomEnd_instance;
  function BottomEnd_getInstance() {
    return BottomEnd_instance;
  }
  function Top_0() {
  }
  var Top_instance_0;
  function Top_getInstance_0() {
    return Top_instance_0;
  }
  function CenterVertically() {
  }
  var CenterVertically_instance;
  function CenterVertically_getInstance() {
    return CenterVertically_instance;
  }
  function Bottom_0() {
  }
  var Bottom_instance_0;
  function Bottom_getInstance_0() {
    return Bottom_instance_0;
  }
  function Start_0() {
  }
  var Start_instance_0;
  function Start_getInstance_0() {
    return Start_instance_0;
  }
  function CenterHorizontally() {
  }
  var CenterHorizontally_instance;
  function CenterHorizontally_getInstance() {
    return CenterHorizontally_instance;
  }
  function End_0() {
  }
  var End_instance_0;
  function End_getInstance_0() {
    return End_instance_0;
  }
  function FromStyle_0() {
  }
  var FromStyle_instance_0;
  function FromStyle_getInstance_0() {
    return FromStyle_instance_0;
  }
  function Element() {
  }
  function Companion() {
  }
  protoOf(Companion).w2m = function (initial, operation) {
    return initial;
  };
  protoOf(Companion).x2m = function (other) {
    return other;
  };
  var Companion_instance_6;
  function Companion_getInstance_0() {
    return Companion_instance_6;
  }
  function Modifier() {
  }
  function ChainedModifier(current, next) {
    this.y2m_1 = current;
    this.z2m_1 = next;
  }
  protoOf(ChainedModifier).w2m = function (initial, operation) {
    return this.z2m_1.w2m(this.y2m_1.w2m(initial, operation), operation);
  };
  protoOf(ChainedModifier).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof ChainedModifier) {
      tmp_0 = equals(this.y2m_1, other.y2m_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.z2m_1, other.z2m_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ChainedModifier).hashCode = function () {
    return hashCode(this.y2m_1) + imul(31, hashCode(this.z2m_1)) | 0;
  };
  function thenIf(_this__u8e3s4, condition, other) {
    // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
    var tmp;
    if (condition) {
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf.<anonymous>' call
      tmp = other;
    } else {
      tmp = Companion_instance_6;
    }
    return _this__u8e3s4.x2m(tmp);
  }
  function toAttrs(_this__u8e3s4, finalHandler) {
    finalHandler = finalHandler === VOID ? null : finalHandler;
    var firstModifier = _this__u8e3s4;
    return toAttrs$lambda(firstModifier, finalHandler);
  }
  function toStyles(_this__u8e3s4, finalHandler) {
    finalHandler = finalHandler === VOID ? null : finalHandler;
    var firstModifier = _this__u8e3s4;
    return toStyles$lambda(firstModifier, finalHandler);
  }
  function styleModifier(_this__u8e3s4, styles) {
    return _this__u8e3s4.x2m(new StyleModifier(styles));
  }
  function AttrsModifier(attrs) {
    this.a2n_1 = attrs;
  }
  protoOf(AttrsModifier).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AttrsModifier))
      return false;
    var attrsResolved = ComparableAttrsScope_init_$Create$();
    this.a2n_1(attrsResolved);
    var otherAttrsResolved = ComparableAttrsScope_init_$Create$();
    other.a2n_1(otherAttrsResolved);
    return attrsResolved.equals(otherAttrsResolved);
  };
  protoOf(AttrsModifier).hashCode = function () {
    var attrsResolved = ComparableAttrsScope_init_$Create$();
    this.a2n_1(attrsResolved);
    return attrsResolved.hashCode();
  };
  function StyleModifier(styles) {
    this.b2n_1 = styles;
  }
  protoOf(StyleModifier).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleModifier))
      return false;
    var stylesResolved = new ComparableStyleScope();
    this.b2n_1(stylesResolved);
    var otherStylesResolved = new ComparableStyleScope();
    other.b2n_1(otherStylesResolved);
    return stylesResolved.equals(otherStylesResolved);
  };
  protoOf(StyleModifier).hashCode = function () {
    var stylesResolved = new ComparableStyleScope();
    this.b2n_1(stylesResolved);
    return stylesResolved.hashCode();
  };
  function attrsModifier(_this__u8e3s4, attrs) {
    return _this__u8e3s4.x2m(new AttrsModifier(attrs));
  }
  function toAttrs$lambda$lambda$lambda($element) {
    return function ($this$style) {
      $element.b2n_1($this$style);
      return Unit_instance;
    };
  }
  function toAttrs$lambda$lambda($this_null) {
    return function (_anonymous_parameter_0__qggqh8, element) {
      var tmp;
      if (element instanceof AttrsModifier) {
        tmp = element.a2n_1($this_null);
      } else {
        if (element instanceof StyleModifier) {
          $this_null.n24(toAttrs$lambda$lambda$lambda(element));
          tmp = Unit_instance;
        }
      }
      return Unit_instance;
    };
  }
  function toAttrs$lambda($firstModifier, $finalHandler) {
    return function ($this$null) {
      $firstModifier.w2m(Unit_instance, toAttrs$lambda$lambda($this$null));
      var tmp0_safe_receiver = $finalHandler;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver($this$null);
      return Unit_instance;
    };
  }
  function toStyles$lambda$lambda($this_null) {
    return function (_anonymous_parameter_0__qggqh8, element) {
      var tmp;
      if (element instanceof StyleModifier) {
        tmp = element.b2n_1($this_null);
      }
      return Unit_instance;
    };
  }
  function toStyles$lambda($firstModifier, $finalHandler) {
    return function ($this$null) {
      $firstModifier.w2m(Unit_instance, toStyles$lambda$lambda($this$null));
      var tmp0_safe_receiver = $finalHandler;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver($this$null);
      return Unit_instance;
    };
  }
  function Rgb(value) {
    this.c2n_1 = value;
  }
  protoOf(Rgb).d2n = function () {
    return this.c2n_1 >> 16 & 255;
  };
  protoOf(Rgb).e2n = function () {
    return this.c2n_1 >> 8 & 255;
  };
  protoOf(Rgb).f2n = function () {
    return this.c2n_1 >> 0 & 255;
  };
  protoOf(Rgb).g2n = function () {
    return this.c2n_1 >> 24 & 255;
  };
  protoOf(Rgb).h2n = function () {
    return toColorFloat(this.d2n());
  };
  protoOf(Rgb).i2n = function () {
    return toColorFloat(this.e2n());
  };
  protoOf(Rgb).j2n = function () {
    return toColorFloat(this.f2n());
  };
  protoOf(Rgb).k2n = function () {
    return toColorFloat(this.g2n());
  };
  protoOf(Rgb).l2n = function () {
    return Companion_instance_7.n2n(255 - this.d2n() | 0, 255 - this.e2n() | 0, 255 - this.f2n() | 0, this.g2n());
  };
  protoOf(Rgb).o2n = function (byPercent) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0.0 <= byPercent ? byPercent <= 1.0 : false)) {
      // Inline function 'com.varabyte.kobweb.compose.ui.graphics.Rgb.darkened.<anonymous>' call
      var message = 'Invalid color shifting percent. Expected between 0 and 1, got ' + byPercent;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (byPercent === 0.0)
      return this;
    var darkeningMultiplier = 1.0 - byPercent;
    return Companion_instance_7.p2n(this.h2n() * darkeningMultiplier, this.i2n() * darkeningMultiplier, this.j2n() * darkeningMultiplier, this.k2n());
  };
  protoOf(Rgb).q2n = function (red, green, blue, alpha) {
    return Companion_instance_7.p2n(red, green, blue, alpha);
  };
  protoOf(Rgb).r2n = function (red, green, blue, alpha, $super) {
    red = red === VOID ? this.h2n() : red;
    green = green === VOID ? this.i2n() : green;
    blue = blue === VOID ? this.j2n() : blue;
    alpha = alpha === VOID ? this.k2n() : alpha;
    return $super === VOID ? this.q2n(red, green, blue, alpha) : $super.q2n.call(this, red, green, blue, alpha);
  };
  protoOf(Rgb).s2n = function () {
    return this;
  };
  protoOf(Rgb).toString = function () {
    return this.g2n() === 255 ? 'rgb(' + this.d2n() + ', ' + this.e2n() + ', ' + this.f2n() + ')' : 'rgba(' + this.d2n() + ', ' + this.e2n() + ', ' + this.f2n() + ', ' + this.k2n() + ')';
  };
  protoOf(Rgb).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof Rgb) {
      tmp_2 = this.d2n() === other.d2n();
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.e2n() === other.e2n();
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.f2n() === other.f2n();
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.g2n() === other.g2n();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Rgb).hashCode = function () {
    var result = this.d2n();
    result = imul(31, result) + this.e2n() | 0;
    result = imul(31, result) + this.f2n() | 0;
    result = imul(31, result) + this.g2n() | 0;
    return result;
  };
  function Companion_0() {
    this.m2n_1 = 0.3;
  }
  protoOf(Companion_0).t2n = function (value) {
    return new Rgb(-16777216 | value);
  };
  protoOf(Companion_0).u2n = function (r, g, b) {
    return this.n2n(r, g, b, 255);
  };
  protoOf(Companion_0).n2n = function (r, g, b, a) {
    return new Rgb((r & 255) << 16 | (g & 255) << 8 | (b & 255) << 0 | (a & 255) << 24);
  };
  protoOf(Companion_0).p2n = function (r, g, b, a) {
    return this.n2n(toColorInt(r), toColorInt(g), toColorInt(b), toColorInt(a));
  };
  var Companion_instance_7;
  function Companion_getInstance_1() {
    return Companion_instance_7;
  }
  function Colors() {
  }
  protoOf(Colors).v2n = function () {
    return Companion_instance_7.n2n(0, 0, 0, 0);
  };
  protoOf(Colors).w2n = function () {
    return Companion_instance_7.u2n(0, 0, 0);
  };
  protoOf(Colors).x2n = function () {
    return Companion_instance_7.u2n(0, 0, 255);
  };
  protoOf(Colors).y2n = function () {
    return Companion_instance_7.u2n(100, 149, 237);
  };
  protoOf(Colors).z2n = function () {
    return Companion_instance_7.u2n(0, 255, 255);
  };
  protoOf(Colors).a2o = function () {
    return Companion_instance_7.u2n(169, 169, 169);
  };
  protoOf(Colors).b2o = function () {
    return Companion_instance_7.u2n(47, 79, 79);
  };
  protoOf(Colors).c2o = function () {
    return Companion_instance_7.u2n(30, 144, 255);
  };
  protoOf(Colors).d2o = function () {
    return Companion_instance_7.u2n(128, 128, 128);
  };
  protoOf(Colors).e2o = function () {
    return Companion_instance_7.u2n(211, 211, 211);
  };
  protoOf(Colors).f2o = function () {
    return Companion_instance_7.u2n(135, 206, 250);
  };
  protoOf(Colors).g2o = function () {
    return Companion_instance_7.u2n(128, 0, 128);
  };
  protoOf(Colors).h2o = function () {
    return Companion_instance_7.u2n(238, 130, 238);
  };
  protoOf(Colors).i2o = function () {
    return Companion_instance_7.u2n(255, 255, 255);
  };
  protoOf(Colors).j2o = function () {
    return Companion_instance_7.u2n(245, 245, 245);
  };
  var Colors_instance;
  function Colors_getInstance() {
    return Colors_instance;
  }
  function toColorFloat(_this__u8e3s4) {
    return (_this__u8e3s4 & 255) / 255.0;
  }
  function toColorInt(_this__u8e3s4) {
    return numberToInt(coerceIn(_this__u8e3s4, 0.0, 1.0) * 255.0);
  }
  function lightened(_this__u8e3s4, byPercent) {
    byPercent = byPercent === VOID ? 0.3 : byPercent;
    return _this__u8e3s4.l2n().o2n(byPercent).l2n();
  }
  function get_isBright(_this__u8e3s4) {
    return get_luminance(_this__u8e3s4) > 0.5;
  }
  function get_luminance(_this__u8e3s4) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.ui.graphics.<get-luminance>.<anonymous>' call
    var rgb = _this__u8e3s4.s2n();
    return rgb.h2n() * 0.299 + rgb.i2n() * 0.587 + rgb.j2n() * 0.114;
  }
  function ariaHidden_0(_this__u8e3s4, value) {
    value = value === VOID ? true : value;
    return attrsModifier(_this__u8e3s4, ariaHidden$lambda(value));
  }
  function ariaDisabled_0(_this__u8e3s4, value) {
    value = value === VOID ? true : value;
    return attrsModifier(_this__u8e3s4, ariaDisabled$lambda(value));
  }
  function ariaHidden$lambda($value) {
    return function ($this$attrsModifier) {
      ariaHidden($this$attrsModifier, $value);
      return Unit_instance;
    };
  }
  function ariaDisabled$lambda($value) {
    return function ($this$attrsModifier) {
      ariaDisabled($this$attrsModifier, $value);
      return Unit_instance;
    };
  }
  function onAnimationEnd(_this__u8e3s4, listener) {
    return attrsModifier(_this__u8e3s4, onAnimationEnd$lambda(listener));
  }
  function animation_0(_this__u8e3s4, animations) {
    return styleModifier(_this__u8e3s4, animation$lambda(animations));
  }
  function onAnimationEnd$lambda($listener) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.u24($listener);
      return Unit_instance;
    };
  }
  function animation$lambda($animations) {
    return function ($this$styleModifier) {
      animation($this$styleModifier, $animations.slice());
      return Unit_instance;
    };
  }
  function backgroundColor_0(_this__u8e3s4, color) {
    return styleModifier(_this__u8e3s4, backgroundColor$lambda(color));
  }
  function backgroundColor$lambda($color) {
    return function ($this$styleModifier) {
      backgroundColor($this$styleModifier, $color);
      return Unit_instance;
    };
  }
  function borderBottom_0(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    return styleModifier(_this__u8e3s4, borderBottom$lambda(width, style, color));
  }
  function border_0(_this__u8e3s4, scope) {
    return styleModifier(_this__u8e3s4, border$lambda(scope));
  }
  function BorderScope(styleScope) {
    this.k2o_1 = styleScope;
  }
  protoOf(BorderScope).l2o = function (color) {
    return borderColor(this.k2o_1, color);
  };
  protoOf(BorderScope).m2o = function (lineStyle) {
    return borderStyle(this.k2o_1, lineStyle);
  };
  protoOf(BorderScope).n2o = function (width) {
    return borderWidth(this.k2o_1, width);
  };
  function borderRadius_1(_this__u8e3s4, r) {
    return styleModifier(_this__u8e3s4, borderRadius$lambda(r));
  }
  function border_1(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    return styleModifier(_this__u8e3s4, border$lambda_0(width, style, color));
  }
  function borderTop_0(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    return styleModifier(_this__u8e3s4, borderTop$lambda(width, style, color));
  }
  function borderLeft_0(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    return styleModifier(_this__u8e3s4, borderLeft$lambda(width, style, color));
  }
  function borderRadius_2(_this__u8e3s4, topLeft, topRightAndBottomLeft, bottomRight) {
    topLeft = topLeft === VOID ? get_px(0) : topLeft;
    topRightAndBottomLeft = topRightAndBottomLeft === VOID ? get_px(0) : topRightAndBottomLeft;
    bottomRight = bottomRight === VOID ? get_px(0) : bottomRight;
    return styleModifier(_this__u8e3s4, borderRadius$lambda_0(topLeft, topRightAndBottomLeft, bottomRight));
  }
  function borderBottom$lambda($width, $style, $color) {
    return function ($this$styleModifier) {
      borderBottom($this$styleModifier, $width, $style, $color);
      return Unit_instance;
    };
  }
  function border$lambda($scope) {
    return function ($this$styleModifier) {
      // Inline function 'kotlin.apply' call
      var this_0 = new BorderScope($this$styleModifier);
      // Inline function 'kotlin.contracts.contract' call
      $scope(this_0);
      return Unit_instance;
    };
  }
  function borderRadius$lambda($r) {
    return function ($this$styleModifier) {
      borderRadius($this$styleModifier, $r);
      return Unit_instance;
    };
  }
  function border$lambda_0($width, $style, $color) {
    return function ($this$styleModifier) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = $width;
      border($this$styleModifier, tmp$ret$1, $style, $color);
      return Unit_instance;
    };
  }
  function borderTop$lambda($width, $style, $color) {
    return function ($this$styleModifier) {
      borderTop($this$styleModifier, $width, $style, $color);
      return Unit_instance;
    };
  }
  function borderLeft$lambda($width, $style, $color) {
    return function ($this$styleModifier) {
      borderLeft($this$styleModifier, $width, $style, $color);
      return Unit_instance;
    };
  }
  function borderRadius$lambda_0($topLeft, $topRightAndBottomLeft, $bottomRight) {
    return function ($this$styleModifier) {
      borderRadius_0($this$styleModifier, $topLeft, $topRightAndBottomLeft, $bottomRight);
      return Unit_instance;
    };
  }
  function boxShadow_0(_this__u8e3s4, offsetX, offsetY, blurRadius, spreadRadius, color, inset) {
    offsetX = offsetX === VOID ? get_px(0) : offsetX;
    offsetY = offsetY === VOID ? get_px(0) : offsetY;
    blurRadius = blurRadius === VOID ? null : blurRadius;
    spreadRadius = spreadRadius === VOID ? null : spreadRadius;
    color = color === VOID ? null : color;
    inset = inset === VOID ? false : inset;
    return styleModifier(_this__u8e3s4, boxShadow$lambda(offsetX, offsetY, blurRadius, spreadRadius, color, inset));
  }
  function boxSizing_0(_this__u8e3s4, boxSizing) {
    return styleModifier(_this__u8e3s4, boxSizing$lambda(boxSizing));
  }
  function boxShadow$lambda($offsetX, $offsetY, $blurRadius, $spreadRadius, $color, $inset) {
    return function ($this$styleModifier) {
      boxShadow($this$styleModifier, $offsetX, $offsetY, $blurRadius, $spreadRadius, $color, $inset);
      return Unit_instance;
    };
  }
  function boxSizing$lambda($boxSizing) {
    return function ($this$styleModifier) {
      boxSizing($this$styleModifier, $boxSizing);
      return Unit_instance;
    };
  }
  function color_0(_this__u8e3s4, color) {
    return styleModifier(_this__u8e3s4, color$lambda(color));
  }
  function opacity_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, opacity$lambda(value));
  }
  function color$lambda($color) {
    return function ($this$styleModifier) {
      color($this$styleModifier, $color);
      return Unit_instance;
    };
  }
  function opacity$lambda($value) {
    return function ($this$styleModifier) {
      opacity($this$styleModifier, $value);
      return Unit_instance;
    };
  }
  function display_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, display$lambda(value));
  }
  function display$lambda($value) {
    return function ($this$styleModifier) {
      display($this$styleModifier, $value);
      return Unit_instance;
    };
  }
  function classNames(_this__u8e3s4, classes) {
    return attrsModifier(_this__u8e3s4, classNames$lambda(classes));
  }
  function appearance_0(_this__u8e3s4, appearance) {
    return styleModifier(_this__u8e3s4, appearance$lambda(appearance));
  }
  function classNames$lambda($classes) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.p24($classes.slice());
      return Unit_instance;
    };
  }
  function appearance$lambda($appearance) {
    return function ($this$styleModifier) {
      appearance($this$styleModifier, $appearance);
      return Unit_instance;
    };
  }
  function flexGrow_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, flexGrow$lambda(value));
  }
  function gap_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, gap$lambda(value));
  }
  function flexGrow$lambda($value) {
    return function ($this$styleModifier) {
      flexGrow($this$styleModifier, $value);
      return Unit_instance;
    };
  }
  function gap$lambda($value) {
    return function ($this$styleModifier) {
      gap($this$styleModifier, $value);
      return Unit_instance;
    };
  }
  function fontWeight_1(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, fontWeight$lambda(value));
  }
  function fontSize_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, fontSize$lambda(value));
  }
  function fontFamily_0(_this__u8e3s4, values) {
    return styleModifier(_this__u8e3s4, fontFamily$lambda(values));
  }
  function fontWeight_2(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, fontWeight$lambda_0(value));
  }
  function fontWeight$lambda($value) {
    return function ($this$styleModifier) {
      fontWeight($this$styleModifier, $value);
      return Unit_instance;
    };
  }
  function fontSize$lambda($value) {
    return function ($this$styleModifier) {
      fontSize($this$styleModifier, $value);
      return Unit_instance;
    };
  }
  function fontFamily$lambda($values) {
    return function ($this$styleModifier) {
      fontFamily($this$styleModifier, $values.slice());
      return Unit_instance;
    };
  }
  function fontWeight$lambda_0($value) {
    return function ($this$styleModifier) {
      fontWeight_0($this$styleModifier, $value);
      return Unit_instance;
    };
  }
  function gridTemplateColumns_0(_this__u8e3s4, block) {
    return styleModifier(_this__u8e3s4, gridTemplateColumns$lambda(block));
  }
  function gridTemplateRows_0(_this__u8e3s4, block) {
    return styleModifier(_this__u8e3s4, gridTemplateRows$lambda(block));
  }
  function gridRow_0(_this__u8e3s4, start, end) {
    end = end === VOID ? start + 1 | 0 : end;
    return styleModifier(_this__u8e3s4, gridRow$lambda(start, end));
  }
  function gridItem(_this__u8e3s4, row, column, width, height) {
    width = width === VOID ? null : width;
    height = height === VOID ? null : height;
    return styleModifier(_this__u8e3s4, gridItem$lambda(height, row, width, column));
  }
  function grid_0(_this__u8e3s4, block) {
    return styleModifier(_this__u8e3s4, grid$lambda(block));
  }
  function gridTemplateColumns$lambda($block) {
    return function ($this$styleModifier) {
      gridTemplateColumns($this$styleModifier, $block);
      return Unit_instance;
    };
  }
  function gridTemplateRows$lambda($block) {
    return function ($this$styleModifier) {
      gridTemplateRows($this$styleModifier, $block);
      return Unit_instance;
    };
  }
  function gridRow$lambda($start, $end) {
    return function ($this$styleModifier) {
      gridRow($this$styleModifier, $start, $end);
      return Unit_instance;
    };
  }
  function gridItem$lambda($height, $row, $width, $column) {
    return function ($this$styleModifier) {
      var tmp;
      if (!($height == null)) {
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!($height > 0)) {
          // Inline function 'com.varabyte.kobweb.compose.ui.modifiers.gridItem.<anonymous>.<anonymous>' call
          var message = 'Grid item height must be > 0, got ' + $height;
          throw IllegalStateException_init_$Create$(toString(message));
        }
        gridRow($this$styleModifier, $row, $row + $height | 0);
        tmp = Unit_instance;
      } else {
        gridRowStart($this$styleModifier, $row);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!($width == null)) {
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!($width > 0)) {
          // Inline function 'com.varabyte.kobweb.compose.ui.modifiers.gridItem.<anonymous>.<anonymous>' call
          var message_0 = 'Grid item width must be > 0, got ' + $width;
          throw IllegalStateException_init_$Create$(toString(message_0));
        }
        gridColumn($this$styleModifier, $column, $column + $width | 0);
        tmp_0 = Unit_instance;
      } else {
        gridColumnStart($this$styleModifier, $column);
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function grid$lambda($block) {
    return function ($this$styleModifier) {
      grid($this$styleModifier, $block);
      return Unit_instance;
    };
  }
  function tabIndex(_this__u8e3s4, value) {
    return attrsModifier(_this__u8e3s4, tabIndex$lambda(value));
  }
  function userSelect_0(_this__u8e3s4, userSelect) {
    return styleModifier(_this__u8e3s4, userSelect$lambda(userSelect));
  }
  function cursor_0(_this__u8e3s4, cursor) {
    return styleModifier(_this__u8e3s4, cursor$lambda(cursor));
  }
  function onClick(_this__u8e3s4, listener) {
    return attrsModifier(_this__u8e3s4, onClick$lambda(listener));
  }
  function tabIndex$lambda($value) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.r24($value);
      return Unit_instance;
    };
  }
  function userSelect$lambda($userSelect) {
    return function ($this$styleModifier) {
      userSelect($this$styleModifier, $userSelect);
      return Unit_instance;
    };
  }
  function cursor$lambda($cursor) {
    return function ($this$styleModifier) {
      cursor($this$styleModifier, $cursor);
      return Unit_instance;
    };
  }
  function onClick$lambda($listener) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.t24($listener);
      return Unit_instance;
    };
  }
  function margin_0(_this__u8e3s4, top, leftRight, bottom) {
    top = top === VOID ? get_px(0) : top;
    leftRight = leftRight === VOID ? get_px(0) : leftRight;
    bottom = bottom === VOID ? get_px(0) : bottom;
    return styleModifier(_this__u8e3s4, margin$lambda(top, leftRight, bottom));
  }
  function padding_0(_this__u8e3s4, all) {
    return styleModifier(_this__u8e3s4, padding$lambda(all));
  }
  function overflow_0(_this__u8e3s4, scope) {
    return styleModifier(_this__u8e3s4, overflow$lambda(scope));
  }
  function OverflowScope(styleScope) {
    this.o2o_1 = styleScope;
  }
  protoOf(OverflowScope).p2o = function (overflowX_0) {
    return overflowX(this.o2o_1, overflowX_0);
  };
  protoOf(OverflowScope).q2o = function (overflowY_0) {
    return overflowY(this.o2o_1, overflowY_0);
  };
  function verticalAlign_0(_this__u8e3s4, verticalAlign) {
    return styleModifier(_this__u8e3s4, verticalAlign$lambda(verticalAlign));
  }
  function padding_1(_this__u8e3s4, topBottom, leftRight) {
    topBottom = topBottom === VOID ? get_px(0) : topBottom;
    leftRight = leftRight === VOID ? get_px(0) : leftRight;
    return styleModifier(_this__u8e3s4, padding$lambda_0(topBottom, leftRight));
  }
  function lineHeight_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, lineHeight$lambda(value));
  }
  function overflow_1(_this__u8e3s4, overflow) {
    return styleModifier(_this__u8e3s4, overflow$lambda_0(overflow));
  }
  function margin_1(_this__u8e3s4, all) {
    return styleModifier(_this__u8e3s4, margin$lambda_0(all));
  }
  function paddingInline_0(_this__u8e3s4, start, end) {
    start = start === VOID ? get_px(0) : start;
    end = end === VOID ? get_px(0) : end;
    return styleModifier(_this__u8e3s4, paddingInline$lambda(start, end));
  }
  function margin_2(_this__u8e3s4, top, right, bottom, left) {
    top = top === VOID ? get_px(0) : top;
    right = right === VOID ? get_px(0) : right;
    bottom = bottom === VOID ? get_px(0) : bottom;
    left = left === VOID ? get_px(0) : left;
    return styleModifier(_this__u8e3s4, margin$lambda_1(top, right, bottom, left));
  }
  function margin_3(_this__u8e3s4, topBottom, leftRight) {
    topBottom = topBottom === VOID ? get_px(0) : topBottom;
    leftRight = leftRight === VOID ? get_px(0) : leftRight;
    return styleModifier(_this__u8e3s4, margin$lambda_2(topBottom, leftRight));
  }
  function overflowWrap_0(_this__u8e3s4, overflowWrap) {
    return styleModifier(_this__u8e3s4, overflowWrap$lambda(overflowWrap));
  }
  function padding_2(_this__u8e3s4, top, leftRight, bottom) {
    top = top === VOID ? get_px(0) : top;
    leftRight = leftRight === VOID ? get_px(0) : leftRight;
    bottom = bottom === VOID ? get_px(0) : bottom;
    return styleModifier(_this__u8e3s4, padding$lambda_1(top, leftRight, bottom));
  }
  function padding_3(_this__u8e3s4, top, right, bottom, left) {
    top = top === VOID ? get_px(0) : top;
    right = right === VOID ? get_px(0) : right;
    bottom = bottom === VOID ? get_px(0) : bottom;
    left = left === VOID ? get_px(0) : left;
    return styleModifier(_this__u8e3s4, padding$lambda_2(top, right, bottom, left));
  }
  function margin_4(_this__u8e3s4, scope) {
    return styleModifier(_this__u8e3s4, margin$lambda_3(scope));
  }
  function MarginScope(styleScope) {
    this.r2o_1 = styleScope;
  }
  protoOf(MarginScope).s2o = function (value) {
    return marginTop(this.r2o_1, value);
  };
  function margin$lambda($top, $leftRight, $bottom) {
    return function ($this$styleModifier) {
      margin($this$styleModifier, [$top, $leftRight, $bottom]);
      return Unit_instance;
    };
  }
  function padding$lambda($all) {
    return function ($this$styleModifier) {
      padding($this$styleModifier, [$all]);
      return Unit_instance;
    };
  }
  function overflow$lambda($scope) {
    return function ($this$styleModifier) {
      $scope(new OverflowScope($this$styleModifier));
      return Unit_instance;
    };
  }
  function verticalAlign$lambda($verticalAlign) {
    return function ($this$styleModifier) {
      verticalAlign($this$styleModifier, $verticalAlign);
      return Unit_instance;
    };
  }
  function padding$lambda_0($topBottom, $leftRight) {
    return function ($this$styleModifier) {
      padding($this$styleModifier, [$topBottom, $leftRight]);
      return Unit_instance;
    };
  }
  function lineHeight$lambda($value) {
    return function ($this$styleModifier) {
      lineHeight($this$styleModifier, toString($value));
      return Unit_instance;
    };
  }
  function overflow$lambda_0($overflow) {
    return function ($this$styleModifier) {
      overflow($this$styleModifier, $overflow);
      return Unit_instance;
    };
  }
  function margin$lambda_0($all) {
    return function ($this$styleModifier) {
      margin($this$styleModifier, [$all]);
      return Unit_instance;
    };
  }
  function paddingInline$lambda($start, $end) {
    return function ($this$styleModifier) {
      paddingInline($this$styleModifier, [$start, $end]);
      return Unit_instance;
    };
  }
  function margin$lambda_1($top, $right, $bottom, $left) {
    return function ($this$styleModifier) {
      margin($this$styleModifier, [$top, $right, $bottom, $left]);
      return Unit_instance;
    };
  }
  function margin$lambda_2($topBottom, $leftRight) {
    return function ($this$styleModifier) {
      margin($this$styleModifier, [$topBottom, $leftRight]);
      return Unit_instance;
    };
  }
  function overflowWrap$lambda($overflowWrap) {
    return function ($this$styleModifier) {
      overflowWrap($this$styleModifier, $overflowWrap);
      return Unit_instance;
    };
  }
  function padding$lambda_1($top, $leftRight, $bottom) {
    return function ($this$styleModifier) {
      padding($this$styleModifier, [$top, $leftRight, $bottom]);
      return Unit_instance;
    };
  }
  function padding$lambda_2($top, $right, $bottom, $left) {
    return function ($this$styleModifier) {
      padding($this$styleModifier, [$top, $right, $bottom, $left]);
      return Unit_instance;
    };
  }
  function margin$lambda_3($scope) {
    return function ($this$styleModifier) {
      $scope(new MarginScope($this$styleModifier));
      return Unit_instance;
    };
  }
  function listStyle_0(_this__u8e3s4, type, position, image) {
    type = type === VOID ? null : type;
    position = position === VOID ? null : position;
    image = image === VOID ? null : image;
    return styleModifier(_this__u8e3s4, listStyle$lambda(type, position, image));
  }
  function listStyle$lambda($type, $position, $image) {
    return function ($this$styleModifier) {
      listStyle($this$styleModifier, $type, $position, $image);
      return Unit_instance;
    };
  }
  function objectFit_0(_this__u8e3s4, objectFit) {
    return styleModifier(_this__u8e3s4, objectFit$lambda(objectFit));
  }
  function objectFit$lambda($objectFit) {
    return function ($this$styleModifier) {
      objectFit($this$styleModifier, $objectFit);
      return Unit_instance;
    };
  }
  function outline_0(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    return styleModifier(_this__u8e3s4, outline$lambda(width, style, color));
  }
  function outline$lambda($width, $style, $color) {
    return function ($this$styleModifier) {
      outline($this$styleModifier, $width, $style, $color);
      return Unit_instance;
    };
  }
  function position_0(_this__u8e3s4, position) {
    return styleModifier(_this__u8e3s4, position$lambda(position));
  }
  function top_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, top$lambda(value));
  }
  function left_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, left$lambda(value));
  }
  function right_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, right$lambda(value));
  }
  function bottom_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, bottom$lambda(value));
  }
  function position$lambda($position) {
    return function ($this$styleModifier) {
      position($this$styleModifier, $position);
      return Unit_instance;
    };
  }
  function top$lambda($value) {
    return function ($this$styleModifier) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = $value;
      top($this$styleModifier, tmp$ret$1);
      return Unit_instance;
    };
  }
  function left$lambda($value) {
    return function ($this$styleModifier) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = $value;
      left($this$styleModifier, tmp$ret$1);
      return Unit_instance;
    };
  }
  function right$lambda($value) {
    return function ($this$styleModifier) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = $value;
      right($this$styleModifier, tmp$ret$1);
      return Unit_instance;
    };
  }
  function bottom$lambda($value) {
    return function ($this$styleModifier) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = $value;
      bottom($this$styleModifier, tmp$ret$1);
      return Unit_instance;
    };
  }
  function scrollBehavior_0(_this__u8e3s4, scrollBehavior) {
    return styleModifier(_this__u8e3s4, scrollBehavior$lambda(scrollBehavior));
  }
  function scrollBehavior$lambda($scrollBehavior) {
    return function ($this$styleModifier) {
      scrollBehavior($this$styleModifier, $scrollBehavior);
      return Unit_instance;
    };
  }
  function fillMaxWidth(_this__u8e3s4, percent) {
    percent = percent === VOID ? get_percent(100) : percent;
    return styleModifier(_this__u8e3s4, fillMaxWidth$lambda(percent));
  }
  function minWidth_0(_this__u8e3s4, size) {
    return styleModifier(_this__u8e3s4, minWidth$lambda(size));
  }
  function height_0(_this__u8e3s4, size) {
    return styleModifier(_this__u8e3s4, height$lambda(size));
  }
  function size(_this__u8e3s4, size) {
    return size_0(_this__u8e3s4, size, size);
  }
  function minHeight_0(_this__u8e3s4, size) {
    return styleModifier(_this__u8e3s4, minHeight$lambda(size));
  }
  function width_0(_this__u8e3s4, size) {
    return styleModifier(_this__u8e3s4, width$lambda(size));
  }
  function fillMaxSize(_this__u8e3s4, percent) {
    percent = percent === VOID ? get_percent(100) : percent;
    return styleModifier(_this__u8e3s4, fillMaxSize$lambda(percent));
  }
  function maxWidth_0(_this__u8e3s4, size) {
    return styleModifier(_this__u8e3s4, maxWidth$lambda(size));
  }
  function fillMaxHeight(_this__u8e3s4, percent) {
    percent = percent === VOID ? get_percent(100) : percent;
    return styleModifier(_this__u8e3s4, fillMaxHeight$lambda(percent));
  }
  function size_0(_this__u8e3s4, width, height) {
    return styleModifier(_this__u8e3s4, size$lambda(width, height));
  }
  function fillMaxWidth$lambda($percent) {
    return function ($this$styleModifier) {
      width($this$styleModifier, $percent);
      return Unit_instance;
    };
  }
  function minWidth$lambda($size) {
    return function ($this$styleModifier) {
      minWidth($this$styleModifier, $size);
      return Unit_instance;
    };
  }
  function height$lambda($size) {
    return function ($this$styleModifier) {
      height($this$styleModifier, $size);
      return Unit_instance;
    };
  }
  function minHeight$lambda($size) {
    return function ($this$styleModifier) {
      minHeight($this$styleModifier, $size);
      return Unit_instance;
    };
  }
  function width$lambda($size) {
    return function ($this$styleModifier) {
      width($this$styleModifier, $size);
      return Unit_instance;
    };
  }
  function fillMaxSize$lambda($percent) {
    return function ($this$styleModifier) {
      width($this$styleModifier, $percent);
      height($this$styleModifier, $percent);
      return Unit_instance;
    };
  }
  function maxWidth$lambda($size) {
    return function ($this$styleModifier) {
      maxWidth($this$styleModifier, $size);
      return Unit_instance;
    };
  }
  function fillMaxHeight$lambda($percent) {
    return function ($this$styleModifier) {
      height($this$styleModifier, $percent);
      return Unit_instance;
    };
  }
  function size$lambda($width, $height) {
    return function ($this$styleModifier) {
      width($this$styleModifier, $width);
      height($this$styleModifier, $height);
      return Unit_instance;
    };
  }
  function whiteSpace_0(_this__u8e3s4, whiteSpace) {
    return styleModifier(_this__u8e3s4, whiteSpace$lambda(whiteSpace));
  }
  function textAlign_0(_this__u8e3s4, textAlign) {
    return styleModifier(_this__u8e3s4, textAlign$lambda(textAlign));
  }
  function textDecorationLine_0(_this__u8e3s4, textDecorationLine) {
    return styleModifier(_this__u8e3s4, textDecorationLine$lambda(textDecorationLine));
  }
  function textShadow_0(_this__u8e3s4, offsetX, offsetY, blurRadius, color) {
    blurRadius = blurRadius === VOID ? null : blurRadius;
    color = color === VOID ? null : color;
    return styleModifier(_this__u8e3s4, textShadow$lambda(offsetX, offsetY, blurRadius, color));
  }
  function whiteSpace$lambda($whiteSpace) {
    return function ($this$styleModifier) {
      whiteSpace($this$styleModifier, $whiteSpace);
      return Unit_instance;
    };
  }
  function textAlign$lambda($textAlign) {
    return function ($this$styleModifier) {
      textAlign($this$styleModifier, $textAlign);
      return Unit_instance;
    };
  }
  function textDecorationLine$lambda($textDecorationLine) {
    return function ($this$styleModifier) {
      textDecorationLine($this$styleModifier, [$textDecorationLine]);
      return Unit_instance;
    };
  }
  function textShadow$lambda($offsetX, $offsetY, $blurRadius, $color) {
    return function ($this$styleModifier) {
      textShadow($this$styleModifier, $offsetX, $offsetY, $blurRadius, $color);
      return Unit_instance;
    };
  }
  function translateX_0(_this__u8e3s4, tx) {
    return styleModifier(_this__u8e3s4, translateX$lambda(tx));
  }
  function translateX$lambda($tx) {
    return function ($this$styleModifier) {
      translateX($this$styleModifier, $tx);
      return Unit_instance;
    };
  }
  function transition_0(_this__u8e3s4, transitions) {
    return styleModifier(_this__u8e3s4, transition$lambda(transitions));
  }
  function transition_1(_this__u8e3s4, transitions) {
    return styleModifier(_this__u8e3s4, transition$lambda_0(transitions));
  }
  function transition$lambda($transitions) {
    return function ($this$styleModifier) {
      transition($this$styleModifier, $transitions.slice());
      return Unit_instance;
    };
  }
  function transition$lambda_0($transitions) {
    return function ($this$styleModifier) {
      transition($this$styleModifier, $transitions.slice());
      return Unit_instance;
    };
  }
  function setVariable_0(_this__u8e3s4, variable, value) {
    var tmp;
    if (!(value == null)) {
      tmp = styleModifier(_this__u8e3s4, setVariable$lambda(variable, value));
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function setVariable$lambda($variable, $value) {
    return function ($this$styleModifier) {
      setVariable($this$styleModifier, $variable, $value);
      return Unit_instance;
    };
  }
  //region block: post-declaration
  protoOf(BoxScopeInstance).k2m = align;
  protoOf(ChainedModifier).x2m = then;
  protoOf(AttrsModifier).w2m = fold;
  protoOf(AttrsModifier).x2m = then;
  protoOf(StyleModifier).w2m = fold;
  protoOf(StyleModifier).x2m = then;
  //endregion
  //region block: init
  End_instance = new End();
  Start_instance = new Start();
  Top_instance = new Top();
  Bottom_instance = new Bottom();
  Center_instance = new Center();
  SpaceEvenly_instance = new SpaceEvenly();
  SpaceBetween_instance = new SpaceBetween();
  SpaceAround_instance = new SpaceAround();
  FromStyle_instance = new FromStyle();
  BoxScopeInstance_instance = new BoxScopeInstance();
  ColumnScopeInstance_instance = new ColumnScopeInstance();
  RowScopeInstance_instance = new RowScopeInstance();
  TopStart_instance = new TopStart();
  TopCenter_instance = new TopCenter();
  TopEnd_instance = new TopEnd();
  CenterStart_instance = new CenterStart();
  Center_instance_0 = new Center_0();
  CenterEnd_instance = new CenterEnd();
  BottomStart_instance = new BottomStart();
  BottomCenter_instance = new BottomCenter();
  BottomEnd_instance = new BottomEnd();
  Top_instance_0 = new Top_0();
  CenterVertically_instance = new CenterVertically();
  Bottom_instance_0 = new Bottom_0();
  Start_instance_0 = new Start_0();
  CenterHorizontally_instance = new CenterHorizontally();
  End_instance_0 = new End_0();
  FromStyle_instance_0 = new FromStyle_0();
  Companion_instance_6 = new Companion();
  Companion_instance_7 = new Companion_0();
  Colors_instance = new Colors();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Box;
  _.$_$.b = Column;
  _.$_$.c = Row;
  _.$_$.d = Spacer;
  _.$_$.e = rowClasses;
  _.$_$.f = get_isBright;
  _.$_$.g = lightened;
  _.$_$.h = animation_0;
  _.$_$.i = appearance_0;
  _.$_$.j = ariaDisabled_0;
  _.$_$.k = ariaHidden_0;
  _.$_$.l = backgroundColor_0;
  _.$_$.m = borderBottom_0;
  _.$_$.n = borderLeft_0;
  _.$_$.o = borderRadius_2;
  _.$_$.p = borderRadius_1;
  _.$_$.q = borderTop_0;
  _.$_$.r = border_1;
  _.$_$.s = border_0;
  _.$_$.t = bottom_0;
  _.$_$.u = boxShadow_0;
  _.$_$.v = boxSizing_0;
  _.$_$.w = classNames;
  _.$_$.x = color_0;
  _.$_$.y = cursor_0;
  _.$_$.z = display_0;
  _.$_$.a1 = fillMaxHeight;
  _.$_$.b1 = fillMaxSize;
  _.$_$.c1 = fillMaxWidth;
  _.$_$.d1 = flexGrow_0;
  _.$_$.e1 = fontFamily_0;
  _.$_$.f1 = fontSize_0;
  _.$_$.g1 = fontWeight_1;
  _.$_$.h1 = fontWeight_2;
  _.$_$.i1 = gap_0;
  _.$_$.j1 = gridItem;
  _.$_$.k1 = gridRow_0;
  _.$_$.l1 = gridTemplateColumns_0;
  _.$_$.m1 = gridTemplateRows_0;
  _.$_$.n1 = grid_0;
  _.$_$.o1 = height_0;
  _.$_$.p1 = left_0;
  _.$_$.q1 = lineHeight_0;
  _.$_$.r1 = listStyle_0;
  _.$_$.s1 = margin_2;
  _.$_$.t1 = margin_1;
  _.$_$.u1 = margin_4;
  _.$_$.v1 = margin_3;
  _.$_$.w1 = margin_0;
  _.$_$.x1 = maxWidth_0;
  _.$_$.y1 = minHeight_0;
  _.$_$.z1 = minWidth_0;
  _.$_$.a2 = objectFit_0;
  _.$_$.b2 = onAnimationEnd;
  _.$_$.c2 = onClick;
  _.$_$.d2 = opacity_0;
  _.$_$.e2 = outline_0;
  _.$_$.f2 = overflowWrap_0;
  _.$_$.g2 = overflow_0;
  _.$_$.h2 = overflow_1;
  _.$_$.i2 = paddingInline_0;
  _.$_$.j2 = padding_3;
  _.$_$.k2 = padding_0;
  _.$_$.l2 = padding_2;
  _.$_$.m2 = padding_1;
  _.$_$.n2 = position_0;
  _.$_$.o2 = right_0;
  _.$_$.p2 = scrollBehavior_0;
  _.$_$.q2 = setVariable_0;
  _.$_$.r2 = size;
  _.$_$.s2 = tabIndex;
  _.$_$.t2 = textAlign_0;
  _.$_$.u2 = textDecorationLine_0;
  _.$_$.v2 = textShadow_0;
  _.$_$.w2 = top_0;
  _.$_$.x2 = transition_0;
  _.$_$.y2 = transition_1;
  _.$_$.z2 = translateX_0;
  _.$_$.a3 = userSelect_0;
  _.$_$.b3 = verticalAlign_0;
  _.$_$.c3 = whiteSpace_0;
  _.$_$.d3 = width_0;
  _.$_$.e3 = styleModifier;
  _.$_$.f3 = thenIf;
  _.$_$.g3 = toAttrs;
  _.$_$.h3 = toStyles;
  _.$_$.i3 = Center_instance;
  _.$_$.j3 = KobwebComposeStyleSheet_getInstance;
  _.$_$.k3 = Companion_instance_7;
  _.$_$.l3 = Colors_instance;
  _.$_$.m3 = CenterEnd_instance;
  _.$_$.n3 = CenterHorizontally_instance;
  _.$_$.o3 = CenterVertically_instance;
  _.$_$.p3 = Center_instance_0;
  _.$_$.q3 = End_instance_0;
  _.$_$.r3 = Start_instance_0;
  _.$_$.s3 = TopCenter_instance;
  _.$_$.t3 = TopStart_instance;
  _.$_$.u3 = Companion_instance_6;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-kobweb-compose.js.map