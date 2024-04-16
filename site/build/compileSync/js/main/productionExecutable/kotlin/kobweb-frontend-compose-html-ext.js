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
  var protoOf = kotlin_kotlin.$_$.m6;
  var objectCreate = kotlin_kotlin.$_$.k6;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.p;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.q;
  var Unit_instance = kotlin_kotlin.$_$.g2;
  var equals = kotlin_kotlin.$_$.t5;
  var hashCode = kotlin_kotlin.$_$.z5;
  var classes = kotlin_org_jetbrains_compose_html_html_core.$_$.o;
  var id = kotlin_org_jetbrains_compose_html_html_core.$_$.p;
  var tabIndex = kotlin_org_jetbrains_compose_html_html_core.$_$.q;
  var onClick = kotlin_org_jetbrains_compose_html_html_core.$_$.t;
  var onAnimationEnd = kotlin_org_jetbrains_compose_html_html_core.$_$.s;
  var AttrsScope = kotlin_org_jetbrains_compose_html_html_core.$_$.r;
  var classMeta = kotlin_kotlin.$_$.q5;
  var setMetadataFor = kotlin_kotlin.$_$.n6;
  var VOID = kotlin_kotlin.$_$.d;
  var objectMeta = kotlin_kotlin.$_$.l6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var toString = kotlin_kotlin.$_$.p6;
  var joinToString = kotlin_kotlin.$_$.o3;
  var getStringHashCode = kotlin_kotlin.$_$.y5;
  var THROW_CCE = kotlin_kotlin.$_$.w8;
  var joinToString_0 = kotlin_kotlin.$_$.p3;
  var CSSBorder = kotlin_org_jetbrains_compose_html_html_core.$_$.v;
  var width = kotlin_org_jetbrains_compose_html_html_core.$_$.f3;
  var style = kotlin_org_jetbrains_compose_html_html_core.$_$.a3;
  var color = kotlin_org_jetbrains_compose_html_html_core.$_$.o1;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.y2;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.x;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.t1;
  var boxSizing = kotlin_org_jetbrains_compose_html_html_core.$_$.n1;
  var property = kotlin_org_jetbrains_compose_html_html_core.$_$.a1;
  var property_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.b1;
  var variable = kotlin_org_jetbrains_compose_html_html_core.$_$.c1;
  var StyleScope = kotlin_org_jetbrains_compose_html_html_core.$_$.e1;
  var copyToArray = kotlin_kotlin.$_$.b3;
  var gridTemplateColumns = kotlin_org_jetbrains_compose_html_html_core.$_$.h2;
  var gridTemplateRows = kotlin_org_jetbrains_compose_html_html_core.$_$.i2;
  var lastOrNull = kotlin_kotlin.$_$.s3;
  var get_lastIndex = kotlin_kotlin.$_$.r3;
  var Companion_instance = kotlin_org_jetbrains_compose_html_html_core.$_$.j;
  var display = kotlin_org_jetbrains_compose_html_html_core.$_$.r1;
  var gridAutoColumns = kotlin_org_jetbrains_compose_html_html_core.$_$.b2;
  var gridAutoRows = kotlin_org_jetbrains_compose_html_html_core.$_$.c2;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.h9;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.g1;
  var listOf = kotlin_kotlin.$_$.v3;
  var emptyList = kotlin_kotlin.$_$.d3;
  var addAll = kotlin_kotlin.$_$.u2;
  var listOfNotNull = kotlin_kotlin.$_$.u3;
  var isNumber = kotlin_kotlin.$_$.f6;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var ensureNotNull = kotlin_kotlin.$_$.f9;
  var titleCamelCaseToKebabCase = kotlin_com_varabyte_kobweb_browser_ext.$_$.g;
  var removeSuffix = kotlin_kotlin.$_$.r7;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.x2;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.h;
  var charSequenceLength = kotlin_kotlin.$_$.p5;
  var charSequenceGet = kotlin_kotlin.$_$.o5;
  var isWhitespace = kotlin_kotlin.$_$.n7;
  var interfaceMeta = kotlin_kotlin.$_$.b6;
  var toList = kotlin_kotlin.$_$.n4;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var DisposableEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var ElementBuilder = kotlin_org_jetbrains_compose_html_html_core.$_$.l3;
  var isInterface = kotlin_kotlin.$_$.e6;
  var TagElement = kotlin_org_jetbrains_compose_html_html_core.$_$.y3;
  var to = kotlin_kotlin.$_$.o9;
  var lazy = kotlin_kotlin.$_$.g9;
  var charArrayOf = kotlin_kotlin.$_$.n5;
  var split = kotlin_kotlin.$_$.v7;
  var removeSurrounding = kotlin_kotlin.$_$.s7;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var KProperty1 = kotlin_kotlin.$_$.y6;
  var getPropertyCallableRef = kotlin_kotlin.$_$.x5;
  var toString_0 = kotlin_kotlin.$_$.u1;
  var Enum = kotlin_kotlin.$_$.p8;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ComparableAttrsScope, 'ComparableAttrsScope', classMeta, VOID, [AttrsScope], ComparableAttrsScope_init_$Create$);
  setMetadataFor(DummyAttrsScope, 'DummyAttrsScope', classMeta, VOID, [AttrsScope], DummyAttrsScope);
  setMetadataFor(SyntheticEventListener, 'SyntheticEventListener', classMeta);
  setMetadataFor(TransitionEventListener, 'TransitionEventListener', classMeta, SyntheticEventListener);
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
  setMetadataFor(CSSTextShadow, 'CSSTextShadow', classMeta);
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
  setMetadataFor(Disposable, 'Disposable', classMeta, RefCallback);
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
    return this.u2j('stroke', value.toString());
  }
  function strokeLineCap(value) {
    return this.u2j('stroke-linecap', value.toString());
  }
  function strokeLineJoin(value) {
    return this.u2j('stroke-linejoin', value.toString());
  }
  function strokeWidth(value) {
    return this.u2j('stroke-width', toString(value));
  }
  function fill(value) {
    return this.u2j('fill', value.toString());
  }
  function fill_0(id) {
    return this.u2j('fill', _SvgId___get_urlReference__impl__ehpa8t(id));
  }
  setMetadataFor(PresentationAttrs, 'PresentationAttrs', interfaceMeta, VOID, [AttrsScope]);
  setMetadataFor(SVGGraphicalElementAttrsScope, 'SVGGraphicalElementAttrsScope', classMeta, SVGElementAttrsScope, [SVGElementAttrsScope, PresentationAttrs]);
  setMetadataFor(SVGContainerElementAttrsScope, 'SVGContainerElementAttrsScope', classMeta, SVGGraphicalElementAttrsScope);
  function x(value) {
    this.u2j('x', toString(value));
  }
  function y(value) {
    this.u2j('y', toString(value));
  }
  setMetadataFor(CoordinateAttrs, 'CoordinateAttrs', interfaceMeta, VOID, [AttrsScope]);
  function height(value) {
    this.u2j('height', toString(value));
  }
  function height_0(value) {
    this.u2j('height', toString(value));
  }
  function width_0(value) {
    this.u2j('width', toString(value));
  }
  function width_1(value) {
    this.u2j('width', toString(value));
  }
  setMetadataFor(LengthAttrs, 'LengthAttrs', interfaceMeta, VOID, [AttrsScope]);
  function viewBox(x, y, width, height) {
    this.u2j('viewBox', toString(x) + ' ' + toString(y) + ' ' + toString(width) + ' ' + toString(height));
  }
  setMetadataFor(ViewBoxAttrs, 'ViewBoxAttrs', interfaceMeta, VOID, [AttrsScope]);
  setMetadataFor(SVGSvgAttrsScope, 'SVGSvgAttrsScope', classMeta, SVGContainerElementAttrsScope, [SVGContainerElementAttrsScope, CoordinateAttrs, LengthAttrs, ViewBoxAttrs]);
  setMetadataFor(Companion_22, 'Companion', objectMeta);
  setMetadataFor(SVGGradientAttrsScope, 'SVGGradientAttrsScope', classMeta, SVGElementAttrsScope);
  setMetadataFor(SVGRadialGradientAttrsScope, 'SVGRadialGradientAttrsScope', classMeta, SVGGradientAttrsScope);
  setMetadataFor(Companion_23, 'Companion', objectMeta);
  setMetadataFor(SVGPathAttrsScope, 'SVGPathAttrsScope', classMeta, SVGGraphicalElementAttrsScope);
  setMetadataFor(SVGTransformScope, 'SVGTransformScope', classMeta);
  setMetadataFor(Companion_24, 'Companion', objectMeta);
  setMetadataFor(SVGDefsAttrsScope, 'SVGDefsAttrsScope', classMeta, SVGElementAttrsScope);
  setMetadataFor(Companion_25, 'Companion', objectMeta);
  setMetadataFor(SVGStopAttrsScope, 'SVGStopAttrsScope', classMeta, SVGElementAttrsScope);
  setMetadataFor(SVGPathDataScope, 'SVGPathDataScope', classMeta);
  setMetadataFor(Companion_26, 'Companion', objectMeta);
  setMetadataFor(ViewBox, 'ViewBox', classMeta);
  setMetadataFor(SVGStrokeType, 'SVGStrokeType', classMeta, Enum);
  setMetadataFor(SVGStrokeLineCap, 'SVGStrokeLineCap', classMeta, Enum);
  setMetadataFor(SVGStrokeLineJoin, 'SVGStrokeLineJoin', classMeta, Enum);
  setMetadataFor(SVGFillType, 'SVGFillType', classMeta, Enum);
  setMetadataFor(Companion_27, 'Companion', objectMeta);
  function points(pairs) {
    var pointString = joinToString_0(pairs, ' ', VOID, VOID, VOID, VOID, PointsAttrs$points$lambda);
    this.u2j('points', pointString);
  }
  setMetadataFor(PointsAttrs, 'PointsAttrs', interfaceMeta, VOID, [AttrsScope]);
  setMetadataFor(SVGPolylineAttrsScope, 'SVGPolylineAttrsScope', classMeta, SVGGraphicalElementAttrsScope, [SVGGraphicalElementAttrsScope, PointsAttrs]);
  setMetadataFor(Companion_28, 'Companion', objectMeta);
  function cx(value) {
    this.u2j('cx', toString(value));
  }
  function cy(value) {
    this.u2j('cy', toString(value));
  }
  setMetadataFor(CenterCoordinateAttrs, 'CenterCoordinateAttrs', interfaceMeta, VOID, [AttrsScope]);
  setMetadataFor(SVGCircleAttrsScope, 'SVGCircleAttrsScope', classMeta, SVGGraphicalElementAttrsScope, [SVGGraphicalElementAttrsScope, CenterCoordinateAttrs]);
  setMetadataFor(Companion_29, 'Companion', objectMeta);
  setMetadataFor(SVGLineAttrsScope, 'SVGLineAttrsScope', classMeta, SVGGraphicalElementAttrsScope);
  setMetadataFor(Companion_30, 'Companion', objectMeta);
  setMetadataFor(SVGRectAttrsScope, 'SVGRectAttrsScope', classMeta, SVGGraphicalElementAttrsScope, [SVGGraphicalElementAttrsScope, CoordinateAttrs, LengthAttrs]);
  setMetadataFor(Companion_31, 'Companion', objectMeta);
  setMetadataFor(SVGGroupAttrsScope, 'SVGGroupAttrsScope', classMeta, SVGContainerElementAttrsScope);
  setMetadataFor(SyntheticEvent, 'SyntheticEvent', classMeta);
  setMetadataFor(SyntheticTransitionEvent, 'SyntheticTransitionEvent', classMeta, SyntheticEvent);
  //endregion
  function ComparableAttrsScope_init_$Init$($this) {
    ComparableAttrsScope.call($this, new DummyAttrsScope());
    return $this;
  }
  function ComparableAttrsScope_init_$Create$() {
    return ComparableAttrsScope_init_$Init$(objectCreate(protoOf(ComparableAttrsScope)));
  }
  function ComparableAttrsScope(wrapped) {
    this.g2r_1 = wrapped;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.h2r_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_0.i2r_1 = LinkedHashSet_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_1.j2r_1 = LinkedHashSet_init_$Create$();
    this.k2r_1 = null;
  }
  protoOf(ComparableAttrsScope).u2j = function (attr, value) {
    // Inline function 'kotlin.collections.set' call
    this.h2r_1.g2(attr, value);
    this.g2r_1.u2j(attr, value);
    return this;
  };
  protoOf(ComparableAttrsScope).w2j = function (classes) {
    this.i2r_1.a1(classes);
  };
  protoOf(ComparableAttrsScope).a2k = function (listener) {
    this.j2r_1.u(listener);
    this.g2r_1.a2k(listener);
  };
  protoOf(ComparableAttrsScope).v2j = function (builder) {
    var tmp0_elvis_lhs = this.k2r_1;
    var style = tmp0_elvis_lhs == null ? new ComparableStyleScope() : tmp0_elvis_lhs;
    builder(style);
    this.k2r_1 = style;
    this.g2r_1.v2j(builder);
  };
  protoOf(ComparableAttrsScope).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof ComparableAttrsScope) {
      tmp_2 = equals(other.h2r_1, this.h2r_1);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = equals(other.i2r_1, this.i2r_1);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals(other.j2r_1, this.j2r_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(other.k2r_1, this.k2r_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComparableAttrsScope).hashCode = function () {
    var result = hashCode(this.h2r_1);
    result = imul(31, result) + hashCode(this.i2r_1) | 0;
    result = imul(31, result) + hashCode(this.j2r_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.k2r_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  function DummyAttrsScope() {
  }
  protoOf(DummyAttrsScope).u2j = function (attr, value) {
    return this;
  };
  protoOf(DummyAttrsScope).w2j = function (classes) {
    return Unit_instance;
  };
  protoOf(DummyAttrsScope).a2k = function (listener) {
    return Unit_instance;
  };
  protoOf(DummyAttrsScope).v2j = function (builder) {
    return Unit_instance;
  };
  function TransitionEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
  }
  protoOf(TransitionEventListener).og = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this.p2r_1(new SyntheticTransitionEvent(event, event));
  };
  protoOf(TransitionEventListener).handleEvent = function (event) {
    return this.og(event);
  };
  function SyntheticEventListener(event, listener) {
    this.o2r_1 = event;
    this.p2r_1 = listener;
    this.q2r_1 = this.o2r_1;
  }
  protoOf(SyntheticEventListener).t23 = function () {
    return this.q2r_1;
  };
  protoOf(SyntheticEventListener).og = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new SyntheticEvent(event);
    this.p2r_1(tmp$ret$1);
  };
  protoOf(SyntheticEventListener).handleEvent = function (event) {
    return this.og(event);
  };
  function onTransitionEnd(_this__u8e3s4, listener) {
    var evtListener = new TransitionEventListener('transitionend', listener);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.a2k(evtListener);
  }
  function ariaHidden(_this__u8e3s4, value) {
    value = value === VOID ? true : value;
    _this__u8e3s4.u2j('aria-hidden', value.toString());
  }
  function ariaDisabled(_this__u8e3s4, value) {
    value = value === VOID ? true : value;
    _this__u8e3s4.u2j('aria-disabled', value.toString());
  }
  function justifyItems(_this__u8e3s4, justifyItems) {
    _this__u8e3s4.o2m('justify-items', justifyItems);
  }
  function JustifyItemsPosition(value) {
    JustifyItems.call(this, value);
  }
  function Companion() {
  }
  protoOf(Companion).r2r = function () {
    return new JustifyItemsPosition('center');
  };
  protoOf(Companion).s2r = function () {
    return new JustifyItemsPosition('start');
  };
  protoOf(Companion).t2r = function () {
    return new JustifyItemsPosition('end');
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function JustifyItems(value) {
    this.u2r_1 = value;
  }
  protoOf(JustifyItems).toString = function () {
    return this.u2r_1;
  };
  function justifySelf(_this__u8e3s4, justifySelf) {
    _this__u8e3s4.o2m('justify-self', justifySelf);
  }
  function JustifySelfPosition(value) {
    JustifySelf.call(this, value);
  }
  function Companion_0() {
  }
  protoOf(Companion_0).r2r = function () {
    return new JustifySelfPosition('center');
  };
  protoOf(Companion_0).s2r = function () {
    return new JustifySelfPosition('start');
  };
  protoOf(Companion_0).t2r = function () {
    return new JustifySelfPosition('end');
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    return Companion_instance_1;
  }
  function JustifySelf(value) {
    this.v2r_1 = value;
  }
  protoOf(JustifySelf).toString = function () {
    return this.v2r_1;
  };
  function CSSAnimation(name, duration, timingFunction, delay, iterationCount, direction, fillMode, playState) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    iterationCount = iterationCount === VOID ? null : iterationCount;
    direction = direction === VOID ? null : direction;
    fillMode = fillMode === VOID ? null : fillMode;
    playState = playState === VOID ? null : playState;
    this.w2r_1 = name;
    this.x2r_1 = duration;
    this.y2r_1 = timingFunction;
    this.z2r_1 = delay;
    this.a2s_1 = iterationCount;
    this.b2s_1 = direction;
    this.c2s_1 = fillMode;
    this.d2s_1 = playState;
  }
  protoOf(CSSAnimation).toString = function () {
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.CSSAnimation.toString.<anonymous>' call
    var tmp0_safe_receiver = this.x2r_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSAnimation.toString.<anonymous>.<anonymous>' call
      this_0.u(toString(tmp0_safe_receiver));
    }
    var tmp1_safe_receiver = this.y2r_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSAnimation.toString.<anonymous>.<anonymous>' call
      this_0.u(toString(tmp1_safe_receiver));
    }
    if (!(this.z2r_1 == null)) {
      if (this.x2r_1 == null) {
        this_0.u('0s');
      }
      this_0.u(toString(this.z2r_1));
    }
    var tmp2_safe_receiver = this.a2s_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSAnimation.toString.<anonymous>.<anonymous>' call
      var it = tmp2_safe_receiver.e2s_1;
      this_0.u(AnimationIterationCount__toString_impl_5t3trp(it));
    }
    var tmp3_safe_receiver = this.b2s_1;
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSAnimation.toString.<anonymous>.<anonymous>' call
      this_0.u(toString(tmp3_safe_receiver));
    }
    var tmp4_safe_receiver = this.c2s_1;
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSAnimation.toString.<anonymous>.<anonymous>' call
      this_0.u(toString(tmp4_safe_receiver));
    }
    var tmp5_safe_receiver = this.d2s_1;
    if (tmp5_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSAnimation.toString.<anonymous>.<anonymous>' call
      this_0.u(toString(tmp5_safe_receiver));
    }
    this_0.u(this.w2r_1);
    var tmp$ret$14 = this_0.w2();
    return joinToString(tmp$ret$14, ' ');
  };
  protoOf(CSSAnimation).hashCode = function () {
    var result = getStringHashCode(this.w2r_1);
    result = imul(result, 31) + (this.x2r_1 == null ? 0 : hashCode(this.x2r_1)) | 0;
    result = imul(result, 31) + (this.y2r_1 == null ? 0 : hashCode(this.y2r_1)) | 0;
    result = imul(result, 31) + (this.z2r_1 == null ? 0 : hashCode(this.z2r_1)) | 0;
    result = imul(result, 31) + (this.a2s_1 == null ? 0 : AnimationIterationCount__hashCode_impl_rk9qkk(this.a2s_1.e2s_1)) | 0;
    result = imul(result, 31) + (this.b2s_1 == null ? 0 : hashCode(this.b2s_1)) | 0;
    result = imul(result, 31) + (this.c2s_1 == null ? 0 : hashCode(this.c2s_1)) | 0;
    result = imul(result, 31) + (this.d2s_1 == null ? 0 : hashCode(this.d2s_1)) | 0;
    return result;
  };
  protoOf(CSSAnimation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSAnimation))
      return false;
    var tmp0_other_with_cast = other instanceof CSSAnimation ? other : THROW_CCE();
    if (!(this.w2r_1 === tmp0_other_with_cast.w2r_1))
      return false;
    if (!equals(this.x2r_1, tmp0_other_with_cast.x2r_1))
      return false;
    if (!equals(this.y2r_1, tmp0_other_with_cast.y2r_1))
      return false;
    if (!equals(this.z2r_1, tmp0_other_with_cast.z2r_1))
      return false;
    if (!equals(this.a2s_1, tmp0_other_with_cast.a2s_1))
      return false;
    if (!equals(this.b2s_1, tmp0_other_with_cast.b2s_1))
      return false;
    if (!equals(this.c2s_1, tmp0_other_with_cast.c2s_1))
      return false;
    if (!equals(this.d2s_1, tmp0_other_with_cast.d2s_1))
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
      _this__u8e3s4.j2m('animation', joinToString_0(animations, ', '));
    }
  }
  function borderBottom(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    borderBottom_0(_this__u8e3s4, borderBottom$lambda(width, style, color));
  }
  function borderColor(_this__u8e3s4, color) {
    _this__u8e3s4.o2m('border-color', color);
  }
  function borderStyle(_this__u8e3s4, lineStyle) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.j2m('border-style', lineStyle);
  }
  function borderWidth(_this__u8e3s4, width) {
    _this__u8e3s4.o2m('border-width', width);
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
    _this__u8e3s4.o2m('border-bottom', this_0);
  }
  function borderTop_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBorder();
    // Inline function 'kotlin.contracts.contract' call
    borderBuild(this_0);
    _this__u8e3s4.o2m('border-top', this_0);
  }
  function borderLeft_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBorder();
    // Inline function 'kotlin.contracts.contract' call
    borderBuild(this_0);
    _this__u8e3s4.o2m('border-left', this_0);
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
  protoOf(Companion_1).f2s = function () {
    return new BoxSizing('content-box');
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    return Companion_instance_2;
  }
  function BoxSizing(value) {
    this.g2s_1 = value;
  }
  protoOf(BoxSizing).toString = function () {
    return this.g2s_1;
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
      this_0.q5('inset');
      this_0.r5(_Char___init__impl__6a9atx(32));
    }
    this_0.p5(offsetX);
    this_0.r5(_Char___init__impl__6a9atx(32));
    this_0.p5(offsetY);
    if (!(blurRadius == null)) {
      this_0.r5(_Char___init__impl__6a9atx(32));
      this_0.p5(blurRadius);
    }
    if (!(spreadRadius == null)) {
      if (blurRadius == null) {
        this_0.r5(_Char___init__impl__6a9atx(32));
        this_0.r5(_Char___init__impl__6a9atx(48));
      }
      this_0.r5(_Char___init__impl__6a9atx(32));
      this_0.p5(spreadRadius);
    }
    if (!(color == null)) {
      this_0.r5(_Char___init__impl__6a9atx(32));
      this_0.p5(color);
    }
    var tmp$ret$1 = this_0.toString();
    boxShadow_0(_this__u8e3s4, tmp$ret$1);
  }
  function boxSizing_0(_this__u8e3s4, boxSizing_0) {
    boxSizing(_this__u8e3s4, boxSizing_0.toString());
  }
  function boxShadow_0(_this__u8e3s4, value) {
    _this__u8e3s4.j2m('box-shadow', value);
  }
  function ComparableStyleScope() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.h2s_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.i2s_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(ComparableStyleScope).o2m = function (propertyName, value) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.h2s_1;
    var value_0 = toString(value);
    this_0.g2(propertyName, value_0);
  };
  protoOf(ComparableStyleScope).q2m = function (variableName, value) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.i2s_1;
    var value_0 = toString(value);
    this_0.g2(variableName, value_0);
  };
  protoOf(ComparableStyleScope).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof ComparableStyleScope) {
      tmp_0 = equals(this.h2s_1, other.h2s_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.i2s_1, other.i2s_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComparableStyleScope).hashCode = function () {
    var result = hashCode(this.h2s_1);
    result = imul(31, result) + hashCode(this.i2s_1) | 0;
    return result;
  };
  function isNotEmpty(_this__u8e3s4) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!_this__u8e3s4.h2s_1.o()) {
      tmp = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp = !_this__u8e3s4.i2s_1.o();
    }
    return tmp;
  }
  function Companion_2() {
  }
  protoOf(Companion_2).j2s = function () {
    return new Cursor('pointer');
  };
  protoOf(Companion_2).k2s = function () {
    return new Cursor('not-allowed');
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    return Companion_instance_3;
  }
  function Cursor(value) {
    this.l2s_1 = value;
  }
  protoOf(Cursor).toString = function () {
    return this.l2s_1;
  };
  function cursor(_this__u8e3s4, cursor) {
    _this__u8e3s4.o2m('cursor', cursor);
  }
  function Companion_3() {
  }
  protoOf(Companion_3).m2s = function () {
    return new Appearance('none');
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    return Companion_instance_4;
  }
  function Appearance(value) {
    this.n2s_1 = value;
  }
  protoOf(Appearance).toString = function () {
    return this.n2s_1;
  };
  function appearance(_this__u8e3s4, appearance) {
    _this__u8e3s4.o2m('appearance', appearance);
  }
  function Companion_4() {
  }
  protoOf(Companion_4).o2s = function () {
    return new FontWeight('600');
  };
  protoOf(Companion_4).p2s = function () {
    return new FontWeight('bolder');
  };
  var Companion_instance_5;
  function Companion_getInstance_5() {
    return Companion_instance_5;
  }
  function FontWeight(value) {
    this.q2s_1 = value;
  }
  protoOf(FontWeight).toString = function () {
    return this.q2s_1;
  };
  function fontWeight(_this__u8e3s4, weight) {
    _this__u8e3s4.o2m('font-weight', weight);
  }
  function GridTrackBuilder() {
    GridTrackBuilderInRepeat.call(this);
  }
  protoOf(GridTrackBuilder).s2s = function (count, block) {
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    var this_1 = this_0.t2s_1;
    var repeatTracks = copyToArray(this_1);
    this.t2s_1.u(Companion_instance_7.u2s(count, repeatTracks.slice()));
  };
  function GridTrackBuilderInRepeat() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.t2s_1 = ArrayList_init_$Create$();
  }
  protoOf(GridTrackBuilderInRepeat).v2s = function () {
    return Companion_instance_6.a2t();
  };
  protoOf(GridTrackBuilderInRepeat).w2s = function (track) {
    this.t2s_1.u(track);
  };
  protoOf(GridTrackBuilderInRepeat).x2s = function (value) {
    return this.w2s(Companion_instance_6.b2t(value));
  };
  protoOf(GridTrackBuilderInRepeat).y2s = function (min, max) {
    return this.w2s(Companion_instance_6.c2t(min, max));
  };
  protoOf(GridTrackBuilderInRepeat).z2s = function (min, max) {
    return this.y2s(Companion_instance_6.d2t(min), Companion_instance_6.b2t(max));
  };
  function FitContent() {
  }
  function MinMax(min, max) {
    TrackSize.call(this, 'minmax(' + min + ', ' + max + ')');
    this.f2t_1 = min;
    this.g2t_1 = max;
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
  protoOf(Companion_5).a2t = function () {
    return new Keyword('min-content');
  };
  protoOf(Companion_5).d2t = function (value) {
    return new Fixed(value);
  };
  protoOf(Companion_5).b2t = function (value) {
    return new Flex(value);
  };
  protoOf(Companion_5).c2t = function (min, max) {
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
    this.i2t_1 = entries;
  }
  function LineNames(names) {
    GridEntry.call(this, joinToString_0(names, ' ', '[', ']'));
    this.k2t_1 = names;
  }
  function Companion_6() {
  }
  protoOf(Companion_6).u2s = function (count, entries) {
    return new Track(count, entries.slice());
  };
  var Companion_instance_7;
  function Companion_getInstance_7() {
    return Companion_instance_7;
  }
  function GridEntry(value) {
    this.l2t_1 = value;
  }
  protoOf(GridEntry).toString = function () {
    return this.l2t_1;
  };
  function GridBuilder() {
    GridBuilderInAuto.call(this);
  }
  function gridTemplateColumns_0(_this__u8e3s4, block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    gridTemplateColumns(_this__u8e3s4, toTrackListString_0(this_0.t2s_1));
  }
  function gridTemplateRows_0(_this__u8e3s4, block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    gridTemplateRows(_this__u8e3s4, toTrackListString_0(this_0.t2s_1));
  }
  function grid(_this__u8e3s4, block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new GridBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    this_0.r2t(_this__u8e3s4);
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
        var this_0 = prev.k2t_1;
        var elements = element.k2t_1;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$2 = this_0.concat(elements);
        acc.r(tmp_0, new LineNames(tmp$ret$2.slice()));
      } else {
        acc.u(element);
      }
      accumulator = acc;
    }
    var tmp$ret$4 = accumulator;
    return joinToString(tmp$ret$4, ' ');
  }
  function GridBuilderInAuto() {
    this.m2t_1 = null;
    this.n2t_1 = null;
    this.o2t_1 = null;
  }
  protoOf(GridBuilderInAuto).p2t = function (block) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    tmp.m2t_1 = this_0.t2s_1;
  };
  protoOf(GridBuilderInAuto).q2t = function (block) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    tmp.n2t_1 = this_0.t2s_1;
  };
  protoOf(GridBuilderInAuto).r2t = function (scope) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Grid' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display(scope, 'grid');
    var tmp0_safe_receiver = this.m2t_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      gridTemplateColumns(scope, toTrackListString_0(tmp0_safe_receiver));
    }
    var tmp1_safe_receiver = this.n2t_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      gridTemplateRows(scope, toTrackListString_0(tmp1_safe_receiver));
    }
    var tmp2_safe_receiver = this.o2t_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.GridBuilderInAuto.buildInto.<anonymous>' call
      var tmp0_safe_receiver_0 = tmp2_safe_receiver.m2t_1;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        gridAutoColumns(scope, toTrackListString_0(tmp0_safe_receiver_0));
      }
      var tmp1_safe_receiver_0 = tmp2_safe_receiver.n2t_1;
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
            var this_0 = element.i2t_1;
            var destination_0 = ArrayList_init_$Create$();
            var inductionVariable_0 = 0;
            var last_0 = this_0.length;
            while (inductionVariable_0 < last_0) {
              var element_0 = this_0[inductionVariable_0];
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              if (element_0 instanceof TrackSize) {
                destination_0.u(element_0);
              }
            }
            var tmp_0;
            if (destination_0.o()) {
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
    if (!!trackSizes.o()) {
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
    var tmp0_iterator = trackSizes.k();
    while (tmp0_iterator.x()) {
      var element_2 = tmp0_iterator.z();
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
                var tmp_2 = element_2.f2t_1;
                if (tmp_2 instanceof Fixed) {
                  tmp_1 = true;
                } else {
                  var tmp_3 = element_2.g2t_1;
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
  function Companion_7() {
  }
  protoOf(Companion_7).s2t = function () {
    return new VerticalAlign('middle');
  };
  var Companion_instance_8;
  function Companion_getInstance_8() {
    return Companion_instance_8;
  }
  function VerticalAlign(value) {
    this.t2t_1 = value;
  }
  protoOf(VerticalAlign).toString = function () {
    return this.t2t_1;
  };
  function verticalAlign(_this__u8e3s4, verticalAlign) {
    _this__u8e3s4.o2m('vertical-align', verticalAlign);
  }
  function paddingInline(_this__u8e3s4, value) {
    _this__u8e3s4.j2m('padding-inline', joinToString_0(value, ' '));
  }
  function Companion_8() {
  }
  protoOf(Companion_8).m2s = function () {
    return new ListStyleType('none');
  };
  var Companion_instance_9;
  function Companion_getInstance_9() {
    return Companion_instance_9;
  }
  function ListStyleType(value) {
    this.u2t_1 = value;
  }
  protoOf(ListStyleType).toString = function () {
    return this.u2t_1;
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
      _this__u8e3s4.o2m('list-style-type', type);
    }
    if (position == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      _this__u8e3s4.o2m('list-style-position', position);
    }
    if (image == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      _this__u8e3s4.o2m('list-style-image', image);
    }
  }
  function Companion_9() {
  }
  protoOf(Companion_9).v2t = function () {
    return new ObjectFit('scale-down');
  };
  var Companion_instance_10;
  function Companion_getInstance_10() {
    return Companion_instance_10;
  }
  function ObjectFit(value) {
    this.w2t_1 = value;
  }
  protoOf(ObjectFit).toString = function () {
    return this.w2t_1;
  };
  function objectFit(_this__u8e3s4, objectFit) {
    _this__u8e3s4.o2m('object-fit', objectFit);
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
    _this__u8e3s4.o2m('outline', this_0);
  }
  function CSSOutline() {
    this.x2t_1 = null;
    this.y2t_1 = null;
    this.z2t_1 = null;
  }
  protoOf(CSSOutline).equals = function (other) {
    var tmp;
    if (other instanceof CSSOutline) {
      tmp = (equals(this.x2t_1, other.x2t_1) ? equals(this.y2t_1, other.y2t_1) : false) ? equals(this.z2t_1, other.z2t_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CSSOutline).toString = function () {
    var values = listOfNotNull([this.z2t_1, this.y2t_1, this.x2t_1]);
    return joinToString(values, ' ');
  };
  function outline$lambda($width, $style, $color) {
    return function ($this$outline) {
      $this$outline.x2t_1 = $width;
      $this$outline.y2t_1 = $style;
      $this$outline.z2t_1 = $color;
      return Unit_instance;
    };
  }
  function Companion_10() {
  }
  protoOf(Companion_10).a2u = function () {
    return new Overflow('hidden');
  };
  protoOf(Companion_10).b2u = function () {
    return new Overflow('auto');
  };
  var Companion_instance_11;
  function Companion_getInstance_11() {
    return Companion_instance_11;
  }
  function Overflow(value) {
    this.c2u_1 = value;
  }
  protoOf(Overflow).toString = function () {
    return this.c2u_1;
  };
  function Companion_11() {
  }
  protoOf(Companion_11).d2u = function () {
    return new OverflowWrap('break-word');
  };
  var Companion_instance_12;
  function Companion_getInstance_12() {
    return Companion_instance_12;
  }
  function OverflowWrap(value) {
    this.e2u_1 = value;
  }
  protoOf(OverflowWrap).toString = function () {
    return this.e2u_1;
  };
  function overflowX(_this__u8e3s4, overflowX) {
    _this__u8e3s4.o2m('overflow-x', overflowX);
  }
  function overflowY(_this__u8e3s4, overflowY) {
    _this__u8e3s4.o2m('overflow-y', overflowY);
  }
  function overflow(_this__u8e3s4, overflow) {
    _this__u8e3s4.o2m('overflow', overflow);
  }
  function overflowWrap(_this__u8e3s4, overflowWrap) {
    _this__u8e3s4.o2m('overflow-wrap', overflowWrap);
  }
  function Companion_12() {
  }
  protoOf(Companion_12).f2u = function () {
    return new ScrollBehavior('smooth');
  };
  var Companion_instance_13;
  function Companion_getInstance_13() {
    return Companion_instance_13;
  }
  function ScrollBehavior(value) {
    this.g2u_1 = value;
  }
  protoOf(ScrollBehavior).toString = function () {
    return this.g2u_1;
  };
  function scrollBehavior(_this__u8e3s4, scrollBehavior) {
    _this__u8e3s4.o2m('scroll-behavior', scrollBehavior);
  }
  function PropertyValue(name, defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    StyleVariable.call(this, name, defaultFallback, prefix);
  }
  protoOf(PropertyValue).j2u = function (fallback) {
    return this.m2u(fallback);
  };
  protoOf(PropertyValue).n2u = function (fallback) {
    return this.j2u((fallback == null ? true : !(fallback == null)) ? fallback : THROW_CCE());
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
  protoOf(NumberValue).r2u = function (fallback) {
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
    return this.m2u(tmp);
  };
  protoOf(NumberValue).n2u = function (fallback) {
    return this.r2u((fallback == null ? true : isNumber(fallback)) ? fallback : THROW_CCE());
  };
  function StyleVariable(name, defaultFallback, prefix) {
    this.k2u_1 = defaultFallback;
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
    tmp.l2u_1 = tmp1_elvis_lhs == null ? name : tmp1_elvis_lhs;
  }
  protoOf(StyleVariable).o2u = function (fallback, $super) {
    fallback = fallback === VOID ? null : fallback;
    return $super === VOID ? this.n2u(fallback) : $super.n2u.call(this, fallback);
  };
  protoOf(StyleVariable).m2u = function (fallback) {
    // Inline function 'org.jetbrains.compose.web.css.CSSVariableValue' call
    var tmp1_safe_receiver = fallback == null ? this.k2u_1 : fallback;
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
    return 'var(--' + this.l2u_1 + (tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs) + ')';
  };
  function StyleVariablePropertyProvider(defaultFallback, prefix) {
    this.s2u_1 = defaultFallback;
    this.t2u_1 = prefix;
  }
  protoOf(StyleVariablePropertyProvider).u2u = function (thisRef, property) {
    return new PropertyValue(provideVariableName(thisRef, property), this.s2u_1, this.t2u_1);
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
    this.v2u_1 = defaultFallback;
    this.w2u_1 = prefix;
  }
  protoOf(StyleVariableNumberProvider).u2u = function (thisRef, property) {
    return new NumberValue(provideVariableName(thisRef, property), this.v2u_1, this.w2u_1);
  };
  function StyleVariable_3(defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariableNumberProvider(defaultFallback, prefix);
  }
  function setVariable(_this__u8e3s4, variable, value) {
    _this__u8e3s4.o2m('--' + variable.l2u_1, value);
  }
  function provideVariableName(groupObject, property) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.provideVariableName.<anonymous>' call
    if (!(groupObject == null)) {
      this_0.q5(removeSuffix(removeSuffix(titleCamelCaseToKebabCase(ensureNotNull(getKClassFromExpression(groupObject).s6())), '-vars'), '-variables'));
      this_0.r5(_Char___init__impl__6a9atx(45));
    }
    this_0.q5(removeSuffix(removeSuffix(titleCamelCaseToKebabCase(property.callableName), '-var'), '-variable'));
    return this_0.toString();
  }
  function Companion_13() {
  }
  protoOf(Companion_13).m2s = function () {
    return new UserSelect('none');
  };
  var Companion_instance_14;
  function Companion_getInstance_14() {
    return Companion_instance_14;
  }
  function UserSelect(value) {
    this.x2u_1 = value;
  }
  protoOf(UserSelect).toString = function () {
    return this.x2u_1;
  };
  function Companion_14() {
  }
  protoOf(Companion_14).y2u = function () {
    return new WhiteSpace('nowrap');
  };
  protoOf(Companion_14).z2u = function () {
    return new WhiteSpace('pre-wrap');
  };
  var Companion_instance_15;
  function Companion_getInstance_15() {
    return Companion_instance_15;
  }
  function WhiteSpace(value) {
    this.a2v_1 = value;
  }
  protoOf(WhiteSpace).toString = function () {
    return this.a2v_1;
  };
  function Companion_15() {
  }
  protoOf(Companion_15).r2r = function () {
    return new TextAlign('center');
  };
  protoOf(Companion_15).s2r = function () {
    return new TextAlign('start');
  };
  var Companion_instance_16;
  function Companion_getInstance_16() {
    return Companion_instance_16;
  }
  function TextAlign(value) {
    this.b2v_1 = value;
  }
  protoOf(TextAlign).toString = function () {
    return this.b2v_1;
  };
  function Companion_16() {
  }
  protoOf(Companion_16).c2v = function () {
    return new TextDecorationLine('underline');
  };
  protoOf(Companion_16).m2s = function () {
    return new TextDecorationLine('none');
  };
  var Companion_instance_17;
  function Companion_getInstance_17() {
    return Companion_instance_17;
  }
  function TextDecorationLine(value) {
    this.d2v_1 = value;
  }
  protoOf(TextDecorationLine).toString = function () {
    return this.d2v_1;
  };
  function userSelect(_this__u8e3s4, userSelect) {
    _this__u8e3s4.o2m('user-select', userSelect);
  }
  function whiteSpace(_this__u8e3s4, whiteSpace) {
    _this__u8e3s4.o2m('white-space', whiteSpace);
  }
  function textAlign(_this__u8e3s4, textAlign) {
    _this__u8e3s4.o2m('text-align', textAlign);
  }
  function textDecorationLine(_this__u8e3s4, textDecorationLines) {
    _this__u8e3s4.j2m('text-decoration-line', joinToString_0(textDecorationLines, ' '));
  }
  function textShadow(_this__u8e3s4, offsetX, offsetY, blurRadius, color) {
    blurRadius = blurRadius === VOID ? null : blurRadius;
    color = color === VOID ? null : color;
    textShadow_0(_this__u8e3s4, [new CSSTextShadow(offsetX, offsetY, blurRadius, color)]);
  }
  function textShadow_0(_this__u8e3s4, textShadows) {
    _this__u8e3s4.j2m('text-shadow', joinToString_0(textShadows));
  }
  function CSSTextShadow(offsetX, offsetY, blurRadius, color) {
    blurRadius = blurRadius === VOID ? null : blurRadius;
    color = color === VOID ? null : color;
    this.e2v_1 = offsetX;
    this.f2v_1 = offsetY;
    this.g2v_1 = blurRadius;
    this.h2v_1 = color;
  }
  protoOf(CSSTextShadow).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.CSSTextShadow.toString.<anonymous>' call
    this_0.p5(this.e2v_1);
    this_0.q5(' ');
    this_0.p5(this.f2v_1);
    if (!(this.g2v_1 == null)) {
      this_0.q5(' ');
      this_0.p5(this.g2v_1);
    }
    if (!(this.h2v_1 == null)) {
      this_0.q5(' ');
      this_0.p5(this.h2v_1);
    }
    return this_0.toString();
  };
  function translateX(_this__u8e3s4, tx) {
    translate(_this__u8e3s4, tx);
  }
  function translate(_this__u8e3s4, tx) {
    _this__u8e3s4.o2m('translate', tx);
  }
  function Companion_17() {
  }
  protoOf(Companion_17).i2v = function (properties, duration, timingFunction, delay) {
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(properties, 10));
    var tmp0_iterator = properties.k();
    while (tmp0_iterator.x()) {
      var item = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.compose.css.Companion.group.<anonymous>' call
      var tmp$ret$0 = CSSTransition_init_$Create$(item, duration, timingFunction, delay);
      destination.u(tmp$ret$0);
    }
    return copyToArray(destination);
  };
  protoOf(Companion_17).j2v = function (properties, duration, timingFunction, delay, $super) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    return $super === VOID ? this.i2v(properties, duration, timingFunction, delay) : $super.i2v.call(this, properties, duration, timingFunction, delay);
  };
  var Companion_instance_18;
  function Companion_getInstance_18() {
    return Companion_instance_18;
  }
  function CSSTransition_init_$Init$(property, duration, timingFunction, delay, $this) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    CSSTransition.call($this, Companion_instance_19.k2v(property), duration, timingFunction, delay);
    return $this;
  }
  function CSSTransition_init_$Create$(property, duration, timingFunction, delay) {
    return CSSTransition_init_$Init$(property, duration, timingFunction, delay, objectCreate(protoOf(CSSTransition)));
  }
  function CSSTransition(property, duration, timingFunction, delay) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    this.l2v_1 = property;
    this.m2v_1 = duration;
    this.n2v_1 = timingFunction;
    this.o2v_1 = delay;
  }
  protoOf(CSSTransition).toString = function () {
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.CSSTransition.toString.<anonymous>' call
    this_0.u(this.l2v_1.toString());
    var tmp0_safe_receiver = this.m2v_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSTransition.toString.<anonymous>.<anonymous>' call
      this_0.u(toString(tmp0_safe_receiver));
    }
    var tmp1_safe_receiver = this.n2v_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSTransition.toString.<anonymous>.<anonymous>' call
      this_0.u(toString(tmp1_safe_receiver));
    }
    if (!(this.o2v_1 == null)) {
      if (this.m2v_1 == null) {
        this_0.u('0s');
      }
      this_0.u(toString(this.o2v_1));
    }
    var tmp$ret$6 = this_0.w2();
    return joinToString(tmp$ret$6, ' ');
  };
  protoOf(CSSTransition).hashCode = function () {
    var result = hashCode(this.l2v_1);
    result = imul(result, 31) + (this.m2v_1 == null ? 0 : hashCode(this.m2v_1)) | 0;
    result = imul(result, 31) + (this.n2v_1 == null ? 0 : hashCode(this.n2v_1)) | 0;
    result = imul(result, 31) + (this.o2v_1 == null ? 0 : hashCode(this.o2v_1)) | 0;
    return result;
  };
  protoOf(CSSTransition).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSTransition))
      return false;
    var tmp0_other_with_cast = other instanceof CSSTransition ? other : THROW_CCE();
    if (!equals(this.l2v_1, tmp0_other_with_cast.l2v_1))
      return false;
    if (!equals(this.m2v_1, tmp0_other_with_cast.m2v_1))
      return false;
    if (!equals(this.n2v_1, tmp0_other_with_cast.n2v_1))
      return false;
    if (!equals(this.o2v_1, tmp0_other_with_cast.o2v_1))
      return false;
    return true;
  };
  function transition(_this__u8e3s4, transitions) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(transitions.length === 0)) {
      _this__u8e3s4.j2m('transition', joinToString_0(transitions));
    }
  }
  function Companion_18() {
  }
  protoOf(Companion_18).k2v = function (customValue) {
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
    this.p2v_1 = value;
  }
  protoOf(TransitionProperty).toString = function () {
    return this.p2v_1;
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
    this.r2v_1 = min;
    this.s2v_1 = value;
    this.t2v_1 = max;
  }
  protoOf(CSSClamp).toString = function () {
    return 'clamp(' + this.r2v_1 + ', ' + this.s2v_1 + ', ' + this.t2v_1 + ')';
  };
  protoOf(CSSClamp).hashCode = function () {
    var result = hashCode(this.r2v_1);
    result = imul(result, 31) + hashCode(this.s2v_1) | 0;
    result = imul(result, 31) + hashCode(this.t2v_1) | 0;
    return result;
  };
  protoOf(CSSClamp).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSClamp))
      return false;
    var tmp0_other_with_cast = other instanceof CSSClamp ? other : THROW_CCE();
    if (!equals(this.r2v_1, tmp0_other_with_cast.r2v_1))
      return false;
    if (!equals(this.s2v_1, tmp0_other_with_cast.s2v_1))
      return false;
    if (!equals(this.t2v_1, tmp0_other_with_cast.t2v_1))
      return false;
    return true;
  };
  function clamp(min, value, max) {
    return new CSSClamp(min, value, max);
  }
  function _no_name_provided__qut3iv() {
  }
  protoOf(_no_name_provided__qut3iv).hl = function () {
    // Inline function 'com.varabyte.kobweb.compose.dom.Simple.invoke.<anonymous>' call
  };
  function Simple(handle) {
    RefCallback.call(this);
    this.u2v_1 = handle;
  }
  protoOf(Simple).v2v = function (scope, element) {
    this.u2v_1(element);
    // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
    return new _no_name_provided__qut3iv();
  };
  function Disposable(effect) {
    RefCallback.call(this);
    this.w2v_1 = effect;
  }
  protoOf(Disposable).v2v = function (scope, element) {
    return this.w2v_1(scope, element);
  };
  function RefCallback() {
  }
  function KeysToEffect(keys, refCallback) {
    this.x2v_1 = keys;
    this.y2v_1 = refCallback;
  }
  protoOf(KeysToEffect).toString = function () {
    return 'KeysToEffect(keys=' + this.x2v_1 + ', refCallback=' + this.y2v_1 + ')';
  };
  protoOf(KeysToEffect).hashCode = function () {
    var result = hashCode(this.x2v_1);
    result = imul(result, 31) + hashCode(this.y2v_1) | 0;
    return result;
  };
  protoOf(KeysToEffect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KeysToEffect))
      return false;
    var tmp0_other_with_cast = other instanceof KeysToEffect ? other : THROW_CCE();
    if (!equals(this.x2v_1, tmp0_other_with_cast.x2v_1))
      return false;
    if (!equals(this.y2v_1, tmp0_other_with_cast.y2v_1))
      return false;
    return true;
  };
  function Builder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.z2v_1 = ArrayList_init_$Create$();
  }
  protoOf(Builder).a2w = function (keys, handle) {
    this.z2v_1.u(new KeysToEffect(toList(keys), new Simple(handle)));
  };
  protoOf(Builder).b2w = function (keys, effect) {
    this.z2v_1.u(new KeysToEffect(toList(keys), new Disposable(effect)));
  };
  protoOf(Builder).c2w = function (other) {
    if (!(other == null)) {
      this.z2v_1.a1(other.d2w_1);
    }
  };
  protoOf(Builder).w2 = function () {
    return new ElementRefScope(this.z2v_1);
  };
  function ElementRefScope(keyedCallbacks) {
    this.d2w_1 = keyedCallbacks;
  }
  protoOf(ElementRefScope).toString = function () {
    return 'ElementRefScope(keyedCallbacks=' + this.d2w_1 + ')';
  };
  protoOf(ElementRefScope).hashCode = function () {
    return hashCode(this.d2w_1);
  };
  protoOf(ElementRefScope).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementRefScope))
      return false;
    var tmp0_other_with_cast = other instanceof ElementRefScope ? other : THROW_CCE();
    if (!equals(this.d2w_1, tmp0_other_with_cast.d2w_1))
      return false;
    return true;
  };
  function registerRefScope(_this__u8e3s4, scope, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.z1m(1057476357);
    if (isTraceInProgress()) {
      traceEventStart(1057476357, $changed, -1, 'com.varabyte.kobweb.compose.dom.registerRefScope (ElementRefScope.kt:91)');
    }
    $composer_0.z1m(49626842);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.d1o();
    var tmp;
    if (false ? true : it === Companion_getInstance().r1h_1) {
      // Inline function 'com.varabyte.kobweb.compose.dom.registerRefScope.<anonymous>' call
      var value = registerRefScope$lambda;
      $composer_0.j1o(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.a1n();
    registerRefScope_0(_this__u8e3s4, scope, tmp0_group, $composer_0, 456);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.a1n();
  }
  function registerRefScope_0(_this__u8e3s4, scope, transform, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.z1m(1100234072);
    if (isTraceInProgress()) {
      traceEventStart(1100234072, $changed, -1, 'com.varabyte.kobweb.compose.dom.registerRefScope (ElementRefScope.kt:107)');
    }
    if (scope == null) {
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_0.a1n();
      return Unit_instance;
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = scope.d2w_1.k();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.compose.dom.registerRefScope.<anonymous>' call
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_0 = element.x2v_1;
      var tmp = copyToArray(this_0).slice();
      DisposableEffect(tmp, registerRefScope$lambda_0(element, transform, _this__u8e3s4), $composer_0, 8);
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.a1n();
  }
  function refScope(init) {
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.dom.refScope.<anonymous>' call
    // Inline function 'kotlin.apply' call
    var this_0 = new Builder();
    // Inline function 'kotlin.contracts.contract' call
    init(this_0);
    return this_0.w2();
  }
  function disposableRef(keys, effect) {
    return refScope(disposableRef$lambda(keys, effect));
  }
  function registerRefScope$lambda(it) {
    return it;
  }
  function registerRefScope$lambda_0($keyedCallback, $transform, $this_registerRefScope) {
    return function ($this$DisposableEffect) {
      return $keyedCallback.y2v_1.v2v($this$DisposableEffect, $transform($this_registerRefScope.o2o($this$DisposableEffect)));
    };
  }
  function disposableRef$lambda($keys, $effect) {
    return function ($this$refScope) {
      $this$refScope.b2w($keys.slice(), $effect);
      return Unit_instance;
    };
  }
  function GenericTag(name, attrsStr, content, $composer, $changed, $default) {
    var attrsStr_0 = {_v: attrsStr};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.r1o(149040042);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.s1e(name) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.s1e(attrsStr_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.u1n(content_0._v) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.u1m()) {
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
      $composer_0.z1m(1310333791);
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.compose.dom.GenericTag.<anonymous>' call
        $composer_0.z1m(746193806);
        // Inline function 'androidx.compose.runtime.cache' call
        var this_0 = $composer_0;
        var invalid = ($dirty & 112) === 32;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = this_0.d1o();
        var tmp_0;
        if (invalid ? true : it === Companion_getInstance().r1h_1) {
          // Inline function 'com.varabyte.kobweb.compose.dom.GenericTag.<anonymous>.<anonymous>' call
          var value = GenericTag$lambda(attrsStr_0);
          this_0.j1o(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.a1n();
        tmp = tmp0_group;
      }
      var tmp1_group = tmp;
      $composer_0.a1n();
      var attrs = tmp1_group;
      GenericTag_0(name, null, attrs, content_0._v, $composer_0, 48 | 14 & $dirty | 7168 & $dirty << 3, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l1h();
    }
    var tmp2_safe_receiver = $composer_0.s1o();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.p1t(GenericTag$lambda_0(name, attrsStr_0, content_0, $changed, $default));
    }
  }
  function GenericTag_0(name, namespace, attrs, content, $composer, $changed, $default) {
    var namespace_0 = {_v: namespace};
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.r1o(-5556169);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.s1e(name) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.s1e(namespace_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.u1n(attrs_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.u1n(content_0._v) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.u1m()) {
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
        tmp = Companion_getInstance_20().f2w(tmp0_safe_receiver, name);
      }
      var tmp1_elvis_lhs = tmp;
      var tmp_0 = tmp1_elvis_lhs == null ? Companion_getInstance_21().h2w(name) : tmp1_elvis_lhs;
      TagElement(isInterface(tmp_0, ElementBuilder) ? tmp_0 : THROW_CCE(), attrs_0._v, content_0._v, $composer_0, 8 | 112 & $dirty >> 3 | 896 & $dirty >> 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l1h();
    }
    var tmp0_safe_receiver_0 = $composer_0.s1o();
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      tmp0_safe_receiver_0.p1t(GenericTag$lambda_1(name, namespace_0, attrs_0, content_0, $changed, $default));
    }
  }
  function Companion_19() {
    Companion_instance_20 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.e2w_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(Companion_19).f2w = function (namespace, qualifiedName) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.e2w_1;
    var key = to(namespace, qualifiedName);
    var value = this_0.p2(key);
    var tmp;
    if (value == null) {
      // Inline function 'com.varabyte.kobweb.compose.dom.Companion.create.<anonymous>' call
      var answer = new GenericNamespacedElementBuilder(namespace, qualifiedName);
      this_0.g2(key, answer);
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
    var this_0 = $this.k2w_1;
    element$factory();
    return this_0.j2();
  }
  function GenericNamespacedElementBuilder$element$delegate$lambda(this$0) {
    return function () {
      return document.createElementNS(this$0.i2w_1, this$0.j2w_1);
    };
  }
  function GenericNamespacedElementBuilder(namespace, qualifiedName) {
    Companion_getInstance_20();
    this.i2w_1 = namespace;
    this.j2w_1 = qualifiedName;
    var tmp = this;
    tmp.k2w_1 = lazy(GenericNamespacedElementBuilder$element$delegate$lambda(this));
  }
  protoOf(GenericNamespacedElementBuilder).j21 = function () {
    var tmp = _get_element__z0t21h(this).cloneNode();
    return tmp instanceof Element ? tmp : THROW_CCE();
  };
  function Companion_20() {
    Companion_instance_21 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.g2w_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(Companion_20).h2w = function (name) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.g2w_1;
    var value = this_0.p2(name);
    var tmp;
    if (value == null) {
      // Inline function 'com.varabyte.kobweb.compose.dom.Companion.create.<anonymous>' call
      var answer = new GenericElementBuilder(name);
      this_0.g2(name, answer);
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
    var this_0 = $this.m2w_1;
    element$factory_0();
    return this_0.j2();
  }
  function GenericElementBuilder$element$delegate$lambda(this$0) {
    return function () {
      return document.createElement(this$0.l2w_1);
    };
  }
  function GenericElementBuilder(name) {
    Companion_getInstance_21();
    this.l2w_1 = name;
    var tmp = this;
    tmp.m2w_1 = lazy(GenericElementBuilder$element$delegate$lambda(this));
  }
  protoOf(GenericElementBuilder).j21 = function () {
    var tmp = _get_element__z0t21h_0(this).cloneNode();
    return tmp instanceof Element ? tmp : THROW_CCE();
  };
  function GenericTag$_anonymous_$_anonymous_$_anonymous_$parseAttrAssignment_r3pqj($this_null, attrAssignment) {
    var parts = split(attrAssignment, charArrayOf([_Char___init__impl__6a9atx(61)]), VOID, 2);
    var attr = parts.j(0);
    // Inline function 'kotlin.collections.getOrElse' call
    var tmp;
    if (1 >= 0 ? 1 <= get_lastIndex(parts) : false) {
      tmp = parts.j(1);
    } else {
      // Inline function 'com.varabyte.kobweb.compose.dom.GenericTag.<anonymous>$<anonymous>$<anonymous>$parseAttrAssignment.<anonymous>' call
      tmp = '';
    }
    var value = tmp;
    $this_null.u2j(attr, removeSurrounding(value, '"'));
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
          sb.r5(c);
        } else if (c === _Char___init__impl__6a9atx(32)) {
          if (insideQuotes) {
            sb.r5(c);
          } else {
            GenericTag$_anonymous_$_anonymous_$_anonymous_$parseAttrAssignment_r3pqj($this$null, sb.toString());
            sb.y7();
          }
        } else {
          sb.r5(c);
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
  function Svg(attrs, content, $composer, $changed, $default) {
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.r1o(302969729);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.u1n(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.u1n(content) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.u1m()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(302969729, $dirty, -1, 'com.varabyte.kobweb.compose.dom.svg.Svg (Svg.kt:433)');
      }
      GenericTag_0('svg', 'http://www.w3.org/2000/svg', Companion_instance_22.n2w(attrs_0._v), content, $composer_0, 54 | 7168 & $dirty << 6, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l1h();
    }
    var tmp0_safe_receiver = $composer_0.s1o();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.p1t(Svg$lambda(attrs_0, content, $changed, $default));
    }
  }
  function SVGSvgAttrsScope$Companion$invoke$lambda($attrs) {
    return function ($this$null) {
      if (!($attrs == null))
        $attrs(new SVGSvgAttrsScope($this$null));
      return Unit_instance;
    };
  }
  function Companion_21() {
  }
  protoOf(Companion_21).n2w = function (attrs) {
    return SVGSvgAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_22;
  function Companion_getInstance_22() {
    return Companion_instance_22;
  }
  function SVGSvgAttrsScope(attrs) {
    SVGContainerElementAttrsScope.call(this, attrs);
  }
  function _SvgId___init__impl__pmt7ru(value) {
    return value;
  }
  function _SvgId___get_value__impl__pof1ma($this) {
    return $this;
  }
  function SvgId__toString_impl_l4ivdq($this) {
    return _SvgId___get_value__impl__pof1ma($this);
  }
  function _SvgId___get_urlReference__impl__ehpa8t($this) {
    return 'url(#' + _SvgId___get_value__impl__pof1ma($this) + ')';
  }
  function Defs(_this__u8e3s4, attrs, content, $composer, $changed, $default) {
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.r1o(702570689);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.u1n(attrs_0._v) ? 32 : 16);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.u1n(content) ? 256 : 128);
    if (!(($dirty & 721) === 144) ? true : !$composer_0.u1m()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(702570689, $dirty, -1, 'com.varabyte.kobweb.compose.dom.svg.Defs (Svg.kt:452)');
      }
      var tmp0_safe_receiver = attrs_0._v;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.compose.dom.svg.Defs.<anonymous>' call
        tmp = Companion_instance_25.v2w(tmp0_safe_receiver);
      }
      GenericTag_0('defs', 'http://www.w3.org/2000/svg', tmp, content, $composer_0, 54 | 7168 & $dirty << 3, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l1h();
    }
    var tmp0_safe_receiver_0 = $composer_0.s1o();
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      tmp0_safe_receiver_0.p1t(Defs$lambda(_this__u8e3s4, attrs_0, content, $changed, $default));
    }
  }
  function RadialGradient(_this__u8e3s4, id, attrs, content, $composer, $changed, $default) {
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.r1o(-1739228083);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.s1e(_SvgId___get_value__impl__pof1ma(id)) ? 32 : 16);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.u1n(attrs_0._v) ? 256 : 128);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.u1n(content) ? 2048 : 1024);
    if (!(($dirty & 5841) === 1168) ? true : !$composer_0.u1m()) {
      if (!(($default & 2) === 0)) {
        attrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1739228083, $dirty, -1, 'com.varabyte.kobweb.compose.dom.svg.RadialGradient (Svg.kt:595)');
      }
      GenericTag_0('radialGradient', 'http://www.w3.org/2000/svg', Companion_instance_23.w2w(id, attrs_0._v), content, $composer_0, 54 | 7168 & $dirty, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l1h();
    }
    var tmp0_safe_receiver = $composer_0.s1o();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.p1t(RadialGradient$lambda(_this__u8e3s4, id, attrs_0, content, $changed, $default));
    }
  }
  function SVGRadialGradientAttrsScope$Companion$invoke$lambda($attrs, $id) {
    return function ($this$null) {
      var tmp;
      if (!($attrs == null)) {
        tmp = $attrs(new SVGRadialGradientAttrsScope($id, $this$null));
      } else {
        $this$null.y2j(SvgId__toString_impl_l4ivdq($id));
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function Companion_22() {
  }
  protoOf(Companion_22).w2w = function (id, attrs) {
    return SVGRadialGradientAttrsScope$Companion$invoke$lambda(attrs, id);
  };
  var Companion_instance_23;
  function Companion_getInstance_23() {
    return Companion_instance_23;
  }
  function SVGRadialGradientAttrsScope(id, attrs) {
    SVGGradientAttrsScope.call(this, id, attrs);
  }
  protoOf(SVGRadialGradientAttrsScope).y2w = function (value) {
    this.u2j('cx', toString(value));
  };
  protoOf(SVGRadialGradientAttrsScope).z2w = function (value) {
    this.u2j('cy', toString(value));
  };
  protoOf(SVGRadialGradientAttrsScope).a2x = function (value) {
    this.u2j('r', toString(value));
  };
  function Stop(_this__u8e3s4, offset, stopColor, stopOpacity, $composer, $changed, $default) {
    var offset_0 = {_v: offset};
    var stopColor_0 = {_v: stopColor};
    var stopOpacity_0 = {_v: stopOpacity};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.r1o(-504620912);
    if (!(($default & 1) === 0)) {
      offset_0._v = null;
    }
    if (!(($default & 2) === 0)) {
      stopColor_0._v = null;
    }
    if (!(($default & 4) === 0)) {
      stopOpacity_0._v = null;
    }
    if (isTraceInProgress()) {
      traceEventStart(-504620912, $changed, -1, 'com.varabyte.kobweb.compose.dom.svg.Stop (Svg.kt:642)');
    }
    Stop_0(_this__u8e3s4, Stop$lambda(offset_0, stopColor_0, stopOpacity_0), $composer_0, 8);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_safe_receiver = $composer_0.s1o();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.p1t(Stop$lambda_0(_this__u8e3s4, offset_0, stopColor_0, stopOpacity_0, $changed, $default));
    }
  }
  function Path(_this__u8e3s4, attrs, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.r1o(275418487);
    var $dirty = $changed;
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.u1n(attrs) ? 32 : 16);
    if (!(($dirty & 81) === 16) ? true : !$composer_0.u1m()) {
      if (isTraceInProgress()) {
        traceEventStart(275418487, $dirty, -1, 'com.varabyte.kobweb.compose.dom.svg.Path (Svg.kt:1098)');
      }
      var tmp = Companion_instance_24.b2x(attrs);
      GenericTag_0('path', 'http://www.w3.org/2000/svg', tmp, null, $composer_0, 54, 8);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l1h();
    }
    var tmp0_safe_receiver = $composer_0.s1o();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.p1t(Path$lambda(_this__u8e3s4, attrs, $changed));
    }
  }
  function SVGPathAttrsScope$Companion$invoke$lambda($attrs) {
    return function ($this$null) {
      $attrs(new SVGPathAttrsScope($this$null));
      return Unit_instance;
    };
  }
  function Companion_23() {
  }
  protoOf(Companion_23).b2x = function (attrs) {
    return SVGPathAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_24;
  function Companion_getInstance_24() {
    return Companion_instance_24;
  }
  function SVGPathAttrsScope(attrs) {
    SVGGraphicalElementAttrsScope.call(this, attrs);
  }
  protoOf(SVGPathAttrsScope).d2x = function (pathDataScope) {
    // Inline function 'kotlin.apply' call
    var this_0 = new SVGPathDataScope();
    // Inline function 'kotlin.contracts.contract' call
    pathDataScope(this_0);
    this.u2j('d', joinToString(this_0.e2x_1, ' '));
  };
  protoOf(SVGPathAttrsScope).f2x = function (value) {
    this.u2j('d', value);
  };
  function SVGTransformScope() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.i2x_1 = ArrayList_init_$Create$();
  }
  protoOf(SVGTransformScope).j2x = function (x, y) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.dom.svg.SVGTransformScope.scale.<anonymous>' call
    this_0.q5('scale(' + toString(x));
    if (y == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.dom.svg.SVGTransformScope.scale.<anonymous>.<anonymous>' call
      this_0.q5(' ' + toString(y));
    }
    this_0.q5(')');
    var tmp$ret$3 = this_0.toString();
    this.i2x_1.u(tmp$ret$3);
  };
  protoOf(SVGTransformScope).k2x = function (x, y, $super) {
    y = y === VOID ? null : y;
    var tmp;
    if ($super === VOID) {
      this.j2x(x, y);
      tmp = Unit_instance;
    } else {
      tmp = $super.j2x.call(this, x, y);
    }
    return tmp;
  };
  function SVGContainerElementAttrsScope(attrs) {
    SVGGraphicalElementAttrsScope.call(this, attrs);
  }
  function CoordinateAttrs() {
  }
  function LengthAttrs() {
  }
  function ViewBoxAttrs() {
  }
  function SVGDefsAttrsScope$Companion$invoke$lambda($attrs) {
    return function ($this$null) {
      $attrs(new SVGDefsAttrsScope($this$null));
      return Unit_instance;
    };
  }
  function Companion_24() {
  }
  protoOf(Companion_24).v2w = function (attrs) {
    return SVGDefsAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_25;
  function Companion_getInstance_25() {
    return Companion_instance_25;
  }
  function SVGDefsAttrsScope(attrs) {
    SVGElementAttrsScope.call(this, attrs);
  }
  function SVGGradientAttrsScope(id, attrs) {
    SVGElementAttrsScope.call(this, attrs.y2j(SvgId__toString_impl_l4ivdq(id)));
  }
  function Stop_0(_this__u8e3s4, attrs, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.r1o(527231098);
    var $dirty = $changed;
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.u1n(attrs) ? 32 : 16);
    if (!(($dirty & 81) === 16) ? true : !$composer_0.u1m()) {
      if (isTraceInProgress()) {
        traceEventStart(527231098, $dirty, -1, 'com.varabyte.kobweb.compose.dom.svg.Stop (Svg.kt:632)');
      }
      var tmp = Companion_instance_26.r2x(attrs);
      GenericTag_0('stop', 'http://www.w3.org/2000/svg', tmp, null, $composer_0, 54, 8);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l1h();
    }
    var tmp0_safe_receiver = $composer_0.s1o();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.p1t(Stop$lambda_1(_this__u8e3s4, attrs, $changed));
    }
  }
  function SVGStopAttrsScope$Companion$invoke$lambda($attrs) {
    return function ($this$null) {
      $attrs(new SVGStopAttrsScope($this$null));
      return Unit_instance;
    };
  }
  function Companion_25() {
  }
  protoOf(Companion_25).r2x = function (attrs) {
    return SVGStopAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_26;
  function Companion_getInstance_26() {
    return Companion_instance_26;
  }
  function SVGStopAttrsScope(attrs) {
    SVGElementAttrsScope.call(this, attrs);
  }
  protoOf(SVGStopAttrsScope).t2x = function (value) {
    this.u2j('offset', toString(value));
  };
  protoOf(SVGStopAttrsScope).u2x = function (value) {
    this.u2j('stop-color', toString(value));
  };
  protoOf(SVGStopAttrsScope).v2x = function (value) {
    this.u2j('stop-opacity', toString(value));
  };
  function SVGGraphicalElementAttrsScope(attrs) {
    SVGElementAttrsScope.call(this, attrs);
  }
  function SVGPathDataScope() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.e2x_1 = ArrayList_init_$Create$();
  }
  protoOf(SVGPathDataScope).w2x = function (x, y) {
    this.e2x_1.u('M ' + toString(x) + ' ' + toString(y));
  };
  protoOf(SVGPathDataScope).x2x = function (x, y, isRelative) {
    var command = isRelative ? 'l' : 'L';
    this.e2x_1.u(command + ' ' + toString(x) + ' ' + toString(y));
  };
  protoOf(SVGPathDataScope).y2x = function (x, y, isRelative, $super) {
    isRelative = isRelative === VOID ? false : isRelative;
    var tmp;
    if ($super === VOID) {
      this.x2x(x, y, isRelative);
      tmp = Unit_instance;
    } else {
      tmp = $super.x2x.call(this, x, y, isRelative);
    }
    return tmp;
  };
  protoOf(SVGPathDataScope).z2x = function (x, isRelative) {
    var command = isRelative ? 'v' : 'V';
    this.e2x_1.u(command + ' ' + toString(x));
  };
  protoOf(SVGPathDataScope).a2y = function (x, isRelative, $super) {
    isRelative = isRelative === VOID ? false : isRelative;
    var tmp;
    if ($super === VOID) {
      this.z2x(x, isRelative);
      tmp = Unit_instance;
    } else {
      tmp = $super.z2x.call(this, x, isRelative);
    }
    return tmp;
  };
  protoOf(SVGPathDataScope).b2y = function (x, isRelative) {
    var command = isRelative ? 'h' : 'H';
    this.e2x_1.u(command + ' ' + toString(x));
  };
  protoOf(SVGPathDataScope).c2y = function (x, isRelative, $super) {
    isRelative = isRelative === VOID ? false : isRelative;
    var tmp;
    if ($super === VOID) {
      this.b2y(x, isRelative);
      tmp = Unit_instance;
    } else {
      tmp = $super.b2y.call(this, x, isRelative);
    }
    return tmp;
  };
  protoOf(SVGPathDataScope).d2y = function (rx, ry, rotate, largeArcFlag, sweepFlag, x, y, isRelative) {
    var command = isRelative ? 'a' : 'A';
    this.e2x_1.u(command + ' ' + toString(rx) + ' ' + toString(ry) + ' ' + toString(rotate) + ' ' + toString(largeArcFlag) + ' ' + toString(sweepFlag) + ' ' + toString(x) + ' ' + toString(y));
  };
  protoOf(SVGPathDataScope).e2y = function (rx, ry, rotate, largeArcFlag, sweepFlag, x, y, isRelative, $super) {
    isRelative = isRelative === VOID ? false : isRelative;
    var tmp;
    if ($super === VOID) {
      this.d2y(rx, ry, rotate, largeArcFlag, sweepFlag, x, y, isRelative);
      tmp = Unit_instance;
    } else {
      tmp = $super.d2y.call(this, rx, ry, rotate, largeArcFlag, sweepFlag, x, y, isRelative);
    }
    return tmp;
  };
  protoOf(SVGPathDataScope).f2y = function () {
    this.e2x_1.u('Z');
  };
  function Companion_26() {
  }
  protoOf(Companion_26).g2y = function (width, height) {
    return new ViewBox(0, 0, width, height);
  };
  protoOf(Companion_26).h2y = function (width, height, $super) {
    height = height === VOID ? width : height;
    return $super === VOID ? this.g2y(width, height) : $super.g2y.call(this, width, height);
  };
  var Companion_instance_27;
  function Companion_getInstance_27() {
    return Companion_instance_27;
  }
  function ViewBox(x, y, width, height) {
    this.i2y_1 = x;
    this.j2y_1 = y;
    this.k2y_1 = width;
    this.l2y_1 = height;
  }
  function SVGElementAttrsScope(attrs) {
    this.o2w_1 = attrs;
  }
  protoOf(SVGElementAttrsScope).u2j = function (attr, value) {
    return this.o2w_1.u2j(attr, value);
  };
  protoOf(SVGElementAttrsScope).x2j = function (classes) {
    this.o2w_1.x2j(classes);
  };
  protoOf(SVGElementAttrsScope).w2j = function (classes) {
    this.o2w_1.w2j(classes);
  };
  protoOf(SVGElementAttrsScope).y2j = function (value) {
    return this.o2w_1.y2j(value);
  };
  protoOf(SVGElementAttrsScope).c2k = function (listener) {
    this.o2w_1.c2k(listener);
  };
  protoOf(SVGElementAttrsScope).b2k = function (listener) {
    this.o2w_1.b2k(listener);
  };
  protoOf(SVGElementAttrsScope).a2k = function (listener) {
    this.o2w_1.a2k(listener);
  };
  protoOf(SVGElementAttrsScope).v2j = function (builder) {
    this.o2w_1.v2j(builder);
  };
  protoOf(SVGElementAttrsScope).z2j = function (value) {
    return this.o2w_1.z2j(value);
  };
  protoOf(SVGElementAttrsScope).g2x = function (transformScope) {
    var scope = new SVGTransformScope();
    transformScope(scope);
    this.u2j('transform', joinToString(scope.i2x_1, ' '));
  };
  function PresentationAttrs() {
  }
  function toSvgValue(_this__u8e3s4) {
    // Inline function 'kotlin.text.replaceFirstChar' call
    var this_0 = _this__u8e3s4.t9_1;
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
  function Polyline(_this__u8e3s4, attrs, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.r1o(741814780);
    var $dirty = $changed;
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.u1n(attrs) ? 32 : 16);
    if (!(($dirty & 81) === 16) ? true : !$composer_0.u1m()) {
      if (isTraceInProgress()) {
        traceEventStart(741814780, $dirty, -1, 'com.varabyte.kobweb.compose.dom.svg.Polyline (Svg.kt:1161)');
      }
      var tmp = Companion_instance_28.m2y(attrs);
      GenericTag_0('polyline', 'http://www.w3.org/2000/svg', tmp, null, $composer_0, 54, 8);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l1h();
    }
    var tmp0_safe_receiver = $composer_0.s1o();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.p1t(Polyline$lambda(_this__u8e3s4, attrs, $changed));
    }
  }
  function SVGPolylineAttrsScope$Companion$invoke$lambda($attrs) {
    return function ($this$null) {
      $attrs(new SVGPolylineAttrsScope($this$null));
      return Unit_instance;
    };
  }
  function Companion_27() {
  }
  protoOf(Companion_27).m2y = function (attrs) {
    return SVGPolylineAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_28;
  function Companion_getInstance_28() {
    return Companion_instance_28;
  }
  function SVGPolylineAttrsScope(attrs) {
    SVGGraphicalElementAttrsScope.call(this, attrs);
  }
  function Circle(_this__u8e3s4, attrs, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.r1o(-2079059220);
    var $dirty = $changed;
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.u1n(attrs) ? 32 : 16);
    if (!(($dirty & 81) === 16) ? true : !$composer_0.u1m()) {
      if (isTraceInProgress()) {
        traceEventStart(-2079059220, $dirty, -1, 'com.varabyte.kobweb.compose.dom.svg.Circle (Svg.kt:804)');
      }
      var tmp = Companion_instance_29.o2y(attrs);
      GenericTag_0('circle', 'http://www.w3.org/2000/svg', tmp, null, $composer_0, 54, 8);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l1h();
    }
    var tmp0_safe_receiver = $composer_0.s1o();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.p1t(Circle$lambda(_this__u8e3s4, attrs, $changed));
    }
  }
  function SVGCircleAttrsScope$Companion$invoke$lambda($attrs) {
    return function ($this$null) {
      $attrs(new SVGCircleAttrsScope($this$null));
      return Unit_instance;
    };
  }
  function Companion_28() {
  }
  protoOf(Companion_28).o2y = function (attrs) {
    return SVGCircleAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_29;
  function Companion_getInstance_29() {
    return Companion_instance_29;
  }
  function SVGCircleAttrsScope(attrs) {
    SVGGraphicalElementAttrsScope.call(this, attrs);
  }
  protoOf(SVGCircleAttrsScope).q2y = function (value) {
    this.u2j('r', toString(value));
  };
  function Line(_this__u8e3s4, attrs, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.r1o(-846499000);
    var $dirty = $changed;
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.u1n(attrs) ? 32 : 16);
    if (!(($dirty & 81) === 16) ? true : !$composer_0.u1m()) {
      if (isTraceInProgress()) {
        traceEventStart(-846499000, $dirty, -1, 'com.varabyte.kobweb.compose.dom.svg.Line (Svg.kt:979)');
      }
      var tmp = Companion_instance_30.r2y(attrs);
      GenericTag_0('line', 'http://www.w3.org/2000/svg', tmp, null, $composer_0, 54, 8);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l1h();
    }
    var tmp0_safe_receiver = $composer_0.s1o();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.p1t(Line$lambda(_this__u8e3s4, attrs, $changed));
    }
  }
  function SVGLineAttrsScope$Companion$invoke$lambda($attrs) {
    return function ($this$null) {
      $attrs(new SVGLineAttrsScope($this$null));
      return Unit_instance;
    };
  }
  function Companion_29() {
  }
  protoOf(Companion_29).r2y = function (attrs) {
    return SVGLineAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_30;
  function Companion_getInstance_30() {
    return Companion_instance_30;
  }
  function SVGLineAttrsScope(attrs) {
    SVGGraphicalElementAttrsScope.call(this, attrs);
  }
  protoOf(SVGLineAttrsScope).t2y = function (value) {
    this.u2j('x1', toString(value));
  };
  protoOf(SVGLineAttrsScope).u2y = function (value) {
    this.u2j('x2', toString(value));
  };
  protoOf(SVGLineAttrsScope).v2y = function (value) {
    this.u2j('y1', toString(value));
  };
  protoOf(SVGLineAttrsScope).w2y = function (value) {
    this.u2j('y2', toString(value));
  };
  function Rect(_this__u8e3s4, attrs, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.r1o(151044952);
    var $dirty = $changed;
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.u1n(attrs) ? 32 : 16);
    if (!(($dirty & 81) === 16) ? true : !$composer_0.u1m()) {
      if (isTraceInProgress()) {
        traceEventStart(151044952, $dirty, -1, 'com.varabyte.kobweb.compose.dom.svg.Rect (Svg.kt:1223)');
      }
      var tmp = Companion_instance_31.x2y(attrs);
      GenericTag_0('rect', 'http://www.w3.org/2000/svg', tmp, null, $composer_0, 54, 8);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l1h();
    }
    var tmp0_safe_receiver = $composer_0.s1o();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.p1t(Rect$lambda(_this__u8e3s4, attrs, $changed));
    }
  }
  function SVGRectAttrsScope$Companion$invoke$lambda($attrs) {
    return function ($this$null) {
      $attrs(new SVGRectAttrsScope($this$null));
      return Unit_instance;
    };
  }
  function Companion_30() {
  }
  protoOf(Companion_30).x2y = function (attrs) {
    return SVGRectAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_31;
  function Companion_getInstance_31() {
    return Companion_instance_31;
  }
  function SVGRectAttrsScope(attrs) {
    SVGGraphicalElementAttrsScope.call(this, attrs);
  }
  protoOf(SVGRectAttrsScope).z2y = function (value) {
    this.u2j('rx', toString(value));
  };
  function Group(_this__u8e3s4, attrs, content, $composer, $changed, $default) {
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.r1o(-214649536);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.u1n(attrs_0._v) ? 32 : 16);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.u1n(content) ? 256 : 128);
    if (!(($dirty & 721) === 144) ? true : !$composer_0.u1m()) {
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
        tmp = Companion_instance_32.a2z(tmp0_safe_receiver);
      }
      GenericTag_0('g', 'http://www.w3.org/2000/svg', tmp, content, $composer_0, 54 | 7168 & $dirty << 3, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l1h();
    }
    var tmp0_safe_receiver_0 = $composer_0.s1o();
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      tmp0_safe_receiver_0.p1t(Group$lambda(_this__u8e3s4, attrs_0, content, $changed, $default));
    }
  }
  function SVGGroupAttrsScope$Companion$invoke$lambda($attrs) {
    return function ($this$null) {
      $attrs(new SVGGroupAttrsScope($this$null));
      return Unit_instance;
    };
  }
  function Companion_31() {
  }
  protoOf(Companion_31).a2z = function (attrs) {
    return SVGGroupAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_32;
  function Companion_getInstance_32() {
    return Companion_instance_32;
  }
  function SVGGroupAttrsScope(attrs) {
    SVGContainerElementAttrsScope.call(this, attrs);
  }
  function PointsAttrs$points$lambda(it) {
    return toString(it.ge_1) + ',' + toString(it.he_1);
  }
  function PointsAttrs() {
  }
  function CenterCoordinateAttrs() {
  }
  function Svg$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Svg($attrs._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Defs$lambda($this_Defs, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Defs($this_Defs, $attrs._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function RadialGradient$lambda($this_RadialGradient, $id, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      RadialGradient($this_RadialGradient, $id, $attrs._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Stop$lambda($offset, $stopColor, $stopOpacity) {
    return function ($this$Stop) {
      var tmp0_safe_receiver = $offset._v;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        $this$Stop.t2x(tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $stopColor._v;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        $this$Stop.u2x(tmp1_safe_receiver);
      }
      var tmp2_safe_receiver = $stopOpacity._v;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        $this$Stop.v2x(tmp2_safe_receiver);
      }
      return Unit_instance;
    };
  }
  function Stop$lambda_0($this_Stop, $offset, $stopColor, $stopOpacity, $$changed, $$default) {
    return function ($composer, $force) {
      Stop($this_Stop, $offset._v, $stopColor._v, $stopOpacity._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Path$lambda($this_Path, $attrs, $$changed) {
    return function ($composer, $force) {
      Path($this_Path, $attrs, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Stop$lambda_1($this_Stop, $attrs, $$changed) {
    return function ($composer, $force) {
      Stop_0($this_Stop, $attrs, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Polyline$lambda($this_Polyline, $attrs, $$changed) {
    return function ($composer, $force) {
      Polyline($this_Polyline, $attrs, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
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
  function SyntheticTransitionEvent(nativeEvent, transitionEventDetails) {
    SyntheticEvent.call(this, nativeEvent);
    this.m2z_1 = transitionEventDetails.propertyName;
    this.n2z_1 = transitionEventDetails.elapsedTime;
    this.o2z_1 = transitionEventDetails.pseudoElement;
  }
  function SyntheticEvent(nativeEvent) {
    this.p2z_1 = nativeEvent;
    var tmp = this;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.q2z_1 = this.p2z_1.target;
    this.r2z_1 = this.p2z_1.bubbles;
    this.s2z_1 = this.p2z_1.cancelable;
    this.t2z_1 = this.p2z_1.composed;
    this.u2z_1 = this.p2z_1.currentTarget;
    this.v2z_1 = this.p2z_1.eventPhase;
    this.w2z_1 = this.p2z_1.defaultPrevented;
    this.x2z_1 = this.p2z_1.timeStamp;
    this.y2z_1 = this.p2z_1.type;
    this.z2z_1 = this.p2z_1.isTrusted;
  }
  //region block: post-declaration
  protoOf(ComparableAttrsScope).x2j = classes;
  protoOf(ComparableAttrsScope).y2j = id;
  protoOf(ComparableAttrsScope).z2j = tabIndex;
  protoOf(ComparableAttrsScope).b2k = onClick;
  protoOf(ComparableAttrsScope).c2k = onAnimationEnd;
  protoOf(DummyAttrsScope).x2j = classes;
  protoOf(DummyAttrsScope).y2j = id;
  protoOf(DummyAttrsScope).z2j = tabIndex;
  protoOf(DummyAttrsScope).b2k = onClick;
  protoOf(DummyAttrsScope).c2k = onAnimationEnd;
  protoOf(ComparableStyleScope).j2m = property;
  protoOf(ComparableStyleScope).k2m = property_0;
  protoOf(ComparableStyleScope).p2m = variable;
  protoOf(CalcScopeInstance).q2v = unaryMinus;
  protoOf(SVGGraphicalElementAttrsScope).p2w = stroke;
  protoOf(SVGGraphicalElementAttrsScope).l2x = strokeLineCap;
  protoOf(SVGGraphicalElementAttrsScope).m2x = strokeLineJoin;
  protoOf(SVGGraphicalElementAttrsScope).q2w = strokeWidth;
  protoOf(SVGGraphicalElementAttrsScope).r2w = fill;
  protoOf(SVGGraphicalElementAttrsScope).h2x = fill_0;
  protoOf(SVGSvgAttrsScope).s2w = height_0;
  protoOf(SVGSvgAttrsScope).t2w = width_1;
  protoOf(SVGSvgAttrsScope).u2w = viewBox;
  protoOf(SVGPolylineAttrsScope).n2y = points;
  protoOf(SVGCircleAttrsScope).y2w = cx;
  protoOf(SVGCircleAttrsScope).z2w = cy;
  protoOf(SVGRectAttrsScope).n2x = x;
  protoOf(SVGRectAttrsScope).o2x = y;
  protoOf(SVGRectAttrsScope).p2x = height;
  protoOf(SVGRectAttrsScope).q2x = width_0;
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
  Companion_instance_30 = new Companion_29();
  Companion_instance_31 = new Companion_30();
  Companion_instance_32 = new Companion_31();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = onTransitionEnd;
  _.$_$.b = calc;
  _.$_$.c = clamp;
  _.$_$.d = CSSAnimation;
  _.$_$.e = ComparableStyleScope;
  _.$_$.f = NumberValue;
  _.$_$.g = StyleVariable_3;
  _.$_$.h = StyleVariable_2;
  _.$_$.i = StyleVariable_0;
  _.$_$.j = StyleVariable_1;
  _.$_$.k = animation;
  _.$_$.l = appearance;
  _.$_$.m = ariaDisabled;
  _.$_$.n = ariaHidden;
  _.$_$.o = borderBottom;
  _.$_$.p = borderColor;
  _.$_$.q = borderLeft;
  _.$_$.r = borderStyle;
  _.$_$.s = borderTop;
  _.$_$.t = borderWidth;
  _.$_$.u = boxShadow;
  _.$_$.v = boxSizing_0;
  _.$_$.w = cursor;
  _.$_$.x = fontWeight;
  _.$_$.y = gridTemplateColumns_0;
  _.$_$.z = gridTemplateRows_0;
  _.$_$.a1 = grid;
  _.$_$.b1 = isNotEmpty;
  _.$_$.c1 = justifyItems;
  _.$_$.d1 = justifySelf;
  _.$_$.e1 = listStyle;
  _.$_$.f1 = objectFit;
  _.$_$.g1 = outline;
  _.$_$.h1 = overflowWrap;
  _.$_$.i1 = overflowX;
  _.$_$.j1 = overflowY;
  _.$_$.k1 = overflow;
  _.$_$.l1 = paddingInline;
  _.$_$.m1 = scrollBehavior;
  _.$_$.n1 = setVariable;
  _.$_$.o1 = textAlign;
  _.$_$.p1 = textDecorationLine;
  _.$_$.q1 = textShadow;
  _.$_$.r1 = transition;
  _.$_$.s1 = translateX;
  _.$_$.t1 = userSelect;
  _.$_$.u1 = verticalAlign;
  _.$_$.v1 = whiteSpace;
  _.$_$.w1 = Circle;
  _.$_$.x1 = Defs;
  _.$_$.y1 = Group;
  _.$_$.z1 = Line;
  _.$_$.a2 = Path;
  _.$_$.b2 = Polyline;
  _.$_$.c2 = RadialGradient;
  _.$_$.d2 = Rect;
  _.$_$.e2 = Stop;
  _.$_$.f2 = Svg;
  _.$_$.g2 = GenericTag;
  _.$_$.h2 = disposableRef;
  _.$_$.i2 = refScope;
  _.$_$.j2 = registerRefScope_0;
  _.$_$.k2 = registerRefScope;
  _.$_$.l2 = SVGFillType_CurrentColor_getInstance;
  _.$_$.m2 = SVGFillType_None_getInstance;
  _.$_$.n2 = SVGStrokeLineCap_Round_getInstance;
  _.$_$.o2 = SVGStrokeLineJoin_Round_getInstance;
  _.$_$.p2 = SVGStrokeType_CurrentColor_getInstance;
  _.$_$.q2 = SVGStrokeType_None_getInstance;
  _.$_$.r2 = ComparableAttrsScope_init_$Create$;
  _.$_$.s2 = CSSTransition_init_$Create$;
  _.$_$.t2 = _SvgId___init__impl__pmt7ru;
  _.$_$.u2 = Companion_instance_4;
  _.$_$.v2 = Companion_instance_2;
  _.$_$.w2 = Companion_instance_18;
  _.$_$.x2 = Companion_instance_3;
  _.$_$.y2 = Companion_instance_5;
  _.$_$.z2 = Companion_instance_0;
  _.$_$.a3 = Companion_instance_1;
  _.$_$.b3 = Companion_instance_9;
  _.$_$.c3 = Companion_instance_10;
  _.$_$.d3 = Companion_instance_11;
  _.$_$.e3 = Companion_instance_12;
  _.$_$.f3 = Companion_instance_13;
  _.$_$.g3 = Companion_instance_16;
  _.$_$.h3 = Companion_instance_17;
  _.$_$.i3 = Companion_instance_14;
  _.$_$.j3 = Companion_instance_8;
  _.$_$.k3 = Companion_instance_15;
  _.$_$.l3 = Companion_instance_27;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-compose-html-ext.js.map
