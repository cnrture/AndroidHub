(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-ui-ui-geometry.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-ui-ui-util.js', './skiko-kjs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-ui-ui-util.js'), require('./skiko-kjs.js'));
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
    if (typeof this['compose-multiplatform-core-compose-ui-ui-util'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-graphics'. Its dependency 'compose-multiplatform-core-compose-ui-ui-util' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-util' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-graphics'.");
    }
    if (typeof this['skiko-kjs'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-graphics'. Its dependency 'skiko-kjs' was not found. Please, check whether 'skiko-kjs' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-graphics'.");
    }
    root['compose-multiplatform-core-compose-ui-ui-graphics'] = factory(typeof this['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined' ? {} : this['compose-multiplatform-core-compose-ui-ui-graphics'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-compose-ui-ui-geometry'], this['compose-multiplatform-core-compose-ui-ui-unit'], this['compose-multiplatform-core-compose-ui-ui-util'], this['skiko-kjs']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui_util, kotlin_org_jetbrains_skiko_skiko) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var sign = Math.sign;
  var protoOf = kotlin_kotlin.$_$.bf;
  var objectMeta = kotlin_kotlin.$_$.af;
  var setMetadataFor = kotlin_kotlin.$_$.cf;
  var THROW_CCE = kotlin_kotlin.$_$.vj;
  var classMeta = kotlin_kotlin.$_$.pd;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.o;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.n1;
  var VOID = kotlin_kotlin.$_$.g;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var Offset_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.f5;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.p1;
  var Size__isEmpty_impl_o9ye97 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i1;
  var equals = kotlin_kotlin.$_$.td;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e1;
  var isFinite = kotlin_kotlin.$_$.sk;
  var _Offset___get_y__impl__8bzhra = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f1;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l1;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h1;
  var hashCode = kotlin_kotlin.$_$.de;
  var Offset__hashCode_impl_hbql41 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.z;
  var get_isFinite = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.n;
  var get_center = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m;
  var get_isUnspecified = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.q;
  var _Size___get_minDimension__impl__4iso0r = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j1;
  var getNumberHashCode = kotlin_kotlin.$_$.zd;
  var get_isSpecified = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.p;
  var Unit_getInstance = kotlin_kotlin.$_$.u5;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k3;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w;
  var IntSize_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a1;
  var interfaceMeta = kotlin_kotlin.$_$.fe;
  var Long = kotlin_kotlin.$_$.oj;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.g4;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.h4;
  var ulongToDouble = kotlin_kotlin.$_$.ol;
  var toString = kotlin_kotlin.$_$.gf;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.b2;
  var ULong__hashCode_impl_6hv2lb = kotlin_kotlin.$_$.i4;
  var numberToInt = kotlin_kotlin.$_$.xe;
  var toLong = kotlin_kotlin.$_$.ef;
  var lerp = kotlin_org_jetbrains_compose_ui_ui_util.$_$.b;
  var objectCreate = kotlin_kotlin.$_$.ze;
  var arrayCopy = kotlin_kotlin.$_$.b7;
  var contentEquals = kotlin_kotlin.$_$.z7;
  var fill = kotlin_kotlin.$_$.y8;
  var get_PI = kotlin_kotlin.$_$.hf;
  var toRawBits = kotlin_kotlin.$_$.il;
  var toShort = kotlin_kotlin.$_$.ff;
  var toByte = kotlin_kotlin.$_$.df;
  var numberToLong = kotlin_kotlin.$_$.ye;
  var floatFromBits = kotlin_kotlin.$_$.wd;
  var compareTo = kotlin_kotlin.$_$.qd;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.l1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.b3;
  var toString_0 = kotlin_kotlin.$_$.pi;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.j1;
  var Comparable = kotlin_kotlin.$_$.fj;
  var Rect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g;
  var trimIndent = kotlin_kotlin.$_$.vi;
  var get_boundingRect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l;
  var _CornerRadius___get_x__impl__1594cn = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.u;
  var _CornerRadius___get_y__impl__tyvleu = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.v;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.yk;
  var CornerRadius = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.a;
  var toRect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.t;
  var lerp_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.r;
  var charSequenceLength = kotlin_kotlin.$_$.nd;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var getStringHashCode = kotlin_kotlin.$_$.ce;
  var withSign = kotlin_kotlin.$_$.pf;
  var coerceIn = kotlin_kotlin.$_$.yf;
  var coerceIn_0 = kotlin_kotlin.$_$.xf;
  var contentHashCode = kotlin_kotlin.$_$.d8;
  var toBits = kotlin_kotlin.$_$.gl;
  var isNaN_0 = kotlin_kotlin.$_$.vk;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v1;
  var Size_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k;
  var Size__hashCode_impl_2h1qpd = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g1;
  var toPx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h;
  var toPx_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i;
  var roundToPx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c;
  var roundToPx_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d;
  var toDp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g;
  var toDp_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f;
  var toDp_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t;
  var toSp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l;
  var toSp_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m;
  var toSp_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u;
  var toRect_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j;
  var toSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k;
  var toDpSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e;
  var Density = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m1;
  var CornerRadius_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.b;
  var Density_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o;
  var Annotation = kotlin_kotlin.$_$.bj;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.v2;
  var longArrayOf = kotlin_kotlin.$_$.te;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.l4;
  var getBooleanHashCode = kotlin_kotlin.$_$.xd;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.l2;
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
  var Matrix33 = kotlin_org_jetbrains_skiko_skiko.$_$.w9;
  var Companion_getInstance_3 = kotlin_org_jetbrains_skiko_skiko.$_$.z8;
  var Companion_getInstance_4 = kotlin_org_jetbrains_skiko_skiko.$_$.y8;
  var Canvas_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.z7;
  var Companion_getInstance_5 = kotlin_org_jetbrains_skiko_skiko.$_$.u8;
  var until = kotlin_kotlin.$_$.eg;
  var step = kotlin_kotlin.$_$.dg;
  var ClipMode_INTERSECT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.d2;
  var ClipMode_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.c2;
  var Matrix44 = kotlin_org_jetbrains_skiko_skiko.$_$.x9;
  var FilterMode_NEAREST_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.m2;
  var MipmapMode_NONE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.u2;
  var FilterMipmap = kotlin_org_jetbrains_skiko_skiko.$_$.t9;
  var CubicResampler = kotlin_org_jetbrains_skiko_skiko.$_$.s9;
  var FilterMode_LINEAR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.l2;
  var MipmapMode_NEAREST_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.t2;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p2;
  var _IntOffset___get_y__impl__2avpwj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q2;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t2;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s2;
  var PaintMode_FILL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.v2;
  var PaintMode_STROKE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.w2;
  var PaintStrokeCap_BUTT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.x2;
  var PaintStrokeCap_SQUARE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.z2;
  var PaintStrokeCap_ROUND_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.y2;
  var PaintStrokeJoin_MITER_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.b3;
  var PaintStrokeJoin_BEVEL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.a3;
  var PaintStrokeJoin_ROUND_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.c3;
  var Paint_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.c8;
  var PathOp_XOR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.n3;
  var PathOp_REVERSE_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.l3;
  var PathOp_UNION_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.m3;
  var PathOp_INTERSECT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.k3;
  var PathOp_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.j3;
  var Path_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.d8;
  var PathFillMode_WINDING_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.i3;
  var PathFillMode_EVEN_ODD_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h3;
  var PathDirection_COUNTER_CLOCKWISE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.d3;
  var Companion_getInstance_6 = kotlin_org_jetbrains_skiko_skiko.$_$.v8;
  var Companion_getInstance_7 = kotlin_org_jetbrains_skiko_skiko.$_$.w8;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.w2;
  var Companion_getInstance_8 = kotlin_org_jetbrains_skiko_skiko.$_$.x8;
  var Style_TRANSLATE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g3;
  var Style_ROTATE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.f3;
  var Style_MORPH_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.e3;
  var Companion_getInstance_9 = kotlin_org_jetbrains_skiko_skiko.$_$.m8;
  var ColorMatrix = kotlin_org_jetbrains_skiko_skiko.$_$.r9;
  var ColorAlphaType_OPAQUE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.e2;
  var ColorAlphaType_PREMUL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.f2;
  var ColorInfo = kotlin_org_jetbrains_skiko_skiko.$_$.q9;
  var ImageInfo = kotlin_org_jetbrains_skiko_skiko.$_$.v9;
  var Bitmap_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.y7;
  var Companion_getInstance_10 = kotlin_org_jetbrains_skiko_skiko.$_$.o8;
  var ColorType_RGBA_F16_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.j2;
  var ColorType_RGB_565_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.k2;
  var ColorType_ALPHA_8_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h2;
  var Companion_getInstance_11 = kotlin_org_jetbrains_skiko_skiko.$_$.n8;
  var abs = kotlin_kotlin.$_$.if;
  var ColorType_BGRA_8888_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.i2;
  var ColorAlphaType_UNPREMUL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g2;
  var ensureNotNull = kotlin_kotlin.$_$.pk;
  var Companion_getInstance_12 = kotlin_org_jetbrains_skiko_skiko.$_$.a9;
  var toFloatArray = kotlin_kotlin.$_$.ob;
  var GradientStyle = kotlin_org_jetbrains_skiko_skiko.$_$.u9;
  var FilterTileMode_CLAMP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.n2;
  var FilterTileMode_DECAL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.o2;
  var FilterTileMode_MIRROR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.p2;
  var FilterTileMode_REPEAT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.q2;
  var VertexMode_TRIANGLES_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.o3;
  var VertexMode_TRIANGLE_FAN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.p3;
  var VertexMode_TRIANGLE_STRIP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.q3;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(BlendMode, 'BlendMode', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(Brush, 'Brush', classMeta);
  setMetadataFor(ShaderBrush, 'ShaderBrush', classMeta, Brush);
  setMetadataFor(SolidColor, 'SolidColor', classMeta, Brush);
  setMetadataFor(LinearGradient, 'LinearGradient', classMeta, ShaderBrush);
  setMetadataFor(RadialGradient, 'RadialGradient', classMeta, ShaderBrush);
  setMetadataFor(SweepGradient, 'SweepGradient', classMeta, ShaderBrush);
  function scale$default(sx, sy, $super) {
    sy = sy === VOID ? sx : sy;
    var tmp;
    if ($super === VOID) {
      this.scale_ba85bu_k$(sx, sy);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.scale_ba85bu_k$.call(this, sx, sy);
    }
    return tmp;
  }
  function skewRad(sxRad, syRad) {
    this.skew_kgli2i_k$(degrees(sxRad), degrees(syRad));
  }
  function clipRect(rect, clipOp) {
    return this.clipRect_3spswv_k$(rect.get_left_woprgw_k$(), rect.get_top_18ivbo_k$(), rect.get_right_ixz7xv_k$(), rect.get_bottom_bj8ras_k$(), clipOp);
  }
  function clipRect$default(rect, clipOp, $super) {
    clipOp = clipOp === VOID ? Companion_getInstance_15().get_Intersect_gpxc6n_k$() : clipOp;
    var tmp;
    if ($super === VOID) {
      this.clipRect_oj1pv4_k$(rect, clipOp);
      tmp = Unit_getInstance();
    } else {
      clipRect(rect, clipOp);
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function clipRect$default_0(left, top, right, bottom, clipOp, $super) {
    clipOp = clipOp === VOID ? Companion_getInstance_15().get_Intersect_gpxc6n_k$() : clipOp;
    var tmp;
    if ($super === VOID) {
      this.clipRect_3spswv_k$(left, top, right, bottom, clipOp);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.clipRect_3spswv_k$.call(this, left, top, right, bottom, new ClipOp(clipOp));
    }
    return tmp;
  }
  function clipPath$default(path, clipOp, $super) {
    clipOp = clipOp === VOID ? Companion_getInstance_15().get_Intersect_gpxc6n_k$() : clipOp;
    var tmp;
    if ($super === VOID) {
      this.clipPath_tlqunt_k$(path, clipOp);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.clipPath_tlqunt_k$.call(this, path, new ClipOp(clipOp));
    }
    return tmp;
  }
  function drawRect(rect, paint) {
    return this.drawRect_njf28a_k$(rect.get_left_woprgw_k$(), rect.get_top_18ivbo_k$(), rect.get_right_ixz7xv_k$(), rect.get_bottom_bj8ras_k$(), paint);
  }
  function drawOval(rect, paint) {
    return this.drawOval_laorgo_k$(rect.get_left_woprgw_k$(), rect.get_top_18ivbo_k$(), rect.get_right_ixz7xv_k$(), rect.get_bottom_bj8ras_k$(), paint);
  }
  function drawArc(rect, startAngle, sweepAngle, useCenter, paint) {
    return this.drawArc_ud0hdz_k$(rect.get_left_woprgw_k$(), rect.get_top_18ivbo_k$(), rect.get_right_ixz7xv_k$(), rect.get_bottom_bj8ras_k$(), startAngle, sweepAngle, useCenter, paint);
  }
  function drawArcRad(rect, startAngleRad, sweepAngleRad, useCenter, paint) {
    this.drawArc_j2ua6c_k$(rect, degrees(startAngleRad), degrees(sweepAngleRad), useCenter, paint);
  }
  function drawImageRect$default(image, srcOffset, srcSize, dstOffset, dstSize, paint, $super) {
    srcOffset = srcOffset === VOID ? Companion_getInstance_1().get_Zero_6hc3i8_k$() : srcOffset;
    srcSize = srcSize === VOID ? IntSize(image.get_width_j0q4yl_k$(), image.get_height_e7t92o_k$()) : srcSize;
    dstOffset = dstOffset === VOID ? Companion_getInstance_1().get_Zero_6hc3i8_k$() : dstOffset;
    dstSize = dstSize === VOID ? srcSize : dstSize;
    var tmp;
    if ($super === VOID) {
      this.drawImageRect_5h5ih1_k$(image, srcOffset, srcSize, dstOffset, dstSize, paint);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawImageRect_5h5ih1_k$.call(this, image, new IntOffset(srcOffset), new IntSize_0(srcSize), new IntOffset(dstOffset), new IntSize_0(dstSize), paint);
    }
    return tmp;
  }
  setMetadataFor(Canvas, 'Canvas', interfaceMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(ClipOp, 'ClipOp', classMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(Color, 'Color', classMeta);
  setMetadataFor(ColorProducer, 'ColorProducer', interfaceMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(ColorFilter, 'ColorFilter', classMeta);
  setMetadataFor(BlendModeColorFilter, 'BlendModeColorFilter', classMeta, ColorFilter);
  setMetadataFor(ColorMatrixColorFilter, 'ColorMatrixColorFilter', classMeta, ColorFilter);
  setMetadataFor(LightingColorFilter, 'LightingColorFilter', classMeta, ColorFilter);
  setMetadataFor(ColorMatrix_0, 'ColorMatrix', classMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(FilterQuality, 'FilterQuality', classMeta);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(Float16, 'Float16', classMeta, VOID, [Comparable]);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  function readPixels$default(buffer, startX, startY, width, height, bufferOffset, stride, $super) {
    startX = startX === VOID ? 0 : startX;
    startY = startY === VOID ? 0 : startY;
    width = width === VOID ? this.get_width_j0q4yl_k$() : width;
    height = height === VOID ? this.get_height_e7t92o_k$() : height;
    bufferOffset = bufferOffset === VOID ? 0 : bufferOffset;
    stride = stride === VOID ? width : stride;
    var tmp;
    if ($super === VOID) {
      this.readPixels_vm93oo_k$(buffer, startX, startY, width, height, bufferOffset, stride);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.readPixels_vm93oo_k$.call(this, buffer, startX, startY, width, height, bufferOffset, stride);
    }
    return tmp;
  }
  setMetadataFor(ImageBitmap, 'ImageBitmap', interfaceMeta);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(ImageBitmapConfig, 'ImageBitmapConfig', classMeta);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(Matrix, 'Matrix', classMeta);
  setMetadataFor(Outline, 'Outline', classMeta);
  setMetadataFor(Rectangle, 'Rectangle', classMeta, Outline);
  setMetadataFor(Rounded, 'Rounded', classMeta, Outline);
  setMetadataFor(Generic, 'Generic', classMeta, Outline);
  setMetadataFor(Paint, 'Paint', interfaceMeta);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(PaintingStyle, 'PaintingStyle', classMeta);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  function arcToRad(rect, startAngleRadians, sweepAngleRadians, forceMoveTo) {
    this.arcTo_glfct3_k$(rect, degrees(startAngleRadians), degrees(sweepAngleRadians), forceMoveTo);
  }
  function addPath$default(path, offset, $super) {
    offset = offset === VOID ? Companion_getInstance().get_Zero_k6n73t_k$() : offset;
    var tmp;
    if ($super === VOID) {
      this.addPath_mtr781_k$(path, offset);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.addPath_mtr781_k$.call(this, path, new Offset(offset));
    }
    return tmp;
  }
  function rewind() {
    this.reset_5u6xz3_k$();
  }
  function transform(matrix) {
  }
  setMetadataFor(Path, 'Path', interfaceMeta);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor(PathEffect, 'PathEffect', interfaceMeta);
  setMetadataFor(Companion_12, 'Companion', objectMeta);
  setMetadataFor(StampedPathEffectStyle, 'StampedPathEffectStyle', classMeta);
  setMetadataFor(Companion_13, 'Companion', objectMeta);
  setMetadataFor(PathFillType, 'PathFillType', classMeta);
  setMetadataFor(Companion_14, 'Companion', objectMeta);
  setMetadataFor(PathOperation, 'PathOperation', classMeta);
  setMetadataFor(Companion_15, 'Companion', objectMeta);
  setMetadataFor(PointMode, 'PointMode', classMeta);
  setMetadataFor(Shape, 'Shape', interfaceMeta);
  setMetadataFor(RectangleShape$1, VOID, classMeta, VOID, [Shape]);
  setMetadataFor(Companion_16, 'Companion', objectMeta);
  setMetadataFor(Shadow, 'Shadow', classMeta, VOID, VOID, Shadow);
  setMetadataFor(Companion_17, 'Companion', objectMeta);
  setMetadataFor(StrokeCap, 'StrokeCap', classMeta);
  setMetadataFor(Companion_18, 'Companion', objectMeta);
  setMetadataFor(StrokeJoin, 'StrokeJoin', classMeta);
  setMetadataFor(Companion_19, 'Companion', objectMeta);
  setMetadataFor(TileMode, 'TileMode', classMeta);
  setMetadataFor(Companion_20, 'Companion', objectMeta);
  setMetadataFor(VertexMode, 'VertexMode', classMeta);
  setMetadataFor(Vertices, 'Vertices', classMeta);
  setMetadataFor(Adaptation, 'Adaptation', classMeta);
  setMetadataFor(Adaptation$Companion$Bradford$1, VOID, classMeta, Adaptation);
  setMetadataFor(Adaptation$Companion$VonKries$1, VOID, classMeta, Adaptation);
  setMetadataFor(Adaptation$Companion$Ciecat02$1, VOID, classMeta, Adaptation);
  setMetadataFor(Companion_21, 'Companion', objectMeta);
  setMetadataFor(Companion_22, 'Companion', objectMeta);
  setMetadataFor(ColorModel, 'ColorModel', classMeta);
  setMetadataFor(Companion_23, 'Companion', objectMeta);
  setMetadataFor(ColorSpace, 'ColorSpace', classMeta);
  setMetadataFor(DoubleFunction, 'DoubleFunction', interfaceMeta);
  setMetadataFor(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', classMeta, VOID, [DoubleFunction]);
  setMetadataFor(ColorSpaces, 'ColorSpaces', objectMeta);
  setMetadataFor(Connector, 'Connector', classMeta);
  setMetadataFor(Connector$Companion$identity$1, VOID, classMeta, Connector);
  setMetadataFor(RgbConnector, 'RgbConnector', classMeta, Connector);
  setMetadataFor(Companion_24, 'Companion', objectMeta);
  setMetadataFor(Illuminant, 'Illuminant', objectMeta);
  setMetadataFor(Companion_25, 'Companion', objectMeta);
  setMetadataFor(Lab, 'Lab', classMeta, ColorSpace);
  setMetadataFor(Companion_26, 'Companion', objectMeta);
  setMetadataFor(Oklab, 'Oklab', classMeta, ColorSpace);
  setMetadataFor(Companion_27, 'Companion', objectMeta);
  setMetadataFor(RenderIntent, 'RenderIntent', classMeta);
  setMetadataFor(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', classMeta, VOID, [DoubleFunction]);
  setMetadataFor(Companion_28, 'Companion', objectMeta);
  setMetadataFor(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', classMeta, VOID, [DoubleFunction]);
  setMetadataFor(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', classMeta, VOID, [DoubleFunction]);
  setMetadataFor(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', classMeta, VOID, [DoubleFunction]);
  setMetadataFor(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', classMeta, VOID, [DoubleFunction]);
  setMetadataFor(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_5, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', classMeta, VOID, [DoubleFunction]);
  setMetadataFor(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_6, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', classMeta, VOID, [DoubleFunction]);
  setMetadataFor(Rgb, 'Rgb', classMeta, ColorSpace);
  setMetadataFor(TransferParameters, 'TransferParameters', classMeta);
  setMetadataFor(WhitePoint, 'WhitePoint', classMeta);
  setMetadataFor(Xyz, 'Xyz', classMeta, ColorSpace);
  setMetadataFor(DrawParams, 'DrawParams', classMeta, VOID, VOID, DrawParams);
  function set_canvas(_anonymous_parameter_0__qggqh8) {
  }
  function get_canvas() {
    return new EmptyCanvas();
  }
  function set_layoutDirection(_anonymous_parameter_0__qggqh8) {
  }
  function get_layoutDirection() {
    return LayoutDirection_Ltr_getInstance();
  }
  function set_density(_anonymous_parameter_0__qggqh8) {
  }
  function get_density() {
    return get_DefaultDensity();
  }
  setMetadataFor(DrawContext, 'DrawContext', interfaceMeta);
  setMetadataFor(CanvasDrawScope$drawContext$1, VOID, classMeta, VOID, [DrawContext]);
  function get_center_0() {
    return get_center(this.get_drawContext_ffwztu_k$().get_size_cxx1ym_k$());
  }
  function get_size() {
    return this.get_drawContext_ffwztu_k$().get_size_cxx1ym_k$();
  }
  function drawLine$default(brush, start, end, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode, $super) {
    strokeWidth = strokeWidth === VOID ? 0.0 : strokeWidth;
    cap = cap === VOID ? Companion_getInstance_44().DefaultCap_1 : cap;
    pathEffect = pathEffect === VOID ? null : pathEffect;
    alpha = alpha === VOID ? 1.0 : alpha;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_43().DefaultBlendMode_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.drawLine_b39977_k$(brush, start, end, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawLine_b39977_k$.call(this, brush, new Offset(start), new Offset(end), strokeWidth, new StrokeCap(cap), pathEffect, alpha, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawLine$default_0(color, start, end, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode, $super) {
    strokeWidth = strokeWidth === VOID ? 0.0 : strokeWidth;
    cap = cap === VOID ? Companion_getInstance_44().DefaultCap_1 : cap;
    pathEffect = pathEffect === VOID ? null : pathEffect;
    alpha = alpha === VOID ? 1.0 : alpha;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_43().DefaultBlendMode_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.drawLine_ki2hwq_k$(color, start, end, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawLine_ki2hwq_k$.call(this, new Color(color), new Offset(start), new Offset(end), strokeWidth, new StrokeCap(cap), pathEffect, alpha, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawRect$default(brush, topLeft, size, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance().get_Zero_k6n73t_k$() : topLeft;
    size = size === VOID ? offsetSize(this.get_size_cxx1ym_k$(), this, topLeft) : size;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_43().DefaultBlendMode_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.drawRect_t09b9w_k$(brush, topLeft, size, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawRect_t09b9w_k$.call(this, brush, new Offset(topLeft), new Size_0(size), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawRect$default_0(color, topLeft, size, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance().get_Zero_k6n73t_k$() : topLeft;
    size = size === VOID ? offsetSize(this.get_size_cxx1ym_k$(), this, topLeft) : size;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_43().DefaultBlendMode_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.drawRect_6sw8uj_k$(color, topLeft, size, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawRect_6sw8uj_k$.call(this, new Color(color), new Offset(topLeft), new Size_0(size), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawImage$default(image, topLeft, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance().get_Zero_k6n73t_k$() : topLeft;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_43().DefaultBlendMode_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.drawImage_7hd74h_k$(image, topLeft, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawImage_7hd74h_k$.call(this, image, new Offset(topLeft), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawImage$default_0(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, $super) {
    srcOffset = srcOffset === VOID ? Companion_getInstance_1().get_Zero_6hc3i8_k$() : srcOffset;
    srcSize = srcSize === VOID ? IntSize(image.get_width_j0q4yl_k$(), image.get_height_e7t92o_k$()) : srcSize;
    dstOffset = dstOffset === VOID ? Companion_getInstance_1().get_Zero_6hc3i8_k$() : dstOffset;
    dstSize = dstSize === VOID ? srcSize : dstSize;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_43().DefaultBlendMode_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.drawImage_17v7pj_k$(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawImage_17v7pj_k$.call(this, image, new IntOffset(srcOffset), new IntSize_0(srcSize), new IntOffset(dstOffset), new IntSize_0(dstSize), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawImage(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality) {
    this.drawImage$default_qql6c2_k$(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode);
  }
  function drawImage$default_1(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality, $super) {
    srcOffset = srcOffset === VOID ? Companion_getInstance_1().get_Zero_6hc3i8_k$() : srcOffset;
    srcSize = srcSize === VOID ? IntSize(image.get_width_j0q4yl_k$(), image.get_height_e7t92o_k$()) : srcSize;
    dstOffset = dstOffset === VOID ? Companion_getInstance_1().get_Zero_6hc3i8_k$() : dstOffset;
    dstSize = dstSize === VOID ? srcSize : dstSize;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_43().DefaultBlendMode_1 : blendMode;
    filterQuality = filterQuality === VOID ? Companion_getInstance_43().DefaultFilterQuality_1 : filterQuality;
    var tmp;
    if ($super === VOID) {
      this.drawImage_9mpi8u_k$(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality);
      tmp = Unit_getInstance();
    } else {
      drawImage(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality);
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function drawRoundRect$default(brush, topLeft, size, cornerRadius, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance().get_Zero_k6n73t_k$() : topLeft;
    size = size === VOID ? offsetSize(this.get_size_cxx1ym_k$(), this, topLeft) : size;
    cornerRadius = cornerRadius === VOID ? Companion_getInstance_2().get_Zero_r4zx17_k$() : cornerRadius;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_43().DefaultBlendMode_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.drawRoundRect_gbkwec_k$(brush, topLeft, size, cornerRadius, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawRoundRect_gbkwec_k$.call(this, brush, new Offset(topLeft), new Size_0(size), new CornerRadius_0(cornerRadius), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawRoundRect$default_0(color, topLeft, size, cornerRadius, style, alpha, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance().get_Zero_k6n73t_k$() : topLeft;
    size = size === VOID ? offsetSize(this.get_size_cxx1ym_k$(), this, topLeft) : size;
    cornerRadius = cornerRadius === VOID ? Companion_getInstance_2().get_Zero_r4zx17_k$() : cornerRadius;
    style = style === VOID ? Fill_getInstance() : style;
    alpha = alpha === VOID ? 1.0 : alpha;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_43().DefaultBlendMode_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.drawRoundRect_bjcn4f_k$(color, topLeft, size, cornerRadius, style, alpha, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawRoundRect_bjcn4f_k$.call(this, new Color(color), new Offset(topLeft), new Size_0(size), new CornerRadius_0(cornerRadius), style, alpha, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawCircle$default(brush, radius, center, alpha, style, colorFilter, blendMode, $super) {
    radius = radius === VOID ? _Size___get_minDimension__impl__4iso0r(this.get_size_cxx1ym_k$()) / 2.0 : radius;
    center = center === VOID ? this.get_center_dcexec_k$() : center;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_43().DefaultBlendMode_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.drawCircle_mukkgw_k$(brush, radius, center, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawCircle_mukkgw_k$.call(this, brush, radius, new Offset(center), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawCircle$default_0(color, radius, center, alpha, style, colorFilter, blendMode, $super) {
    radius = radius === VOID ? _Size___get_minDimension__impl__4iso0r(this.get_size_cxx1ym_k$()) / 2.0 : radius;
    center = center === VOID ? this.get_center_dcexec_k$() : center;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_43().DefaultBlendMode_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.drawCircle_45hmy1_k$(color, radius, center, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawCircle_45hmy1_k$.call(this, new Color(color), radius, new Offset(center), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawOval$default(brush, topLeft, size, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance().get_Zero_k6n73t_k$() : topLeft;
    size = size === VOID ? offsetSize(this.get_size_cxx1ym_k$(), this, topLeft) : size;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_43().DefaultBlendMode_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.drawOval_euvgam_k$(brush, topLeft, size, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawOval_euvgam_k$.call(this, brush, new Offset(topLeft), new Size_0(size), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawOval$default_0(color, topLeft, size, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance().get_Zero_k6n73t_k$() : topLeft;
    size = size === VOID ? offsetSize(this.get_size_cxx1ym_k$(), this, topLeft) : size;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_43().DefaultBlendMode_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.drawOval_xyvj95_k$(color, topLeft, size, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawOval_xyvj95_k$.call(this, new Color(color), new Offset(topLeft), new Size_0(size), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawArc$default(brush, startAngle, sweepAngle, useCenter, topLeft, size, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance().get_Zero_k6n73t_k$() : topLeft;
    size = size === VOID ? offsetSize(this.get_size_cxx1ym_k$(), this, topLeft) : size;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_43().DefaultBlendMode_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.drawArc_7lpe6v_k$(brush, startAngle, sweepAngle, useCenter, topLeft, size, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawArc_7lpe6v_k$.call(this, brush, startAngle, sweepAngle, useCenter, new Offset(topLeft), new Size_0(size), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawArc$default_0(color, startAngle, sweepAngle, useCenter, topLeft, size, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance().get_Zero_k6n73t_k$() : topLeft;
    size = size === VOID ? offsetSize(this.get_size_cxx1ym_k$(), this, topLeft) : size;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_43().DefaultBlendMode_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.drawArc_oz1pds_k$(color, startAngle, sweepAngle, useCenter, topLeft, size, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawArc_oz1pds_k$.call(this, new Color(color), startAngle, sweepAngle, useCenter, new Offset(topLeft), new Size_0(size), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawPath$default(path, color, alpha, style, colorFilter, blendMode, $super) {
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_43().DefaultBlendMode_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.drawPath_mbkbcp_k$(path, color, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawPath_mbkbcp_k$.call(this, path, new Color(color), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawPath$default_0(path, brush, alpha, style, colorFilter, blendMode, $super) {
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_43().DefaultBlendMode_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.drawPath_2qit1e_k$(path, brush, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawPath_2qit1e_k$.call(this, path, brush, alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawPoints$default(points, pointMode, color, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode, $super) {
    strokeWidth = strokeWidth === VOID ? 0.0 : strokeWidth;
    cap = cap === VOID ? Companion_getInstance_31().get_Butt_jb7qjw_k$() : cap;
    pathEffect = pathEffect === VOID ? null : pathEffect;
    alpha = alpha === VOID ? 1.0 : alpha;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_43().DefaultBlendMode_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.drawPoints_l9lrzm_k$(points, pointMode, color, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawPoints_l9lrzm_k$.call(this, points, new PointMode(pointMode), new Color(color), strokeWidth, new StrokeCap(cap), pathEffect, alpha, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawPoints$default_0(points, pointMode, brush, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode, $super) {
    strokeWidth = strokeWidth === VOID ? 0.0 : strokeWidth;
    cap = cap === VOID ? Companion_getInstance_31().get_Butt_jb7qjw_k$() : cap;
    pathEffect = pathEffect === VOID ? null : pathEffect;
    alpha = alpha === VOID ? 1.0 : alpha;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_43().DefaultBlendMode_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.drawPoints_7jhunr_k$(points, pointMode, brush, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawPoints_7jhunr_k$.call(this, points, new PointMode(pointMode), brush, strokeWidth, new StrokeCap(cap), pathEffect, alpha, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  setMetadataFor(DrawScope, 'DrawScope', interfaceMeta, VOID, [Density_0]);
  setMetadataFor(CanvasDrawScope, 'CanvasDrawScope', classMeta, VOID, [DrawScope], CanvasDrawScope);
  function get_center_1() {
    return Offset_0(_Size___get_width__impl__58y75t(this.get_size_cxx1ym_k$()) / 2, _Size___get_height__impl__a04p02(this.get_size_cxx1ym_k$()) / 2);
  }
  function clipRect$default_1(left, top, right, bottom, clipOp, $super) {
    left = left === VOID ? 0.0 : left;
    top = top === VOID ? 0.0 : top;
    right = right === VOID ? _Size___get_width__impl__58y75t(this.get_size_cxx1ym_k$()) : right;
    bottom = bottom === VOID ? _Size___get_height__impl__a04p02(this.get_size_cxx1ym_k$()) : bottom;
    clipOp = clipOp === VOID ? Companion_getInstance_15().get_Intersect_gpxc6n_k$() : clipOp;
    var tmp;
    if ($super === VOID) {
      this.clipRect_3spswv_k$(left, top, right, bottom, clipOp);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.clipRect_3spswv_k$.call(this, left, top, right, bottom, new ClipOp(clipOp));
    }
    return tmp;
  }
  function clipPath$default_0(path, clipOp, $super) {
    clipOp = clipOp === VOID ? Companion_getInstance_15().get_Intersect_gpxc6n_k$() : clipOp;
    var tmp;
    if ($super === VOID) {
      this.clipPath_tlqunt_k$(path, clipOp);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.clipPath_tlqunt_k$.call(this, path, new ClipOp(clipOp));
    }
    return tmp;
  }
  function translate$default(left, top, $super) {
    left = left === VOID ? 0.0 : left;
    top = top === VOID ? 0.0 : top;
    var tmp;
    if ($super === VOID) {
      this.translate_7gghdu_k$(left, top);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.translate_7gghdu_k$.call(this, left, top);
    }
    return tmp;
  }
  function rotate$default(degrees, pivot, $super) {
    pivot = pivot === VOID ? this.get_center_dcexec_k$() : pivot;
    var tmp;
    if ($super === VOID) {
      this.rotate_y7zh1f_k$(degrees, pivot);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.rotate_y7zh1f_k$.call(this, degrees, new Offset(pivot));
    }
    return tmp;
  }
  function scale$default_0(scaleX, scaleY, pivot, $super) {
    pivot = pivot === VOID ? this.get_center_dcexec_k$() : pivot;
    var tmp;
    if ($super === VOID) {
      this.scale_rbtyk0_k$(scaleX, scaleY, pivot);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.scale_rbtyk0_k$.call(this, scaleX, scaleY, new Offset(pivot));
    }
    return tmp;
  }
  setMetadataFor(DrawTransform, 'DrawTransform', interfaceMeta);
  setMetadataFor(asDrawTransform$1, VOID, classMeta, VOID, [DrawTransform]);
  setMetadataFor(ContentDrawScope, 'ContentDrawScope', interfaceMeta, VOID, [DrawScope]);
  setMetadataFor(DrawStyle, 'DrawStyle', classMeta);
  setMetadataFor(Companion_29, 'Companion', objectMeta);
  setMetadataFor(Fill, 'Fill', objectMeta, DrawStyle);
  setMetadataFor(Companion_30, 'Companion', objectMeta);
  setMetadataFor(Stroke, 'Stroke', classMeta, DrawStyle, VOID, Stroke);
  setMetadataFor(DrawScopeMarker, 'DrawScopeMarker', classMeta, VOID, [Annotation]);
  setMetadataFor(EmptyCanvas, 'EmptyCanvas', classMeta, VOID, [Canvas], EmptyCanvas);
  setMetadataFor(PathNode, 'PathNode', classMeta);
  setMetadataFor(Close, 'Close', objectMeta, PathNode);
  setMetadataFor(RelativeMoveTo, 'RelativeMoveTo', classMeta, PathNode);
  setMetadataFor(MoveTo, 'MoveTo', classMeta, PathNode);
  setMetadataFor(RelativeLineTo, 'RelativeLineTo', classMeta, PathNode);
  setMetadataFor(LineTo, 'LineTo', classMeta, PathNode);
  setMetadataFor(RelativeHorizontalTo, 'RelativeHorizontalTo', classMeta, PathNode);
  setMetadataFor(HorizontalTo, 'HorizontalTo', classMeta, PathNode);
  setMetadataFor(RelativeVerticalTo, 'RelativeVerticalTo', classMeta, PathNode);
  setMetadataFor(VerticalTo, 'VerticalTo', classMeta, PathNode);
  setMetadataFor(RelativeCurveTo, 'RelativeCurveTo', classMeta, PathNode);
  setMetadataFor(CurveTo, 'CurveTo', classMeta, PathNode);
  setMetadataFor(RelativeReflectiveCurveTo, 'RelativeReflectiveCurveTo', classMeta, PathNode);
  setMetadataFor(ReflectiveCurveTo, 'ReflectiveCurveTo', classMeta, PathNode);
  setMetadataFor(RelativeQuadTo, 'RelativeQuadTo', classMeta, PathNode);
  setMetadataFor(QuadTo, 'QuadTo', classMeta, PathNode);
  setMetadataFor(RelativeReflectiveQuadTo, 'RelativeReflectiveQuadTo', classMeta, PathNode);
  setMetadataFor(ReflectiveQuadTo, 'ReflectiveQuadTo', classMeta, PathNode);
  setMetadataFor(RelativeArcTo, 'RelativeArcTo', classMeta, PathNode);
  setMetadataFor(ArcTo, 'ArcTo', classMeta, PathNode);
  setMetadataFor(NoOp, 'NoOp', classMeta, VOID, [Annotation]);
  setMetadataFor(SkiaBackedCanvas, 'SkiaBackedCanvas', classMeta, VOID, [Canvas]);
  setMetadataFor(SkiaBackedPaint, 'SkiaBackedPaint', classMeta, VOID, [Paint], SkiaBackedPaint);
  setMetadataFor(SkiaBackedPath, 'SkiaBackedPath', classMeta, VOID, [Path], SkiaBackedPath);
  setMetadataFor(SkiaBackedPathEffect, 'SkiaBackedPathEffect', classMeta, VOID, [PathEffect]);
  setMetadataFor(RenderEffect, 'RenderEffect', classMeta);
  setMetadataFor(SkiaBackedImageBitmap, 'SkiaBackedImageBitmap', classMeta, VOID, [ImageBitmap]);
  //endregion
  function _BlendMode___init__impl__q6jalh(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function Companion() {
    Companion_instance = this;
    this.Clear_1 = _BlendMode___init__impl__q6jalh(0);
    this.Src_1 = _BlendMode___init__impl__q6jalh(1);
    this.Dst_1 = _BlendMode___init__impl__q6jalh(2);
    this.SrcOver_1 = _BlendMode___init__impl__q6jalh(3);
    this.DstOver_1 = _BlendMode___init__impl__q6jalh(4);
    this.SrcIn_1 = _BlendMode___init__impl__q6jalh(5);
    this.DstIn_1 = _BlendMode___init__impl__q6jalh(6);
    this.SrcOut_1 = _BlendMode___init__impl__q6jalh(7);
    this.DstOut_1 = _BlendMode___init__impl__q6jalh(8);
    this.SrcAtop_1 = _BlendMode___init__impl__q6jalh(9);
    this.DstAtop_1 = _BlendMode___init__impl__q6jalh(10);
    this.Xor_1 = _BlendMode___init__impl__q6jalh(11);
    this.Plus_1 = _BlendMode___init__impl__q6jalh(12);
    this.Modulate_1 = _BlendMode___init__impl__q6jalh(13);
    this.Screen_1 = _BlendMode___init__impl__q6jalh(14);
    this.Overlay_1 = _BlendMode___init__impl__q6jalh(15);
    this.Darken_1 = _BlendMode___init__impl__q6jalh(16);
    this.Lighten_1 = _BlendMode___init__impl__q6jalh(17);
    this.ColorDodge_1 = _BlendMode___init__impl__q6jalh(18);
    this.ColorBurn_1 = _BlendMode___init__impl__q6jalh(19);
    this.Hardlight_1 = _BlendMode___init__impl__q6jalh(20);
    this.Softlight_1 = _BlendMode___init__impl__q6jalh(21);
    this.Difference_1 = _BlendMode___init__impl__q6jalh(22);
    this.Exclusion_1 = _BlendMode___init__impl__q6jalh(23);
    this.Multiply_1 = _BlendMode___init__impl__q6jalh(24);
    this.Hue_1 = _BlendMode___init__impl__q6jalh(25);
    this.Saturation_1 = _BlendMode___init__impl__q6jalh(26);
    this.Color_1 = _BlendMode___init__impl__q6jalh(27);
    this.Luminosity_1 = _BlendMode___init__impl__q6jalh(28);
  }
  protoOf(Companion).get_Clear_ts5s9y_k$ = function () {
    return this.Clear_1;
  };
  protoOf(Companion).get_Src_3wpzdd_k$ = function () {
    return this.Src_1;
  };
  protoOf(Companion).get_Dst_qkkuz6_k$ = function () {
    return this.Dst_1;
  };
  protoOf(Companion).get_SrcOver_anr685_k$ = function () {
    return this.SrcOver_1;
  };
  protoOf(Companion).get_DstOver_xoacee_k$ = function () {
    return this.DstOver_1;
  };
  protoOf(Companion).get_SrcIn_enr0mu_k$ = function () {
    return this.SrcIn_1;
  };
  protoOf(Companion).get_DstIn_cyk4p5_k$ = function () {
    return this.DstIn_1;
  };
  protoOf(Companion).get_SrcOut_d2bb4n_k$ = function () {
    return this.SrcOut_1;
  };
  protoOf(Companion).get_DstOut_gwk8qg_k$ = function () {
    return this.DstOut_1;
  };
  protoOf(Companion).get_SrcAtop_z2kmd7_k$ = function () {
    return this.SrcAtop_1;
  };
  protoOf(Companion).get_DstAtop_c21g6y_k$ = function () {
    return this.DstAtop_1;
  };
  protoOf(Companion).get_Xor_cjn5co_k$ = function () {
    return this.Xor_1;
  };
  protoOf(Companion).get_Plus_m5bugp_k$ = function () {
    return this.Plus_1;
  };
  protoOf(Companion).get_Modulate_d2dqmw_k$ = function () {
    return this.Modulate_1;
  };
  protoOf(Companion).get_Screen_rhfdpx_k$ = function () {
    return this.Screen_1;
  };
  protoOf(Companion).get_Overlay_hnqr0j_k$ = function () {
    return this.Overlay_1;
  };
  protoOf(Companion).get_Darken_lz7qci_k$ = function () {
    return this.Darken_1;
  };
  protoOf(Companion).get_Lighten_9vbchg_k$ = function () {
    return this.Lighten_1;
  };
  protoOf(Companion).get_ColorDodge_xtmzgz_k$ = function () {
    return this.ColorDodge_1;
  };
  protoOf(Companion).get_ColorBurn_f5bk1t_k$ = function () {
    return this.ColorBurn_1;
  };
  protoOf(Companion).get_Hardlight_1wjq08_k$ = function () {
    return this.Hardlight_1;
  };
  protoOf(Companion).get_Softlight_npagmf_k$ = function () {
    return this.Softlight_1;
  };
  protoOf(Companion).get_Difference_uke8xo_k$ = function () {
    return this.Difference_1;
  };
  protoOf(Companion).get_Exclusion_80cb7p_k$ = function () {
    return this.Exclusion_1;
  };
  protoOf(Companion).get_Multiply_8zrhrx_k$ = function () {
    return this.Multiply_1;
  };
  protoOf(Companion).get_Hue_m25sez_k$ = function () {
    return this.Hue_1;
  };
  protoOf(Companion).get_Saturation_gkrtkh_k$ = function () {
    return this.Saturation_1;
  };
  protoOf(Companion).get_Color_mzcv4g_k$ = function () {
    return this.Color_1;
  };
  protoOf(Companion).get_Luminosity_tkhgzk_k$ = function () {
    return this.Luminosity_1;
  };
  var Companion_instance;
  function Companion_getInstance_13() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function BlendMode__toString_impl_uuibkd($this) {
    return $this === Companion_getInstance_13().Clear_1 ? 'Clear' : $this === Companion_getInstance_13().Src_1 ? 'Src' : $this === Companion_getInstance_13().Dst_1 ? 'Dst' : $this === Companion_getInstance_13().SrcOver_1 ? 'SrcOver' : $this === Companion_getInstance_13().DstOver_1 ? 'DstOver' : $this === Companion_getInstance_13().SrcIn_1 ? 'SrcIn' : $this === Companion_getInstance_13().DstIn_1 ? 'DstIn' : $this === Companion_getInstance_13().SrcOut_1 ? 'SrcOut' : $this === Companion_getInstance_13().DstOut_1 ? 'DstOut' : $this === Companion_getInstance_13().SrcAtop_1 ? 'SrcAtop' : $this === Companion_getInstance_13().DstAtop_1 ? 'DstAtop' : $this === Companion_getInstance_13().Xor_1 ? 'Xor' : $this === Companion_getInstance_13().Plus_1 ? 'Plus' : $this === Companion_getInstance_13().Modulate_1 ? 'Modulate' : $this === Companion_getInstance_13().Screen_1 ? 'Screen' : $this === Companion_getInstance_13().Overlay_1 ? 'Overlay' : $this === Companion_getInstance_13().Darken_1 ? 'Darken' : $this === Companion_getInstance_13().Lighten_1 ? 'Lighten' : $this === Companion_getInstance_13().ColorDodge_1 ? 'ColorDodge' : $this === Companion_getInstance_13().ColorBurn_1 ? 'ColorBurn' : $this === Companion_getInstance_13().Hardlight_1 ? 'HardLight' : $this === Companion_getInstance_13().Softlight_1 ? 'Softlight' : $this === Companion_getInstance_13().Difference_1 ? 'Difference' : $this === Companion_getInstance_13().Exclusion_1 ? 'Exclusion' : $this === Companion_getInstance_13().Multiply_1 ? 'Multiply' : $this === Companion_getInstance_13().Hue_1 ? 'Hue' : $this === Companion_getInstance_13().Saturation_1 ? 'Saturation' : $this === Companion_getInstance_13().Color_1 ? 'Color' : $this === Companion_getInstance_13().Luminosity_1 ? 'Luminosity' : 'Unknown';
  }
  function BlendMode__hashCode_impl_93ceri($this) {
    return $this;
  }
  function BlendMode__equals_impl_1tm25i($this, other) {
    if (!(other instanceof BlendMode))
      return false;
    if (!($this === (other instanceof BlendMode ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function BlendMode(value) {
    Companion_getInstance_13();
    this.value_1 = value;
  }
  protoOf(BlendMode).toString = function () {
    return BlendMode__toString_impl_uuibkd(this.value_1);
  };
  protoOf(BlendMode).hashCode = function () {
    return BlendMode__hashCode_impl_93ceri(this.value_1);
  };
  protoOf(BlendMode).equals = function (other) {
    return BlendMode__equals_impl_1tm25i(this.value_1, other);
  };
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).linearGradient_gq8lze_k$ = function (colorStops, start, end, tileMode) {
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var size = colorStops.length;
    var list = ArrayList_init_$Create$(size);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        // Inline function 'androidx.compose.ui.graphics.Companion.linearGradient.<anonymous>' call
        var tmp$ret$0 = colorStops[index].get_second_jf7fjx_k$().value_1;
        list.add_utx5q5_k$(new Color(tmp$ret$0));
      }
       while (inductionVariable < size);
    var tmp = list;
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var size_0 = colorStops.length;
    var list_0 = ArrayList_init_$Create$(size_0);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < size_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        // Inline function 'androidx.compose.ui.graphics.Companion.linearGradient.<anonymous>' call
        var tmp$ret$3 = colorStops[index_0].get_first_irdx8n_k$();
        list_0.add_utx5q5_k$(tmp$ret$3);
      }
       while (inductionVariable_0 < size_0);
    return new LinearGradient(tmp, list_0, start, end, tileMode);
  };
  protoOf(Companion_0).linearGradient$default_ae8y8j_k$ = function (colorStops, start, end, tileMode, $super) {
    start = start === VOID ? Companion_getInstance().get_Zero_k6n73t_k$() : start;
    end = end === VOID ? Companion_getInstance().get_Infinite_g7y28d_k$() : end;
    tileMode = tileMode === VOID ? Companion_getInstance_33().get_Clamp_ddetsd_k$() : tileMode;
    return $super === VOID ? this.linearGradient_gq8lze_k$(colorStops, start, end, tileMode) : $super.linearGradient_gq8lze_k$.call(this, colorStops, new Offset(start), new Offset(end), new TileMode(tileMode));
  };
  protoOf(Companion_0).linearGradient_qfnkcn_k$ = function (colors, start, end, tileMode) {
    return new LinearGradient(colors, null, start, end, tileMode);
  };
  protoOf(Companion_0).linearGradient$default_6dexgc_k$ = function (colors, start, end, tileMode, $super) {
    start = start === VOID ? Companion_getInstance().get_Zero_k6n73t_k$() : start;
    end = end === VOID ? Companion_getInstance().get_Infinite_g7y28d_k$() : end;
    tileMode = tileMode === VOID ? Companion_getInstance_33().get_Clamp_ddetsd_k$() : tileMode;
    return $super === VOID ? this.linearGradient_qfnkcn_k$(colors, start, end, tileMode) : $super.linearGradient_qfnkcn_k$.call(this, colors, new Offset(start), new Offset(end), new TileMode(tileMode));
  };
  protoOf(Companion_0).horizontalGradient_ror43s_k$ = function (colors, startX, endX, tileMode) {
    return this.linearGradient_qfnkcn_k$(colors, Offset_0(startX, 0.0), Offset_0(endX, 0.0), tileMode);
  };
  protoOf(Companion_0).horizontalGradient$default_bgcgs7_k$ = function (colors, startX, endX, tileMode, $super) {
    startX = startX === VOID ? 0.0 : startX;
    endX = endX === VOID ? FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$() : endX;
    tileMode = tileMode === VOID ? Companion_getInstance_33().get_Clamp_ddetsd_k$() : tileMode;
    return $super === VOID ? this.horizontalGradient_ror43s_k$(colors, startX, endX, tileMode) : $super.horizontalGradient_ror43s_k$.call(this, colors, startX, endX, new TileMode(tileMode));
  };
  protoOf(Companion_0).horizontalGradient_1uxp91_k$ = function (colorStops, startX, endX, tileMode) {
    return this.linearGradient_gq8lze_k$(colorStops.slice(), Offset_0(startX, 0.0), Offset_0(endX, 0.0), tileMode);
  };
  protoOf(Companion_0).horizontalGradient$default_ptsma8_k$ = function (colorStops, startX, endX, tileMode, $super) {
    startX = startX === VOID ? 0.0 : startX;
    endX = endX === VOID ? FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$() : endX;
    tileMode = tileMode === VOID ? Companion_getInstance_33().get_Clamp_ddetsd_k$() : tileMode;
    return $super === VOID ? this.horizontalGradient_1uxp91_k$(colorStops, startX, endX, tileMode) : $super.horizontalGradient_1uxp91_k$.call(this, colorStops, startX, endX, new TileMode(tileMode));
  };
  protoOf(Companion_0).verticalGradient_hgetkm_k$ = function (colors, startY, endY, tileMode) {
    return this.linearGradient_qfnkcn_k$(colors, Offset_0(0.0, startY), Offset_0(0.0, endY), tileMode);
  };
  protoOf(Companion_0).verticalGradient$default_wik409_k$ = function (colors, startY, endY, tileMode, $super) {
    startY = startY === VOID ? 0.0 : startY;
    endY = endY === VOID ? FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$() : endY;
    tileMode = tileMode === VOID ? Companion_getInstance_33().get_Clamp_ddetsd_k$() : tileMode;
    return $super === VOID ? this.verticalGradient_hgetkm_k$(colors, startY, endY, tileMode) : $super.verticalGradient_hgetkm_k$.call(this, colors, startY, endY, new TileMode(tileMode));
  };
  protoOf(Companion_0).verticalGradient_kcmod5_k$ = function (colorStops, startY, endY, tileMode) {
    return this.linearGradient_gq8lze_k$(colorStops.slice(), Offset_0(0.0, startY), Offset_0(0.0, endY), tileMode);
  };
  protoOf(Companion_0).verticalGradient$default_hhpt8i_k$ = function (colorStops, startY, endY, tileMode, $super) {
    startY = startY === VOID ? 0.0 : startY;
    endY = endY === VOID ? FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$() : endY;
    tileMode = tileMode === VOID ? Companion_getInstance_33().get_Clamp_ddetsd_k$() : tileMode;
    return $super === VOID ? this.verticalGradient_kcmod5_k$(colorStops, startY, endY, tileMode) : $super.verticalGradient_kcmod5_k$.call(this, colorStops, startY, endY, new TileMode(tileMode));
  };
  protoOf(Companion_0).radialGradient_q9mw3i_k$ = function (colorStops, center, radius, tileMode) {
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var size = colorStops.length;
    var list = ArrayList_init_$Create$(size);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        // Inline function 'androidx.compose.ui.graphics.Companion.radialGradient.<anonymous>' call
        var tmp$ret$0 = colorStops[index].get_second_jf7fjx_k$().value_1;
        list.add_utx5q5_k$(new Color(tmp$ret$0));
      }
       while (inductionVariable < size);
    var tmp = list;
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var size_0 = colorStops.length;
    var list_0 = ArrayList_init_$Create$(size_0);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < size_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        // Inline function 'androidx.compose.ui.graphics.Companion.radialGradient.<anonymous>' call
        var tmp$ret$3 = colorStops[index_0].get_first_irdx8n_k$();
        list_0.add_utx5q5_k$(tmp$ret$3);
      }
       while (inductionVariable_0 < size_0);
    return new RadialGradient(tmp, list_0, center, radius, tileMode);
  };
  protoOf(Companion_0).radialGradient$default_wwbz6v_k$ = function (colorStops, center, radius, tileMode, $super) {
    center = center === VOID ? Companion_getInstance().get_Unspecified_gis8po_k$() : center;
    radius = radius === VOID ? FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$() : radius;
    tileMode = tileMode === VOID ? Companion_getInstance_33().get_Clamp_ddetsd_k$() : tileMode;
    return $super === VOID ? this.radialGradient_q9mw3i_k$(colorStops, center, radius, tileMode) : $super.radialGradient_q9mw3i_k$.call(this, colorStops, new Offset(center), radius, new TileMode(tileMode));
  };
  protoOf(Companion_0).radialGradient_clg4pn_k$ = function (colors, center, radius, tileMode) {
    return new RadialGradient(colors, null, center, radius, tileMode);
  };
  protoOf(Companion_0).radialGradient$default_upgqlg_k$ = function (colors, center, radius, tileMode, $super) {
    center = center === VOID ? Companion_getInstance().get_Unspecified_gis8po_k$() : center;
    radius = radius === VOID ? FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$() : radius;
    tileMode = tileMode === VOID ? Companion_getInstance_33().get_Clamp_ddetsd_k$() : tileMode;
    return $super === VOID ? this.radialGradient_clg4pn_k$(colors, center, radius, tileMode) : $super.radialGradient_clg4pn_k$.call(this, colors, new Offset(center), radius, new TileMode(tileMode));
  };
  protoOf(Companion_0).sweepGradient_pf4hbc_k$ = function (colorStops, center) {
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var size = colorStops.length;
    var list = ArrayList_init_$Create$(size);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        // Inline function 'androidx.compose.ui.graphics.Companion.sweepGradient.<anonymous>' call
        var tmp$ret$0 = colorStops[index].get_second_jf7fjx_k$().value_1;
        list.add_utx5q5_k$(new Color(tmp$ret$0));
      }
       while (inductionVariable < size);
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var size_0 = colorStops.length;
    var list_0 = ArrayList_init_$Create$(size_0);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < size_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        // Inline function 'androidx.compose.ui.graphics.Companion.sweepGradient.<anonymous>' call
        var tmp$ret$3 = colorStops[index_0].get_first_irdx8n_k$();
        list_0.add_utx5q5_k$(tmp$ret$3);
      }
       while (inductionVariable_0 < size_0);
    return new SweepGradient(center, list, list_0);
  };
  protoOf(Companion_0).sweepGradient$default_k6onmt_k$ = function (colorStops, center, $super) {
    center = center === VOID ? Companion_getInstance().get_Unspecified_gis8po_k$() : center;
    return $super === VOID ? this.sweepGradient_pf4hbc_k$(colorStops, center) : $super.sweepGradient_pf4hbc_k$.call(this, colorStops, new Offset(center));
  };
  protoOf(Companion_0).sweepGradient_xb7pvp_k$ = function (colors, center) {
    return new SweepGradient(center, colors, null);
  };
  protoOf(Companion_0).sweepGradient$default_odlf72_k$ = function (colors, center, $super) {
    center = center === VOID ? Companion_getInstance().get_Unspecified_gis8po_k$() : center;
    return $super === VOID ? this.sweepGradient_xb7pvp_k$(colors, center) : $super.sweepGradient_xb7pvp_k$.call(this, colors, new Offset(center));
  };
  var Companion_instance_0;
  function Companion_getInstance_14() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Brush() {
    Companion_getInstance_14();
    this.intrinsicSize_1 = Companion_getInstance_0().get_Unspecified_3ttj0y_k$();
  }
  protoOf(Brush).get_intrinsicSize_culx5t_k$ = function () {
    return this.intrinsicSize_1;
  };
  function _set_internalShader__t1be7f($this, _set____db54di) {
    $this.internalShader_1 = _set____db54di;
  }
  function _get_internalShader__3i7y5z($this) {
    return $this.internalShader_1;
  }
  function _set_createdSize__u0arks($this, _set____db54di) {
    $this.createdSize_1 = _set____db54di;
  }
  function _get_createdSize__aqf42g($this) {
    return $this.createdSize_1;
  }
  function ShaderBrush() {
    Brush.call(this);
    this.internalShader_1 = null;
    this.createdSize_1 = Companion_getInstance_0().get_Unspecified_3ttj0y_k$();
  }
  protoOf(ShaderBrush).applyTo_5ix92b_k$ = function (size, p, alpha) {
    var shader = this.internalShader_1;
    if (shader == null ? true : !equals(this.createdSize_1, size)) {
      if (Size__isEmpty_impl_o9ye97(size)) {
        shader = null;
        this.internalShader_1 = null;
        this.createdSize_1 = Companion_getInstance_0().get_Unspecified_3ttj0y_k$();
      } else {
        // Inline function 'kotlin.also' call
        var this_0 = this.createShader_k0897f_k$(size);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.graphics.ShaderBrush.applyTo.<anonymous>' call
        this.internalShader_1 = this_0;
        shader = this_0;
        this.createdSize_1 = size;
      }
    }
    if (!equals(p.get_color_lnp1vl_k$(), Companion_getInstance_16().get_Black_t4k9fh_k$())) {
      p.set_color_m2amxp_k$(Companion_getInstance_16().get_Black_t4k9fh_k$());
    }
    if (!equals(p.get_shader_jgtazy_k$(), shader)) {
      p.set_shader_tgaw5e_k$(shader);
    }
    if (!(p.get_alpha_iooth1_k$() === alpha)) {
      p.set_alpha_tvzcqh_k$(alpha);
    }
  };
  function SolidColor(value) {
    Brush.call(this);
    this.value_1 = value;
  }
  protoOf(SolidColor).get_value_za03u9_k$ = function () {
    return this.value_1;
  };
  protoOf(SolidColor).applyTo_5ix92b_k$ = function (size, p, alpha) {
    p.set_alpha_tvzcqh_k$(get_DefaultAlpha());
    var tmp;
    if (!(alpha === get_DefaultAlpha())) {
      tmp = Color__copy$default_impl_ectz3s(this.value_1, _Color___get_alpha__impl__wcfyv1(this.value_1) * alpha);
    } else {
      tmp = this.value_1;
    }
    p.set_color_m2amxp_k$(tmp);
    if (!(p.get_shader_jgtazy_k$() == null)) {
      p.set_shader_tgaw5e_k$(null);
    }
  };
  protoOf(SolidColor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SolidColor))
      return false;
    if (!equals(this.value_1, other.value_1))
      return false;
    return true;
  };
  protoOf(SolidColor).hashCode = function () {
    return Color__hashCode_impl_vjyivj(this.value_1);
  };
  protoOf(SolidColor).toString = function () {
    return 'SolidColor(value=' + new Color(this.value_1) + ')';
  };
  function _get_colors__hj58bp($this) {
    return $this.colors_1;
  }
  function _get_stops__b8qhfk($this) {
    return $this.stops_1;
  }
  function _get_start__b8zdqp($this) {
    return $this.start_1;
  }
  function _get_end__e67thy($this) {
    return $this.end_1;
  }
  function _get_tileMode__a5osqi($this) {
    return $this.tileMode_1;
  }
  function LinearGradient(colors, stops, start, end, tileMode) {
    stops = stops === VOID ? null : stops;
    tileMode = tileMode === VOID ? Companion_getInstance_33().get_Clamp_ddetsd_k$() : tileMode;
    ShaderBrush.call(this);
    this.colors_1 = colors;
    this.stops_1 = stops;
    this.start_1 = start;
    this.end_1 = end;
    this.tileMode_1 = tileMode;
  }
  protoOf(LinearGradient).get_intrinsicSize_culx5t_k$ = function () {
    var tmp;
    if (isFinite(_Offset___get_x__impl__xvi35n(this.start_1)) ? isFinite(_Offset___get_x__impl__xvi35n(this.end_1)) : false) {
      // Inline function 'kotlin.math.abs' call
      var x = _Offset___get_x__impl__xvi35n(this.start_1) - _Offset___get_x__impl__xvi35n(this.end_1);
      tmp = Math.abs(x);
    } else {
      tmp = FloatCompanionObject_getInstance().get_NaN_18jnv2_k$();
    }
    var tmp_0 = tmp;
    var tmp_1;
    if (isFinite(_Offset___get_y__impl__8bzhra(this.start_1)) ? isFinite(_Offset___get_y__impl__8bzhra(this.end_1)) : false) {
      // Inline function 'kotlin.math.abs' call
      var x_0 = _Offset___get_y__impl__8bzhra(this.start_1) - _Offset___get_y__impl__8bzhra(this.end_1);
      tmp_1 = Math.abs(x_0);
    } else {
      tmp_1 = FloatCompanionObject_getInstance().get_NaN_18jnv2_k$();
    }
    return Size(tmp_0, tmp_1);
  };
  protoOf(LinearGradient).createShader_k0897f_k$ = function (size) {
    var startX = _Offset___get_x__impl__xvi35n(this.start_1) === FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$() ? _Size___get_width__impl__58y75t(size) : _Offset___get_x__impl__xvi35n(this.start_1);
    var startY = _Offset___get_y__impl__8bzhra(this.start_1) === FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$() ? _Size___get_height__impl__a04p02(size) : _Offset___get_y__impl__8bzhra(this.start_1);
    var endX = _Offset___get_x__impl__xvi35n(this.end_1) === FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$() ? _Size___get_width__impl__58y75t(size) : _Offset___get_x__impl__xvi35n(this.end_1);
    var endY = _Offset___get_y__impl__8bzhra(this.end_1) === FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$() ? _Size___get_height__impl__a04p02(size) : _Offset___get_y__impl__8bzhra(this.end_1);
    var tmp0_colors = this.colors_1;
    var tmp1_colorStops = this.stops_1;
    var tmp2_from = Offset_0(startX, startY);
    var tmp3_to = Offset_0(endX, endY);
    var tmp4_tileMode = this.tileMode_1;
    return LinearGradientShader(tmp2_from, tmp3_to, tmp0_colors, tmp1_colorStops, tmp4_tileMode);
  };
  protoOf(LinearGradient).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LinearGradient))
      return false;
    if (!equals(this.colors_1, other.colors_1))
      return false;
    if (!equals(this.stops_1, other.stops_1))
      return false;
    if (!equals(this.start_1, other.start_1))
      return false;
    if (!equals(this.end_1, other.end_1))
      return false;
    if (!(this.tileMode_1 === other.tileMode_1))
      return false;
    return true;
  };
  protoOf(LinearGradient).hashCode = function () {
    var result = hashCode(this.colors_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.stops_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + Offset__hashCode_impl_hbql41(this.start_1) | 0;
    result = imul(31, result) + Offset__hashCode_impl_hbql41(this.end_1) | 0;
    result = imul(31, result) + TileMode__hashCode_impl_7u5am9(this.tileMode_1) | 0;
    return result;
  };
  protoOf(LinearGradient).toString = function () {
    var startValue = get_isFinite(this.start_1) ? 'start=' + new Offset(this.start_1) + ', ' : '';
    var endValue = get_isFinite(this.end_1) ? 'end=' + new Offset(this.end_1) + ', ' : '';
    return 'LinearGradient(colors=' + this.colors_1 + ', ' + ('stops=' + this.stops_1 + ', ') + startValue + endValue + ('tileMode=' + new TileMode(this.tileMode_1) + ')');
  };
  function _get_colors__hj58bp_0($this) {
    return $this.colors_1;
  }
  function _get_stops__b8qhfk_0($this) {
    return $this.stops_1;
  }
  function _get_center__m8ext6($this) {
    return $this.center_1;
  }
  function _get_radius__h7nyvb($this) {
    return $this.radius_1;
  }
  function _get_tileMode__a5osqi_0($this) {
    return $this.tileMode_1;
  }
  function RadialGradient(colors, stops, center, radius, tileMode) {
    stops = stops === VOID ? null : stops;
    tileMode = tileMode === VOID ? Companion_getInstance_33().get_Clamp_ddetsd_k$() : tileMode;
    ShaderBrush.call(this);
    this.colors_1 = colors;
    this.stops_1 = stops;
    this.center_1 = center;
    this.radius_1 = radius;
    this.tileMode_1 = tileMode;
  }
  protoOf(RadialGradient).get_intrinsicSize_culx5t_k$ = function () {
    return isFinite(this.radius_1) ? Size(this.radius_1 * 2, this.radius_1 * 2) : Companion_getInstance_0().get_Unspecified_3ttj0y_k$();
  };
  protoOf(RadialGradient).createShader_k0897f_k$ = function (size) {
    var centerX;
    var centerY;
    if (get_isUnspecified(this.center_1)) {
      var drawCenter = get_center(size);
      centerX = _Offset___get_x__impl__xvi35n(drawCenter);
      centerY = _Offset___get_y__impl__8bzhra(drawCenter);
    } else {
      centerX = _Offset___get_x__impl__xvi35n(this.center_1) === FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$() ? _Size___get_width__impl__58y75t(size) : _Offset___get_x__impl__xvi35n(this.center_1);
      centerY = _Offset___get_y__impl__8bzhra(this.center_1) === FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$() ? _Size___get_height__impl__a04p02(size) : _Offset___get_y__impl__8bzhra(this.center_1);
    }
    var tmp0_colors = this.colors_1;
    var tmp1_colorStops = this.stops_1;
    var tmp2_center = Offset_0(centerX, centerY);
    var tmp3_radius = this.radius_1 === FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$() ? _Size___get_minDimension__impl__4iso0r(size) / 2 : this.radius_1;
    var tmp4_tileMode = this.tileMode_1;
    return RadialGradientShader(tmp2_center, tmp3_radius, tmp0_colors, tmp1_colorStops, tmp4_tileMode);
  };
  protoOf(RadialGradient).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RadialGradient))
      return false;
    if (!equals(this.colors_1, other.colors_1))
      return false;
    if (!equals(this.stops_1, other.stops_1))
      return false;
    if (!equals(this.center_1, other.center_1))
      return false;
    if (!(this.radius_1 === other.radius_1))
      return false;
    if (!(this.tileMode_1 === other.tileMode_1))
      return false;
    return true;
  };
  protoOf(RadialGradient).hashCode = function () {
    var result = hashCode(this.colors_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.stops_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + Offset__hashCode_impl_hbql41(this.center_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.radius_1) | 0;
    result = imul(31, result) + TileMode__hashCode_impl_7u5am9(this.tileMode_1) | 0;
    return result;
  };
  protoOf(RadialGradient).toString = function () {
    var centerValue = get_isSpecified(this.center_1) ? 'center=' + new Offset(this.center_1) + ', ' : '';
    var radiusValue = isFinite(this.radius_1) ? 'radius=' + this.radius_1 + ', ' : '';
    return 'RadialGradient(' + ('colors=' + this.colors_1 + ', ') + ('stops=' + this.stops_1 + ', ') + centerValue + radiusValue + ('tileMode=' + new TileMode(this.tileMode_1) + ')');
  };
  function _get_center__m8ext6_0($this) {
    return $this.center_1;
  }
  function _get_colors__hj58bp_1($this) {
    return $this.colors_1;
  }
  function _get_stops__b8qhfk_1($this) {
    return $this.stops_1;
  }
  function SweepGradient(center, colors, stops) {
    stops = stops === VOID ? null : stops;
    ShaderBrush.call(this);
    this.center_1 = center;
    this.colors_1 = colors;
    this.stops_1 = stops;
  }
  protoOf(SweepGradient).createShader_k0897f_k$ = function (size) {
    var tmp;
    if (get_isUnspecified(this.center_1)) {
      tmp = get_center(size);
    } else {
      tmp = Offset_0(_Offset___get_x__impl__xvi35n(this.center_1) === FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$() ? _Size___get_width__impl__58y75t(size) : _Offset___get_x__impl__xvi35n(this.center_1), _Offset___get_y__impl__8bzhra(this.center_1) === FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$() ? _Size___get_height__impl__a04p02(size) : _Offset___get_y__impl__8bzhra(this.center_1));
    }
    return SweepGradientShader(tmp, this.colors_1, this.stops_1);
  };
  protoOf(SweepGradient).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SweepGradient))
      return false;
    if (!equals(this.center_1, other.center_1))
      return false;
    if (!equals(this.colors_1, other.colors_1))
      return false;
    if (!equals(this.stops_1, other.stops_1))
      return false;
    return true;
  };
  protoOf(SweepGradient).hashCode = function () {
    var result = Offset__hashCode_impl_hbql41(this.center_1);
    result = imul(31, result) + hashCode(this.colors_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.stops_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(SweepGradient).toString = function () {
    var centerValue = get_isSpecified(this.center_1) ? 'center=' + new Offset(this.center_1) + ', ' : '';
    return 'SweepGradient(' + centerValue + ('colors=' + this.colors_1 + ', stops=' + this.stops_1 + ')');
  };
  function Canvas() {
  }
  function Canvas_0(image) {
    return ActualCanvas(image);
  }
  function _ClipOp___init__impl__pqwwy8(value) {
    return value;
  }
  function _get_value__a43j40_0($this) {
    return $this;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.Difference_1 = _ClipOp___init__impl__pqwwy8(0);
    this.Intersect_1 = _ClipOp___init__impl__pqwwy8(1);
  }
  protoOf(Companion_1).get_Difference_lo2jbz_k$ = function () {
    return this.Difference_1;
  };
  protoOf(Companion_1).get_Intersect_gpxc6n_k$ = function () {
    return this.Intersect_1;
  };
  var Companion_instance_1;
  function Companion_getInstance_15() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function ClipOp__toString_impl_vwrlao($this) {
    return $this === Companion_getInstance_15().Difference_1 ? 'Difference' : $this === Companion_getInstance_15().Intersect_1 ? 'Intersect' : 'Unknown';
  }
  function ClipOp__hashCode_impl_hd6jvl($this) {
    return $this;
  }
  function ClipOp__equals_impl_g5ajel($this, other) {
    if (!(other instanceof ClipOp))
      return false;
    if (!($this === (other instanceof ClipOp ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function ClipOp(value) {
    Companion_getInstance_15();
    this.value_1 = value;
  }
  protoOf(ClipOp).toString = function () {
    return ClipOp__toString_impl_vwrlao(this.value_1);
  };
  protoOf(ClipOp).hashCode = function () {
    return ClipOp__hashCode_impl_hd6jvl(this.value_1);
  };
  protoOf(ClipOp).equals = function (other) {
    return ClipOp__equals_impl_g5ajel(this.value_1, other);
  };
  function hsvToRgbComponent($this, n, h, s, v) {
    var k = (n + h / 60.0) % 6.0;
    var tmp = v * s;
    // Inline function 'kotlin.math.max' call
    // Inline function 'kotlin.comparisons.minOf' call
    var b = 4 - k;
    var b_0 = Math.min(k, b, 1.0);
    return v - tmp * Math.max(0.0, b_0);
  }
  function hslToRgbComponent($this, n, h, s, l) {
    var k = (n + h / 30.0) % 12.0;
    // Inline function 'kotlin.math.min' call
    var b = 1.0 - l;
    var a = s * Math.min(l, b);
    // Inline function 'kotlin.math.max' call
    // Inline function 'kotlin.comparisons.minOf' call
    var a_0 = k - 3;
    var b_0 = 9 - k;
    var b_1 = Math.min(a_0, b_0, 1.0);
    return l - a * Math.max(-1.0, b_1);
  }
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
    var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other)));
    var id = _ULong___get_data__impl__fggpzb(this_2).toInt_1tsl84_k$();
    return this_0.get_ColorSpacesArray_qsodou_k$()[id];
  }
  function Color__convert_impl_so5m8t($this, colorSpace) {
    var thisColorSpace = _Color___get_colorSpace__impl__jqqozk($this);
    if (colorSpace.equals(thisColorSpace)) {
      return $this;
    }
    var connector = connect(thisColorSpace, colorSpace);
    return connector.transformToColor_57p277_k$(_Color___get_red__impl__cwrsk6($this), _Color___get_green__impl__bta9rs($this), _Color___get_blue__impl__xwez13($this), _Color___get_alpha__impl__wcfyv1($this));
  }
  function _Color___get_red__impl__cwrsk6($this) {
    var tmp;
    // Inline function 'kotlin.ULong.and' call
    var this_0 = _Color___get_value__impl__1pls5m($this);
    var other = _ULong___init__impl__c78o9k(new Long(63, 0));
    var tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other)));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      // Inline function 'kotlin.ULong.toFloat' call
      // Inline function 'kotlin.ULong.and' call
      // Inline function 'kotlin.ULong.shr' call
      var this_1 = _Color___get_value__impl__1pls5m($this);
      var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).ushr_z7nmq8_k$(48));
      var other_0 = _ULong___init__impl__c78o9k(new Long(255, 0));
      // Inline function 'kotlin.ULong.toDouble' call
      var this_3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_2).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongToDouble(_ULong___get_data__impl__fggpzb(this_3)) / 255.0;
    } else {
      // Inline function 'kotlin.ULong.toShort' call
      // Inline function 'kotlin.ULong.and' call
      // Inline function 'kotlin.ULong.shr' call
      var this_4 = _Color___get_value__impl__1pls5m($this);
      var this_5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).ushr_z7nmq8_k$(48));
      var other_1 = _ULong___init__impl__c78o9k(new Long(65535, 0));
      var this_6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_5).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_1)));
      var tmp$ret$7 = _ULong___get_data__impl__fggpzb(this_6).toShort_ja8oqn_k$();
      tmp = Float16__toFloat_impl_6i8dal(_Float16___init__impl__fckrew(tmp$ret$7));
    }
    return tmp;
  }
  function _Color___get_green__impl__bta9rs($this) {
    var tmp;
    // Inline function 'kotlin.ULong.and' call
    var this_0 = _Color___get_value__impl__1pls5m($this);
    var other = _ULong___init__impl__c78o9k(new Long(63, 0));
    var tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other)));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      // Inline function 'kotlin.ULong.toFloat' call
      // Inline function 'kotlin.ULong.and' call
      // Inline function 'kotlin.ULong.shr' call
      var this_1 = _Color___get_value__impl__1pls5m($this);
      var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).ushr_z7nmq8_k$(40));
      var other_0 = _ULong___init__impl__c78o9k(new Long(255, 0));
      // Inline function 'kotlin.ULong.toDouble' call
      var this_3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_2).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongToDouble(_ULong___get_data__impl__fggpzb(this_3)) / 255.0;
    } else {
      // Inline function 'kotlin.ULong.toShort' call
      // Inline function 'kotlin.ULong.and' call
      // Inline function 'kotlin.ULong.shr' call
      var this_4 = _Color___get_value__impl__1pls5m($this);
      var this_5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).ushr_z7nmq8_k$(32));
      var other_1 = _ULong___init__impl__c78o9k(new Long(65535, 0));
      var this_6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_5).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_1)));
      var tmp$ret$7 = _ULong___get_data__impl__fggpzb(this_6).toShort_ja8oqn_k$();
      tmp = Float16__toFloat_impl_6i8dal(_Float16___init__impl__fckrew(tmp$ret$7));
    }
    return tmp;
  }
  function _Color___get_blue__impl__xwez13($this) {
    var tmp;
    // Inline function 'kotlin.ULong.and' call
    var this_0 = _Color___get_value__impl__1pls5m($this);
    var other = _ULong___init__impl__c78o9k(new Long(63, 0));
    var tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other)));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      // Inline function 'kotlin.ULong.toFloat' call
      // Inline function 'kotlin.ULong.and' call
      // Inline function 'kotlin.ULong.shr' call
      var this_1 = _Color___get_value__impl__1pls5m($this);
      var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).ushr_z7nmq8_k$(32));
      var other_0 = _ULong___init__impl__c78o9k(new Long(255, 0));
      // Inline function 'kotlin.ULong.toDouble' call
      var this_3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_2).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongToDouble(_ULong___get_data__impl__fggpzb(this_3)) / 255.0;
    } else {
      // Inline function 'kotlin.ULong.toShort' call
      // Inline function 'kotlin.ULong.and' call
      // Inline function 'kotlin.ULong.shr' call
      var this_4 = _Color___get_value__impl__1pls5m($this);
      var this_5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).ushr_z7nmq8_k$(16));
      var other_1 = _ULong___init__impl__c78o9k(new Long(65535, 0));
      var this_6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_5).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_1)));
      var tmp$ret$7 = _ULong___get_data__impl__fggpzb(this_6).toShort_ja8oqn_k$();
      tmp = Float16__toFloat_impl_6i8dal(_Float16___init__impl__fckrew(tmp$ret$7));
    }
    return tmp;
  }
  function _Color___get_alpha__impl__wcfyv1($this) {
    var tmp;
    // Inline function 'kotlin.ULong.and' call
    var this_0 = _Color___get_value__impl__1pls5m($this);
    var other = _ULong___init__impl__c78o9k(new Long(63, 0));
    var tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other)));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      // Inline function 'kotlin.ULong.toFloat' call
      // Inline function 'kotlin.ULong.and' call
      // Inline function 'kotlin.ULong.shr' call
      var this_1 = _Color___get_value__impl__1pls5m($this);
      var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).ushr_z7nmq8_k$(56));
      var other_0 = _ULong___init__impl__c78o9k(new Long(255, 0));
      // Inline function 'kotlin.ULong.toDouble' call
      var this_3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_2).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongToDouble(_ULong___get_data__impl__fggpzb(this_3)) / 255.0;
    } else {
      // Inline function 'kotlin.ULong.toFloat' call
      // Inline function 'kotlin.ULong.and' call
      // Inline function 'kotlin.ULong.shr' call
      var this_4 = _Color___get_value__impl__1pls5m($this);
      var this_5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).ushr_z7nmq8_k$(6));
      var other_1 = _ULong___init__impl__c78o9k(new Long(1023, 0));
      // Inline function 'kotlin.ULong.toDouble' call
      var this_6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_5).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_1)));
      tmp = ulongToDouble(_ULong___get_data__impl__fggpzb(this_6)) / 1023.0;
    }
    return tmp;
  }
  function Color__component1_impl_lz80qe($this) {
    return _Color___get_red__impl__cwrsk6($this);
  }
  function Color__component2_impl_mg9n4l($this) {
    return _Color___get_green__impl__bta9rs($this);
  }
  function Color__component3_impl_mxb9is($this) {
    return _Color___get_blue__impl__xwez13($this);
  }
  function Color__component4_impl_necvwz($this) {
    return _Color___get_alpha__impl__wcfyv1($this);
  }
  function Color__component5_impl_nveib6($this) {
    return _Color___get_colorSpace__impl__jqqozk($this);
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
      tmp = (tmp_0 == null ? null : new Color(tmp_0)).copy_l5ng0s_k$.call(new Color($this), alpha, red, green, blue).value_1;
    }
    return tmp;
  }
  function Color__toString_impl_hpzmaq($this) {
    return 'Color(' + _Color___get_red__impl__cwrsk6($this) + ', ' + _Color___get_green__impl__bta9rs($this) + ', ' + _Color___get_blue__impl__xwez13($this) + ', ' + _Color___get_alpha__impl__wcfyv1($this) + ', ' + _Color___get_colorSpace__impl__jqqozk($this).get_name_woqyms_k$() + ')';
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.Black_1 = Color_1(new Long(-16777216, 0));
    this.DarkGray_1 = Color_1(new Long(-12303292, 0));
    this.Gray_1 = Color_1(new Long(-7829368, 0));
    this.LightGray_1 = Color_1(new Long(-3355444, 0));
    this.White_1 = Color_1(new Long(-1, 0));
    this.Red_1 = Color_1(new Long(-65536, 0));
    this.Green_1 = Color_1(new Long(-16711936, 0));
    this.Blue_1 = Color_1(new Long(-16776961, 0));
    this.Yellow_1 = Color_1(new Long(-256, 0));
    this.Cyan_1 = Color_1(new Long(-16711681, 0));
    this.Magenta_1 = Color_1(new Long(-65281, 0));
    this.Transparent_1 = Color_3(0);
    this.Unspecified_1 = Color_0(0.0, 0.0, 0.0, 0.0, ColorSpaces_getInstance().get_Unspecified_el0w4u_k$());
  }
  protoOf(Companion_2).get_Black_t4k9fh_k$ = function () {
    return this.Black_1;
  };
  protoOf(Companion_2).get_DarkGray_6zzecp_k$ = function () {
    return this.DarkGray_1;
  };
  protoOf(Companion_2).get_Gray_ci51t9_k$ = function () {
    return this.Gray_1;
  };
  protoOf(Companion_2).get_LightGray_9g8v13_k$ = function () {
    return this.LightGray_1;
  };
  protoOf(Companion_2).get_White_xpp3qf_k$ = function () {
    return this.White_1;
  };
  protoOf(Companion_2).get_Red_6k64b3_k$ = function () {
    return this.Red_1;
  };
  protoOf(Companion_2).get_Green_dkzwf_k$ = function () {
    return this.Green_1;
  };
  protoOf(Companion_2).get_Blue_kx9ene_k$ = function () {
    return this.Blue_1;
  };
  protoOf(Companion_2).get_Yellow_pj9jlw_k$ = function () {
    return this.Yellow_1;
  };
  protoOf(Companion_2).get_Cyan_3r2wtp_k$ = function () {
    return this.Cyan_1;
  };
  protoOf(Companion_2).get_Magenta_tpdrb_k$ = function () {
    return this.Magenta_1;
  };
  protoOf(Companion_2).get_Transparent_if5ln4_k$ = function () {
    return this.Transparent_1;
  };
  protoOf(Companion_2).get_Unspecified_j397pn_k$ = function () {
    return this.Unspecified_1;
  };
  protoOf(Companion_2).hsv_lsakwl_k$ = function (hue, saturation, value, alpha, colorSpace) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(((0.0 <= hue ? hue <= 360.0 : false) ? 0.0 <= saturation ? saturation <= 1.0 : false : false) ? 0.0 <= value ? value <= 1.0 : false : false)) {
      // Inline function 'androidx.compose.ui.graphics.Companion.hsv.<anonymous>' call
      var message = 'HSV (' + hue + ', ' + saturation + ', ' + value + ') must be in range (0..360, 0..1, 0..1)';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var red = hsvToRgbComponent(this, 5, hue, saturation, value);
    var green = hsvToRgbComponent(this, 3, hue, saturation, value);
    var blue = hsvToRgbComponent(this, 1, hue, saturation, value);
    return Color_0(red, green, blue, alpha, colorSpace);
  };
  protoOf(Companion_2).hsv$default_arp9ku_k$ = function (hue, saturation, value, alpha, colorSpace, $super) {
    alpha = alpha === VOID ? 1.0 : alpha;
    colorSpace = colorSpace === VOID ? ColorSpaces_getInstance().get_Srgb_woa2g3_k$() : colorSpace;
    return $super === VOID ? this.hsv_lsakwl_k$(hue, saturation, value, alpha, colorSpace) : $super.hsv_lsakwl_k$.call(this, hue, saturation, value, alpha, colorSpace).value_1;
  };
  protoOf(Companion_2).hsl_3aq49t_k$ = function (hue, saturation, lightness, alpha, colorSpace) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(((0.0 <= hue ? hue <= 360.0 : false) ? 0.0 <= saturation ? saturation <= 1.0 : false : false) ? 0.0 <= lightness ? lightness <= 1.0 : false : false)) {
      // Inline function 'androidx.compose.ui.graphics.Companion.hsl.<anonymous>' call
      var message = 'HSL (' + hue + ', ' + saturation + ', ' + lightness + ') must be in range (0..360, 0..1, 0..1)';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var red = hslToRgbComponent(this, 0, hue, saturation, lightness);
    var green = hslToRgbComponent(this, 8, hue, saturation, lightness);
    var blue = hslToRgbComponent(this, 4, hue, saturation, lightness);
    return Color_0(red, green, blue, alpha, colorSpace);
  };
  protoOf(Companion_2).hsl$default_16toy0_k$ = function (hue, saturation, lightness, alpha, colorSpace, $super) {
    alpha = alpha === VOID ? 1.0 : alpha;
    colorSpace = colorSpace === VOID ? ColorSpaces_getInstance().get_Srgb_woa2g3_k$() : colorSpace;
    return $super === VOID ? this.hsl_3aq49t_k$(hue, saturation, lightness, alpha, colorSpace) : $super.hsl_3aq49t_k$.call(this, hue, saturation, lightness, alpha, colorSpace).value_1;
  };
  var Companion_instance_2;
  function Companion_getInstance_16() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function Color__hashCode_impl_vjyivj($this) {
    return ULong__hashCode_impl_6hv2lb($this);
  }
  function Color__equals_impl_k06uqz($this, other) {
    if (!(other instanceof Color))
      return false;
    var tmp0_other_with_cast = other instanceof Color ? other.value_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Color(value) {
    Companion_getInstance_16();
    this.value_1 = value;
  }
  protoOf(Color).toString = function () {
    return Color__toString_impl_hpzmaq(this.value_1);
  };
  protoOf(Color).hashCode = function () {
    return Color__hashCode_impl_vjyivj(this.value_1);
  };
  protoOf(Color).equals = function (other) {
    return Color__equals_impl_k06uqz(this.value_1, other);
  };
  function get_isSpecified_0(_this__u8e3s4) {
    return !equals(_Color___get_value__impl__1pls5m(_this__u8e3s4), _Color___get_value__impl__1pls5m(Companion_getInstance_16().Unspecified_1));
  }
  function takeOrElse(_this__u8e3s4, block) {
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(_this__u8e3s4), _Color___get_value__impl__1pls5m(Companion_getInstance_16().Unspecified_1))) {
      tmp = _this__u8e3s4;
    } else {
      tmp = block().value_1;
    }
    return tmp;
  }
  function toArgb(_this__u8e3s4) {
    // Inline function 'kotlin.ULong.toInt' call
    // Inline function 'kotlin.ULong.shr' call
    var this_0 = _Color___get_value__impl__1pls5m(Color__convert_impl_so5m8t(_this__u8e3s4, ColorSpaces_getInstance().get_Srgb_woa2g3_k$()));
    var this_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).ushr_z7nmq8_k$(32));
    return _ULong___get_data__impl__fggpzb(this_1).toInt_1tsl84_k$();
  }
  function Color_0(red, green, blue, alpha, colorSpace) {
    alpha = alpha === VOID ? 1.0 : alpha;
    colorSpace = colorSpace === VOID ? ColorSpaces_getInstance().get_Srgb_woa2g3_k$() : colorSpace;
    // Inline function 'kotlin.require' call
    var tmp;
    var tmp_0;
    var tmp_1;
    var containsLower = colorSpace.getMinValue_3znj7n_k$(0);
    if (red <= colorSpace.getMaxValue_kswgkr_k$(0) ? containsLower <= red : false) {
      var containsLower_0 = colorSpace.getMinValue_3znj7n_k$(1);
      tmp_1 = green <= colorSpace.getMaxValue_kswgkr_k$(1) ? containsLower_0 <= green : false;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      var containsLower_1 = colorSpace.getMinValue_3znj7n_k$(2);
      tmp_0 = blue <= colorSpace.getMaxValue_kswgkr_k$(2) ? containsLower_1 <= blue : false;
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
    if (colorSpace.get_isSrgb_ew666l_k$()) {
      var argb = numberToInt(alpha * 255.0 + 0.5) << 24 | numberToInt(red * 255.0 + 0.5) << 16 | numberToInt(green * 255.0 + 0.5) << 8 | numberToInt(blue * 255.0 + 0.5);
      // Inline function 'kotlin.ULong.shl' call
      // Inline function 'kotlin.ULong.and' call
      // Inline function 'kotlin.toULong' call
      var this_0 = _ULong___init__impl__c78o9k(toLong(argb));
      var other = _ULong___init__impl__c78o9k(new Long(-1, 0));
      var this_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other)));
      var tmp$ret$3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).shl_bg8if3_k$(32));
      return _Color___init__impl__r6cqi2(tmp$ret$3);
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(colorSpace.get_componentCount_ffrht1_k$() === 3)) {
      // Inline function 'androidx.compose.ui.graphics.Color.<anonymous>' call
      var message_0 = 'Color only works with ColorSpaces with 3 components';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var id = colorSpace.get_id_kntnx8_k$();
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(id === Companion_getInstance_37().get_MinId_idmyf8_k$())) {
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
    var this_4 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_3).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_0)));
    var this_5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).shl_bg8if3_k$(48));
    // Inline function 'kotlin.ULong.shl' call
    // Inline function 'kotlin.ULong.and' call
    // Inline function 'kotlin.toULong' call
    var this_6 = _Float16___get_halfValue__impl__89tmwx(g);
    var this_7 = _ULong___init__impl__c78o9k(toLong(this_6));
    var other_1 = _ULong___init__impl__c78o9k(new Long(65535, 0));
    var this_8 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_7).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_1)));
    var other_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_8).shl_bg8if3_k$(32));
    var this_9 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_5).or_v7fvkl_k$(_ULong___get_data__impl__fggpzb(other_2)));
    // Inline function 'kotlin.ULong.shl' call
    // Inline function 'kotlin.ULong.and' call
    // Inline function 'kotlin.toULong' call
    var this_10 = _Float16___get_halfValue__impl__89tmwx(b);
    var this_11 = _ULong___init__impl__c78o9k(toLong(this_10));
    var other_3 = _ULong___init__impl__c78o9k(new Long(65535, 0));
    var this_12 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_11).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_3)));
    var other_4 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_12).shl_bg8if3_k$(16));
    var this_13 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_9).or_v7fvkl_k$(_ULong___get_data__impl__fggpzb(other_4)));
    // Inline function 'kotlin.ULong.shl' call
    // Inline function 'kotlin.ULong.and' call
    // Inline function 'kotlin.toULong' call
    var this_14 = _ULong___init__impl__c78o9k(toLong(a));
    var other_5 = _ULong___init__impl__c78o9k(new Long(1023, 0));
    var this_15 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_14).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_5)));
    var other_6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_15).shl_bg8if3_k$(6));
    var this_16 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_13).or_v7fvkl_k$(_ULong___get_data__impl__fggpzb(other_6)));
    // Inline function 'kotlin.ULong.and' call
    // Inline function 'kotlin.toULong' call
    var this_17 = _ULong___init__impl__c78o9k(toLong(id));
    var other_7 = _ULong___init__impl__c78o9k(new Long(63, 0));
    var other_8 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_17).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_7)));
    var tmp$ret$25 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_16).or_v7fvkl_k$(_ULong___get_data__impl__fggpzb(other_8)));
    return _Color___init__impl__r6cqi2(tmp$ret$25);
  }
  function Color_1(color) {
    // Inline function 'kotlin.ULong.shl' call
    // Inline function 'kotlin.ULong.and' call
    // Inline function 'kotlin.toULong' call
    var this_0 = _ULong___init__impl__c78o9k(color);
    var other = _ULong___init__impl__c78o9k(new Long(-1, 0));
    var this_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other)));
    var tmp$ret$2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).shl_bg8if3_k$(32));
    return _Color___init__impl__r6cqi2(tmp$ret$2);
  }
  function luminance(_this__u8e3s4) {
    var colorSpace = _Color___get_colorSpace__impl__jqqozk(_this__u8e3s4);
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!equals(colorSpace.get_model_b1t9lk_k$(), Companion_getInstance_36().get_Rgb_ehihd0_k$())) {
      // Inline function 'androidx.compose.ui.graphics.luminance.<anonymous>' call
      var message = 'The specified color must be encoded in an RGB color space. ' + ('The supplied color space is ' + new ColorModel(colorSpace.get_model_b1t9lk_k$()));
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var eotf = (colorSpace instanceof Rgb ? colorSpace : THROW_CCE()).get_eotfFunc_j2khmx_k$();
    var r = eotf.invoke_e0thbm_k$(_Color___get_red__impl__cwrsk6(_this__u8e3s4));
    var g = eotf.invoke_e0thbm_k$(_Color___get_green__impl__bta9rs(_this__u8e3s4));
    var b = eotf.invoke_e0thbm_k$(_Color___get_blue__impl__xwez13(_this__u8e3s4));
    return saturate(0.2126 * r + 0.7152 * g + 0.0722 * b);
  }
  function Color_2(red, green, blue, alpha) {
    alpha = alpha === VOID ? 255 : alpha;
    var color = (alpha & 255) << 24 | (red & 255) << 16 | (green & 255) << 8 | blue & 255;
    return Color_3(color);
  }
  function lerp_1(start, stop, fraction) {
    var colorSpace = ColorSpaces_getInstance().get_Oklab_ierso8_k$();
    var startColor = Color__convert_impl_so5m8t(start, colorSpace);
    var endColor = Color__convert_impl_so5m8t(stop, colorSpace);
    var startAlpha = _Color___get_alpha__impl__wcfyv1(startColor);
    var startL = _Color___get_red__impl__cwrsk6(startColor);
    var startA = _Color___get_green__impl__bta9rs(startColor);
    var startB = _Color___get_blue__impl__xwez13(startColor);
    var endAlpha = _Color___get_alpha__impl__wcfyv1(endColor);
    var endL = _Color___get_red__impl__cwrsk6(endColor);
    var endA = _Color___get_green__impl__bta9rs(endColor);
    var endB = _Color___get_blue__impl__xwez13(endColor);
    var tmp0_alpha = lerp(startAlpha, endAlpha, fraction);
    var tmp1_red = lerp(startL, endL, fraction);
    var tmp2_green = lerp(startA, endA, fraction);
    var tmp3_blue = lerp(startB, endB, fraction);
    var interpolated = Color_0(tmp1_red, tmp2_green, tmp3_blue, tmp0_alpha, colorSpace);
    return Color__convert_impl_so5m8t(interpolated, _Color___get_colorSpace__impl__jqqozk(stop));
  }
  function Color_3(color) {
    // Inline function 'kotlin.ULong.shl' call
    // Inline function 'kotlin.toULong' call
    var this_0 = _ULong___init__impl__c78o9k(toLong(color));
    var tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).shl_bg8if3_k$(32));
    return _Color___init__impl__r6cqi2(tmp$ret$1);
  }
  function saturate(v) {
    return v <= 0.0 ? 0.0 : v >= 1.0 ? 1.0 : v;
  }
  function ColorProducer() {
  }
  function Companion_3() {
    Companion_instance_3 = this;
  }
  protoOf(Companion_3).tint_547dqc_k$ = function (color, blendMode) {
    return BlendModeColorFilter_init_$Create$(color, blendMode);
  };
  protoOf(Companion_3).tint$default_jnxvki_k$ = function (color, blendMode, $super) {
    blendMode = blendMode === VOID ? Companion_getInstance_13().get_SrcIn_enr0mu_k$() : blendMode;
    return $super === VOID ? this.tint_547dqc_k$(color, blendMode) : $super.tint_547dqc_k$.call(this, new Color(color), new BlendMode(blendMode));
  };
  protoOf(Companion_3).colorMatrix_vyb9m8_k$ = function (colorMatrix) {
    return ColorMatrixColorFilter_init_$Create$(colorMatrix);
  };
  protoOf(Companion_3).lighting_s3t6fu_k$ = function (multiply, add) {
    return LightingColorFilter_init_$Create$(multiply, add);
  };
  var Companion_instance_3;
  function Companion_getInstance_17() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function ColorFilter(nativeColorFilter) {
    Companion_getInstance_17();
    this.nativeColorFilter_1 = nativeColorFilter;
  }
  protoOf(ColorFilter).get_nativeColorFilter_tol2md_k$ = function () {
    return this.nativeColorFilter_1;
  };
  function BlendModeColorFilter_init_$Init$(color, blendMode, $this) {
    BlendModeColorFilter.call($this, color, blendMode, actualTintColorFilter(color, blendMode));
    return $this;
  }
  function BlendModeColorFilter_init_$Create$(color, blendMode) {
    return BlendModeColorFilter_init_$Init$(color, blendMode, objectCreate(protoOf(BlendModeColorFilter)));
  }
  function BlendModeColorFilter(color, blendMode, nativeColorFilter) {
    ColorFilter.call(this, nativeColorFilter);
    this.color_1 = color;
    this.blendMode_1 = blendMode;
  }
  protoOf(BlendModeColorFilter).get_color_lnp1vl_k$ = function () {
    return this.color_1;
  };
  protoOf(BlendModeColorFilter).get_blendMode_si209t_k$ = function () {
    return this.blendMode_1;
  };
  protoOf(BlendModeColorFilter).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BlendModeColorFilter))
      return false;
    if (!equals(this.color_1, other.color_1))
      return false;
    if (!(this.blendMode_1 === other.blendMode_1))
      return false;
    return true;
  };
  protoOf(BlendModeColorFilter).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.color_1);
    result = imul(31, result) + BlendMode__hashCode_impl_93ceri(this.blendMode_1) | 0;
    return result;
  };
  protoOf(BlendModeColorFilter).toString = function () {
    return 'BlendModeColorFilter(color=' + new Color(this.color_1) + ', blendMode=' + new BlendMode(this.blendMode_1) + ')';
  };
  function _set_colorMatrix__ml61z3($this, _set____db54di) {
    $this.colorMatrix_1 = _set____db54di;
  }
  function _get_colorMatrix__7p84ct($this) {
    return $this.colorMatrix_1;
  }
  function ColorMatrixColorFilter_init_$Init$(colorMatrix, $this) {
    ColorMatrixColorFilter.call($this, colorMatrix, actualColorMatrixColorFilter(colorMatrix));
    return $this;
  }
  function ColorMatrixColorFilter_init_$Create$(colorMatrix) {
    return ColorMatrixColorFilter_init_$Init$(colorMatrix, objectCreate(protoOf(ColorMatrixColorFilter)));
  }
  function obtainColorMatrix($this) {
    var tmp0_elvis_lhs = $this.colorMatrix_1;
    var tmp;
    var tmp_0 = tmp0_elvis_lhs;
    if ((tmp_0 == null ? null : new ColorMatrix_0(tmp_0)) == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new ColorMatrix_0(actualColorMatrixFromFilter($this.nativeColorFilter_1));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.ColorMatrixColorFilter.obtainColorMatrix.<anonymous>' call
      $this.colorMatrix_1 = this_0.values_1;
      tmp = this_0.values_1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function ColorMatrixColorFilter(colorMatrix, nativeColorFilter) {
    ColorFilter.call(this, nativeColorFilter);
    this.colorMatrix_1 = colorMatrix;
  }
  protoOf(ColorMatrixColorFilter).copyColorMatrix_mywbr3_k$ = function (targetColorMatrix) {
    var curMatrix = obtainColorMatrix(this);
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = _ColorMatrix___get_values__impl__bpwpry(curMatrix);
    var destination = _ColorMatrix___get_values__impl__bpwpry(targetColorMatrix);
    var endIndex = this_0.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, destination, 0, 0, endIndex);
    return targetColorMatrix;
  };
  protoOf(ColorMatrixColorFilter).copyColorMatrix$default_3f2thh_k$ = function (targetColorMatrix, $super) {
    targetColorMatrix = targetColorMatrix === VOID ? _ColorMatrix___init__impl__3gytx1() : targetColorMatrix;
    return $super === VOID ? this.copyColorMatrix_mywbr3_k$(targetColorMatrix) : $super.copyColorMatrix_mywbr3_k$.call(this, new ColorMatrix_0(targetColorMatrix)).values_1;
  };
  protoOf(ColorMatrixColorFilter).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ColorMatrixColorFilter))
      return false;
    var colorMatrix = obtainColorMatrix(this);
    var otherColorMatrix = obtainColorMatrix(other);
    if (!contentEquals(_ColorMatrix___get_values__impl__bpwpry(colorMatrix), _ColorMatrix___get_values__impl__bpwpry(otherColorMatrix)))
      return false;
    return true;
  };
  protoOf(ColorMatrixColorFilter).hashCode = function () {
    var tmp0_safe_receiver = this.colorMatrix_1;
    var tmp;
    var tmp_0 = tmp0_safe_receiver;
    if ((tmp_0 == null ? null : new ColorMatrix_0(tmp_0)) == null) {
      tmp = null;
    } else {
      tmp = ColorMatrix__hashCode_impl_tanbn6(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(ColorMatrixColorFilter).toString = function () {
    var tmp = this.colorMatrix_1;
    return 'ColorMatrixColorFilter(colorMatrix=' + (tmp == null ? null : new ColorMatrix_0(tmp)) + ')';
  };
  function LightingColorFilter_init_$Init$(multiply, add, $this) {
    LightingColorFilter.call($this, multiply, add, actualLightingColorFilter(multiply, add));
    return $this;
  }
  function LightingColorFilter_init_$Create$(multiply, add) {
    return LightingColorFilter_init_$Init$(multiply, add, objectCreate(protoOf(LightingColorFilter)));
  }
  function LightingColorFilter(multiply, add, nativeColorFilter) {
    ColorFilter.call(this, nativeColorFilter);
    this.multiply_1 = multiply;
    this.add_1 = add;
  }
  protoOf(LightingColorFilter).get_multiply_9flln8_k$ = function () {
    return this.multiply_1;
  };
  protoOf(LightingColorFilter).get_add_essgan_k$ = function () {
    return this.add_1;
  };
  protoOf(LightingColorFilter).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LightingColorFilter))
      return false;
    if (!equals(this.multiply_1, other.multiply_1))
      return false;
    if (!equals(this.add_1, other.add_1))
      return false;
    return true;
  };
  protoOf(LightingColorFilter).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.multiply_1);
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.add_1) | 0;
    return result;
  };
  protoOf(LightingColorFilter).toString = function () {
    return 'LightingColorFilter(multiply=' + new Color(this.multiply_1) + ', add=' + new Color(this.add_1) + ')';
  };
  function _ColorMatrix___init__impl__3gytx1(values) {
    var tmp;
    if (values === VOID) {
      // Inline function 'kotlin.floatArrayOf' call
      tmp = new Float32Array([1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0]);
    } else {
      tmp = values;
    }
    values = tmp;
    return values;
  }
  function _ColorMatrix___get_values__impl__bpwpry($this) {
    return $this;
  }
  function ColorMatrix__get_impl_cdhqm3($this, row, column) {
    return _ColorMatrix___get_values__impl__bpwpry($this)[imul(row, 5) + column | 0];
  }
  function ColorMatrix__set_impl_33f5gv($this, row, column, v) {
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(row, 5) + column | 0] = v;
  }
  function ColorMatrix__reset_impl_aaa3ky($this) {
    fill(_ColorMatrix___get_values__impl__bpwpry($this), 0.0);
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 0 | 0] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 2 | 0] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 1 | 0] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 3 | 0] = 1.0;
  }
  function ColorMatrix__set_impl_33f5gv_0($this, src) {
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = _ColorMatrix___get_values__impl__bpwpry(src);
    var destination = _ColorMatrix___get_values__impl__bpwpry($this);
    var endIndex = this_0.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, destination, 0, 0, endIndex);
  }
  function rotateInternal($this, degrees, block) {
    ColorMatrix__reset_impl_aaa3ky($this);
    var radians = degrees * get_PI() / 180.0;
    // Inline function 'kotlin.math.cos' call
    var cosine = Math.cos(radians);
    // Inline function 'kotlin.math.sin' call
    var sine = Math.sin(radians);
    block(cosine, sine);
  }
  function ColorMatrix__timesAssign_impl_tpdrdo($this, colorMatrix) {
    var v00 = dot($this, $this, 0, colorMatrix, 0);
    var v01 = dot($this, $this, 0, colorMatrix, 1);
    var v02 = dot($this, $this, 0, colorMatrix, 2);
    var v03 = dot($this, $this, 0, colorMatrix, 3);
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp = _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_0 = tmp * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(0, 5) + 4 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_1 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_2 = tmp_0 + tmp_1 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(1, 5) + 4 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_3 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_4 = tmp_2 + tmp_3 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(2, 5) + 4 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_5 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_6 = tmp_4 + tmp_5 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(3, 5) + 4 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var v04 = tmp_6 + _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 4 | 0];
    var v10 = dot($this, $this, 1, colorMatrix, 0);
    var v11 = dot($this, $this, 1, colorMatrix, 1);
    var v12 = dot($this, $this, 1, colorMatrix, 2);
    var v13 = dot($this, $this, 1, colorMatrix, 3);
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_7 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_8 = tmp_7 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(0, 5) + 4 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_9 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_10 = tmp_8 + tmp_9 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(1, 5) + 4 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_11 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_12 = tmp_10 + tmp_11 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(2, 5) + 4 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_13 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_14 = tmp_12 + tmp_13 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(3, 5) + 4 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var v14 = tmp_14 + _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 4 | 0];
    var v20 = dot($this, $this, 2, colorMatrix, 0);
    var v21 = dot($this, $this, 2, colorMatrix, 1);
    var v22 = dot($this, $this, 2, colorMatrix, 2);
    var v23 = dot($this, $this, 2, colorMatrix, 3);
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_15 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_16 = tmp_15 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(0, 5) + 4 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_17 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_18 = tmp_16 + tmp_17 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(1, 5) + 4 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_19 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_20 = tmp_18 + tmp_19 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(2, 5) + 4 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_21 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_22 = tmp_20 + tmp_21 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(3, 5) + 4 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var v24 = tmp_22 + _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 4 | 0];
    var v30 = dot($this, $this, 3, colorMatrix, 0);
    var v31 = dot($this, $this, 3, colorMatrix, 1);
    var v32 = dot($this, $this, 3, colorMatrix, 2);
    var v33 = dot($this, $this, 3, colorMatrix, 3);
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_23 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_24 = tmp_23 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(0, 5) + 4 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_25 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_26 = tmp_24 + tmp_25 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(1, 5) + 4 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_27 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_28 = tmp_26 + tmp_27 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(2, 5) + 4 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_29 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_30 = tmp_28 + tmp_29 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(3, 5) + 4 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var v34 = tmp_30 + _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 4 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 0 | 0] = v00;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 1 | 0] = v01;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 2 | 0] = v02;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 3 | 0] = v03;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 4 | 0] = v04;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 0 | 0] = v10;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 1 | 0] = v11;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 2 | 0] = v12;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 3 | 0] = v13;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 4 | 0] = v14;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 0 | 0] = v20;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 1 | 0] = v21;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 2 | 0] = v22;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 3 | 0] = v23;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 4 | 0] = v24;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 0 | 0] = v30;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 1 | 0] = v31;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 2 | 0] = v32;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 3 | 0] = v33;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 4 | 0] = v34;
  }
  function dot($this, m1, row, m2, column) {
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp = _ColorMatrix___get_values__impl__bpwpry(m1)[imul(row, 5) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_0 = tmp * _ColorMatrix___get_values__impl__bpwpry(m2)[imul(0, 5) + column | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_1 = _ColorMatrix___get_values__impl__bpwpry(m1)[imul(row, 5) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_2 = tmp_0 + tmp_1 * _ColorMatrix___get_values__impl__bpwpry(m2)[imul(1, 5) + column | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_3 = _ColorMatrix___get_values__impl__bpwpry(m1)[imul(row, 5) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_4 = tmp_2 + tmp_3 * _ColorMatrix___get_values__impl__bpwpry(m2)[imul(2, 5) + column | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_5 = _ColorMatrix___get_values__impl__bpwpry(m1)[imul(row, 5) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    return tmp_4 + tmp_5 * _ColorMatrix___get_values__impl__bpwpry(m2)[imul(3, 5) + column | 0];
  }
  function ColorMatrix__setToSaturation_impl_j3wbeq($this, sat) {
    ColorMatrix__reset_impl_aaa3ky($this);
    var invSat = 1 - sat;
    var R = 0.213 * invSat;
    var G = 0.715 * invSat;
    var B = 0.072 * invSat;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    var v = R + sat;
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 0 | 0] = v;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 1 | 0] = G;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 2 | 0] = B;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 0 | 0] = R;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    var v_0 = G + sat;
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 1 | 0] = v_0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 2 | 0] = B;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 0 | 0] = R;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 1 | 0] = G;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    var v_1 = B + sat;
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 2 | 0] = v_1;
  }
  function ColorMatrix__setToScale_impl_162gnw($this, redScale, greenScale, blueScale, alphaScale) {
    ColorMatrix__reset_impl_aaa3ky($this);
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 0 | 0] = redScale;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 1 | 0] = greenScale;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 2 | 0] = blueScale;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 3 | 0] = alphaScale;
  }
  function ColorMatrix__setToRotateRed_impl_xjp2wg($this, degrees) {
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.rotateInternal' call
    ColorMatrix__reset_impl_aaa3ky($this);
    var radians = degrees * get_PI() / 180.0;
    // Inline function 'kotlin.math.cos' call
    var cosine = Math.cos(radians);
    // Inline function 'kotlin.math.sin' call
    var sine = Math.sin(radians);
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.setToRotateRed.<anonymous>' call
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 2 | 0] = cosine;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 1 | 0] = cosine;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 2 | 0] = sine;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    var v = -sine;
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 1 | 0] = v;
  }
  function ColorMatrix__setToRotateGreen_impl_7547ya($this, degrees) {
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.rotateInternal' call
    ColorMatrix__reset_impl_aaa3ky($this);
    var radians = degrees * get_PI() / 180.0;
    // Inline function 'kotlin.math.cos' call
    var cosine = Math.cos(radians);
    // Inline function 'kotlin.math.sin' call
    var sine = Math.sin(radians);
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.setToRotateGreen.<anonymous>' call
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 2 | 0] = cosine;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 0 | 0] = cosine;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    var v = -sine;
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 2 | 0] = v;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 0 | 0] = sine;
  }
  function ColorMatrix__setToRotateBlue_impl_68t0yn($this, degrees) {
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.rotateInternal' call
    ColorMatrix__reset_impl_aaa3ky($this);
    var radians = degrees * get_PI() / 180.0;
    // Inline function 'kotlin.math.cos' call
    var cosine = Math.cos(radians);
    // Inline function 'kotlin.math.sin' call
    var sine = Math.sin(radians);
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.setToRotateBlue.<anonymous>' call
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 1 | 0] = cosine;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 0 | 0] = cosine;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 1 | 0] = sine;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    var v = -sine;
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 0 | 0] = v;
  }
  function ColorMatrix__convertRgbToYuv_impl_9vsur8($this) {
    ColorMatrix__reset_impl_aaa3ky($this);
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 0 | 0] = 0.299;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 1 | 0] = 0.587;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 2 | 0] = 0.114;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 0 | 0] = -0.16874;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 1 | 0] = -0.33126;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 2 | 0] = 0.5;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 0 | 0] = 0.5;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 1 | 0] = -0.41869;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 2 | 0] = -0.08131;
  }
  function ColorMatrix__convertYuvToRgb_impl_um2qre($this) {
    ColorMatrix__reset_impl_aaa3ky($this);
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 2 | 0] = 1.402;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 0 | 0] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 1 | 0] = -0.34414;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 2 | 0] = -0.71414;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 0 | 0] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 1 | 0] = 1.772;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 2 | 0] = 0.0;
  }
  function ColorMatrix__toString_impl_7jheub($this) {
    return 'ColorMatrix(values=' + toString($this) + ')';
  }
  function ColorMatrix__hashCode_impl_tanbn6($this) {
    return hashCode($this);
  }
  function ColorMatrix__equals_impl_k9m0uu($this, other) {
    if (!(other instanceof ColorMatrix_0))
      return false;
    var tmp0_other_with_cast = other instanceof ColorMatrix_0 ? other.values_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function ColorMatrix_0(values) {
    this.values_1 = values;
  }
  protoOf(ColorMatrix_0).toString = function () {
    return ColorMatrix__toString_impl_7jheub(this.values_1);
  };
  protoOf(ColorMatrix_0).hashCode = function () {
    return ColorMatrix__hashCode_impl_tanbn6(this.values_1);
  };
  protoOf(ColorMatrix_0).equals = function (other) {
    return ColorMatrix__equals_impl_k9m0uu(this.values_1, other);
  };
  function degrees(radians) {
    return 57.29578 * radians;
  }
  function get_RadiansToDegrees() {
    return RadiansToDegrees;
  }
  var RadiansToDegrees;
  function _FilterQuality___init__impl__nv51aq(value) {
    return value;
  }
  function _FilterQuality___get_value__impl__vmx58a($this) {
    return $this;
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.None_1 = _FilterQuality___init__impl__nv51aq(0);
    this.Low_1 = _FilterQuality___init__impl__nv51aq(1);
    this.Medium_1 = _FilterQuality___init__impl__nv51aq(2);
    this.High_1 = _FilterQuality___init__impl__nv51aq(3);
  }
  protoOf(Companion_4).get_None_wkrz0k_k$ = function () {
    return this.None_1;
  };
  protoOf(Companion_4).get_Low_7s05n6_k$ = function () {
    return this.Low_1;
  };
  protoOf(Companion_4).get_Medium_8fylwf_k$ = function () {
    return this.Medium_1;
  };
  protoOf(Companion_4).get_High_14avfy_k$ = function () {
    return this.High_1;
  };
  var Companion_instance_4;
  function Companion_getInstance_18() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function FilterQuality__toString_impl_i5cfty($this) {
    return $this === Companion_getInstance_18().None_1 ? 'None' : $this === Companion_getInstance_18().Low_1 ? 'Low' : $this === Companion_getInstance_18().Medium_1 ? 'Medium' : $this === Companion_getInstance_18().High_1 ? 'High' : 'Unknown';
  }
  function FilterQuality__hashCode_impl_v4lpcb($this) {
    return $this;
  }
  function FilterQuality__equals_impl_katg2v($this, other) {
    if (!(other instanceof FilterQuality))
      return false;
    if (!($this === (other instanceof FilterQuality ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function FilterQuality(value) {
    Companion_getInstance_18();
    this.value_1 = value;
  }
  protoOf(FilterQuality).toString = function () {
    return FilterQuality__toString_impl_i5cfty(this.value_1);
  };
  protoOf(FilterQuality).hashCode = function () {
    return FilterQuality__hashCode_impl_v4lpcb(this.value_1);
  };
  protoOf(FilterQuality).equals = function (other) {
    return FilterQuality__equals_impl_katg2v(this.value_1, other);
  };
  function _get_One__e5trt7($this) {
    return $this.One_1;
  }
  function _get_NegativeOne__yf0cgw($this) {
    return $this.NegativeOne_1;
  }
  function _get_FP16_SIGN_SHIFT__s6944f($this) {
    return $this.FP16_SIGN_SHIFT_1;
  }
  function _get_FP16_SIGN_MASK__x2ykk3($this) {
    return $this.FP16_SIGN_MASK_1;
  }
  function _get_FP16_EXPONENT_SHIFT__eyg8q7($this) {
    return $this.FP16_EXPONENT_SHIFT_1;
  }
  function _get_FP16_EXPONENT_MASK__k8fogx($this) {
    return $this.FP16_EXPONENT_MASK_1;
  }
  function _get_FP16_SIGNIFICAND_MASK__ngumxz($this) {
    return $this.FP16_SIGNIFICAND_MASK_1;
  }
  function _get_FP16_EXPONENT_BIAS__keco9a($this) {
    return $this.FP16_EXPONENT_BIAS_1;
  }
  function _get_FP16_COMBINED__cpsvbw($this) {
    return $this.FP16_COMBINED_1;
  }
  function _get_FP16_EXPONENT_MAX__fdwxfx($this) {
    return $this.FP16_EXPONENT_MAX_1;
  }
  function _get_FP32_SIGN_SHIFT__phiacl($this) {
    return $this.FP32_SIGN_SHIFT_1;
  }
  function _get_FP32_EXPONENT_SHIFT__yiiezt($this) {
    return $this.FP32_EXPONENT_SHIFT_1;
  }
  function _get_FP32_EXPONENT_MASK__cq9esb($this) {
    return $this.FP32_EXPONENT_MASK_1;
  }
  function _get_FP32_SIGNIFICAND_MASK__ivg64z($this) {
    return $this.FP32_SIGNIFICAND_MASK_1;
  }
  function _get_FP32_EXPONENT_BIAS__cw6eko($this) {
    return $this.FP32_EXPONENT_BIAS_1;
  }
  function _get_FP32_QNAN_MASK__c2hda8($this) {
    return $this.FP32_QNAN_MASK_1;
  }
  function _get_FP32_DENORMAL_MAGIC__or798b($this) {
    return $this.FP32_DENORMAL_MAGIC_1;
  }
  function _get_FP32_DENORMAL_FLOAT__rwbx3e($this) {
    return $this.FP32_DENORMAL_FLOAT_1;
  }
  function toCompareValue($this, value) {
    var tmp;
    if (!((value & 32768) === 0)) {
      tmp = 32768 - (value & 65535) | 0;
    } else {
      tmp = value & 65535;
    }
    return tmp;
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
    return _Float16___init__impl__fckrew(floatToHalf(Companion_getInstance_19(), value));
  }
  function _Float16___init__impl__fckrew_1(value) {
    return _Float16___init__impl__fckrew_0(value);
  }
  function Float16__toByte_impl_mggro7($this) {
    return toByte(numberToInt(Float16__toFloat_impl_6i8dal($this)));
  }
  function Float16__toShort_impl_lt4jwz($this) {
    return toShort(numberToInt(Float16__toFloat_impl_6i8dal($this)));
  }
  function Float16__toInt_impl_6odjmi($this) {
    return numberToInt(Float16__toFloat_impl_6i8dal($this));
  }
  function Float16__toLong_impl_dl0d11($this) {
    return numberToLong(Float16__toFloat_impl_6i8dal($this));
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
        FloatCompanionObject_getInstance();
        var bits_0 = 1056964608 + m | 0;
        var o = floatFromBits(bits_0);
        o = o - Companion_getInstance_19().FP32_DENORMAL_FLOAT_1;
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
    FloatCompanionObject_getInstance();
    return floatFromBits(out);
  }
  function Float16__toDouble_impl_915zuo($this) {
    return Float16__toFloat_impl_6i8dal($this);
  }
  function Float16__toBits_impl_k7yqp7($this) {
    var tmp;
    if (Float16__isNaN_impl_8e8jh($this)) {
      tmp = _Float16___get_halfValue__impl__89tmwx(Companion_getInstance_19().NaN_1);
    } else {
      tmp = _Float16___get_halfValue__impl__89tmwx($this) & 65535;
    }
    return tmp;
  }
  function Float16__toRawBits_impl_4w2cf9($this) {
    return _Float16___get_halfValue__impl__89tmwx($this) & 65535;
  }
  function Float16__toString_impl_at3wqo($this) {
    return Float16__toFloat_impl_6i8dal($this).toString();
  }
  function Float16__compareTo_impl_vr2ku($this, other) {
    if (Float16__isNaN_impl_8e8jh($this)) {
      return Float16__isNaN_impl_8e8jh(other) ? 0 : 1;
    } else if (Float16__isNaN_impl_8e8jh(other)) {
      return -1;
    }
    return compareTo(toCompareValue(Companion_getInstance_19(), _Float16___get_halfValue__impl__89tmwx($this)), toCompareValue(Companion_getInstance_19(), _Float16___get_halfValue__impl__89tmwx(other)));
  }
  function Float16__compareTo_impl_vr2ku_0($this, other) {
    return Float16__compareTo_impl_vr2ku($this.halfValue_1, other instanceof Float16 ? other.halfValue_1 : THROW_CCE());
  }
  function _Float16___get_sign__impl__t10b9g($this) {
    if (Float16__isNaN_impl_8e8jh($this)) {
      return Companion_getInstance_19().NaN_1;
    }
    if (Float16__compareTo_impl_vr2ku($this, Companion_getInstance_19().NegativeZero_1) < 0)
      return Companion_getInstance_19().NegativeOne_1;
    else if (Float16__compareTo_impl_vr2ku($this, Companion_getInstance_19().PositiveZero_1) > 0)
      return Companion_getInstance_19().One_1;
    else
      return $this;
  }
  function Float16__withSign_impl_b0tr55($this, sign) {
    return _Float16___init__impl__fckrew(toShort(_Float16___get_halfValue__impl__89tmwx(sign) & 32768 | _Float16___get_halfValue__impl__89tmwx($this) & 32767));
  }
  function Float16__absoluteValue_impl_nv6ulo($this) {
    return _Float16___init__impl__fckrew(toShort(_Float16___get_halfValue__impl__89tmwx($this) & 32767));
  }
  function Float16__round_impl_4qwlz4($this) {
    var bits = _Float16___get_halfValue__impl__89tmwx($this) & 65535;
    var e = bits & 32767;
    var result = bits;
    if (e < 15360) {
      result = result & 32768;
      result = result | 15360 & (e >= 14336 ? 65535 : 0);
    } else if (e < 25600) {
      e = 25 - (e >> 10) | 0;
      var mask = (1 << e) - 1 | 0;
      result = result + (1 << (e - 1 | 0)) | 0;
      result = result & ~mask;
    }
    return _Float16___init__impl__fckrew(toShort(result));
  }
  function Float16__ceil_impl_6fo2k9($this) {
    var bits = _Float16___get_halfValue__impl__89tmwx($this) & 65535;
    var e = bits & 32767;
    var result = bits;
    if (e < 15360) {
      result = result & 32768;
      result = result | 15360 & (-(~(bits >> 15) & (!(e === 0) ? 1 : 0)) | 0);
    } else if (e < 25600) {
      e = 25 - (e >> 10) | 0;
      var mask = (1 << e) - 1 | 0;
      result = result + (mask & ((bits >> 15) - 1 | 0)) | 0;
      result = result & ~mask;
    }
    return _Float16___init__impl__fckrew(toShort(result));
  }
  function Float16__floor_impl_rpasqm($this) {
    var bits = _Float16___get_halfValue__impl__89tmwx($this) & 65535;
    var e = bits & 32767;
    var result = bits;
    if (e < 15360) {
      result = result & 32768;
      result = result | 15360 & (bits > 32768 ? 65535 : 0);
    } else if (e < 25600) {
      e = 25 - (e >> 10) | 0;
      var mask = (1 << e) - 1 | 0;
      result = result + (mask & (-(bits >> 15) | 0)) | 0;
      result = result & ~mask;
    }
    return _Float16___init__impl__fckrew(toShort(result));
  }
  function Float16__trunc_impl_ud66ce($this) {
    var bits = _Float16___get_halfValue__impl__89tmwx($this) & 65535;
    var e = bits & 32767;
    var result = bits;
    if (e < 15360) {
      result = result & 32768;
    } else if (e < 25600) {
      e = 25 - (e >> 10) | 0;
      var mask = (1 << e) - 1 | 0;
      result = result & ~mask;
    }
    return _Float16___init__impl__fckrew(toShort(result));
  }
  function _Float16___get_exponent__impl__3tixn6($this) {
    return ((_Float16___get_halfValue__impl__89tmwx($this) >>> 10 | 0) & 31) - 15 | 0;
  }
  function _Float16___get_significand__impl__ku8yuy($this) {
    return _Float16___get_halfValue__impl__89tmwx($this) & 1023;
  }
  function Float16__isNaN_impl_8e8jh($this) {
    return (_Float16___get_halfValue__impl__89tmwx($this) & 32767) > 31744;
  }
  function Float16__isInfinite_impl_9h5mgi($this) {
    return (_Float16___get_halfValue__impl__89tmwx($this) & 32767) === 31744;
  }
  function Float16__isFinite_impl_8t6ust($this) {
    return !((_Float16___get_halfValue__impl__89tmwx($this) & 32767) === 31744);
  }
  function Float16__isNormalized_impl_l312k5($this) {
    return !((_Float16___get_halfValue__impl__89tmwx($this) & 31744) === 0) ? !((_Float16___get_halfValue__impl__89tmwx($this) & 31744) === 31744) : false;
  }
  function Float16__toHexString_impl_o1d02l($this) {
    var o = StringBuilder_init_$Create$();
    var bits = _Float16___get_halfValue__impl__89tmwx($this) & 65535;
    var s = bits >>> 15 | 0;
    var e = (bits >>> 10 | 0) & 31;
    var m = bits & 1023;
    if (e === 31) {
      if (m === 0) {
        if (!(s === 0)) {
          o.append_am5a4z_k$(_Char___init__impl__6a9atx(45));
        }
        o.append_22ad7x_k$('Infinity');
      } else {
        o.append_22ad7x_k$('NaN');
      }
    } else {
      if (s === 1) {
        o.append_am5a4z_k$(_Char___init__impl__6a9atx(45));
      }
      if (e === 0) {
        if (m === 0) {
          o.append_22ad7x_k$('0x0.0p0');
        } else {
          o.append_22ad7x_k$('0x0.');
          var significand = toString_0(m, 16);
          // Inline function 'kotlin.text.replaceFirst' call
          // Inline function 'kotlin.text.toRegex' call
          var tmp$ret$1 = Regex_init_$Create$('0{2,}$').replaceFirst_5kvbqf_k$(significand, '');
          o.append_22ad7x_k$(tmp$ret$1);
          o.append_22ad7x_k$('p-14');
        }
      } else {
        o.append_22ad7x_k$('0x1.');
        var significand_0 = toString_0(m, 16);
        // Inline function 'kotlin.text.replaceFirst' call
        // Inline function 'kotlin.text.toRegex' call
        var tmp$ret$3 = Regex_init_$Create$('0{2,}$').replaceFirst_5kvbqf_k$(significand_0, '');
        o.append_22ad7x_k$(tmp$ret$3);
        o.append_am5a4z_k$(_Char___init__impl__6a9atx(112));
        o.append_22ad7x_k$((e - 15 | 0).toString());
      }
    }
    return o.toString();
  }
  function Companion_5() {
    Companion_instance_5 = this;
    this.Size_1 = 16;
    this.Epsilon_1 = _Float16___init__impl__fckrew(5120);
    this.MaxExponent_1 = 15;
    this.MinExponent_1 = -14;
    this.LowestValue_1 = _Float16___init__impl__fckrew(-1025);
    this.MaxValue_1 = _Float16___init__impl__fckrew(31743);
    this.MinNormal_1 = _Float16___init__impl__fckrew(1024);
    this.MinValue_1 = _Float16___init__impl__fckrew(1);
    this.NaN_1 = _Float16___init__impl__fckrew(32256);
    this.NegativeInfinity_1 = _Float16___init__impl__fckrew(-1024);
    this.NegativeZero_1 = _Float16___init__impl__fckrew(-32768);
    this.PositiveInfinity_1 = _Float16___init__impl__fckrew(31744);
    this.PositiveZero_1 = _Float16___init__impl__fckrew(0);
    this.One_1 = _Float16___init__impl__fckrew_0(1.0);
    this.NegativeOne_1 = _Float16___init__impl__fckrew_0(-1.0);
    this.FP16_SIGN_SHIFT_1 = 15;
    this.FP16_SIGN_MASK_1 = 32768;
    this.FP16_EXPONENT_SHIFT_1 = 10;
    this.FP16_EXPONENT_MASK_1 = 31;
    this.FP16_SIGNIFICAND_MASK_1 = 1023;
    this.FP16_EXPONENT_BIAS_1 = 15;
    this.FP16_COMBINED_1 = 32767;
    this.FP16_EXPONENT_MAX_1 = 31744;
    this.FP32_SIGN_SHIFT_1 = 31;
    this.FP32_EXPONENT_SHIFT_1 = 23;
    this.FP32_EXPONENT_MASK_1 = 255;
    this.FP32_SIGNIFICAND_MASK_1 = 8388607;
    this.FP32_EXPONENT_BIAS_1 = 127;
    this.FP32_QNAN_MASK_1 = 4194304;
    this.FP32_DENORMAL_MAGIC_1 = 1056964608;
    var tmp = this;
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var bits = 1056964608;
    tmp.FP32_DENORMAL_FLOAT_1 = floatFromBits(bits);
  }
  protoOf(Companion_5).get_Size_wo9w8a_k$ = function () {
    return this.Size_1;
  };
  protoOf(Companion_5).get_Epsilon_21qsq_k$ = function () {
    return this.Epsilon_1;
  };
  protoOf(Companion_5).get_MaxExponent_rspx06_k$ = function () {
    return this.MaxExponent_1;
  };
  protoOf(Companion_5).get_MinExponent_w12emw_k$ = function () {
    return this.MinExponent_1;
  };
  protoOf(Companion_5).get_LowestValue_agi8jl_k$ = function () {
    return this.LowestValue_1;
  };
  protoOf(Companion_5).get_MaxValue_7l14jj_k$ = function () {
    return this.MaxValue_1;
  };
  protoOf(Companion_5).get_MinNormal_yx339j_k$ = function () {
    return this.MinNormal_1;
  };
  protoOf(Companion_5).get_MinValue_7ty78v_k$ = function () {
    return this.MinValue_1;
  };
  protoOf(Companion_5).get_NaN_trd9sr_k$ = function () {
    return this.NaN_1;
  };
  protoOf(Companion_5).get_NegativeInfinity_r383ap_k$ = function () {
    return this.NegativeInfinity_1;
  };
  protoOf(Companion_5).get_NegativeZero_lfwgfl_k$ = function () {
    return this.NegativeZero_1;
  };
  protoOf(Companion_5).get_PositiveInfinity_xrv0q5_k$ = function () {
    return this.PositiveInfinity_1;
  };
  protoOf(Companion_5).get_PositiveZero_63k1sj_k$ = function () {
    return this.PositiveZero_1;
  };
  var Companion_instance_5;
  function Companion_getInstance_19() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function Float16__hashCode_impl_ay2027($this) {
    return $this;
  }
  function Float16__equals_impl_7m8a8d($this, other) {
    if (!(other instanceof Float16))
      return false;
    if (!($this === (other instanceof Float16 ? other.halfValue_1 : THROW_CCE())))
      return false;
    return true;
  }
  function Float16(halfValue) {
    Companion_getInstance_19();
    this.halfValue_1 = halfValue;
  }
  protoOf(Float16).toString = function () {
    return Float16__toString_impl_at3wqo(this.halfValue_1);
  };
  protoOf(Float16).compareTo_y745qz_k$ = function (other) {
    return Float16__compareTo_impl_vr2ku(this.halfValue_1, other);
  };
  protoOf(Float16).compareTo_hpufkf_k$ = function (other) {
    return Float16__compareTo_impl_vr2ku_0(this, other);
  };
  protoOf(Float16).hashCode = function () {
    return Float16__hashCode_impl_ay2027(this.halfValue_1);
  };
  protoOf(Float16).equals = function (other) {
    return Float16__equals_impl_7m8a8d(this.halfValue_1, other);
  };
  function Companion_6() {
    Companion_instance_6 = this;
  }
  var Companion_instance_6;
  function Companion_getInstance_20() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function ImageBitmap() {
  }
  function ImageBitmap_0(width, height, config, hasAlpha, colorSpace) {
    config = config === VOID ? Companion_getInstance_21().Argb8888__1 : config;
    hasAlpha = hasAlpha === VOID ? true : hasAlpha;
    colorSpace = colorSpace === VOID ? ColorSpaces_getInstance().get_Srgb_woa2g3_k$() : colorSpace;
    return ActualImageBitmap(width, height, config, hasAlpha, colorSpace);
  }
  function _ImageBitmapConfig___init__impl__wfx9yl(value) {
    return value;
  }
  function _ImageBitmapConfig___get_value__impl__fqx4u7($this) {
    return $this;
  }
  function Companion_7() {
    Companion_instance_7 = this;
    this.Argb8888__1 = _ImageBitmapConfig___init__impl__wfx9yl(0);
    this.Alpha8__1 = _ImageBitmapConfig___init__impl__wfx9yl(1);
    this.Rgb565__1 = _ImageBitmapConfig___init__impl__wfx9yl(2);
    this.F16__1 = _ImageBitmapConfig___init__impl__wfx9yl(3);
    this.Gpu_1 = _ImageBitmapConfig___init__impl__wfx9yl(4);
  }
  protoOf(Companion_7).get_Argb8888_epitdf_k$ = function () {
    return this.Argb8888__1;
  };
  protoOf(Companion_7).get_Alpha8_8qn3sx_k$ = function () {
    return this.Alpha8__1;
  };
  protoOf(Companion_7).get_Rgb565_qf3bri_k$ = function () {
    return this.Rgb565__1;
  };
  protoOf(Companion_7).get_F16_tc2i3k_k$ = function () {
    return this.F16__1;
  };
  protoOf(Companion_7).get_Gpu_jdwuw1_k$ = function () {
    return this.Gpu_1;
  };
  var Companion_instance_7;
  function Companion_getInstance_21() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function ImageBitmapConfig__toString_impl_dfv42d($this) {
    return $this === Companion_getInstance_21().Argb8888__1 ? 'Argb8888' : $this === Companion_getInstance_21().Alpha8__1 ? 'Alpha8' : $this === Companion_getInstance_21().Rgb565__1 ? 'Rgb565' : $this === Companion_getInstance_21().F16__1 ? 'F16' : $this === Companion_getInstance_21().Gpu_1 ? 'Gpu' : 'Unknown';
  }
  function ImageBitmapConfig__hashCode_impl_8basqi($this) {
    return $this;
  }
  function ImageBitmapConfig__equals_impl_hqcsv2($this, other) {
    if (!(other instanceof ImageBitmapConfig))
      return false;
    if (!($this === (other instanceof ImageBitmapConfig ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function ImageBitmapConfig(value) {
    Companion_getInstance_21();
    this.value_1 = value;
  }
  protoOf(ImageBitmapConfig).toString = function () {
    return ImageBitmapConfig__toString_impl_dfv42d(this.value_1);
  };
  protoOf(ImageBitmapConfig).hashCode = function () {
    return ImageBitmapConfig__hashCode_impl_8basqi(this.value_1);
  };
  protoOf(ImageBitmapConfig).equals = function (other) {
    return ImageBitmapConfig__equals_impl_hqcsv2(this.value_1, other);
  };
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
  function Matrix__get_impl_xogbpk($this, row, column) {
    return _Matrix___get_values__impl__fblr7b($this)[imul(row, 4) + column | 0];
  }
  function Matrix__set_impl_s2l54c($this, row, column, v) {
    _Matrix___get_values__impl__fblr7b($this)[imul(row, 4) + column | 0] = v;
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
    return Offset_0(tmp_3, pZ * (tmp_5 + tmp$ret$8));
  }
  function Matrix__map_impl_7meu7m_0($this, rect) {
    var p0 = Matrix__map_impl_7meu7m($this, Offset_0(rect.get_left_woprgw_k$(), rect.get_top_18ivbo_k$()));
    var p1 = Matrix__map_impl_7meu7m($this, Offset_0(rect.get_left_woprgw_k$(), rect.get_bottom_bj8ras_k$()));
    var p3 = Matrix__map_impl_7meu7m($this, Offset_0(rect.get_right_ixz7xv_k$(), rect.get_top_18ivbo_k$()));
    var p4 = Matrix__map_impl_7meu7m($this, Offset_0(rect.get_right_ixz7xv_k$(), rect.get_bottom_bj8ras_k$()));
    // Inline function 'kotlin.math.min' call
    // Inline function 'kotlin.math.min' call
    var a = _Offset___get_x__impl__xvi35n(p0);
    var b = _Offset___get_x__impl__xvi35n(p1);
    var a_0 = Math.min(a, b);
    // Inline function 'kotlin.math.min' call
    var a_1 = _Offset___get_x__impl__xvi35n(p3);
    var b_0 = _Offset___get_x__impl__xvi35n(p4);
    var b_1 = Math.min(a_1, b_0);
    var left = Math.min(a_0, b_1);
    // Inline function 'kotlin.math.min' call
    // Inline function 'kotlin.math.min' call
    var a_2 = _Offset___get_y__impl__8bzhra(p0);
    var b_2 = _Offset___get_y__impl__8bzhra(p1);
    var a_3 = Math.min(a_2, b_2);
    // Inline function 'kotlin.math.min' call
    var a_4 = _Offset___get_y__impl__8bzhra(p3);
    var b_3 = _Offset___get_y__impl__8bzhra(p4);
    var b_4 = Math.min(a_4, b_3);
    var top = Math.min(a_3, b_4);
    // Inline function 'kotlin.math.max' call
    // Inline function 'kotlin.math.max' call
    var a_5 = _Offset___get_x__impl__xvi35n(p0);
    var b_5 = _Offset___get_x__impl__xvi35n(p1);
    var a_6 = Math.max(a_5, b_5);
    // Inline function 'kotlin.math.max' call
    var a_7 = _Offset___get_x__impl__xvi35n(p3);
    var b_6 = _Offset___get_x__impl__xvi35n(p4);
    var b_7 = Math.max(a_7, b_6);
    var right = Math.max(a_6, b_7);
    // Inline function 'kotlin.math.max' call
    // Inline function 'kotlin.math.max' call
    var a_8 = _Offset___get_y__impl__8bzhra(p0);
    var b_8 = _Offset___get_y__impl__8bzhra(p1);
    var a_9 = Math.max(a_8, b_8);
    // Inline function 'kotlin.math.max' call
    var a_10 = _Offset___get_y__impl__8bzhra(p3);
    var b_9 = _Offset___get_y__impl__8bzhra(p4);
    var b_10 = Math.max(a_10, b_9);
    var bottom = Math.max(a_9, b_10);
    return new Rect(left, top, right, bottom);
  }
  function Matrix__map_impl_7meu7m_1($this, rect) {
    var p0 = Matrix__map_impl_7meu7m($this, Offset_0(rect.get_left_woprgw_k$(), rect.get_top_18ivbo_k$()));
    var p1 = Matrix__map_impl_7meu7m($this, Offset_0(rect.get_left_woprgw_k$(), rect.get_bottom_bj8ras_k$()));
    var p3 = Matrix__map_impl_7meu7m($this, Offset_0(rect.get_right_ixz7xv_k$(), rect.get_top_18ivbo_k$()));
    var p4 = Matrix__map_impl_7meu7m($this, Offset_0(rect.get_right_ixz7xv_k$(), rect.get_bottom_bj8ras_k$()));
    // Inline function 'kotlin.math.min' call
    // Inline function 'kotlin.math.min' call
    var a = _Offset___get_x__impl__xvi35n(p0);
    var b = _Offset___get_x__impl__xvi35n(p1);
    var a_0 = Math.min(a, b);
    // Inline function 'kotlin.math.min' call
    var a_1 = _Offset___get_x__impl__xvi35n(p3);
    var b_0 = _Offset___get_x__impl__xvi35n(p4);
    var b_1 = Math.min(a_1, b_0);
    var tmp$ret$2 = Math.min(a_0, b_1);
    rect.set_left_bnynok_k$(tmp$ret$2);
    // Inline function 'kotlin.math.min' call
    // Inline function 'kotlin.math.min' call
    var a_2 = _Offset___get_y__impl__8bzhra(p0);
    var b_2 = _Offset___get_y__impl__8bzhra(p1);
    var a_3 = Math.min(a_2, b_2);
    // Inline function 'kotlin.math.min' call
    var a_4 = _Offset___get_y__impl__8bzhra(p3);
    var b_3 = _Offset___get_y__impl__8bzhra(p4);
    var b_4 = Math.min(a_4, b_3);
    var tmp$ret$5 = Math.min(a_3, b_4);
    rect.set_top_q4a9n4_k$(tmp$ret$5);
    // Inline function 'kotlin.math.max' call
    // Inline function 'kotlin.math.max' call
    var a_5 = _Offset___get_x__impl__xvi35n(p0);
    var b_5 = _Offset___get_x__impl__xvi35n(p1);
    var a_6 = Math.max(a_5, b_5);
    // Inline function 'kotlin.math.max' call
    var a_7 = _Offset___get_x__impl__xvi35n(p3);
    var b_6 = _Offset___get_x__impl__xvi35n(p4);
    var b_7 = Math.max(a_7, b_6);
    var tmp$ret$8 = Math.max(a_6, b_7);
    rect.set_right_ihmog9_k$(tmp$ret$8);
    // Inline function 'kotlin.math.max' call
    // Inline function 'kotlin.math.max' call
    var a_8 = _Offset___get_y__impl__8bzhra(p0);
    var b_8 = _Offset___get_y__impl__8bzhra(p1);
    var a_9 = Math.max(a_8, b_8);
    // Inline function 'kotlin.math.max' call
    var a_10 = _Offset___get_y__impl__8bzhra(p3);
    var b_9 = _Offset___get_y__impl__8bzhra(p4);
    var b_10 = Math.max(a_10, b_9);
    var tmp$ret$11 = Math.max(a_9, b_10);
    rect.set_bottom_hrdqf4_k$(tmp$ret$11);
  }
  function Matrix__timesAssign_impl_oas521($this, m) {
    var v00 = dot_0($this, 0, m, 0);
    var v01 = dot_0($this, 0, m, 1);
    var v02 = dot_0($this, 0, m, 2);
    var v03 = dot_0($this, 0, m, 3);
    var v10 = dot_0($this, 1, m, 0);
    var v11 = dot_0($this, 1, m, 1);
    var v12 = dot_0($this, 1, m, 2);
    var v13 = dot_0($this, 1, m, 3);
    var v20 = dot_0($this, 2, m, 0);
    var v21 = dot_0($this, 2, m, 1);
    var v22 = dot_0($this, 2, m, 2);
    var v23 = dot_0($this, 2, m, 3);
    var v30 = dot_0($this, 3, m, 0);
    var v31 = dot_0($this, 3, m, 1);
    var v32 = dot_0($this, 3, m, 2);
    var v33 = dot_0($this, 3, m, 3);
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
  function Matrix__invert_impl_9xyo46($this) {
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a00 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a01 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a02 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a03 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a10 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a11 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a12 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a13 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a20 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a21 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a22 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a23 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a30 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a31 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a32 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a33 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 3 | 0];
    var b00 = a00 * a11 - a01 * a10;
    var b01 = a00 * a12 - a02 * a10;
    var b02 = a00 * a13 - a03 * a10;
    var b03 = a01 * a12 - a02 * a11;
    var b04 = a01 * a13 - a03 * a11;
    var b05 = a02 * a13 - a03 * a12;
    var b06 = a20 * a31 - a21 * a30;
    var b07 = a20 * a32 - a22 * a30;
    var b08 = a20 * a33 - a23 * a30;
    var b09 = a21 * a32 - a22 * a31;
    var b10 = a21 * a33 - a23 * a31;
    var b11 = a22 * a33 - a23 * a32;
    var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    if (det === 0.0) {
      return Unit_getInstance();
    }
    var invDet = 1.0 / det;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v = (a11 * b11 - a12 * b10 + a13 * b09) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0] = v;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_0 = (-a01 * b11 + a02 * b10 - a03 * b09) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0] = v_0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_1 = (a31 * b05 - a32 * b04 + a33 * b03) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] = v_1;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_2 = (-a21 * b05 + a22 * b04 - a23 * b03) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0] = v_2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_3 = (-a10 * b11 + a12 * b08 - a13 * b07) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0] = v_3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_4 = (a00 * b11 - a02 * b08 + a03 * b07) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0] = v_4;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_5 = (-a30 * b05 + a32 * b02 - a33 * b01) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] = v_5;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_6 = (a20 * b05 - a22 * b02 + a23 * b01) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0] = v_6;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_7 = (a10 * b10 - a11 * b08 + a13 * b06) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0] = v_7;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_8 = (-a00 * b10 + a01 * b08 - a03 * b06) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0] = v_8;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_9 = (a30 * b04 - a31 * b02 + a33 * b00) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0] = v_9;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_10 = (-a20 * b04 + a21 * b02 - a23 * b00) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 3 | 0] = v_10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_11 = (-a10 * b09 + a11 * b07 - a12 * b06) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0] = v_11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_12 = (a00 * b09 - a01 * b07 + a02 * b06) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0] = v_12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_13 = (-a30 * b03 + a31 * b01 - a32 * b00) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0] = v_13;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_14 = (a20 * b03 - a21 * b01 + a22 * b00) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 3 | 0] = v_14;
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
  function Matrix__setFrom_impl_5fylsu($this, matrix) {
    var inductionVariable = 0;
    if (inductionVariable <= 15)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _Matrix___get_values__impl__fblr7b($this)[i] = _Matrix___get_values__impl__fblr7b(matrix)[i];
      }
       while (inductionVariable <= 15);
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
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = $super;
      tmp = (tmp_0 == null ? null : new Matrix(tmp_0)).scale_4b4tia_k$.call(new Matrix($this), x, y, z);
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
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = $super;
      tmp = (tmp_0 == null ? null : new Matrix(tmp_0)).translate_bcz2fu_k$.call(new Matrix($this), x, y, z);
    }
    return tmp;
  }
  function Companion_8() {
    Companion_instance_8 = this;
    this.ScaleX_1 = 0;
    this.SkewY_1 = 1;
    this.Perspective0__1 = 3;
    this.SkewX_1 = 4;
    this.ScaleY_1 = 5;
    this.Perspective1__1 = 7;
    this.ScaleZ_1 = 10;
    this.TranslateX_1 = 12;
    this.TranslateY_1 = 13;
    this.TranslateZ_1 = 14;
    this.Perspective2__1 = 15;
  }
  protoOf(Companion_8).get_ScaleX_48mlbr_k$ = function () {
    return this.ScaleX_1;
  };
  protoOf(Companion_8).get_SkewY_igyudi_k$ = function () {
    return this.SkewY_1;
  };
  protoOf(Companion_8).get_Perspective0_s6kzs3_k$ = function () {
    return this.Perspective0__1;
  };
  protoOf(Companion_8).get_SkewX_igyudh_k$ = function () {
    return this.SkewX_1;
  };
  protoOf(Companion_8).get_ScaleY_48mlbs_k$ = function () {
    return this.ScaleY_1;
  };
  protoOf(Companion_8).get_Perspective1_s6kzs2_k$ = function () {
    return this.Perspective1__1;
  };
  protoOf(Companion_8).get_ScaleZ_48mlbt_k$ = function () {
    return this.ScaleZ_1;
  };
  protoOf(Companion_8).get_TranslateX_folfnx_k$ = function () {
    return this.TranslateX_1;
  };
  protoOf(Companion_8).get_TranslateY_folfnw_k$ = function () {
    return this.TranslateY_1;
  };
  protoOf(Companion_8).get_TranslateZ_folfnv_k$ = function () {
    return this.TranslateZ_1;
  };
  protoOf(Companion_8).get_Perspective2_s6kzs1_k$ = function () {
    return this.Perspective2__1;
  };
  var Companion_instance_8;
  function Companion_getInstance_22() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function Matrix__hashCode_impl_s9ntm9($this) {
    return hashCode($this);
  }
  function Matrix__equals_impl_g5p8p9($this, other) {
    if (!(other instanceof Matrix))
      return false;
    var tmp0_other_with_cast = other instanceof Matrix ? other.values_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Matrix(values) {
    Companion_getInstance_22();
    this.values_1 = values;
  }
  protoOf(Matrix).toString = function () {
    return Matrix__toString_impl_l0abk0(this.values_1);
  };
  protoOf(Matrix).hashCode = function () {
    return Matrix__hashCode_impl_s9ntm9(this.values_1);
  };
  protoOf(Matrix).equals = function (other) {
    return Matrix__equals_impl_g5p8p9(this.values_1, other);
  };
  function dot_0(m1, row, m2, column) {
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
    this.rect_1 = rect;
  }
  protoOf(Rectangle).get_rect_wotlbh_k$ = function () {
    return this.rect_1;
  };
  protoOf(Rectangle).get_bounds_bj99ku_k$ = function () {
    return this.rect_1;
  };
  protoOf(Rectangle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rectangle))
      return false;
    if (!this.rect_1.equals(other.rect_1))
      return false;
    return true;
  };
  protoOf(Rectangle).hashCode = function () {
    return this.rect_1.hashCode();
  };
  function Rounded(roundRect) {
    Outline.call(this);
    this.roundRect_1 = roundRect;
    var tmp = this;
    var tmp_0;
    if (!hasSameCornerRadius(this.roundRect_1)) {
      // Inline function 'kotlin.apply' call
      var this_0 = Path_0();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.Rounded.<anonymous>' call
      this_0.addRoundRect_w1epq0_k$(this.roundRect_1);
      tmp_0 = this_0;
    } else {
      tmp_0 = null;
    }
    tmp.roundRectPath_1 = tmp_0;
  }
  protoOf(Rounded).get_roundRect_8fhall_k$ = function () {
    return this.roundRect_1;
  };
  protoOf(Rounded).get_roundRectPath_kvhz1q_k$ = function () {
    return this.roundRectPath_1;
  };
  protoOf(Rounded).get_bounds_bj99ku_k$ = function () {
    return get_boundingRect(this.roundRect_1);
  };
  protoOf(Rounded).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rounded))
      return false;
    if (!this.roundRect_1.equals(other.roundRect_1))
      return false;
    return true;
  };
  protoOf(Rounded).hashCode = function () {
    return this.roundRect_1.hashCode();
  };
  function Generic(path) {
    Outline.call(this);
    this.path_1 = path;
  }
  protoOf(Generic).get_path_wos8ry_k$ = function () {
    return this.path_1;
  };
  protoOf(Generic).get_bounds_bj99ku_k$ = function () {
    return this.path_1.getBounds_568lnv_k$();
  };
  protoOf(Generic).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Generic))
      return false;
    if (!equals(this.path_1, other.path_1))
      return false;
    return true;
  };
  protoOf(Generic).hashCode = function () {
    return hashCode(this.path_1);
  };
  function Outline() {
  }
  function hasSameCornerRadius(_this__u8e3s4) {
    var sameRadiusX = (_CornerRadius___get_x__impl__1594cn(_this__u8e3s4.get_bottomLeftCornerRadius_9r65ws_k$()) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.get_bottomRightCornerRadius_166w49_k$()) ? _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.get_bottomRightCornerRadius_166w49_k$()) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.get_topRightCornerRadius_kxqun3_k$()) : false) ? _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.get_topRightCornerRadius_kxqun3_k$()) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.get_topLeftCornerRadius_91hulg_k$()) : false;
    var sameRadiusY = (_CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.get_bottomLeftCornerRadius_9r65ws_k$()) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.get_bottomRightCornerRadius_166w49_k$()) ? _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.get_bottomRightCornerRadius_166w49_k$()) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.get_topRightCornerRadius_kxqun3_k$()) : false) ? _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.get_topRightCornerRadius_kxqun3_k$()) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.get_topLeftCornerRadius_91hulg_k$()) : false;
    return sameRadiusX ? sameRadiusY : false;
  }
  function drawOutline(_this__u8e3s4, outline, color, alpha, style, colorFilter, blendMode) {
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_43().get_DefaultBlendMode_svct2m_k$() : blendMode;
    // Inline function 'androidx.compose.ui.graphics.drawOutlineHelper' call
    var tmp;
    if (outline instanceof Rectangle) {
      var rect = outline.rect_1;
      _this__u8e3s4.drawRect_6sw8uj_k$(color, topLeft(rect), size(rect), alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      if (outline instanceof Rounded) {
        var path = outline.roundRectPath_1;
        var tmp_0;
        if (!(path == null)) {
          _this__u8e3s4.drawPath_mbkbcp_k$(path, color, alpha, style, colorFilter, blendMode);
          tmp_0 = Unit_getInstance();
        } else {
          var rrect = outline.roundRect_1;
          var radius = _CornerRadius___get_x__impl__1594cn(rrect.get_bottomLeftCornerRadius_9r65ws_k$());
          var tmp0_topLeft = topLeft_0(rrect);
          var tmp1_size = size_0(rrect);
          var tmp2_cornerRadius = CornerRadius(radius);
          _this__u8e3s4.drawRoundRect_bjcn4f_k$(color, tmp0_topLeft, tmp1_size, tmp2_cornerRadius, style, alpha, colorFilter, blendMode);
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        if (outline instanceof Generic) {
          var path_0 = outline.path_1;
          _this__u8e3s4.drawPath_mbkbcp_k$(path_0, color, alpha, style, colorFilter, blendMode);
          tmp = Unit_getInstance();
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function drawOutline_0(_this__u8e3s4, outline, brush, alpha, style, colorFilter, blendMode) {
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_43().get_DefaultBlendMode_svct2m_k$() : blendMode;
    // Inline function 'androidx.compose.ui.graphics.drawOutlineHelper' call
    var tmp;
    if (outline instanceof Rectangle) {
      var rect = outline.rect_1;
      _this__u8e3s4.drawRect_t09b9w_k$(brush, topLeft(rect), size(rect), alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      if (outline instanceof Rounded) {
        var path = outline.roundRectPath_1;
        var tmp_0;
        if (!(path == null)) {
          _this__u8e3s4.drawPath_2qit1e_k$(path, brush, alpha, style, colorFilter, blendMode);
          tmp_0 = Unit_getInstance();
        } else {
          var rrect = outline.roundRect_1;
          var radius = _CornerRadius___get_x__impl__1594cn(rrect.get_bottomLeftCornerRadius_9r65ws_k$());
          _this__u8e3s4.drawRoundRect_gbkwec_k$(brush, topLeft_0(rrect), size_0(rrect), CornerRadius(radius), alpha, style, colorFilter, blendMode);
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        if (outline instanceof Generic) {
          var path_0 = outline.path_1;
          _this__u8e3s4.drawPath_2qit1e_k$(path_0, brush, alpha, style, colorFilter, blendMode);
          tmp = Unit_getInstance();
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function drawOutlineHelper(_this__u8e3s4, outline, drawRectBlock, drawRoundedRectBlock, drawPathBlock) {
    var tmp;
    if (outline instanceof Rectangle) {
      tmp = drawRectBlock(_this__u8e3s4, outline.rect_1);
    } else {
      if (outline instanceof Rounded) {
        var path = outline.roundRectPath_1;
        var tmp_0;
        if (!(path == null)) {
          tmp_0 = drawPathBlock(_this__u8e3s4, path);
        } else {
          tmp_0 = drawRoundedRectBlock(_this__u8e3s4, outline.roundRect_1);
        }
        tmp = tmp_0;
      } else {
        if (outline instanceof Generic) {
          tmp = drawPathBlock(_this__u8e3s4, outline.path_1);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function topLeft(_this__u8e3s4) {
    return Offset_0(_this__u8e3s4.get_left_woprgw_k$(), _this__u8e3s4.get_top_18ivbo_k$());
  }
  function size(_this__u8e3s4) {
    return Size(_this__u8e3s4.get_width_j0q4yl_k$(), _this__u8e3s4.get_height_e7t92o_k$());
  }
  function topLeft_0(_this__u8e3s4) {
    return Offset_0(_this__u8e3s4.get_left_woprgw_k$(), _this__u8e3s4.get_top_18ivbo_k$());
  }
  function size_0(_this__u8e3s4) {
    return Size(_this__u8e3s4.get_width_j0q4yl_k$(), _this__u8e3s4.get_height_e7t92o_k$());
  }
  function Paint() {
  }
  function get_DefaultAlpha() {
    return DefaultAlpha;
  }
  var DefaultAlpha;
  function _PaintingStyle___init__impl__pwxppo(value) {
    return value;
  }
  function _get_value__a43j40_1($this) {
    return $this;
  }
  function Companion_9() {
    Companion_instance_9 = this;
    this.Fill_1 = _PaintingStyle___init__impl__pwxppo(0);
    this.Stroke_1 = _PaintingStyle___init__impl__pwxppo(1);
  }
  protoOf(Companion_9).get_Fill_7xey15_k$ = function () {
    return this.Fill_1;
  };
  protoOf(Companion_9).get_Stroke_fu1ixu_k$ = function () {
    return this.Stroke_1;
  };
  var Companion_instance_9;
  function Companion_getInstance_23() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function PaintingStyle__toString_impl_anxeq4($this) {
    return $this === Companion_getInstance_23().Fill_1 ? 'Fill' : $this === Companion_getInstance_23().Stroke_1 ? 'Stroke' : 'Unknown';
  }
  function PaintingStyle__hashCode_impl_wf3biz($this) {
    return $this;
  }
  function PaintingStyle__equals_impl_r3webl($this, other) {
    if (!(other instanceof PaintingStyle))
      return false;
    if (!($this === (other instanceof PaintingStyle ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function PaintingStyle(value) {
    Companion_getInstance_23();
    this.value_1 = value;
  }
  protoOf(PaintingStyle).toString = function () {
    return PaintingStyle__toString_impl_anxeq4(this.value_1);
  };
  protoOf(PaintingStyle).hashCode = function () {
    return PaintingStyle__hashCode_impl_wf3biz(this.value_1);
  };
  protoOf(PaintingStyle).equals = function (other) {
    return PaintingStyle__equals_impl_r3webl(this.value_1, other);
  };
  function Companion_10() {
    Companion_instance_10 = this;
  }
  protoOf(Companion_10).combine_eaz7cj_k$ = function (operation, path1, path2) {
    var path = Path_0();
    if (path.op_fj0csx_k$(path1, path2, operation)) {
      return path;
    }
    throw IllegalArgumentException_init_$Create$('Path.combine() failed.  This may be due an invalid path; in particular, check for NaN values.');
  };
  var Companion_instance_10;
  function Companion_getInstance_24() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function Path() {
  }
  function Companion_11() {
    Companion_instance_11 = this;
  }
  protoOf(Companion_11).cornerPathEffect_rwk5o3_k$ = function (radius) {
    return actualCornerPathEffect(radius);
  };
  protoOf(Companion_11).dashPathEffect_ko9kiw_k$ = function (intervals, phase) {
    return actualDashPathEffect(intervals, phase);
  };
  protoOf(Companion_11).dashPathEffect$default_i901tt_k$ = function (intervals, phase, $super) {
    phase = phase === VOID ? 0.0 : phase;
    return $super === VOID ? this.dashPathEffect_ko9kiw_k$(intervals, phase) : $super.dashPathEffect_ko9kiw_k$.call(this, intervals, phase);
  };
  protoOf(Companion_11).chainPathEffect_466mix_k$ = function (outer, inner) {
    return actualChainPathEffect(outer, inner);
  };
  protoOf(Companion_11).stampedPathEffect_f8wkf0_k$ = function (shape, advance, phase, style) {
    return actualStampedPathEffect(shape, advance, phase, style);
  };
  var Companion_instance_11;
  function Companion_getInstance_25() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function PathEffect() {
  }
  function _StampedPathEffectStyle___init__impl__ekt0so(value) {
    return value;
  }
  function _get_value__a43j40_2($this) {
    return $this;
  }
  function Companion_12() {
    Companion_instance_12 = this;
    this.Translate_1 = _StampedPathEffectStyle___init__impl__ekt0so(0);
    this.Rotate_1 = _StampedPathEffectStyle___init__impl__ekt0so(1);
    this.Morph_1 = _StampedPathEffectStyle___init__impl__ekt0so(2);
  }
  protoOf(Companion_12).get_Translate_xeseg8_k$ = function () {
    return this.Translate_1;
  };
  protoOf(Companion_12).get_Rotate_kkxo0p_k$ = function () {
    return this.Rotate_1;
  };
  protoOf(Companion_12).get_Morph_bm4leq_k$ = function () {
    return this.Morph_1;
  };
  var Companion_instance_12;
  function Companion_getInstance_26() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function StampedPathEffectStyle__toString_impl_nfgepk($this) {
    return $this === Companion_getInstance_26().Translate_1 ? 'Translate' : $this === Companion_getInstance_26().Rotate_1 ? 'Rotate' : $this === Companion_getInstance_26().Morph_1 ? 'Morph' : 'Unknown';
  }
  function StampedPathEffectStyle__hashCode_impl_puhqgp($this) {
    return $this;
  }
  function StampedPathEffectStyle__equals_impl_nbax4b($this, other) {
    if (!(other instanceof StampedPathEffectStyle))
      return false;
    if (!($this === (other instanceof StampedPathEffectStyle ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function StampedPathEffectStyle(value) {
    Companion_getInstance_26();
    this.value_1 = value;
  }
  protoOf(StampedPathEffectStyle).toString = function () {
    return StampedPathEffectStyle__toString_impl_nfgepk(this.value_1);
  };
  protoOf(StampedPathEffectStyle).hashCode = function () {
    return StampedPathEffectStyle__hashCode_impl_puhqgp(this.value_1);
  };
  protoOf(StampedPathEffectStyle).equals = function (other) {
    return StampedPathEffectStyle__equals_impl_nbax4b(this.value_1, other);
  };
  function _PathFillType___init__impl__d59lzz(value) {
    return value;
  }
  function _get_value__a43j40_3($this) {
    return $this;
  }
  function Companion_13() {
    Companion_instance_13 = this;
    this.NonZero_1 = _PathFillType___init__impl__d59lzz(0);
    this.EvenOdd_1 = _PathFillType___init__impl__d59lzz(1);
  }
  protoOf(Companion_13).get_NonZero_dwy848_k$ = function () {
    return this.NonZero_1;
  };
  protoOf(Companion_13).get_EvenOdd_cpanrc_k$ = function () {
    return this.EvenOdd_1;
  };
  var Companion_instance_13;
  function Companion_getInstance_27() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  function PathFillType__toString_impl_nw7h1d($this) {
    return $this === Companion_getInstance_27().NonZero_1 ? 'NonZero' : $this === Companion_getInstance_27().EvenOdd_1 ? 'EvenOdd' : 'Unknown';
  }
  function PathFillType__hashCode_impl_pdqo4w($this) {
    return $this;
  }
  function PathFillType__equals_impl_94fhtg($this, other) {
    if (!(other instanceof PathFillType))
      return false;
    if (!($this === (other instanceof PathFillType ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function PathFillType(value) {
    Companion_getInstance_27();
    this.value_1 = value;
  }
  protoOf(PathFillType).toString = function () {
    return PathFillType__toString_impl_nw7h1d(this.value_1);
  };
  protoOf(PathFillType).hashCode = function () {
    return PathFillType__hashCode_impl_pdqo4w(this.value_1);
  };
  protoOf(PathFillType).equals = function (other) {
    return PathFillType__equals_impl_94fhtg(this.value_1, other);
  };
  function _PathOperation___init__impl__8ddeif(value) {
    return value;
  }
  function _get_value__a43j40_4($this) {
    return $this;
  }
  function Companion_14() {
    Companion_instance_14 = this;
    this.Difference_1 = _PathOperation___init__impl__8ddeif(0);
    this.Intersect_1 = _PathOperation___init__impl__8ddeif(1);
    this.Union_1 = _PathOperation___init__impl__8ddeif(2);
    this.Xor_1 = _PathOperation___init__impl__8ddeif(3);
    this.ReverseDifference_1 = _PathOperation___init__impl__8ddeif(4);
  }
  protoOf(Companion_14).get_Difference_nnbib6_k$ = function () {
    return this.Difference_1;
  };
  protoOf(Companion_14).get_Intersect_3xwf0i_k$ = function () {
    return this.Intersect_1;
  };
  protoOf(Companion_14).get_Union_z1h0ku_k$ = function () {
    return this.Union_1;
  };
  protoOf(Companion_14).get_Xor_aeyvba_k$ = function () {
    return this.Xor_1;
  };
  protoOf(Companion_14).get_ReverseDifference_4zrrtq_k$ = function () {
    return this.ReverseDifference_1;
  };
  var Companion_instance_14;
  function Companion_getInstance_28() {
    if (Companion_instance_14 == null)
      new Companion_14();
    return Companion_instance_14;
  }
  function PathOperation__toString_impl_z2c7a9($this) {
    return $this === Companion_getInstance_28().Difference_1 ? 'Difference' : $this === Companion_getInstance_28().Intersect_1 ? 'Intersect' : $this === Companion_getInstance_28().Union_1 ? 'Union' : $this === Companion_getInstance_28().Xor_1 ? 'Xor' : $this === Companion_getInstance_28().ReverseDifference_1 ? 'ReverseDifference' : 'Unknown';
  }
  function PathOperation__hashCode_impl_e7lxw0($this) {
    return $this;
  }
  function PathOperation__equals_impl_kfyq50($this, other) {
    if (!(other instanceof PathOperation))
      return false;
    if (!($this === (other instanceof PathOperation ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function PathOperation(value) {
    Companion_getInstance_28();
    this.value_1 = value;
  }
  protoOf(PathOperation).toString = function () {
    return PathOperation__toString_impl_z2c7a9(this.value_1);
  };
  protoOf(PathOperation).hashCode = function () {
    return PathOperation__hashCode_impl_e7lxw0(this.value_1);
  };
  protoOf(PathOperation).equals = function (other) {
    return PathOperation__equals_impl_kfyq50(this.value_1, other);
  };
  function _PointMode___init__impl__mgo5cq(value) {
    return value;
  }
  function _get_value__a43j40_5($this) {
    return $this;
  }
  function Companion_15() {
    Companion_instance_15 = this;
    this.Points_1 = _PointMode___init__impl__mgo5cq(0);
    this.Lines_1 = _PointMode___init__impl__mgo5cq(1);
    this.Polygon_1 = _PointMode___init__impl__mgo5cq(2);
  }
  protoOf(Companion_15).get_Points_yh58f7_k$ = function () {
    return this.Points_1;
  };
  protoOf(Companion_15).get_Lines_54ip59_k$ = function () {
    return this.Lines_1;
  };
  protoOf(Companion_15).get_Polygon_rl173c_k$ = function () {
    return this.Polygon_1;
  };
  var Companion_instance_15;
  function Companion_getInstance_29() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function PointMode__toString_impl_nuk5g2($this) {
    return $this === Companion_getInstance_29().Points_1 ? 'Points' : $this === Companion_getInstance_29().Lines_1 ? 'Lines' : $this === Companion_getInstance_29().Polygon_1 ? 'Polygon' : 'Unknown';
  }
  function PointMode__hashCode_impl_pfdzq7($this) {
    return $this;
  }
  function PointMode__equals_impl_r8q797($this, other) {
    if (!(other instanceof PointMode))
      return false;
    if (!($this === (other instanceof PointMode ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function PointMode(value) {
    Companion_getInstance_29();
    this.value_1 = value;
  }
  protoOf(PointMode).toString = function () {
    return PointMode__toString_impl_nuk5g2(this.value_1);
  };
  protoOf(PointMode).hashCode = function () {
    return PointMode__hashCode_impl_pfdzq7(this.value_1);
  };
  protoOf(PointMode).equals = function (other) {
    return PointMode__equals_impl_r8q797(this.value_1, other);
  };
  function get_RectangleShape() {
    _init_properties_RectangleShape_kt__k3dd0u();
    return RectangleShape;
  }
  var RectangleShape;
  function RectangleShape$1() {
  }
  protoOf(RectangleShape$1).createOutline_nnkieo_k$ = function (size, layoutDirection, density) {
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
  function LinearGradientShader(from, to, colors, colorStops, tileMode) {
    colorStops = colorStops === VOID ? null : colorStops;
    tileMode = tileMode === VOID ? Companion_getInstance_33().get_Clamp_ddetsd_k$() : tileMode;
    return ActualLinearGradientShader(from, to, colors, colorStops, tileMode);
  }
  function RadialGradientShader(center, radius, colors, colorStops, tileMode) {
    colorStops = colorStops === VOID ? null : colorStops;
    tileMode = tileMode === VOID ? Companion_getInstance_33().get_Clamp_ddetsd_k$() : tileMode;
    return ActualRadialGradientShader(center, radius, colors, colorStops, tileMode);
  }
  function SweepGradientShader(center, colors, colorStops) {
    colorStops = colorStops === VOID ? null : colorStops;
    return ActualSweepGradientShader(center, colors, colorStops);
  }
  function Companion_16() {
    Companion_instance_16 = this;
    this.None_1 = new Shadow();
  }
  protoOf(Companion_16).get_None_wo6tgh_k$ = function () {
    return this.None_1;
  };
  var Companion_instance_16;
  function Companion_getInstance_30() {
    if (Companion_instance_16 == null)
      new Companion_16();
    return Companion_instance_16;
  }
  function Shadow(color, offset, blurRadius) {
    Companion_getInstance_30();
    color = color === VOID ? Color_1(new Long(-16777216, 0)) : color;
    offset = offset === VOID ? Companion_getInstance().get_Zero_k6n73t_k$() : offset;
    blurRadius = blurRadius === VOID ? 0.0 : blurRadius;
    this.color_1 = color;
    this.offset_1 = offset;
    this.blurRadius_1 = blurRadius;
  }
  protoOf(Shadow).get_color_lnp1vl_k$ = function () {
    return this.color_1;
  };
  protoOf(Shadow).get_offset_slhc8e_k$ = function () {
    return this.offset_1;
  };
  protoOf(Shadow).get_blurRadius_r8jo0y_k$ = function () {
    return this.blurRadius_1;
  };
  protoOf(Shadow).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Shadow))
      return false;
    if (!equals(this.color_1, other.color_1))
      return false;
    if (!equals(this.offset_1, other.offset_1))
      return false;
    if (!(this.blurRadius_1 === other.blurRadius_1))
      return false;
    return true;
  };
  protoOf(Shadow).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.color_1);
    result = imul(31, result) + Offset__hashCode_impl_hbql41(this.offset_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.blurRadius_1) | 0;
    return result;
  };
  protoOf(Shadow).toString = function () {
    return 'Shadow(color=' + new Color(this.color_1) + ', offset=' + new Offset(this.offset_1) + ', blurRadius=' + this.blurRadius_1 + ')';
  };
  protoOf(Shadow).copy_qipu7k_k$ = function (color, offset, blurRadius) {
    return new Shadow(color, offset, blurRadius);
  };
  protoOf(Shadow).copy$default_jajr59_k$ = function (color, offset, blurRadius, $super) {
    color = color === VOID ? this.color_1 : color;
    offset = offset === VOID ? this.offset_1 : offset;
    blurRadius = blurRadius === VOID ? this.blurRadius_1 : blurRadius;
    return $super === VOID ? this.copy_qipu7k_k$(color, offset, blurRadius) : $super.copy_qipu7k_k$.call(this, new Color(color), new Offset(offset), blurRadius);
  };
  function lerp_2(start, stop, fraction) {
    return new Shadow(lerp_1(start.color_1, stop.color_1, fraction), lerp_0(start.offset_1, stop.offset_1, fraction), lerp(start.blurRadius_1, stop.blurRadius_1, fraction));
  }
  function Shape() {
  }
  function _StrokeCap___init__impl__kfgr27(value) {
    return value;
  }
  function _get_value__a43j40_6($this) {
    return $this;
  }
  function Companion_17() {
    Companion_instance_17 = this;
    this.Butt_1 = _StrokeCap___init__impl__kfgr27(0);
    this.Round_1 = _StrokeCap___init__impl__kfgr27(1);
    this.Square_1 = _StrokeCap___init__impl__kfgr27(2);
  }
  protoOf(Companion_17).get_Butt_jb7qjw_k$ = function () {
    return this.Butt_1;
  };
  protoOf(Companion_17).get_Round_hjra1h_k$ = function () {
    return this.Round_1;
  };
  protoOf(Companion_17).get_Square_dbwc3a_k$ = function () {
    return this.Square_1;
  };
  var Companion_instance_17;
  function Companion_getInstance_31() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function StrokeCap__toString_impl_3xn0rd($this) {
    return $this === Companion_getInstance_31().Butt_1 ? 'Butt' : $this === Companion_getInstance_31().Round_1 ? 'Round' : $this === Companion_getInstance_31().Square_1 ? 'Square' : 'Unknown';
  }
  function StrokeCap__hashCode_impl_posxk8($this) {
    return $this;
  }
  function StrokeCap__equals_impl_m9bjik($this, other) {
    if (!(other instanceof StrokeCap))
      return false;
    if (!($this === (other instanceof StrokeCap ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function StrokeCap(value) {
    Companion_getInstance_31();
    this.value_1 = value;
  }
  protoOf(StrokeCap).toString = function () {
    return StrokeCap__toString_impl_3xn0rd(this.value_1);
  };
  protoOf(StrokeCap).hashCode = function () {
    return StrokeCap__hashCode_impl_posxk8(this.value_1);
  };
  protoOf(StrokeCap).equals = function (other) {
    return StrokeCap__equals_impl_m9bjik(this.value_1, other);
  };
  function _StrokeJoin___init__impl__ig23zz(value) {
    return value;
  }
  function _get_value__a43j40_7($this) {
    return $this;
  }
  function Companion_18() {
    Companion_instance_18 = this;
    this.Miter_1 = _StrokeJoin___init__impl__ig23zz(0);
    this.Round_1 = _StrokeJoin___init__impl__ig23zz(1);
    this.Bevel_1 = _StrokeJoin___init__impl__ig23zz(2);
  }
  protoOf(Companion_18).get_Miter_xkwqso_k$ = function () {
    return this.Miter_1;
  };
  protoOf(Companion_18).get_Round_o8jjqp_k$ = function () {
    return this.Round_1;
  };
  protoOf(Companion_18).get_Bevel_8ab6n7_k$ = function () {
    return this.Bevel_1;
  };
  var Companion_instance_18;
  function Companion_getInstance_32() {
    if (Companion_instance_18 == null)
      new Companion_18();
    return Companion_instance_18;
  }
  function StrokeJoin__toString_impl_ph4e1r($this) {
    return $this === Companion_getInstance_32().Miter_1 ? 'Miter' : $this === Companion_getInstance_32().Round_1 ? 'Round' : $this === Companion_getInstance_32().Bevel_1 ? 'Bevel' : 'Unknown';
  }
  function StrokeJoin__hashCode_impl_3pyh8w($this) {
    return $this;
  }
  function StrokeJoin__equals_impl_hf9ej8($this, other) {
    if (!(other instanceof StrokeJoin))
      return false;
    if (!($this === (other instanceof StrokeJoin ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function StrokeJoin(value) {
    Companion_getInstance_32();
    this.value_1 = value;
  }
  protoOf(StrokeJoin).toString = function () {
    return StrokeJoin__toString_impl_ph4e1r(this.value_1);
  };
  protoOf(StrokeJoin).hashCode = function () {
    return StrokeJoin__hashCode_impl_3pyh8w(this.value_1);
  };
  protoOf(StrokeJoin).equals = function (other) {
    return StrokeJoin__equals_impl_hf9ej8(this.value_1, other);
  };
  function _TileMode___init__impl__syhjao(value) {
    return value;
  }
  function _get_value__a43j40_8($this) {
    return $this;
  }
  function Companion_19() {
    Companion_instance_19 = this;
    this.Clamp_1 = _TileMode___init__impl__syhjao(0);
    this.Repeated_1 = _TileMode___init__impl__syhjao(1);
    this.Mirror_1 = _TileMode___init__impl__syhjao(2);
    this.Decal_1 = _TileMode___init__impl__syhjao(3);
  }
  protoOf(Companion_19).get_Clamp_ddetsd_k$ = function () {
    return this.Clamp_1;
  };
  protoOf(Companion_19).get_Repeated_jl00zi_k$ = function () {
    return this.Repeated_1;
  };
  protoOf(Companion_19).get_Mirror_rukh4t_k$ = function () {
    return this.Mirror_1;
  };
  protoOf(Companion_19).get_Decal_4ld873_k$ = function () {
    return this.Decal_1;
  };
  var Companion_instance_19;
  function Companion_getInstance_33() {
    if (Companion_instance_19 == null)
      new Companion_19();
    return Companion_instance_19;
  }
  function TileMode__toString_impl_tlb7f4($this) {
    return $this === Companion_getInstance_33().Clamp_1 ? 'Clamp' : $this === Companion_getInstance_33().Repeated_1 ? 'Repeated' : $this === Companion_getInstance_33().Mirror_1 ? 'Mirror' : $this === Companion_getInstance_33().Decal_1 ? 'Decal' : 'Unknown';
  }
  function TileMode__hashCode_impl_7u5am9($this) {
    return $this;
  }
  function TileMode__equals_impl_7nvbdv($this, other) {
    if (!(other instanceof TileMode))
      return false;
    if (!($this === (other instanceof TileMode ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function TileMode(value) {
    Companion_getInstance_33();
    this.value_1 = value;
  }
  protoOf(TileMode).toString = function () {
    return TileMode__toString_impl_tlb7f4(this.value_1);
  };
  protoOf(TileMode).hashCode = function () {
    return TileMode__hashCode_impl_7u5am9(this.value_1);
  };
  protoOf(TileMode).equals = function (other) {
    return TileMode__equals_impl_7nvbdv(this.value_1, other);
  };
  function _VertexMode___init__impl__btp65i(value) {
    return value;
  }
  function _get_value__a43j40_9($this) {
    return $this;
  }
  function Companion_20() {
    Companion_instance_20 = this;
    this.Triangles_1 = _VertexMode___init__impl__btp65i(0);
    this.TriangleStrip_1 = _VertexMode___init__impl__btp65i(1);
    this.TriangleFan_1 = _VertexMode___init__impl__btp65i(2);
  }
  protoOf(Companion_20).get_Triangles_687gr1_k$ = function () {
    return this.Triangles_1;
  };
  protoOf(Companion_20).get_TriangleStrip_pmcutk_k$ = function () {
    return this.TriangleStrip_1;
  };
  protoOf(Companion_20).get_TriangleFan_rxrqvh_k$ = function () {
    return this.TriangleFan_1;
  };
  var Companion_instance_20;
  function Companion_getInstance_34() {
    if (Companion_instance_20 == null)
      new Companion_20();
    return Companion_instance_20;
  }
  function VertexMode__toString_impl_ujymw6($this) {
    return $this === Companion_getInstance_34().Triangles_1 ? 'Triangles' : $this === Companion_getInstance_34().TriangleStrip_1 ? 'TriangleStrip' : $this === Companion_getInstance_34().TriangleFan_1 ? 'TriangleFan' : 'Unknown';
  }
  function VertexMode__hashCode_impl_ipzia3($this) {
    return $this;
  }
  function VertexMode__equals_impl_k7ox9j($this, other) {
    if (!(other instanceof VertexMode))
      return false;
    if (!($this === (other instanceof VertexMode ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function VertexMode(value) {
    Companion_getInstance_34();
    this.value_1 = value;
  }
  protoOf(VertexMode).toString = function () {
    return VertexMode__toString_impl_ujymw6(this.value_1);
  };
  protoOf(VertexMode).hashCode = function () {
    return VertexMode__hashCode_impl_ipzia3(this.value_1);
  };
  protoOf(VertexMode).equals = function (other) {
    return VertexMode__equals_impl_k7ox9j(this.value_1, other);
  };
  function encodeColorList($this, colors) {
    var tmp = 0;
    var tmp_0 = colors.get_size_woubt6_k$();
    var tmp_1 = new Int32Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      tmp_1[tmp_2] = toArgb(colors.get_c1px32_k$(tmp_2).value_1);
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  }
  function encodePointList($this, points) {
    var tmp = 0;
    var tmp_0 = imul(points.get_size_woubt6_k$(), 2);
    var tmp_1 = new Float32Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var pointIndex = tmp_2 / 2 | 0;
      var point = points.get_c1px32_k$(pointIndex).packedValue_1;
      var tmp_3;
      if ((tmp_2 % 2 | 0) === 0) {
        tmp_3 = _Offset___get_x__impl__xvi35n(point);
      } else {
        tmp_3 = _Offset___get_y__impl__8bzhra(point);
      }
      tmp_1[tmp_2] = tmp_3;
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  }
  function Vertices$lambda($positions) {
    return function (it) {
      return it < 0 ? true : it >= $positions.get_size_woubt6_k$();
    };
  }
  function Vertices(vertexMode, positions, textureCoordinates, colors, indices) {
    this.vertexMode_1 = vertexMode;
    var outOfBounds = Vertices$lambda(positions);
    if (!(textureCoordinates.get_size_woubt6_k$() === positions.get_size_woubt6_k$()))
      throw IllegalArgumentException_init_$Create$('positions and textureCoordinates lengths must match.');
    if (!(colors.get_size_woubt6_k$() === positions.get_size_woubt6_k$()))
      throw IllegalArgumentException_init_$Create$('positions and colors lengths must match.');
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastAny' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = indices.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = indices.get_c1px32_k$(index);
          // Inline function 'androidx.compose.ui.util.fastAny.<anonymous>' call
          if (outOfBounds(item)) {
            tmp$ret$0 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$0 = false;
    }
    if (tmp$ret$0)
      throw IllegalArgumentException_init_$Create$('indices values must be valid indices in the positions list.');
    this.positions_1 = encodePointList(this, positions);
    this.textureCoordinates_1 = encodePointList(this, textureCoordinates);
    this.colors_1 = encodeColorList(this, colors);
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = indices.get_size_woubt6_k$();
    var tmp_2 = new Int16Array(tmp_1);
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      tmp_2[tmp_3] = toShort(indices.get_c1px32_k$(tmp_3));
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.indices_1 = tmp_2;
  }
  protoOf(Vertices).get_vertexMode_kiz8sf_k$ = function () {
    return this.vertexMode_1;
  };
  protoOf(Vertices).get_positions_ya7scf_k$ = function () {
    return this.positions_1;
  };
  protoOf(Vertices).get_textureCoordinates_1i3vqh_k$ = function () {
    return this.textureCoordinates_1;
  };
  protoOf(Vertices).get_colors_c05661_k$ = function () {
    return this.colors_1;
  };
  protoOf(Vertices).get_indices_xelk8u_k$ = function () {
    return this.indices_1;
  };
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
  function Companion_21() {
    Companion_instance_21 = this;
    var tmp = this;
    tmp.Bradford_1 = new Adaptation$Companion$Bradford$1();
    var tmp_0 = this;
    tmp_0.VonKries_1 = new Adaptation$Companion$VonKries$1();
    var tmp_1 = this;
    tmp_1.Ciecat02__1 = new Adaptation$Companion$Ciecat02$1();
  }
  protoOf(Companion_21).get_Bradford_vb0mll_k$ = function () {
    return this.Bradford_1;
  };
  protoOf(Companion_21).get_VonKries_9ojdic_k$ = function () {
    return this.VonKries_1;
  };
  protoOf(Companion_21).get_Ciecat02_9csyjm_k$ = function () {
    return this.Ciecat02__1;
  };
  var Companion_instance_21;
  function Companion_getInstance_35() {
    if (Companion_instance_21 == null)
      new Companion_21();
    return Companion_instance_21;
  }
  function Adaptation(transform) {
    Companion_getInstance_35();
    this.transform_1 = transform;
  }
  protoOf(Adaptation).get_transform_px941v_k$ = function () {
    return this.transform_1;
  };
  function _ColorModel___init__impl__b968n9(packedValue) {
    return packedValue;
  }
  function _ColorModel___get_packedValue__impl__uvxrhj($this) {
    return $this;
  }
  function _ColorModel___get_componentCount__impl__au0uoc($this) {
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    return _ColorModel___get_packedValue__impl__uvxrhj($this).shr_9fl3wl_k$(32).toInt_1tsl84_k$();
  }
  function Companion_22() {
    Companion_instance_22 = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$0 = toLong(3).shl_bg8if3_k$(32).or_v7fvkl_k$(toLong(0).and_4spn93_k$(new Long(-1, 0)));
    tmp.Rgb_1 = _ColorModel___init__impl__b968n9(tmp$ret$0);
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$1 = toLong(3).shl_bg8if3_k$(32).or_v7fvkl_k$(toLong(1).and_4spn93_k$(new Long(-1, 0)));
    tmp_0.Xyz_1 = _ColorModel___init__impl__b968n9(tmp$ret$1);
    var tmp_1 = this;
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$2 = toLong(3).shl_bg8if3_k$(32).or_v7fvkl_k$(toLong(2).and_4spn93_k$(new Long(-1, 0)));
    tmp_1.Lab_1 = _ColorModel___init__impl__b968n9(tmp$ret$2);
    var tmp_2 = this;
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$3 = toLong(4).shl_bg8if3_k$(32).or_v7fvkl_k$(toLong(3).and_4spn93_k$(new Long(-1, 0)));
    tmp_2.Cmyk_1 = _ColorModel___init__impl__b968n9(tmp$ret$3);
  }
  protoOf(Companion_22).get_Rgb_ehihd0_k$ = function () {
    return this.Rgb_1;
  };
  protoOf(Companion_22).get_Xyz_inxdso_k$ = function () {
    return this.Xyz_1;
  };
  protoOf(Companion_22).get_Lab_1fs2w4_k$ = function () {
    return this.Lab_1;
  };
  protoOf(Companion_22).get_Cmyk_dqaxwj_k$ = function () {
    return this.Cmyk_1;
  };
  var Companion_instance_22;
  function Companion_getInstance_36() {
    if (Companion_instance_22 == null)
      new Companion_22();
    return Companion_instance_22;
  }
  function ColorModel__toString_impl_msukd7($this) {
    return equals($this, Companion_getInstance_36().Rgb_1) ? 'Rgb' : equals($this, Companion_getInstance_36().Xyz_1) ? 'Xyz' : equals($this, Companion_getInstance_36().Lab_1) ? 'Lab' : equals($this, Companion_getInstance_36().Cmyk_1) ? 'Cmyk' : 'Unknown';
  }
  function ColorModel__hashCode_impl_11onkc($this) {
    return $this.hashCode();
  }
  function ColorModel__equals_impl_dbkfqg($this, other) {
    if (!(other instanceof ColorModel))
      return false;
    var tmp0_other_with_cast = other instanceof ColorModel ? other.packedValue_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function ColorModel(packedValue) {
    Companion_getInstance_36();
    this.packedValue_1 = packedValue;
  }
  protoOf(ColorModel).toString = function () {
    return ColorModel__toString_impl_msukd7(this.packedValue_1);
  };
  protoOf(ColorModel).hashCode = function () {
    return ColorModel__hashCode_impl_11onkc(this.packedValue_1);
  };
  protoOf(ColorModel).equals = function (other) {
    return ColorModel__equals_impl_dbkfqg(this.packedValue_1, other);
  };
  function ColorSpace_init_$Init$(name, model, $this) {
    ColorSpace.call($this, name, model, -1);
    return $this;
  }
  function ColorSpace_init_$Create$(name, model) {
    return ColorSpace_init_$Init$(name, model, objectCreate(protoOf(ColorSpace)));
  }
  function Companion_23() {
    Companion_instance_23 = this;
    this.MinId_1 = -1;
    this.MaxId_1 = 63;
  }
  protoOf(Companion_23).get_MinId_idmyf8_k$ = function () {
    return this.MinId_1;
  };
  protoOf(Companion_23).get_MaxId_idi1xy_k$ = function () {
    return this.MaxId_1;
  };
  var Companion_instance_23;
  function Companion_getInstance_37() {
    if (Companion_instance_23 == null)
      new Companion_23();
    return Companion_instance_23;
  }
  function ColorSpace(name, model, id) {
    Companion_getInstance_37();
    this.name_1 = name;
    this.model_1 = model;
    this.id_1 = id;
    // Inline function 'kotlin.text.isEmpty' call
    var this_0 = this.name_1;
    if (charSequenceLength(this_0) === 0) {
      throw IllegalArgumentException_init_$Create$('The name of a color space cannot be null and must contain at least 1 character');
    }
    if (this.id_1 < -1 ? true : this.id_1 > 63) {
      throw IllegalArgumentException_init_$Create$('The id must be between -1 and 63');
    }
  }
  protoOf(ColorSpace).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(ColorSpace).get_model_b1t9lk_k$ = function () {
    return this.model_1;
  };
  protoOf(ColorSpace).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(ColorSpace).get_componentCount_ffrht1_k$ = function () {
    return _ColorModel___get_componentCount__impl__au0uoc(this.model_1);
  };
  protoOf(ColorSpace).get_isSrgb_ew666l_k$ = function () {
    return false;
  };
  protoOf(ColorSpace).toXyz_k9kag6_k$ = function (r, g, b) {
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([r, g, b]);
    return this.toXyz_c5nzk6_k$(tmp$ret$0);
  };
  protoOf(ColorSpace).toXy_53ljx8_k$ = function (v0, v1, v2) {
    var xyz = this.toXyz_k9kag6_k$(v0, v1, v2);
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val1 = xyz[0];
    var val2 = xyz[1];
    var v1_0 = toLong(toRawBits(val1));
    var v2_0 = toLong(toRawBits(val2));
    return v1_0.shl_bg8if3_k$(32).or_v7fvkl_k$(v2_0.and_4spn93_k$(new Long(-1, 0)));
  };
  protoOf(ColorSpace).toZ_xzs7on_k$ = function (v0, v1, v2) {
    var xyz = this.toXyz_k9kag6_k$(v0, v1, v2);
    return xyz[2];
  };
  protoOf(ColorSpace).xyzaToColor_fee27c_k$ = function (x, y, z, a, colorSpace) {
    var colors = this.fromXyz_w96f5j_k$(x, y, z);
    return Color_0(colors[0], colors[1], colors[2], a, colorSpace);
  };
  protoOf(ColorSpace).fromXyz_w96f5j_k$ = function (x, y, z) {
    var xyz = new Float32Array(_ColorModel___get_componentCount__impl__au0uoc(this.model_1));
    xyz[0] = x;
    xyz[1] = y;
    xyz[2] = z;
    return this.fromXyz_ghg1av_k$(xyz);
  };
  protoOf(ColorSpace).toString = function () {
    return this.name_1 + ' (id=' + this.id_1 + ', model=' + new ColorModel(this.model_1) + ')';
  };
  protoOf(ColorSpace).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other))) {
      return false;
    }
    var that = other instanceof ColorSpace ? other : THROW_CCE();
    if (!(this.id_1 === that.id_1))
      return false;
    return !(this.name_1 === that.name_1) ? false : equals(this.model_1, that.model_1);
  };
  protoOf(ColorSpace).hashCode = function () {
    var result = getStringHashCode(this.name_1);
    result = imul(31, result) + ColorModel__hashCode_impl_11onkc(this.model_1) | 0;
    result = imul(31, result) + this.id_1 | 0;
    return result;
  };
  function connect(_this__u8e3s4, destination, intent) {
    destination = destination === VOID ? ColorSpaces_getInstance().get_Srgb_woa2g3_k$() : destination;
    intent = intent === VOID ? Companion_getInstance_41().get_Perceptual_orjm5u_k$() : intent;
    if (_this__u8e3s4 === ColorSpaces_getInstance().get_Srgb_woa2g3_k$()) {
      if (destination === ColorSpaces_getInstance().get_Srgb_woa2g3_k$()) {
        return Companion_getInstance_38().get_SrgbIdentity_7ohf7j_k$();
      }
      if (destination === ColorSpaces_getInstance().get_Oklab_ierso8_k$() ? intent === Companion_getInstance_41().get_Perceptual_orjm5u_k$() : false) {
        return Companion_getInstance_38().get_SrgbToOklabPerceptual_ubj5w0_k$();
      }
    } else if ((_this__u8e3s4 === ColorSpaces_getInstance().get_Oklab_ierso8_k$() ? destination === ColorSpaces_getInstance().get_Srgb_woa2g3_k$() : false) ? intent === Companion_getInstance_41().get_Perceptual_orjm5u_k$() : false) {
      return Companion_getInstance_38().get_OklabToSrgbPerceptual_iguhs6_k$();
    }
    if (_this__u8e3s4 === destination) {
      return Companion_getInstance_38().identity_5fevof_k$(_this__u8e3s4);
    }
    var tmp;
    if (equals(_this__u8e3s4.model_1, Companion_getInstance_36().get_Rgb_ehihd0_k$()) ? equals(destination.model_1, Companion_getInstance_36().get_Rgb_ehihd0_k$()) : false) {
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
    adaptation = adaptation === VOID ? Companion_getInstance_35().get_Bradford_vb0mll_k$() : adaptation;
    if (equals(_this__u8e3s4.model_1, Companion_getInstance_36().get_Rgb_ehihd0_k$())) {
      var rgb = _this__u8e3s4 instanceof Rgb ? _this__u8e3s4 : THROW_CCE();
      if (compare_1(rgb.get_whitePoint_g4n5ow_k$(), whitePoint)) {
        return _this__u8e3s4;
      }
      var xyz = whitePoint.toXyz_1tswm6_k$();
      var adaptationTransform = chromaticAdaptation(adaptation.get_transform_px941v_k$(), rgb.get_whitePoint_g4n5ow_k$().toXyz_1tswm6_k$(), xyz);
      var transform = mul3x3(adaptationTransform, rgb.get_transform_px941v_k$());
      return Rgb_init_$Create$_7(rgb, transform, whitePoint);
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
  function compare_0(a, b) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    var tmp_4;
    var tmp_5;
    if (!(b == null)) {
      // Inline function 'kotlin.math.abs' call
      var x = a.get_a_1mhr5k_k$() - b.get_a_1mhr5k_k$();
      tmp_5 = Math.abs(x) < 0.001;
    } else {
      tmp_5 = false;
    }
    if (tmp_5) {
      // Inline function 'kotlin.math.abs' call
      var x_0 = a.get_b_1mhr5l_k$() - b.get_b_1mhr5l_k$();
      tmp_4 = Math.abs(x_0) < 0.001;
    } else {
      tmp_4 = false;
    }
    if (tmp_4) {
      // Inline function 'kotlin.math.abs' call
      var x_1 = a.get_c_1mhr5m_k$() - b.get_c_1mhr5m_k$();
      tmp_3 = Math.abs(x_1) < 0.001;
    } else {
      tmp_3 = false;
    }
    if (tmp_3) {
      // Inline function 'kotlin.math.abs' call
      var x_2 = a.get_d_1mhr5n_k$() - b.get_d_1mhr5n_k$();
      tmp_2 = Math.abs(x_2) < 0.002;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      // Inline function 'kotlin.math.abs' call
      var x_3 = a.get_e_1mhr5o_k$() - b.get_e_1mhr5o_k$();
      tmp_1 = Math.abs(x_3) < 0.001;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      // Inline function 'kotlin.math.abs' call
      var x_4 = a.get_f_1mhr5p_k$() - b.get_f_1mhr5p_k$();
      tmp_0 = Math.abs(x_4) < 0.001;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      // Inline function 'kotlin.math.abs' call
      var x_5 = a.get_gamma_irsi2m_k$() - b.get_gamma_irsi2m_k$();
      tmp = Math.abs(x_5) < 0.001;
    } else {
      tmp = false;
    }
    return tmp;
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
  function compare_1(a, b) {
    if (a === b)
      return true;
    var tmp;
    // Inline function 'kotlin.math.abs' call
    var x = a.get_x_1mhr67_k$() - b.get_x_1mhr67_k$();
    if (Math.abs(x) < 0.001) {
      // Inline function 'kotlin.math.abs' call
      var x_0 = a.get_y_1mhr68_k$() - b.get_y_1mhr68_k$();
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
  function _get_NoneTransferParameters__hzx9fi($this) {
    return $this.NoneTransferParameters_1;
  }
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0).invoke_e0thbm_k$ = function (double) {
    return this.function_1(double);
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
    tmp.SrgbPrimaries_1 = new Float32Array([0.64, 0.33, 0.3, 0.6, 0.15, 0.06]);
    var tmp_0 = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp_0.Ntsc1953Primaries_1 = new Float32Array([0.67, 0.33, 0.21, 0.71, 0.14, 0.08]);
    this.SrgbTransferParameters_1 = new TransferParameters(2.4, 0.9478672985781991, 0.05213270142180095, 0.07739938080495357, 0.04045);
    this.NoneTransferParameters_1 = new TransferParameters(2.2, 0.9478672985781991, 0.05213270142180095, 0.07739938080495357, 0.04045);
    this.Srgb_1 = Rgb_init_$Create$_3('sRGB IEC61966-2.1', this.SrgbPrimaries_1, Illuminant_getInstance().get_D65_18jwbq_k$(), this.SrgbTransferParameters_1, 0);
    this.LinearSrgb_1 = Rgb_init_$Create$_6('sRGB IEC61966-2.1 (Linear)', this.SrgbPrimaries_1, Illuminant_getInstance().get_D65_18jwbq_k$(), 1.0, 0.0, 1.0, 1);
    var tmp_1 = this;
    var tmp_2 = Illuminant_getInstance().get_D65_18jwbq_k$();
    var tmp_3 = ColorSpaces$ExtendedSrgb$lambda;
    var tmp_4 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0(tmp_3);
    var tmp_5 = ColorSpaces$ExtendedSrgb$lambda_0;
    tmp_1.ExtendedSrgb_1 = new Rgb('scRGB-nl IEC 61966-2-2:2003', this.SrgbPrimaries_1, tmp_2, null, tmp_4, new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0(tmp_5), -0.799, 2.399, this.SrgbTransferParameters_1, 2);
    this.LinearExtendedSrgb_1 = Rgb_init_$Create$_6('scRGB IEC 61966-2-2:2003', this.SrgbPrimaries_1, Illuminant_getInstance().get_D65_18jwbq_k$(), 1.0, -0.5, 7.499, 3);
    var tmp_6 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$2 = new Float32Array([0.64, 0.33, 0.3, 0.6, 0.15, 0.06]);
    tmp_6.Bt709__1 = Rgb_init_$Create$_3('Rec. ITU-R BT.709-5', tmp$ret$2, Illuminant_getInstance().get_D65_18jwbq_k$(), new TransferParameters(2.2222222222222223, 0.9099181073703367, 0.09008189262966333, 0.2222222222222222, 0.081), 4);
    var tmp_7 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$3 = new Float32Array([0.708, 0.292, 0.17, 0.797, 0.131, 0.046]);
    tmp_7.Bt2020__1 = Rgb_init_$Create$_3('Rec. ITU-R BT.2020-1', tmp$ret$3, Illuminant_getInstance().get_D65_18jwbq_k$(), new TransferParameters(2.2222222222222223, 0.9096697898662786, 0.09033021013372146, 0.2222222222222222, 0.08145), 5);
    var tmp_8 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$4 = new Float32Array([0.68, 0.32, 0.265, 0.69, 0.15, 0.06]);
    tmp_8.DciP3__1 = Rgb_init_$Create$_6('SMPTE RP 431-2-2007 DCI (P3)', tmp$ret$4, new WhitePoint(0.314, 0.351), 2.6, 0.0, 1.0, 6);
    var tmp_9 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$5 = new Float32Array([0.68, 0.32, 0.265, 0.69, 0.15, 0.06]);
    tmp_9.DisplayP3__1 = Rgb_init_$Create$_3('Display P3', tmp$ret$5, Illuminant_getInstance().get_D65_18jwbq_k$(), this.SrgbTransferParameters_1, 7);
    this.Ntsc1953__1 = Rgb_init_$Create$_3('NTSC (1953)', this.Ntsc1953Primaries_1, Illuminant_getInstance().get_C_1mhr4q_k$(), new TransferParameters(2.2222222222222223, 0.9099181073703367, 0.09008189262966333, 0.2222222222222222, 0.081), 8);
    var tmp_10 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$6 = new Float32Array([0.63, 0.34, 0.31, 0.595, 0.155, 0.07]);
    tmp_10.SmpteC_1 = Rgb_init_$Create$_3('SMPTE-C RGB', tmp$ret$6, Illuminant_getInstance().get_D65_18jwbq_k$(), new TransferParameters(2.2222222222222223, 0.9099181073703367, 0.09008189262966333, 0.2222222222222222, 0.081), 9);
    var tmp_11 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$7 = new Float32Array([0.64, 0.33, 0.21, 0.71, 0.15, 0.06]);
    tmp_11.AdobeRgb_1 = Rgb_init_$Create$_6('Adobe RGB (1998)', tmp$ret$7, Illuminant_getInstance().get_D65_18jwbq_k$(), 2.2, 0.0, 1.0, 10);
    var tmp_12 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$8 = new Float32Array([0.7347, 0.2653, 0.1596, 0.8404, 0.0366, 1.0E-4]);
    tmp_12.ProPhotoRgb_1 = Rgb_init_$Create$_3('ROMM RGB ISO 22028-2:2013', tmp$ret$8, Illuminant_getInstance().get_D50_18jwcq_k$(), new TransferParameters(1.8, 1.0, 0.0, 0.0625, 0.031248), 11);
    var tmp_13 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$9 = new Float32Array([0.7347, 0.2653, 0.0, 1.0, 1.0E-4, -0.077]);
    tmp_13.Aces_1 = Rgb_init_$Create$_6('SMPTE ST 2065-1:2012 ACES', tmp$ret$9, Illuminant_getInstance().get_D60_18jwbv_k$(), 1.0, -65504.0, 65504.0, 12);
    var tmp_14 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$10 = new Float32Array([0.713, 0.293, 0.165, 0.83, 0.128, 0.044]);
    tmp_14.Acescg_1 = Rgb_init_$Create$_6('Academy S-2014-004 ACEScg', tmp$ret$10, Illuminant_getInstance().get_D60_18jwbv_k$(), 1.0, -65504.0, 65504.0, 13);
    this.CieXyz_1 = new Xyz('Generic XYZ', 14);
    this.CieLab_1 = new Lab('Generic L*a*b*', 15);
    this.Unspecified_1 = Rgb_init_$Create$_3('None', this.SrgbPrimaries_1, Illuminant_getInstance().get_D65_18jwbq_k$(), this.NoneTransferParameters_1, 16);
    this.Oklab_1 = new Oklab('Oklab', 17);
    var tmp_15 = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_15.ColorSpacesArray_1 = [this.Srgb_1, this.LinearSrgb_1, this.ExtendedSrgb_1, this.LinearExtendedSrgb_1, this.Bt709__1, this.Bt2020__1, this.DciP3__1, this.DisplayP3__1, this.Ntsc1953__1, this.SmpteC_1, this.AdobeRgb_1, this.ProPhotoRgb_1, this.Aces_1, this.Acescg_1, this.CieXyz_1, this.CieLab_1, this.Unspecified_1, this.Oklab_1];
  }
  protoOf(ColorSpaces).get_SrgbPrimaries_e57bel_k$ = function () {
    return this.SrgbPrimaries_1;
  };
  protoOf(ColorSpaces).get_Ntsc1953Primaries_s9kth_k$ = function () {
    return this.Ntsc1953Primaries_1;
  };
  protoOf(ColorSpaces).get_SrgbTransferParameters_mwzq88_k$ = function () {
    return this.SrgbTransferParameters_1;
  };
  protoOf(ColorSpaces).get_Srgb_woa2g3_k$ = function () {
    return this.Srgb_1;
  };
  protoOf(ColorSpaces).get_LinearSrgb_gaeay0_k$ = function () {
    return this.LinearSrgb_1;
  };
  protoOf(ColorSpaces).get_ExtendedSrgb_860058_k$ = function () {
    return this.ExtendedSrgb_1;
  };
  protoOf(ColorSpaces).get_LinearExtendedSrgb_2lon29_k$ = function () {
    return this.LinearExtendedSrgb_1;
  };
  protoOf(ColorSpaces).get_Bt709_i7r3c5_k$ = function () {
    return this.Bt709__1;
  };
  protoOf(ColorSpaces).get_Bt2020_3knrex_k$ = function () {
    return this.Bt2020__1;
  };
  protoOf(ColorSpaces).get_DciP3_i8kvl0_k$ = function () {
    return this.DciP3__1;
  };
  protoOf(ColorSpaces).get_DisplayP3_pa2gtg_k$ = function () {
    return this.DisplayP3__1;
  };
  protoOf(ColorSpaces).get_Ntsc1953_2r08mz_k$ = function () {
    return this.Ntsc1953__1;
  };
  protoOf(ColorSpaces).get_SmpteC_4ee9z9_k$ = function () {
    return this.SmpteC_1;
  };
  protoOf(ColorSpaces).get_AdobeRgb_p3r0p3_k$ = function () {
    return this.AdobeRgb_1;
  };
  protoOf(ColorSpaces).get_ProPhotoRgb_ygdri9_k$ = function () {
    return this.ProPhotoRgb_1;
  };
  protoOf(ColorSpaces).get_Aces_wny9ix_k$ = function () {
    return this.Aces_1;
  };
  protoOf(ColorSpaces).get_Acescg_4a3wo3_k$ = function () {
    return this.Acescg_1;
  };
  protoOf(ColorSpaces).get_CieXyz_38qfst_k$ = function () {
    return this.CieXyz_1;
  };
  protoOf(ColorSpaces).get_CieLab_38qpah_k$ = function () {
    return this.CieLab_1;
  };
  protoOf(ColorSpaces).get_Unspecified_el0w4u_k$ = function () {
    return this.Unspecified_1;
  };
  protoOf(ColorSpaces).get_Oklab_ierso8_k$ = function () {
    return this.Oklab_1;
  };
  protoOf(ColorSpaces).match_edbbcy_k$ = function (toXYZD50, function_0) {
    var indexedObject = this.ColorSpacesArray_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var colorSpace = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (equals(colorSpace.get_model_b1t9lk_k$(), Companion_getInstance_36().get_Rgb_ehihd0_k$())) {
        var tmp = adapt(colorSpace, Illuminant_getInstance().get_D50_18jwcq_k$());
        var rgb = tmp instanceof Rgb ? tmp : THROW_CCE();
        if (compare(toXYZD50, rgb.get_transform_px941v_k$()) ? compare_0(function_0, rgb.get_transferParameters_ak703m_k$()) : false) {
          return colorSpace;
        }
      }
    }
    return null;
  };
  protoOf(ColorSpaces).getColorSpace_ree0gv_k$ = function (id) {
    return this.ColorSpacesArray_1[id];
  };
  protoOf(ColorSpaces).get_ColorSpacesArray_qsodou_k$ = function () {
    return this.ColorSpacesArray_1;
  };
  var ColorSpaces_instance;
  function ColorSpaces_getInstance() {
    if (ColorSpaces_instance == null)
      new ColorSpaces();
    return ColorSpaces_instance;
  }
  function _get_mSource__pfxk2f($this) {
    return $this.mSource_1;
  }
  function _get_mDestination__f08o3u($this) {
    return $this.mDestination_1;
  }
  function _get_mTransform__1c5rl8($this) {
    return $this.mTransform_1;
  }
  function computeTransform($this, source, destination, intent) {
    if (compare_1(source.get_whitePoint_g4n5ow_k$(), destination.get_whitePoint_g4n5ow_k$())) {
      return mul3x3(destination.get_inverseTransform_5ywsth_k$(), source.get_transform_px941v_k$());
    } else {
      var transform = source.get_transform_px941v_k$();
      var inverseTransform = destination.get_inverseTransform_5ywsth_k$();
      var srcXYZ = source.get_whitePoint_g4n5ow_k$().toXyz_1tswm6_k$();
      var dstXYZ = destination.get_whitePoint_g4n5ow_k$().toXyz_1tswm6_k$();
      if (!compare_1(source.get_whitePoint_g4n5ow_k$(), Illuminant_getInstance().get_D50_18jwcq_k$())) {
        var tmp = Companion_getInstance_35().get_Bradford_vb0mll_k$().get_transform_px941v_k$();
        // Inline function 'kotlin.collections.copyOf' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = Illuminant_getInstance().get_D50Xyz_3l7ykd_k$().slice();
        var srcAdaptation = chromaticAdaptation(tmp, srcXYZ, tmp$ret$1);
        transform = mul3x3(srcAdaptation, source.get_transform_px941v_k$());
      }
      if (!compare_1(destination.get_whitePoint_g4n5ow_k$(), Illuminant_getInstance().get_D50_18jwcq_k$())) {
        var tmp_0 = Companion_getInstance_35().get_Bradford_vb0mll_k$().get_transform_px941v_k$();
        // Inline function 'kotlin.collections.copyOf' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$3 = Illuminant_getInstance().get_D50Xyz_3l7ykd_k$().slice();
        var dstAdaptation = chromaticAdaptation(tmp_0, dstXYZ, tmp$ret$3);
        inverseTransform = inverse3x3(mul3x3(dstAdaptation, destination.get_transform_px941v_k$()));
      }
      if (intent === Companion_getInstance_41().get_Absolute_v1xj70_k$()) {
        // Inline function 'kotlin.floatArrayOf' call
        var tmp$ret$4 = new Float32Array([srcXYZ[0] / dstXYZ[0], srcXYZ[1] / dstXYZ[1], srcXYZ[2] / dstXYZ[2]]);
        transform = mul3x3Diag(tmp$ret$4, transform);
      }
      return mul3x3(inverseTransform, transform);
    }
  }
  function computeTransform_0($this, source, destination, intent) {
    if (!(intent === Companion_getInstance_41().get_Absolute_v1xj70_k$()))
      return null;
    var srcRGB = equals(source.get_model_b1t9lk_k$(), Companion_getInstance_36().get_Rgb_ehihd0_k$());
    var dstRGB = equals(destination.get_model_b1t9lk_k$(), Companion_getInstance_36().get_Rgb_ehihd0_k$());
    if (srcRGB ? dstRGB : false)
      return null;
    if (srcRGB ? true : dstRGB) {
      var tmp = srcRGB ? source : destination;
      var rgb = tmp instanceof Rgb ? tmp : THROW_CCE();
      var srcXYZ = srcRGB ? rgb.get_whitePoint_g4n5ow_k$().toXyz_1tswm6_k$() : Illuminant_getInstance().get_D50Xyz_3l7ykd_k$();
      var dstXYZ = dstRGB ? rgb.get_whitePoint_g4n5ow_k$().toXyz_1tswm6_k$() : Illuminant_getInstance().get_D50Xyz_3l7ykd_k$();
      // Inline function 'kotlin.floatArrayOf' call
      return new Float32Array([srcXYZ[0] / dstXYZ[0], srcXYZ[1] / dstXYZ[1], srcXYZ[2] / dstXYZ[2]]);
    }
    return null;
  }
  function Connector$Companion$identity$1($source) {
    Connector_init_$Init$($source, $source, Companion_getInstance_41().get_Relative_86s99b_k$(), this);
  }
  protoOf(Connector$Companion$identity$1).transform_82bv4k_k$ = function (v) {
    return v;
  };
  protoOf(Connector$Companion$identity$1).transformToColor_57p277_k$ = function (r, g, b, a) {
    return Color_0(r, g, b, a, this.destination_1);
  };
  function _get_transformSource__ks0k3a($this) {
    return $this.transformSource_1;
  }
  function _get_transformDestination__y9np1l($this) {
    return $this.transformDestination_1;
  }
  function _get_transform__ku8tb9($this) {
    return $this.transform_1;
  }
  function Connector_init_$Init$(source, destination, intent, $this) {
    var tmp = equals(source.get_model_b1t9lk_k$(), Companion_getInstance_36().get_Rgb_ehihd0_k$()) ? adapt(source, Illuminant_getInstance().get_D50_18jwcq_k$()) : source;
    var tmp_0;
    if (equals(destination.get_model_b1t9lk_k$(), Companion_getInstance_36().get_Rgb_ehihd0_k$())) {
      tmp_0 = adapt(destination, Illuminant_getInstance().get_D50_18jwcq_k$());
    } else {
      tmp_0 = destination;
    }
    Connector.call($this, source, destination, tmp, tmp_0, intent, computeTransform_0(Companion_getInstance_38(), source, destination, intent));
    return $this;
  }
  function Connector_init_$Create$(source, destination, intent) {
    return Connector_init_$Init$(source, destination, intent, objectCreate(protoOf(Connector)));
  }
  function RgbConnector(mSource, mDestination, intent) {
    Connector.call(this, mSource, mDestination, mSource, mDestination, intent, null);
    this.mSource_1 = mSource;
    this.mDestination_1 = mDestination;
    this.mTransform_1 = computeTransform(this, this.mSource_1, this.mDestination_1, intent);
  }
  protoOf(RgbConnector).transform_82bv4k_k$ = function (v) {
    v[0] = this.mSource_1.get_eotfFunc_j2khmx_k$().invoke_e0thbm_k$(v[0]);
    v[1] = this.mSource_1.get_eotfFunc_j2khmx_k$().invoke_e0thbm_k$(v[1]);
    v[2] = this.mSource_1.get_eotfFunc_j2khmx_k$().invoke_e0thbm_k$(v[2]);
    mul3x3Float3(this.mTransform_1, v);
    v[0] = this.mDestination_1.get_oetfFunc_igma2d_k$().invoke_e0thbm_k$(v[0]);
    v[1] = this.mDestination_1.get_oetfFunc_igma2d_k$().invoke_e0thbm_k$(v[1]);
    v[2] = this.mDestination_1.get_oetfFunc_igma2d_k$().invoke_e0thbm_k$(v[2]);
    return v;
  };
  protoOf(RgbConnector).transformToColor_57p277_k$ = function (r, g, b, a) {
    var v0 = this.mSource_1.get_eotfFunc_j2khmx_k$().invoke_e0thbm_k$(r);
    var v1 = this.mSource_1.get_eotfFunc_j2khmx_k$().invoke_e0thbm_k$(g);
    var v2 = this.mSource_1.get_eotfFunc_j2khmx_k$().invoke_e0thbm_k$(b);
    var v01 = mul3x3Float3_0(this.mTransform_1, v0, v1, v2);
    var v11 = mul3x3Float3_1(this.mTransform_1, v0, v1, v2);
    var v21 = mul3x3Float3_2(this.mTransform_1, v0, v1, v2);
    var v02 = this.mDestination_1.get_oetfFunc_igma2d_k$().invoke_e0thbm_k$(v01);
    var v12 = this.mDestination_1.get_oetfFunc_igma2d_k$().invoke_e0thbm_k$(v11);
    var v22 = this.mDestination_1.get_oetfFunc_igma2d_k$().invoke_e0thbm_k$(v21);
    return Color_0(v02, v12, v22, a, this.mDestination_1);
  };
  function Companion_24() {
    Companion_instance_24 = this;
    this.SrgbIdentity_1 = this.identity_5fevof_k$(ColorSpaces_getInstance().get_Srgb_woa2g3_k$());
    this.SrgbToOklabPerceptual_1 = Connector_init_$Create$(ColorSpaces_getInstance().get_Srgb_woa2g3_k$(), ColorSpaces_getInstance().get_Oklab_ierso8_k$(), Companion_getInstance_41().get_Perceptual_orjm5u_k$());
    this.OklabToSrgbPerceptual_1 = Connector_init_$Create$(ColorSpaces_getInstance().get_Oklab_ierso8_k$(), ColorSpaces_getInstance().get_Srgb_woa2g3_k$(), Companion_getInstance_41().get_Perceptual_orjm5u_k$());
  }
  protoOf(Companion_24).identity_5fevof_k$ = function (source) {
    return new Connector$Companion$identity$1(source);
  };
  protoOf(Companion_24).get_SrgbIdentity_7ohf7j_k$ = function () {
    return this.SrgbIdentity_1;
  };
  protoOf(Companion_24).get_SrgbToOklabPerceptual_ubj5w0_k$ = function () {
    return this.SrgbToOklabPerceptual_1;
  };
  protoOf(Companion_24).get_OklabToSrgbPerceptual_iguhs6_k$ = function () {
    return this.OklabToSrgbPerceptual_1;
  };
  var Companion_instance_24;
  function Companion_getInstance_38() {
    if (Companion_instance_24 == null)
      new Companion_24();
    return Companion_instance_24;
  }
  function Connector(source, destination, transformSource, transformDestination, renderIntent, transform) {
    Companion_getInstance_38();
    this.source_1 = source;
    this.destination_1 = destination;
    this.transformSource_1 = transformSource;
    this.transformDestination_1 = transformDestination;
    this.renderIntent_1 = renderIntent;
    this.transform_1 = transform;
  }
  protoOf(Connector).get_source_jl0x7o_k$ = function () {
    return this.source_1;
  };
  protoOf(Connector).get_destination_9r3c63_k$ = function () {
    return this.destination_1;
  };
  protoOf(Connector).get_renderIntent_47zyf_k$ = function () {
    return this.renderIntent_1;
  };
  protoOf(Connector).transform_px7d8_k$ = function (r, g, b) {
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([r, g, b]);
    return this.transform_82bv4k_k$(tmp$ret$0);
  };
  protoOf(Connector).transform_82bv4k_k$ = function (v) {
    var xyz = this.transformSource_1.toXyz_c5nzk6_k$(v);
    if (!(this.transform_1 == null)) {
      xyz[0] = xyz[0] * this.transform_1[0];
      xyz[1] = xyz[1] * this.transform_1[1];
      xyz[2] = xyz[2] * this.transform_1[2];
    }
    return this.transformDestination_1.fromXyz_ghg1av_k$(xyz);
  };
  protoOf(Connector).transformToColor_57p277_k$ = function (r, g, b, a) {
    var packed = this.transformSource_1.toXy_53ljx8_k$(r, g, b);
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var bits = packed.shr_9fl3wl_k$(32).toInt_1tsl84_k$();
    var x = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var bits_0 = packed.and_4spn93_k$(new Long(-1, 0)).toInt_1tsl84_k$();
    var y = floatFromBits(bits_0);
    var z = this.transformSource_1.toZ_xzs7on_k$(r, g, b);
    if (!(this.transform_1 == null)) {
      x = x * this.transform_1[0];
      y = y * this.transform_1[1];
      z = z * this.transform_1[2];
    }
    return this.transformDestination_1.xyzaToColor_fee27c_k$(x, y, z, a, this.destination_1);
  };
  function Illuminant() {
    Illuminant_instance = this;
    this.A_1 = new WhitePoint(0.44757, 0.40745);
    this.B_1 = new WhitePoint(0.34842, 0.35161);
    this.C_1 = new WhitePoint(0.31006, 0.31616);
    this.D50__1 = new WhitePoint(0.34567, 0.3585);
    this.D55__1 = new WhitePoint(0.33242, 0.34743);
    this.D60__1 = new WhitePoint(0.32168, 0.33767);
    this.D65__1 = new WhitePoint(0.31271, 0.32902);
    this.D75__1 = new WhitePoint(0.29902, 0.31485);
    this.E_1 = new WhitePoint(0.33333, 0.33333);
    var tmp = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp.D50Xyz_1 = new Float32Array([0.964212, 1.0, 0.825188]);
  }
  protoOf(Illuminant).get_A_1mhr4o_k$ = function () {
    return this.A_1;
  };
  protoOf(Illuminant).get_B_1mhr4p_k$ = function () {
    return this.B_1;
  };
  protoOf(Illuminant).get_C_1mhr4q_k$ = function () {
    return this.C_1;
  };
  protoOf(Illuminant).get_D50_18jwcq_k$ = function () {
    return this.D50__1;
  };
  protoOf(Illuminant).get_D55_18jwcl_k$ = function () {
    return this.D55__1;
  };
  protoOf(Illuminant).get_D60_18jwbv_k$ = function () {
    return this.D60__1;
  };
  protoOf(Illuminant).get_D65_18jwbq_k$ = function () {
    return this.D65__1;
  };
  protoOf(Illuminant).get_D75_18jwav_k$ = function () {
    return this.D75__1;
  };
  protoOf(Illuminant).get_E_1mhr4s_k$ = function () {
    return this.E_1;
  };
  protoOf(Illuminant).get_D50Xyz_3l7ykd_k$ = function () {
    return this.D50Xyz_1;
  };
  var Illuminant_instance;
  function Illuminant_getInstance() {
    if (Illuminant_instance == null)
      new Illuminant();
    return Illuminant_instance;
  }
  function _get_A__7mlnow($this) {
    return $this.A_1;
  }
  function _get_B__7mlnpr($this) {
    return $this.B_1;
  }
  function _get_C__7mlnqm($this) {
    return $this.C_1;
  }
  function _get_D__7mlnrh($this) {
    return $this.D_1;
  }
  function Companion_25() {
    Companion_instance_25 = this;
    this.A_1 = 0.008856452;
    this.B_1 = 7.787037;
    this.C_1 = 0.13793103;
    this.D_1 = 0.20689656;
  }
  var Companion_instance_25;
  function Companion_getInstance_39() {
    if (Companion_instance_25 == null)
      new Companion_25();
    return Companion_instance_25;
  }
  function Lab(name, id) {
    Companion_getInstance_39();
    ColorSpace.call(this, name, Companion_getInstance_36().get_Lab_1fs2w4_k$(), id);
  }
  protoOf(Lab).get_isWideGamut_oxj4to_k$ = function () {
    return true;
  };
  protoOf(Lab).getMinValue_3znj7n_k$ = function (component) {
    return component === 0 ? 0.0 : -128.0;
  };
  protoOf(Lab).getMaxValue_kswgkr_k$ = function (component) {
    return component === 0 ? 100.0 : 128.0;
  };
  protoOf(Lab).toXyz_c5nzk6_k$ = function (v) {
    v[0] = coerceIn(v[0], 0.0, 100.0);
    v[1] = coerceIn(v[1], -128.0, 128.0);
    v[2] = coerceIn(v[2], -128.0, 128.0);
    var fy = (v[0] + 16.0) / 116.0;
    var fx = fy + v[1] * 0.002;
    var fz = fy - v[2] * 0.005;
    var x = fx > 0.20689656 ? fx * fx * fx : 0.12841854995680643 * (fx - 0.13793103);
    var y = fy > 0.20689656 ? fy * fy * fy : 0.12841854995680643 * (fy - 0.13793103);
    var z = fz > 0.20689656 ? fz * fz * fz : 0.12841854995680643 * (fz - 0.13793103);
    v[0] = x * Illuminant_getInstance().get_D50Xyz_3l7ykd_k$()[0];
    v[1] = y * Illuminant_getInstance().get_D50Xyz_3l7ykd_k$()[1];
    v[2] = z * Illuminant_getInstance().get_D50Xyz_3l7ykd_k$()[2];
    return v;
  };
  protoOf(Lab).toXy_53ljx8_k$ = function (v0, v1, v2) {
    var v00 = coerceIn(v0, 0.0, 100.0);
    var v10 = coerceIn(v1, -128.0, 128.0);
    var fy = (v00 + 16.0) / 116.0;
    var fx = fy + v10 * 0.002;
    var x = fx > 0.20689656 ? fx * fx * fx : 0.12841854995680643 * (fx - 0.13793103);
    var y = fy > 0.20689656 ? fy * fy * fy : 0.12841854995680643 * (fy - 0.13793103);
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val1 = x * Illuminant_getInstance().get_D50Xyz_3l7ykd_k$()[0];
    var val2 = y * Illuminant_getInstance().get_D50Xyz_3l7ykd_k$()[1];
    var v1_0 = toLong(toRawBits(val1));
    var v2_0 = toLong(toRawBits(val2));
    return v1_0.shl_bg8if3_k$(32).or_v7fvkl_k$(v2_0.and_4spn93_k$(new Long(-1, 0)));
  };
  protoOf(Lab).toZ_xzs7on_k$ = function (v0, v1, v2) {
    var v00 = coerceIn(v0, 0.0, 100.0);
    var v20 = coerceIn(v2, -128.0, 128.0);
    var fy = (v00 + 16.0) / 116.0;
    var fz = fy - v20 * 0.005;
    var z = fz > 0.20689656 ? fz * fz * fz : 0.12841854995680643 * (fz - 0.13793103);
    return z * Illuminant_getInstance().get_D50Xyz_3l7ykd_k$()[2];
  };
  protoOf(Lab).xyzaToColor_fee27c_k$ = function (x, y, z, a, colorSpace) {
    var x1 = x / Illuminant_getInstance().get_D50Xyz_3l7ykd_k$()[0];
    var y1 = y / Illuminant_getInstance().get_D50Xyz_3l7ykd_k$()[1];
    var z1 = z / Illuminant_getInstance().get_D50Xyz_3l7ykd_k$()[2];
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
  protoOf(Lab).fromXyz_ghg1av_k$ = function (v) {
    var x = v[0] / Illuminant_getInstance().get_D50Xyz_3l7ykd_k$()[0];
    var y = v[1] / Illuminant_getInstance().get_D50Xyz_3l7ykd_k$()[1];
    var z = v[2] / Illuminant_getInstance().get_D50Xyz_3l7ykd_k$()[2];
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
  function _get_M1__ndbh53($this) {
    return $this.M1__1;
  }
  function _get_M2__ndbh5y($this) {
    return $this.M2__1;
  }
  function _get_InverseM1__sa58eb($this) {
    return $this.InverseM1__1;
  }
  function _get_InverseM2__sa58dg($this) {
    return $this.InverseM2__1;
  }
  function Companion_26() {
    Companion_instance_26 = this;
    var tmp = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([0.818933, 0.032984544, 0.0482003, 0.36186674, 0.9293119, 0.26436627, -0.12885971, 0.03614564, 0.6338517]);
    tmp.M1__1 = mul3x3(tmp$ret$0, chromaticAdaptation(Companion_getInstance_35().get_Bradford_vb0mll_k$().get_transform_px941v_k$(), Illuminant_getInstance().get_D50_18jwcq_k$().toXyz_1tswm6_k$(), Illuminant_getInstance().get_D65_18jwbq_k$().toXyz_1tswm6_k$()));
    var tmp_0 = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp_0.M2__1 = new Float32Array([0.21045426, 1.9779985, 0.025904037, 0.7936178, -2.4285922, 0.78277177, -0.004072047, 0.4505937, -0.80867577]);
    this.InverseM1__1 = inverse3x3(this.M1__1);
    this.InverseM2__1 = inverse3x3(this.M2__1);
  }
  var Companion_instance_26;
  function Companion_getInstance_40() {
    if (Companion_instance_26 == null)
      new Companion_26();
    return Companion_instance_26;
  }
  function Oklab(name, id) {
    Companion_getInstance_40();
    ColorSpace.call(this, name, Companion_getInstance_36().get_Lab_1fs2w4_k$(), id);
  }
  protoOf(Oklab).get_isWideGamut_oxj4to_k$ = function () {
    return true;
  };
  protoOf(Oklab).getMinValue_3znj7n_k$ = function (component) {
    return component === 0 ? 0.0 : -0.5;
  };
  protoOf(Oklab).getMaxValue_kswgkr_k$ = function (component) {
    return component === 0 ? 1.0 : 0.5;
  };
  protoOf(Oklab).toXyz_c5nzk6_k$ = function (v) {
    v[0] = coerceIn(v[0], 0.0, 1.0);
    v[1] = coerceIn(v[1], -0.5, 0.5);
    v[2] = coerceIn(v[2], -0.5, 0.5);
    mul3x3Float3(Companion_getInstance_40().InverseM2__1, v);
    v[0] = v[0] * v[0] * v[0];
    v[1] = v[1] * v[1] * v[1];
    v[2] = v[2] * v[2] * v[2];
    mul3x3Float3(Companion_getInstance_40().InverseM1__1, v);
    return v;
  };
  protoOf(Oklab).toXy_53ljx8_k$ = function (v0, v1, v2) {
    var v00 = coerceIn(v0, 0.0, 1.0);
    var v10 = coerceIn(v1, -0.5, 0.5);
    var v20 = coerceIn(v2, -0.5, 0.5);
    var v01 = mul3x3Float3_0(Companion_getInstance_40().InverseM2__1, v00, v10, v20);
    var v11 = mul3x3Float3_1(Companion_getInstance_40().InverseM2__1, v00, v10, v20);
    var v21 = mul3x3Float3_2(Companion_getInstance_40().InverseM2__1, v00, v10, v20);
    var v02 = v01 * v01 * v01;
    var v12 = v11 * v11 * v11;
    var v22 = v21 * v21 * v21;
    var v03 = mul3x3Float3_0(Companion_getInstance_40().InverseM1__1, v02, v12, v22);
    var v13 = mul3x3Float3_1(Companion_getInstance_40().InverseM1__1, v02, v12, v22);
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1_0 = toLong(toRawBits(v03));
    var v2_0 = toLong(toRawBits(v13));
    return v1_0.shl_bg8if3_k$(32).or_v7fvkl_k$(v2_0.and_4spn93_k$(new Long(-1, 0)));
  };
  protoOf(Oklab).toZ_xzs7on_k$ = function (v0, v1, v2) {
    var v00 = coerceIn(v0, 0.0, 1.0);
    var v10 = coerceIn(v1, -0.5, 0.5);
    var v20 = coerceIn(v2, -0.5, 0.5);
    var v01 = mul3x3Float3_0(Companion_getInstance_40().InverseM2__1, v00, v10, v20);
    var v11 = mul3x3Float3_1(Companion_getInstance_40().InverseM2__1, v00, v10, v20);
    var v21 = mul3x3Float3_2(Companion_getInstance_40().InverseM2__1, v00, v10, v20);
    var v02 = v01 * v01 * v01;
    var v12 = v11 * v11 * v11;
    var v22 = v21 * v21 * v21;
    var v23 = mul3x3Float3_2(Companion_getInstance_40().InverseM1__1, v02, v12, v22);
    return v23;
  };
  protoOf(Oklab).xyzaToColor_fee27c_k$ = function (x, y, z, a, colorSpace) {
    var v0 = mul3x3Float3_0(Companion_getInstance_40().M1__1, x, y, z);
    var v1 = mul3x3Float3_1(Companion_getInstance_40().M1__1, x, y, z);
    var v2 = mul3x3Float3_2(Companion_getInstance_40().M1__1, x, y, z);
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
    var v01 = mul3x3Float3_0(Companion_getInstance_40().M2__1, v0, v1, v2);
    var v11 = mul3x3Float3_1(Companion_getInstance_40().M2__1, v0, v1, v2);
    var v21 = mul3x3Float3_2(Companion_getInstance_40().M2__1, v0, v1, v2);
    return Color_0(v01, v11, v21, a, colorSpace);
  };
  protoOf(Oklab).fromXyz_ghg1av_k$ = function (v) {
    mul3x3Float3(Companion_getInstance_40().M1__1, v);
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
    mul3x3Float3(Companion_getInstance_40().M2__1, v);
    return v;
  };
  function _RenderIntent___init__impl__jceahd(value) {
    return value;
  }
  function _get_value__a43j40_10($this) {
    return $this;
  }
  function Companion_27() {
    Companion_instance_27 = this;
    this.Perceptual_1 = _RenderIntent___init__impl__jceahd(0);
    this.Relative_1 = _RenderIntent___init__impl__jceahd(1);
    this.Saturation_1 = _RenderIntent___init__impl__jceahd(2);
    this.Absolute_1 = _RenderIntent___init__impl__jceahd(3);
  }
  protoOf(Companion_27).get_Perceptual_orjm5u_k$ = function () {
    return this.Perceptual_1;
  };
  protoOf(Companion_27).get_Relative_86s99b_k$ = function () {
    return this.Relative_1;
  };
  protoOf(Companion_27).get_Saturation_xsye3d_k$ = function () {
    return this.Saturation_1;
  };
  protoOf(Companion_27).get_Absolute_v1xj70_k$ = function () {
    return this.Absolute_1;
  };
  var Companion_instance_27;
  function Companion_getInstance_41() {
    if (Companion_instance_27 == null)
      new Companion_27();
    return Companion_instance_27;
  }
  function RenderIntent__toString_impl_b479rl($this) {
    return $this === Companion_getInstance_41().Perceptual_1 ? 'Perceptual' : $this === Companion_getInstance_41().Relative_1 ? 'Relative' : $this === Companion_getInstance_41().Saturation_1 ? 'Saturation' : $this === Companion_getInstance_41().Absolute_1 ? 'Absolute' : 'Unknown';
  }
  function RenderIntent__hashCode_impl_wvd6kg($this) {
    return $this;
  }
  function RenderIntent__equals_impl_5o84ik($this, other) {
    if (!(other instanceof RenderIntent))
      return false;
    if (!($this === (other instanceof RenderIntent ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function RenderIntent(value) {
    Companion_getInstance_41();
    this.value_1 = value;
  }
  protoOf(RenderIntent).toString = function () {
    return RenderIntent__toString_impl_b479rl(this.value_1);
  };
  protoOf(RenderIntent).hashCode = function () {
    return RenderIntent__hashCode_impl_wvd6kg(this.value_1);
  };
  protoOf(RenderIntent).equals = function (other) {
    return RenderIntent__equals_impl_5o84ik(this.value_1, other);
  };
  function _get_DoubleIdentity__g3p9ng($this) {
    return $this.DoubleIdentity_1;
  }
  function isSrgb($this, primaries, whitePoint, OETF, EOTF, min, max, id) {
    if (id === 0)
      return true;
    if (!compare(primaries, ColorSpaces_getInstance().get_SrgbPrimaries_e57bel_k$())) {
      return false;
    }
    if (!compare_1(whitePoint, Illuminant_getInstance().get_D65_18jwbq_k$())) {
      return false;
    }
    if (!(min === 0.0))
      return false;
    if (!(max === 1.0))
      return false;
    var srgb = ColorSpaces_getInstance().get_Srgb_woa2g3_k$();
    var x = 0.0;
    while (x <= 1.0) {
      if (!compare_2($this, x, OETF, srgb.oetfOrig_1))
        return false;
      if (!compare_2($this, x, EOTF, srgb.eotfOrig_1))
        return false;
      x = x + 0.00392156862745098;
    }
    return true;
  }
  function compare_2($this, point, a, b) {
    var rA = a.invoke_e0thbm_k$(point);
    var rB = b.invoke_e0thbm_k$(point);
    // Inline function 'kotlin.math.abs' call
    var x = rA - rB;
    return Math.abs(x) <= 0.001;
  }
  function isWideGamut($this, primaries, min, max) {
    return (area($this, primaries) / area($this, ColorSpaces_getInstance().get_Ntsc1953Primaries_s9kth_k$()) > 0.9 ? contains($this, primaries, ColorSpaces_getInstance().get_SrgbPrimaries_e57bel_k$()) : false) ? true : min < 0.0 ? max > 1.0 : false;
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
  function computeWhitePoint($this, toXYZ) {
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([1.0, 1.0, 1.0]);
    var w = mul3x3Float3(toXYZ, tmp$ret$0);
    var sum = w[0] + w[1] + w[2];
    return new WhitePoint(w[0] / sum, w[1] / sum);
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
    var wx = whitePoint.get_x_1mhr67_k$();
    var wy = whitePoint.get_y_1mhr68_k$();
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
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0).invoke_e0thbm_k$ = function (double) {
    return this.function_1(double);
  };
  function Rgb$Companion$DoubleIdentity$lambda(d) {
    return d;
  }
  function _get_min__e6ctxb($this) {
    return $this.min_1;
  }
  function _get_max__e6co8d($this) {
    return $this.max_1;
  }
  function Rgb_init_$Init$(name, toXYZ, oetf, eotf, $this) {
    var tmp = Companion_getInstance_42().computePrimaries_dtimn_k$(toXYZ);
    var tmp_0 = computeWhitePoint(Companion_getInstance_42(), toXYZ);
    var tmp_1 = Rgb$_init_$lambda_yyl4se(oetf);
    var tmp_2 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(tmp_1);
    var tmp_3 = Rgb$_init_$lambda_yyl4se_0(eotf);
    Rgb.call($this, name, tmp, tmp_0, null, tmp_2, new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(tmp_3), 0.0, 1.0, null, Companion_getInstance_37().get_MinId_idmyf8_k$());
    return $this;
  }
  function Rgb_init_$Create$(name, toXYZ, oetf, eotf) {
    return Rgb_init_$Init$(name, toXYZ, oetf, eotf, objectCreate(protoOf(Rgb)));
  }
  function Rgb_init_$Init$_0(name, primaries, whitePoint, oetf, eotf, min, max, $this) {
    var tmp = Rgb$_init_$lambda_yyl4se_1(oetf);
    var tmp_0 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4(tmp);
    var tmp_1 = Rgb$_init_$lambda_yyl4se_2(eotf);
    Rgb.call($this, name, primaries, whitePoint, null, tmp_0, new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4(tmp_1), min, max, null, Companion_getInstance_37().get_MinId_idmyf8_k$());
    return $this;
  }
  function Rgb_init_$Create$_0(name, primaries, whitePoint, oetf, eotf, min, max) {
    return Rgb_init_$Init$_0(name, primaries, whitePoint, oetf, eotf, min, max, objectCreate(protoOf(Rgb)));
  }
  function Rgb_init_$Init$_1(name, toXYZ, function_0, $this) {
    Rgb_init_$Init$_3(name, Companion_getInstance_42().computePrimaries_dtimn_k$(toXYZ), computeWhitePoint(Companion_getInstance_42(), toXYZ), function_0, Companion_getInstance_37().get_MinId_idmyf8_k$(), $this);
    return $this;
  }
  function Rgb_init_$Create$_1(name, toXYZ, function_0) {
    return Rgb_init_$Init$_1(name, toXYZ, function_0, objectCreate(protoOf(Rgb)));
  }
  function Rgb_init_$Init$_2(name, primaries, whitePoint, function_0, $this) {
    Rgb_init_$Init$_3(name, primaries, whitePoint, function_0, Companion_getInstance_37().get_MinId_idmyf8_k$(), $this);
    return $this;
  }
  function Rgb_init_$Create$_2(name, primaries, whitePoint, function_0) {
    return Rgb_init_$Init$_2(name, primaries, whitePoint, function_0, objectCreate(protoOf(Rgb)));
  }
  function Rgb_init_$Init$_3(name, primaries, whitePoint, function_0, id, $this) {
    var tmp;
    if (function_0.get_e_1mhr5o_k$() === 0.0 ? function_0.get_f_1mhr5p_k$() === 0.0 : false) {
      var tmp_0 = Rgb$_init_$lambda_yyl4se_3(function_0);
      tmp = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_5(tmp_0);
    } else {
      var tmp_1 = Rgb$_init_$lambda_yyl4se_4(function_0);
      tmp = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_5(tmp_1);
    }
    var tmp_2 = tmp;
    var tmp_3;
    if (function_0.get_e_1mhr5o_k$() === 0.0 ? function_0.get_f_1mhr5p_k$() === 0.0 : false) {
      var tmp_4 = Rgb$_init_$lambda_yyl4se_5(function_0);
      tmp_3 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_5(tmp_4);
    } else {
      var tmp_5 = Rgb$_init_$lambda_yyl4se_6(function_0);
      tmp_3 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_5(tmp_5);
    }
    Rgb.call($this, name, primaries, whitePoint, null, tmp_2, tmp_3, 0.0, 1.0, function_0, id);
    return $this;
  }
  function Rgb_init_$Create$_3(name, primaries, whitePoint, function_0, id) {
    return Rgb_init_$Init$_3(name, primaries, whitePoint, function_0, id, objectCreate(protoOf(Rgb)));
  }
  function Rgb_init_$Init$_4(name, toXYZ, gamma, $this) {
    Rgb_init_$Init$_6(name, Companion_getInstance_42().computePrimaries_dtimn_k$(toXYZ), computeWhitePoint(Companion_getInstance_42(), toXYZ), gamma, 0.0, 1.0, Companion_getInstance_37().get_MinId_idmyf8_k$(), $this);
    return $this;
  }
  function Rgb_init_$Create$_4(name, toXYZ, gamma) {
    return Rgb_init_$Init$_4(name, toXYZ, gamma, objectCreate(protoOf(Rgb)));
  }
  function Rgb_init_$Init$_5(name, primaries, whitePoint, gamma, $this) {
    Rgb_init_$Init$_6(name, primaries, whitePoint, gamma, 0.0, 1.0, Companion_getInstance_37().get_MinId_idmyf8_k$(), $this);
    return $this;
  }
  function Rgb_init_$Create$_5(name, primaries, whitePoint, gamma) {
    return Rgb_init_$Init$_5(name, primaries, whitePoint, gamma, objectCreate(protoOf(Rgb)));
  }
  function Rgb_init_$Init$_6(name, primaries, whitePoint, gamma, min, max, id, $this) {
    var tmp;
    if (gamma === 1.0) {
      tmp = Companion_getInstance_42().DoubleIdentity_1;
    } else {
      var tmp_0 = Rgb$_init_$lambda_yyl4se_7(gamma);
      tmp = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_6(tmp_0);
    }
    var tmp_1 = tmp;
    var tmp_2;
    if (gamma === 1.0) {
      tmp_2 = Companion_getInstance_42().DoubleIdentity_1;
    } else {
      var tmp_3 = Rgb$_init_$lambda_yyl4se_8(gamma);
      tmp_2 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_6(tmp_3);
    }
    Rgb.call($this, name, primaries, whitePoint, null, tmp_1, tmp_2, min, max, new TransferParameters(gamma, 1.0, 0.0, 0.0, 0.0), id);
    return $this;
  }
  function Rgb_init_$Create$_6(name, primaries, whitePoint, gamma, min, max, id) {
    return Rgb_init_$Init$_6(name, primaries, whitePoint, gamma, min, max, id, objectCreate(protoOf(Rgb)));
  }
  function Rgb_init_$Init$_7(colorSpace, transform, whitePoint, $this) {
    Rgb.call($this, colorSpace.get_name_woqyms_k$(), colorSpace.primaries_1, whitePoint, transform, colorSpace.oetfOrig_1, colorSpace.eotfOrig_1, colorSpace.min_1, colorSpace.max_1, colorSpace.transferParameters_1, Companion_getInstance_37().get_MinId_idmyf8_k$());
    return $this;
  }
  function Rgb_init_$Create$_7(colorSpace, transform, whitePoint) {
    return Rgb_init_$Init$_7(colorSpace, transform, whitePoint, objectCreate(protoOf(Rgb)));
  }
  function Companion_28() {
    Companion_instance_28 = this;
    var tmp = this;
    var tmp_0 = Rgb$Companion$DoubleIdentity$lambda;
    tmp.DoubleIdentity_1 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0(tmp_0);
  }
  protoOf(Companion_28).computePrimaries_dtimn_k$ = function (toXYZ) {
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([1.0, 0.0, 0.0]);
    var r = mul3x3Float3(toXYZ, tmp$ret$0);
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$1 = new Float32Array([0.0, 1.0, 0.0]);
    var g = mul3x3Float3(toXYZ, tmp$ret$1);
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$2 = new Float32Array([0.0, 0.0, 1.0]);
    var b = mul3x3Float3(toXYZ, tmp$ret$2);
    var rSum = r[0] + r[1] + r[2];
    var gSum = g[0] + g[1] + g[2];
    var bSum = b[0] + b[1] + b[2];
    // Inline function 'kotlin.floatArrayOf' call
    return new Float32Array([r[0] / rSum, r[1] / rSum, g[0] / gSum, g[1] / gSum, b[0] / bSum, b[1] / bSum]);
  };
  var Companion_instance_28;
  function Companion_getInstance_42() {
    if (Companion_instance_28 == null)
      new Companion_28();
    return Companion_instance_28;
  }
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1).invoke_e0thbm_k$ = function (double) {
    return this.function_1(double);
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2).invoke_e0thbm_k$ = function (double) {
    return this.function_1(double);
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3).invoke_e0thbm_k$ = function (double) {
    return this.function_1(double);
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4).invoke_e0thbm_k$ = function (double) {
    return this.function_1(double);
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_5(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_5).invoke_e0thbm_k$ = function (double) {
    return this.function_1(double);
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_6(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_6).invoke_e0thbm_k$ = function (double) {
    return this.function_1(double);
  };
  function Rgb$oetf$lambda(this$0) {
    return function (x) {
      return coerceIn_0(this$0.oetfOrig_1.invoke_e0thbm_k$(x), this$0.min_1, this$0.max_1);
    };
  }
  function Rgb$oetfFunc$lambda(this$0) {
    return function (x) {
      return coerceIn_0(this$0.oetfOrig_1.invoke_e0thbm_k$(x), this$0.min_1, this$0.max_1);
    };
  }
  function Rgb$eotf$lambda(this$0) {
    return function (x) {
      return this$0.eotfOrig_1.invoke_e0thbm_k$(coerceIn_0(x, this$0.min_1, this$0.max_1));
    };
  }
  function Rgb$eotfFunc$lambda(this$0) {
    return function (x) {
      return this$0.eotfOrig_1.invoke_e0thbm_k$(coerceIn_0(x, this$0.min_1, this$0.max_1));
    };
  }
  function Rgb$_init_$lambda_yyl4se($oetf) {
    return function (x) {
      return $oetf(x);
    };
  }
  function Rgb$_init_$lambda_yyl4se_0($eotf) {
    return function (x) {
      return $eotf(x);
    };
  }
  function Rgb$_init_$lambda_yyl4se_1($oetf) {
    return function (x) {
      return $oetf(x);
    };
  }
  function Rgb$_init_$lambda_yyl4se_2($eotf) {
    return function (x) {
      return $eotf(x);
    };
  }
  function Rgb$_init_$lambda_yyl4se_3($function) {
    return function (x) {
      return rcpResponse(x, $function.get_a_1mhr5k_k$(), $function.get_b_1mhr5l_k$(), $function.get_c_1mhr5m_k$(), $function.get_d_1mhr5n_k$(), $function.get_gamma_irsi2m_k$());
    };
  }
  function Rgb$_init_$lambda_yyl4se_4($function) {
    return function (x) {
      return rcpResponse_0(x, $function.get_a_1mhr5k_k$(), $function.get_b_1mhr5l_k$(), $function.get_c_1mhr5m_k$(), $function.get_d_1mhr5n_k$(), $function.get_e_1mhr5o_k$(), $function.get_f_1mhr5p_k$(), $function.get_gamma_irsi2m_k$());
    };
  }
  function Rgb$_init_$lambda_yyl4se_5($function) {
    return function (x) {
      return response(x, $function.get_a_1mhr5k_k$(), $function.get_b_1mhr5l_k$(), $function.get_c_1mhr5m_k$(), $function.get_d_1mhr5n_k$(), $function.get_gamma_irsi2m_k$());
    };
  }
  function Rgb$_init_$lambda_yyl4se_6($function) {
    return function (x) {
      return response_0(x, $function.get_a_1mhr5k_k$(), $function.get_b_1mhr5l_k$(), $function.get_c_1mhr5m_k$(), $function.get_d_1mhr5n_k$(), $function.get_e_1mhr5o_k$(), $function.get_f_1mhr5p_k$(), $function.get_gamma_irsi2m_k$());
    };
  }
  function Rgb$_init_$lambda_yyl4se_7($gamma) {
    return function (x) {
      // Inline function 'kotlin.math.pow' call
      var this_0 = x < 0.0 ? 0.0 : x;
      var x_0 = 1.0 / $gamma;
      return Math.pow(this_0, x_0);
    };
  }
  function Rgb$_init_$lambda_yyl4se_8($gamma) {
    return function (x) {
      // Inline function 'kotlin.math.pow' call
      var this_0 = x < 0.0 ? 0.0 : x;
      var x_0 = $gamma;
      return Math.pow(this_0, x_0);
    };
  }
  function Rgb(name, primaries, whitePoint, transform, oetf, eotf, min, max, transferParameters, id) {
    Companion_getInstance_42();
    ColorSpace.call(this, name, Companion_getInstance_36().get_Rgb_ehihd0_k$(), id);
    this.whitePoint_1 = whitePoint;
    this.min_1 = min;
    this.max_1 = max;
    this.transferParameters_1 = transferParameters;
    this.oetfOrig_1 = oetf;
    var tmp = this;
    tmp.oetf_1 = Rgb$oetf$lambda(this);
    var tmp_0 = this;
    var tmp_1 = Rgb$oetfFunc$lambda(this);
    tmp_0.oetfFunc_1 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1(tmp_1);
    this.eotfOrig_1 = eotf;
    var tmp_2 = this;
    tmp_2.eotf_1 = Rgb$eotf$lambda(this);
    var tmp_3 = this;
    var tmp_4 = Rgb$eotfFunc$lambda(this);
    tmp_3.eotfFunc_1 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2(tmp_4);
    if (!(primaries.length === 6) ? !(primaries.length === 9) : false) {
      throw IllegalArgumentException_init_$Create$("The color space's primaries must be defined as an array of 6 floats in xyY or 9 floats in XYZ");
    }
    if (this.min_1 >= this.max_1) {
      throw IllegalArgumentException_init_$Create$('Invalid range: min=' + this.min_1 + ', max=' + this.max_1 + '; min must ' + 'be strictly < max');
    }
    this.primaries_1 = xyPrimaries(Companion_getInstance_42(), primaries);
    if (transform == null) {
      this.transform_1 = computeXYZMatrix(Companion_getInstance_42(), this.primaries_1, this.whitePoint_1);
    } else {
      if (!(transform.length === 9)) {
        throw IllegalArgumentException_init_$Create$('Transform must have 9 entries! Has ' + ('' + transform.length));
      }
      this.transform_1 = transform;
    }
    this.inverseTransform_1 = inverse3x3(this.transform_1);
    this.isWideGamut_1 = isWideGamut(Companion_getInstance_42(), this.primaries_1, this.min_1, this.max_1);
    this.isSrgb_1 = isSrgb(Companion_getInstance_42(), this.primaries_1, this.whitePoint_1, oetf, eotf, this.min_1, this.max_1, id);
  }
  protoOf(Rgb).get_whitePoint_g4n5ow_k$ = function () {
    return this.whitePoint_1;
  };
  protoOf(Rgb).get_transferParameters_ak703m_k$ = function () {
    return this.transferParameters_1;
  };
  protoOf(Rgb).get_primaries_lyb4w9_k$ = function () {
    return this.primaries_1;
  };
  protoOf(Rgb).get_transform_px941v_k$ = function () {
    return this.transform_1;
  };
  protoOf(Rgb).get_inverseTransform_5ywsth_k$ = function () {
    return this.inverseTransform_1;
  };
  protoOf(Rgb).get_oetfOrig_igrylu_k$ = function () {
    return this.oetfOrig_1;
  };
  protoOf(Rgb).get_oetf_woror5_k$ = function () {
    return this.oetf_1;
  };
  protoOf(Rgb).get_oetfFunc_igma2d_k$ = function () {
    return this.oetfFunc_1;
  };
  protoOf(Rgb).get_eotfOrig_j2q66e_k$ = function () {
    return this.eotfOrig_1;
  };
  protoOf(Rgb).get_eotf_woliat_k$ = function () {
    return this.eotf_1;
  };
  protoOf(Rgb).get_eotfFunc_j2khmx_k$ = function () {
    return this.eotfFunc_1;
  };
  protoOf(Rgb).get_isWideGamut_oxj4to_k$ = function () {
    return this.isWideGamut_1;
  };
  protoOf(Rgb).get_isSrgb_ew666l_k$ = function () {
    return this.isSrgb_1;
  };
  protoOf(Rgb).getPrimaries_umjt7a_k$ = function () {
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.primaries_1.slice();
  };
  protoOf(Rgb).getTransform_h90fqu_k$ = function () {
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.transform_1.slice();
  };
  protoOf(Rgb).getInverseTransform_s9peaa_k$ = function () {
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.inverseTransform_1.slice();
  };
  protoOf(Rgb).getPrimaries_cgd4eq_k$ = function (primaries) {
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = this.primaries_1;
    var endIndex = this_0.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, primaries, 0, 0, endIndex);
    return primaries;
  };
  protoOf(Rgb).getTransform_ho9wm6_k$ = function (transform) {
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = this.transform_1;
    var endIndex = this_0.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, transform, 0, 0, endIndex);
    return transform;
  };
  protoOf(Rgb).getInverseTransform_9xw33u_k$ = function (inverseTransform) {
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = this.inverseTransform_1;
    var endIndex = this_0.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, inverseTransform, 0, 0, endIndex);
    return inverseTransform;
  };
  protoOf(Rgb).getMinValue_3znj7n_k$ = function (component) {
    return this.min_1;
  };
  protoOf(Rgb).getMaxValue_kswgkr_k$ = function (component) {
    return this.max_1;
  };
  protoOf(Rgb).toLinear_rejvnc_k$ = function (r, g, b) {
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([r, g, b]);
    return this.toLinear_yopst4_k$(tmp$ret$0);
  };
  protoOf(Rgb).toLinear_yopst4_k$ = function (v) {
    v[0] = this.eotfFunc_1.invoke_e0thbm_k$(v[0]);
    v[1] = this.eotfFunc_1.invoke_e0thbm_k$(v[1]);
    v[2] = this.eotfFunc_1.invoke_e0thbm_k$(v[2]);
    return v;
  };
  protoOf(Rgb).fromLinear_2dvbiv_k$ = function (r, g, b) {
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([r, g, b]);
    return this.fromLinear_qsrtdj_k$(tmp$ret$0);
  };
  protoOf(Rgb).fromLinear_qsrtdj_k$ = function (v) {
    v[0] = this.oetfFunc_1.invoke_e0thbm_k$(v[0]);
    v[1] = this.oetfFunc_1.invoke_e0thbm_k$(v[1]);
    v[2] = this.oetfFunc_1.invoke_e0thbm_k$(v[2]);
    return v;
  };
  protoOf(Rgb).toXyz_c5nzk6_k$ = function (v) {
    v[0] = this.eotfFunc_1.invoke_e0thbm_k$(v[0]);
    v[1] = this.eotfFunc_1.invoke_e0thbm_k$(v[1]);
    v[2] = this.eotfFunc_1.invoke_e0thbm_k$(v[2]);
    return mul3x3Float3(this.transform_1, v);
  };
  protoOf(Rgb).toXy_53ljx8_k$ = function (v0, v1, v2) {
    var v00 = this.eotfFunc_1.invoke_e0thbm_k$(v0);
    var v10 = this.eotfFunc_1.invoke_e0thbm_k$(v1);
    var v20 = this.eotfFunc_1.invoke_e0thbm_k$(v2);
    var x = mul3x3Float3_0(this.transform_1, v00, v10, v20);
    var y = mul3x3Float3_1(this.transform_1, v00, v10, v20);
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1_0 = toLong(toRawBits(x));
    var v2_0 = toLong(toRawBits(y));
    return v1_0.shl_bg8if3_k$(32).or_v7fvkl_k$(v2_0.and_4spn93_k$(new Long(-1, 0)));
  };
  protoOf(Rgb).toZ_xzs7on_k$ = function (v0, v1, v2) {
    var v00 = this.eotfFunc_1.invoke_e0thbm_k$(v0);
    var v10 = this.eotfFunc_1.invoke_e0thbm_k$(v1);
    var v20 = this.eotfFunc_1.invoke_e0thbm_k$(v2);
    var z = mul3x3Float3_2(this.transform_1, v00, v10, v20);
    return z;
  };
  protoOf(Rgb).xyzaToColor_fee27c_k$ = function (x, y, z, a, colorSpace) {
    var v0 = mul3x3Float3_0(this.inverseTransform_1, x, y, z);
    var v1 = mul3x3Float3_1(this.inverseTransform_1, x, y, z);
    var v2 = mul3x3Float3_2(this.inverseTransform_1, x, y, z);
    v0 = this.oetfFunc_1.invoke_e0thbm_k$(v0);
    v1 = this.oetfFunc_1.invoke_e0thbm_k$(v1);
    v2 = this.oetfFunc_1.invoke_e0thbm_k$(v2);
    return Color_0(v0, v1, v2, a, colorSpace);
  };
  protoOf(Rgb).fromXyz_ghg1av_k$ = function (v) {
    mul3x3Float3(this.inverseTransform_1, v);
    v[0] = this.oetfFunc_1.invoke_e0thbm_k$(v[0]);
    v[1] = this.oetfFunc_1.invoke_e0thbm_k$(v[1]);
    v[2] = this.oetfFunc_1.invoke_e0thbm_k$(v[2]);
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
    if (!(compareTo(rgb.min_1, this.min_1) === 0))
      return false;
    if (!(compareTo(rgb.max_1, this.max_1) === 0))
      return false;
    if (!this.whitePoint_1.equals(rgb.whitePoint_1))
      return false;
    if (!contentEquals(this.primaries_1, rgb.primaries_1))
      return false;
    if (!(this.transferParameters_1 == null)) {
      return equals(this.transferParameters_1, rgb.transferParameters_1);
    } else if (rgb.transferParameters_1 == null) {
      return true;
    }
    return !equals(this.oetfOrig_1, rgb.oetfOrig_1) ? false : equals(this.eotfOrig_1, rgb.eotfOrig_1);
  };
  protoOf(Rgb).hashCode = function () {
    var result = protoOf(ColorSpace).hashCode.call(this);
    result = imul(31, result) + this.whitePoint_1.hashCode() | 0;
    result = imul(31, result) + contentHashCode(this.primaries_1) | 0;
    result = imul(31, result) + (!(this.min_1 === 0.0) ? toBits(this.min_1) : 0) | 0;
    result = imul(31, result) + (!(this.max_1 === 0.0) ? toBits(this.max_1) : 0) | 0;
    result = imul(31, result) + (!(this.transferParameters_1 == null) ? this.transferParameters_1.hashCode() : 0) | 0;
    if (this.transferParameters_1 == null) {
      result = imul(31, result) + hashCode(this.oetfOrig_1) | 0;
      result = imul(31, result) + hashCode(this.eotfOrig_1) | 0;
    }
    return result;
  };
  function DoubleFunction() {
  }
  function TransferParameters(gamma, a, b, c, d, e, f) {
    e = e === VOID ? 0.0 : e;
    f = f === VOID ? 0.0 : f;
    this.gamma_1 = gamma;
    this.a_1 = a;
    this.b_1 = b;
    this.c_1 = c;
    this.d_1 = d;
    this.e_1 = e;
    this.f_1 = f;
    if ((((((isNaN_0(this.a_1) ? true : isNaN_0(this.b_1)) ? true : isNaN_0(this.c_1)) ? true : isNaN_0(this.d_1)) ? true : isNaN_0(this.e_1)) ? true : isNaN_0(this.f_1)) ? true : isNaN_0(this.gamma_1)) {
      throw IllegalArgumentException_init_$Create$('Parameters cannot be NaN');
    }
    if (!(this.d_1 >= 0.0 ? this.d_1 <= 1.0 : false)) {
      throw IllegalArgumentException_init_$Create$('Parameter d must be in the range [0..1], was ' + ('' + this.d_1));
    }
    if (this.d_1 === 0.0 ? this.a_1 === 0.0 ? true : this.gamma_1 === 0.0 : false) {
      throw IllegalArgumentException_init_$Create$('Parameter a or g is zero, the transfer function is constant');
    }
    if (this.d_1 >= 1.0 ? this.c_1 === 0.0 : false) {
      throw IllegalArgumentException_init_$Create$('Parameter c is zero, the transfer function is constant');
    }
    if ((this.a_1 === 0.0 ? true : this.gamma_1 === 0.0) ? this.c_1 === 0.0 : false) {
      throw IllegalArgumentException_init_$Create$('Parameter a or g is zero, and c is zero, the transfer function is constant');
    }
    if (this.c_1 < 0.0) {
      throw IllegalArgumentException_init_$Create$('The transfer function must be increasing');
    }
    if (this.a_1 < 0.0 ? true : this.gamma_1 < 0.0) {
      throw IllegalArgumentException_init_$Create$('The transfer function must be positive or increasing');
    }
  }
  protoOf(TransferParameters).get_gamma_irsi2m_k$ = function () {
    return this.gamma_1;
  };
  protoOf(TransferParameters).get_a_1mhr5k_k$ = function () {
    return this.a_1;
  };
  protoOf(TransferParameters).get_b_1mhr5l_k$ = function () {
    return this.b_1;
  };
  protoOf(TransferParameters).get_c_1mhr5m_k$ = function () {
    return this.c_1;
  };
  protoOf(TransferParameters).get_d_1mhr5n_k$ = function () {
    return this.d_1;
  };
  protoOf(TransferParameters).get_e_1mhr5o_k$ = function () {
    return this.e_1;
  };
  protoOf(TransferParameters).get_f_1mhr5p_k$ = function () {
    return this.f_1;
  };
  protoOf(TransferParameters).component1_7eebsc_k$ = function () {
    return this.gamma_1;
  };
  protoOf(TransferParameters).component2_7eebsb_k$ = function () {
    return this.a_1;
  };
  protoOf(TransferParameters).component3_7eebsa_k$ = function () {
    return this.b_1;
  };
  protoOf(TransferParameters).component4_7eebs9_k$ = function () {
    return this.c_1;
  };
  protoOf(TransferParameters).component5_7eebs8_k$ = function () {
    return this.d_1;
  };
  protoOf(TransferParameters).component6_7eebs7_k$ = function () {
    return this.e_1;
  };
  protoOf(TransferParameters).component7_7eebs6_k$ = function () {
    return this.f_1;
  };
  protoOf(TransferParameters).copy_rkiwfl_k$ = function (gamma, a, b, c, d, e, f) {
    return new TransferParameters(gamma, a, b, c, d, e, f);
  };
  protoOf(TransferParameters).copy$default_nnwetz_k$ = function (gamma, a, b, c, d, e, f, $super) {
    gamma = gamma === VOID ? this.gamma_1 : gamma;
    a = a === VOID ? this.a_1 : a;
    b = b === VOID ? this.b_1 : b;
    c = c === VOID ? this.c_1 : c;
    d = d === VOID ? this.d_1 : d;
    e = e === VOID ? this.e_1 : e;
    f = f === VOID ? this.f_1 : f;
    return $super === VOID ? this.copy_rkiwfl_k$(gamma, a, b, c, d, e, f) : $super.copy_rkiwfl_k$.call(this, gamma, a, b, c, d, e, f);
  };
  protoOf(TransferParameters).toString = function () {
    return 'TransferParameters(gamma=' + this.gamma_1 + ', a=' + this.a_1 + ', b=' + this.b_1 + ', c=' + this.c_1 + ', d=' + this.d_1 + ', e=' + this.e_1 + ', f=' + this.f_1 + ')';
  };
  protoOf(TransferParameters).hashCode = function () {
    var result = getNumberHashCode(this.gamma_1);
    result = imul(result, 31) + getNumberHashCode(this.a_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.b_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.c_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.d_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.e_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.f_1) | 0;
    return result;
  };
  protoOf(TransferParameters).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TransferParameters))
      return false;
    var tmp0_other_with_cast = other instanceof TransferParameters ? other : THROW_CCE();
    if (!equals(this.gamma_1, tmp0_other_with_cast.gamma_1))
      return false;
    if (!equals(this.a_1, tmp0_other_with_cast.a_1))
      return false;
    if (!equals(this.b_1, tmp0_other_with_cast.b_1))
      return false;
    if (!equals(this.c_1, tmp0_other_with_cast.c_1))
      return false;
    if (!equals(this.d_1, tmp0_other_with_cast.d_1))
      return false;
    if (!equals(this.e_1, tmp0_other_with_cast.e_1))
      return false;
    if (!equals(this.f_1, tmp0_other_with_cast.f_1))
      return false;
    return true;
  };
  function WhitePoint_init_$Init$(x, y, z, $this) {
    WhitePoint_init_$Init$_0(x, y, z, x + y + z, $this);
    return $this;
  }
  function WhitePoint_init_$Create$(x, y, z) {
    return WhitePoint_init_$Init$(x, y, z, objectCreate(protoOf(WhitePoint)));
  }
  function WhitePoint_init_$Init$_0(x, y, z, sum, $this) {
    WhitePoint.call($this, x / sum, y / sum);
    return $this;
  }
  function WhitePoint_init_$Create$_0(x, y, z, sum) {
    return WhitePoint_init_$Init$_0(x, y, z, sum, objectCreate(protoOf(WhitePoint)));
  }
  function WhitePoint(x, y) {
    this.x_1 = x;
    this.y_1 = y;
  }
  protoOf(WhitePoint).get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  protoOf(WhitePoint).get_y_1mhr68_k$ = function () {
    return this.y_1;
  };
  protoOf(WhitePoint).toXyz_1tswm6_k$ = function () {
    // Inline function 'kotlin.floatArrayOf' call
    return new Float32Array([this.x_1 / this.y_1, 1.0, (1.0 - this.x_1 - this.y_1) / this.y_1]);
  };
  protoOf(WhitePoint).component1_7eebsc_k$ = function () {
    return this.x_1;
  };
  protoOf(WhitePoint).component2_7eebsb_k$ = function () {
    return this.y_1;
  };
  protoOf(WhitePoint).copy_4tzoad_k$ = function (x, y) {
    return new WhitePoint(x, y);
  };
  protoOf(WhitePoint).copy$default_9j5tee_k$ = function (x, y, $super) {
    x = x === VOID ? this.x_1 : x;
    y = y === VOID ? this.y_1 : y;
    return $super === VOID ? this.copy_4tzoad_k$(x, y) : $super.copy_4tzoad_k$.call(this, x, y);
  };
  protoOf(WhitePoint).toString = function () {
    return 'WhitePoint(x=' + this.x_1 + ', y=' + this.y_1 + ')';
  };
  protoOf(WhitePoint).hashCode = function () {
    var result = getNumberHashCode(this.x_1);
    result = imul(result, 31) + getNumberHashCode(this.y_1) | 0;
    return result;
  };
  protoOf(WhitePoint).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WhitePoint))
      return false;
    var tmp0_other_with_cast = other instanceof WhitePoint ? other : THROW_CCE();
    if (!equals(this.x_1, tmp0_other_with_cast.x_1))
      return false;
    if (!equals(this.y_1, tmp0_other_with_cast.y_1))
      return false;
    return true;
  };
  function clamp($this, x) {
    return coerceIn(x, -2.0, 2.0);
  }
  function Xyz(name, id) {
    ColorSpace.call(this, name, Companion_getInstance_36().get_Xyz_inxdso_k$(), id);
  }
  protoOf(Xyz).get_isWideGamut_oxj4to_k$ = function () {
    return true;
  };
  protoOf(Xyz).getMinValue_3znj7n_k$ = function (component) {
    return -2.0;
  };
  protoOf(Xyz).getMaxValue_kswgkr_k$ = function (component) {
    return 2.0;
  };
  protoOf(Xyz).toXyz_c5nzk6_k$ = function (v) {
    v[0] = clamp(this, v[0]);
    v[1] = clamp(this, v[1]);
    v[2] = clamp(this, v[2]);
    return v;
  };
  protoOf(Xyz).toXy_53ljx8_k$ = function (v0, v1, v2) {
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val1 = clamp(this, v0);
    var val2 = clamp(this, v1);
    var v1_0 = toLong(toRawBits(val1));
    var v2_0 = toLong(toRawBits(val2));
    return v1_0.shl_bg8if3_k$(32).or_v7fvkl_k$(v2_0.and_4spn93_k$(new Long(-1, 0)));
  };
  protoOf(Xyz).toZ_xzs7on_k$ = function (v0, v1, v2) {
    return clamp(this, v2);
  };
  protoOf(Xyz).xyzaToColor_fee27c_k$ = function (x, y, z, a, colorSpace) {
    return Color_0(clamp(this, x), clamp(this, y), clamp(this, z), a, colorSpace);
  };
  protoOf(Xyz).fromXyz_ghg1av_k$ = function (v) {
    v[0] = clamp(this, v[0]);
    v[1] = clamp(this, v[1]);
    v[2] = clamp(this, v[2]);
    return v;
  };
  function _set_fillPaint__8v4n0q($this, _set____db54di) {
    $this.fillPaint_1 = _set____db54di;
  }
  function _get_fillPaint__wv4yju($this) {
    return $this.fillPaint_1;
  }
  function _set_strokePaint__ed14xt($this, _set____db54di) {
    $this.strokePaint_1 = _set____db54di;
  }
  function _get_strokePaint__fxd1e3($this) {
    return $this.strokePaint_1;
  }
  function obtainFillPaint($this) {
    var tmp0_elvis_lhs = $this.fillPaint_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.apply' call
      var this_0 = Paint_0();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.obtainFillPaint.<anonymous>' call
      this_0.set_style_t4zhmv_k$(Companion_getInstance_23().get_Fill_7xey15_k$());
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.obtainFillPaint.<anonymous>' call
      $this.fillPaint_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function obtainStrokePaint($this) {
    var tmp0_elvis_lhs = $this.strokePaint_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.apply' call
      var this_0 = Paint_0();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.obtainStrokePaint.<anonymous>' call
      this_0.set_style_t4zhmv_k$(Companion_getInstance_23().get_Stroke_fu1ixu_k$());
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.obtainStrokePaint.<anonymous>' call
      $this.strokePaint_1 = this_0;
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
        if (!(this_0.get_strokeWidth_pbded7_k$() === drawStyle.get_width_j0q4yl_k$())) {
          this_0.set_strokeWidth_owqvpl_k$(drawStyle.get_width_j0q4yl_k$());
        }
        if (!(this_0.get_strokeCap_6gl6jj_k$() === drawStyle.get_cap_3aolkp_k$())) {
          this_0.set_strokeCap_x8rhz1_k$(drawStyle.get_cap_3aolkp_k$());
        }
        if (!(this_0.get_strokeMiterLimit_p3434n_k$() === drawStyle.get_miter_iv8ijg_k$())) {
          this_0.set_strokeMiterLimit_tej6nx_k$(drawStyle.get_miter_iv8ijg_k$());
        }
        if (!(this_0.get_strokeJoin_j1kbxz_k$() === drawStyle.get_join_i4bzz3_k$())) {
          this_0.set_strokeJoin_yrffuj_k$(drawStyle.get_join_i4bzz3_k$());
        }
        if (!equals(this_0.get_pathEffect_d6tz6p_k$(), drawStyle.get_pathEffect_d6tz6p_k$())) {
          this_0.set_pathEffect_h6g9g6_k$(drawStyle.get_pathEffect_d6tz6p_k$());
        }
        tmp = this_0;
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  }
  function configurePaint($this, brush, style, alpha, colorFilter, blendMode, filterQuality) {
    // Inline function 'kotlin.apply' call
    var this_0 = selectPaint($this, style);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.configurePaint.<anonymous>' call
    if (!(brush == null)) {
      brush.applyTo_5ix92b_k$($this.get_size_cxx1ym_k$(), this_0, alpha);
    } else {
      if (!(this_0.get_shader_jgtazy_k$() == null)) {
        this_0.set_shader_tgaw5e_k$(null);
      }
      if (!equals(this_0.get_color_lnp1vl_k$(), Companion_getInstance_16().get_Black_t4k9fh_k$())) {
        this_0.set_color_m2amxp_k$(Companion_getInstance_16().get_Black_t4k9fh_k$());
      }
      if (!(this_0.get_alpha_iooth1_k$() === alpha)) {
        this_0.set_alpha_tvzcqh_k$(alpha);
      }
    }
    if (!equals(this_0.get_colorFilter_nt8pqq_k$(), colorFilter)) {
      this_0.set_colorFilter_dtpxr0_k$(colorFilter);
    }
    if (!(this_0.get_blendMode_si209t_k$() === blendMode)) {
      this_0.set_blendMode_1e5m6b_k$(blendMode);
    }
    if (!(this_0.get_filterQuality_wmgb0f_k$() === filterQuality)) {
      this_0.set_filterQuality_eye4f7_k$(filterQuality);
    }
    return this_0;
  }
  function configurePaint$default($this, brush, style, alpha, colorFilter, blendMode, filterQuality, $super) {
    filterQuality = filterQuality === VOID ? Companion_getInstance_43().get_DefaultFilterQuality_7zsczy_k$() : filterQuality;
    return configurePaint($this, brush, style, alpha, colorFilter, blendMode, filterQuality);
  }
  function configurePaint_0($this, color, style, alpha, colorFilter, blendMode, filterQuality) {
    // Inline function 'kotlin.apply' call
    var this_0 = selectPaint($this, style);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.configurePaint.<anonymous>' call
    var targetColor = modulate(color, $this, alpha);
    if (!equals(this_0.get_color_lnp1vl_k$(), targetColor)) {
      this_0.set_color_m2amxp_k$(targetColor);
    }
    if (!(this_0.get_shader_jgtazy_k$() == null)) {
      this_0.set_shader_tgaw5e_k$(null);
    }
    if (!equals(this_0.get_colorFilter_nt8pqq_k$(), colorFilter)) {
      this_0.set_colorFilter_dtpxr0_k$(colorFilter);
    }
    if (!(this_0.get_blendMode_si209t_k$() === blendMode)) {
      this_0.set_blendMode_1e5m6b_k$(blendMode);
    }
    if (!(this_0.get_filterQuality_wmgb0f_k$() === filterQuality)) {
      this_0.set_filterQuality_eye4f7_k$(filterQuality);
    }
    return this_0;
  }
  function configurePaint$default_0($this, color, style, alpha, colorFilter, blendMode, filterQuality, $super) {
    filterQuality = filterQuality === VOID ? Companion_getInstance_43().get_DefaultFilterQuality_7zsczy_k$() : filterQuality;
    return configurePaint_0($this, color, style, alpha, colorFilter, blendMode, filterQuality);
  }
  function configureStrokePaint($this, color, strokeWidth, miter, cap, join, pathEffect, alpha, colorFilter, blendMode, filterQuality) {
    // Inline function 'kotlin.apply' call
    var this_0 = obtainStrokePaint($this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.configureStrokePaint.<anonymous>' call
    var targetColor = modulate(color, $this, alpha);
    if (!equals(this_0.get_color_lnp1vl_k$(), targetColor)) {
      this_0.set_color_m2amxp_k$(targetColor);
    }
    if (!(this_0.get_shader_jgtazy_k$() == null)) {
      this_0.set_shader_tgaw5e_k$(null);
    }
    if (!equals(this_0.get_colorFilter_nt8pqq_k$(), colorFilter)) {
      this_0.set_colorFilter_dtpxr0_k$(colorFilter);
    }
    if (!(this_0.get_blendMode_si209t_k$() === blendMode)) {
      this_0.set_blendMode_1e5m6b_k$(blendMode);
    }
    if (!(this_0.get_strokeWidth_pbded7_k$() === strokeWidth)) {
      this_0.set_strokeWidth_owqvpl_k$(strokeWidth);
    }
    if (!(this_0.get_strokeMiterLimit_p3434n_k$() === miter)) {
      this_0.set_strokeMiterLimit_tej6nx_k$(miter);
    }
    if (!(this_0.get_strokeCap_6gl6jj_k$() === cap)) {
      this_0.set_strokeCap_x8rhz1_k$(cap);
    }
    if (!(this_0.get_strokeJoin_j1kbxz_k$() === join)) {
      this_0.set_strokeJoin_yrffuj_k$(join);
    }
    if (!equals(this_0.get_pathEffect_d6tz6p_k$(), pathEffect)) {
      this_0.set_pathEffect_h6g9g6_k$(pathEffect);
    }
    if (!(this_0.get_filterQuality_wmgb0f_k$() === filterQuality)) {
      this_0.set_filterQuality_eye4f7_k$(filterQuality);
    }
    return this_0;
  }
  function configureStrokePaint$default($this, color, strokeWidth, miter, cap, join, pathEffect, alpha, colorFilter, blendMode, filterQuality, $super) {
    filterQuality = filterQuality === VOID ? Companion_getInstance_43().get_DefaultFilterQuality_7zsczy_k$() : filterQuality;
    return configureStrokePaint($this, color, strokeWidth, miter, cap, join, pathEffect, alpha, colorFilter, blendMode, filterQuality);
  }
  function configureStrokePaint_0($this, brush, strokeWidth, miter, cap, join, pathEffect, alpha, colorFilter, blendMode, filterQuality) {
    // Inline function 'kotlin.apply' call
    var this_0 = obtainStrokePaint($this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.configureStrokePaint.<anonymous>' call
    if (!(brush == null)) {
      brush.applyTo_5ix92b_k$($this.get_size_cxx1ym_k$(), this_0, alpha);
    } else if (!(this_0.get_alpha_iooth1_k$() === alpha)) {
      this_0.set_alpha_tvzcqh_k$(alpha);
    }
    if (!equals(this_0.get_colorFilter_nt8pqq_k$(), colorFilter)) {
      this_0.set_colorFilter_dtpxr0_k$(colorFilter);
    }
    if (!(this_0.get_blendMode_si209t_k$() === blendMode)) {
      this_0.set_blendMode_1e5m6b_k$(blendMode);
    }
    if (!(this_0.get_strokeWidth_pbded7_k$() === strokeWidth)) {
      this_0.set_strokeWidth_owqvpl_k$(strokeWidth);
    }
    if (!(this_0.get_strokeMiterLimit_p3434n_k$() === miter)) {
      this_0.set_strokeMiterLimit_tej6nx_k$(miter);
    }
    if (!(this_0.get_strokeCap_6gl6jj_k$() === cap)) {
      this_0.set_strokeCap_x8rhz1_k$(cap);
    }
    if (!(this_0.get_strokeJoin_j1kbxz_k$() === join)) {
      this_0.set_strokeJoin_yrffuj_k$(join);
    }
    if (!equals(this_0.get_pathEffect_d6tz6p_k$(), pathEffect)) {
      this_0.set_pathEffect_h6g9g6_k$(pathEffect);
    }
    if (!(this_0.get_filterQuality_wmgb0f_k$() === filterQuality)) {
      this_0.set_filterQuality_eye4f7_k$(filterQuality);
    }
    return this_0;
  }
  function configureStrokePaint$default_0($this, brush, strokeWidth, miter, cap, join, pathEffect, alpha, colorFilter, blendMode, filterQuality, $super) {
    filterQuality = filterQuality === VOID ? Companion_getInstance_43().get_DefaultFilterQuality_7zsczy_k$() : filterQuality;
    return configureStrokePaint_0($this, brush, strokeWidth, miter, cap, join, pathEffect, alpha, colorFilter, blendMode, filterQuality);
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
    size = size === VOID ? Companion_getInstance_0().get_Zero_rugywl_k$() : size;
    this.density_1 = density;
    this.layoutDirection_1 = layoutDirection;
    this.canvas_1 = canvas;
    this.size_1 = size;
  }
  protoOf(DrawParams).set_density_3p0aj9_k$ = function (_set____db54di) {
    this.density_1 = _set____db54di;
  };
  protoOf(DrawParams).get_density_qy0267_k$ = function () {
    return this.density_1;
  };
  protoOf(DrawParams).set_layoutDirection_vthtz8_k$ = function (_set____db54di) {
    this.layoutDirection_1 = _set____db54di;
  };
  protoOf(DrawParams).get_layoutDirection_7e37v0_k$ = function () {
    return this.layoutDirection_1;
  };
  protoOf(DrawParams).set_canvas_1yi0mf_k$ = function (_set____db54di) {
    this.canvas_1 = _set____db54di;
  };
  protoOf(DrawParams).get_canvas_bshgm9_k$ = function () {
    return this.canvas_1;
  };
  protoOf(DrawParams).set_size_6a0e6q_k$ = function (_set____db54di) {
    this.size_1 = _set____db54di;
  };
  protoOf(DrawParams).get_size_cxx1ym_k$ = function () {
    return this.size_1;
  };
  protoOf(DrawParams).component1_7eebsc_k$ = function () {
    return this.density_1;
  };
  protoOf(DrawParams).component2_7eebsb_k$ = function () {
    return this.layoutDirection_1;
  };
  protoOf(DrawParams).component3_7eebsa_k$ = function () {
    return this.canvas_1;
  };
  protoOf(DrawParams).component4_67q0p1_k$ = function () {
    return this.size_1;
  };
  protoOf(DrawParams).copy_newspx_k$ = function (density, layoutDirection, canvas, size) {
    return new DrawParams(density, layoutDirection, canvas, size);
  };
  protoOf(DrawParams).copy$default_h77oxm_k$ = function (density, layoutDirection, canvas, size, $super) {
    density = density === VOID ? this.density_1 : density;
    layoutDirection = layoutDirection === VOID ? this.layoutDirection_1 : layoutDirection;
    canvas = canvas === VOID ? this.canvas_1 : canvas;
    size = size === VOID ? this.size_1 : size;
    return $super === VOID ? this.copy_newspx_k$(density, layoutDirection, canvas, size) : $super.copy_newspx_k$.call(this, density, layoutDirection, canvas, new Size_0(size));
  };
  protoOf(DrawParams).toString = function () {
    return 'DrawParams(density=' + this.density_1 + ', layoutDirection=' + this.layoutDirection_1 + ', canvas=' + this.canvas_1 + ', size=' + new Size_0(this.size_1) + ')';
  };
  protoOf(DrawParams).hashCode = function () {
    var result = hashCode(this.density_1);
    result = imul(result, 31) + this.layoutDirection_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.canvas_1) | 0;
    result = imul(result, 31) + Size__hashCode_impl_2h1qpd(this.size_1) | 0;
    return result;
  };
  protoOf(DrawParams).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DrawParams))
      return false;
    var tmp0_other_with_cast = other instanceof DrawParams ? other : THROW_CCE();
    if (!equals(this.density_1, tmp0_other_with_cast.density_1))
      return false;
    if (!this.layoutDirection_1.equals(tmp0_other_with_cast.layoutDirection_1))
      return false;
    if (!equals(this.canvas_1, tmp0_other_with_cast.canvas_1))
      return false;
    if (!equals(this.size_1, tmp0_other_with_cast.size_1))
      return false;
    return true;
  };
  function CanvasDrawScope$drawContext$1(this$0) {
    this.this$0__1 = this$0;
    this.transform_1 = asDrawTransform(this);
  }
  protoOf(CanvasDrawScope$drawContext$1).set_canvas_1yi0mf_k$ = function (value) {
    this.this$0__1.drawParams_1.canvas_1 = value;
  };
  protoOf(CanvasDrawScope$drawContext$1).get_canvas_bshgm9_k$ = function () {
    return this.this$0__1.drawParams_1.canvas_1;
  };
  protoOf(CanvasDrawScope$drawContext$1).set_size_6a0e6q_k$ = function (value) {
    this.this$0__1.drawParams_1.size_1 = value;
  };
  protoOf(CanvasDrawScope$drawContext$1).get_size_cxx1ym_k$ = function () {
    return this.this$0__1.drawParams_1.size_1;
  };
  protoOf(CanvasDrawScope$drawContext$1).get_transform_px941v_k$ = function () {
    return this.transform_1;
  };
  protoOf(CanvasDrawScope$drawContext$1).set_layoutDirection_vthtz8_k$ = function (value) {
    this.this$0__1.drawParams_1.layoutDirection_1 = value;
  };
  protoOf(CanvasDrawScope$drawContext$1).get_layoutDirection_7e37v0_k$ = function () {
    return this.this$0__1.drawParams_1.layoutDirection_1;
  };
  protoOf(CanvasDrawScope$drawContext$1).set_density_3p0aj9_k$ = function (value) {
    this.this$0__1.drawParams_1.density_1 = value;
  };
  protoOf(CanvasDrawScope$drawContext$1).get_density_qy0267_k$ = function () {
    return this.this$0__1.drawParams_1.density_1;
  };
  function CanvasDrawScope() {
    this.drawParams_1 = new DrawParams();
    var tmp = this;
    tmp.drawContext_1 = new CanvasDrawScope$drawContext$1(this);
    this.fillPaint_1 = null;
    this.strokePaint_1 = null;
  }
  protoOf(CanvasDrawScope).get_drawParams_ncgfpp_k$ = function () {
    return this.drawParams_1;
  };
  protoOf(CanvasDrawScope).get_layoutDirection_7e37v0_k$ = function () {
    return this.drawParams_1.layoutDirection_1;
  };
  protoOf(CanvasDrawScope).get_density_qy0267_k$ = function () {
    return this.drawParams_1.density_1.get_density_qy0267_k$();
  };
  protoOf(CanvasDrawScope).get_fontScale_h56n3i_k$ = function () {
    return this.drawParams_1.density_1.get_fontScale_h56n3i_k$();
  };
  protoOf(CanvasDrawScope).get_drawContext_ffwztu_k$ = function () {
    return this.drawContext_1;
  };
  protoOf(CanvasDrawScope).drawLine_b39977_k$ = function (brush, start, end, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode) {
    return this.drawParams_1.canvas_1.drawLine_p9lnhi_k$(start, end, configureStrokePaint$default_0(this, brush, strokeWidth, Companion_getInstance_44().get_DefaultMiter_3rtz6b_k$(), cap, Companion_getInstance_32().get_Miter_xkwqso_k$(), pathEffect, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).drawLine_ki2hwq_k$ = function (color, start, end, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode) {
    return this.drawParams_1.canvas_1.drawLine_p9lnhi_k$(start, end, configureStrokePaint$default(this, color, strokeWidth, Companion_getInstance_44().get_DefaultMiter_3rtz6b_k$(), cap, Companion_getInstance_32().get_Miter_xkwqso_k$(), pathEffect, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).drawRect_t09b9w_k$ = function (brush, topLeft, size, alpha, style, colorFilter, blendMode) {
    return this.drawParams_1.canvas_1.drawRect_njf28a_k$(_Offset___get_x__impl__xvi35n(topLeft), _Offset___get_y__impl__8bzhra(topLeft), _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size), configurePaint$default(this, brush, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).drawRect_6sw8uj_k$ = function (color, topLeft, size, alpha, style, colorFilter, blendMode) {
    return this.drawParams_1.canvas_1.drawRect_njf28a_k$(_Offset___get_x__impl__xvi35n(topLeft), _Offset___get_y__impl__8bzhra(topLeft), _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size), configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).drawImage_7hd74h_k$ = function (image, topLeft, alpha, style, colorFilter, blendMode) {
    return this.drawParams_1.canvas_1.drawImage_lx1b1t_k$(image, topLeft, configurePaint$default(this, null, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).drawImage_17v7pj_k$ = function (image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode) {
    return this.drawParams_1.canvas_1.drawImageRect_5h5ih1_k$(image, srcOffset, srcSize, dstOffset, dstSize, configurePaint$default(this, null, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).drawImage_9mpi8u_k$ = function (image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality) {
    return this.drawParams_1.canvas_1.drawImageRect_5h5ih1_k$(image, srcOffset, srcSize, dstOffset, dstSize, configurePaint(this, null, style, alpha, colorFilter, blendMode, filterQuality));
  };
  protoOf(CanvasDrawScope).drawRoundRect_gbkwec_k$ = function (brush, topLeft, size, cornerRadius, alpha, style, colorFilter, blendMode) {
    return this.drawParams_1.canvas_1.drawRoundRect_s5vrm8_k$(_Offset___get_x__impl__xvi35n(topLeft), _Offset___get_y__impl__8bzhra(topLeft), _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size), _CornerRadius___get_x__impl__1594cn(cornerRadius), _CornerRadius___get_y__impl__tyvleu(cornerRadius), configurePaint$default(this, brush, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).drawRoundRect_bjcn4f_k$ = function (color, topLeft, size, cornerRadius, style, alpha, colorFilter, blendMode) {
    return this.drawParams_1.canvas_1.drawRoundRect_s5vrm8_k$(_Offset___get_x__impl__xvi35n(topLeft), _Offset___get_y__impl__8bzhra(topLeft), _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size), _CornerRadius___get_x__impl__1594cn(cornerRadius), _CornerRadius___get_y__impl__tyvleu(cornerRadius), configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).drawCircle_mukkgw_k$ = function (brush, radius, center, alpha, style, colorFilter, blendMode) {
    return this.drawParams_1.canvas_1.drawCircle_l6ouf0_k$(center, radius, configurePaint$default(this, brush, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).drawCircle_45hmy1_k$ = function (color, radius, center, alpha, style, colorFilter, blendMode) {
    return this.drawParams_1.canvas_1.drawCircle_l6ouf0_k$(center, radius, configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).drawOval_euvgam_k$ = function (brush, topLeft, size, alpha, style, colorFilter, blendMode) {
    return this.drawParams_1.canvas_1.drawOval_laorgo_k$(_Offset___get_x__impl__xvi35n(topLeft), _Offset___get_y__impl__8bzhra(topLeft), _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size), configurePaint$default(this, brush, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).drawOval_xyvj95_k$ = function (color, topLeft, size, alpha, style, colorFilter, blendMode) {
    return this.drawParams_1.canvas_1.drawOval_laorgo_k$(_Offset___get_x__impl__xvi35n(topLeft), _Offset___get_y__impl__8bzhra(topLeft), _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size), configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).drawArc_7lpe6v_k$ = function (brush, startAngle, sweepAngle, useCenter, topLeft, size, alpha, style, colorFilter, blendMode) {
    return this.drawParams_1.canvas_1.drawArc_ud0hdz_k$(_Offset___get_x__impl__xvi35n(topLeft), _Offset___get_y__impl__8bzhra(topLeft), _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size), startAngle, sweepAngle, useCenter, configurePaint$default(this, brush, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).drawArc_oz1pds_k$ = function (color, startAngle, sweepAngle, useCenter, topLeft, size, alpha, style, colorFilter, blendMode) {
    return this.drawParams_1.canvas_1.drawArc_ud0hdz_k$(_Offset___get_x__impl__xvi35n(topLeft), _Offset___get_y__impl__8bzhra(topLeft), _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size), startAngle, sweepAngle, useCenter, configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).drawPath_mbkbcp_k$ = function (path, color, alpha, style, colorFilter, blendMode) {
    return this.drawParams_1.canvas_1.drawPath_2all12_k$(path, configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).drawPath_2qit1e_k$ = function (path, brush, alpha, style, colorFilter, blendMode) {
    return this.drawParams_1.canvas_1.drawPath_2all12_k$(path, configurePaint$default(this, brush, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).drawPoints_l9lrzm_k$ = function (points, pointMode, color, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode) {
    return this.drawParams_1.canvas_1.drawPoints_buyvum_k$(pointMode, points, configureStrokePaint$default(this, color, strokeWidth, Companion_getInstance_44().get_DefaultMiter_3rtz6b_k$(), cap, Companion_getInstance_32().get_Miter_xkwqso_k$(), pathEffect, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).drawPoints_7jhunr_k$ = function (points, pointMode, brush, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode) {
    return this.drawParams_1.canvas_1.drawPoints_buyvum_k$(pointMode, points, configureStrokePaint$default_0(this, brush, strokeWidth, Companion_getInstance_44().get_DefaultMiter_3rtz6b_k$(), cap, Companion_getInstance_32().get_Miter_xkwqso_k$(), pathEffect, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).draw_gracce_k$ = function (density, layoutDirection, canvas, size, block) {
    var tmp0_container = this.drawParams_1;
    var prevDensity = tmp0_container.component1_7eebsc_k$();
    var prevLayoutDirection = tmp0_container.component2_7eebsb_k$();
    var prevCanvas = tmp0_container.component3_7eebsa_k$();
    var prevSize = tmp0_container.component4_67q0p1_k$();
    // Inline function 'kotlin.apply' call
    var this_0 = this.drawParams_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw.<anonymous>' call
    this_0.density_1 = density;
    this_0.layoutDirection_1 = layoutDirection;
    this_0.canvas_1 = canvas;
    this_0.size_1 = size;
    canvas.save_fbe7h_k$();
    block(this);
    canvas.restore_a1ykhu_k$();
    // Inline function 'kotlin.apply' call
    var this_1 = this.drawParams_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw.<anonymous>' call
    this_1.density_1 = prevDensity;
    this_1.layoutDirection_1 = prevLayoutDirection;
    this_1.canvas_1 = prevCanvas;
    this_1.size_1 = prevSize;
  };
  function asDrawTransform(_this__u8e3s4) {
    return new asDrawTransform$1(_this__u8e3s4);
  }
  function asDrawTransform$1($this_asDrawTransform) {
    this.$this_asDrawTransform_1 = $this_asDrawTransform;
  }
  protoOf(asDrawTransform$1).get_size_cxx1ym_k$ = function () {
    return this.$this_asDrawTransform_1.get_size_cxx1ym_k$();
  };
  protoOf(asDrawTransform$1).get_center_dcexec_k$ = function () {
    return get_center(this.get_size_cxx1ym_k$());
  };
  protoOf(asDrawTransform$1).inset_ja77zn_k$ = function (left, top, right, bottom) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    var it = this.$this_asDrawTransform_1.get_canvas_bshgm9_k$();
    var updatedSize = Size(_Size___get_width__impl__58y75t(this.get_size_cxx1ym_k$()) - (left + right), _Size___get_height__impl__a04p02(this.get_size_cxx1ym_k$()) - (top + bottom));
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(_Size___get_width__impl__58y75t(updatedSize) >= 0.0 ? _Size___get_height__impl__a04p02(updatedSize) >= 0.0 : false)) {
      // Inline function 'androidx.compose.ui.graphics.drawscope.<no name provided>.inset.<anonymous>.<anonymous>' call
      var message = 'Width and height must be greater than or equal to zero';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.$this_asDrawTransform_1.set_size_6a0e6q_k$(updatedSize);
    it.translate_7gghdu_k$(left, top);
  };
  protoOf(asDrawTransform$1).clipRect_3spswv_k$ = function (left, top, right, bottom, clipOp) {
    this.$this_asDrawTransform_1.get_canvas_bshgm9_k$().clipRect_3spswv_k$(left, top, right, bottom, clipOp);
  };
  protoOf(asDrawTransform$1).clipPath_tlqunt_k$ = function (path, clipOp) {
    this.$this_asDrawTransform_1.get_canvas_bshgm9_k$().clipPath_tlqunt_k$(path, clipOp);
  };
  protoOf(asDrawTransform$1).translate_7gghdu_k$ = function (left, top) {
    this.$this_asDrawTransform_1.get_canvas_bshgm9_k$().translate_7gghdu_k$(left, top);
  };
  protoOf(asDrawTransform$1).rotate_y7zh1f_k$ = function (degrees, pivot) {
    // Inline function 'kotlin.apply' call
    var this_0 = this.$this_asDrawTransform_1.get_canvas_bshgm9_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.<no name provided>.rotate.<anonymous>' call
    this_0.translate_7gghdu_k$(_Offset___get_x__impl__xvi35n(pivot), _Offset___get_y__impl__8bzhra(pivot));
    this_0.rotate_qe8u4z_k$(degrees);
    this_0.translate_7gghdu_k$(-_Offset___get_x__impl__xvi35n(pivot), -_Offset___get_y__impl__8bzhra(pivot));
  };
  protoOf(asDrawTransform$1).scale_rbtyk0_k$ = function (scaleX, scaleY, pivot) {
    // Inline function 'kotlin.apply' call
    var this_0 = this.$this_asDrawTransform_1.get_canvas_bshgm9_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.<no name provided>.scale.<anonymous>' call
    this_0.translate_7gghdu_k$(_Offset___get_x__impl__xvi35n(pivot), _Offset___get_y__impl__8bzhra(pivot));
    this_0.scale_ba85bu_k$(scaleX, scaleY);
    this_0.translate_7gghdu_k$(-_Offset___get_x__impl__xvi35n(pivot), -_Offset___get_y__impl__8bzhra(pivot));
  };
  protoOf(asDrawTransform$1).transform_3go53t_k$ = function (matrix) {
    this.$this_asDrawTransform_1.get_canvas_bshgm9_k$().concat_no6uof_k$(matrix);
  };
  function ContentDrawScope() {
  }
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
  function offsetSize(_this__u8e3s4, $this, offset) {
    return Size(_Size___get_width__impl__58y75t(_this__u8e3s4) - _Offset___get_x__impl__xvi35n(offset), _Size___get_height__impl__a04p02(_this__u8e3s4) - _Offset___get_y__impl__8bzhra(offset));
  }
  function Companion_29() {
    Companion_instance_29 = this;
    this.DefaultBlendMode_1 = Companion_getInstance_13().get_SrcOver_anr685_k$();
    this.DefaultFilterQuality_1 = Companion_getInstance_18().get_Low_7s05n6_k$();
  }
  protoOf(Companion_29).get_DefaultBlendMode_svct2m_k$ = function () {
    return this.DefaultBlendMode_1;
  };
  protoOf(Companion_29).get_DefaultFilterQuality_7zsczy_k$ = function () {
    return this.DefaultFilterQuality_1;
  };
  var Companion_instance_29;
  function Companion_getInstance_43() {
    if (Companion_instance_29 == null)
      new Companion_29();
    return Companion_instance_29;
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
  function Companion_30() {
    Companion_instance_30 = this;
    this.HairlineWidth_1 = 0.0;
    this.DefaultMiter_1 = 4.0;
    this.DefaultCap_1 = Companion_getInstance_31().get_Butt_jb7qjw_k$();
    this.DefaultJoin_1 = Companion_getInstance_32().get_Miter_xkwqso_k$();
  }
  protoOf(Companion_30).get_HairlineWidth_tck213_k$ = function () {
    return this.HairlineWidth_1;
  };
  protoOf(Companion_30).get_DefaultMiter_3rtz6b_k$ = function () {
    return this.DefaultMiter_1;
  };
  protoOf(Companion_30).get_DefaultCap_uwgp3q_k$ = function () {
    return this.DefaultCap_1;
  };
  protoOf(Companion_30).get_DefaultJoin_4efcsy_k$ = function () {
    return this.DefaultJoin_1;
  };
  var Companion_instance_30;
  function Companion_getInstance_44() {
    if (Companion_instance_30 == null)
      new Companion_30();
    return Companion_instance_30;
  }
  function Stroke(width, miter, cap, join, pathEffect) {
    Companion_getInstance_44();
    width = width === VOID ? 0.0 : width;
    miter = miter === VOID ? 4.0 : miter;
    cap = cap === VOID ? Companion_getInstance_44().DefaultCap_1 : cap;
    join = join === VOID ? Companion_getInstance_44().DefaultJoin_1 : join;
    pathEffect = pathEffect === VOID ? null : pathEffect;
    DrawStyle.call(this);
    this.width_1 = width;
    this.miter_1 = miter;
    this.cap_1 = cap;
    this.join_1 = join;
    this.pathEffect_1 = pathEffect;
  }
  protoOf(Stroke).get_width_j0q4yl_k$ = function () {
    return this.width_1;
  };
  protoOf(Stroke).get_miter_iv8ijg_k$ = function () {
    return this.miter_1;
  };
  protoOf(Stroke).get_cap_3aolkp_k$ = function () {
    return this.cap_1;
  };
  protoOf(Stroke).get_join_i4bzz3_k$ = function () {
    return this.join_1;
  };
  protoOf(Stroke).get_pathEffect_d6tz6p_k$ = function () {
    return this.pathEffect_1;
  };
  protoOf(Stroke).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Stroke))
      return false;
    if (!(this.width_1 === other.width_1))
      return false;
    if (!(this.miter_1 === other.miter_1))
      return false;
    if (!(this.cap_1 === other.cap_1))
      return false;
    if (!(this.join_1 === other.join_1))
      return false;
    if (!equals(this.pathEffect_1, other.pathEffect_1))
      return false;
    return true;
  };
  protoOf(Stroke).hashCode = function () {
    var result = getNumberHashCode(this.width_1);
    result = imul(31, result) + getNumberHashCode(this.miter_1) | 0;
    result = imul(31, result) + StrokeCap__hashCode_impl_posxk8(this.cap_1) | 0;
    result = imul(31, result) + StrokeJoin__hashCode_impl_3pyh8w(this.join_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.pathEffect_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(Stroke).toString = function () {
    return 'Stroke(width=' + this.width_1 + ', miter=' + this.miter_1 + ', cap=' + new StrokeCap(this.cap_1) + ', join=' + new StrokeJoin(this.join_1) + ', pathEffect=' + this.pathEffect_1 + ')';
  };
  function drawIntoCanvas(_this__u8e3s4, block) {
    return block(_this__u8e3s4.get_drawContext_ffwztu_k$().get_canvas_bshgm9_k$());
  }
  function clipRect_0(_this__u8e3s4, left, top, right, bottom, clipOp, block) {
    left = left === VOID ? 0.0 : left;
    top = top === VOID ? 0.0 : top;
    right = right === VOID ? _Size___get_width__impl__58y75t(_this__u8e3s4.get_size_cxx1ym_k$()) : right;
    bottom = bottom === VOID ? _Size___get_height__impl__a04p02(_this__u8e3s4.get_size_cxx1ym_k$()) : bottom;
    clipOp = clipOp === VOID ? Companion_getInstance_15().get_Intersect_gpxc6n_k$() : clipOp;
    // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var $this$with = _this__u8e3s4.get_drawContext_ffwztu_k$();
    var previousSize = $this$with.get_size_cxx1ym_k$();
    $this$with.get_canvas_bshgm9_k$().save_fbe7h_k$();
    // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect.<anonymous>' call
    $this$with.get_transform_px941v_k$().clipRect_3spswv_k$(left, top, right, bottom, clipOp);
    block(_this__u8e3s4);
    $this$with.get_canvas_bshgm9_k$().restore_a1ykhu_k$();
    $this$with.set_size_6a0e6q_k$(previousSize);
    return Unit_getInstance();
  }
  function withTransform(_this__u8e3s4, transformBlock, drawBlock) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var $this$with = _this__u8e3s4.get_drawContext_ffwztu_k$();
    var previousSize = $this$with.get_size_cxx1ym_k$();
    $this$with.get_canvas_bshgm9_k$().save_fbe7h_k$();
    transformBlock($this$with.get_transform_px941v_k$());
    drawBlock(_this__u8e3s4);
    $this$with.get_canvas_bshgm9_k$().restore_a1ykhu_k$();
    $this$with.set_size_6a0e6q_k$(previousSize);
    return Unit_getInstance();
  }
  function translate(_this__u8e3s4, left, top, block) {
    left = left === VOID ? 0.0 : left;
    top = top === VOID ? 0.0 : top;
    _this__u8e3s4.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(left, top);
    block(_this__u8e3s4);
    _this__u8e3s4.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(-left, -top);
  }
  function scale(_this__u8e3s4, scaleX, scaleY, pivot, block) {
    pivot = pivot === VOID ? _this__u8e3s4.get_center_dcexec_k$() : pivot;
    // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var $this$with = _this__u8e3s4.get_drawContext_ffwztu_k$();
    var previousSize = $this$with.get_size_cxx1ym_k$();
    $this$with.get_canvas_bshgm9_k$().save_fbe7h_k$();
    // Inline function 'androidx.compose.ui.graphics.drawscope.scale.<anonymous>' call
    $this$with.get_transform_px941v_k$().scale_rbtyk0_k$(scaleX, scaleY, pivot);
    block(_this__u8e3s4);
    $this$with.get_canvas_bshgm9_k$().restore_a1ykhu_k$();
    $this$with.set_size_6a0e6q_k$(previousSize);
    return Unit_getInstance();
  }
  function DrawScopeMarker() {
  }
  protoOf(DrawScopeMarker).equals = function (other) {
    if (!(other instanceof DrawScopeMarker))
      return false;
    other instanceof DrawScopeMarker || THROW_CCE();
    return true;
  };
  protoOf(DrawScopeMarker).hashCode = function () {
    return 0;
  };
  protoOf(DrawScopeMarker).toString = function () {
    return '@androidx.compose.ui.graphics.drawscope.DrawScopeMarker()';
  };
  function DrawTransform() {
  }
  function EmptyCanvas() {
  }
  protoOf(EmptyCanvas).save_fbe7h_k$ = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).restore_a1ykhu_k$ = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).saveLayer_j9hvqf_k$ = function (bounds, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).translate_7gghdu_k$ = function (dx, dy) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).scale_ba85bu_k$ = function (sx, sy) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).rotate_qe8u4z_k$ = function (degrees) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).skew_kgli2i_k$ = function (sx, sy) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).concat_no6uof_k$ = function (matrix) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).clipRect_3spswv_k$ = function (left, top, right, bottom, clipOp) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).clipPath_tlqunt_k$ = function (path, clipOp) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).drawLine_p9lnhi_k$ = function (p1, p2, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).drawRect_njf28a_k$ = function (left, top, right, bottom, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).drawRoundRect_s5vrm8_k$ = function (left, top, right, bottom, radiusX, radiusY, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).drawOval_laorgo_k$ = function (left, top, right, bottom, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).drawCircle_l6ouf0_k$ = function (center, radius, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).drawArc_ud0hdz_k$ = function (left, top, right, bottom, startAngle, sweepAngle, useCenter, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).drawPath_2all12_k$ = function (path, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).drawImage_lx1b1t_k$ = function (image, topLeftOffset, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).drawImageRect_5h5ih1_k$ = function (image, srcOffset, srcSize, dstOffset, dstSize, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).drawPoints_buyvum_k$ = function (pointMode, points, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).drawRawPoints_jt1jmy_k$ = function (pointMode, points, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).drawVertices_mnlupq_k$ = function (vertices, blendMode, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).enableZ_eyb9g9_k$ = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).disableZ_14zkiq_k$ = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  function get_PowersOfTen() {
    _init_properties_FastFloatParser_kt__fk9z4j();
    return PowersOfTen;
  }
  var PowersOfTen;
  function get_Mantissa64() {
    _init_properties_FastFloatParser_kt__fk9z4j();
    return Mantissa64;
  }
  var Mantissa64;
  var properties_initialized_FastFloatParser_kt_wcdbov;
  function _init_properties_FastFloatParser_kt__fk9z4j() {
    if (!properties_initialized_FastFloatParser_kt_wcdbov) {
      properties_initialized_FastFloatParser_kt_wcdbov = true;
      // Inline function 'kotlin.floatArrayOf' call
      PowersOfTen = new Float32Array([1.0, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, 1.0E7, 1.0E8, 1.0E9, 1.0E10]);
      // Inline function 'kotlin.ulongArrayOf' call
      Mantissa64 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(2118029704, -1513171909)), _ULong___init__impl__c78o9k(new Long(1573795306, -817723062)), _ULong___init__impl__c78o9k(new Long(2057363890, -2121689650)), _ULong___init__impl__c78o9k(new Long(424221215, -1578370238)), _ULong___init__impl__c78o9k(new Long(-1617207130, -899220974)), _ULong___init__impl__c78o9k(new Long(1199716560, -50284393)), _ULong___init__impl__c78o9k(new Long(-1934531710, -1642040482)), _ULong___init__impl__c78o9k(new Long(803060834, -978808778)), _ULong___init__impl__c78o9k(new Long(-1143657605, -149769149)), _ULong___init__impl__c78o9k(new Long(1432697645, -1704218454)), _ULong___init__impl__c78o9k(new Long(-356611592, -1056531244)), _ULong___init__impl__c78o9k(new Long(627977334, -246922230)), _ULong___init__impl__c78o9k(new Long(1466227658, -1764939130)), _ULong___init__impl__c78o9k(new Long(-314699076, -1132432089)), _ULong___init__impl__c78o9k(new Long(-393373845, -341798287)), _ULong___init__impl__c78o9k(new Long(827883171, -1824236665)), _ULong___init__impl__c78o9k(new Long(-38887860, -1206554008)), _ULong___init__impl__c78o9k(new Long(1025131999, -434450685)), _ULong___init__impl__c78o9k(new Long(103836587, -1882144414)), _ULong___init__impl__c78o9k(new Long(-2017687914, -1278938694)), _ULong___init__impl__c78o9k(new Long(699115580, -524931543)), _ULong___init__impl__c78o9k(new Long(-1173665499, -1938694951)), _ULong___init__impl__c78o9k(new Long(680401775, -1349626864)), _ULong___init__impl__c78o9k(new Long(850502218, -613291756)), _ULong___init__impl__c78o9k(new Long(-1615919762, -1993920084)), _ULong___init__impl__c78o9k(new Long(-946157878, -1418658281)), _ULong___init__impl__c78o9k(new Long(-1182697347, -699581027)), _ULong___init__impl__c78o9k(new Long(-1812927666, -2047850878)), _ULong___init__impl__c78o9k(new Long(955065889, -1486071773)), _ULong___init__impl__c78o9k(new Long(120090538, -783847892)), _ULong___init__impl__c78o9k(new Long(-2072427062, -2100517669)), _ULong___init__impl__c78o9k(new Long(1704433468, -1551905262)), _ULong___init__impl__c78o9k(new Long(-16941812, -866139754)), _ULong___init__impl__c78o9k(new Long(-1094919089, -8932868)), _ULong___init__impl__c78o9k(new Long(-147453519, -1616195779)), _ULong___init__impl__c78o9k(new Long(1963166749, -946502899)), _ULong___init__impl__c78o9k(new Long(-767267035, -109386800)), _ULong___init__impl__c78o9k(new Long(-2090154633, -1678979486)), _ULong___init__impl__c78o9k(new Long(608532181, -1024982533)), _ULong___init__impl__c78o9k(new Long(-313076598, -207486343)), _ULong___init__impl__c78o9k(new Long(878068950, -1740291700)), _ULong___init__impl__c78o9k(new Long(1097586188, -1101622801)), _ULong___init__impl__c78o9k(new Long(298240911, -303286677)), _ULong___init__impl__c78o9k(new Long(-350470343, -1800166910)), _ULong___init__impl__c78o9k(new Long(-1511829753, -1176466813)), _ULong___init__impl__c78o9k(new Long(-1889787191, -396841692)), _ULong___init__impl__c78o9k(new Long(-644246082, -1858638794)), _ULong___init__impl__c78o9k(new Long(-1879049427, -1249556668)), _ULong___init__impl__c78o9k(new Long(-1275069959, -488204011)), _ULong___init__impl__c78o9k(new Long(-1870660549, -1915740243)), _ULong___init__impl__c78o9k(new Long(-190842038, -1320933480)), _ULong___init__impl__c78o9k(new Long(835189277, -577425025)), _ULong___init__impl__c78o9k(new Long(2132606034, -1971503377)), _ULong___init__impl__c78o9k(new Long(1592015718, -1390637397)), _ULong___init__impl__c78o9k(new Long(916277824, -664554922)), _ULong___init__impl__c78o9k(new Long(-501068184, -2025959563)), _ULong___init__impl__c78o9k(new Long(1521148418, -1458707629)), _ULong___init__impl__c78o9k(new Long(827693699, -749642712)), _ULong___init__impl__c78o9k(new Long(517308561, -2079139431)), _ULong___init__impl__c78o9k(new Long(1720377526, -1525182465)), _ULong___init__impl__c78o9k(new Long(1076730083, -832736257)), _ULong___init__impl__c78o9k(new Long(-2011398258, -2131072897)), _ULong___init__impl__c78o9k(new Long(1780719474, -1590099297)), _ULong___init__impl__c78o9k(new Long(1152157518, -913882297)), _ULong___init__impl__c78o9k(new Long(366455074, -68611047)), _ULong___init__impl__c78o9k(new Long(-1381578315, -1653494641)), _ULong___init__impl__c78o9k(new Long(-1726972894, -993126477)), _ULong___init__impl__c78o9k(new Long(2136251179, -167666272)), _ULong___init__impl__c78o9k(new Long(1335156987, -1715404156)), _ULong___init__impl__c78o9k(new Long(1668946233, -1070513371)), _ULong___init__impl__c78o9k(new Long(-1135042680, -264399890)), _ULong___init__impl__c78o9k(new Long(901211061, -1775862667)), _ULong___init__impl__c78o9k(new Long(-2094711646, -1146086510)), _ULong___init__impl__c78o9k(new Long(602835915, -358866313)), _ULong___init__impl__c78o9k(new Long(1987385183, -1834904182)), _ULong___init__impl__c78o9k(new Long(336747830, -1219888403)), _ULong___init__impl__c78o9k(new Long(1494676612, -451118680)), _ULong___init__impl__c78o9k(new Long(934172882, -1892561911)), _ULong___init__impl__c78o9k(new Long(-2053509369, -1291960565)), _ULong___init__impl__c78o9k(new Long(1728080585, -541208882)), _ULong___init__impl__c78o9k(new Long(6308541, -1948868287)), _ULong___init__impl__c78o9k(new Long(1081627501, -1362343535)), _ULong___init__impl__c78o9k(new Long(-1869191096, -629187595)), _ULong___init__impl__c78o9k(new Long(2052981037, -2003854983)), _ULong___init__impl__c78o9k(new Long(-654999176, -1431076905)), _ULong___init__impl__c78o9k(new Long(-818748970, -715104307)), _ULong___init__impl__c78o9k(new Long(-1585459930, -2057552928)), _ULong___init__impl__c78o9k(new Long(-908083089, -1498199336)), _ULong___init__impl__c78o9k(new Long(-61362037, -799007346)), _ULong___init__impl__c78o9k(new Long(1572261463, -2109992327)), _ULong___init__impl__c78o9k(new Long(-1255898643, -1563748585)), _ULong___init__impl__c78o9k(new Long(-1569873304, -880943907)), _ULong___init__impl__c78o9k(new Long(185142018, -27438059)), _ULong___init__impl__c78o9k(new Long(652584673, -1627761523)), _ULong___init__impl__c78o9k(new Long(1889472666, -960960080)), _ULong___init__impl__c78o9k(new Long(-1933126464, -127458276)), _ULong___init__impl__c78o9k(new Long(-671333128, -1690274159)), _ULong___init__impl__c78o9k(new Long(1308317238, -1039100874)), _ULong___init__impl__c78o9k(new Long(-512087100, -225134269)), _ULong___init__impl__c78o9k(new Long(1827429210, -1751321654)), _ULong___init__impl__c78o9k(new Long(136802865, -1115410243)), _ULong___init__impl__c78o9k(new Long(1244745405, -320520980)), _ULong___init__impl__c78o9k(new Long(-1369517770, -1810938349)), _ULong___init__impl__c78o9k(new Long(-1711897212, -1189931112)), _ULong___init__impl__c78o9k(new Long(-1066129691, -413672066)), _ULong___init__impl__c78o9k(new Long(944281679, -1869157777)), _ULong___init__impl__c78o9k(new Long(106610275, -1262705397)), _ULong___init__impl__c78o9k(new Long(-940478981, -504639923)), _ULong___init__impl__c78o9k(new Long(-1661541187, -1926012688)), _ULong___init__impl__c78o9k(new Long(-1003184660, -1333774036)), _ULong___init__impl__c78o9k(new Long(-180239001, -593475721)), _ULong___init__impl__c78o9k(new Long(-112649376, -1981535062)), _ULong___init__impl__c78o9k(new Long(-1214553543, -1403177003)), _ULong___init__impl__c78o9k(new Long(629291719, -680229429)), _ULong___init__impl__c78o9k(new Long(-143563588, -2035756130)), _ULong___init__impl__c78o9k(new Long(-1253196309, -1470953338)), _ULong___init__impl__c78o9k(new Long(1654730086, -764949848)), _ULong___init__impl__c78o9k(new Long(1034206304, -2088706391)), _ULong___init__impl__c78o9k(new Long(-1928467592, -1537141165)), _ULong___init__impl__c78o9k(new Long(1884382806, -847684632)), _ULong___init__impl__c78o9k(new Long(1177739254, -2140415631)), _ULong___init__impl__c78o9k(new Long(-1749051405, -1601777715)), _ULong___init__impl__c78o9k(new Long(-38830608, -928480320)), _ULong___init__impl__c78o9k(new Long(1025203564, -86858575)), _ULong___init__impl__c78o9k(new Long(-969860509, -1664899346)), _ULong___init__impl__c78o9k(new Long(2008899836, -1007382358)), _ULong___init__impl__c78o9k(new Long(363641147, -185486123)), _ULong___init__impl__c78o9k(new Long(764146629, -1726541563)), _ULong___init__impl__c78o9k(new Long(2028925110, -1084435130)), _ULong___init__impl__c78o9k(new Long(388672740, -281802088)), _ULong___init__impl__c78o9k(new Long(242920462, -1786739041)), _ULong___init__impl__c78o9k(new Long(-770091246, -1159681978)), _ULong___init__impl__c78o9k(new Long(-2036355881, -375860648)), _ULong___init__impl__c78o9k(new Long(1411632134, -1845525641)), _ULong___init__impl__c78o9k(new Long(690798344, -1233165227)), _ULong___init__impl__c78o9k(new Long(1937239754, -467714710)), _ULong___init__impl__c78o9k(new Long(-2010450626, -1902934430)), _ULong___init__impl__c78o9k(new Long(708162189, -1304926213)), _ULong___init__impl__c78o9k(new Long(-188539087, -557415943)), _ULong___init__impl__c78o9k(new Long(955904894, -1958997700)), _ULong___init__impl__c78o9k(new Long(1194881118, -1375005301)), _ULong___init__impl__c78o9k(new Long(419859574, -645014802)), _ULong___init__impl__c78o9k(new Long(-811329591, -2013746988)), _ULong___init__impl__c78o9k(new Long(59579836, -1443441910)), _ULong___init__impl__c78o9k(new Long(-2073008853, -730560564)), _ULong___init__impl__c78o9k(new Long(-758759621, -2067213089)), _ULong___init__impl__c78o9k(new Long(-948449527, -1510274537)), _ULong___init__impl__c78o9k(new Long(-1185561908, -814101347)), _ULong___init__impl__c78o9k(new Long(-1814718017, -2119426078)), _ULong___init__impl__c78o9k(new Long(952827951, -1575540773)), _ULong___init__impl__c78o9k(new Long(117293115, -895684142)), _ULong___init__impl__c78o9k(new Long(-2000867254, -45863354)), _ULong___init__impl__c78o9k(new Long(360070702, -1639277332)), _ULong___init__impl__c78o9k(new Long(450088378, -975354841)), _ULong___init__impl__c78o9k(new Long(-511131352, -145451728)), _ULong___init__impl__c78o9k(new Long(-1930069831, -1701520066)), _ULong___init__impl__c78o9k(new Long(808638183, -1053158258)), _ULong___init__impl__c78o9k(new Long(-1136685919, -242705999)), _ULong___init__impl__c78o9k(new Long(363313125, -1762303985)), _ULong___init__impl__c78o9k(new Long(-619600418, -1129138158)), _ULong___init__impl__c78o9k(new Long(-1848242346, -337680873)), _ULong___init__impl__c78o9k(new Long(-1155151467, -1821663282)), _ULong___init__impl__c78o9k(new Long(1777286139, -1203337278)), _ULong___init__impl__c78o9k(new Long(74124026, -430429773)), _ULong___init__impl__c78o9k(new Long(-490543396, -1879631345)), _ULong___init__impl__c78o9k(new Long(-613179245, -1275797357)), _ULong___init__impl__c78o9k(new Long(-766474056, -521004872)), _ULong___init__impl__c78o9k(new Long(-2089659021, -1936240781)), _ULong___init__impl__c78o9k(new Long(1682893519, -1346559152)), _ULong___init__impl__c78o9k(new Long(2103616899, -609457116)), _ULong___init__impl__c78o9k(new Long(-832723086, -1991523434)), _ULong___init__impl__c78o9k(new Long(-2114645681, -1415662468)), _ULong___init__impl__c78o9k(new Long(-1569565278, -695836261)), _ULong___init__impl__c78o9k(new Long(1166505349, -2045510399)), _ULong___init__impl__c78o9k(new Long(-1763093785, -1483146175)), _ULong___init__impl__c78o9k(new Long(-56383584, -780190895)), _ULong___init__impl__c78o9k(new Long(1038502084, -2098232045)), _ULong___init__impl__c78o9k(new Long(224385781, -1549048232)), _ULong___init__impl__c78o9k(new Long(280482227, -862568466)), _ULong___init__impl__c78o9k(new Long(-1796880865, -4468759)), _ULong___init__impl__c78o9k(new Long(-49308717, -1613405711)), _ULong___init__impl__c78o9k(new Long(2085847752, -943015314)), _ULong___init__impl__c78o9k(new Long(459826043, -105027318)), _ULong___init__impl__c78o9k(new Long(1361133101, -1676254810)), _ULong___init__impl__c78o9k(new Long(-446067272, -1021576689)), _ULong___init__impl__c78o9k(new Long(-557584090, -203229037)), _ULong___init__impl__c78o9k(new Long(1798993591, -1737630884)), _ULong___init__impl__c78o9k(new Long(-2046225307, -1098296781)), _ULong___init__impl__c78o9k(new Long(1737185663, -299129152)), _ULong___init__impl__c78o9k(new Long(1085741039, -1797568456)), _ULong___init__impl__c78o9k(new Long(1357176299, -1173218746)), _ULong___init__impl__c78o9k(new Long(-451013274, -392781609)), _ULong___init__impl__c78o9k(new Long(-281883296, -1856101242)), _ULong___init__impl__c78o9k(new Long(-1426095944, -1246384728)), _ULong___init__impl__c78o9k(new Long(-708878106, -484239086)), _ULong___init__impl__c78o9k(new Long(-979919729, -1913262165)), _ULong___init__impl__c78o9k(new Long(-1224899661, -1317835882)), _ULong___init__impl__c78o9k(new Long(1690100896, -573553028)), _ULong___init__impl__c78o9k(new Long(-1091170588, -1969083379)), _ULong___init__impl__c78o9k(new Long(783520413, -1387612399)), _ULong___init__impl__c78o9k(new Long(2053142340, -660773675)), _ULong___init__impl__c78o9k(new Long(1820084875, -2023596283)), _ULong___init__impl__c78o9k(new Long(-946119379, -1455753530)), _ULong___init__impl__c78o9k(new Long(2038576249, -745950088)), _ULong___init__impl__c78o9k(new Long(1274110155, -2076831541)), _ULong___init__impl__c78o9k(new Long(518895870, -1522297602)), _ULong___init__impl__c78o9k(new Long(-1498863810, -829130179)), _ULong___init__impl__c78o9k(new Long(-2010531705, -2128819098)), _ULong___init__impl__c78o9k(new Long(708060840, -1587282048)), _ULong___init__impl__c78o9k(new Long(885076050, -910360736)), _ULong___init__impl__c78o9k(new Long(1106345063, -64209096)), _ULong___init__impl__c78o9k(new Long(691465664, -1650743421)), _ULong___init__impl__c78o9k(new Long(-209409743, -989687453)), _ULong___init__impl__c78o9k(new Long(-261762179, -163367492)), _ULong___init__impl__c78o9k(new Long(373269550, -1712717418)), _ULong___init__impl__c78o9k(new Long(-1680896711, -1067154949)), _ULong___init__impl__c78o9k(new Long(-2101120888, -260201862)), _ULong___init__impl__c78o9k(new Long(-1850071467, -1773238900)), _ULong___init__impl__c78o9k(new Long(-1238847510, -1142806801)), _ULong___init__impl__c78o9k(new Long(-1548559387, -354766677)), _ULong___init__impl__c78o9k(new Long(1179634031, -1832341909)), _ULong___init__impl__c78o9k(new Long(400800715, -1216685562)), _ULong___init__impl__c78o9k(new Long(-1646482755, -447115129)), _ULong___init__impl__c78o9k(new Long(-1029051722, -1890059692)), _ULong___init__impl__c78o9k(new Long(-212572828, -1288832791)), _ULong___init__impl__c78o9k(new Long(1881767613, -537299164)), _ULong___init__impl__c78o9k(new Long(-971378890, -1946424714)), _ULong___init__impl__c78o9k(new Long(2007001859, -1359289068)), _ULong___init__impl__c78o9k(new Long(-1786214972, -625369511)), _ULong___init__impl__c78o9k(new Long(-42642533, -2001468681)), _ULong___init__impl__c78o9k(new Long(-53303167, -1428094027)), _ULong___init__impl__c78o9k(new Long(2080854690, -711375709)), _ULong___init__impl__c78o9k(new Long(763663269, -2055222554)), _ULong___init__impl__c78o9k(new Long(-1192904562, -1495286369)), _ULong___init__impl__c78o9k(new Long(-1491130702, -795366137)), _ULong___init__impl__c78o9k(new Long(-931956689, -2107716572)), _ULong___init__impl__c78o9k(new Long(-91204037, -1560903891)), _ULong___init__impl__c78o9k(new Long(2033478602, -877388039)), _ULong___init__impl__c78o9k(new Long(-679377220, -22993225)), _ULong___init__impl__c78o9k(new Long(-424610762, -1624983502)), _ULong___init__impl__c78o9k(new Long(-1604505277, -957487553)), _ULong___init__impl__c78o9k(new Long(-2005631596, -123117617)), _ULong___init__impl__c78o9k(new Long(-1253519748, -1687561247)), _ULong___init__impl__c78o9k(new Long(580583963, -1035709734)), _ULong___init__impl__c78o9k(new Long(-1421753694, -220895344)), _ULong___init__impl__c78o9k(new Long(1795758501, -1748672326)), _ULong___init__impl__c78o9k(new Long(97214479, -1112098583)), _ULong___init__impl__c78o9k(new Long(1195259923, -316381405)), _ULong___init__impl__c78o9k(new Long(210166539, -1808351114)), _ULong___init__impl__c78o9k(new Long(-1884775474, -1186697069)), _ULong___init__impl__c78o9k(new Long(1938997954, -409629512)), _ULong___init__impl__c78o9k(new Long(1211873721, -1866631181)), _ULong___init__impl__c78o9k(new Long(441100328, -1259547152)), _ULong___init__impl__c78o9k(new Long(551375410, -500692116)), _ULong___init__impl__c78o9k(new Long(-1802874017, -1923545309)), _ULong___init__impl__c78o9k(new Long(2041374775, -1330689812)), _ULong___init__impl__c78o9k(new Long(-1743248828, -589620441)), _ULong___init__impl__c78o9k(new Long(-1089530517, -1979125512)), _ULong___init__impl__c78o9k(new Long(-288171323, -1400165066)), _ULong___init__impl__c78o9k(new Long(-1433955977, -676464508)), _ULong___init__impl__c78o9k(new Long(-359351574, -2033403054)), _ULong___init__impl__c78o9k(new Long(-1522931291, -1468011993)), _ULong___init__impl__c78o9k(new Long(-1903664114, -761273167)), _ULong___init__impl__c78o9k(new Long(-116048247, -2086408466)), _ULong___init__impl__c78o9k(new Long(-1218802133, -1534268758)), _ULong___init__impl__c78o9k(new Long(1697722806, -844094123)), _ULong___init__impl__c78o9k(new Long(1597947665, -2138171563)), _ULong___init__impl__c78o9k(new Long(-1223790890, -1598972630)), _ULong___init__impl__c78o9k(new Long(1691486859, -924973963)), _ULong___init__impl__c78o9k(new Long(-1106866898, -82475630)), _ULong___init__impl__c78o9k(new Long(-1228662723, -1662160005)), _ULong___init__impl__c78o9k(new Long(-1535828404, -1003958182)), _ULong___init__impl__c78o9k(new Long(1301439967, -181205903)), _ULong___init__impl__c78o9k(new Long(-797212757, -1723866426)), _ULong___init__impl__c78o9k(new Long(-2070257770, -1081091208)), _ULong___init__impl__c78o9k(new Long(-1514080388, -277622186)), _ULong___init__impl__c78o9k(new Long(664312493, -1784126602)), _ULong___init__impl__c78o9k(new Long(-1317093031, -1156416429)), _ULong___init__impl__c78o9k(new Long(-1646366289, -371778712)), _ULong___init__impl__c78o9k(new Long(1655375629, -1842974431)), _ULong___init__impl__c78o9k(new Long(-1152005935, -1229976215)), _ULong___init__impl__c78o9k(new Long(707476229, -463728444)), _ULong___init__impl__c78o9k(new Long(-1705311005, -1900443014)), _ULong___init__impl__c78o9k(new Long(1089586716, -1301811943)), _ULong___init__impl__c78o9k(new Long(-1859242077, -553523105)), _ULong___init__impl__c78o9k(new Long(-1162026298, -1956564677)), _ULong___init__impl__c78o9k(new Long(-1452532873, -1371964022)), _ULong___init__impl__c78o9k(new Long(1405559381, -641213203)), _ULong___init__impl__c78o9k(new Long(1415345525, -2011370988)), _ULong___init__impl__c78o9k(new Long(1769181906, -1440471911)), _ULong___init__impl__c78o9k(new Long(-1009748089, -726848065)), _ULong___init__impl__c78o9k(new Long(-631092556, -2064892777)), _ULong___init__impl__c78o9k(new Long(-788865695, -1507374147)), _ULong___init__impl__c78o9k(new Long(1161401530, -810475859)), _ULong___init__impl__c78o9k(new Long(1262746868, -2117160148)), _ULong___init__impl__c78o9k(new Long(1578433585, -1572708361)), _ULong___init__impl__c78o9k(new Long(899300158, -892143627)), _ULong___init__impl__c78o9k(new Long(-2097100275, -41437710)), _ULong___init__impl__c78o9k(new Long(-1847558584, -1636511305)), _ULong___init__impl__c78o9k(new Long(1985519066, -971897307)), _ULong___init__impl__c78o9k(new Long(-739326639, -141129810)), _ULong___init__impl__c78o9k(new Long(1148533586, -1698818867)), _ULong___init__impl__c78o9k(new Long(-1785558489, -1049781760)), _ULong___init__impl__c78o9k(new Long(-1158206287, -238485376)), _ULong___init__impl__c78o9k(new Long(1960475630, -1759666096)), _ULong___init__impl__c78o9k(new Long(-1844372758, -1125840796)), _ULong___init__impl__c78o9k(new Long(-1231724123, -333559171)), _ULong___init__impl__c78o9k(new Long(-1843569401, -1819087218)), _ULong___init__impl__c78o9k(new Long(916763721, -1200117198)), _ULong___init__impl__c78o9k(new Long(-1001528997, -426404674)), _ULong___init__impl__c78o9k(new Long(984657113, -1877115657)), _ULong___init__impl__c78o9k(new Long(157079567, -1272652747)), _ULong___init__impl__c78o9k(new Long(1270091283, -517074110)), _ULong___init__impl__c78o9k(new Long(1867548875, -1933784055)), _ULong___init__impl__c78o9k(new Long(-886789378, -1343488245)), _ULong___init__impl__c78o9k(new Long(-1108486722, -605618482)), _ULong___init__impl__c78o9k(new Long(917808535, -1989124287)), _ULong___init__impl__c78o9k(new Long(-2073964804, -1412663535)), _ULong___init__impl__c78o9k(new Long(-444972356, -692087595)), _ULong___init__impl__c78o9k(new Long(-1351849547, -2043167483)), _ULong___init__impl__c78o9k(new Long(457671715, -1480217529)), _ULong___init__impl__c78o9k(new Long(-501652181, -776530088)), _ULong___init__impl__c78o9k(new Long(-1924145349, -2095944041)), _ULong___init__impl__c78o9k(new Long(1889785610, -1546188227)), _ULong___init__impl__c78o9k(new Long(-858993460, -858993460)), _ULong___init__impl__c78o9k(new Long(0, -2147483648)), _ULong___init__impl__c78o9k(new Long(0, -1610612736)), _ULong___init__impl__c78o9k(new Long(0, -939524096)), _ULong___init__impl__c78o9k(new Long(0, -100663296)), _ULong___init__impl__c78o9k(new Long(0, -1673527296)), _ULong___init__impl__c78o9k(new Long(0, -1018167296)), _ULong___init__impl__c78o9k(new Long(0, -198967296)), _ULong___init__impl__c78o9k(new Long(0, -1734967296)), _ULong___init__impl__c78o9k(new Long(0, -1094967296)), _ULong___init__impl__c78o9k(new Long(0, -294967296)), _ULong___init__impl__c78o9k(new Long(0, -1794967296)), _ULong___init__impl__c78o9k(new Long(0, -1169967296)), _ULong___init__impl__c78o9k(new Long(0, -388717296)), _ULong___init__impl__c78o9k(new Long(0, -1853561046)), _ULong___init__impl__c78o9k(new Long(-2147483648, -1243209484)), _ULong___init__impl__c78o9k(new Long(-1610612736, -480270031)), _ULong___init__impl__c78o9k(new Long(67108864, -1910781505)), _ULong___init__impl__c78o9k(new Long(-989855744, -1314735058)), _ULong___init__impl__c78o9k(new Long(1983905792, -569676998)), _ULong___init__impl__c78o9k(new Long(-1981284352, -1966660860)), _ULong___init__impl__c78o9k(new Long(-1402863616, -1384584251)), _ULong___init__impl__c78o9k(new Long(393904128, -656988489)), _ULong___init__impl__c78o9k(new Long(1856802816, -2021230542)), _ULong___init__impl__c78o9k(new Long(173519872, -1452796353)), _ULong___init__impl__c78o9k(new Long(-856841984, -742253618)), _ULong___init__impl__c78o9k(new Long(1075086496, -2074521247)), _ULong___init__impl__c78o9k(new Long(-1877367352, -1519409735)), _ULong___init__impl__c78o9k(new Long(-199225542, -825520345)), _ULong___init__impl__c78o9k(new Long(-124515964, -2126562952)), _ULong___init__impl__c78o9k(new Long(918096869, -1584461865)), _ULong___init__impl__c78o9k(new Long(73879262, -906835507)), _ULong___init__impl__c78o9k(new Long(1166090902, -59802560)), _ULong___init__impl__c78o9k(new Long(728806813, -1647989336)), _ULong___init__impl__c78o9k(new Long(911008517, -986244846)), _ULong___init__impl__c78o9k(new Long(-1008723002, -159064234)), _ULong___init__impl__c78o9k(new Long(980160860, -1710027882)), _ULong___init__impl__c78o9k(new Long(-922282573, -1063793029)), _ULong___init__impl__c78o9k(new Long(-1152853216, -255999462)), _ULong___init__impl__c78o9k(new Long(-1257404172, -1770612400)), _ULong___init__impl__c78o9k(new Long(-498013391, -1139523676)), _ULong___init__impl__c78o9k(new Long(451225085, -350662770)), _ULong___init__impl__c78o9k(new Long(-791726146, -1829776968)), _ULong___init__impl__c78o9k(new Long(84084141, -1213479385)), _ULong___init__impl__c78o9k(new Long(-968636647, -443107408)), _ULong___init__impl__c78o9k(new Long(2078956655, -1887554866)), _ULong___init__impl__c78o9k(new Long(451212171, -1285701758)), _ULong___init__impl__c78o9k(new Long(-1583468434, -533385374)), _ULong___init__impl__c78o9k(new Long(-1526538683, -1943978595)), _ULong___init__impl__c78o9k(new Long(239310294, -1356231419)), _ULong___init__impl__c78o9k(new Long(1372879692, -621547450)), _ULong___init__impl__c78o9k(new Long(-215692017, -1999079893)), _ULong___init__impl__c78o9k(new Long(-269615021, -1425108042)), _ULong___init__impl__c78o9k(new Long(-1410760600, -707643228)), _ULong___init__impl__c78o9k(new Long(-344854463, -2052889754)), _ULong___init__impl__c78o9k(new Long(-1504809903, -1492370368)), _ULong___init__impl__c78o9k(new Long(-807270555, -791721136)), _ULong___init__impl__c78o9k(new Long(-2115156833, -2105438446)), _ULong___init__impl__c78o9k(new Long(577279431, -1558056233)), _ULong___init__impl__c78o9k(new Long(-352142535, -873828468)), _ULong___init__impl__c78o9k(new Long(633563656, -18543760)), _ULong___init__impl__c78o9k(new Long(395977285, -1622202586)), _ULong___init__impl__c78o9k(new Long(-1652512042, -954011409)), _ULong___init__impl__c78o9k(new Long(-2065640053, -118772437)), _ULong___init__impl__c78o9k(new Long(856458615, -1684845509)), _ULong___init__impl__c78o9k(new Long(-3168555, -1032315063)), _ULong___init__impl__c78o9k(new Long(2143522954, -216652004)), _ULong___init__impl__c78o9k(new Long(-807781802, -1746020239)), _ULong___init__impl__c78o9k(new Long(1137756396, -1108783474)), _ULong___init__impl__c78o9k(new Long(-725288153, -312237519)), _ULong___init__impl__c78o9k(new Long(620436728, -1805761185)), _ULong___init__impl__c78o9k(new Long(-298195914, -1183459658)), _ULong___init__impl__c78o9k(new Long(-1446486716, -405582748)), _ULong___init__impl__c78o9k(new Long(-367183286, -1864101954)), _ULong___init__impl__c78o9k(new Long(-1532720931, -1256385618)), _ULong___init__impl__c78o9k(new Long(1305324308, -496740198)), _ULong___init__impl__c78o9k(new Long(1889569516, -1921075360)), _ULong___init__impl__c78o9k(new Long(-1933005400, -1327602376)), _ULong___init__impl__c78o9k(new Long(-1342514926, -585761146)), _ULong___init__impl__c78o9k(new Long(771540907, -1976713452)), _ULong___init__impl__c78o9k(new Long(964426134, -1397149991)), _ULong___init__impl__c78o9k(new Long(-2015692805, -672695665)), _ULong___init__impl__c78o9k(new Long(-1259808003, -2031047527)), _ULong___init__impl__c78o9k(new Long(572723644, -1465067584)), _ULong___init__impl__c78o9k(new Long(715904555, -757592656)), _ULong___init__impl__c78o9k(new Long(447440347, -2084108146)), _ULong___init__impl__c78o9k(new Long(-1588183214, -1531393359)), _ULong___init__impl__c78o9k(new Long(162254630, -840499874)), _ULong___init__impl__c78o9k(new Long(-972332680, -2135925158)), _ULong___init__impl__c78o9k(new Long(2005809622, -1596164623)), _ULong___init__impl__c78o9k(new Long(-713963444, -921463955)), _ULong___init__impl__c78o9k(new Long(1255029343, -78088119)), _ULong___init__impl__c78o9k(new Long(-826219397, -1659417811)), _ULong___init__impl__c78o9k(new Long(1114709402, -1000530439)), _ULong___init__impl__c78o9k(new Long(-1827838720, -176921225)), _ULong___init__impl__c78o9k(new Long(-1142399200, -1721188502)), _ULong___init__impl__c78o9k(new Long(1793226472, -1077743803)), _ULong___init__impl__c78o9k(new Long(-979692382, -273437930)), _ULong___init__impl__c78o9k(new Long(998304997, -1781511442)), _ULong___init__impl__c78o9k(new Long(-899602401, -1153147479)), _ULong___init__impl__c78o9k(new Long(1022980646, -367692524)), _ULong___init__impl__c78o9k(new Long(-1508120744, -1840420564)), _ULong___init__impl__c78o9k(new Long(-811409106, -1226783881)), _ULong___init__impl__c78o9k(new Long(-1014261382, -459738027)), _ULong___init__impl__c78o9k(new Long(-1707655188, -1897949003)), _ULong___init__impl__c78o9k(new Long(12914663, -1298694429)), _ULong___init__impl__c78o9k(new Long(-1057598495, -549626213)), _ULong___init__impl__c78o9k(new Long(1486484588, -1954129119)), _ULong___init__impl__c78o9k(new Long(-1363119737, -1368919575)), _ULong___init__impl__c78o9k(new Long(443583977, -637407644)), _ULong___init__impl__c78o9k(new Long(-1870243662, -2008992514)), _ULong___init__impl__c78o9k(new Long(883420894, -1437498818)), _ULong___init__impl__c78o9k(new Long(-1043207530, -723131699)), _ULong___init__impl__c78o9k(new Long(-1725746530, -2062570048)), _ULong___init__impl__c78o9k(new Long(-1083441339, -1504470736)), _ULong___init__impl__c78o9k(new Long(-280559850, -806846596)), _ULong___init__impl__c78o9k(new Long(361521006, -2114891858)), _ULong___init__impl__c78o9k(new Long(-1695582391, -1569872999)), _ULong___init__impl__c78o9k(new Long(28005660, -888599424)), _ULong___init__impl__c78o9k(new Long(35007075, -37007456)), _ULong___init__impl__c78o9k(new Long(21879422, -1633742396)), _ULong___init__impl__c78o9k(new Long(27349277, -968436171)), _ULong___init__impl__c78o9k(new Long(1107928421, -136803390)), _ULong___init__impl__c78o9k(new Long(1766197087, -1696114855)), _ULong___init__impl__c78o9k(new Long(-1013479113, -1046401745)), _ULong___init__impl__c78o9k(new Long(-1266848892, -234260357)), _ULong___init__impl__c78o9k(new Long(1355703090, -1757025459)), _ULong___init__impl__c78o9k(new Long(-1526596609, -1122540000)), _ULong___init__impl__c78o9k(new Long(-834503937, -329433176)), _ULong___init__impl__c78o9k(new Long(-2132177697, -1816508471)), _ULong___init__impl__c78o9k(new Long(-517738473, -1196893765)), _ULong___init__impl__c78o9k(new Long(-647173091, -422375382)), _ULong___init__impl__c78o9k(new Long(-941354094, -1874597350)), _ULong___init__impl__c78o9k(new Long(2044532855, -1269504863)), _ULong___init__impl__c78o9k(new Long(-665559404, -513139255)), _ULong___init__impl__c78o9k(new Long(657767197, -1931324770)), _ULong___init__impl__c78o9k(new Long(-1325274652, -1340414139)), _ULong___init__impl__c78o9k(new Long(490890333, -601775849)), _ULong___init__impl__c78o9k(new Long(1917419194, -1986722642)), _ULong___init__impl__c78o9k(new Long(249290345, -1409661478)), _ULong___init__impl__c78o9k(new Long(-1835870717, -688335024)), _ULong___init__impl__c78o9k(new Long(1536935362, -2040822126)), _ULong___init__impl__c78o9k(new Long(-226314446, -1477285834)), _ULong___init__impl__c78o9k(new Long(-1356634881, -772865468)), _ULong___init__impl__c78o9k(new Long(-311025889, -2093653654)), _ULong___init__impl__c78o9k(new Long(-1462524185, -1543325243)), _ULong___init__impl__c78o9k(new Long(319328417, -855414729)), _ULong___init__impl__c78o9k(new Long(1810192996, -2145246942)), _ULong___init__impl__c78o9k(new Long(115257597, -1607816853)), _ULong___init__impl__c78o9k(new Long(-929669827, -936029243)), _ULong___init__impl__c78o9k(new Long(985396364, -96294729)), _ULong___init__impl__c78o9k(new Long(-2068481833, -1670796942)), _ULong___init__impl__c78o9k(new Long(635623181, -1014754353)), _ULong___init__impl__c78o9k(new Long(-279212847, -194701118)), _ULong___init__impl__c78o9k(new Long(-711378942, -1732300935)), _ULong___init__impl__c78o9k(new Long(1258259971, -1091634344)), _ULong___init__impl__c78o9k(new Long(1572824964, -290801106)), _ULong___init__impl__c78o9k(new Long(-90726222, -1792363428)), _ULong___init__impl__c78o9k(new Long(960334047, -1166712460)), _ULong___init__impl__c78o9k(new Long(1200417559, -384648751)), _ULong___init__impl__c78o9k(new Long(-860351762, -1851018206)), _ULong___init__impl__c78o9k(new Long(2145785770, -1240030933)), _ULong___init__impl__c78o9k(new Long(1608490388, -476296842)), _ULong___init__impl__c78o9k(new Long(-68435331, -1908298263)), _ULong___init__impl__c78o9k(new Long(2061939484, -1311631004)), _ULong___init__impl__c78o9k(new Long(-1717542941, -565796931)), _ULong___init__impl__c78o9k(new Long(-2147206162, -1964235818)), _ULong___init__impl__c78o9k(new Long(537217769, -1381552948)), _ULong___init__impl__c78o9k(new Long(671522212, -653199361)), _ULong___init__impl__c78o9k(new Long(2030314118, -2018862337)), _ULong___init__impl__c78o9k(new Long(1464150824, -1449836097)), _ULong___init__impl__c78o9k(new Long(756446706, -738553297)), _ULong___init__impl__c78o9k(new Long(2083391927, -2072208547)), _ULong___init__impl__c78o9k(new Long(-616985563, -1516518860)), _ULong___init__impl__c78o9k(new Long(302509870, -821906750)), _ULong___init__impl__c78o9k(new Long(1262810493, -2124304455)), _ULong___init__impl__c78o9k(new Long(-1642712356, -1581638745)), _ULong___init__impl__c78o9k(new Long(-2053390445, -903306607)), _ULong___init__impl__c78o9k(new Long(-419254408, -55391435)), _ULong___init__impl__c78o9k(new Long(-1335775829, -1645232383)), _ULong___init__impl__c78o9k(new Long(477763862, -982798654)), _ULong___init__impl__c78o9k(new Long(-1550278821, -154756494)), _ULong___init__impl__c78o9k(new Long(-1505795175, -1707335545)), _ULong___init__impl__c78o9k(new Long(-1882243969, -1060427607)), _ULong___init__impl__c78o9k(new Long(-205321313, -251792685)), _ULong___init__impl__c78o9k(new Long(2019157827, -1767983164)), _ULong___init__impl__c78o9k(new Long(-1771020012, -1136237131)), _ULong___init__impl__c78o9k(new Long(-66291367, -346554590)), _ULong___init__impl__c78o9k(new Long(-578303016, -1827209355)), _ULong___init__impl__c78o9k(new Long(1424604878, -1210269869)), _ULong___init__impl__c78o9k(new Long(707014273, -439095512)), _ULong___init__impl__c78o9k(new Long(441883920, -1885047431)), _ULong___init__impl__c78o9k(new Long(1626096725, -1282567465)), _ULong___init__impl__c78o9k(new Long(958879082, -529467507)), _ULong___init__impl__c78o9k(new Long(1136170338, -1941529928)), _ULong___init__impl__c78o9k(new Long(1420212923, -1353170586)), _ULong___init__impl__c78o9k(new Long(-372217494, -617721409)), _ULong___init__impl__c78o9k(new Long(-232635934, -1996688617)), _ULong___init__impl__c78o9k(new Long(-290794918, -1422118947)), _ULong___init__impl__c78o9k(new Long(1783990001, -703906859)), _ULong___init__impl__c78o9k(new Long(1651864662, -2050554523)), _ULong___init__impl__c78o9k(new Long(-1156394644, -1489451330)), _ULong___init__impl__c78o9k(new Long(1775732167, -788072338)), _ULong___init__impl__c78o9k(new Long(36090780, -2103157947)), _ULong___init__impl__c78o9k(new Long(1118855300, -1555205610)), _ULong___init__impl__c78o9k(new Long(-748914523, -870265189)), _ULong___init__impl__c78o9k(new Long(-936143154, -14089662)), _ULong___init__impl__c78o9k(new Long(-1121960383, -1619418775)), _ULong___init__impl__c78o9k(new Long(745033169, -950531644)), _ULong___init__impl__c78o9k(new Long(931291461, -114422731)), _ULong___init__impl__c78o9k(new Long(1118928075, -1682126943)), _ULong___init__impl__c78o9k(new Long(-1822565378, -1028916855)), _ULong___init__impl__c78o9k(new Long(-130723074, -212404245)), _ULong___init__impl__c78o9k(new Long(2065781726, -1743365389)), _ULong___init__impl__c78o9k(new Long(1508485334, -1105464912)), _ULong___init__impl__c78o9k(new Long(1885606668, -308089316)), _ULong___init__impl__c78o9k(new Long(-968979481, -1803168559)), _ULong___init__impl__c78o9k(new Long(936259297, -1180218874)), _ULong___init__impl__c78o9k(new Long(-977159527, -401531769)), _ULong___init__impl__c78o9k(new Long(-610724704, -1861570092)), _ULong___init__impl__c78o9k(new Long(310335944, -1253220790)), _ULong___init__impl__c78o9k(new Long(-1759563718, -492784164)), _ULong___init__impl__c78o9k(new Long(-562856412, -1918602839)), _ULong___init__impl__c78o9k(new Long(1443913133, -1324511724)), _ULong___init__impl__c78o9k(new Long(1804891416, -581897831)), _ULong___init__impl__c78o9k(new Long(-482555601, -1974298881)), _ULong___init__impl__c78o9k(new Long(-603194501, -1394131777)), _ULong___init__impl__c78o9k(new Long(-753993126, -668922897)), _ULong___init__impl__c78o9k(new Long(-471245704, -2028689547)), _ULong___init__impl__c78o9k(new Long(1558426518, -1462120109)), _ULong___init__impl__c78o9k(new Long(874291324, -753908312)), _ULong___init__impl__c78o9k(new Long(546432077, -2081805431)), _ULong___init__impl__c78o9k(new Long(1756781920, -1528514965)), _ULong___init__impl__c78o9k(new Long(1122235577, -836901882)), _ULong___init__impl__c78o9k(new Long(-372344589, -2133676413)), _ULong___init__impl__c78o9k(new Long(-465430736, -1593353692)), _ULong___init__impl__c78o9k(new Long(491953404, -917950290)), _ULong___init__impl__c78o9k(new Long(-1532541892, -73696039)), _ULong___init__impl__c78o9k(new Long(115903141, -1656672760)), _ULong___init__impl__c78o9k(new Long(144878926, -997099126)), _ULong___init__impl__c78o9k(new Long(-1966384990, -172632084)), _ULong___init__impl__c78o9k(new Long(-692119707, -1718507789)), _ULong___init__impl__c78o9k(new Long(-865149633, -1074392912)), _ULong___init__impl__c78o9k(new Long(-7695218, -269249316)), _ULong___init__impl__c78o9k(new Long(532061401, -1778893558)), _ULong___init__impl__c78o9k(new Long(-1482406897, -1149875124)), _ULong___init__impl__c78o9k(new Long(-779266797, -363602081)), _ULong___init__impl__c78o9k(new Long(-487041748, -1837864037)), _ULong___init__impl__c78o9k(new Long(-608802185, -1223588222)), _ULong___init__impl__c78o9k(new Long(-1834744555, -455743453)), _ULong___init__impl__c78o9k(new Long(1000768301, -1895452394)), _ULong___init__impl__c78o9k(new Long(-896523272, -1295573669)), _ULong___init__impl__c78o9k(new Long(-1120654090, -545725262)), _ULong___init__impl__c78o9k(new Long(-1237279718, -1951691025)), _ULong___init__impl__c78o9k(new Long(-1546599648, -1365871957)), _ULong___init__impl__c78o9k(new Long(-1933249560, -633598122)), _ULong___init__impl__c78o9k(new Long(402331761, -2006611562)), _ULong___init__impl__c78o9k(new Long(-1644568947, -1434522629)), _ULong___init__impl__c78o9k(new Long(-2055711183, -719411462)), _ULong___init__impl__c78o9k(new Long(-1821690402, -2060244900)), _ULong___init__impl__c78o9k(new Long(-1203371178, -1501564301)), _ULong___init__impl__c78o9k(new Long(-1504213972, -803213552)), _ULong___init__impl__c78o9k(new Long(1744220827, -2112621206)), _ULong___init__impl__c78o9k(new Long(32792386, -1567034683)), _ULong___init__impl__c78o9k(new Long(1114732307, -885051530)), _ULong___init__impl__c78o9k(new Long(-754068265, -32572589)), _ULong___init__impl__c78o9k(new Long(1676190982, -1630970604)), _ULong___init__impl__c78o9k(new Long(2095238728, -964971431)), _ULong___init__impl__c78o9k(new Long(-602177062, -132472465)), _ULong___init__impl__c78o9k(new Long(-376360664, -1693408027)), _ULong___init__impl__c78o9k(new Long(1677032818, -1043018209)), _ULong___init__impl__c78o9k(new Long(1022549199, -230030937)), _ULong___init__impl__c78o9k(new Long(-2045261311, -1754382072)), _ULong___init__impl__c78o9k(new Long(-1482834814, -1119235766)), _ULong___init__impl__c78o9k(new Long(1367681954, -325302883)), _ULong___init__impl__c78o9k(new Long(1391672133, -1813927038)), _ULong___init__impl__c78o9k(new Long(-407893481, -1193666974)), _ULong___init__impl__c78o9k(new Long(-1583608675, -418341893)), _ULong___init__impl__c78o9k(new Long(1157728226, -1872076419)), _ULong___init__impl__c78o9k(new Long(-1774065190, -1266353700)), _ULong___init__impl__c78o9k(new Long(-1143839663, -509200301)), _ULong___init__impl__c78o9k(new Long(1432583858, -1928862924)), _ULong___init__impl__c78o9k(new Long(1790729823, -1337336831)), _ULong___init__impl__c78o9k(new Long(-982813193, -597929215)), _ULong___init__impl__c78o9k(new Long(459483578, -1984318495)), _ULong___init__impl__c78o9k(new Long(1648096297, -1406656295)), _ULong___init__impl__c78o9k(new Long(-1161105101, -684578545)), _ULong___init__impl__c78o9k(new Long(-725690688, -2038474327)), _ULong___init__impl__c78o9k(new Long(1240370288, -1474351084)), _ULong___init__impl__c78o9k(new Long(1550462860, -769197031)), _ULong___init__impl__c78o9k(new Long(-641573449, -2091360881)), _ULong___init__impl__c78o9k(new Long(-801966811, -1540459277)), _ULong___init__impl__c78o9k(new Long(-1002458513, -851832272)), _ULong___init__impl__c78o9k(new Long(2057817989, -2143007906)), _ULong___init__impl__c78o9k(new Long(424788838, -1605018058)), _ULong___init__impl__c78o9k(new Long(-1616497600, -932530749)), _ULong___init__impl__c78o9k(new Long(-2020622000, -91921612)), _ULong___init__impl__c78o9k(new Long(-726017838, -1668063744)), _ULong___init__impl__c78o9k(new Long(166219527, -1011337855)), _ULong___init__impl__c78o9k(new Long(1281516232, -190430495)), _ULong___init__impl__c78o9k(new Long(-809665091, -1729631796)), _ULong___init__impl__c78o9k(new Long(61660460, -1088297920)), _ULong___init__impl__c78o9k(new Long(77075576, -286630576)), _ULong___init__impl__c78o9k(new Long(48172235, -1789756846)), _ULong___init__impl__c78o9k(new Long(-2087268355, -1163454234)), _ULong___init__impl__c78o9k(new Long(612140029, -380575968)), _ULong___init__impl__c78o9k(new Long(382587518, -1848472716)), _ULong___init__impl__c78o9k(new Long(478234397, -1236849071)), _ULong___init__impl__c78o9k(new Long(1671534821, -472319515)), _ULong___init__impl__c78o9k(new Long(1581580175, -1905812433))]));
    }
  }
  function Close() {
    Close_instance = this;
    PathNode.call(this);
  }
  var Close_instance;
  function Close_getInstance() {
    if (Close_instance == null)
      new Close();
    return Close_instance;
  }
  function RelativeMoveTo(dx, dy) {
    PathNode.call(this);
    this.dx_1 = dx;
    this.dy_1 = dy;
  }
  protoOf(RelativeMoveTo).get_dx_knto0z_k$ = function () {
    return this.dx_1;
  };
  protoOf(RelativeMoveTo).get_dy_knto0y_k$ = function () {
    return this.dy_1;
  };
  protoOf(RelativeMoveTo).component1_7eebsc_k$ = function () {
    return this.dx_1;
  };
  protoOf(RelativeMoveTo).component2_7eebsb_k$ = function () {
    return this.dy_1;
  };
  protoOf(RelativeMoveTo).copy_4tzoad_k$ = function (dx, dy) {
    return new RelativeMoveTo(dx, dy);
  };
  protoOf(RelativeMoveTo).copy$default_8h4itw_k$ = function (dx, dy, $super) {
    dx = dx === VOID ? this.dx_1 : dx;
    dy = dy === VOID ? this.dy_1 : dy;
    return $super === VOID ? this.copy_4tzoad_k$(dx, dy) : $super.copy_4tzoad_k$.call(this, dx, dy);
  };
  protoOf(RelativeMoveTo).toString = function () {
    return 'RelativeMoveTo(dx=' + this.dx_1 + ', dy=' + this.dy_1 + ')';
  };
  protoOf(RelativeMoveTo).hashCode = function () {
    var result = getNumberHashCode(this.dx_1);
    result = imul(result, 31) + getNumberHashCode(this.dy_1) | 0;
    return result;
  };
  protoOf(RelativeMoveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeMoveTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeMoveTo ? other : THROW_CCE();
    if (!equals(this.dx_1, tmp0_other_with_cast.dx_1))
      return false;
    if (!equals(this.dy_1, tmp0_other_with_cast.dy_1))
      return false;
    return true;
  };
  function MoveTo(x, y) {
    PathNode.call(this);
    this.x_1 = x;
    this.y_1 = y;
  }
  protoOf(MoveTo).get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  protoOf(MoveTo).get_y_1mhr68_k$ = function () {
    return this.y_1;
  };
  protoOf(MoveTo).component1_7eebsc_k$ = function () {
    return this.x_1;
  };
  protoOf(MoveTo).component2_7eebsb_k$ = function () {
    return this.y_1;
  };
  protoOf(MoveTo).copy_4tzoad_k$ = function (x, y) {
    return new MoveTo(x, y);
  };
  protoOf(MoveTo).copy$default_4gel34_k$ = function (x, y, $super) {
    x = x === VOID ? this.x_1 : x;
    y = y === VOID ? this.y_1 : y;
    return $super === VOID ? this.copy_4tzoad_k$(x, y) : $super.copy_4tzoad_k$.call(this, x, y);
  };
  protoOf(MoveTo).toString = function () {
    return 'MoveTo(x=' + this.x_1 + ', y=' + this.y_1 + ')';
  };
  protoOf(MoveTo).hashCode = function () {
    var result = getNumberHashCode(this.x_1);
    result = imul(result, 31) + getNumberHashCode(this.y_1) | 0;
    return result;
  };
  protoOf(MoveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MoveTo))
      return false;
    var tmp0_other_with_cast = other instanceof MoveTo ? other : THROW_CCE();
    if (!equals(this.x_1, tmp0_other_with_cast.x_1))
      return false;
    if (!equals(this.y_1, tmp0_other_with_cast.y_1))
      return false;
    return true;
  };
  function RelativeLineTo(dx, dy) {
    PathNode.call(this);
    this.dx_1 = dx;
    this.dy_1 = dy;
  }
  protoOf(RelativeLineTo).get_dx_knto0z_k$ = function () {
    return this.dx_1;
  };
  protoOf(RelativeLineTo).get_dy_knto0y_k$ = function () {
    return this.dy_1;
  };
  protoOf(RelativeLineTo).component1_7eebsc_k$ = function () {
    return this.dx_1;
  };
  protoOf(RelativeLineTo).component2_7eebsb_k$ = function () {
    return this.dy_1;
  };
  protoOf(RelativeLineTo).copy_4tzoad_k$ = function (dx, dy) {
    return new RelativeLineTo(dx, dy);
  };
  protoOf(RelativeLineTo).copy$default_usatdd_k$ = function (dx, dy, $super) {
    dx = dx === VOID ? this.dx_1 : dx;
    dy = dy === VOID ? this.dy_1 : dy;
    return $super === VOID ? this.copy_4tzoad_k$(dx, dy) : $super.copy_4tzoad_k$.call(this, dx, dy);
  };
  protoOf(RelativeLineTo).toString = function () {
    return 'RelativeLineTo(dx=' + this.dx_1 + ', dy=' + this.dy_1 + ')';
  };
  protoOf(RelativeLineTo).hashCode = function () {
    var result = getNumberHashCode(this.dx_1);
    result = imul(result, 31) + getNumberHashCode(this.dy_1) | 0;
    return result;
  };
  protoOf(RelativeLineTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeLineTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeLineTo ? other : THROW_CCE();
    if (!equals(this.dx_1, tmp0_other_with_cast.dx_1))
      return false;
    if (!equals(this.dy_1, tmp0_other_with_cast.dy_1))
      return false;
    return true;
  };
  function LineTo(x, y) {
    PathNode.call(this);
    this.x_1 = x;
    this.y_1 = y;
  }
  protoOf(LineTo).get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  protoOf(LineTo).get_y_1mhr68_k$ = function () {
    return this.y_1;
  };
  protoOf(LineTo).component1_7eebsc_k$ = function () {
    return this.x_1;
  };
  protoOf(LineTo).component2_7eebsb_k$ = function () {
    return this.y_1;
  };
  protoOf(LineTo).copy_4tzoad_k$ = function (x, y) {
    return new LineTo(x, y);
  };
  protoOf(LineTo).copy$default_qrkvml_k$ = function (x, y, $super) {
    x = x === VOID ? this.x_1 : x;
    y = y === VOID ? this.y_1 : y;
    return $super === VOID ? this.copy_4tzoad_k$(x, y) : $super.copy_4tzoad_k$.call(this, x, y);
  };
  protoOf(LineTo).toString = function () {
    return 'LineTo(x=' + this.x_1 + ', y=' + this.y_1 + ')';
  };
  protoOf(LineTo).hashCode = function () {
    var result = getNumberHashCode(this.x_1);
    result = imul(result, 31) + getNumberHashCode(this.y_1) | 0;
    return result;
  };
  protoOf(LineTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LineTo))
      return false;
    var tmp0_other_with_cast = other instanceof LineTo ? other : THROW_CCE();
    if (!equals(this.x_1, tmp0_other_with_cast.x_1))
      return false;
    if (!equals(this.y_1, tmp0_other_with_cast.y_1))
      return false;
    return true;
  };
  function RelativeHorizontalTo(dx) {
    PathNode.call(this);
    this.dx_1 = dx;
  }
  protoOf(RelativeHorizontalTo).get_dx_knto0z_k$ = function () {
    return this.dx_1;
  };
  protoOf(RelativeHorizontalTo).component1_7eebsc_k$ = function () {
    return this.dx_1;
  };
  protoOf(RelativeHorizontalTo).copy_s06gv7_k$ = function (dx) {
    return new RelativeHorizontalTo(dx);
  };
  protoOf(RelativeHorizontalTo).copy$default_v56tl4_k$ = function (dx, $super) {
    dx = dx === VOID ? this.dx_1 : dx;
    return $super === VOID ? this.copy_s06gv7_k$(dx) : $super.copy_s06gv7_k$.call(this, dx);
  };
  protoOf(RelativeHorizontalTo).toString = function () {
    return 'RelativeHorizontalTo(dx=' + this.dx_1 + ')';
  };
  protoOf(RelativeHorizontalTo).hashCode = function () {
    return getNumberHashCode(this.dx_1);
  };
  protoOf(RelativeHorizontalTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeHorizontalTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeHorizontalTo ? other : THROW_CCE();
    if (!equals(this.dx_1, tmp0_other_with_cast.dx_1))
      return false;
    return true;
  };
  function HorizontalTo(x) {
    PathNode.call(this);
    this.x_1 = x;
  }
  protoOf(HorizontalTo).get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  protoOf(HorizontalTo).component1_7eebsc_k$ = function () {
    return this.x_1;
  };
  protoOf(HorizontalTo).copy_s06gv7_k$ = function (x) {
    return new HorizontalTo(x);
  };
  protoOf(HorizontalTo).copy$default_4an5cc_k$ = function (x, $super) {
    x = x === VOID ? this.x_1 : x;
    return $super === VOID ? this.copy_s06gv7_k$(x) : $super.copy_s06gv7_k$.call(this, x);
  };
  protoOf(HorizontalTo).toString = function () {
    return 'HorizontalTo(x=' + this.x_1 + ')';
  };
  protoOf(HorizontalTo).hashCode = function () {
    return getNumberHashCode(this.x_1);
  };
  protoOf(HorizontalTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HorizontalTo))
      return false;
    var tmp0_other_with_cast = other instanceof HorizontalTo ? other : THROW_CCE();
    if (!equals(this.x_1, tmp0_other_with_cast.x_1))
      return false;
    return true;
  };
  function RelativeVerticalTo(dy) {
    PathNode.call(this);
    this.dy_1 = dy;
  }
  protoOf(RelativeVerticalTo).get_dy_knto0y_k$ = function () {
    return this.dy_1;
  };
  protoOf(RelativeVerticalTo).component1_7eebsc_k$ = function () {
    return this.dy_1;
  };
  protoOf(RelativeVerticalTo).copy_s06gv7_k$ = function (dy) {
    return new RelativeVerticalTo(dy);
  };
  protoOf(RelativeVerticalTo).copy$default_cuo5ze_k$ = function (dy, $super) {
    dy = dy === VOID ? this.dy_1 : dy;
    return $super === VOID ? this.copy_s06gv7_k$(dy) : $super.copy_s06gv7_k$.call(this, dy);
  };
  protoOf(RelativeVerticalTo).toString = function () {
    return 'RelativeVerticalTo(dy=' + this.dy_1 + ')';
  };
  protoOf(RelativeVerticalTo).hashCode = function () {
    return getNumberHashCode(this.dy_1);
  };
  protoOf(RelativeVerticalTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeVerticalTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeVerticalTo ? other : THROW_CCE();
    if (!equals(this.dy_1, tmp0_other_with_cast.dy_1))
      return false;
    return true;
  };
  function VerticalTo(y) {
    PathNode.call(this);
    this.y_1 = y;
  }
  protoOf(VerticalTo).get_y_1mhr68_k$ = function () {
    return this.y_1;
  };
  protoOf(VerticalTo).component1_7eebsc_k$ = function () {
    return this.y_1;
  };
  protoOf(VerticalTo).copy_s06gv7_k$ = function (y) {
    return new VerticalTo(y);
  };
  protoOf(VerticalTo).copy$default_6z7oi_k$ = function (y, $super) {
    y = y === VOID ? this.y_1 : y;
    return $super === VOID ? this.copy_s06gv7_k$(y) : $super.copy_s06gv7_k$.call(this, y);
  };
  protoOf(VerticalTo).toString = function () {
    return 'VerticalTo(y=' + this.y_1 + ')';
  };
  protoOf(VerticalTo).hashCode = function () {
    return getNumberHashCode(this.y_1);
  };
  protoOf(VerticalTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VerticalTo))
      return false;
    var tmp0_other_with_cast = other instanceof VerticalTo ? other : THROW_CCE();
    if (!equals(this.y_1, tmp0_other_with_cast.y_1))
      return false;
    return true;
  };
  function RelativeCurveTo(dx1, dy1, dx2, dy2, dx3, dy3) {
    PathNode.call(this, true);
    this.dx1__1 = dx1;
    this.dy1__1 = dy1;
    this.dx2__1 = dx2;
    this.dy2__1 = dy2;
    this.dx3__1 = dx3;
    this.dy3__1 = dy3;
  }
  protoOf(RelativeCurveTo).get_dx1_18j70s_k$ = function () {
    return this.dx1__1;
  };
  protoOf(RelativeCurveTo).get_dy1_18j6zx_k$ = function () {
    return this.dy1__1;
  };
  protoOf(RelativeCurveTo).get_dx2_18j70r_k$ = function () {
    return this.dx2__1;
  };
  protoOf(RelativeCurveTo).get_dy2_18j6zw_k$ = function () {
    return this.dy2__1;
  };
  protoOf(RelativeCurveTo).get_dx3_18j70q_k$ = function () {
    return this.dx3__1;
  };
  protoOf(RelativeCurveTo).get_dy3_18j6zv_k$ = function () {
    return this.dy3__1;
  };
  protoOf(RelativeCurveTo).component1_7eebsc_k$ = function () {
    return this.dx1__1;
  };
  protoOf(RelativeCurveTo).component2_7eebsb_k$ = function () {
    return this.dy1__1;
  };
  protoOf(RelativeCurveTo).component3_7eebsa_k$ = function () {
    return this.dx2__1;
  };
  protoOf(RelativeCurveTo).component4_7eebs9_k$ = function () {
    return this.dy2__1;
  };
  protoOf(RelativeCurveTo).component5_7eebs8_k$ = function () {
    return this.dx3__1;
  };
  protoOf(RelativeCurveTo).component6_7eebs7_k$ = function () {
    return this.dy3__1;
  };
  protoOf(RelativeCurveTo).copy_82jydn_k$ = function (dx1, dy1, dx2, dy2, dx3, dy3) {
    return new RelativeCurveTo(dx1, dy1, dx2, dy2, dx3, dy3);
  };
  protoOf(RelativeCurveTo).copy$default_ql1ny2_k$ = function (dx1, dy1, dx2, dy2, dx3, dy3, $super) {
    dx1 = dx1 === VOID ? this.dx1__1 : dx1;
    dy1 = dy1 === VOID ? this.dy1__1 : dy1;
    dx2 = dx2 === VOID ? this.dx2__1 : dx2;
    dy2 = dy2 === VOID ? this.dy2__1 : dy2;
    dx3 = dx3 === VOID ? this.dx3__1 : dx3;
    dy3 = dy3 === VOID ? this.dy3__1 : dy3;
    return $super === VOID ? this.copy_82jydn_k$(dx1, dy1, dx2, dy2, dx3, dy3) : $super.copy_82jydn_k$.call(this, dx1, dy1, dx2, dy2, dx3, dy3);
  };
  protoOf(RelativeCurveTo).toString = function () {
    return 'RelativeCurveTo(dx1=' + this.dx1__1 + ', dy1=' + this.dy1__1 + ', dx2=' + this.dx2__1 + ', dy2=' + this.dy2__1 + ', dx3=' + this.dx3__1 + ', dy3=' + this.dy3__1 + ')';
  };
  protoOf(RelativeCurveTo).hashCode = function () {
    var result = getNumberHashCode(this.dx1__1);
    result = imul(result, 31) + getNumberHashCode(this.dy1__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.dx2__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.dy2__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.dx3__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.dy3__1) | 0;
    return result;
  };
  protoOf(RelativeCurveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeCurveTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeCurveTo ? other : THROW_CCE();
    if (!equals(this.dx1__1, tmp0_other_with_cast.dx1__1))
      return false;
    if (!equals(this.dy1__1, tmp0_other_with_cast.dy1__1))
      return false;
    if (!equals(this.dx2__1, tmp0_other_with_cast.dx2__1))
      return false;
    if (!equals(this.dy2__1, tmp0_other_with_cast.dy2__1))
      return false;
    if (!equals(this.dx3__1, tmp0_other_with_cast.dx3__1))
      return false;
    if (!equals(this.dy3__1, tmp0_other_with_cast.dy3__1))
      return false;
    return true;
  };
  function CurveTo(x1, y1, x2, y2, x3, y3) {
    PathNode.call(this, true);
    this.x1__1 = x1;
    this.y1__1 = y1;
    this.x2__1 = x2;
    this.y2__1 = y2;
    this.x3__1 = x3;
    this.y3__1 = y3;
  }
  protoOf(CurveTo).get_x1_kntnlq_k$ = function () {
    return this.x1__1;
  };
  protoOf(CurveTo).get_y1_kntnkv_k$ = function () {
    return this.y1__1;
  };
  protoOf(CurveTo).get_x2_kntnlp_k$ = function () {
    return this.x2__1;
  };
  protoOf(CurveTo).get_y2_kntnku_k$ = function () {
    return this.y2__1;
  };
  protoOf(CurveTo).get_x3_kntnlo_k$ = function () {
    return this.x3__1;
  };
  protoOf(CurveTo).get_y3_kntnkt_k$ = function () {
    return this.y3__1;
  };
  protoOf(CurveTo).component1_7eebsc_k$ = function () {
    return this.x1__1;
  };
  protoOf(CurveTo).component2_7eebsb_k$ = function () {
    return this.y1__1;
  };
  protoOf(CurveTo).component3_7eebsa_k$ = function () {
    return this.x2__1;
  };
  protoOf(CurveTo).component4_7eebs9_k$ = function () {
    return this.y2__1;
  };
  protoOf(CurveTo).component5_7eebs8_k$ = function () {
    return this.x3__1;
  };
  protoOf(CurveTo).component6_7eebs7_k$ = function () {
    return this.y3__1;
  };
  protoOf(CurveTo).copy_82jydn_k$ = function (x1, y1, x2, y2, x3, y3) {
    return new CurveTo(x1, y1, x2, y2, x3, y3);
  };
  protoOf(CurveTo).copy$default_uyb0tu_k$ = function (x1, y1, x2, y2, x3, y3, $super) {
    x1 = x1 === VOID ? this.x1__1 : x1;
    y1 = y1 === VOID ? this.y1__1 : y1;
    x2 = x2 === VOID ? this.x2__1 : x2;
    y2 = y2 === VOID ? this.y2__1 : y2;
    x3 = x3 === VOID ? this.x3__1 : x3;
    y3 = y3 === VOID ? this.y3__1 : y3;
    return $super === VOID ? this.copy_82jydn_k$(x1, y1, x2, y2, x3, y3) : $super.copy_82jydn_k$.call(this, x1, y1, x2, y2, x3, y3);
  };
  protoOf(CurveTo).toString = function () {
    return 'CurveTo(x1=' + this.x1__1 + ', y1=' + this.y1__1 + ', x2=' + this.x2__1 + ', y2=' + this.y2__1 + ', x3=' + this.x3__1 + ', y3=' + this.y3__1 + ')';
  };
  protoOf(CurveTo).hashCode = function () {
    var result = getNumberHashCode(this.x1__1);
    result = imul(result, 31) + getNumberHashCode(this.y1__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.x2__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.y2__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.x3__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.y3__1) | 0;
    return result;
  };
  protoOf(CurveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CurveTo))
      return false;
    var tmp0_other_with_cast = other instanceof CurveTo ? other : THROW_CCE();
    if (!equals(this.x1__1, tmp0_other_with_cast.x1__1))
      return false;
    if (!equals(this.y1__1, tmp0_other_with_cast.y1__1))
      return false;
    if (!equals(this.x2__1, tmp0_other_with_cast.x2__1))
      return false;
    if (!equals(this.y2__1, tmp0_other_with_cast.y2__1))
      return false;
    if (!equals(this.x3__1, tmp0_other_with_cast.x3__1))
      return false;
    if (!equals(this.y3__1, tmp0_other_with_cast.y3__1))
      return false;
    return true;
  };
  function RelativeReflectiveCurveTo(dx1, dy1, dx2, dy2) {
    PathNode.call(this, true);
    this.dx1__1 = dx1;
    this.dy1__1 = dy1;
    this.dx2__1 = dx2;
    this.dy2__1 = dy2;
  }
  protoOf(RelativeReflectiveCurveTo).get_dx1_18j70s_k$ = function () {
    return this.dx1__1;
  };
  protoOf(RelativeReflectiveCurveTo).get_dy1_18j6zx_k$ = function () {
    return this.dy1__1;
  };
  protoOf(RelativeReflectiveCurveTo).get_dx2_18j70r_k$ = function () {
    return this.dx2__1;
  };
  protoOf(RelativeReflectiveCurveTo).get_dy2_18j6zw_k$ = function () {
    return this.dy2__1;
  };
  protoOf(RelativeReflectiveCurveTo).component1_7eebsc_k$ = function () {
    return this.dx1__1;
  };
  protoOf(RelativeReflectiveCurveTo).component2_7eebsb_k$ = function () {
    return this.dy1__1;
  };
  protoOf(RelativeReflectiveCurveTo).component3_7eebsa_k$ = function () {
    return this.dx2__1;
  };
  protoOf(RelativeReflectiveCurveTo).component4_7eebs9_k$ = function () {
    return this.dy2__1;
  };
  protoOf(RelativeReflectiveCurveTo).copy_egrqb9_k$ = function (dx1, dy1, dx2, dy2) {
    return new RelativeReflectiveCurveTo(dx1, dy1, dx2, dy2);
  };
  protoOf(RelativeReflectiveCurveTo).copy$default_kqsr53_k$ = function (dx1, dy1, dx2, dy2, $super) {
    dx1 = dx1 === VOID ? this.dx1__1 : dx1;
    dy1 = dy1 === VOID ? this.dy1__1 : dy1;
    dx2 = dx2 === VOID ? this.dx2__1 : dx2;
    dy2 = dy2 === VOID ? this.dy2__1 : dy2;
    return $super === VOID ? this.copy_egrqb9_k$(dx1, dy1, dx2, dy2) : $super.copy_egrqb9_k$.call(this, dx1, dy1, dx2, dy2);
  };
  protoOf(RelativeReflectiveCurveTo).toString = function () {
    return 'RelativeReflectiveCurveTo(dx1=' + this.dx1__1 + ', dy1=' + this.dy1__1 + ', dx2=' + this.dx2__1 + ', dy2=' + this.dy2__1 + ')';
  };
  protoOf(RelativeReflectiveCurveTo).hashCode = function () {
    var result = getNumberHashCode(this.dx1__1);
    result = imul(result, 31) + getNumberHashCode(this.dy1__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.dx2__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.dy2__1) | 0;
    return result;
  };
  protoOf(RelativeReflectiveCurveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeReflectiveCurveTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeReflectiveCurveTo ? other : THROW_CCE();
    if (!equals(this.dx1__1, tmp0_other_with_cast.dx1__1))
      return false;
    if (!equals(this.dy1__1, tmp0_other_with_cast.dy1__1))
      return false;
    if (!equals(this.dx2__1, tmp0_other_with_cast.dx2__1))
      return false;
    if (!equals(this.dy2__1, tmp0_other_with_cast.dy2__1))
      return false;
    return true;
  };
  function ReflectiveCurveTo(x1, y1, x2, y2) {
    PathNode.call(this, true);
    this.x1__1 = x1;
    this.y1__1 = y1;
    this.x2__1 = x2;
    this.y2__1 = y2;
  }
  protoOf(ReflectiveCurveTo).get_x1_kntnlq_k$ = function () {
    return this.x1__1;
  };
  protoOf(ReflectiveCurveTo).get_y1_kntnkv_k$ = function () {
    return this.y1__1;
  };
  protoOf(ReflectiveCurveTo).get_x2_kntnlp_k$ = function () {
    return this.x2__1;
  };
  protoOf(ReflectiveCurveTo).get_y2_kntnku_k$ = function () {
    return this.y2__1;
  };
  protoOf(ReflectiveCurveTo).component1_7eebsc_k$ = function () {
    return this.x1__1;
  };
  protoOf(ReflectiveCurveTo).component2_7eebsb_k$ = function () {
    return this.y1__1;
  };
  protoOf(ReflectiveCurveTo).component3_7eebsa_k$ = function () {
    return this.x2__1;
  };
  protoOf(ReflectiveCurveTo).component4_7eebs9_k$ = function () {
    return this.y2__1;
  };
  protoOf(ReflectiveCurveTo).copy_egrqb9_k$ = function (x1, y1, x2, y2) {
    return new ReflectiveCurveTo(x1, y1, x2, y2);
  };
  protoOf(ReflectiveCurveTo).copy$default_ulf9q3_k$ = function (x1, y1, x2, y2, $super) {
    x1 = x1 === VOID ? this.x1__1 : x1;
    y1 = y1 === VOID ? this.y1__1 : y1;
    x2 = x2 === VOID ? this.x2__1 : x2;
    y2 = y2 === VOID ? this.y2__1 : y2;
    return $super === VOID ? this.copy_egrqb9_k$(x1, y1, x2, y2) : $super.copy_egrqb9_k$.call(this, x1, y1, x2, y2);
  };
  protoOf(ReflectiveCurveTo).toString = function () {
    return 'ReflectiveCurveTo(x1=' + this.x1__1 + ', y1=' + this.y1__1 + ', x2=' + this.x2__1 + ', y2=' + this.y2__1 + ')';
  };
  protoOf(ReflectiveCurveTo).hashCode = function () {
    var result = getNumberHashCode(this.x1__1);
    result = imul(result, 31) + getNumberHashCode(this.y1__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.x2__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.y2__1) | 0;
    return result;
  };
  protoOf(ReflectiveCurveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ReflectiveCurveTo))
      return false;
    var tmp0_other_with_cast = other instanceof ReflectiveCurveTo ? other : THROW_CCE();
    if (!equals(this.x1__1, tmp0_other_with_cast.x1__1))
      return false;
    if (!equals(this.y1__1, tmp0_other_with_cast.y1__1))
      return false;
    if (!equals(this.x2__1, tmp0_other_with_cast.x2__1))
      return false;
    if (!equals(this.y2__1, tmp0_other_with_cast.y2__1))
      return false;
    return true;
  };
  function RelativeQuadTo(dx1, dy1, dx2, dy2) {
    PathNode.call(this, VOID, true);
    this.dx1__1 = dx1;
    this.dy1__1 = dy1;
    this.dx2__1 = dx2;
    this.dy2__1 = dy2;
  }
  protoOf(RelativeQuadTo).get_dx1_18j70s_k$ = function () {
    return this.dx1__1;
  };
  protoOf(RelativeQuadTo).get_dy1_18j6zx_k$ = function () {
    return this.dy1__1;
  };
  protoOf(RelativeQuadTo).get_dx2_18j70r_k$ = function () {
    return this.dx2__1;
  };
  protoOf(RelativeQuadTo).get_dy2_18j6zw_k$ = function () {
    return this.dy2__1;
  };
  protoOf(RelativeQuadTo).component1_7eebsc_k$ = function () {
    return this.dx1__1;
  };
  protoOf(RelativeQuadTo).component2_7eebsb_k$ = function () {
    return this.dy1__1;
  };
  protoOf(RelativeQuadTo).component3_7eebsa_k$ = function () {
    return this.dx2__1;
  };
  protoOf(RelativeQuadTo).component4_7eebs9_k$ = function () {
    return this.dy2__1;
  };
  protoOf(RelativeQuadTo).copy_egrqb9_k$ = function (dx1, dy1, dx2, dy2) {
    return new RelativeQuadTo(dx1, dy1, dx2, dy2);
  };
  protoOf(RelativeQuadTo).copy$default_bfb1ao_k$ = function (dx1, dy1, dx2, dy2, $super) {
    dx1 = dx1 === VOID ? this.dx1__1 : dx1;
    dy1 = dy1 === VOID ? this.dy1__1 : dy1;
    dx2 = dx2 === VOID ? this.dx2__1 : dx2;
    dy2 = dy2 === VOID ? this.dy2__1 : dy2;
    return $super === VOID ? this.copy_egrqb9_k$(dx1, dy1, dx2, dy2) : $super.copy_egrqb9_k$.call(this, dx1, dy1, dx2, dy2);
  };
  protoOf(RelativeQuadTo).toString = function () {
    return 'RelativeQuadTo(dx1=' + this.dx1__1 + ', dy1=' + this.dy1__1 + ', dx2=' + this.dx2__1 + ', dy2=' + this.dy2__1 + ')';
  };
  protoOf(RelativeQuadTo).hashCode = function () {
    var result = getNumberHashCode(this.dx1__1);
    result = imul(result, 31) + getNumberHashCode(this.dy1__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.dx2__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.dy2__1) | 0;
    return result;
  };
  protoOf(RelativeQuadTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeQuadTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeQuadTo ? other : THROW_CCE();
    if (!equals(this.dx1__1, tmp0_other_with_cast.dx1__1))
      return false;
    if (!equals(this.dy1__1, tmp0_other_with_cast.dy1__1))
      return false;
    if (!equals(this.dx2__1, tmp0_other_with_cast.dx2__1))
      return false;
    if (!equals(this.dy2__1, tmp0_other_with_cast.dy2__1))
      return false;
    return true;
  };
  function QuadTo(x1, y1, x2, y2) {
    PathNode.call(this, VOID, true);
    this.x1__1 = x1;
    this.y1__1 = y1;
    this.x2__1 = x2;
    this.y2__1 = y2;
  }
  protoOf(QuadTo).get_x1_kntnlq_k$ = function () {
    return this.x1__1;
  };
  protoOf(QuadTo).get_y1_kntnkv_k$ = function () {
    return this.y1__1;
  };
  protoOf(QuadTo).get_x2_kntnlp_k$ = function () {
    return this.x2__1;
  };
  protoOf(QuadTo).get_y2_kntnku_k$ = function () {
    return this.y2__1;
  };
  protoOf(QuadTo).component1_7eebsc_k$ = function () {
    return this.x1__1;
  };
  protoOf(QuadTo).component2_7eebsb_k$ = function () {
    return this.y1__1;
  };
  protoOf(QuadTo).component3_7eebsa_k$ = function () {
    return this.x2__1;
  };
  protoOf(QuadTo).component4_7eebs9_k$ = function () {
    return this.y2__1;
  };
  protoOf(QuadTo).copy_egrqb9_k$ = function (x1, y1, x2, y2) {
    return new QuadTo(x1, y1, x2, y2);
  };
  protoOf(QuadTo).copy$default_oon1vg_k$ = function (x1, y1, x2, y2, $super) {
    x1 = x1 === VOID ? this.x1__1 : x1;
    y1 = y1 === VOID ? this.y1__1 : y1;
    x2 = x2 === VOID ? this.x2__1 : x2;
    y2 = y2 === VOID ? this.y2__1 : y2;
    return $super === VOID ? this.copy_egrqb9_k$(x1, y1, x2, y2) : $super.copy_egrqb9_k$.call(this, x1, y1, x2, y2);
  };
  protoOf(QuadTo).toString = function () {
    return 'QuadTo(x1=' + this.x1__1 + ', y1=' + this.y1__1 + ', x2=' + this.x2__1 + ', y2=' + this.y2__1 + ')';
  };
  protoOf(QuadTo).hashCode = function () {
    var result = getNumberHashCode(this.x1__1);
    result = imul(result, 31) + getNumberHashCode(this.y1__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.x2__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.y2__1) | 0;
    return result;
  };
  protoOf(QuadTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof QuadTo))
      return false;
    var tmp0_other_with_cast = other instanceof QuadTo ? other : THROW_CCE();
    if (!equals(this.x1__1, tmp0_other_with_cast.x1__1))
      return false;
    if (!equals(this.y1__1, tmp0_other_with_cast.y1__1))
      return false;
    if (!equals(this.x2__1, tmp0_other_with_cast.x2__1))
      return false;
    if (!equals(this.y2__1, tmp0_other_with_cast.y2__1))
      return false;
    return true;
  };
  function RelativeReflectiveQuadTo(dx, dy) {
    PathNode.call(this, VOID, true);
    this.dx_1 = dx;
    this.dy_1 = dy;
  }
  protoOf(RelativeReflectiveQuadTo).get_dx_knto0z_k$ = function () {
    return this.dx_1;
  };
  protoOf(RelativeReflectiveQuadTo).get_dy_knto0y_k$ = function () {
    return this.dy_1;
  };
  protoOf(RelativeReflectiveQuadTo).component1_7eebsc_k$ = function () {
    return this.dx_1;
  };
  protoOf(RelativeReflectiveQuadTo).component2_7eebsb_k$ = function () {
    return this.dy_1;
  };
  protoOf(RelativeReflectiveQuadTo).copy_4tzoad_k$ = function (dx, dy) {
    return new RelativeReflectiveQuadTo(dx, dy);
  };
  protoOf(RelativeReflectiveQuadTo).copy$default_9ulsub_k$ = function (dx, dy, $super) {
    dx = dx === VOID ? this.dx_1 : dx;
    dy = dy === VOID ? this.dy_1 : dy;
    return $super === VOID ? this.copy_4tzoad_k$(dx, dy) : $super.copy_4tzoad_k$.call(this, dx, dy);
  };
  protoOf(RelativeReflectiveQuadTo).toString = function () {
    return 'RelativeReflectiveQuadTo(dx=' + this.dx_1 + ', dy=' + this.dy_1 + ')';
  };
  protoOf(RelativeReflectiveQuadTo).hashCode = function () {
    var result = getNumberHashCode(this.dx_1);
    result = imul(result, 31) + getNumberHashCode(this.dy_1) | 0;
    return result;
  };
  protoOf(RelativeReflectiveQuadTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeReflectiveQuadTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeReflectiveQuadTo ? other : THROW_CCE();
    if (!equals(this.dx_1, tmp0_other_with_cast.dx_1))
      return false;
    if (!equals(this.dy_1, tmp0_other_with_cast.dy_1))
      return false;
    return true;
  };
  function ReflectiveQuadTo(x, y) {
    PathNode.call(this, VOID, true);
    this.x_1 = x;
    this.y_1 = y;
  }
  protoOf(ReflectiveQuadTo).get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  protoOf(ReflectiveQuadTo).get_y_1mhr68_k$ = function () {
    return this.y_1;
  };
  protoOf(ReflectiveQuadTo).component1_7eebsc_k$ = function () {
    return this.x_1;
  };
  protoOf(ReflectiveQuadTo).component2_7eebsb_k$ = function () {
    return this.y_1;
  };
  protoOf(ReflectiveQuadTo).copy_4tzoad_k$ = function (x, y) {
    return new ReflectiveQuadTo(x, y);
  };
  protoOf(ReflectiveQuadTo).copy$default_tjvfvz_k$ = function (x, y, $super) {
    x = x === VOID ? this.x_1 : x;
    y = y === VOID ? this.y_1 : y;
    return $super === VOID ? this.copy_4tzoad_k$(x, y) : $super.copy_4tzoad_k$.call(this, x, y);
  };
  protoOf(ReflectiveQuadTo).toString = function () {
    return 'ReflectiveQuadTo(x=' + this.x_1 + ', y=' + this.y_1 + ')';
  };
  protoOf(ReflectiveQuadTo).hashCode = function () {
    var result = getNumberHashCode(this.x_1);
    result = imul(result, 31) + getNumberHashCode(this.y_1) | 0;
    return result;
  };
  protoOf(ReflectiveQuadTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ReflectiveQuadTo))
      return false;
    var tmp0_other_with_cast = other instanceof ReflectiveQuadTo ? other : THROW_CCE();
    if (!equals(this.x_1, tmp0_other_with_cast.x_1))
      return false;
    if (!equals(this.y_1, tmp0_other_with_cast.y_1))
      return false;
    return true;
  };
  function RelativeArcTo(horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartDx, arcStartDy) {
    PathNode.call(this);
    this.horizontalEllipseRadius_1 = horizontalEllipseRadius;
    this.verticalEllipseRadius_1 = verticalEllipseRadius;
    this.theta_1 = theta;
    this.isMoreThanHalf_1 = isMoreThanHalf;
    this.isPositiveArc_1 = isPositiveArc;
    this.arcStartDx_1 = arcStartDx;
    this.arcStartDy_1 = arcStartDy;
  }
  protoOf(RelativeArcTo).get_horizontalEllipseRadius_i0l277_k$ = function () {
    return this.horizontalEllipseRadius_1;
  };
  protoOf(RelativeArcTo).get_verticalEllipseRadius_bilkpd_k$ = function () {
    return this.verticalEllipseRadius_1;
  };
  protoOf(RelativeArcTo).get_theta_iz24xh_k$ = function () {
    return this.theta_1;
  };
  protoOf(RelativeArcTo).get_isMoreThanHalf_ok4n2c_k$ = function () {
    return this.isMoreThanHalf_1;
  };
  protoOf(RelativeArcTo).get_isPositiveArc_qpecd6_k$ = function () {
    return this.isPositiveArc_1;
  };
  protoOf(RelativeArcTo).get_arcStartDx_twxbvx_k$ = function () {
    return this.arcStartDx_1;
  };
  protoOf(RelativeArcTo).get_arcStartDy_twxbvy_k$ = function () {
    return this.arcStartDy_1;
  };
  protoOf(RelativeArcTo).component1_7eebsc_k$ = function () {
    return this.horizontalEllipseRadius_1;
  };
  protoOf(RelativeArcTo).component2_7eebsb_k$ = function () {
    return this.verticalEllipseRadius_1;
  };
  protoOf(RelativeArcTo).component3_7eebsa_k$ = function () {
    return this.theta_1;
  };
  protoOf(RelativeArcTo).component4_7eebs9_k$ = function () {
    return this.isMoreThanHalf_1;
  };
  protoOf(RelativeArcTo).component5_7eebs8_k$ = function () {
    return this.isPositiveArc_1;
  };
  protoOf(RelativeArcTo).component6_7eebs7_k$ = function () {
    return this.arcStartDx_1;
  };
  protoOf(RelativeArcTo).component7_7eebs6_k$ = function () {
    return this.arcStartDy_1;
  };
  protoOf(RelativeArcTo).copy_at02il_k$ = function (horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartDx, arcStartDy) {
    return new RelativeArcTo(horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartDx, arcStartDy);
  };
  protoOf(RelativeArcTo).copy$default_fw0bl0_k$ = function (horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartDx, arcStartDy, $super) {
    horizontalEllipseRadius = horizontalEllipseRadius === VOID ? this.horizontalEllipseRadius_1 : horizontalEllipseRadius;
    verticalEllipseRadius = verticalEllipseRadius === VOID ? this.verticalEllipseRadius_1 : verticalEllipseRadius;
    theta = theta === VOID ? this.theta_1 : theta;
    isMoreThanHalf = isMoreThanHalf === VOID ? this.isMoreThanHalf_1 : isMoreThanHalf;
    isPositiveArc = isPositiveArc === VOID ? this.isPositiveArc_1 : isPositiveArc;
    arcStartDx = arcStartDx === VOID ? this.arcStartDx_1 : arcStartDx;
    arcStartDy = arcStartDy === VOID ? this.arcStartDy_1 : arcStartDy;
    return $super === VOID ? this.copy_at02il_k$(horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartDx, arcStartDy) : $super.copy_at02il_k$.call(this, horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartDx, arcStartDy);
  };
  protoOf(RelativeArcTo).toString = function () {
    return 'RelativeArcTo(horizontalEllipseRadius=' + this.horizontalEllipseRadius_1 + ', verticalEllipseRadius=' + this.verticalEllipseRadius_1 + ', theta=' + this.theta_1 + ', isMoreThanHalf=' + this.isMoreThanHalf_1 + ', isPositiveArc=' + this.isPositiveArc_1 + ', arcStartDx=' + this.arcStartDx_1 + ', arcStartDy=' + this.arcStartDy_1 + ')';
  };
  protoOf(RelativeArcTo).hashCode = function () {
    var result = getNumberHashCode(this.horizontalEllipseRadius_1);
    result = imul(result, 31) + getNumberHashCode(this.verticalEllipseRadius_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.theta_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.isMoreThanHalf_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.isPositiveArc_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.arcStartDx_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.arcStartDy_1) | 0;
    return result;
  };
  protoOf(RelativeArcTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeArcTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeArcTo ? other : THROW_CCE();
    if (!equals(this.horizontalEllipseRadius_1, tmp0_other_with_cast.horizontalEllipseRadius_1))
      return false;
    if (!equals(this.verticalEllipseRadius_1, tmp0_other_with_cast.verticalEllipseRadius_1))
      return false;
    if (!equals(this.theta_1, tmp0_other_with_cast.theta_1))
      return false;
    if (!(this.isMoreThanHalf_1 === tmp0_other_with_cast.isMoreThanHalf_1))
      return false;
    if (!(this.isPositiveArc_1 === tmp0_other_with_cast.isPositiveArc_1))
      return false;
    if (!equals(this.arcStartDx_1, tmp0_other_with_cast.arcStartDx_1))
      return false;
    if (!equals(this.arcStartDy_1, tmp0_other_with_cast.arcStartDy_1))
      return false;
    return true;
  };
  function ArcTo(horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartX, arcStartY) {
    PathNode.call(this);
    this.horizontalEllipseRadius_1 = horizontalEllipseRadius;
    this.verticalEllipseRadius_1 = verticalEllipseRadius;
    this.theta_1 = theta;
    this.isMoreThanHalf_1 = isMoreThanHalf;
    this.isPositiveArc_1 = isPositiveArc;
    this.arcStartX_1 = arcStartX;
    this.arcStartY_1 = arcStartY;
  }
  protoOf(ArcTo).get_horizontalEllipseRadius_i0l277_k$ = function () {
    return this.horizontalEllipseRadius_1;
  };
  protoOf(ArcTo).get_verticalEllipseRadius_bilkpd_k$ = function () {
    return this.verticalEllipseRadius_1;
  };
  protoOf(ArcTo).get_theta_iz24xh_k$ = function () {
    return this.theta_1;
  };
  protoOf(ArcTo).get_isMoreThanHalf_ok4n2c_k$ = function () {
    return this.isMoreThanHalf_1;
  };
  protoOf(ArcTo).get_isPositiveArc_qpecd6_k$ = function () {
    return this.isPositiveArc_1;
  };
  protoOf(ArcTo).get_arcStartX_stlj0h_k$ = function () {
    return this.arcStartX_1;
  };
  protoOf(ArcTo).get_arcStartY_stlj0g_k$ = function () {
    return this.arcStartY_1;
  };
  protoOf(ArcTo).component1_7eebsc_k$ = function () {
    return this.horizontalEllipseRadius_1;
  };
  protoOf(ArcTo).component2_7eebsb_k$ = function () {
    return this.verticalEllipseRadius_1;
  };
  protoOf(ArcTo).component3_7eebsa_k$ = function () {
    return this.theta_1;
  };
  protoOf(ArcTo).component4_7eebs9_k$ = function () {
    return this.isMoreThanHalf_1;
  };
  protoOf(ArcTo).component5_7eebs8_k$ = function () {
    return this.isPositiveArc_1;
  };
  protoOf(ArcTo).component6_7eebs7_k$ = function () {
    return this.arcStartX_1;
  };
  protoOf(ArcTo).component7_7eebs6_k$ = function () {
    return this.arcStartY_1;
  };
  protoOf(ArcTo).copy_at02il_k$ = function (horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartX, arcStartY) {
    return new ArcTo(horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartX, arcStartY);
  };
  protoOf(ArcTo).copy$default_r4lws8_k$ = function (horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartX, arcStartY, $super) {
    horizontalEllipseRadius = horizontalEllipseRadius === VOID ? this.horizontalEllipseRadius_1 : horizontalEllipseRadius;
    verticalEllipseRadius = verticalEllipseRadius === VOID ? this.verticalEllipseRadius_1 : verticalEllipseRadius;
    theta = theta === VOID ? this.theta_1 : theta;
    isMoreThanHalf = isMoreThanHalf === VOID ? this.isMoreThanHalf_1 : isMoreThanHalf;
    isPositiveArc = isPositiveArc === VOID ? this.isPositiveArc_1 : isPositiveArc;
    arcStartX = arcStartX === VOID ? this.arcStartX_1 : arcStartX;
    arcStartY = arcStartY === VOID ? this.arcStartY_1 : arcStartY;
    return $super === VOID ? this.copy_at02il_k$(horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartX, arcStartY) : $super.copy_at02il_k$.call(this, horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartX, arcStartY);
  };
  protoOf(ArcTo).toString = function () {
    return 'ArcTo(horizontalEllipseRadius=' + this.horizontalEllipseRadius_1 + ', verticalEllipseRadius=' + this.verticalEllipseRadius_1 + ', theta=' + this.theta_1 + ', isMoreThanHalf=' + this.isMoreThanHalf_1 + ', isPositiveArc=' + this.isPositiveArc_1 + ', arcStartX=' + this.arcStartX_1 + ', arcStartY=' + this.arcStartY_1 + ')';
  };
  protoOf(ArcTo).hashCode = function () {
    var result = getNumberHashCode(this.horizontalEllipseRadius_1);
    result = imul(result, 31) + getNumberHashCode(this.verticalEllipseRadius_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.theta_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.isMoreThanHalf_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.isPositiveArc_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.arcStartX_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.arcStartY_1) | 0;
    return result;
  };
  protoOf(ArcTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ArcTo))
      return false;
    var tmp0_other_with_cast = other instanceof ArcTo ? other : THROW_CCE();
    if (!equals(this.horizontalEllipseRadius_1, tmp0_other_with_cast.horizontalEllipseRadius_1))
      return false;
    if (!equals(this.verticalEllipseRadius_1, tmp0_other_with_cast.verticalEllipseRadius_1))
      return false;
    if (!equals(this.theta_1, tmp0_other_with_cast.theta_1))
      return false;
    if (!(this.isMoreThanHalf_1 === tmp0_other_with_cast.isMoreThanHalf_1))
      return false;
    if (!(this.isPositiveArc_1 === tmp0_other_with_cast.isPositiveArc_1))
      return false;
    if (!equals(this.arcStartX_1, tmp0_other_with_cast.arcStartX_1))
      return false;
    if (!equals(this.arcStartY_1, tmp0_other_with_cast.arcStartY_1))
      return false;
    return true;
  };
  function PathNode(isCurve, isQuad) {
    isCurve = isCurve === VOID ? false : isCurve;
    isQuad = isQuad === VOID ? false : isQuad;
    this.isCurve_1 = isCurve;
    this.isQuad_1 = isQuad;
  }
  protoOf(PathNode).get_isCurve_z9wfzw_k$ = function () {
    return this.isCurve_1;
  };
  protoOf(PathNode).get_isQuad_ew4yai_k$ = function () {
    return this.isQuad_1;
  };
  function get_EmptyArray() {
    _init_properties_PathParser_kt__xn6mis();
    return EmptyArray;
  }
  var EmptyArray;
  var properties_initialized_PathParser_kt_mzars6;
  function _init_properties_PathParser_kt__xn6mis() {
    if (!properties_initialized_PathParser_kt_mzars6) {
      properties_initialized_PathParser_kt_mzars6 = true;
      EmptyArray = new Float32Array(0);
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
    return '@androidx.compose.ui.graphics.internal.NoOp()';
  };
  function putBytesInto(_this__u8e3s4, array, offset, length) {
    if ((offset < 0 ? true : length < 0) ? true : (offset + length | 0) > array.length) {
      throw IndexOutOfBoundsException_init_$Create$('Invalid offset or length');
    }
    if (imul(length, 4) > _this__u8e3s4.length) {
      throw IndexOutOfBoundsException_init_$Create$('ByteArray not big enough to hold the requested number of integers');
    }
    var inductionVariable = 0;
    if (inductionVariable < length)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var byteIndex = imul(i, 4);
        array[offset + i | 0] = _this__u8e3s4[byteIndex] & 255 | (_this__u8e3s4[byteIndex + 1 | 0] & 255) << 8 | (_this__u8e3s4[byteIndex + 2 | 0] & 255) << 16 | (_this__u8e3s4[byteIndex + 3 | 0] & 255) << 24;
      }
       while (inductionVariable < length);
  }
  function toSkia(_this__u8e3s4) {
    return _this__u8e3s4 === Companion_getInstance_13().get_Clear_ts5s9y_k$() ? BlendMode_CLEAR_getInstance() : _this__u8e3s4 === Companion_getInstance_13().get_Src_3wpzdd_k$() ? BlendMode_SRC_getInstance() : _this__u8e3s4 === Companion_getInstance_13().get_Dst_qkkuz6_k$() ? BlendMode_DST_getInstance() : _this__u8e3s4 === Companion_getInstance_13().get_SrcOver_anr685_k$() ? BlendMode_SRC_OVER_getInstance() : _this__u8e3s4 === Companion_getInstance_13().get_DstOver_xoacee_k$() ? BlendMode_DST_OVER_getInstance() : _this__u8e3s4 === Companion_getInstance_13().get_SrcIn_enr0mu_k$() ? BlendMode_SRC_IN_getInstance() : _this__u8e3s4 === Companion_getInstance_13().get_DstIn_cyk4p5_k$() ? BlendMode_DST_IN_getInstance() : _this__u8e3s4 === Companion_getInstance_13().get_SrcOut_d2bb4n_k$() ? BlendMode_SRC_OUT_getInstance() : _this__u8e3s4 === Companion_getInstance_13().get_DstOut_gwk8qg_k$() ? BlendMode_DST_OUT_getInstance() : _this__u8e3s4 === Companion_getInstance_13().get_SrcAtop_z2kmd7_k$() ? BlendMode_SRC_ATOP_getInstance() : _this__u8e3s4 === Companion_getInstance_13().get_DstAtop_c21g6y_k$() ? BlendMode_DST_ATOP_getInstance() : _this__u8e3s4 === Companion_getInstance_13().get_Xor_cjn5co_k$() ? BlendMode_XOR_getInstance() : _this__u8e3s4 === Companion_getInstance_13().get_Plus_m5bugp_k$() ? BlendMode_PLUS_getInstance() : _this__u8e3s4 === Companion_getInstance_13().get_Modulate_d2dqmw_k$() ? BlendMode_MODULATE_getInstance() : _this__u8e3s4 === Companion_getInstance_13().get_Screen_rhfdpx_k$() ? BlendMode_SCREEN_getInstance() : _this__u8e3s4 === Companion_getInstance_13().get_Overlay_hnqr0j_k$() ? BlendMode_OVERLAY_getInstance() : _this__u8e3s4 === Companion_getInstance_13().get_Darken_lz7qci_k$() ? BlendMode_DARKEN_getInstance() : _this__u8e3s4 === Companion_getInstance_13().get_Lighten_9vbchg_k$() ? BlendMode_LIGHTEN_getInstance() : _this__u8e3s4 === Companion_getInstance_13().get_ColorDodge_xtmzgz_k$() ? BlendMode_COLOR_DODGE_getInstance() : _this__u8e3s4 === Companion_getInstance_13().get_ColorBurn_f5bk1t_k$() ? BlendMode_COLOR_BURN_getInstance() : _this__u8e3s4 === Companion_getInstance_13().get_Hardlight_1wjq08_k$() ? BlendMode_HARD_LIGHT_getInstance() : _this__u8e3s4 === Companion_getInstance_13().get_Softlight_npagmf_k$() ? BlendMode_SOFT_LIGHT_getInstance() : _this__u8e3s4 === Companion_getInstance_13().get_Difference_uke8xo_k$() ? BlendMode_DIFFERENCE_getInstance() : _this__u8e3s4 === Companion_getInstance_13().get_Exclusion_80cb7p_k$() ? BlendMode_EXCLUSION_getInstance() : _this__u8e3s4 === Companion_getInstance_13().get_Multiply_8zrhrx_k$() ? BlendMode_MULTIPLY_getInstance() : _this__u8e3s4 === Companion_getInstance_13().get_Hue_m25sez_k$() ? BlendMode_HUE_getInstance() : _this__u8e3s4 === Companion_getInstance_13().get_Saturation_gkrtkh_k$() ? BlendMode_SATURATION_getInstance() : _this__u8e3s4 === Companion_getInstance_13().get_Color_mzcv4g_k$() ? BlendMode_COLOR_getInstance() : _this__u8e3s4 === Companion_getInstance_13().get_Luminosity_tkhgzk_k$() ? BlendMode_LUMINOSITY_getInstance() : BlendMode_SRC_OVER_getInstance();
  }
  function identityMatrix33() {
    return new Matrix33(new Float32Array([1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0]));
  }
  function toSkiaRect(_this__u8e3s4) {
    return Companion_getInstance_3().makeLTRB_2wvuxm_k$(_this__u8e3s4.get_left_woprgw_k$(), _this__u8e3s4.get_top_18ivbo_k$(), _this__u8e3s4.get_right_ixz7xv_k$(), _this__u8e3s4.get_bottom_bj8ras_k$());
  }
  function toSkiaRRect(_this__u8e3s4) {
    var radii = new Float32Array(8);
    radii[0] = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.get_topLeftCornerRadius_91hulg_k$());
    radii[1] = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.get_topLeftCornerRadius_91hulg_k$());
    radii[2] = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.get_topRightCornerRadius_kxqun3_k$());
    radii[3] = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.get_topRightCornerRadius_kxqun3_k$());
    radii[4] = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.get_bottomRightCornerRadius_166w49_k$());
    radii[5] = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.get_bottomRightCornerRadius_166w49_k$());
    radii[6] = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.get_bottomLeftCornerRadius_9r65ws_k$());
    radii[7] = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.get_bottomLeftCornerRadius_9r65ws_k$());
    return Companion_getInstance_4().makeComplexLTRB_n5v03i_k$(_this__u8e3s4.get_left_woprgw_k$(), _this__u8e3s4.get_top_18ivbo_k$(), _this__u8e3s4.get_right_ixz7xv_k$(), _this__u8e3s4.get_bottom_bj8ras_k$(), radii);
  }
  function toComposeRect(_this__u8e3s4) {
    return new Rect(_this__u8e3s4.get_left_woprgw_k$(), _this__u8e3s4.get_top_18ivbo_k$(), _this__u8e3s4.get_right_ixz7xv_k$(), _this__u8e3s4.get_bottom_bj8ras_k$());
  }
  function get_nativeCanvas(_this__u8e3s4) {
    return (_this__u8e3s4 instanceof SkiaBackedCanvas ? _this__u8e3s4 : THROW_CCE()).skia_1;
  }
  function asComposeCanvas(_this__u8e3s4) {
    return new SkiaBackedCanvas(_this__u8e3s4);
  }
  function set_alphaMultiplier(_this__u8e3s4, value) {
    (_this__u8e3s4 instanceof SkiaBackedCanvas ? _this__u8e3s4 : THROW_CCE()).alphaMultiplier_1 = value;
  }
  function get_alphaMultiplier(_this__u8e3s4) {
    return (_this__u8e3s4 instanceof SkiaBackedCanvas ? _this__u8e3s4 : THROW_CCE()).alphaMultiplier_1;
  }
  function ActualCanvas(image) {
    var skiaBitmap = asSkiaBitmap(image);
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!skiaBitmap.get_isImmutable_b8i701_k$()) {
      // Inline function 'androidx.compose.ui.graphics.ActualCanvas.<anonymous>' call
      var message = 'Cannot draw on immutable ImageBitmap';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return new SkiaBackedCanvas(Canvas_init_$Create$(skiaBitmap));
  }
  function _get_skia__ddpejf(_this__u8e3s4, $this) {
    // Inline function 'kotlin.apply' call
    var this_0 = _this__u8e3s4 instanceof SkiaBackedPaint ? _this__u8e3s4 : THROW_CCE();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.SkiaBackedCanvas.<get-skia>.<anonymous>' call
    this_0.set_alphaMultiplier_u32e12_k$($this.alphaMultiplier_1);
    return this_0.get_skia_woucvt_k$();
  }
  function drawImageRect($this, image, srcOffset, srcSize, dstOffset, dstSize, paint) {
    var bitmap = asSkiaBitmap(image);
    // Inline function 'org.jetbrains.skia.impl.use' call
    var this_0 = Companion_getInstance_5().makeFromBitmap_39nkt4_k$(bitmap);
    var tmp;
    try {
      // Inline function 'androidx.compose.ui.graphics.SkiaBackedCanvas.drawImageRect.<anonymous>' call
      tmp = $this.skia_1.drawImageRect_6jbgn9_k$(this_0, Companion_getInstance_3().makeXYWH_irfy4g_k$(_Offset___get_x__impl__xvi35n(srcOffset), _Offset___get_y__impl__8bzhra(srcOffset), _Size___get_width__impl__58y75t(srcSize), _Size___get_height__impl__a04p02(srcSize)), Companion_getInstance_3().makeXYWH_irfy4g_k$(_Offset___get_x__impl__xvi35n(dstOffset), _Offset___get_y__impl__8bzhra(dstOffset), _Size___get_width__impl__58y75t(dstSize), _Size___get_height__impl__a04p02(dstSize)), toSkia_2(paint.get_filterQuality_wmgb0f_k$(), $this), _get_skia__ddpejf(paint, $this), true);
    }finally {
      this_0.close_yn9xrc_k$();
    }
  }
  function drawPoints($this, points, paint) {
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = points.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = points.get_c1px32_k$(index).packedValue_1;
        // Inline function 'androidx.compose.ui.graphics.SkiaBackedCanvas.drawPoints.<anonymous>' call
        $this.skia_1.drawPoint_hb1rjx_k$(_Offset___get_x__impl__xvi35n(item), _Offset___get_y__impl__8bzhra(item), _get_skia__ddpejf(paint, $this));
      }
       while (inductionVariable <= last);
  }
  function drawLines($this, points, paint, stepBy) {
    if (points.get_size_woubt6_k$() >= 2) {
      var progression = step(until(0, points.get_size_woubt6_k$() - 1 | 0), stepBy);
      var inductionVariable = progression.get_first_irdx8n_k$();
      var last = progression.get_last_wopotb_k$();
      var step_0 = progression.get_step_woujh1_k$();
      if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + step_0 | 0;
          var p1 = points.get_c1px32_k$(i).packedValue_1;
          var p2 = points.get_c1px32_k$(i + 1 | 0).packedValue_1;
          $this.skia_1.drawLine_m1kfbl_k$(_Offset___get_x__impl__xvi35n(p1), _Offset___get_y__impl__8bzhra(p1), _Offset___get_x__impl__xvi35n(p2), _Offset___get_y__impl__8bzhra(p2), _get_skia__ddpejf(paint, $this));
        }
         while (!(i === last));
    }
  }
  function drawRawPoints($this, points, paint, stepBy) {
    if ((points.length % 2 | 0) === 0) {
      var progression = step(until(0, points.length - 1 | 0), stepBy);
      var inductionVariable = progression.get_first_irdx8n_k$();
      var last = progression.get_last_wopotb_k$();
      var step_0 = progression.get_step_woujh1_k$();
      if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + step_0 | 0;
          var x = points[i];
          var y = points[i + 1 | 0];
          $this.skia_1.drawPoint_hb1rjx_k$(x, y, _get_skia__ddpejf(paint, $this));
        }
         while (!(i === last));
    }
  }
  function drawRawLines($this, points, paint, stepBy) {
    if (points.length >= 4 ? (points.length % 2 | 0) === 0 : false) {
      var progression = step(until(0, points.length - 3 | 0), imul(stepBy, 2));
      var inductionVariable = progression.get_first_irdx8n_k$();
      var last = progression.get_last_wopotb_k$();
      var step_0 = progression.get_step_woujh1_k$();
      if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + step_0 | 0;
          var x1 = points[i];
          var y1 = points[i + 1 | 0];
          var x2 = points[i + 2 | 0];
          var y2 = points[i + 3 | 0];
          $this.skia_1.drawLine_m1kfbl_k$(x1, y1, x2, y2, _get_skia__ddpejf(paint, $this));
        }
         while (!(i === last));
    }
  }
  function toSkia_0(_this__u8e3s4, $this) {
    return _this__u8e3s4 === Companion_getInstance_15().get_Difference_lo2jbz_k$() ? ClipMode_DIFFERENCE_getInstance() : _this__u8e3s4 === Companion_getInstance_15().get_Intersect_gpxc6n_k$() ? ClipMode_INTERSECT_getInstance() : ClipMode_INTERSECT_getInstance();
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
  function toSkia_2(_this__u8e3s4, $this) {
    return _this__u8e3s4 === Companion_getInstance_18().get_Low_7s05n6_k$() ? new FilterMipmap(FilterMode_LINEAR_getInstance(), MipmapMode_NONE_getInstance()) : _this__u8e3s4 === Companion_getInstance_18().get_Medium_8fylwf_k$() ? new FilterMipmap(FilterMode_LINEAR_getInstance(), MipmapMode_NEAREST_getInstance()) : _this__u8e3s4 === Companion_getInstance_18().get_High_14avfy_k$() ? new CubicResampler(0.3333333333333333, 0.3333333333333333) : new FilterMipmap(FilterMode_NEAREST_getInstance(), MipmapMode_NONE_getInstance());
  }
  function SkiaBackedCanvas(skia) {
    this.skia_1 = skia;
    this.alphaMultiplier_1 = 1.0;
  }
  protoOf(SkiaBackedCanvas).get_skia_woucvt_k$ = function () {
    return this.skia_1;
  };
  protoOf(SkiaBackedCanvas).set_alphaMultiplier_u32e12_k$ = function (_set____db54di) {
    this.alphaMultiplier_1 = _set____db54di;
  };
  protoOf(SkiaBackedCanvas).get_alphaMultiplier_wdu3ai_k$ = function () {
    return this.alphaMultiplier_1;
  };
  protoOf(SkiaBackedCanvas).save_fbe7h_k$ = function () {
    this.skia_1.save_23ibh_k$();
  };
  protoOf(SkiaBackedCanvas).restore_a1ykhu_k$ = function () {
    this.skia_1.restore_i5fnny_k$();
  };
  protoOf(SkiaBackedCanvas).saveLayer_j9hvqf_k$ = function (bounds, paint) {
    this.skia_1.saveLayer_d6e1vc_k$(bounds.get_left_woprgw_k$(), bounds.get_top_18ivbo_k$(), bounds.get_right_ixz7xv_k$(), bounds.get_bottom_bj8ras_k$(), _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).translate_7gghdu_k$ = function (dx, dy) {
    this.skia_1.translate_k2k08i_k$(dx, dy);
  };
  protoOf(SkiaBackedCanvas).scale_ba85bu_k$ = function (sx, sy) {
    this.skia_1.scale_ln7xze_k$(sx, sy);
  };
  protoOf(SkiaBackedCanvas).rotate_qe8u4z_k$ = function (degrees) {
    this.skia_1.rotate_n08qpp_k$(degrees);
  };
  protoOf(SkiaBackedCanvas).skew_kgli2i_k$ = function (sx, sy) {
    this.skia_1.skew_fkteh6_k$(sx, sy);
  };
  protoOf(SkiaBackedCanvas).concat_no6uof_k$ = function (matrix) {
    if (!isIdentity(matrix)) {
      this.skia_1.concat_1fc4xa_k$(toSkia_1(matrix, this));
    }
  };
  protoOf(SkiaBackedCanvas).clipRect_3spswv_k$ = function (left, top, right, bottom, clipOp) {
    var antiAlias = true;
    this.skia_1.clipRect_7110ke_k$(Companion_getInstance_3().makeLTRB_2wvuxm_k$(left, top, right, bottom), toSkia_0(clipOp, this), antiAlias);
  };
  protoOf(SkiaBackedCanvas).clipPath_tlqunt_k$ = function (path, clipOp) {
    var antiAlias = true;
    this.skia_1.clipPath_agzsy6_k$(asSkiaPath(path), toSkia_0(clipOp, this), antiAlias);
  };
  protoOf(SkiaBackedCanvas).drawLine_p9lnhi_k$ = function (p1, p2, paint) {
    this.skia_1.drawLine_m1kfbl_k$(_Offset___get_x__impl__xvi35n(p1), _Offset___get_y__impl__8bzhra(p1), _Offset___get_x__impl__xvi35n(p2), _Offset___get_y__impl__8bzhra(p2), _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).drawRect_njf28a_k$ = function (left, top, right, bottom, paint) {
    this.skia_1.drawRect_8t145u_k$(Companion_getInstance_3().makeLTRB_2wvuxm_k$(left, top, right, bottom), _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).drawRoundRect_s5vrm8_k$ = function (left, top, right, bottom, radiusX, radiusY, paint) {
    this.skia_1.drawRRect_6cei8q_k$(Companion_getInstance_4().makeLTRB_qlrzkq_k$(left, top, right, bottom, radiusX, radiusY), _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).drawOval_laorgo_k$ = function (left, top, right, bottom, paint) {
    this.skia_1.drawOval_8h54ws_k$(Companion_getInstance_3().makeLTRB_2wvuxm_k$(left, top, right, bottom), _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).drawCircle_l6ouf0_k$ = function (center, radius, paint) {
    this.skia_1.drawCircle_129n4r_k$(_Offset___get_x__impl__xvi35n(center), _Offset___get_y__impl__8bzhra(center), radius, _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).drawArc_ud0hdz_k$ = function (left, top, right, bottom, startAngle, sweepAngle, useCenter, paint) {
    this.skia_1.drawArc_9h3ru6_k$(left, top, right, bottom, startAngle, sweepAngle, useCenter, _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).drawPath_2all12_k$ = function (path, paint) {
    this.skia_1.drawPath_jdiwxq_k$(asSkiaPath(path), _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).drawImage_lx1b1t_k$ = function (image, topLeftOffset, paint) {
    var size = Size(image.get_width_j0q4yl_k$(), image.get_height_e7t92o_k$());
    drawImageRect(this, image, Companion_getInstance().get_Zero_k6n73t_k$(), size, topLeftOffset, size, paint);
  };
  protoOf(SkiaBackedCanvas).drawImageRect_5h5ih1_k$ = function (image, srcOffset, srcSize, dstOffset, dstSize, paint) {
    drawImageRect(this, image, Offset_0(_IntOffset___get_x__impl__qiqr5o(srcOffset), _IntOffset___get_y__impl__2avpwj(srcOffset)), Size(_IntSize___get_width__impl__d9yl4o(srcSize), _IntSize___get_height__impl__prv63b(srcSize)), Offset_0(_IntOffset___get_x__impl__qiqr5o(dstOffset), _IntOffset___get_y__impl__2avpwj(dstOffset)), Size(_IntSize___get_width__impl__d9yl4o(dstSize), _IntSize___get_height__impl__prv63b(dstSize)), paint);
  };
  protoOf(SkiaBackedCanvas).drawPoints_buyvum_k$ = function (pointMode, points, paint) {
    if (pointMode === Companion_getInstance_29().get_Lines_54ip59_k$()) {
      drawLines(this, points, paint, 2);
    } else if (pointMode === Companion_getInstance_29().get_Polygon_rl173c_k$()) {
      drawLines(this, points, paint, 1);
    } else if (pointMode === Companion_getInstance_29().get_Points_yh58f7_k$()) {
      drawPoints(this, points, paint);
    }
  };
  protoOf(SkiaBackedCanvas).enableZ_eyb9g9_k$ = function () {
    return Unit_getInstance();
  };
  protoOf(SkiaBackedCanvas).disableZ_14zkiq_k$ = function () {
    return Unit_getInstance();
  };
  protoOf(SkiaBackedCanvas).drawRawPoints_jt1jmy_k$ = function (pointMode, points, paint) {
    if (!((points.length % 2 | 0) === 0)) {
      throw IllegalArgumentException_init_$Create$('points must have an even number of values');
    }
    if (pointMode === Companion_getInstance_29().get_Lines_54ip59_k$()) {
      drawRawLines(this, points, paint, 2);
    } else if (pointMode === Companion_getInstance_29().get_Polygon_rl173c_k$()) {
      drawRawLines(this, points, paint, 1);
    } else if (pointMode === Companion_getInstance_29().get_Points_yh58f7_k$()) {
      drawRawPoints(this, points, paint, 2);
    }
  };
  protoOf(SkiaBackedCanvas).drawVertices_mnlupq_k$ = function (vertices, blendMode, paint) {
    this.skia_1.drawVertices_kbewma_k$(toSkiaVertexMode(vertices.get_vertexMode_kiz8sf_k$()), vertices.get_positions_ya7scf_k$(), vertices.get_colors_c05661_k$(), vertices.get_textureCoordinates_1i3vqh_k$(), vertices.get_indices_xelk8u_k$(), toSkia(blendMode), paint.asFrameworkPaint_huz48e_k$());
  };
  function asComposePaint(_this__u8e3s4) {
    return new SkiaBackedPaint(_this__u8e3s4);
  }
  function Paint_0() {
    return new SkiaBackedPaint();
  }
  function _set_mAlphaMultiplier__hzxq3($this, _set____db54di) {
    $this.mAlphaMultiplier_1 = _set____db54di;
  }
  function _get_mAlphaMultiplier__sl4bcp($this) {
    return $this.mAlphaMultiplier_1;
  }
  function updateAlpha($this, alpha, multiplier) {
    $this.skia_1.set_color_7ztbpe_k$(toArgb(Color__copy$default_impl_ectz3s(Color_3($this.skia_1.get_color_ipu8u2_k$()), alpha * multiplier)));
  }
  function updateAlpha$default($this, alpha, multiplier, $super) {
    alpha = alpha === VOID ? $this.get_alpha_iooth1_k$() : alpha;
    multiplier = multiplier === VOID ? $this.mAlphaMultiplier_1 : multiplier;
    return updateAlpha($this, alpha, multiplier);
  }
  function toSkia_3(_this__u8e3s4, $this) {
    return _this__u8e3s4 === Companion_getInstance_23().get_Fill_7xey15_k$() ? PaintMode_FILL_getInstance() : _this__u8e3s4 === Companion_getInstance_23().get_Stroke_fu1ixu_k$() ? PaintMode_STROKE_getInstance() : PaintMode_FILL_getInstance();
  }
  function toSkia_4(_this__u8e3s4, $this) {
    return _this__u8e3s4 === Companion_getInstance_31().get_Butt_jb7qjw_k$() ? PaintStrokeCap_BUTT_getInstance() : _this__u8e3s4 === Companion_getInstance_31().get_Round_hjra1h_k$() ? PaintStrokeCap_ROUND_getInstance() : _this__u8e3s4 === Companion_getInstance_31().get_Square_dbwc3a_k$() ? PaintStrokeCap_SQUARE_getInstance() : PaintStrokeCap_BUTT_getInstance();
  }
  function toSkia_5(_this__u8e3s4, $this) {
    return _this__u8e3s4 === Companion_getInstance_32().get_Miter_xkwqso_k$() ? PaintStrokeJoin_MITER_getInstance() : _this__u8e3s4 === Companion_getInstance_32().get_Round_o8jjqp_k$() ? PaintStrokeJoin_ROUND_getInstance() : _this__u8e3s4 === Companion_getInstance_32().get_Bevel_8ab6n7_k$() ? PaintStrokeJoin_BEVEL_getInstance() : PaintStrokeJoin_MITER_getInstance();
  }
  function SkiaBackedPaint(skia) {
    skia = skia === VOID ? Paint_init_$Create$() : skia;
    this.skia_1 = skia;
    this.mAlphaMultiplier_1 = 1.0;
    this.blendMode_1 = Companion_getInstance_13().get_SrcOver_anr685_k$();
    this.style_1 = Companion_getInstance_23().get_Fill_7xey15_k$();
    this.strokeCap_1 = Companion_getInstance_31().get_Butt_jb7qjw_k$();
    this.strokeJoin_1 = Companion_getInstance_32().get_Round_o8jjqp_k$();
    this.strokeMiterLimit_1 = 0.0;
    this.filterQuality_1 = Companion_getInstance_18().get_Medium_8fylwf_k$();
    this.shader_1 = null;
    this.colorFilter_1 = null;
    this.pathEffect_1 = null;
  }
  protoOf(SkiaBackedPaint).get_skia_woucvt_k$ = function () {
    return this.skia_1;
  };
  protoOf(SkiaBackedPaint).asFrameworkPaint_huz48e_k$ = function () {
    return this.skia_1;
  };
  protoOf(SkiaBackedPaint).set_alphaMultiplier_u32e12_k$ = function (value) {
    var multiplier = coerceIn(value, 0.0, 1.0);
    updateAlpha$default(this, VOID, multiplier);
    this.mAlphaMultiplier_1 = multiplier;
  };
  protoOf(SkiaBackedPaint).get_alphaMultiplier_wdu3ai_k$ = function () {
    return this.mAlphaMultiplier_1;
  };
  protoOf(SkiaBackedPaint).set_alpha_tvzcqh_k$ = function (value) {
    updateAlpha$default(this, value);
  };
  protoOf(SkiaBackedPaint).get_alpha_iooth1_k$ = function () {
    return _Color___get_alpha__impl__wcfyv1(Color_3(this.skia_1.get_color_ipu8u2_k$()));
  };
  protoOf(SkiaBackedPaint).set_isAntiAlias_m6kooi_k$ = function (value) {
    this.skia_1.set_isAntiAlias_m6kooi_k$(value);
  };
  protoOf(SkiaBackedPaint).get_isAntiAlias_255n51_k$ = function () {
    return this.skia_1.get_isAntiAlias_255n51_k$();
  };
  protoOf(SkiaBackedPaint).set_color_m2amxp_k$ = function (color) {
    this.skia_1.set_color_7ztbpe_k$(toArgb(color));
  };
  protoOf(SkiaBackedPaint).get_color_lnp1vl_k$ = function () {
    return Color_3(this.skia_1.get_color_ipu8u2_k$());
  };
  protoOf(SkiaBackedPaint).set_blendMode_1e5m6b_k$ = function (value) {
    this.skia_1.set_blendMode_s14yaj_k$(toSkia(value));
    this.blendMode_1 = value;
  };
  protoOf(SkiaBackedPaint).get_blendMode_si209t_k$ = function () {
    return this.blendMode_1;
  };
  protoOf(SkiaBackedPaint).set_style_t4zhmv_k$ = function (value) {
    this.skia_1.set_mode_s75p6s_k$(toSkia_3(value, this));
    this.style_1 = value;
  };
  protoOf(SkiaBackedPaint).get_style_h1bxuj_k$ = function () {
    return this.style_1;
  };
  protoOf(SkiaBackedPaint).set_strokeWidth_owqvpl_k$ = function (value) {
    this.skia_1.set_strokeWidth_owqvpl_k$(value);
  };
  protoOf(SkiaBackedPaint).get_strokeWidth_pbded7_k$ = function () {
    return this.skia_1.get_strokeWidth_pbded7_k$();
  };
  protoOf(SkiaBackedPaint).set_strokeCap_x8rhz1_k$ = function (value) {
    this.skia_1.set_strokeCap_dv3f3n_k$(toSkia_4(value, this));
    this.strokeCap_1 = value;
  };
  protoOf(SkiaBackedPaint).get_strokeCap_6gl6jj_k$ = function () {
    return this.strokeCap_1;
  };
  protoOf(SkiaBackedPaint).set_strokeJoin_yrffuj_k$ = function (value) {
    this.skia_1.set_strokeJoin_pswy8t_k$(toSkia_5(value, this));
    this.strokeJoin_1 = value;
  };
  protoOf(SkiaBackedPaint).get_strokeJoin_j1kbxz_k$ = function () {
    return this.strokeJoin_1;
  };
  protoOf(SkiaBackedPaint).set_strokeMiterLimit_tej6nx_k$ = function (value) {
    this.skia_1.set_strokeMiter_5ftsgo_k$(value);
    this.strokeMiterLimit_1 = value;
  };
  protoOf(SkiaBackedPaint).get_strokeMiterLimit_p3434n_k$ = function () {
    return this.strokeMiterLimit_1;
  };
  protoOf(SkiaBackedPaint).set_filterQuality_eye4f7_k$ = function (_set____db54di) {
    this.filterQuality_1 = _set____db54di;
  };
  protoOf(SkiaBackedPaint).get_filterQuality_wmgb0f_k$ = function () {
    return this.filterQuality_1;
  };
  protoOf(SkiaBackedPaint).set_shader_tgaw5e_k$ = function (value) {
    this.skia_1.set_shader_tgaw5e_k$(value);
    this.shader_1 = value;
  };
  protoOf(SkiaBackedPaint).get_shader_jgtazy_k$ = function () {
    return this.shader_1;
  };
  protoOf(SkiaBackedPaint).set_colorFilter_dtpxr0_k$ = function (value) {
    this.skia_1.set_colorFilter_9zyasg_k$(value == null ? null : asSkiaColorFilter(value));
    this.colorFilter_1 = value;
  };
  protoOf(SkiaBackedPaint).get_colorFilter_nt8pqq_k$ = function () {
    return this.colorFilter_1;
  };
  protoOf(SkiaBackedPaint).set_pathEffect_h6g9g6_k$ = function (value) {
    var tmp0_safe_receiver = (value == null ? true : value instanceof SkiaBackedPathEffect) ? value : THROW_CCE();
    this.skia_1.set_pathEffect_2qfjq4_k$(tmp0_safe_receiver == null ? null : asSkiaPathEffect(tmp0_safe_receiver));
    this.pathEffect_1 = value;
  };
  protoOf(SkiaBackedPaint).get_pathEffect_d6tz6p_k$ = function () {
    return this.pathEffect_1;
  };
  function Path_0() {
    return new SkiaBackedPath();
  }
  function _set_internalPath__a4co45($this, _set____db54di) {
    $this.internalPath_1 = _set____db54di;
  }
  function toSkiaOperation(_this__u8e3s4, $this) {
    return _this__u8e3s4 === Companion_getInstance_28().get_Difference_nnbib6_k$() ? PathOp_DIFFERENCE_getInstance() : _this__u8e3s4 === Companion_getInstance_28().get_Intersect_3xwf0i_k$() ? PathOp_INTERSECT_getInstance() : _this__u8e3s4 === Companion_getInstance_28().get_Union_z1h0ku_k$() ? PathOp_UNION_getInstance() : _this__u8e3s4 === Companion_getInstance_28().get_Xor_aeyvba_k$() ? PathOp_XOR_getInstance() : _this__u8e3s4 === Companion_getInstance_28().get_ReverseDifference_4zrrtq_k$() ? PathOp_REVERSE_DIFFERENCE_getInstance() : PathOp_XOR_getInstance();
  }
  function SkiaBackedPath(internalPath) {
    internalPath = internalPath === VOID ? Path_init_$Create$() : internalPath;
    this.internalPath_1 = internalPath;
  }
  protoOf(SkiaBackedPath).get_internalPath_37vr9n_k$ = function () {
    return this.internalPath_1;
  };
  protoOf(SkiaBackedPath).set_fillType_6krlbe_k$ = function (value) {
    var tmp = this.internalPath_1;
    var tmp_0;
    if (value === Companion_getInstance_27().get_EvenOdd_cpanrc_k$()) {
      tmp_0 = PathFillMode_EVEN_ODD_getInstance();
    } else {
      tmp_0 = PathFillMode_WINDING_getInstance();
    }
    tmp.set_fillMode_p4qpgv_k$(tmp_0);
  };
  protoOf(SkiaBackedPath).get_fillType_67mqlu_k$ = function () {
    if (this.internalPath_1.get_fillMode_r5zfyn_k$().equals(PathFillMode_EVEN_ODD_getInstance())) {
      return Companion_getInstance_27().get_EvenOdd_cpanrc_k$();
    } else {
      return Companion_getInstance_27().get_NonZero_dwy848_k$();
    }
  };
  protoOf(SkiaBackedPath).moveTo_22horo_k$ = function (x, y) {
    this.internalPath_1.moveTo_n8tdjo_k$(x, y);
  };
  protoOf(SkiaBackedPath).relativeMoveTo_vkwjm0_k$ = function (dx, dy) {
    this.internalPath_1.rMoveTo_gj475u_k$(dx, dy);
  };
  protoOf(SkiaBackedPath).lineTo_o2nyip_k$ = function (x, y) {
    this.internalPath_1.lineTo_985bqp_k$(x, y);
  };
  protoOf(SkiaBackedPath).relativeLineTo_9kq9uz_k$ = function (dx, dy) {
    this.internalPath_1.rLineTo_2ig5cv_k$(dx, dy);
  };
  protoOf(SkiaBackedPath).quadraticBezierTo_pas4ki_k$ = function (x1, y1, x2, y2) {
    this.internalPath_1.quadTo_nivwo2_k$(x1, y1, x2, y2);
  };
  protoOf(SkiaBackedPath).relativeQuadraticBezierTo_fs15qi_k$ = function (dx1, dy1, dx2, dy2) {
    this.internalPath_1.rQuadTo_i9659w_k$(dx1, dy1, dx2, dy2);
  };
  protoOf(SkiaBackedPath).cubicTo_8sju51_k$ = function (x1, y1, x2, y2, x3, y3) {
    this.internalPath_1.cubicTo_g393vf_k$(x1, y1, x2, y2, x3, y3);
  };
  protoOf(SkiaBackedPath).relativeCubicTo_myt97t_k$ = function (dx1, dy1, dx2, dy2, dx3, dy3) {
    this.internalPath_1.rCubicTo_5i712l_k$(dx1, dy1, dx2, dy2, dx3, dy3);
  };
  protoOf(SkiaBackedPath).arcTo_glfct3_k$ = function (rect, startAngleDegrees, sweepAngleDegrees, forceMoveTo) {
    this.internalPath_1.arcTo_lk9bpr_k$(toSkiaRect(rect), startAngleDegrees, sweepAngleDegrees, forceMoveTo);
  };
  protoOf(SkiaBackedPath).addRect_yfs97g_k$ = function (rect) {
    this.internalPath_1.addRect$default_mv5gnm_k$(toSkiaRect(rect), PathDirection_COUNTER_CLOCKWISE_getInstance());
  };
  protoOf(SkiaBackedPath).addOval_wqqw8m_k$ = function (oval) {
    this.internalPath_1.addOval$default_akalvk_k$(toSkiaRect(oval), PathDirection_COUNTER_CLOCKWISE_getInstance());
  };
  protoOf(SkiaBackedPath).addArcRad_t0vpkr_k$ = function (oval, startAngleRadians, sweepAngleRadians) {
    this.addArc_s89gx4_k$(oval, degrees(startAngleRadians), degrees(sweepAngleRadians));
  };
  protoOf(SkiaBackedPath).addArc_s89gx4_k$ = function (oval, startAngleDegrees, sweepAngleDegrees) {
    this.internalPath_1.addArc_ab3w7m_k$(toSkiaRect(oval), startAngleDegrees, sweepAngleDegrees);
  };
  protoOf(SkiaBackedPath).addRoundRect_w1epq0_k$ = function (roundRect) {
    this.internalPath_1.addRRect$default_20pqkw_k$(toSkiaRRect(roundRect), PathDirection_COUNTER_CLOCKWISE_getInstance());
  };
  protoOf(SkiaBackedPath).addPath_mtr781_k$ = function (path, offset) {
    this.internalPath_1.addPath$default_qvsmxp_k$(asSkiaPath(path), _Offset___get_x__impl__xvi35n(offset), _Offset___get_y__impl__8bzhra(offset));
  };
  protoOf(SkiaBackedPath).close_yn9xrc_k$ = function () {
    this.internalPath_1.closePath_7zbz5v_k$();
  };
  protoOf(SkiaBackedPath).reset_5u6xz3_k$ = function () {
    var fillType = this.get_fillType_67mqlu_k$();
    this.internalPath_1.reset_1sjh3j_k$();
    this.set_fillType_6krlbe_k$(fillType);
  };
  protoOf(SkiaBackedPath).rewind_xb9q0b_k$ = function () {
    this.internalPath_1.rewind_fg9p39_k$();
  };
  protoOf(SkiaBackedPath).translate_nzlwb0_k$ = function (offset) {
    this.internalPath_1.transform$default_8dct7o_k$(Companion_getInstance_6().makeTranslate_9v7aio_k$(_Offset___get_x__impl__xvi35n(offset), _Offset___get_y__impl__8bzhra(offset)));
  };
  protoOf(SkiaBackedPath).transform_3go53t_k$ = function (matrix) {
    var tmp = this.internalPath_1;
    // Inline function 'kotlin.apply' call
    var this_0 = Companion_getInstance_6().makeTranslate_9v7aio_k$(0.0, 0.0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.SkiaBackedPath.transform.<anonymous>' call
    this.setFrom_dz3gqv_k$(this_0, matrix);
    tmp.transform$default_8dct7o_k$(this_0);
  };
  protoOf(SkiaBackedPath).getBounds_568lnv_k$ = function () {
    var bounds = this.internalPath_1.get_bounds_bj99ku_k$();
    return new Rect(bounds.get_left_woprgw_k$(), bounds.get_top_18ivbo_k$(), bounds.get_right_ixz7xv_k$(), bounds.get_bottom_bj8ras_k$());
  };
  protoOf(SkiaBackedPath).op_fj0csx_k$ = function (path1, path2, operation) {
    var path = Companion_getInstance_7().makeCombining_fcc5ry_k$(asSkiaPath(path1), asSkiaPath(path2), toSkiaOperation(operation, this));
    var tmp = this;
    tmp.internalPath_1 = path == null ? this.internalPath_1 : path;
    return !(path == null);
  };
  protoOf(SkiaBackedPath).get_isConvex_ryvmuy_k$ = function () {
    return this.internalPath_1.get_isConvex_ryvmuy_k$();
  };
  protoOf(SkiaBackedPath).get_isEmpty_zauvru_k$ = function () {
    return this.internalPath_1.get_isEmpty_zauvru_k$();
  };
  protoOf(SkiaBackedPath).setFrom_dz3gqv_k$ = function (_this__u8e3s4, matrix) {
    // Inline function 'kotlin.require' call
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    var tmp_4;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    if (_Matrix___get_values__impl__fblr7b(matrix)[imul(0, 4) + 2 | 0] === 0.0) {
      // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
      tmp_4 = _Matrix___get_values__impl__fblr7b(matrix)[imul(1, 4) + 2 | 0] === 0.0;
    } else {
      tmp_4 = false;
    }
    if (tmp_4) {
      // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
      tmp_3 = _Matrix___get_values__impl__fblr7b(matrix)[imul(2, 4) + 2 | 0] === 1.0;
    } else {
      tmp_3 = false;
    }
    if (tmp_3) {
      // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
      tmp_2 = _Matrix___get_values__impl__fblr7b(matrix)[imul(3, 4) + 2 | 0] === 0.0;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
      tmp_1 = _Matrix___get_values__impl__fblr7b(matrix)[imul(2, 4) + 0 | 0] === 0.0;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
      tmp_0 = _Matrix___get_values__impl__fblr7b(matrix)[imul(2, 4) + 1 | 0] === 0.0;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
      tmp = _Matrix___get_values__impl__fblr7b(matrix)[imul(2, 4) + 3 | 0] === 0.0;
    } else {
      tmp = false;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp) {
      // Inline function 'androidx.compose.ui.graphics.SkiaBackedPath.setFrom.<anonymous>' call
      var message = 'Matrix33 does not support arbitrary transforms';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var scaleX = _Matrix___get_values__impl__fblr7b(matrix)[Companion_getInstance_22().get_ScaleX_48mlbr_k$()];
    var skewY = _Matrix___get_values__impl__fblr7b(matrix)[Companion_getInstance_22().get_SkewY_igyudi_k$()];
    var v2 = _Matrix___get_values__impl__fblr7b(matrix)[2];
    var persp0 = _Matrix___get_values__impl__fblr7b(matrix)[Companion_getInstance_22().get_Perspective0_s6kzs3_k$()];
    var skewX = _Matrix___get_values__impl__fblr7b(matrix)[Companion_getInstance_22().get_SkewX_igyudh_k$()];
    var scaleY = _Matrix___get_values__impl__fblr7b(matrix)[Companion_getInstance_22().get_ScaleY_48mlbs_k$()];
    var v6 = _Matrix___get_values__impl__fblr7b(matrix)[6];
    var persp1 = _Matrix___get_values__impl__fblr7b(matrix)[Companion_getInstance_22().get_Perspective1_s6kzs2_k$()];
    var v8 = _Matrix___get_values__impl__fblr7b(matrix)[8];
    var translateX = _Matrix___get_values__impl__fblr7b(matrix)[Companion_getInstance_22().get_TranslateX_folfnx_k$()];
    var translateY = _Matrix___get_values__impl__fblr7b(matrix)[Companion_getInstance_22().get_TranslateY_folfnw_k$()];
    var persp2 = _Matrix___get_values__impl__fblr7b(matrix)[Companion_getInstance_22().get_Perspective2_s6kzs1_k$()];
    var v = _Matrix___get_values__impl__fblr7b(matrix);
    v[0] = scaleX;
    v[1] = skewX;
    v[2] = translateX;
    v[3] = skewY;
    v[4] = scaleY;
    v[5] = translateY;
    v[6] = persp0;
    v[7] = persp1;
    v[8] = persp2;
    var inductionVariable = 0;
    if (inductionVariable <= 8)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _this__u8e3s4.get_mat_18j0uh_k$()[i] = v[i];
      }
       while (inductionVariable <= 8);
    v[Companion_getInstance_22().get_ScaleX_48mlbr_k$()] = scaleX;
    v[Companion_getInstance_22().get_SkewY_igyudi_k$()] = skewY;
    v[2] = v2;
    v[Companion_getInstance_22().get_Perspective0_s6kzs3_k$()] = persp0;
    v[Companion_getInstance_22().get_SkewX_igyudh_k$()] = skewX;
    v[Companion_getInstance_22().get_ScaleY_48mlbs_k$()] = scaleY;
    v[6] = v6;
    v[Companion_getInstance_22().get_Perspective1_s6kzs2_k$()] = persp1;
    v[8] = v8;
  };
  function asSkiaPath(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof SkiaBackedPath) {
      tmp = _this__u8e3s4.internalPath_1;
    } else {
      throw UnsupportedOperationException_init_$Create$_0('Unable to obtain org.jetbrains.skia.Path');
    }
    return tmp;
  }
  function SkiaBackedPathEffect(nativePathEffect) {
    this.nativePathEffect_1 = nativePathEffect;
  }
  protoOf(SkiaBackedPathEffect).get_nativePathEffect_o1bxhy_k$ = function () {
    return this.nativePathEffect_1;
  };
  function asSkiaPathEffect(_this__u8e3s4) {
    return (_this__u8e3s4 instanceof SkiaBackedPathEffect ? _this__u8e3s4 : THROW_CCE()).nativePathEffect_1;
  }
  function actualCornerPathEffect(radius) {
    return new SkiaBackedPathEffect(Companion_getInstance_8().makeCorner_cq39e3_k$(radius));
  }
  function actualDashPathEffect(intervals, phase) {
    return new SkiaBackedPathEffect(Companion_getInstance_8().makeDash_9suxds_k$(intervals, phase));
  }
  function actualChainPathEffect(outer, inner) {
    return new SkiaBackedPathEffect(asSkiaPathEffect(outer).makeCompose_dsdae3_k$(asSkiaPathEffect(inner)));
  }
  function actualStampedPathEffect(shape, advance, phase, style) {
    return new SkiaBackedPathEffect(Companion_getInstance_8().makePath1D_ly4j3w_k$(asSkiaPath(shape), advance, phase, toSkiaStampedPathEffectStyle(style)));
  }
  function toSkiaStampedPathEffectStyle(_this__u8e3s4) {
    return _this__u8e3s4 === Companion_getInstance_26().get_Morph_bm4leq_k$() ? Style_MORPH_getInstance() : _this__u8e3s4 === Companion_getInstance_26().get_Rotate_kkxo0p_k$() ? Style_ROTATE_getInstance() : _this__u8e3s4 === Companion_getInstance_26().get_Translate_xeseg8_k$() ? Style_TRANSLATE_getInstance() : Style_TRANSLATE_getInstance();
  }
  function _set_internalImageFilter__a836z3($this, _set____db54di) {
    $this.internalImageFilter_1 = _set____db54di;
  }
  function _get_internalImageFilter__nitfvf($this) {
    return $this.internalImageFilter_1;
  }
  function RenderEffect() {
    this.internalImageFilter_1 = null;
  }
  protoOf(RenderEffect).asSkiaImageFilter_1de1rj_k$ = function () {
    var tmp0_elvis_lhs = this.internalImageFilter_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = this.createImageFilter_sv02y1_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.RenderEffect.asSkiaImageFilter.<anonymous>' call
      this.internalImageFilter_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(RenderEffect).isSupported_j5t6ec_k$ = function () {
    return true;
  };
  function asSkiaColorFilter(_this__u8e3s4) {
    return _this__u8e3s4.get_nativeColorFilter_tol2md_k$();
  }
  function actualTintColorFilter(color, blendMode) {
    return Companion_getInstance_9().makeBlend_hxd0mv_k$(toArgb(color), toSkia(blendMode));
  }
  function actualColorMatrixColorFilter(colorMatrix) {
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var remappedValues = _ColorMatrix___get_values__impl__bpwpry(colorMatrix).slice();
    remappedValues[4] = remappedValues[4] * 0.00392156862745098;
    remappedValues[9] = remappedValues[9] * 0.00392156862745098;
    remappedValues[14] = remappedValues[14] * 0.00392156862745098;
    remappedValues[19] = remappedValues[19] * 0.00392156862745098;
    return Companion_getInstance_9().makeMatrix_xfgxbq_k$(new ColorMatrix(remappedValues.slice()));
  }
  function actualColorMatrixFromFilter(filter) {
    return _ColorMatrix___init__impl__3gytx1();
  }
  function actualLightingColorFilter(multiply, add) {
    return Companion_getInstance_9().makeLighting_65ijqe_k$(toArgb(multiply), toArgb(add));
  }
  function ActualImageBitmap(width, height, config, hasAlpha, colorSpace) {
    var colorType = toSkiaColorType(config);
    var alphaType = hasAlpha ? ColorAlphaType_PREMUL_getInstance() : ColorAlphaType_OPAQUE_getInstance();
    var skiaColorSpace = toSkiaColorSpace(colorSpace);
    var colorInfo = new ColorInfo(colorType, alphaType, skiaColorSpace);
    var imageInfo = new ImageInfo(colorInfo, width, height);
    var bitmap = Bitmap_init_$Create$();
    bitmap.allocPixels_elr7wo_k$(imageInfo);
    return new SkiaBackedImageBitmap(bitmap);
  }
  function toSkiaColorType(_this__u8e3s4) {
    return _this__u8e3s4 === Companion_getInstance_21().get_Argb8888_epitdf_k$() ? Companion_getInstance_10().get_N32_18jozg_k$() : _this__u8e3s4 === Companion_getInstance_21().get_Alpha8_8qn3sx_k$() ? ColorType_ALPHA_8_getInstance() : _this__u8e3s4 === Companion_getInstance_21().get_Rgb565_qf3bri_k$() ? ColorType_RGB_565_getInstance() : _this__u8e3s4 === Companion_getInstance_21().get_F16_tc2i3k_k$() ? ColorType_RGBA_F16_getInstance() : Companion_getInstance_10().get_N32_18jozg_k$();
  }
  function toSkiaColorSpace(_this__u8e3s4) {
    return _this__u8e3s4.equals(ColorSpaces_getInstance().get_Srgb_woa2g3_k$()) ? Companion_getInstance_11().get_sRGB_wottib_k$() : _this__u8e3s4.equals(ColorSpaces_getInstance().get_LinearSrgb_gaeay0_k$()) ? Companion_getInstance_11().get_sRGBLinear_5cyq1k_k$() : _this__u8e3s4.equals(ColorSpaces_getInstance().get_DisplayP3_pa2gtg_k$()) ? Companion_getInstance_11().get_displayP3_clxlks_k$() : Companion_getInstance_11().get_sRGB_wottib_k$();
  }
  function SkiaBackedImageBitmap(bitmap) {
    this.bitmap_1 = bitmap;
    this.colorSpace_1 = toComposeColorSpace(this.bitmap_1.get_colorSpace_yx2b0_k$());
    this.config_1 = toComposeConfig(this.bitmap_1.get_colorType_tr6rn0_k$());
    this.hasAlpha_1 = !this.bitmap_1.get_isOpaque_xnqi0k_k$();
  }
  protoOf(SkiaBackedImageBitmap).get_bitmap_bfxu7s_k$ = function () {
    return this.bitmap_1;
  };
  protoOf(SkiaBackedImageBitmap).get_colorSpace_yx2b0_k$ = function () {
    return this.colorSpace_1;
  };
  protoOf(SkiaBackedImageBitmap).get_config_d6pt2v_k$ = function () {
    return this.config_1;
  };
  protoOf(SkiaBackedImageBitmap).get_hasAlpha_txpv0z_k$ = function () {
    return this.hasAlpha_1;
  };
  protoOf(SkiaBackedImageBitmap).get_height_e7t92o_k$ = function () {
    return this.bitmap_1.get_height_e7t92o_k$();
  };
  protoOf(SkiaBackedImageBitmap).get_width_j0q4yl_k$ = function () {
    return this.bitmap_1.get_width_j0q4yl_k$();
  };
  protoOf(SkiaBackedImageBitmap).prepareToDraw_sb34p6_k$ = function () {
    return Unit_getInstance();
  };
  protoOf(SkiaBackedImageBitmap).readPixels_vm93oo_k$ = function (buffer, startX, startY, width, height, bufferOffset, stride) {
    var lastScanline = bufferOffset + imul(height - 1 | 0, stride) | 0;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(startX >= 0 ? startY >= 0 : false)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(width > 0 ? (startX + width | 0) <= this.get_width_j0q4yl_k$() : false)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message_0 = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(height > 0 ? (startY + height | 0) <= this.get_height_e7t92o_k$() : false)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message_1 = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(abs(stride) >= width)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message_2 = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message_2));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(bufferOffset >= 0 ? (bufferOffset + width | 0) <= buffer.length : false)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message_3 = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message_3));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(lastScanline >= 0 ? (lastScanline + width | 0) <= buffer.length : false)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message_4 = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message_4));
    }
    var colorInfo = new ColorInfo(ColorType_BGRA_8888_getInstance(), ColorAlphaType_UNPREMUL_getInstance(), Companion_getInstance_11().get_sRGB_wottib_k$());
    var imageInfo = new ImageInfo(colorInfo, width, height);
    var bytesPerPixel = 4;
    var bytes = ensureNotNull(this.bitmap_1.readPixels_chdhwh_k$(imageInfo, imul(stride, bytesPerPixel), startX, startY));
    putBytesInto(bytes, buffer, bufferOffset, bytes.length / bytesPerPixel | 0);
  };
  function toComposeColorSpace(_this__u8e3s4) {
    return equals(_this__u8e3s4, Companion_getInstance_11().get_sRGB_wottib_k$()) ? ColorSpaces_getInstance().get_Srgb_woa2g3_k$() : equals(_this__u8e3s4, Companion_getInstance_11().get_sRGBLinear_5cyq1k_k$()) ? ColorSpaces_getInstance().get_LinearSrgb_gaeay0_k$() : equals(_this__u8e3s4, Companion_getInstance_11().get_displayP3_clxlks_k$()) ? ColorSpaces_getInstance().get_DisplayP3_pa2gtg_k$() : ColorSpaces_getInstance().get_Srgb_woa2g3_k$();
  }
  function toComposeConfig(_this__u8e3s4) {
    return _this__u8e3s4.equals(Companion_getInstance_10().get_N32_18jozg_k$()) ? Companion_getInstance_21().get_Argb8888_epitdf_k$() : _this__u8e3s4.equals(ColorType_ALPHA_8_getInstance()) ? Companion_getInstance_21().get_Alpha8_8qn3sx_k$() : _this__u8e3s4.equals(ColorType_RGB_565_getInstance()) ? Companion_getInstance_21().get_Rgb565_qf3bri_k$() : _this__u8e3s4.equals(ColorType_RGBA_F16_getInstance()) ? Companion_getInstance_21().get_F16_tc2i3k_k$() : Companion_getInstance_21().get_Argb8888_epitdf_k$();
  }
  function asSkiaBitmap(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof SkiaBackedImageBitmap) {
      tmp = _this__u8e3s4.bitmap_1;
    } else {
      throw UnsupportedOperationException_init_$Create$_0('Unable to obtain org.jetbrains.skia.Image');
    }
    return tmp;
  }
  function ActualLinearGradientShader(from, to, colors, colorStops, tileMode) {
    validateColorStops(colors, colorStops);
    var tmp = Companion_getInstance_12();
    var tmp_0 = _Offset___get_x__impl__xvi35n(from);
    var tmp_1 = _Offset___get_y__impl__8bzhra(from);
    var tmp_2 = _Offset___get_x__impl__xvi35n(to);
    var tmp_3 = _Offset___get_y__impl__8bzhra(to);
    var tmp_4 = toIntArray(colors);
    return tmp.makeLinearGradient_gatnrf_k$(tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, colorStops == null ? null : toFloatArray(colorStops), new GradientStyle(toSkiaTileMode(tileMode), true, identityMatrix33()));
  }
  function ActualRadialGradientShader(center, radius, colors, colorStops, tileMode) {
    validateColorStops(colors, colorStops);
    var tmp = Companion_getInstance_12();
    var tmp_0 = _Offset___get_x__impl__xvi35n(center);
    var tmp_1 = _Offset___get_y__impl__8bzhra(center);
    var tmp_2 = toIntArray(colors);
    return tmp.makeRadialGradient_ai7hst_k$(tmp_0, tmp_1, radius, tmp_2, colorStops == null ? null : toFloatArray(colorStops), new GradientStyle(toSkiaTileMode(tileMode), true, identityMatrix33()));
  }
  function ActualSweepGradientShader(center, colors, colorStops) {
    validateColorStops(colors, colorStops);
    var tmp = Companion_getInstance_12();
    var tmp_0 = _Offset___get_x__impl__xvi35n(center);
    var tmp_1 = _Offset___get_y__impl__8bzhra(center);
    var tmp_2 = toIntArray(colors);
    return tmp.makeSweepGradient_hn03zg_k$(tmp_0, tmp_1, tmp_2, colorStops == null ? null : toFloatArray(colorStops));
  }
  function validateColorStops(colors, colorStops) {
    if (colorStops == null) {
      if (colors.get_size_woubt6_k$() < 2) {
        throw IllegalArgumentException_init_$Create$('colors must have length of at least 2 if colorStops is omitted.');
      }
    } else if (!(colors.get_size_woubt6_k$() === colorStops.get_size_woubt6_k$())) {
      throw IllegalArgumentException_init_$Create$('colors and colorStops arguments must have equal length.');
    }
  }
  function toIntArray(_this__u8e3s4) {
    var tmp = 0;
    var tmp_0 = _this__u8e3s4.get_size_woubt6_k$();
    var tmp_1 = new Int32Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      tmp_1[tmp_2] = toArgb(_this__u8e3s4.get_c1px32_k$(tmp_2).value_1);
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  }
  function toSkiaTileMode(_this__u8e3s4) {
    return _this__u8e3s4 === Companion_getInstance_33().get_Clamp_ddetsd_k$() ? FilterTileMode_CLAMP_getInstance() : _this__u8e3s4 === Companion_getInstance_33().get_Repeated_jl00zi_k$() ? FilterTileMode_REPEAT_getInstance() : _this__u8e3s4 === Companion_getInstance_33().get_Mirror_rukh4t_k$() ? FilterTileMode_MIRROR_getInstance() : _this__u8e3s4 === Companion_getInstance_33().get_Decal_4ld873_k$() ? FilterTileMode_DECAL_getInstance() : FilterTileMode_CLAMP_getInstance();
  }
  function toSkiaVertexMode(_this__u8e3s4) {
    return _this__u8e3s4 === Companion_getInstance_34().get_Triangles_687gr1_k$() ? VertexMode_TRIANGLES_getInstance() : _this__u8e3s4 === Companion_getInstance_34().get_TriangleStrip_pmcutk_k$() ? VertexMode_TRIANGLE_STRIP_getInstance() : _this__u8e3s4 === Companion_getInstance_34().get_TriangleFan_rxrqvh_k$() ? VertexMode_TRIANGLE_FAN_getInstance() : VertexMode_TRIANGLES_getInstance();
  }
  //region block: post-declaration
  protoOf(CanvasDrawScope).drawLine$default_gyf64g_k$ = drawLine$default;
  protoOf(CanvasDrawScope).drawLine$default_457gsp_k$ = drawLine$default_0;
  protoOf(CanvasDrawScope).drawRect$default_rrw2w5_k$ = drawRect$default;
  protoOf(CanvasDrawScope).drawRect$default_5x4e2k_k$ = drawRect$default_0;
  protoOf(CanvasDrawScope).drawImage$default_grl3dt_k$ = drawImage$default;
  protoOf(CanvasDrawScope).drawImage$default_8v3vnc_k$ = drawImage$default_0;
  protoOf(CanvasDrawScope).drawImage$default_qql6c2_k$ = drawImage$default_1;
  protoOf(CanvasDrawScope).drawRoundRect$default_mredpw_k$ = drawRoundRect$default;
  protoOf(CanvasDrawScope).drawRoundRect$default_9g09cz_k$ = drawRoundRect$default_0;
  protoOf(CanvasDrawScope).drawCircle$default_svji1h_k$ = drawCircle$default;
  protoOf(CanvasDrawScope).drawCircle$default_wqrb84_k$ = drawCircle$default_0;
  protoOf(CanvasDrawScope).drawOval$default_x9bh3n_k$ = drawOval$default;
  protoOf(CanvasDrawScope).drawOval$default_bejsa2_k$ = drawOval$default_0;
  protoOf(CanvasDrawScope).drawArc$default_sh8wha_k$ = drawArc$default;
  protoOf(CanvasDrawScope).drawArc$default_m1szk9_k$ = drawArc$default_0;
  protoOf(CanvasDrawScope).drawPath$default_16x1km_k$ = drawPath$default;
  protoOf(CanvasDrawScope).drawPath$default_6abh83_k$ = drawPath$default_0;
  protoOf(CanvasDrawScope).drawPoints$default_6sw95n_k$ = drawPoints$default;
  protoOf(CanvasDrawScope).drawPoints$default_vvgacc_k$ = drawPoints$default_0;
  protoOf(CanvasDrawScope).get_center_dcexec_k$ = get_center_0;
  protoOf(CanvasDrawScope).get_size_cxx1ym_k$ = get_size;
  protoOf(CanvasDrawScope).toPx_mycba2_k$ = toPx;
  protoOf(CanvasDrawScope).toPx_plt68j_k$ = toPx_0;
  protoOf(CanvasDrawScope).roundToPx_yb7vg8_k$ = roundToPx;
  protoOf(CanvasDrawScope).roundToPx_cw9j9b_k$ = roundToPx_0;
  protoOf(CanvasDrawScope).toDp_fjakf4_k$ = toDp;
  protoOf(CanvasDrawScope).toDp_hs0w0_k$ = toDp_0;
  protoOf(CanvasDrawScope).toDp_m8rr7q_k$ = toDp_1;
  protoOf(CanvasDrawScope).toSp_97l7ws_k$ = toSp;
  protoOf(CanvasDrawScope).toSp_fixg4_k$ = toSp_0;
  protoOf(CanvasDrawScope).toSp_apeb1_k$ = toSp_1;
  protoOf(CanvasDrawScope).toRect_ysncr2_k$ = toRect_0;
  protoOf(CanvasDrawScope).toSize_7jb2uc_k$ = toSize;
  protoOf(CanvasDrawScope).toDpSize_5hpeec_k$ = toDpSize;
  protoOf(asDrawTransform$1).clipRect$default_tcjibt_k$ = clipRect$default_1;
  protoOf(asDrawTransform$1).clipPath$default_9le209_k$ = clipPath$default_0;
  protoOf(asDrawTransform$1).translate$default_k6kdkn_k$ = translate$default;
  protoOf(asDrawTransform$1).rotate$default_gnv4f9_k$ = rotate$default;
  protoOf(asDrawTransform$1).scale$default_4k3oto_k$ = scale$default_0;
  protoOf(EmptyCanvas).scale$default_k3lttb_k$ = scale$default;
  protoOf(EmptyCanvas).clipRect$default_rljm8s_k$ = clipRect$default_0;
  protoOf(EmptyCanvas).clipPath$default_6w3exa_k$ = clipPath$default;
  protoOf(EmptyCanvas).drawImageRect$default_yosr39_k$ = drawImageRect$default;
  protoOf(EmptyCanvas).skewRad_dqdrvp_k$ = skewRad;
  protoOf(EmptyCanvas).clipRect_oj1pv4_k$ = clipRect;
  protoOf(EmptyCanvas).clipRect$default_a4bw85_k$ = clipRect$default;
  protoOf(EmptyCanvas).drawRect_pdd91p_k$ = drawRect;
  protoOf(EmptyCanvas).drawOval_tv5kqj_k$ = drawOval;
  protoOf(EmptyCanvas).drawArc_j2ua6c_k$ = drawArc;
  protoOf(EmptyCanvas).drawArcRad_lerje3_k$ = drawArcRad;
  protoOf(SkiaBackedCanvas).scale$default_k3lttb_k$ = scale$default;
  protoOf(SkiaBackedCanvas).clipRect$default_rljm8s_k$ = clipRect$default_0;
  protoOf(SkiaBackedCanvas).clipPath$default_6w3exa_k$ = clipPath$default;
  protoOf(SkiaBackedCanvas).drawImageRect$default_yosr39_k$ = drawImageRect$default;
  protoOf(SkiaBackedCanvas).skewRad_dqdrvp_k$ = skewRad;
  protoOf(SkiaBackedCanvas).clipRect_oj1pv4_k$ = clipRect;
  protoOf(SkiaBackedCanvas).clipRect$default_a4bw85_k$ = clipRect$default;
  protoOf(SkiaBackedCanvas).drawRect_pdd91p_k$ = drawRect;
  protoOf(SkiaBackedCanvas).drawOval_tv5kqj_k$ = drawOval;
  protoOf(SkiaBackedCanvas).drawArc_j2ua6c_k$ = drawArc;
  protoOf(SkiaBackedCanvas).drawArcRad_lerje3_k$ = drawArcRad;
  protoOf(SkiaBackedPath).addPath$default_lo4vd5_k$ = addPath$default;
  protoOf(SkiaBackedPath).arcToRad_52k5ic_k$ = arcToRad;
  protoOf(SkiaBackedImageBitmap).readPixels$default_31rwvw_k$ = readPixels$default;
  //endregion
  //region block: init
  RadiansToDegrees = 57.29578;
  DefaultAlpha = 1.0;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CanvasDrawScope;
  _.$_$.b = ContentDrawScope;
  _.$_$.c = DrawScope;
  _.$_$.d = Stroke;
  _.$_$.e = BlendMode;
  _.$_$.f = Canvas_0;
  _.$_$.g = Color_2;
  _.$_$.h = Color_0;
  _.$_$.i = Color_1;
  _.$_$.j = Color;
  _.$_$.k = ImageBitmapConfig;
  _.$_$.l = ImageBitmap_0;
  _.$_$.m = Matrix;
  _.$_$.n = Generic;
  _.$_$.o = Rectangle;
  _.$_$.p = Rounded;
  _.$_$.q = Paint_0;
  _.$_$.r = PathFillType;
  _.$_$.s = Path_0;
  _.$_$.t = get_RectangleShape;
  _.$_$.u = ShaderBrush;
  _.$_$.v = Shadow;
  _.$_$.w = Shape;
  _.$_$.x = SolidColor;
  _.$_$.y = StrokeCap;
  _.$_$.z = StrokeJoin;
  _.$_$.a1 = set_alphaMultiplier;
  _.$_$.b1 = asComposeCanvas;
  _.$_$.c1 = asComposePaint;
  _.$_$.d1 = asSkiaPath;
  _.$_$.e1 = drawOutline;
  _.$_$.f1 = drawOutline_0;
  _.$_$.g1 = lerp_2;
  _.$_$.h1 = lerp_1;
  _.$_$.i1 = luminance;
  _.$_$.j1 = get_nativeCanvas;
  _.$_$.k1 = toArgb;
  _.$_$.l1 = toComposeRect;
  _.$_$.m1 = toSkiaRRect;
  _.$_$.n1 = drawArc$default;
  _.$_$.o1 = drawArc$default_0;
  _.$_$.p1 = drawCircle$default;
  _.$_$.q1 = drawCircle$default_0;
  _.$_$.r1 = drawImage$default_0;
  _.$_$.s1 = drawImage$default;
  _.$_$.t1 = drawImage$default_1;
  _.$_$.u1 = drawLine$default;
  _.$_$.v1 = drawLine$default_0;
  _.$_$.w1 = drawOval$default;
  _.$_$.x1 = drawOval$default_0;
  _.$_$.y1 = drawPath$default_0;
  _.$_$.z1 = drawPath$default;
  _.$_$.a2 = drawPoints$default_0;
  _.$_$.b2 = drawPoints$default;
  _.$_$.c2 = drawRect$default;
  _.$_$.d2 = drawRect$default_0;
  _.$_$.e2 = drawRoundRect$default;
  _.$_$.f2 = drawRoundRect$default_0;
  _.$_$.g2 = BlendMode__hashCode_impl_93ceri;
  _.$_$.h2 = _Color___init__impl__r6cqi2;
  _.$_$.i2 = _Color___get_alpha__impl__wcfyv1;
  _.$_$.j2 = _Color___get_colorSpace__impl__jqqozk;
  _.$_$.k2 = Color__component1_impl_lz80qe;
  _.$_$.l2 = Color__component2_impl_mg9n4l;
  _.$_$.m2 = Color__component3_impl_mxb9is;
  _.$_$.n2 = Color__component4_impl_necvwz;
  _.$_$.o2 = Color__convert_impl_so5m8t;
  _.$_$.p2 = Color__hashCode_impl_vjyivj;
  _.$_$.q2 = _Color___get_value__impl__1pls5m;
  _.$_$.r2 = _Matrix___init__impl__q3kp4w;
  _.$_$.s2 = Matrix__map_impl_7meu7m;
  _.$_$.t2 = Matrix__map_impl_7meu7m_1;
  _.$_$.u2 = Matrix__reset_impl_4l49i7;
  _.$_$.v2 = Matrix__rotateX_impl_3e5y7j;
  _.$_$.w2 = Matrix__rotateY_impl_2x4btc;
  _.$_$.x2 = Matrix__rotateZ_impl_2g2pf5;
  _.$_$.y2 = Matrix__timesAssign_impl_oas521;
  _.$_$.z2 = _Matrix___get_values__impl__fblr7b;
  _.$_$.a3 = PathFillType__hashCode_impl_pdqo4w;
  _.$_$.b3 = StrokeCap__hashCode_impl_posxk8;
  _.$_$.c3 = StrokeJoin__hashCode_impl_3pyh8w;
  _.$_$.d3 = Color__copy$default_impl_ectz3s;
  _.$_$.e3 = Matrix__scale$default_impl_snaws9;
  _.$_$.f3 = Matrix__translate$default_impl_10t8ql;
  _.$_$.g3 = ColorSpaces_getInstance;
  _.$_$.h3 = Companion_getInstance_43;
  _.$_$.i3 = Fill_getInstance;
  _.$_$.j3 = Companion_getInstance_13;
  _.$_$.k3 = Companion_getInstance_15;
  _.$_$.l3 = Companion_getInstance_16;
  _.$_$.m3 = Companion_getInstance_17;
  _.$_$.n3 = Companion_getInstance_21;
  _.$_$.o3 = Companion_getInstance_23;
  _.$_$.p3 = Companion_getInstance_27;
  _.$_$.q3 = Companion_getInstance_28;
  _.$_$.r3 = Companion_getInstance_30;
  _.$_$.s3 = Companion_getInstance_31;
  _.$_$.t3 = Companion_getInstance_32;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-ui-ui-graphics.js.map
