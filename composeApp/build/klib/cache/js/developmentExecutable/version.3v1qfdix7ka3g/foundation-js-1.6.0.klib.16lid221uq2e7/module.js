(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-compose-ui-ui-graphics.js', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-ui-ui.js', './compose-multiplatform-core-compose-ui-ui-geometry.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-runtime-runtime.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-compose-animation-animation-core.js', './compose-multiplatform-core-collection-collection.js', './compose-multiplatform-core-compose-runtime-runtime-saveable.js', './compose-multiplatform-core-compose-ui-ui-text.js', './skiko-kjs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-compose-animation-animation-core.js'), require('./compose-multiplatform-core-collection-collection.js'), require('./compose-multiplatform-core-compose-runtime-runtime-saveable.js'), require('./compose-multiplatform-core-compose-ui-ui-text.js'), require('./skiko-kjs.js'));
  else {
    if (typeof this['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation'.");
    }
    if (typeof this['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation'.");
    }
    if (typeof this['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation'.");
    }
    if (typeof this['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation'.");
    }
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation'.");
    }
    if (typeof this['compose-multiplatform-core-compose-animation-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation'. Its dependency 'compose-multiplatform-core-compose-animation-animation-core' was not found. Please, check whether 'compose-multiplatform-core-compose-animation-animation-core' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation'.");
    }
    if (typeof this['compose-multiplatform-core-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation'. Its dependency 'compose-multiplatform-core-collection-collection' was not found. Please, check whether 'compose-multiplatform-core-collection-collection' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation'.");
    }
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime-saveable'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime-saveable' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime-saveable' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation'.");
    }
    if (typeof this['compose-multiplatform-core-compose-ui-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation'. Its dependency 'compose-multiplatform-core-compose-ui-ui-text' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-text' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation'.");
    }
    if (typeof this['skiko-kjs'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation'. Its dependency 'skiko-kjs' was not found. Please, check whether 'skiko-kjs' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation'.");
    }
    root['compose-multiplatform-core-compose-foundation-foundation'] = factory(typeof this['compose-multiplatform-core-compose-foundation-foundation'] === 'undefined' ? {} : this['compose-multiplatform-core-compose-foundation-foundation'], this['compose-multiplatform-core-compose-ui-ui-graphics'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-compose-ui-ui'], this['compose-multiplatform-core-compose-ui-ui-geometry'], this['compose-multiplatform-core-compose-ui-ui-unit'], this['compose-multiplatform-core-compose-runtime-runtime'], this['kotlinx-coroutines-core'], this['compose-multiplatform-core-compose-animation-animation-core'], this['compose-multiplatform-core-collection-collection'], this['compose-multiplatform-core-compose-runtime-runtime-saveable'], this['compose-multiplatform-core-compose-ui-ui-text'], this['skiko-kjs']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_org_jetbrains_compose_collection_internal_collection, kotlin_org_jetbrains_compose_runtime_runtime_saveable, kotlin_org_jetbrains_compose_ui_ui_text, kotlin_org_jetbrains_skiko_skiko) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var sign = Math.sign;
  var get_RectangleShape = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.t;
  var VOID = kotlin_kotlin.$_$.g;
  var get_NoInspectorInfo = kotlin_org_jetbrains_compose_ui_ui.$_$.w2;
  var get_isDebugInspectorInfoEnabled = kotlin_org_jetbrains_compose_ui_ui.$_$.x2;
  var ModifierNodeElement = kotlin_org_jetbrains_compose_ui_ui.$_$.e2;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l3;
  var protoOf = kotlin_kotlin.$_$.cf;
  var THROW_CCE = kotlin_kotlin.$_$.ck;
  var Color__hashCode_impl_vjyivj = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p2;
  var hashCode = kotlin_kotlin.$_$.ee;
  var getNumberHashCode = kotlin_kotlin.$_$.ae;
  var equals = kotlin_kotlin.$_$.ud;
  var classMeta = kotlin_kotlin.$_$.qd;
  var setMetadataFor = kotlin_kotlin.$_$.df;
  var Unit_getInstance = kotlin_kotlin.$_$.v5;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k;
  var ensureNotNull = kotlin_kotlin.$_$.wk;
  var drawOutline = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.e1;
  var drawOutline_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.f1;
  var Node = kotlin_org_jetbrains_compose_ui_ui.$_$.n3;
  var onMeasureResultChanged = kotlin_org_jetbrains_compose_ui_ui.$_$.w1;
  var DrawModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.x1;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j;
  var roundToInt = kotlin_kotlin.$_$.mf;
  var objectMeta = kotlin_kotlin.$_$.bf;
  var interfaceMeta = kotlin_kotlin.$_$.ge;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g2;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s;
  var SolidColor = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.x;
  var Dp__hashCode_impl_sxkrra = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i2;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n3;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m3;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.q3;
  var numberToInt = kotlin_kotlin.$_$.ye;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z;
  var ImageBitmapConfig = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.k;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t2;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s2;
  var ImageBitmap = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l;
  var Canvas = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.f;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h1;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l1;
  var CanvasDrawScope = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.a;
  var toSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u1;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j3;
  var Stroke = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d;
  var get_isSimple = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.o;
  var _Size___get_minDimension__impl__4iso0r = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j1;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h3;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var Size_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.fl;
  var Rectangle = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o;
  var Rounded = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p;
  var Generic = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.k3;
  var _CornerRadius___get_x__impl__1594cn = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.u;
  var DelegatingNode = kotlin_org_jetbrains_compose_ui_ui.$_$.v1;
  var CacheDrawModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.a;
  var Path = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.n1;
  var Fill_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i3;
  var _CornerRadius___get_y__impl__tyvleu = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.v;
  var CornerRadius = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.a;
  var RoundRect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i;
  var Rect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g;
  var Shape = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.w;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_ui_ui.$_$.k4;
  var clip = kotlin_org_jetbrains_compose_ui_ui.$_$.c;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q1;
  var Annotation = kotlin_kotlin.$_$.ij;
  var get_LocalInputModeManager = kotlin_org_jetbrains_compose_ui_ui.$_$.u2;
  var currentValueOf = kotlin_org_jetbrains_compose_ui_ui.$_$.j2;
  var Companion_getInstance_8 = kotlin_org_jetbrains_compose_ui_ui.$_$.f4;
  var CompositionLocalConsumerModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.u1;
  var FocusPropertiesModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.e;
  var identityHashCode = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var InspectableModifier = kotlin_org_jetbrains_compose_ui_ui.$_$.o2;
  var modifierLocalOf = kotlin_org_jetbrains_compose_ui_ui.$_$.t1;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d3;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s1;
  var Companion_getInstance_9 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t1;
  var THROW_IAE = kotlin_kotlin.$_$.dk;
  var enumEntries = kotlin_kotlin.$_$.fd;
  var Enum = kotlin_kotlin.$_$.qj;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var CoroutineImpl = kotlin_kotlin.$_$.zc;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v1;
  var isInterface = kotlin_kotlin.$_$.pe;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a1;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.kc;
  var Mutex = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n1;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var captureStack = kotlin_kotlin.$_$.kd;
  var SuspendFunction1 = kotlin_kotlin.$_$.bd;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e1;
  var _Offset___get_y__impl__8bzhra = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f1;
  var Offset__getDistance_impl_pclvxn = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.y;
  var Offset__div_impl_eaxtg1 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.w;
  var Offset__times_impl_jz1mli = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.c1;
  var Offset__minus_impl_hoj2c0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.a1;
  var AwaitPointerEventScope = kotlin_org_jetbrains_compose_ui_ui.$_$.p;
  var PointerEventPass_Main_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.u3;
  var changedToUpIgnoreConsumed = kotlin_org_jetbrains_compose_ui_ui.$_$.t;
  var isOutOfBounds = kotlin_org_jetbrains_compose_ui_ui.$_$.v;
  var PointerEventPass_Final_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.t3;
  var PointerEventTimeoutCancellationException = kotlin_org_jetbrains_compose_ui_ui.$_$.q;
  var positionChangedIgnoreConsumed = kotlin_org_jetbrains_compose_ui_ui.$_$.a1;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j2;
  var get_isActive = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k2;
  var CancellationException = kotlin_kotlin.$_$.jc;
  var Companion_getInstance_10 = kotlin_org_jetbrains_compose_ui_ui.$_$.e4;
  var Offset_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var get_key = kotlin_org_jetbrains_compose_ui_ui.$_$.p3;
  var get = kotlin_kotlin.$_$.uc;
  var fold = kotlin_kotlin.$_$.tc;
  var minusKey = kotlin_kotlin.$_$.vc;
  var plus = kotlin_kotlin.$_$.yc;
  var MotionDurationScale = kotlin_org_jetbrains_compose_ui_ui.$_$.q3;
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
  var toRect = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j;
  var toSize_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k;
  var toDpSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e;
  var Density = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o;
  var SuspendFunction2 = kotlin_kotlin.$_$.cd;
  var isNaN_0 = kotlin_kotlin.$_$.bl;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p2;
  var _IntOffset___get_y__impl__2avpwj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q2;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.p;
  var BufferOverflow_DROP_OLDEST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var MutableSharedFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f1;
  var Spring_getInstance = kotlin_org_jetbrains_compose_animation_animation_core.$_$.z;
  var Companion_getInstance_11 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k3;
  var get_VisibilityThreshold = kotlin_org_jetbrains_compose_animation_animation_core.$_$.n;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w;
  var spring = kotlin_org_jetbrains_compose_animation_animation_core.$_$.v;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.h5;
  var mutableIntStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var tween = kotlin_org_jetbrains_compose_animation_animation_core.$_$.w;
  var Companion_getInstance_12 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g3;
  var _Constraints___get_minWidth__impl__hi9lfi = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f2;
  var _Constraints___get_minHeight__impl__ev4bgx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e2;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d2;
  var _Constraints___get_maxHeight__impl__dt3e8z = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c2;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a;
  var minIntrinsicWidth = kotlin_org_jetbrains_compose_ui_ui.$_$.c2;
  var minIntrinsicHeight = kotlin_org_jetbrains_compose_ui_ui.$_$.b2;
  var maxIntrinsicWidth = kotlin_org_jetbrains_compose_ui_ui.$_$.a2;
  var maxIntrinsicHeight = kotlin_org_jetbrains_compose_ui_ui.$_$.z1;
  var LayoutModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.d2;
  var IntOffset__copy$default_impl_1y5pbb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f3;
  var IntOffset_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v;
  var getValue = kotlin_kotlin.$_$.n9;
  var copyOf = kotlin_kotlin.$_$.p8;
  var Comparator = kotlin_kotlin.$_$.nj;
  var compareValues = kotlin_kotlin.$_$.fc;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.z;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.b1;
  var firstOrNull = kotlin_kotlin.$_$.c9;
  var sortWith = kotlin_kotlin.$_$.ib;
  var first = kotlin_kotlin.$_$.g9;
  var last = kotlin_kotlin.$_$.ca;
  var reverse = kotlin_kotlin.$_$.za;
  var Companion_getInstance_13 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m3;
  var MeasureResult = kotlin_org_jetbrains_compose_ui_ui.$_$.k1;
  var coerceAtLeast = kotlin_kotlin.$_$.tf;
  var toString = kotlin_kotlin.$_$.hf;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.b2;
  var emptyMap = kotlin_kotlin.$_$.v8;
  var emptyList = kotlin_kotlin.$_$.u8;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var mutableScatterMapOf = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.j;
  var mutableScatterSetOf = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.k;
  var get_BitmaskMsb = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.a;
  var Long = kotlin_kotlin.$_$.vj;
  var LayoutDirection_Rtl_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w1;
  var _Constraints___get_hasFixedHeight__impl__y56fxx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z1;
  var _Constraints___get_hasFixedWidth__impl__4p17wc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a2;
  var Constraints_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b;
  var toLong = kotlin_kotlin.$_$.ff;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.o;
  var coerceAtMost = kotlin_kotlin.$_$.yf;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.h2;
  var binarySearch = kotlin_kotlin.$_$.o7;
  var intercepted = kotlin_kotlin.$_$.mc;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.i1;
  var returnIfSuspended = kotlin_kotlin.$_$.m;
  var Companion_getInstance_14 = kotlin_kotlin.$_$.q5;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.k3;
  var foldIn = kotlin_org_jetbrains_compose_ui_ui.$_$.l3;
  var foldOut = kotlin_org_jetbrains_compose_ui_ui.$_$.m3;
  var any = kotlin_org_jetbrains_compose_ui_ui.$_$.k3;
  var all = kotlin_org_jetbrains_compose_ui_ui.$_$.j3;
  var then = kotlin_org_jetbrains_compose_ui_ui.$_$.o3;
  var OnGloballyPositionedModifier = kotlin_org_jetbrains_compose_ui_ui.$_$.m1;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var fillArrayVal = kotlin_kotlin.$_$.wd;
  var MutableVector = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.d1;
  var println = kotlin_kotlin.$_$.gd;
  var coerceAtLeast_0 = kotlin_kotlin.$_$.uf;
  var coerceAtMost_0 = kotlin_kotlin.$_$.wf;
  var AnimationState = kotlin_org_jetbrains_compose_animation_animation_core.$_$.b;
  var copy = kotlin_org_jetbrains_compose_animation_animation_core.$_$.r;
  var animateTo = kotlin_org_jetbrains_compose_animation_animation_core.$_$.y;
  var SpringSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.i;
  var get_VectorConverter = kotlin_org_jetbrains_compose_animation_animation_core.$_$.l;
  var Animatable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.a;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.g5;
  var get_VectorConverter_0 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.m;
  var mutableFloatStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n2;
  var ParentDataModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.f2;
  var KMutableProperty1 = kotlin_kotlin.$_$.kg;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ce;
  var isArray = kotlin_kotlin.$_$.he;
  var _TextUnit___get_type__impl__uc2olt = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a3;
  var Companion_getInstance_15 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o3;
  var _TextUnit___get_value__impl__hpbx0k = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b3;
  var get_sp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r1;
  var _DpSize___get_packedValue__impl__jx4au8 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n2;
  var Companion_getInstance_16 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j3;
  var Companion_getInstance_17 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.p1;
  var _DpSize___get_width__impl__o3d5gt = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o2;
  var _DpSize___get_height__impl__5xueo2 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m2;
  var _Size___get_packedValue__impl__7rlt1o = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k1;
  var DpSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r;
  var MeasureScope = kotlin_org_jetbrains_compose_ui_ui.$_$.l1;
  var until = kotlin_kotlin.$_$.hg;
  var structuralEqualityPolicy = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u1;
  var State = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var SnapshotStateList = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e;
  var objectCreate = kotlin_kotlin.$_$.af;
  var List = kotlin_kotlin.$_$.o6;
  var neverEqualPolicy = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m1;
  var lastOrNull = kotlin_kotlin.$_$.aa;
  var abs = kotlin_kotlin.$_$.jf;
  var fill = kotlin_kotlin.$_$.x8;
  var arrayCopy = kotlin_kotlin.$_$.c7;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.n;
  var getOrNull = kotlin_kotlin.$_$.l9;
  var get_lastIndex = kotlin_kotlin.$_$.x9;
  var compareTo = kotlin_kotlin.$_$.rd;
  var anyToString = kotlin_kotlin.$_$.hd;
  var minOrNull = kotlin_kotlin.$_$.ja;
  var Companion_getInstance_18 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e2;
  var getOrNull_0 = kotlin_kotlin.$_$.m9;
  var contains = kotlin_kotlin.$_$.u7;
  var contentEquals = kotlin_kotlin.$_$.b8;
  var isIntArray = kotlin_kotlin.$_$.oe;
  var merge = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var SnapshotMutationPolicy = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var listOf = kotlin_kotlin.$_$.fa;
  var Map = kotlin_kotlin.$_$.q6;
  var listSaver = kotlin_org_jetbrains_compose_runtime_runtime_saveable.$_$.c;
  var RemeasurementModifier = kotlin_org_jetbrains_compose_ui_ui.$_$.o1;
  var Density_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n;
  var KProperty1 = kotlin_kotlin.$_$.mg;
  var get_inspectableElements = kotlin_org_jetbrains_compose_ui_ui.$_$.p2;
  var get_nameFallback = kotlin_org_jetbrains_compose_ui_ui.$_$.q2;
  var InspectableValue = kotlin_org_jetbrains_compose_ui_ui.$_$.r2;
  var toRect_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.t;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v1;
  var RoundRect_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h;
  var Pair = kotlin_kotlin.$_$.zj;
  var TextOverflow = kotlin_org_jetbrains_compose_ui_ui_text.$_$.n;
  var _TextOverflow___get_value__impl__vugm5i = kotlin_org_jetbrains_compose_ui_ui_text.$_$.d1;
  var Companion_getInstance_19 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.q1;
  var Companion_getInstance_20 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.o1;
  var rememberSaveable = kotlin_org_jetbrains_compose_runtime_runtime_saveable.$_$.d;
  var _Color___get_value__impl__1pls5m = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.q2;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.i4;
  var graphicsLayer = kotlin_org_jetbrains_compose_ui_ui.$_$.i;
  var get_LocalFontFamilyResolver = kotlin_org_jetbrains_compose_ui_ui.$_$.t2;
  var AnnotatedString_init_$Create$ = kotlin_org_jetbrains_compose_ui_ui_text.$_$.y;
  var get_currentCompositeKeyHash = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var materialize = kotlin_org_jetbrains_compose_ui_ui.$_$.s3;
  var Companion_getInstance_21 = kotlin_org_jetbrains_compose_ui_ui.$_$.h4;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d2;
  var _Updater___get_composer__impl__9ty7av = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var Saver = kotlin_org_jetbrains_compose_runtime_runtime_saveable.$_$.b;
  var minIntrinsicWidth_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.i1;
  var minIntrinsicHeight_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.h1;
  var maxIntrinsicWidth_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.g1;
  var maxIntrinsicHeight_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.f1;
  var MeasurePolicy = kotlin_org_jetbrains_compose_ui_ui.$_$.j1;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var get_key_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.o;
  var get_isAltPressed = kotlin_org_jetbrains_compose_ui_ui.$_$.k;
  var get_isShiftPressed = kotlin_org_jetbrains_compose_ui_ui.$_$.n;
  var get_isCtrlPressed = kotlin_org_jetbrains_compose_ui_ui.$_$.l;
  var KeyEvent = kotlin_org_jetbrains_compose_ui_ui.$_$.j;
  var TextRange = kotlin_org_jetbrains_compose_ui_ui_text.$_$.u;
  var charSequenceGet = kotlin_kotlin.$_$.nd;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.c3;
  var charSequenceLength = kotlin_kotlin.$_$.od;
  var keyframes = kotlin_org_jetbrains_compose_animation_animation_core.$_$.u;
  var infiniteRepeatable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.t;
  var repeat = kotlin_kotlin.$_$.bi;
  var OffsetMapping = kotlin_org_jetbrains_compose_ui_ui_text.$_$.d;
  var Companion_getInstance_22 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.i1;
  var toRawBits = kotlin_kotlin.$_$.pl;
  var floatFromBits = kotlin_kotlin.$_$.xd;
  var _Constraints___get_hasBoundedWidth__impl__7hd0wr = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y1;
  var coerceIn = kotlin_kotlin.$_$.bg;
  var resolveDefaults = kotlin_org_jetbrains_compose_ui_ui_text.$_$.x;
  var Paragraph = kotlin_org_jetbrains_compose_ui_ui_text.$_$.s;
  var TextLayoutInput_init_$Create$ = kotlin_org_jetbrains_compose_ui_ui_text.$_$.z;
  var constrain = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j1;
  var TextLayoutResult = kotlin_org_jetbrains_compose_ui_ui_text.$_$.t;
  var MultiParagraphIntrinsics = kotlin_org_jetbrains_compose_ui_ui_text.$_$.o;
  var MultiParagraph = kotlin_org_jetbrains_compose_ui_ui_text.$_$.p;
  var ParagraphIntrinsics = kotlin_org_jetbrains_compose_ui_ui_text.$_$.q;
  var Paragraph_0 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.r;
  var Constraints__copy$default_impl_f452rp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e3;
  var TextOverflow__hashCode_impl_kqdwgt = kotlin_org_jetbrains_compose_ui_ui_text.$_$.c1;
  var getBooleanHashCode = kotlin_kotlin.$_$.yd;
  var invalidateMeasurement = kotlin_org_jetbrains_compose_ui_ui.$_$.m2;
  var GlobalPositionAwareModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.y1;
  var RememberObserver = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var Offset__plus_impl_c78cg0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.b1;
  var invalidateSemantics = kotlin_org_jetbrains_compose_ui_ui.$_$.n2;
  var invalidateDraw = kotlin_org_jetbrains_compose_ui_ui.$_$.k2;
  var set_text = kotlin_org_jetbrains_compose_ui_ui.$_$.f3;
  var set_textSubstitution = kotlin_org_jetbrains_compose_ui_ui.$_$.g3;
  var set_isShowingTextSubstitution = kotlin_org_jetbrains_compose_ui_ui.$_$.b3;
  var setTextSubstitution = kotlin_org_jetbrains_compose_ui_ui.$_$.d3;
  var showTextSubstitution = kotlin_org_jetbrains_compose_ui_ui.$_$.e3;
  var clearTextSubstitution = kotlin_org_jetbrains_compose_ui_ui.$_$.z2;
  var getTextLayoutResult = kotlin_org_jetbrains_compose_ui_ui.$_$.a3;
  var invalidateLayer = kotlin_org_jetbrains_compose_ui_ui.$_$.l2;
  var get_FirstBaseline = kotlin_org_jetbrains_compose_ui_ui.$_$.c1;
  var to = kotlin_kotlin.$_$.sl;
  var get_LastBaseline = kotlin_org_jetbrains_compose_ui_ui.$_$.d1;
  var mapOf = kotlin_kotlin.$_$.ia;
  var Rect_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f;
  var Companion_getInstance_23 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.n1;
  var Companion_getInstance_24 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r3;
  var get_shouldClearDescendantSemantics = kotlin_org_jetbrains_compose_ui_ui.$_$.g2;
  var get_shouldMergeDescendantSemantics = kotlin_org_jetbrains_compose_ui_ui.$_$.h2;
  var SemanticsModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.i2;
  var getStringHashCode = kotlin_kotlin.$_$.de;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.y;
  var get_isUnspecified = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.q;
  var Companion_getInstance_25 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.o1;
  var Companion_getInstance_26 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.p1;
  var TextRange_0 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.v;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$_$.k;
  var lazy = kotlin_kotlin.$_$.dl;
  var _TextRange___get_end__impl__gcdxpp = kotlin_org_jetbrains_compose_ui_ui_text.$_$.e1;
  var _TextRange___get_start__impl__ww4t90 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.f1;
  var KProperty0 = kotlin_kotlin.$_$.lg;
  var THROW_ISE = kotlin_kotlin.$_$.ek;
  var getLocalDelegateReference = kotlin_kotlin.$_$.zd;
  var composed = kotlin_org_jetbrains_compose_ui_ui.$_$.r3;
  var get_isPrimaryPressed = kotlin_org_jetbrains_compose_ui_ui.$_$.w;
  var PointerInputScope = kotlin_org_jetbrains_compose_ui_ui.$_$.r;
  var rememberUpdatedState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o1;
  var pointerInput = kotlin_org_jetbrains_compose_ui_ui.$_$.z;
  var positionChange = kotlin_org_jetbrains_compose_ui_ui.$_$.b1;
  var changedToDownIgnoreConsumed = kotlin_org_jetbrains_compose_ui_ui.$_$.s;
  var get_isShiftPressed_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.x;
  var changedToUp = kotlin_org_jetbrains_compose_ui_ui.$_$.u;
  var Offset__hashCode_impl_hbql41 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.z;
  var SemanticsPropertyKey = kotlin_org_jetbrains_compose_ui_ui.$_$.y2;
  var single = kotlin_kotlin.$_$.db;
  var mapOf_0 = kotlin_kotlin.$_$.ha;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.l1;
  var AnimationVector2D = kotlin_org_jetbrains_compose_animation_animation_core.$_$.c;
  var get_isSpecified = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.p;
  var TwoWayConverter = kotlin_org_jetbrains_compose_animation_animation_core.$_$.k;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var CancellationException_init_$Init$_0 = kotlin_kotlin.$_$.e1;
  var SkikoKey_KEY_SPACE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.c7;
  var Companion_getInstance_27 = kotlin_org_jetbrains_compose_ui_ui.$_$.c4;
  var _Key___get_keyCode__impl__ymzu5v = kotlin_org_jetbrains_compose_ui_ui.$_$.b4;
  var _Key___init__impl__p6mluu = kotlin_org_jetbrains_compose_ui_ui.$_$.a4;
  var get_hostOs = kotlin_org_jetbrains_skiko_skiko.$_$.la;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i;
  var MainScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c2;
  var get_LocalSystemTheme = kotlin_org_jetbrains_compose_ui_ui.$_$.i3;
  var SystemTheme_Dark_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.w3;
  var pointerHoverIcon = kotlin_org_jetbrains_compose_ui_ui.$_$.y;
  var get_isMetaPressed = kotlin_org_jetbrains_compose_ui_ui.$_$.m;
  var Companion_getInstance_28 = kotlin_org_jetbrains_skiko_skiko.$_$.l8;
  var Companion_getInstance_29 = kotlin_org_jetbrains_compose_ui_ui.$_$.d4;
  //endregion
  //region block: pre-declaration
  setMetadataFor(BackgroundElement, 'BackgroundElement', classMeta, ModifierNodeElement);
  setMetadataFor(BackgroundNode, 'BackgroundNode', classMeta, Node, [DrawModifierNode, Node]);
  setMetadataFor(MarqueeSpacing, 'MarqueeSpacing', interfaceMeta);
  setMetadataFor(sam$androidx_compose_foundation_MarqueeSpacing$0, 'sam$androidx_compose_foundation_MarqueeSpacing$0', classMeta, VOID, [MarqueeSpacing]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(BorderModifierNodeElement, 'BorderModifierNodeElement', classMeta, ModifierNodeElement);
  setMetadataFor(BorderModifierNode, 'BorderModifierNode', classMeta, DelegatingNode);
  setMetadataFor(BorderCache, 'BorderCache', classMeta, VOID, VOID, BorderCache);
  setMetadataFor(BorderStroke, 'BorderStroke', classMeta);
  setMetadataFor(HorizontalScrollableClipModifier$1, VOID, classMeta, VOID, [Shape]);
  setMetadataFor(VerticalScrollableClipModifier$1, VOID, classMeta, VOID, [Shape]);
  setMetadataFor(ExperimentalFoundationApi, 'ExperimentalFoundationApi', classMeta, VOID, [Annotation]);
  setMetadataFor(FocusableInNonTouchMode, 'FocusableInNonTouchMode', classMeta, Node, [Node, CompositionLocalConsumerModifierNode, FocusPropertiesModifierNode], FocusableInNonTouchMode);
  setMetadataFor(FocusableInNonTouchModeElement$1, VOID, classMeta, ModifierNodeElement);
  setMetadataFor(Indication, 'Indication', interfaceMeta);
  setMetadataFor(IndicationInstance, 'IndicationInstance', interfaceMeta);
  setMetadataFor(DefaultDebugIndicationInstance, 'DefaultDebugIndicationInstance', classMeta, VOID, [IndicationInstance]);
  setMetadataFor(DefaultDebugIndication, 'DefaultDebugIndication', objectMeta, VOID, [Indication]);
  setMetadataFor(MutatePriority, 'MutatePriority', classMeta, Enum);
  setMetadataFor(Mutator, 'Mutator', classMeta);
  setMetadataFor(MutatorMutex$mutate$slambda, 'MutatorMutex$mutate$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(MutatorMutex$mutateWith$slambda, 'MutatorMutex$mutateWith$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(MutatorMutex, 'MutatorMutex', classMeta, VOID, VOID, MutatorMutex, VOID, VOID, [2, 3]);
  setMetadataFor(PlatformOptimizedCancellationException, 'PlatformOptimizedCancellationException', classMeta, CancellationException);
  setMetadataFor(MutationInterruptedException, 'MutationInterruptedException', classMeta, PlatformOptimizedCancellationException, VOID, MutationInterruptedException);
  setMetadataFor(PointerDirectionConfig, 'PointerDirectionConfig', interfaceMeta);
  setMetadataFor(HorizontalPointerDirectionConfig$1, VOID, classMeta, VOID, [PointerDirectionConfig]);
  setMetadataFor(VerticalPointerDirectionConfig$1, VOID, classMeta, VOID, [PointerDirectionConfig]);
  setMetadataFor(BidirectionalPointerDirectionConfig$1, VOID, classMeta, VOID, [PointerDirectionConfig]);
  setMetadataFor(awaitLongPressOrCancellation$slambda, 'awaitLongPressOrCancellation$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor($dragCOROUTINE$0, '$dragCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor($awaitLongPressOrCancellationCOROUTINE$1, '$awaitLongPressOrCancellationCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor($awaitDragOrCancellationCOROUTINE$2, '$awaitDragOrCancellationCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor($awaitDragOrUpCOROUTINE$3, '$awaitDragOrUpCOROUTINE$3', classMeta, CoroutineImpl);
  setMetadataFor(DragScope, 'DragScope', interfaceMeta);
  setMetadataFor(NoOpDragScope$1, VOID, classMeta, VOID, [DragScope]);
  setMetadataFor(Drag2DScope, 'Drag2DScope', interfaceMeta);
  setMetadataFor(NoOpDrag2DScope$1, VOID, classMeta, VOID, [Drag2DScope]);
  setMetadataFor(FlingBehavior, 'FlingBehavior', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(awaitEachGesture$slambda, 'awaitEachGesture$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor($awaitAllPointersUpCOROUTINE$4, '$awaitAllPointersUpCOROUTINE$4', classMeta, CoroutineImpl);
  setMetadataFor(Orientation, 'Orientation', classMeta, Enum);
  setMetadataFor(NoOpOnDragStarted$slambda, 'NoOpOnDragStarted$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [2]);
  setMetadataFor(ScrollScope, 'ScrollScope', interfaceMeta);
  setMetadataFor(NoOpScrollScope$1, VOID, classMeta, VOID, [ScrollScope]);
  setMetadataFor(NoOpFlingBehavior$1, VOID, classMeta, VOID, [FlingBehavior], VOID, VOID, VOID, [1]);
  setMetadataFor(DefaultScrollMotionDurationScale$1, VOID, classMeta, VOID, [MotionDurationScale]);
  setMetadataFor(UnityDensity$1, VOID, classMeta, VOID, [Density]);
  function scroll$default(scrollPriority, block, $completion, $super) {
    scrollPriority = scrollPriority === VOID ? MutatePriority_Default_getInstance() : scrollPriority;
    return $super === VOID ? this.scroll_6vso98_k$(scrollPriority, block, $completion) : $super.scroll_6vso98_k$.call(this, scrollPriority, block, $completion);
  }
  function get_canScrollForward() {
    return true;
  }
  function get_canScrollBackward() {
    return true;
  }
  setMetadataFor(ScrollableState, 'ScrollableState', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(DefaultScrollableState$scroll$slambda$slambda, 'DefaultScrollableState$scroll$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(DefaultScrollableState$scrollScope$1, VOID, classMeta, VOID, [ScrollScope]);
  setMetadataFor(DefaultScrollableState$scroll$slambda, 'DefaultScrollableState$scroll$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(DefaultScrollableState, 'DefaultScrollableState', classMeta, VOID, [ScrollableState], VOID, VOID, VOID, [2]);
  setMetadataFor(PressGestureScope, 'PressGestureScope', interfaceMeta, VOID, [Density], VOID, VOID, VOID, [0]);
  setMetadataFor(NoPressGesture$slambda, 'NoPressGesture$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [2]);
  setMetadataFor(SnapPositionInLayout, 'SnapPositionInLayout', interfaceMeta);
  setMetadataFor(sam$androidx_compose_foundation_gestures_snapping_SnapPositionInLayout$0, 'sam$androidx_compose_foundation_gestures_snapping_SnapPositionInLayout$0', classMeta, VOID, [SnapPositionInLayout]);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(Interaction, 'Interaction', interfaceMeta);
  setMetadataFor(FocusInteraction, 'FocusInteraction', interfaceMeta, VOID, [Interaction]);
  setMetadataFor(Focus, 'Focus', classMeta, VOID, [FocusInteraction], Focus);
  setMetadataFor(Unfocus, 'Unfocus', classMeta, VOID, [FocusInteraction]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(collectIsFocusedAsState$slambda$slambda, 'collectIsFocusedAsState$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(collectIsFocusedAsState$slambda, 'collectIsFocusedAsState$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(HoverInteraction, 'HoverInteraction', interfaceMeta, VOID, [Interaction]);
  setMetadataFor(Enter, 'Enter', classMeta, VOID, [HoverInteraction], Enter);
  setMetadataFor(Exit, 'Exit', classMeta, VOID, [HoverInteraction]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(collectIsHoveredAsState$slambda$slambda, 'collectIsHoveredAsState$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(collectIsHoveredAsState$slambda, 'collectIsHoveredAsState$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(InteractionSource, 'InteractionSource', interfaceMeta);
  setMetadataFor(MutableInteractionSource, 'MutableInteractionSource', interfaceMeta, VOID, [InteractionSource], VOID, VOID, VOID, [1]);
  setMetadataFor(MutableInteractionSourceImpl, 'MutableInteractionSourceImpl', classMeta, VOID, [MutableInteractionSource], MutableInteractionSourceImpl, VOID, VOID, [1]);
  setMetadataFor(PressInteraction, 'PressInteraction', interfaceMeta, VOID, [Interaction]);
  setMetadataFor(Press, 'Press', classMeta, VOID, [PressInteraction]);
  setMetadataFor(Release, 'Release', classMeta, VOID, [PressInteraction]);
  setMetadataFor(Cancel, 'Cancel', classMeta, VOID, [PressInteraction]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_1, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(collectIsPressedAsState$slambda$slambda, 'collectIsPressedAsState$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(collectIsPressedAsState$slambda, 'collectIsPressedAsState$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  function fillParentMaxSize$default(_this__u8e3s4, fraction, $super) {
    fraction = fraction === VOID ? 1.0 : fraction;
    return $super === VOID ? this.fillParentMaxSize_4i84f1_k$(_this__u8e3s4, fraction) : $super.fillParentMaxSize_4i84f1_k$.call(this, _this__u8e3s4, fraction);
  }
  function fillParentMaxWidth$default(_this__u8e3s4, fraction, $super) {
    fraction = fraction === VOID ? 1.0 : fraction;
    return $super === VOID ? this.fillParentMaxWidth_e34z96_k$(_this__u8e3s4, fraction) : $super.fillParentMaxWidth_e34z96_k$.call(this, _this__u8e3s4, fraction);
  }
  function fillParentMaxHeight$default(_this__u8e3s4, fraction, $super) {
    fraction = fraction === VOID ? 1.0 : fraction;
    return $super === VOID ? this.fillParentMaxHeight_xr2awn_k$(_this__u8e3s4, fraction) : $super.fillParentMaxHeight_xr2awn_k$.call(this, _this__u8e3s4, fraction);
  }
  function animateItemPlacement$default(_this__u8e3s4, animationSpec, $super) {
    animationSpec = animationSpec === VOID ? spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$(), new IntOffset(get_VisibilityThreshold(Companion_getInstance_11()))) : animationSpec;
    return $super === VOID ? this.animateItemPlacement_igbi2x_k$(_this__u8e3s4, animationSpec) : $super.animateItemPlacement_igbi2x_k$.call(this, _this__u8e3s4, animationSpec);
  }
  setMetadataFor(LazyItemScope, 'LazyItemScope', interfaceMeta);
  setMetadataFor(LazyItemScopeImpl, 'LazyItemScopeImpl', classMeta, VOID, [LazyItemScope], LazyItemScopeImpl);
  setMetadataFor(ParentSizeElement, 'ParentSizeElement', classMeta, ModifierNodeElement);
  setMetadataFor(ParentSizeNode, 'ParentSizeNode', classMeta, Node, [LayoutModifierNode, Node]);
  setMetadataFor(AnimateItemElement, 'AnimateItemElement', classMeta, ModifierNodeElement);
  setMetadataFor(ItemInfo, 'ItemInfo', classMeta, VOID, VOID, ItemInfo);
  setMetadataFor(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', classMeta, VOID, [Comparator]);
  setMetadataFor(LazyListItemAnimator, 'LazyListItemAnimator', classMeta, VOID, VOID, LazyListItemAnimator);
  function get_contentType() {
    return null;
  }
  setMetadataFor(LazyListItemInfo, 'LazyListItemInfo', interfaceMeta);
  function getContentType(index) {
    return null;
  }
  function getKey(index) {
    return getDefaultLazyLayoutKey(index);
  }
  function getIndex(key) {
    return -1;
  }
  setMetadataFor(LazyLayoutItemProvider, 'LazyLayoutItemProvider', interfaceMeta);
  setMetadataFor(LazyListItemProvider, 'LazyListItemProvider', interfaceMeta, VOID, [LazyLayoutItemProvider]);
  function get_viewportSize() {
    return Companion_getInstance_13().get_Zero_9we0a6_k$();
  }
  function get_orientation() {
    return Orientation_Vertical_getInstance();
  }
  function get_reverseLayout() {
    return false;
  }
  function get_beforeContentPadding() {
    return 0;
  }
  function get_afterContentPadding() {
    return 0;
  }
  function get_mainAxisItemSpacing() {
    return 0;
  }
  setMetadataFor(LazyListLayoutInfo, 'LazyListLayoutInfo', interfaceMeta);
  setMetadataFor(LazyListMeasureResult, 'LazyListMeasureResult', classMeta, VOID, [LazyListLayoutInfo, MeasureResult]);
  setMetadataFor(LazyListMeasuredItem, 'LazyListMeasuredItem', classMeta, VOID, [LazyListItemInfo]);
  setMetadataFor(LazyListMeasuredItemProvider, 'LazyListMeasuredItemProvider', classMeta);
  setMetadataFor(EmptyLazyListMeasureResult$1, VOID, classMeta, VOID, [MeasureResult]);
  setMetadataFor(LazyScopeMarker, 'LazyScopeMarker', classMeta, VOID, [Annotation]);
  setMetadataFor(LazyGridSlots, 'LazyGridSlots', classMeta);
  function item$default(key, span, contentType, content, $super) {
    key = key === VOID ? null : key;
    span = span === VOID ? null : span;
    contentType = contentType === VOID ? null : contentType;
    var tmp;
    if ($super === VOID) {
      this.item_njxbyk_k$(key, span, contentType, content);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.item_njxbyk_k$.call(this, key, span, contentType, content);
    }
    return tmp;
  }
  function items$default(count, key, span, contentType, itemContent, $super) {
    key = key === VOID ? null : key;
    span = span === VOID ? null : span;
    var tmp;
    if (contentType === VOID) {
      tmp = LazyGridScope$items$lambda;
    } else {
      tmp = contentType;
    }
    contentType = tmp;
    var tmp_0;
    if ($super === VOID) {
      this.items_81nxg1_k$(count, key, span, contentType, itemContent);
      tmp_0 = Unit_getInstance();
    } else {
      tmp_0 = $super.items_81nxg1_k$.call(this, count, key, span, contentType, itemContent);
    }
    return tmp_0;
  }
  setMetadataFor(LazyGridScope, 'LazyGridScope', interfaceMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(LazyLayoutIntervalContent, 'LazyLayoutIntervalContent', classMeta);
  setMetadataFor(LazyGridIntervalContent, 'LazyGridIntervalContent', classMeta, LazyLayoutIntervalContent, [LazyGridScope, LazyLayoutIntervalContent]);
  function get_key_1() {
    return null;
  }
  function get_type() {
    return LazyLayoutIntervalContent$Interval$_get_type_$lambda_1wu10p;
  }
  setMetadataFor(Interval_1, 'Interval', interfaceMeta);
  setMetadataFor(LazyGridInterval, 'LazyGridInterval', classMeta, VOID, [Interval_1]);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(LazyGridItemInfo, 'LazyGridItemInfo', interfaceMeta);
  setMetadataFor(sam$kotlin_Comparator$0_0, 'sam$kotlin_Comparator$0', classMeta, VOID, [Comparator]);
  setMetadataFor(LazyGridItemPlacementAnimator, 'LazyGridItemPlacementAnimator', classMeta, VOID, VOID, LazyGridItemPlacementAnimator);
  setMetadataFor(ItemInfo_0, 'ItemInfo', classMeta);
  setMetadataFor(LazyGridItemProvider, 'LazyGridItemProvider', interfaceMeta, VOID, [LazyLayoutItemProvider]);
  function animateItemPlacement$default_0(_this__u8e3s4, animationSpec, $super) {
    animationSpec = animationSpec === VOID ? spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$(), new IntOffset(get_VisibilityThreshold(Companion_getInstance_11()))) : animationSpec;
    return $super === VOID ? this.animateItemPlacement_igbi2x_k$(_this__u8e3s4, animationSpec) : $super.animateItemPlacement_igbi2x_k$.call(this, _this__u8e3s4, animationSpec);
  }
  setMetadataFor(LazyGridItemScope, 'LazyGridItemScope', interfaceMeta);
  setMetadataFor(LazyGridLayoutInfo, 'LazyGridLayoutInfo', interfaceMeta);
  setMetadataFor(LazyGridMeasureResult, 'LazyGridMeasureResult', classMeta, VOID, [LazyGridLayoutInfo, MeasureResult]);
  setMetadataFor(LazyGridMeasuredItem, 'LazyGridMeasuredItem', classMeta, VOID, [LazyGridItemInfo]);
  setMetadataFor(LazyGridMeasuredItemProvider, 'LazyGridMeasuredItemProvider', classMeta);
  setMetadataFor(LazyGridMeasuredLine, 'LazyGridMeasuredLine', classMeta);
  setMetadataFor(LazyGridScopeMarker, 'LazyGridScopeMarker', classMeta, VOID, [Annotation]);
  setMetadataFor(GridItemSpan, 'GridItemSpan', classMeta);
  setMetadataFor(LazyGridItemSpanScope, 'LazyGridItemSpanScope', interfaceMeta);
  setMetadataFor(LineConfiguration, 'LineConfiguration', classMeta);
  setMetadataFor(Bucket, 'Bucket', classMeta);
  setMetadataFor(LazyGridItemSpanScopeImpl, 'LazyGridItemSpanScopeImpl', objectMeta, VOID, [LazyGridItemSpanScope]);
  setMetadataFor(LazyGridSpanLayoutProvider, 'LazyGridSpanLayoutProvider', classMeta);
  setMetadataFor(EmptyLazyGridLayoutInfo$1, VOID, classMeta, VOID, [MeasureResult]);
  setMetadataFor($waitForFirstLayoutCOROUTINE$5, '$waitForFirstLayoutCOROUTINE$5', classMeta, CoroutineImpl);
  setMetadataFor(AwaitFirstLayoutModifier, 'AwaitFirstLayoutModifier', classMeta, VOID, [OnGloballyPositionedModifier], AwaitFirstLayoutModifier, VOID, VOID, [0]);
  setMetadataFor(Interval, 'Interval', classMeta);
  function forEach$default(fromIndex, toIndex, block, $super) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? this.get_size_woubt6_k$() - 1 | 0 : toIndex;
    var tmp;
    if ($super === VOID) {
      this.forEach_5a9nbg_k$(fromIndex, toIndex, block);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.forEach_5a9nbg_k$.call(this, fromIndex, toIndex, block);
    }
    return tmp;
  }
  setMetadataFor(IntervalList, 'IntervalList', interfaceMeta);
  setMetadataFor(MutableIntervalList, 'MutableIntervalList', classMeta, VOID, [IntervalList], MutableIntervalList);
  setMetadataFor(LazyLayoutAnimateScrollScope, 'LazyLayoutAnimateScrollScope', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(ItemFoundInScroll, 'ItemFoundInScroll', classMeta, CancellationException);
  setMetadataFor(animateScrollToItem$slambda, 'animateScrollToItem$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(LazyLayoutAnimation$cancelPlacementAnimation$slambda, 'LazyLayoutAnimation$cancelPlacementAnimation$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(LazyLayoutAnimation$animatePlacementDelta$slambda, 'LazyLayoutAnimation$animatePlacementDelta$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(LazyLayoutAnimation$animateAppearance$slambda, 'LazyLayoutAnimation$animateAppearance$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(LazyLayoutAnimation$stopAnimations$slambda, 'LazyLayoutAnimation$stopAnimations$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(LazyLayoutAnimation$stopAnimations$slambda_1, 'LazyLayoutAnimation$stopAnimations$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(LazyLayoutAnimation, 'LazyLayoutAnimation', classMeta);
  setMetadataFor(LazyLayoutAnimationSpecsNode, 'LazyLayoutAnimationSpecsNode', classMeta, Node, [Node, ParentDataModifierNode]);
  setMetadataFor(Interval_0, 'Interval', classMeta);
  setMetadataFor(LazyLayoutBeyondBoundsInfo, 'LazyLayoutBeyondBoundsInfo', classMeta, VOID, VOID, LazyLayoutBeyondBoundsInfo);
  setMetadataFor(LazyLayoutKeyIndexMap, 'LazyLayoutKeyIndexMap', interfaceMeta);
  setMetadataFor(Empty, 'Empty', objectMeta, VOID, [LazyLayoutKeyIndexMap]);
  function toDp_2(_this__u8e3s4) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!equals(_TextUnit___get_type__impl__uc2olt(_this__u8e3s4), Companion_getInstance_15().get_Sp_88j2da_k$())) {
      // Inline function 'androidx.compose.foundation.lazy.layout.LazyLayoutMeasureScope.toDp.<anonymous>' call
      var message = 'Only Sp can convert to Px';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return _Dp___init__impl__ms3zkb(_TextUnit___get_value__impl__hpbx0k(_this__u8e3s4) * this.get_fontScale_h56n3i_k$());
  }
  function toDp_3(_this__u8e3s4) {
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_0 = _this__u8e3s4 / this.get_density_qy0267_k$();
    return _Dp___init__impl__ms3zkb(this_0);
  }
  function toDp_4(_this__u8e3s4) {
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_0 = _this__u8e3s4 / this.get_density_qy0267_k$();
    return _Dp___init__impl__ms3zkb(this_0);
  }
  function toSp_2(_this__u8e3s4) {
    return get_sp(_this__u8e3s4 / (this.get_fontScale_h56n3i_k$() * this.get_density_qy0267_k$()));
  }
  function toSp_3(_this__u8e3s4) {
    return get_sp(_this__u8e3s4 / (this.get_fontScale_h56n3i_k$() * this.get_density_qy0267_k$()));
  }
  function toSp_4(_this__u8e3s4) {
    return get_sp(_Dp___get_value__impl__geb1vb(_this__u8e3s4) / this.get_fontScale_h56n3i_k$());
  }
  function toSize_1(_this__u8e3s4) {
    var tmp;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    if (!_DpSize___get_packedValue__impl__jx4au8(_this__u8e3s4).equals(_DpSize___get_packedValue__impl__jx4au8(Companion_getInstance_16().get_Unspecified_cemiqc_k$()))) {
      tmp = Size_0(this.toPx_mycba2_k$(_DpSize___get_width__impl__o3d5gt(_this__u8e3s4)), this.toPx_mycba2_k$(_DpSize___get_height__impl__5xueo2(_this__u8e3s4)));
    } else {
      tmp = Companion_getInstance_17().get_Unspecified_3ttj0y_k$();
    }
    return tmp;
  }
  function toDpSize_0(_this__u8e3s4) {
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.isSpecified' call
    if (!_Size___get_packedValue__impl__7rlt1o(_this__u8e3s4).equals(_Size___get_packedValue__impl__7rlt1o(Companion_getInstance_17().get_Unspecified_3ttj0y_k$()))) {
      tmp = DpSize(this.toDp_hs0w0_k$(_Size___get_width__impl__58y75t(_this__u8e3s4)), this.toDp_hs0w0_k$(_Size___get_height__impl__a04p02(_this__u8e3s4)));
    } else {
      tmp = Companion_getInstance_16().get_Unspecified_cemiqc_k$();
    }
    return tmp;
  }
  setMetadataFor(LazyLayoutMeasureScope, 'LazyLayoutMeasureScope', interfaceMeta, VOID, [MeasureScope]);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(LazyLayoutNearestRangeState, 'LazyLayoutNearestRangeState', classMeta, VOID, [State]);
  setMetadataFor(PinnedItem, 'PinnedItem', interfaceMeta);
  setMetadataFor(LazyLayoutPinnedItemList, 'LazyLayoutPinnedItemList', classMeta, VOID, [List], LazyLayoutPinnedItemList_init_$Create$);
  setMetadataFor(PrefetchHandle, 'PrefetchHandle', interfaceMeta);
  setMetadataFor(Prefetcher, 'Prefetcher', interfaceMeta);
  setMetadataFor(LazyLayoutPrefetchState, 'LazyLayoutPrefetchState', classMeta, VOID, VOID, LazyLayoutPrefetchState);
  setMetadataFor(DummyHandle, 'DummyHandle', objectMeta, VOID, [PrefetchHandle]);
  setMetadataFor(ObservableScopeInvalidator, 'ObservableScopeInvalidator', classMeta);
  setMetadataFor(LazyStaggeredGridSlots, 'LazyStaggeredGridSlots', classMeta);
  setMetadataFor(LazyStaggeredGridAnimateScrollScope, 'LazyStaggeredGridAnimateScrollScope', classMeta, VOID, [LazyLayoutAnimateScrollScope], VOID, VOID, VOID, [1]);
  setMetadataFor(LazyStaggeredGridScopeMarker, 'LazyStaggeredGridScopeMarker', classMeta, VOID, [Annotation]);
  setMetadataFor(LazyStaggeredGridInterval, 'LazyStaggeredGridInterval', classMeta, VOID, [Interval_1]);
  setMetadataFor(sam$kotlin_Comparator$0_1, 'sam$kotlin_Comparator$0', classMeta, VOID, [Comparator]);
  setMetadataFor(LazyStaggeredGridItemPlacementAnimator, 'LazyStaggeredGridItemPlacementAnimator', classMeta, VOID, VOID, LazyStaggeredGridItemPlacementAnimator);
  setMetadataFor(ItemInfo_1, 'ItemInfo', classMeta);
  setMetadataFor(LazyStaggeredGridItemProvider, 'LazyStaggeredGridItemProvider', interfaceMeta, VOID, [LazyLayoutItemProvider]);
  function animateItemPlacement$default_1(_this__u8e3s4, animationSpec, $super) {
    animationSpec = animationSpec === VOID ? spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$(), new IntOffset(get_VisibilityThreshold(Companion_getInstance_11()))) : animationSpec;
    return $super === VOID ? this.animateItemPlacement_igbi2x_k$(_this__u8e3s4, animationSpec) : $super.animateItemPlacement_igbi2x_k$.call(this, _this__u8e3s4, animationSpec);
  }
  setMetadataFor(LazyStaggeredGridItemScope, 'LazyStaggeredGridItemScope', interfaceMeta);
  setMetadataFor(SpannedItem, 'SpannedItem', classMeta);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(LazyStaggeredGridLaneInfo, 'LazyStaggeredGridLaneInfo', classMeta, VOID, VOID, LazyStaggeredGridLaneInfo);
  setMetadataFor(LazyStaggeredGridItemInfo, 'LazyStaggeredGridItemInfo', interfaceMeta);
  setMetadataFor(LazyStaggeredGridMeasuredItem, 'LazyStaggeredGridMeasuredItem', classMeta, VOID, [LazyStaggeredGridItemInfo]);
  setMetadataFor(LazyStaggeredGridMeasureProvider, 'LazyStaggeredGridMeasureProvider', classMeta);
  setMetadataFor(LazyStaggeredGridMeasureContext$measuredItemProvider$1, VOID, classMeta, LazyStaggeredGridMeasureProvider);
  setMetadataFor(LazyStaggeredGridMeasureContext, 'LazyStaggeredGridMeasureContext', classMeta);
  setMetadataFor(SpanRange, 'SpanRange', classMeta);
  setMetadataFor(LazyStaggeredGridLayoutInfo, 'LazyStaggeredGridLayoutInfo', interfaceMeta);
  setMetadataFor(LazyStaggeredGridMeasureResult, 'LazyStaggeredGridMeasureResult', classMeta, VOID, [LazyStaggeredGridLayoutInfo, MeasureResult]);
  setMetadataFor(EmptyLazyStaggeredGridLayoutInfo$1, VOID, classMeta, VOID, [MeasureResult]);
  setMetadataFor(LazyStaggeredGridScrollPosition, 'LazyStaggeredGridScrollPosition', classMeta, VOID, [SnapshotMutationPolicy]);
  setMetadataFor(LazyStaggeredGridSpanProvider, 'LazyStaggeredGridSpanProvider', classMeta);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(StaggeredGridItemSpan, 'StaggeredGridItemSpan', classMeta);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(LazyStaggeredGridState$remeasurementModifier$1, VOID, classMeta, VOID, [RemeasurementModifier]);
  setMetadataFor(LazyStaggeredGridState$scrollToItem$slambda, 'LazyStaggeredGridState$scrollToItem$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor($scrollCOROUTINE$6, '$scrollCOROUTINE$6', classMeta, CoroutineImpl);
  setMetadataFor(LazyStaggeredGridState, 'LazyStaggeredGridState', classMeta, VOID, [ScrollableState], LazyStaggeredGridState_init_$Create$, VOID, VOID, [2]);
  setMetadataFor(PageInfo, 'PageInfo', interfaceMeta);
  setMetadataFor(MeasuredPage, 'MeasuredPage', classMeta, VOID, [PageInfo]);
  setMetadataFor(PagerLayoutInfo, 'PagerLayoutInfo', interfaceMeta);
  setMetadataFor(PagerMeasureResult, 'PagerMeasureResult', classMeta, VOID, [PagerLayoutInfo, MeasureResult]);
  setMetadataFor(sam$androidx_compose_foundation_gestures_snapping_SnapPositionInLayout$0_0, 'sam$androidx_compose_foundation_gestures_snapping_SnapPositionInLayout$0', classMeta, VOID, [SnapPositionInLayout]);
  setMetadataFor(EmptyLayoutInfo$1, VOID, classMeta, VOID, [MeasureResult]);
  setMetadataFor(UnitDensity$1, VOID, classMeta, VOID, [Density]);
  setMetadataFor(BringIntoViewParent, 'BringIntoViewParent', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(CornerBasedShape, 'CornerBasedShape', classMeta, VOID, [Shape]);
  setMetadataFor(CornerSize, 'CornerSize', interfaceMeta);
  setMetadataFor(PercentCornerSize, 'PercentCornerSize', classMeta, VOID, [CornerSize, InspectableValue]);
  setMetadataFor(DpCornerSize, 'DpCornerSize', classMeta, VOID, [CornerSize, InspectableValue]);
  setMetadataFor(ZeroCornerSize$1, VOID, classMeta, VOID, [CornerSize, InspectableValue]);
  setMetadataFor(RoundedCornerShape, 'RoundedCornerShape', classMeta, CornerBasedShape);
  setMetadataFor(EmptyMeasurePolicy, 'EmptyMeasurePolicy', objectMeta, VOID, [MeasurePolicy]);
  setMetadataFor(Handle, 'Handle', classMeta, Enum);
  setMetadataFor(KeyCommand, 'KeyCommand', classMeta, Enum);
  setMetadataFor(KeyMapping, 'KeyMapping', interfaceMeta);
  setMetadataFor(defaultKeyMapping$2$1, VOID, classMeta, VOID, [KeyMapping]);
  setMetadataFor(commonKeyMapping$1, VOID, classMeta, VOID, [KeyMapping]);
  setMetadataFor(TextDragObserver, 'TextDragObserver', interfaceMeta);
  setMetadataFor(ValidatingOffsetMapping, 'ValidatingOffsetMapping', classMeta, VOID, [OffsetMapping]);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(InlineDensity, 'InlineDensity', classMeta);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(MinLinesConstrainer, 'MinLinesConstrainer', classMeta);
  setMetadataFor(MultiParagraphLayoutCache, 'MultiParagraphLayoutCache', classMeta);
  setMetadataFor(ParagraphLayoutCache, 'ParagraphLayoutCache', classMeta);
  setMetadataFor(SelectableTextAnnotatedStringElement, 'SelectableTextAnnotatedStringElement', classMeta, ModifierNodeElement);
  setMetadataFor(SelectableTextAnnotatedStringNode, 'SelectableTextAnnotatedStringNode', classMeta, DelegatingNode, [DelegatingNode, LayoutModifierNode, DrawModifierNode, GlobalPositionAwareModifierNode]);
  setMetadataFor(SelectionController, 'SelectionController', classMeta, VOID, [RememberObserver]);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor(StaticTextSelectionParams, 'StaticTextSelectionParams', classMeta);
  setMetadataFor(makeDefaultSelectionModifier$longPressDragObserver$1, VOID, classMeta, VOID, [TextDragObserver]);
  setMetadataFor(MouseSelectionObserver, 'MouseSelectionObserver', interfaceMeta);
  setMetadataFor(makeDefaultSelectionModifier$mouseSelectionObserver$1, VOID, classMeta, VOID, [MouseSelectionObserver]);
  setMetadataFor(TextAnnotatedStringElement, 'TextAnnotatedStringElement', classMeta, ModifierNodeElement);
  setMetadataFor(TextSubstitutionValue, 'TextSubstitutionValue', classMeta);
  setMetadataFor(TextAnnotatedStringNode, 'TextAnnotatedStringNode', classMeta, Node, [Node, LayoutModifierNode, DrawModifierNode, SemanticsModifierNode]);
  setMetadataFor(TextStringSimpleElement, 'TextStringSimpleElement', classMeta, ModifierNodeElement);
  setMetadataFor(TextSubstitutionValue_0, 'TextSubstitutionValue', classMeta);
  setMetadataFor(TextStringSimpleNode, 'TextStringSimpleNode', classMeta, Node, [Node, LayoutModifierNode, DrawModifierNode, SemanticsModifierNode]);
  function getLineHeight(offset) {
    return 0.0;
  }
  setMetadataFor(Selectable, 'Selectable', interfaceMeta);
  setMetadataFor(MultiWidgetSelectionDelegate, 'MultiWidgetSelectionDelegate', classMeta, VOID, [Selectable]);
  setMetadataFor(AnchorInfo, 'AnchorInfo', classMeta);
  setMetadataFor(Selection, 'Selection', classMeta);
  setMetadataFor(SelectionAdjustment, 'SelectionAdjustment', interfaceMeta);
  setMetadataFor(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0, 'sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0', classMeta, VOID, [SelectionAdjustment]);
  setMetadataFor(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_0, 'sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0', classMeta, VOID, [SelectionAdjustment]);
  setMetadataFor(BoundaryFunction, 'BoundaryFunction', interfaceMeta);
  setMetadataFor(sam$androidx_compose_foundation_text_selection_BoundaryFunction$0, 'sam$androidx_compose_foundation_text_selection_BoundaryFunction$0', classMeta, VOID, [BoundaryFunction]);
  setMetadataFor(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_1, 'sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0', classMeta, VOID, [SelectionAdjustment]);
  setMetadataFor(sam$androidx_compose_foundation_text_selection_BoundaryFunction$0_0, 'sam$androidx_compose_foundation_text_selection_BoundaryFunction$0', classMeta, VOID, [BoundaryFunction]);
  setMetadataFor(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_2, 'sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0', classMeta, VOID, [SelectionAdjustment]);
  setMetadataFor(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_3, 'sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0', classMeta, VOID, [SelectionAdjustment]);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor(ClicksCounter, 'ClicksCounter', classMeta);
  setMetadataFor(selectionGestureInput$lambda$slambda$slambda, 'selectionGestureInput$lambda$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(selectionGestureInput$lambda$slambda, 'selectionGestureInput$lambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor($awaitDownCOROUTINE$7, '$awaitDownCOROUTINE$7', classMeta, CoroutineImpl);
  setMetadataFor($mouseSelectionCOROUTINE$8, '$mouseSelectionCOROUTINE$8', classMeta, CoroutineImpl);
  setMetadataFor($touchSelectionCOROUTINE$9, '$touchSelectionCOROUTINE$9', classMeta, CoroutineImpl);
  setMetadataFor(SelectionHandleInfo, 'SelectionHandleInfo', classMeta);
  setMetadataFor(SelectionHandleAnchor, 'SelectionHandleAnchor', classMeta, Enum);
  setMetadataFor(SelectionLayoutBuilder, 'SelectionLayoutBuilder', classMeta);
  setMetadataFor(SelectionLayout, 'SelectionLayout', interfaceMeta);
  setMetadataFor(SelectableInfo, 'SelectableInfo', classMeta);
  setMetadataFor(CrossStatus, 'CrossStatus', classMeta, Enum);
  setMetadataFor(Companion_12, 'Companion', objectMeta);
  setMetadataFor(SingleSelectionLayout, 'SingleSelectionLayout', classMeta, VOID, [SelectionLayout]);
  setMetadataFor(MultiSelectionLayout, 'MultiSelectionLayout', classMeta, VOID, [SelectionLayout]);
  setMetadataFor(Direction, 'Direction', classMeta, Enum);
  setMetadataFor(Companion_13, 'Companion', objectMeta);
  setMetadataFor(SelectionRegistrar, 'SelectionRegistrar', interfaceMeta);
  setMetadataFor(TextSelectionColors, 'TextSelectionColors', classMeta);
  setMetadataFor(ComposableSingletons$BasicTextField2Kt, 'ComposableSingletons$BasicTextField2Kt', objectMeta);
  setMetadataFor(TextFieldDecorator, 'TextFieldDecorator', interfaceMeta);
  setMetadataFor(sam$androidx_compose_foundation_text2_TextFieldDecorator$0, 'sam$androidx_compose_foundation_text2_TextFieldDecorator$0', classMeta, VOID, [TextFieldDecorator]);
  setMetadataFor(NoOp, 'NoOp', classMeta, VOID, [Annotation]);
  setMetadataFor(MappedKeys, 'MappedKeys', objectMeta);
  setMetadataFor(DefaultLazyKey, 'DefaultLazyKey', classMeta);
  setMetadataFor(AtomicReference, 'AtomicReference', classMeta);
  setMetadataFor(ScrollbarStyle, 'ScrollbarStyle', classMeta);
  setMetadataFor(createMacosDefaultKeyMapping$1, VOID, classMeta, VOID, [KeyMapping]);
  //endregion
  function background(_this__u8e3s4, color, shape) {
    shape = shape === VOID ? get_RectangleShape() : shape;
    var alpha = 1.0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = background$lambda(color, shape);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp0_inspectorInfo = tmp;
    return _this__u8e3s4.then_g5qrxq_k$(new BackgroundElement(color, VOID, alpha, shape, tmp0_inspectorInfo));
  }
  function _get_color__iw9cfm($this) {
    return $this.color_1;
  }
  function _get_brush__jbhrft($this) {
    return $this.brush_1;
  }
  function _get_alpha__jvxknh($this) {
    return $this.alpha_1;
  }
  function _get_shape__bfkypc($this) {
    return $this.shape_1;
  }
  function _get_inspectorInfo__ojvtbg($this) {
    return $this.inspectorInfo_1;
  }
  function BackgroundElement(color, brush, alpha, shape, inspectorInfo) {
    color = color === VOID ? Companion_getInstance().get_Unspecified_j397pn_k$() : color;
    brush = brush === VOID ? null : brush;
    ModifierNodeElement.call(this);
    this.color_1 = color;
    this.brush_1 = brush;
    this.alpha_1 = alpha;
    this.shape_1 = shape;
    this.inspectorInfo_1 = inspectorInfo;
  }
  protoOf(BackgroundElement).create_md4cuc_k$ = function () {
    return new BackgroundNode(this.color_1, this.brush_1, this.alpha_1, this.shape_1);
  };
  protoOf(BackgroundElement).update_p0g7d2_k$ = function (node) {
    node.color_1 = this.color_1;
    node.brush_1 = this.brush_1;
    node.alpha_1 = this.alpha_1;
    node.shape_1 = this.shape_1;
  };
  protoOf(BackgroundElement).update_9wd57p_k$ = function (node) {
    return this.update_p0g7d2_k$(node instanceof BackgroundNode ? node : THROW_CCE());
  };
  protoOf(BackgroundElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    this.inspectorInfo_1(_this__u8e3s4);
  };
  protoOf(BackgroundElement).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.color_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.brush_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + getNumberHashCode(this.alpha_1) | 0;
    result = imul(31, result) + hashCode(this.shape_1) | 0;
    return result;
  };
  protoOf(BackgroundElement).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof BackgroundElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return ((equals(this.color_1, otherModifier.color_1) ? equals(this.brush_1, otherModifier.brush_1) : false) ? this.alpha_1 === otherModifier.alpha_1 : false) ? equals(this.shape_1, otherModifier.shape_1) : false;
  };
  function _set_lastSize__m2whs($this, _set____db54di) {
    $this.lastSize_1 = _set____db54di;
  }
  function _get_lastSize__dez7yk($this) {
    return $this.lastSize_1;
  }
  function _set_lastLayoutDirection__cwde6y($this, _set____db54di) {
    $this.lastLayoutDirection_1 = _set____db54di;
  }
  function _get_lastLayoutDirection__ecupe($this) {
    return $this.lastLayoutDirection_1;
  }
  function _set_lastOutline__uahd8n($this, _set____db54di) {
    $this.lastOutline_1 = _set____db54di;
  }
  function _get_lastOutline__36wr($this) {
    return $this.lastOutline_1;
  }
  function _set_lastShape__j1hhfq($this, _set____db54di) {
    $this.lastShape_1 = _set____db54di;
  }
  function _get_lastShape__a9cyyu($this) {
    return $this.lastShape_1;
  }
  function drawRect(_this__u8e3s4, $this) {
    if (!equals($this.color_1, Companion_getInstance().get_Unspecified_j397pn_k$())) {
      _this__u8e3s4.drawRect$default_5x4e2k_k$($this.color_1);
    }
    var tmp0_safe_receiver = $this.brush_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      _this__u8e3s4.drawRect$default_rrw2w5_k$(tmp0_safe_receiver, VOID, VOID, $this.alpha_1);
    }
  }
  function drawOutline_1(_this__u8e3s4, $this) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2 = _this__u8e3s4.get_size_cxx1ym_k$();
    var tmp_3 = $this.lastSize_1;
    if (equals(new Size(tmp_2), tmp_3 == null ? null : new Size(tmp_3))) {
      tmp_1 = _this__u8e3s4.get_layoutDirection_7e37v0_k$().equals($this.lastLayoutDirection_1);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals($this.lastShape_1, $this.shape_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = ensureNotNull($this.lastOutline_1);
    } else {
      tmp = $this.shape_1.createOutline_nnkieo_k$(_this__u8e3s4.get_size_cxx1ym_k$(), _this__u8e3s4.get_layoutDirection_7e37v0_k$(), _this__u8e3s4);
    }
    var outline = tmp;
    if (!equals($this.color_1, Companion_getInstance().get_Unspecified_j397pn_k$())) {
      drawOutline(_this__u8e3s4, outline, $this.color_1);
    }
    var tmp0_safe_receiver = $this.brush_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      drawOutline_0(_this__u8e3s4, outline, tmp0_safe_receiver, $this.alpha_1);
    }
    $this.lastOutline_1 = outline;
    $this.lastSize_1 = _this__u8e3s4.get_size_cxx1ym_k$();
    $this.lastLayoutDirection_1 = _this__u8e3s4.get_layoutDirection_7e37v0_k$();
    $this.lastShape_1 = $this.shape_1;
  }
  function BackgroundNode(color, brush, alpha, shape) {
    Node.call(this);
    this.color_1 = color;
    this.brush_1 = brush;
    this.alpha_1 = alpha;
    this.shape_1 = shape;
    this.lastSize_1 = null;
    this.lastLayoutDirection_1 = null;
    this.lastOutline_1 = null;
    this.lastShape_1 = null;
  }
  protoOf(BackgroundNode).set_color_m2amxp_k$ = function (_set____db54di) {
    this.color_1 = _set____db54di;
  };
  protoOf(BackgroundNode).get_color_lnp1vl_k$ = function () {
    return this.color_1;
  };
  protoOf(BackgroundNode).set_brush_innnd0_k$ = function (_set____db54di) {
    this.brush_1 = _set____db54di;
  };
  protoOf(BackgroundNode).get_brush_ipcjyp_k$ = function () {
    return this.brush_1;
  };
  protoOf(BackgroundNode).set_alpha_tvzcqh_k$ = function (_set____db54di) {
    this.alpha_1 = _set____db54di;
  };
  protoOf(BackgroundNode).get_alpha_iooth1_k$ = function () {
    return this.alpha_1;
  };
  protoOf(BackgroundNode).set_shape_ak8aoz_k$ = function (_set____db54di) {
    this.shape_1 = _set____db54di;
  };
  protoOf(BackgroundNode).get_shape_iyi9a0_k$ = function () {
    return this.shape_1;
  };
  protoOf(BackgroundNode).draw_2h95cs_k$ = function (_this__u8e3s4) {
    if (this.shape_1 === get_RectangleShape()) {
      drawRect(_this__u8e3s4, this);
    } else {
      drawOutline_1(_this__u8e3s4, this);
    }
    _this__u8e3s4.drawContent_m0wwjp_k$();
  };
  function background$lambda($color, $shape) {
    return function ($this$null) {
      $this$null.set_name_wkmnld_k$('background');
      $this$null.set_value_rjqr2d_k$(new Color($color));
      $this$null.get_properties_zhllqc_k$().set_vvveh5_k$('color', new Color($color));
      $this$null.get_properties_zhllqc_k$().set_vvveh5_k$('shape', $shape);
      return Unit_getInstance();
    };
  }
  function get_DefaultMarqueeIterations() {
    _init_properties_BasicMarquee_kt__84kax8();
    return DefaultMarqueeIterations;
  }
  var DefaultMarqueeIterations;
  function get_DefaultMarqueeDelayMillis() {
    _init_properties_BasicMarquee_kt__84kax8();
    return DefaultMarqueeDelayMillis;
  }
  var DefaultMarqueeDelayMillis;
  function get_DefaultMarqueeSpacing() {
    _init_properties_BasicMarquee_kt__84kax8();
    return DefaultMarqueeSpacing;
  }
  var DefaultMarqueeSpacing;
  function get_DefaultMarqueeVelocity() {
    _init_properties_BasicMarquee_kt__84kax8();
    return DefaultMarqueeVelocity;
  }
  var DefaultMarqueeVelocity;
  function sam$androidx_compose_foundation_MarqueeSpacing$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_foundation_MarqueeSpacing$0).calculateSpacing_83z2or_k$ = function (_this__u8e3s4, contentWidth, containerWidth) {
    return this.function_1(_this__u8e3s4, contentWidth, containerWidth);
  };
  function MarqueeSpacing$Companion$fractionOfContainer$lambda($fraction) {
    return function ($this$MarqueeSpacing, _anonymous_parameter_0__qggqh8, width) {
      // Inline function 'kotlin.math.roundToInt' call
      var this_0 = $fraction * width;
      return roundToInt(this_0);
    };
  }
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).fractionOfContainer_6ou7hs_k$ = function (fraction) {
    var tmp = MarqueeSpacing$Companion$fractionOfContainer$lambda(fraction);
    return new sam$androidx_compose_foundation_MarqueeSpacing$0(tmp);
  };
  var Companion_instance;
  function Companion_getInstance_30() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function MarqueeSpacing() {
  }
  var properties_initialized_BasicMarquee_kt_zfhsq2;
  function _init_properties_BasicMarquee_kt__84kax8() {
    if (!properties_initialized_BasicMarquee_kt_zfhsq2) {
      properties_initialized_BasicMarquee_kt_zfhsq2 = true;
      DefaultMarqueeIterations = 3;
      DefaultMarqueeDelayMillis = 1200;
      DefaultMarqueeSpacing = Companion_getInstance_30().fractionOfContainer_6ou7hs_k$(0.3333333333333333);
      // Inline function 'androidx.compose.ui.unit.dp' call
      DefaultMarqueeVelocity = _Dp___init__impl__ms3zkb(30);
    }
  }
  function border(_this__u8e3s4, border, shape) {
    shape = shape === VOID ? get_RectangleShape() : shape;
    return border_0(_this__u8e3s4, border.get_width_7o61hi_k$(), border.get_brush_ipcjyp_k$(), shape);
  }
  function border_0(_this__u8e3s4, width, brush, shape) {
    return _this__u8e3s4.then_g5qrxq_k$(new BorderModifierNodeElement(width, brush, shape));
  }
  function BorderModifierNodeElement(width, brush, shape) {
    ModifierNodeElement.call(this);
    this.width_1 = width;
    this.brush_1 = brush;
    this.shape_1 = shape;
  }
  protoOf(BorderModifierNodeElement).get_width_7o61hi_k$ = function () {
    return this.width_1;
  };
  protoOf(BorderModifierNodeElement).get_brush_ipcjyp_k$ = function () {
    return this.brush_1;
  };
  protoOf(BorderModifierNodeElement).get_shape_iyi9a0_k$ = function () {
    return this.shape_1;
  };
  protoOf(BorderModifierNodeElement).create_md4cuc_k$ = function () {
    return new BorderModifierNode(this.width_1, this.brush_1, this.shape_1);
  };
  protoOf(BorderModifierNodeElement).update_wq3swp_k$ = function (node) {
    node.set_width_jbfnku_k$(this.width_1);
    node.set_brush_hdgczn_k$(this.brush_1);
    node.set_shape_ak8aoz_k$(this.shape_1);
  };
  protoOf(BorderModifierNodeElement).update_9wd57p_k$ = function (node) {
    return this.update_wq3swp_k$(node instanceof BorderModifierNode ? node : THROW_CCE());
  };
  protoOf(BorderModifierNodeElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_wkmnld_k$('border');
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('width', new Dp(this.width_1));
    var tmp = this.brush_1;
    if (tmp instanceof SolidColor) {
      _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('color', new Color(this.brush_1.get_value_za03u9_k$()));
      _this__u8e3s4.set_value_rjqr2d_k$(new Color(this.brush_1.get_value_za03u9_k$()));
    } else {
      _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('brush', this.brush_1);
    }
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('shape', this.shape_1);
  };
  protoOf(BorderModifierNodeElement).component1_k79ve9_k$ = function () {
    return this.width_1;
  };
  protoOf(BorderModifierNodeElement).component2_7eebsb_k$ = function () {
    return this.brush_1;
  };
  protoOf(BorderModifierNodeElement).component3_7eebsa_k$ = function () {
    return this.shape_1;
  };
  protoOf(BorderModifierNodeElement).copy_6ki3p5_k$ = function (width, brush, shape) {
    return new BorderModifierNodeElement(width, brush, shape);
  };
  protoOf(BorderModifierNodeElement).copy$default_gvt6nr_k$ = function (width, brush, shape, $super) {
    width = width === VOID ? this.width_1 : width;
    brush = brush === VOID ? this.brush_1 : brush;
    shape = shape === VOID ? this.shape_1 : shape;
    return $super === VOID ? this.copy_6ki3p5_k$(width, brush, shape) : $super.copy_6ki3p5_k$.call(this, new Dp(width), brush, shape);
  };
  protoOf(BorderModifierNodeElement).toString = function () {
    return 'BorderModifierNodeElement(width=' + new Dp(this.width_1) + ', brush=' + this.brush_1 + ', shape=' + this.shape_1 + ')';
  };
  protoOf(BorderModifierNodeElement).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.width_1);
    result = imul(result, 31) + hashCode(this.brush_1) | 0;
    result = imul(result, 31) + hashCode(this.shape_1) | 0;
    return result;
  };
  protoOf(BorderModifierNodeElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BorderModifierNodeElement))
      return false;
    var tmp0_other_with_cast = other instanceof BorderModifierNodeElement ? other : THROW_CCE();
    if (!equals(this.width_1, tmp0_other_with_cast.width_1))
      return false;
    if (!equals(this.brush_1, tmp0_other_with_cast.brush_1))
      return false;
    if (!equals(this.shape_1, tmp0_other_with_cast.shape_1))
      return false;
    return true;
  };
  function _set_borderCache__ca1clr($this, _set____db54di) {
    $this.borderCache_1 = _set____db54di;
  }
  function _get_borderCache__sgoj1h($this) {
    return $this.borderCache_1;
  }
  function _get_drawWithCacheModifierNode__ha0wo0($this) {
    return $this.drawWithCacheModifierNode_1;
  }
  function drawGenericBorder(_this__u8e3s4, $this, brush, outline, fillArea, strokeWidth) {
    var tmp;
    if (fillArea) {
      tmp = _this__u8e3s4.onDrawWithContent_9a7tsh_k$(BorderModifierNode$drawGenericBorder$lambda(outline, brush));
    } else {
      var config;
      var colorFilter;
      if (brush instanceof SolidColor) {
        config = Companion_getInstance_0().get_Alpha8_8qn3sx_k$();
        colorFilter = Companion_getInstance_1().tint$default_jnxvki_k$(brush.get_value_za03u9_k$());
      } else {
        config = Companion_getInstance_0().get_Argb8888_epitdf_k$();
        colorFilter = null;
      }
      var pathBounds = outline.get_path_wos8ry_k$().getBounds_568lnv_k$();
      if ($this.borderCache_1 == null) {
        $this.borderCache_1 = new BorderCache();
      }
      // Inline function 'kotlin.apply' call
      var this_0 = ensureNotNull($this.borderCache_1).obtainPath_y7q9hy_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.BorderModifierNode.drawGenericBorder.<anonymous>' call
      this_0.reset_5u6xz3_k$();
      this_0.addRect_yfs97g_k$(pathBounds);
      this_0.op_fj0csx_k$(this_0, outline.get_path_wos8ry_k$(), Companion_getInstance_2().get_Difference_nnbib6_k$());
      var maskPath = this_0;
      var cacheImageBitmap;
      // Inline function 'kotlin.math.ceil' call
      var x = pathBounds.get_width_j0q4yl_k$();
      var tmp$ret$1 = Math.ceil(x);
      var tmp_0 = numberToInt(tmp$ret$1);
      // Inline function 'kotlin.math.ceil' call
      var x_0 = pathBounds.get_height_e7t92o_k$();
      var tmp$ret$2 = Math.ceil(x_0);
      var pathBoundsSize = IntSize(tmp_0, numberToInt(tmp$ret$2));
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache' call
      var this_1 = ensureNotNull($this.borderCache_1);
      var config_0 = config;
      var targetImageBitmap = this_1.imageBitmap_1;
      var targetCanvas = this_1.canvas_1;
      var tmp_1;
      var tmp0_safe_receiver = targetImageBitmap;
      var tmp_2 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_config_d6pt2v_k$();
      if (equals(tmp_2 == null ? null : new ImageBitmapConfig(tmp_2), new ImageBitmapConfig(Companion_getInstance_0().get_Argb8888_epitdf_k$()))) {
        tmp_1 = true;
      } else {
        var tmp1_safe_receiver = targetImageBitmap;
        var tmp_3 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_config_d6pt2v_k$();
        tmp_1 = equals(new ImageBitmapConfig(config_0), tmp_3 == null ? null : new ImageBitmapConfig(tmp_3));
      }
      var compatibleConfig = tmp_1;
      if ((((targetImageBitmap == null ? true : targetCanvas == null) ? true : _Size___get_width__impl__58y75t(_this__u8e3s4.get_size_cxx1ym_k$()) > targetImageBitmap.get_width_j0q4yl_k$()) ? true : _Size___get_height__impl__a04p02(_this__u8e3s4.get_size_cxx1ym_k$()) > targetImageBitmap.get_height_e7t92o_k$()) ? true : !compatibleConfig) {
        // Inline function 'kotlin.also' call
        var this_2 = ImageBitmap(_IntSize___get_width__impl__d9yl4o(pathBoundsSize), _IntSize___get_height__impl__prv63b(pathBoundsSize), config_0);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache.<anonymous>' call
        this_1.imageBitmap_1 = this_2;
        targetImageBitmap = this_2;
        // Inline function 'kotlin.also' call
        var this_3 = Canvas(targetImageBitmap);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache.<anonymous>' call
        this_1.canvas_1 = this_3;
        targetCanvas = this_3;
      }
      var tmp2_elvis_lhs = this_1.canvasDrawScope_1;
      var tmp_4;
      if (tmp2_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_4 = new CanvasDrawScope();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache.<anonymous>' call
        this_1.canvasDrawScope_1 = this_4;
        tmp_4 = this_4;
      } else {
        tmp_4 = tmp2_elvis_lhs;
      }
      var targetDrawScope = tmp_4;
      var drawSize = toSize(pathBoundsSize);
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw' call
      var layoutDirection = _this__u8e3s4.get_layoutDirection_7e37v0_k$();
      var canvas = targetCanvas;
      var tmp0_container = targetDrawScope.get_drawParams_ncgfpp_k$();
      var prevDensity = tmp0_container.component1_7eebsc_k$();
      var prevLayoutDirection = tmp0_container.component2_7eebsb_k$();
      var prevCanvas = tmp0_container.component3_7eebsa_k$();
      var prevSize = tmp0_container.component4_67q0p1_k$();
      // Inline function 'kotlin.apply' call
      var this_5 = targetDrawScope.get_drawParams_ncgfpp_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw.<anonymous>' call
      this_5.set_density_3p0aj9_k$(_this__u8e3s4);
      this_5.set_layoutDirection_vthtz8_k$(layoutDirection);
      this_5.set_canvas_1yi0mf_k$(canvas);
      this_5.set_size_6a0e6q_k$(drawSize);
      canvas.save_fbe7h_k$();
      // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache.<anonymous>' call
      targetDrawScope.drawRect$default_5x4e2k_k$(Companion_getInstance().get_Black_t4k9fh_k$(), VOID, drawSize, VOID, VOID, VOID, Companion_getInstance_3().get_Clear_ts5s9y_k$());
      // Inline function 'androidx.compose.foundation.BorderModifierNode.drawGenericBorder.<anonymous>.<anonymous>' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.translate' call
      var left = -pathBounds.get_left_woprgw_k$();
      var top = -pathBounds.get_top_18ivbo_k$();
      targetDrawScope.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(left, top);
      // Inline function 'androidx.compose.foundation.BorderModifierNode.drawGenericBorder.<anonymous>.<anonymous>.<anonymous>' call
      targetDrawScope.drawPath$default_6abh83_k$(outline.get_path_wos8ry_k$(), brush, VOID, new Stroke(strokeWidth * 2));
      // Inline function 'androidx.compose.ui.graphics.drawscope.scale' call
      var scaleX = (_Size___get_width__impl__58y75t(targetDrawScope.get_size_cxx1ym_k$()) + 1) / _Size___get_width__impl__58y75t(targetDrawScope.get_size_cxx1ym_k$());
      var scaleY = (_Size___get_height__impl__a04p02(targetDrawScope.get_size_cxx1ym_k$()) + 1) / _Size___get_height__impl__a04p02(targetDrawScope.get_size_cxx1ym_k$());
      var pivot = targetDrawScope.get_center_dcexec_k$();
      // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = targetDrawScope.get_drawContext_ffwztu_k$();
      var previousSize = $this$with.get_size_cxx1ym_k$();
      $this$with.get_canvas_bshgm9_k$().save_fbe7h_k$();
      // Inline function 'androidx.compose.ui.graphics.drawscope.scale.<anonymous>' call
      $this$with.get_transform_px941v_k$().scale_rbtyk0_k$(scaleX, scaleY, pivot);
      // Inline function 'androidx.compose.foundation.BorderModifierNode.drawGenericBorder.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      targetDrawScope.drawPath$default_6abh83_k$(maskPath, brush, VOID, VOID, VOID, Companion_getInstance_3().get_Clear_ts5s9y_k$());
      $this$with.get_canvas_bshgm9_k$().restore_a1ykhu_k$();
      $this$with.set_size_6a0e6q_k$(previousSize);
      targetDrawScope.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(-left, -top);
      canvas.restore_a1ykhu_k$();
      // Inline function 'kotlin.apply' call
      var this_6 = targetDrawScope.get_drawParams_ncgfpp_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw.<anonymous>' call
      this_6.set_density_3p0aj9_k$(prevDensity);
      this_6.set_layoutDirection_vthtz8_k$(prevLayoutDirection);
      this_6.set_canvas_1yi0mf_k$(prevCanvas);
      this_6.set_size_6a0e6q_k$(prevSize);
      targetImageBitmap.prepareToDraw_sb34p6_k$();
      cacheImageBitmap = targetImageBitmap;
      tmp = _this__u8e3s4.onDrawWithContent_9a7tsh_k$(BorderModifierNode$drawGenericBorder$lambda_0(pathBounds, cacheImageBitmap, pathBoundsSize, colorFilter));
    }
    return tmp;
  }
  function drawRoundRectBorder(_this__u8e3s4, $this, brush, outline, topLeft, borderSize, fillArea, strokeWidth) {
    var tmp;
    if (get_isSimple(outline.get_roundRect_8fhall_k$())) {
      var cornerRadius = outline.get_roundRect_8fhall_k$().get_topLeftCornerRadius_91hulg_k$();
      var halfStroke = strokeWidth / 2;
      var borderStroke = new Stroke(strokeWidth);
      tmp = _this__u8e3s4.onDrawWithContent_9a7tsh_k$(BorderModifierNode$drawRoundRectBorder$lambda(fillArea, brush, cornerRadius, halfStroke, strokeWidth, topLeft, borderSize, borderStroke));
    } else {
      if ($this.borderCache_1 == null) {
        $this.borderCache_1 = new BorderCache();
      }
      var path = ensureNotNull($this.borderCache_1).obtainPath_y7q9hy_k$();
      var roundedRectPath = createRoundRectPath(path, outline.get_roundRect_8fhall_k$(), strokeWidth, fillArea);
      tmp = _this__u8e3s4.onDrawWithContent_9a7tsh_k$(BorderModifierNode$drawRoundRectBorder$lambda_0(roundedRectPath, brush));
    }
    return tmp;
  }
  function BorderModifierNode$drawWithCacheModifierNode$lambda(this$0) {
    return function ($this$CacheDrawModifierNode) {
      var hasValidBorderParams = $this$CacheDrawModifierNode.toPx_mycba2_k$(this$0.width_1) >= 0.0 ? _Size___get_minDimension__impl__4iso0r($this$CacheDrawModifierNode.get_size_cxx1ym_k$()) > 0.0 : false;
      var tmp;
      if (!hasValidBorderParams) {
        tmp = drawContentWithoutBorder($this$CacheDrawModifierNode);
      } else {
        // Inline function 'kotlin.math.min' call
        var tmp_0;
        if (equals(this$0.width_1, Companion_getInstance_4().get_Hairline_cy72lg_k$())) {
          tmp_0 = 1.0;
        } else {
          // Inline function 'kotlin.math.ceil' call
          var x = $this$CacheDrawModifierNode.toPx_mycba2_k$(this$0.width_1);
          tmp_0 = Math.ceil(x);
        }
        var a = tmp_0;
        // Inline function 'kotlin.math.ceil' call
        var x_0 = _Size___get_minDimension__impl__4iso0r($this$CacheDrawModifierNode.get_size_cxx1ym_k$()) / 2;
        var b = Math.ceil(x_0);
        var strokeWidthPx = Math.min(a, b);
        var halfStroke = strokeWidthPx / 2;
        var topLeft = Offset(halfStroke, halfStroke);
        var borderSize = Size_0(_Size___get_width__impl__58y75t($this$CacheDrawModifierNode.get_size_cxx1ym_k$()) - strokeWidthPx, _Size___get_height__impl__a04p02($this$CacheDrawModifierNode.get_size_cxx1ym_k$()) - strokeWidthPx);
        var fillArea = strokeWidthPx * 2 > _Size___get_minDimension__impl__4iso0r($this$CacheDrawModifierNode.get_size_cxx1ym_k$());
        var outline = this$0.shape_1.createOutline_nnkieo_k$($this$CacheDrawModifierNode.get_size_cxx1ym_k$(), $this$CacheDrawModifierNode.get_layoutDirection_7e37v0_k$(), $this$CacheDrawModifierNode);
        var tmp_1;
        if (outline instanceof Generic) {
          tmp_1 = drawGenericBorder($this$CacheDrawModifierNode, this$0, this$0.brush_1, outline, fillArea, strokeWidthPx);
        } else {
          if (outline instanceof Rounded) {
            tmp_1 = drawRoundRectBorder($this$CacheDrawModifierNode, this$0, this$0.brush_1, outline, topLeft, borderSize, fillArea, strokeWidthPx);
          } else {
            if (outline instanceof Rectangle) {
              tmp_1 = drawRectBorder($this$CacheDrawModifierNode, this$0.brush_1, topLeft, borderSize, fillArea, strokeWidthPx);
            } else {
              noWhenBranchMatchedException();
            }
          }
        }
        tmp = tmp_1;
      }
      return tmp;
    };
  }
  function BorderModifierNode$drawGenericBorder$lambda($outline, $brush) {
    return function ($this$onDrawWithContent) {
      $this$onDrawWithContent.drawContent_m0wwjp_k$();
      $this$onDrawWithContent.drawPath$default_6abh83_k$($outline.get_path_wos8ry_k$(), $brush);
      return Unit_getInstance();
    };
  }
  function BorderModifierNode$drawGenericBorder$lambda_0($pathBounds, $cacheImageBitmap, $pathBoundsSize, $colorFilter) {
    return function ($this$onDrawWithContent) {
      $this$onDrawWithContent.drawContent_m0wwjp_k$();
      var left = $pathBounds.get_left_woprgw_k$();
      var top = $pathBounds.get_top_18ivbo_k$();
      $this$onDrawWithContent.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(left, top);
      // Inline function 'androidx.compose.foundation.BorderModifierNode.drawGenericBorder.<anonymous>.<anonymous>' call
      $this$onDrawWithContent.drawImage$default_qql6c2_k$($cacheImageBitmap, VOID, $pathBoundsSize, VOID, VOID, VOID, VOID, $colorFilter);
      $this$onDrawWithContent.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(-left, -top);
      return Unit_getInstance();
    };
  }
  function BorderModifierNode$drawRoundRectBorder$lambda($fillArea, $brush, $cornerRadius, $halfStroke, $strokeWidth, $topLeft, $borderSize, $borderStroke) {
    return function ($this$onDrawWithContent) {
      $this$onDrawWithContent.drawContent_m0wwjp_k$();
      var tmp;
      if ($fillArea) {
        $this$onDrawWithContent.drawRoundRect$default_mredpw_k$($brush, VOID, VOID, $cornerRadius);
        tmp = Unit_getInstance();
      } else if (_CornerRadius___get_x__impl__1594cn($cornerRadius) < $halfStroke) {
        // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect' call
        var left = $strokeWidth;
        var top = $strokeWidth;
        var right = _Size___get_width__impl__58y75t($this$onDrawWithContent.get_size_cxx1ym_k$()) - $strokeWidth;
        var bottom = _Size___get_height__impl__a04p02($this$onDrawWithContent.get_size_cxx1ym_k$()) - $strokeWidth;
        var clipOp = Companion_getInstance_5().get_Difference_lo2jbz_k$();
        // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = $this$onDrawWithContent.get_drawContext_ffwztu_k$();
        var previousSize = $this$with.get_size_cxx1ym_k$();
        $this$with.get_canvas_bshgm9_k$().save_fbe7h_k$();
        // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect.<anonymous>' call
        $this$with.get_transform_px941v_k$().clipRect_3spswv_k$(left, top, right, bottom, clipOp);
        // Inline function 'androidx.compose.foundation.BorderModifierNode.drawRoundRectBorder.<anonymous>.<anonymous>' call
        $this$onDrawWithContent.drawRoundRect$default_mredpw_k$($brush, VOID, VOID, $cornerRadius);
        $this$with.get_canvas_bshgm9_k$().restore_a1ykhu_k$();
        $this$with.set_size_6a0e6q_k$(previousSize);
        tmp = Unit_getInstance();
      } else {
        $this$onDrawWithContent.drawRoundRect$default_mredpw_k$($brush, $topLeft, $borderSize, shrink($cornerRadius, $halfStroke), VOID, $borderStroke);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function BorderModifierNode$drawRoundRectBorder$lambda_0($roundedRectPath, $brush) {
    return function ($this$onDrawWithContent) {
      $this$onDrawWithContent.drawContent_m0wwjp_k$();
      $this$onDrawWithContent.drawPath$default_6abh83_k$($roundedRectPath, $brush);
      return Unit_getInstance();
    };
  }
  function BorderModifierNode(widthParameter, brushParameter, shapeParameter) {
    DelegatingNode.call(this);
    this.borderCache_1 = null;
    this.width_1 = widthParameter;
    this.brush_1 = brushParameter;
    this.shape_1 = shapeParameter;
    var tmp = this;
    tmp.drawWithCacheModifierNode_1 = this.delegate_x7rm2e_k$(CacheDrawModifierNode(BorderModifierNode$drawWithCacheModifierNode$lambda(this)));
  }
  protoOf(BorderModifierNode).set_width_jbfnku_k$ = function (value) {
    if (!equals(this.width_1, value)) {
      this.width_1 = value;
      this.drawWithCacheModifierNode_1.invalidateDrawCache_6frutv_k$();
    }
  };
  protoOf(BorderModifierNode).get_width_7o61hi_k$ = function () {
    return this.width_1;
  };
  protoOf(BorderModifierNode).set_brush_hdgczn_k$ = function (value) {
    if (!equals(this.brush_1, value)) {
      this.brush_1 = value;
      this.drawWithCacheModifierNode_1.invalidateDrawCache_6frutv_k$();
    }
  };
  protoOf(BorderModifierNode).get_brush_ipcjyp_k$ = function () {
    return this.brush_1;
  };
  protoOf(BorderModifierNode).set_shape_ak8aoz_k$ = function (value) {
    if (!equals(this.shape_1, value)) {
      this.shape_1 = value;
      this.drawWithCacheModifierNode_1.invalidateDrawCache_6frutv_k$();
    }
  };
  protoOf(BorderModifierNode).get_shape_iyi9a0_k$ = function () {
    return this.shape_1;
  };
  function _set_imageBitmap__59o72z($this, _set____db54di) {
    $this.imageBitmap_1 = _set____db54di;
  }
  function _get_imageBitmap__zh1ok9($this) {
    return $this.imageBitmap_1;
  }
  function _set_canvas__plaszl($this, _set____db54di) {
    $this.canvas_1 = _set____db54di;
  }
  function _get_canvas__o4k8ct($this) {
    return $this.canvas_1;
  }
  function _set_canvasDrawScope__6hen3n($this, _set____db54di) {
    $this.canvasDrawScope_1 = _set____db54di;
  }
  function _get_canvasDrawScope__3mbkex($this) {
    return $this.canvasDrawScope_1;
  }
  function _set_borderPath__3zk3ay($this, _set____db54di) {
    $this.borderPath_1 = _set____db54di;
  }
  function _get_borderPath__j1sog6($this) {
    return $this.borderPath_1;
  }
  function component1($this) {
    return $this.imageBitmap_1;
  }
  function component2($this) {
    return $this.canvas_1;
  }
  function component3($this) {
    return $this.canvasDrawScope_1;
  }
  function component4($this) {
    return $this.borderPath_1;
  }
  function BorderCache(imageBitmap, canvas, canvasDrawScope, borderPath) {
    imageBitmap = imageBitmap === VOID ? null : imageBitmap;
    canvas = canvas === VOID ? null : canvas;
    canvasDrawScope = canvasDrawScope === VOID ? null : canvasDrawScope;
    borderPath = borderPath === VOID ? null : borderPath;
    this.imageBitmap_1 = imageBitmap;
    this.canvas_1 = canvas;
    this.canvasDrawScope_1 = canvasDrawScope;
    this.borderPath_1 = borderPath;
  }
  protoOf(BorderCache).drawBorderCache_n1h2qw_k$ = function (_this__u8e3s4, borderSize, config, block) {
    var targetImageBitmap = this.imageBitmap_1;
    var targetCanvas = this.canvas_1;
    var tmp;
    var tmp0_safe_receiver = targetImageBitmap;
    var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_config_d6pt2v_k$();
    if (equals(tmp_0 == null ? null : new ImageBitmapConfig(tmp_0), new ImageBitmapConfig(Companion_getInstance_0().get_Argb8888_epitdf_k$()))) {
      tmp = true;
    } else {
      var tmp1_safe_receiver = targetImageBitmap;
      var tmp_1 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_config_d6pt2v_k$();
      tmp = equals(new ImageBitmapConfig(config), tmp_1 == null ? null : new ImageBitmapConfig(tmp_1));
    }
    var compatibleConfig = tmp;
    if ((((targetImageBitmap == null ? true : targetCanvas == null) ? true : _Size___get_width__impl__58y75t(_this__u8e3s4.get_size_cxx1ym_k$()) > targetImageBitmap.get_width_j0q4yl_k$()) ? true : _Size___get_height__impl__a04p02(_this__u8e3s4.get_size_cxx1ym_k$()) > targetImageBitmap.get_height_e7t92o_k$()) ? true : !compatibleConfig) {
      // Inline function 'kotlin.also' call
      var this_0 = ImageBitmap(_IntSize___get_width__impl__d9yl4o(borderSize), _IntSize___get_height__impl__prv63b(borderSize), config);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache.<anonymous>' call
      this.imageBitmap_1 = this_0;
      targetImageBitmap = this_0;
      // Inline function 'kotlin.also' call
      var this_1 = Canvas(targetImageBitmap);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache.<anonymous>' call
      this.canvas_1 = this_1;
      targetCanvas = this_1;
    }
    var tmp2_elvis_lhs = this.canvasDrawScope_1;
    var tmp_2;
    if (tmp2_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_2 = new CanvasDrawScope();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache.<anonymous>' call
      this.canvasDrawScope_1 = this_2;
      tmp_2 = this_2;
    } else {
      tmp_2 = tmp2_elvis_lhs;
    }
    var targetDrawScope = tmp_2;
    var drawSize = toSize(borderSize);
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw' call
    var layoutDirection = _this__u8e3s4.get_layoutDirection_7e37v0_k$();
    var canvas = targetCanvas;
    var tmp0_container = targetDrawScope.get_drawParams_ncgfpp_k$();
    var prevDensity = tmp0_container.component1_7eebsc_k$();
    var prevLayoutDirection = tmp0_container.component2_7eebsb_k$();
    var prevCanvas = tmp0_container.component3_7eebsa_k$();
    var prevSize = tmp0_container.component4_67q0p1_k$();
    // Inline function 'kotlin.apply' call
    var this_3 = targetDrawScope.get_drawParams_ncgfpp_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw.<anonymous>' call
    this_3.set_density_3p0aj9_k$(_this__u8e3s4);
    this_3.set_layoutDirection_vthtz8_k$(layoutDirection);
    this_3.set_canvas_1yi0mf_k$(canvas);
    this_3.set_size_6a0e6q_k$(drawSize);
    canvas.save_fbe7h_k$();
    // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache.<anonymous>' call
    targetDrawScope.drawRect$default_5x4e2k_k$(Companion_getInstance().get_Black_t4k9fh_k$(), VOID, drawSize, VOID, VOID, VOID, Companion_getInstance_3().get_Clear_ts5s9y_k$());
    block(targetDrawScope);
    canvas.restore_a1ykhu_k$();
    // Inline function 'kotlin.apply' call
    var this_4 = targetDrawScope.get_drawParams_ncgfpp_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw.<anonymous>' call
    this_4.set_density_3p0aj9_k$(prevDensity);
    this_4.set_layoutDirection_vthtz8_k$(prevLayoutDirection);
    this_4.set_canvas_1yi0mf_k$(prevCanvas);
    this_4.set_size_6a0e6q_k$(prevSize);
    targetImageBitmap.prepareToDraw_sb34p6_k$();
    return targetImageBitmap;
  };
  protoOf(BorderCache).obtainPath_y7q9hy_k$ = function () {
    var tmp0_elvis_lhs = this.borderPath_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = Path();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.BorderCache.obtainPath.<anonymous>' call
      this.borderPath_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(BorderCache).copy_6uzguh_k$ = function (imageBitmap, canvas, canvasDrawScope, borderPath) {
    return new BorderCache(imageBitmap, canvas, canvasDrawScope, borderPath);
  };
  protoOf(BorderCache).copy$default_dv8kvw_k$ = function (imageBitmap, canvas, canvasDrawScope, borderPath, $super) {
    imageBitmap = imageBitmap === VOID ? this.imageBitmap_1 : imageBitmap;
    canvas = canvas === VOID ? this.canvas_1 : canvas;
    canvasDrawScope = canvasDrawScope === VOID ? this.canvasDrawScope_1 : canvasDrawScope;
    borderPath = borderPath === VOID ? this.borderPath_1 : borderPath;
    return $super === VOID ? this.copy_6uzguh_k$(imageBitmap, canvas, canvasDrawScope, borderPath) : $super.copy_6uzguh_k$.call(this, imageBitmap, canvas, canvasDrawScope, borderPath);
  };
  protoOf(BorderCache).toString = function () {
    return 'BorderCache(imageBitmap=' + this.imageBitmap_1 + ', canvas=' + this.canvas_1 + ', canvasDrawScope=' + this.canvasDrawScope_1 + ', borderPath=' + this.borderPath_1 + ')';
  };
  protoOf(BorderCache).hashCode = function () {
    var result = this.imageBitmap_1 == null ? 0 : hashCode(this.imageBitmap_1);
    result = imul(result, 31) + (this.canvas_1 == null ? 0 : hashCode(this.canvas_1)) | 0;
    result = imul(result, 31) + (this.canvasDrawScope_1 == null ? 0 : hashCode(this.canvasDrawScope_1)) | 0;
    result = imul(result, 31) + (this.borderPath_1 == null ? 0 : hashCode(this.borderPath_1)) | 0;
    return result;
  };
  protoOf(BorderCache).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BorderCache))
      return false;
    var tmp0_other_with_cast = other instanceof BorderCache ? other : THROW_CCE();
    if (!equals(this.imageBitmap_1, tmp0_other_with_cast.imageBitmap_1))
      return false;
    if (!equals(this.canvas_1, tmp0_other_with_cast.canvas_1))
      return false;
    if (!equals(this.canvasDrawScope_1, tmp0_other_with_cast.canvasDrawScope_1))
      return false;
    if (!equals(this.borderPath_1, tmp0_other_with_cast.borderPath_1))
      return false;
    return true;
  };
  function drawContentWithoutBorder(_this__u8e3s4) {
    return _this__u8e3s4.onDrawWithContent_9a7tsh_k$(drawContentWithoutBorder$lambda);
  }
  function drawRectBorder(_this__u8e3s4, brush, topLeft, borderSize, fillArea, strokeWidthPx) {
    var rectTopLeft = fillArea ? Companion_getInstance_6().get_Zero_k6n73t_k$() : topLeft;
    var size = fillArea ? _this__u8e3s4.get_size_cxx1ym_k$() : borderSize;
    var style = fillArea ? Fill_getInstance() : new Stroke(strokeWidthPx);
    return _this__u8e3s4.onDrawWithContent_9a7tsh_k$(drawRectBorder$lambda(brush, rectTopLeft, size, style));
  }
  function shrink(_this__u8e3s4, value) {
    // Inline function 'kotlin.math.max' call
    var b = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4) - value;
    var tmp = Math.max(0.0, b);
    // Inline function 'kotlin.math.max' call
    var b_0 = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4) - value;
    var tmp$ret$1 = Math.max(0.0, b_0);
    return CornerRadius(tmp, tmp$ret$1);
  }
  function createRoundRectPath(targetPath, roundedRect, strokeWidth, fillArea) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.createRoundRectPath.<anonymous>' call
    targetPath.reset_5u6xz3_k$();
    targetPath.addRoundRect_w1epq0_k$(roundedRect);
    if (!fillArea) {
      // Inline function 'kotlin.apply' call
      var this_0 = Path();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.createRoundRectPath.<anonymous>.<anonymous>' call
      this_0.addRoundRect_w1epq0_k$(createInsetRoundedRect(strokeWidth, roundedRect));
      var insetPath = this_0;
      targetPath.op_fj0csx_k$(targetPath, insetPath, Companion_getInstance_2().get_Difference_nnbib6_k$());
    }
    return targetPath;
  }
  function createInsetRoundedRect(widthPx, roundedRect) {
    var tmp0_right = roundedRect.get_width_j0q4yl_k$() - widthPx;
    var tmp1_bottom = roundedRect.get_height_e7t92o_k$() - widthPx;
    var tmp2_topLeftCornerRadius = shrink(roundedRect.get_topLeftCornerRadius_91hulg_k$(), widthPx);
    var tmp3_topRightCornerRadius = shrink(roundedRect.get_topRightCornerRadius_kxqun3_k$(), widthPx);
    var tmp4_bottomLeftCornerRadius = shrink(roundedRect.get_bottomLeftCornerRadius_9r65ws_k$(), widthPx);
    var tmp5_bottomRightCornerRadius = shrink(roundedRect.get_bottomRightCornerRadius_166w49_k$(), widthPx);
    return new RoundRect(widthPx, widthPx, tmp0_right, tmp1_bottom, tmp2_topLeftCornerRadius, tmp3_topRightCornerRadius, tmp5_bottomRightCornerRadius, tmp4_bottomLeftCornerRadius);
  }
  function drawContentWithoutBorder$lambda($this$onDrawWithContent) {
    $this$onDrawWithContent.drawContent_m0wwjp_k$();
    return Unit_getInstance();
  }
  function drawRectBorder$lambda($brush, $rectTopLeft, $size, $style) {
    return function ($this$onDrawWithContent) {
      $this$onDrawWithContent.drawContent_m0wwjp_k$();
      $this$onDrawWithContent.drawRect$default_rrw2w5_k$($brush, $rectTopLeft, $size, VOID, $style);
      return Unit_getInstance();
    };
  }
  function BorderStroke(width, brush) {
    this.width_1 = width;
    this.brush_1 = brush;
  }
  protoOf(BorderStroke).get_width_7o61hi_k$ = function () {
    return this.width_1;
  };
  protoOf(BorderStroke).get_brush_ipcjyp_k$ = function () {
    return this.brush_1;
  };
  protoOf(BorderStroke).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BorderStroke))
      return false;
    if (!equals(this.width_1, other.width_1))
      return false;
    if (!equals(this.brush_1, other.brush_1))
      return false;
    return true;
  };
  protoOf(BorderStroke).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.width_1);
    result = imul(31, result) + hashCode(this.brush_1) | 0;
    return result;
  };
  protoOf(BorderStroke).toString = function () {
    return 'BorderStroke(width=' + new Dp(this.width_1) + ', brush=' + this.brush_1 + ')';
  };
  protoOf(BorderStroke).copy_cj936g_k$ = function (width, brush) {
    return new BorderStroke(width, brush);
  };
  protoOf(BorderStroke).copy$default_u7xz4f_k$ = function (width, brush, $super) {
    width = width === VOID ? this.width_1 : width;
    brush = brush === VOID ? this.brush_1 : brush;
    return $super === VOID ? this.copy_cj936g_k$(width, brush) : $super.copy_cj936g_k$.call(this, new Dp(width), brush);
  };
  function get_MaxSupportedElevation() {
    _init_properties_ClipScrollableContainer_kt__60yb60();
    return MaxSupportedElevation;
  }
  var MaxSupportedElevation;
  function get_HorizontalScrollableClipModifier() {
    _init_properties_ClipScrollableContainer_kt__60yb60();
    return HorizontalScrollableClipModifier;
  }
  var HorizontalScrollableClipModifier;
  function get_VerticalScrollableClipModifier() {
    _init_properties_ClipScrollableContainer_kt__60yb60();
    return VerticalScrollableClipModifier;
  }
  var VerticalScrollableClipModifier;
  function HorizontalScrollableClipModifier$1() {
  }
  protoOf(HorizontalScrollableClipModifier$1).createOutline_nnkieo_k$ = function (size, layoutDirection, density) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.<no name provided>.createOutline.<anonymous>' call
    var inflateSize = density.roundToPx_yb7vg8_k$(get_MaxSupportedElevation());
    return new Rectangle(new Rect(0.0, -inflateSize, _Size___get_width__impl__58y75t(size), _Size___get_height__impl__a04p02(size) + inflateSize));
  };
  function VerticalScrollableClipModifier$1() {
  }
  protoOf(VerticalScrollableClipModifier$1).createOutline_nnkieo_k$ = function (size, layoutDirection, density) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.<no name provided>.createOutline.<anonymous>' call
    var inflateSize = density.roundToPx_yb7vg8_k$(get_MaxSupportedElevation());
    return new Rectangle(new Rect(-inflateSize, 0.0, _Size___get_width__impl__58y75t(size) + inflateSize, _Size___get_height__impl__a04p02(size)));
  };
  var properties_initialized_ClipScrollableContainer_kt_l2hne;
  function _init_properties_ClipScrollableContainer_kt__60yb60() {
    if (!properties_initialized_ClipScrollableContainer_kt_l2hne) {
      properties_initialized_ClipScrollableContainer_kt_l2hne = true;
      // Inline function 'androidx.compose.ui.unit.dp' call
      MaxSupportedElevation = _Dp___init__impl__ms3zkb(30);
      var tmp = Companion_getInstance_7();
      HorizontalScrollableClipModifier = clip(tmp, new HorizontalScrollableClipModifier$1());
      var tmp_0 = Companion_getInstance_7();
      VerticalScrollableClipModifier = clip(tmp_0, new VerticalScrollableClipModifier$1());
    }
  }
  function isSystemInDarkTheme($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1100791446, 'C(isSystemInDarkTheme)40@1721L22:DarkTheme.kt#71ulvw');
    if (isTraceInProgress()) {
      traceEventStart(-1100791446, $changed, -1, 'androidx.compose.foundation.isSystemInDarkTheme (DarkTheme.kt:40)');
    }
    var tmp0 = _isSystemInDarkTheme($composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function ExperimentalFoundationApi() {
  }
  protoOf(ExperimentalFoundationApi).equals = function (other) {
    if (!(other instanceof ExperimentalFoundationApi))
      return false;
    other instanceof ExperimentalFoundationApi || THROW_CCE();
    return true;
  };
  protoOf(ExperimentalFoundationApi).hashCode = function () {
    return 0;
  };
  protoOf(ExperimentalFoundationApi).toString = function () {
    return '@androidx.compose.foundation.ExperimentalFoundationApi()';
  };
  function get_focusGroupInspectorInfo() {
    _init_properties_Focusable_kt__2q5fls();
    return focusGroupInspectorInfo;
  }
  var focusGroupInspectorInfo;
  function get_FocusableInNonTouchModeElement() {
    _init_properties_Focusable_kt__2q5fls();
    return FocusableInNonTouchModeElement;
  }
  var FocusableInNonTouchModeElement;
  function _get_inputModeManager__dmvjvv($this) {
    return currentValueOf($this, get_LocalInputModeManager());
  }
  function FocusableInNonTouchMode() {
    Node.call(this);
  }
  protoOf(FocusableInNonTouchMode).applyFocusProperties_di1bpj_k$ = function (focusProperties) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.FocusableInNonTouchMode.applyFocusProperties.<anonymous>' call
    focusProperties.set_canFocus_d7yxf4_k$(!(_get_inputModeManager__dmvjvv(this).get_inputMode_6j1lsi_k$() === Companion_getInstance_8().get_Touch_mjalr8_k$()));
  };
  function focusGroupInspectorInfo$lambda($this$null) {
    _init_properties_Focusable_kt__2q5fls();
    // Inline function 'androidx.compose.foundation.focusGroupInspectorInfo.<anonymous>' call
    $this$null.set_name_wkmnld_k$('focusGroup');
    return Unit_getInstance();
  }
  function _get_arbitraryHashCode__1p68u4($this) {
    return $this.arbitraryHashCode_1;
  }
  function FocusableInNonTouchModeElement$1() {
    ModifierNodeElement.call(this);
    this.arbitraryHashCode_1 = identityHashCode(this);
  }
  protoOf(FocusableInNonTouchModeElement$1).create_md4cuc_k$ = function () {
    return new FocusableInNonTouchMode();
  };
  protoOf(FocusableInNonTouchModeElement$1).update_r6k2rg_k$ = function (node) {
  };
  protoOf(FocusableInNonTouchModeElement$1).update_9wd57p_k$ = function (node) {
    return this.update_r6k2rg_k$(node instanceof FocusableInNonTouchMode ? node : THROW_CCE());
  };
  protoOf(FocusableInNonTouchModeElement$1).hashCode = function () {
    return this.arbitraryHashCode_1;
  };
  protoOf(FocusableInNonTouchModeElement$1).equals = function (other) {
    return this === other;
  };
  protoOf(FocusableInNonTouchModeElement$1).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_wkmnld_k$('focusableInNonTouchMode');
  };
  var properties_initialized_Focusable_kt_k4lele;
  function _init_properties_Focusable_kt__2q5fls() {
    if (!properties_initialized_Focusable_kt_k4lele) {
      properties_initialized_Focusable_kt_k4lele = true;
      // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
      var tmp;
      if (get_isDebugInspectorInfoEnabled()) {
        tmp = focusGroupInspectorInfo$lambda;
      } else {
        tmp = get_NoInspectorInfo();
      }
      var tmp$ret$0 = tmp;
      focusGroupInspectorInfo = new InspectableModifier(tmp$ret$0);
      FocusableInNonTouchModeElement = new FocusableInNonTouchModeElement$1();
    }
  }
  function get_ModifierLocalFocusedBoundsObserver() {
    _init_properties_FocusedBounds_kt__l9iahm();
    return ModifierLocalFocusedBoundsObserver;
  }
  var ModifierLocalFocusedBoundsObserver;
  function ModifierLocalFocusedBoundsObserver$lambda() {
    _init_properties_FocusedBounds_kt__l9iahm();
    return null;
  }
  var properties_initialized_FocusedBounds_kt_k69nss;
  function _init_properties_FocusedBounds_kt__l9iahm() {
    if (!properties_initialized_FocusedBounds_kt_k69nss) {
      properties_initialized_FocusedBounds_kt_k69nss = true;
      ModifierLocalFocusedBoundsObserver = modifierLocalOf(ModifierLocalFocusedBoundsObserver$lambda);
    }
  }
  function get_LocalIndication() {
    _init_properties_Indication_kt__w3ndj0();
    return LocalIndication;
  }
  var LocalIndication;
  function Indication() {
  }
  function _get_isPressed__f6cq7t($this) {
    return $this.isPressed_1;
  }
  function _get_isHovered__wio4dc($this) {
    return $this.isHovered_1;
  }
  function _get_isFocused__xvmarg($this) {
    return $this.isFocused_1;
  }
  function DefaultDebugIndicationInstance(isPressed, isHovered, isFocused) {
    this.isPressed_1 = isPressed;
    this.isHovered_1 = isHovered;
    this.isFocused_1 = isFocused;
  }
  protoOf(DefaultDebugIndicationInstance).drawIndication_8rzu54_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.drawContent_m0wwjp_k$();
    if (this.isPressed_1.get_value_j01efc_k$()) {
      _this__u8e3s4.drawRect$default_5x4e2k_k$(Color__copy$default_impl_ectz3s(Companion_getInstance().get_Black_t4k9fh_k$(), 0.3), VOID, _this__u8e3s4.get_size_cxx1ym_k$());
    } else if (this.isHovered_1.get_value_j01efc_k$() ? true : this.isFocused_1.get_value_j01efc_k$()) {
      _this__u8e3s4.drawRect$default_5x4e2k_k$(Color__copy$default_impl_ectz3s(Companion_getInstance().get_Black_t4k9fh_k$(), 0.1), VOID, _this__u8e3s4.get_size_cxx1ym_k$());
    }
  };
  function DefaultDebugIndication() {
    DefaultDebugIndication_instance = this;
  }
  protoOf(DefaultDebugIndication).rememberUpdatedInstance_bjzky9_k$ = function (interactionSource, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(1683566979);
    sourceInformation($composer_0, 'C(rememberUpdatedInstance)183@7542L25,184@7610L25,185@7678L25,186@7719L115:Indication.kt#71ulvw');
    if (isTraceInProgress()) {
      traceEventStart(1683566979, $changed, -1, 'androidx.compose.foundation.DefaultDebugIndication.rememberUpdatedInstance (Indication.kt:182)');
    }
    var isPressed = collectIsPressedAsState(interactionSource, $composer_0, 14 & $changed);
    var isHovered = collectIsHoveredAsState(interactionSource, $composer_0, 14 & $changed);
    var isFocused = collectIsFocusedAsState(interactionSource, $composer_0, 14 & $changed);
    $composer_0.startReplaceableGroup_ip860b_k$(1543447402);
    sourceInformation($composer_0, 'CC(remember):Indication.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = (($changed & 14 ^ 6) > 4 ? $composer_0.changed_ga7h3f_k$(interactionSource) : false) ? true : ($changed & 6) === 4;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid ? true : it === Companion_getInstance_9().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.foundation.DefaultDebugIndication.rememberUpdatedInstance.<anonymous>' call
      var value = new DefaultDebugIndicationInstance(isPressed, isHovered, isFocused);
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp1_group;
  };
  var DefaultDebugIndication_instance;
  function DefaultDebugIndication_getInstance() {
    if (DefaultDebugIndication_instance == null)
      new DefaultDebugIndication();
    return DefaultDebugIndication_instance;
  }
  function IndicationInstance() {
  }
  function LocalIndication$lambda() {
    _init_properties_Indication_kt__w3ndj0();
    return DefaultDebugIndication_getInstance();
  }
  var properties_initialized_Indication_kt_w71gpq;
  function _init_properties_Indication_kt__w3ndj0() {
    if (!properties_initialized_Indication_kt_w71gpq) {
      properties_initialized_Indication_kt_w71gpq = true;
      LocalIndication = staticCompositionLocalOf(LocalIndication$lambda);
    }
  }
  var MutatePriority_Default_instance;
  var MutatePriority_UserInput_instance;
  var MutatePriority_PreventUserInput_instance;
  function values() {
    return [MutatePriority_Default_getInstance(), MutatePriority_UserInput_getInstance(), MutatePriority_PreventUserInput_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'Default':
        return MutatePriority_Default_getInstance();
      case 'UserInput':
        return MutatePriority_UserInput_getInstance();
      case 'PreventUserInput':
        return MutatePriority_PreventUserInput_getInstance();
      default:
        MutatePriority_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var MutatePriority_entriesInitialized;
  function MutatePriority_initEntries() {
    if (MutatePriority_entriesInitialized)
      return Unit_getInstance();
    MutatePriority_entriesInitialized = true;
    MutatePriority_Default_instance = new MutatePriority('Default', 0);
    MutatePriority_UserInput_instance = new MutatePriority('UserInput', 1);
    MutatePriority_PreventUserInput_instance = new MutatePriority('PreventUserInput', 2);
  }
  var $ENTRIES;
  function MutatePriority(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Mutator(priority, job) {
    this.priority_1 = priority;
    this.job_1 = job;
  }
  protoOf(Mutator).get_priority_jyafsd_k$ = function () {
    return this.priority_1;
  };
  protoOf(Mutator).get_job_18j2r0_k$ = function () {
    return this.job_1;
  };
  protoOf(Mutator).canInterrupt_qcoyod_k$ = function (other) {
    return this.priority_1.compareTo_30rs7w_k$(other.priority_1) >= 0;
  };
  protoOf(Mutator).cancel_2l89ey_k$ = function () {
    return this.job_1.cancel_hkmm2i_k$(new MutationInterruptedException());
  };
  function _get_currentMutator__y8yhby($this) {
    return $this.currentMutator_1;
  }
  function _get_mutex__e2dgb2($this) {
    return $this.mutex_1;
  }
  function tryMutateOrCancel($this, mutator) {
    $l$loop: while (true) {
      var oldMutator = $this.currentMutator_1.get_26vq_k$();
      if (oldMutator == null ? true : mutator.canInterrupt_qcoyod_k$(oldMutator)) {
        if ($this.currentMutator_1.compareAndSet_10iwom_k$(oldMutator, mutator)) {
          if (oldMutator == null)
            null;
          else {
            oldMutator.cancel_2l89ey_k$();
          }
          break $l$loop;
        }
      } else
        throw CancellationException_init_$Create$('Current mutation had a higher priority');
    }
  }
  function MutatorMutex$mutate$slambda($priority, this$0, $block, resultContinuation) {
    this.$priority_1 = $priority;
    this.this$0__1 = this$0;
    this.$block_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutatorMutex$mutate$slambda).invoke_nd4u9n_k$ = function ($this$coroutineScope, $completion) {
    var tmp = this.create_rcuf4x_k$($this$coroutineScope, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MutatorMutex$mutate$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_nd4u9n_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutatorMutex$mutate$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(9);
            this.mutator0__1 = new Mutator(this.$priority_1, ensureNotNull(this.$this$coroutineScope_1.get_coroutineContext_115oqo_k$().get_y2st91_k$(Key_getInstance())));
            tryMutateOrCancel(this.this$0__1, this.mutator0__1);
            var tmp_0 = this;
            tmp_0.this1__1 = this.this$0__1.mutex_1;
            var tmp_1 = this;
            tmp_1.owner2__1 = null;
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this1__1.lock_ugrcvf_k$(this.owner2__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(8);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            this.set_exceptionState_fex74n_k$(7);
            this.set_state_rjd8d0_k$(4);
            suspendResult = this.$block_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.tmp$ret$04__1 = suspendResult;
            this.set_state_rjd8d0_k$(5);
            continue $sm;
          case 5:
            var tmp_2 = this.tmp$ret$04__1;
            this.set_exceptionState_fex74n_k$(8);
            this.this$0__1.currentMutator_1.compareAndSet_10iwom_k$(this.mutator0__1, null);
            this.tmp$ret$23__1 = tmp_2;
            this.set_exceptionState_fex74n_k$(9);
            this.set_state_rjd8d0_k$(6);
            continue $sm;
          case 6:
            var tmp_3 = this.tmp$ret$23__1;
            this.set_exceptionState_fex74n_k$(9);
            this.this1__1.unlock_ulcrcl_k$(this.owner2__1);
            return tmp_3;
          case 7:
            this.set_exceptionState_fex74n_k$(8);
            var t = this.get_exception_x0n6w6_k$();
            this.this$0__1.currentMutator_1.compareAndSet_10iwom_k$(this.mutator0__1, null);
            throw t;
          case 8:
            this.set_exceptionState_fex74n_k$(9);
            var t_0 = this.get_exception_x0n6w6_k$();
            this.this1__1.unlock_ulcrcl_k$(this.owner2__1);
            throw t_0;
          case 9:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 9) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(MutatorMutex$mutate$slambda).create_rcuf4x_k$ = function ($this$coroutineScope, completion) {
    var i = new MutatorMutex$mutate$slambda(this.$priority_1, this.this$0__1, this.$block_1, completion);
    i.$this$coroutineScope_1 = $this$coroutineScope;
    return i;
  };
  protoOf(MutatorMutex$mutate$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function MutatorMutex$mutate$slambda_0($priority, this$0, $block, resultContinuation) {
    var i = new MutatorMutex$mutate$slambda($priority, this$0, $block, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.invoke_nd4u9n_k$($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MutatorMutex$mutateWith$slambda($priority, this$0, $block, $receiver, resultContinuation) {
    this.$priority_1 = $priority;
    this.this$0__1 = this$0;
    this.$block_1 = $block;
    this.$receiver_1 = $receiver;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutatorMutex$mutateWith$slambda).invoke_nd4u9n_k$ = function ($this$coroutineScope, $completion) {
    var tmp = this.create_rcuf4x_k$($this$coroutineScope, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MutatorMutex$mutateWith$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_nd4u9n_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutatorMutex$mutateWith$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(9);
            this.mutator0__1 = new Mutator(this.$priority_1, ensureNotNull(this.$this$coroutineScope_1.get_coroutineContext_115oqo_k$().get_y2st91_k$(Key_getInstance())));
            tryMutateOrCancel(this.this$0__1, this.mutator0__1);
            var tmp_0 = this;
            tmp_0.this1__1 = this.this$0__1.mutex_1;
            var tmp_1 = this;
            tmp_1.owner2__1 = null;
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this1__1.lock_ugrcvf_k$(this.owner2__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(8);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            this.set_exceptionState_fex74n_k$(7);
            this.set_state_rjd8d0_k$(4);
            suspendResult = this.$block_1(this.$receiver_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.tmp$ret$04__1 = suspendResult;
            this.set_state_rjd8d0_k$(5);
            continue $sm;
          case 5:
            var tmp_2 = this.tmp$ret$04__1;
            this.set_exceptionState_fex74n_k$(8);
            this.this$0__1.currentMutator_1.compareAndSet_10iwom_k$(this.mutator0__1, null);
            this.tmp$ret$23__1 = tmp_2;
            this.set_exceptionState_fex74n_k$(9);
            this.set_state_rjd8d0_k$(6);
            continue $sm;
          case 6:
            var tmp_3 = this.tmp$ret$23__1;
            this.set_exceptionState_fex74n_k$(9);
            this.this1__1.unlock_ulcrcl_k$(this.owner2__1);
            return tmp_3;
          case 7:
            this.set_exceptionState_fex74n_k$(8);
            var t = this.get_exception_x0n6w6_k$();
            this.this$0__1.currentMutator_1.compareAndSet_10iwom_k$(this.mutator0__1, null);
            throw t;
          case 8:
            this.set_exceptionState_fex74n_k$(9);
            var t_0 = this.get_exception_x0n6w6_k$();
            this.this1__1.unlock_ulcrcl_k$(this.owner2__1);
            throw t_0;
          case 9:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 9) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(MutatorMutex$mutateWith$slambda).create_rcuf4x_k$ = function ($this$coroutineScope, completion) {
    var i = new MutatorMutex$mutateWith$slambda(this.$priority_1, this.this$0__1, this.$block_1, this.$receiver_1, completion);
    i.$this$coroutineScope_1 = $this$coroutineScope;
    return i;
  };
  protoOf(MutatorMutex$mutateWith$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function MutatorMutex$mutateWith$slambda_0($priority, this$0, $block, $receiver, resultContinuation) {
    var i = new MutatorMutex$mutateWith$slambda($priority, this$0, $block, $receiver, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.invoke_nd4u9n_k$($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MutatorMutex() {
    this.currentMutator_1 = new AtomicReference(null);
    this.mutex_1 = Mutex();
  }
  protoOf(MutatorMutex).mutate_f6dn9n_k$ = function (priority, block, $completion) {
    return coroutineScope(MutatorMutex$mutate$slambda_0(priority, this, block, null), $completion);
  };
  protoOf(MutatorMutex).mutate$default_6w5wvg_k$ = function (priority, block, $completion, $super) {
    priority = priority === VOID ? MutatePriority_Default_getInstance() : priority;
    return $super === VOID ? this.mutate_f6dn9n_k$(priority, block, $completion) : $super.mutate_f6dn9n_k$.call(this, priority, block, $completion);
  };
  protoOf(MutatorMutex).mutateWith_pzf0w6_k$ = function (receiver, priority, block, $completion) {
    return coroutineScope(MutatorMutex$mutateWith$slambda_0(priority, this, block, receiver, null), $completion);
  };
  protoOf(MutatorMutex).mutateWith$default_blcvpd_k$ = function (receiver, priority, block, $completion, $super) {
    priority = priority === VOID ? MutatePriority_Default_getInstance() : priority;
    return $super === VOID ? this.mutateWith_pzf0w6_k$(receiver, priority, block, $completion) : $super.mutateWith_pzf0w6_k$.call(this, receiver, priority, block, $completion);
  };
  protoOf(MutatorMutex).tryMutate_b5zmhz_k$ = function (block) {
    var didLock = this.tryLock_hapj0a_k$();
    if (didLock) {
      try {
        block();
      }finally {
        this.unlock_85w96c_k$();
      }
    }
    return didLock;
  };
  protoOf(MutatorMutex).tryLock_hapj0a_k$ = function () {
    return this.mutex_1.tryLock$default_f5e1l_k$();
  };
  protoOf(MutatorMutex).unlock_85w96c_k$ = function () {
    this.mutex_1.unlock$default_in3xrb_k$();
  };
  function MutationInterruptedException() {
    PlatformOptimizedCancellationException.call(this, 'Mutation interrupted');
    captureStack(this, MutationInterruptedException);
  }
  function MutatePriority_Default_getInstance() {
    MutatePriority_initEntries();
    return MutatePriority_Default_instance;
  }
  function MutatePriority_UserInput_getInstance() {
    MutatePriority_initEntries();
    return MutatePriority_UserInput_instance;
  }
  function MutatePriority_PreventUserInput_getInstance() {
    MutatePriority_initEntries();
    return MutatePriority_PreventUserInput_instance;
  }
  function get_HorizontalPointerDirectionConfig() {
    _init_properties_DragGestureDetector_kt__sw7hnt();
    return HorizontalPointerDirectionConfig;
  }
  var HorizontalPointerDirectionConfig;
  function get_VerticalPointerDirectionConfig() {
    _init_properties_DragGestureDetector_kt__sw7hnt();
    return VerticalPointerDirectionConfig;
  }
  var VerticalPointerDirectionConfig;
  function get_BidirectionalPointerDirectionConfig() {
    _init_properties_DragGestureDetector_kt__sw7hnt();
    return BidirectionalPointerDirectionConfig;
  }
  var BidirectionalPointerDirectionConfig;
  function get_mouseSlop() {
    _init_properties_DragGestureDetector_kt__sw7hnt();
    return mouseSlop;
  }
  var mouseSlop;
  function get_defaultTouchSlop() {
    _init_properties_DragGestureDetector_kt__sw7hnt();
    return defaultTouchSlop;
  }
  var defaultTouchSlop;
  function get_mouseToTouchSlopRatio() {
    _init_properties_DragGestureDetector_kt__sw7hnt();
    return mouseToTouchSlopRatio;
  }
  var mouseToTouchSlopRatio;
  function PointerDirectionConfig() {
  }
  function drag(_this__u8e3s4, pointerId, onDrag, $completion) {
    var tmp = new $dragCOROUTINE$0(_this__u8e3s4, pointerId, onDrag, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function awaitLongPressOrCancellation(_this__u8e3s4, pointerId, $completion) {
    var tmp = new $awaitLongPressOrCancellationCOROUTINE$1(_this__u8e3s4, pointerId, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function awaitDragOrCancellation(_this__u8e3s4, pointerId, $completion) {
    var tmp = new $awaitDragOrCancellationCOROUTINE$2(_this__u8e3s4, pointerId, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function isPointerUp(_this__u8e3s4, pointerId) {
    _init_properties_DragGestureDetector_kt__sw7hnt();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastFirstOrNull' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var this_0 = _this__u8e3s4.get_changes_dhi2my_k$();
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.get_c1px32_k$(index);
          // Inline function 'androidx.compose.ui.util.fastFirstOrNull.<anonymous>' call
          // Inline function 'androidx.compose.foundation.gestures.isPointerUp.<anonymous>' call
          if (equals(item.get_id_o9b1d7_k$(), pointerId)) {
            tmp$ret$1 = item;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    return !((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_pressed_3zxk93_k$()) === true);
  }
  function awaitDragOrUp(_this__u8e3s4, pointerId, hasDragged, $completion) {
    var tmp = new $awaitDragOrUpCOROUTINE$3(_this__u8e3s4, pointerId, hasDragged, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function HorizontalPointerDirectionConfig$1() {
  }
  protoOf(HorizontalPointerDirectionConfig$1).calculateDeltaChange_bgbbc8_k$ = function (offset) {
    // Inline function 'kotlin.math.abs' call
    var x = _Offset___get_x__impl__xvi35n(offset);
    return Math.abs(x);
  };
  protoOf(HorizontalPointerDirectionConfig$1).calculatePostSlopOffset_im03xz_k$ = function (totalPositionChange, touchSlop) {
    var tmp = _Offset___get_x__impl__xvi35n(totalPositionChange);
    // Inline function 'kotlin.math.sign' call
    var x = _Offset___get_x__impl__xvi35n(totalPositionChange);
    var finalMainPositionChange = tmp - sign(x) * touchSlop;
    return Offset(finalMainPositionChange, _Offset___get_y__impl__8bzhra(totalPositionChange));
  };
  function VerticalPointerDirectionConfig$1() {
  }
  protoOf(VerticalPointerDirectionConfig$1).calculateDeltaChange_bgbbc8_k$ = function (offset) {
    // Inline function 'kotlin.math.abs' call
    var x = _Offset___get_y__impl__8bzhra(offset);
    return Math.abs(x);
  };
  protoOf(VerticalPointerDirectionConfig$1).calculatePostSlopOffset_im03xz_k$ = function (totalPositionChange, touchSlop) {
    var tmp = _Offset___get_y__impl__8bzhra(totalPositionChange);
    // Inline function 'kotlin.math.sign' call
    var x = _Offset___get_y__impl__8bzhra(totalPositionChange);
    var finalMainPositionChange = tmp - sign(x) * touchSlop;
    return Offset(_Offset___get_x__impl__xvi35n(totalPositionChange), finalMainPositionChange);
  };
  function BidirectionalPointerDirectionConfig$1() {
  }
  protoOf(BidirectionalPointerDirectionConfig$1).calculateDeltaChange_bgbbc8_k$ = function (offset) {
    return Offset__getDistance_impl_pclvxn(offset);
  };
  protoOf(BidirectionalPointerDirectionConfig$1).calculatePostSlopOffset_im03xz_k$ = function (totalPositionChange, touchSlop) {
    var touchSlopOffset = Offset__times_impl_jz1mli(Offset__div_impl_eaxtg1(totalPositionChange, this.calculateDeltaChange_bgbbc8_k$(totalPositionChange)), touchSlop);
    return Offset__minus_impl_hoj2c0(totalPositionChange, touchSlopOffset);
  };
  function awaitLongPressOrCancellation$slambda($currentDown, $longPress, resultContinuation) {
    this.$currentDown_1 = $currentDown;
    this.$longPress_1 = $longPress;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(awaitLongPressOrCancellation$slambda).invoke_mnrbcb_k$ = function ($this$withTimeout, $completion) {
    var tmp = this.create_3qvng7_k$($this$withTimeout, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(awaitLongPressOrCancellation$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_mnrbcb_k$((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(awaitLongPressOrCancellation$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            this.finished0__1 = false;
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!!this.finished0__1) {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(2);
            suspendResult = this.$this$withTimeout_1.awaitPointerEvent_mdgus6_k$(PointerEventPass_Main_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.event1__1 = suspendResult;
            var tmp$ret$0;
            l$ret$1: do {
              var this_0 = this.event1__1.get_changes_dhi2my_k$();
              var inductionVariable = 0;
              var last = this_0.get_size_woubt6_k$() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = this_0.get_c1px32_k$(index);
                  if (!changedToUpIgnoreConsumed(item)) {
                    tmp$ret$0 = false;
                    break l$ret$1;
                  }
                }
                 while (inductionVariable <= last);
              tmp$ret$0 = true;
            }
             while (false);
            if (tmp$ret$0) {
              this.finished0__1 = true;
            }

            var tmp$ret$2;
            l$ret$3: do {
              var this_1 = this.event1__1.get_changes_dhi2my_k$();
              var inductionVariable_0 = 0;
              var last_0 = this_1.get_size_woubt6_k$() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = this_1.get_c1px32_k$(index_0);
                  if (item_0.get_isConsumed_scj5q3_k$() ? true : isOutOfBounds(item_0, this.$this$withTimeout_1.get_size_kd98kr_k$(), this.$this$withTimeout_1.get_extendedTouchPadding_kexs9k_k$())) {
                    tmp$ret$2 = true;
                    break l$ret$3;
                  }
                }
                 while (inductionVariable_0 <= last_0);
              tmp$ret$2 = false;
            }
             while (false);
            if (tmp$ret$2) {
              this.finished0__1 = true;
            }

            this.set_state_rjd8d0_k$(3);
            suspendResult = this.$this$withTimeout_1.awaitPointerEvent_mdgus6_k$(PointerEventPass_Final_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var consumeCheck = suspendResult;
            var tmp$ret$4;
            l$ret$5: do {
              var this_2 = consumeCheck.get_changes_dhi2my_k$();
              var inductionVariable_1 = 0;
              var last_1 = this_2.get_size_woubt6_k$() - 1 | 0;
              if (inductionVariable_1 <= last_1)
                do {
                  var index_1 = inductionVariable_1;
                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                  var item_1 = this_2.get_c1px32_k$(index_1);
                  if (item_1.get_isConsumed_scj5q3_k$()) {
                    tmp$ret$4 = true;
                    break l$ret$5;
                  }
                }
                 while (inductionVariable_1 <= last_1);
              tmp$ret$4 = false;
            }
             while (false);
            if (tmp$ret$4) {
              this.finished0__1 = true;
            }

            if (isPointerUp(this.event1__1, this.$currentDown_1._v.get_id_o9b1d7_k$())) {
              var tmp$ret$6;
              l$ret$7: do {
                var this_3 = this.event1__1.get_changes_dhi2my_k$();
                var inductionVariable_2 = 0;
                var last_2 = this_3.get_size_woubt6_k$() - 1 | 0;
                if (inductionVariable_2 <= last_2)
                  do {
                    var index_2 = inductionVariable_2;
                    inductionVariable_2 = inductionVariable_2 + 1 | 0;
                    var item_2 = this_3.get_c1px32_k$(index_2);
                    if (item_2.get_pressed_3zxk93_k$()) {
                      tmp$ret$6 = item_2;
                      break l$ret$7;
                    }
                  }
                   while (inductionVariable_2 <= last_2);
                tmp$ret$6 = null;
              }
               while (false);
              var newPressed = tmp$ret$6;
              if (!(newPressed == null)) {
                this.$currentDown_1._v = newPressed;
                this.$longPress_1._v = this.$currentDown_1._v;
              } else {
                this.finished0__1 = true;
              }
            } else {
              var tmp$ret$8;
              l$ret$9: do {
                var this_4 = this.event1__1.get_changes_dhi2my_k$();
                var inductionVariable_3 = 0;
                var last_3 = this_4.get_size_woubt6_k$() - 1 | 0;
                if (inductionVariable_3 <= last_3)
                  do {
                    var index_3 = inductionVariable_3;
                    inductionVariable_3 = inductionVariable_3 + 1 | 0;
                    var item_3 = this_4.get_c1px32_k$(index_3);
                    if (equals(item_3.get_id_o9b1d7_k$(), this.$currentDown_1._v.get_id_o9b1d7_k$())) {
                      tmp$ret$8 = item_3;
                      break l$ret$9;
                    }
                  }
                   while (inductionVariable_3 <= last_3);
                tmp$ret$8 = null;
              }
               while (false);
              this.$longPress_1._v = tmp$ret$8;
            }

            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 4:
            return Unit_getInstance();
          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(awaitLongPressOrCancellation$slambda).create_3qvng7_k$ = function ($this$withTimeout, completion) {
    var i = new awaitLongPressOrCancellation$slambda(this.$currentDown_1, this.$longPress_1, completion);
    i.$this$withTimeout_1 = $this$withTimeout;
    return i;
  };
  protoOf(awaitLongPressOrCancellation$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_3qvng7_k$((!(value == null) ? isInterface(value, AwaitPointerEventScope) : false) ? value : THROW_CCE(), completion);
  };
  function awaitLongPressOrCancellation$slambda_0($currentDown, $longPress, resultContinuation) {
    var i = new awaitLongPressOrCancellation$slambda($currentDown, $longPress, resultContinuation);
    var l = function ($this$withTimeout, $completion) {
      return i.invoke_mnrbcb_k$($this$withTimeout, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $dragCOROUTINE$0(_this__u8e3s4, pointerId, onDrag, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.pointerId_1 = pointerId;
    this.onDrag_1 = onDrag;
  }
  protoOf($dragCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.pointer0__1 = this.pointerId_1;
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!true) {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(2);
            suspendResult = awaitDragOrCancellation(this._this__u8e3s4__1, this.pointer0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp0_elvis_lhs = suspendResult;
            var tmp_0;
            if (tmp0_elvis_lhs == null) {
              return false;
            } else {
              tmp_0 = tmp0_elvis_lhs;
            }

            var change = tmp_0;
            if (changedToUpIgnoreConsumed(change)) {
              return true;
            }

            this.onDrag_1(change);
            this.pointer0__1 = change.get_id_o9b1d7_k$();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            return Unit_getInstance();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $awaitLongPressOrCancellationCOROUTINE$1(_this__u8e3s4, pointerId, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.pointerId_1 = pointerId;
  }
  protoOf($awaitLongPressOrCancellationCOROUTINE$1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            if (isPointerUp(this._this__u8e3s4__1.get_currentEvent_sfuq5m_k$(), this.pointerId_1)) {
              return null;
            }

            var tmp_0 = this;
            var tmp$ret$0;
            l$ret$1: do {
              var this_0 = this._this__u8e3s4__1.get_currentEvent_sfuq5m_k$().get_changes_dhi2my_k$();
              var inductionVariable = 0;
              var last = this_0.get_size_woubt6_k$() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = this_0.get_c1px32_k$(index);
                  if (equals(item.get_id_o9b1d7_k$(), this.pointerId_1)) {
                    tmp$ret$0 = item;
                    break l$ret$1;
                  }
                }
                 while (inductionVariable <= last);
              tmp$ret$0 = null;
            }
             while (false);
            var tmp0_elvis_lhs = tmp$ret$0;
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              return null;
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.initialDown0__1 = tmp_1;
            this.longPress1__1 = {_v: null};
            this.currentDown2__1 = {_v: this.initialDown0__1};
            this.longPressTimeout3__1 = this._this__u8e3s4__1.get_viewConfiguration_qgdaco_k$().get_longPressTimeoutMillis_i28jbr_k$();
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.withTimeout_u1w25x_k$(this.longPressTimeout3__1, awaitLongPressOrCancellation$slambda_0(this.currentDown2__1, this.longPress1__1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.TRY_RESULT4__1 = null;
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_2 = this.get_exception_x0n6w6_k$();
            if (tmp_2 instanceof PointerEventTimeoutCancellationException) {
              var _ = this.get_exception_x0n6w6_k$();
              var tmp_3 = this;
              var tmp1_elvis_lhs = this.longPress1__1._v;
              tmp_3.TRY_RESULT4__1 = tmp1_elvis_lhs == null ? this.initialDown0__1 : tmp1_elvis_lhs;
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_fex74n_k$(3);
            return this.TRY_RESULT4__1;
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $awaitDragOrCancellationCOROUTINE$2(_this__u8e3s4, pointerId, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.pointerId_1 = pointerId;
  }
  protoOf($awaitDragOrCancellationCOROUTINE$2).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(7);
            if (isPointerUp(this._this__u8e3s4__1.get_currentEvent_sfuq5m_k$(), this.pointerId_1)) {
              return null;
            }

            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.this1__1 = this._this__u8e3s4__1;
            var tmp_1 = this;
            tmp_1.pointerId2__1 = this.pointerId_1;
            this.pointer3__1 = this.pointerId2__1;
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            if (!true) {
              this.set_state_rjd8d0_k$(8);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(3);
            suspendResult = this.this1__1.awaitPointerEvent$default_bxp5hn_k$(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var event = suspendResult;
            var tmp$ret$0;
            l$ret$1: do {
              var this_0 = event.get_changes_dhi2my_k$();
              var inductionVariable = 0;
              var last = this_0.get_size_woubt6_k$() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = this_0.get_c1px32_k$(index);
                  if (equals(item.get_id_o9b1d7_k$(), this.pointer3__1)) {
                    tmp$ret$0 = item;
                    break l$ret$1;
                  }
                }
                 while (inductionVariable <= last);
              tmp$ret$0 = null;
            }
             while (false);
            var tmp0_elvis_lhs = tmp$ret$0;
            var WHEN_RESULT;
            if (tmp0_elvis_lhs == null) {
              this.tmp$ret$20__1 = null;
              this.set_state_rjd8d0_k$(9);
              continue $sm;
            } else {
              WHEN_RESULT = tmp0_elvis_lhs;
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

          case 4:
            var dragEvent = WHEN_RESULT;
            if (changedToUpIgnoreConsumed(dragEvent)) {
              var tmp$ret$4;
              l$ret$5: do {
                var this_1 = event.get_changes_dhi2my_k$();
                var inductionVariable_0 = 0;
                var last_0 = this_1.get_size_woubt6_k$() - 1 | 0;
                if (inductionVariable_0 <= last_0)
                  do {
                    var index_0 = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    var item_0 = this_1.get_c1px32_k$(index_0);
                    if (item_0.get_pressed_3zxk93_k$()) {
                      tmp$ret$4 = item_0;
                      break l$ret$5;
                    }
                  }
                   while (inductionVariable_0 <= last_0);
                tmp$ret$4 = null;
              }
               while (false);
              var otherDown = tmp$ret$4;
              if (otherDown == null) {
                this.tmp$ret$20__1 = dragEvent;
                this.set_state_rjd8d0_k$(9);
                continue $sm;
              } else {
                this.pointer3__1 = otherDown.get_id_o9b1d7_k$();
                this.set_state_rjd8d0_k$(5);
                continue $sm;
              }
            } else {
              if (positionChangedIgnoreConsumed(dragEvent)) {
                this.tmp$ret$20__1 = dragEvent;
                this.set_state_rjd8d0_k$(9);
                continue $sm;
              } else {
                this.set_state_rjd8d0_k$(6);
                continue $sm;
              }
            }

          case 5:
            this.set_state_rjd8d0_k$(6);
            continue $sm;
          case 6:
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 7:
            throw this.get_exception_x0n6w6_k$();
          case 8:
            if (false) {
              this.set_state_rjd8d0_k$(1);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(9);
            continue $sm;
          case 9:
            var change = this.tmp$ret$20__1;
            var tmp_2;
            if ((change == null ? null : change.get_isConsumed_scj5q3_k$()) === false) {
              tmp_2 = change;
            } else {
              tmp_2 = null;
            }

            return tmp_2;
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 7) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $awaitDragOrUpCOROUTINE$3(_this__u8e3s4, pointerId, hasDragged, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.pointerId_1 = pointerId;
    this.hasDragged_1 = hasDragged;
  }
  protoOf($awaitDragOrUpCOROUTINE$3).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.pointer0__1 = this.pointerId_1;
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!true) {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(2);
            suspendResult = this._this__u8e3s4__1.awaitPointerEvent$default_bxp5hn_k$(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var event = suspendResult;
            var tmp$ret$0;
            l$ret$1: do {
              var this_0 = event.get_changes_dhi2my_k$();
              var inductionVariable = 0;
              var last = this_0.get_size_woubt6_k$() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = this_0.get_c1px32_k$(index);
                  if (equals(item.get_id_o9b1d7_k$(), this.pointer0__1)) {
                    tmp$ret$0 = item;
                    break l$ret$1;
                  }
                }
                 while (inductionVariable <= last);
              tmp$ret$0 = null;
            }
             while (false);
            var tmp0_elvis_lhs = tmp$ret$0;
            var tmp_0;
            if (tmp0_elvis_lhs == null) {
              return null;
            } else {
              tmp_0 = tmp0_elvis_lhs;
            }

            var dragEvent = tmp_0;
            if (changedToUpIgnoreConsumed(dragEvent)) {
              var tmp$ret$2;
              l$ret$3: do {
                var this_1 = event.get_changes_dhi2my_k$();
                var inductionVariable_0 = 0;
                var last_0 = this_1.get_size_woubt6_k$() - 1 | 0;
                if (inductionVariable_0 <= last_0)
                  do {
                    var index_0 = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    var item_0 = this_1.get_c1px32_k$(index_0);
                    if (item_0.get_pressed_3zxk93_k$()) {
                      tmp$ret$2 = item_0;
                      break l$ret$3;
                    }
                  }
                   while (inductionVariable_0 <= last_0);
                tmp$ret$2 = null;
              }
               while (false);
              var otherDown = tmp$ret$2;
              if (otherDown == null) {
                return dragEvent;
              } else {
                this.pointer0__1 = otherDown.get_id_o9b1d7_k$();
              }
            } else if (this.hasDragged_1(dragEvent)) {
              return dragEvent;
            }

            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            return Unit_getInstance();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  var properties_initialized_DragGestureDetector_kt_xqxw6j;
  function _init_properties_DragGestureDetector_kt__sw7hnt() {
    if (!properties_initialized_DragGestureDetector_kt_xqxw6j) {
      properties_initialized_DragGestureDetector_kt_xqxw6j = true;
      HorizontalPointerDirectionConfig = new HorizontalPointerDirectionConfig$1();
      VerticalPointerDirectionConfig = new VerticalPointerDirectionConfig$1();
      BidirectionalPointerDirectionConfig = new BidirectionalPointerDirectionConfig$1();
      // Inline function 'androidx.compose.ui.unit.dp' call
      mouseSlop = _Dp___init__impl__ms3zkb(0.125);
      // Inline function 'androidx.compose.ui.unit.dp' call
      defaultTouchSlop = _Dp___init__impl__ms3zkb(18);
      // Inline function 'androidx.compose.ui.unit.Dp.div' call
      var this_0 = get_mouseSlop();
      var other = get_defaultTouchSlop();
      mouseToTouchSlopRatio = _Dp___get_value__impl__geb1vb(this_0) / _Dp___get_value__impl__geb1vb(other);
    }
  }
  function get_NoOpDragScope() {
    _init_properties_Draggable_kt__eqnzl1();
    return NoOpDragScope;
  }
  var NoOpDragScope;
  function DragScope() {
  }
  function NoOpDragScope$1() {
  }
  protoOf(NoOpDragScope$1).dragBy_zkmjh_k$ = function (pixels) {
  };
  var properties_initialized_Draggable_kt_yfsy1p;
  function _init_properties_Draggable_kt__eqnzl1() {
    if (!properties_initialized_Draggable_kt_yfsy1p) {
      properties_initialized_Draggable_kt_yfsy1p = true;
      NoOpDragScope = new NoOpDragScope$1();
    }
  }
  function get_NoOpDrag2DScope() {
    _init_properties_Draggable2D_kt__tff5oz();
    return NoOpDrag2DScope;
  }
  var NoOpDrag2DScope;
  function Drag2DScope() {
  }
  function NoOpDrag2DScope$1() {
  }
  protoOf(NoOpDrag2DScope$1).dragBy_k45a6n_k$ = function (pixels) {
  };
  var properties_initialized_Draggable2D_kt_4k9lw1;
  function _init_properties_Draggable2D_kt__tff5oz() {
    if (!properties_initialized_Draggable2D_kt_4k9lw1) {
      properties_initialized_Draggable2D_kt_4k9lw1 = true;
      NoOpDrag2DScope = new NoOpDrag2DScope$1();
    }
  }
  function FlingBehavior() {
  }
  function awaitEachGesture(_this__u8e3s4, block, $completion) {
    // Inline function 'kotlinx.coroutines.currentCoroutineContext' call
    // Inline function 'kotlin.js.getCoroutineContext' call
    var currentContext = $completion.get_context_h02k06_k$();
    return _this__u8e3s4.awaitPointerEventScope_dtt3pb_k$(awaitEachGesture$slambda_0(currentContext, block, null), $completion);
  }
  function awaitAllPointersUp(_this__u8e3s4, $completion) {
    var tmp = new $awaitAllPointersUpCOROUTINE$4(_this__u8e3s4, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function allPointersUp(_this__u8e3s4) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastAny' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var this_0 = _this__u8e3s4.get_currentEvent_sfuq5m_k$().get_changes_dhi2my_k$();
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.get_c1px32_k$(index);
          // Inline function 'androidx.compose.ui.util.fastAny.<anonymous>' call
          // Inline function 'androidx.compose.foundation.gestures.allPointersUp.<anonymous>' call
          if (item.get_pressed_3zxk93_k$()) {
            tmp$ret$1 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = false;
    }
    return !tmp$ret$1;
  }
  function awaitEachGesture$slambda($currentContext, $block, resultContinuation) {
    this.$currentContext_1 = $currentContext;
    this.$block_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(awaitEachGesture$slambda).invoke_mnrbcb_k$ = function ($this$awaitPointerEventScope, $completion) {
    var tmp = this.create_3qvng7_k$($this$awaitPointerEventScope, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(awaitEachGesture$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_mnrbcb_k$((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(awaitEachGesture$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(9);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!get_isActive(this.$currentContext_1)) {
              this.set_state_rjd8d0_k$(8);
              continue $sm;
            }

            this.set_exceptionState_fex74n_k$(4);
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.$block_1(this.$this$awaitPointerEventScope_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.set_state_rjd8d0_k$(3);
            suspendResult = awaitAllPointersUp(this.$this$awaitPointerEventScope_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.set_exceptionState_fex74n_k$(9);
            this.set_state_rjd8d0_k$(7);
            continue $sm;
          case 4:
            this.set_exceptionState_fex74n_k$(9);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof CancellationException) {
              this.e0__1 = this.get_exception_x0n6w6_k$();
              if (get_isActive(this.$currentContext_1)) {
                this.set_state_rjd8d0_k$(5);
                suspendResult = awaitAllPointersUp(this.$this$awaitPointerEventScope_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                throw this.e0__1;
              }
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 5:
            this.set_state_rjd8d0_k$(6);
            continue $sm;
          case 6:
            this.set_state_rjd8d0_k$(7);
            continue $sm;
          case 7:
            this.set_exceptionState_fex74n_k$(9);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 8:
            return Unit_getInstance();
          case 9:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 9) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(awaitEachGesture$slambda).create_3qvng7_k$ = function ($this$awaitPointerEventScope, completion) {
    var i = new awaitEachGesture$slambda(this.$currentContext_1, this.$block_1, completion);
    i.$this$awaitPointerEventScope_1 = $this$awaitPointerEventScope;
    return i;
  };
  protoOf(awaitEachGesture$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_3qvng7_k$((!(value == null) ? isInterface(value, AwaitPointerEventScope) : false) ? value : THROW_CCE(), completion);
  };
  function awaitEachGesture$slambda_0($currentContext, $block, resultContinuation) {
    var i = new awaitEachGesture$slambda($currentContext, $block, resultContinuation);
    var l = function ($this$awaitPointerEventScope, $completion) {
      return i.invoke_mnrbcb_k$($this$awaitPointerEventScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $awaitAllPointersUpCOROUTINE$4(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($awaitAllPointersUpCOROUTINE$4).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            if (!allPointersUp(this._this__u8e3s4__1)) {
              this.set_state_rjd8d0_k$(1);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

          case 1:
            this.set_state_rjd8d0_k$(2);
            suspendResult = this._this__u8e3s4__1.awaitPointerEvent_mdgus6_k$(PointerEventPass_Final_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var events = suspendResult;
            var tmp$ret$0;
            l$ret$1: do {
              var this_0 = events.get_changes_dhi2my_k$();
              var inductionVariable = 0;
              var last = this_0.get_size_woubt6_k$() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = this_0.get_c1px32_k$(index);
                  if (item.get_pressed_3zxk93_k$()) {
                    tmp$ret$0 = true;
                    break l$ret$1;
                  }
                }
                 while (inductionVariable <= last);
              tmp$ret$0 = false;
            }
             while (false);
            if (tmp$ret$0) {
              this.set_state_rjd8d0_k$(1);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 4:
            return Unit_getInstance();
          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  var Orientation_Vertical_instance;
  var Orientation_Horizontal_instance;
  function values_0() {
    return [Orientation_Vertical_getInstance(), Orientation_Horizontal_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'Vertical':
        return Orientation_Vertical_getInstance();
      case 'Horizontal':
        return Orientation_Horizontal_getInstance();
      default:
        Orientation_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var Orientation_entriesInitialized;
  function Orientation_initEntries() {
    if (Orientation_entriesInitialized)
      return Unit_getInstance();
    Orientation_entriesInitialized = true;
    Orientation_Vertical_instance = new Orientation('Vertical', 0);
    Orientation_Horizontal_instance = new Orientation('Horizontal', 1);
  }
  var $ENTRIES_0;
  function Orientation(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Orientation_Vertical_getInstance() {
    Orientation_initEntries();
    return Orientation_Vertical_instance;
  }
  function Orientation_Horizontal_getInstance() {
    Orientation_initEntries();
    return Orientation_Horizontal_instance;
  }
  function get_CanDragCalculation() {
    _init_properties_Scrollable_kt__k2543d();
    return CanDragCalculation;
  }
  var CanDragCalculation;
  function get_NoOpOnDragStarted() {
    _init_properties_Scrollable_kt__k2543d();
    return NoOpOnDragStarted;
  }
  var NoOpOnDragStarted;
  function get_NoOpScrollScope() {
    _init_properties_Scrollable_kt__k2543d();
    return NoOpScrollScope;
  }
  var NoOpScrollScope;
  function get_ModifierLocalScrollableContainer() {
    _init_properties_Scrollable_kt__k2543d();
    return ModifierLocalScrollableContainer;
  }
  var ModifierLocalScrollableContainer;
  function get_NoOpFlingBehavior() {
    _init_properties_Scrollable_kt__k2543d();
    return NoOpFlingBehavior;
  }
  var NoOpFlingBehavior;
  function get_DefaultScrollMotionDurationScale() {
    _init_properties_Scrollable_kt__k2543d();
    return DefaultScrollMotionDurationScale;
  }
  var DefaultScrollMotionDurationScale;
  function get_UnityDensity() {
    _init_properties_Scrollable_kt__k2543d();
    return UnityDensity;
  }
  var UnityDensity;
  function get_DefaultScrollMotionDurationScaleFactor() {
    return DefaultScrollMotionDurationScaleFactor;
  }
  var DefaultScrollMotionDurationScaleFactor;
  function CanDragCalculation$lambda(down) {
    _init_properties_Scrollable_kt__k2543d();
    return !(down.get_type_mliz2v_k$() === Companion_getInstance_10().get_Mouse_mtac1u_k$());
  }
  function NoOpOnDragStarted$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(NoOpOnDragStarted$slambda).invoke_mv1t29_k$ = function ($this$null, it, $completion) {
    var tmp = this.create_y4kist_k$($this$null, it, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(NoOpOnDragStarted$slambda).invoke_4tzzq6_k$ = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE();
    return this.invoke_mv1t29_k$(tmp, p2 instanceof Offset_0 ? p2.packedValue_1 : THROW_CCE(), $completion);
  };
  protoOf(NoOpOnDragStarted$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(NoOpOnDragStarted$slambda).create_y4kist_k$ = function ($this$null, it, completion) {
    var i = new NoOpOnDragStarted$slambda(completion);
    i.$this$null_1 = $this$null;
    i.it_1 = it;
    return i;
  };
  function NoOpOnDragStarted$slambda_0(resultContinuation) {
    var i = new NoOpOnDragStarted$slambda(resultContinuation);
    var l = function ($this$null, it, $completion) {
      return i.invoke_mv1t29_k$($this$null, it.packedValue_1, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function NoOpScrollScope$1() {
  }
  protoOf(NoOpScrollScope$1).scrollBy_5wefpo_k$ = function (pixels) {
    return pixels;
  };
  function ModifierLocalScrollableContainer$lambda() {
    _init_properties_Scrollable_kt__k2543d();
    return false;
  }
  function NoOpFlingBehavior$1() {
  }
  protoOf(NoOpFlingBehavior$1).performFling_a7nmp2_k$ = function (_this__u8e3s4, initialVelocity, $completion) {
    return 0.0;
  };
  function DefaultScrollMotionDurationScale$1() {
  }
  protoOf(DefaultScrollMotionDurationScale$1).get_scaleFactor_64aucw_k$ = function () {
    return 1.0;
  };
  function UnityDensity$1() {
  }
  protoOf(UnityDensity$1).get_density_qy0267_k$ = function () {
    return 1.0;
  };
  protoOf(UnityDensity$1).get_fontScale_h56n3i_k$ = function () {
    return 1.0;
  };
  var properties_initialized_Scrollable_kt_7d5rzr;
  function _init_properties_Scrollable_kt__k2543d() {
    if (!properties_initialized_Scrollable_kt_7d5rzr) {
      properties_initialized_Scrollable_kt_7d5rzr = true;
      CanDragCalculation = CanDragCalculation$lambda;
      NoOpOnDragStarted = NoOpOnDragStarted$slambda_0(null);
      NoOpScrollScope = new NoOpScrollScope$1();
      ModifierLocalScrollableContainer = modifierLocalOf(ModifierLocalScrollableContainer$lambda);
      NoOpFlingBehavior = new NoOpFlingBehavior$1();
      DefaultScrollMotionDurationScale = new DefaultScrollMotionDurationScale$1();
      UnityDensity = new UnityDensity$1();
    }
  }
  function ScrollScope() {
  }
  function ScrollableState() {
  }
  function ScrollableState_0(consumeScrollDelta) {
    return new DefaultScrollableState(consumeScrollDelta);
  }
  function DefaultScrollableState$scroll$slambda$slambda(this$0, $block, resultContinuation) {
    this.this$0__1 = this$0;
    this.$block_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultScrollableState$scroll$slambda$slambda).invoke_yd5n9m_k$ = function ($this$mutateWith, $completion) {
    var tmp = this.create_a2p816_k$($this$mutateWith, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(DefaultScrollableState$scroll$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_yd5n9m_k$((!(p1 == null) ? isInterface(p1, ScrollScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultScrollableState$scroll$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            this.this$0__1.isScrollingState_1.set_value_v1vabv_k$(true);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.$block_1(this.$this$mutateWith_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.tmp$ret$00__1 = suspendResult;
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            this.set_exceptionState_fex74n_k$(5);
            this.this$0__1.isScrollingState_1.set_value_v1vabv_k$(false);
            return Unit_getInstance();
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var t = this.get_exception_x0n6w6_k$();
            this.this$0__1.isScrollingState_1.set_value_v1vabv_k$(false);
            throw t;
          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(DefaultScrollableState$scroll$slambda$slambda).create_a2p816_k$ = function ($this$mutateWith, completion) {
    var i = new DefaultScrollableState$scroll$slambda$slambda(this.this$0__1, this.$block_1, completion);
    i.$this$mutateWith_1 = $this$mutateWith;
    return i;
  };
  protoOf(DefaultScrollableState$scroll$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_a2p816_k$((!(value == null) ? isInterface(value, ScrollScope) : false) ? value : THROW_CCE(), completion);
  };
  function DefaultScrollableState$scroll$slambda$slambda_0(this$0, $block, resultContinuation) {
    var i = new DefaultScrollableState$scroll$slambda$slambda(this$0, $block, resultContinuation);
    var l = function ($this$mutateWith, $completion) {
      return i.invoke_yd5n9m_k$($this$mutateWith, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _get_scrollScope__evoove($this) {
    return $this.scrollScope_1;
  }
  function _get_scrollMutex__cbe8f3($this) {
    return $this.scrollMutex_1;
  }
  function _get_isScrollingState__pas7qd($this) {
    return $this.isScrollingState_1;
  }
  function DefaultScrollableState$scrollScope$1(this$0) {
    this.this$0__1 = this$0;
  }
  protoOf(DefaultScrollableState$scrollScope$1).scrollBy_5wefpo_k$ = function (pixels) {
    if (isNaN_0(pixels))
      return 0.0;
    return this.this$0__1.onDelta_1(pixels);
  };
  function DefaultScrollableState$scroll$slambda(this$0, $scrollPriority, $block, resultContinuation) {
    this.this$0__1 = this$0;
    this.$scrollPriority_1 = $scrollPriority;
    this.$block_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultScrollableState$scroll$slambda).invoke_d9fzmj_k$ = function ($this$coroutineScope, $completion) {
    var tmp = this.create_rcuf4x_k$($this$coroutineScope, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(DefaultScrollableState$scroll$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultScrollableState$scroll$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1.scrollMutex_1.mutateWith_pzf0w6_k$(this.this$0__1.scrollScope_1, this.$scrollPriority_1, DefaultScrollableState$scroll$slambda$slambda_0(this.this$0__1, this.$block_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(DefaultScrollableState$scroll$slambda).create_rcuf4x_k$ = function ($this$coroutineScope, completion) {
    var i = new DefaultScrollableState$scroll$slambda(this.this$0__1, this.$scrollPriority_1, this.$block_1, completion);
    i.$this$coroutineScope_1 = $this$coroutineScope;
    return i;
  };
  protoOf(DefaultScrollableState$scroll$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function DefaultScrollableState$scroll$slambda_0(this$0, $scrollPriority, $block, resultContinuation) {
    var i = new DefaultScrollableState$scroll$slambda(this$0, $scrollPriority, $block, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.invoke_d9fzmj_k$($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function DefaultScrollableState(onDelta) {
    this.onDelta_1 = onDelta;
    var tmp = this;
    tmp.scrollScope_1 = new DefaultScrollableState$scrollScope$1(this);
    this.scrollMutex_1 = new MutatorMutex();
    this.isScrollingState_1 = mutableStateOf(false);
  }
  protoOf(DefaultScrollableState).get_onDelta_l2wma8_k$ = function () {
    return this.onDelta_1;
  };
  protoOf(DefaultScrollableState).scroll_6vso98_k$ = function (scrollPriority, block, $completion) {
    return coroutineScope(DefaultScrollableState$scroll$slambda_0(this, scrollPriority, block, null), $completion);
  };
  protoOf(DefaultScrollableState).dispatchRawDelta_tiy71q_k$ = function (delta) {
    return this.onDelta_1(delta);
  };
  protoOf(DefaultScrollableState).get_isScrollInProgress_n6ediq_k$ = function () {
    return this.isScrollingState_1.get_value_j01efc_k$();
  };
  function get_NoPressGesture() {
    _init_properties_TapGestureDetector_kt__k4yygc();
    return NoPressGesture;
  }
  var NoPressGesture;
  function PressGestureScope() {
  }
  function NoPressGesture$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(NoPressGesture$slambda).invoke_b4aedf_k$ = function ($this$null, it, $completion) {
    var tmp = this.create_exjx1j_k$($this$null, it, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(NoPressGesture$slambda).invoke_4tzzq6_k$ = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, PressGestureScope) : false) ? p1 : THROW_CCE();
    return this.invoke_b4aedf_k$(tmp, p2 instanceof Offset_0 ? p2.packedValue_1 : THROW_CCE(), $completion);
  };
  protoOf(NoPressGesture$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(NoPressGesture$slambda).create_exjx1j_k$ = function ($this$null, it, completion) {
    var i = new NoPressGesture$slambda(completion);
    i.$this$null_1 = $this$null;
    i.it_1 = it;
    return i;
  };
  function NoPressGesture$slambda_0(resultContinuation) {
    var i = new NoPressGesture$slambda(resultContinuation);
    var l = function ($this$null, it, $completion) {
      return i.invoke_b4aedf_k$($this$null, it.packedValue_1, $completion);
    };
    l.$arity = 2;
    return l;
  }
  var properties_initialized_TapGestureDetector_kt_lhe8oi;
  function _init_properties_TapGestureDetector_kt__k4yygc() {
    if (!properties_initialized_TapGestureDetector_kt_lhe8oi) {
      properties_initialized_TapGestureDetector_kt_lhe8oi = true;
      NoPressGesture = NoPressGesture$slambda_0(null);
    }
  }
  function offsetOnMainAxis(_this__u8e3s4, orientation) {
    var tmp;
    if (orientation.equals(Orientation_Vertical_getInstance())) {
      tmp = _IntOffset___get_y__impl__2avpwj(_this__u8e3s4.get_offset_bksmdx_k$());
    } else {
      tmp = _IntOffset___get_x__impl__qiqr5o(_this__u8e3s4.get_offset_bksmdx_k$());
    }
    return tmp;
  }
  function get_MinFlingVelocityDp() {
    _init_properties_SnapFlingBehavior_kt__1y2evi();
    return MinFlingVelocityDp;
  }
  var MinFlingVelocityDp;
  var properties_initialized_SnapFlingBehavior_kt_r96zw;
  function _init_properties_SnapFlingBehavior_kt__1y2evi() {
    if (!properties_initialized_SnapFlingBehavior_kt_r96zw) {
      properties_initialized_SnapFlingBehavior_kt_r96zw = true;
      // Inline function 'androidx.compose.ui.unit.dp' call
      MinFlingVelocityDp = _Dp___init__impl__ms3zkb(400);
    }
  }
  function sam$androidx_compose_foundation_gestures_snapping_SnapPositionInLayout$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_foundation_gestures_snapping_SnapPositionInLayout$0).position_v3md0x_k$ = function (layoutSize, itemSize, beforeContentPadding, afterContentPadding, itemIndex) {
    return this.function_1(layoutSize, itemSize, beforeContentPadding, afterContentPadding, itemIndex);
  };
  function SnapPositionInLayout$Companion$CenterToCenter$lambda(layoutSize, itemSize, beforeContentPadding, afterContentPadding, _anonymous_parameter_4__qggqds) {
    var availableLayoutSpace = (layoutSize - beforeContentPadding | 0) - afterContentPadding | 0;
    return (availableLayoutSpace / 2 | 0) - (itemSize / 2 | 0) | 0;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    var tmp_0 = SnapPositionInLayout$Companion$CenterToCenter$lambda;
    tmp.CenterToCenter_1 = new sam$androidx_compose_foundation_gestures_snapping_SnapPositionInLayout$0(tmp_0);
  }
  protoOf(Companion_0).get_CenterToCenter_p0v1ou_k$ = function () {
    return this.CenterToCenter_1;
  };
  var Companion_instance_0;
  function Companion_getInstance_31() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function SnapPositionInLayout() {
  }
  function collectIsFocusedAsState(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-1805515472);
    sourceInformation($composer_0, 'C(collectIsFocusedAsState)65@2219L34,66@2279L414,66@2258L435:FocusInteraction.kt#ywyzhk');
    if (isTraceInProgress()) {
      traceEventStart(-1805515472, $changed, -1, 'androidx.compose.foundation.interaction.collectIsFocusedAsState (FocusInteraction.kt:64)');
    }
    $composer_0.startReplaceableGroup_ip860b_k$(1885674597);
    sourceInformation($composer_0, 'CC(remember):FocusInteraction.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false ? true : it === Companion_getInstance_9().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.foundation.interaction.collectIsFocusedAsState.<anonymous>' call
      var value = mutableStateOf(false);
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    var isFocused = tmp1_group;
    $composer_0.startReplaceableGroup_ip860b_k$(1885674657);
    sourceInformation($composer_0, 'CC(remember):FocusInteraction.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = (($changed & 14 ^ 6) > 4 ? $composer_0.changed_ga7h3f_k$(_this__u8e3s4) : false) ? true : ($changed & 6) === 4;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_1;
    if (invalid ? true : it_0 === Companion_getInstance_9().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.foundation.interaction.collectIsFocusedAsState.<anonymous>' call
      var value_0 = collectIsFocusedAsState$slambda_0(_this__u8e3s4, isFocused, null);
      $composer_0.updateRememberedValue_l1wh71_k$(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp2_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    LaunchedEffect(_this__u8e3s4, tmp2_group, $composer_0, 64 | 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return isFocused;
  }
  function Focus() {
  }
  function Unfocus(focus) {
    this.focus_1 = focus;
  }
  protoOf(Unfocus).get_focus_irhg33_k$ = function () {
    return this.focus_1;
  };
  function FocusInteraction() {
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).emit_t92u1f_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  function collectIsFocusedAsState$slambda$slambda($focusInteractions, $isFocused, resultContinuation) {
    this.$focusInteractions_1 = $focusInteractions;
    this.$isFocused_1 = $isFocused;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(collectIsFocusedAsState$slambda$slambda).invoke_hcr54n_k$ = function (interaction, $completion) {
    var tmp = this.create_c56zqz_k$(interaction, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(collectIsFocusedAsState$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_hcr54n_k$((!(p1 == null) ? isInterface(p1, Interaction) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(collectIsFocusedAsState$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var tmp0_subject = this.interaction_1;
          if (tmp0_subject instanceof Focus) {
            this.$focusInteractions_1.add_utx5q5_k$(this.interaction_1);
          } else {
            if (tmp0_subject instanceof Unfocus) {
              this.$focusInteractions_1.remove_cedx0m_k$(this.interaction_1.focus_1);
            }
          }
          var this_0 = this.$focusInteractions_1;
          this.$isFocused_1.set_value_v1vabv_k$(!this_0.isEmpty_y1axqb_k$());
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(collectIsFocusedAsState$slambda$slambda).create_c56zqz_k$ = function (interaction, completion) {
    var i = new collectIsFocusedAsState$slambda$slambda(this.$focusInteractions_1, this.$isFocused_1, completion);
    i.interaction_1 = interaction;
    return i;
  };
  protoOf(collectIsFocusedAsState$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_c56zqz_k$((!(value == null) ? isInterface(value, Interaction) : false) ? value : THROW_CCE(), completion);
  };
  function collectIsFocusedAsState$slambda$slambda_0($focusInteractions, $isFocused, resultContinuation) {
    var i = new collectIsFocusedAsState$slambda$slambda($focusInteractions, $isFocused, resultContinuation);
    var l = function (interaction, $completion) {
      return i.invoke_hcr54n_k$(interaction, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function collectIsFocusedAsState$slambda($this_collectIsFocusedAsState, $isFocused, resultContinuation) {
    this.$this_collectIsFocusedAsState_1 = $this_collectIsFocusedAsState;
    this.$isFocused_1 = $isFocused;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(collectIsFocusedAsState$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(collectIsFocusedAsState$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(collectIsFocusedAsState$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this;
            tmp_0.focusInteractions0__1 = ArrayList_init_$Create$();
            this.set_state_rjd8d0_k$(1);
            var tmp_1 = this.$this_collectIsFocusedAsState_1.get_interactions_ql02qy_k$();
            var tmp_2 = collectIsFocusedAsState$slambda$slambda_0(this.focusInteractions0__1, this.$isFocused_1, null);
            suspendResult = tmp_1.collect_aksokr_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_2), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(collectIsFocusedAsState$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new collectIsFocusedAsState$slambda(this.$this_collectIsFocusedAsState_1, this.$isFocused_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(collectIsFocusedAsState$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function collectIsFocusedAsState$slambda_0($this_collectIsFocusedAsState, $isFocused, resultContinuation) {
    var i = new collectIsFocusedAsState$slambda($this_collectIsFocusedAsState, $isFocused, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function collectIsHoveredAsState(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(1206586544);
    sourceInformation($composer_0, 'C(collectIsHoveredAsState)65@2151L34,66@2211L411,66@2190L432:HoverInteraction.kt#ywyzhk');
    if (isTraceInProgress()) {
      traceEventStart(1206586544, $changed, -1, 'androidx.compose.foundation.interaction.collectIsHoveredAsState (HoverInteraction.kt:64)');
    }
    $composer_0.startReplaceableGroup_ip860b_k$(-942251131);
    sourceInformation($composer_0, 'CC(remember):HoverInteraction.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false ? true : it === Companion_getInstance_9().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.foundation.interaction.collectIsHoveredAsState.<anonymous>' call
      var value = mutableStateOf(false);
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    var isHovered = tmp1_group;
    $composer_0.startReplaceableGroup_ip860b_k$(-942251071);
    sourceInformation($composer_0, 'CC(remember):HoverInteraction.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = (($changed & 14 ^ 6) > 4 ? $composer_0.changed_ga7h3f_k$(_this__u8e3s4) : false) ? true : ($changed & 6) === 4;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_1;
    if (invalid ? true : it_0 === Companion_getInstance_9().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.foundation.interaction.collectIsHoveredAsState.<anonymous>' call
      var value_0 = collectIsHoveredAsState$slambda_0(_this__u8e3s4, isHovered, null);
      $composer_0.updateRememberedValue_l1wh71_k$(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp2_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    LaunchedEffect(_this__u8e3s4, tmp2_group, $composer_0, 64 | 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return isHovered;
  }
  function Enter() {
  }
  function Exit(enter) {
    this.enter_1 = enter;
  }
  protoOf(Exit).get_enter_iqxcq7_k$ = function () {
    return this.enter_1;
  };
  function HoverInteraction() {
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).emit_t92u1f_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  function collectIsHoveredAsState$slambda$slambda($hoverInteractions, $isHovered, resultContinuation) {
    this.$hoverInteractions_1 = $hoverInteractions;
    this.$isHovered_1 = $isHovered;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(collectIsHoveredAsState$slambda$slambda).invoke_hcr54n_k$ = function (interaction, $completion) {
    var tmp = this.create_c56zqz_k$(interaction, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(collectIsHoveredAsState$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_hcr54n_k$((!(p1 == null) ? isInterface(p1, Interaction) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(collectIsHoveredAsState$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var tmp0_subject = this.interaction_1;
          if (tmp0_subject instanceof Enter) {
            this.$hoverInteractions_1.add_utx5q5_k$(this.interaction_1);
          } else {
            if (tmp0_subject instanceof Exit) {
              this.$hoverInteractions_1.remove_cedx0m_k$(this.interaction_1.enter_1);
            }
          }
          var this_0 = this.$hoverInteractions_1;
          this.$isHovered_1.set_value_v1vabv_k$(!this_0.isEmpty_y1axqb_k$());
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(collectIsHoveredAsState$slambda$slambda).create_c56zqz_k$ = function (interaction, completion) {
    var i = new collectIsHoveredAsState$slambda$slambda(this.$hoverInteractions_1, this.$isHovered_1, completion);
    i.interaction_1 = interaction;
    return i;
  };
  protoOf(collectIsHoveredAsState$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_c56zqz_k$((!(value == null) ? isInterface(value, Interaction) : false) ? value : THROW_CCE(), completion);
  };
  function collectIsHoveredAsState$slambda$slambda_0($hoverInteractions, $isHovered, resultContinuation) {
    var i = new collectIsHoveredAsState$slambda$slambda($hoverInteractions, $isHovered, resultContinuation);
    var l = function (interaction, $completion) {
      return i.invoke_hcr54n_k$(interaction, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function collectIsHoveredAsState$slambda($this_collectIsHoveredAsState, $isHovered, resultContinuation) {
    this.$this_collectIsHoveredAsState_1 = $this_collectIsHoveredAsState;
    this.$isHovered_1 = $isHovered;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(collectIsHoveredAsState$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(collectIsHoveredAsState$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(collectIsHoveredAsState$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this;
            tmp_0.hoverInteractions0__1 = ArrayList_init_$Create$();
            this.set_state_rjd8d0_k$(1);
            var tmp_1 = this.$this_collectIsHoveredAsState_1.get_interactions_ql02qy_k$();
            var tmp_2 = collectIsHoveredAsState$slambda$slambda_0(this.hoverInteractions0__1, this.$isHovered_1, null);
            suspendResult = tmp_1.collect_aksokr_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_2), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(collectIsHoveredAsState$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new collectIsHoveredAsState$slambda(this.$this_collectIsHoveredAsState_1, this.$isHovered_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(collectIsHoveredAsState$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function collectIsHoveredAsState$slambda_0($this_collectIsHoveredAsState, $isHovered, resultContinuation) {
    var i = new collectIsHoveredAsState$slambda($this_collectIsHoveredAsState, $isHovered, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Interaction() {
  }
  function InteractionSource() {
  }
  function MutableInteractionSource() {
  }
  function funMutableInteractionSource() {
    return new MutableInteractionSourceImpl();
  }
  function MutableInteractionSourceImpl() {
    this.interactions_1 = MutableSharedFlow(VOID, 16, BufferOverflow_DROP_OLDEST_getInstance());
  }
  protoOf(MutableInteractionSourceImpl).get_interactions_ql02qy_k$ = function () {
    return this.interactions_1;
  };
  protoOf(MutableInteractionSourceImpl).emit_s7r9uk_k$ = function (interaction, $completion) {
    return this.interactions_1.emit_t92u1f_k$(interaction, $completion);
  };
  protoOf(MutableInteractionSourceImpl).tryEmit_ghf6nc_k$ = function (interaction) {
    return this.interactions_1.tryEmit_ru0jrz_k$(interaction);
  };
  function collectIsPressedAsState(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-1692965168);
    sourceInformation($composer_0, 'C(collectIsPressedAsState)84@3016L34,85@3076L504,85@3055L525:PressInteraction.kt#ywyzhk');
    if (isTraceInProgress()) {
      traceEventStart(-1692965168, $changed, -1, 'androidx.compose.foundation.interaction.collectIsPressedAsState (PressInteraction.kt:83)');
    }
    $composer_0.startReplaceableGroup_ip860b_k$(1714644269);
    sourceInformation($composer_0, 'CC(remember):PressInteraction.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false ? true : it === Companion_getInstance_9().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.foundation.interaction.collectIsPressedAsState.<anonymous>' call
      var value = mutableStateOf(false);
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    var isPressed = tmp1_group;
    $composer_0.startReplaceableGroup_ip860b_k$(1714644329);
    sourceInformation($composer_0, 'CC(remember):PressInteraction.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = (($changed & 14 ^ 6) > 4 ? $composer_0.changed_ga7h3f_k$(_this__u8e3s4) : false) ? true : ($changed & 6) === 4;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_1;
    if (invalid ? true : it_0 === Companion_getInstance_9().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.foundation.interaction.collectIsPressedAsState.<anonymous>' call
      var value_0 = collectIsPressedAsState$slambda_0(_this__u8e3s4, isPressed, null);
      $composer_0.updateRememberedValue_l1wh71_k$(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp2_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    LaunchedEffect(_this__u8e3s4, tmp2_group, $composer_0, 64 | 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return isPressed;
  }
  function Press(pressPosition) {
    this.pressPosition_1 = pressPosition;
  }
  protoOf(Press).get_pressPosition_rjxyft_k$ = function () {
    return this.pressPosition_1;
  };
  function Release(press) {
    this.press_1 = press;
  }
  protoOf(Release).get_press_ix1cey_k$ = function () {
    return this.press_1;
  };
  function Cancel(press) {
    this.press_1 = press;
  }
  protoOf(Cancel).get_press_ix1cey_k$ = function () {
    return this.press_1;
  };
  function PressInteraction() {
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_1(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_1).emit_t92u1f_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  function collectIsPressedAsState$slambda$slambda($pressInteractions, $isPressed, resultContinuation) {
    this.$pressInteractions_1 = $pressInteractions;
    this.$isPressed_1 = $isPressed;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(collectIsPressedAsState$slambda$slambda).invoke_hcr54n_k$ = function (interaction, $completion) {
    var tmp = this.create_c56zqz_k$(interaction, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(collectIsPressedAsState$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_hcr54n_k$((!(p1 == null) ? isInterface(p1, Interaction) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(collectIsPressedAsState$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var tmp0_subject = this.interaction_1;
          if (tmp0_subject instanceof Press) {
            this.$pressInteractions_1.add_utx5q5_k$(this.interaction_1);
          } else {
            if (tmp0_subject instanceof Release) {
              this.$pressInteractions_1.remove_cedx0m_k$(this.interaction_1.press_1);
            } else {
              if (tmp0_subject instanceof Cancel) {
                this.$pressInteractions_1.remove_cedx0m_k$(this.interaction_1.press_1);
              }
            }
          }
          var this_0 = this.$pressInteractions_1;
          this.$isPressed_1.set_value_v1vabv_k$(!this_0.isEmpty_y1axqb_k$());
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(collectIsPressedAsState$slambda$slambda).create_c56zqz_k$ = function (interaction, completion) {
    var i = new collectIsPressedAsState$slambda$slambda(this.$pressInteractions_1, this.$isPressed_1, completion);
    i.interaction_1 = interaction;
    return i;
  };
  protoOf(collectIsPressedAsState$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_c56zqz_k$((!(value == null) ? isInterface(value, Interaction) : false) ? value : THROW_CCE(), completion);
  };
  function collectIsPressedAsState$slambda$slambda_0($pressInteractions, $isPressed, resultContinuation) {
    var i = new collectIsPressedAsState$slambda$slambda($pressInteractions, $isPressed, resultContinuation);
    var l = function (interaction, $completion) {
      return i.invoke_hcr54n_k$(interaction, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function collectIsPressedAsState$slambda($this_collectIsPressedAsState, $isPressed, resultContinuation) {
    this.$this_collectIsPressedAsState_1 = $this_collectIsPressedAsState;
    this.$isPressed_1 = $isPressed;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(collectIsPressedAsState$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(collectIsPressedAsState$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(collectIsPressedAsState$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this;
            tmp_0.pressInteractions0__1 = ArrayList_init_$Create$();
            this.set_state_rjd8d0_k$(1);
            var tmp_1 = this.$this_collectIsPressedAsState_1.get_interactions_ql02qy_k$();
            var tmp_2 = collectIsPressedAsState$slambda$slambda_0(this.pressInteractions0__1, this.$isPressed_1, null);
            suspendResult = tmp_1.collect_aksokr_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_1(tmp_2), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(collectIsPressedAsState$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new collectIsPressedAsState$slambda(this.$this_collectIsPressedAsState_1, this.$isPressed_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(collectIsPressedAsState$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function collectIsPressedAsState$slambda_0($this_collectIsPressedAsState, $isPressed, resultContinuation) {
    var i = new collectIsPressedAsState$slambda($this_collectIsPressedAsState, $isPressed, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function LazyItemScope() {
  }
  function _set_maxWidthState__o3eqly($this, _set____db54di) {
    $this.maxWidthState_1 = _set____db54di;
  }
  function _get_maxWidthState__8vn83m($this) {
    return $this.maxWidthState_1;
  }
  function _set_maxHeightState__tl6k0f($this, _set____db54di) {
    $this.maxHeightState_1 = _set____db54di;
  }
  function _get_maxHeightState__4233yz($this) {
    return $this.maxHeightState_1;
  }
  function LazyItemScopeImpl() {
    this.maxWidthState_1 = mutableIntStateOf(IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$());
    this.maxHeightState_1 = mutableIntStateOf(IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$());
  }
  protoOf(LazyItemScopeImpl).setMaxSize_kuihf7_k$ = function (width, height) {
    this.maxWidthState_1.set_intValue_s3g6dz_k$(width);
    this.maxHeightState_1.set_intValue_s3g6dz_k$(height);
  };
  protoOf(LazyItemScopeImpl).fillParentMaxSize_4i84f1_k$ = function (_this__u8e3s4, fraction) {
    var tmp0_widthState = this.maxWidthState_1;
    var tmp1_heightState = this.maxHeightState_1;
    return _this__u8e3s4.then_g5qrxq_k$(new ParentSizeElement(fraction, tmp0_widthState, tmp1_heightState, 'fillParentMaxSize'));
  };
  protoOf(LazyItemScopeImpl).fillParentMaxWidth_e34z96_k$ = function (_this__u8e3s4, fraction) {
    var tmp0_widthState = this.maxWidthState_1;
    return _this__u8e3s4.then_g5qrxq_k$(new ParentSizeElement(fraction, tmp0_widthState, VOID, 'fillParentMaxWidth'));
  };
  protoOf(LazyItemScopeImpl).fillParentMaxHeight_xr2awn_k$ = function (_this__u8e3s4, fraction) {
    var tmp0_heightState = this.maxHeightState_1;
    return _this__u8e3s4.then_g5qrxq_k$(new ParentSizeElement(fraction, VOID, tmp0_heightState, 'fillParentMaxHeight'));
  };
  protoOf(LazyItemScopeImpl).animateItemPlacement_igbi2x_k$ = function (_this__u8e3s4, animationSpec) {
    return animateItem(_this__u8e3s4, null, animationSpec);
  };
  function ParentSizeElement(fraction, widthState, heightState, inspectorName) {
    widthState = widthState === VOID ? null : widthState;
    heightState = heightState === VOID ? null : heightState;
    ModifierNodeElement.call(this);
    this.fraction_1 = fraction;
    this.widthState_1 = widthState;
    this.heightState_1 = heightState;
    this.inspectorName_1 = inspectorName;
  }
  protoOf(ParentSizeElement).get_fraction_bvkonf_k$ = function () {
    return this.fraction_1;
  };
  protoOf(ParentSizeElement).get_widthState_ofbw8k_k$ = function () {
    return this.widthState_1;
  };
  protoOf(ParentSizeElement).get_heightState_3d0kan_k$ = function () {
    return this.heightState_1;
  };
  protoOf(ParentSizeElement).get_inspectorName_jx58u1_k$ = function () {
    return this.inspectorName_1;
  };
  protoOf(ParentSizeElement).create_md4cuc_k$ = function () {
    return new ParentSizeNode(this.fraction_1, this.widthState_1, this.heightState_1);
  };
  protoOf(ParentSizeElement).update_fhgce2_k$ = function (node) {
    node.fraction_1 = this.fraction_1;
    node.widthState_1 = this.widthState_1;
    node.heightState_1 = this.heightState_1;
  };
  protoOf(ParentSizeElement).update_9wd57p_k$ = function (node) {
    return this.update_fhgce2_k$(node instanceof ParentSizeNode ? node : THROW_CCE());
  };
  protoOf(ParentSizeElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParentSizeElement))
      return false;
    return (this.fraction_1 === other.fraction_1 ? equals(this.widthState_1, other.widthState_1) : false) ? equals(this.heightState_1, other.heightState_1) : false;
  };
  protoOf(ParentSizeElement).hashCode = function () {
    var tmp0_safe_receiver = this.widthState_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(31, result);
    var tmp2_safe_receiver = this.heightState_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : hashCode(tmp2_safe_receiver);
    result = tmp + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    result = imul(31, result) + getNumberHashCode(this.fraction_1) | 0;
    return result;
  };
  protoOf(ParentSizeElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_wkmnld_k$(this.inspectorName_1);
    _this__u8e3s4.set_value_rjqr2d_k$(this.fraction_1);
  };
  function animateItem(_this__u8e3s4, appearanceSpec, placementSpec) {
    appearanceSpec = appearanceSpec === VOID ? tween(220) : appearanceSpec;
    placementSpec = placementSpec === VOID ? spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$(), new IntOffset(get_VisibilityThreshold(Companion_getInstance_11()))) : placementSpec;
    var tmp;
    if (appearanceSpec == null ? placementSpec == null : false) {
      tmp = _this__u8e3s4;
    } else {
      tmp = _this__u8e3s4.then_g5qrxq_k$(new AnimateItemElement(appearanceSpec, placementSpec));
    }
    return tmp;
  }
  function ParentSizeNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.place$default_lcv1ed_k$($placeable, 0, 0);
      return Unit_getInstance();
    };
  }
  function ParentSizeNode(fraction, widthState, heightState) {
    widthState = widthState === VOID ? null : widthState;
    heightState = heightState === VOID ? null : heightState;
    Node.call(this);
    this.fraction_1 = fraction;
    this.widthState_1 = widthState;
    this.heightState_1 = heightState;
  }
  protoOf(ParentSizeNode).set_fraction_7zdj49_k$ = function (_set____db54di) {
    this.fraction_1 = _set____db54di;
  };
  protoOf(ParentSizeNode).get_fraction_bvkonf_k$ = function () {
    return this.fraction_1;
  };
  protoOf(ParentSizeNode).set_widthState_xnfu2q_k$ = function (_set____db54di) {
    this.widthState_1 = _set____db54di;
  };
  protoOf(ParentSizeNode).get_widthState_ofbw8k_k$ = function () {
    return this.widthState_1;
  };
  protoOf(ParentSizeNode).set_heightState_19ysub_k$ = function (_set____db54di) {
    this.heightState_1 = _set____db54di;
  };
  protoOf(ParentSizeNode).get_heightState_3d0kan_k$ = function () {
    return this.heightState_1;
  };
  protoOf(ParentSizeNode).measure_z885gt_k$ = function (_this__u8e3s4, measurable, constraints) {
    var tmp0_safe_receiver = this.widthState_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.lazy.ParentSizeNode.measure.<anonymous>' call
      var tmp_0;
      if (!(tmp0_safe_receiver.get_value_j01efc_k$() === Companion_getInstance_12().get_Infinity_rvchkf_k$())) {
        // Inline function 'kotlin.math.roundToInt' call
        var this_0 = tmp0_safe_receiver.get_value_j01efc_k$() * this.fraction_1;
        tmp_0 = roundToInt(this_0);
      } else {
        tmp_0 = Companion_getInstance_12().get_Infinity_rvchkf_k$();
      }
      tmp = tmp_0;
    }
    var tmp1_elvis_lhs = tmp;
    var width = tmp1_elvis_lhs == null ? Companion_getInstance_12().get_Infinity_rvchkf_k$() : tmp1_elvis_lhs;
    var tmp2_safe_receiver = this.heightState_1;
    var tmp_1;
    if (tmp2_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.lazy.ParentSizeNode.measure.<anonymous>' call
      var tmp_2;
      if (!(tmp2_safe_receiver.get_value_j01efc_k$() === Companion_getInstance_12().get_Infinity_rvchkf_k$())) {
        // Inline function 'kotlin.math.roundToInt' call
        var this_1 = tmp2_safe_receiver.get_value_j01efc_k$() * this.fraction_1;
        tmp_2 = roundToInt(this_1);
      } else {
        tmp_2 = Companion_getInstance_12().get_Infinity_rvchkf_k$();
      }
      tmp_1 = tmp_2;
    }
    var tmp3_elvis_lhs = tmp_1;
    var height = tmp3_elvis_lhs == null ? Companion_getInstance_12().get_Infinity_rvchkf_k$() : tmp3_elvis_lhs;
    var tmp4_minWidth = !(width === Companion_getInstance_12().get_Infinity_rvchkf_k$()) ? width : _Constraints___get_minWidth__impl__hi9lfi(constraints);
    var tmp5_minHeight = !(height === Companion_getInstance_12().get_Infinity_rvchkf_k$()) ? height : _Constraints___get_minHeight__impl__ev4bgx(constraints);
    var tmp6_maxWidth = !(width === Companion_getInstance_12().get_Infinity_rvchkf_k$()) ? width : _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var tmp7_maxHeight = !(height === Companion_getInstance_12().get_Infinity_rvchkf_k$()) ? height : _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    var childConstraints = Constraints(tmp4_minWidth, tmp6_maxWidth, tmp5_minHeight, tmp7_maxHeight);
    var placeable = measurable.measure_4dmfk1_k$(childConstraints);
    var tmp_3 = placeable.get_width_j0q4yl_k$();
    var tmp_4 = placeable.get_height_e7t92o_k$();
    return _this__u8e3s4.layout$default_n19e5l_k$(tmp_3, tmp_4, VOID, ParentSizeNode$measure$lambda(placeable));
  };
  function AnimateItemElement(appearanceSpec, placementSpec) {
    ModifierNodeElement.call(this);
    this.appearanceSpec_1 = appearanceSpec;
    this.placementSpec_1 = placementSpec;
  }
  protoOf(AnimateItemElement).get_appearanceSpec_987hrs_k$ = function () {
    return this.appearanceSpec_1;
  };
  protoOf(AnimateItemElement).get_placementSpec_cshd61_k$ = function () {
    return this.placementSpec_1;
  };
  protoOf(AnimateItemElement).create_md4cuc_k$ = function () {
    return new LazyLayoutAnimationSpecsNode(this.appearanceSpec_1, this.placementSpec_1);
  };
  protoOf(AnimateItemElement).update_22qfig_k$ = function (node) {
    node.set_appearanceSpec_r5i506_k$(this.appearanceSpec_1);
    node.set_placementSpec_ooa865_k$(this.placementSpec_1);
  };
  protoOf(AnimateItemElement).update_9wd57p_k$ = function (node) {
    return this.update_22qfig_k$(node instanceof LazyLayoutAnimationSpecsNode ? node : THROW_CCE());
  };
  protoOf(AnimateItemElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_wkmnld_k$('animateItemPlacement');
    _this__u8e3s4.set_value_rjqr2d_k$(this.placementSpec_1);
  };
  protoOf(AnimateItemElement).component1_7eebsc_k$ = function () {
    return this.appearanceSpec_1;
  };
  protoOf(AnimateItemElement).component2_7eebsb_k$ = function () {
    return this.placementSpec_1;
  };
  protoOf(AnimateItemElement).copy_m7ynx3_k$ = function (appearanceSpec, placementSpec) {
    return new AnimateItemElement(appearanceSpec, placementSpec);
  };
  protoOf(AnimateItemElement).copy$default_tyxr8l_k$ = function (appearanceSpec, placementSpec, $super) {
    appearanceSpec = appearanceSpec === VOID ? this.appearanceSpec_1 : appearanceSpec;
    placementSpec = placementSpec === VOID ? this.placementSpec_1 : placementSpec;
    return $super === VOID ? this.copy_m7ynx3_k$(appearanceSpec, placementSpec) : $super.copy_m7ynx3_k$.call(this, appearanceSpec, placementSpec);
  };
  protoOf(AnimateItemElement).toString = function () {
    return 'AnimateItemElement(appearanceSpec=' + this.appearanceSpec_1 + ', placementSpec=' + this.placementSpec_1 + ')';
  };
  protoOf(AnimateItemElement).hashCode = function () {
    var result = this.appearanceSpec_1 == null ? 0 : hashCode(this.appearanceSpec_1);
    result = imul(result, 31) + (this.placementSpec_1 == null ? 0 : hashCode(this.placementSpec_1)) | 0;
    return result;
  };
  protoOf(AnimateItemElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AnimateItemElement))
      return false;
    var tmp0_other_with_cast = other instanceof AnimateItemElement ? other : THROW_CCE();
    if (!equals(this.appearanceSpec_1, tmp0_other_with_cast.appearanceSpec_1))
      return false;
    if (!equals(this.placementSpec_1, tmp0_other_with_cast.placementSpec_1))
      return false;
    return true;
  };
  function get_EmptyArray() {
    _init_properties_LazyListItemAnimator_kt__dul14k();
    return EmptyArray;
  }
  var EmptyArray;
  function _set_animations__2tmn7s($this, _set____db54di) {
    $this.animations_1 = _set____db54di;
  }
  function _get_keyToItemInfoMap__nsc8mu($this) {
    return $this.keyToItemInfoMap_1;
  }
  function _set_keyIndexMap__o5qz5w($this, _set____db54di) {
    $this.keyIndexMap_1 = _set____db54di;
  }
  function _get_keyIndexMap__64n760($this) {
    return $this.keyIndexMap_1;
  }
  function _set_firstVisibleIndex__es8ivf($this, _set____db54di) {
    $this.firstVisibleIndex_1 = _set____db54di;
  }
  function _get_firstVisibleIndex__yj2mtd($this) {
    return $this.firstVisibleIndex_1;
  }
  function _get_movingAwayKeys__adh0uz($this) {
    return $this.movingAwayKeys_1;
  }
  function _get_movingInFromStartBound__g9mw8i($this) {
    return $this.movingInFromStartBound_1;
  }
  function _get_movingInFromEndBound__uwfzbp($this) {
    return $this.movingInFromEndBound_1;
  }
  function _get_movingAwayToStartBound__dxobmg($this) {
    return $this.movingAwayToStartBound_1;
  }
  function _get_movingAwayToEndBound__j28841($this) {
    return $this.movingAwayToEndBound_1;
  }
  function initializeAnimation($this, item, mainAxisOffset, itemInfo) {
    var firstPlaceableOffset = item.getOffset_hf9732_k$(0);
    var tmp;
    if (item.get_isVertical_4x9emh_k$()) {
      tmp = IntOffset__copy$default_impl_1y5pbb(firstPlaceableOffset, VOID, mainAxisOffset);
    } else {
      tmp = IntOffset__copy$default_impl_1y5pbb(firstPlaceableOffset, mainAxisOffset);
    }
    var targetFirstPlaceableOffset = tmp;
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var indexedObject = itemInfo.animations_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var item_0 = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.foundation.lazy.LazyListItemAnimator.initializeAnimation.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      if (!(item_0 == null)) {
        // Inline function 'androidx.compose.ui.unit.IntOffset.minus' call
        var this_0 = item.getOffset_hf9732_k$(tmp1);
        var diffToFirstPlaceableOffset = IntOffset_0(_IntOffset___get_x__impl__qiqr5o(this_0) - _IntOffset___get_x__impl__qiqr5o(firstPlaceableOffset) | 0, _IntOffset___get_y__impl__2avpwj(this_0) - _IntOffset___get_y__impl__2avpwj(firstPlaceableOffset) | 0);
        // Inline function 'androidx.compose.ui.unit.IntOffset.plus' call
        var tmp$ret$1 = IntOffset_0(_IntOffset___get_x__impl__qiqr5o(targetFirstPlaceableOffset) + _IntOffset___get_x__impl__qiqr5o(diffToFirstPlaceableOffset) | 0, _IntOffset___get_y__impl__2avpwj(targetFirstPlaceableOffset) + _IntOffset___get_y__impl__2avpwj(diffToFirstPlaceableOffset) | 0);
        item_0.set_rawOffset_91xt99_k$(tmp$ret$1);
      }
    }
  }
  function initializeAnimation$default($this, item, mainAxisOffset, itemInfo, $super) {
    itemInfo = itemInfo === VOID ? getValue($this.keyToItemInfoMap_1, item.get_key_18j28a_k$()) : itemInfo;
    return initializeAnimation($this, item, mainAxisOffset, itemInfo);
  }
  function startPlacementAnimationsIfNeeded($this, item) {
    var itemInfo = getValue($this.keyToItemInfoMap_1, item.get_key_18j28a_k$());
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var indexedObject = itemInfo.animations_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var item_0 = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.foundation.lazy.LazyListItemAnimator.startPlacementAnimationsIfNeeded.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      if (!(item_0 == null)) {
        var newTarget = item.getOffset_hf9732_k$(tmp1);
        var currentTarget = item_0.get_rawOffset_3ik8vz_k$();
        if (!equals(currentTarget, Companion_getInstance_34().get_NotInitialized_kwrmrr_k$()) ? !equals(currentTarget, newTarget) : false) {
          // Inline function 'androidx.compose.ui.unit.IntOffset.minus' call
          var tmp$ret$0 = IntOffset_0(_IntOffset___get_x__impl__qiqr5o(newTarget) - _IntOffset___get_x__impl__qiqr5o(currentTarget) | 0, _IntOffset___get_y__impl__2avpwj(newTarget) - _IntOffset___get_y__impl__2avpwj(currentTarget) | 0);
          item_0.animatePlacementDelta_c53shl_k$(tmp$ret$0);
        }
        item_0.set_rawOffset_91xt99_k$(newTarget);
      }
    }
  }
  function _get_hasAnimations__pyw8qw(_this__u8e3s4, $this) {
    // Inline function 'kotlin.repeat' call
    var times = _this__u8e3s4.get_placeablesCount_3f5k0k_k$();
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.foundation.lazy.LazyListItemAnimator.<get-hasAnimations>.<anonymous>' call
        if (get_specs(_this__u8e3s4.getParentData_dqnln6_k$(index)) == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          return true;
        }
      }
       while (inductionVariable < times);
    return false;
  }
  function ItemInfo() {
    this.animations_1 = get_EmptyArray();
  }
  protoOf(ItemInfo).get_animations_ez9gco_k$ = function () {
    return this.animations_1;
  };
  protoOf(ItemInfo).updateAnimation_nv5v7k_k$ = function (positionedItem, coroutineScope) {
    var inductionVariable = positionedItem.get_placeablesCount_3f5k0k_k$();
    var last = this.animations_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_safe_receiver = this.animations_1[i];
        if (tmp1_safe_receiver == null)
          null;
        else {
          tmp1_safe_receiver.stopAnimations_7tom2n_k$();
        }
      }
       while (inductionVariable < last);
    if (!(this.animations_1.length === positionedItem.get_placeablesCount_3f5k0k_k$())) {
      this.animations_1 = copyOf(this.animations_1, positionedItem.get_placeablesCount_3f5k0k_k$());
    }
    // Inline function 'kotlin.repeat' call
    var times = positionedItem.get_placeablesCount_3f5k0k_k$();
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < times)
      do {
        var index = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.foundation.lazy.ItemInfo.updateAnimation.<anonymous>' call
        var specs = get_specs(positionedItem.getParentData_dqnln6_k$(index));
        if (specs == null) {
          var tmp0_safe_receiver = this.animations_1[index];
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.stopAnimations_7tom2n_k$();
          }
          this.animations_1[index] = null;
        } else {
          var tmp1_elvis_lhs = this.animations_1[index];
          var tmp;
          if (tmp1_elvis_lhs == null) {
            // Inline function 'kotlin.also' call
            var this_0 = new LazyLayoutAnimation(coroutineScope);
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.foundation.lazy.ItemInfo.updateAnimation.<anonymous>.<anonymous>' call
            this.animations_1[index] = this_0;
            tmp = this_0;
          } else {
            tmp = tmp1_elvis_lhs;
          }
          var animation = tmp;
          animation.set_appearanceSpec_r5i506_k$(specs.get_appearanceSpec_987hrs_k$());
          animation.set_placementSpec_ooa865_k$(specs.get_placementSpec_cshd61_k$());
        }
      }
       while (inductionVariable_0 < times);
  };
  function sam$kotlin_Comparator$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).compare_bczr_k$ = function (a, b) {
    return this.function_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.compare_bczr_k$(a, b);
  };
  function LazyListItemAnimator$onMeasured$lambda($previousKeyToIndexMap) {
    return function (a, b) {
      // Inline function 'kotlin.comparisons.compareValuesBy' call
      // Inline function 'androidx.compose.foundation.lazy.LazyListItemAnimator.onMeasured.<anonymous>' call
      var tmp = $previousKeyToIndexMap.getIndex_xxb61u_k$(b.get_key_18j28a_k$());
      // Inline function 'androidx.compose.foundation.lazy.LazyListItemAnimator.onMeasured.<anonymous>' call
      var tmp$ret$1 = $previousKeyToIndexMap.getIndex_xxb61u_k$(a.get_key_18j28a_k$());
      return compareValues(tmp, tmp$ret$1);
    };
  }
  function LazyListItemAnimator$onMeasured$lambda_0($previousKeyToIndexMap) {
    return function (a, b) {
      // Inline function 'kotlin.comparisons.compareValuesBy' call
      // Inline function 'androidx.compose.foundation.lazy.LazyListItemAnimator.onMeasured.<anonymous>' call
      var tmp = $previousKeyToIndexMap.getIndex_xxb61u_k$(a.get_key_18j28a_k$());
      // Inline function 'androidx.compose.foundation.lazy.LazyListItemAnimator.onMeasured.<anonymous>' call
      var tmp$ret$1 = $previousKeyToIndexMap.getIndex_xxb61u_k$(b.get_key_18j28a_k$());
      return compareValues(tmp, tmp$ret$1);
    };
  }
  function LazyListItemAnimator$onMeasured$lambda_1($keyIndexMap) {
    return function (a, b) {
      // Inline function 'kotlin.comparisons.compareValuesBy' call
      // Inline function 'androidx.compose.foundation.lazy.LazyListItemAnimator.onMeasured.<anonymous>' call
      var tmp = $keyIndexMap.getIndex_xxb61u_k$(b.get_key_18j28a_k$());
      // Inline function 'androidx.compose.foundation.lazy.LazyListItemAnimator.onMeasured.<anonymous>' call
      var tmp$ret$1 = $keyIndexMap.getIndex_xxb61u_k$(a.get_key_18j28a_k$());
      return compareValues(tmp, tmp$ret$1);
    };
  }
  function LazyListItemAnimator$onMeasured$lambda_2($keyIndexMap) {
    return function (a, b) {
      // Inline function 'kotlin.comparisons.compareValuesBy' call
      // Inline function 'androidx.compose.foundation.lazy.LazyListItemAnimator.onMeasured.<anonymous>' call
      var tmp = $keyIndexMap.getIndex_xxb61u_k$(a.get_key_18j28a_k$());
      // Inline function 'androidx.compose.foundation.lazy.LazyListItemAnimator.onMeasured.<anonymous>' call
      var tmp$ret$1 = $keyIndexMap.getIndex_xxb61u_k$(b.get_key_18j28a_k$());
      return compareValues(tmp, tmp$ret$1);
    };
  }
  function LazyListItemAnimator() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.keyToItemInfoMap_1 = LinkedHashMap_init_$Create$();
    this.keyIndexMap_1 = null;
    this.firstVisibleIndex_1 = 0;
    this.movingAwayKeys_1 = LinkedHashSet_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.movingInFromStartBound_1 = ArrayList_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.movingInFromEndBound_1 = ArrayList_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_2.movingAwayToStartBound_1 = ArrayList_init_$Create$();
    var tmp_3 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_3.movingAwayToEndBound_1 = ArrayList_init_$Create$();
  }
  protoOf(LazyListItemAnimator).onMeasured_duzzti_k$ = function (consumedScroll, layoutWidth, layoutHeight, positionedItems, itemProvider, isVertical, isLookingAhead, hasLookaheadOccurred, coroutineScope) {
    var previousKeyToIndexMap = this.keyIndexMap_1;
    var keyIndexMap = itemProvider.get_keyIndexMap_54cmgw_k$();
    this.keyIndexMap_1 = keyIndexMap;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastAny' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last_0 = positionedItems.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last_0)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = positionedItems.get_c1px32_k$(index);
          // Inline function 'androidx.compose.ui.util.fastAny.<anonymous>' call
          // Inline function 'androidx.compose.foundation.lazy.LazyListItemAnimator.onMeasured.<anonymous>' call
          if (_get_hasAnimations__pyw8qw(item, this)) {
            tmp$ret$1 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last_0);
      tmp$ret$1 = false;
    }
    var hasAnimations = tmp$ret$1;
    if (!hasAnimations ? this.keyToItemInfoMap_1.isEmpty_y1axqb_k$() : false) {
      this.reset_5u6xz3_k$();
      return Unit_getInstance();
    }
    var previousFirstVisibleIndex = this.firstVisibleIndex_1;
    var tmp = this;
    var tmp0_safe_receiver = firstOrNull(positionedItems);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_index_it478p_k$();
    tmp.firstVisibleIndex_1 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var mainAxisLayoutSize = isVertical ? layoutHeight : layoutWidth;
    var tmp_0;
    if (isVertical) {
      tmp_0 = IntOffset_0(0, consumedScroll);
    } else {
      tmp_0 = IntOffset_0(consumedScroll, 0);
    }
    var scrollOffset = tmp_0;
    var shouldSetupAnimation = isLookingAhead ? true : !hasLookaheadOccurred;
    this.movingAwayKeys_1.addAll_4lagoh_k$(this.keyToItemInfoMap_1.get_keys_wop4xp_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_1 = positionedItems.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_1)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = positionedItems.get_c1px32_k$(index_0);
        // Inline function 'androidx.compose.foundation.lazy.LazyListItemAnimator.onMeasured.<anonymous>' call
        this.movingAwayKeys_1.remove_cedx0m_k$(item_0.get_key_18j28a_k$());
        if (_get_hasAnimations__pyw8qw(item_0, this)) {
          var itemInfo = this.keyToItemInfoMap_1.get_wei43m_k$(item_0.get_key_18j28a_k$());
          if (itemInfo == null) {
            var newItemInfo = new ItemInfo();
            newItemInfo.updateAnimation_nv5v7k_k$(item_0, coroutineScope);
            // Inline function 'kotlin.collections.set' call
            var this_0 = this.keyToItemInfoMap_1;
            var key = item_0.get_key_18j28a_k$();
            this_0.put_4fpzoq_k$(key, newItemInfo);
            var tmp1_elvis_lhs_0 = previousKeyToIndexMap == null ? null : previousKeyToIndexMap.getIndex_xxb61u_k$(item_0.get_key_18j28a_k$());
            var previousIndex = tmp1_elvis_lhs_0 == null ? -1 : tmp1_elvis_lhs_0;
            if (!(item_0.get_index_it478p_k$() === previousIndex) ? !(previousIndex === -1) : false) {
              if (previousIndex < previousFirstVisibleIndex) {
                this.movingInFromStartBound_1.add_utx5q5_k$(item_0);
              } else {
                this.movingInFromEndBound_1.add_utx5q5_k$(item_0);
              }
            } else {
              // Inline function 'kotlin.let' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'androidx.compose.foundation.lazy.LazyListItemAnimator.onMeasured.<anonymous>.<anonymous>' call
              var it = item_0.getOffset_hf9732_k$(0);
              var tmp$ret$3 = item_0.get_isVertical_4x9emh_k$() ? _IntOffset___get_y__impl__2avpwj(it) : _IntOffset___get_x__impl__qiqr5o(it);
              initializeAnimation(this, item_0, tmp$ret$3, newItemInfo);
              if (previousIndex === -1 ? !(previousKeyToIndexMap == null) : false) {
                // Inline function 'kotlin.collections.forEach' call
                var indexedObject = newItemInfo.animations_1;
                var inductionVariable_1 = 0;
                var last_2 = indexedObject.length;
                while (inductionVariable_1 < last_2) {
                  var element = indexedObject[inductionVariable_1];
                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                  // Inline function 'androidx.compose.foundation.lazy.LazyListItemAnimator.onMeasured.<anonymous>.<anonymous>' call
                  if (element == null)
                    null;
                  else {
                    element.animateAppearance_uqfvpx_k$();
                  }
                }
              }
            }
          } else {
            if (shouldSetupAnimation) {
              itemInfo.updateAnimation_nv5v7k_k$(item_0, coroutineScope);
              // Inline function 'kotlin.collections.forEach' call
              var indexedObject_0 = itemInfo.animations_1;
              var inductionVariable_2 = 0;
              var last_3 = indexedObject_0.length;
              while (inductionVariable_2 < last_3) {
                var element_0 = indexedObject_0[inductionVariable_2];
                inductionVariable_2 = inductionVariable_2 + 1 | 0;
                // Inline function 'androidx.compose.foundation.lazy.LazyListItemAnimator.onMeasured.<anonymous>.<anonymous>' call
                if (!(element_0 == null) ? !equals(element_0.get_rawOffset_3ik8vz_k$(), Companion_getInstance_34().get_NotInitialized_kwrmrr_k$()) : false) {
                  // Inline function 'androidx.compose.ui.unit.IntOffset.plus' call
                  var this_1 = element_0.get_rawOffset_3ik8vz_k$();
                  var tmp$ret$4 = IntOffset_0(_IntOffset___get_x__impl__qiqr5o(this_1) + _IntOffset___get_x__impl__qiqr5o(scrollOffset) | 0, _IntOffset___get_y__impl__2avpwj(this_1) + _IntOffset___get_y__impl__2avpwj(scrollOffset) | 0);
                  element_0.set_rawOffset_91xt99_k$(tmp$ret$4);
                }
              }
              startPlacementAnimationsIfNeeded(this, item_0);
            }
          }
        } else {
          this.keyToItemInfoMap_1.remove_gppy8k_k$(item_0.get_key_18j28a_k$());
        }
      }
       while (inductionVariable_0 <= last_1);
    var accumulatedOffset = 0;
    if (shouldSetupAnimation ? !(previousKeyToIndexMap == null) : false) {
      // Inline function 'kotlin.collections.sortByDescending' call
      var this_2 = this.movingInFromStartBound_1;
      if (this_2.get_size_woubt6_k$() > 1) {
        // Inline function 'kotlin.comparisons.compareByDescending' call
        var tmp_1 = LazyListItemAnimator$onMeasured$lambda(previousKeyToIndexMap);
        var tmp$ret$5 = new sam$kotlin_Comparator$0(tmp_1);
        sortWith(this_2, tmp$ret$5);
      }
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var this_3 = this.movingInFromStartBound_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_3 = 0;
      var last_4 = this_3.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable_3 <= last_4)
        do {
          var index_1 = inductionVariable_3;
          inductionVariable_3 = inductionVariable_3 + 1 | 0;
          var item_1 = this_3.get_c1px32_k$(index_1);
          // Inline function 'androidx.compose.foundation.lazy.LazyListItemAnimator.onMeasured.<anonymous>' call
          accumulatedOffset = accumulatedOffset + item_1.get_sizeWithSpacings_q8axgg_k$() | 0;
          var mainAxisOffset = 0 - accumulatedOffset | 0;
          initializeAnimation$default(this, item_1, mainAxisOffset);
          startPlacementAnimationsIfNeeded(this, item_1);
        }
         while (inductionVariable_3 <= last_4);
      accumulatedOffset = 0;
      // Inline function 'kotlin.collections.sortBy' call
      var this_4 = this.movingInFromEndBound_1;
      if (this_4.get_size_woubt6_k$() > 1) {
        // Inline function 'kotlin.comparisons.compareBy' call
        var tmp_2 = LazyListItemAnimator$onMeasured$lambda_0(previousKeyToIndexMap);
        var tmp$ret$6 = new sam$kotlin_Comparator$0(tmp_2);
        sortWith(this_4, tmp$ret$6);
      }
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var this_5 = this.movingInFromEndBound_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_4 = 0;
      var last_5 = this_5.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable_4 <= last_5)
        do {
          var index_2 = inductionVariable_4;
          inductionVariable_4 = inductionVariable_4 + 1 | 0;
          var item_2 = this_5.get_c1px32_k$(index_2);
          // Inline function 'androidx.compose.foundation.lazy.LazyListItemAnimator.onMeasured.<anonymous>' call
          var mainAxisOffset_0 = mainAxisLayoutSize + accumulatedOffset | 0;
          accumulatedOffset = accumulatedOffset + item_2.get_sizeWithSpacings_q8axgg_k$() | 0;
          initializeAnimation$default(this, item_2, mainAxisOffset_0);
          startPlacementAnimationsIfNeeded(this, item_2);
        }
         while (inductionVariable_4 <= last_5);
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.movingAwayKeys_1.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element_1 = tmp0_iterator.next_20eer_k$();
      // Inline function 'androidx.compose.foundation.lazy.LazyListItemAnimator.onMeasured.<anonymous>' call
      var newIndex = keyIndexMap.getIndex_xxb61u_k$(element_1);
      if (newIndex === -1) {
        this.keyToItemInfoMap_1.remove_gppy8k_k$(element_1);
      } else {
        var item_3 = itemProvider.getAndMeasure_hxv7zv_k$(newIndex);
        item_3.set_nonScrollableItem_6u8ted_k$(true);
        var itemInfo_0 = getValue(this.keyToItemInfoMap_1, element_1);
        var tmp$ret$8;
        $l$block_0: {
          // Inline function 'kotlin.collections.any' call
          var indexedObject_1 = itemInfo_0.animations_1;
          var inductionVariable_5 = 0;
          var last_6 = indexedObject_1.length;
          while (inductionVariable_5 < last_6) {
            var element_2 = indexedObject_1[inductionVariable_5];
            inductionVariable_5 = inductionVariable_5 + 1 | 0;
            // Inline function 'androidx.compose.foundation.lazy.LazyListItemAnimator.onMeasured.<anonymous>.<anonymous>' call
            if ((element_2 == null ? null : element_2.get_isPlacementAnimationInProgress_h8jcfw_k$()) === true) {
              tmp$ret$8 = true;
              break $l$block_0;
            }
          }
          tmp$ret$8 = false;
        }
        var inProgress = tmp$ret$8;
        var tmp_3;
        if (!inProgress) {
          tmp_3 = newIndex === (previousKeyToIndexMap == null ? null : previousKeyToIndexMap.getIndex_xxb61u_k$(element_1));
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          this.keyToItemInfoMap_1.remove_gppy8k_k$(element_1);
        } else {
          if (newIndex < this.firstVisibleIndex_1) {
            this.movingAwayToStartBound_1.add_utx5q5_k$(item_3);
          } else {
            this.movingAwayToEndBound_1.add_utx5q5_k$(item_3);
          }
        }
      }
    }
    accumulatedOffset = 0;
    // Inline function 'kotlin.collections.sortByDescending' call
    var this_6 = this.movingAwayToStartBound_1;
    if (this_6.get_size_woubt6_k$() > 1) {
      // Inline function 'kotlin.comparisons.compareByDescending' call
      var tmp_4 = LazyListItemAnimator$onMeasured$lambda_1(keyIndexMap);
      var tmp$ret$9 = new sam$kotlin_Comparator$0(tmp_4);
      sortWith(this_6, tmp$ret$9);
    }
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_7 = this.movingAwayToStartBound_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_6 = 0;
    var last_7 = this_7.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_6 <= last_7)
      do {
        var index_3 = inductionVariable_6;
        inductionVariable_6 = inductionVariable_6 + 1 | 0;
        var item_4 = this_7.get_c1px32_k$(index_3);
        // Inline function 'androidx.compose.foundation.lazy.LazyListItemAnimator.onMeasured.<anonymous>' call
        accumulatedOffset = accumulatedOffset + item_4.get_sizeWithSpacings_q8axgg_k$() | 0;
        var tmp_5;
        if (isLookingAhead) {
          tmp_5 = first(positionedItems).get_offset_hjmqak_k$() - accumulatedOffset | 0;
        } else {
          tmp_5 = 0 - accumulatedOffset | 0;
        }
        var mainAxisOffset_1 = tmp_5;
        item_4.position_qsn11b_k$(mainAxisOffset_1, layoutWidth, layoutHeight);
        if (shouldSetupAnimation) {
          startPlacementAnimationsIfNeeded(this, item_4);
        }
      }
       while (inductionVariable_6 <= last_7);
    accumulatedOffset = 0;
    // Inline function 'kotlin.collections.sortBy' call
    var this_8 = this.movingAwayToEndBound_1;
    if (this_8.get_size_woubt6_k$() > 1) {
      // Inline function 'kotlin.comparisons.compareBy' call
      var tmp_6 = LazyListItemAnimator$onMeasured$lambda_2(keyIndexMap);
      var tmp$ret$10 = new sam$kotlin_Comparator$0(tmp_6);
      sortWith(this_8, tmp$ret$10);
    }
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_9 = this.movingAwayToEndBound_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_7 = 0;
    var last_8 = this_9.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_7 <= last_8)
      do {
        var index_4 = inductionVariable_7;
        inductionVariable_7 = inductionVariable_7 + 1 | 0;
        var item_5 = this_9.get_c1px32_k$(index_4);
        // Inline function 'androidx.compose.foundation.lazy.LazyListItemAnimator.onMeasured.<anonymous>' call
        var tmp_7;
        if (isLookingAhead) {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.foundation.lazy.LazyListItemAnimator.onMeasured.<anonymous>.<anonymous>' call
          var it_0 = last(positionedItems);
          tmp_7 = (it_0.get_offset_hjmqak_k$() + it_0.get_sizeWithSpacings_q8axgg_k$() | 0) + accumulatedOffset | 0;
        } else {
          tmp_7 = mainAxisLayoutSize + accumulatedOffset | 0;
        }
        var mainAxisOffset_2 = tmp_7;
        accumulatedOffset = accumulatedOffset + item_5.get_sizeWithSpacings_q8axgg_k$() | 0;
        item_5.position_qsn11b_k$(mainAxisOffset_2, layoutWidth, layoutHeight);
        if (shouldSetupAnimation) {
          startPlacementAnimationsIfNeeded(this, item_5);
        }
      }
       while (inductionVariable_7 <= last_8);
    // Inline function 'kotlin.apply' call
    var this_10 = this.movingAwayToStartBound_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.lazy.LazyListItemAnimator.onMeasured.<anonymous>' call
    reverse(this_10);
    positionedItems.addAll_lxodh3_k$(0, this_10);
    positionedItems.addAll_4lagoh_k$(this.movingAwayToEndBound_1);
    this.movingInFromStartBound_1.clear_j9egeb_k$();
    this.movingInFromEndBound_1.clear_j9egeb_k$();
    this.movingAwayToStartBound_1.clear_j9egeb_k$();
    this.movingAwayToEndBound_1.clear_j9egeb_k$();
    this.movingAwayKeys_1.clear_j9egeb_k$();
  };
  protoOf(LazyListItemAnimator).reset_5u6xz3_k$ = function () {
    this.keyToItemInfoMap_1.clear_j9egeb_k$();
    this.keyIndexMap_1 = Empty_getInstance();
    this.firstVisibleIndex_1 = -1;
  };
  protoOf(LazyListItemAnimator).getAnimation_5261aw_k$ = function (key, placeableIndex) {
    var tmp0_safe_receiver = this.keyToItemInfoMap_1.get_wei43m_k$(key);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.animations_1;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver[placeableIndex];
  };
  function get_specs(_this__u8e3s4) {
    _init_properties_LazyListItemAnimator_kt__dul14k();
    return _this__u8e3s4 instanceof LazyLayoutAnimationSpecsNode ? _this__u8e3s4 : null;
  }
  var properties_initialized_LazyListItemAnimator_kt_q478a6;
  function _init_properties_LazyListItemAnimator_kt__dul14k() {
    if (!properties_initialized_LazyListItemAnimator_kt_q478a6) {
      properties_initialized_LazyListItemAnimator_kt_q478a6 = true;
      // Inline function 'kotlin.emptyArray' call
      EmptyArray = [];
    }
  }
  function LazyListItemInfo() {
  }
  function LazyListItemProvider() {
  }
  function LazyListLayoutInfo() {
  }
  function LazyListMeasureResult(firstVisibleItem, firstVisibleItemScrollOffset, canScrollForward, consumedScroll, measureResult, scrollBackAmount, remeasureNeeded, visibleItemsInfo, viewportStartOffset, viewportEndOffset, totalItemsCount, reverseLayout, orientation, afterContentPadding, mainAxisItemSpacing) {
    this.firstVisibleItem_1 = firstVisibleItem;
    this.firstVisibleItemScrollOffset_1 = firstVisibleItemScrollOffset;
    this.canScrollForward_1 = canScrollForward;
    this.consumedScroll_1 = consumedScroll;
    this.scrollBackAmount_1 = scrollBackAmount;
    this.remeasureNeeded_1 = remeasureNeeded;
    this.visibleItemsInfo_1 = visibleItemsInfo;
    this.viewportStartOffset_1 = viewportStartOffset;
    this.viewportEndOffset_1 = viewportEndOffset;
    this.totalItemsCount_1 = totalItemsCount;
    this.reverseLayout_1 = reverseLayout;
    this.orientation_1 = orientation;
    this.afterContentPadding_1 = afterContentPadding;
    this.mainAxisItemSpacing_1 = mainAxisItemSpacing;
    this.$$delegate_0__1 = measureResult;
  }
  protoOf(LazyListMeasureResult).get_firstVisibleItem_l4avz6_k$ = function () {
    return this.firstVisibleItem_1;
  };
  protoOf(LazyListMeasureResult).set_firstVisibleItemScrollOffset_t2osie_k$ = function (_set____db54di) {
    this.firstVisibleItemScrollOffset_1 = _set____db54di;
  };
  protoOf(LazyListMeasureResult).get_firstVisibleItemScrollOffset_my3xxa_k$ = function () {
    return this.firstVisibleItemScrollOffset_1;
  };
  protoOf(LazyListMeasureResult).set_canScrollForward_gclgc0_k$ = function (_set____db54di) {
    this.canScrollForward_1 = _set____db54di;
  };
  protoOf(LazyListMeasureResult).get_canScrollForward_dmb0fj_k$ = function () {
    return this.canScrollForward_1;
  };
  protoOf(LazyListMeasureResult).set_consumedScroll_6ihamu_k$ = function (_set____db54di) {
    this.consumedScroll_1 = _set____db54di;
  };
  protoOf(LazyListMeasureResult).get_consumedScroll_u59rku_k$ = function () {
    return this.consumedScroll_1;
  };
  protoOf(LazyListMeasureResult).get_scrollBackAmount_qyf3bp_k$ = function () {
    return this.scrollBackAmount_1;
  };
  protoOf(LazyListMeasureResult).get_remeasureNeeded_9nwf49_k$ = function () {
    return this.remeasureNeeded_1;
  };
  protoOf(LazyListMeasureResult).get_visibleItemsInfo_uew4qj_k$ = function () {
    return this.visibleItemsInfo_1;
  };
  protoOf(LazyListMeasureResult).get_viewportStartOffset_v4b1ay_k$ = function () {
    return this.viewportStartOffset_1;
  };
  protoOf(LazyListMeasureResult).get_viewportEndOffset_gapdi7_k$ = function () {
    return this.viewportEndOffset_1;
  };
  protoOf(LazyListMeasureResult).get_totalItemsCount_aiolgq_k$ = function () {
    return this.totalItemsCount_1;
  };
  protoOf(LazyListMeasureResult).get_reverseLayout_nclvnn_k$ = function () {
    return this.reverseLayout_1;
  };
  protoOf(LazyListMeasureResult).get_orientation_9wu93t_k$ = function () {
    return this.orientation_1;
  };
  protoOf(LazyListMeasureResult).get_afterContentPadding_49ooob_k$ = function () {
    return this.afterContentPadding_1;
  };
  protoOf(LazyListMeasureResult).get_mainAxisItemSpacing_tq19t9_k$ = function () {
    return this.mainAxisItemSpacing_1;
  };
  protoOf(LazyListMeasureResult).get_alignmentLines_nx3i05_k$ = function () {
    return this.$$delegate_0__1.get_alignmentLines_nx3i05_k$();
  };
  protoOf(LazyListMeasureResult).get_height_e7t92o_k$ = function () {
    return this.$$delegate_0__1.get_height_e7t92o_k$();
  };
  protoOf(LazyListMeasureResult).get_width_j0q4yl_k$ = function () {
    return this.$$delegate_0__1.get_width_j0q4yl_k$();
  };
  protoOf(LazyListMeasureResult).placeChildren_kds4oa_k$ = function () {
    this.$$delegate_0__1.placeChildren_kds4oa_k$();
  };
  protoOf(LazyListMeasureResult).get_canScrollBackward_v2t7h3_k$ = function () {
    var tmp;
    var tmp0_safe_receiver = this.firstVisibleItem_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_index_it478p_k$();
    if (!((tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) === 0)) {
      tmp = true;
    } else {
      tmp = !(this.firstVisibleItemScrollOffset_1 === 0);
    }
    return tmp;
  };
  protoOf(LazyListMeasureResult).get_viewportSize_hnfbdb_k$ = function () {
    return IntSize(this.get_width_j0q4yl_k$(), this.get_height_e7t92o_k$());
  };
  protoOf(LazyListMeasureResult).get_beforeContentPadding_2dperk_k$ = function () {
    return -this.viewportStartOffset_1 | 0;
  };
  protoOf(LazyListMeasureResult).tryToApplyScrollWithoutRemeasure_os0e2z_k$ = function (delta, updateAnimations) {
    var tmp;
    if ((this.remeasureNeeded_1 ? true : this.visibleItemsInfo_1.isEmpty_y1axqb_k$()) ? true : this.firstVisibleItem_1 == null) {
      tmp = true;
    } else {
      var containsUpper = this.firstVisibleItem_1.get_sizeWithSpacings_q8axgg_k$();
      var containsArg = this.firstVisibleItemScrollOffset_1 - delta | 0;
      tmp = !(0 <= containsArg ? containsArg < containsUpper : false);
    }
    if (tmp) {
      return false;
    }
    var first_0 = first(this.visibleItemsInfo_1);
    var last_0 = last(this.visibleItemsInfo_1);
    if (first_0.get_nonScrollableItem_5xqaji_k$() ? true : last_0.get_nonScrollableItem_5xqaji_k$()) {
      return false;
    }
    var tmp_0;
    if (delta < 0) {
      var deltaToFirstItemChange = (first_0.get_offset_hjmqak_k$() + first_0.get_sizeWithSpacings_q8axgg_k$() | 0) - this.viewportStartOffset_1 | 0;
      var deltaToLastItemChange = (last_0.get_offset_hjmqak_k$() + last_0.get_sizeWithSpacings_q8axgg_k$() | 0) - this.viewportEndOffset_1 | 0;
      // Inline function 'kotlin.comparisons.minOf' call
      tmp_0 = Math.min(deltaToFirstItemChange, deltaToLastItemChange) > (-delta | 0);
    } else {
      var deltaToFirstItemChange_0 = this.viewportStartOffset_1 - first_0.get_offset_hjmqak_k$() | 0;
      var deltaToLastItemChange_0 = this.viewportEndOffset_1 - last_0.get_offset_hjmqak_k$() | 0;
      // Inline function 'kotlin.comparisons.minOf' call
      tmp_0 = Math.min(deltaToFirstItemChange_0, deltaToLastItemChange_0) > delta;
    }
    var canApply = tmp_0;
    var tmp_1;
    if (canApply) {
      this.firstVisibleItemScrollOffset_1 = this.firstVisibleItemScrollOffset_1 - delta | 0;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var this_0 = this.visibleItemsInfo_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last_1 = this_0.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last_1)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.get_c1px32_k$(index);
          // Inline function 'androidx.compose.foundation.lazy.LazyListMeasureResult.tryToApplyScrollWithoutRemeasure.<anonymous>' call
          item.applyScrollDelta_xv1sm2_k$(delta, updateAnimations);
        }
         while (inductionVariable <= last_1);
      this.consumedScroll_1 = delta;
      if (!this.canScrollForward_1 ? delta > 0 : false) {
        this.canScrollForward_1 = true;
      }
      tmp_1 = true;
    } else {
      tmp_1 = false;
    }
    return tmp_1;
  };
  function _get_placeables__otc5bb($this) {
    return $this.placeables_1;
  }
  function _get_horizontalAlignment__hyzxw2($this) {
    return $this.horizontalAlignment_1;
  }
  function _get_verticalAlignment__1j8kpw($this) {
    return $this.verticalAlignment_1;
  }
  function _get_layoutDirection__u3l5q4($this) {
    return $this.layoutDirection_1;
  }
  function _get_reverseLayout__b4hu1n($this) {
    return $this.reverseLayout_1;
  }
  function _get_beforeContentPadding__8jxpx0($this) {
    return $this.beforeContentPadding_1;
  }
  function _get_afterContentPadding__razem5($this) {
    return $this.afterContentPadding_1;
  }
  function _get_spacing__209fwy($this) {
    return $this.spacing_1;
  }
  function _get_visualOffset__slruiw($this) {
    return $this.visualOffset_1;
  }
  function _get_animator__s0xiyk($this) {
    return $this.animator_1;
  }
  function _set_offset__aq0ezo($this, _set____db54di) {
    $this.offset_1 = _set____db54di;
  }
  function _set_mainAxisLayoutSize__frif1q($this, _set____db54di) {
    $this.mainAxisLayoutSize_1 = _set____db54di;
  }
  function _get_mainAxisLayoutSize__lbqbt2($this) {
    return $this.mainAxisLayoutSize_1;
  }
  function _set_minMainAxisOffset__bsxkee($this, _set____db54di) {
    $this.minMainAxisOffset_1 = _set____db54di;
  }
  function _get_minMainAxisOffset__9wvbvy($this) {
    return $this.minMainAxisOffset_1;
  }
  function _set_maxMainAxisOffset__wfzltg($this, _set____db54di) {
    $this.maxMainAxisOffset_1 = _set____db54di;
  }
  function _get_maxMainAxisOffset__aq6pj4($this) {
    return $this.maxMainAxisOffset_1;
  }
  function _get_placeableOffsets__178038($this) {
    return $this.placeableOffsets_1;
  }
  function _get_mainAxis__jwdafl(_this__u8e3s4, $this) {
    return $this.isVertical_1 ? _IntOffset___get_y__impl__2avpwj(_this__u8e3s4) : _IntOffset___get_x__impl__qiqr5o(_this__u8e3s4);
  }
  function _get_mainAxisSize__iyci34(_this__u8e3s4, $this) {
    return $this.isVertical_1 ? _this__u8e3s4.get_height_e7t92o_k$() : _this__u8e3s4.get_width_j0q4yl_k$();
  }
  function copy_0(_this__u8e3s4, $this, mainAxisMap) {
    return IntOffset_0($this.isVertical_1 ? _IntOffset___get_x__impl__qiqr5o(_this__u8e3s4) : mainAxisMap(_IntOffset___get_x__impl__qiqr5o(_this__u8e3s4)), $this.isVertical_1 ? mainAxisMap(_IntOffset___get_y__impl__2avpwj(_this__u8e3s4)) : _IntOffset___get_y__impl__2avpwj(_this__u8e3s4));
  }
  function LazyListMeasuredItem(index, placeables, isVertical, horizontalAlignment, verticalAlignment, layoutDirection, reverseLayout, beforeContentPadding, afterContentPadding, spacing, visualOffset, key, contentType, animator) {
    this.index_1 = index;
    this.placeables_1 = placeables;
    this.isVertical_1 = isVertical;
    this.horizontalAlignment_1 = horizontalAlignment;
    this.verticalAlignment_1 = verticalAlignment;
    this.layoutDirection_1 = layoutDirection;
    this.reverseLayout_1 = reverseLayout;
    this.beforeContentPadding_1 = beforeContentPadding;
    this.afterContentPadding_1 = afterContentPadding;
    this.spacing_1 = spacing;
    this.visualOffset_1 = visualOffset;
    this.key_1 = key;
    this.contentType_1 = contentType;
    this.animator_1 = animator;
    this.offset_1 = 0;
    this.nonScrollableItem_1 = false;
    this.mainAxisLayoutSize_1 = -2147483648;
    this.minMainAxisOffset_1 = 0;
    this.maxMainAxisOffset_1 = 0;
    var mainAxisSize = 0;
    var maxCrossAxis = 0;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.placeables_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.get_c1px32_k$(index_0);
        // Inline function 'androidx.compose.foundation.lazy.LazyListMeasuredItem.<anonymous>' call
        mainAxisSize = mainAxisSize + (this.isVertical_1 ? item.get_height_e7t92o_k$() : item.get_width_j0q4yl_k$()) | 0;
        // Inline function 'kotlin.comparisons.maxOf' call
        var a = maxCrossAxis;
        var b = !this.isVertical_1 ? item.get_height_e7t92o_k$() : item.get_width_j0q4yl_k$();
        maxCrossAxis = Math.max(a, b);
      }
       while (inductionVariable <= last);
    this.size_1 = mainAxisSize;
    this.sizeWithSpacings_1 = coerceAtLeast(this.size_1 + this.spacing_1 | 0, 0);
    this.crossAxisSize_1 = maxCrossAxis;
    this.placeableOffsets_1 = new Int32Array(imul(this.placeables_1.get_size_woubt6_k$(), 2));
  }
  protoOf(LazyListMeasuredItem).get_index_it478p_k$ = function () {
    return this.index_1;
  };
  protoOf(LazyListMeasuredItem).get_isVertical_4x9emh_k$ = function () {
    return this.isVertical_1;
  };
  protoOf(LazyListMeasuredItem).get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  protoOf(LazyListMeasuredItem).get_contentType_7git4a_k$ = function () {
    return this.contentType_1;
  };
  protoOf(LazyListMeasuredItem).get_offset_hjmqak_k$ = function () {
    return this.offset_1;
  };
  protoOf(LazyListMeasuredItem).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  protoOf(LazyListMeasuredItem).get_sizeWithSpacings_q8axgg_k$ = function () {
    return this.sizeWithSpacings_1;
  };
  protoOf(LazyListMeasuredItem).get_crossAxisSize_vn6o3d_k$ = function () {
    return this.crossAxisSize_1;
  };
  protoOf(LazyListMeasuredItem).set_nonScrollableItem_6u8ted_k$ = function (_set____db54di) {
    this.nonScrollableItem_1 = _set____db54di;
  };
  protoOf(LazyListMeasuredItem).get_nonScrollableItem_5xqaji_k$ = function () {
    return this.nonScrollableItem_1;
  };
  protoOf(LazyListMeasuredItem).get_placeablesCount_3f5k0k_k$ = function () {
    return this.placeables_1.get_size_woubt6_k$();
  };
  protoOf(LazyListMeasuredItem).getParentData_dqnln6_k$ = function (index) {
    return this.placeables_1.get_c1px32_k$(index).get_parentData_o87vnn_k$();
  };
  protoOf(LazyListMeasuredItem).position_qsn11b_k$ = function (offset, layoutWidth, layoutHeight) {
    this.offset_1 = offset;
    this.mainAxisLayoutSize_1 = this.isVertical_1 ? layoutHeight : layoutWidth;
    var mainAxisOffset = offset;
    // Inline function 'androidx.compose.ui.util.fastForEachIndexed' call
    var this_0 = this.placeables_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.get_c1px32_k$(index);
        // Inline function 'androidx.compose.foundation.lazy.LazyListMeasuredItem.position.<anonymous>' call
        var indexInArray = imul(index, 2);
        if (this.isVertical_1) {
          var tmp$ret$1;
          $l$block: {
            // Inline function 'kotlin.requireNotNull' call
            var value = this.horizontalAlignment_1;
            // Inline function 'kotlin.contracts.contract' call
            if (value == null) {
              // Inline function 'androidx.compose.foundation.lazy.LazyListMeasuredItem.position.<anonymous>.<anonymous>' call
              var message = 'null horizontalAlignment when isVertical == true';
              throw IllegalArgumentException_init_$Create$(toString(message));
            } else {
              tmp$ret$1 = value;
              break $l$block;
            }
          }
          this.placeableOffsets_1[indexInArray] = tmp$ret$1.align_y7fd6v_k$(item.get_width_j0q4yl_k$(), layoutWidth, this.layoutDirection_1);
          this.placeableOffsets_1[indexInArray + 1 | 0] = mainAxisOffset;
          mainAxisOffset = mainAxisOffset + item.get_height_e7t92o_k$() | 0;
        } else {
          this.placeableOffsets_1[indexInArray] = mainAxisOffset;
          var tmp = indexInArray + 1 | 0;
          var tmp$ret$3;
          $l$block_0: {
            // Inline function 'kotlin.requireNotNull' call
            var value_0 = this.verticalAlignment_1;
            // Inline function 'kotlin.contracts.contract' call
            if (value_0 == null) {
              // Inline function 'androidx.compose.foundation.lazy.LazyListMeasuredItem.position.<anonymous>.<anonymous>' call
              var message_0 = 'null verticalAlignment when isVertical == false';
              throw IllegalArgumentException_init_$Create$(toString(message_0));
            } else {
              tmp$ret$3 = value_0;
              break $l$block_0;
            }
          }
          this.placeableOffsets_1[tmp] = tmp$ret$3.align_k316px_k$(item.get_height_e7t92o_k$(), layoutHeight);
          mainAxisOffset = mainAxisOffset + item.get_width_j0q4yl_k$() | 0;
        }
      }
       while (inductionVariable <= last);
    this.minMainAxisOffset_1 = -this.beforeContentPadding_1 | 0;
    this.maxMainAxisOffset_1 = this.mainAxisLayoutSize_1 + this.afterContentPadding_1 | 0;
  };
  protoOf(LazyListMeasuredItem).getOffset_hf9732_k$ = function (index) {
    return IntOffset_0(this.placeableOffsets_1[imul(index, 2)], this.placeableOffsets_1[imul(index, 2) + 1 | 0]);
  };
  protoOf(LazyListMeasuredItem).applyScrollDelta_xv1sm2_k$ = function (delta, updateAnimations) {
    if (this.nonScrollableItem_1) {
      return Unit_getInstance();
    }
    this.offset_1 = this.offset_1 + delta | 0;
    // Inline function 'kotlin.repeat' call
    var times = this.placeableOffsets_1.length;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.foundation.lazy.LazyListMeasuredItem.applyScrollDelta.<anonymous>' call
        if ((this.isVertical_1 ? (index % 2 | 0) === 1 : false) ? true : !this.isVertical_1 ? (index % 2 | 0) === 0 : false) {
          var tmp0_array = this.placeableOffsets_1;
          tmp0_array[index] = tmp0_array[index] + delta | 0;
        }
      }
       while (inductionVariable < times);
    if (updateAnimations) {
      // Inline function 'kotlin.repeat' call
      var times_0 = this.get_placeablesCount_3f5k0k_k$();
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.foundation.lazy.LazyListMeasuredItem.applyScrollDelta.<anonymous>' call
          var animation = this.animator_1.getAnimation_5261aw_k$(this.key_1, index_0);
          if (!(animation == null)) {
            // Inline function 'androidx.compose.foundation.lazy.LazyListMeasuredItem.copy' call
            var this_0 = animation.get_rawOffset_3ik8vz_k$();
            var tmp;
            if (this.isVertical_1) {
              tmp = _IntOffset___get_x__impl__qiqr5o(this_0);
            } else {
              // Inline function 'androidx.compose.foundation.lazy.LazyListMeasuredItem.applyScrollDelta.<anonymous>.<anonymous>' call
              tmp = _IntOffset___get_x__impl__qiqr5o(this_0) + delta | 0;
            }
            var tmp_0 = tmp;
            var tmp_1;
            if (this.isVertical_1) {
              // Inline function 'androidx.compose.foundation.lazy.LazyListMeasuredItem.applyScrollDelta.<anonymous>.<anonymous>' call
              tmp_1 = _IntOffset___get_y__impl__2avpwj(this_0) + delta | 0;
            } else {
              tmp_1 = _IntOffset___get_y__impl__2avpwj(this_0);
            }
            var tmp$ret$2 = IntOffset_0(tmp_0, tmp_1);
            animation.set_rawOffset_91xt99_k$(tmp$ret$2);
          }
        }
         while (inductionVariable_0 < times_0);
    }
  };
  protoOf(LazyListMeasuredItem).place_f2ipb7_k$ = function (scope, isLookingAhead) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(this.mainAxisLayoutSize_1 === -2147483648)) {
      // Inline function 'androidx.compose.foundation.lazy.LazyListMeasuredItem.place.<anonymous>.<anonymous>' call
      var message = 'position() should be called first';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var times = this.get_placeablesCount_3f5k0k_k$();
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var tmp;
    if (inductionVariable < times) {
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.foundation.lazy.LazyListMeasuredItem.place.<anonymous>.<anonymous>' call
        var placeable = this.placeables_1.get_c1px32_k$(index);
        var minOffset = this.minMainAxisOffset_1 - _get_mainAxisSize__iyci34(placeable, this) | 0;
        var maxOffset = this.maxMainAxisOffset_1;
        var offset = this.getOffset_hf9732_k$(index);
        var animation = this.animator_1.getAnimation_5261aw_k$(this.key_1, index);
        var layerBlock;
        if (!(animation == null)) {
          if (isLookingAhead) {
            animation.set_lookaheadOffset_23475v_k$(offset);
          } else {
            var tmp_0;
            if (!equals(animation.get_lookaheadOffset_5f62hx_k$(), Companion_getInstance_34().get_NotInitialized_kwrmrr_k$())) {
              tmp_0 = animation.get_lookaheadOffset_5f62hx_k$();
            } else {
              tmp_0 = offset;
            }
            var targetOffset = tmp_0;
            // Inline function 'androidx.compose.ui.unit.IntOffset.plus' call
            var other = animation.get_placementDelta_36vqi3_k$();
            var animatedOffset = IntOffset_0(_IntOffset___get_x__impl__qiqr5o(targetOffset) + _IntOffset___get_x__impl__qiqr5o(other) | 0, _IntOffset___get_y__impl__2avpwj(targetOffset) + _IntOffset___get_y__impl__2avpwj(other) | 0);
            if ((_get_mainAxis__jwdafl(targetOffset, this) <= minOffset ? _get_mainAxis__jwdafl(animatedOffset, this) <= minOffset : false) ? true : _get_mainAxis__jwdafl(targetOffset, this) >= maxOffset ? _get_mainAxis__jwdafl(animatedOffset, this) >= maxOffset : false) {
              animation.cancelPlacementAnimation_9u9r4n_k$();
            }
            offset = animatedOffset;
          }
          layerBlock = animation.get_layerBlock_les9mj_k$();
        } else {
          layerBlock = get_DefaultLayerBlock();
        }
        if (this.reverseLayout_1) {
          // Inline function 'androidx.compose.foundation.lazy.LazyListMeasuredItem.copy' call
          var this_0 = offset;
          var tmp_1;
          if (this.isVertical_1) {
            tmp_1 = _IntOffset___get_x__impl__qiqr5o(this_0);
          } else {
            // Inline function 'androidx.compose.foundation.lazy.LazyListMeasuredItem.place.<anonymous>.<anonymous>.<anonymous>' call
            var mainAxisOffset = _IntOffset___get_x__impl__qiqr5o(this_0);
            tmp_1 = (this.mainAxisLayoutSize_1 - mainAxisOffset | 0) - _get_mainAxisSize__iyci34(placeable, this) | 0;
          }
          var tmp_2 = tmp_1;
          var tmp_3;
          if (this.isVertical_1) {
            // Inline function 'androidx.compose.foundation.lazy.LazyListMeasuredItem.place.<anonymous>.<anonymous>.<anonymous>' call
            var mainAxisOffset_0 = _IntOffset___get_y__impl__2avpwj(this_0);
            tmp_3 = (this.mainAxisLayoutSize_1 - mainAxisOffset_0 | 0) - _get_mainAxisSize__iyci34(placeable, this) | 0;
          } else {
            tmp_3 = _IntOffset___get_y__impl__2avpwj(this_0);
          }
          offset = IntOffset_0(tmp_2, tmp_3);
        }
        // Inline function 'androidx.compose.ui.unit.IntOffset.plus' call
        var this_1 = offset;
        var other_0 = this.visualOffset_1;
        offset = IntOffset_0(_IntOffset___get_x__impl__qiqr5o(this_1) + _IntOffset___get_x__impl__qiqr5o(other_0) | 0, _IntOffset___get_y__impl__2avpwj(this_1) + _IntOffset___get_y__impl__2avpwj(other_0) | 0);
        if (this.isVertical_1) {
          scope.placeWithLayer$default_yt7uj9_k$(placeable, offset, VOID, layerBlock);
        } else {
          scope.placeRelativeWithLayer$default_1hz9dt_k$(placeable, offset, VOID, layerBlock);
        }
      }
       while (inductionVariable < times);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  function get_Unset() {
    return Unset;
  }
  var Unset;
  function _get_itemProvider__opdbc7($this) {
    return $this.itemProvider_1;
  }
  function _get_measureScope__aqf6gl($this) {
    return $this.measureScope_1;
  }
  function LazyListMeasuredItemProvider(constraints, isVertical, itemProvider, measureScope) {
    this.itemProvider_1 = itemProvider;
    this.measureScope_1 = measureScope;
    this.childConstraints_1 = Constraints(VOID, isVertical ? _Constraints___get_maxWidth__impl__uuyqc(constraints) : Companion_getInstance_12().get_Infinity_rvchkf_k$(), VOID, !isVertical ? _Constraints___get_maxHeight__impl__dt3e8z(constraints) : Companion_getInstance_12().get_Infinity_rvchkf_k$());
  }
  protoOf(LazyListMeasuredItemProvider).get_childConstraints_9nop7m_k$ = function () {
    return this.childConstraints_1;
  };
  protoOf(LazyListMeasuredItemProvider).getAndMeasure_hxv7zv_k$ = function (index) {
    var key = this.itemProvider_1.getKey_stxcen_k$(index);
    var contentType = this.itemProvider_1.getContentType_ooo485_k$(index);
    var placeables = this.measureScope_1.measure_roc4md_k$(index, this.childConstraints_1);
    return this.createItem_77id14_k$(index, key, contentType, placeables);
  };
  protoOf(LazyListMeasuredItemProvider).get_keyIndexMap_54cmgw_k$ = function () {
    return this.itemProvider_1.get_keyIndexMap_54cmgw_k$();
  };
  function get_DeltaThresholdForScrollAnimation() {
    _init_properties_LazyListState_kt__xj6vt9();
    return DeltaThresholdForScrollAnimation;
  }
  var DeltaThresholdForScrollAnimation;
  function get_EmptyLazyListMeasureResult() {
    _init_properties_LazyListState_kt__xj6vt9();
    return EmptyLazyListMeasureResult;
  }
  var EmptyLazyListMeasureResult;
  function EmptyLazyListMeasureResult$1() {
    this.width_1 = 0;
    this.height_1 = 0;
    this.alignmentLines_1 = emptyMap();
  }
  protoOf(EmptyLazyListMeasureResult$1).get_width_j0q4yl_k$ = function () {
    return this.width_1;
  };
  protoOf(EmptyLazyListMeasureResult$1).get_height_e7t92o_k$ = function () {
    return this.height_1;
  };
  protoOf(EmptyLazyListMeasureResult$1).get_alignmentLines_nx3i05_k$ = function () {
    return this.alignmentLines_1;
  };
  protoOf(EmptyLazyListMeasureResult$1).placeChildren_kds4oa_k$ = function () {
  };
  var properties_initialized_LazyListState_kt_8bkzkf;
  function _init_properties_LazyListState_kt__xj6vt9() {
    if (!properties_initialized_LazyListState_kt_8bkzkf) {
      properties_initialized_LazyListState_kt_8bkzkf = true;
      // Inline function 'androidx.compose.ui.unit.dp' call
      DeltaThresholdForScrollAnimation = _Dp___init__impl__ms3zkb(1);
      var tmp0_measureResult = new EmptyLazyListMeasureResult$1();
      var tmp1_visibleItemsInfo = emptyList();
      var tmp2_orientation = Orientation_Vertical_getInstance();
      EmptyLazyListMeasureResult = new LazyListMeasureResult(null, 0, false, 0.0, tmp0_measureResult, 0.0, false, tmp1_visibleItemsInfo, 0, 0, 0, false, tmp2_orientation, 0, 0);
    }
  }
  function LazyScopeMarker() {
  }
  protoOf(LazyScopeMarker).equals = function (other) {
    if (!(other instanceof LazyScopeMarker))
      return false;
    other instanceof LazyScopeMarker || THROW_CCE();
    return true;
  };
  protoOf(LazyScopeMarker).hashCode = function () {
    return 0;
  };
  protoOf(LazyScopeMarker).toString = function () {
    return '@androidx.compose.foundation.lazy.LazyScopeMarker()';
  };
  function LazyGridSlots(sizes, positions) {
    this.sizes_1 = sizes;
    this.positions_1 = positions;
  }
  protoOf(LazyGridSlots).get_sizes_iyjejt_k$ = function () {
    return this.sizes_1;
  };
  protoOf(LazyGridSlots).get_positions_ya7scf_k$ = function () {
    return this.positions_1;
  };
  function LazyGridScope$items$lambda(it) {
    return null;
  }
  function LazyGridScope() {
  }
  function LazyGridIntervalContent$Companion$DefaultSpan$lambda($this$null, it) {
    return new GridItemSpan(GridItemSpan_0(1));
  }
  function Companion_1() {
    Companion_instance_1 = this;
    var tmp = this;
    tmp.DefaultSpan_1 = LazyGridIntervalContent$Companion$DefaultSpan$lambda;
  }
  protoOf(Companion_1).get_DefaultSpan_y91h2a_k$ = function () {
    return this.DefaultSpan_1;
  };
  var Companion_instance_1;
  function Companion_getInstance_32() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function LazyGridIntervalContent$item$lambda($key) {
    return function (it) {
      return $key;
    };
  }
  function LazyGridIntervalContent$item$lambda_0($span) {
    return function ($this$null, it) {
      return $span($this$null);
    };
  }
  function LazyGridIntervalContent$item$lambda_1($contentType) {
    return function (it) {
      return $contentType;
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.invoke_gk4tfu_k$(p0, p1, p2, p3);
    };
  }
  function LazyGridIntervalContent$item$lambda_2($content) {
    return function ($this$$receiver, it, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C49@1790L9:LazyGridIntervalContent.kt#7791vq');
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$$receiver) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 651) === 130) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-34608120, $dirty, -1, 'androidx.compose.foundation.lazy.grid.LazyGridIntervalContent.item.<anonymous> (LazyGridIntervalContent.kt:49)');
        }
        $content($this$$receiver, $composer_0, 14 & $dirty);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_getInstance();
        }
        tmp_0 = tmp_1;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function LazyGridIntervalContent(content) {
    Companion_getInstance_32();
    LazyLayoutIntervalContent.call(this);
    this.spanLayoutProvider_1 = new LazyGridSpanLayoutProvider(this);
    this.intervals_1 = new MutableIntervalList();
    this.hasCustomSpans_1 = false;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    content(this);
  }
  protoOf(LazyGridIntervalContent).get_spanLayoutProvider_kc5dpq_k$ = function () {
    return this.spanLayoutProvider_1;
  };
  protoOf(LazyGridIntervalContent).get_intervals_gu2011_k$ = function () {
    return this.intervals_1;
  };
  protoOf(LazyGridIntervalContent).set_hasCustomSpans_y5iat6_k$ = function (_set____db54di) {
    this.hasCustomSpans_1 = _set____db54di;
  };
  protoOf(LazyGridIntervalContent).get_hasCustomSpans_23oryf_k$ = function () {
    return this.hasCustomSpans_1;
  };
  protoOf(LazyGridIntervalContent).item_njxbyk_k$ = function (key, span, contentType, content) {
    var tmp;
    if (key == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.lazy.grid.LazyGridIntervalContent.item.<anonymous>' call
      tmp = LazyGridIntervalContent$item$lambda(key);
    }
    var tmp_0 = tmp;
    var tmp_1;
    if (span == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.lazy.grid.LazyGridIntervalContent.item.<anonymous>' call
      tmp_1 = LazyGridIntervalContent$item$lambda_0(span);
    }
    var tmp2_elvis_lhs = tmp_1;
    var tmp_2 = tmp2_elvis_lhs == null ? Companion_getInstance_32().DefaultSpan_1 : tmp2_elvis_lhs;
    var tmp_3 = LazyGridIntervalContent$item$lambda_1(contentType);
    this.intervals_1.addInterval_7mg825_k$(1, new LazyGridInterval(tmp_0, tmp_2, tmp_3, ComposableLambda$invoke$ref(composableLambdaInstance(-34608120, true, LazyGridIntervalContent$item$lambda_2(content)))));
    if (!(span == null))
      this.hasCustomSpans_1 = true;
  };
  protoOf(LazyGridIntervalContent).items_81nxg1_k$ = function (count, key, span, contentType, itemContent) {
    this.intervals_1.addInterval_7mg825_k$(count, new LazyGridInterval(key, span == null ? Companion_getInstance_32().DefaultSpan_1 : span, contentType, itemContent));
    if (!(span == null))
      this.hasCustomSpans_1 = true;
  };
  function LazyGridInterval(key, span, type, item) {
    this.key_1 = key;
    this.span_1 = span;
    this.type_1 = type;
    this.item_1 = item;
  }
  protoOf(LazyGridInterval).get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  protoOf(LazyGridInterval).get_span_wouger_k$ = function () {
    return this.span_1;
  };
  protoOf(LazyGridInterval).get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  protoOf(LazyGridInterval).get_item_woo5lo_k$ = function () {
    return this.item_1;
  };
  function Companion_2() {
    Companion_instance_2 = this;
    this.UnknownRow_1 = -1;
    this.UnknownColumn_1 = -1;
  }
  protoOf(Companion_2).get_UnknownRow_vzm09l_k$ = function () {
    return this.UnknownRow_1;
  };
  protoOf(Companion_2).get_UnknownColumn_wltaev_k$ = function () {
    return this.UnknownColumn_1;
  };
  var Companion_instance_2;
  function Companion_getInstance_33() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function LazyGridItemInfo() {
  }
  function get_EmptyArray_0() {
    _init_properties_LazyGridItemPlacementAnimator_kt__mafnv7();
    return EmptyArray_0;
  }
  var EmptyArray_0;
  function _get_keyToItemInfoMap__nsc8mu_0($this) {
    return $this.keyToItemInfoMap_1;
  }
  function _set_keyIndexMap__o5qz5w_0($this, _set____db54di) {
    $this.keyIndexMap_1 = _set____db54di;
  }
  function _get_keyIndexMap__64n760_0($this) {
    return $this.keyIndexMap_1;
  }
  function _set_firstVisibleIndex__es8ivf_0($this, _set____db54di) {
    $this.firstVisibleIndex_1 = _set____db54di;
  }
  function _get_firstVisibleIndex__yj2mtd_0($this) {
    return $this.firstVisibleIndex_1;
  }
  function _get_movingAwayKeys__adh0uz_0($this) {
    return $this.movingAwayKeys_1;
  }
  function _get_movingInFromStartBound__g9mw8i_0($this) {
    return $this.movingInFromStartBound_1;
  }
  function _get_movingInFromEndBound__uwfzbp_0($this) {
    return $this.movingInFromEndBound_1;
  }
  function _get_movingAwayToStartBound__dxobmg_0($this) {
    return $this.movingAwayToStartBound_1;
  }
  function _get_movingAwayToEndBound__j28841_0($this) {
    return $this.movingAwayToEndBound_1;
  }
  function initializeAnimation_0($this, item, mainAxisOffset, itemInfo) {
    var firstPlaceableOffset = item.get_offset_bksmdx_k$();
    var tmp;
    if (item.get_isVertical_4x9emh_k$()) {
      tmp = IntOffset__copy$default_impl_1y5pbb(firstPlaceableOffset, VOID, mainAxisOffset);
    } else {
      tmp = IntOffset__copy$default_impl_1y5pbb(firstPlaceableOffset, mainAxisOffset);
    }
    var targetFirstPlaceableOffset = tmp;
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = itemInfo.animations_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.foundation.lazy.grid.LazyGridItemPlacementAnimator.initializeAnimation.<anonymous>' call
      if (!(element == null)) {
        // Inline function 'androidx.compose.ui.unit.IntOffset.minus' call
        var this_0 = item.get_offset_bksmdx_k$();
        var diffToFirstPlaceableOffset = IntOffset_0(_IntOffset___get_x__impl__qiqr5o(this_0) - _IntOffset___get_x__impl__qiqr5o(firstPlaceableOffset) | 0, _IntOffset___get_y__impl__2avpwj(this_0) - _IntOffset___get_y__impl__2avpwj(firstPlaceableOffset) | 0);
        // Inline function 'androidx.compose.ui.unit.IntOffset.plus' call
        var tmp$ret$1 = IntOffset_0(_IntOffset___get_x__impl__qiqr5o(targetFirstPlaceableOffset) + _IntOffset___get_x__impl__qiqr5o(diffToFirstPlaceableOffset) | 0, _IntOffset___get_y__impl__2avpwj(targetFirstPlaceableOffset) + _IntOffset___get_y__impl__2avpwj(diffToFirstPlaceableOffset) | 0);
        element.set_rawOffset_91xt99_k$(tmp$ret$1);
      }
    }
  }
  function initializeAnimation$default_0($this, item, mainAxisOffset, itemInfo, $super) {
    itemInfo = itemInfo === VOID ? ensureNotNull($this.keyToItemInfoMap_1.get_wei43m_k$(item.get_key_18j28a_k$())) : itemInfo;
    return initializeAnimation_0($this, item, mainAxisOffset, itemInfo);
  }
  function startAnimationsIfNeeded($this, item) {
    var itemInfo = ensureNotNull($this.keyToItemInfoMap_1.get_wei43m_k$(item.get_key_18j28a_k$()));
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = itemInfo.animations_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.foundation.lazy.grid.LazyGridItemPlacementAnimator.startAnimationsIfNeeded.<anonymous>' call
      if (!(element == null)) {
        var newTarget = item.get_offset_bksmdx_k$();
        var currentTarget = element.get_rawOffset_3ik8vz_k$();
        if (!equals(currentTarget, Companion_getInstance_34().get_NotInitialized_kwrmrr_k$()) ? !equals(currentTarget, newTarget) : false) {
          // Inline function 'androidx.compose.ui.unit.IntOffset.minus' call
          var tmp$ret$0 = IntOffset_0(_IntOffset___get_x__impl__qiqr5o(newTarget) - _IntOffset___get_x__impl__qiqr5o(currentTarget) | 0, _IntOffset___get_y__impl__2avpwj(newTarget) - _IntOffset___get_y__impl__2avpwj(currentTarget) | 0);
          element.animatePlacementDelta_c53shl_k$(tmp$ret$0);
        }
        element.set_rawOffset_91xt99_k$(newTarget);
      }
    }
  }
  function _get_hasAnimations__pyw8qw_0(_this__u8e3s4, $this) {
    // Inline function 'kotlin.repeat' call
    var times = _this__u8e3s4.get_placeablesCount_3f5k0k_k$();
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.foundation.lazy.grid.LazyGridItemPlacementAnimator.<get-hasAnimations>.<anonymous>' call
        if (get_specs_0(_this__u8e3s4.getParentData_dqnln6_k$(index)) == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          return true;
        }
      }
       while (inductionVariable < times);
    return false;
  }
  function sam$kotlin_Comparator$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_0).compare_bczr_k$ = function (a, b) {
    return this.function_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).compare = function (a, b) {
    return this.compare_bczr_k$(a, b);
  };
  function LazyGridItemPlacementAnimator$onMeasured$lambda($previousKeyToIndexMap) {
    return function (a, b) {
      // Inline function 'kotlin.comparisons.compareValuesBy' call
      // Inline function 'androidx.compose.foundation.lazy.grid.LazyGridItemPlacementAnimator.onMeasured.<anonymous>' call
      var tmp = $previousKeyToIndexMap.getIndex_xxb61u_k$(b.get_key_18j28a_k$());
      // Inline function 'androidx.compose.foundation.lazy.grid.LazyGridItemPlacementAnimator.onMeasured.<anonymous>' call
      var tmp$ret$1 = $previousKeyToIndexMap.getIndex_xxb61u_k$(a.get_key_18j28a_k$());
      return compareValues(tmp, tmp$ret$1);
    };
  }
  function LazyGridItemPlacementAnimator$onMeasured$lambda_0($previousKeyToIndexMap) {
    return function (a, b) {
      // Inline function 'kotlin.comparisons.compareValuesBy' call
      // Inline function 'androidx.compose.foundation.lazy.grid.LazyGridItemPlacementAnimator.onMeasured.<anonymous>' call
      var tmp = $previousKeyToIndexMap.getIndex_xxb61u_k$(a.get_key_18j28a_k$());
      // Inline function 'androidx.compose.foundation.lazy.grid.LazyGridItemPlacementAnimator.onMeasured.<anonymous>' call
      var tmp$ret$1 = $previousKeyToIndexMap.getIndex_xxb61u_k$(b.get_key_18j28a_k$());
      return compareValues(tmp, tmp$ret$1);
    };
  }
  function LazyGridItemPlacementAnimator$onMeasured$lambda_1(this$0) {
    return function (a, b) {
      // Inline function 'kotlin.comparisons.compareValuesBy' call
      // Inline function 'androidx.compose.foundation.lazy.grid.LazyGridItemPlacementAnimator.onMeasured.<anonymous>' call
      var tmp = this$0.keyIndexMap_1.getIndex_xxb61u_k$(b.get_key_18j28a_k$());
      // Inline function 'androidx.compose.foundation.lazy.grid.LazyGridItemPlacementAnimator.onMeasured.<anonymous>' call
      var tmp$ret$1 = this$0.keyIndexMap_1.getIndex_xxb61u_k$(a.get_key_18j28a_k$());
      return compareValues(tmp, tmp$ret$1);
    };
  }
  function LazyGridItemPlacementAnimator$onMeasured$lambda_2(this$0) {
    return function (a, b) {
      // Inline function 'kotlin.comparisons.compareValuesBy' call
      // Inline function 'androidx.compose.foundation.lazy.grid.LazyGridItemPlacementAnimator.onMeasured.<anonymous>' call
      var tmp = this$0.keyIndexMap_1.getIndex_xxb61u_k$(a.get_key_18j28a_k$());
      // Inline function 'androidx.compose.foundation.lazy.grid.LazyGridItemPlacementAnimator.onMeasured.<anonymous>' call
      var tmp$ret$1 = this$0.keyIndexMap_1.getIndex_xxb61u_k$(b.get_key_18j28a_k$());
      return compareValues(tmp, tmp$ret$1);
    };
  }
  function LazyGridItemPlacementAnimator() {
    this.keyToItemInfoMap_1 = mutableScatterMapOf();
    this.keyIndexMap_1 = Empty_getInstance();
    this.firstVisibleIndex_1 = 0;
    this.movingAwayKeys_1 = mutableScatterSetOf();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.movingInFromStartBound_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.movingInFromEndBound_1 = ArrayList_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.movingAwayToStartBound_1 = ArrayList_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_2.movingAwayToEndBound_1 = ArrayList_init_$Create$();
  }
  protoOf(LazyGridItemPlacementAnimator).onMeasured_joz56s_k$ = function (consumedScroll, layoutWidth, layoutHeight, positionedItems, itemProvider, spanLayoutProvider, isVertical, coroutineScope) {
    var tmp;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastAny' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = positionedItems.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = positionedItems.get_c1px32_k$(index);
          // Inline function 'androidx.compose.ui.util.fastAny.<anonymous>' call
          // Inline function 'androidx.compose.foundation.lazy.grid.LazyGridItemPlacementAnimator.onMeasured.<anonymous>' call
          if (_get_hasAnimations__pyw8qw_0(item, this)) {
            tmp$ret$1 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = false;
    }
    if (!tmp$ret$1) {
      tmp = this.keyToItemInfoMap_1.isEmpty_y1axqb_k$();
    } else {
      tmp = false;
    }
    if (tmp) {
      this.reset_5u6xz3_k$();
      return Unit_getInstance();
    }
    var previousFirstVisibleIndex = this.firstVisibleIndex_1;
    var tmp_0 = this;
    var tmp0_safe_receiver = firstOrNull(positionedItems);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_index_it478p_k$();
    tmp_0.firstVisibleIndex_1 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var previousKeyToIndexMap = this.keyIndexMap_1;
    this.keyIndexMap_1 = itemProvider.get_keyIndexMap_54cmgw_k$();
    var mainAxisLayoutSize = isVertical ? layoutHeight : layoutWidth;
    var tmp_1;
    if (isVertical) {
      tmp_1 = IntOffset_0(0, consumedScroll);
    } else {
      tmp_1 = IntOffset_0(consumedScroll, 0);
    }
    var scrollOffset = tmp_1;
    // Inline function 'androidx.collection.ScatterMap.forEachKey' call
    var this_0 = this.keyToItemInfoMap_1;
    var k = this_0.get_keys_wop4xp_k$();
    $l$block_0: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this_0.get_metadata_vs95vc_k$();
      var lastIndex = m.length - 2 | 0;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 <= lastIndex)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_1 = slot;
          if (!this_1.and_4spn93_k$(this_1.inv_28kx_k$().shl_bg8if3_k$(7)).and_4spn93_k$(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_1 = 0;
            if (inductionVariable_1 < bitCount)
              do {
                var j = inductionVariable_1;
                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.and_4spn93_k$(new Long(255, 0)).compareTo_9jj042_k$(new Long(128, 0)) < 0) {
                  var index_0 = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterMap.forEachKey.<anonymous>' call
                  // Inline function 'androidx.compose.foundation.lazy.grid.LazyGridItemPlacementAnimator.onMeasured.<anonymous>' call
                  var tmp_2 = k[index_0];
                  var it = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
                  this.movingAwayKeys_1.add_utx5q5_k$(it);
                }
                slot = slot.shr_9fl3wl_k$(8);
              }
               while (inductionVariable_1 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block_0;
            }
          }
        }
         while (!(i === lastIndex));
    }
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_2 = 0;
    var last_0 = positionedItems.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_2 <= last_0)
      do {
        var index_1 = inductionVariable_2;
        inductionVariable_2 = inductionVariable_2 + 1 | 0;
        var item_0 = positionedItems.get_c1px32_k$(index_1);
        // Inline function 'androidx.compose.foundation.lazy.grid.LazyGridItemPlacementAnimator.onMeasured.<anonymous>' call
        this.movingAwayKeys_1.remove_cedx0m_k$(item_0.get_key_18j28a_k$());
        if (_get_hasAnimations__pyw8qw_0(item_0, this)) {
          var itemInfo = this.keyToItemInfoMap_1.get_wei43m_k$(item_0.get_key_18j28a_k$());
          if (itemInfo == null) {
            var newItemInfo = new ItemInfo_0(item_0.get_crossAxisSize_vn6o3d_k$(), item_0.get_crossAxisOffset_6qne2z_k$());
            newItemInfo.updateAnimation_u2hbxq_k$(item_0, coroutineScope);
            this.keyToItemInfoMap_1.set_b9w55f_k$(item_0.get_key_18j28a_k$(), newItemInfo);
            var previousIndex = previousKeyToIndexMap.getIndex_xxb61u_k$(item_0.get_key_18j28a_k$());
            if (!(previousIndex === -1) ? !(item_0.get_index_it478p_k$() === previousIndex) : false) {
              if (previousIndex < previousFirstVisibleIndex) {
                this.movingInFromStartBound_1.add_utx5q5_k$(item_0);
              } else {
                this.movingInFromEndBound_1.add_utx5q5_k$(item_0);
              }
            } else {
              // Inline function 'kotlin.let' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'androidx.compose.foundation.lazy.grid.LazyGridItemPlacementAnimator.onMeasured.<anonymous>.<anonymous>' call
              var it_0 = item_0.get_offset_bksmdx_k$();
              var tmp$ret$6 = item_0.get_isVertical_4x9emh_k$() ? _IntOffset___get_y__impl__2avpwj(it_0) : _IntOffset___get_x__impl__qiqr5o(it_0);
              initializeAnimation_0(this, item_0, tmp$ret$6, newItemInfo);
            }
          } else {
            // Inline function 'kotlin.collections.forEach' call
            var indexedObject = itemInfo.animations_1;
            var inductionVariable_3 = 0;
            var last_1 = indexedObject.length;
            while (inductionVariable_3 < last_1) {
              var element = indexedObject[inductionVariable_3];
              inductionVariable_3 = inductionVariable_3 + 1 | 0;
              // Inline function 'androidx.compose.foundation.lazy.grid.LazyGridItemPlacementAnimator.onMeasured.<anonymous>.<anonymous>' call
              if (!(element == null) ? !equals(element.get_rawOffset_3ik8vz_k$(), Companion_getInstance_34().get_NotInitialized_kwrmrr_k$()) : false) {
                // Inline function 'androidx.compose.ui.unit.IntOffset.plus' call
                var this_2 = element.get_rawOffset_3ik8vz_k$();
                var tmp$ret$7 = IntOffset_0(_IntOffset___get_x__impl__qiqr5o(this_2) + _IntOffset___get_x__impl__qiqr5o(scrollOffset) | 0, _IntOffset___get_y__impl__2avpwj(this_2) + _IntOffset___get_y__impl__2avpwj(scrollOffset) | 0);
                element.set_rawOffset_91xt99_k$(tmp$ret$7);
              }
            }
            itemInfo.crossAxisSize_1 = item_0.get_crossAxisSize_vn6o3d_k$();
            itemInfo.crossAxisOffset_1 = item_0.get_crossAxisOffset_6qne2z_k$();
            startAnimationsIfNeeded(this, item_0);
          }
        } else {
          this.keyToItemInfoMap_1.remove_gppy8k_k$(item_0.get_key_18j28a_k$());
        }
      }
       while (inductionVariable_2 <= last_0);
    var accumulatedOffset = 0;
    var previousLine = -1;
    var previousLineMainAxisSize = 0;
    // Inline function 'kotlin.collections.sortByDescending' call
    var this_3 = this.movingInFromStartBound_1;
    if (this_3.get_size_woubt6_k$() > 1) {
      // Inline function 'kotlin.comparisons.compareByDescending' call
      var tmp_3 = LazyGridItemPlacementAnimator$onMeasured$lambda(previousKeyToIndexMap);
      var tmp$ret$8 = new sam$kotlin_Comparator$0_0(tmp_3);
      sortWith(this_3, tmp$ret$8);
    }
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_4 = this.movingInFromStartBound_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_4 = 0;
    var last_2 = this_4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_4 <= last_2)
      do {
        var index_2 = inductionVariable_4;
        inductionVariable_4 = inductionVariable_4 + 1 | 0;
        var item_1 = this_4.get_c1px32_k$(index_2);
        // Inline function 'androidx.compose.foundation.lazy.grid.LazyGridItemPlacementAnimator.onMeasured.<anonymous>' call
        var line = isVertical ? item_1.get_row_18iwsv_k$() : item_1.get_column_c05ahr_k$();
        if (!(line === -1) ? line === previousLine : false) {
          // Inline function 'kotlin.comparisons.maxOf' call
          var a = previousLineMainAxisSize;
          var b = item_1.get_mainAxisSize_vd88f0_k$();
          previousLineMainAxisSize = Math.max(a, b);
        } else {
          accumulatedOffset = accumulatedOffset + previousLineMainAxisSize | 0;
          previousLineMainAxisSize = item_1.get_mainAxisSize_vd88f0_k$();
          previousLine = line;
        }
        var mainAxisOffset = (0 - accumulatedOffset | 0) - item_1.get_mainAxisSize_vd88f0_k$() | 0;
        initializeAnimation$default_0(this, item_1, mainAxisOffset);
        startAnimationsIfNeeded(this, item_1);
      }
       while (inductionVariable_4 <= last_2);
    accumulatedOffset = 0;
    previousLine = -1;
    previousLineMainAxisSize = 0;
    // Inline function 'kotlin.collections.sortBy' call
    var this_5 = this.movingInFromEndBound_1;
    if (this_5.get_size_woubt6_k$() > 1) {
      // Inline function 'kotlin.comparisons.compareBy' call
      var tmp_4 = LazyGridItemPlacementAnimator$onMeasured$lambda_0(previousKeyToIndexMap);
      var tmp$ret$10 = new sam$kotlin_Comparator$0_0(tmp_4);
      sortWith(this_5, tmp$ret$10);
    }
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_6 = this.movingInFromEndBound_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_5 = 0;
    var last_3 = this_6.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_5 <= last_3)
      do {
        var index_3 = inductionVariable_5;
        inductionVariable_5 = inductionVariable_5 + 1 | 0;
        var item_2 = this_6.get_c1px32_k$(index_3);
        // Inline function 'androidx.compose.foundation.lazy.grid.LazyGridItemPlacementAnimator.onMeasured.<anonymous>' call
        var line_0 = isVertical ? item_2.get_row_18iwsv_k$() : item_2.get_column_c05ahr_k$();
        if (!(line_0 === -1) ? line_0 === previousLine : false) {
          // Inline function 'kotlin.comparisons.maxOf' call
          var a_0 = previousLineMainAxisSize;
          var b_0 = item_2.get_mainAxisSize_vd88f0_k$();
          previousLineMainAxisSize = Math.max(a_0, b_0);
        } else {
          accumulatedOffset = accumulatedOffset + previousLineMainAxisSize | 0;
          previousLineMainAxisSize = item_2.get_mainAxisSize_vd88f0_k$();
          previousLine = line_0;
        }
        var mainAxisOffset_0 = mainAxisLayoutSize + accumulatedOffset | 0;
        initializeAnimation$default_0(this, item_2, mainAxisOffset_0);
        startAnimationsIfNeeded(this, item_2);
      }
       while (inductionVariable_5 <= last_3);
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    var this_7 = this.movingAwayKeys_1;
    // Inline function 'kotlin.contracts.contract' call
    var k_0 = this_7.get_elements_vxwh8g_k$();
    $l$block_2: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m_0 = this_7.get_metadata_vs95vc_k$();
      var lastIndex_0 = m_0.length - 2 | 0;
      var inductionVariable_6 = 0;
      if (inductionVariable_6 <= lastIndex_0)
        do {
          var i_0 = inductionVariable_6;
          inductionVariable_6 = inductionVariable_6 + 1 | 0;
          var slot_0 = m_0[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_8 = slot_0;
          if (!this_8.and_4spn93_k$(this_8.inv_28kx_k$().shl_bg8if3_k$(7)).and_4spn93_k$(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
            var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
            var inductionVariable_7 = 0;
            if (inductionVariable_7 < bitCount_0)
              do {
                var j_0 = inductionVariable_7;
                inductionVariable_7 = inductionVariable_7 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot_0.and_4spn93_k$(new Long(255, 0)).compareTo_9jj042_k$(new Long(128, 0)) < 0) {
                  var index_4 = (i_0 << 3) + j_0 | 0;
                  // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                  // Inline function 'androidx.compose.foundation.lazy.grid.LazyGridItemPlacementAnimator.onMeasured.<anonymous>' call
                  var tmp_5 = k_0[index_4];
                  var key = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
                  var itemInfo_0 = ensureNotNull(this.keyToItemInfoMap_1.get_wei43m_k$(key));
                  var newIndex = this.keyIndexMap_1.getIndex_xxb61u_k$(key);
                  if (newIndex === -1) {
                    this.keyToItemInfoMap_1.remove_gppy8k_k$(key);
                  } else {
                    var tmp_6;
                    if (isVertical) {
                      tmp_6 = Companion_getInstance_12().fixedWidth_sctdsx_k$(itemInfo_0.crossAxisSize_1);
                    } else {
                      tmp_6 = Companion_getInstance_12().fixedHeight_x1j7yw_k$(itemInfo_0.crossAxisSize_1);
                    }
                    var item_3 = itemProvider.getAndMeasure$default_6oljvs_k$(newIndex, VOID, tmp_6);
                    item_3.set_nonScrollableItem_6u8ted_k$(true);
                    var tmp$ret$15;
                    $l$block_1: {
                      // Inline function 'kotlin.collections.any' call
                      var indexedObject_0 = itemInfo_0.animations_1;
                      var inductionVariable_8 = 0;
                      var last_4 = indexedObject_0.length;
                      while (inductionVariable_8 < last_4) {
                        var element_0 = indexedObject_0[inductionVariable_8];
                        inductionVariable_8 = inductionVariable_8 + 1 | 0;
                        // Inline function 'androidx.compose.foundation.lazy.grid.LazyGridItemPlacementAnimator.onMeasured.<anonymous>.<anonymous>' call
                        if ((element_0 == null ? null : element_0.get_isPlacementAnimationInProgress_h8jcfw_k$()) === true) {
                          tmp$ret$15 = true;
                          break $l$block_1;
                        }
                      }
                      tmp$ret$15 = false;
                    }
                    var inProgress = tmp$ret$15;
                    if (!inProgress ? newIndex === previousKeyToIndexMap.getIndex_xxb61u_k$(key) : false) {
                      this.keyToItemInfoMap_1.remove_gppy8k_k$(key);
                    } else {
                      if (newIndex < this.firstVisibleIndex_1) {
                        this.movingAwayToStartBound_1.add_utx5q5_k$(item_3);
                      } else {
                        this.movingAwayToEndBound_1.add_utx5q5_k$(item_3);
                      }
                    }
                  }
                }
                slot_0 = slot_0.shr_9fl3wl_k$(8);
              }
               while (inductionVariable_7 < bitCount_0);
            if (!(bitCount_0 === 8)) {
              break $l$block_2;
            }
          }
        }
         while (!(i_0 === lastIndex_0));
    }
    accumulatedOffset = 0;
    previousLine = -1;
    previousLineMainAxisSize = 0;
    // Inline function 'kotlin.collections.sortByDescending' call
    var this_9 = this.movingAwayToStartBound_1;
    if (this_9.get_size_woubt6_k$() > 1) {
      // Inline function 'kotlin.comparisons.compareByDescending' call
      var tmp_7 = LazyGridItemPlacementAnimator$onMeasured$lambda_1(this);
      var tmp$ret$17 = new sam$kotlin_Comparator$0_0(tmp_7);
      sortWith(this_9, tmp$ret$17);
    }
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_10 = this.movingAwayToStartBound_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_9 = 0;
    var last_5 = this_10.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_9 <= last_5)
      do {
        var index_5 = inductionVariable_9;
        inductionVariable_9 = inductionVariable_9 + 1 | 0;
        var item_4 = this_10.get_c1px32_k$(index_5);
        // Inline function 'androidx.compose.foundation.lazy.grid.LazyGridItemPlacementAnimator.onMeasured.<anonymous>' call
        var line_1 = spanLayoutProvider.getLineIndexOfItem_z9rpwm_k$(item_4.get_index_it478p_k$());
        if (!(line_1 === -1) ? line_1 === previousLine : false) {
          // Inline function 'kotlin.comparisons.maxOf' call
          var a_1 = previousLineMainAxisSize;
          var b_1 = item_4.get_mainAxisSize_vd88f0_k$();
          previousLineMainAxisSize = Math.max(a_1, b_1);
        } else {
          accumulatedOffset = accumulatedOffset + previousLineMainAxisSize | 0;
          previousLineMainAxisSize = item_4.get_mainAxisSize_vd88f0_k$();
          previousLine = line_1;
        }
        var mainAxisOffset_1 = (0 - accumulatedOffset | 0) - item_4.get_mainAxisSize_vd88f0_k$() | 0;
        var itemInfo_1 = ensureNotNull(this.keyToItemInfoMap_1.get_wei43m_k$(item_4.get_key_18j28a_k$()));
        item_4.position$default_8imwmc_k$(mainAxisOffset_1, itemInfo_1.crossAxisOffset_1, layoutWidth, layoutHeight);
        positionedItems.add_utx5q5_k$(item_4);
        startAnimationsIfNeeded(this, item_4);
      }
       while (inductionVariable_9 <= last_5);
    accumulatedOffset = 0;
    previousLine = -1;
    previousLineMainAxisSize = 0;
    // Inline function 'kotlin.collections.sortBy' call
    var this_11 = this.movingAwayToEndBound_1;
    if (this_11.get_size_woubt6_k$() > 1) {
      // Inline function 'kotlin.comparisons.compareBy' call
      var tmp_8 = LazyGridItemPlacementAnimator$onMeasured$lambda_2(this);
      var tmp$ret$19 = new sam$kotlin_Comparator$0_0(tmp_8);
      sortWith(this_11, tmp$ret$19);
    }
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_12 = this.movingAwayToEndBound_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_10 = 0;
    var last_6 = this_12.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_10 <= last_6)
      do {
        var index_6 = inductionVariable_10;
        inductionVariable_10 = inductionVariable_10 + 1 | 0;
        var item_5 = this_12.get_c1px32_k$(index_6);
        // Inline function 'androidx.compose.foundation.lazy.grid.LazyGridItemPlacementAnimator.onMeasured.<anonymous>' call
        var line_2 = spanLayoutProvider.getLineIndexOfItem_z9rpwm_k$(item_5.get_index_it478p_k$());
        if (!(line_2 === -1) ? line_2 === previousLine : false) {
          // Inline function 'kotlin.comparisons.maxOf' call
          var a_2 = previousLineMainAxisSize;
          var b_2 = item_5.get_mainAxisSize_vd88f0_k$();
          previousLineMainAxisSize = Math.max(a_2, b_2);
        } else {
          accumulatedOffset = accumulatedOffset + previousLineMainAxisSize | 0;
          previousLineMainAxisSize = item_5.get_mainAxisSize_vd88f0_k$();
          previousLine = line_2;
        }
        var mainAxisOffset_2 = mainAxisLayoutSize + accumulatedOffset | 0;
        var itemInfo_2 = ensureNotNull(this.keyToItemInfoMap_1.get_wei43m_k$(item_5.get_key_18j28a_k$()));
        item_5.position$default_8imwmc_k$(mainAxisOffset_2, itemInfo_2.crossAxisOffset_1, layoutWidth, layoutHeight);
        positionedItems.add_utx5q5_k$(item_5);
        startAnimationsIfNeeded(this, item_5);
      }
       while (inductionVariable_10 <= last_6);
    this.movingInFromStartBound_1.clear_j9egeb_k$();
    this.movingInFromEndBound_1.clear_j9egeb_k$();
    this.movingAwayToStartBound_1.clear_j9egeb_k$();
    this.movingAwayToEndBound_1.clear_j9egeb_k$();
    this.movingAwayKeys_1.clear_j9egeb_k$();
  };
  protoOf(LazyGridItemPlacementAnimator).reset_5u6xz3_k$ = function () {
    this.keyToItemInfoMap_1.clear_j9egeb_k$();
    this.keyIndexMap_1 = Empty_getInstance();
    this.firstVisibleIndex_1 = -1;
  };
  protoOf(LazyGridItemPlacementAnimator).getAnimation_5261aw_k$ = function (key, placeableIndex) {
    var tmp;
    if (this.keyToItemInfoMap_1.isEmpty_y1axqb_k$()) {
      tmp = null;
    } else {
      var tmp0_safe_receiver = this.keyToItemInfoMap_1.get_wei43m_k$(key);
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.animations_1;
      tmp = tmp1_safe_receiver == null ? null : tmp1_safe_receiver[placeableIndex];
    }
    return tmp;
  };
  function _set_animations__2tmn7s_0($this, _set____db54di) {
    $this.animations_1 = _set____db54di;
  }
  function ItemInfo_0(crossAxisSize, crossAxisOffset) {
    this.crossAxisSize_1 = crossAxisSize;
    this.crossAxisOffset_1 = crossAxisOffset;
    this.animations_1 = get_EmptyArray_0();
  }
  protoOf(ItemInfo_0).set_crossAxisSize_is8jvh_k$ = function (_set____db54di) {
    this.crossAxisSize_1 = _set____db54di;
  };
  protoOf(ItemInfo_0).get_crossAxisSize_vn6o3d_k$ = function () {
    return this.crossAxisSize_1;
  };
  protoOf(ItemInfo_0).set_crossAxisOffset_h5kgi9_k$ = function (_set____db54di) {
    this.crossAxisOffset_1 = _set____db54di;
  };
  protoOf(ItemInfo_0).get_crossAxisOffset_6qne2z_k$ = function () {
    return this.crossAxisOffset_1;
  };
  protoOf(ItemInfo_0).get_animations_ez9gco_k$ = function () {
    return this.animations_1;
  };
  protoOf(ItemInfo_0).updateAnimation_u2hbxq_k$ = function (positionedItem, coroutineScope) {
    var inductionVariable = positionedItem.get_placeablesCount_3f5k0k_k$();
    var last = this.animations_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_safe_receiver = this.animations_1[i];
        if (tmp1_safe_receiver == null)
          null;
        else {
          tmp1_safe_receiver.stopAnimations_7tom2n_k$();
        }
      }
       while (inductionVariable < last);
    if (!(this.animations_1.length === positionedItem.get_placeablesCount_3f5k0k_k$())) {
      this.animations_1 = copyOf(this.animations_1, positionedItem.get_placeablesCount_3f5k0k_k$());
    }
    // Inline function 'kotlin.repeat' call
    var times = positionedItem.get_placeablesCount_3f5k0k_k$();
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < times)
      do {
        var index = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.foundation.lazy.grid.ItemInfo.updateAnimation.<anonymous>' call
        var specs = get_specs_0(positionedItem.getParentData_dqnln6_k$(index));
        if (specs == null) {
          var tmp0_safe_receiver = this.animations_1[index];
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.stopAnimations_7tom2n_k$();
          }
          this.animations_1[index] = null;
        } else {
          var tmp1_elvis_lhs = this.animations_1[index];
          var tmp;
          if (tmp1_elvis_lhs == null) {
            // Inline function 'kotlin.also' call
            var this_0 = new LazyLayoutAnimation(coroutineScope);
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.foundation.lazy.grid.ItemInfo.updateAnimation.<anonymous>.<anonymous>' call
            this.animations_1[index] = this_0;
            tmp = this_0;
          } else {
            tmp = tmp1_elvis_lhs;
          }
          var item = tmp;
          item.set_appearanceSpec_r5i506_k$(specs.get_appearanceSpec_987hrs_k$());
          item.set_placementSpec_ooa865_k$(specs.get_placementSpec_cshd61_k$());
        }
      }
       while (inductionVariable_0 < times);
  };
  function get_specs_0(_this__u8e3s4) {
    _init_properties_LazyGridItemPlacementAnimator_kt__mafnv7();
    return _this__u8e3s4 instanceof LazyLayoutAnimationSpecsNode ? _this__u8e3s4 : null;
  }
  var properties_initialized_LazyGridItemPlacementAnimator_kt_ef5tzl;
  function _init_properties_LazyGridItemPlacementAnimator_kt__mafnv7() {
    if (!properties_initialized_LazyGridItemPlacementAnimator_kt_ef5tzl) {
      properties_initialized_LazyGridItemPlacementAnimator_kt_ef5tzl = true;
      // Inline function 'kotlin.emptyArray' call
      EmptyArray_0 = [];
    }
  }
  function LazyGridItemProvider() {
  }
  function LazyGridItemScope() {
  }
  function LazyGridLayoutInfo() {
  }
  function LazyGridMeasureResult(firstVisibleLine, firstVisibleLineScrollOffset, canScrollForward, consumedScroll, measureResult, remeasureNeeded, visibleItemsInfo, viewportStartOffset, viewportEndOffset, totalItemsCount, reverseLayout, orientation, afterContentPadding, mainAxisItemSpacing) {
    this.firstVisibleLine_1 = firstVisibleLine;
    this.firstVisibleLineScrollOffset_1 = firstVisibleLineScrollOffset;
    this.canScrollForward_1 = canScrollForward;
    this.consumedScroll_1 = consumedScroll;
    this.remeasureNeeded_1 = remeasureNeeded;
    this.visibleItemsInfo_1 = visibleItemsInfo;
    this.viewportStartOffset_1 = viewportStartOffset;
    this.viewportEndOffset_1 = viewportEndOffset;
    this.totalItemsCount_1 = totalItemsCount;
    this.reverseLayout_1 = reverseLayout;
    this.orientation_1 = orientation;
    this.afterContentPadding_1 = afterContentPadding;
    this.mainAxisItemSpacing_1 = mainAxisItemSpacing;
    this.$$delegate_0__1 = measureResult;
  }
  protoOf(LazyGridMeasureResult).get_firstVisibleLine_l496yp_k$ = function () {
    return this.firstVisibleLine_1;
  };
  protoOf(LazyGridMeasureResult).set_firstVisibleLineScrollOffset_522jor_k$ = function (_set____db54di) {
    this.firstVisibleLineScrollOffset_1 = _set____db54di;
  };
  protoOf(LazyGridMeasureResult).get_firstVisibleLineScrollOffset_sxxuzl_k$ = function () {
    return this.firstVisibleLineScrollOffset_1;
  };
  protoOf(LazyGridMeasureResult).set_canScrollForward_gclgc0_k$ = function (_set____db54di) {
    this.canScrollForward_1 = _set____db54di;
  };
  protoOf(LazyGridMeasureResult).get_canScrollForward_dmb0fj_k$ = function () {
    return this.canScrollForward_1;
  };
  protoOf(LazyGridMeasureResult).set_consumedScroll_6ihamu_k$ = function (_set____db54di) {
    this.consumedScroll_1 = _set____db54di;
  };
  protoOf(LazyGridMeasureResult).get_consumedScroll_u59rku_k$ = function () {
    return this.consumedScroll_1;
  };
  protoOf(LazyGridMeasureResult).get_remeasureNeeded_9nwf49_k$ = function () {
    return this.remeasureNeeded_1;
  };
  protoOf(LazyGridMeasureResult).get_visibleItemsInfo_uew4qj_k$ = function () {
    return this.visibleItemsInfo_1;
  };
  protoOf(LazyGridMeasureResult).get_viewportStartOffset_v4b1ay_k$ = function () {
    return this.viewportStartOffset_1;
  };
  protoOf(LazyGridMeasureResult).get_viewportEndOffset_gapdi7_k$ = function () {
    return this.viewportEndOffset_1;
  };
  protoOf(LazyGridMeasureResult).get_totalItemsCount_aiolgq_k$ = function () {
    return this.totalItemsCount_1;
  };
  protoOf(LazyGridMeasureResult).get_reverseLayout_nclvnn_k$ = function () {
    return this.reverseLayout_1;
  };
  protoOf(LazyGridMeasureResult).get_orientation_9wu93t_k$ = function () {
    return this.orientation_1;
  };
  protoOf(LazyGridMeasureResult).get_afterContentPadding_49ooob_k$ = function () {
    return this.afterContentPadding_1;
  };
  protoOf(LazyGridMeasureResult).get_mainAxisItemSpacing_tq19t9_k$ = function () {
    return this.mainAxisItemSpacing_1;
  };
  protoOf(LazyGridMeasureResult).get_alignmentLines_nx3i05_k$ = function () {
    return this.$$delegate_0__1.get_alignmentLines_nx3i05_k$();
  };
  protoOf(LazyGridMeasureResult).get_height_e7t92o_k$ = function () {
    return this.$$delegate_0__1.get_height_e7t92o_k$();
  };
  protoOf(LazyGridMeasureResult).get_width_j0q4yl_k$ = function () {
    return this.$$delegate_0__1.get_width_j0q4yl_k$();
  };
  protoOf(LazyGridMeasureResult).placeChildren_kds4oa_k$ = function () {
    this.$$delegate_0__1.placeChildren_kds4oa_k$();
  };
  protoOf(LazyGridMeasureResult).get_canScrollBackward_v2t7h3_k$ = function () {
    var tmp;
    var tmp0_safe_receiver = this.firstVisibleLine_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_index_it478p_k$();
    if (!((tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) === 0)) {
      tmp = true;
    } else {
      tmp = !(this.firstVisibleLineScrollOffset_1 === 0);
    }
    return tmp;
  };
  protoOf(LazyGridMeasureResult).get_viewportSize_hnfbdb_k$ = function () {
    return IntSize(this.get_width_j0q4yl_k$(), this.get_height_e7t92o_k$());
  };
  protoOf(LazyGridMeasureResult).get_beforeContentPadding_2dperk_k$ = function () {
    return -this.viewportStartOffset_1 | 0;
  };
  protoOf(LazyGridMeasureResult).tryToApplyScrollWithoutRemeasure_sdxfxs_k$ = function (delta) {
    var tmp;
    if ((this.remeasureNeeded_1 ? true : this.visibleItemsInfo_1.isEmpty_y1axqb_k$()) ? true : this.firstVisibleLine_1 == null) {
      tmp = true;
    } else {
      var containsUpper = this.firstVisibleLine_1.get_mainAxisSizeWithSpacings_lrjtoa_k$();
      var containsArg = this.firstVisibleLineScrollOffset_1 - delta | 0;
      tmp = !(0 <= containsArg ? containsArg < containsUpper : false);
    }
    if (tmp) {
      return false;
    }
    var first_0 = first(this.visibleItemsInfo_1);
    var last_0 = last(this.visibleItemsInfo_1);
    if (first_0.get_nonScrollableItem_5xqaji_k$() ? true : last_0.get_nonScrollableItem_5xqaji_k$()) {
      return false;
    }
    var tmp_0;
    if (delta < 0) {
      var deltaToFirstItemChange = (offsetOnMainAxis(first_0, this.orientation_1) + first_0.get_mainAxisSizeWithSpacings_lrjtoa_k$() | 0) - this.viewportStartOffset_1 | 0;
      var deltaToLastItemChange = (offsetOnMainAxis(last_0, this.orientation_1) + last_0.get_mainAxisSizeWithSpacings_lrjtoa_k$() | 0) - this.viewportEndOffset_1 | 0;
      // Inline function 'kotlin.comparisons.minOf' call
      tmp_0 = Math.min(deltaToFirstItemChange, deltaToLastItemChange) > (-delta | 0);
    } else {
      var deltaToFirstItemChange_0 = this.viewportStartOffset_1 - offsetOnMainAxis(first_0, this.orientation_1) | 0;
      var deltaToLastItemChange_0 = this.viewportEndOffset_1 - offsetOnMainAxis(last_0, this.orientation_1) | 0;
      // Inline function 'kotlin.comparisons.minOf' call
      tmp_0 = Math.min(deltaToFirstItemChange_0, deltaToLastItemChange_0) > delta;
    }
    var canApply = tmp_0;
    var tmp_1;
    if (canApply) {
      this.firstVisibleLineScrollOffset_1 = this.firstVisibleLineScrollOffset_1 - delta | 0;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var this_0 = this.visibleItemsInfo_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last_1 = this_0.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last_1)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.get_c1px32_k$(index);
          // Inline function 'androidx.compose.foundation.lazy.grid.LazyGridMeasureResult.tryToApplyScrollWithoutRemeasure.<anonymous>' call
          item.applyScrollDelta_knnih7_k$(delta);
        }
         while (inductionVariable <= last_1);
      this.consumedScroll_1 = delta;
      if (!this.canScrollForward_1 ? delta > 0 : false) {
        this.canScrollForward_1 = true;
      }
      tmp_1 = true;
    } else {
      tmp_1 = false;
    }
    return tmp_1;
  };
  function _get_reverseLayout__b4hu1n_0($this) {
    return $this.reverseLayout_1;
  }
  function _get_layoutDirection__u3l5q4_0($this) {
    return $this.layoutDirection_1;
  }
  function _get_beforeContentPadding__8jxpx0_0($this) {
    return $this.beforeContentPadding_1;
  }
  function _get_afterContentPadding__razem5_0($this) {
    return $this.afterContentPadding_1;
  }
  function _get_placeables__otc5bb_0($this) {
    return $this.placeables_1;
  }
  function _get_visualOffset__slruiw_0($this) {
    return $this.visualOffset_1;
  }
  function _get_animator__s0xiyk_0($this) {
    return $this.animator_1;
  }
  function _set_mainAxisLayoutSize__frif1q_0($this, _set____db54di) {
    $this.mainAxisLayoutSize_1 = _set____db54di;
  }
  function _get_mainAxisLayoutSize__lbqbt2_0($this) {
    return $this.mainAxisLayoutSize_1;
  }
  function _set_minMainAxisOffset__bsxkee_0($this, _set____db54di) {
    $this.minMainAxisOffset_1 = _set____db54di;
  }
  function _get_minMainAxisOffset__9wvbvy_0($this) {
    return $this.minMainAxisOffset_1;
  }
  function _set_maxMainAxisOffset__wfzltg_0($this, _set____db54di) {
    $this.maxMainAxisOffset_1 = _set____db54di;
  }
  function _get_maxMainAxisOffset__aq6pj4_0($this) {
    return $this.maxMainAxisOffset_1;
  }
  function _set_offset__aq0ezo_0($this, _set____db54di) {
    $this.offset_1 = _set____db54di;
  }
  function _set_row__4wdkdn($this, _set____db54di) {
    $this.row_1 = _set____db54di;
  }
  function _set_column__izs2v3($this, _set____db54di) {
    $this.column_1 = _set____db54di;
  }
  function _get_mainAxis__jwdafl_0(_this__u8e3s4, $this) {
    return $this.isVertical_1 ? _IntOffset___get_y__impl__2avpwj(_this__u8e3s4) : _IntOffset___get_x__impl__qiqr5o(_this__u8e3s4);
  }
  function _get_mainAxisSize__iyci34_0(_this__u8e3s4, $this) {
    return $this.isVertical_1 ? _this__u8e3s4.get_height_e7t92o_k$() : _this__u8e3s4.get_width_j0q4yl_k$();
  }
  function copy_1(_this__u8e3s4, $this, mainAxisMap) {
    return IntOffset_0($this.isVertical_1 ? _IntOffset___get_x__impl__qiqr5o(_this__u8e3s4) : mainAxisMap(_IntOffset___get_x__impl__qiqr5o(_this__u8e3s4)), $this.isVertical_1 ? mainAxisMap(_IntOffset___get_y__impl__2avpwj(_this__u8e3s4)) : _IntOffset___get_y__impl__2avpwj(_this__u8e3s4));
  }
  function LazyGridMeasuredItem(index, key, isVertical, crossAxisSize, mainAxisSpacing, reverseLayout, layoutDirection, beforeContentPadding, afterContentPadding, placeables, visualOffset, contentType, animator) {
    this.index_1 = index;
    this.key_1 = key;
    this.isVertical_1 = isVertical;
    this.crossAxisSize_1 = crossAxisSize;
    this.reverseLayout_1 = reverseLayout;
    this.layoutDirection_1 = layoutDirection;
    this.beforeContentPadding_1 = beforeContentPadding;
    this.afterContentPadding_1 = afterContentPadding;
    this.placeables_1 = placeables;
    this.visualOffset_1 = visualOffset;
    this.contentType_1 = contentType;
    this.animator_1 = animator;
    this.mainAxisLayoutSize_1 = -2147483648;
    this.minMainAxisOffset_1 = 0;
    this.maxMainAxisOffset_1 = 0;
    var maxMainAxis = 0;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.placeables_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.get_c1px32_k$(index_0);
        // Inline function 'androidx.compose.foundation.lazy.grid.LazyGridMeasuredItem.<anonymous>' call
        // Inline function 'kotlin.comparisons.maxOf' call
        var a = maxMainAxis;
        var b = this.isVertical_1 ? item.get_height_e7t92o_k$() : item.get_width_j0q4yl_k$();
        maxMainAxis = Math.max(a, b);
      }
       while (inductionVariable <= last);
    this.mainAxisSize_1 = maxMainAxis;
    this.mainAxisSizeWithSpacings_1 = coerceAtLeast(maxMainAxis + mainAxisSpacing | 0, 0);
    var tmp = this;
    var tmp_0;
    if (this.isVertical_1) {
      tmp_0 = IntSize(this.crossAxisSize_1, this.mainAxisSize_1);
    } else {
      tmp_0 = IntSize(this.mainAxisSize_1, this.crossAxisSize_1);
    }
    tmp.size_1 = tmp_0;
    this.offset_1 = Companion_getInstance_11().get_Zero_6hc3i8_k$();
    this.row_1 = Companion_getInstance_33().get_UnknownRow_vzm09l_k$();
    this.column_1 = Companion_getInstance_33().get_UnknownColumn_wltaev_k$();
    this.nonScrollableItem_1 = false;
  }
  protoOf(LazyGridMeasuredItem).get_index_it478p_k$ = function () {
    return this.index_1;
  };
  protoOf(LazyGridMeasuredItem).get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  protoOf(LazyGridMeasuredItem).get_isVertical_4x9emh_k$ = function () {
    return this.isVertical_1;
  };
  protoOf(LazyGridMeasuredItem).get_crossAxisSize_vn6o3d_k$ = function () {
    return this.crossAxisSize_1;
  };
  protoOf(LazyGridMeasuredItem).get_contentType_7git4a_k$ = function () {
    return this.contentType_1;
  };
  protoOf(LazyGridMeasuredItem).get_mainAxisSize_vd88f0_k$ = function () {
    return this.mainAxisSize_1;
  };
  protoOf(LazyGridMeasuredItem).get_mainAxisSizeWithSpacings_lrjtoa_k$ = function () {
    return this.mainAxisSizeWithSpacings_1;
  };
  protoOf(LazyGridMeasuredItem).get_placeablesCount_3f5k0k_k$ = function () {
    return this.placeables_1.get_size_woubt6_k$();
  };
  protoOf(LazyGridMeasuredItem).getParentData_dqnln6_k$ = function (index) {
    return this.placeables_1.get_c1px32_k$(index).get_parentData_o87vnn_k$();
  };
  protoOf(LazyGridMeasuredItem).get_size_kd98kr_k$ = function () {
    return this.size_1;
  };
  protoOf(LazyGridMeasuredItem).get_offset_bksmdx_k$ = function () {
    return this.offset_1;
  };
  protoOf(LazyGridMeasuredItem).get_crossAxisOffset_6qne2z_k$ = function () {
    return this.isVertical_1 ? _IntOffset___get_x__impl__qiqr5o(this.offset_1) : _IntOffset___get_y__impl__2avpwj(this.offset_1);
  };
  protoOf(LazyGridMeasuredItem).get_row_18iwsv_k$ = function () {
    return this.row_1;
  };
  protoOf(LazyGridMeasuredItem).get_column_c05ahr_k$ = function () {
    return this.column_1;
  };
  protoOf(LazyGridMeasuredItem).set_nonScrollableItem_6u8ted_k$ = function (_set____db54di) {
    this.nonScrollableItem_1 = _set____db54di;
  };
  protoOf(LazyGridMeasuredItem).get_nonScrollableItem_5xqaji_k$ = function () {
    return this.nonScrollableItem_1;
  };
  protoOf(LazyGridMeasuredItem).position_js6ryx_k$ = function (mainAxisOffset, crossAxisOffset, layoutWidth, layoutHeight, row, column) {
    this.mainAxisLayoutSize_1 = this.isVertical_1 ? layoutHeight : layoutWidth;
    var crossAxisLayoutSize = this.isVertical_1 ? layoutWidth : layoutHeight;
    var tmp;
    if (this.isVertical_1 ? this.layoutDirection_1.equals(LayoutDirection_Rtl_getInstance()) : false) {
      tmp = (crossAxisLayoutSize - crossAxisOffset | 0) - this.crossAxisSize_1 | 0;
    } else {
      tmp = crossAxisOffset;
    }
    var crossAxisOffset_0 = tmp;
    var tmp_0 = this;
    var tmp_1;
    if (this.isVertical_1) {
      tmp_1 = IntOffset_0(crossAxisOffset_0, mainAxisOffset);
    } else {
      tmp_1 = IntOffset_0(mainAxisOffset, crossAxisOffset_0);
    }
    tmp_0.offset_1 = tmp_1;
    this.row_1 = row;
    this.column_1 = column;
    this.minMainAxisOffset_1 = -this.beforeContentPadding_1 | 0;
    this.maxMainAxisOffset_1 = this.mainAxisLayoutSize_1 + this.afterContentPadding_1 | 0;
  };
  protoOf(LazyGridMeasuredItem).position$default_8imwmc_k$ = function (mainAxisOffset, crossAxisOffset, layoutWidth, layoutHeight, row, column, $super) {
    row = row === VOID ? Companion_getInstance_33().get_UnknownRow_vzm09l_k$() : row;
    column = column === VOID ? Companion_getInstance_33().get_UnknownColumn_wltaev_k$() : column;
    var tmp;
    if ($super === VOID) {
      this.position_js6ryx_k$(mainAxisOffset, crossAxisOffset, layoutWidth, layoutHeight, row, column);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.position_js6ryx_k$.call(this, mainAxisOffset, crossAxisOffset, layoutWidth, layoutHeight, row, column);
    }
    return tmp;
  };
  protoOf(LazyGridMeasuredItem).applyScrollDelta_knnih7_k$ = function (delta) {
    if (this.nonScrollableItem_1) {
      return Unit_getInstance();
    }
    var tmp = this;
    // Inline function 'androidx.compose.foundation.lazy.grid.LazyGridMeasuredItem.copy' call
    var this_0 = this.offset_1;
    var tmp_0;
    if (this.isVertical_1) {
      tmp_0 = _IntOffset___get_x__impl__qiqr5o(this_0);
    } else {
      // Inline function 'androidx.compose.foundation.lazy.grid.LazyGridMeasuredItem.applyScrollDelta.<anonymous>' call
      tmp_0 = _IntOffset___get_x__impl__qiqr5o(this_0) + delta | 0;
    }
    var tmp_1 = tmp_0;
    var tmp_2;
    if (this.isVertical_1) {
      // Inline function 'androidx.compose.foundation.lazy.grid.LazyGridMeasuredItem.applyScrollDelta.<anonymous>' call
      tmp_2 = _IntOffset___get_y__impl__2avpwj(this_0) + delta | 0;
    } else {
      tmp_2 = _IntOffset___get_y__impl__2avpwj(this_0);
    }
    tmp.offset_1 = IntOffset_0(tmp_1, tmp_2);
    // Inline function 'kotlin.repeat' call
    var times = this.get_placeablesCount_3f5k0k_k$();
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.foundation.lazy.grid.LazyGridMeasuredItem.applyScrollDelta.<anonymous>' call
        var animation = this.animator_1.getAnimation_5261aw_k$(this.key_1, index);
        if (!(animation == null)) {
          // Inline function 'androidx.compose.foundation.lazy.grid.LazyGridMeasuredItem.copy' call
          var this_1 = animation.get_rawOffset_3ik8vz_k$();
          var tmp_3;
          if (this.isVertical_1) {
            tmp_3 = _IntOffset___get_x__impl__qiqr5o(this_1);
          } else {
            // Inline function 'androidx.compose.foundation.lazy.grid.LazyGridMeasuredItem.applyScrollDelta.<anonymous>.<anonymous>' call
            tmp_3 = _IntOffset___get_x__impl__qiqr5o(this_1) + delta | 0;
          }
          var tmp_4 = tmp_3;
          var tmp_5;
          if (this.isVertical_1) {
            // Inline function 'androidx.compose.foundation.lazy.grid.LazyGridMeasuredItem.applyScrollDelta.<anonymous>.<anonymous>' call
            tmp_5 = _IntOffset___get_y__impl__2avpwj(this_1) + delta | 0;
          } else {
            tmp_5 = _IntOffset___get_y__impl__2avpwj(this_1);
          }
          var tmp$ret$5 = IntOffset_0(tmp_4, tmp_5);
          animation.set_rawOffset_91xt99_k$(tmp$ret$5);
        }
      }
       while (inductionVariable < times);
  };
  protoOf(LazyGridMeasuredItem).place_hh3oo2_k$ = function (scope) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(this.mainAxisLayoutSize_1 === -2147483648)) {
      // Inline function 'androidx.compose.foundation.lazy.grid.LazyGridMeasuredItem.place.<anonymous>.<anonymous>' call
      var message = 'position() should be called first';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var times = this.get_placeablesCount_3f5k0k_k$();
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var tmp;
    if (inductionVariable < times) {
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.foundation.lazy.grid.LazyGridMeasuredItem.place.<anonymous>.<anonymous>' call
        var placeable = this.placeables_1.get_c1px32_k$(index);
        var minOffset = this.minMainAxisOffset_1 - _get_mainAxisSize__iyci34_0(placeable, this) | 0;
        var maxOffset = this.maxMainAxisOffset_1;
        var offset = this.offset_1;
        var animation = this.animator_1.getAnimation_5261aw_k$(this.key_1, index);
        if (!(animation == null)) {
          // Inline function 'androidx.compose.ui.unit.IntOffset.plus' call
          var this_0 = offset;
          var other = animation.get_placementDelta_36vqi3_k$();
          var animatedOffset = IntOffset_0(_IntOffset___get_x__impl__qiqr5o(this_0) + _IntOffset___get_x__impl__qiqr5o(other) | 0, _IntOffset___get_y__impl__2avpwj(this_0) + _IntOffset___get_y__impl__2avpwj(other) | 0);
          if ((_get_mainAxis__jwdafl_0(offset, this) <= minOffset ? _get_mainAxis__jwdafl_0(animatedOffset, this) <= minOffset : false) ? true : _get_mainAxis__jwdafl_0(offset, this) >= maxOffset ? _get_mainAxis__jwdafl_0(animatedOffset, this) >= maxOffset : false) {
            animation.cancelPlacementAnimation_9u9r4n_k$();
          }
          offset = animatedOffset;
        }
        if (this.reverseLayout_1) {
          // Inline function 'androidx.compose.foundation.lazy.grid.LazyGridMeasuredItem.copy' call
          var this_1 = offset;
          var tmp_0;
          if (this.isVertical_1) {
            tmp_0 = _IntOffset___get_x__impl__qiqr5o(this_1);
          } else {
            // Inline function 'androidx.compose.foundation.lazy.grid.LazyGridMeasuredItem.place.<anonymous>.<anonymous>.<anonymous>' call
            var mainAxisOffset = _IntOffset___get_x__impl__qiqr5o(this_1);
            tmp_0 = (this.mainAxisLayoutSize_1 - mainAxisOffset | 0) - _get_mainAxisSize__iyci34_0(placeable, this) | 0;
          }
          var tmp_1 = tmp_0;
          var tmp_2;
          if (this.isVertical_1) {
            // Inline function 'androidx.compose.foundation.lazy.grid.LazyGridMeasuredItem.place.<anonymous>.<anonymous>.<anonymous>' call
            var mainAxisOffset_0 = _IntOffset___get_y__impl__2avpwj(this_1);
            tmp_2 = (this.mainAxisLayoutSize_1 - mainAxisOffset_0 | 0) - _get_mainAxisSize__iyci34_0(placeable, this) | 0;
          } else {
            tmp_2 = _IntOffset___get_y__impl__2avpwj(this_1);
          }
          offset = IntOffset_0(tmp_1, tmp_2);
        }
        // Inline function 'androidx.compose.ui.unit.IntOffset.plus' call
        var this_2 = offset;
        var other_0 = this.visualOffset_1;
        offset = IntOffset_0(_IntOffset___get_x__impl__qiqr5o(this_2) + _IntOffset___get_x__impl__qiqr5o(other_0) | 0, _IntOffset___get_y__impl__2avpwj(this_2) + _IntOffset___get_y__impl__2avpwj(other_0) | 0);
        if (this.isVertical_1) {
          scope.placeWithLayer$default_yt7uj9_k$(placeable, offset);
        } else {
          scope.placeRelativeWithLayer$default_1hz9dt_k$(placeable, offset);
        }
      }
       while (inductionVariable < times);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  function get_Unset_0() {
    return Unset_0;
  }
  var Unset_0;
  function _get_itemProvider__opdbc7_0($this) {
    return $this.itemProvider_1;
  }
  function _get_measureScope__aqf6gl_0($this) {
    return $this.measureScope_1;
  }
  function _get_defaultMainAxisSpacing__dyzh3x($this) {
    return $this.defaultMainAxisSpacing_1;
  }
  function LazyGridMeasuredItemProvider(itemProvider, measureScope, defaultMainAxisSpacing) {
    this.itemProvider_1 = itemProvider;
    this.measureScope_1 = measureScope;
    this.defaultMainAxisSpacing_1 = defaultMainAxisSpacing;
  }
  protoOf(LazyGridMeasuredItemProvider).getAndMeasure_ol4u76_k$ = function (index, mainAxisSpacing, constraints) {
    var key = this.itemProvider_1.getKey_stxcen_k$(index);
    var contentType = this.itemProvider_1.getContentType_ooo485_k$(index);
    var placeables = this.measureScope_1.measure_roc4md_k$(index, constraints);
    var tmp;
    if (_Constraints___get_hasFixedWidth__impl__4p17wc(constraints)) {
      tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints);
    } else {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!_Constraints___get_hasFixedHeight__impl__y56fxx(constraints)) {
        // Inline function 'androidx.compose.foundation.lazy.grid.LazyGridMeasuredItemProvider.getAndMeasure.<anonymous>' call
        var message = 'does not have fixed height';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      tmp = _Constraints___get_minHeight__impl__ev4bgx(constraints);
    }
    var crossAxisSize = tmp;
    return this.createItem_7tmbco_k$(index, key, contentType, crossAxisSize, mainAxisSpacing, placeables);
  };
  protoOf(LazyGridMeasuredItemProvider).getAndMeasure$default_6oljvs_k$ = function (index, mainAxisSpacing, constraints, $super) {
    mainAxisSpacing = mainAxisSpacing === VOID ? this.defaultMainAxisSpacing_1 : mainAxisSpacing;
    return $super === VOID ? this.getAndMeasure_ol4u76_k$(index, mainAxisSpacing, constraints) : $super.getAndMeasure_ol4u76_k$.call(this, index, mainAxisSpacing, new Constraints_0(constraints));
  };
  protoOf(LazyGridMeasuredItemProvider).get_keyIndexMap_54cmgw_k$ = function () {
    return this.itemProvider_1.get_keyIndexMap_54cmgw_k$();
  };
  function _get_slots__bd4r7o($this) {
    return $this.slots_1;
  }
  function _get_spans__bb6n3s($this) {
    return $this.spans_1;
  }
  function _get_isVertical__yidrg5($this) {
    return $this.isVertical_1;
  }
  function _get_mainAxisSpacing__ei3m48($this) {
    return $this.mainAxisSpacing_1;
  }
  function LazyGridMeasuredLine(index, items, slots, spans, isVertical, mainAxisSpacing) {
    this.index_1 = index;
    this.items_1 = items;
    this.slots_1 = slots;
    this.spans_1 = spans;
    this.isVertical_1 = isVertical;
    this.mainAxisSpacing_1 = mainAxisSpacing;
    var maxMainAxis = 0;
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = this.items_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.foundation.lazy.grid.LazyGridMeasuredLine.<anonymous>' call
      // Inline function 'kotlin.comparisons.maxOf' call
      var a = maxMainAxis;
      var b = element.get_mainAxisSize_vd88f0_k$();
      maxMainAxis = Math.max(a, b);
    }
    this.mainAxisSize_1 = maxMainAxis;
    this.mainAxisSizeWithSpacings_1 = coerceAtLeast(maxMainAxis + this.mainAxisSpacing_1 | 0, 0);
  }
  protoOf(LazyGridMeasuredLine).get_index_it478p_k$ = function () {
    return this.index_1;
  };
  protoOf(LazyGridMeasuredLine).get_items_it823b_k$ = function () {
    return this.items_1;
  };
  protoOf(LazyGridMeasuredLine).get_mainAxisSize_vd88f0_k$ = function () {
    return this.mainAxisSize_1;
  };
  protoOf(LazyGridMeasuredLine).get_mainAxisSizeWithSpacings_lrjtoa_k$ = function () {
    return this.mainAxisSizeWithSpacings_1;
  };
  protoOf(LazyGridMeasuredLine).isEmpty_y1axqb_k$ = function () {
    // Inline function 'kotlin.collections.isEmpty' call
    return this.items_1.length === 0;
  };
  protoOf(LazyGridMeasuredLine).position_gdm7n5_k$ = function (offset, layoutWidth, layoutHeight) {
    var usedSpan = 0;
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var indexedObject = this.items_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var item = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.foundation.lazy.grid.LazyGridMeasuredLine.position.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var span = _GridItemSpan___get_currentLineSpan__impl__sg7kqc(this.spans_1.get_c1px32_k$(tmp1).packedValue_1);
      var startSlot = usedSpan;
      // Inline function 'kotlin.also' call
      item.position_js6ryx_k$(offset, this.slots_1.get_positions_ya7scf_k$()[startSlot], layoutWidth, layoutHeight, this.isVertical_1 ? this.index_1 : startSlot, this.isVertical_1 ? startSlot : this.index_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.lazy.grid.LazyGridMeasuredLine.position.<anonymous>.<anonymous>' call
      usedSpan = usedSpan + span | 0;
    }
    return this.items_1;
  };
  function LazyGridScopeMarker() {
  }
  protoOf(LazyGridScopeMarker).equals = function (other) {
    if (!(other instanceof LazyGridScopeMarker))
      return false;
    other instanceof LazyGridScopeMarker || THROW_CCE();
    return true;
  };
  protoOf(LazyGridScopeMarker).hashCode = function () {
    return 0;
  };
  protoOf(LazyGridScopeMarker).toString = function () {
    return '@androidx.compose.foundation.lazy.grid.LazyGridScopeMarker()';
  };
  function _GridItemSpan___init__impl__x45lr6(packedValue) {
    return packedValue;
  }
  function _get_packedValue__aj623s($this) {
    return $this;
  }
  function _GridItemSpan___get_currentLineSpan__impl__sg7kqc($this) {
    return _get_packedValue__aj623s($this).toInt_1tsl84_k$();
  }
  function GridItemSpan__toString_impl_aecw6a($this) {
    return 'GridItemSpan(packedValue=' + $this.toString() + ')';
  }
  function GridItemSpan__hashCode_impl_w5isz5($this) {
    return $this.hashCode();
  }
  function GridItemSpan__equals_impl_og48vf($this, other) {
    if (!(other instanceof GridItemSpan))
      return false;
    var tmp0_other_with_cast = other instanceof GridItemSpan ? other.packedValue_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function GridItemSpan(packedValue) {
    this.packedValue_1 = packedValue;
  }
  protoOf(GridItemSpan).toString = function () {
    return GridItemSpan__toString_impl_aecw6a(this.packedValue_1);
  };
  protoOf(GridItemSpan).hashCode = function () {
    return GridItemSpan__hashCode_impl_w5isz5(this.packedValue_1);
  };
  protoOf(GridItemSpan).equals = function (other) {
    return GridItemSpan__equals_impl_og48vf(this.packedValue_1, other);
  };
  function GridItemSpan_0(currentLineSpan) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(currentLineSpan > 0)) {
      // Inline function 'androidx.compose.foundation.lazy.grid.GridItemSpan.<anonymous>' call
      var message = 'The span value should be higher than 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return _GridItemSpan___init__impl__x45lr6(toLong(currentLineSpan));
  }
  function LazyGridItemSpanScope() {
  }
  function _get_gridContent__flazc2($this) {
    return $this.gridContent_1;
  }
  function LineConfiguration(firstItemIndex, spans) {
    this.firstItemIndex_1 = firstItemIndex;
    this.spans_1 = spans;
  }
  protoOf(LineConfiguration).get_firstItemIndex_ibwg54_k$ = function () {
    return this.firstItemIndex_1;
  };
  protoOf(LineConfiguration).get_spans_iynd4w_k$ = function () {
    return this.spans_1;
  };
  function _get_buckets__8n7fc8($this) {
    return $this.buckets_1;
  }
  function _get_bucketSize__qovgv4($this) {
    // Inline function 'kotlin.math.sqrt' call
    var x = 1.0 * $this.get_totalSize_116z44_k$() / $this.slotsPerLine_1;
    var tmp$ret$0 = Math.sqrt(x);
    return numberToInt(tmp$ret$0) + 1 | 0;
  }
  function _set_lastLineIndex__jftofx($this, _set____db54di) {
    $this.lastLineIndex_1 = _set____db54di;
  }
  function _get_lastLineIndex__4825xl($this) {
    return $this.lastLineIndex_1;
  }
  function _set_lastLineStartItemIndex__3qcj9s($this, _set____db54di) {
    $this.lastLineStartItemIndex_1 = _set____db54di;
  }
  function _get_lastLineStartItemIndex__iiqx5w($this) {
    return $this.lastLineStartItemIndex_1;
  }
  function _set_lastLineStartKnownSpan__i1g3um($this, _set____db54di) {
    $this.lastLineStartKnownSpan_1 = _set____db54di;
  }
  function _get_lastLineStartKnownSpan__47ncl2($this) {
    return $this.lastLineStartKnownSpan_1;
  }
  function _set_cachedBucketIndex__uz33sv($this, _set____db54di) {
    $this.cachedBucketIndex_1 = _set____db54di;
  }
  function _get_cachedBucketIndex__99a7ij($this) {
    return $this.cachedBucketIndex_1;
  }
  function _get_cachedBucket__ucf673($this) {
    return $this.cachedBucket_1;
  }
  function _set_previousDefaultSpans__i20vew($this, _set____db54di) {
    $this.previousDefaultSpans_1 = _set____db54di;
  }
  function _get_previousDefaultSpans__w03jf8($this) {
    return $this.previousDefaultSpans_1;
  }
  function getDefaultSpans($this, currentSlotsPerLine) {
    var tmp;
    if (currentSlotsPerLine === $this.previousDefaultSpans_1.get_size_woubt6_k$()) {
      tmp = $this.previousDefaultSpans_1;
    } else {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.collections.List' call
      // Inline function 'kotlin.collections.MutableList' call
      var list = ArrayList_init_$Create$_0(currentSlotsPerLine);
      // Inline function 'kotlin.repeat' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < currentSlotsPerLine)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlin.collections.MutableList.<anonymous>' call
          // Inline function 'androidx.compose.foundation.lazy.grid.LazyGridSpanLayoutProvider.getDefaultSpans.<anonymous>' call
          var tmp$ret$0 = GridItemSpan_0(1);
          list.add_utx5q5_k$(new GridItemSpan(tmp$ret$0));
        }
         while (inductionVariable < currentSlotsPerLine);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.lazy.grid.LazyGridSpanLayoutProvider.getDefaultSpans.<anonymous>' call
      $this.previousDefaultSpans_1 = list;
      tmp = list;
    }
    return tmp;
  }
  function invalidateCache($this) {
    $this.buckets_1.clear_j9egeb_k$();
    $this.buckets_1.add_utx5q5_k$(new Bucket(0));
    $this.lastLineIndex_1 = 0;
    $this.lastLineStartItemIndex_1 = 0;
    $this.lastLineStartKnownSpan_1 = 0;
    $this.cachedBucketIndex_1 = -1;
    $this.cachedBucket_1.clear_j9egeb_k$();
  }
  function Bucket(firstItemIndex, firstItemKnownSpan) {
    firstItemKnownSpan = firstItemKnownSpan === VOID ? 0 : firstItemKnownSpan;
    this.firstItemIndex_1 = firstItemIndex;
    this.firstItemKnownSpan_1 = firstItemKnownSpan;
  }
  protoOf(Bucket).get_firstItemIndex_ibwg54_k$ = function () {
    return this.firstItemIndex_1;
  };
  protoOf(Bucket).get_firstItemKnownSpan_1luj9v_k$ = function () {
    return this.firstItemKnownSpan_1;
  };
  function LazyGridItemSpanScopeImpl() {
    LazyGridItemSpanScopeImpl_instance = this;
    this.maxCurrentLineSpan_1 = 0;
    this.maxLineSpan_1 = 0;
  }
  protoOf(LazyGridItemSpanScopeImpl).set_maxCurrentLineSpan_6z31qw_k$ = function (_set____db54di) {
    this.maxCurrentLineSpan_1 = _set____db54di;
  };
  protoOf(LazyGridItemSpanScopeImpl).get_maxCurrentLineSpan_4crtz8_k$ = function () {
    return this.maxCurrentLineSpan_1;
  };
  protoOf(LazyGridItemSpanScopeImpl).set_maxLineSpan_q6w1p9_k$ = function (_set____db54di) {
    this.maxLineSpan_1 = _set____db54di;
  };
  protoOf(LazyGridItemSpanScopeImpl).get_maxLineSpan_3v985j_k$ = function () {
    return this.maxLineSpan_1;
  };
  var LazyGridItemSpanScopeImpl_instance;
  function LazyGridItemSpanScopeImpl_getInstance() {
    if (LazyGridItemSpanScopeImpl_instance == null)
      new LazyGridItemSpanScopeImpl();
    return LazyGridItemSpanScopeImpl_instance;
  }
  function LazyGridSpanLayoutProvider$getLineIndexOfItem$lambda($itemIndex) {
    return function (it) {
      return it.firstItemIndex_1 - $itemIndex | 0;
    };
  }
  function LazyGridSpanLayoutProvider(gridContent) {
    this.gridContent_1 = gridContent;
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.lazy.grid.LazyGridSpanLayoutProvider.buckets.<anonymous>' call
    this_0.add_utx5q5_k$(new Bucket(0));
    tmp.buckets_1 = this_0;
    this.lastLineIndex_1 = 0;
    this.lastLineStartItemIndex_1 = 0;
    this.lastLineStartKnownSpan_1 = 0;
    this.cachedBucketIndex_1 = -1;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.cachedBucket_1 = ArrayList_init_$Create$();
    this.previousDefaultSpans_1 = emptyList();
    this.slotsPerLine_1 = 0;
  }
  protoOf(LazyGridSpanLayoutProvider).get_totalSize_116z44_k$ = function () {
    return this.gridContent_1.get_intervals_gu2011_k$().get_size_woubt6_k$();
  };
  protoOf(LazyGridSpanLayoutProvider).set_slotsPerLine_u20q27_k$ = function (value) {
    if (!(value === this.slotsPerLine_1)) {
      this.slotsPerLine_1 = value;
      invalidateCache(this);
    }
  };
  protoOf(LazyGridSpanLayoutProvider).get_slotsPerLine_note6d_k$ = function () {
    return this.slotsPerLine_1;
  };
  protoOf(LazyGridSpanLayoutProvider).getLineConfiguration_tbiaxg_k$ = function (lineIndex) {
    if (!this.gridContent_1.get_hasCustomSpans_23oryf_k$()) {
      var firstItemIndex = imul(lineIndex, this.slotsPerLine_1);
      return new LineConfiguration(firstItemIndex, getDefaultSpans(this, coerceAtLeast(coerceAtMost(this.slotsPerLine_1, this.get_totalSize_116z44_k$() - firstItemIndex | 0), 0)));
    }
    // Inline function 'kotlin.math.min' call
    var a = lineIndex / _get_bucketSize__qovgv4(this) | 0;
    var b = this.buckets_1.get_size_woubt6_k$() - 1 | 0;
    var bucketIndex = Math.min(a, b);
    var currentLine = imul(bucketIndex, _get_bucketSize__qovgv4(this));
    var currentItemIndex = this.buckets_1.get_c1px32_k$(bucketIndex).firstItemIndex_1;
    var knownCurrentItemSpan = this.buckets_1.get_c1px32_k$(bucketIndex).firstItemKnownSpan_1;
    var containsArg = this.lastLineIndex_1;
    if (currentLine <= containsArg ? containsArg <= lineIndex : false) {
      currentLine = this.lastLineIndex_1;
      currentItemIndex = this.lastLineStartItemIndex_1;
      knownCurrentItemSpan = this.lastLineStartKnownSpan_1;
    } else {
      if (bucketIndex === this.cachedBucketIndex_1 ? (lineIndex - currentLine | 0) < this.cachedBucket_1.get_size_woubt6_k$() : false) {
        currentItemIndex = this.cachedBucket_1.get_c1px32_k$(lineIndex - currentLine | 0);
        currentLine = lineIndex;
        knownCurrentItemSpan = 0;
      }
    }
    var tmp;
    if ((currentLine % _get_bucketSize__qovgv4(this) | 0) === 0) {
      var containsUpper = _get_bucketSize__qovgv4(this);
      var containsArg_0 = lineIndex - currentLine | 0;
      tmp = 2 <= containsArg_0 ? containsArg_0 < containsUpper : false;
    } else {
      tmp = false;
    }
    var cacheThisBucket = tmp;
    if (cacheThisBucket) {
      this.cachedBucketIndex_1 = bucketIndex;
      this.cachedBucket_1.clear_j9egeb_k$();
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(currentLine <= lineIndex)) {
      // Inline function 'androidx.compose.foundation.lazy.grid.LazyGridSpanLayoutProvider.getLineConfiguration.<anonymous>' call
      var message = 'currentLine > lineIndex';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    while (currentLine < lineIndex ? currentItemIndex < this.get_totalSize_116z44_k$() : false) {
      if (cacheThisBucket) {
        this.cachedBucket_1.add_utx5q5_k$(currentItemIndex);
      }
      var spansUsed = 0;
      $l$loop: while (spansUsed < this.slotsPerLine_1 ? currentItemIndex < this.get_totalSize_116z44_k$() : false) {
        var tmp_0;
        if (knownCurrentItemSpan === 0) {
          tmp_0 = this.spanOf_a6505b_k$(currentItemIndex, this.slotsPerLine_1 - spansUsed | 0);
        } else {
          // Inline function 'kotlin.also' call
          var this_0 = knownCurrentItemSpan;
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.foundation.lazy.grid.LazyGridSpanLayoutProvider.getLineConfiguration.<anonymous>' call
          knownCurrentItemSpan = 0;
          tmp_0 = this_0;
        }
        var span = tmp_0;
        if ((spansUsed + span | 0) > this.slotsPerLine_1) {
          knownCurrentItemSpan = span;
          break $l$loop;
        }
        currentItemIndex = currentItemIndex + 1 | 0;
        spansUsed = spansUsed + span | 0;
      }
      currentLine = currentLine + 1 | 0;
      if ((currentLine % _get_bucketSize__qovgv4(this) | 0) === 0 ? currentItemIndex < this.get_totalSize_116z44_k$() : false) {
        var currentLineBucket = currentLine / _get_bucketSize__qovgv4(this) | 0;
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(this.buckets_1.get_size_woubt6_k$() === currentLineBucket)) {
          // Inline function 'androidx.compose.foundation.lazy.grid.LazyGridSpanLayoutProvider.getLineConfiguration.<anonymous>' call
          var message_0 = 'invalid starting point';
          throw IllegalStateException_init_$Create$(toString(message_0));
        }
        this.buckets_1.add_utx5q5_k$(new Bucket(currentItemIndex, knownCurrentItemSpan));
      }
    }
    this.lastLineIndex_1 = lineIndex;
    this.lastLineStartItemIndex_1 = currentItemIndex;
    this.lastLineStartKnownSpan_1 = knownCurrentItemSpan;
    var firstItemIndex_0 = currentItemIndex;
    // Inline function 'kotlin.collections.mutableListOf' call
    var spans = ArrayList_init_$Create$();
    var spansUsed_0 = 0;
    $l$loop_0: while (spansUsed_0 < this.slotsPerLine_1 ? currentItemIndex < this.get_totalSize_116z44_k$() : false) {
      var tmp_1;
      if (knownCurrentItemSpan === 0) {
        tmp_1 = this.spanOf_a6505b_k$(currentItemIndex, this.slotsPerLine_1 - spansUsed_0 | 0);
      } else {
        // Inline function 'kotlin.also' call
        var this_1 = knownCurrentItemSpan;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.foundation.lazy.grid.LazyGridSpanLayoutProvider.getLineConfiguration.<anonymous>' call
        knownCurrentItemSpan = 0;
        tmp_1 = this_1;
      }
      var span_0 = tmp_1;
      if ((spansUsed_0 + span_0 | 0) > this.slotsPerLine_1)
        break $l$loop_0;
      currentItemIndex = currentItemIndex + 1 | 0;
      spans.add_utx5q5_k$(new GridItemSpan(GridItemSpan_0(span_0)));
      spansUsed_0 = spansUsed_0 + span_0 | 0;
    }
    return new LineConfiguration(firstItemIndex_0, spans);
  };
  protoOf(LazyGridSpanLayoutProvider).getLineIndexOfItem_z9rpwm_k$ = function (itemIndex) {
    if (this.get_totalSize_116z44_k$() <= 0) {
      return 0;
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(itemIndex < this.get_totalSize_116z44_k$())) {
      // Inline function 'androidx.compose.foundation.lazy.grid.LazyGridSpanLayoutProvider.getLineIndexOfItem.<anonymous>' call
      var message = 'ItemIndex > total count';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (!this.gridContent_1.get_hasCustomSpans_23oryf_k$()) {
      return itemIndex / this.slotsPerLine_1 | 0;
    }
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.lazy.grid.LazyGridSpanLayoutProvider.getLineIndexOfItem.<anonymous>' call
    var it = binarySearch(this.buckets_1, VOID, VOID, LazyGridSpanLayoutProvider$getLineIndexOfItem$lambda(itemIndex));
    var lowerBoundBucket = it >= 0 ? it : (-it | 0) - 2 | 0;
    var currentLine = imul(lowerBoundBucket, _get_bucketSize__qovgv4(this));
    var currentItemIndex = this.buckets_1.get_c1px32_k$(lowerBoundBucket).firstItemIndex_1;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(currentItemIndex <= itemIndex)) {
      // Inline function 'androidx.compose.foundation.lazy.grid.LazyGridSpanLayoutProvider.getLineIndexOfItem.<anonymous>' call
      var message_0 = 'currentItemIndex > itemIndex';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var spansUsed = 0;
    while (currentItemIndex < itemIndex) {
      var tmp0 = currentItemIndex;
      currentItemIndex = tmp0 + 1 | 0;
      var span = this.spanOf_a6505b_k$(tmp0, this.slotsPerLine_1 - spansUsed | 0);
      if ((spansUsed + span | 0) < this.slotsPerLine_1) {
        spansUsed = spansUsed + span | 0;
      } else if ((spansUsed + span | 0) === this.slotsPerLine_1) {
        currentLine = currentLine + 1 | 0;
        spansUsed = 0;
      } else {
        currentLine = currentLine + 1 | 0;
        spansUsed = span;
      }
      if ((currentLine % _get_bucketSize__qovgv4(this) | 0) === 0) {
        var currentLineBucket = currentLine / _get_bucketSize__qovgv4(this) | 0;
        if (currentLineBucket >= this.buckets_1.get_size_woubt6_k$()) {
          this.buckets_1.add_utx5q5_k$(new Bucket(currentItemIndex - (spansUsed > 0 ? 1 : 0) | 0));
        }
      }
    }
    if ((spansUsed + this.spanOf_a6505b_k$(itemIndex, this.slotsPerLine_1 - spansUsed | 0) | 0) > this.slotsPerLine_1) {
      currentLine = currentLine + 1 | 0;
    }
    return currentLine;
  };
  protoOf(LazyGridSpanLayoutProvider).spanOf_a6505b_k$ = function (itemIndex, maxSpan) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var $this$with = LazyGridItemSpanScopeImpl_getInstance();
    $this$with.maxCurrentLineSpan_1 = maxSpan;
    $this$with.maxLineSpan_1 = this.slotsPerLine_1;
    var interval = this.gridContent_1.get_intervals_gu2011_k$().get_c1px32_k$(itemIndex);
    var localIntervalIndex = itemIndex - interval.get_startIndex_oi1lp5_k$() | 0;
    var span = interval.get_value_j01efc_k$().get_span_wouger_k$()($this$with, localIntervalIndex).packedValue_1;
    return _GridItemSpan___get_currentLineSpan__impl__sg7kqc(span);
  };
  function get_EmptyLazyGridLayoutInfo() {
    _init_properties_LazyGridState_kt__6hut();
    return EmptyLazyGridLayoutInfo;
  }
  var EmptyLazyGridLayoutInfo;
  function EmptyLazyGridLayoutInfo$1() {
    this.width_1 = 0;
    this.height_1 = 0;
    this.alignmentLines_1 = emptyMap();
  }
  protoOf(EmptyLazyGridLayoutInfo$1).get_width_j0q4yl_k$ = function () {
    return this.width_1;
  };
  protoOf(EmptyLazyGridLayoutInfo$1).get_height_e7t92o_k$ = function () {
    return this.height_1;
  };
  protoOf(EmptyLazyGridLayoutInfo$1).get_alignmentLines_nx3i05_k$ = function () {
    return this.alignmentLines_1;
  };
  protoOf(EmptyLazyGridLayoutInfo$1).placeChildren_kds4oa_k$ = function () {
  };
  var properties_initialized_LazyGridState_kt_b7v9uh;
  function _init_properties_LazyGridState_kt__6hut() {
    if (!properties_initialized_LazyGridState_kt_b7v9uh) {
      properties_initialized_LazyGridState_kt_b7v9uh = true;
      var tmp0_measureResult = new EmptyLazyGridLayoutInfo$1();
      var tmp1_visibleItemsInfo = emptyList();
      var tmp2_orientation = Orientation_Vertical_getInstance();
      EmptyLazyGridLayoutInfo = new LazyGridMeasureResult(null, 0, false, 0.0, tmp0_measureResult, false, tmp1_visibleItemsInfo, 0, 0, 0, false, tmp2_orientation, 0, 0);
    }
  }
  function _set_wasPositioned__yfg1kc($this, _set____db54di) {
    $this.wasPositioned_1 = _set____db54di;
  }
  function _get_wasPositioned__ldwhwg($this) {
    return $this.wasPositioned_1;
  }
  function _set_continuation__ijq8sg($this, _set____db54di) {
    $this.continuation_1 = _set____db54di;
  }
  function _get_continuation__y3gzck($this) {
    return $this.continuation_1;
  }
  function $waitForFirstLayoutCOROUTINE$5(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($waitForFirstLayoutCOROUTINE$5).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            if (!this._this__u8e3s4__1.wasPositioned_1) {
              this.oldContinuation0__1 = this._this__u8e3s4__1.continuation_1;
              this.set_state_rjd8d0_k$(1);
              var safe = SafeContinuation_init_$Create$(intercepted(this));
              this._this__u8e3s4__1.continuation_1 = safe;
              suspendResult = returnIfSuspended(safe.getOrThrow_323tdf_k$(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            }

          case 1:
            var tmp0_safe_receiver = this.oldContinuation0__1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              Companion_getInstance_14();
              tmp0_safe_receiver.resumeWith_dtxwbr_k$(_Result___init__impl__xyqfz8(Unit_getInstance()));
            }

            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function AwaitFirstLayoutModifier() {
    this.wasPositioned_1 = false;
    this.continuation_1 = null;
  }
  protoOf(AwaitFirstLayoutModifier).waitForFirstLayout_pyz09d_k$ = function ($completion) {
    var tmp = new $waitForFirstLayoutCOROUTINE$5(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AwaitFirstLayoutModifier).onGloballyPositioned_2kw3tl_k$ = function (coordinates) {
    if (!this.wasPositioned_1) {
      this.wasPositioned_1 = true;
      var tmp0_safe_receiver = this.continuation_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        Companion_getInstance_14();
        var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp0_safe_receiver.resumeWith_dtxwbr_k$(tmp$ret$0);
      }
      this.continuation_1 = null;
    }
  };
  function Interval(startIndex, size, value) {
    this.startIndex_1 = startIndex;
    this.size_1 = size;
    this.value_1 = value;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.startIndex_1 >= 0)) {
      // Inline function 'androidx.compose.foundation.lazy.layout.Interval.<anonymous>' call
      var message = 'startIndex should be >= 0, but was ' + this.startIndex_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.size_1 > 0)) {
      // Inline function 'androidx.compose.foundation.lazy.layout.Interval.<anonymous>' call
      var message_0 = 'size should be >0, but was ' + this.size_1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(Interval).get_startIndex_oi1lp5_k$ = function () {
    return this.startIndex_1;
  };
  protoOf(Interval).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  protoOf(Interval).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  function IntervalList() {
  }
  function _get_intervals__n7kkhv($this) {
    return $this.intervals_1;
  }
  function _set_size__9twho6($this, _set____db54di) {
    $this.size_1 = _set____db54di;
  }
  function _set_lastInterval__ttp16k($this, _set____db54di) {
    $this.lastInterval_1 = _set____db54di;
  }
  function _get_lastInterval__pnoa8g($this) {
    return $this.lastInterval_1;
  }
  function getIntervalForIndex($this, itemIndex) {
    var lastInterval = $this.lastInterval_1;
    var tmp;
    if (!(lastInterval == null) ? contains_0(lastInterval, $this, itemIndex) : false) {
      tmp = lastInterval;
    } else {
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.collection.MutableVector.get' call
      var this_0 = $this.intervals_1;
      var index = binarySearch_0($this.intervals_1, itemIndex);
      var tmp_0 = this_0.get_content_h02jrk_k$()[index];
      var this_1 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.lazy.layout.MutableIntervalList.getIntervalForIndex.<anonymous>' call
      $this.lastInterval_1 = this_1;
      tmp = this_1;
    }
    return tmp;
  }
  function checkIndexBounds($this, index) {
    if (!(0 <= index ? index < $this.size_1 : false)) {
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ', size ' + $this.size_1);
    }
  }
  function contains_0(_this__u8e3s4, $this, index) {
    var containsLower = _this__u8e3s4.startIndex_1;
    return index < (_this__u8e3s4.startIndex_1 + _this__u8e3s4.size_1 | 0) ? containsLower <= index : false;
  }
  function MutableIntervalList() {
    var tmp = this;
    // Inline function 'androidx.compose.runtime.collection.mutableVectorOf' call
    // Inline function 'androidx.compose.runtime.collection.MutableVector' call
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp$ret$0 = fillArrayVal(Array(16), null);
    tmp.intervals_1 = new MutableVector(tmp$ret$0, 0);
    this.size_1 = 0;
    this.lastInterval_1 = null;
  }
  protoOf(MutableIntervalList).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  protoOf(MutableIntervalList).addInterval_7mg825_k$ = function (size, value) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(size >= 0)) {
      // Inline function 'androidx.compose.foundation.lazy.layout.MutableIntervalList.addInterval.<anonymous>' call
      var message = 'size should be >=0, but was ' + size;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (size === 0) {
      return Unit_getInstance();
    }
    var interval = new Interval(this.size_1, size, value);
    this.size_1 = this.size_1 + size | 0;
    this.intervals_1.add_wl2rvy_k$(interval);
  };
  protoOf(MutableIntervalList).forEach_5a9nbg_k$ = function (fromIndex, toIndex, block) {
    checkIndexBounds(this, fromIndex);
    checkIndexBounds(this, toIndex);
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(toIndex >= fromIndex)) {
      // Inline function 'androidx.compose.foundation.lazy.layout.MutableIntervalList.forEach.<anonymous>' call
      var message = 'toIndex (' + toIndex + ') should be not smaller than fromIndex (' + fromIndex + ')';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var intervalIndex = binarySearch_0(this.intervals_1, fromIndex);
    // Inline function 'androidx.compose.runtime.collection.MutableVector.get' call
    var this_0 = this.intervals_1;
    var index = intervalIndex;
    var tmp = this_0.get_content_h02jrk_k$()[index];
    var itemIndex = ((tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE()).startIndex_1;
    while (itemIndex <= toIndex) {
      // Inline function 'androidx.compose.runtime.collection.MutableVector.get' call
      var this_1 = this.intervals_1;
      var index_0 = intervalIndex;
      var tmp_0 = this_1.get_content_h02jrk_k$()[index_0];
      var interval = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      block(interval);
      itemIndex = itemIndex + interval.size_1 | 0;
      intervalIndex = intervalIndex + 1 | 0;
    }
  };
  protoOf(MutableIntervalList).get_c1px32_k$ = function (index) {
    checkIndexBounds(this, index);
    return getIntervalForIndex(this, index);
  };
  function binarySearch_0(_this__u8e3s4, itemIndex) {
    var left = 0;
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    var right = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    while (left < right) {
      var middle = left + ((right - left | 0) / 2 | 0) | 0;
      // Inline function 'androidx.compose.runtime.collection.MutableVector.get' call
      var tmp = _this__u8e3s4.get_content_h02jrk_k$()[middle];
      var middleValue = ((tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE()).startIndex_1;
      if (middleValue === itemIndex) {
        return middle;
      }
      if (middleValue < itemIndex) {
        left = middle + 1 | 0;
        // Inline function 'androidx.compose.runtime.collection.MutableVector.get' call
        var index = left;
        var tmp_0 = _this__u8e3s4.get_content_h02jrk_k$()[index];
        if (itemIndex < ((tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE()).startIndex_1) {
          return middle;
        }
      } else {
        right = middle - 1 | 0;
      }
    }
    return left;
  }
  function get_TargetDistance() {
    _init_properties_LazyAnimateScroll_kt__eqop2w();
    return TargetDistance;
  }
  var TargetDistance;
  function get_BoundDistance() {
    _init_properties_LazyAnimateScroll_kt__eqop2w();
    return BoundDistance;
  }
  var BoundDistance;
  function get_MinimumDistance() {
    _init_properties_LazyAnimateScroll_kt__eqop2w();
    return MinimumDistance;
  }
  var MinimumDistance;
  function animateScrollToItem(_this__u8e3s4, index, scrollOffset, numOfItemsForTeleport, density, $completion) {
    return _this__u8e3s4.scroll_nwg3ga_k$(animateScrollToItem$slambda_0(index, density, _this__u8e3s4, scrollOffset, numOfItemsForTeleport, null), $completion);
  }
  function LazyLayoutAnimateScrollScope() {
  }
  function isItemVisible(_this__u8e3s4, index) {
    _init_properties_LazyAnimateScroll_kt__eqop2w();
    var containsLower = _this__u8e3s4.get_firstVisibleItemIndex_pq52y4_k$();
    return index <= _this__u8e3s4.get_lastVisibleItemIndex_co91as_k$() ? containsLower <= index : false;
  }
  function ItemFoundInScroll(itemOffset, previousAnimation) {
    CancellationException_init_$Init$(this);
    captureStack(this, ItemFoundInScroll);
    this.itemOffset_1 = itemOffset;
    this.previousAnimation_1 = previousAnimation;
  }
  protoOf(ItemFoundInScroll).get_itemOffset_askwlr_k$ = function () {
    return this.itemOffset_1;
  };
  protoOf(ItemFoundInScroll).get_previousAnimation_ugsggs_k$ = function () {
    return this.previousAnimation_1;
  };
  function debugLog(generateMsg) {
    _init_properties_LazyAnimateScroll_kt__eqop2w();
    if (_get_DEBUG_$accessor$11gqe8n_tyffja()) {
      println('LazyScrolling: ' + generateMsg());
    }
  }
  function get_DEBUG() {
    return DEBUG;
  }
  var DEBUG;
  function _get_DEBUG_$accessor$11gqe8n_tyffja() {
    _init_properties_LazyAnimateScroll_kt__eqop2w();
    return false;
  }
  function invoke$isOvershot(forward, $this_animateScrollToItem, $index, $scrollOffset) {
    var tmp;
    if (forward) {
      var tmp_0;
      if ($this_animateScrollToItem.get_firstVisibleItemIndex_pq52y4_k$() > $index) {
        tmp_0 = true;
      } else if ($this_animateScrollToItem.get_firstVisibleItemIndex_pq52y4_k$() === $index ? $this_animateScrollToItem.get_firstVisibleItemScrollOffset_my3xxa_k$() > $scrollOffset : false) {
        tmp_0 = true;
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      var tmp_1;
      if ($this_animateScrollToItem.get_firstVisibleItemIndex_pq52y4_k$() < $index) {
        tmp_1 = true;
      } else if ($this_animateScrollToItem.get_firstVisibleItemIndex_pq52y4_k$() === $index ? $this_animateScrollToItem.get_firstVisibleItemScrollOffset_my3xxa_k$() < $scrollOffset : false) {
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function animateScrollToItem$slambda$lambda($this_animateScrollToItem, $index, $target, $prevValue, $this_scroll, $loop, $forward, $boundDistancePx, $loops, $numOfItemsForTeleport, $scrollOffset, $anim) {
    return function ($this$animateTo) {
      var tmp;
      if (!isItemVisible($this_animateScrollToItem, $index)) {
        var tmp_0;
        if ($target > 0.0) {
          tmp_0 = coerceAtMost_0($this$animateTo.get_value_j01efc_k$(), $target);
        } else {
          tmp_0 = coerceAtLeast_0($this$animateTo.get_value_j01efc_k$(), $target);
        }
        var coercedValue = tmp_0;
        var delta = coercedValue - $prevValue._v;
        // Inline function 'androidx.compose.foundation.lazy.layout.debugLog' call
        if (_get_DEBUG_$accessor$11gqe8n_tyffja()) {
          // Inline function 'androidx.compose.foundation.lazy.layout.animateScrollToItem.<anonymous>.<anonymous>.<anonymous>' call
          var tmp$ret$0 = 'Scrolling by ' + delta + ' (target: ' + $target + ', coercedValue: ' + coercedValue + ')';
          println('LazyScrolling: ' + tmp$ret$0);
        }
        var consumed = $this_scroll.scrollBy_5wefpo_k$(delta);
        var tmp_1;
        if (isItemVisible($this_animateScrollToItem, $index)) {
          var tmp_2;
          if (_get_DEBUG_$accessor$11gqe8n_tyffja()) {
            // Inline function 'androidx.compose.foundation.lazy.layout.animateScrollToItem.<anonymous>.<anonymous>.<anonymous>' call
            var tmp$ret$1 = 'Found the item after performing scrollBy()';
            println('LazyScrolling: ' + tmp$ret$1);
            tmp_2 = Unit_getInstance();
          }
          tmp_1 = tmp_2;
        } else if (!invoke$isOvershot($forward, $this_animateScrollToItem, $index, $scrollOffset)) {
          if (!(delta === consumed)) {
            // Inline function 'androidx.compose.foundation.lazy.layout.debugLog' call
            if (_get_DEBUG_$accessor$11gqe8n_tyffja()) {
              // Inline function 'androidx.compose.foundation.lazy.layout.animateScrollToItem.<anonymous>.<anonymous>.<anonymous>' call
              var tmp$ret$2 = 'Hit end without finding the item';
              println('LazyScrolling: ' + tmp$ret$2);
            }
            $this$animateTo.cancelAnimation_ic0k2u_k$();
            $loop._v = false;
            return Unit_getInstance();
          }
          $prevValue._v = $prevValue._v + delta;
          if ($forward) {
            if ($this$animateTo.get_value_j01efc_k$() > $boundDistancePx) {
              // Inline function 'androidx.compose.foundation.lazy.layout.debugLog' call
              if (_get_DEBUG_$accessor$11gqe8n_tyffja()) {
                // Inline function 'androidx.compose.foundation.lazy.layout.animateScrollToItem.<anonymous>.<anonymous>.<anonymous>' call
                var tmp$ret$3 = 'Struck bound going forward';
                println('LazyScrolling: ' + tmp$ret$3);
              }
              $this$animateTo.cancelAnimation_ic0k2u_k$();
            }
          } else {
            if ($this$animateTo.get_value_j01efc_k$() < -$boundDistancePx) {
              // Inline function 'androidx.compose.foundation.lazy.layout.debugLog' call
              if (_get_DEBUG_$accessor$11gqe8n_tyffja()) {
                // Inline function 'androidx.compose.foundation.lazy.layout.animateScrollToItem.<anonymous>.<anonymous>.<anonymous>' call
                var tmp$ret$4 = 'Struck bound going backward';
                println('LazyScrolling: ' + tmp$ret$4);
              }
              $this$animateTo.cancelAnimation_ic0k2u_k$();
            }
          }
          var tmp_3;
          if ($forward) {
            var tmp_4;
            if ($loops._v >= 2 ? ($index - $this_animateScrollToItem.get_lastVisibleItemIndex_co91as_k$() | 0) > $numOfItemsForTeleport : false) {
              // Inline function 'androidx.compose.foundation.lazy.layout.debugLog' call
              if (_get_DEBUG_$accessor$11gqe8n_tyffja()) {
                // Inline function 'androidx.compose.foundation.lazy.layout.animateScrollToItem.<anonymous>.<anonymous>.<anonymous>' call
                var tmp$ret$5 = 'Teleport forward';
                println('LazyScrolling: ' + tmp$ret$5);
              }
              $this_animateScrollToItem.snapToItem_uq002p_k$($this_scroll, $index - $numOfItemsForTeleport | 0, 0);
              tmp_4 = Unit_getInstance();
            }
            tmp_3 = tmp_4;
          } else {
            var tmp_5;
            if ($loops._v >= 2 ? ($this_animateScrollToItem.get_firstVisibleItemIndex_pq52y4_k$() - $index | 0) > $numOfItemsForTeleport : false) {
              // Inline function 'androidx.compose.foundation.lazy.layout.debugLog' call
              if (_get_DEBUG_$accessor$11gqe8n_tyffja()) {
                // Inline function 'androidx.compose.foundation.lazy.layout.animateScrollToItem.<anonymous>.<anonymous>.<anonymous>' call
                var tmp$ret$6 = 'Teleport backward';
                println('LazyScrolling: ' + tmp$ret$6);
              }
              $this_animateScrollToItem.snapToItem_uq002p_k$($this_scroll, $index + $numOfItemsForTeleport | 0, 0);
              tmp_5 = Unit_getInstance();
            }
            tmp_3 = tmp_5;
          }
          tmp_1 = tmp_3;
        }
        tmp = tmp_1;
      }
      var tmp_6;
      if (invoke$isOvershot($forward, $this_animateScrollToItem, $index, $scrollOffset)) {
        // Inline function 'androidx.compose.foundation.lazy.layout.debugLog' call
        if (_get_DEBUG_$accessor$11gqe8n_tyffja()) {
          // Inline function 'androidx.compose.foundation.lazy.layout.animateScrollToItem.<anonymous>.<anonymous>.<anonymous>' call
          var tmp$ret$7 = 'Overshot, ' + ('item ' + $this_animateScrollToItem.get_firstVisibleItemIndex_pq52y4_k$() + ' at  ' + $this_animateScrollToItem.get_firstVisibleItemScrollOffset_my3xxa_k$() + ',') + (' target is ' + $scrollOffset);
          println('LazyScrolling: ' + tmp$ret$7);
        }
        $this_animateScrollToItem.snapToItem_uq002p_k$($this_scroll, $index, $scrollOffset);
        $loop._v = false;
        $this$animateTo.cancelAnimation_ic0k2u_k$();
        return Unit_getInstance();
      } else if (isItemVisible($this_animateScrollToItem, $index)) {
        var targetItemOffset = $this_animateScrollToItem.getVisibleItemScrollOffset_nzy6vr_k$($index);
        // Inline function 'androidx.compose.foundation.lazy.layout.debugLog' call
        if (_get_DEBUG_$accessor$11gqe8n_tyffja()) {
          // Inline function 'androidx.compose.foundation.lazy.layout.animateScrollToItem.<anonymous>.<anonymous>.<anonymous>' call
          var tmp$ret$8 = 'Found item';
          println('LazyScrolling: ' + tmp$ret$8);
        }
        throw new ItemFoundInScroll(targetItemOffset, $anim._v);
      }
      return Unit_getInstance();
    };
  }
  function animateScrollToItem$slambda$lambda_0($target, $prevValue, $this_scroll) {
    return function ($this$animateTo) {
      var tmp;
      if ($target > 0.0) {
        tmp = coerceAtMost_0($this$animateTo.get_value_j01efc_k$(), $target);
      } else if ($target < 0.0) {
        tmp = coerceAtLeast_0($this$animateTo.get_value_j01efc_k$(), $target);
      } else {
        // Inline function 'androidx.compose.foundation.lazy.layout.debugLog' call
        if (_get_DEBUG_$accessor$11gqe8n_tyffja()) {
          // Inline function 'androidx.compose.foundation.lazy.layout.animateScrollToItem.<anonymous>.<anonymous>.<anonymous>' call
          var tmp$ret$0 = "WARNING: somehow ended up seeking 0px, this shouldn't happen";
          println('LazyScrolling: ' + tmp$ret$0);
        }
        tmp = 0.0;
      }
      var coercedValue = tmp;
      var delta = coercedValue - $prevValue._v;
      var tmp_0;
      if (_get_DEBUG_$accessor$11gqe8n_tyffja()) {
        // Inline function 'androidx.compose.foundation.lazy.layout.animateScrollToItem.<anonymous>.<anonymous>.<anonymous>' call
        var tmp$ret$1 = 'Seeking by ' + delta + ' (coercedValue = ' + coercedValue + ')';
        println('LazyScrolling: ' + tmp$ret$1);
        tmp_0 = Unit_getInstance();
      }
      var consumed = $this_scroll.scrollBy_5wefpo_k$(delta);
      var tmp_1;
      if (!(delta === consumed) ? true : !(coercedValue === $this$animateTo.get_value_j01efc_k$())) {
        $this$animateTo.cancelAnimation_ic0k2u_k$();
        tmp_1 = Unit_getInstance();
      }
      $prevValue._v = $prevValue._v + delta;
      return Unit_getInstance();
    };
  }
  function animateScrollToItem$slambda($index, $density, $this_animateScrollToItem, $scrollOffset, $numOfItemsForTeleport, resultContinuation) {
    this.$index_1 = $index;
    this.$density_1 = $density;
    this.$this_animateScrollToItem_1 = $this_animateScrollToItem;
    this.$scrollOffset_1 = $scrollOffset;
    this.$numOfItemsForTeleport_1 = $numOfItemsForTeleport;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(animateScrollToItem$slambda).invoke_yd5n9m_k$ = function ($this$scroll, $completion) {
    var tmp = this.create_a2p816_k$($this$scroll, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(animateScrollToItem$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_yd5n9m_k$((!(p1 == null) ? isInterface(p1, ScrollScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(animateScrollToItem$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(6);
            if (!(this.$index_1 >= 0.0)) {
              var message = 'Index should be non-negative (' + this.$index_1 + ')';
              throw IllegalArgumentException_init_$Create$(toString(message));
            }

            this.set_exceptionState_fex74n_k$(4);
            var tmp_0 = this;
            tmp_0.targetDistancePx0__1 = this.$density_1.toPx_mycba2_k$(get_TargetDistance());
            var tmp_1 = this;
            tmp_1.boundDistancePx1__1 = this.$density_1.toPx_mycba2_k$(get_BoundDistance());
            var tmp_2 = this;
            tmp_2.minDistancePx2__1 = this.$density_1.toPx_mycba2_k$(get_MinimumDistance());
            this.loop3__1 = {_v: true};
            this.anim4__1 = {_v: AnimationState(0.0)};
            if (isItemVisible(this.$this_animateScrollToItem_1, this.$index_1)) {
              var targetItemInitialOffset = this.$this_animateScrollToItem_1.getVisibleItemScrollOffset_nzy6vr_k$(this.$index_1);
              throw new ItemFoundInScroll(targetItemInitialOffset, this.anim4__1._v);
            }

            this.forward5__1 = this.$index_1 > this.$this_animateScrollToItem_1.get_firstVisibleItemIndex_pq52y4_k$();
            this.loops6__1 = {_v: 1};
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!(this.loop3__1._v ? this.$this_animateScrollToItem_1.get_itemCount_rbqtpp_k$() > 0 : false)) {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

            this.expectedDistance7__1 = this.$this_animateScrollToItem_1.calculateDistanceTo_d7c15i_k$(this.$index_1, this.$scrollOffset_1);
            var tmp_3 = this;
            var tmp_4;
            var x = this.expectedDistance7__1;
            if (Math.abs(x) < this.targetDistancePx0__1) {
              var x_0 = this.expectedDistance7__1;
              var a = Math.abs(x_0);
              var b = this.minDistancePx2__1;
              var absTargetPx = Math.max(a, b);
              tmp_4 = this.forward5__1 ? absTargetPx : -absTargetPx;
            } else {
              tmp_4 = this.forward5__1 ? this.targetDistancePx0__1 : -this.targetDistancePx0__1;
            }

            tmp_3.target8__1 = tmp_4;
            if (_get_DEBUG_$accessor$11gqe8n_tyffja()) {
              println('LazyScrolling: ' + ('Scrolling to index=' + this.$index_1 + ' offset=' + this.$scrollOffset_1 + ' from ' + ('index=' + this.$this_animateScrollToItem_1.get_firstVisibleItemIndex_pq52y4_k$() + ' offset=' + this.$this_animateScrollToItem_1.get_firstVisibleItemScrollOffset_my3xxa_k$() + ' with ') + ('calculated target=' + this.target8__1)));
            }

            this.anim4__1._v = copy(this.anim4__1._v, 0.0);
            this.prevValue9__1 = {_v: 0.0};
            this.set_state_rjd8d0_k$(2);
            var tmp_5 = this.anim4__1._v;
            var tmp_6 = !(this.anim4__1._v.get_velocity_3hqvmu_k$() === 0.0);
            suspendResult = animateTo(tmp_5, this.target8__1, VOID, tmp_6, animateScrollToItem$slambda$lambda(this.$this_animateScrollToItem_1, this.$index_1, this.target8__1, this.prevValue9__1, this.$this$scroll_1, this.loop3__1, this.forward5__1, this.boundDistancePx1__1, this.loops6__1, this.$numOfItemsForTeleport_1, this.$scrollOffset_1, this.anim4__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp0 = this.loops6__1._v;
            this.loops6__1._v = tmp0 + 1 | 0;
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 3:
            this.set_exceptionState_fex74n_k$(6);
            this.set_state_rjd8d0_k$(7);
            continue $sm;
          case 4:
            this.set_exceptionState_fex74n_k$(6);
            var tmp_7 = this.get_exception_x0n6w6_k$();
            if (tmp_7 instanceof ItemFoundInScroll) {
              this.itemFound10__1 = this.get_exception_x0n6w6_k$();
              this.anim11__1 = copy(this.itemFound10__1.previousAnimation_1, 0.0);
              this.target12__1 = this.itemFound10__1.itemOffset_1 + this.$scrollOffset_1 | 0;
              this.prevValue13__1 = {_v: 0.0};
              if (_get_DEBUG_$accessor$11gqe8n_tyffja()) {
                println('LazyScrolling: ' + ('Seeking by ' + this.target12__1 + ' at velocity ' + this.itemFound10__1.previousAnimation_1.get_velocity_3hqvmu_k$()));
              }
              this.set_state_rjd8d0_k$(5);
              var tmp_8 = !(this.anim11__1.get_velocity_3hqvmu_k$() === 0.0);
              suspendResult = animateTo(this.anim11__1, this.target12__1, VOID, tmp_8, animateScrollToItem$slambda$lambda_0(this.target12__1, this.prevValue13__1, this.$this$scroll_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 5:
            this.$this_animateScrollToItem_1.snapToItem_uq002p_k$(this.$this$scroll_1, this.$index_1, this.$scrollOffset_1);
            this.set_state_rjd8d0_k$(7);
            continue $sm;
          case 6:
            throw this.get_exception_x0n6w6_k$();
          case 7:
            this.set_exceptionState_fex74n_k$(6);
            return Unit_getInstance();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 6) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(animateScrollToItem$slambda).create_a2p816_k$ = function ($this$scroll, completion) {
    var i = new animateScrollToItem$slambda(this.$index_1, this.$density_1, this.$this_animateScrollToItem_1, this.$scrollOffset_1, this.$numOfItemsForTeleport_1, completion);
    i.$this$scroll_1 = $this$scroll;
    return i;
  };
  protoOf(animateScrollToItem$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_a2p816_k$((!(value == null) ? isInterface(value, ScrollScope) : false) ? value : THROW_CCE(), completion);
  };
  function animateScrollToItem$slambda_0($index, $density, $this_animateScrollToItem, $scrollOffset, $numOfItemsForTeleport, resultContinuation) {
    var i = new animateScrollToItem$slambda($index, $density, $this_animateScrollToItem, $scrollOffset, $numOfItemsForTeleport, resultContinuation);
    var l = function ($this$scroll, $completion) {
      return i.invoke_yd5n9m_k$($this$scroll, $completion);
    };
    l.$arity = 1;
    return l;
  }
  var properties_initialized_LazyAnimateScroll_kt_ru8vti;
  function _init_properties_LazyAnimateScroll_kt__eqop2w() {
    if (!properties_initialized_LazyAnimateScroll_kt_ru8vti) {
      properties_initialized_LazyAnimateScroll_kt_ru8vti = true;
      // Inline function 'androidx.compose.ui.unit.dp' call
      TargetDistance = _Dp___init__impl__ms3zkb(2500);
      // Inline function 'androidx.compose.ui.unit.dp' call
      BoundDistance = _Dp___init__impl__ms3zkb(1500);
      // Inline function 'androidx.compose.ui.unit.dp' call
      MinimumDistance = _Dp___init__impl__ms3zkb(50);
    }
  }
  function get_InterruptionSpec() {
    _init_properties_LazyLayoutAnimation_kt__csewms();
    return InterruptionSpec;
  }
  var InterruptionSpec;
  function get_DefaultLayerBlock() {
    _init_properties_LazyLayoutAnimation_kt__csewms();
    return DefaultLayerBlock;
  }
  var DefaultLayerBlock;
  function LazyLayoutAnimation$animatePlacementDelta$slambda$lambda(this$0, $animationTarget) {
    return function ($this$animateTo) {
      // Inline function 'androidx.compose.ui.unit.IntOffset.minus' call
      var this_0 = $this$animateTo.get_value_j01efc_k$().packedValue_1;
      var other = $animationTarget;
      var tmp$ret$0 = IntOffset_0(_IntOffset___get_x__impl__qiqr5o(this_0) - _IntOffset___get_x__impl__qiqr5o(other) | 0, _IntOffset___get_y__impl__2avpwj(this_0) - _IntOffset___get_y__impl__2avpwj(other) | 0);
      _set_placementDelta__ka0zmk(this$0, tmp$ret$0);
      return Unit_getInstance();
    };
  }
  function LazyLayoutAnimation$animateAppearance$slambda$lambda(this$0) {
    return function ($this$animateTo) {
      _set_visibility__f9zqd7(this$0, $this$animateTo.get_value_j01efc_k$());
      return Unit_getInstance();
    };
  }
  function _set_isPlacementAnimationInProgress__3yokhw($this, _set____db54di) {
    var this_0 = $this.isPlacementAnimationInProgress$delegate_1;
    isPlacementAnimationInProgress$factory();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _set_isAppearanceAnimationInProgress__16qsn7($this, _set____db54di) {
    var this_0 = $this.isAppearanceAnimationInProgress$delegate_1;
    isAppearanceAnimationInProgress$factory();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get_placementDeltaAnimation__5jov28($this) {
    return $this.placementDeltaAnimation_1;
  }
  function _get_visibilityAnimation__3bftxb($this) {
    return $this.visibilityAnimation_1;
  }
  function _set_placementDelta__ka0zmk($this, _set____db54di) {
    var this_0 = $this.placementDelta$delegate_1;
    placementDelta$factory();
    var value = new IntOffset(_set____db54di);
    this_0.set_value_v1vabv_k$(value);
    return Unit_getInstance();
  }
  function _set_visibility__f9zqd7($this, _set____db54di) {
    var this_0 = $this.visibility$delegate_1;
    visibility$factory();
    this_0.set_floatValue_qaujgq_k$(_set____db54di);
    return Unit_getInstance();
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.NotInitialized_1 = IntOffset_0(IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$(), IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$());
  }
  protoOf(Companion_3).get_NotInitialized_kwrmrr_k$ = function () {
    return this.NotInitialized_1;
  };
  var Companion_instance_3;
  function Companion_getInstance_34() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function LazyLayoutAnimation$layerBlock$lambda(this$0) {
    return function ($this$null) {
      $this$null.set_alpha_tvzcqh_k$(this$0.get_visibility_bxkfbv_k$());
      return Unit_getInstance();
    };
  }
  function LazyLayoutAnimation$cancelPlacementAnimation$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LazyLayoutAnimation$cancelPlacementAnimation$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(LazyLayoutAnimation$cancelPlacementAnimation$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(LazyLayoutAnimation$cancelPlacementAnimation$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1.placementDeltaAnimation_1.snapTo_o5pd1b_k$(new IntOffset(Companion_getInstance_11().get_Zero_6hc3i8_k$()), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            _set_placementDelta__ka0zmk(this.this$0__1, Companion_getInstance_11().get_Zero_6hc3i8_k$());
            _set_isPlacementAnimationInProgress__3yokhw(this.this$0__1, false);
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(LazyLayoutAnimation$cancelPlacementAnimation$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new LazyLayoutAnimation$cancelPlacementAnimation$slambda(this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(LazyLayoutAnimation$cancelPlacementAnimation$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function LazyLayoutAnimation$cancelPlacementAnimation$slambda_0(this$0, resultContinuation) {
    var i = new LazyLayoutAnimation$cancelPlacementAnimation$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function LazyLayoutAnimation$animatePlacementDelta$slambda(this$0, $spec, $totalDelta, resultContinuation) {
    this.this$0__1 = this$0;
    this.$spec_1 = $spec;
    this.$totalDelta_1 = $totalDelta;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LazyLayoutAnimation$animatePlacementDelta$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(LazyLayoutAnimation$animatePlacementDelta$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(LazyLayoutAnimation$animatePlacementDelta$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            this.set_exceptionState_fex74n_k$(4);
            var tmp_0 = this;
            var tmp_1;
            if (this.this$0__1.placementDeltaAnimation_1.get_isRunning_okmtn0_k$()) {
              var tmp_2;
              var tmp_3 = this.$spec_1;
              if (tmp_3 instanceof SpringSpec) {
                tmp_2 = this.$spec_1;
              } else {
                tmp_2 = get_InterruptionSpec();
              }
              tmp_1 = tmp_2;
            } else {
              tmp_1 = this.$spec_1;
            }

            tmp_0.finalSpec0__1 = tmp_1;
            if (!this.this$0__1.placementDeltaAnimation_1.get_isRunning_okmtn0_k$()) {
              this.set_state_rjd8d0_k$(1);
              suspendResult = this.this$0__1.placementDeltaAnimation_1.snapTo_o5pd1b_k$(new IntOffset(this.$totalDelta_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            }

          case 1:
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            var tmp_4 = this;
            var this_0 = this.this$0__1.placementDeltaAnimation_1.get_value_j01efc_k$().packedValue_1;
            var other = this.$totalDelta_1;
            tmp_4.animationTarget1__1 = IntOffset_0(_IntOffset___get_x__impl__qiqr5o(this_0) - _IntOffset___get_x__impl__qiqr5o(other) | 0, _IntOffset___get_y__impl__2avpwj(this_0) - _IntOffset___get_y__impl__2avpwj(other) | 0);
            this.set_state_rjd8d0_k$(3);
            suspendResult = this.this$0__1.placementDeltaAnimation_1.animateTo$default_71hueo_k$(new IntOffset(this.animationTarget1__1), this.finalSpec0__1, VOID, LazyLayoutAnimation$animatePlacementDelta$slambda$lambda(this.this$0__1, this.animationTarget1__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            _set_isPlacementAnimationInProgress__3yokhw(this.this$0__1, false);
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(6);
            continue $sm;
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_5 = this.get_exception_x0n6w6_k$();
            if (tmp_5 instanceof CancellationException) {
              var _ = this.get_exception_x0n6w6_k$();
              this.set_state_rjd8d0_k$(6);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 5:
            throw this.get_exception_x0n6w6_k$();
          case 6:
            this.set_exceptionState_fex74n_k$(5);
            return Unit_getInstance();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(LazyLayoutAnimation$animatePlacementDelta$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new LazyLayoutAnimation$animatePlacementDelta$slambda(this.this$0__1, this.$spec_1, this.$totalDelta_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(LazyLayoutAnimation$animatePlacementDelta$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function LazyLayoutAnimation$animatePlacementDelta$slambda_0(this$0, $spec, $totalDelta, resultContinuation) {
    var i = new LazyLayoutAnimation$animatePlacementDelta$slambda(this$0, $spec, $totalDelta, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function LazyLayoutAnimation$animateAppearance$slambda(this$0, $spec, resultContinuation) {
    this.this$0__1 = this$0;
    this.$spec_1 = $spec;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LazyLayoutAnimation$animateAppearance$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(LazyLayoutAnimation$animateAppearance$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(LazyLayoutAnimation$animateAppearance$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(6);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.this$0__1.visibilityAnimation_1.snapTo_o5pd1b_k$(0.0, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.set_state_rjd8d0_k$(3);
            suspendResult = this.this$0__1.visibilityAnimation_1.animateTo$default_71hueo_k$(1.0, this.$spec_1, VOID, LazyLayoutAnimation$animateAppearance$slambda$lambda(this.this$0__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var tmp_0 = this;
            tmp_0.tmp$ret$00__1 = Unit_getInstance();
            this.set_exceptionState_fex74n_k$(6);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 4:
            this.set_exceptionState_fex74n_k$(6);
            _set_isAppearanceAnimationInProgress__16qsn7(this.this$0__1, false);
            return Unit_getInstance();
          case 5:
            this.set_exceptionState_fex74n_k$(6);
            var t = this.get_exception_x0n6w6_k$();
            _set_isAppearanceAnimationInProgress__16qsn7(this.this$0__1, false);
            throw t;
          case 6:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 6) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(LazyLayoutAnimation$animateAppearance$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new LazyLayoutAnimation$animateAppearance$slambda(this.this$0__1, this.$spec_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(LazyLayoutAnimation$animateAppearance$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function LazyLayoutAnimation$animateAppearance$slambda_0(this$0, $spec, resultContinuation) {
    var i = new LazyLayoutAnimation$animateAppearance$slambda(this$0, $spec, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function LazyLayoutAnimation$stopAnimations$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LazyLayoutAnimation$stopAnimations$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(LazyLayoutAnimation$stopAnimations$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(LazyLayoutAnimation$stopAnimations$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1.placementDeltaAnimation_1.stop_7piii3_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(LazyLayoutAnimation$stopAnimations$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new LazyLayoutAnimation$stopAnimations$slambda(this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(LazyLayoutAnimation$stopAnimations$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function LazyLayoutAnimation$stopAnimations$slambda_0(this$0, resultContinuation) {
    var i = new LazyLayoutAnimation$stopAnimations$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function LazyLayoutAnimation$stopAnimations$slambda_1(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LazyLayoutAnimation$stopAnimations$slambda_1).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(LazyLayoutAnimation$stopAnimations$slambda_1).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(LazyLayoutAnimation$stopAnimations$slambda_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1.visibilityAnimation_1.stop_7piii3_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(LazyLayoutAnimation$stopAnimations$slambda_1).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new LazyLayoutAnimation$stopAnimations$slambda_1(this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(LazyLayoutAnimation$stopAnimations$slambda_1).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function LazyLayoutAnimation$stopAnimations$slambda_2(this$0, resultContinuation) {
    var i = new LazyLayoutAnimation$stopAnimations$slambda_1(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function LazyLayoutAnimation(coroutineScope) {
    Companion_getInstance_34();
    this.coroutineScope_1 = coroutineScope;
    this.appearanceSpec_1 = null;
    this.placementSpec_1 = null;
    this.isPlacementAnimationInProgress$delegate_1 = mutableStateOf(false);
    this.isAppearanceAnimationInProgress$delegate_1 = mutableStateOf(false);
    this.rawOffset_1 = Companion_getInstance_34().NotInitialized_1;
    this.placementDeltaAnimation_1 = new Animatable(new IntOffset(Companion_getInstance_11().get_Zero_6hc3i8_k$()), get_VectorConverter(Companion_getInstance_11()));
    this.visibilityAnimation_1 = new Animatable(1.0, get_VectorConverter_0(FloatCompanionObject_getInstance()));
    this.placementDelta$delegate_1 = mutableStateOf(new IntOffset(Companion_getInstance_11().get_Zero_6hc3i8_k$()));
    this.visibility$delegate_1 = mutableFloatStateOf(1.0);
    var tmp = this;
    tmp.layerBlock_1 = LazyLayoutAnimation$layerBlock$lambda(this);
    this.lookaheadOffset_1 = Companion_getInstance_34().NotInitialized_1;
  }
  protoOf(LazyLayoutAnimation).get_coroutineScope_5k7h45_k$ = function () {
    return this.coroutineScope_1;
  };
  protoOf(LazyLayoutAnimation).set_appearanceSpec_r5i506_k$ = function (_set____db54di) {
    this.appearanceSpec_1 = _set____db54di;
  };
  protoOf(LazyLayoutAnimation).get_appearanceSpec_987hrs_k$ = function () {
    return this.appearanceSpec_1;
  };
  protoOf(LazyLayoutAnimation).set_placementSpec_ooa865_k$ = function (_set____db54di) {
    this.placementSpec_1 = _set____db54di;
  };
  protoOf(LazyLayoutAnimation).get_placementSpec_cshd61_k$ = function () {
    return this.placementSpec_1;
  };
  protoOf(LazyLayoutAnimation).get_isPlacementAnimationInProgress_h8jcfw_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.isPlacementAnimationInProgress$delegate_1;
    isPlacementAnimationInProgress$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(LazyLayoutAnimation).get_isAppearanceAnimationInProgress_ux2uht_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.isAppearanceAnimationInProgress$delegate_1;
    isAppearanceAnimationInProgress$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(LazyLayoutAnimation).set_rawOffset_91xt99_k$ = function (_set____db54di) {
    this.rawOffset_1 = _set____db54di;
  };
  protoOf(LazyLayoutAnimation).get_rawOffset_3ik8vz_k$ = function () {
    return this.rawOffset_1;
  };
  protoOf(LazyLayoutAnimation).get_placementDelta_36vqi3_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.placementDelta$delegate_1;
    placementDelta$factory_0();
    return this_0.get_value_j01efc_k$().packedValue_1;
  };
  protoOf(LazyLayoutAnimation).get_visibility_bxkfbv_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.visibility$delegate_1;
    visibility$factory_0();
    return this_0.get_floatValue_xw60ou_k$();
  };
  protoOf(LazyLayoutAnimation).get_layerBlock_les9mj_k$ = function () {
    return this.layerBlock_1;
  };
  protoOf(LazyLayoutAnimation).cancelPlacementAnimation_9u9r4n_k$ = function () {
    if (this.get_isPlacementAnimationInProgress_h8jcfw_k$()) {
      launch(this.coroutineScope_1, VOID, VOID, LazyLayoutAnimation$cancelPlacementAnimation$slambda_0(this, null));
    }
  };
  protoOf(LazyLayoutAnimation).set_lookaheadOffset_23475v_k$ = function (_set____db54di) {
    this.lookaheadOffset_1 = _set____db54di;
  };
  protoOf(LazyLayoutAnimation).get_lookaheadOffset_5f62hx_k$ = function () {
    return this.lookaheadOffset_1;
  };
  protoOf(LazyLayoutAnimation).animatePlacementDelta_c53shl_k$ = function (delta) {
    var tmp0_elvis_lhs = this.placementSpec_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var spec = tmp;
    // Inline function 'androidx.compose.ui.unit.IntOffset.minus' call
    var this_0 = this.get_placementDelta_36vqi3_k$();
    var totalDelta = IntOffset_0(_IntOffset___get_x__impl__qiqr5o(this_0) - _IntOffset___get_x__impl__qiqr5o(delta) | 0, _IntOffset___get_y__impl__2avpwj(this_0) - _IntOffset___get_y__impl__2avpwj(delta) | 0);
    _set_placementDelta__ka0zmk(this, totalDelta);
    _set_isPlacementAnimationInProgress__3yokhw(this, true);
    launch(this.coroutineScope_1, VOID, VOID, LazyLayoutAnimation$animatePlacementDelta$slambda_0(this, spec, totalDelta, null));
  };
  protoOf(LazyLayoutAnimation).animateAppearance_uqfvpx_k$ = function () {
    var spec = this.appearanceSpec_1;
    if (this.get_isAppearanceAnimationInProgress_ux2uht_k$() ? true : spec == null) {
      return Unit_getInstance();
    }
    _set_isAppearanceAnimationInProgress__16qsn7(this, true);
    _set_visibility__f9zqd7(this, 0.0);
    launch(this.coroutineScope_1, VOID, VOID, LazyLayoutAnimation$animateAppearance$slambda_0(this, spec, null));
  };
  protoOf(LazyLayoutAnimation).stopAnimations_7tom2n_k$ = function () {
    if (this.get_isPlacementAnimationInProgress_h8jcfw_k$()) {
      _set_isPlacementAnimationInProgress__3yokhw(this, false);
      launch(this.coroutineScope_1, VOID, VOID, LazyLayoutAnimation$stopAnimations$slambda_0(this, null));
    }
    if (this.get_isAppearanceAnimationInProgress_ux2uht_k$()) {
      _set_isAppearanceAnimationInProgress__16qsn7(this, false);
      launch(this.coroutineScope_1, VOID, VOID, LazyLayoutAnimation$stopAnimations$slambda_2(this, null));
    }
    _set_placementDelta__ka0zmk(this, Companion_getInstance_11().get_Zero_6hc3i8_k$());
    this.rawOffset_1 = Companion_getInstance_34().NotInitialized_1;
    _set_visibility__f9zqd7(this, 1.0);
  };
  function LazyLayoutAnimationSpecsNode(appearanceSpec, placementSpec) {
    Node.call(this);
    this.appearanceSpec_1 = appearanceSpec;
    this.placementSpec_1 = placementSpec;
  }
  protoOf(LazyLayoutAnimationSpecsNode).set_appearanceSpec_r5i506_k$ = function (_set____db54di) {
    this.appearanceSpec_1 = _set____db54di;
  };
  protoOf(LazyLayoutAnimationSpecsNode).get_appearanceSpec_987hrs_k$ = function () {
    return this.appearanceSpec_1;
  };
  protoOf(LazyLayoutAnimationSpecsNode).set_placementSpec_ooa865_k$ = function (_set____db54di) {
    this.placementSpec_1 = _set____db54di;
  };
  protoOf(LazyLayoutAnimationSpecsNode).get_placementSpec_cshd61_k$ = function () {
    return this.placementSpec_1;
  };
  protoOf(LazyLayoutAnimationSpecsNode).modifyParentData_nittj_k$ = function (_this__u8e3s4, parentData) {
    return this;
  };
  function DefaultLayerBlock$lambda($this$null) {
    _init_properties_LazyLayoutAnimation_kt__csewms();
    return Unit_getInstance();
  }
  function isPlacementAnimationInProgress$factory() {
    return getPropertyCallableRef('isPlacementAnimationInProgress', 1, KMutableProperty1, function (receiver) {
      return receiver.get_isPlacementAnimationInProgress_h8jcfw_k$();
    }, function (receiver, value) {
      return _set_isPlacementAnimationInProgress__3yokhw(receiver, value);
    });
  }
  function isPlacementAnimationInProgress$factory_0() {
    return getPropertyCallableRef('isPlacementAnimationInProgress', 1, KMutableProperty1, function (receiver) {
      return receiver.get_isPlacementAnimationInProgress_h8jcfw_k$();
    }, function (receiver, value) {
      return _set_isPlacementAnimationInProgress__3yokhw(receiver, value);
    });
  }
  function isAppearanceAnimationInProgress$factory() {
    return getPropertyCallableRef('isAppearanceAnimationInProgress', 1, KMutableProperty1, function (receiver) {
      return receiver.get_isAppearanceAnimationInProgress_ux2uht_k$();
    }, function (receiver, value) {
      return _set_isAppearanceAnimationInProgress__16qsn7(receiver, value);
    });
  }
  function isAppearanceAnimationInProgress$factory_0() {
    return getPropertyCallableRef('isAppearanceAnimationInProgress', 1, KMutableProperty1, function (receiver) {
      return receiver.get_isAppearanceAnimationInProgress_ux2uht_k$();
    }, function (receiver, value) {
      return _set_isAppearanceAnimationInProgress__16qsn7(receiver, value);
    });
  }
  function placementDelta$factory() {
    return getPropertyCallableRef('placementDelta', 1, KMutableProperty1, function (receiver) {
      return new IntOffset(receiver.get_placementDelta_36vqi3_k$());
    }, function (receiver, value) {
      return _set_placementDelta__ka0zmk(receiver, value.packedValue_1);
    });
  }
  function placementDelta$factory_0() {
    return getPropertyCallableRef('placementDelta', 1, KMutableProperty1, function (receiver) {
      return new IntOffset(receiver.get_placementDelta_36vqi3_k$());
    }, function (receiver, value) {
      return _set_placementDelta__ka0zmk(receiver, value.packedValue_1);
    });
  }
  function visibility$factory() {
    return getPropertyCallableRef('visibility', 1, KMutableProperty1, function (receiver) {
      return receiver.get_visibility_bxkfbv_k$();
    }, function (receiver, value) {
      return _set_visibility__f9zqd7(receiver, value);
    });
  }
  function visibility$factory_0() {
    return getPropertyCallableRef('visibility', 1, KMutableProperty1, function (receiver) {
      return receiver.get_visibility_bxkfbv_k$();
    }, function (receiver, value) {
      return _set_visibility__f9zqd7(receiver, value);
    });
  }
  var properties_initialized_LazyLayoutAnimation_kt_92a5g6;
  function _init_properties_LazyLayoutAnimation_kt__csewms() {
    if (!properties_initialized_LazyLayoutAnimation_kt_92a5g6) {
      properties_initialized_LazyLayoutAnimation_kt_92a5g6 = true;
      InterruptionSpec = spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$(), new IntOffset(get_VisibilityThreshold(Companion_getInstance_11())));
      DefaultLayerBlock = DefaultLayerBlock$lambda;
    }
  }
  function _get_beyondBoundsItems__fiscwl($this) {
    return $this.beyondBoundsItems_1;
  }
  function Interval_0(start, end) {
    this.start_1 = start;
    this.end_1 = end;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.start_1 >= 0)) {
      // Inline function 'androidx.compose.foundation.lazy.layout.Interval.<anonymous>' call
      var message = 'negative start index';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.end_1 >= this.start_1)) {
      // Inline function 'androidx.compose.foundation.lazy.layout.Interval.<anonymous>' call
      var message_0 = 'end index greater than start';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(Interval_0).get_start_iypx6h_k$ = function () {
    return this.start_1;
  };
  protoOf(Interval_0).get_end_18j6ha_k$ = function () {
    return this.end_1;
  };
  protoOf(Interval_0).component1_7eebsc_k$ = function () {
    return this.start_1;
  };
  protoOf(Interval_0).component2_7eebsb_k$ = function () {
    return this.end_1;
  };
  protoOf(Interval_0).copy_fhtu3_k$ = function (start, end) {
    return new Interval_0(start, end);
  };
  protoOf(Interval_0).copy$default_xujp0l_k$ = function (start, end, $super) {
    start = start === VOID ? this.start_1 : start;
    end = end === VOID ? this.end_1 : end;
    return $super === VOID ? this.copy_fhtu3_k$(start, end) : $super.copy_fhtu3_k$.call(this, start, end);
  };
  protoOf(Interval_0).toString = function () {
    return 'Interval(start=' + this.start_1 + ', end=' + this.end_1 + ')';
  };
  protoOf(Interval_0).hashCode = function () {
    var result = this.start_1;
    result = imul(result, 31) + this.end_1 | 0;
    return result;
  };
  protoOf(Interval_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Interval_0))
      return false;
    var tmp0_other_with_cast = other instanceof Interval_0 ? other : THROW_CCE();
    if (!(this.start_1 === tmp0_other_with_cast.start_1))
      return false;
    if (!(this.end_1 === tmp0_other_with_cast.end_1))
      return false;
    return true;
  };
  function LazyLayoutBeyondBoundsInfo() {
    var tmp = this;
    // Inline function 'androidx.compose.runtime.collection.mutableVectorOf' call
    // Inline function 'androidx.compose.runtime.collection.MutableVector' call
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp$ret$0 = fillArrayVal(Array(16), null);
    tmp.beyondBoundsItems_1 = new MutableVector(tmp$ret$0, 0);
  }
  protoOf(LazyLayoutBeyondBoundsInfo).addInterval_t6focm_k$ = function (start, end) {
    // Inline function 'kotlin.apply' call
    var this_0 = new Interval_0(start, end);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.lazy.layout.LazyLayoutBeyondBoundsInfo.addInterval.<anonymous>' call
    this.beyondBoundsItems_1.add_wl2rvy_k$(this_0);
    return this_0;
  };
  protoOf(LazyLayoutBeyondBoundsInfo).removeInterval_m5fip5_k$ = function (interval) {
    this.beyondBoundsItems_1.remove_an8aut_k$(interval);
  };
  protoOf(LazyLayoutBeyondBoundsInfo).hasIntervals_9n4iek_k$ = function () {
    return this.beyondBoundsItems_1.isNotEmpty_cjxbwk_k$();
  };
  protoOf(LazyLayoutBeyondBoundsInfo).get_start_iypx6h_k$ = function () {
    var minIndex = this.beyondBoundsItems_1.first_1m0hio_k$().start_1;
    // Inline function 'androidx.compose.runtime.collection.MutableVector.forEach' call
    var this_0 = this.beyondBoundsItems_1;
    // Inline function 'kotlin.contracts.contract' call
    var size = this_0.get_size_woubt6_k$();
    if (size > 0) {
      var i = 0;
      var tmp = this_0.get_content_h02jrk_k$();
      var content = isArray(tmp) ? tmp : THROW_CCE();
      do {
        // Inline function 'androidx.compose.foundation.lazy.layout.LazyLayoutBeyondBoundsInfo.<get-start>.<anonymous>' call
        var it = content[i];
        if (it.start_1 < minIndex) {
          minIndex = it.start_1;
        }
        i = i + 1 | 0;
      }
       while (i < size);
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(minIndex >= 0)) {
      // Inline function 'androidx.compose.foundation.lazy.layout.LazyLayoutBeyondBoundsInfo.<get-start>.<anonymous>' call
      var message = 'negative minIndex';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return minIndex;
  };
  protoOf(LazyLayoutBeyondBoundsInfo).get_end_18j6ha_k$ = function () {
    var maxIndex = this.beyondBoundsItems_1.first_1m0hio_k$().end_1;
    // Inline function 'androidx.compose.runtime.collection.MutableVector.forEach' call
    var this_0 = this.beyondBoundsItems_1;
    // Inline function 'kotlin.contracts.contract' call
    var size = this_0.get_size_woubt6_k$();
    if (size > 0) {
      var i = 0;
      var tmp = this_0.get_content_h02jrk_k$();
      var content = isArray(tmp) ? tmp : THROW_CCE();
      do {
        // Inline function 'androidx.compose.foundation.lazy.layout.LazyLayoutBeyondBoundsInfo.<get-end>.<anonymous>' call
        var it = content[i];
        if (it.end_1 > maxIndex) {
          maxIndex = it.end_1;
        }
        i = i + 1 | 0;
      }
       while (i < size);
    }
    return maxIndex;
  };
  function LazyLayoutIntervalContent$Interval$_get_type_$lambda_1wu10p(it) {
    return null;
  }
  function Interval_1() {
  }
  function LazyLayoutIntervalContent() {
  }
  protoOf(LazyLayoutIntervalContent).get_itemCount_rbqtpp_k$ = function () {
    return this.get_intervals_gu2011_k$().get_size_woubt6_k$();
  };
  protoOf(LazyLayoutIntervalContent).getKey_stxcen_k$ = function (index) {
    // Inline function 'androidx.compose.foundation.lazy.layout.LazyLayoutIntervalContent.withInterval' call
    var interval = this.get_intervals_gu2011_k$().get_c1px32_k$(index);
    var localIntervalIndex = index - interval.get_startIndex_oi1lp5_k$() | 0;
    // Inline function 'androidx.compose.foundation.lazy.layout.LazyLayoutIntervalContent.getKey.<anonymous>' call
    var tmp0_safe_receiver = interval.get_value_j01efc_k$().get_key_18j28a_k$();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver(localIntervalIndex);
    return tmp1_elvis_lhs == null ? getDefaultLazyLayoutKey(index) : tmp1_elvis_lhs;
  };
  protoOf(LazyLayoutIntervalContent).getContentType_ooo485_k$ = function (index) {
    // Inline function 'androidx.compose.foundation.lazy.layout.LazyLayoutIntervalContent.withInterval' call
    var interval = this.get_intervals_gu2011_k$().get_c1px32_k$(index);
    var localIntervalIndex = index - interval.get_startIndex_oi1lp5_k$() | 0;
    // Inline function 'androidx.compose.foundation.lazy.layout.LazyLayoutIntervalContent.getContentType.<anonymous>' call
    return interval.get_value_j01efc_k$().get_type_wovaf7_k$()(localIntervalIndex);
  };
  protoOf(LazyLayoutIntervalContent).withInterval_ahntn0_k$ = function (globalIndex, block) {
    var interval = this.get_intervals_gu2011_k$().get_c1px32_k$(globalIndex);
    var localIntervalIndex = globalIndex - interval.get_startIndex_oi1lp5_k$() | 0;
    return block(localIntervalIndex, interval.get_value_j01efc_k$());
  };
  function LazyLayoutItemProvider() {
  }
  function findIndexByKey(_this__u8e3s4, key, lastKnownIndex) {
    if (key == null ? true : _this__u8e3s4.get_itemCount_rbqtpp_k$() === 0) {
      return lastKnownIndex;
    }
    if (lastKnownIndex < _this__u8e3s4.get_itemCount_rbqtpp_k$() ? equals(key, _this__u8e3s4.getKey_stxcen_k$(lastKnownIndex)) : false) {
      return lastKnownIndex;
    }
    var newIndex = _this__u8e3s4.getIndex_xxb61u_k$(key);
    if (!(newIndex === -1)) {
      return newIndex;
    }
    return lastKnownIndex;
  }
  function Empty() {
    Empty_instance = this;
  }
  protoOf(Empty).getIndex_xxb61u_k$ = function (key) {
    return -1;
  };
  protoOf(Empty).getKey_stxcen_k$ = function (index) {
    return null;
  };
  var Empty_instance;
  function Empty_getInstance() {
    if (Empty_instance == null)
      new Empty();
    return Empty_instance;
  }
  function LazyLayoutKeyIndexMap() {
  }
  function LazyLayoutMeasureScope() {
  }
  function calculateNearestItemsRange($this, firstVisibleItem, slidingWindowSize, extraItemCount) {
    var slidingWindowStart = imul(slidingWindowSize, firstVisibleItem / slidingWindowSize | 0);
    // Inline function 'kotlin.comparisons.maxOf' call
    var a = slidingWindowStart - extraItemCount | 0;
    var start = Math.max(a, 0);
    var end = (slidingWindowStart + slidingWindowSize | 0) + extraItemCount | 0;
    return until(start, end);
  }
  function _get_slidingWindowSize__sgv1ke($this) {
    return $this.slidingWindowSize_1;
  }
  function _get_extraItemCount__a1q4u9($this) {
    return $this.extraItemCount_1;
  }
  function _set_value__lx0xdg($this, _set____db54di) {
    var this_0 = $this.value$delegate_1;
    value$factory();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _set_lastFirstVisibleItem__av4nxo($this, _set____db54di) {
    $this.lastFirstVisibleItem_1 = _set____db54di;
  }
  function _get_lastFirstVisibleItem__32y02o($this) {
    return $this.lastFirstVisibleItem_1;
  }
  function Companion_4() {
    Companion_instance_4 = this;
  }
  var Companion_instance_4;
  function Companion_getInstance_35() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function LazyLayoutNearestRangeState(firstVisibleItem, slidingWindowSize, extraItemCount) {
    Companion_getInstance_35();
    this.slidingWindowSize_1 = slidingWindowSize;
    this.extraItemCount_1 = extraItemCount;
    this.value$delegate_1 = mutableStateOf(calculateNearestItemsRange(Companion_getInstance_35(), firstVisibleItem, this.slidingWindowSize_1, this.extraItemCount_1), structuralEqualityPolicy());
    this.lastFirstVisibleItem_1 = firstVisibleItem;
  }
  protoOf(LazyLayoutNearestRangeState).get_value_j01efc_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.value$delegate_1;
    value$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(LazyLayoutNearestRangeState).update_sx46zl_k$ = function (firstVisibleItem) {
    if (!(firstVisibleItem === this.lastFirstVisibleItem_1)) {
      this.lastFirstVisibleItem_1 = firstVisibleItem;
      _set_value__lx0xdg(this, calculateNearestItemsRange(Companion_getInstance_35(), firstVisibleItem, this.slidingWindowSize_1, this.extraItemCount_1));
    }
  };
  function value$factory() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.get_value_j01efc_k$();
    }, function (receiver, value) {
      return _set_value__lx0xdg(receiver, value);
    });
  }
  function value$factory_0() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.get_value_j01efc_k$();
    }, function (receiver, value) {
      return _set_value__lx0xdg(receiver, value);
    });
  }
  function _get_items__fzd5gv($this) {
    return $this.items_1;
  }
  function LazyLayoutPinnedItemList_init_$Init$($this) {
    LazyLayoutPinnedItemList.call($this, new SnapshotStateList());
    return $this;
  }
  function LazyLayoutPinnedItemList_init_$Create$() {
    return LazyLayoutPinnedItemList_init_$Init$(objectCreate(protoOf(LazyLayoutPinnedItemList)));
  }
  function PinnedItem() {
  }
  function LazyLayoutPinnedItemList(items) {
    this.items_1 = items;
  }
  protoOf(LazyLayoutPinnedItemList).get_size_woubt6_k$ = function () {
    return this.items_1.get_size_woubt6_k$();
  };
  protoOf(LazyLayoutPinnedItemList).contains_2ud7is_k$ = function (element) {
    return this.items_1.contains_aljjnj_k$(element);
  };
  protoOf(LazyLayoutPinnedItemList).contains_aljjnj_k$ = function (element) {
    if (!(!(element == null) ? isInterface(element, PinnedItem) : false))
      return false;
    return this.contains_2ud7is_k$((!(element == null) ? isInterface(element, PinnedItem) : false) ? element : THROW_CCE());
  };
  protoOf(LazyLayoutPinnedItemList).containsAll_u17bx9_k$ = function (elements) {
    return this.items_1.containsAll_xk45sd_k$(elements);
  };
  protoOf(LazyLayoutPinnedItemList).containsAll_xk45sd_k$ = function (elements) {
    return this.containsAll_u17bx9_k$(elements);
  };
  protoOf(LazyLayoutPinnedItemList).get_c1px32_k$ = function (index) {
    return this.items_1.get_c1px32_k$(index);
  };
  protoOf(LazyLayoutPinnedItemList).indexOf_dhokd2_k$ = function (element) {
    return this.items_1.indexOf_si1fv9_k$(element);
  };
  protoOf(LazyLayoutPinnedItemList).indexOf_si1fv9_k$ = function (element) {
    if (!(!(element == null) ? isInterface(element, PinnedItem) : false))
      return -1;
    return this.indexOf_dhokd2_k$((!(element == null) ? isInterface(element, PinnedItem) : false) ? element : THROW_CCE());
  };
  protoOf(LazyLayoutPinnedItemList).isEmpty_y1axqb_k$ = function () {
    return this.items_1.isEmpty_y1axqb_k$();
  };
  protoOf(LazyLayoutPinnedItemList).iterator_jk1svi_k$ = function () {
    return this.items_1.iterator_jk1svi_k$();
  };
  protoOf(LazyLayoutPinnedItemList).lastIndexOf_3ue04g_k$ = function (element) {
    return this.items_1.lastIndexOf_v2p1fv_k$(element);
  };
  protoOf(LazyLayoutPinnedItemList).lastIndexOf_v2p1fv_k$ = function (element) {
    if (!(!(element == null) ? isInterface(element, PinnedItem) : false))
      return -1;
    return this.lastIndexOf_3ue04g_k$((!(element == null) ? isInterface(element, PinnedItem) : false) ? element : THROW_CCE());
  };
  protoOf(LazyLayoutPinnedItemList).listIterator_xjshxw_k$ = function () {
    return this.items_1.listIterator_xjshxw_k$();
  };
  protoOf(LazyLayoutPinnedItemList).listIterator_70e65o_k$ = function (index) {
    return this.items_1.listIterator_70e65o_k$(index);
  };
  protoOf(LazyLayoutPinnedItemList).subList_xle3r2_k$ = function (fromIndex, toIndex) {
    return this.items_1.subList_xle3r2_k$(fromIndex, toIndex);
  };
  protoOf(LazyLayoutPinnedItemList).pin_4urccu_k$ = function (item) {
    this.items_1.add_utx5q5_k$(item);
  };
  protoOf(LazyLayoutPinnedItemList).release_ot5h24_k$ = function (item) {
    this.items_1.remove_cedx0m_k$(item);
  };
  function PrefetchHandle() {
  }
  function Prefetcher() {
  }
  function LazyLayoutPrefetchState() {
    this.prefetcher_1 = null;
  }
  protoOf(LazyLayoutPrefetchState).set_prefetcher_azu00l_k$ = function (_set____db54di) {
    this.prefetcher_1 = _set____db54di;
  };
  protoOf(LazyLayoutPrefetchState).get_prefetcher_qqrwx9_k$ = function () {
    return this.prefetcher_1;
  };
  protoOf(LazyLayoutPrefetchState).schedulePrefetch_2w0rij_k$ = function (index, constraints) {
    var tmp0_safe_receiver = this.prefetcher_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.schedulePrefetch_2w0rij_k$(index, constraints);
    return tmp1_elvis_lhs == null ? DummyHandle_getInstance() : tmp1_elvis_lhs;
  };
  function DummyHandle() {
    DummyHandle_instance = this;
  }
  protoOf(DummyHandle).cancel_2l89ey_k$ = function () {
  };
  var DummyHandle_instance;
  function DummyHandle_getInstance() {
    if (DummyHandle_instance == null)
      new DummyHandle();
    return DummyHandle_instance;
  }
  function _ObservableScopeInvalidator___init__impl__ism0sl(state) {
    state = state === VOID ? mutableStateOf(Unit_getInstance(), neverEqualPolicy()) : state;
    return state;
  }
  function _get_state__b8zcm8($this) {
    return $this;
  }
  function ObservableScopeInvalidator__attachToScope_impl_wvvw97($this) {
    _get_state__b8zcm8($this).get_value_j01efc_k$();
  }
  function ObservableScopeInvalidator__invalidateScope_impl_b202xc($this) {
    _get_state__b8zcm8($this).set_value_v1vabv_k$(Unit_getInstance());
  }
  function ObservableScopeInvalidator__toString_impl_6n0a8r($this) {
    return 'ObservableScopeInvalidator(state=' + $this + ')';
  }
  function ObservableScopeInvalidator__hashCode_impl_se671m($this) {
    return hashCode($this);
  }
  function ObservableScopeInvalidator__equals_impl_38l12q($this, other) {
    if (!(other instanceof ObservableScopeInvalidator))
      return false;
    var tmp0_other_with_cast = other instanceof ObservableScopeInvalidator ? other.state_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function ObservableScopeInvalidator(state) {
    this.state_1 = state;
  }
  protoOf(ObservableScopeInvalidator).toString = function () {
    return ObservableScopeInvalidator__toString_impl_6n0a8r(this.state_1);
  };
  protoOf(ObservableScopeInvalidator).hashCode = function () {
    return ObservableScopeInvalidator__hashCode_impl_se671m(this.state_1);
  };
  protoOf(ObservableScopeInvalidator).equals = function (other) {
    return ObservableScopeInvalidator__equals_impl_38l12q(this.state_1, other);
  };
  function LazyStaggeredGridSlots(positions, sizes) {
    this.positions_1 = positions;
    this.sizes_1 = sizes;
  }
  protoOf(LazyStaggeredGridSlots).get_positions_ya7scf_k$ = function () {
    return this.positions_1;
  };
  protoOf(LazyStaggeredGridSlots).get_sizes_iyjejt_k$ = function () {
    return this.sizes_1;
  };
  function _get_state__b8zcm8_0($this) {
    return $this.state_1;
  }
  function LazyStaggeredGridAnimateScrollScope$getVisibleItemScrollOffset$lambda($index) {
    return function (it) {
      return it.get_index_it478p_k$() - $index | 0;
    };
  }
  function LazyStaggeredGridAnimateScrollScope(state) {
    this.state_1 = state;
  }
  protoOf(LazyStaggeredGridAnimateScrollScope).get_firstVisibleItemIndex_pq52y4_k$ = function () {
    return this.state_1.get_firstVisibleItemIndex_pq52y4_k$();
  };
  protoOf(LazyStaggeredGridAnimateScrollScope).get_firstVisibleItemScrollOffset_my3xxa_k$ = function () {
    return this.state_1.get_firstVisibleItemScrollOffset_my3xxa_k$();
  };
  protoOf(LazyStaggeredGridAnimateScrollScope).get_lastVisibleItemIndex_co91as_k$ = function () {
    var tmp0_safe_receiver = lastOrNull(this.state_1.get_layoutInfo_ej1bpb_k$().get_visibleItemsInfo_uew4qj_k$());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_index_it478p_k$();
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(LazyStaggeredGridAnimateScrollScope).get_itemCount_rbqtpp_k$ = function () {
    return this.state_1.get_layoutInfo_ej1bpb_k$().get_totalItemsCount_aiolgq_k$();
  };
  protoOf(LazyStaggeredGridAnimateScrollScope).getVisibleItemScrollOffset_nzy6vr_k$ = function (index) {
    var tmp = this.state_1.get_layoutInfo_ej1bpb_k$().get_visibleItemsInfo_uew4qj_k$();
    var searchedIndex = binarySearch(tmp, VOID, VOID, LazyStaggeredGridAnimateScrollScope$getVisibleItemScrollOffset$lambda(index));
    var item = this.state_1.get_layoutInfo_ej1bpb_k$().get_visibleItemsInfo_uew4qj_k$().get_c1px32_k$(searchedIndex);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridAnimateScrollScope.getVisibleItemScrollOffset.<anonymous>' call
    var it = item.get_offset_bksmdx_k$();
    return this.state_1.get_isVertical_4x9emh_k$() ? _IntOffset___get_y__impl__2avpwj(it) : _IntOffset___get_x__impl__qiqr5o(it);
  };
  protoOf(LazyStaggeredGridAnimateScrollScope).snapToItem_uq002p_k$ = function (_this__u8e3s4, index, scrollOffset) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    this.state_1.snapToItemInternal_g3csn0_k$(_this__u8e3s4, index, scrollOffset);
  };
  protoOf(LazyStaggeredGridAnimateScrollScope).calculateDistanceTo_d7c15i_k$ = function (targetIndex, targetItemOffset) {
    var averageMainAxisItemSize = this.get_visibleItemsAverageSize_e16hyx_k$();
    var lineDiff = (targetIndex / this.state_1.get_laneCount_vx64ey_k$() | 0) - (this.get_firstVisibleItemIndex_pq52y4_k$() / this.state_1.get_laneCount_vx64ey_k$() | 0) | 0;
    // Inline function 'kotlin.comparisons.minOf' call
    var a = abs(targetItemOffset);
    var coercedOffset = Math.min(a, averageMainAxisItemSize);
    if (targetItemOffset < 0)
      coercedOffset = imul(coercedOffset, -1);
    return averageMainAxisItemSize * lineDiff + coercedOffset - this.get_firstVisibleItemScrollOffset_my3xxa_k$();
  };
  protoOf(LazyStaggeredGridAnimateScrollScope).scroll_nwg3ga_k$ = function (block, $completion) {
    return this.state_1.scroll$default_wd6w3v_k$(VOID, block, $completion);
  };
  protoOf(LazyStaggeredGridAnimateScrollScope).get_visibleItemsAverageSize_e16hyx_k$ = function () {
    var layoutInfo = this.state_1.get_layoutInfo_ej1bpb_k$();
    var visibleItems = layoutInfo.get_visibleItemsInfo_uew4qj_k$();
    // Inline function 'androidx.compose.ui.util.fastSumBy' call
    // Inline function 'kotlin.contracts.contract' call
    var sum = 0;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = visibleItems.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = visibleItems.get_c1px32_k$(index);
        // Inline function 'androidx.compose.ui.util.fastSumBy.<anonymous>' call
        var tmp = sum;
        // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridAnimateScrollScope.<get-visibleItemsAverageSize>.<anonymous>' call
        sum = tmp + (this.state_1.get_isVertical_4x9emh_k$() ? _IntSize___get_height__impl__prv63b(item.get_size_kd98kr_k$()) : _IntSize___get_width__impl__d9yl4o(item.get_size_kd98kr_k$())) | 0;
      }
       while (inductionVariable <= last);
    var itemSizeSum = sum;
    return (itemSizeSum / visibleItems.get_size_woubt6_k$() | 0) + layoutInfo.get_mainAxisItemSpacing_tq19t9_k$() | 0;
  };
  function LazyStaggeredGridScopeMarker() {
  }
  protoOf(LazyStaggeredGridScopeMarker).equals = function (other) {
    if (!(other instanceof LazyStaggeredGridScopeMarker))
      return false;
    other instanceof LazyStaggeredGridScopeMarker || THROW_CCE();
    return true;
  };
  protoOf(LazyStaggeredGridScopeMarker).hashCode = function () {
    return 0;
  };
  protoOf(LazyStaggeredGridScopeMarker).toString = function () {
    return '@androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridScopeMarker()';
  };
  function LazyStaggeredGridInterval(key, type, span, item) {
    this.key_1 = key;
    this.type_1 = type;
    this.span_1 = span;
    this.item_1 = item;
  }
  protoOf(LazyStaggeredGridInterval).get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  protoOf(LazyStaggeredGridInterval).get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  protoOf(LazyStaggeredGridInterval).get_span_wouger_k$ = function () {
    return this.span_1;
  };
  protoOf(LazyStaggeredGridInterval).get_item_woo5lo_k$ = function () {
    return this.item_1;
  };
  function get_EmptyArray_1() {
    _init_properties_LazyStaggeredGridItemPlacementAnimator_kt__l5qnr9();
    return EmptyArray_1;
  }
  var EmptyArray_1;
  function _get_keyToItemInfoMap__nsc8mu_1($this) {
    return $this.keyToItemInfoMap_1;
  }
  function _set_keyIndexMap__o5qz5w_1($this, _set____db54di) {
    $this.keyIndexMap_1 = _set____db54di;
  }
  function _get_keyIndexMap__64n760_1($this) {
    return $this.keyIndexMap_1;
  }
  function _set_firstVisibleIndex__es8ivf_1($this, _set____db54di) {
    $this.firstVisibleIndex_1 = _set____db54di;
  }
  function _get_firstVisibleIndex__yj2mtd_1($this) {
    return $this.firstVisibleIndex_1;
  }
  function _get_movingAwayKeys__adh0uz_1($this) {
    return $this.movingAwayKeys_1;
  }
  function _get_movingInFromStartBound__g9mw8i_1($this) {
    return $this.movingInFromStartBound_1;
  }
  function _get_movingInFromEndBound__uwfzbp_1($this) {
    return $this.movingInFromEndBound_1;
  }
  function _get_movingAwayToStartBound__dxobmg_1($this) {
    return $this.movingAwayToStartBound_1;
  }
  function _get_movingAwayToEndBound__j28841_1($this) {
    return $this.movingAwayToEndBound_1;
  }
  function initializeAnimation_1($this, item, mainAxisOffset, itemInfo) {
    var firstPlaceableOffset = item.get_offset_bksmdx_k$();
    var tmp;
    if (item.get_isVertical_4x9emh_k$()) {
      tmp = IntOffset__copy$default_impl_1y5pbb(firstPlaceableOffset, VOID, mainAxisOffset);
    } else {
      tmp = IntOffset__copy$default_impl_1y5pbb(firstPlaceableOffset, mainAxisOffset);
    }
    var targetFirstPlaceableOffset = tmp;
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = itemInfo.animations_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridItemPlacementAnimator.initializeAnimation.<anonymous>' call
      if (!(element == null)) {
        // Inline function 'androidx.compose.ui.unit.IntOffset.minus' call
        var this_0 = item.get_offset_bksmdx_k$();
        var diffToFirstPlaceableOffset = IntOffset_0(_IntOffset___get_x__impl__qiqr5o(this_0) - _IntOffset___get_x__impl__qiqr5o(firstPlaceableOffset) | 0, _IntOffset___get_y__impl__2avpwj(this_0) - _IntOffset___get_y__impl__2avpwj(firstPlaceableOffset) | 0);
        // Inline function 'androidx.compose.ui.unit.IntOffset.plus' call
        var tmp$ret$1 = IntOffset_0(_IntOffset___get_x__impl__qiqr5o(targetFirstPlaceableOffset) + _IntOffset___get_x__impl__qiqr5o(diffToFirstPlaceableOffset) | 0, _IntOffset___get_y__impl__2avpwj(targetFirstPlaceableOffset) + _IntOffset___get_y__impl__2avpwj(diffToFirstPlaceableOffset) | 0);
        element.set_rawOffset_91xt99_k$(tmp$ret$1);
      }
    }
  }
  function initializeAnimation$default_1($this, item, mainAxisOffset, itemInfo, $super) {
    itemInfo = itemInfo === VOID ? ensureNotNull($this.keyToItemInfoMap_1.get_wei43m_k$(item.get_key_18j28a_k$())) : itemInfo;
    return initializeAnimation_1($this, item, mainAxisOffset, itemInfo);
  }
  function startAnimationsIfNeeded_0($this, item) {
    var itemInfo = ensureNotNull($this.keyToItemInfoMap_1.get_wei43m_k$(item.get_key_18j28a_k$()));
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = itemInfo.animations_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridItemPlacementAnimator.startAnimationsIfNeeded.<anonymous>' call
      if (!(element == null)) {
        var newTarget = item.get_offset_bksmdx_k$();
        var currentTarget = element.get_rawOffset_3ik8vz_k$();
        if (!equals(currentTarget, Companion_getInstance_34().get_NotInitialized_kwrmrr_k$()) ? !equals(currentTarget, newTarget) : false) {
          // Inline function 'androidx.compose.ui.unit.IntOffset.minus' call
          var tmp$ret$0 = IntOffset_0(_IntOffset___get_x__impl__qiqr5o(newTarget) - _IntOffset___get_x__impl__qiqr5o(currentTarget) | 0, _IntOffset___get_y__impl__2avpwj(newTarget) - _IntOffset___get_y__impl__2avpwj(currentTarget) | 0);
          element.animatePlacementDelta_c53shl_k$(tmp$ret$0);
        }
        element.set_rawOffset_91xt99_k$(newTarget);
      }
    }
  }
  function _get_hasAnimations__pyw8qw_1(_this__u8e3s4, $this) {
    // Inline function 'kotlin.repeat' call
    var times = _this__u8e3s4.get_placeablesCount_3f5k0k_k$();
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridItemPlacementAnimator.<get-hasAnimations>.<anonymous>' call
        if (get_specs_1(_this__u8e3s4.getParentData_dqnln6_k$(index)) == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          return true;
        }
      }
       while (inductionVariable < times);
    return false;
  }
  function sam$kotlin_Comparator$0_1(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_1).compare_bczr_k$ = function (a, b) {
    return this.function_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_1).compare = function (a, b) {
    return this.compare_bczr_k$(a, b);
  };
  function LazyStaggeredGridItemPlacementAnimator$onMeasured$lambda($previousKeyToIndexMap) {
    return function (a, b) {
      // Inline function 'kotlin.comparisons.compareValuesBy' call
      // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridItemPlacementAnimator.onMeasured.<anonymous>' call
      var tmp = $previousKeyToIndexMap.getIndex_xxb61u_k$(b.get_key_18j28a_k$());
      // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridItemPlacementAnimator.onMeasured.<anonymous>' call
      var tmp$ret$1 = $previousKeyToIndexMap.getIndex_xxb61u_k$(a.get_key_18j28a_k$());
      return compareValues(tmp, tmp$ret$1);
    };
  }
  function LazyStaggeredGridItemPlacementAnimator$onMeasured$lambda_0($previousKeyToIndexMap) {
    return function (a, b) {
      // Inline function 'kotlin.comparisons.compareValuesBy' call
      // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridItemPlacementAnimator.onMeasured.<anonymous>' call
      var tmp = $previousKeyToIndexMap.getIndex_xxb61u_k$(a.get_key_18j28a_k$());
      // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridItemPlacementAnimator.onMeasured.<anonymous>' call
      var tmp$ret$1 = $previousKeyToIndexMap.getIndex_xxb61u_k$(b.get_key_18j28a_k$());
      return compareValues(tmp, tmp$ret$1);
    };
  }
  function LazyStaggeredGridItemPlacementAnimator$onMeasured$lambda_1(this$0) {
    return function (a, b) {
      // Inline function 'kotlin.comparisons.compareValuesBy' call
      // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridItemPlacementAnimator.onMeasured.<anonymous>' call
      var tmp = this$0.keyIndexMap_1.getIndex_xxb61u_k$(b.get_key_18j28a_k$());
      // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridItemPlacementAnimator.onMeasured.<anonymous>' call
      var tmp$ret$1 = this$0.keyIndexMap_1.getIndex_xxb61u_k$(a.get_key_18j28a_k$());
      return compareValues(tmp, tmp$ret$1);
    };
  }
  function LazyStaggeredGridItemPlacementAnimator$onMeasured$lambda_2(this$0) {
    return function (a, b) {
      // Inline function 'kotlin.comparisons.compareValuesBy' call
      // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridItemPlacementAnimator.onMeasured.<anonymous>' call
      var tmp = this$0.keyIndexMap_1.getIndex_xxb61u_k$(a.get_key_18j28a_k$());
      // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridItemPlacementAnimator.onMeasured.<anonymous>' call
      var tmp$ret$1 = this$0.keyIndexMap_1.getIndex_xxb61u_k$(b.get_key_18j28a_k$());
      return compareValues(tmp, tmp$ret$1);
    };
  }
  function LazyStaggeredGridItemPlacementAnimator() {
    this.keyToItemInfoMap_1 = mutableScatterMapOf();
    this.keyIndexMap_1 = Empty_getInstance();
    this.firstVisibleIndex_1 = 0;
    this.movingAwayKeys_1 = mutableScatterSetOf();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.movingInFromStartBound_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.movingInFromEndBound_1 = ArrayList_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.movingAwayToStartBound_1 = ArrayList_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_2.movingAwayToEndBound_1 = ArrayList_init_$Create$();
  }
  protoOf(LazyStaggeredGridItemPlacementAnimator).onMeasured_h5rxbf_k$ = function (consumedScroll, layoutWidth, layoutHeight, positionedItems, itemProvider, isVertical, laneCount, coroutineScope) {
    var tmp;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastAny' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = positionedItems.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = positionedItems.get_c1px32_k$(index);
          // Inline function 'androidx.compose.ui.util.fastAny.<anonymous>' call
          // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridItemPlacementAnimator.onMeasured.<anonymous>' call
          if (_get_hasAnimations__pyw8qw_1(item, this)) {
            tmp$ret$1 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = false;
    }
    if (!tmp$ret$1) {
      tmp = this.keyToItemInfoMap_1.isEmpty_y1axqb_k$();
    } else {
      tmp = false;
    }
    if (tmp) {
      this.reset_5u6xz3_k$();
      return Unit_getInstance();
    }
    var previousFirstVisibleIndex = this.firstVisibleIndex_1;
    var tmp_0 = this;
    var tmp0_safe_receiver = firstOrNull(positionedItems);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_index_it478p_k$();
    tmp_0.firstVisibleIndex_1 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var previousKeyToIndexMap = this.keyIndexMap_1;
    this.keyIndexMap_1 = itemProvider.get_keyIndexMap_54cmgw_k$();
    var mainAxisLayoutSize = isVertical ? layoutHeight : layoutWidth;
    var tmp_1;
    if (isVertical) {
      tmp_1 = IntOffset_0(0, consumedScroll);
    } else {
      tmp_1 = IntOffset_0(consumedScroll, 0);
    }
    var scrollOffset = tmp_1;
    // Inline function 'androidx.collection.ScatterMap.forEachKey' call
    var this_0 = this.keyToItemInfoMap_1;
    var k = this_0.get_keys_wop4xp_k$();
    $l$block_0: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this_0.get_metadata_vs95vc_k$();
      var lastIndex = m.length - 2 | 0;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 <= lastIndex)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_1 = slot;
          if (!this_1.and_4spn93_k$(this_1.inv_28kx_k$().shl_bg8if3_k$(7)).and_4spn93_k$(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_1 = 0;
            if (inductionVariable_1 < bitCount)
              do {
                var j = inductionVariable_1;
                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.and_4spn93_k$(new Long(255, 0)).compareTo_9jj042_k$(new Long(128, 0)) < 0) {
                  var index_0 = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterMap.forEachKey.<anonymous>' call
                  // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridItemPlacementAnimator.onMeasured.<anonymous>' call
                  var tmp_2 = k[index_0];
                  var it = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
                  this.movingAwayKeys_1.add_utx5q5_k$(it);
                }
                slot = slot.shr_9fl3wl_k$(8);
              }
               while (inductionVariable_1 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block_0;
            }
          }
        }
         while (!(i === lastIndex));
    }
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_2 = 0;
    var last_0 = positionedItems.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_2 <= last_0)
      do {
        var index_1 = inductionVariable_2;
        inductionVariable_2 = inductionVariable_2 + 1 | 0;
        var item_0 = positionedItems.get_c1px32_k$(index_1);
        // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridItemPlacementAnimator.onMeasured.<anonymous>' call
        this.movingAwayKeys_1.remove_cedx0m_k$(item_0.get_key_18j28a_k$());
        if (_get_hasAnimations__pyw8qw_1(item_0, this)) {
          var itemInfo = this.keyToItemInfoMap_1.get_wei43m_k$(item_0.get_key_18j28a_k$());
          if (itemInfo == null) {
            var newItemInfo = new ItemInfo_1(item_0.get_lane_wopool_k$(), item_0.get_span_wouger_k$(), item_0.get_crossAxisOffset_6qne2z_k$());
            newItemInfo.updateAnimation_eiy2um_k$(item_0, coroutineScope);
            this.keyToItemInfoMap_1.set_b9w55f_k$(item_0.get_key_18j28a_k$(), newItemInfo);
            var previousIndex = previousKeyToIndexMap.getIndex_xxb61u_k$(item_0.get_key_18j28a_k$());
            if (!(previousIndex === -1) ? !(item_0.get_index_it478p_k$() === previousIndex) : false) {
              if (previousIndex < previousFirstVisibleIndex) {
                this.movingInFromStartBound_1.add_utx5q5_k$(item_0);
              } else {
                this.movingInFromEndBound_1.add_utx5q5_k$(item_0);
              }
            } else {
              // Inline function 'kotlin.let' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridItemPlacementAnimator.onMeasured.<anonymous>.<anonymous>' call
              var it_0 = item_0.get_offset_bksmdx_k$();
              var tmp$ret$6 = item_0.get_isVertical_4x9emh_k$() ? _IntOffset___get_y__impl__2avpwj(it_0) : _IntOffset___get_x__impl__qiqr5o(it_0);
              initializeAnimation_1(this, item_0, tmp$ret$6, newItemInfo);
            }
          } else {
            // Inline function 'kotlin.collections.forEach' call
            var indexedObject = itemInfo.animations_1;
            var inductionVariable_3 = 0;
            var last_1 = indexedObject.length;
            while (inductionVariable_3 < last_1) {
              var element = indexedObject[inductionVariable_3];
              inductionVariable_3 = inductionVariable_3 + 1 | 0;
              // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridItemPlacementAnimator.onMeasured.<anonymous>.<anonymous>' call
              if (!(element == null) ? !equals(element.get_rawOffset_3ik8vz_k$(), Companion_getInstance_34().get_NotInitialized_kwrmrr_k$()) : false) {
                // Inline function 'androidx.compose.ui.unit.IntOffset.plus' call
                var this_2 = element.get_rawOffset_3ik8vz_k$();
                var tmp$ret$7 = IntOffset_0(_IntOffset___get_x__impl__qiqr5o(this_2) + _IntOffset___get_x__impl__qiqr5o(scrollOffset) | 0, _IntOffset___get_y__impl__2avpwj(this_2) + _IntOffset___get_y__impl__2avpwj(scrollOffset) | 0);
                element.set_rawOffset_91xt99_k$(tmp$ret$7);
              }
            }
            itemInfo.lane_1 = item_0.get_lane_wopool_k$();
            itemInfo.span_1 = item_0.get_span_wouger_k$();
            itemInfo.crossAxisOffset_1 = item_0.get_crossAxisOffset_6qne2z_k$();
            startAnimationsIfNeeded_0(this, item_0);
          }
        } else {
          this.keyToItemInfoMap_1.remove_gppy8k_k$(item_0.get_key_18j28a_k$());
        }
      }
       while (inductionVariable_2 <= last_0);
    var tmp_3 = 0;
    var tmp_4 = new Int32Array(laneCount);
    while (tmp_3 < laneCount) {
      tmp_4[tmp_3] = 0;
      tmp_3 = tmp_3 + 1 | 0;
    }
    var accumulatedOffsetPerLane = tmp_4;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.movingInFromStartBound_1.isEmpty_y1axqb_k$()) {
      // Inline function 'kotlin.collections.sortByDescending' call
      var this_3 = this.movingInFromStartBound_1;
      if (this_3.get_size_woubt6_k$() > 1) {
        // Inline function 'kotlin.comparisons.compareByDescending' call
        var tmp_5 = LazyStaggeredGridItemPlacementAnimator$onMeasured$lambda(previousKeyToIndexMap);
        var tmp$ret$10 = new sam$kotlin_Comparator$0_1(tmp_5);
        sortWith(this_3, tmp$ret$10);
      }
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var this_4 = this.movingInFromStartBound_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_4 = 0;
      var last_2 = this_4.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable_4 <= last_2)
        do {
          var index_2 = inductionVariable_4;
          inductionVariable_4 = inductionVariable_4 + 1 | 0;
          var item_1 = this_4.get_c1px32_k$(index_2);
          // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridItemPlacementAnimator.onMeasured.<anonymous>' call
          var tmp1_index0 = item_1.get_lane_wopool_k$();
          accumulatedOffsetPerLane[tmp1_index0] = accumulatedOffsetPerLane[tmp1_index0] + item_1.get_mainAxisSize_vd88f0_k$() | 0;
          var mainAxisOffset = 0 - accumulatedOffsetPerLane[item_1.get_lane_wopool_k$()] | 0;
          initializeAnimation$default_1(this, item_1, mainAxisOffset);
          startAnimationsIfNeeded_0(this, item_1);
        }
         while (inductionVariable_4 <= last_2);
      fill(accumulatedOffsetPerLane, 0);
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.movingInFromEndBound_1.isEmpty_y1axqb_k$()) {
      // Inline function 'kotlin.collections.sortBy' call
      var this_5 = this.movingInFromEndBound_1;
      if (this_5.get_size_woubt6_k$() > 1) {
        // Inline function 'kotlin.comparisons.compareBy' call
        var tmp_6 = LazyStaggeredGridItemPlacementAnimator$onMeasured$lambda_0(previousKeyToIndexMap);
        var tmp$ret$12 = new sam$kotlin_Comparator$0_1(tmp_6);
        sortWith(this_5, tmp$ret$12);
      }
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var this_6 = this.movingInFromEndBound_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_5 = 0;
      var last_3 = this_6.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable_5 <= last_3)
        do {
          var index_3 = inductionVariable_5;
          inductionVariable_5 = inductionVariable_5 + 1 | 0;
          var item_2 = this_6.get_c1px32_k$(index_3);
          // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridItemPlacementAnimator.onMeasured.<anonymous>' call
          var mainAxisOffset_0 = mainAxisLayoutSize + accumulatedOffsetPerLane[item_2.get_lane_wopool_k$()] | 0;
          var tmp1_index0_0 = item_2.get_lane_wopool_k$();
          accumulatedOffsetPerLane[tmp1_index0_0] = accumulatedOffsetPerLane[tmp1_index0_0] + item_2.get_mainAxisSize_vd88f0_k$() | 0;
          initializeAnimation$default_1(this, item_2, mainAxisOffset_0);
          startAnimationsIfNeeded_0(this, item_2);
        }
         while (inductionVariable_5 <= last_3);
      fill(accumulatedOffsetPerLane, 0);
    }
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    var this_7 = this.movingAwayKeys_1;
    // Inline function 'kotlin.contracts.contract' call
    var k_0 = this_7.get_elements_vxwh8g_k$();
    $l$block_2: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m_0 = this_7.get_metadata_vs95vc_k$();
      var lastIndex_0 = m_0.length - 2 | 0;
      var inductionVariable_6 = 0;
      if (inductionVariable_6 <= lastIndex_0)
        do {
          var i_0 = inductionVariable_6;
          inductionVariable_6 = inductionVariable_6 + 1 | 0;
          var slot_0 = m_0[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_8 = slot_0;
          if (!this_8.and_4spn93_k$(this_8.inv_28kx_k$().shl_bg8if3_k$(7)).and_4spn93_k$(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
            var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
            var inductionVariable_7 = 0;
            if (inductionVariable_7 < bitCount_0)
              do {
                var j_0 = inductionVariable_7;
                inductionVariable_7 = inductionVariable_7 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot_0.and_4spn93_k$(new Long(255, 0)).compareTo_9jj042_k$(new Long(128, 0)) < 0) {
                  var index_4 = (i_0 << 3) + j_0 | 0;
                  // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                  // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridItemPlacementAnimator.onMeasured.<anonymous>' call
                  var tmp_7 = k_0[index_4];
                  var key = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
                  var itemInfo_0 = ensureNotNull(this.keyToItemInfoMap_1.get_wei43m_k$(key));
                  var newIndex = this.keyIndexMap_1.getIndex_xxb61u_k$(key);
                  if (newIndex === -1) {
                    this.keyToItemInfoMap_1.remove_gppy8k_k$(key);
                  } else {
                    var item_3 = itemProvider.getAndMeasure_nf8f85_k$(newIndex, _SpanRange___init__impl__m64xt2_0(itemInfo_0.lane_1, itemInfo_0.span_1));
                    item_3.set_nonScrollableItem_6u8ted_k$(true);
                    var tmp$ret$16;
                    $l$block_1: {
                      // Inline function 'kotlin.collections.any' call
                      var indexedObject_0 = itemInfo_0.animations_1;
                      var inductionVariable_8 = 0;
                      var last_4 = indexedObject_0.length;
                      while (inductionVariable_8 < last_4) {
                        var element_0 = indexedObject_0[inductionVariable_8];
                        inductionVariable_8 = inductionVariable_8 + 1 | 0;
                        // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridItemPlacementAnimator.onMeasured.<anonymous>.<anonymous>' call
                        if ((element_0 == null ? null : element_0.get_isPlacementAnimationInProgress_h8jcfw_k$()) === true) {
                          tmp$ret$16 = true;
                          break $l$block_1;
                        }
                      }
                      tmp$ret$16 = false;
                    }
                    var inProgress = tmp$ret$16;
                    if (!inProgress ? newIndex === previousKeyToIndexMap.getIndex_xxb61u_k$(key) : false) {
                      this.keyToItemInfoMap_1.remove_gppy8k_k$(key);
                    } else {
                      if (newIndex < this.firstVisibleIndex_1) {
                        this.movingAwayToStartBound_1.add_utx5q5_k$(item_3);
                      } else {
                        this.movingAwayToEndBound_1.add_utx5q5_k$(item_3);
                      }
                    }
                  }
                }
                slot_0 = slot_0.shr_9fl3wl_k$(8);
              }
               while (inductionVariable_7 < bitCount_0);
            if (!(bitCount_0 === 8)) {
              break $l$block_2;
            }
          }
        }
         while (!(i_0 === lastIndex_0));
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.movingAwayToStartBound_1.isEmpty_y1axqb_k$()) {
      // Inline function 'kotlin.collections.sortByDescending' call
      var this_9 = this.movingAwayToStartBound_1;
      if (this_9.get_size_woubt6_k$() > 1) {
        // Inline function 'kotlin.comparisons.compareByDescending' call
        var tmp_8 = LazyStaggeredGridItemPlacementAnimator$onMeasured$lambda_1(this);
        var tmp$ret$19 = new sam$kotlin_Comparator$0_1(tmp_8);
        sortWith(this_9, tmp$ret$19);
      }
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var this_10 = this.movingAwayToStartBound_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_9 = 0;
      var last_5 = this_10.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable_9 <= last_5)
        do {
          var index_5 = inductionVariable_9;
          inductionVariable_9 = inductionVariable_9 + 1 | 0;
          var item_4 = this_10.get_c1px32_k$(index_5);
          // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridItemPlacementAnimator.onMeasured.<anonymous>' call
          var tmp1_index0_1 = item_4.get_lane_wopool_k$();
          accumulatedOffsetPerLane[tmp1_index0_1] = accumulatedOffsetPerLane[tmp1_index0_1] + item_4.get_mainAxisSize_vd88f0_k$() | 0;
          var mainAxisOffset_1 = 0 - accumulatedOffsetPerLane[item_4.get_lane_wopool_k$()] | 0;
          var itemInfo_1 = ensureNotNull(this.keyToItemInfoMap_1.get_wei43m_k$(item_4.get_key_18j28a_k$()));
          item_4.position_qsn11b_k$(mainAxisOffset_1, itemInfo_1.crossAxisOffset_1, mainAxisLayoutSize);
          positionedItems.add_utx5q5_k$(item_4);
          startAnimationsIfNeeded_0(this, item_4);
        }
         while (inductionVariable_9 <= last_5);
      fill(accumulatedOffsetPerLane, 0);
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.movingAwayToEndBound_1.isEmpty_y1axqb_k$()) {
      // Inline function 'kotlin.collections.sortBy' call
      var this_11 = this.movingAwayToEndBound_1;
      if (this_11.get_size_woubt6_k$() > 1) {
        // Inline function 'kotlin.comparisons.compareBy' call
        var tmp_9 = LazyStaggeredGridItemPlacementAnimator$onMeasured$lambda_2(this);
        var tmp$ret$21 = new sam$kotlin_Comparator$0_1(tmp_9);
        sortWith(this_11, tmp$ret$21);
      }
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var this_12 = this.movingAwayToEndBound_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_10 = 0;
      var last_6 = this_12.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable_10 <= last_6)
        do {
          var index_6 = inductionVariable_10;
          inductionVariable_10 = inductionVariable_10 + 1 | 0;
          var item_5 = this_12.get_c1px32_k$(index_6);
          // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridItemPlacementAnimator.onMeasured.<anonymous>' call
          var mainAxisOffset_2 = mainAxisLayoutSize + accumulatedOffsetPerLane[item_5.get_lane_wopool_k$()] | 0;
          var tmp1_index0_2 = item_5.get_lane_wopool_k$();
          accumulatedOffsetPerLane[tmp1_index0_2] = accumulatedOffsetPerLane[tmp1_index0_2] + item_5.get_mainAxisSize_vd88f0_k$() | 0;
          var itemInfo_2 = ensureNotNull(this.keyToItemInfoMap_1.get_wei43m_k$(item_5.get_key_18j28a_k$()));
          item_5.position_qsn11b_k$(mainAxisOffset_2, itemInfo_2.crossAxisOffset_1, mainAxisLayoutSize);
          positionedItems.add_utx5q5_k$(item_5);
          startAnimationsIfNeeded_0(this, item_5);
        }
         while (inductionVariable_10 <= last_6);
    }
    this.movingInFromStartBound_1.clear_j9egeb_k$();
    this.movingInFromEndBound_1.clear_j9egeb_k$();
    this.movingAwayToStartBound_1.clear_j9egeb_k$();
    this.movingAwayToEndBound_1.clear_j9egeb_k$();
    this.movingAwayKeys_1.clear_j9egeb_k$();
  };
  protoOf(LazyStaggeredGridItemPlacementAnimator).reset_5u6xz3_k$ = function () {
    this.keyToItemInfoMap_1.clear_j9egeb_k$();
    this.keyIndexMap_1 = Empty_getInstance();
    this.firstVisibleIndex_1 = -1;
  };
  protoOf(LazyStaggeredGridItemPlacementAnimator).getAnimation_5261aw_k$ = function (key, placeableIndex) {
    var tmp;
    if (this.keyToItemInfoMap_1.isEmpty_y1axqb_k$()) {
      tmp = null;
    } else {
      var tmp0_safe_receiver = this.keyToItemInfoMap_1.get_wei43m_k$(key);
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.animations_1;
      tmp = tmp1_safe_receiver == null ? null : tmp1_safe_receiver[placeableIndex];
    }
    return tmp;
  };
  function _set_animations__2tmn7s_1($this, _set____db54di) {
    $this.animations_1 = _set____db54di;
  }
  function ItemInfo_1(lane, span, crossAxisOffset) {
    this.lane_1 = lane;
    this.span_1 = span;
    this.crossAxisOffset_1 = crossAxisOffset;
    this.animations_1 = get_EmptyArray_1();
  }
  protoOf(ItemInfo_1).set_lane_gi2thb_k$ = function (_set____db54di) {
    this.lane_1 = _set____db54di;
  };
  protoOf(ItemInfo_1).get_lane_wopool_k$ = function () {
    return this.lane_1;
  };
  protoOf(ItemInfo_1).set_span_nm92lb_k$ = function (_set____db54di) {
    this.span_1 = _set____db54di;
  };
  protoOf(ItemInfo_1).get_span_wouger_k$ = function () {
    return this.span_1;
  };
  protoOf(ItemInfo_1).set_crossAxisOffset_h5kgi9_k$ = function (_set____db54di) {
    this.crossAxisOffset_1 = _set____db54di;
  };
  protoOf(ItemInfo_1).get_crossAxisOffset_6qne2z_k$ = function () {
    return this.crossAxisOffset_1;
  };
  protoOf(ItemInfo_1).get_animations_ez9gco_k$ = function () {
    return this.animations_1;
  };
  protoOf(ItemInfo_1).updateAnimation_eiy2um_k$ = function (positionedItem, coroutineScope) {
    var inductionVariable = positionedItem.get_placeablesCount_3f5k0k_k$();
    var last = this.animations_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_safe_receiver = this.animations_1[i];
        if (tmp1_safe_receiver == null)
          null;
        else {
          tmp1_safe_receiver.stopAnimations_7tom2n_k$();
        }
      }
       while (inductionVariable < last);
    if (!(this.animations_1.length === positionedItem.get_placeablesCount_3f5k0k_k$())) {
      this.animations_1 = copyOf(this.animations_1, positionedItem.get_placeablesCount_3f5k0k_k$());
    }
    // Inline function 'kotlin.repeat' call
    var times = positionedItem.get_placeablesCount_3f5k0k_k$();
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < times)
      do {
        var index = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.ItemInfo.updateAnimation.<anonymous>' call
        var specs = get_specs_1(positionedItem.getParentData_dqnln6_k$(index));
        if (specs == null) {
          var tmp0_safe_receiver = this.animations_1[index];
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.stopAnimations_7tom2n_k$();
          }
          this.animations_1[index] = null;
        } else {
          var tmp1_elvis_lhs = this.animations_1[index];
          var tmp;
          if (tmp1_elvis_lhs == null) {
            // Inline function 'kotlin.also' call
            var this_0 = new LazyLayoutAnimation(coroutineScope);
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.ItemInfo.updateAnimation.<anonymous>.<anonymous>' call
            this.animations_1[index] = this_0;
            tmp = this_0;
          } else {
            tmp = tmp1_elvis_lhs;
          }
          var item = tmp;
          item.set_appearanceSpec_r5i506_k$(specs.get_appearanceSpec_987hrs_k$());
          item.set_placementSpec_ooa865_k$(specs.get_placementSpec_cshd61_k$());
        }
      }
       while (inductionVariable_0 < times);
  };
  function get_specs_1(_this__u8e3s4) {
    _init_properties_LazyStaggeredGridItemPlacementAnimator_kt__l5qnr9();
    return _this__u8e3s4 instanceof LazyLayoutAnimationSpecsNode ? _this__u8e3s4 : null;
  }
  var properties_initialized_LazyStaggeredGridItemPlacementAnimator_kt_5te56l;
  function _init_properties_LazyStaggeredGridItemPlacementAnimator_kt__l5qnr9() {
    if (!properties_initialized_LazyStaggeredGridItemPlacementAnimator_kt_5te56l) {
      properties_initialized_LazyStaggeredGridItemPlacementAnimator_kt_5te56l = true;
      // Inline function 'kotlin.emptyArray' call
      EmptyArray_1 = [];
    }
  }
  function LazyStaggeredGridItemProvider() {
  }
  function LazyStaggeredGridItemScope() {
  }
  function _get_MaxCapacity__s8ii8d($this) {
    return $this.MaxCapacity_1;
  }
  function _set_anchor__m2bdoi($this, _set____db54di) {
    $this.anchor_1 = _set____db54di;
  }
  function _get_anchor__nj1yba($this) {
    return $this.anchor_1;
  }
  function _set_lanes__h6lnvi($this, _set____db54di) {
    $this.lanes_1 = _set____db54di;
  }
  function _get_lanes__euisly($this) {
    return $this.lanes_1;
  }
  function _get_spannedItems__l73lhu($this) {
    return $this.spannedItems_1;
  }
  function SpannedItem(index, gaps) {
    this.index_1 = index;
    this.gaps_1 = gaps;
  }
  protoOf(SpannedItem).get_index_it478p_k$ = function () {
    return this.index_1;
  };
  protoOf(SpannedItem).set_gaps_8uk5tr_k$ = function (_set____db54di) {
    this.gaps_1 = _set____db54di;
  };
  protoOf(SpannedItem).get_gaps_womht2_k$ = function () {
    return this.gaps_1;
  };
  function ensureCapacity($this, capacity, newOffset) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(capacity <= 131072)) {
      // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridLaneInfo.ensureCapacity.<anonymous>' call
      var message = 'Requested item capacity ' + capacity + ' is larger than max supported: 131072!';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if ($this.lanes_1.length < capacity) {
      var newSize = $this.lanes_1.length;
      while (newSize < capacity)
        newSize = imul(newSize, 2);
      var tmp = $this;
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = $this.lanes_1;
      var destination = new Int32Array(newSize);
      var endIndex = this_0.length;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = this_0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_0, destination, newOffset, 0, endIndex);
      tmp.lanes_1 = destination;
    }
  }
  function ensureCapacity$default($this, capacity, newOffset, $super) {
    newOffset = newOffset === VOID ? 0 : newOffset;
    return ensureCapacity($this, capacity, newOffset);
  }
  function Companion_5() {
    Companion_instance_5 = this;
    this.MaxCapacity_1 = 131072;
    this.Unset_1 = -1;
    this.FullSpan_1 = -2;
  }
  protoOf(Companion_5).get_Unset_ii4mhs_k$ = function () {
    return this.Unset_1;
  };
  protoOf(Companion_5).get_FullSpan_8pzwym_k$ = function () {
    return this.FullSpan_1;
  };
  var Companion_instance_5;
  function Companion_getInstance_36() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function LazyStaggeredGridLaneInfo$setGaps$lambda($key) {
    return function (it) {
      // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridLaneInfo.setGaps.<anonymous>' call
      var tmp$ret$0 = it.index_1;
      return compareValues(tmp$ret$0, $key);
    };
  }
  function LazyStaggeredGridLaneInfo$getGaps$lambda($key) {
    return function (it) {
      // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridLaneInfo.getGaps.<anonymous>' call
      var tmp$ret$0 = it.index_1;
      return compareValues(tmp$ret$0, $key);
    };
  }
  function LazyStaggeredGridLaneInfo() {
    Companion_getInstance_36();
    this.anchor_1 = 0;
    this.lanes_1 = new Int32Array(16);
    this.spannedItems_1 = ArrayDeque_init_$Create$();
  }
  protoOf(LazyStaggeredGridLaneInfo).setLane_ilslpe_k$ = function (itemIndex, lane) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(itemIndex >= 0)) {
      // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridLaneInfo.setLane.<anonymous>' call
      var message = 'Negative lanes are not supported';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.ensureValidIndex_ozquj0_k$(itemIndex);
    this.lanes_1[itemIndex - this.anchor_1 | 0] = lane + 1 | 0;
  };
  protoOf(LazyStaggeredGridLaneInfo).getLane_n8fbre_k$ = function (itemIndex) {
    if (itemIndex < this.lowerBound_juhzb1_k$() ? true : itemIndex >= this.upperBound_rymw3o_k$()) {
      return -1;
    }
    return this.lanes_1[itemIndex - this.anchor_1 | 0] - 1 | 0;
  };
  protoOf(LazyStaggeredGridLaneInfo).assignedToLane_ivys0b_k$ = function (itemIndex, targetLane) {
    var lane = this.getLane_n8fbre_k$(itemIndex);
    return (lane === targetLane ? true : lane === -1) ? true : lane === -2;
  };
  protoOf(LazyStaggeredGridLaneInfo).upperBound_rymw3o_k$ = function () {
    return this.anchor_1 + this.lanes_1.length | 0;
  };
  protoOf(LazyStaggeredGridLaneInfo).lowerBound_juhzb1_k$ = function () {
    return this.anchor_1;
  };
  protoOf(LazyStaggeredGridLaneInfo).reset_5u6xz3_k$ = function () {
    fill(this.lanes_1, 0);
    this.spannedItems_1.clear_j9egeb_k$();
  };
  protoOf(LazyStaggeredGridLaneInfo).findPreviousItemIndex_56p7sh_k$ = function (itemIndex, targetLane) {
    var inductionVariable = itemIndex - 1 | 0;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        if (this.assignedToLane_ivys0b_k$(i, targetLane)) {
          return i;
        }
      }
       while (0 <= inductionVariable);
    return -1;
  };
  protoOf(LazyStaggeredGridLaneInfo).findNextItemIndex_u9eudv_k$ = function (itemIndex, targetLane) {
    var inductionVariable = itemIndex + 1 | 0;
    var last = this.upperBound_rymw3o_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (this.assignedToLane_ivys0b_k$(i, targetLane)) {
          return i;
        }
      }
       while (inductionVariable < last);
    return this.upperBound_rymw3o_k$();
  };
  protoOf(LazyStaggeredGridLaneInfo).ensureValidIndex_ozquj0_k$ = function (requestedIndex) {
    var requestedCapacity = requestedIndex - this.anchor_1 | 0;
    if (0 <= requestedCapacity ? requestedCapacity < 131072 : false) {
      ensureCapacity$default(this, requestedCapacity + 1 | 0);
    } else {
      var oldAnchor = this.anchor_1;
      var tmp = this;
      // Inline function 'kotlin.comparisons.maxOf' call
      var a = requestedIndex - (this.lanes_1.length / 2 | 0) | 0;
      tmp.anchor_1 = Math.max(a, 0);
      var delta = this.anchor_1 - oldAnchor | 0;
      if (delta >= 0) {
        if (delta < this.lanes_1.length) {
          // Inline function 'kotlin.collections.copyInto' call
          var this_0 = this.lanes_1;
          var destination = this.lanes_1;
          var startIndex = delta;
          var endIndex = this.lanes_1.length;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_0 = this_0;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp_0, destination, 0, startIndex, endIndex);
        }
        var tmp_1 = this.lanes_1;
        // Inline function 'kotlin.comparisons.maxOf' call
        var b = this.lanes_1.length - delta | 0;
        var tmp$ret$6 = Math.max(0, b);
        fill(tmp_1, 0, tmp$ret$6, this.lanes_1.length);
      } else {
        delta = -delta | 0;
        if ((this.lanes_1.length + delta | 0) < 131072) {
          ensureCapacity(this, (this.lanes_1.length + delta | 0) + 1 | 0, delta);
        } else {
          if (delta < this.lanes_1.length) {
            // Inline function 'kotlin.collections.copyInto' call
            var this_1 = this.lanes_1;
            var destination_0 = this.lanes_1;
            var destinationOffset = delta;
            var endIndex_0 = this.lanes_1.length - delta | 0;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_2 = this_1;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            arrayCopy(tmp_2, destination_0, destinationOffset, 0, endIndex_0);
          }
          var tmp_3 = this.lanes_1;
          // Inline function 'kotlin.comparisons.minOf' call
          var a_0 = this.lanes_1.length;
          var b_0 = delta;
          var tmp$ret$12 = Math.min(a_0, b_0);
          fill(tmp_3, 0, 0, tmp$ret$12);
        }
      }
    }
    $l$loop: while (true) {
      var tmp_4;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!this.spannedItems_1.isEmpty_y1axqb_k$()) {
        tmp_4 = this.spannedItems_1.first_1m0hio_k$().index_1 < this.lowerBound_juhzb1_k$();
      } else {
        tmp_4 = false;
      }
      if (!tmp_4) {
        break $l$loop;
      }
      this.spannedItems_1.removeFirst_58pi0k_k$();
    }
    $l$loop_0: while (true) {
      var tmp_5;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!this.spannedItems_1.isEmpty_y1axqb_k$()) {
        tmp_5 = this.spannedItems_1.last_1z1cm_k$().index_1 > this.upperBound_rymw3o_k$();
      } else {
        tmp_5 = false;
      }
      if (!tmp_5) {
        break $l$loop_0;
      }
      this.spannedItems_1.removeLast_i5wx8a_k$();
    }
  };
  protoOf(LazyStaggeredGridLaneInfo).setGaps_xxcohx_k$ = function (itemIndex, gaps) {
    // Inline function 'kotlin.collections.binarySearchBy' call
    var this_0 = this.spannedItems_1;
    var toIndex = this_0.get_size_woubt6_k$();
    var foundIndex = binarySearch(this_0, 0, toIndex, LazyStaggeredGridLaneInfo$setGaps$lambda(itemIndex));
    if (foundIndex < 0) {
      if (gaps == null) {
        return Unit_getInstance();
      }
      var insertionIndex = -(foundIndex + 1 | 0) | 0;
      this.spannedItems_1.add_dl6gt3_k$(insertionIndex, new SpannedItem(itemIndex, gaps));
    } else {
      if (gaps == null) {
        this.spannedItems_1.removeAt_6niowx_k$(foundIndex);
      } else {
        this.spannedItems_1.get_c1px32_k$(foundIndex).gaps_1 = gaps;
      }
    }
  };
  protoOf(LazyStaggeredGridLaneInfo).getGaps_kur8pn_k$ = function (itemIndex) {
    // Inline function 'kotlin.collections.binarySearchBy' call
    var this_0 = this.spannedItems_1;
    var toIndex = this_0.get_size_woubt6_k$();
    var foundIndex = binarySearch(this_0, 0, toIndex, LazyStaggeredGridLaneInfo$getGaps$lambda(itemIndex));
    var tmp0_safe_receiver = getOrNull(this.spannedItems_1, foundIndex);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.gaps_1;
  };
  function _get_placeables__otc5bb_1($this) {
    return $this.placeables_1;
  }
  function _get_beforeContentPadding__8jxpx0_1($this) {
    return $this.beforeContentPadding_1;
  }
  function _get_afterContentPadding__razem5_1($this) {
    return $this.afterContentPadding_1;
  }
  function _get_animator__s0xiyk_1($this) {
    return $this.animator_1;
  }
  function _set_mainAxisLayoutSize__frif1q_1($this, _set____db54di) {
    $this.mainAxisLayoutSize_1 = _set____db54di;
  }
  function _get_mainAxisLayoutSize__lbqbt2_1($this) {
    return $this.mainAxisLayoutSize_1;
  }
  function _set_minMainAxisOffset__bsxkee_1($this, _set____db54di) {
    $this.minMainAxisOffset_1 = _set____db54di;
  }
  function _get_minMainAxisOffset__9wvbvy_1($this) {
    return $this.minMainAxisOffset_1;
  }
  function _set_maxMainAxisOffset__wfzltg_1($this, _set____db54di) {
    $this.maxMainAxisOffset_1 = _set____db54di;
  }
  function _get_maxMainAxisOffset__aq6pj4_1($this) {
    return $this.maxMainAxisOffset_1;
  }
  function _set_offset__aq0ezo_1($this, _set____db54di) {
    $this.offset_1 = _set____db54di;
  }
  function _get_mainAxis__jwdafl_1(_this__u8e3s4, $this) {
    return $this.isVertical_1 ? _IntOffset___get_y__impl__2avpwj(_this__u8e3s4) : _IntOffset___get_x__impl__qiqr5o(_this__u8e3s4);
  }
  function _get_mainAxisSize__iyci34_1(_this__u8e3s4, $this) {
    return $this.isVertical_1 ? _this__u8e3s4.get_height_e7t92o_k$() : _this__u8e3s4.get_width_j0q4yl_k$();
  }
  function copy_2(_this__u8e3s4, $this, mainAxisMap) {
    return IntOffset_0($this.isVertical_1 ? _IntOffset___get_x__impl__qiqr5o(_this__u8e3s4) : mainAxisMap(_IntOffset___get_x__impl__qiqr5o(_this__u8e3s4)), $this.isVertical_1 ? mainAxisMap(_IntOffset___get_y__impl__2avpwj(_this__u8e3s4)) : _IntOffset___get_y__impl__2avpwj(_this__u8e3s4));
  }
  function LazyStaggeredGridMeasuredItem(index, key, placeables, isVertical, spacing, lane, span, beforeContentPadding, afterContentPadding, contentType, animator) {
    this.index_1 = index;
    this.key_1 = key;
    this.placeables_1 = placeables;
    this.isVertical_1 = isVertical;
    this.lane_1 = lane;
    this.span_1 = span;
    this.beforeContentPadding_1 = beforeContentPadding;
    this.afterContentPadding_1 = afterContentPadding;
    this.contentType_1 = contentType;
    this.animator_1 = animator;
    this.isVisible_1 = true;
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastMaxOfOrNull' call
      var this_0 = this.placeables_1;
      // Inline function 'kotlin.contracts.contract' call
      if (this_0.isEmpty_y1axqb_k$()) {
        tmp$ret$0 = null;
        break $l$block;
      }
      // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridMeasuredItem.mainAxisSize.<anonymous>' call
      var placeable = this_0.get_c1px32_k$(0);
      var maxValue = this.isVertical_1 ? placeable.get_height_e7t92o_k$() : placeable.get_width_j0q4yl_k$();
      var inductionVariable = 1;
      var last = get_lastIndex(this_0);
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridMeasuredItem.mainAxisSize.<anonymous>' call
          var placeable_0 = this_0.get_c1px32_k$(i);
          var v = this.isVertical_1 ? placeable_0.get_height_e7t92o_k$() : placeable_0.get_width_j0q4yl_k$();
          if (compareTo(v, maxValue) > 0)
            maxValue = v;
        }
         while (!(i === last));
      tmp$ret$0 = maxValue;
    }
    var tmp0_elvis_lhs = tmp$ret$0;
    tmp.mainAxisSize_1 = tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
    this.sizeWithSpacings_1 = coerceAtLeast(this.mainAxisSize_1 + spacing | 0, 0);
    var tmp_0 = this;
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.util.fastMaxOfOrNull' call
      var this_1 = this.placeables_1;
      // Inline function 'kotlin.contracts.contract' call
      if (this_1.isEmpty_y1axqb_k$()) {
        tmp$ret$3 = null;
        break $l$block_0;
      }
      // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridMeasuredItem.crossAxisSize.<anonymous>' call
      var it = this_1.get_c1px32_k$(0);
      var maxValue_0 = this.isVertical_1 ? it.get_width_j0q4yl_k$() : it.get_height_e7t92o_k$();
      var inductionVariable_0 = 1;
      var last_0 = get_lastIndex(this_1);
      if (inductionVariable_0 <= last_0)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridMeasuredItem.crossAxisSize.<anonymous>' call
          var it_0 = this_1.get_c1px32_k$(i_0);
          var v_0 = this.isVertical_1 ? it_0.get_width_j0q4yl_k$() : it_0.get_height_e7t92o_k$();
          if (compareTo(v_0, maxValue_0) > 0)
            maxValue_0 = v_0;
        }
         while (!(i_0 === last_0));
      tmp$ret$3 = maxValue_0;
    }
    var tmp0_elvis_lhs_0 = tmp$ret$3;
    tmp_0.crossAxisSize_1 = tmp0_elvis_lhs_0 == null ? 0 : tmp0_elvis_lhs_0;
    this.mainAxisLayoutSize_1 = Companion_getInstance_36().get_Unset_ii4mhs_k$();
    this.minMainAxisOffset_1 = 0;
    this.maxMainAxisOffset_1 = 0;
    this.nonScrollableItem_1 = false;
    var tmp_1 = this;
    var tmp_2;
    if (this.isVertical_1) {
      tmp_2 = IntSize(this.crossAxisSize_1, this.mainAxisSize_1);
    } else {
      tmp_2 = IntSize(this.mainAxisSize_1, this.crossAxisSize_1);
    }
    tmp_1.size_1 = tmp_2;
    this.offset_1 = Companion_getInstance_11().get_Zero_6hc3i8_k$();
  }
  protoOf(LazyStaggeredGridMeasuredItem).get_index_it478p_k$ = function () {
    return this.index_1;
  };
  protoOf(LazyStaggeredGridMeasuredItem).get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  protoOf(LazyStaggeredGridMeasuredItem).get_isVertical_4x9emh_k$ = function () {
    return this.isVertical_1;
  };
  protoOf(LazyStaggeredGridMeasuredItem).get_lane_wopool_k$ = function () {
    return this.lane_1;
  };
  protoOf(LazyStaggeredGridMeasuredItem).get_span_wouger_k$ = function () {
    return this.span_1;
  };
  protoOf(LazyStaggeredGridMeasuredItem).get_contentType_7git4a_k$ = function () {
    return this.contentType_1;
  };
  protoOf(LazyStaggeredGridMeasuredItem).set_isVisible_jac1re_k$ = function (_set____db54di) {
    this.isVisible_1 = _set____db54di;
  };
  protoOf(LazyStaggeredGridMeasuredItem).get_isVisible_6n82m7_k$ = function () {
    return this.isVisible_1;
  };
  protoOf(LazyStaggeredGridMeasuredItem).get_placeablesCount_3f5k0k_k$ = function () {
    return this.placeables_1.get_size_woubt6_k$();
  };
  protoOf(LazyStaggeredGridMeasuredItem).getParentData_dqnln6_k$ = function (index) {
    return this.placeables_1.get_c1px32_k$(index).get_parentData_o87vnn_k$();
  };
  protoOf(LazyStaggeredGridMeasuredItem).get_mainAxisSize_vd88f0_k$ = function () {
    return this.mainAxisSize_1;
  };
  protoOf(LazyStaggeredGridMeasuredItem).get_sizeWithSpacings_q8axgg_k$ = function () {
    return this.sizeWithSpacings_1;
  };
  protoOf(LazyStaggeredGridMeasuredItem).get_crossAxisSize_vn6o3d_k$ = function () {
    return this.crossAxisSize_1;
  };
  protoOf(LazyStaggeredGridMeasuredItem).set_nonScrollableItem_6u8ted_k$ = function (_set____db54di) {
    this.nonScrollableItem_1 = _set____db54di;
  };
  protoOf(LazyStaggeredGridMeasuredItem).get_nonScrollableItem_5xqaji_k$ = function () {
    return this.nonScrollableItem_1;
  };
  protoOf(LazyStaggeredGridMeasuredItem).get_size_kd98kr_k$ = function () {
    return this.size_1;
  };
  protoOf(LazyStaggeredGridMeasuredItem).get_offset_bksmdx_k$ = function () {
    return this.offset_1;
  };
  protoOf(LazyStaggeredGridMeasuredItem).position_qsn11b_k$ = function (mainAxis, crossAxis, mainAxisLayoutSize) {
    this.mainAxisLayoutSize_1 = mainAxisLayoutSize;
    this.minMainAxisOffset_1 = -this.beforeContentPadding_1 | 0;
    this.maxMainAxisOffset_1 = mainAxisLayoutSize + this.afterContentPadding_1 | 0;
    var tmp = this;
    var tmp_0;
    if (this.isVertical_1) {
      tmp_0 = IntOffset_0(crossAxis, mainAxis);
    } else {
      tmp_0 = IntOffset_0(mainAxis, crossAxis);
    }
    tmp.offset_1 = tmp_0;
  };
  protoOf(LazyStaggeredGridMeasuredItem).get_mainAxisOffset_sz7p3e_k$ = function () {
    return !this.isVertical_1 ? _IntOffset___get_x__impl__qiqr5o(this.offset_1) : _IntOffset___get_y__impl__2avpwj(this.offset_1);
  };
  protoOf(LazyStaggeredGridMeasuredItem).get_crossAxisOffset_6qne2z_k$ = function () {
    return this.isVertical_1 ? _IntOffset___get_x__impl__qiqr5o(this.offset_1) : _IntOffset___get_y__impl__2avpwj(this.offset_1);
  };
  protoOf(LazyStaggeredGridMeasuredItem).place_8o2e8a_k$ = function (scope, context) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(this.mainAxisLayoutSize_1 === Companion_getInstance_36().get_Unset_ii4mhs_k$())) {
      // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridMeasuredItem.place.<anonymous>.<anonymous>' call
      var message = 'position() should be called first';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var this_0 = this.placeables_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    var tmp;
    if (inductionVariable <= last) {
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.get_c1px32_k$(index);
        // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridMeasuredItem.place.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_0 = this.minMainAxisOffset_1;
        // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridMeasuredItem.mainAxisSize' call
        var minOffset = tmp_0 - (this.isVertical_1 ? item.get_height_e7t92o_k$() : item.get_width_j0q4yl_k$()) | 0;
        var maxOffset = this.maxMainAxisOffset_1;
        var offset = this.offset_1;
        var animation = this.animator_1.getAnimation_5261aw_k$(this.key_1, index);
        if (!(animation == null)) {
          // Inline function 'androidx.compose.ui.unit.IntOffset.plus' call
          var this_1 = offset;
          var other = animation.get_placementDelta_36vqi3_k$();
          var animatedOffset = IntOffset_0(_IntOffset___get_x__impl__qiqr5o(this_1) + _IntOffset___get_x__impl__qiqr5o(other) | 0, _IntOffset___get_y__impl__2avpwj(this_1) + _IntOffset___get_y__impl__2avpwj(other) | 0);
          if ((_get_mainAxis__jwdafl_1(offset, this) <= minOffset ? _get_mainAxis__jwdafl_1(animatedOffset, this) <= minOffset : false) ? true : _get_mainAxis__jwdafl_1(offset, this) >= maxOffset ? _get_mainAxis__jwdafl_1(animatedOffset, this) >= maxOffset : false) {
            animation.cancelPlacementAnimation_9u9r4n_k$();
          }
          offset = animatedOffset;
        }
        if (context.reverseLayout_1) {
          // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridMeasuredItem.copy' call
          var this_2 = offset;
          var tmp_1;
          if (this.isVertical_1) {
            tmp_1 = _IntOffset___get_x__impl__qiqr5o(this_2);
          } else {
            // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridMeasuredItem.place.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var mainAxisOffset = _IntOffset___get_x__impl__qiqr5o(this_2);
            var tmp_2 = this.mainAxisLayoutSize_1 - mainAxisOffset | 0;
            // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridMeasuredItem.mainAxisSize' call
            tmp_1 = tmp_2 - (this.isVertical_1 ? item.get_height_e7t92o_k$() : item.get_width_j0q4yl_k$()) | 0;
          }
          var tmp_3 = tmp_1;
          var tmp_4;
          if (this.isVertical_1) {
            // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridMeasuredItem.place.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var mainAxisOffset_0 = _IntOffset___get_y__impl__2avpwj(this_2);
            var tmp_5 = this.mainAxisLayoutSize_1 - mainAxisOffset_0 | 0;
            // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridMeasuredItem.mainAxisSize' call
            tmp_4 = tmp_5 - (this.isVertical_1 ? item.get_height_e7t92o_k$() : item.get_width_j0q4yl_k$()) | 0;
          } else {
            tmp_4 = _IntOffset___get_y__impl__2avpwj(this_2);
          }
          offset = IntOffset_0(tmp_3, tmp_4);
        }
        // Inline function 'androidx.compose.ui.unit.IntOffset.plus' call
        var this_3 = offset;
        var other_0 = context.contentOffset_1;
        offset = IntOffset_0(_IntOffset___get_x__impl__qiqr5o(this_3) + _IntOffset___get_x__impl__qiqr5o(other_0) | 0, _IntOffset___get_y__impl__2avpwj(this_3) + _IntOffset___get_y__impl__2avpwj(other_0) | 0);
        scope.placeRelativeWithLayer$default_1hz9dt_k$(item, offset);
      }
       while (inductionVariable <= last);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(LazyStaggeredGridMeasuredItem).applyScrollDelta_knnih7_k$ = function (delta) {
    if (this.nonScrollableItem_1) {
      return Unit_getInstance();
    }
    var tmp = this;
    // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridMeasuredItem.copy' call
    var this_0 = this.offset_1;
    var tmp_0;
    if (this.isVertical_1) {
      tmp_0 = _IntOffset___get_x__impl__qiqr5o(this_0);
    } else {
      // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridMeasuredItem.applyScrollDelta.<anonymous>' call
      tmp_0 = _IntOffset___get_x__impl__qiqr5o(this_0) + delta | 0;
    }
    var tmp_1 = tmp_0;
    var tmp_2;
    if (this.isVertical_1) {
      // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridMeasuredItem.applyScrollDelta.<anonymous>' call
      tmp_2 = _IntOffset___get_y__impl__2avpwj(this_0) + delta | 0;
    } else {
      tmp_2 = _IntOffset___get_y__impl__2avpwj(this_0);
    }
    tmp.offset_1 = IntOffset_0(tmp_1, tmp_2);
    // Inline function 'kotlin.repeat' call
    var times = this.get_placeablesCount_3f5k0k_k$();
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridMeasuredItem.applyScrollDelta.<anonymous>' call
        var animation = this.animator_1.getAnimation_5261aw_k$(this.key_1, index);
        if (!(animation == null)) {
          // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridMeasuredItem.copy' call
          var this_1 = animation.get_rawOffset_3ik8vz_k$();
          var tmp_3;
          if (this.isVertical_1) {
            tmp_3 = _IntOffset___get_x__impl__qiqr5o(this_1);
          } else {
            // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridMeasuredItem.applyScrollDelta.<anonymous>.<anonymous>' call
            tmp_3 = _IntOffset___get_x__impl__qiqr5o(this_1) + delta | 0;
          }
          var tmp_4 = tmp_3;
          var tmp_5;
          if (this.isVertical_1) {
            // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridMeasuredItem.applyScrollDelta.<anonymous>.<anonymous>' call
            tmp_5 = _IntOffset___get_y__impl__2avpwj(this_1) + delta | 0;
          } else {
            tmp_5 = _IntOffset___get_y__impl__2avpwj(this_1);
          }
          var tmp$ret$5 = IntOffset_0(tmp_4, tmp_5);
          animation.set_rawOffset_91xt99_k$(tmp$ret$5);
        }
      }
       while (inductionVariable < times);
  };
  protoOf(LazyStaggeredGridMeasuredItem).toString = function () {
    var tmp;
    if (false) {
      tmp = '{' + this.index_1 + ' at ' + new IntOffset(this.offset_1) + '}';
    } else {
      tmp = anyToString(this);
    }
    return tmp;
  };
  function LazyStaggeredGridMeasureContext$measuredItemProvider$1(this$0) {
    this.this$0__1 = this$0;
    LazyStaggeredGridMeasureProvider.call(this, this$0.isVertical_1, this$0.itemProvider_1, this$0.measureScope_1, this$0.resolvedSlots_1);
  }
  protoOf(LazyStaggeredGridMeasureContext$measuredItemProvider$1).createItem_th7tu0_k$ = function (index, lane, span, key, contentType, placeables) {
    return new LazyStaggeredGridMeasuredItem(index, key, placeables, this.this$0__1.isVertical_1, this.this$0__1.mainAxisSpacing_1, lane, span, this.this$0__1.beforeContentPadding_1, this.this$0__1.afterContentPadding_1, contentType, this.this$0__1.state_1.get_placementAnimator_wpwptp_k$());
  };
  function LazyStaggeredGridMeasureContext(state, pinnedItems, itemProvider, resolvedSlots, constraints, isVertical, measureScope, mainAxisAvailableSize, contentOffset, beforeContentPadding, afterContentPadding, reverseLayout, mainAxisSpacing, coroutineScope) {
    this.state_1 = state;
    this.pinnedItems_1 = pinnedItems;
    this.itemProvider_1 = itemProvider;
    this.resolvedSlots_1 = resolvedSlots;
    this.constraints_1 = constraints;
    this.isVertical_1 = isVertical;
    this.measureScope_1 = measureScope;
    this.mainAxisAvailableSize_1 = mainAxisAvailableSize;
    this.contentOffset_1 = contentOffset;
    this.beforeContentPadding_1 = beforeContentPadding;
    this.afterContentPadding_1 = afterContentPadding;
    this.reverseLayout_1 = reverseLayout;
    this.mainAxisSpacing_1 = mainAxisSpacing;
    this.coroutineScope_1 = coroutineScope;
    var tmp = this;
    tmp.measuredItemProvider_1 = new LazyStaggeredGridMeasureContext$measuredItemProvider$1(this);
    this.laneInfo_1 = this.state_1.get_laneInfo_chm2kj_k$();
    this.laneCount_1 = this.resolvedSlots_1.get_sizes_iyjejt_k$().length;
  }
  protoOf(LazyStaggeredGridMeasureContext).get_state_iypx7s_k$ = function () {
    return this.state_1;
  };
  protoOf(LazyStaggeredGridMeasureContext).get_pinnedItems_ujz3hb_k$ = function () {
    return this.pinnedItems_1;
  };
  protoOf(LazyStaggeredGridMeasureContext).get_itemProvider_1e7o2b_k$ = function () {
    return this.itemProvider_1;
  };
  protoOf(LazyStaggeredGridMeasureContext).get_resolvedSlots_1tbppw_k$ = function () {
    return this.resolvedSlots_1;
  };
  protoOf(LazyStaggeredGridMeasureContext).get_constraints_y0yfdk_k$ = function () {
    return this.constraints_1;
  };
  protoOf(LazyStaggeredGridMeasureContext).get_isVertical_4x9emh_k$ = function () {
    return this.isVertical_1;
  };
  protoOf(LazyStaggeredGridMeasureContext).get_measureScope_1ufqjl_k$ = function () {
    return this.measureScope_1;
  };
  protoOf(LazyStaggeredGridMeasureContext).get_mainAxisAvailableSize_i6ulpj_k$ = function () {
    return this.mainAxisAvailableSize_1;
  };
  protoOf(LazyStaggeredGridMeasureContext).get_contentOffset_bcnnim_k$ = function () {
    return this.contentOffset_1;
  };
  protoOf(LazyStaggeredGridMeasureContext).get_beforeContentPadding_2dperk_k$ = function () {
    return this.beforeContentPadding_1;
  };
  protoOf(LazyStaggeredGridMeasureContext).get_afterContentPadding_49ooob_k$ = function () {
    return this.afterContentPadding_1;
  };
  protoOf(LazyStaggeredGridMeasureContext).get_reverseLayout_nclvnn_k$ = function () {
    return this.reverseLayout_1;
  };
  protoOf(LazyStaggeredGridMeasureContext).get_mainAxisSpacing_heqark_k$ = function () {
    return this.mainAxisSpacing_1;
  };
  protoOf(LazyStaggeredGridMeasureContext).get_coroutineScope_5k7h45_k$ = function () {
    return this.coroutineScope_1;
  };
  protoOf(LazyStaggeredGridMeasureContext).get_measuredItemProvider_8it1zn_k$ = function () {
    return this.measuredItemProvider_1;
  };
  protoOf(LazyStaggeredGridMeasureContext).get_laneInfo_chm2kj_k$ = function () {
    return this.laneInfo_1;
  };
  protoOf(LazyStaggeredGridMeasureContext).get_laneCount_vx64ey_k$ = function () {
    return this.laneCount_1;
  };
  protoOf(LazyStaggeredGridMeasureContext).isFullSpan_rpu4bk_k$ = function (_this__u8e3s4, itemIndex) {
    return _this__u8e3s4.get_spanProvider_k4leu4_k$().isFullSpan_ebju17_k$(itemIndex);
  };
  protoOf(LazyStaggeredGridMeasureContext).getSpanRange_vdfgcc_k$ = function (_this__u8e3s4, itemIndex, lane) {
    var isFullSpan = _this__u8e3s4.get_spanProvider_k4leu4_k$().isFullSpan_ebju17_k$(itemIndex);
    var span = isFullSpan ? this.laneCount_1 : 1;
    var targetLane = isFullSpan ? 0 : lane;
    return _SpanRange___init__impl__m64xt2_0(targetLane, span);
  };
  protoOf(LazyStaggeredGridMeasureContext).get_isFullSpan_r1tlai_k$ = function (_this__u8e3s4) {
    // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.SpanRange.size' call
    // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.SpanRange.end' call
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var tmp = _SpanRange___get_packedValue__impl__vda0fm(_this__u8e3s4).and_4spn93_k$(new Long(-1, 0)).toInt_1tsl84_k$();
    // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.SpanRange.start' call
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    return !((tmp - _SpanRange___get_packedValue__impl__vda0fm(_this__u8e3s4).shr_9fl3wl_k$(32).toInt_1tsl84_k$() | 0) === 1);
  };
  protoOf(LazyStaggeredGridMeasureContext).get_laneInfo_e9jenz_k$ = function (_this__u8e3s4) {
    var tmp;
    // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridMeasureContext.isFullSpan' call
    // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.SpanRange.size' call
    // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.SpanRange.end' call
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var tmp_0 = _SpanRange___get_packedValue__impl__vda0fm(_this__u8e3s4).and_4spn93_k$(new Long(-1, 0)).toInt_1tsl84_k$();
    // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.SpanRange.start' call
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    if (!((tmp_0 - _SpanRange___get_packedValue__impl__vda0fm(_this__u8e3s4).shr_9fl3wl_k$(32).toInt_1tsl84_k$() | 0) === 1)) {
      tmp = Companion_getInstance_36().get_FullSpan_8pzwym_k$();
    } else {
      // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.SpanRange.start' call
      // Inline function 'androidx.compose.ui.util.unpackInt1' call
      tmp = _SpanRange___get_packedValue__impl__vda0fm(_this__u8e3s4).shr_9fl3wl_k$(32).toInt_1tsl84_k$();
    }
    return tmp;
  };
  function get_DebugLoggingEnabled() {
    return DebugLoggingEnabled;
  }
  var DebugLoggingEnabled;
  function _get_isVertical__yidrg5_0($this) {
    return $this.isVertical_1;
  }
  function _get_itemProvider__opdbc7_1($this) {
    return $this.itemProvider_1;
  }
  function _get_measureScope__aqf6gl_1($this) {
    return $this.measureScope_1;
  }
  function _get_resolvedSlots__vkvln8($this) {
    return $this.resolvedSlots_1;
  }
  function childConstraints($this, slot, span) {
    var tmp;
    if (span === 1) {
      tmp = $this.resolvedSlots_1.get_sizes_iyjejt_k$()[slot];
    } else {
      var start = $this.resolvedSlots_1.get_positions_ya7scf_k$()[slot];
      var endSlot = (slot + span | 0) - 1 | 0;
      var end = $this.resolvedSlots_1.get_positions_ya7scf_k$()[endSlot] + $this.resolvedSlots_1.get_sizes_iyjejt_k$()[endSlot] | 0;
      tmp = end - start | 0;
    }
    var crossAxisSize = tmp;
    var tmp_0;
    if ($this.isVertical_1) {
      tmp_0 = Companion_getInstance_12().fixedWidth_sctdsx_k$(crossAxisSize);
    } else {
      tmp_0 = Companion_getInstance_12().fixedHeight_x1j7yw_k$(crossAxisSize);
    }
    return tmp_0;
  }
  function LazyStaggeredGridMeasureProvider(isVertical, itemProvider, measureScope, resolvedSlots) {
    this.isVertical_1 = isVertical;
    this.itemProvider_1 = itemProvider;
    this.measureScope_1 = measureScope;
    this.resolvedSlots_1 = resolvedSlots;
  }
  protoOf(LazyStaggeredGridMeasureProvider).getAndMeasure_nf8f85_k$ = function (index, span) {
    var key = this.itemProvider_1.getKey_stxcen_k$(index);
    var contentType = this.itemProvider_1.getContentType_ooo485_k$(index);
    var slotCount = this.resolvedSlots_1.get_sizes_iyjejt_k$().length;
    // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.SpanRange.start' call
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var tmp$ret$1 = _SpanRange___get_packedValue__impl__vda0fm(span).shr_9fl3wl_k$(32).toInt_1tsl84_k$();
    var spanStart = coerceAtMost(tmp$ret$1, slotCount - 1 | 0);
    // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.SpanRange.size' call
    // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.SpanRange.end' call
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var tmp = _SpanRange___get_packedValue__impl__vda0fm(span).and_4spn93_k$(new Long(-1, 0)).toInt_1tsl84_k$();
    // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.SpanRange.start' call
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var tmp$ret$6 = tmp - _SpanRange___get_packedValue__impl__vda0fm(span).shr_9fl3wl_k$(32).toInt_1tsl84_k$() | 0;
    var spanSize = coerceAtMost(tmp$ret$6, slotCount - spanStart | 0);
    var placeables = this.measureScope_1.measure_roc4md_k$(index, childConstraints(this, spanStart, spanSize));
    return this.createItem_th7tu0_k$(index, spanStart, spanSize, key, contentType, placeables);
  };
  protoOf(LazyStaggeredGridMeasureProvider).get_keyIndexMap_54cmgw_k$ = function () {
    return this.itemProvider_1.get_keyIndexMap_54cmgw_k$();
  };
  function _SpanRange___init__impl__m64xt2(packedValue) {
    return packedValue;
  }
  function _SpanRange___get_packedValue__impl__vda0fm($this) {
    return $this;
  }
  function _SpanRange___init__impl__m64xt2_0(lane, span) {
    // Inline function 'androidx.compose.ui.util.packInts' call
    var val2 = lane + span | 0;
    var tmp$ret$0 = toLong(lane).shl_bg8if3_k$(32).or_v7fvkl_k$(toLong(val2).and_4spn93_k$(new Long(-1, 0)));
    return _SpanRange___init__impl__m64xt2(tmp$ret$0);
  }
  function _SpanRange___get_start__impl__eks7p3($this) {
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    return _SpanRange___get_packedValue__impl__vda0fm($this).shr_9fl3wl_k$(32).toInt_1tsl84_k$();
  }
  function _SpanRange___get_end__impl__4g0ar4($this) {
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    return _SpanRange___get_packedValue__impl__vda0fm($this).and_4spn93_k$(new Long(-1, 0)).toInt_1tsl84_k$();
  }
  function _SpanRange___get_size__impl__ord7y($this) {
    // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.SpanRange.end' call
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var tmp = _SpanRange___get_packedValue__impl__vda0fm($this).and_4spn93_k$(new Long(-1, 0)).toInt_1tsl84_k$();
    // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.SpanRange.start' call
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    return tmp - _SpanRange___get_packedValue__impl__vda0fm($this).shr_9fl3wl_k$(32).toInt_1tsl84_k$() | 0;
  }
  function SpanRange__toString_impl_d4n832($this) {
    return 'SpanRange(packedValue=' + $this.toString() + ')';
  }
  function SpanRange__hashCode_impl_8miopt($this) {
    return $this.hashCode();
  }
  function SpanRange__equals_impl_9rhdob($this, other) {
    if (!(other instanceof SpanRange))
      return false;
    var tmp0_other_with_cast = other instanceof SpanRange ? other.packedValue_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function SpanRange(packedValue) {
    this.packedValue_1 = packedValue;
  }
  protoOf(SpanRange).toString = function () {
    return SpanRange__toString_impl_d4n832(this.packedValue_1);
  };
  protoOf(SpanRange).hashCode = function () {
    return SpanRange__hashCode_impl_8miopt(this.packedValue_1);
  };
  protoOf(SpanRange).equals = function (other) {
    return SpanRange__equals_impl_9rhdob(this.packedValue_1, other);
  };
  function get_EmptyLazyStaggeredGridLayoutInfo() {
    _init_properties_LazyStaggeredGridMeasureResult_kt__5q024j();
    return EmptyLazyStaggeredGridLayoutInfo;
  }
  var EmptyLazyStaggeredGridLayoutInfo;
  function LazyStaggeredGridMeasureResult(firstVisibleItemIndices, firstVisibleItemScrollOffsets, consumedScroll, measureResult, canScrollForward, isVertical, remeasureNeeded, totalItemsCount, visibleItemsInfo, viewportSize, viewportStartOffset, viewportEndOffset, beforeContentPadding, afterContentPadding, mainAxisItemSpacing) {
    this.firstVisibleItemIndices_1 = firstVisibleItemIndices;
    this.firstVisibleItemScrollOffsets_1 = firstVisibleItemScrollOffsets;
    this.consumedScroll_1 = consumedScroll;
    this.measureResult_1 = measureResult;
    this.canScrollForward_1 = canScrollForward;
    this.isVertical_1 = isVertical;
    this.remeasureNeeded_1 = remeasureNeeded;
    this.totalItemsCount_1 = totalItemsCount;
    this.visibleItemsInfo_1 = visibleItemsInfo;
    this.viewportSize_1 = viewportSize;
    this.viewportStartOffset_1 = viewportStartOffset;
    this.viewportEndOffset_1 = viewportEndOffset;
    this.beforeContentPadding_1 = beforeContentPadding;
    this.afterContentPadding_1 = afterContentPadding;
    this.mainAxisItemSpacing_1 = mainAxisItemSpacing;
    this.orientation_1 = this.isVertical_1 ? Orientation_Vertical_getInstance() : Orientation_Horizontal_getInstance();
  }
  protoOf(LazyStaggeredGridMeasureResult).get_firstVisibleItemIndices_42eeaf_k$ = function () {
    return this.firstVisibleItemIndices_1;
  };
  protoOf(LazyStaggeredGridMeasureResult).get_firstVisibleItemScrollOffsets_129nzp_k$ = function () {
    return this.firstVisibleItemScrollOffsets_1;
  };
  protoOf(LazyStaggeredGridMeasureResult).set_consumedScroll_6ihamu_k$ = function (_set____db54di) {
    this.consumedScroll_1 = _set____db54di;
  };
  protoOf(LazyStaggeredGridMeasureResult).get_consumedScroll_u59rku_k$ = function () {
    return this.consumedScroll_1;
  };
  protoOf(LazyStaggeredGridMeasureResult).get_measureResult_ddotte_k$ = function () {
    return this.measureResult_1;
  };
  protoOf(LazyStaggeredGridMeasureResult).set_canScrollForward_gclgc0_k$ = function (_set____db54di) {
    this.canScrollForward_1 = _set____db54di;
  };
  protoOf(LazyStaggeredGridMeasureResult).get_canScrollForward_dmb0fj_k$ = function () {
    return this.canScrollForward_1;
  };
  protoOf(LazyStaggeredGridMeasureResult).get_isVertical_4x9emh_k$ = function () {
    return this.isVertical_1;
  };
  protoOf(LazyStaggeredGridMeasureResult).get_remeasureNeeded_9nwf49_k$ = function () {
    return this.remeasureNeeded_1;
  };
  protoOf(LazyStaggeredGridMeasureResult).get_totalItemsCount_aiolgq_k$ = function () {
    return this.totalItemsCount_1;
  };
  protoOf(LazyStaggeredGridMeasureResult).get_visibleItemsInfo_uew4qj_k$ = function () {
    return this.visibleItemsInfo_1;
  };
  protoOf(LazyStaggeredGridMeasureResult).get_viewportSize_hnfbdb_k$ = function () {
    return this.viewportSize_1;
  };
  protoOf(LazyStaggeredGridMeasureResult).get_viewportStartOffset_v4b1ay_k$ = function () {
    return this.viewportStartOffset_1;
  };
  protoOf(LazyStaggeredGridMeasureResult).get_viewportEndOffset_gapdi7_k$ = function () {
    return this.viewportEndOffset_1;
  };
  protoOf(LazyStaggeredGridMeasureResult).get_beforeContentPadding_2dperk_k$ = function () {
    return this.beforeContentPadding_1;
  };
  protoOf(LazyStaggeredGridMeasureResult).get_afterContentPadding_49ooob_k$ = function () {
    return this.afterContentPadding_1;
  };
  protoOf(LazyStaggeredGridMeasureResult).get_mainAxisItemSpacing_tq19t9_k$ = function () {
    return this.mainAxisItemSpacing_1;
  };
  protoOf(LazyStaggeredGridMeasureResult).get_alignmentLines_nx3i05_k$ = function () {
    return this.measureResult_1.get_alignmentLines_nx3i05_k$();
  };
  protoOf(LazyStaggeredGridMeasureResult).get_height_e7t92o_k$ = function () {
    return this.measureResult_1.get_height_e7t92o_k$();
  };
  protoOf(LazyStaggeredGridMeasureResult).get_width_j0q4yl_k$ = function () {
    return this.measureResult_1.get_width_j0q4yl_k$();
  };
  protoOf(LazyStaggeredGridMeasureResult).placeChildren_kds4oa_k$ = function () {
    this.measureResult_1.placeChildren_kds4oa_k$();
  };
  protoOf(LazyStaggeredGridMeasureResult).get_canScrollBackward_v2t7h3_k$ = function () {
    return !(this.firstVisibleItemIndices_1[0] === 0 ? this.firstVisibleItemScrollOffsets_1[0] <= 0 : false);
  };
  protoOf(LazyStaggeredGridMeasureResult).get_orientation_9wu93t_k$ = function () {
    return this.orientation_1;
  };
  protoOf(LazyStaggeredGridMeasureResult).tryToApplyScrollWithoutRemeasure_sdxfxs_k$ = function (delta) {
    var tmp;
    var tmp_0;
    if (this.remeasureNeeded_1 ? true : this.visibleItemsInfo_1.isEmpty_y1axqb_k$()) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = this.firstVisibleItemIndices_1.length === 0;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      // Inline function 'kotlin.collections.isEmpty' call
      tmp = this.firstVisibleItemScrollOffsets_1.length === 0;
    }
    if (tmp) {
      return false;
    }
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.visibleItemsInfo_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.get_c1px32_k$(index);
        // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridMeasureResult.tryToApplyScrollWithoutRemeasure.<anonymous>' call
        if (item.get_nonScrollableItem_5xqaji_k$() ? true : !(item.get_mainAxisOffset_sz7p3e_k$() <= 0 === (item.get_mainAxisOffset_sz7p3e_k$() + delta | 0) <= 0)) {
          return false;
        }
        if (item.get_mainAxisOffset_sz7p3e_k$() <= this.viewportStartOffset_1) {
          var tmp_1;
          if (delta < 0) {
            tmp_1 = ((item.get_mainAxisOffset_sz7p3e_k$() + item.get_sizeWithSpacings_q8axgg_k$() | 0) - this.viewportStartOffset_1 | 0) > (-delta | 0);
          } else {
            tmp_1 = (this.viewportStartOffset_1 - item.get_mainAxisOffset_sz7p3e_k$() | 0) > delta;
          }
          var canApply = tmp_1;
          if (!canApply)
            return false;
        }
        if ((item.get_mainAxisOffset_sz7p3e_k$() + item.get_sizeWithSpacings_q8axgg_k$() | 0) >= this.viewportEndOffset_1) {
          var tmp_2;
          if (delta < 0) {
            tmp_2 = ((item.get_mainAxisOffset_sz7p3e_k$() + item.get_sizeWithSpacings_q8axgg_k$() | 0) - this.viewportEndOffset_1 | 0) > (-delta | 0);
          } else {
            tmp_2 = (this.viewportEndOffset_1 - item.get_mainAxisOffset_sz7p3e_k$() | 0) > delta;
          }
          var canApply_0 = tmp_2;
          if (!canApply_0)
            return false;
        }
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.repeat' call
    var times = this.firstVisibleItemScrollOffsets_1.length;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < times)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridMeasureResult.tryToApplyScrollWithoutRemeasure.<anonymous>' call
        var tmp0_array = this.firstVisibleItemScrollOffsets_1;
        tmp0_array[index_0] = tmp0_array[index_0] - delta | 0;
      }
       while (inductionVariable_0 < times);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = this.visibleItemsInfo_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_1 = 0;
    var last_0 = this_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_1 <= last_0)
      do {
        var index_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var item_0 = this_1.get_c1px32_k$(index_1);
        // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridMeasureResult.tryToApplyScrollWithoutRemeasure.<anonymous>' call
        item_0.applyScrollDelta_knnih7_k$(delta);
      }
       while (inductionVariable_1 <= last_0);
    this.consumedScroll_1 = delta;
    if (!this.canScrollForward_1 ? delta > 0 : false) {
      this.canScrollForward_1 = true;
    }
    return true;
  };
  function LazyStaggeredGridLayoutInfo() {
  }
  function LazyStaggeredGridItemInfo() {
  }
  function findVisibleItem(_this__u8e3s4, itemIndex) {
    _init_properties_LazyStaggeredGridMeasureResult_kt__5q024j();
    if (_this__u8e3s4.get_visibleItemsInfo_uew4qj_k$().isEmpty_y1axqb_k$()) {
      return null;
    }
    var containsLower = first(_this__u8e3s4.get_visibleItemsInfo_uew4qj_k$()).get_index_it478p_k$();
    if (!(itemIndex <= last(_this__u8e3s4.get_visibleItemsInfo_uew4qj_k$()).get_index_it478p_k$() ? containsLower <= itemIndex : false)) {
      return null;
    }
    var tmp = _this__u8e3s4.get_visibleItemsInfo_uew4qj_k$();
    var index = binarySearch(tmp, VOID, VOID, findVisibleItem$lambda(itemIndex));
    return getOrNull(_this__u8e3s4.get_visibleItemsInfo_uew4qj_k$(), index);
  }
  function EmptyLazyStaggeredGridLayoutInfo$1() {
    this.width_1 = 0;
    this.height_1 = 0;
    this.alignmentLines_1 = emptyMap();
  }
  protoOf(EmptyLazyStaggeredGridLayoutInfo$1).get_width_j0q4yl_k$ = function () {
    return this.width_1;
  };
  protoOf(EmptyLazyStaggeredGridLayoutInfo$1).get_height_e7t92o_k$ = function () {
    return this.height_1;
  };
  protoOf(EmptyLazyStaggeredGridLayoutInfo$1).get_alignmentLines_nx3i05_k$ = function () {
    return this.alignmentLines_1;
  };
  protoOf(EmptyLazyStaggeredGridLayoutInfo$1).placeChildren_kds4oa_k$ = function () {
  };
  function findVisibleItem$lambda($itemIndex) {
    return function (it) {
      return it.get_index_it478p_k$() - $itemIndex | 0;
    };
  }
  var properties_initialized_LazyStaggeredGridMeasureResult_kt_qxq2v5;
  function _init_properties_LazyStaggeredGridMeasureResult_kt__5q024j() {
    if (!properties_initialized_LazyStaggeredGridMeasureResult_kt_qxq2v5) {
      properties_initialized_LazyStaggeredGridMeasureResult_kt_qxq2v5 = true;
      var tmp0_firstVisibleItemIndices = new Int32Array(0);
      var tmp1_firstVisibleItemScrollOffsets = new Int32Array(0);
      var tmp2_measureResult = new EmptyLazyStaggeredGridLayoutInfo$1();
      var tmp3_visibleItemsInfo = emptyList();
      var tmp4_viewportSize = Companion_getInstance_13().get_Zero_9we0a6_k$();
      EmptyLazyStaggeredGridLayoutInfo = new LazyStaggeredGridMeasureResult(tmp0_firstVisibleItemIndices, tmp1_firstVisibleItemScrollOffsets, 0.0, tmp2_measureResult, false, false, false, 0, tmp3_visibleItemsInfo, tmp4_viewportSize, 0, 0, 0, 0, 0);
    }
  }
  function _get_fillIndices__c59f1p($this) {
    return $this.fillIndices_1;
  }
  function _set_indices__8cam9u($this, _set____db54di) {
    var this_0 = $this.indices$delegate_1;
    indices$factory();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _set_index__fyfqnn($this, _set____db54di) {
    var this_0 = $this.index$delegate_1;
    index$factory();
    this_0.set_intValue_s3g6dz_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _set_scrollOffsets__xebeuq($this, _set____db54di) {
    var this_0 = $this.scrollOffsets$delegate_1;
    scrollOffsets$factory();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _set_scrollOffset__x5lxuf($this, _set____db54di) {
    var this_0 = $this.scrollOffset$delegate_1;
    scrollOffset$factory();
    this_0.set_intValue_s3g6dz_k$(_set____db54di);
    return Unit_getInstance();
  }
  function calculateFirstVisibleIndex($this, indices) {
    var minIndex = IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$();
    // Inline function 'kotlin.collections.forEach' call
    var inductionVariable = 0;
    var last = indices.length;
    while (inductionVariable < last) {
      var element = indices[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridScrollPosition.calculateFirstVisibleIndex.<anonymous>' call
      if (element <= 0)
        return 0;
      if (minIndex > element)
        minIndex = element;
    }
    return minIndex === IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$() ? 0 : minIndex;
  }
  function calculateFirstVisibleScrollOffset($this, indices, offsets) {
    var minOffset = IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$();
    var smallestIndex = calculateFirstVisibleIndex($this, indices);
    var inductionVariable = 0;
    var last = offsets.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var lane = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (indices[lane] === smallestIndex) {
          // Inline function 'kotlin.comparisons.minOf' call
          var a = minOffset;
          var b = offsets[lane];
          minOffset = Math.min(a, b);
        }
      }
       while (inductionVariable <= last);
    return minOffset === IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$() ? 0 : minOffset;
  }
  function _set_hadFirstNotEmptyLayout__fcqi9a($this, _set____db54di) {
    $this.hadFirstNotEmptyLayout_1 = _set____db54di;
  }
  function _get_hadFirstNotEmptyLayout__xfa3a6($this) {
    return $this.hadFirstNotEmptyLayout_1;
  }
  function _set_lastKnownFirstItemKey__d3k7wc($this, _set____db54di) {
    $this.lastKnownFirstItemKey_1 = _set____db54di;
  }
  function _get_lastKnownFirstItemKey__6xxvgo($this) {
    return $this.lastKnownFirstItemKey_1;
  }
  function update($this, indices, offsets) {
    _set_indices__8cam9u($this, indices);
    _set_index__fyfqnn($this, calculateFirstVisibleIndex($this, indices));
    _set_scrollOffsets__xebeuq($this, offsets);
    _set_scrollOffset__x5lxuf($this, calculateFirstVisibleScrollOffset($this, indices, offsets));
  }
  function LazyStaggeredGridScrollPosition(initialIndices, initialOffsets, fillIndices) {
    this.fillIndices_1 = fillIndices;
    this.indices$delegate_1 = mutableStateOf(initialIndices, this);
    this.index$delegate_1 = mutableIntStateOf(calculateFirstVisibleIndex(this, initialIndices));
    this.scrollOffsets$delegate_1 = mutableStateOf(initialOffsets, this);
    this.scrollOffset$delegate_1 = mutableIntStateOf(calculateFirstVisibleScrollOffset(this, initialIndices, initialOffsets));
    this.hadFirstNotEmptyLayout_1 = false;
    this.lastKnownFirstItemKey_1 = null;
    var tmp = this;
    var tmp0_elvis_lhs = minOrNull(initialIndices);
    tmp.nearestRangeState_1 = new LazyLayoutNearestRangeState(tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs, 90, 200);
  }
  protoOf(LazyStaggeredGridScrollPosition).get_indices_xelk8u_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.indices$delegate_1;
    indices$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(LazyStaggeredGridScrollPosition).get_index_it478p_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.index$delegate_1;
    index$factory_0();
    return this_0.get_intValue_mlvnn9_k$();
  };
  protoOf(LazyStaggeredGridScrollPosition).get_scrollOffsets_j8mcty_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.scrollOffsets$delegate_1;
    scrollOffsets$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(LazyStaggeredGridScrollPosition).get_scrollOffset_9saj93_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.scrollOffset$delegate_1;
    scrollOffset$factory_0();
    return this_0.get_intValue_mlvnn9_k$();
  };
  protoOf(LazyStaggeredGridScrollPosition).get_nearestRangeState_4d4g9j_k$ = function () {
    return this.nearestRangeState_1;
  };
  protoOf(LazyStaggeredGridScrollPosition).updateFromMeasureResult_zd5yj8_k$ = function (measureResult) {
    var firstVisibleIndex = calculateFirstVisibleIndex(this, measureResult.get_firstVisibleItemIndices_42eeaf_k$());
    var tmp = this;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastFirstOrNull' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var this_0 = measureResult.get_visibleItemsInfo_uew4qj_k$();
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.get_c1px32_k$(index);
          // Inline function 'androidx.compose.ui.util.fastFirstOrNull.<anonymous>' call
          // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridScrollPosition.updateFromMeasureResult.<anonymous>' call
          if (item.get_index_it478p_k$() === firstVisibleIndex) {
            tmp$ret$1 = item;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    tmp.lastKnownFirstItemKey_1 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_key_18j28a_k$();
    this.nearestRangeState_1.update_sx46zl_k$(firstVisibleIndex);
    if (this.hadFirstNotEmptyLayout_1 ? true : measureResult.get_totalItemsCount_aiolgq_k$() > 0) {
      this.hadFirstNotEmptyLayout_1 = true;
      $l$block_1: {
        // Inline function 'androidx.compose.runtime.snapshots.Companion.withoutReadObservation' call
        // Inline function 'kotlin.contracts.contract' call
        var snapshot = Companion_getInstance_18().createNonObservableSnapshot_p8njg8_k$();
        try {
          $l$block_0: {
            // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
            var previous = snapshot.makeCurrent_v2db9x_k$();
            try {
              update(this, measureResult.get_firstVisibleItemIndices_42eeaf_k$(), measureResult.get_firstVisibleItemScrollOffsets_129nzp_k$());
              break $l$block_0;
            }finally {
              snapshot.restoreCurrent_k22xtq_k$(previous);
            }
          }
          break $l$block_1;
        }finally {
          snapshot.dispose_3nnxhr_k$();
        }
      }
    }
  };
  protoOf(LazyStaggeredGridScrollPosition).updateScrollOffset_xh4nvy_k$ = function (scrollOffsets) {
    _set_scrollOffsets__xebeuq(this, scrollOffsets);
    _set_scrollOffset__x5lxuf(this, calculateFirstVisibleScrollOffset(this, this.get_indices_xelk8u_k$(), scrollOffsets));
  };
  protoOf(LazyStaggeredGridScrollPosition).requestPosition_9pv854_k$ = function (index, scrollOffset) {
    var newIndices = this.fillIndices_1(index, this.get_indices_xelk8u_k$().length);
    var tmp = 0;
    var tmp_0 = newIndices.length;
    var tmp_1 = new Int32Array(tmp_0);
    while (tmp < tmp_0) {
      tmp_1[tmp] = scrollOffset;
      tmp = tmp + 1 | 0;
    }
    var newOffsets = tmp_1;
    update(this, newIndices, newOffsets);
    this.nearestRangeState_1.update_sx46zl_k$(index);
    this.lastKnownFirstItemKey_1 = null;
  };
  protoOf(LazyStaggeredGridScrollPosition).updateScrollPositionIfTheFirstItemWasMoved_mkqtn0_k$ = function (itemProvider, indices) {
    var tmp = this.lastKnownFirstItemKey_1;
    var tmp0_elvis_lhs = getOrNull_0(indices, 0);
    var newIndex = findIndexByKey(itemProvider, tmp, tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs);
    var tmp_0;
    if (!contains(indices, newIndex)) {
      this.nearestRangeState_1.update_sx46zl_k$(newIndex);
      var newIndices = this.fillIndices_1(newIndex, indices.length);
      _set_indices__8cam9u(this, newIndices);
      _set_index__fyfqnn(this, calculateFirstVisibleIndex(this, newIndices));
      tmp_0 = newIndices;
    } else {
      tmp_0 = indices;
    }
    return tmp_0;
  };
  protoOf(LazyStaggeredGridScrollPosition).equivalent_lepv62_k$ = function (a, b) {
    return contentEquals(a, b);
  };
  protoOf(LazyStaggeredGridScrollPosition).equivalent_gz6us_k$ = function (a, b) {
    var tmp = (!(a == null) ? isIntArray(a) : false) ? a : THROW_CCE();
    return this.equivalent_lepv62_k$(tmp, (!(b == null) ? isIntArray(b) : false) ? b : THROW_CCE());
  };
  function get_NearestItemsSlidingWindowSize() {
    return NearestItemsSlidingWindowSize;
  }
  var NearestItemsSlidingWindowSize;
  function get_NearestItemsExtraItemCount() {
    return NearestItemsExtraItemCount;
  }
  var NearestItemsExtraItemCount;
  function indices$factory() {
    return getPropertyCallableRef('indices', 1, KMutableProperty1, function (receiver) {
      return receiver.get_indices_xelk8u_k$();
    }, function (receiver, value) {
      return _set_indices__8cam9u(receiver, value);
    });
  }
  function indices$factory_0() {
    return getPropertyCallableRef('indices', 1, KMutableProperty1, function (receiver) {
      return receiver.get_indices_xelk8u_k$();
    }, function (receiver, value) {
      return _set_indices__8cam9u(receiver, value);
    });
  }
  function index$factory() {
    return getPropertyCallableRef('index', 1, KMutableProperty1, function (receiver) {
      return receiver.get_index_it478p_k$();
    }, function (receiver, value) {
      return _set_index__fyfqnn(receiver, value);
    });
  }
  function index$factory_0() {
    return getPropertyCallableRef('index', 1, KMutableProperty1, function (receiver) {
      return receiver.get_index_it478p_k$();
    }, function (receiver, value) {
      return _set_index__fyfqnn(receiver, value);
    });
  }
  function scrollOffsets$factory() {
    return getPropertyCallableRef('scrollOffsets', 1, KMutableProperty1, function (receiver) {
      return receiver.get_scrollOffsets_j8mcty_k$();
    }, function (receiver, value) {
      return _set_scrollOffsets__xebeuq(receiver, value);
    });
  }
  function scrollOffsets$factory_0() {
    return getPropertyCallableRef('scrollOffsets', 1, KMutableProperty1, function (receiver) {
      return receiver.get_scrollOffsets_j8mcty_k$();
    }, function (receiver, value) {
      return _set_scrollOffsets__xebeuq(receiver, value);
    });
  }
  function scrollOffset$factory() {
    return getPropertyCallableRef('scrollOffset', 1, KMutableProperty1, function (receiver) {
      return receiver.get_scrollOffset_9saj93_k$();
    }, function (receiver, value) {
      return _set_scrollOffset__x5lxuf(receiver, value);
    });
  }
  function scrollOffset$factory_0() {
    return getPropertyCallableRef('scrollOffset', 1, KMutableProperty1, function (receiver) {
      return receiver.get_scrollOffset_9saj93_k$();
    }, function (receiver, value) {
      return _set_scrollOffset__x5lxuf(receiver, value);
    });
  }
  function LazyStaggeredGridSpanProvider(intervals) {
    this.intervals_1 = intervals;
  }
  protoOf(LazyStaggeredGridSpanProvider).get_intervals_gu2011_k$ = function () {
    return this.intervals_1;
  };
  protoOf(LazyStaggeredGridSpanProvider).isFullSpan_ebju17_k$ = function (itemIndex) {
    if (!(0 <= itemIndex ? itemIndex < this.intervals_1.get_size_woubt6_k$() : false))
      return false;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var $this$run = this.intervals_1.get_c1px32_k$(itemIndex);
    var span = $this$run.get_value_j01efc_k$().get_span_wouger_k$();
    var localIndex = itemIndex - $this$run.get_startIndex_oi1lp5_k$() | 0;
    return !(span == null) ? span(localIndex) === Companion_getInstance_37().FullLine_1 : false;
  };
  function Companion_6() {
    Companion_instance_6 = this;
    this.FullLine_1 = new StaggeredGridItemSpan(0);
    this.SingleLane_1 = new StaggeredGridItemSpan(1);
  }
  protoOf(Companion_6).get_FullLine_8q4ir8_k$ = function () {
    return this.FullLine_1;
  };
  protoOf(Companion_6).get_SingleLane_rwet4t_k$ = function () {
    return this.SingleLane_1;
  };
  var Companion_instance_6;
  function Companion_getInstance_37() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function StaggeredGridItemSpan(value) {
    Companion_getInstance_37();
    this.value_1 = value;
  }
  protoOf(StaggeredGridItemSpan).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  function LazyStaggeredGridState$Companion$Saver$lambda($this$listSaver, state) {
    return listOf([state.scrollPosition_1.get_indices_xelk8u_k$(), state.scrollPosition_1.get_scrollOffsets_j8mcty_k$()]);
  }
  function LazyStaggeredGridState$Companion$Saver$lambda_0(it) {
    return new LazyStaggeredGridState(it.get_c1px32_k$(0), it.get_c1px32_k$(1));
  }
  function LazyStaggeredGridState_init_$Init$(initialFirstVisibleItemIndex, initialFirstVisibleItemOffset, $this) {
    initialFirstVisibleItemIndex = initialFirstVisibleItemIndex === VOID ? 0 : initialFirstVisibleItemIndex;
    initialFirstVisibleItemOffset = initialFirstVisibleItemOffset === VOID ? 0 : initialFirstVisibleItemOffset;
    // Inline function 'kotlin.intArrayOf' call
    var tmp = new Int32Array([initialFirstVisibleItemIndex]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp$ret$1 = new Int32Array([initialFirstVisibleItemOffset]);
    LazyStaggeredGridState.call($this, tmp, tmp$ret$1);
    return $this;
  }
  function LazyStaggeredGridState_init_$Create$(initialFirstVisibleItemIndex, initialFirstVisibleItemOffset) {
    return LazyStaggeredGridState_init_$Init$(initialFirstVisibleItemIndex, initialFirstVisibleItemOffset, objectCreate(protoOf(LazyStaggeredGridState)));
  }
  function _get_layoutInfoState__cv7ohk($this) {
    return $this.layoutInfoState_1;
  }
  function _set_canScrollForward__ffth81($this, _set____db54di) {
    var this_0 = $this.canScrollForward$delegate_1;
    canScrollForward$factory();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _set_canScrollBackward__6c7ll1($this, _set____db54di) {
    var this_0 = $this.canScrollBackward$delegate_1;
    canScrollBackward$factory();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get_animateScrollScope__kjbxph($this) {
    return $this.animateScrollScope_1;
  }
  function _set_remeasurement__4pn4n8($this, _set____db54di) {
    $this.remeasurement_1 = _set____db54di;
  }
  function _get_scrollableState__jb0ylj($this) {
    return $this.scrollableState_1;
  }
  function _set_scrollToBeConsumed__3hdeos($this, _set____db54di) {
    $this.scrollToBeConsumed_1 = _set____db54di;
  }
  function _set_prefetchBaseIndex__xjpjuj($this, _set____db54di) {
    $this.prefetchBaseIndex_1 = _set____db54di;
  }
  function _get_prefetchBaseIndex__btwnk7($this) {
    return $this.prefetchBaseIndex_1;
  }
  function _get_currentItemPrefetchHandles__wmvbwd($this) {
    return $this.currentItemPrefetchHandles_1;
  }
  function onScroll($this, distance) {
    if ((distance < 0.0 ? !$this.get_canScrollForward_dmb0fj_k$() : false) ? true : distance > 0.0 ? !$this.get_canScrollBackward_v2t7h3_k$() : false) {
      return 0.0;
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.math.abs' call
    var x = $this.scrollToBeConsumed_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!(Math.abs(x) <= 0.5)) {
      // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridState.onScroll.<anonymous>' call
      var message = 'entered drag with non-zero pending scroll: ' + $this.scrollToBeConsumed_1;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    $this.scrollToBeConsumed_1 = $this.scrollToBeConsumed_1 + distance;
    // Inline function 'kotlin.math.abs' call
    var x_0 = $this.scrollToBeConsumed_1;
    if (Math.abs(x_0) > 0.5) {
      var layoutInfo = $this.layoutInfoState_1.get_value_j01efc_k$();
      var preScrollToBeConsumed = $this.scrollToBeConsumed_1;
      // Inline function 'kotlin.math.roundToInt' call
      var this_0 = $this.scrollToBeConsumed_1;
      var intDelta = roundToInt(this_0);
      if (layoutInfo.tryToApplyScrollWithoutRemeasure_sdxfxs_k$(intDelta)) {
        $this.applyMeasureResult_an972k_k$(layoutInfo, true);
        ObservableScopeInvalidator__invalidateScope_impl_b202xc($this.placementScopeInvalidator_1);
        notifyPrefetch($this, preScrollToBeConsumed - $this.scrollToBeConsumed_1, layoutInfo);
      } else {
        var tmp1_safe_receiver = $this.remeasurement_1;
        if (tmp1_safe_receiver == null)
          null;
        else {
          tmp1_safe_receiver.forceRemeasure_y3m3lc_k$();
        }
        notifyPrefetch$default($this, preScrollToBeConsumed - $this.scrollToBeConsumed_1);
      }
    }
    // Inline function 'kotlin.math.abs' call
    var x_1 = $this.scrollToBeConsumed_1;
    if (Math.abs(x_1) <= 0.5) {
      return distance;
    } else {
      var scrollConsumed = distance - $this.scrollToBeConsumed_1;
      $this.scrollToBeConsumed_1 = 0.0;
      return scrollConsumed;
    }
  }
  function _get_numOfItemsToTeleport__wqb79a($this) {
    return imul(100, $this.get_laneCount_vx64ey_k$());
  }
  function notifyPrefetch($this, delta, info) {
    var tmp;
    if ($this.prefetchingEnabled_1) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp = !info.get_visibleItemsInfo_uew4qj_k$().isEmpty_y1axqb_k$();
    } else {
      tmp = false;
    }
    if (tmp) {
      var scrollingForward = delta < 0.0;
      var tmp_0;
      if (scrollingForward) {
        tmp_0 = last(info.get_visibleItemsInfo_uew4qj_k$()).get_index_it478p_k$();
      } else {
        tmp_0 = first(info.get_visibleItemsInfo_uew4qj_k$()).get_index_it478p_k$();
      }
      var prefetchIndex = tmp_0;
      if (prefetchIndex === $this.prefetchBaseIndex_1) {
        return Unit_getInstance();
      }
      $this.prefetchBaseIndex_1 = prefetchIndex;
      // Inline function 'kotlin.collections.mutableSetOf' call
      var prefetchHandlesUsed = LinkedHashSet_init_$Create$();
      var targetIndex = prefetchIndex;
      var inductionVariable = 0;
      var last_0 = $this.get_laneCount_vx64ey_k$();
      if (inductionVariable < last_0)
        $l$loop_0: do {
          var lane = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var previousIndex = targetIndex;
          var tmp_1;
          if (scrollingForward) {
            tmp_1 = $this.laneInfo_1.findNextItemIndex_u9eudv_k$(previousIndex, lane);
          } else {
            tmp_1 = $this.laneInfo_1.findPreviousItemIndex_56p7sh_k$(previousIndex, lane);
          }
          targetIndex = tmp_1;
          if (!(0 <= targetIndex ? targetIndex < info.get_totalItemsCount_aiolgq_k$() : false) ? true : prefetchHandlesUsed.contains_aljjnj_k$(targetIndex)) {
            break $l$loop_0;
          }
          // Inline function 'kotlin.collections.plusAssign' call
          var element = targetIndex;
          prefetchHandlesUsed.add_utx5q5_k$(element);
          // Inline function 'kotlin.collections.contains' call
          var this_0 = $this.currentItemPrefetchHandles_1;
          // Inline function 'kotlin.collections.containsKey' call
          var key = targetIndex;
          if ((isInterface(this_0, Map) ? this_0 : THROW_CCE()).containsKey_aw81wo_k$(key)) {
            continue $l$loop_0;
          }
          var tmp1_safe_receiver = $this.spanProvider_1;
          var isFullSpan = (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.isFullSpan_ebju17_k$(targetIndex)) === true;
          var slot = isFullSpan ? 0 : lane;
          var span = isFullSpan ? $this.get_laneCount_vx64ey_k$() : 1;
          var slots = $this.slots_1;
          var tmp_2;
          if (slots == null) {
            tmp_2 = 0;
          } else if (span === 1) {
            tmp_2 = slots.get_sizes_iyjejt_k$()[slot];
          } else {
            var start = slots.get_positions_ya7scf_k$()[slot];
            var endSlot = (slot + span | 0) - 1 | 0;
            var end = slots.get_positions_ya7scf_k$()[endSlot] + slots.get_sizes_iyjejt_k$()[endSlot] | 0;
            tmp_2 = end - start | 0;
          }
          var crossAxisSize = tmp_2;
          var tmp_3;
          if ($this.isVertical_1) {
            tmp_3 = Companion_getInstance_12().fixedWidth_sctdsx_k$(crossAxisSize);
          } else {
            tmp_3 = Companion_getInstance_12().fixedHeight_x1j7yw_k$(crossAxisSize);
          }
          var constraints = tmp_3;
          // Inline function 'kotlin.collections.set' call
          var this_1 = $this.currentItemPrefetchHandles_1;
          var key_0 = targetIndex;
          var value = $this.prefetchState_1.schedulePrefetch_2w0rij_k$(targetIndex, constraints);
          this_1.put_4fpzoq_k$(key_0, value);
        }
         while (inductionVariable < last_0);
      clearLeftoverPrefetchHandles($this, prefetchHandlesUsed);
    }
  }
  function notifyPrefetch$default($this, delta, info, $super) {
    info = info === VOID ? $this.layoutInfoState_1.get_value_j01efc_k$() : info;
    return notifyPrefetch($this, delta, info);
  }
  function clearLeftoverPrefetchHandles($this, prefetchHandlesUsed) {
    // Inline function 'kotlin.collections.iterator' call
    var iterator = $this.currentItemPrefetchHandles_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (iterator.hasNext_bitz1p_k$()) {
      var entry = iterator.next_20eer_k$();
      if (!prefetchHandlesUsed.contains_aljjnj_k$(entry.get_key_18j28a_k$())) {
        entry.get_value_j01efc_k$().cancel_2l89ey_k$();
        iterator.remove_ldkf9o_k$();
      }
    }
  }
  function cancelPrefetchIfVisibleItemsChanged($this, info) {
    var items = info.get_visibleItemsInfo_uew4qj_k$();
    var tmp;
    if (!($this.prefetchBaseIndex_1 === -1)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp = !items.isEmpty_y1axqb_k$();
    } else {
      tmp = false;
    }
    if (tmp) {
      var containsLower = first(items).get_index_it478p_k$();
      var containsUpper = last(items).get_index_it478p_k$();
      var containsArg = $this.prefetchBaseIndex_1;
      if (!(containsLower <= containsArg ? containsArg <= containsUpper : false)) {
        $this.prefetchBaseIndex_1 = -1;
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = $this.currentItemPrefetchHandles_1.get_values_ksazhn_k$().iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridState.cancelPrefetchIfVisibleItemsChanged.<anonymous>' call
          element.cancel_2l89ey_k$();
        }
        $this.currentItemPrefetchHandles_1.clear_j9egeb_k$();
      }
    }
  }
  function fillNearestIndices($this, itemIndex, laneCount) {
    var indices = new Int32Array(laneCount);
    var tmp0_safe_receiver = $this.spanProvider_1;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.isFullSpan_ebju17_k$(itemIndex)) === true) {
      fill(indices, itemIndex);
      return indices;
    }
    $this.laneInfo_1.ensureValidIndex_ozquj0_k$(itemIndex + laneCount | 0);
    var previousLane = $this.laneInfo_1.getLane_n8fbre_k$(itemIndex);
    var tmp;
    if (previousLane === Companion_getInstance_36().get_Unset_ii4mhs_k$() ? true : previousLane === Companion_getInstance_36().get_FullSpan_8pzwym_k$()) {
      tmp = 0;
    } else {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(previousLane >= 0)) {
        // Inline function 'androidx.compose.foundation.lazy.staggeredgrid.LazyStaggeredGridState.fillNearestIndices.<anonymous>' call
        var message = 'Expected positive lane number, got ' + previousLane + ' instead.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.comparisons.minOf' call
      tmp = Math.min(previousLane, laneCount);
    }
    var targetLaneIndex = tmp;
    var currentItemIndex = itemIndex;
    var inductionVariable = targetLaneIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var lane = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        indices[lane] = $this.laneInfo_1.findPreviousItemIndex_56p7sh_k$(currentItemIndex, lane);
        if (indices[lane] === Companion_getInstance_36().get_Unset_ii4mhs_k$()) {
          fill(indices, -1, VOID, lane);
          break $l$loop;
        }
        currentItemIndex = indices[lane];
      }
       while (0 <= inductionVariable);
    indices[targetLaneIndex] = itemIndex;
    currentItemIndex = itemIndex;
    var inductionVariable_0 = targetLaneIndex + 1 | 0;
    if (inductionVariable_0 < laneCount)
      do {
        var lane_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        indices[lane_0] = $this.laneInfo_1.findNextItemIndex_u9eudv_k$(currentItemIndex, lane_0);
        currentItemIndex = indices[lane_0];
      }
       while (inductionVariable_0 < laneCount);
    return indices;
  }
  function Companion_7() {
    Companion_instance_7 = this;
    var tmp = this;
    var tmp_0 = LazyStaggeredGridState$Companion$Saver$lambda;
    tmp.Saver_1 = listSaver(tmp_0, LazyStaggeredGridState$Companion$Saver$lambda_0);
  }
  protoOf(Companion_7).get_Saver_igssp8_k$ = function () {
    return this.Saver_1;
  };
  var Companion_instance_7;
  function Companion_getInstance_38() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function LazyStaggeredGridState$fillNearestIndices$ref($boundThis) {
    var l = function (p0, p1) {
      return fillNearestIndices($boundThis, p0, p1);
    };
    l.callableName = 'fillNearestIndices';
    return l;
  }
  function LazyStaggeredGridState$remeasurementModifier$1(this$0) {
    this.this$0__1 = this$0;
  }
  protoOf(LazyStaggeredGridState$remeasurementModifier$1).onRemeasurementAvailable_w9hylz_k$ = function (remeasurement) {
    this.this$0__1.remeasurement_1 = remeasurement;
  };
  function LazyStaggeredGridState$scrollableState$lambda(this$0) {
    return function (it) {
      return -onScroll(this$0, -it);
    };
  }
  function LazyStaggeredGridState$scrollToItem$slambda(this$0, $index, $scrollOffset, resultContinuation) {
    this.this$0__1 = this$0;
    this.$index_1 = $index;
    this.$scrollOffset_1 = $scrollOffset;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LazyStaggeredGridState$scrollToItem$slambda).invoke_yd5n9m_k$ = function ($this$scroll, $completion) {
    var tmp = this.create_a2p816_k$($this$scroll, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(LazyStaggeredGridState$scrollToItem$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_yd5n9m_k$((!(p1 == null) ? isInterface(p1, ScrollScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(LazyStaggeredGridState$scrollToItem$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          this.this$0__1.snapToItemInternal_g3csn0_k$(this.$this$scroll_1, this.$index_1, this.$scrollOffset_1);
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(LazyStaggeredGridState$scrollToItem$slambda).create_a2p816_k$ = function ($this$scroll, completion) {
    var i = new LazyStaggeredGridState$scrollToItem$slambda(this.this$0__1, this.$index_1, this.$scrollOffset_1, completion);
    i.$this$scroll_1 = $this$scroll;
    return i;
  };
  protoOf(LazyStaggeredGridState$scrollToItem$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_a2p816_k$((!(value == null) ? isInterface(value, ScrollScope) : false) ? value : THROW_CCE(), completion);
  };
  function LazyStaggeredGridState$scrollToItem$slambda_0(this$0, $index, $scrollOffset, resultContinuation) {
    var i = new LazyStaggeredGridState$scrollToItem$slambda(this$0, $index, $scrollOffset, resultContinuation);
    var l = function ($this$scroll, $completion) {
      return i.invoke_yd5n9m_k$($this$scroll, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $scrollCOROUTINE$6(_this__u8e3s4, scrollPriority, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.scrollPriority_1 = scrollPriority;
    this.block_1 = block;
  }
  protoOf($scrollCOROUTINE$6).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.awaitLayoutModifier_1.waitForFirstLayout_pyz09d_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.set_state_rjd8d0_k$(2);
            suspendResult = this._this__u8e3s4__1.scrollableState_1.scroll_6vso98_k$(this.scrollPriority_1, this.block_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function LazyStaggeredGridState(initialFirstVisibleItems, initialFirstVisibleOffsets) {
    Companion_getInstance_38();
    var tmp = this;
    tmp.scrollPosition_1 = new LazyStaggeredGridScrollPosition(initialFirstVisibleItems, initialFirstVisibleOffsets, LazyStaggeredGridState$fillNearestIndices$ref(this));
    this.layoutInfoState_1 = mutableStateOf(get_EmptyLazyStaggeredGridLayoutInfo(), neverEqualPolicy());
    this.laneInfo_1 = new LazyStaggeredGridLaneInfo();
    this.canScrollForward$delegate_1 = mutableStateOf(false);
    this.canScrollBackward$delegate_1 = mutableStateOf(false);
    this.animateScrollScope_1 = new LazyStaggeredGridAnimateScrollScope(this);
    this.remeasurement_1 = null;
    var tmp_0 = this;
    tmp_0.remeasurementModifier_1 = new LazyStaggeredGridState$remeasurementModifier$1(this);
    this.awaitLayoutModifier_1 = new AwaitFirstLayoutModifier();
    this.beyondBoundsInfo_1 = new LazyLayoutBeyondBoundsInfo();
    this.prefetchingEnabled_1 = true;
    this.prefetchState_1 = new LazyLayoutPrefetchState();
    var tmp_1 = this;
    tmp_1.scrollableState_1 = ScrollableState_0(LazyStaggeredGridState$scrollableState$lambda(this));
    this.scrollToBeConsumed_1 = 0.0;
    this.measurePassCount_1 = 0;
    this.isVertical_1 = false;
    this.slots_1 = null;
    this.spanProvider_1 = null;
    this.prefetchBaseIndex_1 = -1;
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_2.currentItemPrefetchHandles_1 = LinkedHashMap_init_$Create$();
    this.density_1 = Density_0(1.0, 1.0);
    this.mutableInteractionSource_1 = funMutableInteractionSource();
    this.pinnedItems_1 = LazyLayoutPinnedItemList_init_$Create$();
    this.placementAnimator_1 = new LazyStaggeredGridItemPlacementAnimator();
    this.nearestRange$delegate_1 = this.scrollPosition_1.get_nearestRangeState_4d4g9j_k$();
    this.placementScopeInvalidator_1 = _ObservableScopeInvalidator___init__impl__ism0sl();
  }
  protoOf(LazyStaggeredGridState).get_firstVisibleItemIndex_pq52y4_k$ = function () {
    return this.scrollPosition_1.get_index_it478p_k$();
  };
  protoOf(LazyStaggeredGridState).get_firstVisibleItemScrollOffset_my3xxa_k$ = function () {
    return this.scrollPosition_1.get_scrollOffset_9saj93_k$();
  };
  protoOf(LazyStaggeredGridState).get_scrollPosition_3b171d_k$ = function () {
    return this.scrollPosition_1;
  };
  protoOf(LazyStaggeredGridState).get_layoutInfo_ej1bpb_k$ = function () {
    return this.layoutInfoState_1.get_value_j01efc_k$();
  };
  protoOf(LazyStaggeredGridState).get_laneInfo_chm2kj_k$ = function () {
    return this.laneInfo_1;
  };
  protoOf(LazyStaggeredGridState).get_canScrollForward_dmb0fj_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.canScrollForward$delegate_1;
    canScrollForward$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(LazyStaggeredGridState).get_canScrollBackward_v2t7h3_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.canScrollBackward$delegate_1;
    canScrollBackward$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(LazyStaggeredGridState).get_remeasurement_dley68_k$ = function () {
    return this.remeasurement_1;
  };
  protoOf(LazyStaggeredGridState).get_remeasurementModifier_3hgdqh_k$ = function () {
    return this.remeasurementModifier_1;
  };
  protoOf(LazyStaggeredGridState).get_awaitLayoutModifier_187c1a_k$ = function () {
    return this.awaitLayoutModifier_1;
  };
  protoOf(LazyStaggeredGridState).get_beyondBoundsInfo_3eepc5_k$ = function () {
    return this.beyondBoundsInfo_1;
  };
  protoOf(LazyStaggeredGridState).set_prefetchingEnabled_t872te_k$ = function (_set____db54di) {
    this.prefetchingEnabled_1 = _set____db54di;
  };
  protoOf(LazyStaggeredGridState).get_prefetchingEnabled_w73glb_k$ = function () {
    return this.prefetchingEnabled_1;
  };
  protoOf(LazyStaggeredGridState).get_prefetchState_uk67nz_k$ = function () {
    return this.prefetchState_1;
  };
  protoOf(LazyStaggeredGridState).get_scrollToBeConsumed_q08rtw_k$ = function () {
    return this.scrollToBeConsumed_1;
  };
  protoOf(LazyStaggeredGridState).set_measurePassCount_chj1ez_k$ = function (_set____db54di) {
    this.measurePassCount_1 = _set____db54di;
  };
  protoOf(LazyStaggeredGridState).get_measurePassCount_34mfd_k$ = function () {
    return this.measurePassCount_1;
  };
  protoOf(LazyStaggeredGridState).set_isVertical_boari0_k$ = function (_set____db54di) {
    this.isVertical_1 = _set____db54di;
  };
  protoOf(LazyStaggeredGridState).get_isVertical_4x9emh_k$ = function () {
    return this.isVertical_1;
  };
  protoOf(LazyStaggeredGridState).set_slots_bd0t31_k$ = function (_set____db54di) {
    this.slots_1 = _set____db54di;
  };
  protoOf(LazyStaggeredGridState).get_slots_iyl3po_k$ = function () {
    return this.slots_1;
  };
  protoOf(LazyStaggeredGridState).set_spanProvider_xvvrrf_k$ = function (_set____db54di) {
    this.spanProvider_1 = _set____db54di;
  };
  protoOf(LazyStaggeredGridState).get_spanProvider_k4leu4_k$ = function () {
    return this.spanProvider_1;
  };
  protoOf(LazyStaggeredGridState).set_density_3p0aj9_k$ = function (_set____db54di) {
    this.density_1 = _set____db54di;
  };
  protoOf(LazyStaggeredGridState).get_density_qy0267_k$ = function () {
    return this.density_1;
  };
  protoOf(LazyStaggeredGridState).get_laneCount_vx64ey_k$ = function () {
    var tmp0_safe_receiver = this.slots_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_sizes_iyjejt_k$();
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.length;
    return tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs;
  };
  protoOf(LazyStaggeredGridState).get_interactionSource_k8ijg_k$ = function () {
    return this.mutableInteractionSource_1;
  };
  protoOf(LazyStaggeredGridState).get_mutableInteractionSource_plb5dc_k$ = function () {
    return this.mutableInteractionSource_1;
  };
  protoOf(LazyStaggeredGridState).get_pinnedItems_ujz3hb_k$ = function () {
    return this.pinnedItems_1;
  };
  protoOf(LazyStaggeredGridState).get_placementAnimator_wpwptp_k$ = function () {
    return this.placementAnimator_1;
  };
  protoOf(LazyStaggeredGridState).get_nearestRange_gyp8lk_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.nearestRange$delegate_1;
    nearestRange$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(LazyStaggeredGridState).get_placementScopeInvalidator_2coofg_k$ = function () {
    return this.placementScopeInvalidator_1;
  };
  protoOf(LazyStaggeredGridState).scroll_6vso98_k$ = function (scrollPriority, block, $completion) {
    var tmp = new $scrollCOROUTINE$6(this, scrollPriority, block, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(LazyStaggeredGridState).get_isScrollInProgress_n6ediq_k$ = function () {
    return this.scrollableState_1.get_isScrollInProgress_n6ediq_k$();
  };
  protoOf(LazyStaggeredGridState).scrollToItem_jr07s4_k$ = function (index, scrollOffset, $completion) {
    return this.scroll$default_wd6w3v_k$(VOID, LazyStaggeredGridState$scrollToItem$slambda_0(this, index, scrollOffset, null), $completion);
  };
  protoOf(LazyStaggeredGridState).scrollToItem$default_tpg3mu_k$ = function (index, scrollOffset, $completion, $super) {
    scrollOffset = scrollOffset === VOID ? 0 : scrollOffset;
    return $super === VOID ? this.scrollToItem_jr07s4_k$(index, scrollOffset, $completion) : $super.scrollToItem_jr07s4_k$.call(this, index, scrollOffset, $completion);
  };
  protoOf(LazyStaggeredGridState).animateScrollToItem_mgemd7_k$ = function (index, scrollOffset, $completion) {
    return animateScrollToItem(this.animateScrollScope_1, index, scrollOffset, _get_numOfItemsToTeleport__wqb79a(this), this.density_1, $completion);
  };
  protoOf(LazyStaggeredGridState).animateScrollToItem$default_vovrdl_k$ = function (index, scrollOffset, $completion, $super) {
    scrollOffset = scrollOffset === VOID ? 0 : scrollOffset;
    return $super === VOID ? this.animateScrollToItem_mgemd7_k$(index, scrollOffset, $completion) : $super.animateScrollToItem_mgemd7_k$.call(this, index, scrollOffset, $completion);
  };
  protoOf(LazyStaggeredGridState).snapToItemInternal_g3csn0_k$ = function (_this__u8e3s4, index, scrollOffset) {
    var visibleItem = findVisibleItem(this.get_layoutInfo_ej1bpb_k$(), index);
    if (!(visibleItem == null)) {
      var currentOffset = this.isVertical_1 ? _IntOffset___get_y__impl__2avpwj(visibleItem.get_offset_bksmdx_k$()) : _IntOffset___get_x__impl__qiqr5o(visibleItem.get_offset_bksmdx_k$());
      var delta = currentOffset + scrollOffset | 0;
      _this__u8e3s4.scrollBy_5wefpo_k$(delta);
    } else {
      this.scrollPosition_1.requestPosition_9pv854_k$(index, scrollOffset);
      var tmp0_safe_receiver = this.remeasurement_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.forceRemeasure_y3m3lc_k$();
      }
    }
  };
  protoOf(LazyStaggeredGridState).updateScrollPositionIfTheFirstItemWasMoved_mkqtn0_k$ = function (itemProvider, firstItemIndex) {
    return this.scrollPosition_1.updateScrollPositionIfTheFirstItemWasMoved_mkqtn0_k$(itemProvider, firstItemIndex);
  };
  protoOf(LazyStaggeredGridState).dispatchRawDelta_tiy71q_k$ = function (delta) {
    return this.scrollableState_1.dispatchRawDelta_tiy71q_k$(delta);
  };
  protoOf(LazyStaggeredGridState).applyMeasureResult_an972k_k$ = function (result, visibleItemsStayedTheSame) {
    this.scrollToBeConsumed_1 = this.scrollToBeConsumed_1 - result.get_consumedScroll_u59rku_k$();
    this.layoutInfoState_1.set_value_v1vabv_k$(result);
    if (visibleItemsStayedTheSame) {
      this.scrollPosition_1.updateScrollOffset_xh4nvy_k$(result.get_firstVisibleItemScrollOffsets_129nzp_k$());
    } else {
      this.scrollPosition_1.updateFromMeasureResult_zd5yj8_k$(result);
      cancelPrefetchIfVisibleItemsChanged(this, result);
    }
    _set_canScrollBackward__6c7ll1(this, result.get_canScrollBackward_v2t7h3_k$());
    _set_canScrollForward__ffth81(this, result.get_canScrollForward_dmb0fj_k$());
    this.measurePassCount_1 = this.measurePassCount_1 + 1 | 0;
  };
  protoOf(LazyStaggeredGridState).applyMeasureResult$default_3yybi6_k$ = function (result, visibleItemsStayedTheSame, $super) {
    visibleItemsStayedTheSame = visibleItemsStayedTheSame === VOID ? false : visibleItemsStayedTheSame;
    var tmp;
    if ($super === VOID) {
      this.applyMeasureResult_an972k_k$(result, visibleItemsStayedTheSame);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.applyMeasureResult_an972k_k$.call(this, result, visibleItemsStayedTheSame);
    }
    return tmp;
  };
  function canScrollForward$factory() {
    return getPropertyCallableRef('canScrollForward', 1, KMutableProperty1, function (receiver) {
      return receiver.get_canScrollForward_dmb0fj_k$();
    }, function (receiver, value) {
      return _set_canScrollForward__ffth81(receiver, value);
    });
  }
  function canScrollForward$factory_0() {
    return getPropertyCallableRef('canScrollForward', 1, KMutableProperty1, function (receiver) {
      return receiver.get_canScrollForward_dmb0fj_k$();
    }, function (receiver, value) {
      return _set_canScrollForward__ffth81(receiver, value);
    });
  }
  function canScrollBackward$factory() {
    return getPropertyCallableRef('canScrollBackward', 1, KMutableProperty1, function (receiver) {
      return receiver.get_canScrollBackward_v2t7h3_k$();
    }, function (receiver, value) {
      return _set_canScrollBackward__6c7ll1(receiver, value);
    });
  }
  function canScrollBackward$factory_0() {
    return getPropertyCallableRef('canScrollBackward', 1, KMutableProperty1, function (receiver) {
      return receiver.get_canScrollBackward_v2t7h3_k$();
    }, function (receiver, value) {
      return _set_canScrollBackward__6c7ll1(receiver, value);
    });
  }
  function nearestRange$factory() {
    return getPropertyCallableRef('nearestRange', 1, KProperty1, function (receiver) {
      return receiver.get_nearestRange_gyp8lk_k$();
    }, null);
  }
  function _get_placeables__otc5bb_2($this) {
    return $this.placeables_1;
  }
  function _get_visualOffset__slruiw_1($this) {
    return $this.visualOffset_1;
  }
  function _get_horizontalAlignment__hyzxw2_0($this) {
    return $this.horizontalAlignment_1;
  }
  function _get_verticalAlignment__1j8kpw_0($this) {
    return $this.verticalAlignment_1;
  }
  function _get_layoutDirection__u3l5q4_1($this) {
    return $this.layoutDirection_1;
  }
  function _get_reverseLayout__b4hu1n_1($this) {
    return $this.reverseLayout_1;
  }
  function _get_isVertical__yidrg5_1($this) {
    return $this.isVertical_1;
  }
  function _get_placeableOffsets__178038_0($this) {
    return $this.placeableOffsets_1;
  }
  function _set_offset__aq0ezo_2($this, _set____db54di) {
    $this.offset_1 = _set____db54di;
  }
  function _set_mainAxisLayoutSize__frif1q_2($this, _set____db54di) {
    $this.mainAxisLayoutSize_1 = _set____db54di;
  }
  function _get_mainAxisLayoutSize__lbqbt2_2($this) {
    return $this.mainAxisLayoutSize_1;
  }
  function getOffset($this, index) {
    return IntOffset_0($this.placeableOffsets_1[imul(index, 2)], $this.placeableOffsets_1[imul(index, 2) + 1 | 0]);
  }
  function _get_mainAxisSize__iyci34_2(_this__u8e3s4, $this) {
    return $this.isVertical_1 ? _this__u8e3s4.get_height_e7t92o_k$() : _this__u8e3s4.get_width_j0q4yl_k$();
  }
  function copy_3(_this__u8e3s4, $this, mainAxisMap) {
    return IntOffset_0($this.isVertical_1 ? _IntOffset___get_x__impl__qiqr5o(_this__u8e3s4) : mainAxisMap(_IntOffset___get_x__impl__qiqr5o(_this__u8e3s4)), $this.isVertical_1 ? mainAxisMap(_IntOffset___get_y__impl__2avpwj(_this__u8e3s4)) : _IntOffset___get_y__impl__2avpwj(_this__u8e3s4));
  }
  function MeasuredPage(index, size, placeables, visualOffset, key, orientation, horizontalAlignment, verticalAlignment, layoutDirection, reverseLayout) {
    this.index_1 = index;
    this.size_1 = size;
    this.placeables_1 = placeables;
    this.visualOffset_1 = visualOffset;
    this.key_1 = key;
    this.horizontalAlignment_1 = horizontalAlignment;
    this.verticalAlignment_1 = verticalAlignment;
    this.layoutDirection_1 = layoutDirection;
    this.reverseLayout_1 = reverseLayout;
    this.isVertical_1 = orientation.equals(Orientation_Vertical_getInstance());
    var maxCrossAxis = 0;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.placeables_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.get_c1px32_k$(index_0);
        // Inline function 'androidx.compose.foundation.pager.MeasuredPage.<anonymous>' call
        // Inline function 'kotlin.comparisons.maxOf' call
        var a = maxCrossAxis;
        var b = !this.isVertical_1 ? item.get_height_e7t92o_k$() : item.get_width_j0q4yl_k$();
        maxCrossAxis = Math.max(a, b);
      }
       while (inductionVariable <= last);
    this.crossAxisSize_1 = maxCrossAxis;
    this.placeableOffsets_1 = new Int32Array(imul(this.placeables_1.get_size_woubt6_k$(), 2));
    this.offset_1 = 0;
    this.mainAxisLayoutSize_1 = -2147483648;
  }
  protoOf(MeasuredPage).get_index_it478p_k$ = function () {
    return this.index_1;
  };
  protoOf(MeasuredPage).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  protoOf(MeasuredPage).get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  protoOf(MeasuredPage).get_crossAxisSize_vn6o3d_k$ = function () {
    return this.crossAxisSize_1;
  };
  protoOf(MeasuredPage).get_offset_hjmqak_k$ = function () {
    return this.offset_1;
  };
  protoOf(MeasuredPage).position_qsn11b_k$ = function (offset, layoutWidth, layoutHeight) {
    this.offset_1 = offset;
    this.mainAxisLayoutSize_1 = this.isVertical_1 ? layoutHeight : layoutWidth;
    var mainAxisOffset = offset;
    // Inline function 'androidx.compose.ui.util.fastForEachIndexed' call
    var this_0 = this.placeables_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.get_c1px32_k$(index);
        // Inline function 'androidx.compose.foundation.pager.MeasuredPage.position.<anonymous>' call
        var indexInArray = imul(index, 2);
        if (this.isVertical_1) {
          var tmp$ret$1;
          $l$block: {
            // Inline function 'kotlin.requireNotNull' call
            var value = this.horizontalAlignment_1;
            // Inline function 'kotlin.contracts.contract' call
            if (value == null) {
              // Inline function 'androidx.compose.foundation.pager.MeasuredPage.position.<anonymous>.<anonymous>' call
              var message = 'null horizontalAlignment';
              throw IllegalArgumentException_init_$Create$(toString(message));
            } else {
              tmp$ret$1 = value;
              break $l$block;
            }
          }
          this.placeableOffsets_1[indexInArray] = tmp$ret$1.align_y7fd6v_k$(item.get_width_j0q4yl_k$(), layoutWidth, this.layoutDirection_1);
          this.placeableOffsets_1[indexInArray + 1 | 0] = mainAxisOffset;
          mainAxisOffset = mainAxisOffset + item.get_height_e7t92o_k$() | 0;
        } else {
          this.placeableOffsets_1[indexInArray] = mainAxisOffset;
          var tmp = indexInArray + 1 | 0;
          var tmp$ret$3;
          $l$block_0: {
            // Inline function 'kotlin.requireNotNull' call
            var value_0 = this.verticalAlignment_1;
            // Inline function 'kotlin.contracts.contract' call
            if (value_0 == null) {
              // Inline function 'androidx.compose.foundation.pager.MeasuredPage.position.<anonymous>.<anonymous>' call
              var message_0 = 'null verticalAlignment';
              throw IllegalArgumentException_init_$Create$(toString(message_0));
            } else {
              tmp$ret$3 = value_0;
              break $l$block_0;
            }
          }
          this.placeableOffsets_1[tmp] = tmp$ret$3.align_k316px_k$(item.get_height_e7t92o_k$(), layoutHeight);
          mainAxisOffset = mainAxisOffset + item.get_width_j0q4yl_k$() | 0;
        }
      }
       while (inductionVariable <= last);
  };
  protoOf(MeasuredPage).place_hh3oo2_k$ = function (scope) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(this.mainAxisLayoutSize_1 === -2147483648)) {
      // Inline function 'androidx.compose.foundation.pager.MeasuredPage.place.<anonymous>.<anonymous>' call
      var message = 'position() should be called first';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var times = this.placeables_1.get_size_woubt6_k$();
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var tmp;
    if (inductionVariable < times) {
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.foundation.pager.MeasuredPage.place.<anonymous>.<anonymous>' call
        var placeable = this.placeables_1.get_c1px32_k$(index);
        var offset = getOffset(this, index);
        if (this.reverseLayout_1) {
          // Inline function 'androidx.compose.foundation.pager.MeasuredPage.copy' call
          var this_0 = offset;
          var tmp_0;
          if (this.isVertical_1) {
            tmp_0 = _IntOffset___get_x__impl__qiqr5o(this_0);
          } else {
            // Inline function 'androidx.compose.foundation.pager.MeasuredPage.place.<anonymous>.<anonymous>.<anonymous>' call
            var mainAxisOffset = _IntOffset___get_x__impl__qiqr5o(this_0);
            tmp_0 = (this.mainAxisLayoutSize_1 - mainAxisOffset | 0) - _get_mainAxisSize__iyci34_2(placeable, this) | 0;
          }
          var tmp_1 = tmp_0;
          var tmp_2;
          if (this.isVertical_1) {
            // Inline function 'androidx.compose.foundation.pager.MeasuredPage.place.<anonymous>.<anonymous>.<anonymous>' call
            var mainAxisOffset_0 = _IntOffset___get_y__impl__2avpwj(this_0);
            tmp_2 = (this.mainAxisLayoutSize_1 - mainAxisOffset_0 | 0) - _get_mainAxisSize__iyci34_2(placeable, this) | 0;
          } else {
            tmp_2 = _IntOffset___get_y__impl__2avpwj(this_0);
          }
          offset = IntOffset_0(tmp_1, tmp_2);
        }
        // Inline function 'androidx.compose.ui.unit.IntOffset.plus' call
        var this_1 = offset;
        var other = this.visualOffset_1;
        offset = IntOffset_0(_IntOffset___get_x__impl__qiqr5o(this_1) + _IntOffset___get_x__impl__qiqr5o(other) | 0, _IntOffset___get_y__impl__2avpwj(this_1) + _IntOffset___get_y__impl__2avpwj(other) | 0);
        if (this.isVertical_1) {
          scope.placeWithLayer$default_yt7uj9_k$(placeable, offset);
        } else {
          scope.placeRelativeWithLayer$default_1hz9dt_k$(placeable, offset);
        }
      }
       while (inductionVariable < times);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(MeasuredPage).applyScrollDelta_knnih7_k$ = function (delta) {
    this.offset_1 = this.offset_1 + delta | 0;
    // Inline function 'kotlin.repeat' call
    var times = this.placeableOffsets_1.length;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.foundation.pager.MeasuredPage.applyScrollDelta.<anonymous>' call
        if ((this.isVertical_1 ? (index % 2 | 0) === 1 : false) ? true : !this.isVertical_1 ? (index % 2 | 0) === 0 : false) {
          var tmp0_array = this.placeableOffsets_1;
          tmp0_array[index] = tmp0_array[index] + delta | 0;
        }
      }
       while (inductionVariable < times);
  };
  function get_Unset_1() {
    return Unset_1;
  }
  var Unset_1;
  function PageInfo() {
  }
  function PagerLayoutInfo() {
  }
  function get_MaxPageOffset() {
    return MaxPageOffset;
  }
  var MaxPageOffset;
  function get_MinPageOffset() {
    return MinPageOffset;
  }
  var MinPageOffset;
  function PagerMeasureResult(visiblePagesInfo, pageSize, pageSpacing, afterContentPadding, orientation, viewportStartOffset, viewportEndOffset, reverseLayout, beyondBoundsPageCount, firstVisiblePage, currentPage, currentPageOffsetFraction, firstVisiblePageScrollOffset, canScrollForward, measureResult, remeasureNeeded) {
    this.visiblePagesInfo_1 = visiblePagesInfo;
    this.pageSize_1 = pageSize;
    this.pageSpacing_1 = pageSpacing;
    this.afterContentPadding_1 = afterContentPadding;
    this.orientation_1 = orientation;
    this.viewportStartOffset_1 = viewportStartOffset;
    this.viewportEndOffset_1 = viewportEndOffset;
    this.reverseLayout_1 = reverseLayout;
    this.beyondBoundsPageCount_1 = beyondBoundsPageCount;
    this.firstVisiblePage_1 = firstVisiblePage;
    this.currentPage_1 = currentPage;
    this.currentPageOffsetFraction_1 = currentPageOffsetFraction;
    this.firstVisiblePageScrollOffset_1 = firstVisiblePageScrollOffset;
    this.canScrollForward_1 = canScrollForward;
    this.remeasureNeeded_1 = remeasureNeeded;
    this.$$delegate_0__1 = measureResult;
  }
  protoOf(PagerMeasureResult).get_visiblePagesInfo_jm4wll_k$ = function () {
    return this.visiblePagesInfo_1;
  };
  protoOf(PagerMeasureResult).get_pageSize_hl979j_k$ = function () {
    return this.pageSize_1;
  };
  protoOf(PagerMeasureResult).get_pageSpacing_wcvkuj_k$ = function () {
    return this.pageSpacing_1;
  };
  protoOf(PagerMeasureResult).get_afterContentPadding_49ooob_k$ = function () {
    return this.afterContentPadding_1;
  };
  protoOf(PagerMeasureResult).get_orientation_9wu93t_k$ = function () {
    return this.orientation_1;
  };
  protoOf(PagerMeasureResult).get_viewportStartOffset_v4b1ay_k$ = function () {
    return this.viewportStartOffset_1;
  };
  protoOf(PagerMeasureResult).get_viewportEndOffset_gapdi7_k$ = function () {
    return this.viewportEndOffset_1;
  };
  protoOf(PagerMeasureResult).get_reverseLayout_nclvnn_k$ = function () {
    return this.reverseLayout_1;
  };
  protoOf(PagerMeasureResult).get_beyondBoundsPageCount_vv2mjx_k$ = function () {
    return this.beyondBoundsPageCount_1;
  };
  protoOf(PagerMeasureResult).get_firstVisiblePage_l46t46_k$ = function () {
    return this.firstVisiblePage_1;
  };
  protoOf(PagerMeasureResult).get_currentPage_nu3327_k$ = function () {
    return this.currentPage_1;
  };
  protoOf(PagerMeasureResult).set_currentPageOffsetFraction_i8os08_k$ = function (_set____db54di) {
    this.currentPageOffsetFraction_1 = _set____db54di;
  };
  protoOf(PagerMeasureResult).get_currentPageOffsetFraction_l0n9w4_k$ = function () {
    return this.currentPageOffsetFraction_1;
  };
  protoOf(PagerMeasureResult).set_firstVisiblePageScrollOffset_w0hg0q_k$ = function (_set____db54di) {
    this.firstVisiblePageScrollOffset_1 = _set____db54di;
  };
  protoOf(PagerMeasureResult).get_firstVisiblePageScrollOffset_9g2tiy_k$ = function () {
    return this.firstVisiblePageScrollOffset_1;
  };
  protoOf(PagerMeasureResult).set_canScrollForward_gclgc0_k$ = function (_set____db54di) {
    this.canScrollForward_1 = _set____db54di;
  };
  protoOf(PagerMeasureResult).get_canScrollForward_dmb0fj_k$ = function () {
    return this.canScrollForward_1;
  };
  protoOf(PagerMeasureResult).get_remeasureNeeded_9nwf49_k$ = function () {
    return this.remeasureNeeded_1;
  };
  protoOf(PagerMeasureResult).get_alignmentLines_nx3i05_k$ = function () {
    return this.$$delegate_0__1.get_alignmentLines_nx3i05_k$();
  };
  protoOf(PagerMeasureResult).get_height_e7t92o_k$ = function () {
    return this.$$delegate_0__1.get_height_e7t92o_k$();
  };
  protoOf(PagerMeasureResult).get_width_j0q4yl_k$ = function () {
    return this.$$delegate_0__1.get_width_j0q4yl_k$();
  };
  protoOf(PagerMeasureResult).placeChildren_kds4oa_k$ = function () {
    this.$$delegate_0__1.placeChildren_kds4oa_k$();
  };
  protoOf(PagerMeasureResult).get_viewportSize_hnfbdb_k$ = function () {
    return IntSize(this.get_width_j0q4yl_k$(), this.get_height_e7t92o_k$());
  };
  protoOf(PagerMeasureResult).get_beforeContentPadding_2dperk_k$ = function () {
    return -this.viewportStartOffset_1 | 0;
  };
  protoOf(PagerMeasureResult).get_canScrollBackward_v2t7h3_k$ = function () {
    var tmp;
    var tmp0_safe_receiver = this.firstVisiblePage_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_index_it478p_k$();
    if (!((tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) === 0)) {
      tmp = true;
    } else {
      tmp = !(this.firstVisiblePageScrollOffset_1 === 0);
    }
    return tmp;
  };
  protoOf(PagerMeasureResult).tryToApplyScrollWithoutRemeasure_sdxfxs_k$ = function (delta) {
    var pageSizeWithSpacing = this.pageSize_1 + this.pageSpacing_1 | 0;
    var tmp;
    if ((this.remeasureNeeded_1 ? true : this.visiblePagesInfo_1.isEmpty_y1axqb_k$()) ? true : this.firstVisiblePage_1 == null) {
      tmp = true;
    } else {
      var containsArg = this.firstVisiblePageScrollOffset_1 - delta | 0;
      tmp = !(0 <= containsArg ? containsArg < pageSizeWithSpacing : false);
    }
    if (tmp) {
      return false;
    }
    var tmp_0;
    if (!(pageSizeWithSpacing === 0)) {
      tmp_0 = delta / pageSizeWithSpacing;
    } else {
      tmp_0 = 0.0;
    }
    var deltaFraction = tmp_0;
    var newCurrentPageOffsetFraction = this.currentPageOffsetFraction_1 - deltaFraction;
    if ((this.currentPage_1 == null ? true : newCurrentPageOffsetFraction >= get_MaxPageOffset()) ? true : newCurrentPageOffsetFraction <= get_MinPageOffset()) {
      return false;
    }
    var first_0 = first(this.visiblePagesInfo_1);
    var last_0 = last(this.visiblePagesInfo_1);
    var tmp_1;
    if (delta < 0) {
      var deltaToFirstItemChange = (first_0.get_offset_hjmqak_k$() + pageSizeWithSpacing | 0) - this.viewportStartOffset_1 | 0;
      var deltaToLastItemChange = (last_0.get_offset_hjmqak_k$() + pageSizeWithSpacing | 0) - this.viewportEndOffset_1 | 0;
      // Inline function 'kotlin.comparisons.minOf' call
      tmp_1 = Math.min(deltaToFirstItemChange, deltaToLastItemChange) > (-delta | 0);
    } else {
      var deltaToFirstItemChange_0 = this.viewportStartOffset_1 - first_0.get_offset_hjmqak_k$() | 0;
      var deltaToLastItemChange_0 = this.viewportEndOffset_1 - last_0.get_offset_hjmqak_k$() | 0;
      // Inline function 'kotlin.comparisons.minOf' call
      tmp_1 = Math.min(deltaToFirstItemChange_0, deltaToLastItemChange_0) > delta;
    }
    var canApply = tmp_1;
    var tmp_2;
    if (canApply) {
      this.currentPageOffsetFraction_1 = this.currentPageOffsetFraction_1 - deltaFraction;
      this.firstVisiblePageScrollOffset_1 = this.firstVisiblePageScrollOffset_1 - delta | 0;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var this_0 = this.visiblePagesInfo_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last_1 = this_0.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last_1)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.get_c1px32_k$(index);
          // Inline function 'androidx.compose.foundation.pager.PagerMeasureResult.tryToApplyScrollWithoutRemeasure.<anonymous>' call
          item.applyScrollDelta_knnih7_k$(delta);
        }
         while (inductionVariable <= last_1);
      if (!this.canScrollForward_1 ? delta > 0 : false) {
        this.canScrollForward_1 = true;
      }
      tmp_2 = true;
    } else {
      tmp_2 = false;
    }
    return tmp_2;
  };
  function get_DefaultPositionThreshold() {
    _init_properties_PagerState_kt__9pfij6();
    return DefaultPositionThreshold;
  }
  var DefaultPositionThreshold;
  function get_EmptyLayoutInfo() {
    _init_properties_PagerState_kt__9pfij6();
    return EmptyLayoutInfo;
  }
  var EmptyLayoutInfo;
  function get_UnitDensity() {
    _init_properties_PagerState_kt__9pfij6();
    return UnitDensity;
  }
  var UnitDensity;
  function get_SnapAlignmentStartToStart() {
    _init_properties_PagerState_kt__9pfij6();
    return SnapAlignmentStartToStart;
  }
  var SnapAlignmentStartToStart;
  function sam$androidx_compose_foundation_gestures_snapping_SnapPositionInLayout$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_foundation_gestures_snapping_SnapPositionInLayout$0_0).position_v3md0x_k$ = function (layoutSize, itemSize, beforeContentPadding, afterContentPadding, itemIndex) {
    return this.function_1(layoutSize, itemSize, beforeContentPadding, afterContentPadding, itemIndex);
  };
  function EmptyLayoutInfo$1() {
    this.width_1 = 0;
    this.height_1 = 0;
    var tmp = this;
    // Inline function 'kotlin.collections.mapOf' call
    tmp.alignmentLines_1 = emptyMap();
  }
  protoOf(EmptyLayoutInfo$1).get_width_j0q4yl_k$ = function () {
    return this.width_1;
  };
  protoOf(EmptyLayoutInfo$1).get_height_e7t92o_k$ = function () {
    return this.height_1;
  };
  protoOf(EmptyLayoutInfo$1).get_alignmentLines_nx3i05_k$ = function () {
    return this.alignmentLines_1;
  };
  protoOf(EmptyLayoutInfo$1).placeChildren_kds4oa_k$ = function () {
  };
  function UnitDensity$1() {
    this.density_1 = 1.0;
    this.fontScale_1 = 1.0;
  }
  protoOf(UnitDensity$1).get_density_qy0267_k$ = function () {
    return this.density_1;
  };
  protoOf(UnitDensity$1).get_fontScale_h56n3i_k$ = function () {
    return this.fontScale_1;
  };
  function SnapAlignmentStartToStart$lambda(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi, _anonymous_parameter_3__qggqen, _anonymous_parameter_4__qggqds) {
    _init_properties_PagerState_kt__9pfij6();
    return 0;
  }
  var properties_initialized_PagerState_kt_v93qz4;
  function _init_properties_PagerState_kt__9pfij6() {
    if (!properties_initialized_PagerState_kt_v93qz4) {
      properties_initialized_PagerState_kt_v93qz4 = true;
      // Inline function 'androidx.compose.ui.unit.dp' call
      DefaultPositionThreshold = _Dp___init__impl__ms3zkb(56);
      var tmp0_visiblePagesInfo = emptyList();
      var tmp1_orientation = Orientation_Horizontal_getInstance();
      var tmp2_measureResult = new EmptyLayoutInfo$1();
      EmptyLayoutInfo = new PagerMeasureResult(tmp0_visiblePagesInfo, 0, 0, 0, tmp1_orientation, 0, 0, false, 0, null, null, 0.0, 0, false, tmp2_measureResult, false);
      UnitDensity = new UnitDensity$1();
      var tmp = SnapAlignmentStartToStart$lambda;
      SnapAlignmentStartToStart = new sam$androidx_compose_foundation_gestures_snapping_SnapPositionInLayout$0_0(tmp);
    }
  }
  function get_ModifierLocalBringIntoViewParent() {
    _init_properties_BringIntoView_kt__yi7ifv();
    return ModifierLocalBringIntoViewParent;
  }
  var ModifierLocalBringIntoViewParent;
  function BringIntoViewParent() {
  }
  function ModifierLocalBringIntoViewParent$lambda() {
    _init_properties_BringIntoView_kt__yi7ifv();
    return null;
  }
  var properties_initialized_BringIntoView_kt_uq6g7t;
  function _init_properties_BringIntoView_kt__yi7ifv() {
    if (!properties_initialized_BringIntoView_kt_uq6g7t) {
      properties_initialized_BringIntoView_kt_uq6g7t = true;
      ModifierLocalBringIntoViewParent = modifierLocalOf(ModifierLocalBringIntoViewParent$lambda);
    }
  }
  function CornerBasedShape(topStart, topEnd, bottomEnd, bottomStart) {
    this.topStart_1 = topStart;
    this.topEnd_1 = topEnd;
    this.bottomEnd_1 = bottomEnd;
    this.bottomStart_1 = bottomStart;
  }
  protoOf(CornerBasedShape).get_topStart_n2fniu_k$ = function () {
    return this.topStart_1;
  };
  protoOf(CornerBasedShape).get_topEnd_k1yfkf_k$ = function () {
    return this.topEnd_1;
  };
  protoOf(CornerBasedShape).get_bottomEnd_m64yrd_k$ = function () {
    return this.bottomEnd_1;
  };
  protoOf(CornerBasedShape).get_bottomStart_3n1j0u_k$ = function () {
    return this.bottomStart_1;
  };
  protoOf(CornerBasedShape).createOutline_nnkieo_k$ = function (size, layoutDirection, density) {
    var topStart = this.topStart_1.toPx_laqs5v_k$(size, density);
    var topEnd = this.topEnd_1.toPx_laqs5v_k$(size, density);
    var bottomEnd = this.bottomEnd_1.toPx_laqs5v_k$(size, density);
    var bottomStart = this.bottomStart_1.toPx_laqs5v_k$(size, density);
    var minDimension = _Size___get_minDimension__impl__4iso0r(size);
    if (topStart + bottomStart > minDimension) {
      var scale = minDimension / (topStart + bottomStart);
      topStart = topStart * scale;
      bottomStart = bottomStart * scale;
    }
    if (topEnd + bottomEnd > minDimension) {
      var scale_0 = minDimension / (topEnd + bottomEnd);
      topEnd = topEnd * scale_0;
      bottomEnd = bottomEnd * scale_0;
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(((topStart >= 0.0 ? topEnd >= 0.0 : false) ? bottomEnd >= 0.0 : false) ? bottomStart >= 0.0 : false)) {
      // Inline function 'androidx.compose.foundation.shape.CornerBasedShape.createOutline.<anonymous>' call
      var message = "Corner size in Px can't be negative(topStart = " + topStart + ', topEnd = ' + topEnd + ', ' + ('bottomEnd = ' + bottomEnd + ', bottomStart = ' + bottomStart + ')!');
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.createOutline_xvx6l2_k$(size, topStart, topEnd, bottomEnd, bottomStart, layoutDirection);
  };
  protoOf(CornerBasedShape).copy$default_s4pzap_k$ = function (topStart, topEnd, bottomEnd, bottomStart, $super) {
    topStart = topStart === VOID ? this.topStart_1 : topStart;
    topEnd = topEnd === VOID ? this.topEnd_1 : topEnd;
    bottomEnd = bottomEnd === VOID ? this.bottomEnd_1 : bottomEnd;
    bottomStart = bottomStart === VOID ? this.bottomStart_1 : bottomStart;
    return $super === VOID ? this.copy_amg9gv_k$(topStart, topEnd, bottomEnd, bottomStart) : $super.copy_amg9gv_k$.call(this, topStart, topEnd, bottomEnd, bottomStart);
  };
  protoOf(CornerBasedShape).copy_68qqs_k$ = function (all) {
    return this.copy_amg9gv_k$(all, all, all, all);
  };
  function get_ZeroCornerSize() {
    _init_properties_CornerSize_kt__adzyne();
    return ZeroCornerSize;
  }
  var ZeroCornerSize;
  function CornerSize() {
  }
  function CornerSize_0(percent) {
    _init_properties_CornerSize_kt__adzyne();
    return new PercentCornerSize(percent);
  }
  function _get_percent__ssgsk4($this) {
    return $this.percent_1;
  }
  function component1_0($this) {
    return $this.percent_1;
  }
  function PercentCornerSize(percent) {
    this.percent_1 = percent;
    if (this.percent_1 < 0.0 ? true : this.percent_1 > 100.0) {
      throw IllegalArgumentException_init_$Create$('The percent should be in the range of [0, 100]');
    }
  }
  protoOf(PercentCornerSize).toPx_laqs5v_k$ = function (shapeSize, density) {
    return _Size___get_minDimension__impl__4iso0r(shapeSize) * (this.percent_1 / 100.0);
  };
  protoOf(PercentCornerSize).toString = function () {
    return 'CornerSize(size = ' + this.percent_1 + '%)';
  };
  protoOf(PercentCornerSize).get_valueOverride_4rn9vw_k$ = function () {
    return '' + this.percent_1 + '%';
  };
  protoOf(PercentCornerSize).copy_s06gv7_k$ = function (percent) {
    return new PercentCornerSize(percent);
  };
  protoOf(PercentCornerSize).copy$default_vtf5jn_k$ = function (percent, $super) {
    percent = percent === VOID ? this.percent_1 : percent;
    return $super === VOID ? this.copy_s06gv7_k$(percent) : $super.copy_s06gv7_k$.call(this, percent);
  };
  protoOf(PercentCornerSize).hashCode = function () {
    return getNumberHashCode(this.percent_1);
  };
  protoOf(PercentCornerSize).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PercentCornerSize))
      return false;
    var tmp0_other_with_cast = other instanceof PercentCornerSize ? other : THROW_CCE();
    if (!equals(this.percent_1, tmp0_other_with_cast.percent_1))
      return false;
    return true;
  };
  function CornerSize_1(size) {
    _init_properties_CornerSize_kt__adzyne();
    return new DpCornerSize(size);
  }
  function _get_size__ddoh9m($this) {
    return $this.size_1;
  }
  function component1_1($this) {
    return $this.size_1;
  }
  function DpCornerSize(size) {
    this.size_1 = size;
  }
  protoOf(DpCornerSize).toPx_laqs5v_k$ = function (shapeSize, density) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.shape.DpCornerSize.toPx.<anonymous>' call
    return density.toPx_mycba2_k$(this.size_1);
  };
  protoOf(DpCornerSize).toString = function () {
    return 'CornerSize(size = ' + _Dp___get_value__impl__geb1vb(this.size_1) + '.dp)';
  };
  protoOf(DpCornerSize).get_valueOverride_xrl2fl_k$ = function () {
    return this.size_1;
  };
  protoOf(DpCornerSize).get_valueOverride_4rn9vw_k$ = function () {
    return new Dp(this.get_valueOverride_xrl2fl_k$());
  };
  protoOf(DpCornerSize).copy_alvhr6_k$ = function (size) {
    return new DpCornerSize(size);
  };
  protoOf(DpCornerSize).copy$default_sdf1lf_k$ = function (size, $super) {
    size = size === VOID ? this.size_1 : size;
    return $super === VOID ? this.copy_alvhr6_k$(size) : $super.copy_alvhr6_k$.call(this, new Dp(size));
  };
  protoOf(DpCornerSize).hashCode = function () {
    return Dp__hashCode_impl_sxkrra(this.size_1);
  };
  protoOf(DpCornerSize).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DpCornerSize))
      return false;
    var tmp0_other_with_cast = other instanceof DpCornerSize ? other : THROW_CCE();
    if (!equals(this.size_1, tmp0_other_with_cast.size_1))
      return false;
    return true;
  };
  function ZeroCornerSize$1() {
  }
  protoOf(ZeroCornerSize$1).toPx_laqs5v_k$ = function (shapeSize, density) {
    return 0.0;
  };
  protoOf(ZeroCornerSize$1).toString = function () {
    return 'ZeroCornerSize';
  };
  protoOf(ZeroCornerSize$1).get_valueOverride_4rn9vw_k$ = function () {
    return 'ZeroCornerSize';
  };
  var properties_initialized_CornerSize_kt_9yvmfc;
  function _init_properties_CornerSize_kt__adzyne() {
    if (!properties_initialized_CornerSize_kt_9yvmfc) {
      properties_initialized_CornerSize_kt_9yvmfc = true;
      ZeroCornerSize = new ZeroCornerSize$1();
    }
  }
  function get_CircleShape() {
    _init_properties_RoundedCornerShape_kt__vzposf();
    return CircleShape;
  }
  var CircleShape;
  function RoundedCornerShape(topStart, topEnd, bottomEnd, bottomStart) {
    CornerBasedShape.call(this, topStart, topEnd, bottomEnd, bottomStart);
  }
  protoOf(RoundedCornerShape).createOutline_xvx6l2_k$ = function (size, topStart, topEnd, bottomEnd, bottomStart, layoutDirection) {
    var tmp;
    if (topStart + topEnd + bottomEnd + bottomStart === 0.0) {
      tmp = new Rectangle(toRect_0(size));
    } else {
      tmp = new Rounded(RoundRect_0(toRect_0(size), CornerRadius(layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? topStart : topEnd), CornerRadius(layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? topEnd : topStart), CornerRadius(layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? bottomEnd : bottomStart), CornerRadius(layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? bottomStart : bottomEnd)));
    }
    return tmp;
  };
  protoOf(RoundedCornerShape).copy_amg9gv_k$ = function (topStart, topEnd, bottomEnd, bottomStart) {
    return new RoundedCornerShape(topStart, topEnd, bottomEnd, bottomStart);
  };
  protoOf(RoundedCornerShape).toString = function () {
    return 'RoundedCornerShape(topStart = ' + this.get_topStart_n2fniu_k$() + ', topEnd = ' + this.get_topEnd_k1yfkf_k$() + ', bottomEnd = ' + ('' + this.get_bottomEnd_m64yrd_k$() + ', bottomStart = ' + this.get_bottomStart_3n1j0u_k$() + ')');
  };
  protoOf(RoundedCornerShape).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RoundedCornerShape))
      return false;
    if (!equals(this.get_topStart_n2fniu_k$(), other.get_topStart_n2fniu_k$()))
      return false;
    if (!equals(this.get_topEnd_k1yfkf_k$(), other.get_topEnd_k1yfkf_k$()))
      return false;
    if (!equals(this.get_bottomEnd_m64yrd_k$(), other.get_bottomEnd_m64yrd_k$()))
      return false;
    if (!equals(this.get_bottomStart_3n1j0u_k$(), other.get_bottomStart_3n1j0u_k$()))
      return false;
    return true;
  };
  protoOf(RoundedCornerShape).hashCode = function () {
    var result = hashCode(this.get_topStart_n2fniu_k$());
    result = imul(31, result) + hashCode(this.get_topEnd_k1yfkf_k$()) | 0;
    result = imul(31, result) + hashCode(this.get_bottomEnd_m64yrd_k$()) | 0;
    result = imul(31, result) + hashCode(this.get_bottomStart_3n1j0u_k$()) | 0;
    return result;
  };
  function RoundedCornerShape_0(percent) {
    _init_properties_RoundedCornerShape_kt__vzposf();
    return RoundedCornerShape_1(CornerSize_0(percent));
  }
  function RoundedCornerShape_1(corner) {
    _init_properties_RoundedCornerShape_kt__vzposf();
    return new RoundedCornerShape(corner, corner, corner, corner);
  }
  function RoundedCornerShape_2(size) {
    _init_properties_RoundedCornerShape_kt__vzposf();
    return RoundedCornerShape_1(CornerSize_1(size));
  }
  function RoundedCornerShape_3(topStart, topEnd, bottomEnd, bottomStart) {
    var tmp;
    if (topStart === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = topStart;
    }
    topStart = tmp;
    var tmp_0;
    if (topEnd === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = topEnd;
    }
    topEnd = tmp_0;
    var tmp_1;
    if (bottomEnd === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = bottomEnd;
    }
    bottomEnd = tmp_1;
    var tmp_2;
    if (bottomStart === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottomStart;
    }
    bottomStart = tmp_2;
    _init_properties_RoundedCornerShape_kt__vzposf();
    return new RoundedCornerShape(CornerSize_1(topStart), CornerSize_1(topEnd), CornerSize_1(bottomEnd), CornerSize_1(bottomStart));
  }
  var properties_initialized_RoundedCornerShape_kt_5mose9;
  function _init_properties_RoundedCornerShape_kt__vzposf() {
    if (!properties_initialized_RoundedCornerShape_kt_5mose9) {
      properties_initialized_RoundedCornerShape_kt_5mose9 = true;
      CircleShape = RoundedCornerShape_0(50);
    }
  }
  function get_EmptyInlineContent() {
    _init_properties_AnnotatedStringResolveInlineContent_kt__h20qbv();
    return EmptyInlineContent;
  }
  var EmptyInlineContent;
  var properties_initialized_AnnotatedStringResolveInlineContent_kt_ljtk0d;
  function _init_properties_AnnotatedStringResolveInlineContent_kt__h20qbv() {
    if (!properties_initialized_AnnotatedStringResolveInlineContent_kt_ljtk0d) {
      properties_initialized_AnnotatedStringResolveInlineContent_kt_ljtk0d = true;
      EmptyInlineContent = new Pair(emptyList(), emptyList());
    }
  }
  function BasicText(text, modifier, style, onTextLayout, overflow, softWrap, maxLines, minLines, color, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var style_0 = {_v: style};
    var onTextLayout_0 = {_v: onTextLayout};
    var overflow_0 = {_v: new TextOverflow(overflow)};
    var softWrap_0 = {_v: softWrap};
    var maxLines_0 = {_v: maxLines};
    var minLines_0 = {_v: minLines};
    var color_0 = {_v: color};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1186827822);
    sourceInformation($composer_0, 'C(BasicText)P(8,3,7,4,5:c#ui.text.style.TextOverflow,6,1,2)95@4654L7,144@6466L41:BasicText.kt#423gt5');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(text) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(style_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onTextLayout_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(_TextOverflow___get_value__impl__vugm5i(overflow_0._v.value_1)) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(softWrap_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(maxLines_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(minLines_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 33554432;
    if (!(($default & 256) === 256) ? true : !(($dirty & 191739611) === 38347922) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance_7();
      }
      if (!(($default & 4) === 0)) {
        style_0._v = Companion_getInstance_19().get_Default_goqax4_k$();
      }
      if (!(($default & 8) === 0)) {
        onTextLayout_0._v = null;
      }
      if (!(($default & 16) === 0)) {
        overflow_0._v = new TextOverflow(Companion_getInstance_20().get_Clip_ypf2ge_k$());
      }
      if (!(($default & 32) === 0)) {
        softWrap_0._v = true;
      }
      if (!(($default & 64) === 0)) {
        maxLines_0._v = IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$();
      }
      if (!(($default & 128) === 0)) {
        minLines_0._v = 1;
      }
      if (!(($default & 256) === 0)) {
        color_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1186827822, $dirty, -1, 'androidx.compose.foundation.text.BasicText (BasicText.kt:90)');
      }
      validateMinMaxLines(minLines_0._v, maxLines_0._v);
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var this_0 = get_LocalSelectionRegistrar();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.consume_ebzcrh_k$(this_0);
      sourceInformationMarkerEnd($composer_1);
      var selectionRegistrar = tmp0;
      $composer_0.startReplaceableGroup_ip860b_k$(959238528);
      sourceInformation($composer_0, '97@4790L7,99@4853L152,102@5014L234');
      var tmp;
      if (!(selectionRegistrar == null)) {
        // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
        var this_1 = get_LocalTextSelectionColors();
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
        var tmp0_0 = $composer_2.consume_ebzcrh_k$(this_1);
        sourceInformationMarkerEnd($composer_2);
        var backgroundSelectionColor = tmp0_0.get_backgroundColor_41xwlp_k$();
        var tmp_0 = selectionIdSaver(selectionRegistrar);
        var selectableId = rememberSaveable([selectionRegistrar], tmp_0, null, BasicText$lambda(selectionRegistrar), $composer_0, 72, 4);
        $composer_0.startReplaceableGroup_ip860b_k$(959238850);
        sourceInformation($composer_0, 'CC(remember):BasicText.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var this_2 = $composer_0;
        var invalid = !!(!!($composer_0.changed_j54hty_k$(selectableId) | $composer_0.changed_ga7h3f_k$(selectionRegistrar)) | $composer_0.changed_j54hty_k$(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(backgroundSelectionColor))));
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = this_2.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid ? true : it === Companion_getInstance_9().get_Empty_i9b85g_k$()) {
          // Inline function 'androidx.compose.foundation.text.BasicText.<anonymous>' call
          var value = new SelectionController(selectableId, selectionRegistrar, backgroundSelectionColor);
          this_2.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        tmp = tmp0_group;
      } else {
        tmp = null;
      }
      var tmp1_group = tmp;
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var selectionController = tmp1_group;
      var tmp_3;
      if (!(selectionController == null) ? true : !(onTextLayout_0._v == null)) {
        $composer_0.startReplaceableGroup_ip860b_k$(959239198);
        sourceInformation($composer_0, '124@5828L7');
        var tmp_4 = graphicsLayer(modifier_0._v);
        var tmp_5 = AnnotatedString_init_$Create$(text);
        var tmp_6 = style_0._v;
        var tmp_7 = onTextLayout_0._v;
        var tmp_8 = overflow_0._v;
        var tmp_9 = softWrap_0._v;
        var tmp_10 = maxLines_0._v;
        var tmp_11 = minLines_0._v;
        // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
        var this_3 = get_LocalFontFamilyResolver();
        var $composer_3 = $composer_0;
        sourceInformationMarkerStart($composer_3, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
        var tmp0_1 = $composer_3.consume_ebzcrh_k$(this_3);
        sourceInformationMarkerEnd($composer_3);
        var tmp2_group = textModifier(tmp_4, tmp_5, tmp_6, tmp_7, tmp_8.value_1, tmp_9, tmp_10, tmp_11, tmp0_1, null, null, selectionController, color_0._v);
        $composer_0.endReplaceableGroup_ern0ak_k$();
        tmp_3 = tmp2_group;
      } else {
        $composer_0.startReplaceableGroup_ip860b_k$(959239868);
        sourceInformation($composer_0, '136@6279L7');
        var tmp_12 = graphicsLayer(modifier_0._v);
        var tmp_13 = style_0._v;
        // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
        var this_4 = get_LocalFontFamilyResolver();
        var $composer_4 = $composer_0;
        sourceInformationMarkerStart($composer_4, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
        var tmp0_2 = $composer_4.consume_ebzcrh_k$(this_4);
        sourceInformationMarkerEnd($composer_4);
        var tmp3_group = tmp_12.then_g5qrxq_k$(new TextStringSimpleElement(text, tmp_13, tmp0_2, overflow_0._v.value_1, softWrap_0._v, maxLines_0._v, minLines_0._v, color_0._v));
        $composer_0.endReplaceableGroup_ern0ak_k$();
        tmp_3 = tmp3_group;
      }
      var finalModifier = tmp_3;
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var measurePolicy = EmptyMeasurePolicy_getInstance();
      var modifier_1 = finalModifier;
      var $composer_5 = $composer_0;
      $composer_5.startReplaceableGroup_ip860b_k$(544976794);
      sourceInformation($composer_5, 'CC(Layout)P(1)124@4810L23,127@4961L385:Layout.kt#80mrfh');
      if (!((0 & 1) === 0))
        modifier_1 = Companion_getInstance_7();
      var compositeKeyHash = get_currentCompositeKeyHash($composer_5, 0);
      var materialized = materialize($composer_5, modifier_1);
      var localMap = $composer_5.get_currentCompositionLocalMap_fmcf79_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_21().get_Constructor_f7ieep_k$();
      var $composer_6 = $composer_5;
      $composer_6.startReplaceableGroup_ip860b_k$(1405779621);
      sourceInformation($composer_6, 'CC(ReusableComposeNode):Composables.kt#9igjgp');
      var tmp_14 = $composer_6.get_applier_bupu8u_k$();
      if (!isInterface(tmp_14, Applier)) {
        invalidApplier();
      }
      $composer_6.startReusableNode_jjgeyp_k$();
      if ($composer_6.get_inserting_25mlsw_k$()) {
        var tmp_15 = $composer_6;
        tmp_15.createNode_ahrd54_k$(BasicText$lambda_0(factory));
      } else {
        $composer_6.useNode_io5s9l_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_6);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_21().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_21().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_21().get_SetModifier_6tz580_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_21().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      var tmp_16;
      if ($this$with.get_inserting_25mlsw_k$() ? true : !equals($this$with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
        $this$with.updateRememberedValue_l1wh71_k$(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).apply_pk82p8_k$(compositeKeyHash, block);
        tmp_16 = Unit_getInstance();
      }
      $composer_6.endNode_3m0yfn_k$();
      $composer_6.endReplaceableGroup_ern0ak_k$();
      $composer_5.endReplaceableGroup_ern0ak_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp4_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp4_safe_receiver == null)
      null;
    else {
      tmp4_safe_receiver.updateScope_t8jcf_k$(BasicText$lambda_1(text, modifier_0, style_0, onTextLayout_0, overflow_0, softWrap_0, maxLines_0, minLines_0, color_0, $changed, $default));
    }
  }
  function selectionIdSaver(selectionRegistrar) {
    var tmp = selectionIdSaver$lambda(selectionRegistrar);
    return Saver(tmp, selectionIdSaver$lambda_0);
  }
  function textModifier(_this__u8e3s4, text, style, onTextLayout, overflow, softWrap, maxLines, minLines, fontFamilyResolver, placeholders, onPlaceholderLayout, selectionController, color) {
    if (selectionController == null) {
      var staticTextModifier = new TextAnnotatedStringElement(text, style, fontFamilyResolver, onTextLayout, overflow, softWrap, maxLines, minLines, placeholders, onPlaceholderLayout, null, color);
      return _this__u8e3s4.then_g5qrxq_k$(Companion_getInstance_7()).then_g5qrxq_k$(staticTextModifier);
    } else {
      var selectableTextModifier = new SelectableTextAnnotatedStringElement(text, style, fontFamilyResolver, onTextLayout, overflow, softWrap, maxLines, minLines, placeholders, onPlaceholderLayout, selectionController, color);
      return _this__u8e3s4.then_g5qrxq_k$(selectionController.get_modifier_t1pq5c_k$()).then_g5qrxq_k$(selectableTextModifier);
    }
  }
  function _get_placementBlock__4evcdf($this) {
    return $this.placementBlock_1;
  }
  function EmptyMeasurePolicy$placementBlock$lambda($this$null) {
    return Unit_getInstance();
  }
  function EmptyMeasurePolicy() {
    EmptyMeasurePolicy_instance = this;
    var tmp = this;
    tmp.placementBlock_1 = EmptyMeasurePolicy$placementBlock$lambda;
  }
  protoOf(EmptyMeasurePolicy).measure_xg9b01_k$ = function (_this__u8e3s4, measurables, constraints) {
    return _this__u8e3s4.layout$default_n19e5l_k$(_Constraints___get_maxWidth__impl__uuyqc(constraints), _Constraints___get_maxHeight__impl__dt3e8z(constraints), VOID, this.placementBlock_1);
  };
  var EmptyMeasurePolicy_instance;
  function EmptyMeasurePolicy_getInstance() {
    if (EmptyMeasurePolicy_instance == null)
      new EmptyMeasurePolicy();
    return EmptyMeasurePolicy_instance;
  }
  function BasicText$lambda($selectionRegistrar) {
    return function () {
      return $selectionRegistrar.nextSelectableId_50rfx8_k$();
    };
  }
  function BasicText$lambda_0($factory) {
    return function () {
      return $factory();
    };
  }
  function BasicText$lambda_1($text, $modifier, $style, $onTextLayout, $overflow, $softWrap, $maxLines, $minLines, $color, $$changed, $$default) {
    return function ($composer, $force) {
      BasicText($text, $modifier._v, $style._v, $onTextLayout._v, $overflow._v.value_1, $softWrap._v, $maxLines._v, $minLines._v, $color._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function selectionIdSaver$lambda($selectionRegistrar) {
    return function ($this$Saver, it) {
      return hasSelection($selectionRegistrar, it) ? it : null;
    };
  }
  function selectionIdSaver$lambda_0(it) {
    return it;
  }
  var Handle_Cursor_instance;
  var Handle_SelectionStart_instance;
  var Handle_SelectionEnd_instance;
  function values_1() {
    return [Handle_Cursor_getInstance(), Handle_SelectionStart_getInstance(), Handle_SelectionEnd_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'Cursor':
        return Handle_Cursor_getInstance();
      case 'SelectionStart':
        return Handle_SelectionStart_getInstance();
      case 'SelectionEnd':
        return Handle_SelectionEnd_getInstance();
      default:
        Handle_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
  }
  var Handle_entriesInitialized;
  function Handle_initEntries() {
    if (Handle_entriesInitialized)
      return Unit_getInstance();
    Handle_entriesInitialized = true;
    Handle_Cursor_instance = new Handle('Cursor', 0);
    Handle_SelectionStart_instance = new Handle('SelectionStart', 1);
    Handle_SelectionEnd_instance = new Handle('SelectionEnd', 2);
  }
  var $ENTRIES_1;
  function Handle(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Handle_Cursor_getInstance() {
    Handle_initEntries();
    return Handle_Cursor_instance;
  }
  function Handle_SelectionStart_getInstance() {
    Handle_initEntries();
    return Handle_SelectionStart_instance;
  }
  function Handle_SelectionEnd_getInstance() {
    Handle_initEntries();
    return Handle_SelectionEnd_instance;
  }
  function validateMinMaxLines(minLines, maxLines) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(minLines > 0 ? maxLines > 0 : false)) {
      // Inline function 'androidx.compose.foundation.text.validateMinMaxLines.<anonymous>' call
      var message = 'both minLines ' + minLines + ' and maxLines ' + maxLines + ' must be greater than zero';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(minLines <= maxLines)) {
      // Inline function 'androidx.compose.foundation.text.validateMinMaxLines.<anonymous>' call
      var message_0 = 'minLines ' + minLines + ' must be less than or equal to maxLines ' + maxLines;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  function get_DefaultMinLines() {
    return DefaultMinLines;
  }
  var DefaultMinLines;
  var KeyCommand_LEFT_CHAR_instance;
  var KeyCommand_RIGHT_CHAR_instance;
  var KeyCommand_RIGHT_WORD_instance;
  var KeyCommand_LEFT_WORD_instance;
  var KeyCommand_NEXT_PARAGRAPH_instance;
  var KeyCommand_PREV_PARAGRAPH_instance;
  var KeyCommand_LINE_START_instance;
  var KeyCommand_LINE_END_instance;
  var KeyCommand_LINE_LEFT_instance;
  var KeyCommand_LINE_RIGHT_instance;
  var KeyCommand_UP_instance;
  var KeyCommand_DOWN_instance;
  var KeyCommand_PAGE_UP_instance;
  var KeyCommand_PAGE_DOWN_instance;
  var KeyCommand_HOME_instance;
  var KeyCommand_END_instance;
  var KeyCommand_COPY_instance;
  var KeyCommand_PASTE_instance;
  var KeyCommand_CUT_instance;
  var KeyCommand_DELETE_PREV_CHAR_instance;
  var KeyCommand_DELETE_NEXT_CHAR_instance;
  var KeyCommand_DELETE_PREV_WORD_instance;
  var KeyCommand_DELETE_NEXT_WORD_instance;
  var KeyCommand_DELETE_FROM_LINE_START_instance;
  var KeyCommand_DELETE_TO_LINE_END_instance;
  var KeyCommand_SELECT_ALL_instance;
  var KeyCommand_SELECT_LEFT_CHAR_instance;
  var KeyCommand_SELECT_RIGHT_CHAR_instance;
  var KeyCommand_SELECT_UP_instance;
  var KeyCommand_SELECT_DOWN_instance;
  var KeyCommand_SELECT_PAGE_UP_instance;
  var KeyCommand_SELECT_PAGE_DOWN_instance;
  var KeyCommand_SELECT_HOME_instance;
  var KeyCommand_SELECT_END_instance;
  var KeyCommand_SELECT_LEFT_WORD_instance;
  var KeyCommand_SELECT_RIGHT_WORD_instance;
  var KeyCommand_SELECT_NEXT_PARAGRAPH_instance;
  var KeyCommand_SELECT_PREV_PARAGRAPH_instance;
  var KeyCommand_SELECT_LINE_START_instance;
  var KeyCommand_SELECT_LINE_END_instance;
  var KeyCommand_SELECT_LINE_LEFT_instance;
  var KeyCommand_SELECT_LINE_RIGHT_instance;
  var KeyCommand_DESELECT_instance;
  var KeyCommand_NEW_LINE_instance;
  var KeyCommand_TAB_instance;
  var KeyCommand_UNDO_instance;
  var KeyCommand_REDO_instance;
  var KeyCommand_CHARACTER_PALETTE_instance;
  function values_2() {
    return [KeyCommand_LEFT_CHAR_getInstance(), KeyCommand_RIGHT_CHAR_getInstance(), KeyCommand_RIGHT_WORD_getInstance(), KeyCommand_LEFT_WORD_getInstance(), KeyCommand_NEXT_PARAGRAPH_getInstance(), KeyCommand_PREV_PARAGRAPH_getInstance(), KeyCommand_LINE_START_getInstance(), KeyCommand_LINE_END_getInstance(), KeyCommand_LINE_LEFT_getInstance(), KeyCommand_LINE_RIGHT_getInstance(), KeyCommand_UP_getInstance(), KeyCommand_DOWN_getInstance(), KeyCommand_PAGE_UP_getInstance(), KeyCommand_PAGE_DOWN_getInstance(), KeyCommand_HOME_getInstance(), KeyCommand_END_getInstance(), KeyCommand_COPY_getInstance(), KeyCommand_PASTE_getInstance(), KeyCommand_CUT_getInstance(), KeyCommand_DELETE_PREV_CHAR_getInstance(), KeyCommand_DELETE_NEXT_CHAR_getInstance(), KeyCommand_DELETE_PREV_WORD_getInstance(), KeyCommand_DELETE_NEXT_WORD_getInstance(), KeyCommand_DELETE_FROM_LINE_START_getInstance(), KeyCommand_DELETE_TO_LINE_END_getInstance(), KeyCommand_SELECT_ALL_getInstance(), KeyCommand_SELECT_LEFT_CHAR_getInstance(), KeyCommand_SELECT_RIGHT_CHAR_getInstance(), KeyCommand_SELECT_UP_getInstance(), KeyCommand_SELECT_DOWN_getInstance(), KeyCommand_SELECT_PAGE_UP_getInstance(), KeyCommand_SELECT_PAGE_DOWN_getInstance(), KeyCommand_SELECT_HOME_getInstance(), KeyCommand_SELECT_END_getInstance(), KeyCommand_SELECT_LEFT_WORD_getInstance(), KeyCommand_SELECT_RIGHT_WORD_getInstance(), KeyCommand_SELECT_NEXT_PARAGRAPH_getInstance(), KeyCommand_SELECT_PREV_PARAGRAPH_getInstance(), KeyCommand_SELECT_LINE_START_getInstance(), KeyCommand_SELECT_LINE_END_getInstance(), KeyCommand_SELECT_LINE_LEFT_getInstance(), KeyCommand_SELECT_LINE_RIGHT_getInstance(), KeyCommand_DESELECT_getInstance(), KeyCommand_NEW_LINE_getInstance(), KeyCommand_TAB_getInstance(), KeyCommand_UNDO_getInstance(), KeyCommand_REDO_getInstance(), KeyCommand_CHARACTER_PALETTE_getInstance()];
  }
  function valueOf_2(value) {
    switch (value) {
      case 'LEFT_CHAR':
        return KeyCommand_LEFT_CHAR_getInstance();
      case 'RIGHT_CHAR':
        return KeyCommand_RIGHT_CHAR_getInstance();
      case 'RIGHT_WORD':
        return KeyCommand_RIGHT_WORD_getInstance();
      case 'LEFT_WORD':
        return KeyCommand_LEFT_WORD_getInstance();
      case 'NEXT_PARAGRAPH':
        return KeyCommand_NEXT_PARAGRAPH_getInstance();
      case 'PREV_PARAGRAPH':
        return KeyCommand_PREV_PARAGRAPH_getInstance();
      case 'LINE_START':
        return KeyCommand_LINE_START_getInstance();
      case 'LINE_END':
        return KeyCommand_LINE_END_getInstance();
      case 'LINE_LEFT':
        return KeyCommand_LINE_LEFT_getInstance();
      case 'LINE_RIGHT':
        return KeyCommand_LINE_RIGHT_getInstance();
      case 'UP':
        return KeyCommand_UP_getInstance();
      case 'DOWN':
        return KeyCommand_DOWN_getInstance();
      case 'PAGE_UP':
        return KeyCommand_PAGE_UP_getInstance();
      case 'PAGE_DOWN':
        return KeyCommand_PAGE_DOWN_getInstance();
      case 'HOME':
        return KeyCommand_HOME_getInstance();
      case 'END':
        return KeyCommand_END_getInstance();
      case 'COPY':
        return KeyCommand_COPY_getInstance();
      case 'PASTE':
        return KeyCommand_PASTE_getInstance();
      case 'CUT':
        return KeyCommand_CUT_getInstance();
      case 'DELETE_PREV_CHAR':
        return KeyCommand_DELETE_PREV_CHAR_getInstance();
      case 'DELETE_NEXT_CHAR':
        return KeyCommand_DELETE_NEXT_CHAR_getInstance();
      case 'DELETE_PREV_WORD':
        return KeyCommand_DELETE_PREV_WORD_getInstance();
      case 'DELETE_NEXT_WORD':
        return KeyCommand_DELETE_NEXT_WORD_getInstance();
      case 'DELETE_FROM_LINE_START':
        return KeyCommand_DELETE_FROM_LINE_START_getInstance();
      case 'DELETE_TO_LINE_END':
        return KeyCommand_DELETE_TO_LINE_END_getInstance();
      case 'SELECT_ALL':
        return KeyCommand_SELECT_ALL_getInstance();
      case 'SELECT_LEFT_CHAR':
        return KeyCommand_SELECT_LEFT_CHAR_getInstance();
      case 'SELECT_RIGHT_CHAR':
        return KeyCommand_SELECT_RIGHT_CHAR_getInstance();
      case 'SELECT_UP':
        return KeyCommand_SELECT_UP_getInstance();
      case 'SELECT_DOWN':
        return KeyCommand_SELECT_DOWN_getInstance();
      case 'SELECT_PAGE_UP':
        return KeyCommand_SELECT_PAGE_UP_getInstance();
      case 'SELECT_PAGE_DOWN':
        return KeyCommand_SELECT_PAGE_DOWN_getInstance();
      case 'SELECT_HOME':
        return KeyCommand_SELECT_HOME_getInstance();
      case 'SELECT_END':
        return KeyCommand_SELECT_END_getInstance();
      case 'SELECT_LEFT_WORD':
        return KeyCommand_SELECT_LEFT_WORD_getInstance();
      case 'SELECT_RIGHT_WORD':
        return KeyCommand_SELECT_RIGHT_WORD_getInstance();
      case 'SELECT_NEXT_PARAGRAPH':
        return KeyCommand_SELECT_NEXT_PARAGRAPH_getInstance();
      case 'SELECT_PREV_PARAGRAPH':
        return KeyCommand_SELECT_PREV_PARAGRAPH_getInstance();
      case 'SELECT_LINE_START':
        return KeyCommand_SELECT_LINE_START_getInstance();
      case 'SELECT_LINE_END':
        return KeyCommand_SELECT_LINE_END_getInstance();
      case 'SELECT_LINE_LEFT':
        return KeyCommand_SELECT_LINE_LEFT_getInstance();
      case 'SELECT_LINE_RIGHT':
        return KeyCommand_SELECT_LINE_RIGHT_getInstance();
      case 'DESELECT':
        return KeyCommand_DESELECT_getInstance();
      case 'NEW_LINE':
        return KeyCommand_NEW_LINE_getInstance();
      case 'TAB':
        return KeyCommand_TAB_getInstance();
      case 'UNDO':
        return KeyCommand_UNDO_getInstance();
      case 'REDO':
        return KeyCommand_REDO_getInstance();
      case 'CHARACTER_PALETTE':
        return KeyCommand_CHARACTER_PALETTE_getInstance();
      default:
        KeyCommand_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_2() {
    if ($ENTRIES_2 == null)
      $ENTRIES_2 = enumEntries(values_2());
    return $ENTRIES_2;
  }
  var KeyCommand_entriesInitialized;
  function KeyCommand_initEntries() {
    if (KeyCommand_entriesInitialized)
      return Unit_getInstance();
    KeyCommand_entriesInitialized = true;
    KeyCommand_LEFT_CHAR_instance = new KeyCommand('LEFT_CHAR', 0, false);
    KeyCommand_RIGHT_CHAR_instance = new KeyCommand('RIGHT_CHAR', 1, false);
    KeyCommand_RIGHT_WORD_instance = new KeyCommand('RIGHT_WORD', 2, false);
    KeyCommand_LEFT_WORD_instance = new KeyCommand('LEFT_WORD', 3, false);
    KeyCommand_NEXT_PARAGRAPH_instance = new KeyCommand('NEXT_PARAGRAPH', 4, false);
    KeyCommand_PREV_PARAGRAPH_instance = new KeyCommand('PREV_PARAGRAPH', 5, false);
    KeyCommand_LINE_START_instance = new KeyCommand('LINE_START', 6, false);
    KeyCommand_LINE_END_instance = new KeyCommand('LINE_END', 7, false);
    KeyCommand_LINE_LEFT_instance = new KeyCommand('LINE_LEFT', 8, false);
    KeyCommand_LINE_RIGHT_instance = new KeyCommand('LINE_RIGHT', 9, false);
    KeyCommand_UP_instance = new KeyCommand('UP', 10, false);
    KeyCommand_DOWN_instance = new KeyCommand('DOWN', 11, false);
    KeyCommand_PAGE_UP_instance = new KeyCommand('PAGE_UP', 12, false);
    KeyCommand_PAGE_DOWN_instance = new KeyCommand('PAGE_DOWN', 13, false);
    KeyCommand_HOME_instance = new KeyCommand('HOME', 14, false);
    KeyCommand_END_instance = new KeyCommand('END', 15, false);
    KeyCommand_COPY_instance = new KeyCommand('COPY', 16, false);
    KeyCommand_PASTE_instance = new KeyCommand('PASTE', 17, true);
    KeyCommand_CUT_instance = new KeyCommand('CUT', 18, true);
    KeyCommand_DELETE_PREV_CHAR_instance = new KeyCommand('DELETE_PREV_CHAR', 19, true);
    KeyCommand_DELETE_NEXT_CHAR_instance = new KeyCommand('DELETE_NEXT_CHAR', 20, true);
    KeyCommand_DELETE_PREV_WORD_instance = new KeyCommand('DELETE_PREV_WORD', 21, true);
    KeyCommand_DELETE_NEXT_WORD_instance = new KeyCommand('DELETE_NEXT_WORD', 22, true);
    KeyCommand_DELETE_FROM_LINE_START_instance = new KeyCommand('DELETE_FROM_LINE_START', 23, true);
    KeyCommand_DELETE_TO_LINE_END_instance = new KeyCommand('DELETE_TO_LINE_END', 24, true);
    KeyCommand_SELECT_ALL_instance = new KeyCommand('SELECT_ALL', 25, false);
    KeyCommand_SELECT_LEFT_CHAR_instance = new KeyCommand('SELECT_LEFT_CHAR', 26, false);
    KeyCommand_SELECT_RIGHT_CHAR_instance = new KeyCommand('SELECT_RIGHT_CHAR', 27, false);
    KeyCommand_SELECT_UP_instance = new KeyCommand('SELECT_UP', 28, false);
    KeyCommand_SELECT_DOWN_instance = new KeyCommand('SELECT_DOWN', 29, false);
    KeyCommand_SELECT_PAGE_UP_instance = new KeyCommand('SELECT_PAGE_UP', 30, false);
    KeyCommand_SELECT_PAGE_DOWN_instance = new KeyCommand('SELECT_PAGE_DOWN', 31, false);
    KeyCommand_SELECT_HOME_instance = new KeyCommand('SELECT_HOME', 32, false);
    KeyCommand_SELECT_END_instance = new KeyCommand('SELECT_END', 33, false);
    KeyCommand_SELECT_LEFT_WORD_instance = new KeyCommand('SELECT_LEFT_WORD', 34, false);
    KeyCommand_SELECT_RIGHT_WORD_instance = new KeyCommand('SELECT_RIGHT_WORD', 35, false);
    KeyCommand_SELECT_NEXT_PARAGRAPH_instance = new KeyCommand('SELECT_NEXT_PARAGRAPH', 36, false);
    KeyCommand_SELECT_PREV_PARAGRAPH_instance = new KeyCommand('SELECT_PREV_PARAGRAPH', 37, false);
    KeyCommand_SELECT_LINE_START_instance = new KeyCommand('SELECT_LINE_START', 38, false);
    KeyCommand_SELECT_LINE_END_instance = new KeyCommand('SELECT_LINE_END', 39, false);
    KeyCommand_SELECT_LINE_LEFT_instance = new KeyCommand('SELECT_LINE_LEFT', 40, false);
    KeyCommand_SELECT_LINE_RIGHT_instance = new KeyCommand('SELECT_LINE_RIGHT', 41, false);
    KeyCommand_DESELECT_instance = new KeyCommand('DESELECT', 42, false);
    KeyCommand_NEW_LINE_instance = new KeyCommand('NEW_LINE', 43, true);
    KeyCommand_TAB_instance = new KeyCommand('TAB', 44, true);
    KeyCommand_UNDO_instance = new KeyCommand('UNDO', 45, true);
    KeyCommand_REDO_instance = new KeyCommand('REDO', 46, true);
    KeyCommand_CHARACTER_PALETTE_instance = new KeyCommand('CHARACTER_PALETTE', 47, true);
  }
  var $ENTRIES_2;
  function KeyCommand(name, ordinal, editsText) {
    Enum.call(this, name, ordinal);
    this.editsText_1 = editsText;
  }
  protoOf(KeyCommand).get_editsText_m211rn_k$ = function () {
    return this.editsText_1;
  };
  function KeyCommand_LEFT_CHAR_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_LEFT_CHAR_instance;
  }
  function KeyCommand_RIGHT_CHAR_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_RIGHT_CHAR_instance;
  }
  function KeyCommand_RIGHT_WORD_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_RIGHT_WORD_instance;
  }
  function KeyCommand_LEFT_WORD_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_LEFT_WORD_instance;
  }
  function KeyCommand_NEXT_PARAGRAPH_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_NEXT_PARAGRAPH_instance;
  }
  function KeyCommand_PREV_PARAGRAPH_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_PREV_PARAGRAPH_instance;
  }
  function KeyCommand_LINE_START_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_LINE_START_instance;
  }
  function KeyCommand_LINE_END_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_LINE_END_instance;
  }
  function KeyCommand_LINE_LEFT_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_LINE_LEFT_instance;
  }
  function KeyCommand_LINE_RIGHT_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_LINE_RIGHT_instance;
  }
  function KeyCommand_UP_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_UP_instance;
  }
  function KeyCommand_DOWN_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_DOWN_instance;
  }
  function KeyCommand_PAGE_UP_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_PAGE_UP_instance;
  }
  function KeyCommand_PAGE_DOWN_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_PAGE_DOWN_instance;
  }
  function KeyCommand_HOME_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_HOME_instance;
  }
  function KeyCommand_END_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_END_instance;
  }
  function KeyCommand_COPY_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_COPY_instance;
  }
  function KeyCommand_PASTE_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_PASTE_instance;
  }
  function KeyCommand_CUT_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_CUT_instance;
  }
  function KeyCommand_DELETE_PREV_CHAR_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_DELETE_PREV_CHAR_instance;
  }
  function KeyCommand_DELETE_NEXT_CHAR_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_DELETE_NEXT_CHAR_instance;
  }
  function KeyCommand_DELETE_PREV_WORD_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_DELETE_PREV_WORD_instance;
  }
  function KeyCommand_DELETE_NEXT_WORD_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_DELETE_NEXT_WORD_instance;
  }
  function KeyCommand_DELETE_FROM_LINE_START_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_DELETE_FROM_LINE_START_instance;
  }
  function KeyCommand_DELETE_TO_LINE_END_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_DELETE_TO_LINE_END_instance;
  }
  function KeyCommand_SELECT_ALL_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_ALL_instance;
  }
  function KeyCommand_SELECT_LEFT_CHAR_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_LEFT_CHAR_instance;
  }
  function KeyCommand_SELECT_RIGHT_CHAR_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_RIGHT_CHAR_instance;
  }
  function KeyCommand_SELECT_UP_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_UP_instance;
  }
  function KeyCommand_SELECT_DOWN_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_DOWN_instance;
  }
  function KeyCommand_SELECT_PAGE_UP_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_PAGE_UP_instance;
  }
  function KeyCommand_SELECT_PAGE_DOWN_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_PAGE_DOWN_instance;
  }
  function KeyCommand_SELECT_HOME_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_HOME_instance;
  }
  function KeyCommand_SELECT_END_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_END_instance;
  }
  function KeyCommand_SELECT_LEFT_WORD_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_LEFT_WORD_instance;
  }
  function KeyCommand_SELECT_RIGHT_WORD_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_RIGHT_WORD_instance;
  }
  function KeyCommand_SELECT_NEXT_PARAGRAPH_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_NEXT_PARAGRAPH_instance;
  }
  function KeyCommand_SELECT_PREV_PARAGRAPH_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_PREV_PARAGRAPH_instance;
  }
  function KeyCommand_SELECT_LINE_START_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_LINE_START_instance;
  }
  function KeyCommand_SELECT_LINE_END_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_LINE_END_instance;
  }
  function KeyCommand_SELECT_LINE_LEFT_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_LINE_LEFT_instance;
  }
  function KeyCommand_SELECT_LINE_RIGHT_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_LINE_RIGHT_instance;
  }
  function KeyCommand_DESELECT_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_DESELECT_instance;
  }
  function KeyCommand_NEW_LINE_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_NEW_LINE_instance;
  }
  function KeyCommand_TAB_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_TAB_instance;
  }
  function KeyCommand_UNDO_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_UNDO_instance;
  }
  function KeyCommand_REDO_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_REDO_instance;
  }
  function KeyCommand_CHARACTER_PALETTE_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_CHARACTER_PALETTE_instance;
  }
  function get_defaultKeyMapping() {
    _init_properties_KeyMapping_kt__n34hqn();
    return defaultKeyMapping;
  }
  var defaultKeyMapping;
  function KeyMapping() {
  }
  function commonKeyMapping(shortcutModifier) {
    _init_properties_KeyMapping_kt__n34hqn();
    return new commonKeyMapping$1(shortcutModifier);
  }
  function defaultKeyMapping$2$1($common) {
    this.$common_1 = $common;
  }
  protoOf(defaultKeyMapping$2$1).map_6s0yk8_k$ = function (event) {
    var tmp;
    if (get_isShiftPressed(event) ? get_isCtrlPressed(event) : false) {
      var tmp0_subject = get_key_0(event);
      tmp = equals(tmp0_subject, MappedKeys_getInstance().get_DirectionLeft_f5x0wj_k$()) ? KeyCommand_SELECT_LEFT_WORD_getInstance() : equals(tmp0_subject, MappedKeys_getInstance().get_DirectionRight_91pt3q_k$()) ? KeyCommand_SELECT_RIGHT_WORD_getInstance() : equals(tmp0_subject, MappedKeys_getInstance().get_DirectionUp_jror7j_k$()) ? KeyCommand_SELECT_PREV_PARAGRAPH_getInstance() : equals(tmp0_subject, MappedKeys_getInstance().get_DirectionDown_8ppfns_k$()) ? KeyCommand_SELECT_NEXT_PARAGRAPH_getInstance() : null;
    } else if (get_isCtrlPressed(event)) {
      var tmp1_subject = get_key_0(event);
      tmp = equals(tmp1_subject, MappedKeys_getInstance().get_DirectionLeft_f5x0wj_k$()) ? KeyCommand_LEFT_WORD_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().get_DirectionRight_91pt3q_k$()) ? KeyCommand_RIGHT_WORD_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().get_DirectionUp_jror7j_k$()) ? KeyCommand_PREV_PARAGRAPH_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().get_DirectionDown_8ppfns_k$()) ? KeyCommand_NEXT_PARAGRAPH_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().get_H_w1wwpd_k$()) ? KeyCommand_DELETE_PREV_CHAR_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().get_Delete_uvctes_k$()) ? KeyCommand_DELETE_NEXT_WORD_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().get_Backspace_7jmd2y_k$()) ? KeyCommand_DELETE_PREV_WORD_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().get_Backslash_txp56r_k$()) ? KeyCommand_DESELECT_getInstance() : null;
    } else if (get_isShiftPressed(event)) {
      var tmp2_subject = get_key_0(event);
      tmp = equals(tmp2_subject, MappedKeys_getInstance().get_MoveHome_fdukcp_k$()) ? KeyCommand_SELECT_LINE_START_getInstance() : equals(tmp2_subject, MappedKeys_getInstance().get_MoveEnd_3fdenj_k$()) ? KeyCommand_SELECT_LINE_END_getInstance() : null;
    } else if (get_isAltPressed(event)) {
      var tmp3_subject = get_key_0(event);
      tmp = equals(tmp3_subject, MappedKeys_getInstance().get_Backspace_7jmd2y_k$()) ? KeyCommand_DELETE_FROM_LINE_START_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().get_Delete_uvctes_k$()) ? KeyCommand_DELETE_TO_LINE_END_getInstance() : null;
    } else {
      tmp = null;
    }
    var tmp4_elvis_lhs = tmp;
    return tmp4_elvis_lhs == null ? this.$common_1.map_6s0yk8_k$(event) : tmp4_elvis_lhs;
  };
  function commonKeyMapping$1($shortcutModifier) {
    this.$shortcutModifier_1 = $shortcutModifier;
  }
  protoOf(commonKeyMapping$1).map_6s0yk8_k$ = function (event) {
    var tmp;
    if (this.$shortcutModifier_1(new KeyEvent(event)) ? get_isShiftPressed(event) : false) {
      var tmp0_subject = get_key_0(event);
      tmp = equals(tmp0_subject, MappedKeys_getInstance().get_Z_mlmakf_k$()) ? KeyCommand_REDO_getInstance() : null;
    } else if (this.$shortcutModifier_1(new KeyEvent(event))) {
      var tmp1_subject = get_key_0(event);
      tmp = (equals(tmp1_subject, MappedKeys_getInstance().get_C_qsbemu_k$()) ? true : equals(tmp1_subject, MappedKeys_getInstance().get_Insert_sd5o5q_k$())) ? KeyCommand_COPY_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().get_V_wld3pf_k$()) ? KeyCommand_PASTE_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().get_X_7x2bun_k$()) ? KeyCommand_CUT_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().get_A_3qd7s8_k$()) ? KeyCommand_SELECT_ALL_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().get_Y_7c9zcw_k$()) ? KeyCommand_REDO_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().get_Z_mlmakf_k$()) ? KeyCommand_UNDO_getInstance() : null;
    } else if (get_isCtrlPressed(event)) {
      tmp = null;
    } else if (get_isShiftPressed(event)) {
      var tmp2_subject = get_key_0(event);
      tmp = equals(tmp2_subject, MappedKeys_getInstance().get_DirectionLeft_f5x0wj_k$()) ? KeyCommand_SELECT_LEFT_CHAR_getInstance() : equals(tmp2_subject, MappedKeys_getInstance().get_DirectionRight_91pt3q_k$()) ? KeyCommand_SELECT_RIGHT_CHAR_getInstance() : equals(tmp2_subject, MappedKeys_getInstance().get_DirectionUp_jror7j_k$()) ? KeyCommand_SELECT_UP_getInstance() : equals(tmp2_subject, MappedKeys_getInstance().get_DirectionDown_8ppfns_k$()) ? KeyCommand_SELECT_DOWN_getInstance() : equals(tmp2_subject, MappedKeys_getInstance().get_PageUp_4s7j3x_k$()) ? KeyCommand_SELECT_PAGE_UP_getInstance() : equals(tmp2_subject, MappedKeys_getInstance().get_PageDown_9hcgxi_k$()) ? KeyCommand_SELECT_PAGE_DOWN_getInstance() : equals(tmp2_subject, MappedKeys_getInstance().get_MoveHome_fdukcp_k$()) ? KeyCommand_SELECT_LINE_START_getInstance() : equals(tmp2_subject, MappedKeys_getInstance().get_MoveEnd_3fdenj_k$()) ? KeyCommand_SELECT_LINE_END_getInstance() : equals(tmp2_subject, MappedKeys_getInstance().get_Insert_sd5o5q_k$()) ? KeyCommand_PASTE_getInstance() : null;
    } else {
      var tmp3_subject = get_key_0(event);
      tmp = equals(tmp3_subject, MappedKeys_getInstance().get_DirectionLeft_f5x0wj_k$()) ? KeyCommand_LEFT_CHAR_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().get_DirectionRight_91pt3q_k$()) ? KeyCommand_RIGHT_CHAR_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().get_DirectionUp_jror7j_k$()) ? KeyCommand_UP_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().get_DirectionDown_8ppfns_k$()) ? KeyCommand_DOWN_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().get_PageUp_4s7j3x_k$()) ? KeyCommand_PAGE_UP_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().get_PageDown_9hcgxi_k$()) ? KeyCommand_PAGE_DOWN_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().get_MoveHome_fdukcp_k$()) ? KeyCommand_LINE_START_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().get_MoveEnd_3fdenj_k$()) ? KeyCommand_LINE_END_getInstance() : (equals(tmp3_subject, MappedKeys_getInstance().get_Enter_fkbexr_k$()) ? true : equals(tmp3_subject, MappedKeys_getInstance().get_NumPadEnter_viczta_k$())) ? KeyCommand_NEW_LINE_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().get_Backspace_7jmd2y_k$()) ? KeyCommand_DELETE_PREV_CHAR_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().get_Delete_uvctes_k$()) ? KeyCommand_DELETE_NEXT_CHAR_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().get_Paste_30cf6i_k$()) ? KeyCommand_PASTE_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().get_Cut_hvwmq1_k$()) ? KeyCommand_CUT_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().get_Copy_9iqqvm_k$()) ? KeyCommand_COPY_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().get_Tab_os2g9w_k$()) ? KeyCommand_TAB_getInstance() : null;
    }
    return tmp;
  };
  function isCtrlPressed$factory() {
    return getPropertyCallableRef('isCtrlPressed', 1, KProperty1, function (receiver) {
      return get_isCtrlPressed(receiver.nativeKeyEvent_1);
    }, null);
  }
  var properties_initialized_KeyMapping_kt_iql13l;
  function _init_properties_KeyMapping_kt__n34hqn() {
    if (!properties_initialized_KeyMapping_kt_iql13l) {
      properties_initialized_KeyMapping_kt_iql13l = true;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.text.defaultKeyMapping.<anonymous>' call
      var common = commonKeyMapping(isCtrlPressed$factory());
      defaultKeyMapping = new defaultKeyMapping$2$1(common);
    }
  }
  function TextDragObserver() {
  }
  function getParagraphBoundary(_this__u8e3s4, index) {
    return TextRange(findParagraphStart(_this__u8e3s4, index), findParagraphEnd(_this__u8e3s4, index));
  }
  function findParagraphStart(_this__u8e3s4, startIndex) {
    var inductionVariable = startIndex;
    if (1 <= inductionVariable)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        if (charSequenceGet(_this__u8e3s4, index - 1 | 0) === _Char___init__impl__6a9atx(10)) {
          return index;
        }
      }
       while (1 <= inductionVariable);
    return 0;
  }
  function findParagraphEnd(_this__u8e3s4, startIndex) {
    var inductionVariable = startIndex;
    var last = charSequenceLength(_this__u8e3s4);
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charSequenceGet(_this__u8e3s4, index) === _Char___init__impl__6a9atx(10)) {
          return index;
        }
      }
       while (inductionVariable < last);
    return charSequenceLength(_this__u8e3s4);
  }
  function ceilToIntPx(_this__u8e3s4) {
    // Inline function 'kotlin.math.roundToInt' call
    // Inline function 'kotlin.math.ceil' call
    var this_0 = Math.ceil(_this__u8e3s4);
    return roundToInt(this_0);
  }
  function get_cursorAnimationSpec() {
    _init_properties_TextFieldCursor_kt__1co4rz();
    return cursorAnimationSpec;
  }
  var cursorAnimationSpec;
  function cursorAnimationSpec$lambda($this$keyframes) {
    _init_properties_TextFieldCursor_kt__1co4rz();
    $this$keyframes.set_durationMillis_11l8vl_k$(1000);
    $this$keyframes.at_1dnb16_k$(1.0, 0);
    $this$keyframes.at_1dnb16_k$(1.0, 499);
    $this$keyframes.at_1dnb16_k$(0.0, 500);
    $this$keyframes.at_1dnb16_k$(0.0, 999);
    return Unit_getInstance();
  }
  var properties_initialized_TextFieldCursor_kt_tldnf7;
  function _init_properties_TextFieldCursor_kt__1co4rz() {
    if (!properties_initialized_TextFieldCursor_kt_tldnf7) {
      properties_initialized_TextFieldCursor_kt_tldnf7 = true;
      cursorAnimationSpec = infiniteRepeatable(keyframes(cursorAnimationSpec$lambda));
    }
  }
  function get_EmptyTextReplacement() {
    _init_properties_TextFieldDelegate_kt__lo6v7k();
    return EmptyTextReplacement;
  }
  var EmptyTextReplacement;
  function get_DefaultWidthCharCount() {
    return DefaultWidthCharCount;
  }
  var DefaultWidthCharCount;
  var properties_initialized_TextFieldDelegate_kt_1iol9a;
  function _init_properties_TextFieldDelegate_kt__lo6v7k() {
    if (!properties_initialized_TextFieldDelegate_kt_1iol9a) {
      properties_initialized_TextFieldDelegate_kt_1iol9a = true;
      EmptyTextReplacement = repeat('H', 10);
    }
  }
  function get_SNAPSHOTS_INTERVAL_MILLIS() {
    return SNAPSHOTS_INTERVAL_MILLIS;
  }
  var SNAPSHOTS_INTERVAL_MILLIS;
  function get_ValidatingEmptyOffsetMappingIdentity() {
    _init_properties_ValidatingOffsetMapping_kt__fcd8ty();
    return ValidatingEmptyOffsetMappingIdentity;
  }
  var ValidatingEmptyOffsetMappingIdentity;
  function _get_delegate__idh0py($this) {
    return $this.delegate_1;
  }
  function _get_originalLength__ld60x8($this) {
    return $this.originalLength_1;
  }
  function _get_transformedLength__kli3z4($this) {
    return $this.transformedLength_1;
  }
  function ValidatingOffsetMapping(delegate, originalLength, transformedLength) {
    this.delegate_1 = delegate;
    this.originalLength_1 = originalLength;
    this.transformedLength_1 = transformedLength;
  }
  protoOf(ValidatingOffsetMapping).originalToTransformed_qvujev_k$ = function (offset) {
    // Inline function 'kotlin.also' call
    var this_0 = this.delegate_1.originalToTransformed_qvujev_k$(offset);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.text.ValidatingOffsetMapping.originalToTransformed.<anonymous>' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= this_0 ? this_0 <= this.transformedLength_1 : false)) {
      // Inline function 'androidx.compose.foundation.text.ValidatingOffsetMapping.originalToTransformed.<anonymous>.<anonymous>' call
      var message = 'OffsetMapping.originalToTransformed returned invalid mapping: ' + ('' + offset + ' -> ' + this_0 + ' is not in range of transformed text ') + ('[0, ' + this.transformedLength_1 + ']');
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return this_0;
  };
  protoOf(ValidatingOffsetMapping).transformedToOriginal_hkmhr3_k$ = function (offset) {
    // Inline function 'kotlin.also' call
    var this_0 = this.delegate_1.transformedToOriginal_hkmhr3_k$(offset);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.text.ValidatingOffsetMapping.transformedToOriginal.<anonymous>' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= this_0 ? this_0 <= this.originalLength_1 : false)) {
      // Inline function 'androidx.compose.foundation.text.ValidatingOffsetMapping.transformedToOriginal.<anonymous>.<anonymous>' call
      var message = 'OffsetMapping.transformedToOriginal returned invalid mapping: ' + ('' + offset + ' -> ' + this_0 + ' is not in range of original text ') + ('[0, ' + this.originalLength_1 + ']');
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return this_0;
  };
  var properties_initialized_ValidatingOffsetMapping_kt_rllilk;
  function _init_properties_ValidatingOffsetMapping_kt__fcd8ty() {
    if (!properties_initialized_ValidatingOffsetMapping_kt_rllilk) {
      properties_initialized_ValidatingOffsetMapping_kt_rllilk = true;
      ValidatingEmptyOffsetMappingIdentity = new ValidatingOffsetMapping(Companion_getInstance_22().get_Identity_wza1cp_k$(), 0, 0);
    }
  }
  function _InlineDensity___init__impl__1m7u8m(packedValue) {
    return packedValue;
  }
  function _get_packedValue__aj623s_0($this) {
    return $this;
  }
  function _InlineDensity___init__impl__1m7u8m_0(density, fontScale) {
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toRawBits(density));
    var v2 = toLong(toRawBits(fontScale));
    var tmp$ret$0 = v1.shl_bg8if3_k$(32).or_v7fvkl_k$(v2.and_4spn93_k$(new Long(-1, 0)));
    return _InlineDensity___init__impl__1m7u8m(tmp$ret$0);
  }
  function _InlineDensity___init__impl__1m7u8m_1(density) {
    return _InlineDensity___init__impl__1m7u8m_0(density.get_density_qy0267_k$(), density.get_fontScale_h56n3i_k$());
  }
  function _InlineDensity___get_density__impl__uz12rr($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _get_packedValue__aj623s_0($this);
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var bits = value.shr_9fl3wl_k$(32).toInt_1tsl84_k$();
    return floatFromBits(bits);
  }
  function _InlineDensity___get_fontScale__impl__ao594c($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value = _get_packedValue__aj623s_0($this);
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var bits = value.and_4spn93_k$(new Long(-1, 0)).toInt_1tsl84_k$();
    return floatFromBits(bits);
  }
  function InlineDensity__toString_impl_9jhvwu($this) {
    return 'InlineDensity(density=' + _InlineDensity___get_density__impl__uz12rr($this) + ', fontScale=' + _InlineDensity___get_fontScale__impl__ao594c($this) + ')';
  }
  function Companion_8() {
    Companion_instance_8 = this;
    this.Unspecified_1 = _InlineDensity___init__impl__1m7u8m_0(FloatCompanionObject_getInstance().get_NaN_18jnv2_k$(), FloatCompanionObject_getInstance().get_NaN_18jnv2_k$());
  }
  protoOf(Companion_8).get_Unspecified_fq2dmh_k$ = function () {
    return this.Unspecified_1;
  };
  var Companion_instance_8;
  function Companion_getInstance_39() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function InlineDensity__hashCode_impl_vanspp($this) {
    return $this.hashCode();
  }
  function InlineDensity__equals_impl_ppdv5r($this, other) {
    if (!(other instanceof InlineDensity))
      return false;
    var tmp0_other_with_cast = other instanceof InlineDensity ? other.packedValue_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function InlineDensity(packedValue) {
    Companion_getInstance_39();
    this.packedValue_1 = packedValue;
  }
  protoOf(InlineDensity).toString = function () {
    return InlineDensity__toString_impl_9jhvwu(this.packedValue_1);
  };
  protoOf(InlineDensity).hashCode = function () {
    return InlineDensity__hashCode_impl_vanspp(this.packedValue_1);
  };
  protoOf(InlineDensity).equals = function (other) {
    return InlineDensity__equals_impl_ppdv5r(this.packedValue_1, other);
  };
  function fixedCoerceHeightAndWidthForBits(_this__u8e3s4, width, height) {
    // Inline function 'kotlin.comparisons.minOf' call
    var safeWidth = Math.min(width, 262142);
    var tmp;
    if (safeWidth < 8191) {
      // Inline function 'kotlin.comparisons.minOf' call
      tmp = Math.min(height, 262142);
    } else if (safeWidth < 32767) {
      // Inline function 'kotlin.comparisons.minOf' call
      tmp = Math.min(height, 65534);
    } else if (safeWidth < 65535) {
      // Inline function 'kotlin.comparisons.minOf' call
      tmp = Math.min(height, 32766);
    } else {
      // Inline function 'kotlin.comparisons.minOf' call
      tmp = Math.min(height, 8190);
    }
    var safeHeight = tmp;
    return _this__u8e3s4.fixed_rd8fwx_k$(safeWidth, safeHeight);
  }
  function finalConstraints(constraints, softWrap, overflow, maxIntrinsicWidth) {
    return Constraints(VOID, finalMaxWidth(constraints, softWrap, overflow, maxIntrinsicWidth), VOID, _Constraints___get_maxHeight__impl__dt3e8z(constraints));
  }
  function finalMaxLines(softWrap, overflow, maxLinesIn) {
    var overwriteMaxLines = !softWrap ? overflow === Companion_getInstance_20().get_Ellipsis_8ygjpt_k$() : false;
    return overwriteMaxLines ? 1 : coerceAtLeast(maxLinesIn, 1);
  }
  function get_BigConstraintValue() {
    return BigConstraintValue;
  }
  var BigConstraintValue;
  function get_TinyConstraintValue() {
    return TinyConstraintValue;
  }
  var TinyConstraintValue;
  function get_SmallConstraintValue() {
    return SmallConstraintValue;
  }
  var SmallConstraintValue;
  function get_MediumConstraintValue() {
    return MediumConstraintValue;
  }
  var MediumConstraintValue;
  function finalMaxWidth(constraints, softWrap, overflow, maxIntrinsicWidth) {
    var widthMatters = softWrap ? true : overflow === Companion_getInstance_20().get_Ellipsis_8ygjpt_k$();
    var tmp;
    if (widthMatters ? _Constraints___get_hasBoundedWidth__impl__7hd0wr(constraints) : false) {
      tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    } else {
      tmp = Companion_getInstance_12().get_Infinity_rvchkf_k$();
    }
    var maxWidth = tmp;
    var tmp_0;
    if (_Constraints___get_minWidth__impl__hi9lfi(constraints) === maxWidth) {
      tmp_0 = maxWidth;
    } else {
      tmp_0 = coerceIn(ceilToIntPx(maxIntrinsicWidth), _Constraints___get_minWidth__impl__hi9lfi(constraints), maxWidth);
    }
    return tmp_0;
  }
  function get_EmptyTextReplacement_0() {
    _init_properties_MinLinesConstrainer_kt__odtdjv();
    return EmptyTextReplacement_0;
  }
  var EmptyTextReplacement_0;
  function get_TwoLineTextReplacement() {
    _init_properties_MinLinesConstrainer_kt__odtdjv();
    return TwoLineTextReplacement;
  }
  var TwoLineTextReplacement;
  function get_DefaultWidthCharCount_0() {
    return DefaultWidthCharCount_0;
  }
  var DefaultWidthCharCount_0;
  function _set_last__9pwosh($this, _set____db54di) {
    $this.last_1 = _set____db54di;
  }
  function _get_last__d9oodx($this) {
    return $this.last_1;
  }
  function _get_resolvedStyle__vpg5zs($this) {
    return $this.resolvedStyle_1;
  }
  function _set_lineHeightCache__2kak6a($this, _set____db54di) {
    $this.lineHeightCache_1 = _set____db54di;
  }
  function _get_lineHeightCache__7jfnca($this) {
    return $this.lineHeightCache_1;
  }
  function _set_oneLineHeightCache__jjupl6($this, _set____db54di) {
    $this.oneLineHeightCache_1 = _set____db54di;
  }
  function _get_oneLineHeightCache__hje19m($this) {
    return $this.oneLineHeightCache_1;
  }
  function Companion_9() {
    Companion_instance_9 = this;
    this.last_1 = null;
  }
  protoOf(Companion_9).from_p6t2u3_k$ = function (minMaxUtil, layoutDirection, paramStyle, density, fontFamilyResolver) {
    if (minMaxUtil == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp;
      if (((layoutDirection.equals(minMaxUtil.layoutDirection_1) ? paramStyle.equals(minMaxUtil.inputTextStyle_1) : false) ? density.get_density_qy0267_k$() === minMaxUtil.density_1.get_density_qy0267_k$() : false) ? fontFamilyResolver === minMaxUtil.fontFamilyResolver_1 : false) {
        return minMaxUtil;
      }
    }
    var tmp1_safe_receiver = this.last_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      if (((layoutDirection.equals(tmp1_safe_receiver.layoutDirection_1) ? paramStyle.equals(tmp1_safe_receiver.inputTextStyle_1) : false) ? density.get_density_qy0267_k$() === tmp1_safe_receiver.density_1.get_density_qy0267_k$() : false) ? fontFamilyResolver === tmp1_safe_receiver.fontFamilyResolver_1 : false) {
        return tmp1_safe_receiver;
      }
    }
    // Inline function 'kotlin.also' call
    var this_0 = new MinLinesConstrainer(layoutDirection, resolveDefaults(paramStyle, layoutDirection), density, fontFamilyResolver);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.text.modifiers.Companion.from.<anonymous>' call
    Companion_getInstance_40().last_1 = this_0;
    return this_0;
  };
  var Companion_instance_9;
  function Companion_getInstance_40() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function MinLinesConstrainer(layoutDirection, inputTextStyle, density, fontFamilyResolver) {
    Companion_getInstance_40();
    this.layoutDirection_1 = layoutDirection;
    this.inputTextStyle_1 = inputTextStyle;
    this.density_1 = density;
    this.fontFamilyResolver_1 = fontFamilyResolver;
    this.resolvedStyle_1 = resolveDefaults(this.inputTextStyle_1, this.layoutDirection_1);
    this.lineHeightCache_1 = FloatCompanionObject_getInstance().get_NaN_18jnv2_k$();
    this.oneLineHeightCache_1 = FloatCompanionObject_getInstance().get_NaN_18jnv2_k$();
  }
  protoOf(MinLinesConstrainer).get_layoutDirection_7e37v0_k$ = function () {
    return this.layoutDirection_1;
  };
  protoOf(MinLinesConstrainer).get_inputTextStyle_5a5jj1_k$ = function () {
    return this.inputTextStyle_1;
  };
  protoOf(MinLinesConstrainer).get_density_qy0267_k$ = function () {
    return this.density_1;
  };
  protoOf(MinLinesConstrainer).get_fontFamilyResolver_9o0fjy_k$ = function () {
    return this.fontFamilyResolver_1;
  };
  protoOf(MinLinesConstrainer).coerceMinLines_5hh0sq_k$ = function (inConstraints, minLines) {
    var oneLineHeight = this.oneLineHeightCache_1;
    var lineHeight = this.lineHeightCache_1;
    if (isNaN_0(oneLineHeight) ? true : isNaN_0(lineHeight)) {
      oneLineHeight = Paragraph(get_EmptyTextReplacement_0(), this.resolvedStyle_1, Constraints(), this.density_1, this.fontFamilyResolver_1, VOID, VOID, 1, false).get_height_e7t92o_k$();
      var twoLineHeight = Paragraph(get_TwoLineTextReplacement(), this.resolvedStyle_1, Constraints(), this.density_1, this.fontFamilyResolver_1, VOID, VOID, 2, false).get_height_e7t92o_k$();
      lineHeight = twoLineHeight - oneLineHeight;
      this.oneLineHeightCache_1 = oneLineHeight;
      this.lineHeightCache_1 = lineHeight;
    }
    var tmp;
    if (!(minLines === 1)) {
      // Inline function 'kotlin.math.roundToInt' call
      var this_0 = oneLineHeight + lineHeight * (minLines - 1 | 0);
      var tmp$ret$0 = roundToInt(this_0);
      tmp = coerceAtMost(coerceAtLeast(tmp$ret$0, 0), _Constraints___get_maxHeight__impl__dt3e8z(inConstraints));
    } else {
      tmp = _Constraints___get_minHeight__impl__ev4bgx(inConstraints);
    }
    var minHeight = tmp;
    var tmp0_maxHeight = _Constraints___get_maxHeight__impl__dt3e8z(inConstraints);
    var tmp1_minWidth = _Constraints___get_minWidth__impl__hi9lfi(inConstraints);
    var tmp2_maxWidth = _Constraints___get_maxWidth__impl__uuyqc(inConstraints);
    return Constraints(tmp1_minWidth, tmp2_maxWidth, minHeight, tmp0_maxHeight);
  };
  var properties_initialized_MinLinesConstrainer_kt_uvu6cn;
  function _init_properties_MinLinesConstrainer_kt__odtdjv() {
    if (!properties_initialized_MinLinesConstrainer_kt_uvu6cn) {
      properties_initialized_MinLinesConstrainer_kt_uvu6cn = true;
      EmptyTextReplacement_0 = repeat('H', 10);
      TwoLineTextReplacement = get_EmptyTextReplacement_0() + '\n' + get_EmptyTextReplacement_0();
    }
  }
  function _set_text__9udp6y($this, _set____db54di) {
    $this.text_1 = _set____db54di;
  }
  function _get_text__de5ose($this) {
    return $this.text_1;
  }
  function _set_style__ksk9mc($this, _set____db54di) {
    $this.style_1 = _set____db54di;
  }
  function _get_style__b8k6v4($this) {
    return $this.style_1;
  }
  function _set_fontFamilyResolver__5u0s1q($this, _set____db54di) {
    $this.fontFamilyResolver_1 = _set____db54di;
  }
  function _get_fontFamilyResolver__s3uj2m($this) {
    return $this.fontFamilyResolver_1;
  }
  function _set_overflow__oq3c45($this, _set____db54di) {
    $this.overflow_1 = _set____db54di;
  }
  function _get_overflow__bx70nd($this) {
    return $this.overflow_1;
  }
  function _set_softWrap__2x2awz($this, _set____db54di) {
    $this.softWrap_1 = _set____db54di;
  }
  function _get_softWrap__9vu0jt($this) {
    return $this.softWrap_1;
  }
  function _set_maxLines__oa5ut8($this, _set____db54di) {
    $this.maxLines_1 = _set____db54di;
  }
  function _get_maxLines__bh9jcg($this) {
    return $this.maxLines_1;
  }
  function _set_minLines__xz1avq($this, _set____db54di) {
    $this.minLines_1 = _set____db54di;
  }
  function _get_minLines__o96fmm($this) {
    return $this.minLines_1;
  }
  function _set_placeholders__ty3289($this, _set____db54di) {
    $this.placeholders_1 = _set____db54di;
  }
  function _get_placeholders__eecbo5($this) {
    return $this.placeholders_1;
  }
  function _set_mMinLinesConstrainer__9asbu5($this, _set____db54di) {
    $this.mMinLinesConstrainer_1 = _set____db54di;
  }
  function _get_mMinLinesConstrainer__4nac67($this) {
    return $this.mMinLinesConstrainer_1;
  }
  function _set_lastDensity__go7pyl($this, _set____db54di) {
    $this.lastDensity_1 = _set____db54di;
  }
  function _get_lastDensity__dm6gdb($this) {
    return $this.lastDensity_1;
  }
  function _set_paragraphIntrinsics__adlsh5($this, _set____db54di) {
    $this.paragraphIntrinsics_1 = _set____db54di;
  }
  function _get_paragraphIntrinsics__noc1dh($this) {
    return $this.paragraphIntrinsics_1;
  }
  function _set_intrinsicsLayoutDirection__u1jmse($this, _set____db54di) {
    $this.intrinsicsLayoutDirection_1 = _set____db54di;
  }
  function _get_intrinsicsLayoutDirection__rsp3u2($this) {
    return $this.intrinsicsLayoutDirection_1;
  }
  function _set_layoutCache__ke8m8d($this, _set____db54di) {
    $this.layoutCache_1 = _set____db54di;
  }
  function _get_layoutCache__kch9ev($this) {
    return $this.layoutCache_1;
  }
  function _set_cachedIntrinsicHeightInputWidth__2wjptt($this, _set____db54di) {
    $this.cachedIntrinsicHeightInputWidth_1 = _set____db54di;
  }
  function _get_cachedIntrinsicHeightInputWidth__ysvvn9($this) {
    return $this.cachedIntrinsicHeightInputWidth_1;
  }
  function _set_cachedIntrinsicHeight__vh6lqd($this, _set____db54di) {
    $this.cachedIntrinsicHeight_1 = _set____db54di;
  }
  function _get_cachedIntrinsicHeight__xeb3t3($this) {
    return $this.cachedIntrinsicHeight_1;
  }
  function textLayoutResult($this, layoutDirection, finalConstraints, multiParagraph) {
    // Inline function 'kotlin.math.min' call
    var a = multiParagraph.get_intrinsics_1zqd0p_k$().get_maxIntrinsicWidth_b4gk2k_k$();
    var b = multiParagraph.get_width_j0q4yl_k$();
    var layoutWidth = Math.min(a, b);
    var tmp = $this.text_1;
    var tmp_0 = $this.style_1;
    // Inline function 'kotlin.collections.orEmpty' call
    var tmp0_elvis_lhs = $this.placeholders_1;
    var tmp$ret$1 = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
    return new TextLayoutResult(TextLayoutInput_init_$Create$(tmp, tmp_0, tmp$ret$1, $this.maxLines_1, $this.softWrap_1, $this.overflow_1, ensureNotNull($this.density_1), layoutDirection, $this.fontFamilyResolver_1, finalConstraints), multiParagraph, constrain(finalConstraints, IntSize(ceilToIntPx(layoutWidth), ceilToIntPx(multiParagraph.get_height_e7t92o_k$()))));
  }
  function setLayoutDirection($this, layoutDirection) {
    var localIntrinsics = $this.paragraphIntrinsics_1;
    var tmp;
    if ((localIntrinsics == null ? true : !layoutDirection.equals($this.intrinsicsLayoutDirection_1)) ? true : localIntrinsics.get_hasStaleResolvedFonts_tun9ic_k$()) {
      $this.intrinsicsLayoutDirection_1 = layoutDirection;
      var tmp0_annotatedString = $this.text_1;
      var tmp1_style = resolveDefaults($this.style_1, layoutDirection);
      var tmp2_density = ensureNotNull($this.density_1);
      var tmp3_fontFamilyResolver = $this.fontFamilyResolver_1;
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_elvis_lhs = $this.placeholders_1;
      var tmp4_placeholders = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
      tmp = new MultiParagraphIntrinsics(tmp0_annotatedString, tmp1_style, tmp4_placeholders, tmp2_density, tmp3_fontFamilyResolver);
    } else {
      tmp = localIntrinsics;
    }
    var intrinsics = tmp;
    $this.paragraphIntrinsics_1 = intrinsics;
    return intrinsics;
  }
  function layoutText($this, constraints, layoutDirection) {
    var localParagraphIntrinsics = setLayoutDirection($this, layoutDirection);
    return new MultiParagraph(localParagraphIntrinsics, finalConstraints(constraints, $this.softWrap_1, $this.overflow_1, localParagraphIntrinsics.get_maxIntrinsicWidth_b4gk2k_k$()), finalMaxLines($this.softWrap_1, $this.overflow_1, $this.maxLines_1), $this.overflow_1 === Companion_getInstance_20().get_Ellipsis_8ygjpt_k$());
  }
  function newLayoutWillBeDifferent(_this__u8e3s4, $this, constraints, layoutDirection) {
    if (_this__u8e3s4 == null)
      return true;
    if (_this__u8e3s4.get_multiParagraph_xte3we_k$().get_intrinsics_1zqd0p_k$().get_hasStaleResolvedFonts_tun9ic_k$())
      return true;
    if (!layoutDirection.equals(_this__u8e3s4.get_layoutInput_o7gjah_k$().get_layoutDirection_7e37v0_k$()))
      return true;
    if (equals(constraints, _this__u8e3s4.get_layoutInput_o7gjah_k$().get_constraints_y0yfdk_k$()))
      return false;
    if (!(_Constraints___get_maxWidth__impl__uuyqc(constraints) === _Constraints___get_maxWidth__impl__uuyqc(_this__u8e3s4.get_layoutInput_o7gjah_k$().get_constraints_y0yfdk_k$())))
      return true;
    if (_Constraints___get_maxHeight__impl__dt3e8z(constraints) < _this__u8e3s4.get_multiParagraph_xte3we_k$().get_height_e7t92o_k$() ? true : _this__u8e3s4.get_multiParagraph_xte3we_k$().get_didExceedMaxLines_xyxo57_k$()) {
      return true;
    }
    return false;
  }
  function maxWidth($this, constraints) {
    return finalMaxWidth(constraints, $this.softWrap_1, $this.overflow_1, ensureNotNull($this.paragraphIntrinsics_1).get_maxIntrinsicWidth_b4gk2k_k$());
  }
  function markDirty($this) {
    $this.paragraphIntrinsics_1 = null;
    $this.layoutCache_1 = null;
  }
  function MultiParagraphLayoutCache(text, style, fontFamilyResolver, overflow, softWrap, maxLines, minLines, placeholders) {
    overflow = overflow === VOID ? Companion_getInstance_20().get_Clip_ypf2ge_k$() : overflow;
    softWrap = softWrap === VOID ? true : softWrap;
    maxLines = maxLines === VOID ? IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$() : maxLines;
    minLines = minLines === VOID ? get_DefaultMinLines() : minLines;
    placeholders = placeholders === VOID ? null : placeholders;
    this.text_1 = text;
    this.style_1 = style;
    this.fontFamilyResolver_1 = fontFamilyResolver;
    this.overflow_1 = overflow;
    this.softWrap_1 = softWrap;
    this.maxLines_1 = maxLines;
    this.minLines_1 = minLines;
    this.placeholders_1 = placeholders;
    this.mMinLinesConstrainer_1 = null;
    this.lastDensity_1 = Companion_getInstance_39().get_Unspecified_fq2dmh_k$();
    this.density_1 = null;
    this.paragraphIntrinsics_1 = null;
    this.intrinsicsLayoutDirection_1 = null;
    this.layoutCache_1 = null;
    this.cachedIntrinsicHeightInputWidth_1 = -1;
    this.cachedIntrinsicHeight_1 = -1;
  }
  protoOf(MultiParagraphLayoutCache).set_density_7gu4pk_k$ = function (value) {
    var localField = this.density_1;
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.text.modifiers.MultiParagraphLayoutCache.<set-density>.<anonymous>' call
      tmp = _InlineDensity___init__impl__1m7u8m_1(value);
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    var tmp_1 = tmp1_elvis_lhs;
    if ((tmp_1 == null ? null : new InlineDensity(tmp_1)) == null) {
      tmp_0 = Companion_getInstance_39().get_Unspecified_fq2dmh_k$();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var newDensity = tmp_0;
    if (localField == null) {
      this.density_1 = value;
      this.lastDensity_1 = newDensity;
      return Unit_getInstance();
    }
    if (value == null ? true : !equals(this.lastDensity_1, newDensity)) {
      this.density_1 = value;
      this.lastDensity_1 = newDensity;
      markDirty(this);
    }
  };
  protoOf(MultiParagraphLayoutCache).get_density_qy0267_k$ = function () {
    return this.density_1;
  };
  protoOf(MultiParagraphLayoutCache).get_textLayoutResult_u0m931_k$ = function () {
    var tmp0_elvis_lhs = this.layoutCache_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('You must call layoutWithConstraints first');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MultiParagraphLayoutCache).get_layoutOrNull_xsv6sd_k$ = function () {
    return this.layoutCache_1;
  };
  protoOf(MultiParagraphLayoutCache).layoutWithConstraints_o6pal7_k$ = function (constraints, layoutDirection) {
    var tmp;
    if (this.minLines_1 > 1) {
      // Inline function 'kotlin.also' call
      var this_0 = Companion_getInstance_40().from_p6t2u3_k$(this.mMinLinesConstrainer_1, layoutDirection, this.style_1, ensureNotNull(this.density_1), this.fontFamilyResolver_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.text.modifiers.MultiParagraphLayoutCache.layoutWithConstraints.<anonymous>' call
      this.mMinLinesConstrainer_1 = this_0;
      var localMin = this_0;
      tmp = localMin.coerceMinLines_5hh0sq_k$(constraints, this.minLines_1);
    } else {
      tmp = constraints;
    }
    var finalConstraints = tmp;
    if (!newLayoutWillBeDifferent(this.layoutCache_1, this, finalConstraints, layoutDirection)) {
      if (equals(finalConstraints, ensureNotNull(this.layoutCache_1).get_layoutInput_o7gjah_k$().get_constraints_y0yfdk_k$()))
        return false;
      this.layoutCache_1 = textLayoutResult(this, layoutDirection, finalConstraints, ensureNotNull(this.layoutCache_1).get_multiParagraph_xte3we_k$());
      return true;
    }
    var multiParagraph = layoutText(this, finalConstraints, layoutDirection);
    this.layoutCache_1 = textLayoutResult(this, layoutDirection, finalConstraints, multiParagraph);
    return true;
  };
  protoOf(MultiParagraphLayoutCache).intrinsicHeight_gfnfj4_k$ = function (width, layoutDirection) {
    var localWidth = this.cachedIntrinsicHeightInputWidth_1;
    var localHeght = this.cachedIntrinsicHeight_1;
    if (width === localWidth ? !(localWidth === -1) : false)
      return localHeght;
    var result = ceilToIntPx(layoutText(this, Constraints(0, width, 0, Companion_getInstance_12().get_Infinity_rvchkf_k$()), layoutDirection).get_height_e7t92o_k$());
    this.cachedIntrinsicHeightInputWidth_1 = width;
    this.cachedIntrinsicHeight_1 = result;
    return result;
  };
  protoOf(MultiParagraphLayoutCache).update_73oe81_k$ = function (text, style, fontFamilyResolver, overflow, softWrap, maxLines, minLines, placeholders) {
    this.text_1 = text;
    this.style_1 = style;
    this.fontFamilyResolver_1 = fontFamilyResolver;
    this.overflow_1 = overflow;
    this.softWrap_1 = softWrap;
    this.maxLines_1 = maxLines;
    this.minLines_1 = minLines;
    this.placeholders_1 = placeholders;
    markDirty(this);
  };
  protoOf(MultiParagraphLayoutCache).maxIntrinsicWidth_n7cg3d_k$ = function (layoutDirection) {
    return ceilToIntPx(setLayoutDirection(this, layoutDirection).get_maxIntrinsicWidth_b4gk2k_k$());
  };
  protoOf(MultiParagraphLayoutCache).minIntrinsicWidth_qyw3vr_k$ = function (layoutDirection) {
    return ceilToIntPx(setLayoutDirection(this, layoutDirection).get_minIntrinsicWidth_lmc1rq_k$());
  };
  function _set_text__9udp6y_0($this, _set____db54di) {
    $this.text_1 = _set____db54di;
  }
  function _get_text__de5ose_0($this) {
    return $this.text_1;
  }
  function _set_style__ksk9mc_0($this, _set____db54di) {
    $this.style_1 = _set____db54di;
  }
  function _get_style__b8k6v4_0($this) {
    return $this.style_1;
  }
  function _set_fontFamilyResolver__5u0s1q_0($this, _set____db54di) {
    $this.fontFamilyResolver_1 = _set____db54di;
  }
  function _get_fontFamilyResolver__s3uj2m_0($this) {
    return $this.fontFamilyResolver_1;
  }
  function _set_overflow__oq3c45_0($this, _set____db54di) {
    $this.overflow_1 = _set____db54di;
  }
  function _get_overflow__bx70nd_0($this) {
    return $this.overflow_1;
  }
  function _set_softWrap__2x2awz_0($this, _set____db54di) {
    $this.softWrap_1 = _set____db54di;
  }
  function _get_softWrap__9vu0jt_0($this) {
    return $this.softWrap_1;
  }
  function _set_maxLines__oa5ut8_0($this, _set____db54di) {
    $this.maxLines_1 = _set____db54di;
  }
  function _get_maxLines__bh9jcg_0($this) {
    return $this.maxLines_1;
  }
  function _set_minLines__xz1avq_0($this, _set____db54di) {
    $this.minLines_1 = _set____db54di;
  }
  function _get_minLines__o96fmm_0($this) {
    return $this.minLines_1;
  }
  function _set_lastDensity__go7pyl_0($this, _set____db54di) {
    $this.lastDensity_1 = _set____db54di;
  }
  function _get_lastDensity__dm6gdb_0($this) {
    return $this.lastDensity_1;
  }
  function _set_mMinLinesConstrainer__9asbu5_0($this, _set____db54di) {
    $this.mMinLinesConstrainer_1 = _set____db54di;
  }
  function _get_mMinLinesConstrainer__4nac67_0($this) {
    return $this.mMinLinesConstrainer_1;
  }
  function _set_paragraphIntrinsics__adlsh5_0($this, _set____db54di) {
    $this.paragraphIntrinsics_1 = _set____db54di;
  }
  function _get_paragraphIntrinsics__noc1dh_0($this) {
    return $this.paragraphIntrinsics_1;
  }
  function _set_intrinsicsLayoutDirection__u1jmse_0($this, _set____db54di) {
    $this.intrinsicsLayoutDirection_1 = _set____db54di;
  }
  function _get_intrinsicsLayoutDirection__rsp3u2_0($this) {
    return $this.intrinsicsLayoutDirection_1;
  }
  function _set_prevConstraints__t33672($this, _set____db54di) {
    $this.prevConstraints_1 = _set____db54di;
  }
  function _get_prevConstraints__izcyoi($this) {
    return $this.prevConstraints_1;
  }
  function _set_cachedIntrinsicHeightInputWidth__2wjptt_0($this, _set____db54di) {
    $this.cachedIntrinsicHeightInputWidth_1 = _set____db54di;
  }
  function _get_cachedIntrinsicHeightInputWidth__ysvvn9_0($this) {
    return $this.cachedIntrinsicHeightInputWidth_1;
  }
  function _set_cachedIntrinsicHeight__vh6lqd_0($this, _set____db54di) {
    $this.cachedIntrinsicHeight_1 = _set____db54di;
  }
  function _get_cachedIntrinsicHeight__xeb3t3_0($this) {
    return $this.cachedIntrinsicHeight_1;
  }
  function setLayoutDirection_0($this, layoutDirection) {
    var localIntrinsics = $this.paragraphIntrinsics_1;
    var tmp;
    if ((localIntrinsics == null ? true : !layoutDirection.equals($this.intrinsicsLayoutDirection_1)) ? true : localIntrinsics.get_hasStaleResolvedFonts_tun9ic_k$()) {
      $this.intrinsicsLayoutDirection_1 = layoutDirection;
      tmp = ParagraphIntrinsics($this.text_1, resolveDefaults($this.style_1, layoutDirection), VOID, VOID, ensureNotNull($this.density_1), $this.fontFamilyResolver_1);
    } else {
      tmp = localIntrinsics;
    }
    var intrinsics = tmp;
    $this.paragraphIntrinsics_1 = intrinsics;
    return intrinsics;
  }
  function layoutText_0($this, constraints, layoutDirection) {
    var localParagraphIntrinsics = setLayoutDirection_0($this, layoutDirection);
    return Paragraph_0(localParagraphIntrinsics, finalConstraints(constraints, $this.softWrap_1, $this.overflow_1, localParagraphIntrinsics.get_maxIntrinsicWidth_b4gk2k_k$()), finalMaxLines($this.softWrap_1, $this.overflow_1, $this.maxLines_1), $this.overflow_1 === Companion_getInstance_20().get_Ellipsis_8ygjpt_k$());
  }
  function newLayoutWillBeDifferent_0($this, constraints, layoutDirection) {
    var tmp0_elvis_lhs = $this.paragraph_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return true;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var localParagraph = tmp;
    var tmp1_elvis_lhs = $this.paragraphIntrinsics_1;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return true;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var localParagraphIntrinsics = tmp_0;
    if (localParagraphIntrinsics.get_hasStaleResolvedFonts_tun9ic_k$())
      return true;
    if (!layoutDirection.equals($this.intrinsicsLayoutDirection_1))
      return true;
    if (equals(constraints, $this.prevConstraints_1))
      return false;
    if (!(_Constraints___get_maxWidth__impl__uuyqc(constraints) === _Constraints___get_maxWidth__impl__uuyqc($this.prevConstraints_1)))
      return true;
    if (_Constraints___get_maxHeight__impl__dt3e8z(constraints) < localParagraph.get_height_e7t92o_k$() ? true : localParagraph.get_didExceedMaxLines_xyxo57_k$()) {
      return true;
    }
    return false;
  }
  function markDirty_0($this) {
    $this.paragraph_1 = null;
    $this.paragraphIntrinsics_1 = null;
    $this.intrinsicsLayoutDirection_1 = null;
    $this.cachedIntrinsicHeightInputWidth_1 = -1;
    $this.cachedIntrinsicHeight_1 = -1;
    $this.prevConstraints_1 = Companion_getInstance_12().fixed_rd8fwx_k$(0, 0);
    $this.layoutSize_1 = IntSize(0, 0);
    $this.didOverflow_1 = false;
  }
  function ParagraphLayoutCache(text, style, fontFamilyResolver, overflow, softWrap, maxLines, minLines) {
    overflow = overflow === VOID ? Companion_getInstance_20().get_Clip_ypf2ge_k$() : overflow;
    softWrap = softWrap === VOID ? true : softWrap;
    maxLines = maxLines === VOID ? IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$() : maxLines;
    minLines = minLines === VOID ? get_DefaultMinLines() : minLines;
    this.text_1 = text;
    this.style_1 = style;
    this.fontFamilyResolver_1 = fontFamilyResolver;
    this.overflow_1 = overflow;
    this.softWrap_1 = softWrap;
    this.maxLines_1 = maxLines;
    this.minLines_1 = minLines;
    this.lastDensity_1 = Companion_getInstance_39().get_Unspecified_fq2dmh_k$();
    this.density_1 = null;
    this.paragraph_1 = null;
    this.didOverflow_1 = false;
    this.layoutSize_1 = IntSize(0, 0);
    this.mMinLinesConstrainer_1 = null;
    this.paragraphIntrinsics_1 = null;
    this.intrinsicsLayoutDirection_1 = null;
    this.prevConstraints_1 = Companion_getInstance_12().fixed_rd8fwx_k$(0, 0);
    this.cachedIntrinsicHeightInputWidth_1 = -1;
    this.cachedIntrinsicHeight_1 = -1;
  }
  protoOf(ParagraphLayoutCache).set_density_7gu4pk_k$ = function (value) {
    var localField = this.density_1;
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.text.modifiers.ParagraphLayoutCache.<set-density>.<anonymous>' call
      tmp = _InlineDensity___init__impl__1m7u8m_1(value);
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    var tmp_1 = tmp1_elvis_lhs;
    if ((tmp_1 == null ? null : new InlineDensity(tmp_1)) == null) {
      tmp_0 = Companion_getInstance_39().get_Unspecified_fq2dmh_k$();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var newDensity = tmp_0;
    if (localField == null) {
      this.density_1 = value;
      this.lastDensity_1 = newDensity;
      return Unit_getInstance();
    }
    if (value == null ? true : !equals(this.lastDensity_1, newDensity)) {
      this.density_1 = value;
      this.lastDensity_1 = newDensity;
      markDirty_0(this);
    }
  };
  protoOf(ParagraphLayoutCache).get_density_qy0267_k$ = function () {
    return this.density_1;
  };
  protoOf(ParagraphLayoutCache).get_observeFontChanges_cebiwh_k$ = function () {
    var tmp0_safe_receiver = this.paragraphIntrinsics_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.get_hasStaleResolvedFonts_tun9ic_k$();
  };
  protoOf(ParagraphLayoutCache).set_paragraph_de00me_k$ = function (_set____db54di) {
    this.paragraph_1 = _set____db54di;
  };
  protoOf(ParagraphLayoutCache).get_paragraph_ua17wb_k$ = function () {
    return this.paragraph_1;
  };
  protoOf(ParagraphLayoutCache).set_didOverflow_717lzl_k$ = function (_set____db54di) {
    this.didOverflow_1 = _set____db54di;
  };
  protoOf(ParagraphLayoutCache).get_didOverflow_rtzd1k_k$ = function () {
    return this.didOverflow_1;
  };
  protoOf(ParagraphLayoutCache).set_layoutSize_1wxcqp_k$ = function (_set____db54di) {
    this.layoutSize_1 = _set____db54di;
  };
  protoOf(ParagraphLayoutCache).get_layoutSize_k9ow6t_k$ = function () {
    return this.layoutSize_1;
  };
  protoOf(ParagraphLayoutCache).layoutWithConstraints_o6pal7_k$ = function (constraints, layoutDirection) {
    var tmp;
    if (this.minLines_1 > 1) {
      // Inline function 'kotlin.also' call
      var this_0 = Companion_getInstance_40().from_p6t2u3_k$(this.mMinLinesConstrainer_1, layoutDirection, this.style_1, ensureNotNull(this.density_1), this.fontFamilyResolver_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.text.modifiers.ParagraphLayoutCache.layoutWithConstraints.<anonymous>' call
      this.mMinLinesConstrainer_1 = this_0;
      var localMin = this_0;
      tmp = localMin.coerceMinLines_5hh0sq_k$(constraints, this.minLines_1);
    } else {
      tmp = constraints;
    }
    var finalConstraints = tmp;
    if (!newLayoutWillBeDifferent_0(this, finalConstraints, layoutDirection)) {
      if (!equals(finalConstraints, this.prevConstraints_1)) {
        var localParagraph = ensureNotNull(this.paragraph_1);
        // Inline function 'kotlin.math.min' call
        var a = localParagraph.get_maxIntrinsicWidth_b4gk2k_k$();
        var b = localParagraph.get_width_j0q4yl_k$();
        var layoutWidth = Math.min(a, b);
        var localSize = constrain(finalConstraints, IntSize(ceilToIntPx(layoutWidth), ceilToIntPx(localParagraph.get_height_e7t92o_k$())));
        this.layoutSize_1 = localSize;
        this.didOverflow_1 = !(this.overflow_1 === Companion_getInstance_20().get_Visible_m15n1a_k$()) ? _IntSize___get_width__impl__d9yl4o(localSize) < localParagraph.get_width_j0q4yl_k$() ? true : _IntSize___get_height__impl__prv63b(localSize) < localParagraph.get_height_e7t92o_k$() : false;
        this.prevConstraints_1 = finalConstraints;
      }
      return false;
    }
    var tmp_0 = this;
    // Inline function 'kotlin.also' call
    var this_1 = layoutText_0(this, finalConstraints, layoutDirection);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.text.modifiers.ParagraphLayoutCache.layoutWithConstraints.<anonymous>' call
    this.prevConstraints_1 = finalConstraints;
    var localSize_0 = constrain(finalConstraints, IntSize(ceilToIntPx(this_1.get_width_j0q4yl_k$()), ceilToIntPx(this_1.get_height_e7t92o_k$())));
    this.layoutSize_1 = localSize_0;
    this.didOverflow_1 = !(this.overflow_1 === Companion_getInstance_20().get_Visible_m15n1a_k$()) ? _IntSize___get_width__impl__d9yl4o(localSize_0) < this_1.get_width_j0q4yl_k$() ? true : _IntSize___get_height__impl__prv63b(localSize_0) < this_1.get_height_e7t92o_k$() : false;
    tmp_0.paragraph_1 = this_1;
    return true;
  };
  protoOf(ParagraphLayoutCache).intrinsicHeight_gfnfj4_k$ = function (width, layoutDirection) {
    var localWidth = this.cachedIntrinsicHeightInputWidth_1;
    var localHeght = this.cachedIntrinsicHeight_1;
    if (width === localWidth ? !(localWidth === -1) : false)
      return localHeght;
    var result = ceilToIntPx(layoutText_0(this, Constraints(0, width, 0, Companion_getInstance_12().get_Infinity_rvchkf_k$()), layoutDirection).get_height_e7t92o_k$());
    this.cachedIntrinsicHeightInputWidth_1 = width;
    this.cachedIntrinsicHeight_1 = result;
    return result;
  };
  protoOf(ParagraphLayoutCache).update_itxc3q_k$ = function (text, style, fontFamilyResolver, overflow, softWrap, maxLines, minLines) {
    this.text_1 = text;
    this.style_1 = style;
    this.fontFamilyResolver_1 = fontFamilyResolver;
    this.overflow_1 = overflow;
    this.softWrap_1 = softWrap;
    this.maxLines_1 = maxLines;
    this.minLines_1 = minLines;
    markDirty_0(this);
  };
  protoOf(ParagraphLayoutCache).slowCreateTextLayoutResultOrNull_vc1pp7_k$ = function (style) {
    var tmp0_elvis_lhs = this.intrinsicsLayoutDirection_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var localLayoutDirection = tmp;
    var tmp1_elvis_lhs = this.density_1;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var localDensity = tmp_0;
    var annotatedString = AnnotatedString_init_$Create$(this.text_1);
    if (this.paragraph_1 == null)
      return null;
    if (this.paragraphIntrinsics_1 == null)
      return null;
    var finalConstraints = Constraints__copy$default_impl_f452rp(this.prevConstraints_1, 0, VOID, 0);
    return new TextLayoutResult(TextLayoutInput_init_$Create$(annotatedString, style, emptyList(), this.maxLines_1, this.softWrap_1, this.overflow_1, localDensity, localLayoutDirection, this.fontFamilyResolver_1, finalConstraints), new MultiParagraph(new MultiParagraphIntrinsics(annotatedString, style, emptyList(), localDensity, this.fontFamilyResolver_1), finalConstraints, this.maxLines_1, this.overflow_1 === Companion_getInstance_20().get_Ellipsis_8ygjpt_k$()), this.layoutSize_1);
  };
  protoOf(ParagraphLayoutCache).minIntrinsicWidth_qyw3vr_k$ = function (layoutDirection) {
    return ceilToIntPx(setLayoutDirection_0(this, layoutDirection).get_minIntrinsicWidth_lmc1rq_k$());
  };
  protoOf(ParagraphLayoutCache).maxIntrinsicWidth_n7cg3d_k$ = function (layoutDirection) {
    return ceilToIntPx(setLayoutDirection_0(this, layoutDirection).get_maxIntrinsicWidth_b4gk2k_k$());
  };
  function _get_text__de5ose_1($this) {
    return $this.text_1;
  }
  function _get_style__b8k6v4_1($this) {
    return $this.style_1;
  }
  function _get_fontFamilyResolver__s3uj2m_1($this) {
    return $this.fontFamilyResolver_1;
  }
  function _get_onTextLayout__ayil7v($this) {
    return $this.onTextLayout_1;
  }
  function _get_overflow__bx70nd_1($this) {
    return $this.overflow_1;
  }
  function _get_softWrap__9vu0jt_1($this) {
    return $this.softWrap_1;
  }
  function _get_maxLines__bh9jcg_1($this) {
    return $this.maxLines_1;
  }
  function _get_minLines__o96fmm_1($this) {
    return $this.minLines_1;
  }
  function _get_placeholders__eecbo5_0($this) {
    return $this.placeholders_1;
  }
  function _get_onPlaceholderLayout__10vzzn($this) {
    return $this.onPlaceholderLayout_1;
  }
  function _get_selectionController__4m8zt5($this) {
    return $this.selectionController_1;
  }
  function _get_color__iw9cfm_0($this) {
    return $this.color_1;
  }
  function component1_2($this) {
    return $this.text_1;
  }
  function component2_0($this) {
    return $this.style_1;
  }
  function component3_0($this) {
    return $this.fontFamilyResolver_1;
  }
  function component4_0($this) {
    return $this.onTextLayout_1;
  }
  function component5($this) {
    return $this.overflow_1;
  }
  function component6($this) {
    return $this.softWrap_1;
  }
  function component7($this) {
    return $this.maxLines_1;
  }
  function component8($this) {
    return $this.minLines_1;
  }
  function component9($this) {
    return $this.placeholders_1;
  }
  function component10($this) {
    return $this.onPlaceholderLayout_1;
  }
  function component11($this) {
    return $this.selectionController_1;
  }
  function component12($this) {
    return $this.color_1;
  }
  function SelectableTextAnnotatedStringElement(text, style, fontFamilyResolver, onTextLayout, overflow, softWrap, maxLines, minLines, placeholders, onPlaceholderLayout, selectionController, color) {
    onTextLayout = onTextLayout === VOID ? null : onTextLayout;
    overflow = overflow === VOID ? Companion_getInstance_20().get_Clip_ypf2ge_k$() : overflow;
    softWrap = softWrap === VOID ? true : softWrap;
    maxLines = maxLines === VOID ? IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$() : maxLines;
    minLines = minLines === VOID ? get_DefaultMinLines() : minLines;
    placeholders = placeholders === VOID ? null : placeholders;
    onPlaceholderLayout = onPlaceholderLayout === VOID ? null : onPlaceholderLayout;
    selectionController = selectionController === VOID ? null : selectionController;
    color = color === VOID ? null : color;
    ModifierNodeElement.call(this);
    this.text_1 = text;
    this.style_1 = style;
    this.fontFamilyResolver_1 = fontFamilyResolver;
    this.onTextLayout_1 = onTextLayout;
    this.overflow_1 = overflow;
    this.softWrap_1 = softWrap;
    this.maxLines_1 = maxLines;
    this.minLines_1 = minLines;
    this.placeholders_1 = placeholders;
    this.onPlaceholderLayout_1 = onPlaceholderLayout;
    this.selectionController_1 = selectionController;
    this.color_1 = color;
  }
  protoOf(SelectableTextAnnotatedStringElement).create_md4cuc_k$ = function () {
    return new SelectableTextAnnotatedStringNode(this.text_1, this.style_1, this.fontFamilyResolver_1, this.onTextLayout_1, this.overflow_1, this.softWrap_1, this.maxLines_1, this.minLines_1, this.placeholders_1, this.onPlaceholderLayout_1, this.selectionController_1, this.color_1);
  };
  protoOf(SelectableTextAnnotatedStringElement).update_xk16vj_k$ = function (node) {
    node.update_bykz92_k$(this.text_1, this.style_1, this.placeholders_1, this.minLines_1, this.maxLines_1, this.softWrap_1, this.fontFamilyResolver_1, this.overflow_1, this.onTextLayout_1, this.onPlaceholderLayout_1, this.selectionController_1, this.color_1);
  };
  protoOf(SelectableTextAnnotatedStringElement).update_9wd57p_k$ = function (node) {
    return this.update_xk16vj_k$(node instanceof SelectableTextAnnotatedStringNode ? node : THROW_CCE());
  };
  protoOf(SelectableTextAnnotatedStringElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SelectableTextAnnotatedStringElement))
      return false;
    if (!equals(this.color_1, other.color_1))
      return false;
    if (!this.text_1.equals(other.text_1))
      return false;
    if (!this.style_1.equals(other.style_1))
      return false;
    if (!equals(this.placeholders_1, other.placeholders_1))
      return false;
    if (!equals(this.fontFamilyResolver_1, other.fontFamilyResolver_1))
      return false;
    if (!equals(this.onTextLayout_1, other.onTextLayout_1))
      return false;
    if (!(this.overflow_1 === other.overflow_1))
      return false;
    if (!(this.softWrap_1 === other.softWrap_1))
      return false;
    if (!(this.maxLines_1 === other.maxLines_1))
      return false;
    if (!(this.minLines_1 === other.minLines_1))
      return false;
    if (!equals(this.onPlaceholderLayout_1, other.onPlaceholderLayout_1))
      return false;
    if (!equals(this.selectionController_1, other.selectionController_1))
      return false;
    return true;
  };
  protoOf(SelectableTextAnnotatedStringElement).hashCode = function () {
    var result = this.text_1.hashCode();
    result = imul(31, result) + this.style_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.fontFamilyResolver_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.onTextLayout_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + TextOverflow__hashCode_impl_kqdwgt(this.overflow_1) | 0;
    result = imul(31, result) + getBooleanHashCode(this.softWrap_1) | 0;
    result = imul(31, result) + this.maxLines_1 | 0;
    result = imul(31, result) + this.minLines_1 | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.placeholders_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : hashCode(tmp2_safe_receiver);
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_1 = imul(31, result);
    var tmp4_safe_receiver = this.onPlaceholderLayout_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : hashCode(tmp4_safe_receiver);
    result = tmp_1 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    var tmp_2 = imul(31, result);
    var tmp6_safe_receiver = this.selectionController_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : hashCode(tmp6_safe_receiver);
    result = tmp_2 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    var tmp_3 = imul(31, result);
    var tmp8_safe_receiver = this.color_1;
    var tmp9_elvis_lhs = tmp8_safe_receiver == null ? null : hashCode(tmp8_safe_receiver);
    result = tmp_3 + (tmp9_elvis_lhs == null ? 0 : tmp9_elvis_lhs) | 0;
    return result;
  };
  protoOf(SelectableTextAnnotatedStringElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
  };
  protoOf(SelectableTextAnnotatedStringElement).copy_hgpfy6_k$ = function (text, style, fontFamilyResolver, onTextLayout, overflow, softWrap, maxLines, minLines, placeholders, onPlaceholderLayout, selectionController, color) {
    return new SelectableTextAnnotatedStringElement(text, style, fontFamilyResolver, onTextLayout, overflow, softWrap, maxLines, minLines, placeholders, onPlaceholderLayout, selectionController, color);
  };
  protoOf(SelectableTextAnnotatedStringElement).copy$default_c4bq5r_k$ = function (text, style, fontFamilyResolver, onTextLayout, overflow, softWrap, maxLines, minLines, placeholders, onPlaceholderLayout, selectionController, color, $super) {
    text = text === VOID ? this.text_1 : text;
    style = style === VOID ? this.style_1 : style;
    fontFamilyResolver = fontFamilyResolver === VOID ? this.fontFamilyResolver_1 : fontFamilyResolver;
    onTextLayout = onTextLayout === VOID ? this.onTextLayout_1 : onTextLayout;
    overflow = overflow === VOID ? this.overflow_1 : overflow;
    softWrap = softWrap === VOID ? this.softWrap_1 : softWrap;
    maxLines = maxLines === VOID ? this.maxLines_1 : maxLines;
    minLines = minLines === VOID ? this.minLines_1 : minLines;
    placeholders = placeholders === VOID ? this.placeholders_1 : placeholders;
    onPlaceholderLayout = onPlaceholderLayout === VOID ? this.onPlaceholderLayout_1 : onPlaceholderLayout;
    selectionController = selectionController === VOID ? this.selectionController_1 : selectionController;
    color = color === VOID ? this.color_1 : color;
    return $super === VOID ? this.copy_hgpfy6_k$(text, style, fontFamilyResolver, onTextLayout, overflow, softWrap, maxLines, minLines, placeholders, onPlaceholderLayout, selectionController, color) : $super.copy_hgpfy6_k$.call(this, text, style, fontFamilyResolver, onTextLayout, new TextOverflow(overflow), softWrap, maxLines, minLines, placeholders, onPlaceholderLayout, selectionController, color);
  };
  protoOf(SelectableTextAnnotatedStringElement).toString = function () {
    return 'SelectableTextAnnotatedStringElement(text=' + this.text_1 + ', style=' + this.style_1 + ', fontFamilyResolver=' + this.fontFamilyResolver_1 + ', onTextLayout=' + this.onTextLayout_1 + ', overflow=' + new TextOverflow(this.overflow_1) + ', softWrap=' + this.softWrap_1 + ', maxLines=' + this.maxLines_1 + ', minLines=' + this.minLines_1 + ', placeholders=' + this.placeholders_1 + ', onPlaceholderLayout=' + this.onPlaceholderLayout_1 + ', selectionController=' + this.selectionController_1 + ', color=' + this.color_1 + ')';
  };
  function _set_selectionController__8oh937($this, _set____db54di) {
    $this.selectionController_1 = _set____db54di;
  }
  function _get_selectionController__4m8zt5_0($this) {
    return $this.selectionController_1;
  }
  function _get_delegate__idh0py_0($this) {
    return $this.delegate_2;
  }
  function SelectableTextAnnotatedStringNode(text, style, fontFamilyResolver, onTextLayout, overflow, softWrap, maxLines, minLines, placeholders, onPlaceholderLayout, selectionController, overrideColor) {
    onTextLayout = onTextLayout === VOID ? null : onTextLayout;
    overflow = overflow === VOID ? Companion_getInstance_20().get_Clip_ypf2ge_k$() : overflow;
    softWrap = softWrap === VOID ? true : softWrap;
    maxLines = maxLines === VOID ? IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$() : maxLines;
    minLines = minLines === VOID ? get_DefaultMinLines() : minLines;
    placeholders = placeholders === VOID ? null : placeholders;
    onPlaceholderLayout = onPlaceholderLayout === VOID ? null : onPlaceholderLayout;
    selectionController = selectionController === VOID ? null : selectionController;
    overrideColor = overrideColor === VOID ? null : overrideColor;
    DelegatingNode.call(this);
    this.selectionController_1 = selectionController;
    this.delegate_2 = this.delegate_x7rm2e_k$(new TextAnnotatedStringNode(text, style, fontFamilyResolver, onTextLayout, overflow, softWrap, maxLines, minLines, placeholders, onPlaceholderLayout, this.selectionController_1, overrideColor));
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (this.selectionController_1 == null) {
        // Inline function 'androidx.compose.foundation.text.modifiers.SelectableTextAnnotatedStringNode.<anonymous>' call
        var message = 'Do not use SelectionCapableStaticTextModifier unless selectionController != null';
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        break $l$block;
      }
    }
  }
  protoOf(SelectableTextAnnotatedStringNode).onGloballyPositioned_2kw3tl_k$ = function (coordinates) {
    var tmp0_safe_receiver = this.selectionController_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateGlobalPosition_2yvxid_k$(coordinates);
    }
  };
  protoOf(SelectableTextAnnotatedStringNode).draw_2h95cs_k$ = function (_this__u8e3s4) {
    return this.delegate_2.drawNonExtension_tbnko0_k$(_this__u8e3s4);
  };
  protoOf(SelectableTextAnnotatedStringNode).measure_z885gt_k$ = function (_this__u8e3s4, measurable, constraints) {
    return this.delegate_2.measureNonExtension_5ksqq7_k$(_this__u8e3s4, measurable, constraints);
  };
  protoOf(SelectableTextAnnotatedStringNode).minIntrinsicWidth_nsvhwg_k$ = function (_this__u8e3s4, measurable, height) {
    return this.delegate_2.minIntrinsicWidthNonExtension_i6vajg_k$(_this__u8e3s4, measurable, height);
  };
  protoOf(SelectableTextAnnotatedStringNode).minIntrinsicHeight_xt6ly1_k$ = function (_this__u8e3s4, measurable, width) {
    return this.delegate_2.minIntrinsicHeightNonExtension_y0q80l_k$(_this__u8e3s4, measurable, width);
  };
  protoOf(SelectableTextAnnotatedStringNode).maxIntrinsicWidth_epsb1u_k$ = function (_this__u8e3s4, measurable, height) {
    return this.delegate_2.maxIntrinsicWidthNonExtension_xk275i_k$(_this__u8e3s4, measurable, height);
  };
  protoOf(SelectableTextAnnotatedStringNode).maxIntrinsicHeight_nrifyt_k$ = function (_this__u8e3s4, measurable, width) {
    return this.delegate_2.maxIntrinsicHeightNonExtension_7hmt09_k$(_this__u8e3s4, measurable, width);
  };
  protoOf(SelectableTextAnnotatedStringNode).update_bykz92_k$ = function (text, style, placeholders, minLines, maxLines, softWrap, fontFamilyResolver, overflow, onTextLayout, onPlaceholderLayout, selectionController, color) {
    this.delegate_2.doInvalidations_emfxq2_k$(this.delegate_2.updateDraw_3yxil3_k$(color, style), this.delegate_2.updateText_uryedl_k$(text), this.delegate_2.updateLayoutRelatedArgs_2zksp2_k$(style, placeholders, minLines, maxLines, softWrap, fontFamilyResolver, overflow), this.delegate_2.updateCallbacks_iwcyia_k$(onTextLayout, onPlaceholderLayout, selectionController));
    this.selectionController_1 = selectionController;
    invalidateMeasurement(this);
  };
  function _get_selectableId__vcm89m($this) {
    return $this.selectableId_1;
  }
  function _get_selectionRegistrar__p9tjiu($this) {
    return $this.selectionRegistrar_1;
  }
  function _get_backgroundSelectionColor__ne0606($this) {
    return $this.backgroundSelectionColor_1;
  }
  function _set_params__n7gsi9($this, _set____db54di) {
    $this.params_1 = _set____db54di;
  }
  function _get_params__oo7d51($this) {
    return $this.params_1;
  }
  function _set_selectable__cjrbi7($this, _set____db54di) {
    $this.selectable_1 = _set____db54di;
  }
  function _get_selectable__rlzwnf($this) {
    return $this.selectable_1;
  }
  function SelectionController$modifier$lambda(this$0) {
    return function () {
      return this$0.params_1.layoutCoordinates_1;
    };
  }
  function SelectionController$onRemembered$lambda(this$0) {
    return function () {
      return this$0.params_1.layoutCoordinates_1;
    };
  }
  function SelectionController$onRemembered$lambda_0(this$0) {
    return function () {
      return this$0.params_1.textLayoutResult_1;
    };
  }
  function SelectionController(selectableId, selectionRegistrar, backgroundSelectionColor, params) {
    params = params === VOID ? Companion_getInstance_41().Empty_1 : params;
    this.selectableId_1 = selectableId;
    this.selectionRegistrar_1 = selectionRegistrar;
    this.backgroundSelectionColor_1 = backgroundSelectionColor;
    this.params_1 = params;
    this.selectable_1 = null;
    var tmp = this;
    tmp.modifier_1 = textPointerHoverIcon(makeSelectionModifier(this.selectionRegistrar_1, this.selectableId_1, SelectionController$modifier$lambda(this)), this.selectionRegistrar_1);
  }
  protoOf(SelectionController).get_modifier_t1pq5c_k$ = function () {
    return this.modifier_1;
  };
  protoOf(SelectionController).onRemembered_68t2e3_k$ = function () {
    var tmp = this;
    var tmp_0 = SelectionController$onRemembered$lambda(this);
    tmp.selectable_1 = this.selectionRegistrar_1.subscribe_ef5tfu_k$(new MultiWidgetSelectionDelegate(this.selectableId_1, tmp_0, SelectionController$onRemembered$lambda_0(this)));
  };
  protoOf(SelectionController).onForgotten_pbqifp_k$ = function () {
    var localSelectable = this.selectable_1;
    if (!(localSelectable == null)) {
      this.selectionRegistrar_1.unsubscribe_n836wx_k$(localSelectable);
      this.selectable_1 = null;
    }
  };
  protoOf(SelectionController).onAbandoned_1gx7a3_k$ = function () {
    var localSelectable = this.selectable_1;
    if (!(localSelectable == null)) {
      this.selectionRegistrar_1.unsubscribe_n836wx_k$(localSelectable);
      this.selectable_1 = null;
    }
  };
  protoOf(SelectionController).updateTextLayout_qxuv4c_k$ = function (textLayoutResult) {
    this.params_1 = this.params_1.copy$default_akdc9g_k$(VOID, textLayoutResult);
  };
  protoOf(SelectionController).updateGlobalPosition_2yvxid_k$ = function (coordinates) {
    this.params_1 = this.params_1.copy$default_akdc9g_k$(coordinates);
    this.selectionRegistrar_1.notifyPositionChange_roomm4_k$(this.selectableId_1);
  };
  protoOf(SelectionController).draw_4zpw4p_k$ = function (drawScope) {
    var tmp0_elvis_lhs = this.selectionRegistrar_1.get_subselections_i6sdj2_k$().get_wei43m_k$(this.selectableId_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var selection = tmp;
    var tmp_0;
    if (!selection.get_handlesCrossed_5utwpv_k$()) {
      tmp_0 = selection.get_start_iypx6h_k$().get_offset_hjmqak_k$();
    } else {
      tmp_0 = selection.get_end_18j6ha_k$().get_offset_hjmqak_k$();
    }
    var start = tmp_0;
    var tmp_1;
    if (!selection.get_handlesCrossed_5utwpv_k$()) {
      tmp_1 = selection.get_end_18j6ha_k$().get_offset_hjmqak_k$();
    } else {
      tmp_1 = selection.get_start_iypx6h_k$().get_offset_hjmqak_k$();
    }
    var end = tmp_1;
    if (start === end)
      return Unit_getInstance();
    var tmp1_safe_receiver = this.selectable_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.getLastVisibleOffset_71yps7_k$();
    var lastOffset = tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs;
    var clippedStart = coerceAtMost(start, lastOffset);
    var clippedEnd = coerceAtMost(end, lastOffset);
    var tmp3_elvis_lhs = this.params_1.getPathForRange_bge8b5_k$(clippedStart, clippedEnd);
    var tmp_2;
    if (tmp3_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp_2 = tmp3_elvis_lhs;
    }
    var selectionPath = tmp_2;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp_3;
    if (this.params_1.get_shouldClip_p0b4k4_k$()) {
      // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect' call
      var right = _Size___get_width__impl__58y75t(drawScope.get_size_cxx1ym_k$());
      var bottom = _Size___get_height__impl__a04p02(drawScope.get_size_cxx1ym_k$());
      var clipOp = Companion_getInstance_5().get_Intersect_gpxc6n_k$();
      // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = drawScope.get_drawContext_ffwztu_k$();
      var previousSize = $this$with.get_size_cxx1ym_k$();
      $this$with.get_canvas_bshgm9_k$().save_fbe7h_k$();
      // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect.<anonymous>' call
      $this$with.get_transform_px941v_k$().clipRect_3spswv_k$(0.0, 0.0, right, bottom, clipOp);
      // Inline function 'androidx.compose.foundation.text.modifiers.SelectionController.draw.<anonymous>.<anonymous>' call
      drawScope.drawPath$default_16x1km_k$(selectionPath, this.backgroundSelectionColor_1);
      $this$with.get_canvas_bshgm9_k$().restore_a1ykhu_k$();
      $this$with.set_size_6a0e6q_k$(previousSize);
      tmp_3 = Unit_getInstance();
    } else {
      drawScope.drawPath$default_16x1km_k$(selectionPath, this.backgroundSelectionColor_1);
      tmp_3 = Unit_getInstance();
    }
  };
  function Companion_10() {
    Companion_instance_10 = this;
    this.Empty_1 = new StaticTextSelectionParams(null, null);
  }
  protoOf(Companion_10).get_Empty_i9b85g_k$ = function () {
    return this.Empty_1;
  };
  var Companion_instance_10;
  function Companion_getInstance_41() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function StaticTextSelectionParams(layoutCoordinates, textLayoutResult) {
    Companion_getInstance_41();
    this.layoutCoordinates_1 = layoutCoordinates;
    this.textLayoutResult_1 = textLayoutResult;
  }
  protoOf(StaticTextSelectionParams).get_layoutCoordinates_d2f0vs_k$ = function () {
    return this.layoutCoordinates_1;
  };
  protoOf(StaticTextSelectionParams).get_textLayoutResult_u0m931_k$ = function () {
    return this.textLayoutResult_1;
  };
  protoOf(StaticTextSelectionParams).getPathForRange_bge8b5_k$ = function (start, end) {
    var tmp0_safe_receiver = this.textLayoutResult_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.getPathForRange_bge8b5_k$(start, end);
  };
  protoOf(StaticTextSelectionParams).get_shouldClip_p0b4k4_k$ = function () {
    var tmp0_safe_receiver = this.textLayoutResult_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.text.modifiers.StaticTextSelectionParams.<get-shouldClip>.<anonymous>' call
      tmp = !(tmp0_safe_receiver.get_layoutInput_o7gjah_k$().get_overflow_30wlhc_k$() === Companion_getInstance_20().get_Visible_m15n1a_k$()) ? tmp0_safe_receiver.get_hasVisualOverflow_ocbqq5_k$() : false;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(StaticTextSelectionParams).copy_2t9pf9_k$ = function (layoutCoordinates, textLayoutResult) {
    return new StaticTextSelectionParams(layoutCoordinates, textLayoutResult);
  };
  protoOf(StaticTextSelectionParams).copy$default_akdc9g_k$ = function (layoutCoordinates, textLayoutResult, $super) {
    layoutCoordinates = layoutCoordinates === VOID ? this.layoutCoordinates_1 : layoutCoordinates;
    textLayoutResult = textLayoutResult === VOID ? this.textLayoutResult_1 : textLayoutResult;
    return $super === VOID ? this.copy_2t9pf9_k$(layoutCoordinates, textLayoutResult) : $super.copy_2t9pf9_k$.call(this, layoutCoordinates, textLayoutResult);
  };
  function makeDefaultSelectionModifier(_this__u8e3s4, selectableId, layoutCoordinates) {
    var longPressDragObserver = new makeDefaultSelectionModifier$longPressDragObserver$1(layoutCoordinates, _this__u8e3s4, selectableId);
    var mouseSelectionObserver = new makeDefaultSelectionModifier$mouseSelectionObserver$1(layoutCoordinates, _this__u8e3s4, selectableId);
    return selectionGestureInput(Companion_getInstance_7(), mouseSelectionObserver, longPressDragObserver);
  }
  function makeDefaultSelectionModifier$longPressDragObserver$1($layoutCoordinates, $this_makeDefaultSelectionModifier, $selectableId) {
    this.$layoutCoordinates_1 = $layoutCoordinates;
    this.$this_makeDefaultSelectionModifier_1 = $this_makeDefaultSelectionModifier;
    this.$selectableId_1 = $selectableId;
    this.lastPosition_1 = Companion_getInstance_6().get_Zero_k6n73t_k$();
    this.dragTotalDistance_1 = Companion_getInstance_6().get_Zero_k6n73t_k$();
  }
  protoOf(makeDefaultSelectionModifier$longPressDragObserver$1).set_lastPosition_e6ifum_k$ = function (_set____db54di) {
    this.lastPosition_1 = _set____db54di;
  };
  protoOf(makeDefaultSelectionModifier$longPressDragObserver$1).get_lastPosition_ynbota_k$ = function () {
    return this.lastPosition_1;
  };
  protoOf(makeDefaultSelectionModifier$longPressDragObserver$1).set_dragTotalDistance_s4mfhu_k$ = function (_set____db54di) {
    this.dragTotalDistance_1 = _set____db54di;
  };
  protoOf(makeDefaultSelectionModifier$longPressDragObserver$1).get_dragTotalDistance_5yk0dq_k$ = function () {
    return this.dragTotalDistance_1;
  };
  protoOf(makeDefaultSelectionModifier$longPressDragObserver$1).onDown_l6cn15_k$ = function (point) {
  };
  protoOf(makeDefaultSelectionModifier$longPressDragObserver$1).onUp_30ddrq_k$ = function () {
  };
  protoOf(makeDefaultSelectionModifier$longPressDragObserver$1).onStart_pi05o7_k$ = function (startPoint) {
    var tmp0_safe_receiver = this.$layoutCoordinates_1();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_safe_receiver.get_isAttached_odsl1l_k$())
        return Unit_getInstance();
      this.$this_makeDefaultSelectionModifier_1.notifySelectionUpdateStart_er8ihi_k$(tmp0_safe_receiver, startPoint, Companion_getInstance_42().get_Word_wockfn_k$(), true);
      this.lastPosition_1 = startPoint;
    }
    if (!hasSelection(this.$this_makeDefaultSelectionModifier_1, this.$selectableId_1))
      return Unit_getInstance();
    this.dragTotalDistance_1 = Companion_getInstance_6().get_Zero_k6n73t_k$();
  };
  protoOf(makeDefaultSelectionModifier$longPressDragObserver$1).onDrag_ssjglj_k$ = function (delta) {
    var tmp0_safe_receiver = this.$layoutCoordinates_1();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_safe_receiver.get_isAttached_odsl1l_k$())
        return Unit_getInstance();
      if (!hasSelection(this.$this_makeDefaultSelectionModifier_1, this.$selectableId_1))
        return Unit_getInstance();
      this.dragTotalDistance_1 = Offset__plus_impl_c78cg0(this.dragTotalDistance_1, delta);
      var newPosition = Offset__plus_impl_c78cg0(this.lastPosition_1, this.dragTotalDistance_1);
      var tmp1_previousPosition = this.lastPosition_1;
      var tmp2_adjustment = Companion_getInstance_42().get_CharacterWithWordAccelerate_b1h3l9_k$();
      var consumed = this.$this_makeDefaultSelectionModifier_1.notifySelectionUpdate_9o0j9_k$(tmp0_safe_receiver, newPosition, tmp1_previousPosition, false, tmp2_adjustment, true);
      var tmp;
      if (consumed) {
        this.lastPosition_1 = newPosition;
        this.dragTotalDistance_1 = Companion_getInstance_6().get_Zero_k6n73t_k$();
        tmp = Unit_getInstance();
      }
    }
  };
  protoOf(makeDefaultSelectionModifier$longPressDragObserver$1).onStop_aj90a9_k$ = function () {
    if (hasSelection(this.$this_makeDefaultSelectionModifier_1, this.$selectableId_1)) {
      this.$this_makeDefaultSelectionModifier_1.notifySelectionUpdateEnd_v24dq7_k$();
    }
  };
  protoOf(makeDefaultSelectionModifier$longPressDragObserver$1).onCancel_q8zbzd_k$ = function () {
    if (hasSelection(this.$this_makeDefaultSelectionModifier_1, this.$selectableId_1)) {
      this.$this_makeDefaultSelectionModifier_1.notifySelectionUpdateEnd_v24dq7_k$();
    }
  };
  function makeDefaultSelectionModifier$mouseSelectionObserver$1($layoutCoordinates, $this_makeDefaultSelectionModifier, $selectableId) {
    this.$layoutCoordinates_1 = $layoutCoordinates;
    this.$this_makeDefaultSelectionModifier_1 = $this_makeDefaultSelectionModifier;
    this.$selectableId_1 = $selectableId;
    this.lastPosition_1 = Companion_getInstance_6().get_Zero_k6n73t_k$();
  }
  protoOf(makeDefaultSelectionModifier$mouseSelectionObserver$1).set_lastPosition_e6ifum_k$ = function (_set____db54di) {
    this.lastPosition_1 = _set____db54di;
  };
  protoOf(makeDefaultSelectionModifier$mouseSelectionObserver$1).get_lastPosition_ynbota_k$ = function () {
    return this.lastPosition_1;
  };
  protoOf(makeDefaultSelectionModifier$mouseSelectionObserver$1).onExtend_vcjoa9_k$ = function (downPosition) {
    var tmp0_safe_receiver = this.$layoutCoordinates_1();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_safe_receiver.get_isAttached_odsl1l_k$())
        return false;
      var consumed = this.$this_makeDefaultSelectionModifier_1.notifySelectionUpdate_9o0j9_k$(tmp0_safe_receiver, downPosition, this.lastPosition_1, false, Companion_getInstance_42().get_None_wo6tgh_k$(), false);
      if (consumed) {
        this.lastPosition_1 = downPosition;
      }
      return hasSelection(this.$this_makeDefaultSelectionModifier_1, this.$selectableId_1);
    }
    return false;
  };
  protoOf(makeDefaultSelectionModifier$mouseSelectionObserver$1).onExtendDrag_c8qyql_k$ = function (dragPosition) {
    var tmp0_safe_receiver = this.$layoutCoordinates_1();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_safe_receiver.get_isAttached_odsl1l_k$())
        return false;
      if (!hasSelection(this.$this_makeDefaultSelectionModifier_1, this.$selectableId_1))
        return false;
      var consumed = this.$this_makeDefaultSelectionModifier_1.notifySelectionUpdate_9o0j9_k$(tmp0_safe_receiver, dragPosition, this.lastPosition_1, false, Companion_getInstance_42().get_None_wo6tgh_k$(), false);
      var tmp;
      if (consumed) {
        this.lastPosition_1 = dragPosition;
        tmp = Unit_getInstance();
      }
    }
    return true;
  };
  protoOf(makeDefaultSelectionModifier$mouseSelectionObserver$1).onStart_k8zw66_k$ = function (downPosition, adjustment) {
    var tmp0_safe_receiver = this.$layoutCoordinates_1();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_safe_receiver.get_isAttached_odsl1l_k$())
        return false;
      this.$this_makeDefaultSelectionModifier_1.notifySelectionUpdateStart_er8ihi_k$(tmp0_safe_receiver, downPosition, adjustment, false);
      this.lastPosition_1 = downPosition;
      return hasSelection(this.$this_makeDefaultSelectionModifier_1, this.$selectableId_1);
    }
    return false;
  };
  protoOf(makeDefaultSelectionModifier$mouseSelectionObserver$1).onDrag_o3vqdu_k$ = function (dragPosition, adjustment) {
    var tmp0_safe_receiver = this.$layoutCoordinates_1();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_safe_receiver.get_isAttached_odsl1l_k$())
        return false;
      if (!hasSelection(this.$this_makeDefaultSelectionModifier_1, this.$selectableId_1))
        return false;
      var tmp0_previousPosition = this.lastPosition_1;
      var consumed = this.$this_makeDefaultSelectionModifier_1.notifySelectionUpdate_9o0j9_k$(tmp0_safe_receiver, dragPosition, tmp0_previousPosition, false, adjustment, false);
      var tmp;
      if (consumed) {
        this.lastPosition_1 = dragPosition;
        tmp = Unit_getInstance();
      }
    }
    return true;
  };
  protoOf(makeDefaultSelectionModifier$mouseSelectionObserver$1).onDragDone_ei70g5_k$ = function () {
    this.$this_makeDefaultSelectionModifier_1.notifySelectionUpdateEnd_v24dq7_k$();
  };
  function _get_text__de5ose_2($this) {
    return $this.text_1;
  }
  function _get_style__b8k6v4_2($this) {
    return $this.style_1;
  }
  function _get_fontFamilyResolver__s3uj2m_2($this) {
    return $this.fontFamilyResolver_1;
  }
  function _get_onTextLayout__ayil7v_0($this) {
    return $this.onTextLayout_1;
  }
  function _get_overflow__bx70nd_2($this) {
    return $this.overflow_1;
  }
  function _get_softWrap__9vu0jt_2($this) {
    return $this.softWrap_1;
  }
  function _get_maxLines__bh9jcg_2($this) {
    return $this.maxLines_1;
  }
  function _get_minLines__o96fmm_2($this) {
    return $this.minLines_1;
  }
  function _get_placeholders__eecbo5_1($this) {
    return $this.placeholders_1;
  }
  function _get_onPlaceholderLayout__10vzzn_0($this) {
    return $this.onPlaceholderLayout_1;
  }
  function _get_selectionController__4m8zt5_1($this) {
    return $this.selectionController_1;
  }
  function _get_color__iw9cfm_1($this) {
    return $this.color_1;
  }
  function TextAnnotatedStringElement(text, style, fontFamilyResolver, onTextLayout, overflow, softWrap, maxLines, minLines, placeholders, onPlaceholderLayout, selectionController, color) {
    onTextLayout = onTextLayout === VOID ? null : onTextLayout;
    overflow = overflow === VOID ? Companion_getInstance_20().get_Clip_ypf2ge_k$() : overflow;
    softWrap = softWrap === VOID ? true : softWrap;
    maxLines = maxLines === VOID ? IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$() : maxLines;
    minLines = minLines === VOID ? get_DefaultMinLines() : minLines;
    placeholders = placeholders === VOID ? null : placeholders;
    onPlaceholderLayout = onPlaceholderLayout === VOID ? null : onPlaceholderLayout;
    selectionController = selectionController === VOID ? null : selectionController;
    color = color === VOID ? null : color;
    ModifierNodeElement.call(this);
    this.text_1 = text;
    this.style_1 = style;
    this.fontFamilyResolver_1 = fontFamilyResolver;
    this.onTextLayout_1 = onTextLayout;
    this.overflow_1 = overflow;
    this.softWrap_1 = softWrap;
    this.maxLines_1 = maxLines;
    this.minLines_1 = minLines;
    this.placeholders_1 = placeholders;
    this.onPlaceholderLayout_1 = onPlaceholderLayout;
    this.selectionController_1 = selectionController;
    this.color_1 = color;
  }
  protoOf(TextAnnotatedStringElement).create_md4cuc_k$ = function () {
    return new TextAnnotatedStringNode(this.text_1, this.style_1, this.fontFamilyResolver_1, this.onTextLayout_1, this.overflow_1, this.softWrap_1, this.maxLines_1, this.minLines_1, this.placeholders_1, this.onPlaceholderLayout_1, this.selectionController_1, this.color_1);
  };
  protoOf(TextAnnotatedStringElement).update_xv2e5u_k$ = function (node) {
    node.doInvalidations_emfxq2_k$(node.updateDraw_3yxil3_k$(this.color_1, this.style_1), node.updateText_uryedl_k$(this.text_1), node.updateLayoutRelatedArgs_2zksp2_k$(this.style_1, this.placeholders_1, this.minLines_1, this.maxLines_1, this.softWrap_1, this.fontFamilyResolver_1, this.overflow_1), node.updateCallbacks_iwcyia_k$(this.onTextLayout_1, this.onPlaceholderLayout_1, this.selectionController_1));
  };
  protoOf(TextAnnotatedStringElement).update_9wd57p_k$ = function (node) {
    return this.update_xv2e5u_k$(node instanceof TextAnnotatedStringNode ? node : THROW_CCE());
  };
  protoOf(TextAnnotatedStringElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextAnnotatedStringElement))
      return false;
    if (!equals(this.color_1, other.color_1))
      return false;
    if (!this.text_1.equals(other.text_1))
      return false;
    if (!this.style_1.equals(other.style_1))
      return false;
    if (!equals(this.placeholders_1, other.placeholders_1))
      return false;
    if (!equals(this.fontFamilyResolver_1, other.fontFamilyResolver_1))
      return false;
    if (!equals(this.onTextLayout_1, other.onTextLayout_1))
      return false;
    if (!(this.overflow_1 === other.overflow_1))
      return false;
    if (!(this.softWrap_1 === other.softWrap_1))
      return false;
    if (!(this.maxLines_1 === other.maxLines_1))
      return false;
    if (!(this.minLines_1 === other.minLines_1))
      return false;
    if (!equals(this.onPlaceholderLayout_1, other.onPlaceholderLayout_1))
      return false;
    if (!equals(this.selectionController_1, other.selectionController_1))
      return false;
    return true;
  };
  protoOf(TextAnnotatedStringElement).hashCode = function () {
    var result = this.text_1.hashCode();
    result = imul(31, result) + this.style_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.fontFamilyResolver_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.onTextLayout_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + TextOverflow__hashCode_impl_kqdwgt(this.overflow_1) | 0;
    result = imul(31, result) + getBooleanHashCode(this.softWrap_1) | 0;
    result = imul(31, result) + this.maxLines_1 | 0;
    result = imul(31, result) + this.minLines_1 | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.placeholders_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : hashCode(tmp2_safe_receiver);
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_1 = imul(31, result);
    var tmp4_safe_receiver = this.onPlaceholderLayout_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : hashCode(tmp4_safe_receiver);
    result = tmp_1 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    var tmp_2 = imul(31, result);
    var tmp6_safe_receiver = this.selectionController_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : hashCode(tmp6_safe_receiver);
    result = tmp_2 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    var tmp_3 = imul(31, result);
    var tmp8_safe_receiver = this.color_1;
    var tmp9_elvis_lhs = tmp8_safe_receiver == null ? null : hashCode(tmp8_safe_receiver);
    result = tmp_3 + (tmp9_elvis_lhs == null ? 0 : tmp9_elvis_lhs) | 0;
    return result;
  };
  protoOf(TextAnnotatedStringElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
  };
  function _set_text__9udp6y_1($this, _set____db54di) {
    $this.text_1 = _set____db54di;
  }
  function _get_text__de5ose_3($this) {
    return $this.text_1;
  }
  function _set_style__ksk9mc_1($this, _set____db54di) {
    $this.style_1 = _set____db54di;
  }
  function _get_style__b8k6v4_3($this) {
    return $this.style_1;
  }
  function _set_fontFamilyResolver__5u0s1q_1($this, _set____db54di) {
    $this.fontFamilyResolver_1 = _set____db54di;
  }
  function _get_fontFamilyResolver__s3uj2m_3($this) {
    return $this.fontFamilyResolver_1;
  }
  function _set_onTextLayout__qi9brz($this, _set____db54di) {
    $this.onTextLayout_1 = _set____db54di;
  }
  function _get_onTextLayout__ayil7v_1($this) {
    return $this.onTextLayout_1;
  }
  function _set_overflow__oq3c45_1($this, _set____db54di) {
    $this.overflow_1 = _set____db54di;
  }
  function _get_overflow__bx70nd_3($this) {
    return $this.overflow_1;
  }
  function _set_softWrap__2x2awz_1($this, _set____db54di) {
    $this.softWrap_1 = _set____db54di;
  }
  function _get_softWrap__9vu0jt_3($this) {
    return $this.softWrap_1;
  }
  function _set_maxLines__oa5ut8_1($this, _set____db54di) {
    $this.maxLines_1 = _set____db54di;
  }
  function _get_maxLines__bh9jcg_3($this) {
    return $this.maxLines_1;
  }
  function _set_minLines__xz1avq_1($this, _set____db54di) {
    $this.minLines_1 = _set____db54di;
  }
  function _get_minLines__o96fmm_3($this) {
    return $this.minLines_1;
  }
  function _set_placeholders__ty3289_0($this, _set____db54di) {
    $this.placeholders_1 = _set____db54di;
  }
  function _get_placeholders__eecbo5_2($this) {
    return $this.placeholders_1;
  }
  function _set_onPlaceholderLayout__c9u8wp($this, _set____db54di) {
    $this.onPlaceholderLayout_1 = _set____db54di;
  }
  function _get_onPlaceholderLayout__10vzzn_1($this) {
    return $this.onPlaceholderLayout_1;
  }
  function _set_selectionController__8oh937_0($this, _set____db54di) {
    $this.selectionController_1 = _set____db54di;
  }
  function _get_selectionController__4m8zt5_2($this) {
    return $this.selectionController_1;
  }
  function _set_overrideColor__4o8y0e($this, _set____db54di) {
    $this.overrideColor_1 = _set____db54di;
  }
  function _get_overrideColor__ajikhy($this) {
    return $this.overrideColor_1;
  }
  function _set_baselineCache__fll3fs($this, _set____db54di) {
    $this.baselineCache_1 = _set____db54di;
  }
  function _get_baselineCache__dtkxg($this) {
    return $this.baselineCache_1;
  }
  function _set__layoutCache__vb7hoi($this, _set____db54di) {
    $this._layoutCache_1 = _set____db54di;
  }
  function _get__layoutCache__frgr4e($this) {
    return $this._layoutCache_1;
  }
  function _get_layoutCache__kch9ev_0($this) {
    if ($this._layoutCache_1 == null) {
      $this._layoutCache_1 = new MultiParagraphLayoutCache($this.text_1, $this.style_1, $this.fontFamilyResolver_1, $this.overflow_1, $this.softWrap_1, $this.maxLines_1, $this.minLines_1, $this.placeholders_1);
    }
    return ensureNotNull($this._layoutCache_1);
  }
  function getLayoutCache($this, density) {
    var tmp0_safe_receiver = _get_textSubstitution__7vuyf3($this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp;
      if (tmp0_safe_receiver.isShowingSubstitution_1) {
        var tmp0_safe_receiver_0 = tmp0_safe_receiver.layoutCache_1;
        if (tmp0_safe_receiver_0 == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'kotlin.also' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.foundation.text.modifiers.TextAnnotatedStringNode.getLayoutCache.<anonymous>.<anonymous>.<anonymous>' call
          tmp0_safe_receiver_0.set_density_7gu4pk_k$(density);
          return tmp0_safe_receiver_0;
        }
        tmp = Unit_getInstance();
      }
    }
    // Inline function 'kotlin.also' call
    var this_0 = _get_layoutCache__kch9ev_0($this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.text.modifiers.TextAnnotatedStringNode.getLayoutCache.<anonymous>' call
    this_0.set_density_7gu4pk_k$(density);
    return this_0;
  }
  function _set_semanticsTextLayoutResult__952dss($this, _set____db54di) {
    $this.semanticsTextLayoutResult_1 = _set____db54di;
  }
  function _get_semanticsTextLayoutResult__bdwwr4($this) {
    return $this.semanticsTextLayoutResult_1;
  }
  function TextSubstitutionValue(original, substitution, isShowingSubstitution, layoutCache) {
    isShowingSubstitution = isShowingSubstitution === VOID ? false : isShowingSubstitution;
    layoutCache = layoutCache === VOID ? null : layoutCache;
    this.original_1 = original;
    this.substitution_1 = substitution;
    this.isShowingSubstitution_1 = isShowingSubstitution;
    this.layoutCache_1 = layoutCache;
  }
  protoOf(TextSubstitutionValue).get_original_8zw1nq_k$ = function () {
    return this.original_1;
  };
  protoOf(TextSubstitutionValue).set_substitution_t31yqz_k$ = function (_set____db54di) {
    this.substitution_1 = _set____db54di;
  };
  protoOf(TextSubstitutionValue).get_substitution_i7fi9y_k$ = function () {
    return this.substitution_1;
  };
  protoOf(TextSubstitutionValue).set_isShowingSubstitution_x0lawq_k$ = function (_set____db54di) {
    this.isShowingSubstitution_1 = _set____db54di;
  };
  protoOf(TextSubstitutionValue).get_isShowingSubstitution_bhjsy9_k$ = function () {
    return this.isShowingSubstitution_1;
  };
  protoOf(TextSubstitutionValue).set_layoutCache_st5lpb_k$ = function (_set____db54di) {
    this.layoutCache_1 = _set____db54di;
  };
  protoOf(TextSubstitutionValue).get_layoutCache_oazvn5_k$ = function () {
    return this.layoutCache_1;
  };
  protoOf(TextSubstitutionValue).component1_7eebsc_k$ = function () {
    return this.original_1;
  };
  protoOf(TextSubstitutionValue).component2_7eebsb_k$ = function () {
    return this.substitution_1;
  };
  protoOf(TextSubstitutionValue).component3_7eebsa_k$ = function () {
    return this.isShowingSubstitution_1;
  };
  protoOf(TextSubstitutionValue).component4_7eebs9_k$ = function () {
    return this.layoutCache_1;
  };
  protoOf(TextSubstitutionValue).copy_ey16uy_k$ = function (original, substitution, isShowingSubstitution, layoutCache) {
    return new TextSubstitutionValue(original, substitution, isShowingSubstitution, layoutCache);
  };
  protoOf(TextSubstitutionValue).copy$default_3a0q8t_k$ = function (original, substitution, isShowingSubstitution, layoutCache, $super) {
    original = original === VOID ? this.original_1 : original;
    substitution = substitution === VOID ? this.substitution_1 : substitution;
    isShowingSubstitution = isShowingSubstitution === VOID ? this.isShowingSubstitution_1 : isShowingSubstitution;
    layoutCache = layoutCache === VOID ? this.layoutCache_1 : layoutCache;
    return $super === VOID ? this.copy_ey16uy_k$(original, substitution, isShowingSubstitution, layoutCache) : $super.copy_ey16uy_k$.call(this, original, substitution, isShowingSubstitution, layoutCache);
  };
  protoOf(TextSubstitutionValue).toString = function () {
    return 'TextSubstitutionValue(original=' + this.original_1 + ', substitution=' + this.substitution_1 + ', isShowingSubstitution=' + this.isShowingSubstitution_1 + ', layoutCache=' + this.layoutCache_1 + ')';
  };
  protoOf(TextSubstitutionValue).hashCode = function () {
    var result = this.original_1.hashCode();
    result = imul(result, 31) + this.substitution_1.hashCode() | 0;
    result = imul(result, 31) + getBooleanHashCode(this.isShowingSubstitution_1) | 0;
    result = imul(result, 31) + (this.layoutCache_1 == null ? 0 : hashCode(this.layoutCache_1)) | 0;
    return result;
  };
  protoOf(TextSubstitutionValue).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextSubstitutionValue))
      return false;
    var tmp0_other_with_cast = other instanceof TextSubstitutionValue ? other : THROW_CCE();
    if (!this.original_1.equals(tmp0_other_with_cast.original_1))
      return false;
    if (!this.substitution_1.equals(tmp0_other_with_cast.substitution_1))
      return false;
    if (!(this.isShowingSubstitution_1 === tmp0_other_with_cast.isShowingSubstitution_1))
      return false;
    if (!equals(this.layoutCache_1, tmp0_other_with_cast.layoutCache_1))
      return false;
    return true;
  };
  function _set_textSubstitution__y24uh9($this, _set____db54di) {
    var this_0 = $this.textSubstitution$delegate_1;
    textSubstitution$factory();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get_textSubstitution__7vuyf3($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.textSubstitution$delegate_1;
    textSubstitution$factory_0();
    return this_0.get_value_j01efc_k$();
  }
  function setSubstitution($this, updatedText) {
    var currentTextSubstitution = _get_textSubstitution__7vuyf3($this);
    if (!(currentTextSubstitution == null)) {
      if (updatedText.equals(currentTextSubstitution.substitution_1)) {
        return false;
      }
      currentTextSubstitution.substitution_1 = updatedText;
      var tmp0_safe_receiver = currentTextSubstitution.layoutCache_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        tmp0_safe_receiver.update_73oe81_k$(updatedText, $this.style_1, $this.fontFamilyResolver_1, $this.overflow_1, $this.softWrap_1, $this.maxLines_1, $this.minLines_1, $this.placeholders_1);
        tmp = Unit_getInstance();
      }
      if (tmp == null)
        return false;
    } else {
      var newTextSubstitution = new TextSubstitutionValue($this.text_1, updatedText);
      var substitutionLayoutCache = new MultiParagraphLayoutCache(updatedText, $this.style_1, $this.fontFamilyResolver_1, $this.overflow_1, $this.softWrap_1, $this.maxLines_1, $this.minLines_1, $this.placeholders_1);
      substitutionLayoutCache.set_density_7gu4pk_k$(_get_layoutCache__kch9ev_0($this).get_density_qy0267_k$());
      newTextSubstitution.layoutCache_1 = substitutionLayoutCache;
      _set_textSubstitution__y24uh9($this, newTextSubstitution);
    }
    return true;
  }
  function clearSubstitution($this) {
    _set_textSubstitution__y24uh9($this, null);
  }
  function TextAnnotatedStringNode$applySemantics$lambda(this$0) {
    return function (textLayoutResult) {
      var inputLayout = _get_layoutCache__kch9ev_0(this$0).get_layoutOrNull_xsv6sd_k$();
      var tmp;
      if (inputLayout == null) {
        tmp = null;
      } else {
        var tmp_0 = inputLayout.get_layoutInput_o7gjah_k$().get_text_wouvsm_k$();
        var tmp_1 = this$0.style_1;
        var tmp0_safe_receiver = this$0.overrideColor_1;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.invoke_ejt8ap_k$();
        var tmp_2;
        var tmp_3 = tmp1_elvis_lhs;
        if ((tmp_3 == null ? null : new Color(tmp_3)) == null) {
          tmp_2 = Companion_getInstance().get_Unspecified_j397pn_k$();
        } else {
          tmp_2 = tmp1_elvis_lhs;
        }
        tmp = inputLayout.copy$default_7jjbm1_k$(TextLayoutInput_init_$Create$(tmp_0, tmp_1.merge$default_jrrqwk_k$(tmp_2), inputLayout.get_layoutInput_o7gjah_k$().get_placeholders_r4ppyh_k$(), inputLayout.get_layoutInput_o7gjah_k$().get_maxLines_pclpoc_k$(), inputLayout.get_layoutInput_o7gjah_k$().get_softWrap_a000bn_k$(), inputLayout.get_layoutInput_o7gjah_k$().get_overflow_30wlhc_k$(), inputLayout.get_layoutInput_o7gjah_k$().get_density_qy0267_k$(), inputLayout.get_layoutInput_o7gjah_k$().get_layoutDirection_7e37v0_k$(), inputLayout.get_layoutInput_o7gjah_k$().get_fontFamilyResolver_9o0fjy_k$(), inputLayout.get_layoutInput_o7gjah_k$().get_constraints_y0yfdk_k$()));
      }
      var tmp3_safe_receiver = tmp;
      var tmp_4;
      if (tmp3_safe_receiver == null) {
        tmp_4 = null;
      } else {
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.foundation.text.modifiers.TextAnnotatedStringNode.applySemantics.<anonymous>.<anonymous>' call
        textLayoutResult.add_utx5q5_k$(tmp3_safe_receiver);
        tmp_4 = tmp3_safe_receiver;
      }
      var layout = tmp_4;
      return !(layout == null);
    };
  }
  function TextAnnotatedStringNode$applySemantics$lambda_0(this$0) {
    return function (updatedText) {
      setSubstitution(this$0, updatedText);
      invalidateSemantics(this$0);
      return true;
    };
  }
  function TextAnnotatedStringNode$applySemantics$lambda_1(this$0) {
    return function (it) {
      var tmp;
      if (_get_textSubstitution__7vuyf3(this$0) == null) {
        return false;
      }
      var tmp0_safe_receiver = _get_textSubstitution__7vuyf3(this$0);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = Unit_getInstance();
      } else {
        tmp0_safe_receiver.isShowingSubstitution_1 = it;
        tmp_0 = Unit_getInstance();
      }
      invalidateSemantics(this$0);
      invalidateMeasurement(this$0);
      invalidateDraw(this$0);
      return true;
    };
  }
  function TextAnnotatedStringNode$applySemantics$lambda_2(this$0) {
    return function () {
      clearSubstitution(this$0);
      invalidateSemantics(this$0);
      invalidateMeasurement(this$0);
      invalidateDraw(this$0);
      return true;
    };
  }
  function TextAnnotatedStringNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.place$default_lcv1ed_k$($placeable, 0, 0);
      return Unit_getInstance();
    };
  }
  function TextAnnotatedStringNode(text, style, fontFamilyResolver, onTextLayout, overflow, softWrap, maxLines, minLines, placeholders, onPlaceholderLayout, selectionController, overrideColor) {
    onTextLayout = onTextLayout === VOID ? null : onTextLayout;
    overflow = overflow === VOID ? Companion_getInstance_20().get_Clip_ypf2ge_k$() : overflow;
    softWrap = softWrap === VOID ? true : softWrap;
    maxLines = maxLines === VOID ? IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$() : maxLines;
    minLines = minLines === VOID ? get_DefaultMinLines() : minLines;
    placeholders = placeholders === VOID ? null : placeholders;
    onPlaceholderLayout = onPlaceholderLayout === VOID ? null : onPlaceholderLayout;
    selectionController = selectionController === VOID ? null : selectionController;
    overrideColor = overrideColor === VOID ? null : overrideColor;
    Node.call(this);
    this.text_1 = text;
    this.style_1 = style;
    this.fontFamilyResolver_1 = fontFamilyResolver;
    this.onTextLayout_1 = onTextLayout;
    this.overflow_1 = overflow;
    this.softWrap_1 = softWrap;
    this.maxLines_1 = maxLines;
    this.minLines_1 = minLines;
    this.placeholders_1 = placeholders;
    this.onPlaceholderLayout_1 = onPlaceholderLayout;
    this.selectionController_1 = selectionController;
    this.overrideColor_1 = overrideColor;
    this.baselineCache_1 = null;
    this._layoutCache_1 = null;
    this.semanticsTextLayoutResult_1 = null;
    this.textSubstitution$delegate_1 = mutableStateOf(null);
  }
  protoOf(TextAnnotatedStringNode).updateDraw_3yxil3_k$ = function (color, style) {
    var changed = false;
    if (!equals(color, this.overrideColor_1)) {
      changed = true;
    }
    this.overrideColor_1 = color;
    changed = changed ? true : !style.hasSameDrawAffectingAttributes_drzoqy_k$(this.style_1);
    return changed;
  };
  protoOf(TextAnnotatedStringNode).updateText_uryedl_k$ = function (text) {
    if (this.text_1.equals(text))
      return false;
    this.text_1 = text;
    clearSubstitution(this);
    return true;
  };
  protoOf(TextAnnotatedStringNode).updateLayoutRelatedArgs_2zksp2_k$ = function (style, placeholders, minLines, maxLines, softWrap, fontFamilyResolver, overflow) {
    var changed;
    changed = !this.style_1.hasSameLayoutAffectingAttributes_42axi4_k$(style);
    this.style_1 = style;
    if (!equals(this.placeholders_1, placeholders)) {
      this.placeholders_1 = placeholders;
      changed = true;
    }
    if (!(this.minLines_1 === minLines)) {
      this.minLines_1 = minLines;
      changed = true;
    }
    if (!(this.maxLines_1 === maxLines)) {
      this.maxLines_1 = maxLines;
      changed = true;
    }
    if (!(this.softWrap_1 === softWrap)) {
      this.softWrap_1 = softWrap;
      changed = true;
    }
    if (!equals(this.fontFamilyResolver_1, fontFamilyResolver)) {
      this.fontFamilyResolver_1 = fontFamilyResolver;
      changed = true;
    }
    if (!(this.overflow_1 === overflow)) {
      this.overflow_1 = overflow;
      changed = true;
    }
    return changed;
  };
  protoOf(TextAnnotatedStringNode).updateCallbacks_iwcyia_k$ = function (onTextLayout, onPlaceholderLayout, selectionController) {
    var changed = false;
    if (!equals(this.onTextLayout_1, onTextLayout)) {
      this.onTextLayout_1 = onTextLayout;
      changed = true;
    }
    if (!equals(this.onPlaceholderLayout_1, onPlaceholderLayout)) {
      this.onPlaceholderLayout_1 = onPlaceholderLayout;
      changed = true;
    }
    if (!equals(this.selectionController_1, selectionController)) {
      this.selectionController_1 = selectionController;
      changed = true;
    }
    return changed;
  };
  protoOf(TextAnnotatedStringNode).doInvalidations_emfxq2_k$ = function (drawChanged, textChanged, layoutChanged, callbacksChanged) {
    if (!this.get_isAttached_odsl1l_k$()) {
      return Unit_getInstance();
    }
    if (textChanged ? true : drawChanged ? !(this.semanticsTextLayoutResult_1 == null) : false) {
      invalidateSemantics(this);
    }
    if ((textChanged ? true : layoutChanged) ? true : callbacksChanged) {
      _get_layoutCache__kch9ev_0(this).update_73oe81_k$(this.text_1, this.style_1, this.fontFamilyResolver_1, this.overflow_1, this.softWrap_1, this.maxLines_1, this.minLines_1, this.placeholders_1);
      invalidateMeasurement(this);
      invalidateDraw(this);
    }
    if (drawChanged) {
      invalidateDraw(this);
    }
  };
  protoOf(TextAnnotatedStringNode).applySemantics_xpyasu_k$ = function (_this__u8e3s4) {
    var localSemanticsTextLayoutResult = this.semanticsTextLayoutResult_1;
    if (localSemanticsTextLayoutResult == null) {
      localSemanticsTextLayoutResult = TextAnnotatedStringNode$applySemantics$lambda(this);
      this.semanticsTextLayoutResult_1 = localSemanticsTextLayoutResult;
    }
    set_text(_this__u8e3s4, this.text_1);
    var currentTextSubstitution = _get_textSubstitution__7vuyf3(this);
    if (!(currentTextSubstitution == null)) {
      set_textSubstitution(_this__u8e3s4, currentTextSubstitution.substitution_1);
      set_isShowingTextSubstitution(_this__u8e3s4, currentTextSubstitution.isShowingSubstitution_1);
    }
    setTextSubstitution(_this__u8e3s4, VOID, TextAnnotatedStringNode$applySemantics$lambda_0(this));
    showTextSubstitution(_this__u8e3s4, VOID, TextAnnotatedStringNode$applySemantics$lambda_1(this));
    clearTextSubstitution(_this__u8e3s4, VOID, TextAnnotatedStringNode$applySemantics$lambda_2(this));
    getTextLayoutResult(_this__u8e3s4, VOID, localSemanticsTextLayoutResult);
  };
  protoOf(TextAnnotatedStringNode).measureNonExtension_5ksqq7_k$ = function (measureScope, measurable, constraints) {
    return this.measure_z885gt_k$(measureScope, measurable, constraints);
  };
  protoOf(TextAnnotatedStringNode).measure_z885gt_k$ = function (_this__u8e3s4, measurable, constraints) {
    var layoutCache = getLayoutCache(this, _this__u8e3s4);
    var didChangeLayout = layoutCache.layoutWithConstraints_o6pal7_k$(constraints, _this__u8e3s4.get_layoutDirection_7e37v0_k$());
    var textLayoutResult = layoutCache.get_textLayoutResult_u0m931_k$();
    textLayoutResult.get_multiParagraph_xte3we_k$().get_intrinsics_1zqd0p_k$().get_hasStaleResolvedFonts_tun9ic_k$();
    if (didChangeLayout) {
      invalidateLayer(this);
      var tmp0_safe_receiver = this.onTextLayout_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver(textLayoutResult);
      var tmp1_safe_receiver = this.selectionController_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.updateTextLayout_qxuv4c_k$(textLayoutResult);
      }
      var tmp = this;
      var tmp_0 = get_FirstBaseline();
      // Inline function 'kotlin.math.roundToInt' call
      var this_0 = textLayoutResult.get_firstBaseline_s5430_k$();
      var tmp$ret$0 = roundToInt(this_0);
      var tmp_1 = to(tmp_0, tmp$ret$0);
      var tmp_2 = get_LastBaseline();
      // Inline function 'kotlin.math.roundToInt' call
      var this_1 = textLayoutResult.get_lastBaseline_inuptw_k$();
      var tmp$ret$1 = roundToInt(this_1);
      tmp.baselineCache_1 = mapOf([tmp_1, to(tmp_2, tmp$ret$1)]);
    }
    var tmp2_safe_receiver = this.onPlaceholderLayout_1;
    if (tmp2_safe_receiver == null)
      null;
    else
      tmp2_safe_receiver(textLayoutResult.get_placeholderRects_1ky2fv_k$());
    var placeable = measurable.measure_4dmfk1_k$(fixedCoerceHeightAndWidthForBits(Companion_getInstance_12(), _IntSize___get_width__impl__d9yl4o(textLayoutResult.get_size_kd98kr_k$()), _IntSize___get_height__impl__prv63b(textLayoutResult.get_size_kd98kr_k$())));
    var tmp_3 = _IntSize___get_width__impl__d9yl4o(textLayoutResult.get_size_kd98kr_k$());
    var tmp_4 = _IntSize___get_height__impl__prv63b(textLayoutResult.get_size_kd98kr_k$());
    var tmp_5 = ensureNotNull(this.baselineCache_1);
    return _this__u8e3s4.layout_98mqts_k$(tmp_3, tmp_4, tmp_5, TextAnnotatedStringNode$measure$lambda(placeable));
  };
  protoOf(TextAnnotatedStringNode).minIntrinsicWidthNonExtension_i6vajg_k$ = function (intrinsicMeasureScope, measurable, height) {
    return this.minIntrinsicWidth_nsvhwg_k$(intrinsicMeasureScope, measurable, height);
  };
  protoOf(TextAnnotatedStringNode).minIntrinsicWidth_nsvhwg_k$ = function (_this__u8e3s4, measurable, height) {
    return getLayoutCache(this, _this__u8e3s4).minIntrinsicWidth_qyw3vr_k$(_this__u8e3s4.get_layoutDirection_7e37v0_k$());
  };
  protoOf(TextAnnotatedStringNode).minIntrinsicHeightNonExtension_y0q80l_k$ = function (intrinsicMeasureScope, measurable, width) {
    return this.minIntrinsicHeight_xt6ly1_k$(intrinsicMeasureScope, measurable, width);
  };
  protoOf(TextAnnotatedStringNode).minIntrinsicHeight_xt6ly1_k$ = function (_this__u8e3s4, measurable, width) {
    return getLayoutCache(this, _this__u8e3s4).intrinsicHeight_gfnfj4_k$(width, _this__u8e3s4.get_layoutDirection_7e37v0_k$());
  };
  protoOf(TextAnnotatedStringNode).maxIntrinsicWidthNonExtension_xk275i_k$ = function (intrinsicMeasureScope, measurable, height) {
    return this.maxIntrinsicWidth_epsb1u_k$(intrinsicMeasureScope, measurable, height);
  };
  protoOf(TextAnnotatedStringNode).maxIntrinsicWidth_epsb1u_k$ = function (_this__u8e3s4, measurable, height) {
    return getLayoutCache(this, _this__u8e3s4).maxIntrinsicWidth_n7cg3d_k$(_this__u8e3s4.get_layoutDirection_7e37v0_k$());
  };
  protoOf(TextAnnotatedStringNode).maxIntrinsicHeightNonExtension_7hmt09_k$ = function (intrinsicMeasureScope, measurable, width) {
    return this.maxIntrinsicHeight_nrifyt_k$(intrinsicMeasureScope, measurable, width);
  };
  protoOf(TextAnnotatedStringNode).maxIntrinsicHeight_nrifyt_k$ = function (_this__u8e3s4, measurable, width) {
    return getLayoutCache(this, _this__u8e3s4).intrinsicHeight_gfnfj4_k$(width, _this__u8e3s4.get_layoutDirection_7e37v0_k$());
  };
  protoOf(TextAnnotatedStringNode).drawNonExtension_tbnko0_k$ = function (contentDrawScope) {
    return this.draw_2h95cs_k$(contentDrawScope);
  };
  protoOf(TextAnnotatedStringNode).draw_2h95cs_k$ = function (_this__u8e3s4) {
    if (!this.get_isAttached_odsl1l_k$()) {
      return Unit_getInstance();
    }
    var tmp0_safe_receiver = this.selectionController_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.draw_4zpw4p_k$(_this__u8e3s4);
    }
    // Inline function 'androidx.compose.ui.graphics.drawscope.drawIntoCanvas' call
    var canvas = _this__u8e3s4.get_drawContext_ffwztu_k$().get_canvas_bshgm9_k$();
    var layoutCache = getLayoutCache(this, _this__u8e3s4);
    var textLayoutResult = layoutCache.get_textLayoutResult_u0m931_k$();
    var localParagraph = textLayoutResult.get_multiParagraph_xte3we_k$();
    var willClip = textLayoutResult.get_hasVisualOverflow_ocbqq5_k$() ? !(this.overflow_1 === Companion_getInstance_20().get_Visible_m15n1a_k$()) : false;
    if (willClip) {
      var width = _IntSize___get_width__impl__d9yl4o(textLayoutResult.get_size_kd98kr_k$());
      var height = _IntSize___get_height__impl__prv63b(textLayoutResult.get_size_kd98kr_k$());
      var bounds = Rect_0(Companion_getInstance_6().get_Zero_k6n73t_k$(), Size_0(width, height));
      canvas.save_fbe7h_k$();
      canvas.clipRect$default_a4bw85_k$(bounds);
    }
    var tmp;
    try {
      var tmp0_elvis_lhs = this.style_1.get_textDecoration_itgjwm_k$();
      var textDecoration = tmp0_elvis_lhs == null ? Companion_getInstance_23().get_None_wo6tgh_k$() : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = this.style_1.get_shadow_jgtb8p_k$();
      var shadow = tmp1_elvis_lhs == null ? Companion_getInstance_24().get_None_wo6tgh_k$() : tmp1_elvis_lhs;
      var tmp2_elvis_lhs = this.style_1.get_drawStyle_arbehw_k$();
      var drawStyle = tmp2_elvis_lhs == null ? Fill_getInstance() : tmp2_elvis_lhs;
      var brush = this.style_1.get_brush_ipcjyp_k$();
      var tmp_0;
      if (!(brush == null)) {
        var alpha = this.style_1.get_alpha_iooth1_k$();
        localParagraph.paint$default_3gfbfa_k$(canvas, brush, alpha, shadow, textDecoration, drawStyle);
        tmp_0 = Unit_getInstance();
      } else {
        var tmp3_safe_receiver = this.overrideColor_1;
        var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.invoke_ejt8ap_k$();
        var tmp_1;
        var tmp_2 = tmp4_elvis_lhs;
        if ((tmp_2 == null ? null : new Color(tmp_2)) == null) {
          tmp_1 = Companion_getInstance().get_Unspecified_j397pn_k$();
        } else {
          tmp_1 = tmp4_elvis_lhs;
        }
        var overrideColorVal = tmp_1;
        var tmp_3;
        // Inline function 'androidx.compose.ui.graphics.isSpecified' call
        if (!equals(_Color___get_value__impl__1pls5m(overrideColorVal), _Color___get_value__impl__1pls5m(Companion_getInstance().get_Unspecified_j397pn_k$()))) {
          tmp_3 = overrideColorVal;
        } else {
          // Inline function 'androidx.compose.ui.graphics.isSpecified' call
          var this_0 = this.style_1.get_color_lnp1vl_k$();
          if (!equals(_Color___get_value__impl__1pls5m(this_0), _Color___get_value__impl__1pls5m(Companion_getInstance().get_Unspecified_j397pn_k$()))) {
            tmp_3 = this.style_1.get_color_lnp1vl_k$();
          } else {
            tmp_3 = Companion_getInstance().get_Black_t4k9fh_k$();
          }
        }
        var color = tmp_3;
        localParagraph.paint$default_rvqyft_k$(canvas, color, shadow, textDecoration, drawStyle);
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    }finally {
      if (willClip) {
        canvas.restore_a1ykhu_k$();
      }
    }
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    var this_1 = this.placeholders_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_1 == null ? true : this_1.isEmpty_y1axqb_k$())) {
      _this__u8e3s4.drawContent_m0wwjp_k$();
    }
  };
  function textSubstitution$factory() {
    return getPropertyCallableRef('textSubstitution', 1, KMutableProperty1, function (receiver) {
      return _get_textSubstitution__7vuyf3(receiver);
    }, function (receiver, value) {
      return _set_textSubstitution__y24uh9(receiver, value);
    });
  }
  function textSubstitution$factory_0() {
    return getPropertyCallableRef('textSubstitution', 1, KMutableProperty1, function (receiver) {
      return _get_textSubstitution__7vuyf3(receiver);
    }, function (receiver, value) {
      return _set_textSubstitution__y24uh9(receiver, value);
    });
  }
  function _get_text__de5ose_4($this) {
    return $this.text_1;
  }
  function _get_style__b8k6v4_4($this) {
    return $this.style_1;
  }
  function _get_fontFamilyResolver__s3uj2m_4($this) {
    return $this.fontFamilyResolver_1;
  }
  function _get_overflow__bx70nd_4($this) {
    return $this.overflow_1;
  }
  function _get_softWrap__9vu0jt_4($this) {
    return $this.softWrap_1;
  }
  function _get_maxLines__bh9jcg_4($this) {
    return $this.maxLines_1;
  }
  function _get_minLines__o96fmm_4($this) {
    return $this.minLines_1;
  }
  function _get_color__iw9cfm_2($this) {
    return $this.color_1;
  }
  function TextStringSimpleElement(text, style, fontFamilyResolver, overflow, softWrap, maxLines, minLines, color) {
    overflow = overflow === VOID ? Companion_getInstance_20().get_Clip_ypf2ge_k$() : overflow;
    softWrap = softWrap === VOID ? true : softWrap;
    maxLines = maxLines === VOID ? IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$() : maxLines;
    minLines = minLines === VOID ? get_DefaultMinLines() : minLines;
    color = color === VOID ? null : color;
    ModifierNodeElement.call(this);
    this.text_1 = text;
    this.style_1 = style;
    this.fontFamilyResolver_1 = fontFamilyResolver;
    this.overflow_1 = overflow;
    this.softWrap_1 = softWrap;
    this.maxLines_1 = maxLines;
    this.minLines_1 = minLines;
    this.color_1 = color;
  }
  protoOf(TextStringSimpleElement).create_md4cuc_k$ = function () {
    return new TextStringSimpleNode(this.text_1, this.style_1, this.fontFamilyResolver_1, this.overflow_1, this.softWrap_1, this.maxLines_1, this.minLines_1, this.color_1);
  };
  protoOf(TextStringSimpleElement).update_49fxw2_k$ = function (node) {
    node.doInvalidations_d0moyz_k$(node.updateDraw_3yxil3_k$(this.color_1, this.style_1), node.updateText_cy0j6s_k$(this.text_1), node.updateLayoutRelatedArgs_6rpwfu_k$(this.style_1, this.minLines_1, this.maxLines_1, this.softWrap_1, this.fontFamilyResolver_1, this.overflow_1));
  };
  protoOf(TextStringSimpleElement).update_9wd57p_k$ = function (node) {
    return this.update_49fxw2_k$(node instanceof TextStringSimpleNode ? node : THROW_CCE());
  };
  protoOf(TextStringSimpleElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextStringSimpleElement))
      return false;
    if (!equals(this.color_1, other.color_1))
      return false;
    if (!(this.text_1 === other.text_1))
      return false;
    if (!this.style_1.equals(other.style_1))
      return false;
    if (!equals(this.fontFamilyResolver_1, other.fontFamilyResolver_1))
      return false;
    if (!(this.overflow_1 === other.overflow_1))
      return false;
    if (!(this.softWrap_1 === other.softWrap_1))
      return false;
    if (!(this.maxLines_1 === other.maxLines_1))
      return false;
    if (!(this.minLines_1 === other.minLines_1))
      return false;
    return true;
  };
  protoOf(TextStringSimpleElement).hashCode = function () {
    var result = getStringHashCode(this.text_1);
    result = imul(31, result) + this.style_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.fontFamilyResolver_1) | 0;
    result = imul(31, result) + TextOverflow__hashCode_impl_kqdwgt(this.overflow_1) | 0;
    result = imul(31, result) + getBooleanHashCode(this.softWrap_1) | 0;
    result = imul(31, result) + this.maxLines_1 | 0;
    result = imul(31, result) + this.minLines_1 | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.color_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(TextStringSimpleElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
  };
  function _set_text__9udp6y_2($this, _set____db54di) {
    $this.text_1 = _set____db54di;
  }
  function _get_text__de5ose_5($this) {
    return $this.text_1;
  }
  function _set_style__ksk9mc_2($this, _set____db54di) {
    $this.style_1 = _set____db54di;
  }
  function _get_style__b8k6v4_5($this) {
    return $this.style_1;
  }
  function _set_fontFamilyResolver__5u0s1q_2($this, _set____db54di) {
    $this.fontFamilyResolver_1 = _set____db54di;
  }
  function _get_fontFamilyResolver__s3uj2m_5($this) {
    return $this.fontFamilyResolver_1;
  }
  function _set_overflow__oq3c45_2($this, _set____db54di) {
    $this.overflow_1 = _set____db54di;
  }
  function _get_overflow__bx70nd_5($this) {
    return $this.overflow_1;
  }
  function _set_softWrap__2x2awz_2($this, _set____db54di) {
    $this.softWrap_1 = _set____db54di;
  }
  function _get_softWrap__9vu0jt_5($this) {
    return $this.softWrap_1;
  }
  function _set_maxLines__oa5ut8_2($this, _set____db54di) {
    $this.maxLines_1 = _set____db54di;
  }
  function _get_maxLines__bh9jcg_5($this) {
    return $this.maxLines_1;
  }
  function _set_minLines__xz1avq_2($this, _set____db54di) {
    $this.minLines_1 = _set____db54di;
  }
  function _get_minLines__o96fmm_5($this) {
    return $this.minLines_1;
  }
  function _set_overrideColor__4o8y0e_0($this, _set____db54di) {
    $this.overrideColor_1 = _set____db54di;
  }
  function _get_overrideColor__ajikhy_0($this) {
    return $this.overrideColor_1;
  }
  function _set_baselineCache__fll3fs_0($this, _set____db54di) {
    $this.baselineCache_1 = _set____db54di;
  }
  function _get_baselineCache__dtkxg_0($this) {
    return $this.baselineCache_1;
  }
  function _set__layoutCache__vb7hoi_0($this, _set____db54di) {
    $this._layoutCache_1 = _set____db54di;
  }
  function _get__layoutCache__frgr4e_0($this) {
    return $this._layoutCache_1;
  }
  function _get_layoutCache__kch9ev_1($this) {
    if ($this._layoutCache_1 == null) {
      $this._layoutCache_1 = new ParagraphLayoutCache($this.text_1, $this.style_1, $this.fontFamilyResolver_1, $this.overflow_1, $this.softWrap_1, $this.maxLines_1, $this.minLines_1);
    }
    return ensureNotNull($this._layoutCache_1);
  }
  function getLayoutCache_0($this, density) {
    var tmp0_safe_receiver = _get_textSubstitution__7vuyf3_0($this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp;
      if (tmp0_safe_receiver.isShowingSubstitution_1) {
        var tmp0_safe_receiver_0 = tmp0_safe_receiver.layoutCache_1;
        if (tmp0_safe_receiver_0 == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'kotlin.also' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.foundation.text.modifiers.TextStringSimpleNode.getLayoutCache.<anonymous>.<anonymous>.<anonymous>' call
          tmp0_safe_receiver_0.set_density_7gu4pk_k$(density);
          return tmp0_safe_receiver_0;
        }
        tmp = Unit_getInstance();
      }
    }
    // Inline function 'kotlin.also' call
    var this_0 = _get_layoutCache__kch9ev_1($this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.text.modifiers.TextStringSimpleNode.getLayoutCache.<anonymous>' call
    this_0.set_density_7gu4pk_k$(density);
    return this_0;
  }
  function _set_semanticsTextLayoutResult__952dss_0($this, _set____db54di) {
    $this.semanticsTextLayoutResult_1 = _set____db54di;
  }
  function _get_semanticsTextLayoutResult__bdwwr4_0($this) {
    return $this.semanticsTextLayoutResult_1;
  }
  function TextSubstitutionValue_0(original, substitution, isShowingSubstitution, layoutCache) {
    isShowingSubstitution = isShowingSubstitution === VOID ? false : isShowingSubstitution;
    layoutCache = layoutCache === VOID ? null : layoutCache;
    this.original_1 = original;
    this.substitution_1 = substitution;
    this.isShowingSubstitution_1 = isShowingSubstitution;
    this.layoutCache_1 = layoutCache;
  }
  protoOf(TextSubstitutionValue_0).get_original_8zw1nq_k$ = function () {
    return this.original_1;
  };
  protoOf(TextSubstitutionValue_0).set_substitution_tfxjrk_k$ = function (_set____db54di) {
    this.substitution_1 = _set____db54di;
  };
  protoOf(TextSubstitutionValue_0).get_substitution_i7fi9y_k$ = function () {
    return this.substitution_1;
  };
  protoOf(TextSubstitutionValue_0).set_isShowingSubstitution_x0lawq_k$ = function (_set____db54di) {
    this.isShowingSubstitution_1 = _set____db54di;
  };
  protoOf(TextSubstitutionValue_0).get_isShowingSubstitution_bhjsy9_k$ = function () {
    return this.isShowingSubstitution_1;
  };
  protoOf(TextSubstitutionValue_0).set_layoutCache_cyu0cq_k$ = function (_set____db54di) {
    this.layoutCache_1 = _set____db54di;
  };
  protoOf(TextSubstitutionValue_0).get_layoutCache_oazvn5_k$ = function () {
    return this.layoutCache_1;
  };
  protoOf(TextSubstitutionValue_0).component1_7eebsc_k$ = function () {
    return this.original_1;
  };
  protoOf(TextSubstitutionValue_0).component2_7eebsb_k$ = function () {
    return this.substitution_1;
  };
  protoOf(TextSubstitutionValue_0).component3_7eebsa_k$ = function () {
    return this.isShowingSubstitution_1;
  };
  protoOf(TextSubstitutionValue_0).component4_7eebs9_k$ = function () {
    return this.layoutCache_1;
  };
  protoOf(TextSubstitutionValue_0).copy_5j052z_k$ = function (original, substitution, isShowingSubstitution, layoutCache) {
    return new TextSubstitutionValue_0(original, substitution, isShowingSubstitution, layoutCache);
  };
  protoOf(TextSubstitutionValue_0).copy$default_tsf816_k$ = function (original, substitution, isShowingSubstitution, layoutCache, $super) {
    original = original === VOID ? this.original_1 : original;
    substitution = substitution === VOID ? this.substitution_1 : substitution;
    isShowingSubstitution = isShowingSubstitution === VOID ? this.isShowingSubstitution_1 : isShowingSubstitution;
    layoutCache = layoutCache === VOID ? this.layoutCache_1 : layoutCache;
    return $super === VOID ? this.copy_5j052z_k$(original, substitution, isShowingSubstitution, layoutCache) : $super.copy_5j052z_k$.call(this, original, substitution, isShowingSubstitution, layoutCache);
  };
  protoOf(TextSubstitutionValue_0).toString = function () {
    return 'TextSubstitutionValue(original=' + this.original_1 + ', substitution=' + this.substitution_1 + ', isShowingSubstitution=' + this.isShowingSubstitution_1 + ', layoutCache=' + this.layoutCache_1 + ')';
  };
  protoOf(TextSubstitutionValue_0).hashCode = function () {
    var result = getStringHashCode(this.original_1);
    result = imul(result, 31) + getStringHashCode(this.substitution_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.isShowingSubstitution_1) | 0;
    result = imul(result, 31) + (this.layoutCache_1 == null ? 0 : hashCode(this.layoutCache_1)) | 0;
    return result;
  };
  protoOf(TextSubstitutionValue_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextSubstitutionValue_0))
      return false;
    var tmp0_other_with_cast = other instanceof TextSubstitutionValue_0 ? other : THROW_CCE();
    if (!(this.original_1 === tmp0_other_with_cast.original_1))
      return false;
    if (!(this.substitution_1 === tmp0_other_with_cast.substitution_1))
      return false;
    if (!(this.isShowingSubstitution_1 === tmp0_other_with_cast.isShowingSubstitution_1))
      return false;
    if (!equals(this.layoutCache_1, tmp0_other_with_cast.layoutCache_1))
      return false;
    return true;
  };
  function _set_textSubstitution__y24uh9_0($this, _set____db54di) {
    var this_0 = $this.textSubstitution$delegate_1;
    textSubstitution$factory_1();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get_textSubstitution__7vuyf3_0($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.textSubstitution$delegate_1;
    textSubstitution$factory_2();
    return this_0.get_value_j01efc_k$();
  }
  function setSubstitution_0($this, updatedText) {
    var currentTextSubstitution = _get_textSubstitution__7vuyf3_0($this);
    if (!(currentTextSubstitution == null)) {
      if (updatedText === currentTextSubstitution.substitution_1) {
        return false;
      }
      currentTextSubstitution.substitution_1 = updatedText;
      var tmp0_safe_receiver = currentTextSubstitution.layoutCache_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        tmp0_safe_receiver.update_itxc3q_k$(updatedText, $this.style_1, $this.fontFamilyResolver_1, $this.overflow_1, $this.softWrap_1, $this.maxLines_1, $this.minLines_1);
        tmp = Unit_getInstance();
      }
      if (tmp == null)
        return false;
    } else {
      var newTextSubstitution = new TextSubstitutionValue_0($this.text_1, updatedText);
      var substitutionLayoutCache = new ParagraphLayoutCache(updatedText, $this.style_1, $this.fontFamilyResolver_1, $this.overflow_1, $this.softWrap_1, $this.maxLines_1, $this.minLines_1);
      substitutionLayoutCache.set_density_7gu4pk_k$(_get_layoutCache__kch9ev_1($this).get_density_qy0267_k$());
      newTextSubstitution.layoutCache_1 = substitutionLayoutCache;
      _set_textSubstitution__y24uh9_0($this, newTextSubstitution);
    }
    return true;
  }
  function clearSubstitution_0($this) {
    _set_textSubstitution__y24uh9_0($this, null);
  }
  function TextStringSimpleNode$applySemantics$lambda(this$0) {
    return function (textLayoutResult) {
      var tmp = _get_layoutCache__kch9ev_1(this$0);
      var tmp_0 = this$0.style_1;
      var tmp0_safe_receiver = this$0.overrideColor_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.invoke_ejt8ap_k$();
      var tmp_1;
      var tmp_2 = tmp1_elvis_lhs;
      if ((tmp_2 == null ? null : new Color(tmp_2)) == null) {
        tmp_1 = Companion_getInstance().get_Unspecified_j397pn_k$();
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      var tmp2_safe_receiver = tmp.slowCreateTextLayoutResultOrNull_vc1pp7_k$(tmp_0.merge$default_jrrqwk_k$(tmp_1));
      var tmp_3;
      if (tmp2_safe_receiver == null) {
        tmp_3 = null;
      } else {
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.foundation.text.modifiers.TextStringSimpleNode.applySemantics.<anonymous>.<anonymous>' call
        textLayoutResult.add_utx5q5_k$(tmp2_safe_receiver);
        tmp_3 = tmp2_safe_receiver;
      }
      var layout = tmp_3;
      return !(layout == null);
    };
  }
  function TextStringSimpleNode$applySemantics$lambda_0(this$0) {
    return function (updatedText) {
      setSubstitution_0(this$0, updatedText.get_text_wouvsm_k$());
      invalidateSemantics(this$0);
      return true;
    };
  }
  function TextStringSimpleNode$applySemantics$lambda_1(this$0) {
    return function (it) {
      var tmp;
      if (_get_textSubstitution__7vuyf3_0(this$0) == null) {
        return false;
      }
      var tmp0_safe_receiver = _get_textSubstitution__7vuyf3_0(this$0);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = Unit_getInstance();
      } else {
        tmp0_safe_receiver.isShowingSubstitution_1 = it;
        tmp_0 = Unit_getInstance();
      }
      invalidateSemantics(this$0);
      invalidateMeasurement(this$0);
      invalidateDraw(this$0);
      return true;
    };
  }
  function TextStringSimpleNode$applySemantics$lambda_2(this$0) {
    return function () {
      clearSubstitution_0(this$0);
      invalidateSemantics(this$0);
      invalidateMeasurement(this$0);
      invalidateDraw(this$0);
      return true;
    };
  }
  function TextStringSimpleNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.place$default_lcv1ed_k$($placeable, 0, 0);
      return Unit_getInstance();
    };
  }
  function TextStringSimpleNode(text, style, fontFamilyResolver, overflow, softWrap, maxLines, minLines, overrideColor) {
    overflow = overflow === VOID ? Companion_getInstance_20().get_Clip_ypf2ge_k$() : overflow;
    softWrap = softWrap === VOID ? true : softWrap;
    maxLines = maxLines === VOID ? IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$() : maxLines;
    minLines = minLines === VOID ? get_DefaultMinLines() : minLines;
    overrideColor = overrideColor === VOID ? null : overrideColor;
    Node.call(this);
    this.text_1 = text;
    this.style_1 = style;
    this.fontFamilyResolver_1 = fontFamilyResolver;
    this.overflow_1 = overflow;
    this.softWrap_1 = softWrap;
    this.maxLines_1 = maxLines;
    this.minLines_1 = minLines;
    this.overrideColor_1 = overrideColor;
    this.baselineCache_1 = null;
    this._layoutCache_1 = null;
    this.semanticsTextLayoutResult_1 = null;
    this.textSubstitution$delegate_1 = mutableStateOf(null);
  }
  protoOf(TextStringSimpleNode).updateDraw_3yxil3_k$ = function (color, style) {
    var changed = false;
    if (!equals(color, this.overrideColor_1)) {
      changed = true;
    }
    this.overrideColor_1 = color;
    changed = changed ? true : !style.hasSameDrawAffectingAttributes_drzoqy_k$(this.style_1);
    return changed;
  };
  protoOf(TextStringSimpleNode).updateText_cy0j6s_k$ = function (text) {
    if (this.text_1 === text)
      return false;
    this.text_1 = text;
    clearSubstitution_0(this);
    return true;
  };
  protoOf(TextStringSimpleNode).updateLayoutRelatedArgs_6rpwfu_k$ = function (style, minLines, maxLines, softWrap, fontFamilyResolver, overflow) {
    var changed;
    changed = !this.style_1.hasSameLayoutAffectingAttributes_42axi4_k$(style);
    this.style_1 = style;
    if (!(this.minLines_1 === minLines)) {
      this.minLines_1 = minLines;
      changed = true;
    }
    if (!(this.maxLines_1 === maxLines)) {
      this.maxLines_1 = maxLines;
      changed = true;
    }
    if (!(this.softWrap_1 === softWrap)) {
      this.softWrap_1 = softWrap;
      changed = true;
    }
    if (!equals(this.fontFamilyResolver_1, fontFamilyResolver)) {
      this.fontFamilyResolver_1 = fontFamilyResolver;
      changed = true;
    }
    if (!(this.overflow_1 === overflow)) {
      this.overflow_1 = overflow;
      changed = true;
    }
    return changed;
  };
  protoOf(TextStringSimpleNode).doInvalidations_d0moyz_k$ = function (drawChanged, textChanged, layoutChanged) {
    if (!this.get_isAttached_odsl1l_k$()) {
      return Unit_getInstance();
    }
    if (textChanged ? true : drawChanged ? !(this.semanticsTextLayoutResult_1 == null) : false) {
      invalidateSemantics(this);
    }
    if (textChanged ? true : layoutChanged) {
      _get_layoutCache__kch9ev_1(this).update_itxc3q_k$(this.text_1, this.style_1, this.fontFamilyResolver_1, this.overflow_1, this.softWrap_1, this.maxLines_1, this.minLines_1);
      invalidateMeasurement(this);
      invalidateDraw(this);
    }
    if (drawChanged) {
      invalidateDraw(this);
    }
  };
  protoOf(TextStringSimpleNode).applySemantics_xpyasu_k$ = function (_this__u8e3s4) {
    var localSemanticsTextLayoutResult = this.semanticsTextLayoutResult_1;
    if (localSemanticsTextLayoutResult == null) {
      localSemanticsTextLayoutResult = TextStringSimpleNode$applySemantics$lambda(this);
      this.semanticsTextLayoutResult_1 = localSemanticsTextLayoutResult;
    }
    set_text(_this__u8e3s4, AnnotatedString_init_$Create$(this.text_1));
    var currentTextSubstitution = _get_textSubstitution__7vuyf3_0(this);
    if (!(currentTextSubstitution == null)) {
      set_isShowingTextSubstitution(_this__u8e3s4, currentTextSubstitution.isShowingSubstitution_1);
      set_textSubstitution(_this__u8e3s4, AnnotatedString_init_$Create$(currentTextSubstitution.substitution_1));
    }
    setTextSubstitution(_this__u8e3s4, VOID, TextStringSimpleNode$applySemantics$lambda_0(this));
    showTextSubstitution(_this__u8e3s4, VOID, TextStringSimpleNode$applySemantics$lambda_1(this));
    clearTextSubstitution(_this__u8e3s4, VOID, TextStringSimpleNode$applySemantics$lambda_2(this));
    getTextLayoutResult(_this__u8e3s4, VOID, localSemanticsTextLayoutResult);
  };
  protoOf(TextStringSimpleNode).measure_z885gt_k$ = function (_this__u8e3s4, measurable, constraints) {
    var layoutCache = getLayoutCache_0(this, _this__u8e3s4);
    var didChangeLayout = layoutCache.layoutWithConstraints_o6pal7_k$(constraints, _this__u8e3s4.get_layoutDirection_7e37v0_k$());
    layoutCache.get_observeFontChanges_cebiwh_k$();
    var paragraph = ensureNotNull(layoutCache.get_paragraph_ua17wb_k$());
    var layoutSize = layoutCache.get_layoutSize_k9ow6t_k$();
    if (didChangeLayout) {
      invalidateLayer(this);
      var cache = this.baselineCache_1;
      if (cache == null) {
        cache = LinkedHashMap_init_$Create$_0(2);
      }
      // Inline function 'kotlin.collections.set' call
      var this_0 = cache;
      var key = get_FirstBaseline();
      // Inline function 'kotlin.math.roundToInt' call
      var this_1 = paragraph.get_firstBaseline_s5430_k$();
      var value = roundToInt(this_1);
      this_0.put_4fpzoq_k$(key, value);
      // Inline function 'kotlin.collections.set' call
      var this_2 = cache;
      var key_0 = get_LastBaseline();
      // Inline function 'kotlin.math.roundToInt' call
      var this_3 = paragraph.get_lastBaseline_inuptw_k$();
      var value_0 = roundToInt(this_3);
      this_2.put_4fpzoq_k$(key_0, value_0);
      this.baselineCache_1 = cache;
    }
    var placeable = measurable.measure_4dmfk1_k$(fixedCoerceHeightAndWidthForBits(Companion_getInstance_12(), _IntSize___get_width__impl__d9yl4o(layoutSize), _IntSize___get_height__impl__prv63b(layoutSize)));
    var tmp = _IntSize___get_width__impl__d9yl4o(layoutSize);
    var tmp_0 = _IntSize___get_height__impl__prv63b(layoutSize);
    var tmp_1 = ensureNotNull(this.baselineCache_1);
    return _this__u8e3s4.layout_98mqts_k$(tmp, tmp_0, tmp_1, TextStringSimpleNode$measure$lambda(placeable));
  };
  protoOf(TextStringSimpleNode).minIntrinsicWidth_nsvhwg_k$ = function (_this__u8e3s4, measurable, height) {
    return getLayoutCache_0(this, _this__u8e3s4).minIntrinsicWidth_qyw3vr_k$(_this__u8e3s4.get_layoutDirection_7e37v0_k$());
  };
  protoOf(TextStringSimpleNode).minIntrinsicHeight_xt6ly1_k$ = function (_this__u8e3s4, measurable, width) {
    return getLayoutCache_0(this, _this__u8e3s4).intrinsicHeight_gfnfj4_k$(width, _this__u8e3s4.get_layoutDirection_7e37v0_k$());
  };
  protoOf(TextStringSimpleNode).maxIntrinsicWidth_epsb1u_k$ = function (_this__u8e3s4, measurable, height) {
    return getLayoutCache_0(this, _this__u8e3s4).maxIntrinsicWidth_n7cg3d_k$(_this__u8e3s4.get_layoutDirection_7e37v0_k$());
  };
  protoOf(TextStringSimpleNode).maxIntrinsicHeight_nrifyt_k$ = function (_this__u8e3s4, measurable, width) {
    return getLayoutCache_0(this, _this__u8e3s4).intrinsicHeight_gfnfj4_k$(width, _this__u8e3s4.get_layoutDirection_7e37v0_k$());
  };
  protoOf(TextStringSimpleNode).draw_2h95cs_k$ = function (_this__u8e3s4) {
    if (!this.get_isAttached_odsl1l_k$()) {
      return Unit_getInstance();
    }
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      var value = _get_layoutCache__kch9ev_1(this).get_paragraph_ua17wb_k$();
      // Inline function 'kotlin.contracts.contract' call
      if (value == null) {
        // Inline function 'androidx.compose.foundation.text.modifiers.TextStringSimpleNode.draw.<anonymous>' call
        var message = 'no paragraph';
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = value;
        break $l$block;
      }
    }
    var localParagraph = tmp$ret$1;
    // Inline function 'androidx.compose.ui.graphics.drawscope.drawIntoCanvas' call
    var canvas = _this__u8e3s4.get_drawContext_ffwztu_k$().get_canvas_bshgm9_k$();
    var willClip = _get_layoutCache__kch9ev_1(this).get_didOverflow_rtzd1k_k$();
    if (willClip) {
      var width = _IntSize___get_width__impl__d9yl4o(_get_layoutCache__kch9ev_1(this).get_layoutSize_k9ow6t_k$());
      var height = _IntSize___get_height__impl__prv63b(_get_layoutCache__kch9ev_1(this).get_layoutSize_k9ow6t_k$());
      var bounds = Rect_0(Companion_getInstance_6().get_Zero_k6n73t_k$(), Size_0(width, height));
      canvas.save_fbe7h_k$();
      canvas.clipRect$default_a4bw85_k$(bounds);
    }
    var tmp;
    try {
      var tmp0_elvis_lhs = this.style_1.get_textDecoration_itgjwm_k$();
      var textDecoration = tmp0_elvis_lhs == null ? Companion_getInstance_23().get_None_wo6tgh_k$() : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = this.style_1.get_shadow_jgtb8p_k$();
      var shadow = tmp1_elvis_lhs == null ? Companion_getInstance_24().get_None_wo6tgh_k$() : tmp1_elvis_lhs;
      var tmp2_elvis_lhs = this.style_1.get_drawStyle_arbehw_k$();
      var drawStyle = tmp2_elvis_lhs == null ? Fill_getInstance() : tmp2_elvis_lhs;
      var brush = this.style_1.get_brush_ipcjyp_k$();
      var tmp_0;
      if (!(brush == null)) {
        var alpha = this.style_1.get_alpha_iooth1_k$();
        localParagraph.paint$default_9oas5_k$(canvas, brush, alpha, shadow, textDecoration, drawStyle);
        tmp_0 = Unit_getInstance();
      } else {
        var tmp3_safe_receiver = this.overrideColor_1;
        var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.invoke_ejt8ap_k$();
        var tmp_1;
        var tmp_2 = tmp4_elvis_lhs;
        if ((tmp_2 == null ? null : new Color(tmp_2)) == null) {
          tmp_1 = Companion_getInstance().get_Unspecified_j397pn_k$();
        } else {
          tmp_1 = tmp4_elvis_lhs;
        }
        var overrideColorVal = tmp_1;
        var tmp_3;
        // Inline function 'androidx.compose.ui.graphics.isSpecified' call
        if (!equals(_Color___get_value__impl__1pls5m(overrideColorVal), _Color___get_value__impl__1pls5m(Companion_getInstance().get_Unspecified_j397pn_k$()))) {
          tmp_3 = overrideColorVal;
        } else {
          // Inline function 'androidx.compose.ui.graphics.isSpecified' call
          var this_0 = this.style_1.get_color_lnp1vl_k$();
          if (!equals(_Color___get_value__impl__1pls5m(this_0), _Color___get_value__impl__1pls5m(Companion_getInstance().get_Unspecified_j397pn_k$()))) {
            tmp_3 = this.style_1.get_color_lnp1vl_k$();
          } else {
            tmp_3 = Companion_getInstance().get_Black_t4k9fh_k$();
          }
        }
        var color = tmp_3;
        localParagraph.paint$default_f7qoik_k$(canvas, color, shadow, textDecoration, drawStyle);
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    }finally {
      if (willClip) {
        canvas.restore_a1ykhu_k$();
      }
    }
  };
  function textSubstitution$factory_1() {
    return getPropertyCallableRef('textSubstitution', 1, KMutableProperty1, function (receiver) {
      return _get_textSubstitution__7vuyf3_0(receiver);
    }, function (receiver, value) {
      return _set_textSubstitution__y24uh9_0(receiver, value);
    });
  }
  function textSubstitution$factory_2() {
    return getPropertyCallableRef('textSubstitution', 1, KMutableProperty1, function (receiver) {
      return _get_textSubstitution__7vuyf3_0(receiver);
    }, function (receiver, value) {
      return _set_textSubstitution__y24uh9_0(receiver, value);
    });
  }
  function _get_coordinatesCallback__lpbrxt($this) {
    return $this.coordinatesCallback_1;
  }
  function _get_layoutResultCallback__dmyr9b($this) {
    return $this.layoutResultCallback_1;
  }
  function _set__previousTextLayoutResult__2v9job($this, _set____db54di) {
    $this._previousTextLayoutResult_1 = _set____db54di;
  }
  function _get__previousTextLayoutResult__mf0pz($this) {
    return $this._previousTextLayoutResult_1;
  }
  function _set__previousLastVisibleOffset__pix48u($this, _set____db54di) {
    $this._previousLastVisibleOffset_1 = _set____db54di;
  }
  function _get__previousLastVisibleOffset__qxqunm($this) {
    return $this._previousLastVisibleOffset_1;
  }
  function _get_lastVisibleOffset__v7xite(_this__u8e3s4, $this) {
    if (!($this._previousTextLayoutResult_1 === _this__u8e3s4)) {
      var tmp;
      if (!_this__u8e3s4.get_didOverflowHeight_k18vi9_k$() ? true : _this__u8e3s4.get_multiParagraph_xte3we_k$().get_didExceedMaxLines_xyxo57_k$()) {
        tmp = _this__u8e3s4.get_lineCount_lmaazy_k$() - 1 | 0;
      } else {
        var finalVisibleLine = coerceAtMost(_this__u8e3s4.getLineForVerticalPosition_lon9k6_k$(_IntSize___get_height__impl__prv63b(_this__u8e3s4.get_size_kd98kr_k$())), _this__u8e3s4.get_lineCount_lmaazy_k$() - 1 | 0);
        while (finalVisibleLine >= 0 ? _this__u8e3s4.getLineTop_q0a6r_k$(finalVisibleLine) >= _IntSize___get_height__impl__prv63b(_this__u8e3s4.get_size_kd98kr_k$()) : false) {
          finalVisibleLine = finalVisibleLine - 1 | 0;
        }
        tmp = coerceAtLeast(finalVisibleLine, 0);
      }
      var lastVisibleLine = tmp;
      $this._previousLastVisibleOffset_1 = _this__u8e3s4.getLineEnd_o6geci_k$(lastVisibleLine, true);
      $this._previousTextLayoutResult_1 = _this__u8e3s4;
    }
    return $this._previousLastVisibleOffset_1;
  }
  function MultiWidgetSelectionDelegate(selectableId, coordinatesCallback, layoutResultCallback) {
    this.selectableId_1 = selectableId;
    this.coordinatesCallback_1 = coordinatesCallback;
    this.layoutResultCallback_1 = layoutResultCallback;
    this._previousTextLayoutResult_1 = null;
    this._previousLastVisibleOffset_1 = -1;
  }
  protoOf(MultiWidgetSelectionDelegate).get_selectableId_qduvty_k$ = function () {
    return this.selectableId_1;
  };
  protoOf(MultiWidgetSelectionDelegate).appendSelectableInfoToBuilder_5gt8yp_k$ = function (builder) {
    var tmp0_elvis_lhs = this.getLayoutCoordinates_w2x35x_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var layoutCoordinates = tmp;
    var tmp1_elvis_lhs = this.layoutResultCallback_1();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var textLayoutResult = tmp_0;
    var relativePosition = builder.get_containerCoordinates_ez5lod_k$().localPositionOf_hrey0l_k$(layoutCoordinates, Companion_getInstance_6().get_Zero_k6n73t_k$());
    var localPosition = Offset__minus_impl_hoj2c0(builder.get_currentPosition_xhg93j_k$(), relativePosition);
    var tmp_1;
    if (get_isUnspecified(builder.get_previousHandlePosition_7iunpj_k$())) {
      tmp_1 = Companion_getInstance_6().get_Unspecified_gis8po_k$();
    } else {
      tmp_1 = Offset__minus_impl_hoj2c0(builder.get_previousHandlePosition_7iunpj_k$(), relativePosition);
    }
    var localPreviousHandlePosition = tmp_1;
    appendSelectableInfo(builder, textLayoutResult, localPosition, localPreviousHandlePosition, this.selectableId_1);
  };
  protoOf(MultiWidgetSelectionDelegate).getSelectAllSelection_9ejth9_k$ = function () {
    var tmp0_elvis_lhs = this.layoutResultCallback_1();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var textLayoutResult = tmp;
    var start = 0;
    var end = textLayoutResult.get_layoutInput_o7gjah_k$().get_text_wouvsm_k$().get_length_g42xv3_k$();
    var tmp_0 = new AnchorInfo(textLayoutResult.getBidiRunDirection_c67d8i_k$(start), start, this.selectableId_1);
    // Inline function 'kotlin.math.max' call
    var a = end - 1 | 0;
    var tmp$ret$0 = Math.max(a, 0);
    return new Selection(tmp_0, new AnchorInfo(textLayoutResult.getBidiRunDirection_c67d8i_k$(tmp$ret$0), end, this.selectableId_1), false);
  };
  protoOf(MultiWidgetSelectionDelegate).getHandlePosition_oe8s1c_k$ = function (selection, isStartHandle) {
    if ((isStartHandle ? !selection.get_start_iypx6h_k$().get_selectableId_qduvty_k$().equals(this.selectableId_1) : false) ? true : !isStartHandle ? !selection.get_end_18j6ha_k$().get_selectableId_qduvty_k$().equals(this.selectableId_1) : false) {
      return Companion_getInstance_6().get_Unspecified_gis8po_k$();
    }
    if (this.getLayoutCoordinates_w2x35x_k$() == null)
      return Companion_getInstance_6().get_Unspecified_gis8po_k$();
    var tmp0_elvis_lhs = this.layoutResultCallback_1();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Companion_getInstance_6().get_Unspecified_gis8po_k$();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var textLayoutResult = tmp;
    var offset = isStartHandle ? selection.get_start_iypx6h_k$().get_offset_hjmqak_k$() : selection.get_end_18j6ha_k$().get_offset_hjmqak_k$();
    var coercedOffset = coerceIn(offset, 0, _get_lastVisibleOffset__v7xite(textLayoutResult, this));
    return getSelectionHandleCoordinates(textLayoutResult, coercedOffset, isStartHandle, selection.get_handlesCrossed_5utwpv_k$());
  };
  protoOf(MultiWidgetSelectionDelegate).getLayoutCoordinates_w2x35x_k$ = function () {
    var layoutCoordinates = this.coordinatesCallback_1();
    if (layoutCoordinates == null ? true : !layoutCoordinates.get_isAttached_odsl1l_k$())
      return null;
    return layoutCoordinates;
  };
  protoOf(MultiWidgetSelectionDelegate).getText_18q731_k$ = function () {
    var tmp0_elvis_lhs = this.layoutResultCallback_1();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return AnnotatedString_init_$Create$('');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var textLayoutResult = tmp;
    return textLayoutResult.get_layoutInput_o7gjah_k$().get_text_wouvsm_k$();
  };
  protoOf(MultiWidgetSelectionDelegate).getBoundingBox_xfho9l_k$ = function (offset) {
    var tmp0_elvis_lhs = this.layoutResultCallback_1();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Companion_getInstance_25().get_Zero_woe9zl_k$();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var textLayoutResult = tmp;
    var textLength = textLayoutResult.get_layoutInput_o7gjah_k$().get_text_wouvsm_k$().get_length_g42xv3_k$();
    if (textLength < 1)
      return Companion_getInstance_25().get_Zero_woe9zl_k$();
    return textLayoutResult.getBoundingBox_xfho9l_k$(coerceIn(offset, 0, textLength - 1 | 0));
  };
  protoOf(MultiWidgetSelectionDelegate).getLineLeft_799m07_k$ = function (offset) {
    var tmp0_elvis_lhs = this.layoutResultCallback_1();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return -1.0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var textLayoutResult = tmp;
    var line = textLayoutResult.getLineForOffset_jakwx2_k$(offset);
    if (line >= textLayoutResult.get_lineCount_lmaazy_k$())
      return -1.0;
    return textLayoutResult.getLineLeft_799m07_k$(line);
  };
  protoOf(MultiWidgetSelectionDelegate).getLineRight_j8rtqe_k$ = function (offset) {
    var tmp0_elvis_lhs = this.layoutResultCallback_1();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return -1.0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var textLayoutResult = tmp;
    var line = textLayoutResult.getLineForOffset_jakwx2_k$(offset);
    if (line >= textLayoutResult.get_lineCount_lmaazy_k$())
      return -1.0;
    return textLayoutResult.getLineRight_j8rtqe_k$(line);
  };
  protoOf(MultiWidgetSelectionDelegate).getCenterYForOffset_73lsuu_k$ = function (offset) {
    var tmp0_elvis_lhs = this.layoutResultCallback_1();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return -1.0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var textLayoutResult = tmp;
    var line = textLayoutResult.getLineForOffset_jakwx2_k$(offset);
    if (line >= textLayoutResult.get_lineCount_lmaazy_k$())
      return -1.0;
    var top = textLayoutResult.getLineTop_q0a6r_k$(line);
    var bottom = textLayoutResult.getLineBottom_yhu6bn_k$(line);
    return (bottom - top) / 2 + top;
  };
  protoOf(MultiWidgetSelectionDelegate).getRangeOfLineContaining_cxikvk_k$ = function (offset) {
    var tmp0_elvis_lhs = this.layoutResultCallback_1();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Companion_getInstance_26().get_Zero_8je9ih_k$();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var textLayoutResult = tmp;
    var visibleTextLength = _get_lastVisibleOffset__v7xite(textLayoutResult, this);
    if (visibleTextLength < 1)
      return Companion_getInstance_26().get_Zero_8je9ih_k$();
    var line = textLayoutResult.getLineForOffset_jakwx2_k$(coerceIn(offset, 0, visibleTextLength - 1 | 0));
    return TextRange(textLayoutResult.getLineStart_clke9s_k$(line), textLayoutResult.getLineEnd_o6geci_k$(line, true));
  };
  protoOf(MultiWidgetSelectionDelegate).getLastVisibleOffset_71yps7_k$ = function () {
    var tmp0_elvis_lhs = this.layoutResultCallback_1();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return 0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var textLayoutResult = tmp;
    return _get_lastVisibleOffset__v7xite(textLayoutResult, this);
  };
  protoOf(MultiWidgetSelectionDelegate).getLineHeight_hm3g1l_k$ = function (offset) {
    var tmp0_elvis_lhs = this.layoutResultCallback_1();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return 0.0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var textLayoutResult = tmp;
    var textLength = textLayoutResult.get_layoutInput_o7gjah_k$().get_text_wouvsm_k$().get_length_g42xv3_k$();
    if (textLength < 1)
      return 0.0;
    var line = textLayoutResult.getLineForOffset_jakwx2_k$(coerceIn(offset, 0, textLength - 1 | 0));
    return textLayoutResult.get_multiParagraph_xte3we_k$().getLineHeight_hm3g1l_k$(line);
  };
  function appendSelectableInfo(_this__u8e3s4, textLayoutResult, localPosition, previousHandlePosition, selectableId) {
    var bounds = new Rect(0.0, 0.0, textLayoutResult.get_multiParagraph_xte3we_k$().get_width_j0q4yl_k$(), textLayoutResult.get_multiParagraph_xte3we_k$().get_height_e7t92o_k$());
    var currentXDirection = getXDirection(localPosition, bounds);
    var currentYDirection = getYDirection(localPosition, bounds);
    var otherDirection;
    var startXHandleDirection;
    var startYHandleDirection;
    var endXHandleDirection;
    var endYHandleDirection;
    if (_this__u8e3s4.get_isStartHandle_a4sj93_k$()) {
      var tmp0_safe_receiver = _this__u8e3s4.get_previousSelection_6b91sk_k$();
      otherDirection = appendSelectableInfo$otherDirection(_this__u8e3s4, selectableId, currentXDirection, currentYDirection, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_end_18j6ha_k$());
      startXHandleDirection = currentXDirection;
      startYHandleDirection = currentYDirection;
      endXHandleDirection = otherDirection;
      endYHandleDirection = otherDirection;
    } else {
      var tmp1_safe_receiver = _this__u8e3s4.get_previousSelection_6b91sk_k$();
      otherDirection = appendSelectableInfo$otherDirection(_this__u8e3s4, selectableId, currentXDirection, currentYDirection, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_start_iypx6h_k$());
      startXHandleDirection = otherDirection;
      startYHandleDirection = otherDirection;
      endXHandleDirection = currentXDirection;
      endYHandleDirection = currentYDirection;
    }
    if (!isSelected(resolve2dDirection(currentXDirection, currentYDirection), otherDirection)) {
      return Unit_getInstance();
    }
    var textLength = textLayoutResult.get_layoutInput_o7gjah_k$().get_text_wouvsm_k$().get_length_g42xv3_k$();
    var rawStartHandleOffset;
    var rawEndHandleOffset;
    if (_this__u8e3s4.get_isStartHandle_a4sj93_k$()) {
      rawStartHandleOffset = getOffsetForPosition(localPosition, textLayoutResult);
      var tmp2_safe_receiver = _this__u8e3s4.get_previousSelection_6b91sk_k$();
      var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.get_end_18j6ha_k$();
      var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : getPreviousAdjustedOffset(tmp3_safe_receiver, _this__u8e3s4.get_selectableIdOrderingComparator_bwkn2c_k$(), selectableId, textLength);
      rawEndHandleOffset = tmp4_elvis_lhs == null ? rawStartHandleOffset : tmp4_elvis_lhs;
    } else {
      rawEndHandleOffset = getOffsetForPosition(localPosition, textLayoutResult);
      var tmp5_safe_receiver = _this__u8e3s4.get_previousSelection_6b91sk_k$();
      var tmp6_safe_receiver = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.get_start_iypx6h_k$();
      var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : getPreviousAdjustedOffset(tmp6_safe_receiver, _this__u8e3s4.get_selectableIdOrderingComparator_bwkn2c_k$(), selectableId, textLength);
      rawStartHandleOffset = tmp7_elvis_lhs == null ? rawEndHandleOffset : tmp7_elvis_lhs;
    }
    var tmp;
    if (get_isUnspecified(previousHandlePosition)) {
      tmp = -1;
    } else {
      tmp = getOffsetForPosition(previousHandlePosition, textLayoutResult);
    }
    var rawPreviousHandleOffset = tmp;
    _this__u8e3s4.appendInfo_hq2vki_k$(selectableId, rawStartHandleOffset, startXHandleDirection, startYHandleDirection, rawEndHandleOffset, endXHandleDirection, endYHandleDirection, rawPreviousHandleOffset, textLayoutResult);
  }
  function getXDirection(position, bounds) {
    return _Offset___get_x__impl__xvi35n(position) < bounds.get_left_woprgw_k$() ? Direction_BEFORE_getInstance() : _Offset___get_x__impl__xvi35n(position) > bounds.get_right_ixz7xv_k$() ? Direction_AFTER_getInstance() : Direction_ON_getInstance();
  }
  function getYDirection(position, bounds) {
    return _Offset___get_y__impl__8bzhra(position) < bounds.get_top_18ivbo_k$() ? Direction_BEFORE_getInstance() : _Offset___get_y__impl__8bzhra(position) > bounds.get_bottom_bj8ras_k$() ? Direction_AFTER_getInstance() : Direction_ON_getInstance();
  }
  function getDirectionById(_this__u8e3s4, anchorSelectableId, currentSelectableId) {
    var compareResult = _this__u8e3s4.get_selectableIdOrderingComparator_bwkn2c_k$().compare(anchorSelectableId, currentSelectableId);
    return compareResult < 0 ? Direction_BEFORE_getInstance() : compareResult > 0 ? Direction_AFTER_getInstance() : Direction_ON_getInstance();
  }
  function isSelected(currentDirection, otherDirection) {
    return currentDirection.equals(Direction_ON_getInstance()) ? true : !currentDirection.equals(otherDirection);
  }
  function getOffsetForPosition(position, textLayoutResult) {
    return _Offset___get_y__impl__8bzhra(position) <= 0.0 ? 0 : _Offset___get_y__impl__8bzhra(position) >= textLayoutResult.get_multiParagraph_xte3we_k$().get_height_e7t92o_k$() ? textLayoutResult.get_layoutInput_o7gjah_k$().get_text_wouvsm_k$().get_length_g42xv3_k$() : textLayoutResult.getOffsetForPosition_12t0zj_k$(position);
  }
  function getPreviousAdjustedOffset(_this__u8e3s4, selectableIdOrderingComparator, currentSelectableId, currentTextLength) {
    var compareResult = selectableIdOrderingComparator.compare(_this__u8e3s4.get_selectableId_qduvty_k$(), currentSelectableId);
    return compareResult < 0 ? 0 : compareResult > 0 ? currentTextLength : _this__u8e3s4.get_offset_hjmqak_k$();
  }
  function appendSelectableInfo$otherDirection($this_appendSelectableInfo, $selectableId, currentXDirection, currentYDirection, anchor) {
    var tmp;
    if (anchor == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.text.selection.appendSelectableInfo.otherDirection.<anonymous>' call
      tmp = getDirectionById($this_appendSelectableInfo, anchor.get_selectableId_qduvty_k$(), $selectableId);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? resolve2dDirection(currentXDirection, currentYDirection) : tmp1_elvis_lhs;
  }
  function Selectable() {
  }
  function AnchorInfo(direction, offset, selectableId) {
    this.direction_1 = direction;
    this.offset_1 = offset;
    this.selectableId_1 = selectableId;
  }
  protoOf(AnchorInfo).get_direction_7ekune_k$ = function () {
    return this.direction_1;
  };
  protoOf(AnchorInfo).get_offset_hjmqak_k$ = function () {
    return this.offset_1;
  };
  protoOf(AnchorInfo).get_selectableId_qduvty_k$ = function () {
    return this.selectableId_1;
  };
  protoOf(AnchorInfo).component1_7eebsc_k$ = function () {
    return this.direction_1;
  };
  protoOf(AnchorInfo).component2_7eebsb_k$ = function () {
    return this.offset_1;
  };
  protoOf(AnchorInfo).component3_7eebsa_k$ = function () {
    return this.selectableId_1;
  };
  protoOf(AnchorInfo).copy_73h0tp_k$ = function (direction, offset, selectableId) {
    return new AnchorInfo(direction, offset, selectableId);
  };
  protoOf(AnchorInfo).copy$default_ky6qb1_k$ = function (direction, offset, selectableId, $super) {
    direction = direction === VOID ? this.direction_1 : direction;
    offset = offset === VOID ? this.offset_1 : offset;
    selectableId = selectableId === VOID ? this.selectableId_1 : selectableId;
    return $super === VOID ? this.copy_73h0tp_k$(direction, offset, selectableId) : $super.copy_73h0tp_k$.call(this, direction, offset, selectableId);
  };
  protoOf(AnchorInfo).toString = function () {
    return 'AnchorInfo(direction=' + this.direction_1 + ', offset=' + this.offset_1 + ', selectableId=' + this.selectableId_1.toString() + ')';
  };
  protoOf(AnchorInfo).hashCode = function () {
    var result = this.direction_1.hashCode();
    result = imul(result, 31) + this.offset_1 | 0;
    result = imul(result, 31) + this.selectableId_1.hashCode() | 0;
    return result;
  };
  protoOf(AnchorInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AnchorInfo))
      return false;
    var tmp0_other_with_cast = other instanceof AnchorInfo ? other : THROW_CCE();
    if (!this.direction_1.equals(tmp0_other_with_cast.direction_1))
      return false;
    if (!(this.offset_1 === tmp0_other_with_cast.offset_1))
      return false;
    if (!this.selectableId_1.equals(tmp0_other_with_cast.selectableId_1))
      return false;
    return true;
  };
  function Selection(start, end, handlesCrossed) {
    handlesCrossed = handlesCrossed === VOID ? false : handlesCrossed;
    this.start_1 = start;
    this.end_1 = end;
    this.handlesCrossed_1 = handlesCrossed;
  }
  protoOf(Selection).get_start_iypx6h_k$ = function () {
    return this.start_1;
  };
  protoOf(Selection).get_end_18j6ha_k$ = function () {
    return this.end_1;
  };
  protoOf(Selection).get_handlesCrossed_5utwpv_k$ = function () {
    return this.handlesCrossed_1;
  };
  protoOf(Selection).merge_fmvm9h_k$ = function (other) {
    if (other == null)
      return this;
    if (!this.handlesCrossed_1 ? other.handlesCrossed_1 : false)
      return other.copy$default_4u4xaz_k$(VOID, this.start_1);
    var handlesCrossed = this.start_1.equals(this.end_1) ? other.handlesCrossed_1 : this.handlesCrossed_1;
    var selection = this;
    var tmp;
    if (handlesCrossed ? true : other.handlesCrossed_1) {
      tmp = new Selection(other.handlesCrossed_1 ? other.start_1 : other.end_1, handlesCrossed ? this.end_1 : this.start_1, true);
    } else {
      tmp = selection.copy$default_4u4xaz_k$(VOID, other.end_1);
    }
    return tmp;
  };
  protoOf(Selection).toTextRange_cm2olv_k$ = function () {
    return TextRange(this.start_1.offset_1, this.end_1.offset_1);
  };
  protoOf(Selection).component1_7eebsc_k$ = function () {
    return this.start_1;
  };
  protoOf(Selection).component2_7eebsb_k$ = function () {
    return this.end_1;
  };
  protoOf(Selection).component3_7eebsa_k$ = function () {
    return this.handlesCrossed_1;
  };
  protoOf(Selection).copy_g9n1v4_k$ = function (start, end, handlesCrossed) {
    return new Selection(start, end, handlesCrossed);
  };
  protoOf(Selection).copy$default_4u4xaz_k$ = function (start, end, handlesCrossed, $super) {
    start = start === VOID ? this.start_1 : start;
    end = end === VOID ? this.end_1 : end;
    handlesCrossed = handlesCrossed === VOID ? this.handlesCrossed_1 : handlesCrossed;
    return $super === VOID ? this.copy_g9n1v4_k$(start, end, handlesCrossed) : $super.copy_g9n1v4_k$.call(this, start, end, handlesCrossed);
  };
  protoOf(Selection).toString = function () {
    return 'Selection(start=' + this.start_1 + ', end=' + this.end_1 + ', handlesCrossed=' + this.handlesCrossed_1 + ')';
  };
  protoOf(Selection).hashCode = function () {
    var result = this.start_1.hashCode();
    result = imul(result, 31) + this.end_1.hashCode() | 0;
    result = imul(result, 31) + getBooleanHashCode(this.handlesCrossed_1) | 0;
    return result;
  };
  protoOf(Selection).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Selection))
      return false;
    var tmp0_other_with_cast = other instanceof Selection ? other : THROW_CCE();
    if (!this.start_1.equals(tmp0_other_with_cast.start_1))
      return false;
    if (!this.end_1.equals(tmp0_other_with_cast.end_1))
      return false;
    if (!(this.handlesCrossed_1 === tmp0_other_with_cast.handlesCrossed_1))
      return false;
    return true;
  };
  function sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0).adjust_2gs9u1_k$ = function (layout) {
    return this.function_1(layout);
  };
  function sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_0).adjust_2gs9u1_k$ = function (layout) {
    return this.function_1(layout);
  };
  function sam$androidx_compose_foundation_text_selection_BoundaryFunction$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_foundation_text_selection_BoundaryFunction$0).getBoundary_3zugzw_k$ = function (_this__u8e3s4, offset) {
    return this.function_1(_this__u8e3s4, offset).packedValue_1;
  };
  function sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_1(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_1).adjust_2gs9u1_k$ = function (layout) {
    return this.function_1(layout);
  };
  function sam$androidx_compose_foundation_text_selection_BoundaryFunction$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_foundation_text_selection_BoundaryFunction$0_0).getBoundary_3zugzw_k$ = function (_this__u8e3s4, offset) {
    return this.function_1(_this__u8e3s4, offset).packedValue_1;
  };
  function sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_2(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_2).adjust_2gs9u1_k$ = function (layout) {
    return this.function_1(layout);
  };
  function sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_3(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_3).adjust_2gs9u1_k$ = function (layout) {
    return this.function_1(layout);
  };
  function SelectionAdjustment$Companion$None$lambda(layout) {
    return new Selection(layout.get_startInfo_qpeagp_k$().anchorForOffset_85yhvz_k$(layout.get_startInfo_qpeagp_k$().get_rawStartHandleOffset_xwsbz6_k$()), layout.get_endInfo_pbjs1s_k$().anchorForOffset_85yhvz_k$(layout.get_endInfo_pbjs1s_k$().get_rawEndHandleOffset_xsqyzb_k$()), layout.get_crossStatus_acvbbr_k$().equals(CrossStatus_CROSSED_getInstance()));
  }
  function SelectionAdjustment$Companion$Character$lambda(layout) {
    return ensureAtLeastOneChar(Companion_getInstance_42().None_1.adjust_2gs9u1_k$(layout), layout);
  }
  function SelectionAdjustment$Companion$Word$lambda(layout) {
    var tmp = SelectionAdjustment$Companion$Word$lambda$lambda;
    return adjustToBoundaries(layout, new sam$androidx_compose_foundation_text_selection_BoundaryFunction$0(tmp));
  }
  function SelectionAdjustment$Companion$Word$lambda$lambda($this$adjustToBoundaries, it) {
    return new TextRange_0($this$adjustToBoundaries.get_textLayoutResult_u0m931_k$().getWordBoundary_s8pru_k$(it));
  }
  function SelectionAdjustment$Companion$Paragraph$lambda(layout) {
    var tmp = SelectionAdjustment$Companion$Paragraph$lambda$lambda;
    return adjustToBoundaries(layout, new sam$androidx_compose_foundation_text_selection_BoundaryFunction$0_0(tmp));
  }
  function SelectionAdjustment$Companion$Paragraph$lambda$lambda($this$adjustToBoundaries, it) {
    return new TextRange_0(getParagraphBoundary($this$adjustToBoundaries.get_inputText_yab7o2_k$(), it));
  }
  function SelectionAdjustment$Companion$CharacterWithWordAccelerate$lambda(layout) {
    var tmp0_elvis_lhs = layout.get_previousSelection_6b91sk_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Companion_getInstance_42().Word_1.adjust_2gs9u1_k$(layout);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var previousSelection = tmp;
    var previousAnchor;
    var newAnchor;
    var startAnchor;
    var endAnchor;
    if (layout.get_isStartHandle_a4sj93_k$()) {
      previousAnchor = previousSelection.get_start_iypx6h_k$();
      newAnchor = updateSelectionBoundary(layout, layout.get_startInfo_qpeagp_k$(), previousAnchor);
      startAnchor = newAnchor;
      endAnchor = previousSelection.get_end_18j6ha_k$();
    } else {
      previousAnchor = previousSelection.get_end_18j6ha_k$();
      newAnchor = updateSelectionBoundary(layout, layout.get_endInfo_pbjs1s_k$(), previousAnchor);
      startAnchor = previousSelection.get_start_iypx6h_k$();
      endAnchor = newAnchor;
    }
    var tmp_0;
    if (newAnchor.equals(previousAnchor)) {
      tmp_0 = previousSelection;
    } else {
      var crossed = layout.get_crossStatus_acvbbr_k$().equals(CrossStatus_CROSSED_getInstance()) ? true : layout.get_crossStatus_acvbbr_k$().equals(CrossStatus_COLLAPSED_getInstance()) ? startAnchor.get_offset_hjmqak_k$() > endAnchor.get_offset_hjmqak_k$() : false;
      tmp_0 = ensureAtLeastOneChar(new Selection(startAnchor, endAnchor, crossed), layout);
    }
    return tmp_0;
  }
  function Companion_11() {
    Companion_instance_11 = this;
    var tmp = this;
    var tmp_0 = SelectionAdjustment$Companion$None$lambda;
    tmp.None_1 = new sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0(tmp_0);
    var tmp_1 = this;
    var tmp_2 = SelectionAdjustment$Companion$Character$lambda;
    tmp_1.Character_1 = new sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_0(tmp_2);
    var tmp_3 = this;
    var tmp_4 = SelectionAdjustment$Companion$Word$lambda;
    tmp_3.Word_1 = new sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_1(tmp_4);
    var tmp_5 = this;
    var tmp_6 = SelectionAdjustment$Companion$Paragraph$lambda;
    tmp_5.Paragraph_1 = new sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_2(tmp_6);
    var tmp_7 = this;
    var tmp_8 = SelectionAdjustment$Companion$CharacterWithWordAccelerate$lambda;
    tmp_7.CharacterWithWordAccelerate_1 = new sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_3(tmp_8);
  }
  protoOf(Companion_11).get_None_wo6tgh_k$ = function () {
    return this.None_1;
  };
  protoOf(Companion_11).get_Character_3i744g_k$ = function () {
    return this.Character_1;
  };
  protoOf(Companion_11).get_Word_wockfn_k$ = function () {
    return this.Word_1;
  };
  protoOf(Companion_11).get_Paragraph_2v2rol_k$ = function () {
    return this.Paragraph_1;
  };
  protoOf(Companion_11).get_CharacterWithWordAccelerate_b1h3l9_k$ = function () {
    return this.CharacterWithWordAccelerate_1;
  };
  var Companion_instance_11;
  function Companion_getInstance_42() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function SelectionAdjustment() {
  }
  function ensureAtLeastOneChar(_this__u8e3s4, layout) {
    if (!isCollapsed(_this__u8e3s4, layout)) {
      return _this__u8e3s4;
    }
    var text = layout.get_currentInfo_ntyvry_k$().get_inputText_yab7o2_k$();
    var tmp;
    if (layout.get_size_woubt6_k$() > 1 ? true : layout.get_previousSelection_6b91sk_k$() == null) {
      tmp = true;
    } else {
      // Inline function 'kotlin.text.isEmpty' call
      tmp = charSequenceLength(text) === 0;
    }
    if (tmp) {
      return _this__u8e3s4;
    }
    return expandOneChar(_this__u8e3s4, layout);
  }
  function adjustToBoundaries(layout, boundaryFunction) {
    var crossed = layout.get_crossStatus_acvbbr_k$().equals(CrossStatus_CROSSED_getInstance());
    return new Selection(anchorOnBoundary(layout.get_startInfo_qpeagp_k$(), crossed, true, layout.get_startSlot_qp7xux_k$(), boundaryFunction), anchorOnBoundary(layout.get_endInfo_pbjs1s_k$(), crossed, false, layout.get_endSlot_pbdfg0_k$(), boundaryFunction), crossed);
  }
  function BoundaryFunction() {
  }
  function updateSelectionBoundary(_this__u8e3s4, info, previousSelectionAnchor) {
    var currentRawOffset = _this__u8e3s4.get_isStartHandle_a4sj93_k$() ? info.get_rawStartHandleOffset_xwsbz6_k$() : info.get_rawEndHandleOffset_xsqyzb_k$();
    var currentSlot = _this__u8e3s4.get_isStartHandle_a4sj93_k$() ? _this__u8e3s4.get_startSlot_qp7xux_k$() : _this__u8e3s4.get_endSlot_pbdfg0_k$();
    if (!(currentSlot === info.get_slot_wouds7_k$())) {
      return info.anchorForOffset_85yhvz_k$(currentRawOffset);
    }
    var tmp = LazyThreadSafetyMode_NONE_getInstance();
    var currentRawLine$delegate = lazy(tmp, updateSelectionBoundary$lambda_1(info, currentRawOffset));
    var otherRawOffset = _this__u8e3s4.get_isStartHandle_a4sj93_k$() ? info.get_rawEndHandleOffset_xsqyzb_k$() : info.get_rawStartHandleOffset_xwsbz6_k$();
    var tmp_0 = LazyThreadSafetyMode_NONE_getInstance();
    var anchorSnappedToWordBoundary$delegate = lazy(tmp_0, updateSelectionBoundary$lambda_2(info, currentRawOffset, otherRawOffset, _this__u8e3s4, currentRawLine$delegate));
    if (!info.get_selectableId_qduvty_k$().equals(previousSelectionAnchor.get_selectableId_qduvty_k$())) {
      return updateSelectionBoundary$lambda_0(anchorSnappedToWordBoundary$delegate);
    }
    var rawPreviousHandleOffset = info.get_rawPreviousHandleOffset_o07aa9_k$();
    if (currentRawOffset === rawPreviousHandleOffset) {
      return previousSelectionAnchor;
    }
    var previousRawLine = info.get_textLayoutResult_u0m931_k$().getLineForOffset_jakwx2_k$(rawPreviousHandleOffset);
    if (!(updateSelectionBoundary$lambda(currentRawLine$delegate) === previousRawLine)) {
      return updateSelectionBoundary$lambda_0(anchorSnappedToWordBoundary$delegate);
    }
    var previousSelectionOffset = previousSelectionAnchor.get_offset_hjmqak_k$();
    var previousSelectionWordBoundary = info.get_textLayoutResult_u0m931_k$().getWordBoundary_s8pru_k$(previousSelectionOffset);
    if (!isExpanding(info, currentRawOffset, _this__u8e3s4.get_isStartHandle_a4sj93_k$())) {
      return info.anchorForOffset_85yhvz_k$(currentRawOffset);
    }
    if (previousSelectionOffset === _TextRange___get_start__impl__ww4t90(previousSelectionWordBoundary) ? true : previousSelectionOffset === _TextRange___get_end__impl__gcdxpp(previousSelectionWordBoundary)) {
      return updateSelectionBoundary$lambda_0(anchorSnappedToWordBoundary$delegate);
    }
    return info.anchorForOffset_85yhvz_k$(currentRawOffset);
  }
  function expandOneChar(_this__u8e3s4, layout) {
    var info = layout.get_currentInfo_ntyvry_k$();
    var text = info.get_inputText_yab7o2_k$();
    var offset = info.get_rawStartHandleOffset_xwsbz6_k$();
    var lastOffset = text.length;
    var tmp;
    if (offset === 0) {
      var followingBreak = findFollowingBreak(text, 0);
      var tmp_0;
      if (layout.get_isStartHandle_a4sj93_k$()) {
        tmp_0 = _this__u8e3s4.copy$default_4u4xaz_k$(changeOffset(_this__u8e3s4.get_start_iypx6h_k$(), info, followingBreak), VOID, true);
      } else {
        tmp_0 = _this__u8e3s4.copy$default_4u4xaz_k$(VOID, changeOffset(_this__u8e3s4.get_end_18j6ha_k$(), info, followingBreak), false);
      }
      tmp = tmp_0;
    } else if (offset === lastOffset) {
      var precedingBreak = findPrecedingBreak(text, lastOffset);
      var tmp_1;
      if (layout.get_isStartHandle_a4sj93_k$()) {
        tmp_1 = _this__u8e3s4.copy$default_4u4xaz_k$(changeOffset(_this__u8e3s4.get_start_iypx6h_k$(), info, precedingBreak), VOID, false);
      } else {
        tmp_1 = _this__u8e3s4.copy$default_4u4xaz_k$(VOID, changeOffset(_this__u8e3s4.get_end_18j6ha_k$(), info, precedingBreak), true);
      }
      tmp = tmp_1;
    } else {
      var tmp1_safe_receiver = layout.get_previousSelection_6b91sk_k$();
      var crossed = (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_handlesCrossed_5utwpv_k$()) === true;
      var tmp_2;
      if (!!(layout.get_isStartHandle_a4sj93_k$() ^ crossed)) {
        tmp_2 = findPrecedingBreak(text, offset);
      } else {
        tmp_2 = findFollowingBreak(text, offset);
      }
      var newOffset = tmp_2;
      var tmp_3;
      if (layout.get_isStartHandle_a4sj93_k$()) {
        tmp_3 = _this__u8e3s4.copy$default_4u4xaz_k$(changeOffset(_this__u8e3s4.get_start_iypx6h_k$(), info, newOffset), VOID, crossed);
      } else {
        tmp_3 = _this__u8e3s4.copy$default_4u4xaz_k$(VOID, changeOffset(_this__u8e3s4.get_end_18j6ha_k$(), info, newOffset), crossed);
      }
      tmp = tmp_3;
    }
    return tmp;
  }
  function anchorOnBoundary(_this__u8e3s4, crossed, isStart, slot, boundaryFunction) {
    var offset = isStart ? _this__u8e3s4.get_rawStartHandleOffset_xwsbz6_k$() : _this__u8e3s4.get_rawEndHandleOffset_xsqyzb_k$();
    if (!(slot === _this__u8e3s4.get_slot_wouds7_k$())) {
      return _this__u8e3s4.anchorForOffset_85yhvz_k$(offset);
    }
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.text.selection.anchorOnBoundary.<anonymous>' call
    var range = boundaryFunction.getBoundary_3zugzw_k$(_this__u8e3s4, offset);
    return _this__u8e3s4.anchorForOffset_85yhvz_k$(!!(isStart ^ crossed) ? _TextRange___get_start__impl__ww4t90(range) : _TextRange___get_end__impl__gcdxpp(range));
  }
  function snapToWordBoundary(_this__u8e3s4, currentLine, currentOffset, otherOffset, isStart, crossed) {
    var wordBoundary = _this__u8e3s4.get_textLayoutResult_u0m931_k$().getWordBoundary_s8pru_k$(currentOffset);
    var wordStartLine = _this__u8e3s4.get_textLayoutResult_u0m931_k$().getLineForOffset_jakwx2_k$(_TextRange___get_start__impl__ww4t90(wordBoundary));
    var tmp;
    if (wordStartLine === currentLine) {
      tmp = _TextRange___get_start__impl__ww4t90(wordBoundary);
    } else if (currentLine >= _this__u8e3s4.get_textLayoutResult_u0m931_k$().get_lineCount_lmaazy_k$()) {
      tmp = _this__u8e3s4.get_textLayoutResult_u0m931_k$().getLineStart_clke9s_k$(_this__u8e3s4.get_textLayoutResult_u0m931_k$().get_lineCount_lmaazy_k$() - 1 | 0);
    } else {
      tmp = _this__u8e3s4.get_textLayoutResult_u0m931_k$().getLineStart_clke9s_k$(currentLine);
    }
    var start = tmp;
    var wordEndLine = _this__u8e3s4.get_textLayoutResult_u0m931_k$().getLineForOffset_jakwx2_k$(_TextRange___get_end__impl__gcdxpp(wordBoundary));
    var tmp_0;
    if (wordEndLine === currentLine) {
      tmp_0 = _TextRange___get_end__impl__gcdxpp(wordBoundary);
    } else if (currentLine >= _this__u8e3s4.get_textLayoutResult_u0m931_k$().get_lineCount_lmaazy_k$()) {
      tmp_0 = _this__u8e3s4.get_textLayoutResult_u0m931_k$().getLineEnd$default_8vuhh5_k$(_this__u8e3s4.get_textLayoutResult_u0m931_k$().get_lineCount_lmaazy_k$() - 1 | 0);
    } else {
      tmp_0 = _this__u8e3s4.get_textLayoutResult_u0m931_k$().getLineEnd$default_8vuhh5_k$(currentLine);
    }
    var end = tmp_0;
    if (start === otherOffset) {
      return _this__u8e3s4.anchorForOffset_85yhvz_k$(end);
    }
    if (end === otherOffset) {
      return _this__u8e3s4.anchorForOffset_85yhvz_k$(start);
    }
    var tmp_1;
    if (!!(isStart ^ crossed)) {
      tmp_1 = currentOffset <= end ? start : end;
    } else {
      tmp_1 = currentOffset >= start ? end : start;
    }
    var resultOffset = tmp_1;
    return _this__u8e3s4.anchorForOffset_85yhvz_k$(resultOffset);
  }
  function isExpanding(_this__u8e3s4, currentRawOffset, isStart) {
    if (_this__u8e3s4.get_rawPreviousHandleOffset_o07aa9_k$() === -1) {
      return true;
    }
    if (currentRawOffset === _this__u8e3s4.get_rawPreviousHandleOffset_o07aa9_k$()) {
      return false;
    }
    var crossed = _this__u8e3s4.get_rawCrossStatus_3e589f_k$().equals(CrossStatus_CROSSED_getInstance());
    var tmp;
    if (!!(isStart ^ crossed)) {
      tmp = currentRawOffset < _this__u8e3s4.get_rawPreviousHandleOffset_o07aa9_k$();
    } else {
      tmp = currentRawOffset > _this__u8e3s4.get_rawPreviousHandleOffset_o07aa9_k$();
    }
    return tmp;
  }
  function changeOffset(_this__u8e3s4, info, newOffset) {
    var tmp0_direction = info.get_textLayoutResult_u0m931_k$().getBidiRunDirection_c67d8i_k$(newOffset);
    return _this__u8e3s4.copy$default_ky6qb1_k$(tmp0_direction, newOffset);
  }
  function updateSelectionBoundary$lambda($currentRawLine$delegate) {
    // Inline function 'kotlin.getValue' call
    getLocalDelegateReference('currentRawLine', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $currentRawLine$delegate.get_value_j01efc_k$();
  }
  function updateSelectionBoundary$lambda_0($anchorSnappedToWordBoundary$delegate) {
    // Inline function 'kotlin.getValue' call
    getLocalDelegateReference('anchorSnappedToWordBoundary', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $anchorSnappedToWordBoundary$delegate.get_value_j01efc_k$();
  }
  function updateSelectionBoundary$lambda_1($info, $currentRawOffset) {
    return function () {
      return $info.get_textLayoutResult_u0m931_k$().getLineForOffset_jakwx2_k$($currentRawOffset);
    };
  }
  function updateSelectionBoundary$lambda_2($info, $currentRawOffset, $otherRawOffset, $this_updateSelectionBoundary, $currentRawLine$delegate) {
    return function () {
      return snapToWordBoundary($info, updateSelectionBoundary$lambda($currentRawLine$delegate), $currentRawOffset, $otherRawOffset, $this_updateSelectionBoundary.get_isStartHandle_a4sj93_k$(), $this_updateSelectionBoundary.get_crossStatus_acvbbr_k$().equals(CrossStatus_CROSSED_getInstance()));
    };
  }
  function MouseSelectionObserver() {
  }
  function selectionGestureInput(_this__u8e3s4, mouseSelectionObserver, textDragObserver) {
    return composed(_this__u8e3s4, VOID, selectionGestureInput$lambda(mouseSelectionObserver, textDragObserver));
  }
  function _get_viewConfiguration__gn2pk0($this) {
    return $this.viewConfiguration_1;
  }
  function _get_clicksSlop__5njgdi($this) {
    return $this.clicksSlop_1;
  }
  function _set_prevClick__1iqzps($this, _set____db54di) {
    $this.prevClick_1 = _set____db54di;
  }
  function _get_prevClick__utlg4c($this) {
    return $this.prevClick_1;
  }
  function ClicksCounter(viewConfiguration, clicksSlop) {
    this.viewConfiguration_1 = viewConfiguration;
    this.clicksSlop_1 = clicksSlop;
    this.clicks_1 = 0;
    this.prevClick_1 = null;
  }
  protoOf(ClicksCounter).set_clicks_fzg44g_k$ = function (_set____db54di) {
    this.clicks_1 = _set____db54di;
  };
  protoOf(ClicksCounter).get_clicks_byfmd0_k$ = function () {
    return this.clicks_1;
  };
  protoOf(ClicksCounter).update_3yio41_k$ = function (event) {
    var currentPrevEvent = this.prevClick_1;
    if ((!(currentPrevEvent == null) ? this.timeIsTolerable_jxkg5r_k$(currentPrevEvent, event) : false) ? this.positionIsTolerable_g0hg7p_k$(currentPrevEvent, event) : false) {
      this.clicks_1 = this.clicks_1 + 1 | 0;
    } else {
      this.clicks_1 = 1;
    }
    this.prevClick_1 = event;
  };
  protoOf(ClicksCounter).timeIsTolerable_jxkg5r_k$ = function (prevClick, newClick) {
    return newClick.get_uptimeMillis_9p467d_k$().minus_mfbszm_k$(prevClick.get_uptimeMillis_9p467d_k$()).compareTo_9jj042_k$(this.viewConfiguration_1.get_doubleTapTimeoutMillis_mlgmxq_k$()) < 0;
  };
  protoOf(ClicksCounter).positionIsTolerable_g0hg7p_k$ = function (prevClick, newClick) {
    return Offset__getDistance_impl_pclvxn(Offset__minus_impl_hoj2c0(newClick.get_position_cpyh94_k$(), prevClick.get_position_cpyh94_k$())) < this.clicksSlop_1;
  };
  function awaitDown(_this__u8e3s4, $completion) {
    var tmp = new $awaitDownCOROUTINE$7(_this__u8e3s4, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function get_isPrecisePointer(_this__u8e3s4) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastAll' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var this_0 = _this__u8e3s4.get_changes_dhi2my_k$();
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.get_c1px32_k$(index);
          // Inline function 'androidx.compose.ui.util.fastAll.<anonymous>' call
          // Inline function 'androidx.compose.foundation.text.selection.<get-isPrecisePointer>.<anonymous>' call
          if (!(item.get_type_mliz2v_k$() === Companion_getInstance_10().get_Mouse_mtac1u_k$())) {
            tmp$ret$1 = false;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = true;
    }
    return tmp$ret$1;
  }
  function mouseSelection(_this__u8e3s4, observer, clicksCounter, down, $completion) {
    var tmp = new $mouseSelectionCOROUTINE$8(_this__u8e3s4, observer, clicksCounter, down, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function touchSelection(_this__u8e3s4, observer, down, $completion) {
    var tmp = new $touchSelectionCOROUTINE$9(_this__u8e3s4, observer, down, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function distanceIsTolerable(_this__u8e3s4, offset1, offset2) {
    return Offset__getDistance_impl_pclvxn(Offset__minus_impl_hoj2c0(offset1, offset2)) < _this__u8e3s4.get_viewConfiguration_qgdaco_k$().get_touchSlop_ej3fhs_k$();
  }
  function invoke$lambda($currentMouseSelectionObserver$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('currentMouseSelectionObserver', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $currentMouseSelectionObserver$delegate.get_value_j01efc_k$();
  }
  function invoke$lambda_0($currentTextDragObserver$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('currentTextDragObserver', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $currentTextDragObserver$delegate.get_value_j01efc_k$();
  }
  function selectionGestureInput$lambda$slambda$slambda($clicksCounter, $currentMouseSelectionObserver$delegate, $currentTextDragObserver$delegate, resultContinuation) {
    this.$clicksCounter_1 = $clicksCounter;
    this.$currentMouseSelectionObserver$delegate_1 = $currentMouseSelectionObserver$delegate;
    this.$currentTextDragObserver$delegate_1 = $currentTextDragObserver$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(selectionGestureInput$lambda$slambda$slambda).invoke_mnrbcb_k$ = function ($this$awaitEachGesture, $completion) {
    var tmp = this.create_3qvng7_k$($this$awaitEachGesture, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(selectionGestureInput$lambda$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_mnrbcb_k$((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(selectionGestureInput$lambda$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(1);
            suspendResult = awaitDown(this.$this$awaitEachGesture_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.down0__1 = suspendResult;
            var tmp_0;
            if (get_isPrecisePointer(this.down0__1) ? get_isPrimaryPressed(this.down0__1.get_buttons_plpx8d_k$()) : false) {
              var tmp$ret$0;
              l$ret$1: do {
                var this_0 = this.down0__1.get_changes_dhi2my_k$();
                var inductionVariable = 0;
                var last = this_0.get_size_woubt6_k$() - 1 | 0;
                if (inductionVariable <= last)
                  do {
                    var index = inductionVariable;
                    inductionVariable = inductionVariable + 1 | 0;
                    var item = this_0.get_c1px32_k$(index);
                    if (!!item.get_isConsumed_scj5q3_k$()) {
                      tmp$ret$0 = false;
                      break l$ret$1;
                    }
                  }
                   while (inductionVariable <= last);
                tmp$ret$0 = true;
              }
               while (false);
              tmp_0 = tmp$ret$0;
            } else {
              tmp_0 = false;
            }

            if (tmp_0) {
              this.set_state_rjd8d0_k$(3);
              suspendResult = mouseSelection(this.$this$awaitEachGesture_1, invoke$lambda(this.$currentMouseSelectionObserver$delegate_1), this.$clicksCounter_1, this.down0__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (!get_isPrecisePointer(this.down0__1)) {
                this.set_state_rjd8d0_k$(2);
                suspendResult = touchSelection(this.$this$awaitEachGesture_1, invoke$lambda_0(this.$currentTextDragObserver$delegate_1), this.down0__1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.set_state_rjd8d0_k$(4);
                continue $sm;
              }
            }

          case 2:
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 3:
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 4:
            return Unit_getInstance();
          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(selectionGestureInput$lambda$slambda$slambda).create_3qvng7_k$ = function ($this$awaitEachGesture, completion) {
    var i = new selectionGestureInput$lambda$slambda$slambda(this.$clicksCounter_1, this.$currentMouseSelectionObserver$delegate_1, this.$currentTextDragObserver$delegate_1, completion);
    i.$this$awaitEachGesture_1 = $this$awaitEachGesture;
    return i;
  };
  protoOf(selectionGestureInput$lambda$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_3qvng7_k$((!(value == null) ? isInterface(value, AwaitPointerEventScope) : false) ? value : THROW_CCE(), completion);
  };
  function selectionGestureInput$lambda$slambda$slambda_0($clicksCounter, $currentMouseSelectionObserver$delegate, $currentTextDragObserver$delegate, resultContinuation) {
    var i = new selectionGestureInput$lambda$slambda$slambda($clicksCounter, $currentMouseSelectionObserver$delegate, $currentTextDragObserver$delegate, resultContinuation);
    var l = function ($this$awaitEachGesture, $completion) {
      return i.invoke_mnrbcb_k$($this$awaitEachGesture, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function selectionGestureInput$lambda$slambda($currentMouseSelectionObserver$delegate, $currentTextDragObserver$delegate, resultContinuation) {
    this.$currentMouseSelectionObserver$delegate_1 = $currentMouseSelectionObserver$delegate;
    this.$currentTextDragObserver$delegate_1 = $currentTextDragObserver$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(selectionGestureInput$lambda$slambda).invoke_tvejsf_k$ = function ($this$pointerInput, $completion) {
    var tmp = this.create_8wvixh_k$($this$pointerInput, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(selectionGestureInput$lambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_tvejsf_k$((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(selectionGestureInput$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this;
            var tmp_1 = this.$this$pointerInput_1.get_viewConfiguration_qgdaco_k$();
            tmp_0.clicksCounter0__1 = new ClicksCounter(tmp_1, this.$this$pointerInput_1.toPx_mycba2_k$(_Dp___init__impl__ms3zkb(50)));
            this.set_state_rjd8d0_k$(1);
            suspendResult = awaitEachGesture(this.$this$pointerInput_1, selectionGestureInput$lambda$slambda$slambda_0(this.clicksCounter0__1, this.$currentMouseSelectionObserver$delegate_1, this.$currentTextDragObserver$delegate_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(selectionGestureInput$lambda$slambda).create_8wvixh_k$ = function ($this$pointerInput, completion) {
    var i = new selectionGestureInput$lambda$slambda(this.$currentMouseSelectionObserver$delegate_1, this.$currentTextDragObserver$delegate_1, completion);
    i.$this$pointerInput_1 = $this$pointerInput;
    return i;
  };
  protoOf(selectionGestureInput$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_8wvixh_k$((!(value == null) ? isInterface(value, PointerInputScope) : false) ? value : THROW_CCE(), completion);
  };
  function selectionGestureInput$lambda$slambda_0($currentMouseSelectionObserver$delegate, $currentTextDragObserver$delegate, resultContinuation) {
    var i = new selectionGestureInput$lambda$slambda($currentMouseSelectionObserver$delegate, $currentTextDragObserver$delegate, resultContinuation);
    var l = function ($this$pointerInput, $completion) {
      return i.invoke_tvejsf_k$($this$pointerInput, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function selectionGestureInput$lambda($mouseSelectionObserver, $textDragObserver) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_ip860b_k$(849554210);
      sourceInformation($composer_0, 'C103@4099L44,104@4179L38,105@4246L554:SelectionGestures.kt#eksfi3');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(849554210, $changed, -1, 'androidx.compose.foundation.text.selection.selectionGestureInput.<anonymous> (SelectionGestures.kt:103)');
        tmp = Unit_getInstance();
      }
      var currentMouseSelectionObserver$delegate = rememberUpdatedState($mouseSelectionObserver, $composer_0, 0);
      var currentTextDragObserver$delegate = rememberUpdatedState($textDragObserver, $composer_0, 0);
      $composer_0.startReplaceableGroup_ip860b_k$(-1333381069);
      sourceInformation($composer_0, 'CC(remember):SelectionGestures.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!($composer_0.changed_ga7h3f_k$(currentMouseSelectionObserver$delegate) | $composer_0.changed_ga7h3f_k$(currentTextDragObserver$delegate));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid ? true : it === Companion_getInstance_9().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.compose.foundation.text.selection.selectionGestureInput.<anonymous>.<anonymous>' call
        var value = selectionGestureInput$lambda$slambda_0(currentMouseSelectionObserver$delegate, currentTextDragObserver$delegate, null);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp1_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var tmp0 = pointerInput($this$composed, Unit_getInstance(), tmp1_group);
      var tmp_2;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_2 = Unit_getInstance();
      }
      $composer_0.endReplaceableGroup_ern0ak_k$();
      return tmp0;
    };
  }
  function mouseSelection$lambda($observer) {
    return function (it) {
      var tmp;
      if ($observer.onExtendDrag_c8qyql_k$(it.get_position_cpyh94_k$())) {
        it.consume_sos6hg_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function mouseSelection$lambda_0($observer, $selectionAdjustment) {
    return function (it) {
      var tmp;
      if ($observer.onDrag_o3vqdu_k$(it.get_position_cpyh94_k$(), $selectionAdjustment)) {
        it.consume_sos6hg_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function touchSelection$lambda($observer) {
    return function (it) {
      $observer.onDrag_ssjglj_k$(positionChange(it));
      it.consume_sos6hg_k$();
      return Unit_getInstance();
    };
  }
  function $awaitDownCOROUTINE$7(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($awaitDownCOROUTINE$7).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_state_rjd8d0_k$(2);
            suspendResult = this._this__u8e3s4__1.awaitPointerEvent_mdgus6_k$(PointerEventPass_Main_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.event0__1 = suspendResult;
            var tmp$ret$0;
            l$ret$1: do {
              var this_0 = this.event0__1.get_changes_dhi2my_k$();
              var inductionVariable = 0;
              var last = this_0.get_size_woubt6_k$() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = this_0.get_c1px32_k$(index);
                  if (!changedToDownIgnoreConsumed(item)) {
                    tmp$ret$0 = false;
                    break l$ret$1;
                  }
                }
                 while (inductionVariable <= last);
              tmp$ret$0 = true;
            }
             while (false);
            if (!tmp$ret$0) {
              this.set_state_rjd8d0_k$(1);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.event0__1;
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $mouseSelectionCOROUTINE$8(_this__u8e3s4, observer, clicksCounter, down, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.observer_1 = observer;
    this.clicksCounter_1 = clicksCounter;
    this.down_1 = down;
  }
  protoOf($mouseSelectionCOROUTINE$8).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(6);
            this.downChange0__1 = this.down_1.get_changes_dhi2my_k$().get_c1px32_k$(0);
            this.clicksCounter_1.update_3yio41_k$(this.downChange0__1);
            if (get_isShiftPressed_0(this.down_1.get_keyboardModifiers_3jx0eb_k$())) {
              this.started1__1 = this.observer_1.onExtend_vcjoa9_k$(this.downChange0__1.get_position_cpyh94_k$());
              if (this.started1__1) {
                this.set_state_rjd8d0_k$(3);
                var tmp_0 = this.downChange0__1.get_id_o9b1d7_k$();
                suspendResult = drag(this._this__u8e3s4__1, tmp_0, mouseSelection$lambda(this.observer_1), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.set_state_rjd8d0_k$(4);
                continue $sm;
              }
            } else {
              var tmp_1 = this;
              switch (this.clicksCounter_1.clicks_1) {
                case 1:
                  tmp_1.selectionAdjustment2__1 = Companion_getInstance_42().get_None_wo6tgh_k$();
                  break;
                case 2:
                  tmp_1.selectionAdjustment2__1 = Companion_getInstance_42().get_Word_wockfn_k$();
                  break;
                default:
                  tmp_1.selectionAdjustment2__1 = Companion_getInstance_42().get_Paragraph_2v2rol_k$();
                  break;
              }
              this.started3__1 = this.observer_1.onStart_k8zw66_k$(this.downChange0__1.get_position_cpyh94_k$(), this.selectionAdjustment2__1);
              if (this.started3__1) {
                this.set_state_rjd8d0_k$(1);
                var tmp_2 = this.downChange0__1.get_id_o9b1d7_k$();
                suspendResult = drag(this._this__u8e3s4__1, tmp_2, mouseSelection$lambda_0(this.observer_1, this.selectionAdjustment2__1), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.set_state_rjd8d0_k$(2);
                continue $sm;
              }
            }

          case 1:
            var shouldConsumeUp = suspendResult;
            if (shouldConsumeUp) {
              var this_0 = this._this__u8e3s4__1.get_currentEvent_sfuq5m_k$().get_changes_dhi2my_k$();
              var inductionVariable = 0;
              var last = this_0.get_size_woubt6_k$() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = this_0.get_c1px32_k$(index);
                  if (changedToUp(item)) {
                    item.consume_sos6hg_k$();
                  }
                }
                 while (inductionVariable <= last);
            }

            this.observer_1.onDragDone_ei70g5_k$();
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            this.set_state_rjd8d0_k$(5);
            continue $sm;
          case 3:
            var shouldConsumeUp_0 = suspendResult;
            if (shouldConsumeUp_0) {
              var this_1 = this._this__u8e3s4__1.get_currentEvent_sfuq5m_k$().get_changes_dhi2my_k$();
              var inductionVariable_0 = 0;
              var last_0 = this_1.get_size_woubt6_k$() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = this_1.get_c1px32_k$(index_0);
                  if (changedToUp(item_0)) {
                    item_0.consume_sos6hg_k$();
                  }
                }
                 while (inductionVariable_0 <= last_0);
            }

            this.observer_1.onDragDone_ei70g5_k$();
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 4:
            this.set_state_rjd8d0_k$(5);
            continue $sm;
          case 5:
            return Unit_getInstance();
          case 6:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 6) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $touchSelectionCOROUTINE$9(_this__u8e3s4, observer, down, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.observer_1 = observer;
    this.down_1 = down;
  }
  protoOf($touchSelectionCOROUTINE$9).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(6);
            this.set_exceptionState_fex74n_k$(5);
            this.firstDown0__1 = first(this.down_1.get_changes_dhi2my_k$());
            this.set_state_rjd8d0_k$(1);
            suspendResult = awaitLongPressOrCancellation(this._this__u8e3s4__1, this.firstDown0__1.get_id_o9b1d7_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.drag1__1 = suspendResult;
            if (!(this.drag1__1 == null) ? distanceIsTolerable(this._this__u8e3s4__1, this.firstDown0__1.get_position_cpyh94_k$(), this.drag1__1.get_position_cpyh94_k$()) : false) {
              this.observer_1.onStart_pi05o7_k$(this.drag1__1.get_position_cpyh94_k$());
              this.set_state_rjd8d0_k$(2);
              var tmp_0 = this.drag1__1.get_id_o9b1d7_k$();
              suspendResult = drag(this._this__u8e3s4__1, tmp_0, touchSelection$lambda(this.observer_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

          case 2:
            if (suspendResult) {
              var this_0 = this._this__u8e3s4__1.get_currentEvent_sfuq5m_k$().get_changes_dhi2my_k$();
              var inductionVariable = 0;
              var last = this_0.get_size_woubt6_k$() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = this_0.get_c1px32_k$(index);
                  if (changedToUp(item)) {
                    item.consume_sos6hg_k$();
                  }
                }
                 while (inductionVariable <= last);
              this.observer_1.onStop_aj90a9_k$();
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            } else {
              this.observer_1.onCancel_q8zbzd_k$();
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

          case 3:
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 4:
            this.set_exceptionState_fex74n_k$(6);
            this.set_state_rjd8d0_k$(7);
            continue $sm;
          case 5:
            this.set_exceptionState_fex74n_k$(6);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof CancellationException) {
              var c = this.get_exception_x0n6w6_k$();
              this.observer_1.onCancel_q8zbzd_k$();
              throw c;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 6:
            throw this.get_exception_x0n6w6_k$();
          case 7:
            this.set_exceptionState_fex74n_k$(6);
            return Unit_getInstance();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 6) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function get_HandleWidth() {
    _init_properties_SelectionHandles_kt__nhzem7();
    return HandleWidth;
  }
  var HandleWidth;
  function get_HandleHeight() {
    _init_properties_SelectionHandles_kt__nhzem7();
    return HandleHeight;
  }
  var HandleHeight;
  function get_SelectionHandleInfoKey() {
    _init_properties_SelectionHandles_kt__nhzem7();
    return SelectionHandleInfoKey;
  }
  var SelectionHandleInfoKey;
  function SelectionHandleInfo(handle, position, anchor, visible) {
    this.handle_1 = handle;
    this.position_1 = position;
    this.anchor_1 = anchor;
    this.visible_1 = visible;
  }
  protoOf(SelectionHandleInfo).get_handle_e5p7ht_k$ = function () {
    return this.handle_1;
  };
  protoOf(SelectionHandleInfo).get_position_cpyh94_k$ = function () {
    return this.position_1;
  };
  protoOf(SelectionHandleInfo).get_anchor_b1c8n2_k$ = function () {
    return this.anchor_1;
  };
  protoOf(SelectionHandleInfo).get_visible_8zfvk9_k$ = function () {
    return this.visible_1;
  };
  protoOf(SelectionHandleInfo).component1_7eebsc_k$ = function () {
    return this.handle_1;
  };
  protoOf(SelectionHandleInfo).component2_eiigad_k$ = function () {
    return this.position_1;
  };
  protoOf(SelectionHandleInfo).component3_7eebsa_k$ = function () {
    return this.anchor_1;
  };
  protoOf(SelectionHandleInfo).component4_7eebs9_k$ = function () {
    return this.visible_1;
  };
  protoOf(SelectionHandleInfo).copy_sdozpw_k$ = function (handle, position, anchor, visible) {
    return new SelectionHandleInfo(handle, position, anchor, visible);
  };
  protoOf(SelectionHandleInfo).copy$default_641fym_k$ = function (handle, position, anchor, visible, $super) {
    handle = handle === VOID ? this.handle_1 : handle;
    position = position === VOID ? this.position_1 : position;
    anchor = anchor === VOID ? this.anchor_1 : anchor;
    visible = visible === VOID ? this.visible_1 : visible;
    return $super === VOID ? this.copy_sdozpw_k$(handle, position, anchor, visible) : $super.copy_sdozpw_k$.call(this, handle, new Offset_0(position), anchor, visible);
  };
  protoOf(SelectionHandleInfo).toString = function () {
    return 'SelectionHandleInfo(handle=' + this.handle_1 + ', position=' + new Offset_0(this.position_1) + ', anchor=' + this.anchor_1 + ', visible=' + this.visible_1 + ')';
  };
  protoOf(SelectionHandleInfo).hashCode = function () {
    var result = this.handle_1.hashCode();
    result = imul(result, 31) + Offset__hashCode_impl_hbql41(this.position_1) | 0;
    result = imul(result, 31) + this.anchor_1.hashCode() | 0;
    result = imul(result, 31) + getBooleanHashCode(this.visible_1) | 0;
    return result;
  };
  protoOf(SelectionHandleInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SelectionHandleInfo))
      return false;
    var tmp0_other_with_cast = other instanceof SelectionHandleInfo ? other : THROW_CCE();
    if (!this.handle_1.equals(tmp0_other_with_cast.handle_1))
      return false;
    if (!equals(this.position_1, tmp0_other_with_cast.position_1))
      return false;
    if (!this.anchor_1.equals(tmp0_other_with_cast.anchor_1))
      return false;
    if (!(this.visible_1 === tmp0_other_with_cast.visible_1))
      return false;
    return true;
  };
  var SelectionHandleAnchor_Left_instance;
  var SelectionHandleAnchor_Middle_instance;
  var SelectionHandleAnchor_Right_instance;
  function values_3() {
    return [SelectionHandleAnchor_Left_getInstance(), SelectionHandleAnchor_Middle_getInstance(), SelectionHandleAnchor_Right_getInstance()];
  }
  function valueOf_3(value) {
    switch (value) {
      case 'Left':
        return SelectionHandleAnchor_Left_getInstance();
      case 'Middle':
        return SelectionHandleAnchor_Middle_getInstance();
      case 'Right':
        return SelectionHandleAnchor_Right_getInstance();
      default:
        SelectionHandleAnchor_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_3() {
    if ($ENTRIES_3 == null)
      $ENTRIES_3 = enumEntries(values_3());
    return $ENTRIES_3;
  }
  var SelectionHandleAnchor_entriesInitialized;
  function SelectionHandleAnchor_initEntries() {
    if (SelectionHandleAnchor_entriesInitialized)
      return Unit_getInstance();
    SelectionHandleAnchor_entriesInitialized = true;
    SelectionHandleAnchor_Left_instance = new SelectionHandleAnchor('Left', 0);
    SelectionHandleAnchor_Middle_instance = new SelectionHandleAnchor('Middle', 1);
    SelectionHandleAnchor_Right_instance = new SelectionHandleAnchor('Right', 2);
  }
  var $ENTRIES_3;
  function SelectionHandleAnchor(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SelectionHandleAnchor_Left_getInstance() {
    SelectionHandleAnchor_initEntries();
    return SelectionHandleAnchor_Left_instance;
  }
  function SelectionHandleAnchor_Middle_getInstance() {
    SelectionHandleAnchor_initEntries();
    return SelectionHandleAnchor_Middle_instance;
  }
  function SelectionHandleAnchor_Right_getInstance() {
    SelectionHandleAnchor_initEntries();
    return SelectionHandleAnchor_Right_instance;
  }
  var properties_initialized_SelectionHandles_kt_h9mb7j;
  function _init_properties_SelectionHandles_kt__nhzem7() {
    if (!properties_initialized_SelectionHandles_kt_h9mb7j) {
      properties_initialized_SelectionHandles_kt_h9mb7j = true;
      // Inline function 'androidx.compose.ui.unit.dp' call
      HandleWidth = _Dp___init__impl__ms3zkb(25);
      // Inline function 'androidx.compose.ui.unit.dp' call
      HandleHeight = _Dp___init__impl__ms3zkb(25);
      SelectionHandleInfoKey = new SemanticsPropertyKey('SelectionHandleInfo');
    }
  }
  function _get_selectableIdToInfoListIndex__6yw9w7($this) {
    return $this.selectableIdToInfoListIndex_1;
  }
  function _get_infoList__qg7pk1($this) {
    return $this.infoList_1;
  }
  function _set_startSlot__63p0vv($this, _set____db54di) {
    $this.startSlot_1 = _set____db54di;
  }
  function _get_startSlot__n75fip($this) {
    return $this.startSlot_1;
  }
  function _set_endSlot__i3i2p8($this, _set____db54di) {
    $this.endSlot_1 = _set____db54di;
  }
  function _get_endSlot__7iq7ns($this) {
    return $this.endSlot_1;
  }
  function _set_currentSlot__l69xhq($this, _set____db54di) {
    $this.currentSlot_1 = _set____db54di;
  }
  function _get_currentSlot__jkfy5i($this) {
    return $this.currentSlot_1;
  }
  function updateSlot($this, slot, xPositionDirection, yPositionDirection) {
    if (!(slot === -1)) {
      return slot;
    }
    var tmp;
    switch (resolve2dDirection(xPositionDirection, yPositionDirection).get_ordinal_ip24qg_k$()) {
      case 0:
        tmp = $this.currentSlot_1 - 1 | 0;
        break;
      case 1:
        tmp = $this.currentSlot_1;
        break;
      case 2:
        tmp = slot;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function SelectionLayoutBuilder(currentPosition, previousHandlePosition, containerCoordinates, isStartHandle, previousSelection, selectableIdOrderingComparator) {
    this.currentPosition_1 = currentPosition;
    this.previousHandlePosition_1 = previousHandlePosition;
    this.containerCoordinates_1 = containerCoordinates;
    this.isStartHandle_1 = isStartHandle;
    this.previousSelection_1 = previousSelection;
    this.selectableIdOrderingComparator_1 = selectableIdOrderingComparator;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.selectableIdToInfoListIndex_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.infoList_1 = ArrayList_init_$Create$();
    this.startSlot_1 = -1;
    this.endSlot_1 = -1;
    this.currentSlot_1 = -1;
  }
  protoOf(SelectionLayoutBuilder).get_currentPosition_xhg93j_k$ = function () {
    return this.currentPosition_1;
  };
  protoOf(SelectionLayoutBuilder).get_previousHandlePosition_7iunpj_k$ = function () {
    return this.previousHandlePosition_1;
  };
  protoOf(SelectionLayoutBuilder).get_containerCoordinates_ez5lod_k$ = function () {
    return this.containerCoordinates_1;
  };
  protoOf(SelectionLayoutBuilder).get_isStartHandle_a4sj93_k$ = function () {
    return this.isStartHandle_1;
  };
  protoOf(SelectionLayoutBuilder).get_previousSelection_6b91sk_k$ = function () {
    return this.previousSelection_1;
  };
  protoOf(SelectionLayoutBuilder).get_selectableIdOrderingComparator_bwkn2c_k$ = function () {
    return this.selectableIdOrderingComparator_1;
  };
  protoOf(SelectionLayoutBuilder).build_1k0s4u_k$ = function () {
    var lastSlot = this.currentSlot_1 + 1 | 0;
    var tmp;
    switch (this.infoList_1.get_size_woubt6_k$()) {
      case 0:
        throw IllegalStateException_init_$Create$('SelectionLayout must not be empty.');
      case 1:
        var tmp1_info = single(this.infoList_1);
        var tmp2_startSlot = this.startSlot_1 === -1 ? lastSlot : this.startSlot_1;
        var tmp3_endSlot = this.endSlot_1 === -1 ? lastSlot : this.endSlot_1;
        var tmp4_previousSelection = this.previousSelection_1;
        var tmp5_isStartHandle = this.isStartHandle_1;
        tmp = new SingleSelectionLayout(tmp5_isStartHandle, tmp2_startSlot, tmp3_endSlot, tmp4_previousSelection, tmp1_info);
        break;
      default:
        tmp = new MultiSelectionLayout(this.selectableIdToInfoListIndex_1, this.infoList_1, this.startSlot_1 === -1 ? lastSlot : this.startSlot_1, this.endSlot_1 === -1 ? lastSlot : this.endSlot_1, this.isStartHandle_1, this.previousSelection_1);
        break;
    }
    return tmp;
  };
  protoOf(SelectionLayoutBuilder).appendInfo_hq2vki_k$ = function (selectableId, rawStartHandleOffset, startXHandleDirection, startYHandleDirection, rawEndHandleOffset, endXHandleDirection, endYHandleDirection, rawPreviousHandleOffset, textLayoutResult) {
    this.currentSlot_1 = this.currentSlot_1 + 2 | 0;
    var selectableInfo = new SelectableInfo(selectableId, this.currentSlot_1, rawStartHandleOffset, rawEndHandleOffset, rawPreviousHandleOffset, textLayoutResult);
    this.startSlot_1 = updateSlot(this, this.startSlot_1, startXHandleDirection, startYHandleDirection);
    this.endSlot_1 = updateSlot(this, this.endSlot_1, endXHandleDirection, endYHandleDirection);
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.selectableIdToInfoListIndex_1;
    var value = this.infoList_1.get_size_woubt6_k$();
    this_0.put_4fpzoq_k$(selectableId, value);
    // Inline function 'kotlin.collections.plusAssign' call
    this.infoList_1.add_utx5q5_k$(selectableInfo);
    return selectableInfo;
  };
  function SelectionLayout() {
  }
  function _get_startRunDirection__mafu79($this) {
    return getTextDirectionForOffset($this.textLayoutResult_1, $this.rawStartHandleOffset_1);
  }
  function _get_endRunDirection__fgzj5q($this) {
    return getTextDirectionForOffset($this.textLayoutResult_1, $this.rawEndHandleOffset_1);
  }
  function SelectableInfo(selectableId, slot, rawStartHandleOffset, rawEndHandleOffset, rawPreviousHandleOffset, textLayoutResult) {
    this.selectableId_1 = selectableId;
    this.slot_1 = slot;
    this.rawStartHandleOffset_1 = rawStartHandleOffset;
    this.rawEndHandleOffset_1 = rawEndHandleOffset;
    this.rawPreviousHandleOffset_1 = rawPreviousHandleOffset;
    this.textLayoutResult_1 = textLayoutResult;
  }
  protoOf(SelectableInfo).get_selectableId_qduvty_k$ = function () {
    return this.selectableId_1;
  };
  protoOf(SelectableInfo).get_slot_wouds7_k$ = function () {
    return this.slot_1;
  };
  protoOf(SelectableInfo).get_rawStartHandleOffset_xwsbz6_k$ = function () {
    return this.rawStartHandleOffset_1;
  };
  protoOf(SelectableInfo).get_rawEndHandleOffset_xsqyzb_k$ = function () {
    return this.rawEndHandleOffset_1;
  };
  protoOf(SelectableInfo).get_rawPreviousHandleOffset_o07aa9_k$ = function () {
    return this.rawPreviousHandleOffset_1;
  };
  protoOf(SelectableInfo).get_textLayoutResult_u0m931_k$ = function () {
    return this.textLayoutResult_1;
  };
  protoOf(SelectableInfo).get_inputText_yab7o2_k$ = function () {
    return this.textLayoutResult_1.get_layoutInput_o7gjah_k$().get_text_wouvsm_k$().get_text_wouvsm_k$();
  };
  protoOf(SelectableInfo).get_textLength_6wnzek_k$ = function () {
    return this.get_inputText_yab7o2_k$().length;
  };
  protoOf(SelectableInfo).get_rawCrossStatus_3e589f_k$ = function () {
    return this.rawStartHandleOffset_1 < this.rawEndHandleOffset_1 ? CrossStatus_NOT_CROSSED_getInstance() : this.rawStartHandleOffset_1 > this.rawEndHandleOffset_1 ? CrossStatus_CROSSED_getInstance() : CrossStatus_COLLAPSED_getInstance();
  };
  protoOf(SelectableInfo).shouldRecomputeSelection_sf9mwn_k$ = function (other) {
    return (!this.selectableId_1.equals(other.selectableId_1) ? true : !(this.rawStartHandleOffset_1 === other.rawStartHandleOffset_1)) ? true : !(this.rawEndHandleOffset_1 === other.rawEndHandleOffset_1);
  };
  protoOf(SelectableInfo).anchorForOffset_85yhvz_k$ = function (offset) {
    return new AnchorInfo(getTextDirectionForOffset(this.textLayoutResult_1, offset), offset, this.selectableId_1);
  };
  protoOf(SelectableInfo).makeSingleLayoutSelection_q60fn8_k$ = function (start, end) {
    return new Selection(this.anchorForOffset_85yhvz_k$(start), this.anchorForOffset_85yhvz_k$(end), start > end);
  };
  protoOf(SelectableInfo).toString = function () {
    return 'SelectionInfo(id=' + this.selectableId_1.toString() + ', ' + ('range=(' + this.rawStartHandleOffset_1 + '-' + _get_startRunDirection__mafu79(this) + ',' + this.rawEndHandleOffset_1 + '-' + _get_endRunDirection__fgzj5q(this) + '), ') + ('prevOffset=' + this.rawPreviousHandleOffset_1 + ')');
  };
  var CrossStatus_CROSSED_instance;
  var CrossStatus_NOT_CROSSED_instance;
  var CrossStatus_COLLAPSED_instance;
  function values_4() {
    return [CrossStatus_CROSSED_getInstance(), CrossStatus_NOT_CROSSED_getInstance(), CrossStatus_COLLAPSED_getInstance()];
  }
  function valueOf_4(value) {
    switch (value) {
      case 'CROSSED':
        return CrossStatus_CROSSED_getInstance();
      case 'NOT_CROSSED':
        return CrossStatus_NOT_CROSSED_getInstance();
      case 'COLLAPSED':
        return CrossStatus_COLLAPSED_getInstance();
      default:
        CrossStatus_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_4() {
    if ($ENTRIES_4 == null)
      $ENTRIES_4 = enumEntries(values_4());
    return $ENTRIES_4;
  }
  var CrossStatus_entriesInitialized;
  function CrossStatus_initEntries() {
    if (CrossStatus_entriesInitialized)
      return Unit_getInstance();
    CrossStatus_entriesInitialized = true;
    CrossStatus_CROSSED_instance = new CrossStatus('CROSSED', 0);
    CrossStatus_NOT_CROSSED_instance = new CrossStatus('NOT_CROSSED', 1);
    CrossStatus_COLLAPSED_instance = new CrossStatus('COLLAPSED', 2);
  }
  var $ENTRIES_4;
  function CrossStatus(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function isCollapsed(_this__u8e3s4, layout) {
    if (_this__u8e3s4 == null)
      return true;
    if (layout == null)
      return true;
    if (_this__u8e3s4.get_start_iypx6h_k$().get_selectableId_qduvty_k$().equals(_this__u8e3s4.get_end_18j6ha_k$().get_selectableId_qduvty_k$())) {
      return _this__u8e3s4.get_start_iypx6h_k$().get_offset_hjmqak_k$() === _this__u8e3s4.get_end_18j6ha_k$().get_offset_hjmqak_k$();
    }
    var maxAnchor = _this__u8e3s4.get_handlesCrossed_5utwpv_k$() ? _this__u8e3s4.get_start_iypx6h_k$() : _this__u8e3s4.get_end_18j6ha_k$();
    if (!(maxAnchor.get_offset_hjmqak_k$() === 0)) {
      return false;
    }
    var minAnchor = _this__u8e3s4.get_handlesCrossed_5utwpv_k$() ? _this__u8e3s4.get_end_18j6ha_k$() : _this__u8e3s4.get_start_iypx6h_k$();
    if (!(layout.get_firstInfo_apj0et_k$().get_textLength_6wnzek_k$() === minAnchor.get_offset_hjmqak_k$())) {
      return false;
    }
    var allTextsEmpty = {_v: true};
    layout.forEachMiddleInfo_q759f4_k$(isCollapsed$lambda(allTextsEmpty));
    return allTextsEmpty._v;
  }
  function get_UNASSIGNED_SLOT() {
    return UNASSIGNED_SLOT;
  }
  var UNASSIGNED_SLOT;
  function _get_info__d89bod($this) {
    return $this.info_1;
  }
  function Companion_12() {
    Companion_instance_12 = this;
    this.DEFAULT_SLOT_1 = 1;
    this.DEFAULT_SELECTABLE_ID_1 = new Long(1, 0);
  }
  protoOf(Companion_12).get_DEFAULT_SLOT_wlne05_k$ = function () {
    return this.DEFAULT_SLOT_1;
  };
  protoOf(Companion_12).get_DEFAULT_SELECTABLE_ID_p1pyhp_k$ = function () {
    return this.DEFAULT_SELECTABLE_ID_1;
  };
  var Companion_instance_12;
  function Companion_getInstance_43() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function SingleSelectionLayout(isStartHandle, startSlot, endSlot, previousSelection, info) {
    Companion_getInstance_43();
    this.isStartHandle_1 = isStartHandle;
    this.startSlot_1 = startSlot;
    this.endSlot_1 = endSlot;
    this.previousSelection_1 = previousSelection;
    this.info_1 = info;
  }
  protoOf(SingleSelectionLayout).get_isStartHandle_a4sj93_k$ = function () {
    return this.isStartHandle_1;
  };
  protoOf(SingleSelectionLayout).get_startSlot_qp7xux_k$ = function () {
    return this.startSlot_1;
  };
  protoOf(SingleSelectionLayout).get_endSlot_pbdfg0_k$ = function () {
    return this.endSlot_1;
  };
  protoOf(SingleSelectionLayout).get_previousSelection_6b91sk_k$ = function () {
    return this.previousSelection_1;
  };
  protoOf(SingleSelectionLayout).get_size_woubt6_k$ = function () {
    return 1;
  };
  protoOf(SingleSelectionLayout).get_crossStatus_acvbbr_k$ = function () {
    return this.info_1.get_rawCrossStatus_3e589f_k$();
  };
  protoOf(SingleSelectionLayout).get_startInfo_qpeagp_k$ = function () {
    return this.info_1;
  };
  protoOf(SingleSelectionLayout).get_endInfo_pbjs1s_k$ = function () {
    return this.info_1;
  };
  protoOf(SingleSelectionLayout).get_currentInfo_ntyvry_k$ = function () {
    return this.info_1;
  };
  protoOf(SingleSelectionLayout).get_firstInfo_apj0et_k$ = function () {
    return this.info_1;
  };
  protoOf(SingleSelectionLayout).get_lastInfo_f333fx_k$ = function () {
    return this.info_1;
  };
  protoOf(SingleSelectionLayout).forEachMiddleInfo_q759f4_k$ = function (block) {
  };
  protoOf(SingleSelectionLayout).shouldRecomputeSelection_1vvhua_k$ = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (this.previousSelection_1 == null ? true : other == null) {
      tmp_1 = true;
    } else {
      tmp_1 = !(other instanceof SingleSelectionLayout);
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = !(this.isStartHandle_1 === other.get_isStartHandle_a4sj93_k$());
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = this.info_1.shouldRecomputeSelection_sf9mwn_k$(other.info_1);
    }
    return tmp;
  };
  protoOf(SingleSelectionLayout).createSubSelections_4qx2q9_k$ = function (selection) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((selection.get_handlesCrossed_5utwpv_k$() ? selection.get_start_iypx6h_k$().get_offset_hjmqak_k$() >= selection.get_end_18j6ha_k$().get_offset_hjmqak_k$() : false) ? true : !selection.get_handlesCrossed_5utwpv_k$() ? selection.get_start_iypx6h_k$().get_offset_hjmqak_k$() <= selection.get_end_18j6ha_k$().get_offset_hjmqak_k$() : false)) {
      // Inline function 'androidx.compose.foundation.text.selection.SingleSelectionLayout.createSubSelections.<anonymous>' call
      var message = 'unexpectedly miss-crossed selection: ' + selection;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return mapOf_0(to(this.info_1.selectableId_1, selection));
  };
  protoOf(SingleSelectionLayout).toString = function () {
    return 'SingleSelectionLayout(isStartHandle=' + this.isStartHandle_1 + ', crossed=' + this.get_crossStatus_acvbbr_k$() + ', info=\n\t' + this.info_1 + ')';
  };
  function shouldAnyInfoRecomputeSelection($this, other) {
    if (!($this.get_size_woubt6_k$() === other.get_size_woubt6_k$()))
      return true;
    var inductionVariable = 0;
    var last = $this.infoList_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var thisInfo = $this.infoList_1.get_c1px32_k$(i);
        var otherInfo = other.infoList_1.get_c1px32_k$(i);
        if (thisInfo.shouldRecomputeSelection_sf9mwn_k$(otherInfo)) {
          return true;
        }
      }
       while (inductionVariable <= last);
    return false;
  }
  function createAndPutSubSelection(_this__u8e3s4, $this, selection, info, minOffset, maxOffset) {
    var tmp;
    if (selection.get_handlesCrossed_5utwpv_k$()) {
      tmp = info.makeSingleLayoutSelection_q60fn8_k$(maxOffset, minOffset);
    } else {
      tmp = info.makeSingleLayoutSelection_q60fn8_k$(minOffset, maxOffset);
    }
    var subSelection = tmp;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(minOffset <= maxOffset)) {
      // Inline function 'androidx.compose.foundation.text.selection.MultiSelectionLayout.createAndPutSubSelection.<anonymous>' call
      var message = 'minOffset should be less than or equal to maxOffset: ' + subSelection;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    _this__u8e3s4.put_4fpzoq_k$(info.selectableId_1, subSelection);
  }
  function startOrEndSlotToIndex($this, slot, isStartSlot) {
    var tmp;
    switch ($this.get_crossStatus_acvbbr_k$().get_ordinal_ip24qg_k$()) {
      case 2:
        tmp = true;
        break;
      case 1:
        tmp = isStartSlot;
        break;
      case 0:
        tmp = !isStartSlot;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return slotToIndex($this, slot, tmp);
  }
  function slotToIndex($this, slot, isMinimumSlot) {
    var slotAdjustment = isMinimumSlot ? 0 : 1;
    return (slot - slotAdjustment | 0) / 2 | 0;
  }
  function getInfoListIndexBySelectableId($this, id) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      var value = $this.selectableIdToInfoListIndex_1.get_wei43m_k$(id);
      // Inline function 'kotlin.contracts.contract' call
      if (value == null) {
        // Inline function 'androidx.compose.foundation.text.selection.MultiSelectionLayout.getInfoListIndexBySelectableId.<anonymous>' call
        var message = 'Invalid selectableId: ' + id.toString();
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = value;
        break $l$block;
      }
    }
    return tmp$ret$1;
  }
  function MultiSelectionLayout$createSubSelections$lambda(this$0, $$this$buildMap, $selection) {
    return function (info) {
      createAndPutSubSelection($$this$buildMap, this$0, $selection, info, 0, info.get_textLength_6wnzek_k$());
      return Unit_getInstance();
    };
  }
  function MultiSelectionLayout(selectableIdToInfoListIndex, infoList, startSlot, endSlot, isStartHandle, previousSelection) {
    this.selectableIdToInfoListIndex_1 = selectableIdToInfoListIndex;
    this.infoList_1 = infoList;
    this.startSlot_1 = startSlot;
    this.endSlot_1 = endSlot;
    this.isStartHandle_1 = isStartHandle;
    this.previousSelection_1 = previousSelection;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.infoList_1.get_size_woubt6_k$() > 1)) {
      // Inline function 'androidx.compose.foundation.text.selection.MultiSelectionLayout.<anonymous>' call
      var message = 'MultiSelectionLayout requires an infoList size greater than 1, was ' + this.infoList_1.get_size_woubt6_k$() + '.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  protoOf(MultiSelectionLayout).get_selectableIdToInfoListIndex_8exnwx_k$ = function () {
    return this.selectableIdToInfoListIndex_1;
  };
  protoOf(MultiSelectionLayout).get_infoList_sv4zbf_k$ = function () {
    return this.infoList_1;
  };
  protoOf(MultiSelectionLayout).get_startSlot_qp7xux_k$ = function () {
    return this.startSlot_1;
  };
  protoOf(MultiSelectionLayout).get_endSlot_pbdfg0_k$ = function () {
    return this.endSlot_1;
  };
  protoOf(MultiSelectionLayout).get_isStartHandle_a4sj93_k$ = function () {
    return this.isStartHandle_1;
  };
  protoOf(MultiSelectionLayout).get_previousSelection_6b91sk_k$ = function () {
    return this.previousSelection_1;
  };
  protoOf(MultiSelectionLayout).get_size_woubt6_k$ = function () {
    return this.infoList_1.get_size_woubt6_k$();
  };
  protoOf(MultiSelectionLayout).get_crossStatus_acvbbr_k$ = function () {
    return this.startSlot_1 < this.endSlot_1 ? CrossStatus_NOT_CROSSED_getInstance() : this.startSlot_1 > this.endSlot_1 ? CrossStatus_CROSSED_getInstance() : this.infoList_1.get_c1px32_k$(this.startSlot_1 / 2 | 0).get_rawCrossStatus_3e589f_k$();
  };
  protoOf(MultiSelectionLayout).get_startInfo_qpeagp_k$ = function () {
    return this.infoList_1.get_c1px32_k$(startOrEndSlotToIndex(this, this.startSlot_1, true));
  };
  protoOf(MultiSelectionLayout).get_endInfo_pbjs1s_k$ = function () {
    return this.infoList_1.get_c1px32_k$(startOrEndSlotToIndex(this, this.endSlot_1, false));
  };
  protoOf(MultiSelectionLayout).get_currentInfo_ntyvry_k$ = function () {
    return this.isStartHandle_1 ? this.get_startInfo_qpeagp_k$() : this.get_endInfo_pbjs1s_k$();
  };
  protoOf(MultiSelectionLayout).get_firstInfo_apj0et_k$ = function () {
    return this.get_crossStatus_acvbbr_k$().equals(CrossStatus_CROSSED_getInstance()) ? this.get_endInfo_pbjs1s_k$() : this.get_startInfo_qpeagp_k$();
  };
  protoOf(MultiSelectionLayout).get_lastInfo_f333fx_k$ = function () {
    return this.get_crossStatus_acvbbr_k$().equals(CrossStatus_CROSSED_getInstance()) ? this.get_startInfo_qpeagp_k$() : this.get_endInfo_pbjs1s_k$();
  };
  protoOf(MultiSelectionLayout).forEachMiddleInfo_q759f4_k$ = function (block) {
    var minIndex = getInfoListIndexBySelectableId(this, this.get_firstInfo_apj0et_k$().selectableId_1);
    var maxIndex = getInfoListIndexBySelectableId(this, this.get_lastInfo_f333fx_k$().selectableId_1);
    if ((minIndex + 1 | 0) >= maxIndex) {
      return Unit_getInstance();
    }
    var inductionVariable = minIndex + 1 | 0;
    if (inductionVariable < maxIndex)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        block(this.infoList_1.get_c1px32_k$(i));
      }
       while (inductionVariable < maxIndex);
  };
  protoOf(MultiSelectionLayout).shouldRecomputeSelection_1vvhua_k$ = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    if (this.previousSelection_1 == null ? true : other == null) {
      tmp_3 = true;
    } else {
      tmp_3 = !(other instanceof MultiSelectionLayout);
    }
    if (tmp_3) {
      tmp_2 = true;
    } else {
      tmp_2 = !(this.isStartHandle_1 === other.get_isStartHandle_a4sj93_k$());
    }
    if (tmp_2) {
      tmp_1 = true;
    } else {
      tmp_1 = !(this.startSlot_1 === other.get_startSlot_qp7xux_k$());
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = !(this.endSlot_1 === other.get_endSlot_pbdfg0_k$());
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = shouldAnyInfoRecomputeSelection(this, other);
    }
    return tmp;
  };
  protoOf(MultiSelectionLayout).createSubSelections_4qx2q9_k$ = function (selection) {
    var tmp;
    if (selection.get_start_iypx6h_k$().get_selectableId_qduvty_k$().equals(selection.get_end_18j6ha_k$().get_selectableId_qduvty_k$())) {
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!((selection.get_handlesCrossed_5utwpv_k$() ? selection.get_start_iypx6h_k$().get_offset_hjmqak_k$() >= selection.get_end_18j6ha_k$().get_offset_hjmqak_k$() : false) ? true : !selection.get_handlesCrossed_5utwpv_k$() ? selection.get_start_iypx6h_k$().get_offset_hjmqak_k$() <= selection.get_end_18j6ha_k$().get_offset_hjmqak_k$() : false)) {
        // Inline function 'androidx.compose.foundation.text.selection.MultiSelectionLayout.createSubSelections.<anonymous>' call
        var message = 'unexpectedly miss-crossed selection: ' + selection;
        throw IllegalStateException_init_$Create$(toString(message));
      }
      tmp = mapOf_0(to(selection.get_start_iypx6h_k$().get_selectableId_qduvty_k$(), selection));
    } else {
      // Inline function 'kotlin.collections.buildMap' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.collections.buildMapInternal' call
      // Inline function 'kotlin.apply' call
      var this_0 = LinkedHashMap_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.text.selection.MultiSelectionLayout.createSubSelections.<anonymous>' call
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.text.selection.MultiSelectionLayout.createSubSelections.<anonymous>.<anonymous>' call
      var minAnchor = selection.get_handlesCrossed_5utwpv_k$() ? selection.get_end_18j6ha_k$() : selection.get_start_iypx6h_k$();
      createAndPutSubSelection(this_0, this, selection, this.get_firstInfo_apj0et_k$(), minAnchor.get_offset_hjmqak_k$(), this.get_firstInfo_apj0et_k$().get_textLength_6wnzek_k$());
      this.forEachMiddleInfo_q759f4_k$(MultiSelectionLayout$createSubSelections$lambda(this, this_0, selection));
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.text.selection.MultiSelectionLayout.createSubSelections.<anonymous>.<anonymous>' call
      var maxAnchor = selection.get_handlesCrossed_5utwpv_k$() ? selection.get_start_iypx6h_k$() : selection.get_end_18j6ha_k$();
      createAndPutSubSelection(this_0, this, selection, this.get_lastInfo_f333fx_k$(), 0, maxAnchor.get_offset_hjmqak_k$());
      tmp = this_0.build_1k0s4u_k$();
    }
    return tmp;
  };
  protoOf(MultiSelectionLayout).toString = function () {
    var tmp = 'MultiSelectionLayout(isStartHandle=' + this.isStartHandle_1 + ', ' + ('startPosition=' + (this.startSlot_1 + 1 | 0) / 2 + ', ') + ('endPosition=' + (this.endSlot_1 + 1 | 0) / 2 + ', ') + ('crossed=' + this.get_crossStatus_acvbbr_k$() + ', ');
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.text.selection.MultiSelectionLayout.toString.<anonymous>' call
    this_0.append_22ad7x_k$('[\n\t');
    var first = true;
    // Inline function 'androidx.compose.ui.util.fastForEachIndexed' call
    var this_1 = this.infoList_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_1.get_c1px32_k$(index);
        // Inline function 'androidx.compose.foundation.text.selection.MultiSelectionLayout.toString.<anonymous>.<anonymous>' call
        if (first) {
          first = false;
        } else {
          this_0.append_22ad7x_k$(',\n\t');
        }
        this_0.append_22ad7x_k$('' + (index + 1 | 0) + ' -> ' + item);
      }
       while (inductionVariable <= last);
    this_0.append_22ad7x_k$('\n]');
    return tmp + ('infos=' + this_0.toString() + ')');
  };
  var Direction_BEFORE_instance;
  var Direction_ON_instance;
  var Direction_AFTER_instance;
  function values_5() {
    return [Direction_BEFORE_getInstance(), Direction_ON_getInstance(), Direction_AFTER_getInstance()];
  }
  function valueOf_5(value) {
    switch (value) {
      case 'BEFORE':
        return Direction_BEFORE_getInstance();
      case 'ON':
        return Direction_ON_getInstance();
      case 'AFTER':
        return Direction_AFTER_getInstance();
      default:
        Direction_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_5() {
    if ($ENTRIES_5 == null)
      $ENTRIES_5 = enumEntries(values_5());
    return $ENTRIES_5;
  }
  var Direction_entriesInitialized;
  function Direction_initEntries() {
    if (Direction_entriesInitialized)
      return Unit_getInstance();
    Direction_entriesInitialized = true;
    Direction_BEFORE_instance = new Direction('BEFORE', 0);
    Direction_ON_instance = new Direction('ON', 1);
    Direction_AFTER_instance = new Direction('AFTER', 2);
  }
  var $ENTRIES_5;
  function Direction(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function resolve2dDirection(x, y) {
    var tmp;
    switch (y.get_ordinal_ip24qg_k$()) {
      case 0:
        tmp = Direction_BEFORE_getInstance();
        break;
      case 1:
        var tmp_0;
        switch (x.get_ordinal_ip24qg_k$()) {
          case 0:
            tmp_0 = Direction_BEFORE_getInstance();
            break;
          case 1:
            tmp_0 = Direction_ON_getInstance();
            break;
          case 2:
            tmp_0 = Direction_AFTER_getInstance();
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }

        tmp = tmp_0;
        break;
      case 2:
        tmp = Direction_AFTER_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function getTextDirectionForOffset(_this__u8e3s4, offset) {
    return isOffsetAnEmptyLine(_this__u8e3s4, offset) ? _this__u8e3s4.getParagraphDirection_qweb73_k$(offset) : _this__u8e3s4.getBidiRunDirection_c67d8i_k$(offset);
  }
  function isOffsetAnEmptyLine(_this__u8e3s4, offset) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    var this_0 = _this__u8e3s4.get_layoutInput_o7gjah_k$().get_text_wouvsm_k$();
    if (charSequenceLength(this_0) === 0) {
      tmp = true;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.text.selection.isOffsetAnEmptyLine.<anonymous>' call
      var currentLine = _this__u8e3s4.getLineForOffset_jakwx2_k$(offset);
      tmp = (offset === 0 ? true : !(currentLine === _this__u8e3s4.getLineForOffset_jakwx2_k$(offset - 1 | 0))) ? offset === _this__u8e3s4.get_layoutInput_o7gjah_k$().get_text_wouvsm_k$().get_length_g42xv3_k$() ? true : !(currentLine === _this__u8e3s4.getLineForOffset_jakwx2_k$(offset + 1 | 0)) : false;
    }
    return tmp;
  }
  function isCollapsed$lambda($allTextsEmpty) {
    return function (it) {
      var tmp;
      // Inline function 'kotlin.text.isNotEmpty' call
      var this_0 = it.get_inputText_yab7o2_k$();
      if (charSequenceLength(this_0) > 0) {
        $allTextsEmpty._v = false;
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function CrossStatus_CROSSED_getInstance() {
    CrossStatus_initEntries();
    return CrossStatus_CROSSED_instance;
  }
  function CrossStatus_NOT_CROSSED_getInstance() {
    CrossStatus_initEntries();
    return CrossStatus_NOT_CROSSED_instance;
  }
  function CrossStatus_COLLAPSED_getInstance() {
    CrossStatus_initEntries();
    return CrossStatus_COLLAPSED_instance;
  }
  function Direction_BEFORE_getInstance() {
    Direction_initEntries();
    return Direction_BEFORE_instance;
  }
  function Direction_ON_getInstance() {
    Direction_initEntries();
    return Direction_ON_instance;
  }
  function Direction_AFTER_getInstance() {
    Direction_initEntries();
    return Direction_AFTER_instance;
  }
  function get_UnspecifiedAnimationVector2D() {
    _init_properties_SelectionMagnifier_kt__29sucy();
    return UnspecifiedAnimationVector2D;
  }
  var UnspecifiedAnimationVector2D;
  function get_UnspecifiedSafeOffsetVectorConverter() {
    _init_properties_SelectionMagnifier_kt__29sucy();
    return UnspecifiedSafeOffsetVectorConverter;
  }
  var UnspecifiedSafeOffsetVectorConverter;
  function get_OffsetDisplacementThreshold() {
    _init_properties_SelectionMagnifier_kt__29sucy();
    return OffsetDisplacementThreshold;
  }
  var OffsetDisplacementThreshold;
  function get_MagnifierSpringSpec() {
    _init_properties_SelectionMagnifier_kt__29sucy();
    return MagnifierSpringSpec;
  }
  var MagnifierSpringSpec;
  function UnspecifiedSafeOffsetVectorConverter$lambda(it) {
    _init_properties_SelectionMagnifier_kt__29sucy();
    var tmp;
    if (get_isSpecified(it.packedValue_1)) {
      tmp = new AnimationVector2D(_Offset___get_x__impl__xvi35n(it.packedValue_1), _Offset___get_y__impl__8bzhra(it.packedValue_1));
    } else {
      tmp = get_UnspecifiedAnimationVector2D();
    }
    return tmp;
  }
  function UnspecifiedSafeOffsetVectorConverter$lambda_0(it) {
    _init_properties_SelectionMagnifier_kt__29sucy();
    return new Offset_0(Offset(it.get_v1_kntnng_k$(), it.get_v2_kntnnf_k$()));
  }
  var properties_initialized_SelectionMagnifier_kt_dgnx1w;
  function _init_properties_SelectionMagnifier_kt__29sucy() {
    if (!properties_initialized_SelectionMagnifier_kt_dgnx1w) {
      properties_initialized_SelectionMagnifier_kt_dgnx1w = true;
      UnspecifiedAnimationVector2D = new AnimationVector2D(FloatCompanionObject_getInstance().get_NaN_18jnv2_k$(), FloatCompanionObject_getInstance().get_NaN_18jnv2_k$());
      var tmp = UnspecifiedSafeOffsetVectorConverter$lambda;
      UnspecifiedSafeOffsetVectorConverter = TwoWayConverter(tmp, UnspecifiedSafeOffsetVectorConverter$lambda_0);
      OffsetDisplacementThreshold = Offset(Spring_getInstance().get_DefaultDisplacementThreshold_1c58p0_k$(), Spring_getInstance().get_DefaultDisplacementThreshold_1c58p0_k$());
      MagnifierSpringSpec = new SpringSpec(VOID, VOID, new Offset_0(get_OffsetDisplacementThreshold()));
    }
  }
  function get_invertedInfiniteRect() {
    _init_properties_SelectionManager_kt__u9j33();
    return invertedInfiniteRect;
  }
  var invertedInfiniteRect;
  var properties_initialized_SelectionManager_kt_pnaxlp;
  function _init_properties_SelectionManager_kt__u9j33() {
    if (!properties_initialized_SelectionManager_kt_pnaxlp) {
      properties_initialized_SelectionManager_kt_pnaxlp = true;
      invertedInfiniteRect = new Rect(FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$(), FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$(), FloatCompanionObject_getInstance().get_NEGATIVE_INFINITY_e9bp9z_k$(), FloatCompanionObject_getInstance().get_NEGATIVE_INFINITY_e9bp9z_k$());
    }
  }
  function get_LocalSelectionRegistrar() {
    _init_properties_SelectionRegistrar_kt__oigj6p();
    return LocalSelectionRegistrar;
  }
  var LocalSelectionRegistrar;
  function Companion_13() {
    Companion_instance_13 = this;
    this.InvalidSelectableId_1 = new Long(0, 0);
  }
  protoOf(Companion_13).get_InvalidSelectableId_nbfra9_k$ = function () {
    return this.InvalidSelectableId_1;
  };
  var Companion_instance_13;
  function Companion_getInstance_44() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  function SelectionRegistrar() {
  }
  function hasSelection(_this__u8e3s4, selectableId) {
    _init_properties_SelectionRegistrar_kt__oigj6p();
    var tmp1_safe_receiver = _this__u8e3s4 == null ? null : _this__u8e3s4.get_subselections_i6sdj2_k$();
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.containsKey_aw81wo_k$(selectableId);
    return tmp2_elvis_lhs == null ? false : tmp2_elvis_lhs;
  }
  function LocalSelectionRegistrar$lambda() {
    _init_properties_SelectionRegistrar_kt__oigj6p();
    return null;
  }
  var properties_initialized_SelectionRegistrar_kt_shxs4d;
  function _init_properties_SelectionRegistrar_kt__oigj6p() {
    if (!properties_initialized_SelectionRegistrar_kt_shxs4d) {
      properties_initialized_SelectionRegistrar_kt_shxs4d = true;
      LocalSelectionRegistrar = compositionLocalOf(VOID, LocalSelectionRegistrar$lambda);
    }
  }
  function get_LocalTextSelectionColors() {
    _init_properties_TextSelectionColors_kt__lgomir();
    return LocalTextSelectionColors;
  }
  var LocalTextSelectionColors;
  function TextSelectionColors(handleColor, backgroundColor) {
    this.handleColor_1 = handleColor;
    this.backgroundColor_1 = backgroundColor;
  }
  protoOf(TextSelectionColors).get_handleColor_oadivb_k$ = function () {
    return this.handleColor_1;
  };
  protoOf(TextSelectionColors).get_backgroundColor_41xwlp_k$ = function () {
    return this.backgroundColor_1;
  };
  protoOf(TextSelectionColors).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextSelectionColors))
      return false;
    if (!equals(this.handleColor_1, other.handleColor_1))
      return false;
    if (!equals(this.backgroundColor_1, other.backgroundColor_1))
      return false;
    return true;
  };
  protoOf(TextSelectionColors).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.handleColor_1);
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.backgroundColor_1) | 0;
    return result;
  };
  protoOf(TextSelectionColors).toString = function () {
    return 'SelectionColors(selectionHandleColor=' + new Color(this.handleColor_1) + ', ' + ('selectionBackgroundColor=' + new Color(this.backgroundColor_1) + ')');
  };
  function LocalTextSelectionColors$lambda() {
    _init_properties_TextSelectionColors_kt__lgomir();
    return get_DefaultTextSelectionColors();
  }
  var properties_initialized_TextSelectionColors_kt_x2xmyn;
  function _init_properties_TextSelectionColors_kt__lgomir() {
    if (!properties_initialized_TextSelectionColors_kt_x2xmyn) {
      properties_initialized_TextSelectionColors_kt_x2xmyn = true;
      LocalTextSelectionColors = compositionLocalOf(VOID, LocalTextSelectionColors$lambda);
    }
  }
  function getSelectionHandleCoordinates(textLayoutResult, offset, isStart, areHandlesCrossed) {
    var line = textLayoutResult.getLineForOffset_jakwx2_k$(offset);
    if (line >= textLayoutResult.get_lineCount_lmaazy_k$())
      return Companion_getInstance_6().get_Unspecified_gis8po_k$();
    var x = getHorizontalPosition(textLayoutResult, offset, isStart, areHandlesCrossed);
    var y = textLayoutResult.getLineBottom_yhu6bn_k$(line);
    return Offset(x, y);
  }
  function getHorizontalPosition(_this__u8e3s4, offset, isStart, areHandlesCrossed) {
    var tmp;
    if ((isStart ? !areHandlesCrossed : false) ? true : !isStart ? areHandlesCrossed : false) {
      tmp = offset;
    } else {
      // Inline function 'kotlin.math.max' call
      var a = offset - 1 | 0;
      tmp = Math.max(a, 0);
    }
    var offsetToCheck = tmp;
    var bidiRunDirection = _this__u8e3s4.getBidiRunDirection_c67d8i_k$(offsetToCheck);
    var paragraphDirection = _this__u8e3s4.getParagraphDirection_qweb73_k$(offset);
    return _this__u8e3s4.getHorizontalPosition_9mx7bk_k$(offset, bidiRunDirection.equals(paragraphDirection));
  }
  function get_DefaultTextFieldDecorator() {
    _init_properties_BasicTextField2_kt__s8wlwf();
    return DefaultTextFieldDecorator;
  }
  var DefaultTextFieldDecorator;
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$BasicTextField2Kt$lambda_1$lambda_sy3tex(it, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C548@28631L4:BasicTextField2.kt#g98mwb');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(it) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-525352027, $dirty, -1, 'androidx.compose.foundation.text2.ComposableSingletons$BasicTextField2Kt.lambda-1.<anonymous> (BasicTextField2.kt:548)');
      }
      it($composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$BasicTextField2Kt() {
    ComposableSingletons$BasicTextField2Kt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-525352027, false, ComposableSingletons$BasicTextField2Kt$lambda_1$lambda_sy3tex));
  }
  protoOf(ComposableSingletons$BasicTextField2Kt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$BasicTextField2Kt_instance;
  function ComposableSingletons$BasicTextField2Kt_getInstance() {
    if (ComposableSingletons$BasicTextField2Kt_instance == null)
      new ComposableSingletons$BasicTextField2Kt();
    return ComposableSingletons$BasicTextField2Kt_instance;
  }
  function sam$androidx_compose_foundation_text2_TextFieldDecorator$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_foundation_text2_TextFieldDecorator$0).Decoration_9c4a05_k$ = function (innerTextField, $composer, $changed) {
    return this.function_1(innerTextField, $composer, $changed);
  };
  var properties_initialized_BasicTextField2_kt_pvmyar;
  function _init_properties_BasicTextField2_kt__s8wlwf() {
    if (!properties_initialized_BasicTextField2_kt_pvmyar) {
      properties_initialized_BasicTextField2_kt_pvmyar = true;
      var tmp = ComposableSingletons$BasicTextField2Kt_getInstance().lambda_1_r8sbbp_1;
      DefaultTextFieldDecorator = new sam$androidx_compose_foundation_text2_TextFieldDecorator$0(tmp);
    }
  }
  function TextFieldDecorator() {
  }
  function get_cursorAnimationSpec_0() {
    _init_properties_TextFieldCoreModifier_kt__xslus1();
    return cursorAnimationSpec_0;
  }
  var cursorAnimationSpec_0;
  function get_DefaultCursorThickness() {
    _init_properties_TextFieldCoreModifier_kt__xslus1();
    return DefaultCursorThickness;
  }
  var DefaultCursorThickness;
  function cursorAnimationSpec$lambda_0($this$keyframes) {
    _init_properties_TextFieldCoreModifier_kt__xslus1();
    $this$keyframes.set_durationMillis_11l8vl_k$(1000);
    $this$keyframes.at_1dnb16_k$(1.0, 0);
    $this$keyframes.at_1dnb16_k$(1.0, 499);
    $this$keyframes.at_1dnb16_k$(0.0, 500);
    $this$keyframes.at_1dnb16_k$(0.0, 999);
    return Unit_getInstance();
  }
  var properties_initialized_TextFieldCoreModifier_kt_u73sh9;
  function _init_properties_TextFieldCoreModifier_kt__xslus1() {
    if (!properties_initialized_TextFieldCoreModifier_kt_u73sh9) {
      properties_initialized_TextFieldCoreModifier_kt_u73sh9 = true;
      cursorAnimationSpec_0 = infiniteRepeatable(keyframes(cursorAnimationSpec$lambda_0));
      // Inline function 'androidx.compose.ui.unit.dp' call
      DefaultCursorThickness = _Dp___init__impl__ms3zkb(2);
    }
  }
  function PlatformOptimizedCancellationException(message) {
    message = message === VOID ? null : message;
    CancellationException_init_$Init$_0(message, this);
    captureStack(this, PlatformOptimizedCancellationException);
  }
  function get_TapIndicationDelay() {
    return TapIndicationDelay;
  }
  var TapIndicationDelay;
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
    return '@androidx.compose.foundation.internal.NoOp()';
  };
  function get_SPACE_KEY_CODE() {
    _init_properties_Toggleable_jsNative_kt__wo698u();
    return SPACE_KEY_CODE;
  }
  var SPACE_KEY_CODE;
  var properties_initialized_Toggleable_jsNative_kt_qr95c;
  function _init_properties_Toggleable_jsNative_kt__wo698u() {
    if (!properties_initialized_Toggleable_jsNative_kt_qr95c) {
      properties_initialized_Toggleable_jsNative_kt_qr95c = true;
      SPACE_KEY_CODE = toLong(SkikoKey_KEY_SPACE_getInstance().get_platformKeyCode_k11s6o_k$());
    }
  }
  function MappedKeys() {
    MappedKeys_instance = this;
    this.A_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_27().get_A_3qd7s8_k$()));
    this.C_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_27().get_C_qsbemu_k$()));
    this.H_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_27().get_H_w1wwpd_k$()));
    this.V_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_27().get_V_wld3pf_k$()));
    this.X_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_27().get_X_7x2bun_k$()));
    this.Y_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_27().get_Y_7c9zcw_k$()));
    this.Z_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_27().get_Z_mlmakf_k$()));
    this.Backslash_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_27().get_Backslash_txp56r_k$()));
    this.DirectionLeft_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_27().get_DirectionLeft_f5x0wj_k$()));
    this.DirectionRight_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_27().get_DirectionRight_91pt3q_k$()));
    this.DirectionUp_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_27().get_DirectionUp_jror7j_k$()));
    this.DirectionDown_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_27().get_DirectionDown_8ppfns_k$()));
    this.PageUp_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_27().get_PageUp_4s7j3x_k$()));
    this.PageDown_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_27().get_PageDown_9hcgxi_k$()));
    this.MoveHome_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_27().get_MoveHome_fdukcp_k$()));
    this.MoveEnd_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_27().get_MoveEnd_3fdenj_k$()));
    this.Insert_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_27().get_Insert_sd5o5q_k$()));
    this.Enter_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_27().get_Enter_fkbexr_k$()));
    this.NumPadEnter_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_27().get_NumPadEnter_viczta_k$()));
    this.Backspace_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_27().get_Backspace_7jmd2y_k$()));
    this.Delete_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_27().get_Delete_uvctes_k$()));
    this.Paste_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_27().get_Paste_30cf6i_k$()));
    this.Cut_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_27().get_Cut_hvwmq1_k$()));
    this.Tab_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_27().get_Tab_os2g9w_k$()));
    this.Copy_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_27().get_Copy_9iqqvm_k$()));
  }
  protoOf(MappedKeys).get_A_3qd7s8_k$ = function () {
    return this.A_1;
  };
  protoOf(MappedKeys).get_C_qsbemu_k$ = function () {
    return this.C_1;
  };
  protoOf(MappedKeys).get_H_w1wwpd_k$ = function () {
    return this.H_1;
  };
  protoOf(MappedKeys).get_V_wld3pf_k$ = function () {
    return this.V_1;
  };
  protoOf(MappedKeys).get_X_7x2bun_k$ = function () {
    return this.X_1;
  };
  protoOf(MappedKeys).get_Y_7c9zcw_k$ = function () {
    return this.Y_1;
  };
  protoOf(MappedKeys).get_Z_mlmakf_k$ = function () {
    return this.Z_1;
  };
  protoOf(MappedKeys).get_Backslash_txp56r_k$ = function () {
    return this.Backslash_1;
  };
  protoOf(MappedKeys).get_DirectionLeft_f5x0wj_k$ = function () {
    return this.DirectionLeft_1;
  };
  protoOf(MappedKeys).get_DirectionRight_91pt3q_k$ = function () {
    return this.DirectionRight_1;
  };
  protoOf(MappedKeys).get_DirectionUp_jror7j_k$ = function () {
    return this.DirectionUp_1;
  };
  protoOf(MappedKeys).get_DirectionDown_8ppfns_k$ = function () {
    return this.DirectionDown_1;
  };
  protoOf(MappedKeys).get_PageUp_4s7j3x_k$ = function () {
    return this.PageUp_1;
  };
  protoOf(MappedKeys).get_PageDown_9hcgxi_k$ = function () {
    return this.PageDown_1;
  };
  protoOf(MappedKeys).get_MoveHome_fdukcp_k$ = function () {
    return this.MoveHome_1;
  };
  protoOf(MappedKeys).get_MoveEnd_3fdenj_k$ = function () {
    return this.MoveEnd_1;
  };
  protoOf(MappedKeys).get_Insert_sd5o5q_k$ = function () {
    return this.Insert_1;
  };
  protoOf(MappedKeys).get_Enter_fkbexr_k$ = function () {
    return this.Enter_1;
  };
  protoOf(MappedKeys).get_NumPadEnter_viczta_k$ = function () {
    return this.NumPadEnter_1;
  };
  protoOf(MappedKeys).get_Backspace_7jmd2y_k$ = function () {
    return this.Backspace_1;
  };
  protoOf(MappedKeys).get_Delete_uvctes_k$ = function () {
    return this.Delete_1;
  };
  protoOf(MappedKeys).get_Paste_30cf6i_k$ = function () {
    return this.Paste_1;
  };
  protoOf(MappedKeys).get_Cut_hvwmq1_k$ = function () {
    return this.Cut_1;
  };
  protoOf(MappedKeys).get_Tab_os2g9w_k$ = function () {
    return this.Tab_1;
  };
  protoOf(MappedKeys).get_Copy_9iqqvm_k$ = function () {
    return this.Copy_1;
  };
  var MappedKeys_instance;
  function MappedKeys_getInstance() {
    if (MappedKeys_instance == null)
      new MappedKeys();
    return MappedKeys_instance;
  }
  function get_Space(_this__u8e3s4) {
    return _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_27().get_Spacebar_eowipy_k$()));
  }
  function get_F(_this__u8e3s4) {
    return _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_27().get_F_1j8aab_k$()));
  }
  function get_B(_this__u8e3s4) {
    return _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_27().get_B_biz3fb_k$()));
  }
  function get_P(_this__u8e3s4) {
    return _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_27().get_P_c2fafd_k$()));
  }
  function get_N(_this__u8e3s4) {
    return _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_27().get_N_ig9bzp_k$()));
  }
  function get_E(_this__u8e3s4) {
    return _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_27().get_E_dq40x8_k$()));
  }
  function get_D(_this__u8e3s4) {
    return _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_27().get_D_szgc4r_k$()));
  }
  function get_K(_this__u8e3s4) {
    return _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_27().get_K_6stscu_k$()));
  }
  function get_O(_this__u8e3s4) {
    return _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_27().get_O_36x0s6_k$()));
  }
  function getDefaultLazyLayoutKey(index) {
    return new DefaultLazyKey(index);
  }
  function _get_index__g2optt($this) {
    return $this.index_1;
  }
  function component1_3($this) {
    return $this.index_1;
  }
  function DefaultLazyKey(index) {
    this.index_1 = index;
  }
  protoOf(DefaultLazyKey).copy_ns6qmb_k$ = function (index) {
    return new DefaultLazyKey(index);
  };
  protoOf(DefaultLazyKey).copy$default_js12pj_k$ = function (index, $super) {
    index = index === VOID ? this.index_1 : index;
    return $super === VOID ? this.copy_ns6qmb_k$(index) : $super.copy_ns6qmb_k$.call(this, index);
  };
  protoOf(DefaultLazyKey).toString = function () {
    return 'DefaultLazyKey(index=' + this.index_1 + ')';
  };
  protoOf(DefaultLazyKey).hashCode = function () {
    return this.index_1;
  };
  protoOf(DefaultLazyKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DefaultLazyKey))
      return false;
    var tmp0_other_with_cast = other instanceof DefaultLazyKey ? other : THROW_CCE();
    if (!(this.index_1 === tmp0_other_with_cast.index_1))
      return false;
    return true;
  };
  function get_platformDefaultKeyMapping() {
    _init_properties_KeyMapping_jsMain_kt__uqr90x();
    return platformDefaultKeyMapping;
  }
  var platformDefaultKeyMapping;
  function createPlatformDefaultKeyMapping(platform) {
    _init_properties_KeyMapping_jsMain_kt__uqr90x();
    return platform.get_ordinal_ip24qg_k$() === 3 ? createMacosDefaultKeyMapping() : get_defaultKeyMapping();
  }
  var properties_initialized_KeyMapping_jsMain_kt_bmmgcx;
  function _init_properties_KeyMapping_jsMain_kt__uqr90x() {
    if (!properties_initialized_KeyMapping_jsMain_kt_bmmgcx) {
      properties_initialized_KeyMapping_jsMain_kt_bmmgcx = true;
      platformDefaultKeyMapping = createPlatformDefaultKeyMapping(get_hostOs());
    }
  }
  function get_DefaultCursorThickness_0() {
    _init_properties_TextFieldCursor_js_kt__21fcek();
    return DefaultCursorThickness_0;
  }
  var DefaultCursorThickness_0;
  var properties_initialized_TextFieldCursor_js_kt_4q87vu;
  function _init_properties_TextFieldCursor_js_kt__21fcek() {
    if (!properties_initialized_TextFieldCursor_js_kt_4q87vu) {
      properties_initialized_TextFieldCursor_js_kt_4q87vu = true;
      // Inline function 'androidx.compose.ui.unit.dp' call
      DefaultCursorThickness_0 = _Dp___init__impl__ms3zkb(1);
    }
  }
  function get_isInTouchMode() {
    return isInTouchMode;
  }
  var isInTouchMode;
  function makeSelectionModifier(_this__u8e3s4, selectableId, layoutCoordinates) {
    return makeDefaultSelectionModifier(_this__u8e3s4, selectableId, layoutCoordinates);
  }
  function get_DefaultSelectionColor() {
    _init_properties_DefaultTextSelectionColors_js_kt__ohmec7();
    return DefaultSelectionColor;
  }
  var DefaultSelectionColor;
  function get_DefaultTextSelectionColors() {
    _init_properties_DefaultTextSelectionColors_js_kt__ohmec7();
    return DefaultTextSelectionColors;
  }
  var DefaultTextSelectionColors;
  var properties_initialized_DefaultTextSelectionColors_js_kt_i7z293;
  function _init_properties_DefaultTextSelectionColors_js_kt__ohmec7() {
    if (!properties_initialized_DefaultTextSelectionColors_js_kt_i7z293) {
      properties_initialized_DefaultTextSelectionColors_js_kt_i7z293 = true;
      DefaultSelectionColor = Color_0(new Long(-12417292, 0));
      DefaultTextSelectionColors = new TextSelectionColors(get_DefaultSelectionColor(), Color__copy$default_impl_ectz3s(get_DefaultSelectionColor(), 0.4));
    }
  }
  function get_mainScope() {
    _init_properties_Actuals_jsWasm_kt__g9jr6e();
    return mainScope;
  }
  var mainScope;
  var properties_initialized_Actuals_jsWasm_kt_rhb8zc;
  function _init_properties_Actuals_jsWasm_kt__g9jr6e() {
    if (!properties_initialized_Actuals_jsWasm_kt_rhb8zc) {
      properties_initialized_Actuals_jsWasm_kt_rhb8zc = true;
      mainScope = MainScope();
    }
  }
  function _get_delegate__idh0py_1($this) {
    return $this.delegate_1;
  }
  function AtomicReference(value) {
    this.delegate_1 = value;
  }
  protoOf(AtomicReference).get_26vq_k$ = function () {
    // Inline function 'kotlinx.atomicfu.atomicfu_getValue' call
    return this.delegate_1;
  };
  protoOf(AtomicReference).set_inogor_k$ = function (value) {
    // Inline function 'kotlinx.atomicfu.atomicfu_setValue' call
    // Inline function 'androidx.compose.foundation.AtomicReference.set.<set-delegate>' call
    this.delegate_1 = value;
  };
  protoOf(AtomicReference).getAndSet_6mmyt0_k$ = function (value) {
    // Inline function 'kotlinx.atomicfu.atomicfu_getAndSet' call
    var oldValue = this.delegate_1;
    // Inline function 'androidx.compose.foundation.AtomicReference.getAndSet.<set-delegate>' call
    this.delegate_1 = value;
    return oldValue;
  };
  protoOf(AtomicReference).compareAndSet_10iwom_k$ = function (expect, newValue) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.atomicfu.atomicfu_compareAndSet' call
      if (equals(this.delegate_1, expect)) {
        // Inline function 'androidx.compose.foundation.AtomicReference.compareAndSet.<set-delegate>' call
        this.delegate_1 = newValue;
        tmp$ret$0 = true;
        break $l$block_0;
      } else {
        tmp$ret$0 = false;
        break $l$block_0;
      }
    }
    return tmp$ret$0;
  };
  function _isSystemInDarkTheme($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1974537350, 'C(_isSystemInDarkTheme)49@2205L7:DarkTheme.skiko.kt#71ulvw');
    if (isTraceInProgress()) {
      traceEventStart(1974537350, $changed, -1, 'androidx.compose.foundation._isSystemInDarkTheme (DarkTheme.skiko.kt:48)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalSystemTheme();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_ebzcrh_k$(this_0);
    sourceInformationMarkerEnd($composer_1);
    var tmp0_0 = tmp0.equals(SystemTheme_Dark_getInstance());
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0_0;
  }
  function get_LocalScrollbarStyle() {
    _init_properties_Scrollbar_skiko_kt__fccvqz();
    return LocalScrollbarStyle;
  }
  var LocalScrollbarStyle;
  function ScrollbarStyle(minimalHeight, thickness, shape, hoverDurationMillis, unhoverColor, hoverColor) {
    this.minimalHeight_1 = minimalHeight;
    this.thickness_1 = thickness;
    this.shape_1 = shape;
    this.hoverDurationMillis_1 = hoverDurationMillis;
    this.unhoverColor_1 = unhoverColor;
    this.hoverColor_1 = hoverColor;
  }
  protoOf(ScrollbarStyle).get_minimalHeight_o8w690_k$ = function () {
    return this.minimalHeight_1;
  };
  protoOf(ScrollbarStyle).get_thickness_sesk48_k$ = function () {
    return this.thickness_1;
  };
  protoOf(ScrollbarStyle).get_shape_iyi9a0_k$ = function () {
    return this.shape_1;
  };
  protoOf(ScrollbarStyle).get_hoverDurationMillis_fsut4d_k$ = function () {
    return this.hoverDurationMillis_1;
  };
  protoOf(ScrollbarStyle).get_unhoverColor_8wq5s_k$ = function () {
    return this.unhoverColor_1;
  };
  protoOf(ScrollbarStyle).get_hoverColor_vpga53_k$ = function () {
    return this.hoverColor_1;
  };
  protoOf(ScrollbarStyle).component1_k79ve9_k$ = function () {
    return this.minimalHeight_1;
  };
  protoOf(ScrollbarStyle).component2_fwtwi6_k$ = function () {
    return this.thickness_1;
  };
  protoOf(ScrollbarStyle).component3_7eebsa_k$ = function () {
    return this.shape_1;
  };
  protoOf(ScrollbarStyle).component4_7eebs9_k$ = function () {
    return this.hoverDurationMillis_1;
  };
  protoOf(ScrollbarStyle).component5_g226ld_k$ = function () {
    return this.unhoverColor_1;
  };
  protoOf(ScrollbarStyle).component6_usv51c_k$ = function () {
    return this.hoverColor_1;
  };
  protoOf(ScrollbarStyle).copy_9nvs32_k$ = function (minimalHeight, thickness, shape, hoverDurationMillis, unhoverColor, hoverColor) {
    return new ScrollbarStyle(minimalHeight, thickness, shape, hoverDurationMillis, unhoverColor, hoverColor);
  };
  protoOf(ScrollbarStyle).copy$default_u87tpu_k$ = function (minimalHeight, thickness, shape, hoverDurationMillis, unhoverColor, hoverColor, $super) {
    minimalHeight = minimalHeight === VOID ? this.minimalHeight_1 : minimalHeight;
    thickness = thickness === VOID ? this.thickness_1 : thickness;
    shape = shape === VOID ? this.shape_1 : shape;
    hoverDurationMillis = hoverDurationMillis === VOID ? this.hoverDurationMillis_1 : hoverDurationMillis;
    unhoverColor = unhoverColor === VOID ? this.unhoverColor_1 : unhoverColor;
    hoverColor = hoverColor === VOID ? this.hoverColor_1 : hoverColor;
    return $super === VOID ? this.copy_9nvs32_k$(minimalHeight, thickness, shape, hoverDurationMillis, unhoverColor, hoverColor) : $super.copy_9nvs32_k$.call(this, new Dp(minimalHeight), new Dp(thickness), shape, hoverDurationMillis, new Color(unhoverColor), new Color(hoverColor));
  };
  protoOf(ScrollbarStyle).toString = function () {
    return 'ScrollbarStyle(minimalHeight=' + new Dp(this.minimalHeight_1) + ', thickness=' + new Dp(this.thickness_1) + ', shape=' + this.shape_1 + ', hoverDurationMillis=' + this.hoverDurationMillis_1 + ', unhoverColor=' + new Color(this.unhoverColor_1) + ', hoverColor=' + new Color(this.hoverColor_1) + ')';
  };
  protoOf(ScrollbarStyle).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.minimalHeight_1);
    result = imul(result, 31) + Dp__hashCode_impl_sxkrra(this.thickness_1) | 0;
    result = imul(result, 31) + hashCode(this.shape_1) | 0;
    result = imul(result, 31) + this.hoverDurationMillis_1 | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.unhoverColor_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.hoverColor_1) | 0;
    return result;
  };
  protoOf(ScrollbarStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ScrollbarStyle))
      return false;
    var tmp0_other_with_cast = other instanceof ScrollbarStyle ? other : THROW_CCE();
    if (!equals(this.minimalHeight_1, tmp0_other_with_cast.minimalHeight_1))
      return false;
    if (!equals(this.thickness_1, tmp0_other_with_cast.thickness_1))
      return false;
    if (!equals(this.shape_1, tmp0_other_with_cast.shape_1))
      return false;
    if (!(this.hoverDurationMillis_1 === tmp0_other_with_cast.hoverDurationMillis_1))
      return false;
    if (!equals(this.unhoverColor_1, tmp0_other_with_cast.unhoverColor_1))
      return false;
    if (!equals(this.hoverColor_1, tmp0_other_with_cast.hoverColor_1))
      return false;
    return true;
  };
  function defaultScrollbarStyle() {
    _init_properties_Scrollbar_skiko_kt__fccvqz();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp = _Dp___init__impl__ms3zkb(16);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_0 = _Dp___init__impl__ms3zkb(8);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$2 = _Dp___init__impl__ms3zkb(4);
    return new ScrollbarStyle(tmp, tmp_0, RoundedCornerShape_2(tmp$ret$2), 300, Color__copy$default_impl_ectz3s(Companion_getInstance().get_Black_t4k9fh_k$(), 0.12), Color__copy$default_impl_ectz3s(Companion_getInstance().get_Black_t4k9fh_k$(), 0.5));
  }
  function LocalScrollbarStyle$lambda() {
    _init_properties_Scrollbar_skiko_kt__fccvqz();
    return defaultScrollbarStyle();
  }
  var properties_initialized_Scrollbar_skiko_kt_aq3a4d;
  function _init_properties_Scrollbar_skiko_kt__fccvqz() {
    if (!properties_initialized_Scrollbar_skiko_kt_aq3a4d) {
      properties_initialized_Scrollbar_skiko_kt_aq3a4d = true;
      LocalScrollbarStyle = staticCompositionLocalOf(LocalScrollbarStyle$lambda);
    }
  }
  function textPointerHoverIcon(_this__u8e3s4, selectionRegistrar) {
    return selectionRegistrar == null ? _this__u8e3s4 : pointerHoverIcon(_this__u8e3s4, get_textPointerIcon());
  }
  function createMacosDefaultKeyMapping() {
    var common = commonKeyMapping(isMetaPressed$factory());
    return new createMacosDefaultKeyMapping$1(common);
  }
  function createMacosDefaultKeyMapping$1($common) {
    this.$common_1 = $common;
  }
  protoOf(createMacosDefaultKeyMapping$1).map_6s0yk8_k$ = function (event) {
    var tmp;
    if (get_isMetaPressed(event) ? get_isCtrlPressed(event) : false) {
      var tmp0_subject = get_key_0(event);
      tmp = equals(tmp0_subject, get_Space(MappedKeys_getInstance())) ? KeyCommand_CHARACTER_PALETTE_getInstance() : null;
    } else if (get_isShiftPressed(event) ? get_isAltPressed(event) : false) {
      var tmp1_subject = get_key_0(event);
      tmp = equals(tmp1_subject, MappedKeys_getInstance().get_DirectionLeft_f5x0wj_k$()) ? KeyCommand_SELECT_LEFT_WORD_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().get_DirectionRight_91pt3q_k$()) ? KeyCommand_SELECT_RIGHT_WORD_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().get_DirectionUp_jror7j_k$()) ? KeyCommand_SELECT_PREV_PARAGRAPH_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().get_DirectionDown_8ppfns_k$()) ? KeyCommand_SELECT_NEXT_PARAGRAPH_getInstance() : null;
    } else if (get_isShiftPressed(event) ? get_isMetaPressed(event) : false) {
      var tmp2_subject = get_key_0(event);
      tmp = equals(tmp2_subject, MappedKeys_getInstance().get_DirectionLeft_f5x0wj_k$()) ? KeyCommand_SELECT_LINE_LEFT_getInstance() : equals(tmp2_subject, MappedKeys_getInstance().get_DirectionRight_91pt3q_k$()) ? KeyCommand_SELECT_LINE_RIGHT_getInstance() : equals(tmp2_subject, MappedKeys_getInstance().get_DirectionUp_jror7j_k$()) ? KeyCommand_SELECT_HOME_getInstance() : equals(tmp2_subject, MappedKeys_getInstance().get_DirectionDown_8ppfns_k$()) ? KeyCommand_SELECT_END_getInstance() : null;
    } else if (get_isMetaPressed(event)) {
      var tmp3_subject = get_key_0(event);
      tmp = equals(tmp3_subject, MappedKeys_getInstance().get_DirectionLeft_f5x0wj_k$()) ? KeyCommand_LINE_LEFT_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().get_DirectionRight_91pt3q_k$()) ? KeyCommand_LINE_RIGHT_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().get_DirectionUp_jror7j_k$()) ? KeyCommand_HOME_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().get_DirectionDown_8ppfns_k$()) ? KeyCommand_END_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().get_Backspace_7jmd2y_k$()) ? KeyCommand_DELETE_FROM_LINE_START_getInstance() : null;
    } else if ((get_isCtrlPressed(event) ? get_isShiftPressed(event) : false) ? get_isAltPressed(event) : false) {
      var tmp4_subject = get_key_0(event);
      tmp = equals(tmp4_subject, get_F(MappedKeys_getInstance())) ? KeyCommand_SELECT_RIGHT_WORD_getInstance() : equals(tmp4_subject, get_B(MappedKeys_getInstance())) ? KeyCommand_SELECT_LEFT_WORD_getInstance() : null;
    } else if (get_isCtrlPressed(event) ? get_isAltPressed(event) : false) {
      var tmp5_subject = get_key_0(event);
      tmp = equals(tmp5_subject, get_F(MappedKeys_getInstance())) ? KeyCommand_RIGHT_WORD_getInstance() : equals(tmp5_subject, get_B(MappedKeys_getInstance())) ? KeyCommand_LEFT_WORD_getInstance() : null;
    } else if (get_isCtrlPressed(event) ? get_isShiftPressed(event) : false) {
      var tmp6_subject = get_key_0(event);
      tmp = equals(tmp6_subject, get_F(MappedKeys_getInstance())) ? KeyCommand_SELECT_RIGHT_CHAR_getInstance() : equals(tmp6_subject, get_B(MappedKeys_getInstance())) ? KeyCommand_SELECT_LEFT_CHAR_getInstance() : equals(tmp6_subject, get_P(MappedKeys_getInstance())) ? KeyCommand_SELECT_UP_getInstance() : equals(tmp6_subject, get_N(MappedKeys_getInstance())) ? KeyCommand_SELECT_DOWN_getInstance() : equals(tmp6_subject, MappedKeys_getInstance().get_A_3qd7s8_k$()) ? KeyCommand_SELECT_LINE_START_getInstance() : equals(tmp6_subject, get_E(MappedKeys_getInstance())) ? KeyCommand_SELECT_LINE_END_getInstance() : null;
    } else if (get_isCtrlPressed(event)) {
      var tmp7_subject = get_key_0(event);
      tmp = equals(tmp7_subject, get_F(MappedKeys_getInstance())) ? KeyCommand_LEFT_CHAR_getInstance() : equals(tmp7_subject, get_B(MappedKeys_getInstance())) ? KeyCommand_RIGHT_CHAR_getInstance() : equals(tmp7_subject, get_P(MappedKeys_getInstance())) ? KeyCommand_UP_getInstance() : equals(tmp7_subject, get_N(MappedKeys_getInstance())) ? KeyCommand_DOWN_getInstance() : equals(tmp7_subject, MappedKeys_getInstance().get_A_3qd7s8_k$()) ? KeyCommand_LINE_START_getInstance() : equals(tmp7_subject, get_E(MappedKeys_getInstance())) ? KeyCommand_LINE_END_getInstance() : equals(tmp7_subject, MappedKeys_getInstance().get_H_w1wwpd_k$()) ? KeyCommand_DELETE_PREV_CHAR_getInstance() : equals(tmp7_subject, get_D(MappedKeys_getInstance())) ? KeyCommand_DELETE_NEXT_CHAR_getInstance() : equals(tmp7_subject, get_K(MappedKeys_getInstance())) ? KeyCommand_DELETE_TO_LINE_END_getInstance() : equals(tmp7_subject, get_O(MappedKeys_getInstance())) ? KeyCommand_NEW_LINE_getInstance() : null;
    } else if (get_isShiftPressed(event)) {
      var tmp8_subject = get_key_0(event);
      tmp = equals(tmp8_subject, MappedKeys_getInstance().get_MoveHome_fdukcp_k$()) ? KeyCommand_SELECT_HOME_getInstance() : equals(tmp8_subject, MappedKeys_getInstance().get_MoveEnd_3fdenj_k$()) ? KeyCommand_SELECT_END_getInstance() : null;
    } else if (get_isAltPressed(event)) {
      var tmp9_subject = get_key_0(event);
      tmp = equals(tmp9_subject, MappedKeys_getInstance().get_DirectionLeft_f5x0wj_k$()) ? KeyCommand_LEFT_WORD_getInstance() : equals(tmp9_subject, MappedKeys_getInstance().get_DirectionRight_91pt3q_k$()) ? KeyCommand_RIGHT_WORD_getInstance() : equals(tmp9_subject, MappedKeys_getInstance().get_DirectionUp_jror7j_k$()) ? KeyCommand_PREV_PARAGRAPH_getInstance() : equals(tmp9_subject, MappedKeys_getInstance().get_DirectionDown_8ppfns_k$()) ? KeyCommand_NEXT_PARAGRAPH_getInstance() : equals(tmp9_subject, MappedKeys_getInstance().get_Delete_uvctes_k$()) ? KeyCommand_DELETE_NEXT_WORD_getInstance() : equals(tmp9_subject, MappedKeys_getInstance().get_Backspace_7jmd2y_k$()) ? KeyCommand_DELETE_PREV_WORD_getInstance() : null;
    } else {
      tmp = null;
    }
    var tmp10_elvis_lhs = tmp;
    return tmp10_elvis_lhs == null ? this.$common_1.map_6s0yk8_k$(event) : tmp10_elvis_lhs;
  };
  function isMetaPressed$factory() {
    return getPropertyCallableRef('isMetaPressed', 1, KProperty1, function (receiver) {
      return get_isMetaPressed(receiver.nativeKeyEvent_1);
    }, null);
  }
  function findFollowingBreak(_this__u8e3s4, index) {
    var it = Companion_getInstance_28().makeCharacterInstance$default_7rwuey_k$();
    it.setText_1jlejc_k$(_this__u8e3s4);
    return it.following_j6g4t5_k$(index);
  }
  function findPrecedingBreak(_this__u8e3s4, index) {
    var it = Companion_getInstance_28().makeCharacterInstance$default_7rwuey_k$();
    it.setText_1jlejc_k$(_this__u8e3s4);
    return it.preceding_v1dyyd_k$(index);
  }
  function get_textPointerIcon() {
    _init_properties_TextPointerIcon_skiko_kt__4sfdky();
    return textPointerIcon;
  }
  var textPointerIcon;
  var properties_initialized_TextPointerIcon_skiko_kt_3qxo0w;
  function _init_properties_TextPointerIcon_skiko_kt__4sfdky() {
    if (!properties_initialized_TextPointerIcon_skiko_kt_3qxo0w) {
      properties_initialized_TextPointerIcon_skiko_kt_3qxo0w = true;
      textPointerIcon = Companion_getInstance_29().get_Text_woag7q_k$();
    }
  }
  //region block: post-declaration
  protoOf(BackgroundNode).onMeasureResultChanged_ipbzyg_k$ = onMeasureResultChanged;
  protoOf(DefaultScrollMotionDurationScale$1).get_key_18j28a_k$ = get_key;
  protoOf(DefaultScrollMotionDurationScale$1).get_y2st91_k$ = get;
  protoOf(DefaultScrollMotionDurationScale$1).fold_j2vaxd_k$ = fold;
  protoOf(DefaultScrollMotionDurationScale$1).minusKey_9i5ggf_k$ = minusKey;
  protoOf(DefaultScrollMotionDurationScale$1).plus_s13ygv_k$ = plus;
  protoOf(UnityDensity$1).toPx_mycba2_k$ = toPx;
  protoOf(UnityDensity$1).toPx_plt68j_k$ = toPx_0;
  protoOf(UnityDensity$1).roundToPx_yb7vg8_k$ = roundToPx;
  protoOf(UnityDensity$1).roundToPx_cw9j9b_k$ = roundToPx_0;
  protoOf(UnityDensity$1).toDp_fjakf4_k$ = toDp;
  protoOf(UnityDensity$1).toDp_hs0w0_k$ = toDp_0;
  protoOf(UnityDensity$1).toDp_m8rr7q_k$ = toDp_1;
  protoOf(UnityDensity$1).toSp_97l7ws_k$ = toSp;
  protoOf(UnityDensity$1).toSp_fixg4_k$ = toSp_0;
  protoOf(UnityDensity$1).toSp_apeb1_k$ = toSp_1;
  protoOf(UnityDensity$1).toRect_ysncr2_k$ = toRect;
  protoOf(UnityDensity$1).toSize_7jb2uc_k$ = toSize_0;
  protoOf(UnityDensity$1).toDpSize_5hpeec_k$ = toDpSize;
  protoOf(DefaultScrollableState).scroll$default_wd6w3v_k$ = scroll$default;
  protoOf(DefaultScrollableState).get_canScrollForward_dmb0fj_k$ = get_canScrollForward;
  protoOf(DefaultScrollableState).get_canScrollBackward_v2t7h3_k$ = get_canScrollBackward;
  protoOf(LazyItemScopeImpl).fillParentMaxSize$default_itgwcx_k$ = fillParentMaxSize$default;
  protoOf(LazyItemScopeImpl).fillParentMaxWidth$default_xsnd48_k$ = fillParentMaxWidth$default;
  protoOf(LazyItemScopeImpl).fillParentMaxHeight$default_9dk3uf_k$ = fillParentMaxHeight$default;
  protoOf(LazyItemScopeImpl).animateItemPlacement$default_9ff5mx_k$ = animateItemPlacement$default;
  protoOf(ParentSizeNode).minIntrinsicWidth_nsvhwg_k$ = minIntrinsicWidth;
  protoOf(ParentSizeNode).minIntrinsicHeight_xt6ly1_k$ = minIntrinsicHeight;
  protoOf(ParentSizeNode).maxIntrinsicWidth_epsb1u_k$ = maxIntrinsicWidth;
  protoOf(ParentSizeNode).maxIntrinsicHeight_nrifyt_k$ = maxIntrinsicHeight;
  protoOf(LazyGridIntervalContent).item$default_ltd1p4_k$ = item$default;
  protoOf(LazyGridIntervalContent).items$default_xlmlgt_k$ = items$default;
  protoOf(AwaitFirstLayoutModifier).foldIn_h4qjtu_k$ = foldIn;
  protoOf(AwaitFirstLayoutModifier).foldOut_911h31_k$ = foldOut;
  protoOf(AwaitFirstLayoutModifier).any_6c0yej_k$ = any;
  protoOf(AwaitFirstLayoutModifier).all_xyjayo_k$ = all;
  protoOf(AwaitFirstLayoutModifier).then_g5qrxq_k$ = then;
  protoOf(MutableIntervalList).forEach$default_av4rcm_k$ = forEach$default;
  protoOf(LazyStaggeredGridScrollPosition).merge_q9rxor_k$ = merge;
  protoOf(LazyStaggeredGridState$remeasurementModifier$1).foldIn_h4qjtu_k$ = foldIn;
  protoOf(LazyStaggeredGridState$remeasurementModifier$1).foldOut_911h31_k$ = foldOut;
  protoOf(LazyStaggeredGridState$remeasurementModifier$1).any_6c0yej_k$ = any;
  protoOf(LazyStaggeredGridState$remeasurementModifier$1).all_xyjayo_k$ = all;
  protoOf(LazyStaggeredGridState$remeasurementModifier$1).then_g5qrxq_k$ = then;
  protoOf(LazyStaggeredGridState).scroll$default_wd6w3v_k$ = scroll$default;
  protoOf(UnitDensity$1).toPx_mycba2_k$ = toPx;
  protoOf(UnitDensity$1).toPx_plt68j_k$ = toPx_0;
  protoOf(UnitDensity$1).roundToPx_yb7vg8_k$ = roundToPx;
  protoOf(UnitDensity$1).roundToPx_cw9j9b_k$ = roundToPx_0;
  protoOf(UnitDensity$1).toDp_fjakf4_k$ = toDp;
  protoOf(UnitDensity$1).toDp_hs0w0_k$ = toDp_0;
  protoOf(UnitDensity$1).toDp_m8rr7q_k$ = toDp_1;
  protoOf(UnitDensity$1).toSp_97l7ws_k$ = toSp;
  protoOf(UnitDensity$1).toSp_fixg4_k$ = toSp_0;
  protoOf(UnitDensity$1).toSp_apeb1_k$ = toSp_1;
  protoOf(UnitDensity$1).toRect_ysncr2_k$ = toRect;
  protoOf(UnitDensity$1).toSize_7jb2uc_k$ = toSize_0;
  protoOf(UnitDensity$1).toDpSize_5hpeec_k$ = toDpSize;
  protoOf(PercentCornerSize).get_inspectableElements_mab2zo_k$ = get_inspectableElements;
  protoOf(PercentCornerSize).get_nameFallback_yn6bx2_k$ = get_nameFallback;
  protoOf(DpCornerSize).get_inspectableElements_mab2zo_k$ = get_inspectableElements;
  protoOf(DpCornerSize).get_nameFallback_yn6bx2_k$ = get_nameFallback;
  protoOf(ZeroCornerSize$1).get_inspectableElements_mab2zo_k$ = get_inspectableElements;
  protoOf(ZeroCornerSize$1).get_nameFallback_yn6bx2_k$ = get_nameFallback;
  protoOf(EmptyMeasurePolicy).minIntrinsicWidth_dwfcse_k$ = minIntrinsicWidth_0;
  protoOf(EmptyMeasurePolicy).minIntrinsicHeight_xlhgwn_k$ = minIntrinsicHeight_0;
  protoOf(EmptyMeasurePolicy).maxIntrinsicWidth_cx7ze4_k$ = maxIntrinsicWidth_0;
  protoOf(EmptyMeasurePolicy).maxIntrinsicHeight_3a4xm1_k$ = maxIntrinsicHeight_0;
  protoOf(SelectableTextAnnotatedStringNode).onMeasureResultChanged_ipbzyg_k$ = onMeasureResultChanged;
  protoOf(TextAnnotatedStringNode).onMeasureResultChanged_ipbzyg_k$ = onMeasureResultChanged;
  protoOf(TextAnnotatedStringNode).get_shouldClearDescendantSemantics_glb41r_k$ = get_shouldClearDescendantSemantics;
  protoOf(TextAnnotatedStringNode).get_shouldMergeDescendantSemantics_tbewdw_k$ = get_shouldMergeDescendantSemantics;
  protoOf(TextStringSimpleNode).onMeasureResultChanged_ipbzyg_k$ = onMeasureResultChanged;
  protoOf(TextStringSimpleNode).get_shouldClearDescendantSemantics_glb41r_k$ = get_shouldClearDescendantSemantics;
  protoOf(TextStringSimpleNode).get_shouldMergeDescendantSemantics_tbewdw_k$ = get_shouldMergeDescendantSemantics;
  //endregion
  //region block: init
  DefaultScrollMotionDurationScaleFactor = 1.0;
  Unset = -2147483648;
  Unset_0 = -2147483648;
  DEBUG = false;
  DebugLoggingEnabled = false;
  NearestItemsSlidingWindowSize = 90;
  NearestItemsExtraItemCount = 200;
  Unset_1 = -2147483648;
  MaxPageOffset = 0.5;
  MinPageOffset = -0.5;
  DefaultMinLines = 1;
  DefaultWidthCharCount = 10;
  SNAPSHOTS_INTERVAL_MILLIS = 5000;
  BigConstraintValue = 262143;
  TinyConstraintValue = 8191;
  SmallConstraintValue = 32767;
  MediumConstraintValue = 65535;
  DefaultWidthCharCount_0 = 10;
  UNASSIGNED_SLOT = -1;
  TapIndicationDelay = new Long(0, 0);
  isInTouchMode = false;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = collectIsFocusedAsState;
  _.$_$.b = get_CircleShape;
  _.$_$.c = CornerSize_1;
  _.$_$.d = RoundedCornerShape_2;
  _.$_$.e = RoundedCornerShape_3;
  _.$_$.f = get_LocalTextSelectionColors;
  _.$_$.g = BasicText;
  _.$_$.h = BorderStroke;
  _.$_$.i = background;
  _.$_$.j = border;
  _.$_$.k = isSystemInDarkTheme;
  //endregion
  return _;
}));
