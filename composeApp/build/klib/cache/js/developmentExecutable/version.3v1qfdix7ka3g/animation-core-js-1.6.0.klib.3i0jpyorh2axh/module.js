(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-runtime-runtime.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-compose-ui-ui-geometry.js', './compose-multiplatform-core-collection-collection.js', './compose-multiplatform-core-compose-ui-ui.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'), require('./compose-multiplatform-core-collection-collection.js'), require('./compose-multiplatform-core-compose-ui-ui.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof this['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof this['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof this['compose-multiplatform-core-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'compose-multiplatform-core-collection-collection' was not found. Please, check whether 'compose-multiplatform-core-collection-collection' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof this['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    root['compose-multiplatform-core-compose-animation-animation-core'] = factory(typeof this['compose-multiplatform-core-compose-animation-animation-core'] === 'undefined' ? {} : this['compose-multiplatform-core-compose-animation-animation-core'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-compose-runtime-runtime'], this['compose-multiplatform-core-compose-ui-ui-unit'], this['kotlinx-coroutines-core'], this['compose-multiplatform-core-compose-ui-ui-geometry'], this['compose-multiplatform-core-collection-collection'], this['compose-multiplatform-core-compose-ui-ui']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_collection_internal_collection, kotlin_org_jetbrains_compose_ui_ui) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_getInstance = kotlin_kotlin.$_$.u5;
  var equals = kotlin_kotlin.$_$.td;
  var VOID = kotlin_kotlin.$_$.g;
  var protoOf = kotlin_kotlin.$_$.bf;
  var objectCreate = kotlin_kotlin.$_$.ze;
  var coerceIn = kotlin_kotlin.$_$.yf;
  var CoroutineImpl = kotlin_kotlin.$_$.yc;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.jc;
  var CancellationException = kotlin_kotlin.$_$.ic;
  var classMeta = kotlin_kotlin.$_$.pd;
  var setMetadataFor = kotlin_kotlin.$_$.cf;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var THROW_CCE = kotlin_kotlin.$_$.vj;
  var toString = kotlin_kotlin.$_$.gf;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.h2;
  var KMutableProperty1 = kotlin_kotlin.$_$.hg;
  var getPropertyCallableRef = kotlin_kotlin.$_$.be;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.f5;
  var SuspendFunction0 = kotlin_kotlin.$_$.zc;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h3;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v1;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var rememberUpdatedState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o1;
  var Factory_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v;
  var Channel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var SideEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var KProperty0 = kotlin_kotlin.$_$.ig;
  var THROW_ISE = kotlin_kotlin.$_$.xj;
  var getLocalDelegateReference = kotlin_kotlin.$_$.yd;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v1;
  var isInterface = kotlin_kotlin.$_$.oe;
  var ChannelResult__getOrNull_impl_f5e07h = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n2;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.p1;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.n1;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.o1;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.g5;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k3;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m3;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a1;
  var SuspendFunction1 = kotlin_kotlin.$_$.ad;
  var Long = kotlin_kotlin.$_$.oj;
  var isNaN_0 = kotlin_kotlin.$_$.uk;
  var interfaceMeta = kotlin_kotlin.$_$.fe;
  var THROW_IAE = kotlin_kotlin.$_$.wj;
  var enumEntries = kotlin_kotlin.$_$.ed;
  var Enum = kotlin_kotlin.$_$.jj;
  var hashCode = kotlin_kotlin.$_$.de;
  var getNumberHashCode = kotlin_kotlin.$_$.zd;
  var roundToInt = kotlin_kotlin.$_$.lf;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.z;
  var get_BitmaskMsb = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.a;
  var toLong = kotlin_kotlin.$_$.ef;
  var abs = kotlin_kotlin.$_$.if;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.yk;
  var mutableIntObjectMapOf = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.i;
  var to = kotlin_kotlin.$_$.ll;
  var objectMeta = kotlin_kotlin.$_$.af;
  var State = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.b2;
  var get_PI = kotlin_kotlin.$_$.hf;
  var Annotation = kotlin_kotlin.$_$.bj;
  var coerceIn_0 = kotlin_kotlin.$_$.ag;
  var numberToLong = kotlin_kotlin.$_$.ye;
  var withFrameNanos = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var Key_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.i4;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var Key_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a1;
  var ensureNotNull = kotlin_kotlin.$_$.pk;
  var Mutex = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n1;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var captureStack = kotlin_kotlin.$_$.jd;
  var isFinite = kotlin_kotlin.$_$.rk;
  var isNaN_1 = kotlin_kotlin.$_$.vk;
  var DoubleCompanionObject_getInstance = kotlin_kotlin.$_$.e5;
  var floatFromBits = kotlin_kotlin.$_$.wd;
  var toRawBits = kotlin_kotlin.$_$.il;
  var Key_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.l4;
  var mutableLongStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var derivedStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var DisposableEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var DisposableEffectResult = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o;
  var KProperty1 = kotlin_kotlin.$_$.jg;
  var numberToInt = kotlin_kotlin.$_$.xe;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j2;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g2;
  var _DpOffset___get_x__impl__uauqb5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k2;
  var _DpOffset___get_y__impl__1h898y = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l2;
  var DpOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p;
  var DpOffset_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l1;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h1;
  var Size_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e1;
  var _Offset___get_y__impl__8bzhra = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f1;
  var Offset_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p2;
  var _IntOffset___get_y__impl__2avpwj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q2;
  var IntOffset_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t2;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s2;
  var IntSize_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z;
  var Rect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.fl;
  var until = kotlin_kotlin.$_$.eg;
  var Companion_getInstance_6 = kotlin_kotlin.$_$.o5;
  var getValue = kotlin_kotlin.$_$.m9;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.r7;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.o;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i3;
  var mapOf = kotlin_kotlin.$_$.ha;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.e1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Animatable$runAnimation$slambda, 'Animatable$runAnimation$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [0]);
  setMetadataFor(Animatable$snapTo$slambda, 'Animatable$snapTo$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [0]);
  setMetadataFor(Animatable$stop$slambda, 'Animatable$stop$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [0]);
  setMetadataFor(Animatable, 'Animatable', classMeta, VOID, VOID, VOID, VOID, VOID, [4, 3, 1, 0]);
  setMetadataFor(AnimationResult, 'AnimationResult', classMeta);
  setMetadataFor(animateValueAsState$slambda$slambda, 'animateValueAsState$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(animateValueAsState$slambda, 'animateValueAsState$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  function isFinishedFromNanos(playTimeNanos) {
    return playTimeNanos.compareTo_9jj042_k$(this.get_durationNanos_ub5cy_k$()) >= 0;
  }
  setMetadataFor(Animation, 'Animation', interfaceMeta);
  setMetadataFor(TargetBasedAnimation, 'TargetBasedAnimation', classMeta, VOID, [Animation]);
  setMetadataFor(DecayAnimation, 'DecayAnimation', classMeta, VOID, [Animation]);
  setMetadataFor(AnimationEndReason, 'AnimationEndReason', classMeta, Enum);
  setMetadataFor(AnimationSpec, 'AnimationSpec', interfaceMeta);
  setMetadataFor(FiniteAnimationSpec, 'FiniteAnimationSpec', interfaceMeta, VOID, [AnimationSpec]);
  setMetadataFor(SpringSpec, 'SpringSpec', classMeta, VOID, [FiniteAnimationSpec], SpringSpec);
  setMetadataFor(InfiniteRepeatableSpec, 'InfiniteRepeatableSpec', classMeta, VOID, [AnimationSpec]);
  setMetadataFor(KeyframesSpecBaseConfig, 'KeyframesSpecBaseConfig', classMeta);
  setMetadataFor(KeyframesSpecConfig, 'KeyframesSpecConfig', classMeta, KeyframesSpecBaseConfig, VOID, KeyframesSpecConfig);
  setMetadataFor(KeyframeBaseEntity, 'KeyframeBaseEntity', classMeta);
  setMetadataFor(KeyframeEntity, 'KeyframeEntity', classMeta, KeyframeBaseEntity);
  setMetadataFor(DurationBasedAnimationSpec, 'DurationBasedAnimationSpec', interfaceMeta, VOID, [FiniteAnimationSpec]);
  setMetadataFor(KeyframesSpec, 'KeyframesSpec', classMeta, VOID, [DurationBasedAnimationSpec]);
  setMetadataFor(TweenSpec, 'TweenSpec', classMeta, VOID, [DurationBasedAnimationSpec], TweenSpec);
  setMetadataFor(RepeatMode, 'RepeatMode', classMeta, Enum);
  setMetadataFor(StartOffset, 'StartOffset', classMeta);
  setMetadataFor(AnimationConstants, 'AnimationConstants', objectMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(StartOffsetType, 'StartOffsetType', classMeta);
  setMetadataFor(AnimationState, 'AnimationState', classMeta, VOID, [State]);
  setMetadataFor(AnimationScope, 'AnimationScope', classMeta);
  setMetadataFor(AnimationVector_3, 'AnimationVector', classMeta);
  setMetadataFor(AnimationVector1D, 'AnimationVector1D', classMeta, AnimationVector_3);
  setMetadataFor(AnimationVector2D, 'AnimationVector2D', classMeta, AnimationVector_3);
  setMetadataFor(AnimationVector3D, 'AnimationVector3D', classMeta, AnimationVector_3);
  setMetadataFor(AnimationVector4D, 'AnimationVector4D', classMeta, AnimationVector_3);
  setMetadataFor(ComplexDouble, 'ComplexDouble', classMeta);
  setMetadataFor(DecayAnimationSpec, 'DecayAnimationSpec', interfaceMeta);
  setMetadataFor(Easing, 'Easing', interfaceMeta);
  setMetadataFor(CubicBezierEasing, 'CubicBezierEasing', classMeta, VOID, [Easing]);
  setMetadataFor(sam$androidx_compose_animation_core_Easing$0, 'sam$androidx_compose_animation_core_Easing$0', classMeta, VOID, [Easing]);
  setMetadataFor(sam$androidx_compose_animation_core_Easing$0_0, 'sam$androidx_compose_animation_core_Easing$0', classMeta, VOID, [Easing]);
  setMetadataFor(sam$androidx_compose_animation_core_Easing$0_1, 'sam$androidx_compose_animation_core_Easing$0', classMeta, VOID, [Easing]);
  setMetadataFor(sam$androidx_compose_animation_core_Easing$0_2, 'sam$androidx_compose_animation_core_Easing$0', classMeta, VOID, [Easing]);
  setMetadataFor(sam$androidx_compose_animation_core_Easing$0_3, 'sam$androidx_compose_animation_core_Easing$0', classMeta, VOID, [Easing]);
  setMetadataFor(sam$androidx_compose_animation_core_Easing$0_4, 'sam$androidx_compose_animation_core_Easing$0', classMeta, VOID, [Easing]);
  setMetadataFor(sam$androidx_compose_animation_core_Easing$0_5, 'sam$androidx_compose_animation_core_Easing$0', classMeta, VOID, [Easing]);
  setMetadataFor(ExperimentalTransitionApi, 'ExperimentalTransitionApi', classMeta, VOID, [Annotation]);
  function getEndVelocity(initialValue, targetValue, initialVelocity) {
    return this.getVelocityFromNanos_d1b1ck_k$(this.getDurationNanos_taoclf_k$(initialValue, targetValue, initialVelocity), initialValue, targetValue, initialVelocity);
  }
  function vectorize(converter) {
    return VectorizedFloatAnimationSpec_init_$Create$(this);
  }
  function vectorize_0(converter) {
    return this.vectorize_7dxvko_k$(converter);
  }
  setMetadataFor(FloatAnimationSpec, 'FloatAnimationSpec', interfaceMeta, VOID, [AnimationSpec]);
  setMetadataFor(FloatSpringSpec, 'FloatSpringSpec', classMeta, VOID, [FloatAnimationSpec], FloatSpringSpec);
  setMetadataFor(FloatTweenSpec, 'FloatTweenSpec', classMeta, VOID, [FloatAnimationSpec], FloatTweenSpec);
  setMetadataFor(withInfiniteAnimationFrameNanos$slambda, 'withInfiniteAnimationFrameNanos$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [0]);
  setMetadataFor($withInfiniteAnimationFrameNanosCOROUTINE$0, '$withInfiniteAnimationFrameNanosCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(InternalAnimationApi, 'InternalAnimationApi', classMeta, VOID, [Annotation]);
  setMetadataFor(Mutator, 'Mutator', classMeta);
  setMetadataFor(MutatorMutex$mutate$slambda, 'MutatorMutex$mutate$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(MutatorMutex$mutateWith$slambda, 'MutatorMutex$mutateWith$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(MutatorMutex, 'MutatorMutex', classMeta, VOID, VOID, MutatorMutex, VOID, VOID, [2, 3]);
  setMetadataFor(MutatePriority, 'MutatePriority', classMeta, Enum);
  setMetadataFor(PlatformOptimizedCancellationException, 'PlatformOptimizedCancellationException', classMeta, CancellationException);
  setMetadataFor(MutationInterruptedException, 'MutationInterruptedException', classMeta, PlatformOptimizedCancellationException, VOID, MutationInterruptedException);
  setMetadataFor(SpringSimulation, 'SpringSimulation', classMeta);
  setMetadataFor(Motion, 'Motion', classMeta);
  setMetadataFor($animateCOROUTINE$1, '$animateCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor($callWithFrameNanosCOROUTINE$2, '$callWithFrameNanosCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor(DeferredAnimationData, 'DeferredAnimationData', classMeta, VOID, [State]);
  setMetadataFor(TransitionAnimationState, 'TransitionAnimationState', classMeta, VOID, [State]);
  function isTransitioningTo(_this__u8e3s4, targetState) {
    return equals(_this__u8e3s4, this.get_initialState_2eu9l6_k$()) ? equals(targetState, this.get_targetState_kri3mx_k$()) : false;
  }
  setMetadataFor(Segment, 'Segment', interfaceMeta);
  setMetadataFor(SegmentImpl, 'SegmentImpl', classMeta, VOID, [Segment]);
  setMetadataFor(DeferredAnimation, 'DeferredAnimation', classMeta);
  setMetadataFor(Transition$animateTo$slambda, 'Transition$animateTo$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(Transition, 'Transition', classMeta);
  setMetadataFor(TransitionState, 'TransitionState', classMeta);
  setMetadataFor(MutableTransitionState, 'MutableTransitionState', classMeta, TransitionState);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, VOID, [DisposableEffectResult]);
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta, VOID, [DisposableEffectResult]);
  setMetadataFor(TwoWayConverter, 'TwoWayConverter', interfaceMeta);
  setMetadataFor(TwoWayConverterImpl, 'TwoWayConverterImpl', classMeta, VOID, [TwoWayConverter]);
  setMetadataFor(Spring, 'Spring', objectMeta);
  function getEndVelocity_0(initialValue, targetValue, initialVelocity) {
    return this.getVelocityFromNanos_wafrjo_k$(this.getDurationNanos_c9o343_k$(initialValue, targetValue, initialVelocity), initialValue, targetValue, initialVelocity);
  }
  setMetadataFor(VectorizedAnimationSpec, 'VectorizedAnimationSpec', interfaceMeta);
  function get_isInfinite() {
    return false;
  }
  setMetadataFor(VectorizedFiniteAnimationSpec, 'VectorizedFiniteAnimationSpec', interfaceMeta, VOID, [VectorizedAnimationSpec]);
  setMetadataFor(VectorizedSpringSpec, 'VectorizedSpringSpec', classMeta, VOID, [VectorizedFiniteAnimationSpec], VectorizedSpringSpec_init_$Create$);
  setMetadataFor(Animations, 'Animations', interfaceMeta);
  setMetadataFor(VectorizedFloatAnimationSpec$1, VOID, classMeta, VOID, [Animations]);
  setMetadataFor(VectorizedFloatAnimationSpec, 'VectorizedFloatAnimationSpec', classMeta, VOID, [VectorizedFiniteAnimationSpec]);
  setMetadataFor(VectorizedInfiniteRepeatableSpec, 'VectorizedInfiniteRepeatableSpec', classMeta, VOID, [VectorizedAnimationSpec]);
  function getDurationNanos(initialValue, targetValue, initialVelocity) {
    return numberToLong(this.get_delayMillis_d968n4_k$() + this.get_durationMillis_pqx05f_k$() | 0).times_nfzjiw_k$(get_MillisToNanos());
  }
  setMetadataFor(VectorizedDurationBasedAnimationSpec, 'VectorizedDurationBasedAnimationSpec', interfaceMeta, VOID, [VectorizedFiniteAnimationSpec]);
  setMetadataFor(VectorizedKeyframesSpec, 'VectorizedKeyframesSpec', classMeta, VOID, [VectorizedDurationBasedAnimationSpec]);
  setMetadataFor(VectorizedTweenSpec, 'VectorizedTweenSpec', classMeta, VOID, [VectorizedDurationBasedAnimationSpec], VectorizedTweenSpec);
  setMetadataFor(createSpringAnimations$1, VOID, classMeta, VOID, [Animations]);
  setMetadataFor(createSpringAnimations$2, VOID, classMeta, VOID, [Animations]);
  setMetadataFor(VectorizedDecayAnimationSpec, 'VectorizedDecayAnimationSpec', interfaceMeta);
  setMetadataFor(AtomicReference, 'AtomicReference', classMeta);
  setMetadataFor(NoOp, 'NoOp', classMeta, VOID, [Annotation]);
  //endregion
  function get_positiveInfinityBounds1D() {
    _init_properties_Animatable_kt__f2hc5e();
    return positiveInfinityBounds1D;
  }
  var positiveInfinityBounds1D;
  function get_positiveInfinityBounds2D() {
    _init_properties_Animatable_kt__f2hc5e();
    return positiveInfinityBounds2D;
  }
  var positiveInfinityBounds2D;
  function get_positiveInfinityBounds3D() {
    _init_properties_Animatable_kt__f2hc5e();
    return positiveInfinityBounds3D;
  }
  var positiveInfinityBounds3D;
  function get_positiveInfinityBounds4D() {
    _init_properties_Animatable_kt__f2hc5e();
    return positiveInfinityBounds4D;
  }
  var positiveInfinityBounds4D;
  function get_negativeInfinityBounds1D() {
    _init_properties_Animatable_kt__f2hc5e();
    return negativeInfinityBounds1D;
  }
  var negativeInfinityBounds1D;
  function get_negativeInfinityBounds2D() {
    _init_properties_Animatable_kt__f2hc5e();
    return negativeInfinityBounds2D;
  }
  var negativeInfinityBounds2D;
  function get_negativeInfinityBounds3D() {
    _init_properties_Animatable_kt__f2hc5e();
    return negativeInfinityBounds3D;
  }
  var negativeInfinityBounds3D;
  function get_negativeInfinityBounds4D() {
    _init_properties_Animatable_kt__f2hc5e();
    return negativeInfinityBounds4D;
  }
  var negativeInfinityBounds4D;
  function Animatable$runAnimation$slambda$lambda(this$0, $endState, $block, $clampingNeeded) {
    return function ($this$animate) {
      updateState($this$animate, this$0.internalState_1);
      var clamped = clampToBounds(this$0, $this$animate.get_value_j01efc_k$());
      var tmp;
      if (!equals(clamped, $this$animate.get_value_j01efc_k$())) {
        this$0.internalState_1.set_value_v1vabv_k$(clamped);
        $endState.set_value_v1vabv_k$(clamped);
        var tmp0_safe_receiver = $block;
        if (tmp0_safe_receiver == null)
          null;
        else
          tmp0_safe_receiver(this$0);
        $this$animate.cancelAnimation_ic0k2u_k$();
        $clampingNeeded._v = true;
        tmp = Unit_getInstance();
      } else {
        var tmp1_safe_receiver = $block;
        if (tmp1_safe_receiver == null)
          null;
        else
          tmp1_safe_receiver(this$0);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function _get_visibilityThreshold__cvk72g($this) {
    return $this.visibilityThreshold_1;
  }
  function Animatable_init_$Init$(initialValue, typeConverter, visibilityThreshold, $this) {
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    Animatable.call($this, initialValue, typeConverter, visibilityThreshold, 'Animatable');
    return $this;
  }
  function Animatable_init_$Create$(initialValue, typeConverter, visibilityThreshold) {
    return Animatable_init_$Init$(initialValue, typeConverter, visibilityThreshold, objectCreate(protoOf(Animatable)));
  }
  function _set_isRunning__kpbg34($this, _set____db54di) {
    var this_0 = $this.isRunning$delegate_1;
    isRunning$factory();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _set_targetValue__aqsk0r($this, _set____db54di) {
    var this_0 = $this.targetValue$delegate_1;
    targetValue$factory();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _set_lowerBound__uvrjui($this, _set____db54di) {
    $this.lowerBound_1 = _set____db54di;
  }
  function _set_upperBound__ul6eat($this, _set____db54di) {
    $this.upperBound_1 = _set____db54di;
  }
  function _get_mutatorMutex__pkek4u($this) {
    return $this.mutatorMutex_1;
  }
  function _get_negativeInfinityBounds__4uptfr($this) {
    return $this.negativeInfinityBounds_1;
  }
  function _get_positiveInfinityBounds__srcx3f($this) {
    return $this.positiveInfinityBounds_1;
  }
  function _set_lowerBoundVector__diyl9z($this, _set____db54di) {
    $this.lowerBoundVector_1 = _set____db54di;
  }
  function _get_lowerBoundVector__sf17md($this) {
    return $this.lowerBoundVector_1;
  }
  function _set_upperBoundVector__vzmpnc($this, _set____db54di) {
    $this.upperBoundVector_1 = _set____db54di;
  }
  function _get_upperBoundVector__9yd390($this) {
    return $this.upperBoundVector_1;
  }
  function runAnimation($this, animation, initialVelocity, block, $completion) {
    var startTime = $this.internalState_1.get_lastFrameTimeNanos_3aprno_k$();
    return $this.mutatorMutex_1.mutate$default_f05kjn_k$(VOID, Animatable$runAnimation$slambda_0($this, initialVelocity, animation, startTime, block, null), $completion);
  }
  function clampToBounds($this, value) {
    if (equals($this.lowerBoundVector_1, $this.negativeInfinityBounds_1) ? equals($this.upperBoundVector_1, $this.positiveInfinityBounds_1) : false) {
      return value;
    }
    var valueVector = $this.typeConverter_1.get_convertToVector_s594l4_k$()(value);
    var clamped = false;
    var inductionVariable = 0;
    var last = valueVector.get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (valueVector.get_c1px32_k$(i) < $this.lowerBoundVector_1.get_c1px32_k$(i) ? true : valueVector.get_c1px32_k$(i) > $this.upperBoundVector_1.get_c1px32_k$(i)) {
          clamped = true;
          valueVector.set_4eugj6_k$(i, coerceIn(valueVector.get_c1px32_k$(i), $this.lowerBoundVector_1.get_c1px32_k$(i), $this.upperBoundVector_1.get_c1px32_k$(i)));
        }
      }
       while (inductionVariable < last);
    if (clamped) {
      return $this.typeConverter_1.get_convertFromVector_kmewon_k$()(valueVector);
    } else {
      return value;
    }
  }
  function endAnimation($this) {
    // Inline function 'kotlin.apply' call
    var this_0 = $this.internalState_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.animation.core.Animatable.endAnimation.<anonymous>' call
    this_0.get_velocityVector_v3jmo9_k$().reset_5u6xz3_k$();
    this_0.set_lastFrameTimeNanos_hfjxwm_k$(AnimationConstants_getInstance().get_UnspecifiedTime_gpclet_k$());
    _set_isRunning__kpbg34($this, false);
  }
  function Animatable$runAnimation$slambda(this$0, $initialVelocity, $animation, $startTime, $block, resultContinuation) {
    this.this$0__1 = this$0;
    this.$initialVelocity_1 = $initialVelocity;
    this.$animation_1 = $animation;
    this.$startTime_1 = $startTime;
    this.$block_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Animatable$runAnimation$slambda).invoke_eiavl2_k$ = function ($completion) {
    var tmp = this.create_d196fn_k$($completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(Animatable$runAnimation$slambda).invoke_ib42db_k$ = function ($completion) {
    return this.invoke_eiavl2_k$($completion);
  };
  protoOf(Animatable$runAnimation$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_exceptionState_fex74n_k$(2);
            this.this$0__1.internalState_1.set_velocityVector_rbhc11_k$(this.this$0__1.typeConverter_1.get_convertToVector_s594l4_k$()(this.$initialVelocity_1));
            _set_targetValue__aqsk0r(this.this$0__1, this.$animation_1.get_targetValue_kq6mfd_k$());
            _set_isRunning__kpbg34(this.this$0__1, true);
            this.endState1__1 = copy_0(this.this$0__1.internalState_1, VOID, VOID, VOID, AnimationConstants_getInstance().get_UnspecifiedTime_gpclet_k$());
            this.clampingNeeded2__1 = {_v: false};
            this.set_state_rjd8d0_k$(1);
            suspendResult = animate(this.endState1__1, this.$animation_1, this.$startTime_1, Animatable$runAnimation$slambda$lambda(this.this$0__1, this.endState1__1, this.$block_1, this.clampingNeeded2__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var endReason = this.clampingNeeded2__1._v ? AnimationEndReason_BoundReached_getInstance() : AnimationEndReason_Finished_getInstance();
            endAnimation(this.this$0__1);
            this.TRY_RESULT0__1 = new AnimationResult(this.endState1__1, endReason);
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof CancellationException) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp_1 = this;
              endAnimation(this.this$0__1);
              throw e;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_fex74n_k$(3);
            return this.TRY_RESULT0__1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  protoOf(Animatable$runAnimation$slambda).create_d196fn_k$ = function (completion) {
    return new Animatable$runAnimation$slambda(this.this$0__1, this.$initialVelocity_1, this.$animation_1, this.$startTime_1, this.$block_1, completion);
  };
  function Animatable$runAnimation$slambda_0(this$0, $initialVelocity, $animation, $startTime, $block, resultContinuation) {
    var i = new Animatable$runAnimation$slambda(this$0, $initialVelocity, $animation, $startTime, $block, resultContinuation);
    var l = function ($completion) {
      return i.invoke_eiavl2_k$($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Animatable$snapTo$slambda(this$0, $targetValue, resultContinuation) {
    this.this$0__1 = this$0;
    this.$targetValue_1 = $targetValue;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Animatable$snapTo$slambda).invoke_h7udsx_k$ = function ($completion) {
    var tmp = this.create_d196fn_k$($completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(Animatable$snapTo$slambda).invoke_ib42db_k$ = function ($completion) {
    return this.invoke_h7udsx_k$($completion);
  };
  protoOf(Animatable$snapTo$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          endAnimation(this.this$0__1);
          var clampedValue = clampToBounds(this.this$0__1, this.$targetValue_1);
          this.this$0__1.internalState_1.set_value_v1vabv_k$(clampedValue);
          _set_targetValue__aqsk0r(this.this$0__1, clampedValue);
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
  protoOf(Animatable$snapTo$slambda).create_d196fn_k$ = function (completion) {
    return new Animatable$snapTo$slambda(this.this$0__1, this.$targetValue_1, completion);
  };
  function Animatable$snapTo$slambda_0(this$0, $targetValue, resultContinuation) {
    var i = new Animatable$snapTo$slambda(this$0, $targetValue, resultContinuation);
    var l = function ($completion) {
      return i.invoke_h7udsx_k$($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Animatable$stop$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Animatable$stop$slambda).invoke_h7udsx_k$ = function ($completion) {
    var tmp = this.create_d196fn_k$($completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(Animatable$stop$slambda).invoke_ib42db_k$ = function ($completion) {
    return this.invoke_h7udsx_k$($completion);
  };
  protoOf(Animatable$stop$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          endAnimation(this.this$0__1);
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
  protoOf(Animatable$stop$slambda).create_d196fn_k$ = function (completion) {
    return new Animatable$stop$slambda(this.this$0__1, completion);
  };
  function Animatable$stop$slambda_0(this$0, resultContinuation) {
    var i = new Animatable$stop$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.invoke_h7udsx_k$($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Animatable(initialValue, typeConverter, visibilityThreshold, label) {
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    label = label === VOID ? 'Animatable' : label;
    this.typeConverter_1 = typeConverter;
    this.visibilityThreshold_1 = visibilityThreshold;
    this.label_1 = label;
    this.internalState_1 = new AnimationState(this.typeConverter_1, initialValue);
    this.isRunning$delegate_1 = mutableStateOf(false);
    this.targetValue$delegate_1 = mutableStateOf(initialValue);
    this.lowerBound_1 = null;
    this.upperBound_1 = null;
    this.mutatorMutex_1 = new MutatorMutex();
    this.defaultSpringSpec_1 = new SpringSpec(VOID, VOID, this.visibilityThreshold_1);
    var tmp = this;
    var tmp0_subject = this.get_velocityVector_v3jmo9_k$();
    var tmp_0;
    if (tmp0_subject instanceof AnimationVector1D) {
      tmp_0 = get_negativeInfinityBounds1D();
    } else {
      if (tmp0_subject instanceof AnimationVector2D) {
        tmp_0 = get_negativeInfinityBounds2D();
      } else {
        if (tmp0_subject instanceof AnimationVector3D) {
          tmp_0 = get_negativeInfinityBounds3D();
        } else {
          tmp_0 = get_negativeInfinityBounds4D();
        }
      }
    }
    var tmp_1 = tmp_0;
    tmp.negativeInfinityBounds_1 = tmp_1 instanceof AnimationVector_3 ? tmp_1 : THROW_CCE();
    var tmp_2 = this;
    var tmp0_subject_0 = this.get_velocityVector_v3jmo9_k$();
    var tmp_3;
    if (tmp0_subject_0 instanceof AnimationVector1D) {
      tmp_3 = get_positiveInfinityBounds1D();
    } else {
      if (tmp0_subject_0 instanceof AnimationVector2D) {
        tmp_3 = get_positiveInfinityBounds2D();
      } else {
        if (tmp0_subject_0 instanceof AnimationVector3D) {
          tmp_3 = get_positiveInfinityBounds3D();
        } else {
          tmp_3 = get_positiveInfinityBounds4D();
        }
      }
    }
    var tmp_4 = tmp_3;
    tmp_2.positiveInfinityBounds_1 = tmp_4 instanceof AnimationVector_3 ? tmp_4 : THROW_CCE();
    this.lowerBoundVector_1 = this.negativeInfinityBounds_1;
    this.upperBoundVector_1 = this.positiveInfinityBounds_1;
  }
  protoOf(Animatable).get_typeConverter_seyvfn_k$ = function () {
    return this.typeConverter_1;
  };
  protoOf(Animatable).get_label_iuj8p7_k$ = function () {
    return this.label_1;
  };
  protoOf(Animatable).get_internalState_st7k4r_k$ = function () {
    return this.internalState_1;
  };
  protoOf(Animatable).get_value_j01efc_k$ = function () {
    return this.internalState_1.get_value_j01efc_k$();
  };
  protoOf(Animatable).get_velocityVector_v3jmo9_k$ = function () {
    return this.internalState_1.get_velocityVector_v3jmo9_k$();
  };
  protoOf(Animatable).get_velocity_3hqvmu_k$ = function () {
    return this.typeConverter_1.get_convertFromVector_kmewon_k$()(this.get_velocityVector_v3jmo9_k$());
  };
  protoOf(Animatable).get_isRunning_okmtn0_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.isRunning$delegate_1;
    isRunning$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(Animatable).get_targetValue_kq6mfd_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.targetValue$delegate_1;
    targetValue$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(Animatable).get_lowerBound_br3ay_k$ = function () {
    return this.lowerBound_1;
  };
  protoOf(Animatable).get_upperBound_mw839h_k$ = function () {
    return this.upperBound_1;
  };
  protoOf(Animatable).get_defaultSpringSpec_18kgf4_k$ = function () {
    return this.defaultSpringSpec_1;
  };
  protoOf(Animatable).updateBounds_u6omq_k$ = function (lowerBound, upperBound) {
    var tmp;
    if (lowerBound == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.animation.core.Animatable.updateBounds.<anonymous>' call
      tmp = this.typeConverter_1.get_convertToVector_s594l4_k$()(lowerBound);
    }
    var tmp1_elvis_lhs = tmp;
    var lowerBoundVector = tmp1_elvis_lhs == null ? this.negativeInfinityBounds_1 : tmp1_elvis_lhs;
    var tmp_0;
    if (upperBound == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.animation.core.Animatable.updateBounds.<anonymous>' call
      tmp_0 = this.typeConverter_1.get_convertToVector_s594l4_k$()(upperBound);
    }
    var tmp3_elvis_lhs = tmp_0;
    var upperBoundVector = tmp3_elvis_lhs == null ? this.positiveInfinityBounds_1 : tmp3_elvis_lhs;
    var inductionVariable = 0;
    var last = lowerBoundVector.get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(lowerBoundVector.get_c1px32_k$(i) <= upperBoundVector.get_c1px32_k$(i))) {
          // Inline function 'androidx.compose.animation.core.Animatable.updateBounds.<anonymous>' call
          var message = 'Lower bound must be no greater than upper bound on *all* dimensions. The ' + ('provided lower bound: ' + lowerBoundVector + ' is greater than upper bound ') + ('' + upperBoundVector + ' on index ' + i);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
       while (inductionVariable < last);
    this.lowerBoundVector_1 = lowerBoundVector;
    this.upperBoundVector_1 = upperBoundVector;
    this.upperBound_1 = upperBound;
    this.lowerBound_1 = lowerBound;
    if (!this.get_isRunning_okmtn0_k$()) {
      var clampedValue = clampToBounds(this, this.get_value_j01efc_k$());
      if (!equals(clampedValue, this.get_value_j01efc_k$())) {
        this.internalState_1.set_value_v1vabv_k$(clampedValue);
      }
    }
  };
  protoOf(Animatable).updateBounds$default_zfm6qs_k$ = function (lowerBound, upperBound, $super) {
    lowerBound = lowerBound === VOID ? this.lowerBound_1 : lowerBound;
    upperBound = upperBound === VOID ? this.upperBound_1 : upperBound;
    var tmp;
    if ($super === VOID) {
      this.updateBounds_u6omq_k$(lowerBound, upperBound);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.updateBounds_u6omq_k$.call(this, lowerBound, upperBound);
    }
    return tmp;
  };
  protoOf(Animatable).animateTo_z368sf_k$ = function (targetValue, animationSpec, initialVelocity, block, $completion) {
    var tmp0_initialValue = this.get_value_j01efc_k$();
    var tmp1_typeConverter = this.typeConverter_1;
    var anim = TargetBasedAnimation_0(animationSpec, tmp1_typeConverter, tmp0_initialValue, targetValue, initialVelocity);
    return runAnimation(this, anim, initialVelocity, block, $completion);
  };
  protoOf(Animatable).animateTo$default_71hueo_k$ = function (targetValue, animationSpec, initialVelocity, block, $completion, $super) {
    animationSpec = animationSpec === VOID ? this.defaultSpringSpec_1 : animationSpec;
    initialVelocity = initialVelocity === VOID ? this.get_velocity_3hqvmu_k$() : initialVelocity;
    block = block === VOID ? null : block;
    return $super === VOID ? this.animateTo_z368sf_k$(targetValue, animationSpec, initialVelocity, block, $completion) : $super.animateTo_z368sf_k$.call(this, targetValue, animationSpec, initialVelocity, block, $completion);
  };
  protoOf(Animatable).animateDecay_ic37kv_k$ = function (initialVelocity, animationSpec, block, $completion) {
    var tmp0_initialValue = this.get_value_j01efc_k$();
    var tmp1_initialVelocityVector = this.typeConverter_1.get_convertToVector_s594l4_k$()(initialVelocity);
    var tmp2_typeConverter = this.typeConverter_1;
    var anim = DecayAnimation_init_$Create$(animationSpec, tmp2_typeConverter, tmp0_initialValue, tmp1_initialVelocityVector);
    return runAnimation(this, anim, initialVelocity, block, $completion);
  };
  protoOf(Animatable).animateDecay$default_sr5ljs_k$ = function (initialVelocity, animationSpec, block, $completion, $super) {
    block = block === VOID ? null : block;
    return $super === VOID ? this.animateDecay_ic37kv_k$(initialVelocity, animationSpec, block, $completion) : $super.animateDecay_ic37kv_k$.call(this, initialVelocity, animationSpec, block, $completion);
  };
  protoOf(Animatable).snapTo_o5pd1b_k$ = function (targetValue, $completion) {
    return this.mutatorMutex_1.mutate$default_f05kjn_k$(VOID, Animatable$snapTo$slambda_0(this, targetValue, null), $completion);
  };
  protoOf(Animatable).stop_7piii3_k$ = function ($completion) {
    return this.mutatorMutex_1.mutate$default_f05kjn_k$(VOID, Animatable$stop$slambda_0(this, null), $completion);
  };
  protoOf(Animatable).asState_c4y001_k$ = function () {
    return this.internalState_1;
  };
  function AnimationResult(endState, endReason) {
    this.endState_1 = endState;
    this.endReason_1 = endReason;
  }
  protoOf(AnimationResult).get_endState_3g6vgh_k$ = function () {
    return this.endState_1;
  };
  protoOf(AnimationResult).get_endReason_yf0h1y_k$ = function () {
    return this.endReason_1;
  };
  protoOf(AnimationResult).toString = function () {
    return 'AnimationResult(endReason=' + this.endReason_1 + ', endState=' + this.endState_1 + ')';
  };
  function isRunning$factory() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.get_isRunning_okmtn0_k$();
    }, function (receiver, value) {
      return _set_isRunning__kpbg34(receiver, value);
    });
  }
  function isRunning$factory_0() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.get_isRunning_okmtn0_k$();
    }, function (receiver, value) {
      return _set_isRunning__kpbg34(receiver, value);
    });
  }
  function targetValue$factory() {
    return getPropertyCallableRef('targetValue', 1, KMutableProperty1, function (receiver) {
      return receiver.get_targetValue_kq6mfd_k$();
    }, function (receiver, value) {
      return _set_targetValue__aqsk0r(receiver, value);
    });
  }
  function targetValue$factory_0() {
    return getPropertyCallableRef('targetValue', 1, KMutableProperty1, function (receiver) {
      return receiver.get_targetValue_kq6mfd_k$();
    }, function (receiver, value) {
      return _set_targetValue__aqsk0r(receiver, value);
    });
  }
  var properties_initialized_Animatable_kt_s5cd7k;
  function _init_properties_Animatable_kt__f2hc5e() {
    if (!properties_initialized_Animatable_kt_s5cd7k) {
      properties_initialized_Animatable_kt_s5cd7k = true;
      positiveInfinityBounds1D = AnimationVector(FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$());
      positiveInfinityBounds2D = AnimationVector_0(FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$(), FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$());
      positiveInfinityBounds3D = AnimationVector_1(FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$(), FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$(), FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$());
      positiveInfinityBounds4D = AnimationVector_2(FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$(), FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$(), FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$(), FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$());
      negativeInfinityBounds1D = AnimationVector(FloatCompanionObject_getInstance().get_NEGATIVE_INFINITY_e9bp9z_k$());
      negativeInfinityBounds2D = AnimationVector_0(FloatCompanionObject_getInstance().get_NEGATIVE_INFINITY_e9bp9z_k$(), FloatCompanionObject_getInstance().get_NEGATIVE_INFINITY_e9bp9z_k$());
      negativeInfinityBounds3D = AnimationVector_1(FloatCompanionObject_getInstance().get_NEGATIVE_INFINITY_e9bp9z_k$(), FloatCompanionObject_getInstance().get_NEGATIVE_INFINITY_e9bp9z_k$(), FloatCompanionObject_getInstance().get_NEGATIVE_INFINITY_e9bp9z_k$());
      negativeInfinityBounds4D = AnimationVector_2(FloatCompanionObject_getInstance().get_NEGATIVE_INFINITY_e9bp9z_k$(), FloatCompanionObject_getInstance().get_NEGATIVE_INFINITY_e9bp9z_k$(), FloatCompanionObject_getInstance().get_NEGATIVE_INFINITY_e9bp9z_k$(), FloatCompanionObject_getInstance().get_NEGATIVE_INFINITY_e9bp9z_k$());
    }
  }
  function get_defaultAnimation() {
    _init_properties_AnimateAsState_kt__7h7b9a();
    return defaultAnimation;
  }
  var defaultAnimation;
  function get_dpDefaultSpring() {
    _init_properties_AnimateAsState_kt__7h7b9a();
    return dpDefaultSpring;
  }
  var dpDefaultSpring;
  function get_sizeDefaultSpring() {
    _init_properties_AnimateAsState_kt__7h7b9a();
    return sizeDefaultSpring;
  }
  var sizeDefaultSpring;
  function get_offsetDefaultSpring() {
    _init_properties_AnimateAsState_kt__7h7b9a();
    return offsetDefaultSpring;
  }
  var offsetDefaultSpring;
  function get_rectDefaultSpring() {
    _init_properties_AnimateAsState_kt__7h7b9a();
    return rectDefaultSpring;
  }
  var rectDefaultSpring;
  function get_intDefaultSpring() {
    _init_properties_AnimateAsState_kt__7h7b9a();
    return intDefaultSpring;
  }
  var intDefaultSpring;
  function get_intOffsetDefaultSpring() {
    _init_properties_AnimateAsState_kt__7h7b9a();
    return intOffsetDefaultSpring;
  }
  var intOffsetDefaultSpring;
  function get_intSizeDefaultSpring() {
    _init_properties_AnimateAsState_kt__7h7b9a();
    return intSizeDefaultSpring;
  }
  var intSizeDefaultSpring;
  function animateDpAsState(targetValue, animationSpec, label, finishedListener, $composer, $changed, $default) {
    _init_properties_AnimateAsState_kt__7h7b9a();
    var animationSpec_0 = animationSpec;
    var label_0 = label;
    var finishedListener_0 = finishedListener;
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-1407150062);
    sourceInformation($composer_0, 'C(animateDpAsState)P(3:c#ui.unit.Dp!1,2)114@5081L165:AnimateAsState.kt#pdpnli');
    if (!(($default & 2) === 0))
      animationSpec_0 = get_dpDefaultSpring();
    if (!(($default & 4) === 0))
      label_0 = 'DpAnimation';
    if (!(($default & 8) === 0))
      finishedListener_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(-1407150062, $changed, -1, 'androidx.compose.animation.core.animateDpAsState (AnimateAsState.kt:113)');
    }
    var tmp = get_VectorConverter_6(Companion_getInstance());
    var tmp_0 = animationSpec_0;
    var tmp0 = animateValueAsState(new Dp(targetValue), tmp, tmp_0, null, label_0, finishedListener_0, $composer_0, 14 & $changed | 896 & $changed << 3 | 57344 & $changed << 6 | 458752 & $changed << 6, 8);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  }
  function animateValueAsState(targetValue, typeConverter, animationSpec, visibilityThreshold, label, finishedListener, $composer, $changed, $default) {
    _init_properties_AnimateAsState_kt__7h7b9a();
    var animationSpec_0 = animationSpec;
    var visibilityThreshold_0 = visibilityThreshold;
    var label_0 = label;
    var finishedListener_0 = finishedListener;
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-1994373980);
    sourceInformation($composer_0, 'C(animateValueAsState)P(3,4!1,5,2)393@18031L21,399@18213L44,400@18279L79,401@18379L38,402@18456L339,413@18814L42,414@18861L55,417@18921L721:AnimateAsState.kt#pdpnli');
    if (!(($default & 4) === 0)) {
      $composer_0.startReplaceableGroup_ip860b_k$(1824614948);
      sourceInformation($composer_0, 'CC(remember):AnimateAsState.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.compose.animation.core.animateValueAsState.<anonymous>' call
        var value = spring();
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      animationSpec_0 = tmp0_group;
    }
    if (!(($default & 8) === 0))
      visibilityThreshold_0 = null;
    if (!(($default & 16) === 0))
      label_0 = 'ValueAnimation';
    if (!(($default & 32) === 0))
      finishedListener_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(-1994373980, $changed, -1, 'androidx.compose.animation.core.animateValueAsState (AnimateAsState.kt:397)');
    }
    $composer_0.startReplaceableGroup_ip860b_k$(1824615130);
    sourceInformation($composer_0, 'CC(remember):AnimateAsState.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_1;
    if (false ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.animation.core.animateValueAsState.<anonymous>' call
      var value_0 = mutableStateOf(null);
      $composer_0.updateRememberedValue_l1wh71_k$(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp2_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    var toolingOverride = tmp2_group;
    $composer_0.startReplaceableGroup_ip860b_k$(1824615196);
    sourceInformation($composer_0, 'CC(remember):AnimateAsState.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_1 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_3;
    if (false ? true : it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.animation.core.animateValueAsState.<anonymous>' call
      var value_1 = new Animatable(targetValue, typeConverter, visibilityThreshold_0, label_0);
      $composer_0.updateRememberedValue_l1wh71_k$(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = it_1;
    }
    var tmp_4 = tmp_3;
    var tmp3_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    var animatable = tmp3_group;
    var listener$delegate = rememberUpdatedState(finishedListener_0, $composer_0, 14 & $changed >> 15);
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.animation.core.animateValueAsState.<anonymous>' call
    var $this$run = animationSpec_0;
    var tmp_5;
    var tmp_6;
    var tmp_7;
    if (!(visibilityThreshold_0 == null)) {
      tmp_7 = $this$run instanceof SpringSpec;
    } else {
      tmp_7 = false;
    }
    if (tmp_7) {
      tmp_6 = !equals($this$run.get_visibilityThreshold_qtbbow_k$(), visibilityThreshold_0);
    } else {
      tmp_6 = false;
    }
    if (tmp_6) {
      tmp_5 = spring($this$run.get_dampingRatio_syjss2_k$(), $this$run.get_stiffness_dt2sgm_k$(), visibilityThreshold_0);
    } else {
      tmp_5 = $this$run;
    }
    var tmp$ret$13 = tmp_5;
    var animSpec$delegate = rememberUpdatedState(tmp$ret$13, $composer_0, 0);
    $composer_0.startReplaceableGroup_ip860b_k$(1824615731);
    sourceInformation($composer_0, 'CC(remember):AnimateAsState.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_2 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_8;
    if (false ? true : it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.animation.core.animateValueAsState.<anonymous>' call
      var value_2 = Channel(Factory_getInstance().get_CONFLATED_tox14f_k$());
      $composer_0.updateRememberedValue_l1wh71_k$(value_2);
      tmp_8 = value_2;
    } else {
      tmp_8 = it_2;
    }
    var tmp_9 = tmp_8;
    var tmp4_group = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    var channel = tmp4_group;
    SideEffect(animateValueAsState$lambda_1(channel, targetValue), $composer_0, 0);
    LaunchedEffect(channel, animateValueAsState$slambda_0(channel, animatable, animSpec$delegate, listener$delegate, null), $composer_0, 72);
    var tmp0_elvis_lhs = toolingOverride.get_value_j01efc_k$();
    var tmp1 = tmp0_elvis_lhs == null ? animatable.asState_c4y001_k$() : tmp0_elvis_lhs;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp1;
  }
  function animateValueAsState$lambda($listener$delegate) {
    _init_properties_AnimateAsState_kt__7h7b9a();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('listener', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $listener$delegate.get_value_j01efc_k$();
  }
  function animateValueAsState$lambda_0($animSpec$delegate) {
    _init_properties_AnimateAsState_kt__7h7b9a();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('animSpec', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $animSpec$delegate.get_value_j01efc_k$();
  }
  function animateValueAsState$lambda_1($channel, $targetValue) {
    return function () {
      $channel.trySend_62dpg8_k$($targetValue);
      return Unit_getInstance();
    };
  }
  function animateValueAsState$slambda$slambda($newTarget, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation) {
    this.$newTarget_1 = $newTarget;
    this.$animatable_1 = $animatable;
    this.$animSpec$delegate_1 = $animSpec$delegate;
    this.$listener$delegate_1 = $listener$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(animateValueAsState$slambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(animateValueAsState$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(animateValueAsState$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            if (!equals(this.$newTarget_1, this.$animatable_1.get_targetValue_kq6mfd_k$())) {
              this.set_state_rjd8d0_k$(1);
              suspendResult = this.$animatable_1.animateTo$default_71hueo_k$(this.$newTarget_1, animateValueAsState$lambda_0(this.$animSpec$delegate_1), VOID, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            }

          case 1:
            var tmp0_safe_receiver = animateValueAsState$lambda(this.$listener$delegate_1);
            if (tmp0_safe_receiver == null)
              null;
            else
              tmp0_safe_receiver(this.$animatable_1.get_value_j01efc_k$());
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
  protoOf(animateValueAsState$slambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new animateValueAsState$slambda$slambda(this.$newTarget_1, this.$animatable_1, this.$animSpec$delegate_1, this.$listener$delegate_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(animateValueAsState$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function animateValueAsState$slambda$slambda_0($newTarget, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation) {
    var i = new animateValueAsState$slambda$slambda($newTarget, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function animateValueAsState$slambda($channel, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation) {
    this.$channel_1 = $channel;
    this.$animatable_1 = $animatable;
    this.$animSpec$delegate_1 = $animSpec$delegate;
    this.$listener$delegate_1 = $listener$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(animateValueAsState$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(animateValueAsState$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(animateValueAsState$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            this.tmp0_iterator0__1 = this.$channel_1.iterator_jk1svi_k$();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.tmp0_iterator0__1.hasNext_nhy1w3_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!suspendResult) {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

            var target = this.tmp0_iterator0__1.next_20eer_k$();
            var tmp1_elvis_lhs = ChannelResult__getOrNull_impl_f5e07h(this.$channel_1.tryReceive_y3ovg2_k$());
            var newTarget = tmp1_elvis_lhs == null ? target : tmp1_elvis_lhs;
            launch(this.$this$LaunchedEffect_1, VOID, VOID, animateValueAsState$slambda$slambda_0(newTarget, this.$animatable_1, this.$animSpec$delegate_1, this.$listener$delegate_1, null));
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 3:
            return Unit_getInstance();
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
  protoOf(animateValueAsState$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new animateValueAsState$slambda(this.$channel_1, this.$animatable_1, this.$animSpec$delegate_1, this.$listener$delegate_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(animateValueAsState$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function animateValueAsState$slambda_0($channel, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation) {
    var i = new animateValueAsState$slambda($channel, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  var properties_initialized_AnimateAsState_kt_bq3rmo;
  function _init_properties_AnimateAsState_kt__7h7b9a() {
    if (!properties_initialized_AnimateAsState_kt_bq3rmo) {
      properties_initialized_AnimateAsState_kt_bq3rmo = true;
      defaultAnimation = spring();
      dpDefaultSpring = spring(VOID, VOID, new Dp(get_VisibilityThreshold(Companion_getInstance())));
      sizeDefaultSpring = spring(VOID, VOID, new Size(get_VisibilityThreshold_0(Companion_getInstance_1())));
      offsetDefaultSpring = spring(VOID, VOID, new Offset(get_VisibilityThreshold_1(Companion_getInstance_2())));
      rectDefaultSpring = spring(VOID, VOID, get_VisibilityThreshold_2(Companion_getInstance_3()));
      intDefaultSpring = spring(VOID, VOID, get_VisibilityThreshold_3(IntCompanionObject_getInstance()));
      intOffsetDefaultSpring = spring(VOID, VOID, new IntOffset(get_VisibilityThreshold_4(Companion_getInstance_4())));
      intSizeDefaultSpring = spring(VOID, VOID, new IntSize(get_VisibilityThreshold_5(Companion_getInstance_5())));
    }
  }
  function get_MillisToNanos() {
    return MillisToNanos;
  }
  var MillisToNanos;
  function TargetBasedAnimation_init_$Init$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector, $this) {
    initialVelocityVector = initialVelocityVector === VOID ? null : initialVelocityVector;
    TargetBasedAnimation.call($this, animationSpec.vectorize_pto10n_k$(typeConverter), typeConverter, initialValue, targetValue, initialVelocityVector);
    return $this;
  }
  function TargetBasedAnimation_init_$Create$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector) {
    return TargetBasedAnimation_init_$Init$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector, objectCreate(protoOf(TargetBasedAnimation)));
  }
  function _get_initialValueVector__9wx1np($this) {
    return $this.initialValueVector_1;
  }
  function _get_targetValueVector__kndtym($this) {
    return $this.targetValueVector_1;
  }
  function _get_initialVelocityVector__y1hbhp($this) {
    return $this.initialVelocityVector_1;
  }
  function _get_endVelocity__lqkp53($this) {
    return $this.endVelocity_1;
  }
  function TargetBasedAnimation(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector) {
    initialVelocityVector = initialVelocityVector === VOID ? null : initialVelocityVector;
    this.animationSpec_1 = animationSpec;
    this.typeConverter_1 = typeConverter;
    this.initialValue_1 = initialValue;
    this.targetValue_1 = targetValue;
    this.initialValueVector_1 = this.typeConverter_1.get_convertToVector_s594l4_k$()(this.initialValue_1);
    this.targetValueVector_1 = this.typeConverter_1.get_convertToVector_s594l4_k$()(this.targetValue_1);
    var tmp = this;
    var tmp1_elvis_lhs = initialVelocityVector == null ? null : copy_1(initialVelocityVector);
    tmp.initialVelocityVector_1 = tmp1_elvis_lhs == null ? newInstance(this.typeConverter_1.get_convertToVector_s594l4_k$()(this.initialValue_1)) : tmp1_elvis_lhs;
    this.durationNanos_1 = this.animationSpec_1.getDurationNanos_c9o343_k$(this.initialValueVector_1, this.targetValueVector_1, this.initialVelocityVector_1);
    this.endVelocity_1 = this.animationSpec_1.getEndVelocity_j9v6ly_k$(this.initialValueVector_1, this.targetValueVector_1, this.initialVelocityVector_1);
  }
  protoOf(TargetBasedAnimation).get_animationSpec_wdk2t2_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(TargetBasedAnimation).get_typeConverter_seyvfn_k$ = function () {
    return this.typeConverter_1;
  };
  protoOf(TargetBasedAnimation).get_initialValue_2disdm_k$ = function () {
    return this.initialValue_1;
  };
  protoOf(TargetBasedAnimation).get_targetValue_kq6mfd_k$ = function () {
    return this.targetValue_1;
  };
  protoOf(TargetBasedAnimation).get_isInfinite_uffwnt_k$ = function () {
    return this.animationSpec_1.get_isInfinite_uffwnt_k$();
  };
  protoOf(TargetBasedAnimation).getValueFromNanos_i31vd8_k$ = function (playTimeNanos) {
    var tmp;
    if (!this.isFinishedFromNanos_c31w39_k$(playTimeNanos)) {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.animation.core.TargetBasedAnimation.getValueFromNanos.<anonymous>' call
      var it = this.animationSpec_1.getValueFromNanos_xg3j38_k$(playTimeNanos, this.initialValueVector_1, this.targetValueVector_1, this.initialVelocityVector_1);
      var inductionVariable = 0;
      var last = it.get_size_woubt6_k$();
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlin.check' call
          // Inline function 'kotlin.contracts.contract' call
          if (!!isNaN_0(it.get_c1px32_k$(i))) {
            // Inline function 'androidx.compose.animation.core.TargetBasedAnimation.getValueFromNanos.<anonymous>.<anonymous>' call
            var message = 'AnimationVector cannot contain a NaN. ' + it + '. Animation: ' + this + ',' + (' playTimeNanos: ' + playTimeNanos.toString());
            throw IllegalStateException_init_$Create$(toString(message));
          }
        }
         while (inductionVariable < last);
      tmp = this.typeConverter_1.get_convertFromVector_kmewon_k$()(it);
    } else {
      tmp = this.targetValue_1;
    }
    return tmp;
  };
  protoOf(TargetBasedAnimation).get_durationNanos_ub5cy_k$ = function () {
    return this.durationNanos_1;
  };
  protoOf(TargetBasedAnimation).getVelocityVectorFromNanos_jouakx_k$ = function (playTimeNanos) {
    var tmp;
    if (!this.isFinishedFromNanos_c31w39_k$(playTimeNanos)) {
      tmp = this.animationSpec_1.getVelocityFromNanos_wafrjo_k$(playTimeNanos, this.initialValueVector_1, this.targetValueVector_1, this.initialVelocityVector_1);
    } else {
      tmp = this.endVelocity_1;
    }
    return tmp;
  };
  protoOf(TargetBasedAnimation).toString = function () {
    return 'TargetBasedAnimation: ' + this.initialValue_1 + ' -> ' + this.targetValue_1 + ',' + ('initial velocity: ' + this.initialVelocityVector_1 + ', duration: ' + get_durationMillis(this).toString() + ' ms,') + ('animationSpec: ' + this.animationSpec_1);
  };
  function TargetBasedAnimation_0(animationSpec, typeConverter, initialValue, targetValue, initialVelocity) {
    return TargetBasedAnimation_init_$Create$(animationSpec, typeConverter, initialValue, targetValue, typeConverter.get_convertToVector_s594l4_k$()(initialVelocity));
  }
  function _get_animationSpec__ffhwa6($this) {
    return $this.animationSpec_1;
  }
  function _get_initialValueVector__9wx1np_0($this) {
    return $this.initialValueVector_1;
  }
  function _get_endVelocity__lqkp53_0($this) {
    return $this.endVelocity_1;
  }
  function DecayAnimation_init_$Init$(animationSpec, typeConverter, initialValue, initialVelocityVector, $this) {
    DecayAnimation.call($this, animationSpec.vectorize_pto10n_k$(typeConverter), typeConverter, initialValue, initialVelocityVector);
    return $this;
  }
  function DecayAnimation_init_$Create$(animationSpec, typeConverter, initialValue, initialVelocityVector) {
    return DecayAnimation_init_$Init$(animationSpec, typeConverter, initialValue, initialVelocityVector, objectCreate(protoOf(DecayAnimation)));
  }
  function DecayAnimation_init_$Init$_0(animationSpec, typeConverter, initialValue, initialVelocity, $this) {
    DecayAnimation.call($this, animationSpec.vectorize_pto10n_k$(typeConverter), typeConverter, initialValue, typeConverter.get_convertToVector_s594l4_k$()(initialVelocity));
    return $this;
  }
  function DecayAnimation_init_$Create$_0(animationSpec, typeConverter, initialValue, initialVelocity) {
    return DecayAnimation_init_$Init$_0(animationSpec, typeConverter, initialValue, initialVelocity, objectCreate(protoOf(DecayAnimation)));
  }
  function DecayAnimation(animationSpec, typeConverter, initialValue, initialVelocityVector) {
    this.animationSpec_1 = animationSpec;
    this.typeConverter_1 = typeConverter;
    this.initialValue_1 = initialValue;
    this.initialValueVector_1 = this.typeConverter_1.get_convertToVector_s594l4_k$()(this.initialValue_1);
    this.initialVelocityVector_1 = copy_1(initialVelocityVector);
    this.targetValue_1 = this.typeConverter_1.get_convertFromVector_kmewon_k$()(this.animationSpec_1.getTargetValue_rut47u_k$(this.initialValueVector_1, initialVelocityVector));
    this.isInfinite_1 = false;
    this.durationNanos_1 = this.animationSpec_1.getDurationNanos_roqu2j_k$(this.initialValueVector_1, initialVelocityVector);
    this.endVelocity_1 = copy_1(this.animationSpec_1.getVelocityFromNanos_2v7bwc_k$(this.durationNanos_1, this.initialValueVector_1, initialVelocityVector));
    var inductionVariable = 0;
    var last = this.endVelocity_1.get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.endVelocity_1.set_4eugj6_k$(i, coerceIn(this.endVelocity_1.get_c1px32_k$(i), -this.animationSpec_1.get_absVelocityThreshold_wsgqo5_k$(), this.animationSpec_1.get_absVelocityThreshold_wsgqo5_k$()));
      }
       while (inductionVariable < last);
  }
  protoOf(DecayAnimation).get_typeConverter_seyvfn_k$ = function () {
    return this.typeConverter_1;
  };
  protoOf(DecayAnimation).get_initialValue_2disdm_k$ = function () {
    return this.initialValue_1;
  };
  protoOf(DecayAnimation).get_initialVelocityVector_xb37p7_k$ = function () {
    return this.initialVelocityVector_1;
  };
  protoOf(DecayAnimation).get_targetValue_kq6mfd_k$ = function () {
    return this.targetValue_1;
  };
  protoOf(DecayAnimation).get_durationNanos_ub5cy_k$ = function () {
    return this.durationNanos_1;
  };
  protoOf(DecayAnimation).get_isInfinite_uffwnt_k$ = function () {
    return this.isInfinite_1;
  };
  protoOf(DecayAnimation).getValueFromNanos_i31vd8_k$ = function (playTimeNanos) {
    if (!this.isFinishedFromNanos_c31w39_k$(playTimeNanos)) {
      return this.typeConverter_1.get_convertFromVector_kmewon_k$()(this.animationSpec_1.getValueFromNanos_huzcys_k$(playTimeNanos, this.initialValueVector_1, this.initialVelocityVector_1));
    } else {
      return this.targetValue_1;
    }
  };
  protoOf(DecayAnimation).getVelocityVectorFromNanos_jouakx_k$ = function (playTimeNanos) {
    if (!this.isFinishedFromNanos_c31w39_k$(playTimeNanos)) {
      return this.animationSpec_1.getVelocityFromNanos_2v7bwc_k$(playTimeNanos, this.initialValueVector_1, this.initialVelocityVector_1);
    } else {
      return this.endVelocity_1;
    }
  };
  function Animation() {
  }
  function get_durationMillis(_this__u8e3s4) {
    return _this__u8e3s4.get_durationNanos_ub5cy_k$().div_jun7gj_k$(new Long(1000000, 0));
  }
  var AnimationEndReason_BoundReached_instance;
  var AnimationEndReason_Finished_instance;
  function values() {
    return [AnimationEndReason_BoundReached_getInstance(), AnimationEndReason_Finished_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'BoundReached':
        return AnimationEndReason_BoundReached_getInstance();
      case 'Finished':
        return AnimationEndReason_Finished_getInstance();
      default:
        AnimationEndReason_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var AnimationEndReason_entriesInitialized;
  function AnimationEndReason_initEntries() {
    if (AnimationEndReason_entriesInitialized)
      return Unit_getInstance();
    AnimationEndReason_entriesInitialized = true;
    AnimationEndReason_BoundReached_instance = new AnimationEndReason('BoundReached', 0);
    AnimationEndReason_Finished_instance = new AnimationEndReason('Finished', 1);
  }
  var $ENTRIES;
  function AnimationEndReason(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function AnimationEndReason_BoundReached_getInstance() {
    AnimationEndReason_initEntries();
    return AnimationEndReason_BoundReached_instance;
  }
  function AnimationEndReason_Finished_getInstance() {
    AnimationEndReason_initEntries();
    return AnimationEndReason_Finished_instance;
  }
  function SpringSpec(dampingRatio, stiffness, visibilityThreshold) {
    dampingRatio = dampingRatio === VOID ? Spring_getInstance().get_DampingRatioNoBouncy_45ga5r_k$() : dampingRatio;
    stiffness = stiffness === VOID ? Spring_getInstance().get_StiffnessMedium_mjh6r9_k$() : stiffness;
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    this.dampingRatio_1 = dampingRatio;
    this.stiffness_1 = stiffness;
    this.visibilityThreshold_1 = visibilityThreshold;
  }
  protoOf(SpringSpec).get_dampingRatio_syjss2_k$ = function () {
    return this.dampingRatio_1;
  };
  protoOf(SpringSpec).get_stiffness_dt2sgm_k$ = function () {
    return this.stiffness_1;
  };
  protoOf(SpringSpec).get_visibilityThreshold_qtbbow_k$ = function () {
    return this.visibilityThreshold_1;
  };
  protoOf(SpringSpec).vectorize_pto10n_k$ = function (converter) {
    return VectorizedSpringSpec_init_$Create$(this.dampingRatio_1, this.stiffness_1, convert(converter, this.visibilityThreshold_1));
  };
  protoOf(SpringSpec).equals = function (other) {
    var tmp;
    if (other instanceof SpringSpec) {
      tmp = (other.dampingRatio_1 === this.dampingRatio_1 ? other.stiffness_1 === this.stiffness_1 : false) ? equals(other.visibilityThreshold_1, this.visibilityThreshold_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SpringSpec).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.visibilityThreshold_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return imul(imul(tmp$ret$0, 31) + getNumberHashCode(this.dampingRatio_1) | 0, 31) + getNumberHashCode(this.stiffness_1) | 0;
  };
  function spring(dampingRatio, stiffness, visibilityThreshold) {
    dampingRatio = dampingRatio === VOID ? Spring_getInstance().get_DampingRatioNoBouncy_45ga5r_k$() : dampingRatio;
    stiffness = stiffness === VOID ? Spring_getInstance().get_StiffnessMedium_mjh6r9_k$() : stiffness;
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    return new SpringSpec(dampingRatio, stiffness, visibilityThreshold);
  }
  function FiniteAnimationSpec() {
  }
  function convert(_this__u8e3s4, data) {
    if (data == null) {
      return null;
    } else {
      return _this__u8e3s4.get_convertToVector_s594l4_k$()(data);
    }
  }
  function AnimationSpec() {
  }
  function InfiniteRepeatableSpec_init_$Init$(animation, repeatMode, $this) {
    repeatMode = repeatMode === VOID ? RepeatMode_Restart_getInstance() : repeatMode;
    InfiniteRepeatableSpec.call($this, animation, repeatMode, _StartOffset___init__impl__615djw_0(0));
    return $this;
  }
  function InfiniteRepeatableSpec_init_$Create$(animation, repeatMode) {
    return InfiniteRepeatableSpec_init_$Init$(animation, repeatMode, objectCreate(protoOf(InfiniteRepeatableSpec)));
  }
  function InfiniteRepeatableSpec(animation, repeatMode, initialStartOffset) {
    repeatMode = repeatMode === VOID ? RepeatMode_Restart_getInstance() : repeatMode;
    initialStartOffset = initialStartOffset === VOID ? _StartOffset___init__impl__615djw_0(0) : initialStartOffset;
    this.animation_1 = animation;
    this.repeatMode_1 = repeatMode;
    this.initialStartOffset_1 = initialStartOffset;
  }
  protoOf(InfiniteRepeatableSpec).get_animation_r0gd0b_k$ = function () {
    return this.animation_1;
  };
  protoOf(InfiniteRepeatableSpec).get_repeatMode_zzqu1_k$ = function () {
    return this.repeatMode_1;
  };
  protoOf(InfiniteRepeatableSpec).get_initialStartOffset_ofn0ob_k$ = function () {
    return this.initialStartOffset_1;
  };
  protoOf(InfiniteRepeatableSpec).vectorize_pto10n_k$ = function (converter) {
    return new VectorizedInfiniteRepeatableSpec(this.animation_1.vectorize_pto10n_k$(converter), this.repeatMode_1, this.initialStartOffset_1);
  };
  protoOf(InfiniteRepeatableSpec).equals = function (other) {
    var tmp;
    if (other instanceof InfiniteRepeatableSpec) {
      tmp = (equals(other.animation_1, this.animation_1) ? other.repeatMode_1.equals(this.repeatMode_1) : false) ? equals(other.initialStartOffset_1, this.initialStartOffset_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(InfiniteRepeatableSpec).hashCode = function () {
    return imul(imul(hashCode(this.animation_1), 31) + this.repeatMode_1.hashCode() | 0, 31) + StartOffset__hashCode_impl_ith3z7(this.initialStartOffset_1) | 0;
  };
  function infiniteRepeatable(animation, repeatMode, initialStartOffset) {
    repeatMode = repeatMode === VOID ? RepeatMode_Restart_getInstance() : repeatMode;
    initialStartOffset = initialStartOffset === VOID ? _StartOffset___init__impl__615djw_0(0) : initialStartOffset;
    return new InfiniteRepeatableSpec(animation, repeatMode, initialStartOffset);
  }
  function KeyframesSpecConfig() {
    KeyframesSpecBaseConfig.call(this);
  }
  protoOf(KeyframesSpecConfig).createEntityFor_7ln1ob_k$ = function (value) {
    return new KeyframeEntity(value);
  };
  protoOf(KeyframesSpecConfig).at_1dnb16_k$ = function (_this__u8e3s4, timeStamp) {
    // Inline function 'kotlin.also' call
    var this_0 = new KeyframeEntity(_this__u8e3s4);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.animation.core.KeyframesSpecConfig.at.<anonymous>' call
    this.keyframes_1.set_hupg49_k$(timeStamp, this_0);
    return this_0;
  };
  protoOf(KeyframesSpecConfig).atFraction_i4lk4_k$ = function (_this__u8e3s4, fraction) {
    // Inline function 'kotlin.math.roundToInt' call
    var this_0 = this.durationMillis_1 * fraction;
    var tmp$ret$0 = roundToInt(this_0);
    return this.at_1dnb16_k$(_this__u8e3s4, tmp$ret$0);
  };
  protoOf(KeyframesSpecConfig).with_cuwycf_k$ = function (_this__u8e3s4, easing) {
    _this__u8e3s4.easing_1 = easing;
  };
  function KeyframeEntity(value, easing) {
    easing = easing === VOID ? get_LinearEasing() : easing;
    KeyframeBaseEntity.call(this, value, easing);
  }
  protoOf(KeyframeEntity).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof KeyframeEntity) {
      tmp_0 = equals(other.value_1, this.value_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(other.easing_1, this.easing_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(KeyframeEntity).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.value_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return imul(tmp$ret$0, 31) + hashCode(this.easing_1) | 0;
  };
  function KeyframesSpec(config) {
    this.config_1 = config;
  }
  protoOf(KeyframesSpec).get_config_c0698r_k$ = function () {
    return this.config_1;
  };
  protoOf(KeyframesSpec).vectorize_pto10n_k$ = function (converter) {
    // Inline function 'kotlin.collections.mutableMapOf' call
    var vectorizedKeyframes = LinkedHashMap_init_$Create$();
    // Inline function 'androidx.collection.IntObjectMap.forEach' call
    var this_0 = this.config_1.keyframes_1;
    var k = this_0.get_keys_wop4xp_k$();
    var v = this_0.get_values_ksazhn_k$();
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
      var m = this_0.get_metadata_vs95vc_k$();
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_1 = slot;
          if (!this_1.and_4spn93_k$(this_1.inv_28kx_k$().shl_bg8if3_k$(7)).and_4spn93_k$(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.and_4spn93_k$(new Long(255, 0)).compareTo_9jj042_k$(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.IntObjectMap.forEach.<anonymous>' call
                  // Inline function 'androidx.compose.animation.core.KeyframesSpec.vectorize.<anonymous>' call
                  var key = k[index];
                  var tmp = v[index];
                  // Inline function 'kotlin.collections.set' call
                  var value = ((tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE()).toPair_c13ujh_k$(converter.get_convertToVector_s594l4_k$());
                  vectorizedKeyframes.put_4fpzoq_k$(key, value);
                }
                slot = slot.shr_9fl3wl_k$(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return new VectorizedKeyframesSpec(vectorizedKeyframes, this.config_1.durationMillis_1, this.config_1.delayMillis_1);
  };
  function keyframes(init) {
    // Inline function 'kotlin.apply' call
    var this_0 = new KeyframesSpecConfig();
    // Inline function 'kotlin.contracts.contract' call
    init(this_0);
    return new KeyframesSpec(this_0);
  }
  function TweenSpec(durationMillis, delay, easing) {
    durationMillis = durationMillis === VOID ? 300 : durationMillis;
    delay = delay === VOID ? 0 : delay;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    this.durationMillis_1 = durationMillis;
    this.delay_1 = delay;
    this.easing_1 = easing;
  }
  protoOf(TweenSpec).get_durationMillis_pqx05f_k$ = function () {
    return this.durationMillis_1;
  };
  protoOf(TweenSpec).get_delay_iq7n8a_k$ = function () {
    return this.delay_1;
  };
  protoOf(TweenSpec).get_easing_cqnn04_k$ = function () {
    return this.easing_1;
  };
  protoOf(TweenSpec).vectorize_pto10n_k$ = function (converter) {
    return new VectorizedTweenSpec(this.durationMillis_1, this.delay_1, this.easing_1);
  };
  protoOf(TweenSpec).equals = function (other) {
    var tmp;
    if (other instanceof TweenSpec) {
      tmp = (other.durationMillis_1 === this.durationMillis_1 ? other.delay_1 === this.delay_1 : false) ? equals(other.easing_1, this.easing_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(TweenSpec).hashCode = function () {
    return imul(imul(this.durationMillis_1, 31) + hashCode(this.easing_1) | 0, 31) + this.delay_1 | 0;
  };
  function tween(durationMillis, delayMillis, easing) {
    durationMillis = durationMillis === VOID ? 300 : durationMillis;
    delayMillis = delayMillis === VOID ? 0 : delayMillis;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    return new TweenSpec(durationMillis, delayMillis, easing);
  }
  function DurationBasedAnimationSpec() {
  }
  var RepeatMode_Restart_instance;
  var RepeatMode_Reverse_instance;
  function values_0() {
    return [RepeatMode_Restart_getInstance(), RepeatMode_Reverse_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'Restart':
        return RepeatMode_Restart_getInstance();
      case 'Reverse':
        return RepeatMode_Reverse_getInstance();
      default:
        RepeatMode_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var RepeatMode_entriesInitialized;
  function RepeatMode_initEntries() {
    if (RepeatMode_entriesInitialized)
      return Unit_getInstance();
    RepeatMode_entriesInitialized = true;
    RepeatMode_Restart_instance = new RepeatMode('Restart', 0);
    RepeatMode_Reverse_instance = new RepeatMode('Reverse', 1);
  }
  var $ENTRIES_0;
  function RepeatMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function _StartOffset___init__impl__615djw(value) {
    return value;
  }
  function _StartOffset___get_value__impl__8sikig($this) {
    return $this;
  }
  function _StartOffset___init__impl__615djw_0(offsetMillis, offsetType) {
    offsetType = offsetType === VOID ? Companion_getInstance_8().Delay_1 : offsetType;
    return _StartOffset___init__impl__615djw(toLong(imul(offsetMillis, _StartOffsetType___get_value__impl__i1pfem(offsetType))));
  }
  function _StartOffset___get_offsetMillis__impl__x95ylg($this) {
    return abs(_StartOffset___get_value__impl__8sikig($this).toInt_1tsl84_k$());
  }
  function _StartOffset___get_offsetType__impl__92sljs($this) {
    var tmp;
    switch (_StartOffset___get_value__impl__8sikig($this).compareTo_9jj042_k$(new Long(0, 0)) > 0) {
      case true:
        tmp = Companion_getInstance_8().FastForward_1;
        break;
      case false:
        tmp = Companion_getInstance_8().Delay_1;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function StartOffset__toString_impl_2xosto($this) {
    return 'StartOffset(value=' + $this.toString() + ')';
  }
  function StartOffset__hashCode_impl_ith3z7($this) {
    return $this.hashCode();
  }
  function StartOffset__equals_impl_58sbp5($this, other) {
    if (!(other instanceof StartOffset))
      return false;
    var tmp0_other_with_cast = other instanceof StartOffset ? other.value_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function StartOffset(value) {
    this.value_1 = value;
  }
  protoOf(StartOffset).toString = function () {
    return StartOffset__toString_impl_2xosto(this.value_1);
  };
  protoOf(StartOffset).hashCode = function () {
    return StartOffset__hashCode_impl_ith3z7(this.value_1);
  };
  protoOf(StartOffset).equals = function (other) {
    return StartOffset__equals_impl_58sbp5(this.value_1, other);
  };
  function KeyframesSpecBaseConfig() {
    this.durationMillis_1 = 300;
    this.delayMillis_1 = 0;
    this.keyframes_1 = mutableIntObjectMapOf();
  }
  protoOf(KeyframesSpecBaseConfig).set_durationMillis_11l8vl_k$ = function (_set____db54di) {
    this.durationMillis_1 = _set____db54di;
  };
  protoOf(KeyframesSpecBaseConfig).get_durationMillis_pqx05f_k$ = function () {
    return this.durationMillis_1;
  };
  protoOf(KeyframesSpecBaseConfig).set_delayMillis_uhofus_k$ = function (_set____db54di) {
    this.delayMillis_1 = _set____db54di;
  };
  protoOf(KeyframesSpecBaseConfig).get_delayMillis_d968n4_k$ = function () {
    return this.delayMillis_1;
  };
  protoOf(KeyframesSpecBaseConfig).get_keyframes_fes9no_k$ = function () {
    return this.keyframes_1;
  };
  protoOf(KeyframesSpecBaseConfig).at_1dnb16_k$ = function (_this__u8e3s4, timeStamp) {
    var entity = this.createEntityFor_7ln1ob_k$(_this__u8e3s4);
    this.keyframes_1.set_hupg49_k$(timeStamp, entity);
    return entity;
  };
  protoOf(KeyframesSpecBaseConfig).atFraction_i4lk4_k$ = function (_this__u8e3s4, fraction) {
    // Inline function 'kotlin.math.roundToInt' call
    var this_0 = this.durationMillis_1 * fraction;
    var tmp$ret$0 = roundToInt(this_0);
    return this.at_1dnb16_k$(_this__u8e3s4, tmp$ret$0);
  };
  protoOf(KeyframesSpecBaseConfig).using_gofctp_k$ = function (_this__u8e3s4, easing) {
    _this__u8e3s4.easing_1 = easing;
    return _this__u8e3s4;
  };
  function KeyframeBaseEntity(value, easing) {
    this.value_1 = value;
    this.easing_1 = easing;
  }
  protoOf(KeyframeBaseEntity).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(KeyframeBaseEntity).set_easing_poaykx_k$ = function (_set____db54di) {
    this.easing_1 = _set____db54di;
  };
  protoOf(KeyframeBaseEntity).get_easing_cqnn04_k$ = function () {
    return this.easing_1;
  };
  protoOf(KeyframeBaseEntity).toPair_c13ujh_k$ = function (convertToVector) {
    return to(convertToVector(this.value_1), this.easing_1);
  };
  function AnimationConstants() {
    AnimationConstants_instance = this;
    this.DefaultDurationMillis_1 = 300;
    this.UnspecifiedTime_1 = new Long(0, -2147483648);
  }
  protoOf(AnimationConstants).get_DefaultDurationMillis_kgwre6_k$ = function () {
    return this.DefaultDurationMillis_1;
  };
  protoOf(AnimationConstants).get_UnspecifiedTime_gpclet_k$ = function () {
    return this.UnspecifiedTime_1;
  };
  var AnimationConstants_instance;
  function AnimationConstants_getInstance() {
    if (AnimationConstants_instance == null)
      new AnimationConstants();
    return AnimationConstants_instance;
  }
  function _StartOffsetType___init__impl__g1ur7a(value) {
    return value;
  }
  function _StartOffsetType___get_value__impl__i1pfem($this) {
    return $this;
  }
  function Companion() {
    Companion_instance = this;
    this.Delay_1 = _StartOffsetType___init__impl__g1ur7a(-1);
    this.FastForward_1 = _StartOffsetType___init__impl__g1ur7a(1);
  }
  protoOf(Companion).get_Delay_4dknp7_k$ = function () {
    return this.Delay_1;
  };
  protoOf(Companion).get_FastForward_i32a6j_k$ = function () {
    return this.FastForward_1;
  };
  var Companion_instance;
  function Companion_getInstance_8() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function StartOffsetType__toString_impl_3r5832($this) {
    return 'StartOffsetType(value=' + $this + ')';
  }
  function StartOffsetType__hashCode_impl_pib4vx($this) {
    return $this;
  }
  function StartOffsetType__equals_impl_hnkckf($this, other) {
    if (!(other instanceof StartOffsetType))
      return false;
    if (!($this === (other instanceof StartOffsetType ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function StartOffsetType(value) {
    Companion_getInstance_8();
    this.value_1 = value;
  }
  protoOf(StartOffsetType).toString = function () {
    return StartOffsetType__toString_impl_3r5832(this.value_1);
  };
  protoOf(StartOffsetType).hashCode = function () {
    return StartOffsetType__hashCode_impl_pib4vx(this.value_1);
  };
  protoOf(StartOffsetType).equals = function (other) {
    return StartOffsetType__equals_impl_hnkckf(this.value_1, other);
  };
  function RepeatMode_Restart_getInstance() {
    RepeatMode_initEntries();
    return RepeatMode_Restart_instance;
  }
  function RepeatMode_Reverse_getInstance() {
    RepeatMode_initEntries();
    return RepeatMode_Reverse_instance;
  }
  function AnimationState(typeConverter, initialValue, initialVelocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    initialVelocityVector = initialVelocityVector === VOID ? null : initialVelocityVector;
    lastFrameTimeNanos = lastFrameTimeNanos === VOID ? AnimationConstants_getInstance().get_UnspecifiedTime_gpclet_k$() : lastFrameTimeNanos;
    finishedTimeNanos = finishedTimeNanos === VOID ? AnimationConstants_getInstance().get_UnspecifiedTime_gpclet_k$() : finishedTimeNanos;
    isRunning = isRunning === VOID ? false : isRunning;
    this.typeConverter_1 = typeConverter;
    this.value$delegate_1 = mutableStateOf(initialValue);
    var tmp = this;
    var tmp1_elvis_lhs = initialVelocityVector == null ? null : copy_1(initialVelocityVector);
    tmp.velocityVector_1 = tmp1_elvis_lhs == null ? createZeroVectorFrom(this.typeConverter_1, initialValue) : tmp1_elvis_lhs;
    this.lastFrameTimeNanos_1 = lastFrameTimeNanos;
    this.finishedTimeNanos_1 = finishedTimeNanos;
    this.isRunning_1 = isRunning;
  }
  protoOf(AnimationState).get_typeConverter_seyvfn_k$ = function () {
    return this.typeConverter_1;
  };
  protoOf(AnimationState).set_value_v1vabv_k$ = function (_set____db54di) {
    var this_0 = this.value$delegate_1;
    value$factory();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(AnimationState).get_value_j01efc_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.value$delegate_1;
    value$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(AnimationState).set_velocityVector_rbhc11_k$ = function (_set____db54di) {
    this.velocityVector_1 = _set____db54di;
  };
  protoOf(AnimationState).get_velocityVector_v3jmo9_k$ = function () {
    return this.velocityVector_1;
  };
  protoOf(AnimationState).set_lastFrameTimeNanos_hfjxwm_k$ = function (_set____db54di) {
    this.lastFrameTimeNanos_1 = _set____db54di;
  };
  protoOf(AnimationState).get_lastFrameTimeNanos_3aprno_k$ = function () {
    return this.lastFrameTimeNanos_1;
  };
  protoOf(AnimationState).set_finishedTimeNanos_8cpdkr_k$ = function (_set____db54di) {
    this.finishedTimeNanos_1 = _set____db54di;
  };
  protoOf(AnimationState).get_finishedTimeNanos_t5ryif_k$ = function () {
    return this.finishedTimeNanos_1;
  };
  protoOf(AnimationState).set_isRunning_m21k59_k$ = function (_set____db54di) {
    this.isRunning_1 = _set____db54di;
  };
  protoOf(AnimationState).get_isRunning_okmtn0_k$ = function () {
    return this.isRunning_1;
  };
  protoOf(AnimationState).get_velocity_3hqvmu_k$ = function () {
    return this.typeConverter_1.get_convertFromVector_kmewon_k$()(this.velocityVector_1);
  };
  protoOf(AnimationState).toString = function () {
    return 'AnimationState(' + ('value=' + this.get_value_j01efc_k$() + ', ') + ('velocity=' + this.get_velocity_3hqvmu_k$() + ', ') + ('isRunning=' + this.isRunning_1 + ', ') + ('lastFrameTimeNanos=' + this.lastFrameTimeNanos_1.toString() + ', ') + ('finishedTimeNanos=' + this.finishedTimeNanos_1.toString()) + ')';
  };
  function AnimationState_0(initialValue, initialVelocity, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    initialVelocity = initialVelocity === VOID ? 0.0 : initialVelocity;
    lastFrameTimeNanos = lastFrameTimeNanos === VOID ? AnimationConstants_getInstance().get_UnspecifiedTime_gpclet_k$() : lastFrameTimeNanos;
    finishedTimeNanos = finishedTimeNanos === VOID ? AnimationConstants_getInstance().get_UnspecifiedTime_gpclet_k$() : finishedTimeNanos;
    isRunning = isRunning === VOID ? false : isRunning;
    return new AnimationState(get_VectorConverter_2(FloatCompanionObject_getInstance()), initialValue, AnimationVector(initialVelocity), lastFrameTimeNanos, finishedTimeNanos, isRunning);
  }
  function copy(_this__u8e3s4, value, velocity, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    value = value === VOID ? _this__u8e3s4.get_value_j01efc_k$() : value;
    velocity = velocity === VOID ? _this__u8e3s4.velocityVector_1.get_value_j01efc_k$() : velocity;
    lastFrameTimeNanos = lastFrameTimeNanos === VOID ? _this__u8e3s4.lastFrameTimeNanos_1 : lastFrameTimeNanos;
    finishedTimeNanos = finishedTimeNanos === VOID ? _this__u8e3s4.finishedTimeNanos_1 : finishedTimeNanos;
    isRunning = isRunning === VOID ? _this__u8e3s4.isRunning_1 : isRunning;
    return new AnimationState(_this__u8e3s4.typeConverter_1, value, AnimationVector(velocity), lastFrameTimeNanos, finishedTimeNanos, isRunning);
  }
  function _get_onCancel__fbp26m($this) {
    return $this.onCancel_1;
  }
  function AnimationScope(initialValue, typeConverter, initialVelocityVector, lastFrameTimeNanos, targetValue, startTimeNanos, isRunning, onCancel) {
    this.typeConverter_1 = typeConverter;
    this.targetValue_1 = targetValue;
    this.startTimeNanos_1 = startTimeNanos;
    this.onCancel_1 = onCancel;
    this.value$delegate_1 = mutableStateOf(initialValue);
    this.velocityVector_1 = copy_1(initialVelocityVector);
    this.lastFrameTimeNanos_1 = lastFrameTimeNanos;
    this.finishedTimeNanos_1 = AnimationConstants_getInstance().get_UnspecifiedTime_gpclet_k$();
    this.isRunning$delegate_1 = mutableStateOf(isRunning);
  }
  protoOf(AnimationScope).get_typeConverter_seyvfn_k$ = function () {
    return this.typeConverter_1;
  };
  protoOf(AnimationScope).get_targetValue_kq6mfd_k$ = function () {
    return this.targetValue_1;
  };
  protoOf(AnimationScope).get_startTimeNanos_ru5em1_k$ = function () {
    return this.startTimeNanos_1;
  };
  protoOf(AnimationScope).set_value_v1vabv_k$ = function (_set____db54di) {
    var this_0 = this.value$delegate_1;
    value$factory_1();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(AnimationScope).get_value_j01efc_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.value$delegate_1;
    value$factory_2();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(AnimationScope).set_velocityVector_rbhc11_k$ = function (_set____db54di) {
    this.velocityVector_1 = _set____db54di;
  };
  protoOf(AnimationScope).get_velocityVector_v3jmo9_k$ = function () {
    return this.velocityVector_1;
  };
  protoOf(AnimationScope).set_lastFrameTimeNanos_hfjxwm_k$ = function (_set____db54di) {
    this.lastFrameTimeNanos_1 = _set____db54di;
  };
  protoOf(AnimationScope).get_lastFrameTimeNanos_3aprno_k$ = function () {
    return this.lastFrameTimeNanos_1;
  };
  protoOf(AnimationScope).set_finishedTimeNanos_8cpdkr_k$ = function (_set____db54di) {
    this.finishedTimeNanos_1 = _set____db54di;
  };
  protoOf(AnimationScope).get_finishedTimeNanos_t5ryif_k$ = function () {
    return this.finishedTimeNanos_1;
  };
  protoOf(AnimationScope).set_isRunning_m21k59_k$ = function (_set____db54di) {
    var this_0 = this.isRunning$delegate_1;
    isRunning$factory_1();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(AnimationScope).get_isRunning_okmtn0_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.isRunning$delegate_1;
    isRunning$factory_2();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(AnimationScope).get_velocity_3hqvmu_k$ = function () {
    return this.typeConverter_1.get_convertFromVector_kmewon_k$()(this.velocityVector_1);
  };
  protoOf(AnimationScope).cancelAnimation_ic0k2u_k$ = function () {
    this.set_isRunning_m21k59_k$(false);
    this.onCancel_1();
  };
  protoOf(AnimationScope).toAnimationState_sex3co_k$ = function () {
    return new AnimationState(this.typeConverter_1, this.get_value_j01efc_k$(), this.velocityVector_1, this.lastFrameTimeNanos_1, this.finishedTimeNanos_1, this.get_isRunning_okmtn0_k$());
  };
  function copy_0(_this__u8e3s4, value, velocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    value = value === VOID ? _this__u8e3s4.get_value_j01efc_k$() : value;
    velocityVector = velocityVector === VOID ? copy_1(_this__u8e3s4.velocityVector_1) : velocityVector;
    lastFrameTimeNanos = lastFrameTimeNanos === VOID ? _this__u8e3s4.lastFrameTimeNanos_1 : lastFrameTimeNanos;
    finishedTimeNanos = finishedTimeNanos === VOID ? _this__u8e3s4.finishedTimeNanos_1 : finishedTimeNanos;
    isRunning = isRunning === VOID ? _this__u8e3s4.isRunning_1 : isRunning;
    return new AnimationState(_this__u8e3s4.typeConverter_1, value, velocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning);
  }
  function createZeroVectorFrom(_this__u8e3s4, value) {
    // Inline function 'kotlin.also' call
    var this_0 = _this__u8e3s4.get_convertToVector_s594l4_k$()(value);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.animation.core.createZeroVectorFrom.<anonymous>' call
    this_0.reset_5u6xz3_k$();
    return this_0;
  }
  function value$factory() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.get_value_j01efc_k$();
    }, function (receiver, value) {
      return receiver.set_value_v1vabv_k$(value);
    });
  }
  function value$factory_0() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.get_value_j01efc_k$();
    }, function (receiver, value) {
      return receiver.set_value_v1vabv_k$(value);
    });
  }
  function value$factory_1() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.get_value_j01efc_k$();
    }, function (receiver, value) {
      return receiver.set_value_v1vabv_k$(value);
    });
  }
  function value$factory_2() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.get_value_j01efc_k$();
    }, function (receiver, value) {
      return receiver.set_value_v1vabv_k$(value);
    });
  }
  function isRunning$factory_1() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.get_isRunning_okmtn0_k$();
    }, function (receiver, value) {
      return receiver.set_isRunning_m21k59_k$(value);
    });
  }
  function isRunning$factory_2() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.get_isRunning_okmtn0_k$();
    }, function (receiver, value) {
      return receiver.set_isRunning_m21k59_k$(value);
    });
  }
  function AnimationVector1D(initVal) {
    AnimationVector_3.call(this);
    this.value_1 = initVal;
    this.size_1 = 1;
  }
  protoOf(AnimationVector1D).set_value_bgphas_k$ = function (_set____db54di) {
    this.value_1 = _set____db54di;
  };
  protoOf(AnimationVector1D).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(AnimationVector1D).reset_5u6xz3_k$ = function () {
    this.value_1 = 0.0;
  };
  protoOf(AnimationVector1D).newVector_8o1gcd_k$ = function () {
    return new AnimationVector1D(0.0);
  };
  protoOf(AnimationVector1D).get_c1px32_k$ = function (index) {
    if (index === 0) {
      return this.value_1;
    } else {
      return 0.0;
    }
  };
  protoOf(AnimationVector1D).set_4eugj6_k$ = function (index, value) {
    if (index === 0) {
      this.value_1 = value;
    }
  };
  protoOf(AnimationVector1D).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  protoOf(AnimationVector1D).toString = function () {
    return 'AnimationVector1D: value = ' + this.value_1;
  };
  protoOf(AnimationVector1D).equals = function (other) {
    var tmp;
    if (other instanceof AnimationVector1D) {
      tmp = other.value_1 === this.value_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AnimationVector1D).hashCode = function () {
    return getNumberHashCode(this.value_1);
  };
  function AnimationVector(v1) {
    return new AnimationVector1D(v1);
  }
  function AnimationVector2D(v1, v2) {
    AnimationVector_3.call(this);
    this.v1__1 = v1;
    this.v2__1 = v2;
    this.size_1 = 2;
  }
  protoOf(AnimationVector2D).set_v1_fqnkfk_k$ = function (_set____db54di) {
    this.v1__1 = _set____db54di;
  };
  protoOf(AnimationVector2D).get_v1_kntnng_k$ = function () {
    return this.v1__1;
  };
  protoOf(AnimationVector2D).set_v2_y2tbpr_k$ = function (_set____db54di) {
    this.v2__1 = _set____db54di;
  };
  protoOf(AnimationVector2D).get_v2_kntnnf_k$ = function () {
    return this.v2__1;
  };
  protoOf(AnimationVector2D).reset_5u6xz3_k$ = function () {
    this.v1__1 = 0.0;
    this.v2__1 = 0.0;
  };
  protoOf(AnimationVector2D).newVector_8o1gcd_k$ = function () {
    return new AnimationVector2D(0.0, 0.0);
  };
  protoOf(AnimationVector2D).get_c1px32_k$ = function (index) {
    switch (index) {
      case 0:
        return this.v1__1;
      case 1:
        return this.v2__1;
      default:
        return 0.0;
    }
  };
  protoOf(AnimationVector2D).set_4eugj6_k$ = function (index, value) {
    if (index === 0)
      this.v1__1 = value;
    else if (index === 1)
      this.v2__1 = value;
  };
  protoOf(AnimationVector2D).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  protoOf(AnimationVector2D).toString = function () {
    return 'AnimationVector2D: v1 = ' + this.v1__1 + ', v2 = ' + this.v2__1;
  };
  protoOf(AnimationVector2D).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof AnimationVector2D) {
      tmp_0 = other.v1__1 === this.v1__1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.v2__1 === this.v2__1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AnimationVector2D).hashCode = function () {
    return imul(getNumberHashCode(this.v1__1), 31) + getNumberHashCode(this.v2__1) | 0;
  };
  function AnimationVector_0(v1, v2) {
    return new AnimationVector2D(v1, v2);
  }
  function AnimationVector3D(v1, v2, v3) {
    AnimationVector_3.call(this);
    this.v1__1 = v1;
    this.v2__1 = v2;
    this.v3__1 = v3;
    this.size_1 = 3;
  }
  protoOf(AnimationVector3D).set_v1_fqnkfk_k$ = function (_set____db54di) {
    this.v1__1 = _set____db54di;
  };
  protoOf(AnimationVector3D).get_v1_kntnng_k$ = function () {
    return this.v1__1;
  };
  protoOf(AnimationVector3D).set_v2_y2tbpr_k$ = function (_set____db54di) {
    this.v2__1 = _set____db54di;
  };
  protoOf(AnimationVector3D).get_v2_kntnnf_k$ = function () {
    return this.v2__1;
  };
  protoOf(AnimationVector3D).set_v3_im4yz6_k$ = function (_set____db54di) {
    this.v3__1 = _set____db54di;
  };
  protoOf(AnimationVector3D).get_v3_kntnne_k$ = function () {
    return this.v3__1;
  };
  protoOf(AnimationVector3D).reset_5u6xz3_k$ = function () {
    this.v1__1 = 0.0;
    this.v2__1 = 0.0;
    this.v3__1 = 0.0;
  };
  protoOf(AnimationVector3D).newVector_8o1gcd_k$ = function () {
    return new AnimationVector3D(0.0, 0.0, 0.0);
  };
  protoOf(AnimationVector3D).get_c1px32_k$ = function (index) {
    switch (index) {
      case 0:
        return this.v1__1;
      case 1:
        return this.v2__1;
      case 2:
        return this.v3__1;
      default:
        return 0.0;
    }
  };
  protoOf(AnimationVector3D).set_4eugj6_k$ = function (index, value) {
    switch (index) {
      case 0:
        this.v1__1 = value;
        break;
      case 1:
        this.v2__1 = value;
        break;
      case 2:
        this.v3__1 = value;
        break;
    }
  };
  protoOf(AnimationVector3D).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  protoOf(AnimationVector3D).toString = function () {
    return 'AnimationVector3D: v1 = ' + this.v1__1 + ', v2 = ' + this.v2__1 + ', v3 = ' + this.v3__1;
  };
  protoOf(AnimationVector3D).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof AnimationVector3D) {
      tmp_1 = other.v1__1 === this.v1__1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = other.v2__1 === this.v2__1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.v3__1 === this.v3__1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AnimationVector3D).hashCode = function () {
    return imul(imul(getNumberHashCode(this.v1__1), 31) + getNumberHashCode(this.v2__1) | 0, 31) + getNumberHashCode(this.v3__1) | 0;
  };
  function AnimationVector_1(v1, v2, v3) {
    return new AnimationVector3D(v1, v2, v3);
  }
  function AnimationVector4D(v1, v2, v3, v4) {
    AnimationVector_3.call(this);
    this.v1__1 = v1;
    this.v2__1 = v2;
    this.v3__1 = v3;
    this.v4__1 = v4;
    this.size_1 = 4;
  }
  protoOf(AnimationVector4D).set_v1_fqnkfk_k$ = function (_set____db54di) {
    this.v1__1 = _set____db54di;
  };
  protoOf(AnimationVector4D).get_v1_kntnng_k$ = function () {
    return this.v1__1;
  };
  protoOf(AnimationVector4D).set_v2_y2tbpr_k$ = function (_set____db54di) {
    this.v2__1 = _set____db54di;
  };
  protoOf(AnimationVector4D).get_v2_kntnnf_k$ = function () {
    return this.v2__1;
  };
  protoOf(AnimationVector4D).set_v3_im4yz6_k$ = function (_set____db54di) {
    this.v3__1 = _set____db54di;
  };
  protoOf(AnimationVector4D).get_v3_kntnne_k$ = function () {
    return this.v3__1;
  };
  protoOf(AnimationVector4D).set_v4_9z7oz_k$ = function (_set____db54di) {
    this.v4__1 = _set____db54di;
  };
  protoOf(AnimationVector4D).get_v4_kntnnd_k$ = function () {
    return this.v4__1;
  };
  protoOf(AnimationVector4D).reset_5u6xz3_k$ = function () {
    this.v1__1 = 0.0;
    this.v2__1 = 0.0;
    this.v3__1 = 0.0;
    this.v4__1 = 0.0;
  };
  protoOf(AnimationVector4D).newVector_8o1gcd_k$ = function () {
    return new AnimationVector4D(0.0, 0.0, 0.0, 0.0);
  };
  protoOf(AnimationVector4D).get_c1px32_k$ = function (index) {
    switch (index) {
      case 0:
        return this.v1__1;
      case 1:
        return this.v2__1;
      case 2:
        return this.v3__1;
      case 3:
        return this.v4__1;
      default:
        return 0.0;
    }
  };
  protoOf(AnimationVector4D).set_4eugj6_k$ = function (index, value) {
    switch (index) {
      case 0:
        this.v1__1 = value;
        break;
      case 1:
        this.v2__1 = value;
        break;
      case 2:
        this.v3__1 = value;
        break;
      case 3:
        this.v4__1 = value;
        break;
    }
  };
  protoOf(AnimationVector4D).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  protoOf(AnimationVector4D).toString = function () {
    return 'AnimationVector4D: v1 = ' + this.v1__1 + ', v2 = ' + this.v2__1 + ', v3 = ' + this.v3__1 + ', v4 = ' + this.v4__1;
  };
  protoOf(AnimationVector4D).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof AnimationVector4D) {
      tmp_2 = other.v1__1 === this.v1__1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = other.v2__1 === this.v2__1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = other.v3__1 === this.v3__1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.v4__1 === this.v4__1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AnimationVector4D).hashCode = function () {
    return imul(imul(imul(getNumberHashCode(this.v1__1), 31) + getNumberHashCode(this.v2__1) | 0, 31) + getNumberHashCode(this.v3__1) | 0, 31) + getNumberHashCode(this.v4__1) | 0;
  };
  function AnimationVector_2(v1, v2, v3, v4) {
    return new AnimationVector4D(v1, v2, v3, v4);
  }
  function AnimationVector_3() {
  }
  function newInstance(_this__u8e3s4) {
    var tmp = _this__u8e3s4.newVector_8o1gcd_k$();
    return tmp instanceof AnimationVector_3 ? tmp : THROW_CCE();
  }
  function copy_1(_this__u8e3s4) {
    var newVector = newInstance(_this__u8e3s4);
    var inductionVariable = 0;
    var last = newVector.get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        newVector.set_4eugj6_k$(i, _this__u8e3s4.get_c1px32_k$(i));
      }
       while (inductionVariable < last);
    return newVector;
  }
  function copyFrom(_this__u8e3s4, source) {
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _this__u8e3s4.set_4eugj6_k$(i, source.get_c1px32_k$(i));
      }
       while (inductionVariable < last);
  }
  function _set__real__ba78tk($this, _set____db54di) {
    $this._real_1 = _set____db54di;
  }
  function _get__real__kqx7nw($this) {
    return $this._real_1;
  }
  function _set__imaginary__jvragz($this, _set____db54di) {
    $this._imaginary_1 = _set____db54di;
  }
  function _get__imaginary__yxzvm7($this) {
    return $this._imaginary_1;
  }
  function component1($this) {
    return $this._real_1;
  }
  function component2($this) {
    return $this._imaginary_1;
  }
  function ComplexDouble(_real, _imaginary) {
    this._real_1 = _real;
    this._imaginary_1 = _imaginary;
  }
  protoOf(ComplexDouble).get_real_wotl9j_k$ = function () {
    return this._real_1;
  };
  protoOf(ComplexDouble).get_imaginary_5xnno0_k$ = function () {
    return this._imaginary_1;
  };
  protoOf(ComplexDouble).plus_pjpmi4_k$ = function (other) {
    this._real_1 = this._real_1 + other;
    return this;
  };
  protoOf(ComplexDouble).plus_xwp0rb_k$ = function (other) {
    this._real_1 = this._real_1 + other.get_real_wotl9j_k$();
    this._imaginary_1 = this._imaginary_1 + other.get_imaginary_5xnno0_k$();
    return this;
  };
  protoOf(ComplexDouble).minus_ur3tau_k$ = function (other) {
    // Inline function 'androidx.compose.animation.core.ComplexDouble.plus' call
    var other_0 = -other;
    this._real_1 = this._real_1 + other_0;
    return this;
  };
  protoOf(ComplexDouble).minus_t2x165_k$ = function (other) {
    // Inline function 'androidx.compose.animation.core.ComplexDouble.plus' call
    // Inline function 'androidx.compose.animation.core.ComplexDouble.unaryMinus' call
    other._real_1 = other._real_1 * -1;
    other._imaginary_1 = other._imaginary_1 * -1;
    this._real_1 = this._real_1 + other.get_real_wotl9j_k$();
    this._imaginary_1 = this._imaginary_1 + other.get_imaginary_5xnno0_k$();
    return this;
  };
  protoOf(ComplexDouble).times_qz1dds_k$ = function (other) {
    this._real_1 = this._real_1 * other;
    this._imaginary_1 = this._imaginary_1 * other;
    return this;
  };
  protoOf(ComplexDouble).times_u3krpf_k$ = function (other) {
    this._real_1 = this.get_real_wotl9j_k$() * other.get_real_wotl9j_k$() - this.get_imaginary_5xnno0_k$() * other.get_imaginary_5xnno0_k$();
    this._imaginary_1 = this.get_real_wotl9j_k$() * other.get_imaginary_5xnno0_k$() + other.get_real_wotl9j_k$() * this.get_imaginary_5xnno0_k$();
    return this;
  };
  protoOf(ComplexDouble).unaryMinus_6uz0qp_k$ = function () {
    this._real_1 = this._real_1 * -1;
    this._imaginary_1 = this._imaginary_1 * -1;
    return this;
  };
  protoOf(ComplexDouble).div_k6dnjf_k$ = function (other) {
    this._real_1 = this._real_1 / other;
    this._imaginary_1 = this._imaginary_1 / other;
    return this;
  };
  protoOf(ComplexDouble).copy_6r5gqz_k$ = function (_real, _imaginary) {
    return new ComplexDouble(_real, _imaginary);
  };
  protoOf(ComplexDouble).copy$default_xk22l4_k$ = function (_real, _imaginary, $super) {
    _real = _real === VOID ? this._real_1 : _real;
    _imaginary = _imaginary === VOID ? this._imaginary_1 : _imaginary;
    return $super === VOID ? this.copy_6r5gqz_k$(_real, _imaginary) : $super.copy_6r5gqz_k$.call(this, _real, _imaginary);
  };
  protoOf(ComplexDouble).toString = function () {
    return 'ComplexDouble(_real=' + this._real_1 + ', _imaginary=' + this._imaginary_1 + ')';
  };
  protoOf(ComplexDouble).hashCode = function () {
    var result = getNumberHashCode(this._real_1);
    result = imul(result, 31) + getNumberHashCode(this._imaginary_1) | 0;
    return result;
  };
  protoOf(ComplexDouble).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ComplexDouble))
      return false;
    var tmp0_other_with_cast = other instanceof ComplexDouble ? other : THROW_CCE();
    if (!equals(this._real_1, tmp0_other_with_cast._real_1))
      return false;
    if (!equals(this._imaginary_1, tmp0_other_with_cast._imaginary_1))
      return false;
    return true;
  };
  function plus(_this__u8e3s4, other) {
    // Inline function 'androidx.compose.animation.core.ComplexDouble.plus' call
    other._real_1 = other._real_1 + _this__u8e3s4;
    return other;
  }
  function complexSqrt(num) {
    var tmp;
    if (num < 0.0) {
      // Inline function 'kotlin.math.sqrt' call
      // Inline function 'kotlin.math.abs' call
      var x = Math.abs(num);
      var tmp$ret$1 = Math.sqrt(x);
      tmp = new ComplexDouble(0.0, tmp$ret$1);
    } else {
      // Inline function 'kotlin.math.sqrt' call
      var tmp$ret$2 = Math.sqrt(num);
      tmp = new ComplexDouble(tmp$ret$2, 0.0);
    }
    return tmp;
  }
  function minus(_this__u8e3s4, other) {
    // Inline function 'androidx.compose.animation.core.plus' call
    // Inline function 'androidx.compose.animation.core.ComplexDouble.unaryMinus' call
    other._real_1 = other._real_1 * -1;
    other._imaginary_1 = other._imaginary_1 * -1;
    // Inline function 'androidx.compose.animation.core.ComplexDouble.plus' call
    other._real_1 = other._real_1 + _this__u8e3s4;
    return other;
  }
  function DecayAnimationSpec() {
  }
  function get_FastOutSlowInEasing() {
    _init_properties_Easing_kt__v6fq45();
    return FastOutSlowInEasing;
  }
  var FastOutSlowInEasing;
  function get_LinearOutSlowInEasing() {
    _init_properties_Easing_kt__v6fq45();
    return LinearOutSlowInEasing;
  }
  var LinearOutSlowInEasing;
  function get_FastOutLinearInEasing() {
    _init_properties_Easing_kt__v6fq45();
    return FastOutLinearInEasing;
  }
  var FastOutLinearInEasing;
  function get_LinearEasing() {
    _init_properties_Easing_kt__v6fq45();
    return LinearEasing;
  }
  var LinearEasing;
  function Easing() {
  }
  function _get_a__7mlogg($this) {
    return $this.a_1;
  }
  function _get_b__7mlohb($this) {
    return $this.b_1;
  }
  function _get_c__7mloi6($this) {
    return $this.c_1;
  }
  function _get_d__7mloj1($this) {
    return $this.d_1;
  }
  function evaluateCubic($this, a, b, m) {
    return 3 * a * (1 - m) * (1 - m) * m + 3 * b * (1 - m) * m * m + m * m * m;
  }
  function CubicBezierEasing(a, b, c, d) {
    this.a_1 = a;
    this.b_1 = b;
    this.c_1 = c;
    this.d_1 = d;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(((!isNaN_0(this.a_1) ? !isNaN_0(this.b_1) : false) ? !isNaN_0(this.c_1) : false) ? !isNaN_0(this.d_1) : false)) {
      // Inline function 'androidx.compose.animation.core.CubicBezierEasing.<anonymous>' call
      var message = 'Parameters to CubicBezierEasing cannot be NaN. Actual parameters are: ' + this.a_1 + ', ' + this.b_1 + ', ' + this.c_1 + ', ' + this.d_1 + '.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(CubicBezierEasing).transform_twmo38_k$ = function (fraction) {
    if (fraction > 0.0 ? fraction < 1.0 : false) {
      var start = 0.0;
      var end = 1.0;
      while (true) {
        var midpoint = (start + end) / 2;
        var estimate = evaluateCubic(this, this.a_1, this.c_1, midpoint);
        // Inline function 'kotlin.math.absoluteValue' call
        var this_0 = fraction - estimate;
        if (Math.abs(this_0) < 0.001)
          return evaluateCubic(this, this.b_1, this.d_1, midpoint);
        if (estimate < fraction)
          start = midpoint;
        else
          end = midpoint;
      }
    } else {
      return fraction;
    }
  };
  protoOf(CubicBezierEasing).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof CubicBezierEasing) {
      tmp_2 = this.a_1 === other.a_1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.b_1 === other.b_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.c_1 === other.c_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.d_1 === other.d_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CubicBezierEasing).hashCode = function () {
    return imul(imul(imul(getNumberHashCode(this.a_1), 31) + getNumberHashCode(this.b_1) | 0, 31) + getNumberHashCode(this.c_1) | 0, 31) + getNumberHashCode(this.d_1) | 0;
  };
  function get_CubicErrorBound() {
    return CubicErrorBound;
  }
  var CubicErrorBound;
  function sam$androidx_compose_animation_core_Easing$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_core_Easing$0).transform_twmo38_k$ = function (fraction) {
    return this.function_1(fraction);
  };
  function LinearEasing$lambda(fraction) {
    _init_properties_Easing_kt__v6fq45();
    return fraction;
  }
  var properties_initialized_Easing_kt_af4f4d;
  function _init_properties_Easing_kt__v6fq45() {
    if (!properties_initialized_Easing_kt_af4f4d) {
      properties_initialized_Easing_kt_af4f4d = true;
      FastOutSlowInEasing = new CubicBezierEasing(0.4, 0.0, 0.2, 1.0);
      LinearOutSlowInEasing = new CubicBezierEasing(0.0, 0.0, 0.2, 1.0);
      FastOutLinearInEasing = new CubicBezierEasing(0.4, 0.0, 1.0, 1.0);
      var tmp = LinearEasing$lambda;
      LinearEasing = new sam$androidx_compose_animation_core_Easing$0(tmp);
    }
  }
  function get_Ease() {
    _init_properties_EasingFunctions_kt__whrude();
    return Ease;
  }
  var Ease;
  function get_EaseOut() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseOut;
  }
  var EaseOut;
  function get_EaseIn() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseIn;
  }
  var EaseIn;
  function get_EaseInOut() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInOut;
  }
  var EaseInOut;
  function get_EaseInSine() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInSine;
  }
  var EaseInSine;
  function get_EaseOutSine() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseOutSine;
  }
  var EaseOutSine;
  function get_EaseInOutSine() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInOutSine;
  }
  var EaseInOutSine;
  function get_EaseInCubic() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInCubic;
  }
  var EaseInCubic;
  function get_EaseOutCubic() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseOutCubic;
  }
  var EaseOutCubic;
  function get_EaseInOutCubic() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInOutCubic;
  }
  var EaseInOutCubic;
  function get_EaseInQuint() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInQuint;
  }
  var EaseInQuint;
  function get_EaseOutQuint() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseOutQuint;
  }
  var EaseOutQuint;
  function get_EaseInOutQuint() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInOutQuint;
  }
  var EaseInOutQuint;
  function get_EaseInCirc() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInCirc;
  }
  var EaseInCirc;
  function get_EaseOutCirc() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseOutCirc;
  }
  var EaseOutCirc;
  function get_EaseInOutCirc() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInOutCirc;
  }
  var EaseInOutCirc;
  function get_EaseInQuad() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInQuad;
  }
  var EaseInQuad;
  function get_EaseOutQuad() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseOutQuad;
  }
  var EaseOutQuad;
  function get_EaseInOutQuad() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInOutQuad;
  }
  var EaseInOutQuad;
  function get_EaseInQuart() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInQuart;
  }
  var EaseInQuart;
  function get_EaseOutQuart() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseOutQuart;
  }
  var EaseOutQuart;
  function get_EaseInOutQuart() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInOutQuart;
  }
  var EaseInOutQuart;
  function get_EaseInExpo() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInExpo;
  }
  var EaseInExpo;
  function get_EaseOutExpo() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseOutExpo;
  }
  var EaseOutExpo;
  function get_EaseInOutExpo() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInOutExpo;
  }
  var EaseInOutExpo;
  function get_EaseInBack() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInBack;
  }
  var EaseInBack;
  function get_EaseOutBack() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseOutBack;
  }
  var EaseOutBack;
  function get_EaseInOutBack() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInOutBack;
  }
  var EaseInOutBack;
  function get_EaseInElastic() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInElastic;
  }
  var EaseInElastic;
  function get_EaseOutElastic() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseOutElastic;
  }
  var EaseOutElastic;
  function get_EaseInOutElastic() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInOutElastic;
  }
  var EaseInOutElastic;
  function get_EaseOutBounce() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseOutBounce;
  }
  var EaseOutBounce;
  function get_EaseInBounce() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInBounce;
  }
  var EaseInBounce;
  function get_EaseInOutBounce() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInOutBounce;
  }
  var EaseInOutBounce;
  function sam$androidx_compose_animation_core_Easing$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_core_Easing$0_0).transform_twmo38_k$ = function (fraction) {
    return this.function_1(fraction);
  };
  function sam$androidx_compose_animation_core_Easing$0_1(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_core_Easing$0_1).transform_twmo38_k$ = function (fraction) {
    return this.function_1(fraction);
  };
  function sam$androidx_compose_animation_core_Easing$0_2(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_core_Easing$0_2).transform_twmo38_k$ = function (fraction) {
    return this.function_1(fraction);
  };
  function sam$androidx_compose_animation_core_Easing$0_3(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_core_Easing$0_3).transform_twmo38_k$ = function (fraction) {
    return this.function_1(fraction);
  };
  function sam$androidx_compose_animation_core_Easing$0_4(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_core_Easing$0_4).transform_twmo38_k$ = function (fraction) {
    return this.function_1(fraction);
  };
  function sam$androidx_compose_animation_core_Easing$0_5(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_core_Easing$0_5).transform_twmo38_k$ = function (fraction) {
    return this.function_1(fraction);
  };
  function EaseInElastic$lambda(fraction) {
    _init_properties_EasingFunctions_kt__whrude();
    var c4 = 2.0 * get_PI() / 3.0;
    var tmp;
    switch (fraction) {
      case 0.0:
        tmp = 0.0;
        break;
      case 1.0:
        tmp = 1.0;
        break;
      default:
        // Inline function 'kotlin.math.pow' call

        var x = 10.0 * fraction - 10.0;
        var tmp_0 = -Math.pow(2.0, x);
        // Inline function 'kotlin.math.sin' call

        var x_0 = (fraction * 10.0 - 10.75) * c4;
        tmp = tmp_0 * Math.sin(x_0);
        break;
    }
    return tmp;
  }
  function EaseOutElastic$lambda(fraction) {
    _init_properties_EasingFunctions_kt__whrude();
    var c4 = 2.0 * get_PI() / 3.0;
    var tmp;
    switch (fraction) {
      case 0.0:
        tmp = 0.0;
        break;
      case 1.0:
        tmp = 1.0;
        break;
      default:
        // Inline function 'kotlin.math.pow' call

        var x = -10.0 * fraction;
        var tmp_0 = Math.pow(2.0, x);
        // Inline function 'kotlin.math.sin' call

        var x_0 = (fraction * 10.0 - 0.75) * c4;
        tmp = tmp_0 * Math.sin(x_0) + 1.0;
        break;
    }
    return tmp;
  }
  function EaseInOutElastic$lambda(fraction) {
    _init_properties_EasingFunctions_kt__whrude();
    var c5 = 2.0 * get_PI() / 4.5;
    var tmp;
    if (fraction === 0.0) {
      tmp = 0.0;
    } else if (fraction === 1.0) {
      tmp = 1.0;
    } else if (0.0 <= fraction ? fraction <= 0.5 : false) {
      // Inline function 'kotlin.math.pow' call
      var x = 20.0 * fraction - 10.0;
      var tmp_0 = Math.pow(2.0, x);
      // Inline function 'kotlin.math.sin' call
      var x_0 = (20.0 * fraction - 11.125) * c5;
      tmp = -(tmp_0 * Math.sin(x_0)) / 2.0;
    } else {
      // Inline function 'kotlin.math.pow' call
      var x_1 = -20.0 * fraction + 10.0;
      var tmp_1 = Math.pow(2.0, x_1);
      // Inline function 'kotlin.math.sin' call
      var x_2 = (fraction * 20.0 - 11.125) * c5;
      tmp = tmp_1 * Math.sin(x_2) / 2.0 + 1.0;
    }
    return tmp;
  }
  function EaseOutBounce$lambda(fraction) {
    _init_properties_EasingFunctions_kt__whrude();
    var n1 = 7.5625;
    var d1 = 2.75;
    var newFraction = fraction;
    var tmp;
    if (newFraction < 1.0 / d1) {
      tmp = n1 * newFraction * newFraction;
    } else if (newFraction < 2.0 / d1) {
      newFraction = newFraction - 1.5 / d1;
      tmp = n1 * newFraction * newFraction + 0.75;
    } else if (newFraction < 2.5 / d1) {
      newFraction = newFraction - 2.25 / d1;
      tmp = n1 * newFraction * newFraction + 0.9375;
    } else {
      newFraction = newFraction - 2.625 / d1;
      tmp = n1 * newFraction * newFraction + 0.984375;
    }
    return tmp;
  }
  function EaseInBounce$lambda(fraction) {
    _init_properties_EasingFunctions_kt__whrude();
    return 1 - get_EaseOutBounce().transform_twmo38_k$(1.0 - fraction);
  }
  function EaseInOutBounce$lambda(fraction) {
    _init_properties_EasingFunctions_kt__whrude();
    var tmp;
    if (fraction < 0.5) {
      tmp = (1 - get_EaseOutBounce().transform_twmo38_k$(1.0 - 2.0 * fraction)) / 2.0;
    } else {
      tmp = (1 + get_EaseOutBounce().transform_twmo38_k$(2.0 * fraction - 1.0)) / 2.0;
    }
    return tmp;
  }
  var properties_initialized_EasingFunctions_kt_3rrobk;
  function _init_properties_EasingFunctions_kt__whrude() {
    if (!properties_initialized_EasingFunctions_kt_3rrobk) {
      properties_initialized_EasingFunctions_kt_3rrobk = true;
      Ease = new CubicBezierEasing(0.25, 0.1, 0.25, 1.0);
      EaseOut = new CubicBezierEasing(0.0, 0.0, 0.58, 1.0);
      EaseIn = new CubicBezierEasing(0.42, 0.0, 1.0, 1.0);
      EaseInOut = new CubicBezierEasing(0.42, 0.0, 0.58, 1.0);
      EaseInSine = new CubicBezierEasing(0.12, 0.0, 0.39, 0.0);
      EaseOutSine = new CubicBezierEasing(0.61, 1.0, 0.88, 1.0);
      EaseInOutSine = new CubicBezierEasing(0.37, 0.0, 0.63, 1.0);
      EaseInCubic = new CubicBezierEasing(0.32, 0.0, 0.67, 0.0);
      EaseOutCubic = new CubicBezierEasing(0.33, 1.0, 0.68, 1.0);
      EaseInOutCubic = new CubicBezierEasing(0.65, 0.0, 0.35, 1.0);
      EaseInQuint = new CubicBezierEasing(0.64, 0.0, 0.78, 0.0);
      EaseOutQuint = new CubicBezierEasing(0.22, 1.0, 0.36, 1.0);
      EaseInOutQuint = new CubicBezierEasing(0.83, 0.0, 0.17, 1.0);
      EaseInCirc = new CubicBezierEasing(0.55, 0.0, 1.0, 0.45);
      EaseOutCirc = new CubicBezierEasing(0.0, 0.55, 0.45, 1.0);
      EaseInOutCirc = new CubicBezierEasing(0.85, 0.0, 0.15, 1.0);
      EaseInQuad = new CubicBezierEasing(0.11, 0.0, 0.5, 0.0);
      EaseOutQuad = new CubicBezierEasing(0.5, 1.0, 0.89, 1.0);
      EaseInOutQuad = new CubicBezierEasing(0.45, 0.0, 0.55, 1.0);
      EaseInQuart = new CubicBezierEasing(0.5, 0.0, 0.75, 0.0);
      EaseOutQuart = new CubicBezierEasing(0.25, 1.0, 0.5, 1.0);
      EaseInOutQuart = new CubicBezierEasing(0.76, 0.0, 0.24, 1.0);
      EaseInExpo = new CubicBezierEasing(0.7, 0.0, 0.84, 0.0);
      EaseOutExpo = new CubicBezierEasing(0.16, 1.0, 0.3, 1.0);
      EaseInOutExpo = new CubicBezierEasing(0.87, 0.0, 0.13, 1.0);
      EaseInBack = new CubicBezierEasing(0.36, 0.0, 0.66, -0.56);
      EaseOutBack = new CubicBezierEasing(0.34, 1.56, 0.64, 1.0);
      EaseInOutBack = new CubicBezierEasing(0.68, -0.6, 0.32, 1.6);
      var tmp = EaseInElastic$lambda;
      EaseInElastic = new sam$androidx_compose_animation_core_Easing$0_0(tmp);
      var tmp_0 = EaseOutElastic$lambda;
      EaseOutElastic = new sam$androidx_compose_animation_core_Easing$0_1(tmp_0);
      var tmp_1 = EaseInOutElastic$lambda;
      EaseInOutElastic = new sam$androidx_compose_animation_core_Easing$0_2(tmp_1);
      var tmp_2 = EaseOutBounce$lambda;
      EaseOutBounce = new sam$androidx_compose_animation_core_Easing$0_3(tmp_2);
      var tmp_3 = EaseInBounce$lambda;
      EaseInBounce = new sam$androidx_compose_animation_core_Easing$0_4(tmp_3);
      var tmp_4 = EaseInOutBounce$lambda;
      EaseInOutBounce = new sam$androidx_compose_animation_core_Easing$0_5(tmp_4);
    }
  }
  function ExperimentalTransitionApi() {
  }
  protoOf(ExperimentalTransitionApi).equals = function (other) {
    if (!(other instanceof ExperimentalTransitionApi))
      return false;
    other instanceof ExperimentalTransitionApi || THROW_CCE();
    return true;
  };
  protoOf(ExperimentalTransitionApi).hashCode = function () {
    return 0;
  };
  protoOf(ExperimentalTransitionApi).toString = function () {
    return '@androidx.compose.animation.core.ExperimentalTransitionApi()';
  };
  function FloatAnimationSpec() {
  }
  function _get_visibilityThreshold__cvk72g_0($this) {
    return $this.visibilityThreshold_1;
  }
  function _get_spring__4s3m3i($this) {
    return $this.spring_1;
  }
  function FloatSpringSpec(dampingRatio, stiffness, visibilityThreshold) {
    dampingRatio = dampingRatio === VOID ? Spring_getInstance().get_DampingRatioNoBouncy_45ga5r_k$() : dampingRatio;
    stiffness = stiffness === VOID ? Spring_getInstance().get_StiffnessMedium_mjh6r9_k$() : stiffness;
    visibilityThreshold = visibilityThreshold === VOID ? Spring_getInstance().get_DefaultDisplacementThreshold_1c58p0_k$() : visibilityThreshold;
    this.dampingRatio_1 = dampingRatio;
    this.stiffness_1 = stiffness;
    this.visibilityThreshold_1 = visibilityThreshold;
    var tmp = this;
    // Inline function 'kotlin.also' call
    var this_0 = new SpringSimulation(1.0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.animation.core.FloatSpringSpec.spring.<anonymous>' call
    this_0.set_dampingRatio_1d4jya_k$(this.dampingRatio_1);
    this_0.set_stiffness_89bnwm_k$(this.stiffness_1);
    tmp.spring_1 = this_0;
  }
  protoOf(FloatSpringSpec).get_dampingRatio_syjss2_k$ = function () {
    return this.dampingRatio_1;
  };
  protoOf(FloatSpringSpec).get_stiffness_dt2sgm_k$ = function () {
    return this.stiffness_1;
  };
  protoOf(FloatSpringSpec).getValueFromNanos_rdghrw_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.div_jun7gj_k$(get_MillisToNanos());
    this.spring_1.set_finalPosition_7mu6km_k$(targetValue);
    var value = _Motion___get_value__impl__e0x31d(this.spring_1.updateValues_1oxjyh_k$(initialValue, initialVelocity, playTimeMillis));
    return value;
  };
  protoOf(FloatSpringSpec).getVelocityFromNanos_d1b1ck_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.div_jun7gj_k$(get_MillisToNanos());
    this.spring_1.set_finalPosition_7mu6km_k$(targetValue);
    var velocity = _Motion___get_velocity__impl__h2mglt(this.spring_1.updateValues_1oxjyh_k$(initialValue, initialVelocity, playTimeMillis));
    return velocity;
  };
  protoOf(FloatSpringSpec).getEndVelocity_jstvkm_k$ = function (initialValue, targetValue, initialVelocity) {
    return 0.0;
  };
  protoOf(FloatSpringSpec).getDurationNanos_taoclf_k$ = function (initialValue, targetValue, initialVelocity) {
    var tmp0_stiffness = this.spring_1.get_stiffness_dt2sgm_k$();
    var tmp1_dampingRatio = this.spring_1.get_dampingRatio_syjss2_k$();
    var tmp2_initialDisplacement = (initialValue - targetValue) / this.visibilityThreshold_1;
    var tmp3_initialVelocity = initialVelocity / this.visibilityThreshold_1;
    return estimateAnimationDurationMillis(tmp0_stiffness, tmp1_dampingRatio, tmp3_initialVelocity, tmp2_initialDisplacement, 1.0).times_nfzjiw_k$(get_MillisToNanos());
  };
  protoOf(FloatSpringSpec).vectorize_pto10n_k$ = function (converter) {
    return this.vectorize_7dxvko_k$(converter);
  };
  function _get_easing__5ar9kw($this) {
    return $this.easing_1;
  }
  function clampPlayTime($this, playTime) {
    // Inline function 'kotlin.Long.minus' call
    var other = $this.delay_1;
    var tmp$ret$0 = playTime.minus_mfbszm_k$(toLong(other));
    return coerceIn_0(tmp$ret$0, new Long(0, 0), toLong($this.duration_1));
  }
  function FloatTweenSpec(duration, delay, easing) {
    duration = duration === VOID ? AnimationConstants_getInstance().get_DefaultDurationMillis_kgwre6_k$() : duration;
    delay = delay === VOID ? 0 : delay;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    this.duration_1 = duration;
    this.delay_1 = delay;
    this.easing_1 = easing;
  }
  protoOf(FloatTweenSpec).get_duration_6a6kpp_k$ = function () {
    return this.duration_1;
  };
  protoOf(FloatTweenSpec).get_delay_iq7n8a_k$ = function () {
    return this.delay_1;
  };
  protoOf(FloatTweenSpec).getValueFromNanos_rdghrw_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.div_jun7gj_k$(get_MillisToNanos());
    var clampedPlayTime = clampPlayTime(this, playTimeMillis);
    var tmp;
    if (this.duration_1 === 0) {
      tmp = 1.0;
    } else {
      // Inline function 'kotlin.Long.div' call
      var other = this.duration_1;
      tmp = clampedPlayTime.toFloat_jhbgwv_k$() / other;
    }
    var rawFraction = tmp;
    var fraction = this.easing_1.transform_twmo38_k$(coerceIn(rawFraction, 0.0, 1.0));
    return lerp(initialValue, targetValue, fraction);
  };
  protoOf(FloatTweenSpec).getDurationNanos_taoclf_k$ = function (initialValue, targetValue, initialVelocity) {
    return numberToLong(this.delay_1 + this.duration_1 | 0).times_nfzjiw_k$(get_MillisToNanos());
  };
  protoOf(FloatTweenSpec).getVelocityFromNanos_d1b1ck_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.div_jun7gj_k$(get_MillisToNanos());
    var clampedPlayTime = clampPlayTime(this, playTimeMillis);
    if (clampedPlayTime.compareTo_9jj042_k$(new Long(0, 0)) < 0) {
      return 0.0;
    } else if (clampedPlayTime.equals(new Long(0, 0))) {
      return initialVelocity;
    }
    // Inline function 'kotlin.Long.minus' call
    var tmp$ret$0 = clampedPlayTime.minus_mfbszm_k$(toLong(1));
    var startNum = this.getValueFromNanos_rdghrw_k$(tmp$ret$0.times_nfzjiw_k$(get_MillisToNanos()), initialValue, targetValue, initialVelocity);
    var endNum = this.getValueFromNanos_rdghrw_k$(clampedPlayTime.times_nfzjiw_k$(get_MillisToNanos()), initialValue, targetValue, initialVelocity);
    return (endNum - startNum) * 1000.0;
  };
  protoOf(FloatTweenSpec).vectorize_pto10n_k$ = function (converter) {
    return this.vectorize_7dxvko_k$(converter);
  };
  function withInfiniteAnimationFrameNanos(onFrame, $completion) {
    var tmp = new $withInfiniteAnimationFrameNanosCOROUTINE$0(onFrame, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function withInfiniteAnimationFrameNanos$slambda($onFrame, resultContinuation) {
    this.$onFrame_1 = $onFrame;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(withInfiniteAnimationFrameNanos$slambda).invoke_ib42db_k$ = function ($completion) {
    var tmp = this.create_d196fn_k$($completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(withInfiniteAnimationFrameNanos$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = withFrameNanos(this.$onFrame_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  protoOf(withInfiniteAnimationFrameNanos$slambda).create_d196fn_k$ = function (completion) {
    return new withInfiniteAnimationFrameNanos$slambda(this.$onFrame_1, completion);
  };
  function withInfiniteAnimationFrameNanos$slambda_0($onFrame, resultContinuation) {
    var i = new withInfiniteAnimationFrameNanos$slambda($onFrame, resultContinuation);
    var l = function ($completion) {
      return i.invoke_ib42db_k$($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $withInfiniteAnimationFrameNanosCOROUTINE$0(onFrame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.onFrame_1 = onFrame;
  }
  protoOf($withInfiniteAnimationFrameNanosCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_0 = this;
            tmp_0.policy0__1 = this.get_context_h02k06_k$().get_y2st91_k$(Key_getInstance());
            if (this.policy0__1 == null) {
              this.set_state_rjd8d0_k$(2);
              suspendResult = withFrameNanos(this.onFrame_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(1);
              suspendResult = this.policy0__1.onInfiniteOperation_7vo0x_k$(withInfiniteAnimationFrameNanos$slambda_0(this.onFrame_1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.WHEN_RESULT1__1 = suspendResult;
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 2:
            this.WHEN_RESULT1__1 = suspendResult;
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.WHEN_RESULT1__1;
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
  function InternalAnimationApi() {
  }
  protoOf(InternalAnimationApi).equals = function (other) {
    if (!(other instanceof InternalAnimationApi))
      return false;
    other instanceof InternalAnimationApi || THROW_CCE();
    return true;
  };
  protoOf(InternalAnimationApi).hashCode = function () {
    return 0;
  };
  protoOf(InternalAnimationApi).toString = function () {
    return '@androidx.compose.animation.core.InternalAnimationApi()';
  };
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
  protoOf(Mutator).canInterrupt_jjffs4_k$ = function (other) {
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
      if (oldMutator == null ? true : mutator.canInterrupt_jjffs4_k$(oldMutator)) {
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
            this.mutator0__1 = new Mutator(this.$priority_1, ensureNotNull(this.$this$coroutineScope_1.get_coroutineContext_115oqo_k$().get_y2st91_k$(Key_getInstance_0())));
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
            this.mutator0__1 = new Mutator(this.$priority_1, ensureNotNull(this.$this$coroutineScope_1.get_coroutineContext_115oqo_k$().get_y2st91_k$(Key_getInstance_0())));
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
  protoOf(MutatorMutex).mutate_fsxm7f_k$ = function (priority, block, $completion) {
    return coroutineScope(MutatorMutex$mutate$slambda_0(priority, this, block, null), $completion);
  };
  protoOf(MutatorMutex).mutate$default_f05kjn_k$ = function (priority, block, $completion, $super) {
    priority = priority === VOID ? MutatePriority_Default_getInstance() : priority;
    return $super === VOID ? this.mutate_fsxm7f_k$(priority, block, $completion) : $super.mutate_fsxm7f_k$.call(this, priority, block, $completion);
  };
  protoOf(MutatorMutex).mutateWith_1xzeue_k$ = function (receiver, priority, block, $completion) {
    return coroutineScope(MutatorMutex$mutateWith$slambda_0(priority, this, block, receiver, null), $completion);
  };
  protoOf(MutatorMutex).mutateWith$default_i0v6ui_k$ = function (receiver, priority, block, $completion, $super) {
    priority = priority === VOID ? MutatePriority_Default_getInstance() : priority;
    return $super === VOID ? this.mutateWith_1xzeue_k$(receiver, priority, block, $completion) : $super.mutateWith_1xzeue_k$.call(this, receiver, priority, block, $completion);
  };
  var MutatePriority_Default_instance;
  var MutatePriority_UserInput_instance;
  var MutatePriority_PreventUserInput_instance;
  function values_1() {
    return [MutatePriority_Default_getInstance(), MutatePriority_UserInput_getInstance(), MutatePriority_PreventUserInput_getInstance()];
  }
  function valueOf_1(value) {
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
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
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
  var $ENTRIES_1;
  function MutatePriority(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
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
  function estimateAnimationDurationMillis(stiffness, dampingRatio, initialVelocity, initialDisplacement, delta) {
    return estimateAnimationDurationMillis_0(stiffness, dampingRatio, initialVelocity, initialDisplacement, delta);
  }
  function estimateAnimationDurationMillis_0(stiffness, dampingRatio, initialVelocity, initialDisplacement, delta) {
    var tmp = 2.0 * dampingRatio;
    // Inline function 'kotlin.math.sqrt' call
    var dampingCoefficient = tmp * Math.sqrt(stiffness);
    var partialRoot = dampingCoefficient * dampingCoefficient - 4.0 * stiffness;
    // Inline function 'androidx.compose.animation.core.ComplexDouble.times' call
    // Inline function 'androidx.compose.animation.core.plus' call
    var this_0 = -dampingCoefficient;
    // Inline function 'androidx.compose.animation.core.ComplexDouble.plus' call
    var this_1 = complexSqrt(partialRoot);
    _set__real__ba78tk(this_1, _get__real__kqx7nw(this_1) + this_0);
    _set__real__ba78tk(this_1, _get__real__kqx7nw(this_1) * 0.5);
    _set__imaginary__jvragz(this_1, _get__imaginary__yxzvm7(this_1) * 0.5);
    var firstRoot = this_1;
    // Inline function 'androidx.compose.animation.core.ComplexDouble.times' call
    // Inline function 'androidx.compose.animation.core.minus' call
    var this_2 = -dampingCoefficient;
    // Inline function 'androidx.compose.animation.core.plus' call
    // Inline function 'androidx.compose.animation.core.ComplexDouble.unaryMinus' call
    var this_3 = complexSqrt(partialRoot);
    _set__real__ba78tk(this_3, _get__real__kqx7nw(this_3) * -1);
    _set__imaginary__jvragz(this_3, _get__imaginary__yxzvm7(this_3) * -1);
    // Inline function 'androidx.compose.animation.core.ComplexDouble.plus' call
    _set__real__ba78tk(this_3, _get__real__kqx7nw(this_3) + this_2);
    _set__real__ba78tk(this_3, _get__real__kqx7nw(this_3) * 0.5);
    _set__imaginary__jvragz(this_3, _get__imaginary__yxzvm7(this_3) * 0.5);
    var secondRoot = this_3;
    return estimateDurationInternal(firstRoot, secondRoot, dampingRatio, initialVelocity, initialDisplacement, delta);
  }
  function estimateDurationInternal(firstRoot, secondRoot, dampingRatio, initialVelocity, initialPosition, delta) {
    if (initialPosition === 0.0 ? initialVelocity === 0.0 : false) {
      return new Long(0, 0);
    }
    var v0 = initialPosition < 0.0 ? -initialVelocity : initialVelocity;
    // Inline function 'kotlin.math.abs' call
    var p0 = Math.abs(initialPosition);
    return numberToLong((dampingRatio > 1.0 ? estimateOverDamped(firstRoot, secondRoot, p0, v0, delta) : dampingRatio < 1.0 ? estimateUnderDamped(firstRoot, p0, v0, delta) : estimateCriticallyDamped(firstRoot, p0, v0, delta)) * 1000.0);
  }
  function estimateOverDamped(firstRoot, secondRoot, p0, v0, delta) {
    var r1 = firstRoot.get_real_wotl9j_k$();
    var r2 = secondRoot.get_real_wotl9j_k$();
    var c2 = (r1 * p0 - v0) / (r1 - r2);
    var c1 = p0 - c2;
    // Inline function 'kotlin.math.ln' call
    // Inline function 'kotlin.math.abs' call
    var x = delta / c1;
    var x_0 = Math.abs(x);
    var t1 = Math.log(x_0) / r1;
    // Inline function 'kotlin.math.ln' call
    // Inline function 'kotlin.math.abs' call
    var x_1 = delta / c2;
    var x_2 = Math.abs(x_1);
    var t2 = Math.log(x_2) / r2;
    var tmp;
    // Inline function 'androidx.compose.animation.core.isNotFinite' call
    if (!isFinite(t1)) {
      tmp = t2;
    } else {
      // Inline function 'androidx.compose.animation.core.isNotFinite' call
      if (!isFinite(t2)) {
        tmp = t1;
      } else {
        // Inline function 'kotlin.math.max' call
        tmp = Math.max(t1, t2);
      }
    }
    var tCurr = tmp;
    // Inline function 'kotlin.math.ln' call
    var x_3 = c1 * r1 / (-c2 * r2);
    var tInflection = Math.log(x_3) / (r2 - r1);
    var tmp_0;
    if (isNaN_1(tInflection) ? true : tInflection <= 0.0) {
      tmp_0 = -delta;
    } else if (tInflection > 0.0 ? -estimateOverDamped$xInflection(c1, r1, tInflection, c2, r2) < delta : false) {
      if (c2 > 0.0 ? c1 < 0.0 : false) {
        tCurr = 0.0;
      }
      tmp_0 = -delta;
    } else {
      // Inline function 'kotlin.math.ln' call
      var x_4 = -(c2 * r2 * r2) / (c1 * r1 * r1);
      tCurr = Math.log(x_4) / (r1 - r2);
      tmp_0 = delta;
    }
    var signedDelta = tmp_0;
    // Inline function 'kotlin.math.abs' call
    var tmp_1 = c1 * r1;
    // Inline function 'kotlin.math.exp' call
    var x_5 = r1 * tCurr;
    var tmp_2 = tmp_1 * Math.exp(x_5);
    var tmp_3 = c2 * r2;
    // Inline function 'kotlin.math.exp' call
    var x_6 = r2 * tCurr;
    var x_7 = tmp_2 + tmp_3 * Math.exp(x_6);
    if (Math.abs(x_7) < 1.0E-4) {
      return tCurr;
    }
    var tDelta = DoubleCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$();
    var iterations = 0;
    while (tDelta > 0.001 ? iterations < 100 : false) {
      iterations = iterations + 1 | 0;
      var tLast = tCurr;
      // Inline function 'androidx.compose.animation.core.iterateNewtonsMethod' call
      var x_8 = tCurr;
      // Inline function 'androidx.compose.animation.core.estimateOverDamped.<anonymous>' call
      // Inline function 'kotlin.math.exp' call
      var x_9 = r1 * x_8;
      var tmp_4 = c1 * Math.exp(x_9);
      // Inline function 'kotlin.math.exp' call
      var x_10 = r2 * x_8;
      var tmp_5 = tmp_4 + c2 * Math.exp(x_10) + signedDelta;
      // Inline function 'androidx.compose.animation.core.estimateOverDamped.<anonymous>' call
      var tmp_6 = c1 * r1;
      // Inline function 'kotlin.math.exp' call
      var x_11 = r1 * x_8;
      var tmp_7 = tmp_6 * Math.exp(x_11);
      var tmp_8 = c2 * r2;
      // Inline function 'kotlin.math.exp' call
      var x_12 = r2 * x_8;
      tCurr = x_8 - tmp_5 / (tmp_7 + tmp_8 * Math.exp(x_12));
      // Inline function 'kotlin.math.abs' call
      var x_13 = tLast - tCurr;
      tDelta = Math.abs(x_13);
    }
    return tCurr;
  }
  function estimateUnderDamped(firstRoot, p0, v0, delta) {
    var r = firstRoot.get_real_wotl9j_k$();
    var c1 = p0;
    var c2 = (v0 - r * c1) / firstRoot.get_imaginary_5xnno0_k$();
    // Inline function 'kotlin.math.sqrt' call
    var x = c1 * c1 + c2 * c2;
    var c = Math.sqrt(x);
    // Inline function 'kotlin.math.ln' call
    var x_0 = delta / c;
    return Math.log(x_0) / r;
  }
  function estimateCriticallyDamped(firstRoot, p0, v0, delta) {
    var r = firstRoot.get_real_wotl9j_k$();
    var c1 = p0;
    var c2 = v0 - r * c1;
    // Inline function 'kotlin.math.ln' call
    // Inline function 'kotlin.math.abs' call
    var x = delta / c1;
    var x_0 = Math.abs(x);
    var t1 = Math.log(x_0) / r;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.animation.core.estimateCriticallyDamped.<anonymous>' call
    // Inline function 'kotlin.math.ln' call
    // Inline function 'kotlin.math.abs' call
    var x_1 = delta / c2;
    var x_2 = Math.abs(x_1);
    var guess = Math.log(x_2);
    var t = guess;
    var inductionVariable = 0;
    if (inductionVariable <= 5)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.math.ln' call
        // Inline function 'kotlin.math.abs' call
        var x_3 = t / r;
        var x_4 = Math.abs(x_3);
        t = guess - Math.log(x_4);
      }
       while (inductionVariable <= 5);
    var t2 = t / r;
    var tmp;
    // Inline function 'androidx.compose.animation.core.isNotFinite' call
    if (!isFinite(t1)) {
      tmp = t2;
    } else {
      // Inline function 'androidx.compose.animation.core.isNotFinite' call
      if (!isFinite(t2)) {
        tmp = t1;
      } else {
        // Inline function 'kotlin.math.max' call
        tmp = Math.max(t1, t2);
      }
    }
    var tCurr = tmp;
    var tInflection = -(r * c1 + c2) / (r * c2);
    // Inline function 'kotlin.math.exp' call
    var x_5 = r * tInflection;
    var tmp_0 = c1 * Math.exp(x_5);
    var tmp_1 = c2 * tInflection;
    // Inline function 'kotlin.math.exp' call
    var x_6 = r * tInflection;
    var xInflection = tmp_0 + tmp_1 * Math.exp(x_6);
    var tmp_2;
    if (isNaN_1(tInflection) ? true : tInflection <= 0.0) {
      tmp_2 = -delta;
    } else if (tInflection > 0.0 ? -xInflection < delta : false) {
      if (c2 < 0.0 ? c1 > 0.0 : false) {
        tCurr = 0.0;
      }
      tmp_2 = -delta;
    } else {
      var tConcavChange = -(2.0 / r) - c1 / c2;
      tCurr = tConcavChange;
      tmp_2 = delta;
    }
    var signedDelta = tmp_2;
    var tDelta = DoubleCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$();
    var iterations = 0;
    while (tDelta > 0.001 ? iterations < 100 : false) {
      iterations = iterations + 1 | 0;
      var tLast = tCurr;
      // Inline function 'androidx.compose.animation.core.iterateNewtonsMethod' call
      var x_7 = tCurr;
      // Inline function 'androidx.compose.animation.core.estimateCriticallyDamped.<anonymous>' call
      var tmp_3 = c1 + c2 * x_7;
      // Inline function 'kotlin.math.exp' call
      var x_8 = r * x_7;
      var tmp_4 = tmp_3 * Math.exp(x_8) + signedDelta;
      // Inline function 'androidx.compose.animation.core.estimateCriticallyDamped.<anonymous>' call
      var tmp_5 = c2 * (r * x_7 + 1) + c1 * r;
      // Inline function 'kotlin.math.exp' call
      var x_9 = r * x_7;
      tCurr = x_7 - tmp_4 / (tmp_5 * Math.exp(x_9));
      // Inline function 'kotlin.math.abs' call
      var x_10 = tLast - tCurr;
      tDelta = Math.abs(x_10);
    }
    return tCurr;
  }
  function isNotFinite(_this__u8e3s4) {
    return !isFinite(_this__u8e3s4);
  }
  function iterateNewtonsMethod(x, fn, fnPrime) {
    return x - fn(x) / fnPrime(x);
  }
  function estimateOverDamped$xInflection(c1, r1, tInflection, c2, r2) {
    // Inline function 'kotlin.math.exp' call
    var x = r1 * tInflection;
    var tmp = c1 * Math.exp(x);
    // Inline function 'kotlin.math.exp' call
    var x_0 = r2 * tInflection;
    return tmp + c2 * Math.exp(x_0);
  }
  function get_UNSET() {
    return UNSET;
  }
  var UNSET;
  function _set_naturalFreq__cfwulg($this, _set____db54di) {
    $this.naturalFreq_1 = _set____db54di;
  }
  function _get_naturalFreq__sat11s($this) {
    return $this.naturalFreq_1;
  }
  function _set_initialized__9jqmof($this, _set____db54di) {
    $this.initialized_1 = _set____db54di;
  }
  function _get_initialized__kqnjnh($this) {
    return $this.initialized_1;
  }
  function _set_gammaPlus__bx2io4($this, _set____db54di) {
    $this.gammaPlus_1 = _set____db54di;
  }
  function _get_gammaPlus__tt72wg($this) {
    return $this.gammaPlus_1;
  }
  function _set_gammaMinus__cup5ta($this, _set____db54di) {
    $this.gammaMinus_1 = _set____db54di;
  }
  function _get_gammaMinus__27jfby($this) {
    return $this.gammaMinus_1;
  }
  function _set_dampedFreq__qkv21s($this, _set____db54di) {
    $this.dampedFreq_1 = _set____db54di;
  }
  function _get_dampedFreq__te0es4($this) {
    return $this.dampedFreq_1;
  }
  function init($this) {
    if ($this.initialized_1) {
      return Unit_getInstance();
    }
    if ($this.finalPosition_1 === UNSET) {
      throw IllegalStateException_init_$Create$('Error: Final position of the spring must be set before the animation starts');
    }
    var dampingRatioSquared = $this.dampingRatio_1 * $this.dampingRatio_1;
    if ($this.dampingRatio_1 > 1.0) {
      var tmp = $this;
      var tmp_0 = -$this.dampingRatio_1 * $this.naturalFreq_1;
      var tmp_1 = $this.naturalFreq_1;
      // Inline function 'kotlin.math.sqrt' call
      var x = dampingRatioSquared - 1;
      tmp.gammaPlus_1 = tmp_0 + tmp_1 * Math.sqrt(x);
      var tmp_2 = $this;
      var tmp_3 = -$this.dampingRatio_1 * $this.naturalFreq_1;
      var tmp_4 = $this.naturalFreq_1;
      // Inline function 'kotlin.math.sqrt' call
      var x_0 = dampingRatioSquared - 1;
      tmp_2.gammaMinus_1 = tmp_3 - tmp_4 * Math.sqrt(x_0);
    } else if ($this.dampingRatio_1 >= 0.0 ? $this.dampingRatio_1 < 1.0 : false) {
      var tmp_5 = $this;
      var tmp_6 = $this.naturalFreq_1;
      // Inline function 'kotlin.math.sqrt' call
      var x_1 = 1 - dampingRatioSquared;
      tmp_5.dampedFreq_1 = tmp_6 * Math.sqrt(x_1);
    }
    $this.initialized_1 = true;
  }
  function SpringSimulation(finalPosition) {
    this.finalPosition_1 = finalPosition;
    var tmp = this;
    // Inline function 'kotlin.math.sqrt' call
    var x = Spring_getInstance().get_StiffnessVeryLow_1smo6g_k$();
    tmp.naturalFreq_1 = Math.sqrt(x);
    this.initialized_1 = false;
    this.gammaPlus_1 = 0.0;
    this.gammaMinus_1 = 0.0;
    this.dampedFreq_1 = 0.0;
    this.dampingRatio_1 = Spring_getInstance().get_DampingRatioNoBouncy_45ga5r_k$();
  }
  protoOf(SpringSimulation).set_finalPosition_7mu6km_k$ = function (_set____db54di) {
    this.finalPosition_1 = _set____db54di;
  };
  protoOf(SpringSimulation).get_finalPosition_vxiffa_k$ = function () {
    return this.finalPosition_1;
  };
  protoOf(SpringSimulation).set_stiffness_89bnwm_k$ = function (value) {
    if (this.get_stiffness_dt2sgm_k$() <= 0.0) {
      throw IllegalArgumentException_init_$Create$('Spring stiffness constant must be positive.');
    }
    var tmp = this;
    // Inline function 'kotlin.math.sqrt' call
    tmp.naturalFreq_1 = Math.sqrt(value);
    this.initialized_1 = false;
  };
  protoOf(SpringSimulation).get_stiffness_dt2sgm_k$ = function () {
    return this.naturalFreq_1 * this.naturalFreq_1;
  };
  protoOf(SpringSimulation).set_dampingRatio_1d4jya_k$ = function (value) {
    if (value < 0.0) {
      throw IllegalArgumentException_init_$Create$('Damping ratio must be non-negative');
    }
    this.dampingRatio_1 = value;
    this.initialized_1 = false;
  };
  protoOf(SpringSimulation).get_dampingRatio_syjss2_k$ = function () {
    return this.dampingRatio_1;
  };
  protoOf(SpringSimulation).getAcceleration_ie4kmu_k$ = function (lastDisplacement, lastVelocity) {
    var adjustedDisplacement = lastDisplacement - this.finalPosition_1;
    var k = this.naturalFreq_1 * this.naturalFreq_1;
    var c = 2.0 * this.naturalFreq_1 * this.dampingRatio_1;
    return -k * adjustedDisplacement - c * lastVelocity;
  };
  protoOf(SpringSimulation).updateValues_1oxjyh_k$ = function (lastDisplacement, lastVelocity, timeElapsed) {
    init(this);
    var adjustedDisplacement = lastDisplacement - this.finalPosition_1;
    // Inline function 'kotlin.Long.div' call
    var deltaT = timeElapsed.toDouble_ygsx0s_k$() / 1000.0;
    var displacement;
    var currentVelocity;
    if (this.dampingRatio_1 > 1.0) {
      var coeffA = adjustedDisplacement - (this.gammaMinus_1 * adjustedDisplacement - lastVelocity) / (this.gammaMinus_1 - this.gammaPlus_1);
      var coeffB = (this.gammaMinus_1 * adjustedDisplacement - lastVelocity) / (this.gammaMinus_1 - this.gammaPlus_1);
      // Inline function 'kotlin.math.exp' call
      var x = this.gammaMinus_1 * deltaT;
      var tmp = coeffA * Math.exp(x);
      // Inline function 'kotlin.math.exp' call
      var x_0 = this.gammaPlus_1 * deltaT;
      displacement = tmp + coeffB * Math.exp(x_0);
      var tmp_0 = coeffA * this.gammaMinus_1;
      // Inline function 'kotlin.math.exp' call
      var x_1 = this.gammaMinus_1 * deltaT;
      var tmp_1 = tmp_0 * Math.exp(x_1);
      var tmp_2 = coeffB * this.gammaPlus_1;
      // Inline function 'kotlin.math.exp' call
      var x_2 = this.gammaPlus_1 * deltaT;
      currentVelocity = tmp_1 + tmp_2 * Math.exp(x_2);
    } else if (this.dampingRatio_1 === 1.0) {
      var coeffA_0 = adjustedDisplacement;
      var coeffB_0 = lastVelocity + this.naturalFreq_1 * adjustedDisplacement;
      var tmp_3 = coeffA_0 + coeffB_0 * deltaT;
      // Inline function 'kotlin.math.exp' call
      var x_3 = -this.naturalFreq_1 * deltaT;
      displacement = tmp_3 * Math.exp(x_3);
      var tmp_4 = coeffA_0 + coeffB_0 * deltaT;
      // Inline function 'kotlin.math.exp' call
      var x_4 = -this.naturalFreq_1 * deltaT;
      var tmp_5 = tmp_4 * Math.exp(x_4) * -this.naturalFreq_1;
      // Inline function 'kotlin.math.exp' call
      var x_5 = -this.naturalFreq_1 * deltaT;
      currentVelocity = tmp_5 + coeffB_0 * Math.exp(x_5);
    } else {
      var cosCoeff = adjustedDisplacement;
      var sinCoeff = 1 / this.dampedFreq_1 * (this.dampingRatio_1 * this.naturalFreq_1 * adjustedDisplacement + lastVelocity);
      // Inline function 'kotlin.math.exp' call
      var x_6 = -this.dampingRatio_1 * this.naturalFreq_1 * deltaT;
      var tmp_6 = Math.exp(x_6);
      // Inline function 'kotlin.math.cos' call
      var x_7 = this.dampedFreq_1 * deltaT;
      var tmp_7 = cosCoeff * Math.cos(x_7);
      // Inline function 'kotlin.math.sin' call
      var x_8 = this.dampedFreq_1 * deltaT;
      displacement = tmp_6 * (tmp_7 + sinCoeff * Math.sin(x_8));
      var tmp_8 = displacement * -this.naturalFreq_1 * this.dampingRatio_1;
      // Inline function 'kotlin.math.exp' call
      var x_9 = -this.dampingRatio_1 * this.naturalFreq_1 * deltaT;
      var tmp_9 = Math.exp(x_9);
      var tmp_10 = -this.dampedFreq_1 * cosCoeff;
      // Inline function 'kotlin.math.sin' call
      var x_10 = this.dampedFreq_1 * deltaT;
      var tmp_11 = tmp_10 * Math.sin(x_10);
      var tmp_12 = this.dampedFreq_1 * sinCoeff;
      // Inline function 'kotlin.math.cos' call
      var x_11 = this.dampedFreq_1 * deltaT;
      currentVelocity = tmp_8 + tmp_9 * (tmp_11 + tmp_12 * Math.cos(x_11));
    }
    var newValue = displacement + this.finalPosition_1;
    var newVelocity = currentVelocity;
    return Motion_0(newValue, newVelocity);
  };
  function _Motion___init__impl__vk56rv(packedValue) {
    return packedValue;
  }
  function _Motion___get_packedValue__impl__qymh4n($this) {
    return $this;
  }
  function _Motion___get_value__impl__e0x31d($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Motion___get_packedValue__impl__qymh4n($this);
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var bits = value.shr_9fl3wl_k$(32).toInt_1tsl84_k$();
    return floatFromBits(bits);
  }
  function _Motion___get_velocity__impl__h2mglt($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value = _Motion___get_packedValue__impl__qymh4n($this);
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var bits = value.and_4spn93_k$(new Long(-1, 0)).toInt_1tsl84_k$();
    return floatFromBits(bits);
  }
  function Motion__copy_impl_s0k26a($this, value, velocity) {
    return Motion_0(value, velocity);
  }
  function Motion__copy$default_impl_xgjc6z($this, value, velocity, $super) {
    value = value === VOID ? _Motion___get_value__impl__e0x31d($this) : value;
    velocity = velocity === VOID ? _Motion___get_velocity__impl__h2mglt($this) : velocity;
    var tmp;
    if ($super === VOID) {
      tmp = Motion__copy_impl_s0k26a($this, value, velocity);
    } else {
      var tmp_0 = $super;
      tmp = (tmp_0 == null ? null : new Motion(tmp_0)).copy_quaz9h_k$.call(new Motion($this), value, velocity).packedValue_1;
    }
    return tmp;
  }
  function Motion__toString_impl_wnrfdh($this) {
    return 'Motion(packedValue=' + $this.toString() + ')';
  }
  function Motion__hashCode_impl_gm6pss($this) {
    return $this.hashCode();
  }
  function Motion__equals_impl_ngoxh4($this, other) {
    if (!(other instanceof Motion))
      return false;
    var tmp0_other_with_cast = other instanceof Motion ? other.packedValue_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function Motion(packedValue) {
    this.packedValue_1 = packedValue;
  }
  protoOf(Motion).toString = function () {
    return Motion__toString_impl_wnrfdh(this.packedValue_1);
  };
  protoOf(Motion).hashCode = function () {
    return Motion__hashCode_impl_gm6pss(this.packedValue_1);
  };
  protoOf(Motion).equals = function (other) {
    return Motion__equals_impl_ngoxh4(this.packedValue_1, other);
  };
  function Motion_0(value, velocity) {
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toRawBits(value));
    var v2 = toLong(toRawBits(velocity));
    var tmp$ret$0 = v1.shl_bg8if3_k$(32).or_v7fvkl_k$(v2.and_4spn93_k$(new Long(-1, 0)));
    return _Motion___init__impl__vk56rv(tmp$ret$0);
  }
  function animateTo(_this__u8e3s4, targetValue, animationSpec, sequentialAnimation, block, $completion) {
    animationSpec = animationSpec === VOID ? spring() : animationSpec;
    sequentialAnimation = sequentialAnimation === VOID ? false : sequentialAnimation;
    var tmp;
    if (block === VOID) {
      tmp = animateTo$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    var tmp0_initialValue = _this__u8e3s4.get_value_j01efc_k$();
    var tmp1_typeConverter = _this__u8e3s4.get_typeConverter_seyvfn_k$();
    var tmp2_initialVelocityVector = _this__u8e3s4.get_velocityVector_v3jmo9_k$();
    var anim = TargetBasedAnimation_init_$Create$(animationSpec, tmp1_typeConverter, tmp0_initialValue, targetValue, tmp2_initialVelocityVector);
    return animate(_this__u8e3s4, anim, sequentialAnimation ? _this__u8e3s4.get_lastFrameTimeNanos_3aprno_k$() : AnimationConstants_getInstance().get_UnspecifiedTime_gpclet_k$(), block, $completion);
  }
  function animate(_this__u8e3s4, animation, startTimeNanos, block, $completion) {
    startTimeNanos = startTimeNanos === VOID ? AnimationConstants_getInstance().get_UnspecifiedTime_gpclet_k$() : startTimeNanos;
    var tmp;
    if (block === VOID) {
      tmp = animate$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    var tmp_0 = new $animateCOROUTINE$1(_this__u8e3s4, animation, startTimeNanos, block, $completion);
    tmp_0.set_result_xj64lm_k$(Unit_getInstance());
    tmp_0.set_exception_px07aa_k$(null);
    return tmp_0.doResume_5yljmg_k$();
  }
  function updateState(_this__u8e3s4, state) {
    state.set_value_v1vabv_k$(_this__u8e3s4.get_value_j01efc_k$());
    copyFrom(state.get_velocityVector_v3jmo9_k$(), _this__u8e3s4.get_velocityVector_v3jmo9_k$());
    state.set_finishedTimeNanos_8cpdkr_k$(_this__u8e3s4.get_finishedTimeNanos_t5ryif_k$());
    state.set_lastFrameTimeNanos_hfjxwm_k$(_this__u8e3s4.get_lastFrameTimeNanos_3aprno_k$());
    state.set_isRunning_m21k59_k$(_this__u8e3s4.get_isRunning_okmtn0_k$());
  }
  function get_durationScale(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.get_y2st91_k$(Key_getInstance_1());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_scaleFactor_64aucw_k$();
    var scale = tmp1_elvis_lhs == null ? 1.0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(scale >= 0.0)) {
      // Inline function 'androidx.compose.animation.core.<get-durationScale>.<anonymous>' call
      var message = 'negative scale factor';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return scale;
  }
  function callWithFrameNanos(_this__u8e3s4, onFrame, $completion) {
    var tmp = new $callWithFrameNanosCOROUTINE$2(_this__u8e3s4, onFrame, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function doAnimationFrameWithScale(_this__u8e3s4, frameTimeNanos, durationScale, anim, state, block) {
    var tmp;
    if (durationScale === 0.0) {
      tmp = anim.get_durationNanos_ub5cy_k$();
    } else {
      // Inline function 'kotlin.Long.div' call
      var tmp$ret$0 = frameTimeNanos.minus_mfbszm_k$(_this__u8e3s4.get_startTimeNanos_ru5em1_k$()).toFloat_jhbgwv_k$() / durationScale;
      tmp = numberToLong(tmp$ret$0);
    }
    var playTimeNanos = tmp;
    doAnimationFrame(_this__u8e3s4, frameTimeNanos, playTimeNanos, anim, state, block);
  }
  function doAnimationFrame(_this__u8e3s4, frameTimeNanos, playTimeNanos, anim, state, block) {
    _this__u8e3s4.set_lastFrameTimeNanos_hfjxwm_k$(frameTimeNanos);
    _this__u8e3s4.set_value_v1vabv_k$(anim.getValueFromNanos_i31vd8_k$(playTimeNanos));
    _this__u8e3s4.set_velocityVector_rbhc11_k$(anim.getVelocityVectorFromNanos_jouakx_k$(playTimeNanos));
    var isLastFrame = anim.isFinishedFromNanos_c31w39_k$(playTimeNanos);
    if (isLastFrame) {
      _this__u8e3s4.set_finishedTimeNanos_8cpdkr_k$(_this__u8e3s4.get_lastFrameTimeNanos_3aprno_k$());
      _this__u8e3s4.set_isRunning_m21k59_k$(false);
    }
    updateState(_this__u8e3s4, state);
    block(_this__u8e3s4);
  }
  function animateTo$lambda($this$null) {
    return Unit_getInstance();
  }
  function animate$lambda($this$null) {
    return Unit_getInstance();
  }
  function animate$lambda$lambda($this_animate) {
    return function () {
      $this_animate.set_isRunning_m21k59_k$(false);
      return Unit_getInstance();
    };
  }
  function animate$lambda_0($lateInitScope, $initialValue, $animation, $initialVelocityVector, $durationScale, $this_animate, $block) {
    return function (it) {
      // Inline function 'kotlin.apply' call
      var tmp = $animation.get_typeConverter_seyvfn_k$();
      var tmp_0 = $animation.get_targetValue_kq6mfd_k$();
      var this_0 = new AnimationScope($initialValue, tmp, $initialVelocityVector, it, tmp_0, it, true, animate$lambda$lambda($this_animate));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.animation.core.animate.<anonymous>.<anonymous>' call
      doAnimationFrameWithScale(this_0, it, $durationScale, $animation, $this_animate, $block);
      $lateInitScope._v = this_0;
      return Unit_getInstance();
    };
  }
  function animate$lambda_1($this_animate) {
    return function () {
      $this_animate.set_isRunning_m21k59_k$(false);
      return Unit_getInstance();
    };
  }
  function animate$lambda_2($lateInitScope, $durationScale, $animation, $this_animate, $block) {
    return function (it) {
      doAnimationFrameWithScale(ensureNotNull($lateInitScope._v), it, $durationScale, $animation, $this_animate, $block);
      return Unit_getInstance();
    };
  }
  function callWithFrameNanos$lambda($onFrame) {
    return function (it) {
      // Inline function 'kotlin.Long.div' call
      var other = get_AnimationDebugDurationScale();
      var tmp$ret$0 = it.div_jun7gj_k$(toLong(other));
      return $onFrame(tmp$ret$0);
    };
  }
  function $animateCOROUTINE$1(_this__u8e3s4, animation, startTimeNanos, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.animation_1 = animation;
    this.startTimeNanos_1 = startTimeNanos;
    this.block_1 = block;
  }
  protoOf($animateCOROUTINE$1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(7);
            this.initialValue0__1 = this.animation_1.getValueFromNanos_i31vd8_k$(new Long(0, 0));
            this.initialVelocityVector1__1 = this.animation_1.getVelocityVectorFromNanos_jouakx_k$(new Long(0, 0));
            this.lateInitScope2__1 = {_v: null};
            this.set_exceptionState_fex74n_k$(6);
            if (this.startTimeNanos_1.equals(AnimationConstants_getInstance().get_UnspecifiedTime_gpclet_k$())) {
              var tmp_0 = this;
              tmp_0.durationScale3__1 = get_durationScale(this.get_context_h02k06_k$());
              this.set_state_rjd8d0_k$(1);
              suspendResult = callWithFrameNanos(this.animation_1, animate$lambda_0(this.lateInitScope2__1, this.initialValue0__1, this.animation_1, this.initialVelocityVector1__1, this.durationScale3__1, this._this__u8e3s4__1, this.block_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this.animation_1.get_typeConverter_seyvfn_k$();
              var tmp_2 = this.animation_1.get_targetValue_kq6mfd_k$();
              var this_0 = new AnimationScope(this.initialValue0__1, tmp_1, this.initialVelocityVector1__1, this.startTimeNanos_1, tmp_2, this.startTimeNanos_1, true, animate$lambda_1(this._this__u8e3s4__1));
              doAnimationFrameWithScale(this_0, this.startTimeNanos_1, get_durationScale(this.get_context_h02k06_k$()), this.animation_1, this._this__u8e3s4__1, this.block_1);
              this.lateInitScope2__1._v = this_0;
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            }

          case 1:
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            if (!ensureNotNull(this.lateInitScope2__1._v).get_isRunning_okmtn0_k$()) {
              this.set_state_rjd8d0_k$(5);
              continue $sm;
            }

            var tmp_3 = this;
            tmp_3.durationScale4__1 = get_durationScale(this.get_context_h02k06_k$());
            this.set_state_rjd8d0_k$(4);
            suspendResult = callWithFrameNanos(this.animation_1, animate$lambda_2(this.lateInitScope2__1, this.durationScale4__1, this.animation_1, this._this__u8e3s4__1, this.block_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 5:
            this.set_exceptionState_fex74n_k$(7);
            this.set_state_rjd8d0_k$(8);
            continue $sm;
          case 6:
            this.set_exceptionState_fex74n_k$(7);
            var tmp_4 = this.get_exception_x0n6w6_k$();
            if (tmp_4 instanceof CancellationException) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp0_safe_receiver = this.lateInitScope2__1._v;
              if (tmp0_safe_receiver != null) {
                tmp0_safe_receiver.set_isRunning_m21k59_k$(false);
              }
              var tmp1_safe_receiver = this.lateInitScope2__1._v;
              if (equals(tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_lastFrameTimeNanos_3aprno_k$(), this._this__u8e3s4__1.get_lastFrameTimeNanos_3aprno_k$())) {
                this._this__u8e3s4__1.set_isRunning_m21k59_k$(false);
              }
              throw e;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 7:
            throw this.get_exception_x0n6w6_k$();
          case 8:
            this.set_exceptionState_fex74n_k$(7);
            return Unit_getInstance();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 7) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  function $callWithFrameNanosCOROUTINE$2(_this__u8e3s4, onFrame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.onFrame_1 = onFrame;
  }
  protoOf($callWithFrameNanosCOROUTINE$2).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            if (this._this__u8e3s4__1.get_isInfinite_uffwnt_k$()) {
              this.set_state_rjd8d0_k$(2);
              suspendResult = withInfiniteAnimationFrameNanos(this.onFrame_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(1);
              suspendResult = withFrameNanos(callWithFrameNanos$lambda(this.onFrame_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.WHEN_RESULT0__1 = suspendResult;
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 2:
            this.WHEN_RESULT0__1 = suspendResult;
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.WHEN_RESULT0__1;
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
  function _set_targetValue__aqsk0r_0($this, _set____db54di) {
    var this_0 = $this.targetValue$delegate_1;
    targetValue$factory_1();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get_targetValue__jjlmb5($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.targetValue$delegate_1;
    targetValue$factory_2();
    return this_0.get_value_j01efc_k$();
  }
  function _set_animationSpec__7qdru($this, _set____db54di) {
    var this_0 = $this.animationSpec$delegate_1;
    animationSpec$factory();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _set_animation__pan2kh($this, _set____db54di) {
    var this_0 = $this.animation$delegate_1;
    animation$factory();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _set_offsetTimeNanos__i9wy86($this, _set____db54di) {
    var this_0 = $this.offsetTimeNanos$delegate_1;
    offsetTimeNanos$factory();
    this_0.set_longValue_3qxaje_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get_offsetTimeNanos__sdn5qq($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.offsetTimeNanos$delegate_1;
    offsetTimeNanos$factory_0();
    return this_0.get_longValue_ahin58_k$();
  }
  function _set_needsReset__wyw9nf($this, _set____db54di) {
    var this_0 = $this.needsReset$delegate_1;
    needsReset$factory();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get_needsReset__mzz76h($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.needsReset$delegate_1;
    needsReset$factory_0();
    return this_0.get_value_j01efc_k$();
  }
  function _set_velocityVector__vm30d3($this, _set____db54di) {
    $this.velocityVector_1 = _set____db54di;
  }
  function _get_velocityVector__dvxlkl($this) {
    return $this.velocityVector_1;
  }
  function _get_interruptionSpec__ruhcut($this) {
    return $this.interruptionSpec_1;
  }
  function updateAnimation($this, initialValue, isInterrupted) {
    var tmp;
    if (isInterrupted) {
      var tmp_0;
      var tmp_1 = $this.get_animationSpec_wdk2t2_k$();
      if (tmp_1 instanceof SpringSpec) {
        tmp_0 = $this.get_animationSpec_wdk2t2_k$();
      } else {
        tmp_0 = $this.interruptionSpec_1;
      }
      tmp = tmp_0;
    } else {
      tmp = $this.get_animationSpec_wdk2t2_k$();
    }
    var spec = tmp;
    _set_animation__pan2kh($this, TargetBasedAnimation_init_$Create$(spec, $this.typeConverter_1, initialValue, _get_targetValue__jjlmb5($this), $this.velocityVector_1));
    onChildAnimationUpdated($this.$this_1);
  }
  function updateAnimation$default($this, initialValue, isInterrupted, $super) {
    initialValue = initialValue === VOID ? $this.get_value_j01efc_k$() : initialValue;
    isInterrupted = isInterrupted === VOID ? false : isInterrupted;
    return updateAnimation($this, initialValue, isInterrupted);
  }
  function DeferredAnimationData($outer, animation, transitionSpec, targetValueByState) {
    this.$this_1 = $outer;
    this.animation_1 = animation;
    this.transitionSpec_1 = transitionSpec;
    this.targetValueByState_1 = targetValueByState;
  }
  protoOf(DeferredAnimationData).get_animation_r0gd0b_k$ = function () {
    return this.animation_1;
  };
  protoOf(DeferredAnimationData).set_transitionSpec_6vdwmp_k$ = function (_set____db54di) {
    this.transitionSpec_1 = _set____db54di;
  };
  protoOf(DeferredAnimationData).get_transitionSpec_80wxl_k$ = function () {
    return this.transitionSpec_1;
  };
  protoOf(DeferredAnimationData).set_targetValueByState_13c911_k$ = function (_set____db54di) {
    this.targetValueByState_1 = _set____db54di;
  };
  protoOf(DeferredAnimationData).get_targetValueByState_4t5sar_k$ = function () {
    return this.targetValueByState_1;
  };
  protoOf(DeferredAnimationData).updateAnimationStates_83ofna_k$ = function (segment) {
    var targetValue = this.targetValueByState_1(segment.get_targetState_kri3mx_k$());
    if (this.$this_1.$this_1.get_isSeeking_vjb393_k$()) {
      var initialValue = this.targetValueByState_1(segment.get_initialState_2eu9l6_k$());
      this.animation_1.updateInitialAndTargetValue_ephtkk_k$(initialValue, targetValue, this.transitionSpec_1(segment));
    } else {
      this.animation_1.updateTargetValue_yzbefi_k$(targetValue, this.transitionSpec_1(segment));
    }
  };
  protoOf(DeferredAnimationData).get_value_j01efc_k$ = function () {
    this.updateAnimationStates_83ofna_k$(this.$this_1.$this_1.get_segment_xwnoei_k$());
    return this.animation_1.get_value_j01efc_k$();
  };
  function Transition$animateTo$slambda$lambda(this$0, $durationScale) {
    return function (it) {
      var tmp;
      if (!this$0.get_isSeeking_vjb393_k$()) {
        // Inline function 'kotlin.Long.div' call
        var tmp$ret$0 = it.div_jun7gj_k$(toLong(1));
        this$0.onFrame_juoego_k$(tmp$ret$0, $durationScale);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function _get_transitionState__f9djyt($this) {
    return $this.transitionState_1;
  }
  function Transition_init_$Init$(initialState, label, $this) {
    Transition_init_$Init$_0(new MutableTransitionState(initialState), label, $this);
    return $this;
  }
  function Transition_init_$Create$(initialState, label) {
    return Transition_init_$Init$(initialState, label, objectCreate(protoOf(Transition)));
  }
  function Transition_init_$Init$_0(transitionState, label, $this) {
    label = label === VOID ? null : label;
    Transition.call($this, transitionState instanceof TransitionState ? transitionState : THROW_CCE(), label);
    return $this;
  }
  function Transition_init_$Create$_0(transitionState, label) {
    return Transition_init_$Init$_0(transitionState, label, objectCreate(protoOf(Transition)));
  }
  function _set_segment__77iylu($this, _set____db54di) {
    var this_0 = $this.segment$delegate_1;
    segment$factory();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _set_startTimeNanos__1jy4fb($this, _set____db54di) {
    var this_0 = $this.startTimeNanos$delegate_1;
    startTimeNanos$factory();
    this_0.set_longValue_3qxaje_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get_startTimeNanos__r31kgr($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.startTimeNanos$delegate_1;
    startTimeNanos$factory_0();
    return this_0.get_longValue_ahin58_k$();
  }
  function _get__animations__z05tbx($this) {
    return $this._animations_1;
  }
  function _get__transitions__nj1dqs($this) {
    return $this._transitions_1;
  }
  function onChildAnimationUpdated($this) {
    $this.set_updateChildrenNeeded_rw42ud_k$(true);
    if ($this.get_isSeeking_vjb393_k$()) {
      var maxDurationNanos = new Long(0, 0);
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var this_0 = $this._animations_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.get_c1px32_k$(index);
          // Inline function 'androidx.compose.animation.core.Transition.onChildAnimationUpdated.<anonymous>' call
          // Inline function 'kotlin.math.max' call
          var a = maxDurationNanos;
          var b = item.get_durationNanos_ub5cy_k$();
          maxDurationNanos = a.compareTo_9jj042_k$(b) >= 0 ? a : b;
          item.seekTo_a83qmt_k$($this.lastSeekedTimeNanos_1);
        }
         while (inductionVariable <= last);
      $this.set_updateChildrenNeeded_rw42ud_k$(false);
    }
  }
  function TransitionAnimationState($outer, initialValue, initialVelocityVector, typeConverter, label) {
    this.$this_1 = $outer;
    this.typeConverter_1 = typeConverter;
    this.label_1 = label;
    this.targetValue$delegate_1 = mutableStateOf(initialValue);
    this.animationSpec$delegate_1 = mutableStateOf(spring());
    this.animation$delegate_1 = mutableStateOf(TargetBasedAnimation_init_$Create$(this.get_animationSpec_wdk2t2_k$(), this.typeConverter_1, initialValue, _get_targetValue__jjlmb5(this), initialVelocityVector));
    this.isFinished$delegate_1 = mutableStateOf(true);
    this.offsetTimeNanos$delegate_1 = mutableLongStateOf(new Long(0, 0));
    this.needsReset$delegate_1 = mutableStateOf(false);
    this.value$delegate_1 = mutableStateOf(initialValue);
    this.velocityVector_1 = initialVelocityVector;
    var tmp0_safe_receiver = get_visibilityThresholdMap().get_wei43m_k$(this.typeConverter_1);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.animation.core.TransitionAnimationState.<anonymous>' call
      var vector = this.typeConverter_1.get_convertToVector_s594l4_k$()(initialValue);
      var inductionVariable = 0;
      var last = vector.get_size_woubt6_k$();
      if (inductionVariable < last)
        do {
          var id = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          vector.set_4eugj6_k$(id, tmp0_safe_receiver);
        }
         while (inductionVariable < last);
      tmp = this.typeConverter_1.get_convertFromVector_kmewon_k$()(vector);
    }
    var visibilityThreshold = tmp;
    this.interruptionSpec_1 = spring(VOID, VOID, visibilityThreshold);
  }
  protoOf(TransitionAnimationState).get_typeConverter_seyvfn_k$ = function () {
    return this.typeConverter_1;
  };
  protoOf(TransitionAnimationState).get_label_iuj8p7_k$ = function () {
    return this.label_1;
  };
  protoOf(TransitionAnimationState).get_animationSpec_wdk2t2_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.animationSpec$delegate_1;
    animationSpec$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(TransitionAnimationState).get_animation_r0gd0b_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.animation$delegate_1;
    animation$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(TransitionAnimationState).set_isFinished_ptfqd8_k$ = function (_set____db54di) {
    var this_0 = this.isFinished$delegate_1;
    isFinished$factory();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(TransitionAnimationState).get_isFinished_qlhjyd_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.isFinished$delegate_1;
    isFinished$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(TransitionAnimationState).set_value_v1vabv_k$ = function (_set____db54di) {
    var this_0 = this.value$delegate_1;
    value$factory_3();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(TransitionAnimationState).get_value_j01efc_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.value$delegate_1;
    value$factory_4();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(TransitionAnimationState).get_durationNanos_ub5cy_k$ = function () {
    return this.get_animation_r0gd0b_k$().get_durationNanos_ub5cy_k$();
  };
  protoOf(TransitionAnimationState).onPlayTimeChanged_r5gupa_k$ = function (playTimeNanos, durationScale) {
    var tmp;
    if (durationScale > 0.0) {
      // Inline function 'kotlin.Long.div' call
      var scaledTime = playTimeNanos.minus_mfbszm_k$(_get_offsetTimeNanos__sdn5qq(this)).toFloat_jhbgwv_k$() / durationScale;
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!isNaN_0(scaledTime)) {
        // Inline function 'androidx.compose.animation.core.TransitionAnimationState.onPlayTimeChanged.<anonymous>' call
        var message = 'Duration scale adjusted time is NaN. Duration scale: ' + durationScale + ',' + ('playTimeNanos: ' + playTimeNanos.toString() + ', offsetTimeNanos: ' + _get_offsetTimeNanos__sdn5qq(this).toString());
        throw IllegalStateException_init_$Create$(toString(message));
      }
      tmp = numberToLong(scaledTime);
    } else {
      tmp = this.get_animation_r0gd0b_k$().get_durationNanos_ub5cy_k$();
    }
    var playTime = tmp;
    this.set_value_v1vabv_k$(this.get_animation_r0gd0b_k$().getValueFromNanos_i31vd8_k$(playTime));
    this.velocityVector_1 = this.get_animation_r0gd0b_k$().getVelocityVectorFromNanos_jouakx_k$(playTime);
    if (this.get_animation_r0gd0b_k$().isFinishedFromNanos_c31w39_k$(playTime)) {
      this.set_isFinished_ptfqd8_k$(true);
      _set_offsetTimeNanos__i9wy86(this, new Long(0, 0));
    }
  };
  protoOf(TransitionAnimationState).seekTo_a83qmt_k$ = function (playTimeNanos) {
    this.set_value_v1vabv_k$(this.get_animation_r0gd0b_k$().getValueFromNanos_i31vd8_k$(playTimeNanos));
    this.velocityVector_1 = this.get_animation_r0gd0b_k$().getVelocityVectorFromNanos_jouakx_k$(playTimeNanos);
  };
  protoOf(TransitionAnimationState).resetAnimation_pd4nj9_k$ = function () {
    _set_needsReset__wyw9nf(this, true);
  };
  protoOf(TransitionAnimationState).toString = function () {
    return 'current value: ' + this.get_value_j01efc_k$() + ', target: ' + _get_targetValue__jjlmb5(this) + ', spec: ' + this.get_animationSpec_wdk2t2_k$();
  };
  protoOf(TransitionAnimationState).updateTargetValue_yzbefi_k$ = function (targetValue, animationSpec) {
    if (!equals(_get_targetValue__jjlmb5(this), targetValue) ? true : _get_needsReset__mzz76h(this)) {
      _set_targetValue__aqsk0r_0(this, targetValue);
      _set_animationSpec__7qdru(this, animationSpec);
      updateAnimation$default(this, VOID, !this.get_isFinished_qlhjyd_k$());
      this.set_isFinished_ptfqd8_k$(false);
      _set_offsetTimeNanos__i9wy86(this, this.$this_1.get_playTimeNanos_50m2yz_k$());
      _set_needsReset__wyw9nf(this, false);
    }
  };
  protoOf(TransitionAnimationState).updateInitialAndTargetValue_ephtkk_k$ = function (initialValue, targetValue, animationSpec) {
    _set_targetValue__aqsk0r_0(this, targetValue);
    _set_animationSpec__7qdru(this, animationSpec);
    if (equals(this.get_animation_r0gd0b_k$().get_initialValue_2disdm_k$(), initialValue) ? equals(this.get_animation_r0gd0b_k$().get_targetValue_kq6mfd_k$(), targetValue) : false) {
      return Unit_getInstance();
    }
    updateAnimation$default(this, initialValue);
  };
  function SegmentImpl(initialState, targetState) {
    this.initialState_1 = initialState;
    this.targetState_1 = targetState;
  }
  protoOf(SegmentImpl).get_initialState_2eu9l6_k$ = function () {
    return this.initialState_1;
  };
  protoOf(SegmentImpl).get_targetState_kri3mx_k$ = function () {
    return this.targetState_1;
  };
  protoOf(SegmentImpl).equals = function (other) {
    var tmp;
    var tmp_0;
    if (!(other == null) ? isInterface(other, Segment) : false) {
      tmp_0 = equals(this.initialState_1, other.get_initialState_2eu9l6_k$());
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.targetState_1, other.get_targetState_kri3mx_k$());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SegmentImpl).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.initialState_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(tmp$ret$0, 31);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.targetState_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    return tmp + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
  };
  function Segment() {
  }
  function DeferredAnimation($outer, typeConverter, label) {
    this.$this_1 = $outer;
    this.typeConverter_1 = typeConverter;
    this.label_1 = label;
    this.data$delegate_1 = mutableStateOf(null);
  }
  protoOf(DeferredAnimation).get_typeConverter_seyvfn_k$ = function () {
    return this.typeConverter_1;
  };
  protoOf(DeferredAnimation).get_label_iuj8p7_k$ = function () {
    return this.label_1;
  };
  protoOf(DeferredAnimation).set_data_vrvhdm_k$ = function (_set____db54di) {
    var this_0 = this.data$delegate_1;
    data$factory();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(DeferredAnimation).get_data_wokkxf_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.data$delegate_1;
    data$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(DeferredAnimation).animate_lt3uhv_k$ = function (transitionSpec, targetValueByState) {
    var tmp0_elvis_lhs = this.get_data_wokkxf_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.apply' call
      var this_0 = new DeferredAnimationData(this, new TransitionAnimationState(this.$this_1, targetValueByState(this.$this_1.get_currentState_snihnl_k$()), createZeroVectorFrom(this.typeConverter_1, targetValueByState(this.$this_1.get_currentState_snihnl_k$())), this.typeConverter_1, this.label_1), transitionSpec, targetValueByState);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.animation.core.DeferredAnimation.animate.<anonymous>' call
      this.set_data_vrvhdm_k$(this_0);
      this.$this_1.addAnimation_smuflz_k$(this_0.animation_1);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var animData = tmp;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.animation.core.DeferredAnimation.animate.<anonymous>' call
    animData.targetValueByState_1 = targetValueByState;
    animData.transitionSpec_1 = transitionSpec;
    animData.updateAnimationStates_83ofna_k$(this.$this_1.get_segment_xwnoei_k$());
    return animData;
  };
  protoOf(DeferredAnimation).setupSeeking_5ihkd9_k$ = function () {
    var tmp0_safe_receiver = this.get_data_wokkxf_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.animation.core.DeferredAnimation.setupSeeking.<anonymous>' call
      tmp0_safe_receiver.animation_1.updateInitialAndTargetValue_ephtkk_k$(tmp0_safe_receiver.targetValueByState_1(this.$this_1.get_segment_xwnoei_k$().get_initialState_2eu9l6_k$()), tmp0_safe_receiver.targetValueByState_1(this.$this_1.get_segment_xwnoei_k$().get_targetState_kri3mx_k$()), tmp0_safe_receiver.transitionSpec_1(this.$this_1.get_segment_xwnoei_k$()));
    }
  };
  function Transition$totalDurationNanos$delegate$lambda(this$0) {
    return function () {
      var maxDurationNanos = new Long(0, 0);
      var this_0 = this$0._animations_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.get_size_woubt6_k$() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.get_c1px32_k$(index);
          // Inline function 'androidx.compose.animation.core.Transition.totalDurationNanos$delegate.<anonymous>.<anonymous>' call
          // Inline function 'kotlin.math.max' call
          var a = maxDurationNanos;
          var b = item.get_durationNanos_ub5cy_k$();
          maxDurationNanos = a.compareTo_9jj042_k$(b) >= 0 ? a : b;
        }
         while (inductionVariable <= last);
        tmp = Unit_getInstance();
      }
      var this_1 = this$0._transitions_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = this_1.get_size_woubt6_k$() - 1 | 0;
      var tmp_0;
      if (inductionVariable_0 <= last_0) {
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = this_1.get_c1px32_k$(index_0);
          // Inline function 'androidx.compose.animation.core.Transition.totalDurationNanos$delegate.<anonymous>.<anonymous>' call
          // Inline function 'kotlin.math.max' call
          var a_0 = maxDurationNanos;
          var b_0 = item_0.get_totalDurationNanos_cuj0z4_k$();
          maxDurationNanos = a_0.compareTo_9jj042_k$(b_0) >= 0 ? a_0 : b_0;
        }
         while (inductionVariable_0 <= last_0);
        tmp_0 = Unit_getInstance();
      }
      return maxDurationNanos;
    };
  }
  function Transition$updateTarget$lambda($tmp0_rcvr, $targetState, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.updateTarget_5nthj5_k$($targetState, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Transition$animateTo$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Transition$animateTo$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(Transition$animateTo$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Transition$animateTo$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!true) {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

            this.durationScale0__1 = get_durationScale(this.$this$LaunchedEffect_1.get_coroutineContext_115oqo_k$());
            this.set_state_rjd8d0_k$(2);
            suspendResult = withFrameNanos(Transition$animateTo$slambda$lambda(this.this$0__1, this.durationScale0__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
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
  protoOf(Transition$animateTo$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new Transition$animateTo$slambda(this.this$0__1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(Transition$animateTo$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function Transition$animateTo$slambda_0(this$0, resultContinuation) {
    var i = new Transition$animateTo$slambda(this$0, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Transition$animateTo$lambda($tmp1_rcvr, $targetState, $$changed) {
    return function ($composer, $force) {
      $tmp1_rcvr.animateTo_i5kt6r_k$($targetState, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Transition(transitionState, label) {
    label = label === VOID ? null : label;
    this.transitionState_1 = transitionState;
    this.label_1 = label;
    this.targetState$delegate_1 = mutableStateOf(this.get_currentState_snihnl_k$());
    this.segment$delegate_1 = mutableStateOf(new SegmentImpl(this.get_currentState_snihnl_k$(), this.get_currentState_snihnl_k$()));
    this.playTimeNanos$delegate_1 = mutableLongStateOf(new Long(0, 0));
    this.startTimeNanos$delegate_1 = mutableLongStateOf(AnimationConstants_getInstance().get_UnspecifiedTime_gpclet_k$());
    this.updateChildrenNeeded$delegate_1 = mutableStateOf(true);
    this._animations_1 = mutableStateListOf();
    this._transitions_1 = mutableStateListOf();
    this.isSeeking$delegate_1 = mutableStateOf(false);
    this.lastSeekedTimeNanos_1 = new Long(0, 0);
    var tmp = this;
    tmp.totalDurationNanos$delegate_1 = derivedStateOf(Transition$totalDurationNanos$delegate$lambda(this));
    this.transitionState_1.transitionConfigured_sc6oj5_k$(this);
  }
  protoOf(Transition).get_label_iuj8p7_k$ = function () {
    return this.label_1;
  };
  protoOf(Transition).get_currentState_snihnl_k$ = function () {
    return this.transitionState_1.get_currentState_snihnl_k$();
  };
  protoOf(Transition).set_targetState_1ag6bn_k$ = function (_set____db54di) {
    var this_0 = this.targetState$delegate_1;
    targetState$factory();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(Transition).get_targetState_kri3mx_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.targetState$delegate_1;
    targetState$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(Transition).get_segment_xwnoei_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.segment$delegate_1;
    segment$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(Transition).get_isRunning_okmtn0_k$ = function () {
    return !_get_startTimeNanos__r31kgr(this).equals(AnimationConstants_getInstance().get_UnspecifiedTime_gpclet_k$());
  };
  protoOf(Transition).set_playTimeNanos_8390lf_k$ = function (_set____db54di) {
    var this_0 = this.playTimeNanos$delegate_1;
    playTimeNanos$factory();
    this_0.set_longValue_3qxaje_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(Transition).get_playTimeNanos_50m2yz_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.playTimeNanos$delegate_1;
    playTimeNanos$factory_0();
    return this_0.get_longValue_ahin58_k$();
  };
  protoOf(Transition).set_updateChildrenNeeded_rw42ud_k$ = function (_set____db54di) {
    var this_0 = this.updateChildrenNeeded$delegate_1;
    updateChildrenNeeded$factory();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(Transition).get_updateChildrenNeeded_bsutx6_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.updateChildrenNeeded$delegate_1;
    updateChildrenNeeded$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(Transition).get_transitions_hojw6j_k$ = function () {
    return this._transitions_1;
  };
  protoOf(Transition).get_animations_ez9gco_k$ = function () {
    return this._animations_1;
  };
  protoOf(Transition).set_isSeeking_enascu_k$ = function (_set____db54di) {
    var this_0 = this.isSeeking$delegate_1;
    isSeeking$factory();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(Transition).get_isSeeking_vjb393_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.isSeeking$delegate_1;
    isSeeking$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(Transition).set_lastSeekedTimeNanos_2k2xwq_k$ = function (_set____db54di) {
    this.lastSeekedTimeNanos_1 = _set____db54di;
  };
  protoOf(Transition).get_lastSeekedTimeNanos_ycnk8s_k$ = function () {
    return this.lastSeekedTimeNanos_1;
  };
  protoOf(Transition).get_totalDurationNanos_cuj0z4_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.totalDurationNanos$delegate_1;
    totalDurationNanos$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(Transition).onFrame_juoego_k$ = function (frameTimeNanos, durationScale) {
    if (_get_startTimeNanos__r31kgr(this).equals(AnimationConstants_getInstance().get_UnspecifiedTime_gpclet_k$())) {
      this.onTransitionStart_f1mn9s_k$(frameTimeNanos);
    }
    this.set_updateChildrenNeeded_rw42ud_k$(false);
    this.set_playTimeNanos_8390lf_k$(frameTimeNanos.minus_mfbszm_k$(_get_startTimeNanos__r31kgr(this)));
    var allFinished = true;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this._animations_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.get_c1px32_k$(index);
        // Inline function 'androidx.compose.animation.core.Transition.onFrame.<anonymous>' call
        if (!item.get_isFinished_qlhjyd_k$()) {
          item.onPlayTimeChanged_r5gupa_k$(this.get_playTimeNanos_50m2yz_k$(), durationScale);
        }
        if (!item.get_isFinished_qlhjyd_k$()) {
          allFinished = false;
        }
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = this._transitions_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = this_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.get_c1px32_k$(index_0);
        // Inline function 'androidx.compose.animation.core.Transition.onFrame.<anonymous>' call
        if (!equals(item_0.get_targetState_kri3mx_k$(), item_0.get_currentState_snihnl_k$())) {
          item_0.onFrame_juoego_k$(this.get_playTimeNanos_50m2yz_k$(), durationScale);
        }
        if (!equals(item_0.get_targetState_kri3mx_k$(), item_0.get_currentState_snihnl_k$())) {
          allFinished = false;
        }
      }
       while (inductionVariable_0 <= last_0);
    if (allFinished) {
      this.onTransitionEnd_dlnhlj_k$();
    }
  };
  protoOf(Transition).onTransitionStart_f1mn9s_k$ = function (frameTimeNanos) {
    _set_startTimeNanos__1jy4fb(this, frameTimeNanos);
    this.transitionState_1.set_isRunning_m21k59_k$(true);
  };
  protoOf(Transition).onTransitionEnd_dlnhlj_k$ = function () {
    _set_startTimeNanos__1jy4fb(this, AnimationConstants_getInstance().get_UnspecifiedTime_gpclet_k$());
    var tmp = this.transitionState_1;
    if (tmp instanceof MutableTransitionState) {
      this.transitionState_1.set_currentState_90n70r_k$(this.get_targetState_kri3mx_k$());
    }
    this.set_playTimeNanos_8390lf_k$(new Long(0, 0));
    this.transitionState_1.set_isRunning_m21k59_k$(false);
  };
  protoOf(Transition).setPlaytimeAfterInitialAndTargetStateEstablished_5eb7ay_k$ = function (initialState, targetState, playTimeNanos) {
    _set_startTimeNanos__1jy4fb(this, AnimationConstants_getInstance().get_UnspecifiedTime_gpclet_k$());
    this.transitionState_1.set_isRunning_m21k59_k$(false);
    if ((!this.get_isSeeking_vjb393_k$() ? true : !equals(this.get_currentState_snihnl_k$(), initialState)) ? true : !equals(this.get_targetState_kri3mx_k$(), targetState)) {
      var tmp;
      if (!equals(this.get_currentState_snihnl_k$(), initialState)) {
        var tmp_0 = this.transitionState_1;
        tmp = tmp_0 instanceof MutableTransitionState;
      } else {
        tmp = false;
      }
      if (tmp) {
        this.transitionState_1.set_currentState_90n70r_k$(initialState);
      }
      this.set_targetState_1ag6bn_k$(targetState);
      this.set_isSeeking_enascu_k$(true);
      _set_segment__77iylu(this, new SegmentImpl(initialState, targetState));
    }
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this._transitions_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.get_c1px32_k$(index);
        // Inline function 'androidx.compose.animation.core.Transition.setPlaytimeAfterInitialAndTargetStateEstablished.<anonymous>' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var it = item instanceof Transition ? item : THROW_CCE();
        var tmp_1;
        if (it.get_isSeeking_vjb393_k$()) {
          it.setPlaytimeAfterInitialAndTargetStateEstablished_5eb7ay_k$(it.get_currentState_snihnl_k$(), it.get_targetState_kri3mx_k$(), playTimeNanos);
          tmp_1 = Unit_getInstance();
        }
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = this._animations_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = this_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.get_c1px32_k$(index_0);
        // Inline function 'androidx.compose.animation.core.Transition.setPlaytimeAfterInitialAndTargetStateEstablished.<anonymous>' call
        item_0.seekTo_a83qmt_k$(playTimeNanos);
      }
       while (inductionVariable_0 <= last_0);
    this.lastSeekedTimeNanos_1 = playTimeNanos;
  };
  protoOf(Transition).addTransition_e8lpbn_k$ = function (transition) {
    return this._transitions_1.add_wl2rvy_k$(transition);
  };
  protoOf(Transition).removeTransition_odo028_k$ = function (transition) {
    return this._transitions_1.remove_an8aut_k$(transition);
  };
  protoOf(Transition).addAnimation_smuflz_k$ = function (animation) {
    return this._animations_1.add_wl2rvy_k$(animation);
  };
  protoOf(Transition).removeAnimation_tcsn90_k$ = function (animation) {
    this._animations_1.remove_an8aut_k$(animation);
  };
  protoOf(Transition).updateTarget_5nthj5_k$ = function (targetState, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-583974681);
    sourceInformation($composer_0, 'C(updateTarget):Transition.kt#pdpnli');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(targetState) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(this) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-583974681, $dirty, -1, 'androidx.compose.animation.core.Transition.updateTarget (Transition.kt:610)');
      }
      if (!this.get_isSeeking_vjb393_k$()) {
        if (!equals(this.get_targetState_kri3mx_k$(), targetState)) {
          _set_segment__77iylu(this, new SegmentImpl(this.get_targetState_kri3mx_k$(), targetState));
          if (!equals(this.get_currentState_snihnl_k$(), this.get_targetState_kri3mx_k$())) {
            // Inline function 'kotlin.check' call
            var tmp = this.transitionState_1;
            // Inline function 'kotlin.contracts.contract' call
            if (!(tmp instanceof MutableTransitionState)) {
              // Inline function 'androidx.compose.animation.core.Transition.updateTarget.<anonymous>' call
              var message = 'Can only update the current state with MutableTransitionState';
              throw IllegalStateException_init_$Create$(toString(message));
            }
            this.transitionState_1.set_currentState_90n70r_k$(this.get_targetState_kri3mx_k$());
          }
          this.set_targetState_1ag6bn_k$(targetState);
          if (!this.get_isRunning_okmtn0_k$()) {
            this.set_updateChildrenNeeded_rw42ud_k$(true);
          }
          // Inline function 'androidx.compose.ui.util.fastForEach' call
          var this_0 = this._animations_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable = 0;
          var last = this_0.get_size_woubt6_k$() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item = this_0.get_c1px32_k$(index);
              // Inline function 'androidx.compose.animation.core.Transition.updateTarget.<anonymous>' call
              item.resetAnimation_pd4nj9_k$();
            }
             while (inductionVariable <= last);
        }
      }
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
      tmp1_safe_receiver.updateScope_t8jcf_k$(Transition$updateTarget$lambda(this, targetState, $changed));
    }
  };
  protoOf(Transition).animateTo_i5kt6r_k$ = function (targetState, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1493585151);
    sourceInformation($composer_0, 'C(animateTo)643@25186L25,647@25456L655,647@25435L676:Transition.kt#pdpnli');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(targetState) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(this) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1493585151, $dirty, -1, 'androidx.compose.animation.core.Transition.animateTo (Transition.kt:641)');
      }
      if (!this.get_isSeeking_vjb393_k$()) {
        this.updateTarget_5nthj5_k$(targetState, $composer_0, 14 & $dirty | 112 & $dirty);
        if ((!equals(targetState, this.get_currentState_snihnl_k$()) ? true : this.get_isRunning_okmtn0_k$()) ? true : this.get_updateChildrenNeeded_bsutx6_k$()) {
          $composer_0.startReplaceableGroup_ip860b_k$(-1097569239);
          sourceInformation($composer_0, 'CC(remember):Transition.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          var this_0 = $composer_0;
          var invalid = ($dirty & 112) === 32;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it = this_0.rememberedValue_4dg93v_k$();
          var tmp;
          if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
            // Inline function 'androidx.compose.animation.core.Transition.animateTo.<anonymous>' call
            var value = Transition$animateTo$slambda_0(this, null);
            this_0.updateRememberedValue_l1wh71_k$(value);
            tmp = value;
          } else {
            tmp = it;
          }
          var tmp_0 = tmp;
          var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
          $composer_0.endReplaceableGroup_ern0ak_k$();
          LaunchedEffect(this, tmp0_group, $composer_0, 64 | 14 & $dirty >> 3);
        }
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp2_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.updateScope_t8jcf_k$(Transition$animateTo$lambda(this, targetState, $changed));
    }
  };
  protoOf(Transition).toString = function () {
    // Inline function 'androidx.compose.ui.util.fastFold' call
    // Inline function 'kotlin.contracts.contract' call
    var accumulator = 'Transition animation values: ';
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.get_animations_ez9gco_k$();
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.get_c1px32_k$(index);
        // Inline function 'androidx.compose.ui.util.fastFold.<anonymous>' call
        // Inline function 'androidx.compose.animation.core.Transition.toString.<anonymous>' call
        accumulator = accumulator + item + ', ';
      }
       while (inductionVariable <= last);
    return accumulator;
  };
  protoOf(Transition).removeAnimation_oui60b_k$ = function (deferredAnimation) {
    var tmp0_safe_receiver = deferredAnimation.get_data_wokkxf_k$();
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.animation_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.removeAnimation_tcsn90_k$(tmp1_safe_receiver);
    }
  };
  function updateTransition(targetState, label, $composer, $changed, $default) {
    var label_0 = label;
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(2029166765);
    sourceInformation($composer_0, 'C(updateTransition)P(1)76@3165L51,77@3232L22,78@3288L195,78@3259L224:Transition.kt#pdpnli');
    if (!(($default & 2) === 0))
      label_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(2029166765, $changed, -1, 'androidx.compose.animation.core.updateTransition (Transition.kt:75)');
    }
    $composer_0.startReplaceableGroup_ip860b_k$(1641299835);
    sourceInformation($composer_0, 'CC(remember):Transition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.animation.core.updateTransition.<anonymous>' call
      var value = Transition_init_$Create$(targetState, label_0);
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    var transition = tmp1_group;
    transition.animateTo_i5kt6r_k$(targetState, $composer_0, 48 | 8 & $changed | 14 & $changed);
    $composer_0.startReplaceableGroup_ip860b_k$(1641299958);
    sourceInformation($composer_0, 'CC(remember):Transition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_1;
    if (false ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.animation.core.updateTransition.<anonymous>' call
      var value_0 = updateTransition$lambda(transition);
      $composer_0.updateRememberedValue_l1wh71_k$(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp2_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    DisposableEffect(transition, tmp2_group, $composer_0, 54);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return transition;
  }
  function animateFloat(_this__u8e3s4, transitionSpec, label, targetValueByState, $composer, $changed, $default) {
    var transitionSpec_0 = transitionSpec;
    var label_0 = label;
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-1338768149);
    sourceInformation($composer_0, 'CC(animateFloat)P(2)1167@46483L78:Transition.kt#pdpnli');
    if (!(($default & 1) === 0)) {
      transitionSpec_0 = animateFloat$lambda;
    }
    if (!(($default & 2) === 0))
      label_0 = 'FloatAnimation';
    // Inline function 'androidx.compose.animation.core.animateValue' call
    var typeConverter = get_VectorConverter_2(FloatCompanionObject_getInstance());
    var $changed_0 = 14 & $changed | 896 & $changed << 3 | 7168 & $changed << 3 | 57344 & $changed << 3;
    var transitionSpec_1 = transitionSpec_0;
    var label_1 = label_0;
    var $composer_1 = $composer_0;
    $composer_1.startReplaceableGroup_ip860b_k$(-142660079);
    sourceInformation($composer_1, 'CC(animateValue)P(3,2)1084@43046L32,1085@43101L31,1086@43157L23,1088@43193L89:Transition.kt#pdpnli');
    if (!((0 & 2) === 0)) {
      transitionSpec_1 = animateFloat$lambda_0;
    }
    if (!((0 & 4) === 0))
      label_1 = 'ValueAnimation';
    var initialValue = targetValueByState(_this__u8e3s4.get_currentState_snihnl_k$(), $composer_1, 112 & $changed_0 >> 9);
    var targetValue = targetValueByState(_this__u8e3s4.get_targetState_kri3mx_k$(), $composer_1, 112 & $changed_0 >> 9);
    var animationSpec = transitionSpec_1(_this__u8e3s4.get_segment_xwnoei_k$(), $composer_1, 112 & $changed_0 >> 3);
    var tmp0 = createTransitionAnimation(_this__u8e3s4, initialValue, targetValue, animationSpec, typeConverter, label_1, $composer_1, 14 & $changed_0 | 57344 & $changed_0 << 9 | 458752 & $changed_0 << 6);
    $composer_1.endReplaceableGroup_ern0ak_k$();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  }
  function get_AnimationDebugDurationScale() {
    return AnimationDebugDurationScale;
  }
  var AnimationDebugDurationScale;
  function TransitionState() {
    this.isRunning$delegate_1 = mutableStateOf(false);
  }
  protoOf(TransitionState).set_isRunning_m21k59_k$ = function (_set____db54di) {
    var this_0 = this.isRunning$delegate_1;
    isRunning$factory_3();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(TransitionState).get_isRunning_okmtn0_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.isRunning$delegate_1;
    isRunning$factory_4();
    return this_0.get_value_j01efc_k$();
  };
  function MutableTransitionState(initialState) {
    TransitionState.call(this);
    this.currentState$delegate_1 = mutableStateOf(initialState);
    this.targetState$delegate_1 = mutableStateOf(initialState);
  }
  protoOf(MutableTransitionState).set_currentState_90n70r_k$ = function (_set____db54di) {
    var this_0 = this.currentState$delegate_1;
    currentState$factory();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(MutableTransitionState).get_currentState_snihnl_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.currentState$delegate_1;
    currentState$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(MutableTransitionState).set_targetState_1ag6bn_k$ = function (_set____db54di) {
    var this_0 = this.targetState$delegate_1;
    targetState$factory_1();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(MutableTransitionState).get_targetState_kri3mx_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.targetState$delegate_1;
    targetState$factory_2();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(MutableTransitionState).get_isIdle_evzi1z_k$ = function () {
    return equals(this.get_currentState_snihnl_k$(), this.get_targetState_kri3mx_k$()) ? !this.get_isRunning_okmtn0_k$() : false;
  };
  protoOf(MutableTransitionState).transitionConfigured_sc6oj5_k$ = function (transition) {
  };
  function animateValue(_this__u8e3s4, typeConverter, transitionSpec, label, targetValueByState, $composer, $changed, $default) {
    var transitionSpec_0 = transitionSpec;
    var label_0 = label;
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-142660079);
    sourceInformation($composer_0, 'CC(animateValue)P(3,2)1084@43046L32,1085@43101L31,1086@43157L23,1088@43193L89:Transition.kt#pdpnli');
    if (!(($default & 2) === 0)) {
      transitionSpec_0 = animateValue$lambda;
    }
    if (!(($default & 4) === 0))
      label_0 = 'ValueAnimation';
    var initialValue = targetValueByState(_this__u8e3s4.get_currentState_snihnl_k$(), $composer_0, 112 & $changed >> 9);
    var targetValue = targetValueByState(_this__u8e3s4.get_targetState_kri3mx_k$(), $composer_0, 112 & $changed >> 9);
    var animationSpec = transitionSpec_0(_this__u8e3s4.get_segment_xwnoei_k$(), $composer_0, 112 & $changed >> 3);
    var tmp0 = createTransitionAnimation(_this__u8e3s4, initialValue, targetValue, animationSpec, typeConverter, label_0, $composer_0, 14 & $changed | 57344 & $changed << 9 | 458752 & $changed << 6);
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  }
  function createTransitionAnimation(_this__u8e3s4, initialValue, targetValue, animationSpec, typeConverter, label, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-304821198);
    sourceInformation($composer_0, 'C(createTransitionAnimation)P(1,3!1,4)1100@43582L499,1123@44465L128,1123@44427L166:Transition.kt#pdpnli');
    if (isTraceInProgress()) {
      traceEventStart(-304821198, $changed, -1, 'androidx.compose.animation.core.createTransitionAnimation (Transition.kt:1099)');
    }
    $composer_0.startReplaceableGroup_ip860b_k$(460692143);
    sourceInformation($composer_0, 'CC(remember):Transition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = (($changed & 14 ^ 6) > 4 ? $composer_0.changed_ga7h3f_k$(_this__u8e3s4) : false) ? true : ($changed & 6) === 4;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.animation.core.createTransitionAnimation.<anonymous>' call
      var value = new TransitionAnimationState(_this__u8e3s4, initialValue, createZeroVectorFrom(typeConverter, targetValue), typeConverter, label);
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    var transitionAnimation = tmp1_group;
    if (_this__u8e3s4.get_isSeeking_vjb393_k$()) {
      transitionAnimation.updateInitialAndTargetValue_ephtkk_k$(initialValue, targetValue, animationSpec);
    } else {
      transitionAnimation.updateTargetValue_yzbefi_k$(targetValue, animationSpec);
    }
    $composer_0.startReplaceableGroup_ip860b_k$(460693026);
    sourceInformation($composer_0, 'CC(remember):Transition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = !!(((($changed & 14 ^ 6) > 4 ? $composer_0.changed_ga7h3f_k$(_this__u8e3s4) : false) ? true : ($changed & 6) === 4) | $composer_0.changed_ga7h3f_k$(transitionAnimation));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_1;
    if (invalid_0 ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.animation.core.createTransitionAnimation.<anonymous>' call
      var value_0 = createTransitionAnimation$lambda(_this__u8e3s4, transitionAnimation);
      $composer_0.updateRememberedValue_l1wh71_k$(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp2_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    DisposableEffect(transitionAnimation, tmp2_group, $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return transitionAnimation;
  }
  function _no_name_provided__qut3iv($transition) {
    this.$transition_1 = $transition;
  }
  protoOf(_no_name_provided__qut3iv).dispose_3nnxhr_k$ = function () {
    // Inline function 'androidx.compose.animation.core.updateTransition.<anonymous>.<anonymous>.<anonymous>' call
    this.$transition_1.onTransitionEnd_dlnhlj_k$();
  };
  function updateTransition$lambda($transition) {
    return function ($this$DisposableEffect) {
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv($transition);
    };
  }
  function animateFloat$lambda($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-522164544);
    if (isTraceInProgress()) {
      traceEventStart(-522164544, $changed, -1, 'androidx.compose.animation.core.animateFloat.<anonymous> (Transition.kt:1163)');
    }
    var tmp0 = spring();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  }
  function animateFloat$lambda_0($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-895531546);
    if (isTraceInProgress()) {
      traceEventStart(-895531546, $changed, -1, 'androidx.compose.animation.core.animateValue.<anonymous> (Transition.kt:1079)');
    }
    var tmp0 = spring();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  }
  function animateValue$lambda($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-895531546);
    if (isTraceInProgress()) {
      traceEventStart(-895531546, $changed, -1, 'androidx.compose.animation.core.animateValue.<anonymous> (Transition.kt:1079)');
    }
    var tmp0 = spring();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  }
  function _no_name_provided__qut3iv_0($this_createTransitionAnimation, $transitionAnimation) {
    this.$this_createTransitionAnimation_1 = $this_createTransitionAnimation;
    this.$transitionAnimation_1 = $transitionAnimation;
  }
  protoOf(_no_name_provided__qut3iv_0).dispose_3nnxhr_k$ = function () {
    // Inline function 'androidx.compose.animation.core.createTransitionAnimation.<anonymous>.<anonymous>.<anonymous>' call
    this.$this_createTransitionAnimation_1.removeAnimation_tcsn90_k$(this.$transitionAnimation_1);
  };
  function createTransitionAnimation$lambda($this_createTransitionAnimation, $transitionAnimation) {
    return function ($this$DisposableEffect) {
      $this_createTransitionAnimation.addAnimation_smuflz_k$($transitionAnimation);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv_0($this_createTransitionAnimation, $transitionAnimation);
    };
  }
  function targetState$factory() {
    return getPropertyCallableRef('targetState', 1, KMutableProperty1, function (receiver) {
      return receiver.get_targetState_kri3mx_k$();
    }, function (receiver, value) {
      return receiver.set_targetState_1ag6bn_k$(value);
    });
  }
  function targetState$factory_0() {
    return getPropertyCallableRef('targetState', 1, KMutableProperty1, function (receiver) {
      return receiver.get_targetState_kri3mx_k$();
    }, function (receiver, value) {
      return receiver.set_targetState_1ag6bn_k$(value);
    });
  }
  function segment$factory() {
    return getPropertyCallableRef('segment', 1, KMutableProperty1, function (receiver) {
      return receiver.get_segment_xwnoei_k$();
    }, function (receiver, value) {
      return _set_segment__77iylu(receiver, value);
    });
  }
  function segment$factory_0() {
    return getPropertyCallableRef('segment', 1, KMutableProperty1, function (receiver) {
      return receiver.get_segment_xwnoei_k$();
    }, function (receiver, value) {
      return _set_segment__77iylu(receiver, value);
    });
  }
  function playTimeNanos$factory() {
    return getPropertyCallableRef('playTimeNanos', 1, KMutableProperty1, function (receiver) {
      return receiver.get_playTimeNanos_50m2yz_k$();
    }, function (receiver, value) {
      return receiver.set_playTimeNanos_8390lf_k$(value);
    });
  }
  function playTimeNanos$factory_0() {
    return getPropertyCallableRef('playTimeNanos', 1, KMutableProperty1, function (receiver) {
      return receiver.get_playTimeNanos_50m2yz_k$();
    }, function (receiver, value) {
      return receiver.set_playTimeNanos_8390lf_k$(value);
    });
  }
  function startTimeNanos$factory() {
    return getPropertyCallableRef('startTimeNanos', 1, KMutableProperty1, function (receiver) {
      return _get_startTimeNanos__r31kgr(receiver);
    }, function (receiver, value) {
      return _set_startTimeNanos__1jy4fb(receiver, value);
    });
  }
  function startTimeNanos$factory_0() {
    return getPropertyCallableRef('startTimeNanos', 1, KMutableProperty1, function (receiver) {
      return _get_startTimeNanos__r31kgr(receiver);
    }, function (receiver, value) {
      return _set_startTimeNanos__1jy4fb(receiver, value);
    });
  }
  function updateChildrenNeeded$factory() {
    return getPropertyCallableRef('updateChildrenNeeded', 1, KMutableProperty1, function (receiver) {
      return receiver.get_updateChildrenNeeded_bsutx6_k$();
    }, function (receiver, value) {
      return receiver.set_updateChildrenNeeded_rw42ud_k$(value);
    });
  }
  function updateChildrenNeeded$factory_0() {
    return getPropertyCallableRef('updateChildrenNeeded', 1, KMutableProperty1, function (receiver) {
      return receiver.get_updateChildrenNeeded_bsutx6_k$();
    }, function (receiver, value) {
      return receiver.set_updateChildrenNeeded_rw42ud_k$(value);
    });
  }
  function isSeeking$factory() {
    return getPropertyCallableRef('isSeeking', 1, KMutableProperty1, function (receiver) {
      return receiver.get_isSeeking_vjb393_k$();
    }, function (receiver, value) {
      return receiver.set_isSeeking_enascu_k$(value);
    });
  }
  function isSeeking$factory_0() {
    return getPropertyCallableRef('isSeeking', 1, KMutableProperty1, function (receiver) {
      return receiver.get_isSeeking_vjb393_k$();
    }, function (receiver, value) {
      return receiver.set_isSeeking_enascu_k$(value);
    });
  }
  function totalDurationNanos$factory() {
    return getPropertyCallableRef('totalDurationNanos', 1, KProperty1, function (receiver) {
      return receiver.get_totalDurationNanos_cuj0z4_k$();
    }, null);
  }
  function targetValue$factory_1() {
    return getPropertyCallableRef('targetValue', 1, KMutableProperty1, function (receiver) {
      return _get_targetValue__jjlmb5(receiver);
    }, function (receiver, value) {
      return _set_targetValue__aqsk0r_0(receiver, value);
    });
  }
  function targetValue$factory_2() {
    return getPropertyCallableRef('targetValue', 1, KMutableProperty1, function (receiver) {
      return _get_targetValue__jjlmb5(receiver);
    }, function (receiver, value) {
      return _set_targetValue__aqsk0r_0(receiver, value);
    });
  }
  function animationSpec$factory() {
    return getPropertyCallableRef('animationSpec', 1, KMutableProperty1, function (receiver) {
      return receiver.get_animationSpec_wdk2t2_k$();
    }, function (receiver, value) {
      return _set_animationSpec__7qdru(receiver, value);
    });
  }
  function animationSpec$factory_0() {
    return getPropertyCallableRef('animationSpec', 1, KMutableProperty1, function (receiver) {
      return receiver.get_animationSpec_wdk2t2_k$();
    }, function (receiver, value) {
      return _set_animationSpec__7qdru(receiver, value);
    });
  }
  function animation$factory() {
    return getPropertyCallableRef('animation', 1, KMutableProperty1, function (receiver) {
      return receiver.get_animation_r0gd0b_k$();
    }, function (receiver, value) {
      return _set_animation__pan2kh(receiver, value);
    });
  }
  function animation$factory_0() {
    return getPropertyCallableRef('animation', 1, KMutableProperty1, function (receiver) {
      return receiver.get_animation_r0gd0b_k$();
    }, function (receiver, value) {
      return _set_animation__pan2kh(receiver, value);
    });
  }
  function isFinished$factory() {
    return getPropertyCallableRef('isFinished', 1, KMutableProperty1, function (receiver) {
      return receiver.get_isFinished_qlhjyd_k$();
    }, function (receiver, value) {
      return receiver.set_isFinished_ptfqd8_k$(value);
    });
  }
  function isFinished$factory_0() {
    return getPropertyCallableRef('isFinished', 1, KMutableProperty1, function (receiver) {
      return receiver.get_isFinished_qlhjyd_k$();
    }, function (receiver, value) {
      return receiver.set_isFinished_ptfqd8_k$(value);
    });
  }
  function offsetTimeNanos$factory() {
    return getPropertyCallableRef('offsetTimeNanos', 1, KMutableProperty1, function (receiver) {
      return _get_offsetTimeNanos__sdn5qq(receiver);
    }, function (receiver, value) {
      return _set_offsetTimeNanos__i9wy86(receiver, value);
    });
  }
  function offsetTimeNanos$factory_0() {
    return getPropertyCallableRef('offsetTimeNanos', 1, KMutableProperty1, function (receiver) {
      return _get_offsetTimeNanos__sdn5qq(receiver);
    }, function (receiver, value) {
      return _set_offsetTimeNanos__i9wy86(receiver, value);
    });
  }
  function needsReset$factory() {
    return getPropertyCallableRef('needsReset', 1, KMutableProperty1, function (receiver) {
      return _get_needsReset__mzz76h(receiver);
    }, function (receiver, value) {
      return _set_needsReset__wyw9nf(receiver, value);
    });
  }
  function needsReset$factory_0() {
    return getPropertyCallableRef('needsReset', 1, KMutableProperty1, function (receiver) {
      return _get_needsReset__mzz76h(receiver);
    }, function (receiver, value) {
      return _set_needsReset__wyw9nf(receiver, value);
    });
  }
  function value$factory_3() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.get_value_j01efc_k$();
    }, function (receiver, value) {
      return receiver.set_value_v1vabv_k$(value);
    });
  }
  function value$factory_4() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.get_value_j01efc_k$();
    }, function (receiver, value) {
      return receiver.set_value_v1vabv_k$(value);
    });
  }
  function data$factory() {
    return getPropertyCallableRef('data', 1, KMutableProperty1, function (receiver) {
      return receiver.get_data_wokkxf_k$();
    }, function (receiver, value) {
      return receiver.set_data_vrvhdm_k$(value);
    });
  }
  function data$factory_0() {
    return getPropertyCallableRef('data', 1, KMutableProperty1, function (receiver) {
      return receiver.get_data_wokkxf_k$();
    }, function (receiver, value) {
      return receiver.set_data_vrvhdm_k$(value);
    });
  }
  function isRunning$factory_3() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.get_isRunning_okmtn0_k$();
    }, function (receiver, value) {
      return receiver.set_isRunning_m21k59_k$(value);
    });
  }
  function isRunning$factory_4() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.get_isRunning_okmtn0_k$();
    }, function (receiver, value) {
      return receiver.set_isRunning_m21k59_k$(value);
    });
  }
  function currentState$factory() {
    return getPropertyCallableRef('currentState', 1, KMutableProperty1, function (receiver) {
      return receiver.get_currentState_snihnl_k$();
    }, function (receiver, value) {
      return receiver.set_currentState_90n70r_k$(value);
    });
  }
  function currentState$factory_0() {
    return getPropertyCallableRef('currentState', 1, KMutableProperty1, function (receiver) {
      return receiver.get_currentState_snihnl_k$();
    }, function (receiver, value) {
      return receiver.set_currentState_90n70r_k$(value);
    });
  }
  function targetState$factory_1() {
    return getPropertyCallableRef('targetState', 1, KMutableProperty1, function (receiver) {
      return receiver.get_targetState_kri3mx_k$();
    }, function (receiver, value) {
      return receiver.set_targetState_1ag6bn_k$(value);
    });
  }
  function targetState$factory_2() {
    return getPropertyCallableRef('targetState', 1, KMutableProperty1, function (receiver) {
      return receiver.get_targetState_kri3mx_k$();
    }, function (receiver, value) {
      return receiver.set_targetState_1ag6bn_k$(value);
    });
  }
  function get_FloatToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return FloatToVector;
  }
  var FloatToVector;
  function get_IntToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return IntToVector;
  }
  var IntToVector;
  function get_DpToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return DpToVector;
  }
  var DpToVector;
  function get_DpOffsetToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return DpOffsetToVector;
  }
  var DpOffsetToVector;
  function get_SizeToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return SizeToVector;
  }
  var SizeToVector;
  function get_OffsetToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return OffsetToVector;
  }
  var OffsetToVector;
  function get_IntOffsetToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return IntOffsetToVector;
  }
  var IntOffsetToVector;
  function get_IntSizeToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return IntSizeToVector;
  }
  var IntSizeToVector;
  function get_RectToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return RectToVector;
  }
  var RectToVector;
  function TwoWayConverter() {
  }
  function TwoWayConverter_0(convertToVector, convertFromVector) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new TwoWayConverterImpl(convertToVector, convertFromVector);
  }
  function TwoWayConverterImpl(convertToVector, convertFromVector) {
    this.convertToVector_1 = convertToVector;
    this.convertFromVector_1 = convertFromVector;
  }
  protoOf(TwoWayConverterImpl).get_convertToVector_s594l4_k$ = function () {
    return this.convertToVector_1;
  };
  protoOf(TwoWayConverterImpl).get_convertFromVector_kmewon_k$ = function () {
    return this.convertFromVector_1;
  };
  function get_VectorConverter(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_IntToVector();
  }
  function get_VectorConverter_0(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_IntSizeToVector();
  }
  function get_VectorConverter_1(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_IntOffsetToVector();
  }
  function get_VectorConverter_2(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_FloatToVector();
  }
  function get_VectorConverter_3(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_RectToVector();
  }
  function get_VectorConverter_4(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_SizeToVector();
  }
  function get_VectorConverter_5(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_OffsetToVector();
  }
  function get_VectorConverter_6(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_DpToVector();
  }
  function get_VectorConverter_7(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_DpOffsetToVector();
  }
  function lerp(start, stop, fraction) {
    _init_properties_VectorConverters_kt__g28mmu();
    return start * (1 - fraction) + stop * fraction;
  }
  function FloatToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector1D(it);
  }
  function FloatToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return it.get_value_j01efc_k$();
  }
  function IntToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector1D(it);
  }
  function IntToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return numberToInt(it.get_value_j01efc_k$());
  }
  function DpToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector1D(_Dp___get_value__impl__geb1vb(it.value_1));
  }
  function DpToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new Dp(_Dp___init__impl__ms3zkb(it.get_value_j01efc_k$()));
  }
  function DpOffsetToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_Dp___get_value__impl__geb1vb(_DpOffset___get_x__impl__uauqb5(it.packedValue_1)), _Dp___get_value__impl__geb1vb(_DpOffset___get_y__impl__1h898y(it.packedValue_1)));
  }
  function DpOffsetToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_0 = it.get_v1_kntnng_k$();
    var tmp = _Dp___init__impl__ms3zkb(this_0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_1 = it.get_v2_kntnnf_k$();
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(this_1);
    return new DpOffset_0(DpOffset(tmp, tmp$ret$1));
  }
  function SizeToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_Size___get_width__impl__58y75t(it.packedValue_1), _Size___get_height__impl__a04p02(it.packedValue_1));
  }
  function SizeToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new Size(Size_0(it.get_v1_kntnng_k$(), it.get_v2_kntnnf_k$()));
  }
  function OffsetToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_Offset___get_x__impl__xvi35n(it.packedValue_1), _Offset___get_y__impl__8bzhra(it.packedValue_1));
  }
  function OffsetToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new Offset(Offset_0(it.get_v1_kntnng_k$(), it.get_v2_kntnnf_k$()));
  }
  function IntOffsetToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_IntOffset___get_x__impl__qiqr5o(it.packedValue_1), _IntOffset___get_y__impl__2avpwj(it.packedValue_1));
  }
  function IntOffsetToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    // Inline function 'kotlin.math.roundToInt' call
    var this_0 = it.get_v1_kntnng_k$();
    var tmp = roundToInt(this_0);
    // Inline function 'kotlin.math.roundToInt' call
    var this_1 = it.get_v2_kntnnf_k$();
    var tmp$ret$1 = roundToInt(this_1);
    return new IntOffset(IntOffset_0(tmp, tmp$ret$1));
  }
  function IntSizeToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_IntSize___get_width__impl__d9yl4o(it.packedValue_1), _IntSize___get_height__impl__prv63b(it.packedValue_1));
  }
  function IntSizeToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    // Inline function 'kotlin.math.roundToInt' call
    var this_0 = it.get_v1_kntnng_k$();
    var tmp = roundToInt(this_0);
    // Inline function 'kotlin.math.roundToInt' call
    var this_1 = it.get_v2_kntnnf_k$();
    var tmp$ret$1 = roundToInt(this_1);
    return new IntSize(IntSize_0(tmp, tmp$ret$1));
  }
  function RectToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector4D(it.get_left_woprgw_k$(), it.get_top_18ivbo_k$(), it.get_right_ixz7xv_k$(), it.get_bottom_bj8ras_k$());
  }
  function RectToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new Rect(it.get_v1_kntnng_k$(), it.get_v2_kntnnf_k$(), it.get_v3_kntnne_k$(), it.get_v4_kntnnd_k$());
  }
  var properties_initialized_VectorConverters_kt_cg0a6g;
  function _init_properties_VectorConverters_kt__g28mmu() {
    if (!properties_initialized_VectorConverters_kt_cg0a6g) {
      properties_initialized_VectorConverters_kt_cg0a6g = true;
      var tmp = FloatToVector$lambda;
      FloatToVector = TwoWayConverter_0(tmp, FloatToVector$lambda_0);
      var tmp_0 = IntToVector$lambda;
      IntToVector = TwoWayConverter_0(tmp_0, IntToVector$lambda_0);
      var tmp_1 = DpToVector$lambda;
      DpToVector = TwoWayConverter_0(tmp_1, DpToVector$lambda_0);
      var tmp_2 = DpOffsetToVector$lambda;
      DpOffsetToVector = TwoWayConverter_0(tmp_2, DpOffsetToVector$lambda_0);
      var tmp_3 = SizeToVector$lambda;
      SizeToVector = TwoWayConverter_0(tmp_3, SizeToVector$lambda_0);
      var tmp_4 = OffsetToVector$lambda;
      OffsetToVector = TwoWayConverter_0(tmp_4, OffsetToVector$lambda_0);
      var tmp_5 = IntOffsetToVector$lambda;
      IntOffsetToVector = TwoWayConverter_0(tmp_5, IntOffsetToVector$lambda_0);
      var tmp_6 = IntSizeToVector$lambda;
      IntSizeToVector = TwoWayConverter_0(tmp_6, IntSizeToVector$lambda_0);
      var tmp_7 = RectToVector$lambda;
      RectToVector = TwoWayConverter_0(tmp_7, RectToVector$lambda_0);
    }
  }
  function Spring() {
    Spring_instance = this;
    this.StiffnessHigh_1 = 10000.0;
    this.StiffnessMedium_1 = 1500.0;
    this.StiffnessMediumLow_1 = 400.0;
    this.StiffnessLow_1 = 200.0;
    this.StiffnessVeryLow_1 = 50.0;
    this.DampingRatioHighBouncy_1 = 0.2;
    this.DampingRatioMediumBouncy_1 = 0.5;
    this.DampingRatioLowBouncy_1 = 0.75;
    this.DampingRatioNoBouncy_1 = 1.0;
    this.DefaultDisplacementThreshold_1 = 0.01;
  }
  protoOf(Spring).get_StiffnessHigh_u6kma0_k$ = function () {
    return this.StiffnessHigh_1;
  };
  protoOf(Spring).get_StiffnessMedium_mjh6r9_k$ = function () {
    return this.StiffnessMedium_1;
  };
  protoOf(Spring).get_StiffnessMediumLow_62ltjd_k$ = function () {
    return this.StiffnessMediumLow_1;
  };
  protoOf(Spring).get_StiffnessLow_86wgla_k$ = function () {
    return this.StiffnessLow_1;
  };
  protoOf(Spring).get_StiffnessVeryLow_1smo6g_k$ = function () {
    return this.StiffnessVeryLow_1;
  };
  protoOf(Spring).get_DampingRatioHighBouncy_dr3500_k$ = function () {
    return this.DampingRatioHighBouncy_1;
  };
  protoOf(Spring).get_DampingRatioMediumBouncy_wgfzkt_k$ = function () {
    return this.DampingRatioMediumBouncy_1;
  };
  protoOf(Spring).get_DampingRatioLowBouncy_llm1zy_k$ = function () {
    return this.DampingRatioLowBouncy_1;
  };
  protoOf(Spring).get_DampingRatioNoBouncy_45ga5r_k$ = function () {
    return this.DampingRatioNoBouncy_1;
  };
  protoOf(Spring).get_DefaultDisplacementThreshold_1c58p0_k$ = function () {
    return this.DefaultDisplacementThreshold_1;
  };
  var Spring_instance;
  function Spring_getInstance() {
    if (Spring_instance == null)
      new Spring();
    return Spring_instance;
  }
  function VectorizedSpringSpec_init_$Init$(dampingRatio, stiffness, visibilityThreshold, $this) {
    dampingRatio = dampingRatio === VOID ? 1.0 : dampingRatio;
    stiffness = stiffness === VOID ? 1500.0 : stiffness;
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    VectorizedSpringSpec.call($this, dampingRatio, stiffness, createSpringAnimations(visibilityThreshold, dampingRatio, stiffness));
    return $this;
  }
  function VectorizedSpringSpec_init_$Create$(dampingRatio, stiffness, visibilityThreshold) {
    return VectorizedSpringSpec_init_$Init$(dampingRatio, stiffness, visibilityThreshold, objectCreate(protoOf(VectorizedSpringSpec)));
  }
  function VectorizedSpringSpec(dampingRatio, stiffness, anims) {
    this.dampingRatio_1 = dampingRatio;
    this.stiffness_1 = stiffness;
    this.$$delegate_0__1 = new VectorizedFloatAnimationSpec(anims);
  }
  protoOf(VectorizedSpringSpec).get_dampingRatio_syjss2_k$ = function () {
    return this.dampingRatio_1;
  };
  protoOf(VectorizedSpringSpec).get_stiffness_dt2sgm_k$ = function () {
    return this.stiffness_1;
  };
  protoOf(VectorizedSpringSpec).get_isInfinite_uffwnt_k$ = function () {
    return this.$$delegate_0__1.get_isInfinite_uffwnt_k$();
  };
  protoOf(VectorizedSpringSpec).getDurationNanos_c9o343_k$ = function (initialValue, targetValue, initialVelocity) {
    return this.$$delegate_0__1.getDurationNanos_c9o343_k$(initialValue, targetValue, initialVelocity);
  };
  protoOf(VectorizedSpringSpec).getEndVelocity_j9v6ly_k$ = function (initialValue, targetValue, initialVelocity) {
    return this.$$delegate_0__1.getEndVelocity_j9v6ly_k$(initialValue, targetValue, initialVelocity);
  };
  protoOf(VectorizedSpringSpec).getValueFromNanos_xg3j38_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.$$delegate_0__1.getValueFromNanos_xg3j38_k$(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  protoOf(VectorizedSpringSpec).getVelocityFromNanos_wafrjo_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.$$delegate_0__1.getVelocityFromNanos_wafrjo_k$(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  function VectorizedFiniteAnimationSpec() {
  }
  function VectorizedAnimationSpec() {
  }
  function Animations() {
  }
  function _get_anims__juyc8h($this) {
    return $this.anims_1;
  }
  function _set_valueVector__dppd9t($this, _set____db54di) {
    $this.valueVector_1 = _set____db54di;
  }
  function _get_valueVector__r10idf($this) {
    var tmp = $this.valueVector_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('valueVector');
    }
  }
  function _set_velocityVector__vm30d3_0($this, _set____db54di) {
    $this.velocityVector_1 = _set____db54di;
  }
  function _get_velocityVector__dvxlkl_0($this) {
    var tmp = $this.velocityVector_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('velocityVector');
    }
  }
  function _set_endVelocityVector__h8kq2($this, _set____db54di) {
    $this.endVelocityVector_1 = _set____db54di;
  }
  function _get_endVelocityVector__l8kbka($this) {
    var tmp = $this.endVelocityVector_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('endVelocityVector');
    }
  }
  function VectorizedFloatAnimationSpec_init_$Init$(anim, $this) {
    VectorizedFloatAnimationSpec.call($this, new VectorizedFloatAnimationSpec$1(anim));
    return $this;
  }
  function VectorizedFloatAnimationSpec_init_$Create$(anim) {
    return VectorizedFloatAnimationSpec_init_$Init$(anim, objectCreate(protoOf(VectorizedFloatAnimationSpec)));
  }
  function VectorizedFloatAnimationSpec$1($anim) {
    this.$anim_1 = $anim;
  }
  protoOf(VectorizedFloatAnimationSpec$1).get_c1px32_k$ = function (index) {
    return this.$anim_1;
  };
  function VectorizedFloatAnimationSpec(anims) {
    this.anims_1 = anims;
  }
  protoOf(VectorizedFloatAnimationSpec).getValueFromNanos_xg3j38_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    if (!!(this.valueVector_1 == null)) {
      this.valueVector_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_valueVector__r10idf(this).get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_valueVector__r10idf(this).set_4eugj6_k$(i, this.anims_1.get_c1px32_k$(i).getValueFromNanos_rdghrw_k$(playTimeNanos, initialValue.get_c1px32_k$(i), targetValue.get_c1px32_k$(i), initialVelocity.get_c1px32_k$(i)));
      }
       while (inductionVariable < last);
    return _get_valueVector__r10idf(this);
  };
  protoOf(VectorizedFloatAnimationSpec).getVelocityFromNanos_wafrjo_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    if (!!(this.velocityVector_1 == null)) {
      this.velocityVector_1 = newInstance(initialVelocity);
    }
    var inductionVariable = 0;
    var last = _get_velocityVector__dvxlkl_0(this).get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_velocityVector__dvxlkl_0(this).set_4eugj6_k$(i, this.anims_1.get_c1px32_k$(i).getVelocityFromNanos_d1b1ck_k$(playTimeNanos, initialValue.get_c1px32_k$(i), targetValue.get_c1px32_k$(i), initialVelocity.get_c1px32_k$(i)));
      }
       while (inductionVariable < last);
    return _get_velocityVector__dvxlkl_0(this);
  };
  protoOf(VectorizedFloatAnimationSpec).getEndVelocity_j9v6ly_k$ = function (initialValue, targetValue, initialVelocity) {
    if (!!(this.endVelocityVector_1 == null)) {
      this.endVelocityVector_1 = newInstance(initialVelocity);
    }
    var inductionVariable = 0;
    var last = _get_endVelocityVector__l8kbka(this).get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_endVelocityVector__l8kbka(this).set_4eugj6_k$(i, this.anims_1.get_c1px32_k$(i).getEndVelocity_jstvkm_k$(initialValue.get_c1px32_k$(i), targetValue.get_c1px32_k$(i), initialVelocity.get_c1px32_k$(i)));
      }
       while (inductionVariable < last);
    return _get_endVelocityVector__l8kbka(this);
  };
  protoOf(VectorizedFloatAnimationSpec).getDurationNanos_c9o343_k$ = function (initialValue, targetValue, initialVelocity) {
    var maxDuration = new Long(0, 0);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = until(0, initialValue.get_size_woubt6_k$()).iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'androidx.compose.animation.core.VectorizedFloatAnimationSpec.getDurationNanos.<anonymous>' call
      // Inline function 'kotlin.comparisons.maxOf' call
      var a = maxDuration;
      var b = this.anims_1.get_c1px32_k$(element).getDurationNanos_taoclf_k$(initialValue.get_c1px32_k$(element), targetValue.get_c1px32_k$(element), initialVelocity.get_c1px32_k$(element));
      maxDuration = a.compareTo_9jj042_k$(b) >= 0 ? a : b;
    }
    return maxDuration;
  };
  function createSpringAnimations(visibilityThreshold, dampingRatio, stiffness) {
    if (!(visibilityThreshold == null)) {
      return new createSpringAnimations$1(visibilityThreshold, dampingRatio, stiffness);
    } else {
      return new createSpringAnimations$2(dampingRatio, stiffness);
    }
  }
  function _get_animation__gfmj03($this) {
    return $this.animation_1;
  }
  function _get_repeatMode__51xaqb($this) {
    return $this.repeatMode_1;
  }
  function VectorizedInfiniteRepeatableSpec_init_$Init$(animation, repeatMode, $this) {
    repeatMode = repeatMode === VOID ? RepeatMode_Restart_getInstance() : repeatMode;
    VectorizedInfiniteRepeatableSpec.call($this, animation, repeatMode, _StartOffset___init__impl__615djw_0(0));
    return $this;
  }
  function VectorizedInfiniteRepeatableSpec_init_$Create$(animation, repeatMode) {
    return VectorizedInfiniteRepeatableSpec_init_$Init$(animation, repeatMode, objectCreate(protoOf(VectorizedInfiniteRepeatableSpec)));
  }
  function _get_initialOffsetNanos__jwv1fh($this) {
    return $this.initialOffsetNanos_1;
  }
  function repetitionPlayTimeNanos($this, playTimeNanos) {
    if (playTimeNanos.plus_r93sks_k$($this.initialOffsetNanos_1).compareTo_9jj042_k$(new Long(0, 0)) <= 0) {
      return new Long(0, 0);
    } else {
      var postOffsetPlayTimeNanos = playTimeNanos.plus_r93sks_k$($this.initialOffsetNanos_1);
      var repeatsCount = postOffsetPlayTimeNanos.div_jun7gj_k$($this.durationNanos_1);
      var tmp;
      if ($this.repeatMode_1.equals(RepeatMode_Restart_getInstance())) {
        tmp = true;
      } else {
        // Inline function 'kotlin.Long.rem' call
        tmp = repeatsCount.rem_bsnl9o_k$(toLong(2)).equals(new Long(0, 0));
      }
      if (tmp) {
        return postOffsetPlayTimeNanos.minus_mfbszm_k$(repeatsCount.times_nfzjiw_k$($this.durationNanos_1));
      } else {
        // Inline function 'kotlin.Long.plus' call
        return repeatsCount.plus_r93sks_k$(toLong(1)).times_nfzjiw_k$($this.durationNanos_1).minus_mfbszm_k$(postOffsetPlayTimeNanos);
      }
    }
  }
  function repetitionStartVelocity($this, playTimeNanos, start, startVelocity, end) {
    var tmp;
    if (playTimeNanos.plus_r93sks_k$($this.initialOffsetNanos_1).compareTo_9jj042_k$($this.durationNanos_1) > 0) {
      tmp = $this.animation_1.getVelocityFromNanos_wafrjo_k$($this.durationNanos_1.minus_mfbszm_k$($this.initialOffsetNanos_1), start, end, startVelocity);
    } else {
      tmp = startVelocity;
    }
    return tmp;
  }
  function VectorizedInfiniteRepeatableSpec(animation, repeatMode, initialStartOffset) {
    repeatMode = repeatMode === VOID ? RepeatMode_Restart_getInstance() : repeatMode;
    initialStartOffset = initialStartOffset === VOID ? _StartOffset___init__impl__615djw_0(0) : initialStartOffset;
    this.animation_1 = animation;
    this.repeatMode_1 = repeatMode;
    this.durationNanos_1 = numberToLong(this.animation_1.get_delayMillis_d968n4_k$() + this.animation_1.get_durationMillis_pqx05f_k$() | 0).times_nfzjiw_k$(get_MillisToNanos());
    this.initialOffsetNanos_1 = _StartOffset___get_value__impl__8sikig(initialStartOffset).times_nfzjiw_k$(get_MillisToNanos());
  }
  protoOf(VectorizedInfiniteRepeatableSpec).get_isInfinite_uffwnt_k$ = function () {
    return true;
  };
  protoOf(VectorizedInfiniteRepeatableSpec).get_durationNanos_ub5cy_k$ = function () {
    return this.durationNanos_1;
  };
  protoOf(VectorizedInfiniteRepeatableSpec).getValueFromNanos_xg3j38_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.animation_1.getValueFromNanos_xg3j38_k$(repetitionPlayTimeNanos(this, playTimeNanos), initialValue, targetValue, repetitionStartVelocity(this, playTimeNanos, initialValue, initialVelocity, targetValue));
  };
  protoOf(VectorizedInfiniteRepeatableSpec).getVelocityFromNanos_wafrjo_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.animation_1.getVelocityFromNanos_wafrjo_k$(repetitionPlayTimeNanos(this, playTimeNanos), initialValue, targetValue, repetitionStartVelocity(this, playTimeNanos, initialValue, initialVelocity, targetValue));
  };
  protoOf(VectorizedInfiniteRepeatableSpec).getDurationNanos_c9o343_k$ = function (initialValue, targetValue, initialVelocity) {
    return Companion_getInstance_6().get_MAX_VALUE_54a9lf_k$();
  };
  function VectorizedDurationBasedAnimationSpec() {
  }
  function _get_keyframes__i12zvw($this) {
    return $this.keyframes_1;
  }
  function _set_valueVector__dppd9t_0($this, _set____db54di) {
    $this.valueVector_1 = _set____db54di;
  }
  function _get_valueVector__r10idf_0($this) {
    var tmp = $this.valueVector_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('valueVector');
    }
  }
  function _set_velocityVector__vm30d3_1($this, _set____db54di) {
    $this.velocityVector_1 = _set____db54di;
  }
  function _get_velocityVector__dvxlkl_1($this) {
    var tmp = $this.velocityVector_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('velocityVector');
    }
  }
  function init_0($this, value) {
    if (!!($this.valueVector_1 == null)) {
      $this.valueVector_1 = newInstance(value);
      $this.velocityVector_1 = newInstance(value);
    }
  }
  function VectorizedKeyframesSpec(keyframes, durationMillis, delayMillis) {
    delayMillis = delayMillis === VOID ? 0 : delayMillis;
    this.keyframes_1 = keyframes;
    this.durationMillis_1 = durationMillis;
    this.delayMillis_1 = delayMillis;
  }
  protoOf(VectorizedKeyframesSpec).get_durationMillis_pqx05f_k$ = function () {
    return this.durationMillis_1;
  };
  protoOf(VectorizedKeyframesSpec).get_delayMillis_d968n4_k$ = function () {
    return this.delayMillis_1;
  };
  protoOf(VectorizedKeyframesSpec).getValueFromNanos_xg3j38_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.div_jun7gj_k$(get_MillisToNanos());
    var clampedPlayTime = clampPlayTime_0(this, playTimeMillis).toInt_1tsl84_k$();
    if (this.keyframes_1.containsKey_aw81wo_k$(clampedPlayTime)) {
      return getValue(this.keyframes_1, clampedPlayTime).get_first_irdx8n_k$();
    }
    if (clampedPlayTime >= this.durationMillis_1) {
      return targetValue;
    } else if (clampedPlayTime <= 0)
      return initialValue;
    var startTime = 0;
    var startVal = initialValue;
    var endVal = targetValue;
    var endTime = this.durationMillis_1;
    var easing = get_LinearEasing();
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.keyframes_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var tmp1_loop_parameter = tmp0_iterator.next_20eer_k$();
      // Inline function 'kotlin.collections.component1' call
      var timestamp = tmp1_loop_parameter.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var value = tmp1_loop_parameter.get_value_j01efc_k$();
      if (clampedPlayTime > timestamp ? timestamp >= startTime : false) {
        startTime = timestamp;
        startVal = value.get_first_irdx8n_k$();
        easing = value.get_second_jf7fjx_k$();
      } else if (clampedPlayTime < timestamp ? timestamp <= endTime : false) {
        endTime = timestamp;
        endVal = value.get_first_irdx8n_k$();
      }
    }
    var fraction = easing.transform_twmo38_k$((clampedPlayTime - startTime | 0) / (endTime - startTime | 0));
    init_0(this, initialValue);
    var inductionVariable = 0;
    var last = startVal.get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_valueVector__r10idf_0(this).set_4eugj6_k$(i, lerp(startVal.get_c1px32_k$(i), endVal.get_c1px32_k$(i), fraction));
      }
       while (inductionVariable < last);
    return _get_valueVector__r10idf_0(this);
  };
  protoOf(VectorizedKeyframesSpec).getVelocityFromNanos_wafrjo_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.div_jun7gj_k$(get_MillisToNanos());
    var clampedPlayTime = clampPlayTime_0(this, playTimeMillis);
    if (clampedPlayTime.compareTo_9jj042_k$(new Long(0, 0)) <= 0) {
      return initialVelocity;
    }
    // Inline function 'kotlin.Long.minus' call
    var tmp$ret$0 = clampedPlayTime.minus_mfbszm_k$(toLong(1));
    var startNum = getValueFromMillis(this, tmp$ret$0, initialValue, targetValue, initialVelocity);
    var endNum = getValueFromMillis(this, clampedPlayTime, initialValue, targetValue, initialVelocity);
    init_0(this, initialValue);
    var inductionVariable = 0;
    var last = startNum.get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_velocityVector__dvxlkl_1(this).set_4eugj6_k$(i, (startNum.get_c1px32_k$(i) - endNum.get_c1px32_k$(i)) * 1000.0);
      }
       while (inductionVariable < last);
    return _get_velocityVector__dvxlkl_1(this);
  };
  function _get_anim__d3v13u($this) {
    return $this.anim_1;
  }
  function VectorizedTweenSpec(durationMillis, delayMillis, easing) {
    durationMillis = durationMillis === VOID ? AnimationConstants_getInstance().get_DefaultDurationMillis_kgwre6_k$() : durationMillis;
    delayMillis = delayMillis === VOID ? 0 : delayMillis;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    this.durationMillis_1 = durationMillis;
    this.delayMillis_1 = delayMillis;
    this.easing_1 = easing;
    this.anim_1 = VectorizedFloatAnimationSpec_init_$Create$(new FloatTweenSpec(this.durationMillis_1, this.delayMillis_1, this.easing_1));
  }
  protoOf(VectorizedTweenSpec).get_durationMillis_pqx05f_k$ = function () {
    return this.durationMillis_1;
  };
  protoOf(VectorizedTweenSpec).get_delayMillis_d968n4_k$ = function () {
    return this.delayMillis_1;
  };
  protoOf(VectorizedTweenSpec).get_easing_cqnn04_k$ = function () {
    return this.easing_1;
  };
  protoOf(VectorizedTweenSpec).getValueFromNanos_xg3j38_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.anim_1.getValueFromNanos_xg3j38_k$(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  protoOf(VectorizedTweenSpec).getVelocityFromNanos_wafrjo_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.anim_1.getVelocityFromNanos_wafrjo_k$(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  function clampPlayTime_0(_this__u8e3s4, playTime) {
    // Inline function 'kotlin.Long.minus' call
    var other = _this__u8e3s4.get_delayMillis_d968n4_k$();
    var tmp$ret$0 = playTime.minus_mfbszm_k$(toLong(other));
    return coerceIn_0(tmp$ret$0, new Long(0, 0), toLong(_this__u8e3s4.get_durationMillis_pqx05f_k$()));
  }
  function getValueFromMillis(_this__u8e3s4, playTimeMillis, start, end, startVelocity) {
    return _this__u8e3s4.getValueFromNanos_xg3j38_k$(playTimeMillis.times_nfzjiw_k$(get_MillisToNanos()), start, end, startVelocity);
  }
  function _get_anims__juyc8h_0($this) {
    return $this.anims_1;
  }
  function createSpringAnimations$1($visibilityThreshold, $dampingRatio, $stiffness) {
    var tmp = this;
    // Inline function 'kotlin.collections.map' call
    var this_0 = until(0, $visibilityThreshold.get_size_woubt6_k$());
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'androidx.compose.animation.core.<no name provided>.anims.<anonymous>' call
      var tmp$ret$0 = new FloatSpringSpec($dampingRatio, $stiffness, $visibilityThreshold.get_c1px32_k$(item));
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    tmp.anims_1 = destination;
  }
  protoOf(createSpringAnimations$1).get_c1px32_k$ = function (index) {
    return this.anims_1.get_c1px32_k$(index);
  };
  function _get_anim__d3v13u_0($this) {
    return $this.anim_1;
  }
  function createSpringAnimations$2($dampingRatio, $stiffness) {
    this.anim_1 = new FloatSpringSpec($dampingRatio, $stiffness);
  }
  protoOf(createSpringAnimations$2).get_c1px32_k$ = function (index) {
    return this.anim_1;
  };
  function VectorizedDecayAnimationSpec() {
  }
  function get_rectVisibilityThreshold() {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return rectVisibilityThreshold;
  }
  var rectVisibilityThreshold;
  function get_visibilityThresholdMap() {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return visibilityThresholdMap;
  }
  var visibilityThresholdMap;
  function get_VisibilityThreshold(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    // Inline function 'androidx.compose.ui.unit.dp' call
    return _Dp___init__impl__ms3zkb(0.1);
  }
  function get_VisibilityThreshold_0(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return Size_0(0.5, 0.5);
  }
  function get_VisibilityThreshold_1(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return Offset_0(0.5, 0.5);
  }
  function get_VisibilityThreshold_2(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return get_rectVisibilityThreshold();
  }
  function get_VisibilityThreshold_3(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return 1;
  }
  function get_VisibilityThreshold_4(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return IntOffset_0(1, 1);
  }
  function get_VisibilityThreshold_5(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return IntSize_0(1, 1);
  }
  function get_PxVisibilityThreshold() {
    return PxVisibilityThreshold;
  }
  var PxVisibilityThreshold;
  function get_DpVisibilityThreshold() {
    return DpVisibilityThreshold;
  }
  var DpVisibilityThreshold;
  var properties_initialized_VisibilityThresholds_kt_k6rdp8;
  function _init_properties_VisibilityThresholds_kt__rvu6yi() {
    if (!properties_initialized_VisibilityThresholds_kt_k6rdp8) {
      properties_initialized_VisibilityThresholds_kt_k6rdp8 = true;
      rectVisibilityThreshold = new Rect(0.5, 0.5, 0.5, 0.5);
      visibilityThresholdMap = mapOf([to(get_VectorConverter(IntCompanionObject_getInstance()), 1.0), to(get_VectorConverter_0(Companion_getInstance_5()), 1.0), to(get_VectorConverter_1(Companion_getInstance_4()), 1.0), to(get_VectorConverter_2(FloatCompanionObject_getInstance()), 0.01), to(get_VectorConverter_3(Companion_getInstance_3()), 0.5), to(get_VectorConverter_4(Companion_getInstance_1()), 0.5), to(get_VectorConverter_5(Companion_getInstance_2()), 0.5), to(get_VectorConverter_6(Companion_getInstance()), 0.1), to(get_VectorConverter_7(Companion_getInstance_7()), 0.1)]);
    }
  }
  function _get_delegate__idh0py($this) {
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
    // Inline function 'androidx.compose.animation.core.AtomicReference.set.<set-delegate>' call
    this.delegate_1 = value;
  };
  protoOf(AtomicReference).getAndSet_6mmyt0_k$ = function (value) {
    // Inline function 'kotlinx.atomicfu.atomicfu_getAndSet' call
    var oldValue = this.delegate_1;
    // Inline function 'androidx.compose.animation.core.AtomicReference.getAndSet.<set-delegate>' call
    this.delegate_1 = value;
    return oldValue;
  };
  protoOf(AtomicReference).compareAndSet_10iwom_k$ = function (expect, newValue) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.atomicfu.atomicfu_compareAndSet' call
      if (equals(this.delegate_1, expect)) {
        // Inline function 'androidx.compose.animation.core.AtomicReference.compareAndSet.<set-delegate>' call
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
    return '@androidx.compose.animation.core.internal.NoOp()';
  };
  function PlatformOptimizedCancellationException(message) {
    message = message === VOID ? null : message;
    CancellationException_init_$Init$(message, this);
    captureStack(this, PlatformOptimizedCancellationException);
  }
  //region block: post-declaration
  protoOf(TargetBasedAnimation).isFinishedFromNanos_c31w39_k$ = isFinishedFromNanos;
  protoOf(DecayAnimation).isFinishedFromNanos_c31w39_k$ = isFinishedFromNanos;
  protoOf(FloatSpringSpec).vectorize_7dxvko_k$ = vectorize;
  protoOf(FloatTweenSpec).getEndVelocity_jstvkm_k$ = getEndVelocity;
  protoOf(FloatTweenSpec).vectorize_7dxvko_k$ = vectorize;
  protoOf(SegmentImpl).isTransitioningTo_mjamuk_k$ = isTransitioningTo;
  protoOf(VectorizedFloatAnimationSpec).get_isInfinite_uffwnt_k$ = get_isInfinite;
  protoOf(VectorizedInfiniteRepeatableSpec).getEndVelocity_j9v6ly_k$ = getEndVelocity_0;
  protoOf(VectorizedKeyframesSpec).getDurationNanos_c9o343_k$ = getDurationNanos;
  protoOf(VectorizedKeyframesSpec).get_isInfinite_uffwnt_k$ = get_isInfinite;
  protoOf(VectorizedKeyframesSpec).getEndVelocity_j9v6ly_k$ = getEndVelocity_0;
  protoOf(VectorizedTweenSpec).getDurationNanos_c9o343_k$ = getDurationNanos;
  protoOf(VectorizedTweenSpec).get_isInfinite_uffwnt_k$ = get_isInfinite;
  protoOf(VectorizedTweenSpec).getEndVelocity_j9v6ly_k$ = getEndVelocity_0;
  //endregion
  //region block: init
  MillisToNanos = new Long(1000000, 0);
  CubicErrorBound = 0.001;
  UNSET = 3.4028235E38;
  AnimationDebugDurationScale = 1;
  PxVisibilityThreshold = 0.5;
  DpVisibilityThreshold = 0.1;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Animatable;
  _.$_$.b = AnimationState_0;
  _.$_$.c = AnimationVector2D;
  _.$_$.d = AnimationVector4D;
  _.$_$.e = CubicBezierEasing;
  _.$_$.f = get_FastOutLinearInEasing;
  _.$_$.g = get_FastOutSlowInEasing;
  _.$_$.h = get_LinearEasing;
  _.$_$.i = SpringSpec;
  _.$_$.j = TweenSpec;
  _.$_$.k = TwoWayConverter_0;
  _.$_$.l = get_VectorConverter_1;
  _.$_$.m = get_VectorConverter_2;
  _.$_$.n = get_VisibilityThreshold_4;
  _.$_$.o = get_VisibilityThreshold_5;
  _.$_$.p = animateDpAsState;
  _.$_$.q = animateValueAsState;
  _.$_$.r = copy;
  _.$_$.s = createTransitionAnimation;
  _.$_$.t = infiniteRepeatable;
  _.$_$.u = keyframes;
  _.$_$.v = spring;
  _.$_$.w = tween;
  _.$_$.x = updateTransition;
  _.$_$.y = animateTo;
  _.$_$.z = Spring_getInstance;
  //endregion
  return _;
}));
