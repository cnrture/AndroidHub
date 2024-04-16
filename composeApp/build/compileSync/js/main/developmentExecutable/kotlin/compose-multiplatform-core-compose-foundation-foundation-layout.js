(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-ui-ui.js', './compose-multiplatform-core-compose-runtime-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation-layout'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation-layout'.");
    }
    if (typeof this['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation-layout'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation-layout'.");
    }
    if (typeof this['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation-layout'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation-layout'.");
    }
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation-layout'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation-layout'.");
    }
    root['compose-multiplatform-core-compose-foundation-foundation-layout'] = factory(typeof this['compose-multiplatform-core-compose-foundation-foundation-layout'] === 'undefined' ? {} : this['compose-multiplatform-core-compose-foundation-foundation-layout'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-compose-ui-ui-unit'], this['compose-multiplatform-core-compose-ui-ui'], this['compose-multiplatform-core-compose-runtime-runtime']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.cf;
  var classMeta = kotlin_kotlin.$_$.qd;
  var setMetadataFor = kotlin_kotlin.$_$.df;
  var VOID = kotlin_kotlin.$_$.g;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g2;
  var interfaceMeta = kotlin_kotlin.$_$.ge;
  var objectMeta = kotlin_kotlin.$_$.bf;
  var Unit_getInstance = kotlin_kotlin.$_$.v5;
  var LayoutDirection_Rtl_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w1;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v1;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s;
  var Dp__hashCode_impl_sxkrra = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i2;
  var getBooleanHashCode = kotlin_kotlin.$_$.yd;
  var hashCode = kotlin_kotlin.$_$.ee;
  var THROW_CCE = kotlin_kotlin.$_$.ck;
  var equals = kotlin_kotlin.$_$.ud;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.j4;
  var roundToInt = kotlin_kotlin.$_$.mf;
  var get_lastIndex = kotlin_kotlin.$_$.v9;
  var Placeable = kotlin_org_jetbrains_compose_ui_ui.$_$.n1;
  var _Constraints___get_minWidth__impl__hi9lfi = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f2;
  var _Constraints___get_minHeight__impl__ev4bgx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e2;
  var Constraints__copy$default_impl_f452rp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e3;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g3;
  var fillArrayVal = kotlin_kotlin.$_$.wd;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a;
  var minIntrinsicWidth = kotlin_org_jetbrains_compose_ui_ui.$_$.i1;
  var minIntrinsicHeight = kotlin_org_jetbrains_compose_ui_ui.$_$.h1;
  var maxIntrinsicWidth = kotlin_org_jetbrains_compose_ui_ui.$_$.g1;
  var maxIntrinsicHeight = kotlin_org_jetbrains_compose_ui_ui.$_$.f1;
  var MeasurePolicy = kotlin_org_jetbrains_compose_ui_ui.$_$.j1;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z;
  var Node = kotlin_org_jetbrains_compose_ui_ui.$_$.n3;
  var ParentDataModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.f2;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.k4;
  var get_currentCompositeKeyHash = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var materialize = kotlin_org_jetbrains_compose_ui_ui.$_$.s3;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui.$_$.h4;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h;
  var isInterface = kotlin_kotlin.$_$.pe;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d2;
  var _Updater___get_composer__impl__9ty7av = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v1;
  var materializerOf = kotlin_org_jetbrains_compose_ui_ui.$_$.s1;
  var _SkippableUpdater___init__impl__4ft0t9 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z1;
  var SkippableUpdater = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q1;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var get_NoInspectorInfo = kotlin_org_jetbrains_compose_ui_ui.$_$.w2;
  var get_isDebugInspectorInfoEnabled = kotlin_org_jetbrains_compose_ui_ui.$_$.x2;
  var ModifierNodeElement = kotlin_org_jetbrains_compose_ui_ui.$_$.e2;
  var Constraints_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var Annotation = kotlin_kotlin.$_$.ij;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h3;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j2;
  var toString = kotlin_kotlin.$_$.hf;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.b2;
  var offset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o1;
  var constrainWidth = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h1;
  var constrainHeight = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g1;
  var minIntrinsicWidth_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.c2;
  var minIntrinsicHeight_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.b2;
  var maxIntrinsicWidth_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.a2;
  var maxIntrinsicHeight_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.z1;
  var LayoutModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.d2;
  var Dp__compareTo_impl_tlg3dl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h2;
  var THROW_IAE = kotlin_kotlin.$_$.dk;
  var enumEntries = kotlin_kotlin.$_$.fd;
  var Enum = kotlin_kotlin.$_$.qj;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui.$_$.g4;
  var getNumberHashCode = kotlin_kotlin.$_$.ae;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d2;
  var _Constraints___get_maxHeight__impl__dt3e8z = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c2;
  var Constraints__hashCode_impl_ij7484 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b2;
  var toLong = kotlin_kotlin.$_$.ff;
  var Long = kotlin_kotlin.$_$.vj;
  var numberToLong = kotlin_kotlin.$_$.ze;
  var coerceAtLeast = kotlin_kotlin.$_$.sf;
  var until = kotlin_kotlin.$_$.hg;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.h2;
  var get_sign = kotlin_kotlin.$_$.pf;
  var coerceIn = kotlin_kotlin.$_$.cg;
  var ensureNotNull = kotlin_kotlin.$_$.wk;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t2;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v;
  var IntOffset_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s2;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m3;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var coerceIn_0 = kotlin_kotlin.$_$.bg;
  var _Constraints___get_hasBoundedWidth__impl__7hd0wr = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y1;
  var _Constraints___get_hasBoundedHeight__impl__bsh4rw = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x1;
  var IntSize_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a1;
  var coerceAtLeast_0 = kotlin_kotlin.$_$.tf;
  var coerceAtMost = kotlin_kotlin.$_$.yf;
  var constrain = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i1;
  var _Constraints___get_hasFixedWidth__impl__4p17wc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a2;
  var _Constraints___get_hasFixedHeight__impl__y56fxx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z1;
  var modifierLocalOf = kotlin_org_jetbrains_compose_ui_ui.$_$.t1;
  //endregion
  //region block: pre-declaration
  function get_spacing() {
    // Inline function 'androidx.compose.ui.unit.dp' call
    return _Dp___init__impl__ms3zkb(0);
  }
  setMetadataFor(Horizontal, 'Horizontal', interfaceMeta);
  setMetadataFor(Arrangement$Absolute$Left$1, VOID, classMeta, VOID, [Horizontal]);
  setMetadataFor(Arrangement$Absolute$Center$1, VOID, classMeta, VOID, [Horizontal]);
  setMetadataFor(Arrangement$Absolute$Right$1, VOID, classMeta, VOID, [Horizontal]);
  setMetadataFor(Arrangement$Absolute$SpaceBetween$1, VOID, classMeta, VOID, [Horizontal]);
  setMetadataFor(Arrangement$Absolute$SpaceEvenly$1, VOID, classMeta, VOID, [Horizontal]);
  setMetadataFor(Arrangement$Absolute$SpaceAround$1, VOID, classMeta, VOID, [Horizontal]);
  function get_spacing_0() {
    // Inline function 'androidx.compose.ui.unit.dp' call
    return _Dp___init__impl__ms3zkb(0);
  }
  setMetadataFor(Vertical, 'Vertical', interfaceMeta);
  function get_spacing_1() {
    // Inline function 'androidx.compose.ui.unit.dp' call
    return _Dp___init__impl__ms3zkb(0);
  }
  setMetadataFor(HorizontalOrVertical, 'HorizontalOrVertical', interfaceMeta, VOID, [Horizontal, Vertical]);
  setMetadataFor(Absolute, 'Absolute', objectMeta);
  setMetadataFor(SpacedAligned, 'SpacedAligned', classMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(Arrangement$Start$1, VOID, classMeta, VOID, [Horizontal]);
  setMetadataFor(Arrangement$End$1, VOID, classMeta, VOID, [Horizontal]);
  setMetadataFor(Arrangement$Top$1, VOID, classMeta, VOID, [Vertical]);
  setMetadataFor(Arrangement$Bottom$1, VOID, classMeta, VOID, [Vertical]);
  setMetadataFor(Arrangement$Center$1, VOID, classMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(Arrangement$SpaceEvenly$1, VOID, classMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(Arrangement$SpaceBetween$1, VOID, classMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(Arrangement$SpaceAround$1, VOID, classMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(Arrangement, 'Arrangement', objectMeta);
  setMetadataFor(BoxMeasurePolicy, 'BoxMeasurePolicy', classMeta, VOID, [MeasurePolicy]);
  setMetadataFor(BoxChildDataNode, 'BoxChildDataNode', classMeta, Node, [ParentDataModifierNode, Node]);
  setMetadataFor(BoxScope, 'BoxScope', interfaceMeta);
  setMetadataFor(BoxScopeInstance, 'BoxScopeInstance', objectMeta, VOID, [BoxScope]);
  setMetadataFor(BoxChildDataElement, 'BoxChildDataElement', classMeta, ModifierNodeElement);
  setMetadataFor(sam$androidx_compose_ui_layout_MeasurePolicy$0, 'sam$androidx_compose_ui_layout_MeasurePolicy$0', classMeta, VOID, [MeasurePolicy]);
  setMetadataFor(LayoutScopeMarker, 'LayoutScopeMarker', classMeta, VOID, [Annotation]);
  setMetadataFor(PaddingValues, 'PaddingValues', interfaceMeta);
  setMetadataFor(Absolute_0, 'Absolute', classMeta, VOID, [PaddingValues], Absolute_0);
  setMetadataFor(PaddingValuesImpl, 'PaddingValuesImpl', classMeta, VOID, [PaddingValues], PaddingValuesImpl);
  setMetadataFor(PaddingElement, 'PaddingElement', classMeta, ModifierNodeElement);
  setMetadataFor(PaddingValuesElement, 'PaddingValuesElement', classMeta, ModifierNodeElement);
  setMetadataFor(PaddingNode, 'PaddingNode', classMeta, Node, [LayoutModifierNode, Node]);
  setMetadataFor(PaddingValuesModifier, 'PaddingValuesModifier', classMeta, Node, [LayoutModifierNode, Node]);
  setMetadataFor(RowColumnMeasurePolicy, 'RowColumnMeasurePolicy', classMeta, VOID, [MeasurePolicy]);
  setMetadataFor(LayoutOrientation, 'LayoutOrientation', classMeta, Enum);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(CrossAxisAlignment, 'CrossAxisAlignment', classMeta);
  setMetadataFor(CenterCrossAxisAlignment, 'CenterCrossAxisAlignment', objectMeta, CrossAxisAlignment);
  setMetadataFor(StartCrossAxisAlignment, 'StartCrossAxisAlignment', objectMeta, CrossAxisAlignment);
  setMetadataFor(EndCrossAxisAlignment, 'EndCrossAxisAlignment', objectMeta, CrossAxisAlignment);
  setMetadataFor(AlignmentLineCrossAxisAlignment, 'AlignmentLineCrossAxisAlignment', classMeta, CrossAxisAlignment);
  setMetadataFor(VerticalCrossAxisAlignment, 'VerticalCrossAxisAlignment', classMeta, CrossAxisAlignment);
  setMetadataFor(HorizontalCrossAxisAlignment, 'HorizontalCrossAxisAlignment', classMeta, CrossAxisAlignment);
  setMetadataFor(SizeMode, 'SizeMode', classMeta, Enum);
  setMetadataFor(AlignmentLineProvider, 'AlignmentLineProvider', classMeta);
  setMetadataFor(Block, 'Block', classMeta, AlignmentLineProvider);
  setMetadataFor(Value, 'Value', classMeta, AlignmentLineProvider);
  setMetadataFor(IntrinsicMeasureBlocks, 'IntrinsicMeasureBlocks', objectMeta);
  setMetadataFor(RowColumnParentData, 'RowColumnParentData', classMeta, VOID, VOID, RowColumnParentData);
  setMetadataFor(OrientationIndependentConstraints, 'OrientationIndependentConstraints', classMeta);
  setMetadataFor(RowColumnMeasurementHelper, 'RowColumnMeasurementHelper', classMeta);
  setMetadataFor(RowColumnMeasureHelperResult, 'RowColumnMeasureHelperResult', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(FillElement, 'FillElement', classMeta, ModifierNodeElement);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(WrapContentElement, 'WrapContentElement', classMeta, ModifierNodeElement);
  setMetadataFor(FillNode, 'FillNode', classMeta, Node, [LayoutModifierNode, Node]);
  setMetadataFor(Direction, 'Direction', classMeta, Enum);
  setMetadataFor(WrapContentNode, 'WrapContentNode', classMeta, Node, [LayoutModifierNode, Node]);
  setMetadataFor(SizeElement, 'SizeElement', classMeta, ModifierNodeElement);
  setMetadataFor(UnspecifiedConstraintsElement, 'UnspecifiedConstraintsElement', classMeta, ModifierNodeElement, VOID, UnspecifiedConstraintsElement);
  setMetadataFor(SizeNode, 'SizeNode', classMeta, Node, [LayoutModifierNode, Node]);
  setMetadataFor(UnspecifiedConstraintsNode, 'UnspecifiedConstraintsNode', classMeta, Node, [LayoutModifierNode, Node], UnspecifiedConstraintsNode);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(WindowInsets, 'WindowInsets', interfaceMeta);
  setMetadataFor(FixedIntInsets, 'FixedIntInsets', classMeta, VOID, [WindowInsets]);
  setMetadataFor(NoOp, 'NoOp', classMeta, VOID, [Annotation]);
  //endregion
  function Arrangement$Absolute$Left$1() {
  }
  protoOf(Arrangement$Absolute$Left$1).arrange_f41npy_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    return Arrangement_getInstance().placeLeftOrTop_usczpt_k$(sizes, outPositions, false);
  };
  protoOf(Arrangement$Absolute$Left$1).toString = function () {
    return 'AbsoluteArrangement#Left';
  };
  function Arrangement$Absolute$Center$1() {
  }
  protoOf(Arrangement$Absolute$Center$1).arrange_f41npy_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    return Arrangement_getInstance().placeCenter_xrj2p3_k$(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Absolute$Center$1).toString = function () {
    return 'AbsoluteArrangement#Center';
  };
  function Arrangement$Absolute$Right$1() {
  }
  protoOf(Arrangement$Absolute$Right$1).arrange_f41npy_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    return Arrangement_getInstance().placeRightOrBottom_mvrfcw_k$(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Absolute$Right$1).toString = function () {
    return 'AbsoluteArrangement#Right';
  };
  function Arrangement$Absolute$SpaceBetween$1() {
  }
  protoOf(Arrangement$Absolute$SpaceBetween$1).arrange_f41npy_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    return Arrangement_getInstance().placeSpaceBetween_ufunae_k$(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Absolute$SpaceBetween$1).toString = function () {
    return 'AbsoluteArrangement#SpaceBetween';
  };
  function Arrangement$Absolute$SpaceEvenly$1() {
  }
  protoOf(Arrangement$Absolute$SpaceEvenly$1).arrange_f41npy_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    return Arrangement_getInstance().placeSpaceEvenly_b3a0ir_k$(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Absolute$SpaceEvenly$1).toString = function () {
    return 'AbsoluteArrangement#SpaceEvenly';
  };
  function Arrangement$Absolute$SpaceAround$1() {
  }
  protoOf(Arrangement$Absolute$SpaceAround$1).arrange_f41npy_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    return Arrangement_getInstance().placeSpaceAround_u3zv49_k$(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Absolute$SpaceAround$1).toString = function () {
    return 'AbsoluteArrangement#SpaceAround';
  };
  function Arrangement$Absolute$spacedBy$lambda($alignment) {
    return function (size, layoutDirection) {
      return $alignment.align_y7fd6v_k$(0, size, layoutDirection);
    };
  }
  function Arrangement$Absolute$spacedBy$lambda_0($alignment) {
    return function (size, _anonymous_parameter_1__qggqgd) {
      return $alignment.align_k316px_k$(0, size);
    };
  }
  function Arrangement$Absolute$aligned$lambda($alignment) {
    return function (size, layoutDirection) {
      return $alignment.align_y7fd6v_k$(0, size, layoutDirection);
    };
  }
  function Horizontal() {
  }
  function Vertical() {
  }
  function HorizontalOrVertical() {
  }
  function Absolute() {
    Absolute_instance = this;
    var tmp = this;
    tmp.Left_1 = new Arrangement$Absolute$Left$1();
    var tmp_0 = this;
    tmp_0.Center_1 = new Arrangement$Absolute$Center$1();
    var tmp_1 = this;
    tmp_1.Right_1 = new Arrangement$Absolute$Right$1();
    var tmp_2 = this;
    tmp_2.SpaceBetween_1 = new Arrangement$Absolute$SpaceBetween$1();
    var tmp_3 = this;
    tmp_3.SpaceEvenly_1 = new Arrangement$Absolute$SpaceEvenly$1();
    var tmp_4 = this;
    tmp_4.SpaceAround_1 = new Arrangement$Absolute$SpaceAround$1();
  }
  protoOf(Absolute).get_Left_wo5bw0_k$ = function () {
    return this.Left_1;
  };
  protoOf(Absolute).get_Center_3arb0i_k$ = function () {
    return this.Center_1;
  };
  protoOf(Absolute).get_Right_igdsyb_k$ = function () {
    return this.Right_1;
  };
  protoOf(Absolute).get_SpaceBetween_5p3wqd_k$ = function () {
    return this.SpaceBetween_1;
  };
  protoOf(Absolute).get_SpaceEvenly_3s2yx0_k$ = function () {
    return this.SpaceEvenly_1;
  };
  protoOf(Absolute).get_SpaceAround_1tvu22_k$ = function () {
    return this.SpaceAround_1;
  };
  protoOf(Absolute).spacedBy_wt7oji_k$ = function (space) {
    return new SpacedAligned(space, false, null);
  };
  protoOf(Absolute).spacedBy_k2qzj_k$ = function (space, alignment) {
    return new SpacedAligned(space, false, Arrangement$Absolute$spacedBy$lambda(alignment));
  };
  protoOf(Absolute).spacedBy_ree0zx_k$ = function (space, alignment) {
    return new SpacedAligned(space, false, Arrangement$Absolute$spacedBy$lambda_0(alignment));
  };
  protoOf(Absolute).aligned_ze1awx_k$ = function (alignment) {
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp = _Dp___init__impl__ms3zkb(0);
    return new SpacedAligned(tmp, false, Arrangement$Absolute$aligned$lambda(alignment));
  };
  var Absolute_instance;
  function Absolute_getInstance() {
    if (Absolute_instance == null)
      new Absolute();
    return Absolute_instance;
  }
  function SpacedAligned(space, rtlMirror, alignment) {
    this.space_1 = space;
    this.rtlMirror_1 = rtlMirror;
    this.alignment_1 = alignment;
    this.spacing_1 = this.space_1;
  }
  protoOf(SpacedAligned).get_space_1qqjay_k$ = function () {
    return this.space_1;
  };
  protoOf(SpacedAligned).get_rtlMirror_4wv9cw_k$ = function () {
    return this.rtlMirror_1;
  };
  protoOf(SpacedAligned).get_alignment_xa1jnq_k$ = function () {
    return this.alignment_1;
  };
  protoOf(SpacedAligned).get_spacing_zb7agn_k$ = function () {
    return this.spacing_1;
  };
  protoOf(SpacedAligned).arrange_f41npy_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (sizes.length === 0)
      return Unit_getInstance();
    var spacePx = _this__u8e3s4.roundToPx_yb7vg8_k$(this.space_1);
    var occupied = 0;
    var lastSpace = 0;
    var reversed = this.rtlMirror_1 ? layoutDirection.equals(LayoutDirection_Rtl_getInstance()) : false;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    Arrangement_getInstance();
    if (!reversed) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable = 0;
      var last = sizes.length;
      while (inductionVariable < last) {
        var item = sizes[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.SpacedAligned.arrange.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        // Inline function 'kotlin.math.min' call
        var a = occupied;
        var b = totalSize - item | 0;
        outPositions[tmp1] = Math.min(a, b);
        // Inline function 'kotlin.math.min' call
        var b_0 = (totalSize - outPositions[tmp1] | 0) - item | 0;
        lastSpace = Math.min(spacePx, b_0);
        occupied = (outPositions[tmp1] + item | 0) + lastSpace | 0;
      }
    } else {
      var inductionVariable_0 = sizes.length - 1 | 0;
      if (0 <= inductionVariable_0)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.SpacedAligned.arrange.<anonymous>' call
          var it = sizes[i];
          // Inline function 'kotlin.math.min' call
          var a_0 = occupied;
          var b_1 = totalSize - it | 0;
          outPositions[i] = Math.min(a_0, b_1);
          // Inline function 'kotlin.math.min' call
          var b_2 = (totalSize - outPositions[i] | 0) - it | 0;
          lastSpace = Math.min(spacePx, b_2);
          occupied = (outPositions[i] + it | 0) + lastSpace | 0;
        }
         while (0 <= inductionVariable_0);
    }
    occupied = occupied - lastSpace | 0;
    if (!(this.alignment_1 == null) ? occupied < totalSize : false) {
      var groupPosition = this.alignment_1(totalSize - occupied | 0, layoutDirection);
      var inductionVariable_1 = 0;
      var last_0 = outPositions.length - 1 | 0;
      if (inductionVariable_1 <= last_0)
        do {
          var index_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          outPositions[index_0] = outPositions[index_0] + groupPosition | 0;
        }
         while (inductionVariable_1 <= last_0);
    }
  };
  protoOf(SpacedAligned).arrange_1pnoh8_k$ = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return this.arrange_f41npy_k$(_this__u8e3s4, totalSize, sizes, LayoutDirection_Ltr_getInstance(), outPositions);
  };
  protoOf(SpacedAligned).toString = function () {
    return (this.rtlMirror_1 ? '' : 'Absolute') + 'Arrangement#spacedAligned(' + new Dp(this.space_1) + ', ' + this.alignment_1 + ')';
  };
  protoOf(SpacedAligned).component1_k79ve9_k$ = function () {
    return this.space_1;
  };
  protoOf(SpacedAligned).component2_7eebsb_k$ = function () {
    return this.rtlMirror_1;
  };
  protoOf(SpacedAligned).component3_7eebsa_k$ = function () {
    return this.alignment_1;
  };
  protoOf(SpacedAligned).copy_qugr0w_k$ = function (space, rtlMirror, alignment) {
    return new SpacedAligned(space, rtlMirror, alignment);
  };
  protoOf(SpacedAligned).copy$default_a7uqgd_k$ = function (space, rtlMirror, alignment, $super) {
    space = space === VOID ? this.space_1 : space;
    rtlMirror = rtlMirror === VOID ? this.rtlMirror_1 : rtlMirror;
    alignment = alignment === VOID ? this.alignment_1 : alignment;
    return $super === VOID ? this.copy_qugr0w_k$(space, rtlMirror, alignment) : $super.copy_qugr0w_k$.call(this, new Dp(space), rtlMirror, alignment);
  };
  protoOf(SpacedAligned).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.space_1);
    result = imul(result, 31) + getBooleanHashCode(this.rtlMirror_1) | 0;
    result = imul(result, 31) + (this.alignment_1 == null ? 0 : hashCode(this.alignment_1)) | 0;
    return result;
  };
  protoOf(SpacedAligned).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SpacedAligned))
      return false;
    var tmp0_other_with_cast = other instanceof SpacedAligned ? other : THROW_CCE();
    if (!equals(this.space_1, tmp0_other_with_cast.space_1))
      return false;
    if (!(this.rtlMirror_1 === tmp0_other_with_cast.rtlMirror_1))
      return false;
    if (!equals(this.alignment_1, tmp0_other_with_cast.alignment_1))
      return false;
    return true;
  };
  function forEachIndexed(_this__u8e3s4, $this, reversed, action) {
    if (!reversed) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable = 0;
      var last = _this__u8e3s4.length;
      while (inductionVariable < last) {
        var item = _this__u8e3s4[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        action(tmp1, item);
      }
    } else {
      var inductionVariable_0 = _this__u8e3s4.length - 1 | 0;
      if (0 <= inductionVariable_0)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          action(i, _this__u8e3s4[i]);
        }
         while (0 <= inductionVariable_0);
    }
  }
  function Arrangement$Start$1() {
  }
  protoOf(Arrangement$Start$1).arrange_f41npy_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().placeLeftOrTop_usczpt_k$(sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().placeRightOrBottom_mvrfcw_k$(totalSize, sizes, outPositions, true);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(Arrangement$Start$1).toString = function () {
    return 'Arrangement#Start';
  };
  function Arrangement$End$1() {
  }
  protoOf(Arrangement$End$1).arrange_f41npy_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().placeRightOrBottom_mvrfcw_k$(totalSize, sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().placeLeftOrTop_usczpt_k$(sizes, outPositions, true);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(Arrangement$End$1).toString = function () {
    return 'Arrangement#End';
  };
  function Arrangement$Top$1() {
  }
  protoOf(Arrangement$Top$1).arrange_1pnoh8_k$ = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().placeLeftOrTop_usczpt_k$(sizes, outPositions, false);
  };
  protoOf(Arrangement$Top$1).toString = function () {
    return 'Arrangement#Top';
  };
  function Arrangement$Bottom$1() {
  }
  protoOf(Arrangement$Bottom$1).arrange_1pnoh8_k$ = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().placeRightOrBottom_mvrfcw_k$(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Bottom$1).toString = function () {
    return 'Arrangement#Bottom';
  };
  function Arrangement$Center$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.spacing_1 = _Dp___init__impl__ms3zkb(0);
  }
  protoOf(Arrangement$Center$1).get_spacing_zb7agn_k$ = function () {
    return this.spacing_1;
  };
  protoOf(Arrangement$Center$1).arrange_f41npy_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().placeCenter_xrj2p3_k$(totalSize, sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().placeCenter_xrj2p3_k$(totalSize, sizes, outPositions, true);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(Arrangement$Center$1).arrange_1pnoh8_k$ = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().placeCenter_xrj2p3_k$(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Center$1).toString = function () {
    return 'Arrangement#Center';
  };
  function Arrangement$SpaceEvenly$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.spacing_1 = _Dp___init__impl__ms3zkb(0);
  }
  protoOf(Arrangement$SpaceEvenly$1).get_spacing_zb7agn_k$ = function () {
    return this.spacing_1;
  };
  protoOf(Arrangement$SpaceEvenly$1).arrange_f41npy_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().placeSpaceEvenly_b3a0ir_k$(totalSize, sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().placeSpaceEvenly_b3a0ir_k$(totalSize, sizes, outPositions, true);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(Arrangement$SpaceEvenly$1).arrange_1pnoh8_k$ = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().placeSpaceEvenly_b3a0ir_k$(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$SpaceEvenly$1).toString = function () {
    return 'Arrangement#SpaceEvenly';
  };
  function Arrangement$SpaceBetween$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.spacing_1 = _Dp___init__impl__ms3zkb(0);
  }
  protoOf(Arrangement$SpaceBetween$1).get_spacing_zb7agn_k$ = function () {
    return this.spacing_1;
  };
  protoOf(Arrangement$SpaceBetween$1).arrange_f41npy_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().placeSpaceBetween_ufunae_k$(totalSize, sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().placeSpaceBetween_ufunae_k$(totalSize, sizes, outPositions, true);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(Arrangement$SpaceBetween$1).arrange_1pnoh8_k$ = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().placeSpaceBetween_ufunae_k$(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$SpaceBetween$1).toString = function () {
    return 'Arrangement#SpaceBetween';
  };
  function Arrangement$SpaceAround$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.spacing_1 = _Dp___init__impl__ms3zkb(0);
  }
  protoOf(Arrangement$SpaceAround$1).get_spacing_zb7agn_k$ = function () {
    return this.spacing_1;
  };
  protoOf(Arrangement$SpaceAround$1).arrange_f41npy_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().placeSpaceAround_u3zv49_k$(totalSize, sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().placeSpaceAround_u3zv49_k$(totalSize, sizes, outPositions, true);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(Arrangement$SpaceAround$1).arrange_1pnoh8_k$ = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().placeSpaceAround_u3zv49_k$(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$SpaceAround$1).toString = function () {
    return 'Arrangement#SpaceAround';
  };
  function Arrangement$spacedBy$lambda(size, layoutDirection) {
    return Companion_getInstance().get_Start_ih4i6x_k$().align_y7fd6v_k$(0, size, layoutDirection);
  }
  function Arrangement$spacedBy$lambda_0($alignment) {
    return function (size, layoutDirection) {
      return $alignment.align_y7fd6v_k$(0, size, layoutDirection);
    };
  }
  function Arrangement$spacedBy$lambda_1($alignment) {
    return function (size, _anonymous_parameter_1__qggqgd) {
      return $alignment.align_k316px_k$(0, size);
    };
  }
  function Arrangement$aligned$lambda($alignment) {
    return function (size, layoutDirection) {
      return $alignment.align_y7fd6v_k$(0, size, layoutDirection);
    };
  }
  function Arrangement$aligned$lambda_0($alignment) {
    return function (size, _anonymous_parameter_1__qggqgd) {
      return $alignment.align_k316px_k$(0, size);
    };
  }
  function Arrangement() {
    Arrangement_instance = this;
    var tmp = this;
    tmp.Start_1 = new Arrangement$Start$1();
    var tmp_0 = this;
    tmp_0.End_1 = new Arrangement$End$1();
    var tmp_1 = this;
    tmp_1.Top_1 = new Arrangement$Top$1();
    var tmp_2 = this;
    tmp_2.Bottom_1 = new Arrangement$Bottom$1();
    var tmp_3 = this;
    tmp_3.Center_1 = new Arrangement$Center$1();
    var tmp_4 = this;
    tmp_4.SpaceEvenly_1 = new Arrangement$SpaceEvenly$1();
    var tmp_5 = this;
    tmp_5.SpaceBetween_1 = new Arrangement$SpaceBetween$1();
    var tmp_6 = this;
    tmp_6.SpaceAround_1 = new Arrangement$SpaceAround$1();
  }
  protoOf(Arrangement).get_Start_ih4i6x_k$ = function () {
    return this.Start_1;
  };
  protoOf(Arrangement).get_End_18ju7i_k$ = function () {
    return this.End_1;
  };
  protoOf(Arrangement).get_Top_18jj1w_k$ = function () {
    return this.Top_1;
  };
  protoOf(Arrangement).get_Bottom_3m75bg_k$ = function () {
    return this.Bottom_1;
  };
  protoOf(Arrangement).get_Center_3arb0i_k$ = function () {
    return this.Center_1;
  };
  protoOf(Arrangement).get_SpaceEvenly_3s2yx0_k$ = function () {
    return this.SpaceEvenly_1;
  };
  protoOf(Arrangement).get_SpaceBetween_5p3wqd_k$ = function () {
    return this.SpaceBetween_1;
  };
  protoOf(Arrangement).get_SpaceAround_1tvu22_k$ = function () {
    return this.SpaceAround_1;
  };
  protoOf(Arrangement).spacedBy_wt7oji_k$ = function (space) {
    return new SpacedAligned(space, true, Arrangement$spacedBy$lambda);
  };
  protoOf(Arrangement).spacedBy_k2qzj_k$ = function (space, alignment) {
    return new SpacedAligned(space, true, Arrangement$spacedBy$lambda_0(alignment));
  };
  protoOf(Arrangement).spacedBy_ree0zx_k$ = function (space, alignment) {
    return new SpacedAligned(space, false, Arrangement$spacedBy$lambda_1(alignment));
  };
  protoOf(Arrangement).aligned_ze1awx_k$ = function (alignment) {
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp = _Dp___init__impl__ms3zkb(0);
    return new SpacedAligned(tmp, true, Arrangement$aligned$lambda(alignment));
  };
  protoOf(Arrangement).aligned_wvl7yp_k$ = function (alignment) {
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp = _Dp___init__impl__ms3zkb(0);
    return new SpacedAligned(tmp, false, Arrangement$aligned$lambda_0(alignment));
  };
  protoOf(Arrangement).placeRightOrBottom_mvrfcw_k$ = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.foundation.layout.Arrangement.placeRightOrBottom.<anonymous>' call
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    var current = totalSize - consumedSize | 0;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeRightOrBottom.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        outPosition[tmp1] = current;
        current = current + item | 0;
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeRightOrBottom.<anonymous>' call
          var it = size[i];
          outPosition[i] = current;
          current = current + it | 0;
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).placeLeftOrTop_usczpt_k$ = function (size, outPosition, reverseInput) {
    var current = 0;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable = 0;
      var last = size.length;
      while (inductionVariable < last) {
        var item = size[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeLeftOrTop.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        outPosition[tmp1] = current;
        current = current + item | 0;
      }
    } else {
      var inductionVariable_0 = size.length - 1 | 0;
      if (0 <= inductionVariable_0)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeLeftOrTop.<anonymous>' call
          var it = size[i];
          outPosition[i] = current;
          current = current + it | 0;
        }
         while (0 <= inductionVariable_0);
    }
  };
  protoOf(Arrangement).placeCenter_xrj2p3_k$ = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.foundation.layout.Arrangement.placeCenter.<anonymous>' call
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    var current = (totalSize - consumedSize | 0) / 2;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeCenter.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        // Inline function 'kotlin.math.roundToInt' call
        var this_0 = current;
        outPosition[tmp1] = roundToInt(this_0);
        current = current + item;
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeCenter.<anonymous>' call
          var it = size[i];
          // Inline function 'kotlin.math.roundToInt' call
          var this_1 = current;
          outPosition[i] = roundToInt(this_1);
          current = current + it;
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).placeSpaceEvenly_b3a0ir_k$ = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceEvenly.<anonymous>' call
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    var gapSize = (totalSize - consumedSize | 0) / (size.length + 1 | 0);
    var current = gapSize;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceEvenly.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        // Inline function 'kotlin.math.roundToInt' call
        var this_0 = current;
        outPosition[tmp1] = roundToInt(this_0);
        current = current + (item + gapSize);
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceEvenly.<anonymous>' call
          var it = size[i];
          // Inline function 'kotlin.math.roundToInt' call
          var this_1 = current;
          outPosition[i] = roundToInt(this_1);
          current = current + (it + gapSize);
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).placeSpaceBetween_ufunae_k$ = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (size.length === 0)
      return Unit_getInstance();
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceBetween.<anonymous>' call
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    // Inline function 'kotlin.comparisons.maxOf' call
    var a = get_lastIndex(size);
    var noOfGaps = Math.max(a, 1);
    var gapSize = (totalSize - consumedSize | 0) / noOfGaps;
    var current = 0.0;
    if (reverseInput ? size.length === 1 : false) {
      current = gapSize;
    }
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceBetween.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        // Inline function 'kotlin.math.roundToInt' call
        var this_0 = current;
        outPosition[tmp1] = roundToInt(this_0);
        current = current + (item + gapSize);
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceBetween.<anonymous>' call
          var it = size[i];
          // Inline function 'kotlin.math.roundToInt' call
          var this_1 = current;
          outPosition[i] = roundToInt(this_1);
          current = current + (it + gapSize);
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).placeSpaceAround_u3zv49_k$ = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceAround.<anonymous>' call
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(size.length === 0)) {
      tmp = (totalSize - consumedSize | 0) / size.length;
    } else {
      tmp = 0.0;
    }
    var gapSize = tmp;
    var current = gapSize / 2;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceAround.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        // Inline function 'kotlin.math.roundToInt' call
        var this_0 = current;
        outPosition[tmp1] = roundToInt(this_0);
        current = current + (item + gapSize);
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceAround.<anonymous>' call
          var it = size[i];
          // Inline function 'kotlin.math.roundToInt' call
          var this_1 = current;
          outPosition[i] = roundToInt(this_1);
          current = current + (it + gapSize);
        }
         while (0 <= inductionVariable_1);
    }
  };
  var Arrangement_instance;
  function Arrangement_getInstance() {
    if (Arrangement_instance == null)
      new Arrangement();
    return Arrangement_instance;
  }
  function get_DefaultBoxMeasurePolicy() {
    _init_properties_Box_kt__tvzvdl();
    return DefaultBoxMeasurePolicy;
  }
  var DefaultBoxMeasurePolicy;
  function get_EmptyBoxMeasurePolicy() {
    _init_properties_Box_kt__tvzvdl();
    return EmptyBoxMeasurePolicy;
  }
  var EmptyBoxMeasurePolicy;
  function _get_alignment__wcztn2($this) {
    return $this.alignment_1;
  }
  function _get_propagateMinConstraints__xgo1gc($this) {
    return $this.propagateMinConstraints_1;
  }
  function component1($this) {
    return $this.alignment_1;
  }
  function component2($this) {
    return $this.propagateMinConstraints_1;
  }
  function BoxMeasurePolicy$measure$lambda($this$layout) {
    return Unit_getInstance();
  }
  function BoxMeasurePolicy$measure$lambda_0($placeable, $measurable, $this_measure, $boxWidth, $boxHeight, this$0) {
    return function ($this$layout) {
      placeInBox($this$layout, $placeable, $measurable, $this_measure.get_layoutDirection_7e37v0_k$(), $boxWidth, $boxHeight, this$0.alignment_1);
      return Unit_getInstance();
    };
  }
  function BoxMeasurePolicy$measure$lambda_1($placeables, $measurables, $this_measure, $boxWidth, $boxHeight, this$0) {
    return function ($this$layout) {
      var index = 0;
      var indexedObject = $placeables;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.BoxMeasurePolicy.measure.<anonymous>.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        if (!(item instanceof Placeable))
          THROW_CCE();
        var measurable = $measurables.get_c1px32_k$(tmp1);
        placeInBox($this$layout, item, measurable, $this_measure.get_layoutDirection_7e37v0_k$(), $boxWidth._v, $boxHeight._v, this$0.alignment_1);
      }
      return Unit_getInstance();
    };
  }
  function BoxMeasurePolicy(alignment, propagateMinConstraints) {
    this.alignment_1 = alignment;
    this.propagateMinConstraints_1 = propagateMinConstraints;
  }
  protoOf(BoxMeasurePolicy).measure_xg9b01_k$ = function (_this__u8e3s4, measurables, constraints) {
    if (measurables.isEmpty_y1axqb_k$()) {
      var tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints);
      var tmp_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints);
      return _this__u8e3s4.layout$default_n19e5l_k$(tmp, tmp_0, VOID, BoxMeasurePolicy$measure$lambda);
    }
    var tmp_1;
    if (this.propagateMinConstraints_1) {
      tmp_1 = constraints;
    } else {
      tmp_1 = Constraints__copy$default_impl_f452rp(constraints, 0, VOID, 0);
    }
    var contentConstraints = tmp_1;
    if (measurables.get_size_woubt6_k$() === 1) {
      var measurable = measurables.get_c1px32_k$(0);
      var boxWidth;
      var boxHeight;
      var placeable;
      if (!get_matchesParentSize(measurable)) {
        placeable = measurable.measure_4dmfk1_k$(contentConstraints);
        // Inline function 'kotlin.math.max' call
        var a = _Constraints___get_minWidth__impl__hi9lfi(constraints);
        var b = placeable.get_width_j0q4yl_k$();
        boxWidth = Math.max(a, b);
        // Inline function 'kotlin.math.max' call
        var a_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints);
        var b_0 = placeable.get_height_e7t92o_k$();
        boxHeight = Math.max(a_0, b_0);
      } else {
        boxWidth = _Constraints___get_minWidth__impl__hi9lfi(constraints);
        boxHeight = _Constraints___get_minHeight__impl__ev4bgx(constraints);
        placeable = measurable.measure_4dmfk1_k$(Companion_getInstance_0().fixed_rd8fwx_k$(_Constraints___get_minWidth__impl__hi9lfi(constraints), _Constraints___get_minHeight__impl__ev4bgx(constraints)));
      }
      return _this__u8e3s4.layout$default_n19e5l_k$(boxWidth, boxHeight, VOID, BoxMeasurePolicy$measure$lambda_0(placeable, measurable, _this__u8e3s4, boxWidth, boxHeight, this));
    }
    // Inline function 'kotlin.arrayOfNulls' call
    var size = measurables.get_size_woubt6_k$();
    var placeables = fillArrayVal(Array(size), null);
    var hasMatchParentSizeChildren = false;
    var boxWidth_0 = {_v: _Constraints___get_minWidth__impl__hi9lfi(constraints)};
    var boxHeight_0 = {_v: _Constraints___get_minHeight__impl__ev4bgx(constraints)};
    // Inline function 'androidx.compose.ui.util.fastForEachIndexed' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = measurables.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = measurables.get_c1px32_k$(index);
        // Inline function 'androidx.compose.foundation.layout.BoxMeasurePolicy.measure.<anonymous>' call
        if (!get_matchesParentSize(item)) {
          var placeable_0 = item.measure_4dmfk1_k$(contentConstraints);
          placeables[index] = placeable_0;
          // Inline function 'kotlin.math.max' call
          var a_1 = boxWidth_0._v;
          var b_1 = placeable_0.get_width_j0q4yl_k$();
          boxWidth_0._v = Math.max(a_1, b_1);
          // Inline function 'kotlin.math.max' call
          var a_2 = boxHeight_0._v;
          var b_2 = placeable_0.get_height_e7t92o_k$();
          boxHeight_0._v = Math.max(a_2, b_2);
        } else {
          hasMatchParentSizeChildren = true;
        }
      }
       while (inductionVariable <= last);
    if (hasMatchParentSizeChildren) {
      var tmp0_minWidth = !(boxWidth_0._v === Companion_getInstance_0().get_Infinity_rvchkf_k$()) ? boxWidth_0._v : 0;
      var tmp1_minHeight = !(boxHeight_0._v === Companion_getInstance_0().get_Infinity_rvchkf_k$()) ? boxHeight_0._v : 0;
      var tmp2_maxWidth = boxWidth_0._v;
      var tmp3_maxHeight = boxHeight_0._v;
      var matchParentSizeConstraints = Constraints(tmp0_minWidth, tmp2_maxWidth, tmp1_minHeight, tmp3_maxHeight);
      // Inline function 'androidx.compose.ui.util.fastForEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = measurables.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = measurables.get_c1px32_k$(index_0);
          // Inline function 'androidx.compose.foundation.layout.BoxMeasurePolicy.measure.<anonymous>' call
          if (get_matchesParentSize(item_0)) {
            placeables[index_0] = item_0.measure_4dmfk1_k$(matchParentSizeConstraints);
          }
        }
         while (inductionVariable_0 <= last_0);
    }
    var tmp_2 = boxWidth_0._v;
    var tmp_3 = boxHeight_0._v;
    return _this__u8e3s4.layout$default_n19e5l_k$(tmp_2, tmp_3, VOID, BoxMeasurePolicy$measure$lambda_1(placeables, measurables, _this__u8e3s4, boxWidth_0, boxHeight_0, this));
  };
  protoOf(BoxMeasurePolicy).copy_rn860z_k$ = function (alignment, propagateMinConstraints) {
    return new BoxMeasurePolicy(alignment, propagateMinConstraints);
  };
  protoOf(BoxMeasurePolicy).copy$default_sj1k1e_k$ = function (alignment, propagateMinConstraints, $super) {
    alignment = alignment === VOID ? this.alignment_1 : alignment;
    propagateMinConstraints = propagateMinConstraints === VOID ? this.propagateMinConstraints_1 : propagateMinConstraints;
    return $super === VOID ? this.copy_rn860z_k$(alignment, propagateMinConstraints) : $super.copy_rn860z_k$.call(this, alignment, propagateMinConstraints);
  };
  protoOf(BoxMeasurePolicy).toString = function () {
    return 'BoxMeasurePolicy(alignment=' + this.alignment_1 + ', propagateMinConstraints=' + this.propagateMinConstraints_1 + ')';
  };
  protoOf(BoxMeasurePolicy).hashCode = function () {
    var result = hashCode(this.alignment_1);
    result = imul(result, 31) + getBooleanHashCode(this.propagateMinConstraints_1) | 0;
    return result;
  };
  protoOf(BoxMeasurePolicy).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BoxMeasurePolicy))
      return false;
    var tmp0_other_with_cast = other instanceof BoxMeasurePolicy ? other : THROW_CCE();
    if (!equals(this.alignment_1, tmp0_other_with_cast.alignment_1))
      return false;
    if (!(this.propagateMinConstraints_1 === tmp0_other_with_cast.propagateMinConstraints_1))
      return false;
    return true;
  };
  function get_matchesParentSize(_this__u8e3s4) {
    _init_properties_Box_kt__tvzvdl();
    var tmp0_safe_receiver = get_boxChildDataNode(_this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.matchParentSize_1;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  function placeInBox(_this__u8e3s4, placeable, measurable, layoutDirection, boxWidth, boxHeight, alignment) {
    _init_properties_Box_kt__tvzvdl();
    var tmp0_safe_receiver = get_boxChildDataNode(measurable);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.alignment_1;
    var childAlignment = tmp1_elvis_lhs == null ? alignment : tmp1_elvis_lhs;
    var position = childAlignment.align_mb8mzc_k$(IntSize(placeable.get_width_j0q4yl_k$(), placeable.get_height_e7t92o_k$()), IntSize(boxWidth, boxHeight), layoutDirection);
    _this__u8e3s4.place$default_gmqxva_k$(placeable, position);
  }
  function BoxChildDataNode(alignment, matchParentSize) {
    Node.call(this);
    this.alignment_1 = alignment;
    this.matchParentSize_1 = matchParentSize;
  }
  protoOf(BoxChildDataNode).set_alignment_b4ulsx_k$ = function (_set____db54di) {
    this.alignment_1 = _set____db54di;
  };
  protoOf(BoxChildDataNode).get_alignment_xa1jnq_k$ = function () {
    return this.alignment_1;
  };
  protoOf(BoxChildDataNode).set_matchParentSize_u0byam_k$ = function (_set____db54di) {
    this.matchParentSize_1 = _set____db54di;
  };
  protoOf(BoxChildDataNode).get_matchParentSize_onsyh3_k$ = function () {
    return this.matchParentSize_1;
  };
  protoOf(BoxChildDataNode).modifyParentData_nittj_k$ = function (_this__u8e3s4, parentData) {
    return this;
  };
  function get_boxChildDataNode(_this__u8e3s4) {
    _init_properties_Box_kt__tvzvdl();
    var tmp = _this__u8e3s4.get_parentData_o87vnn_k$();
    return tmp instanceof BoxChildDataNode ? tmp : null;
  }
  function Box(modifier, $composer, $changed) {
    _init_properties_Box_kt__tvzvdl();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-211209833);
    sourceInformation($composer_0, 'C(Box)208@8172L66:Box.kt#2w3rfo');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-211209833, $dirty, -1, 'androidx.compose.foundation.layout.Box (Box.kt:207)');
      }
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var measurePolicy = get_EmptyBoxMeasurePolicy();
      var modifier_0 = modifier;
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(544976794);
      sourceInformation($composer_1, 'CC(Layout)P(1)124@4810L23,127@4961L385:Layout.kt#80mrfh');
      if (!((0 & 1) === 0))
        modifier_0 = Companion_getInstance_1();
      var compositeKeyHash = get_currentCompositeKeyHash($composer_1, 0);
      var materialized = materialize($composer_1, modifier_0);
      var localMap = $composer_1.get_currentCompositionLocalMap_fmcf79_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      var $composer_2 = $composer_1;
      $composer_2.startReplaceableGroup_ip860b_k$(1405779621);
      sourceInformation($composer_2, 'CC(ReusableComposeNode):Composables.kt#9igjgp');
      var tmp = $composer_2.get_applier_bupu8u_k$();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_2.startReusableNode_jjgeyp_k$();
      if ($composer_2.get_inserting_25mlsw_k$()) {
        var tmp_0 = $composer_2;
        tmp_0.createNode_ahrd54_k$(Box$lambda(factory));
      } else {
        $composer_2.useNode_io5s9l_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_2);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      var tmp_1;
      if ($this$with.get_inserting_25mlsw_k$() ? true : !equals($this$with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
        $this$with.updateRememberedValue_l1wh71_k$(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).apply_pk82p8_k$(compositeKeyHash, block);
        tmp_1 = Unit_getInstance();
      }
      $composer_2.endNode_3m0yfn_k$();
      $composer_2.endReplaceableGroup_ern0ak_k$();
      $composer_1.endReplaceableGroup_ern0ak_k$();
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(Box$lambda_0(modifier, $changed));
    }
  }
  function Box_0(modifier, contentAlignment, propagateMinConstraints, content, $composer, $changed, $default) {
    _init_properties_Box_kt__tvzvdl();
    var modifier_0 = modifier;
    var contentAlignment_0 = contentAlignment;
    var propagateMinConstraints_0 = propagateMinConstraints;
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(733328855);
    sourceInformation($composer_0, 'CC(Box)P(2,1,3)71@3309L67,72@3381L130:Box.kt#2w3rfo');
    if (!(($default & 1) === 0))
      modifier_0 = Companion_getInstance_1();
    if (!(($default & 2) === 0))
      contentAlignment_0 = Companion_getInstance().get_TopStart_o4x792_k$();
    if (!(($default & 4) === 0))
      propagateMinConstraints_0 = false;
    var measurePolicy = rememberBoxMeasurePolicy(contentAlignment_0, propagateMinConstraints_0, $composer_0, 14 & $changed >> 3 | 112 & $changed >> 3);
    // Inline function 'androidx.compose.ui.layout.Layout' call
    var modifier_1 = modifier_0;
    var $changed_0 = 112 & $changed << 3;
    var modifier_2 = modifier_1;
    var $composer_1 = $composer_0;
    $composer_1.startReplaceableGroup_ip860b_k$(-1323940314);
    sourceInformation($composer_1, 'CC(Layout)P(!1,2)79@3208L23,81@3298L420:Layout.kt#80mrfh');
    if (!((0 & 2) === 0))
      modifier_2 = Companion_getInstance_1();
    var compositeKeyHash = get_currentCompositeKeyHash($composer_1, 0);
    var localMap = $composer_1.get_currentCompositionLocalMap_fmcf79_k$();
    // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
    var factory = Companion_getInstance_2().get_Constructor_f7ieep_k$();
    var skippableUpdate = materializerOf(modifier_2);
    var $changed_1 = 6 | 7168 & $changed_0 << 9;
    var $composer_2 = $composer_1;
    var tmp = $composer_2.get_applier_bupu8u_k$();
    if (!isInterface(tmp, Applier)) {
      invalidApplier();
    }
    $composer_2.startReusableNode_jjgeyp_k$();
    if ($composer_2.get_inserting_25mlsw_k$()) {
      $composer_2.createNode_ahrd54_k$(factory);
    } else {
      $composer_2.useNode_io5s9l_k$();
    }
    // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
    var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_2);
    Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
    Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
    // Inline function 'androidx.compose.runtime.Updater.set' call
    var block = Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$();
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
    var tmp_0;
    if ($this$with.get_inserting_25mlsw_k$() ? true : !equals($this$with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
      $this$with.updateRememberedValue_l1wh71_k$(compositeKeyHash);
      _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).apply_pk82p8_k$(compositeKeyHash, block);
      tmp_0 = Unit_getInstance();
    }
    skippableUpdate(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_2)), $composer_2, 112 & $changed_1 >> 3);
    $composer_2.startReplaceableGroup_ip860b_k$(2058660585);
    // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
    var $composer_3 = $composer_2;
    sourceInformationMarkerStart($composer_3, -1253629263, 'C73@3426L9:Box.kt#2w3rfo');
    content(BoxScopeInstance_getInstance(), $composer_3, 6 | 112 & $changed >> 6);
    sourceInformationMarkerEnd($composer_3);
    $composer_2.endReplaceableGroup_ern0ak_k$();
    $composer_2.endNode_3m0yfn_k$();
    $composer_1.endReplaceableGroup_ern0ak_k$();
    $composer_0.endReplaceableGroup_ern0ak_k$();
  }
  function BoxScope() {
  }
  function rememberBoxMeasurePolicy(alignment, propagateMinConstraints, $composer, $changed) {
    _init_properties_Box_kt__tvzvdl();
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(56522820);
    sourceInformation($composer_0, 'C(rememberBoxMeasurePolicy)87@3770L113:Box.kt#2w3rfo');
    if (isTraceInProgress()) {
      traceEventStart(56522820, $changed, -1, 'androidx.compose.foundation.layout.rememberBoxMeasurePolicy (Box.kt:84)');
    }
    var tmp;
    if (equals(alignment, Companion_getInstance().get_TopStart_o4x792_k$()) ? !propagateMinConstraints : false) {
      tmp = get_DefaultBoxMeasurePolicy();
    } else {
      $composer_0.startReplaceableGroup_ip860b_k$(2076429406);
      sourceInformation($composer_0, 'CC(remember):Box.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(((($changed & 14 ^ 6) > 4 ? $composer_0.changed_ga7h3f_k$(alignment) : false) ? true : ($changed & 6) === 4) | ((($changed & 112 ^ 48) > 32 ? $composer_0.changed_jpyyrz_k$(propagateMinConstraints) : false) ? true : ($changed & 48) === 32));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid ? true : it === Companion_getInstance_3().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.compose.foundation.layout.rememberBoxMeasurePolicy.<anonymous>' call
        var value = new BoxMeasurePolicy(alignment, propagateMinConstraints);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp1_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      tmp = tmp1_group;
    }
    var tmp0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  }
  function BoxScopeInstance$align$lambda($alignment) {
    return function ($this$null) {
      $this$null.set_name_wkmnld_k$('align');
      $this$null.set_value_rjqr2d_k$($alignment);
      return Unit_getInstance();
    };
  }
  function BoxScopeInstance$matchParentSize$lambda($this$null) {
    // Inline function 'androidx.compose.foundation.layout.BoxScopeInstance.matchParentSize.<anonymous>' call
    $this$null.set_name_wkmnld_k$('matchParentSize');
    return Unit_getInstance();
  }
  function BoxScopeInstance() {
    BoxScopeInstance_instance = this;
  }
  protoOf(BoxScopeInstance).align_uxv7cf_k$ = function (_this__u8e3s4, alignment) {
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = BoxScopeInstance$align$lambda(alignment);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp$ret$0 = tmp;
    return _this__u8e3s4.then_g5qrxq_k$(new BoxChildDataElement(alignment, false, tmp$ret$0));
  };
  protoOf(BoxScopeInstance).matchParentSize_g7jbar_k$ = function (_this__u8e3s4) {
    var tmp = Companion_getInstance().get_Center_3arb0i_k$();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp_0;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp_0 = BoxScopeInstance$matchParentSize$lambda;
    } else {
      tmp_0 = get_NoInspectorInfo();
    }
    var tmp$ret$0 = tmp_0;
    return _this__u8e3s4.then_g5qrxq_k$(new BoxChildDataElement(tmp, true, tmp$ret$0));
  };
  var BoxScopeInstance_instance;
  function BoxScopeInstance_getInstance() {
    if (BoxScopeInstance_instance == null)
      new BoxScopeInstance();
    return BoxScopeInstance_instance;
  }
  function BoxChildDataElement(alignment, matchParentSize, inspectorInfo) {
    ModifierNodeElement.call(this);
    this.alignment_1 = alignment;
    this.matchParentSize_1 = matchParentSize;
    this.inspectorInfo_1 = inspectorInfo;
  }
  protoOf(BoxChildDataElement).get_alignment_xa1jnq_k$ = function () {
    return this.alignment_1;
  };
  protoOf(BoxChildDataElement).get_matchParentSize_onsyh3_k$ = function () {
    return this.matchParentSize_1;
  };
  protoOf(BoxChildDataElement).get_inspectorInfo_jx2bdo_k$ = function () {
    return this.inspectorInfo_1;
  };
  protoOf(BoxChildDataElement).create_md4cuc_k$ = function () {
    return new BoxChildDataNode(this.alignment_1, this.matchParentSize_1);
  };
  protoOf(BoxChildDataElement).update_6wuvmq_k$ = function (node) {
    node.alignment_1 = this.alignment_1;
    node.matchParentSize_1 = this.matchParentSize_1;
  };
  protoOf(BoxChildDataElement).update_9wd57p_k$ = function (node) {
    return this.update_6wuvmq_k$(node instanceof BoxChildDataNode ? node : THROW_CCE());
  };
  protoOf(BoxChildDataElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    this.inspectorInfo_1(_this__u8e3s4);
  };
  protoOf(BoxChildDataElement).hashCode = function () {
    var result = hashCode(this.alignment_1);
    result = imul(31, result) + getBooleanHashCode(this.matchParentSize_1) | 0;
    return result;
  };
  protoOf(BoxChildDataElement).equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof BoxChildDataElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return equals(this.alignment_1, otherModifier.alignment_1) ? this.matchParentSize_1 === otherModifier.matchParentSize_1 : false;
  };
  function sam$androidx_compose_ui_layout_MeasurePolicy$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).measure_xg9b01_k$ = function (_this__u8e3s4, measurables, constraints) {
    return this.function_1(_this__u8e3s4, measurables, new Constraints_0(constraints));
  };
  function EmptyBoxMeasurePolicy$lambda($this$MeasurePolicy, _anonymous_parameter_0__qggqh8, constraints) {
    _init_properties_Box_kt__tvzvdl();
    var tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints.value_1);
    var tmp_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints.value_1);
    return $this$MeasurePolicy.layout$default_n19e5l_k$(tmp, tmp_0, VOID, EmptyBoxMeasurePolicy$lambda$lambda);
  }
  function EmptyBoxMeasurePolicy$lambda$lambda($this$layout) {
    _init_properties_Box_kt__tvzvdl();
    return Unit_getInstance();
  }
  function Box$lambda($factory) {
    return function () {
      return $factory();
    };
  }
  function Box$lambda_0($modifier, $$changed) {
    return function ($composer, $force) {
      Box($modifier, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var properties_initialized_Box_kt_kr8cbp;
  function _init_properties_Box_kt__tvzvdl() {
    if (!properties_initialized_Box_kt_kr8cbp) {
      properties_initialized_Box_kt_kr8cbp = true;
      DefaultBoxMeasurePolicy = new BoxMeasurePolicy(Companion_getInstance().get_TopStart_o4x792_k$(), false);
      var tmp = EmptyBoxMeasurePolicy$lambda;
      EmptyBoxMeasurePolicy = new sam$androidx_compose_ui_layout_MeasurePolicy$0(tmp);
    }
  }
  function get_DefaultColumnMeasurePolicy() {
    _init_properties_Column_kt__s1zb92();
    return DefaultColumnMeasurePolicy;
  }
  var DefaultColumnMeasurePolicy;
  var properties_initialized_Column_kt_nm4x4;
  function _init_properties_Column_kt__s1zb92() {
    if (!properties_initialized_Column_kt_nm4x4) {
      properties_initialized_Column_kt_nm4x4 = true;
      var tmp0_orientation = LayoutOrientation_Vertical_getInstance();
      var tmp1_verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
      var tmp2_arrangementSpacing = Arrangement_getInstance().get_Top_18jj1w_k$().get_spacing_zb7agn_k$();
      var tmp3_crossAxisAlignment = Companion_getInstance_7().horizontal_pytg75_k$(Companion_getInstance().get_Start_ih4i6x_k$());
      var tmp4_crossAxisSize = SizeMode_Wrap_getInstance();
      DefaultColumnMeasurePolicy = new RowColumnMeasurePolicy(tmp0_orientation, null, tmp1_verticalArrangement, tmp2_arrangementSpacing, tmp4_crossAxisSize, tmp3_crossAxisAlignment);
    }
  }
  function get_CROSS_AXIS_ALIGNMENT_TOP() {
    _init_properties_FlowLayout_kt__ftkyso();
    return CROSS_AXIS_ALIGNMENT_TOP;
  }
  var CROSS_AXIS_ALIGNMENT_TOP;
  function get_CROSS_AXIS_ALIGNMENT_START() {
    _init_properties_FlowLayout_kt__ftkyso();
    return CROSS_AXIS_ALIGNMENT_START;
  }
  var CROSS_AXIS_ALIGNMENT_START;
  var properties_initialized_FlowLayout_kt_edjldy;
  function _init_properties_FlowLayout_kt__ftkyso() {
    if (!properties_initialized_FlowLayout_kt_edjldy) {
      properties_initialized_FlowLayout_kt_edjldy = true;
      CROSS_AXIS_ALIGNMENT_TOP = Companion_getInstance_7().vertical_tld729_k$(Companion_getInstance().get_Top_18jj1w_k$());
      CROSS_AXIS_ALIGNMENT_START = Companion_getInstance_7().horizontal_pytg75_k$(Companion_getInstance().get_Start_ih4i6x_k$());
    }
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
    return '@androidx.compose.foundation.layout.LayoutScopeMarker()';
  };
  function _get_left__d9qyp0($this) {
    return $this.left_1;
  }
  function _get_top__e6hfbw($this) {
    return $this.top_1;
  }
  function _get_right__bvz45n($this) {
    return $this.right_1;
  }
  function _get_bottom__w3218g($this) {
    return $this.bottom_1;
  }
  function Absolute_0(left, top, right, bottom) {
    var tmp;
    if (left === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = left;
    }
    left = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (right === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = right;
    }
    right = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    this.left_1 = left;
    this.top_1 = top;
    this.right_1 = right;
    this.bottom_1 = bottom;
  }
  protoOf(Absolute_0).calculateLeftPadding_trh5z9_k$ = function (layoutDirection) {
    return this.left_1;
  };
  protoOf(Absolute_0).calculateTopPadding_vlylwf_k$ = function () {
    return this.top_1;
  };
  protoOf(Absolute_0).calculateRightPadding_yc2gi_k$ = function (layoutDirection) {
    return this.right_1;
  };
  protoOf(Absolute_0).calculateBottomPadding_6z7ugt_k$ = function () {
    return this.bottom_1;
  };
  protoOf(Absolute_0).equals = function (other) {
    if (!(other instanceof Absolute_0))
      return false;
    return ((equals(this.left_1, other.left_1) ? equals(this.top_1, other.top_1) : false) ? equals(this.right_1, other.right_1) : false) ? equals(this.bottom_1, other.bottom_1) : false;
  };
  protoOf(Absolute_0).hashCode = function () {
    return imul(imul(imul(Dp__hashCode_impl_sxkrra(this.left_1), 31) + Dp__hashCode_impl_sxkrra(this.top_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.right_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.bottom_1) | 0;
  };
  protoOf(Absolute_0).toString = function () {
    return 'PaddingValues.Absolute(left=' + new Dp(this.left_1) + ', top=' + new Dp(this.top_1) + ', right=' + new Dp(this.right_1) + ', bottom=' + new Dp(this.bottom_1) + ')';
  };
  function PaddingValues() {
  }
  function PaddingValues_0(all) {
    return new PaddingValuesImpl(all, all, all, all);
  }
  function PaddingValues_1(start, top, end, bottom) {
    var tmp;
    if (start === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    return new PaddingValuesImpl(start, top, end, bottom);
  }
  function PaddingValues_2(horizontal, vertical) {
    var tmp;
    if (horizontal === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = horizontal;
    }
    horizontal = tmp;
    var tmp_0;
    if (vertical === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = vertical;
    }
    vertical = tmp_0;
    return new PaddingValuesImpl(horizontal, vertical, horizontal, vertical);
  }
  function padding(_this__u8e3s4, horizontal, vertical) {
    var tmp;
    if (horizontal === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = horizontal;
    }
    horizontal = tmp;
    var tmp_0;
    if (vertical === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = vertical;
    }
    vertical = tmp_0;
    return _this__u8e3s4.then_g5qrxq_k$(new PaddingElement(horizontal, vertical, horizontal, vertical, true, padding$lambda(horizontal, vertical)));
  }
  function calculateStartPadding(_this__u8e3s4, layoutDirection) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      tmp = _this__u8e3s4.calculateLeftPadding_trh5z9_k$(layoutDirection);
    } else {
      tmp = _this__u8e3s4.calculateRightPadding_yc2gi_k$(layoutDirection);
    }
    return tmp;
  }
  function calculateEndPadding(_this__u8e3s4, layoutDirection) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      tmp = _this__u8e3s4.calculateRightPadding_yc2gi_k$(layoutDirection);
    } else {
      tmp = _this__u8e3s4.calculateLeftPadding_trh5z9_k$(layoutDirection);
    }
    return tmp;
  }
  function padding_0(_this__u8e3s4, start, top, end, bottom) {
    var tmp;
    if (start === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    return _this__u8e3s4.then_g5qrxq_k$(new PaddingElement(start, top, end, bottom, true, padding$lambda_0(start, top, end, bottom)));
  }
  function padding_1(_this__u8e3s4, paddingValues) {
    return _this__u8e3s4.then_g5qrxq_k$(new PaddingValuesElement(paddingValues, padding$lambda_1(paddingValues)));
  }
  function PaddingValuesImpl(start, top, end, bottom) {
    var tmp;
    if (start === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    this.start_1 = start;
    this.top_1 = top;
    this.end_1 = end;
    this.bottom_1 = bottom;
  }
  protoOf(PaddingValuesImpl).get_start_ehpdnu_k$ = function () {
    return this.start_1;
  };
  protoOf(PaddingValuesImpl).get_top_t6yz49_k$ = function () {
    return this.top_1;
  };
  protoOf(PaddingValuesImpl).get_end_hk2rin_k$ = function () {
    return this.end_1;
  };
  protoOf(PaddingValuesImpl).get_bottom_sk2u7j_k$ = function () {
    return this.bottom_1;
  };
  protoOf(PaddingValuesImpl).calculateLeftPadding_trh5z9_k$ = function (layoutDirection) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? this.start_1 : this.end_1;
  };
  protoOf(PaddingValuesImpl).calculateTopPadding_vlylwf_k$ = function () {
    return this.top_1;
  };
  protoOf(PaddingValuesImpl).calculateRightPadding_yc2gi_k$ = function (layoutDirection) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? this.end_1 : this.start_1;
  };
  protoOf(PaddingValuesImpl).calculateBottomPadding_6z7ugt_k$ = function () {
    return this.bottom_1;
  };
  protoOf(PaddingValuesImpl).equals = function (other) {
    if (!(other instanceof PaddingValuesImpl))
      return false;
    return ((equals(this.start_1, other.start_1) ? equals(this.top_1, other.top_1) : false) ? equals(this.end_1, other.end_1) : false) ? equals(this.bottom_1, other.bottom_1) : false;
  };
  protoOf(PaddingValuesImpl).hashCode = function () {
    return imul(imul(imul(Dp__hashCode_impl_sxkrra(this.start_1), 31) + Dp__hashCode_impl_sxkrra(this.top_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.end_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.bottom_1) | 0;
  };
  protoOf(PaddingValuesImpl).toString = function () {
    return 'PaddingValues(start=' + new Dp(this.start_1) + ', top=' + new Dp(this.top_1) + ', end=' + new Dp(this.end_1) + ', bottom=' + new Dp(this.bottom_1) + ')';
  };
  function PaddingElement(start, top, end, bottom, rtlAware, inspectorInfo) {
    var tmp;
    if (start === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    ModifierNodeElement.call(this);
    this.start_1 = start;
    this.top_1 = top;
    this.end_1 = end;
    this.bottom_1 = bottom;
    this.rtlAware_1 = rtlAware;
    this.inspectorInfo_1 = inspectorInfo;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((((_Dp___get_value__impl__geb1vb(this.start_1) >= 0.0 ? true : equals(this.start_1, Companion_getInstance_4().get_Unspecified_9b9rm3_k$())) ? _Dp___get_value__impl__geb1vb(this.top_1) >= 0.0 ? true : equals(this.top_1, Companion_getInstance_4().get_Unspecified_9b9rm3_k$()) : false) ? _Dp___get_value__impl__geb1vb(this.end_1) >= 0.0 ? true : equals(this.end_1, Companion_getInstance_4().get_Unspecified_9b9rm3_k$()) : false) ? _Dp___get_value__impl__geb1vb(this.bottom_1) >= 0.0 ? true : equals(this.bottom_1, Companion_getInstance_4().get_Unspecified_9b9rm3_k$()) : false)) {
      // Inline function 'androidx.compose.foundation.layout.PaddingElement.<anonymous>' call
      var message = 'Padding must be non-negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(PaddingElement).set_start_g1n0n6_k$ = function (_set____db54di) {
    this.start_1 = _set____db54di;
  };
  protoOf(PaddingElement).get_start_ehpdnu_k$ = function () {
    return this.start_1;
  };
  protoOf(PaddingElement).set_top_ad6hzl_k$ = function (_set____db54di) {
    this.top_1 = _set____db54di;
  };
  protoOf(PaddingElement).get_top_t6yz49_k$ = function () {
    return this.top_1;
  };
  protoOf(PaddingElement).set_end_cihadz_k$ = function (_set____db54di) {
    this.end_1 = _set____db54di;
  };
  protoOf(PaddingElement).get_end_hk2rin_k$ = function () {
    return this.end_1;
  };
  protoOf(PaddingElement).set_bottom_s6futb_k$ = function (_set____db54di) {
    this.bottom_1 = _set____db54di;
  };
  protoOf(PaddingElement).get_bottom_sk2u7j_k$ = function () {
    return this.bottom_1;
  };
  protoOf(PaddingElement).set_rtlAware_e2bw6c_k$ = function (_set____db54di) {
    this.rtlAware_1 = _set____db54di;
  };
  protoOf(PaddingElement).get_rtlAware_ydysrn_k$ = function () {
    return this.rtlAware_1;
  };
  protoOf(PaddingElement).get_inspectorInfo_jx2bdo_k$ = function () {
    return this.inspectorInfo_1;
  };
  protoOf(PaddingElement).create_md4cuc_k$ = function () {
    return new PaddingNode(this.start_1, this.top_1, this.end_1, this.bottom_1, this.rtlAware_1);
  };
  protoOf(PaddingElement).update_pvlr8i_k$ = function (node) {
    node.start_1 = this.start_1;
    node.top_1 = this.top_1;
    node.end_1 = this.end_1;
    node.bottom_1 = this.bottom_1;
    node.rtlAware_1 = this.rtlAware_1;
  };
  protoOf(PaddingElement).update_9wd57p_k$ = function (node) {
    return this.update_pvlr8i_k$(node instanceof PaddingNode ? node : THROW_CCE());
  };
  protoOf(PaddingElement).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.start_1);
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.top_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.end_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.bottom_1) | 0;
    result = imul(31, result) + getBooleanHashCode(this.rtlAware_1) | 0;
    return result;
  };
  protoOf(PaddingElement).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof PaddingElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifierElement = tmp;
    return (((equals(this.start_1, otherModifierElement.start_1) ? equals(this.top_1, otherModifierElement.top_1) : false) ? equals(this.end_1, otherModifierElement.end_1) : false) ? equals(this.bottom_1, otherModifierElement.bottom_1) : false) ? this.rtlAware_1 === otherModifierElement.rtlAware_1 : false;
  };
  protoOf(PaddingElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    this.inspectorInfo_1(_this__u8e3s4);
  };
  function PaddingValuesElement(paddingValues, inspectorInfo) {
    ModifierNodeElement.call(this);
    this.paddingValues_1 = paddingValues;
    this.inspectorInfo_1 = inspectorInfo;
  }
  protoOf(PaddingValuesElement).get_paddingValues_bdsiui_k$ = function () {
    return this.paddingValues_1;
  };
  protoOf(PaddingValuesElement).get_inspectorInfo_jx2bdo_k$ = function () {
    return this.inspectorInfo_1;
  };
  protoOf(PaddingValuesElement).create_md4cuc_k$ = function () {
    return new PaddingValuesModifier(this.paddingValues_1);
  };
  protoOf(PaddingValuesElement).update_1ky7sl_k$ = function (node) {
    node.paddingValues_1 = this.paddingValues_1;
  };
  protoOf(PaddingValuesElement).update_9wd57p_k$ = function (node) {
    return this.update_1ky7sl_k$(node instanceof PaddingValuesModifier ? node : THROW_CCE());
  };
  protoOf(PaddingValuesElement).hashCode = function () {
    return hashCode(this.paddingValues_1);
  };
  protoOf(PaddingValuesElement).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof PaddingValuesElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherElement = tmp;
    return equals(this.paddingValues_1, otherElement.paddingValues_1);
  };
  protoOf(PaddingValuesElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    this.inspectorInfo_1(_this__u8e3s4);
  };
  function PaddingNode$measure$lambda(this$0, $placeable, $this_measure) {
    return function ($this$layout) {
      var tmp;
      if (this$0.rtlAware_1) {
        $this$layout.placeRelative$default_yv6dex_k$($placeable, $this_measure.roundToPx_yb7vg8_k$(this$0.start_1), $this_measure.roundToPx_yb7vg8_k$(this$0.top_1));
        tmp = Unit_getInstance();
      } else {
        $this$layout.place$default_lcv1ed_k$($placeable, $this_measure.roundToPx_yb7vg8_k$(this$0.start_1), $this_measure.roundToPx_yb7vg8_k$(this$0.top_1));
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function PaddingNode(start, top, end, bottom, rtlAware) {
    var tmp;
    if (start === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    Node.call(this);
    this.start_1 = start;
    this.top_1 = top;
    this.end_1 = end;
    this.bottom_1 = bottom;
    this.rtlAware_1 = rtlAware;
  }
  protoOf(PaddingNode).set_start_g1n0n6_k$ = function (_set____db54di) {
    this.start_1 = _set____db54di;
  };
  protoOf(PaddingNode).get_start_ehpdnu_k$ = function () {
    return this.start_1;
  };
  protoOf(PaddingNode).set_top_ad6hzl_k$ = function (_set____db54di) {
    this.top_1 = _set____db54di;
  };
  protoOf(PaddingNode).get_top_t6yz49_k$ = function () {
    return this.top_1;
  };
  protoOf(PaddingNode).set_end_cihadz_k$ = function (_set____db54di) {
    this.end_1 = _set____db54di;
  };
  protoOf(PaddingNode).get_end_hk2rin_k$ = function () {
    return this.end_1;
  };
  protoOf(PaddingNode).set_bottom_s6futb_k$ = function (_set____db54di) {
    this.bottom_1 = _set____db54di;
  };
  protoOf(PaddingNode).get_bottom_sk2u7j_k$ = function () {
    return this.bottom_1;
  };
  protoOf(PaddingNode).set_rtlAware_e2bw6c_k$ = function (_set____db54di) {
    this.rtlAware_1 = _set____db54di;
  };
  protoOf(PaddingNode).get_rtlAware_ydysrn_k$ = function () {
    return this.rtlAware_1;
  };
  protoOf(PaddingNode).measure_z885gt_k$ = function (_this__u8e3s4, measurable, constraints) {
    var horizontal = _this__u8e3s4.roundToPx_yb7vg8_k$(this.start_1) + _this__u8e3s4.roundToPx_yb7vg8_k$(this.end_1) | 0;
    var vertical = _this__u8e3s4.roundToPx_yb7vg8_k$(this.top_1) + _this__u8e3s4.roundToPx_yb7vg8_k$(this.bottom_1) | 0;
    var placeable = measurable.measure_4dmfk1_k$(offset(constraints, -horizontal | 0, -vertical | 0));
    var width = constrainWidth(constraints, placeable.get_width_j0q4yl_k$() + horizontal | 0);
    var height = constrainHeight(constraints, placeable.get_height_e7t92o_k$() + vertical | 0);
    return _this__u8e3s4.layout$default_n19e5l_k$(width, height, VOID, PaddingNode$measure$lambda(this, placeable, _this__u8e3s4));
  };
  function PaddingValuesModifier$measure$lambda($placeable, $this_measure, this$0) {
    return function ($this$layout) {
      $this$layout.place$default_lcv1ed_k$($placeable, $this_measure.roundToPx_yb7vg8_k$(this$0.paddingValues_1.calculateLeftPadding_trh5z9_k$($this_measure.get_layoutDirection_7e37v0_k$())), $this_measure.roundToPx_yb7vg8_k$(this$0.paddingValues_1.calculateTopPadding_vlylwf_k$()));
      return Unit_getInstance();
    };
  }
  function PaddingValuesModifier(paddingValues) {
    Node.call(this);
    this.paddingValues_1 = paddingValues;
  }
  protoOf(PaddingValuesModifier).set_paddingValues_3xw8eb_k$ = function (_set____db54di) {
    this.paddingValues_1 = _set____db54di;
  };
  protoOf(PaddingValuesModifier).get_paddingValues_bdsiui_k$ = function () {
    return this.paddingValues_1;
  };
  protoOf(PaddingValuesModifier).measure_z885gt_k$ = function (_this__u8e3s4, measurable, constraints) {
    // Inline function 'kotlin.require' call
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2 = this.paddingValues_1.calculateLeftPadding_trh5z9_k$(_this__u8e3s4.get_layoutDirection_7e37v0_k$());
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    if (Dp__compareTo_impl_tlg3dl(tmp_2, tmp$ret$0) >= 0) {
      var tmp_3 = this.paddingValues_1.calculateTopPadding_vlylwf_k$();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$1 = _Dp___init__impl__ms3zkb(0);
      tmp_1 = Dp__compareTo_impl_tlg3dl(tmp_3, tmp$ret$1) >= 0;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      var tmp_4 = this.paddingValues_1.calculateRightPadding_yc2gi_k$(_this__u8e3s4.get_layoutDirection_7e37v0_k$());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$2 = _Dp___init__impl__ms3zkb(0);
      tmp_0 = Dp__compareTo_impl_tlg3dl(tmp_4, tmp$ret$2) >= 0;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp_5 = this.paddingValues_1.calculateBottomPadding_6z7ugt_k$();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$3 = _Dp___init__impl__ms3zkb(0);
      tmp = Dp__compareTo_impl_tlg3dl(tmp_5, tmp$ret$3) >= 0;
    } else {
      tmp = false;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp) {
      // Inline function 'androidx.compose.foundation.layout.PaddingValuesModifier.measure.<anonymous>' call
      var message = 'Padding must be non-negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var horizontal = _this__u8e3s4.roundToPx_yb7vg8_k$(this.paddingValues_1.calculateLeftPadding_trh5z9_k$(_this__u8e3s4.get_layoutDirection_7e37v0_k$())) + _this__u8e3s4.roundToPx_yb7vg8_k$(this.paddingValues_1.calculateRightPadding_yc2gi_k$(_this__u8e3s4.get_layoutDirection_7e37v0_k$())) | 0;
    var vertical = _this__u8e3s4.roundToPx_yb7vg8_k$(this.paddingValues_1.calculateTopPadding_vlylwf_k$()) + _this__u8e3s4.roundToPx_yb7vg8_k$(this.paddingValues_1.calculateBottomPadding_6z7ugt_k$()) | 0;
    var placeable = measurable.measure_4dmfk1_k$(offset(constraints, -horizontal | 0, -vertical | 0));
    var width = constrainWidth(constraints, placeable.get_width_j0q4yl_k$() + horizontal | 0);
    var height = constrainHeight(constraints, placeable.get_height_e7t92o_k$() + vertical | 0);
    return _this__u8e3s4.layout$default_n19e5l_k$(width, height, VOID, PaddingValuesModifier$measure$lambda(placeable, _this__u8e3s4, this));
  };
  function padding$lambda($horizontal, $vertical) {
    return function ($this$$receiver) {
      $this$$receiver.set_name_wkmnld_k$('padding');
      $this$$receiver.get_properties_zhllqc_k$().set_vvveh5_k$('horizontal', new Dp($horizontal));
      $this$$receiver.get_properties_zhllqc_k$().set_vvveh5_k$('vertical', new Dp($vertical));
      return Unit_getInstance();
    };
  }
  function padding$lambda_0($start, $top, $end, $bottom) {
    return function ($this$$receiver) {
      $this$$receiver.set_name_wkmnld_k$('padding');
      $this$$receiver.get_properties_zhllqc_k$().set_vvveh5_k$('start', new Dp($start));
      $this$$receiver.get_properties_zhllqc_k$().set_vvveh5_k$('top', new Dp($top));
      $this$$receiver.get_properties_zhllqc_k$().set_vvveh5_k$('end', new Dp($end));
      $this$$receiver.get_properties_zhllqc_k$().set_vvveh5_k$('bottom', new Dp($bottom));
      return Unit_getInstance();
    };
  }
  function padding$lambda_1($paddingValues) {
    return function ($this$$receiver) {
      $this$$receiver.set_name_wkmnld_k$('padding');
      $this$$receiver.get_properties_zhllqc_k$().set_vvveh5_k$('paddingValues', $paddingValues);
      return Unit_getInstance();
    };
  }
  function get_DefaultRowMeasurePolicy() {
    _init_properties_Row_kt__jenljs();
    return DefaultRowMeasurePolicy;
  }
  var DefaultRowMeasurePolicy;
  var properties_initialized_Row_kt_sbxnna;
  function _init_properties_Row_kt__jenljs() {
    if (!properties_initialized_Row_kt_sbxnna) {
      properties_initialized_Row_kt_sbxnna = true;
      var tmp0_orientation = LayoutOrientation_Horizontal_getInstance();
      var tmp1_horizontalArrangement = Arrangement_getInstance().get_Start_ih4i6x_k$();
      var tmp2_arrangementSpacing = Arrangement_getInstance().get_Start_ih4i6x_k$().get_spacing_zb7agn_k$();
      var tmp3_crossAxisAlignment = Companion_getInstance_7().vertical_tld729_k$(Companion_getInstance().get_Top_18jj1w_k$());
      var tmp4_crossAxisSize = SizeMode_Wrap_getInstance();
      DefaultRowMeasurePolicy = new RowColumnMeasurePolicy(tmp0_orientation, tmp1_horizontalArrangement, null, tmp2_arrangementSpacing, tmp4_crossAxisSize, tmp3_crossAxisAlignment);
    }
  }
  function _get_orientation__cb6m7($this) {
    return $this.orientation_1;
  }
  function _get_horizontalArrangement__yigl9x($this) {
    return $this.horizontalArrangement_1;
  }
  function _get_verticalArrangement__8o51lp($this) {
    return $this.verticalArrangement_1;
  }
  function _get_arrangementSpacing__ygg9bi($this) {
    return $this.arrangementSpacing_1;
  }
  function _get_crossAxisSize__ww2hkf($this) {
    return $this.crossAxisSize_1;
  }
  function _get_crossAxisAlignment__uh3dav($this) {
    return $this.crossAxisAlignment_1;
  }
  function component1_0($this) {
    return $this.orientation_1;
  }
  function component2_0($this) {
    return $this.horizontalArrangement_1;
  }
  function component3($this) {
    return $this.verticalArrangement_1;
  }
  function component4($this) {
    return $this.arrangementSpacing_1;
  }
  function component5($this) {
    return $this.crossAxisSize_1;
  }
  function component6($this) {
    return $this.crossAxisAlignment_1;
  }
  function RowColumnMeasurePolicy$measure$lambda($rowColumnMeasureHelper, $measureResult, $this_measure) {
    return function ($this$layout) {
      $rowColumnMeasureHelper.placeHelper_akfqg3_k$($this$layout, $measureResult, 0, $this_measure.get_layoutDirection_7e37v0_k$());
      return Unit_getInstance();
    };
  }
  function RowColumnMeasurePolicy(orientation, horizontalArrangement, verticalArrangement, arrangementSpacing, crossAxisSize, crossAxisAlignment) {
    this.orientation_1 = orientation;
    this.horizontalArrangement_1 = horizontalArrangement;
    this.verticalArrangement_1 = verticalArrangement;
    this.arrangementSpacing_1 = arrangementSpacing;
    this.crossAxisSize_1 = crossAxisSize;
    this.crossAxisAlignment_1 = crossAxisAlignment;
  }
  protoOf(RowColumnMeasurePolicy).measure_xg9b01_k$ = function (_this__u8e3s4, measurables, constraints) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = measurables.get_size_woubt6_k$();
    var placeables = fillArrayVal(Array(size), null);
    var rowColumnMeasureHelper = new RowColumnMeasurementHelper(this.orientation_1, this.horizontalArrangement_1, this.verticalArrangement_1, this.arrangementSpacing_1, this.crossAxisSize_1, this.crossAxisAlignment_1, measurables, placeables);
    var measureResult = rowColumnMeasureHelper.measureWithoutPlacing_51xomj_k$(_this__u8e3s4, constraints, 0, measurables.get_size_woubt6_k$());
    var layoutWidth;
    var layoutHeight;
    if (this.orientation_1.equals(LayoutOrientation_Horizontal_getInstance())) {
      layoutWidth = measureResult.get_mainAxisSize_vd88f0_k$();
      layoutHeight = measureResult.get_crossAxisSize_vn6o3d_k$();
    } else {
      layoutWidth = measureResult.get_crossAxisSize_vn6o3d_k$();
      layoutHeight = measureResult.get_mainAxisSize_vd88f0_k$();
    }
    return _this__u8e3s4.layout$default_n19e5l_k$(layoutWidth, layoutHeight, VOID, RowColumnMeasurePolicy$measure$lambda(rowColumnMeasureHelper, measureResult, _this__u8e3s4));
  };
  protoOf(RowColumnMeasurePolicy).minIntrinsicWidth_dwfcse_k$ = function (_this__u8e3s4, measurables, height) {
    return MinIntrinsicWidthMeasureBlock(this.orientation_1)(measurables, height, _this__u8e3s4.roundToPx_yb7vg8_k$(this.arrangementSpacing_1));
  };
  protoOf(RowColumnMeasurePolicy).minIntrinsicHeight_xlhgwn_k$ = function (_this__u8e3s4, measurables, width) {
    return MinIntrinsicHeightMeasureBlock(this.orientation_1)(measurables, width, _this__u8e3s4.roundToPx_yb7vg8_k$(this.arrangementSpacing_1));
  };
  protoOf(RowColumnMeasurePolicy).maxIntrinsicWidth_cx7ze4_k$ = function (_this__u8e3s4, measurables, height) {
    return MaxIntrinsicWidthMeasureBlock(this.orientation_1)(measurables, height, _this__u8e3s4.roundToPx_yb7vg8_k$(this.arrangementSpacing_1));
  };
  protoOf(RowColumnMeasurePolicy).maxIntrinsicHeight_3a4xm1_k$ = function (_this__u8e3s4, measurables, width) {
    return MaxIntrinsicHeightMeasureBlock(this.orientation_1)(measurables, width, _this__u8e3s4.roundToPx_yb7vg8_k$(this.arrangementSpacing_1));
  };
  protoOf(RowColumnMeasurePolicy).copy_nghx7i_k$ = function (orientation, horizontalArrangement, verticalArrangement, arrangementSpacing, crossAxisSize, crossAxisAlignment) {
    return new RowColumnMeasurePolicy(orientation, horizontalArrangement, verticalArrangement, arrangementSpacing, crossAxisSize, crossAxisAlignment);
  };
  protoOf(RowColumnMeasurePolicy).copy$default_2tglg4_k$ = function (orientation, horizontalArrangement, verticalArrangement, arrangementSpacing, crossAxisSize, crossAxisAlignment, $super) {
    orientation = orientation === VOID ? this.orientation_1 : orientation;
    horizontalArrangement = horizontalArrangement === VOID ? this.horizontalArrangement_1 : horizontalArrangement;
    verticalArrangement = verticalArrangement === VOID ? this.verticalArrangement_1 : verticalArrangement;
    arrangementSpacing = arrangementSpacing === VOID ? this.arrangementSpacing_1 : arrangementSpacing;
    crossAxisSize = crossAxisSize === VOID ? this.crossAxisSize_1 : crossAxisSize;
    crossAxisAlignment = crossAxisAlignment === VOID ? this.crossAxisAlignment_1 : crossAxisAlignment;
    return $super === VOID ? this.copy_nghx7i_k$(orientation, horizontalArrangement, verticalArrangement, arrangementSpacing, crossAxisSize, crossAxisAlignment) : $super.copy_nghx7i_k$.call(this, orientation, horizontalArrangement, verticalArrangement, new Dp(arrangementSpacing), crossAxisSize, crossAxisAlignment);
  };
  protoOf(RowColumnMeasurePolicy).toString = function () {
    return 'RowColumnMeasurePolicy(orientation=' + this.orientation_1 + ', horizontalArrangement=' + this.horizontalArrangement_1 + ', verticalArrangement=' + this.verticalArrangement_1 + ', arrangementSpacing=' + new Dp(this.arrangementSpacing_1) + ', crossAxisSize=' + this.crossAxisSize_1 + ', crossAxisAlignment=' + this.crossAxisAlignment_1 + ')';
  };
  protoOf(RowColumnMeasurePolicy).hashCode = function () {
    var result = this.orientation_1.hashCode();
    result = imul(result, 31) + (this.horizontalArrangement_1 == null ? 0 : hashCode(this.horizontalArrangement_1)) | 0;
    result = imul(result, 31) + (this.verticalArrangement_1 == null ? 0 : hashCode(this.verticalArrangement_1)) | 0;
    result = imul(result, 31) + Dp__hashCode_impl_sxkrra(this.arrangementSpacing_1) | 0;
    result = imul(result, 31) + this.crossAxisSize_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.crossAxisAlignment_1) | 0;
    return result;
  };
  protoOf(RowColumnMeasurePolicy).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RowColumnMeasurePolicy))
      return false;
    var tmp0_other_with_cast = other instanceof RowColumnMeasurePolicy ? other : THROW_CCE();
    if (!this.orientation_1.equals(tmp0_other_with_cast.orientation_1))
      return false;
    if (!equals(this.horizontalArrangement_1, tmp0_other_with_cast.horizontalArrangement_1))
      return false;
    if (!equals(this.verticalArrangement_1, tmp0_other_with_cast.verticalArrangement_1))
      return false;
    if (!equals(this.arrangementSpacing_1, tmp0_other_with_cast.arrangementSpacing_1))
      return false;
    if (!this.crossAxisSize_1.equals(tmp0_other_with_cast.crossAxisSize_1))
      return false;
    if (!equals(this.crossAxisAlignment_1, tmp0_other_with_cast.crossAxisAlignment_1))
      return false;
    return true;
  };
  var LayoutOrientation_Horizontal_instance;
  var LayoutOrientation_Vertical_instance;
  function values() {
    return [LayoutOrientation_Horizontal_getInstance(), LayoutOrientation_Vertical_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'Horizontal':
        return LayoutOrientation_Horizontal_getInstance();
      case 'Vertical':
        return LayoutOrientation_Vertical_getInstance();
      default:
        LayoutOrientation_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var LayoutOrientation_entriesInitialized;
  function LayoutOrientation_initEntries() {
    if (LayoutOrientation_entriesInitialized)
      return Unit_getInstance();
    LayoutOrientation_entriesInitialized = true;
    LayoutOrientation_Horizontal_instance = new LayoutOrientation('Horizontal', 0);
    LayoutOrientation_Vertical_instance = new LayoutOrientation('Vertical', 1);
  }
  var $ENTRIES;
  function LayoutOrientation(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Companion() {
    Companion_instance = this;
    this.Center_1 = CenterCrossAxisAlignment_getInstance();
    this.Start_1 = StartCrossAxisAlignment_getInstance();
    this.End_1 = EndCrossAxisAlignment_getInstance();
  }
  protoOf(Companion).get_Center_3arb0i_k$ = function () {
    return this.Center_1;
  };
  protoOf(Companion).get_Start_ih4i6x_k$ = function () {
    return this.Start_1;
  };
  protoOf(Companion).get_End_18ju7i_k$ = function () {
    return this.End_1;
  };
  protoOf(Companion).AlignmentLine_tujeb5_k$ = function (alignmentLine) {
    return new AlignmentLineCrossAxisAlignment(new Value(alignmentLine));
  };
  protoOf(Companion).Relative_10bq2c_k$ = function (alignmentLineProvider) {
    return new AlignmentLineCrossAxisAlignment(alignmentLineProvider);
  };
  protoOf(Companion).vertical_tld729_k$ = function (vertical) {
    return new VerticalCrossAxisAlignment(vertical);
  };
  protoOf(Companion).horizontal_pytg75_k$ = function (horizontal) {
    return new HorizontalCrossAxisAlignment(horizontal);
  };
  var Companion_instance;
  function Companion_getInstance_7() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function CenterCrossAxisAlignment() {
    CenterCrossAxisAlignment_instance = this;
    CrossAxisAlignment.call(this);
  }
  protoOf(CenterCrossAxisAlignment).align_ukj15d_k$ = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return size / 2 | 0;
  };
  var CenterCrossAxisAlignment_instance;
  function CenterCrossAxisAlignment_getInstance() {
    if (CenterCrossAxisAlignment_instance == null)
      new CenterCrossAxisAlignment();
    return CenterCrossAxisAlignment_instance;
  }
  function StartCrossAxisAlignment() {
    StartCrossAxisAlignment_instance = this;
    CrossAxisAlignment.call(this);
  }
  protoOf(StartCrossAxisAlignment).align_ukj15d_k$ = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? 0 : size;
  };
  var StartCrossAxisAlignment_instance;
  function StartCrossAxisAlignment_getInstance() {
    if (StartCrossAxisAlignment_instance == null)
      new StartCrossAxisAlignment();
    return StartCrossAxisAlignment_instance;
  }
  function EndCrossAxisAlignment() {
    EndCrossAxisAlignment_instance = this;
    CrossAxisAlignment.call(this);
  }
  protoOf(EndCrossAxisAlignment).align_ukj15d_k$ = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? size : 0;
  };
  var EndCrossAxisAlignment_instance;
  function EndCrossAxisAlignment_getInstance() {
    if (EndCrossAxisAlignment_instance == null)
      new EndCrossAxisAlignment();
    return EndCrossAxisAlignment_instance;
  }
  function AlignmentLineCrossAxisAlignment(alignmentLineProvider) {
    CrossAxisAlignment.call(this);
    this.alignmentLineProvider_1 = alignmentLineProvider;
  }
  protoOf(AlignmentLineCrossAxisAlignment).get_alignmentLineProvider_242uu9_k$ = function () {
    return this.alignmentLineProvider_1;
  };
  protoOf(AlignmentLineCrossAxisAlignment).get_isRelative_skgyhr_k$ = function () {
    return true;
  };
  protoOf(AlignmentLineCrossAxisAlignment).calculateAlignmentLinePosition_lw7yd4_k$ = function (placeable) {
    return this.alignmentLineProvider_1.calculateAlignmentLinePosition_lw7yd4_k$(placeable);
  };
  protoOf(AlignmentLineCrossAxisAlignment).align_ukj15d_k$ = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    var alignmentLinePosition = this.alignmentLineProvider_1.calculateAlignmentLinePosition_lw7yd4_k$(placeable);
    var tmp;
    if (!(alignmentLinePosition === Companion_getInstance_5().get_Unspecified_el0w4u_k$())) {
      var line = beforeCrossAxisAlignmentLine - alignmentLinePosition | 0;
      var tmp_0;
      if (layoutDirection.equals(LayoutDirection_Rtl_getInstance())) {
        tmp_0 = size - line | 0;
      } else {
        tmp_0 = line;
      }
      tmp = tmp_0;
    } else {
      tmp = 0;
    }
    return tmp;
  };
  function VerticalCrossAxisAlignment(vertical) {
    CrossAxisAlignment.call(this);
    this.vertical_1 = vertical;
  }
  protoOf(VerticalCrossAxisAlignment).get_vertical_6ev9z3_k$ = function () {
    return this.vertical_1;
  };
  protoOf(VerticalCrossAxisAlignment).align_ukj15d_k$ = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return this.vertical_1.align_k316px_k$(0, size);
  };
  protoOf(VerticalCrossAxisAlignment).component1_7eebsc_k$ = function () {
    return this.vertical_1;
  };
  protoOf(VerticalCrossAxisAlignment).copy_ysuu68_k$ = function (vertical) {
    return new VerticalCrossAxisAlignment(vertical);
  };
  protoOf(VerticalCrossAxisAlignment).copy$default_p5f22c_k$ = function (vertical, $super) {
    vertical = vertical === VOID ? this.vertical_1 : vertical;
    return $super === VOID ? this.copy_ysuu68_k$(vertical) : $super.copy_ysuu68_k$.call(this, vertical);
  };
  protoOf(VerticalCrossAxisAlignment).toString = function () {
    return 'VerticalCrossAxisAlignment(vertical=' + this.vertical_1 + ')';
  };
  protoOf(VerticalCrossAxisAlignment).hashCode = function () {
    return hashCode(this.vertical_1);
  };
  protoOf(VerticalCrossAxisAlignment).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VerticalCrossAxisAlignment))
      return false;
    var tmp0_other_with_cast = other instanceof VerticalCrossAxisAlignment ? other : THROW_CCE();
    if (!equals(this.vertical_1, tmp0_other_with_cast.vertical_1))
      return false;
    return true;
  };
  function HorizontalCrossAxisAlignment(horizontal) {
    CrossAxisAlignment.call(this);
    this.horizontal_1 = horizontal;
  }
  protoOf(HorizontalCrossAxisAlignment).get_horizontal_2rwn8t_k$ = function () {
    return this.horizontal_1;
  };
  protoOf(HorizontalCrossAxisAlignment).align_ukj15d_k$ = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return this.horizontal_1.align_y7fd6v_k$(0, size, layoutDirection);
  };
  protoOf(HorizontalCrossAxisAlignment).component1_7eebsc_k$ = function () {
    return this.horizontal_1;
  };
  protoOf(HorizontalCrossAxisAlignment).copy_ank2s2_k$ = function (horizontal) {
    return new HorizontalCrossAxisAlignment(horizontal);
  };
  protoOf(HorizontalCrossAxisAlignment).copy$default_ecyf90_k$ = function (horizontal, $super) {
    horizontal = horizontal === VOID ? this.horizontal_1 : horizontal;
    return $super === VOID ? this.copy_ank2s2_k$(horizontal) : $super.copy_ank2s2_k$.call(this, horizontal);
  };
  protoOf(HorizontalCrossAxisAlignment).toString = function () {
    return 'HorizontalCrossAxisAlignment(horizontal=' + this.horizontal_1 + ')';
  };
  protoOf(HorizontalCrossAxisAlignment).hashCode = function () {
    return hashCode(this.horizontal_1);
  };
  protoOf(HorizontalCrossAxisAlignment).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HorizontalCrossAxisAlignment))
      return false;
    var tmp0_other_with_cast = other instanceof HorizontalCrossAxisAlignment ? other : THROW_CCE();
    if (!equals(this.horizontal_1, tmp0_other_with_cast.horizontal_1))
      return false;
    return true;
  };
  function CrossAxisAlignment() {
    Companion_getInstance_7();
  }
  protoOf(CrossAxisAlignment).get_isRelative_skgyhr_k$ = function () {
    return false;
  };
  protoOf(CrossAxisAlignment).calculateAlignmentLinePosition_lw7yd4_k$ = function (placeable) {
    return null;
  };
  var SizeMode_Wrap_instance;
  var SizeMode_Expand_instance;
  function values_0() {
    return [SizeMode_Wrap_getInstance(), SizeMode_Expand_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'Wrap':
        return SizeMode_Wrap_getInstance();
      case 'Expand':
        return SizeMode_Expand_getInstance();
      default:
        SizeMode_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var SizeMode_entriesInitialized;
  function SizeMode_initEntries() {
    if (SizeMode_entriesInitialized)
      return Unit_getInstance();
    SizeMode_entriesInitialized = true;
    SizeMode_Wrap_instance = new SizeMode('Wrap', 0);
    SizeMode_Expand_instance = new SizeMode('Expand', 1);
  }
  var $ENTRIES_0;
  function SizeMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function MinIntrinsicWidthMeasureBlock(orientation) {
    var tmp;
    if (orientation.equals(LayoutOrientation_Horizontal_getInstance())) {
      tmp = IntrinsicMeasureBlocks_getInstance().HorizontalMinWidth_1;
    } else {
      tmp = IntrinsicMeasureBlocks_getInstance().VerticalMinWidth_1;
    }
    return tmp;
  }
  function MinIntrinsicHeightMeasureBlock(orientation) {
    var tmp;
    if (orientation.equals(LayoutOrientation_Horizontal_getInstance())) {
      tmp = IntrinsicMeasureBlocks_getInstance().HorizontalMinHeight_1;
    } else {
      tmp = IntrinsicMeasureBlocks_getInstance().VerticalMinHeight_1;
    }
    return tmp;
  }
  function MaxIntrinsicWidthMeasureBlock(orientation) {
    var tmp;
    if (orientation.equals(LayoutOrientation_Horizontal_getInstance())) {
      tmp = IntrinsicMeasureBlocks_getInstance().HorizontalMaxWidth_1;
    } else {
      tmp = IntrinsicMeasureBlocks_getInstance().VerticalMaxWidth_1;
    }
    return tmp;
  }
  function MaxIntrinsicHeightMeasureBlock(orientation) {
    var tmp;
    if (orientation.equals(LayoutOrientation_Horizontal_getInstance())) {
      tmp = IntrinsicMeasureBlocks_getInstance().HorizontalMaxHeight_1;
    } else {
      tmp = IntrinsicMeasureBlocks_getInstance().VerticalMaxHeight_1;
    }
    return tmp;
  }
  function Block(lineProviderBlock) {
    AlignmentLineProvider.call(this);
    this.lineProviderBlock_1 = lineProviderBlock;
  }
  protoOf(Block).get_lineProviderBlock_1gxdy7_k$ = function () {
    return this.lineProviderBlock_1;
  };
  protoOf(Block).calculateAlignmentLinePosition_lw7yd4_k$ = function (placeable) {
    return this.lineProviderBlock_1(placeable);
  };
  protoOf(Block).component1_7eebsc_k$ = function () {
    return this.lineProviderBlock_1;
  };
  protoOf(Block).copy_cullvv_k$ = function (lineProviderBlock) {
    return new Block(lineProviderBlock);
  };
  protoOf(Block).copy$default_3hy2w4_k$ = function (lineProviderBlock, $super) {
    lineProviderBlock = lineProviderBlock === VOID ? this.lineProviderBlock_1 : lineProviderBlock;
    return $super === VOID ? this.copy_cullvv_k$(lineProviderBlock) : $super.copy_cullvv_k$.call(this, lineProviderBlock);
  };
  protoOf(Block).toString = function () {
    return 'Block(lineProviderBlock=' + this.lineProviderBlock_1 + ')';
  };
  protoOf(Block).hashCode = function () {
    return hashCode(this.lineProviderBlock_1);
  };
  protoOf(Block).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Block))
      return false;
    var tmp0_other_with_cast = other instanceof Block ? other : THROW_CCE();
    if (!equals(this.lineProviderBlock_1, tmp0_other_with_cast.lineProviderBlock_1))
      return false;
    return true;
  };
  function Value(alignmentLine) {
    AlignmentLineProvider.call(this);
    this.alignmentLine_1 = alignmentLine;
  }
  protoOf(Value).get_alignmentLine_xlj9o2_k$ = function () {
    return this.alignmentLine_1;
  };
  protoOf(Value).calculateAlignmentLinePosition_lw7yd4_k$ = function (placeable) {
    return placeable.get_pk047k_k$(this.alignmentLine_1);
  };
  protoOf(Value).component1_7eebsc_k$ = function () {
    return this.alignmentLine_1;
  };
  protoOf(Value).copy_jxuxcf_k$ = function (alignmentLine) {
    return new Value(alignmentLine);
  };
  protoOf(Value).copy$default_yh9ino_k$ = function (alignmentLine, $super) {
    alignmentLine = alignmentLine === VOID ? this.alignmentLine_1 : alignmentLine;
    return $super === VOID ? this.copy_jxuxcf_k$(alignmentLine) : $super.copy_jxuxcf_k$.call(this, alignmentLine);
  };
  protoOf(Value).toString = function () {
    return 'Value(alignmentLine=' + this.alignmentLine_1 + ')';
  };
  protoOf(Value).hashCode = function () {
    return hashCode(this.alignmentLine_1);
  };
  protoOf(Value).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Value))
      return false;
    var tmp0_other_with_cast = other instanceof Value ? other : THROW_CCE();
    if (!equals(this.alignmentLine_1, tmp0_other_with_cast.alignmentLine_1))
      return false;
    return true;
  };
  function AlignmentLineProvider() {
  }
  function IntrinsicMeasureBlocks$HorizontalMinWidth$lambda(measurables, availableHeight, mainAxisSpacing) {
    var tmp = IntrinsicMeasureBlocks$HorizontalMinWidth$lambda$lambda;
    return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$HorizontalMinWidth$lambda$lambda_0, availableHeight, mainAxisSpacing, LayoutOrientation_Horizontal_getInstance(), LayoutOrientation_Horizontal_getInstance());
  }
  function IntrinsicMeasureBlocks$HorizontalMinWidth$lambda$lambda($this$intrinsicSize, h) {
    return $this$intrinsicSize.minIntrinsicWidth_jyhjuj_k$(h);
  }
  function IntrinsicMeasureBlocks$HorizontalMinWidth$lambda$lambda_0($this$intrinsicSize, w) {
    return $this$intrinsicSize.maxIntrinsicHeight_b0krtc_k$(w);
  }
  function IntrinsicMeasureBlocks$VerticalMinWidth$lambda(measurables, availableHeight, mainAxisSpacing) {
    var tmp = IntrinsicMeasureBlocks$VerticalMinWidth$lambda$lambda;
    return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$VerticalMinWidth$lambda$lambda_0, availableHeight, mainAxisSpacing, LayoutOrientation_Vertical_getInstance(), LayoutOrientation_Horizontal_getInstance());
  }
  function IntrinsicMeasureBlocks$VerticalMinWidth$lambda$lambda($this$intrinsicSize, h) {
    return $this$intrinsicSize.minIntrinsicWidth_jyhjuj_k$(h);
  }
  function IntrinsicMeasureBlocks$VerticalMinWidth$lambda$lambda_0($this$intrinsicSize, w) {
    return $this$intrinsicSize.maxIntrinsicHeight_b0krtc_k$(w);
  }
  function IntrinsicMeasureBlocks$HorizontalMinHeight$lambda(measurables, availableWidth, mainAxisSpacing) {
    var tmp = IntrinsicMeasureBlocks$HorizontalMinHeight$lambda$lambda;
    return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$HorizontalMinHeight$lambda$lambda_0, availableWidth, mainAxisSpacing, LayoutOrientation_Horizontal_getInstance(), LayoutOrientation_Vertical_getInstance());
  }
  function IntrinsicMeasureBlocks$HorizontalMinHeight$lambda$lambda($this$intrinsicSize, w) {
    return $this$intrinsicSize.minIntrinsicHeight_p2a4ou_k$(w);
  }
  function IntrinsicMeasureBlocks$HorizontalMinHeight$lambda$lambda_0($this$intrinsicSize, h) {
    return $this$intrinsicSize.maxIntrinsicWidth_b8umbx_k$(h);
  }
  function IntrinsicMeasureBlocks$VerticalMinHeight$lambda(measurables, availableWidth, mainAxisSpacing) {
    var tmp = IntrinsicMeasureBlocks$VerticalMinHeight$lambda$lambda;
    return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$VerticalMinHeight$lambda$lambda_0, availableWidth, mainAxisSpacing, LayoutOrientation_Vertical_getInstance(), LayoutOrientation_Vertical_getInstance());
  }
  function IntrinsicMeasureBlocks$VerticalMinHeight$lambda$lambda($this$intrinsicSize, w) {
    return $this$intrinsicSize.minIntrinsicHeight_p2a4ou_k$(w);
  }
  function IntrinsicMeasureBlocks$VerticalMinHeight$lambda$lambda_0($this$intrinsicSize, h) {
    return $this$intrinsicSize.maxIntrinsicWidth_b8umbx_k$(h);
  }
  function IntrinsicMeasureBlocks$HorizontalMaxWidth$lambda(measurables, availableHeight, mainAxisSpacing) {
    var tmp = IntrinsicMeasureBlocks$HorizontalMaxWidth$lambda$lambda;
    return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$HorizontalMaxWidth$lambda$lambda_0, availableHeight, mainAxisSpacing, LayoutOrientation_Horizontal_getInstance(), LayoutOrientation_Horizontal_getInstance());
  }
  function IntrinsicMeasureBlocks$HorizontalMaxWidth$lambda$lambda($this$intrinsicSize, h) {
    return $this$intrinsicSize.maxIntrinsicWidth_b8umbx_k$(h);
  }
  function IntrinsicMeasureBlocks$HorizontalMaxWidth$lambda$lambda_0($this$intrinsicSize, w) {
    return $this$intrinsicSize.maxIntrinsicHeight_b0krtc_k$(w);
  }
  function IntrinsicMeasureBlocks$VerticalMaxWidth$lambda(measurables, availableHeight, mainAxisSpacing) {
    var tmp = IntrinsicMeasureBlocks$VerticalMaxWidth$lambda$lambda;
    return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$VerticalMaxWidth$lambda$lambda_0, availableHeight, mainAxisSpacing, LayoutOrientation_Vertical_getInstance(), LayoutOrientation_Horizontal_getInstance());
  }
  function IntrinsicMeasureBlocks$VerticalMaxWidth$lambda$lambda($this$intrinsicSize, h) {
    return $this$intrinsicSize.maxIntrinsicWidth_b8umbx_k$(h);
  }
  function IntrinsicMeasureBlocks$VerticalMaxWidth$lambda$lambda_0($this$intrinsicSize, w) {
    return $this$intrinsicSize.maxIntrinsicHeight_b0krtc_k$(w);
  }
  function IntrinsicMeasureBlocks$HorizontalMaxHeight$lambda(measurables, availableWidth, mainAxisSpacing) {
    var tmp = IntrinsicMeasureBlocks$HorizontalMaxHeight$lambda$lambda;
    return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$HorizontalMaxHeight$lambda$lambda_0, availableWidth, mainAxisSpacing, LayoutOrientation_Horizontal_getInstance(), LayoutOrientation_Vertical_getInstance());
  }
  function IntrinsicMeasureBlocks$HorizontalMaxHeight$lambda$lambda($this$intrinsicSize, w) {
    return $this$intrinsicSize.maxIntrinsicHeight_b0krtc_k$(w);
  }
  function IntrinsicMeasureBlocks$HorizontalMaxHeight$lambda$lambda_0($this$intrinsicSize, h) {
    return $this$intrinsicSize.maxIntrinsicWidth_b8umbx_k$(h);
  }
  function IntrinsicMeasureBlocks$VerticalMaxHeight$lambda(measurables, availableWidth, mainAxisSpacing) {
    var tmp = IntrinsicMeasureBlocks$VerticalMaxHeight$lambda$lambda;
    return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$VerticalMaxHeight$lambda$lambda_0, availableWidth, mainAxisSpacing, LayoutOrientation_Vertical_getInstance(), LayoutOrientation_Vertical_getInstance());
  }
  function IntrinsicMeasureBlocks$VerticalMaxHeight$lambda$lambda($this$intrinsicSize, w) {
    return $this$intrinsicSize.maxIntrinsicHeight_b0krtc_k$(w);
  }
  function IntrinsicMeasureBlocks$VerticalMaxHeight$lambda$lambda_0($this$intrinsicSize, h) {
    return $this$intrinsicSize.maxIntrinsicWidth_b8umbx_k$(h);
  }
  function IntrinsicMeasureBlocks() {
    IntrinsicMeasureBlocks_instance = this;
    var tmp = this;
    tmp.HorizontalMinWidth_1 = IntrinsicMeasureBlocks$HorizontalMinWidth$lambda;
    var tmp_0 = this;
    tmp_0.VerticalMinWidth_1 = IntrinsicMeasureBlocks$VerticalMinWidth$lambda;
    var tmp_1 = this;
    tmp_1.HorizontalMinHeight_1 = IntrinsicMeasureBlocks$HorizontalMinHeight$lambda;
    var tmp_2 = this;
    tmp_2.VerticalMinHeight_1 = IntrinsicMeasureBlocks$VerticalMinHeight$lambda;
    var tmp_3 = this;
    tmp_3.HorizontalMaxWidth_1 = IntrinsicMeasureBlocks$HorizontalMaxWidth$lambda;
    var tmp_4 = this;
    tmp_4.VerticalMaxWidth_1 = IntrinsicMeasureBlocks$VerticalMaxWidth$lambda;
    var tmp_5 = this;
    tmp_5.HorizontalMaxHeight_1 = IntrinsicMeasureBlocks$HorizontalMaxHeight$lambda;
    var tmp_6 = this;
    tmp_6.VerticalMaxHeight_1 = IntrinsicMeasureBlocks$VerticalMaxHeight$lambda;
  }
  protoOf(IntrinsicMeasureBlocks).get_HorizontalMinWidth_u55zsv_k$ = function () {
    return this.HorizontalMinWidth_1;
  };
  protoOf(IntrinsicMeasureBlocks).get_VerticalMinWidth_gd1cdp_k$ = function () {
    return this.VerticalMinWidth_1;
  };
  protoOf(IntrinsicMeasureBlocks).get_HorizontalMinHeight_i7hp2s_k$ = function () {
    return this.HorizontalMinHeight_1;
  };
  protoOf(IntrinsicMeasureBlocks).get_VerticalMinHeight_h65uva_k$ = function () {
    return this.VerticalMinHeight_1;
  };
  protoOf(IntrinsicMeasureBlocks).get_HorizontalMaxWidth_rnxox_k$ = function () {
    return this.HorizontalMaxWidth_1;
  };
  protoOf(IntrinsicMeasureBlocks).get_VerticalMaxWidth_d0gpq9_k$ = function () {
    return this.VerticalMaxWidth_1;
  };
  protoOf(IntrinsicMeasureBlocks).get_HorizontalMaxHeight_uzelcy_k$ = function () {
    return this.HorizontalMaxHeight_1;
  };
  protoOf(IntrinsicMeasureBlocks).get_VerticalMaxHeight_ty2r5g_k$ = function () {
    return this.VerticalMaxHeight_1;
  };
  var IntrinsicMeasureBlocks_instance;
  function IntrinsicMeasureBlocks_getInstance() {
    if (IntrinsicMeasureBlocks_instance == null)
      new IntrinsicMeasureBlocks();
    return IntrinsicMeasureBlocks_instance;
  }
  function intrinsicSize(children, intrinsicMainSize, intrinsicCrossSize, crossAxisAvailable, mainAxisSpacing, layoutOrientation, intrinsicOrientation) {
    var tmp;
    if (layoutOrientation.equals(intrinsicOrientation)) {
      tmp = intrinsicMainAxisSize(children, intrinsicMainSize, crossAxisAvailable, mainAxisSpacing);
    } else {
      tmp = intrinsicCrossAxisSize(children, intrinsicCrossSize, intrinsicMainSize, crossAxisAvailable, mainAxisSpacing);
    }
    return tmp;
  }
  function intrinsicMainAxisSize(children, mainAxisSize, crossAxisAvailable, mainAxisSpacing) {
    if (children.isEmpty_y1axqb_k$())
      return 0;
    var weightUnitSpace = 0;
    var fixedSpace = 0;
    var totalWeight = 0.0;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = children.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = children.get_c1px32_k$(index);
        // Inline function 'androidx.compose.foundation.layout.intrinsicMainAxisSize.<anonymous>' call
        var weight = get_weight(get_rowColumnParentData(item));
        var size = mainAxisSize(item, crossAxisAvailable);
        if (weight === 0.0) {
          fixedSpace = fixedSpace + size | 0;
        } else if (weight > 0.0) {
          totalWeight = totalWeight + weight;
          // Inline function 'kotlin.math.max' call
          var a = weightUnitSpace;
          // Inline function 'kotlin.math.roundToInt' call
          var this_0 = size / weight;
          var b = roundToInt(this_0);
          weightUnitSpace = Math.max(a, b);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.math.roundToInt' call
    var this_1 = weightUnitSpace * totalWeight;
    return (roundToInt(this_1) + fixedSpace | 0) + imul(children.get_size_woubt6_k$() - 1 | 0, mainAxisSpacing) | 0;
  }
  function intrinsicCrossAxisSize(children, mainAxisSize, crossAxisSize, mainAxisAvailable, mainAxisSpacing) {
    if (children.isEmpty_y1axqb_k$())
      return 0;
    // Inline function 'kotlin.math.min' call
    var a = imul(children.get_size_woubt6_k$() - 1 | 0, mainAxisSpacing);
    var fixedSpace = Math.min(a, mainAxisAvailable);
    var crossAxisMax = 0;
    var totalWeight = 0.0;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = children.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = children.get_c1px32_k$(index);
        // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize.<anonymous>' call
        var weight = get_weight(get_rowColumnParentData(item));
        if (weight === 0.0) {
          // Inline function 'kotlin.math.min' call
          var a_0 = mainAxisSize(item, Companion_getInstance_0().get_Infinity_rvchkf_k$());
          var b = mainAxisAvailable - fixedSpace | 0;
          var mainAxisSpace = Math.min(a_0, b);
          fixedSpace = fixedSpace + mainAxisSpace | 0;
          // Inline function 'kotlin.math.max' call
          var a_1 = crossAxisMax;
          var b_0 = crossAxisSize(item, mainAxisSpace);
          crossAxisMax = Math.max(a_1, b_0);
        } else if (weight > 0.0) {
          totalWeight = totalWeight + weight;
        }
      }
       while (inductionVariable <= last);
    var tmp;
    if (totalWeight === 0.0) {
      tmp = 0;
    } else if (mainAxisAvailable === Companion_getInstance_0().get_Infinity_rvchkf_k$()) {
      tmp = Companion_getInstance_0().get_Infinity_rvchkf_k$();
    } else {
      // Inline function 'kotlin.math.roundToInt' call
      // Inline function 'kotlin.math.max' call
      var a_2 = mainAxisAvailable - fixedSpace | 0;
      var this_0 = Math.max(a_2, 0) / totalWeight;
      tmp = roundToInt(this_0);
    }
    var weightUnitSpace = tmp;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = children.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = children.get_c1px32_k$(index_0);
        // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize.<anonymous>' call
        var weight_0 = get_weight(get_rowColumnParentData(item_0));
        if (weight_0 > 0.0) {
          // Inline function 'kotlin.math.max' call
          var a_3 = crossAxisMax;
          var tmp_0;
          if (!(weightUnitSpace === Companion_getInstance_0().get_Infinity_rvchkf_k$())) {
            // Inline function 'kotlin.math.roundToInt' call
            var this_1 = weightUnitSpace * weight_0;
            tmp_0 = roundToInt(this_1);
          } else {
            tmp_0 = Companion_getInstance_0().get_Infinity_rvchkf_k$();
          }
          var b_1 = crossAxisSize(item_0, tmp_0);
          crossAxisMax = Math.max(a_3, b_1);
        }
      }
       while (inductionVariable_0 <= last_0);
    return crossAxisMax;
  }
  function get_weight(_this__u8e3s4) {
    var tmp1_elvis_lhs = _this__u8e3s4 == null ? null : _this__u8e3s4.weight_1;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  }
  function RowColumnParentData(weight, fill, crossAxisAlignment) {
    weight = weight === VOID ? 0.0 : weight;
    fill = fill === VOID ? true : fill;
    crossAxisAlignment = crossAxisAlignment === VOID ? null : crossAxisAlignment;
    this.weight_1 = weight;
    this.fill_1 = fill;
    this.crossAxisAlignment_1 = crossAxisAlignment;
  }
  protoOf(RowColumnParentData).set_weight_l75ca5_k$ = function (_set____db54di) {
    this.weight_1 = _set____db54di;
  };
  protoOf(RowColumnParentData).get_weight_lbhkzl_k$ = function () {
    return this.weight_1;
  };
  protoOf(RowColumnParentData).set_fill_3wer9x_k$ = function (_set____db54di) {
    this.fill_1 = _set____db54di;
  };
  protoOf(RowColumnParentData).get_fill_wom0ng_k$ = function () {
    return this.fill_1;
  };
  protoOf(RowColumnParentData).set_crossAxisAlignment_3nt3xe_k$ = function (_set____db54di) {
    this.crossAxisAlignment_1 = _set____db54di;
  };
  protoOf(RowColumnParentData).get_crossAxisAlignment_ebqiz9_k$ = function () {
    return this.crossAxisAlignment_1;
  };
  protoOf(RowColumnParentData).component1_7eebsc_k$ = function () {
    return this.weight_1;
  };
  protoOf(RowColumnParentData).component2_7eebsb_k$ = function () {
    return this.fill_1;
  };
  protoOf(RowColumnParentData).component3_7eebsa_k$ = function () {
    return this.crossAxisAlignment_1;
  };
  protoOf(RowColumnParentData).copy_i3rr0r_k$ = function (weight, fill, crossAxisAlignment) {
    return new RowColumnParentData(weight, fill, crossAxisAlignment);
  };
  protoOf(RowColumnParentData).copy$default_kkaioy_k$ = function (weight, fill, crossAxisAlignment, $super) {
    weight = weight === VOID ? this.weight_1 : weight;
    fill = fill === VOID ? this.fill_1 : fill;
    crossAxisAlignment = crossAxisAlignment === VOID ? this.crossAxisAlignment_1 : crossAxisAlignment;
    return $super === VOID ? this.copy_i3rr0r_k$(weight, fill, crossAxisAlignment) : $super.copy_i3rr0r_k$.call(this, weight, fill, crossAxisAlignment);
  };
  protoOf(RowColumnParentData).toString = function () {
    return 'RowColumnParentData(weight=' + this.weight_1 + ', fill=' + this.fill_1 + ', crossAxisAlignment=' + this.crossAxisAlignment_1 + ')';
  };
  protoOf(RowColumnParentData).hashCode = function () {
    var result = getNumberHashCode(this.weight_1);
    result = imul(result, 31) + getBooleanHashCode(this.fill_1) | 0;
    result = imul(result, 31) + (this.crossAxisAlignment_1 == null ? 0 : hashCode(this.crossAxisAlignment_1)) | 0;
    return result;
  };
  protoOf(RowColumnParentData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RowColumnParentData))
      return false;
    var tmp0_other_with_cast = other instanceof RowColumnParentData ? other : THROW_CCE();
    if (!equals(this.weight_1, tmp0_other_with_cast.weight_1))
      return false;
    if (!(this.fill_1 === tmp0_other_with_cast.fill_1))
      return false;
    if (!equals(this.crossAxisAlignment_1, tmp0_other_with_cast.crossAxisAlignment_1))
      return false;
    return true;
  };
  function get_rowColumnParentData(_this__u8e3s4) {
    var tmp = _this__u8e3s4.get_parentData_o87vnn_k$();
    return tmp instanceof RowColumnParentData ? tmp : null;
  }
  function _OrientationIndependentConstraints___init__impl__1uqmhf(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function _OrientationIndependentConstraints___get_mainAxisMin__impl__e7yize($this) {
    return _Constraints___get_minWidth__impl__hi9lfi(_get_value__a43j40($this));
  }
  function _OrientationIndependentConstraints___get_mainAxisMax__impl__qnszw8($this) {
    return _Constraints___get_maxWidth__impl__uuyqc(_get_value__a43j40($this));
  }
  function _OrientationIndependentConstraints___get_crossAxisMin__impl__l4ltx7($this) {
    return _Constraints___get_minHeight__impl__ev4bgx(_get_value__a43j40($this));
  }
  function _OrientationIndependentConstraints___get_crossAxisMax__impl__jr5oyf($this) {
    return _Constraints___get_maxHeight__impl__dt3e8z(_get_value__a43j40($this));
  }
  function _OrientationIndependentConstraints___init__impl__1uqmhf_0(mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax) {
    return _OrientationIndependentConstraints___init__impl__1uqmhf(Constraints(mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax));
  }
  function _OrientationIndependentConstraints___init__impl__1uqmhf_1(c, orientation) {
    return _OrientationIndependentConstraints___init__impl__1uqmhf_0(orientation === LayoutOrientation_Horizontal_getInstance() ? _Constraints___get_minWidth__impl__hi9lfi(c) : _Constraints___get_minHeight__impl__ev4bgx(c), orientation === LayoutOrientation_Horizontal_getInstance() ? _Constraints___get_maxWidth__impl__uuyqc(c) : _Constraints___get_maxHeight__impl__dt3e8z(c), orientation === LayoutOrientation_Horizontal_getInstance() ? _Constraints___get_minHeight__impl__ev4bgx(c) : _Constraints___get_minWidth__impl__hi9lfi(c), orientation === LayoutOrientation_Horizontal_getInstance() ? _Constraints___get_maxHeight__impl__dt3e8z(c) : _Constraints___get_maxWidth__impl__uuyqc(c));
  }
  function OrientationIndependentConstraints__stretchCrossAxis_impl_x272kb($this) {
    // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMin' call
    var tmp = _Constraints___get_minWidth__impl__hi9lfi(_get_value__a43j40($this));
    // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMax' call
    var tmp_0 = _Constraints___get_maxWidth__impl__uuyqc(_get_value__a43j40($this));
    var tmp_1;
    // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMax' call
    if (!(_Constraints___get_maxHeight__impl__dt3e8z(_get_value__a43j40($this)) === Companion_getInstance_0().get_Infinity_rvchkf_k$())) {
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMax' call
      tmp_1 = _Constraints___get_maxHeight__impl__dt3e8z(_get_value__a43j40($this));
    } else {
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMin' call
      tmp_1 = _Constraints___get_minHeight__impl__ev4bgx(_get_value__a43j40($this));
    }
    var tmp_2 = tmp_1;
    // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMax' call
    var tmp$ret$5 = _Constraints___get_maxHeight__impl__dt3e8z(_get_value__a43j40($this));
    return _OrientationIndependentConstraints___init__impl__1uqmhf_0(tmp, tmp_0, tmp_2, tmp$ret$5);
  }
  function OrientationIndependentConstraints__toBoxConstraints_impl_o98i7v($this, orientation) {
    var tmp;
    if (orientation === LayoutOrientation_Horizontal_getInstance()) {
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMin' call
      var tmp_0 = _Constraints___get_minWidth__impl__hi9lfi(_get_value__a43j40($this));
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMax' call
      var tmp_1 = _Constraints___get_maxWidth__impl__uuyqc(_get_value__a43j40($this));
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMin' call
      var tmp_2 = _Constraints___get_minHeight__impl__ev4bgx(_get_value__a43j40($this));
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMax' call
      var tmp$ret$3 = _Constraints___get_maxHeight__impl__dt3e8z(_get_value__a43j40($this));
      tmp = Constraints(tmp_0, tmp_1, tmp_2, tmp$ret$3);
    } else {
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMin' call
      var tmp_3 = _Constraints___get_minHeight__impl__ev4bgx(_get_value__a43j40($this));
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMax' call
      var tmp_4 = _Constraints___get_maxHeight__impl__dt3e8z(_get_value__a43j40($this));
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMin' call
      var tmp_5 = _Constraints___get_minWidth__impl__hi9lfi(_get_value__a43j40($this));
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMax' call
      var tmp$ret$7 = _Constraints___get_maxWidth__impl__uuyqc(_get_value__a43j40($this));
      tmp = Constraints(tmp_3, tmp_4, tmp_5, tmp$ret$7);
    }
    return tmp;
  }
  function OrientationIndependentConstraints__maxWidth_impl_nicugx($this, orientation) {
    var tmp;
    if (orientation === LayoutOrientation_Horizontal_getInstance()) {
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMax' call
      tmp = _Constraints___get_maxWidth__impl__uuyqc(_get_value__a43j40($this));
    } else {
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMax' call
      tmp = _Constraints___get_maxHeight__impl__dt3e8z(_get_value__a43j40($this));
    }
    return tmp;
  }
  function OrientationIndependentConstraints__maxHeight_impl_juif4e($this, orientation) {
    var tmp;
    if (orientation === LayoutOrientation_Horizontal_getInstance()) {
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMax' call
      tmp = _Constraints___get_maxHeight__impl__dt3e8z(_get_value__a43j40($this));
    } else {
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMax' call
      tmp = _Constraints___get_maxWidth__impl__uuyqc(_get_value__a43j40($this));
    }
    return tmp;
  }
  function OrientationIndependentConstraints__copy_impl_osm42c($this, mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax) {
    return _OrientationIndependentConstraints___init__impl__1uqmhf_0(mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax);
  }
  function OrientationIndependentConstraints__copy$default_impl_4x4eq9($this, mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax, $super) {
    var tmp;
    if (mainAxisMin === VOID) {
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMin' call
      tmp = _Constraints___get_minWidth__impl__hi9lfi(_get_value__a43j40($this));
    } else {
      tmp = mainAxisMin;
    }
    mainAxisMin = tmp;
    var tmp_0;
    if (mainAxisMax === VOID) {
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMax' call
      tmp_0 = _Constraints___get_maxWidth__impl__uuyqc(_get_value__a43j40($this));
    } else {
      tmp_0 = mainAxisMax;
    }
    mainAxisMax = tmp_0;
    var tmp_1;
    if (crossAxisMin === VOID) {
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMin' call
      tmp_1 = _Constraints___get_minHeight__impl__ev4bgx(_get_value__a43j40($this));
    } else {
      tmp_1 = crossAxisMin;
    }
    crossAxisMin = tmp_1;
    var tmp_2;
    if (crossAxisMax === VOID) {
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMax' call
      tmp_2 = _Constraints___get_maxHeight__impl__dt3e8z(_get_value__a43j40($this));
    } else {
      tmp_2 = crossAxisMax;
    }
    crossAxisMax = tmp_2;
    var tmp_3;
    if ($super === VOID) {
      tmp_3 = OrientationIndependentConstraints__copy_impl_osm42c($this, mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax);
    } else {
      var tmp_4 = $super;
      tmp_3 = (tmp_4 == null ? null : new OrientationIndependentConstraints(tmp_4)).copy_d53lv1_k$.call(new OrientationIndependentConstraints($this), mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax).value_1;
    }
    return tmp_3;
  }
  function OrientationIndependentConstraints__toString_impl_h1z0yz($this) {
    return 'OrientationIndependentConstraints(value=' + new Constraints_0($this) + ')';
  }
  function OrientationIndependentConstraints__hashCode_impl_w7z47a($this) {
    return Constraints__hashCode_impl_ij7484($this);
  }
  function OrientationIndependentConstraints__equals_impl_b6og0u($this, other) {
    if (!(other instanceof OrientationIndependentConstraints))
      return false;
    var tmp0_other_with_cast = other instanceof OrientationIndependentConstraints ? other.value_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function OrientationIndependentConstraints(value) {
    this.value_1 = value;
  }
  protoOf(OrientationIndependentConstraints).toString = function () {
    return OrientationIndependentConstraints__toString_impl_h1z0yz(this.value_1);
  };
  protoOf(OrientationIndependentConstraints).hashCode = function () {
    return OrientationIndependentConstraints__hashCode_impl_w7z47a(this.value_1);
  };
  protoOf(OrientationIndependentConstraints).equals = function (other) {
    return OrientationIndependentConstraints__equals_impl_b6og0u(this.value_1, other);
  };
  function get_isRelative(_this__u8e3s4) {
    var tmp0_safe_receiver = get_crossAxisAlignment(_this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_isRelative_skgyhr_k$();
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  function get_fill(_this__u8e3s4) {
    var tmp1_elvis_lhs = _this__u8e3s4 == null ? null : _this__u8e3s4.fill_1;
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  }
  function get_crossAxisAlignment(_this__u8e3s4) {
    return _this__u8e3s4 == null ? null : _this__u8e3s4.crossAxisAlignment_1;
  }
  function LayoutOrientation_Horizontal_getInstance() {
    LayoutOrientation_initEntries();
    return LayoutOrientation_Horizontal_instance;
  }
  function LayoutOrientation_Vertical_getInstance() {
    LayoutOrientation_initEntries();
    return LayoutOrientation_Vertical_instance;
  }
  function SizeMode_Wrap_getInstance() {
    SizeMode_initEntries();
    return SizeMode_Wrap_instance;
  }
  function SizeMode_Expand_getInstance() {
    SizeMode_initEntries();
    return SizeMode_Expand_instance;
  }
  function _get_rowColumnParentData__3b0p0t($this) {
    return $this.rowColumnParentData_1;
  }
  function mainAxisPositions($this, mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions, measureScope) {
    if ($this.orientation_1.equals(LayoutOrientation_Vertical_getInstance())) {
      // Inline function 'kotlin.with' call
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.requireNotNull' call
        var value = $this.verticalArrangement_1;
        // Inline function 'kotlin.contracts.contract' call
        if (value == null) {
          // Inline function 'androidx.compose.foundation.layout.RowColumnMeasurementHelper.mainAxisPositions.<anonymous>' call
          var message = 'null verticalArrangement in Column';
          throw IllegalArgumentException_init_$Create$(toString(message));
        } else {
          tmp$ret$1 = value;
          break $l$block;
        }
      }
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$1.arrange_1pnoh8_k$(measureScope, mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions);
    } else {
      // Inline function 'kotlin.with' call
      var tmp$ret$4;
      $l$block_0: {
        // Inline function 'kotlin.requireNotNull' call
        var value_0 = $this.horizontalArrangement_1;
        // Inline function 'kotlin.contracts.contract' call
        if (value_0 == null) {
          // Inline function 'androidx.compose.foundation.layout.RowColumnMeasurementHelper.mainAxisPositions.<anonymous>' call
          var message_0 = 'null horizontalArrangement in Row';
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        } else {
          tmp$ret$4 = value_0;
          break $l$block_0;
        }
      }
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$4.arrange_f41npy_k$(measureScope, mainAxisLayoutSize, childrenMainAxisSize, measureScope.get_layoutDirection_7e37v0_k$(), mainAxisPositions);
    }
    return mainAxisPositions;
  }
  function getCrossAxisPosition($this, placeable, parentData, crossAxisLayoutSize, layoutDirection, beforeCrossAxisAlignmentLine) {
    var tmp1_elvis_lhs = parentData == null ? null : parentData.get_crossAxisAlignment_ebqiz9_k$();
    var childCrossAlignment = tmp1_elvis_lhs == null ? $this.crossAxisAlignment_1 : tmp1_elvis_lhs;
    var tmp = crossAxisLayoutSize - $this.crossAxisSize_2m3wdq_k$(placeable) | 0;
    var tmp_0;
    if ($this.orientation_1.equals(LayoutOrientation_Horizontal_getInstance())) {
      tmp_0 = LayoutDirection_Ltr_getInstance();
    } else {
      tmp_0 = layoutDirection;
    }
    return childCrossAlignment.align_ukj15d_k$(tmp, tmp_0, placeable, beforeCrossAxisAlignmentLine);
  }
  function RowColumnMeasurementHelper(orientation, horizontalArrangement, verticalArrangement, arrangementSpacing, crossAxisSize, crossAxisAlignment, measurables, placeables) {
    this.orientation_1 = orientation;
    this.horizontalArrangement_1 = horizontalArrangement;
    this.verticalArrangement_1 = verticalArrangement;
    this.arrangementSpacing_1 = arrangementSpacing;
    this.crossAxisSize_1 = crossAxisSize;
    this.crossAxisAlignment_1 = crossAxisAlignment;
    this.measurables_1 = measurables;
    this.placeables_1 = placeables;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.measurables_1.get_size_woubt6_k$();
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      tmp_2[tmp_3] = get_rowColumnParentData(this.measurables_1.get_c1px32_k$(tmp_3));
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.rowColumnParentData_1 = tmp_2;
  }
  protoOf(RowColumnMeasurementHelper).get_orientation_9wu93t_k$ = function () {
    return this.orientation_1;
  };
  protoOf(RowColumnMeasurementHelper).get_horizontalArrangement_ah39jx_k$ = function () {
    return this.horizontalArrangement_1;
  };
  protoOf(RowColumnMeasurementHelper).get_verticalArrangement_lzy1jf_k$ = function () {
    return this.verticalArrangement_1;
  };
  protoOf(RowColumnMeasurementHelper).get_arrangementSpacing_5hgm2n_k$ = function () {
    return this.arrangementSpacing_1;
  };
  protoOf(RowColumnMeasurementHelper).get_crossAxisSize_vn6o3d_k$ = function () {
    return this.crossAxisSize_1;
  };
  protoOf(RowColumnMeasurementHelper).get_crossAxisAlignment_ebqiz9_k$ = function () {
    return this.crossAxisAlignment_1;
  };
  protoOf(RowColumnMeasurementHelper).get_measurables_g5hf9z_k$ = function () {
    return this.measurables_1;
  };
  protoOf(RowColumnMeasurementHelper).get_placeables_ojteit_k$ = function () {
    return this.placeables_1;
  };
  protoOf(RowColumnMeasurementHelper).mainAxisSize_q9nnsp_k$ = function (_this__u8e3s4) {
    return this.orientation_1.equals(LayoutOrientation_Horizontal_getInstance()) ? _this__u8e3s4.get_width_j0q4yl_k$() : _this__u8e3s4.get_height_e7t92o_k$();
  };
  protoOf(RowColumnMeasurementHelper).crossAxisSize_2m3wdq_k$ = function (_this__u8e3s4) {
    return this.orientation_1.equals(LayoutOrientation_Horizontal_getInstance()) ? _this__u8e3s4.get_height_e7t92o_k$() : _this__u8e3s4.get_width_j0q4yl_k$();
  };
  protoOf(RowColumnMeasurementHelper).measureWithoutPlacing_51xomj_k$ = function (measureScope, constraints, startIndex, endIndex) {
    var constraints_0 = _OrientationIndependentConstraints___init__impl__1uqmhf_1(constraints, this.orientation_1);
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.RowColumnMeasurementHelper.measureWithoutPlacing.<anonymous>' call
    var arrangementSpacingPx = toLong(measureScope.roundToPx_yb7vg8_k$(this.arrangementSpacing_1));
    var totalWeight = 0.0;
    var fixedSpace = new Long(0, 0);
    var crossAxisSpace = 0;
    var weightChildrenCount = 0;
    var anyAlignBy = false;
    var subSize = endIndex - startIndex | 0;
    var spaceAfterLastNoWeight = 0;
    var inductionVariable = startIndex;
    if (inductionVariable < endIndex)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var child = this.measurables_1.get_c1px32_k$(i);
        var parentData = this.rowColumnParentData_1[i];
        var weight = get_weight(parentData);
        if (weight > 0.0) {
          totalWeight = totalWeight + weight;
          weightChildrenCount = weightChildrenCount + 1 | 0;
        } else {
          // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMax' call
          var mainAxisMax = _Constraints___get_maxWidth__impl__uuyqc(_get_value__a43j40(constraints_0));
          var tmp1_elvis_lhs = this.placeables_1[i];
          var tmp;
          if (tmp1_elvis_lhs == null) {
            var tmp_0;
            if (mainAxisMax === Companion_getInstance_0().get_Infinity_rvchkf_k$()) {
              tmp_0 = Companion_getInstance_0().get_Infinity_rvchkf_k$();
            } else {
              tmp_0 = coerceAtLeast(numberToLong(mainAxisMax).minus_mfbszm_k$(fixedSpace), new Long(0, 0)).toInt_1tsl84_k$();
            }
            tmp = child.measure_4dmfk1_k$(OrientationIndependentConstraints__toBoxConstraints_impl_o98i7v(OrientationIndependentConstraints__copy$default_impl_4x4eq9(constraints_0, 0, tmp_0, 0), this.orientation_1));
          } else {
            tmp = tmp1_elvis_lhs;
          }
          var placeable = tmp;
          // Inline function 'kotlin.math.min' call
          var a = arrangementSpacingPx.toInt_1tsl84_k$();
          // Inline function 'kotlin.Long.minus' call
          var this_0 = numberToLong(mainAxisMax).minus_mfbszm_k$(fixedSpace);
          var other = this.mainAxisSize_q9nnsp_k$(placeable);
          var tmp$ret$3 = this_0.minus_mfbszm_k$(toLong(other));
          var b = coerceAtLeast(tmp$ret$3, new Long(0, 0)).toInt_1tsl84_k$();
          spaceAfterLastNoWeight = Math.min(a, b);
          // Inline function 'kotlin.Long.plus' call
          var this_1 = fixedSpace;
          var other_0 = this.mainAxisSize_q9nnsp_k$(placeable) + spaceAfterLastNoWeight | 0;
          fixedSpace = this_1.plus_r93sks_k$(toLong(other_0));
          // Inline function 'kotlin.math.max' call
          var a_0 = crossAxisSpace;
          var b_0 = this.crossAxisSize_2m3wdq_k$(placeable);
          crossAxisSpace = Math.max(a_0, b_0);
          anyAlignBy = anyAlignBy ? true : get_isRelative(parentData);
          this.placeables_1[i] = placeable;
        }
      }
       while (inductionVariable < endIndex);
    var weightedSpace = 0;
    if (weightChildrenCount === 0) {
      // Inline function 'kotlin.Long.minus' call
      var this_2 = fixedSpace;
      var other_1 = spaceAfterLastNoWeight;
      fixedSpace = this_2.minus_mfbszm_k$(toLong(other_1));
    } else {
      var tmp_1;
      var tmp_2;
      if (totalWeight > 0.0) {
        // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMax' call
        tmp_2 = !(_Constraints___get_maxWidth__impl__uuyqc(_get_value__a43j40(constraints_0)) === Companion_getInstance_0().get_Infinity_rvchkf_k$());
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMax' call
        tmp_1 = _Constraints___get_maxWidth__impl__uuyqc(_get_value__a43j40(constraints_0));
      } else {
        // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMin' call
        tmp_1 = _Constraints___get_minWidth__impl__hi9lfi(_get_value__a43j40(constraints_0));
      }
      var targetSpace = tmp_1;
      // Inline function 'kotlin.Long.times' call
      var other_2 = weightChildrenCount - 1 | 0;
      var arrangementSpacingTotal = arrangementSpacingPx.times_nfzjiw_k$(toLong(other_2));
      var remainingToTarget = coerceAtLeast(numberToLong(targetSpace).minus_mfbszm_k$(fixedSpace).minus_mfbszm_k$(arrangementSpacingTotal), new Long(0, 0));
      var tmp_3;
      if (totalWeight > 0.0) {
        // Inline function 'kotlin.Long.div' call
        var other_3 = totalWeight;
        tmp_3 = remainingToTarget.toFloat_jhbgwv_k$() / other_3;
      } else {
        tmp_3 = 0.0;
      }
      var weightUnitSpace = tmp_3;
      // Inline function 'kotlin.Long.minus' call
      // Inline function 'kotlin.collections.sumOf' call
      var sum = 0;
      var tmp0_iterator = until(startIndex, endIndex).iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        var tmp_4 = sum;
        // Inline function 'androidx.compose.foundation.layout.RowColumnMeasurementHelper.measureWithoutPlacing.<anonymous>' call
        // Inline function 'kotlin.math.roundToInt' call
        var this_3 = weightUnitSpace * get_weight(this.rowColumnParentData_1[element]);
        sum = tmp_4 + roundToInt(this_3) | 0;
      }
      var other_4 = sum;
      var remainder = remainingToTarget.minus_mfbszm_k$(toLong(other_4));
      var inductionVariable_0 = startIndex;
      if (inductionVariable_0 < endIndex)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          if (this.placeables_1[i_0] == null) {
            var child_0 = this.measurables_1.get_c1px32_k$(i_0);
            var parentData_0 = this.rowColumnParentData_1[i_0];
            var weight_0 = get_weight(parentData_0);
            // Inline function 'kotlin.check' call
            // Inline function 'kotlin.contracts.contract' call
            if (!(weight_0 > 0.0)) {
              // Inline function 'androidx.compose.foundation.layout.RowColumnMeasurementHelper.measureWithoutPlacing.<anonymous>' call
              var message = 'All weights <= 0 should have placeables';
              throw IllegalStateException_init_$Create$(toString(message));
            }
            var remainderUnit = get_sign(remainder);
            // Inline function 'kotlin.Long.minus' call
            remainder = remainder.minus_mfbszm_k$(toLong(remainderUnit));
            // Inline function 'kotlin.math.max' call
            // Inline function 'kotlin.math.roundToInt' call
            var this_4 = weightUnitSpace * weight_0;
            var b_1 = roundToInt(this_4) + remainderUnit | 0;
            var childMainAxisSize = Math.max(0, b_1);
            var tmp_5;
            if (get_fill(parentData_0) ? !(childMainAxisSize === Companion_getInstance_0().get_Infinity_rvchkf_k$()) : false) {
              tmp_5 = childMainAxisSize;
            } else {
              tmp_5 = 0;
            }
            var tmp_6 = tmp_5;
            // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMax' call
            var tmp$ret$21 = _Constraints___get_maxHeight__impl__dt3e8z(_get_value__a43j40(constraints_0));
            var placeable_0 = child_0.measure_4dmfk1_k$(OrientationIndependentConstraints__toBoxConstraints_impl_o98i7v(_OrientationIndependentConstraints___init__impl__1uqmhf_0(tmp_6, childMainAxisSize, 0, tmp$ret$21), this.orientation_1));
            weightedSpace = weightedSpace + this.mainAxisSize_q9nnsp_k$(placeable_0) | 0;
            // Inline function 'kotlin.math.max' call
            var a_1 = crossAxisSpace;
            var b_2 = this.crossAxisSize_2m3wdq_k$(placeable_0);
            crossAxisSpace = Math.max(a_1, b_2);
            anyAlignBy = anyAlignBy ? true : get_isRelative(parentData_0);
            this.placeables_1[i_0] = placeable_0;
          }
        }
         while (inductionVariable_0 < endIndex);
      var tmp_7 = numberToLong(weightedSpace).plus_r93sks_k$(arrangementSpacingTotal);
      var tmp_8 = new Long(0, 0);
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMax' call
      var tmp$ret$23 = _Constraints___get_maxWidth__impl__uuyqc(_get_value__a43j40(constraints_0));
      weightedSpace = coerceIn(tmp_7, tmp_8, numberToLong(tmp$ret$23).minus_mfbszm_k$(fixedSpace)).toInt_1tsl84_k$();
    }
    var beforeCrossAxisAlignmentLine = 0;
    var afterCrossAxisAlignmentLine = 0;
    if (anyAlignBy) {
      var inductionVariable_1 = startIndex;
      if (inductionVariable_1 < endIndex)
        do {
          var i_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var placeable_1 = ensureNotNull(this.placeables_1[i_1]);
          var parentData_1 = this.rowColumnParentData_1[i_1];
          var tmp4_safe_receiver = get_crossAxisAlignment(parentData_1);
          var alignmentLinePosition = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.calculateAlignmentLinePosition_lw7yd4_k$(placeable_1);
          if (!(alignmentLinePosition == null)) {
            // Inline function 'kotlin.math.max' call
            var a_2 = beforeCrossAxisAlignmentLine;
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.foundation.layout.RowColumnMeasurementHelper.measureWithoutPlacing.<anonymous>' call
            var b_3 = !(alignmentLinePosition === Companion_getInstance_5().get_Unspecified_el0w4u_k$()) ? alignmentLinePosition : 0;
            beforeCrossAxisAlignmentLine = Math.max(a_2, b_3);
            // Inline function 'kotlin.math.max' call
            var a_3 = afterCrossAxisAlignmentLine;
            var tmp_9 = this.crossAxisSize_2m3wdq_k$(placeable_1);
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.foundation.layout.RowColumnMeasurementHelper.measureWithoutPlacing.<anonymous>' call
            var tmp_10;
            if (!(alignmentLinePosition === Companion_getInstance_5().get_Unspecified_el0w4u_k$())) {
              tmp_10 = alignmentLinePosition;
            } else {
              tmp_10 = this.crossAxisSize_2m3wdq_k$(placeable_1);
            }
            var b_4 = tmp_9 - tmp_10 | 0;
            afterCrossAxisAlignmentLine = Math.max(a_3, b_4);
          }
        }
         while (inductionVariable_1 < endIndex);
    }
    // Inline function 'kotlin.math.max' call
    // Inline function 'kotlin.Long.plus' call
    var this_5 = fixedSpace;
    var other_5 = weightedSpace;
    var tmp$ret$30 = this_5.plus_r93sks_k$(toLong(other_5));
    var a_4 = coerceAtLeast(tmp$ret$30, new Long(0, 0)).toInt_1tsl84_k$();
    // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMin' call
    var b_5 = _Constraints___get_minWidth__impl__hi9lfi(_get_value__a43j40(constraints_0));
    var mainAxisLayoutSize = Math.max(a_4, b_5);
    var tmp_11;
    var tmp_12;
    // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMax' call
    if (!(_Constraints___get_maxHeight__impl__dt3e8z(_get_value__a43j40(constraints_0)) === Companion_getInstance_0().get_Infinity_rvchkf_k$())) {
      tmp_12 = this.crossAxisSize_1.equals(SizeMode_Expand_getInstance());
    } else {
      tmp_12 = false;
    }
    if (tmp_12) {
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMax' call
      tmp_11 = _Constraints___get_maxHeight__impl__dt3e8z(_get_value__a43j40(constraints_0));
    } else {
      // Inline function 'kotlin.math.max' call
      var a_5 = crossAxisSpace;
      // Inline function 'kotlin.math.max' call
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMin' call
      var a_6 = _Constraints___get_minHeight__impl__ev4bgx(_get_value__a43j40(constraints_0));
      var b_6 = beforeCrossAxisAlignmentLine + afterCrossAxisAlignmentLine | 0;
      var b_7 = Math.max(a_6, b_6);
      tmp_11 = Math.max(a_5, b_7);
    }
    var crossAxisLayoutSize = tmp_11;
    var tmp_13 = 0;
    var tmp_14 = new Int32Array(subSize);
    while (tmp_13 < subSize) {
      tmp_14[tmp_13] = 0;
      tmp_13 = tmp_13 + 1 | 0;
    }
    var mainAxisPositions_0 = tmp_14;
    var tmp_15 = 0;
    var tmp_16 = new Int32Array(subSize);
    while (tmp_15 < subSize) {
      var tmp_17 = tmp_15;
      tmp_16[tmp_17] = this.mainAxisSize_q9nnsp_k$(ensureNotNull(this.placeables_1[tmp_17 + startIndex | 0]));
      tmp_15 = tmp_15 + 1 | 0;
    }
    var childrenMainAxisSize = tmp_16;
    var tmp5_beforeCrossAxisAlignmentLine = beforeCrossAxisAlignmentLine;
    var tmp6_mainAxisPositions = mainAxisPositions(this, mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions_0, measureScope);
    return new RowColumnMeasureHelperResult(crossAxisLayoutSize, mainAxisLayoutSize, startIndex, endIndex, tmp5_beforeCrossAxisAlignmentLine, tmp6_mainAxisPositions);
  };
  protoOf(RowColumnMeasurementHelper).placeHelper_akfqg3_k$ = function (placeableScope, measureResult, crossAxisOffset, layoutDirection) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = measureResult.startIndex_1;
    var last = measureResult.endIndex_1;
    var tmp;
    if (inductionVariable < last) {
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var placeable = this.placeables_1[i];
        ensureNotNull(placeable);
        var mainAxisPositions = measureResult.mainAxisPositions_1;
        var tmp_0 = this.measurables_1.get_c1px32_k$(i).get_parentData_o87vnn_k$();
        var crossAxisPosition = getCrossAxisPosition(this, placeable, tmp_0 instanceof RowColumnParentData ? tmp_0 : null, measureResult.crossAxisSize_1, layoutDirection, measureResult.beforeCrossAxisAlignmentLine_1) + crossAxisOffset | 0;
        if (this.orientation_1.equals(LayoutOrientation_Horizontal_getInstance())) {
          placeableScope.place$default_lcv1ed_k$(placeable, mainAxisPositions[i - measureResult.startIndex_1 | 0], crossAxisPosition);
        } else {
          placeableScope.place$default_lcv1ed_k$(placeable, crossAxisPosition, mainAxisPositions[i - measureResult.startIndex_1 | 0]);
        }
      }
       while (inductionVariable < last);
      tmp = Unit_getInstance();
    }
  };
  function RowColumnMeasureHelperResult(crossAxisSize, mainAxisSize, startIndex, endIndex, beforeCrossAxisAlignmentLine, mainAxisPositions) {
    this.crossAxisSize_1 = crossAxisSize;
    this.mainAxisSize_1 = mainAxisSize;
    this.startIndex_1 = startIndex;
    this.endIndex_1 = endIndex;
    this.beforeCrossAxisAlignmentLine_1 = beforeCrossAxisAlignmentLine;
    this.mainAxisPositions_1 = mainAxisPositions;
  }
  protoOf(RowColumnMeasureHelperResult).get_crossAxisSize_vn6o3d_k$ = function () {
    return this.crossAxisSize_1;
  };
  protoOf(RowColumnMeasureHelperResult).get_mainAxisSize_vd88f0_k$ = function () {
    return this.mainAxisSize_1;
  };
  protoOf(RowColumnMeasureHelperResult).get_startIndex_oi1lp5_k$ = function () {
    return this.startIndex_1;
  };
  protoOf(RowColumnMeasureHelperResult).get_endIndex_3lslfk_k$ = function () {
    return this.endIndex_1;
  };
  protoOf(RowColumnMeasureHelperResult).get_beforeCrossAxisAlignmentLine_gqpg9q_k$ = function () {
    return this.beforeCrossAxisAlignmentLine_1;
  };
  protoOf(RowColumnMeasureHelperResult).get_mainAxisPositions_av3ffr_k$ = function () {
    return this.mainAxisPositions_1;
  };
  function get_FillWholeMaxWidth() {
    _init_properties_Size_kt__jcru8v();
    return FillWholeMaxWidth;
  }
  var FillWholeMaxWidth;
  function get_FillWholeMaxHeight() {
    _init_properties_Size_kt__jcru8v();
    return FillWholeMaxHeight;
  }
  var FillWholeMaxHeight;
  function get_FillWholeMaxSize() {
    _init_properties_Size_kt__jcru8v();
    return FillWholeMaxSize;
  }
  var FillWholeMaxSize;
  function get_WrapContentWidthCenter() {
    _init_properties_Size_kt__jcru8v();
    return WrapContentWidthCenter;
  }
  var WrapContentWidthCenter;
  function get_WrapContentWidthStart() {
    _init_properties_Size_kt__jcru8v();
    return WrapContentWidthStart;
  }
  var WrapContentWidthStart;
  function get_WrapContentHeightCenter() {
    _init_properties_Size_kt__jcru8v();
    return WrapContentHeightCenter;
  }
  var WrapContentHeightCenter;
  function get_WrapContentHeightTop() {
    _init_properties_Size_kt__jcru8v();
    return WrapContentHeightTop;
  }
  var WrapContentHeightTop;
  function get_WrapContentSizeCenter() {
    _init_properties_Size_kt__jcru8v();
    return WrapContentSizeCenter;
  }
  var WrapContentSizeCenter;
  function get_WrapContentSizeTopStart() {
    _init_properties_Size_kt__jcru8v();
    return WrapContentSizeTopStart;
  }
  var WrapContentSizeTopStart;
  function _get_direction__hwzary($this) {
    return $this.direction_1;
  }
  function _get_fraction__t0yzux($this) {
    return $this.fraction_1;
  }
  function _get_inspectorName__omemen($this) {
    return $this.inspectorName_1;
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).width_h0xe6_k$ = function (fraction) {
    return new FillElement(Direction_Horizontal_getInstance(), fraction, 'fillMaxWidth');
  };
  protoOf(Companion_0).height_21djpr_k$ = function (fraction) {
    return new FillElement(Direction_Vertical_getInstance(), fraction, 'fillMaxHeight');
  };
  protoOf(Companion_0).size_34i8tl_k$ = function (fraction) {
    return new FillElement(Direction_Both_getInstance(), fraction, 'fillMaxSize');
  };
  var Companion_instance_0;
  function Companion_getInstance_8() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function FillElement(direction, fraction, inspectorName) {
    Companion_getInstance_8();
    ModifierNodeElement.call(this);
    this.direction_1 = direction;
    this.fraction_1 = fraction;
    this.inspectorName_1 = inspectorName;
  }
  protoOf(FillElement).create_md4cuc_k$ = function () {
    return new FillNode(this.direction_1, this.fraction_1);
  };
  protoOf(FillElement).update_60b29w_k$ = function (node) {
    node.direction_1 = this.direction_1;
    node.fraction_1 = this.fraction_1;
  };
  protoOf(FillElement).update_9wd57p_k$ = function (node) {
    return this.update_60b29w_k$(node instanceof FillNode ? node : THROW_CCE());
  };
  protoOf(FillElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_wkmnld_k$(this.inspectorName_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('fraction', this.fraction_1);
  };
  protoOf(FillElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FillElement))
      return false;
    if (!this.direction_1.equals(other.direction_1))
      return false;
    if (!(this.fraction_1 === other.fraction_1))
      return false;
    return true;
  };
  protoOf(FillElement).hashCode = function () {
    var result = this.direction_1.hashCode();
    result = imul(31, result) + getNumberHashCode(this.fraction_1) | 0;
    return result;
  };
  function WrapContentElement$Companion$width$lambda($align) {
    return function (size, layoutDirection) {
      return new IntOffset_0(IntOffset($align.align_y7fd6v_k$(0, _IntSize___get_width__impl__d9yl4o(size.packedValue_1), layoutDirection), 0));
    };
  }
  function WrapContentElement$Companion$height$lambda($align) {
    return function (size, _anonymous_parameter_1__qggqgd) {
      return new IntOffset_0(IntOffset(0, $align.align_k316px_k$(0, _IntSize___get_height__impl__prv63b(size.packedValue_1))));
    };
  }
  function WrapContentElement$Companion$size$lambda($align) {
    return function (size, layoutDirection) {
      return new IntOffset_0($align.align_mb8mzc_k$(Companion_getInstance_6().get_Zero_9we0a6_k$(), size.packedValue_1, layoutDirection));
    };
  }
  function _get_direction__hwzary_0($this) {
    return $this.direction_1;
  }
  function _get_unbounded__vdc64z($this) {
    return $this.unbounded_1;
  }
  function _get_alignmentCallback__m7n7k9($this) {
    return $this.alignmentCallback_1;
  }
  function _get_align__jw21zo($this) {
    return $this.align_1;
  }
  function _get_inspectorName__omemen_0($this) {
    return $this.inspectorName_1;
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).width_5b10pq_k$ = function (align, unbounded) {
    var tmp = Direction_Horizontal_getInstance();
    return new WrapContentElement(tmp, unbounded, WrapContentElement$Companion$width$lambda(align), align, 'wrapContentWidth');
  };
  protoOf(Companion_1).height_lq0arx_k$ = function (align, unbounded) {
    var tmp = Direction_Vertical_getInstance();
    return new WrapContentElement(tmp, unbounded, WrapContentElement$Companion$height$lambda(align), align, 'wrapContentHeight');
  };
  protoOf(Companion_1).size_xsrtan_k$ = function (align, unbounded) {
    var tmp = Direction_Both_getInstance();
    return new WrapContentElement(tmp, unbounded, WrapContentElement$Companion$size$lambda(align), align, 'wrapContentSize');
  };
  var Companion_instance_1;
  function Companion_getInstance_9() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function WrapContentElement(direction, unbounded, alignmentCallback, align, inspectorName) {
    Companion_getInstance_9();
    ModifierNodeElement.call(this);
    this.direction_1 = direction;
    this.unbounded_1 = unbounded;
    this.alignmentCallback_1 = alignmentCallback;
    this.align_1 = align;
    this.inspectorName_1 = inspectorName;
  }
  protoOf(WrapContentElement).create_md4cuc_k$ = function () {
    return new WrapContentNode(this.direction_1, this.unbounded_1, this.alignmentCallback_1);
  };
  protoOf(WrapContentElement).update_5r7r4s_k$ = function (node) {
    node.direction_1 = this.direction_1;
    node.unbounded_1 = this.unbounded_1;
    node.alignmentCallback_1 = this.alignmentCallback_1;
  };
  protoOf(WrapContentElement).update_9wd57p_k$ = function (node) {
    return this.update_5r7r4s_k$(node instanceof WrapContentNode ? node : THROW_CCE());
  };
  protoOf(WrapContentElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_wkmnld_k$(this.inspectorName_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('align', this.align_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('unbounded', this.unbounded_1);
  };
  protoOf(WrapContentElement).equals = function (other) {
    if (this === other)
      return true;
    if (other === null)
      return false;
    if (!getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof WrapContentElement))
      THROW_CCE();
    if (!this.direction_1.equals(other.direction_1))
      return false;
    if (!(this.unbounded_1 === other.unbounded_1))
      return false;
    if (!equals(this.align_1, other.align_1))
      return false;
    return true;
  };
  protoOf(WrapContentElement).hashCode = function () {
    var result = this.direction_1.hashCode();
    result = imul(31, result) + getBooleanHashCode(this.unbounded_1) | 0;
    result = imul(31, result) + hashCode(this.align_1) | 0;
    return result;
  };
  function FillNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.placeRelative$default_yv6dex_k$($placeable, 0, 0);
      return Unit_getInstance();
    };
  }
  function FillNode(direction, fraction) {
    Node.call(this);
    this.direction_1 = direction;
    this.fraction_1 = fraction;
  }
  protoOf(FillNode).set_direction_yuha1y_k$ = function (_set____db54di) {
    this.direction_1 = _set____db54di;
  };
  protoOf(FillNode).get_direction_7ekune_k$ = function () {
    return this.direction_1;
  };
  protoOf(FillNode).set_fraction_7zdj49_k$ = function (_set____db54di) {
    this.fraction_1 = _set____db54di;
  };
  protoOf(FillNode).get_fraction_bvkonf_k$ = function () {
    return this.fraction_1;
  };
  protoOf(FillNode).measure_z885gt_k$ = function (_this__u8e3s4, measurable, constraints) {
    var minWidth;
    var maxWidth;
    if (_Constraints___get_hasBoundedWidth__impl__7hd0wr(constraints) ? !this.direction_1.equals(Direction_Vertical_getInstance()) : false) {
      // Inline function 'kotlin.math.roundToInt' call
      var this_0 = _Constraints___get_maxWidth__impl__uuyqc(constraints) * this.fraction_1;
      var tmp$ret$0 = roundToInt(this_0);
      var width = coerceIn_0(tmp$ret$0, _Constraints___get_minWidth__impl__hi9lfi(constraints), _Constraints___get_maxWidth__impl__uuyqc(constraints));
      minWidth = width;
      maxWidth = width;
    } else {
      minWidth = _Constraints___get_minWidth__impl__hi9lfi(constraints);
      maxWidth = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    }
    var minHeight;
    var maxHeight;
    if (_Constraints___get_hasBoundedHeight__impl__bsh4rw(constraints) ? !this.direction_1.equals(Direction_Horizontal_getInstance()) : false) {
      // Inline function 'kotlin.math.roundToInt' call
      var this_1 = _Constraints___get_maxHeight__impl__dt3e8z(constraints) * this.fraction_1;
      var tmp$ret$1 = roundToInt(this_1);
      var height = coerceIn_0(tmp$ret$1, _Constraints___get_minHeight__impl__ev4bgx(constraints), _Constraints___get_maxHeight__impl__dt3e8z(constraints));
      minHeight = height;
      maxHeight = height;
    } else {
      minHeight = _Constraints___get_minHeight__impl__ev4bgx(constraints);
      maxHeight = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    }
    var placeable = measurable.measure_4dmfk1_k$(Constraints(minWidth, maxWidth, minHeight, maxHeight));
    var tmp = placeable.get_width_j0q4yl_k$();
    var tmp_0 = placeable.get_height_e7t92o_k$();
    return _this__u8e3s4.layout$default_n19e5l_k$(tmp, tmp_0, VOID, FillNode$measure$lambda(placeable));
  };
  var Direction_Vertical_instance;
  var Direction_Horizontal_instance;
  var Direction_Both_instance;
  function values_1() {
    return [Direction_Vertical_getInstance(), Direction_Horizontal_getInstance(), Direction_Both_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'Vertical':
        return Direction_Vertical_getInstance();
      case 'Horizontal':
        return Direction_Horizontal_getInstance();
      case 'Both':
        return Direction_Both_getInstance();
      default:
        Direction_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
  }
  var Direction_entriesInitialized;
  function Direction_initEntries() {
    if (Direction_entriesInitialized)
      return Unit_getInstance();
    Direction_entriesInitialized = true;
    Direction_Vertical_instance = new Direction('Vertical', 0);
    Direction_Horizontal_instance = new Direction('Horizontal', 1);
    Direction_Both_instance = new Direction('Both', 2);
  }
  var $ENTRIES_1;
  function Direction(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function WrapContentNode$measure$lambda(this$0, $wrapperWidth, $placeable, $wrapperHeight, $this_measure) {
    return function ($this$layout) {
      var position = this$0.alignmentCallback_1(new IntSize_0(IntSize($wrapperWidth - $placeable.get_width_j0q4yl_k$() | 0, $wrapperHeight - $placeable.get_height_e7t92o_k$() | 0)), $this_measure.get_layoutDirection_7e37v0_k$()).packedValue_1;
      $this$layout.place$default_gmqxva_k$($placeable, position);
      return Unit_getInstance();
    };
  }
  function WrapContentNode(direction, unbounded, alignmentCallback) {
    Node.call(this);
    this.direction_1 = direction;
    this.unbounded_1 = unbounded;
    this.alignmentCallback_1 = alignmentCallback;
  }
  protoOf(WrapContentNode).set_direction_yuha1y_k$ = function (_set____db54di) {
    this.direction_1 = _set____db54di;
  };
  protoOf(WrapContentNode).get_direction_7ekune_k$ = function () {
    return this.direction_1;
  };
  protoOf(WrapContentNode).set_unbounded_s9oby_k$ = function (_set____db54di) {
    this.unbounded_1 = _set____db54di;
  };
  protoOf(WrapContentNode).get_unbounded_x1kds5_k$ = function () {
    return this.unbounded_1;
  };
  protoOf(WrapContentNode).set_alignmentCallback_1e0ra7_k$ = function (_set____db54di) {
    this.alignmentCallback_1 = _set____db54di;
  };
  protoOf(WrapContentNode).get_alignmentCallback_mp8hup_k$ = function () {
    return this.alignmentCallback_1;
  };
  protoOf(WrapContentNode).measure_z885gt_k$ = function (_this__u8e3s4, measurable, constraints) {
    var tmp0_minWidth = !this.direction_1.equals(Direction_Vertical_getInstance()) ? 0 : _Constraints___get_minWidth__impl__hi9lfi(constraints);
    var tmp1_minHeight = !this.direction_1.equals(Direction_Horizontal_getInstance()) ? 0 : _Constraints___get_minHeight__impl__ev4bgx(constraints);
    var tmp;
    if (!this.direction_1.equals(Direction_Vertical_getInstance()) ? this.unbounded_1 : false) {
      tmp = Companion_getInstance_0().get_Infinity_rvchkf_k$();
    } else {
      tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    }
    var tmp2_maxWidth = tmp;
    var tmp_0;
    if (!this.direction_1.equals(Direction_Horizontal_getInstance()) ? this.unbounded_1 : false) {
      tmp_0 = Companion_getInstance_0().get_Infinity_rvchkf_k$();
    } else {
      tmp_0 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    }
    var tmp3_maxHeight = tmp_0;
    var wrappedConstraints = Constraints(tmp0_minWidth, tmp2_maxWidth, tmp1_minHeight, tmp3_maxHeight);
    var placeable = measurable.measure_4dmfk1_k$(wrappedConstraints);
    var wrapperWidth = coerceIn_0(placeable.get_width_j0q4yl_k$(), _Constraints___get_minWidth__impl__hi9lfi(constraints), _Constraints___get_maxWidth__impl__uuyqc(constraints));
    var wrapperHeight = coerceIn_0(placeable.get_height_e7t92o_k$(), _Constraints___get_minHeight__impl__ev4bgx(constraints), _Constraints___get_maxHeight__impl__dt3e8z(constraints));
    return _this__u8e3s4.layout$default_n19e5l_k$(wrapperWidth, wrapperHeight, VOID, WrapContentNode$measure$lambda(this, wrapperWidth, placeable, wrapperHeight, _this__u8e3s4));
  };
  function size(_this__u8e3s4, size) {
    _init_properties_Size_kt__jcru8v();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = size$lambda(size);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp0_inspectorInfo = tmp;
    return _this__u8e3s4.then_g5qrxq_k$(new SizeElement(size, size, size, size, true, tmp0_inspectorInfo));
  }
  function defaultMinSize(_this__u8e3s4, minWidth, minHeight) {
    minWidth = minWidth === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : minHeight;
    _init_properties_Size_kt__jcru8v();
    return _this__u8e3s4.then_g5qrxq_k$(new UnspecifiedConstraintsElement(minWidth, minHeight));
  }
  function wrapContentHeight(_this__u8e3s4, align, unbounded) {
    align = align === VOID ? Companion_getInstance().get_CenterVertically_dmkbbz_k$() : align;
    unbounded = unbounded === VOID ? false : unbounded;
    _init_properties_Size_kt__jcru8v();
    var tmp;
    if (equals(align, Companion_getInstance().get_CenterVertically_dmkbbz_k$()) ? !unbounded : false) {
      tmp = get_WrapContentHeightCenter();
    } else if (equals(align, Companion_getInstance().get_Top_18jj1w_k$()) ? !unbounded : false) {
      tmp = get_WrapContentHeightTop();
    } else {
      tmp = Companion_getInstance_9().height_lq0arx_k$(align, unbounded);
    }
    return _this__u8e3s4.then_g5qrxq_k$(tmp);
  }
  function heightIn(_this__u8e3s4, min, max) {
    min = min === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : min;
    max = max === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : max;
    _init_properties_Size_kt__jcru8v();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = heightIn$lambda(min, max);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp$ret$0 = tmp;
    return _this__u8e3s4.then_g5qrxq_k$(new SizeElement(VOID, min, VOID, max, true, tmp$ret$0));
  }
  function _get_minWidth__tgi6yf($this) {
    return $this.minWidth_1;
  }
  function _get_minHeight__j32lk8($this) {
    return $this.minHeight_1;
  }
  function _get_maxWidth__golao9($this) {
    return $this.maxWidth_1;
  }
  function _get_maxHeight__b29xja($this) {
    return $this.maxHeight_1;
  }
  function _get_enforceIncoming__5fpgix($this) {
    return $this.enforceIncoming_1;
  }
  function _get_inspectorInfo__ojvtbg($this) {
    return $this.inspectorInfo_1;
  }
  function SizeElement(minWidth, minHeight, maxWidth, maxHeight, enforceIncoming, inspectorInfo) {
    minWidth = minWidth === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : minHeight;
    maxWidth = maxWidth === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : maxWidth;
    maxHeight = maxHeight === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : maxHeight;
    ModifierNodeElement.call(this);
    this.minWidth_1 = minWidth;
    this.minHeight_1 = minHeight;
    this.maxWidth_1 = maxWidth;
    this.maxHeight_1 = maxHeight;
    this.enforceIncoming_1 = enforceIncoming;
    this.inspectorInfo_1 = inspectorInfo;
  }
  protoOf(SizeElement).create_md4cuc_k$ = function () {
    return new SizeNode(this.minWidth_1, this.minHeight_1, this.maxWidth_1, this.maxHeight_1, this.enforceIncoming_1);
  };
  protoOf(SizeElement).update_ocbjcq_k$ = function (node) {
    node.minWidth_1 = this.minWidth_1;
    node.minHeight_1 = this.minHeight_1;
    node.maxWidth_1 = this.maxWidth_1;
    node.maxHeight_1 = this.maxHeight_1;
    node.enforceIncoming_1 = this.enforceIncoming_1;
  };
  protoOf(SizeElement).update_9wd57p_k$ = function (node) {
    return this.update_ocbjcq_k$(node instanceof SizeNode ? node : THROW_CCE());
  };
  protoOf(SizeElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    this.inspectorInfo_1(_this__u8e3s4);
  };
  protoOf(SizeElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SizeElement))
      return false;
    if (!equals(this.minWidth_1, other.minWidth_1))
      return false;
    if (!equals(this.minHeight_1, other.minHeight_1))
      return false;
    if (!equals(this.maxWidth_1, other.maxWidth_1))
      return false;
    if (!equals(this.maxHeight_1, other.maxHeight_1))
      return false;
    if (!(this.enforceIncoming_1 === other.enforceIncoming_1))
      return false;
    return true;
  };
  protoOf(SizeElement).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.minWidth_1);
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.minHeight_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.maxWidth_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.maxHeight_1) | 0;
    result = imul(31, result) + getBooleanHashCode(this.enforceIncoming_1) | 0;
    return result;
  };
  function UnspecifiedConstraintsElement(minWidth, minHeight) {
    minWidth = minWidth === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : minHeight;
    ModifierNodeElement.call(this);
    this.minWidth_1 = minWidth;
    this.minHeight_1 = minHeight;
  }
  protoOf(UnspecifiedConstraintsElement).get_minWidth_3ut7ei_k$ = function () {
    return this.minWidth_1;
  };
  protoOf(UnspecifiedConstraintsElement).get_minHeight_lqlp2r_k$ = function () {
    return this.minHeight_1;
  };
  protoOf(UnspecifiedConstraintsElement).create_md4cuc_k$ = function () {
    return new UnspecifiedConstraintsNode(this.minWidth_1, this.minHeight_1);
  };
  protoOf(UnspecifiedConstraintsElement).update_9i36x4_k$ = function (node) {
    node.minWidth_1 = this.minWidth_1;
    node.minHeight_1 = this.minHeight_1;
  };
  protoOf(UnspecifiedConstraintsElement).update_9wd57p_k$ = function (node) {
    return this.update_9i36x4_k$(node instanceof UnspecifiedConstraintsNode ? node : THROW_CCE());
  };
  protoOf(UnspecifiedConstraintsElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_wkmnld_k$('defaultMinSize');
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('minWidth', new Dp(this.minWidth_1));
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('minHeight', new Dp(this.minHeight_1));
  };
  protoOf(UnspecifiedConstraintsElement).equals = function (other) {
    if (!(other instanceof UnspecifiedConstraintsElement))
      return false;
    return equals(this.minWidth_1, other.minWidth_1) ? equals(this.minHeight_1, other.minHeight_1) : false;
  };
  protoOf(UnspecifiedConstraintsElement).hashCode = function () {
    return imul(Dp__hashCode_impl_sxkrra(this.minWidth_1), 31) + Dp__hashCode_impl_sxkrra(this.minHeight_1) | 0;
  };
  function _get_targetConstraints__wn7g24(_this__u8e3s4, $this) {
    var tmp;
    if (!equals($this.maxWidth_1, Companion_getInstance_4().get_Unspecified_9b9rm3_k$())) {
      tmp = coerceAtLeast_0(_this__u8e3s4.roundToPx_yb7vg8_k$($this.maxWidth_1), 0);
    } else {
      tmp = Companion_getInstance_0().get_Infinity_rvchkf_k$();
    }
    var maxWidth = tmp;
    var tmp_0;
    if (!equals($this.maxHeight_1, Companion_getInstance_4().get_Unspecified_9b9rm3_k$())) {
      tmp_0 = coerceAtLeast_0(_this__u8e3s4.roundToPx_yb7vg8_k$($this.maxHeight_1), 0);
    } else {
      tmp_0 = Companion_getInstance_0().get_Infinity_rvchkf_k$();
    }
    var maxHeight = tmp_0;
    var tmp_1;
    if (!equals($this.minWidth_1, Companion_getInstance_4().get_Unspecified_9b9rm3_k$())) {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.SizeNode.<get-targetConstraints>.<anonymous>' call
      var it = coerceAtLeast_0(coerceAtMost(_this__u8e3s4.roundToPx_yb7vg8_k$($this.minWidth_1), maxWidth), 0);
      tmp_1 = !(it === Companion_getInstance_0().get_Infinity_rvchkf_k$()) ? it : 0;
    } else {
      tmp_1 = 0;
    }
    var minWidth = tmp_1;
    var tmp_2;
    if (!equals($this.minHeight_1, Companion_getInstance_4().get_Unspecified_9b9rm3_k$())) {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.SizeNode.<get-targetConstraints>.<anonymous>' call
      var it_0 = coerceAtLeast_0(coerceAtMost(_this__u8e3s4.roundToPx_yb7vg8_k$($this.minHeight_1), maxHeight), 0);
      tmp_2 = !(it_0 === Companion_getInstance_0().get_Infinity_rvchkf_k$()) ? it_0 : 0;
    } else {
      tmp_2 = 0;
    }
    var minHeight = tmp_2;
    return Constraints(minWidth, maxWidth, minHeight, maxHeight);
  }
  function SizeNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.placeRelative$default_yv6dex_k$($placeable, 0, 0);
      return Unit_getInstance();
    };
  }
  function SizeNode(minWidth, minHeight, maxWidth, maxHeight, enforceIncoming) {
    minWidth = minWidth === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : minHeight;
    maxWidth = maxWidth === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : maxWidth;
    maxHeight = maxHeight === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : maxHeight;
    Node.call(this);
    this.minWidth_1 = minWidth;
    this.minHeight_1 = minHeight;
    this.maxWidth_1 = maxWidth;
    this.maxHeight_1 = maxHeight;
    this.enforceIncoming_1 = enforceIncoming;
  }
  protoOf(SizeNode).set_minWidth_nt0wsq_k$ = function (_set____db54di) {
    this.minWidth_1 = _set____db54di;
  };
  protoOf(SizeNode).get_minWidth_3ut7ei_k$ = function () {
    return this.minWidth_1;
  };
  protoOf(SizeNode).set_minHeight_o84vor_k$ = function (_set____db54di) {
    this.minHeight_1 = _set____db54di;
  };
  protoOf(SizeNode).get_minHeight_lqlp2r_k$ = function () {
    return this.minHeight_1;
  };
  protoOf(SizeNode).set_maxWidth_llwtu0_k$ = function (_set____db54di) {
    this.maxWidth_1 = _set____db54di;
  };
  protoOf(SizeNode).get_maxWidth_u7u2hk_k$ = function () {
    return this.maxWidth_1;
  };
  protoOf(SizeNode).set_maxHeight_bgxpqx_k$ = function (_set____db54di) {
    this.maxHeight_1 = _set____db54di;
  };
  protoOf(SizeNode).get_maxHeight_cjye1t_k$ = function () {
    return this.maxHeight_1;
  };
  protoOf(SizeNode).set_enforceIncoming_qike0a_k$ = function (_set____db54di) {
    this.enforceIncoming_1 = _set____db54di;
  };
  protoOf(SizeNode).get_enforceIncoming_ilwx4x_k$ = function () {
    return this.enforceIncoming_1;
  };
  protoOf(SizeNode).measure_z885gt_k$ = function (_this__u8e3s4, measurable, constraints) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.SizeNode.measure.<anonymous>' call
    var targetConstraints = _get_targetConstraints__wn7g24(_this__u8e3s4, this);
    var tmp;
    if (this.enforceIncoming_1) {
      tmp = constrain(constraints, targetConstraints);
    } else {
      var tmp_0;
      if (!equals(this.minWidth_1, Companion_getInstance_4().get_Unspecified_9b9rm3_k$())) {
        tmp_0 = _Constraints___get_minWidth__impl__hi9lfi(targetConstraints);
      } else {
        tmp_0 = coerceAtMost(_Constraints___get_minWidth__impl__hi9lfi(constraints), _Constraints___get_maxWidth__impl__uuyqc(targetConstraints));
      }
      var resolvedMinWidth = tmp_0;
      var tmp_1;
      if (!equals(this.maxWidth_1, Companion_getInstance_4().get_Unspecified_9b9rm3_k$())) {
        tmp_1 = _Constraints___get_maxWidth__impl__uuyqc(targetConstraints);
      } else {
        tmp_1 = coerceAtLeast_0(_Constraints___get_maxWidth__impl__uuyqc(constraints), _Constraints___get_minWidth__impl__hi9lfi(targetConstraints));
      }
      var resolvedMaxWidth = tmp_1;
      var tmp_2;
      if (!equals(this.minHeight_1, Companion_getInstance_4().get_Unspecified_9b9rm3_k$())) {
        tmp_2 = _Constraints___get_minHeight__impl__ev4bgx(targetConstraints);
      } else {
        tmp_2 = coerceAtMost(_Constraints___get_minHeight__impl__ev4bgx(constraints), _Constraints___get_maxHeight__impl__dt3e8z(targetConstraints));
      }
      var resolvedMinHeight = tmp_2;
      var tmp_3;
      if (!equals(this.maxHeight_1, Companion_getInstance_4().get_Unspecified_9b9rm3_k$())) {
        tmp_3 = _Constraints___get_maxHeight__impl__dt3e8z(targetConstraints);
      } else {
        tmp_3 = coerceAtLeast_0(_Constraints___get_maxHeight__impl__dt3e8z(constraints), _Constraints___get_minHeight__impl__ev4bgx(targetConstraints));
      }
      var resolvedMaxHeight = tmp_3;
      tmp = Constraints(resolvedMinWidth, resolvedMaxWidth, resolvedMinHeight, resolvedMaxHeight);
    }
    var wrappedConstraints = tmp;
    var placeable = measurable.measure_4dmfk1_k$(wrappedConstraints);
    var tmp_4 = placeable.get_width_j0q4yl_k$();
    var tmp_5 = placeable.get_height_e7t92o_k$();
    return _this__u8e3s4.layout$default_n19e5l_k$(tmp_4, tmp_5, VOID, SizeNode$measure$lambda(placeable));
  };
  protoOf(SizeNode).minIntrinsicWidth_nsvhwg_k$ = function (_this__u8e3s4, measurable, height) {
    var constraints = _get_targetConstraints__wn7g24(_this__u8e3s4, this);
    var tmp;
    if (_Constraints___get_hasFixedWidth__impl__4p17wc(constraints)) {
      tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    } else {
      tmp = constrainWidth(constraints, measurable.minIntrinsicWidth_jyhjuj_k$(height));
    }
    return tmp;
  };
  protoOf(SizeNode).minIntrinsicHeight_xt6ly1_k$ = function (_this__u8e3s4, measurable, width) {
    var constraints = _get_targetConstraints__wn7g24(_this__u8e3s4, this);
    var tmp;
    if (_Constraints___get_hasFixedHeight__impl__y56fxx(constraints)) {
      tmp = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    } else {
      tmp = constrainHeight(constraints, measurable.minIntrinsicHeight_p2a4ou_k$(width));
    }
    return tmp;
  };
  protoOf(SizeNode).maxIntrinsicWidth_epsb1u_k$ = function (_this__u8e3s4, measurable, height) {
    var constraints = _get_targetConstraints__wn7g24(_this__u8e3s4, this);
    var tmp;
    if (_Constraints___get_hasFixedWidth__impl__4p17wc(constraints)) {
      tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    } else {
      tmp = constrainWidth(constraints, measurable.maxIntrinsicWidth_b8umbx_k$(height));
    }
    return tmp;
  };
  protoOf(SizeNode).maxIntrinsicHeight_nrifyt_k$ = function (_this__u8e3s4, measurable, width) {
    var constraints = _get_targetConstraints__wn7g24(_this__u8e3s4, this);
    var tmp;
    if (_Constraints___get_hasFixedHeight__impl__y56fxx(constraints)) {
      tmp = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    } else {
      tmp = constrainHeight(constraints, measurable.maxIntrinsicHeight_b0krtc_k$(width));
    }
    return tmp;
  };
  function UnspecifiedConstraintsNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.placeRelative$default_yv6dex_k$($placeable, 0, 0);
      return Unit_getInstance();
    };
  }
  function UnspecifiedConstraintsNode(minWidth, minHeight) {
    minWidth = minWidth === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : minHeight;
    Node.call(this);
    this.minWidth_1 = minWidth;
    this.minHeight_1 = minHeight;
  }
  protoOf(UnspecifiedConstraintsNode).set_minWidth_nt0wsq_k$ = function (_set____db54di) {
    this.minWidth_1 = _set____db54di;
  };
  protoOf(UnspecifiedConstraintsNode).get_minWidth_3ut7ei_k$ = function () {
    return this.minWidth_1;
  };
  protoOf(UnspecifiedConstraintsNode).set_minHeight_o84vor_k$ = function (_set____db54di) {
    this.minHeight_1 = _set____db54di;
  };
  protoOf(UnspecifiedConstraintsNode).get_minHeight_lqlp2r_k$ = function () {
    return this.minHeight_1;
  };
  protoOf(UnspecifiedConstraintsNode).measure_z885gt_k$ = function (_this__u8e3s4, measurable, constraints) {
    var tmp;
    if (!equals(this.minWidth_1, Companion_getInstance_4().get_Unspecified_9b9rm3_k$()) ? _Constraints___get_minWidth__impl__hi9lfi(constraints) === 0 : false) {
      tmp = coerceAtLeast_0(coerceAtMost(_this__u8e3s4.roundToPx_yb7vg8_k$(this.minWidth_1), _Constraints___get_maxWidth__impl__uuyqc(constraints)), 0);
    } else {
      tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints);
    }
    var tmp_0 = tmp;
    var tmp_1 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var tmp_2;
    if (!equals(this.minHeight_1, Companion_getInstance_4().get_Unspecified_9b9rm3_k$()) ? _Constraints___get_minHeight__impl__ev4bgx(constraints) === 0 : false) {
      tmp_2 = coerceAtLeast_0(coerceAtMost(_this__u8e3s4.roundToPx_yb7vg8_k$(this.minHeight_1), _Constraints___get_maxHeight__impl__dt3e8z(constraints)), 0);
    } else {
      tmp_2 = _Constraints___get_minHeight__impl__ev4bgx(constraints);
    }
    var wrappedConstraints = Constraints(tmp_0, tmp_1, tmp_2, _Constraints___get_maxHeight__impl__dt3e8z(constraints));
    var placeable = measurable.measure_4dmfk1_k$(wrappedConstraints);
    var tmp_3 = placeable.get_width_j0q4yl_k$();
    var tmp_4 = placeable.get_height_e7t92o_k$();
    return _this__u8e3s4.layout$default_n19e5l_k$(tmp_3, tmp_4, VOID, UnspecifiedConstraintsNode$measure$lambda(placeable));
  };
  protoOf(UnspecifiedConstraintsNode).minIntrinsicWidth_nsvhwg_k$ = function (_this__u8e3s4, measurable, height) {
    return coerceAtLeast_0(measurable.minIntrinsicWidth_jyhjuj_k$(height), !equals(this.minWidth_1, Companion_getInstance_4().get_Unspecified_9b9rm3_k$()) ? _this__u8e3s4.roundToPx_yb7vg8_k$(this.minWidth_1) : 0);
  };
  protoOf(UnspecifiedConstraintsNode).maxIntrinsicWidth_epsb1u_k$ = function (_this__u8e3s4, measurable, height) {
    return coerceAtLeast_0(measurable.maxIntrinsicWidth_b8umbx_k$(height), !equals(this.minWidth_1, Companion_getInstance_4().get_Unspecified_9b9rm3_k$()) ? _this__u8e3s4.roundToPx_yb7vg8_k$(this.minWidth_1) : 0);
  };
  protoOf(UnspecifiedConstraintsNode).minIntrinsicHeight_xt6ly1_k$ = function (_this__u8e3s4, measurable, width) {
    return coerceAtLeast_0(measurable.minIntrinsicHeight_p2a4ou_k$(width), !equals(this.minHeight_1, Companion_getInstance_4().get_Unspecified_9b9rm3_k$()) ? _this__u8e3s4.roundToPx_yb7vg8_k$(this.minHeight_1) : 0);
  };
  protoOf(UnspecifiedConstraintsNode).maxIntrinsicHeight_nrifyt_k$ = function (_this__u8e3s4, measurable, width) {
    return coerceAtLeast_0(measurable.maxIntrinsicHeight_b0krtc_k$(width), !equals(this.minHeight_1, Companion_getInstance_4().get_Unspecified_9b9rm3_k$()) ? _this__u8e3s4.roundToPx_yb7vg8_k$(this.minHeight_1) : 0);
  };
  function size$lambda($size) {
    return function ($this$null) {
      $this$null.set_name_wkmnld_k$('size');
      $this$null.set_value_rjqr2d_k$(new Dp($size));
      return Unit_getInstance();
    };
  }
  function heightIn$lambda($min, $max) {
    return function ($this$null) {
      $this$null.set_name_wkmnld_k$('heightIn');
      $this$null.get_properties_zhllqc_k$().set_vvveh5_k$('min', new Dp($min));
      $this$null.get_properties_zhllqc_k$().set_vvveh5_k$('max', new Dp($max));
      return Unit_getInstance();
    };
  }
  function Direction_Vertical_getInstance() {
    Direction_initEntries();
    return Direction_Vertical_instance;
  }
  function Direction_Horizontal_getInstance() {
    Direction_initEntries();
    return Direction_Horizontal_instance;
  }
  function Direction_Both_getInstance() {
    Direction_initEntries();
    return Direction_Both_instance;
  }
  var properties_initialized_Size_kt_x7rk2r;
  function _init_properties_Size_kt__jcru8v() {
    if (!properties_initialized_Size_kt_x7rk2r) {
      properties_initialized_Size_kt_x7rk2r = true;
      FillWholeMaxWidth = Companion_getInstance_8().width_h0xe6_k$(1.0);
      FillWholeMaxHeight = Companion_getInstance_8().height_21djpr_k$(1.0);
      FillWholeMaxSize = Companion_getInstance_8().size_34i8tl_k$(1.0);
      WrapContentWidthCenter = Companion_getInstance_9().width_5b10pq_k$(Companion_getInstance().get_CenterHorizontally_97ab0v_k$(), false);
      WrapContentWidthStart = Companion_getInstance_9().width_5b10pq_k$(Companion_getInstance().get_Start_ih4i6x_k$(), false);
      WrapContentHeightCenter = Companion_getInstance_9().height_lq0arx_k$(Companion_getInstance().get_CenterVertically_dmkbbz_k$(), false);
      WrapContentHeightTop = Companion_getInstance_9().height_lq0arx_k$(Companion_getInstance().get_Top_18jj1w_k$(), false);
      WrapContentSizeCenter = Companion_getInstance_9().size_xsrtan_k$(Companion_getInstance().get_Center_3arb0i_k$(), false);
      WrapContentSizeTopStart = Companion_getInstance_9().size_xsrtan_k$(Companion_getInstance().get_TopStart_o4x792_k$(), false);
    }
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  var Companion_instance_2;
  function Companion_getInstance_10() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function WindowInsets() {
  }
  function WindowInsets_0(left, top, right, bottom) {
    left = left === VOID ? 0 : left;
    top = top === VOID ? 0 : top;
    right = right === VOID ? 0 : right;
    bottom = bottom === VOID ? 0 : bottom;
    return new FixedIntInsets(left, top, right, bottom);
  }
  function _get_leftVal__7g7e4p($this) {
    return $this.leftVal_1;
  }
  function _get_topVal__iy0agv($this) {
    return $this.topVal_1;
  }
  function _get_rightVal__1fxr7e($this) {
    return $this.rightVal_1;
  }
  function _get_bottomVal__lks4yj($this) {
    return $this.bottomVal_1;
  }
  function FixedIntInsets(leftVal, topVal, rightVal, bottomVal) {
    this.leftVal_1 = leftVal;
    this.topVal_1 = topVal;
    this.rightVal_1 = rightVal;
    this.bottomVal_1 = bottomVal;
  }
  protoOf(FixedIntInsets).getLeft_sdff2j_k$ = function (density, layoutDirection) {
    return this.leftVal_1;
  };
  protoOf(FixedIntInsets).getTop_j1mevb_k$ = function (density) {
    return this.topVal_1;
  };
  protoOf(FixedIntInsets).getRight_nwst5g_k$ = function (density, layoutDirection) {
    return this.rightVal_1;
  };
  protoOf(FixedIntInsets).getBottom_4od39h_k$ = function (density) {
    return this.bottomVal_1;
  };
  protoOf(FixedIntInsets).toString = function () {
    return 'Insets(left=' + this.leftVal_1 + ', top=' + this.topVal_1 + ', right=' + this.rightVal_1 + ', bottom=' + this.bottomVal_1 + ')';
  };
  protoOf(FixedIntInsets).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof FixedIntInsets)) {
      return false;
    }
    return ((this.leftVal_1 === other.leftVal_1 ? this.topVal_1 === other.topVal_1 : false) ? this.rightVal_1 === other.rightVal_1 : false) ? this.bottomVal_1 === other.bottomVal_1 : false;
  };
  protoOf(FixedIntInsets).hashCode = function () {
    var result = this.leftVal_1;
    result = imul(31, result) + this.topVal_1 | 0;
    result = imul(31, result) + this.rightVal_1 | 0;
    result = imul(31, result) + this.bottomVal_1 | 0;
    return result;
  };
  function get_ModifierLocalConsumedWindowInsets() {
    _init_properties_WindowInsetsPadding_kt__2qyozr();
    return ModifierLocalConsumedWindowInsets;
  }
  var ModifierLocalConsumedWindowInsets;
  function ModifierLocalConsumedWindowInsets$lambda() {
    _init_properties_WindowInsetsPadding_kt__2qyozr();
    return WindowInsets_0(0, 0, 0, 0);
  }
  var properties_initialized_WindowInsetsPadding_kt_k80ef9;
  function _init_properties_WindowInsetsPadding_kt__2qyozr() {
    if (!properties_initialized_WindowInsetsPadding_kt_k80ef9) {
      properties_initialized_WindowInsetsPadding_kt_k80ef9 = true;
      ModifierLocalConsumedWindowInsets = modifierLocalOf(ModifierLocalConsumedWindowInsets$lambda);
    }
  }
  function NoOp() {
  }
  protoOf(NoOp).equals = function (other) {
    if (!(other instanceof NoOp))
      return false;
    other instanceof NoOp || THROW_CCE();
    return true;
  };
  protoOf(NoOp).hashCode = function () {
    return 0;
  };
  protoOf(NoOp).toString = function () {
    return '@androidx.compose.foundation.layout.internal.NoOp()';
  };
  function get_ZeroInsets() {
    _init_properties_WindowInsets_notMobile_kt__cg4w4z();
    return ZeroInsets;
  }
  var ZeroInsets;
  function get_statusBars(_this__u8e3s4) {
    _init_properties_WindowInsets_notMobile_kt__cg4w4z();
    return get_ZeroInsets();
  }
  var properties_initialized_WindowInsets_notMobile_kt_v7y701;
  function _init_properties_WindowInsets_notMobile_kt__cg4w4z() {
    if (!properties_initialized_WindowInsets_notMobile_kt_v7y701) {
      properties_initialized_WindowInsets_notMobile_kt_v7y701 = true;
      ZeroInsets = WindowInsets_0(0, 0, 0, 0);
    }
  }
  //region block: post-declaration
  protoOf(Arrangement$Absolute$Left$1).get_spacing_zb7agn_k$ = get_spacing;
  protoOf(Arrangement$Absolute$Center$1).get_spacing_zb7agn_k$ = get_spacing;
  protoOf(Arrangement$Absolute$Right$1).get_spacing_zb7agn_k$ = get_spacing;
  protoOf(Arrangement$Absolute$SpaceBetween$1).get_spacing_zb7agn_k$ = get_spacing;
  protoOf(Arrangement$Absolute$SpaceEvenly$1).get_spacing_zb7agn_k$ = get_spacing;
  protoOf(Arrangement$Absolute$SpaceAround$1).get_spacing_zb7agn_k$ = get_spacing;
  protoOf(Arrangement$Start$1).get_spacing_zb7agn_k$ = get_spacing;
  protoOf(Arrangement$End$1).get_spacing_zb7agn_k$ = get_spacing;
  protoOf(Arrangement$Top$1).get_spacing_zb7agn_k$ = get_spacing_0;
  protoOf(Arrangement$Bottom$1).get_spacing_zb7agn_k$ = get_spacing_0;
  protoOf(BoxMeasurePolicy).minIntrinsicWidth_dwfcse_k$ = minIntrinsicWidth;
  protoOf(BoxMeasurePolicy).minIntrinsicHeight_xlhgwn_k$ = minIntrinsicHeight;
  protoOf(BoxMeasurePolicy).maxIntrinsicWidth_cx7ze4_k$ = maxIntrinsicWidth;
  protoOf(BoxMeasurePolicy).maxIntrinsicHeight_3a4xm1_k$ = maxIntrinsicHeight;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).minIntrinsicWidth_dwfcse_k$ = minIntrinsicWidth;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).minIntrinsicHeight_xlhgwn_k$ = minIntrinsicHeight;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).maxIntrinsicWidth_cx7ze4_k$ = maxIntrinsicWidth;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).maxIntrinsicHeight_3a4xm1_k$ = maxIntrinsicHeight;
  protoOf(PaddingNode).minIntrinsicWidth_nsvhwg_k$ = minIntrinsicWidth_0;
  protoOf(PaddingNode).minIntrinsicHeight_xt6ly1_k$ = minIntrinsicHeight_0;
  protoOf(PaddingNode).maxIntrinsicWidth_epsb1u_k$ = maxIntrinsicWidth_0;
  protoOf(PaddingNode).maxIntrinsicHeight_nrifyt_k$ = maxIntrinsicHeight_0;
  protoOf(PaddingValuesModifier).minIntrinsicWidth_nsvhwg_k$ = minIntrinsicWidth_0;
  protoOf(PaddingValuesModifier).minIntrinsicHeight_xt6ly1_k$ = minIntrinsicHeight_0;
  protoOf(PaddingValuesModifier).maxIntrinsicWidth_epsb1u_k$ = maxIntrinsicWidth_0;
  protoOf(PaddingValuesModifier).maxIntrinsicHeight_nrifyt_k$ = maxIntrinsicHeight_0;
  protoOf(FillNode).minIntrinsicWidth_nsvhwg_k$ = minIntrinsicWidth_0;
  protoOf(FillNode).minIntrinsicHeight_xt6ly1_k$ = minIntrinsicHeight_0;
  protoOf(FillNode).maxIntrinsicWidth_epsb1u_k$ = maxIntrinsicWidth_0;
  protoOf(FillNode).maxIntrinsicHeight_nrifyt_k$ = maxIntrinsicHeight_0;
  protoOf(WrapContentNode).minIntrinsicWidth_nsvhwg_k$ = minIntrinsicWidth_0;
  protoOf(WrapContentNode).minIntrinsicHeight_xt6ly1_k$ = minIntrinsicHeight_0;
  protoOf(WrapContentNode).maxIntrinsicWidth_epsb1u_k$ = maxIntrinsicWidth_0;
  protoOf(WrapContentNode).maxIntrinsicHeight_nrifyt_k$ = maxIntrinsicHeight_0;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Box;
  _.$_$.b = PaddingValues_2;
  _.$_$.c = PaddingValues_0;
  _.$_$.d = PaddingValues_1;
  _.$_$.e = calculateEndPadding;
  _.$_$.f = calculateStartPadding;
  _.$_$.g = defaultMinSize;
  _.$_$.h = heightIn;
  _.$_$.i = padding_1;
  _.$_$.j = padding_0;
  _.$_$.k = padding;
  _.$_$.l = rememberBoxMeasurePolicy;
  _.$_$.m = size;
  _.$_$.n = get_statusBars;
  _.$_$.o = wrapContentHeight;
  _.$_$.p = BoxScopeInstance_getInstance;
  _.$_$.q = Companion_getInstance_10;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-foundation-foundation-layout.js.map
