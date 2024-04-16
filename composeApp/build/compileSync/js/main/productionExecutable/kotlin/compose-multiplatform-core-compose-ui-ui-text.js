(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './compose-multiplatform-core-compose-ui-ui-geometry.js', './compose-multiplatform-core-compose-runtime-runtime.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-compose-ui-ui-util.js', './skiko-kjs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-compose-ui-ui-util.js'), require('./skiko-kjs.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof this['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof this['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof this['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof this['compose-multiplatform-core-compose-ui-ui-util'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'compose-multiplatform-core-compose-ui-ui-util' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-util' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof this['skiko-kjs'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'skiko-kjs' was not found. Please, check whether 'skiko-kjs' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    root['compose-multiplatform-core-compose-ui-ui-text'] = factory(typeof this['compose-multiplatform-core-compose-ui-ui-text'] === 'undefined' ? {} : this['compose-multiplatform-core-compose-ui-ui-text'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-compose-ui-ui-unit'], this['compose-multiplatform-core-compose-ui-ui-graphics'], this['compose-multiplatform-core-compose-ui-ui-geometry'], this['compose-multiplatform-core-compose-runtime-runtime'], this['kotlinx-coroutines-core'], this['compose-multiplatform-core-compose-ui-ui-util'], this['skiko-kjs']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui_util, kotlin_org_jetbrains_skiko_skiko) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.ic;
  var objectCreate = kotlin_kotlin.$_$.gc;
  var emptyList = kotlin_kotlin.$_$.i7;
  var Unit_instance = kotlin_kotlin.$_$.k5;
  var VOID = kotlin_kotlin.$_$.g;
  var toString = kotlin_kotlin.$_$.nc;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.v1;
  var hashCode = kotlin_kotlin.$_$.kb;
  var getStringHashCode = kotlin_kotlin.$_$.jb;
  var THROW_CCE = kotlin_kotlin.$_$.ng;
  var equals = kotlin_kotlin.$_$.ab;
  var classMeta = kotlin_kotlin.$_$.xa;
  var setMetadataFor = kotlin_kotlin.$_$.jc;
  var compareValues = kotlin_kotlin.$_$.t9;
  var sortedWith = kotlin_kotlin.$_$.g9;
  var charSequenceGet = kotlin_kotlin.$_$.ua;
  var CharSequence = kotlin_kotlin.$_$.vf;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var coerceIn = kotlin_kotlin.$_$.bd;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.n;
  var _Constraints___get_minHeight__impl__ev4bgx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d1;
  var _Constraints___get_minWidth__impl__hi9lfi = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e1;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c1;
  var _Constraints___get_maxHeight__impl__dt3e8z = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b1;
  var coerceAtLeast = kotlin_kotlin.$_$.wc;
  var _Constraints___get_hasBoundedHeight__impl__bsh4rw = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a;
  var get_lastIndex = kotlin_kotlin.$_$.g8;
  var addAll = kotlin_kotlin.$_$.g6;
  var plus = kotlin_kotlin.$_$.v8;
  var last = kotlin_kotlin.$_$.k8;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.t1;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p1;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.f;
  var BlendMode = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.w4;
  var Path = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.b;
  var getNumberHashCode = kotlin_kotlin.$_$.gb;
  var compareTo = kotlin_kotlin.$_$.ya;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$_$.i;
  var lazy = kotlin_kotlin.$_$.lh;
  var KProperty1 = kotlin_kotlin.$_$.kd;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ib;
  var numberToInt = kotlin_kotlin.$_$.ec;
  var interfaceMeta = kotlin_kotlin.$_$.mb;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y1;
  var _TextUnit___get_value__impl__hpbx0k = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s1;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var TextUnit = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o;
  var TextUnit__hashCode_impl_qsmeov = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n1;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.i1;
  var get_isUnspecified = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r;
  var objectMeta = kotlin_kotlin.$_$.hc;
  var Color__hashCode_impl_vjyivj = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.b1;
  var _Color___get_value__impl__1pls5m = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c1;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.w1;
  var Fill_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.q1;
  var get_sp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k1;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l1;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n;
  var IntSize__hashCode_impl_gm9mta = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j1;
  var getBooleanHashCode = kotlin_kotlin.$_$.eb;
  var Constraints__hashCode_impl_ij7484 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a1;
  var Constraints_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b;
  var Long = kotlin_kotlin.$_$.gg;
  var toLong = kotlin_kotlin.$_$.lc;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.nh;
  var fillArrayVal = kotlin_kotlin.$_$.cb;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.s;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.z;
  var NullPointerException_init_$Create$ = kotlin_kotlin.$_$.i2;
  var ensureNotNull = kotlin_kotlin.$_$.fh;
  var first = kotlin_kotlin.$_$.t7;
  var Map = kotlin_kotlin.$_$.z5;
  var isInterface = kotlin_kotlin.$_$.vb;
  var MutableMap = kotlin_kotlin.$_$.d6;
  var MutableCollection = kotlin_kotlin.$_$.a6;
  var println = kotlin_kotlin.$_$.na;
  var copyOf = kotlin_kotlin.$_$.f7;
  var copyOf_0 = kotlin_kotlin.$_$.e7;
  var ConcurrentModificationException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var arrayCopy = kotlin_kotlin.$_$.h6;
  var ClassCastException = kotlin_kotlin.$_$.xf;
  var NullPointerException = kotlin_kotlin.$_$.jg;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.h1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.t2;
  var List = kotlin_kotlin.$_$.x5;
  var Exception = kotlin_kotlin.$_$.dg;
  var toString_0 = kotlin_kotlin.$_$.yh;
  var State = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var IllegalStateException = kotlin_kotlin.$_$.fg;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.b2;
  var captureStack = kotlin_kotlin.$_$.ra;
  var CoroutineImpl = kotlin_kotlin.$_$.ja;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.v9;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var get_indices = kotlin_kotlin.$_$.b8;
  var yield_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var get_isActive = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q1;
  var withTimeoutOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.c2;
  var CancellationException = kotlin_kotlin.$_$.u9;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.y9;
  var Element = kotlin_kotlin.$_$.ha;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.s4;
  var Key_instance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c1;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t1;
  var to = kotlin_kotlin.$_$.zh;
  var mutableListOf = kotlin_kotlin.$_$.r8;
  var Companion_instance = kotlin_kotlin.$_$.f5;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.b3;
  var createFailure = kotlin_kotlin.$_$.eh;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.f3;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.d3;
  var KMutableProperty1 = kotlin_kotlin.$_$.id;
  var listOf = kotlin_kotlin.$_$.n8;
  var Comparable = kotlin_kotlin.$_$.yf;
  var Collection = kotlin_kotlin.$_$.s5;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.x4;
  var Enum = kotlin_kotlin.$_$.bg;
  var fastJoinToString = kotlin_org_jetbrains_compose_ui_ui_util.$_$.a;
  var ShaderBrush = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n;
  var SolidColor = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o;
  var isNaN_0 = kotlin_kotlin.$_$.jh;
  var _Color___get_alpha__impl__wcfyv1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.a1;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m1;
  var toList = kotlin_kotlin.$_$.m9;
  var CharDirection_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.n7;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.r6;
  var setOf = kotlin_kotlin.$_$.c9;
  var get_hostOs = kotlin_org_jetbrains_skiko_skiko.$_$.x8;
  var Companion_getInstance_3 = kotlin_org_jetbrains_skiko_skiko.$_$.z7;
  var Companion_getInstance_4 = kotlin_org_jetbrains_skiko_skiko.$_$.p7;
  var Companion_instance_0 = kotlin_org_jetbrains_skiko_skiko.$_$.t7;
  var FontSlant_UPRIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.f2;
  var FontSlant_ITALIC_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.e2;
  var FontStyle_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.e7;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var currentNanoTime = kotlin_org_jetbrains_skiko_skiko.$_$.v8;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.q;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.x;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.d5;
  var isLowSurrogate = kotlin_kotlin.$_$.ie;
  var isHighSurrogate = kotlin_kotlin.$_$.he;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.z2;
  var sequence = kotlin_kotlin.$_$.sd;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.v2;
  var SequenceScope = kotlin_kotlin.$_$.md;
  var numberRangeToNumber = kotlin_kotlin.$_$.cc;
  var asList = kotlin_kotlin.$_$.j6;
  var binarySearch = kotlin_kotlin.$_$.o6;
  var get_lastIndex_0 = kotlin_kotlin.$_$.h8;
  var coerceAtMost = kotlin_kotlin.$_$.yc;
  var charSequenceLength = kotlin_kotlin.$_$.va;
  var RectHeightMode_STRUT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.x;
  var RectWidthMode_TIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.y;
  var firstOrNull = kotlin_kotlin.$_$.r7;
  var lastOrNull = kotlin_kotlin.$_$.j8;
  var toComposeRect = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.v;
  var RectHeightMode_MAX_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.w;
  var asSkiaPath = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s;
  var getOrNull = kotlin_kotlin.$_$.w7;
  var isWhitespace = kotlin_kotlin.$_$.le;
  var get_nativeCanvas = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.t;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f;
  var LineMetrics = kotlin_org_jetbrains_skiko_skiko.$_$.f8;
  var getObjectHashCode = kotlin_kotlin.$_$.hb;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.q2;
  var _Size___get_packedValue__impl__7rlt1o = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.w;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.a1;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.x;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.v;
  var listOf_0 = kotlin_kotlin.$_$.m8;
  var FontCollection_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.b7;
  var TypefaceFontProvider = kotlin_org_jetbrains_skiko_skiko.$_$.l8;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.u;
  var Companion_getInstance_7 = kotlin_org_jetbrains_skiko_skiko.$_$.r7;
  var copyToArray = kotlin_kotlin.$_$.g7;
  var first_0 = kotlin_kotlin.$_$.u7;
  var mapOf = kotlin_kotlin.$_$.p8;
  var KProperty0 = kotlin_kotlin.$_$.jd;
  var lazy_0 = kotlin_kotlin.$_$.mh;
  var Companion_getInstance_8 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r1;
  var Paint_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.f7;
  var asComposePaint = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r;
  var Companion_getInstance_9 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.u1;
  var TextStyle_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.c7;
  var toArgb = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.u;
  var Companion_getInstance_10 = kotlin_org_jetbrains_skiko_skiko.$_$.q7;
  var Size_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g;
  var Size__hashCode_impl_2h1qpd = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.u;
  var BlendMode__hashCode_impl_93ceri = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.y;
  var Companion_getInstance_11 = kotlin_org_jetbrains_skiko_skiko.$_$.s7;
  var DecorationLineStyle_SOLID_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.k;
  var DecorationStyle = kotlin_org_jetbrains_skiko_skiko.$_$.e8;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.s;
  var _Offset___get_y__impl__8bzhra = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.t;
  var Shadow = kotlin_org_jetbrains_skiko_skiko.$_$.j8;
  var _TextUnit___get_isSp__impl__8c3r6q = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p1;
  var _TextUnit___get_isEm__impl__esrmtl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o1;
  var DecorationLineStyle_WAVY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.l;
  var DecorationLineStyle_DASHED_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h;
  var DecorationLineStyle_DOTTED_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.i;
  var DecorationLineStyle_DOUBLE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.j;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.uh;
  var sortWith = kotlin_kotlin.$_$.e9;
  var asReversed = kotlin_kotlin.$_$.k6;
  var ParagraphStyle = kotlin_org_jetbrains_skiko_skiko.$_$.h8;
  var HeightMode_DISABLE_ALL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.p;
  var TextIndent = kotlin_org_jetbrains_skiko_skiko.$_$.k8;
  var Font_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.d7;
  var ParagraphBuilder = kotlin_org_jetbrains_skiko_skiko.$_$.g8;
  var charSequenceSubSequence = kotlin_kotlin.$_$.wa;
  var BaselineMode_ALPHABETIC_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g;
  var PlaceholderStyle = kotlin_org_jetbrains_skiko_skiko.$_$.i8;
  var checkArithmetic = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p;
  var _TextUnit___get_rawType__impl__tu8yq5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r1;
  var pack = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t;
  var PlaceholderAlignment_MIDDLE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.u;
  var PlaceholderAlignment_BOTTOM_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.t;
  var PlaceholderAlignment_TOP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.v;
  var PlaceholderAlignment_ABOVE_BASELINE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.s;
  var Alignment_START_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.f;
  var Alignment_END_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.b;
  var Alignment_JUSTIFY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.c;
  var Alignment_CENTER_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.a;
  var Alignment_RIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.e;
  var Alignment_LEFT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.d;
  var HeightMode_ALL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.o;
  var HeightMode_DISABLE_LAST_DESCENT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.r;
  var HeightMode_DISABLE_FIRST_ASCENT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.q;
  var Direction_LTR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.m;
  var Direction_RTL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.n;
  var firstOrNull_0 = kotlin_kotlin.$_$.q7;
  var coerceIn_0 = kotlin_kotlin.$_$.ad;
  var Stroke = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Range, 'Range', classMeta);
  setMetadataFor(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', classMeta);
  setMetadataFor(AnnotatedString, 'AnnotatedString', classMeta, VOID, [CharSequence]);
  setMetadataFor(MultiParagraph, 'MultiParagraph', classMeta);
  setMetadataFor(ParagraphInfo, 'ParagraphInfo', classMeta);
  function get_hasStaleResolvedFonts() {
    return false;
  }
  setMetadataFor(ParagraphIntrinsics, 'ParagraphIntrinsics', interfaceMeta);
  setMetadataFor(MultiParagraphIntrinsics, 'MultiParagraphIntrinsics', classMeta, VOID, [ParagraphIntrinsics]);
  setMetadataFor(ParagraphIntrinsicInfo, 'ParagraphIntrinsicInfo', classMeta);
  setMetadataFor(ParagraphStyle_0, 'ParagraphStyle', classMeta);
  setMetadataFor(Placeholder, 'Placeholder', classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(SpanStyle, 'SpanStyle', classMeta);
  setMetadataFor(SynchronizedObject, 'SynchronizedObject', classMeta, VOID, VOID, SynchronizedObject);
  setMetadataFor(TextLayoutResult, 'TextLayoutResult', classMeta);
  setMetadataFor(TextLayoutInput, 'TextLayoutInput', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(TextRange, 'TextRange', classMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(TextStyle, 'TextStyle', classMeta);
  setMetadataFor(LruCache, 'LruCache', classMeta);
  setMetadataFor(SimpleArrayMap, 'SimpleArrayMap', classMeta, VOID, VOID, SimpleArrayMap_init_$Create$);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  function get_loadingStrategy() {
    return Companion_getInstance_19().g45_1;
  }
  setMetadataFor(Font, 'Font', interfaceMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(FontFamily, 'FontFamily', classMeta);
  setMetadataFor(SystemFontFamily, 'SystemFontFamily', classMeta, FontFamily);
  setMetadataFor(DefaultFontFamily, 'DefaultFontFamily', classMeta, SystemFontFamily);
  setMetadataFor(GenericFontFamily, 'GenericFontFamily', classMeta, SystemFontFamily);
  setMetadataFor(FileBasedFontFamily, 'FileBasedFontFamily', classMeta, FontFamily);
  setMetadataFor(FontListFontFamily, 'FontListFontFamily', classMeta, FileBasedFontFamily, [FileBasedFontFamily, List]);
  setMetadataFor(LoadedFontFamily, 'LoadedFontFamily', classMeta, FontFamily);
  setMetadataFor(TypefaceRequestCache, 'TypefaceRequestCache', classMeta, VOID, VOID, TypefaceRequestCache);
  setMetadataFor(TypefaceRequest, 'TypefaceRequest', classMeta);
  setMetadataFor(Immutable, 'Immutable', classMeta, VOID, [State]);
  setMetadataFor(Async, 'Async', classMeta, VOID, [State]);
  setMetadataFor(FontLoadFailedException, 'FontLoadFailedException', classMeta, IllegalStateException);
  setMetadataFor(FontFamilyResolverImpl, 'FontFamilyResolverImpl', classMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  function interceptFontFamily(fontFamily) {
    return fontFamily;
  }
  function interceptFontWeight(fontWeight) {
    return fontWeight;
  }
  function interceptFontStyle(fontStyle) {
    return fontStyle;
  }
  function interceptFontSynthesis(fontSynthesis) {
    return fontSynthesis;
  }
  setMetadataFor(PlatformResolveInterceptor, 'PlatformResolveInterceptor', interfaceMeta);
  setMetadataFor(PlatformResolveInterceptor$Companion$Default$1, VOID, classMeta, VOID, [PlatformResolveInterceptor]);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(AsyncTypefaceResult, 'AsyncTypefaceResult', classMeta);
  setMetadataFor(Key, 'Key', classMeta);
  setMetadataFor($runCachedCOROUTINE$1, '$runCachedCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(AsyncTypefaceCache, 'AsyncTypefaceCache', classMeta, VOID, VOID, AsyncTypefaceCache, VOID, VOID, [4]);
  setMetadataFor(AsyncFontListLoader$load$slambda, 'AsyncFontListLoader$load$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(AsyncFontListLoader$loadWithTimeoutOrNull$slambda, 'AsyncFontListLoader$loadWithTimeoutOrNull$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($loadCOROUTINE$2, '$loadCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor($loadWithTimeoutOrNullCOROUTINE$3, '$loadWithTimeoutOrNullCOROUTINE$3', classMeta, CoroutineImpl);
  setMetadataFor(AsyncFontListLoader, 'AsyncFontListLoader', classMeta, VOID, [State], VOID, VOID, VOID, [0]);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, Element]);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(FontListFontFamilyTypefaceAdapter$resolve$slambda, 'FontListFontFamilyTypefaceAdapter$resolve$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(FontListFontFamilyTypefaceAdapter, 'FontListFontFamilyTypefaceAdapter', classMeta, VOID, VOID, FontListFontFamilyTypefaceAdapter, VOID, VOID, [2]);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(FontLoadingStrategy, 'FontLoadingStrategy', classMeta);
  setMetadataFor(FontMatcher, 'FontMatcher', classMeta, VOID, VOID, FontMatcher);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(FontStyle, 'FontStyle', classMeta);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(FontSynthesis, 'FontSynthesis', classMeta);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(FontWeight, 'FontWeight', classMeta, VOID, [Comparable]);
  setMetadataFor(TextInputService, 'TextInputService', classMeta);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor(Locale, 'Locale', classMeta);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor(LocaleList, 'LocaleList', classMeta, VOID, [Collection]);
  setMetadataFor(Companion_12, 'Companion', objectMeta);
  setMetadataFor(BaselineShift, 'BaselineShift', classMeta);
  setMetadataFor(Companion_13, 'Companion', objectMeta);
  setMetadataFor(Hyphens, 'Hyphens', classMeta);
  setMetadataFor(Companion_14, 'Companion', objectMeta);
  setMetadataFor(Companion_15, 'Companion', objectMeta);
  setMetadataFor(Companion_16, 'Companion', objectMeta);
  setMetadataFor(Trim, 'Trim', classMeta);
  setMetadataFor(Alignment, 'Alignment', classMeta);
  setMetadataFor(LineHeightStyle, 'LineHeightStyle', classMeta);
  setMetadataFor(ResolvedTextDirection, 'ResolvedTextDirection', classMeta, Enum);
  setMetadataFor(Companion_17, 'Companion', objectMeta);
  setMetadataFor(TextAlign, 'TextAlign', classMeta);
  setMetadataFor(Companion_18, 'Companion', objectMeta);
  setMetadataFor(TextDecoration, 'TextDecoration', classMeta);
  setMetadataFor(Companion_19, 'Companion', objectMeta);
  setMetadataFor(TextDirection, 'TextDirection', classMeta);
  function merge(other) {
    var tmp;
    var tmp_0;
    if (other instanceof BrushStyle) {
      tmp_0 = this instanceof BrushStyle;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp_1 = other.p3g();
      tmp = new BrushStyle(other.b4c_1, takeOrElse_0(tmp_1, TextForegroundStyle$merge$lambda(this)));
    } else {
      var tmp_2;
      if (other instanceof BrushStyle) {
        tmp_2 = !(this instanceof BrushStyle);
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp = other;
      } else {
        var tmp_3;
        if (!(other instanceof BrushStyle)) {
          tmp_3 = this instanceof BrushStyle;
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          tmp = this;
        } else {
          tmp = other.q40(TextForegroundStyle$merge$lambda_0(this));
        }
      }
    }
    return tmp;
  }
  function takeOrElse(other) {
    return !equals(this, Unspecified_instance) ? this : other();
  }
  setMetadataFor(TextForegroundStyle, 'TextForegroundStyle', interfaceMeta);
  setMetadataFor(Unspecified, 'Unspecified', objectMeta, VOID, [TextForegroundStyle]);
  setMetadataFor(Companion_20, 'Companion', objectMeta);
  setMetadataFor(BrushStyle, 'BrushStyle', classMeta, VOID, [TextForegroundStyle]);
  setMetadataFor(ColorStyle, 'ColorStyle', classMeta, VOID, [TextForegroundStyle]);
  setMetadataFor(Companion_21, 'Companion', objectMeta);
  setMetadataFor(TextGeometricTransform, 'TextGeometricTransform', classMeta, VOID, VOID, TextGeometricTransform);
  setMetadataFor(Companion_22, 'Companion', objectMeta);
  setMetadataFor(TextIndent_0, 'TextIndent', classMeta, VOID, VOID, TextIndent_0);
  setMetadataFor(Companion_23, 'Companion', objectMeta);
  setMetadataFor(TextOverflow, 'TextOverflow', classMeta);
  setMetadataFor(NoCache, 'NoCache', classMeta, VOID, VOID, NoCache);
  setMetadataFor(JsLocale, 'JsLocale', classMeta);
  setMetadataFor(createPlatformLocaleDelegate$1, VOID, classMeta);
  setMetadataFor(PlatformFont, 'PlatformFont', classMeta, VOID, [Font]);
  setMetadataFor(AtomicReference, 'AtomicReference', classMeta);
  setMetadataFor(ExpireAfterAccessCache, 'ExpireAfterAccessCache', classMeta);
  setMetadataFor(Companion_24, 'Companion', objectMeta);
  setMetadataFor(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj, '<get-codePointsOutsideDirectionalIsolate>$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(_get_codePoints_$slambda_43x8dt, '<get-codePoints>$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  function paint$default(canvas, color, shadow, textDecoration, drawStyle, blendMode, $super) {
    color = color === VOID ? Companion_getInstance().i3l_1 : color;
    shadow = shadow === VOID ? null : shadow;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().m3t_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.j3x(canvas, color, shadow, textDecoration, drawStyle, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.j3x.call(this, canvas, new Color(color), shadow, textDecoration, drawStyle, new BlendMode(blendMode));
    }
    return tmp;
  }
  function paint$default_0(canvas, brush, alpha, shadow, textDecoration, drawStyle, blendMode, $super) {
    var tmp;
    if (alpha === VOID) {
      tmp = NaN;
    } else {
      tmp = alpha;
    }
    alpha = tmp;
    shadow = shadow === VOID ? null : shadow;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().m3t_1 : blendMode;
    var tmp_0;
    if ($super === VOID) {
      this.l3x(canvas, brush, alpha, shadow, textDecoration, drawStyle, blendMode);
      tmp_0 = Unit_instance;
    } else {
      tmp_0 = $super.l3x.call(this, canvas, brush, alpha, shadow, textDecoration, drawStyle, new BlendMode(blendMode));
    }
    return tmp_0;
  }
  setMetadataFor(Paragraph_1, 'Paragraph', interfaceMeta);
  setMetadataFor(SkiaParagraph, 'SkiaParagraph', classMeta, VOID, [Paragraph_1]);
  setMetadataFor(Companion_25, 'Companion', objectMeta);
  setMetadataFor(TextDecorationLineStyle, 'TextDecorationLineStyle', classMeta);
  setMetadataFor(PlatformTextStyle, 'PlatformTextStyle', classMeta);
  setMetadataFor(PlatformFontFamilyTypefaceAdapter, 'PlatformFontFamilyTypefaceAdapter', classMeta, VOID, VOID, PlatformFontFamilyTypefaceAdapter);
  setMetadataFor(SkiaFontLoader, 'SkiaFontLoader', classMeta, VOID, VOID, SkiaFontLoader, VOID, VOID, [1]);
  setMetadataFor(ParagraphLayouter, 'ParagraphLayouter', classMeta);
  setMetadataFor(Platform, 'Platform', classMeta, Enum);
  setMetadataFor(FontLoadResult, 'FontLoadResult', classMeta);
  setMetadataFor(LoadedFont, 'LoadedFont', classMeta, PlatformFont);
  setMetadataFor(FontLoader, 'FontLoader', classMeta, VOID, VOID, FontLoader);
  setMetadataFor(FontCache, 'FontCache', classMeta, VOID, VOID, FontCache);
  setMetadataFor(SystemFont, 'SystemFont', classMeta, PlatformFont);
  setMetadataFor(SkiaBackedTypeface, 'SkiaBackedTypeface', classMeta);
  setMetadataFor(ComputedStyle, 'ComputedStyle', classMeta);
  setMetadataFor(Op, 'Op', classMeta);
  setMetadataFor(StyleAdd, 'StyleAdd', classMeta, Op);
  setMetadataFor(PutPlaceholder, 'PutPlaceholder', classMeta, Op);
  setMetadataFor(EndPlaceholder, 'EndPlaceholder', classMeta, Op);
  setMetadataFor(Cut, 'Cut', classMeta);
  setMetadataFor(StyleAdd_0, 'StyleAdd', classMeta, Cut);
  setMetadataFor(StyleRemove, 'StyleRemove', classMeta, Cut);
  setMetadataFor(PutPlaceholder_0, 'PutPlaceholder', classMeta, Cut);
  setMetadataFor(EndPlaceholder_0, 'EndPlaceholder', classMeta, Cut);
  setMetadataFor(sam$kotlin_Comparator$0_0, 'sam$kotlin_Comparator$0', classMeta);
  setMetadataFor(ParagraphBuilder_0, 'ParagraphBuilder', classMeta);
  setMetadataFor(SkiaParagraphIntrinsics, 'SkiaParagraphIntrinsics', classMeta, VOID, [ParagraphIntrinsics]);
  setMetadataFor(Companion_26, 'Companion', objectMeta);
  setMetadataFor(LineBreak, 'LineBreak', classMeta);
  setMetadataFor(Companion_27, 'Companion', objectMeta);
  setMetadataFor(TextMotion, 'TextMotion', classMeta);
  //endregion
  var EmptyAnnotatedString;
  function Range_init_$Init$(item, start, end, $this) {
    Range.call($this, item, start, end, '');
    return $this;
  }
  function Range_init_$Create$(item, start, end) {
    return Range_init_$Init$(item, start, end, objectCreate(protoOf(Range)));
  }
  function AnnotatedString_init_$Init$(text, spanStyles, paragraphStyles, $this) {
    var tmp;
    if (spanStyles === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = spanStyles;
    }
    spanStyles = tmp;
    var tmp_0;
    if (paragraphStyles === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp_0 = emptyList();
    } else {
      tmp_0 = paragraphStyles;
    }
    paragraphStyles = tmp_0;
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp_1;
    if (spanStyles.u()) {
      // Inline function 'androidx.compose.ui.text.AnnotatedString.<init>.<anonymous>' call
      tmp_1 = null;
    } else {
      tmp_1 = spanStyles;
    }
    var tmp_2 = tmp_1;
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp_3;
    if (paragraphStyles.u()) {
      // Inline function 'androidx.compose.ui.text.AnnotatedString.<init>.<anonymous>' call
      tmp_3 = null;
    } else {
      tmp_3 = paragraphStyles;
    }
    var tmp$ret$5 = tmp_3;
    AnnotatedString.call($this, text, tmp_2, tmp$ret$5, null);
    return $this;
  }
  function AnnotatedString_init_$Create$(text, spanStyles, paragraphStyles) {
    return AnnotatedString_init_$Init$(text, spanStyles, paragraphStyles, objectCreate(protoOf(AnnotatedString)));
  }
  function Range(item, start, end, tag) {
    this.i3v_1 = item;
    this.j3v_1 = start;
    this.k3v_1 = end;
    this.l3v_1 = tag;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.j3v_1 <= this.k3v_1)) {
      // Inline function 'androidx.compose.ui.text.Range.<anonymous>' call
      var message = 'Reversed range is not supported';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(Range).se = function () {
    return this.i3v_1;
  };
  protoOf(Range).te = function () {
    return this.j3v_1;
  };
  protoOf(Range).s3t = function () {
    return this.k3v_1;
  };
  protoOf(Range).toString = function () {
    return 'Range(item=' + this.i3v_1 + ', start=' + this.j3v_1 + ', end=' + this.k3v_1 + ', tag=' + this.l3v_1 + ')';
  };
  protoOf(Range).hashCode = function () {
    var result = this.i3v_1 == null ? 0 : hashCode(this.i3v_1);
    result = imul(result, 31) + this.j3v_1 | 0;
    result = imul(result, 31) + this.k3v_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.l3v_1) | 0;
    return result;
  };
  protoOf(Range).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Range))
      return false;
    var tmp0_other_with_cast = other instanceof Range ? other : THROW_CCE();
    if (!equals(this.i3v_1, tmp0_other_with_cast.i3v_1))
      return false;
    if (!(this.j3v_1 === tmp0_other_with_cast.j3v_1))
      return false;
    if (!(this.k3v_1 === tmp0_other_with_cast.k3v_1))
      return false;
    if (!(this.l3v_1 === tmp0_other_with_cast.l3v_1))
      return false;
    return true;
  };
  function sam$kotlin_Comparator$0(function_0) {
    this.m3v_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).j9 = function (a, b) {
    return this.m3v_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.j9(a, b);
  };
  function AnnotatedString$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>' call
    var tmp = a.j3v_1;
    // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>' call
    var tmp$ret$1 = b.j3v_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function AnnotatedString(text, spanStylesOrNull, paragraphStylesOrNull, annotations) {
    spanStylesOrNull = spanStylesOrNull === VOID ? null : spanStylesOrNull;
    paragraphStylesOrNull = paragraphStylesOrNull === VOID ? null : paragraphStylesOrNull;
    annotations = annotations === VOID ? null : annotations;
    this.n3v_1 = text;
    this.o3v_1 = spanStylesOrNull;
    this.p3v_1 = paragraphStylesOrNull;
    this.q3v_1 = annotations;
    var lastStyleEnd = -1;
    var tmp0_safe_receiver = this.p3v_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.sortedBy' call
      // Inline function 'kotlin.comparisons.compareBy' call
      var tmp_0 = AnnotatedString$lambda;
      var tmp$ret$0 = new sam$kotlin_Comparator$0(tmp_0);
      tmp = sortedWith(tmp0_safe_receiver, tmp$ret$0);
    }
    var tmp1_safe_receiver = tmp;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp1_safe_receiver.m() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp1_safe_receiver.n(index);
          // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>' call
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          if (!(item.j3v_1 >= lastStyleEnd)) {
            // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>.<anonymous>' call
            var message = 'ParagraphStyle should not overlap';
            throw IllegalArgumentException_init_$Create$(toString(message));
          }
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          if (!(item.k3v_1 <= this.n3v_1.length)) {
            // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>.<anonymous>' call
            var message_0 = 'ParagraphStyle range [' + item.j3v_1 + ', ' + item.k3v_1 + ')' + ' is out of boundary';
            throw IllegalArgumentException_init_$Create$(toString(message_0));
          }
          lastStyleEnd = item.k3v_1;
        }
         while (inductionVariable <= last);
    }
  }
  protoOf(AnnotatedString).r3v = function () {
    var tmp0_elvis_lhs = this.o3v_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(AnnotatedString).a = function () {
    return this.n3v_1.length;
  };
  protoOf(AnnotatedString).b = function (index) {
    return charSequenceGet(this.n3v_1, index);
  };
  protoOf(AnnotatedString).c = function (startIndex, endIndex) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(startIndex <= endIndex)) {
      // Inline function 'androidx.compose.ui.text.AnnotatedString.subSequence.<anonymous>' call
      var message = 'start (' + startIndex + ') should be less or equal to end (' + endIndex + ')';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (startIndex === 0 ? endIndex === this.n3v_1.length : false)
      return this;
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    var text = this.n3v_1.substring(startIndex, endIndex);
    return new AnnotatedString(text, filterRanges(this.o3v_1, startIndex, endIndex), filterRanges(this.p3v_1, startIndex, endIndex), filterRanges(this.q3v_1, startIndex, endIndex));
  };
  protoOf(AnnotatedString).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AnnotatedString))
      return false;
    if (!(this.n3v_1 === other.n3v_1))
      return false;
    if (!equals(this.o3v_1, other.o3v_1))
      return false;
    if (!equals(this.p3v_1, other.p3v_1))
      return false;
    if (!equals(this.q3v_1, other.q3v_1))
      return false;
    return true;
  };
  protoOf(AnnotatedString).hashCode = function () {
    var result = getStringHashCode(this.n3v_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.o3v_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.p3v_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : hashCode(tmp2_safe_receiver);
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_1 = imul(31, result);
    var tmp4_safe_receiver = this.q3v_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : hashCode(tmp4_safe_receiver);
    result = tmp_1 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    return result;
  };
  protoOf(AnnotatedString).toString = function () {
    return this.n3v_1;
  };
  function filterRanges(ranges, start, end) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(start <= end)) {
      // Inline function 'androidx.compose.ui.text.filterRanges.<anonymous>' call
      var message = 'start (' + start + ') should be less than or equal to end (' + end + ')';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    if (ranges == null) {
      return null;
    } else {
      tmp = ranges;
    }
    var nonNullRange = tmp;
    // Inline function 'kotlin.collections.ifEmpty' call
    // Inline function 'androidx.compose.ui.util.fastMap' call
    // Inline function 'androidx.compose.ui.util.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(nonNullRange.m());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = nonNullRange.m() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = nonNullRange.n(index);
        // Inline function 'androidx.compose.ui.util.fastFilter.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.filterRanges.<anonymous>' call
        if (intersect(start, end, item.j3v_1, item.k3v_1)) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.a1(item);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$(target.m());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = target.m() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = target.n(index_0);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.filterRanges.<anonymous>' call
        // Inline function 'kotlin.comparisons.maxOf' call
        var b = item_0.j3v_1;
        var tmp_0 = Math.max(start, b) - start | 0;
        // Inline function 'kotlin.comparisons.minOf' call
        var b_0 = item_0.k3v_1;
        var tmp$ret$4 = Math.min(end, b_0);
        var element = new Range(item_0.i3v_1, tmp_0, tmp$ret$4 - start | 0, item_0.l3v_1);
        target_0.a1(element);
      }
       while (inductionVariable_0 <= last_0);
    var tmp_1;
    if (target_0.u()) {
      // Inline function 'androidx.compose.ui.text.filterRanges.<anonymous>' call
      tmp_1 = null;
    } else {
      tmp_1 = target_0;
    }
    return tmp_1;
  }
  function intersect(lStart, lEnd, rStart, rEnd) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    var tmp;
    var tmp_0;
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp_1 = Math.max(lStart, rStart);
    // Inline function 'kotlin.comparisons.minOf' call
    if (tmp_1 < Math.min(lEnd, rEnd)) {
      tmp_0 = true;
    } else {
      tmp_0 = contains(lStart, lEnd, rStart, rEnd);
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = contains(rStart, rEnd, lStart, lEnd);
    }
    return tmp;
  }
  function getLocalSpanStyles(_this__u8e3s4, start, end) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    if (start === end)
      return null;
    var tmp0_elvis_lhs = _this__u8e3s4.o3v_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var spanStyles = tmp;
    if (start === 0 ? end >= _this__u8e3s4.n3v_1.length : false) {
      return spanStyles;
    }
    // Inline function 'androidx.compose.ui.util.fastMap' call
    // Inline function 'androidx.compose.ui.util.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(spanStyles.m());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = spanStyles.m() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = spanStyles.n(index);
        // Inline function 'androidx.compose.ui.util.fastFilter.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.getLocalSpanStyles.<anonymous>' call
        if (intersect(start, end, item.j3v_1, item.k3v_1)) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.a1(item);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$(target.m());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = target.m() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = target.n(index_0);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.getLocalSpanStyles.<anonymous>' call
        var element = Range_init_$Create$(item_0.i3v_1, coerceIn(item_0.j3v_1, start, end) - start | 0, coerceIn(item_0.k3v_1, start, end) - start | 0);
        target_0.a1(element);
      }
       while (inductionVariable_0 <= last_0);
    return target_0;
  }
  function contains(baseStart, baseEnd, targetStart, targetEnd) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    return (baseStart <= targetStart ? targetEnd <= baseEnd : false) ? !(baseEnd === targetEnd) ? true : targetStart === targetEnd === (baseStart === baseEnd) : false;
  }
  function substringWithoutParagraphStyles(_this__u8e3s4, start, end) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    var tmp;
    if (!(start === end)) {
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = _this__u8e3s4.n3v_1.substring(start, end);
    } else {
      tmp = '';
    }
    return new AnnotatedString(tmp, getLocalSpanStyles(_this__u8e3s4, start, end));
  }
  function normalizedParagraphStyles(_this__u8e3s4, defaultParagraphStyle) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    var length = _this__u8e3s4.n3v_1.length;
    var tmp0_elvis_lhs = _this__u8e3s4.p3v_1;
    var paragraphStyles = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
    var lastOffset = 0;
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$_0();
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = paragraphStyles.m() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = paragraphStyles.n(index);
        // Inline function 'androidx.compose.ui.text.normalizedParagraphStyles.<anonymous>' call
        var style = item.se();
        var start = item.te();
        var end = item.s3t();
        if (!(start === lastOffset)) {
          result.a1(Range_init_$Create$(defaultParagraphStyle, lastOffset, start));
        }
        result.a1(Range_init_$Create$(defaultParagraphStyle.b3w(style), start, end));
        lastOffset = end;
      }
       while (inductionVariable <= last);
    if (!(lastOffset === length)) {
      result.a1(Range_init_$Create$(defaultParagraphStyle, lastOffset, length));
    }
    if (result.u()) {
      result.a1(Range_init_$Create$(defaultParagraphStyle, 0, 0));
    }
    return result;
  }
  var properties_initialized_AnnotatedString_kt_um06op;
  function _init_properties_AnnotatedString_kt__ww2pyh() {
    if (!properties_initialized_AnnotatedString_kt_um06op) {
      properties_initialized_AnnotatedString_kt_um06op = true;
      EmptyAnnotatedString = AnnotatedString_init_$Create$('');
    }
  }
  function _get_annotatedString__kqljtk($this) {
    return $this.h3w_1.c3w_1;
  }
  function requireIndexInRangeInclusiveEnd($this, offset) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= offset ? offset <= _get_annotatedString__kqljtk($this).n3v_1.length : false)) {
      // Inline function 'androidx.compose.ui.text.MultiParagraph.requireIndexInRangeInclusiveEnd.<anonymous>' call
      var message = 'offset(' + offset + ') is out of bounds [0, ' + _get_annotatedString__kqljtk($this).a() + ']';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function requireLineIndexInRange($this, lineIndex) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= lineIndex ? lineIndex < $this.m3w_1 : false)) {
      // Inline function 'androidx.compose.ui.text.MultiParagraph.requireLineIndexInRange.<anonymous>' call
      var message = 'lineIndex(' + lineIndex + ') is out of bounds [0, ' + $this.m3w_1 + ')';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function MultiParagraph$getPathForRange$lambda($path, $start, $end) {
    return function (paragraphInfo) {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $path.q3n(paragraphInfo.y3w(paragraphInfo.p3w_1.x3w(paragraphInfo.w3w($start), paragraphInfo.w3w($end))));
      return Unit_instance;
    };
  }
  function MultiParagraph(intrinsics, constraints, maxLines, ellipsis) {
    maxLines = maxLines === VOID ? get_DefaultMaxLines() : maxLines;
    ellipsis = ellipsis === VOID ? false : ellipsis;
    this.h3w_1 = intrinsics;
    this.i3w_1 = maxLines;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(_Constraints___get_minWidth__impl__hi9lfi(constraints) === 0 ? _Constraints___get_minHeight__impl__ev4bgx(constraints) === 0 : false)) {
      // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>' call
      var message = 'Setting Constraints.minWidth and Constraints.minHeight is not supported, these should be the default zero values instead.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var currentHeight = 0.0;
    var currentLineCount = 0;
    var didExceedMaxLines = false;
    // Inline function 'kotlin.collections.mutableListOf' call
    var paragraphInfoList = ArrayList_init_$Create$_0();
    var infoList = this.h3w_1.g3w_1;
    var inductionVariable = 0;
    var last = infoList.m() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var paragraphInfo = infoList.n(index);
        var tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
        var tmp_0;
        if (_Constraints___get_hasBoundedHeight__impl__bsh4rw(constraints)) {
          tmp_0 = coerceAtLeast(_Constraints___get_maxHeight__impl__dt3e8z(constraints) - ceilToInt(currentHeight) | 0, 0);
        } else {
          tmp_0 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
        }
        var paragraph = Paragraph(paragraphInfo.z3w_1, Constraints(VOID, tmp, VOID, tmp_0), this.i3w_1 - currentLineCount | 0, ellipsis);
        var paragraphTop = currentHeight;
        var paragraphBottom = currentHeight + paragraph.f2w();
        currentHeight = paragraphBottom;
        var startLineIndex = currentLineCount;
        var endLineIndex = startLineIndex + paragraph.c3x() | 0;
        currentLineCount = endLineIndex;
        paragraphInfoList.a1(new ParagraphInfo(paragraph, paragraphInfo.a3x_1, paragraphInfo.b3x_1, startLineIndex, endLineIndex, paragraphTop, paragraphBottom));
        if (paragraph.d3x() ? true : endLineIndex === this.i3w_1 ? !(index === get_lastIndex(this.h3w_1.g3w_1)) : false) {
          didExceedMaxLines = true;
          break $l$loop;
        }
      }
       while (inductionVariable <= last);
    this.l3w_1 = currentHeight;
    this.m3w_1 = currentLineCount;
    this.j3w_1 = didExceedMaxLines;
    this.o3w_1 = paragraphInfoList;
    this.k3w_1 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var tmp_1 = this;
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.ui.util.fastFlatMap' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(paragraphInfoList.m());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = paragraphInfoList.m() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item = paragraphInfoList.n(index_0);
        // Inline function 'androidx.compose.ui.util.fastFlatMap.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>.<anonymous>' call
        // Inline function 'androidx.compose.ui.util.fastMap' call
        var this_0 = item.p3w_1.e3x();
        // Inline function 'kotlin.contracts.contract' call
        var target_0 = ArrayList_init_$Create$(this_0.m());
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_1 = 0;
        var last_1 = this_0.m() - 1 | 0;
        if (inductionVariable_1 <= last_1)
          do {
            var index_1 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var item_0 = this_0.n(index_1);
            // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
            // Inline function 'kotlin.collections.plusAssign' call
            // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>.<anonymous>.<anonymous>' call
            var element = item_0 == null ? null : item.f3x(item_0);
            target_0.a1(element);
          }
           while (inductionVariable_1 <= last_1);
        var list = target_0;
        addAll(target, list);
      }
       while (inductionVariable_0 <= last_0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>' call
    var tmp_2;
    if (target.m() < this.h3w_1.d3w_1.m()) {
      // Inline function 'kotlin.collections.List' call
      // Inline function 'kotlin.collections.MutableList' call
      var size = this.h3w_1.d3w_1.m() - target.m() | 0;
      var list_0 = ArrayList_init_$Create$(size);
      // Inline function 'kotlin.repeat' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_2 = 0;
      if (inductionVariable_2 < size)
        do {
          var index_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          // Inline function 'kotlin.collections.MutableList.<anonymous>' call
          // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>.<anonymous>' call
          list_0.a1(null);
        }
         while (inductionVariable_2 < size);
      tmp_2 = plus(target, list_0);
    } else {
      tmp_2 = target;
    }
    tmp_1.n3w_1 = tmp_2;
  }
  protoOf(MultiParagraph).g3x = function () {
    var tmp;
    if (this.o3w_1.u()) {
      tmp = 0.0;
    } else {
      tmp = this.o3w_1.n(0).p3w_1.g3x();
    }
    return tmp;
  };
  protoOf(MultiParagraph).h3x = function () {
    var tmp;
    if (this.o3w_1.u()) {
      tmp = 0.0;
    } else {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.MultiParagraph.<get-lastBaseline>.<anonymous>' call
      var $this$with = last(this.o3w_1);
      tmp = $this$with.i3x($this$with.p3w_1.h3x());
    }
    return tmp;
  };
  protoOf(MultiParagraph).j3x = function (canvas, color, shadow, decoration, drawStyle, blendMode) {
    canvas.x3i();
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.o3w_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.m() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.n(index);
        // Inline function 'androidx.compose.ui.text.MultiParagraph.paint.<anonymous>' call
        item.p3w_1.j3x(canvas, color, shadow, decoration, drawStyle, blendMode);
        canvas.a3j(0.0, item.p3w_1.f2w());
      }
       while (inductionVariable <= last);
    canvas.y3i();
  };
  protoOf(MultiParagraph).k3x = function (canvas, color, shadow, decoration, drawStyle, blendMode, $super) {
    color = color === VOID ? Companion_getInstance().i3l_1 : color;
    shadow = shadow === VOID ? null : shadow;
    decoration = decoration === VOID ? null : decoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().m3t_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.j3x(canvas, color, shadow, decoration, drawStyle, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.j3x.call(this, canvas, new Color(color), shadow, decoration, drawStyle, new BlendMode(blendMode));
    }
    return tmp;
  };
  protoOf(MultiParagraph).l3x = function (canvas, brush, alpha, shadow, decoration, drawStyle, blendMode) {
    drawMultiParagraph(this, canvas, brush, alpha, shadow, decoration, drawStyle, blendMode);
  };
  protoOf(MultiParagraph).m3x = function (canvas, brush, alpha, shadow, decoration, drawStyle, blendMode, $super) {
    var tmp;
    if (alpha === VOID) {
      tmp = NaN;
    } else {
      tmp = alpha;
    }
    alpha = tmp;
    shadow = shadow === VOID ? null : shadow;
    decoration = decoration === VOID ? null : decoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().m3t_1 : blendMode;
    var tmp_0;
    if ($super === VOID) {
      this.l3x(canvas, brush, alpha, shadow, decoration, drawStyle, blendMode);
      tmp_0 = Unit_instance;
    } else {
      tmp_0 = $super.l3x.call(this, canvas, brush, alpha, shadow, decoration, drawStyle, new BlendMode(blendMode));
    }
    return tmp_0;
  };
  protoOf(MultiParagraph).x3w = function (start, end) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((0 <= start ? start <= end : false) ? end <= _get_annotatedString__kqljtk(this).n3v_1.length : false)) {
      // Inline function 'androidx.compose.ui.text.MultiParagraph.getPathForRange.<anonymous>' call
      var message = 'Start(' + start + ') or End(' + end + ') is out of range [0..' + _get_annotatedString__kqljtk(this).n3v_1.length + '),' + ' or start > end!';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (start === end)
      return Path();
    var path = Path();
    var tmp = TextRange_0(start, end);
    findParagraphsByRange(this.o3w_1, tmp, MultiParagraph$getPathForRange$lambda(path, start, end));
    return path;
  };
  protoOf(MultiParagraph).n3x = function (vertical) {
    var paragraphIndex = vertical <= 0.0 ? 0 : vertical >= this.l3w_1 ? get_lastIndex(this.o3w_1) : findParagraphByY(this.o3w_1, vertical);
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineForVerticalPosition.<anonymous>' call
    var $this$with = this.o3w_1.n(paragraphIndex);
    var tmp;
    if ($this$with.a() === 0) {
      tmp = $this$with.s3w_1;
    } else {
      tmp = $this$with.p3x($this$with.p3w_1.n3x($this$with.o3x(vertical)));
    }
    return tmp;
  };
  protoOf(MultiParagraph).q3x = function (offset) {
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__kqljtk(this).a()) {
      tmp = get_lastIndex(this.o3w_1);
    } else {
      tmp = findParagraphByIndex(this.o3w_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getParagraphDirection.<anonymous>' call
    var $this$with = this.o3w_1.n(paragraphIndex);
    return $this$with.p3w_1.q3x($this$with.w3w(offset));
  };
  protoOf(MultiParagraph).r3x = function (offset) {
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__kqljtk(this).a()) {
      tmp = get_lastIndex(this.o3w_1);
    } else {
      tmp = findParagraphByIndex(this.o3w_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getBidiRunDirection.<anonymous>' call
    var $this$with = this.o3w_1.n(paragraphIndex);
    return $this$with.p3w_1.r3x($this$with.w3w(offset));
  };
  protoOf(MultiParagraph).s3x = function (offset) {
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__kqljtk(this).a()) {
      tmp = get_lastIndex(this.o3w_1);
    } else {
      tmp = findParagraphByIndex(this.o3w_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getWordBoundary.<anonymous>' call
    var $this$with = this.o3w_1.n(paragraphIndex);
    return $this$with.t3x($this$with.p3w_1.s3x($this$with.w3w(offset)));
  };
  protoOf(MultiParagraph).u3x = function (offset) {
    var tmp;
    if (offset >= _get_annotatedString__kqljtk(this).a()) {
      tmp = get_lastIndex(this.o3w_1);
    } else if (offset < 0) {
      tmp = 0;
    } else {
      tmp = findParagraphByIndex(this.o3w_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineForOffset.<anonymous>' call
    var $this$with = this.o3w_1.n(paragraphIndex);
    return $this$with.p3x($this$with.p3w_1.u3x($this$with.w3w(offset)));
  };
  protoOf(MultiParagraph).v3x = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.o3w_1, lineIndex);
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineTop.<anonymous>' call
    var $this$with = this.o3w_1.n(paragraphIndex);
    return $this$with.i3x($this$with.p3w_1.v3x($this$with.w3x(lineIndex)));
  };
  protoOf(MultiParagraph).x3x = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.o3w_1, lineIndex);
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineStart.<anonymous>' call
    var $this$with = this.o3w_1.n(paragraphIndex);
    return $this$with.y3x($this$with.p3w_1.x3x($this$with.w3x(lineIndex)));
  };
  protoOf(MultiParagraph).z3x = function (lineIndex, visibleEnd) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.o3w_1, lineIndex);
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineEnd.<anonymous>' call
    var $this$with = this.o3w_1.n(paragraphIndex);
    return $this$with.y3x($this$with.p3w_1.z3x($this$with.w3x(lineIndex), visibleEnd));
  };
  function ParagraphInfo(paragraph, startIndex, endIndex, startLineIndex, endLineIndex, top, bottom) {
    startLineIndex = startLineIndex === VOID ? -1 : startLineIndex;
    endLineIndex = endLineIndex === VOID ? -1 : endLineIndex;
    top = top === VOID ? -1.0 : top;
    bottom = bottom === VOID ? -1.0 : bottom;
    this.p3w_1 = paragraph;
    this.q3w_1 = startIndex;
    this.r3w_1 = endIndex;
    this.s3w_1 = startLineIndex;
    this.t3w_1 = endLineIndex;
    this.u3w_1 = top;
    this.v3w_1 = bottom;
  }
  protoOf(ParagraphInfo).a = function () {
    return this.r3w_1 - this.q3w_1 | 0;
  };
  protoOf(ParagraphInfo).w3w = function (_this__u8e3s4) {
    return coerceIn(_this__u8e3s4, this.q3w_1, this.r3w_1) - this.q3w_1 | 0;
  };
  protoOf(ParagraphInfo).y3x = function (_this__u8e3s4) {
    return _this__u8e3s4 + this.q3w_1 | 0;
  };
  protoOf(ParagraphInfo).w3x = function (_this__u8e3s4) {
    return _this__u8e3s4 - this.s3w_1 | 0;
  };
  protoOf(ParagraphInfo).p3x = function (_this__u8e3s4) {
    return _this__u8e3s4 + this.s3w_1 | 0;
  };
  protoOf(ParagraphInfo).i3x = function (_this__u8e3s4) {
    return _this__u8e3s4 + this.u3w_1;
  };
  protoOf(ParagraphInfo).o3x = function (_this__u8e3s4) {
    return _this__u8e3s4 - this.u3w_1;
  };
  protoOf(ParagraphInfo).f3x = function (_this__u8e3s4) {
    return _this__u8e3s4.g2w(Offset(0.0, this.u3w_1));
  };
  protoOf(ParagraphInfo).y3w = function (_this__u8e3s4) {
    _this__u8e3s4.r3n(Offset(0.0, this.u3w_1));
    return _this__u8e3s4;
  };
  protoOf(ParagraphInfo).t3x = function (_this__u8e3s4) {
    return TextRange_0(this.y3x(_TextRange___get_start__impl__ww4t90(_this__u8e3s4)), this.y3x(_TextRange___get_end__impl__gcdxpp(_this__u8e3s4)));
  };
  protoOf(ParagraphInfo).toString = function () {
    return 'ParagraphInfo(paragraph=' + this.p3w_1 + ', startIndex=' + this.q3w_1 + ', endIndex=' + this.r3w_1 + ', startLineIndex=' + this.s3w_1 + ', endLineIndex=' + this.t3w_1 + ', top=' + this.u3w_1 + ', bottom=' + this.v3w_1 + ')';
  };
  protoOf(ParagraphInfo).hashCode = function () {
    var result = hashCode(this.p3w_1);
    result = imul(result, 31) + this.q3w_1 | 0;
    result = imul(result, 31) + this.r3w_1 | 0;
    result = imul(result, 31) + this.s3w_1 | 0;
    result = imul(result, 31) + this.t3w_1 | 0;
    result = imul(result, 31) + getNumberHashCode(this.u3w_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.v3w_1) | 0;
    return result;
  };
  protoOf(ParagraphInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParagraphInfo))
      return false;
    var tmp0_other_with_cast = other instanceof ParagraphInfo ? other : THROW_CCE();
    if (!equals(this.p3w_1, tmp0_other_with_cast.p3w_1))
      return false;
    if (!(this.q3w_1 === tmp0_other_with_cast.q3w_1))
      return false;
    if (!(this.r3w_1 === tmp0_other_with_cast.r3w_1))
      return false;
    if (!(this.s3w_1 === tmp0_other_with_cast.s3w_1))
      return false;
    if (!(this.t3w_1 === tmp0_other_with_cast.t3w_1))
      return false;
    if (!equals(this.u3w_1, tmp0_other_with_cast.u3w_1))
      return false;
    if (!equals(this.v3w_1, tmp0_other_with_cast.v3w_1))
      return false;
    return true;
  };
  function findParagraphsByRange(paragraphInfoList, range, action) {
    var paragraphIndex = findParagraphByIndex(paragraphInfoList, _TextRange___get_min__impl__uu95c4(range));
    var inductionVariable = paragraphIndex;
    var last = paragraphInfoList.m();
    if (inductionVariable < last)
      $l$loop_0: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var paragraph = paragraphInfoList.n(i);
        if (paragraph.q3w_1 >= _TextRange___get_max__impl__owm8m(range))
          break $l$loop_0;
        if (paragraph.q3w_1 === paragraph.r3w_1)
          continue $l$loop_0;
        action(paragraph);
      }
       while (inductionVariable < last);
  }
  function findParagraphByY(paragraphInfoList, y) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.fastBinarySearch' call
      var low = 0;
      var high = paragraphInfoList.m() - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) >>> 1 | 0;
        var midVal = paragraphInfoList.n(mid);
        // Inline function 'androidx.compose.ui.text.findParagraphByY.<anonymous>' call
        var cmp = midVal.u3w_1 > y ? 1 : midVal.v3w_1 <= y ? -1 : 0;
        if (cmp < 0)
          low = mid + 1 | 0;
        else if (cmp > 0)
          high = mid - 1 | 0;
        else {
          tmp$ret$1 = mid;
          break $l$block;
        }
      }
      tmp$ret$1 = -(low + 1 | 0) | 0;
    }
    return tmp$ret$1;
  }
  function findParagraphByIndex(paragraphInfoList, index) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.fastBinarySearch' call
      var low = 0;
      var high = paragraphInfoList.m() - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) >>> 1 | 0;
        var midVal = paragraphInfoList.n(mid);
        // Inline function 'androidx.compose.ui.text.findParagraphByIndex.<anonymous>' call
        var cmp = midVal.q3w_1 > index ? 1 : midVal.r3w_1 <= index ? -1 : 0;
        if (cmp < 0)
          low = mid + 1 | 0;
        else if (cmp > 0)
          high = mid - 1 | 0;
        else {
          tmp$ret$1 = mid;
          break $l$block;
        }
      }
      tmp$ret$1 = -(low + 1 | 0) | 0;
    }
    return tmp$ret$1;
  }
  function findParagraphByLineIndex(paragraphInfoList, lineIndex) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.fastBinarySearch' call
      var low = 0;
      var high = paragraphInfoList.m() - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) >>> 1 | 0;
        var midVal = paragraphInfoList.n(mid);
        // Inline function 'androidx.compose.ui.text.findParagraphByLineIndex.<anonymous>' call
        var cmp = midVal.s3w_1 > lineIndex ? 1 : midVal.t3w_1 <= lineIndex ? -1 : 0;
        if (cmp < 0)
          low = mid + 1 | 0;
        else if (cmp > 0)
          high = mid - 1 | 0;
        else {
          tmp$ret$1 = mid;
          break $l$block;
        }
      }
      tmp$ret$1 = -(low + 1 | 0) | 0;
    }
    return tmp$ret$1;
  }
  function resolveTextDirection($this, style, defaultStyle) {
    return !(style.t3v_1 === Companion_getInstance_32().g3y_1) ? style : style.a3y(VOID, defaultStyle.t3v_1);
  }
  function MultiParagraphIntrinsics$minIntrinsicWidth$delegate$lambda(this$0) {
    return function () {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'androidx.compose.ui.util.fastMaxBy' call
        var this_0 = this$0.g3w_1;
        // Inline function 'kotlin.contracts.contract' call
        if (this_0.u()) {
          tmp$ret$0 = null;
          break $l$block;
        }
        var maxElem = this_0.n(0);
        // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.minIntrinsicWidth$delegate.<anonymous>.<anonymous>' call
        var maxValue = maxElem.z3w_1.p3a();
        var inductionVariable = 1;
        var last = get_lastIndex(this_0);
        if (inductionVariable <= last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var e = this_0.n(i);
            // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.minIntrinsicWidth$delegate.<anonymous>.<anonymous>' call
            var v = e.z3w_1.p3a();
            if (compareTo(maxValue, v) < 0) {
              maxElem = e;
              maxValue = v;
            }
          }
           while (!(i === last));
        tmp$ret$0 = maxElem;
      }
      var tmp0_safe_receiver = tmp$ret$0;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z3w_1;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.p3a();
      return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
    };
  }
  function MultiParagraphIntrinsics$maxIntrinsicWidth$delegate$lambda(this$0) {
    return function () {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'androidx.compose.ui.util.fastMaxBy' call
        var this_0 = this$0.g3w_1;
        // Inline function 'kotlin.contracts.contract' call
        if (this_0.u()) {
          tmp$ret$0 = null;
          break $l$block;
        }
        var maxElem = this_0.n(0);
        // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.maxIntrinsicWidth$delegate.<anonymous>.<anonymous>' call
        var maxValue = maxElem.z3w_1.q3a();
        var inductionVariable = 1;
        var last = get_lastIndex(this_0);
        if (inductionVariable <= last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var e = this_0.n(i);
            // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.maxIntrinsicWidth$delegate.<anonymous>.<anonymous>' call
            var v = e.z3w_1.q3a();
            if (compareTo(maxValue, v) < 0) {
              maxElem = e;
              maxValue = v;
            }
          }
           while (!(i === last));
        tmp$ret$0 = maxElem;
      }
      var tmp0_safe_receiver = tmp$ret$0;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z3w_1;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.q3a();
      return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
    };
  }
  function MultiParagraphIntrinsics(annotatedString, style, placeholders, density, fontFamilyResolver) {
    this.c3w_1 = annotatedString;
    this.d3w_1 = placeholders;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_NONE_getInstance();
    tmp.e3w_1 = lazy(tmp_0, MultiParagraphIntrinsics$minIntrinsicWidth$delegate$lambda(this));
    var tmp_1 = this;
    var tmp_2 = LazyThreadSafetyMode_NONE_getInstance();
    tmp_1.f3w_1 = lazy(tmp_2, MultiParagraphIntrinsics$maxIntrinsicWidth$delegate$lambda(this));
    var paragraphStyle = style.k3y();
    var tmp_3 = this;
    // Inline function 'androidx.compose.ui.text.mapEachParagraphStyle' call
    var this_0 = this.c3w_1;
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var this_1 = normalizedParagraphStyles(this_0, paragraphStyle);
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(this_1.m());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_1.m() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_1.n(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.mapEachParagraphStyle.<anonymous>' call
        var annotatedString_0 = substringWithoutParagraphStyles(this_0, item.j3v_1, item.k3v_1);
        // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.<anonymous>' call
        var currentParagraphStyle = resolveTextDirection(this, item.i3v_1, paragraphStyle);
        var element = new ParagraphIntrinsicInfo(ParagraphIntrinsics_0(annotatedString_0.n3v_1, style.l3y(currentParagraphStyle), annotatedString_0.r3v(), getLocalPlaceholders(this.d3w_1, item.j3v_1, item.k3v_1), density, fontFamilyResolver), item.j3v_1, item.k3v_1);
        target.a1(element);
      }
       while (inductionVariable <= last);
    tmp_3.g3w_1 = target;
  }
  protoOf(MultiParagraphIntrinsics).p3a = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.e3w_1;
    minIntrinsicWidth$factory();
    return this_0.q2();
  };
  protoOf(MultiParagraphIntrinsics).q3a = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.f3w_1;
    maxIntrinsicWidth$factory();
    return this_0.q2();
  };
  protoOf(MultiParagraphIntrinsics).m3y = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastAny' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var this_0 = this.g3w_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.m() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.n(index);
          // Inline function 'androidx.compose.ui.util.fastAny.<anonymous>' call
          // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.<get-hasStaleResolvedFonts>.<anonymous>' call
          if (item.z3w_1.m3y()) {
            tmp$ret$1 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  };
  function ParagraphIntrinsicInfo(intrinsics, startIndex, endIndex) {
    this.z3w_1 = intrinsics;
    this.a3x_1 = startIndex;
    this.b3x_1 = endIndex;
  }
  protoOf(ParagraphIntrinsicInfo).toString = function () {
    return 'ParagraphIntrinsicInfo(intrinsics=' + this.z3w_1 + ', startIndex=' + this.a3x_1 + ', endIndex=' + this.b3x_1 + ')';
  };
  protoOf(ParagraphIntrinsicInfo).hashCode = function () {
    var result = hashCode(this.z3w_1);
    result = imul(result, 31) + this.a3x_1 | 0;
    result = imul(result, 31) + this.b3x_1 | 0;
    return result;
  };
  protoOf(ParagraphIntrinsicInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParagraphIntrinsicInfo))
      return false;
    var tmp0_other_with_cast = other instanceof ParagraphIntrinsicInfo ? other : THROW_CCE();
    if (!equals(this.z3w_1, tmp0_other_with_cast.z3w_1))
      return false;
    if (!(this.a3x_1 === tmp0_other_with_cast.a3x_1))
      return false;
    if (!(this.b3x_1 === tmp0_other_with_cast.b3x_1))
      return false;
    return true;
  };
  function getLocalPlaceholders(_this__u8e3s4, start, end) {
    // Inline function 'androidx.compose.ui.util.fastMap' call
    // Inline function 'androidx.compose.ui.util.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(_this__u8e3s4.m());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.m() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.n(index);
        // Inline function 'androidx.compose.ui.util.fastFilter.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.getLocalPlaceholders.<anonymous>' call
        if (intersect(start, end, item.j3v_1, item.k3v_1)) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.a1(item);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$(target.m());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = target.m() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = target.n(index_0);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.getLocalPlaceholders.<anonymous>' call
        // Inline function 'kotlin.require' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(start <= item_0.j3v_1 ? item_0.k3v_1 <= end : false)) {
          // Inline function 'androidx.compose.ui.text.getLocalPlaceholders.<anonymous>.<anonymous>' call
          var message = 'placeholder can not overlap with paragraph.';
          throw IllegalArgumentException_init_$Create$(toString(message));
        }
        var element = Range_init_$Create$(item_0.i3v_1, item_0.j3v_1 - start | 0, item_0.k3v_1 - start | 0);
        target_0.a1(element);
      }
       while (inductionVariable_0 <= last_0);
    return target_0;
  }
  function minIntrinsicWidth$factory() {
    return getPropertyCallableRef('minIntrinsicWidth', 1, KProperty1, function (receiver) {
      return receiver.p3a();
    }, null);
  }
  function maxIntrinsicWidth$factory() {
    return getPropertyCallableRef('maxIntrinsicWidth', 1, KProperty1, function (receiver) {
      return receiver.q3a();
    }, null);
  }
  function get_DefaultMaxLines() {
    return DefaultMaxLines;
  }
  var DefaultMaxLines;
  function ceilToInt(_this__u8e3s4) {
    // Inline function 'kotlin.math.ceil' call
    var tmp$ret$0 = Math.ceil(_this__u8e3s4);
    return numberToInt(tmp$ret$0);
  }
  function Paragraph(paragraphIntrinsics, constraints, maxLines, ellipsis) {
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    ellipsis = ellipsis === VOID ? false : ellipsis;
    return ActualParagraph(paragraphIntrinsics, maxLines, ellipsis, constraints);
  }
  function Paragraph_0(text, style, constraints, density, fontFamilyResolver, spanStyles, placeholders, maxLines, ellipsis) {
    var tmp;
    if (spanStyles === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = spanStyles;
    }
    spanStyles = tmp;
    var tmp_0;
    if (placeholders === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp_0 = emptyList();
    } else {
      tmp_0 = placeholders;
    }
    placeholders = tmp_0;
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    ellipsis = ellipsis === VOID ? false : ellipsis;
    return ActualParagraph_0(text, style, spanStyles, placeholders, maxLines, ellipsis, constraints, density, fontFamilyResolver);
  }
  function ParagraphIntrinsics() {
  }
  function ParagraphIntrinsics_0(text, style, spanStyles, placeholders, density, fontFamilyResolver) {
    var tmp;
    if (spanStyles === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = spanStyles;
    }
    spanStyles = tmp;
    var tmp_0;
    if (placeholders === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp_0 = emptyList();
    } else {
      tmp_0 = placeholders;
    }
    placeholders = tmp_0;
    return ActualParagraphIntrinsics(text, style, spanStyles, placeholders, density, fontFamilyResolver);
  }
  function get_DefaultLineHeight() {
    _init_properties_ParagraphStyle_kt__lbx7er();
    return DefaultLineHeight;
  }
  var DefaultLineHeight;
  function ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    textAlign = textAlign === VOID ? Companion_getInstance_30().t3y_1 : textAlign;
    textDirection = textDirection === VOID ? Companion_getInstance_32().g3y_1 : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_1().j2y_1 : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? null : lineHeightStyle;
    lineBreak = lineBreak === VOID ? Companion_getInstance_39().x3y_1 : lineBreak;
    hyphens = hyphens === VOID ? Companion_getInstance_26().a3z_1 : hyphens;
    textMotion = textMotion === VOID ? null : textMotion;
    this.s3v_1 = textAlign;
    this.t3v_1 = textDirection;
    this.u3v_1 = lineHeight;
    this.v3v_1 = textIndent;
    this.w3v_1 = platformStyle;
    this.x3v_1 = lineHeightStyle;
    this.y3v_1 = lineBreak;
    this.z3v_1 = hyphens;
    this.a3w_1 = textMotion;
    if (!equals(this.u3v_1, Companion_getInstance_1().j2y_1)) {
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(_TextUnit___get_value__impl__hpbx0k(this.u3v_1) >= 0.0)) {
        // Inline function 'androidx.compose.ui.text.ParagraphStyle.<anonymous>' call
        var message = "lineHeight can't be negative (" + _TextUnit___get_value__impl__hpbx0k(this.u3v_1) + ')';
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  protoOf(ParagraphStyle_0).b3w = function (other) {
    if (other == null)
      return this;
    return fastMerge(this, other.s3v_1, other.t3v_1, other.u3v_1, other.v3v_1, other.w3v_1, other.x3v_1, other.y3v_1, other.z3v_1, other.a3w_1);
  };
  protoOf(ParagraphStyle_0).b3z = function (textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    return new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion);
  };
  protoOf(ParagraphStyle_0).a3y = function (textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $super) {
    textAlign = textAlign === VOID ? this.s3v_1 : textAlign;
    textDirection = textDirection === VOID ? this.t3v_1 : textDirection;
    lineHeight = lineHeight === VOID ? this.u3v_1 : lineHeight;
    textIndent = textIndent === VOID ? this.v3v_1 : textIndent;
    platformStyle = platformStyle === VOID ? this.w3v_1 : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? this.x3v_1 : lineHeightStyle;
    lineBreak = lineBreak === VOID ? this.y3v_1 : lineBreak;
    hyphens = hyphens === VOID ? this.z3v_1 : hyphens;
    textMotion = textMotion === VOID ? this.a3w_1 : textMotion;
    return $super === VOID ? this.b3z(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) : $super.b3z.call(this, new TextAlign(textAlign), new TextDirection(textDirection), new TextUnit(lineHeight), textIndent, platformStyle, lineHeightStyle, new LineBreak(lineBreak), new Hyphens(hyphens), textMotion);
  };
  protoOf(ParagraphStyle_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParagraphStyle_0))
      return false;
    if (!(this.s3v_1 === other.s3v_1))
      return false;
    if (!(this.t3v_1 === other.t3v_1))
      return false;
    if (!equals(this.u3v_1, other.u3v_1))
      return false;
    if (!equals(this.v3v_1, other.v3v_1))
      return false;
    if (!equals(this.w3v_1, other.w3v_1))
      return false;
    if (!equals(this.x3v_1, other.x3v_1))
      return false;
    if (!(this.y3v_1 === other.y3v_1))
      return false;
    if (!(this.z3v_1 === other.z3v_1))
      return false;
    if (!equals(this.a3w_1, other.a3w_1))
      return false;
    return true;
  };
  protoOf(ParagraphStyle_0).hashCode = function () {
    var result = TextAlign__hashCode_impl_s8g35y(this.s3v_1);
    result = imul(31, result) + TextDirection__hashCode_impl_g63nwg(this.t3v_1) | 0;
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.u3v_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.v3v_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.w3v_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.hashCode();
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_1 = imul(31, result);
    var tmp4_safe_receiver = this.x3v_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.hashCode();
    result = tmp_1 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    result = imul(31, result) + LineBreak__hashCode_impl_ybksn(this.y3v_1) | 0;
    result = imul(31, result) + Hyphens__hashCode_impl_yb7t8v(this.z3v_1) | 0;
    var tmp_2 = imul(31, result);
    var tmp6_safe_receiver = this.a3w_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : hashCode(tmp6_safe_receiver);
    result = tmp_2 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    return result;
  };
  protoOf(ParagraphStyle_0).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.ParagraphStyle.toString.<anonymous>' call
    this_0.x5('ParagraphStyle(');
    this_0.x5('textAlign=' + new TextAlign(this.s3v_1) + ', ');
    this_0.x5('textDirection=' + new TextDirection(this.t3v_1) + ', ');
    this_0.x5('lineHeight=' + new TextUnit(this.u3v_1) + ', ');
    this_0.x5('textIndent=' + this.v3v_1 + ', ');
    this_0.x5('platformStyle=' + this.w3v_1 + ', ');
    this_0.x5('lineHeightStyle=' + this.x3v_1 + ', ');
    this_0.x5('lineBreak=' + new LineBreak(this.y3v_1) + ', ');
    this_0.x5('hyphens=' + new Hyphens(this.z3v_1) + ', ');
    this_0.x5('textMotion=' + this.a3w_1);
    this_0.x5(')');
    return this_0.toString();
  };
  function fastMerge(_this__u8e3s4, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    _init_properties_ParagraphStyle_kt__lbx7er();
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    var tmp_4;
    var tmp_5;
    var tmp_6;
    if (!(textAlign === Companion_getInstance_30().t3y_1) ? !(textAlign === _this__u8e3s4.s3v_1) : false) {
      tmp_6 = true;
    } else {
      var tmp_7;
      // Inline function 'androidx.compose.ui.unit.isSpecified' call
      if (!get_isUnspecified(lineHeight)) {
        tmp_7 = !equals(lineHeight, _this__u8e3s4.u3v_1);
      } else {
        tmp_7 = false;
      }
      tmp_6 = tmp_7;
    }
    if (tmp_6) {
      tmp_5 = true;
    } else {
      tmp_5 = !(textIndent == null) ? !equals(textIndent, _this__u8e3s4.v3v_1) : false;
    }
    if (tmp_5) {
      tmp_4 = true;
    } else {
      tmp_4 = !(textDirection === Companion_getInstance_32().g3y_1) ? !(textDirection === _this__u8e3s4.t3v_1) : false;
    }
    if (tmp_4) {
      tmp_3 = true;
    } else {
      tmp_3 = !(platformStyle == null) ? !equals(platformStyle, _this__u8e3s4.w3v_1) : false;
    }
    if (tmp_3) {
      tmp_2 = true;
    } else {
      tmp_2 = !(lineHeightStyle == null) ? !equals(lineHeightStyle, _this__u8e3s4.x3v_1) : false;
    }
    if (tmp_2) {
      tmp_1 = true;
    } else {
      tmp_1 = !(lineBreak === Companion_getInstance_39().x3y_1) ? !(lineBreak === _this__u8e3s4.y3v_1) : false;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = !(hyphens === Companion_getInstance_26().a3z_1) ? !(hyphens === _this__u8e3s4.z3v_1) : false;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = !(textMotion == null) ? !equals(textMotion, _this__u8e3s4.a3w_1) : false;
    }
    var requiresAlloc = tmp;
    if (!requiresAlloc) {
      return _this__u8e3s4;
    }
    var tmp_8;
    if (get_isUnspecified(lineHeight)) {
      tmp_8 = _this__u8e3s4.u3v_1;
    } else {
      tmp_8 = lineHeight;
    }
    var tmp3_lineHeight = tmp_8;
    var tmp4_textIndent = textIndent == null ? _this__u8e3s4.v3v_1 : textIndent;
    var tmp5_textAlign = !(textAlign === Companion_getInstance_30().t3y_1) ? textAlign : _this__u8e3s4.s3v_1;
    var tmp6_textDirection = !(textDirection === Companion_getInstance_32().g3y_1) ? textDirection : _this__u8e3s4.t3v_1;
    var tmp7_platformStyle = mergePlatformStyle(_this__u8e3s4, platformStyle);
    var tmp8_lineHeightStyle = lineHeightStyle == null ? _this__u8e3s4.x3v_1 : lineHeightStyle;
    var tmp9_lineBreak = !(lineBreak === Companion_getInstance_39().x3y_1) ? lineBreak : _this__u8e3s4.y3v_1;
    var tmp10_hyphens = !(hyphens === Companion_getInstance_26().a3z_1) ? hyphens : _this__u8e3s4.z3v_1;
    var tmp11_textMotion = textMotion == null ? _this__u8e3s4.a3w_1 : textMotion;
    return new ParagraphStyle_0(tmp5_textAlign, tmp6_textDirection, tmp3_lineHeight, tmp4_textIndent, tmp7_platformStyle, tmp8_lineHeightStyle, tmp9_lineBreak, tmp10_hyphens, tmp11_textMotion);
  }
  function mergePlatformStyle(_this__u8e3s4, other) {
    _init_properties_ParagraphStyle_kt__lbx7er();
    if (_this__u8e3s4.w3v_1 == null)
      return other;
    if (other == null)
      return _this__u8e3s4.w3v_1;
    return _this__u8e3s4.w3v_1.c3z(other);
  }
  function resolveParagraphStyleDefaults(style, direction) {
    _init_properties_ParagraphStyle_kt__lbx7er();
    var tmp = style.s3v_1 === Companion_getInstance_30().t3y_1 ? Companion_getInstance_30().r3y_1 : style.s3v_1;
    var tmp_0 = resolveTextDirection_0(direction, style.t3v_1);
    var tmp_1 = get_isUnspecified(style.u3v_1) ? get_DefaultLineHeight() : style.u3v_1;
    var tmp0_elvis_lhs = style.v3v_1;
    var tmp_2 = tmp0_elvis_lhs == null ? Companion_getInstance_35().d3z_1 : tmp0_elvis_lhs;
    var tmp_3 = style.y3v_1 === Companion_getInstance_39().x3y_1 ? Companion_getInstance_39().u3y_1 : style.y3v_1;
    var tmp_4 = style.z3v_1 === Companion_getInstance_26().a3z_1 ? Companion_getInstance_26().y3y_1 : style.z3v_1;
    var tmp1_elvis_lhs = style.a3w_1;
    return new ParagraphStyle_0(tmp, tmp_0, tmp_1, tmp_2, style.w3v_1, style.x3v_1, tmp_3, tmp_4, tmp1_elvis_lhs == null ? Companion_getInstance_40().e3z_1 : tmp1_elvis_lhs);
  }
  var properties_initialized_ParagraphStyle_kt_y6w405;
  function _init_properties_ParagraphStyle_kt__lbx7er() {
    if (!properties_initialized_ParagraphStyle_kt_y6w405) {
      properties_initialized_ParagraphStyle_kt_y6w405 = true;
      DefaultLineHeight = Companion_getInstance_1().j2y_1;
    }
  }
  function Placeholder() {
  }
  protoOf(Placeholder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Placeholder))
      return false;
    if (!equals(this.g3z_1, other.g3z_1))
      return false;
    if (!equals(this.h3z_1, other.h3z_1))
      return false;
    if (!(this.i3z_1 === other.i3z_1))
      return false;
    return true;
  };
  protoOf(Placeholder).hashCode = function () {
    var result = TextUnit__hashCode_impl_qsmeov(this.g3z_1);
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.h3z_1) | 0;
    result = imul(31, result) + PlaceholderVerticalAlign__hashCode_impl_1c0k16(this.i3z_1) | 0;
    return result;
  };
  function _PlaceholderVerticalAlign___init__impl__mll0or(value) {
    return value;
  }
  function Companion() {
    Companion_instance_1 = this;
    this.j3z_1 = _PlaceholderVerticalAlign___init__impl__mll0or(1);
    this.k3z_1 = _PlaceholderVerticalAlign___init__impl__mll0or(2);
    this.l3z_1 = _PlaceholderVerticalAlign___init__impl__mll0or(3);
    this.m3z_1 = _PlaceholderVerticalAlign___init__impl__mll0or(4);
    this.n3z_1 = _PlaceholderVerticalAlign___init__impl__mll0or(5);
    this.o3z_1 = _PlaceholderVerticalAlign___init__impl__mll0or(6);
    this.p3z_1 = _PlaceholderVerticalAlign___init__impl__mll0or(7);
  }
  var Companion_instance_1;
  function Companion_getInstance_12() {
    if (Companion_instance_1 == null)
      new Companion();
    return Companion_instance_1;
  }
  function PlaceholderVerticalAlign__hashCode_impl_1c0k16($this) {
    return $this;
  }
  function get_DefaultFontSize() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return DefaultFontSize;
  }
  var DefaultFontSize;
  function get_DefaultLetterSpacing() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return DefaultLetterSpacing;
  }
  var DefaultLetterSpacing;
  function get_DefaultBackgroundColor() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return DefaultBackgroundColor;
  }
  var DefaultBackgroundColor;
  function get_DefaultColor() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return DefaultColor;
  }
  var DefaultColor;
  function SpanStyle_init_$Init$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, $this) {
    color = color === VOID ? Companion_getInstance().i3l_1 : color;
    fontSize = fontSize === VOID ? Companion_getInstance_1().j2y_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().j2y_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().i3l_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    SpanStyle.call($this, Companion_instance_22.q3z(color), fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
    return $this;
  }
  function SpanStyle_init_$Create$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    return SpanStyle_init_$Init$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, objectCreate(protoOf(SpanStyle)));
  }
  function SpanStyle_init_$Init$_0(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, $this) {
    var tmp;
    if (alpha === VOID) {
      tmp = NaN;
    } else {
      tmp = alpha;
    }
    alpha = tmp;
    fontSize = fontSize === VOID ? Companion_getInstance_1().j2y_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().j2y_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().i3l_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    SpanStyle.call($this, Companion_instance_22.r3z(brush, alpha), fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
    return $this;
  }
  function SpanStyle_init_$Create$_0(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    return SpanStyle_init_$Init$_0(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, objectCreate(protoOf(SpanStyle)));
  }
  function SpanStyle(textForegroundStyle, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    fontSize = fontSize === VOID ? Companion_getInstance_1().j2y_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().j2y_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().i3l_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    this.s3z_1 = textForegroundStyle;
    this.t3z_1 = fontSize;
    this.u3z_1 = fontWeight;
    this.v3z_1 = fontStyle;
    this.w3z_1 = fontSynthesis;
    this.x3z_1 = fontFamily;
    this.y3z_1 = fontFeatureSettings;
    this.z3z_1 = letterSpacing;
    this.a40_1 = baselineShift;
    this.b40_1 = textGeometricTransform;
    this.c40_1 = localeList;
    this.d40_1 = background;
    this.e40_1 = textDecoration;
    this.f40_1 = shadow;
    this.g40_1 = platformStyle;
    this.h40_1 = drawStyle;
  }
  protoOf(SpanStyle).e3t = function () {
    return this.s3z_1.e3t();
  };
  protoOf(SpanStyle).i40 = function () {
    return this.s3z_1.i40();
  };
  protoOf(SpanStyle).p3g = function () {
    return this.s3z_1.p3g();
  };
  protoOf(SpanStyle).j40 = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    var tmp;
    if (equals(color, this.e3t())) {
      tmp = this.s3z_1;
    } else {
      tmp = Companion_instance_22.q3z(color);
    }
    return new SpanStyle(tmp, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
  };
  protoOf(SpanStyle).k40 = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, $super) {
    color = color === VOID ? this.e3t() : color;
    fontSize = fontSize === VOID ? this.t3z_1 : fontSize;
    fontWeight = fontWeight === VOID ? this.u3z_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.v3z_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.w3z_1 : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.x3z_1 : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.y3z_1 : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.z3z_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? this.a40_1 : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.b40_1 : textGeometricTransform;
    localeList = localeList === VOID ? this.c40_1 : localeList;
    background = background === VOID ? this.d40_1 : background;
    textDecoration = textDecoration === VOID ? this.e40_1 : textDecoration;
    shadow = shadow === VOID ? this.f40_1 : shadow;
    platformStyle = platformStyle === VOID ? this.g40_1 : platformStyle;
    drawStyle = drawStyle === VOID ? this.h40_1 : drawStyle;
    var tmp;
    if ($super === VOID) {
      tmp = this.j40(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
    } else {
      var tmp_0 = $super.j40;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      tmp = tmp_0.call(this, new Color(color), new TextUnit(fontSize), fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, new TextUnit(letterSpacing), tmp_5 == null ? null : new BaselineShift(tmp_5), textGeometricTransform, localeList, new Color(background), textDecoration, shadow, platformStyle, drawStyle);
    }
    return tmp;
  };
  protoOf(SpanStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SpanStyle))
      return false;
    return this.m40(other) ? this.l40(other) : false;
  };
  protoOf(SpanStyle).m40 = function (other) {
    if (this === other)
      return true;
    if (!equals(this.t3z_1, other.t3z_1))
      return false;
    if (!equals(this.u3z_1, other.u3z_1))
      return false;
    var tmp = this.v3z_1;
    var tmp_0 = tmp == null ? null : new FontStyle(tmp);
    var tmp_1 = other.v3z_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new FontStyle(tmp_1)))
      return false;
    var tmp_2 = this.w3z_1;
    var tmp_3 = tmp_2 == null ? null : new FontSynthesis(tmp_2);
    var tmp_4 = other.w3z_1;
    if (!equals(tmp_3, tmp_4 == null ? null : new FontSynthesis(tmp_4)))
      return false;
    if (!equals(this.x3z_1, other.x3z_1))
      return false;
    if (!(this.y3z_1 == other.y3z_1))
      return false;
    if (!equals(this.z3z_1, other.z3z_1))
      return false;
    var tmp_5 = this.a40_1;
    var tmp_6 = tmp_5 == null ? null : new BaselineShift(tmp_5);
    var tmp_7 = other.a40_1;
    if (!equals(tmp_6, tmp_7 == null ? null : new BaselineShift(tmp_7)))
      return false;
    if (!equals(this.b40_1, other.b40_1))
      return false;
    if (!equals(this.c40_1, other.c40_1))
      return false;
    if (!equals(this.d40_1, other.d40_1))
      return false;
    if (!equals(this.g40_1, other.g40_1))
      return false;
    return true;
  };
  protoOf(SpanStyle).l40 = function (other) {
    if (!equals(this.s3z_1, other.s3z_1))
      return false;
    if (!equals(this.e40_1, other.e40_1))
      return false;
    if (!equals(this.f40_1, other.f40_1))
      return false;
    if (!equals(this.h40_1, other.h40_1))
      return false;
    return true;
  };
  protoOf(SpanStyle).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.e3t());
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.i40();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + getNumberHashCode(this.p3g()) | 0;
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.t3z_1) | 0;
    var tmp_0 = imul(31, result);
    var tmp0_safe_receiver_0 = this.u3z_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.hashCode();
    result = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    var tmp_1 = imul(31, result);
    var tmp2_safe_receiver = this.v3z_1;
    var tmp_2;
    var tmp_3 = tmp2_safe_receiver;
    if ((tmp_3 == null ? null : new FontStyle(tmp_3)) == null) {
      tmp_2 = null;
    } else {
      tmp_2 = FontStyle__hashCode_impl_7qhg4w(tmp2_safe_receiver);
    }
    var tmp3_elvis_lhs = tmp_2;
    result = tmp_1 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_4 = imul(31, result);
    var tmp4_safe_receiver = this.w3z_1;
    var tmp_5;
    var tmp_6 = tmp4_safe_receiver;
    if ((tmp_6 == null ? null : new FontSynthesis(tmp_6)) == null) {
      tmp_5 = null;
    } else {
      tmp_5 = FontSynthesis__hashCode_impl_4wi11v(tmp4_safe_receiver);
    }
    var tmp5_elvis_lhs = tmp_5;
    result = tmp_4 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    var tmp_7 = imul(31, result);
    var tmp6_safe_receiver = this.x3z_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : hashCode(tmp6_safe_receiver);
    result = tmp_7 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    var tmp_8 = imul(31, result);
    var tmp8_safe_receiver = this.y3z_1;
    var tmp9_elvis_lhs = tmp8_safe_receiver == null ? null : getStringHashCode(tmp8_safe_receiver);
    result = tmp_8 + (tmp9_elvis_lhs == null ? 0 : tmp9_elvis_lhs) | 0;
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.z3z_1) | 0;
    var tmp_9 = imul(31, result);
    var tmp10_safe_receiver = this.a40_1;
    var tmp_10;
    var tmp_11 = tmp10_safe_receiver;
    if ((tmp_11 == null ? null : new BaselineShift(tmp_11)) == null) {
      tmp_10 = null;
    } else {
      tmp_10 = BaselineShift__hashCode_impl_g0potx(tmp10_safe_receiver);
    }
    var tmp11_elvis_lhs = tmp_10;
    result = tmp_9 + (tmp11_elvis_lhs == null ? 0 : tmp11_elvis_lhs) | 0;
    var tmp_12 = imul(31, result);
    var tmp12_safe_receiver = this.b40_1;
    var tmp13_elvis_lhs = tmp12_safe_receiver == null ? null : tmp12_safe_receiver.hashCode();
    result = tmp_12 + (tmp13_elvis_lhs == null ? 0 : tmp13_elvis_lhs) | 0;
    var tmp_13 = imul(31, result);
    var tmp14_safe_receiver = this.c40_1;
    var tmp15_elvis_lhs = tmp14_safe_receiver == null ? null : tmp14_safe_receiver.hashCode();
    result = tmp_13 + (tmp15_elvis_lhs == null ? 0 : tmp15_elvis_lhs) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.d40_1) | 0;
    var tmp_14 = imul(31, result);
    var tmp16_safe_receiver = this.e40_1;
    var tmp17_elvis_lhs = tmp16_safe_receiver == null ? null : tmp16_safe_receiver.hashCode();
    result = tmp_14 + (tmp17_elvis_lhs == null ? 0 : tmp17_elvis_lhs) | 0;
    var tmp_15 = imul(31, result);
    var tmp18_safe_receiver = this.f40_1;
    var tmp19_elvis_lhs = tmp18_safe_receiver == null ? null : tmp18_safe_receiver.hashCode();
    result = tmp_15 + (tmp19_elvis_lhs == null ? 0 : tmp19_elvis_lhs) | 0;
    var tmp_16 = imul(31, result);
    var tmp20_safe_receiver = this.g40_1;
    var tmp21_elvis_lhs = tmp20_safe_receiver == null ? null : tmp20_safe_receiver.hashCode();
    result = tmp_16 + (tmp21_elvis_lhs == null ? 0 : tmp21_elvis_lhs) | 0;
    var tmp_17 = imul(31, result);
    var tmp22_safe_receiver = this.h40_1;
    var tmp23_elvis_lhs = tmp22_safe_receiver == null ? null : hashCode(tmp22_safe_receiver);
    result = tmp_17 + (tmp23_elvis_lhs == null ? 0 : tmp23_elvis_lhs) | 0;
    return result;
  };
  protoOf(SpanStyle).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.SpanStyle.toString.<anonymous>' call
    this_0.x5('SpanStyle(');
    this_0.x5('color=' + new Color(this.e3t()) + ', ');
    this_0.x5('brush=' + this.i40() + ', ');
    this_0.x5('alpha=' + this.p3g() + ', ');
    this_0.x5('fontSize=' + new TextUnit(this.t3z_1) + ', ');
    this_0.x5('fontWeight=' + this.u3z_1 + ', ');
    var tmp = this.v3z_1;
    this_0.x5('fontStyle=' + (tmp == null ? null : new FontStyle(tmp)) + ', ');
    var tmp_0 = this.w3z_1;
    this_0.x5('fontSynthesis=' + (tmp_0 == null ? null : new FontSynthesis(tmp_0)) + ', ');
    this_0.x5('fontFamily=' + this.x3z_1 + ', ');
    this_0.x5('fontFeatureSettings=' + this.y3z_1 + ', ');
    this_0.x5('letterSpacing=' + new TextUnit(this.z3z_1) + ', ');
    var tmp_1 = this.a40_1;
    this_0.x5('baselineShift=' + (tmp_1 == null ? null : new BaselineShift(tmp_1)) + ', ');
    this_0.x5('textGeometricTransform=' + this.b40_1 + ', ');
    this_0.x5('localeList=' + this.c40_1 + ', ');
    this_0.x5('background=' + new Color(this.d40_1) + ', ');
    this_0.x5('textDecoration=' + this.e40_1 + ', ');
    this_0.x5('shadow=' + this.f40_1 + ', ');
    this_0.x5('platformStyle=' + this.g40_1 + ', ');
    this_0.x5('drawStyle=' + this.h40_1);
    this_0.x5(')');
    return this_0.toString();
  };
  function fastMerge_0(_this__u8e3s4, color, brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    _init_properties_SpanStyle_kt__ixg4k5();
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    var tmp_4;
    var tmp_5;
    var tmp_6;
    var tmp_7;
    var tmp_8;
    var tmp_9;
    var tmp_10;
    var tmp_11;
    var tmp_12;
    var tmp_13;
    var tmp_14;
    var tmp_15;
    var tmp_16;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    if (!get_isUnspecified(fontSize)) {
      tmp_16 = !equals(fontSize, _this__u8e3s4.t3z_1);
    } else {
      tmp_16 = false;
    }
    if (tmp_16) {
      tmp_15 = true;
    } else {
      var tmp_17;
      var tmp_18;
      if (brush == null) {
        // Inline function 'androidx.compose.ui.graphics.isSpecified' call
        tmp_18 = !equals(_Color___get_value__impl__1pls5m(color), _Color___get_value__impl__1pls5m(Companion_getInstance().i3l_1));
      } else {
        tmp_18 = false;
      }
      if (tmp_18) {
        tmp_17 = !equals(color, _this__u8e3s4.s3z_1.e3t());
      } else {
        tmp_17 = false;
      }
      tmp_15 = tmp_17;
    }
    if (tmp_15) {
      tmp_14 = true;
    } else {
      var tmp_19;
      var tmp_20 = fontStyle;
      if (!((tmp_20 == null ? null : new FontStyle(tmp_20)) == null)) {
        var tmp_21 = fontStyle;
        var tmp_22 = tmp_21 == null ? null : new FontStyle(tmp_21);
        var tmp_23 = _this__u8e3s4.v3z_1;
        tmp_19 = !equals(tmp_22, tmp_23 == null ? null : new FontStyle(tmp_23));
      } else {
        tmp_19 = false;
      }
      tmp_14 = tmp_19;
    }
    if (tmp_14) {
      tmp_13 = true;
    } else {
      tmp_13 = !(fontWeight == null) ? !equals(fontWeight, _this__u8e3s4.u3z_1) : false;
    }
    if (tmp_13) {
      tmp_12 = true;
    } else {
      tmp_12 = !(fontFamily == null) ? !(fontFamily === _this__u8e3s4.x3z_1) : false;
    }
    if (tmp_12) {
      tmp_11 = true;
    } else {
      var tmp_24;
      // Inline function 'androidx.compose.ui.unit.isSpecified' call
      if (!get_isUnspecified(letterSpacing)) {
        tmp_24 = !equals(letterSpacing, _this__u8e3s4.z3z_1);
      } else {
        tmp_24 = false;
      }
      tmp_11 = tmp_24;
    }
    if (tmp_11) {
      tmp_10 = true;
    } else {
      tmp_10 = !(textDecoration == null) ? !equals(textDecoration, _this__u8e3s4.e40_1) : false;
    }
    if (tmp_10) {
      tmp_9 = true;
    } else {
      tmp_9 = !equals(brush, _this__u8e3s4.s3z_1.i40());
    }
    if (tmp_9) {
      tmp_8 = true;
    } else {
      tmp_8 = !(brush == null) ? !(alpha === _this__u8e3s4.s3z_1.p3g()) : false;
    }
    if (tmp_8) {
      tmp_7 = true;
    } else {
      var tmp_25;
      var tmp_26 = fontSynthesis;
      if (!((tmp_26 == null ? null : new FontSynthesis(tmp_26)) == null)) {
        var tmp_27 = fontSynthesis;
        var tmp_28 = tmp_27 == null ? null : new FontSynthesis(tmp_27);
        var tmp_29 = _this__u8e3s4.w3z_1;
        tmp_25 = !equals(tmp_28, tmp_29 == null ? null : new FontSynthesis(tmp_29));
      } else {
        tmp_25 = false;
      }
      tmp_7 = tmp_25;
    }
    if (tmp_7) {
      tmp_6 = true;
    } else {
      tmp_6 = !(fontFeatureSettings == null) ? !(fontFeatureSettings == _this__u8e3s4.y3z_1) : false;
    }
    if (tmp_6) {
      tmp_5 = true;
    } else {
      var tmp_30;
      var tmp_31 = baselineShift;
      if (!((tmp_31 == null ? null : new BaselineShift(tmp_31)) == null)) {
        var tmp_32 = baselineShift;
        var tmp_33 = tmp_32 == null ? null : new BaselineShift(tmp_32);
        var tmp_34 = _this__u8e3s4.a40_1;
        tmp_30 = !equals(tmp_33, tmp_34 == null ? null : new BaselineShift(tmp_34));
      } else {
        tmp_30 = false;
      }
      tmp_5 = tmp_30;
    }
    if (tmp_5) {
      tmp_4 = true;
    } else {
      tmp_4 = !(textGeometricTransform == null) ? !equals(textGeometricTransform, _this__u8e3s4.b40_1) : false;
    }
    if (tmp_4) {
      tmp_3 = true;
    } else {
      tmp_3 = !(localeList == null) ? !equals(localeList, _this__u8e3s4.c40_1) : false;
    }
    if (tmp_3) {
      tmp_2 = true;
    } else {
      var tmp_35;
      // Inline function 'androidx.compose.ui.graphics.isSpecified' call
      if (!equals(_Color___get_value__impl__1pls5m(background), _Color___get_value__impl__1pls5m(Companion_getInstance().i3l_1))) {
        tmp_35 = !equals(background, _this__u8e3s4.d40_1);
      } else {
        tmp_35 = false;
      }
      tmp_2 = tmp_35;
    }
    if (tmp_2) {
      tmp_1 = true;
    } else {
      tmp_1 = !(shadow == null) ? !equals(shadow, _this__u8e3s4.f40_1) : false;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = !(platformStyle == null) ? !equals(platformStyle, _this__u8e3s4.g40_1) : false;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = !(drawStyle == null) ? !equals(drawStyle, _this__u8e3s4.h40_1) : false;
    }
    var requiresAlloc = tmp;
    if (!requiresAlloc) {
      return _this__u8e3s4;
    }
    var tmp_36;
    if (!(brush == null)) {
      tmp_36 = Companion_instance_22.r3z(brush, alpha);
    } else {
      tmp_36 = Companion_instance_22.q3z(color);
    }
    var otherTextForegroundStyle = tmp_36;
    var tmp11_textForegroundStyle = _this__u8e3s4.s3z_1.n40(otherTextForegroundStyle);
    var tmp12_fontFamily = fontFamily == null ? _this__u8e3s4.x3z_1 : fontFamily;
    var tmp13_fontSize = !get_isUnspecified(fontSize) ? fontSize : _this__u8e3s4.t3z_1;
    var tmp14_fontWeight = fontWeight == null ? _this__u8e3s4.u3z_1 : fontWeight;
    var tmp_37;
    var tmp_38 = fontStyle;
    if ((tmp_38 == null ? null : new FontStyle(tmp_38)) == null) {
      tmp_37 = _this__u8e3s4.v3z_1;
    } else {
      tmp_37 = fontStyle;
    }
    var tmp15_fontStyle = tmp_37;
    var tmp_39;
    var tmp_40 = fontSynthesis;
    if ((tmp_40 == null ? null : new FontSynthesis(tmp_40)) == null) {
      tmp_39 = _this__u8e3s4.w3z_1;
    } else {
      tmp_39 = fontSynthesis;
    }
    var tmp16_fontSynthesis = tmp_39;
    var tmp17_fontFeatureSettings = fontFeatureSettings == null ? _this__u8e3s4.y3z_1 : fontFeatureSettings;
    var tmp_41;
    if (!get_isUnspecified(letterSpacing)) {
      tmp_41 = letterSpacing;
    } else {
      tmp_41 = _this__u8e3s4.z3z_1;
    }
    var tmp18_letterSpacing = tmp_41;
    var tmp_42;
    var tmp_43 = baselineShift;
    if ((tmp_43 == null ? null : new BaselineShift(tmp_43)) == null) {
      tmp_42 = _this__u8e3s4.a40_1;
    } else {
      tmp_42 = baselineShift;
    }
    var tmp19_baselineShift = tmp_42;
    var tmp20_textGeometricTransform = textGeometricTransform == null ? _this__u8e3s4.b40_1 : textGeometricTransform;
    var tmp21_localeList = localeList == null ? _this__u8e3s4.c40_1 : localeList;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp_44;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(background), _Color___get_value__impl__1pls5m(Companion_getInstance().i3l_1))) {
      tmp_44 = background;
    } else {
      // Inline function 'androidx.compose.ui.text.fastMerge.<anonymous>' call
      tmp_44 = _this__u8e3s4.d40_1;
    }
    var tmp22_background = tmp_44;
    var tmp23_textDecoration = textDecoration == null ? _this__u8e3s4.e40_1 : textDecoration;
    var tmp24_shadow = shadow == null ? _this__u8e3s4.f40_1 : shadow;
    var tmp25_platformStyle = mergePlatformStyle_0(_this__u8e3s4, platformStyle);
    var tmp26_drawStyle = drawStyle == null ? _this__u8e3s4.h40_1 : drawStyle;
    return new SpanStyle(tmp11_textForegroundStyle, tmp13_fontSize, tmp14_fontWeight, tmp15_fontStyle, tmp16_fontSynthesis, tmp12_fontFamily, tmp17_fontFeatureSettings, tmp18_letterSpacing, tmp19_baselineShift, tmp20_textGeometricTransform, tmp21_localeList, tmp22_background, tmp23_textDecoration, tmp24_shadow, tmp25_platformStyle, tmp26_drawStyle);
  }
  function mergePlatformStyle_0(_this__u8e3s4, other) {
    _init_properties_SpanStyle_kt__ixg4k5();
    if (_this__u8e3s4.g40_1 == null)
      return other;
    if (other == null)
      return _this__u8e3s4.g40_1;
    return _this__u8e3s4.g40_1.p40(other);
  }
  function resolveSpanStyleDefaults(style) {
    _init_properties_SpanStyle_kt__ixg4k5();
    var tmp = style.s3z_1.q40(resolveSpanStyleDefaults$lambda);
    var tmp_0 = get_isUnspecified(style.t3z_1) ? get_DefaultFontSize() : style.t3z_1;
    var tmp0_elvis_lhs = style.u3z_1;
    var tmp_1 = tmp0_elvis_lhs == null ? Companion_getInstance_22().d41_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = style.v3z_1;
    var tmp_2;
    var tmp_3 = tmp1_elvis_lhs;
    if ((tmp_3 == null ? null : new FontStyle(tmp_3)) == null) {
      tmp_2 = Companion_getInstance_20().k41_1;
    } else {
      tmp_2 = tmp1_elvis_lhs;
    }
    var tmp_4 = tmp_2;
    var tmp2_elvis_lhs = style.w3z_1;
    var tmp_5;
    var tmp_6 = tmp2_elvis_lhs;
    if ((tmp_6 == null ? null : new FontSynthesis(tmp_6)) == null) {
      tmp_5 = Companion_getInstance_21().n41_1;
    } else {
      tmp_5 = tmp2_elvis_lhs;
    }
    var tmp_7 = tmp_5;
    var tmp3_elvis_lhs = style.x3z_1;
    var tmp_8 = tmp3_elvis_lhs == null ? Companion_getInstance_16().q41_1 : tmp3_elvis_lhs;
    var tmp4_elvis_lhs = style.y3z_1;
    var tmp_9 = tmp4_elvis_lhs == null ? '' : tmp4_elvis_lhs;
    var tmp_10;
    if (get_isUnspecified(style.z3z_1)) {
      tmp_10 = get_DefaultLetterSpacing();
    } else {
      tmp_10 = style.z3z_1;
    }
    var tmp_11 = tmp_10;
    var tmp5_elvis_lhs = style.a40_1;
    var tmp_12;
    var tmp_13 = tmp5_elvis_lhs;
    if ((tmp_13 == null ? null : new BaselineShift(tmp_13)) == null) {
      tmp_12 = Companion_getInstance_25().x41_1;
    } else {
      tmp_12 = tmp5_elvis_lhs;
    }
    var tmp_14 = tmp_12;
    var tmp6_elvis_lhs = style.b40_1;
    var tmp_15 = tmp6_elvis_lhs == null ? Companion_getInstance_34().y41_1 : tmp6_elvis_lhs;
    var tmp7_elvis_lhs = style.c40_1;
    var tmp_16 = tmp7_elvis_lhs == null ? Companion_instance_13.n1f() : tmp7_elvis_lhs;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var this_0 = style.d40_1;
    var tmp_17;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(this_0), _Color___get_value__impl__1pls5m(Companion_getInstance().i3l_1))) {
      tmp_17 = this_0;
    } else {
      // Inline function 'androidx.compose.ui.text.resolveSpanStyleDefaults.<anonymous>' call
      tmp_17 = get_DefaultBackgroundColor();
    }
    var tmp_18 = tmp_17;
    var tmp8_elvis_lhs = style.e40_1;
    var tmp_19 = tmp8_elvis_lhs == null ? Companion_getInstance_31().z41_1 : tmp8_elvis_lhs;
    var tmp9_elvis_lhs = style.f40_1;
    var tmp_20 = tmp9_elvis_lhs == null ? Companion_getInstance_2().b3o_1 : tmp9_elvis_lhs;
    var tmp10_elvis_lhs = style.h40_1;
    return new SpanStyle(tmp, tmp_0, tmp_1, tmp_4, tmp_7, tmp_8, tmp_9, tmp_11, tmp_14, tmp_15, tmp_16, tmp_18, tmp_19, tmp_20, style.g40_1, tmp10_elvis_lhs == null ? Fill_getInstance() : tmp10_elvis_lhs);
  }
  function resolveSpanStyleDefaults$lambda() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return Companion_instance_22.q3z(get_DefaultColor());
  }
  var properties_initialized_SpanStyle_kt_cqbdlj;
  function _init_properties_SpanStyle_kt__ixg4k5() {
    if (!properties_initialized_SpanStyle_kt_cqbdlj) {
      properties_initialized_SpanStyle_kt_cqbdlj = true;
      DefaultFontSize = get_sp(14);
      DefaultLetterSpacing = get_sp(0);
      DefaultBackgroundColor = Companion_getInstance().h3l_1;
      DefaultColor = Companion_getInstance().w3k_1;
    }
  }
  function SynchronizedObject() {
  }
  function createSynchronizedObject() {
    return new SynchronizedObject();
  }
  function TextLayoutResult(layoutInput, multiParagraph, size) {
    this.c42_1 = layoutInput;
    this.d42_1 = multiParagraph;
    this.e42_1 = size;
    this.f42_1 = this.d42_1.g3x();
    this.g42_1 = this.d42_1.h3x();
    this.h42_1 = this.d42_1.n3w_1;
  }
  protoOf(TextLayoutResult).i42 = function () {
    return this.d42_1.j3w_1 ? true : _IntSize___get_height__impl__prv63b(this.e42_1) < this.d42_1.l3w_1;
  };
  protoOf(TextLayoutResult).j42 = function () {
    return _IntSize___get_width__impl__d9yl4o(this.e42_1) < this.d42_1.k3w_1;
  };
  protoOf(TextLayoutResult).k42 = function () {
    return this.j42() ? true : this.i42();
  };
  protoOf(TextLayoutResult).c3x = function () {
    return this.d42_1.m3w_1;
  };
  protoOf(TextLayoutResult).x3x = function (lineIndex) {
    return this.d42_1.x3x(lineIndex);
  };
  protoOf(TextLayoutResult).z3x = function (lineIndex, visibleEnd) {
    return this.d42_1.z3x(lineIndex, visibleEnd);
  };
  protoOf(TextLayoutResult).l42 = function (lineIndex, visibleEnd, $super) {
    visibleEnd = visibleEnd === VOID ? false : visibleEnd;
    return $super === VOID ? this.z3x(lineIndex, visibleEnd) : $super.z3x.call(this, lineIndex, visibleEnd);
  };
  protoOf(TextLayoutResult).v3x = function (lineIndex) {
    return this.d42_1.v3x(lineIndex);
  };
  protoOf(TextLayoutResult).u3x = function (offset) {
    return this.d42_1.u3x(offset);
  };
  protoOf(TextLayoutResult).n3x = function (vertical) {
    return this.d42_1.n3x(vertical);
  };
  protoOf(TextLayoutResult).q3x = function (offset) {
    return this.d42_1.q3x(offset);
  };
  protoOf(TextLayoutResult).r3x = function (offset) {
    return this.d42_1.r3x(offset);
  };
  protoOf(TextLayoutResult).s3x = function (offset) {
    return this.d42_1.s3x(offset);
  };
  protoOf(TextLayoutResult).x3w = function (start, end) {
    return this.d42_1.x3w(start, end);
  };
  protoOf(TextLayoutResult).m42 = function (layoutInput, size) {
    return new TextLayoutResult(layoutInput, this.d42_1, size);
  };
  protoOf(TextLayoutResult).n42 = function (layoutInput, size, $super) {
    layoutInput = layoutInput === VOID ? this.c42_1 : layoutInput;
    size = size === VOID ? this.e42_1 : size;
    return $super === VOID ? this.m42(layoutInput, size) : $super.m42.call(this, layoutInput, new IntSize(size));
  };
  protoOf(TextLayoutResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextLayoutResult))
      return false;
    if (!this.c42_1.equals(other.c42_1))
      return false;
    if (!equals(this.d42_1, other.d42_1))
      return false;
    if (!equals(this.e42_1, other.e42_1))
      return false;
    if (!(this.f42_1 === other.f42_1))
      return false;
    if (!(this.g42_1 === other.g42_1))
      return false;
    if (!equals(this.h42_1, other.h42_1))
      return false;
    return true;
  };
  protoOf(TextLayoutResult).hashCode = function () {
    var result = this.c42_1.hashCode();
    result = imul(31, result) + hashCode(this.d42_1) | 0;
    result = imul(31, result) + IntSize__hashCode_impl_gm9mta(this.e42_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.f42_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.g42_1) | 0;
    result = imul(31, result) + hashCode(this.h42_1) | 0;
    return result;
  };
  protoOf(TextLayoutResult).toString = function () {
    return 'TextLayoutResult(' + ('layoutInput=' + this.c42_1 + ', ') + ('multiParagraph=' + this.d42_1 + ', ') + ('size=' + new IntSize(this.e42_1) + ', ') + ('firstBaseline=' + this.f42_1 + ', ') + ('lastBaseline=' + this.g42_1 + ', ') + ('placeholderRects=' + this.h42_1) + ')';
  };
  function TextLayoutInput_init_$Init$(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints, $this) {
    TextLayoutInput.call($this, text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, null, fontFamilyResolver, constraints);
    return $this;
  }
  function TextLayoutInput_init_$Create$(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints) {
    return TextLayoutInput_init_$Init$(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints, objectCreate(protoOf(TextLayoutInput)));
  }
  function TextLayoutInput(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, resourceLoader, fontFamilyResolver, constraints) {
    this.o42_1 = text;
    this.p42_1 = style;
    this.q42_1 = placeholders;
    this.r42_1 = maxLines;
    this.s42_1 = softWrap;
    this.t42_1 = overflow;
    this.u42_1 = density;
    this.v42_1 = layoutDirection;
    this.w42_1 = fontFamilyResolver;
    this.x42_1 = constraints;
    this.y42_1 = resourceLoader;
  }
  protoOf(TextLayoutInput).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextLayoutInput))
      return false;
    if (!this.o42_1.equals(other.o42_1))
      return false;
    if (!this.p42_1.equals(other.p42_1))
      return false;
    if (!equals(this.q42_1, other.q42_1))
      return false;
    if (!(this.r42_1 === other.r42_1))
      return false;
    if (!(this.s42_1 === other.s42_1))
      return false;
    if (!(this.t42_1 === other.t42_1))
      return false;
    if (!equals(this.u42_1, other.u42_1))
      return false;
    if (!this.v42_1.equals(other.v42_1))
      return false;
    if (!equals(this.w42_1, other.w42_1))
      return false;
    if (!equals(this.x42_1, other.x42_1))
      return false;
    return true;
  };
  protoOf(TextLayoutInput).hashCode = function () {
    var result = this.o42_1.hashCode();
    result = imul(31, result) + this.p42_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.q42_1) | 0;
    result = imul(31, result) + this.r42_1 | 0;
    result = imul(31, result) + getBooleanHashCode(this.s42_1) | 0;
    result = imul(31, result) + TextOverflow__hashCode_impl_kqdwgt(this.t42_1) | 0;
    result = imul(31, result) + hashCode(this.u42_1) | 0;
    result = imul(31, result) + this.v42_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.w42_1) | 0;
    result = imul(31, result) + Constraints__hashCode_impl_ij7484(this.x42_1) | 0;
    return result;
  };
  protoOf(TextLayoutInput).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.TextLayoutInput.toString.<anonymous>' call
    this_0.x5('TextLayoutInput(');
    this_0.x5('text=' + this.o42_1 + ', ');
    this_0.x5('style=' + this.p42_1 + ', ');
    this_0.x5('placeholders=' + this.q42_1 + ', ');
    this_0.x5('maxLines=' + this.r42_1 + ', ');
    this_0.x5('softWrap=' + this.s42_1 + ', ');
    this_0.x5('overflow=' + new TextOverflow(this.t42_1) + ', ');
    this_0.x5('density=' + this.u42_1 + ', ');
    this_0.x5('layoutDirection=' + this.v42_1 + ', ');
    this_0.x5('fontFamilyResolver=' + this.w42_1 + ', ');
    this_0.x5('constraints=' + new Constraints_0(this.x42_1));
    this_0.x5(')');
    return this_0.toString();
  };
  var DefaultCacheSize;
  function _TextRange___init__impl__h6icbt(packedValue) {
    return packedValue;
  }
  function _get_packedValue__aj623s($this) {
    return $this;
  }
  function _TextRange___get_start__impl__ww4t90($this) {
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    return _get_packedValue__aj623s($this).mb(32).fa();
  }
  function _TextRange___get_end__impl__gcdxpp($this) {
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    return _get_packedValue__aj623s($this).ob(new Long(-1, 0)).fa();
  }
  function _TextRange___get_min__impl__uu95c4($this) {
    return _TextRange___get_start__impl__ww4t90($this) > _TextRange___get_end__impl__gcdxpp($this) ? _TextRange___get_end__impl__gcdxpp($this) : _TextRange___get_start__impl__ww4t90($this);
  }
  function _TextRange___get_max__impl__owm8m($this) {
    return _TextRange___get_start__impl__ww4t90($this) > _TextRange___get_end__impl__gcdxpp($this) ? _TextRange___get_start__impl__ww4t90($this) : _TextRange___get_end__impl__gcdxpp($this);
  }
  function TextRange__toString_impl_pqvlzl($this) {
    return 'TextRange(' + _TextRange___get_start__impl__ww4t90($this) + ', ' + _TextRange___get_end__impl__gcdxpp($this) + ')';
  }
  function Companion_0() {
    Companion_instance_2 = this;
    this.z42_1 = TextRange_1(0);
  }
  var Companion_instance_2;
  function Companion_getInstance_13() {
    if (Companion_instance_2 == null)
      new Companion_0();
    return Companion_instance_2;
  }
  function TextRange__hashCode_impl_3zpp6q($this) {
    return $this.hashCode();
  }
  function TextRange__equals_impl_hkkmea($this, other) {
    if (!(other instanceof TextRange))
      return false;
    var tmp0_other_with_cast = other instanceof TextRange ? other.a43_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function TextRange(packedValue) {
    Companion_getInstance_13();
    this.a43_1 = packedValue;
  }
  protoOf(TextRange).toString = function () {
    return TextRange__toString_impl_pqvlzl(this.a43_1);
  };
  protoOf(TextRange).hashCode = function () {
    return TextRange__hashCode_impl_3zpp6q(this.a43_1);
  };
  protoOf(TextRange).equals = function (other) {
    return TextRange__equals_impl_hkkmea(this.a43_1, other);
  };
  function TextRange_0(start, end) {
    return _TextRange___init__impl__h6icbt(packWithCheck(start, end));
  }
  function TextRange_1(index) {
    return TextRange_0(index, index);
  }
  function packWithCheck(start, end) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(start >= 0)) {
      // Inline function 'androidx.compose.ui.text.packWithCheck.<anonymous>' call
      var message = 'start cannot be negative. [start: ' + start + ', end: ' + end + ']';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(end >= 0)) {
      // Inline function 'androidx.compose.ui.text.packWithCheck.<anonymous>' call
      var message_0 = 'end cannot be negative. [start: ' + start + ', end: ' + end + ']';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'androidx.compose.ui.util.packInts' call
    return toLong(start).lb(32).pb(toLong(end).ob(new Long(-1, 0)));
  }
  function TextStyle_init_$Init$(spanStyle, paragraphStyle, $this) {
    TextStyle.call($this, spanStyle, paragraphStyle, createPlatformTextStyleInternal(spanStyle.g40_1, paragraphStyle.w3v_1));
    return $this;
  }
  function TextStyle_init_$Create$_0(spanStyle, paragraphStyle) {
    return TextStyle_init_$Init$(spanStyle, paragraphStyle, objectCreate(protoOf(TextStyle)));
  }
  function TextStyle_init_$Init$_0(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $this) {
    color = color === VOID ? Companion_getInstance().i3l_1 : color;
    fontSize = fontSize === VOID ? Companion_getInstance_1().j2y_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().j2y_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().i3l_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    textAlign = textAlign === VOID ? Companion_getInstance_30().t3y_1 : textAlign;
    textDirection = textDirection === VOID ? Companion_getInstance_32().g3y_1 : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_1().j2y_1 : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? null : lineHeightStyle;
    lineBreak = lineBreak === VOID ? Companion_getInstance_39().x3y_1 : lineBreak;
    hyphens = hyphens === VOID ? Companion_getInstance_26().a3z_1 : hyphens;
    textMotion = textMotion === VOID ? null : textMotion;
    var tmp = SpanStyle_init_$Create$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.b43_1, drawStyle);
    TextStyle.call($this, tmp, new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.c43_1, lineHeightStyle, lineBreak, hyphens, textMotion), platformStyle);
    return $this;
  }
  function TextStyle_init_$Create$_1(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    return TextStyle_init_$Init$_0(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, objectCreate(protoOf(TextStyle)));
  }
  function Companion_1() {
    Companion_instance_3 = this;
    this.d43_1 = TextStyle_init_$Create$_1();
  }
  var Companion_instance_3;
  function Companion_getInstance_14() {
    if (Companion_instance_3 == null)
      new Companion_1();
    return Companion_instance_3;
  }
  function TextStyle(spanStyle, paragraphStyle, platformStyle) {
    Companion_getInstance_14();
    platformStyle = platformStyle === VOID ? null : platformStyle;
    this.h3y_1 = spanStyle;
    this.i3y_1 = paragraphStyle;
    this.j3y_1 = platformStyle;
  }
  protoOf(TextStyle).e43 = function () {
    return this.h3y_1;
  };
  protoOf(TextStyle).k3y = function () {
    return this.i3y_1;
  };
  protoOf(TextStyle).f43 = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, lineHeightStyle, lineBreak, hyphens, platformStyle, textMotion) {
    var mergedSpanStyle = fastMerge_0(this.h3y_1, color, null, NaN, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.b43_1, drawStyle);
    var mergedParagraphStyle = fastMerge(this.i3y_1, textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.c43_1, lineHeightStyle, lineBreak, hyphens, textMotion);
    if (this.h3y_1 === mergedSpanStyle ? this.i3y_1 === mergedParagraphStyle : false)
      return this;
    return TextStyle_init_$Create$_0(mergedSpanStyle, mergedParagraphStyle);
  };
  protoOf(TextStyle).g43 = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, lineHeightStyle, lineBreak, hyphens, platformStyle, textMotion, $super) {
    color = color === VOID ? Companion_getInstance().i3l_1 : color;
    fontSize = fontSize === VOID ? Companion_getInstance_1().j2y_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().j2y_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().i3l_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    textAlign = textAlign === VOID ? Companion_getInstance_30().t3y_1 : textAlign;
    textDirection = textDirection === VOID ? Companion_getInstance_32().g3y_1 : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_1().j2y_1 : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    lineHeightStyle = lineHeightStyle === VOID ? null : lineHeightStyle;
    lineBreak = lineBreak === VOID ? Companion_getInstance_39().x3y_1 : lineBreak;
    hyphens = hyphens === VOID ? Companion_getInstance_26().a3z_1 : hyphens;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    textMotion = textMotion === VOID ? null : textMotion;
    var tmp;
    if ($super === VOID) {
      tmp = this.f43(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, lineHeightStyle, lineBreak, hyphens, platformStyle, textMotion);
    } else {
      var tmp_0 = $super.f43;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      tmp = tmp_0.call(this, new Color(color), new TextUnit(fontSize), fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, new TextUnit(letterSpacing), tmp_5 == null ? null : new BaselineShift(tmp_5), textGeometricTransform, localeList, new Color(background), textDecoration, shadow, drawStyle, new TextAlign(textAlign), new TextDirection(textDirection), new TextUnit(lineHeight), textIndent, lineHeightStyle, new LineBreak(lineBreak), new Hyphens(hyphens), platformStyle, textMotion);
    }
    return tmp;
  };
  protoOf(TextStyle).l3y = function (other) {
    return TextStyle_init_$Create$_0(this.e43(), this.k3y().b3w(other));
  };
  protoOf(TextStyle).h43 = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    var tmp;
    if (equals(color, this.h3y_1.e3t())) {
      tmp = this.h3y_1.s3z_1;
    } else {
      tmp = Companion_instance_22.q3z(color);
    }
    var tmp_0 = tmp;
    var tmp_1 = new SpanStyle(tmp_0, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.b43_1, drawStyle);
    return new TextStyle(tmp_1, new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.c43_1, lineHeightStyle, lineBreak, hyphens, textMotion), platformStyle);
  };
  protoOf(TextStyle).i43 = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $super) {
    color = color === VOID ? this.h3y_1.e3t() : color;
    fontSize = fontSize === VOID ? this.h3y_1.t3z_1 : fontSize;
    fontWeight = fontWeight === VOID ? this.h3y_1.u3z_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.h3y_1.v3z_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.h3y_1.w3z_1 : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.h3y_1.x3z_1 : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.h3y_1.y3z_1 : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.h3y_1.z3z_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? this.h3y_1.a40_1 : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.h3y_1.b40_1 : textGeometricTransform;
    localeList = localeList === VOID ? this.h3y_1.c40_1 : localeList;
    background = background === VOID ? this.h3y_1.d40_1 : background;
    textDecoration = textDecoration === VOID ? this.h3y_1.e40_1 : textDecoration;
    shadow = shadow === VOID ? this.h3y_1.f40_1 : shadow;
    drawStyle = drawStyle === VOID ? this.h3y_1.h40_1 : drawStyle;
    textAlign = textAlign === VOID ? this.i3y_1.s3v_1 : textAlign;
    textDirection = textDirection === VOID ? this.i3y_1.t3v_1 : textDirection;
    lineHeight = lineHeight === VOID ? this.i3y_1.u3v_1 : lineHeight;
    textIndent = textIndent === VOID ? this.i3y_1.v3v_1 : textIndent;
    platformStyle = platformStyle === VOID ? this.j3y_1 : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? this.i3y_1.x3v_1 : lineHeightStyle;
    lineBreak = lineBreak === VOID ? this.i3y_1.y3v_1 : lineBreak;
    hyphens = hyphens === VOID ? this.i3y_1.z3v_1 : hyphens;
    textMotion = textMotion === VOID ? this.i3y_1.a3w_1 : textMotion;
    var tmp;
    if ($super === VOID) {
      tmp = this.h43(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion);
    } else {
      var tmp_0 = $super.h43;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      tmp = tmp_0.call(this, new Color(color), new TextUnit(fontSize), fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, new TextUnit(letterSpacing), tmp_5 == null ? null : new BaselineShift(tmp_5), textGeometricTransform, localeList, new Color(background), textDecoration, shadow, drawStyle, new TextAlign(textAlign), new TextDirection(textDirection), new TextUnit(lineHeight), textIndent, platformStyle, lineHeightStyle, new LineBreak(lineBreak), new Hyphens(hyphens), textMotion);
    }
    return tmp;
  };
  protoOf(TextStyle).j43 = function (brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    var tmp = SpanStyle_init_$Create$_0(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.b43_1, drawStyle);
    return new TextStyle(tmp, new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.c43_1, lineHeightStyle, lineBreak, hyphens, textMotion), platformStyle);
  };
  protoOf(TextStyle).k43 = function (brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $super) {
    alpha = alpha === VOID ? this.h3y_1.p3g() : alpha;
    fontSize = fontSize === VOID ? this.h3y_1.t3z_1 : fontSize;
    fontWeight = fontWeight === VOID ? this.h3y_1.u3z_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.h3y_1.v3z_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.h3y_1.w3z_1 : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.h3y_1.x3z_1 : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.h3y_1.y3z_1 : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.h3y_1.z3z_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? this.h3y_1.a40_1 : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.h3y_1.b40_1 : textGeometricTransform;
    localeList = localeList === VOID ? this.h3y_1.c40_1 : localeList;
    background = background === VOID ? this.h3y_1.d40_1 : background;
    textDecoration = textDecoration === VOID ? this.h3y_1.e40_1 : textDecoration;
    shadow = shadow === VOID ? this.h3y_1.f40_1 : shadow;
    drawStyle = drawStyle === VOID ? this.h3y_1.h40_1 : drawStyle;
    textAlign = textAlign === VOID ? this.i3y_1.s3v_1 : textAlign;
    textDirection = textDirection === VOID ? this.i3y_1.t3v_1 : textDirection;
    lineHeight = lineHeight === VOID ? this.i3y_1.u3v_1 : lineHeight;
    textIndent = textIndent === VOID ? this.i3y_1.v3v_1 : textIndent;
    platformStyle = platformStyle === VOID ? this.j3y_1 : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? this.i3y_1.x3v_1 : lineHeightStyle;
    lineBreak = lineBreak === VOID ? this.i3y_1.y3v_1 : lineBreak;
    hyphens = hyphens === VOID ? this.i3y_1.z3v_1 : hyphens;
    textMotion = textMotion === VOID ? this.i3y_1.a3w_1 : textMotion;
    var tmp;
    if ($super === VOID) {
      tmp = this.j43(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion);
    } else {
      var tmp_0 = $super.j43;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      tmp = tmp_0.call(this, brush, alpha, new TextUnit(fontSize), fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, new TextUnit(letterSpacing), tmp_5 == null ? null : new BaselineShift(tmp_5), textGeometricTransform, localeList, new Color(background), textDecoration, shadow, drawStyle, new TextAlign(textAlign), new TextDirection(textDirection), new TextUnit(lineHeight), textIndent, platformStyle, lineHeightStyle, new LineBreak(lineBreak), new Hyphens(hyphens), textMotion);
    }
    return tmp;
  };
  protoOf(TextStyle).i40 = function () {
    return this.h3y_1.i40();
  };
  protoOf(TextStyle).e3t = function () {
    return this.h3y_1.e3t();
  };
  protoOf(TextStyle).p3g = function () {
    return this.h3y_1.p3g();
  };
  protoOf(TextStyle).l43 = function () {
    return this.h3y_1.t3z_1;
  };
  protoOf(TextStyle).m43 = function () {
    return this.h3y_1.u3z_1;
  };
  protoOf(TextStyle).n43 = function () {
    return this.h3y_1.v3z_1;
  };
  protoOf(TextStyle).o43 = function () {
    return this.h3y_1.w3z_1;
  };
  protoOf(TextStyle).p43 = function () {
    return this.h3y_1.x3z_1;
  };
  protoOf(TextStyle).q43 = function () {
    return this.h3y_1.y3z_1;
  };
  protoOf(TextStyle).r43 = function () {
    return this.h3y_1.z3z_1;
  };
  protoOf(TextStyle).s43 = function () {
    return this.h3y_1.a40_1;
  };
  protoOf(TextStyle).t43 = function () {
    return this.h3y_1.b40_1;
  };
  protoOf(TextStyle).u43 = function () {
    return this.h3y_1.c40_1;
  };
  protoOf(TextStyle).v43 = function () {
    return this.h3y_1.d40_1;
  };
  protoOf(TextStyle).w43 = function () {
    return this.h3y_1.e40_1;
  };
  protoOf(TextStyle).x43 = function () {
    return this.h3y_1.f40_1;
  };
  protoOf(TextStyle).y43 = function () {
    return this.h3y_1.h40_1;
  };
  protoOf(TextStyle).z43 = function () {
    return this.i3y_1.s3v_1;
  };
  protoOf(TextStyle).a44 = function () {
    return this.i3y_1.t3v_1;
  };
  protoOf(TextStyle).b44 = function () {
    return this.i3y_1.u3v_1;
  };
  protoOf(TextStyle).c44 = function () {
    return this.i3y_1.v3v_1;
  };
  protoOf(TextStyle).d44 = function () {
    return this.i3y_1.x3v_1;
  };
  protoOf(TextStyle).e44 = function () {
    return this.i3y_1.z3v_1;
  };
  protoOf(TextStyle).f44 = function () {
    return this.i3y_1.y3v_1;
  };
  protoOf(TextStyle).g44 = function () {
    return this.i3y_1.a3w_1;
  };
  protoOf(TextStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextStyle))
      return false;
    if (!this.h3y_1.equals(other.h3y_1))
      return false;
    if (!this.i3y_1.equals(other.i3y_1))
      return false;
    if (!equals(this.j3y_1, other.j3y_1))
      return false;
    return true;
  };
  protoOf(TextStyle).h44 = function (other) {
    return this === other ? true : this.i3y_1.equals(other.i3y_1) ? this.h3y_1.m40(other.h3y_1) : false;
  };
  protoOf(TextStyle).i44 = function (other) {
    return this === other ? true : this.h3y_1.l40(other.h3y_1);
  };
  protoOf(TextStyle).hashCode = function () {
    var result = this.h3y_1.hashCode();
    result = imul(31, result) + this.i3y_1.hashCode() | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.j3y_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(TextStyle).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.TextStyle.toString.<anonymous>' call
    this_0.x5('TextStyle(');
    this_0.x5('color=' + new Color(this.e3t()) + ', ');
    this_0.x5('brush=' + this.i40() + ', ');
    this_0.x5('alpha=' + this.p3g() + ', ');
    this_0.x5('fontSize=' + new TextUnit(this.l43()) + ', ');
    this_0.x5('fontWeight=' + this.m43() + ', ');
    var tmp = this.n43();
    this_0.x5('fontStyle=' + (tmp == null ? null : new FontStyle(tmp)) + ', ');
    var tmp_0 = this.o43();
    this_0.x5('fontSynthesis=' + (tmp_0 == null ? null : new FontSynthesis(tmp_0)) + ', ');
    this_0.x5('fontFamily=' + this.p43() + ', ');
    this_0.x5('fontFeatureSettings=' + this.q43() + ', ');
    this_0.x5('letterSpacing=' + new TextUnit(this.r43()) + ', ');
    var tmp_1 = this.s43();
    this_0.x5('baselineShift=' + (tmp_1 == null ? null : new BaselineShift(tmp_1)) + ', ');
    this_0.x5('textGeometricTransform=' + this.t43() + ', ');
    this_0.x5('localeList=' + this.u43() + ', ');
    this_0.x5('background=' + new Color(this.v43()) + ', ');
    this_0.x5('textDecoration=' + this.w43() + ', ');
    this_0.x5('shadow=' + this.x43() + ', ');
    this_0.x5('drawStyle=' + this.y43() + ', ');
    this_0.x5('textAlign=' + new TextAlign(this.z43()) + ', ');
    this_0.x5('textDirection=' + new TextDirection(this.a44()) + ', ');
    this_0.x5('lineHeight=' + new TextUnit(this.b44()) + ', ');
    this_0.x5('textIndent=' + this.c44() + ', ');
    this_0.x5('platformStyle=' + this.j3y_1 + ', ');
    this_0.x5('lineHeightStyle=' + this.d44() + ', ');
    this_0.x5('lineBreak=' + new LineBreak(this.f44()) + ', ');
    this_0.x5('hyphens=' + new Hyphens(this.e44()) + ', ');
    this_0.x5('textMotion=' + this.g44());
    this_0.x5(')');
    return this_0.toString();
  };
  function createPlatformTextStyleInternal(platformSpanStyle, platformParagraphStyle) {
    var tmp;
    if (platformSpanStyle == null ? platformParagraphStyle == null : false) {
      tmp = null;
    } else {
      tmp = createPlatformTextStyle(platformSpanStyle, platformParagraphStyle);
    }
    return tmp;
  }
  function resolveDefaults(style, direction) {
    return new TextStyle(resolveSpanStyleDefaults(style.h3y_1), resolveParagraphStyleDefaults(style.i3y_1, direction), style.j3y_1);
  }
  function resolveTextDirection_0(layoutDirection, textDirection) {
    var tmp;
    if (textDirection === Companion_getInstance_32().d3y_1) {
      var tmp_0;
      switch (layoutDirection.t9_1) {
        case 0:
          tmp_0 = Companion_getInstance_32().e3y_1;
          break;
        case 1:
          tmp_0 = Companion_getInstance_32().f3y_1;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      tmp = tmp_0;
    } else if (textDirection === Companion_getInstance_32().g3y_1) {
      var tmp_1;
      switch (layoutDirection.t9_1) {
        case 0:
          tmp_1 = Companion_getInstance_32().b3y_1;
          break;
        case 1:
          tmp_1 = Companion_getInstance_32().c3y_1;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      tmp = tmp_1;
    } else {
      tmp = textDirection;
    }
    return tmp;
  }
  function get_EMPTY_INTS() {
    _init_properties_ContainerHelpers_kt__6fon4s();
    return EMPTY_INTS;
  }
  var EMPTY_INTS;
  function get_EMPTY_OBJECTS() {
    _init_properties_ContainerHelpers_kt__6fon4s();
    return EMPTY_OBJECTS;
  }
  var EMPTY_OBJECTS;
  function binarySearchInternal(_this__u8e3s4, size, value) {
    _init_properties_ContainerHelpers_kt__6fon4s();
    var lo = 0;
    var hi = size - 1 | 0;
    while (lo <= hi) {
      var mid = (lo + hi | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4[mid];
      if (midVal < value) {
        lo = mid + 1 | 0;
      } else if (midVal > value) {
        hi = mid - 1 | 0;
      } else {
        return mid;
      }
    }
    return ~lo;
  }
  var properties_initialized_ContainerHelpers_kt_9fe6be;
  function _init_properties_ContainerHelpers_kt__6fon4s() {
    if (!properties_initialized_ContainerHelpers_kt_9fe6be) {
      properties_initialized_ContainerHelpers_kt_9fe6be = true;
      EMPTY_INTS = new Int32Array(0);
      // Inline function 'kotlin.arrayOfNulls' call
      EMPTY_OBJECTS = fillArrayVal(Array(0), null);
    }
  }
  function LruCache_init_$Init$(maxSize, $this) {
    LruCache.call($this);
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(maxSize > 0)) {
      // Inline function 'androidx.compose.ui.text.caches.LruCache.<init>.<anonymous>' call
      var message = 'maxSize <= 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    $this.n44_1 = maxSize;
    $this.k44_1 = HashMap_init_$Create$(0, 0.75);
    $this.l44_1 = LinkedHashSet_init_$Create$();
    return $this;
  }
  function LruCache_init_$Create$(maxSize) {
    return LruCache_init_$Init$(maxSize, objectCreate(protoOf(LruCache)));
  }
  function safeSizeOf($this, key, value) {
    var result = $this.t44(key, value);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(result >= 0)) {
      // Inline function 'androidx.compose.ui.text.caches.LruCache.safeSizeOf.<anonymous>' call
      var message = 'Negative size: ' + key + '=' + value;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return result;
  }
  protoOf(LruCache).m = function () {
    // Inline function 'androidx.compose.ui.text.caches.LruCache.synchronizedValue' call
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.j44_1;
    return this.m44_1;
  };
  protoOf(LruCache).x2 = function (key) {
    var mapValue = null;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.j44_1;
    // Inline function 'androidx.compose.ui.text.caches.LruCache.get.<anonymous>' call
    mapValue = this.k44_1.x2(key);
    var tmp;
    if (!(mapValue == null)) {
      this.l44_1.b1(key);
      this.l44_1.a1(key);
      this.r44_1 = this.r44_1 + 1 | 0;
      return mapValue;
    } else {
      var tmp3 = this.s44_1;
      this.s44_1 = tmp3 + 1 | 0;
      tmp = tmp3;
    }
    var createdValue = this.u44(key);
    if (createdValue == null) {
      return null;
    }
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.j44_1;
    this.p44_1 = this.p44_1 + 1 | 0;
    var previousValue = this.k44_1.n2(key, createdValue);
    this.l44_1.b1(key);
    this.l44_1.a1(key);
    var tmp_0;
    if (!(previousValue == null)) {
      this.k44_1.n2(key, previousValue);
      mapValue = previousValue;
      tmp_0 = Unit_instance;
    } else {
      this.m44_1 = this.m() + safeSizeOf(this, key, createdValue) | 0;
      tmp_0 = Unit_instance;
    }
    if (!(mapValue == null)) {
      this.w44(false, key, createdValue, mapValue);
      return mapValue;
    } else {
      this.v44(this.n44_1);
      return createdValue;
    }
  };
  protoOf(LruCache).n2 = function (key, value) {
    if (key == null ? true : value == null) {
      throw NullPointerException_init_$Create$();
    }
    var previous = null;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.j44_1;
    // Inline function 'androidx.compose.ui.text.caches.LruCache.put.<anonymous>' call
    this.o44_1 = this.o44_1 + 1 | 0;
    this.m44_1 = this.m() + safeSizeOf(this, key, value) | 0;
    previous = this.k44_1.n2(key, value);
    if (!(previous == null)) {
      this.m44_1 = this.m() - safeSizeOf(this, key, ensureNotNull(previous)) | 0;
    }
    if (this.l44_1.s(key)) {
      this.l44_1.b1(key);
    }
    this.l44_1.a1(key);
    if (!(previous == null)) {
      this.w44(false, key, ensureNotNull(previous), value);
    }
    this.v44(this.n44_1);
    return previous;
  };
  protoOf(LruCache).v44 = function (maxSize) {
    $l$loop: while (true) {
      var key = null;
      var value = null;
      // Inline function 'androidx.compose.ui.text.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this.j44_1;
      if ((this.m() < 0 ? true : this.k44_1.u() ? !(this.m() === 0) : false) ? true : !(this.k44_1.u() === this.l44_1.u())) {
        throw IllegalStateException_init_$Create$('map/keySet size inconsistency');
      }
      var tmp;
      if (this.m() > maxSize ? !this.k44_1.u() : false) {
        key = first(this.l44_1);
        // Inline function 'kotlin.collections.get' call
        var this_0 = this.k44_1;
        var key_0 = key;
        var tmp0_elvis_lhs = (isInterface(this_0, Map) ? this_0 : THROW_CCE()).x2(key_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          throw IllegalStateException_init_$Create$('inconsistent state');
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        value = tmp_0;
        // Inline function 'kotlin.collections.remove' call
        var this_1 = this.k44_1;
        var key_1 = key;
        (isInterface(this_1, MutableMap) ? this_1 : THROW_CCE()).r2(key_1);
        // Inline function 'kotlin.collections.remove' call
        var this_2 = this.l44_1;
        var element = key;
        (isInterface(this_2, MutableCollection) ? this_2 : THROW_CCE()).b1(element);
        this.m44_1 = this.m() - safeSizeOf(this, ensureNotNull(key), ensureNotNull(value)) | 0;
        this.q44_1 = this.q44_1 + 1 | 0;
        tmp = Unit_instance;
      }
      if (key == null ? value == null : false) {
        break $l$loop;
      } else {
        this.w44(true, ensureNotNull(key), ensureNotNull(value), null);
      }
    }
  };
  protoOf(LruCache).r2 = function (key) {
    if (key == null) {
      throw NullPointerException_init_$Create$();
    }
    var previous = null;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.j44_1;
    previous = this.k44_1.r2(key);
    this.l44_1.b1(key);
    var tmp;
    if (!(previous == null)) {
      this.m44_1 = this.m() - safeSizeOf(this, key, ensureNotNull(previous)) | 0;
      tmp = Unit_instance;
    }
    if (!(previous == null)) {
      this.w44(false, key, ensureNotNull(previous), null);
    }
    return previous;
  };
  protoOf(LruCache).w44 = function (evicted, key, oldValue, newValue) {
  };
  protoOf(LruCache).u44 = function (key) {
    return null;
  };
  protoOf(LruCache).t44 = function (key, value) {
    return 1;
  };
  protoOf(LruCache).toString = function () {
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.j44_1;
    var accesses = this.r44_1 + this.s44_1 | 0;
    var hitPercent = !(accesses === 0) ? imul(100, this.r44_1) / accesses | 0 : 0;
    return 'LruCache[maxSize=' + this.n44_1 + ',hits=' + this.r44_1 + ',misses=' + this.s44_1 + ',' + ('hitRate=' + hitPercent + '%]');
  };
  function LruCache() {
    this.j44_1 = createSynchronizedObject();
    this.m44_1 = 0;
    this.n44_1 = 0;
    this.o44_1 = 0;
    this.p44_1 = 0;
    this.q44_1 = 0;
    this.r44_1 = 0;
    this.s44_1 = 0;
  }
  function SimpleArrayMap_init_$Init$(capacity, $this) {
    capacity = capacity === VOID ? 0 : capacity;
    SimpleArrayMap.call($this);
    if (capacity === 0) {
      $this.x44_1 = get_EMPTY_INTS();
      $this.y44_1 = get_EMPTY_OBJECTS();
    } else {
      $this.x44_1 = new Int32Array(capacity);
      var tmp = $this;
      // Inline function 'kotlin.arrayOfNulls' call
      var size = capacity << 1;
      tmp.y44_1 = fillArrayVal(Array(size), null);
    }
    $this.z44_1 = 0;
    return $this;
  }
  function SimpleArrayMap_init_$Create$(capacity) {
    return SimpleArrayMap_init_$Init$(capacity, objectCreate(protoOf(SimpleArrayMap)));
  }
  protoOf(SimpleArrayMap).a45 = function (key, hash) {
    var N = this.z44_1;
    if (N === 0) {
      return -1;
    }
    var index = binarySearchInternal(this.x44_1, N, hash);
    if (index < 0) {
      return index;
    }
    if (equals(key, this.y44_1[index << 1])) {
      return index;
    }
    var end;
    end = index + 1 | 0;
    while (end < N ? this.x44_1[end] === hash : false) {
      if (equals(key, this.y44_1[end << 1]))
        return end;
      end = end + 1 | 0;
    }
    var i = index - 1 | 0;
    while (i >= 0 ? this.x44_1[i] === hash : false) {
      if (equals(key, this.y44_1[i << 1]))
        return i;
      i = i - 1 | 0;
    }
    return ~end;
  };
  protoOf(SimpleArrayMap).b45 = function () {
    var N = this.z44_1;
    if (N === 0) {
      return -1;
    }
    var index = binarySearchInternal(this.x44_1, N, 0);
    if (index < 0) {
      return index;
    }
    if (null == this.y44_1[index << 1]) {
      return index;
    }
    var end;
    end = index + 1 | 0;
    while (end < N ? this.x44_1[end] === 0 : false) {
      if (null == this.y44_1[end << 1])
        return end;
      end = end + 1 | 0;
    }
    var i = index - 1 | 0;
    while (i >= 0 ? this.x44_1[i] === 0 : false) {
      if (null == this.y44_1[i << 1])
        return i;
      i = i - 1 | 0;
    }
    return ~end;
  };
  protoOf(SimpleArrayMap).u2 = function (key) {
    return this.c45(key) >= 0;
  };
  protoOf(SimpleArrayMap).c45 = function (key) {
    return key == null ? this.b45() : this.a45(key, hashCode(key));
  };
  protoOf(SimpleArrayMap).x2 = function (key) {
    var index = this.c45(key);
    var tmp;
    if (index >= 0) {
      var tmp_0 = this.y44_1[(index << 1) + 1 | 0];
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(SimpleArrayMap).lo = function (index) {
    var tmp = this.y44_1[index << 1];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(SimpleArrayMap).mo = function (index) {
    var tmp = this.y44_1[(index << 1) + 1 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(SimpleArrayMap).u = function () {
    return this.z44_1 <= 0;
  };
  protoOf(SimpleArrayMap).n2 = function (key, value) {
    var osize = this.z44_1;
    var hash;
    var index;
    if (key == null) {
      hash = 0;
      index = this.b45();
    } else {
      hash = hashCode(key);
      index = this.a45(key, hash);
    }
    if (index >= 0) {
      index = (index << 1) + 1 | 0;
      var tmp = this.y44_1[index];
      var old = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
      this.y44_1[index] = value;
      return old;
    }
    index = ~index;
    if (osize >= this.x44_1.length) {
      var n = osize >= 8 ? osize + (osize >> 1) | 0 : osize >= 4 ? 8 : 4;
      if (false) {
        println('SimpleArrayMap put: grow from ' + this.x44_1.length + ' to ' + n);
      }
      this.x44_1 = copyOf(this.x44_1, n);
      this.y44_1 = copyOf_0(this.y44_1, n << 1);
      if (!(osize === this.z44_1)) {
        throw ConcurrentModificationException_init_$Create$();
      }
    }
    if (index < osize) {
      if (false) {
        println('SimpleArrayMap put: move ' + index + '-' + (osize - index | 0) + ' to ' + (index + 1 | 0));
      }
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = this.x44_1;
      var destination = this.x44_1;
      var destinationOffset = index + 1 | 0;
      var startIndex = index;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = this_0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_0, destination, destinationOffset, startIndex, osize);
      // Inline function 'kotlin.collections.copyInto' call
      var this_1 = this.y44_1;
      var destination_0 = this.y44_1;
      var destinationOffset_0 = (index + 1 | 0) << 1;
      var startIndex_0 = index << 1;
      var endIndex = this.z44_1 << 1;
      arrayCopy(this_1, destination_0, destinationOffset_0, startIndex_0, endIndex);
    }
    if (!(osize === this.z44_1) ? true : index >= this.x44_1.length) {
      throw ConcurrentModificationException_init_$Create$();
    }
    this.x44_1[index] = hash;
    this.y44_1[index << 1] = key;
    this.y44_1[(index << 1) + 1 | 0] = value;
    this.z44_1 = this.z44_1 + 1 | 0;
    return null;
  };
  protoOf(SimpleArrayMap).equals = function (other) {
    if (this === other) {
      return true;
    }
    try {
      if (other instanceof SimpleArrayMap) {
        var map = other instanceof SimpleArrayMap ? other : THROW_CCE();
        if (!(this.z44_1 === map.z44_1)) {
          return false;
        }
        var inductionVariable = 0;
        var last = this.z44_1;
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var key = this.lo(i);
            var mine = this.mo(i);
            var theirs = map.x2(key);
            if (mine == null) {
              if (!(theirs == null) ? true : !map.u2(key)) {
                return false;
              }
            } else if (!equals(mine, theirs)) {
              return false;
            }
          }
           while (inductionVariable < last);
        return true;
      } else {
        if (!(other == null) ? isInterface(other, Map) : false) {
          var map_0 = other;
          if (!(this.z44_1 === map_0.m())) {
            return false;
          }
          var inductionVariable_0 = 0;
          var last_0 = this.z44_1;
          if (inductionVariable_0 < last_0)
            do {
              var i_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              var key_0 = this.lo(i_0);
              var mine_0 = this.mo(i_0);
              // Inline function 'kotlin.collections.get' call
              var theirs_0 = (isInterface(map_0, Map) ? map_0 : THROW_CCE()).x2(key_0);
              if (mine_0 == null) {
                var tmp;
                if (!(theirs_0 == null)) {
                  tmp = true;
                } else {
                  // Inline function 'kotlin.collections.containsKey' call
                  tmp = !(isInterface(map_0, Map) ? map_0 : THROW_CCE()).u2(key_0);
                }
                if (tmp) {
                  return false;
                }
              } else if (!equals(mine_0, theirs_0)) {
                return false;
              }
            }
             while (inductionVariable_0 < last_0);
          return true;
        }
      }
    } catch ($p) {
      if ($p instanceof NullPointerException) {
        var ignored = $p;
      } else {
        if ($p instanceof ClassCastException) {
          var ignored_0 = $p;
        } else {
          throw $p;
        }
      }
    }
    return false;
  };
  protoOf(SimpleArrayMap).hashCode = function () {
    var hashes = this.x44_1;
    var array = this.y44_1;
    var result = 0;
    var i = 0;
    var v = 1;
    var s = this.z44_1;
    while (i < s) {
      var value = array[v];
      var tmp = result;
      var tmp_0 = hashes[i];
      var tmp1_elvis_lhs = value == null ? null : hashCode(value);
      result = tmp + (tmp_0 ^ (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs)) | 0;
      i = i + 1 | 0;
      v = v + 2 | 0;
    }
    return result;
  };
  protoOf(SimpleArrayMap).toString = function () {
    if (this.u()) {
      return '{}';
    }
    var buffer = StringBuilder_init_$Create$_0(imul(this.z44_1, 28));
    buffer.y5(_Char___init__impl__6a9atx(123));
    var inductionVariable = 0;
    var last = this.z44_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (i > 0) {
          buffer.x5(', ');
        }
        var key = this.lo(i);
        if (!(key === this)) {
          buffer.w5(key);
        } else {
          buffer.x5('(this Map)');
        }
        buffer.y5(_Char___init__impl__6a9atx(61));
        var value = this.mo(i);
        if (!(value === this)) {
          buffer.w5(value);
        } else {
          buffer.x5('(this Map)');
        }
      }
       while (inductionVariable < last);
    buffer.y5(_Char___init__impl__6a9atx(125));
    return buffer.toString();
  };
  function SimpleArrayMap() {
    this.z44_1 = 0;
  }
  function Companion_2() {
    Companion_instance_4 = this;
    this.d45_1 = new Long(15000, 0);
  }
  var Companion_instance_4;
  function Companion_getInstance_15() {
    if (Companion_instance_4 == null)
      new Companion_2();
    return Companion_instance_4;
  }
  function Font() {
  }
  function Companion_3() {
    Companion_instance_5 = this;
    this.q41_1 = new DefaultFontFamily();
    this.r41_1 = new GenericFontFamily('sans-serif', 'FontFamily.SansSerif');
    this.s41_1 = new GenericFontFamily('serif', 'FontFamily.Serif');
    this.t41_1 = new GenericFontFamily('monospace', 'FontFamily.Monospace');
    this.u41_1 = new GenericFontFamily('cursive', 'FontFamily.Cursive');
  }
  var Companion_instance_5;
  function Companion_getInstance_16() {
    if (Companion_instance_5 == null)
      new Companion_3();
    return Companion_instance_5;
  }
  function FontFamily(canLoadSynchronously) {
    Companion_getInstance_16();
    this.j45_1 = canLoadSynchronously;
  }
  function SystemFontFamily() {
    FontFamily.call(this, true);
  }
  function DefaultFontFamily() {
    SystemFontFamily.call(this);
  }
  protoOf(DefaultFontFamily).toString = function () {
    return 'FontFamily.Default';
  };
  function GenericFontFamily(name, fontFamilyName) {
    SystemFontFamily.call(this);
    this.l45_1 = name;
    this.m45_1 = fontFamilyName;
  }
  protoOf(GenericFontFamily).toString = function () {
    return this.m45_1;
  };
  function FontListFontFamily() {
  }
  function FileBasedFontFamily() {
  }
  function LoadedFontFamily() {
  }
  function get_GlobalTypefaceRequestCache() {
    _init_properties_FontFamilyResolver_kt__lawdt3();
    return GlobalTypefaceRequestCache;
  }
  var GlobalTypefaceRequestCache;
  function get_GlobalAsyncTypefaceCache() {
    _init_properties_FontFamilyResolver_kt__lawdt3();
    return GlobalAsyncTypefaceCache;
  }
  var GlobalAsyncTypefaceCache;
  function TypefaceRequestCache$runCached$lambda(this$0, $typefaceRequest) {
    return function (finalResult) {
      // Inline function 'androidx.compose.ui.text.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.n45_1;
      var tmp;
      if (finalResult.p45()) {
        this$0.o45_1.n2($typefaceRequest, finalResult);
        tmp = Unit_instance;
      } else {
        this$0.o45_1.r2($typefaceRequest);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function TypefaceRequestCache() {
    this.n45_1 = createSynchronizedObject();
    this.o45_1 = LruCache_init_$Create$(16);
  }
  protoOf(TypefaceRequestCache).q45 = function (typefaceRequest, resolveTypeface) {
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.n45_1;
    // Inline function 'androidx.compose.ui.text.font.TypefaceRequestCache.runCached.<anonymous>' call
    var tmp0_safe_receiver = this.o45_1.x2(typefaceRequest);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.font.TypefaceRequestCache.runCached.<anonymous>.<anonymous>' call
      var tmp_0;
      if (tmp0_safe_receiver.p45()) {
        return tmp0_safe_receiver;
      } else {
        tmp_0 = this.o45_1.r2(typefaceRequest);
      }
      tmp = tmp_0;
    }
    var tmp_1;
    try {
      tmp_1 = resolveTypeface(TypefaceRequestCache$runCached$lambda(this, typefaceRequest));
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var cause = $p;
        throw new FontLoadFailedException(typefaceRequest.r45_1, cause);
      } else {
        throw $p;
      }
    }
    var currentTypefaceResult = tmp_1;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.n45_1;
    var tmp_3;
    if (this.o45_1.x2(typefaceRequest) == null ? currentTypefaceResult.p45() : false) {
      this.o45_1.n2(typefaceRequest, currentTypefaceResult);
      tmp_3 = Unit_instance;
    }
    return currentTypefaceResult;
  };
  function TypefaceRequest(fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey) {
    this.r45_1 = fontFamily;
    this.s45_1 = fontWeight;
    this.t45_1 = fontStyle;
    this.u45_1 = fontSynthesis;
    this.v45_1 = resourceLoaderCacheKey;
  }
  protoOf(TypefaceRequest).w45 = function (fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey) {
    return new TypefaceRequest(fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey);
  };
  protoOf(TypefaceRequest).x45 = function (fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey, $super) {
    fontFamily = fontFamily === VOID ? this.r45_1 : fontFamily;
    fontWeight = fontWeight === VOID ? this.s45_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.t45_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.u45_1 : fontSynthesis;
    resourceLoaderCacheKey = resourceLoaderCacheKey === VOID ? this.v45_1 : resourceLoaderCacheKey;
    return $super === VOID ? this.w45(fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey) : $super.w45.call(this, fontFamily, fontWeight, new FontStyle(fontStyle), new FontSynthesis(fontSynthesis), resourceLoaderCacheKey);
  };
  protoOf(TypefaceRequest).toString = function () {
    return 'TypefaceRequest(fontFamily=' + this.r45_1 + ', fontWeight=' + this.s45_1 + ', fontStyle=' + new FontStyle(this.t45_1) + ', fontSynthesis=' + new FontSynthesis(this.u45_1) + ', resourceLoaderCacheKey=' + toString_0(this.v45_1) + ')';
  };
  protoOf(TypefaceRequest).hashCode = function () {
    var result = this.r45_1 == null ? 0 : hashCode(this.r45_1);
    result = imul(result, 31) + this.s45_1.hashCode() | 0;
    result = imul(result, 31) + FontStyle__hashCode_impl_7qhg4w(this.t45_1) | 0;
    result = imul(result, 31) + FontSynthesis__hashCode_impl_4wi11v(this.u45_1) | 0;
    result = imul(result, 31) + (this.v45_1 == null ? 0 : hashCode(this.v45_1)) | 0;
    return result;
  };
  protoOf(TypefaceRequest).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TypefaceRequest))
      return false;
    var tmp0_other_with_cast = other instanceof TypefaceRequest ? other : THROW_CCE();
    if (!equals(this.r45_1, tmp0_other_with_cast.r45_1))
      return false;
    if (!this.s45_1.equals(tmp0_other_with_cast.s45_1))
      return false;
    if (!(this.t45_1 === tmp0_other_with_cast.t45_1))
      return false;
    if (!(this.u45_1 === tmp0_other_with_cast.u45_1))
      return false;
    if (!equals(this.v45_1, tmp0_other_with_cast.v45_1))
      return false;
    return true;
  };
  function Immutable(value, cacheable) {
    cacheable = cacheable === VOID ? true : cacheable;
    this.y45_1 = value;
    this.z45_1 = cacheable;
  }
  protoOf(Immutable).q2 = function () {
    return this.y45_1;
  };
  protoOf(Immutable).p45 = function () {
    return this.z45_1;
  };
  function Async(current) {
    this.a46_1 = current;
  }
  protoOf(Async).q2 = function () {
    return this.a46_1.q2();
  };
  protoOf(Async).p45 = function () {
    return this.a46_1.h46_1;
  };
  function FontLoadFailedException(fontFamily, cause) {
    cause = cause === VOID ? null : cause;
    IllegalStateException_init_$Init$('Failed to load font ' + fontFamily + '. Is it installed on the system?', cause, this);
    captureStack(this, FontLoadFailedException);
  }
  function resolve($this, typefaceRequest) {
    var result = $this.k46_1.q45(typefaceRequest, FontFamilyResolverImpl$resolve$lambda($this, typefaceRequest));
    return result;
  }
  function FontFamilyResolverImpl$createDefaultTypeface$lambda(this$0) {
    return function (it) {
      return resolve(this$0, it.x45(null)).q2();
    };
  }
  function FontFamilyResolverImpl$resolve$lambda(this$0, $typefaceRequest) {
    return function (onAsyncCompletion) {
      var tmp0_elvis_lhs = this$0.l46_1.q46($typefaceRequest, this$0.i46_1, onAsyncCompletion, this$0.n46_1);
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? this$0.m46_1.q46($typefaceRequest, this$0.i46_1, onAsyncCompletion, this$0.n46_1) : tmp0_elvis_lhs;
      var tmp;
      if (tmp1_elvis_lhs == null) {
        throw new FontLoadFailedException($typefaceRequest.r45_1);
      } else {
        tmp = tmp1_elvis_lhs;
      }
      return tmp;
    };
  }
  function FontFamilyResolverImpl(platformFontLoader, platformResolveInterceptor, typefaceRequestCache, fontListFontFamilyTypefaceAdapter, platformFamilyTypefaceAdapter) {
    platformResolveInterceptor = platformResolveInterceptor === VOID ? Companion_getInstance_17().r46_1 : platformResolveInterceptor;
    typefaceRequestCache = typefaceRequestCache === VOID ? get_GlobalTypefaceRequestCache() : typefaceRequestCache;
    fontListFontFamilyTypefaceAdapter = fontListFontFamilyTypefaceAdapter === VOID ? new FontListFontFamilyTypefaceAdapter(get_GlobalAsyncTypefaceCache()) : fontListFontFamilyTypefaceAdapter;
    platformFamilyTypefaceAdapter = platformFamilyTypefaceAdapter === VOID ? new PlatformFontFamilyTypefaceAdapter() : platformFamilyTypefaceAdapter;
    this.i46_1 = platformFontLoader;
    this.j46_1 = platformResolveInterceptor;
    this.k46_1 = typefaceRequestCache;
    this.l46_1 = fontListFontFamilyTypefaceAdapter;
    this.m46_1 = platformFamilyTypefaceAdapter;
    var tmp = this;
    tmp.n46_1 = FontFamilyResolverImpl$createDefaultTypeface$lambda(this);
  }
  protoOf(FontFamilyResolverImpl).s46 = function (fontFamily, fontWeight, fontStyle, fontSynthesis) {
    return resolve(this, new TypefaceRequest(this.j46_1.t46(fontFamily), this.j46_1.u46(fontWeight), this.j46_1.v46(fontStyle), this.j46_1.w46(fontSynthesis), this.i46_1.x46()));
  };
  function PlatformResolveInterceptor$Companion$Default$1() {
  }
  function Companion_4() {
    Companion_instance_6 = this;
    var tmp = this;
    tmp.r46_1 = new PlatformResolveInterceptor$Companion$Default$1();
  }
  var Companion_instance_6;
  function Companion_getInstance_17() {
    if (Companion_instance_6 == null)
      new Companion_4();
    return Companion_instance_6;
  }
  function PlatformResolveInterceptor() {
  }
  var properties_initialized_FontFamilyResolver_kt_43uw85;
  function _init_properties_FontFamilyResolver_kt__lawdt3() {
    if (!properties_initialized_FontFamilyResolver_kt_43uw85) {
      properties_initialized_FontFamilyResolver_kt_43uw85 = true;
      GlobalTypefaceRequestCache = new TypefaceRequestCache();
      GlobalAsyncTypefaceCache = new AsyncTypefaceCache();
    }
  }
  function _AsyncTypefaceResult___init__impl__h4msax(result) {
    return result;
  }
  function _AsyncTypefaceResult___get_result__impl__kpcqqb($this) {
    return $this;
  }
  function _AsyncTypefaceResult___get_isPermanentFailure__impl__sthpca($this) {
    return _AsyncTypefaceResult___get_result__impl__kpcqqb($this) == null;
  }
  function AsyncTypefaceResult__toString_impl_imltdd($this) {
    return 'AsyncTypefaceResult(result=' + toString_0($this) + ')';
  }
  function AsyncTypefaceResult__hashCode_impl_34k3fi($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function AsyncTypefaceResult__equals_impl_4qqxz2($this, other) {
    if (!(other instanceof AsyncTypefaceResult))
      return false;
    var tmp0_other_with_cast = other instanceof AsyncTypefaceResult ? other.y46_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function AsyncTypefaceResult(result) {
    this.y46_1 = result;
  }
  protoOf(AsyncTypefaceResult).toString = function () {
    return AsyncTypefaceResult__toString_impl_imltdd(this.y46_1);
  };
  protoOf(AsyncTypefaceResult).hashCode = function () {
    return AsyncTypefaceResult__hashCode_impl_34k3fi(this.y46_1);
  };
  protoOf(AsyncTypefaceResult).equals = function (other) {
    return AsyncTypefaceResult__equals_impl_4qqxz2(this.y46_1, other);
  };
  function Key(font, loaderKey) {
    this.z46_1 = font;
    this.a47_1 = loaderKey;
  }
  protoOf(Key).toString = function () {
    return 'Key(font=' + this.z46_1 + ', loaderKey=' + toString_0(this.a47_1) + ')';
  };
  protoOf(Key).hashCode = function () {
    var result = hashCode(this.z46_1);
    result = imul(result, 31) + (this.a47_1 == null ? 0 : hashCode(this.a47_1)) | 0;
    return result;
  };
  protoOf(Key).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Key))
      return false;
    var tmp0_other_with_cast = other instanceof Key ? other : THROW_CCE();
    if (!equals(this.z46_1, tmp0_other_with_cast.z46_1))
      return false;
    if (!equals(this.a47_1, tmp0_other_with_cast.a47_1))
      return false;
    return true;
  };
  function $runCachedCOROUTINE$1(_this__u8e3s4, font, platformFontLoader, forever, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j47_1 = _this__u8e3s4;
    this.k47_1 = font;
    this.l47_1 = platformFontLoader;
    this.m47_1 = forever;
    this.n47_1 = block;
  }
  protoOf($runCachedCOROUTINE$1).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 2;
            this.o47_1 = new Key(this.k47_1, this.l47_1.x46());
            this.j47_1.s47_1;
            var tmp0_elvis_lhs = this.j47_1.q47_1.x2(this.o47_1);
            var priorResult = tmp0_elvis_lhs == null ? this.j47_1.r47_1.x2(this.o47_1) : tmp0_elvis_lhs;
            if (!(priorResult == null)) {
              return _AsyncTypefaceResult___get_result__impl__kpcqqb(priorResult.y46_1);
            }

            this.ac_1 = 1;
            suspendResult = this.n47_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var this_0 = suspendResult;
            this.j47_1.s47_1;
            if (this_0 == null) {
              this.j47_1.r47_1.n2(this.o47_1, new AsyncTypefaceResult(this.j47_1.p47_1));
            } else if (this.m47_1) {
              this.j47_1.r47_1.n2(this.o47_1, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(this_0)));
            } else {
              this.j47_1.q47_1.n2(this.o47_1, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(this_0)));
            }

            return this_0;
          case 2:
            throw this.dc_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.bc_1 === 2) {
          throw e;
        } else {
          this.ac_1 = this.bc_1;
          this.dc_1 = e;
        }
      }
     while (true);
  };
  function AsyncTypefaceCache() {
    this.p47_1 = _AsyncTypefaceResult___init__impl__h4msax(null);
    this.q47_1 = LruCache_init_$Create$(16);
    this.r47_1 = SimpleArrayMap_init_$Create$();
    this.s47_1 = createSynchronizedObject();
  }
  protoOf(AsyncTypefaceCache).t47 = function (font, platformFontLoader, result, forever) {
    var key = new Key(font, platformFontLoader.x46());
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.s47_1;
    // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.put.<anonymous>' call
    var tmp;
    if (result == null) {
      tmp = this.r47_1.n2(key, new AsyncTypefaceResult(this.p47_1));
    } else if (forever) {
      tmp = this.r47_1.n2(key, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(result)));
    } else {
      tmp = this.q47_1.n2(key, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(result)));
    }
  };
  protoOf(AsyncTypefaceCache).u47 = function (font, platformFontLoader, result, forever, $super) {
    forever = forever === VOID ? false : forever;
    var tmp;
    if ($super === VOID) {
      this.t47(font, platformFontLoader, result, forever);
      tmp = Unit_instance;
    } else {
      tmp = $super.t47.call(this, font, platformFontLoader, result, forever);
    }
    return tmp;
  };
  protoOf(AsyncTypefaceCache).v47 = function (font, platformFontLoader) {
    var key = new Key(font, platformFontLoader.x46());
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.s47_1;
    // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.get.<anonymous>' call
    var tmp0_elvis_lhs = this.q47_1.x2(key);
    return tmp0_elvis_lhs == null ? this.r47_1.x2(key) : tmp0_elvis_lhs;
  };
  protoOf(AsyncTypefaceCache).w47 = function (font, platformFontLoader, forever, block, $completion) {
    var tmp = new $runCachedCOROUTINE$1(this, font, platformFontLoader, forever, block, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  function _set_value__lx0xdg($this, _set____db54di) {
    var this_0 = $this.g46_1;
    value$factory();
    this_0.d1a(_set____db54di);
    return Unit_instance;
  }
  function AsyncFontListLoader$load$slambda(this$0, $font, resultContinuation) {
    this.f48_1 = this$0;
    this.g48_1 = $font;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncFontListLoader$load$slambda).h48 = function ($completion) {
    var tmp = this.i48($completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(AsyncFontListLoader$load$slambda).j48 = function ($completion) {
    return this.h48($completion);
  };
  protoOf(AsyncFontListLoader$load$slambda).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 2;
            this.ac_1 = 1;
            suspendResult = this.f48_1.k48(this.g48_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.dc_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.bc_1 === 2) {
          throw e;
        } else {
          this.ac_1 = this.bc_1;
          this.dc_1 = e;
        }
      }
     while (true);
  };
  protoOf(AsyncFontListLoader$load$slambda).i48 = function (completion) {
    return new AsyncFontListLoader$load$slambda(this.f48_1, this.g48_1, completion);
  };
  function AsyncFontListLoader$load$slambda_0(this$0, $font, resultContinuation) {
    var i = new AsyncFontListLoader$load$slambda(this$0, $font, resultContinuation);
    var l = function ($completion) {
      return i.h48($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AsyncFontListLoader$loadWithTimeoutOrNull$slambda(this$0, $this_loadWithTimeoutOrNull, resultContinuation) {
    this.t48_1 = this$0;
    this.u48_1 = $this_loadWithTimeoutOrNull;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).w48 = function ($this$withTimeoutOrNull, $completion) {
    var tmp = this.k20($this$withTimeoutOrNull, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).yc = function (p1, $completion) {
    return this.w48((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 2;
            this.ac_1 = 1;
            suspendResult = this.t48_1.f46_1.x48(this.u48_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.dc_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.bc_1 === 2) {
          throw e;
        } else {
          this.ac_1 = this.bc_1;
          this.dc_1 = e;
        }
      }
     while (true);
  };
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).k20 = function ($this$withTimeoutOrNull, completion) {
    var i = new AsyncFontListLoader$loadWithTimeoutOrNull$slambda(this.t48_1, this.u48_1, completion);
    i.v48_1 = $this$withTimeoutOrNull;
    return i;
  };
  function AsyncFontListLoader$loadWithTimeoutOrNull$slambda_0(this$0, $this_loadWithTimeoutOrNull, resultContinuation) {
    var i = new AsyncFontListLoader$loadWithTimeoutOrNull$slambda(this$0, $this_loadWithTimeoutOrNull, resultContinuation);
    var l = function ($this$withTimeoutOrNull, $completion) {
      return i.w48($this$withTimeoutOrNull, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $loadCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g49_1 = _this__u8e3s4;
  }
  protoOf($loadCOROUTINE$2).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 12;
            this.ac_1 = 1;
            continue $sm;
          case 1:
            this.ac_1 = 2;
            continue $sm;
          case 2:
            this.bc_1 = 11;
            var tmp_0 = this;
            tmp_0.j49_1 = this.g49_1.b46_1;
            this.k49_1 = get_indices(this.j49_1).o();
            this.ac_1 = 3;
            continue $sm;
          case 3:
            if (!this.k49_1.d1()) {
              this.ac_1 = 9;
              continue $sm;
            }

            this.l49_1 = this.k49_1.f1();
            this.m49_1 = this.j49_1.n(this.l49_1);
            var tmp_1 = this;
            tmp_1.n49_1 = this.m49_1;
            if (this.n49_1.f45() === Companion_getInstance_19().i45_1) {
              this.ac_1 = 4;
              suspendResult = this.g49_1.d46_1.w47(this.n49_1, this.g49_1.f46_1, false, AsyncFontListLoader$load$slambda_0(this.g49_1, this.n49_1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.ac_1 = 7;
              continue $sm;
            }

          case 4:
            this.o49_1 = suspendResult;
            if (!(this.o49_1 == null)) {
              _set_value__lx0xdg(this.g49_1, synthesizeTypeface(this.g49_1.c46_1.u45_1, this.o49_1, this.n49_1, this.g49_1.c46_1.s45_1, this.g49_1.c46_1.t45_1));
              this.i49_1 = Unit_instance;
              this.bc_1 = 12;
              this.ac_1 = 8;
              continue $sm;
            } else {
              this.ac_1 = 5;
              suspendResult = yield_0(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 5:
            this.ac_1 = 6;
            continue $sm;
          case 6:
            this.ac_1 = 7;
            continue $sm;
          case 7:
            this.ac_1 = 3;
            continue $sm;
          case 8:
            this.bc_1 = 12;
            var shouldCache = get_isActive(this.s6());
            this.g49_1.h46_1 = false;
            this.g49_1.e46_1(new Immutable(this.g49_1.q2(), shouldCache));
            return Unit_instance;
          case 9:
            this.h49_1 = Unit_instance;
            this.bc_1 = 12;
            this.ac_1 = 10;
            continue $sm;
          case 10:
            this.bc_1 = 12;
            var shouldCache_0 = get_isActive(this.s6());
            this.g49_1.h46_1 = false;
            this.g49_1.e46_1(new Immutable(this.g49_1.q2(), shouldCache_0));
            return Unit_instance;
          case 11:
            this.bc_1 = 12;
            var t = this.dc_1;
            var shouldCache_1 = get_isActive(this.s6());
            this.g49_1.h46_1 = false;
            this.g49_1.e46_1(new Immutable(this.g49_1.q2(), shouldCache_1));
            throw t;
          case 12:
            throw this.dc_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.bc_1 === 12) {
          throw e;
        } else {
          this.ac_1 = this.bc_1;
          this.dc_1 = e;
        }
      }
     while (true);
  };
  function $loadWithTimeoutOrNullCOROUTINE$3(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x49_1 = _this__u8e3s4;
    this.y49_1 = _this__u8e3s4_0;
  }
  protoOf($loadWithTimeoutOrNullCOROUTINE$3).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 3;
            this.bc_1 = 2;
            this.ac_1 = 1;
            Companion_getInstance_15();
            var tmp_0 = new Long(15000, 0);
            suspendResult = withTimeoutOrNull(tmp_0, AsyncFontListLoader$loadWithTimeoutOrNull$slambda_0(this.x49_1, this.y49_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.z49_1 = suspendResult;
            this.bc_1 = 3;
            this.ac_1 = 4;
            continue $sm;
          case 2:
            this.bc_1 = 3;
            var tmp_1 = this.dc_1;
            if (tmp_1 instanceof CancellationException) {
              var cancel = this.dc_1;
              var tmp_2 = this;
              var tmp_3;
              if (get_isActive(this.s6())) {
                tmp_3 = null;
              } else {
                throw cancel;
              }
              tmp_2.z49_1 = tmp_3;
              this.ac_1 = 4;
              continue $sm;
            } else {
              var tmp_4 = this.dc_1;
              if (tmp_4 instanceof Exception) {
                var uncaughtFontLoadException = this.dc_1;
                var tmp_5 = this;
                var tmp0_safe_receiver = this.s6().hc(Key_instance);
                if (tmp0_safe_receiver == null)
                  null;
                else {
                  tmp0_safe_receiver.nv(this.s6(), IllegalStateException_init_$Create$_0('Unable to load font ' + this.y49_1, uncaughtFontLoadException));
                }
                tmp_5.z49_1 = null;
                this.ac_1 = 4;
                continue $sm;
              } else {
                throw this.dc_1;
              }
            }

          case 3:
            throw this.dc_1;
          case 4:
            this.bc_1 = 3;
            return this.z49_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.bc_1 === 3) {
          throw e;
        } else {
          this.ac_1 = this.bc_1;
          this.dc_1 = e;
        }
      }
     while (true);
  };
  function AsyncFontListLoader(fontList, initialType, typefaceRequest, asyncTypefaceCache, onCompletion, platformFontLoader) {
    this.b46_1 = fontList;
    this.c46_1 = typefaceRequest;
    this.d46_1 = asyncTypefaceCache;
    this.e46_1 = onCompletion;
    this.f46_1 = platformFontLoader;
    this.g46_1 = mutableStateOf(initialType);
    this.h46_1 = true;
  }
  protoOf(AsyncFontListLoader).q2 = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.g46_1;
    value$factory_0();
    return this_0.q2();
  };
  protoOf(AsyncFontListLoader).a4a = function ($completion) {
    var tmp = new $loadCOROUTINE$2(this, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(AsyncFontListLoader).k48 = function (_this__u8e3s4, $completion) {
    var tmp = new $loadWithTimeoutOrNullCOROUTINE$3(this, _this__u8e3s4, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  function _no_name_provided__qut3iv() {
    AbstractCoroutineContextElement.call(this, Key_instance);
  }
  protoOf(_no_name_provided__qut3iv).nv = function (context, exception) {
    // Inline function 'androidx.compose.ui.text.font.Companion.DropExceptionHandler.<anonymous>' call
    return Unit_instance;
  };
  function Companion_5() {
    Companion_instance_7 = this;
    this.c4a_1 = new FontMatcher();
    var tmp = this;
    // Inline function 'kotlinx.coroutines.CoroutineExceptionHandler' call
    tmp.d4a_1 = new _no_name_provided__qut3iv();
  }
  var Companion_instance_7;
  function Companion_getInstance_18() {
    if (Companion_instance_7 == null)
      new Companion_5();
    return Companion_instance_7;
  }
  function FontListFontFamilyTypefaceAdapter$resolve$slambda($asyncLoader, resultContinuation) {
    this.m4a_1 = $asyncLoader;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).j20 = function ($this$launch, $completion) {
    var tmp = this.k20($this$launch, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).yc = function (p1, $completion) {
    return this.j20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 2;
            this.ac_1 = 1;
            suspendResult = this.m4a_1.a4a(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.dc_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.bc_1 === 2) {
          throw e;
        } else {
          this.ac_1 = this.bc_1;
          this.dc_1 = e;
        }
      }
     while (true);
  };
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).k20 = function ($this$launch, completion) {
    var i = new FontListFontFamilyTypefaceAdapter$resolve$slambda(this.m4a_1, completion);
    i.n4a_1 = $this$launch;
    return i;
  };
  function FontListFontFamilyTypefaceAdapter$resolve$slambda_0($asyncLoader, resultContinuation) {
    var i = new FontListFontFamilyTypefaceAdapter$resolve$slambda($asyncLoader, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.j20($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function FontListFontFamilyTypefaceAdapter(asyncTypefaceCache, injectedContext) {
    Companion_getInstance_18();
    asyncTypefaceCache = asyncTypefaceCache === VOID ? new AsyncTypefaceCache() : asyncTypefaceCache;
    injectedContext = injectedContext === VOID ? EmptyCoroutineContext_getInstance() : injectedContext;
    this.o46_1 = asyncTypefaceCache;
    this.p46_1 = CoroutineScope_0(Companion_getInstance_18().d4a_1.yf(get_FontCacheManagementDispatcher()).yf(injectedContext).yf(SupervisorJob(injectedContext.hc(Key_instance_0))));
  }
  protoOf(FontListFontFamilyTypefaceAdapter).q46 = function (typefaceRequest, platformFontLoader, onAsyncCompletion, createDefaultTypeface) {
    var tmp = typefaceRequest.r45_1;
    if (!(tmp instanceof FontListFontFamily))
      return null;
    var matched = Companion_getInstance_18().c4a_1.q4a(typefaceRequest.r45_1.p4a_1, typefaceRequest.s45_1, typefaceRequest.t45_1);
    var tmp0_container = firstImmediatelyAvailable(matched, typefaceRequest, this.o46_1, platformFontLoader, createDefaultTypeface);
    var asyncFontsToLoad = tmp0_container.se();
    var synthesizedTypeface = tmp0_container.te();
    if (asyncFontsToLoad == null)
      return new Immutable(synthesizedTypeface);
    var asyncLoader = new AsyncFontListLoader(asyncFontsToLoad, synthesizedTypeface, typefaceRequest, this.o46_1, onAsyncCompletion, platformFontLoader);
    var tmp_0 = this.p46_1;
    var tmp_1 = CoroutineStart_UNDISPATCHED_getInstance();
    launch(tmp_0, VOID, tmp_1, FontListFontFamilyTypefaceAdapter$resolve$slambda_0(asyncLoader, null));
    return new Async(asyncLoader);
  };
  function firstImmediatelyAvailable(_this__u8e3s4, typefaceRequest, asyncTypefaceCache, platformFontLoader, createDefaultTypeface) {
    var asyncFontsToLoad = null;
    var inductionVariable = 0;
    var last = _this__u8e3s4.m() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var idx = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var font = _this__u8e3s4.n(idx);
        var tmp1_subject = font.f45();
        if (tmp1_subject === Companion_getInstance_19().g45_1) {
          var tmp$ret$0;
          $l$block: {
            // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.runCachedBlocking' call
            // Inline function 'androidx.compose.ui.text.synchronized' call
            // Inline function 'kotlinx.atomicfu.locks.synchronized' call
            asyncTypefaceCache.s47_1;
            var key = new Key(font, platformFontLoader.x46());
            var tmp0_elvis_lhs = asyncTypefaceCache.q47_1.x2(key);
            var priorResult = tmp0_elvis_lhs == null ? asyncTypefaceCache.r47_1.x2(key) : tmp0_elvis_lhs;
            var tmp;
            if (!(priorResult == null)) {
              tmp$ret$0 = _AsyncTypefaceResult___get_result__impl__kpcqqb(priorResult.y46_1);
              break $l$block;
            }
            // Inline function 'kotlin.also' call
            // Inline function 'androidx.compose.ui.text.font.firstImmediatelyAvailable.<anonymous>' call
            var tmp_0;
            try {
              tmp_0 = platformFontLoader.r4a(font);
            } catch ($p) {
              var tmp_1;
              if ($p instanceof Exception) {
                var cause = $p;
                throw IllegalStateException_init_$Create$_0('Unable to load font ' + font, cause);
              } else {
                throw $p;
              }
            }
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.runCachedBlocking.<anonymous>' call
            asyncTypefaceCache.u47(font, platformFontLoader, tmp_0);
            tmp$ret$0 = tmp_0;
          }
          var tmp2_elvis_lhs = tmp$ret$0;
          var tmp_2;
          if (tmp2_elvis_lhs == null) {
            throw IllegalStateException_init_$Create$('Unable to load font ' + font);
          } else {
            tmp_2 = tmp2_elvis_lhs;
          }
          var result = tmp_2;
          return to(asyncFontsToLoad, synthesizeTypeface(typefaceRequest.u45_1, result, font, typefaceRequest.s45_1, typefaceRequest.t45_1));
        } else if (tmp1_subject === Companion_getInstance_19().h45_1) {
          var tmp$ret$5;
          $l$block_0: {
            // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.runCachedBlocking' call
            // Inline function 'androidx.compose.ui.text.synchronized' call
            // Inline function 'kotlinx.atomicfu.locks.synchronized' call
            asyncTypefaceCache.s47_1;
            var key_0 = new Key(font, platformFontLoader.x46());
            var tmp0_elvis_lhs_0 = asyncTypefaceCache.q47_1.x2(key_0);
            var priorResult_0 = tmp0_elvis_lhs_0 == null ? asyncTypefaceCache.r47_1.x2(key_0) : tmp0_elvis_lhs_0;
            var tmp_3;
            if (!(priorResult_0 == null)) {
              tmp$ret$5 = _AsyncTypefaceResult___get_result__impl__kpcqqb(priorResult_0.y46_1);
              break $l$block_0;
            }
            // Inline function 'kotlin.also' call
            // Inline function 'androidx.compose.ui.text.font.firstImmediatelyAvailable.<anonymous>' call
            // Inline function 'kotlin.Result.getOrNull' call
            // Inline function 'kotlin.runCatching' call
            var tmp_4;
            try {
              // Inline function 'kotlin.Companion.success' call
              // Inline function 'androidx.compose.ui.text.font.firstImmediatelyAvailable.<anonymous>.<anonymous>' call
              var value = platformFontLoader.r4a(font);
              tmp_4 = _Result___init__impl__xyqfz8(value);
            } catch ($p) {
              var tmp_5;
              if ($p instanceof Error) {
                var e = $p;
                // Inline function 'kotlin.Companion.failure' call
                tmp_5 = _Result___init__impl__xyqfz8(createFailure(e));
              } else {
                throw $p;
              }
              tmp_4 = tmp_5;
            }
            var this_0 = tmp_4;
            var tmp_6;
            if (_Result___get_isFailure__impl__jpiriv(this_0)) {
              tmp_6 = null;
            } else {
              var tmp_7 = _Result___get_value__impl__bjfvqg(this_0);
              tmp_6 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
            }
            var this_1 = tmp_6;
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.runCachedBlocking.<anonymous>' call
            asyncTypefaceCache.u47(font, platformFontLoader, this_1);
            tmp$ret$5 = this_1;
          }
          var result_0 = tmp$ret$5;
          if (!(result_0 == null)) {
            return to(asyncFontsToLoad, synthesizeTypeface(typefaceRequest.u45_1, result_0, font, typefaceRequest.s45_1, typefaceRequest.t45_1));
          }
        } else if (tmp1_subject === Companion_getInstance_19().i45_1) {
          var cacheResult = asyncTypefaceCache.v47(font, platformFontLoader);
          if (cacheResult == null) {
            if (asyncFontsToLoad == null) {
              asyncFontsToLoad = mutableListOf([font]);
            } else {
              asyncFontsToLoad.a1(font);
            }
          } else if (_AsyncTypefaceResult___get_isPermanentFailure__impl__sthpca(cacheResult.y46_1)) {
            continue $l$loop;
          } else if (!(_AsyncTypefaceResult___get_result__impl__kpcqqb(cacheResult.y46_1) == null)) {
            return to(asyncFontsToLoad, synthesizeTypeface(typefaceRequest.u45_1, _AsyncTypefaceResult___get_result__impl__kpcqqb(cacheResult.y46_1), font, typefaceRequest.s45_1, typefaceRequest.t45_1));
          }
        } else
          throw IllegalStateException_init_$Create$('Unknown font type ' + font);
      }
       while (inductionVariable <= last);
    var fallbackTypeface = createDefaultTypeface(typefaceRequest);
    return to(asyncFontsToLoad, fallbackTypeface);
  }
  function value$factory() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.q2();
    }, function (receiver, value) {
      return _set_value__lx0xdg(receiver, value);
    });
  }
  function value$factory_0() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.q2();
    }, function (receiver, value) {
      return _set_value__lx0xdg(receiver, value);
    });
  }
  function _FontLoadingStrategy___init__impl__if1sp3(value) {
    return value;
  }
  function _FontLoadingStrategy___get_value__impl__ggsl83($this) {
    return $this;
  }
  function FontLoadingStrategy__toString_impl_fx0z8f($this) {
    return $this === Companion_getInstance_19().g45_1 ? 'Blocking' : $this === Companion_getInstance_19().h45_1 ? 'Optional' : $this === Companion_getInstance_19().i45_1 ? 'Async' : 'Invalid(value=' + _FontLoadingStrategy___get_value__impl__ggsl83($this) + ')';
  }
  function Companion_6() {
    Companion_instance_8 = this;
    this.g45_1 = _FontLoadingStrategy___init__impl__if1sp3(0);
    this.h45_1 = _FontLoadingStrategy___init__impl__if1sp3(1);
    this.i45_1 = _FontLoadingStrategy___init__impl__if1sp3(2);
  }
  var Companion_instance_8;
  function Companion_getInstance_19() {
    if (Companion_instance_8 == null)
      new Companion_6();
    return Companion_instance_8;
  }
  function FontLoadingStrategy__hashCode_impl_xcx5xu($this) {
    return $this;
  }
  function FontLoadingStrategy__equals_impl_5w10z2($this, other) {
    if (!(other instanceof FontLoadingStrategy))
      return false;
    if (!($this === (other instanceof FontLoadingStrategy ? other.s4a_1 : THROW_CCE())))
      return false;
    return true;
  }
  function FontLoadingStrategy(value) {
    Companion_getInstance_19();
    this.s4a_1 = value;
  }
  protoOf(FontLoadingStrategy).toString = function () {
    return FontLoadingStrategy__toString_impl_fx0z8f(this.s4a_1);
  };
  protoOf(FontLoadingStrategy).hashCode = function () {
    return FontLoadingStrategy__hashCode_impl_xcx5xu(this.s4a_1);
  };
  protoOf(FontLoadingStrategy).equals = function (other) {
    return FontLoadingStrategy__equals_impl_5w10z2(this.s4a_1, other);
  };
  function FontMatcher() {
  }
  protoOf(FontMatcher).q4a = function (fontList, fontWeight, fontStyle) {
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.ui.util.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(fontList.m());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = fontList.m() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = fontList.n(index);
        // Inline function 'androidx.compose.ui.util.fastFilter.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.font.FontMatcher.matchFont.<anonymous>' call
        if (item.q33().equals(fontWeight) ? item.e45() === fontStyle : false) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.a1(item);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!target.u()) {
      return target;
    }
    // Inline function 'kotlin.collections.ifEmpty' call
    // Inline function 'androidx.compose.ui.util.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$(fontList.m());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = fontList.m() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = fontList.n(index_0);
        // Inline function 'androidx.compose.ui.util.fastFilter.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.font.FontMatcher.matchFont.<anonymous>' call
        if (item_0.e45() === fontStyle) {
          // Inline function 'kotlin.collections.plusAssign' call
          target_0.a1(item_0);
        }
      }
       while (inductionVariable_0 <= last_0);
    var tmp_0;
    if (target_0.u()) {
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.matchFont.<anonymous>' call
      tmp_0 = fontList;
    } else {
      tmp_0 = target_0;
    }
    var fontsToSearch = tmp_0;
    var tmp_1;
    if (fontWeight.u4a(Companion_getInstance_22().u40_1) < 0) {
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
      var bestWeightAbove = null;
      var bestWeightBelow = null;
      var inductionVariable_1 = 0;
      var last_1 = fontsToSearch.m() - 1 | 0;
      if (inductionVariable_1 <= last_1)
        $l$loop_1: do {
          var index_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var font = fontsToSearch.n(index_1);
          var possibleWeight = font.q33();
          if (!(null == null) ? possibleWeight.u4a(null) < 0 : false) {
            continue $l$loop_1;
          }
          if (!(null == null) ? possibleWeight.u4a(null) > 0 : false) {
            continue $l$loop_1;
          }
          if (possibleWeight.u4a(fontWeight) < 0) {
            if (bestWeightBelow == null ? true : possibleWeight.u4a(bestWeightBelow) > 0) {
              bestWeightBelow = possibleWeight;
            }
          } else if (possibleWeight.u4a(fontWeight) > 0) {
            if (bestWeightAbove == null ? true : possibleWeight.u4a(bestWeightAbove) < 0) {
              bestWeightAbove = possibleWeight;
            }
          } else {
            bestWeightAbove = possibleWeight;
            bestWeightBelow = possibleWeight;
            break $l$loop_1;
          }
        }
         while (inductionVariable_1 <= last_1);
      var tmp_2;
      if (true) {
        var tmp1_elvis_lhs = bestWeightBelow;
        tmp_2 = tmp1_elvis_lhs == null ? bestWeightAbove : tmp1_elvis_lhs;
      } else {
        var tmp2_elvis_lhs = bestWeightAbove;
        tmp_2 = tmp2_elvis_lhs == null ? bestWeightBelow : tmp2_elvis_lhs;
      }
      var bestWeight = tmp_2;
      // Inline function 'androidx.compose.ui.util.fastFilter' call
      // Inline function 'kotlin.contracts.contract' call
      var target_1 = ArrayList_init_$Create$(fontsToSearch.m());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_2 = 0;
      var last_2 = fontsToSearch.m() - 1 | 0;
      if (inductionVariable_2 <= last_2)
        do {
          var index_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var item_1 = fontsToSearch.n(index_2);
          // Inline function 'androidx.compose.ui.util.fastFilter.<anonymous>' call
          // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight.<anonymous>' call
          if (item_1.q33().equals(bestWeight)) {
            // Inline function 'kotlin.collections.plusAssign' call
            target_1.a1(item_1);
          }
        }
         while (inductionVariable_2 <= last_2);
      tmp_1 = target_1;
    } else if (fontWeight.u4a(Companion_getInstance_22().v40_1) > 0) {
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
      var bestWeightAbove_0 = null;
      var bestWeightBelow_0 = null;
      var inductionVariable_3 = 0;
      var last_3 = fontsToSearch.m() - 1 | 0;
      if (inductionVariable_3 <= last_3)
        $l$loop_4: do {
          var index_3 = inductionVariable_3;
          inductionVariable_3 = inductionVariable_3 + 1 | 0;
          var font_0 = fontsToSearch.n(index_3);
          var possibleWeight_0 = font_0.q33();
          if (!(null == null) ? possibleWeight_0.u4a(null) < 0 : false) {
            continue $l$loop_4;
          }
          if (!(null == null) ? possibleWeight_0.u4a(null) > 0 : false) {
            continue $l$loop_4;
          }
          if (possibleWeight_0.u4a(fontWeight) < 0) {
            if (bestWeightBelow_0 == null ? true : possibleWeight_0.u4a(bestWeightBelow_0) > 0) {
              bestWeightBelow_0 = possibleWeight_0;
            }
          } else if (possibleWeight_0.u4a(fontWeight) > 0) {
            if (bestWeightAbove_0 == null ? true : possibleWeight_0.u4a(bestWeightAbove_0) < 0) {
              bestWeightAbove_0 = possibleWeight_0;
            }
          } else {
            bestWeightAbove_0 = possibleWeight_0;
            bestWeightBelow_0 = possibleWeight_0;
            break $l$loop_4;
          }
        }
         while (inductionVariable_3 <= last_3);
      var tmp_3;
      if (false) {
        var tmp1_elvis_lhs_0 = bestWeightBelow_0;
        tmp_3 = tmp1_elvis_lhs_0 == null ? bestWeightAbove_0 : tmp1_elvis_lhs_0;
      } else {
        var tmp2_elvis_lhs_0 = bestWeightAbove_0;
        tmp_3 = tmp2_elvis_lhs_0 == null ? bestWeightBelow_0 : tmp2_elvis_lhs_0;
      }
      var bestWeight_0 = tmp_3;
      // Inline function 'androidx.compose.ui.util.fastFilter' call
      // Inline function 'kotlin.contracts.contract' call
      var target_2 = ArrayList_init_$Create$(fontsToSearch.m());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_4 = 0;
      var last_4 = fontsToSearch.m() - 1 | 0;
      if (inductionVariable_4 <= last_4)
        do {
          var index_4 = inductionVariable_4;
          inductionVariable_4 = inductionVariable_4 + 1 | 0;
          var item_2 = fontsToSearch.n(index_4);
          // Inline function 'androidx.compose.ui.util.fastFilter.<anonymous>' call
          // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight.<anonymous>' call
          if (item_2.q33().equals(bestWeight_0)) {
            // Inline function 'kotlin.collections.plusAssign' call
            target_2.a1(item_2);
          }
        }
         while (inductionVariable_4 <= last_4);
      tmp_1 = target_2;
    } else {
      // Inline function 'kotlin.collections.ifEmpty' call
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
      var maxSearchRange = Companion_getInstance_22().v40_1;
      var bestWeightAbove_1 = null;
      var bestWeightBelow_1 = null;
      var inductionVariable_5 = 0;
      var last_5 = fontsToSearch.m() - 1 | 0;
      if (inductionVariable_5 <= last_5)
        $l$loop_7: do {
          var index_5 = inductionVariable_5;
          inductionVariable_5 = inductionVariable_5 + 1 | 0;
          var font_1 = fontsToSearch.n(index_5);
          var possibleWeight_1 = font_1.q33();
          if (!(null == null) ? possibleWeight_1.u4a(null) < 0 : false) {
            continue $l$loop_7;
          }
          if (!(maxSearchRange == null) ? possibleWeight_1.u4a(maxSearchRange) > 0 : false) {
            continue $l$loop_7;
          }
          if (possibleWeight_1.u4a(fontWeight) < 0) {
            if (bestWeightBelow_1 == null ? true : possibleWeight_1.u4a(bestWeightBelow_1) > 0) {
              bestWeightBelow_1 = possibleWeight_1;
            }
          } else if (possibleWeight_1.u4a(fontWeight) > 0) {
            if (bestWeightAbove_1 == null ? true : possibleWeight_1.u4a(bestWeightAbove_1) < 0) {
              bestWeightAbove_1 = possibleWeight_1;
            }
          } else {
            bestWeightAbove_1 = possibleWeight_1;
            bestWeightBelow_1 = possibleWeight_1;
            break $l$loop_7;
          }
        }
         while (inductionVariable_5 <= last_5);
      var tmp_4;
      if (false) {
        var tmp1_elvis_lhs_1 = bestWeightBelow_1;
        tmp_4 = tmp1_elvis_lhs_1 == null ? bestWeightAbove_1 : tmp1_elvis_lhs_1;
      } else {
        var tmp2_elvis_lhs_1 = bestWeightAbove_1;
        tmp_4 = tmp2_elvis_lhs_1 == null ? bestWeightBelow_1 : tmp2_elvis_lhs_1;
      }
      var bestWeight_1 = tmp_4;
      // Inline function 'androidx.compose.ui.util.fastFilter' call
      // Inline function 'kotlin.contracts.contract' call
      var target_3 = ArrayList_init_$Create$(fontsToSearch.m());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_6 = 0;
      var last_6 = fontsToSearch.m() - 1 | 0;
      if (inductionVariable_6 <= last_6)
        do {
          var index_6 = inductionVariable_6;
          inductionVariable_6 = inductionVariable_6 + 1 | 0;
          var item_3 = fontsToSearch.n(index_6);
          // Inline function 'androidx.compose.ui.util.fastFilter.<anonymous>' call
          // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight.<anonymous>' call
          if (item_3.q33().equals(bestWeight_1)) {
            // Inline function 'kotlin.collections.plusAssign' call
            target_3.a1(item_3);
          }
        }
         while (inductionVariable_6 <= last_6);
      var tmp_5;
      if (target_3.u()) {
        // Inline function 'androidx.compose.ui.text.font.FontMatcher.matchFont.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
        var minSearchRange = Companion_getInstance_22().v40_1;
        var bestWeightAbove_2 = null;
        var bestWeightBelow_2 = null;
        var inductionVariable_7 = 0;
        var last_7 = fontsToSearch.m() - 1 | 0;
        if (inductionVariable_7 <= last_7)
          $l$loop_10: do {
            var index_7 = inductionVariable_7;
            inductionVariable_7 = inductionVariable_7 + 1 | 0;
            var font_2 = fontsToSearch.n(index_7);
            var possibleWeight_2 = font_2.q33();
            if (!(minSearchRange == null) ? possibleWeight_2.u4a(minSearchRange) < 0 : false) {
              continue $l$loop_10;
            }
            if (!(null == null) ? possibleWeight_2.u4a(null) > 0 : false) {
              continue $l$loop_10;
            }
            if (possibleWeight_2.u4a(fontWeight) < 0) {
              if (bestWeightBelow_2 == null ? true : possibleWeight_2.u4a(bestWeightBelow_2) > 0) {
                bestWeightBelow_2 = possibleWeight_2;
              }
            } else if (possibleWeight_2.u4a(fontWeight) > 0) {
              if (bestWeightAbove_2 == null ? true : possibleWeight_2.u4a(bestWeightAbove_2) < 0) {
                bestWeightAbove_2 = possibleWeight_2;
              }
            } else {
              bestWeightAbove_2 = possibleWeight_2;
              bestWeightBelow_2 = possibleWeight_2;
              break $l$loop_10;
            }
          }
           while (inductionVariable_7 <= last_7);
        var tmp_6;
        if (false) {
          var tmp1_elvis_lhs_2 = bestWeightBelow_2;
          tmp_6 = tmp1_elvis_lhs_2 == null ? bestWeightAbove_2 : tmp1_elvis_lhs_2;
        } else {
          var tmp2_elvis_lhs_2 = bestWeightAbove_2;
          tmp_6 = tmp2_elvis_lhs_2 == null ? bestWeightBelow_2 : tmp2_elvis_lhs_2;
        }
        var bestWeight_2 = tmp_6;
        // Inline function 'androidx.compose.ui.util.fastFilter' call
        // Inline function 'kotlin.contracts.contract' call
        var target_4 = ArrayList_init_$Create$(fontsToSearch.m());
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_8 = 0;
        var last_8 = fontsToSearch.m() - 1 | 0;
        if (inductionVariable_8 <= last_8)
          do {
            var index_8 = inductionVariable_8;
            inductionVariable_8 = inductionVariable_8 + 1 | 0;
            var item_4 = fontsToSearch.n(index_8);
            // Inline function 'androidx.compose.ui.util.fastFilter.<anonymous>' call
            // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight.<anonymous>' call
            if (item_4.q33().equals(bestWeight_2)) {
              // Inline function 'kotlin.collections.plusAssign' call
              target_4.a1(item_4);
            }
          }
           while (inductionVariable_8 <= last_8);
        tmp_5 = target_4;
      } else {
        tmp_5 = target_3;
      }
      tmp_1 = tmp_5;
    }
    var result = tmp_1;
    return result;
  };
  function _FontStyle___init__impl__jcnduf(value) {
    return value;
  }
  function FontStyle__toString_impl_thncxr($this) {
    return $this === Companion_getInstance_20().k41_1 ? 'Normal' : $this === Companion_getInstance_20().l41_1 ? 'Italic' : 'Invalid';
  }
  function Companion_7() {
    Companion_instance_9 = this;
    this.k41_1 = _FontStyle___init__impl__jcnduf(0);
    this.l41_1 = _FontStyle___init__impl__jcnduf(1);
  }
  var Companion_instance_9;
  function Companion_getInstance_20() {
    if (Companion_instance_9 == null)
      new Companion_7();
    return Companion_instance_9;
  }
  function FontStyle__hashCode_impl_7qhg4w($this) {
    return $this;
  }
  function FontStyle__equals_impl_2zal3g($this, other) {
    if (!(other instanceof FontStyle))
      return false;
    if (!($this === (other instanceof FontStyle ? other.v4a_1 : THROW_CCE())))
      return false;
    return true;
  }
  function FontStyle(value) {
    Companion_getInstance_20();
    this.v4a_1 = value;
  }
  protoOf(FontStyle).toString = function () {
    return FontStyle__toString_impl_thncxr(this.v4a_1);
  };
  protoOf(FontStyle).hashCode = function () {
    return FontStyle__hashCode_impl_7qhg4w(this.v4a_1);
  };
  protoOf(FontStyle).equals = function (other) {
    return FontStyle__equals_impl_2zal3g(this.v4a_1, other);
  };
  function _FontSynthesis___init__impl__n397bg(value) {
    return value;
  }
  function FontSynthesis__toString_impl_gunvr0($this) {
    return $this === Companion_getInstance_21().m41_1 ? 'None' : $this === Companion_getInstance_21().n41_1 ? 'All' : $this === Companion_getInstance_21().o41_1 ? 'Weight' : $this === Companion_getInstance_21().p41_1 ? 'Style' : 'Invalid';
  }
  function Companion_8() {
    Companion_instance_10 = this;
    this.m41_1 = _FontSynthesis___init__impl__n397bg(0);
    this.n41_1 = _FontSynthesis___init__impl__n397bg(1);
    this.o41_1 = _FontSynthesis___init__impl__n397bg(2);
    this.p41_1 = _FontSynthesis___init__impl__n397bg(3);
  }
  var Companion_instance_10;
  function Companion_getInstance_21() {
    if (Companion_instance_10 == null)
      new Companion_8();
    return Companion_instance_10;
  }
  function FontSynthesis__hashCode_impl_4wi11v($this) {
    return $this;
  }
  function FontSynthesis__equals_impl_zgu9mf($this, other) {
    if (!(other instanceof FontSynthesis))
      return false;
    if (!($this === (other instanceof FontSynthesis ? other.w4a_1 : THROW_CCE())))
      return false;
    return true;
  }
  function FontSynthesis(value) {
    Companion_getInstance_21();
    this.w4a_1 = value;
  }
  protoOf(FontSynthesis).toString = function () {
    return FontSynthesis__toString_impl_gunvr0(this.w4a_1);
  };
  protoOf(FontSynthesis).hashCode = function () {
    return FontSynthesis__hashCode_impl_4wi11v(this.w4a_1);
  };
  protoOf(FontSynthesis).equals = function (other) {
    return FontSynthesis__equals_impl_zgu9mf(this.w4a_1, other);
  };
  function Companion_9() {
    Companion_instance_11 = this;
    this.r40_1 = new FontWeight(100);
    this.s40_1 = new FontWeight(200);
    this.t40_1 = new FontWeight(300);
    this.u40_1 = new FontWeight(400);
    this.v40_1 = new FontWeight(500);
    this.w40_1 = new FontWeight(600);
    this.x40_1 = new FontWeight(700);
    this.y40_1 = new FontWeight(800);
    this.z40_1 = new FontWeight(900);
    this.a41_1 = this.r40_1;
    this.b41_1 = this.s40_1;
    this.c41_1 = this.t40_1;
    this.d41_1 = this.u40_1;
    this.e41_1 = this.v40_1;
    this.f41_1 = this.w40_1;
    this.g41_1 = this.x40_1;
    this.h41_1 = this.y40_1;
    this.i41_1 = this.z40_1;
    this.j41_1 = listOf([this.r40_1, this.s40_1, this.t40_1, this.u40_1, this.v40_1, this.w40_1, this.x40_1, this.y40_1, this.z40_1]);
  }
  var Companion_instance_11;
  function Companion_getInstance_22() {
    if (Companion_instance_11 == null)
      new Companion_9();
    return Companion_instance_11;
  }
  function FontWeight(weight) {
    Companion_getInstance_22();
    this.t4a_1 = weight;
    // Inline function 'kotlin.require' call
    var containsArg = this.t4a_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!(1 <= containsArg ? containsArg <= 1000 : false)) {
      // Inline function 'androidx.compose.ui.text.font.FontWeight.<anonymous>' call
      var message = 'Font weight can be in range [1, 1000]. Current value: ' + this.t4a_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(FontWeight).u4a = function (other) {
    return compareTo(this.t4a_1, other.t4a_1);
  };
  protoOf(FontWeight).d = function (other) {
    return this.u4a(other instanceof FontWeight ? other : THROW_CCE());
  };
  protoOf(FontWeight).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FontWeight))
      return false;
    if (!(this.t4a_1 === other.t4a_1))
      return false;
    return true;
  };
  protoOf(FontWeight).hashCode = function () {
    return this.t4a_1;
  };
  protoOf(FontWeight).toString = function () {
    return 'FontWeight(weight=' + this.t4a_1 + ')';
  };
  function TextInputService(platformTextInputService) {
    this.x4a_1 = platformTextInputService;
    this.y4a_1 = new AtomicReference(null);
  }
  function Companion_10() {
  }
  protoOf(Companion_10).n1f = function () {
    return get_platformLocaleDelegate().n1f().n(0);
  };
  var Companion_instance_12;
  function Companion_getInstance_23() {
    return Companion_instance_12;
  }
  function Locale(platformLocale) {
    this.b4b_1 = platformLocale;
  }
  protoOf(Locale).c4b = function () {
    return this.b4b_1.c4b();
  };
  protoOf(Locale).equals = function (other) {
    if (other == null)
      return false;
    if (!(other instanceof Locale))
      return false;
    if (this === other)
      return true;
    return this.c4b() === other.c4b();
  };
  protoOf(Locale).hashCode = function () {
    return getStringHashCode(this.c4b());
  };
  protoOf(Locale).toString = function () {
    return this.c4b();
  };
  function Companion_11() {
  }
  protoOf(Companion_11).n1f = function () {
    return get_platformLocaleDelegate().n1f();
  };
  var Companion_instance_13;
  function Companion_getInstance_24() {
    return Companion_instance_13;
  }
  function LocaleList(localeList) {
    this.z4a_1 = localeList;
    this.a4b_1 = this.z4a_1.m();
  }
  protoOf(LocaleList).n = function (i) {
    return this.z4a_1.n(i);
  };
  protoOf(LocaleList).m = function () {
    return this.a4b_1;
  };
  protoOf(LocaleList).d4b = function (element) {
    return this.z4a_1.s(element);
  };
  protoOf(LocaleList).s = function (element) {
    if (!(element instanceof Locale))
      return false;
    return this.d4b(element instanceof Locale ? element : THROW_CCE());
  };
  protoOf(LocaleList).e4b = function (elements) {
    return this.z4a_1.t(elements);
  };
  protoOf(LocaleList).t = function (elements) {
    return this.e4b(elements);
  };
  protoOf(LocaleList).u = function () {
    return this.z4a_1.u();
  };
  protoOf(LocaleList).o = function () {
    return this.z4a_1.o();
  };
  protoOf(LocaleList).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LocaleList))
      return false;
    if (!equals(this.z4a_1, other.z4a_1))
      return false;
    return true;
  };
  protoOf(LocaleList).hashCode = function () {
    return hashCode(this.z4a_1);
  };
  protoOf(LocaleList).toString = function () {
    return 'LocaleList(localeList=' + this.z4a_1 + ')';
  };
  function get_platformLocaleDelegate() {
    _init_properties_PlatformLocale_kt__d5ixzh();
    return platformLocaleDelegate;
  }
  var platformLocaleDelegate;
  var properties_initialized_PlatformLocale_kt_ya8ii9;
  function _init_properties_PlatformLocale_kt__d5ixzh() {
    if (!properties_initialized_PlatformLocale_kt_ya8ii9) {
      properties_initialized_PlatformLocale_kt_ya8ii9 = true;
      platformLocaleDelegate = createPlatformLocaleDelegate();
    }
  }
  function get_FontCacheManagementDispatcher() {
    _init_properties_Dispatcher_kt__c4qz95();
    return FontCacheManagementDispatcher;
  }
  var FontCacheManagementDispatcher;
  var properties_initialized_Dispatcher_kt_c7cauv;
  function _init_properties_Dispatcher_kt__c4qz95() {
    if (!properties_initialized_Dispatcher_kt_c7cauv) {
      properties_initialized_Dispatcher_kt_c7cauv = true;
      FontCacheManagementDispatcher = Dispatchers_getInstance().w10();
    }
  }
  function _BaselineShift___init__impl__scj05g(multiplier) {
    return multiplier;
  }
  function _BaselineShift___get_multiplier__impl__qhmjek($this) {
    return $this;
  }
  function Companion_12() {
    Companion_instance_14 = this;
    this.v41_1 = _BaselineShift___init__impl__scj05g(0.5);
    this.w41_1 = _BaselineShift___init__impl__scj05g(-0.5);
    this.x41_1 = _BaselineShift___init__impl__scj05g(0.0);
  }
  var Companion_instance_14;
  function Companion_getInstance_25() {
    if (Companion_instance_14 == null)
      new Companion_12();
    return Companion_instance_14;
  }
  function BaselineShift__toString_impl_x98gcc($this) {
    return 'BaselineShift(multiplier=' + $this + ')';
  }
  function BaselineShift__hashCode_impl_g0potx($this) {
    return getNumberHashCode($this);
  }
  function BaselineShift__equals_impl_37wrjj($this, other) {
    if (!(other instanceof BaselineShift))
      return false;
    var tmp0_other_with_cast = other instanceof BaselineShift ? other.f4b_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function BaselineShift(multiplier) {
    Companion_getInstance_25();
    this.f4b_1 = multiplier;
  }
  protoOf(BaselineShift).toString = function () {
    return BaselineShift__toString_impl_x98gcc(this.f4b_1);
  };
  protoOf(BaselineShift).hashCode = function () {
    return BaselineShift__hashCode_impl_g0potx(this.f4b_1);
  };
  protoOf(BaselineShift).equals = function (other) {
    return BaselineShift__equals_impl_37wrjj(this.f4b_1, other);
  };
  function _Hyphens___init__impl__m2cvg8(value) {
    return value;
  }
  function Companion_13() {
    Companion_instance_15 = this;
    this.y3y_1 = _Hyphens___init__impl__m2cvg8(1);
    this.z3y_1 = _Hyphens___init__impl__m2cvg8(2);
    this.a3z_1 = _Hyphens___init__impl__m2cvg8(IntCompanionObject_instance.MIN_VALUE);
  }
  var Companion_instance_15;
  function Companion_getInstance_26() {
    if (Companion_instance_15 == null)
      new Companion_13();
    return Companion_instance_15;
  }
  function Hyphens__toString_impl_ck1wg0($this) {
    return $this === Companion_getInstance_26().y3y_1 ? 'Hyphens.None' : $this === Companion_getInstance_26().z3y_1 ? 'Hyphens.Auto' : $this === Companion_getInstance_26().a3z_1 ? 'Hyphens.Unspecified' : 'Invalid';
  }
  function Hyphens__hashCode_impl_yb7t8v($this) {
    return $this;
  }
  function Hyphens__equals_impl_oqoi4t($this, other) {
    if (!(other instanceof Hyphens))
      return false;
    if (!($this === (other instanceof Hyphens ? other.g4b_1 : THROW_CCE())))
      return false;
    return true;
  }
  function Hyphens(value) {
    Companion_getInstance_26();
    this.g4b_1 = value;
  }
  protoOf(Hyphens).toString = function () {
    return Hyphens__toString_impl_ck1wg0(this.g4b_1);
  };
  protoOf(Hyphens).hashCode = function () {
    return Hyphens__hashCode_impl_yb7t8v(this.g4b_1);
  };
  protoOf(Hyphens).equals = function (other) {
    return Hyphens__equals_impl_oqoi4t(this.g4b_1, other);
  };
  function _Trim___init__impl__tcc1lr(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function Trim__toString_impl_hxcm0x($this) {
    var tmp0_subject = _get_value__a43j40($this);
    return tmp0_subject === _get_value__a43j40(Companion_getInstance_27().j4b_1) ? 'LineHeightStyle.Trim.FirstLineTop' : tmp0_subject === _get_value__a43j40(Companion_getInstance_27().k4b_1) ? 'LineHeightStyle.Trim.LastLineBottom' : tmp0_subject === _get_value__a43j40(Companion_getInstance_27().l4b_1) ? 'LineHeightStyle.Trim.Both' : tmp0_subject === _get_value__a43j40(Companion_getInstance_27().m4b_1) ? 'LineHeightStyle.Trim.None' : 'Invalid';
  }
  function Companion_14() {
    Companion_instance_16 = this;
    this.h4b_1 = 1;
    this.i4b_1 = 16;
    this.j4b_1 = _Trim___init__impl__tcc1lr(1);
    this.k4b_1 = _Trim___init__impl__tcc1lr(16);
    this.l4b_1 = _Trim___init__impl__tcc1lr(17);
    this.m4b_1 = _Trim___init__impl__tcc1lr(0);
  }
  var Companion_instance_16;
  function Companion_getInstance_27() {
    if (Companion_instance_16 == null)
      new Companion_14();
    return Companion_instance_16;
  }
  function Trim__isTrimFirstLineTop_impl_tqdsaa($this) {
    return (_get_value__a43j40($this) & 1) > 0;
  }
  function Trim__isTrimLastLineBottom_impl_8k6x3e($this) {
    return (_get_value__a43j40($this) & 16) > 0;
  }
  function Trim__hashCode_impl_vclj5c($this) {
    return $this;
  }
  function Trim__equals_impl_6x7eks($this, other) {
    if (!(other instanceof Trim))
      return false;
    if (!($this === (other instanceof Trim ? other.n4b_1 : THROW_CCE())))
      return false;
    return true;
  }
  function _Alignment___init__impl__it107q(topRatio) {
    // Inline function 'kotlin.check' call
    var tmp;
    var containsArg = _Alignment___get_topRatio__impl__gg7tir(topRatio);
    if (0.0 <= containsArg ? containsArg <= 1.0 : false) {
      tmp = true;
    } else {
      tmp = _Alignment___get_topRatio__impl__gg7tir(topRatio) === -1.0;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp) {
      // Inline function 'androidx.compose.ui.text.style.Alignment.<anonymous>' call
      var message = 'topRatio should be in [0..1] range or -1';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return topRatio;
  }
  function _Alignment___get_topRatio__impl__gg7tir($this) {
    return $this;
  }
  function Alignment__toString_impl_on6yhu($this) {
    var tmp0_subject = _Alignment___get_topRatio__impl__gg7tir($this);
    return tmp0_subject === _Alignment___get_topRatio__impl__gg7tir(Companion_getInstance_28().o4b_1) ? 'LineHeightStyle.Alignment.Top' : tmp0_subject === _Alignment___get_topRatio__impl__gg7tir(Companion_getInstance_28().p4b_1) ? 'LineHeightStyle.Alignment.Center' : tmp0_subject === _Alignment___get_topRatio__impl__gg7tir(Companion_getInstance_28().q4b_1) ? 'LineHeightStyle.Alignment.Proportional' : tmp0_subject === _Alignment___get_topRatio__impl__gg7tir(Companion_getInstance_28().r4b_1) ? 'LineHeightStyle.Alignment.Bottom' : 'LineHeightStyle.Alignment(topPercentage = ' + _Alignment___get_topRatio__impl__gg7tir($this) + ')';
  }
  function Companion_15() {
    Companion_instance_17 = this;
    this.o4b_1 = _Alignment___init__impl__it107q(0.0);
    this.p4b_1 = _Alignment___init__impl__it107q(0.5);
    this.q4b_1 = _Alignment___init__impl__it107q(-1.0);
    this.r4b_1 = _Alignment___init__impl__it107q(1.0);
  }
  var Companion_instance_17;
  function Companion_getInstance_28() {
    if (Companion_instance_17 == null)
      new Companion_15();
    return Companion_instance_17;
  }
  function Alignment__hashCode_impl_omr6of($this) {
    return getNumberHashCode($this);
  }
  function Alignment__equals_impl_9ve0tn($this, other) {
    if (!(other instanceof Alignment))
      return false;
    var tmp0_other_with_cast = other instanceof Alignment ? other.s4b_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Companion_16() {
    Companion_instance_18 = this;
    this.t4b_1 = new LineHeightStyle(Companion_getInstance_28().q4b_1, Companion_getInstance_27().l4b_1);
  }
  var Companion_instance_18;
  function Companion_getInstance_29() {
    if (Companion_instance_18 == null)
      new Companion_16();
    return Companion_instance_18;
  }
  function Trim(value) {
    Companion_getInstance_27();
    this.n4b_1 = value;
  }
  protoOf(Trim).toString = function () {
    return Trim__toString_impl_hxcm0x(this.n4b_1);
  };
  protoOf(Trim).hashCode = function () {
    return Trim__hashCode_impl_vclj5c(this.n4b_1);
  };
  protoOf(Trim).equals = function (other) {
    return Trim__equals_impl_6x7eks(this.n4b_1, other);
  };
  function Alignment(topRatio) {
    Companion_getInstance_28();
    this.s4b_1 = topRatio;
  }
  protoOf(Alignment).toString = function () {
    return Alignment__toString_impl_on6yhu(this.s4b_1);
  };
  protoOf(Alignment).hashCode = function () {
    return Alignment__hashCode_impl_omr6of(this.s4b_1);
  };
  protoOf(Alignment).equals = function (other) {
    return Alignment__equals_impl_9ve0tn(this.s4b_1, other);
  };
  function LineHeightStyle(alignment, trim) {
    Companion_getInstance_29();
    this.u4b_1 = alignment;
    this.v4b_1 = trim;
  }
  protoOf(LineHeightStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LineHeightStyle))
      return false;
    if (!equals(this.u4b_1, other.u4b_1))
      return false;
    if (!(this.v4b_1 === other.v4b_1))
      return false;
    return true;
  };
  protoOf(LineHeightStyle).hashCode = function () {
    var result = Alignment__hashCode_impl_omr6of(this.u4b_1);
    result = imul(31, result) + Trim__hashCode_impl_vclj5c(this.v4b_1) | 0;
    return result;
  };
  protoOf(LineHeightStyle).toString = function () {
    return 'LineHeightStyle(' + ('alignment=' + new Alignment(this.u4b_1) + ', ') + ('trim=' + new Trim(this.v4b_1)) + ')';
  };
  var ResolvedTextDirection_Ltr_instance;
  var ResolvedTextDirection_Rtl_instance;
  var ResolvedTextDirection_entriesInitialized;
  function ResolvedTextDirection_initEntries() {
    if (ResolvedTextDirection_entriesInitialized)
      return Unit_instance;
    ResolvedTextDirection_entriesInitialized = true;
    ResolvedTextDirection_Ltr_instance = new ResolvedTextDirection('Ltr', 0);
    ResolvedTextDirection_Rtl_instance = new ResolvedTextDirection('Rtl', 1);
  }
  function ResolvedTextDirection(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ResolvedTextDirection_Ltr_getInstance() {
    ResolvedTextDirection_initEntries();
    return ResolvedTextDirection_Ltr_instance;
  }
  function ResolvedTextDirection_Rtl_getInstance() {
    ResolvedTextDirection_initEntries();
    return ResolvedTextDirection_Rtl_instance;
  }
  function _TextAlign___init__impl__99wz4v(value) {
    return value;
  }
  function TextAlign__toString_impl_6ha6d3($this) {
    return $this === Companion_getInstance_30().n3y_1 ? 'Left' : $this === Companion_getInstance_30().o3y_1 ? 'Right' : $this === Companion_getInstance_30().p3y_1 ? 'Center' : $this === Companion_getInstance_30().q3y_1 ? 'Justify' : $this === Companion_getInstance_30().r3y_1 ? 'Start' : $this === Companion_getInstance_30().s3y_1 ? 'End' : $this === Companion_getInstance_30().t3y_1 ? 'Unspecified' : 'Invalid';
  }
  function Companion_17() {
    Companion_instance_19 = this;
    this.n3y_1 = _TextAlign___init__impl__99wz4v(1);
    this.o3y_1 = _TextAlign___init__impl__99wz4v(2);
    this.p3y_1 = _TextAlign___init__impl__99wz4v(3);
    this.q3y_1 = _TextAlign___init__impl__99wz4v(4);
    this.r3y_1 = _TextAlign___init__impl__99wz4v(5);
    this.s3y_1 = _TextAlign___init__impl__99wz4v(6);
    this.t3y_1 = _TextAlign___init__impl__99wz4v(IntCompanionObject_instance.MIN_VALUE);
  }
  var Companion_instance_19;
  function Companion_getInstance_30() {
    if (Companion_instance_19 == null)
      new Companion_17();
    return Companion_instance_19;
  }
  function TextAlign__hashCode_impl_s8g35y($this) {
    return $this;
  }
  function TextAlign__equals_impl_latoh6($this, other) {
    if (!(other instanceof TextAlign))
      return false;
    if (!($this === (other instanceof TextAlign ? other.w4b_1 : THROW_CCE())))
      return false;
    return true;
  }
  function TextAlign(value) {
    Companion_getInstance_30();
    this.w4b_1 = value;
  }
  protoOf(TextAlign).toString = function () {
    return TextAlign__toString_impl_6ha6d3(this.w4b_1);
  };
  protoOf(TextAlign).hashCode = function () {
    return TextAlign__hashCode_impl_s8g35y(this.w4b_1);
  };
  protoOf(TextAlign).equals = function (other) {
    return TextAlign__equals_impl_latoh6(this.w4b_1, other);
  };
  function Companion_18() {
    Companion_instance_20 = this;
    this.z41_1 = new TextDecoration(0);
    this.a42_1 = new TextDecoration(1);
    this.b42_1 = new TextDecoration(2);
  }
  var Companion_instance_20;
  function Companion_getInstance_31() {
    if (Companion_instance_20 == null)
      new Companion_18();
    return Companion_instance_20;
  }
  function TextDecoration(mask) {
    Companion_getInstance_31();
    this.x4b_1 = mask;
  }
  protoOf(TextDecoration).y4b = function (other) {
    return (this.x4b_1 | other.x4b_1) === this.x4b_1;
  };
  protoOf(TextDecoration).toString = function () {
    if (this.x4b_1 === 0) {
      return 'TextDecoration.None';
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var values = ArrayList_init_$Create$_0();
    if (!((this.x4b_1 & Companion_getInstance_31().a42_1.x4b_1) === 0)) {
      values.a1('Underline');
    }
    if (!((this.x4b_1 & Companion_getInstance_31().b42_1.x4b_1) === 0)) {
      values.a1('LineThrough');
    }
    if (values.m() === 1) {
      return 'TextDecoration.' + values.n(0);
    }
    return 'TextDecoration[' + fastJoinToString(values, ', ') + ']';
  };
  protoOf(TextDecoration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextDecoration))
      return false;
    if (!(this.x4b_1 === other.x4b_1))
      return false;
    return true;
  };
  protoOf(TextDecoration).hashCode = function () {
    return this.x4b_1;
  };
  function _TextDirection___init__impl__lh8lzt(value) {
    return value;
  }
  function TextDirection__toString_impl_x3uh9t($this) {
    return $this === Companion_getInstance_32().b3y_1 ? 'Ltr' : $this === Companion_getInstance_32().c3y_1 ? 'Rtl' : $this === Companion_getInstance_32().d3y_1 ? 'Content' : $this === Companion_getInstance_32().e3y_1 ? 'ContentOrLtr' : $this === Companion_getInstance_32().f3y_1 ? 'ContentOrRtl' : $this === Companion_getInstance_32().g3y_1 ? 'Unspecified' : 'Invalid';
  }
  function Companion_19() {
    Companion_instance_21 = this;
    this.b3y_1 = _TextDirection___init__impl__lh8lzt(1);
    this.c3y_1 = _TextDirection___init__impl__lh8lzt(2);
    this.d3y_1 = _TextDirection___init__impl__lh8lzt(3);
    this.e3y_1 = _TextDirection___init__impl__lh8lzt(4);
    this.f3y_1 = _TextDirection___init__impl__lh8lzt(5);
    this.g3y_1 = _TextDirection___init__impl__lh8lzt(IntCompanionObject_instance.MIN_VALUE);
  }
  var Companion_instance_21;
  function Companion_getInstance_32() {
    if (Companion_instance_21 == null)
      new Companion_19();
    return Companion_instance_21;
  }
  function TextDirection__hashCode_impl_g63nwg($this) {
    return $this;
  }
  function TextDirection__equals_impl_3fvxt0($this, other) {
    if (!(other instanceof TextDirection))
      return false;
    if (!($this === (other instanceof TextDirection ? other.z4b_1 : THROW_CCE())))
      return false;
    return true;
  }
  function TextDirection(value) {
    Companion_getInstance_32();
    this.z4b_1 = value;
  }
  protoOf(TextDirection).toString = function () {
    return TextDirection__toString_impl_x3uh9t(this.z4b_1);
  };
  protoOf(TextDirection).hashCode = function () {
    return TextDirection__hashCode_impl_g63nwg(this.z4b_1);
  };
  protoOf(TextDirection).equals = function (other) {
    return TextDirection__equals_impl_3fvxt0(this.z4b_1, other);
  };
  function Unspecified() {
  }
  protoOf(Unspecified).e3t = function () {
    return Companion_getInstance().i3l_1;
  };
  protoOf(Unspecified).i40 = function () {
    return null;
  };
  protoOf(Unspecified).p3g = function () {
    return NaN;
  };
  var Unspecified_instance;
  function Unspecified_getInstance() {
    return Unspecified_instance;
  }
  function Companion_20() {
  }
  protoOf(Companion_20).q3z = function (color) {
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(color), _Color___get_value__impl__1pls5m(Companion_getInstance().i3l_1))) {
      tmp = new ColorStyle(color);
    } else {
      tmp = Unspecified_instance;
    }
    return tmp;
  };
  protoOf(Companion_20).r3z = function (brush, alpha) {
    var tmp;
    if (brush == null) {
      tmp = Unspecified_instance;
    } else {
      if (brush instanceof SolidColor) {
        tmp = this.q3z(modulate(brush.a4c_1, alpha));
      } else {
        if (brush instanceof ShaderBrush) {
          tmp = new BrushStyle(brush, alpha);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  };
  var Companion_instance_22;
  function Companion_getInstance_33() {
    return Companion_instance_22;
  }
  function TextForegroundStyle$merge$lambda(this$0) {
    return function () {
      return this$0.p3g();
    };
  }
  function TextForegroundStyle$merge$lambda_0(this$0) {
    return function () {
      return this$0;
    };
  }
  function TextForegroundStyle() {
  }
  function BrushStyle(value, alpha) {
    this.b4c_1 = value;
    this.c4c_1 = alpha;
  }
  protoOf(BrushStyle).p3g = function () {
    return this.c4c_1;
  };
  protoOf(BrushStyle).e3t = function () {
    return Companion_getInstance().i3l_1;
  };
  protoOf(BrushStyle).i40 = function () {
    return this.b4c_1;
  };
  protoOf(BrushStyle).toString = function () {
    return 'BrushStyle(value=' + this.b4c_1 + ', alpha=' + this.c4c_1 + ')';
  };
  protoOf(BrushStyle).hashCode = function () {
    var result = hashCode(this.b4c_1);
    result = imul(result, 31) + getNumberHashCode(this.c4c_1) | 0;
    return result;
  };
  protoOf(BrushStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BrushStyle))
      return false;
    var tmp0_other_with_cast = other instanceof BrushStyle ? other : THROW_CCE();
    if (!equals(this.b4c_1, tmp0_other_with_cast.b4c_1))
      return false;
    if (!equals(this.c4c_1, tmp0_other_with_cast.c4c_1))
      return false;
    return true;
  };
  function takeOrElse_0(_this__u8e3s4, block) {
    return isNaN_0(_this__u8e3s4) ? block() : _this__u8e3s4;
  }
  function ColorStyle(value) {
    this.d4c_1 = value;
    // Inline function 'kotlin.require' call
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var this_0 = this.d4c_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!!equals(_Color___get_value__impl__1pls5m(this_0), _Color___get_value__impl__1pls5m(Companion_getInstance().i3l_1))) {
      // Inline function 'androidx.compose.ui.text.style.ColorStyle.<anonymous>' call
      var message = 'ColorStyle value must be specified, use TextForegroundStyle.Unspecified instead.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(ColorStyle).e3t = function () {
    return this.d4c_1;
  };
  protoOf(ColorStyle).i40 = function () {
    return null;
  };
  protoOf(ColorStyle).p3g = function () {
    return _Color___get_alpha__impl__wcfyv1(this.e3t());
  };
  protoOf(ColorStyle).toString = function () {
    return 'ColorStyle(value=' + new Color(this.d4c_1) + ')';
  };
  protoOf(ColorStyle).hashCode = function () {
    return Color__hashCode_impl_vjyivj(this.d4c_1);
  };
  protoOf(ColorStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ColorStyle))
      return false;
    var tmp0_other_with_cast = other instanceof ColorStyle ? other : THROW_CCE();
    if (!equals(this.d4c_1, tmp0_other_with_cast.d4c_1))
      return false;
    return true;
  };
  function modulate(_this__u8e3s4, alpha) {
    return (isNaN_0(alpha) ? true : alpha >= 1.0) ? _this__u8e3s4 : Color__copy$default_impl_ectz3s(_this__u8e3s4, _Color___get_alpha__impl__wcfyv1(_this__u8e3s4) * alpha);
  }
  function Companion_21() {
    Companion_instance_23 = this;
    this.y41_1 = new TextGeometricTransform(1.0, 0.0);
  }
  var Companion_instance_23;
  function Companion_getInstance_34() {
    if (Companion_instance_23 == null)
      new Companion_21();
    return Companion_instance_23;
  }
  function TextGeometricTransform(scaleX, skewX) {
    Companion_getInstance_34();
    scaleX = scaleX === VOID ? 1.0 : scaleX;
    skewX = skewX === VOID ? 0.0 : skewX;
    this.e4c_1 = scaleX;
    this.f4c_1 = skewX;
  }
  protoOf(TextGeometricTransform).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextGeometricTransform))
      return false;
    if (!(this.e4c_1 === other.e4c_1))
      return false;
    if (!(this.f4c_1 === other.f4c_1))
      return false;
    return true;
  };
  protoOf(TextGeometricTransform).hashCode = function () {
    var result = getNumberHashCode(this.e4c_1);
    result = imul(31, result) + getNumberHashCode(this.f4c_1) | 0;
    return result;
  };
  protoOf(TextGeometricTransform).toString = function () {
    return 'TextGeometricTransform(scaleX=' + this.e4c_1 + ', skewX=' + this.f4c_1 + ')';
  };
  function Companion_22() {
    Companion_instance_24 = this;
    this.d3z_1 = new TextIndent_0();
  }
  var Companion_instance_24;
  function Companion_getInstance_35() {
    if (Companion_instance_24 == null)
      new Companion_22();
    return Companion_instance_24;
  }
  function TextIndent_0(firstLine, restLine) {
    Companion_getInstance_35();
    firstLine = firstLine === VOID ? get_sp(0) : firstLine;
    restLine = restLine === VOID ? get_sp(0) : restLine;
    this.g4c_1 = firstLine;
    this.h4c_1 = restLine;
  }
  protoOf(TextIndent_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextIndent_0))
      return false;
    if (!equals(this.g4c_1, other.g4c_1))
      return false;
    if (!equals(this.h4c_1, other.h4c_1))
      return false;
    return true;
  };
  protoOf(TextIndent_0).hashCode = function () {
    var result = TextUnit__hashCode_impl_qsmeov(this.g4c_1);
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.h4c_1) | 0;
    return result;
  };
  protoOf(TextIndent_0).toString = function () {
    return 'TextIndent(firstLine=' + new TextUnit(this.g4c_1) + ', restLine=' + new TextUnit(this.h4c_1) + ')';
  };
  function _TextOverflow___init__impl__obguoe(value) {
    return value;
  }
  function _TextOverflow___get_value__impl__vugm5i($this) {
    return $this;
  }
  function TextOverflow__toString_impl_10s0c2($this) {
    return $this === Companion_getInstance_36().i4c_1 ? 'Clip' : $this === Companion_getInstance_36().j4c_1 ? 'Ellipsis' : $this === Companion_getInstance_36().k4c_1 ? 'Visible' : 'Invalid';
  }
  function Companion_23() {
    Companion_instance_25 = this;
    this.i4c_1 = _TextOverflow___init__impl__obguoe(1);
    this.j4c_1 = _TextOverflow___init__impl__obguoe(2);
    this.k4c_1 = _TextOverflow___init__impl__obguoe(3);
  }
  var Companion_instance_25;
  function Companion_getInstance_36() {
    if (Companion_instance_25 == null)
      new Companion_23();
    return Companion_instance_25;
  }
  function TextOverflow__hashCode_impl_kqdwgt($this) {
    return $this;
  }
  function TextOverflow__equals_impl_jkxdof($this, other) {
    if (!(other instanceof TextOverflow))
      return false;
    if (!($this === (other instanceof TextOverflow ? other.l4c_1 : THROW_CCE())))
      return false;
    return true;
  }
  function TextOverflow(value) {
    Companion_getInstance_36();
    this.l4c_1 = value;
  }
  protoOf(TextOverflow).toString = function () {
    return TextOverflow__toString_impl_10s0c2(this.l4c_1);
  };
  protoOf(TextOverflow).hashCode = function () {
    return TextOverflow__hashCode_impl_kqdwgt(this.l4c_1);
  };
  protoOf(TextOverflow).equals = function (other) {
    return TextOverflow__equals_impl_jkxdof(this.l4c_1, other);
  };
  function userPreferredLanguages() {
    return toList(getUserPreferredLanguagesAsArray());
  }
  function getUserPreferredLanguagesAsArray() {
    return window.navigator.languages;
  }
  function strongDirectionType(_this__u8e3s4) {
    var tmp0_subject = CharDirection_getInstance().c39(_this__u8e3s4);
    var tmp;
    CharDirection_getInstance();
    if (tmp0_subject === 0) {
      tmp = Companion_getInstance_37().n4c_1;
    } else {
      var tmp_0;
      CharDirection_getInstance();
      if (tmp0_subject === 1) {
        tmp_0 = true;
      } else {
        CharDirection_getInstance();
        tmp_0 = tmp0_subject === 13;
      }
      if (tmp_0) {
        tmp = Companion_getInstance_37().o4c_1;
      } else {
        tmp = Companion_getInstance_37().m4c_1;
      }
    }
    return tmp;
  }
  function NoCache() {
  }
  protoOf(NoCache).p4c = function (key, loader) {
    return loader(key);
  };
  protoOf(NoCache).q4c = function (key, loader) {
    return this.p4c(!(key == null) ? key : THROW_CCE(), loader);
  };
  function synthesizeTypeface(_this__u8e3s4, typeface, font, requestedWeight, requestedStyle) {
    return typeface;
  }
  function get_rtlLanguagesSet() {
    _init_properties_JsPlatformLocale_js_kt__92ki1d();
    return rtlLanguagesSet;
  }
  var rtlLanguagesSet;
  function createPlatformLocaleDelegate() {
    _init_properties_JsPlatformLocale_js_kt__92ki1d();
    return new createPlatformLocaleDelegate$1();
  }
  function JsLocale_init_$Init$(languageTag, $this) {
    JsLocale.call($this, toIntlLocale(languageTag));
    return $this;
  }
  function JsLocale_init_$Create$(languageTag) {
    return JsLocale_init_$Init$(languageTag, objectCreate(protoOf(JsLocale)));
  }
  function JsLocale(locale) {
    this.r4c_1 = locale;
  }
  protoOf(JsLocale).s4c = function () {
    return this.r4c_1.language;
  };
  protoOf(JsLocale).c4b = function () {
    return this.r4c_1.baseName;
  };
  function toIntlLocale(_this__u8e3s4) {
    _init_properties_JsPlatformLocale_js_kt__92ki1d();
    return parseLanguageTagToIntlLocale(_this__u8e3s4);
  }
  function parseLanguageTagToIntlLocale(languageTag) {
    _init_properties_JsPlatformLocale_js_kt__92ki1d();
    return new Intl.Locale(languageTag);
  }
  function isRtl(_this__u8e3s4) {
    _init_properties_JsPlatformLocale_js_kt__92ki1d();
    return get_rtlLanguagesSet().s(_this__u8e3s4.s4c());
  }
  function createPlatformLocaleDelegate$1() {
  }
  protoOf(createPlatformLocaleDelegate$1).n1f = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = userPreferredLanguages();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.o();
    while (tmp0_iterator.d1()) {
      var item = tmp0_iterator.f1();
      // Inline function 'androidx.compose.ui.text.intl.<no name provided>.<get-current>.<anonymous>' call
      var tmp$ret$0 = new Locale(JsLocale_init_$Create$(item));
      destination.a1(tmp$ret$0);
    }
    return new LocaleList(destination);
  };
  var properties_initialized_JsPlatformLocale_js_kt_nild9t;
  function _init_properties_JsPlatformLocale_js_kt__92ki1d() {
    if (!properties_initialized_JsPlatformLocale_js_kt_nild9t) {
      properties_initialized_JsPlatformLocale_js_kt_nild9t = true;
      rtlLanguagesSet = setOf(['ar', 'fa', 'he', 'iw', 'ji', 'ur', 'yi']);
    }
  }
  function currentPlatform() {
    switch (get_hostOs().t9_1) {
      case 0:
        return Platform_Android_getInstance();
      case 4:
        return Platform_IOS_getInstance();
      case 3:
        return Platform_MacOS_getInstance();
      case 1:
        return Platform_Linux_getInstance();
      case 2:
        return Platform_Windows_getInstance();
      default:
        return Platform_Unknown_getInstance();
    }
  }
  function loadTypeface(font) {
    if (!(font instanceof PlatformFont)) {
      throw IllegalArgumentException_init_$Create$('Unsupported font type: ' + font);
    }
    var tmp;
    if (font instanceof LoadedFont) {
      tmp = Companion_getInstance_3().y37(Companion_getInstance_4().l31(font.u4c_1()));
    } else {
      if (font instanceof SystemFont) {
        tmp = Companion_getInstance_3().w37(font.t4c(), get_skFontStyle(font));
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  }
  function get_skFontStyle(_this__u8e3s4) {
    var tmp = _this__u8e3s4.q33().t4a_1;
    return FontStyle_init_$Create$(tmp, 5, _this__u8e3s4.e45() === Companion_getInstance_20().l41_1 ? FontSlant_ITALIC_getInstance() : FontSlant_UPRIGHT_getInstance());
  }
  function PlatformFont() {
  }
  protoOf(PlatformFont).x46 = function () {
    return '' + getKClassFromExpression(this).b7() + '|' + this.t4c() + '|weight=' + this.q33().t4a_1 + '|style=' + new FontStyle(this.e45());
  };
  function AtomicReference(value) {
    this.v4c_1 = value;
  }
  function checkEvicted($this, now) {
    var expireTime = now.fb($this.w4c_1);
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.takeWhile' call
    var this_0 = $this.z4c_1.k2();
    var list = ArrayList_init_$Create$_0();
    var tmp0_iterator = this_0.o();
    $l$loop: while (tmp0_iterator.d1()) {
      var item = tmp0_iterator.f1();
      // Inline function 'androidx.compose.ui.text.ExpireAfterAccessCache.checkEvicted.<anonymous>' call
      if (!(ensureNotNull($this.z4c_1.x2(item)).x9(expireTime) < 0))
        break $l$loop;
      list.a1(item);
    }
    var tmp0_iterator_0 = list.o();
    while (tmp0_iterator_0.d1()) {
      var element = tmp0_iterator_0.f1();
      // Inline function 'androidx.compose.ui.text.ExpireAfterAccessCache.checkEvicted.<anonymous>' call
      $this.y4c_1.r2(element);
      $this.z4c_1.r2(element);
    }
  }
  function currentNanoTime$ref() {
    var l = function () {
      return currentNanoTime();
    };
    l.callableName = 'currentNanoTime';
    return l;
  }
  function ExpireAfterAccessCache(expireAfterNanos, currentNanos) {
    var tmp;
    if (currentNanos === VOID) {
      tmp = currentNanoTime$ref();
    } else {
      tmp = currentNanos;
    }
    currentNanos = tmp;
    this.w4c_1 = expireAfterNanos;
    this.x4c_1 = currentNanos;
    this.y4c_1 = HashMap_init_$Create$_0();
    this.z4c_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(ExpireAfterAccessCache).q4c = function (key, loader) {
    this.z4c_1.r2(key);
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.y4c_1;
    var value = this_0.x2(key);
    var tmp;
    if (value == null) {
      // Inline function 'androidx.compose.ui.text.ExpireAfterAccessCache.get.<anonymous>' call
      var answer = loader(key);
      this_0.n2(key, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    var this_1 = tmp;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.ExpireAfterAccessCache.get.<anonymous>' call
    var now = this.x4c_1();
    // Inline function 'kotlin.collections.set' call
    this.z4c_1.n2(key, now);
    checkEvicted(this, now);
    return this_1;
  };
  function get_PUSH_DIRECTIONAL_ISOLATE_RANGE() {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    return PUSH_DIRECTIONAL_ISOLATE_RANGE;
  }
  var PUSH_DIRECTIONAL_ISOLATE_RANGE;
  function _StrongDirectionType___init__impl__59uet3(value) {
    return value;
  }
  function Companion_24() {
    Companion_instance_26 = this;
    this.m4c_1 = _StrongDirectionType___init__impl__59uet3(0);
    this.n4c_1 = _StrongDirectionType___init__impl__59uet3(1);
    this.o4c_1 = _StrongDirectionType___init__impl__59uet3(2);
  }
  var Companion_instance_26;
  function Companion_getInstance_37() {
    if (Companion_instance_26 == null)
      new Companion_24();
    return Companion_instance_26;
  }
  function firstStrongDirectionType(_this__u8e3s4) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    var tmp0_iterator = get_codePointsOutsideDirectionalIsolate(_this__u8e3s4).o();
    $l$loop: while (tmp0_iterator.d1()) {
      var codePoint = tmp0_iterator.f1();
      var strongDirectionType_0 = strongDirectionType(codePoint);
      var tmp;
      if (strongDirectionType_0 === Companion_getInstance_37().m4c_1) {
        continue $l$loop;
      } else {
        tmp = strongDirectionType_0;
      }
      return tmp;
    }
    return Companion_getInstance_37().m4c_1;
  }
  function codePointAt(_this__u8e3s4, index) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    var high = charSequenceGet(_this__u8e3s4, index);
    if (isHighSurrogate(high) ? (index + 1 | 0) < _this__u8e3s4.length : false) {
      var low = charSequenceGet(_this__u8e3s4, index + 1 | 0);
      if (isLowSurrogate(low)) {
        return toCodePoint(Companion_getInstance_5(), high, low);
      }
    }
    // Inline function 'kotlin.code' call
    return Char__toInt_impl_vasixd(high);
  }
  function get_codePointsOutsideDirectionalIsolate(_this__u8e3s4) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    return sequence(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj_0(_this__u8e3s4, null));
  }
  function toCodePoint(_this__u8e3s4, high, low) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    Companion_getInstance_5();
    var tmp = Char__minus_impl_a2frrh(high, _Char___init__impl__6a9atx(55296)) << 10;
    Companion_getInstance_5();
    return (tmp | Char__minus_impl_a2frrh(low, _Char___init__impl__6a9atx(56320))) + 65536 | 0;
  }
  function get_codePoints(_this__u8e3s4) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    return sequence(_get_codePoints_$slambda_43x8dt_0(_this__u8e3s4, null));
  }
  function charCount(_this__u8e3s4) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    return _this__u8e3s4 >= 65536 ? 2 : 1;
  }
  function _get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj($this_codePointsOutsideDirectionalIsolate, resultContinuation) {
    this.i4d_1 = $this_codePointsOutsideDirectionalIsolate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj).k2r = function ($this$sequence, $completion) {
    var tmp = this.l2r($this$sequence, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj).yc = function (p1, $completion) {
    return this.k2r(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 5;
            this.k4d_1 = 0;
            this.l4d_1 = get_codePoints(this.i4d_1).o();
            this.ac_1 = 1;
            continue $sm;
          case 1:
            if (!this.l4d_1.d1()) {
              this.ac_1 = 4;
              continue $sm;
            }

            this.m4d_1 = this.l4d_1.f1();
            var progression = get_PUSH_DIRECTIONAL_ISOLATE_RANGE();
            var containsLower = progression.ba_1;
            var containsUpper = progression.ca_1;
            var containsArg = this.m4d_1;
            if (containsLower <= containsArg ? containsArg <= containsUpper : false) {
              this.k4d_1 = this.k4d_1 + 1 | 0;
              this.ac_1 = 3;
              continue $sm;
            } else {
              if (this.m4d_1 === 8297) {
                if (this.k4d_1 > 0) {
                  this.k4d_1 = this.k4d_1 - 1 | 0;
                }
                this.ac_1 = 3;
                continue $sm;
              } else {
                if (this.k4d_1 === 0) {
                  this.ac_1 = 2;
                  suspendResult = this.j4d_1.df(this.m4d_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.ac_1 = 3;
                  continue $sm;
                }
              }
            }

          case 2:
            this.ac_1 = 3;
            continue $sm;
          case 3:
            this.ac_1 = 1;
            continue $sm;
          case 4:
            return Unit_instance;
          case 5:
            throw this.dc_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.bc_1 === 5) {
          throw e;
        } else {
          this.ac_1 = this.bc_1;
          this.dc_1 = e;
        }
      }
     while (true);
  };
  protoOf(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj).l2r = function ($this$sequence, completion) {
    var i = new _get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj(this.i4d_1, completion);
    i.j4d_1 = $this$sequence;
    return i;
  };
  function _get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj_0($this_codePointsOutsideDirectionalIsolate, resultContinuation) {
    var i = new _get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj($this_codePointsOutsideDirectionalIsolate, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.k2r($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _get_codePoints_$slambda_43x8dt($this_codePoints, resultContinuation) {
    this.v4d_1 = $this_codePoints;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(_get_codePoints_$slambda_43x8dt).k2r = function ($this$sequence, $completion) {
    var tmp = this.l2r($this$sequence, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(_get_codePoints_$slambda_43x8dt).yc = function (p1, $completion) {
    return this.k2r(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(_get_codePoints_$slambda_43x8dt).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 4;
            this.x4d_1 = 0;
            this.ac_1 = 1;
            continue $sm;
          case 1:
            if (!(this.x4d_1 < this.v4d_1.length)) {
              this.ac_1 = 3;
              continue $sm;
            }

            this.y4d_1 = codePointAt(this.v4d_1, this.x4d_1);
            this.ac_1 = 2;
            suspendResult = this.w4d_1.df(this.y4d_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.x4d_1 = this.x4d_1 + charCount(this.y4d_1) | 0;
            this.ac_1 = 1;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.dc_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.bc_1 === 4) {
          throw e;
        } else {
          this.ac_1 = this.bc_1;
          this.dc_1 = e;
        }
      }
     while (true);
  };
  protoOf(_get_codePoints_$slambda_43x8dt).l2r = function ($this$sequence, completion) {
    var i = new _get_codePoints_$slambda_43x8dt(this.v4d_1, completion);
    i.w4d_1 = $this$sequence;
    return i;
  };
  function _get_codePoints_$slambda_43x8dt_0($this_codePoints, resultContinuation) {
    var i = new _get_codePoints_$slambda_43x8dt($this_codePoints, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.k2r($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  var properties_initialized_CharHelpers_skiko_kt_d762bq;
  function _init_properties_CharHelpers_skiko_kt__8ej40s() {
    if (!properties_initialized_CharHelpers_skiko_kt_d762bq) {
      properties_initialized_CharHelpers_skiko_kt_d762bq = true;
      PUSH_DIRECTIONAL_ISOLATE_RANGE = numberRangeToNumber(8294, 8296);
    }
  }
  function Paragraph_1() {
  }
  function _set_paragraph__p1bfvb($this, value) {
    $this.h4e_1 = value;
    $this.i4e_1 = null;
  }
  function _get_text__de5ose($this) {
    return $this.f4e_1.j4e_1;
  }
  function lineMetricsForOffset($this, offset) {
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.checkOffsetIsValid' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= offset ? offset <= _get_text__de5ose($this).length : false)) {
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.checkOffsetIsValid.<anonymous>' call
      var message = 'Invalid offset: ' + offset + '. Valid range is [0, ' + _get_text__de5ose($this).length + ']';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp$ret$2;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.binarySearchFirstMatchingOrLast' call
      var this_0 = _get_lineMetrics__5iiuki($this);
      // Inline function 'kotlin.collections.isEmpty' call
      if (this_0.length === 0) {
        tmp$ret$2 = null;
        break $l$block;
      }
      var tmp = asList(this_0);
      var index = binarySearch(tmp, VOID, VOID, SkiaParagraph$lineMetricsForOffset$lambda(offset));
      tmp$ret$2 = this_0[coerceAtMost((-index | 0) - 1 | 0, get_lastIndex_0(this_0))];
    }
    return tmp$ret$2;
  }
  function getLineMetricsForVerticalPosition($this, vertical) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.binarySearchFirstMatchingOrLast' call
      var this_0 = _get_lineMetrics__5iiuki($this);
      // Inline function 'kotlin.collections.isEmpty' call
      if (this_0.length === 0) {
        tmp$ret$1 = null;
        break $l$block;
      }
      var tmp = asList(this_0);
      var index = binarySearch(tmp, VOID, VOID, SkiaParagraph$getLineMetricsForVerticalPosition$lambda(vertical));
      tmp$ret$1 = this_0[coerceAtMost((-index | 0) - 1 | 0, get_lastIndex_0(this_0))];
    }
    return tmp$ret$1;
  }
  function _get_lineMetrics__5iiuki($this) {
    var tmp0_elvis_lhs = $this.i4e_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = receiveLineMetrics($this);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.<get-lineMetrics>.<anonymous>' call
      $this.i4e_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var lineMetrics = tmp;
    return lineMetrics;
  }
  function receiveLineMetrics($this) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    var this_0 = _get_text__de5ose($this);
    if (charSequenceLength(this_0) === 0) {
      tmp = $this.g4e_1.x4e($this.h4e_1);
    } else {
      tmp = $this.h4e_1.y3a();
    }
    var lineMetrics = tmp;
    var fontMetrics = $this.y4e().a32();
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(lineMetrics.length === 0)) {
      lineMetrics[0] = trimFirstAscent(lineMetrics[0], fontMetrics, $this.g4e_1.z4e());
      lineMetrics[lineMetrics.length - 1 | 0] = trimLastDescent(lineMetrics[lineMetrics.length - 1 | 0], fontMetrics, $this.g4e_1.z4e());
    }
    return lineMetrics;
  }
  function getBoxForwardByOffset($this, offset) {
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.checkOffsetIsValid' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= offset ? offset <= _get_text__de5ose($this).length : false)) {
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.checkOffsetIsValid.<anonymous>' call
      var message = 'Invalid offset: ' + offset + '. Valid range is [0, ' + _get_text__de5ose($this).length + ']';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var to = offset + 1 | 0;
    while (to <= _get_text__de5ose($this).length) {
      var box = firstOrNull($this.h4e_1.v3a(offset, to, RectHeightMode_STRUT_getInstance(), RectWidthMode_TIGHT_getInstance()));
      if (!(box == null)) {
        return box;
      }
      to = to + 1 | 0;
    }
    return null;
  }
  function SkiaParagraph$lineMetricsForOffset$lambda($offset) {
    return function (it) {
      var tmp;
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.lineMetricsForOffset.<anonymous>' call
      if ($offset < it.b3a_1) {
        tmp = 1;
      } else {
        tmp = -1;
      }
      return tmp;
    };
  }
  function SkiaParagraph$getLineMetricsForVerticalPosition$lambda($vertical) {
    return function (it) {
      var tmp;
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.getLineMetricsForVerticalPosition.<anonymous>' call
      if ($vertical < it.j3a_1 + it.e3a_1) {
        tmp = 1;
      } else {
        tmp = -1;
      }
      return tmp;
    };
  }
  function SkiaParagraph(intrinsics, maxLines, ellipsis, constraints) {
    this.b4e_1 = maxLines;
    this.c4e_1 = ellipsis;
    this.d4e_1 = constraints;
    this.e4e_1 = this.c4e_1 ? '\u2026' : '';
    var tmp = this;
    tmp.f4e_1 = intrinsics instanceof SkiaParagraphIntrinsics ? intrinsics : THROW_CCE();
    var tmp_0 = this;
    // Inline function 'kotlin.apply' call
    var this_0 = this.f4e_1.a4f();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.layouter.<anonymous>' call
    this_0.b4f(this.b4e_1, this.e4e_1);
    tmp_0.g4e_1 = this_0;
    this.h4e_1 = this.g4e_1.c4f(this.e2w());
    this.h4e_1.t3a(this.e2w());
    this.i4e_1 = null;
  }
  protoOf(SkiaParagraph).y4e = function () {
    return this.g4e_1.y4e();
  };
  protoOf(SkiaParagraph).e2w = function () {
    return _Constraints___get_maxWidth__impl__uuyqc(this.d4e_1);
  };
  protoOf(SkiaParagraph).f2w = function () {
    return this.h4e_1.f2w();
  };
  protoOf(SkiaParagraph).q3a = function () {
    return this.f4e_1.s4e_1;
  };
  protoOf(SkiaParagraph).g3x = function () {
    var tmp0_safe_receiver = firstOrNull(_get_lineMetrics__5iiuki(this));
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.<get-firstBaseline>.<anonymous>' call
      tmp = tmp0_safe_receiver.j3a_1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).h3x = function () {
    var tmp0_safe_receiver = lastOrNull(_get_lineMetrics__5iiuki(this));
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.<get-lastBaseline>.<anonymous>' call
      tmp = tmp0_safe_receiver.j3a_1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).d3x = function () {
    return this.h4e_1.s3a();
  };
  protoOf(SkiaParagraph).c3x = function () {
    var tmp;
    if (_get_text__de5ose(this) === '' ? true : this.h4e_1.z3a() < 1) {
      tmp = 1;
    } else {
      tmp = this.h4e_1.z3a();
    }
    return tmp;
  };
  protoOf(SkiaParagraph).e3x = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.h4e_1.w3a();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(this_0.length);
    var inductionVariable = 0;
    var last = this_0.length;
    while (inductionVariable < last) {
      var item = this_0[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.<get-placeholderRects>.<anonymous>' call
      var tmp$ret$0 = toComposeRect(item.e3c_1);
      destination.a1(tmp$ret$0);
    }
    return destination;
  };
  protoOf(SkiaParagraph).x3w = function (start, end) {
    var boxes = this.h4e_1.v3a(start, end, RectHeightMode_MAX_getInstance(), RectWidthMode_TIGHT_getInstance());
    var path = Path();
    var inductionVariable = 0;
    var last = boxes.length;
    while (inductionVariable < last) {
      var b = boxes[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      asSkiaPath(path).z35(b.e3c_1);
    }
    return path;
  };
  protoOf(SkiaParagraph).v3x = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.getLineTop.<anonymous>' call
      // Inline function 'kotlin.math.floor' call
      var x = tmp0_safe_receiver.j3a_1 - tmp0_safe_receiver.d3a_1;
      tmp = Math.floor(x);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).x3x = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y39_1;
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).z3x = function (lineIndex, visibleEnd) {
    var tmp0_elvis_lhs = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return 0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var metrics = tmp;
    var tmp_0;
    if (visibleEnd) {
      var tmp_1;
      if (lineIndex > 0 ? metrics.y39_1 < _get_lineMetrics__5iiuki(this)[lineIndex - 1 | 0].z39_1 : false) {
        tmp_1 = metrics.z39_1;
      } else if (metrics.y39_1 < _get_text__de5ose(this).length ? charSequenceGet(_get_text__de5ose(this), metrics.y39_1) === _Char___init__impl__6a9atx(10) : false) {
        tmp_1 = metrics.y39_1;
      } else {
        tmp_1 = metrics.a3a_1;
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = metrics.z39_1;
    }
    return tmp_0;
  };
  protoOf(SkiaParagraph).u3x = function (offset) {
    var tmp0_safe_receiver = lineMetricsForOffset(this, offset);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k3a_1;
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).n3x = function (vertical) {
    var tmp0_safe_receiver = getLineMetricsForVerticalPosition(this, vertical);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k3a_1;
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).q3x = function (offset) {
    return this.f4e_1.p4e_1;
  };
  protoOf(SkiaParagraph).r3x = function (offset) {
    var tmp0_safe_receiver = getBoxForwardByOffset(this, offset);
    var tmp1_subject = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.g3c();
    var tmp;
    switch (tmp1_subject == null ? -1 : tmp1_subject.t9_1) {
      case 0:
        tmp = ResolvedTextDirection_Rtl_getInstance();
        break;
      case 1:
        tmp = ResolvedTextDirection_Ltr_getInstance();
        break;
      case -1:
        tmp = ResolvedTextDirection_Ltr_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(SkiaParagraph).s3x = function (offset) {
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.checkOffsetIsValid' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= offset ? offset <= _get_text__de5ose(this).length : false)) {
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.checkOffsetIsValid.<anonymous>' call
      var message = 'Invalid offset: ' + offset + '. Valid range is [0, ' + _get_text__de5ose(this).length + ']';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if ((offset < _get_text__de5ose(this).length ? isWhitespace(charSequenceGet(_get_text__de5ose(this), offset)) : false) ? true : offset === _get_text__de5ose(this).length) {
      var tmp;
      if (offset > 0 ? !isWhitespace(charSequenceGet(_get_text__de5ose(this), offset - 1 | 0)) : false) {
        tmp = toTextRange(this.h4e_1.x3a(offset - 1 | 0));
      } else {
        tmp = TextRange_0(offset, offset);
      }
      return tmp;
    }
    return toTextRange(this.h4e_1.x3a(offset));
  };
  protoOf(SkiaParagraph).j3x = function (canvas, color, shadow, textDecoration, drawStyle, blendMode) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.paint.<anonymous>' call
    var $this$with = this.g4e_1;
    $this$with.d4f(color, shadow, textDecoration);
    $this$with.e4f(drawStyle);
    $this$with.f4f(blendMode);
    var tmp$ret$1 = $this$with.c4f(this.e2w());
    _set_paragraph__p1bfvb(this, tmp$ret$1);
    this.h4e_1.u3a(get_nativeCanvas(canvas), 0.0, 0.0);
  };
  protoOf(SkiaParagraph).l3x = function (canvas, brush, alpha, shadow, textDecoration, drawStyle, blendMode) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.paint.<anonymous>' call
    var $this$with = this.g4e_1;
    $this$with.g4f(brush, Size(this.e2w(), this.f2w()), alpha, shadow, textDecoration);
    $this$with.e4f(drawStyle);
    $this$with.f4f(blendMode);
    var tmp$ret$1 = $this$with.c4f(this.e2w());
    _set_paragraph__p1bfvb(this, tmp$ret$1);
    this.h4e_1.u3a(get_nativeCanvas(canvas), 0.0, 0.0);
  };
  function trimFirstAscent(_this__u8e3s4, fontMetrics, textStyle) {
    if (get_isUnspecified(textStyle.b44()))
      return _this__u8e3s4;
    var tmp0_elvis_lhs = textStyle.d44();
    var style = tmp0_elvis_lhs == null ? Companion_getInstance_29().t4b_1 : tmp0_elvis_lhs;
    var tmp;
    if (Trim__isTrimFirstLineTop_impl_tqdsaa(style.v4b_1)) {
      tmp = -fontMetrics.u32_1;
    } else {
      tmp = _this__u8e3s4.d3a_1;
    }
    var ascent = tmp;
    return copy(_this__u8e3s4, VOID, VOID, VOID, VOID, VOID, ascent);
  }
  function trimLastDescent(_this__u8e3s4, fontMetrics, textStyle) {
    if (get_isUnspecified(textStyle.b44()))
      return _this__u8e3s4;
    var tmp0_elvis_lhs = textStyle.d44();
    var style = tmp0_elvis_lhs == null ? Companion_getInstance_29().t4b_1 : tmp0_elvis_lhs;
    var tmp;
    if (Trim__isTrimLastLineBottom_impl_8k6x3e(style.v4b_1)) {
      tmp = fontMetrics.v32_1;
    } else {
      tmp = _this__u8e3s4.e3a_1;
    }
    var descent = tmp;
    return copy(_this__u8e3s4, VOID, VOID, VOID, VOID, VOID, VOID, descent);
  }
  function toTextRange(_this__u8e3s4) {
    return TextRange_0(_this__u8e3s4.n34_1, _this__u8e3s4.o34_1);
  }
  function copy(_this__u8e3s4, startIndex, endIndex, endExcludingWhitespaces, endIncludingNewline, isHardBreak, ascent, descent, unscaledAscent, height, width, left, baseline, lineNumber) {
    startIndex = startIndex === VOID ? _this__u8e3s4.y39_1 : startIndex;
    endIndex = endIndex === VOID ? _this__u8e3s4.z39_1 : endIndex;
    endExcludingWhitespaces = endExcludingWhitespaces === VOID ? _this__u8e3s4.a3a_1 : endExcludingWhitespaces;
    endIncludingNewline = endIncludingNewline === VOID ? _this__u8e3s4.b3a_1 : endIncludingNewline;
    isHardBreak = isHardBreak === VOID ? _this__u8e3s4.c3a_1 : isHardBreak;
    ascent = ascent === VOID ? _this__u8e3s4.d3a_1 : ascent;
    descent = descent === VOID ? _this__u8e3s4.e3a_1 : descent;
    unscaledAscent = unscaledAscent === VOID ? _this__u8e3s4.f3a_1 : unscaledAscent;
    height = height === VOID ? _this__u8e3s4.g3a_1 : height;
    width = width === VOID ? _this__u8e3s4.h3a_1 : width;
    left = left === VOID ? _this__u8e3s4.i3a_1 : left;
    baseline = baseline === VOID ? _this__u8e3s4.j3a_1 : baseline;
    lineNumber = lineNumber === VOID ? _this__u8e3s4.k3a_1 : lineNumber;
    return new LineMetrics(startIndex, endIndex, endExcludingWhitespaces, endIncludingNewline, isHardBreak, ascent, descent, unscaledAscent, height, width, left, baseline, lineNumber);
  }
  function _TextDecorationLineStyle___init__impl__fccanb(value) {
    return value;
  }
  function TextDecorationLineStyle__toString_impl_uezvi9($this) {
    return $this === Companion_getInstance_38().h4f_1 ? 'Solid' : $this === Companion_getInstance_38().i4f_1 ? 'Double' : $this === Companion_getInstance_38().j4f_1 ? 'Dotted' : $this === Companion_getInstance_38().k4f_1 ? 'Dashed' : $this === Companion_getInstance_38().l4f_1 ? 'Wavy' : 'Invalid';
  }
  function Companion_25() {
    Companion_instance_27 = this;
    this.h4f_1 = _TextDecorationLineStyle___init__impl__fccanb(1);
    this.i4f_1 = _TextDecorationLineStyle___init__impl__fccanb(2);
    this.j4f_1 = _TextDecorationLineStyle___init__impl__fccanb(3);
    this.k4f_1 = _TextDecorationLineStyle___init__impl__fccanb(4);
    this.l4f_1 = _TextDecorationLineStyle___init__impl__fccanb(5);
  }
  var Companion_instance_27;
  function Companion_getInstance_38() {
    if (Companion_instance_27 == null)
      new Companion_25();
    return Companion_instance_27;
  }
  function TextDecorationLineStyle__hashCode_impl_8ntype($this) {
    return $this;
  }
  function TextDecorationLineStyle__equals_impl_3jy6m($this, other) {
    if (!(other instanceof TextDecorationLineStyle))
      return false;
    if (!($this === (other instanceof TextDecorationLineStyle ? other.m4f_1 : THROW_CCE())))
      return false;
    return true;
  }
  function TextDecorationLineStyle(value) {
    Companion_getInstance_38();
    this.m4f_1 = value;
  }
  protoOf(TextDecorationLineStyle).toString = function () {
    return TextDecorationLineStyle__toString_impl_uezvi9(this.m4f_1);
  };
  protoOf(TextDecorationLineStyle).hashCode = function () {
    return TextDecorationLineStyle__hashCode_impl_8ntype(this.m4f_1);
  };
  protoOf(TextDecorationLineStyle).equals = function (other) {
    return TextDecorationLineStyle__equals_impl_3jy6m(this.m4f_1, other);
  };
  function PlatformTextStyle_init_$Init$(spanStyle, paragraphStyle, $this) {
    PlatformTextStyle.call($this);
    $this.b43_1 = spanStyle;
    $this.c43_1 = paragraphStyle;
    return $this;
  }
  function PlatformTextStyle_init_$Create$(spanStyle, paragraphStyle) {
    return PlatformTextStyle_init_$Init$(spanStyle, paragraphStyle, objectCreate(protoOf(PlatformTextStyle)));
  }
  protoOf(PlatformTextStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PlatformTextStyle))
      return false;
    if (!equals(this.c43_1, other.c43_1))
      return false;
    if (!equals(this.b43_1, other.b43_1))
      return false;
    return true;
  };
  protoOf(PlatformTextStyle).hashCode = function () {
    return getObjectHashCode(this);
  };
  function PlatformTextStyle() {
  }
  function createPlatformTextStyle(spanStyle, paragraphStyle) {
    return PlatformTextStyle_init_$Create$(spanStyle, paragraphStyle);
  }
  function createFontFamilyResolver(fontCache) {
    return new FontFamilyResolverImpl(new SkiaFontLoader(fontCache));
  }
  function createFontFamilyResolver_0() {
    return new FontFamilyResolverImpl(new SkiaFontLoader());
  }
  function PlatformFontFamilyTypefaceAdapter() {
  }
  protoOf(PlatformFontFamilyTypefaceAdapter).q46 = function (typefaceRequest, platformFontLoader, onAsyncCompletion, createDefaultTypeface) {
    var tmp = typefaceRequest.r45_1;
    if (tmp instanceof FontListFontFamily)
      return null;
    var skiaFontLoader = platformFontLoader instanceof SkiaFontLoader ? platformFontLoader : THROW_CCE();
    var tmp0_elvis_lhs = typefaceRequest.r45_1;
    var result = skiaFontLoader.p4f(tmp0_elvis_lhs == null ? Companion_getInstance_16().q41_1 : tmp0_elvis_lhs, typefaceRequest.s45_1, typefaceRequest.t45_1);
    return new Immutable(result);
  };
  function SkiaFontLoader(fontCache) {
    fontCache = fontCache === VOID ? new FontCache() : fontCache;
    this.n4f_1 = fontCache;
    this.o4f_1 = this.n4f_1;
  }
  protoOf(SkiaFontLoader).q4f = function () {
    return this.n4f_1.r4f_1;
  };
  protoOf(SkiaFontLoader).r4a = function (font) {
    if (!(font instanceof PlatformFont)) {
      if (!(font.f45() === Companion_getInstance_19().h45_1)) {
        throw IllegalArgumentException_init_$Create$('Unsupported font type: ' + font);
      }
      return null;
    }
    var tmp0_subject = font.f45();
    var tmp;
    if (tmp0_subject === Companion_getInstance_19().g45_1) {
      tmp = this.n4f_1.v4f(font);
    } else if (tmp0_subject === Companion_getInstance_19().h45_1) {
      // Inline function 'kotlin.Result.getOrNull' call
      // Inline function 'kotlin.runCatching' call
      var tmp_0;
      try {
        // Inline function 'kotlin.Companion.success' call
        // Inline function 'androidx.compose.ui.text.font.SkiaFontLoader.loadBlocking.<anonymous>' call
        var value = this.n4f_1.v4f(font);
        tmp_0 = _Result___init__impl__xyqfz8(value);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var e = $p;
          // Inline function 'kotlin.Companion.failure' call
          tmp_1 = _Result___init__impl__xyqfz8(createFailure(e));
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var this_0 = tmp_0;
      var tmp_2;
      if (_Result___get_isFailure__impl__jpiriv(this_0)) {
        tmp_2 = null;
      } else {
        var tmp_3 = _Result___get_value__impl__bjfvqg(this_0);
        tmp_2 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      }
      tmp = tmp_2;
    } else if (tmp0_subject === Companion_getInstance_19().i45_1) {
      throw UnsupportedOperationException_init_$Create$('Unsupported Async font load path');
    } else {
      throw IllegalArgumentException_init_$Create$('Unknown loading type ' + new FontLoadingStrategy(font.f45()));
    }
    return tmp;
  };
  protoOf(SkiaFontLoader).p4f = function (fontFamily, fontWeight, fontStyle) {
    return this.n4f_1.p4f(fontFamily, fontWeight, fontStyle);
  };
  protoOf(SkiaFontLoader).w4f = function (font, $completion) {
    return this.r4a(font);
  };
  protoOf(SkiaFontLoader).x48 = function (font, $completion) {
    return this.w4f(font, $completion);
  };
  protoOf(SkiaFontLoader).x46 = function () {
    return this.o4f_1;
  };
  function ParagraphLayouter(text, textDirection, style, spanStyles, placeholders, density, fontFamilyResolver) {
    this.t4e_1 = text;
    this.u4e_1 = new ParagraphBuilder_0(fontFamilyResolver, this.t4e_1, style, VOID, VOID, VOID, spanStyles, placeholders, density, textDirection);
    this.v4e_1 = null;
    var tmp = this;
    tmp.w4e_1 = NaN;
  }
  protoOf(ParagraphLayouter).y4e = function () {
    return this.u4e_1.y4e();
  };
  protoOf(ParagraphLayouter).z4e = function () {
    return this.u4e_1.z4f_1;
  };
  protoOf(ParagraphLayouter).x4e = function (paragraph) {
    return this.u4e_1.x4e(paragraph);
  };
  protoOf(ParagraphLayouter).b4f = function (maxLines, ellipsis) {
    if (!(this.u4e_1.c4g_1 === maxLines) ? true : !(this.u4e_1.b4g_1 === ellipsis)) {
      this.u4e_1.c4g_1 = maxLines;
      this.u4e_1.b4g_1 = ellipsis;
      this.v4e_1 = null;
    }
  };
  protoOf(ParagraphLayouter).d4f = function (color, shadow, textDecoration) {
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(color), _Color___get_value__impl__1pls5m(Companion_getInstance().i3l_1))) {
      tmp = color;
    } else {
      // Inline function 'androidx.compose.ui.text.platform.ParagraphLayouter.setTextStyle.<anonymous>' call
      tmp = this.u4e_1.z4f_1.e3t();
    }
    var actualColor = tmp;
    if ((!equals(this.u4e_1.z4f_1.e3t(), actualColor) ? true : !equals(this.u4e_1.z4f_1.x43(), shadow)) ? true : !equals(this.u4e_1.z4f_1.w43(), textDecoration)) {
      this.u4e_1.z4f_1 = this.u4e_1.z4f_1.i43(actualColor, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, textDecoration, shadow);
      this.v4e_1 = null;
    }
  };
  protoOf(ParagraphLayouter).g4f = function (brush, brushSize, alpha, shadow, textDecoration) {
    var actualSize = this.u4e_1.a4g_1;
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    var tmp_4;
    if (!equals(this.u4e_1.z4f_1.i40(), brush)) {
      tmp_4 = true;
    } else {
      // Inline function 'androidx.compose.ui.geometry.isUnspecified' call
      tmp_4 = _Size___get_packedValue__impl__7rlt1o(actualSize).equals(_Size___get_packedValue__impl__7rlt1o(Companion_getInstance_6().j2w_1));
    }
    if (tmp_4) {
      tmp_3 = true;
    } else {
      tmp_3 = !sameValueAs(_Size___get_width__impl__58y75t(actualSize), _Size___get_width__impl__58y75t(brushSize));
    }
    if (tmp_3) {
      tmp_2 = true;
    } else {
      tmp_2 = !sameValueAs(_Size___get_height__impl__a04p02(actualSize), _Size___get_height__impl__a04p02(brushSize));
    }
    if (tmp_2) {
      tmp_1 = true;
    } else {
      tmp_1 = !sameValueAs(this.u4e_1.z4f_1.p3g(), alpha);
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = !equals(this.u4e_1.z4f_1.x43(), shadow);
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = !equals(this.u4e_1.z4f_1.w43(), textDecoration);
    }
    if (tmp) {
      this.u4e_1.z4f_1 = this.u4e_1.z4f_1.k43(brush, alpha, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, textDecoration, shadow);
      this.u4e_1.a4g_1 = brushSize;
      this.v4e_1 = null;
    }
  };
  protoOf(ParagraphLayouter).e4f = function (drawStyle) {
    if (!equals(this.u4e_1.h4g_1, drawStyle)) {
      this.u4e_1.h4g_1 = drawStyle;
      this.v4e_1 = null;
    }
  };
  protoOf(ParagraphLayouter).f4f = function (blendMode) {
    if (!(this.u4e_1.i4g_1 === blendMode)) {
      this.u4e_1.i4g_1 = blendMode;
      this.v4e_1 = null;
    }
  };
  protoOf(ParagraphLayouter).c4f = function (width) {
    var paragraph = this.v4e_1;
    var tmp;
    if (!(paragraph == null)) {
      if (!sameValueAs(this.w4e_1, width)) {
        this.w4e_1 = width;
        paragraph.t3a(width);
      }
      tmp = paragraph;
    } else {
      // Inline function 'kotlin.apply' call
      var this_0 = this.u4e_1.e3();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.ParagraphLayouter.layoutParagraph.<anonymous>' call
      this.v4e_1 = this_0;
      this_0.t3a(width);
      tmp = this_0;
    }
    return tmp;
  };
  function sameValueAs(_this__u8e3s4, other) {
    // Inline function 'kotlin.math.abs' call
    var x = _this__u8e3s4 - other;
    return Math.abs(x) < 1.0E-5;
  }
  function get_GenericFontFamiliesMapping() {
    _init_properties_PlatformFont_skiko_kt__1fvojb();
    // Inline function 'kotlin.getValue' call
    var this_0 = GenericFontFamiliesMapping$delegate;
    GenericFontFamiliesMapping$factory();
    return this_0.q2();
  }
  var GenericFontFamiliesMapping$delegate;
  var Platform_Unknown_instance;
  var Platform_Linux_instance;
  var Platform_Windows_instance;
  var Platform_MacOS_instance;
  var Platform_IOS_instance;
  var Platform_TvOS_instance;
  var Platform_WatchOS_instance;
  var Platform_Android_instance;
  var Platform_entriesInitialized;
  function Platform_initEntries() {
    if (Platform_entriesInitialized)
      return Unit_instance;
    Platform_entriesInitialized = true;
    Platform_Unknown_instance = new Platform('Unknown', 0);
    Platform_Linux_instance = new Platform('Linux', 1);
    Platform_Windows_instance = new Platform('Windows', 2);
    Platform_MacOS_instance = new Platform('MacOS', 3);
    Platform_IOS_instance = new Platform('IOS', 4);
    Platform_TvOS_instance = new Platform('TvOS', 5);
    Platform_WatchOS_instance = new Platform('WatchOS', 6);
    Platform_Android_instance = new Platform('Android', 7);
  }
  function Platform(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function FontLoadResult(typeface, aliases) {
    this.n4g_1 = typeface;
    this.o4g_1 = aliases;
  }
  function LoadedFont() {
  }
  function FontLoader() {
    this.p4g_1 = new FontCache();
    this.q4g_1 = createFontFamilyResolver(this.p4g_1);
  }
  function ensureRegistered($this, typeface, key) {
    if (!$this.t4f_1.s(key)) {
      $this.s4f_1.j3d(typeface, key);
      $this.t4f_1.a1(key);
    }
  }
  function ensureRegistered_0($this, fontFamily) {
    var tmp;
    if (fontFamily instanceof FontListFontFamily) {
      // Inline function 'kotlin.collections.filterIsInstance' call
      // Inline function 'kotlin.collections.filterIsInstanceTo' call
      var this_0 = fontFamily.p4a_1;
      var destination = ArrayList_init_$Create$_0();
      var tmp0_iterator = this_0.o();
      while (tmp0_iterator.d1()) {
        var element = tmp0_iterator.f1();
        if (element instanceof SystemFont) {
          destination.a1(element);
        }
      }
      var fonts = destination;
      var tmp_0;
      if (fonts.m() === fontFamily.p4a_1.m()) {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(fonts, 10));
        var tmp0_iterator_0 = fonts.o();
        while (tmp0_iterator_0.d1()) {
          var item = tmp0_iterator_0.f1();
          // Inline function 'androidx.compose.ui.text.platform.FontCache.ensureRegistered.<anonymous>' call
          var tmp$ret$2 = item.v4g_1;
          destination_0.a1(tmp$ret$2);
        }
        tmp_0 = destination_0;
      } else {
        throw IllegalArgumentException_init_$Create$("Don't load FontListFontFamily through ensureRegistered: " + fontFamily);
      }
      tmp = tmp_0;
    } else {
      if (fontFamily instanceof LoadedFontFamily) {
        var tmp_1 = fontFamily.s4g_1;
        var typeface = tmp_1 instanceof SkiaBackedTypeface ? tmp_1 : THROW_CCE();
        ensureRegistered($this, typeface.t4g_1, typeface.u4g_1);
        tmp = listOf_0(typeface.u4g_1);
      } else {
        if (fontFamily instanceof GenericFontFamily) {
          tmp = get_aliases(fontFamily);
        } else {
          if (fontFamily instanceof DefaultFontFamily) {
            tmp = get_aliases(Companion_getInstance_16().r41_1);
          } else {
            throw IllegalArgumentException_init_$Create$('Unknown font family type: ' + fontFamily);
          }
        }
      }
    }
    return tmp;
  }
  function FontCache$load$lambda($font) {
    return function (it) {
      return loadTypeface($font);
    };
  }
  function FontCache() {
    this.r4f_1 = FontCollection_init_$Create$();
    this.s4f_1 = new TypefaceFontProvider();
    this.t4f_1 = HashSet_init_$Create$();
    this.u4f_1 = new ExpireAfterAccessCache(new Long(-129542144, 13));
    this.r4f_1.p39(Companion_getInstance_7().k33_1);
    this.r4f_1.o39(this.s4f_1);
  }
  protoOf(FontCache).v4f = function (font) {
    var tmp = font.x46();
    var typeface = this.u4f_1.q4c(tmp, FontCache$load$lambda(font));
    ensureRegistered(this, typeface, font.x46());
    return new FontLoadResult(typeface, listOf_0(font.x46()));
  };
  protoOf(FontCache).p4f = function (fontFamily, fontWeight, fontStyle) {
    var aliases = ensureRegistered_0(this, fontFamily);
    var style = toSkFontStyle(fontStyle).r33(fontWeight.t4a_1);
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(aliases);
    return new FontLoadResult(first_0(this.r4f_1.r39(tmp$ret$0, style)), aliases);
  };
  function SystemFont() {
  }
  function SkiaBackedTypeface() {
  }
  function get_aliases(_this__u8e3s4) {
    _init_properties_PlatformFont_skiko_kt__1fvojb();
    var tmp0_elvis_lhs = get_GenericFontFamiliesMapping().x2(_this__u8e3s4.l45_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'Unknown generic font family ' + _this__u8e3s4.l45_1;
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function GenericFontFamiliesMapping$delegate$lambda() {
    _init_properties_PlatformFont_skiko_kt__1fvojb();
    var tmp;
    switch (currentPlatform().t9_1) {
      case 1:
        tmp = mapOf([to(Companion_getInstance_16().r41_1.l45_1, listOf(['Noto Sans', 'DejaVu Sans', 'Arial'])), to(Companion_getInstance_16().s41_1.l45_1, listOf(['Noto Serif', 'DejaVu Serif', 'Times New Roman'])), to(Companion_getInstance_16().t41_1.l45_1, listOf(['Noto Sans Mono', 'DejaVu Sans Mono', 'Consolas'])), to(Companion_getInstance_16().u41_1.l45_1, listOf_0('Comic Sans MS'))]);
        break;
      case 2:
        tmp = mapOf([to(Companion_getInstance_16().r41_1.l45_1, listOf(['Segoe UI', 'Arial'])), to(Companion_getInstance_16().s41_1.l45_1, listOf_0('Times New Roman')), to(Companion_getInstance_16().t41_1.l45_1, listOf_0('Consolas')), to(Companion_getInstance_16().u41_1.l45_1, listOf_0('Comic Sans MS'))]);
        break;
      case 3:
      case 4:
      case 5:
      case 6:
        tmp = mapOf([to(Companion_getInstance_16().r41_1.l45_1, listOf(['.AppleSystemUIFont', 'Helvetica Neue', 'Helvetica'])), to(Companion_getInstance_16().s41_1.l45_1, listOf(['.AppleSystemUIFontSerif', 'Times', 'Times New Roman'])), to(Companion_getInstance_16().t41_1.l45_1, listOf(['.AppleSystemUIFontMonospaced', 'Menlo', 'Courier'])), to(Companion_getInstance_16().u41_1.l45_1, listOf(['Apple Chancery', 'Snell Roundhand']))]);
        break;
      case 7:
        tmp = mapOf([to(Companion_getInstance_16().r41_1.l45_1, listOf(['Roboto', 'Noto Sans'])), to(Companion_getInstance_16().s41_1.l45_1, listOf(['Roboto Serif', 'Noto Serif'])), to(Companion_getInstance_16().t41_1.l45_1, listOf(['Roboto Mono', 'Noto Sans Mono'])), to(Companion_getInstance_16().u41_1.l45_1, listOf_0('Comic Sans MS'))]);
        break;
      case 0:
        tmp = mapOf([to(Companion_getInstance_16().r41_1.l45_1, listOf_0('Arial')), to(Companion_getInstance_16().s41_1.l45_1, listOf_0('Times New Roman')), to(Companion_getInstance_16().t41_1.l45_1, listOf_0('Consolas')), to(Companion_getInstance_16().u41_1.l45_1, listOf_0('Comic Sans MS'))]);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function Platform_Unknown_getInstance() {
    Platform_initEntries();
    return Platform_Unknown_instance;
  }
  function Platform_Linux_getInstance() {
    Platform_initEntries();
    return Platform_Linux_instance;
  }
  function Platform_Windows_getInstance() {
    Platform_initEntries();
    return Platform_Windows_instance;
  }
  function Platform_MacOS_getInstance() {
    Platform_initEntries();
    return Platform_MacOS_instance;
  }
  function Platform_IOS_getInstance() {
    Platform_initEntries();
    return Platform_IOS_instance;
  }
  function Platform_Android_getInstance() {
    Platform_initEntries();
    return Platform_Android_instance;
  }
  function GenericFontFamiliesMapping$factory() {
    return getPropertyCallableRef('GenericFontFamiliesMapping', 0, KProperty0, function () {
      return get_GenericFontFamiliesMapping();
    }, null);
  }
  var properties_initialized_PlatformFont_skiko_kt_pdb6wl;
  function _init_properties_PlatformFont_skiko_kt__1fvojb() {
    if (!properties_initialized_PlatformFont_skiko_kt_pdb6wl) {
      properties_initialized_PlatformFont_skiko_kt_pdb6wl = true;
      GenericFontFamiliesMapping$delegate = lazy_0(GenericFontFamiliesMapping$delegate$lambda);
    }
  }
  function drawMultiParagraph(_this__u8e3s4, canvas, brush, alpha, shadow, decoration, drawStyle, blendMode) {
    var tmp;
    if (alpha === VOID) {
      tmp = NaN;
    } else {
      tmp = alpha;
    }
    alpha = tmp;
    shadow = shadow === VOID ? null : shadow;
    decoration = decoration === VOID ? null : decoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_8().v3h_1 : blendMode;
    canvas.x3i();
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = _this__u8e3s4.o3w_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.m() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.n(index);
        // Inline function 'androidx.compose.ui.text.platform.drawMultiParagraph.<anonymous>' call
        item.p3w_1.l3x(canvas, brush, alpha, shadow, decoration, drawStyle, blendMode);
        canvas.a3j(0.0, item.p3w_1.f2w());
      }
       while (inductionVariable <= last);
    canvas.y3i();
  }
  function get_DefaultFontSize_0() {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    return DefaultFontSize_0;
  }
  var DefaultFontSize_0;
  function get_skTextStylesCache() {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    return skTextStylesCache;
  }
  var skTextStylesCache;
  function ComputedStyle_init_$Init$(density, spanStyle, brushSize, blendMode, lineHeight, $this) {
    brushSize = brushSize === VOID ? Companion_getInstance_6().j2w_1 : brushSize;
    blendMode = blendMode === VOID ? Companion_getInstance_0().m3t_1 : blendMode;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.<init>.<anonymous>' call
    var tmp = density.i2x(spanStyle.t3z_1);
    var tmp_0;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    var this_0 = spanStyle.z3z_1;
    if (!get_isUnspecified(this_0)) {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.<init>.<anonymous>' call
      tmp_0 = density.i2x(spanStyle.z3z_1);
    } else {
      tmp_0 = null;
    }
    var tmp_1 = tmp_0;
    var tmp0_safe_receiver = spanStyle.g40_1;
    var tmp_2 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o40_1;
    var tmp_3;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    if (!get_isUnspecified(lineHeight)) {
      tmp_3 = toPx(lineHeight, density, spanStyle.t3z_1);
    } else {
      tmp_3 = null;
    }
    ComputedStyle.call($this, spanStyle.s3z_1, brushSize, tmp, spanStyle.u3z_1, spanStyle.v3z_1, spanStyle.w3z_1, spanStyle.x3z_1, spanStyle.y3z_1, tmp_1, spanStyle.a40_1, spanStyle.b40_1, spanStyle.c40_1, spanStyle.d40_1, spanStyle.e40_1, tmp_2, spanStyle.f40_1, spanStyle.h40_1, blendMode, tmp_3);
    return $this;
  }
  function ComputedStyle_init_$Create$(density, spanStyle, brushSize, blendMode, lineHeight) {
    return ComputedStyle_init_$Init$(density, spanStyle, brushSize, blendMode, lineHeight, objectCreate(protoOf(ComputedStyle)));
  }
  function toTextPaint($this) {
    // Inline function 'kotlin.let' call
    var this_0 = Paint_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.toTextPaint.<anonymous>' call
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = asComposePaint(this_0);
      $this$with.d3t($this.w4g_1.e3t());
      applyBrush($this$with, $this.w4g_1.i40(), $this.x4g_1, $this.w4g_1.p3g());
      applyDrawStyle($this$with, $this.m4h_1);
      $this$with.i3t($this.n4h_1);
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp;
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.toTextPaint.<anonymous>.<anonymous>.<anonymous>' call
      if ((!($this$with.f3t() == null) ? true : !($this$with.c3v() === Companion_getInstance_9().l3n_1)) ? true : !this_0.o35()) {
        tmp = this_0;
      } else {
        tmp = null;
      }
      tmp$ret$2 = tmp;
      break $l$block;
    }
    return tmp$ret$2;
  }
  function ComputedStyle(textForegroundStyle, brushSize, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, textDecorationLineStyle, shadow, drawStyle, blendMode, lineHeight) {
    background = background === VOID ? Companion_getInstance().i3l_1 : background;
    this.w4g_1 = textForegroundStyle;
    this.x4g_1 = brushSize;
    this.y4g_1 = fontSize;
    this.z4g_1 = fontWeight;
    this.a4h_1 = fontStyle;
    this.b4h_1 = fontSynthesis;
    this.c4h_1 = fontFamily;
    this.d4h_1 = fontFeatureSettings;
    this.e4h_1 = letterSpacing;
    this.f4h_1 = baselineShift;
    this.g4h_1 = textGeometricTransform;
    this.h4h_1 = localeList;
    this.i4h_1 = background;
    this.j4h_1 = textDecoration;
    this.k4h_1 = textDecorationLineStyle;
    this.l4h_1 = shadow;
    this.m4h_1 = drawStyle;
    this.n4h_1 = blendMode;
    this.o4h_1 = lineHeight;
  }
  protoOf(ComputedStyle).p4h = function (fontFamilyResolver) {
    var res = TextStyle_init_$Create$();
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var this_0 = this.w4g_1.e3t();
    if (!equals(_Color___get_value__impl__1pls5m(this_0), _Color___get_value__impl__1pls5m(Companion_getInstance().i3l_1))) {
      res.d35(toArgb(this.w4g_1.e3t()));
    }
    var foreground = toTextPaint(this);
    if (!(foreground == null)) {
      res.l3c(foreground);
    }
    var tmp0_safe_receiver = this.a4h_1;
    var tmp = tmp0_safe_receiver;
    if ((tmp == null ? null : new FontStyle(tmp)) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp_0 = tmp0_safe_receiver;
      // Inline function 'kotlin.contracts.contract' call
      var it = (tmp_0 == null ? null : new FontStyle(tmp_0)).v4a_1;
      res.r3c(toSkFontStyle(it));
    }
    var tmp1_safe_receiver = this.j4h_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      res.p3c(toSkDecorationStyle(tmp1_safe_receiver, this.w4g_1.e3t(), this.k4h_1));
    }
    if (!equals(this.i4h_1, Companion_getInstance().i3l_1)) {
      // Inline function 'kotlin.also' call
      var this_1 = Paint_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.toSkTextStyle.<anonymous>' call
      this_1.d35(toArgb(this.i4h_1));
      res.n3c(this_1);
    }
    var tmp2_safe_receiver = this.z4g_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      res.r3c(res.b38().r33(tmp2_safe_receiver.t4a_1));
    }
    var tmp3_safe_receiver = this.l4h_1;
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.toSkTextStyle.<anonymous>' call
      res.t3c(toSkShadow(tmp3_safe_receiver));
    }
    var tmp4_safe_receiver = this.e4h_1;
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      res.c3d(tmp4_safe_receiver);
    }
    var tmp_1 = Companion_getInstance_10();
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = this.d4h_1;
    var tmp$ret$8 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    res.v3c(tmp_1.m32(tmp$ret$8));
    res.w3c(this.y4g_1);
    var tmp5_safe_receiver = this.c4h_1;
    if (tmp5_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp0_elvis_lhs_0 = this.z4g_1;
      var tmp_2 = tmp0_elvis_lhs_0 == null ? Companion_getInstance_22().d41_1 : tmp0_elvis_lhs_0;
      var tmp1_elvis_lhs = this.a4h_1;
      var tmp_3;
      var tmp_4 = tmp1_elvis_lhs;
      if ((tmp_4 == null ? null : new FontStyle(tmp_4)) == null) {
        tmp_3 = Companion_getInstance_20().k41_1;
      } else {
        tmp_3 = tmp1_elvis_lhs;
      }
      var tmp_5 = tmp_3;
      var tmp2_elvis_lhs = this.b4h_1;
      var tmp_6;
      var tmp_7 = tmp2_elvis_lhs;
      if ((tmp_7 == null ? null : new FontSynthesis(tmp_7)) == null) {
        tmp_6 = Companion_getInstance_21().m41_1;
      } else {
        tmp_6 = tmp2_elvis_lhs;
      }
      var tmp_8 = fontFamilyResolver.s46(tmp5_safe_receiver, tmp_2, tmp_5, tmp_6).q2();
      var resolved = tmp_8 instanceof FontLoadResult ? tmp_8 : THROW_CCE();
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_2 = resolved.o4g_1;
      var tmp$ret$9 = copyToArray(this_2);
      res.y3c(tmp$ret$9);
    }
    var tmp6_safe_receiver = this.f4h_1;
    var tmp_9 = tmp6_safe_receiver;
    if ((tmp_9 == null ? null : new BaselineShift(tmp_9)) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp_10 = tmp6_safe_receiver;
      // Inline function 'kotlin.contracts.contract' call
      var it_0 = (tmp_10 == null ? null : new BaselineShift(tmp_10)).f4b_1;
      var fontMetrics = res.g3d();
      res.e3d(_BaselineShift___get_multiplier__impl__qhmjek(it_0) * fontMetrics.u32_1);
    }
    var tmp7_safe_receiver = this.o4h_1;
    if (tmp7_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      res.a3d(tmp7_safe_receiver / this.y4g_1);
    }
    return res;
  };
  protoOf(ComputedStyle).q4h = function (density, other) {
    var fontSize = toPx_0(other.t3z_1, density, this.y4g_1);
    this.w4g_1 = this.w4g_1.n40(other.s3z_1);
    var tmp0_safe_receiver = other.x3z_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.c4h_1 = tmp0_safe_receiver;
    }
    this.y4g_1 = fontSize;
    var tmp1_safe_receiver = other.u3z_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.z4g_1 = tmp1_safe_receiver;
    }
    var tmp2_safe_receiver = other.v3z_1;
    var tmp = tmp2_safe_receiver;
    if ((tmp == null ? null : new FontStyle(tmp)) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp_0 = tmp2_safe_receiver;
      // Inline function 'kotlin.contracts.contract' call
      this.a4h_1 = (tmp_0 == null ? null : new FontStyle(tmp_0)).v4a_1;
    }
    var tmp3_safe_receiver = other.w3z_1;
    var tmp_1 = tmp3_safe_receiver;
    if ((tmp_1 == null ? null : new FontSynthesis(tmp_1)) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp_2 = tmp3_safe_receiver;
      // Inline function 'kotlin.contracts.contract' call
      this.b4h_1 = (tmp_2 == null ? null : new FontSynthesis(tmp_2)).w4a_1;
    }
    var tmp4_safe_receiver = other.y3z_1;
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.d4h_1 = tmp4_safe_receiver;
    }
    if (!get_isUnspecified(other.z3z_1)) {
      this.e4h_1 = toPx_0(other.z3z_1, density, fontSize);
    }
    var tmp5_safe_receiver = other.a40_1;
    var tmp_3 = tmp5_safe_receiver;
    if ((tmp_3 == null ? null : new BaselineShift(tmp_3)) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp_4 = tmp5_safe_receiver;
      // Inline function 'kotlin.contracts.contract' call
      this.f4h_1 = (tmp_4 == null ? null : new BaselineShift(tmp_4)).f4b_1;
    }
    var tmp6_safe_receiver = other.b40_1;
    if (tmp6_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.g4h_1 = tmp6_safe_receiver;
    }
    var tmp7_safe_receiver = other.c40_1;
    if (tmp7_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.h4h_1 = tmp7_safe_receiver;
    }
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var this_0 = other.d40_1;
    if (!equals(_Color___get_value__impl__1pls5m(this_0), _Color___get_value__impl__1pls5m(Companion_getInstance().i3l_1))) {
      this.i4h_1 = other.d40_1;
    }
    var tmp8_safe_receiver = other.e40_1;
    if (tmp8_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.j4h_1 = tmp8_safe_receiver;
    }
    var tmp9_safe_receiver = other.f40_1;
    if (tmp9_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.l4h_1 = tmp9_safe_receiver;
    }
    var tmp10_safe_receiver = other.h40_1;
    if (tmp10_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.m4h_1 = tmp10_safe_receiver;
    }
    var tmp11_safe_receiver = other.g40_1;
    if (tmp11_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.merge.<anonymous>' call
      var tmp0_safe_receiver_0 = tmp11_safe_receiver.o40_1;
      var tmp_5;
      var tmp_6 = tmp0_safe_receiver_0;
      if ((tmp_6 == null ? null : new TextDecorationLineStyle(tmp_6)) == null) {
        tmp_5 = null;
      } else {
        // Inline function 'kotlin.let' call
        var tmp_7 = tmp0_safe_receiver_0;
        // Inline function 'kotlin.contracts.contract' call
        this.k4h_1 = (tmp_7 == null ? null : new TextDecorationLineStyle(tmp_7)).m4f_1;
        tmp_5 = Unit_instance;
      }
    }
  };
  protoOf(ComputedStyle).toString = function () {
    var tmp = this.w4g_1;
    var tmp_0 = this.x4g_1;
    var tmp_1 = this.y4g_1;
    var tmp_2 = this.z4g_1;
    var tmp_3 = this.a4h_1;
    var tmp_4 = tmp_3 == null ? null : new FontStyle(tmp_3);
    var tmp_5 = this.b4h_1;
    var tmp_6 = tmp_5 == null ? null : new FontSynthesis(tmp_5);
    var tmp_7 = this.c4h_1;
    var tmp_8 = this.d4h_1;
    var tmp_9 = this.e4h_1;
    var tmp_10 = this.f4h_1;
    var tmp_11 = tmp_10 == null ? null : new BaselineShift(tmp_10);
    var tmp_12 = this.g4h_1;
    var tmp_13 = this.h4h_1;
    var tmp_14 = this.i4h_1;
    var tmp_15 = this.j4h_1;
    var tmp_16 = this.k4h_1;
    return 'ComputedStyle(textForegroundStyle=' + tmp + ', brushSize=' + new Size_0(tmp_0) + ', fontSize=' + tmp_1 + ', fontWeight=' + tmp_2 + ', fontStyle=' + tmp_4 + ', fontSynthesis=' + tmp_6 + ', fontFamily=' + tmp_7 + ', fontFeatureSettings=' + tmp_8 + ', letterSpacing=' + tmp_9 + ', baselineShift=' + tmp_11 + ', textGeometricTransform=' + tmp_12 + ', localeList=' + tmp_13 + ', background=' + new Color(tmp_14) + ', textDecoration=' + tmp_15 + ', textDecorationLineStyle=' + (tmp_16 == null ? null : new TextDecorationLineStyle(tmp_16)) + ', shadow=' + this.l4h_1 + ', drawStyle=' + this.m4h_1 + ', blendMode=' + new BlendMode(this.n4h_1) + ', lineHeight=' + this.o4h_1 + ')';
  };
  protoOf(ComputedStyle).hashCode = function () {
    var result = hashCode(this.w4g_1);
    result = imul(result, 31) + Size__hashCode_impl_2h1qpd(this.x4g_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.y4g_1) | 0;
    result = imul(result, 31) + (this.z4g_1 == null ? 0 : this.z4g_1.hashCode()) | 0;
    var tmp = imul(result, 31);
    var tmp_0;
    var tmp_1 = this.a4h_1;
    if ((tmp_1 == null ? null : new FontStyle(tmp_1)) == null) {
      tmp_0 = 0;
    } else {
      tmp_0 = FontStyle__hashCode_impl_7qhg4w(this.a4h_1);
    }
    result = tmp + tmp_0 | 0;
    var tmp_2 = imul(result, 31);
    var tmp_3;
    var tmp_4 = this.b4h_1;
    if ((tmp_4 == null ? null : new FontSynthesis(tmp_4)) == null) {
      tmp_3 = 0;
    } else {
      tmp_3 = FontSynthesis__hashCode_impl_4wi11v(this.b4h_1);
    }
    result = tmp_2 + tmp_3 | 0;
    result = imul(result, 31) + (this.c4h_1 == null ? 0 : hashCode(this.c4h_1)) | 0;
    result = imul(result, 31) + (this.d4h_1 == null ? 0 : getStringHashCode(this.d4h_1)) | 0;
    result = imul(result, 31) + (this.e4h_1 == null ? 0 : getNumberHashCode(this.e4h_1)) | 0;
    var tmp_5 = imul(result, 31);
    var tmp_6;
    var tmp_7 = this.f4h_1;
    if ((tmp_7 == null ? null : new BaselineShift(tmp_7)) == null) {
      tmp_6 = 0;
    } else {
      tmp_6 = BaselineShift__hashCode_impl_g0potx(this.f4h_1);
    }
    result = tmp_5 + tmp_6 | 0;
    result = imul(result, 31) + (this.g4h_1 == null ? 0 : this.g4h_1.hashCode()) | 0;
    result = imul(result, 31) + (this.h4h_1 == null ? 0 : this.h4h_1.hashCode()) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.i4h_1) | 0;
    result = imul(result, 31) + (this.j4h_1 == null ? 0 : this.j4h_1.hashCode()) | 0;
    var tmp_8 = imul(result, 31);
    var tmp_9;
    var tmp_10 = this.k4h_1;
    if ((tmp_10 == null ? null : new TextDecorationLineStyle(tmp_10)) == null) {
      tmp_9 = 0;
    } else {
      tmp_9 = TextDecorationLineStyle__hashCode_impl_8ntype(this.k4h_1);
    }
    result = tmp_8 + tmp_9 | 0;
    result = imul(result, 31) + (this.l4h_1 == null ? 0 : this.l4h_1.hashCode()) | 0;
    result = imul(result, 31) + (this.m4h_1 == null ? 0 : hashCode(this.m4h_1)) | 0;
    result = imul(result, 31) + BlendMode__hashCode_impl_93ceri(this.n4h_1) | 0;
    result = imul(result, 31) + (this.o4h_1 == null ? 0 : getNumberHashCode(this.o4h_1)) | 0;
    return result;
  };
  protoOf(ComputedStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ComputedStyle))
      return false;
    var tmp0_other_with_cast = other instanceof ComputedStyle ? other : THROW_CCE();
    if (!equals(this.w4g_1, tmp0_other_with_cast.w4g_1))
      return false;
    if (!equals(this.x4g_1, tmp0_other_with_cast.x4g_1))
      return false;
    if (!equals(this.y4g_1, tmp0_other_with_cast.y4g_1))
      return false;
    if (!equals(this.z4g_1, tmp0_other_with_cast.z4g_1))
      return false;
    var tmp = this.a4h_1;
    var tmp_0 = tmp == null ? null : new FontStyle(tmp);
    var tmp_1 = tmp0_other_with_cast.a4h_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new FontStyle(tmp_1)))
      return false;
    var tmp_2 = this.b4h_1;
    var tmp_3 = tmp_2 == null ? null : new FontSynthesis(tmp_2);
    var tmp_4 = tmp0_other_with_cast.b4h_1;
    if (!equals(tmp_3, tmp_4 == null ? null : new FontSynthesis(tmp_4)))
      return false;
    if (!equals(this.c4h_1, tmp0_other_with_cast.c4h_1))
      return false;
    if (!(this.d4h_1 == tmp0_other_with_cast.d4h_1))
      return false;
    if (!equals(this.e4h_1, tmp0_other_with_cast.e4h_1))
      return false;
    var tmp_5 = this.f4h_1;
    var tmp_6 = tmp_5 == null ? null : new BaselineShift(tmp_5);
    var tmp_7 = tmp0_other_with_cast.f4h_1;
    if (!equals(tmp_6, tmp_7 == null ? null : new BaselineShift(tmp_7)))
      return false;
    if (!equals(this.g4h_1, tmp0_other_with_cast.g4h_1))
      return false;
    if (!equals(this.h4h_1, tmp0_other_with_cast.h4h_1))
      return false;
    if (!equals(this.i4h_1, tmp0_other_with_cast.i4h_1))
      return false;
    if (!equals(this.j4h_1, tmp0_other_with_cast.j4h_1))
      return false;
    var tmp_8 = this.k4h_1;
    var tmp_9 = tmp_8 == null ? null : new TextDecorationLineStyle(tmp_8);
    var tmp_10 = tmp0_other_with_cast.k4h_1;
    if (!equals(tmp_9, tmp_10 == null ? null : new TextDecorationLineStyle(tmp_10)))
      return false;
    if (!equals(this.l4h_1, tmp0_other_with_cast.l4h_1))
      return false;
    if (!equals(this.m4h_1, tmp0_other_with_cast.m4h_1))
      return false;
    if (!(this.n4h_1 === tmp0_other_with_cast.n4h_1))
      return false;
    if (!equals(this.o4h_1, tmp0_other_with_cast.o4h_1))
      return false;
    return true;
  };
  function toPx(_this__u8e3s4, density, fontSize) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.platform.toPx.<anonymous>' call
    var tmp$ret$1 = density.i2x(fontSize);
    return toPx_0(_this__u8e3s4, density, tmp$ret$1);
  }
  function toSkFontStyle(_this__u8e3s4) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    return _this__u8e3s4 === Companion_getInstance_20().l41_1 ? Companion_getInstance_11().o33_1 : Companion_getInstance_11().m33_1;
  }
  function toSkDecorationStyle(_this__u8e3s4, color, textDecorationLineStyle) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    var underline = _this__u8e3s4.y4b(Companion_getInstance_31().a42_1);
    var overline = false;
    var lineThrough = _this__u8e3s4.y4b(Companion_getInstance_31().b42_1);
    var gaps = false;
    var tmp;
    var tmp_0 = textDecorationLineStyle;
    if ((tmp_0 == null ? null : new TextDecorationLineStyle(tmp_0)) == null) {
      tmp = null;
    } else {
      tmp = toSkDecorationLineStyle(textDecorationLineStyle);
    }
    var tmp1_elvis_lhs = tmp;
    var lineStyle = tmp1_elvis_lhs == null ? DecorationLineStyle_SOLID_getInstance() : tmp1_elvis_lhs;
    var thicknessMultiplier = 1.0;
    return new DecorationStyle(underline, overline, lineThrough, gaps, toArgb(color), lineStyle, thicknessMultiplier);
  }
  function toSkShadow(_this__u8e3s4) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    return new Shadow(toArgb(_this__u8e3s4.c3o_1), _Offset___get_x__impl__xvi35n(_this__u8e3s4.d3o_1), _Offset___get_y__impl__8bzhra(_this__u8e3s4.d3o_1), _this__u8e3s4.e3o_1);
  }
  function toPx_0(_this__u8e3s4, density, fontSize) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    var tmp;
    if (get_isUnspecified(_this__u8e3s4)) {
      tmp = fontSize;
    } else if (_TextUnit___get_isEm__impl__esrmtl(_this__u8e3s4)) {
      tmp = fontSize * _TextUnit___get_value__impl__hpbx0k(_this__u8e3s4);
    } else if (_TextUnit___get_isSp__impl__8c3r6q(_this__u8e3s4)) {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.toPx.<anonymous>' call
      tmp = density.i2x(_this__u8e3s4);
    } else {
      var message = 'Unexpected size in TextUnit.toPx';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function toSkDecorationLineStyle(_this__u8e3s4) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    return _this__u8e3s4 === Companion_getInstance_38().h4f_1 ? DecorationLineStyle_SOLID_getInstance() : _this__u8e3s4 === Companion_getInstance_38().i4f_1 ? DecorationLineStyle_DOUBLE_getInstance() : _this__u8e3s4 === Companion_getInstance_38().j4f_1 ? DecorationLineStyle_DOTTED_getInstance() : _this__u8e3s4 === Companion_getInstance_38().k4f_1 ? DecorationLineStyle_DASHED_getInstance() : _this__u8e3s4 === Companion_getInstance_38().l4f_1 ? DecorationLineStyle_WAVY_getInstance() : DecorationLineStyle_SOLID_getInstance();
  }
  function ActualParagraph(paragraphIntrinsics, maxLines, ellipsis, constraints) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    return new SkiaParagraph(paragraphIntrinsics instanceof SkiaParagraphIntrinsics ? paragraphIntrinsics : THROW_CCE(), maxLines, ellipsis, constraints);
  }
  function StyleAdd(position, style) {
    Op.call(this);
    this.r4h_1 = position;
    this.s4h_1 = style;
  }
  protoOf(StyleAdd).t4h = function () {
    return this.r4h_1;
  };
  protoOf(StyleAdd).toString = function () {
    return 'StyleAdd(position=' + this.r4h_1 + ', style=' + this.s4h_1 + ')';
  };
  protoOf(StyleAdd).hashCode = function () {
    var result = this.r4h_1;
    result = imul(result, 31) + this.s4h_1.hashCode() | 0;
    return result;
  };
  protoOf(StyleAdd).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleAdd))
      return false;
    var tmp0_other_with_cast = other instanceof StyleAdd ? other : THROW_CCE();
    if (!(this.r4h_1 === tmp0_other_with_cast.r4h_1))
      return false;
    if (!this.s4h_1.equals(tmp0_other_with_cast.s4h_1))
      return false;
    return true;
  };
  function PutPlaceholder(cut, width, height) {
    Op.call(this);
    this.u4h_1 = cut;
    this.v4h_1 = width;
    this.w4h_1 = height;
    this.x4h_1 = position$factory(this.u4h_1);
  }
  protoOf(PutPlaceholder).t4h = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.x4h_1;
    position$factory_0();
    return this_0.get();
  };
  protoOf(PutPlaceholder).toString = function () {
    return 'PutPlaceholder(cut=' + this.u4h_1 + ', width=' + this.v4h_1 + ', height=' + this.w4h_1 + ')';
  };
  protoOf(PutPlaceholder).hashCode = function () {
    var result = this.u4h_1.hashCode();
    result = imul(result, 31) + getNumberHashCode(this.v4h_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.w4h_1) | 0;
    return result;
  };
  protoOf(PutPlaceholder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PutPlaceholder))
      return false;
    var tmp0_other_with_cast = other instanceof PutPlaceholder ? other : THROW_CCE();
    if (!this.u4h_1.equals(tmp0_other_with_cast.u4h_1))
      return false;
    if (!equals(this.v4h_1, tmp0_other_with_cast.v4h_1))
      return false;
    if (!equals(this.w4h_1, tmp0_other_with_cast.w4h_1))
      return false;
    return true;
  };
  function EndPlaceholder(cut) {
    Op.call(this);
    this.y4h_1 = cut;
    this.z4h_1 = position$factory_1(this.y4h_1);
  }
  protoOf(EndPlaceholder).t4h = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.z4h_1;
    position$factory_2();
    return this_0.get();
  };
  protoOf(EndPlaceholder).toString = function () {
    return 'EndPlaceholder(cut=' + this.y4h_1 + ')';
  };
  protoOf(EndPlaceholder).hashCode = function () {
    return this.y4h_1.hashCode();
  };
  protoOf(EndPlaceholder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EndPlaceholder))
      return false;
    var tmp0_other_with_cast = other instanceof EndPlaceholder ? other : THROW_CCE();
    if (!this.y4h_1.equals(tmp0_other_with_cast.y4h_1))
      return false;
    return true;
  };
  function StyleAdd_0(position, style) {
    Cut.call(this);
    this.a4i_1 = position;
    this.b4i_1 = style;
  }
  protoOf(StyleAdd_0).t4h = function () {
    return this.a4i_1;
  };
  protoOf(StyleAdd_0).toString = function () {
    return 'StyleAdd(position=' + this.a4i_1 + ', style=' + this.b4i_1 + ')';
  };
  protoOf(StyleAdd_0).hashCode = function () {
    var result = this.a4i_1;
    result = imul(result, 31) + this.b4i_1.hashCode() | 0;
    return result;
  };
  protoOf(StyleAdd_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleAdd_0))
      return false;
    var tmp0_other_with_cast = other instanceof StyleAdd_0 ? other : THROW_CCE();
    if (!(this.a4i_1 === tmp0_other_with_cast.a4i_1))
      return false;
    if (!this.b4i_1.equals(tmp0_other_with_cast.b4i_1))
      return false;
    return true;
  };
  function StyleRemove(position, style) {
    Cut.call(this);
    this.c4i_1 = position;
    this.d4i_1 = style;
  }
  protoOf(StyleRemove).t4h = function () {
    return this.c4i_1;
  };
  protoOf(StyleRemove).toString = function () {
    return 'StyleRemove(position=' + this.c4i_1 + ', style=' + this.d4i_1 + ')';
  };
  protoOf(StyleRemove).hashCode = function () {
    var result = this.c4i_1;
    result = imul(result, 31) + this.d4i_1.hashCode() | 0;
    return result;
  };
  protoOf(StyleRemove).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleRemove))
      return false;
    var tmp0_other_with_cast = other instanceof StyleRemove ? other : THROW_CCE();
    if (!(this.c4i_1 === tmp0_other_with_cast.c4i_1))
      return false;
    if (!this.d4i_1.equals(tmp0_other_with_cast.d4i_1))
      return false;
    return true;
  };
  function PutPlaceholder_0(position, placeholder) {
    Cut.call(this);
    this.e4i_1 = position;
    this.f4i_1 = placeholder;
  }
  protoOf(PutPlaceholder_0).t4h = function () {
    return this.e4i_1;
  };
  protoOf(PutPlaceholder_0).toString = function () {
    return 'PutPlaceholder(position=' + this.e4i_1 + ', placeholder=' + this.f4i_1 + ')';
  };
  protoOf(PutPlaceholder_0).hashCode = function () {
    var result = this.e4i_1;
    result = imul(result, 31) + this.f4i_1.hashCode() | 0;
    return result;
  };
  protoOf(PutPlaceholder_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PutPlaceholder_0))
      return false;
    var tmp0_other_with_cast = other instanceof PutPlaceholder_0 ? other : THROW_CCE();
    if (!(this.e4i_1 === tmp0_other_with_cast.e4i_1))
      return false;
    if (!this.f4i_1.equals(tmp0_other_with_cast.f4i_1))
      return false;
    return true;
  };
  function EndPlaceholder_0(position) {
    Cut.call(this);
    this.g4i_1 = position;
  }
  protoOf(EndPlaceholder_0).t4h = function () {
    return this.g4i_1;
  };
  protoOf(EndPlaceholder_0).toString = function () {
    return 'EndPlaceholder(position=' + this.g4i_1 + ')';
  };
  protoOf(EndPlaceholder_0).hashCode = function () {
    return this.g4i_1;
  };
  protoOf(EndPlaceholder_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EndPlaceholder_0))
      return false;
    var tmp0_other_with_cast = other instanceof EndPlaceholder_0 ? other : THROW_CCE();
    if (!(this.g4i_1 === tmp0_other_with_cast.g4i_1))
      return false;
    return true;
  };
  function _get_initialStyle__6to25e($this) {
    var tmp = $this.j4g_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('initialStyle');
    }
  }
  function _get_defaultStyle__bt02u3($this) {
    var tmp = $this.k4g_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('defaultStyle');
    }
  }
  function _get_ops__e6e97j($this) {
    var tmp = $this.l4g_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('ops');
    }
  }
  function Op() {
  }
  function Cut() {
  }
  function makeOps($this, spans, placeholders) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var cuts = ArrayList_init_$Create$_0();
    var tmp0_iterator = spans.o();
    while (tmp0_iterator.d1()) {
      var span = tmp0_iterator.f1();
      cuts.a1(new StyleAdd_0(span.j3v_1, span.i3v_1));
      cuts.a1(new StyleRemove(span.k3v_1, span.i3v_1));
    }
    var tmp1_iterator = placeholders.o();
    while (tmp1_iterator.d1()) {
      var placeholder = tmp1_iterator.f1();
      cuts.a1(new PutPlaceholder_0(placeholder.j3v_1, placeholder.i3v_1));
      cuts.a1(new EndPlaceholder_0(placeholder.k3v_1));
    }
    var ops = mutableListOf([new StyleAdd(0, _get_defaultStyle__bt02u3($this))]);
    // Inline function 'kotlin.collections.sortBy' call
    if (cuts.m() > 1) {
      // Inline function 'kotlin.comparisons.compareBy' call
      var tmp = ParagraphBuilder$makeOps$lambda;
      var tmp$ret$1 = new sam$kotlin_Comparator$0_0(tmp);
      sortWith(cuts, tmp$ret$1);
    }
    var activeStyles = mutableListOf([_get_initialStyle__6to25e($this)]);
    var tmp2_iterator = cuts.o();
    while (tmp2_iterator.d1()) {
      var cut = tmp2_iterator.f1();
      if (cut instanceof StyleAdd_0) {
        activeStyles.a1(cut.b4i_1);
        var prev = previousStyleAddAtTheSamePosition($this, cut.t4h(), ops);
        if (prev == null) {
          var tmp_0 = cut.t4h();
          // Inline function 'kotlin.also' call
          var this_0 = mergeStyles($this, activeStyles);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.makeOps.<anonymous>' call
          this_0.q4h($this.f4g_1, cut.b4i_1);
          ops.a1(new StyleAdd(tmp_0, this_0));
        } else {
          prev.s4h_1.q4h($this.f4g_1, cut.b4i_1);
        }
      } else {
        if (cut instanceof StyleRemove) {
          activeStyles.b1(cut.d4i_1);
          ops.a1(new StyleAdd(cut.t4h(), mergeStyles($this, activeStyles)));
        } else {
          if (cut instanceof PutPlaceholder_0) {
            var currentStyle = mergeStyles($this, activeStyles);
            var op = new PutPlaceholder(cut, toPx_0(cut.f4i_1.g3z_1, $this.f4g_1, currentStyle.y4g_1), toPx_0(cut.f4i_1.h3z_1, $this.f4g_1, currentStyle.y4g_1));
            ops.a1(op);
          } else {
            if (cut instanceof EndPlaceholder_0) {
              ops.a1(new EndPlaceholder(cut));
            }
          }
        }
      }
    }
    return ops;
  }
  function mergeStyles($this, activeStyles) {
    var style = ComputedStyle_init_$Create$($this.f4g_1, activeStyles.n(0), $this.a4g_1, $this.i4g_1, $this.z4f_1.b44());
    var inductionVariable = 1;
    var last = activeStyles.m();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        style.q4h($this.f4g_1, activeStyles.n(i));
      }
       while (inductionVariable < last);
    return style;
  }
  function previousStyleAddAtTheSamePosition($this, position, ops) {
    var tmp0_iterator = asReversed(ops).o();
    while (tmp0_iterator.d1()) {
      var prevOp = tmp0_iterator.f1();
      if (prevOp.t4h() < position)
        return null;
      if (prevOp instanceof StyleAdd)
        return prevOp;
    }
    return null;
  }
  function textStyleToParagraphStyle($this, style, computedStyle) {
    var pStyle = new ParagraphStyle();
    pStyle.r3b(makeSkTextStyle($this, computedStyle));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    var it = style.z43();
    pStyle.t3b(toSkAlignment(it));
    var lineHeight = computedStyle.o4h_1;
    if (!(lineHeight == null) ? lineHeight > computedStyle.y4g_1 : false) {
      var tmp0_elvis_lhs = style.d44();
      var lineHeightStyle = tmp0_elvis_lhs == null ? Companion_getInstance_29().t4b_1 : tmp0_elvis_lhs;
      pStyle.w3b(toHeightMode(lineHeightStyle.v4b_1));
    } else {
      pStyle.w3b(HeightMode_DISABLE_ALL_getInstance());
    }
    pStyle.s3b(toSkDirection($this.g4g_1));
    var tmp1_safe_receiver = $this.z4f_1.c44();
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = $this.f4g_1;
      pStyle.x3b(new TextIndent($this$with.i2x(tmp1_safe_receiver.g4c_1), $this$with.i2x(tmp1_safe_receiver.h4c_1)));
    }
    return pStyle;
  }
  function makeSkTextStyle($this, style) {
    var tmp = get_skTextStylesCache();
    return tmp.p4c(style, ParagraphBuilder$makeSkTextStyle$lambda($this));
  }
  function sam$kotlin_Comparator$0_0(function_0) {
    this.h4i_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_0).j9 = function (a, b) {
    return this.h4i_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).compare = function (a, b) {
    return this.j9(a, b);
  };
  function ParagraphBuilder$makeOps$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.makeOps.<anonymous>' call
    var tmp = a.t4h();
    // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.makeOps.<anonymous>' call
    var tmp$ret$1 = b.t4h();
    return compareValues(tmp, tmp$ret$1);
  }
  function ParagraphBuilder$makeSkTextStyle$lambda(this$0) {
    return function (it) {
      return it.p4h(this$0.x4f_1);
    };
  }
  function ParagraphBuilder$defaultFont$delegate$lambda(this$0) {
    return function () {
      var loadResult = resolveFontFamily(this$0.z4f_1, this$0.x4f_1);
      return Font_init_$Create$(loadResult == null ? null : loadResult.n4g_1, _get_defaultStyle__bt02u3(this$0).y4g_1);
    };
  }
  function ParagraphBuilder_0(fontFamilyResolver, text, textStyle, brushSize, ellipsis, maxLines, spanStyles, placeholders, density, textDirection, drawStyle, blendMode) {
    brushSize = brushSize === VOID ? Companion_getInstance_6().j2w_1 : brushSize;
    ellipsis = ellipsis === VOID ? '' : ellipsis;
    maxLines = maxLines === VOID ? IntCompanionObject_instance.MAX_VALUE : maxLines;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().m3t_1 : blendMode;
    this.x4f_1 = fontFamilyResolver;
    this.y4f_1 = text;
    this.z4f_1 = textStyle;
    this.a4g_1 = brushSize;
    this.b4g_1 = ellipsis;
    this.c4g_1 = maxLines;
    this.d4g_1 = spanStyles;
    this.e4g_1 = placeholders;
    this.f4g_1 = density;
    this.g4g_1 = textDirection;
    this.h4g_1 = drawStyle;
    this.i4g_1 = blendMode;
    var tmp = this;
    tmp.m4g_1 = lazy_0(ParagraphBuilder$defaultFont$delegate$lambda(this));
  }
  protoOf(ParagraphBuilder_0).e3 = function () {
    this.j4g_1 = copyWithDefaultFontSize(this.z4f_1.e43(), this.h4g_1);
    this.k4g_1 = ComputedStyle_init_$Create$(this.f4g_1, _get_initialStyle__6to25e(this), this.a4g_1, this.i4g_1, this.z4f_1.b44());
    this.l4g_1 = makeOps(this, this.d4g_1, this.e4g_1);
    var pos = 0;
    var ps = textStyleToParagraphStyle(this, this.z4f_1, _get_defaultStyle__bt02u3(this));
    if (!(this.c4g_1 === IntCompanionObject_instance.MAX_VALUE)) {
      ps.u3b(this.c4g_1);
      ps.v3b(this.b4g_1);
    }
    var tmp = this.x4f_1;
    var platformFontLoader = (tmp instanceof FontFamilyResolverImpl ? tmp : THROW_CCE()).i46_1;
    var tmp_0;
    if (platformFontLoader instanceof SkiaFontLoader) {
      tmp_0 = platformFontLoader.q4f();
    } else {
      throw IllegalStateException_init_$Create$('Unsupported font loader ' + platformFontLoader);
    }
    var fontCollection = tmp_0;
    var pb = new ParagraphBuilder(ps, fontCollection);
    var addText = true;
    var tmp1_iterator = _get_ops__e6e97j(this).o();
    while (tmp1_iterator.d1()) {
      var op = tmp1_iterator.f1();
      if (addText ? pos < op.t4h() : false) {
        pb.f3b(toString(charSequenceSubSequence(this.y4f_1, pos, op.t4h())));
      }
      if (op instanceof StyleAdd) {
        var tmp_1 = op.s4h_1.c4h_1;
        var tmp3_elvis_lhs = op.s4h_1.z4g_1;
        var tmp_2 = tmp3_elvis_lhs == null ? Companion_getInstance_22().d41_1 : tmp3_elvis_lhs;
        var tmp4_elvis_lhs = op.s4h_1.a4h_1;
        var tmp_3;
        var tmp_4 = tmp4_elvis_lhs;
        if ((tmp_4 == null ? null : new FontStyle(tmp_4)) == null) {
          tmp_3 = Companion_getInstance_20().k41_1;
        } else {
          tmp_3 = tmp4_elvis_lhs;
        }
        var tmp_5 = tmp_3;
        var tmp5_elvis_lhs = op.s4h_1.b4h_1;
        var tmp_6;
        var tmp_7 = tmp5_elvis_lhs;
        if ((tmp_7 == null ? null : new FontSynthesis(tmp_7)) == null) {
          tmp_6 = Companion_getInstance_21().n41_1;
        } else {
          tmp_6 = tmp5_elvis_lhs;
        }
        this.x4f_1.s46(tmp_1, tmp_2, tmp_5, tmp_6);
        pb.e3b(makeSkTextStyle(this, op.s4h_1));
      } else {
        if (op instanceof PutPlaceholder) {
          var placeholderStyle = new PlaceholderStyle(op.v4h_1, op.w4h_1, toSkPlaceholderAlignment(op.u4h_1.f4i_1.i3z_1), BaselineMode_ALPHABETIC_getInstance(), 0.0);
          pb.g3b(placeholderStyle);
          addText = false;
        } else {
          if (op instanceof EndPlaceholder) {
            addText = true;
          }
        }
      }
      pos = op.t4h();
    }
    if (addText ? pos < this.y4f_1.length : false) {
      pb.f3b(toString(charSequenceSubSequence(this.y4f_1, pos, this.y4f_1.length)));
    }
    return pb.e3();
  };
  protoOf(ParagraphBuilder_0).y4e = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.m4g_1;
    defaultFont$factory();
    return this_0.q2();
  };
  protoOf(ParagraphBuilder_0).x4e = function (paragraph) {
    var metrics = this.y4e().a32();
    var tmp0_safe_receiver = _get_defaultStyle__bt02u3(this).o4h_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.emptyLineMetrics.<anonymous>' call
      tmp = tmp0_safe_receiver / _get_defaultStyle__bt02u3(this).y4g_1;
    }
    var tmp1_elvis_lhs = tmp;
    var heightMultiplier = tmp1_elvis_lhs == null ? 1.0 : tmp1_elvis_lhs;
    var ascent = metrics.u32_1 * heightMultiplier;
    var descent = metrics.v32_1 * heightMultiplier;
    var baseline = paragraph.r3a();
    var height = descent - ascent;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [new LineMetrics(0, 0, 0, 0, true, -ascent, descent, ascent, height, 0.0, 0.0, baseline, 0)];
  };
  function copyWithDefaultFontSize(_this__u8e3s4, drawStyle) {
    drawStyle = drawStyle === VOID ? null : drawStyle;
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    var fontSize = orDefaultFontSize(_this__u8e3s4.t3z_1);
    var tmp;
    if (_TextUnit___get_isEm__impl__esrmtl(_this__u8e3s4.z3z_1)) {
      // Inline function 'androidx.compose.ui.unit.TextUnit.times' call
      var other = _TextUnit___get_value__impl__hpbx0k(_this__u8e3s4.z3z_1);
      checkArithmetic(fontSize);
      tmp = pack(_TextUnit___get_rawType__impl__tu8yq5(fontSize), _TextUnit___get_value__impl__hpbx0k(fontSize) * other);
    } else {
      tmp = _this__u8e3s4.z3z_1;
    }
    var letterSpacing = tmp;
    return _this__u8e3s4.k40(VOID, fontSize, VOID, VOID, VOID, VOID, VOID, letterSpacing, VOID, VOID, VOID, VOID, VOID, VOID, VOID, drawStyle);
  }
  function toSkPlaceholderAlignment(_this__u8e3s4) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    var tmp;
    if (_this__u8e3s4 === Companion_getInstance_12().j3z_1) {
      tmp = PlaceholderAlignment_ABOVE_BASELINE_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_12().n3z_1) {
      tmp = PlaceholderAlignment_TOP_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_12().o3z_1) {
      tmp = PlaceholderAlignment_BOTTOM_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_12().p3z_1) {
      tmp = PlaceholderAlignment_MIDDLE_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_12().k3z_1) {
      tmp = PlaceholderAlignment_TOP_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_12().l3z_1) {
      tmp = PlaceholderAlignment_BOTTOM_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_12().m3z_1) {
      tmp = PlaceholderAlignment_MIDDLE_getInstance();
    } else {
      var message = 'Invalid PlaceholderVerticalAlign.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function toSkAlignment(_this__u8e3s4) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    return _this__u8e3s4 === Companion_getInstance_30().n3y_1 ? Alignment_LEFT_getInstance() : _this__u8e3s4 === Companion_getInstance_30().o3y_1 ? Alignment_RIGHT_getInstance() : _this__u8e3s4 === Companion_getInstance_30().p3y_1 ? Alignment_CENTER_getInstance() : _this__u8e3s4 === Companion_getInstance_30().q3y_1 ? Alignment_JUSTIFY_getInstance() : _this__u8e3s4 === Companion_getInstance_30().r3y_1 ? Alignment_START_getInstance() : _this__u8e3s4 === Companion_getInstance_30().s3y_1 ? Alignment_END_getInstance() : Alignment_START_getInstance();
  }
  function toHeightMode(_this__u8e3s4) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    return _this__u8e3s4 === Companion_getInstance_27().l4b_1 ? HeightMode_DISABLE_ALL_getInstance() : _this__u8e3s4 === Companion_getInstance_27().j4b_1 ? HeightMode_DISABLE_FIRST_ASCENT_getInstance() : _this__u8e3s4 === Companion_getInstance_27().k4b_1 ? HeightMode_DISABLE_LAST_DESCENT_getInstance() : _this__u8e3s4 === Companion_getInstance_27().m4b_1 ? HeightMode_ALL_getInstance() : HeightMode_DISABLE_ALL_getInstance();
  }
  function toSkDirection(_this__u8e3s4) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    var tmp;
    switch (_this__u8e3s4.t9_1) {
      case 0:
        tmp = Direction_LTR_getInstance();
        break;
      case 1:
        tmp = Direction_RTL_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function resolveFontFamily(_this__u8e3s4, fontFamilyResolver) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    var tmp0_safe_receiver = _this__u8e3s4.p43();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.resolveFontFamily.<anonymous>' call
      var tmp0_elvis_lhs = _this__u8e3s4.m43();
      var tmp_0 = tmp0_elvis_lhs == null ? Companion_getInstance_22().d41_1 : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = _this__u8e3s4.n43();
      var tmp_1;
      var tmp_2 = tmp1_elvis_lhs;
      if ((tmp_2 == null ? null : new FontStyle(tmp_2)) == null) {
        tmp_1 = Companion_getInstance_20().k41_1;
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      var tmp_3 = tmp_1;
      var tmp2_elvis_lhs = _this__u8e3s4.o43();
      var tmp_4;
      var tmp_5 = tmp2_elvis_lhs;
      if ((tmp_5 == null ? null : new FontSynthesis(tmp_5)) == null) {
        tmp_4 = Companion_getInstance_21().n41_1;
      } else {
        tmp_4 = tmp2_elvis_lhs;
      }
      var tmp_6 = fontFamilyResolver.s46(tmp0_safe_receiver, tmp_0, tmp_3, tmp_4).q2();
      tmp = tmp_6 instanceof FontLoadResult ? tmp_6 : THROW_CCE();
    }
    return tmp;
  }
  function orDefaultFontSize(_this__u8e3s4) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    var tmp;
    if (get_isUnspecified(_this__u8e3s4)) {
      tmp = get_DefaultFontSize_0();
    } else if (_TextUnit___get_isEm__impl__esrmtl(_this__u8e3s4)) {
      // Inline function 'androidx.compose.ui.unit.TextUnit.times' call
      var this_0 = get_DefaultFontSize_0();
      var other = _TextUnit___get_value__impl__hpbx0k(_this__u8e3s4);
      checkArithmetic(this_0);
      tmp = pack(_TextUnit___get_rawType__impl__tu8yq5(this_0), _TextUnit___get_value__impl__hpbx0k(this_0) * other);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function ActualParagraph_0(text, style, spanStyles, placeholders, maxLines, ellipsis, constraints, density, fontFamilyResolver) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    return new SkiaParagraph(new SkiaParagraphIntrinsics(text, style, spanStyles, placeholders, density, fontFamilyResolver), maxLines, ellipsis, constraints);
  }
  function position$factory($b0) {
    return getPropertyCallableRef('position', 0, KProperty0, function () {
      return $b0.e4i_1;
    }, null);
  }
  function position$factory_0() {
    return getPropertyCallableRef('position', 1, KProperty1, function (receiver) {
      return receiver.t4h();
    }, null);
  }
  function position$factory_1($b0) {
    return getPropertyCallableRef('position', 0, KProperty0, function () {
      return $b0.g4i_1;
    }, null);
  }
  function position$factory_2() {
    return getPropertyCallableRef('position', 1, KProperty1, function (receiver) {
      return receiver.t4h();
    }, null);
  }
  function defaultFont$factory() {
    return getPropertyCallableRef('defaultFont', 1, KProperty1, function (receiver) {
      return receiver.y4e();
    }, null);
  }
  var properties_initialized_SkiaParagraph_skiko_kt_jww0jv;
  function _init_properties_SkiaParagraph_skiko_kt__cbqn0t() {
    if (!properties_initialized_SkiaParagraph_skiko_kt_jww0jv) {
      properties_initialized_SkiaParagraph_skiko_kt_jww0jv = true;
      DefaultFontSize_0 = get_sp(16);
      skTextStylesCache = new NoCache();
    }
  }
  function ActualParagraphIntrinsics(text, style, spanStyles, placeholders, density, fontFamilyResolver) {
    return new SkiaParagraphIntrinsics(text, style, spanStyles, placeholders, density, fontFamilyResolver);
  }
  function newLayouter($this) {
    return new ParagraphLayouter($this.j4e_1, $this.p4e_1, $this.k4e_1, $this.l4e_1, $this.m4e_1, $this.n4e_1, $this.o4e_1);
  }
  function SkiaParagraphIntrinsics(text, style, spanStyles, placeholders, density, fontFamilyResolver) {
    this.j4e_1 = text;
    this.k4e_1 = style;
    this.l4e_1 = spanStyles;
    this.m4e_1 = placeholders;
    this.n4e_1 = density;
    this.o4e_1 = fontFamilyResolver;
    this.p4e_1 = resolveTextDirection_1(this.j4e_1, this.k4e_1.a44(), this.k4e_1.u43());
    this.q4e_1 = newLayouter(this);
    this.r4e_1 = 0.0;
    this.s4e_1 = 0.0;
    var tmp = ensureNotNull(this.q4e_1);
    var para = tmp.c4f(Infinity);
    var tmp_0 = this;
    // Inline function 'kotlin.math.ceil' call
    var x = para.p3a();
    tmp_0.r4e_1 = Math.ceil(x);
    var tmp_1 = this;
    // Inline function 'kotlin.math.ceil' call
    var x_0 = para.q3a();
    tmp_1.s4e_1 = Math.ceil(x_0);
  }
  protoOf(SkiaParagraphIntrinsics).a4f = function () {
    var tmp0_elvis_lhs = this.q4e_1;
    var layouter = tmp0_elvis_lhs == null ? newLayouter(this) : tmp0_elvis_lhs;
    this.q4e_1 = null;
    return layouter;
  };
  protoOf(SkiaParagraphIntrinsics).p3a = function () {
    return this.r4e_1;
  };
  protoOf(SkiaParagraphIntrinsics).q3a = function () {
    return this.s4e_1;
  };
  function resolveTextDirection_1(text, textDirection, localeList) {
    textDirection = textDirection === VOID ? null : textDirection;
    localeList = localeList === VOID ? null : localeList;
    var tmp;
    var tmp_0 = textDirection;
    if ((tmp_0 == null ? null : new TextDirection(tmp_0)) == null) {
      tmp = Companion_getInstance_32().d3y_1;
    } else {
      tmp = textDirection;
    }
    var tmp1_subject = tmp;
    var tmp_1;
    if (tmp1_subject === Companion_getInstance_32().b3y_1) {
      tmp_1 = ResolvedTextDirection_Ltr_getInstance();
    } else if (tmp1_subject === Companion_getInstance_32().c3y_1) {
      tmp_1 = ResolvedTextDirection_Rtl_getInstance();
    } else if (tmp1_subject === Companion_getInstance_32().d3y_1 ? true : tmp1_subject === Companion_getInstance_32().g3y_1) {
      tmp_1 = contentBasedTextDirection(text, resolveTextDirection$lambda(localeList));
    } else if (tmp1_subject === Companion_getInstance_32().e3y_1) {
      tmp_1 = contentBasedTextDirection(text, resolveTextDirection$lambda_0);
    } else if (tmp1_subject === Companion_getInstance_32().f3y_1) {
      tmp_1 = contentBasedTextDirection(text, resolveTextDirection$lambda_1);
    } else {
      var message = 'Invalid TextDirection.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp_1;
  }
  function contentBasedTextDirection(text, fallback) {
    var tmp0_subject = firstStrongDirectionType(text);
    return tmp0_subject === Companion_getInstance_37().n4c_1 ? ResolvedTextDirection_Ltr_getInstance() : tmp0_subject === Companion_getInstance_37().o4c_1 ? ResolvedTextDirection_Rtl_getInstance() : fallback();
  }
  function localeBasedTextDirection(locale) {
    var tmp;
    if (isRtl((locale == null ? Companion_instance_12.n1f() : locale).b4b_1)) {
      tmp = ResolvedTextDirection_Rtl_getInstance();
    } else {
      tmp = ResolvedTextDirection_Ltr_getInstance();
    }
    return tmp;
  }
  function resolveTextDirection$lambda($localeList) {
    return function () {
      var tmp0_safe_receiver = $localeList;
      return localeBasedTextDirection(tmp0_safe_receiver == null ? null : firstOrNull_0(tmp0_safe_receiver));
    };
  }
  function resolveTextDirection$lambda_0() {
    return ResolvedTextDirection_Ltr_getInstance();
  }
  function resolveTextDirection$lambda_1() {
    return ResolvedTextDirection_Rtl_getInstance();
  }
  function applyBrush(_this__u8e3s4, brush, size, alpha) {
    var tmp;
    if (alpha === VOID) {
      tmp = NaN;
    } else {
      tmp = alpha;
    }
    alpha = tmp;
    var tmp_0;
    var tmp_1;
    if (brush instanceof SolidColor) {
      // Inline function 'androidx.compose.ui.graphics.isSpecified' call
      var this_0 = brush.a4c_1;
      tmp_1 = !equals(_Color___get_value__impl__1pls5m(this_0), _Color___get_value__impl__1pls5m(Companion_getInstance().i3l_1));
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      var tmp_2;
      if (brush instanceof ShaderBrush) {
        // Inline function 'androidx.compose.ui.geometry.isSpecified' call
        tmp_2 = !_Size___get_packedValue__impl__7rlt1o(size).equals(_Size___get_packedValue__impl__7rlt1o(Companion_getInstance_6().j2w_1));
      } else {
        tmp_2 = false;
      }
      tmp_0 = tmp_2;
    }
    if (tmp_0) {
      brush.w3i(size, _this__u8e3s4, isNaN_0(alpha) ? 1.0 : coerceIn_0(alpha, 0.0, 1.0));
    } else {
      if (brush == null) {
        _this__u8e3s4.k35(null);
      }
    }
  }
  function applyDrawStyle(_this__u8e3s4, drawStyle) {
    if (equals(drawStyle, Fill_getInstance()) ? true : drawStyle == null) {
      _this__u8e3s4.p3s(Companion_getInstance_9().l3n_1);
    } else {
      if (drawStyle instanceof Stroke) {
        _this__u8e3s4.p3s(Companion_getInstance_9().m3n_1);
        _this__u8e3s4.f35(drawStyle.q3s_1);
        _this__u8e3s4.x3s(drawStyle.r3s_1);
        _this__u8e3s4.z3s(drawStyle.t3s_1);
        _this__u8e3s4.v3s(drawStyle.s3s_1);
        _this__u8e3s4.b3t(drawStyle.u3s_1);
      }
    }
  }
  function _LineBreak___init__impl__o5i11q(mask) {
    return mask;
  }
  function Companion_26() {
    Companion_instance_28 = this;
    this.u3y_1 = _LineBreak___init__impl__o5i11q(1);
    this.v3y_1 = _LineBreak___init__impl__o5i11q(2);
    this.w3y_1 = _LineBreak___init__impl__o5i11q(3);
    this.x3y_1 = _LineBreak___init__impl__o5i11q(4);
  }
  var Companion_instance_28;
  function Companion_getInstance_39() {
    if (Companion_instance_28 == null)
      new Companion_26();
    return Companion_instance_28;
  }
  function LineBreak__toString_impl_mphhli($this) {
    return 'LineBreak(mask=' + $this + ')';
  }
  function LineBreak__hashCode_impl_ybksn($this) {
    return $this;
  }
  function LineBreak__equals_impl_1r98t9($this, other) {
    if (!(other instanceof LineBreak))
      return false;
    if (!($this === (other instanceof LineBreak ? other.i4i_1 : THROW_CCE())))
      return false;
    return true;
  }
  function LineBreak(mask) {
    Companion_getInstance_39();
    this.i4i_1 = mask;
  }
  protoOf(LineBreak).toString = function () {
    return LineBreak__toString_impl_mphhli(this.i4i_1);
  };
  protoOf(LineBreak).hashCode = function () {
    return LineBreak__hashCode_impl_ybksn(this.i4i_1);
  };
  protoOf(LineBreak).equals = function (other) {
    return LineBreak__equals_impl_1r98t9(this.i4i_1, other);
  };
  function Companion_27() {
    Companion_instance_29 = this;
    this.e3z_1 = new TextMotion();
    this.f3z_1 = new TextMotion();
  }
  var Companion_instance_29;
  function Companion_getInstance_40() {
    if (Companion_instance_29 == null)
      new Companion_27();
    return Companion_instance_29;
  }
  function TextMotion() {
    Companion_getInstance_40();
  }
  //region block: post-declaration
  protoOf(PlatformResolveInterceptor$Companion$Default$1).t46 = interceptFontFamily;
  protoOf(PlatformResolveInterceptor$Companion$Default$1).u46 = interceptFontWeight;
  protoOf(PlatformResolveInterceptor$Companion$Default$1).v46 = interceptFontStyle;
  protoOf(PlatformResolveInterceptor$Companion$Default$1).w46 = interceptFontSynthesis;
  protoOf(Unspecified).n40 = merge;
  protoOf(Unspecified).q40 = takeOrElse;
  protoOf(BrushStyle).n40 = merge;
  protoOf(BrushStyle).q40 = takeOrElse;
  protoOf(ColorStyle).n40 = merge;
  protoOf(ColorStyle).q40 = takeOrElse;
  protoOf(SkiaParagraph).z4d = paint$default;
  protoOf(SkiaParagraph).a4e = paint$default_0;
  protoOf(SkiaParagraphIntrinsics).m3y = get_hasStaleResolvedFonts;
  //endregion
  //region block: init
  DefaultMaxLines = 2147483647;
  DefaultCacheSize = 8;
  Companion_instance_12 = new Companion_10();
  Companion_instance_13 = new Companion_11();
  Unspecified_instance = new Unspecified();
  Companion_instance_22 = new Companion_20();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = FontStyle;
  _.$_$.b = createFontFamilyResolver_0;
  _.$_$.c = TextInputService;
  _.$_$.d = FontLoader;
  _.$_$.e = LineHeightStyle;
  _.$_$.f = TextAlign;
  _.$_$.g = TextOverflow;
  _.$_$.h = MultiParagraphIntrinsics;
  _.$_$.i = MultiParagraph;
  _.$_$.j = ParagraphIntrinsics_0;
  _.$_$.k = Paragraph;
  _.$_$.l = Paragraph_0;
  _.$_$.m = TextLayoutResult;
  _.$_$.n = TextRange_0;
  _.$_$.o = TextRange;
  _.$_$.p = resolveDefaults;
  _.$_$.q = AnnotatedString_init_$Create$;
  _.$_$.r = TextLayoutInput_init_$Create$;
  _.$_$.s = _TextOverflow___init__impl__obguoe;
  _.$_$.t = TextOverflow__hashCode_impl_kqdwgt;
  _.$_$.u = _TextOverflow___get_value__impl__vugm5i;
  _.$_$.v = _TextRange___get_end__impl__gcdxpp;
  _.$_$.w = _TextRange___get_start__impl__ww4t90;
  _.$_$.x = Companion_getInstance_28;
  _.$_$.y = Companion_getInstance_27;
  _.$_$.z = Companion_getInstance_30;
  _.$_$.a1 = Companion_getInstance_31;
  _.$_$.b1 = Companion_getInstance_36;
  _.$_$.c1 = Companion_getInstance_14;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-ui-ui-text.js.map
