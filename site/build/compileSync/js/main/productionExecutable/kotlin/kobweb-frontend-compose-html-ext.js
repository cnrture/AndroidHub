(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './html-html-core.js', './kobweb-frontend-browser-ext.js', './compose-multiplatform-core-compose-runtime-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./html-html-core.js'), require('./kobweb-frontend-browser-ext.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-compose-html-ext'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-compose-html-ext'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-compose-html-ext'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-compose-html-ext'.");
    }
    if (typeof this['kobweb-frontend-browser-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-compose-html-ext'. Its dependency 'kobweb-frontend-browser-ext' was not found. Please, check whether 'kobweb-frontend-browser-ext' is loaded prior to 'kobweb-frontend-compose-html-ext'.");
    }
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-compose-html-ext'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-compose-html-ext'.");
    }
    root['kobweb-frontend-compose-html-ext'] = factory(typeof this['kobweb-frontend-compose-html-ext'] === 'undefined' ? {} : this['kobweb-frontend-compose-html-ext'], this['kotlin-kotlin-stdlib'], this['html-html-core'], this['kobweb-frontend-browser-ext'], this['compose-multiplatform-core-compose-runtime-runtime']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_browser_ext, kotlin_org_jetbrains_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.fa;
  var objectCreate = kotlin_kotlin.$_$.da;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.v;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.x;
  var Unit_instance = kotlin_kotlin.$_$.h4;
  var equals = kotlin_kotlin.$_$.y8;
  var hashCode = kotlin_kotlin.$_$.f9;
  var classes = kotlin_org_jetbrains_compose_html_html_core.$_$.p;
  var id = kotlin_org_jetbrains_compose_html_html_core.$_$.q;
  var tabIndex = kotlin_org_jetbrains_compose_html_html_core.$_$.r;
  var onClick = kotlin_org_jetbrains_compose_html_html_core.$_$.u;
  var onAnimationEnd = kotlin_org_jetbrains_compose_html_html_core.$_$.t;
  var AttrsScope = kotlin_org_jetbrains_compose_html_html_core.$_$.s;
  var classMeta = kotlin_kotlin.$_$.v8;
  var setMetadataFor = kotlin_kotlin.$_$.ga;
  var VOID = kotlin_kotlin.$_$.g;
  var objectMeta = kotlin_kotlin.$_$.ea;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var toString = kotlin_kotlin.$_$.ka;
  var joinToString = kotlin_kotlin.$_$.j6;
  var getStringHashCode = kotlin_kotlin.$_$.e9;
  var THROW_CCE = kotlin_kotlin.$_$.kd;
  var joinToString_0 = kotlin_kotlin.$_$.k6;
  var CSSBorder = kotlin_org_jetbrains_compose_html_html_core.$_$.w;
  var width = kotlin_org_jetbrains_compose_html_html_core.$_$.e3;
  var style = kotlin_org_jetbrains_compose_html_html_core.$_$.z2;
  var color = kotlin_org_jetbrains_compose_html_html_core.$_$.r1;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.x2;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.f1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.f2;
  var boxSizing = kotlin_org_jetbrains_compose_html_html_core.$_$.q1;
  var property = kotlin_org_jetbrains_compose_html_html_core.$_$.c1;
  var property_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.d1;
  var variable = kotlin_org_jetbrains_compose_html_html_core.$_$.e1;
  var StyleScope = kotlin_org_jetbrains_compose_html_html_core.$_$.g1;
  var copyToArray = kotlin_kotlin.$_$.t5;
  var gridTemplateColumns = kotlin_org_jetbrains_compose_html_html_core.$_$.h2;
  var gridTemplateRows = kotlin_org_jetbrains_compose_html_html_core.$_$.i2;
  var lastOrNull = kotlin_kotlin.$_$.o6;
  var get_lastIndex = kotlin_kotlin.$_$.n6;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ie;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var listOf = kotlin_kotlin.$_$.r6;
  var emptyList = kotlin_kotlin.$_$.v5;
  var addAll = kotlin_kotlin.$_$.c5;
  var Companion_instance = kotlin_org_jetbrains_compose_html_html_core.$_$.k;
  var display = kotlin_org_jetbrains_compose_html_html_core.$_$.u1;
  var gridAutoColumns = kotlin_org_jetbrains_compose_html_html_core.$_$.e2;
  var gridAutoRows = kotlin_org_jetbrains_compose_html_html_core.$_$.f2;
  var listOfNotNull = kotlin_kotlin.$_$.q6;
  var isNumber = kotlin_kotlin.$_$.s9;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var ensureNotNull = kotlin_kotlin.$_$.ce;
  var titleCamelCaseToKebabCase = kotlin_com_varabyte_kobweb_browser_ext.$_$.f;
  var removeSuffix = kotlin_kotlin.$_$.tb;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.g5;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.l;
  var charSequenceLength = kotlin_kotlin.$_$.t8;
  var charSequenceGet = kotlin_kotlin.$_$.s8;
  var isWhitespace = kotlin_kotlin.$_$.pb;
  var interfaceMeta = kotlin_kotlin.$_$.h9;
  var toList = kotlin_kotlin.$_$.n7;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var DisposableEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var ElementBuilder = kotlin_org_jetbrains_compose_html_html_core.$_$.j3;
  var isInterface = kotlin_kotlin.$_$.q9;
  var TagElement = kotlin_org_jetbrains_compose_html_html_core.$_$.w3;
  var to = kotlin_kotlin.$_$.qe;
  var lazy = kotlin_kotlin.$_$.he;
  var charArrayOf = kotlin_kotlin.$_$.q8;
  var split = kotlin_kotlin.$_$.zb;
  var removeSurrounding = kotlin_kotlin.$_$.ub;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var KProperty1 = kotlin_kotlin.$_$.wa;
  var getPropertyCallableRef = kotlin_kotlin.$_$.d9;
  var Enum = kotlin_kotlin.$_$.bd;
  var toString_0 = kotlin_kotlin.$_$.i2;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ComparableAttrsScope, 'ComparableAttrsScope', classMeta, VOID, [AttrsScope], ComparableAttrsScope_init_$Create$);
  setMetadataFor(DummyAttrsScope, 'DummyAttrsScope', classMeta, VOID, [AttrsScope], DummyAttrsScope);
  setMetadataFor(JustifyItems, 'JustifyItems', classMeta);
  setMetadataFor(JustifyItemsPosition, 'JustifyItemsPosition', classMeta, JustifyItems);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(JustifySelf, 'JustifySelf', classMeta);
  setMetadataFor(JustifySelfPosition, 'JustifySelfPosition', classMeta, JustifySelf);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(CSSAnimation, 'CSSAnimation', classMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(BoxSizing, 'BoxSizing', classMeta);
  setMetadataFor(ComparableStyleScope, 'ComparableStyleScope', classMeta, VOID, [StyleScope], ComparableStyleScope);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(Cursor, 'Cursor', classMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(Appearance, 'Appearance', classMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(FontWeight, 'FontWeight', classMeta);
  setMetadataFor(GridTrackBuilderInRepeat, 'GridTrackBuilderInRepeat', classMeta);
  setMetadataFor(GridTrackBuilder, 'GridTrackBuilder', classMeta, GridTrackBuilderInRepeat, VOID, GridTrackBuilder);
  setMetadataFor(GridEntry, 'GridEntry', classMeta);
  setMetadataFor(TrackSize, 'TrackSize', classMeta, GridEntry);
  setMetadataFor(FitContent, 'FitContent', classMeta, TrackSize);
  setMetadataFor(MinMax, 'MinMax', classMeta, TrackSize);
  setMetadataFor(Flex, 'Flex', classMeta, TrackSize);
  setMetadataFor(Inflexible, 'Inflexible', classMeta, TrackSize);
  setMetadataFor(Keyword, 'Keyword', classMeta, Inflexible);
  setMetadataFor(Fixed, 'Fixed', classMeta, Inflexible);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(Repeat, 'Repeat', classMeta, GridEntry);
  setMetadataFor(Track, 'Track', classMeta, Repeat);
  setMetadataFor(Auto, 'Auto', classMeta, Repeat);
  setMetadataFor(LineNames, 'LineNames', classMeta, GridEntry);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(GridBuilderInAuto, 'GridBuilderInAuto', classMeta);
  setMetadataFor(GridBuilder, 'GridBuilder', classMeta, GridBuilderInAuto, VOID, GridBuilder);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(VerticalAlign, 'VerticalAlign', classMeta);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(ListStyleType, 'ListStyleType', classMeta);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(ObjectFit, 'ObjectFit', classMeta);
  setMetadataFor(CSSOutline, 'CSSOutline', classMeta);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor(Overflow, 'Overflow', classMeta);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor(OverflowWrap, 'OverflowWrap', classMeta);
  setMetadataFor(Companion_12, 'Companion', objectMeta);
  setMetadataFor(ScrollBehavior, 'ScrollBehavior', classMeta);
  setMetadataFor(StyleVariable, 'StyleVariable', classMeta);
  setMetadataFor(PropertyValue, 'PropertyValue', classMeta, StyleVariable);
  setMetadataFor(NumberValue, 'NumberValue', classMeta, StyleVariable);
  setMetadataFor(StyleVariablePropertyProvider, 'StyleVariablePropertyProvider', classMeta);
  setMetadataFor(StyleVariableNumberProvider, 'StyleVariableNumberProvider', classMeta);
  setMetadataFor(Companion_13, 'Companion', objectMeta);
  setMetadataFor(UserSelect, 'UserSelect', classMeta);
  setMetadataFor(Companion_14, 'Companion', objectMeta);
  setMetadataFor(WhiteSpace, 'WhiteSpace', classMeta);
  setMetadataFor(Companion_15, 'Companion', objectMeta);
  setMetadataFor(TextAlign, 'TextAlign', classMeta);
  setMetadataFor(Companion_16, 'Companion', objectMeta);
  setMetadataFor(TextDecorationLine, 'TextDecorationLine', classMeta);
  setMetadataFor(Companion_17, 'Companion', objectMeta);
  setMetadataFor(CSSTransition, 'CSSTransition', classMeta);
  setMetadataFor(Companion_18, 'Companion', objectMeta);
  setMetadataFor(TransitionProperty, 'TransitionProperty', classMeta);
  function unaryMinus(_this__u8e3s4) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'calc(-1 * ' + _this__u8e3s4 + ')';
  }
  setMetadataFor(CalcScope, 'CalcScope', interfaceMeta);
  setMetadataFor(CalcScopeInstance, 'CalcScopeInstance', objectMeta, VOID, [CalcScope]);
  setMetadataFor(CSSClamp, 'CSSClamp', classMeta);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta);
  setMetadataFor(RefCallback, 'RefCallback', classMeta);
  setMetadataFor(Simple, 'Simple', classMeta, RefCallback);
  setMetadataFor(KeysToEffect, 'KeysToEffect', classMeta);
  setMetadataFor(Builder, 'Builder', classMeta, VOID, VOID, Builder);
  setMetadataFor(ElementRefScope, 'ElementRefScope', classMeta);
  setMetadataFor(Companion_19, 'Companion', objectMeta);
  setMetadataFor(GenericNamespacedElementBuilder, 'GenericNamespacedElementBuilder', classMeta, VOID, [ElementBuilder]);
  setMetadataFor(Companion_20, 'Companion', objectMeta);
  setMetadataFor(GenericElementBuilder, 'GenericElementBuilder', classMeta, VOID, [ElementBuilder]);
  setMetadataFor(Companion_21, 'Companion', objectMeta);
  setMetadataFor(SVGElementAttrsScope, 'SVGElementAttrsScope', classMeta, VOID, [AttrsScope]);
  function stroke(value) {
    return this.b2c('stroke', value.toString());
  }
  function strokeLineCap(value) {
    return this.b2c('stroke-linecap', value.toString());
  }
  function strokeLineJoin(value) {
    return this.b2c('stroke-linejoin', value.toString());
  }
  function strokeWidth(value) {
    return this.b2c('stroke-width', toString(value));
  }
  function fill(value) {
    return this.b2c('fill', value.toString());
  }
  setMetadataFor(PresentationAttrs, 'PresentationAttrs', interfaceMeta, VOID, [AttrsScope]);
  setMetadataFor(SVGGraphicalElementAttrsScope, 'SVGGraphicalElementAttrsScope', classMeta, SVGElementAttrsScope, [SVGElementAttrsScope, PresentationAttrs]);
  function cx(value) {
    this.b2c('cx', toString(value));
  }
  function cy(value) {
    this.b2c('cy', toString(value));
  }
  setMetadataFor(CenterCoordinateAttrs, 'CenterCoordinateAttrs', interfaceMeta, VOID, [AttrsScope]);
  setMetadataFor(SVGCircleAttrsScope, 'SVGCircleAttrsScope', classMeta, SVGGraphicalElementAttrsScope, [SVGGraphicalElementAttrsScope, CenterCoordinateAttrs]);
  setMetadataFor(Companion_22, 'Companion', objectMeta);
  setMetadataFor(SVGLineAttrsScope, 'SVGLineAttrsScope', classMeta, SVGGraphicalElementAttrsScope);
  setMetadataFor(Companion_23, 'Companion', objectMeta);
  setMetadataFor(SVGContainerElementAttrsScope, 'SVGContainerElementAttrsScope', classMeta, SVGGraphicalElementAttrsScope);
  function x(value) {
    this.b2c('x', toString(value));
  }
  function y(value) {
    this.b2c('y', toString(value));
  }
  setMetadataFor(CoordinateAttrs, 'CoordinateAttrs', interfaceMeta, VOID, [AttrsScope]);
  function height(value) {
    this.b2c('height', toString(value));
  }
  function width_0(value) {
    this.b2c('width', toString(value));
  }
  function width_1(value) {
    this.b2c('width', toString(value));
  }
  setMetadataFor(LengthAttrs, 'LengthAttrs', interfaceMeta, VOID, [AttrsScope]);
  function viewBox(x, y, width, height) {
    this.b2c('viewBox', toString(x) + ' ' + toString(y) + ' ' + toString(width) + ' ' + toString(height));
  }
  setMetadataFor(ViewBoxAttrs, 'ViewBoxAttrs', interfaceMeta, VOID, [AttrsScope]);
  setMetadataFor(SVGSvgAttrsScope, 'SVGSvgAttrsScope', classMeta, SVGContainerElementAttrsScope, [SVGContainerElementAttrsScope, CoordinateAttrs, LengthAttrs, ViewBoxAttrs]);
  setMetadataFor(Companion_24, 'Companion', objectMeta);
  setMetadataFor(ViewBox, 'ViewBox', classMeta);
  setMetadataFor(SVGStrokeType, 'SVGStrokeType', classMeta, Enum);
  setMetadataFor(SVGStrokeLineCap, 'SVGStrokeLineCap', classMeta, Enum);
  setMetadataFor(SVGStrokeLineJoin, 'SVGStrokeLineJoin', classMeta, Enum);
  setMetadataFor(SVGFillType, 'SVGFillType', classMeta, Enum);
  setMetadataFor(Companion_25, 'Companion', objectMeta);
  setMetadataFor(SVGPathAttrsScope, 'SVGPathAttrsScope', classMeta, SVGGraphicalElementAttrsScope);
  setMetadataFor(SVGPathDataScope, 'SVGPathDataScope', classMeta);
  setMetadataFor(Companion_26, 'Companion', objectMeta);
  function points(pairs) {
    var pointString = joinToString_0(pairs, ' ', VOID, VOID, VOID, VOID, PointsAttrs$points$lambda);
    this.b2c('points', pointString);
  }
  setMetadataFor(PointsAttrs, 'PointsAttrs', interfaceMeta, VOID, [AttrsScope]);
  setMetadataFor(SVGPolylineAttrsScope, 'SVGPolylineAttrsScope', classMeta, SVGGraphicalElementAttrsScope, [SVGGraphicalElementAttrsScope, PointsAttrs]);
  setMetadataFor(Companion_27, 'Companion', objectMeta);
  setMetadataFor(SVGRectAttrsScope, 'SVGRectAttrsScope', classMeta, SVGGraphicalElementAttrsScope, [SVGGraphicalElementAttrsScope, CoordinateAttrs, LengthAttrs]);
  setMetadataFor(Companion_28, 'Companion', objectMeta);
  setMetadataFor(SVGGroupAttrsScope, 'SVGGroupAttrsScope', classMeta, SVGContainerElementAttrsScope);
  //endregion
  function ComparableAttrsScope_init_$Init$($this) {
    ComparableAttrsScope.call($this, new DummyAttrsScope());
    return $this;
  }
  function ComparableAttrsScope_init_$Create$() {
    return ComparableAttrsScope_init_$Init$(objectCreate(protoOf(ComparableAttrsScope)));
  }
  function ComparableAttrsScope(wrapped) {
    this.o2j_1 = wrapped;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.p2j_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_0.q2j_1 = LinkedHashSet_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_1.r2j_1 = LinkedHashSet_init_$Create$();
    this.s2j_1 = null;
  }
  protoOf(ComparableAttrsScope).b2c = function (attr, value) {
    // Inline function 'kotlin.collections.set' call
    this.p2j_1.l2(attr, value);
    this.o2j_1.b2c(attr, value);
    return this;
  };
  protoOf(ComparableAttrsScope).d2c = function (classes) {
    this.q2j_1.e1(classes);
  };
  protoOf(ComparableAttrsScope).h2c = function (listener) {
    this.r2j_1.y(listener);
    this.o2j_1.h2c(listener);
  };
  protoOf(ComparableAttrsScope).c2c = function (builder) {
    var tmp0_elvis_lhs = this.s2j_1;
    var style = tmp0_elvis_lhs == null ? new ComparableStyleScope() : tmp0_elvis_lhs;
    builder(style);
    this.s2j_1 = style;
    this.o2j_1.c2c(builder);
  };
  protoOf(ComparableAttrsScope).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof ComparableAttrsScope) {
      tmp_2 = equals(other.p2j_1, this.p2j_1);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = equals(other.q2j_1, this.q2j_1);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals(other.r2j_1, this.r2j_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(other.s2j_1, this.s2j_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComparableAttrsScope).hashCode = function () {
    var result = hashCode(this.p2j_1);
    result = imul(31, result) + hashCode(this.q2j_1) | 0;
    result = imul(31, result) + hashCode(this.r2j_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.s2j_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  function DummyAttrsScope() {
  }
  protoOf(DummyAttrsScope).b2c = function (attr, value) {
    return this;
  };
  protoOf(DummyAttrsScope).d2c = function (classes) {
    return Unit_instance;
  };
  protoOf(DummyAttrsScope).h2c = function (listener) {
    return Unit_instance;
  };
  protoOf(DummyAttrsScope).c2c = function (builder) {
    return Unit_instance;
  };
  function ariaHidden(_this__u8e3s4, value) {
    value = value === VOID ? true : value;
    _this__u8e3s4.b2c('aria-hidden', value.toString());
  }
  function ariaDisabled(_this__u8e3s4, value) {
    value = value === VOID ? true : value;
    _this__u8e3s4.b2c('aria-disabled', value.toString());
  }
  function justifyItems(_this__u8e3s4, justifyItems) {
    _this__u8e3s4.v2e('justify-items', justifyItems);
  }
  function JustifyItemsPosition(value) {
    JustifyItems.call(this, value);
  }
  function Companion() {
  }
  protoOf(Companion).t2j = function () {
    return new JustifyItemsPosition('center');
  };
  protoOf(Companion).u2j = function () {
    return new JustifyItemsPosition('start');
  };
  protoOf(Companion).v2j = function () {
    return new JustifyItemsPosition('end');
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function JustifyItems(value) {
    this.w2j_1 = value;
  }
  protoOf(JustifyItems).toString = function () {
    return this.w2j_1;
  };
  function justifySelf(_this__u8e3s4, justifySelf) {
    _this__u8e3s4.v2e('justify-self', justifySelf);
  }
  function JustifySelfPosition(value) {
    JustifySelf.call(this, value);
  }
  function Companion_0() {
  }
  protoOf(Companion_0).t2j = function () {
    return new JustifySelfPosition('center');
  };
  protoOf(Companion_0).u2j = function () {
    return new JustifySelfPosition('start');
  };
  protoOf(Companion_0).v2j = function () {
    return new JustifySelfPosition('end');
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    return Companion_instance_1;
  }
  function JustifySelf(value) {
    this.x2j_1 = value;
  }
  protoOf(JustifySelf).toString = function () {
    return this.x2j_1;
  };
  function CSSAnimation(name, duration, timingFunction, delay, iterationCount, direction, fillMode, playState) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    iterationCount = iterationCount === VOID ? null : iterationCount;
    direction = direction === VOID ? null : direction;
    fillMode = fillMode === VOID ? null : fillMode;
    playState = playState === VOID ? null : playState;
    this.y2j_1 = name;
    this.z2j_1 = duration;
    this.a2k_1 = timingFunction;
    this.b2k_1 = delay;
    this.c2k_1 = iterationCount;
    this.d2k_1 = direction;
    this.e2k_1 = fillMode;
    this.f2k_1 = playState;
  }
  protoOf(CSSAnimation).toString = function () {
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.CSSAnimation.toString.<anonymous>' call
    var tmp0_safe_receiver = this.z2j_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSAnimation.toString.<anonymous>.<anonymous>' call
      this_0.y(toString(tmp0_safe_receiver));
    }
    var tmp1_safe_receiver = this.a2k_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSAnimation.toString.<anonymous>.<anonymous>' call
      this_0.y(toString(tmp1_safe_receiver));
    }
    if (!(this.b2k_1 == null)) {
      if (this.z2j_1 == null) {
        this_0.y('0s');
      }
      this_0.y(toString(this.b2k_1));
    }
    var tmp2_safe_receiver = this.c2k_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSAnimation.toString.<anonymous>.<anonymous>' call
      var it = tmp2_safe_receiver.g2k_1;
      this_0.y(AnimationIterationCount__toString_impl_5t3trp(it));
    }
    var tmp3_safe_receiver = this.d2k_1;
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSAnimation.toString.<anonymous>.<anonymous>' call
      this_0.y(toString(tmp3_safe_receiver));
    }
    var tmp4_safe_receiver = this.e2k_1;
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSAnimation.toString.<anonymous>.<anonymous>' call
      this_0.y(toString(tmp4_safe_receiver));
    }
    var tmp5_safe_receiver = this.f2k_1;
    if (tmp5_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSAnimation.toString.<anonymous>.<anonymous>' call
      this_0.y(toString(tmp5_safe_receiver));
    }
    this_0.y(this.y2j_1);
    var tmp$ret$14 = this_0.b3();
    return joinToString(tmp$ret$14, ' ');
  };
  protoOf(CSSAnimation).hashCode = function () {
    var result = getStringHashCode(this.y2j_1);
    result = imul(result, 31) + (this.z2j_1 == null ? 0 : hashCode(this.z2j_1)) | 0;
    result = imul(result, 31) + (this.a2k_1 == null ? 0 : hashCode(this.a2k_1)) | 0;
    result = imul(result, 31) + (this.b2k_1 == null ? 0 : hashCode(this.b2k_1)) | 0;
    result = imul(result, 31) + (this.c2k_1 == null ? 0 : AnimationIterationCount__hashCode_impl_rk9qkk(this.c2k_1.g2k_1)) | 0;
    result = imul(result, 31) + (this.d2k_1 == null ? 0 : hashCode(this.d2k_1)) | 0;
    result = imul(result, 31) + (this.e2k_1 == null ? 0 : hashCode(this.e2k_1)) | 0;
    result = imul(result, 31) + (this.f2k_1 == null ? 0 : hashCode(this.f2k_1)) | 0;
    return result;
  };
  protoOf(CSSAnimation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSAnimation))
      return false;
    var tmp0_other_with_cast = other instanceof CSSAnimation ? other : THROW_CCE();
    if (!(this.y2j_1 === tmp0_other_with_cast.y2j_1))
      return false;
    if (!equals(this.z2j_1, tmp0_other_with_cast.z2j_1))
      return false;
    if (!equals(this.a2k_1, tmp0_other_with_cast.a2k_1))
      return false;
    if (!equals(this.b2k_1, tmp0_other_with_cast.b2k_1))
      return false;
    if (!equals(this.c2k_1, tmp0_other_with_cast.c2k_1))
      return false;
    if (!equals(this.d2k_1, tmp0_other_with_cast.d2k_1))
      return false;
    if (!equals(this.e2k_1, tmp0_other_with_cast.e2k_1))
      return false;
    if (!equals(this.f2k_1, tmp0_other_with_cast.f2k_1))
      return false;
    return true;
  };
  function _get_count__iw3m8u($this) {
    return $this;
  }
  function AnimationIterationCount__toString_impl_5t3trp($this) {
    var tmp0_safe_receiver = _get_count__iw3m8u($this);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toString(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 'infinite' : tmp1_elvis_lhs;
  }
  function AnimationIterationCount__hashCode_impl_rk9qkk($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function animation(_this__u8e3s4, animations) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(animations.length === 0)) {
      _this__u8e3s4.q2e('animation', joinToString_0(animations, ', '));
    }
  }
  function borderBottom(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    borderBottom_0(_this__u8e3s4, borderBottom$lambda(width, style, color));
  }
  function borderColor(_this__u8e3s4, color) {
    _this__u8e3s4.v2e('border-color', color);
  }
  function borderStyle(_this__u8e3s4, lineStyle) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.q2e('border-style', lineStyle);
  }
  function borderWidth(_this__u8e3s4, width) {
    _this__u8e3s4.v2e('border-width', width);
  }
  function borderTop(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    borderTop_0(_this__u8e3s4, borderTop$lambda(width, style, color));
  }
  function borderLeft(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    borderLeft_0(_this__u8e3s4, borderLeft$lambda(width, style, color));
  }
  function borderBottom_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBorder();
    // Inline function 'kotlin.contracts.contract' call
    borderBuild(this_0);
    _this__u8e3s4.v2e('border-bottom', this_0);
  }
  function borderTop_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBorder();
    // Inline function 'kotlin.contracts.contract' call
    borderBuild(this_0);
    _this__u8e3s4.v2e('border-top', this_0);
  }
  function borderLeft_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBorder();
    // Inline function 'kotlin.contracts.contract' call
    borderBuild(this_0);
    _this__u8e3s4.v2e('border-left', this_0);
  }
  function borderBottom$lambda($width, $style, $color) {
    return function ($this$borderBottom) {
      var tmp0_safe_receiver = $width;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        width($this$borderBottom, tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $style;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        style($this$borderBottom, tmp1_safe_receiver);
      }
      var tmp2_safe_receiver = $color;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        color($this$borderBottom, tmp2_safe_receiver);
      }
      return Unit_instance;
    };
  }
  function borderTop$lambda($width, $style, $color) {
    return function ($this$borderTop) {
      var tmp0_safe_receiver = $width;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        width($this$borderTop, tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $style;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        style($this$borderTop, tmp1_safe_receiver);
      }
      var tmp2_safe_receiver = $color;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        color($this$borderTop, tmp2_safe_receiver);
      }
      return Unit_instance;
    };
  }
  function borderLeft$lambda($width, $style, $color) {
    return function ($this$borderLeft) {
      var tmp0_safe_receiver = $width;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        width($this$borderLeft, tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $style;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        style($this$borderLeft, tmp1_safe_receiver);
      }
      var tmp2_safe_receiver = $color;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        color($this$borderLeft, tmp2_safe_receiver);
      }
      return Unit_instance;
    };
  }
  function Companion_1() {
  }
  protoOf(Companion_1).h2k = function () {
    return new BoxSizing('content-box');
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    return Companion_instance_2;
  }
  function BoxSizing(value) {
    this.i2k_1 = value;
  }
  protoOf(BoxSizing).toString = function () {
    return this.i2k_1;
  };
  function boxShadow(_this__u8e3s4, offsetX, offsetY, blurRadius, spreadRadius, color, inset) {
    offsetX = offsetX === VOID ? get_px(0) : offsetX;
    offsetY = offsetY === VOID ? get_px(0) : offsetY;
    blurRadius = blurRadius === VOID ? null : blurRadius;
    spreadRadius = spreadRadius === VOID ? null : spreadRadius;
    color = color === VOID ? null : color;
    inset = inset === VOID ? false : inset;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.boxShadow.<anonymous>' call
    if (inset) {
      this_0.w5('inset');
      this_0.x5(_Char___init__impl__6a9atx(32));
    }
    this_0.v5(offsetX);
    this_0.x5(_Char___init__impl__6a9atx(32));
    this_0.v5(offsetY);
    if (!(blurRadius == null)) {
      this_0.x5(_Char___init__impl__6a9atx(32));
      this_0.v5(blurRadius);
    }
    if (!(spreadRadius == null)) {
      if (blurRadius == null) {
        this_0.x5(_Char___init__impl__6a9atx(32));
        this_0.x5(_Char___init__impl__6a9atx(48));
      }
      this_0.x5(_Char___init__impl__6a9atx(32));
      this_0.v5(spreadRadius);
    }
    if (!(color == null)) {
      this_0.x5(_Char___init__impl__6a9atx(32));
      this_0.v5(color);
    }
    var tmp$ret$1 = this_0.toString();
    boxShadow_0(_this__u8e3s4, tmp$ret$1);
  }
  function boxSizing_0(_this__u8e3s4, boxSizing_0) {
    boxSizing(_this__u8e3s4, boxSizing_0.toString());
  }
  function boxShadow_0(_this__u8e3s4, value) {
    _this__u8e3s4.q2e('box-shadow', value);
  }
  function ComparableStyleScope() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.j2k_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.k2k_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(ComparableStyleScope).v2e = function (propertyName, value) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.j2k_1;
    var value_0 = toString(value);
    this_0.l2(propertyName, value_0);
  };
  protoOf(ComparableStyleScope).x2e = function (variableName, value) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.k2k_1;
    var value_0 = toString(value);
    this_0.l2(variableName, value_0);
  };
  protoOf(ComparableStyleScope).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof ComparableStyleScope) {
      tmp_0 = equals(this.j2k_1, other.j2k_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.k2k_1, other.k2k_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComparableStyleScope).hashCode = function () {
    var result = hashCode(this.j2k_1);
    result = imul(31, result) + hashCode(this.k2k_1) | 0;
    return result;
  };
  function isNotEmpty(_this__u8e3s4) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!_this__u8e3s4.j2k_1.s()) {
      tmp = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp = !_this__u8e3s4.k2k_1.s();
    }
    return tmp;
  }
  function Companion_2() {
  }
  protoOf(Companion_2).l2k = function () {
    return new Cursor('pointer');
  };
  protoOf(Companion_2).m2k = function () {
    return new Cursor('not-allowed');
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    return Companion_instance_3;
  }
  function Cursor(value) {
    this.n2k_1 = value;
  }
  protoOf(Cursor).toString = function () {
    return this.n2k_1;
  };
  function cursor(_this__u8e3s4, cursor) {
    _this__u8e3s4.v2e('cursor', cursor);
  }
  function Companion_3() {
  }
  protoOf(Companion_3).o2k = function () {
    return new Appearance('none');
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    return Companion_instance_4;
  }
  function Appearance(value) {
    this.p2k_1 = value;
  }
  protoOf(Appearance).toString = function () {
    return this.p2k_1;
  };
  function appearance(_this__u8e3s4, appearance) {
    _this__u8e3s4.v2e('appearance', appearance);
  }
  function Companion_4() {
  }
  protoOf(Companion_4).q2k = function () {
    return new FontWeight('100');
  };
  protoOf(Companion_4).r2k = function () {
    return new FontWeight('500');
  };
  protoOf(Companion_4).s2k = function () {
    return new FontWeight('600');
  };
  protoOf(Companion_4).t2k = function () {
    return new FontWeight('bold');
  };
  protoOf(Companion_4).u2k = function () {
    return new FontWeight('bolder');
  };
  var Companion_instance_5;
  function Companion_getInstance_5() {
    return Companion_instance_5;
  }
  function FontWeight(value) {
    this.v2k_1 = value;
  }
  protoOf(FontWeight).toString = function () {
    return this.v2k_1;
  };
  function fontWeight(_this__u8e3s4, weight) {
    _this__u8e3s4.v2e('font-weight', weight);
  }
  function GridTrackBuilder() {
    GridTrackBuilderInRepeat.call(this);
  }
  protoOf(GridTrackBuilder).x2k = function (count, block) {
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    var this_1 = this_0.y2k_1;
    var repeatTracks = copyToArray(this_1);
    this.y2k_1.y(Companion_instance_7.z2k(count, repeatTracks.slice()));
  };
  function GridTrackBuilderInRepeat() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.y2k_1 = ArrayList_init_$Create$();
  }
  protoOf(GridTrackBuilderInRepeat).a2l = function () {
    return Companion_instance_6.f2l();
  };
  protoOf(GridTrackBuilderInRepeat).b2l = function (track) {
    this.y2k_1.y(track);
  };
  protoOf(GridTrackBuilderInRepeat).c2l = function (value) {
    return this.b2l(Companion_instance_6.g2l(value));
  };
  protoOf(GridTrackBuilderInRepeat).d2l = function (min, max) {
    return this.b2l(Companion_instance_6.h2l(min, max));
  };
  protoOf(GridTrackBuilderInRepeat).e2l = function (min, max) {
    return this.d2l(Companion_instance_6.i2l(min), Companion_instance_6.g2l(max));
  };
  function FitContent() {
  }
  function MinMax(min, max) {
    TrackSize.call(this, 'minmax(' + min + ', ' + max + ')');
    this.k2l_1 = min;
    this.l2l_1 = max;
  }
  function Flex(value) {
    TrackSize.call(this, toString(value));
  }
  function Inflexible(value) {
    TrackSize.call(this, value);
  }
  function Keyword(value) {
    Inflexible.call(this, value);
  }
  function Fixed(value) {
    Inflexible.call(this, toString(value));
  }
  function Companion_5() {
  }
  protoOf(Companion_5).f2l = function () {
    return new Keyword('min-content');
  };
  protoOf(Companion_5).i2l = function (value) {
    return new Fixed(value);
  };
  protoOf(Companion_5).g2l = function (value) {
    return new Flex(value);
  };
  protoOf(Companion_5).h2l = function (min, max) {
    return new MinMax(min, max);
  };
  var Companion_instance_6;
  function Companion_getInstance_6() {
    return Companion_instance_6;
  }
  function Track(count, entries) {
    Repeat.call(this, count, entries);
  }
  function Auto() {
  }
  function TrackSize(value) {
    GridEntry.call(this, value);
  }
  function Repeat(value, entries) {
    GridEntry.call(this, 'repeat(' + toString(value) + ', ' + toTrackListString(entries) + ')');
    this.n2l_1 = entries;
  }
  function LineNames(names) {
    GridEntry.call(this, joinToString_0(names, ' ', '[', ']'));
    this.p2l_1 = names;
  }
  function Companion_6() {
  }
  protoOf(Companion_6).z2k = function (count, entries) {
    return new Track(count, entries.slice());
  };
  var Companion_instance_7;
  function Companion_getInstance_7() {
    return Companion_instance_7;
  }
  function GridEntry(value) {
    this.q2l_1 = value;
  }
  protoOf(GridEntry).toString = function () {
    return this.q2l_1;
  };
  function gridTemplateColumns_0(_this__u8e3s4, block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    gridTemplateColumns(_this__u8e3s4, toTrackListString_0(this_0.y2k_1));
  }
  function gridTemplateRows_0(_this__u8e3s4, block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    gridTemplateRows(_this__u8e3s4, toTrackListString_0(this_0.y2k_1));
  }
  function toTrackListString(_this__u8e3s4) {
    validate(_this__u8e3s4);
    // Inline function 'kotlin.collections.fold' call
    // Inline function 'kotlin.collections.mutableListOf' call
    var accumulator = ArrayList_init_$Create$();
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    while (inductionVariable < last) {
      var element = _this__u8e3s4[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.varabyte.kobweb.compose.css.toTrackListString.<anonymous>' call
      var acc = accumulator;
      var prev = lastOrNull(acc);
      var tmp;
      if (prev instanceof LineNames) {
        tmp = element instanceof LineNames;
      } else {
        tmp = false;
      }
      if (tmp) {
        var tmp_0 = get_lastIndex(acc);
        // Inline function 'kotlin.collections.plus' call
        var this_0 = prev.p2l_1;
        var elements = element.p2l_1;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$2 = this_0.concat(elements);
        acc.v(tmp_0, new LineNames(tmp$ret$2.slice()));
      } else {
        acc.y(element);
      }
      accumulator = acc;
    }
    var tmp$ret$4 = accumulator;
    return joinToString(tmp$ret$4, ' ');
  }
  function toTrackListString_0(_this__u8e3s4) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(_this__u8e3s4);
    return toTrackListString(tmp$ret$0);
  }
  function validate(_this__u8e3s4) {
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$();
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    while (inductionVariable < last) {
      var element = _this__u8e3s4[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>' call
      var tmp;
      if (element instanceof LineNames) {
        tmp = emptyList();
      } else {
        if (element instanceof TrackSize) {
          tmp = listOf(element);
        } else {
          if (element instanceof Repeat) {
            // Inline function 'kotlin.collections.ifEmpty' call
            // Inline function 'kotlin.collections.filterIsInstance' call
            // Inline function 'kotlin.collections.filterIsInstanceTo' call
            var this_0 = element.n2l_1;
            var destination_0 = ArrayList_init_$Create$();
            var inductionVariable_0 = 0;
            var last_0 = this_0.length;
            while (inductionVariable_0 < last_0) {
              var element_0 = this_0[inductionVariable_0];
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              if (element_0 instanceof TrackSize) {
                destination_0.y(element_0);
              }
            }
            var tmp_0;
            if (destination_0.s()) {
              // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>.<anonymous>' call
              var message = 'repeat() must contain at least one track size';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              tmp_0 = destination_0;
            }
            tmp = tmp_0;
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
      var list = tmp;
      addAll(destination, list);
    }
    var trackSizes = destination;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!trackSizes.s()) {
      // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>' call
      var message_0 = 'You must specify at least one track size';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.collections.count' call
    var count = 0;
    var inductionVariable_1 = 0;
    var last_1 = _this__u8e3s4.length;
    while (inductionVariable_1 < last_1) {
      var element_1 = _this__u8e3s4[inductionVariable_1];
      inductionVariable_1 = inductionVariable_1 + 1 | 0;
      // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>' call
      if (element_1 instanceof Auto) {
        count = count + 1 | 0;
      }
    }
    var autoRepeatCount = count;
    if (autoRepeatCount === 0)
      return Unit_instance;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(autoRepeatCount === 1)) {
      // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>' call
      var message_1 = 'Only one auto-repeat call is allowed per track list';
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = trackSizes.n();
    while (tmp0_iterator.b1()) {
      var element_2 = tmp0_iterator.d1();
      // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>' call
      if (!(element_2 instanceof Fixed)) {
        if (element_2 instanceof Flex) {
          // Inline function 'kotlin.error' call
          var message_2 = 'Cannot use flex values with auto-repeat';
          throw IllegalStateException_init_$Create$(toString(message_2));
        } else {
          if (element_2 instanceof Keyword) {
            // Inline function 'kotlin.error' call
            var message_3 = 'Cannot use keywords with auto-repeat';
            throw IllegalStateException_init_$Create$(toString(message_3));
          } else {
            if (element_2 instanceof FitContent) {
              // Inline function 'kotlin.error' call
              var message_4 = 'Cannot use fit-content with auto-repeat';
              throw IllegalStateException_init_$Create$(toString(message_4));
            } else {
              if (element_2 instanceof MinMax) {
                // Inline function 'kotlin.check' call
                var tmp_1;
                var tmp_2 = element_2.k2l_1;
                if (tmp_2 instanceof Fixed) {
                  tmp_1 = true;
                } else {
                  var tmp_3 = element_2.l2l_1;
                  tmp_1 = tmp_3 instanceof Fixed;
                }
                // Inline function 'kotlin.contracts.contract' call
                if (!tmp_1) {
                  // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>.<anonymous>' call
                  var message_5 = 'Cannot use minmax with auto-repeat unless at least one of the values is a fixed value (a length or percentage)';
                  throw IllegalStateException_init_$Create$(toString(message_5));
                }
              }
            }
          }
        }
      }
    }
  }
  function grid(_this__u8e3s4, block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new GridBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    this_0.u2l(_this__u8e3s4);
  }
  function GridBuilder() {
    GridBuilderInAuto.call(this);
  }
  function GridBuilderInAuto() {
    this.r2l_1 = null;
    this.s2l_1 = null;
    this.t2l_1 = null;
  }
  protoOf(GridBuilderInAuto).v2l = function (block) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    tmp.r2l_1 = this_0.y2k_1;
  };
  protoOf(GridBuilderInAuto).w2l = function (block) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    tmp.s2l_1 = this_0.y2k_1;
  };
  protoOf(GridBuilderInAuto).u2l = function (scope) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Grid' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display(scope, 'grid');
    var tmp0_safe_receiver = this.r2l_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      gridTemplateColumns(scope, toTrackListString_0(tmp0_safe_receiver));
    }
    var tmp1_safe_receiver = this.s2l_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      gridTemplateRows(scope, toTrackListString_0(tmp1_safe_receiver));
    }
    var tmp2_safe_receiver = this.t2l_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.GridBuilderInAuto.buildInto.<anonymous>' call
      var tmp0_safe_receiver_0 = tmp2_safe_receiver.r2l_1;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        gridAutoColumns(scope, toTrackListString_0(tmp0_safe_receiver_0));
      }
      var tmp1_safe_receiver_0 = tmp2_safe_receiver.s2l_1;
      var tmp;
      if (tmp1_safe_receiver_0 == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        gridAutoRows(scope, toTrackListString_0(tmp1_safe_receiver_0));
        tmp = Unit_instance;
      }
    }
  };
  function Companion_7() {
  }
  protoOf(Companion_7).x2l = function () {
    return new VerticalAlign('middle');
  };
  var Companion_instance_8;
  function Companion_getInstance_8() {
    return Companion_instance_8;
  }
  function VerticalAlign(value) {
    this.y2l_1 = value;
  }
  protoOf(VerticalAlign).toString = function () {
    return this.y2l_1;
  };
  function verticalAlign(_this__u8e3s4, verticalAlign) {
    _this__u8e3s4.v2e('vertical-align', verticalAlign);
  }
  function paddingInline(_this__u8e3s4, value) {
    _this__u8e3s4.q2e('padding-inline', joinToString_0(value, ' '));
  }
  function marginBlock(_this__u8e3s4, value) {
    _this__u8e3s4.q2e('margin-block', joinToString_0(value, ' '));
  }
  function marginInline(_this__u8e3s4, value) {
    _this__u8e3s4.q2e('margin-inline', joinToString_0(value, ' '));
  }
  function Companion_8() {
  }
  protoOf(Companion_8).o2k = function () {
    return new ListStyleType('none');
  };
  var Companion_instance_9;
  function Companion_getInstance_9() {
    return Companion_instance_9;
  }
  function ListStyleType(value) {
    this.z2l_1 = value;
  }
  protoOf(ListStyleType).toString = function () {
    return this.z2l_1;
  };
  function listStyle(_this__u8e3s4, type, position, image) {
    type = type === VOID ? null : type;
    position = position === VOID ? null : position;
    image = image === VOID ? null : image;
    if (type == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      _this__u8e3s4.v2e('list-style-type', type);
    }
    if (position == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      _this__u8e3s4.v2e('list-style-position', position);
    }
    if (image == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      _this__u8e3s4.v2e('list-style-image', image);
    }
  }
  function Companion_9() {
  }
  protoOf(Companion_9).a2m = function () {
    return new ObjectFit('scale-down');
  };
  var Companion_instance_10;
  function Companion_getInstance_10() {
    return Companion_instance_10;
  }
  function ObjectFit(value) {
    this.b2m_1 = value;
  }
  protoOf(ObjectFit).toString = function () {
    return this.b2m_1;
  };
  function objectFit(_this__u8e3s4, objectFit) {
    _this__u8e3s4.v2e('object-fit', objectFit);
  }
  function outline(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    outline_0(_this__u8e3s4, outline$lambda(width, style, color));
  }
  function outline_0(_this__u8e3s4, outlineBuilder) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSOutline();
    // Inline function 'kotlin.contracts.contract' call
    outlineBuilder(this_0);
    _this__u8e3s4.v2e('outline', this_0);
  }
  function CSSOutline() {
    this.c2m_1 = null;
    this.d2m_1 = null;
    this.e2m_1 = null;
  }
  protoOf(CSSOutline).equals = function (other) {
    var tmp;
    if (other instanceof CSSOutline) {
      tmp = (equals(this.c2m_1, other.c2m_1) ? equals(this.d2m_1, other.d2m_1) : false) ? equals(this.e2m_1, other.e2m_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CSSOutline).toString = function () {
    var values = listOfNotNull([this.e2m_1, this.d2m_1, this.c2m_1]);
    return joinToString(values, ' ');
  };
  function outline$lambda($width, $style, $color) {
    return function ($this$outline) {
      $this$outline.c2m_1 = $width;
      $this$outline.d2m_1 = $style;
      $this$outline.e2m_1 = $color;
      return Unit_instance;
    };
  }
  function Companion_10() {
  }
  protoOf(Companion_10).f2m = function () {
    return new Overflow('hidden');
  };
  protoOf(Companion_10).g2m = function () {
    return new Overflow('auto');
  };
  var Companion_instance_11;
  function Companion_getInstance_11() {
    return Companion_instance_11;
  }
  function Overflow(value) {
    this.h2m_1 = value;
  }
  protoOf(Overflow).toString = function () {
    return this.h2m_1;
  };
  function Companion_11() {
  }
  protoOf(Companion_11).i2m = function () {
    return new OverflowWrap('break-word');
  };
  var Companion_instance_12;
  function Companion_getInstance_12() {
    return Companion_instance_12;
  }
  function OverflowWrap(value) {
    this.j2m_1 = value;
  }
  protoOf(OverflowWrap).toString = function () {
    return this.j2m_1;
  };
  function overflowX(_this__u8e3s4, overflowX) {
    _this__u8e3s4.v2e('overflow-x', overflowX);
  }
  function overflowY(_this__u8e3s4, overflowY) {
    _this__u8e3s4.v2e('overflow-y', overflowY);
  }
  function overflow(_this__u8e3s4, overflow) {
    _this__u8e3s4.v2e('overflow', overflow);
  }
  function overflowWrap(_this__u8e3s4, overflowWrap) {
    _this__u8e3s4.v2e('overflow-wrap', overflowWrap);
  }
  function Companion_12() {
  }
  protoOf(Companion_12).k2m = function () {
    return new ScrollBehavior('smooth');
  };
  var Companion_instance_13;
  function Companion_getInstance_13() {
    return Companion_instance_13;
  }
  function ScrollBehavior(value) {
    this.l2m_1 = value;
  }
  protoOf(ScrollBehavior).toString = function () {
    return this.l2m_1;
  };
  function scrollBehavior(_this__u8e3s4, scrollBehavior) {
    _this__u8e3s4.v2e('scroll-behavior', scrollBehavior);
  }
  function PropertyValue(name, defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    StyleVariable.call(this, name, defaultFallback, prefix);
  }
  protoOf(PropertyValue).o2m = function (fallback) {
    return this.r2m(fallback);
  };
  protoOf(PropertyValue).s2m = function (fallback) {
    return this.o2m((fallback == null ? true : !(fallback == null)) ? fallback : THROW_CCE());
  };
  function NumberValue(name, defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    var tmp;
    if (defaultFallback == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.NumberValue.<init>.<anonymous>' call
      // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = defaultFallback;
    }
    StyleVariable.call(this, name, tmp, prefix);
  }
  protoOf(NumberValue).w2m = function (fallback) {
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp;
    if (fallback == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.NumberValue.value.<anonymous>' call
      // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = fallback;
    }
    // Inline function 'kotlin.js.asDynamic' call
    return this.r2m(tmp);
  };
  protoOf(NumberValue).s2m = function (fallback) {
    return this.w2m((fallback == null ? true : isNumber(fallback)) ? fallback : THROW_CCE());
  };
  function StyleVariable(name, defaultFallback, prefix) {
    this.p2m_1 = defaultFallback;
    var tmp = this;
    var tmp_0;
    if (prefix == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.StyleVariable.name.<anonymous>' call
      tmp_0 = prefix + '-' + name;
    }
    var tmp1_elvis_lhs = tmp_0;
    tmp.q2m_1 = tmp1_elvis_lhs == null ? name : tmp1_elvis_lhs;
  }
  protoOf(StyleVariable).t2m = function (fallback, $super) {
    fallback = fallback === VOID ? null : fallback;
    return $super === VOID ? this.s2m(fallback) : $super.s2m.call(this, fallback);
  };
  protoOf(StyleVariable).r2m = function (fallback) {
    // Inline function 'org.jetbrains.compose.web.css.CSSVariableValue' call
    var tmp1_safe_receiver = fallback == null ? this.p2m_1 : fallback;
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.StyleVariable.variableValue.<anonymous>' call
      tmp = ', ' + tmp1_safe_receiver;
    }
    var tmp2_elvis_lhs = tmp;
    // Inline function 'org.jetbrains.compose.web.css.CSSVariableValue' call
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'var(--' + this.q2m_1 + (tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs) + ')';
  };
  function StyleVariablePropertyProvider(defaultFallback, prefix) {
    this.x2m_1 = defaultFallback;
    this.y2m_1 = prefix;
  }
  protoOf(StyleVariablePropertyProvider).z2m = function (thisRef, property) {
    return new PropertyValue(provideVariableName(thisRef, property), this.x2m_1, this.y2m_1);
  };
  function StyleVariable_0(prefix) {
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariablePropertyProvider(null, prefix);
  }
  function StyleVariable_1(defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariablePropertyProvider(defaultFallback, prefix);
  }
  function StyleVariable_2(defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariablePropertyProvider(defaultFallback, prefix);
  }
  function StyleVariableNumberProvider(defaultFallback, prefix) {
    this.a2n_1 = defaultFallback;
    this.b2n_1 = prefix;
  }
  protoOf(StyleVariableNumberProvider).z2m = function (thisRef, property) {
    return new NumberValue(provideVariableName(thisRef, property), this.a2n_1, this.b2n_1);
  };
  function StyleVariable_3(defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariableNumberProvider(defaultFallback, prefix);
  }
  function setVariable(_this__u8e3s4, variable, value) {
    _this__u8e3s4.v2e('--' + variable.q2m_1, value);
  }
  function provideVariableName(groupObject, property) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.provideVariableName.<anonymous>' call
    if (!(groupObject == null)) {
      this_0.w5(removeSuffix(removeSuffix(titleCamelCaseToKebabCase(ensureNotNull(getKClassFromExpression(groupObject).e7())), '-vars'), '-variables'));
      this_0.x5(_Char___init__impl__6a9atx(45));
    }
    this_0.w5(removeSuffix(removeSuffix(titleCamelCaseToKebabCase(property.callableName), '-var'), '-variable'));
    return this_0.toString();
  }
  function setVariable_0(_this__u8e3s4, variable, value) {
    _this__u8e3s4.r2e('--' + variable.q2m_1, value);
  }
  function Companion_13() {
  }
  protoOf(Companion_13).o2k = function () {
    return new UserSelect('none');
  };
  var Companion_instance_14;
  function Companion_getInstance_14() {
    return Companion_instance_14;
  }
  function UserSelect(value) {
    this.c2n_1 = value;
  }
  protoOf(UserSelect).toString = function () {
    return this.c2n_1;
  };
  function Companion_14() {
  }
  protoOf(Companion_14).d2n = function () {
    return new WhiteSpace('nowrap');
  };
  protoOf(Companion_14).e2n = function () {
    return new WhiteSpace('pre-wrap');
  };
  var Companion_instance_15;
  function Companion_getInstance_15() {
    return Companion_instance_15;
  }
  function WhiteSpace(value) {
    this.f2n_1 = value;
  }
  protoOf(WhiteSpace).toString = function () {
    return this.f2n_1;
  };
  function Companion_15() {
  }
  protoOf(Companion_15).t2j = function () {
    return new TextAlign('center');
  };
  protoOf(Companion_15).u2j = function () {
    return new TextAlign('start');
  };
  var Companion_instance_16;
  function Companion_getInstance_16() {
    return Companion_instance_16;
  }
  function TextAlign(value) {
    this.g2n_1 = value;
  }
  protoOf(TextAlign).toString = function () {
    return this.g2n_1;
  };
  function Companion_16() {
  }
  protoOf(Companion_16).h2n = function () {
    return new TextDecorationLine('underline');
  };
  protoOf(Companion_16).o2k = function () {
    return new TextDecorationLine('none');
  };
  var Companion_instance_17;
  function Companion_getInstance_17() {
    return Companion_instance_17;
  }
  function TextDecorationLine(value) {
    this.i2n_1 = value;
  }
  protoOf(TextDecorationLine).toString = function () {
    return this.i2n_1;
  };
  function userSelect(_this__u8e3s4, userSelect) {
    _this__u8e3s4.v2e('user-select', userSelect);
  }
  function whiteSpace(_this__u8e3s4, whiteSpace) {
    _this__u8e3s4.v2e('white-space', whiteSpace);
  }
  function textAlign(_this__u8e3s4, textAlign) {
    _this__u8e3s4.v2e('text-align', textAlign);
  }
  function textDecorationLine(_this__u8e3s4, textDecorationLines) {
    _this__u8e3s4.q2e('text-decoration-line', joinToString_0(textDecorationLines, ' '));
  }
  function translateX(_this__u8e3s4, tx) {
    translate(_this__u8e3s4, tx);
  }
  function translate(_this__u8e3s4, tx) {
    _this__u8e3s4.v2e('translate', tx);
  }
  function Companion_17() {
  }
  protoOf(Companion_17).j2n = function (properties, duration, timingFunction, delay) {
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(properties, 10));
    var tmp0_iterator = properties.n();
    while (tmp0_iterator.b1()) {
      var item = tmp0_iterator.d1();
      // Inline function 'com.varabyte.kobweb.compose.css.Companion.group.<anonymous>' call
      var tmp$ret$0 = CSSTransition_init_$Create$(item, duration, timingFunction, delay);
      destination.y(tmp$ret$0);
    }
    return copyToArray(destination);
  };
  protoOf(Companion_17).k2n = function (properties, duration, timingFunction, delay, $super) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    return $super === VOID ? this.j2n(properties, duration, timingFunction, delay) : $super.j2n.call(this, properties, duration, timingFunction, delay);
  };
  var Companion_instance_18;
  function Companion_getInstance_18() {
    return Companion_instance_18;
  }
  function CSSTransition_init_$Init$(property, duration, timingFunction, delay, $this) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    CSSTransition.call($this, Companion_instance_19.l2n(property), duration, timingFunction, delay);
    return $this;
  }
  function CSSTransition_init_$Create$(property, duration, timingFunction, delay) {
    return CSSTransition_init_$Init$(property, duration, timingFunction, delay, objectCreate(protoOf(CSSTransition)));
  }
  function CSSTransition(property, duration, timingFunction, delay) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    this.m2n_1 = property;
    this.n2n_1 = duration;
    this.o2n_1 = timingFunction;
    this.p2n_1 = delay;
  }
  protoOf(CSSTransition).toString = function () {
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.CSSTransition.toString.<anonymous>' call
    this_0.y(this.m2n_1.toString());
    var tmp0_safe_receiver = this.n2n_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSTransition.toString.<anonymous>.<anonymous>' call
      this_0.y(toString(tmp0_safe_receiver));
    }
    var tmp1_safe_receiver = this.o2n_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSTransition.toString.<anonymous>.<anonymous>' call
      this_0.y(toString(tmp1_safe_receiver));
    }
    if (!(this.p2n_1 == null)) {
      if (this.n2n_1 == null) {
        this_0.y('0s');
      }
      this_0.y(toString(this.p2n_1));
    }
    var tmp$ret$6 = this_0.b3();
    return joinToString(tmp$ret$6, ' ');
  };
  protoOf(CSSTransition).hashCode = function () {
    var result = hashCode(this.m2n_1);
    result = imul(result, 31) + (this.n2n_1 == null ? 0 : hashCode(this.n2n_1)) | 0;
    result = imul(result, 31) + (this.o2n_1 == null ? 0 : hashCode(this.o2n_1)) | 0;
    result = imul(result, 31) + (this.p2n_1 == null ? 0 : hashCode(this.p2n_1)) | 0;
    return result;
  };
  protoOf(CSSTransition).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSTransition))
      return false;
    var tmp0_other_with_cast = other instanceof CSSTransition ? other : THROW_CCE();
    if (!equals(this.m2n_1, tmp0_other_with_cast.m2n_1))
      return false;
    if (!equals(this.n2n_1, tmp0_other_with_cast.n2n_1))
      return false;
    if (!equals(this.o2n_1, tmp0_other_with_cast.o2n_1))
      return false;
    if (!equals(this.p2n_1, tmp0_other_with_cast.p2n_1))
      return false;
    return true;
  };
  function transition(_this__u8e3s4, transitions) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(transitions.length === 0)) {
      _this__u8e3s4.q2e('transition', joinToString_0(transitions));
    }
  }
  function Companion_18() {
  }
  protoOf(Companion_18).l2n = function (customValue) {
    // Inline function 'kotlin.check' call
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(customValue) > 0) {
      var tmp$ret$2;
      $l$block: {
        // Inline function 'kotlin.text.none' call
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(customValue)) {
          var element = charSequenceGet(customValue, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'com.varabyte.kobweb.compose.css.Companion.of.<anonymous>' call
          if (isWhitespace(element)) {
            tmp$ret$2 = false;
            break $l$block;
          }
        }
        tmp$ret$2 = true;
      }
      tmp = tmp$ret$2;
    } else {
      tmp = false;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp) {
      // Inline function 'com.varabyte.kobweb.compose.css.Companion.of.<anonymous>' call
      var message = 'Invalid transition property name. A property shouldn\'t contain any spaces, but got "' + customValue + '".';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return new TransitionProperty(customValue);
  };
  var Companion_instance_19;
  function Companion_getInstance_19() {
    return Companion_instance_19;
  }
  function TransitionProperty(value) {
    this.q2n_1 = value;
  }
  protoOf(TransitionProperty).toString = function () {
    return this.q2n_1;
  };
  function calc(action) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    return action(CalcScopeInstance_instance);
  }
  function CalcScope() {
  }
  function CalcScopeInstance() {
  }
  var CalcScopeInstance_instance;
  function CalcScopeInstance_getInstance() {
    return CalcScopeInstance_instance;
  }
  function CSSClamp(min, value, max) {
    this.s2n_1 = min;
    this.t2n_1 = value;
    this.u2n_1 = max;
  }
  protoOf(CSSClamp).toString = function () {
    return 'clamp(' + this.s2n_1 + ', ' + this.t2n_1 + ', ' + this.u2n_1 + ')';
  };
  protoOf(CSSClamp).hashCode = function () {
    var result = hashCode(this.s2n_1);
    result = imul(result, 31) + hashCode(this.t2n_1) | 0;
    result = imul(result, 31) + hashCode(this.u2n_1) | 0;
    return result;
  };
  protoOf(CSSClamp).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSClamp))
      return false;
    var tmp0_other_with_cast = other instanceof CSSClamp ? other : THROW_CCE();
    if (!equals(this.s2n_1, tmp0_other_with_cast.s2n_1))
      return false;
    if (!equals(this.t2n_1, tmp0_other_with_cast.t2n_1))
      return false;
    if (!equals(this.u2n_1, tmp0_other_with_cast.u2n_1))
      return false;
    return true;
  };
  function clamp(min, value, max) {
    return new CSSClamp(min, value, max);
  }
  function _no_name_provided__qut3iv() {
  }
  protoOf(_no_name_provided__qut3iv).fn = function () {
    // Inline function 'com.varabyte.kobweb.compose.dom.Simple.invoke.<anonymous>' call
  };
  function Simple(handle) {
    RefCallback.call(this);
    this.v2n_1 = handle;
  }
  protoOf(Simple).w2n = function (scope, element) {
    this.v2n_1(element);
    // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
    return new _no_name_provided__qut3iv();
  };
  function RefCallback() {
  }
  function KeysToEffect(keys, refCallback) {
    this.x2n_1 = keys;
    this.y2n_1 = refCallback;
  }
  protoOf(KeysToEffect).toString = function () {
    return 'KeysToEffect(keys=' + this.x2n_1 + ', refCallback=' + this.y2n_1 + ')';
  };
  protoOf(KeysToEffect).hashCode = function () {
    var result = hashCode(this.x2n_1);
    result = imul(result, 31) + hashCode(this.y2n_1) | 0;
    return result;
  };
  protoOf(KeysToEffect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KeysToEffect))
      return false;
    var tmp0_other_with_cast = other instanceof KeysToEffect ? other : THROW_CCE();
    if (!equals(this.x2n_1, tmp0_other_with_cast.x2n_1))
      return false;
    if (!equals(this.y2n_1, tmp0_other_with_cast.y2n_1))
      return false;
    return true;
  };
  function Builder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.z2n_1 = ArrayList_init_$Create$();
  }
  protoOf(Builder).a2o = function (keys, handle) {
    this.z2n_1.y(new KeysToEffect(toList(keys), new Simple(handle)));
  };
  protoOf(Builder).b2o = function (other) {
    if (!(other == null)) {
      this.z2n_1.e1(other.c2o_1);
    }
  };
  protoOf(Builder).b3 = function () {
    return new ElementRefScope(this.z2n_1);
  };
  function ElementRefScope(keyedCallbacks) {
    this.c2o_1 = keyedCallbacks;
  }
  protoOf(ElementRefScope).toString = function () {
    return 'ElementRefScope(keyedCallbacks=' + this.c2o_1 + ')';
  };
  protoOf(ElementRefScope).hashCode = function () {
    return hashCode(this.c2o_1);
  };
  protoOf(ElementRefScope).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementRefScope))
      return false;
    var tmp0_other_with_cast = other instanceof ElementRefScope ? other : THROW_CCE();
    if (!equals(this.c2o_1, tmp0_other_with_cast.c2o_1))
      return false;
    return true;
  };
  function registerRefScope(_this__u8e3s4, scope, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.j1e(1057476357);
    if (isTraceInProgress()) {
      traceEventStart(1057476357, $changed, -1, 'com.varabyte.kobweb.compose.dom.registerRefScope (ElementRefScope.kt:91)');
    }
    $composer_0.j1e(49626842);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.n1f();
    var tmp;
    if (false ? true : it === Companion_getInstance().b19_1) {
      // Inline function 'com.varabyte.kobweb.compose.dom.registerRefScope.<anonymous>' call
      var value = registerRefScope$lambda;
      $composer_0.t1f(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.k1e();
    registerRefScope_0(_this__u8e3s4, scope, tmp0_group, $composer_0, 456);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.k1e();
  }
  function registerRefScope_0(_this__u8e3s4, scope, transform, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.j1e(1100234072);
    if (isTraceInProgress()) {
      traceEventStart(1100234072, $changed, -1, 'com.varabyte.kobweb.compose.dom.registerRefScope (ElementRefScope.kt:107)');
    }
    if (scope == null) {
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_0.k1e();
      return Unit_instance;
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = scope.c2o_1.n();
    while (tmp0_iterator.b1()) {
      var element = tmp0_iterator.d1();
      // Inline function 'com.varabyte.kobweb.compose.dom.registerRefScope.<anonymous>' call
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_0 = element.x2n_1;
      var tmp = copyToArray(this_0).slice();
      DisposableEffect(tmp, registerRefScope$lambda_0(element, transform, _this__u8e3s4), $composer_0, 8);
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.k1e();
  }
  function refScope(init) {
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.dom.refScope.<anonymous>' call
    // Inline function 'kotlin.apply' call
    var this_0 = new Builder();
    // Inline function 'kotlin.contracts.contract' call
    init(this_0);
    return this_0.b3();
  }
  function registerRefScope$lambda(it) {
    return it;
  }
  function registerRefScope$lambda_0($keyedCallback, $transform, $this_registerRefScope) {
    return function ($this$DisposableEffect) {
      return $keyedCallback.y2n_1.w2n($this$DisposableEffect, $transform($this_registerRefScope.w2g($this$DisposableEffect)));
    };
  }
  function GenericTag(name, attrsStr, content, $composer, $changed, $default) {
    var attrsStr_0 = {_v: attrsStr};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.b1g(149040042);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.c16(name) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.c16(attrsStr_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.e1f(content_0._v) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.e1e()) {
      if (!(($default & 2) === 0)) {
        attrsStr_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(149040042, $dirty, -1, 'com.varabyte.kobweb.compose.dom.GenericTag (GenericTag.kt:62)');
      }
      var tmp0_safe_receiver = attrsStr_0._v;
      $composer_0.j1e(1310333791);
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.compose.dom.GenericTag.<anonymous>' call
        $composer_0.j1e(746193806);
        // Inline function 'androidx.compose.runtime.cache' call
        var this_0 = $composer_0;
        var invalid = ($dirty & 112) === 32;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = this_0.n1f();
        var tmp_0;
        if (invalid ? true : it === Companion_getInstance().b19_1) {
          // Inline function 'com.varabyte.kobweb.compose.dom.GenericTag.<anonymous>.<anonymous>' call
          var value = GenericTag$lambda(attrsStr_0);
          this_0.t1f(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.k1e();
        tmp = tmp0_group;
      }
      var tmp1_group = tmp;
      $composer_0.k1e();
      var attrs = tmp1_group;
      GenericTag_0(name, null, attrs, content_0._v, $composer_0, 48 | 14 & $dirty | 7168 & $dirty << 3, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v18();
    }
    var tmp2_safe_receiver = $composer_0.c1g();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.y1k(GenericTag$lambda_0(name, attrsStr_0, content_0, $changed, $default));
    }
  }
  function GenericTag_0(name, namespace, attrs, content, $composer, $changed, $default) {
    var namespace_0 = {_v: namespace};
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.b1g(-5556169);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.c16(name) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.c16(namespace_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.e1f(attrs_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.e1f(content_0._v) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.e1e()) {
      if (!(($default & 2) === 0)) {
        namespace_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-5556169, $dirty, -1, 'com.varabyte.kobweb.compose.dom.GenericTag (GenericTag.kt:125)');
      }
      var tmp0_safe_receiver = namespace_0._v;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.compose.dom.GenericTag.<anonymous>' call
        tmp = Companion_getInstance_20().e2o(tmp0_safe_receiver, name);
      }
      var tmp1_elvis_lhs = tmp;
      var tmp_0 = tmp1_elvis_lhs == null ? Companion_getInstance_21().g2o(name) : tmp1_elvis_lhs;
      TagElement(isInterface(tmp_0, ElementBuilder) ? tmp_0 : THROW_CCE(), attrs_0._v, content_0._v, $composer_0, 8 | 112 & $dirty >> 3 | 896 & $dirty >> 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v18();
    }
    var tmp0_safe_receiver_0 = $composer_0.c1g();
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      tmp0_safe_receiver_0.y1k(GenericTag$lambda_1(name, namespace_0, attrs_0, content_0, $changed, $default));
    }
  }
  function Companion_19() {
    Companion_instance_20 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.d2o_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(Companion_19).e2o = function (namespace, qualifiedName) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.d2o_1;
    var key = to(namespace, qualifiedName);
    var value = this_0.u2(key);
    var tmp;
    if (value == null) {
      // Inline function 'com.varabyte.kobweb.compose.dom.Companion.create.<anonymous>' call
      var answer = new GenericNamespacedElementBuilder(namespace, qualifiedName);
      this_0.l2(key, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    return tmp;
  };
  var Companion_instance_20;
  function Companion_getInstance_20() {
    if (Companion_instance_20 == null)
      new Companion_19();
    return Companion_instance_20;
  }
  function _get_element__z0t21h($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.j2o_1;
    element$factory();
    return this_0.o2();
  }
  function GenericNamespacedElementBuilder$element$delegate$lambda(this$0) {
    return function () {
      return document.createElementNS(this$0.h2o_1, this$0.i2o_1);
    };
  }
  function GenericNamespacedElementBuilder(namespace, qualifiedName) {
    Companion_getInstance_20();
    this.h2o_1 = namespace;
    this.i2o_1 = qualifiedName;
    var tmp = this;
    tmp.j2o_1 = lazy(GenericNamespacedElementBuilder$element$delegate$lambda(this));
  }
  protoOf(GenericNamespacedElementBuilder).q1t = function () {
    var tmp = _get_element__z0t21h(this).cloneNode();
    return tmp instanceof Element ? tmp : THROW_CCE();
  };
  function Companion_20() {
    Companion_instance_21 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.f2o_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(Companion_20).g2o = function (name) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.f2o_1;
    var value = this_0.u2(name);
    var tmp;
    if (value == null) {
      // Inline function 'com.varabyte.kobweb.compose.dom.Companion.create.<anonymous>' call
      var answer = new GenericElementBuilder(name);
      this_0.l2(name, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    return tmp;
  };
  var Companion_instance_21;
  function Companion_getInstance_21() {
    if (Companion_instance_21 == null)
      new Companion_20();
    return Companion_instance_21;
  }
  function _get_element__z0t21h_0($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.l2o_1;
    element$factory_0();
    return this_0.o2();
  }
  function GenericElementBuilder$element$delegate$lambda(this$0) {
    return function () {
      return document.createElement(this$0.k2o_1);
    };
  }
  function GenericElementBuilder(name) {
    Companion_getInstance_21();
    this.k2o_1 = name;
    var tmp = this;
    tmp.l2o_1 = lazy(GenericElementBuilder$element$delegate$lambda(this));
  }
  protoOf(GenericElementBuilder).q1t = function () {
    var tmp = _get_element__z0t21h_0(this).cloneNode();
    return tmp instanceof Element ? tmp : THROW_CCE();
  };
  function GenericTag$_anonymous_$_anonymous_$_anonymous_$parseAttrAssignment_r3pqj($this_null, attrAssignment) {
    var parts = split(attrAssignment, charArrayOf([_Char___init__impl__6a9atx(61)]), VOID, 2);
    var attr = parts.m(0);
    // Inline function 'kotlin.collections.getOrElse' call
    var tmp;
    if (1 >= 0 ? 1 <= get_lastIndex(parts) : false) {
      tmp = parts.m(1);
    } else {
      // Inline function 'com.varabyte.kobweb.compose.dom.GenericTag.<anonymous>$<anonymous>$<anonymous>$parseAttrAssignment.<anonymous>' call
      tmp = '';
    }
    var value = tmp;
    $this_null.b2c(attr, removeSurrounding(value, '"'));
  }
  function GenericTag$lambda($attrsStr) {
    return function ($this$null) {
      var sb = StringBuilder_init_$Create$();
      var insideQuotes = false;
      var indexedObject = $attrsStr._v;
      var inductionVariable = 0;
      while (inductionVariable < charSequenceLength(indexedObject)) {
        var c = charSequenceGet(indexedObject, inductionVariable);
        inductionVariable = inductionVariable + 1 | 0;
        if (c === _Char___init__impl__6a9atx(34)) {
          insideQuotes = !insideQuotes;
          sb.x5(c);
        } else if (c === _Char___init__impl__6a9atx(32)) {
          if (insideQuotes) {
            sb.x5(c);
          } else {
            GenericTag$_anonymous_$_anonymous_$_anonymous_$parseAttrAssignment_r3pqj($this$null, sb.toString());
            sb.v8();
          }
        } else {
          sb.x5(c);
        }
      }
      var tmp;
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(sb) > 0) {
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!!insideQuotes) {
          // Inline function 'com.varabyte.kobweb.compose.dom.GenericTag.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var message = 'Got invalid attributes with unclosed string: ' + $attrsStr._v;
          throw IllegalStateException_init_$Create$(toString(message));
        }
        GenericTag$_anonymous_$_anonymous_$_anonymous_$parseAttrAssignment_r3pqj($this$null, sb.toString());
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function GenericTag$lambda_0($name, $attrsStr, $content, $$changed, $$default) {
    return function ($composer, $force) {
      GenericTag($name, $attrsStr._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function GenericTag$lambda_1($name, $namespace, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      GenericTag_0($name, $namespace._v, $attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function element$factory() {
    return getPropertyCallableRef('element', 1, KProperty1, function (receiver) {
      return _get_element__z0t21h(receiver);
    }, null);
  }
  function element$factory_0() {
    return getPropertyCallableRef('element', 1, KProperty1, function (receiver) {
      return _get_element__z0t21h_0(receiver);
    }, null);
  }
  function Circle(_this__u8e3s4, attrs, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.b1g(-2079059220);
    var $dirty = $changed;
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.e1f(attrs) ? 32 : 16);
    if (!(($dirty & 81) === 16) ? true : !$composer_0.e1e()) {
      if (isTraceInProgress()) {
        traceEventStart(-2079059220, $dirty, -1, 'com.varabyte.kobweb.compose.dom.svg.Circle (Svg.kt:804)');
      }
      var tmp = Companion_instance_22.m2o(attrs);
      GenericTag_0('circle', 'http://www.w3.org/2000/svg', tmp, null, $composer_0, 54, 8);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v18();
    }
    var tmp0_safe_receiver = $composer_0.c1g();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y1k(Circle$lambda(_this__u8e3s4, attrs, $changed));
    }
  }
  function SVGCircleAttrsScope$Companion$invoke$lambda($attrs) {
    return function ($this$null) {
      $attrs(new SVGCircleAttrsScope($this$null));
      return Unit_instance;
    };
  }
  function Companion_21() {
  }
  protoOf(Companion_21).m2o = function (attrs) {
    return SVGCircleAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_22;
  function Companion_getInstance_22() {
    return Companion_instance_22;
  }
  function SVGCircleAttrsScope(attrs) {
    SVGGraphicalElementAttrsScope.call(this, attrs);
  }
  protoOf(SVGCircleAttrsScope).o2o = function (value) {
    this.b2c('r', toString(value));
  };
  function Line(_this__u8e3s4, attrs, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.b1g(-846499000);
    var $dirty = $changed;
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.e1f(attrs) ? 32 : 16);
    if (!(($dirty & 81) === 16) ? true : !$composer_0.e1e()) {
      if (isTraceInProgress()) {
        traceEventStart(-846499000, $dirty, -1, 'com.varabyte.kobweb.compose.dom.svg.Line (Svg.kt:979)');
      }
      var tmp = Companion_instance_23.s2o(attrs);
      GenericTag_0('line', 'http://www.w3.org/2000/svg', tmp, null, $composer_0, 54, 8);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v18();
    }
    var tmp0_safe_receiver = $composer_0.c1g();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y1k(Line$lambda(_this__u8e3s4, attrs, $changed));
    }
  }
  function SVGLineAttrsScope$Companion$invoke$lambda($attrs) {
    return function ($this$null) {
      $attrs(new SVGLineAttrsScope($this$null));
      return Unit_instance;
    };
  }
  function Companion_22() {
  }
  protoOf(Companion_22).s2o = function (attrs) {
    return SVGLineAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_23;
  function Companion_getInstance_23() {
    return Companion_instance_23;
  }
  function SVGLineAttrsScope(attrs) {
    SVGGraphicalElementAttrsScope.call(this, attrs);
  }
  protoOf(SVGLineAttrsScope).u2o = function (value) {
    this.b2c('x1', toString(value));
  };
  protoOf(SVGLineAttrsScope).v2o = function (value) {
    this.b2c('x2', toString(value));
  };
  protoOf(SVGLineAttrsScope).w2o = function (value) {
    this.b2c('y1', toString(value));
  };
  protoOf(SVGLineAttrsScope).x2o = function (value) {
    this.b2c('y2', toString(value));
  };
  function SVGSvgAttrsScope$Companion$invoke$lambda($attrs) {
    return function ($this$null) {
      if (!($attrs == null))
        $attrs(new SVGSvgAttrsScope($this$null));
      return Unit_instance;
    };
  }
  function Companion_23() {
  }
  protoOf(Companion_23).y2o = function (attrs) {
    return SVGSvgAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_24;
  function Companion_getInstance_24() {
    return Companion_instance_24;
  }
  function SVGSvgAttrsScope(attrs) {
    SVGContainerElementAttrsScope.call(this, attrs);
  }
  function SVGGraphicalElementAttrsScope(attrs) {
    SVGElementAttrsScope.call(this, attrs);
  }
  function CenterCoordinateAttrs() {
  }
  function SVGContainerElementAttrsScope(attrs) {
    SVGGraphicalElementAttrsScope.call(this, attrs);
  }
  function CoordinateAttrs() {
  }
  function LengthAttrs() {
  }
  function ViewBoxAttrs() {
  }
  function SVGElementAttrsScope(attrs) {
    this.p2o_1 = attrs;
  }
  protoOf(SVGElementAttrsScope).b2c = function (attr, value) {
    return this.p2o_1.b2c(attr, value);
  };
  protoOf(SVGElementAttrsScope).e2c = function (classes) {
    this.p2o_1.e2c(classes);
  };
  protoOf(SVGElementAttrsScope).d2c = function (classes) {
    this.p2o_1.d2c(classes);
  };
  protoOf(SVGElementAttrsScope).f2c = function (value) {
    return this.p2o_1.f2c(value);
  };
  protoOf(SVGElementAttrsScope).j2c = function (listener) {
    this.p2o_1.j2c(listener);
  };
  protoOf(SVGElementAttrsScope).i2c = function (listener) {
    this.p2o_1.i2c(listener);
  };
  protoOf(SVGElementAttrsScope).h2c = function (listener) {
    this.p2o_1.h2c(listener);
  };
  protoOf(SVGElementAttrsScope).c2c = function (builder) {
    this.p2o_1.c2c(builder);
  };
  protoOf(SVGElementAttrsScope).g2c = function (value) {
    return this.p2o_1.g2c(value);
  };
  function PresentationAttrs() {
  }
  function Companion_24() {
  }
  protoOf(Companion_24).k2p = function (width, height) {
    return new ViewBox(0, 0, width, height);
  };
  protoOf(Companion_24).l2p = function (width, height, $super) {
    height = height === VOID ? width : height;
    return $super === VOID ? this.k2p(width, height) : $super.k2p.call(this, width, height);
  };
  var Companion_instance_25;
  function Companion_getInstance_25() {
    return Companion_instance_25;
  }
  function ViewBox(x, y, width, height) {
    this.m2p_1 = x;
    this.n2p_1 = y;
    this.o2p_1 = width;
    this.p2p_1 = height;
  }
  var SVGStrokeType_None_instance;
  var SVGStrokeType_CurrentColor_instance;
  var SVGStrokeType_entriesInitialized;
  function SVGStrokeType_initEntries() {
    if (SVGStrokeType_entriesInitialized)
      return Unit_instance;
    SVGStrokeType_entriesInitialized = true;
    SVGStrokeType_None_instance = new SVGStrokeType('None', 0);
    SVGStrokeType_CurrentColor_instance = new SVGStrokeType('CurrentColor', 1);
  }
  function SVGStrokeType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SVGStrokeType).toString = function () {
    return toSvgValue(this);
  };
  var SVGStrokeLineCap_Butt_instance;
  var SVGStrokeLineCap_Round_instance;
  var SVGStrokeLineCap_Square_instance;
  var SVGStrokeLineCap_entriesInitialized;
  function SVGStrokeLineCap_initEntries() {
    if (SVGStrokeLineCap_entriesInitialized)
      return Unit_instance;
    SVGStrokeLineCap_entriesInitialized = true;
    SVGStrokeLineCap_Butt_instance = new SVGStrokeLineCap('Butt', 0);
    SVGStrokeLineCap_Round_instance = new SVGStrokeLineCap('Round', 1);
    SVGStrokeLineCap_Square_instance = new SVGStrokeLineCap('Square', 2);
  }
  function SVGStrokeLineCap(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SVGStrokeLineCap).toString = function () {
    return toSvgValue(this);
  };
  var SVGStrokeLineJoin_Miter_instance;
  var SVGStrokeLineJoin_Round_instance;
  var SVGStrokeLineJoin_Bevel_instance;
  var SVGStrokeLineJoin_entriesInitialized;
  function SVGStrokeLineJoin_initEntries() {
    if (SVGStrokeLineJoin_entriesInitialized)
      return Unit_instance;
    SVGStrokeLineJoin_entriesInitialized = true;
    SVGStrokeLineJoin_Miter_instance = new SVGStrokeLineJoin('Miter', 0);
    SVGStrokeLineJoin_Round_instance = new SVGStrokeLineJoin('Round', 1);
    SVGStrokeLineJoin_Bevel_instance = new SVGStrokeLineJoin('Bevel', 2);
  }
  function SVGStrokeLineJoin(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SVGStrokeLineJoin).toString = function () {
    return toSvgValue(this);
  };
  var SVGFillType_None_instance;
  var SVGFillType_CurrentColor_instance;
  var SVGFillType_entriesInitialized;
  function SVGFillType_initEntries() {
    if (SVGFillType_entriesInitialized)
      return Unit_instance;
    SVGFillType_entriesInitialized = true;
    SVGFillType_None_instance = new SVGFillType('None', 0);
    SVGFillType_CurrentColor_instance = new SVGFillType('CurrentColor', 1);
  }
  function SVGFillType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SVGFillType).toString = function () {
    return toSvgValue(this);
  };
  function toSvgValue(_this__u8e3s4) {
    // Inline function 'kotlin.text.replaceFirstChar' call
    var this_0 = _this__u8e3s4.sa_1;
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_0) > 0) {
      // Inline function 'com.varabyte.kobweb.compose.dom.svg.toSvgValue.<anonymous>' call
      // Inline function 'kotlin.text.lowercase' call
      var this_1 = charSequenceGet(this_0, 0);
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$4 = toString_0(this_1).toLowerCase();
      var tmp_0 = toString(tmp$ret$4);
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = tmp_0 + this_0.substring(1);
    } else {
      tmp = this_0;
    }
    return tmp;
  }
  function Svg(attrs, content, $composer, $changed, $default) {
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.b1g(302969729);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.e1f(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.e1f(content) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.e1e()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(302969729, $dirty, -1, 'com.varabyte.kobweb.compose.dom.svg.Svg (Svg.kt:433)');
      }
      GenericTag_0('svg', 'http://www.w3.org/2000/svg', Companion_instance_24.y2o(attrs_0._v), content, $composer_0, 54 | 7168 & $dirty << 6, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v18();
    }
    var tmp0_safe_receiver = $composer_0.c1g();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y1k(Svg$lambda(attrs_0, content, $changed, $default));
    }
  }
  function Path(_this__u8e3s4, attrs, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.b1g(275418487);
    var $dirty = $changed;
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.e1f(attrs) ? 32 : 16);
    if (!(($dirty & 81) === 16) ? true : !$composer_0.e1e()) {
      if (isTraceInProgress()) {
        traceEventStart(275418487, $dirty, -1, 'com.varabyte.kobweb.compose.dom.svg.Path (Svg.kt:1098)');
      }
      var tmp = Companion_instance_26.q2p(attrs);
      GenericTag_0('path', 'http://www.w3.org/2000/svg', tmp, null, $composer_0, 54, 8);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v18();
    }
    var tmp0_safe_receiver = $composer_0.c1g();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y1k(Path$lambda(_this__u8e3s4, attrs, $changed));
    }
  }
  function SVGPathAttrsScope$Companion$invoke$lambda($attrs) {
    return function ($this$null) {
      $attrs(new SVGPathAttrsScope($this$null));
      return Unit_instance;
    };
  }
  function Companion_25() {
  }
  protoOf(Companion_25).q2p = function (attrs) {
    return SVGPathAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_26;
  function Companion_getInstance_26() {
    return Companion_instance_26;
  }
  function SVGPathAttrsScope(attrs) {
    SVGGraphicalElementAttrsScope.call(this, attrs);
  }
  protoOf(SVGPathAttrsScope).s2p = function (pathDataScope) {
    // Inline function 'kotlin.apply' call
    var this_0 = new SVGPathDataScope();
    // Inline function 'kotlin.contracts.contract' call
    pathDataScope(this_0);
    this.b2c('d', joinToString(this_0.t2p_1, ' '));
  };
  function SVGPathDataScope() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.t2p_1 = ArrayList_init_$Create$();
  }
  protoOf(SVGPathDataScope).u2p = function (x, y) {
    this.t2p_1.y('M ' + toString(x) + ' ' + toString(y));
  };
  protoOf(SVGPathDataScope).v2p = function (x, y, isRelative) {
    var command = isRelative ? 'l' : 'L';
    this.t2p_1.y(command + ' ' + toString(x) + ' ' + toString(y));
  };
  protoOf(SVGPathDataScope).w2p = function (x, y, isRelative, $super) {
    isRelative = isRelative === VOID ? false : isRelative;
    var tmp;
    if ($super === VOID) {
      this.v2p(x, y, isRelative);
      tmp = Unit_instance;
    } else {
      tmp = $super.v2p.call(this, x, y, isRelative);
    }
    return tmp;
  };
  protoOf(SVGPathDataScope).x2p = function (x, isRelative) {
    var command = isRelative ? 'v' : 'V';
    this.t2p_1.y(command + ' ' + toString(x));
  };
  protoOf(SVGPathDataScope).y2p = function (x, isRelative, $super) {
    isRelative = isRelative === VOID ? false : isRelative;
    var tmp;
    if ($super === VOID) {
      this.x2p(x, isRelative);
      tmp = Unit_instance;
    } else {
      tmp = $super.x2p.call(this, x, isRelative);
    }
    return tmp;
  };
  protoOf(SVGPathDataScope).z2p = function (x, isRelative) {
    var command = isRelative ? 'h' : 'H';
    this.t2p_1.y(command + ' ' + toString(x));
  };
  protoOf(SVGPathDataScope).a2q = function (x, isRelative, $super) {
    isRelative = isRelative === VOID ? false : isRelative;
    var tmp;
    if ($super === VOID) {
      this.z2p(x, isRelative);
      tmp = Unit_instance;
    } else {
      tmp = $super.z2p.call(this, x, isRelative);
    }
    return tmp;
  };
  protoOf(SVGPathDataScope).b2q = function (rx, ry, rotate, largeArcFlag, sweepFlag, x, y, isRelative) {
    var command = isRelative ? 'a' : 'A';
    this.t2p_1.y(command + ' ' + toString(rx) + ' ' + toString(ry) + ' ' + toString(rotate) + ' ' + toString(largeArcFlag) + ' ' + toString(sweepFlag) + ' ' + toString(x) + ' ' + toString(y));
  };
  protoOf(SVGPathDataScope).c2q = function (rx, ry, rotate, largeArcFlag, sweepFlag, x, y, isRelative, $super) {
    isRelative = isRelative === VOID ? false : isRelative;
    var tmp;
    if ($super === VOID) {
      this.b2q(rx, ry, rotate, largeArcFlag, sweepFlag, x, y, isRelative);
      tmp = Unit_instance;
    } else {
      tmp = $super.b2q.call(this, rx, ry, rotate, largeArcFlag, sweepFlag, x, y, isRelative);
    }
    return tmp;
  };
  protoOf(SVGPathDataScope).d2q = function () {
    this.t2p_1.y('Z');
  };
  function Polyline(_this__u8e3s4, attrs, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.b1g(741814780);
    var $dirty = $changed;
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.e1f(attrs) ? 32 : 16);
    if (!(($dirty & 81) === 16) ? true : !$composer_0.e1e()) {
      if (isTraceInProgress()) {
        traceEventStart(741814780, $dirty, -1, 'com.varabyte.kobweb.compose.dom.svg.Polyline (Svg.kt:1161)');
      }
      var tmp = Companion_instance_27.e2q(attrs);
      GenericTag_0('polyline', 'http://www.w3.org/2000/svg', tmp, null, $composer_0, 54, 8);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v18();
    }
    var tmp0_safe_receiver = $composer_0.c1g();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y1k(Polyline$lambda(_this__u8e3s4, attrs, $changed));
    }
  }
  function SVGPolylineAttrsScope$Companion$invoke$lambda($attrs) {
    return function ($this$null) {
      $attrs(new SVGPolylineAttrsScope($this$null));
      return Unit_instance;
    };
  }
  function Companion_26() {
  }
  protoOf(Companion_26).e2q = function (attrs) {
    return SVGPolylineAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_27;
  function Companion_getInstance_27() {
    return Companion_instance_27;
  }
  function SVGPolylineAttrsScope(attrs) {
    SVGGraphicalElementAttrsScope.call(this, attrs);
  }
  function Rect(_this__u8e3s4, attrs, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.b1g(151044952);
    var $dirty = $changed;
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.e1f(attrs) ? 32 : 16);
    if (!(($dirty & 81) === 16) ? true : !$composer_0.e1e()) {
      if (isTraceInProgress()) {
        traceEventStart(151044952, $dirty, -1, 'com.varabyte.kobweb.compose.dom.svg.Rect (Svg.kt:1223)');
      }
      var tmp = Companion_instance_28.g2q(attrs);
      GenericTag_0('rect', 'http://www.w3.org/2000/svg', tmp, null, $composer_0, 54, 8);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v18();
    }
    var tmp0_safe_receiver = $composer_0.c1g();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y1k(Rect$lambda(_this__u8e3s4, attrs, $changed));
    }
  }
  function SVGRectAttrsScope$Companion$invoke$lambda($attrs) {
    return function ($this$null) {
      $attrs(new SVGRectAttrsScope($this$null));
      return Unit_instance;
    };
  }
  function Companion_27() {
  }
  protoOf(Companion_27).g2q = function (attrs) {
    return SVGRectAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_28;
  function Companion_getInstance_28() {
    return Companion_instance_28;
  }
  function SVGRectAttrsScope(attrs) {
    SVGGraphicalElementAttrsScope.call(this, attrs);
  }
  protoOf(SVGRectAttrsScope).i2q = function (value) {
    this.b2c('rx', toString(value));
  };
  function Group(_this__u8e3s4, attrs, content, $composer, $changed, $default) {
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.b1g(-214649536);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.e1f(attrs_0._v) ? 32 : 16);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.e1f(content) ? 256 : 128);
    if (!(($dirty & 721) === 144) ? true : !$composer_0.e1e()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-214649536, $dirty, -1, 'com.varabyte.kobweb.compose.dom.svg.Group (Svg.kt:874)');
      }
      var tmp0_safe_receiver = attrs_0._v;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.compose.dom.svg.Group.<anonymous>' call
        tmp = Companion_instance_29.j2q(tmp0_safe_receiver);
      }
      GenericTag_0('g', 'http://www.w3.org/2000/svg', tmp, content, $composer_0, 54 | 7168 & $dirty << 3, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v18();
    }
    var tmp0_safe_receiver_0 = $composer_0.c1g();
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      tmp0_safe_receiver_0.y1k(Group$lambda(_this__u8e3s4, attrs_0, content, $changed, $default));
    }
  }
  function SVGGroupAttrsScope$Companion$invoke$lambda($attrs) {
    return function ($this$null) {
      $attrs(new SVGGroupAttrsScope($this$null));
      return Unit_instance;
    };
  }
  function Companion_28() {
  }
  protoOf(Companion_28).j2q = function (attrs) {
    return SVGGroupAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_29;
  function Companion_getInstance_29() {
    return Companion_instance_29;
  }
  function SVGGroupAttrsScope(attrs) {
    SVGContainerElementAttrsScope.call(this, attrs);
  }
  function PointsAttrs$points$lambda(it) {
    return toString(it.x6_1) + ',' + toString(it.y6_1);
  }
  function PointsAttrs() {
  }
  function Circle$lambda($this_Circle, $attrs, $$changed) {
    return function ($composer, $force) {
      Circle($this_Circle, $attrs, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Line$lambda($this_Line, $attrs, $$changed) {
    return function ($composer, $force) {
      Line($this_Line, $attrs, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Svg$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Svg($attrs._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Path$lambda($this_Path, $attrs, $$changed) {
    return function ($composer, $force) {
      Path($this_Path, $attrs, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Polyline$lambda($this_Polyline, $attrs, $$changed) {
    return function ($composer, $force) {
      Polyline($this_Polyline, $attrs, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Rect$lambda($this_Rect, $attrs, $$changed) {
    return function ($composer, $force) {
      Rect($this_Rect, $attrs, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Group$lambda($this_Group, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Group($this_Group, $attrs._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function SVGStrokeType_None_getInstance() {
    SVGStrokeType_initEntries();
    return SVGStrokeType_None_instance;
  }
  function SVGStrokeType_CurrentColor_getInstance() {
    SVGStrokeType_initEntries();
    return SVGStrokeType_CurrentColor_instance;
  }
  function SVGStrokeLineCap_Round_getInstance() {
    SVGStrokeLineCap_initEntries();
    return SVGStrokeLineCap_Round_instance;
  }
  function SVGStrokeLineJoin_Round_getInstance() {
    SVGStrokeLineJoin_initEntries();
    return SVGStrokeLineJoin_Round_instance;
  }
  function SVGFillType_None_getInstance() {
    SVGFillType_initEntries();
    return SVGFillType_None_instance;
  }
  function SVGFillType_CurrentColor_getInstance() {
    SVGFillType_initEntries();
    return SVGFillType_CurrentColor_instance;
  }
  //region block: post-declaration
  protoOf(ComparableAttrsScope).e2c = classes;
  protoOf(ComparableAttrsScope).f2c = id;
  protoOf(ComparableAttrsScope).g2c = tabIndex;
  protoOf(ComparableAttrsScope).i2c = onClick;
  protoOf(ComparableAttrsScope).j2c = onAnimationEnd;
  protoOf(DummyAttrsScope).e2c = classes;
  protoOf(DummyAttrsScope).f2c = id;
  protoOf(DummyAttrsScope).g2c = tabIndex;
  protoOf(DummyAttrsScope).i2c = onClick;
  protoOf(DummyAttrsScope).j2c = onAnimationEnd;
  protoOf(ComparableStyleScope).q2e = property;
  protoOf(ComparableStyleScope).r2e = property_0;
  protoOf(ComparableStyleScope).w2e = variable;
  protoOf(CalcScopeInstance).r2n = unaryMinus;
  protoOf(SVGGraphicalElementAttrsScope).z2o = stroke;
  protoOf(SVGGraphicalElementAttrsScope).e2p = strokeLineCap;
  protoOf(SVGGraphicalElementAttrsScope).f2p = strokeLineJoin;
  protoOf(SVGGraphicalElementAttrsScope).a2p = strokeWidth;
  protoOf(SVGGraphicalElementAttrsScope).b2p = fill;
  protoOf(SVGCircleAttrsScope).q2o = cx;
  protoOf(SVGCircleAttrsScope).r2o = cy;
  protoOf(SVGSvgAttrsScope).c2p = width_1;
  protoOf(SVGSvgAttrsScope).d2p = viewBox;
  protoOf(SVGPolylineAttrsScope).f2q = points;
  protoOf(SVGRectAttrsScope).g2p = x;
  protoOf(SVGRectAttrsScope).h2p = y;
  protoOf(SVGRectAttrsScope).i2p = height;
  protoOf(SVGRectAttrsScope).j2p = width_0;
  //endregion
  //region block: init
  Companion_instance_0 = new Companion();
  Companion_instance_1 = new Companion_0();
  Companion_instance_2 = new Companion_1();
  Companion_instance_3 = new Companion_2();
  Companion_instance_4 = new Companion_3();
  Companion_instance_5 = new Companion_4();
  Companion_instance_6 = new Companion_5();
  Companion_instance_7 = new Companion_6();
  Companion_instance_8 = new Companion_7();
  Companion_instance_9 = new Companion_8();
  Companion_instance_10 = new Companion_9();
  Companion_instance_11 = new Companion_10();
  Companion_instance_12 = new Companion_11();
  Companion_instance_13 = new Companion_12();
  Companion_instance_14 = new Companion_13();
  Companion_instance_15 = new Companion_14();
  Companion_instance_16 = new Companion_15();
  Companion_instance_17 = new Companion_16();
  Companion_instance_18 = new Companion_17();
  Companion_instance_19 = new Companion_18();
  CalcScopeInstance_instance = new CalcScopeInstance();
  Companion_instance_22 = new Companion_21();
  Companion_instance_23 = new Companion_22();
  Companion_instance_24 = new Companion_23();
  Companion_instance_25 = new Companion_24();
  Companion_instance_26 = new Companion_25();
  Companion_instance_27 = new Companion_26();
  Companion_instance_28 = new Companion_27();
  Companion_instance_29 = new Companion_28();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = calc;
  _.$_$.b = clamp;
  _.$_$.c = CSSAnimation;
  _.$_$.d = ComparableStyleScope;
  _.$_$.e = NumberValue;
  _.$_$.f = StyleVariable_3;
  _.$_$.g = StyleVariable_2;
  _.$_$.h = StyleVariable_0;
  _.$_$.i = StyleVariable_1;
  _.$_$.j = animation;
  _.$_$.k = appearance;
  _.$_$.l = ariaDisabled;
  _.$_$.m = ariaHidden;
  _.$_$.n = borderBottom;
  _.$_$.o = borderColor;
  _.$_$.p = borderLeft;
  _.$_$.q = borderStyle;
  _.$_$.r = borderTop;
  _.$_$.s = borderWidth;
  _.$_$.t = boxShadow;
  _.$_$.u = boxSizing_0;
  _.$_$.v = cursor;
  _.$_$.w = fontWeight;
  _.$_$.x = gridTemplateColumns_0;
  _.$_$.y = gridTemplateRows_0;
  _.$_$.z = grid;
  _.$_$.a1 = isNotEmpty;
  _.$_$.b1 = justifyItems;
  _.$_$.c1 = justifySelf;
  _.$_$.d1 = listStyle;
  _.$_$.e1 = marginBlock;
  _.$_$.f1 = marginInline;
  _.$_$.g1 = objectFit;
  _.$_$.h1 = outline;
  _.$_$.i1 = overflowWrap;
  _.$_$.j1 = overflowX;
  _.$_$.k1 = overflowY;
  _.$_$.l1 = overflow;
  _.$_$.m1 = paddingInline;
  _.$_$.n1 = scrollBehavior;
  _.$_$.o1 = setVariable;
  _.$_$.p1 = setVariable_0;
  _.$_$.q1 = textAlign;
  _.$_$.r1 = textDecorationLine;
  _.$_$.s1 = transition;
  _.$_$.t1 = translateX;
  _.$_$.u1 = userSelect;
  _.$_$.v1 = verticalAlign;
  _.$_$.w1 = whiteSpace;
  _.$_$.x1 = Circle;
  _.$_$.y1 = Group;
  _.$_$.z1 = Line;
  _.$_$.a2 = Path;
  _.$_$.b2 = Polyline;
  _.$_$.c2 = Rect;
  _.$_$.d2 = Svg;
  _.$_$.e2 = GenericTag;
  _.$_$.f2 = refScope;
  _.$_$.g2 = registerRefScope_0;
  _.$_$.h2 = registerRefScope;
  _.$_$.i2 = SVGFillType_CurrentColor_getInstance;
  _.$_$.j2 = SVGFillType_None_getInstance;
  _.$_$.k2 = SVGStrokeLineCap_Round_getInstance;
  _.$_$.l2 = SVGStrokeLineJoin_Round_getInstance;
  _.$_$.m2 = SVGStrokeType_CurrentColor_getInstance;
  _.$_$.n2 = SVGStrokeType_None_getInstance;
  _.$_$.o2 = ComparableAttrsScope_init_$Create$;
  _.$_$.p2 = CSSTransition_init_$Create$;
  _.$_$.q2 = Companion_instance_4;
  _.$_$.r2 = Companion_instance_2;
  _.$_$.s2 = Companion_instance_18;
  _.$_$.t2 = Companion_instance_3;
  _.$_$.u2 = Companion_instance_5;
  _.$_$.v2 = Companion_instance_0;
  _.$_$.w2 = Companion_instance_1;
  _.$_$.x2 = Companion_instance_9;
  _.$_$.y2 = Companion_instance_10;
  _.$_$.z2 = Companion_instance_11;
  _.$_$.a3 = Companion_instance_12;
  _.$_$.b3 = Companion_instance_13;
  _.$_$.c3 = Companion_instance_16;
  _.$_$.d3 = Companion_instance_17;
  _.$_$.e3 = Companion_instance_14;
  _.$_$.f3 = Companion_instance_8;
  _.$_$.g3 = Companion_instance_15;
  _.$_$.h3 = Companion_instance_25;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-compose-html-ext.js.map
