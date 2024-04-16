(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-animation-animation-core.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './compose-multiplatform-core-compose-ui-ui.js', './compose-multiplatform-core-compose-runtime-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-animation-animation-core.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof this['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof this['compose-multiplatform-core-compose-animation-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-compose-animation-animation-core' was not found. Please, check whether 'compose-multiplatform-core-compose-animation-animation-core' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof this['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof this['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    root['compose-multiplatform-core-compose-animation-animation'] = factory(typeof this['compose-multiplatform-core-compose-animation-animation'] === 'undefined' ? {} : this['compose-multiplatform-core-compose-animation-animation'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-compose-ui-ui-unit'], this['compose-multiplatform-core-compose-animation-animation-core'], this['compose-multiplatform-core-compose-ui-ui-graphics'], this['compose-multiplatform-core-compose-ui-ui'], this['compose-multiplatform-core-compose-runtime-runtime']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.g5;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z;
  var TwoWayConverter = kotlin_org_jetbrains_compose_animation_animation_core.$_$.k;
  var ColorSpaces_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.g3;
  var Color__convert_impl_so5m8t = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o2;
  var Color__component1_impl_lz80qe = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.k2;
  var Color__component2_impl_mg9n4l = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l2;
  var Color__component3_impl_mxb9is = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m2;
  var Color__component4_impl_necvwz = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n2;
  var AnimationVector4D = kotlin_org_jetbrains_compose_animation_animation_core.$_$.d;
  var coerceIn = kotlin_kotlin.$_$.yf;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j;
  var protoOf = kotlin_kotlin.$_$.bf;
  var THROW_CCE = kotlin_kotlin.$_$.vj;
  var Annotation = kotlin_kotlin.$_$.bj;
  var classMeta = kotlin_kotlin.$_$.pd;
  var setMetadataFor = kotlin_kotlin.$_$.cf;
  var VOID = kotlin_kotlin.$_$.g;
  var objectMeta = kotlin_kotlin.$_$.af;
  var plus = kotlin_kotlin.$_$.ma;
  var Spring_getInstance = kotlin_org_jetbrains_compose_animation_animation_core.$_$.z;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m3;
  var get_VisibilityThreshold = kotlin_org_jetbrains_compose_animation_animation_core.$_$.o;
  var IntSize_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a1;
  var spring = kotlin_org_jetbrains_compose_animation_animation_core.$_$.v;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.j4;
  var emptyMap = kotlin_kotlin.$_$.u8;
  var getBooleanHashCode = kotlin_kotlin.$_$.xd;
  var hashCode = kotlin_kotlin.$_$.de;
  var equals = kotlin_kotlin.$_$.td;
  var getNumberHashCode = kotlin_kotlin.$_$.zd;
  var TransformOrigin = kotlin_org_jetbrains_compose_ui_ui.$_$.h;
  var TransformOrigin__hashCode_impl_pmqpcw = kotlin_org_jetbrains_compose_ui_ui.$_$.x3;
  var _TransformOrigin___get_pivotFractionX__impl__a9pmci = kotlin_org_jetbrains_compose_ui_ui.$_$.y3;
  var _TransformOrigin___get_pivotFractionY__impl__ijwupp = kotlin_org_jetbrains_compose_ui_ui.$_$.z3;
  var AnimationVector2D = kotlin_org_jetbrains_compose_animation_animation_core.$_$.c;
  var TransformOrigin_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.g;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t2;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s2;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k3;
  var get_VisibilityThreshold_0 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.n;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var _Color___get_colorSpace__impl__jqqozk = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j2;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l3;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var animateValueAsState = kotlin_org_jetbrains_compose_animation_animation_core.$_$.q;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v1;
  var createTransitionAnimation = kotlin_org_jetbrains_compose_animation_animation_core.$_$.s;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ExperimentalAnimationApi, 'ExperimentalAnimationApi', classMeta, VOID, [Annotation]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(ExitTransition, 'ExitTransition', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(EnterTransition, 'EnterTransition', classMeta);
  setMetadataFor(TransitionData, 'TransitionData', classMeta, VOID, VOID, TransitionData);
  setMetadataFor(ExitTransitionImpl, 'ExitTransitionImpl', classMeta, ExitTransition);
  setMetadataFor(Fade, 'Fade', classMeta);
  setMetadataFor(Slide, 'Slide', classMeta);
  setMetadataFor(ChangeSize, 'ChangeSize', classMeta);
  setMetadataFor(Scale, 'Scale', classMeta);
  setMetadataFor(EnterTransitionImpl, 'EnterTransitionImpl', classMeta, EnterTransition);
  //endregion
  function get_InvalidSize() {
    _init_properties_AnimationModifier_kt__u6vzef();
    return InvalidSize;
  }
  var InvalidSize;
  var properties_initialized_AnimationModifier_kt_fvv7xx;
  function _init_properties_AnimationModifier_kt__u6vzef() {
    if (!properties_initialized_AnimationModifier_kt_fvv7xx) {
      properties_initialized_AnimationModifier_kt_fvv7xx = true;
      InvalidSize = IntSize(IntCompanionObject_getInstance().get_MIN_VALUE_7nmmor_k$(), IntCompanionObject_getInstance().get_MIN_VALUE_7nmmor_k$());
    }
  }
  function get_ColorToVector() {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    return ColorToVector;
  }
  var ColorToVector;
  function get_VectorConverter(_this__u8e3s4) {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    return get_ColorToVector();
  }
  function ColorToVector$lambda(colorSpace) {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    var tmp = ColorToVector$lambda$lambda;
    return TwoWayConverter(tmp, ColorToVector$lambda$lambda_0(colorSpace));
  }
  function ColorToVector$lambda$lambda(color) {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    var tmp0_container = Color__convert_impl_so5m8t(color.value_1, ColorSpaces_getInstance().get_Oklab_ierso8_k$());
    var l = Color__component1_impl_lz80qe(tmp0_container);
    var a = Color__component2_impl_mg9n4l(tmp0_container);
    var b = Color__component3_impl_mxb9is(tmp0_container);
    var alpha = Color__component4_impl_necvwz(tmp0_container);
    return new AnimationVector4D(alpha, l, a, b);
  }
  function ColorToVector$lambda$lambda_0($colorSpace) {
    return function (vector) {
      return new Color_0(Color__convert_impl_so5m8t(Color(coerceIn(vector.get_v2_kntnnf_k$(), 0.0, 1.0), coerceIn(vector.get_v3_kntnne_k$(), -0.5, 0.5), coerceIn(vector.get_v4_kntnnd_k$(), -0.5, 0.5), coerceIn(vector.get_v1_kntnng_k$(), 0.0, 1.0), ColorSpaces_getInstance().get_Oklab_ierso8_k$()), $colorSpace));
    };
  }
  var properties_initialized_ColorVectorConverter_kt_jaoojo;
  function _init_properties_ColorVectorConverter_kt__qncuxy() {
    if (!properties_initialized_ColorVectorConverter_kt_jaoojo) {
      properties_initialized_ColorVectorConverter_kt_jaoojo = true;
      ColorToVector = ColorToVector$lambda;
    }
  }
  function get_TransformOriginVectorConverter() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return TransformOriginVectorConverter;
  }
  var TransformOriginVectorConverter;
  function get_DefaultAlphaAndScaleSpring() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return DefaultAlphaAndScaleSpring;
  }
  var DefaultAlphaAndScaleSpring;
  function get_DefaultOffsetAnimationSpec() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return DefaultOffsetAnimationSpec;
  }
  var DefaultOffsetAnimationSpec;
  function get_DefaultSizeAnimationSpec() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return DefaultSizeAnimationSpec;
  }
  var DefaultSizeAnimationSpec;
  function ExperimentalAnimationApi() {
  }
  protoOf(ExperimentalAnimationApi).equals = function (other) {
    if (!(other instanceof ExperimentalAnimationApi))
      return false;
    other instanceof ExperimentalAnimationApi || THROW_CCE();
    return true;
  };
  protoOf(ExperimentalAnimationApi).hashCode = function () {
    return 0;
  };
  protoOf(ExperimentalAnimationApi).toString = function () {
    return '@androidx.compose.animation.ExperimentalAnimationApi()';
  };
  function Companion() {
    Companion_instance = this;
    this.None_1 = new ExitTransitionImpl(new TransitionData());
    this.KeepUntilTransitionsFinished_1 = new ExitTransitionImpl(new TransitionData(VOID, VOID, VOID, VOID, true));
  }
  protoOf(Companion).get_None_wo6tgh_k$ = function () {
    return this.None_1;
  };
  protoOf(Companion).get_KeepUntilTransitionsFinished_wvjlk0_k$ = function () {
    return this.KeepUntilTransitionsFinished_1;
  };
  var Companion_instance;
  function Companion_getInstance_4() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function ExitTransition() {
    Companion_getInstance_4();
  }
  protoOf(ExitTransition).plus_buzi7t_k$ = function (exit) {
    var tmp0_elvis_lhs = this.get_data_wokkxf_k$().fade_1;
    var tmp = tmp0_elvis_lhs == null ? exit.get_data_wokkxf_k$().fade_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = this.get_data_wokkxf_k$().slide_1;
    var tmp_0 = tmp1_elvis_lhs == null ? exit.get_data_wokkxf_k$().slide_1 : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = this.get_data_wokkxf_k$().changeSize_1;
    var tmp_1 = tmp2_elvis_lhs == null ? exit.get_data_wokkxf_k$().changeSize_1 : tmp2_elvis_lhs;
    var tmp3_elvis_lhs = this.get_data_wokkxf_k$().scale_1;
    return new ExitTransitionImpl(new TransitionData(tmp, tmp_0, tmp_1, tmp3_elvis_lhs == null ? exit.get_data_wokkxf_k$().scale_1 : tmp3_elvis_lhs, this.get_data_wokkxf_k$().hold_1 ? true : exit.get_data_wokkxf_k$().hold_1, plus(this.get_data_wokkxf_k$().effectsMap_1, exit.get_data_wokkxf_k$().effectsMap_1)));
  };
  protoOf(ExitTransition).equals = function (other) {
    var tmp;
    if (other instanceof ExitTransition) {
      tmp = other.get_data_wokkxf_k$().equals(this.get_data_wokkxf_k$());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ExitTransition).toString = function () {
    var tmp;
    if (this.equals(Companion_getInstance_4().None_1)) {
      tmp = 'ExitTransition.None';
    } else if (this.equals(Companion_getInstance_4().KeepUntilTransitionsFinished_1)) {
      tmp = 'ExitTransition.KeepUntilTransitionsFinished';
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.animation.ExitTransition.toString.<anonymous>' call
      var $this$run = this.get_data_wokkxf_k$();
      var tmp3_safe_receiver = $this$run.fade_1;
      var tmp_0 = 'ExitTransition: \nFade - ' + (tmp3_safe_receiver == null ? null : tmp3_safe_receiver.toString()) + ',\nSlide - ';
      var tmp2_safe_receiver = $this$run.slide_1;
      var tmp_1 = tmp_0 + (tmp2_safe_receiver == null ? null : tmp2_safe_receiver.toString()) + ',\nShrink - ';
      var tmp1_safe_receiver = $this$run.changeSize_1;
      var tmp_2 = tmp_1 + (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.toString()) + ',\nScale - ';
      var tmp0_safe_receiver = $this$run.scale_1;
      tmp = tmp_2 + (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString()) + ',\nKeepUntilTransitionsFinished - ' + $this$run.hold_1;
    }
    return tmp;
  };
  protoOf(ExitTransition).hashCode = function () {
    return this.get_data_wokkxf_k$().hashCode();
  };
  function shrinkHorizontally(animationSpec, shrinkTowards, clip, targetWidth) {
    animationSpec = animationSpec === VOID ? spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$(), new IntSize_0(get_VisibilityThreshold(Companion_getInstance()))) : animationSpec;
    shrinkTowards = shrinkTowards === VOID ? Companion_getInstance_0().get_End_18ju7i_k$() : shrinkTowards;
    clip = clip === VOID ? true : clip;
    var tmp;
    if (targetWidth === VOID) {
      tmp = shrinkHorizontally$lambda;
    } else {
      tmp = targetWidth;
    }
    targetWidth = tmp;
    _init_properties_EnterExitTransition_kt__2obrqf();
    var tmp_0 = toAlignment(shrinkTowards);
    return shrinkOut(animationSpec, tmp_0, clip, shrinkHorizontally$lambda_0(targetWidth));
  }
  function fadeOut(animationSpec, targetAlpha) {
    animationSpec = animationSpec === VOID ? spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$()) : animationSpec;
    targetAlpha = targetAlpha === VOID ? 0.0 : targetAlpha;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new ExitTransitionImpl(new TransitionData(new Fade(targetAlpha, animationSpec)));
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.None_1 = new EnterTransitionImpl(new TransitionData());
  }
  protoOf(Companion_0).get_None_wo6tgh_k$ = function () {
    return this.None_1;
  };
  var Companion_instance_0;
  function Companion_getInstance_5() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function EnterTransition() {
    Companion_getInstance_5();
  }
  protoOf(EnterTransition).plus_w36lq9_k$ = function (enter) {
    var tmp0_elvis_lhs = this.get_data_wokkxf_k$().fade_1;
    var tmp = tmp0_elvis_lhs == null ? enter.get_data_wokkxf_k$().fade_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = this.get_data_wokkxf_k$().slide_1;
    var tmp_0 = tmp1_elvis_lhs == null ? enter.get_data_wokkxf_k$().slide_1 : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = this.get_data_wokkxf_k$().changeSize_1;
    var tmp_1 = tmp2_elvis_lhs == null ? enter.get_data_wokkxf_k$().changeSize_1 : tmp2_elvis_lhs;
    var tmp3_elvis_lhs = this.get_data_wokkxf_k$().scale_1;
    return new EnterTransitionImpl(new TransitionData(tmp, tmp_0, tmp_1, tmp3_elvis_lhs == null ? enter.get_data_wokkxf_k$().scale_1 : tmp3_elvis_lhs, VOID, plus(this.get_data_wokkxf_k$().effectsMap_1, enter.get_data_wokkxf_k$().effectsMap_1)));
  };
  protoOf(EnterTransition).toString = function () {
    var tmp;
    if (this.equals(Companion_getInstance_5().None_1)) {
      tmp = 'EnterTransition.None';
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.animation.EnterTransition.toString.<anonymous>' call
      var $this$run = this.get_data_wokkxf_k$();
      var tmp3_safe_receiver = $this$run.fade_1;
      var tmp_0 = 'EnterTransition: \nFade - ' + (tmp3_safe_receiver == null ? null : tmp3_safe_receiver.toString()) + ',\nSlide - ';
      var tmp2_safe_receiver = $this$run.slide_1;
      var tmp_1 = tmp_0 + (tmp2_safe_receiver == null ? null : tmp2_safe_receiver.toString()) + ',\nShrink - ';
      var tmp1_safe_receiver = $this$run.changeSize_1;
      var tmp_2 = tmp_1 + (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.toString()) + ',\nScale - ';
      var tmp0_safe_receiver = $this$run.scale_1;
      tmp = tmp_2 + (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString());
    }
    return tmp;
  };
  protoOf(EnterTransition).equals = function (other) {
    var tmp;
    if (other instanceof EnterTransition) {
      tmp = other.get_data_wokkxf_k$().equals(this.get_data_wokkxf_k$());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(EnterTransition).hashCode = function () {
    return this.get_data_wokkxf_k$().hashCode();
  };
  function expandHorizontally(animationSpec, expandFrom, clip, initialWidth) {
    animationSpec = animationSpec === VOID ? spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$(), new IntSize_0(get_VisibilityThreshold(Companion_getInstance()))) : animationSpec;
    expandFrom = expandFrom === VOID ? Companion_getInstance_0().get_End_18ju7i_k$() : expandFrom;
    clip = clip === VOID ? true : clip;
    var tmp;
    if (initialWidth === VOID) {
      tmp = expandHorizontally$lambda;
    } else {
      tmp = initialWidth;
    }
    initialWidth = tmp;
    _init_properties_EnterExitTransition_kt__2obrqf();
    var tmp_0 = toAlignment(expandFrom);
    return expandIn(animationSpec, tmp_0, clip, expandHorizontally$lambda_0(initialWidth));
  }
  function fadeIn(animationSpec, initialAlpha) {
    animationSpec = animationSpec === VOID ? spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$()) : animationSpec;
    initialAlpha = initialAlpha === VOID ? 0.0 : initialAlpha;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new EnterTransitionImpl(new TransitionData(new Fade(initialAlpha, animationSpec)));
  }
  function expandVertically(animationSpec, expandFrom, clip, initialHeight) {
    animationSpec = animationSpec === VOID ? spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$(), new IntSize_0(get_VisibilityThreshold(Companion_getInstance()))) : animationSpec;
    expandFrom = expandFrom === VOID ? Companion_getInstance_0().get_Bottom_3m75bg_k$() : expandFrom;
    clip = clip === VOID ? true : clip;
    var tmp;
    if (initialHeight === VOID) {
      tmp = expandVertically$lambda;
    } else {
      tmp = initialHeight;
    }
    initialHeight = tmp;
    _init_properties_EnterExitTransition_kt__2obrqf();
    var tmp_0 = toAlignment_0(expandFrom);
    return expandIn(animationSpec, tmp_0, clip, expandVertically$lambda_0(initialHeight));
  }
  function shrinkVertically(animationSpec, shrinkTowards, clip, targetHeight) {
    animationSpec = animationSpec === VOID ? spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$(), new IntSize_0(get_VisibilityThreshold(Companion_getInstance()))) : animationSpec;
    shrinkTowards = shrinkTowards === VOID ? Companion_getInstance_0().get_Bottom_3m75bg_k$() : shrinkTowards;
    clip = clip === VOID ? true : clip;
    var tmp;
    if (targetHeight === VOID) {
      tmp = shrinkVertically$lambda;
    } else {
      tmp = targetHeight;
    }
    targetHeight = tmp;
    _init_properties_EnterExitTransition_kt__2obrqf();
    var tmp_0 = toAlignment_0(shrinkTowards);
    return shrinkOut(animationSpec, tmp_0, clip, shrinkVertically$lambda_0(targetHeight));
  }
  function TransitionData(fade, slide, changeSize, scale, hold, effectsMap) {
    fade = fade === VOID ? null : fade;
    slide = slide === VOID ? null : slide;
    changeSize = changeSize === VOID ? null : changeSize;
    scale = scale === VOID ? null : scale;
    hold = hold === VOID ? false : hold;
    effectsMap = effectsMap === VOID ? emptyMap() : effectsMap;
    this.fade_1 = fade;
    this.slide_1 = slide;
    this.changeSize_1 = changeSize;
    this.scale_1 = scale;
    this.hold_1 = hold;
    this.effectsMap_1 = effectsMap;
  }
  protoOf(TransitionData).get_fade_woluit_k$ = function () {
    return this.fade_1;
  };
  protoOf(TransitionData).get_slide_iykyvc_k$ = function () {
    return this.slide_1;
  };
  protoOf(TransitionData).get_changeSize_fljy3e_k$ = function () {
    return this.changeSize_1;
  };
  protoOf(TransitionData).get_scale_iyf28x_k$ = function () {
    return this.scale_1;
  };
  protoOf(TransitionData).get_hold_wonf2g_k$ = function () {
    return this.hold_1;
  };
  protoOf(TransitionData).get_effectsMap_87u2yr_k$ = function () {
    return this.effectsMap_1;
  };
  protoOf(TransitionData).component1_7eebsc_k$ = function () {
    return this.fade_1;
  };
  protoOf(TransitionData).component2_7eebsb_k$ = function () {
    return this.slide_1;
  };
  protoOf(TransitionData).component3_7eebsa_k$ = function () {
    return this.changeSize_1;
  };
  protoOf(TransitionData).component4_7eebs9_k$ = function () {
    return this.scale_1;
  };
  protoOf(TransitionData).component5_7eebs8_k$ = function () {
    return this.hold_1;
  };
  protoOf(TransitionData).component6_7eebs7_k$ = function () {
    return this.effectsMap_1;
  };
  protoOf(TransitionData).copy_9g4712_k$ = function (fade, slide, changeSize, scale, hold, effectsMap) {
    return new TransitionData(fade, slide, changeSize, scale, hold, effectsMap);
  };
  protoOf(TransitionData).copy$default_84l7p1_k$ = function (fade, slide, changeSize, scale, hold, effectsMap, $super) {
    fade = fade === VOID ? this.fade_1 : fade;
    slide = slide === VOID ? this.slide_1 : slide;
    changeSize = changeSize === VOID ? this.changeSize_1 : changeSize;
    scale = scale === VOID ? this.scale_1 : scale;
    hold = hold === VOID ? this.hold_1 : hold;
    effectsMap = effectsMap === VOID ? this.effectsMap_1 : effectsMap;
    return $super === VOID ? this.copy_9g4712_k$(fade, slide, changeSize, scale, hold, effectsMap) : $super.copy_9g4712_k$.call(this, fade, slide, changeSize, scale, hold, effectsMap);
  };
  protoOf(TransitionData).toString = function () {
    return 'TransitionData(fade=' + this.fade_1 + ', slide=' + this.slide_1 + ', changeSize=' + this.changeSize_1 + ', scale=' + this.scale_1 + ', hold=' + this.hold_1 + ', effectsMap=' + this.effectsMap_1 + ')';
  };
  protoOf(TransitionData).hashCode = function () {
    var result = this.fade_1 == null ? 0 : this.fade_1.hashCode();
    result = imul(result, 31) + (this.slide_1 == null ? 0 : this.slide_1.hashCode()) | 0;
    result = imul(result, 31) + (this.changeSize_1 == null ? 0 : this.changeSize_1.hashCode()) | 0;
    result = imul(result, 31) + (this.scale_1 == null ? 0 : this.scale_1.hashCode()) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.hold_1) | 0;
    result = imul(result, 31) + hashCode(this.effectsMap_1) | 0;
    return result;
  };
  protoOf(TransitionData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TransitionData))
      return false;
    var tmp0_other_with_cast = other instanceof TransitionData ? other : THROW_CCE();
    if (!equals(this.fade_1, tmp0_other_with_cast.fade_1))
      return false;
    if (!equals(this.slide_1, tmp0_other_with_cast.slide_1))
      return false;
    if (!equals(this.changeSize_1, tmp0_other_with_cast.changeSize_1))
      return false;
    if (!equals(this.scale_1, tmp0_other_with_cast.scale_1))
      return false;
    if (!(this.hold_1 === tmp0_other_with_cast.hold_1))
      return false;
    if (!equals(this.effectsMap_1, tmp0_other_with_cast.effectsMap_1))
      return false;
    return true;
  };
  function ExitTransitionImpl(data) {
    ExitTransition.call(this);
    this.data_1 = data;
  }
  protoOf(ExitTransitionImpl).get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  function Fade(alpha, animationSpec) {
    this.alpha_1 = alpha;
    this.animationSpec_1 = animationSpec;
  }
  protoOf(Fade).get_alpha_iooth1_k$ = function () {
    return this.alpha_1;
  };
  protoOf(Fade).get_animationSpec_wdk2t2_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(Fade).component1_7eebsc_k$ = function () {
    return this.alpha_1;
  };
  protoOf(Fade).component2_7eebsb_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(Fade).copy_z8z8aw_k$ = function (alpha, animationSpec) {
    return new Fade(alpha, animationSpec);
  };
  protoOf(Fade).copy$default_ma0w9o_k$ = function (alpha, animationSpec, $super) {
    alpha = alpha === VOID ? this.alpha_1 : alpha;
    animationSpec = animationSpec === VOID ? this.animationSpec_1 : animationSpec;
    return $super === VOID ? this.copy_z8z8aw_k$(alpha, animationSpec) : $super.copy_z8z8aw_k$.call(this, alpha, animationSpec);
  };
  protoOf(Fade).toString = function () {
    return 'Fade(alpha=' + this.alpha_1 + ', animationSpec=' + this.animationSpec_1 + ')';
  };
  protoOf(Fade).hashCode = function () {
    var result = getNumberHashCode(this.alpha_1);
    result = imul(result, 31) + hashCode(this.animationSpec_1) | 0;
    return result;
  };
  protoOf(Fade).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Fade))
      return false;
    var tmp0_other_with_cast = other instanceof Fade ? other : THROW_CCE();
    if (!equals(this.alpha_1, tmp0_other_with_cast.alpha_1))
      return false;
    if (!equals(this.animationSpec_1, tmp0_other_with_cast.animationSpec_1))
      return false;
    return true;
  };
  function Slide(slideOffset, animationSpec) {
    this.slideOffset_1 = slideOffset;
    this.animationSpec_1 = animationSpec;
  }
  protoOf(Slide).get_slideOffset_3j6nyd_k$ = function () {
    return this.slideOffset_1;
  };
  protoOf(Slide).get_animationSpec_wdk2t2_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(Slide).component1_7eebsc_k$ = function () {
    return this.slideOffset_1;
  };
  protoOf(Slide).component2_7eebsb_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(Slide).copy_rxbt3p_k$ = function (slideOffset, animationSpec) {
    return new Slide(slideOffset, animationSpec);
  };
  protoOf(Slide).copy$default_redmhi_k$ = function (slideOffset, animationSpec, $super) {
    slideOffset = slideOffset === VOID ? this.slideOffset_1 : slideOffset;
    animationSpec = animationSpec === VOID ? this.animationSpec_1 : animationSpec;
    return $super === VOID ? this.copy_rxbt3p_k$(slideOffset, animationSpec) : $super.copy_rxbt3p_k$.call(this, slideOffset, animationSpec);
  };
  protoOf(Slide).toString = function () {
    return 'Slide(slideOffset=' + this.slideOffset_1 + ', animationSpec=' + this.animationSpec_1 + ')';
  };
  protoOf(Slide).hashCode = function () {
    var result = hashCode(this.slideOffset_1);
    result = imul(result, 31) + hashCode(this.animationSpec_1) | 0;
    return result;
  };
  protoOf(Slide).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Slide))
      return false;
    var tmp0_other_with_cast = other instanceof Slide ? other : THROW_CCE();
    if (!equals(this.slideOffset_1, tmp0_other_with_cast.slideOffset_1))
      return false;
    if (!equals(this.animationSpec_1, tmp0_other_with_cast.animationSpec_1))
      return false;
    return true;
  };
  function ChangeSize$_init_$lambda_705jnq(it) {
    return new IntSize_0(IntSize(0, 0));
  }
  function ChangeSize(alignment, size, animationSpec, clip) {
    var tmp;
    if (size === VOID) {
      tmp = ChangeSize$_init_$lambda_705jnq;
    } else {
      tmp = size;
    }
    size = tmp;
    clip = clip === VOID ? true : clip;
    this.alignment_1 = alignment;
    this.size_1 = size;
    this.animationSpec_1 = animationSpec;
    this.clip_1 = clip;
  }
  protoOf(ChangeSize).get_alignment_xa1jnq_k$ = function () {
    return this.alignment_1;
  };
  protoOf(ChangeSize).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  protoOf(ChangeSize).get_animationSpec_wdk2t2_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(ChangeSize).get_clip_wok5uh_k$ = function () {
    return this.clip_1;
  };
  protoOf(ChangeSize).component1_7eebsc_k$ = function () {
    return this.alignment_1;
  };
  protoOf(ChangeSize).component2_7eebsb_k$ = function () {
    return this.size_1;
  };
  protoOf(ChangeSize).component3_7eebsa_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(ChangeSize).component4_7eebs9_k$ = function () {
    return this.clip_1;
  };
  protoOf(ChangeSize).copy_v6ndrn_k$ = function (alignment, size, animationSpec, clip) {
    return new ChangeSize(alignment, size, animationSpec, clip);
  };
  protoOf(ChangeSize).copy$default_lm9k9y_k$ = function (alignment, size, animationSpec, clip, $super) {
    alignment = alignment === VOID ? this.alignment_1 : alignment;
    size = size === VOID ? this.size_1 : size;
    animationSpec = animationSpec === VOID ? this.animationSpec_1 : animationSpec;
    clip = clip === VOID ? this.clip_1 : clip;
    return $super === VOID ? this.copy_v6ndrn_k$(alignment, size, animationSpec, clip) : $super.copy_v6ndrn_k$.call(this, alignment, size, animationSpec, clip);
  };
  protoOf(ChangeSize).toString = function () {
    return 'ChangeSize(alignment=' + this.alignment_1 + ', size=' + this.size_1 + ', animationSpec=' + this.animationSpec_1 + ', clip=' + this.clip_1 + ')';
  };
  protoOf(ChangeSize).hashCode = function () {
    var result = hashCode(this.alignment_1);
    result = imul(result, 31) + hashCode(this.size_1) | 0;
    result = imul(result, 31) + hashCode(this.animationSpec_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.clip_1) | 0;
    return result;
  };
  protoOf(ChangeSize).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ChangeSize))
      return false;
    var tmp0_other_with_cast = other instanceof ChangeSize ? other : THROW_CCE();
    if (!equals(this.alignment_1, tmp0_other_with_cast.alignment_1))
      return false;
    if (!equals(this.size_1, tmp0_other_with_cast.size_1))
      return false;
    if (!equals(this.animationSpec_1, tmp0_other_with_cast.animationSpec_1))
      return false;
    if (!(this.clip_1 === tmp0_other_with_cast.clip_1))
      return false;
    return true;
  };
  function Scale(scale, transformOrigin, animationSpec) {
    this.scale_1 = scale;
    this.transformOrigin_1 = transformOrigin;
    this.animationSpec_1 = animationSpec;
  }
  protoOf(Scale).get_scale_iyf28x_k$ = function () {
    return this.scale_1;
  };
  protoOf(Scale).get_transformOrigin_bc7467_k$ = function () {
    return this.transformOrigin_1;
  };
  protoOf(Scale).get_animationSpec_wdk2t2_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(Scale).component1_7eebsc_k$ = function () {
    return this.scale_1;
  };
  protoOf(Scale).component2_vce5p_k$ = function () {
    return this.transformOrigin_1;
  };
  protoOf(Scale).component3_7eebsa_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(Scale).copy_yexmra_k$ = function (scale, transformOrigin, animationSpec) {
    return new Scale(scale, transformOrigin, animationSpec);
  };
  protoOf(Scale).copy$default_nonyxv_k$ = function (scale, transformOrigin, animationSpec, $super) {
    scale = scale === VOID ? this.scale_1 : scale;
    transformOrigin = transformOrigin === VOID ? this.transformOrigin_1 : transformOrigin;
    animationSpec = animationSpec === VOID ? this.animationSpec_1 : animationSpec;
    return $super === VOID ? this.copy_yexmra_k$(scale, transformOrigin, animationSpec) : $super.copy_yexmra_k$.call(this, scale, new TransformOrigin(transformOrigin), animationSpec);
  };
  protoOf(Scale).toString = function () {
    return 'Scale(scale=' + this.scale_1 + ', transformOrigin=' + new TransformOrigin(this.transformOrigin_1) + ', animationSpec=' + this.animationSpec_1 + ')';
  };
  protoOf(Scale).hashCode = function () {
    var result = getNumberHashCode(this.scale_1);
    result = imul(result, 31) + TransformOrigin__hashCode_impl_pmqpcw(this.transformOrigin_1) | 0;
    result = imul(result, 31) + hashCode(this.animationSpec_1) | 0;
    return result;
  };
  protoOf(Scale).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Scale))
      return false;
    var tmp0_other_with_cast = other instanceof Scale ? other : THROW_CCE();
    if (!equals(this.scale_1, tmp0_other_with_cast.scale_1))
      return false;
    if (!equals(this.transformOrigin_1, tmp0_other_with_cast.transformOrigin_1))
      return false;
    if (!equals(this.animationSpec_1, tmp0_other_with_cast.animationSpec_1))
      return false;
    return true;
  };
  function shrinkOut(animationSpec, shrinkTowards, clip, targetSize) {
    animationSpec = animationSpec === VOID ? spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$(), new IntSize_0(get_VisibilityThreshold(Companion_getInstance()))) : animationSpec;
    shrinkTowards = shrinkTowards === VOID ? Companion_getInstance_0().get_BottomEnd_ayz0tj_k$() : shrinkTowards;
    clip = clip === VOID ? true : clip;
    var tmp;
    if (targetSize === VOID) {
      tmp = shrinkOut$lambda;
    } else {
      tmp = targetSize;
    }
    targetSize = tmp;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new ExitTransitionImpl(new TransitionData(VOID, VOID, new ChangeSize(shrinkTowards, targetSize, animationSpec, clip)));
  }
  function toAlignment(_this__u8e3s4) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return equals(_this__u8e3s4, Companion_getInstance_0().get_Start_ih4i6x_k$()) ? Companion_getInstance_0().get_CenterStart_2305fg_k$() : equals(_this__u8e3s4, Companion_getInstance_0().get_End_18ju7i_k$()) ? Companion_getInstance_0().get_CenterEnd_uti4xp_k$() : Companion_getInstance_0().get_Center_3arb0i_k$();
  }
  function EnterTransitionImpl(data) {
    EnterTransition.call(this);
    this.data_1 = data;
  }
  protoOf(EnterTransitionImpl).get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  function expandIn(animationSpec, expandFrom, clip, initialSize) {
    animationSpec = animationSpec === VOID ? spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$(), new IntSize_0(get_VisibilityThreshold(Companion_getInstance()))) : animationSpec;
    expandFrom = expandFrom === VOID ? Companion_getInstance_0().get_BottomEnd_ayz0tj_k$() : expandFrom;
    clip = clip === VOID ? true : clip;
    var tmp;
    if (initialSize === VOID) {
      tmp = expandIn$lambda;
    } else {
      tmp = initialSize;
    }
    initialSize = tmp;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new EnterTransitionImpl(new TransitionData(VOID, VOID, new ChangeSize(expandFrom, initialSize, animationSpec, clip)));
  }
  function toAlignment_0(_this__u8e3s4) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return equals(_this__u8e3s4, Companion_getInstance_0().get_Top_18jj1w_k$()) ? Companion_getInstance_0().get_TopCenter_u4q5vl_k$() : equals(_this__u8e3s4, Companion_getInstance_0().get_Bottom_3m75bg_k$()) ? Companion_getInstance_0().get_BottomCenter_yatb1z_k$() : Companion_getInstance_0().get_Center_3arb0i_k$();
  }
  function TransformOriginVectorConverter$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new AnimationVector2D(_TransformOrigin___get_pivotFractionX__impl__a9pmci(it.packedValue_1), _TransformOrigin___get_pivotFractionY__impl__ijwupp(it.packedValue_1));
  }
  function TransformOriginVectorConverter$lambda_0(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new TransformOrigin(TransformOrigin_0(it.get_v1_kntnng_k$(), it.get_v2_kntnnf_k$()));
  }
  function shrinkHorizontally$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return 0;
  }
  function shrinkHorizontally$lambda_0($targetWidth) {
    return function (it) {
      return new IntSize_0(IntSize($targetWidth(_IntSize___get_width__impl__d9yl4o(it.packedValue_1)), _IntSize___get_height__impl__prv63b(it.packedValue_1)));
    };
  }
  function expandHorizontally$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return 0;
  }
  function expandHorizontally$lambda_0($initialWidth) {
    return function (it) {
      return new IntSize_0(IntSize($initialWidth(_IntSize___get_width__impl__d9yl4o(it.packedValue_1)), _IntSize___get_height__impl__prv63b(it.packedValue_1)));
    };
  }
  function expandVertically$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return 0;
  }
  function expandVertically$lambda_0($initialHeight) {
    return function (it) {
      return new IntSize_0(IntSize(_IntSize___get_width__impl__d9yl4o(it.packedValue_1), $initialHeight(_IntSize___get_height__impl__prv63b(it.packedValue_1))));
    };
  }
  function shrinkVertically$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return 0;
  }
  function shrinkVertically$lambda_0($targetHeight) {
    return function (it) {
      return new IntSize_0(IntSize(_IntSize___get_width__impl__d9yl4o(it.packedValue_1), $targetHeight(_IntSize___get_height__impl__prv63b(it.packedValue_1))));
    };
  }
  function shrinkOut$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new IntSize_0(IntSize(0, 0));
  }
  function expandIn$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new IntSize_0(IntSize(0, 0));
  }
  var properties_initialized_EnterExitTransition_kt_te1nvp;
  function _init_properties_EnterExitTransition_kt__2obrqf() {
    if (!properties_initialized_EnterExitTransition_kt_te1nvp) {
      properties_initialized_EnterExitTransition_kt_te1nvp = true;
      var tmp = TransformOriginVectorConverter$lambda;
      TransformOriginVectorConverter = TwoWayConverter(tmp, TransformOriginVectorConverter$lambda_0);
      DefaultAlphaAndScaleSpring = spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$());
      DefaultOffsetAnimationSpec = spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$(), new IntOffset(get_VisibilityThreshold_0(Companion_getInstance_1())));
      DefaultSizeAnimationSpec = spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$(), new IntSize_0(get_VisibilityThreshold(Companion_getInstance())));
    }
  }
  function get_DecelerationRate() {
    _init_properties_FlingCalculator_kt__ornu7o();
    return DecelerationRate;
  }
  var DecelerationRate;
  var properties_initialized_FlingCalculator_kt_aw7aky;
  function _init_properties_FlingCalculator_kt__ornu7o() {
    if (!properties_initialized_FlingCalculator_kt_aw7aky) {
      properties_initialized_FlingCalculator_kt_aw7aky = true;
      // Inline function 'kotlin.math.ln' call
      var tmp = Math.log(0.78);
      // Inline function 'kotlin.math.ln' call
      DecelerationRate = tmp / Math.log(0.9);
    }
  }
  function get_colorDefaultSpring() {
    _init_properties_SingleValueAnimation_kt__hxy1sr();
    return colorDefaultSpring;
  }
  var colorDefaultSpring;
  function animateColorAsState(targetValue, animationSpec, label, finishedListener, $composer, $changed, $default) {
    _init_properties_SingleValueAnimation_kt__hxy1sr();
    var animationSpec_0 = animationSpec;
    var label_0 = label;
    var finishedListener_0 = finishedListener;
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-451899108);
    sourceInformation($composer_0, 'C(animateColorAsState)P(3:c#ui.graphics.Color!1,2)62@2847L96,65@2955L124:SingleValueAnimation.kt#xbi5r1');
    if (!(($default & 2) === 0))
      animationSpec_0 = get_colorDefaultSpring();
    if (!(($default & 4) === 0))
      label_0 = 'ColorAnimation';
    if (!(($default & 8) === 0))
      finishedListener_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(-451899108, $changed, -1, 'androidx.compose.animation.animateColorAsState (SingleValueAnimation.kt:61)');
    }
    var tmp1_remember$arg$0 = _Color___get_colorSpace__impl__jqqozk(targetValue);
    $composer_0.startReplaceableGroup_ip860b_k$(-309953459);
    sourceInformation($composer_0, 'CC(remember):SingleValueAnimation.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.changed_ga7h3f_k$(tmp1_remember$arg$0);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid ? true : it === Companion_getInstance_3().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.animation.animateColorAsState.<anonymous>' call
      var value = get_VectorConverter(Companion_getInstance_2())(_Color___get_colorSpace__impl__jqqozk(targetValue));
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp2_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    var converter = tmp2_group;
    var tmp_1 = animationSpec_0;
    var tmp0 = animateValueAsState(new Color_0(targetValue), converter, tmp_1, null, label_0, finishedListener_0, $composer_0, 576 | 14 & $changed | 57344 & $changed << 6 | 458752 & $changed << 6, 8);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  }
  var properties_initialized_SingleValueAnimation_kt_kqgwkj;
  function _init_properties_SingleValueAnimation_kt__hxy1sr() {
    if (!properties_initialized_SingleValueAnimation_kt_kqgwkj) {
      properties_initialized_SingleValueAnimation_kt_kqgwkj = true;
      colorDefaultSpring = spring();
    }
  }
  function animateColor(_this__u8e3s4, transitionSpec, label, targetValueByState, $composer, $changed, $default) {
    var transitionSpec_0 = transitionSpec;
    var label_0 = label;
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-1939694975);
    sourceInformation($composer_0, 'CC(animateColor)P(2)68@3220L31,69@3287L70,73@3370L70:Transition.kt#xbi5r1');
    if (!(($default & 1) === 0)) {
      transitionSpec_0 = animateColor$lambda;
    }
    if (!(($default & 2) === 0))
      label_0 = 'ColorAnimation';
    var colorSpace = _Color___get_colorSpace__impl__jqqozk(targetValueByState(_this__u8e3s4.get_targetState_kri3mx_k$(), $composer_0, 112 & $changed >> 6).value_1);
    $composer_0.startReplaceableGroup_ip860b_k$(-1462136630);
    sourceInformation($composer_0, 'CC(remember):Transition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.changed_ga7h3f_k$(colorSpace);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid ? true : it === Companion_getInstance_3().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.animation.animateColor.<anonymous>' call
      var value = get_VectorConverter(Companion_getInstance_2())(colorSpace);
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    var typeConverter = tmp1_group;
    // Inline function 'androidx.compose.animation.core.animateValue' call
    var $changed_0 = 64 | 14 & $changed | 896 & $changed << 3 | 7168 & $changed << 3 | 57344 & $changed << 3;
    var transitionSpec_1 = transitionSpec_0;
    var label_1 = label_0;
    var $composer_1 = $composer_0;
    $composer_1.startReplaceableGroup_ip860b_k$(-142660079);
    sourceInformation($composer_1, 'CC(animateValue)P(3,2)1084@43046L32,1085@43101L31,1086@43157L23,1088@43193L89:Transition.kt#pdpnli');
    if (!((0 & 2) === 0)) {
      transitionSpec_1 = animateColor$lambda_0;
    }
    if (!((0 & 4) === 0))
      label_1 = 'ValueAnimation';
    var initialValue = targetValueByState(_this__u8e3s4.get_currentState_snihnl_k$(), $composer_1, 112 & $changed_0 >> 9).value_1;
    var targetValue = targetValueByState(_this__u8e3s4.get_targetState_kri3mx_k$(), $composer_1, 112 & $changed_0 >> 9).value_1;
    var animationSpec = transitionSpec_1(_this__u8e3s4.get_segment_xwnoei_k$(), $composer_1, 112 & $changed_0 >> 3);
    var tmp0 = createTransitionAnimation(_this__u8e3s4, new Color_0(initialValue), new Color_0(targetValue), animationSpec, typeConverter, label_1, $composer_1, 14 & $changed_0 | 57344 & $changed_0 << 9 | 458752 & $changed_0 << 6);
    $composer_1.endReplaceableGroup_ern0ak_k$();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  }
  function animateColor$lambda($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-1457805428);
    if (isTraceInProgress()) {
      traceEventStart(-1457805428, $changed, -1, 'androidx.compose.animation.animateColor.<anonymous> (Transition.kt:64)');
    }
    var tmp0 = spring();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  }
  function animateColor$lambda_0($this$null, $composer, $changed) {
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
  function get_platformFlingScrollFriction() {
    return platformFlingScrollFriction;
  }
  var platformFlingScrollFriction;
  //region block: init
  platformFlingScrollFriction = 0.015;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_VectorConverter;
  _.$_$.b = animateColorAsState;
  _.$_$.c = expandHorizontally;
  _.$_$.d = expandVertically;
  _.$_$.e = fadeIn;
  _.$_$.f = fadeOut;
  _.$_$.g = shrinkHorizontally;
  _.$_$.h = shrinkVertically;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-animation-animation.js.map
