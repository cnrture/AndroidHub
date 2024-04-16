(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-ui-ui-geometry.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './skiko-kjs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./skiko-kjs.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-graphics'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-graphics'.");
    }
    if (typeof this['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-graphics'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-graphics'.");
    }
    if (typeof this['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-graphics'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-graphics'.");
    }
    if (typeof this['skiko-kjs'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-graphics'. Its dependency 'skiko-kjs' was not found. Please, check whether 'skiko-kjs' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-graphics'.");
    }
    root['compose-multiplatform-core-compose-ui-ui-graphics'] = factory(typeof this['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined' ? {} : this['compose-multiplatform-core-compose-ui-ui-graphics'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-compose-ui-ui-geometry'], this['compose-multiplatform-core-compose-ui-ui-unit'], this['skiko-kjs']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_skiko_skiko) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var sign = Math.sign;
  var protoOf = kotlin_kotlin.$_$.ic;
  var objectMeta = kotlin_kotlin.$_$.hc;
  var setMetadataFor = kotlin_kotlin.$_$.jc;
  var THROW_CCE = kotlin_kotlin.$_$.ng;
  var classMeta = kotlin_kotlin.$_$.xa;
  var VOID = kotlin_kotlin.$_$.g;
  var Unit_instance = kotlin_kotlin.$_$.k5;
  var interfaceMeta = kotlin_kotlin.$_$.mb;
  var Long = kotlin_kotlin.$_$.gg;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.y3;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.z3;
  var ulongToDouble = kotlin_kotlin.$_$.ci;
  var equals = kotlin_kotlin.$_$.ab;
  var ULong__hashCode_impl_6hv2lb = kotlin_kotlin.$_$.a4;
  var toString = kotlin_kotlin.$_$.nc;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.v1;
  var numberToInt = kotlin_kotlin.$_$.ec;
  var toLong = kotlin_kotlin.$_$.lc;
  var toRawBits = kotlin_kotlin.$_$.xh;
  var toShort = kotlin_kotlin.$_$.mc;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.w4;
  var floatFromBits = kotlin_kotlin.$_$.db;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.s;
  var _Offset___get_y__impl__8bzhra = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.t;
  var isFinite = kotlin_kotlin.$_$.ih;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.b;
  var trimIndent = kotlin_kotlin.$_$.pf;
  var get_PI = kotlin_kotlin.$_$.oc;
  var hashCode = kotlin_kotlin.$_$.kb;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.y;
  var Offset_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.c;
  var toRect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j;
  var Offset__hashCode_impl_hbql41 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.o;
  var getNumberHashCode = kotlin_kotlin.$_$.gb;
  var charSequenceLength = kotlin_kotlin.$_$.va;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var getStringHashCode = kotlin_kotlin.$_$.jb;
  var withSign = kotlin_kotlin.$_$.uc;
  var compareTo = kotlin_kotlin.$_$.ya;
  var objectCreate = kotlin_kotlin.$_$.gc;
  var coerceIn = kotlin_kotlin.$_$.ad;
  var arrayCopy = kotlin_kotlin.$_$.h6;
  var coerceIn_0 = kotlin_kotlin.$_$.zc;
  var contentEquals = kotlin_kotlin.$_$.u6;
  var contentHashCode = kotlin_kotlin.$_$.w6;
  var toBits = kotlin_kotlin.$_$.vh;
  var isNaN_0 = kotlin_kotlin.$_$.kh;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.nh;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.a1;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g;
  var Size__hashCode_impl_2h1qpd = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.u;
  var toPx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c;
  var toPx_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d;
  var toDp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i;
  var toSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e;
  var Density = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f;
  var Density_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.p2;
  var BlendMode_SRC_OVER_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.z1;
  var BlendMode_LUMINOSITY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.o1;
  var BlendMode_COLOR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.c1;
  var BlendMode_SATURATION_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.t1;
  var BlendMode_HUE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.m1;
  var BlendMode_MULTIPLY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.q1;
  var BlendMode_EXCLUSION_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.k1;
  var BlendMode_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.e1;
  var BlendMode_SOFT_LIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.v1;
  var BlendMode_HARD_LIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.l1;
  var BlendMode_COLOR_BURN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.a1;
  var BlendMode_COLOR_DODGE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.b1;
  var BlendMode_LIGHTEN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.n1;
  var BlendMode_DARKEN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.d1;
  var BlendMode_OVERLAY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.r1;
  var BlendMode_SCREEN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.u1;
  var BlendMode_MODULATE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.p1;
  var BlendMode_PLUS_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.s1;
  var BlendMode_XOR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.b2;
  var BlendMode_DST_ATOP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.f1;
  var BlendMode_SRC_ATOP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.w1;
  var BlendMode_DST_OUT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h1;
  var BlendMode_SRC_OUT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.y1;
  var BlendMode_DST_IN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g1;
  var BlendMode_SRC_IN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.x1;
  var BlendMode_DST_OVER_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.i1;
  var BlendMode_DST_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.j1;
  var BlendMode_SRC_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.a2;
  var BlendMode_CLEAR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.z;
  var Companion_instance = kotlin_org_jetbrains_skiko_skiko.$_$.x7;
  var _CornerRadius___get_x__impl__1594cn = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k;
  var _CornerRadius___get_y__impl__tyvleu = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l;
  var Companion_instance_0 = kotlin_org_jetbrains_skiko_skiko.$_$.w7;
  var Rect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var ClipMode_INTERSECT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.d2;
  var ClipMode_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.c2;
  var Matrix44 = kotlin_org_jetbrains_skiko_skiko.$_$.m8;
  var PaintMode_FILL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g2;
  var PaintMode_STROKE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h2;
  var PaintStrokeCap_BUTT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.i2;
  var PaintStrokeCap_SQUARE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.k2;
  var PaintStrokeCap_ROUND_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.j2;
  var PaintStrokeJoin_MITER_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.m2;
  var PaintStrokeJoin_BEVEL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.l2;
  var PaintStrokeJoin_ROUND_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.n2;
  var Paint_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.f7;
  var PathOp_XOR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.v2;
  var PathOp_REVERSE_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.t2;
  var PathOp_UNION_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.u2;
  var PathOp_INTERSECT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.s2;
  var PathOp_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.r2;
  var Path_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.g7;
  var PathFillMode_WINDING_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.q2;
  var PathFillMode_EVEN_ODD_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.p2;
  var PathDirection_COUNTER_CLOCKWISE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.o2;
  var Companion_getInstance_1 = kotlin_org_jetbrains_skiko_skiko.$_$.u7;
  var Companion_getInstance_2 = kotlin_org_jetbrains_skiko_skiko.$_$.v7;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.q2;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(BlendMode, 'BlendMode', classMeta);
  setMetadataFor(Brush, 'Brush', classMeta);
  setMetadataFor(ShaderBrush, 'ShaderBrush', classMeta, Brush);
  setMetadataFor(SolidColor, 'SolidColor', classMeta, Brush);
  function clipRect(rect, clipOp) {
    return this.d3j(rect.a2w_1, rect.b2w_1, rect.c2w_1, rect.d2w_1, clipOp);
  }
  function clipRect$default(rect, clipOp, $super) {
    clipOp = clipOp === VOID ? Companion_getInstance_4().g3j_1 : clipOp;
    var tmp;
    if ($super === VOID) {
      this.c3j(rect, clipOp);
      tmp = Unit_instance;
    } else {
      clipRect(rect, clipOp);
      tmp = Unit_instance;
    }
    return tmp;
  }
  function clipPath$default(path, clipOp, $super) {
    clipOp = clipOp === VOID ? Companion_getInstance_4().g3j_1 : clipOp;
    var tmp;
    if ($super === VOID) {
      this.h3j(path, clipOp);
      tmp = Unit_instance;
    } else {
      tmp = $super.h3j.call(this, path, new ClipOp(clipOp));
    }
    return tmp;
  }
  function drawRect(rect, paint) {
    return this.k3j(rect.a2w_1, rect.b2w_1, rect.c2w_1, rect.d2w_1, paint);
  }
  setMetadataFor(Canvas, 'Canvas', interfaceMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(ClipOp, 'ClipOp', classMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(Color, 'Color', classMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(Matrix, 'Matrix', classMeta);
  setMetadataFor(Outline, 'Outline', classMeta);
  setMetadataFor(Rectangle, 'Rectangle', classMeta, Outline);
  setMetadataFor(Rounded, 'Rounded', classMeta, Outline);
  setMetadataFor(Generic, 'Generic', classMeta, Outline);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  function addPath$default(path, offset, $super) {
    offset = offset === VOID ? Companion_getInstance().v2v_1 : offset;
    var tmp;
    if ($super === VOID) {
      this.p3n(path, offset);
      tmp = Unit_instance;
    } else {
      tmp = $super.p3n.call(this, path, new Offset_0(offset));
    }
    return tmp;
  }
  setMetadataFor(Path, 'Path', interfaceMeta);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(RectangleShape$1, VOID, classMeta);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(Shadow, 'Shadow', classMeta, VOID, VOID, Shadow);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor(Adaptation, 'Adaptation', classMeta);
  setMetadataFor(Adaptation$Companion$Bradford$1, VOID, classMeta, Adaptation);
  setMetadataFor(Adaptation$Companion$VonKries$1, VOID, classMeta, Adaptation);
  setMetadataFor(Adaptation$Companion$Ciecat02$1, VOID, classMeta, Adaptation);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor(Companion_12, 'Companion', objectMeta);
  setMetadataFor(ColorModel, 'ColorModel', classMeta);
  setMetadataFor(Companion_13, 'Companion', objectMeta);
  setMetadataFor(ColorSpace, 'ColorSpace', classMeta);
  setMetadataFor(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', classMeta);
  setMetadataFor(ColorSpaces, 'ColorSpaces', objectMeta);
  setMetadataFor(Connector, 'Connector', classMeta);
  setMetadataFor(Connector$Companion$identity$1, VOID, classMeta, Connector);
  setMetadataFor(RgbConnector, 'RgbConnector', classMeta, Connector);
  setMetadataFor(Companion_14, 'Companion', objectMeta);
  setMetadataFor(Illuminant, 'Illuminant', objectMeta);
  setMetadataFor(Companion_15, 'Companion', objectMeta);
  setMetadataFor(Lab, 'Lab', classMeta, ColorSpace);
  setMetadataFor(Companion_16, 'Companion', objectMeta);
  setMetadataFor(Oklab, 'Oklab', classMeta, ColorSpace);
  setMetadataFor(Companion_17, 'Companion', objectMeta);
  setMetadataFor(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', classMeta);
  setMetadataFor(Companion_18, 'Companion', objectMeta);
  setMetadataFor(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', classMeta);
  setMetadataFor(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', classMeta);
  setMetadataFor(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', classMeta);
  setMetadataFor(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', classMeta);
  setMetadataFor(Rgb, 'Rgb', classMeta, ColorSpace);
  setMetadataFor(TransferParameters, 'TransferParameters', classMeta);
  setMetadataFor(WhitePoint, 'WhitePoint', classMeta);
  setMetadataFor(Xyz, 'Xyz', classMeta, ColorSpace);
  setMetadataFor(DrawParams, 'DrawParams', classMeta, VOID, VOID, DrawParams);
  function get_canvas() {
    return new EmptyCanvas();
  }
  setMetadataFor(DrawContext, 'DrawContext', interfaceMeta);
  setMetadataFor(CanvasDrawScope$drawContext$1, VOID, classMeta, VOID, [DrawContext]);
  function get_size() {
    return this.z3t().x3t();
  }
  function drawPath$default(path, color, alpha, style, colorFilter, blendMode, $super) {
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_23().m3t_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.a3u(path, color, alpha, style, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.a3u.call(this, path, new Color(color), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  setMetadataFor(DrawScope, 'DrawScope', interfaceMeta, VOID, [Density_0]);
  setMetadataFor(CanvasDrawScope, 'CanvasDrawScope', classMeta, VOID, [DrawScope], CanvasDrawScope);
  setMetadataFor(asDrawTransform$1, VOID, classMeta);
  setMetadataFor(DrawStyle, 'DrawStyle', classMeta);
  setMetadataFor(Companion_19, 'Companion', objectMeta);
  setMetadataFor(Fill, 'Fill', objectMeta, DrawStyle);
  setMetadataFor(Stroke, 'Stroke', classMeta, DrawStyle);
  setMetadataFor(EmptyCanvas, 'EmptyCanvas', classMeta, VOID, [Canvas], EmptyCanvas);
  setMetadataFor(SkiaBackedCanvas, 'SkiaBackedCanvas', classMeta, VOID, [Canvas]);
  setMetadataFor(SkiaBackedPaint, 'SkiaBackedPaint', classMeta, VOID, VOID, SkiaBackedPaint);
  setMetadataFor(SkiaBackedPath, 'SkiaBackedPath', classMeta, VOID, [Path], SkiaBackedPath);
  setMetadataFor(SkiaBackedPathEffect, 'SkiaBackedPathEffect', classMeta);
  //endregion
  function _BlendMode___init__impl__q6jalh(value) {
    return value;
  }
  function Companion() {
    Companion_instance_1 = this;
    this.s3h_1 = _BlendMode___init__impl__q6jalh(0);
    this.t3h_1 = _BlendMode___init__impl__q6jalh(1);
    this.u3h_1 = _BlendMode___init__impl__q6jalh(2);
    this.v3h_1 = _BlendMode___init__impl__q6jalh(3);
    this.w3h_1 = _BlendMode___init__impl__q6jalh(4);
    this.x3h_1 = _BlendMode___init__impl__q6jalh(5);
    this.y3h_1 = _BlendMode___init__impl__q6jalh(6);
    this.z3h_1 = _BlendMode___init__impl__q6jalh(7);
    this.a3i_1 = _BlendMode___init__impl__q6jalh(8);
    this.b3i_1 = _BlendMode___init__impl__q6jalh(9);
    this.c3i_1 = _BlendMode___init__impl__q6jalh(10);
    this.d3i_1 = _BlendMode___init__impl__q6jalh(11);
    this.e3i_1 = _BlendMode___init__impl__q6jalh(12);
    this.f3i_1 = _BlendMode___init__impl__q6jalh(13);
    this.g3i_1 = _BlendMode___init__impl__q6jalh(14);
    this.h3i_1 = _BlendMode___init__impl__q6jalh(15);
    this.i3i_1 = _BlendMode___init__impl__q6jalh(16);
    this.j3i_1 = _BlendMode___init__impl__q6jalh(17);
    this.k3i_1 = _BlendMode___init__impl__q6jalh(18);
    this.l3i_1 = _BlendMode___init__impl__q6jalh(19);
    this.m3i_1 = _BlendMode___init__impl__q6jalh(20);
    this.n3i_1 = _BlendMode___init__impl__q6jalh(21);
    this.o3i_1 = _BlendMode___init__impl__q6jalh(22);
    this.p3i_1 = _BlendMode___init__impl__q6jalh(23);
    this.q3i_1 = _BlendMode___init__impl__q6jalh(24);
    this.r3i_1 = _BlendMode___init__impl__q6jalh(25);
    this.s3i_1 = _BlendMode___init__impl__q6jalh(26);
    this.t3i_1 = _BlendMode___init__impl__q6jalh(27);
    this.u3i_1 = _BlendMode___init__impl__q6jalh(28);
  }
  var Companion_instance_1;
  function Companion_getInstance_3() {
    if (Companion_instance_1 == null)
      new Companion();
    return Companion_instance_1;
  }
  function BlendMode__toString_impl_uuibkd($this) {
    return $this === Companion_getInstance_3().s3h_1 ? 'Clear' : $this === Companion_getInstance_3().t3h_1 ? 'Src' : $this === Companion_getInstance_3().u3h_1 ? 'Dst' : $this === Companion_getInstance_3().v3h_1 ? 'SrcOver' : $this === Companion_getInstance_3().w3h_1 ? 'DstOver' : $this === Companion_getInstance_3().x3h_1 ? 'SrcIn' : $this === Companion_getInstance_3().y3h_1 ? 'DstIn' : $this === Companion_getInstance_3().z3h_1 ? 'SrcOut' : $this === Companion_getInstance_3().a3i_1 ? 'DstOut' : $this === Companion_getInstance_3().b3i_1 ? 'SrcAtop' : $this === Companion_getInstance_3().c3i_1 ? 'DstAtop' : $this === Companion_getInstance_3().d3i_1 ? 'Xor' : $this === Companion_getInstance_3().e3i_1 ? 'Plus' : $this === Companion_getInstance_3().f3i_1 ? 'Modulate' : $this === Companion_getInstance_3().g3i_1 ? 'Screen' : $this === Companion_getInstance_3().h3i_1 ? 'Overlay' : $this === Companion_getInstance_3().i3i_1 ? 'Darken' : $this === Companion_getInstance_3().j3i_1 ? 'Lighten' : $this === Companion_getInstance_3().k3i_1 ? 'ColorDodge' : $this === Companion_getInstance_3().l3i_1 ? 'ColorBurn' : $this === Companion_getInstance_3().m3i_1 ? 'HardLight' : $this === Companion_getInstance_3().n3i_1 ? 'Softlight' : $this === Companion_getInstance_3().o3i_1 ? 'Difference' : $this === Companion_getInstance_3().p3i_1 ? 'Exclusion' : $this === Companion_getInstance_3().q3i_1 ? 'Multiply' : $this === Companion_getInstance_3().r3i_1 ? 'Hue' : $this === Companion_getInstance_3().s3i_1 ? 'Saturation' : $this === Companion_getInstance_3().t3i_1 ? 'Color' : $this === Companion_getInstance_3().u3i_1 ? 'Luminosity' : 'Unknown';
  }
  function BlendMode__hashCode_impl_93ceri($this) {
    return $this;
  }
  function BlendMode__equals_impl_1tm25i($this, other) {
    if (!(other instanceof BlendMode))
      return false;
    if (!($this === (other instanceof BlendMode ? other.v3i_1 : THROW_CCE())))
      return false;
    return true;
  }
  function BlendMode(value) {
    Companion_getInstance_3();
    this.v3i_1 = value;
  }
  protoOf(BlendMode).toString = function () {
    return BlendMode__toString_impl_uuibkd(this.v3i_1);
  };
  protoOf(BlendMode).hashCode = function () {
    return BlendMode__hashCode_impl_93ceri(this.v3i_1);
  };
  protoOf(BlendMode).equals = function (other) {
    return BlendMode__equals_impl_1tm25i(this.v3i_1, other);
  };
  function Brush() {
  }
  function ShaderBrush() {
  }
  function SolidColor() {
  }
  function Canvas() {
  }
  function _ClipOp___init__impl__pqwwy8(value) {
    return value;
  }
  function Companion_0() {
    Companion_instance_2 = this;
    this.f3j_1 = _ClipOp___init__impl__pqwwy8(0);
    this.g3j_1 = _ClipOp___init__impl__pqwwy8(1);
  }
  var Companion_instance_2;
  function Companion_getInstance_4() {
    if (Companion_instance_2 == null)
      new Companion_0();
    return Companion_instance_2;
  }
  function ClipOp__toString_impl_vwrlao($this) {
    return $this === Companion_getInstance_4().f3j_1 ? 'Difference' : $this === Companion_getInstance_4().g3j_1 ? 'Intersect' : 'Unknown';
  }
  function ClipOp__hashCode_impl_hd6jvl($this) {
    return $this;
  }
  function ClipOp__equals_impl_g5ajel($this, other) {
    if (!(other instanceof ClipOp))
      return false;
    if (!($this === (other instanceof ClipOp ? other.m3j_1 : THROW_CCE())))
      return false;
    return true;
  }
  function ClipOp(value) {
    Companion_getInstance_4();
    this.m3j_1 = value;
  }
  protoOf(ClipOp).toString = function () {
    return ClipOp__toString_impl_vwrlao(this.m3j_1);
  };
  protoOf(ClipOp).hashCode = function () {
    return ClipOp__hashCode_impl_hd6jvl(this.m3j_1);
  };
  protoOf(ClipOp).equals = function (other) {
    return ClipOp__equals_impl_g5ajel(this.m3j_1, other);
  };
  function _Color___init__impl__r6cqi2(value) {
    return value;
  }
  function _Color___get_value__impl__1pls5m($this) {
    return $this;
  }
  function _Color___get_colorSpace__impl__jqqozk($this) {
    // Inline function 'androidx.compose.ui.graphics.colorspace.ColorSpaces.getColorSpace' call
    var this_0 = ColorSpaces_getInstance();
    // Inline function 'kotlin.ULong.toInt' call
    // Inline function 'kotlin.ULong.and' call
    var this_1 = _Color___get_value__impl__1pls5m($this);
    var other = _ULong___init__impl__c78o9k(new Long(63, 0));
    var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).ob(_ULong___get_data__impl__fggpzb(other)));
    var id = _ULong___get_data__impl__fggpzb(this_2).fa();
    return this_0.j3k_1[id];
  }
  function Color__convert_impl_so5m8t($this, colorSpace) {
    var thisColorSpace = _Color___get_colorSpace__impl__jqqozk($this);
    if (colorSpace.equals(thisColorSpace)) {
      return $this;
    }
    var connector = connect(thisColorSpace, colorSpace);
    return connector.q3k(_Color___get_red__impl__cwrsk6($this), _Color___get_green__impl__bta9rs($this), _Color___get_blue__impl__xwez13($this), _Color___get_alpha__impl__wcfyv1($this));
  }
  function _Color___get_red__impl__cwrsk6($this) {
    var tmp;
    // Inline function 'kotlin.ULong.and' call
    var this_0 = _Color___get_value__impl__1pls5m($this);
    var other = _ULong___init__impl__c78o9k(new Long(63, 0));
    var tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).ob(_ULong___get_data__impl__fggpzb(other)));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      // Inline function 'kotlin.ULong.toFloat' call
      // Inline function 'kotlin.ULong.and' call
      // Inline function 'kotlin.ULong.shr' call
      var this_1 = _Color___get_value__impl__1pls5m($this);
      var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).nb(48));
      var other_0 = _ULong___init__impl__c78o9k(new Long(255, 0));
      // Inline function 'kotlin.ULong.toDouble' call
      var this_3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_2).ob(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongToDouble(_ULong___get_data__impl__fggpzb(this_3)) / 255.0;
    } else {
      // Inline function 'kotlin.ULong.toShort' call
      // Inline function 'kotlin.ULong.and' call
      // Inline function 'kotlin.ULong.shr' call
      var this_4 = _Color___get_value__impl__1pls5m($this);
      var this_5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).nb(48));
      var other_1 = _ULong___init__impl__c78o9k(new Long(65535, 0));
      var this_6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_5).ob(_ULong___get_data__impl__fggpzb(other_1)));
      var tmp$ret$7 = _ULong___get_data__impl__fggpzb(this_6).sb();
      tmp = Float16__toFloat_impl_6i8dal(_Float16___init__impl__fckrew(tmp$ret$7));
    }
    return tmp;
  }
  function _Color___get_green__impl__bta9rs($this) {
    var tmp;
    // Inline function 'kotlin.ULong.and' call
    var this_0 = _Color___get_value__impl__1pls5m($this);
    var other = _ULong___init__impl__c78o9k(new Long(63, 0));
    var tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).ob(_ULong___get_data__impl__fggpzb(other)));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      // Inline function 'kotlin.ULong.toFloat' call
      // Inline function 'kotlin.ULong.and' call
      // Inline function 'kotlin.ULong.shr' call
      var this_1 = _Color___get_value__impl__1pls5m($this);
      var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).nb(40));
      var other_0 = _ULong___init__impl__c78o9k(new Long(255, 0));
      // Inline function 'kotlin.ULong.toDouble' call
      var this_3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_2).ob(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongToDouble(_ULong___get_data__impl__fggpzb(this_3)) / 255.0;
    } else {
      // Inline function 'kotlin.ULong.toShort' call
      // Inline function 'kotlin.ULong.and' call
      // Inline function 'kotlin.ULong.shr' call
      var this_4 = _Color___get_value__impl__1pls5m($this);
      var this_5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).nb(32));
      var other_1 = _ULong___init__impl__c78o9k(new Long(65535, 0));
      var this_6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_5).ob(_ULong___get_data__impl__fggpzb(other_1)));
      var tmp$ret$7 = _ULong___get_data__impl__fggpzb(this_6).sb();
      tmp = Float16__toFloat_impl_6i8dal(_Float16___init__impl__fckrew(tmp$ret$7));
    }
    return tmp;
  }
  function _Color___get_blue__impl__xwez13($this) {
    var tmp;
    // Inline function 'kotlin.ULong.and' call
    var this_0 = _Color___get_value__impl__1pls5m($this);
    var other = _ULong___init__impl__c78o9k(new Long(63, 0));
    var tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).ob(_ULong___get_data__impl__fggpzb(other)));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      // Inline function 'kotlin.ULong.toFloat' call
      // Inline function 'kotlin.ULong.and' call
      // Inline function 'kotlin.ULong.shr' call
      var this_1 = _Color___get_value__impl__1pls5m($this);
      var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).nb(32));
      var other_0 = _ULong___init__impl__c78o9k(new Long(255, 0));
      // Inline function 'kotlin.ULong.toDouble' call
      var this_3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_2).ob(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongToDouble(_ULong___get_data__impl__fggpzb(this_3)) / 255.0;
    } else {
      // Inline function 'kotlin.ULong.toShort' call
      // Inline function 'kotlin.ULong.and' call
      // Inline function 'kotlin.ULong.shr' call
      var this_4 = _Color___get_value__impl__1pls5m($this);
      var this_5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).nb(16));
      var other_1 = _ULong___init__impl__c78o9k(new Long(65535, 0));
      var this_6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_5).ob(_ULong___get_data__impl__fggpzb(other_1)));
      var tmp$ret$7 = _ULong___get_data__impl__fggpzb(this_6).sb();
      tmp = Float16__toFloat_impl_6i8dal(_Float16___init__impl__fckrew(tmp$ret$7));
    }
    return tmp;
  }
  function _Color___get_alpha__impl__wcfyv1($this) {
    var tmp;
    // Inline function 'kotlin.ULong.and' call
    var this_0 = _Color___get_value__impl__1pls5m($this);
    var other = _ULong___init__impl__c78o9k(new Long(63, 0));
    var tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).ob(_ULong___get_data__impl__fggpzb(other)));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      // Inline function 'kotlin.ULong.toFloat' call
      // Inline function 'kotlin.ULong.and' call
      // Inline function 'kotlin.ULong.shr' call
      var this_1 = _Color___get_value__impl__1pls5m($this);
      var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).nb(56));
      var other_0 = _ULong___init__impl__c78o9k(new Long(255, 0));
      // Inline function 'kotlin.ULong.toDouble' call
      var this_3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_2).ob(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongToDouble(_ULong___get_data__impl__fggpzb(this_3)) / 255.0;
    } else {
      // Inline function 'kotlin.ULong.toFloat' call
      // Inline function 'kotlin.ULong.and' call
      // Inline function 'kotlin.ULong.shr' call
      var this_4 = _Color___get_value__impl__1pls5m($this);
      var this_5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).nb(6));
      var other_1 = _ULong___init__impl__c78o9k(new Long(1023, 0));
      // Inline function 'kotlin.ULong.toDouble' call
      var this_6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_5).ob(_ULong___get_data__impl__fggpzb(other_1)));
      tmp = ulongToDouble(_ULong___get_data__impl__fggpzb(this_6)) / 1023.0;
    }
    return tmp;
  }
  function Color__copy_impl_qlvcl1($this, alpha, red, green, blue) {
    return Color_0(red, green, blue, alpha, _Color___get_colorSpace__impl__jqqozk($this));
  }
  function Color__copy$default_impl_ectz3s($this, alpha, red, green, blue, $super) {
    alpha = alpha === VOID ? _Color___get_alpha__impl__wcfyv1($this) : alpha;
    red = red === VOID ? _Color___get_red__impl__cwrsk6($this) : red;
    green = green === VOID ? _Color___get_green__impl__bta9rs($this) : green;
    blue = blue === VOID ? _Color___get_blue__impl__xwez13($this) : blue;
    var tmp;
    if ($super === VOID) {
      tmp = Color__copy_impl_qlvcl1($this, alpha, red, green, blue);
    } else {
      var tmp_0 = $super;
      tmp = (tmp_0 == null ? null : new Color(tmp_0)).s3k.call(new Color($this), alpha, red, green, blue).r3k_1;
    }
    return tmp;
  }
  function Color__toString_impl_hpzmaq($this) {
    return 'Color(' + _Color___get_red__impl__cwrsk6($this) + ', ' + _Color___get_green__impl__bta9rs($this) + ', ' + _Color___get_blue__impl__xwez13($this) + ', ' + _Color___get_alpha__impl__wcfyv1($this) + ', ' + _Color___get_colorSpace__impl__jqqozk($this).t3k_1 + ')';
  }
  function Companion_1() {
    Companion_instance_3 = this;
    this.w3k_1 = Color_1(new Long(-16777216, 0));
    this.x3k_1 = Color_1(new Long(-12303292, 0));
    this.y3k_1 = Color_1(new Long(-7829368, 0));
    this.z3k_1 = Color_1(new Long(-3355444, 0));
    this.a3l_1 = Color_1(new Long(-1, 0));
    this.b3l_1 = Color_1(new Long(-65536, 0));
    this.c3l_1 = Color_1(new Long(-16711936, 0));
    this.d3l_1 = Color_1(new Long(-16776961, 0));
    this.e3l_1 = Color_1(new Long(-256, 0));
    this.f3l_1 = Color_1(new Long(-16711681, 0));
    this.g3l_1 = Color_1(new Long(-65281, 0));
    this.h3l_1 = Color_2(0);
    this.i3l_1 = Color_0(0.0, 0.0, 0.0, 0.0, ColorSpaces_getInstance().h3k_1);
  }
  var Companion_instance_3;
  function Companion_getInstance_5() {
    if (Companion_instance_3 == null)
      new Companion_1();
    return Companion_instance_3;
  }
  function Color__hashCode_impl_vjyivj($this) {
    return ULong__hashCode_impl_6hv2lb($this);
  }
  function Color__equals_impl_k06uqz($this, other) {
    if (!(other instanceof Color))
      return false;
    var tmp0_other_with_cast = other instanceof Color ? other.r3k_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Color(value) {
    Companion_getInstance_5();
    this.r3k_1 = value;
  }
  protoOf(Color).toString = function () {
    return Color__toString_impl_hpzmaq(this.r3k_1);
  };
  protoOf(Color).hashCode = function () {
    return Color__hashCode_impl_vjyivj(this.r3k_1);
  };
  protoOf(Color).equals = function (other) {
    return Color__equals_impl_k06uqz(this.r3k_1, other);
  };
  function toArgb(_this__u8e3s4) {
    // Inline function 'kotlin.ULong.toInt' call
    // Inline function 'kotlin.ULong.shr' call
    var this_0 = _Color___get_value__impl__1pls5m(Color__convert_impl_so5m8t(_this__u8e3s4, ColorSpaces_getInstance().r3j_1));
    var this_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).nb(32));
    return _ULong___get_data__impl__fggpzb(this_1).fa();
  }
  function Color_0(red, green, blue, alpha, colorSpace) {
    alpha = alpha === VOID ? 1.0 : alpha;
    colorSpace = colorSpace === VOID ? ColorSpaces_getInstance().r3j_1 : colorSpace;
    // Inline function 'kotlin.require' call
    var tmp;
    var tmp_0;
    var tmp_1;
    var containsLower = colorSpace.j3l(0);
    if (red <= colorSpace.k3l(0) ? containsLower <= red : false) {
      var containsLower_0 = colorSpace.j3l(1);
      tmp_1 = green <= colorSpace.k3l(1) ? containsLower_0 <= green : false;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      var containsLower_1 = colorSpace.j3l(2);
      tmp_0 = blue <= colorSpace.k3l(2) ? containsLower_1 <= blue : false;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = 0.0 <= alpha ? alpha <= 1.0 : false;
    } else {
      tmp = false;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp) {
      // Inline function 'androidx.compose.ui.graphics.Color.<anonymous>' call
      var message = 'red = ' + red + ', green = ' + green + ', blue = ' + blue + ', alpha = ' + alpha + ' outside the range for ' + colorSpace;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (colorSpace.l3l()) {
      var argb = numberToInt(alpha * 255.0 + 0.5) << 24 | numberToInt(red * 255.0 + 0.5) << 16 | numberToInt(green * 255.0 + 0.5) << 8 | numberToInt(blue * 255.0 + 0.5);
      // Inline function 'kotlin.ULong.shl' call
      // Inline function 'kotlin.ULong.and' call
      // Inline function 'kotlin.toULong' call
      var this_0 = _ULong___init__impl__c78o9k(toLong(argb));
      var other = _ULong___init__impl__c78o9k(new Long(-1, 0));
      var this_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).ob(_ULong___get_data__impl__fggpzb(other)));
      var tmp$ret$3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).lb(32));
      return _Color___init__impl__r6cqi2(tmp$ret$3);
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(colorSpace.m3l() === 3)) {
      // Inline function 'androidx.compose.ui.graphics.Color.<anonymous>' call
      var message_0 = 'Color only works with ColorSpaces with 3 components';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var id = colorSpace.v3k_1;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(id === -1)) {
      // Inline function 'androidx.compose.ui.graphics.Color.<anonymous>' call
      var message_1 = 'Unknown color space, please use a color space in ColorSpaces';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    var r = _Float16___init__impl__fckrew_0(red);
    var g = _Float16___init__impl__fckrew_0(green);
    var b = _Float16___init__impl__fckrew_0(blue);
    // Inline function 'kotlin.math.max' call
    // Inline function 'kotlin.math.min' call
    var b_0 = Math.min(alpha, 1.0);
    var tmp$ret$7 = Math.max(0.0, b_0);
    var a = numberToInt(tmp$ret$7 * 1023.0 + 0.5);
    // Inline function 'kotlin.ULong.or' call
    // Inline function 'kotlin.ULong.or' call
    // Inline function 'kotlin.ULong.or' call
    // Inline function 'kotlin.ULong.or' call
    // Inline function 'kotlin.ULong.shl' call
    // Inline function 'kotlin.ULong.and' call
    // Inline function 'kotlin.toULong' call
    var this_2 = _Float16___get_halfValue__impl__89tmwx(r);
    var this_3 = _ULong___init__impl__c78o9k(toLong(this_2));
    var other_0 = _ULong___init__impl__c78o9k(new Long(65535, 0));
    var this_4 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_3).ob(_ULong___get_data__impl__fggpzb(other_0)));
    var this_5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).lb(48));
    // Inline function 'kotlin.ULong.shl' call
    // Inline function 'kotlin.ULong.and' call
    // Inline function 'kotlin.toULong' call
    var this_6 = _Float16___get_halfValue__impl__89tmwx(g);
    var this_7 = _ULong___init__impl__c78o9k(toLong(this_6));
    var other_1 = _ULong___init__impl__c78o9k(new Long(65535, 0));
    var this_8 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_7).ob(_ULong___get_data__impl__fggpzb(other_1)));
    var other_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_8).lb(32));
    var this_9 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_5).pb(_ULong___get_data__impl__fggpzb(other_2)));
    // Inline function 'kotlin.ULong.shl' call
    // Inline function 'kotlin.ULong.and' call
    // Inline function 'kotlin.toULong' call
    var this_10 = _Float16___get_halfValue__impl__89tmwx(b);
    var this_11 = _ULong___init__impl__c78o9k(toLong(this_10));
    var other_3 = _ULong___init__impl__c78o9k(new Long(65535, 0));
    var this_12 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_11).ob(_ULong___get_data__impl__fggpzb(other_3)));
    var other_4 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_12).lb(16));
    var this_13 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_9).pb(_ULong___get_data__impl__fggpzb(other_4)));
    // Inline function 'kotlin.ULong.shl' call
    // Inline function 'kotlin.ULong.and' call
    // Inline function 'kotlin.toULong' call
    var this_14 = _ULong___init__impl__c78o9k(toLong(a));
    var other_5 = _ULong___init__impl__c78o9k(new Long(1023, 0));
    var this_15 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_14).ob(_ULong___get_data__impl__fggpzb(other_5)));
    var other_6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_15).lb(6));
    var this_16 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_13).pb(_ULong___get_data__impl__fggpzb(other_6)));
    // Inline function 'kotlin.ULong.and' call
    // Inline function 'kotlin.toULong' call
    var this_17 = _ULong___init__impl__c78o9k(toLong(id));
    var other_7 = _ULong___init__impl__c78o9k(new Long(63, 0));
    var other_8 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_17).ob(_ULong___get_data__impl__fggpzb(other_7)));
    var tmp$ret$25 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_16).pb(_ULong___get_data__impl__fggpzb(other_8)));
    return _Color___init__impl__r6cqi2(tmp$ret$25);
  }
  function Color_1(color) {
    // Inline function 'kotlin.ULong.shl' call
    // Inline function 'kotlin.ULong.and' call
    // Inline function 'kotlin.toULong' call
    var this_0 = _ULong___init__impl__c78o9k(color);
    var other = _ULong___init__impl__c78o9k(new Long(-1, 0));
    var this_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).ob(_ULong___get_data__impl__fggpzb(other)));
    var tmp$ret$2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).lb(32));
    return _Color___init__impl__r6cqi2(tmp$ret$2);
  }
  function Color_2(color) {
    // Inline function 'kotlin.ULong.shl' call
    // Inline function 'kotlin.toULong' call
    var this_0 = _ULong___init__impl__c78o9k(toLong(color));
    var tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).lb(32));
    return _Color___init__impl__r6cqi2(tmp$ret$1);
  }
  function _FilterQuality___init__impl__nv51aq(value) {
    return value;
  }
  function Companion_2() {
    Companion_instance_4 = this;
    this.n3l_1 = _FilterQuality___init__impl__nv51aq(0);
    this.o3l_1 = _FilterQuality___init__impl__nv51aq(1);
    this.p3l_1 = _FilterQuality___init__impl__nv51aq(2);
    this.q3l_1 = _FilterQuality___init__impl__nv51aq(3);
  }
  var Companion_instance_4;
  function Companion_getInstance_6() {
    if (Companion_instance_4 == null)
      new Companion_2();
    return Companion_instance_4;
  }
  function floatToHalf($this, f) {
    var bits = toRawBits(f);
    var s = bits >>> 31 | 0;
    var e = (bits >>> 23 | 0) & 255;
    var m = bits & 8388607;
    var outE = 0;
    var outM = 0;
    if (e === 255) {
      outE = 31;
      outM = !(m === 0) ? 512 : 0;
    } else {
      e = (e - 127 | 0) + 15 | 0;
      if (e >= 31) {
        outE = 49;
      } else if (e <= 0) {
        if (e >= -10) {
          m = (m | 8388608) >> (1 - e | 0);
          if (!((m & 4096) === 0))
            m = m + 8192 | 0;
          outM = m >> 13;
        }
      } else {
        outE = e;
        outM = m >> 13;
        if (!((m & 4096) === 0)) {
          var out = outE << 10 | outM;
          out = out + 1 | 0;
          return toShort(out | s << 15);
        }
      }
    }
    return toShort(s << 15 | outE << 10 | outM);
  }
  function _Float16___init__impl__fckrew(halfValue) {
    return halfValue;
  }
  function _Float16___get_halfValue__impl__89tmwx($this) {
    return $this;
  }
  function _Float16___init__impl__fckrew_0(value) {
    return _Float16___init__impl__fckrew(floatToHalf(Companion_getInstance_7(), value));
  }
  function Float16__toFloat_impl_6i8dal($this) {
    var bits = _Float16___get_halfValue__impl__89tmwx($this) & 65535;
    var s = bits & 32768;
    var e = (bits >>> 10 | 0) & 31;
    var m = bits & 1023;
    var outE = 0;
    var outM = 0;
    if (e === 0) {
      if (!(m === 0)) {
        // Inline function 'kotlin.fromBits' call
        var bits_0 = 1056964608 + m | 0;
        var o = floatFromBits(bits_0);
        o = o - Companion_getInstance_7().v3m_1;
        return s === 0 ? o : -o;
      }
    } else {
      outM = m << 13;
      if (e === 31) {
        outE = 255;
        if (!(outM === 0)) {
          outM = outM | 4194304;
        }
      } else {
        outE = (e - 15 | 0) + 127 | 0;
      }
    }
    var out = s << 16 | outE << 23 | outM;
    // Inline function 'kotlin.fromBits' call
    return floatFromBits(out);
  }
  function Companion_3() {
    Companion_instance_5 = this;
    this.r3l_1 = 16;
    this.s3l_1 = _Float16___init__impl__fckrew(5120);
    this.t3l_1 = 15;
    this.u3l_1 = -14;
    this.v3l_1 = _Float16___init__impl__fckrew(-1025);
    this.w3l_1 = _Float16___init__impl__fckrew(31743);
    this.x3l_1 = _Float16___init__impl__fckrew(1024);
    this.y3l_1 = _Float16___init__impl__fckrew(1);
    this.z3l_1 = _Float16___init__impl__fckrew(32256);
    this.a3m_1 = _Float16___init__impl__fckrew(-1024);
    this.b3m_1 = _Float16___init__impl__fckrew(-32768);
    this.c3m_1 = _Float16___init__impl__fckrew(31744);
    this.d3m_1 = _Float16___init__impl__fckrew(0);
    this.e3m_1 = _Float16___init__impl__fckrew_0(1.0);
    this.f3m_1 = _Float16___init__impl__fckrew_0(-1.0);
    this.g3m_1 = 15;
    this.h3m_1 = 32768;
    this.i3m_1 = 10;
    this.j3m_1 = 31;
    this.k3m_1 = 1023;
    this.l3m_1 = 15;
    this.m3m_1 = 32767;
    this.n3m_1 = 31744;
    this.o3m_1 = 31;
    this.p3m_1 = 23;
    this.q3m_1 = 255;
    this.r3m_1 = 8388607;
    this.s3m_1 = 127;
    this.t3m_1 = 4194304;
    this.u3m_1 = 1056964608;
    var tmp = this;
    // Inline function 'kotlin.fromBits' call
    var bits = 1056964608;
    tmp.v3m_1 = floatFromBits(bits);
  }
  var Companion_instance_5;
  function Companion_getInstance_7() {
    if (Companion_instance_5 == null)
      new Companion_3();
    return Companion_instance_5;
  }
  function _Matrix___init__impl__q3kp4w(values) {
    var tmp;
    if (values === VOID) {
      // Inline function 'kotlin.floatArrayOf' call
      tmp = new Float32Array([1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
    } else {
      tmp = values;
    }
    values = tmp;
    return values;
  }
  function _Matrix___get_values__impl__fblr7b($this) {
    return $this;
  }
  function Matrix__map_impl_7meu7m($this, point) {
    var x = _Offset___get_x__impl__xvi35n(point);
    var y = _Offset___get_y__impl__8bzhra(point);
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_0 = tmp + _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var z = tmp_0 + _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 3 | 0];
    var inverseZ = 1 / z;
    var pZ = isFinite(inverseZ) ? inverseZ : 0.0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_1 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_2 = tmp_1 + _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_3 = pZ * (tmp_2 + _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0]);
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_4 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_5 = tmp_4 + _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp$ret$8 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0];
    return Offset(tmp_3, pZ * (tmp_5 + tmp$ret$8));
  }
  function Matrix__map_impl_7meu7m_0($this, rect) {
    var p0 = Matrix__map_impl_7meu7m($this, Offset(rect.q2v_1, rect.r2v_1));
    var p1 = Matrix__map_impl_7meu7m($this, Offset(rect.q2v_1, rect.t2v_1));
    var p3 = Matrix__map_impl_7meu7m($this, Offset(rect.s2v_1, rect.r2v_1));
    var p4 = Matrix__map_impl_7meu7m($this, Offset(rect.s2v_1, rect.t2v_1));
    var tmp = rect;
    // Inline function 'kotlin.math.min' call
    // Inline function 'kotlin.math.min' call
    var a = _Offset___get_x__impl__xvi35n(p0);
    var b = _Offset___get_x__impl__xvi35n(p1);
    var a_0 = Math.min(a, b);
    // Inline function 'kotlin.math.min' call
    var a_1 = _Offset___get_x__impl__xvi35n(p3);
    var b_0 = _Offset___get_x__impl__xvi35n(p4);
    var b_1 = Math.min(a_1, b_0);
    tmp.q2v_1 = Math.min(a_0, b_1);
    var tmp_0 = rect;
    // Inline function 'kotlin.math.min' call
    // Inline function 'kotlin.math.min' call
    var a_2 = _Offset___get_y__impl__8bzhra(p0);
    var b_2 = _Offset___get_y__impl__8bzhra(p1);
    var a_3 = Math.min(a_2, b_2);
    // Inline function 'kotlin.math.min' call
    var a_4 = _Offset___get_y__impl__8bzhra(p3);
    var b_3 = _Offset___get_y__impl__8bzhra(p4);
    var b_4 = Math.min(a_4, b_3);
    tmp_0.r2v_1 = Math.min(a_3, b_4);
    var tmp_1 = rect;
    // Inline function 'kotlin.math.max' call
    // Inline function 'kotlin.math.max' call
    var a_5 = _Offset___get_x__impl__xvi35n(p0);
    var b_5 = _Offset___get_x__impl__xvi35n(p1);
    var a_6 = Math.max(a_5, b_5);
    // Inline function 'kotlin.math.max' call
    var a_7 = _Offset___get_x__impl__xvi35n(p3);
    var b_6 = _Offset___get_x__impl__xvi35n(p4);
    var b_7 = Math.max(a_7, b_6);
    tmp_1.s2v_1 = Math.max(a_6, b_7);
    var tmp_2 = rect;
    // Inline function 'kotlin.math.max' call
    // Inline function 'kotlin.math.max' call
    var a_8 = _Offset___get_y__impl__8bzhra(p0);
    var b_8 = _Offset___get_y__impl__8bzhra(p1);
    var a_9 = Math.max(a_8, b_8);
    // Inline function 'kotlin.math.max' call
    var a_10 = _Offset___get_y__impl__8bzhra(p3);
    var b_9 = _Offset___get_y__impl__8bzhra(p4);
    var b_10 = Math.max(a_10, b_9);
    tmp_2.t2v_1 = Math.max(a_9, b_10);
  }
  function Matrix__timesAssign_impl_oas521($this, m) {
    var v00 = dot($this, 0, m, 0);
    var v01 = dot($this, 0, m, 1);
    var v02 = dot($this, 0, m, 2);
    var v03 = dot($this, 0, m, 3);
    var v10 = dot($this, 1, m, 0);
    var v11 = dot($this, 1, m, 1);
    var v12 = dot($this, 1, m, 2);
    var v13 = dot($this, 1, m, 3);
    var v20 = dot($this, 2, m, 0);
    var v21 = dot($this, 2, m, 1);
    var v22 = dot($this, 2, m, 2);
    var v23 = dot($this, 2, m, 3);
    var v30 = dot($this, 3, m, 0);
    var v31 = dot($this, 3, m, 1);
    var v32 = dot($this, 3, m, 2);
    var v33 = dot($this, 3, m, 3);
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0] = v00;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0] = v01;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] = v02;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0] = v03;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0] = v10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0] = v11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] = v12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0] = v13;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0] = v20;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0] = v21;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0] = v22;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 3 | 0] = v23;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0] = v30;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0] = v31;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0] = v32;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 3 | 0] = v33;
  }
  function Matrix__toString_impl_l0abk0($this) {
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_0 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_1 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_2 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_3 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_4 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_5 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_6 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_7 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_8 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_9 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_10 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_11 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_12 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_13 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp$ret$15 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 3 | 0];
    return trimIndent('\n            |' + tmp + ' ' + tmp_0 + ' ' + tmp_1 + ' ' + tmp_2 + '|\n            |' + tmp_3 + ' ' + tmp_4 + ' ' + tmp_5 + ' ' + tmp_6 + '|\n            |' + tmp_7 + ' ' + tmp_8 + ' ' + tmp_9 + ' ' + tmp_10 + '|\n            |' + tmp_11 + ' ' + tmp_12 + ' ' + tmp_13 + ' ' + tmp$ret$15 + '|\n        ');
  }
  function Matrix__reset_impl_4l49i7($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var c = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 <= 3)
          do {
            var r = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
            var v = c === r ? 1.0 : 0.0;
            _Matrix___get_values__impl__fblr7b($this)[imul(r, 4) + c | 0] = v;
          }
           while (inductionVariable_0 <= 3);
      }
       while (inductionVariable <= 3);
  }
  function Matrix__rotateX_impl_3e5y7j($this, degrees) {
    // Inline function 'kotlin.math.cos' call
    var x = degrees * get_PI() / 180.0;
    var c = Math.cos(x);
    // Inline function 'kotlin.math.sin' call
    var x_0 = degrees * get_PI() / 180.0;
    var s = Math.sin(x_0);
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a01 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a02 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0];
    var v01 = a01 * c - a02 * s;
    var v02 = a01 * s + a02 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a11 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a12 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0];
    var v11 = a11 * c - a12 * s;
    var v12 = a11 * s + a12 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a21 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a22 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0];
    var v21 = a21 * c - a22 * s;
    var v22 = a21 * s + a22 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a31 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a32 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0];
    var v31 = a31 * c - a32 * s;
    var v32 = a31 * s + a32 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0] = v01;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] = v02;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0] = v11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] = v12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0] = v21;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0] = v22;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0] = v31;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0] = v32;
  }
  function Matrix__rotateY_impl_2x4btc($this, degrees) {
    // Inline function 'kotlin.math.cos' call
    var x = degrees * get_PI() / 180.0;
    var c = Math.cos(x);
    // Inline function 'kotlin.math.sin' call
    var x_0 = degrees * get_PI() / 180.0;
    var s = Math.sin(x_0);
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a00 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a02 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0];
    var v00 = a00 * c + a02 * s;
    var v02 = -a00 * s + a02 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a10 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a12 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0];
    var v10 = a10 * c + a12 * s;
    var v12 = -a10 * s + a12 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a20 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a22 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0];
    var v20 = a20 * c + a22 * s;
    var v22 = -a20 * s + a22 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a30 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a32 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0];
    var v30 = a30 * c + a32 * s;
    var v32 = -a30 * s + a32 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0] = v00;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] = v02;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0] = v10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] = v12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0] = v20;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0] = v22;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0] = v30;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0] = v32;
  }
  function Matrix__rotateZ_impl_2g2pf5($this, degrees) {
    // Inline function 'kotlin.math.cos' call
    var x = degrees * get_PI() / 180.0;
    var c = Math.cos(x);
    // Inline function 'kotlin.math.sin' call
    var x_0 = degrees * get_PI() / 180.0;
    var s = Math.sin(x_0);
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a00 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a10 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0];
    var v00 = c * a00 + s * a10;
    var v10 = -s * a00 + c * a10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a01 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a11 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0];
    var v01 = c * a01 + s * a11;
    var v11 = -s * a01 + c * a11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a02 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a12 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0];
    var v02 = c * a02 + s * a12;
    var v12 = -s * a02 + c * a12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a03 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a13 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0];
    var v03 = c * a03 + s * a13;
    var v13 = -s * a03 + c * a13;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0] = v00;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0] = v01;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] = v02;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0] = v03;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0] = v10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0] = v11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] = v12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0] = v13;
  }
  function Matrix__scale_impl_6w89a4($this, x, y, z) {
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0] * x;
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0] = v;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v_0 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0] * x;
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0] = v_0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v_1 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] * x;
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] = v_1;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v_2 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0] * x;
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0] = v_2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v_3 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0] * y;
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0] = v_3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v_4 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0] * y;
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0] = v_4;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v_5 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] * y;
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] = v_5;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v_6 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0] * y;
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0] = v_6;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v_7 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0] * z;
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0] = v_7;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v_8 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0] * z;
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0] = v_8;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v_9 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0] * z;
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0] = v_9;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v_10 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 3 | 0] * z;
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 3 | 0] = v_10;
  }
  function Matrix__scale$default_impl_snaws9($this, x, y, z, $super) {
    x = x === VOID ? 1.0 : x;
    y = y === VOID ? 1.0 : y;
    z = z === VOID ? 1.0 : z;
    var tmp;
    if ($super === VOID) {
      Matrix__scale_impl_6w89a4($this, x, y, z);
      tmp = Unit_instance;
    } else {
      var tmp_0 = $super;
      tmp = (tmp_0 == null ? null : new Matrix(tmp_0)).x3m.call(new Matrix($this), x, y, z);
    }
    return tmp;
  }
  function Matrix__translate_impl_1hftog($this, x, y, z) {
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_0 = tmp + _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_1 = tmp_0 + _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0] * z;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var t1 = tmp_1 + _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_2 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_3 = tmp_2 + _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_4 = tmp_3 + _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0] * z;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var t2 = tmp_4 + _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_5 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_6 = tmp_5 + _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_7 = tmp_6 + _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0] * z;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var t3 = tmp_7 + _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_8 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_9 = tmp_8 + _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_10 = tmp_9 + _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 3 | 0] * z;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var t4 = tmp_10 + _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0] = t1;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0] = t2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0] = t3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 3 | 0] = t4;
  }
  function Matrix__translate$default_impl_10t8ql($this, x, y, z, $super) {
    x = x === VOID ? 0.0 : x;
    y = y === VOID ? 0.0 : y;
    z = z === VOID ? 0.0 : z;
    var tmp;
    if ($super === VOID) {
      Matrix__translate_impl_1hftog($this, x, y, z);
      tmp = Unit_instance;
    } else {
      var tmp_0 = $super;
      tmp = (tmp_0 == null ? null : new Matrix(tmp_0)).y3m.call(new Matrix($this), x, y, z);
    }
    return tmp;
  }
  function Companion_4() {
    this.z3m_1 = 0;
    this.a3n_1 = 1;
    this.b3n_1 = 3;
    this.c3n_1 = 4;
    this.d3n_1 = 5;
    this.e3n_1 = 7;
    this.f3n_1 = 10;
    this.g3n_1 = 12;
    this.h3n_1 = 13;
    this.i3n_1 = 14;
    this.j3n_1 = 15;
  }
  var Companion_instance_6;
  function Companion_getInstance_8() {
    return Companion_instance_6;
  }
  function Matrix__hashCode_impl_s9ntm9($this) {
    return hashCode($this);
  }
  function Matrix__equals_impl_g5p8p9($this, other) {
    if (!(other instanceof Matrix))
      return false;
    var tmp0_other_with_cast = other instanceof Matrix ? other.w3m_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Matrix(values) {
    this.w3m_1 = values;
  }
  protoOf(Matrix).toString = function () {
    return Matrix__toString_impl_l0abk0(this.w3m_1);
  };
  protoOf(Matrix).hashCode = function () {
    return Matrix__hashCode_impl_s9ntm9(this.w3m_1);
  };
  protoOf(Matrix).equals = function (other) {
    return Matrix__equals_impl_g5p8p9(this.w3m_1, other);
  };
  function dot(m1, row, m2, column) {
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp = _Matrix___get_values__impl__fblr7b(m1)[imul(row, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_0 = tmp * _Matrix___get_values__impl__fblr7b(m2)[imul(0, 4) + column | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_1 = _Matrix___get_values__impl__fblr7b(m1)[imul(row, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_2 = tmp_0 + tmp_1 * _Matrix___get_values__impl__fblr7b(m2)[imul(1, 4) + column | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_3 = _Matrix___get_values__impl__fblr7b(m1)[imul(row, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_4 = tmp_2 + tmp_3 * _Matrix___get_values__impl__fblr7b(m2)[imul(2, 4) + column | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_5 = _Matrix___get_values__impl__fblr7b(m1)[imul(row, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    return tmp_4 + tmp_5 * _Matrix___get_values__impl__fblr7b(m2)[imul(3, 4) + column | 0];
  }
  function isIdentity(_this__u8e3s4) {
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var row = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 <= 3)
          do {
            var column = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var expected = row === column ? 1.0 : 0.0;
            // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
            if (!(_Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(row, 4) + column | 0] === expected)) {
              return false;
            }
          }
           while (inductionVariable_0 <= 3);
      }
       while (inductionVariable <= 3);
    return true;
  }
  function Rectangle(rect) {
    Outline.call(this);
    this.k3n_1 = rect;
  }
  protoOf(Rectangle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rectangle))
      return false;
    if (!this.k3n_1.equals(other.k3n_1))
      return false;
    return true;
  };
  protoOf(Rectangle).hashCode = function () {
    return this.k3n_1.hashCode();
  };
  function Rounded() {
  }
  function Generic() {
  }
  function Outline() {
  }
  function _PaintingStyle___init__impl__pwxppo(value) {
    return value;
  }
  function Companion_5() {
    Companion_instance_7 = this;
    this.l3n_1 = _PaintingStyle___init__impl__pwxppo(0);
    this.m3n_1 = _PaintingStyle___init__impl__pwxppo(1);
  }
  var Companion_instance_7;
  function Companion_getInstance_9() {
    if (Companion_instance_7 == null)
      new Companion_5();
    return Companion_instance_7;
  }
  function Path() {
  }
  function _PathFillType___init__impl__d59lzz(value) {
    return value;
  }
  function Companion_6() {
    Companion_instance_8 = this;
    this.t3n_1 = _PathFillType___init__impl__d59lzz(0);
    this.u3n_1 = _PathFillType___init__impl__d59lzz(1);
  }
  var Companion_instance_8;
  function Companion_getInstance_10() {
    if (Companion_instance_8 == null)
      new Companion_6();
    return Companion_instance_8;
  }
  function _PathOperation___init__impl__8ddeif(value) {
    return value;
  }
  function Companion_7() {
    Companion_instance_9 = this;
    this.v3n_1 = _PathOperation___init__impl__8ddeif(0);
    this.w3n_1 = _PathOperation___init__impl__8ddeif(1);
    this.x3n_1 = _PathOperation___init__impl__8ddeif(2);
    this.y3n_1 = _PathOperation___init__impl__8ddeif(3);
    this.z3n_1 = _PathOperation___init__impl__8ddeif(4);
  }
  var Companion_instance_9;
  function Companion_getInstance_11() {
    if (Companion_instance_9 == null)
      new Companion_7();
    return Companion_instance_9;
  }
  function get_RectangleShape() {
    _init_properties_RectangleShape_kt__k3dd0u();
    return RectangleShape;
  }
  var RectangleShape;
  function RectangleShape$1() {
  }
  protoOf(RectangleShape$1).a3o = function (size, layoutDirection, density) {
    return new Rectangle(toRect(size));
  };
  protoOf(RectangleShape$1).toString = function () {
    return 'RectangleShape';
  };
  var properties_initialized_RectangleShape_kt_h73j90;
  function _init_properties_RectangleShape_kt__k3dd0u() {
    if (!properties_initialized_RectangleShape_kt_h73j90) {
      properties_initialized_RectangleShape_kt_h73j90 = true;
      RectangleShape = new RectangleShape$1();
    }
  }
  function Companion_8() {
    Companion_instance_10 = this;
    this.b3o_1 = new Shadow();
  }
  var Companion_instance_10;
  function Companion_getInstance_12() {
    if (Companion_instance_10 == null)
      new Companion_8();
    return Companion_instance_10;
  }
  function Shadow(color, offset, blurRadius) {
    Companion_getInstance_12();
    color = color === VOID ? Color_1(new Long(-16777216, 0)) : color;
    offset = offset === VOID ? Companion_getInstance().v2v_1 : offset;
    blurRadius = blurRadius === VOID ? 0.0 : blurRadius;
    this.c3o_1 = color;
    this.d3o_1 = offset;
    this.e3o_1 = blurRadius;
  }
  protoOf(Shadow).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Shadow))
      return false;
    if (!equals(this.c3o_1, other.c3o_1))
      return false;
    if (!equals(this.d3o_1, other.d3o_1))
      return false;
    if (!(this.e3o_1 === other.e3o_1))
      return false;
    return true;
  };
  protoOf(Shadow).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.c3o_1);
    result = imul(31, result) + Offset__hashCode_impl_hbql41(this.d3o_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.e3o_1) | 0;
    return result;
  };
  protoOf(Shadow).toString = function () {
    return 'Shadow(color=' + new Color(this.c3o_1) + ', offset=' + new Offset_0(this.d3o_1) + ', blurRadius=' + this.e3o_1 + ')';
  };
  function _StrokeCap___init__impl__kfgr27(value) {
    return value;
  }
  function Companion_9() {
    Companion_instance_11 = this;
    this.f3o_1 = _StrokeCap___init__impl__kfgr27(0);
    this.g3o_1 = _StrokeCap___init__impl__kfgr27(1);
    this.h3o_1 = _StrokeCap___init__impl__kfgr27(2);
  }
  var Companion_instance_11;
  function Companion_getInstance_13() {
    if (Companion_instance_11 == null)
      new Companion_9();
    return Companion_instance_11;
  }
  function _StrokeJoin___init__impl__ig23zz(value) {
    return value;
  }
  function Companion_10() {
    Companion_instance_12 = this;
    this.i3o_1 = _StrokeJoin___init__impl__ig23zz(0);
    this.j3o_1 = _StrokeJoin___init__impl__ig23zz(1);
    this.k3o_1 = _StrokeJoin___init__impl__ig23zz(2);
  }
  var Companion_instance_12;
  function Companion_getInstance_14() {
    if (Companion_instance_12 == null)
      new Companion_10();
    return Companion_instance_12;
  }
  function Adaptation$Companion$Bradford$1() {
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([0.8951, -0.7502, 0.0389, 0.2664, 1.7135, -0.0685, -0.1614, 0.0367, 1.0296]);
    Adaptation.call(this, tmp$ret$0);
  }
  protoOf(Adaptation$Companion$Bradford$1).toString = function () {
    return 'Bradford';
  };
  function Adaptation$Companion$VonKries$1() {
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([0.40024, -0.2263, 0.0, 0.7076, 1.16532, 0.0, -0.08081, 0.0457, 0.91822]);
    Adaptation.call(this, tmp$ret$0);
  }
  protoOf(Adaptation$Companion$VonKries$1).toString = function () {
    return 'VonKries';
  };
  function Adaptation$Companion$Ciecat02$1() {
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([0.7328, -0.7036, 0.003, 0.4296, 1.6975, 0.0136, -0.1624, 0.0061, 0.9834]);
    Adaptation.call(this, tmp$ret$0);
  }
  protoOf(Adaptation$Companion$Ciecat02$1).toString = function () {
    return 'Ciecat02';
  };
  function Companion_11() {
    Companion_instance_13 = this;
    var tmp = this;
    tmp.l3o_1 = new Adaptation$Companion$Bradford$1();
    var tmp_0 = this;
    tmp_0.m3o_1 = new Adaptation$Companion$VonKries$1();
    var tmp_1 = this;
    tmp_1.n3o_1 = new Adaptation$Companion$Ciecat02$1();
  }
  var Companion_instance_13;
  function Companion_getInstance_15() {
    if (Companion_instance_13 == null)
      new Companion_11();
    return Companion_instance_13;
  }
  function Adaptation(transform) {
    Companion_getInstance_15();
    this.o3o_1 = transform;
  }
  function _ColorModel___init__impl__b968n9(packedValue) {
    return packedValue;
  }
  function _ColorModel___get_packedValue__impl__uvxrhj($this) {
    return $this;
  }
  function _ColorModel___get_componentCount__impl__au0uoc($this) {
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    return _ColorModel___get_packedValue__impl__uvxrhj($this).mb(32).fa();
  }
  function Companion_12() {
    Companion_instance_14 = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$0 = toLong(3).lb(32).pb(toLong(0).ob(new Long(-1, 0)));
    tmp.p3o_1 = _ColorModel___init__impl__b968n9(tmp$ret$0);
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$1 = toLong(3).lb(32).pb(toLong(1).ob(new Long(-1, 0)));
    tmp_0.q3o_1 = _ColorModel___init__impl__b968n9(tmp$ret$1);
    var tmp_1 = this;
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$2 = toLong(3).lb(32).pb(toLong(2).ob(new Long(-1, 0)));
    tmp_1.r3o_1 = _ColorModel___init__impl__b968n9(tmp$ret$2);
    var tmp_2 = this;
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$3 = toLong(4).lb(32).pb(toLong(3).ob(new Long(-1, 0)));
    tmp_2.s3o_1 = _ColorModel___init__impl__b968n9(tmp$ret$3);
  }
  var Companion_instance_14;
  function Companion_getInstance_16() {
    if (Companion_instance_14 == null)
      new Companion_12();
    return Companion_instance_14;
  }
  function ColorModel__toString_impl_msukd7($this) {
    return equals($this, Companion_getInstance_16().p3o_1) ? 'Rgb' : equals($this, Companion_getInstance_16().q3o_1) ? 'Xyz' : equals($this, Companion_getInstance_16().r3o_1) ? 'Lab' : equals($this, Companion_getInstance_16().s3o_1) ? 'Cmyk' : 'Unknown';
  }
  function ColorModel__hashCode_impl_11onkc($this) {
    return $this.hashCode();
  }
  function ColorModel__equals_impl_dbkfqg($this, other) {
    if (!(other instanceof ColorModel))
      return false;
    var tmp0_other_with_cast = other instanceof ColorModel ? other.t3o_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function ColorModel(packedValue) {
    Companion_getInstance_16();
    this.t3o_1 = packedValue;
  }
  protoOf(ColorModel).toString = function () {
    return ColorModel__toString_impl_msukd7(this.t3o_1);
  };
  protoOf(ColorModel).hashCode = function () {
    return ColorModel__hashCode_impl_11onkc(this.t3o_1);
  };
  protoOf(ColorModel).equals = function (other) {
    return ColorModel__equals_impl_dbkfqg(this.t3o_1, other);
  };
  function Companion_13() {
    this.u3o_1 = -1;
    this.v3o_1 = 63;
  }
  var Companion_instance_15;
  function Companion_getInstance_17() {
    return Companion_instance_15;
  }
  function ColorSpace(name, model, id) {
    this.t3k_1 = name;
    this.u3k_1 = model;
    this.v3k_1 = id;
    // Inline function 'kotlin.text.isEmpty' call
    var this_0 = this.t3k_1;
    if (charSequenceLength(this_0) === 0) {
      throw IllegalArgumentException_init_$Create$('The name of a color space cannot be null and must contain at least 1 character');
    }
    if (this.v3k_1 < -1 ? true : this.v3k_1 > 63) {
      throw IllegalArgumentException_init_$Create$('The id must be between -1 and 63');
    }
  }
  protoOf(ColorSpace).m3l = function () {
    return _ColorModel___get_componentCount__impl__au0uoc(this.u3k_1);
  };
  protoOf(ColorSpace).l3l = function () {
    return false;
  };
  protoOf(ColorSpace).w3o = function (r, g, b) {
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([r, g, b]);
    return this.x3o(tmp$ret$0);
  };
  protoOf(ColorSpace).y3o = function (v0, v1, v2) {
    var xyz = this.w3o(v0, v1, v2);
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val1 = xyz[0];
    var val2 = xyz[1];
    var v1_0 = toLong(toRawBits(val1));
    var v2_0 = toLong(toRawBits(val2));
    return v1_0.lb(32).pb(v2_0.ob(new Long(-1, 0)));
  };
  protoOf(ColorSpace).z3o = function (v0, v1, v2) {
    var xyz = this.w3o(v0, v1, v2);
    return xyz[2];
  };
  protoOf(ColorSpace).a3p = function (x, y, z, a, colorSpace) {
    var colors = this.b3p(x, y, z);
    return Color_0(colors[0], colors[1], colors[2], a, colorSpace);
  };
  protoOf(ColorSpace).b3p = function (x, y, z) {
    var xyz = new Float32Array(_ColorModel___get_componentCount__impl__au0uoc(this.u3k_1));
    xyz[0] = x;
    xyz[1] = y;
    xyz[2] = z;
    return this.c3p(xyz);
  };
  protoOf(ColorSpace).toString = function () {
    return this.t3k_1 + ' (id=' + this.v3k_1 + ', model=' + new ColorModel(this.u3k_1) + ')';
  };
  protoOf(ColorSpace).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other))) {
      return false;
    }
    var that = other instanceof ColorSpace ? other : THROW_CCE();
    if (!(this.v3k_1 === that.v3k_1))
      return false;
    return !(this.t3k_1 === that.t3k_1) ? false : equals(this.u3k_1, that.u3k_1);
  };
  protoOf(ColorSpace).hashCode = function () {
    var result = getStringHashCode(this.t3k_1);
    result = imul(31, result) + ColorModel__hashCode_impl_11onkc(this.u3k_1) | 0;
    result = imul(31, result) + this.v3k_1 | 0;
    return result;
  };
  function connect(_this__u8e3s4, destination, intent) {
    destination = destination === VOID ? ColorSpaces_getInstance().r3j_1 : destination;
    intent = intent === VOID ? Companion_getInstance_21().d3p_1 : intent;
    if (_this__u8e3s4 === ColorSpaces_getInstance().r3j_1) {
      if (destination === ColorSpaces_getInstance().r3j_1) {
        return Companion_getInstance_18().h3p_1;
      }
      if (destination === ColorSpaces_getInstance().i3k_1 ? intent === Companion_getInstance_21().d3p_1 : false) {
        return Companion_getInstance_18().i3p_1;
      }
    } else if ((_this__u8e3s4 === ColorSpaces_getInstance().i3k_1 ? destination === ColorSpaces_getInstance().r3j_1 : false) ? intent === Companion_getInstance_21().d3p_1 : false) {
      return Companion_getInstance_18().j3p_1;
    }
    if (_this__u8e3s4 === destination) {
      return Companion_getInstance_18().k3p(_this__u8e3s4);
    }
    var tmp;
    if (equals(_this__u8e3s4.u3k_1, Companion_getInstance_16().p3o_1) ? equals(destination.u3k_1, Companion_getInstance_16().p3o_1) : false) {
      var tmp_0 = _this__u8e3s4 instanceof Rgb ? _this__u8e3s4 : THROW_CCE();
      tmp = new RgbConnector(tmp_0, destination instanceof Rgb ? destination : THROW_CCE(), intent);
    } else {
      tmp = Connector_init_$Create$(_this__u8e3s4, destination, intent);
    }
    return tmp;
  }
  function absRcpResponse(x, a, b, c, d, g) {
    return withSign(rcpResponse(x < 0.0 ? -x : x, a, b, c, d, g), x);
  }
  function absResponse(x, a, b, c, d, g) {
    return withSign(response(x < 0.0 ? -x : x, a, b, c, d, g), x);
  }
  function adapt(_this__u8e3s4, whitePoint, adaptation) {
    adaptation = adaptation === VOID ? Companion_getInstance_15().l3o_1 : adaptation;
    if (equals(_this__u8e3s4.u3k_1, Companion_getInstance_16().p3o_1)) {
      var rgb = _this__u8e3s4 instanceof Rgb ? _this__u8e3s4 : THROW_CCE();
      if (compare_0(rgb.o3p_1, whitePoint)) {
        return _this__u8e3s4;
      }
      var xyz = whitePoint.f3q();
      var adaptationTransform = chromaticAdaptation(adaptation.o3o_1, rgb.o3p_1.f3q(), xyz);
      var transform = mul3x3(adaptationTransform, rgb.t3p_1);
      return Rgb_init_$Create$_1(rgb, transform, whitePoint);
    }
    return _this__u8e3s4;
  }
  function compare(a, b) {
    if (a === b)
      return true;
    var inductionVariable = 0;
    var last = a.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp;
        if (!(compareTo(a[i], b[i]) === 0)) {
          // Inline function 'kotlin.math.abs' call
          var x = a[i] - b[i];
          tmp = Math.abs(x) > 0.001;
        } else {
          tmp = false;
        }
        if (tmp)
          return false;
      }
       while (inductionVariable <= last);
    return true;
  }
  function mul3x3Float3(lhs, rhs) {
    var r0 = rhs[0];
    var r1 = rhs[1];
    var r2 = rhs[2];
    rhs[0] = lhs[0] * r0 + lhs[3] * r1 + lhs[6] * r2;
    rhs[1] = lhs[1] * r0 + lhs[4] * r1 + lhs[7] * r2;
    rhs[2] = lhs[2] * r0 + lhs[5] * r1 + lhs[8] * r2;
    return rhs;
  }
  function mul3x3Float3_0(lhs, r0, r1, r2) {
    return lhs[0] * r0 + lhs[3] * r1 + lhs[6] * r2;
  }
  function mul3x3Float3_1(lhs, r0, r1, r2) {
    return lhs[1] * r0 + lhs[4] * r1 + lhs[7] * r2;
  }
  function mul3x3Float3_2(lhs, r0, r1, r2) {
    return lhs[2] * r0 + lhs[5] * r1 + lhs[8] * r2;
  }
  function compare_0(a, b) {
    if (a === b)
      return true;
    var tmp;
    // Inline function 'kotlin.math.abs' call
    var x = a.d3q_1 - b.d3q_1;
    if (Math.abs(x) < 0.001) {
      // Inline function 'kotlin.math.abs' call
      var x_0 = a.e3q_1 - b.e3q_1;
      tmp = Math.abs(x_0) < 0.001;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function mul3x3(lhs, rhs) {
    var r = new Float32Array(9);
    r[0] = lhs[0] * rhs[0] + lhs[3] * rhs[1] + lhs[6] * rhs[2];
    r[1] = lhs[1] * rhs[0] + lhs[4] * rhs[1] + lhs[7] * rhs[2];
    r[2] = lhs[2] * rhs[0] + lhs[5] * rhs[1] + lhs[8] * rhs[2];
    r[3] = lhs[0] * rhs[3] + lhs[3] * rhs[4] + lhs[6] * rhs[5];
    r[4] = lhs[1] * rhs[3] + lhs[4] * rhs[4] + lhs[7] * rhs[5];
    r[5] = lhs[2] * rhs[3] + lhs[5] * rhs[4] + lhs[8] * rhs[5];
    r[6] = lhs[0] * rhs[6] + lhs[3] * rhs[7] + lhs[6] * rhs[8];
    r[7] = lhs[1] * rhs[6] + lhs[4] * rhs[7] + lhs[7] * rhs[8];
    r[8] = lhs[2] * rhs[6] + lhs[5] * rhs[7] + lhs[8] * rhs[8];
    return r;
  }
  function chromaticAdaptation(matrix, srcWhitePoint, dstWhitePoint) {
    var srcLMS = mul3x3Float3(matrix, srcWhitePoint);
    var dstLMS = mul3x3Float3(matrix, dstWhitePoint);
    // Inline function 'kotlin.floatArrayOf' call
    var LMS = new Float32Array([dstLMS[0] / srcLMS[0], dstLMS[1] / srcLMS[1], dstLMS[2] / srcLMS[2]]);
    return mul3x3(inverse3x3(matrix), mul3x3Diag(LMS, matrix));
  }
  function inverse3x3(m) {
    var a = m[0];
    var b = m[3];
    var c = m[6];
    var d = m[1];
    var e = m[4];
    var f = m[7];
    var g = m[2];
    var h = m[5];
    var i = m[8];
    var xA = e * i - f * h;
    var xB = f * g - d * i;
    var xC = d * h - e * g;
    var det = a * xA + b * xB + c * xC;
    var inverted = new Float32Array(m.length);
    inverted[0] = xA / det;
    inverted[1] = xB / det;
    inverted[2] = xC / det;
    inverted[3] = (c * h - b * i) / det;
    inverted[4] = (a * i - c * g) / det;
    inverted[5] = (b * g - a * h) / det;
    inverted[6] = (b * f - c * e) / det;
    inverted[7] = (c * d - a * f) / det;
    inverted[8] = (a * e - b * d) / det;
    return inverted;
  }
  function mul3x3Diag(lhs, rhs) {
    // Inline function 'kotlin.floatArrayOf' call
    return new Float32Array([lhs[0] * rhs[0], lhs[1] * rhs[1], lhs[2] * rhs[2], lhs[0] * rhs[3], lhs[1] * rhs[4], lhs[2] * rhs[5], lhs[0] * rhs[6], lhs[1] * rhs[7], lhs[2] * rhs[8]]);
  }
  function rcpResponse(x, a, b, c, d, g) {
    var tmp;
    if (x >= d * c) {
      // Inline function 'kotlin.math.pow' call
      var x_0 = 1.0 / g;
      tmp = (Math.pow(x, x_0) - b) / a;
    } else {
      tmp = x / c;
    }
    return tmp;
  }
  function rcpResponse_0(x, a, b, c, d, e, f, g) {
    var tmp;
    if (x >= d * c) {
      // Inline function 'kotlin.math.pow' call
      var this_0 = x - e;
      var x_0 = 1.0 / g;
      tmp = (Math.pow(this_0, x_0) - b) / a;
    } else {
      tmp = (x - f) / c;
    }
    return tmp;
  }
  function response(x, a, b, c, d, g) {
    var tmp;
    if (x >= d) {
      // Inline function 'kotlin.math.pow' call
      var this_0 = a * x + b;
      tmp = Math.pow(this_0, g);
    } else {
      tmp = c * x;
    }
    return tmp;
  }
  function response_0(x, a, b, c, d, e, f, g) {
    var tmp;
    if (x >= d) {
      // Inline function 'kotlin.math.pow' call
      var this_0 = a * x + b;
      tmp = Math.pow(this_0, g) + e;
    } else {
      tmp = c * x + f;
    }
    return tmp;
  }
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0(function_0) {
    this.g3q_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0).h3q = function (double) {
    return this.g3q_1(double);
  };
  function ColorSpaces$ExtendedSrgb$lambda(x) {
    return absRcpResponse(x, 0.9478672985781991, 0.05213270142180095, 0.07739938080495357, 0.04045, 2.4);
  }
  function ColorSpaces$ExtendedSrgb$lambda_0(x) {
    return absResponse(x, 0.9478672985781991, 0.05213270142180095, 0.07739938080495357, 0.04045, 2.4);
  }
  function ColorSpaces() {
    ColorSpaces_instance = this;
    var tmp = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp.n3j_1 = new Float32Array([0.64, 0.33, 0.3, 0.6, 0.15, 0.06]);
    var tmp_0 = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp_0.o3j_1 = new Float32Array([0.67, 0.33, 0.21, 0.71, 0.14, 0.08]);
    this.p3j_1 = new TransferParameters(2.4, 0.9478672985781991, 0.05213270142180095, 0.07739938080495357, 0.04045);
    this.q3j_1 = new TransferParameters(2.2, 0.9478672985781991, 0.05213270142180095, 0.07739938080495357, 0.04045);
    this.r3j_1 = Rgb_init_$Create$('sRGB IEC61966-2.1', this.n3j_1, Illuminant_getInstance().o3q_1, this.p3j_1, 0);
    this.s3j_1 = Rgb_init_$Create$_0('sRGB IEC61966-2.1 (Linear)', this.n3j_1, Illuminant_getInstance().o3q_1, 1.0, 0.0, 1.0, 1);
    var tmp_1 = this;
    var tmp_2 = Illuminant_getInstance().o3q_1;
    var tmp_3 = ColorSpaces$ExtendedSrgb$lambda;
    var tmp_4 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0(tmp_3);
    var tmp_5 = ColorSpaces$ExtendedSrgb$lambda_0;
    tmp_1.t3j_1 = new Rgb('scRGB-nl IEC 61966-2-2:2003', this.n3j_1, tmp_2, null, tmp_4, new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0(tmp_5), -0.799, 2.399, this.p3j_1, 2);
    this.u3j_1 = Rgb_init_$Create$_0('scRGB IEC 61966-2-2:2003', this.n3j_1, Illuminant_getInstance().o3q_1, 1.0, -0.5, 7.499, 3);
    var tmp_6 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$2 = new Float32Array([0.64, 0.33, 0.3, 0.6, 0.15, 0.06]);
    tmp_6.v3j_1 = Rgb_init_$Create$('Rec. ITU-R BT.709-5', tmp$ret$2, Illuminant_getInstance().o3q_1, new TransferParameters(2.2222222222222223, 0.9099181073703367, 0.09008189262966333, 0.2222222222222222, 0.081), 4);
    var tmp_7 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$3 = new Float32Array([0.708, 0.292, 0.17, 0.797, 0.131, 0.046]);
    tmp_7.w3j_1 = Rgb_init_$Create$('Rec. ITU-R BT.2020-1', tmp$ret$3, Illuminant_getInstance().o3q_1, new TransferParameters(2.2222222222222223, 0.9096697898662786, 0.09033021013372146, 0.2222222222222222, 0.08145), 5);
    var tmp_8 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$4 = new Float32Array([0.68, 0.32, 0.265, 0.69, 0.15, 0.06]);
    tmp_8.x3j_1 = Rgb_init_$Create$_0('SMPTE RP 431-2-2007 DCI (P3)', tmp$ret$4, new WhitePoint(0.314, 0.351), 2.6, 0.0, 1.0, 6);
    var tmp_9 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$5 = new Float32Array([0.68, 0.32, 0.265, 0.69, 0.15, 0.06]);
    tmp_9.y3j_1 = Rgb_init_$Create$('Display P3', tmp$ret$5, Illuminant_getInstance().o3q_1, this.p3j_1, 7);
    this.z3j_1 = Rgb_init_$Create$('NTSC (1953)', this.o3j_1, Illuminant_getInstance().k3q_1, new TransferParameters(2.2222222222222223, 0.9099181073703367, 0.09008189262966333, 0.2222222222222222, 0.081), 8);
    var tmp_10 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$6 = new Float32Array([0.63, 0.34, 0.31, 0.595, 0.155, 0.07]);
    tmp_10.a3k_1 = Rgb_init_$Create$('SMPTE-C RGB', tmp$ret$6, Illuminant_getInstance().o3q_1, new TransferParameters(2.2222222222222223, 0.9099181073703367, 0.09008189262966333, 0.2222222222222222, 0.081), 9);
    var tmp_11 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$7 = new Float32Array([0.64, 0.33, 0.21, 0.71, 0.15, 0.06]);
    tmp_11.b3k_1 = Rgb_init_$Create$_0('Adobe RGB (1998)', tmp$ret$7, Illuminant_getInstance().o3q_1, 2.2, 0.0, 1.0, 10);
    var tmp_12 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$8 = new Float32Array([0.7347, 0.2653, 0.1596, 0.8404, 0.0366, 1.0E-4]);
    tmp_12.c3k_1 = Rgb_init_$Create$('ROMM RGB ISO 22028-2:2013', tmp$ret$8, Illuminant_getInstance().l3q_1, new TransferParameters(1.8, 1.0, 0.0, 0.0625, 0.031248), 11);
    var tmp_13 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$9 = new Float32Array([0.7347, 0.2653, 0.0, 1.0, 1.0E-4, -0.077]);
    tmp_13.d3k_1 = Rgb_init_$Create$_0('SMPTE ST 2065-1:2012 ACES', tmp$ret$9, Illuminant_getInstance().n3q_1, 1.0, -65504.0, 65504.0, 12);
    var tmp_14 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$10 = new Float32Array([0.713, 0.293, 0.165, 0.83, 0.128, 0.044]);
    tmp_14.e3k_1 = Rgb_init_$Create$_0('Academy S-2014-004 ACEScg', tmp$ret$10, Illuminant_getInstance().n3q_1, 1.0, -65504.0, 65504.0, 13);
    this.f3k_1 = new Xyz('Generic XYZ', 14);
    this.g3k_1 = new Lab('Generic L*a*b*', 15);
    this.h3k_1 = Rgb_init_$Create$('None', this.n3j_1, Illuminant_getInstance().o3q_1, this.q3j_1, 16);
    this.i3k_1 = new Oklab('Oklab', 17);
    var tmp_15 = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_15.j3k_1 = [this.r3j_1, this.s3j_1, this.t3j_1, this.u3j_1, this.v3j_1, this.w3j_1, this.x3j_1, this.y3j_1, this.z3j_1, this.a3k_1, this.b3k_1, this.c3k_1, this.d3k_1, this.e3k_1, this.f3k_1, this.g3k_1, this.h3k_1, this.i3k_1];
  }
  var ColorSpaces_instance;
  function ColorSpaces_getInstance() {
    if (ColorSpaces_instance == null)
      new ColorSpaces();
    return ColorSpaces_instance;
  }
  function computeTransform($this, source, destination, intent) {
    if (compare_0(source.o3p_1, destination.o3p_1)) {
      return mul3x3(destination.u3p_1, source.t3p_1);
    } else {
      var transform = source.t3p_1;
      var inverseTransform = destination.u3p_1;
      var srcXYZ = source.o3p_1.f3q();
      var dstXYZ = destination.o3p_1.f3q();
      if (!compare_0(source.o3p_1, Illuminant_getInstance().l3q_1)) {
        var tmp = Companion_getInstance_15().l3o_1.o3o_1;
        // Inline function 'kotlin.collections.copyOf' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = Illuminant_getInstance().r3q_1.slice();
        var srcAdaptation = chromaticAdaptation(tmp, srcXYZ, tmp$ret$1);
        transform = mul3x3(srcAdaptation, source.t3p_1);
      }
      if (!compare_0(destination.o3p_1, Illuminant_getInstance().l3q_1)) {
        var tmp_0 = Companion_getInstance_15().l3o_1.o3o_1;
        // Inline function 'kotlin.collections.copyOf' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$3 = Illuminant_getInstance().r3q_1.slice();
        var dstAdaptation = chromaticAdaptation(tmp_0, dstXYZ, tmp$ret$3);
        inverseTransform = inverse3x3(mul3x3(dstAdaptation, destination.t3p_1));
      }
      if (intent === Companion_getInstance_21().g3p_1) {
        // Inline function 'kotlin.floatArrayOf' call
        var tmp$ret$4 = new Float32Array([srcXYZ[0] / dstXYZ[0], srcXYZ[1] / dstXYZ[1], srcXYZ[2] / dstXYZ[2]]);
        transform = mul3x3Diag(tmp$ret$4, transform);
      }
      return mul3x3(inverseTransform, transform);
    }
  }
  function computeTransform_0($this, source, destination, intent) {
    if (!(intent === Companion_getInstance_21().g3p_1))
      return null;
    var srcRGB = equals(source.u3k_1, Companion_getInstance_16().p3o_1);
    var dstRGB = equals(destination.u3k_1, Companion_getInstance_16().p3o_1);
    if (srcRGB ? dstRGB : false)
      return null;
    if (srcRGB ? true : dstRGB) {
      var tmp = srcRGB ? source : destination;
      var rgb = tmp instanceof Rgb ? tmp : THROW_CCE();
      var srcXYZ = srcRGB ? rgb.o3p_1.f3q() : Illuminant_getInstance().r3q_1;
      var dstXYZ = dstRGB ? rgb.o3p_1.f3q() : Illuminant_getInstance().r3q_1;
      // Inline function 'kotlin.floatArrayOf' call
      return new Float32Array([srcXYZ[0] / dstXYZ[0], srcXYZ[1] / dstXYZ[1], srcXYZ[2] / dstXYZ[2]]);
    }
    return null;
  }
  function Connector$Companion$identity$1($source) {
    Connector_init_$Init$($source, $source, Companion_getInstance_21().e3p_1, this);
  }
  protoOf(Connector$Companion$identity$1).q3k = function (r, g, b, a) {
    return Color_0(r, g, b, a, this.l3k_1);
  };
  function Connector_init_$Init$(source, destination, intent, $this) {
    var tmp = equals(source.u3k_1, Companion_getInstance_16().p3o_1) ? adapt(source, Illuminant_getInstance().l3q_1) : source;
    var tmp_0;
    if (equals(destination.u3k_1, Companion_getInstance_16().p3o_1)) {
      tmp_0 = adapt(destination, Illuminant_getInstance().l3q_1);
    } else {
      tmp_0 = destination;
    }
    Connector.call($this, source, destination, tmp, tmp_0, intent, computeTransform_0(Companion_getInstance_18(), source, destination, intent));
    return $this;
  }
  function Connector_init_$Create$(source, destination, intent) {
    return Connector_init_$Init$(source, destination, intent, objectCreate(protoOf(Connector)));
  }
  function RgbConnector(mSource, mDestination, intent) {
    Connector.call(this, mSource, mDestination, mSource, mDestination, intent, null);
    this.e3r_1 = mSource;
    this.f3r_1 = mDestination;
    this.g3r_1 = computeTransform(this, this.e3r_1, this.f3r_1, intent);
  }
  protoOf(RgbConnector).q3k = function (r, g, b, a) {
    var v0 = this.e3r_1.a3q_1.h3q(r);
    var v1 = this.e3r_1.a3q_1.h3q(g);
    var v2 = this.e3r_1.a3q_1.h3q(b);
    var v01 = mul3x3Float3_0(this.g3r_1, v0, v1, v2);
    var v11 = mul3x3Float3_1(this.g3r_1, v0, v1, v2);
    var v21 = mul3x3Float3_2(this.g3r_1, v0, v1, v2);
    var v02 = this.f3r_1.x3p_1.h3q(v01);
    var v12 = this.f3r_1.x3p_1.h3q(v11);
    var v22 = this.f3r_1.x3p_1.h3q(v21);
    return Color_0(v02, v12, v22, a, this.f3r_1);
  };
  function Companion_14() {
    Companion_instance_16 = this;
    this.h3p_1 = this.k3p(ColorSpaces_getInstance().r3j_1);
    this.i3p_1 = Connector_init_$Create$(ColorSpaces_getInstance().r3j_1, ColorSpaces_getInstance().i3k_1, Companion_getInstance_21().d3p_1);
    this.j3p_1 = Connector_init_$Create$(ColorSpaces_getInstance().i3k_1, ColorSpaces_getInstance().r3j_1, Companion_getInstance_21().d3p_1);
  }
  protoOf(Companion_14).k3p = function (source) {
    return new Connector$Companion$identity$1(source);
  };
  var Companion_instance_16;
  function Companion_getInstance_18() {
    if (Companion_instance_16 == null)
      new Companion_14();
    return Companion_instance_16;
  }
  function Connector(source, destination, transformSource, transformDestination, renderIntent, transform) {
    Companion_getInstance_18();
    this.k3k_1 = source;
    this.l3k_1 = destination;
    this.m3k_1 = transformSource;
    this.n3k_1 = transformDestination;
    this.o3k_1 = renderIntent;
    this.p3k_1 = transform;
  }
  protoOf(Connector).q3k = function (r, g, b, a) {
    var packed = this.m3k_1.y3o(r, g, b);
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'kotlin.fromBits' call
    var bits = packed.mb(32).fa();
    var x = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = packed.ob(new Long(-1, 0)).fa();
    var y = floatFromBits(bits_0);
    var z = this.m3k_1.z3o(r, g, b);
    if (!(this.p3k_1 == null)) {
      x = x * this.p3k_1[0];
      y = y * this.p3k_1[1];
      z = z * this.p3k_1[2];
    }
    return this.n3k_1.a3p(x, y, z, a, this.l3k_1);
  };
  function Illuminant() {
    Illuminant_instance = this;
    this.i3q_1 = new WhitePoint(0.44757, 0.40745);
    this.j3q_1 = new WhitePoint(0.34842, 0.35161);
    this.k3q_1 = new WhitePoint(0.31006, 0.31616);
    this.l3q_1 = new WhitePoint(0.34567, 0.3585);
    this.m3q_1 = new WhitePoint(0.33242, 0.34743);
    this.n3q_1 = new WhitePoint(0.32168, 0.33767);
    this.o3q_1 = new WhitePoint(0.31271, 0.32902);
    this.p3q_1 = new WhitePoint(0.29902, 0.31485);
    this.q3q_1 = new WhitePoint(0.33333, 0.33333);
    var tmp = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp.r3q_1 = new Float32Array([0.964212, 1.0, 0.825188]);
  }
  var Illuminant_instance;
  function Illuminant_getInstance() {
    if (Illuminant_instance == null)
      new Illuminant();
    return Illuminant_instance;
  }
  function Companion_15() {
    this.h3r_1 = 0.008856452;
    this.i3r_1 = 7.787037;
    this.j3r_1 = 0.13793103;
    this.k3r_1 = 0.20689656;
  }
  var Companion_instance_17;
  function Companion_getInstance_19() {
    return Companion_instance_17;
  }
  function Lab(name, id) {
    ColorSpace.call(this, name, Companion_getInstance_16().r3o_1, id);
  }
  protoOf(Lab).j3l = function (component) {
    return component === 0 ? 0.0 : -128.0;
  };
  protoOf(Lab).k3l = function (component) {
    return component === 0 ? 100.0 : 128.0;
  };
  protoOf(Lab).x3o = function (v) {
    v[0] = coerceIn(v[0], 0.0, 100.0);
    v[1] = coerceIn(v[1], -128.0, 128.0);
    v[2] = coerceIn(v[2], -128.0, 128.0);
    var fy = (v[0] + 16.0) / 116.0;
    var fx = fy + v[1] * 0.002;
    var fz = fy - v[2] * 0.005;
    var x = fx > 0.20689656 ? fx * fx * fx : 0.12841854995680643 * (fx - 0.13793103);
    var y = fy > 0.20689656 ? fy * fy * fy : 0.12841854995680643 * (fy - 0.13793103);
    var z = fz > 0.20689656 ? fz * fz * fz : 0.12841854995680643 * (fz - 0.13793103);
    v[0] = x * Illuminant_getInstance().r3q_1[0];
    v[1] = y * Illuminant_getInstance().r3q_1[1];
    v[2] = z * Illuminant_getInstance().r3q_1[2];
    return v;
  };
  protoOf(Lab).y3o = function (v0, v1, v2) {
    var v00 = coerceIn(v0, 0.0, 100.0);
    var v10 = coerceIn(v1, -128.0, 128.0);
    var fy = (v00 + 16.0) / 116.0;
    var fx = fy + v10 * 0.002;
    var x = fx > 0.20689656 ? fx * fx * fx : 0.12841854995680643 * (fx - 0.13793103);
    var y = fy > 0.20689656 ? fy * fy * fy : 0.12841854995680643 * (fy - 0.13793103);
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val1 = x * Illuminant_getInstance().r3q_1[0];
    var val2 = y * Illuminant_getInstance().r3q_1[1];
    var v1_0 = toLong(toRawBits(val1));
    var v2_0 = toLong(toRawBits(val2));
    return v1_0.lb(32).pb(v2_0.ob(new Long(-1, 0)));
  };
  protoOf(Lab).z3o = function (v0, v1, v2) {
    var v00 = coerceIn(v0, 0.0, 100.0);
    var v20 = coerceIn(v2, -128.0, 128.0);
    var fy = (v00 + 16.0) / 116.0;
    var fz = fy - v20 * 0.005;
    var z = fz > 0.20689656 ? fz * fz * fz : 0.12841854995680643 * (fz - 0.13793103);
    return z * Illuminant_getInstance().r3q_1[2];
  };
  protoOf(Lab).a3p = function (x, y, z, a, colorSpace) {
    var x1 = x / Illuminant_getInstance().r3q_1[0];
    var y1 = y / Illuminant_getInstance().r3q_1[1];
    var z1 = z / Illuminant_getInstance().r3q_1[2];
    var tmp;
    if (x1 > 0.008856452) {
      // Inline function 'kotlin.math.pow' call
      var x_0 = 0.3333333333333333;
      tmp = Math.pow(x1, x_0);
    } else {
      tmp = 7.787037 * x1 + 0.13793103;
    }
    var fx = tmp;
    var tmp_0;
    if (y1 > 0.008856452) {
      // Inline function 'kotlin.math.pow' call
      var x_1 = 0.3333333333333333;
      tmp_0 = Math.pow(y1, x_1);
    } else {
      tmp_0 = 7.787037 * y1 + 0.13793103;
    }
    var fy = tmp_0;
    var tmp_1;
    if (z1 > 0.008856452) {
      // Inline function 'kotlin.math.pow' call
      var x_2 = 0.3333333333333333;
      tmp_1 = Math.pow(z1, x_2);
    } else {
      tmp_1 = 7.787037 * z1 + 0.13793103;
    }
    var fz = tmp_1;
    var l = 116.0 * fy - 16.0;
    var a1 = 500.0 * (fx - fy);
    var b = 200.0 * (fy - fz);
    return Color_0(coerceIn(l, 0.0, 100.0), coerceIn(a1, -128.0, 128.0), coerceIn(b, -128.0, 128.0), a, colorSpace);
  };
  protoOf(Lab).c3p = function (v) {
    var x = v[0] / Illuminant_getInstance().r3q_1[0];
    var y = v[1] / Illuminant_getInstance().r3q_1[1];
    var z = v[2] / Illuminant_getInstance().r3q_1[2];
    var tmp;
    if (x > 0.008856452) {
      // Inline function 'kotlin.math.pow' call
      var x_0 = 0.3333333333333333;
      tmp = Math.pow(x, x_0);
    } else {
      tmp = 7.787037 * x + 0.13793103;
    }
    var fx = tmp;
    var tmp_0;
    if (y > 0.008856452) {
      // Inline function 'kotlin.math.pow' call
      var x_1 = 0.3333333333333333;
      tmp_0 = Math.pow(y, x_1);
    } else {
      tmp_0 = 7.787037 * y + 0.13793103;
    }
    var fy = tmp_0;
    var tmp_1;
    if (z > 0.008856452) {
      // Inline function 'kotlin.math.pow' call
      var x_2 = 0.3333333333333333;
      tmp_1 = Math.pow(z, x_2);
    } else {
      tmp_1 = 7.787037 * z + 0.13793103;
    }
    var fz = tmp_1;
    var l = 116.0 * fy - 16.0;
    var a = 500.0 * (fx - fy);
    var b = 200.0 * (fy - fz);
    v[0] = coerceIn(l, 0.0, 100.0);
    v[1] = coerceIn(a, -128.0, 128.0);
    v[2] = coerceIn(b, -128.0, 128.0);
    return v;
  };
  function Companion_16() {
    Companion_instance_18 = this;
    var tmp = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([0.818933, 0.032984544, 0.0482003, 0.36186674, 0.9293119, 0.26436627, -0.12885971, 0.03614564, 0.6338517]);
    tmp.o3r_1 = mul3x3(tmp$ret$0, chromaticAdaptation(Companion_getInstance_15().l3o_1.o3o_1, Illuminant_getInstance().l3q_1.f3q(), Illuminant_getInstance().o3q_1.f3q()));
    var tmp_0 = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp_0.p3r_1 = new Float32Array([0.21045426, 1.9779985, 0.025904037, 0.7936178, -2.4285922, 0.78277177, -0.004072047, 0.4505937, -0.80867577]);
    this.q3r_1 = inverse3x3(this.o3r_1);
    this.r3r_1 = inverse3x3(this.p3r_1);
  }
  var Companion_instance_18;
  function Companion_getInstance_20() {
    if (Companion_instance_18 == null)
      new Companion_16();
    return Companion_instance_18;
  }
  function Oklab(name, id) {
    Companion_getInstance_20();
    ColorSpace.call(this, name, Companion_getInstance_16().r3o_1, id);
  }
  protoOf(Oklab).j3l = function (component) {
    return component === 0 ? 0.0 : -0.5;
  };
  protoOf(Oklab).k3l = function (component) {
    return component === 0 ? 1.0 : 0.5;
  };
  protoOf(Oklab).x3o = function (v) {
    v[0] = coerceIn(v[0], 0.0, 1.0);
    v[1] = coerceIn(v[1], -0.5, 0.5);
    v[2] = coerceIn(v[2], -0.5, 0.5);
    mul3x3Float3(Companion_getInstance_20().r3r_1, v);
    v[0] = v[0] * v[0] * v[0];
    v[1] = v[1] * v[1] * v[1];
    v[2] = v[2] * v[2] * v[2];
    mul3x3Float3(Companion_getInstance_20().q3r_1, v);
    return v;
  };
  protoOf(Oklab).y3o = function (v0, v1, v2) {
    var v00 = coerceIn(v0, 0.0, 1.0);
    var v10 = coerceIn(v1, -0.5, 0.5);
    var v20 = coerceIn(v2, -0.5, 0.5);
    var v01 = mul3x3Float3_0(Companion_getInstance_20().r3r_1, v00, v10, v20);
    var v11 = mul3x3Float3_1(Companion_getInstance_20().r3r_1, v00, v10, v20);
    var v21 = mul3x3Float3_2(Companion_getInstance_20().r3r_1, v00, v10, v20);
    var v02 = v01 * v01 * v01;
    var v12 = v11 * v11 * v11;
    var v22 = v21 * v21 * v21;
    var v03 = mul3x3Float3_0(Companion_getInstance_20().q3r_1, v02, v12, v22);
    var v13 = mul3x3Float3_1(Companion_getInstance_20().q3r_1, v02, v12, v22);
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1_0 = toLong(toRawBits(v03));
    var v2_0 = toLong(toRawBits(v13));
    return v1_0.lb(32).pb(v2_0.ob(new Long(-1, 0)));
  };
  protoOf(Oklab).z3o = function (v0, v1, v2) {
    var v00 = coerceIn(v0, 0.0, 1.0);
    var v10 = coerceIn(v1, -0.5, 0.5);
    var v20 = coerceIn(v2, -0.5, 0.5);
    var v01 = mul3x3Float3_0(Companion_getInstance_20().r3r_1, v00, v10, v20);
    var v11 = mul3x3Float3_1(Companion_getInstance_20().r3r_1, v00, v10, v20);
    var v21 = mul3x3Float3_2(Companion_getInstance_20().r3r_1, v00, v10, v20);
    var v02 = v01 * v01 * v01;
    var v12 = v11 * v11 * v11;
    var v22 = v21 * v21 * v21;
    var v23 = mul3x3Float3_2(Companion_getInstance_20().q3r_1, v02, v12, v22);
    return v23;
  };
  protoOf(Oklab).a3p = function (x, y, z, a, colorSpace) {
    var v0 = mul3x3Float3_0(Companion_getInstance_20().o3r_1, x, y, z);
    var v1 = mul3x3Float3_1(Companion_getInstance_20().o3r_1, x, y, z);
    var v2 = mul3x3Float3_2(Companion_getInstance_20().o3r_1, x, y, z);
    // Inline function 'kotlin.math.sign' call
    var x_0 = v0;
    var tmp = sign(x_0);
    // Inline function 'kotlin.math.pow' call
    // Inline function 'kotlin.math.abs' call
    var x_1 = v0;
    var this_0 = Math.abs(x_1);
    var x_2 = 0.3333333333333333;
    v0 = tmp * Math.pow(this_0, x_2);
    // Inline function 'kotlin.math.sign' call
    var x_3 = v1;
    var tmp_0 = sign(x_3);
    // Inline function 'kotlin.math.pow' call
    // Inline function 'kotlin.math.abs' call
    var x_4 = v1;
    var this_1 = Math.abs(x_4);
    var x_5 = 0.3333333333333333;
    v1 = tmp_0 * Math.pow(this_1, x_5);
    // Inline function 'kotlin.math.sign' call
    var x_6 = v2;
    var tmp_1 = sign(x_6);
    // Inline function 'kotlin.math.pow' call
    // Inline function 'kotlin.math.abs' call
    var x_7 = v2;
    var this_2 = Math.abs(x_7);
    var x_8 = 0.3333333333333333;
    v2 = tmp_1 * Math.pow(this_2, x_8);
    var v01 = mul3x3Float3_0(Companion_getInstance_20().p3r_1, v0, v1, v2);
    var v11 = mul3x3Float3_1(Companion_getInstance_20().p3r_1, v0, v1, v2);
    var v21 = mul3x3Float3_2(Companion_getInstance_20().p3r_1, v0, v1, v2);
    return Color_0(v01, v11, v21, a, colorSpace);
  };
  protoOf(Oklab).c3p = function (v) {
    mul3x3Float3(Companion_getInstance_20().o3r_1, v);
    // Inline function 'kotlin.math.sign' call
    var x = v[0];
    var tmp = sign(x);
    // Inline function 'kotlin.math.pow' call
    // Inline function 'kotlin.math.abs' call
    var x_0 = v[0];
    var this_0 = Math.abs(x_0);
    var x_1 = 0.3333333333333333;
    v[0] = tmp * Math.pow(this_0, x_1);
    // Inline function 'kotlin.math.sign' call
    var x_2 = v[1];
    var tmp_0 = sign(x_2);
    // Inline function 'kotlin.math.pow' call
    // Inline function 'kotlin.math.abs' call
    var x_3 = v[1];
    var this_1 = Math.abs(x_3);
    var x_4 = 0.3333333333333333;
    v[1] = tmp_0 * Math.pow(this_1, x_4);
    // Inline function 'kotlin.math.sign' call
    var x_5 = v[2];
    var tmp_1 = sign(x_5);
    // Inline function 'kotlin.math.pow' call
    // Inline function 'kotlin.math.abs' call
    var x_6 = v[2];
    var this_2 = Math.abs(x_6);
    var x_7 = 0.3333333333333333;
    v[2] = tmp_1 * Math.pow(this_2, x_7);
    mul3x3Float3(Companion_getInstance_20().p3r_1, v);
    return v;
  };
  function _RenderIntent___init__impl__jceahd(value) {
    return value;
  }
  function Companion_17() {
    Companion_instance_19 = this;
    this.d3p_1 = _RenderIntent___init__impl__jceahd(0);
    this.e3p_1 = _RenderIntent___init__impl__jceahd(1);
    this.f3p_1 = _RenderIntent___init__impl__jceahd(2);
    this.g3p_1 = _RenderIntent___init__impl__jceahd(3);
  }
  var Companion_instance_19;
  function Companion_getInstance_21() {
    if (Companion_instance_19 == null)
      new Companion_17();
    return Companion_instance_19;
  }
  function isSrgb($this, primaries, whitePoint, OETF, EOTF, min, max, id) {
    if (id === 0)
      return true;
    if (!compare(primaries, ColorSpaces_getInstance().n3j_1)) {
      return false;
    }
    if (!compare_0(whitePoint, Illuminant_getInstance().o3q_1)) {
      return false;
    }
    if (!(min === 0.0))
      return false;
    if (!(max === 1.0))
      return false;
    var srgb = ColorSpaces_getInstance().r3j_1;
    var x = 0.0;
    while (x <= 1.0) {
      if (!compare_1($this, x, OETF, srgb.v3p_1))
        return false;
      if (!compare_1($this, x, EOTF, srgb.y3p_1))
        return false;
      x = x + 0.00392156862745098;
    }
    return true;
  }
  function compare_1($this, point, a, b) {
    var rA = a.h3q(point);
    var rB = b.h3q(point);
    // Inline function 'kotlin.math.abs' call
    var x = rA - rB;
    return Math.abs(x) <= 0.001;
  }
  function isWideGamut($this, primaries, min, max) {
    return (area($this, primaries) / area($this, ColorSpaces_getInstance().o3j_1) > 0.9 ? contains($this, primaries, ColorSpaces_getInstance().n3j_1) : false) ? true : min < 0.0 ? max > 1.0 : false;
  }
  function area($this, primaries) {
    var rx = primaries[0];
    var ry = primaries[1];
    var gx = primaries[2];
    var gy = primaries[3];
    var bx = primaries[4];
    var by = primaries[5];
    var det = rx * gy + ry * bx + gx * by - gy * bx - ry * gx - rx * by;
    var r = 0.5 * det;
    return r < 0.0 ? -r : r;
  }
  function cross($this, ax, ay, bx, by) {
    return ax * by - ay * bx;
  }
  function contains($this, p1, p2) {
    // Inline function 'kotlin.floatArrayOf' call
    var p0 = new Float32Array([p1[0] - p2[0], p1[1] - p2[1], p1[2] - p2[2], p1[3] - p2[3], p1[4] - p2[4], p1[5] - p2[5]]);
    if (cross($this, p0[0], p0[1], p2[0] - p2[4], p2[1] - p2[5]) < 0.0 ? true : cross($this, p2[0] - p2[2], p2[1] - p2[3], p0[0], p0[1]) < 0.0) {
      return false;
    }
    if (cross($this, p0[2], p0[3], p2[2] - p2[0], p2[3] - p2[1]) < 0.0 ? true : cross($this, p2[2] - p2[4], p2[3] - p2[5], p0[2], p0[3]) < 0.0) {
      return false;
    }
    return !(cross($this, p0[4], p0[5], p2[4] - p2[2], p2[5] - p2[3]) < 0.0 ? true : cross($this, p2[4] - p2[0], p2[5] - p2[1], p0[4], p0[5]) < 0.0);
  }
  function xyPrimaries($this, primaries) {
    var xyPrimaries = new Float32Array(6);
    if (primaries.length === 9) {
      var sum = primaries[0] + primaries[1] + primaries[2];
      xyPrimaries[0] = primaries[0] / sum;
      xyPrimaries[1] = primaries[1] / sum;
      sum = primaries[3] + primaries[4] + primaries[5];
      xyPrimaries[2] = primaries[3] / sum;
      xyPrimaries[3] = primaries[4] / sum;
      sum = primaries[6] + primaries[7] + primaries[8];
      xyPrimaries[4] = primaries[6] / sum;
      xyPrimaries[5] = primaries[7] / sum;
    } else {
      // Inline function 'kotlin.collections.copyInto' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = primaries;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, xyPrimaries, 0, 0, 6);
    }
    return xyPrimaries;
  }
  function computeXYZMatrix($this, primaries, whitePoint) {
    var rx = primaries[0];
    var ry = primaries[1];
    var gx = primaries[2];
    var gy = primaries[3];
    var bx = primaries[4];
    var by = primaries[5];
    var wx = whitePoint.d3q_1;
    var wy = whitePoint.e3q_1;
    var oneRxRy = (1 - rx) / ry;
    var oneGxGy = (1 - gx) / gy;
    var oneBxBy = (1 - bx) / by;
    var oneWxWy = (1 - wx) / wy;
    var rxRy = rx / ry;
    var gxGy = gx / gy;
    var bxBy = bx / by;
    var wxWy = wx / wy;
    var byNumerator = (oneWxWy - oneRxRy) * (gxGy - rxRy) - (wxWy - rxRy) * (oneGxGy - oneRxRy);
    var byDenominator = (oneBxBy - oneRxRy) * (gxGy - rxRy) - (bxBy - rxRy) * (oneGxGy - oneRxRy);
    var bY = byNumerator / byDenominator;
    var gY = (wxWy - rxRy - bY * (bxBy - rxRy)) / (gxGy - rxRy);
    var rY = 1.0 - gY - bY;
    var rYRy = rY / ry;
    var gYGy = gY / gy;
    var bYBy = bY / by;
    // Inline function 'kotlin.floatArrayOf' call
    return new Float32Array([rYRy * rx, rY, rYRy * (1.0 - rx - ry), gYGy * gx, gY, gYGy * (1.0 - gx - gy), bYBy * bx, bY, bYBy * (1.0 - bx - by)]);
  }
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0(function_0) {
    this.v3r_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0).h3q = function (double) {
    return this.v3r_1(double);
  };
  function Rgb$Companion$DoubleIdentity$lambda(d) {
    return d;
  }
  function Rgb_init_$Init$(name, primaries, whitePoint, function_0, id, $this) {
    var tmp;
    if (function_0.b3s_1 === 0.0 ? function_0.c3s_1 === 0.0 : false) {
      var tmp_0 = Rgb$_init_$lambda_yyl4se(function_0);
      tmp = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(tmp_0);
    } else {
      var tmp_1 = Rgb$_init_$lambda_yyl4se_0(function_0);
      tmp = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(tmp_1);
    }
    var tmp_2 = tmp;
    var tmp_3;
    if (function_0.b3s_1 === 0.0 ? function_0.c3s_1 === 0.0 : false) {
      var tmp_4 = Rgb$_init_$lambda_yyl4se_1(function_0);
      tmp_3 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(tmp_4);
    } else {
      var tmp_5 = Rgb$_init_$lambda_yyl4se_2(function_0);
      tmp_3 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(tmp_5);
    }
    Rgb.call($this, name, primaries, whitePoint, null, tmp_2, tmp_3, 0.0, 1.0, function_0, id);
    return $this;
  }
  function Rgb_init_$Create$(name, primaries, whitePoint, function_0, id) {
    return Rgb_init_$Init$(name, primaries, whitePoint, function_0, id, objectCreate(protoOf(Rgb)));
  }
  function Rgb_init_$Init$_0(name, primaries, whitePoint, gamma, min, max, id, $this) {
    var tmp;
    if (gamma === 1.0) {
      tmp = Companion_getInstance_22().d3s_1;
    } else {
      var tmp_0 = Rgb$_init_$lambda_yyl4se_3(gamma);
      tmp = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4(tmp_0);
    }
    var tmp_1 = tmp;
    var tmp_2;
    if (gamma === 1.0) {
      tmp_2 = Companion_getInstance_22().d3s_1;
    } else {
      var tmp_3 = Rgb$_init_$lambda_yyl4se_4(gamma);
      tmp_2 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4(tmp_3);
    }
    Rgb.call($this, name, primaries, whitePoint, null, tmp_1, tmp_2, min, max, new TransferParameters(gamma, 1.0, 0.0, 0.0, 0.0), id);
    return $this;
  }
  function Rgb_init_$Create$_0(name, primaries, whitePoint, gamma, min, max, id) {
    return Rgb_init_$Init$_0(name, primaries, whitePoint, gamma, min, max, id, objectCreate(protoOf(Rgb)));
  }
  function Rgb_init_$Init$_1(colorSpace, transform, whitePoint, $this) {
    Rgb.call($this, colorSpace.t3k_1, colorSpace.s3p_1, whitePoint, transform, colorSpace.v3p_1, colorSpace.y3p_1, colorSpace.p3p_1, colorSpace.q3p_1, colorSpace.r3p_1, -1);
    return $this;
  }
  function Rgb_init_$Create$_1(colorSpace, transform, whitePoint) {
    return Rgb_init_$Init$_1(colorSpace, transform, whitePoint, objectCreate(protoOf(Rgb)));
  }
  function Companion_18() {
    Companion_instance_20 = this;
    var tmp = this;
    var tmp_0 = Rgb$Companion$DoubleIdentity$lambda;
    tmp.d3s_1 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0(tmp_0);
  }
  var Companion_instance_20;
  function Companion_getInstance_22() {
    if (Companion_instance_20 == null)
      new Companion_18();
    return Companion_instance_20;
  }
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1(function_0) {
    this.e3s_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1).h3q = function (double) {
    return this.e3s_1(double);
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2(function_0) {
    this.f3s_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2).h3q = function (double) {
    return this.f3s_1(double);
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(function_0) {
    this.g3s_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3).h3q = function (double) {
    return this.g3s_1(double);
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4(function_0) {
    this.h3s_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4).h3q = function (double) {
    return this.h3s_1(double);
  };
  function Rgb$oetf$lambda(this$0) {
    return function (x) {
      return coerceIn_0(this$0.v3p_1.h3q(x), this$0.p3p_1, this$0.q3p_1);
    };
  }
  function Rgb$oetfFunc$lambda(this$0) {
    return function (x) {
      return coerceIn_0(this$0.v3p_1.h3q(x), this$0.p3p_1, this$0.q3p_1);
    };
  }
  function Rgb$eotf$lambda(this$0) {
    return function (x) {
      return this$0.y3p_1.h3q(coerceIn_0(x, this$0.p3p_1, this$0.q3p_1));
    };
  }
  function Rgb$eotfFunc$lambda(this$0) {
    return function (x) {
      return this$0.y3p_1.h3q(coerceIn_0(x, this$0.p3p_1, this$0.q3p_1));
    };
  }
  function Rgb$_init_$lambda_yyl4se($function) {
    return function (x) {
      return rcpResponse(x, $function.x3r_1, $function.y3r_1, $function.z3r_1, $function.a3s_1, $function.w3r_1);
    };
  }
  function Rgb$_init_$lambda_yyl4se_0($function) {
    return function (x) {
      return rcpResponse_0(x, $function.x3r_1, $function.y3r_1, $function.z3r_1, $function.a3s_1, $function.b3s_1, $function.c3s_1, $function.w3r_1);
    };
  }
  function Rgb$_init_$lambda_yyl4se_1($function) {
    return function (x) {
      return response(x, $function.x3r_1, $function.y3r_1, $function.z3r_1, $function.a3s_1, $function.w3r_1);
    };
  }
  function Rgb$_init_$lambda_yyl4se_2($function) {
    return function (x) {
      return response_0(x, $function.x3r_1, $function.y3r_1, $function.z3r_1, $function.a3s_1, $function.b3s_1, $function.c3s_1, $function.w3r_1);
    };
  }
  function Rgb$_init_$lambda_yyl4se_3($gamma) {
    return function (x) {
      // Inline function 'kotlin.math.pow' call
      var this_0 = x < 0.0 ? 0.0 : x;
      var x_0 = 1.0 / $gamma;
      return Math.pow(this_0, x_0);
    };
  }
  function Rgb$_init_$lambda_yyl4se_4($gamma) {
    return function (x) {
      // Inline function 'kotlin.math.pow' call
      var this_0 = x < 0.0 ? 0.0 : x;
      var x_0 = $gamma;
      return Math.pow(this_0, x_0);
    };
  }
  function Rgb(name, primaries, whitePoint, transform, oetf, eotf, min, max, transferParameters, id) {
    Companion_getInstance_22();
    ColorSpace.call(this, name, Companion_getInstance_16().p3o_1, id);
    this.o3p_1 = whitePoint;
    this.p3p_1 = min;
    this.q3p_1 = max;
    this.r3p_1 = transferParameters;
    this.v3p_1 = oetf;
    var tmp = this;
    tmp.w3p_1 = Rgb$oetf$lambda(this);
    var tmp_0 = this;
    var tmp_1 = Rgb$oetfFunc$lambda(this);
    tmp_0.x3p_1 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1(tmp_1);
    this.y3p_1 = eotf;
    var tmp_2 = this;
    tmp_2.z3p_1 = Rgb$eotf$lambda(this);
    var tmp_3 = this;
    var tmp_4 = Rgb$eotfFunc$lambda(this);
    tmp_3.a3q_1 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2(tmp_4);
    if (!(primaries.length === 6) ? !(primaries.length === 9) : false) {
      throw IllegalArgumentException_init_$Create$("The color space's primaries must be defined as an array of 6 floats in xyY or 9 floats in XYZ");
    }
    if (this.p3p_1 >= this.q3p_1) {
      throw IllegalArgumentException_init_$Create$('Invalid range: min=' + this.p3p_1 + ', max=' + this.q3p_1 + '; min must ' + 'be strictly < max');
    }
    this.s3p_1 = xyPrimaries(Companion_getInstance_22(), primaries);
    if (transform == null) {
      this.t3p_1 = computeXYZMatrix(Companion_getInstance_22(), this.s3p_1, this.o3p_1);
    } else {
      if (!(transform.length === 9)) {
        throw IllegalArgumentException_init_$Create$('Transform must have 9 entries! Has ' + ('' + transform.length));
      }
      this.t3p_1 = transform;
    }
    this.u3p_1 = inverse3x3(this.t3p_1);
    this.b3q_1 = isWideGamut(Companion_getInstance_22(), this.s3p_1, this.p3p_1, this.q3p_1);
    this.c3q_1 = isSrgb(Companion_getInstance_22(), this.s3p_1, this.o3p_1, oetf, eotf, this.p3p_1, this.q3p_1, id);
  }
  protoOf(Rgb).l3l = function () {
    return this.c3q_1;
  };
  protoOf(Rgb).j3l = function (component) {
    return this.p3p_1;
  };
  protoOf(Rgb).k3l = function (component) {
    return this.q3p_1;
  };
  protoOf(Rgb).x3o = function (v) {
    v[0] = this.a3q_1.h3q(v[0]);
    v[1] = this.a3q_1.h3q(v[1]);
    v[2] = this.a3q_1.h3q(v[2]);
    return mul3x3Float3(this.t3p_1, v);
  };
  protoOf(Rgb).y3o = function (v0, v1, v2) {
    var v00 = this.a3q_1.h3q(v0);
    var v10 = this.a3q_1.h3q(v1);
    var v20 = this.a3q_1.h3q(v2);
    var x = mul3x3Float3_0(this.t3p_1, v00, v10, v20);
    var y = mul3x3Float3_1(this.t3p_1, v00, v10, v20);
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1_0 = toLong(toRawBits(x));
    var v2_0 = toLong(toRawBits(y));
    return v1_0.lb(32).pb(v2_0.ob(new Long(-1, 0)));
  };
  protoOf(Rgb).z3o = function (v0, v1, v2) {
    var v00 = this.a3q_1.h3q(v0);
    var v10 = this.a3q_1.h3q(v1);
    var v20 = this.a3q_1.h3q(v2);
    var z = mul3x3Float3_2(this.t3p_1, v00, v10, v20);
    return z;
  };
  protoOf(Rgb).a3p = function (x, y, z, a, colorSpace) {
    var v0 = mul3x3Float3_0(this.u3p_1, x, y, z);
    var v1 = mul3x3Float3_1(this.u3p_1, x, y, z);
    var v2 = mul3x3Float3_2(this.u3p_1, x, y, z);
    v0 = this.x3p_1.h3q(v0);
    v1 = this.x3p_1.h3q(v1);
    v2 = this.x3p_1.h3q(v2);
    return Color_0(v0, v1, v2, a, colorSpace);
  };
  protoOf(Rgb).c3p = function (v) {
    mul3x3Float3(this.u3p_1, v);
    v[0] = this.x3p_1.h3q(v[0]);
    v[1] = this.x3p_1.h3q(v[1]);
    v[2] = this.x3p_1.h3q(v[2]);
    return v;
  };
  protoOf(Rgb).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!protoOf(ColorSpace).equals.call(this, other))
      return false;
    var rgb = other instanceof Rgb ? other : THROW_CCE();
    if (!(compareTo(rgb.p3p_1, this.p3p_1) === 0))
      return false;
    if (!(compareTo(rgb.q3p_1, this.q3p_1) === 0))
      return false;
    if (!this.o3p_1.equals(rgb.o3p_1))
      return false;
    if (!contentEquals(this.s3p_1, rgb.s3p_1))
      return false;
    if (!(this.r3p_1 == null)) {
      return equals(this.r3p_1, rgb.r3p_1);
    } else if (rgb.r3p_1 == null) {
      return true;
    }
    return !equals(this.v3p_1, rgb.v3p_1) ? false : equals(this.y3p_1, rgb.y3p_1);
  };
  protoOf(Rgb).hashCode = function () {
    var result = protoOf(ColorSpace).hashCode.call(this);
    result = imul(31, result) + this.o3p_1.hashCode() | 0;
    result = imul(31, result) + contentHashCode(this.s3p_1) | 0;
    result = imul(31, result) + (!(this.p3p_1 === 0.0) ? toBits(this.p3p_1) : 0) | 0;
    result = imul(31, result) + (!(this.q3p_1 === 0.0) ? toBits(this.q3p_1) : 0) | 0;
    result = imul(31, result) + (!(this.r3p_1 == null) ? this.r3p_1.hashCode() : 0) | 0;
    if (this.r3p_1 == null) {
      result = imul(31, result) + hashCode(this.v3p_1) | 0;
      result = imul(31, result) + hashCode(this.y3p_1) | 0;
    }
    return result;
  };
  function TransferParameters(gamma, a, b, c, d, e, f) {
    e = e === VOID ? 0.0 : e;
    f = f === VOID ? 0.0 : f;
    this.w3r_1 = gamma;
    this.x3r_1 = a;
    this.y3r_1 = b;
    this.z3r_1 = c;
    this.a3s_1 = d;
    this.b3s_1 = e;
    this.c3s_1 = f;
    if ((((((isNaN_0(this.x3r_1) ? true : isNaN_0(this.y3r_1)) ? true : isNaN_0(this.z3r_1)) ? true : isNaN_0(this.a3s_1)) ? true : isNaN_0(this.b3s_1)) ? true : isNaN_0(this.c3s_1)) ? true : isNaN_0(this.w3r_1)) {
      throw IllegalArgumentException_init_$Create$('Parameters cannot be NaN');
    }
    if (!(this.a3s_1 >= 0.0 ? this.a3s_1 <= 1.0 : false)) {
      throw IllegalArgumentException_init_$Create$('Parameter d must be in the range [0..1], was ' + ('' + this.a3s_1));
    }
    if (this.a3s_1 === 0.0 ? this.x3r_1 === 0.0 ? true : this.w3r_1 === 0.0 : false) {
      throw IllegalArgumentException_init_$Create$('Parameter a or g is zero, the transfer function is constant');
    }
    if (this.a3s_1 >= 1.0 ? this.z3r_1 === 0.0 : false) {
      throw IllegalArgumentException_init_$Create$('Parameter c is zero, the transfer function is constant');
    }
    if ((this.x3r_1 === 0.0 ? true : this.w3r_1 === 0.0) ? this.z3r_1 === 0.0 : false) {
      throw IllegalArgumentException_init_$Create$('Parameter a or g is zero, and c is zero, the transfer function is constant');
    }
    if (this.z3r_1 < 0.0) {
      throw IllegalArgumentException_init_$Create$('The transfer function must be increasing');
    }
    if (this.x3r_1 < 0.0 ? true : this.w3r_1 < 0.0) {
      throw IllegalArgumentException_init_$Create$('The transfer function must be positive or increasing');
    }
  }
  protoOf(TransferParameters).toString = function () {
    return 'TransferParameters(gamma=' + this.w3r_1 + ', a=' + this.x3r_1 + ', b=' + this.y3r_1 + ', c=' + this.z3r_1 + ', d=' + this.a3s_1 + ', e=' + this.b3s_1 + ', f=' + this.c3s_1 + ')';
  };
  protoOf(TransferParameters).hashCode = function () {
    var result = getNumberHashCode(this.w3r_1);
    result = imul(result, 31) + getNumberHashCode(this.x3r_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.y3r_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.z3r_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.a3s_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.b3s_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.c3s_1) | 0;
    return result;
  };
  protoOf(TransferParameters).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TransferParameters))
      return false;
    var tmp0_other_with_cast = other instanceof TransferParameters ? other : THROW_CCE();
    if (!equals(this.w3r_1, tmp0_other_with_cast.w3r_1))
      return false;
    if (!equals(this.x3r_1, tmp0_other_with_cast.x3r_1))
      return false;
    if (!equals(this.y3r_1, tmp0_other_with_cast.y3r_1))
      return false;
    if (!equals(this.z3r_1, tmp0_other_with_cast.z3r_1))
      return false;
    if (!equals(this.a3s_1, tmp0_other_with_cast.a3s_1))
      return false;
    if (!equals(this.b3s_1, tmp0_other_with_cast.b3s_1))
      return false;
    if (!equals(this.c3s_1, tmp0_other_with_cast.c3s_1))
      return false;
    return true;
  };
  function WhitePoint(x, y) {
    this.d3q_1 = x;
    this.e3q_1 = y;
  }
  protoOf(WhitePoint).f3q = function () {
    // Inline function 'kotlin.floatArrayOf' call
    return new Float32Array([this.d3q_1 / this.e3q_1, 1.0, (1.0 - this.d3q_1 - this.e3q_1) / this.e3q_1]);
  };
  protoOf(WhitePoint).toString = function () {
    return 'WhitePoint(x=' + this.d3q_1 + ', y=' + this.e3q_1 + ')';
  };
  protoOf(WhitePoint).hashCode = function () {
    var result = getNumberHashCode(this.d3q_1);
    result = imul(result, 31) + getNumberHashCode(this.e3q_1) | 0;
    return result;
  };
  protoOf(WhitePoint).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WhitePoint))
      return false;
    var tmp0_other_with_cast = other instanceof WhitePoint ? other : THROW_CCE();
    if (!equals(this.d3q_1, tmp0_other_with_cast.d3q_1))
      return false;
    if (!equals(this.e3q_1, tmp0_other_with_cast.e3q_1))
      return false;
    return true;
  };
  function clamp($this, x) {
    return coerceIn(x, -2.0, 2.0);
  }
  function Xyz(name, id) {
    ColorSpace.call(this, name, Companion_getInstance_16().q3o_1, id);
  }
  protoOf(Xyz).j3l = function (component) {
    return -2.0;
  };
  protoOf(Xyz).k3l = function (component) {
    return 2.0;
  };
  protoOf(Xyz).x3o = function (v) {
    v[0] = clamp(this, v[0]);
    v[1] = clamp(this, v[1]);
    v[2] = clamp(this, v[2]);
    return v;
  };
  protoOf(Xyz).y3o = function (v0, v1, v2) {
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val1 = clamp(this, v0);
    var val2 = clamp(this, v1);
    var v1_0 = toLong(toRawBits(val1));
    var v2_0 = toLong(toRawBits(val2));
    return v1_0.lb(32).pb(v2_0.ob(new Long(-1, 0)));
  };
  protoOf(Xyz).z3o = function (v0, v1, v2) {
    return clamp(this, v2);
  };
  protoOf(Xyz).a3p = function (x, y, z, a, colorSpace) {
    return Color_0(clamp(this, x), clamp(this, y), clamp(this, z), a, colorSpace);
  };
  protoOf(Xyz).c3p = function (v) {
    v[0] = clamp(this, v[0]);
    v[1] = clamp(this, v[1]);
    v[2] = clamp(this, v[2]);
    return v;
  };
  function obtainFillPaint($this) {
    var tmp0_elvis_lhs = $this.n3s_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.apply' call
      var this_0 = Paint();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.obtainFillPaint.<anonymous>' call
      this_0.p3s(Companion_getInstance_9().l3n_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.obtainFillPaint.<anonymous>' call
      $this.n3s_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function obtainStrokePaint($this) {
    var tmp0_elvis_lhs = $this.o3s_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.apply' call
      var this_0 = Paint();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.obtainStrokePaint.<anonymous>' call
      this_0.p3s(Companion_getInstance_9().m3n_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.obtainStrokePaint.<anonymous>' call
      $this.o3s_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function selectPaint($this, drawStyle) {
    var tmp;
    if (equals(drawStyle, Fill_getInstance())) {
      tmp = obtainFillPaint($this);
    } else {
      if (drawStyle instanceof Stroke) {
        // Inline function 'kotlin.apply' call
        var this_0 = obtainStrokePaint($this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.selectPaint.<anonymous>' call
        if (!(this_0.g35() === drawStyle.q3s_1)) {
          this_0.f35(drawStyle.q3s_1);
        }
        if (!(this_0.w3s() === drawStyle.s3s_1)) {
          this_0.v3s(drawStyle.s3s_1);
        }
        if (!(this_0.y3s() === drawStyle.r3s_1)) {
          this_0.x3s(drawStyle.r3s_1);
        }
        if (!(this_0.a3t() === drawStyle.t3s_1)) {
          this_0.z3s(drawStyle.t3s_1);
        }
        if (!equals(this_0.c3t(), drawStyle.u3s_1)) {
          this_0.b3t(drawStyle.u3s_1);
        }
        tmp = this_0;
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  }
  function configurePaint($this, color, style, alpha, colorFilter, blendMode, filterQuality) {
    // Inline function 'kotlin.apply' call
    var this_0 = selectPaint($this, style);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.configurePaint.<anonymous>' call
    var targetColor = modulate(color, $this, alpha);
    if (!equals(this_0.e3t(), targetColor)) {
      this_0.d3t(targetColor);
    }
    if (!(this_0.f3t() == null)) {
      this_0.k35(null);
    }
    if (!equals(this_0.h3t(), colorFilter)) {
      this_0.g3t(colorFilter);
    }
    if (!(this_0.j3t() === blendMode)) {
      this_0.i3t(blendMode);
    }
    if (!(this_0.l3t() === filterQuality)) {
      this_0.k3t(filterQuality);
    }
    return this_0;
  }
  function configurePaint$default($this, color, style, alpha, colorFilter, blendMode, filterQuality, $super) {
    filterQuality = filterQuality === VOID ? Companion_getInstance_23().n3t_1 : filterQuality;
    return configurePaint($this, color, style, alpha, colorFilter, blendMode, filterQuality);
  }
  function modulate(_this__u8e3s4, $this, alpha) {
    var tmp;
    if (!(alpha === 1.0)) {
      tmp = Color__copy$default_impl_ectz3s(_this__u8e3s4, _Color___get_alpha__impl__wcfyv1(_this__u8e3s4) * alpha);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function DrawParams(density, layoutDirection, canvas, size) {
    density = density === VOID ? get_DefaultDensity() : density;
    layoutDirection = layoutDirection === VOID ? LayoutDirection_Ltr_getInstance() : layoutDirection;
    canvas = canvas === VOID ? new EmptyCanvas() : canvas;
    size = size === VOID ? Companion_getInstance_0().i2w_1 : size;
    this.o3t_1 = density;
    this.p3t_1 = layoutDirection;
    this.q3t_1 = canvas;
    this.r3t_1 = size;
  }
  protoOf(DrawParams).se = function () {
    return this.o3t_1;
  };
  protoOf(DrawParams).te = function () {
    return this.p3t_1;
  };
  protoOf(DrawParams).s3t = function () {
    return this.q3t_1;
  };
  protoOf(DrawParams).t3t = function () {
    return this.r3t_1;
  };
  protoOf(DrawParams).toString = function () {
    return 'DrawParams(density=' + this.o3t_1 + ', layoutDirection=' + this.p3t_1 + ', canvas=' + this.q3t_1 + ', size=' + new Size(this.r3t_1) + ')';
  };
  protoOf(DrawParams).hashCode = function () {
    var result = hashCode(this.o3t_1);
    result = imul(result, 31) + this.p3t_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.q3t_1) | 0;
    result = imul(result, 31) + Size__hashCode_impl_2h1qpd(this.r3t_1) | 0;
    return result;
  };
  protoOf(DrawParams).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DrawParams))
      return false;
    var tmp0_other_with_cast = other instanceof DrawParams ? other : THROW_CCE();
    if (!equals(this.o3t_1, tmp0_other_with_cast.o3t_1))
      return false;
    if (!this.p3t_1.equals(tmp0_other_with_cast.p3t_1))
      return false;
    if (!equals(this.q3t_1, tmp0_other_with_cast.q3t_1))
      return false;
    if (!equals(this.r3t_1, tmp0_other_with_cast.r3t_1))
      return false;
    return true;
  };
  function CanvasDrawScope$drawContext$1(this$0) {
    this.v3t_1 = this$0;
    this.u3t_1 = asDrawTransform(this);
  }
  protoOf(CanvasDrawScope$drawContext$1).t37 = function () {
    return this.v3t_1.l3s_1.q3t_1;
  };
  protoOf(CanvasDrawScope$drawContext$1).w3t = function (value) {
    this.v3t_1.l3s_1.r3t_1 = value;
  };
  protoOf(CanvasDrawScope$drawContext$1).x3t = function () {
    return this.v3t_1.l3s_1.r3t_1;
  };
  protoOf(CanvasDrawScope$drawContext$1).y3t = function () {
    return this.u3t_1;
  };
  function CanvasDrawScope() {
    this.l3s_1 = new DrawParams();
    var tmp = this;
    tmp.m3s_1 = new CanvasDrawScope$drawContext$1(this);
    this.n3s_1 = null;
    this.o3s_1 = null;
  }
  protoOf(CanvasDrawScope).g2x = function () {
    return this.l3s_1.o3t_1.g2x();
  };
  protoOf(CanvasDrawScope).q2x = function () {
    return this.l3s_1.o3t_1.q2x();
  };
  protoOf(CanvasDrawScope).z3t = function () {
    return this.m3s_1;
  };
  protoOf(CanvasDrawScope).a3u = function (path, color, alpha, style, colorFilter, blendMode) {
    return this.l3s_1.q3t_1.l3j(path, configurePaint$default(this, color, style, alpha, colorFilter, blendMode));
  };
  function asDrawTransform(_this__u8e3s4) {
    return new asDrawTransform$1(_this__u8e3s4);
  }
  function asDrawTransform$1($this_asDrawTransform) {
    this.c3u_1 = $this_asDrawTransform;
  }
  protoOf(asDrawTransform$1).d3j = function (left, top, right, bottom, clipOp) {
    this.c3u_1.t37().d3j(left, top, right, bottom, clipOp);
  };
  function get_DefaultDensity() {
    _init_properties_DrawContext_kt__bfvdzt();
    return DefaultDensity;
  }
  var DefaultDensity;
  function DrawContext() {
  }
  var properties_initialized_DrawContext_kt_nwly1n;
  function _init_properties_DrawContext_kt__bfvdzt() {
    if (!properties_initialized_DrawContext_kt_nwly1n) {
      properties_initialized_DrawContext_kt_nwly1n = true;
      DefaultDensity = Density(1.0, 1.0);
    }
  }
  function DrawStyle() {
  }
  function Companion_19() {
    Companion_instance_21 = this;
    this.m3t_1 = Companion_getInstance_3().v3h_1;
    this.n3t_1 = Companion_getInstance_6().o3l_1;
  }
  var Companion_instance_21;
  function Companion_getInstance_23() {
    if (Companion_instance_21 == null)
      new Companion_19();
    return Companion_instance_21;
  }
  function DrawScope() {
  }
  function Fill() {
    Fill_instance = this;
    DrawStyle.call(this);
  }
  var Fill_instance;
  function Fill_getInstance() {
    if (Fill_instance == null)
      new Fill();
    return Fill_instance;
  }
  function Stroke() {
  }
  function EmptyCanvas() {
  }
  protoOf(EmptyCanvas).x3i = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).y3i = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).z3i = function (bounds, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).a3j = function (dx, dy) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).b3j = function (matrix) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).d3j = function (left, top, right, bottom, clipOp) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).h3j = function (path, clipOp) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).k3j = function (left, top, right, bottom, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).l3j = function (path, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  function toSkia(_this__u8e3s4) {
    return _this__u8e3s4 === Companion_getInstance_3().s3h_1 ? BlendMode_CLEAR_getInstance() : _this__u8e3s4 === Companion_getInstance_3().t3h_1 ? BlendMode_SRC_getInstance() : _this__u8e3s4 === Companion_getInstance_3().u3h_1 ? BlendMode_DST_getInstance() : _this__u8e3s4 === Companion_getInstance_3().v3h_1 ? BlendMode_SRC_OVER_getInstance() : _this__u8e3s4 === Companion_getInstance_3().w3h_1 ? BlendMode_DST_OVER_getInstance() : _this__u8e3s4 === Companion_getInstance_3().x3h_1 ? BlendMode_SRC_IN_getInstance() : _this__u8e3s4 === Companion_getInstance_3().y3h_1 ? BlendMode_DST_IN_getInstance() : _this__u8e3s4 === Companion_getInstance_3().z3h_1 ? BlendMode_SRC_OUT_getInstance() : _this__u8e3s4 === Companion_getInstance_3().a3i_1 ? BlendMode_DST_OUT_getInstance() : _this__u8e3s4 === Companion_getInstance_3().b3i_1 ? BlendMode_SRC_ATOP_getInstance() : _this__u8e3s4 === Companion_getInstance_3().c3i_1 ? BlendMode_DST_ATOP_getInstance() : _this__u8e3s4 === Companion_getInstance_3().d3i_1 ? BlendMode_XOR_getInstance() : _this__u8e3s4 === Companion_getInstance_3().e3i_1 ? BlendMode_PLUS_getInstance() : _this__u8e3s4 === Companion_getInstance_3().f3i_1 ? BlendMode_MODULATE_getInstance() : _this__u8e3s4 === Companion_getInstance_3().g3i_1 ? BlendMode_SCREEN_getInstance() : _this__u8e3s4 === Companion_getInstance_3().h3i_1 ? BlendMode_OVERLAY_getInstance() : _this__u8e3s4 === Companion_getInstance_3().i3i_1 ? BlendMode_DARKEN_getInstance() : _this__u8e3s4 === Companion_getInstance_3().j3i_1 ? BlendMode_LIGHTEN_getInstance() : _this__u8e3s4 === Companion_getInstance_3().k3i_1 ? BlendMode_COLOR_DODGE_getInstance() : _this__u8e3s4 === Companion_getInstance_3().l3i_1 ? BlendMode_COLOR_BURN_getInstance() : _this__u8e3s4 === Companion_getInstance_3().m3i_1 ? BlendMode_HARD_LIGHT_getInstance() : _this__u8e3s4 === Companion_getInstance_3().n3i_1 ? BlendMode_SOFT_LIGHT_getInstance() : _this__u8e3s4 === Companion_getInstance_3().o3i_1 ? BlendMode_DIFFERENCE_getInstance() : _this__u8e3s4 === Companion_getInstance_3().p3i_1 ? BlendMode_EXCLUSION_getInstance() : _this__u8e3s4 === Companion_getInstance_3().q3i_1 ? BlendMode_MULTIPLY_getInstance() : _this__u8e3s4 === Companion_getInstance_3().r3i_1 ? BlendMode_HUE_getInstance() : _this__u8e3s4 === Companion_getInstance_3().s3i_1 ? BlendMode_SATURATION_getInstance() : _this__u8e3s4 === Companion_getInstance_3().t3i_1 ? BlendMode_COLOR_getInstance() : _this__u8e3s4 === Companion_getInstance_3().u3i_1 ? BlendMode_LUMINOSITY_getInstance() : BlendMode_SRC_OVER_getInstance();
  }
  function toSkiaRect(_this__u8e3s4) {
    return Companion_instance.g37(_this__u8e3s4.a2w_1, _this__u8e3s4.b2w_1, _this__u8e3s4.c2w_1, _this__u8e3s4.d2w_1);
  }
  function toSkiaRRect(_this__u8e3s4) {
    var radii = new Float32Array(8);
    radii[0] = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.h3u_1);
    radii[1] = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.h3u_1);
    radii[2] = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.i3u_1);
    radii[3] = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.i3u_1);
    radii[4] = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.j3u_1);
    radii[5] = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.j3u_1);
    radii[6] = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.k3u_1);
    radii[7] = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.k3u_1);
    return Companion_instance_0.f37(_this__u8e3s4.d3u_1, _this__u8e3s4.e3u_1, _this__u8e3s4.f3u_1, _this__u8e3s4.g3u_1, radii);
  }
  function toComposeRect(_this__u8e3s4) {
    return new Rect(_this__u8e3s4.a30_1, _this__u8e3s4.b30_1, _this__u8e3s4.c30_1, _this__u8e3s4.d30_1);
  }
  function get_nativeCanvas(_this__u8e3s4) {
    return (_this__u8e3s4 instanceof SkiaBackedCanvas ? _this__u8e3s4 : THROW_CCE()).m3u_1;
  }
  function asComposeCanvas(_this__u8e3s4) {
    return new SkiaBackedCanvas(_this__u8e3s4);
  }
  function set_alphaMultiplier(_this__u8e3s4, value) {
    (_this__u8e3s4 instanceof SkiaBackedCanvas ? _this__u8e3s4 : THROW_CCE()).n3u_1 = value;
  }
  function _get_skia__ddpejf(_this__u8e3s4, $this) {
    // Inline function 'kotlin.apply' call
    var this_0 = _this__u8e3s4 instanceof SkiaBackedPaint ? _this__u8e3s4 : THROW_CCE();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.SkiaBackedCanvas.<get-skia>.<anonymous>' call
    this_0.z3u($this.n3u_1);
    return this_0.o3u_1;
  }
  function toSkia_0(_this__u8e3s4, $this) {
    return _this__u8e3s4 === Companion_getInstance_4().f3j_1 ? ClipMode_DIFFERENCE_getInstance() : _this__u8e3s4 === Companion_getInstance_4().g3j_1 ? ClipMode_INTERSECT_getInstance() : ClipMode_INTERSECT_getInstance();
  }
  function toSkia_1(_this__u8e3s4, $this) {
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(0, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_0 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(1, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_1 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(2, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_2 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(3, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_3 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(0, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_4 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(1, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_5 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(2, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_6 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(3, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_7 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(0, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_8 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(1, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_9 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(2, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_10 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(3, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_11 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(0, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_12 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(1, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_13 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(2, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp$ret$15 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(3, 4) + 3 | 0];
    return new Matrix44(new Float32Array([tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, tmp$ret$15]));
  }
  function SkiaBackedCanvas(skia) {
    this.m3u_1 = skia;
    this.n3u_1 = 1.0;
  }
  protoOf(SkiaBackedCanvas).x3i = function () {
    this.m3u_1.t30();
  };
  protoOf(SkiaBackedCanvas).y3i = function () {
    this.m3u_1.v30();
  };
  protoOf(SkiaBackedCanvas).z3i = function (bounds, paint) {
    this.m3u_1.u30(bounds.a2w_1, bounds.b2w_1, bounds.c2w_1, bounds.d2w_1, _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).a3j = function (dx, dy) {
    this.m3u_1.h2w(dx, dy);
  };
  protoOf(SkiaBackedCanvas).b3j = function (matrix) {
    if (!isIdentity(matrix)) {
      this.m3u_1.r30(toSkia_1(matrix, this));
    }
  };
  protoOf(SkiaBackedCanvas).d3j = function (left, top, right, bottom, clipOp) {
    var antiAlias = true;
    this.m3u_1.j30(Companion_instance.g37(left, top, right, bottom), toSkia_0(clipOp, this), antiAlias);
  };
  protoOf(SkiaBackedCanvas).h3j = function (path, clipOp) {
    var antiAlias = true;
    this.m3u_1.q30(asSkiaPath(path), toSkia_0(clipOp, this), antiAlias);
  };
  protoOf(SkiaBackedCanvas).k3j = function (left, top, right, bottom, paint) {
    this.m3u_1.z2z(Companion_instance.g37(left, top, right, bottom), _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).l3j = function (path, paint) {
    this.m3u_1.e30(asSkiaPath(path), _get_skia__ddpejf(paint, this));
  };
  function asComposePaint(_this__u8e3s4) {
    return new SkiaBackedPaint(_this__u8e3s4);
  }
  function Paint() {
    return new SkiaBackedPaint();
  }
  function updateAlpha($this, alpha, multiplier) {
    $this.o3u_1.d35(toArgb(Color__copy$default_impl_ectz3s(Color_2($this.o3u_1.e35()), alpha * multiplier)));
  }
  function updateAlpha$default($this, alpha, multiplier, $super) {
    alpha = alpha === VOID ? $this.p3g() : alpha;
    multiplier = multiplier === VOID ? $this.p3u_1 : multiplier;
    return updateAlpha($this, alpha, multiplier);
  }
  function toSkia_2(_this__u8e3s4, $this) {
    return _this__u8e3s4 === Companion_getInstance_9().l3n_1 ? PaintMode_FILL_getInstance() : _this__u8e3s4 === Companion_getInstance_9().m3n_1 ? PaintMode_STROKE_getInstance() : PaintMode_FILL_getInstance();
  }
  function toSkia_3(_this__u8e3s4, $this) {
    return _this__u8e3s4 === Companion_getInstance_13().f3o_1 ? PaintStrokeCap_BUTT_getInstance() : _this__u8e3s4 === Companion_getInstance_13().g3o_1 ? PaintStrokeCap_ROUND_getInstance() : _this__u8e3s4 === Companion_getInstance_13().h3o_1 ? PaintStrokeCap_SQUARE_getInstance() : PaintStrokeCap_BUTT_getInstance();
  }
  function toSkia_4(_this__u8e3s4, $this) {
    return _this__u8e3s4 === Companion_getInstance_14().i3o_1 ? PaintStrokeJoin_MITER_getInstance() : _this__u8e3s4 === Companion_getInstance_14().j3o_1 ? PaintStrokeJoin_ROUND_getInstance() : _this__u8e3s4 === Companion_getInstance_14().k3o_1 ? PaintStrokeJoin_BEVEL_getInstance() : PaintStrokeJoin_MITER_getInstance();
  }
  function SkiaBackedPaint(skia) {
    skia = skia === VOID ? Paint_init_$Create$() : skia;
    this.o3u_1 = skia;
    this.p3u_1 = 1.0;
    this.q3u_1 = Companion_getInstance_3().v3h_1;
    this.r3u_1 = Companion_getInstance_9().l3n_1;
    this.s3u_1 = Companion_getInstance_13().f3o_1;
    this.t3u_1 = Companion_getInstance_14().j3o_1;
    this.u3u_1 = 0.0;
    this.v3u_1 = Companion_getInstance_6().p3l_1;
    this.w3u_1 = null;
    this.x3u_1 = null;
    this.y3u_1 = null;
  }
  protoOf(SkiaBackedPaint).a3v = function () {
    return this.o3u_1;
  };
  protoOf(SkiaBackedPaint).z3u = function (value) {
    var multiplier = coerceIn(value, 0.0, 1.0);
    updateAlpha$default(this, VOID, multiplier);
    this.p3u_1 = multiplier;
  };
  protoOf(SkiaBackedPaint).b3v = function (value) {
    updateAlpha$default(this, value);
  };
  protoOf(SkiaBackedPaint).p3g = function () {
    return _Color___get_alpha__impl__wcfyv1(Color_2(this.o3u_1.e35()));
  };
  protoOf(SkiaBackedPaint).d3t = function (color) {
    this.o3u_1.d35(toArgb(color));
  };
  protoOf(SkiaBackedPaint).e3t = function () {
    return Color_2(this.o3u_1.e35());
  };
  protoOf(SkiaBackedPaint).i3t = function (value) {
    this.o3u_1.m35(toSkia(value));
    this.q3u_1 = value;
  };
  protoOf(SkiaBackedPaint).j3t = function () {
    return this.q3u_1;
  };
  protoOf(SkiaBackedPaint).p3s = function (value) {
    this.o3u_1.c35(toSkia_2(value, this));
    this.r3u_1 = value;
  };
  protoOf(SkiaBackedPaint).c3v = function () {
    return this.r3u_1;
  };
  protoOf(SkiaBackedPaint).f35 = function (value) {
    this.o3u_1.f35(value);
  };
  protoOf(SkiaBackedPaint).g35 = function () {
    return this.o3u_1.g35();
  };
  protoOf(SkiaBackedPaint).v3s = function (value) {
    this.o3u_1.i35(toSkia_3(value, this));
    this.s3u_1 = value;
  };
  protoOf(SkiaBackedPaint).w3s = function () {
    return this.s3u_1;
  };
  protoOf(SkiaBackedPaint).z3s = function (value) {
    this.o3u_1.j35(toSkia_4(value, this));
    this.t3u_1 = value;
  };
  protoOf(SkiaBackedPaint).a3t = function () {
    return this.t3u_1;
  };
  protoOf(SkiaBackedPaint).x3s = function (value) {
    this.o3u_1.h35(value);
    this.u3u_1 = value;
  };
  protoOf(SkiaBackedPaint).y3s = function () {
    return this.u3u_1;
  };
  protoOf(SkiaBackedPaint).k3t = function (_set____db54di) {
    this.v3u_1 = _set____db54di;
  };
  protoOf(SkiaBackedPaint).l3t = function () {
    return this.v3u_1;
  };
  protoOf(SkiaBackedPaint).k35 = function (value) {
    this.o3u_1.k35(value);
    this.w3u_1 = value;
  };
  protoOf(SkiaBackedPaint).f3t = function () {
    return this.w3u_1;
  };
  protoOf(SkiaBackedPaint).g3t = function (value) {
    this.o3u_1.l35(value == null ? null : asSkiaColorFilter(value));
    this.x3u_1 = value;
  };
  protoOf(SkiaBackedPaint).h3t = function () {
    return this.x3u_1;
  };
  protoOf(SkiaBackedPaint).b3t = function (value) {
    var tmp0_safe_receiver = (value == null ? true : value instanceof SkiaBackedPathEffect) ? value : THROW_CCE();
    this.o3u_1.p35(tmp0_safe_receiver == null ? null : asSkiaPathEffect(tmp0_safe_receiver));
    this.y3u_1 = value;
  };
  protoOf(SkiaBackedPaint).c3t = function () {
    return this.y3u_1;
  };
  function Path_0() {
    return new SkiaBackedPath();
  }
  function toSkiaOperation(_this__u8e3s4, $this) {
    return _this__u8e3s4 === Companion_getInstance_11().v3n_1 ? PathOp_DIFFERENCE_getInstance() : _this__u8e3s4 === Companion_getInstance_11().w3n_1 ? PathOp_INTERSECT_getInstance() : _this__u8e3s4 === Companion_getInstance_11().x3n_1 ? PathOp_UNION_getInstance() : _this__u8e3s4 === Companion_getInstance_11().y3n_1 ? PathOp_XOR_getInstance() : _this__u8e3s4 === Companion_getInstance_11().z3n_1 ? PathOp_REVERSE_DIFFERENCE_getInstance() : PathOp_XOR_getInstance();
  }
  function SkiaBackedPath(internalPath) {
    internalPath = internalPath === VOID ? Path_init_$Create$() : internalPath;
    this.d3v_1 = internalPath;
  }
  protoOf(SkiaBackedPath).e3v = function (value) {
    var tmp = this.d3v_1;
    var tmp_0;
    if (value === Companion_getInstance_10().u3n_1) {
      tmp_0 = PathFillMode_EVEN_ODD_getInstance();
    } else {
      tmp_0 = PathFillMode_WINDING_getInstance();
    }
    tmp.v35(tmp_0);
  };
  protoOf(SkiaBackedPath).f3v = function () {
    if (this.d3v_1.w35().equals(PathFillMode_EVEN_ODD_getInstance())) {
      return Companion_getInstance_10().u3n_1;
    } else {
      return Companion_getInstance_10().t3n_1;
    }
  };
  protoOf(SkiaBackedPath).n3n = function (rect) {
    this.d3v_1.z35(toSkiaRect(rect), PathDirection_COUNTER_CLOCKWISE_getInstance());
  };
  protoOf(SkiaBackedPath).o3n = function (roundRect) {
    this.d3v_1.b36(toSkiaRRect(roundRect), PathDirection_COUNTER_CLOCKWISE_getInstance());
  };
  protoOf(SkiaBackedPath).p3n = function (path, offset) {
    this.d3v_1.d36(asSkiaPath(path), _Offset___get_x__impl__xvi35n(offset), _Offset___get_y__impl__8bzhra(offset));
  };
  protoOf(SkiaBackedPath).a26 = function () {
    var fillType = this.f3v();
    this.d3v_1.x35();
    this.e3v(fillType);
  };
  protoOf(SkiaBackedPath).r3n = function (offset) {
    this.d3v_1.f36(Companion_getInstance_1().x34(_Offset___get_x__impl__xvi35n(offset), _Offset___get_y__impl__8bzhra(offset)));
  };
  protoOf(SkiaBackedPath).s3n = function (path1, path2, operation) {
    var path = Companion_getInstance_2().r35(asSkiaPath(path1), asSkiaPath(path2), toSkiaOperation(operation, this));
    var tmp = this;
    tmp.d3v_1 = path == null ? this.d3v_1 : path;
    return !(path == null);
  };
  protoOf(SkiaBackedPath).o1o = function () {
    return this.d3v_1.o1o();
  };
  function asSkiaPath(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof SkiaBackedPath) {
      tmp = _this__u8e3s4.d3v_1;
    } else {
      throw UnsupportedOperationException_init_$Create$_0('Unable to obtain org.jetbrains.skia.Path');
    }
    return tmp;
  }
  function SkiaBackedPathEffect() {
  }
  function asSkiaPathEffect(_this__u8e3s4) {
    return (_this__u8e3s4 instanceof SkiaBackedPathEffect ? _this__u8e3s4 : THROW_CCE()).g3v_1;
  }
  function asSkiaColorFilter(_this__u8e3s4) {
    return _this__u8e3s4.h3v_1;
  }
  //region block: post-declaration
  protoOf(CanvasDrawScope).b3u = drawPath$default;
  protoOf(CanvasDrawScope).x3t = get_size;
  protoOf(CanvasDrawScope).h2x = toPx;
  protoOf(CanvasDrawScope).i2x = toPx_0;
  protoOf(CanvasDrawScope).m2x = toDp;
  protoOf(CanvasDrawScope).n2x = toSize;
  protoOf(EmptyCanvas).i3j = clipPath$default;
  protoOf(EmptyCanvas).c3j = clipRect;
  protoOf(EmptyCanvas).e3j = clipRect$default;
  protoOf(EmptyCanvas).j3j = drawRect;
  protoOf(SkiaBackedCanvas).i3j = clipPath$default;
  protoOf(SkiaBackedCanvas).c3j = clipRect;
  protoOf(SkiaBackedCanvas).e3j = clipRect$default;
  protoOf(SkiaBackedCanvas).j3j = drawRect;
  protoOf(SkiaBackedPath).q3n = addPath$default;
  //endregion
  //region block: init
  Companion_instance_6 = new Companion_4();
  Companion_instance_15 = new Companion_13();
  Companion_instance_17 = new Companion_15();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CanvasDrawScope;
  _.$_$.b = DrawScope;
  _.$_$.c = Stroke;
  _.$_$.d = BlendMode;
  _.$_$.e = Color_1;
  _.$_$.f = Color;
  _.$_$.g = Matrix;
  _.$_$.h = Generic;
  _.$_$.i = Rectangle;
  _.$_$.j = Rounded;
  _.$_$.k = Paint;
  _.$_$.l = Path_0;
  _.$_$.m = get_RectangleShape;
  _.$_$.n = ShaderBrush;
  _.$_$.o = SolidColor;
  _.$_$.p = set_alphaMultiplier;
  _.$_$.q = asComposeCanvas;
  _.$_$.r = asComposePaint;
  _.$_$.s = asSkiaPath;
  _.$_$.t = get_nativeCanvas;
  _.$_$.u = toArgb;
  _.$_$.v = toComposeRect;
  _.$_$.w = toSkiaRRect;
  _.$_$.x = drawPath$default;
  _.$_$.y = BlendMode__hashCode_impl_93ceri;
  _.$_$.z = _Color___init__impl__r6cqi2;
  _.$_$.a1 = _Color___get_alpha__impl__wcfyv1;
  _.$_$.b1 = Color__hashCode_impl_vjyivj;
  _.$_$.c1 = _Color___get_value__impl__1pls5m;
  _.$_$.d1 = _Matrix___init__impl__q3kp4w;
  _.$_$.e1 = Matrix__map_impl_7meu7m;
  _.$_$.f1 = Matrix__map_impl_7meu7m_0;
  _.$_$.g1 = Matrix__reset_impl_4l49i7;
  _.$_$.h1 = Matrix__rotateX_impl_3e5y7j;
  _.$_$.i1 = Matrix__rotateY_impl_2x4btc;
  _.$_$.j1 = Matrix__rotateZ_impl_2g2pf5;
  _.$_$.k1 = Matrix__timesAssign_impl_oas521;
  _.$_$.l1 = _Matrix___get_values__impl__fblr7b;
  _.$_$.m1 = Color__copy$default_impl_ectz3s;
  _.$_$.n1 = Matrix__scale$default_impl_snaws9;
  _.$_$.o1 = Matrix__translate$default_impl_10t8ql;
  _.$_$.p1 = Companion_getInstance_23;
  _.$_$.q1 = Fill_getInstance;
  _.$_$.r1 = Companion_getInstance_3;
  _.$_$.s1 = Companion_getInstance_4;
  _.$_$.t1 = Companion_getInstance_5;
  _.$_$.u1 = Companion_getInstance_9;
  _.$_$.v1 = Companion_getInstance_11;
  _.$_$.w1 = Companion_getInstance_12;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-ui-ui-graphics.js.map
