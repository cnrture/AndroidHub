(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'skiko-kjs'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'skiko-kjs'.");
    }
    root['skiko-kjs'] = factory(typeof this['skiko-kjs'] === 'undefined' ? {} : this['skiko-kjs'], this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.k5;
  var protoOf = kotlin_kotlin.$_$.ic;
  var objectMeta = kotlin_kotlin.$_$.hc;
  var setMetadataFor = kotlin_kotlin.$_$.jc;
  var classMeta = kotlin_kotlin.$_$.xa;
  var Enum = kotlin_kotlin.$_$.bg;
  var VOID = kotlin_kotlin.$_$.g;
  var charSequenceGet = kotlin_kotlin.$_$.ua;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.z2;
  var toShort = kotlin_kotlin.$_$.mc;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.v1;
  var objectCreate = kotlin_kotlin.$_$.gc;
  var THROW_CCE = kotlin_kotlin.$_$.ng;
  var isCharSequence = kotlin_kotlin.$_$.rb;
  var trim = kotlin_kotlin.$_$.rf;
  var toString = kotlin_kotlin.$_$.nc;
  var split = kotlin_kotlin.$_$.ve;
  var getOrNull = kotlin_kotlin.$_$.x7;
  var toIntOrNull = kotlin_kotlin.$_$.ff;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.p3;
  var fillArrayVal = kotlin_kotlin.$_$.cb;
  var splitToSequence = kotlin_kotlin.$_$.te;
  var mapNotNull = kotlin_kotlin.$_$.pd;
  var toList = kotlin_kotlin.$_$.td;
  var copyToArray = kotlin_kotlin.$_$.g7;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.q3;
  var uintCompare = kotlin_kotlin.$_$.ai;
  var Companion_getInstance = kotlin_kotlin.$_$.h5;
  var UInt = kotlin_kotlin.$_$.tg;
  var compareTo = kotlin_kotlin.$_$.ya;
  var toBits = kotlin_kotlin.$_$.vh;
  var hashCode = kotlin_kotlin.$_$.kb;
  var isNaN_0 = kotlin_kotlin.$_$.jh;
  var numberToChar = kotlin_kotlin.$_$.dc;
  var charArrayOf = kotlin_kotlin.$_$.sa;
  var concatToString = kotlin_kotlin.$_$.vd;
  var decodeToString = kotlin_kotlin.$_$.yd;
  var contentEquals = kotlin_kotlin.$_$.u6;
  var contentHashCode = kotlin_kotlin.$_$.w6;
  var equals = kotlin_kotlin.$_$.ab;
  var contentHashCode_0 = kotlin_kotlin.$_$.v6;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.f2;
  var NotImplementedError = kotlin_kotlin.$_$.ig;
  var last = kotlin_kotlin.$_$.l8;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.w4;
  var floatFromBits = kotlin_kotlin.$_$.db;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.nh;
  var joinToString = kotlin_kotlin.$_$.c8;
  var Error_init_$Create$ = kotlin_kotlin.$_$.l1;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.t1;
  var until = kotlin_kotlin.$_$.gd;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.r6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var toBits_0 = kotlin_kotlin.$_$.wh;
  var ensureNotNull = kotlin_kotlin.$_$.fh;
  var getNumberHashCode = kotlin_kotlin.$_$.gb;
  var Long = kotlin_kotlin.$_$.gg;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.n;
  var listOf = kotlin_kotlin.$_$.m8;
  var getBooleanHashCode = kotlin_kotlin.$_$.eb;
  var RuntimeException = kotlin_kotlin.$_$.mg;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.m2;
  var captureStack = kotlin_kotlin.$_$.ra;
  var interfaceMeta = kotlin_kotlin.$_$.mb;
  var toIntArray = kotlin_kotlin.$_$.j9;
  var defineProp = kotlin_kotlin.$_$.za;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.g1;
  var charSequenceLength = kotlin_kotlin.$_$.va;
  var lazy = kotlin_kotlin.$_$.mh;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var plus = kotlin_kotlin.$_$.oh;
  var toString_0 = kotlin_kotlin.$_$.jf;
  var numberToLong = kotlin_kotlin.$_$.fc;
  var numberToInt = kotlin_kotlin.$_$.ec;
  var contains = kotlin_kotlin.$_$.wd;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder, '_FinalizerHolder', objectMeta);
  setMetadataFor(Native, 'Native', classMeta);
  setMetadataFor(Managed, 'Managed', classMeta, Native);
  setMetadataFor(BackendRenderTarget, 'BackendRenderTarget', classMeta, Managed);
  setMetadataFor(BlendMode, 'BlendMode', classMeta, Enum);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_0, '_FinalizerHolder', objectMeta);
  setMetadataFor(BreakIterator, 'BreakIterator', classMeta, Managed);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_1, '_FinalizerHolder', objectMeta);
  setMetadataFor(Canvas, 'Canvas', classMeta, Managed);
  setMetadataFor(ClipMode, 'ClipMode', classMeta, Enum);
  setMetadataFor(Color, 'Color', objectMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_2, '_FinalizerHolder', objectMeta);
  setMetadataFor(ColorSpace, 'ColorSpace', classMeta, Managed);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_3, '_FinalizerHolder', objectMeta);
  setMetadataFor(Data, 'Data', classMeta, Managed);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(RefCnt, 'RefCnt', classMeta, Managed);
  setMetadataFor(DirectContext, 'DirectContext', classMeta, RefCnt);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_4, '_FinalizerHolder', objectMeta);
  setMetadataFor(Font, 'Font', classMeta, Managed, VOID, Font_init_$Create$);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(FontFeature, 'FontFeature', classMeta);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(FontMetrics, 'FontMetrics', classMeta);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(FontMgr, 'FontMgr', classMeta, RefCnt);
  setMetadataFor(FontSlant, 'FontSlant', classMeta, Enum);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(FontStyle, 'FontStyle', classMeta);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor(Companion_12, 'Companion', objectMeta);
  setMetadataFor(Companion_13, 'Companion', objectMeta);
  setMetadataFor(IRange, 'IRange', classMeta);
  setMetadataFor(Companion_14, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_5, '_FinalizerHolder', objectMeta);
  setMetadataFor(ManagedString, 'ManagedString', classMeta, Managed);
  setMetadataFor(Companion_15, 'Companion', objectMeta);
  setMetadataFor(Matrix33, 'Matrix33', classMeta);
  setMetadataFor(Companion_16, 'Companion', objectMeta);
  setMetadataFor(Matrix44, 'Matrix44', classMeta);
  setMetadataFor(Companion_17, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_6, '_FinalizerHolder', objectMeta);
  setMetadataFor(Paint, 'Paint', classMeta, Managed, VOID, Paint_init_$Create$);
  setMetadataFor(PaintMode, 'PaintMode', classMeta, Enum);
  setMetadataFor(PaintStrokeCap, 'PaintStrokeCap', classMeta, Enum);
  setMetadataFor(PaintStrokeJoin, 'PaintStrokeJoin', classMeta, Enum);
  setMetadataFor(Companion_18, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_7, '_FinalizerHolder', objectMeta);
  setMetadataFor(Path, 'Path', classMeta, Managed, VOID, Path_init_$Create$);
  setMetadataFor(PathDirection, 'PathDirection', classMeta, Enum);
  setMetadataFor(PathFillMode, 'PathFillMode', classMeta, Enum);
  setMetadataFor(PathOp, 'PathOp', classMeta, Enum);
  setMetadataFor(PathSegment, 'PathSegment', classMeta, VOID, VOID, PathSegment);
  setMetadataFor(Companion_19, 'Companion', objectMeta);
  setMetadataFor(PathSegmentIterator, 'PathSegmentIterator', classMeta, Managed);
  setMetadataFor(PathVerb, 'PathVerb', classMeta, Enum);
  setMetadataFor(Companion_20, 'Companion', objectMeta);
  setMetadataFor(Picture, 'Picture', classMeta, RefCnt);
  setMetadataFor(Companion_21, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_8, '_FinalizerHolder', objectMeta);
  setMetadataFor(PictureRecorder, 'PictureRecorder', classMeta, Managed, VOID, PictureRecorder_init_$Create$);
  setMetadataFor(PixelGeometry, 'PixelGeometry', classMeta, Enum);
  setMetadataFor(Companion_22, 'Companion', objectMeta);
  setMetadataFor(Point, 'Point', classMeta);
  setMetadataFor(Point3, 'Point3', classMeta);
  setMetadataFor(Companion_23, 'Companion', objectMeta);
  setMetadataFor(Rect, 'Rect', classMeta);
  setMetadataFor(RRect, 'RRect', classMeta, Rect);
  setMetadataFor(Companion_24, 'Companion', objectMeta);
  setMetadataFor(ShadowUtils, 'ShadowUtils', objectMeta);
  setMetadataFor(ArrayDecoder, 'ArrayDecoder', classMeta);
  setMetadataFor(Companion_25, 'Companion', objectMeta);
  setMetadataFor(Surface, 'Surface', classMeta, RefCnt);
  setMetadataFor(SurfaceColorFormat, 'SurfaceColorFormat', classMeta, Enum);
  setMetadataFor(SurfaceOrigin, 'SurfaceOrigin', classMeta, Enum);
  setMetadataFor(SurfaceProps, 'SurfaceProps', classMeta, VOID, VOID, SurfaceProps);
  setMetadataFor(Companion_26, 'Companion', objectMeta);
  setMetadataFor(Typeface, 'Typeface', classMeta, RefCnt);
  setMetadataFor(Companion_27, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_9, '_FinalizerHolder', objectMeta);
  setMetadataFor(U16String, 'U16String', classMeta, Managed);
  setMetadataFor(CharDirection, 'CharDirection', objectMeta);
  setMetadataFor(Alignment, 'Alignment', classMeta, Enum);
  setMetadataFor(BaselineMode, 'BaselineMode', classMeta, Enum);
  setMetadataFor(DecorationLineStyle, 'DecorationLineStyle', classMeta, Enum);
  setMetadataFor(Companion_28, 'Companion', objectMeta);
  setMetadataFor(DecorationStyle, 'DecorationStyle', classMeta);
  setMetadataFor(Direction, 'Direction', classMeta, Enum);
  setMetadataFor(Companion_29, 'Companion', objectMeta);
  setMetadataFor(FontCollection, 'FontCollection', classMeta, RefCnt, VOID, FontCollection_init_$Create$);
  setMetadataFor(HeightMode, 'HeightMode', classMeta, Enum);
  setMetadataFor(Companion_30, 'Companion', objectMeta);
  setMetadataFor(LineMetrics, 'LineMetrics', classMeta);
  setMetadataFor(Companion_31, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_10, '_FinalizerHolder', objectMeta);
  setMetadataFor(Paragraph, 'Paragraph', classMeta, Managed);
  setMetadataFor(Companion_32, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_11, '_FinalizerHolder', objectMeta);
  setMetadataFor(ParagraphBuilder, 'ParagraphBuilder', classMeta, Managed);
  setMetadataFor(Companion_33, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_12, '_FinalizerHolder', objectMeta);
  setMetadataFor(ParagraphStyle, 'ParagraphStyle', classMeta, Managed, VOID, ParagraphStyle);
  setMetadataFor(PlaceholderAlignment, 'PlaceholderAlignment', classMeta, Enum);
  setMetadataFor(PlaceholderStyle, 'PlaceholderStyle', classMeta);
  setMetadataFor(RectHeightMode, 'RectHeightMode', classMeta, Enum);
  setMetadataFor(RectWidthMode, 'RectWidthMode', classMeta, Enum);
  setMetadataFor(Companion_34, 'Companion', objectMeta);
  setMetadataFor(Shadow, 'Shadow', classMeta);
  setMetadataFor(Companion_35, 'Companion', objectMeta);
  setMetadataFor(TextBox, 'TextBox', classMeta);
  setMetadataFor(TextIndent, 'TextIndent', classMeta, VOID, VOID, TextIndent);
  setMetadataFor(Companion_36, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_13, '_FinalizerHolder', objectMeta);
  setMetadataFor(TextStyle, 'TextStyle', classMeta, Managed, VOID, TextStyle_init_$Create$);
  setMetadataFor(Companion_37, 'Companion', objectMeta);
  setMetadataFor(TypefaceFontProvider, 'TypefaceFontProvider', classMeta, FontMgr, VOID, TypefaceFontProvider);
  setMetadataFor(SkikoKeyboardEvent, 'SkikoKeyboardEvent', classMeta);
  setMetadataFor(Companion_38, 'Companion', objectMeta);
  setMetadataFor(SkikoInputModifiers, 'SkikoInputModifiers', classMeta);
  setMetadataFor(SkikoKeyboardEventKind, 'SkikoKeyboardEventKind', classMeta, Enum);
  setMetadataFor(SkikoPointerEvent, 'SkikoPointerEvent', classMeta);
  setMetadataFor(SkikoPointerEventKind, 'SkikoPointerEventKind', classMeta, Enum);
  setMetadataFor(SkikoPointerDevice, 'SkikoPointerDevice', classMeta, Enum);
  setMetadataFor(SkikoPointer, 'SkikoPointer', classMeta);
  setMetadataFor(Companion_39, 'Companion', objectMeta);
  setMetadataFor(SkikoMouseButtons, 'SkikoMouseButtons', classMeta);
  setMetadataFor(GraphicsApi, 'GraphicsApi', classMeta, Enum);
  setMetadataFor(OS, 'OS', classMeta, Enum);
  setMetadataFor(Arch, 'Arch', classMeta, Enum);
  setMetadataFor(ClipboardManager, 'ClipboardManager', classMeta, VOID, VOID, ClipboardManager);
  setMetadataFor(URIManager, 'URIManager', classMeta, VOID, VOID, URIManager);
  setMetadataFor(RenderException, 'RenderException', classMeta, RuntimeException, VOID, RenderException);
  function onKeyboardEvent(event) {
    return Unit_instance;
  }
  function onPointerEvent(event) {
    return Unit_instance;
  }
  setMetadataFor(SkikoView, 'SkikoView', interfaceMeta);
  setMetadataFor(SystemTheme, 'SystemTheme', classMeta, Enum);
  setMetadataFor(InteropScope, 'InteropScope', classMeta, VOID, VOID, InteropScope);
  setMetadataFor(createWebGLContext$contextAttributes$1, VOID, classMeta);
  setMetadataFor(Pattern, 'Pattern', classMeta);
  setMetadataFor(Companion_40, 'Companion', objectMeta);
  setMetadataFor(FinalizationThunk, 'FinalizationThunk', classMeta);
  setMetadataFor(Companion_41, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_14, '_FinalizerHolder', objectMeta);
  setMetadataFor(Stats, 'Stats', objectMeta);
  setMetadataFor(CanvasRenderer, 'CanvasRenderer', classMeta);
  setMetadataFor(SkiaLayer$attachTo$1, VOID, classMeta, CanvasRenderer);
  setMetadataFor(SkiaLayer, 'SkiaLayer', classMeta, VOID, VOID, SkiaLayer);
  setMetadataFor(Empty, 'Empty', objectMeta);
  setMetadataFor(Companion_42, 'Companion', objectMeta);
  setMetadataFor(SkikoKey, 'SkikoKey', classMeta, Enum);
  //endregion
  function Companion() {
    Companion_instance = this;
    Companion_instance_40.m2y();
  }
  protoOf(Companion).n2y = function (width, height, sampleCnt, stencilBits, fbId, fbFormat) {
    Stats_instance.o2y();
    var ptr = org_jetbrains_skia_BackendRenderTarget__1nMakeGL(width, height, sampleCnt, stencilBits, fbId, fbFormat);
    if (ptr === Companion_instance_41.p2y())
      throw new RenderException("Can't create OpenGL BackendRenderTarget");
    return new BackendRenderTarget(ptr);
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function _FinalizerHolder() {
    _FinalizerHolder_instance = this;
    this.q2y_1 = org_jetbrains_skia_BackendRenderTarget__1nGetFinalizer();
  }
  var _FinalizerHolder_instance;
  function _FinalizerHolder_getInstance() {
    if (_FinalizerHolder_instance == null)
      new _FinalizerHolder();
    return _FinalizerHolder_instance;
  }
  function BackendRenderTarget(ptr) {
    Companion_getInstance_0();
    Managed.call(this, ptr, _FinalizerHolder_getInstance().q2y_1);
  }
  var BlendMode_CLEAR_instance;
  var BlendMode_SRC_instance;
  var BlendMode_DST_instance;
  var BlendMode_SRC_OVER_instance;
  var BlendMode_DST_OVER_instance;
  var BlendMode_SRC_IN_instance;
  var BlendMode_DST_IN_instance;
  var BlendMode_SRC_OUT_instance;
  var BlendMode_DST_OUT_instance;
  var BlendMode_SRC_ATOP_instance;
  var BlendMode_DST_ATOP_instance;
  var BlendMode_XOR_instance;
  var BlendMode_PLUS_instance;
  var BlendMode_MODULATE_instance;
  var BlendMode_SCREEN_instance;
  var BlendMode_OVERLAY_instance;
  var BlendMode_DARKEN_instance;
  var BlendMode_LIGHTEN_instance;
  var BlendMode_COLOR_DODGE_instance;
  var BlendMode_COLOR_BURN_instance;
  var BlendMode_HARD_LIGHT_instance;
  var BlendMode_SOFT_LIGHT_instance;
  var BlendMode_DIFFERENCE_instance;
  var BlendMode_EXCLUSION_instance;
  var BlendMode_MULTIPLY_instance;
  var BlendMode_HUE_instance;
  var BlendMode_SATURATION_instance;
  var BlendMode_COLOR_instance;
  var BlendMode_LUMINOSITY_instance;
  function values() {
    return [BlendMode_CLEAR_getInstance(), BlendMode_SRC_getInstance(), BlendMode_DST_getInstance(), BlendMode_SRC_OVER_getInstance(), BlendMode_DST_OVER_getInstance(), BlendMode_SRC_IN_getInstance(), BlendMode_DST_IN_getInstance(), BlendMode_SRC_OUT_getInstance(), BlendMode_DST_OUT_getInstance(), BlendMode_SRC_ATOP_getInstance(), BlendMode_DST_ATOP_getInstance(), BlendMode_XOR_getInstance(), BlendMode_PLUS_getInstance(), BlendMode_MODULATE_getInstance(), BlendMode_SCREEN_getInstance(), BlendMode_OVERLAY_getInstance(), BlendMode_DARKEN_getInstance(), BlendMode_LIGHTEN_getInstance(), BlendMode_COLOR_DODGE_getInstance(), BlendMode_COLOR_BURN_getInstance(), BlendMode_HARD_LIGHT_getInstance(), BlendMode_SOFT_LIGHT_getInstance(), BlendMode_DIFFERENCE_getInstance(), BlendMode_EXCLUSION_getInstance(), BlendMode_MULTIPLY_getInstance(), BlendMode_HUE_getInstance(), BlendMode_SATURATION_getInstance(), BlendMode_COLOR_getInstance(), BlendMode_LUMINOSITY_getInstance()];
  }
  var BlendMode_entriesInitialized;
  function BlendMode_initEntries() {
    if (BlendMode_entriesInitialized)
      return Unit_instance;
    BlendMode_entriesInitialized = true;
    BlendMode_CLEAR_instance = new BlendMode('CLEAR', 0);
    BlendMode_SRC_instance = new BlendMode('SRC', 1);
    BlendMode_DST_instance = new BlendMode('DST', 2);
    BlendMode_SRC_OVER_instance = new BlendMode('SRC_OVER', 3);
    BlendMode_DST_OVER_instance = new BlendMode('DST_OVER', 4);
    BlendMode_SRC_IN_instance = new BlendMode('SRC_IN', 5);
    BlendMode_DST_IN_instance = new BlendMode('DST_IN', 6);
    BlendMode_SRC_OUT_instance = new BlendMode('SRC_OUT', 7);
    BlendMode_DST_OUT_instance = new BlendMode('DST_OUT', 8);
    BlendMode_SRC_ATOP_instance = new BlendMode('SRC_ATOP', 9);
    BlendMode_DST_ATOP_instance = new BlendMode('DST_ATOP', 10);
    BlendMode_XOR_instance = new BlendMode('XOR', 11);
    BlendMode_PLUS_instance = new BlendMode('PLUS', 12);
    BlendMode_MODULATE_instance = new BlendMode('MODULATE', 13);
    BlendMode_SCREEN_instance = new BlendMode('SCREEN', 14);
    BlendMode_OVERLAY_instance = new BlendMode('OVERLAY', 15);
    BlendMode_DARKEN_instance = new BlendMode('DARKEN', 16);
    BlendMode_LIGHTEN_instance = new BlendMode('LIGHTEN', 17);
    BlendMode_COLOR_DODGE_instance = new BlendMode('COLOR_DODGE', 18);
    BlendMode_COLOR_BURN_instance = new BlendMode('COLOR_BURN', 19);
    BlendMode_HARD_LIGHT_instance = new BlendMode('HARD_LIGHT', 20);
    BlendMode_SOFT_LIGHT_instance = new BlendMode('SOFT_LIGHT', 21);
    BlendMode_DIFFERENCE_instance = new BlendMode('DIFFERENCE', 22);
    BlendMode_EXCLUSION_instance = new BlendMode('EXCLUSION', 23);
    BlendMode_MULTIPLY_instance = new BlendMode('MULTIPLY', 24);
    BlendMode_HUE_instance = new BlendMode('HUE', 25);
    BlendMode_SATURATION_instance = new BlendMode('SATURATION', 26);
    BlendMode_COLOR_instance = new BlendMode('COLOR', 27);
    BlendMode_LUMINOSITY_instance = new BlendMode('LUMINOSITY', 28);
  }
  function BlendMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function BlendMode_CLEAR_getInstance() {
    BlendMode_initEntries();
    return BlendMode_CLEAR_instance;
  }
  function BlendMode_SRC_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_instance;
  }
  function BlendMode_DST_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_instance;
  }
  function BlendMode_SRC_OVER_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_OVER_instance;
  }
  function BlendMode_DST_OVER_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_OVER_instance;
  }
  function BlendMode_SRC_IN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_IN_instance;
  }
  function BlendMode_DST_IN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_IN_instance;
  }
  function BlendMode_SRC_OUT_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_OUT_instance;
  }
  function BlendMode_DST_OUT_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_OUT_instance;
  }
  function BlendMode_SRC_ATOP_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_ATOP_instance;
  }
  function BlendMode_DST_ATOP_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_ATOP_instance;
  }
  function BlendMode_XOR_getInstance() {
    BlendMode_initEntries();
    return BlendMode_XOR_instance;
  }
  function BlendMode_PLUS_getInstance() {
    BlendMode_initEntries();
    return BlendMode_PLUS_instance;
  }
  function BlendMode_MODULATE_getInstance() {
    BlendMode_initEntries();
    return BlendMode_MODULATE_instance;
  }
  function BlendMode_SCREEN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SCREEN_instance;
  }
  function BlendMode_OVERLAY_getInstance() {
    BlendMode_initEntries();
    return BlendMode_OVERLAY_instance;
  }
  function BlendMode_DARKEN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DARKEN_instance;
  }
  function BlendMode_LIGHTEN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_LIGHTEN_instance;
  }
  function BlendMode_COLOR_DODGE_getInstance() {
    BlendMode_initEntries();
    return BlendMode_COLOR_DODGE_instance;
  }
  function BlendMode_COLOR_BURN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_COLOR_BURN_instance;
  }
  function BlendMode_HARD_LIGHT_getInstance() {
    BlendMode_initEntries();
    return BlendMode_HARD_LIGHT_instance;
  }
  function BlendMode_SOFT_LIGHT_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SOFT_LIGHT_instance;
  }
  function BlendMode_DIFFERENCE_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DIFFERENCE_instance;
  }
  function BlendMode_EXCLUSION_getInstance() {
    BlendMode_initEntries();
    return BlendMode_EXCLUSION_instance;
  }
  function BlendMode_MULTIPLY_getInstance() {
    BlendMode_initEntries();
    return BlendMode_MULTIPLY_instance;
  }
  function BlendMode_HUE_getInstance() {
    BlendMode_initEntries();
    return BlendMode_HUE_instance;
  }
  function BlendMode_SATURATION_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SATURATION_instance;
  }
  function BlendMode_COLOR_getInstance() {
    BlendMode_initEntries();
    return BlendMode_COLOR_instance;
  }
  function BlendMode_LUMINOSITY_getInstance() {
    BlendMode_initEntries();
    return BlendMode_LUMINOSITY_instance;
  }
  function BreakIterator$Companion$makeCharacterInstance$lambda($locale) {
    return function ($this$withErrorGuard, it) {
      return org_jetbrains_skia_BreakIterator__1nMake(0, $this$withErrorGuard.x2y($locale), it);
    };
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.y2y_1 = -1;
    this.z2y_1 = 0;
    this.a2z_1 = 100;
    this.b2z_1 = 100;
    this.c2z_1 = 200;
    this.d2z_1 = 200;
    this.e2z_1 = 300;
    this.f2z_1 = 300;
    this.g2z_1 = 400;
    this.h2z_1 = 400;
    this.i2z_1 = 500;
    Companion_instance_40.m2y();
  }
  protoOf(Companion_0).j2z = function (locale) {
    Stats_instance.o2y();
    return new BreakIterator(withErrorGuard('Failed to create character iterator', BreakIterator$Companion$makeCharacterInstance$lambda(locale)));
  };
  protoOf(Companion_0).k2z = function (locale, $super) {
    locale = locale === VOID ? null : locale;
    return $super === VOID ? this.j2z(locale) : $super.j2z.call(this, locale);
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function _FinalizerHolder_0() {
    _FinalizerHolder_instance_0 = this;
    this.l2z_1 = org_jetbrains_skia_BreakIterator__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_0;
  function _FinalizerHolder_getInstance_0() {
    if (_FinalizerHolder_instance_0 == null)
      new _FinalizerHolder_0();
    return _FinalizerHolder_instance_0;
  }
  function BreakIterator$setText$lambda(this$0, $text) {
    return function ($this$withErrorGuard, it) {
      var tmp = this$0.t2y_1;
      var tmp_0;
      if ($text == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.jetbrains.skia.BreakIterator.setText.<anonymous>.<anonymous>' call
        var tmp_1 = 0;
        var tmp_2 = $text.length;
        var tmp_3 = new Int16Array(tmp_2);
        while (tmp_1 < tmp_2) {
          var tmp_4 = tmp_1;
          // Inline function 'kotlin.code' call
          var this_0 = charSequenceGet($text, tmp_4);
          var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
          tmp_3[tmp_4] = toShort(tmp$ret$0);
          tmp_1 = tmp_1 + 1 | 0;
        }
        tmp_0 = tmp_3;
      }
      var tmp_5 = $this$withErrorGuard.m2z(tmp_0);
      var tmp1_safe_receiver = $text;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.length;
      return org_jetbrains_skia_BreakIterator__1nSetText(tmp, tmp_5, tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs, it);
    };
  }
  function BreakIterator(ptr) {
    Companion_getInstance_1();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_0().l2z_1);
    this.p2z_1 = null;
  }
  protoOf(BreakIterator).y1k = function () {
    protoOf(Managed).y1k.call(this);
    var tmp0_safe_receiver = this.p2z_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y1k();
    }
  };
  protoOf(BreakIterator).q2z = function (offset) {
    var tmp;
    try {
      Stats_instance.o2y();
      tmp = org_jetbrains_skia_BreakIterator__1nPreceding(this.t2y_1, offset);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(BreakIterator).r2z = function (offset) {
    var tmp;
    try {
      Stats_instance.o2y();
      tmp = org_jetbrains_skia_BreakIterator__1nFollowing(this.t2y_1, offset);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(BreakIterator).s2z = function (text) {
    try {
      Stats_instance.o2y();
      var tmp0_safe_receiver = this.p2z_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.y1k();
      }
      var tmp = this;
      tmp.p2z_1 = new U16String(withErrorGuard('Failed to setText', BreakIterator$setText$lambda(this, text)));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(this.p2z_1);
    }
  };
  function withErrorGuard(message, block) {
    var errorCode = new Int32Array(1);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.withErrorGuard.<anonymous>' call
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        var handle = $this$interopScope.t2z(errorCode);
        var res = block($this$interopScope, handle);
        $this$interopScope.u2z(handle, errorCode);
        if (errorCode[0] > 0) {
          throw RuntimeException_init_$Create$(message + '; operation failed with status ' + errorCode);
        }
        if (res === Companion_instance_41.p2y()) {
          throw IllegalArgumentException_init_$Create$(message);
        }
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().mv();
        }
      }
    }
    return res;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    Companion_instance_40.m2y();
  }
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function _FinalizerHolder_1() {
    _FinalizerHolder_instance_1 = this;
    this.v2z_1 = org_jetbrains_skia_Canvas__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_1;
  function _FinalizerHolder_getInstance_1() {
    if (_FinalizerHolder_instance_1 == null)
      new _FinalizerHolder_1();
    return _FinalizerHolder_instance_1;
  }
  function Canvas(ptr, managed, _owner) {
    Companion_getInstance_2();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_1().v2z_1, managed);
    this.y2z_1 = _owner;
  }
  protoOf(Canvas).z2z = function (r, paint) {
    Stats_instance.o2y();
    try {
      org_jetbrains_skia_Canvas__1nDrawRect(this.t2y_1, r.a30_1, r.b30_1, r.c30_1, r.d30_1, getPtr(paint));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(paint);
    }
    return this;
  };
  protoOf(Canvas).e30 = function (path, paint) {
    Stats_instance.o2y();
    try {
      org_jetbrains_skia_Canvas__1nDrawPath(this.t2y_1, getPtr(path), getPtr(paint));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(path);
      reachabilityBarrier(paint);
    }
    return this;
  };
  protoOf(Canvas).f30 = function (picture, matrix, paint) {
    Stats_instance.o2y();
    try {
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
          var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
          var tmp = this.t2y_1;
          var tmp_0 = getPtr(picture);
          org_jetbrains_skia_Canvas__1nDrawPicture(tmp, tmp_0, $this$interopScope.h30(matrix == null ? null : matrix.g30_1), getPtr(paint));
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
            _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().mv();
          }
        }
      }
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(picture);
      reachabilityBarrier(paint);
    }
    return this;
  };
  protoOf(Canvas).w2m = function (color) {
    Stats_instance.o2y();
    try {
      org_jetbrains_skia_Canvas__1nClear(this.t2y_1, color);
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(Canvas).i30 = function () {
    Stats_instance.o2y();
    org_jetbrains_skia_Canvas__1nResetMatrix(this.t2y_1);
    return this;
  };
  protoOf(Canvas).j30 = function (r, mode, antiAlias) {
    Stats_instance.o2y();
    org_jetbrains_skia_Canvas__1nClipRect(this.t2y_1, r.a30_1, r.b30_1, r.c30_1, r.d30_1, mode.t9_1, antiAlias);
    return this;
  };
  protoOf(Canvas).k30 = function (r, mode, antiAlias) {
    Stats_instance.o2y();
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        org_jetbrains_skia_Canvas__1nClipRRect(this.t2y_1, r.a30_1, r.b30_1, r.c30_1, r.d30_1, $this$interopScope.h30(r.p30_1), r.p30_1.length, mode.t9_1, antiAlias);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().mv();
        }
      }
    }
    return this;
  };
  protoOf(Canvas).q30 = function (p, mode, antiAlias) {
    Stats_instance.o2y();
    try {
      org_jetbrains_skia_Canvas__1nClipPath(this.t2y_1, getPtr(p), mode.t9_1, antiAlias);
    }finally {
      reachabilityBarrier(p);
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(Canvas).h2w = function (dx, dy) {
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        Stats_instance.o2y();
        org_jetbrains_skia_Canvas__1nTranslate(this.t2y_1, dx, dy);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().mv();
        }
      }
    }
    return this;
  };
  protoOf(Canvas).r30 = function (matrix) {
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        Stats_instance.o2y();
        org_jetbrains_skia_Canvas__1nConcat44(this.t2y_1, $this$interopScope.h30(matrix.s30_1));
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().mv();
        }
      }
    }
    return this;
  };
  protoOf(Canvas).t30 = function () {
    var tmp;
    try {
      Stats_instance.o2y();
      tmp = org_jetbrains_skia_Canvas__1nSave(this.t2y_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Canvas).u30 = function (left, top, right, bottom, paint) {
    var tmp;
    try {
      Stats_instance.o2y();
      tmp = org_jetbrains_skia_Canvas__1nSaveLayerRect(this.t2y_1, left, top, right, bottom, getPtr(paint));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(paint);
    }
    return tmp;
  };
  protoOf(Canvas).v30 = function () {
    Stats_instance.o2y();
    org_jetbrains_skia_Canvas__1nRestore(this.t2y_1);
    return this;
  };
  var ClipMode_DIFFERENCE_instance;
  var ClipMode_INTERSECT_instance;
  var ClipMode_entriesInitialized;
  function ClipMode_initEntries() {
    if (ClipMode_entriesInitialized)
      return Unit_instance;
    ClipMode_entriesInitialized = true;
    ClipMode_DIFFERENCE_instance = new ClipMode('DIFFERENCE', 0);
    ClipMode_INTERSECT_instance = new ClipMode('INTERSECT', 1);
  }
  function ClipMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ClipMode_DIFFERENCE_getInstance() {
    ClipMode_initEntries();
    return ClipMode_DIFFERENCE_instance;
  }
  function ClipMode_INTERSECT_getInstance() {
    ClipMode_initEntries();
    return ClipMode_INTERSECT_instance;
  }
  function Color() {
    this.w30_1 = 0;
    this.x30_1 = -16777216;
    this.y30_1 = -1;
    this.z30_1 = -65536;
    this.a31_1 = -16711936;
    this.b31_1 = -16776961;
    this.c31_1 = -256;
    this.d31_1 = -16711681;
    this.e31_1 = -65281;
  }
  var Color_instance;
  function Color_getInstance() {
    return Color_instance;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    Companion_instance_40.m2y();
    this.f31_1 = ColorSpace_init_$Create$(org_jetbrains_skia_ColorSpace__1nMakeSRGB(), false);
    this.g31_1 = ColorSpace_init_$Create$(org_jetbrains_skia_ColorSpace__1nMakeSRGBLinear(), false);
    this.h31_1 = ColorSpace_init_$Create$(org_jetbrains_skia_ColorSpace__1nMakeDisplayP3(), false);
  }
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function ColorSpace_init_$Init$(ptr, managed, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_2().i31_1, managed);
    ColorSpace.call($this);
    return $this;
  }
  function ColorSpace_init_$Create$(ptr, managed) {
    return ColorSpace_init_$Init$(ptr, managed, objectCreate(protoOf(ColorSpace)));
  }
  function _FinalizerHolder_2() {
    _FinalizerHolder_instance_2 = this;
    this.i31_1 = org_jetbrains_skia_ColorSpace__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_2;
  function _FinalizerHolder_getInstance_2() {
    if (_FinalizerHolder_instance_2 == null)
      new _FinalizerHolder_2();
    return _FinalizerHolder_instance_2;
  }
  function ColorSpace() {
    Companion_getInstance_3();
  }
  function Companion_3() {
    Companion_instance_3 = this;
    Companion_instance_40.m2y();
  }
  protoOf(Companion_3).j31 = function (bytes, offset, length) {
    Stats_instance.o2y();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.Companion.makeFromBytes.<anonymous>' call
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        tmp$ret$1 = org_jetbrains_skia_Data__1nMakeFromBytes($this$interopScope.k31(bytes), offset, length);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().mv();
        }
      }
    }
    return new Data(tmp$ret$1);
  };
  protoOf(Companion_3).l31 = function (bytes, offset, length, $super) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? bytes.length : length;
    return $super === VOID ? this.j31(bytes, offset, length) : $super.j31.call(this, bytes, offset, length);
  };
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function _FinalizerHolder_3() {
    _FinalizerHolder_instance_3 = this;
    this.m31_1 = org_jetbrains_skia_Data__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_3;
  function _FinalizerHolder_getInstance_3() {
    if (_FinalizerHolder_instance_3 == null)
      new _FinalizerHolder_3();
    return _FinalizerHolder_instance_3;
  }
  function Data(ptr) {
    Companion_getInstance_4();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_3().m31_1);
    this.p31_1 = null;
  }
  protoOf(Data).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof Data ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherData = tmp;
    return this.u2y(otherData);
  };
  protoOf(Data).u2y = function (other) {
    var tmp;
    try {
      Stats_instance.o2y();
      tmp = org_jetbrains_skia_Data__1nEquals(this.t2y_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  function Companion_4() {
    Companion_instance_4 = this;
    Companion_instance_40.m2y();
  }
  protoOf(Companion_4).q31 = function () {
    Stats_instance.o2y();
    loadOpenGLLibrary();
    var ptr = org_jetbrains_skia_DirectContext__1nMakeGL();
    if (ptr === Companion_instance_41.p2y())
      throw new RenderException("Can't create OpenGL DirectContext");
    return new DirectContext(ptr);
  };
  var Companion_instance_4;
  function Companion_getInstance_5() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function DirectContext(ptr) {
    Companion_getInstance_5();
    RefCnt_init_$Init$(ptr, this);
  }
  protoOf(DirectContext).t31 = function () {
    Stats_instance.o2y();
    org_jetbrains_skia_DirectContext__1nFlush(this.t2y_1);
    return this;
  };
  function Companion_5() {
    Companion_instance_5 = this;
    Companion_instance_40.m2y();
  }
  var Companion_instance_5;
  function Companion_getInstance_6() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function Font_init_$Init$(ptr, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_4().x31_1);
    Font.call($this);
    return $this;
  }
  function Font_init_$Init$_0($this) {
    Font_init_$Init$(org_jetbrains_skia_Font__1nMakeDefault(), $this);
    Stats_instance.o2y();
    return $this;
  }
  function Font_init_$Create$() {
    return Font_init_$Init$_0(objectCreate(protoOf(Font)));
  }
  function Font_init_$Init$_1(typeface, size, $this) {
    Font_init_$Init$(org_jetbrains_skia_Font__1nMakeTypefaceSize(getPtr(typeface), size), $this);
    Stats_instance.o2y();
    reachabilityBarrier(typeface);
    return $this;
  }
  function Font_init_$Create$_0(typeface, size) {
    return Font_init_$Init$_1(typeface, size, objectCreate(protoOf(Font)));
  }
  function _FinalizerHolder_4() {
    _FinalizerHolder_instance_4 = this;
    this.x31_1 = org_jetbrains_skia_Font__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_4;
  function _FinalizerHolder_getInstance_4() {
    if (_FinalizerHolder_instance_4 == null)
      new _FinalizerHolder_4();
    return _FinalizerHolder_instance_4;
  }
  function Font$_get_metrics_$lambda_bxy7iq(this$0) {
    return function ($this$fromInteropPointer, it) {
      org_jetbrains_skia_Font__1nGetMetrics(this$0.t2y_1, it);
      return Unit_instance;
    };
  }
  protoOf(Font).u2y = function (other) {
    var tmp;
    try {
      tmp = org_jetbrains_skia_Font__1nEquals(this.t2y_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(Font).a32 = function () {
    var tmp;
    try {
      Stats_instance.o2y();
      var tmp_0 = Companion_instance_7;
      tmp = fromInteropPointer(tmp_0, Font$_get_metrics_$lambda_bxy7iq(this));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function Font() {
    Companion_getInstance_6();
  }
  function FontFeature$Companion$parseW3$lambda(it) {
    // Inline function 'kotlin.text.trim' call
    var tmp$ret$0 = toString(trim(isCharSequence(it) ? it : THROW_CCE()));
    var parts = split(tmp$ret$0, [' ']);
    var name = parts.n(0);
    var value = getOrNull(parts, 1);
    var tmp;
    switch (value) {
      case 'on':
      case null:
        tmp = 1;
        break;
      case 'off':
        tmp = 0;
        break;
      default:
        var tmp0_elvis_lhs = toIntOrNull(value);
        tmp = tmp0_elvis_lhs == null ? 1 : tmp0_elvis_lhs;
        break;
    }
    var value_0 = tmp;
    return name.length === 4 ? FontFeature_init_$Create$(name, value_0) : null;
  }
  function FontFeature_init_$Init$(feature, value, $this) {
    FontFeature.call($this, Companion_instance_12.b32(feature), value, _UInt___init__impl__l7qpdl(0), _UInt___init__impl__l7qpdl(-1));
    return $this;
  }
  function FontFeature_init_$Create$(feature, value) {
    return FontFeature_init_$Init$(feature, value, objectCreate(protoOf(FontFeature)));
  }
  function Companion_6() {
    Companion_instance_6 = this;
    this.c32_1 = _UInt___init__impl__l7qpdl(0);
    this.d32_1 = _UInt___init__impl__l7qpdl(-1);
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.e32_1 = fillArrayVal(Array(0), null);
    this.f32_1 = compilePattern('\\s+');
    this.g32_1 = compilePattern('([-+])?([a-z0-9]{4})(?:\\[(\\d+)?:(\\d+)?\\])?(?:=(\\d+))?');
    this.h32_1 = 1;
    this.i32_1 = 2;
    this.j32_1 = 3;
    this.k32_1 = 4;
    this.l32_1 = 5;
  }
  protoOf(Companion_6).m32 = function (str) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp = splitToSequence(str, [',']);
    var this_0 = toList(mapNotNull(tmp, FontFeature$Companion$parseW3$lambda));
    return copyToArray(this_0);
  };
  var Companion_instance_6;
  function Companion_getInstance_7() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function FontFeature(_tag, value, start, end) {
    Companion_getInstance_7();
    this.n32_1 = _tag;
    this.o32_1 = value;
    this.p32_1 = start;
    this.q32_1 = end;
  }
  protoOf(FontFeature).r32 = function () {
    return Companion_instance_12.s32(this.n32_1);
  };
  protoOf(FontFeature).toString = function () {
    var range = '';
    var tmp;
    // Inline function 'kotlin.UInt.compareTo' call
    var this_0 = this.p32_1;
    var other = _UInt___init__impl__l7qpdl(0);
    if (uintCompare(_UInt___get_data__impl__f0vqqw(this_0), _UInt___get_data__impl__f0vqqw(other)) > 0) {
      tmp = true;
    } else {
      // Inline function 'kotlin.UInt.compareTo' call
      var this_1 = this.q32_1;
      Companion_getInstance();
      var other_0 = _UInt___init__impl__l7qpdl(-1);
      tmp = uintCompare(_UInt___get_data__impl__f0vqqw(this_1), _UInt___get_data__impl__f0vqqw(other_0)) < 0;
    }
    if (tmp) {
      var tmp_0;
      // Inline function 'kotlin.UInt.compareTo' call
      var this_2 = this.p32_1;
      var other_1 = _UInt___init__impl__l7qpdl(0);
      if (uintCompare(_UInt___get_data__impl__f0vqqw(this_2), _UInt___get_data__impl__f0vqqw(other_1)) > 0) {
        tmp_0 = new UInt(this.p32_1);
      } else {
        tmp_0 = '';
      }
      var tmp_1 = '[' + tmp_0 + ':';
      var tmp_2;
      // Inline function 'kotlin.UInt.compareTo' call
      var this_3 = this.q32_1;
      Companion_getInstance();
      var other_2 = _UInt___init__impl__l7qpdl(-1);
      if (uintCompare(_UInt___get_data__impl__f0vqqw(this_3), _UInt___get_data__impl__f0vqqw(other_2)) < 0) {
        tmp_2 = new UInt(this.q32_1);
      } else {
        tmp_2 = '';
      }
      range = tmp_1 + toString(tmp_2) + ']';
    }
    var valuePrefix = '';
    var valueSuffix = '';
    if (this.o32_1 === 0)
      valuePrefix = '-';
    else if (this.o32_1 === 1)
      valuePrefix = '+';
    else
      valueSuffix = '=' + this.o32_1;
    return 'FontFeature(' + valuePrefix + this.n32_1 + range + valueSuffix + ')';
  };
  protoOf(FontFeature).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof FontFeature))
      return false;
    if (!(this.r32() === other.r32()))
      return false;
    if (!(this.o32_1 === other.o32_1))
      return false;
    if (!(this.p32_1 === other.p32_1))
      return false;
    return this.q32_1 === other.q32_1;
  };
  protoOf(FontFeature).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.n32_1 | 0;
    result = imul(result, PRIME) + this.o32_1 | 0;
    var tmp = imul(result, PRIME);
    // Inline function 'kotlin.UInt.toInt' call
    // Inline function 'kotlin.UInt.xor' call
    // Inline function 'kotlin.UInt.shr' call
    var this_0 = this.p32_1;
    var this_1 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_0) >>> 16 | 0);
    var other = this.p32_1;
    var this_2 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_1) ^ _UInt___get_data__impl__f0vqqw(other));
    result = tmp + _UInt___get_data__impl__f0vqqw(this_2) | 0;
    var tmp_0 = imul(result, PRIME);
    // Inline function 'kotlin.UInt.toInt' call
    // Inline function 'kotlin.UInt.xor' call
    // Inline function 'kotlin.UInt.shr' call
    var this_3 = this.q32_1;
    var this_4 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_3) >>> 16 | 0);
    var other_0 = this.q32_1;
    var this_5 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_4) ^ _UInt___get_data__impl__f0vqqw(other_0));
    result = tmp_0 + _UInt___get_data__impl__f0vqqw(this_5) | 0;
    return result;
  };
  function Companion_7() {
  }
  var Companion_instance_7;
  function Companion_getInstance_8() {
    return Companion_instance_7;
  }
  function FontMetrics(top, ascent, descent, bottom, leading, avgCharWidth, maxCharWidth, xMin, xMax, xHeight, capHeight, underlineThickness, underlinePosition, strikeoutThickness, strikeoutPosition) {
    this.t32_1 = top;
    this.u32_1 = ascent;
    this.v32_1 = descent;
    this.w32_1 = bottom;
    this.x32_1 = leading;
    this.y32_1 = avgCharWidth;
    this.z32_1 = maxCharWidth;
    this.a33_1 = xMin;
    this.b33_1 = xMax;
    this.c33_1 = xHeight;
    this.d33_1 = capHeight;
    this.e33_1 = underlineThickness;
    this.f33_1 = underlinePosition;
    this.g33_1 = strikeoutThickness;
    this.h33_1 = strikeoutPosition;
  }
  protoOf(FontMetrics).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof FontMetrics))
      return false;
    if (!(compareTo(this.t32_1, other.t32_1) === 0))
      return false;
    if (!(compareTo(this.u32_1, other.u32_1) === 0))
      return false;
    if (!(compareTo(this.v32_1, other.v32_1) === 0))
      return false;
    if (!(compareTo(this.w32_1, other.w32_1) === 0))
      return false;
    if (!(compareTo(this.x32_1, other.x32_1) === 0))
      return false;
    if (!(compareTo(this.y32_1, other.y32_1) === 0))
      return false;
    if (!(compareTo(this.z32_1, other.z32_1) === 0))
      return false;
    if (!(compareTo(this.a33_1, other.a33_1) === 0))
      return false;
    if (!(compareTo(this.b33_1, other.b33_1) === 0))
      return false;
    if (!(compareTo(this.c33_1, other.c33_1) === 0))
      return false;
    if (!(compareTo(this.d33_1, other.d33_1) === 0))
      return false;
    if (this.e33_1 == null ? !(other.e33_1 == null) : !(this.e33_1 == other.e33_1))
      return false;
    if (this.f33_1 == null ? !(other.f33_1 == null) : !(this.f33_1 == other.f33_1))
      return false;
    if (this.g33_1 == null ? !(other.g33_1 == null) : !(this.g33_1 == other.g33_1))
      return false;
    return !(this.h33_1 == null ? !(other.h33_1 == null) : !(this.h33_1 == other.h33_1));
  };
  protoOf(FontMetrics).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.t32_1) | 0;
    result = imul(result, PRIME) + toBits(this.u32_1) | 0;
    result = imul(result, PRIME) + toBits(this.v32_1) | 0;
    result = imul(result, PRIME) + toBits(this.w32_1) | 0;
    result = imul(result, PRIME) + toBits(this.x32_1) | 0;
    result = imul(result, PRIME) + toBits(this.y32_1) | 0;
    result = imul(result, PRIME) + toBits(this.z32_1) | 0;
    result = imul(result, PRIME) + toBits(this.a33_1) | 0;
    result = imul(result, PRIME) + toBits(this.b33_1) | 0;
    result = imul(result, PRIME) + toBits(this.c33_1) | 0;
    result = imul(result, PRIME) + toBits(this.d33_1) | 0;
    var tmp = imul(result, PRIME);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.e33_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(result, PRIME);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.f33_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    result = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    var tmp_1 = imul(result, PRIME);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_1 = this.g33_1;
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
    result = tmp_1 + (tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1) | 0;
    var tmp_2 = imul(result, PRIME);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_2 = this.h33_1;
    var tmp1_elvis_lhs_2 = tmp0_safe_receiver_2 == null ? null : hashCode(tmp0_safe_receiver_2);
    result = tmp_2 + (tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2) | 0;
    return result;
  };
  protoOf(FontMetrics).toString = function () {
    return 'FontMetrics(_top=' + this.t32_1 + ', _ascent=' + this.u32_1 + ', _descent=' + this.v32_1 + ', _bottom=' + this.w32_1 + ', _leading=' + this.x32_1 + ', _avgCharWidth=' + this.y32_1 + ', _maxCharWidth=' + this.z32_1 + ', _xMin=' + this.a33_1 + ', _xMax=' + this.b33_1 + ', _xHeight=' + this.c33_1 + ', _capHeight=' + this.d33_1 + ', _underlineThickness=' + this.e33_1 + ', _underlinePosition=' + this.f33_1 + ', _strikeoutThickness=' + this.g33_1 + ', _strikeoutPosition=' + this.h33_1 + ')';
  };
  function fromInteropPointer(_this__u8e3s4, block) {
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var result = new Float32Array(15);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        var handle = $this$interopScope.i33(result);
        block($this$interopScope, handle);
        $this$interopScope.j33(handle, result);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().mv();
        }
      }
    }
    return fromRawData(_this__u8e3s4, result);
  }
  function fromRawData(_this__u8e3s4, rawData) {
    var tmp = rawData[0];
    var tmp_0 = rawData[1];
    var tmp_1 = rawData[2];
    var tmp_2 = rawData[3];
    var tmp_3 = rawData[4];
    var tmp_4 = rawData[5];
    var tmp_5 = rawData[6];
    var tmp_6 = rawData[7];
    var tmp_7 = rawData[8];
    var tmp_8 = rawData[9];
    var tmp_9 = rawData[10];
    // Inline function 'org.jetbrains.skia.asNumberOrNull' call
    var this_0 = rawData[11];
    var tmp_10 = isNaN_0(this_0) ? null : this_0;
    // Inline function 'org.jetbrains.skia.asNumberOrNull' call
    var this_1 = rawData[12];
    var tmp_11 = isNaN_0(this_1) ? null : this_1;
    // Inline function 'org.jetbrains.skia.asNumberOrNull' call
    var this_2 = rawData[13];
    var tmp_12 = isNaN_0(this_2) ? null : this_2;
    // Inline function 'org.jetbrains.skia.asNumberOrNull' call
    var this_3 = rawData[14];
    var tmp$ret$3 = isNaN_0(this_3) ? null : this_3;
    return new FontMetrics(tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, tmp$ret$3);
  }
  function Companion_8() {
    Companion_instance_8 = this;
    Companion_instance_40.m2y();
    this.k33_1 = FontMgr_init_$Create$(org_jetbrains_skia_FontMgr__1nDefault(), false);
  }
  var Companion_instance_8;
  function Companion_getInstance_9() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function FontMgr_init_$Init$(ptr, $this) {
    RefCnt_init_$Init$(ptr, $this);
    FontMgr.call($this);
    return $this;
  }
  function FontMgr_init_$Init$_0(ptr, allowClose, $this) {
    RefCnt_init_$Init$_0(ptr, allowClose, $this);
    FontMgr.call($this);
    return $this;
  }
  function FontMgr_init_$Create$(ptr, allowClose) {
    return FontMgr_init_$Init$_0(ptr, allowClose, objectCreate(protoOf(FontMgr)));
  }
  function FontMgr() {
    Companion_getInstance_9();
  }
  var FontSlant_UPRIGHT_instance;
  var FontSlant_ITALIC_instance;
  var FontSlant_OBLIQUE_instance;
  function values_0() {
    return [FontSlant_UPRIGHT_getInstance(), FontSlant_ITALIC_getInstance(), FontSlant_OBLIQUE_getInstance()];
  }
  var FontSlant_entriesInitialized;
  function FontSlant_initEntries() {
    if (FontSlant_entriesInitialized)
      return Unit_instance;
    FontSlant_entriesInitialized = true;
    FontSlant_UPRIGHT_instance = new FontSlant('UPRIGHT', 0);
    FontSlant_ITALIC_instance = new FontSlant('ITALIC', 1);
    FontSlant_OBLIQUE_instance = new FontSlant('OBLIQUE', 2);
  }
  function FontSlant(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function FontSlant_UPRIGHT_getInstance() {
    FontSlant_initEntries();
    return FontSlant_UPRIGHT_instance;
  }
  function FontSlant_ITALIC_getInstance() {
    FontSlant_initEntries();
    return FontSlant_ITALIC_instance;
  }
  function FontSlant_OBLIQUE_getInstance() {
    FontSlant_initEntries();
    return FontSlant_OBLIQUE_instance;
  }
  function FontStyle_init_$Init$(weight, width, slant, $this) {
    FontStyle.call($this);
    $this.l33_1 = weight & 65535 | (width & 255) << 16 | slant.t9_1 << 24;
    return $this;
  }
  function FontStyle_init_$Create$(weight, width, slant) {
    return FontStyle_init_$Init$(weight, width, slant, objectCreate(protoOf(FontStyle)));
  }
  function FontStyle_init_$Init$_0(value, $this) {
    FontStyle.call($this);
    $this.l33_1 = value;
    return $this;
  }
  function FontStyle_init_$Create$_0(value) {
    return FontStyle_init_$Init$_0(value, objectCreate(protoOf(FontStyle)));
  }
  function Companion_9() {
    Companion_instance_9 = this;
    var tmp = this;
    tmp.m33_1 = FontStyle_init_$Create$(400, 5, FontSlant_UPRIGHT_getInstance());
    var tmp_0 = this;
    tmp_0.n33_1 = FontStyle_init_$Create$(700, 5, FontSlant_UPRIGHT_getInstance());
    var tmp_1 = this;
    tmp_1.o33_1 = FontStyle_init_$Create$(400, 5, FontSlant_ITALIC_getInstance());
    var tmp_2 = this;
    tmp_2.p33_1 = FontStyle_init_$Create$(700, 5, FontSlant_ITALIC_getInstance());
  }
  var Companion_instance_9;
  function Companion_getInstance_10() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  protoOf(FontStyle).q33 = function () {
    return this.l33_1 & 65535;
  };
  protoOf(FontStyle).r33 = function (weight) {
    return FontStyle_init_$Create$(weight, this.e2w(), this.s33());
  };
  protoOf(FontStyle).e2w = function () {
    return this.l33_1 >> 16 & 255;
  };
  protoOf(FontStyle).s33 = function () {
    return values_0()[this.l33_1 >> 24 & 255];
  };
  protoOf(FontStyle).toString = function () {
    return 'FontStyle(weight=' + this.q33() + ', width=' + this.e2w() + ', slant=' + this.s33() + ')';
  };
  protoOf(FontStyle).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof FontStyle))
      return false;
    return this.l33_1 === other.l33_1;
  };
  protoOf(FontStyle).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.l33_1 | 0;
    return result;
  };
  function FontStyle() {
    Companion_getInstance_10();
  }
  function Companion_10() {
    this.t33_1 = 0;
    this.u33_1 = 100;
    this.v33_1 = 200;
    this.w33_1 = 300;
    this.x33_1 = 400;
    this.y33_1 = 500;
    this.z33_1 = 600;
    this.a34_1 = 700;
    this.b34_1 = 800;
    this.c34_1 = 900;
    this.d34_1 = 1000;
  }
  var Companion_instance_10;
  function Companion_getInstance_11() {
    return Companion_instance_10;
  }
  function Companion_11() {
    this.e34_1 = 1;
    this.f34_1 = 2;
    this.g34_1 = 3;
    this.h34_1 = 4;
    this.i34_1 = 5;
    this.j34_1 = 6;
    this.k34_1 = 7;
    this.l34_1 = 8;
    this.m34_1 = 9;
  }
  var Companion_instance_11;
  function Companion_getInstance_12() {
    return Companion_instance_11;
  }
  function Companion_12() {
  }
  protoOf(Companion_12).b32 = function (name) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(name.length === 4)) {
      // Inline function 'org.jetbrains.skia.Companion.fromString.<anonymous>' call
      var message = "Name must be exactly 4 symbols, got: '" + name + "'";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.code' call
    var this_0 = charSequenceGet(name, 0);
    var tmp = (Char__toInt_impl_vasixd(this_0) & 255) << 24;
    // Inline function 'kotlin.code' call
    var this_1 = charSequenceGet(name, 1);
    var tmp_0 = tmp | (Char__toInt_impl_vasixd(this_1) & 255) << 16;
    // Inline function 'kotlin.code' call
    var this_2 = charSequenceGet(name, 2);
    var tmp_1 = tmp_0 | (Char__toInt_impl_vasixd(this_2) & 255) << 8;
    // Inline function 'kotlin.code' call
    var this_3 = charSequenceGet(name, 3);
    return tmp_1 | Char__toInt_impl_vasixd(this_3) & 255;
  };
  protoOf(Companion_12).s32 = function (tag) {
    // Inline function 'kotlin.charArrayOf' call
    var tmp$ret$0 = charArrayOf([numberToChar(tag >> 24 & 255), numberToChar(tag >> 16 & 255), numberToChar(tag >> 8 & 255), numberToChar(tag & 255)]);
    return concatToString(tmp$ret$0);
  };
  var Companion_instance_12;
  function Companion_getInstance_13() {
    return Companion_instance_12;
  }
  function Companion_13() {
  }
  var Companion_instance_13;
  function Companion_getInstance_14() {
    return Companion_instance_13;
  }
  function IRange(start, end) {
    this.n34_1 = start;
    this.o34_1 = end;
  }
  protoOf(IRange).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof IRange))
      return false;
    if (!(this.n34_1 === other.n34_1))
      return false;
    return this.o34_1 === other.o34_1;
  };
  protoOf(IRange).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.n34_1 | 0;
    result = imul(result, PRIME) + this.o34_1 | 0;
    return result;
  };
  protoOf(IRange).toString = function () {
    return 'IRange(_start=' + this.n34_1 + ', _end=' + this.o34_1 + ')';
  };
  function fromInteropPointer_0(_this__u8e3s4, block) {
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var result = new Int32Array(2);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        var handle = $this$interopScope.p34(result);
        block($this$interopScope, handle);
        $this$interopScope.u2z(handle, result);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().mv();
        }
      }
    }
    var result_0 = result;
    return new IRange(result_0[0], result_0[1]);
  }
  function Companion_14() {
    Companion_instance_14 = this;
    Companion_instance_40.m2y();
  }
  var Companion_instance_14;
  function Companion_getInstance_15() {
    if (Companion_instance_14 == null)
      new Companion_14();
    return Companion_instance_14;
  }
  function ManagedString_init_$Init$(s, $this) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.ManagedString.<init>.<anonymous>' call
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        tmp$ret$1 = org_jetbrains_skia_ManagedString__1nMake($this$interopScope.x2y(s));
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().mv();
        }
      }
    }
    ManagedString.call($this, tmp$ret$1);
    Stats_instance.o2y();
    return $this;
  }
  function ManagedString_init_$Create$(s) {
    return ManagedString_init_$Init$(s, objectCreate(protoOf(ManagedString)));
  }
  function _FinalizerHolder_5() {
    _FinalizerHolder_instance_5 = this;
    this.q34_1 = org_jetbrains_skia_ManagedString__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_5;
  function _FinalizerHolder_getInstance_5() {
    if (_FinalizerHolder_instance_5 == null)
      new _FinalizerHolder_5();
    return _FinalizerHolder_instance_5;
  }
  function ManagedString(ptr, managed) {
    Companion_getInstance_15();
    managed = managed === VOID ? true : managed;
    Managed.call(this, ptr, _FinalizerHolder_getInstance_5().q34_1, managed);
  }
  protoOf(ManagedString).toString = function () {
    var tmp;
    try {
      Stats_instance.o2y();
      var size = org_jetbrains_skia_ManagedString__nStringSize(this.t2y_1);
      // Inline function 'org.jetbrains.skia.impl.withResult' call
      var result = new Int8Array(size);
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
          // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
          var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
          var handle = $this$interopScope.r34(result);
          // Inline function 'org.jetbrains.skia.ManagedString.toString.<anonymous>' call
          org_jetbrains_skia_ManagedString__nStringData(this.t2y_1, handle, size);
          $this$interopScope.s34(handle, result);
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
            _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().mv();
          }
        }
      }
      tmp = decodeToString(result);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ManagedString).v34 = function (s) {
    Stats_instance.o2y();
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        org_jetbrains_skia_ManagedString__1nAppend(this.t2y_1, $this$interopScope.x2y(s));
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().mv();
        }
      }
    }
    return this;
  };
  function Companion_15() {
    Companion_instance_15 = this;
    this.w34_1 = this.x34(0.0, 0.0);
  }
  protoOf(Companion_15).x34 = function (dx, dy) {
    return new Matrix33(new Float32Array([1.0, 0.0, dx, 0.0, 1.0, dy, 0.0, 0.0, 1.0]));
  };
  var Companion_instance_15;
  function Companion_getInstance_16() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function Matrix33(mat) {
    Companion_getInstance_16();
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(mat.length === 9)) {
      // Inline function 'org.jetbrains.skia.Matrix33.<anonymous>' call
      var message = 'Expected 9 elements, got ' + mat.length;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.g30_1 = mat;
  }
  protoOf(Matrix33).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Matrix33))
      return false;
    return contentEquals(this.g30_1, other.g30_1);
  };
  protoOf(Matrix33).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + contentHashCode(this.g30_1) | 0;
    return result;
  };
  protoOf(Matrix33).toString = function () {
    return 'Matrix33(_mat=' + this.g30_1 + ')';
  };
  function Companion_16() {
    Companion_instance_16 = this;
    this.y34_1 = new Matrix44(new Float32Array([1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]));
  }
  var Companion_instance_16;
  function Companion_getInstance_17() {
    if (Companion_instance_16 == null)
      new Companion_16();
    return Companion_instance_16;
  }
  function Matrix44(mat) {
    Companion_getInstance_17();
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(mat.length === 16)) {
      // Inline function 'org.jetbrains.skia.Matrix44.<anonymous>' call
      var message = 'Expected 16 elements, got ' + mat.length;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.s30_1 = mat;
  }
  protoOf(Matrix44).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Matrix44))
      return false;
    return contentEquals(this.s30_1, other.s30_1);
  };
  protoOf(Matrix44).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + contentHashCode(this.s30_1) | 0;
    return result;
  };
  protoOf(Matrix44).toString = function () {
    return 'Matrix44(_mat=' + this.s30_1 + ')';
  };
  function Companion_17() {
    Companion_instance_17 = this;
    Companion_instance_40.m2y();
  }
  var Companion_instance_17;
  function Companion_getInstance_18() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function _FinalizerHolder_6() {
    _FinalizerHolder_instance_6 = this;
    this.z34_1 = org_jetbrains_skia_Paint__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_6;
  function _FinalizerHolder_getInstance_6() {
    if (_FinalizerHolder_instance_6 == null)
      new _FinalizerHolder_6();
    return _FinalizerHolder_instance_6;
  }
  function Paint_init_$Init$($this) {
    Managed.call($this, org_jetbrains_skia_Paint__1nMake(), _FinalizerHolder_getInstance_6().z34_1);
    Paint.call($this);
    Stats_instance.o2y();
    return $this;
  }
  function Paint_init_$Create$() {
    return Paint_init_$Init$(objectCreate(protoOf(Paint)));
  }
  protoOf(Paint).u2y = function (other) {
    var tmp;
    try {
      tmp = org_jetbrains_skia_Paint__1nEquals(this.t2y_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(Paint).c35 = function (value) {
    var tmp;
    try {
      Stats_instance.o2y();
      org_jetbrains_skia_Paint__1nSetMode(this.t2y_1, value.t9_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).d35 = function (value) {
    var tmp;
    try {
      Stats_instance.o2y();
      org_jetbrains_skia_Paint__1nSetColor(this.t2y_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).e35 = function () {
    var tmp;
    try {
      Stats_instance.o2y();
      tmp = org_jetbrains_skia_Paint__1nGetColor(this.t2y_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).f35 = function (value) {
    var tmp;
    try {
      Stats_instance.o2y();
      org_jetbrains_skia_Paint__1nSetStrokeWidth(this.t2y_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).g35 = function () {
    var tmp;
    try {
      Stats_instance.o2y();
      tmp = org_jetbrains_skia_Paint__1nGetStrokeWidth(this.t2y_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).h35 = function (value) {
    var tmp;
    try {
      Stats_instance.o2y();
      org_jetbrains_skia_Paint__1nSetStrokeMiter(this.t2y_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).i35 = function (value) {
    var tmp;
    try {
      Stats_instance.o2y();
      org_jetbrains_skia_Paint__1nSetStrokeCap(this.t2y_1, value.t9_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).j35 = function (value) {
    var tmp;
    try {
      Stats_instance.o2y();
      org_jetbrains_skia_Paint__1nSetStrokeJoin(this.t2y_1, value.t9_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).k35 = function (value) {
    var tmp;
    try {
      Stats_instance.o2y();
      org_jetbrains_skia_Paint__1nSetShader(this.t2y_1, getPtr(value));
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(value);
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).l35 = function (value) {
    var tmp;
    try {
      Stats_instance.o2y();
      org_jetbrains_skia_Paint__1nSetColorFilter(this.t2y_1, getPtr(value));
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(value);
    }
    return tmp;
  };
  protoOf(Paint).m35 = function (value) {
    var tmp;
    try {
      Stats_instance.o2y();
      org_jetbrains_skia_Paint__1nSetBlendMode(this.t2y_1, value.t9_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).n35 = function () {
    var tmp;
    try {
      Stats_instance.o2y();
      tmp = values()[org_jetbrains_skia_Paint__1nGetBlendMode(this.t2y_1)];
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).o35 = function () {
    return this.n35().equals(BlendMode_SRC_OVER_getInstance());
  };
  protoOf(Paint).p35 = function (value) {
    var tmp;
    try {
      Stats_instance.o2y();
      org_jetbrains_skia_Paint__1nSetPathEffect(this.t2y_1, getPtr(value));
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(value);
    }
    return tmp;
  };
  protoOf(Paint).q35 = function (value) {
    var tmp;
    try {
      Stats_instance.o2y();
      org_jetbrains_skia_Paint__1nSetImageFilter(this.t2y_1, getPtr(value));
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(value);
    }
    return tmp;
  };
  function Paint() {
    Companion_getInstance_18();
  }
  var PaintMode_FILL_instance;
  var PaintMode_STROKE_instance;
  var PaintMode_STROKE_AND_FILL_instance;
  var PaintMode_entriesInitialized;
  function PaintMode_initEntries() {
    if (PaintMode_entriesInitialized)
      return Unit_instance;
    PaintMode_entriesInitialized = true;
    PaintMode_FILL_instance = new PaintMode('FILL', 0);
    PaintMode_STROKE_instance = new PaintMode('STROKE', 1);
    PaintMode_STROKE_AND_FILL_instance = new PaintMode('STROKE_AND_FILL', 2);
  }
  function PaintMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PaintMode_FILL_getInstance() {
    PaintMode_initEntries();
    return PaintMode_FILL_instance;
  }
  function PaintMode_STROKE_getInstance() {
    PaintMode_initEntries();
    return PaintMode_STROKE_instance;
  }
  var PaintStrokeCap_BUTT_instance;
  var PaintStrokeCap_ROUND_instance;
  var PaintStrokeCap_SQUARE_instance;
  var PaintStrokeCap_entriesInitialized;
  function PaintStrokeCap_initEntries() {
    if (PaintStrokeCap_entriesInitialized)
      return Unit_instance;
    PaintStrokeCap_entriesInitialized = true;
    PaintStrokeCap_BUTT_instance = new PaintStrokeCap('BUTT', 0);
    PaintStrokeCap_ROUND_instance = new PaintStrokeCap('ROUND', 1);
    PaintStrokeCap_SQUARE_instance = new PaintStrokeCap('SQUARE', 2);
  }
  function PaintStrokeCap(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PaintStrokeCap_BUTT_getInstance() {
    PaintStrokeCap_initEntries();
    return PaintStrokeCap_BUTT_instance;
  }
  function PaintStrokeCap_ROUND_getInstance() {
    PaintStrokeCap_initEntries();
    return PaintStrokeCap_ROUND_instance;
  }
  function PaintStrokeCap_SQUARE_getInstance() {
    PaintStrokeCap_initEntries();
    return PaintStrokeCap_SQUARE_instance;
  }
  var PaintStrokeJoin_MITER_instance;
  var PaintStrokeJoin_ROUND_instance;
  var PaintStrokeJoin_BEVEL_instance;
  var PaintStrokeJoin_entriesInitialized;
  function PaintStrokeJoin_initEntries() {
    if (PaintStrokeJoin_entriesInitialized)
      return Unit_instance;
    PaintStrokeJoin_entriesInitialized = true;
    PaintStrokeJoin_MITER_instance = new PaintStrokeJoin('MITER', 0);
    PaintStrokeJoin_ROUND_instance = new PaintStrokeJoin('ROUND', 1);
    PaintStrokeJoin_BEVEL_instance = new PaintStrokeJoin('BEVEL', 2);
  }
  function PaintStrokeJoin(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PaintStrokeJoin_MITER_getInstance() {
    PaintStrokeJoin_initEntries();
    return PaintStrokeJoin_MITER_instance;
  }
  function PaintStrokeJoin_ROUND_getInstance() {
    PaintStrokeJoin_initEntries();
    return PaintStrokeJoin_ROUND_instance;
  }
  function PaintStrokeJoin_BEVEL_getInstance() {
    PaintStrokeJoin_initEntries();
    return PaintStrokeJoin_BEVEL_instance;
  }
  function Companion_18() {
    Companion_instance_18 = this;
    Companion_instance_40.m2y();
  }
  protoOf(Companion_18).r35 = function (one, two, op) {
    var tmp;
    try {
      Stats_instance.o2y();
      var ptr = org_jetbrains_skia_Path__1nMakeCombining(getPtr(one), getPtr(two), op.t9_1);
      tmp = ptr === Companion_instance_41.p2y() ? null : new Path(ptr);
    }finally {
      reachabilityBarrier(one);
      reachabilityBarrier(two);
    }
    return tmp;
  };
  var Companion_instance_18;
  function Companion_getInstance_19() {
    if (Companion_instance_18 == null)
      new Companion_18();
    return Companion_instance_18;
  }
  function _FinalizerHolder_7() {
    _FinalizerHolder_instance_7 = this;
    this.s35_1 = org_jetbrains_skia_Path__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_7;
  function _FinalizerHolder_getInstance_7() {
    if (_FinalizerHolder_instance_7 == null)
      new _FinalizerHolder_7();
    return _FinalizerHolder_instance_7;
  }
  function Path_init_$Init$($this) {
    Path.call($this, org_jetbrains_skia_Path__1nMake());
    Stats_instance.o2y();
    return $this;
  }
  function Path_init_$Create$() {
    return Path_init_$Init$(objectCreate(protoOf(Path)));
  }
  function Path(ptr) {
    Companion_getInstance_19();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_7().s35_1);
  }
  protoOf(Path).u2y = function (other) {
    var tmp;
    try {
      tmp = org_jetbrains_skia_Path__1nEquals(this.t2y_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(Path).v35 = function (value) {
    var tmp;
    try {
      Stats_instance.o2y();
      org_jetbrains_skia_Path__1nSetFillMode(this.t2y_1, value.t9_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Path).w35 = function () {
    var tmp;
    try {
      Stats_instance.o2y();
      tmp = values_1()[org_jetbrains_skia_Path__1nGetFillMode(this.t2y_1)];
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Path).x35 = function () {
    Stats_instance.o2y();
    org_jetbrains_skia_Path__1nReset(this.t2y_1);
    return this;
  };
  protoOf(Path).o1o = function () {
    var tmp;
    try {
      Stats_instance.o2y();
      tmp = org_jetbrains_skia_Path__1nIsEmpty(this.t2y_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Path).y35 = function (rect, dir, start) {
    Stats_instance.o2y();
    org_jetbrains_skia_Path__1nAddRect(this.t2y_1, rect.a30_1, rect.b30_1, rect.c30_1, rect.d30_1, dir.t9_1, start);
    return this;
  };
  protoOf(Path).z35 = function (rect, dir, start, $super) {
    dir = dir === VOID ? PathDirection_CLOCKWISE_getInstance() : dir;
    start = start === VOID ? 0 : start;
    return $super === VOID ? this.y35(rect, dir, start) : $super.y35.call(this, rect, dir, start);
  };
  protoOf(Path).a36 = function (rrect, dir, start) {
    Stats_instance.o2y();
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        org_jetbrains_skia_Path__1nAddRRect(this.t2y_1, rrect.a30_1, rrect.b30_1, rrect.c30_1, rrect.d30_1, $this$interopScope.h30(rrect.p30_1), rrect.p30_1.length, dir.t9_1, start);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().mv();
        }
      }
    }
    return this;
  };
  protoOf(Path).b36 = function (rrect, dir, start, $super) {
    dir = dir === VOID ? PathDirection_CLOCKWISE_getInstance() : dir;
    start = start === VOID ? 6 : start;
    return $super === VOID ? this.a36(rrect, dir, start) : $super.a36.call(this, rrect, dir, start);
  };
  protoOf(Path).c36 = function (src, dx, dy, extend) {
    var tmp;
    try {
      Stats_instance.o2y();
      org_jetbrains_skia_Path__1nAddPathOffset(this.t2y_1, getPtr(src), dx, dy, extend);
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(src);
    }
    return tmp;
  };
  protoOf(Path).d36 = function (src, dx, dy, extend, $super) {
    extend = extend === VOID ? false : extend;
    return $super === VOID ? this.c36(src, dx, dy, extend) : $super.c36.call(this, src, dx, dy, extend);
  };
  protoOf(Path).e36 = function (matrix, dst, applyPerspectiveClip) {
    var tmp;
    try {
      Stats_instance.o2y();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
          var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
          org_jetbrains_skia_Path__1nTransform(this.t2y_1, $this$interopScope.h30(matrix.g30_1), getPtr(dst), applyPerspectiveClip);
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
            _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().mv();
          }
        }
      }
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(dst);
    }
    return tmp;
  };
  protoOf(Path).f36 = function (matrix, dst, applyPerspectiveClip, $super) {
    dst = dst === VOID ? null : dst;
    applyPerspectiveClip = applyPerspectiveClip === VOID ? true : applyPerspectiveClip;
    return $super === VOID ? this.e36(matrix, dst, applyPerspectiveClip) : $super.e36.call(this, matrix, dst, applyPerspectiveClip);
  };
  protoOf(Path).o = function () {
    return this.g36(false);
  };
  protoOf(Path).g36 = function (forceClose) {
    return Companion_getInstance_20().h36(this, forceClose);
  };
  var PathDirection_CLOCKWISE_instance;
  var PathDirection_COUNTER_CLOCKWISE_instance;
  var PathDirection_entriesInitialized;
  function PathDirection_initEntries() {
    if (PathDirection_entriesInitialized)
      return Unit_instance;
    PathDirection_entriesInitialized = true;
    PathDirection_CLOCKWISE_instance = new PathDirection('CLOCKWISE', 0);
    PathDirection_COUNTER_CLOCKWISE_instance = new PathDirection('COUNTER_CLOCKWISE', 1);
  }
  function PathDirection(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PathDirection_CLOCKWISE_getInstance() {
    PathDirection_initEntries();
    return PathDirection_CLOCKWISE_instance;
  }
  function PathDirection_COUNTER_CLOCKWISE_getInstance() {
    PathDirection_initEntries();
    return PathDirection_COUNTER_CLOCKWISE_instance;
  }
  var PathFillMode_WINDING_instance;
  var PathFillMode_EVEN_ODD_instance;
  var PathFillMode_INVERSE_WINDING_instance;
  var PathFillMode_INVERSE_EVEN_ODD_instance;
  function values_1() {
    return [PathFillMode_WINDING_getInstance(), PathFillMode_EVEN_ODD_getInstance(), PathFillMode_INVERSE_WINDING_getInstance(), PathFillMode_INVERSE_EVEN_ODD_getInstance()];
  }
  var PathFillMode_entriesInitialized;
  function PathFillMode_initEntries() {
    if (PathFillMode_entriesInitialized)
      return Unit_instance;
    PathFillMode_entriesInitialized = true;
    PathFillMode_WINDING_instance = new PathFillMode('WINDING', 0);
    PathFillMode_EVEN_ODD_instance = new PathFillMode('EVEN_ODD', 1);
    PathFillMode_INVERSE_WINDING_instance = new PathFillMode('INVERSE_WINDING', 2);
    PathFillMode_INVERSE_EVEN_ODD_instance = new PathFillMode('INVERSE_EVEN_ODD', 3);
  }
  function PathFillMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PathFillMode_WINDING_getInstance() {
    PathFillMode_initEntries();
    return PathFillMode_WINDING_instance;
  }
  function PathFillMode_EVEN_ODD_getInstance() {
    PathFillMode_initEntries();
    return PathFillMode_EVEN_ODD_instance;
  }
  function PathFillMode_INVERSE_WINDING_getInstance() {
    PathFillMode_initEntries();
    return PathFillMode_INVERSE_WINDING_instance;
  }
  function PathFillMode_INVERSE_EVEN_ODD_getInstance() {
    PathFillMode_initEntries();
    return PathFillMode_INVERSE_EVEN_ODD_instance;
  }
  var PathOp_DIFFERENCE_instance;
  var PathOp_INTERSECT_instance;
  var PathOp_UNION_instance;
  var PathOp_XOR_instance;
  var PathOp_REVERSE_DIFFERENCE_instance;
  var PathOp_entriesInitialized;
  function PathOp_initEntries() {
    if (PathOp_entriesInitialized)
      return Unit_instance;
    PathOp_entriesInitialized = true;
    PathOp_DIFFERENCE_instance = new PathOp('DIFFERENCE', 0);
    PathOp_INTERSECT_instance = new PathOp('INTERSECT', 1);
    PathOp_UNION_instance = new PathOp('UNION', 2);
    PathOp_XOR_instance = new PathOp('XOR', 3);
    PathOp_REVERSE_DIFFERENCE_instance = new PathOp('REVERSE_DIFFERENCE', 4);
  }
  function PathOp(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PathOp_DIFFERENCE_getInstance() {
    PathOp_initEntries();
    return PathOp_DIFFERENCE_instance;
  }
  function PathOp_INTERSECT_getInstance() {
    PathOp_initEntries();
    return PathOp_INTERSECT_instance;
  }
  function PathOp_UNION_getInstance() {
    PathOp_initEntries();
    return PathOp_UNION_instance;
  }
  function PathOp_XOR_getInstance() {
    PathOp_initEntries();
    return PathOp_XOR_instance;
  }
  function PathOp_REVERSE_DIFFERENCE_getInstance() {
    PathOp_initEntries();
    return PathOp_REVERSE_DIFFERENCE_instance;
  }
  function PathSegment_init_$Init$(verbOrdinal, x0, y0, isClosedContour, $this) {
    PathSegment.call($this, values_2()[verbOrdinal], new Point(x0, y0), null, null, null, 0.0, false, isClosedContour);
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(verbOrdinal === PathVerb_MOVE_getInstance().t9_1 ? true : verbOrdinal === PathVerb_CLOSE_getInstance().t9_1)) {
      // Inline function 'org.jetbrains.skia.PathSegment.<init>.<anonymous>' call
      var message = 'Expected MOVE or CLOSE, got ' + values_2()[verbOrdinal];
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return $this;
  }
  function PathSegment_init_$Create$(verbOrdinal, x0, y0, isClosedContour) {
    return PathSegment_init_$Init$(verbOrdinal, x0, y0, isClosedContour, objectCreate(protoOf(PathSegment)));
  }
  function PathSegment_init_$Init$_0(x0, y0, x1, y1, isCloseLine, isClosedContour, $this) {
    PathSegment.call($this, PathVerb_LINE_getInstance(), new Point(x0, y0), new Point(x1, y1), null, null, 0.0, isCloseLine, isClosedContour);
    return $this;
  }
  function PathSegment_init_$Create$_0(x0, y0, x1, y1, isCloseLine, isClosedContour) {
    return PathSegment_init_$Init$_0(x0, y0, x1, y1, isCloseLine, isClosedContour, objectCreate(protoOf(PathSegment)));
  }
  function PathSegment_init_$Init$_1(x0, y0, x1, y1, x2, y2, isClosedContour, $this) {
    PathSegment.call($this, PathVerb_QUAD_getInstance(), new Point(x0, y0), new Point(x1, y1), new Point(x2, y2), null, 0.0, false, isClosedContour);
    return $this;
  }
  function PathSegment_init_$Create$_1(x0, y0, x1, y1, x2, y2, isClosedContour) {
    return PathSegment_init_$Init$_1(x0, y0, x1, y1, x2, y2, isClosedContour, objectCreate(protoOf(PathSegment)));
  }
  function PathSegment_init_$Init$_2(x0, y0, x1, y1, x2, y2, conicWeight, isClosedContour, $this) {
    PathSegment.call($this, PathVerb_CONIC_getInstance(), new Point(x0, y0), new Point(x1, y1), new Point(x2, y2), null, conicWeight, false, isClosedContour);
    return $this;
  }
  function PathSegment_init_$Create$_2(x0, y0, x1, y1, x2, y2, conicWeight, isClosedContour) {
    return PathSegment_init_$Init$_2(x0, y0, x1, y1, x2, y2, conicWeight, isClosedContour, objectCreate(protoOf(PathSegment)));
  }
  function PathSegment_init_$Init$_3(x0, y0, x1, y1, x2, y2, x3, y3, isClosedContour, $this) {
    PathSegment.call($this, PathVerb_CUBIC_getInstance(), new Point(x0, y0), new Point(x1, y1), new Point(x2, y2), new Point(x3, y3), 0.0, false, isClosedContour);
    return $this;
  }
  function PathSegment_init_$Create$_3(x0, y0, x1, y1, x2, y2, x3, y3, isClosedContour) {
    return PathSegment_init_$Init$_3(x0, y0, x1, y1, x2, y2, x3, y3, isClosedContour, objectCreate(protoOf(PathSegment)));
  }
  function PathSegment(verb, p0, p1, p2, p3, conicWeight, isCloseLine, isClosedContour) {
    verb = verb === VOID ? PathVerb_DONE_getInstance() : verb;
    p0 = p0 === VOID ? null : p0;
    p1 = p1 === VOID ? null : p1;
    p2 = p2 === VOID ? null : p2;
    p3 = p3 === VOID ? null : p3;
    conicWeight = conicWeight === VOID ? 0.0 : conicWeight;
    isCloseLine = isCloseLine === VOID ? false : isCloseLine;
    isClosedContour = isClosedContour === VOID ? false : isClosedContour;
    this.i36_1 = verb;
    this.j36_1 = p0;
    this.k36_1 = p1;
    this.l36_1 = p2;
    this.m36_1 = p3;
    this.n36_1 = conicWeight;
    this.o36_1 = isCloseLine;
    this.p36_1 = isClosedContour;
  }
  protoOf(PathSegment).toString = function () {
    return 'Segment(verb=' + this.i36_1 + (!this.i36_1.equals(PathVerb_DONE_getInstance()) ? ', p0=' + this.j36_1 : '') + ((((this.i36_1.equals(PathVerb_LINE_getInstance()) ? true : this.i36_1.equals(PathVerb_QUAD_getInstance())) ? true : this.i36_1.equals(PathVerb_CONIC_getInstance())) ? true : this.i36_1.equals(PathVerb_CUBIC_getInstance())) ? ', p1=' + this.k36_1 : '') + (((this.i36_1.equals(PathVerb_QUAD_getInstance()) ? true : this.i36_1.equals(PathVerb_CONIC_getInstance())) ? true : this.i36_1.equals(PathVerb_CUBIC_getInstance())) ? ', p2=' + this.l36_1 : '') + (this.i36_1.equals(PathVerb_CUBIC_getInstance()) ? ', p3=' + this.m36_1 : '') + (this.i36_1.equals(PathVerb_CONIC_getInstance()) ? ', conicWeight=' + this.n36_1 : '') + (this.i36_1.equals(PathVerb_LINE_getInstance()) ? ', closeLine=' + this.o36_1 : '') + (!this.i36_1.equals(PathVerb_DONE_getInstance()) ? ', closedContour=' + this.p36_1 : '') + ')';
  };
  protoOf(PathSegment).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PathSegment))
      return false;
    return ((((((this.i36_1.equals(other.i36_1) ? !this.i36_1.equals(PathVerb_DONE_getInstance()) ? equals(this.j36_1, other.j36_1) : true : false) ? (((this.i36_1.equals(PathVerb_LINE_getInstance()) ? true : this.i36_1.equals(PathVerb_QUAD_getInstance())) ? true : this.i36_1.equals(PathVerb_CONIC_getInstance())) ? true : this.i36_1.equals(PathVerb_CUBIC_getInstance())) ? equals(this.k36_1, other.k36_1) : true : false) ? ((this.i36_1.equals(PathVerb_QUAD_getInstance()) ? true : this.i36_1.equals(PathVerb_CONIC_getInstance())) ? true : this.i36_1.equals(PathVerb_CUBIC_getInstance())) ? equals(this.l36_1, other.l36_1) : true : false) ? this.i36_1.equals(PathVerb_CUBIC_getInstance()) ? equals(this.m36_1, other.m36_1) : true : false) ? this.i36_1.equals(PathVerb_CONIC_getInstance()) ? compareTo(other.n36_1, this.n36_1) === 0 : true : false) ? this.i36_1.equals(PathVerb_LINE_getInstance()) ? this.o36_1 === other.o36_1 : true : false) ? !this.i36_1.equals(PathVerb_DONE_getInstance()) ? this.p36_1 === other.p36_1 : true : false;
  };
  protoOf(PathSegment).hashCode = function () {
    var tmp;
    switch (this.i36_1.t9_1) {
      case 6:
        tmp = objectHashes([this.i36_1]);
        break;
      case 0:
        tmp = objectHashes([this.i36_1, this.j36_1, this.p36_1]);
        break;
      case 1:
        tmp = objectHashes([this.i36_1, this.j36_1, this.k36_1, this.o36_1, this.p36_1]);
        break;
      case 2:
        tmp = objectHashes([this.i36_1, this.j36_1, this.k36_1, this.l36_1, this.p36_1]);
        break;
      case 3:
        tmp = objectHashes([this.i36_1, this.j36_1, this.k36_1, this.l36_1, this.n36_1, this.p36_1]);
        break;
      case 4:
        tmp = objectHashes([this.i36_1, this.j36_1, this.k36_1, this.l36_1, this.m36_1, this.p36_1]);
        break;
      default:
        throw RuntimeException_init_$Create$('Unreachable');
    }
    return tmp;
  };
  function objectHashes(args) {
    return contentHashCode_0(args);
  }
  function Companion_19() {
    Companion_instance_19 = this;
    Companion_instance_40.m2y();
  }
  protoOf(Companion_19).h36 = function (path, forceClose) {
    var tmp;
    try {
      var i = new PathSegmentIterator(path, org_jetbrains_skia_PathSegmentIterator__1nMake(getPtr(path), forceClose));
      i.t36_1 = nextSegment(i);
      tmp = i;
    }finally {
      reachabilityBarrier(path);
    }
    return tmp;
  };
  var Companion_instance_19;
  function Companion_getInstance_20() {
    if (Companion_instance_19 == null)
      new Companion_19();
    return Companion_instance_19;
  }
  function nextSegment($this) {
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var result = new Int32Array(10);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        var handle = $this$interopScope.p34(result);
        // Inline function 'org.jetbrains.skia.PathSegmentIterator.nextSegment.<anonymous>' call
        org_jetbrains_skia_PathSegmentIterator__1nNext($this.t2y_1, handle);
        $this$interopScope.u2z(handle, result);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().mv();
        }
      }
    }
    return pathSegmentFromIntArray(result);
  }
  function PathSegmentIterator(_path, ptr) {
    Companion_getInstance_20();
    Managed.call(this, ptr, org_jetbrains_skia_PathSegmentIterator__1nGetFinalizer());
    this.s36_1 = _path;
    this.t36_1 = null;
    Stats_instance.o2y();
  }
  protoOf(PathSegmentIterator).f1 = function () {
    var tmp;
    try {
      var tmp0_safe_receiver = this.t36_1;
      if (equals(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i36_1, PathVerb_DONE_getInstance()))
        throw NoSuchElementException_init_$Create$();
      var res = this.t36_1;
      this.t36_1 = nextSegment(this);
      tmp = res;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(PathSegmentIterator).d1 = function () {
    var tmp0_safe_receiver = this.t36_1;
    return !equals(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i36_1, PathVerb_DONE_getInstance());
  };
  protoOf(PathSegmentIterator).e1 = function () {
    // Inline function 'kotlin.TODO' call
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  function pathSegmentFromIntArray(points) {
    var context = last(points);
    var verb = context & 7;
    var isClosedBit = context >> 7 & 1;
    var isClosedLineBit = context >> 6 & 1;
    var isClosed = !(isClosedBit === 0);
    var tmp;
    switch (values_2()[verb].t9_1) {
      case 0:
      case 5:
        // Inline function 'kotlin.fromBits' call

        var bits = points[0];
        var tmp_0 = floatFromBits(bits);
        // Inline function 'kotlin.fromBits' call

        var bits_0 = points[1];
        var tmp$ret$1 = floatFromBits(bits_0);
        tmp = PathSegment_init_$Create$(verb, tmp_0, tmp$ret$1, isClosed);
        break;
      case 1:
        // Inline function 'kotlin.fromBits' call

        var bits_1 = points[0];
        var tmp_1 = floatFromBits(bits_1);
        // Inline function 'kotlin.fromBits' call

        var bits_2 = points[1];
        var tmp_2 = floatFromBits(bits_2);
        // Inline function 'kotlin.fromBits' call

        var bits_3 = points[2];
        var tmp_3 = floatFromBits(bits_3);
        // Inline function 'kotlin.fromBits' call

        var bits_4 = points[3];
        var tmp$ret$5 = floatFromBits(bits_4);
        tmp = PathSegment_init_$Create$_0(tmp_1, tmp_2, tmp_3, tmp$ret$5, !(isClosedLineBit === 0), isClosed);
        break;
      case 2:
        // Inline function 'kotlin.fromBits' call

        var bits_5 = points[0];
        var tmp_4 = floatFromBits(bits_5);
        // Inline function 'kotlin.fromBits' call

        var bits_6 = points[1];
        var tmp_5 = floatFromBits(bits_6);
        // Inline function 'kotlin.fromBits' call

        var bits_7 = points[2];
        var tmp_6 = floatFromBits(bits_7);
        // Inline function 'kotlin.fromBits' call

        var bits_8 = points[3];
        var tmp_7 = floatFromBits(bits_8);
        // Inline function 'kotlin.fromBits' call

        var bits_9 = points[4];
        var tmp_8 = floatFromBits(bits_9);
        // Inline function 'kotlin.fromBits' call

        var bits_10 = points[5];
        var tmp$ret$11 = floatFromBits(bits_10);
        tmp = PathSegment_init_$Create$_1(tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp$ret$11, isClosed);
        break;
      case 3:
        // Inline function 'kotlin.fromBits' call

        var bits_11 = points[0];
        var tmp_9 = floatFromBits(bits_11);
        // Inline function 'kotlin.fromBits' call

        var bits_12 = points[1];
        var tmp_10 = floatFromBits(bits_12);
        // Inline function 'kotlin.fromBits' call

        var bits_13 = points[2];
        var tmp_11 = floatFromBits(bits_13);
        // Inline function 'kotlin.fromBits' call

        var bits_14 = points[3];
        var tmp_12 = floatFromBits(bits_14);
        // Inline function 'kotlin.fromBits' call

        var bits_15 = points[4];
        var tmp_13 = floatFromBits(bits_15);
        // Inline function 'kotlin.fromBits' call

        var bits_16 = points[5];
        var tmp_14 = floatFromBits(bits_16);
        // Inline function 'kotlin.fromBits' call

        var bits_17 = points[8];
        var tmp$ret$18 = floatFromBits(bits_17);
        tmp = PathSegment_init_$Create$_2(tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, tmp_14, tmp$ret$18, isClosed);
        break;
      case 4:
        // Inline function 'kotlin.fromBits' call

        var bits_18 = points[0];
        var tmp_15 = floatFromBits(bits_18);
        // Inline function 'kotlin.fromBits' call

        var bits_19 = points[1];
        var tmp_16 = floatFromBits(bits_19);
        // Inline function 'kotlin.fromBits' call

        var bits_20 = points[2];
        var tmp_17 = floatFromBits(bits_20);
        // Inline function 'kotlin.fromBits' call

        var bits_21 = points[3];
        var tmp_18 = floatFromBits(bits_21);
        // Inline function 'kotlin.fromBits' call

        var bits_22 = points[4];
        var tmp_19 = floatFromBits(bits_22);
        // Inline function 'kotlin.fromBits' call

        var bits_23 = points[5];
        var tmp_20 = floatFromBits(bits_23);
        // Inline function 'kotlin.fromBits' call

        var bits_24 = points[6];
        var tmp_21 = floatFromBits(bits_24);
        // Inline function 'kotlin.fromBits' call

        var bits_25 = points[7];
        var tmp$ret$26 = floatFromBits(bits_25);
        tmp = PathSegment_init_$Create$_3(tmp_15, tmp_16, tmp_17, tmp_18, tmp_19, tmp_20, tmp_21, tmp$ret$26, isClosed);
        break;
      case 6:
        tmp = new PathSegment();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  var PathVerb_MOVE_instance;
  var PathVerb_LINE_instance;
  var PathVerb_QUAD_instance;
  var PathVerb_CONIC_instance;
  var PathVerb_CUBIC_instance;
  var PathVerb_CLOSE_instance;
  var PathVerb_DONE_instance;
  function values_2() {
    return [PathVerb_MOVE_getInstance(), PathVerb_LINE_getInstance(), PathVerb_QUAD_getInstance(), PathVerb_CONIC_getInstance(), PathVerb_CUBIC_getInstance(), PathVerb_CLOSE_getInstance(), PathVerb_DONE_getInstance()];
  }
  var PathVerb_entriesInitialized;
  function PathVerb_initEntries() {
    if (PathVerb_entriesInitialized)
      return Unit_instance;
    PathVerb_entriesInitialized = true;
    PathVerb_MOVE_instance = new PathVerb('MOVE', 0);
    PathVerb_LINE_instance = new PathVerb('LINE', 1);
    PathVerb_QUAD_instance = new PathVerb('QUAD', 2);
    PathVerb_CONIC_instance = new PathVerb('CONIC', 3);
    PathVerb_CUBIC_instance = new PathVerb('CUBIC', 4);
    PathVerb_CLOSE_instance = new PathVerb('CLOSE', 5);
    PathVerb_DONE_instance = new PathVerb('DONE', 6);
  }
  function PathVerb(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PathVerb_MOVE_getInstance() {
    PathVerb_initEntries();
    return PathVerb_MOVE_instance;
  }
  function PathVerb_LINE_getInstance() {
    PathVerb_initEntries();
    return PathVerb_LINE_instance;
  }
  function PathVerb_QUAD_getInstance() {
    PathVerb_initEntries();
    return PathVerb_QUAD_instance;
  }
  function PathVerb_CONIC_getInstance() {
    PathVerb_initEntries();
    return PathVerb_CONIC_instance;
  }
  function PathVerb_CUBIC_getInstance() {
    PathVerb_initEntries();
    return PathVerb_CUBIC_instance;
  }
  function PathVerb_CLOSE_getInstance() {
    PathVerb_initEntries();
    return PathVerb_CLOSE_instance;
  }
  function PathVerb_DONE_getInstance() {
    PathVerb_initEntries();
    return PathVerb_DONE_instance;
  }
  function Companion_20() {
    Companion_instance_20 = this;
    Companion_instance_40.m2y();
  }
  var Companion_instance_20;
  function Companion_getInstance_21() {
    if (Companion_instance_20 == null)
      new Companion_20();
    return Companion_instance_20;
  }
  function Picture(ptr) {
    Companion_getInstance_21();
    RefCnt_init_$Init$(ptr, this);
  }
  function Companion_21() {
    Companion_instance_21 = this;
    Companion_instance_40.m2y();
  }
  var Companion_instance_21;
  function Companion_getInstance_22() {
    if (Companion_instance_21 == null)
      new Companion_21();
    return Companion_instance_21;
  }
  function PictureRecorder_init_$Init$($this) {
    PictureRecorder.call($this, org_jetbrains_skia_PictureRecorder__1nMake());
    Stats_instance.o2y();
    return $this;
  }
  function PictureRecorder_init_$Create$() {
    return PictureRecorder_init_$Init$(objectCreate(protoOf(PictureRecorder)));
  }
  function _FinalizerHolder_8() {
    _FinalizerHolder_instance_8 = this;
    this.u36_1 = org_jetbrains_skia_PictureRecorder__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_8;
  function _FinalizerHolder_getInstance_8() {
    if (_FinalizerHolder_instance_8 == null)
      new _FinalizerHolder_8();
    return _FinalizerHolder_instance_8;
  }
  function PictureRecorder(ptr) {
    Companion_getInstance_22();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_8().u36_1);
  }
  protoOf(PictureRecorder).x36 = function (bounds) {
    var tmp;
    try {
      Stats_instance.o2y();
      tmp = new Canvas(org_jetbrains_skia_PictureRecorder__1nBeginRecording(this.t2y_1, bounds.a30_1, bounds.b30_1, bounds.c30_1, bounds.d30_1), false, this);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(PictureRecorder).y36 = function () {
    var tmp;
    try {
      Stats_instance.o2y();
      tmp = new Picture(org_jetbrains_skia_PictureRecorder__1nFinishRecordingAsPicture(this.t2y_1));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  var PixelGeometry_UNKNOWN_instance;
  var PixelGeometry_RGB_H_instance;
  var PixelGeometry_BGR_H_instance;
  var PixelGeometry_RGB_V_instance;
  var PixelGeometry_BGR_V_instance;
  var PixelGeometry_entriesInitialized;
  function PixelGeometry_initEntries() {
    if (PixelGeometry_entriesInitialized)
      return Unit_instance;
    PixelGeometry_entriesInitialized = true;
    PixelGeometry_UNKNOWN_instance = new PixelGeometry('UNKNOWN', 0);
    PixelGeometry_RGB_H_instance = new PixelGeometry('RGB_H', 1);
    PixelGeometry_BGR_H_instance = new PixelGeometry('BGR_H', 2);
    PixelGeometry_RGB_V_instance = new PixelGeometry('RGB_V', 3);
    PixelGeometry_BGR_V_instance = new PixelGeometry('BGR_V', 4);
  }
  function PixelGeometry(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PixelGeometry_UNKNOWN_getInstance() {
    PixelGeometry_initEntries();
    return PixelGeometry_UNKNOWN_instance;
  }
  function Companion_22() {
    Companion_instance_22 = this;
    this.z36_1 = new Point(0.0, 0.0);
  }
  var Companion_instance_22;
  function Companion_getInstance_23() {
    if (Companion_instance_22 == null)
      new Companion_22();
    return Companion_instance_22;
  }
  function Point(x, y) {
    Companion_getInstance_23();
    this.a37_1 = x;
    this.b37_1 = y;
  }
  protoOf(Point).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Point))
      return false;
    if (!(compareTo(this.a37_1, other.a37_1) === 0))
      return false;
    return compareTo(this.b37_1, other.b37_1) === 0;
  };
  protoOf(Point).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.a37_1) | 0;
    result = imul(result, PRIME) + toBits(this.b37_1) | 0;
    return result;
  };
  protoOf(Point).toString = function () {
    return 'Point(_x=' + this.a37_1 + ', _y=' + this.b37_1 + ')';
  };
  function Point3(x, y, z) {
    this.c37_1 = x;
    this.d37_1 = y;
    this.e37_1 = z;
  }
  protoOf(Point3).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Point3))
      return false;
    if (!(compareTo(this.c37_1, other.c37_1) === 0))
      return false;
    if (!(compareTo(this.d37_1, other.d37_1) === 0))
      return false;
    return compareTo(this.e37_1, other.e37_1) === 0;
  };
  protoOf(Point3).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.c37_1) | 0;
    result = imul(result, PRIME) + toBits(this.d37_1) | 0;
    result = imul(result, PRIME) + toBits(this.e37_1) | 0;
    return result;
  };
  protoOf(Point3).toString = function () {
    return 'Point3(_x=' + this.c37_1 + ', _y=' + this.d37_1 + ', _z=' + this.e37_1 + ')';
  };
  function Companion_23() {
  }
  protoOf(Companion_23).f37 = function (l, t, r, b, radii) {
    return new RRect(l, t, r, b, radii);
  };
  var Companion_instance_23;
  function Companion_getInstance_24() {
    return Companion_instance_23;
  }
  function RRect(l, t, r, b, radii) {
    Rect.call(this, l, t, r, b);
    this.p30_1 = radii;
  }
  protoOf(RRect).toString = function () {
    return 'RRect(_left=' + this.a30_1 + ', _top=' + this.b30_1 + ', _right=' + this.c30_1 + ', _bottom=' + this.d30_1 + ', _radii=' + joinToString(this.p30_1) + ')';
  };
  protoOf(RRect).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof RRect))
      return false;
    if (!protoOf(Rect).equals.call(this, other))
      return false;
    var tmp;
    if (this.p30_1.length === other.p30_1.length) {
      tmp = contentEquals(this.p30_1, other.p30_1);
    } else {
      tmp = contentEquals(normalizeRadii(this.p30_1), normalizeRadii(other.p30_1));
    }
    return tmp;
  };
  protoOf(RRect).hashCode = function () {
    var PRIME = 59;
    var result = protoOf(Rect).hashCode.call(this);
    result = imul(result, PRIME) + contentHashCode(this.p30_1) | 0;
    return result;
  };
  function normalizeRadii(radii) {
    var tmp;
    switch (radii.length) {
      case 0:
        var tmp_0 = 0;
        var tmp_1 = new Float32Array(8);
        while (tmp_0 < 8) {
          tmp_1[tmp_0] = 0.0;
          tmp_0 = tmp_0 + 1 | 0;
        }

        tmp = tmp_1;
        break;
      case 1:
        var tmp_2 = 0;
        var tmp_3 = new Float32Array(8);
        while (tmp_2 < 8) {
          tmp_3[tmp_2] = radii[0];
          tmp_2 = tmp_2 + 1 | 0;
        }

        tmp = tmp_3;
        break;
      case 2:
        var tmp_4 = 0;
        var tmp_5 = new Float32Array(8);
        while (tmp_4 < 8) {
          var tmp_6 = tmp_4;
          tmp_5[tmp_6] = radii[tmp_6 % 2 | 0];
          tmp_4 = tmp_4 + 1 | 0;
        }

        tmp = tmp_5;
        break;
      case 4:
        var tmp_7 = 0;
        var tmp_8 = new Float32Array(8);
        while (tmp_7 < 8) {
          var tmp_9 = tmp_7;
          tmp_8[tmp_9] = radii[tmp_9 / 2 | 0];
          tmp_7 = tmp_7 + 1 | 0;
        }

        tmp = tmp_8;
        break;
      case 8:
        tmp = radii;
        break;
      default:
        throw Error_init_$Create$('illegal radii array');
    }
    return tmp;
  }
  function Companion_24() {
  }
  protoOf(Companion_24).g37 = function (l, t, r, b) {
    return new Rect(l, t, r, b);
  };
  var Companion_instance_24;
  function Companion_getInstance_25() {
    return Companion_instance_24;
  }
  function Rect(left, top, right, bottom) {
    this.a30_1 = left;
    this.b30_1 = top;
    this.c30_1 = right;
    this.d30_1 = bottom;
  }
  protoOf(Rect).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Rect))
      return false;
    if (!(compareTo(this.a30_1, other.a30_1) === 0))
      return false;
    if (!(compareTo(this.b30_1, other.b30_1) === 0))
      return false;
    if (!(compareTo(this.c30_1, other.c30_1) === 0))
      return false;
    return compareTo(this.d30_1, other.d30_1) === 0;
  };
  protoOf(Rect).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.a30_1) | 0;
    result = imul(result, PRIME) + toBits(this.b30_1) | 0;
    result = imul(result, PRIME) + toBits(this.c30_1) | 0;
    result = imul(result, PRIME) + toBits(this.d30_1) | 0;
    return result;
  };
  protoOf(Rect).toString = function () {
    return 'Rect(_left=' + this.a30_1 + ', _top=' + this.b30_1 + ', _right=' + this.c30_1 + ', _bottom=' + this.d30_1 + ')';
  };
  function ShadowUtils() {
    ShadowUtils_instance = this;
    Companion_instance_40.m2y();
  }
  protoOf(ShadowUtils).h37 = function (canvas, path, zPlaneParams, lightPos, lightRadius, ambientColor, spotColor, transparentOccluder, geometricOnly) {
    Stats_instance.o2y();
    var flags = 0;
    if (transparentOccluder)
      flags = flags | 1;
    if (geometricOnly)
      flags = flags | 2;
    try {
      org_jetbrains_skia_ShadowUtils__1nDrawShadow(getPtr(canvas), getPtr(path), zPlaneParams.c37_1, zPlaneParams.d37_1, zPlaneParams.e37_1, lightPos.c37_1, lightPos.d37_1, lightPos.e37_1, lightRadius, ambientColor, spotColor, flags);
    }finally {
      reachabilityBarrier(canvas);
      reachabilityBarrier(path);
    }
  };
  var ShadowUtils_instance;
  function ShadowUtils_getInstance() {
    if (ShadowUtils_instance == null)
      new ShadowUtils();
    return ShadowUtils_instance;
  }
  function ArrayDecoder(ptr, disposePtr) {
    this.i37_1 = ptr;
    this.j37_1 = disposePtr;
  }
  protoOf(ArrayDecoder).ss = function () {
    org_jetbrains_skia_StdVectorDecoder__1nDisposeArray(this.i37_1, this.j37_1);
  };
  protoOf(ArrayDecoder).k37 = function (index) {
    return org_jetbrains_skia_StdVectorDecoder__1nReleaseElement(this.i37_1, index);
  };
  protoOf(ArrayDecoder).m = function () {
    return org_jetbrains_skia_StdVectorDecoder__1nGetArraySize(this.i37_1);
  };
  function Companion_25() {
    Companion_instance_25 = this;
    Companion_instance_40.m2y();
  }
  protoOf(Companion_25).l37 = function (context, rt, origin, colorFormat, colorSpace, surfaceProps) {
    var tmp;
    try {
      Stats_instance.o2y();
      var tmp$ret$1;
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
          // Inline function 'org.jetbrains.skia.Companion.makeFromBackendRenderTarget.<anonymous>' call
          var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
          var tmp_0 = getPtr(context);
          var tmp_1 = getPtr(rt);
          var tmp_2 = getPtr(colorSpace);
          tmp$ret$1 = org_jetbrains_skia_Surface__1nMakeFromBackendRenderTarget(tmp_0, tmp_1, origin.t9_1, colorFormat.t9_1, tmp_2, $this$interopScope.t2z(surfaceProps == null ? null : surfaceProps.o37()));
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
            _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().mv();
          }
        }
      }
      var ptr = tmp$ret$1;
      tmp = ptr === Companion_instance_41.p2y() ? null : Surface_init_$Create$(ptr, context, rt);
    }finally {
      reachabilityBarrier(context);
      reachabilityBarrier(rt);
      reachabilityBarrier(colorSpace);
    }
    return tmp;
  };
  var Companion_instance_25;
  function Companion_getInstance_26() {
    if (Companion_instance_25 == null)
      new Companion_25();
    return Companion_instance_25;
  }
  function Surface_init_$Init$(ptr, context, renderTarget, $this) {
    RefCnt_init_$Init$(ptr, $this);
    Surface.call($this);
    $this.r37_1 = context;
    $this.s37_1 = renderTarget;
    return $this;
  }
  function Surface_init_$Create$(ptr, context, renderTarget) {
    return Surface_init_$Init$(ptr, context, renderTarget, objectCreate(protoOf(Surface)));
  }
  protoOf(Surface).t37 = function () {
    var tmp;
    try {
      Stats_instance.o2y();
      var ptr = org_jetbrains_skia_Surface__1nGetCanvas(this.t2y_1);
      var tmp_0;
      if (ptr === Companion_instance_41.p2y()) {
        throw IllegalArgumentException_init_$Create$_0();
      } else {
        tmp_0 = new Canvas(ptr, false, this);
      }
      tmp = tmp_0;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Surface).u37 = function () {
    try {
      Stats_instance.o2y();
      org_jetbrains_skia_Surface__1nFlushAndSubmit(this.t2y_1, false);
    }finally {
      reachabilityBarrier(this);
    }
  };
  function Surface() {
    Companion_getInstance_26();
  }
  var SurfaceColorFormat_UNKNOWN_instance;
  var SurfaceColorFormat_ALPHA_8_instance;
  var SurfaceColorFormat_RGB_565_instance;
  var SurfaceColorFormat_ARGB_4444_instance;
  var SurfaceColorFormat_RGBA_8888_instance;
  var SurfaceColorFormat_RGB_888x_instance;
  var SurfaceColorFormat_BGRA_8888_instance;
  var SurfaceColorFormat_RGBA_1010102_instance;
  var SurfaceColorFormat_RGB_101010x_instance;
  var SurfaceColorFormat_GRAY_8_instance;
  var SurfaceColorFormat_RGBA_F16_NORM_instance;
  var SurfaceColorFormat_RGBA_F16_instance;
  var SurfaceColorFormat_RGBA_F32_instance;
  var SurfaceColorFormat_R8G8_UNORM_instance;
  var SurfaceColorFormat_A16_FLOAT_instance;
  var SurfaceColorFormat_R16G16_FLOAT_instance;
  var SurfaceColorFormat_A16_UNORM_instance;
  var SurfaceColorFormat_R16G16_UNORM_instance;
  var SurfaceColorFormat_R16G16B16A16_UNORM_instance;
  var SurfaceColorFormat_entriesInitialized;
  function SurfaceColorFormat_initEntries() {
    if (SurfaceColorFormat_entriesInitialized)
      return Unit_instance;
    SurfaceColorFormat_entriesInitialized = true;
    SurfaceColorFormat_UNKNOWN_instance = new SurfaceColorFormat('UNKNOWN', 0);
    SurfaceColorFormat_ALPHA_8_instance = new SurfaceColorFormat('ALPHA_8', 1);
    SurfaceColorFormat_RGB_565_instance = new SurfaceColorFormat('RGB_565', 2);
    SurfaceColorFormat_ARGB_4444_instance = new SurfaceColorFormat('ARGB_4444', 3);
    SurfaceColorFormat_RGBA_8888_instance = new SurfaceColorFormat('RGBA_8888', 4);
    SurfaceColorFormat_RGB_888x_instance = new SurfaceColorFormat('RGB_888x', 5);
    SurfaceColorFormat_BGRA_8888_instance = new SurfaceColorFormat('BGRA_8888', 6);
    SurfaceColorFormat_RGBA_1010102_instance = new SurfaceColorFormat('RGBA_1010102', 7);
    SurfaceColorFormat_RGB_101010x_instance = new SurfaceColorFormat('RGB_101010x', 8);
    SurfaceColorFormat_GRAY_8_instance = new SurfaceColorFormat('GRAY_8', 9);
    SurfaceColorFormat_RGBA_F16_NORM_instance = new SurfaceColorFormat('RGBA_F16_NORM', 10);
    SurfaceColorFormat_RGBA_F16_instance = new SurfaceColorFormat('RGBA_F16', 11);
    SurfaceColorFormat_RGBA_F32_instance = new SurfaceColorFormat('RGBA_F32', 12);
    SurfaceColorFormat_R8G8_UNORM_instance = new SurfaceColorFormat('R8G8_UNORM', 13);
    SurfaceColorFormat_A16_FLOAT_instance = new SurfaceColorFormat('A16_FLOAT', 14);
    SurfaceColorFormat_R16G16_FLOAT_instance = new SurfaceColorFormat('R16G16_FLOAT', 15);
    SurfaceColorFormat_A16_UNORM_instance = new SurfaceColorFormat('A16_UNORM', 16);
    SurfaceColorFormat_R16G16_UNORM_instance = new SurfaceColorFormat('R16G16_UNORM', 17);
    SurfaceColorFormat_R16G16B16A16_UNORM_instance = new SurfaceColorFormat('R16G16B16A16_UNORM', 18);
  }
  function SurfaceColorFormat(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SurfaceColorFormat_RGBA_8888_getInstance() {
    SurfaceColorFormat_initEntries();
    return SurfaceColorFormat_RGBA_8888_instance;
  }
  var SurfaceOrigin_TOP_LEFT_instance;
  var SurfaceOrigin_BOTTOM_LEFT_instance;
  var SurfaceOrigin_entriesInitialized;
  function SurfaceOrigin_initEntries() {
    if (SurfaceOrigin_entriesInitialized)
      return Unit_instance;
    SurfaceOrigin_entriesInitialized = true;
    SurfaceOrigin_TOP_LEFT_instance = new SurfaceOrigin('TOP_LEFT', 0);
    SurfaceOrigin_BOTTOM_LEFT_instance = new SurfaceOrigin('BOTTOM_LEFT', 1);
  }
  function SurfaceOrigin(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SurfaceOrigin_BOTTOM_LEFT_getInstance() {
    SurfaceOrigin_initEntries();
    return SurfaceOrigin_BOTTOM_LEFT_instance;
  }
  function _getPixelGeometryOrdinal($this) {
    return $this.n37_1.t9_1;
  }
  function SurfaceProps(isDeviceIndependentFonts, pixelGeometry) {
    isDeviceIndependentFonts = isDeviceIndependentFonts === VOID ? false : isDeviceIndependentFonts;
    pixelGeometry = pixelGeometry === VOID ? PixelGeometry_UNKNOWN_getInstance() : pixelGeometry;
    this.m37_1 = isDeviceIndependentFonts;
    this.n37_1 = pixelGeometry;
  }
  protoOf(SurfaceProps).v37 = function () {
    return 0 | (this.m37_1 ? 1 : 0);
  };
  protoOf(SurfaceProps).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof SurfaceProps))
      return false;
    if (!(this.m37_1 === other.m37_1))
      return false;
    return this.n37_1.equals(other.n37_1);
  };
  protoOf(SurfaceProps).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + (this.m37_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + this.n37_1.hashCode() | 0;
    return result;
  };
  protoOf(SurfaceProps).toString = function () {
    return 'SurfaceProps(_deviceIndependentFonts=' + this.m37_1 + ', _pixelGeometry=' + this.n37_1 + ')';
  };
  protoOf(SurfaceProps).o37 = function () {
    // Inline function 'kotlin.intArrayOf' call
    return new Int32Array([this.v37(), _getPixelGeometryOrdinal(this)]);
  };
  function Companion_26() {
    Companion_instance_26 = this;
    Companion_instance_40.m2y();
  }
  protoOf(Companion_26).w37 = function (name, style) {
    Stats_instance.o2y();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.Companion.makeFromName.<anonymous>' call
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        tmp$ret$1 = new Typeface(org_jetbrains_skia_Typeface__1nMakeFromName($this$interopScope.x2y(name), style.l33_1));
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().mv();
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(Companion_26).x37 = function (data, index) {
    var tmp;
    try {
      Stats_instance.o2y();
      var ptr = org_jetbrains_skia_Typeface__1nMakeFromData(getPtr(data), index);
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!(ptr === Companion_instance_41.p2y())) {
        // Inline function 'org.jetbrains.skia.Companion.makeFromData.<anonymous>' call
        var message = 'Failed to create Typeface from data ' + data;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      tmp = new Typeface(ptr);
    }finally {
      reachabilityBarrier(data);
    }
    return tmp;
  };
  protoOf(Companion_26).y37 = function (data, index, $super) {
    index = index === VOID ? 0 : index;
    return $super === VOID ? this.x37(data, index) : $super.x37.call(this, data, index);
  };
  var Companion_instance_26;
  function Companion_getInstance_27() {
    if (Companion_instance_26 == null)
      new Companion_26();
    return Companion_instance_26;
  }
  function Typeface(ptr) {
    Companion_getInstance_27();
    RefCnt_init_$Init$(ptr, this);
  }
  protoOf(Typeface).b38 = function () {
    var tmp;
    try {
      Stats_instance.o2y();
      tmp = FontStyle_init_$Create$_0(org_jetbrains_skia_Typeface__1nGetFontStyle(this.t2y_1));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Typeface).c38 = function () {
    var tmp;
    try {
      Stats_instance.o2y();
      tmp = org_jetbrains_skia_Typeface__1nGetUniqueId(this.t2y_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Typeface).u2y = function (other) {
    var tmp;
    try {
      tmp = org_jetbrains_skia_Typeface__1nEquals(this.t2y_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(Typeface).d38 = function () {
    var tmp;
    try {
      Stats_instance.o2y();
      // Inline function 'org.jetbrains.skia.impl.withStringResult' call
      // Inline function 'org.jetbrains.skia.impl.use' call
      // Inline function 'org.jetbrains.skia.Typeface.<get-familyName>.<anonymous>' call
      var tmp$ret$0 = org_jetbrains_skia_Typeface__1nGetFamilyName(this.t2y_1);
      var this_0 = new ManagedString(tmp$ret$0);
      var tmp_0;
      try {
        // Inline function 'org.jetbrains.skia.impl.withStringResult.<anonymous>' call
        tmp_0 = this_0.toString();
      }finally {
        this_0.y1k();
      }
      tmp = tmp_0;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Typeface).toString = function () {
    return "Typeface(familyName='" + this.d38() + "', fontStyle=" + this.b38() + ', uniqueId=' + this.c38() + ')';
  };
  function Companion_27() {
    Companion_instance_27 = this;
    Companion_instance_40.m2y();
  }
  var Companion_instance_27;
  function Companion_getInstance_28() {
    if (Companion_instance_27 == null)
      new Companion_27();
    return Companion_instance_27;
  }
  function _FinalizerHolder_9() {
    _FinalizerHolder_instance_9 = this;
    this.e38_1 = org_jetbrains_skia_U16String__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_9;
  function _FinalizerHolder_getInstance_9() {
    if (_FinalizerHolder_instance_9 == null)
      new _FinalizerHolder_9();
    return _FinalizerHolder_instance_9;
  }
  function U16String(ptr) {
    Companion_getInstance_28();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_9().e38_1);
  }
  function CharDirection() {
    CharDirection_instance = this;
    Companion_instance_40.m2y();
    this.f38_1 = 0;
    this.g38_1 = 1;
    this.h38_1 = 2;
    this.i38_1 = 3;
    this.j38_1 = 4;
    this.k38_1 = 5;
    this.l38_1 = 6;
    this.m38_1 = 7;
    this.n38_1 = 8;
    this.o38_1 = 9;
    this.p38_1 = 10;
    this.q38_1 = 11;
    this.r38_1 = 12;
    this.s38_1 = 13;
    this.t38_1 = 14;
    this.u38_1 = 15;
    this.v38_1 = 16;
    this.w38_1 = 17;
    this.x38_1 = 18;
    this.y38_1 = 19;
    this.z38_1 = 20;
    this.a39_1 = 21;
    this.b39_1 = 22;
  }
  protoOf(CharDirection).c39 = function (codePoint) {
    return org_jetbrains_skia_icu_Unicode_charDirection(codePoint);
  };
  var CharDirection_instance;
  function CharDirection_getInstance() {
    if (CharDirection_instance == null)
      new CharDirection();
    return CharDirection_instance;
  }
  function getPtr(n) {
    var tmp1_elvis_lhs = n == null ? null : n.t2y_1;
    return tmp1_elvis_lhs == null ? Companion_instance_41.p2y() : tmp1_elvis_lhs;
  }
  var Alignment_LEFT_instance;
  var Alignment_RIGHT_instance;
  var Alignment_CENTER_instance;
  var Alignment_JUSTIFY_instance;
  var Alignment_START_instance;
  var Alignment_END_instance;
  var Alignment_entriesInitialized;
  function Alignment_initEntries() {
    if (Alignment_entriesInitialized)
      return Unit_instance;
    Alignment_entriesInitialized = true;
    Alignment_LEFT_instance = new Alignment('LEFT', 0);
    Alignment_RIGHT_instance = new Alignment('RIGHT', 1);
    Alignment_CENTER_instance = new Alignment('CENTER', 2);
    Alignment_JUSTIFY_instance = new Alignment('JUSTIFY', 3);
    Alignment_START_instance = new Alignment('START', 4);
    Alignment_END_instance = new Alignment('END', 5);
  }
  function Alignment(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Alignment_LEFT_getInstance() {
    Alignment_initEntries();
    return Alignment_LEFT_instance;
  }
  function Alignment_RIGHT_getInstance() {
    Alignment_initEntries();
    return Alignment_RIGHT_instance;
  }
  function Alignment_CENTER_getInstance() {
    Alignment_initEntries();
    return Alignment_CENTER_instance;
  }
  function Alignment_JUSTIFY_getInstance() {
    Alignment_initEntries();
    return Alignment_JUSTIFY_instance;
  }
  function Alignment_START_getInstance() {
    Alignment_initEntries();
    return Alignment_START_instance;
  }
  function Alignment_END_getInstance() {
    Alignment_initEntries();
    return Alignment_END_instance;
  }
  var BaselineMode_ALPHABETIC_instance;
  var BaselineMode_IDEOGRAPHIC_instance;
  var BaselineMode_entriesInitialized;
  function BaselineMode_initEntries() {
    if (BaselineMode_entriesInitialized)
      return Unit_instance;
    BaselineMode_entriesInitialized = true;
    BaselineMode_ALPHABETIC_instance = new BaselineMode('ALPHABETIC', 0);
    BaselineMode_IDEOGRAPHIC_instance = new BaselineMode('IDEOGRAPHIC', 1);
  }
  function BaselineMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function BaselineMode_ALPHABETIC_getInstance() {
    BaselineMode_initEntries();
    return BaselineMode_ALPHABETIC_instance;
  }
  var DecorationLineStyle_SOLID_instance;
  var DecorationLineStyle_DOUBLE_instance;
  var DecorationLineStyle_DOTTED_instance;
  var DecorationLineStyle_DASHED_instance;
  var DecorationLineStyle_WAVY_instance;
  var DecorationLineStyle_entriesInitialized;
  function DecorationLineStyle_initEntries() {
    if (DecorationLineStyle_entriesInitialized)
      return Unit_instance;
    DecorationLineStyle_entriesInitialized = true;
    DecorationLineStyle_SOLID_instance = new DecorationLineStyle('SOLID', 0);
    DecorationLineStyle_DOUBLE_instance = new DecorationLineStyle('DOUBLE', 1);
    DecorationLineStyle_DOTTED_instance = new DecorationLineStyle('DOTTED', 2);
    DecorationLineStyle_DASHED_instance = new DecorationLineStyle('DASHED', 3);
    DecorationLineStyle_WAVY_instance = new DecorationLineStyle('WAVY', 4);
  }
  function DecorationLineStyle(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function DecorationLineStyle_SOLID_getInstance() {
    DecorationLineStyle_initEntries();
    return DecorationLineStyle_SOLID_instance;
  }
  function DecorationLineStyle_DOUBLE_getInstance() {
    DecorationLineStyle_initEntries();
    return DecorationLineStyle_DOUBLE_instance;
  }
  function DecorationLineStyle_DOTTED_getInstance() {
    DecorationLineStyle_initEntries();
    return DecorationLineStyle_DOTTED_instance;
  }
  function DecorationLineStyle_DASHED_getInstance() {
    DecorationLineStyle_initEntries();
    return DecorationLineStyle_DASHED_instance;
  }
  function DecorationLineStyle_WAVY_getInstance() {
    DecorationLineStyle_initEntries();
    return DecorationLineStyle_WAVY_instance;
  }
  function Companion_28() {
    Companion_instance_28 = this;
    this.d39_1 = new DecorationStyle(false, false, false, true, -16777216, DecorationLineStyle_SOLID_getInstance(), 1.0);
  }
  var Companion_instance_28;
  function Companion_getInstance_29() {
    if (Companion_instance_28 == null)
      new Companion_28();
    return Companion_instance_28;
  }
  function DecorationStyle(_underline, _overline, _lineThrough, _gaps, color, lineStyle, thicknessMultiplier) {
    Companion_getInstance_29();
    this.e39_1 = _underline;
    this.f39_1 = _overline;
    this.g39_1 = _lineThrough;
    this.h39_1 = _gaps;
    this.i39_1 = color;
    this.j39_1 = lineStyle;
    this.k39_1 = thicknessMultiplier;
  }
  protoOf(DecorationStyle).l39 = function () {
    return this.j39_1;
  };
  protoOf(DecorationStyle).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof DecorationStyle))
      return false;
    if (!(this.e39_1 === other.e39_1))
      return false;
    if (!(this.f39_1 === other.f39_1))
      return false;
    if (!(this.g39_1 === other.g39_1))
      return false;
    if (!(this.h39_1 === other.h39_1))
      return false;
    if (!(this.i39_1 === other.i39_1))
      return false;
    if (!(compareTo(this.k39_1, other.k39_1) === 0))
      return false;
    return this.l39().equals(other.l39());
  };
  protoOf(DecorationStyle).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + (this.e39_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + (this.f39_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + (this.g39_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + (this.h39_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + this.i39_1 | 0;
    result = imul(result, PRIME) + toBits(this.k39_1) | 0;
    result = imul(result, PRIME) + this.l39().hashCode() | 0;
    return result;
  };
  protoOf(DecorationStyle).toString = function () {
    return 'DecorationStyle(_underline=' + this.e39_1 + ', _overline=' + this.f39_1 + ', _lineThrough=' + this.g39_1 + ', _gaps=' + this.h39_1 + ', _color=' + this.i39_1 + ', _lineStyle=' + this.l39() + ', _thicknessMultiplier=' + this.k39_1 + ')';
  };
  var Direction_RTL_instance;
  var Direction_LTR_instance;
  function values_3() {
    return [Direction_RTL_getInstance(), Direction_LTR_getInstance()];
  }
  var Direction_entriesInitialized;
  function Direction_initEntries() {
    if (Direction_entriesInitialized)
      return Unit_instance;
    Direction_entriesInitialized = true;
    Direction_RTL_instance = new Direction('RTL', 0);
    Direction_LTR_instance = new Direction('LTR', 1);
  }
  function Direction(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Direction_RTL_getInstance() {
    Direction_initEntries();
    return Direction_RTL_instance;
  }
  function Direction_LTR_getInstance() {
    Direction_initEntries();
    return Direction_LTR_instance;
  }
  function Companion_29() {
    Companion_instance_29 = this;
    Companion_instance_40.m2y();
  }
  var Companion_instance_29;
  function Companion_getInstance_30() {
    if (Companion_instance_29 == null)
      new Companion_29();
    return Companion_instance_29;
  }
  function FontCollection_init_$Init$($this) {
    FontCollection.call($this, org_jetbrains_skia_paragraph_FontCollection__1nMake());
    Stats_instance.o2y();
    return $this;
  }
  function FontCollection_init_$Create$() {
    return FontCollection_init_$Init$(objectCreate(protoOf(FontCollection)));
  }
  function FontCollection(ptr) {
    Companion_getInstance_30();
    RefCnt_init_$Init$(ptr, this);
  }
  protoOf(FontCollection).o39 = function (fontMgr) {
    var tmp;
    try {
      Stats_instance.o2y();
      org_jetbrains_skia_paragraph_FontCollection__1nSetAssetFontManager(this.t2y_1, getPtr(fontMgr), Companion_instance_41.p2y());
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(fontMgr);
    }
    return tmp;
  };
  protoOf(FontCollection).p39 = function (fontMgr) {
    return this.q39(fontMgr, null);
  };
  protoOf(FontCollection).q39 = function (fontMgr, defaultFamilyName) {
    var tmp;
    try {
      Stats_instance.o2y();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
          var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
          org_jetbrains_skia_paragraph_FontCollection__1nSetDefaultFontManager(this.t2y_1, getPtr(fontMgr), $this$interopScope.x2y(defaultFamilyName));
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
            _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().mv();
          }
        }
      }
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(fontMgr);
    }
    return tmp;
  };
  protoOf(FontCollection).r39 = function (familyNames, style) {
    var tmp;
    try {
      Stats_instance.o2y();
      // Inline function 'org.jetbrains.skia.arrayDecoderScope' call
      var arrayDecoder = null;
      var tmp_0;
      try {
        // Inline function 'org.jetbrains.skia.paragraph.FontCollection.findTypefaces.<anonymous>' call
        var tmp$ret$1;
        $l$block: {
          // Inline function 'org.jetbrains.skia.impl.interopScope' call
          try {
            var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
            _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
            // Inline function 'org.jetbrains.skia.paragraph.FontCollection.findTypefaces.<anonymous>.<anonymous>' call
            var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
            var tmp_1 = this.t2y_1;
            var tmp_2 = $this$interopScope.s39(familyNames);
            var tmp1_elvis_lhs = familyNames == null ? null : familyNames.length;
            tmp$ret$1 = org_jetbrains_skia_paragraph_FontCollection__1nFindTypefaces(tmp_1, tmp_2, tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs, style.l33_1);
            break $l$block;
          }finally {
            var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
            _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
            if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
              _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().mv();
            }
          }
        }
        arrayDecoder = new ArrayDecoder(tmp$ret$1, org_jetbrains_skia_impl_RefCnt__getFinalizer());
        // Inline function 'org.jetbrains.skia.paragraph.FontCollection.findTypefaces.<anonymous>' call
        var arrayDecoder_0 = arrayDecoder;
        // Inline function 'kotlin.collections.toTypedArray' call
        // Inline function 'kotlin.collections.map' call
        var this_0 = until(0, arrayDecoder_0.m());
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
        var tmp0_iterator = this_0.o();
        while (tmp0_iterator.d1()) {
          var item = tmp0_iterator.f1();
          // Inline function 'org.jetbrains.skia.paragraph.FontCollection.findTypefaces.<anonymous>.<anonymous>' call
          var tmp$ret$3 = new Typeface(arrayDecoder_0.k37(item));
          destination.a1(tmp$ret$3);
        }
        tmp_0 = copyToArray(destination);
      }finally {
        var tmp0_safe_receiver = arrayDecoder;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.ss();
        }
      }
      tmp = tmp_0;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  var HeightMode_ALL_instance;
  var HeightMode_DISABLE_FIRST_ASCENT_instance;
  var HeightMode_DISABLE_LAST_DESCENT_instance;
  var HeightMode_DISABLE_ALL_instance;
  var HeightMode_entriesInitialized;
  function HeightMode_initEntries() {
    if (HeightMode_entriesInitialized)
      return Unit_instance;
    HeightMode_entriesInitialized = true;
    HeightMode_ALL_instance = new HeightMode('ALL', 0);
    HeightMode_DISABLE_FIRST_ASCENT_instance = new HeightMode('DISABLE_FIRST_ASCENT', 1);
    HeightMode_DISABLE_LAST_DESCENT_instance = new HeightMode('DISABLE_LAST_DESCENT', 2);
    HeightMode_DISABLE_ALL_instance = new HeightMode('DISABLE_ALL', 3);
  }
  function HeightMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function HeightMode_ALL_getInstance() {
    HeightMode_initEntries();
    return HeightMode_ALL_instance;
  }
  function HeightMode_DISABLE_FIRST_ASCENT_getInstance() {
    HeightMode_initEntries();
    return HeightMode_DISABLE_FIRST_ASCENT_instance;
  }
  function HeightMode_DISABLE_LAST_DESCENT_getInstance() {
    HeightMode_initEntries();
    return HeightMode_DISABLE_LAST_DESCENT_instance;
  }
  function HeightMode_DISABLE_ALL_getInstance() {
    HeightMode_initEntries();
    return HeightMode_DISABLE_ALL_instance;
  }
  function Companion_30() {
  }
  protoOf(Companion_30).t39 = function (array) {
    return org_jetbrains_skia_paragraph_LineMetrics__1nGetArraySize(array);
  };
  protoOf(Companion_30).u39 = function (array) {
    return org_jetbrains_skia_paragraph_LineMetrics__1nDisposeArray(array);
  };
  protoOf(Companion_30).v39 = function (array, index) {
    var intArray = new Int32Array(6);
    var doubleArray = new Float64Array(7);
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    $l$block_0: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        var handle = $this$interopScope.p34(intArray);
        // Inline function 'org.jetbrains.skia.paragraph.Companion.getArrayElement.<anonymous>' call
        // Inline function 'org.jetbrains.skia.impl.withResult' call
        $l$block: {
          // Inline function 'org.jetbrains.skia.impl.interopScope' call
          try {
            var tmp0_0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
            _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0_0 + 1 | 0);
            // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
            var $this$interopScope_0 = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
            var handle_0 = $this$interopScope_0.w39(doubleArray);
            // Inline function 'org.jetbrains.skia.paragraph.Companion.getArrayElement.<anonymous>.<anonymous>' call
            org_jetbrains_skia_paragraph_LineMetrics__1nGetArrayElement(array, index, handle, handle_0);
            $this$interopScope_0.x39(handle_0, doubleArray);
            break $l$block;
          }finally {
            var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
            _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
            if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
              _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().mv();
            }
          }
        }
        $this$interopScope.u2z(handle, intArray);
        break $l$block_0;
      }finally {
        var tmp1_0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1_0 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().mv();
        }
      }
    }
    return new LineMetrics(intArray[0], intArray[1], intArray[2], intArray[3], !(intArray[4] === 0), doubleArray[0], doubleArray[1], doubleArray[2], doubleArray[3], doubleArray[4], doubleArray[5], doubleArray[6], intArray[5]);
  };
  var Companion_instance_30;
  function Companion_getInstance_31() {
    return Companion_instance_30;
  }
  function LineMetrics(startIndex, endIndex, endExcludingWhitespaces, endIncludingNewline, isHardBreak, ascent, descent, unscaledAscent, height, width, left, baseline, lineNumber) {
    this.y39_1 = startIndex;
    this.z39_1 = endIndex;
    this.a3a_1 = endExcludingWhitespaces;
    this.b3a_1 = endIncludingNewline;
    this.c3a_1 = isHardBreak;
    this.d3a_1 = ascent;
    this.e3a_1 = descent;
    this.f3a_1 = unscaledAscent;
    this.g3a_1 = height;
    this.h3a_1 = width;
    this.i3a_1 = left;
    this.j3a_1 = baseline;
    this.k3a_1 = lineNumber;
  }
  protoOf(LineMetrics).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof LineMetrics))
      return false;
    if (!(this.y39_1 === other.y39_1))
      return false;
    if (!(this.z39_1 === other.z39_1))
      return false;
    if (!(this.a3a_1 === other.a3a_1))
      return false;
    if (!(this.b3a_1 === other.b3a_1))
      return false;
    if (!(this.c3a_1 === other.c3a_1))
      return false;
    if (!(compareTo(this.d3a_1, other.d3a_1) === 0))
      return false;
    if (!(compareTo(this.e3a_1, other.e3a_1) === 0))
      return false;
    if (!(compareTo(this.f3a_1, other.f3a_1) === 0))
      return false;
    if (!(compareTo(this.g3a_1, other.g3a_1) === 0))
      return false;
    if (!(compareTo(this.h3a_1, other.h3a_1) === 0))
      return false;
    if (!(compareTo(this.i3a_1, other.i3a_1) === 0))
      return false;
    if (!(compareTo(this.j3a_1, other.j3a_1) === 0))
      return false;
    return this.k3a_1 === other.k3a_1;
  };
  protoOf(LineMetrics).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.y39_1 | 0;
    result = imul(result, PRIME) + this.z39_1 | 0;
    result = imul(result, PRIME) + this.a3a_1 | 0;
    result = imul(result, PRIME) + this.b3a_1 | 0;
    result = imul(result, PRIME) + (this.c3a_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + toBits_0(this.d3a_1).fa() | 0;
    result = imul(result, PRIME) + toBits_0(this.e3a_1).fa() | 0;
    result = imul(result, PRIME) + toBits_0(this.f3a_1).fa() | 0;
    result = imul(result, PRIME) + toBits_0(this.g3a_1).fa() | 0;
    result = imul(result, PRIME) + toBits_0(this.h3a_1).fa() | 0;
    result = imul(result, PRIME) + toBits_0(this.i3a_1).fa() | 0;
    result = imul(result, PRIME) + toBits_0(this.j3a_1).fa() | 0;
    result = imul(result, PRIME) + this.k3a_1 | 0;
    return result;
  };
  protoOf(LineMetrics).toString = function () {
    return 'LineMetrics(_startIndex=' + this.y39_1 + ', _endIndex=' + this.z39_1 + ', _endExcludingWhitespaces=' + this.a3a_1 + ', _endIncludingNewline=' + this.b3a_1 + ', _hardBreak=' + this.c3a_1 + ', _ascent=' + this.d3a_1 + ', _descent=' + this.e3a_1 + ', _unscaledAscent=' + this.f3a_1 + ', _height=' + this.g3a_1 + ', _width=' + this.h3a_1 + ', _left=' + this.i3a_1 + ', _baseline=' + this.j3a_1 + ', _lineNumber=' + this.k3a_1 + ')';
  };
  function Companion_31() {
    Companion_instance_31 = this;
    Companion_instance_40.m2y();
  }
  var Companion_instance_31;
  function Companion_getInstance_32() {
    if (Companion_instance_31 == null)
      new Companion_31();
    return Companion_instance_31;
  }
  function _FinalizerHolder_10() {
    _FinalizerHolder_instance_10 = this;
    this.l3a_1 = org_jetbrains_skia_paragraph_Paragraph__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_10;
  function _FinalizerHolder_getInstance_10() {
    if (_FinalizerHolder_instance_10 == null)
      new _FinalizerHolder_10();
    return _FinalizerHolder_instance_10;
  }
  function Paragraph$getWordBoundary$lambda(this$0, $offset) {
    return function ($this$fromInteropPointer, it) {
      org_jetbrains_skia_paragraph_Paragraph__1nGetWordBoundary(this$0.t2y_1, $offset, it);
      return Unit_instance;
    };
  }
  function Paragraph(ptr, text) {
    Companion_getInstance_32();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_10().l3a_1);
    Stats_instance.o2y();
    this.o3a_1 = text;
  }
  protoOf(Paragraph).y1k = function () {
    if (!(this.o3a_1 == null)) {
      ensureNotNull(this.o3a_1).y1k();
      this.o3a_1 = null;
    }
    protoOf(Managed).y1k.call(this);
  };
  protoOf(Paragraph).f2w = function () {
    var tmp;
    try {
      Stats_instance.o2y();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetHeight(this.t2y_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).p3a = function () {
    var tmp;
    try {
      Stats_instance.o2y();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetMinIntrinsicWidth(this.t2y_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).q3a = function () {
    var tmp;
    try {
      Stats_instance.o2y();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetMaxIntrinsicWidth(this.t2y_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).r3a = function () {
    var tmp;
    try {
      Stats_instance.o2y();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetAlphabeticBaseline(this.t2y_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).s3a = function () {
    var tmp;
    try {
      Stats_instance.o2y();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nDidExceedMaxLines(this.t2y_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).t3a = function (width) {
    Stats_instance.o2y();
    org_jetbrains_skia_paragraph_Paragraph__1nLayout(this.t2y_1, width);
    return this;
  };
  protoOf(Paragraph).u3a = function (canvas, x, y) {
    var tmp;
    try {
      Stats_instance.o2y();
      org_jetbrains_skia_paragraph_Paragraph__1nPaint(this.t2y_1, getPtr(canvas), x, y);
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(canvas);
    }
    return tmp;
  };
  protoOf(Paragraph).v3a = function (start, end, rectHeightMode, rectWidthMode) {
    var tmp;
    try {
      Stats_instance.o2y();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
          // Inline function 'org.jetbrains.skia.paragraph.Paragraph.getRectsForRange.<anonymous>' call
          // Inline function 'org.jetbrains.skia.impl.InteropScope.fromInterop' call
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
          var this_0 = org_jetbrains_skia_paragraph_Paragraph__1nGetRectsForRange(this.t2y_1, start, end, rectHeightMode.t9_1, rectWidthMode.t9_1);
          var size = Companion_instance_35.t39(this_0);
          var tmp_0 = 0;
          // Inline function 'kotlin.arrayOfNulls' call
          var tmp_1 = fillArrayVal(Array(size), null);
          while (tmp_0 < size) {
            var tmp_2 = tmp_0;
            tmp_1[tmp_2] = Companion_instance_35.v39(this_0, tmp_2);
            tmp_0 = tmp_0 + 1 | 0;
          }
          var result = tmp_1;
          Companion_instance_35.u39(this_0);
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
            _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().mv();
          }
        }
      }
      tmp = result;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).w3a = function () {
    var tmp;
    try {
      Stats_instance.o2y();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
          // Inline function 'org.jetbrains.skia.paragraph.Paragraph.<get-rectsForPlaceholders>.<anonymous>' call
          // Inline function 'org.jetbrains.skia.impl.InteropScope.fromInterop' call
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
          var this_0 = org_jetbrains_skia_paragraph_Paragraph__1nGetRectsForPlaceholders(this.t2y_1);
          var size = Companion_instance_35.t39(this_0);
          var tmp_0 = 0;
          // Inline function 'kotlin.arrayOfNulls' call
          var tmp_1 = fillArrayVal(Array(size), null);
          while (tmp_0 < size) {
            var tmp_2 = tmp_0;
            tmp_1[tmp_2] = Companion_instance_35.v39(this_0, tmp_2);
            tmp_0 = tmp_0 + 1 | 0;
          }
          var result = tmp_1;
          Companion_instance_35.u39(this_0);
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
            _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().mv();
          }
        }
      }
      tmp = result;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).x3a = function (offset) {
    var tmp;
    try {
      Stats_instance.o2y();
      var tmp_0 = Companion_instance_13;
      tmp = fromInteropPointer_0(tmp_0, Paragraph$getWordBoundary$lambda(this, offset));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).y3a = function () {
    var tmp;
    try {
      var tmp_0;
      if (this.o3a_1 == null) {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = [];
      } else {
        Stats_instance.o2y();
        $l$block: {
          // Inline function 'org.jetbrains.skia.impl.interopScope' call
          try {
            var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
            _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
            // Inline function 'org.jetbrains.skia.paragraph.Paragraph.<get-lineMetrics>.<anonymous>' call
            // Inline function 'org.jetbrains.skia.impl.InteropScope.fromInterop' call
            _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
            var this_0 = org_jetbrains_skia_paragraph_Paragraph__1nGetLineMetrics(this.t2y_1, getPtr(this.o3a_1));
            var size = Companion_instance_30.t39(this_0);
            var tmp_1 = 0;
            // Inline function 'kotlin.arrayOfNulls' call
            var tmp_2 = fillArrayVal(Array(size), null);
            while (tmp_1 < size) {
              var tmp_3 = tmp_1;
              tmp_2[tmp_3] = Companion_instance_30.v39(this_0, tmp_3);
              tmp_1 = tmp_1 + 1 | 0;
            }
            var result = tmp_2;
            Companion_instance_30.u39(this_0);
            break $l$block;
          }finally {
            var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
            _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
            if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
              _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().mv();
            }
          }
        }
        tmp_0 = result;
      }
      tmp = tmp_0;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(this.o3a_1);
    }
    return tmp;
  };
  protoOf(Paragraph).z3a = function () {
    var tmp;
    try {
      Stats_instance.o2y();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetLineNumber(this.t2y_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function Companion_32() {
    Companion_instance_32 = this;
    Companion_instance_40.m2y();
  }
  var Companion_instance_32;
  function Companion_getInstance_33() {
    if (Companion_instance_32 == null)
      new Companion_32();
    return Companion_instance_32;
  }
  function _FinalizerHolder_11() {
    _FinalizerHolder_instance_11 = this;
    this.a3b_1 = org_jetbrains_skia_paragraph_ParagraphBuilder__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_11;
  function _FinalizerHolder_getInstance_11() {
    if (_FinalizerHolder_instance_11 == null)
      new _FinalizerHolder_11();
    return _FinalizerHolder_instance_11;
  }
  function ParagraphBuilder(style, fc) {
    Companion_getInstance_33();
    Managed.call(this, makeParagraphBuilder(style, fc), _FinalizerHolder_getInstance_11().a3b_1);
    this.d3b_1 = null;
  }
  protoOf(ParagraphBuilder).e3b = function (style) {
    var tmp;
    try {
      Stats_instance.o2y();
      org_jetbrains_skia_paragraph_ParagraphBuilder__1nPushStyle(this.t2y_1, getPtr(style));
      tmp = this;
    }finally {
      reachabilityBarrier(style);
    }
    return tmp;
  };
  protoOf(ParagraphBuilder).f3b = function (text) {
    Stats_instance.o2y();
    try {
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
          var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
          org_jetbrains_skia_paragraph_ParagraphBuilder__1nAddText(this.t2y_1, $this$interopScope.x2y(text));
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
            _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().mv();
          }
        }
      }
    }finally {
      reachabilityBarrier(this);
    }
    if (this.d3b_1 == null)
      this.d3b_1 = ManagedString_init_$Create$(text);
    else {
      ensureNotNull(this.d3b_1).v34(text);
    }
    return this;
  };
  protoOf(ParagraphBuilder).g3b = function (style) {
    Stats_instance.o2y();
    org_jetbrains_skia_paragraph_ParagraphBuilder__1nAddPlaceholder(this.t2y_1, style.h3b_1, style.i3b_1, style.m3b().t9_1, style.n3b().t9_1, style.l3b_1);
    return this;
  };
  protoOf(ParagraphBuilder).e3 = function () {
    var tmp;
    try {
      Stats_instance.o2y();
      var paragraph = new Paragraph(org_jetbrains_skia_paragraph_ParagraphBuilder__1nBuild(this.t2y_1), this.d3b_1);
      this.d3b_1 = null;
      tmp = paragraph;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function makeParagraphBuilder(style, fc) {
    Stats_instance.o2y();
    var tmp;
    try {
      tmp = org_jetbrains_skia_paragraph_ParagraphBuilder__1nMake(getPtr(style), getPtr(fc));
    }finally {
      reachabilityBarrier(style);
      reachabilityBarrier(fc);
    }
    return tmp;
  }
  function Companion_33() {
    Companion_instance_33 = this;
    Companion_instance_40.m2y();
  }
  var Companion_instance_33;
  function Companion_getInstance_34() {
    if (Companion_instance_33 == null)
      new Companion_33();
    return Companion_instance_33;
  }
  function _FinalizerHolder_12() {
    _FinalizerHolder_instance_12 = this;
    this.o3b_1 = org_jetbrains_skia_paragraph_ParagraphStyle__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_12;
  function _FinalizerHolder_getInstance_12() {
    if (_FinalizerHolder_instance_12 == null)
      new _FinalizerHolder_12();
    return _FinalizerHolder_instance_12;
  }
  function ParagraphStyle() {
    Companion_getInstance_34();
    Managed.call(this, org_jetbrains_skia_paragraph_ParagraphStyle__1nMake(), _FinalizerHolder_getInstance_12().o3b_1);
    Stats_instance.o2y();
  }
  protoOf(ParagraphStyle).u2y = function (other) {
    var tmp;
    try {
      Stats_instance.o2y();
      tmp = org_jetbrains_skia_paragraph_ParagraphStyle__1nEquals(this.t2y_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).r3b = function (value) {
    var tmp;
    try {
      Stats_instance.o2y();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetTextStyle(this.t2y_1, getPtr(value));
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(value);
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).s3b = function (value) {
    var tmp;
    try {
      Stats_instance.o2y();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetDirection(this.t2y_1, value.t9_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).t3b = function (value) {
    var tmp;
    try {
      Stats_instance.o2y();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetAlignment(this.t2y_1, value.t9_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).u3b = function (value) {
    var tmp;
    try {
      Stats_instance.o2y();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetMaxLinesCount(this.t2y_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).v3b = function (value) {
    var tmp;
    try {
      Stats_instance.o2y();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
          var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
          org_jetbrains_skia_paragraph_ParagraphStyle__1nSetEllipsis(this.t2y_1, $this$interopScope.x2y(value));
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
            _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().mv();
          }
        }
      }
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).w3b = function (value) {
    var tmp;
    try {
      Stats_instance.o2y();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetHeightMode(this.t2y_1, value.t9_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).x3b = function (value) {
    var tmp;
    try {
      Stats_instance.o2y();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetTextIndent(this.t2y_1, value.y3b_1, value.z3b_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  var PlaceholderAlignment_BASELINE_instance;
  var PlaceholderAlignment_ABOVE_BASELINE_instance;
  var PlaceholderAlignment_BELOW_BASELINE_instance;
  var PlaceholderAlignment_TOP_instance;
  var PlaceholderAlignment_BOTTOM_instance;
  var PlaceholderAlignment_MIDDLE_instance;
  var PlaceholderAlignment_entriesInitialized;
  function PlaceholderAlignment_initEntries() {
    if (PlaceholderAlignment_entriesInitialized)
      return Unit_instance;
    PlaceholderAlignment_entriesInitialized = true;
    PlaceholderAlignment_BASELINE_instance = new PlaceholderAlignment('BASELINE', 0);
    PlaceholderAlignment_ABOVE_BASELINE_instance = new PlaceholderAlignment('ABOVE_BASELINE', 1);
    PlaceholderAlignment_BELOW_BASELINE_instance = new PlaceholderAlignment('BELOW_BASELINE', 2);
    PlaceholderAlignment_TOP_instance = new PlaceholderAlignment('TOP', 3);
    PlaceholderAlignment_BOTTOM_instance = new PlaceholderAlignment('BOTTOM', 4);
    PlaceholderAlignment_MIDDLE_instance = new PlaceholderAlignment('MIDDLE', 5);
  }
  function PlaceholderAlignment(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PlaceholderAlignment_ABOVE_BASELINE_getInstance() {
    PlaceholderAlignment_initEntries();
    return PlaceholderAlignment_ABOVE_BASELINE_instance;
  }
  function PlaceholderAlignment_TOP_getInstance() {
    PlaceholderAlignment_initEntries();
    return PlaceholderAlignment_TOP_instance;
  }
  function PlaceholderAlignment_BOTTOM_getInstance() {
    PlaceholderAlignment_initEntries();
    return PlaceholderAlignment_BOTTOM_instance;
  }
  function PlaceholderAlignment_MIDDLE_getInstance() {
    PlaceholderAlignment_initEntries();
    return PlaceholderAlignment_MIDDLE_instance;
  }
  function PlaceholderStyle(width, height, alignment, baselineMode, baseline) {
    this.h3b_1 = width;
    this.i3b_1 = height;
    this.j3b_1 = alignment;
    this.k3b_1 = baselineMode;
    this.l3b_1 = baseline;
  }
  protoOf(PlaceholderStyle).m3b = function () {
    return this.j3b_1;
  };
  protoOf(PlaceholderStyle).n3b = function () {
    return this.k3b_1;
  };
  protoOf(PlaceholderStyle).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof PlaceholderStyle))
      return false;
    if (!(compareTo(this.h3b_1, other.h3b_1) === 0))
      return false;
    if (!(compareTo(this.i3b_1, other.i3b_1) === 0))
      return false;
    if (!(compareTo(this.l3b_1, other.l3b_1) === 0))
      return false;
    if (!this.m3b().equals(other.m3b()))
      return false;
    return this.n3b().equals(other.n3b());
  };
  protoOf(PlaceholderStyle).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.h3b_1) | 0;
    result = imul(result, PRIME) + toBits(this.i3b_1) | 0;
    result = imul(result, PRIME) + toBits(this.l3b_1) | 0;
    result = imul(result, PRIME) + this.m3b().hashCode() | 0;
    result = imul(result, PRIME) + this.n3b().hashCode() | 0;
    return result;
  };
  protoOf(PlaceholderStyle).toString = function () {
    return 'PlaceholderStyle(_width=' + this.h3b_1 + ', _height=' + this.i3b_1 + ', _alignment=' + this.m3b() + ', _baselineMode=' + this.n3b() + ', _baseline=' + this.l3b_1 + ')';
  };
  var RectHeightMode_TIGHT_instance;
  var RectHeightMode_MAX_instance;
  var RectHeightMode_INCLUDE_LINE_SPACING_MIDDLE_instance;
  var RectHeightMode_INCLUDE_LINE_SPACING_TOP_instance;
  var RectHeightMode_INCLUDE_LINE_SPACING_BOTTOM_instance;
  var RectHeightMode_STRUT_instance;
  var RectHeightMode_entriesInitialized;
  function RectHeightMode_initEntries() {
    if (RectHeightMode_entriesInitialized)
      return Unit_instance;
    RectHeightMode_entriesInitialized = true;
    RectHeightMode_TIGHT_instance = new RectHeightMode('TIGHT', 0);
    RectHeightMode_MAX_instance = new RectHeightMode('MAX', 1);
    RectHeightMode_INCLUDE_LINE_SPACING_MIDDLE_instance = new RectHeightMode('INCLUDE_LINE_SPACING_MIDDLE', 2);
    RectHeightMode_INCLUDE_LINE_SPACING_TOP_instance = new RectHeightMode('INCLUDE_LINE_SPACING_TOP', 3);
    RectHeightMode_INCLUDE_LINE_SPACING_BOTTOM_instance = new RectHeightMode('INCLUDE_LINE_SPACING_BOTTOM', 4);
    RectHeightMode_STRUT_instance = new RectHeightMode('STRUT', 5);
  }
  function RectHeightMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function RectHeightMode_MAX_getInstance() {
    RectHeightMode_initEntries();
    return RectHeightMode_MAX_instance;
  }
  function RectHeightMode_STRUT_getInstance() {
    RectHeightMode_initEntries();
    return RectHeightMode_STRUT_instance;
  }
  var RectWidthMode_TIGHT_instance;
  var RectWidthMode_MAX_instance;
  var RectWidthMode_entriesInitialized;
  function RectWidthMode_initEntries() {
    if (RectWidthMode_entriesInitialized)
      return Unit_instance;
    RectWidthMode_entriesInitialized = true;
    RectWidthMode_TIGHT_instance = new RectWidthMode('TIGHT', 0);
    RectWidthMode_MAX_instance = new RectWidthMode('MAX', 1);
  }
  function RectWidthMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function RectWidthMode_TIGHT_getInstance() {
    RectWidthMode_initEntries();
    return RectWidthMode_TIGHT_instance;
  }
  function Companion_34() {
  }
  var Companion_instance_34;
  function Companion_getInstance_35() {
    return Companion_instance_34;
  }
  function Shadow(color, offsetX, offsetY, blurSigma) {
    this.a3c_1 = color;
    this.b3c_1 = offsetX;
    this.c3c_1 = offsetY;
    this.d3c_1 = blurSigma;
  }
  protoOf(Shadow).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Shadow))
      return false;
    if (!(this.a3c_1 === other.a3c_1))
      return false;
    if (!(compareTo(this.b3c_1, other.b3c_1) === 0))
      return false;
    if (!(compareTo(this.c3c_1, other.c3c_1) === 0))
      return false;
    return compareTo(this.d3c_1, other.d3c_1) === 0;
  };
  protoOf(Shadow).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.a3c_1 | 0;
    result = imul(result, PRIME) + toBits(this.b3c_1) | 0;
    result = imul(result, PRIME) + toBits(this.c3c_1) | 0;
    var blurSigma = toBits_0(this.d3c_1);
    result = imul(result, PRIME) + blurSigma.nb(32).qb(blurSigma).fa() | 0;
    return result;
  };
  protoOf(Shadow).toString = function () {
    return 'Shadow(_color=' + this.a3c_1 + ', _offsetX=' + this.b3c_1 + ', _offsetY=' + this.c3c_1 + ', _blurSigma=' + this.d3c_1 + ')';
  };
  function TextBox_init_$Init$(l, t, r, b, direction, $this) {
    TextBox.call($this, Companion_instance_24.g37(l, t, r, b), values_3()[direction]);
    return $this;
  }
  function TextBox_init_$Create$(l, t, r, b, direction) {
    return TextBox_init_$Init$(l, t, r, b, direction, objectCreate(protoOf(TextBox)));
  }
  function Companion_35() {
  }
  protoOf(Companion_35).v39 = function (array, index) {
    var rect = new Float32Array(4);
    var direction = new Int32Array(1);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        var rectPtr = $this$interopScope.h30(rect);
        var directionPtr = $this$interopScope.t2z(direction);
        org_jetbrains_skia_paragraph_TextBox__1nGetArrayElement(array, index, rectPtr, directionPtr);
        $this$interopScope.j33(rectPtr, rect);
        $this$interopScope.u2z(directionPtr, direction);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().mv();
        }
      }
    }
    return TextBox_init_$Create$(rect[0], rect[1], rect[2], rect[3], direction[0]);
  };
  protoOf(Companion_35).t39 = function (array) {
    return org_jetbrains_skia_paragraph_TextBox__1nGetArraySize(array);
  };
  protoOf(Companion_35).u39 = function (array) {
    return org_jetbrains_skia_paragraph_TextBox__1nDisposeArray(array);
  };
  var Companion_instance_35;
  function Companion_getInstance_36() {
    return Companion_instance_35;
  }
  function TextBox(rect, direction) {
    this.e3c_1 = rect;
    this.f3c_1 = direction;
  }
  protoOf(TextBox).g3c = function () {
    return this.f3c_1;
  };
  protoOf(TextBox).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof TextBox))
      return false;
    if (!this.e3c_1.equals(other.e3c_1))
      return false;
    return this.g3c().equals(other.g3c());
  };
  protoOf(TextBox).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.e3c_1.hashCode() | 0;
    result = imul(result, PRIME) + this.g3c().hashCode() | 0;
    return result;
  };
  protoOf(TextBox).toString = function () {
    return 'TextBox(_rect=' + this.e3c_1 + ', _direction=' + this.g3c() + ')';
  };
  function TextIndent(firstLine, restLine) {
    firstLine = firstLine === VOID ? 0.0 : firstLine;
    restLine = restLine === VOID ? 0.0 : restLine;
    this.y3b_1 = firstLine;
    this.z3b_1 = restLine;
  }
  protoOf(TextIndent).toString = function () {
    return 'TextIndent(firstLine=' + this.y3b_1 + ', restLine=' + this.z3b_1 + ')';
  };
  protoOf(TextIndent).hashCode = function () {
    var result = getNumberHashCode(this.y3b_1);
    result = imul(result, 31) + getNumberHashCode(this.z3b_1) | 0;
    return result;
  };
  protoOf(TextIndent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextIndent))
      return false;
    var tmp0_other_with_cast = other instanceof TextIndent ? other : THROW_CCE();
    if (!equals(this.y3b_1, tmp0_other_with_cast.y3b_1))
      return false;
    if (!equals(this.z3b_1, tmp0_other_with_cast.z3b_1))
      return false;
    return true;
  };
  function Companion_36() {
    Companion_instance_36 = this;
    Companion_instance_40.m2y();
  }
  var Companion_instance_36;
  function Companion_getInstance_37() {
    if (Companion_instance_36 == null)
      new Companion_36();
    return Companion_instance_36;
  }
  function TextStyle_init_$Init$($this) {
    TextStyle.call($this, org_jetbrains_skia_paragraph_TextStyle__1nMake());
    Stats_instance.o2y();
    return $this;
  }
  function TextStyle_init_$Create$() {
    return TextStyle_init_$Init$(objectCreate(protoOf(TextStyle)));
  }
  function _FinalizerHolder_13() {
    _FinalizerHolder_instance_13 = this;
    this.h3c_1 = org_jetbrains_skia_paragraph_TextStyle__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_13;
  function _FinalizerHolder_getInstance_13() {
    if (_FinalizerHolder_instance_13 == null)
      new _FinalizerHolder_13();
    return _FinalizerHolder_instance_13;
  }
  function TextStyle$_get_fontMetrics_$lambda_9osnwy(this$0) {
    return function ($this$fromInteropPointer, it) {
      org_jetbrains_skia_paragraph_TextStyle__1nGetFontMetrics(this$0.t2y_1, it);
      return Unit_instance;
    };
  }
  function TextStyle(ptr) {
    Companion_getInstance_37();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_13().h3c_1);
  }
  protoOf(TextStyle).u2y = function (other) {
    var tmp;
    try {
      Stats_instance.o2y();
      tmp = org_jetbrains_skia_paragraph_TextStyle__1nEquals(this.t2y_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(TextStyle).d35 = function (value) {
    this.k3c(value);
  };
  protoOf(TextStyle).k3c = function (color) {
    Stats_instance.o2y();
    org_jetbrains_skia_paragraph_TextStyle__1nSetColor(this.t2y_1, color);
    return this;
  };
  protoOf(TextStyle).l3c = function (value) {
    this.m3c(value);
  };
  protoOf(TextStyle).m3c = function (paint) {
    var tmp;
    try {
      Stats_instance.o2y();
      org_jetbrains_skia_paragraph_TextStyle__1nSetForeground(this.t2y_1, getPtr(paint));
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(paint);
    }
    return tmp;
  };
  protoOf(TextStyle).n3c = function (value) {
    this.o3c(value);
  };
  protoOf(TextStyle).o3c = function (paint) {
    var tmp;
    try {
      Stats_instance.o2y();
      org_jetbrains_skia_paragraph_TextStyle__1nSetBackground(this.t2y_1, getPtr(paint));
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(paint);
    }
    return tmp;
  };
  protoOf(TextStyle).p3c = function (value) {
    this.q3c(value);
  };
  protoOf(TextStyle).q3c = function (d) {
    Stats_instance.o2y();
    org_jetbrains_skia_paragraph_TextStyle__1nSetDecorationStyle(this.t2y_1, d.e39_1, d.f39_1, d.g39_1, d.h39_1, d.i39_1, d.j39_1.t9_1, d.k39_1);
    return this;
  };
  protoOf(TextStyle).r3c = function (value) {
    this.s3c(value);
  };
  protoOf(TextStyle).b38 = function () {
    var tmp;
    try {
      Stats_instance.o2y();
      tmp = FontStyle_init_$Create$_0(org_jetbrains_skia_paragraph_TextStyle__1nGetFontStyle(this.t2y_1));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(TextStyle).s3c = function (s) {
    Stats_instance.o2y();
    org_jetbrains_skia_paragraph_TextStyle__1nSetFontStyle(this.t2y_1, s.l33_1);
    return this;
  };
  protoOf(TextStyle).t3c = function (s) {
    Stats_instance.o2y();
    org_jetbrains_skia_paragraph_TextStyle__1nAddShadow(this.t2y_1, s.a3c_1, s.b3c_1, s.c3c_1, s.d3c_1);
    return this;
  };
  protoOf(TextStyle).u3c = function (f) {
    Stats_instance.o2y();
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        org_jetbrains_skia_paragraph_TextStyle__1nAddFontFeature(this.t2y_1, $this$interopScope.x2y(f.r32()), f.o32_1);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().mv();
        }
      }
    }
    return this;
  };
  protoOf(TextStyle).v3c = function (FontFeatures) {
    var inductionVariable = 0;
    var last = FontFeatures.length;
    while (inductionVariable < last) {
      var s = FontFeatures[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      this.u3c(s);
    }
    return this;
  };
  protoOf(TextStyle).w3c = function (value) {
    this.x3c(value);
  };
  protoOf(TextStyle).x3c = function (size) {
    Stats_instance.o2y();
    org_jetbrains_skia_paragraph_TextStyle__1nSetFontSize(this.t2y_1, size);
    return this;
  };
  protoOf(TextStyle).y3c = function (value) {
    this.z3c(value);
  };
  protoOf(TextStyle).z3c = function (families) {
    Stats_instance.o2y();
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
        var tmp = this.t2y_1;
        var tmp_0 = $this$interopScope.s39(families);
        var tmp1_elvis_lhs = families == null ? null : families.length;
        org_jetbrains_skia_paragraph_TextStyle__1nSetFontFamilies(tmp, tmp_0, tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
        _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
          _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().mv();
        }
      }
    }
    return this;
  };
  protoOf(TextStyle).a3d = function (value) {
    this.b3d(value);
  };
  protoOf(TextStyle).b3d = function (height) {
    Stats_instance.o2y();
    if (height == null) {
      org_jetbrains_skia_paragraph_TextStyle__1nSetHeight(this.t2y_1, false, 0.0);
    } else {
      org_jetbrains_skia_paragraph_TextStyle__1nSetHeight(this.t2y_1, true, height);
    }
    return this;
  };
  protoOf(TextStyle).c3d = function (value) {
    this.d3d(value);
  };
  protoOf(TextStyle).d3d = function (letterSpacing) {
    Stats_instance.o2y();
    org_jetbrains_skia_paragraph_TextStyle__1nSetLetterSpacing(this.t2y_1, letterSpacing);
    return this;
  };
  protoOf(TextStyle).e3d = function (value) {
    this.f3d(value);
  };
  protoOf(TextStyle).f3d = function (baselineShift) {
    Stats_instance.o2y();
    org_jetbrains_skia_paragraph_TextStyle__1nSetBaselineShift(this.t2y_1, baselineShift);
    return this;
  };
  protoOf(TextStyle).g3d = function () {
    var tmp;
    try {
      Stats_instance.o2y();
      var tmp_0 = Companion_instance_7;
      tmp = fromInteropPointer(tmp_0, TextStyle$_get_fontMetrics_$lambda_9osnwy(this));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function Companion_37() {
    Companion_instance_37 = this;
    Companion_instance_40.m2y();
  }
  var Companion_instance_37;
  function Companion_getInstance_38() {
    if (Companion_instance_37 == null)
      new Companion_37();
    return Companion_instance_37;
  }
  function TypefaceFontProvider() {
    Companion_getInstance_38();
    FontMgr_init_$Init$(org_jetbrains_skia_paragraph_TypefaceFontProvider__1nMake(), this);
    Stats_instance.o2y();
  }
  protoOf(TypefaceFontProvider).j3d = function (typeface, alias) {
    var tmp;
    try {
      Stats_instance.o2y();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp0 + 1 | 0);
          var $this$interopScope = _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi();
          org_jetbrains_skia_paragraph_TypefaceFontProvider__1nRegisterTypeface(this.t2y_1, getPtr(typeface), $this$interopScope.x2y(alias));
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$14q3g08_y31ph7();
          _set_interopScopeCounter_$accessor$14q3g08_7yblxt(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$14q3g08_y31ph7() === 0) {
            _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi().mv();
          }
        }
      }
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(typeface);
    }
    return tmp;
  };
  function SkikoKeyboardEvent(key, modifiers, kind, timestamp, platform) {
    modifiers = modifiers === VOID ? Companion_getInstance_39().k3d_1 : modifiers;
    timestamp = timestamp === VOID ? new Long(0, 0) : timestamp;
    this.p3d_1 = key;
    this.q3d_1 = modifiers;
    this.r3d_1 = kind;
    this.s3d_1 = timestamp;
    this.t3d_1 = platform;
  }
  protoOf(SkikoKeyboardEvent).toString = function () {
    return 'SkikoKeyboardEvent(key=' + this.p3d_1 + ', modifiers=' + new SkikoInputModifiers(this.q3d_1) + ', kind=' + this.r3d_1 + ', timestamp=' + this.s3d_1.toString() + ', platform=' + this.t3d_1 + ')';
  };
  protoOf(SkikoKeyboardEvent).hashCode = function () {
    var result = this.p3d_1.hashCode();
    result = imul(result, 31) + SkikoInputModifiers__hashCode_impl_dkoeid(this.q3d_1) | 0;
    result = imul(result, 31) + this.r3d_1.hashCode() | 0;
    result = imul(result, 31) + this.s3d_1.hashCode() | 0;
    result = imul(result, 31) + (this.t3d_1 == null ? 0 : hashCode(this.t3d_1)) | 0;
    return result;
  };
  protoOf(SkikoKeyboardEvent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SkikoKeyboardEvent))
      return false;
    var tmp0_other_with_cast = other instanceof SkikoKeyboardEvent ? other : THROW_CCE();
    if (!this.p3d_1.equals(tmp0_other_with_cast.p3d_1))
      return false;
    if (!(this.q3d_1 === tmp0_other_with_cast.q3d_1))
      return false;
    if (!this.r3d_1.equals(tmp0_other_with_cast.r3d_1))
      return false;
    if (!this.s3d_1.equals(tmp0_other_with_cast.s3d_1))
      return false;
    if (!equals(this.t3d_1, tmp0_other_with_cast.t3d_1))
      return false;
    return true;
  };
  function _SkikoInputModifiers___init__impl__z8g2zy(value) {
    return value;
  }
  function _SkikoInputModifiers___get_value__impl__13eq4a($this) {
    return $this;
  }
  function Companion_38() {
    Companion_instance_38 = this;
    this.k3d_1 = _SkikoInputModifiers___init__impl__z8g2zy(0);
    this.l3d_1 = _SkikoInputModifiers___init__impl__z8g2zy(1);
    this.m3d_1 = _SkikoInputModifiers___init__impl__z8g2zy(2);
    this.n3d_1 = _SkikoInputModifiers___init__impl__z8g2zy(4);
    this.o3d_1 = _SkikoInputModifiers___init__impl__z8g2zy(8);
  }
  var Companion_instance_38;
  function Companion_getInstance_39() {
    if (Companion_instance_38 == null)
      new Companion_38();
    return Companion_instance_38;
  }
  function SkikoInputModifiers__has_impl_qg30o6($this, value) {
    if (!((_SkikoInputModifiers___get_value__impl__13eq4a(value) & _SkikoInputModifiers___get_value__impl__13eq4a($this)) === 0)) {
      return true;
    }
    return false;
  }
  function SkikoInputModifiers__toString_impl_86hiai($this) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.collections.mutableListOf' call
    var this_0 = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.jetbrains.skiko.SkikoInputModifiers.toString.<anonymous>' call
    if (SkikoInputModifiers__has_impl_qg30o6($this, Companion_getInstance_39().l3d_1)) {
      this_0.a1('META');
    }
    if (SkikoInputModifiers__has_impl_qg30o6($this, Companion_getInstance_39().m3d_1)) {
      this_0.a1('CONTROL');
    }
    if (SkikoInputModifiers__has_impl_qg30o6($this, Companion_getInstance_39().n3d_1)) {
      this_0.a1('ALT');
    }
    if (SkikoInputModifiers__has_impl_qg30o6($this, Companion_getInstance_39().o3d_1)) {
      this_0.a1('SHIFT');
    }
    var result = this_0;
    return !result.u() ? toString(result) : '';
  }
  function SkikoInputModifiers__hashCode_impl_dkoeid($this) {
    return $this;
  }
  function SkikoInputModifiers__equals_impl_tcfkiv($this, other) {
    if (!(other instanceof SkikoInputModifiers))
      return false;
    if (!($this === (other instanceof SkikoInputModifiers ? other.u3d_1 : THROW_CCE())))
      return false;
    return true;
  }
  function SkikoInputModifiers(value) {
    Companion_getInstance_39();
    this.u3d_1 = value;
  }
  protoOf(SkikoInputModifiers).toString = function () {
    return SkikoInputModifiers__toString_impl_86hiai(this.u3d_1);
  };
  protoOf(SkikoInputModifiers).hashCode = function () {
    return SkikoInputModifiers__hashCode_impl_dkoeid(this.u3d_1);
  };
  protoOf(SkikoInputModifiers).equals = function (other) {
    return SkikoInputModifiers__equals_impl_tcfkiv(this.u3d_1, other);
  };
  var SkikoKeyboardEventKind_UNKNOWN_instance;
  var SkikoKeyboardEventKind_UP_instance;
  var SkikoKeyboardEventKind_DOWN_instance;
  var SkikoKeyboardEventKind_TYPE_instance;
  var SkikoKeyboardEventKind_entriesInitialized;
  function SkikoKeyboardEventKind_initEntries() {
    if (SkikoKeyboardEventKind_entriesInitialized)
      return Unit_instance;
    SkikoKeyboardEventKind_entriesInitialized = true;
    SkikoKeyboardEventKind_UNKNOWN_instance = new SkikoKeyboardEventKind('UNKNOWN', 0);
    SkikoKeyboardEventKind_UP_instance = new SkikoKeyboardEventKind('UP', 1);
    SkikoKeyboardEventKind_DOWN_instance = new SkikoKeyboardEventKind('DOWN', 2);
    SkikoKeyboardEventKind_TYPE_instance = new SkikoKeyboardEventKind('TYPE', 3);
  }
  function SkikoKeyboardEventKind(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SkikoPointerEvent(x, y, kind, deltaX, deltaY, pressedButtons, button, modifiers, timestamp, pointers, platform) {
    deltaX = deltaX === VOID ? 0.0 : deltaX;
    deltaY = deltaY === VOID ? 0.0 : deltaY;
    pressedButtons = pressedButtons === VOID ? Companion_getInstance_40().v3d_1 : pressedButtons;
    button = button === VOID ? Companion_getInstance_40().v3d_1 : button;
    modifiers = modifiers === VOID ? Companion_getInstance_39().k3d_1 : modifiers;
    timestamp = timestamp === VOID ? new Long(0, 0) : timestamp;
    pointers = pointers === VOID ? listOf(new SkikoPointer(new Long(0, 0), x, y, SkikoMouseButtons__has_impl_481exw(pressedButtons, Companion_getInstance_40().w3d_1))) : pointers;
    platform = platform === VOID ? null : platform;
    this.h3e_1 = x;
    this.i3e_1 = y;
    this.j3e_1 = kind;
    this.k3e_1 = deltaX;
    this.l3e_1 = deltaY;
    this.m3e_1 = pressedButtons;
    this.n3e_1 = button;
    this.o3e_1 = modifiers;
    this.p3e_1 = timestamp;
    this.q3e_1 = pointers;
    this.r3e_1 = platform;
  }
  protoOf(SkikoPointerEvent).toString = function () {
    return 'SkikoPointerEvent(x=' + this.h3e_1 + ', y=' + this.i3e_1 + ', kind=' + this.j3e_1 + ', deltaX=' + this.k3e_1 + ', deltaY=' + this.l3e_1 + ', pressedButtons=' + new SkikoMouseButtons(this.m3e_1) + ', button=' + new SkikoMouseButtons(this.n3e_1) + ', modifiers=' + new SkikoInputModifiers(this.o3e_1) + ', timestamp=' + this.p3e_1.toString() + ', pointers=' + this.q3e_1 + ', platform=' + this.r3e_1 + ')';
  };
  protoOf(SkikoPointerEvent).hashCode = function () {
    var result = getNumberHashCode(this.h3e_1);
    result = imul(result, 31) + getNumberHashCode(this.i3e_1) | 0;
    result = imul(result, 31) + this.j3e_1.hashCode() | 0;
    result = imul(result, 31) + getNumberHashCode(this.k3e_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.l3e_1) | 0;
    result = imul(result, 31) + SkikoMouseButtons__hashCode_impl_7jywqn(this.m3e_1) | 0;
    result = imul(result, 31) + SkikoMouseButtons__hashCode_impl_7jywqn(this.n3e_1) | 0;
    result = imul(result, 31) + SkikoInputModifiers__hashCode_impl_dkoeid(this.o3e_1) | 0;
    result = imul(result, 31) + this.p3e_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.q3e_1) | 0;
    result = imul(result, 31) + (this.r3e_1 == null ? 0 : hashCode(this.r3e_1)) | 0;
    return result;
  };
  protoOf(SkikoPointerEvent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SkikoPointerEvent))
      return false;
    var tmp0_other_with_cast = other instanceof SkikoPointerEvent ? other : THROW_CCE();
    if (!equals(this.h3e_1, tmp0_other_with_cast.h3e_1))
      return false;
    if (!equals(this.i3e_1, tmp0_other_with_cast.i3e_1))
      return false;
    if (!this.j3e_1.equals(tmp0_other_with_cast.j3e_1))
      return false;
    if (!equals(this.k3e_1, tmp0_other_with_cast.k3e_1))
      return false;
    if (!equals(this.l3e_1, tmp0_other_with_cast.l3e_1))
      return false;
    if (!(this.m3e_1 === tmp0_other_with_cast.m3e_1))
      return false;
    if (!(this.n3e_1 === tmp0_other_with_cast.n3e_1))
      return false;
    if (!(this.o3e_1 === tmp0_other_with_cast.o3e_1))
      return false;
    if (!this.p3e_1.equals(tmp0_other_with_cast.p3e_1))
      return false;
    if (!equals(this.q3e_1, tmp0_other_with_cast.q3e_1))
      return false;
    if (!equals(this.r3e_1, tmp0_other_with_cast.r3e_1))
      return false;
    return true;
  };
  var SkikoPointerEventKind_UNKNOWN_instance;
  var SkikoPointerEventKind_UP_instance;
  var SkikoPointerEventKind_DOWN_instance;
  var SkikoPointerEventKind_MOVE_instance;
  var SkikoPointerEventKind_DRAG_instance;
  var SkikoPointerEventKind_SCROLL_instance;
  var SkikoPointerEventKind_ENTER_instance;
  var SkikoPointerEventKind_EXIT_instance;
  var SkikoPointerEventKind_entriesInitialized;
  function SkikoPointerEventKind_initEntries() {
    if (SkikoPointerEventKind_entriesInitialized)
      return Unit_instance;
    SkikoPointerEventKind_entriesInitialized = true;
    SkikoPointerEventKind_UNKNOWN_instance = new SkikoPointerEventKind('UNKNOWN', 0);
    SkikoPointerEventKind_UP_instance = new SkikoPointerEventKind('UP', 1);
    SkikoPointerEventKind_DOWN_instance = new SkikoPointerEventKind('DOWN', 2);
    SkikoPointerEventKind_MOVE_instance = new SkikoPointerEventKind('MOVE', 3);
    SkikoPointerEventKind_DRAG_instance = new SkikoPointerEventKind('DRAG', 4);
    SkikoPointerEventKind_SCROLL_instance = new SkikoPointerEventKind('SCROLL', 5);
    SkikoPointerEventKind_ENTER_instance = new SkikoPointerEventKind('ENTER', 6);
    SkikoPointerEventKind_EXIT_instance = new SkikoPointerEventKind('EXIT', 7);
  }
  function SkikoPointerEventKind(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var SkikoPointerDevice_UNKNOWN_instance;
  var SkikoPointerDevice_MOUSE_instance;
  var SkikoPointerDevice_TOUCH_instance;
  var SkikoPointerDevice_entriesInitialized;
  function SkikoPointerDevice_initEntries() {
    if (SkikoPointerDevice_entriesInitialized)
      return Unit_instance;
    SkikoPointerDevice_entriesInitialized = true;
    SkikoPointerDevice_UNKNOWN_instance = new SkikoPointerDevice('UNKNOWN', 0);
    SkikoPointerDevice_MOUSE_instance = new SkikoPointerDevice('MOUSE', 1);
    SkikoPointerDevice_TOUCH_instance = new SkikoPointerDevice('TOUCH', 2);
  }
  function SkikoPointerDevice(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SkikoPointer(id, x, y, pressed, device, pressure) {
    device = device === VOID ? SkikoPointerDevice_MOUSE_getInstance() : device;
    pressure = pressure === VOID ? 1.0 : pressure;
    this.s3e_1 = id;
    this.t3e_1 = x;
    this.u3e_1 = y;
    this.v3e_1 = pressed;
    this.w3e_1 = device;
    this.x3e_1 = pressure;
  }
  protoOf(SkikoPointer).toString = function () {
    return 'SkikoPointer(id=' + this.s3e_1.toString() + ', x=' + this.t3e_1 + ', y=' + this.u3e_1 + ', pressed=' + this.v3e_1 + ', device=' + this.w3e_1 + ', pressure=' + this.x3e_1 + ')';
  };
  protoOf(SkikoPointer).hashCode = function () {
    var result = this.s3e_1.hashCode();
    result = imul(result, 31) + getNumberHashCode(this.t3e_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.u3e_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.v3e_1) | 0;
    result = imul(result, 31) + this.w3e_1.hashCode() | 0;
    result = imul(result, 31) + getNumberHashCode(this.x3e_1) | 0;
    return result;
  };
  protoOf(SkikoPointer).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SkikoPointer))
      return false;
    var tmp0_other_with_cast = other instanceof SkikoPointer ? other : THROW_CCE();
    if (!this.s3e_1.equals(tmp0_other_with_cast.s3e_1))
      return false;
    if (!equals(this.t3e_1, tmp0_other_with_cast.t3e_1))
      return false;
    if (!equals(this.u3e_1, tmp0_other_with_cast.u3e_1))
      return false;
    if (!(this.v3e_1 === tmp0_other_with_cast.v3e_1))
      return false;
    if (!this.w3e_1.equals(tmp0_other_with_cast.w3e_1))
      return false;
    if (!equals(this.x3e_1, tmp0_other_with_cast.x3e_1))
      return false;
    return true;
  };
  function _SkikoMouseButtons___init__impl__kylsco(value) {
    return value;
  }
  function _SkikoMouseButtons___get_value__impl__ltkvwc($this) {
    return $this;
  }
  function Companion_39() {
    Companion_instance_39 = this;
    this.v3d_1 = _SkikoMouseButtons___init__impl__kylsco(0);
    this.w3d_1 = _SkikoMouseButtons___init__impl__kylsco(1);
    this.x3d_1 = _SkikoMouseButtons___init__impl__kylsco(2);
    this.y3d_1 = _SkikoMouseButtons___init__impl__kylsco(4);
    this.z3d_1 = _SkikoMouseButtons___init__impl__kylsco(1);
    this.a3e_1 = _SkikoMouseButtons___init__impl__kylsco(2);
    this.b3e_1 = _SkikoMouseButtons___init__impl__kylsco(4);
    this.c3e_1 = _SkikoMouseButtons___init__impl__kylsco(8);
    this.d3e_1 = _SkikoMouseButtons___init__impl__kylsco(16);
    this.e3e_1 = _SkikoMouseButtons___init__impl__kylsco(32);
    this.f3e_1 = _SkikoMouseButtons___init__impl__kylsco(64);
    this.g3e_1 = _SkikoMouseButtons___init__impl__kylsco(128);
  }
  var Companion_instance_39;
  function Companion_getInstance_40() {
    if (Companion_instance_39 == null)
      new Companion_39();
    return Companion_instance_39;
  }
  function SkikoMouseButtons__has_impl_481exw($this, value) {
    if (!((_SkikoMouseButtons___get_value__impl__ltkvwc(value) & _SkikoMouseButtons___get_value__impl__ltkvwc($this)) === 0)) {
      return true;
    }
    return false;
  }
  function SkikoMouseButtons__toString_impl_e77028($this) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.collections.mutableListOf' call
    var this_0 = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.jetbrains.skiko.SkikoMouseButtons.toString.<anonymous>' call
    if (SkikoMouseButtons__has_impl_481exw($this, Companion_getInstance_40().w3d_1)) {
      this_0.a1('LEFT');
    }
    if (SkikoMouseButtons__has_impl_481exw($this, Companion_getInstance_40().x3d_1)) {
      this_0.a1('RIGHT');
    }
    if (SkikoMouseButtons__has_impl_481exw($this, Companion_getInstance_40().y3d_1)) {
      this_0.a1('MIDDLE');
    }
    if (SkikoMouseButtons__has_impl_481exw($this, Companion_getInstance_40().c3e_1)) {
      this_0.a1('BUTTON_4');
    }
    if (SkikoMouseButtons__has_impl_481exw($this, Companion_getInstance_40().d3e_1)) {
      this_0.a1('BUTTON_5');
    }
    if (SkikoMouseButtons__has_impl_481exw($this, Companion_getInstance_40().e3e_1)) {
      this_0.a1('BUTTON_6');
    }
    if (SkikoMouseButtons__has_impl_481exw($this, Companion_getInstance_40().f3e_1)) {
      this_0.a1('BUTTON_7');
    }
    if (SkikoMouseButtons__has_impl_481exw($this, Companion_getInstance_40().g3e_1)) {
      this_0.a1('BUTTON_8');
    }
    var result = this_0;
    return !result.u() ? toString(result) : '';
  }
  function SkikoMouseButtons__hashCode_impl_7jywqn($this) {
    return $this;
  }
  function SkikoMouseButtons__equals_impl_jnid9f($this, other) {
    if (!(other instanceof SkikoMouseButtons))
      return false;
    if (!($this === (other instanceof SkikoMouseButtons ? other.y3e_1 : THROW_CCE())))
      return false;
    return true;
  }
  function SkikoMouseButtons(value) {
    Companion_getInstance_40();
    this.y3e_1 = value;
  }
  protoOf(SkikoMouseButtons).toString = function () {
    return SkikoMouseButtons__toString_impl_e77028(this.y3e_1);
  };
  protoOf(SkikoMouseButtons).hashCode = function () {
    return SkikoMouseButtons__hashCode_impl_7jywqn(this.y3e_1);
  };
  protoOf(SkikoMouseButtons).equals = function (other) {
    return SkikoMouseButtons__equals_impl_jnid9f(this.y3e_1, other);
  };
  function SkikoKeyboardEventKind_UP_getInstance() {
    SkikoKeyboardEventKind_initEntries();
    return SkikoKeyboardEventKind_UP_instance;
  }
  function SkikoKeyboardEventKind_DOWN_getInstance() {
    SkikoKeyboardEventKind_initEntries();
    return SkikoKeyboardEventKind_DOWN_instance;
  }
  function SkikoPointerEventKind_UP_getInstance() {
    SkikoPointerEventKind_initEntries();
    return SkikoPointerEventKind_UP_instance;
  }
  function SkikoPointerEventKind_DOWN_getInstance() {
    SkikoPointerEventKind_initEntries();
    return SkikoPointerEventKind_DOWN_instance;
  }
  function SkikoPointerEventKind_MOVE_getInstance() {
    SkikoPointerEventKind_initEntries();
    return SkikoPointerEventKind_MOVE_instance;
  }
  function SkikoPointerEventKind_DRAG_getInstance() {
    SkikoPointerEventKind_initEntries();
    return SkikoPointerEventKind_DRAG_instance;
  }
  function SkikoPointerEventKind_SCROLL_getInstance() {
    SkikoPointerEventKind_initEntries();
    return SkikoPointerEventKind_SCROLL_instance;
  }
  function SkikoPointerDevice_MOUSE_getInstance() {
    SkikoPointerDevice_initEntries();
    return SkikoPointerDevice_MOUSE_instance;
  }
  function SkikoPointerDevice_TOUCH_getInstance() {
    SkikoPointerDevice_initEntries();
    return SkikoPointerDevice_TOUCH_instance;
  }
  var GraphicsApi_UNKNOWN_instance;
  var GraphicsApi_SOFTWARE_FAST_instance;
  var GraphicsApi_SOFTWARE_COMPAT_instance;
  var GraphicsApi_OPENGL_instance;
  var GraphicsApi_DIRECT3D_instance;
  var GraphicsApi_VULKAN_instance;
  var GraphicsApi_METAL_instance;
  var GraphicsApi_WEBGL_instance;
  var GraphicsApi_entriesInitialized;
  function GraphicsApi_initEntries() {
    if (GraphicsApi_entriesInitialized)
      return Unit_instance;
    GraphicsApi_entriesInitialized = true;
    GraphicsApi_UNKNOWN_instance = new GraphicsApi('UNKNOWN', 0);
    GraphicsApi_SOFTWARE_FAST_instance = new GraphicsApi('SOFTWARE_FAST', 1);
    GraphicsApi_SOFTWARE_COMPAT_instance = new GraphicsApi('SOFTWARE_COMPAT', 2);
    GraphicsApi_OPENGL_instance = new GraphicsApi('OPENGL', 3);
    GraphicsApi_DIRECT3D_instance = new GraphicsApi('DIRECT3D', 4);
    GraphicsApi_VULKAN_instance = new GraphicsApi('VULKAN', 5);
    GraphicsApi_METAL_instance = new GraphicsApi('METAL', 6);
    GraphicsApi_WEBGL_instance = new GraphicsApi('WEBGL', 7);
  }
  function GraphicsApi(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function GraphicsApi_WEBGL_getInstance() {
    GraphicsApi_initEntries();
    return GraphicsApi_WEBGL_instance;
  }
  var OS_Android_instance;
  var OS_Linux_instance;
  var OS_Windows_instance;
  var OS_MacOS_instance;
  var OS_Ios_instance;
  var OS_JS_instance;
  var OS_Unknown_instance;
  var OS_entriesInitialized;
  function OS_initEntries() {
    if (OS_entriesInitialized)
      return Unit_instance;
    OS_entriesInitialized = true;
    OS_Android_instance = new OS('Android', 0, 'android');
    OS_Linux_instance = new OS('Linux', 1, 'linux');
    OS_Windows_instance = new OS('Windows', 2, 'windows');
    OS_MacOS_instance = new OS('MacOS', 3, 'macos');
    OS_Ios_instance = new OS('Ios', 4, 'ios');
    OS_JS_instance = new OS('JS', 5, 'js');
    OS_Unknown_instance = new OS('Unknown', 6, 'unknown');
  }
  function OS(name, ordinal, id) {
    Enum.call(this, name, ordinal);
    this.b3f_1 = id;
  }
  var Arch_X64_instance;
  var Arch_Arm64_instance;
  var Arch_JS_instance;
  var Arch_WASM_instance;
  var Arch_Unknown_instance;
  var Arch_entriesInitialized;
  function Arch_initEntries() {
    if (Arch_entriesInitialized)
      return Unit_instance;
    Arch_entriesInitialized = true;
    Arch_X64_instance = new Arch('X64', 0, 'x64');
    Arch_Arm64_instance = new Arch('Arm64', 1, 'arm64');
    Arch_JS_instance = new Arch('JS', 2, 'js');
    Arch_WASM_instance = new Arch('WASM', 3, 'wasm');
    Arch_Unknown_instance = new Arch('Unknown', 4, 'unknown');
  }
  function Arch(name, ordinal, id) {
    Enum.call(this, name, ordinal);
    this.e3f_1 = id;
  }
  function OS_Android_getInstance() {
    OS_initEntries();
    return OS_Android_instance;
  }
  function OS_Linux_getInstance() {
    OS_initEntries();
    return OS_Linux_instance;
  }
  function OS_Windows_getInstance() {
    OS_initEntries();
    return OS_Windows_instance;
  }
  function OS_MacOS_getInstance() {
    OS_initEntries();
    return OS_MacOS_instance;
  }
  function OS_Ios_getInstance() {
    OS_initEntries();
    return OS_Ios_instance;
  }
  function OS_Unknown_getInstance() {
    OS_initEntries();
    return OS_Unknown_instance;
  }
  function Arch_Unknown_getInstance() {
    Arch_initEntries();
    return Arch_Unknown_instance;
  }
  function ClipboardManager() {
  }
  function URIManager() {
  }
  function RenderException(message, cause) {
    message = message === VOID ? null : message;
    cause = cause === VOID ? null : cause;
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, RenderException);
  }
  function SkikoView() {
  }
  var SystemTheme_DARK_instance;
  var SystemTheme_LIGHT_instance;
  var SystemTheme_UNKNOWN_instance;
  var SystemTheme_entriesInitialized;
  function SystemTheme_initEntries() {
    if (SystemTheme_entriesInitialized)
      return Unit_instance;
    SystemTheme_entriesInitialized = true;
    SystemTheme_DARK_instance = new SystemTheme('DARK', 0);
    SystemTheme_LIGHT_instance = new SystemTheme('LIGHT', 1);
    SystemTheme_UNKNOWN_instance = new SystemTheme('UNKNOWN', 2);
  }
  function SystemTheme(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SystemTheme_UNKNOWN_getInstance() {
    SystemTheme_initEntries();
    return SystemTheme_UNKNOWN_instance;
  }
  function get_registry() {
    _init_properties_Managed_js_kt__4ok5rc();
    return registry;
  }
  var registry;
  function unregister(managed) {
    _init_properties_Managed_js_kt__4ok5rc();
    get_registry().unregister(managed);
  }
  function register(managed, thunk) {
    _init_properties_Managed_js_kt__4ok5rc();
    get_registry().register(managed, thunk);
  }
  function registry$lambda(it) {
    _init_properties_Managed_js_kt__4ok5rc();
    var thunk = it instanceof FinalizationThunk ? it : THROW_CCE();
    thunk.k3f();
    return Unit_instance;
  }
  var properties_initialized_Managed_js_kt_llxy4m;
  function _init_properties_Managed_js_kt__4ok5rc() {
    if (!properties_initialized_Managed_js_kt_llxy4m) {
      properties_initialized_Managed_js_kt_llxy4m = true;
      registry = new FinalizationRegistry(registry$lambda);
    }
  }
  function toInterop($this, array, copyArrayToWasm) {
    var tmp;
    var tmp_0;
    if (!(array == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = !(array.length === 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var data = _malloc(array.length);
      $this.v2y_1.a1(data);
      if (copyArrayToWasm) {
        toWasm(data, array);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function toInterop_0($this, array, copyArrayToWasm) {
    var tmp;
    var tmp_0;
    if (!(array == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = !(array.length === 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var data = _malloc(imul(array.length, 2));
      $this.v2y_1.a1(data);
      if (copyArrayToWasm) {
        toWasm_0(data, array);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function toInterop_1($this, array, copyArrayToWasm) {
    var tmp;
    var tmp_0;
    if (!(array == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = !(array.length === 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var data = _malloc(imul(array.length, 4));
      $this.v2y_1.a1(data);
      if (copyArrayToWasm) {
        toWasm_1(data, array);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function toInterop_2($this, array, copyArrayToWasm) {
    var tmp;
    var tmp_0;
    if (!(array == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = !(array.length === 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var data = _malloc(imul(array.length, 4));
      $this.v2y_1.a1(data);
      if (copyArrayToWasm) {
        toWasm_2(data, array);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function toInterop_3($this, array, copyArrayToWasm) {
    var tmp;
    var tmp_0;
    if (!(array == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = !(array.length === 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var data = _malloc(imul(array.length, 8));
      $this.v2y_1.a1(data);
      if (copyArrayToWasm) {
        toWasm_3(data, array);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function InteropScope() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.v2y_1 = ArrayList_init_$Create$_0();
    this.w2y_1 = false;
  }
  protoOf(InteropScope).x2y = function (string) {
    var tmp;
    if (!(string == null)) {
      var data = _malloc(imul(string.length, 4));
      stringToUTF8(string, data, imul(string.length, 4));
      this.v2y_1.a1(data);
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  };
  protoOf(InteropScope).k31 = function (array) {
    return toInterop(this, array, true);
  };
  protoOf(InteropScope).r34 = function (array) {
    return toInterop(this, array, false);
  };
  protoOf(InteropScope).m2z = function (array) {
    return toInterop_0(this, array, true);
  };
  protoOf(InteropScope).u2z = function (_this__u8e3s4, result) {
    fromWasm(_this__u8e3s4, result);
  };
  protoOf(InteropScope).t2z = function (array) {
    return toInterop_1(this, array, true);
  };
  protoOf(InteropScope).p34 = function (array) {
    return toInterop_1(this, array, false);
  };
  protoOf(InteropScope).j33 = function (_this__u8e3s4, result) {
    fromWasm_0(_this__u8e3s4, result);
  };
  protoOf(InteropScope).h30 = function (array) {
    return toInterop_2(this, array, true);
  };
  protoOf(InteropScope).i33 = function (array) {
    return toInterop_2(this, array, false);
  };
  protoOf(InteropScope).x39 = function (_this__u8e3s4, result) {
    fromWasm_1(_this__u8e3s4, result);
  };
  protoOf(InteropScope).w39 = function (array) {
    return toInterop_3(this, array, false);
  };
  protoOf(InteropScope).s34 = function (_this__u8e3s4, result) {
    fromWasm_2(_this__u8e3s4, result);
  };
  protoOf(InteropScope).s39 = function (stringArray) {
    var tmp;
    var tmp_0;
    if (!(stringArray == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = !(stringArray.length === 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(stringArray.length);
      var inductionVariable = 0;
      var last = stringArray.length;
      while (inductionVariable < last) {
        var item = stringArray[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.jetbrains.skia.impl.InteropScope.toInterop.<anonymous>' call
        var tmp$ret$2 = this.x2y(item);
        destination.a1(tmp$ret$2);
      }
      var ptrs = toIntArray(destination);
      tmp = this.t2z(ptrs);
    } else {
      tmp = 0;
    }
    return tmp;
  };
  protoOf(InteropScope).mv = function () {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.v2y_1.o();
    while (tmp0_iterator.d1()) {
      var element = tmp0_iterator.f1();
      // Inline function 'org.jetbrains.skia.impl.InteropScope.release.<anonymous>' call
      _free(element);
    }
    this.v2y_1.h1();
    // Inline function 'org.jetbrains.skia.impl.InteropScope.releaseCallbacks' call
    if (this.w2y_1) {
      _releaseLocalCallbackScope$accessor$wmqves();
      this.w2y_1 = false;
    }
  };
  function toWasm(dest, src) {
    return HEAPU8.set(src, dest);
  }
  function toWasm_0(dest, src) {
    return HEAPU16.set(src, dest / 2 | 0);
  }
  function fromWasm(src, result) {
    var startIndex = src / 4 | 0;
    // Inline function 'kotlin.js.asDynamic' call
    result.set(HEAPU32.subarray(startIndex, startIndex + result.length | 0));
  }
  function toWasm_1(dest, src) {
    return HEAPU32.set(src, dest / 4 | 0);
  }
  function fromWasm_0(src, result) {
    var startIndex = src / 4 | 0;
    // Inline function 'kotlin.js.asDynamic' call
    result.set(HEAPF32.subarray(startIndex, startIndex + result.length | 0));
  }
  function toWasm_2(dest, src) {
    return HEAPF32.set(src, dest / 4 | 0);
  }
  function fromWasm_1(src, result) {
    var startIndex = src / 8 | 0;
    // Inline function 'kotlin.js.asDynamic' call
    result.set(HEAPF64.subarray(startIndex, startIndex + result.length | 0));
  }
  function toWasm_3(dest, src) {
    return HEAPF64.set(src, dest / 8 | 0);
  }
  function fromWasm_2(src, result) {
    // Inline function 'kotlin.js.asDynamic' call
    result.set(HEAPU8.subarray(src, src + result.length | 0));
  }
  function _createLocalCallbackScope$accessor$wmqves() {
    return _createLocalCallbackScope();
  }
  function _releaseLocalCallbackScope$accessor$wmqves() {
    return _releaseLocalCallbackScope();
  }
  function getNavigatorInfo() {
    var tmp = navigator.userAgentData ? navigator.userAgentData.platform : navigator.platform;
    return (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
  }
  function makeGLContextCurrent(contextPointer) {
    GL.makeContextCurrent(contextPointer);
  }
  function setOnChangeScaleNotifier(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.l3f_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.c3g(_this__u8e3s4.p3f_1, _this__u8e3s4.q3f_1, _this__u8e3s4.t3f(), _this__u8e3s4.u3f());
    }
    var tmp = window.matchMedia('(resolution: ' + _this__u8e3s4.t3f() + 'dppx)');
    tmp.addEventListener('change', setOnChangeScaleNotifier$lambda(_this__u8e3s4), true);
    var tmp1_safe_receiver = _this__u8e3s4.s3f_1;
    if (tmp1_safe_receiver == null)
      null;
    else
      tmp1_safe_receiver(_this__u8e3s4.t3f());
  }
  function setOnChangeScaleNotifier$lambda($this_setOnChangeScaleNotifier) {
    return function (it) {
      setOnChangeScaleNotifier($this_setOnChangeScaleNotifier);
      return Unit_instance;
    };
  }
  function createWebGLContext(canvas, attr) {
    attr = attr === VOID ? null : attr;
    var contextAttributes = new createWebGLContext$contextAttributes$1(attr);
    return GL.createContext(canvas, asJsObject(contextAttributes));
  }
  function asJsObject(_this__u8e3s4) {
    var jsObject = {};
    if (_this__u8e3s4.alpha == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.alpha = _this__u8e3s4.alpha;
    }
    if (_this__u8e3s4.depth == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.depth = _this__u8e3s4.depth;
    }
    if (_this__u8e3s4.stencil == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.stencil = _this__u8e3s4.stencil;
    }
    if (_this__u8e3s4.antialias == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.antialias = _this__u8e3s4.antialias;
    }
    if (_this__u8e3s4.premultipliedAlpha == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.premultipliedAlpha = _this__u8e3s4.premultipliedAlpha;
    }
    if (_this__u8e3s4.preserveDrawingBuffer == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.preserveDrawingBuffer = _this__u8e3s4.preserveDrawingBuffer;
    }
    if (_this__u8e3s4.preferLowPowerToHighPerformance == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.preferLowPowerToHighPerformance = _this__u8e3s4.preferLowPowerToHighPerformance;
    }
    if (_this__u8e3s4.failIfMajorPerformanceCaveat == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.failIfMajorPerformanceCaveat = _this__u8e3s4.failIfMajorPerformanceCaveat;
    }
    if (_this__u8e3s4.enableExtensionsByDefault == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.enableExtensionsByDefault = _this__u8e3s4.enableExtensionsByDefault;
    }
    if (_this__u8e3s4.explicitSwapControl == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.explicitSwapControl = _this__u8e3s4.explicitSwapControl;
    }
    if (_this__u8e3s4.renderViaOffscreenBackBuffer == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.renderViaOffscreenBackBuffer = _this__u8e3s4.renderViaOffscreenBackBuffer;
    }
    if (_this__u8e3s4.majorVersion == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.majorVersion = _this__u8e3s4.majorVersion;
    }
    return jsObject;
  }
  function createWebGLContext$contextAttributes$1($attr) {
    var tmp = this;
    var tmp1_elvis_lhs = $attr == null ? null : $attr.alpha;
    tmp.d3g_1 = tmp1_elvis_lhs == null ? 1 : tmp1_elvis_lhs;
    var tmp_0 = this;
    var tmp1_elvis_lhs_0 = $attr == null ? null : $attr.depth;
    tmp_0.e3g_1 = tmp1_elvis_lhs_0 == null ? 1 : tmp1_elvis_lhs_0;
    var tmp_1 = this;
    var tmp1_elvis_lhs_1 = $attr == null ? null : $attr.stencil;
    tmp_1.f3g_1 = tmp1_elvis_lhs_1 == null ? 8 : tmp1_elvis_lhs_1;
    var tmp_2 = this;
    var tmp1_elvis_lhs_2 = $attr == null ? null : $attr.antialias;
    tmp_2.g3g_1 = tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2;
    var tmp_3 = this;
    var tmp1_elvis_lhs_3 = $attr == null ? null : $attr.premultipliedAlpha;
    tmp_3.h3g_1 = tmp1_elvis_lhs_3 == null ? 1 : tmp1_elvis_lhs_3;
    var tmp_4 = this;
    var tmp1_elvis_lhs_4 = $attr == null ? null : $attr.preserveDrawingBuffer;
    tmp_4.i3g_1 = tmp1_elvis_lhs_4 == null ? 0 : tmp1_elvis_lhs_4;
    var tmp_5 = this;
    var tmp1_elvis_lhs_5 = $attr == null ? null : $attr.preferLowPowerToHighPerformance;
    tmp_5.j3g_1 = tmp1_elvis_lhs_5 == null ? 0 : tmp1_elvis_lhs_5;
    var tmp_6 = this;
    var tmp1_elvis_lhs_6 = $attr == null ? null : $attr.failIfMajorPerformanceCaveat;
    tmp_6.k3g_1 = tmp1_elvis_lhs_6 == null ? 0 : tmp1_elvis_lhs_6;
    var tmp_7 = this;
    var tmp1_elvis_lhs_7 = $attr == null ? null : $attr.enableExtensionsByDefault;
    tmp_7.l3g_1 = tmp1_elvis_lhs_7 == null ? 1 : tmp1_elvis_lhs_7;
    var tmp_8 = this;
    var tmp1_elvis_lhs_8 = $attr == null ? null : $attr.explicitSwapControl;
    tmp_8.m3g_1 = tmp1_elvis_lhs_8 == null ? 0 : tmp1_elvis_lhs_8;
    var tmp_9 = this;
    var tmp1_elvis_lhs_9 = $attr == null ? null : $attr.renderViaOffscreenBackBuffer;
    tmp_9.n3g_1 = tmp1_elvis_lhs_9 == null ? 0 : tmp1_elvis_lhs_9;
    var tmp_10 = this;
    var tmp1_elvis_lhs_10 = $attr == null ? null : $attr.majorVersion;
    tmp_10.o3g_1 = tmp1_elvis_lhs_10 == null ? 2 : tmp1_elvis_lhs_10;
  }
  protoOf(createWebGLContext$contextAttributes$1).p3g = function () {
    return this.d3g_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).q3g = function () {
    return this.e3g_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).r3g = function () {
    return this.f3g_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).s3g = function () {
    return this.g3g_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).t3g = function () {
    return this.h3g_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).u3g = function () {
    return this.i3g_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).v3g = function () {
    return this.j3g_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).w3g = function () {
    return this.k3g_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).x3g = function () {
    return this.l3g_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).y3g = function () {
    return this.m3g_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).z3g = function () {
    return this.n3g_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).a3h = function () {
    return this.o3g_1;
  };
  var LANG$delegate;
  function Pattern(regex) {
    this.b3h_1 = Regex_init_$Create$(regex);
  }
  function compilePattern(regex) {
    _init_properties_Actuals_js_kt__v403ki();
    return new Pattern(regex);
  }
  function LANG$delegate$lambda() {
    _init_properties_Actuals_js_kt__v403ki();
    var lang = window.navigator.language;
    var tmp;
    var tmp_0;
    if (lang == null) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.text.isEmpty' call
      tmp_0 = charSequenceLength(lang) === 0;
    }
    if (tmp_0) {
      tmp = 'en-US';
    } else {
      tmp = lang;
    }
    return tmp;
  }
  var properties_initialized_Actuals_js_kt_fw1oy4;
  function _init_properties_Actuals_js_kt__v403ki() {
    if (!properties_initialized_Actuals_js_kt_fw1oy4) {
      properties_initialized_Actuals_js_kt_fw1oy4 = true;
      LANG$delegate = lazy(LANG$delegate$lambda);
    }
  }
  function Companion_40() {
  }
  protoOf(Companion_40).m2y = function () {
  };
  var Companion_instance_40;
  function Companion_getInstance_41() {
    return Companion_instance_40;
  }
  function FinalizationThunk(finalizer, obj) {
    this.i3f_1 = finalizer;
    this.j3f_1 = obj;
  }
  protoOf(FinalizationThunk).k3f = function () {
    if (!(this.j3f_1 === 0)) {
      org_jetbrains_skia_impl_Managed__invokeFinalizer(this.i3f_1, this.j3f_1);
    }
    this.j3f_1 = 0;
  };
  function Managed(ptr, finalizer, managed) {
    managed = managed === VOID ? true : managed;
    Native.call(this, ptr);
    this.s2y_1 = null;
    if (managed) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!(ptr === 0)) {
        // Inline function 'org.jetbrains.skia.impl.Managed.<anonymous>' call
        var message = 'Managed ptr is 0';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!(finalizer === 0)) {
        // Inline function 'org.jetbrains.skia.impl.Managed.<anonymous>' call
        var message_0 = 'Managed finalizer is 0';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
      var thunk = new FinalizationThunk(finalizer, ptr);
      register(this, thunk);
      this.s2y_1 = thunk;
    }
  }
  protoOf(Managed).y1k = function () {
    if (Companion_instance_41.p2y() === this.t2y_1)
      throw RuntimeException_init_$Create$('Object already closed: ' + getKClassFromExpression(this).b7() + ', _ptr=' + this.t2y_1);
    else if (null == this.s2y_1)
      throw RuntimeException_init_$Create$("Object is not managed, can't close(): " + getKClassFromExpression(this).b7() + ', _ptr=' + this.t2y_1);
    else {
      unregister(this);
      ensureNotNull(this.s2y_1).k3f();
      this.s2y_1 = null;
      this.t2y_1 = 0;
    }
  };
  function get_INTEROP_SCOPE() {
    _init_properties_Native_js_kt__80argu();
    return INTEROP_SCOPE;
  }
  var INTEROP_SCOPE;
  function set_interopScopeCounter(_set____db54di) {
    _init_properties_Native_js_kt__80argu();
    interopScopeCounter = _set____db54di;
  }
  function get_interopScopeCounter() {
    _init_properties_Native_js_kt__80argu();
    return interopScopeCounter;
  }
  var interopScopeCounter;
  function Companion_41() {
  }
  protoOf(Companion_41).p2y = function () {
    return 0;
  };
  var Companion_instance_41;
  function Companion_getInstance_42() {
    return Companion_instance_41;
  }
  function Native(ptr) {
    if (ptr === Companion_instance_41.p2y())
      throw RuntimeException_init_$Create$("Can't wrap nullptr");
    this.t2y_1 = ptr;
  }
  protoOf(Native).equals = function (other) {
    if (this === other)
      return true;
    if (null == other)
      return false;
    if (!(other instanceof Native))
      return false;
    return this.t2y_1 === other.t2y_1 ? true : this.u2y(other);
  };
  protoOf(Native).hashCode = function () {
    return this.t2y_1;
  };
  protoOf(Native).u2y = function (other) {
    return false;
  };
  protoOf(Native).toString = function () {
    return plus(getKClassFromExpression(this).b7(), '(_ptr=0x') + toString_0(this.t2y_1, 16) + ')';
  };
  function reachabilityBarrier(obj) {
    _init_properties_Native_js_kt__80argu();
  }
  function _set_interopScopeCounter_$accessor$14q3g08_7yblxt(_set____db54di) {
    _init_properties_Native_js_kt__80argu();
    return set_interopScopeCounter(_set____db54di);
  }
  function _get_interopScopeCounter_$accessor$14q3g08_y31ph7() {
    _init_properties_Native_js_kt__80argu();
    return get_interopScopeCounter();
  }
  function _get_INTEROP_SCOPE_$accessor$14q3g08_4sg8oi() {
    _init_properties_Native_js_kt__80argu();
    return get_INTEROP_SCOPE();
  }
  var properties_initialized_Native_js_kt_fdhhkg;
  function _init_properties_Native_js_kt__80argu() {
    if (!properties_initialized_Native_js_kt_fdhhkg) {
      properties_initialized_Native_js_kt_fdhhkg = true;
      INTEROP_SCOPE = new InteropScope();
      interopScopeCounter = 0;
    }
  }
  function RefCnt_init_$Init$(ptr, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_14().c3h_1, true);
    RefCnt.call($this);
    return $this;
  }
  function RefCnt_init_$Init$_0(ptr, allowClose, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_14().c3h_1, allowClose);
    RefCnt.call($this);
    return $this;
  }
  protoOf(RefCnt).w31 = function () {
    Stats_instance.o2y();
    return org_jetbrains_skia_impl_RefCnt__getRefCount(this.t2y_1);
  };
  protoOf(RefCnt).toString = function () {
    var s = protoOf(Managed).toString.call(this);
    // Inline function 'kotlin.text.substring' call
    var endIndex = s.length - 1 | 0;
    // Inline function 'kotlin.js.asDynamic' call
    return s.substring(0, endIndex) + ', refCount=' + this.w31() + ')';
  };
  function RefCnt() {
  }
  function _FinalizerHolder_14() {
    _FinalizerHolder_instance_14 = this;
    this.c3h_1 = org_jetbrains_skia_impl_RefCnt__getFinalizer();
  }
  var _FinalizerHolder_instance_14;
  function _FinalizerHolder_getInstance_14() {
    if (_FinalizerHolder_instance_14 == null)
      new _FinalizerHolder_14();
    return _FinalizerHolder_instance_14;
  }
  function Stats() {
  }
  protoOf(Stats).o2y = function () {
  };
  var Stats_instance;
  function Stats_getInstance() {
    return Stats_instance;
  }
  function currentNanoTime() {
    return numberToLong(window.performance.now() * 1000000);
  }
  function disposeCanvas($this) {
    var tmp0_safe_receiver = $this.y3f_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y1k();
    }
    $this.y3f_1 = null;
    var tmp1_safe_receiver = $this.z3f_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.y1k();
    }
    $this.z3f_1 = null;
  }
  function CanvasRenderer$needRedraw$lambda(this$0) {
    return function (timestamp) {
      this$0.b3g_1 = false;
      makeGLContextCurrent(this$0.w3f_1);
      var tmp0_safe_receiver = this$0.a3g_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.w2m(-1);
      }
      var tmp1_safe_receiver = this$0.a3g_1;
      if (tmp1_safe_receiver == null)
        null;
      else
        tmp1_safe_receiver.i30();
      this$0.d3h(timestamp);
      var tmp2_safe_receiver = this$0.y3f_1;
      if (tmp2_safe_receiver == null)
        null;
      else {
        tmp2_safe_receiver.u37();
      }
      this$0.x3f_1.t31();
      return Unit_instance;
    };
  }
  function CanvasRenderer(htmlCanvas) {
    this.v3f_1 = htmlCanvas;
    this.w3f_1 = createWebGLContext(this.v3f_1);
    this.y3f_1 = null;
    this.z3f_1 = null;
    this.a3g_1 = null;
    makeGLContextCurrent(this.w3f_1);
    this.x3f_1 = Companion_getInstance_5().q31();
    this.b3g_1 = false;
  }
  protoOf(CanvasRenderer).e2w = function () {
    return this.v3f_1.width;
  };
  protoOf(CanvasRenderer).f2w = function () {
    return this.v3f_1.height;
  };
  protoOf(CanvasRenderer).c3g = function (desiredWidth, desiredHeight, scale, pixelGeometry) {
    disposeCanvas(this);
    this.v3f_1.width = numberToInt(desiredWidth * scale);
    this.v3f_1.height = numberToInt(desiredHeight * scale);
    this.z3f_1 = Companion_getInstance_0().n2y(this.e2w(), this.f2w(), 1, 8, 0, 32856);
    var tmp = this;
    var tmp0_elvis_lhs = Companion_getInstance_26().l37(this.x3f_1, ensureNotNull(this.z3f_1), SurfaceOrigin_BOTTOM_LEFT_getInstance(), SurfaceColorFormat_RGBA_8888_getInstance(), Companion_getInstance_3().f31_1, new SurfaceProps(VOID, pixelGeometry));
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      throw new RenderException('Cannot create surface');
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    tmp.y3f_1 = tmp_0;
    this.a3g_1 = ensureNotNull(this.y3f_1).t37();
  };
  protoOf(CanvasRenderer).e3h = function () {
    if (this.b3g_1) {
      return Unit_instance;
    }
    this.b3g_1 = true;
    var tmp = window;
    tmp.requestAnimationFrame(CanvasRenderer$needRedraw$lambda(this));
  };
  function get_hostOs() {
    _init_properties_OsArch_js_kt__jkqwph();
    return hostOs;
  }
  var hostOs;
  function get_hostArch() {
    _init_properties_OsArch_js_kt__jkqwph();
    return hostArch;
  }
  var hostArch;
  var hostId$delegate;
  function detectHostOs() {
    _init_properties_OsArch_js_kt__jkqwph();
    // Inline function 'kotlin.takeIf' call
    var this_0 = getNavigatorInfo();
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'org.jetbrains.skiko.detectHostOs.<anonymous>' call
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_0) > 0) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var tmp0_elvis_lhs = tmp;
    var platformInfo = tmp0_elvis_lhs == null ? window.navigator.userAgent : tmp0_elvis_lhs;
    return contains(platformInfo, 'Android', true) ? OS_Android_getInstance() : contains(platformInfo, 'iPhone', true) ? OS_Ios_getInstance() : contains(platformInfo, 'iOS', true) ? OS_Ios_getInstance() : contains(platformInfo, 'iPad', true) ? OS_Ios_getInstance() : contains(platformInfo, 'Linux', true) ? OS_Linux_getInstance() : contains(platformInfo, 'Mac', true) ? OS_MacOS_getInstance() : contains(platformInfo, 'Win', true) ? OS_Windows_getInstance() : OS_Unknown_getInstance();
  }
  function hostId$delegate$lambda() {
    _init_properties_OsArch_js_kt__jkqwph();
    return get_hostOs().b3f_1 + '-' + get_hostArch().e3f_1;
  }
  var properties_initialized_OsArch_js_kt_ik094d;
  function _init_properties_OsArch_js_kt__jkqwph() {
    if (!properties_initialized_OsArch_js_kt_ik094d) {
      properties_initialized_OsArch_js_kt_ik094d = true;
      hostOs = detectHostOs();
      hostArch = Arch_Unknown_getInstance();
      hostId$delegate = lazy(hostId$delegate$lambda);
    }
  }
  function attachTo($this, htmlCanvas, autoDetach) {
    $this.r3f_1 = htmlCanvas;
    $this.p3f_1 = htmlCanvas.width;
    $this.q3f_1 = htmlCanvas.height;
    htmlCanvas.style.width = '' + $this.p3f_1 + 'px';
    htmlCanvas.style.height = '' + $this.q3f_1 + 'px';
    setOnChangeScaleNotifier($this);
    var tmp = $this;
    // Inline function 'kotlin.apply' call
    var this_0 = new SkiaLayer$attachTo$1(htmlCanvas, $this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.jetbrains.skiko.SkiaLayer.attachTo.<anonymous>' call
    this_0.c3g($this.p3f_1, $this.q3f_1, $this.t3f(), $this.u3f());
    tmp.l3f_1 = this_0;
  }
  function SkiaLayer$attachTo$1($htmlCanvas, this$0) {
    this.m3h_1 = this$0;
    CanvasRenderer.call(this, $htmlCanvas);
  }
  protoOf(SkiaLayer$attachTo$1).d3h = function (currentTimestamp) {
    var currentNanos = currentTimestamp * 1000000;
    var tmp0_safe_receiver = this.m3h_1.n3f_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.h3f(ensureNotNull(this.a3g_1), this.e2w(), this.f2w(), numberToLong(currentNanos));
    }
  };
  function SkiaLayer() {
    this.l3f_1 = null;
    this.m3f_1 = GraphicsApi_WEBGL_getInstance();
    this.n3f_1 = null;
    this.o3f_1 = false;
    this.p3f_1 = 0;
    this.q3f_1 = 0;
    this.r3f_1 = null;
    this.s3f_1 = null;
  }
  protoOf(SkiaLayer).t3f = function () {
    return window.devicePixelRatio;
  };
  protoOf(SkiaLayer).e3h = function () {
    var tmp0_safe_receiver = this.l3f_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.e3h();
    }
  };
  protoOf(SkiaLayer).n3h = function (container) {
    attachTo(this, container instanceof HTMLCanvasElement ? container : THROW_CCE(), false);
  };
  protoOf(SkiaLayer).u3f = function () {
    return PixelGeometry_UNKNOWN_getInstance();
  };
  function Empty() {
  }
  var Empty_instance;
  function Empty_getInstance() {
    return Empty_instance;
  }
  var SkikoKey_KEY_UNKNOWN_instance;
  var SkikoKey_KEY_A_instance;
  var SkikoKey_KEY_S_instance;
  var SkikoKey_KEY_D_instance;
  var SkikoKey_KEY_F_instance;
  var SkikoKey_KEY_H_instance;
  var SkikoKey_KEY_G_instance;
  var SkikoKey_KEY_Z_instance;
  var SkikoKey_KEY_X_instance;
  var SkikoKey_KEY_C_instance;
  var SkikoKey_KEY_V_instance;
  var SkikoKey_KEY_B_instance;
  var SkikoKey_KEY_Q_instance;
  var SkikoKey_KEY_W_instance;
  var SkikoKey_KEY_E_instance;
  var SkikoKey_KEY_R_instance;
  var SkikoKey_KEY_Y_instance;
  var SkikoKey_KEY_T_instance;
  var SkikoKey_KEY_U_instance;
  var SkikoKey_KEY_I_instance;
  var SkikoKey_KEY_P_instance;
  var SkikoKey_KEY_L_instance;
  var SkikoKey_KEY_J_instance;
  var SkikoKey_KEY_K_instance;
  var SkikoKey_KEY_N_instance;
  var SkikoKey_KEY_M_instance;
  var SkikoKey_KEY_O_instance;
  var SkikoKey_KEY_1_instance;
  var SkikoKey_KEY_2_instance;
  var SkikoKey_KEY_3_instance;
  var SkikoKey_KEY_4_instance;
  var SkikoKey_KEY_5_instance;
  var SkikoKey_KEY_6_instance;
  var SkikoKey_KEY_7_instance;
  var SkikoKey_KEY_8_instance;
  var SkikoKey_KEY_9_instance;
  var SkikoKey_KEY_0_instance;
  var SkikoKey_KEY_CLOSE_BRACKET_instance;
  var SkikoKey_KEY_OPEN_BRACKET_instance;
  var SkikoKey_KEY_QUOTE_instance;
  var SkikoKey_KEY_SEMICOLON_instance;
  var SkikoKey_KEY_SLASH_instance;
  var SkikoKey_KEY_COMMA_instance;
  var SkikoKey_KEY_BACKSLASH_instance;
  var SkikoKey_KEY_PERIOD_instance;
  var SkikoKey_KEY_BACK_QUOTE_instance;
  var SkikoKey_KEY_EQUALS_instance;
  var SkikoKey_KEY_MINUS_instance;
  var SkikoKey_KEY_ENTER_instance;
  var SkikoKey_KEY_ESCAPE_instance;
  var SkikoKey_KEY_TAB_instance;
  var SkikoKey_KEY_BACKSPACE_instance;
  var SkikoKey_KEY_SPACE_instance;
  var SkikoKey_KEY_CAPSLOCK_instance;
  var SkikoKey_KEY_LEFT_META_instance;
  var SkikoKey_KEY_LEFT_SHIFT_instance;
  var SkikoKey_KEY_LEFT_ALT_instance;
  var SkikoKey_KEY_LEFT_CONTROL_instance;
  var SkikoKey_KEY_RIGHT_META_instance;
  var SkikoKey_KEY_RIGHT_SHIFT_instance;
  var SkikoKey_KEY_RIGHT_ALT_instance;
  var SkikoKey_KEY_RIGHT_CONTROL_instance;
  var SkikoKey_KEY_MENU_instance;
  var SkikoKey_KEY_UP_instance;
  var SkikoKey_KEY_DOWN_instance;
  var SkikoKey_KEY_LEFT_instance;
  var SkikoKey_KEY_RIGHT_instance;
  var SkikoKey_KEY_F1_instance;
  var SkikoKey_KEY_F2_instance;
  var SkikoKey_KEY_F3_instance;
  var SkikoKey_KEY_F4_instance;
  var SkikoKey_KEY_F5_instance;
  var SkikoKey_KEY_F6_instance;
  var SkikoKey_KEY_F7_instance;
  var SkikoKey_KEY_F8_instance;
  var SkikoKey_KEY_F9_instance;
  var SkikoKey_KEY_F10_instance;
  var SkikoKey_KEY_F11_instance;
  var SkikoKey_KEY_F12_instance;
  var SkikoKey_KEY_PRINTSCEEN_instance;
  var SkikoKey_KEY_SCROLL_LOCK_instance;
  var SkikoKey_KEY_PAUSE_instance;
  var SkikoKey_KEY_INSERT_instance;
  var SkikoKey_KEY_HOME_instance;
  var SkikoKey_KEY_PGUP_instance;
  var SkikoKey_KEY_DELETE_instance;
  var SkikoKey_KEY_END_instance;
  var SkikoKey_KEY_PGDOWN_instance;
  var SkikoKey_KEY_NUM_LOCK_instance;
  var SkikoKey_KEY_NUMPAD_0_instance;
  var SkikoKey_KEY_NUMPAD_1_instance;
  var SkikoKey_KEY_NUMPAD_2_instance;
  var SkikoKey_KEY_NUMPAD_3_instance;
  var SkikoKey_KEY_NUMPAD_4_instance;
  var SkikoKey_KEY_NUMPAD_5_instance;
  var SkikoKey_KEY_NUMPAD_6_instance;
  var SkikoKey_KEY_NUMPAD_7_instance;
  var SkikoKey_KEY_NUMPAD_8_instance;
  var SkikoKey_KEY_NUMPAD_9_instance;
  var SkikoKey_KEY_NUMPAD_ENTER_instance;
  var SkikoKey_KEY_NUMPAD_ADD_instance;
  var SkikoKey_KEY_NUMPAD_SUBTRACT_instance;
  var SkikoKey_KEY_NUMPAD_MULTIPLY_instance;
  var SkikoKey_KEY_NUMPAD_DIVIDE_instance;
  var SkikoKey_KEY_NUMPAD_DECIMAL_instance;
  function Companion_42() {
  }
  protoOf(Companion_42).o3h = function (platformKeyCode) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var indexedObject = values_4();
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.jetbrains.skiko.Companion.valueOf.<anonymous>' call
        if (element.r3h_1 === platformKeyCode) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_elvis_lhs = tmp$ret$1;
    return tmp0_elvis_lhs == null ? SkikoKey_KEY_UNKNOWN_getInstance() : tmp0_elvis_lhs;
  };
  var Companion_instance_42;
  function Companion_getInstance_43() {
    return Companion_instance_42;
  }
  function values_4() {
    return [SkikoKey_KEY_UNKNOWN_getInstance(), SkikoKey_KEY_A_getInstance(), SkikoKey_KEY_S_getInstance(), SkikoKey_KEY_D_getInstance(), SkikoKey_KEY_F_getInstance(), SkikoKey_KEY_H_getInstance(), SkikoKey_KEY_G_getInstance(), SkikoKey_KEY_Z_getInstance(), SkikoKey_KEY_X_getInstance(), SkikoKey_KEY_C_getInstance(), SkikoKey_KEY_V_getInstance(), SkikoKey_KEY_B_getInstance(), SkikoKey_KEY_Q_getInstance(), SkikoKey_KEY_W_getInstance(), SkikoKey_KEY_E_getInstance(), SkikoKey_KEY_R_getInstance(), SkikoKey_KEY_Y_getInstance(), SkikoKey_KEY_T_getInstance(), SkikoKey_KEY_U_getInstance(), SkikoKey_KEY_I_getInstance(), SkikoKey_KEY_P_getInstance(), SkikoKey_KEY_L_getInstance(), SkikoKey_KEY_J_getInstance(), SkikoKey_KEY_K_getInstance(), SkikoKey_KEY_N_getInstance(), SkikoKey_KEY_M_getInstance(), SkikoKey_KEY_O_getInstance(), SkikoKey_KEY_1_getInstance(), SkikoKey_KEY_2_getInstance(), SkikoKey_KEY_3_getInstance(), SkikoKey_KEY_4_getInstance(), SkikoKey_KEY_5_getInstance(), SkikoKey_KEY_6_getInstance(), SkikoKey_KEY_7_getInstance(), SkikoKey_KEY_8_getInstance(), SkikoKey_KEY_9_getInstance(), SkikoKey_KEY_0_getInstance(), SkikoKey_KEY_CLOSE_BRACKET_getInstance(), SkikoKey_KEY_OPEN_BRACKET_getInstance(), SkikoKey_KEY_QUOTE_getInstance(), SkikoKey_KEY_SEMICOLON_getInstance(), SkikoKey_KEY_SLASH_getInstance(), SkikoKey_KEY_COMMA_getInstance(), SkikoKey_KEY_BACKSLASH_getInstance(), SkikoKey_KEY_PERIOD_getInstance(), SkikoKey_KEY_BACK_QUOTE_getInstance(), SkikoKey_KEY_EQUALS_getInstance(), SkikoKey_KEY_MINUS_getInstance(), SkikoKey_KEY_ENTER_getInstance(), SkikoKey_KEY_ESCAPE_getInstance(), SkikoKey_KEY_TAB_getInstance(), SkikoKey_KEY_BACKSPACE_getInstance(), SkikoKey_KEY_SPACE_getInstance(), SkikoKey_KEY_CAPSLOCK_getInstance(), SkikoKey_KEY_LEFT_META_getInstance(), SkikoKey_KEY_LEFT_SHIFT_getInstance(), SkikoKey_KEY_LEFT_ALT_getInstance(), SkikoKey_KEY_LEFT_CONTROL_getInstance(), SkikoKey_KEY_RIGHT_META_getInstance(), SkikoKey_KEY_RIGHT_SHIFT_getInstance(), SkikoKey_KEY_RIGHT_ALT_getInstance(), SkikoKey_KEY_RIGHT_CONTROL_getInstance(), SkikoKey_KEY_MENU_getInstance(), SkikoKey_KEY_UP_getInstance(), SkikoKey_KEY_DOWN_getInstance(), SkikoKey_KEY_LEFT_getInstance(), SkikoKey_KEY_RIGHT_getInstance(), SkikoKey_KEY_F1_getInstance(), SkikoKey_KEY_F2_getInstance(), SkikoKey_KEY_F3_getInstance(), SkikoKey_KEY_F4_getInstance(), SkikoKey_KEY_F5_getInstance(), SkikoKey_KEY_F6_getInstance(), SkikoKey_KEY_F7_getInstance(), SkikoKey_KEY_F8_getInstance(), SkikoKey_KEY_F9_getInstance(), SkikoKey_KEY_F10_getInstance(), SkikoKey_KEY_F11_getInstance(), SkikoKey_KEY_F12_getInstance(), SkikoKey_KEY_PRINTSCEEN_getInstance(), SkikoKey_KEY_SCROLL_LOCK_getInstance(), SkikoKey_KEY_PAUSE_getInstance(), SkikoKey_KEY_INSERT_getInstance(), SkikoKey_KEY_HOME_getInstance(), SkikoKey_KEY_PGUP_getInstance(), SkikoKey_KEY_DELETE_getInstance(), SkikoKey_KEY_END_getInstance(), SkikoKey_KEY_PGDOWN_getInstance(), SkikoKey_KEY_NUM_LOCK_getInstance(), SkikoKey_KEY_NUMPAD_0_getInstance(), SkikoKey_KEY_NUMPAD_1_getInstance(), SkikoKey_KEY_NUMPAD_2_getInstance(), SkikoKey_KEY_NUMPAD_3_getInstance(), SkikoKey_KEY_NUMPAD_4_getInstance(), SkikoKey_KEY_NUMPAD_5_getInstance(), SkikoKey_KEY_NUMPAD_6_getInstance(), SkikoKey_KEY_NUMPAD_7_getInstance(), SkikoKey_KEY_NUMPAD_8_getInstance(), SkikoKey_KEY_NUMPAD_9_getInstance(), SkikoKey_KEY_NUMPAD_ENTER_getInstance(), SkikoKey_KEY_NUMPAD_ADD_getInstance(), SkikoKey_KEY_NUMPAD_SUBTRACT_getInstance(), SkikoKey_KEY_NUMPAD_MULTIPLY_getInstance(), SkikoKey_KEY_NUMPAD_DIVIDE_getInstance(), SkikoKey_KEY_NUMPAD_DECIMAL_getInstance()];
  }
  var SkikoKey_entriesInitialized;
  function SkikoKey_initEntries() {
    if (SkikoKey_entriesInitialized)
      return Unit_instance;
    SkikoKey_entriesInitialized = true;
    SkikoKey_KEY_UNKNOWN_instance = new SkikoKey('KEY_UNKNOWN', 0, -1);
    SkikoKey_KEY_A_instance = new SkikoKey('KEY_A', 1, 65);
    SkikoKey_KEY_S_instance = new SkikoKey('KEY_S', 2, 83);
    SkikoKey_KEY_D_instance = new SkikoKey('KEY_D', 3, 68);
    SkikoKey_KEY_F_instance = new SkikoKey('KEY_F', 4, 70);
    SkikoKey_KEY_H_instance = new SkikoKey('KEY_H', 5, 72);
    SkikoKey_KEY_G_instance = new SkikoKey('KEY_G', 6, 71);
    SkikoKey_KEY_Z_instance = new SkikoKey('KEY_Z', 7, 90);
    SkikoKey_KEY_X_instance = new SkikoKey('KEY_X', 8, 88);
    SkikoKey_KEY_C_instance = new SkikoKey('KEY_C', 9, 67);
    SkikoKey_KEY_V_instance = new SkikoKey('KEY_V', 10, 86);
    SkikoKey_KEY_B_instance = new SkikoKey('KEY_B', 11, 66);
    SkikoKey_KEY_Q_instance = new SkikoKey('KEY_Q', 12, 81);
    SkikoKey_KEY_W_instance = new SkikoKey('KEY_W', 13, 87);
    SkikoKey_KEY_E_instance = new SkikoKey('KEY_E', 14, 69);
    SkikoKey_KEY_R_instance = new SkikoKey('KEY_R', 15, 82);
    SkikoKey_KEY_Y_instance = new SkikoKey('KEY_Y', 16, 89);
    SkikoKey_KEY_T_instance = new SkikoKey('KEY_T', 17, 54);
    SkikoKey_KEY_U_instance = new SkikoKey('KEY_U', 18, 85);
    SkikoKey_KEY_I_instance = new SkikoKey('KEY_I', 19, 73);
    SkikoKey_KEY_P_instance = new SkikoKey('KEY_P', 20, 80);
    SkikoKey_KEY_L_instance = new SkikoKey('KEY_L', 21, 76);
    SkikoKey_KEY_J_instance = new SkikoKey('KEY_J', 22, 74);
    SkikoKey_KEY_K_instance = new SkikoKey('KEY_K', 23, 75);
    SkikoKey_KEY_N_instance = new SkikoKey('KEY_N', 24, 78);
    SkikoKey_KEY_M_instance = new SkikoKey('KEY_M', 25, 77);
    SkikoKey_KEY_O_instance = new SkikoKey('KEY_O', 26, 79);
    SkikoKey_KEY_1_instance = new SkikoKey('KEY_1', 27, 49);
    SkikoKey_KEY_2_instance = new SkikoKey('KEY_2', 28, 50);
    SkikoKey_KEY_3_instance = new SkikoKey('KEY_3', 29, 51);
    SkikoKey_KEY_4_instance = new SkikoKey('KEY_4', 30, 52);
    SkikoKey_KEY_5_instance = new SkikoKey('KEY_5', 31, 53);
    SkikoKey_KEY_6_instance = new SkikoKey('KEY_6', 32, 54);
    SkikoKey_KEY_7_instance = new SkikoKey('KEY_7', 33, 55);
    SkikoKey_KEY_8_instance = new SkikoKey('KEY_8', 34, 56);
    SkikoKey_KEY_9_instance = new SkikoKey('KEY_9', 35, 57);
    SkikoKey_KEY_0_instance = new SkikoKey('KEY_0', 36, 48);
    SkikoKey_KEY_CLOSE_BRACKET_instance = new SkikoKey('KEY_CLOSE_BRACKET', 37, 221);
    SkikoKey_KEY_OPEN_BRACKET_instance = new SkikoKey('KEY_OPEN_BRACKET', 38, 219);
    SkikoKey_KEY_QUOTE_instance = new SkikoKey('KEY_QUOTE', 39, 222);
    SkikoKey_KEY_SEMICOLON_instance = new SkikoKey('KEY_SEMICOLON', 40, 59);
    SkikoKey_KEY_SLASH_instance = new SkikoKey('KEY_SLASH', 41, 191);
    SkikoKey_KEY_COMMA_instance = new SkikoKey('KEY_COMMA', 42, 188);
    SkikoKey_KEY_BACKSLASH_instance = new SkikoKey('KEY_BACKSLASH', 43, 220);
    SkikoKey_KEY_PERIOD_instance = new SkikoKey('KEY_PERIOD', 44, 190);
    SkikoKey_KEY_BACK_QUOTE_instance = new SkikoKey('KEY_BACK_QUOTE', 45, 192);
    SkikoKey_KEY_EQUALS_instance = new SkikoKey('KEY_EQUALS', 46, 61);
    SkikoKey_KEY_MINUS_instance = new SkikoKey('KEY_MINUS', 47, 173);
    SkikoKey_KEY_ENTER_instance = new SkikoKey('KEY_ENTER', 48, 13);
    SkikoKey_KEY_ESCAPE_instance = new SkikoKey('KEY_ESCAPE', 49, 27);
    SkikoKey_KEY_TAB_instance = new SkikoKey('KEY_TAB', 50, 9);
    SkikoKey_KEY_BACKSPACE_instance = new SkikoKey('KEY_BACKSPACE', 51, 8);
    SkikoKey_KEY_SPACE_instance = new SkikoKey('KEY_SPACE', 52, 32);
    SkikoKey_KEY_CAPSLOCK_instance = new SkikoKey('KEY_CAPSLOCK', 53, 20);
    SkikoKey_KEY_LEFT_META_instance = new SkikoKey('KEY_LEFT_META', 54, 224);
    SkikoKey_KEY_LEFT_SHIFT_instance = new SkikoKey('KEY_LEFT_SHIFT', 55, 16);
    SkikoKey_KEY_LEFT_ALT_instance = new SkikoKey('KEY_LEFT_ALT', 56, 18);
    SkikoKey_KEY_LEFT_CONTROL_instance = new SkikoKey('KEY_LEFT_CONTROL', 57, 17);
    SkikoKey_KEY_RIGHT_META_instance = new SkikoKey('KEY_RIGHT_META', 58, -2147483424);
    SkikoKey_KEY_RIGHT_SHIFT_instance = new SkikoKey('KEY_RIGHT_SHIFT', 59, -2147483632);
    SkikoKey_KEY_RIGHT_ALT_instance = new SkikoKey('KEY_RIGHT_ALT', 60, 225);
    SkikoKey_KEY_RIGHT_CONTROL_instance = new SkikoKey('KEY_RIGHT_CONTROL', 61, -2147483631);
    SkikoKey_KEY_MENU_instance = new SkikoKey('KEY_MENU', 62, 93);
    SkikoKey_KEY_UP_instance = new SkikoKey('KEY_UP', 63, 38);
    SkikoKey_KEY_DOWN_instance = new SkikoKey('KEY_DOWN', 64, 40);
    SkikoKey_KEY_LEFT_instance = new SkikoKey('KEY_LEFT', 65, 37);
    SkikoKey_KEY_RIGHT_instance = new SkikoKey('KEY_RIGHT', 66, 39);
    SkikoKey_KEY_F1_instance = new SkikoKey('KEY_F1', 67, 112);
    SkikoKey_KEY_F2_instance = new SkikoKey('KEY_F2', 68, 113);
    SkikoKey_KEY_F3_instance = new SkikoKey('KEY_F3', 69, 114);
    SkikoKey_KEY_F4_instance = new SkikoKey('KEY_F4', 70, 115);
    SkikoKey_KEY_F5_instance = new SkikoKey('KEY_F5', 71, 116);
    SkikoKey_KEY_F6_instance = new SkikoKey('KEY_F6', 72, 117);
    SkikoKey_KEY_F7_instance = new SkikoKey('KEY_F7', 73, 118);
    SkikoKey_KEY_F8_instance = new SkikoKey('KEY_F8', 74, 119);
    SkikoKey_KEY_F9_instance = new SkikoKey('KEY_F9', 75, 120);
    SkikoKey_KEY_F10_instance = new SkikoKey('KEY_F10', 76, 121);
    SkikoKey_KEY_F11_instance = new SkikoKey('KEY_F11', 77, 122);
    SkikoKey_KEY_F12_instance = new SkikoKey('KEY_F12', 78, 123);
    SkikoKey_KEY_PRINTSCEEN_instance = new SkikoKey('KEY_PRINTSCEEN', 79, 44);
    SkikoKey_KEY_SCROLL_LOCK_instance = new SkikoKey('KEY_SCROLL_LOCK', 80, 145);
    SkikoKey_KEY_PAUSE_instance = new SkikoKey('KEY_PAUSE', 81, 19);
    SkikoKey_KEY_INSERT_instance = new SkikoKey('KEY_INSERT', 82, 45);
    SkikoKey_KEY_HOME_instance = new SkikoKey('KEY_HOME', 83, 36);
    SkikoKey_KEY_PGUP_instance = new SkikoKey('KEY_PGUP', 84, 33);
    SkikoKey_KEY_DELETE_instance = new SkikoKey('KEY_DELETE', 85, 46);
    SkikoKey_KEY_END_instance = new SkikoKey('KEY_END', 86, 35);
    SkikoKey_KEY_PGDOWN_instance = new SkikoKey('KEY_PGDOWN', 87, 34);
    SkikoKey_KEY_NUM_LOCK_instance = new SkikoKey('KEY_NUM_LOCK', 88, 144);
    SkikoKey_KEY_NUMPAD_0_instance = new SkikoKey('KEY_NUMPAD_0', 89, 96);
    SkikoKey_KEY_NUMPAD_1_instance = new SkikoKey('KEY_NUMPAD_1', 90, 97);
    SkikoKey_KEY_NUMPAD_2_instance = new SkikoKey('KEY_NUMPAD_2', 91, 98);
    SkikoKey_KEY_NUMPAD_3_instance = new SkikoKey('KEY_NUMPAD_3', 92, 99);
    SkikoKey_KEY_NUMPAD_4_instance = new SkikoKey('KEY_NUMPAD_4', 93, 100);
    SkikoKey_KEY_NUMPAD_5_instance = new SkikoKey('KEY_NUMPAD_5', 94, 101);
    SkikoKey_KEY_NUMPAD_6_instance = new SkikoKey('KEY_NUMPAD_6', 95, 102);
    SkikoKey_KEY_NUMPAD_7_instance = new SkikoKey('KEY_NUMPAD_7', 96, 103);
    SkikoKey_KEY_NUMPAD_8_instance = new SkikoKey('KEY_NUMPAD_8', 97, 104);
    SkikoKey_KEY_NUMPAD_9_instance = new SkikoKey('KEY_NUMPAD_9', 98, 105);
    SkikoKey_KEY_NUMPAD_ENTER_instance = new SkikoKey('KEY_NUMPAD_ENTER', 99, 14);
    SkikoKey_KEY_NUMPAD_ADD_instance = new SkikoKey('KEY_NUMPAD_ADD', 100, 107);
    SkikoKey_KEY_NUMPAD_SUBTRACT_instance = new SkikoKey('KEY_NUMPAD_SUBTRACT', 101, 109);
    SkikoKey_KEY_NUMPAD_MULTIPLY_instance = new SkikoKey('KEY_NUMPAD_MULTIPLY', 102, 106);
    SkikoKey_KEY_NUMPAD_DIVIDE_instance = new SkikoKey('KEY_NUMPAD_DIVIDE', 103, 111);
    SkikoKey_KEY_NUMPAD_DECIMAL_instance = new SkikoKey('KEY_NUMPAD_DECIMAL', 104, 110);
  }
  function SkikoKey(name, ordinal, platformKeyCode) {
    Enum.call(this, name, ordinal);
    this.r3h_1 = platformKeyCode;
  }
  function SkikoKey_KEY_UNKNOWN_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_UNKNOWN_instance;
  }
  function SkikoKey_KEY_A_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_A_instance;
  }
  function SkikoKey_KEY_S_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_S_instance;
  }
  function SkikoKey_KEY_D_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_D_instance;
  }
  function SkikoKey_KEY_F_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F_instance;
  }
  function SkikoKey_KEY_H_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_H_instance;
  }
  function SkikoKey_KEY_G_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_G_instance;
  }
  function SkikoKey_KEY_Z_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_Z_instance;
  }
  function SkikoKey_KEY_X_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_X_instance;
  }
  function SkikoKey_KEY_C_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_C_instance;
  }
  function SkikoKey_KEY_V_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_V_instance;
  }
  function SkikoKey_KEY_B_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_B_instance;
  }
  function SkikoKey_KEY_Q_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_Q_instance;
  }
  function SkikoKey_KEY_W_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_W_instance;
  }
  function SkikoKey_KEY_E_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_E_instance;
  }
  function SkikoKey_KEY_R_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_R_instance;
  }
  function SkikoKey_KEY_Y_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_Y_instance;
  }
  function SkikoKey_KEY_T_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_T_instance;
  }
  function SkikoKey_KEY_U_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_U_instance;
  }
  function SkikoKey_KEY_I_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_I_instance;
  }
  function SkikoKey_KEY_P_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_P_instance;
  }
  function SkikoKey_KEY_L_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_L_instance;
  }
  function SkikoKey_KEY_J_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_J_instance;
  }
  function SkikoKey_KEY_K_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_K_instance;
  }
  function SkikoKey_KEY_N_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_N_instance;
  }
  function SkikoKey_KEY_M_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_M_instance;
  }
  function SkikoKey_KEY_O_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_O_instance;
  }
  function SkikoKey_KEY_1_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_1_instance;
  }
  function SkikoKey_KEY_2_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_2_instance;
  }
  function SkikoKey_KEY_3_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_3_instance;
  }
  function SkikoKey_KEY_4_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_4_instance;
  }
  function SkikoKey_KEY_5_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_5_instance;
  }
  function SkikoKey_KEY_6_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_6_instance;
  }
  function SkikoKey_KEY_7_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_7_instance;
  }
  function SkikoKey_KEY_8_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_8_instance;
  }
  function SkikoKey_KEY_9_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_9_instance;
  }
  function SkikoKey_KEY_0_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_0_instance;
  }
  function SkikoKey_KEY_CLOSE_BRACKET_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_CLOSE_BRACKET_instance;
  }
  function SkikoKey_KEY_OPEN_BRACKET_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_OPEN_BRACKET_instance;
  }
  function SkikoKey_KEY_QUOTE_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_QUOTE_instance;
  }
  function SkikoKey_KEY_SEMICOLON_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_SEMICOLON_instance;
  }
  function SkikoKey_KEY_SLASH_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_SLASH_instance;
  }
  function SkikoKey_KEY_COMMA_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_COMMA_instance;
  }
  function SkikoKey_KEY_BACKSLASH_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_BACKSLASH_instance;
  }
  function SkikoKey_KEY_PERIOD_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_PERIOD_instance;
  }
  function SkikoKey_KEY_BACK_QUOTE_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_BACK_QUOTE_instance;
  }
  function SkikoKey_KEY_EQUALS_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_EQUALS_instance;
  }
  function SkikoKey_KEY_MINUS_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_MINUS_instance;
  }
  function SkikoKey_KEY_ENTER_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_ENTER_instance;
  }
  function SkikoKey_KEY_ESCAPE_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_ESCAPE_instance;
  }
  function SkikoKey_KEY_TAB_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_TAB_instance;
  }
  function SkikoKey_KEY_BACKSPACE_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_BACKSPACE_instance;
  }
  function SkikoKey_KEY_SPACE_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_SPACE_instance;
  }
  function SkikoKey_KEY_CAPSLOCK_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_CAPSLOCK_instance;
  }
  function SkikoKey_KEY_LEFT_META_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_LEFT_META_instance;
  }
  function SkikoKey_KEY_LEFT_SHIFT_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_LEFT_SHIFT_instance;
  }
  function SkikoKey_KEY_LEFT_ALT_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_LEFT_ALT_instance;
  }
  function SkikoKey_KEY_LEFT_CONTROL_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_LEFT_CONTROL_instance;
  }
  function SkikoKey_KEY_RIGHT_META_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_RIGHT_META_instance;
  }
  function SkikoKey_KEY_RIGHT_SHIFT_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_RIGHT_SHIFT_instance;
  }
  function SkikoKey_KEY_RIGHT_ALT_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_RIGHT_ALT_instance;
  }
  function SkikoKey_KEY_RIGHT_CONTROL_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_RIGHT_CONTROL_instance;
  }
  function SkikoKey_KEY_MENU_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_MENU_instance;
  }
  function SkikoKey_KEY_UP_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_UP_instance;
  }
  function SkikoKey_KEY_DOWN_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_DOWN_instance;
  }
  function SkikoKey_KEY_LEFT_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_LEFT_instance;
  }
  function SkikoKey_KEY_RIGHT_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_RIGHT_instance;
  }
  function SkikoKey_KEY_F1_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F1_instance;
  }
  function SkikoKey_KEY_F2_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F2_instance;
  }
  function SkikoKey_KEY_F3_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F3_instance;
  }
  function SkikoKey_KEY_F4_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F4_instance;
  }
  function SkikoKey_KEY_F5_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F5_instance;
  }
  function SkikoKey_KEY_F6_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F6_instance;
  }
  function SkikoKey_KEY_F7_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F7_instance;
  }
  function SkikoKey_KEY_F8_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F8_instance;
  }
  function SkikoKey_KEY_F9_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F9_instance;
  }
  function SkikoKey_KEY_F10_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F10_instance;
  }
  function SkikoKey_KEY_F11_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F11_instance;
  }
  function SkikoKey_KEY_F12_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F12_instance;
  }
  function SkikoKey_KEY_PRINTSCEEN_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_PRINTSCEEN_instance;
  }
  function SkikoKey_KEY_SCROLL_LOCK_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_SCROLL_LOCK_instance;
  }
  function SkikoKey_KEY_PAUSE_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_PAUSE_instance;
  }
  function SkikoKey_KEY_INSERT_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_INSERT_instance;
  }
  function SkikoKey_KEY_HOME_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_HOME_instance;
  }
  function SkikoKey_KEY_PGUP_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_PGUP_instance;
  }
  function SkikoKey_KEY_DELETE_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_DELETE_instance;
  }
  function SkikoKey_KEY_END_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_END_instance;
  }
  function SkikoKey_KEY_PGDOWN_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_PGDOWN_instance;
  }
  function SkikoKey_KEY_NUM_LOCK_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUM_LOCK_instance;
  }
  function SkikoKey_KEY_NUMPAD_0_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_0_instance;
  }
  function SkikoKey_KEY_NUMPAD_1_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_1_instance;
  }
  function SkikoKey_KEY_NUMPAD_2_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_2_instance;
  }
  function SkikoKey_KEY_NUMPAD_3_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_3_instance;
  }
  function SkikoKey_KEY_NUMPAD_4_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_4_instance;
  }
  function SkikoKey_KEY_NUMPAD_5_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_5_instance;
  }
  function SkikoKey_KEY_NUMPAD_6_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_6_instance;
  }
  function SkikoKey_KEY_NUMPAD_7_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_7_instance;
  }
  function SkikoKey_KEY_NUMPAD_8_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_8_instance;
  }
  function SkikoKey_KEY_NUMPAD_9_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_9_instance;
  }
  function SkikoKey_KEY_NUMPAD_ENTER_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_ENTER_instance;
  }
  function SkikoKey_KEY_NUMPAD_ADD_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_ADD_instance;
  }
  function SkikoKey_KEY_NUMPAD_SUBTRACT_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_SUBTRACT_instance;
  }
  function SkikoKey_KEY_NUMPAD_MULTIPLY_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_MULTIPLY_instance;
  }
  function SkikoKey_KEY_NUMPAD_DIVIDE_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_DIVIDE_instance;
  }
  function SkikoKey_KEY_NUMPAD_DECIMAL_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_DECIMAL_instance;
  }
  function get_currentSystemTheme() {
    return SystemTheme_UNKNOWN_getInstance();
  }
  function loadOpenGLLibrary() {
    if (get_hostOs().t9_1 === 4)
      throw new RenderException("OpenGL on iOS isn't supported");
  }
  //region block: post-declaration
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'alpha', function () {
    return this.p3g();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'depth', function () {
    return this.q3g();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'stencil', function () {
    return this.r3g();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'antialias', function () {
    return this.s3g();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'premultipliedAlpha', function () {
    return this.t3g();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'preserveDrawingBuffer', function () {
    return this.u3g();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'preferLowPowerToHighPerformance', function () {
    return this.v3g();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'failIfMajorPerformanceCaveat', function () {
    return this.w3g();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'enableExtensionsByDefault', function () {
    return this.x3g();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'explicitSwapControl', function () {
    return this.y3g();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'renderViaOffscreenBackBuffer', function () {
    return this.z3g();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'majorVersion', function () {
    return this.a3h();
  });
  //endregion
  //region block: init
  Color_instance = new Color();
  Companion_instance_7 = new Companion_7();
  Companion_instance_10 = new Companion_10();
  Companion_instance_11 = new Companion_11();
  Companion_instance_12 = new Companion_12();
  Companion_instance_13 = new Companion_13();
  Companion_instance_23 = new Companion_23();
  Companion_instance_24 = new Companion_24();
  Companion_instance_30 = new Companion_30();
  Companion_instance_34 = new Companion_34();
  Companion_instance_35 = new Companion_35();
  Companion_instance_40 = new Companion_40();
  Companion_instance_41 = new Companion_41();
  Stats_instance = new Stats();
  Empty_instance = new Empty();
  Companion_instance_42 = new Companion_42();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Alignment_CENTER_getInstance;
  _.$_$.b = Alignment_END_getInstance;
  _.$_$.c = Alignment_JUSTIFY_getInstance;
  _.$_$.d = Alignment_LEFT_getInstance;
  _.$_$.e = Alignment_RIGHT_getInstance;
  _.$_$.f = Alignment_START_getInstance;
  _.$_$.g = BaselineMode_ALPHABETIC_getInstance;
  _.$_$.h = DecorationLineStyle_DASHED_getInstance;
  _.$_$.i = DecorationLineStyle_DOTTED_getInstance;
  _.$_$.j = DecorationLineStyle_DOUBLE_getInstance;
  _.$_$.k = DecorationLineStyle_SOLID_getInstance;
  _.$_$.l = DecorationLineStyle_WAVY_getInstance;
  _.$_$.m = Direction_LTR_getInstance;
  _.$_$.n = Direction_RTL_getInstance;
  _.$_$.o = HeightMode_ALL_getInstance;
  _.$_$.p = HeightMode_DISABLE_ALL_getInstance;
  _.$_$.q = HeightMode_DISABLE_FIRST_ASCENT_getInstance;
  _.$_$.r = HeightMode_DISABLE_LAST_DESCENT_getInstance;
  _.$_$.s = PlaceholderAlignment_ABOVE_BASELINE_getInstance;
  _.$_$.t = PlaceholderAlignment_BOTTOM_getInstance;
  _.$_$.u = PlaceholderAlignment_MIDDLE_getInstance;
  _.$_$.v = PlaceholderAlignment_TOP_getInstance;
  _.$_$.w = RectHeightMode_MAX_getInstance;
  _.$_$.x = RectHeightMode_STRUT_getInstance;
  _.$_$.y = RectWidthMode_TIGHT_getInstance;
  _.$_$.z = BlendMode_CLEAR_getInstance;
  _.$_$.a1 = BlendMode_COLOR_BURN_getInstance;
  _.$_$.b1 = BlendMode_COLOR_DODGE_getInstance;
  _.$_$.c1 = BlendMode_COLOR_getInstance;
  _.$_$.d1 = BlendMode_DARKEN_getInstance;
  _.$_$.e1 = BlendMode_DIFFERENCE_getInstance;
  _.$_$.f1 = BlendMode_DST_ATOP_getInstance;
  _.$_$.g1 = BlendMode_DST_IN_getInstance;
  _.$_$.h1 = BlendMode_DST_OUT_getInstance;
  _.$_$.i1 = BlendMode_DST_OVER_getInstance;
  _.$_$.j1 = BlendMode_DST_getInstance;
  _.$_$.k1 = BlendMode_EXCLUSION_getInstance;
  _.$_$.l1 = BlendMode_HARD_LIGHT_getInstance;
  _.$_$.m1 = BlendMode_HUE_getInstance;
  _.$_$.n1 = BlendMode_LIGHTEN_getInstance;
  _.$_$.o1 = BlendMode_LUMINOSITY_getInstance;
  _.$_$.p1 = BlendMode_MODULATE_getInstance;
  _.$_$.q1 = BlendMode_MULTIPLY_getInstance;
  _.$_$.r1 = BlendMode_OVERLAY_getInstance;
  _.$_$.s1 = BlendMode_PLUS_getInstance;
  _.$_$.t1 = BlendMode_SATURATION_getInstance;
  _.$_$.u1 = BlendMode_SCREEN_getInstance;
  _.$_$.v1 = BlendMode_SOFT_LIGHT_getInstance;
  _.$_$.w1 = BlendMode_SRC_ATOP_getInstance;
  _.$_$.x1 = BlendMode_SRC_IN_getInstance;
  _.$_$.y1 = BlendMode_SRC_OUT_getInstance;
  _.$_$.z1 = BlendMode_SRC_OVER_getInstance;
  _.$_$.a2 = BlendMode_SRC_getInstance;
  _.$_$.b2 = BlendMode_XOR_getInstance;
  _.$_$.c2 = ClipMode_DIFFERENCE_getInstance;
  _.$_$.d2 = ClipMode_INTERSECT_getInstance;
  _.$_$.e2 = FontSlant_ITALIC_getInstance;
  _.$_$.f2 = FontSlant_UPRIGHT_getInstance;
  _.$_$.g2 = PaintMode_FILL_getInstance;
  _.$_$.h2 = PaintMode_STROKE_getInstance;
  _.$_$.i2 = PaintStrokeCap_BUTT_getInstance;
  _.$_$.j2 = PaintStrokeCap_ROUND_getInstance;
  _.$_$.k2 = PaintStrokeCap_SQUARE_getInstance;
  _.$_$.l2 = PaintStrokeJoin_BEVEL_getInstance;
  _.$_$.m2 = PaintStrokeJoin_MITER_getInstance;
  _.$_$.n2 = PaintStrokeJoin_ROUND_getInstance;
  _.$_$.o2 = PathDirection_COUNTER_CLOCKWISE_getInstance;
  _.$_$.p2 = PathFillMode_EVEN_ODD_getInstance;
  _.$_$.q2 = PathFillMode_WINDING_getInstance;
  _.$_$.r2 = PathOp_DIFFERENCE_getInstance;
  _.$_$.s2 = PathOp_INTERSECT_getInstance;
  _.$_$.t2 = PathOp_REVERSE_DIFFERENCE_getInstance;
  _.$_$.u2 = PathOp_UNION_getInstance;
  _.$_$.v2 = PathOp_XOR_getInstance;
  _.$_$.w2 = SkikoKey_KEY_0_getInstance;
  _.$_$.x2 = SkikoKey_KEY_1_getInstance;
  _.$_$.y2 = SkikoKey_KEY_2_getInstance;
  _.$_$.z2 = SkikoKey_KEY_3_getInstance;
  _.$_$.a3 = SkikoKey_KEY_4_getInstance;
  _.$_$.b3 = SkikoKey_KEY_5_getInstance;
  _.$_$.c3 = SkikoKey_KEY_6_getInstance;
  _.$_$.d3 = SkikoKey_KEY_7_getInstance;
  _.$_$.e3 = SkikoKey_KEY_8_getInstance;
  _.$_$.f3 = SkikoKey_KEY_9_getInstance;
  _.$_$.g3 = SkikoKey_KEY_A_getInstance;
  _.$_$.h3 = SkikoKey_KEY_BACKSLASH_getInstance;
  _.$_$.i3 = SkikoKey_KEY_BACKSPACE_getInstance;
  _.$_$.j3 = SkikoKey_KEY_BACK_QUOTE_getInstance;
  _.$_$.k3 = SkikoKey_KEY_B_getInstance;
  _.$_$.l3 = SkikoKey_KEY_CAPSLOCK_getInstance;
  _.$_$.m3 = SkikoKey_KEY_CLOSE_BRACKET_getInstance;
  _.$_$.n3 = SkikoKey_KEY_COMMA_getInstance;
  _.$_$.o3 = SkikoKey_KEY_C_getInstance;
  _.$_$.p3 = SkikoKey_KEY_DELETE_getInstance;
  _.$_$.q3 = SkikoKey_KEY_DOWN_getInstance;
  _.$_$.r3 = SkikoKey_KEY_D_getInstance;
  _.$_$.s3 = SkikoKey_KEY_END_getInstance;
  _.$_$.t3 = SkikoKey_KEY_ENTER_getInstance;
  _.$_$.u3 = SkikoKey_KEY_EQUALS_getInstance;
  _.$_$.v3 = SkikoKey_KEY_ESCAPE_getInstance;
  _.$_$.w3 = SkikoKey_KEY_E_getInstance;
  _.$_$.x3 = SkikoKey_KEY_F10_getInstance;
  _.$_$.y3 = SkikoKey_KEY_F11_getInstance;
  _.$_$.z3 = SkikoKey_KEY_F12_getInstance;
  _.$_$.a4 = SkikoKey_KEY_F1_getInstance;
  _.$_$.b4 = SkikoKey_KEY_F2_getInstance;
  _.$_$.c4 = SkikoKey_KEY_F3_getInstance;
  _.$_$.d4 = SkikoKey_KEY_F4_getInstance;
  _.$_$.e4 = SkikoKey_KEY_F5_getInstance;
  _.$_$.f4 = SkikoKey_KEY_F6_getInstance;
  _.$_$.g4 = SkikoKey_KEY_F7_getInstance;
  _.$_$.h4 = SkikoKey_KEY_F8_getInstance;
  _.$_$.i4 = SkikoKey_KEY_F9_getInstance;
  _.$_$.j4 = SkikoKey_KEY_F_getInstance;
  _.$_$.k4 = SkikoKey_KEY_G_getInstance;
  _.$_$.l4 = SkikoKey_KEY_HOME_getInstance;
  _.$_$.m4 = SkikoKey_KEY_H_getInstance;
  _.$_$.n4 = SkikoKey_KEY_INSERT_getInstance;
  _.$_$.o4 = SkikoKey_KEY_I_getInstance;
  _.$_$.p4 = SkikoKey_KEY_J_getInstance;
  _.$_$.q4 = SkikoKey_KEY_K_getInstance;
  _.$_$.r4 = SkikoKey_KEY_LEFT_ALT_getInstance;
  _.$_$.s4 = SkikoKey_KEY_LEFT_CONTROL_getInstance;
  _.$_$.t4 = SkikoKey_KEY_LEFT_META_getInstance;
  _.$_$.u4 = SkikoKey_KEY_LEFT_SHIFT_getInstance;
  _.$_$.v4 = SkikoKey_KEY_LEFT_getInstance;
  _.$_$.w4 = SkikoKey_KEY_L_getInstance;
  _.$_$.x4 = SkikoKey_KEY_MINUS_getInstance;
  _.$_$.y4 = SkikoKey_KEY_M_getInstance;
  _.$_$.z4 = SkikoKey_KEY_NUMPAD_0_getInstance;
  _.$_$.a5 = SkikoKey_KEY_NUMPAD_1_getInstance;
  _.$_$.b5 = SkikoKey_KEY_NUMPAD_2_getInstance;
  _.$_$.c5 = SkikoKey_KEY_NUMPAD_3_getInstance;
  _.$_$.d5 = SkikoKey_KEY_NUMPAD_4_getInstance;
  _.$_$.e5 = SkikoKey_KEY_NUMPAD_5_getInstance;
  _.$_$.f5 = SkikoKey_KEY_NUMPAD_6_getInstance;
  _.$_$.g5 = SkikoKey_KEY_NUMPAD_7_getInstance;
  _.$_$.h5 = SkikoKey_KEY_NUMPAD_8_getInstance;
  _.$_$.i5 = SkikoKey_KEY_NUMPAD_9_getInstance;
  _.$_$.j5 = SkikoKey_KEY_NUMPAD_ADD_getInstance;
  _.$_$.k5 = SkikoKey_KEY_NUMPAD_DIVIDE_getInstance;
  _.$_$.l5 = SkikoKey_KEY_NUMPAD_ENTER_getInstance;
  _.$_$.m5 = SkikoKey_KEY_NUMPAD_MULTIPLY_getInstance;
  _.$_$.n5 = SkikoKey_KEY_NUMPAD_SUBTRACT_getInstance;
  _.$_$.o5 = SkikoKey_KEY_NUM_LOCK_getInstance;
  _.$_$.p5 = SkikoKey_KEY_N_getInstance;
  _.$_$.q5 = SkikoKey_KEY_OPEN_BRACKET_getInstance;
  _.$_$.r5 = SkikoKey_KEY_O_getInstance;
  _.$_$.s5 = SkikoKey_KEY_PERIOD_getInstance;
  _.$_$.t5 = SkikoKey_KEY_PGDOWN_getInstance;
  _.$_$.u5 = SkikoKey_KEY_PGUP_getInstance;
  _.$_$.v5 = SkikoKey_KEY_PRINTSCEEN_getInstance;
  _.$_$.w5 = SkikoKey_KEY_P_getInstance;
  _.$_$.x5 = SkikoKey_KEY_Q_getInstance;
  _.$_$.y5 = SkikoKey_KEY_RIGHT_ALT_getInstance;
  _.$_$.z5 = SkikoKey_KEY_RIGHT_CONTROL_getInstance;
  _.$_$.a6 = SkikoKey_KEY_RIGHT_META_getInstance;
  _.$_$.b6 = SkikoKey_KEY_RIGHT_SHIFT_getInstance;
  _.$_$.c6 = SkikoKey_KEY_RIGHT_getInstance;
  _.$_$.d6 = SkikoKey_KEY_R_getInstance;
  _.$_$.e6 = SkikoKey_KEY_SCROLL_LOCK_getInstance;
  _.$_$.f6 = SkikoKey_KEY_SEMICOLON_getInstance;
  _.$_$.g6 = SkikoKey_KEY_SLASH_getInstance;
  _.$_$.h6 = SkikoKey_KEY_SPACE_getInstance;
  _.$_$.i6 = SkikoKey_KEY_S_getInstance;
  _.$_$.j6 = SkikoKey_KEY_TAB_getInstance;
  _.$_$.k6 = SkikoKey_KEY_T_getInstance;
  _.$_$.l6 = SkikoKey_KEY_UNKNOWN_getInstance;
  _.$_$.m6 = SkikoKey_KEY_UP_getInstance;
  _.$_$.n6 = SkikoKey_KEY_U_getInstance;
  _.$_$.o6 = SkikoKey_KEY_V_getInstance;
  _.$_$.p6 = SkikoKey_KEY_W_getInstance;
  _.$_$.q6 = SkikoKey_KEY_X_getInstance;
  _.$_$.r6 = SkikoKey_KEY_Y_getInstance;
  _.$_$.s6 = SkikoKey_KEY_Z_getInstance;
  _.$_$.t6 = SkikoKeyboardEventKind_DOWN_getInstance;
  _.$_$.u6 = SkikoKeyboardEventKind_UP_getInstance;
  _.$_$.v6 = SkikoPointerDevice_TOUCH_getInstance;
  _.$_$.w6 = SkikoPointerEventKind_DOWN_getInstance;
  _.$_$.x6 = SkikoPointerEventKind_DRAG_getInstance;
  _.$_$.y6 = SkikoPointerEventKind_MOVE_getInstance;
  _.$_$.z6 = SkikoPointerEventKind_SCROLL_getInstance;
  _.$_$.a7 = SkikoPointerEventKind_UP_getInstance;
  _.$_$.b7 = FontCollection_init_$Create$;
  _.$_$.c7 = TextStyle_init_$Create$;
  _.$_$.d7 = Font_init_$Create$_0;
  _.$_$.e7 = FontStyle_init_$Create$;
  _.$_$.f7 = Paint_init_$Create$;
  _.$_$.g7 = Path_init_$Create$;
  _.$_$.h7 = PictureRecorder_init_$Create$;
  _.$_$.i7 = _SkikoInputModifiers___init__impl__z8g2zy;
  _.$_$.j7 = SkikoInputModifiers__has_impl_qg30o6;
  _.$_$.k7 = _SkikoInputModifiers___get_value__impl__13eq4a;
  _.$_$.l7 = _SkikoMouseButtons___init__impl__kylsco;
  _.$_$.m7 = _SkikoMouseButtons___get_value__impl__ltkvwc;
  _.$_$.n7 = CharDirection_getInstance;
  _.$_$.o7 = Companion_getInstance_1;
  _.$_$.p7 = Companion_getInstance_4;
  _.$_$.q7 = Companion_getInstance_7;
  _.$_$.r7 = Companion_getInstance_9;
  _.$_$.s7 = Companion_getInstance_10;
  _.$_$.t7 = Companion_instance_11;
  _.$_$.u7 = Companion_getInstance_16;
  _.$_$.v7 = Companion_getInstance_19;
  _.$_$.w7 = Companion_instance_23;
  _.$_$.x7 = Companion_instance_24;
  _.$_$.y7 = ShadowUtils_getInstance;
  _.$_$.z7 = Companion_getInstance_27;
  _.$_$.a8 = Empty_instance;
  _.$_$.b8 = Companion_getInstance_39;
  _.$_$.c8 = Companion_instance_42;
  _.$_$.d8 = Companion_getInstance_40;
  _.$_$.e8 = DecorationStyle;
  _.$_$.f8 = LineMetrics;
  _.$_$.g8 = ParagraphBuilder;
  _.$_$.h8 = ParagraphStyle;
  _.$_$.i8 = PlaceholderStyle;
  _.$_$.j8 = Shadow;
  _.$_$.k8 = TextIndent;
  _.$_$.l8 = TypefaceFontProvider;
  _.$_$.m8 = Matrix44;
  _.$_$.n8 = Point3;
  _.$_$.o8 = ClipboardManager;
  _.$_$.p8 = SkiaLayer;
  _.$_$.q8 = SkikoKeyboardEvent;
  _.$_$.r8 = SkikoPointerEvent;
  _.$_$.s8 = SkikoPointer;
  _.$_$.t8 = SkikoView;
  _.$_$.u8 = URIManager;
  _.$_$.v8 = currentNanoTime;
  _.$_$.w8 = get_currentSystemTheme;
  _.$_$.x8 = get_hostOs;
  //endregion
  return _;
}));

//# sourceMappingURL=skiko-kjs.js.map
