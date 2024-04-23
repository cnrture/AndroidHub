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
  var protoOf = kotlin_kotlin.$_$.fc;
  var interfaceMeta = kotlin_kotlin.$_$.gb;
  var setMetadataFor = kotlin_kotlin.$_$.gc;
  var VOID = kotlin_kotlin.$_$.g;
  var objectMeta = kotlin_kotlin.$_$.ec;
  var Unit_getInstance = kotlin_kotlin.$_$.w4;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var THROW_CCE = kotlin_kotlin.$_$.eg;
  var Div = kotlin_org_jetbrains_compose_html_html_core.$_$.k5;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var registerRefScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o2;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var Annotation = kotlin_kotlin.$_$.of;
  var classMeta = kotlin_kotlin.$_$.ua;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.eh;
  var equals = kotlin_kotlin.$_$.xa;
  var isInterface = kotlin_kotlin.$_$.pb;
  var grid = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f1;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.z4;
  var get_fr = kotlin_org_jetbrains_compose_html_html_core.$_$.d4;
  var gridArea = kotlin_org_jetbrains_compose_html_html_core.$_$.f4;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.c;
  var alignItems = kotlin_org_jetbrains_compose_html_html_core.$_$.h3;
  var Companion_getInstance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c3;
  var justifyItems = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h1;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_html_html_core.$_$.d;
  var alignSelf = kotlin_org_jetbrains_compose_html_html_core.$_$.i3;
  var Companion_getInstance_3 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d3;
  var justifySelf = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i1;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_html_html_core.$_$.k;
  var display = kotlin_org_jetbrains_compose_html_html_core.$_$.w3;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_html_html_core.$_$.l;
  var flexDirection = kotlin_org_jetbrains_compose_html_html_core.$_$.y3;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_html_html_core.$_$.m;
  var justifyContent = kotlin_org_jetbrains_compose_html_html_core.$_$.m4;
  var flexGrow = kotlin_org_jetbrains_compose_html_html_core.$_$.z3;
  var StyleSheet = kotlin_org_jetbrains_compose_html_html_core.$_$.g3;
  var StyleSheet_init_$Init$ = kotlin_org_jetbrains_compose_html_html_core.$_$.b;
  var hashCode = kotlin_kotlin.$_$.eb;
  var ComparableAttrsScope_init_$Create$ = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.v2;
  var ComparableStyleScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d;
  var Long = kotlin_kotlin.$_$.yf;
  var toString = kotlin_kotlin.$_$.cf;
  var toString_0 = kotlin_kotlin.$_$.kc;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.w1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.r1;
  var numberToInt = kotlin_kotlin.$_$.bc;
  var roundToInt = kotlin_kotlin.$_$.mc;
  var getNumberHashCode = kotlin_kotlin.$_$.bb;
  var toDegrees = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.y1;
  var coerceIn = kotlin_kotlin.$_$.rc;
  var ariaHidden = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m;
  var ariaDisabled = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l;
  var animation = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j;
  var backgroundColor = kotlin_org_jetbrains_compose_html_html_core.$_$.j3;
  var borderColor = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o;
  var borderColor_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p;
  var Color_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.j;
  var Color = kotlin_org_jetbrains_compose_html_html_core.$_$.w2;
  var borderColor_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.q;
  var borderColor_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r;
  var borderStyle = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.u;
  var borderStyle_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.w;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_html_html_core.$_$.n;
  var borderStyle_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.t;
  var borderStyle_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.v;
  var borderWidth = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.y;
  var borderWidth_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.o3;
  var borderWidth_1 = kotlin_org_jetbrains_compose_html_html_core.$_$.p3;
  var borderWidth_2 = kotlin_org_jetbrains_compose_html_html_core.$_$.n3;
  var borderBottom = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.n;
  var borderRadius = kotlin_org_jetbrains_compose_html_html_core.$_$.l3;
  var border = kotlin_org_jetbrains_compose_html_html_core.$_$.q3;
  var borderTop = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.x;
  var borderLeft = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.s;
  var borderRadius_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.k3;
  var borderRadius_1 = kotlin_org_jetbrains_compose_html_html_core.$_$.m3;
  var boxShadow = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.z;
  var boxSizing = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a1;
  var color = kotlin_org_jetbrains_compose_html_html_core.$_$.u3;
  var opacity = kotlin_org_jetbrains_compose_html_html_core.$_$.v4;
  var appearance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k;
  var gap = kotlin_org_jetbrains_compose_html_html_core.$_$.e4;
  var fontWeight = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c1;
  var fontSize = kotlin_org_jetbrains_compose_html_html_core.$_$.b4;
  var fontWeight_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.c4;
  var fontFamily = kotlin_org_jetbrains_compose_html_html_core.$_$.a4;
  var gridTemplateColumns = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d1;
  var gridTemplateRows = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e1;
  var gridRow = kotlin_org_jetbrains_compose_html_html_core.$_$.i4;
  var userSelect = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b2;
  var cursor = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b1;
  var overflowX = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p1;
  var overflowY = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.q1;
  var padding = kotlin_org_jetbrains_compose_html_html_core.$_$.w4;
  var margin = kotlin_org_jetbrains_compose_html_html_core.$_$.p4;
  var marginBlock = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k1;
  var lineHeight = kotlin_org_jetbrains_compose_html_html_core.$_$.o4;
  var overflow = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r1;
  var paddingInline = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.s1;
  var overflowWrap = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o1;
  var verticalAlign = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c2;
  var marginInline = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l1;
  var listStyle = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j1;
  var objectFit = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m1;
  var outline = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.n1;
  var position = kotlin_org_jetbrains_compose_html_html_core.$_$.y4;
  var top = kotlin_org_jetbrains_compose_html_html_core.$_$.c5;
  var left = kotlin_org_jetbrains_compose_html_html_core.$_$.n4;
  var right = kotlin_org_jetbrains_compose_html_html_core.$_$.a5;
  var bottom = kotlin_org_jetbrains_compose_html_html_core.$_$.r3;
  var scrollBehavior = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.t1;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.x4;
  var width = kotlin_org_jetbrains_compose_html_html_core.$_$.f5;
  var minWidth = kotlin_org_jetbrains_compose_html_html_core.$_$.t4;
  var height = kotlin_org_jetbrains_compose_html_html_core.$_$.l4;
  var minHeight = kotlin_org_jetbrains_compose_html_html_core.$_$.s4;
  var maxWidth = kotlin_org_jetbrains_compose_html_html_core.$_$.q4;
  var whiteSpace = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d2;
  var textAlign = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.w1;
  var textDecorationLine = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.x1;
  var translateX = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a2;
  var transition = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.z1;
  var setVariable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.v1;
  var setVariable_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.u1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Horizontal, 'Horizontal', interfaceMeta);
  setMetadataFor(Vertical, 'Vertical', interfaceMeta);
  setMetadataFor(HorizontalOrVertical, 'HorizontalOrVertical', interfaceMeta, VOID, [Horizontal, Vertical]);
  setMetadataFor(End, 'End', objectMeta, VOID, [Horizontal]);
  setMetadataFor(Start, 'Start', objectMeta, VOID, [Horizontal]);
  setMetadataFor(Top, 'Top', objectMeta, VOID, [Vertical]);
  setMetadataFor(Bottom, 'Bottom', objectMeta, VOID, [Vertical]);
  setMetadataFor(Center, 'Center', objectMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(SpaceEvenly, 'SpaceEvenly', objectMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(SpaceBetween, 'SpaceBetween', objectMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(SpaceAround, 'SpaceAround', objectMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(FromStyle, 'FromStyle', objectMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(Arrangement, 'Arrangement', objectMeta);
  function align(_this__u8e3s4, alignment) {
    return attrsModifier(_this__u8e3s4, BoxScope$align$lambda(alignment));
  }
  setMetadataFor(BoxScope, 'BoxScope', interfaceMeta);
  setMetadataFor(ComposableSingletons$BoxKt, 'ComposableSingletons$BoxKt', objectMeta);
  setMetadataFor(BoxScopeInstance, 'BoxScopeInstance', objectMeta, VOID, [BoxScope]);
  setMetadataFor(BoxDefaults, 'BoxDefaults', objectMeta);
  function weight(_this__u8e3s4, value) {
    return flexGrow_0(_this__u8e3s4, value);
  }
  setMetadataFor(FlexScope, 'FlexScope', interfaceMeta);
  function align_0(_this__u8e3s4, alignment) {
    return attrsModifier(_this__u8e3s4, ColumnScope$align$lambda(alignment));
  }
  setMetadataFor(ColumnScope, 'ColumnScope', interfaceMeta, VOID, [FlexScope]);
  setMetadataFor(ColumnDefaults, 'ColumnDefaults', objectMeta);
  setMetadataFor(ColumnScopeInstance, 'ColumnScopeInstance', objectMeta, VOID, [ColumnScope]);
  setMetadataFor(LayoutScopeMarker, 'LayoutScopeMarker', classMeta, VOID, [Annotation]);
  function align_1(_this__u8e3s4, alignment) {
    return attrsModifier(_this__u8e3s4, RowScope$align$lambda(alignment));
  }
  setMetadataFor(RowScope, 'RowScope', interfaceMeta, VOID, [FlexScope]);
  setMetadataFor(RowDefaults, 'RowDefaults', objectMeta);
  setMetadataFor(RowScopeInstance, 'RowScopeInstance', objectMeta, VOID, [RowScope]);
  setMetadataFor(KobwebComposeStyleSheet, 'KobwebComposeStyleSheet', objectMeta, StyleSheet);
  setMetadataFor(Vertical_0, 'Vertical', interfaceMeta);
  setMetadataFor(Horizontal_0, 'Horizontal', interfaceMeta);
  setMetadataFor(Alignment, 'Alignment', interfaceMeta);
  setMetadataFor(TopStart, 'TopStart', objectMeta, VOID, [Alignment]);
  setMetadataFor(TopCenter, 'TopCenter', objectMeta, VOID, [Alignment]);
  setMetadataFor(TopEnd, 'TopEnd', objectMeta, VOID, [Alignment]);
  setMetadataFor(CenterStart, 'CenterStart', objectMeta, VOID, [Alignment]);
  setMetadataFor(Center_0, 'Center', objectMeta, VOID, [Alignment]);
  setMetadataFor(CenterEnd, 'CenterEnd', objectMeta, VOID, [Alignment]);
  setMetadataFor(BottomStart, 'BottomStart', objectMeta, VOID, [Alignment]);
  setMetadataFor(BottomCenter, 'BottomCenter', objectMeta, VOID, [Alignment]);
  setMetadataFor(BottomEnd, 'BottomEnd', objectMeta, VOID, [Alignment]);
  setMetadataFor(Top_0, 'Top', objectMeta, VOID, [Vertical_0]);
  setMetadataFor(CenterVertically, 'CenterVertically', objectMeta, VOID, [Vertical_0]);
  setMetadataFor(Bottom_0, 'Bottom', objectMeta, VOID, [Vertical_0]);
  setMetadataFor(Start_0, 'Start', objectMeta, VOID, [Horizontal_0]);
  setMetadataFor(CenterHorizontally, 'CenterHorizontally', objectMeta, VOID, [Horizontal_0]);
  setMetadataFor(End_0, 'End', objectMeta, VOID, [Horizontal_0]);
  setMetadataFor(FromStyle_0, 'FromStyle', objectMeta, VOID, [Alignment, Horizontal_0, Vertical_0]);
  function then(other) {
    return other === Companion_getInstance_8() ? this : new ChainedModifier(this, other);
  }
  setMetadataFor(Modifier, 'Modifier', interfaceMeta);
  function fold(initial, operation) {
    return operation(initial, this);
  }
  setMetadataFor(Element, 'Element', interfaceMeta, VOID, [Modifier]);
  setMetadataFor(Companion, 'Companion', objectMeta, VOID, [Modifier]);
  setMetadataFor(ChainedModifier, 'ChainedModifier', classMeta, VOID, [Modifier]);
  setMetadataFor(WebModifier, 'WebModifier', interfaceMeta, VOID, [Element]);
  setMetadataFor(AttrsModifier, 'AttrsModifier', classMeta, VOID, [WebModifier]);
  setMetadataFor(StyleModifier, 'StyleModifier', classMeta, VOID, [WebModifier]);
  function darkened$default(byPercent, $super) {
    byPercent = byPercent === VOID ? 0.3 : byPercent;
    return $super === VOID ? this.darkened_iwrtmu_k$(byPercent) : $super.darkened_iwrtmu_k$.call(this, byPercent);
  }
  setMetadataFor(Color_0, 'Color', interfaceMeta);
  setMetadataFor(Rgb, 'Rgb', classMeta, VOID, [Color_0]);
  setMetadataFor(Hsl, 'Hsl', classMeta, VOID, [Color_0]);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(Colors, 'Colors', objectMeta);
  setMetadataFor(BorderScope, 'BorderScope', classMeta);
  setMetadataFor(OverflowScope, 'OverflowScope', classMeta);
  //endregion
  function Horizontal() {
  }
  function Vertical() {
  }
  function HorizontalOrVertical() {
  }
  function End() {
    End_instance = this;
  }
  var End_instance;
  function End_getInstance() {
    if (End_instance == null)
      new End();
    return End_instance;
  }
  function Start() {
    Start_instance = this;
  }
  var Start_instance;
  function Start_getInstance() {
    if (Start_instance == null)
      new Start();
    return Start_instance;
  }
  function Top() {
    Top_instance = this;
  }
  var Top_instance;
  function Top_getInstance() {
    if (Top_instance == null)
      new Top();
    return Top_instance;
  }
  function Bottom() {
    Bottom_instance = this;
  }
  var Bottom_instance;
  function Bottom_getInstance() {
    if (Bottom_instance == null)
      new Bottom();
    return Bottom_instance;
  }
  function Center() {
    Center_instance = this;
  }
  var Center_instance;
  function Center_getInstance() {
    if (Center_instance == null)
      new Center();
    return Center_instance;
  }
  function SpaceEvenly() {
    SpaceEvenly_instance = this;
  }
  var SpaceEvenly_instance;
  function SpaceEvenly_getInstance() {
    if (SpaceEvenly_instance == null)
      new SpaceEvenly();
    return SpaceEvenly_instance;
  }
  function SpaceBetween() {
    SpaceBetween_instance = this;
  }
  var SpaceBetween_instance;
  function SpaceBetween_getInstance() {
    if (SpaceBetween_instance == null)
      new SpaceBetween();
    return SpaceBetween_instance;
  }
  function SpaceAround() {
    SpaceAround_instance = this;
  }
  var SpaceAround_instance;
  function SpaceAround_getInstance() {
    if (SpaceAround_instance == null)
      new SpaceAround();
    return SpaceAround_instance;
  }
  function FromStyle() {
    FromStyle_instance = this;
  }
  var FromStyle_instance;
  function FromStyle_getInstance() {
    if (FromStyle_instance == null)
      new FromStyle();
    return FromStyle_instance;
  }
  function Arrangement() {
    Arrangement_instance = this;
  }
  var Arrangement_instance;
  function Arrangement_getInstance() {
    if (Arrangement_instance == null)
      new Arrangement();
    return Arrangement_instance;
  }
  var com_varabyte_kobweb_compose_foundation_layout_Arrangement_Center$stable;
  function BoxScope$align$lambda($alignment) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.classes_ayghm2_k$([toClassName_0($alignment) + '-self']);
      return Unit_getInstance();
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
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(287459556);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(contentAlignment_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(ref_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content_0._v) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance_8();
      }
      if (!(($default & 2) === 0)) {
        contentAlignment_0._v = TopStart_getInstance();
      }
      if (!(($default & 4) === 0)) {
        ref_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        content_0._v = ComposableSingletons$BoxKt_getInstance().lambda_1_r8sbbp_1;
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
        // Inline function 'com.varabyte.kobweb.compose.foundation.layout.Box.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_0(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Div(tmp, tmp0, $composer_0, 48, 0);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(Box$lambda_0(modifier_0, contentAlignment_0, ref_0, content_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$BoxKt$lambda_1$lambda_ab4h0h($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1088174424, $changed, -1, 'com.varabyte.kobweb.compose.foundation.layout.ComposableSingletons$BoxKt.lambda-1.<anonymous> (Box.kt:43)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$BoxKt() {
    ComposableSingletons$BoxKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-1088174424, false, ComposableSingletons$BoxKt$lambda_1$lambda_ab4h0h));
  }
  protoOf(ComposableSingletons$BoxKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$BoxKt_instance;
  function ComposableSingletons$BoxKt_getInstance() {
    if (ComposableSingletons$BoxKt_instance == null)
      new ComposableSingletons$BoxKt();
    return ComposableSingletons$BoxKt_instance;
  }
  function boxClasses(_this__u8e3s4, contentAlignment) {
    contentAlignment = contentAlignment === VOID ? BoxDefaults_getInstance().ContentAlignment_1 : contentAlignment;
    return classNames(_this__u8e3s4, ['kobweb-box', toClassName_0(contentAlignment)]);
  }
  function BoxScopeInstance() {
    BoxScopeInstance_instance = this;
  }
  var BoxScopeInstance_instance;
  function BoxScopeInstance_getInstance() {
    if (BoxScopeInstance_instance == null)
      new BoxScopeInstance();
    return BoxScopeInstance_instance;
  }
  function BoxDefaults() {
    BoxDefaults_instance = this;
    this.ContentAlignment_1 = TopStart_getInstance();
  }
  protoOf(BoxDefaults).get_ContentAlignment_3kz1oz_k$ = function () {
    return this.ContentAlignment_1;
  };
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
      $content._v(BoxScopeInstance_getInstance(), $composer_0, 6);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function Box$lambda_0($modifier, $contentAlignment, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Box($modifier._v, $contentAlignment._v, $ref._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function ColumnScope$align$lambda($alignment) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.classes_ayghm2_k$([toClassName_1($alignment) + '-self']);
      return Unit_getInstance();
    };
  }
  function ColumnScope() {
  }
  function Column(modifier, verticalArrangement, horizontalAlignment, ref, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var verticalArrangement_0 = {_v: verticalArrangement};
    var horizontalAlignment_0 = {_v: horizontalAlignment};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-59454311);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ((($default & 2) === 0 ? $composer_0.changed_ga7h3f_k$(verticalArrangement_0._v) : false) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ((($default & 4) === 0 ? $composer_0.changed_ga7h3f_k$(horizontalAlignment_0._v) : false) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(ref_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 16384 : 8192);
    if (!(($dirty & 46811) === 9362) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g83kzo_k$();
      if (($changed & 1) === 0 ? true : $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_getInstance_8();
        }
        if (!(($default & 2) === 0)) {
          verticalArrangement_0._v = ColumnDefaults_getInstance().VerticalArrangement_1;
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          horizontalAlignment_0._v = ColumnDefaults_getInstance().HorizontalAlignment_1;
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          ref_0._v = null;
        }
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.endDefaults_b0s0ot_k$();
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
        // Inline function 'com.varabyte.kobweb.compose.foundation.layout.Column.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Div(tmp, tmp0, $composer_0, 48, 0);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(Column$lambda_0(modifier_0, verticalArrangement_0, horizontalAlignment_0, ref_0, content, $changed, $default));
    }
  }
  function ColumnDefaults() {
    ColumnDefaults_instance = this;
    this.VerticalArrangement_1 = Top_getInstance();
    this.HorizontalAlignment_1 = Start_getInstance_0();
  }
  protoOf(ColumnDefaults).get_VerticalArrangement_saziz9_k$ = function () {
    return this.VerticalArrangement_1;
  };
  protoOf(ColumnDefaults).get_HorizontalAlignment_d8l8ra_k$ = function () {
    return this.HorizontalAlignment_1;
  };
  var ColumnDefaults_instance;
  function ColumnDefaults_getInstance() {
    if (ColumnDefaults_instance == null)
      new ColumnDefaults();
    return ColumnDefaults_instance;
  }
  function columnClasses(_this__u8e3s4, verticalArrangement, horizontalAlignment) {
    verticalArrangement = verticalArrangement === VOID ? ColumnDefaults_getInstance().VerticalArrangement_1 : verticalArrangement;
    horizontalAlignment = horizontalAlignment === VOID ? ColumnDefaults_getInstance().HorizontalAlignment_1 : horizontalAlignment;
    return classNames(_this__u8e3s4, ['kobweb-col', toClassName_3(verticalArrangement), toClassName_1(horizontalAlignment)]);
  }
  function ColumnScopeInstance() {
    ColumnScopeInstance_instance = this;
  }
  var ColumnScopeInstance_instance;
  function ColumnScopeInstance_getInstance() {
    if (ColumnScopeInstance_instance == null)
      new ColumnScopeInstance();
    return ColumnScopeInstance_instance;
  }
  function Column$lambda($ref, $content) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1861113368, $changed, -1, 'com.varabyte.kobweb.compose.foundation.layout.Column.<anonymous> (Column.kt:50)');
      }
      registerRefScope($this$Div, $ref._v, $composer_0, 72);
      $content(ColumnScopeInstance_getInstance(), $composer_0, 6);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function Column$lambda_0($modifier, $verticalArrangement, $horizontalAlignment, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Column($modifier._v, $verticalArrangement._v, $horizontalAlignment._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function FlexScope() {
  }
  function LayoutScopeMarker() {
  }
  protoOf(LayoutScopeMarker).equals = function (other) {
    if (!(other instanceof LayoutScopeMarker))
      return false;
    other instanceof LayoutScopeMarker || THROW_CCE();
    return true;
  };
  protoOf(LayoutScopeMarker).hashCode = function () {
    return 0;
  };
  protoOf(LayoutScopeMarker).toString = function () {
    return '@com.varabyte.kobweb.compose.foundation.layout.LayoutScopeMarker()';
  };
  function rowClasses(_this__u8e3s4, horizontalArrangement, verticalAlignment) {
    horizontalArrangement = horizontalArrangement === VOID ? RowDefaults_getInstance().HorizontalArrangement_1 : horizontalArrangement;
    verticalAlignment = verticalAlignment === VOID ? RowDefaults_getInstance().VerticalAlignment_1 : verticalAlignment;
    return classNames(_this__u8e3s4, ['kobweb-row', toClassName_2(horizontalArrangement), toClassName(verticalAlignment)]);
  }
  function Row(modifier, horizontalArrangement, verticalAlignment, ref, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var horizontalArrangement_0 = {_v: horizontalArrangement};
    var verticalAlignment_0 = {_v: verticalAlignment};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-568516375);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ((($default & 2) === 0 ? $composer_0.changed_ga7h3f_k$(horizontalArrangement_0._v) : false) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ((($default & 4) === 0 ? $composer_0.changed_ga7h3f_k$(verticalAlignment_0._v) : false) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(ref_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 16384 : 8192);
    if (!(($dirty & 46811) === 9362) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g83kzo_k$();
      if (($changed & 1) === 0 ? true : $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_getInstance_8();
        }
        if (!(($default & 2) === 0)) {
          horizontalArrangement_0._v = RowDefaults_getInstance().HorizontalArrangement_1;
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          verticalAlignment_0._v = RowDefaults_getInstance().VerticalAlignment_1;
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          ref_0._v = null;
        }
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.endDefaults_b0s0ot_k$();
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
        // Inline function 'com.varabyte.kobweb.compose.foundation.layout.Row.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_2(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Div(tmp, tmp0, $composer_0, 48, 0);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(Row$lambda_0(modifier_0, horizontalArrangement_0, verticalAlignment_0, ref_0, content, $changed, $default));
    }
  }
  function RowScope$align$lambda($alignment) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.classes_ayghm2_k$([toClassName($alignment) + '-self']);
      return Unit_getInstance();
    };
  }
  function RowScope() {
  }
  function RowDefaults() {
    RowDefaults_instance = this;
    this.HorizontalArrangement_1 = Start_getInstance();
    this.VerticalAlignment_1 = Top_getInstance_0();
  }
  protoOf(RowDefaults).get_HorizontalArrangement_ucg5j7_k$ = function () {
    return this.HorizontalArrangement_1;
  };
  protoOf(RowDefaults).get_VerticalAlignment_e9x2ys_k$ = function () {
    return this.VerticalAlignment_1;
  };
  var RowDefaults_instance;
  function RowDefaults_getInstance() {
    if (RowDefaults_instance == null)
      new RowDefaults();
    return RowDefaults_instance;
  }
  function RowScopeInstance() {
    RowScopeInstance_instance = this;
  }
  var RowScopeInstance_instance;
  function RowScopeInstance_getInstance() {
    if (RowScopeInstance_instance == null)
      new RowScopeInstance();
    return RowScopeInstance_instance;
  }
  function Row$lambda($ref, $content) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1725920680, $changed, -1, 'com.varabyte.kobweb.compose.foundation.layout.Row.<anonymous> (Row.kt:51)');
      }
      registerRefScope($this$Div, $ref._v, $composer_0, 72);
      $content(RowScopeInstance_getInstance(), $composer_0, 6);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function Row$lambda_0($modifier, $horizontalArrangement, $verticalAlignment, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Row($modifier._v, $horizontalArrangement._v, $verticalAlignment._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Spacer($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1962209258);
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1962209258, $changed, -1, 'com.varabyte.kobweb.compose.foundation.layout.Spacer (Spacer.kt:9)');
      }
      $composer_0.startReplaceableGroup_ip860b_k$(-247832835);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'com.varabyte.kobweb.compose.foundation.layout.Spacer.<anonymous>' call
        var value = Spacer$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      Div(tmp0_group, null, $composer_0, 6, 2);
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
      tmp1_safe_receiver.updateScope_t8jcf_k$(Spacer$lambda_0($changed));
    }
  }
  function Spacer$lambda($this$Div) {
    $this$Div.classes_ayghm2_k$(['kobweb-spacer']);
    return Unit_getInstance();
  }
  function Spacer$lambda_0($$changed) {
    return function ($composer, $force) {
      Spacer($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function toClassName(_this__u8e3s4) {
    var tmp;
    if (equals(_this__u8e3s4, Top_getInstance_0())) {
      tmp = 'kobweb-align-top';
    } else if (equals(_this__u8e3s4, CenterVertically_getInstance())) {
      tmp = 'kobweb-align-center-vert';
    } else if (equals(_this__u8e3s4, Bottom_getInstance_0())) {
      tmp = 'kobweb-align-bottom';
    } else if (equals(_this__u8e3s4, FromStyle_getInstance_0())) {
      tmp = 'kobweb-align-from-style-vert';
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  }
  function toClassName_0(_this__u8e3s4) {
    var tmp;
    if (equals(_this__u8e3s4, TopStart_getInstance())) {
      tmp = 'kobweb-align-top-start';
    } else if (equals(_this__u8e3s4, TopCenter_getInstance())) {
      tmp = 'kobweb-align-top-center';
    } else if (equals(_this__u8e3s4, TopEnd_getInstance())) {
      tmp = 'kobweb-align-top-end';
    } else if (equals(_this__u8e3s4, CenterStart_getInstance())) {
      tmp = 'kobweb-align-center-start';
    } else if (equals(_this__u8e3s4, Center_getInstance_0())) {
      tmp = 'kobweb-align-center';
    } else if (equals(_this__u8e3s4, CenterEnd_getInstance())) {
      tmp = 'kobweb-align-center-end';
    } else if (equals(_this__u8e3s4, BottomStart_getInstance())) {
      tmp = 'kobweb-align-bottom-start';
    } else if (equals(_this__u8e3s4, BottomCenter_getInstance())) {
      tmp = 'kobweb-align-bottom-center';
    } else if (equals(_this__u8e3s4, BottomEnd_getInstance())) {
      tmp = 'kobweb-align-bottom-end';
    } else if (equals(_this__u8e3s4, FromStyle_getInstance_0())) {
      tmp = 'kobweb-align-from-style';
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  }
  function toClassName_1(_this__u8e3s4) {
    var tmp;
    if (equals(_this__u8e3s4, Start_getInstance_0())) {
      tmp = 'kobweb-align-start';
    } else if (equals(_this__u8e3s4, CenterHorizontally_getInstance())) {
      tmp = 'kobweb-align-center-horiz';
    } else if (equals(_this__u8e3s4, End_getInstance_0())) {
      tmp = 'kobweb-align-end';
    } else if (equals(_this__u8e3s4, FromStyle_getInstance_0())) {
      tmp = 'kobweb-align-from-style-horiz';
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  }
  function toClassName_2(_this__u8e3s4) {
    var tmp;
    if (equals(_this__u8e3s4, End_getInstance())) {
      tmp = 'kobweb-arrange-end';
    } else {
      if (equals(_this__u8e3s4, Start_getInstance())) {
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
    if (equals(_this__u8e3s4, Top_getInstance())) {
      tmp = 'kobweb-arrange-top';
    } else {
      if (equals(_this__u8e3s4, Bottom_getInstance())) {
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
    if (equals(_this__u8e3s4, Center_getInstance())) {
      tmp = 'kobweb-arrange-center';
    } else if (equals(_this__u8e3s4, SpaceAround_getInstance())) {
      tmp = 'kobweb-arrange-space-around';
    } else if (equals(_this__u8e3s4, SpaceBetween_getInstance())) {
      tmp = 'kobweb-arrange-space-between';
    } else if (equals(_this__u8e3s4, SpaceEvenly_getInstance())) {
      tmp = 'kobweb-arrange-space-evenly';
    } else if (equals(_this__u8e3s4, FromStyle_getInstance())) {
      tmp = 'kobweb-arrange-from-style';
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  }
  function initBox($this) {
    $this.invoke_17x10s_k$('.kobweb-box', KobwebComposeStyleSheet$initBox$lambda);
    $this.invoke_17x10s_k$('.kobweb-box > *', KobwebComposeStyleSheet$initBox$lambda_0);
    $this.invoke_17x10s_k$('.kobweb-box.kobweb-align-top-start', KobwebComposeStyleSheet$initBox$lambda_1);
    $this.invoke_17x10s_k$('.kobweb-box.kobweb-align-top-center', KobwebComposeStyleSheet$initBox$lambda_2);
    $this.invoke_17x10s_k$('.kobweb-box.kobweb-align-top-end', KobwebComposeStyleSheet$initBox$lambda_3);
    $this.invoke_17x10s_k$('.kobweb-box.kobweb-align-center-start', KobwebComposeStyleSheet$initBox$lambda_4);
    $this.invoke_17x10s_k$('.kobweb-box.kobweb-align-center', KobwebComposeStyleSheet$initBox$lambda_5);
    $this.invoke_17x10s_k$('.kobweb-box.kobweb-align-center-end', KobwebComposeStyleSheet$initBox$lambda_6);
    $this.invoke_17x10s_k$('.kobweb-box.kobweb-align-bottom-start', KobwebComposeStyleSheet$initBox$lambda_7);
    $this.invoke_17x10s_k$('.kobweb-box.kobweb-align-bottom-center', KobwebComposeStyleSheet$initBox$lambda_8);
    $this.invoke_17x10s_k$('.kobweb-box.kobweb-align-bottom-end', KobwebComposeStyleSheet$initBox$lambda_9);
    $this.invoke_17x10s_k$('.kobweb-box > .kobweb-align-top-start-self', KobwebComposeStyleSheet$initBox$lambda_10);
    $this.invoke_17x10s_k$('.kobweb-box > .kobweb-align-top-center-self', KobwebComposeStyleSheet$initBox$lambda_11);
    $this.invoke_17x10s_k$('.kobweb-box > .kobweb-align-top-end-self', KobwebComposeStyleSheet$initBox$lambda_12);
    $this.invoke_17x10s_k$('.kobweb-box > .kobweb-align-center-start-self', KobwebComposeStyleSheet$initBox$lambda_13);
    $this.invoke_17x10s_k$('.kobweb-box > .kobweb-align-center-self', KobwebComposeStyleSheet$initBox$lambda_14);
    $this.invoke_17x10s_k$('.kobweb-box > .kobweb-align-center-end-self', KobwebComposeStyleSheet$initBox$lambda_15);
    $this.invoke_17x10s_k$('.kobweb-box > .kobweb-align-bottom-start-self', KobwebComposeStyleSheet$initBox$lambda_16);
    $this.invoke_17x10s_k$('.kobweb-box > .kobweb-align-bottom-center-self', KobwebComposeStyleSheet$initBox$lambda_17);
    $this.invoke_17x10s_k$('.kobweb-box > .kobweb-align-bottom-end-self', KobwebComposeStyleSheet$initBox$lambda_18);
  }
  function initRow($this) {
    $this.invoke_17x10s_k$('.kobweb-row', KobwebComposeStyleSheet$initRow$lambda);
    $this.invoke_17x10s_k$('.kobweb-row.kobweb-arrange-start', KobwebComposeStyleSheet$initRow$lambda_0);
    $this.invoke_17x10s_k$('.kobweb-row.kobweb-arrange-center', KobwebComposeStyleSheet$initRow$lambda_1);
    $this.invoke_17x10s_k$('.kobweb-row.kobweb-arrange-end', KobwebComposeStyleSheet$initRow$lambda_2);
    $this.invoke_17x10s_k$('.kobweb-row.kobweb-arrange-space-evenly', KobwebComposeStyleSheet$initRow$lambda_3);
    $this.invoke_17x10s_k$('.kobweb-row.kobweb-arrange-space-between', KobwebComposeStyleSheet$initRow$lambda_4);
    $this.invoke_17x10s_k$('.kobweb-row.kobweb-arrange-space-around', KobwebComposeStyleSheet$initRow$lambda_5);
    $this.invoke_17x10s_k$('.kobweb-row.kobweb-align-top', KobwebComposeStyleSheet$initRow$lambda_6);
    $this.invoke_17x10s_k$('.kobweb-row.kobweb-align-center-vert', KobwebComposeStyleSheet$initRow$lambda_7);
    $this.invoke_17x10s_k$('.kobweb-row.kobweb-align-bottom', KobwebComposeStyleSheet$initRow$lambda_8);
    $this.invoke_17x10s_k$('.kobweb-row > .kobweb-align-top-self', KobwebComposeStyleSheet$initRow$lambda_9);
    $this.invoke_17x10s_k$('.kobweb-row > .kobweb-align-center-vert-self', KobwebComposeStyleSheet$initRow$lambda_10);
    $this.invoke_17x10s_k$('.kobweb-row > .kobweb-align-bottom-self', KobwebComposeStyleSheet$initRow$lambda_11);
  }
  function initCol($this) {
    $this.invoke_17x10s_k$('.kobweb-col', KobwebComposeStyleSheet$initCol$lambda);
    $this.invoke_17x10s_k$('.kobweb-col.kobweb-arrange-top', KobwebComposeStyleSheet$initCol$lambda_0);
    $this.invoke_17x10s_k$('.kobweb-col.kobweb-arrange-center', KobwebComposeStyleSheet$initCol$lambda_1);
    $this.invoke_17x10s_k$('.kobweb-col.kobweb-arrange-bottom', KobwebComposeStyleSheet$initCol$lambda_2);
    $this.invoke_17x10s_k$('.kobweb-col.kobweb-arrange-space-evenly', KobwebComposeStyleSheet$initCol$lambda_3);
    $this.invoke_17x10s_k$('.kobweb-col.kobweb-arrange-space-between', KobwebComposeStyleSheet$initCol$lambda_4);
    $this.invoke_17x10s_k$('.kobweb-col.kobweb-arrange-space-around', KobwebComposeStyleSheet$initCol$lambda_5);
    $this.invoke_17x10s_k$('.kobweb-col.kobweb-align-start', KobwebComposeStyleSheet$initCol$lambda_6);
    $this.invoke_17x10s_k$('.kobweb-col.kobweb-align-center-horiz', KobwebComposeStyleSheet$initCol$lambda_7);
    $this.invoke_17x10s_k$('.kobweb-col.kobweb-align-end', KobwebComposeStyleSheet$initCol$lambda_8);
    $this.invoke_17x10s_k$('.kobweb-col > .kobweb-align-start-self', KobwebComposeStyleSheet$initCol$lambda_9);
    $this.invoke_17x10s_k$('.kobweb-col > .kobweb-align-center-horiz-self', KobwebComposeStyleSheet$initCol$lambda_10);
    $this.invoke_17x10s_k$('.kobweb-col > .kobweb-align-end-self', KobwebComposeStyleSheet$initCol$lambda_11);
  }
  function initSpacer($this) {
    $this.invoke_17x10s_k$('.kobweb-spacer', KobwebComposeStyleSheet$initSpacer$lambda);
  }
  function KobwebComposeStyleSheet$initBox$lambda($this$invoke) {
    grid($this$invoke, KobwebComposeStyleSheet$initBox$lambda$lambda);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda$lambda($this$grid) {
    $this$grid.columns_o4h109_k$(KobwebComposeStyleSheet$initBox$lambda$lambda$lambda);
    $this$grid.rows_c0wtyb_k$(KobwebComposeStyleSheet$initBox$lambda$lambda$lambda_0);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda$lambda$lambda($this$columns) {
    $this$columns.minmax_1ha38s_k$(get_px(0), get_fr(1));
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda$lambda$lambda_0($this$rows) {
    $this$rows.minmax_1ha38s_k$(get_px(0), get_fr(1));
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_0($this$invoke) {
    gridArea($this$invoke, '1', '1');
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_1($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'start');
    justifyItems($this$invoke, Companion_getInstance_1().get_Start_ih4i6x_k$());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_2($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'start');
    justifyItems($this$invoke, Companion_getInstance_1().get_Center_3arb0i_k$());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_3($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'start');
    justifyItems($this$invoke, Companion_getInstance_1().get_End_18ju7i_k$());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_4($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'center');
    justifyItems($this$invoke, Companion_getInstance_1().get_Start_ih4i6x_k$());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_5($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'center');
    justifyItems($this$invoke, Companion_getInstance_1().get_Center_3arb0i_k$());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_6($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'center');
    justifyItems($this$invoke, Companion_getInstance_1().get_End_18ju7i_k$());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_7($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'end');
    justifyItems($this$invoke, Companion_getInstance_1().get_Start_ih4i6x_k$());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_8($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'end');
    justifyItems($this$invoke, Companion_getInstance_1().get_Center_3arb0i_k$());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_9($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'end');
    justifyItems($this$invoke, Companion_getInstance_1().get_End_18ju7i_k$());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_10($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'start');
    justifySelf($this$invoke, Companion_getInstance_3().get_Start_ih4i6x_k$());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_11($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'start');
    justifySelf($this$invoke, Companion_getInstance_3().get_Center_3arb0i_k$());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_12($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'start');
    justifySelf($this$invoke, Companion_getInstance_3().get_End_18ju7i_k$());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_13($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'center');
    justifySelf($this$invoke, Companion_getInstance_3().get_Start_ih4i6x_k$());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_14($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'center');
    justifySelf($this$invoke, Companion_getInstance_3().get_Center_3arb0i_k$());
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_15($this$invoke) {
    justifySelf($this$invoke, Companion_getInstance_3().get_End_18ju7i_k$());
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'center');
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_16($this$invoke) {
    justifySelf($this$invoke, Companion_getInstance_3().get_Start_ih4i6x_k$());
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'end');
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_17($this$invoke) {
    justifySelf($this$invoke, Companion_getInstance_3().get_Center_3arb0i_k$());
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'end');
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initBox$lambda_18($this$invoke) {
    justifySelf($this$invoke, Companion_getInstance_3().get_End_18ju7i_k$());
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'end');
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initRow$lambda($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    Companion_getInstance_4();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$invoke, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Row' call
    Companion_getInstance_5();
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$invoke, 'row');
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initRow$lambda_0($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    Companion_getInstance_6();
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-start';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initRow$lambda_1($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_6();
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    justifyContent($this$invoke, 'center');
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initRow$lambda_2($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    Companion_getInstance_6();
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-end';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initRow$lambda_3($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceEvenly' call
    Companion_getInstance_6();
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'space-evenly';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initRow$lambda_4($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceBetween' call
    Companion_getInstance_6();
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'space-between';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initRow$lambda_5($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceAround' call
    Companion_getInstance_6();
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'space-around';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initRow$lambda_6($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-start';
    alignItems($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initRow$lambda_7($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'center');
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initRow$lambda_8($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-end';
    alignItems($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initRow$lambda_9($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-start';
    alignSelf($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initRow$lambda_10($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'center');
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initRow$lambda_11($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-end';
    alignSelf($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initCol$lambda($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    Companion_getInstance_4();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$invoke, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    Companion_getInstance_5();
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$invoke, 'column');
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initCol$lambda_0($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    Companion_getInstance_6();
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-start';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initCol$lambda_1($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_6();
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    justifyContent($this$invoke, 'center');
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initCol$lambda_2($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    Companion_getInstance_6();
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-end';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initCol$lambda_3($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceEvenly' call
    Companion_getInstance_6();
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'space-evenly';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initCol$lambda_4($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceBetween' call
    Companion_getInstance_6();
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'space-between';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initCol$lambda_5($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceAround' call
    Companion_getInstance_6();
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'space-around';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initCol$lambda_6($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-start';
    alignItems($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initCol$lambda_7($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'center');
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initCol$lambda_8($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-end';
    alignItems($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initCol$lambda_9($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-start';
    alignSelf($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initCol$lambda_10($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'center');
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initCol$lambda_11($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-end';
    alignSelf($this$invoke, tmp$ret$3);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet$initSpacer$lambda($this$invoke) {
    flexGrow($this$invoke, 1);
    return Unit_getInstance();
  }
  function KobwebComposeStyleSheet() {
    KobwebComposeStyleSheet_instance = this;
    StyleSheet_init_$Init$(VOID, VOID, this);
    initBox(this);
    initCol(this);
    initRow(this);
    initSpacer(this);
  }
  protoOf(KobwebComposeStyleSheet).style_r4zx12_k$ = function (selector, cssRule) {
    return this.style_pgxmpo_k$(selector, cssRule);
  };
  var KobwebComposeStyleSheet_instance;
  function KobwebComposeStyleSheet_getInstance() {
    if (KobwebComposeStyleSheet_instance == null)
      new KobwebComposeStyleSheet();
    return KobwebComposeStyleSheet_instance;
  }
  var com_varabyte_kobweb_compose_style_KobwebComposeStyleSheet$stable;
  function Vertical_0() {
  }
  function Horizontal_0() {
  }
  function TopStart() {
    TopStart_instance = this;
  }
  var TopStart_instance;
  function TopStart_getInstance() {
    if (TopStart_instance == null)
      new TopStart();
    return TopStart_instance;
  }
  function TopCenter() {
    TopCenter_instance = this;
  }
  var TopCenter_instance;
  function TopCenter_getInstance() {
    if (TopCenter_instance == null)
      new TopCenter();
    return TopCenter_instance;
  }
  function TopEnd() {
    TopEnd_instance = this;
  }
  var TopEnd_instance;
  function TopEnd_getInstance() {
    if (TopEnd_instance == null)
      new TopEnd();
    return TopEnd_instance;
  }
  function CenterStart() {
    CenterStart_instance = this;
  }
  var CenterStart_instance;
  function CenterStart_getInstance() {
    if (CenterStart_instance == null)
      new CenterStart();
    return CenterStart_instance;
  }
  function Center_0() {
    Center_instance_0 = this;
  }
  var Center_instance_0;
  function Center_getInstance_0() {
    if (Center_instance_0 == null)
      new Center_0();
    return Center_instance_0;
  }
  function CenterEnd() {
    CenterEnd_instance = this;
  }
  var CenterEnd_instance;
  function CenterEnd_getInstance() {
    if (CenterEnd_instance == null)
      new CenterEnd();
    return CenterEnd_instance;
  }
  function BottomStart() {
    BottomStart_instance = this;
  }
  var BottomStart_instance;
  function BottomStart_getInstance() {
    if (BottomStart_instance == null)
      new BottomStart();
    return BottomStart_instance;
  }
  function BottomCenter() {
    BottomCenter_instance = this;
  }
  var BottomCenter_instance;
  function BottomCenter_getInstance() {
    if (BottomCenter_instance == null)
      new BottomCenter();
    return BottomCenter_instance;
  }
  function BottomEnd() {
    BottomEnd_instance = this;
  }
  var BottomEnd_instance;
  function BottomEnd_getInstance() {
    if (BottomEnd_instance == null)
      new BottomEnd();
    return BottomEnd_instance;
  }
  function Top_0() {
    Top_instance_0 = this;
  }
  var Top_instance_0;
  function Top_getInstance_0() {
    if (Top_instance_0 == null)
      new Top_0();
    return Top_instance_0;
  }
  function CenterVertically() {
    CenterVertically_instance = this;
  }
  var CenterVertically_instance;
  function CenterVertically_getInstance() {
    if (CenterVertically_instance == null)
      new CenterVertically();
    return CenterVertically_instance;
  }
  function Bottom_0() {
    Bottom_instance_0 = this;
  }
  var Bottom_instance_0;
  function Bottom_getInstance_0() {
    if (Bottom_instance_0 == null)
      new Bottom_0();
    return Bottom_instance_0;
  }
  function Start_0() {
    Start_instance_0 = this;
  }
  var Start_instance_0;
  function Start_getInstance_0() {
    if (Start_instance_0 == null)
      new Start_0();
    return Start_instance_0;
  }
  function CenterHorizontally() {
    CenterHorizontally_instance = this;
  }
  var CenterHorizontally_instance;
  function CenterHorizontally_getInstance() {
    if (CenterHorizontally_instance == null)
      new CenterHorizontally();
    return CenterHorizontally_instance;
  }
  function End_0() {
    End_instance_0 = this;
  }
  var End_instance_0;
  function End_getInstance_0() {
    if (End_instance_0 == null)
      new End_0();
    return End_instance_0;
  }
  function FromStyle_0() {
    FromStyle_instance_0 = this;
  }
  var FromStyle_instance_0;
  function FromStyle_getInstance_0() {
    if (FromStyle_instance_0 == null)
      new FromStyle_0();
    return FromStyle_instance_0;
  }
  function Alignment() {
  }
  var com_varabyte_kobweb_compose_ui_Alignment_Start$stable;
  var com_varabyte_kobweb_compose_ui_Alignment_CenterHorizontally$stable;
  var com_varabyte_kobweb_compose_ui_Alignment_Center$stable;
  var com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stable;
  var com_varabyte_kobweb_compose_ui_Alignment_End$stable;
  function Element() {
  }
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).fold_esqsf3_k$ = function (initial, operation) {
    return initial;
  };
  protoOf(Companion).then_mmfvo6_k$ = function (other) {
    return other;
  };
  var Companion_instance;
  function Companion_getInstance_8() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Modifier() {
  }
  function thenIf(_this__u8e3s4, condition, other) {
    // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
    var tmp;
    if (condition) {
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf.<anonymous>' call
      tmp = other;
    } else {
      tmp = Companion_getInstance_8();
    }
    return _this__u8e3s4.then_mmfvo6_k$(tmp);
  }
  function thenIf_0(_this__u8e3s4, condition, lazyProduce) {
    return _this__u8e3s4.then_mmfvo6_k$(condition ? lazyProduce() : Companion_getInstance_8());
  }
  function _get_current__qcrdxk($this) {
    return $this.current_1;
  }
  function _get_next__daux88($this) {
    return $this.next_1;
  }
  function ChainedModifier(current, next) {
    this.current_1 = current;
    this.next_1 = next;
  }
  protoOf(ChainedModifier).fold_esqsf3_k$ = function (initial, operation) {
    return this.next_1.fold_esqsf3_k$(this.current_1.fold_esqsf3_k$(initial, operation), operation);
  };
  protoOf(ChainedModifier).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof ChainedModifier) {
      tmp_0 = equals(this.current_1, other.current_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.next_1, other.next_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ChainedModifier).hashCode = function () {
    return hashCode(this.current_1) + imul(31, hashCode(this.next_1)) | 0;
  };
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
    return _this__u8e3s4.then_mmfvo6_k$(new StyleModifier(styles));
  }
  function AttrsModifier(attrs) {
    this.attrs_1 = attrs;
  }
  protoOf(AttrsModifier).get_attrs_iou0l5_k$ = function () {
    return this.attrs_1;
  };
  protoOf(AttrsModifier).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AttrsModifier))
      return false;
    var attrsResolved = ComparableAttrsScope_init_$Create$();
    this.attrs_1(attrsResolved);
    var otherAttrsResolved = ComparableAttrsScope_init_$Create$();
    other.attrs_1(otherAttrsResolved);
    return attrsResolved.equals(otherAttrsResolved);
  };
  protoOf(AttrsModifier).hashCode = function () {
    var attrsResolved = ComparableAttrsScope_init_$Create$();
    this.attrs_1(attrsResolved);
    return attrsResolved.hashCode();
  };
  function StyleModifier(styles) {
    this.styles_1 = styles;
  }
  protoOf(StyleModifier).get_styles_jnubqj_k$ = function () {
    return this.styles_1;
  };
  protoOf(StyleModifier).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleModifier))
      return false;
    var stylesResolved = new ComparableStyleScope();
    this.styles_1(stylesResolved);
    var otherStylesResolved = new ComparableStyleScope();
    other.styles_1(otherStylesResolved);
    return stylesResolved.equals(otherStylesResolved);
  };
  protoOf(StyleModifier).hashCode = function () {
    var stylesResolved = new ComparableStyleScope();
    this.styles_1(stylesResolved);
    return stylesResolved.hashCode();
  };
  function WebModifier() {
  }
  function attrsModifier(_this__u8e3s4, attrs) {
    return _this__u8e3s4.then_mmfvo6_k$(new AttrsModifier(attrs));
  }
  function toAttrs$lambda$lambda$lambda($element) {
    return function ($this$style) {
      $element.styles_1($this$style);
      return Unit_getInstance();
    };
  }
  function toAttrs$lambda$lambda($this_null) {
    return function (_anonymous_parameter_0__qggqh8, element) {
      var tmp;
      if (element instanceof AttrsModifier) {
        tmp = element.attrs_1($this_null);
      } else {
        if (element instanceof StyleModifier) {
          $this_null.style_xwwy6r_k$(toAttrs$lambda$lambda$lambda(element));
          tmp = Unit_getInstance();
        }
      }
      return Unit_getInstance();
    };
  }
  function toAttrs$lambda($firstModifier, $finalHandler) {
    return function ($this$null) {
      $firstModifier.fold_esqsf3_k$(Unit_getInstance(), toAttrs$lambda$lambda($this$null));
      var tmp0_safe_receiver = $finalHandler;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver($this$null);
      return Unit_getInstance();
    };
  }
  function toStyles$lambda$lambda($this_null) {
    return function (_anonymous_parameter_0__qggqh8, element) {
      var tmp;
      if (element instanceof StyleModifier) {
        tmp = element.styles_1($this_null);
      }
      return Unit_getInstance();
    };
  }
  function toStyles$lambda($firstModifier, $finalHandler) {
    return function ($this$null) {
      $firstModifier.fold_esqsf3_k$(Unit_getInstance(), toStyles$lambda$lambda($this$null));
      var tmp0_safe_receiver = $finalHandler;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver($this$null);
      return Unit_getInstance();
    };
  }
  function toInRangeInt(_this__u8e3s4, $this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(new Long(0, -1)).and_4spn93_k$(_this__u8e3s4).equals(new Long(0, 0))) {
      // Inline function 'com.varabyte.kobweb.compose.ui.graphics.Companion.toInRangeInt.<anonymous>' call
      // Inline function 'kotlin.text.uppercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var message = 'Got an invalid hex color (0x' + toString(_this__u8e3s4, 16).toUpperCase() + ') value larger than 0xFFFFFFFF';
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    return _this__u8e3s4.toInt_1tsl84_k$();
  }
  function Rgb(value) {
    this.value_1 = value;
  }
  protoOf(Rgb).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(Rgb).get_red_18ix20_k$ = function () {
    return this.value_1 >> 16 & 255;
  };
  protoOf(Rgb).get_green_is36qi_k$ = function () {
    return this.value_1 >> 8 & 255;
  };
  protoOf(Rgb).get_blue_wojj4z_k$ = function () {
    return this.value_1 >> 0 & 255;
  };
  protoOf(Rgb).get_alpha_iooth1_k$ = function () {
    return this.value_1 >> 24 & 255;
  };
  protoOf(Rgb).get_redf_wotlby_k$ = function () {
    return toColorFloat(this.get_red_18ix20_k$());
  };
  protoOf(Rgb).get_greenf_dxud3g_k$ = function () {
    return toColorFloat(this.get_green_is36qi_k$());
  };
  protoOf(Rgb).get_bluef_ip8ppf_k$ = function () {
    return toColorFloat(this.get_blue_wojj4z_k$());
  };
  protoOf(Rgb).get_alphaf_b0gxxt_k$ = function () {
    return toColorFloat(this.get_alpha_iooth1_k$());
  };
  protoOf(Rgb).inverted_adp911_k$ = function () {
    return Companion_getInstance_9().rgba_3xu3m4_k$(255 - this.get_red_18ix20_k$() | 0, 255 - this.get_green_is36qi_k$() | 0, 255 - this.get_blue_wojj4z_k$() | 0, this.get_alpha_iooth1_k$());
  };
  protoOf(Rgb).darkened_iwrtmu_k$ = function (byPercent) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0.0 <= byPercent ? byPercent <= 1.0 : false)) {
      // Inline function 'com.varabyte.kobweb.compose.ui.graphics.Rgb.darkened.<anonymous>' call
      var message = 'Invalid color shifting percent. Expected between 0 and 1, got ' + byPercent;
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    if (byPercent === 0.0)
      return this;
    var darkeningMultiplier = 1.0 - byPercent;
    return Companion_getInstance_9().rgba_bap9l8_k$(this.get_redf_wotlby_k$() * darkeningMultiplier, this.get_greenf_dxud3g_k$() * darkeningMultiplier, this.get_bluef_ip8ppf_k$() * darkeningMultiplier, this.get_alphaf_b0gxxt_k$());
  };
  protoOf(Rgb).copy_my5h57_k$ = function (red, green, blue, alpha) {
    return Companion_getInstance_9().rgba_3xu3m4_k$(red, green, blue, alpha);
  };
  protoOf(Rgb).copy$default_mtju0j_k$ = function (red, green, blue, alpha, $super) {
    red = red === VOID ? this.get_red_18ix20_k$() : red;
    green = green === VOID ? this.get_green_is36qi_k$() : green;
    blue = blue === VOID ? this.get_blue_wojj4z_k$() : blue;
    alpha = alpha === VOID ? this.get_alpha_iooth1_k$() : alpha;
    return $super === VOID ? this.copy_my5h57_k$(red, green, blue, alpha) : $super.copy_my5h57_k$.call(this, red, green, blue, alpha);
  };
  protoOf(Rgb).copyf_olenlb_k$ = function (red, green, blue, alpha) {
    return Companion_getInstance_9().rgba_bap9l8_k$(red, green, blue, alpha);
  };
  protoOf(Rgb).copyf$default_6pu18v_k$ = function (red, green, blue, alpha, $super) {
    red = red === VOID ? this.get_redf_wotlby_k$() : red;
    green = green === VOID ? this.get_greenf_dxud3g_k$() : green;
    blue = blue === VOID ? this.get_bluef_ip8ppf_k$() : blue;
    alpha = alpha === VOID ? this.get_alphaf_b0gxxt_k$() : alpha;
    return $super === VOID ? this.copyf_olenlb_k$(red, green, blue, alpha) : $super.copyf_olenlb_k$.call(this, red, green, blue, alpha);
  };
  protoOf(Rgb).toRgb_1tsrpu_k$ = function () {
    return this;
  };
  protoOf(Rgb).toHsl_1tskli_k$ = function () {
    // Inline function 'kotlin.comparisons.maxOf' call
    var a = this.get_redf_wotlby_k$();
    var b = this.get_greenf_dxud3g_k$();
    var c = this.get_bluef_ip8ppf_k$();
    var chromaMax = Math.max(a, b, c);
    // Inline function 'kotlin.comparisons.minOf' call
    var a_0 = this.get_redf_wotlby_k$();
    var b_0 = this.get_greenf_dxud3g_k$();
    var c_0 = this.get_bluef_ip8ppf_k$();
    var chromaMin = Math.min(a_0, b_0, c_0);
    var chromaDelta = chromaMax - chromaMin;
    var lightness = (chromaMin + chromaMax) / 2.0;
    // Inline function 'kotlin.math.abs' call
    var x = 2.0 * lightness - 1.0;
    var saturation = chromaDelta / (1.0 - Math.abs(x));
    var tmp;
    if (chromaDelta === 0.0) {
      tmp = 0.0;
    } else {
      var tmp_0;
      if (chromaMax === this.get_redf_wotlby_k$()) {
        tmp_0 = (this.get_greenf_dxud3g_k$() - this.get_bluef_ip8ppf_k$()) / chromaDelta % 6;
      } else if (chromaMax === this.get_greenf_dxud3g_k$()) {
        tmp_0 = (this.get_bluef_ip8ppf_k$() - this.get_redf_wotlby_k$()) / chromaDelta + 2.0;
      } else if (chromaMax === this.get_bluef_ip8ppf_k$()) {
        tmp_0 = (this.get_redf_wotlby_k$() - this.get_greenf_dxud3g_k$()) / chromaDelta + 4.0;
      } else {
        var message = 'Unexpected chromaMax value ' + chromaMax;
        throw IllegalStateException_init_$Create$(toString_0(message));
      }
      tmp = 60.0 * tmp_0;
    }
    var hue = tmp;
    return Companion_getInstance_9().hsla_rzsfr4_k$(hue, saturation, lightness, this.get_alphaf_b0gxxt_k$());
  };
  protoOf(Rgb).toString = function () {
    return this.get_alpha_iooth1_k$() === 255 ? 'rgb(' + this.get_red_18ix20_k$() + ', ' + this.get_green_is36qi_k$() + ', ' + this.get_blue_wojj4z_k$() + ')' : 'rgba(' + this.get_red_18ix20_k$() + ', ' + this.get_green_is36qi_k$() + ', ' + this.get_blue_wojj4z_k$() + ', ' + this.get_alphaf_b0gxxt_k$() + ')';
  };
  protoOf(Rgb).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof Rgb) {
      tmp_2 = this.get_red_18ix20_k$() === other.get_red_18ix20_k$();
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.get_green_is36qi_k$() === other.get_green_is36qi_k$();
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.get_blue_wojj4z_k$() === other.get_blue_wojj4z_k$();
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.get_alpha_iooth1_k$() === other.get_alpha_iooth1_k$();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Rgb).hashCode = function () {
    var result = this.get_red_18ix20_k$();
    result = imul(31, result) + this.get_green_is36qi_k$() | 0;
    result = imul(31, result) + this.get_blue_wojj4z_k$() | 0;
    result = imul(31, result) + this.get_alpha_iooth1_k$() | 0;
    return result;
  };
  function Hsl(hue, saturation, lightness, alpha) {
    this.hue_1 = hue;
    this.saturation_1 = saturation;
    this.lightness_1 = lightness;
    this.alpha_1 = alpha;
  }
  protoOf(Hsl).get_hue_18j435_k$ = function () {
    return this.hue_1;
  };
  protoOf(Hsl).get_saturation_nzhaqt_k$ = function () {
    return this.saturation_1;
  };
  protoOf(Hsl).get_lightness_jv7mx0_k$ = function () {
    return this.lightness_1;
  };
  protoOf(Hsl).get_alpha_iooth1_k$ = function () {
    return this.alpha_1;
  };
  protoOf(Hsl).inverted_adp911_k$ = function () {
    return this.toRgb_1tsrpu_k$().inverted_adp911_k$();
  };
  protoOf(Hsl).darkened_iwrtmu_k$ = function (byPercent) {
    return this.toRgb_1tsrpu_k$().darkened_iwrtmu_k$(byPercent);
  };
  protoOf(Hsl).copy_egrqb9_k$ = function (hue, saturation, lightness, alpha) {
    return Companion_getInstance_9().hsla_rzsfr4_k$(hue, saturation, lightness, alpha);
  };
  protoOf(Hsl).copy$default_vnqijd_k$ = function (hue, saturation, lightness, alpha, $super) {
    hue = hue === VOID ? this.hue_1 : hue;
    saturation = saturation === VOID ? this.saturation_1 : saturation;
    lightness = lightness === VOID ? this.lightness_1 : lightness;
    alpha = alpha === VOID ? this.alpha_1 : alpha;
    return $super === VOID ? this.copy_egrqb9_k$(hue, saturation, lightness, alpha) : $super.copy_egrqb9_k$.call(this, hue, saturation, lightness, alpha);
  };
  protoOf(Hsl).toRgb_1tsrpu_k$ = function () {
    // Inline function 'kotlin.math.abs' call
    var x = 2 * this.lightness_1 - 1;
    var chroma = (1 - Math.abs(x)) * this.saturation_1;
    // Inline function 'kotlin.math.abs' call
    var x_0 = this.hue_1 / 60 % 2 - 1;
    var intermediateValue = chroma * (1 - Math.abs(x_0));
    var hueSection = (numberToInt(this.hue_1) % 360 | 0) / 60 | 0;
    var r;
    var g;
    var b;
    switch (hueSection) {
      case 0:
        r = chroma;
        g = intermediateValue;
        b = 0.0;
        break;
      case 1:
        r = intermediateValue;
        g = chroma;
        b = 0.0;
        break;
      case 2:
        r = 0.0;
        g = chroma;
        b = intermediateValue;
        break;
      case 3:
        r = 0.0;
        g = intermediateValue;
        b = chroma;
        break;
      case 4:
        r = intermediateValue;
        g = 0.0;
        b = chroma;
        break;
      default:
        // Inline function 'kotlin.check' call

        // Inline function 'kotlin.contracts.contract' call

        // Inline function 'kotlin.check' call

        // Inline function 'kotlin.contracts.contract' call

        if (!(hueSection === 5)) {
          // Inline function 'kotlin.check.<anonymous>' call
          var message = 'Check failed.';
          throw IllegalStateException_init_$Create$(toString_0(message));
        }

        r = chroma;
        g = 0.0;
        b = intermediateValue;
        break;
    }
    var lightnessAdjustment = this.lightness_1 - chroma / 2;
    return Companion_getInstance_9().rgba_bap9l8_k$(r + lightnessAdjustment, g + lightnessAdjustment, b + lightnessAdjustment, this.alpha_1);
  };
  protoOf(Hsl).toHsl_1tskli_k$ = function () {
    return this;
  };
  protoOf(Hsl).toString = function () {
    // Inline function 'kotlin.math.roundToInt' call
    var this_0 = this.hue_1 * 10;
    var hueRounded = roundToInt(this_0) / 10.0;
    // Inline function 'kotlin.math.roundToInt' call
    var this_1 = this.saturation_1 * 1000;
    var saturationPercent = roundToInt(this_1) / 10.0;
    // Inline function 'kotlin.math.roundToInt' call
    var this_2 = this.lightness_1 * 1000;
    var lightnessPercent = roundToInt(this_2) / 10.0;
    return this.alpha_1 === 1.0 ? 'hsl(' + hueRounded + ', ' + saturationPercent + '%, ' + lightnessPercent + '%)' : 'hsla(' + hueRounded + ', ' + saturationPercent + '%, ' + lightnessPercent + '%, ' + this.alpha_1 + ')';
  };
  protoOf(Hsl).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof Hsl) {
      tmp_2 = this.hue_1 === other.hue_1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.saturation_1 === other.saturation_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.lightness_1 === other.lightness_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.alpha_1 === other.alpha_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Hsl).hashCode = function () {
    var result = getNumberHashCode(this.hue_1);
    result = imul(31, result) + getNumberHashCode(this.saturation_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.lightness_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.alpha_1) | 0;
    return result;
  };
  function Companion_0() {
    Companion_instance_0 = this;
    this.DEFAULT_SHIFTING_PERCENT_1 = 0.3;
  }
  protoOf(Companion_0).get_DEFAULT_SHIFTING_PERCENT_bgdcr7_k$ = function () {
    return this.DEFAULT_SHIFTING_PERCENT_1;
  };
  protoOf(Companion_0).rgb_6orfmz_k$ = function (value) {
    return new Rgb(-16777216 | value);
  };
  protoOf(Companion_0).argb_u8nll8_k$ = function (value) {
    return new Rgb(value);
  };
  protoOf(Companion_0).argb_v9u7oe_k$ = function (value) {
    return this.argb_u8nll8_k$(toInRangeInt(value, this));
  };
  protoOf(Companion_0).rgba_idjuxo_k$ = function (value) {
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.ui.graphics.Companion.rgba.<anonymous>' call
    var alpha = (value & 255) << 24;
    var rgb = value >> 8;
    return this.argb_u8nll8_k$(alpha | rgb);
  };
  protoOf(Companion_0).rgba_dqu85i_k$ = function (value) {
    return this.rgba_idjuxo_k$(toInRangeInt(value, this));
  };
  protoOf(Companion_0).rgb_udwlgr_k$ = function (r, g, b) {
    return this.rgba_3xu3m4_k$(r, g, b, 255);
  };
  protoOf(Companion_0).rgba_3xu3m4_k$ = function (r, g, b, a) {
    return new Rgb((r & 255) << 16 | (g & 255) << 8 | (b & 255) << 0 | (a & 255) << 24);
  };
  protoOf(Companion_0).argb_bgl9sc_k$ = function (a, r, g, b) {
    return this.rgba_3xu3m4_k$(r, g, b, a);
  };
  protoOf(Companion_0).rgb_o6n8ln_k$ = function (r, g, b) {
    return this.rgb_udwlgr_k$(toColorInt(r), toColorInt(g), toColorInt(b));
  };
  protoOf(Companion_0).rgba_bap9l8_k$ = function (r, g, b, a) {
    return this.rgba_3xu3m4_k$(toColorInt(r), toColorInt(g), toColorInt(b), toColorInt(a));
  };
  protoOf(Companion_0).argb_eb1cjw_k$ = function (a, r, g, b) {
    return this.rgba_bap9l8_k$(r, g, b, a);
  };
  protoOf(Companion_0).rgba_vsmmr0_k$ = function (r, g, b, a) {
    return this.rgba_3xu3m4_k$(r, g, b, toColorInt(a));
  };
  protoOf(Companion_0).argb_g07r6c_k$ = function (a, r, g, b) {
    return this.rgba_vsmmr0_k$(r, g, b, a);
  };
  protoOf(Companion_0).hsl_jlm5zd_k$ = function (h, s, l) {
    return this.hsl_ppe4lz_k$(h, s, l);
  };
  protoOf(Companion_0).hsla_nhswtc_k$ = function (h, s, l, a) {
    return this.hsla_rzsfr4_k$(h, s, l, a);
  };
  protoOf(Companion_0).hsl_ppe4lz_k$ = function (h, s, l) {
    return new Hsl(h, s, l, 1.0);
  };
  protoOf(Companion_0).hsla_rzsfr4_k$ = function (h, s, l, a) {
    return new Hsl(h, s, l, a);
  };
  protoOf(Companion_0).rgb_fpbdrf_k$ = function (r, g, b) {
    return this.rgba_68523u_k$(r, g, b, 1.0);
  };
  protoOf(Companion_0).rgba_sw8yb8_k$ = function (r, g, b, a) {
    return this.rgba_bap9l8_k$(r.value / 100.0, g.value / 100.0, b.value / 100.0, a.value / 100.0);
  };
  protoOf(Companion_0).rgba_68523u_k$ = function (r, g, b, a) {
    return this.rgba_bap9l8_k$(r.value / 100.0, g.value / 100.0, b.value / 100.0, a);
  };
  protoOf(Companion_0).argb_3qzbuc_k$ = function (a, r, g, b) {
    return this.argb_eb1cjw_k$(a.value / 100.0, r.value / 100.0, g.value / 100.0, b.value / 100.0);
  };
  protoOf(Companion_0).argb_ekqalm_k$ = function (a, r, g, b) {
    return this.argb_eb1cjw_k$(a, r.value / 100.0, g.value / 100.0, b.value / 100.0);
  };
  protoOf(Companion_0).hsl_okaric_k$ = function (h, s, l) {
    return this.hsla_sg5wgt_k$(h, s, l, 1.0);
  };
  protoOf(Companion_0).hsla_sg5wgt_k$ = function (h, s, l, alpha) {
    return this.hsla_rzsfr4_k$(toDegrees(h), s.value / 100.0, l.value / 100.0, alpha);
  };
  protoOf(Companion_0).hsla_bcgopz_k$ = function (h, s, l, alpha) {
    return this.hsla_sg5wgt_k$(h, s, l, alpha.value / 100.0);
  };
  var Companion_instance_0;
  function Companion_getInstance_9() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Color_0() {
  }
  function Colors() {
    Colors_instance = this;
  }
  protoOf(Colors).get_Transparent_cxh4g9_k$ = function () {
    return Companion_getInstance_9().rgba_3xu3m4_k$(0, 0, 0, 0);
  };
  protoOf(Colors).get_AliceBlue_26ti33_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(240, 248, 255);
  };
  protoOf(Colors).get_AntiqueWhite_ftryr7_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(250, 235, 215);
  };
  protoOf(Colors).get_Aqua_wnyk9x_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(0, 255, 255);
  };
  protoOf(Colors).get_Aquamarine_wf4kkn_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(127, 255, 212);
  };
  protoOf(Colors).get_Azure_i7cg92_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(240, 255, 255);
  };
  protoOf(Colors).get_Beige_i7ikyj_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(245, 245, 220);
  };
  protoOf(Colors).get_Bisque_3pilya_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(255, 228, 196);
  };
  protoOf(Colors).get_Black_i7mvue_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(0, 0, 0);
  };
  protoOf(Colors).get_BlanchedAlmond_1qzwzr_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(255, 235, 205);
  };
  protoOf(Colors).get_Blue_wnz3k3_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(0, 0, 255);
  };
  protoOf(Colors).get_BlueViolet_dh8vfm_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(138, 43, 226);
  };
  protoOf(Colors).get_Brown_i7r0ml_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(165, 42, 42);
  };
  protoOf(Colors).get_BurlyWood_8ugz0w_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(222, 184, 135);
  };
  protoOf(Colors).get_CadetBlue_p1vowq_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(95, 158, 160);
  };
  protoOf(Colors).get_Chartreuse_sf60ap_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(127, 255, 0);
  };
  protoOf(Colors).get_Chocolate_hzt5e5_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(210, 105, 30);
  };
  protoOf(Colors).get_Coral_i88xyg_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(255, 127, 80);
  };
  protoOf(Colors).get_CornflowerBlue_r6uqqi_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(100, 149, 237);
  };
  protoOf(Colors).get_Cornsilk_wq0qna_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(255, 248, 220);
  };
  protoOf(Colors).get_Crimson_p5oht6_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(220, 20, 60);
  };
  protoOf(Colors).get_Cyan_wnzzpo_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(0, 255, 255);
  };
  protoOf(Colors).get_DarkBlue_1y795z_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(0, 0, 139);
  };
  protoOf(Colors).get_DarkCyan_1y6d0e_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(0, 139, 139);
  };
  protoOf(Colors).get_DarkGoldenRod_c3b5lt_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(184, 134, 11);
  };
  protoOf(Colors).get_DarkGray_1y3y8u_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(169, 169, 169);
  };
  protoOf(Colors).get_DarkGrey_1y3y5e_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(169, 169, 169);
  };
  protoOf(Colors).get_DarkGreen_anpmxw_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(0, 100, 0);
  };
  protoOf(Colors).get_DarkKhaki_apqcmb_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(189, 183, 107);
  };
  protoOf(Colors).get_DarkMagenta_njr8wa_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(139, 0, 139);
  };
  protoOf(Colors).get_DarkOliveGreen_81ck6f_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(85, 107, 47);
  };
  protoOf(Colors).get_DarkOrange_ky6wwj_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(255, 140, 0);
  };
  protoOf(Colors).get_DarkOrchid_ky5rby_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(153, 50, 204);
  };
  protoOf(Colors).get_DarkRed_ie5ln2_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(139, 0, 0);
  };
  protoOf(Colors).get_DarkSalmon_jb5x3n_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(233, 150, 122);
  };
  protoOf(Colors).get_DarkSeaGreen_yymm7n_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(143, 188, 143);
  };
  protoOf(Colors).get_DarkSlateBlue_s42xdg_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(72, 61, 139);
  };
  protoOf(Colors).get_DarkSlateGray_s468al_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(47, 79, 79);
  };
  protoOf(Colors).get_DarkSlateGrey_s468e1_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(47, 79, 79);
  };
  protoOf(Colors).get_DarkTurquoise_8s04jm_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(0, 206, 209);
  };
  protoOf(Colors).get_DarkViolet_hrkt6q_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(148, 0, 211);
  };
  protoOf(Colors).get_DeepPink_kcbez9_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(255, 20, 147);
  };
  protoOf(Colors).get_DeepSkyBlue_2ykmii_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(0, 191, 255);
  };
  protoOf(Colors).get_DimGray_ep5xby_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(105, 105, 105);
  };
  protoOf(Colors).get_DimGrey_ep5x8i_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(105, 105, 105);
  };
  protoOf(Colors).get_DodgerBlue_w4tkwu_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(30, 144, 255);
  };
  protoOf(Colors).get_FireBrick_yjvehq_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(178, 34, 34);
  };
  protoOf(Colors).get_FloralWhite_l3nfn0_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(255, 250, 240);
  };
  protoOf(Colors).get_ForestGreen_rtf599_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(34, 139, 34);
  };
  protoOf(Colors).get_Fuchsia_k799e6_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(255, 0, 255);
  };
  protoOf(Colors).get_Gainsboro_426zpx_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(220, 220, 220);
  };
  protoOf(Colors).get_GhostWhite_l7lzsz_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(248, 248, 255);
  };
  protoOf(Colors).get_Gold_wo2ci1_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(255, 215, 0);
  };
  protoOf(Colors).get_GoldenRod_khhved_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(218, 165, 32);
  };
  protoOf(Colors).get_Gray_wo2eh8_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(128, 128, 128);
  };
  protoOf(Colors).get_Grey_wo2eko_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(128, 128, 128);
  };
  protoOf(Colors).get_Green_iahrqy_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(0, 128, 0);
  };
  protoOf(Colors).get_GreenYellow_73rc9a_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(173, 255, 47);
  };
  protoOf(Colors).get_HoneyDew_wqvfes_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(240, 255, 240);
  };
  protoOf(Colors).get_HotPink_o2ezdy_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(255, 105, 180);
  };
  protoOf(Colors).get_IndianRed_tuu69d_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(205, 92, 92);
  };
  protoOf(Colors).get_Indigo_bq1ad_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(75, 0, 130);
  };
  protoOf(Colors).get_Ivory_ibo4m8_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(255, 255, 240);
  };
  protoOf(Colors).get_Khaki_icihfd_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(240, 230, 140);
  };
  protoOf(Colors).get_Lavender_hd40j4_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(230, 230, 250);
  };
  protoOf(Colors).get_LavenderBlush_p15ihc_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(255, 240, 245);
  };
  protoOf(Colors).get_LawnGreen_blu54i_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(124, 252, 0);
  };
  protoOf(Colors).get_LemonChiffon_t7hz2f_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(255, 250, 205);
  };
  protoOf(Colors).get_LightBlue_i1kdo9_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(173, 216, 230);
  };
  protoOf(Colors).get_LightCoral_8wyb8k_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(240, 128, 128);
  };
  protoOf(Colors).get_LightCyan_i1jhio_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(224, 255, 255);
  };
  protoOf(Colors).get_LightGoldenRodYellow_yxbqf9_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(250, 250, 210);
  };
  protoOf(Colors).get_LightGray_i1h2r4_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(211, 211, 211);
  };
  protoOf(Colors).get_LightGrey_i1h2no_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(211, 211, 211);
  };
  protoOf(Colors).get_LightGreen_8z7512_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(144, 238, 144);
  };
  protoOf(Colors).get_LightPink_i1bi8t_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(255, 182, 193);
  };
  protoOf(Colors).get_LightSalmon_dzaed_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(255, 160, 122);
  };
  protoOf(Colors).get_LightSeaGreen_yvslb5_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(32, 178, 170);
  };
  protoOf(Colors).get_LightSkyBlue_74jx4i_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(135, 206, 250);
  };
  protoOf(Colors).get_LightSlateGray_pobgb3_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(119, 136, 153);
  };
  protoOf(Colors).get_LightSlateGrey_pobgej_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(119, 136, 153);
  };
  protoOf(Colors).get_LightSteelBlue_nuj33s_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(176, 196, 222);
  };
  protoOf(Colors).get_LightYellow_2ihllt_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(255, 255, 224);
  };
  protoOf(Colors).get_Lime_wo5f0e_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(0, 255, 0);
  };
  protoOf(Colors).get_LimeGreen_33bue3_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(50, 205, 50);
  };
  protoOf(Colors).get_Linen_id36i9_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(250, 240, 230);
  };
  protoOf(Colors).get_Magenta_siy4ww_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(255, 0, 255);
  };
  protoOf(Colors).get_Maroon_1dk715_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(128, 0, 0);
  };
  protoOf(Colors).get_MediumAquaMarine_9nmz8c_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(102, 205, 170);
  };
  protoOf(Colors).get_MediumBlue_ghumeg_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(0, 0, 205);
  };
  protoOf(Colors).get_MediumOrchid_6dr9cv_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(186, 85, 211);
  };
  protoOf(Colors).get_MediumPurple_5usidi_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(147, 112, 219);
  };
  protoOf(Colors).get_MediumSeaGreen_uimfda_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(60, 179, 113);
  };
  protoOf(Colors).get_MediumSlateBlue_cvjwbv_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(123, 104, 238);
  };
  protoOf(Colors).get_MediumSpringGreen_68myrc_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(0, 250, 154);
  };
  protoOf(Colors).get_MediumTurquoise_w7mp5p_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(72, 209, 204);
  };
  protoOf(Colors).get_MediumVioletRed_cpazro_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(199, 21, 133);
  };
  protoOf(Colors).get_MidnightBlue_di5bxv_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(25, 25, 112);
  };
  protoOf(Colors).get_MintCream_b9kfih_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(245, 255, 250);
  };
  protoOf(Colors).get_MistyRose_83ke2m_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(255, 228, 225);
  };
  protoOf(Colors).get_Moccasin_tjrwhu_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(255, 228, 181);
  };
  protoOf(Colors).get_NavajoWhite_yqbnct_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(255, 222, 173);
  };
  protoOf(Colors).get_Navy_wo6ja7_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(0, 0, 128);
  };
  protoOf(Colors).get_OldLace_5z8ndh_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(253, 245, 230);
  };
  protoOf(Colors).get_Olive_iesdxu_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(128, 128, 0);
  };
  protoOf(Colors).get_OliveDrab_ei6q5d_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(107, 142, 35);
  };
  protoOf(Colors).get_Orange_2kp26v_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(255, 165, 0);
  };
  protoOf(Colors).get_OrangeRed_4r1q9y_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(255, 69, 0);
  };
  protoOf(Colors).get_Orchid_2kq7rg_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(218, 112, 214);
  };
  protoOf(Colors).get_PaleGoldenRod_ekls2d_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(238, 232, 170);
  };
  protoOf(Colors).get_PaleGreen_crlqds_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(152, 251, 152);
  };
  protoOf(Colors).get_PaleTurquoise_6api32_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(175, 238, 238);
  };
  protoOf(Colors).get_PaleVioletRed_jtguyp_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(219, 112, 147);
  };
  protoOf(Colors).get_PapayaWhip_vnp0lx_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(255, 239, 213);
  };
  protoOf(Colors).get_PeachPuff_bn3oi5_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(255, 218, 185);
  };
  protoOf(Colors).get_Peru_wo7w4h_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(205, 133, 63);
  };
  protoOf(Colors).get_Pink_wo7yzj_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(255, 192, 203);
  };
  protoOf(Colors).get_Plum_wo81dp_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(221, 160, 221);
  };
  protoOf(Colors).get_PowderBlue_ha8x0_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(176, 224, 230);
  };
  protoOf(Colors).get_Purple_33oyqt_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(128, 0, 128);
  };
  protoOf(Colors).get_RebeccaPurple_6mafj6_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(102, 51, 153);
  };
  protoOf(Colors).get_Red_18jks8_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(255, 0, 0);
  };
  protoOf(Colors).get_RosyBrown_gx67d6_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(188, 143, 143);
  };
  protoOf(Colors).get_RoyalBlue_n7lkjc_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(65, 105, 225);
  };
  protoOf(Colors).get_SaddleBrown_xa0bbu_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(139, 69, 19);
  };
  protoOf(Colors).get_Salmon_47q1zr_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(250, 128, 114);
  };
  protoOf(Colors).get_SandyBrown_fjstbe_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(244, 164, 96);
  };
  protoOf(Colors).get_SeaGreen_gor2g3_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(46, 139, 87);
  };
  protoOf(Colors).get_SeaShell_gibx12_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(255, 245, 238);
  };
  protoOf(Colors).get_Sienna_4bzyjf_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(160, 82, 45);
  };
  protoOf(Colors).get_Silver_4c4l6e_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(192, 192, 192);
  };
  protoOf(Colors).get_SkyBlue_6hycxa_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(135, 206, 235);
  };
  protoOf(Colors).get_SlateBlue_ac83li_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(106, 90, 205);
  };
  protoOf(Colors).get_SlateGray_ac4sod_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(112, 128, 144);
  };
  protoOf(Colors).get_SlateGrey_ac4skx_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(112, 128, 144);
  };
  protoOf(Colors).get_Snow_wo9zos_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(255, 250, 250);
  };
  protoOf(Colors).get_SpringGreen_t4r3al_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(0, 255, 127);
  };
  protoOf(Colors).get_SteelBlue_c5x5vo_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(70, 130, 180);
  };
  protoOf(Colors).get_Tan_18jje0_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(210, 180, 140);
  };
  protoOf(Colors).get_Teal_woafnp_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(0, 128, 128);
  };
  protoOf(Colors).get_Thistle_6jdsp2_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(216, 191, 216);
  };
  protoOf(Colors).get_Tomato_4wh6wj_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(255, 99, 71);
  };
  protoOf(Colors).get_Turquoise_toawfc_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(64, 224, 208);
  };
  protoOf(Colors).get_Violet_5rb5wo_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(238, 130, 238);
  };
  protoOf(Colors).get_Wheat_ij43a6_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(245, 222, 179);
  };
  protoOf(Colors).get_White_ij46ow_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(255, 255, 255);
  };
  protoOf(Colors).get_WhiteSmoke_gvtxtb_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(245, 245, 245);
  };
  protoOf(Colors).get_Yellow_746xzx_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(255, 255, 0);
  };
  protoOf(Colors).get_YellowGreen_wl0z8m_k$ = function () {
    return Companion_getInstance_9().rgb_udwlgr_k$(154, 205, 50);
  };
  var Colors_instance;
  function Colors_getInstance() {
    if (Colors_instance == null)
      new Colors();
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
    return _this__u8e3s4.inverted_adp911_k$().darkened_iwrtmu_k$(byPercent).inverted_adp911_k$();
  }
  function get_isBright(_this__u8e3s4) {
    return get_luminance(_this__u8e3s4) > 0.5;
  }
  function get_luminance(_this__u8e3s4) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.ui.graphics.<get-luminance>.<anonymous>' call
    var rgb = _this__u8e3s4.toRgb_1tsrpu_k$();
    return rgb.get_redf_wotlby_k$() * 0.299 + rgb.get_greenf_dxud3g_k$() * 0.587 + rgb.get_bluef_ip8ppf_k$() * 0.114;
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
      return Unit_getInstance();
    };
  }
  function ariaDisabled$lambda($value) {
    return function ($this$attrsModifier) {
      ariaDisabled($this$attrsModifier, $value);
      return Unit_getInstance();
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
      $this$attrsModifier.onAnimationEnd_l576ug_k$($listener);
      return Unit_getInstance();
    };
  }
  function animation$lambda($animations) {
    return function ($this$styleModifier) {
      animation($this$styleModifier, $animations.slice());
      return Unit_getInstance();
    };
  }
  function backgroundColor_0(_this__u8e3s4, color) {
    return styleModifier(_this__u8e3s4, backgroundColor$lambda(color));
  }
  function backgroundColor$lambda($color) {
    return function ($this$styleModifier) {
      backgroundColor($this$styleModifier, $color);
      return Unit_getInstance();
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
  function _get_styleScope__yp0uyw($this) {
    return $this.styleScope_1;
  }
  function BorderScope(styleScope) {
    this.styleScope_1 = styleScope;
  }
  protoOf(BorderScope).color_lesdgv_k$ = function (color) {
    return borderColor(this.styleScope_1, color);
  };
  protoOf(BorderScope).color_eijv83_k$ = function (topBottom, leftRight) {
    return borderColor_0(this.styleScope_1, topBottom, leftRight);
  };
  protoOf(BorderScope).color$default_qz2mky_k$ = function (topBottom, leftRight, $super) {
    var tmp;
    if (topBottom === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Color.currentColor' call
      Color_getInstance();
      tmp = Color('currentColor');
    } else {
      tmp = topBottom;
    }
    topBottom = tmp;
    var tmp_0;
    if (leftRight === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Color.currentColor' call
      Color_getInstance();
      tmp_0 = Color('currentColor');
    } else {
      tmp_0 = leftRight;
    }
    leftRight = tmp_0;
    var tmp_1;
    if ($super === VOID) {
      this.color_eijv83_k$(topBottom, leftRight);
      tmp_1 = Unit_getInstance();
    } else {
      tmp_1 = $super.color_eijv83_k$.call(this, topBottom, leftRight);
    }
    return tmp_1;
  };
  protoOf(BorderScope).color_9cb52n_k$ = function (top, leftRight, bottom) {
    return borderColor_1(this.styleScope_1, top, leftRight, bottom);
  };
  protoOf(BorderScope).color$default_v0tvx_k$ = function (top, leftRight, bottom, $super) {
    var tmp;
    if (top === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Color.currentColor' call
      Color_getInstance();
      tmp = Color('currentColor');
    } else {
      tmp = top;
    }
    top = tmp;
    var tmp_0;
    if (leftRight === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Color.currentColor' call
      Color_getInstance();
      tmp_0 = Color('currentColor');
    } else {
      tmp_0 = leftRight;
    }
    leftRight = tmp_0;
    var tmp_1;
    if (bottom === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Color.currentColor' call
      Color_getInstance();
      tmp_1 = Color('currentColor');
    } else {
      tmp_1 = bottom;
    }
    bottom = tmp_1;
    var tmp_2;
    if ($super === VOID) {
      this.color_9cb52n_k$(top, leftRight, bottom);
      tmp_2 = Unit_getInstance();
    } else {
      tmp_2 = $super.color_9cb52n_k$.call(this, top, leftRight, bottom);
    }
    return tmp_2;
  };
  protoOf(BorderScope).color_ypzt9p_k$ = function (top, right, bottom, left) {
    return borderColor_2(this.styleScope_1, top, right, bottom, left);
  };
  protoOf(BorderScope).color$default_69g248_k$ = function (top, right, bottom, left, $super) {
    var tmp;
    if (top === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Color.currentColor' call
      Color_getInstance();
      tmp = Color('currentColor');
    } else {
      tmp = top;
    }
    top = tmp;
    var tmp_0;
    if (right === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Color.currentColor' call
      Color_getInstance();
      tmp_0 = Color('currentColor');
    } else {
      tmp_0 = right;
    }
    right = tmp_0;
    var tmp_1;
    if (bottom === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Color.currentColor' call
      Color_getInstance();
      tmp_1 = Color('currentColor');
    } else {
      tmp_1 = bottom;
    }
    bottom = tmp_1;
    var tmp_2;
    if (left === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Color.currentColor' call
      Color_getInstance();
      tmp_2 = Color('currentColor');
    } else {
      tmp_2 = left;
    }
    left = tmp_2;
    var tmp_3;
    if ($super === VOID) {
      this.color_ypzt9p_k$(top, right, bottom, left);
      tmp_3 = Unit_getInstance();
    } else {
      tmp_3 = $super.color_ypzt9p_k$.call(this, top, right, bottom, left);
    }
    return tmp_3;
  };
  protoOf(BorderScope).style_o6ud9q_k$ = function (lineStyle) {
    return borderStyle(this.styleScope_1, lineStyle);
  };
  protoOf(BorderScope).style_r3r8sd_k$ = function (topBottom, leftRight) {
    return borderStyle_0(this.styleScope_1, topBottom, leftRight);
  };
  protoOf(BorderScope).style$default_fcu6ga_k$ = function (topBottom, leftRight, $super) {
    var tmp;
    if (topBottom === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
      Companion_getInstance_7();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = 'none';
    } else {
      tmp = topBottom;
    }
    topBottom = tmp;
    var tmp_0;
    if (leftRight === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
      Companion_getInstance_7();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_0 = 'none';
    } else {
      tmp_0 = leftRight;
    }
    leftRight = tmp_0;
    var tmp_1;
    if ($super === VOID) {
      this.style_r3r8sd_k$(topBottom, leftRight);
      tmp_1 = Unit_getInstance();
    } else {
      tmp_1 = $super.style_r3r8sd_k$.call(this, topBottom, leftRight);
    }
    return tmp_1;
  };
  protoOf(BorderScope).style_ql50i4_k$ = function (top, leftRight, bottom) {
    return borderStyle_1(this.styleScope_1, top, leftRight, bottom);
  };
  protoOf(BorderScope).style$default_e9aum4_k$ = function (top, leftRight, bottom, $super) {
    var tmp;
    if (top === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
      Companion_getInstance_7();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = 'none';
    } else {
      tmp = top;
    }
    top = tmp;
    var tmp_0;
    if (leftRight === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
      Companion_getInstance_7();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_0 = 'none';
    } else {
      tmp_0 = leftRight;
    }
    leftRight = tmp_0;
    var tmp_1;
    if (bottom === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
      Companion_getInstance_7();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_1 = 'none';
    } else {
      tmp_1 = bottom;
    }
    bottom = tmp_1;
    var tmp_2;
    if ($super === VOID) {
      this.style_ql50i4_k$(top, leftRight, bottom);
      tmp_2 = Unit_getInstance();
    } else {
      tmp_2 = $super.style_ql50i4_k$.call(this, top, leftRight, bottom);
    }
    return tmp_2;
  };
  protoOf(BorderScope).style_mhn8m3_k$ = function (top, right, bottom, left) {
    return borderStyle_2(this.styleScope_1, top, right, bottom, left);
  };
  protoOf(BorderScope).style$default_ue26p6_k$ = function (top, right, bottom, left, $super) {
    var tmp;
    if (top === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
      Companion_getInstance_7();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = 'none';
    } else {
      tmp = top;
    }
    top = tmp;
    var tmp_0;
    if (right === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
      Companion_getInstance_7();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_0 = 'none';
    } else {
      tmp_0 = right;
    }
    right = tmp_0;
    var tmp_1;
    if (bottom === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
      Companion_getInstance_7();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_1 = 'none';
    } else {
      tmp_1 = bottom;
    }
    bottom = tmp_1;
    var tmp_2;
    if (left === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
      Companion_getInstance_7();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_2 = 'none';
    } else {
      tmp_2 = left;
    }
    left = tmp_2;
    var tmp_3;
    if ($super === VOID) {
      this.style_mhn8m3_k$(top, right, bottom, left);
      tmp_3 = Unit_getInstance();
    } else {
      tmp_3 = $super.style_mhn8m3_k$.call(this, top, right, bottom, left);
    }
    return tmp_3;
  };
  protoOf(BorderScope).width_iqjg4l_k$ = function (width) {
    return borderWidth(this.styleScope_1, width);
  };
  protoOf(BorderScope).width_8c80ve_k$ = function (topBottom, leftRight) {
    return borderWidth_0(this.styleScope_1, topBottom, leftRight);
  };
  protoOf(BorderScope).width_jj1xyz_k$ = function (top, leftRight, bottom) {
    return borderWidth_1(this.styleScope_1, top, leftRight, bottom);
  };
  protoOf(BorderScope).width_ar2lo6_k$ = function (top, right, bottom, left) {
    return borderWidth_2(this.styleScope_1, top, right, bottom, left);
  };
  function borderRadius_2(_this__u8e3s4, r) {
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
  function borderRadius_3(_this__u8e3s4, topLeft, topRightAndBottomLeft, bottomRight) {
    topLeft = topLeft === VOID ? get_px(0) : topLeft;
    topRightAndBottomLeft = topRightAndBottomLeft === VOID ? get_px(0) : topRightAndBottomLeft;
    bottomRight = bottomRight === VOID ? get_px(0) : bottomRight;
    return styleModifier(_this__u8e3s4, borderRadius$lambda_0(topLeft, topRightAndBottomLeft, bottomRight));
  }
  function borderRadius_4(_this__u8e3s4, topLeft, topRight, bottomRight, bottomLeft) {
    topLeft = topLeft === VOID ? get_px(0) : topLeft;
    topRight = topRight === VOID ? get_px(0) : topRight;
    bottomRight = bottomRight === VOID ? get_px(0) : bottomRight;
    bottomLeft = bottomLeft === VOID ? get_px(0) : bottomLeft;
    return styleModifier(_this__u8e3s4, borderRadius$lambda_1(topLeft, topRight, bottomRight, bottomLeft));
  }
  function borderBottom$lambda($width, $style, $color) {
    return function ($this$styleModifier) {
      borderBottom($this$styleModifier, $width, $style, $color);
      return Unit_getInstance();
    };
  }
  function border$lambda($scope) {
    return function ($this$styleModifier) {
      // Inline function 'kotlin.apply' call
      var this_0 = new BorderScope($this$styleModifier);
      // Inline function 'kotlin.contracts.contract' call
      $scope(this_0);
      return Unit_getInstance();
    };
  }
  function borderRadius$lambda($r) {
    return function ($this$styleModifier) {
      borderRadius($this$styleModifier, $r);
      return Unit_getInstance();
    };
  }
  function border$lambda_0($width, $style, $color) {
    return function ($this$styleModifier) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = $width;
      border($this$styleModifier, tmp$ret$1, $style, $color);
      return Unit_getInstance();
    };
  }
  function borderTop$lambda($width, $style, $color) {
    return function ($this$styleModifier) {
      borderTop($this$styleModifier, $width, $style, $color);
      return Unit_getInstance();
    };
  }
  function borderLeft$lambda($width, $style, $color) {
    return function ($this$styleModifier) {
      borderLeft($this$styleModifier, $width, $style, $color);
      return Unit_getInstance();
    };
  }
  function borderRadius$lambda_0($topLeft, $topRightAndBottomLeft, $bottomRight) {
    return function ($this$styleModifier) {
      borderRadius_0($this$styleModifier, $topLeft, $topRightAndBottomLeft, $bottomRight);
      return Unit_getInstance();
    };
  }
  function borderRadius$lambda_1($topLeft, $topRight, $bottomRight, $bottomLeft) {
    return function ($this$styleModifier) {
      borderRadius_1($this$styleModifier, $topLeft, $topRight, $bottomRight, $bottomLeft);
      return Unit_getInstance();
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
      return Unit_getInstance();
    };
  }
  function boxSizing$lambda($boxSizing) {
    return function ($this$styleModifier) {
      boxSizing($this$styleModifier, $boxSizing);
      return Unit_getInstance();
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
      return Unit_getInstance();
    };
  }
  function opacity$lambda($value) {
    return function ($this$styleModifier) {
      opacity($this$styleModifier, $value);
      return Unit_getInstance();
    };
  }
  function display_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, display$lambda(value));
  }
  function display$lambda($value) {
    return function ($this$styleModifier) {
      display($this$styleModifier, $value);
      return Unit_getInstance();
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
      $this$attrsModifier.classes_ayghm2_k$($classes.slice());
      return Unit_getInstance();
    };
  }
  function appearance$lambda($appearance) {
    return function ($this$styleModifier) {
      appearance($this$styleModifier, $appearance);
      return Unit_getInstance();
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
      return Unit_getInstance();
    };
  }
  function gap$lambda($value) {
    return function ($this$styleModifier) {
      gap($this$styleModifier, $value);
      return Unit_getInstance();
    };
  }
  function fontWeight_1(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, fontWeight$lambda(value));
  }
  function fontSize_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, fontSize$lambda(value));
  }
  function fontWeight_2(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, fontWeight$lambda_0(value));
  }
  function fontFamily_0(_this__u8e3s4, values) {
    return styleModifier(_this__u8e3s4, fontFamily$lambda(values));
  }
  function fontWeight$lambda($value) {
    return function ($this$styleModifier) {
      fontWeight($this$styleModifier, $value);
      return Unit_getInstance();
    };
  }
  function fontSize$lambda($value) {
    return function ($this$styleModifier) {
      fontSize($this$styleModifier, $value);
      return Unit_getInstance();
    };
  }
  function fontWeight$lambda_0($value) {
    return function ($this$styleModifier) {
      fontWeight_0($this$styleModifier, $value);
      return Unit_getInstance();
    };
  }
  function fontFamily$lambda($values) {
    return function ($this$styleModifier) {
      fontFamily($this$styleModifier, $values.slice());
      return Unit_getInstance();
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
  function gridTemplateColumns$lambda($block) {
    return function ($this$styleModifier) {
      gridTemplateColumns($this$styleModifier, $block);
      return Unit_getInstance();
    };
  }
  function gridTemplateRows$lambda($block) {
    return function ($this$styleModifier) {
      gridTemplateRows($this$styleModifier, $block);
      return Unit_getInstance();
    };
  }
  function gridRow$lambda($start, $end) {
    return function ($this$styleModifier) {
      gridRow($this$styleModifier, $start, $end);
      return Unit_getInstance();
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
      $this$attrsModifier.tabIndex_fn4aj_k$($value);
      return Unit_getInstance();
    };
  }
  function userSelect$lambda($userSelect) {
    return function ($this$styleModifier) {
      userSelect($this$styleModifier, $userSelect);
      return Unit_getInstance();
    };
  }
  function cursor$lambda($cursor) {
    return function ($this$styleModifier) {
      cursor($this$styleModifier, $cursor);
      return Unit_getInstance();
    };
  }
  function onClick$lambda($listener) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.onClick_q9cds6_k$($listener);
      return Unit_getInstance();
    };
  }
  function _get_styleScope__yp0uyw_0($this) {
    return $this.styleScope_1;
  }
  function OverflowScope(styleScope) {
    this.styleScope_1 = styleScope;
  }
  protoOf(OverflowScope).x_7tere2_k$ = function (overflowX_0) {
    return overflowX(this.styleScope_1, overflowX_0);
  };
  protoOf(OverflowScope).y_9zjijb_k$ = function (overflowY_0) {
    return overflowY(this.styleScope_1, overflowY_0);
  };
  function padding_0(_this__u8e3s4, top, right, bottom, left) {
    top = top === VOID ? get_px(0) : top;
    right = right === VOID ? get_px(0) : right;
    bottom = bottom === VOID ? get_px(0) : bottom;
    left = left === VOID ? get_px(0) : left;
    return styleModifier(_this__u8e3s4, padding$lambda(top, right, bottom, left));
  }
  function padding_1(_this__u8e3s4, all) {
    return styleModifier(_this__u8e3s4, padding$lambda_0(all));
  }
  function padding_2(_this__u8e3s4, top, leftRight, bottom) {
    top = top === VOID ? get_px(0) : top;
    leftRight = leftRight === VOID ? get_px(0) : leftRight;
    bottom = bottom === VOID ? get_px(0) : bottom;
    return styleModifier(_this__u8e3s4, padding$lambda_1(top, leftRight, bottom));
  }
  function margin_0(_this__u8e3s4, top, right, bottom, left) {
    top = top === VOID ? get_px(0) : top;
    right = right === VOID ? get_px(0) : right;
    bottom = bottom === VOID ? get_px(0) : bottom;
    left = left === VOID ? get_px(0) : left;
    return styleModifier(_this__u8e3s4, margin$lambda(top, right, bottom, left));
  }
  function marginBlock_0(_this__u8e3s4, start, end) {
    start = start === VOID ? get_px(0) : start;
    end = end === VOID ? get_px(0) : end;
    return styleModifier(_this__u8e3s4, marginBlock$lambda(start, end));
  }
  function lineHeight_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, lineHeight$lambda(value));
  }
  function padding_3(_this__u8e3s4, topBottom, leftRight) {
    topBottom = topBottom === VOID ? get_px(0) : topBottom;
    leftRight = leftRight === VOID ? get_px(0) : leftRight;
    return styleModifier(_this__u8e3s4, padding$lambda_2(topBottom, leftRight));
  }
  function overflow_0(_this__u8e3s4, overflow) {
    return styleModifier(_this__u8e3s4, overflow$lambda(overflow));
  }
  function overflow_1(_this__u8e3s4, scope) {
    return styleModifier(_this__u8e3s4, overflow$lambda_0(scope));
  }
  function paddingInline_0(_this__u8e3s4, start, end) {
    start = start === VOID ? get_px(0) : start;
    end = end === VOID ? get_px(0) : end;
    return styleModifier(_this__u8e3s4, paddingInline$lambda(start, end));
  }
  function overflowWrap_0(_this__u8e3s4, overflowWrap) {
    return styleModifier(_this__u8e3s4, overflowWrap$lambda(overflowWrap));
  }
  function margin_1(_this__u8e3s4, topBottom, leftRight) {
    topBottom = topBottom === VOID ? get_px(0) : topBottom;
    leftRight = leftRight === VOID ? get_px(0) : leftRight;
    return styleModifier(_this__u8e3s4, margin$lambda_0(topBottom, leftRight));
  }
  function margin_2(_this__u8e3s4, all) {
    return styleModifier(_this__u8e3s4, margin$lambda_1(all));
  }
  function margin_3(_this__u8e3s4, top, leftRight, bottom) {
    top = top === VOID ? get_px(0) : top;
    leftRight = leftRight === VOID ? get_px(0) : leftRight;
    bottom = bottom === VOID ? get_px(0) : bottom;
    return styleModifier(_this__u8e3s4, margin$lambda_2(top, leftRight, bottom));
  }
  function verticalAlign_0(_this__u8e3s4, verticalAlign) {
    return styleModifier(_this__u8e3s4, verticalAlign$lambda(verticalAlign));
  }
  function marginInline_0(_this__u8e3s4, start, end) {
    start = start === VOID ? get_px(0) : start;
    end = end === VOID ? get_px(0) : end;
    return styleModifier(_this__u8e3s4, marginInline$lambda(start, end));
  }
  function padding$lambda($top, $right, $bottom, $left) {
    return function ($this$styleModifier) {
      padding($this$styleModifier, [$top, $right, $bottom, $left]);
      return Unit_getInstance();
    };
  }
  function padding$lambda_0($all) {
    return function ($this$styleModifier) {
      padding($this$styleModifier, [$all]);
      return Unit_getInstance();
    };
  }
  function padding$lambda_1($top, $leftRight, $bottom) {
    return function ($this$styleModifier) {
      padding($this$styleModifier, [$top, $leftRight, $bottom]);
      return Unit_getInstance();
    };
  }
  function margin$lambda($top, $right, $bottom, $left) {
    return function ($this$styleModifier) {
      margin($this$styleModifier, [$top, $right, $bottom, $left]);
      return Unit_getInstance();
    };
  }
  function marginBlock$lambda($start, $end) {
    return function ($this$styleModifier) {
      marginBlock($this$styleModifier, [$start, $end]);
      return Unit_getInstance();
    };
  }
  function lineHeight$lambda($value) {
    return function ($this$styleModifier) {
      lineHeight($this$styleModifier, toString_0($value));
      return Unit_getInstance();
    };
  }
  function padding$lambda_2($topBottom, $leftRight) {
    return function ($this$styleModifier) {
      padding($this$styleModifier, [$topBottom, $leftRight]);
      return Unit_getInstance();
    };
  }
  function overflow$lambda($overflow) {
    return function ($this$styleModifier) {
      overflow($this$styleModifier, $overflow);
      return Unit_getInstance();
    };
  }
  function overflow$lambda_0($scope) {
    return function ($this$styleModifier) {
      $scope(new OverflowScope($this$styleModifier));
      return Unit_getInstance();
    };
  }
  function paddingInline$lambda($start, $end) {
    return function ($this$styleModifier) {
      paddingInline($this$styleModifier, [$start, $end]);
      return Unit_getInstance();
    };
  }
  function overflowWrap$lambda($overflowWrap) {
    return function ($this$styleModifier) {
      overflowWrap($this$styleModifier, $overflowWrap);
      return Unit_getInstance();
    };
  }
  function margin$lambda_0($topBottom, $leftRight) {
    return function ($this$styleModifier) {
      margin($this$styleModifier, [$topBottom, $leftRight]);
      return Unit_getInstance();
    };
  }
  function margin$lambda_1($all) {
    return function ($this$styleModifier) {
      margin($this$styleModifier, [$all]);
      return Unit_getInstance();
    };
  }
  function margin$lambda_2($top, $leftRight, $bottom) {
    return function ($this$styleModifier) {
      margin($this$styleModifier, [$top, $leftRight, $bottom]);
      return Unit_getInstance();
    };
  }
  function verticalAlign$lambda($verticalAlign) {
    return function ($this$styleModifier) {
      verticalAlign($this$styleModifier, $verticalAlign);
      return Unit_getInstance();
    };
  }
  function marginInline$lambda($start, $end) {
    return function ($this$styleModifier) {
      marginInline($this$styleModifier, [$start, $end]);
      return Unit_getInstance();
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
      return Unit_getInstance();
    };
  }
  function objectFit_0(_this__u8e3s4, objectFit) {
    return styleModifier(_this__u8e3s4, objectFit$lambda(objectFit));
  }
  function objectFit$lambda($objectFit) {
    return function ($this$styleModifier) {
      objectFit($this$styleModifier, $objectFit);
      return Unit_getInstance();
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
      return Unit_getInstance();
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
      return Unit_getInstance();
    };
  }
  function top$lambda($value) {
    return function ($this$styleModifier) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = $value;
      top($this$styleModifier, tmp$ret$1);
      return Unit_getInstance();
    };
  }
  function left$lambda($value) {
    return function ($this$styleModifier) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = $value;
      left($this$styleModifier, tmp$ret$1);
      return Unit_getInstance();
    };
  }
  function right$lambda($value) {
    return function ($this$styleModifier) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = $value;
      right($this$styleModifier, tmp$ret$1);
      return Unit_getInstance();
    };
  }
  function bottom$lambda($value) {
    return function ($this$styleModifier) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = $value;
      bottom($this$styleModifier, tmp$ret$1);
      return Unit_getInstance();
    };
  }
  function scrollBehavior_0(_this__u8e3s4, scrollBehavior) {
    return styleModifier(_this__u8e3s4, scrollBehavior$lambda(scrollBehavior));
  }
  function scrollBehavior$lambda($scrollBehavior) {
    return function ($this$styleModifier) {
      scrollBehavior($this$styleModifier, $scrollBehavior);
      return Unit_getInstance();
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
      return Unit_getInstance();
    };
  }
  function minWidth$lambda($size) {
    return function ($this$styleModifier) {
      minWidth($this$styleModifier, $size);
      return Unit_getInstance();
    };
  }
  function height$lambda($size) {
    return function ($this$styleModifier) {
      height($this$styleModifier, $size);
      return Unit_getInstance();
    };
  }
  function minHeight$lambda($size) {
    return function ($this$styleModifier) {
      minHeight($this$styleModifier, $size);
      return Unit_getInstance();
    };
  }
  function width$lambda($size) {
    return function ($this$styleModifier) {
      width($this$styleModifier, $size);
      return Unit_getInstance();
    };
  }
  function fillMaxSize$lambda($percent) {
    return function ($this$styleModifier) {
      width($this$styleModifier, $percent);
      height($this$styleModifier, $percent);
      return Unit_getInstance();
    };
  }
  function maxWidth$lambda($size) {
    return function ($this$styleModifier) {
      maxWidth($this$styleModifier, $size);
      return Unit_getInstance();
    };
  }
  function fillMaxHeight$lambda($percent) {
    return function ($this$styleModifier) {
      height($this$styleModifier, $percent);
      return Unit_getInstance();
    };
  }
  function size$lambda($width, $height) {
    return function ($this$styleModifier) {
      width($this$styleModifier, $width);
      height($this$styleModifier, $height);
      return Unit_getInstance();
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
  function whiteSpace$lambda($whiteSpace) {
    return function ($this$styleModifier) {
      whiteSpace($this$styleModifier, $whiteSpace);
      return Unit_getInstance();
    };
  }
  function textAlign$lambda($textAlign) {
    return function ($this$styleModifier) {
      textAlign($this$styleModifier, $textAlign);
      return Unit_getInstance();
    };
  }
  function textDecorationLine$lambda($textDecorationLine) {
    return function ($this$styleModifier) {
      textDecorationLine($this$styleModifier, [$textDecorationLine]);
      return Unit_getInstance();
    };
  }
  function translateX_0(_this__u8e3s4, tx) {
    return styleModifier(_this__u8e3s4, translateX$lambda(tx));
  }
  function translateX$lambda($tx) {
    return function ($this$styleModifier) {
      translateX($this$styleModifier, $tx);
      return Unit_getInstance();
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
      return Unit_getInstance();
    };
  }
  function transition$lambda_0($transitions) {
    return function ($this$styleModifier) {
      transition($this$styleModifier, $transitions.slice());
      return Unit_getInstance();
    };
  }
  function setVariable_1(_this__u8e3s4, variable, value) {
    var tmp;
    if (!(value == null)) {
      tmp = styleModifier(_this__u8e3s4, setVariable$lambda(variable, value));
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function setVariable_2(_this__u8e3s4, variable, value) {
    var tmp;
    if (!(value == null)) {
      tmp = styleModifier(_this__u8e3s4, setVariable$lambda_0(variable, value));
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function setVariable$lambda($variable, $value) {
    return function ($this$styleModifier) {
      setVariable($this$styleModifier, $variable, $value);
      return Unit_getInstance();
    };
  }
  function setVariable$lambda_0($variable, $value) {
    return function ($this$styleModifier) {
      setVariable_0($this$styleModifier, $variable, $value);
      return Unit_getInstance();
    };
  }
  //region block: post-declaration
  protoOf(BoxScopeInstance).align_s6rwef_k$ = align;
  protoOf(ColumnScopeInstance).align_45bqjp_k$ = align_0;
  protoOf(ColumnScopeInstance).weight_stvlsa_k$ = weight;
  protoOf(RowScopeInstance).align_kdfg3t_k$ = align_1;
  protoOf(RowScopeInstance).weight_stvlsa_k$ = weight;
  protoOf(ChainedModifier).then_mmfvo6_k$ = then;
  protoOf(AttrsModifier).fold_esqsf3_k$ = fold;
  protoOf(AttrsModifier).then_mmfvo6_k$ = then;
  protoOf(StyleModifier).fold_esqsf3_k$ = fold;
  protoOf(StyleModifier).then_mmfvo6_k$ = then;
  protoOf(Rgb).darkened$default_kpriub_k$ = darkened$default;
  protoOf(Hsl).darkened$default_kpriub_k$ = darkened$default;
  //endregion
  //region block: init
  com_varabyte_kobweb_compose_foundation_layout_Arrangement_Center$stable = 0;
  com_varabyte_kobweb_compose_style_KobwebComposeStyleSheet$stable = 0;
  com_varabyte_kobweb_compose_ui_Alignment_Start$stable = 0;
  com_varabyte_kobweb_compose_ui_Alignment_CenterHorizontally$stable = 0;
  com_varabyte_kobweb_compose_ui_Alignment_Center$stable = 0;
  com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stable = 0;
  com_varabyte_kobweb_compose_ui_Alignment_End$stable = 0;
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
  _.$_$.o = borderRadius_3;
  _.$_$.p = borderRadius_2;
  _.$_$.q = borderRadius_4;
  _.$_$.r = borderTop_0;
  _.$_$.s = border_1;
  _.$_$.t = border_0;
  _.$_$.u = bottom_0;
  _.$_$.v = boxShadow_0;
  _.$_$.w = boxSizing_0;
  _.$_$.x = classNames;
  _.$_$.y = color_0;
  _.$_$.z = cursor_0;
  _.$_$.a1 = display_0;
  _.$_$.b1 = fillMaxHeight;
  _.$_$.c1 = fillMaxSize;
  _.$_$.d1 = fillMaxWidth;
  _.$_$.e1 = flexGrow_0;
  _.$_$.f1 = fontFamily_0;
  _.$_$.g1 = fontSize_0;
  _.$_$.h1 = fontWeight_1;
  _.$_$.i1 = fontWeight_2;
  _.$_$.j1 = gap_0;
  _.$_$.k1 = gridRow_0;
  _.$_$.l1 = gridTemplateColumns_0;
  _.$_$.m1 = gridTemplateRows_0;
  _.$_$.n1 = height_0;
  _.$_$.o1 = left_0;
  _.$_$.p1 = lineHeight_0;
  _.$_$.q1 = listStyle_0;
  _.$_$.r1 = marginBlock_0;
  _.$_$.s1 = marginInline_0;
  _.$_$.t1 = margin_0;
  _.$_$.u1 = margin_2;
  _.$_$.v1 = margin_1;
  _.$_$.w1 = margin_3;
  _.$_$.x1 = maxWidth_0;
  _.$_$.y1 = minHeight_0;
  _.$_$.z1 = minWidth_0;
  _.$_$.a2 = objectFit_0;
  _.$_$.b2 = onAnimationEnd;
  _.$_$.c2 = onClick;
  _.$_$.d2 = opacity_0;
  _.$_$.e2 = outline_0;
  _.$_$.f2 = overflowWrap_0;
  _.$_$.g2 = overflow_1;
  _.$_$.h2 = overflow_0;
  _.$_$.i2 = paddingInline_0;
  _.$_$.j2 = padding_0;
  _.$_$.k2 = padding_1;
  _.$_$.l2 = padding_2;
  _.$_$.m2 = padding_3;
  _.$_$.n2 = position_0;
  _.$_$.o2 = right_0;
  _.$_$.p2 = scrollBehavior_0;
  _.$_$.q2 = setVariable_1;
  _.$_$.r2 = setVariable_2;
  _.$_$.s2 = size;
  _.$_$.t2 = tabIndex;
  _.$_$.u2 = textAlign_0;
  _.$_$.v2 = textDecorationLine_0;
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
  _.$_$.i3 = Center_getInstance;
  _.$_$.j3 = KobwebComposeStyleSheet_getInstance;
  _.$_$.k3 = Companion_getInstance_9;
  _.$_$.l3 = Colors_getInstance;
  _.$_$.m3 = CenterEnd_getInstance;
  _.$_$.n3 = CenterHorizontally_getInstance;
  _.$_$.o3 = CenterVertically_getInstance;
  _.$_$.p3 = Center_getInstance_0;
  _.$_$.q3 = End_getInstance_0;
  _.$_$.r3 = Start_getInstance_0;
  _.$_$.s3 = TopCenter_getInstance;
  _.$_$.t3 = TopStart_getInstance;
  _.$_$.u3 = Companion_getInstance_8;
  //endregion
  return _;
}));
