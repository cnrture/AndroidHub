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
  var protoOf = kotlin_kotlin.$_$.gc;
  var objectCreate = kotlin_kotlin.$_$.ec;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.v;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.x;
  var equals = kotlin_kotlin.$_$.ya;
  var hashCode = kotlin_kotlin.$_$.fb;
  var classes = kotlin_org_jetbrains_compose_html_html_core.$_$.p;
  var id = kotlin_org_jetbrains_compose_html_html_core.$_$.u;
  var hidden = kotlin_org_jetbrains_compose_html_html_core.$_$.t;
  var title = kotlin_org_jetbrains_compose_html_html_core.$_$.a1;
  var dir = kotlin_org_jetbrains_compose_html_html_core.$_$.r;
  var draggable = kotlin_org_jetbrains_compose_html_html_core.$_$.s;
  var contentEditable = kotlin_org_jetbrains_compose_html_html_core.$_$.q;
  var lang = kotlin_org_jetbrains_compose_html_html_core.$_$.x;
  var tabIndex = kotlin_org_jetbrains_compose_html_html_core.$_$.z;
  var spellCheck = kotlin_org_jetbrains_compose_html_html_core.$_$.y;
  var inputMode = kotlin_org_jetbrains_compose_html_html_core.$_$.w;
  var inputMode_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.v;
  var onContextMenu = kotlin_org_jetbrains_compose_html_html_core.$_$.j1;
  var onClick = kotlin_org_jetbrains_compose_html_html_core.$_$.i1;
  var onDoubleClick = kotlin_org_jetbrains_compose_html_html_core.$_$.m1;
  var onMouseDown = kotlin_org_jetbrains_compose_html_html_core.$_$.z1;
  var onMouseUp = kotlin_org_jetbrains_compose_html_html_core.$_$.f2;
  var onMouseEnter = kotlin_org_jetbrains_compose_html_html_core.$_$.a2;
  var onMouseLeave = kotlin_org_jetbrains_compose_html_html_core.$_$.b2;
  var onMouseMove = kotlin_org_jetbrains_compose_html_html_core.$_$.c2;
  var onMouseOut = kotlin_org_jetbrains_compose_html_html_core.$_$.d2;
  var onMouseOver = kotlin_org_jetbrains_compose_html_html_core.$_$.e2;
  var onWheel = kotlin_org_jetbrains_compose_html_html_core.$_$.m2;
  var onDrag = kotlin_org_jetbrains_compose_html_html_core.$_$.s1;
  var onDrop = kotlin_org_jetbrains_compose_html_html_core.$_$.t1;
  var onDragStart = kotlin_org_jetbrains_compose_html_html_core.$_$.r1;
  var onDragEnd = kotlin_org_jetbrains_compose_html_html_core.$_$.n1;
  var onDragOver = kotlin_org_jetbrains_compose_html_html_core.$_$.q1;
  var onDragEnter = kotlin_org_jetbrains_compose_html_html_core.$_$.o1;
  var onDragLeave = kotlin_org_jetbrains_compose_html_html_core.$_$.p1;
  var onCopy = kotlin_org_jetbrains_compose_html_html_core.$_$.k1;
  var onCut = kotlin_org_jetbrains_compose_html_html_core.$_$.l1;
  var onPaste = kotlin_org_jetbrains_compose_html_html_core.$_$.g2;
  var onKeyDown = kotlin_org_jetbrains_compose_html_html_core.$_$.x1;
  var onKeyUp = kotlin_org_jetbrains_compose_html_html_core.$_$.y1;
  var onFocus = kotlin_org_jetbrains_compose_html_html_core.$_$.w1;
  var onBlur = kotlin_org_jetbrains_compose_html_html_core.$_$.h1;
  var onFocusIn = kotlin_org_jetbrains_compose_html_html_core.$_$.u1;
  var onFocusOut = kotlin_org_jetbrains_compose_html_html_core.$_$.v1;
  var onTouchCancel = kotlin_org_jetbrains_compose_html_html_core.$_$.i2;
  var onTouchMove = kotlin_org_jetbrains_compose_html_html_core.$_$.k2;
  var onTouchEnd = kotlin_org_jetbrains_compose_html_html_core.$_$.j2;
  var onTouchStart = kotlin_org_jetbrains_compose_html_html_core.$_$.l2;
  var onAnimationEnd = kotlin_org_jetbrains_compose_html_html_core.$_$.e1;
  var onAnimationIteration = kotlin_org_jetbrains_compose_html_html_core.$_$.f1;
  var onAnimationStart = kotlin_org_jetbrains_compose_html_html_core.$_$.g1;
  var onScroll = kotlin_org_jetbrains_compose_html_html_core.$_$.h2;
  var addEventListener = kotlin_org_jetbrains_compose_html_html_core.$_$.d1;
  var addEventListener_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.c1;
  var AttrsScope = kotlin_org_jetbrains_compose_html_html_core.$_$.b1;
  var classMeta = kotlin_kotlin.$_$.va;
  var setMetadataFor = kotlin_kotlin.$_$.hc;
  var VOID = kotlin_kotlin.$_$.g;
  var Unit_getInstance = kotlin_kotlin.$_$.w4;
  var objectMeta = kotlin_kotlin.$_$.fc;
  var THROW_IAE = kotlin_kotlin.$_$.kg;
  var enumEntries = kotlin_kotlin.$_$.ka;
  var Enum = kotlin_kotlin.$_$.yf;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.g1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.l2;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var toString = kotlin_kotlin.$_$.lc;
  var joinToString = kotlin_kotlin.$_$.s7;
  var getStringHashCode = kotlin_kotlin.$_$.eb;
  var THROW_CCE = kotlin_kotlin.$_$.jg;
  var joinToString_0 = kotlin_kotlin.$_$.t7;
  var Color_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.j;
  var Color = kotlin_org_jetbrains_compose_html_html_core.$_$.w2;
  var Companion_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.n;
  var CSSBorder = kotlin_org_jetbrains_compose_html_html_core.$_$.o2;
  var width = kotlin_org_jetbrains_compose_html_html_core.$_$.g5;
  var style = kotlin_org_jetbrains_compose_html_html_core.$_$.b5;
  var color = kotlin_org_jetbrains_compose_html_html_core.$_$.t3;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.z4;
  var boxSizing = kotlin_org_jetbrains_compose_html_html_core.$_$.s3;
  var get_PI = kotlin_kotlin.$_$.mc;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.w1;
  var property = kotlin_org_jetbrains_compose_html_html_core.$_$.a3;
  var property_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.b3;
  var variable = kotlin_org_jetbrains_compose_html_html_core.$_$.d3;
  var variable_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.c3;
  var invoke = kotlin_org_jetbrains_compose_html_html_core.$_$.z2;
  var invoke_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.y2;
  var invoke_1 = kotlin_org_jetbrains_compose_html_html_core.$_$.x2;
  var StyleScope = kotlin_org_jetbrains_compose_html_html_core.$_$.f3;
  var copyToArray = kotlin_kotlin.$_$.c7;
  var gridTemplateColumns = kotlin_org_jetbrains_compose_html_html_core.$_$.j4;
  var gridTemplateRows = kotlin_org_jetbrains_compose_html_html_core.$_$.k4;
  var Annotation = kotlin_kotlin.$_$.tf;
  var lastOrNull = kotlin_kotlin.$_$.y7;
  var get_lastIndex = kotlin_kotlin.$_$.w7;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.jh;
  var listOf = kotlin_kotlin.$_$.b8;
  var emptyList = kotlin_kotlin.$_$.e7;
  var addAll = kotlin_kotlin.$_$.c6;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.k;
  var display = kotlin_org_jetbrains_compose_html_html_core.$_$.w3;
  var gridAutoColumns = kotlin_org_jetbrains_compose_html_html_core.$_$.g4;
  var gridAutoRows = kotlin_org_jetbrains_compose_html_html_core.$_$.h4;
  var wrapQuotesIfNecessary = kotlin_com_varabyte_kobweb_browser_ext.$_$.g;
  var listOfNotNull = kotlin_kotlin.$_$.a8;
  var isNumber = kotlin_kotlin.$_$.sb;
  var CSSVariable = kotlin_org_jetbrains_compose_html_html_core.$_$.v2;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var ensureNotNull = kotlin_kotlin.$_$.dh;
  var titleCamelCaseToKebabCase = kotlin_com_varabyte_kobweb_browser_ext.$_$.f;
  var removeSuffix = kotlin_kotlin.$_$.ge;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.m6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.l;
  var charSequenceLength = kotlin_kotlin.$_$.ta;
  var charSequenceGet = kotlin_kotlin.$_$.sa;
  var isWhitespace = kotlin_kotlin.$_$.be;
  var Number_0 = kotlin_kotlin.$_$.fg;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var interfaceMeta = kotlin_kotlin.$_$.hb;
  var Collection = kotlin_kotlin.$_$.g5;
  var isInterface = kotlin_kotlin.$_$.qb;
  var checkCountOverflow = kotlin_kotlin.$_$.k6;
  var checkIndexOverflow = kotlin_kotlin.$_$.l6;
  var getOrNull = kotlin_kotlin.$_$.n7;
  var DisposableEffectResult = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var toList = kotlin_kotlin.$_$.h9;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var DisposableEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h;
  var ElementBuilder = kotlin_org_jetbrains_compose_html_html_core.$_$.l5;
  var TagElement = kotlin_org_jetbrains_compose_html_html_core.$_$.y5;
  var to = kotlin_kotlin.$_$.sh;
  var lazy = kotlin_kotlin.$_$.ih;
  var charArrayOf = kotlin_kotlin.$_$.qa;
  var split = kotlin_kotlin.$_$.ne;
  var removeSurrounding = kotlin_kotlin.$_$.he;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var KProperty1 = kotlin_kotlin.$_$.cd;
  var getPropertyCallableRef = kotlin_kotlin.$_$.db;
  var toString_0 = kotlin_kotlin.$_$.p2;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ComparableAttrsScope, 'ComparableAttrsScope', classMeta, VOID, [AttrsScope], ComparableAttrsScope_init_$Create$);
  setMetadataFor(DummyAttrsScope, 'DummyAttrsScope', classMeta, VOID, [AttrsScope], DummyAttrsScope);
  setMetadataFor(JustifyItems, 'JustifyItems', classMeta);
  setMetadataFor(JustifyItemsKeyword, 'JustifyItemsKeyword', classMeta, JustifyItems);
  setMetadataFor(JustifyItemsPosition, 'JustifyItemsPosition', classMeta, JustifyItems);
  setMetadataFor(BaselineAlignment, 'BaselineAlignment', classMeta, JustifyItems);
  setMetadataFor(OverflowAlignment, 'OverflowAlignment', classMeta, JustifyItems);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(JustifySelf, 'JustifySelf', classMeta);
  setMetadataFor(JustifySelfKeyword, 'JustifySelfKeyword', classMeta, JustifySelf);
  setMetadataFor(JustifySelfPosition, 'JustifySelfPosition', classMeta, JustifySelf);
  setMetadataFor(BaselineAlignment_0, 'BaselineAlignment', classMeta, JustifySelf);
  setMetadataFor(OverflowAlignment_0, 'OverflowAlignment', classMeta, JustifySelf);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(BaselineSet, 'BaselineSet', classMeta, Enum);
  setMetadataFor(OverflowStrategy, 'OverflowStrategy', classMeta, Enum);
  setMetadataFor(CSSAnimation, 'CSSAnimation', classMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(AnimationIterationCount, 'AnimationIterationCount', classMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(BoxSizing, 'BoxSizing', classMeta);
  setMetadataFor(ComparableStyleScope, 'ComparableStyleScope', classMeta, VOID, [StyleScope], ComparableStyleScope);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(Cursor, 'Cursor', classMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(Appearance, 'Appearance', classMeta);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
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
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(Type, 'Type', classMeta, Enum);
  setMetadataFor(Repeat, 'Repeat', classMeta, GridEntry);
  setMetadataFor(Track, 'Track', classMeta, Repeat);
  setMetadataFor(Auto, 'Auto', classMeta, Repeat);
  setMetadataFor(LineNames, 'LineNames', classMeta, GridEntry);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(GridDslMarker, 'GridDslMarker', classMeta, VOID, [Annotation]);
  setMetadataFor(GridBuilderInAuto, 'GridBuilderInAuto', classMeta);
  setMetadataFor(GridBuilder, 'GridBuilder', classMeta, GridBuilderInAuto, VOID, GridBuilder);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(VerticalAlign, 'VerticalAlign', classMeta);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(ListStyleType, 'ListStyleType', classMeta);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor(ListStylePosition, 'ListStylePosition', classMeta);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor(ObjectFit, 'ObjectFit', classMeta);
  setMetadataFor(CSSOutline, 'CSSOutline', classMeta);
  setMetadataFor(Companion_12, 'Companion', objectMeta);
  setMetadataFor(Overflow, 'Overflow', classMeta);
  setMetadataFor(Companion_13, 'Companion', objectMeta);
  setMetadataFor(OverflowWrap, 'OverflowWrap', classMeta);
  setMetadataFor(Companion_14, 'Companion', objectMeta);
  setMetadataFor(ScrollBehavior, 'ScrollBehavior', classMeta);
  setMetadataFor(StyleVariable, 'StyleVariable', classMeta, VOID, [CSSVariable]);
  setMetadataFor(PropertyValue, 'PropertyValue', classMeta, StyleVariable);
  setMetadataFor(NumberValue, 'NumberValue', classMeta, StyleVariable);
  setMetadataFor(StringValue, 'StringValue', classMeta, StyleVariable);
  setMetadataFor(StyleVariablePropertyProvider, 'StyleVariablePropertyProvider', classMeta);
  setMetadataFor(StyleVariableNumberProvider, 'StyleVariableNumberProvider', classMeta);
  setMetadataFor(Companion_15, 'Companion', objectMeta);
  setMetadataFor(UserSelect, 'UserSelect', classMeta);
  setMetadataFor(Companion_16, 'Companion', objectMeta);
  setMetadataFor(WhiteSpace, 'WhiteSpace', classMeta);
  setMetadataFor(Companion_17, 'Companion', objectMeta);
  setMetadataFor(TextAlign, 'TextAlign', classMeta);
  setMetadataFor(Companion_18, 'Companion', objectMeta);
  setMetadataFor(TextDecorationLine, 'TextDecorationLine', classMeta);
  setMetadataFor(Companion_19, 'Companion', objectMeta);
  setMetadataFor(CSSTransition, 'CSSTransition', classMeta);
  setMetadataFor(Companion_20, 'Companion', objectMeta);
  setMetadataFor(TransitionProperty, 'TransitionProperty', classMeta);
  setMetadataFor(CSSImage, 'CSSImage', classMeta);
  setMetadataFor(Keyword_0, 'Keyword', classMeta, CSSImage);
  setMetadataFor(Url, 'Url', classMeta, CSSImage);
  setMetadataFor(Gradient, 'Gradient', classMeta, CSSImage);
  setMetadataFor(Companion_21, 'Companion', objectMeta);
  setMetadataFor(CalcNum, 'CalcNum', classMeta, Number_0);
  function times(_this__u8e3s4, b) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'calc(' + _this__u8e3s4 + ' * ' + toString(b) + ')';
  }
  function times_0(_this__u8e3s4, unit) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'calc(' + toString(_this__u8e3s4) + ' * ' + unit + ')';
  }
  function div(_this__u8e3s4, num) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'calc(' + _this__u8e3s4 + ' / ' + toString(num) + ')';
  }
  function plus(_this__u8e3s4, b) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'calc(' + _this__u8e3s4 + ' + ' + b + ')';
  }
  function minus(_this__u8e3s4, b) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'calc(' + _this__u8e3s4 + ' - ' + b + ')';
  }
  function unaryMinus(_this__u8e3s4) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'calc(-1 * ' + _this__u8e3s4 + ')';
  }
  function unaryPlus(_this__u8e3s4) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'calc(1 * ' + _this__u8e3s4 + ')';
  }
  function num(num) {
    return new CalcNum(toString(num));
  }
  setMetadataFor(CalcScope, 'CalcScope', interfaceMeta);
  setMetadataFor(CalcScopeInstance, 'CalcScopeInstance', objectMeta, VOID, [CalcScope]);
  setMetadataFor(Entry, 'Entry', classMeta);
  setMetadataFor(Color_0, 'Color', classMeta, Entry);
  setMetadataFor(Simple, 'Simple', classMeta, Color_0);
  setMetadataFor(Stop, 'Stop', classMeta, Color_0);
  setMetadataFor(StopRange, 'StopRange', classMeta, Color_0);
  setMetadataFor(Hint, 'Hint', classMeta, Entry);
  setMetadataFor(ColorStopsBuilder, 'ColorStopsBuilder', classMeta, VOID, VOID, ColorStopsBuilder);
  setMetadataFor(Gradient_0, 'Gradient', interfaceMeta);
  setMetadataFor(CSSClamp, 'CSSClamp', classMeta);
  setMetadataFor(CSSUrl, 'CSSUrl', classMeta);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, VOID, [DisposableEffectResult]);
  setMetadataFor(RefCallback, 'RefCallback', classMeta);
  setMetadataFor(Simple_0, 'Simple', classMeta, RefCallback);
  setMetadataFor(Disposable, 'Disposable', classMeta, RefCallback);
  setMetadataFor(KeysToEffect, 'KeysToEffect', classMeta);
  setMetadataFor(Builder, 'Builder', classMeta, VOID, VOID, Builder);
  setMetadataFor(ElementRefScope, 'ElementRefScope', classMeta);
  setMetadataFor(Companion_22, 'Companion', objectMeta);
  setMetadataFor(GenericNamespacedElementBuilder, 'GenericNamespacedElementBuilder', classMeta, VOID, [ElementBuilder]);
  setMetadataFor(Companion_23, 'Companion', objectMeta);
  setMetadataFor(GenericElementBuilder, 'GenericElementBuilder', classMeta, VOID, [ElementBuilder]);
  setMetadataFor(Companion_24, 'Companion', objectMeta);
  setMetadataFor(SVGElementAttrsScope, 'SVGElementAttrsScope', classMeta, VOID, [AttrsScope]);
  function stroke(value) {
    return this.attr_w68641_k$('stroke', toString(value));
  }
  function stroke_0(value) {
    return this.attr_w68641_k$('stroke', value.toString());
  }
  function stroke_1(id) {
    return this.attr_w68641_k$('stroke', _SvgId___get_urlReference__impl__ehpa8t(id));
  }
  function strokeDashArray(values) {
    this.attr_w68641_k$('stroke-dasharray', joinToString_0(values, ',', VOID, VOID, VOID, VOID, PresentationAttrs$strokeDashArray$lambda));
  }
  function strokeDashArray_0(values) {
    this.attr_w68641_k$('stroke-dasharray', joinToString_0(values, ',', VOID, VOID, VOID, VOID, PresentationAttrs$strokeDashArray$lambda_0));
  }
  function strokeDashOffset(value) {
    return this.attr_w68641_k$('stroke-dashoffset', toString(value));
  }
  function strokeDashOffset_0(value) {
    return this.attr_w68641_k$('stroke-dashoffset', toString(value));
  }
  function strokeLineCap(value) {
    return this.attr_w68641_k$('stroke-linecap', value.toString());
  }
  function strokeLineJoin(value) {
    return this.attr_w68641_k$('stroke-linejoin', value.toString());
  }
  function strokeMiterLimit(value) {
    return this.attr_w68641_k$('stroke-miterlimit', toString(value));
  }
  function strokeOpacity(value) {
    return this.attr_w68641_k$('stroke-opacity', toString(value));
  }
  function strokeWidth(value) {
    return this.attr_w68641_k$('stroke-width', toString(value));
  }
  function strokeWidth_0(value) {
    return this.attr_w68641_k$('stroke-width', toString(value));
  }
  function fill(value) {
    return this.attr_w68641_k$('fill', toString(value));
  }
  function fill_0(value) {
    return this.attr_w68641_k$('fill', value.toString());
  }
  function fill_1(id) {
    return this.attr_w68641_k$('fill', _SvgId___get_urlReference__impl__ehpa8t(id));
  }
  function fillRule(value) {
    return this.attr_w68641_k$('fill-rule', value.toString());
  }
  function fillOpacity(value) {
    return this.attr_w68641_k$('fill-opacity', toString(value));
  }
  function filter(id) {
    return this.attr_w68641_k$('filter', _SvgId___get_urlReference__impl__ehpa8t(id));
  }
  function floodColor(color) {
    return this.attr_w68641_k$('flood-color', toString(color));
  }
  function floodOpacity(value) {
    return this.attr_w68641_k$('flood-opacity', toString(value));
  }
  function lightingColor(color) {
    return this.attr_w68641_k$('lighting-color', toString(color));
  }
  setMetadataFor(PresentationAttrs, 'PresentationAttrs', interfaceMeta, VOID, [AttrsScope]);
  setMetadataFor(SVGGraphicalElementAttrsScope, 'SVGGraphicalElementAttrsScope', classMeta, SVGElementAttrsScope, [SVGElementAttrsScope, PresentationAttrs]);
  function cx(value) {
    this.attr_w68641_k$('cx', toString(value));
  }
  function cx_0(value) {
    this.attr_w68641_k$('cx', toString(value));
  }
  function cy(value) {
    this.attr_w68641_k$('cy', toString(value));
  }
  function cy_0(value) {
    this.attr_w68641_k$('cy', toString(value));
  }
  setMetadataFor(CenterCoordinateAttrs, 'CenterCoordinateAttrs', interfaceMeta, VOID, [AttrsScope]);
  setMetadataFor(SVGCircleAttrsScope, 'SVGCircleAttrsScope', classMeta, SVGGraphicalElementAttrsScope, [SVGGraphicalElementAttrsScope, CenterCoordinateAttrs]);
  setMetadataFor(Companion_25, 'Companion', objectMeta);
  setMetadataFor(SVGLineAttrsScope, 'SVGLineAttrsScope', classMeta, SVGGraphicalElementAttrsScope);
  setMetadataFor(Companion_26, 'Companion', objectMeta);
  setMetadataFor(SVGContainerElementAttrsScope, 'SVGContainerElementAttrsScope', classMeta, SVGGraphicalElementAttrsScope);
  function x(value) {
    this.attr_w68641_k$('x', toString(value));
  }
  function x_0(value) {
    this.attr_w68641_k$('x', toString(value));
  }
  function y(value) {
    this.attr_w68641_k$('y', toString(value));
  }
  function y_0(value) {
    this.attr_w68641_k$('y', toString(value));
  }
  setMetadataFor(CoordinateAttrs, 'CoordinateAttrs', interfaceMeta, VOID, [AttrsScope]);
  function height(value) {
    this.attr_w68641_k$('height', toString(value));
  }
  function height_0(value) {
    this.attr_w68641_k$('height', toString(value));
  }
  function width_0(value) {
    this.attr_w68641_k$('width', toString(value));
  }
  function width_1(value) {
    this.attr_w68641_k$('width', toString(value));
  }
  setMetadataFor(LengthAttrs, 'LengthAttrs', interfaceMeta, VOID, [AttrsScope]);
  function viewBox(x, y, width, height) {
    this.attr_w68641_k$('viewBox', toString(x) + ' ' + toString(y) + ' ' + toString(width) + ' ' + toString(height));
  }
  function viewBox_0(viewBox) {
    this.viewBox_s5pn86_k$(viewBox.x_1, viewBox.y_1, viewBox.width_1, viewBox.height_1);
  }
  setMetadataFor(ViewBoxAttrs, 'ViewBoxAttrs', interfaceMeta, VOID, [AttrsScope]);
  setMetadataFor(SVGSvgAttrsScope, 'SVGSvgAttrsScope', classMeta, SVGContainerElementAttrsScope, [SVGContainerElementAttrsScope, CoordinateAttrs, LengthAttrs, ViewBoxAttrs]);
  setMetadataFor(Companion_27, 'Companion', objectMeta);
  setMetadataFor(ViewBox, 'ViewBox', classMeta);
  setMetadataFor(SVGTransformScope, 'SVGTransformScope', classMeta);
  setMetadataFor(SVGStrokeType, 'SVGStrokeType', classMeta, Enum);
  setMetadataFor(SvgId, 'SvgId', classMeta);
  setMetadataFor(SVGStrokeLineCap, 'SVGStrokeLineCap', classMeta, Enum);
  setMetadataFor(SVGStrokeLineJoin, 'SVGStrokeLineJoin', classMeta, Enum);
  setMetadataFor(SVGFillType, 'SVGFillType', classMeta, Enum);
  setMetadataFor(SVGFillRule, 'SVGFillRule', classMeta, Enum);
  setMetadataFor(Companion_28, 'Companion', objectMeta);
  setMetadataFor(SVGPathAttrsScope, 'SVGPathAttrsScope', classMeta, SVGGraphicalElementAttrsScope);
  setMetadataFor(SVGPathDataScope, 'SVGPathDataScope', classMeta);
  setMetadataFor(Companion_29, 'Companion', objectMeta);
  function points(pairs) {
    var pointString = joinToString_0(pairs, ' ', VOID, VOID, VOID, VOID, PointsAttrs$points$lambda);
    this.attr_w68641_k$('points', pointString);
  }
  setMetadataFor(PointsAttrs, 'PointsAttrs', interfaceMeta, VOID, [AttrsScope]);
  setMetadataFor(SVGPolylineAttrsScope, 'SVGPolylineAttrsScope', classMeta, SVGGraphicalElementAttrsScope, [SVGGraphicalElementAttrsScope, PointsAttrs]);
  setMetadataFor(Companion_30, 'Companion', objectMeta);
  setMetadataFor(SVGRectAttrsScope, 'SVGRectAttrsScope', classMeta, SVGGraphicalElementAttrsScope, [SVGGraphicalElementAttrsScope, CoordinateAttrs, LengthAttrs]);
  setMetadataFor(Companion_31, 'Companion', objectMeta);
  setMetadataFor(SVGGroupAttrsScope, 'SVGGroupAttrsScope', classMeta, SVGContainerElementAttrsScope);
  //endregion
  function _get_wrapped__s2ip8($this) {
    return $this.wrapped_1;
  }
  function ComparableAttrsScope_init_$Init$($this) {
    ComparableAttrsScope.call($this, new DummyAttrsScope());
    return $this;
  }
  function ComparableAttrsScope_init_$Create$() {
    return ComparableAttrsScope_init_$Init$(objectCreate(protoOf(ComparableAttrsScope)));
  }
  function ComparableAttrsScope(wrapped) {
    this.wrapped_1 = wrapped;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.attributes_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_0.classes_1 = LinkedHashSet_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_1.listeners_1 = LinkedHashSet_init_$Create$();
    this.style_1 = null;
  }
  protoOf(ComparableAttrsScope).get_attributes_dgqof4_k$ = function () {
    return this.attributes_1;
  };
  protoOf(ComparableAttrsScope).get_classes_fds01p_k$ = function () {
    return this.classes_1;
  };
  protoOf(ComparableAttrsScope).get_listeners_bn2kiy_k$ = function () {
    return this.listeners_1;
  };
  protoOf(ComparableAttrsScope).set_style_x1cred_k$ = function (_set____db54di) {
    this.style_1 = _set____db54di;
  };
  protoOf(ComparableAttrsScope).get_style_iyqetk_k$ = function () {
    return this.style_1;
  };
  protoOf(ComparableAttrsScope).attr_w68641_k$ = function (attr, value) {
    // Inline function 'kotlin.collections.set' call
    this.attributes_1.put_4fpzoq_k$(attr, value);
    this.wrapped_1.attr_w68641_k$(attr, value);
    return this;
  };
  protoOf(ComparableAttrsScope).classes_ephr7k_k$ = function (classes) {
    this.classes_1.addAll_4lagoh_k$(classes);
  };
  protoOf(ComparableAttrsScope).prop_cha5mt_k$ = function (update, value) {
    this.wrapped_1.prop_cha5mt_k$(update, value);
  };
  protoOf(ComparableAttrsScope).registerEventListener_oiyxlj_k$ = function (listener) {
    this.listeners_1.add_utx5q5_k$(listener);
    this.wrapped_1.registerEventListener_oiyxlj_k$(listener);
  };
  protoOf(ComparableAttrsScope).style_xwwy6r_k$ = function (builder) {
    var tmp0_elvis_lhs = this.style_1;
    var style = tmp0_elvis_lhs == null ? new ComparableStyleScope() : tmp0_elvis_lhs;
    builder(style);
    this.style_1 = style;
    this.wrapped_1.style_xwwy6r_k$(builder);
  };
  protoOf(ComparableAttrsScope).ref_wkg4fv_k$ = function (effect) {
    this.wrapped_1.ref_o4g25g_k$(effect);
  };
  protoOf(ComparableAttrsScope).ref_o4g25g_k$ = function (effect) {
    return this.ref_wkg4fv_k$(effect);
  };
  protoOf(ComparableAttrsScope).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof ComparableAttrsScope) {
      tmp_2 = equals(other.attributes_1, this.attributes_1);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = equals(other.classes_1, this.classes_1);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals(other.listeners_1, this.listeners_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(other.style_1, this.style_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComparableAttrsScope).hashCode = function () {
    var result = hashCode(this.attributes_1);
    result = imul(31, result) + hashCode(this.classes_1) | 0;
    result = imul(31, result) + hashCode(this.listeners_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.style_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  function DummyAttrsScope() {
  }
  protoOf(DummyAttrsScope).attr_w68641_k$ = function (attr, value) {
    return this;
  };
  protoOf(DummyAttrsScope).classes_ephr7k_k$ = function (classes) {
    return Unit_getInstance();
  };
  protoOf(DummyAttrsScope).prop_cha5mt_k$ = function (update, value) {
    return Unit_getInstance();
  };
  protoOf(DummyAttrsScope).registerEventListener_oiyxlj_k$ = function (listener) {
    return Unit_getInstance();
  };
  protoOf(DummyAttrsScope).style_xwwy6r_k$ = function (builder) {
    return Unit_getInstance();
  };
  protoOf(DummyAttrsScope).ref_wkg4fv_k$ = function (effect) {
    return Unit_getInstance();
  };
  protoOf(DummyAttrsScope).ref_o4g25g_k$ = function (effect) {
    return this.ref_wkg4fv_k$(effect);
  };
  function ariaHidden(_this__u8e3s4, value) {
    value = value === VOID ? true : value;
    _this__u8e3s4.attr_w68641_k$('aria-hidden', value.toString());
  }
  function ariaDisabled(_this__u8e3s4, value) {
    value = value === VOID ? true : value;
    _this__u8e3s4.attr_w68641_k$('aria-disabled', value.toString());
  }
  function justifyItems(_this__u8e3s4, justifyItems) {
    _this__u8e3s4.property_npxg1h_k$('justify-items', justifyItems);
  }
  function _get_value__a43j40($this) {
    return $this.value_1;
  }
  function JustifyItemsKeyword(value) {
    JustifyItems.call(this, value);
  }
  function JustifyItemsPosition(value) {
    JustifyItems.call(this, value);
  }
  function BaselineAlignment(baselineSet) {
    JustifyItems.call(this, toValue(baselineSet));
  }
  function OverflowAlignment(strategy, position) {
    JustifyItems.call(this, toValue_0(strategy, position));
  }
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).get_Normal_22avww_k$ = function () {
    return new JustifyItemsKeyword('normal');
  };
  protoOf(Companion).get_Stretch_2brthg_k$ = function () {
    return new JustifyItemsKeyword('stretch');
  };
  protoOf(Companion).get_Center_3arb0i_k$ = function () {
    return new JustifyItemsPosition('center');
  };
  protoOf(Companion).get_Start_ih4i6x_k$ = function () {
    return new JustifyItemsPosition('start');
  };
  protoOf(Companion).get_End_18ju7i_k$ = function () {
    return new JustifyItemsPosition('end');
  };
  protoOf(Companion).get_FlexStart_cfavq8_k$ = function () {
    return new JustifyItemsPosition('flex-start');
  };
  protoOf(Companion).get_FlexEnd_fz7iu1_k$ = function () {
    return new JustifyItemsPosition('flex-end');
  };
  protoOf(Companion).get_SelfStart_di8gbx_k$ = function () {
    return new JustifyItemsPosition('self-start');
  };
  protoOf(Companion).get_SelfEnd_9ir8ka_k$ = function () {
    return new JustifyItemsPosition('self-end');
  };
  protoOf(Companion).get_Left_wo5bw0_k$ = function () {
    return new JustifyItemsPosition('left');
  };
  protoOf(Companion).get_Right_igdsyb_k$ = function () {
    return new JustifyItemsPosition('right');
  };
  protoOf(Companion).get_Baseline_bu5gku_k$ = function () {
    return new BaselineAlignment(null);
  };
  protoOf(Companion).get_FirstBaseline_dztmto_k$ = function () {
    return new BaselineAlignment(BaselineSet_FIRST_getInstance());
  };
  protoOf(Companion).get_LastBaseline_ldoo6c_k$ = function () {
    return new BaselineAlignment(BaselineSet_LAST_getInstance());
  };
  protoOf(Companion).Safe_n4n8gl_k$ = function (position) {
    return new OverflowAlignment(OverflowStrategy_SAFE_getInstance(), position);
  };
  protoOf(Companion).Unsafe_kggy3o_k$ = function (position) {
    return new OverflowAlignment(OverflowStrategy_UNSAFE_getInstance(), position);
  };
  protoOf(Companion).get_Inherit_a1a9e6_k$ = function () {
    return new JustifyItemsKeyword('inherit');
  };
  protoOf(Companion).get_Initial_a0h2v9_k$ = function () {
    return new JustifyItemsKeyword('initial');
  };
  protoOf(Companion).get_Revert_3t1tzh_k$ = function () {
    return new JustifyItemsKeyword('revert');
  };
  protoOf(Companion).get_Unset_ii4mhs_k$ = function () {
    return new JustifyItemsKeyword('unset');
  };
  var Companion_instance;
  function Companion_getInstance_2() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function JustifyItems(value) {
    Companion_getInstance_2();
    this.value_1 = value;
  }
  protoOf(JustifyItems).toString = function () {
    return this.value_1;
  };
  function justifySelf(_this__u8e3s4, justifySelf) {
    _this__u8e3s4.property_npxg1h_k$('justify-self', justifySelf);
  }
  function _get_value__a43j40_0($this) {
    return $this.value_1;
  }
  function JustifySelfKeyword(value) {
    JustifySelf.call(this, value);
  }
  function JustifySelfPosition(value) {
    JustifySelf.call(this, value);
  }
  function BaselineAlignment_0(baselineSet) {
    JustifySelf.call(this, toValue(baselineSet));
  }
  function OverflowAlignment_0(strategy, position) {
    JustifySelf.call(this, toValue_0(strategy, position));
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).get_Auto_wnyn88_k$ = function () {
    return new JustifySelfKeyword('auto');
  };
  protoOf(Companion_0).get_Normal_22avww_k$ = function () {
    return new JustifySelfKeyword('normal');
  };
  protoOf(Companion_0).get_Stretch_2brthg_k$ = function () {
    return new JustifySelfKeyword('stretch');
  };
  protoOf(Companion_0).get_Center_3arb0i_k$ = function () {
    return new JustifySelfPosition('center');
  };
  protoOf(Companion_0).get_Start_ih4i6x_k$ = function () {
    return new JustifySelfPosition('start');
  };
  protoOf(Companion_0).get_End_18ju7i_k$ = function () {
    return new JustifySelfPosition('end');
  };
  protoOf(Companion_0).get_SelfStart_di8gbx_k$ = function () {
    return new JustifySelfPosition('self-start');
  };
  protoOf(Companion_0).get_SelfEnd_9ir8ka_k$ = function () {
    return new JustifySelfPosition('self-end');
  };
  protoOf(Companion_0).get_FlexStart_cfavq8_k$ = function () {
    return new JustifySelfPosition('flex-start');
  };
  protoOf(Companion_0).get_FlexEnd_fz7iu1_k$ = function () {
    return new JustifySelfPosition('flex-end');
  };
  protoOf(Companion_0).get_Left_wo5bw0_k$ = function () {
    return new JustifySelfPosition('left');
  };
  protoOf(Companion_0).get_Right_igdsyb_k$ = function () {
    return new JustifySelfPosition('right');
  };
  protoOf(Companion_0).get_Baseline_bu5gku_k$ = function () {
    return new BaselineAlignment_0(null);
  };
  protoOf(Companion_0).get_FirstBaseline_dztmto_k$ = function () {
    return new BaselineAlignment_0(BaselineSet_FIRST_getInstance());
  };
  protoOf(Companion_0).get_LastBaseline_ldoo6c_k$ = function () {
    return new BaselineAlignment_0(BaselineSet_LAST_getInstance());
  };
  protoOf(Companion_0).Safe_wxt3v1_k$ = function (position) {
    return new OverflowAlignment_0(OverflowStrategy_SAFE_getInstance(), position);
  };
  protoOf(Companion_0).Unsafe_jz6bzo_k$ = function (position) {
    return new OverflowAlignment_0(OverflowStrategy_UNSAFE_getInstance(), position);
  };
  protoOf(Companion_0).get_Inherit_a1a9e6_k$ = function () {
    return new JustifySelfKeyword('inherit');
  };
  protoOf(Companion_0).get_Initial_a0h2v9_k$ = function () {
    return new JustifySelfKeyword('initial');
  };
  protoOf(Companion_0).get_Revert_3t1tzh_k$ = function () {
    return new JustifySelfKeyword('revert');
  };
  protoOf(Companion_0).get_Unset_ii4mhs_k$ = function () {
    return new JustifySelfKeyword('unset');
  };
  var Companion_instance_0;
  function Companion_getInstance_3() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function JustifySelf(value) {
    Companion_getInstance_3();
    this.value_1 = value;
  }
  protoOf(JustifySelf).toString = function () {
    return this.value_1;
  };
  var BaselineSet_FIRST_instance;
  var BaselineSet_LAST_instance;
  function values() {
    return [BaselineSet_FIRST_getInstance(), BaselineSet_LAST_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'FIRST':
        return BaselineSet_FIRST_getInstance();
      case 'LAST':
        return BaselineSet_LAST_getInstance();
      default:
        BaselineSet_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var BaselineSet_entriesInitialized;
  function BaselineSet_initEntries() {
    if (BaselineSet_entriesInitialized)
      return Unit_getInstance();
    BaselineSet_entriesInitialized = true;
    BaselineSet_FIRST_instance = new BaselineSet('FIRST', 0);
    BaselineSet_LAST_instance = new BaselineSet('LAST', 1);
  }
  var $ENTRIES;
  function BaselineSet(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function toValue(_this__u8e3s4) {
    var self_0 = _this__u8e3s4;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.toValue.<anonymous>' call
    if (!(self_0 == null)) {
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = self_0.get_name_woqyms_k$().toLowerCase();
      this_0.append_22ad7x_k$(tmp$ret$1);
      this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(32));
    }
    this_0.append_22ad7x_k$('baseline');
    return this_0.toString();
  }
  var OverflowStrategy_SAFE_instance;
  var OverflowStrategy_UNSAFE_instance;
  function values_0() {
    return [OverflowStrategy_SAFE_getInstance(), OverflowStrategy_UNSAFE_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'SAFE':
        return OverflowStrategy_SAFE_getInstance();
      case 'UNSAFE':
        return OverflowStrategy_UNSAFE_getInstance();
      default:
        OverflowStrategy_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var OverflowStrategy_entriesInitialized;
  function OverflowStrategy_initEntries() {
    if (OverflowStrategy_entriesInitialized)
      return Unit_getInstance();
    OverflowStrategy_entriesInitialized = true;
    OverflowStrategy_SAFE_instance = new OverflowStrategy('SAFE', 0);
    OverflowStrategy_UNSAFE_instance = new OverflowStrategy('UNSAFE', 1);
  }
  var $ENTRIES_0;
  function OverflowStrategy(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function toValue_0(_this__u8e3s4, position) {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4.get_name_woqyms_k$().toLowerCase() + ' ' + position;
  }
  function BaselineSet_FIRST_getInstance() {
    BaselineSet_initEntries();
    return BaselineSet_FIRST_instance;
  }
  function BaselineSet_LAST_getInstance() {
    BaselineSet_initEntries();
    return BaselineSet_LAST_instance;
  }
  function OverflowStrategy_SAFE_getInstance() {
    OverflowStrategy_initEntries();
    return OverflowStrategy_SAFE_instance;
  }
  function OverflowStrategy_UNSAFE_getInstance() {
    OverflowStrategy_initEntries();
    return OverflowStrategy_UNSAFE_instance;
  }
  function CSSAnimation(name, duration, timingFunction, delay, iterationCount, direction, fillMode, playState) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    iterationCount = iterationCount === VOID ? null : iterationCount;
    direction = direction === VOID ? null : direction;
    fillMode = fillMode === VOID ? null : fillMode;
    playState = playState === VOID ? null : playState;
    this.name_1 = name;
    this.duration_1 = duration;
    this.timingFunction_1 = timingFunction;
    this.delay_1 = delay;
    this.iterationCount_1 = iterationCount;
    this.direction_1 = direction;
    this.fillMode_1 = fillMode;
    this.playState_1 = playState;
  }
  protoOf(CSSAnimation).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(CSSAnimation).get_duration_6a6kpp_k$ = function () {
    return this.duration_1;
  };
  protoOf(CSSAnimation).get_timingFunction_3u6rat_k$ = function () {
    return this.timingFunction_1;
  };
  protoOf(CSSAnimation).get_delay_iq7n8a_k$ = function () {
    return this.delay_1;
  };
  protoOf(CSSAnimation).get_iterationCount_v1jcn9_k$ = function () {
    return this.iterationCount_1;
  };
  protoOf(CSSAnimation).get_direction_7ekune_k$ = function () {
    return this.direction_1;
  };
  protoOf(CSSAnimation).get_fillMode_r5zfyn_k$ = function () {
    return this.fillMode_1;
  };
  protoOf(CSSAnimation).get_playState_mpwkbw_k$ = function () {
    return this.playState_1;
  };
  protoOf(CSSAnimation).toString = function () {
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.CSSAnimation.toString.<anonymous>' call
    var tmp0_safe_receiver = this.duration_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSAnimation.toString.<anonymous>.<anonymous>' call
      this_0.add_utx5q5_k$(toString(tmp0_safe_receiver));
    }
    var tmp1_safe_receiver = this.timingFunction_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSAnimation.toString.<anonymous>.<anonymous>' call
      this_0.add_utx5q5_k$(toString(tmp1_safe_receiver));
    }
    if (!(this.delay_1 == null)) {
      if (this.duration_1 == null) {
        this_0.add_utx5q5_k$('0s');
      }
      this_0.add_utx5q5_k$(toString(this.delay_1));
    }
    var tmp2_safe_receiver = this.iterationCount_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSAnimation.toString.<anonymous>.<anonymous>' call
      var it = tmp2_safe_receiver.count_1;
      this_0.add_utx5q5_k$(AnimationIterationCount__toString_impl_5t3trp(it));
    }
    var tmp3_safe_receiver = this.direction_1;
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSAnimation.toString.<anonymous>.<anonymous>' call
      this_0.add_utx5q5_k$(toString(tmp3_safe_receiver));
    }
    var tmp4_safe_receiver = this.fillMode_1;
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSAnimation.toString.<anonymous>.<anonymous>' call
      this_0.add_utx5q5_k$(toString(tmp4_safe_receiver));
    }
    var tmp5_safe_receiver = this.playState_1;
    if (tmp5_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSAnimation.toString.<anonymous>.<anonymous>' call
      this_0.add_utx5q5_k$(toString(tmp5_safe_receiver));
    }
    this_0.add_utx5q5_k$(this.name_1);
    var tmp$ret$14 = this_0.build_1k0s4u_k$();
    return joinToString(tmp$ret$14, ' ');
  };
  protoOf(CSSAnimation).component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  protoOf(CSSAnimation).component2_7eebsb_k$ = function () {
    return this.duration_1;
  };
  protoOf(CSSAnimation).component3_7eebsa_k$ = function () {
    return this.timingFunction_1;
  };
  protoOf(CSSAnimation).component4_7eebs9_k$ = function () {
    return this.delay_1;
  };
  protoOf(CSSAnimation).component5_7eebs8_k$ = function () {
    return this.iterationCount_1;
  };
  protoOf(CSSAnimation).component6_7eebs7_k$ = function () {
    return this.direction_1;
  };
  protoOf(CSSAnimation).component7_7eebs6_k$ = function () {
    return this.fillMode_1;
  };
  protoOf(CSSAnimation).component8_7eebs5_k$ = function () {
    return this.playState_1;
  };
  protoOf(CSSAnimation).copy_84w5es_k$ = function (name, duration, timingFunction, delay, iterationCount, direction, fillMode, playState) {
    return new CSSAnimation(name, duration, timingFunction, delay, iterationCount, direction, fillMode, playState);
  };
  protoOf(CSSAnimation).copy$default_mv7ex9_k$ = function (name, duration, timingFunction, delay, iterationCount, direction, fillMode, playState, $super) {
    name = name === VOID ? this.name_1 : name;
    duration = duration === VOID ? this.duration_1 : duration;
    timingFunction = timingFunction === VOID ? this.timingFunction_1 : timingFunction;
    delay = delay === VOID ? this.delay_1 : delay;
    iterationCount = iterationCount === VOID ? this.iterationCount_1 : iterationCount;
    direction = direction === VOID ? this.direction_1 : direction;
    fillMode = fillMode === VOID ? this.fillMode_1 : fillMode;
    playState = playState === VOID ? this.playState_1 : playState;
    return $super === VOID ? this.copy_84w5es_k$(name, duration, timingFunction, delay, iterationCount, direction, fillMode, playState) : $super.copy_84w5es_k$.call(this, name, duration, timingFunction, delay, iterationCount, direction, fillMode, playState);
  };
  protoOf(CSSAnimation).hashCode = function () {
    var result = getStringHashCode(this.name_1);
    result = imul(result, 31) + (this.duration_1 == null ? 0 : hashCode(this.duration_1)) | 0;
    result = imul(result, 31) + (this.timingFunction_1 == null ? 0 : hashCode(this.timingFunction_1)) | 0;
    result = imul(result, 31) + (this.delay_1 == null ? 0 : hashCode(this.delay_1)) | 0;
    result = imul(result, 31) + (this.iterationCount_1 == null ? 0 : AnimationIterationCount__hashCode_impl_rk9qkk(this.iterationCount_1.count_1)) | 0;
    result = imul(result, 31) + (this.direction_1 == null ? 0 : hashCode(this.direction_1)) | 0;
    result = imul(result, 31) + (this.fillMode_1 == null ? 0 : hashCode(this.fillMode_1)) | 0;
    result = imul(result, 31) + (this.playState_1 == null ? 0 : hashCode(this.playState_1)) | 0;
    return result;
  };
  protoOf(CSSAnimation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSAnimation))
      return false;
    var tmp0_other_with_cast = other instanceof CSSAnimation ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    if (!equals(this.duration_1, tmp0_other_with_cast.duration_1))
      return false;
    if (!equals(this.timingFunction_1, tmp0_other_with_cast.timingFunction_1))
      return false;
    if (!equals(this.delay_1, tmp0_other_with_cast.delay_1))
      return false;
    if (!equals(this.iterationCount_1, tmp0_other_with_cast.iterationCount_1))
      return false;
    if (!equals(this.direction_1, tmp0_other_with_cast.direction_1))
      return false;
    if (!equals(this.fillMode_1, tmp0_other_with_cast.fillMode_1))
      return false;
    if (!equals(this.playState_1, tmp0_other_with_cast.playState_1))
      return false;
    return true;
  };
  function _AnimationIterationCount___init__impl__ggrejh(count) {
    return count;
  }
  function _get_count__iw3m8u($this) {
    return $this;
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).of_87f8vv_k$ = function (count) {
    return _AnimationIterationCount___init__impl__ggrejh(count);
  };
  protoOf(Companion_1).get_Infinite_crqs2a_k$ = function () {
    return _AnimationIterationCount___init__impl__ggrejh(null);
  };
  var Companion_instance_1;
  function Companion_getInstance_4() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function AnimationIterationCount__toString_impl_5t3trp($this) {
    var tmp0_safe_receiver = _get_count__iw3m8u($this);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toString(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 'infinite' : tmp1_elvis_lhs;
  }
  function AnimationIterationCount__hashCode_impl_rk9qkk($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function AnimationIterationCount__equals_impl_n1qe1k($this, other) {
    if (!(other instanceof AnimationIterationCount))
      return false;
    var tmp0_other_with_cast = other instanceof AnimationIterationCount ? other.count_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function AnimationIterationCount(count) {
    Companion_getInstance_4();
    this.count_1 = count;
  }
  protoOf(AnimationIterationCount).toString = function () {
    return AnimationIterationCount__toString_impl_5t3trp(this.count_1);
  };
  protoOf(AnimationIterationCount).hashCode = function () {
    return AnimationIterationCount__hashCode_impl_rk9qkk(this.count_1);
  };
  protoOf(AnimationIterationCount).equals = function (other) {
    return AnimationIterationCount__equals_impl_n1qe1k(this.count_1, other);
  };
  function animation(_this__u8e3s4, animations) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(animations.length === 0)) {
      _this__u8e3s4.property_wcrait_k$('animation', joinToString_0(animations, ', '));
    }
  }
  function borderBottom(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    borderBottom_0(_this__u8e3s4, borderBottom$lambda(width, style, color));
  }
  function borderColor(_this__u8e3s4, color) {
    _this__u8e3s4.property_npxg1h_k$('border-color', color);
  }
  function borderColor_0(_this__u8e3s4, topBottom, leftRight) {
    var tmp;
    if (topBottom === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Color.currentColor' call
      Color_getInstance();
      tmp = Color('currentColor');
    } else {
      tmp = topBottom;
    }
    topBottom = tmp;
    var tmp_0;
    if (leftRight === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Color.currentColor' call
      Color_getInstance();
      tmp_0 = Color('currentColor');
    } else {
      tmp_0 = leftRight;
    }
    leftRight = tmp_0;
    _this__u8e3s4.property_wcrait_k$('border-color', '' + topBottom + ' ' + leftRight);
  }
  function borderColor_1(_this__u8e3s4, top, leftRight, bottom) {
    var tmp;
    if (top === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Color.currentColor' call
      Color_getInstance();
      tmp = Color('currentColor');
    } else {
      tmp = top;
    }
    top = tmp;
    var tmp_0;
    if (leftRight === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Color.currentColor' call
      Color_getInstance();
      tmp_0 = Color('currentColor');
    } else {
      tmp_0 = leftRight;
    }
    leftRight = tmp_0;
    var tmp_1;
    if (bottom === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Color.currentColor' call
      Color_getInstance();
      tmp_1 = Color('currentColor');
    } else {
      tmp_1 = bottom;
    }
    bottom = tmp_1;
    _this__u8e3s4.property_wcrait_k$('border-color', '' + top + ' ' + leftRight + ' ' + bottom);
  }
  function borderColor_2(_this__u8e3s4, top, right, bottom, left) {
    var tmp;
    if (top === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Color.currentColor' call
      Color_getInstance();
      tmp = Color('currentColor');
    } else {
      tmp = top;
    }
    top = tmp;
    var tmp_0;
    if (right === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Color.currentColor' call
      Color_getInstance();
      tmp_0 = Color('currentColor');
    } else {
      tmp_0 = right;
    }
    right = tmp_0;
    var tmp_1;
    if (bottom === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Color.currentColor' call
      Color_getInstance();
      tmp_1 = Color('currentColor');
    } else {
      tmp_1 = bottom;
    }
    bottom = tmp_1;
    var tmp_2;
    if (left === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Color.currentColor' call
      Color_getInstance();
      tmp_2 = Color('currentColor');
    } else {
      tmp_2 = left;
    }
    left = tmp_2;
    _this__u8e3s4.property_wcrait_k$('border-color', '' + top + ' ' + right + ' ' + bottom + ' ' + left);
  }
  function borderStyle(_this__u8e3s4, lineStyle) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.property_wcrait_k$('border-style', lineStyle);
  }
  function borderStyle_0(_this__u8e3s4, topBottom, leftRight) {
    var tmp;
    if (topBottom === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
      Companion_getInstance();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = 'none';
    } else {
      tmp = topBottom;
    }
    topBottom = tmp;
    var tmp_0;
    if (leftRight === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
      Companion_getInstance();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_0 = 'none';
    } else {
      tmp_0 = leftRight;
    }
    leftRight = tmp_0;
    _this__u8e3s4.property_wcrait_k$('border-style', '' + topBottom + ' ' + leftRight);
  }
  function borderStyle_1(_this__u8e3s4, top, leftRight, bottom) {
    var tmp;
    if (top === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
      Companion_getInstance();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = 'none';
    } else {
      tmp = top;
    }
    top = tmp;
    var tmp_0;
    if (leftRight === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
      Companion_getInstance();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_0 = 'none';
    } else {
      tmp_0 = leftRight;
    }
    leftRight = tmp_0;
    var tmp_1;
    if (bottom === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
      Companion_getInstance();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_1 = 'none';
    } else {
      tmp_1 = bottom;
    }
    bottom = tmp_1;
    _this__u8e3s4.property_wcrait_k$('border-style', '' + top + ' ' + leftRight + ' ' + bottom);
  }
  function borderStyle_2(_this__u8e3s4, top, right, bottom, left) {
    var tmp;
    if (top === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
      Companion_getInstance();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = 'none';
    } else {
      tmp = top;
    }
    top = tmp;
    var tmp_0;
    if (right === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
      Companion_getInstance();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_0 = 'none';
    } else {
      tmp_0 = right;
    }
    right = tmp_0;
    var tmp_1;
    if (bottom === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
      Companion_getInstance();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_1 = 'none';
    } else {
      tmp_1 = bottom;
    }
    bottom = tmp_1;
    var tmp_2;
    if (left === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
      Companion_getInstance();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_2 = 'none';
    } else {
      tmp_2 = left;
    }
    left = tmp_2;
    _this__u8e3s4.property_wcrait_k$('border-style', '' + top + ' ' + right + ' ' + bottom + ' ' + left);
  }
  function borderWidth(_this__u8e3s4, width) {
    _this__u8e3s4.property_npxg1h_k$('border-width', width);
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
    _this__u8e3s4.property_npxg1h_k$('border-bottom', this_0);
  }
  function borderTop_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBorder();
    // Inline function 'kotlin.contracts.contract' call
    borderBuild(this_0);
    _this__u8e3s4.property_npxg1h_k$('border-top', this_0);
  }
  function borderLeft_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBorder();
    // Inline function 'kotlin.contracts.contract' call
    borderBuild(this_0);
    _this__u8e3s4.property_npxg1h_k$('border-left', this_0);
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
      return Unit_getInstance();
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
      return Unit_getInstance();
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
      return Unit_getInstance();
    };
  }
  function _get_value__a43j40_1($this) {
    return $this.value_1;
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  protoOf(Companion_2).get_BorderBox_q3yb4a_k$ = function () {
    return new BoxSizing('border-box');
  };
  protoOf(Companion_2).get_ContentBox_h63h2z_k$ = function () {
    return new BoxSizing('content-box');
  };
  protoOf(Companion_2).get_Inherit_a1a9e6_k$ = function () {
    return new BoxSizing('inherit');
  };
  protoOf(Companion_2).get_Initial_a0h2v9_k$ = function () {
    return new BoxSizing('initial');
  };
  protoOf(Companion_2).get_Revert_3t1tzh_k$ = function () {
    return new BoxSizing('revert');
  };
  protoOf(Companion_2).get_Unset_ii4mhs_k$ = function () {
    return new BoxSizing('unset');
  };
  var Companion_instance_2;
  function Companion_getInstance_5() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function BoxSizing(value) {
    Companion_getInstance_5();
    this.value_1 = value;
  }
  protoOf(BoxSizing).toString = function () {
    return this.value_1;
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
      this_0.append_22ad7x_k$('inset');
      this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(32));
    }
    this_0.append_t8pm91_k$(offsetX);
    this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(32));
    this_0.append_t8pm91_k$(offsetY);
    if (!(blurRadius == null)) {
      this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(32));
      this_0.append_t8pm91_k$(blurRadius);
    }
    if (!(spreadRadius == null)) {
      if (blurRadius == null) {
        this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(32));
        this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(48));
      }
      this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(32));
      this_0.append_t8pm91_k$(spreadRadius);
    }
    if (!(color == null)) {
      this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(32));
      this_0.append_t8pm91_k$(color);
    }
    var tmp$ret$1 = this_0.toString();
    boxShadow_0(_this__u8e3s4, tmp$ret$1);
  }
  function boxSizing_0(_this__u8e3s4, boxSizing_0) {
    boxSizing(_this__u8e3s4, boxSizing_0.toString());
  }
  function boxShadow_0(_this__u8e3s4, value) {
    _this__u8e3s4.property_wcrait_k$('box-shadow', value);
  }
  function toDegrees(_this__u8e3s4) {
    var tmp;
    switch (toString(_this__u8e3s4.unit)) {
      case 'deg':
        tmp = _this__u8e3s4.value;
        break;
      case 'grad':
        tmp = _this__u8e3s4.value * 0.9;
        break;
      case 'rad':
        tmp = _this__u8e3s4.value * 180.0 / get_PI();
        break;
      case 'turn':
        tmp = _this__u8e3s4.value * 360.0;
        break;
      default:
        var message = 'Unexpected unit type ' + _this__u8e3s4.unit;
        throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp % 360.0;
  }
  function ComparableStyleScope() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.properties_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.variables_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(ComparableStyleScope).get_properties_zhllqc_k$ = function () {
    return this.properties_1;
  };
  protoOf(ComparableStyleScope).get_variables_75f0zy_k$ = function () {
    return this.variables_1;
  };
  protoOf(ComparableStyleScope).property_npxg1h_k$ = function (propertyName, value) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.properties_1;
    var value_0 = toString(value);
    this_0.put_4fpzoq_k$(propertyName, value_0);
  };
  protoOf(ComparableStyleScope).variable_px6kuc_k$ = function (variableName, value) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.variables_1;
    var value_0 = toString(value);
    this_0.put_4fpzoq_k$(variableName, value_0);
  };
  protoOf(ComparableStyleScope).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof ComparableStyleScope) {
      tmp_0 = equals(this.properties_1, other.properties_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.variables_1, other.variables_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComparableStyleScope).hashCode = function () {
    var result = hashCode(this.properties_1);
    result = imul(31, result) + hashCode(this.variables_1) | 0;
    return result;
  };
  function isNotEmpty(_this__u8e3s4) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!_this__u8e3s4.properties_1.isEmpty_y1axqb_k$()) {
      tmp = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp = !_this__u8e3s4.variables_1.isEmpty_y1axqb_k$();
    }
    return tmp;
  }
  function _get_value__a43j40_2($this) {
    return $this.value_1;
  }
  function Companion_3() {
    Companion_instance_3 = this;
  }
  protoOf(Companion_3).get_Auto_wnyn88_k$ = function () {
    return new Cursor('auto');
  };
  protoOf(Companion_3).get_Default_goqax4_k$ = function () {
    return new Cursor('default');
  };
  protoOf(Companion_3).get_None_wo6tgh_k$ = function () {
    return new Cursor('none');
  };
  protoOf(Companion_3).get_ContextMenu_v99p0b_k$ = function () {
    return new Cursor('context-menu');
  };
  protoOf(Companion_3).get_Help_wo2s2y_k$ = function () {
    return new Cursor('help');
  };
  protoOf(Companion_3).get_Pointer_m64vg4_k$ = function () {
    return new Cursor('pointer');
  };
  protoOf(Companion_3).get_Progress_nqna52_k$ = function () {
    return new Cursor('progress');
  };
  protoOf(Companion_3).get_Wait_woc9um_k$ = function () {
    return new Cursor('wait');
  };
  protoOf(Companion_3).get_Cell_wnzl57_k$ = function () {
    return new Cursor('cell');
  };
  protoOf(Companion_3).get_Crosshair_69627b_k$ = function () {
    return new Cursor('crosshair');
  };
  protoOf(Companion_3).get_Text_woag7q_k$ = function () {
    return new Cursor('text');
  };
  protoOf(Companion_3).get_VerticalText_6nu4a4_k$ = function () {
    return new Cursor('vertical-text');
  };
  protoOf(Companion_3).get_Alias_i73953_k$ = function () {
    return new Cursor('alias');
  };
  protoOf(Companion_3).get_Copy_wnzsny_k$ = function () {
    return new Cursor('copy');
  };
  protoOf(Companion_3).get_Move_wo66nu_k$ = function () {
    return new Cursor('move');
  };
  protoOf(Companion_3).get_NoDrop_21hmk9_k$ = function () {
    return new Cursor('no-drop');
  };
  protoOf(Companion_3).get_NotAllowed_mobp4y_k$ = function () {
    return new Cursor('not-allowed');
  };
  protoOf(Companion_3).get_Grab_wo2egl_k$ = function () {
    return new Cursor('grab');
  };
  protoOf(Companion_3).get_Grabbing_taamx7_k$ = function () {
    return new Cursor('grabbing');
  };
  protoOf(Companion_3).get_AllScroll_y9eih1_k$ = function () {
    return new Cursor('all-scroll');
  };
  protoOf(Companion_3).get_ColumnResize_w27e5_k$ = function () {
    return new Cursor('col-resize');
  };
  protoOf(Companion_3).get_RowResize_dbunq3_k$ = function () {
    return new Cursor('row-resize');
  };
  protoOf(Companion_3).get_NResize_kz2xjb_k$ = function () {
    return new Cursor('n-resize');
  };
  protoOf(Companion_3).get_NeResize_pdt3gs_k$ = function () {
    return new Cursor('ne-resize');
  };
  protoOf(Companion_3).get_EResize_b0fdlc_k$ = function () {
    return new Cursor('e-resize');
  };
  protoOf(Companion_3).get_SeResize_nbwu41_k$ = function () {
    return new Cursor('se-resize');
  };
  protoOf(Companion_3).get_SResize_im7kea_k$ = function () {
    return new Cursor('s-resize');
  };
  protoOf(Companion_3).get_SwResize_rrw3z5_k$ = function () {
    return new Cursor('sw-resize');
  };
  protoOf(Companion_3).get_WResize_uxqhha_k$ = function () {
    return new Cursor('w-resize');
  };
  protoOf(Companion_3).get_NwResize_ppzume_k$ = function () {
    return new Cursor('nw-resize');
  };
  protoOf(Companion_3).get_EwResize_kla901_k$ = function () {
    return new Cursor('ew-resize');
  };
  protoOf(Companion_3).get_NsResize_wzla9q_k$ = function () {
    return new Cursor('ns-resize');
  };
  protoOf(Companion_3).get_NeswResize_x625qw_k$ = function () {
    return new Cursor('nesw-resize');
  };
  protoOf(Companion_3).get_NwseResize_c95994_k$ = function () {
    return new Cursor('nwse-resize');
  };
  protoOf(Companion_3).get_ZoomIn_7qsf41_k$ = function () {
    return new Cursor('zoom-in');
  };
  protoOf(Companion_3).get_ZoomOut_qz4z8y_k$ = function () {
    return new Cursor('zoom-out');
  };
  protoOf(Companion_3).get_Inherit_a1a9e6_k$ = function () {
    return new Cursor('inherit');
  };
  protoOf(Companion_3).get_Initial_a0h2v9_k$ = function () {
    return new Cursor('initial');
  };
  protoOf(Companion_3).get_Revert_3t1tzh_k$ = function () {
    return new Cursor('revert');
  };
  protoOf(Companion_3).get_Unset_ii4mhs_k$ = function () {
    return new Cursor('unset');
  };
  var Companion_instance_3;
  function Companion_getInstance_6() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function Cursor(value) {
    Companion_getInstance_6();
    this.value_1 = value;
  }
  protoOf(Cursor).toString = function () {
    return this.value_1;
  };
  function cursor(_this__u8e3s4, cursor) {
    _this__u8e3s4.property_npxg1h_k$('cursor', cursor);
  }
  function _get_value__a43j40_3($this) {
    return $this.value_1;
  }
  function Companion_4() {
    Companion_instance_4 = this;
  }
  protoOf(Companion_4).get_None_wo6tgh_k$ = function () {
    return new Appearance('none');
  };
  protoOf(Companion_4).get_Auto_wnyn88_k$ = function () {
    return new Appearance('auto');
  };
  protoOf(Companion_4).get_MenuListButton_l4aue0_k$ = function () {
    return new Appearance('menulist-button');
  };
  protoOf(Companion_4).get_TextField_o3y610_k$ = function () {
    return new Appearance('textfield');
  };
  protoOf(Companion_4).get_Inherit_a1a9e6_k$ = function () {
    return new Appearance('inherit');
  };
  protoOf(Companion_4).get_Initial_a0h2v9_k$ = function () {
    return new Appearance('initial');
  };
  protoOf(Companion_4).get_Revert_3t1tzh_k$ = function () {
    return new Appearance('revert');
  };
  protoOf(Companion_4).get_Unset_ii4mhs_k$ = function () {
    return new Appearance('unset');
  };
  var Companion_instance_4;
  function Companion_getInstance_7() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function Appearance(value) {
    Companion_getInstance_7();
    this.value_1 = value;
  }
  protoOf(Appearance).toString = function () {
    return this.value_1;
  };
  function appearance(_this__u8e3s4, appearance) {
    _this__u8e3s4.property_npxg1h_k$('appearance', appearance);
  }
  function _get_value__a43j40_4($this) {
    return $this.value_1;
  }
  function Companion_5() {
    Companion_instance_5 = this;
  }
  protoOf(Companion_5).get_Thin_woai2q_k$ = function () {
    return new FontWeight('100');
  };
  protoOf(Companion_5).get_ExtraLight_ov7yxb_k$ = function () {
    return new FontWeight('200');
  };
  protoOf(Companion_5).get_Light_id31e5_k$ = function () {
    return new FontWeight('300');
  };
  protoOf(Companion_5).get_Medium_1fiba6_k$ = function () {
    return new FontWeight('500');
  };
  protoOf(Companion_5).get_SemiBold_aid1c4_k$ = function () {
    return new FontWeight('600');
  };
  protoOf(Companion_5).get_ExtraBold_xklwd0_k$ = function () {
    return new FontWeight('800');
  };
  protoOf(Companion_5).get_Black_i7mvue_k$ = function () {
    return new FontWeight('900');
  };
  protoOf(Companion_5).get_ExtraBlack_oprtdk_k$ = function () {
    return new FontWeight('950');
  };
  protoOf(Companion_5).get_Normal_22avww_k$ = function () {
    return new FontWeight('normal');
  };
  protoOf(Companion_5).get_Bold_wnz5ke_k$ = function () {
    return new FontWeight('bold');
  };
  protoOf(Companion_5).get_Lighter_vm6n22_k$ = function () {
    return new FontWeight('lighter');
  };
  protoOf(Companion_5).get_Bolder_3mclb9_k$ = function () {
    return new FontWeight('bolder');
  };
  protoOf(Companion_5).get_Inherit_a1a9e6_k$ = function () {
    return new FontWeight('inherit');
  };
  protoOf(Companion_5).get_Initial_a0h2v9_k$ = function () {
    return new FontWeight('initial');
  };
  protoOf(Companion_5).get_Revert_3t1tzh_k$ = function () {
    return new FontWeight('revert');
  };
  protoOf(Companion_5).get_Unset_ii4mhs_k$ = function () {
    return new FontWeight('unset');
  };
  var Companion_instance_5;
  function Companion_getInstance_8() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function FontWeight(value) {
    Companion_getInstance_8();
    this.value_1 = value;
  }
  protoOf(FontWeight).toString = function () {
    return this.value_1;
  };
  function fontWeight(_this__u8e3s4, weight) {
    _this__u8e3s4.property_npxg1h_k$('font-weight', weight);
  }
  function GridTrackBuilder() {
    GridTrackBuilderInRepeat.call(this);
  }
  protoOf(GridTrackBuilder).repeat_n9ti1_k$ = function (count, block) {
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    var this_1 = this_0.tracks_1;
    var repeatTracks = copyToArray(this_1);
    this.tracks_1.add_utx5q5_k$(Companion_getInstance_10().repeat_1fs2oe_k$(count, repeatTracks.slice()));
  };
  protoOf(GridTrackBuilder).repeat_x8tdgb_k$ = function (type, block) {
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    var this_1 = this_0.tracks_1;
    var repeatTracks = copyToArray(this_1);
    this.tracks_1.add_utx5q5_k$(Companion_getInstance_10().repeat_lz16g6_k$(type, repeatTracks.slice()));
  };
  function GridTrackBuilderInRepeat() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.tracks_1 = ArrayList_init_$Create$();
  }
  protoOf(GridTrackBuilderInRepeat).get_auto_woj2t4_k$ = function () {
    return Companion_getInstance_9().get_Auto_wnyn88_k$();
  };
  protoOf(GridTrackBuilderInRepeat).get_minContent_f65gog_k$ = function () {
    return Companion_getInstance_9().get_MinContent_hspenk_k$();
  };
  protoOf(GridTrackBuilderInRepeat).get_maxContent_ez72f2_k$ = function () {
    return Companion_getInstance_9().get_MaxContent_n32482_k$();
  };
  protoOf(GridTrackBuilderInRepeat).get_autoFit_9f9csn_k$ = function () {
    return Type_AutoFit_getInstance();
  };
  protoOf(GridTrackBuilderInRepeat).get_autoFill_80lsv9_k$ = function () {
    return Type_AutoFill_getInstance();
  };
  protoOf(GridTrackBuilderInRepeat).get_tracks_k3cuq9_k$ = function () {
    return this.tracks_1;
  };
  protoOf(GridTrackBuilderInRepeat).size_azcpvi_k$ = function (track) {
    this.tracks_1.add_utx5q5_k$(track);
  };
  protoOf(GridTrackBuilderInRepeat).size_n8bj0z_k$ = function (value) {
    return this.size_azcpvi_k$(Companion_getInstance_9().invoke_wfll5y_k$(value));
  };
  protoOf(GridTrackBuilderInRepeat).size_q03g6h_k$ = function (value) {
    return this.size_azcpvi_k$(Companion_getInstance_9().invoke_3uf9u8_k$(value));
  };
  protoOf(GridTrackBuilderInRepeat).fitContent_8jd78m_k$ = function (value) {
    return this.size_azcpvi_k$(Companion_getInstance_9().fitContent_vrn1yu_k$(value));
  };
  protoOf(GridTrackBuilderInRepeat).minmax_msesvw_k$ = function (min, max) {
    return this.size_azcpvi_k$(Companion_getInstance_9().minmax_mdatpo_k$(min, max));
  };
  protoOf(GridTrackBuilderInRepeat).minmax_el7xbs_k$ = function (min, max) {
    return this.size_azcpvi_k$(Companion_getInstance_9().minmax_mdatpo_k$(min, max));
  };
  protoOf(GridTrackBuilderInRepeat).minmax_9paic1_k$ = function (min, max) {
    return this.minmax_msesvw_k$(min, Companion_getInstance_9().invoke_3uf9u8_k$(max));
  };
  protoOf(GridTrackBuilderInRepeat).minmax_labs7t_k$ = function (min, max) {
    return this.minmax_msesvw_k$(min, Companion_getInstance_9().invoke_wfll5y_k$(max));
  };
  protoOf(GridTrackBuilderInRepeat).minmax_npodc9_k$ = function (min, max) {
    return this.minmax_el7xbs_k$(Companion_getInstance_9().invoke_wfll5y_k$(min), max);
  };
  protoOf(GridTrackBuilderInRepeat).minmax_fxpgw2_k$ = function (min, max) {
    return this.minmax_el7xbs_k$(Companion_getInstance_9().invoke_wfll5y_k$(min), Companion_getInstance_9().invoke_wfll5y_k$(max));
  };
  protoOf(GridTrackBuilderInRepeat).minmax_1ha38s_k$ = function (min, max) {
    return this.minmax_el7xbs_k$(Companion_getInstance_9().invoke_wfll5y_k$(min), Companion_getInstance_9().invoke_3uf9u8_k$(max));
  };
  protoOf(GridTrackBuilderInRepeat).lineNames_ii8gtg_k$ = function (names) {
    this.tracks_1.add_utx5q5_k$(Companion_getInstance_10().lineNames_npjmfo_k$(names.slice()));
  };
  function FitContent(value) {
    TrackSize.call(this, 'fit-content(' + value + ')');
  }
  function MinMax(min, max) {
    TrackSize.call(this, 'minmax(' + min + ', ' + max + ')');
    this.min_1 = min;
    this.max_1 = max;
  }
  protoOf(MinMax).get_min_18j0nr_k$ = function () {
    return this.min_1;
  };
  protoOf(MinMax).get_max_18j0ud_k$ = function () {
    return this.max_1;
  };
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
  function Companion_6() {
    Companion_instance_6 = this;
  }
  protoOf(Companion_6).get_Auto_wnyn88_k$ = function () {
    return new Keyword('auto');
  };
  protoOf(Companion_6).get_MinContent_hspenk_k$ = function () {
    return new Keyword('min-content');
  };
  protoOf(Companion_6).get_MaxContent_n32482_k$ = function () {
    return new Keyword('max-content');
  };
  protoOf(Companion_6).invoke_wfll5y_k$ = function (value) {
    return new Fixed(value);
  };
  protoOf(Companion_6).invoke_3uf9u8_k$ = function (value) {
    return new Flex(value);
  };
  protoOf(Companion_6).minmax_mdatpo_k$ = function (min, max) {
    return new MinMax(min, max);
  };
  protoOf(Companion_6).fitContent_vrn1yu_k$ = function (value) {
    return new FitContent(value);
  };
  var Companion_instance_6;
  function Companion_getInstance_9() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function _get_value__a43j40_5($this) {
    return $this.value_1;
  }
  var Type_AutoFill_instance;
  var Type_AutoFit_instance;
  function values_1() {
    return [Type_AutoFill_getInstance(), Type_AutoFit_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'AutoFill':
        return Type_AutoFill_getInstance();
      case 'AutoFit':
        return Type_AutoFit_getInstance();
      default:
        Type_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
  }
  var Type_entriesInitialized;
  function Type_initEntries() {
    if (Type_entriesInitialized)
      return Unit_getInstance();
    Type_entriesInitialized = true;
    Type_AutoFill_instance = new Type('AutoFill', 0, 'auto-fill');
    Type_AutoFit_instance = new Type('AutoFit', 1, 'auto-fit');
  }
  var $ENTRIES_1;
  function Type(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.value_1 = value;
  }
  protoOf(Type).toString = function () {
    return this.value_1;
  };
  function Type_AutoFill_getInstance() {
    Type_initEntries();
    return Type_AutoFill_instance;
  }
  function Type_AutoFit_getInstance() {
    Type_initEntries();
    return Type_AutoFit_instance;
  }
  function Track(count, entries) {
    Repeat.call(this, count, entries);
  }
  function Auto(type, entries) {
    Repeat.call(this, type, entries);
  }
  function _get_value__a43j40_6($this) {
    return $this.value_1;
  }
  function TrackSize(value) {
    Companion_getInstance_9();
    GridEntry.call(this, value);
  }
  function Repeat(value, entries) {
    GridEntry.call(this, 'repeat(' + toString(value) + ', ' + toTrackListString(entries) + ')');
    this.entries_1 = entries;
  }
  protoOf(Repeat).get_entries_p20ztl_k$ = function () {
    return this.entries_1;
  };
  function LineNames(names) {
    GridEntry.call(this, joinToString_0(names, ' ', '[', ']'));
    this.names_1 = names;
  }
  protoOf(LineNames).get_names_ivn21r_k$ = function () {
    return this.names_1;
  };
  function Companion_7() {
    Companion_instance_7 = this;
  }
  protoOf(Companion_7).repeat_1fs2oe_k$ = function (count, entries) {
    return new Track(count, entries.slice());
  };
  protoOf(Companion_7).repeat_lz16g6_k$ = function (type, entries) {
    return new Auto(type, entries.slice());
  };
  protoOf(Companion_7).lineNames_npjmfo_k$ = function (names) {
    return new LineNames(names.slice());
  };
  var Companion_instance_7;
  function Companion_getInstance_10() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function GridEntry(value) {
    Companion_getInstance_10();
    this.value_1 = value;
  }
  protoOf(GridEntry).toString = function () {
    return this.value_1;
  };
  function gridTemplateColumns_0(_this__u8e3s4, block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    gridTemplateColumns(_this__u8e3s4, toTrackListString_0(this_0.tracks_1));
  }
  function gridTemplateRows_0(_this__u8e3s4, block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    gridTemplateRows(_this__u8e3s4, toTrackListString_0(this_0.tracks_1));
  }
  function GridDslMarker() {
  }
  protoOf(GridDslMarker).equals = function (other) {
    if (!(other instanceof GridDslMarker))
      return false;
    other instanceof GridDslMarker || THROW_CCE();
    return true;
  };
  protoOf(GridDslMarker).hashCode = function () {
    return 0;
  };
  protoOf(GridDslMarker).toString = function () {
    return '@com.varabyte.kobweb.compose.css.GridDslMarker()';
  };
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
        var this_0 = prev.names_1;
        var elements = element.names_1;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$2 = this_0.concat(elements);
        acc.set_82063s_k$(tmp_0, new LineNames(tmp$ret$2.slice()));
      } else {
        acc.add_utx5q5_k$(element);
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
            var this_0 = element.entries_1;
            var destination_0 = ArrayList_init_$Create$();
            var inductionVariable_0 = 0;
            var last_0 = this_0.length;
            while (inductionVariable_0 < last_0) {
              var element_0 = this_0[inductionVariable_0];
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              if (element_0 instanceof TrackSize) {
                destination_0.add_utx5q5_k$(element_0);
              }
            }
            var tmp_0;
            if (destination_0.isEmpty_y1axqb_k$()) {
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
    if (!!trackSizes.isEmpty_y1axqb_k$()) {
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
      return Unit_getInstance();
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(autoRepeatCount === 1)) {
      // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>' call
      var message_1 = 'Only one auto-repeat call is allowed per track list';
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = trackSizes.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element_2 = tmp0_iterator.next_20eer_k$();
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
                var tmp_2 = element_2.min_1;
                if (tmp_2 instanceof Fixed) {
                  tmp_1 = true;
                } else {
                  var tmp_3 = element_2.max_1;
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
    this_0.buildInto_bd9p49_k$(_this__u8e3s4);
  }
  function GridBuilder() {
    GridBuilderInAuto.call(this);
  }
  protoOf(GridBuilder).auto_9oitg_k$ = function (block) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new GridBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    tmp.autoBuilder_1 = this_0;
  };
  function GridBuilderInAuto() {
    this.columns_1 = null;
    this.rows_1 = null;
    this.autoBuilder_1 = null;
  }
  protoOf(GridBuilderInAuto).set_columns_gc9ooa_k$ = function (_set____db54di) {
    this.columns_1 = _set____db54di;
  };
  protoOf(GridBuilderInAuto).get_columns_gyzrhw_k$ = function () {
    return this.columns_1;
  };
  protoOf(GridBuilderInAuto).set_rows_8edm7g_k$ = function (_set____db54di) {
    this.rows_1 = _set____db54di;
  };
  protoOf(GridBuilderInAuto).get_rows_wott7m_k$ = function () {
    return this.rows_1;
  };
  protoOf(GridBuilderInAuto).set_autoBuilder_13371t_k$ = function (_set____db54di) {
    this.autoBuilder_1 = _set____db54di;
  };
  protoOf(GridBuilderInAuto).get_autoBuilder_5aiikd_k$ = function () {
    return this.autoBuilder_1;
  };
  protoOf(GridBuilderInAuto).columns_o4h109_k$ = function (block) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    tmp.columns_1 = this_0.tracks_1;
  };
  protoOf(GridBuilderInAuto).rows_c0wtyb_k$ = function (block) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    tmp.rows_1 = this_0.tracks_1;
  };
  protoOf(GridBuilderInAuto).buildInto_bd9p49_k$ = function (scope) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Grid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display(scope, 'grid');
    var tmp0_safe_receiver = this.columns_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      gridTemplateColumns(scope, toTrackListString_0(tmp0_safe_receiver));
    }
    var tmp1_safe_receiver = this.rows_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      gridTemplateRows(scope, toTrackListString_0(tmp1_safe_receiver));
    }
    var tmp2_safe_receiver = this.autoBuilder_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.GridBuilderInAuto.buildInto.<anonymous>' call
      var tmp0_safe_receiver_0 = tmp2_safe_receiver.columns_1;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        gridAutoColumns(scope, toTrackListString_0(tmp0_safe_receiver_0));
      }
      var tmp1_safe_receiver_0 = tmp2_safe_receiver.rows_1;
      var tmp;
      if (tmp1_safe_receiver_0 == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        gridAutoRows(scope, toTrackListString_0(tmp1_safe_receiver_0));
        tmp = Unit_getInstance();
      }
    }
  };
  function _get_value__a43j40_7($this) {
    return $this.value_1;
  }
  function Companion_8() {
    Companion_instance_8 = this;
  }
  protoOf(Companion_8).get_Baseline_bu5gku_k$ = function () {
    return new VerticalAlign('baseline');
  };
  protoOf(Companion_8).get_Sub_18jjnt_k$ = function () {
    return new VerticalAlign('sub');
  };
  protoOf(Companion_8).get_Super_ih5fzm_k$ = function () {
    return new VerticalAlign('super');
  };
  protoOf(Companion_8).get_TextTop_5chtr3_k$ = function () {
    return new VerticalAlign('text-top');
  };
  protoOf(Companion_8).get_TextBottom_zaoo69_k$ = function () {
    return new VerticalAlign('text-bottom');
  };
  protoOf(Companion_8).get_Middle_1hpdq6_k$ = function () {
    return new VerticalAlign('middle');
  };
  protoOf(Companion_8).get_Top_18jj1w_k$ = function () {
    return new VerticalAlign('top');
  };
  protoOf(Companion_8).get_Bottom_3m75bg_k$ = function () {
    return new VerticalAlign('bottom');
  };
  protoOf(Companion_8).get_Inherit_a1a9e6_k$ = function () {
    return new VerticalAlign('inherit');
  };
  protoOf(Companion_8).get_Initial_a0h2v9_k$ = function () {
    return new VerticalAlign('initial');
  };
  protoOf(Companion_8).get_Revert_3t1tzh_k$ = function () {
    return new VerticalAlign('revert');
  };
  protoOf(Companion_8).get_Unset_ii4mhs_k$ = function () {
    return new VerticalAlign('unset');
  };
  var Companion_instance_8;
  function Companion_getInstance_11() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function VerticalAlign(value) {
    Companion_getInstance_11();
    this.value_1 = value;
  }
  protoOf(VerticalAlign).toString = function () {
    return this.value_1;
  };
  function verticalAlign(_this__u8e3s4, verticalAlign) {
    _this__u8e3s4.property_npxg1h_k$('vertical-align', verticalAlign);
  }
  function paddingInline(_this__u8e3s4, value) {
    _this__u8e3s4.property_wcrait_k$('padding-inline', joinToString_0(value, ' '));
  }
  function marginBlock(_this__u8e3s4, value) {
    _this__u8e3s4.property_wcrait_k$('margin-block', joinToString_0(value, ' '));
  }
  function marginInline(_this__u8e3s4, value) {
    _this__u8e3s4.property_wcrait_k$('margin-inline', joinToString_0(value, ' '));
  }
  function _get_value__a43j40_8($this) {
    return $this.value_1;
  }
  function Companion_9() {
    Companion_instance_9 = this;
  }
  protoOf(Companion_9).of_5gnbr7_k$ = function (text) {
    return new ListStyleType(wrapQuotesIfNecessary(text));
  };
  protoOf(Companion_9).get_ArabicIndic_7dczms_k$ = function () {
    return new ListStyleType('arabic-indic');
  };
  protoOf(Companion_9).get_Armenian_glp6oq_k$ = function () {
    return new ListStyleType('armenian');
  };
  protoOf(Companion_9).get_Bengali_p42yft_k$ = function () {
    return new ListStyleType('bengali');
  };
  protoOf(Companion_9).get_Cambodian_yjaltx_k$ = function () {
    return new ListStyleType('cambodian');
  };
  protoOf(Companion_9).get_Circle_38hx53_k$ = function () {
    return new ListStyleType('circle');
  };
  protoOf(Companion_9).get_CjkDecimal_eqj52u_k$ = function () {
    return new ListStyleType('cjk-decimal');
  };
  protoOf(Companion_9).get_CjkEarthlyBranch_kcpnsy_k$ = function () {
    return new ListStyleType('cjk-earthly-branch');
  };
  protoOf(Companion_9).get_CjkHeavenlyStem_v60yes_k$ = function () {
    return new ListStyleType('cjk-heavenly-stem');
  };
  protoOf(Companion_9).get_CjkIdeographic_325ofc_k$ = function () {
    return new ListStyleType('cjk-ideographic');
  };
  protoOf(Companion_9).get_Decimal_gq8r08_k$ = function () {
    return new ListStyleType('decimal');
  };
  protoOf(Companion_9).get_DecimalLeadingZero_5q6aue_k$ = function () {
    return new ListStyleType('decimal-leading-zero');
  };
  protoOf(Companion_9).get_Devanagari_fiqhev_k$ = function () {
    return new ListStyleType('devanagari');
  };
  protoOf(Companion_9).get_Disc_wo0b9a_k$ = function () {
    return new ListStyleType('disc');
  };
  protoOf(Companion_9).get_DisclosureClosed_juf1pa_k$ = function () {
    return new ListStyleType('disclosure-closed');
  };
  protoOf(Companion_9).get_DisclosureOpen_l759fk_k$ = function () {
    return new ListStyleType('disclosure-open');
  };
  protoOf(Companion_9).get_Georgian_4lk93_k$ = function () {
    return new ListStyleType('georgian');
  };
  protoOf(Companion_9).get_Gujarati_j012pe_k$ = function () {
    return new ListStyleType('gujarati');
  };
  protoOf(Companion_9).get_Gurumukhi_5jh3xm_k$ = function () {
    return new ListStyleType('gurumukhi');
  };
  protoOf(Companion_9).get_Hebrew_xqwd4_k$ = function () {
    return new ListStyleType('hebrew');
  };
  protoOf(Companion_9).get_Hiragana_hja76u_k$ = function () {
    return new ListStyleType('hiragana');
  };
  protoOf(Companion_9).get_HiraganaIroha_z3xrq1_k$ = function () {
    return new ListStyleType('hiragana-iroha');
  };
  protoOf(Companion_9).get_JapaneseFormal_srlfzd_k$ = function () {
    return new ListStyleType('japanese-formal');
  };
  protoOf(Companion_9).get_JapaneseInformal_8qufwu_k$ = function () {
    return new ListStyleType('japanese-informal');
  };
  protoOf(Companion_9).get_Kannada_d9ddmn_k$ = function () {
    return new ListStyleType('kannada');
  };
  protoOf(Companion_9).get_Katakana_cguuob_k$ = function () {
    return new ListStyleType('katakana');
  };
  protoOf(Companion_9).get_KatakanaIroha_xgvh3q_k$ = function () {
    return new ListStyleType('katakana-iroha');
  };
  protoOf(Companion_9).get_Khmer_iciq6s_k$ = function () {
    return new ListStyleType('khmer');
  };
  protoOf(Companion_9).get_KoreanHangulFormal_rvp4md_k$ = function () {
    return new ListStyleType('korean-hangul-formal');
  };
  protoOf(Companion_9).get_KoreanHanjaFormal_xdca1e_k$ = function () {
    return new ListStyleType('korean-hanja-formal');
  };
  protoOf(Companion_9).get_KoreanHanjaInformal_vycz4j_k$ = function () {
    return new ListStyleType('korean-hanja-informal');
  };
  protoOf(Companion_9).get_Lao_18jpbj_k$ = function () {
    return new ListStyleType('lao');
  };
  protoOf(Companion_9).get_LowerAlpha_wmhyme_k$ = function () {
    return new ListStyleType('lower-alpha');
  };
  protoOf(Companion_9).get_LowerArmenian_u6eqrt_k$ = function () {
    return new ListStyleType('lower-armenian');
  };
  protoOf(Companion_9).get_LowerGreek_wpwbvs_k$ = function () {
    return new ListStyleType('lower-greek');
  };
  protoOf(Companion_9).get_LowerLatin_wscrak_k$ = function () {
    return new ListStyleType('lower-latin');
  };
  protoOf(Companion_9).get_LowerRoman_wvwbad_k$ = function () {
    return new ListStyleType('lower-roman');
  };
  protoOf(Companion_9).get_Malayalam_4qmsf2_k$ = function () {
    return new ListStyleType('malayalam');
  };
  protoOf(Companion_9).get_Mongolian_e4gexh_k$ = function () {
    return new ListStyleType('mongolian');
  };
  protoOf(Companion_9).get_Myanmar_h909b8_k$ = function () {
    return new ListStyleType('myanmar');
  };
  protoOf(Companion_9).get_Oriya_iew7xh_k$ = function () {
    return new ListStyleType('oriya');
  };
  protoOf(Companion_9).get_Persian_hkpriv_k$ = function () {
    return new ListStyleType('persian');
  };
  protoOf(Companion_9).get_SimpChineseFormal_vtcj22_k$ = function () {
    return new ListStyleType('simp-chinese-formal');
  };
  protoOf(Companion_9).get_SimpChineseInformal_q999un_k$ = function () {
    return new ListStyleType('simp-chinese-informal');
  };
  protoOf(Companion_9).get_Square_4go9ja_k$ = function () {
    return new ListStyleType('square');
  };
  protoOf(Companion_9).get_Tamil_ihcepm_k$ = function () {
    return new ListStyleType('tamil');
  };
  protoOf(Companion_9).get_Telugu_4qz0i9_k$ = function () {
    return new ListStyleType('telugu');
  };
  protoOf(Companion_9).get_Thai_woahvp_k$ = function () {
    return new ListStyleType('thai');
  };
  protoOf(Companion_9).get_TradChineseFormal_7jy5gu_k$ = function () {
    return new ListStyleType('trad-chinese-formal');
  };
  protoOf(Companion_9).get_TradChineseInformal_j8y7ih_k$ = function () {
    return new ListStyleType('trad-chinese-informal');
  };
  protoOf(Companion_9).get_UpperAlpha_f6mwsb_k$ = function () {
    return new ListStyleType('upper-alpha');
  };
  protoOf(Companion_9).get_UpperArmenian_gf87di_k$ = function () {
    return new ListStyleType('upper-armenian');
  };
  protoOf(Companion_9).get_UpperGreek_f38jix_k$ = function () {
    return new ListStyleType('upper-greek');
  };
  protoOf(Companion_9).get_UpperLatin_f0s445_k$ = function () {
    return new ListStyleType('upper-latin');
  };
  protoOf(Companion_9).get_UpperRoman_ex8k4c_k$ = function () {
    return new ListStyleType('upper-roman');
  };
  protoOf(Companion_9).get_None_wo6tgh_k$ = function () {
    return new ListStyleType('none');
  };
  protoOf(Companion_9).get_Inherit_a1a9e6_k$ = function () {
    return new ListStyleType('inherit');
  };
  protoOf(Companion_9).get_Initial_a0h2v9_k$ = function () {
    return new ListStyleType('initial');
  };
  protoOf(Companion_9).get_Revert_3t1tzh_k$ = function () {
    return new ListStyleType('revert');
  };
  protoOf(Companion_9).get_Unset_ii4mhs_k$ = function () {
    return new ListStyleType('unset');
  };
  var Companion_instance_9;
  function Companion_getInstance_12() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function ListStyleType(value) {
    Companion_getInstance_12();
    this.value_1 = value;
  }
  protoOf(ListStyleType).toString = function () {
    return this.value_1;
  };
  function _get_value__a43j40_9($this) {
    return $this.value_1;
  }
  function Companion_10() {
    Companion_instance_10 = this;
  }
  protoOf(Companion_10).get_Inside_bggkb_k$ = function () {
    return new ListStylePosition('inside');
  };
  protoOf(Companion_10).get_Outside_ai50v0_k$ = function () {
    return new ListStylePosition('outside');
  };
  protoOf(Companion_10).get_Inherit_a1a9e6_k$ = function () {
    return new ListStylePosition('inherit');
  };
  protoOf(Companion_10).get_Initial_a0h2v9_k$ = function () {
    return new ListStylePosition('initial');
  };
  protoOf(Companion_10).get_Revert_3t1tzh_k$ = function () {
    return new ListStylePosition('revert');
  };
  protoOf(Companion_10).get_Unset_ii4mhs_k$ = function () {
    return new ListStylePosition('unset');
  };
  var Companion_instance_10;
  function Companion_getInstance_13() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function ListStylePosition(value) {
    Companion_getInstance_13();
    this.value_1 = value;
  }
  protoOf(ListStylePosition).toString = function () {
    return this.value_1;
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
      _this__u8e3s4.property_npxg1h_k$('list-style-type', type);
    }
    if (position == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      _this__u8e3s4.property_npxg1h_k$('list-style-position', position);
    }
    if (image == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      _this__u8e3s4.property_npxg1h_k$('list-style-image', image);
    }
  }
  function _get_value__a43j40_10($this) {
    return $this.value_1;
  }
  function Companion_11() {
    Companion_instance_11 = this;
  }
  protoOf(Companion_11).get_Contain_qhyalx_k$ = function () {
    return new ObjectFit('contain');
  };
  protoOf(Companion_11).get_Cover_i8910u_k$ = function () {
    return new ObjectFit('cover');
  };
  protoOf(Companion_11).get_Fill_wo1l2k_k$ = function () {
    return new ObjectFit('fill');
  };
  protoOf(Companion_11).get_None_wo6tgh_k$ = function () {
    return new ObjectFit('none');
  };
  protoOf(Companion_11).get_ScaleDown_ala7ur_k$ = function () {
    return new ObjectFit('scale-down');
  };
  protoOf(Companion_11).get_Inherit_a1a9e6_k$ = function () {
    return new ObjectFit('inherit');
  };
  protoOf(Companion_11).get_Initial_a0h2v9_k$ = function () {
    return new ObjectFit('initial');
  };
  protoOf(Companion_11).get_Revert_3t1tzh_k$ = function () {
    return new ObjectFit('revert');
  };
  protoOf(Companion_11).get_Unset_ii4mhs_k$ = function () {
    return new ObjectFit('unset');
  };
  var Companion_instance_11;
  function Companion_getInstance_14() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function ObjectFit(value) {
    Companion_getInstance_14();
    this.value_1 = value;
  }
  protoOf(ObjectFit).toString = function () {
    return this.value_1;
  };
  function objectFit(_this__u8e3s4, objectFit) {
    _this__u8e3s4.property_npxg1h_k$('object-fit', objectFit);
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
    _this__u8e3s4.property_npxg1h_k$('outline', this_0);
  }
  function CSSOutline() {
    this.width_1 = null;
    this.style_1 = null;
    this.color_1 = null;
  }
  protoOf(CSSOutline).set_width_9utmsf_k$ = function (_set____db54di) {
    this.width_1 = _set____db54di;
  };
  protoOf(CSSOutline).get_width_j0q4yl_k$ = function () {
    return this.width_1;
  };
  protoOf(CSSOutline).set_style_27eag0_k$ = function (_set____db54di) {
    this.style_1 = _set____db54di;
  };
  protoOf(CSSOutline).get_style_iyqetk_k$ = function () {
    return this.style_1;
  };
  protoOf(CSSOutline).set_color_q6gjw9_k$ = function (_set____db54di) {
    this.color_1 = _set____db54di;
  };
  protoOf(CSSOutline).get_color_ipu8u2_k$ = function () {
    return this.color_1;
  };
  protoOf(CSSOutline).equals = function (other) {
    var tmp;
    if (other instanceof CSSOutline) {
      tmp = (equals(this.width_1, other.width_1) ? equals(this.style_1, other.style_1) : false) ? equals(this.color_1, other.color_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CSSOutline).toString = function () {
    var values = listOfNotNull([this.color_1, this.style_1, this.width_1]);
    return joinToString(values, ' ');
  };
  function outline$lambda($width, $style, $color) {
    return function ($this$outline) {
      $this$outline.width_1 = $width;
      $this$outline.style_1 = $style;
      $this$outline.color_1 = $color;
      return Unit_getInstance();
    };
  }
  function _get_value__a43j40_11($this) {
    return $this.value_1;
  }
  function Companion_12() {
    Companion_instance_12 = this;
  }
  protoOf(Companion_12).get_Visible_yikvpz_k$ = function () {
    return new Overflow('visible');
  };
  protoOf(Companion_12).get_Hidden_viqel_k$ = function () {
    return new Overflow('hidden');
  };
  protoOf(Companion_12).get_Clip_wnzq9l_k$ = function () {
    return new Overflow('clip');
  };
  protoOf(Companion_12).get_Scroll_48xiie_k$ = function () {
    return new Overflow('scroll');
  };
  protoOf(Companion_12).get_Auto_wnyn88_k$ = function () {
    return new Overflow('auto');
  };
  protoOf(Companion_12).get_Inherit_a1a9e6_k$ = function () {
    return new Overflow('inherit');
  };
  protoOf(Companion_12).get_Initial_a0h2v9_k$ = function () {
    return new Overflow('initial');
  };
  protoOf(Companion_12).get_Revert_3t1tzh_k$ = function () {
    return new Overflow('revert');
  };
  protoOf(Companion_12).get_Unset_ii4mhs_k$ = function () {
    return new Overflow('unset');
  };
  var Companion_instance_12;
  function Companion_getInstance_15() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function Overflow(value) {
    Companion_getInstance_15();
    this.value_1 = value;
  }
  protoOf(Overflow).toString = function () {
    return this.value_1;
  };
  function _get_value__a43j40_12($this) {
    return $this.value_1;
  }
  function Companion_13() {
    Companion_instance_13 = this;
  }
  protoOf(Companion_13).get_Normal_22avww_k$ = function () {
    return new OverflowWrap('normal');
  };
  protoOf(Companion_13).get_BreakWord_a9p49s_k$ = function () {
    return new OverflowWrap('break-word');
  };
  protoOf(Companion_13).get_Anywhere_yvjyp0_k$ = function () {
    return new OverflowWrap('anywhere');
  };
  protoOf(Companion_13).get_Inherit_a1a9e6_k$ = function () {
    return new OverflowWrap('inherit');
  };
  protoOf(Companion_13).get_Initial_a0h2v9_k$ = function () {
    return new OverflowWrap('initial');
  };
  protoOf(Companion_13).get_Revert_3t1tzh_k$ = function () {
    return new OverflowWrap('revert');
  };
  protoOf(Companion_13).get_Unset_ii4mhs_k$ = function () {
    return new OverflowWrap('unset');
  };
  var Companion_instance_13;
  function Companion_getInstance_16() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  function OverflowWrap(value) {
    Companion_getInstance_16();
    this.value_1 = value;
  }
  protoOf(OverflowWrap).toString = function () {
    return this.value_1;
  };
  function overflowX(_this__u8e3s4, overflowX) {
    _this__u8e3s4.property_npxg1h_k$('overflow-x', overflowX);
  }
  function overflowY(_this__u8e3s4, overflowY) {
    _this__u8e3s4.property_npxg1h_k$('overflow-y', overflowY);
  }
  function overflow(_this__u8e3s4, overflow) {
    _this__u8e3s4.property_npxg1h_k$('overflow', overflow);
  }
  function overflowWrap(_this__u8e3s4, overflowWrap) {
    _this__u8e3s4.property_npxg1h_k$('overflow-wrap', overflowWrap);
  }
  function _get_value__a43j40_13($this) {
    return $this.value_1;
  }
  function Companion_14() {
    Companion_instance_14 = this;
  }
  protoOf(Companion_14).get_Auto_wnyn88_k$ = function () {
    return new ScrollBehavior('auto');
  };
  protoOf(Companion_14).get_Smooth_4edjo7_k$ = function () {
    return new ScrollBehavior('smooth');
  };
  protoOf(Companion_14).get_Inherit_a1a9e6_k$ = function () {
    return new ScrollBehavior('inherit');
  };
  protoOf(Companion_14).get_Initial_a0h2v9_k$ = function () {
    return new ScrollBehavior('initial');
  };
  protoOf(Companion_14).get_Revert_3t1tzh_k$ = function () {
    return new ScrollBehavior('revert');
  };
  protoOf(Companion_14).get_Unset_ii4mhs_k$ = function () {
    return new ScrollBehavior('unset');
  };
  var Companion_instance_14;
  function Companion_getInstance_17() {
    if (Companion_instance_14 == null)
      new Companion_14();
    return Companion_instance_14;
  }
  function ScrollBehavior(value) {
    Companion_getInstance_17();
    this.value_1 = value;
  }
  protoOf(ScrollBehavior).toString = function () {
    return this.value_1;
  };
  function scrollBehavior(_this__u8e3s4, scrollBehavior) {
    _this__u8e3s4.property_npxg1h_k$('scroll-behavior', scrollBehavior);
  }
  function _get_defaultFallback__wdjuwe($this) {
    return $this.defaultFallback_1;
  }
  function PropertyValue(name, defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    StyleVariable.call(this, name, defaultFallback, prefix);
  }
  protoOf(PropertyValue).value_wk9s6x_k$ = function (fallback) {
    return this.variableValue_ovgee5_k$(fallback);
  };
  protoOf(PropertyValue).value_66g3ir_k$ = function (fallback) {
    return this.value_wk9s6x_k$((fallback == null ? true : !(fallback == null)) ? fallback : THROW_CCE());
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
  protoOf(NumberValue).value_9bth3g_k$ = function (fallback) {
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
    return this.variableValue_ovgee5_k$(tmp);
  };
  protoOf(NumberValue).value_66g3ir_k$ = function (fallback) {
    return this.value_9bth3g_k$((fallback == null ? true : isNumber(fallback)) ? fallback : THROW_CCE());
  };
  function StringValue(name, defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    var tmp;
    if (defaultFallback == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.StringValue.<init>.<anonymous>' call
      // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = defaultFallback;
    }
    StyleVariable.call(this, name, tmp, prefix);
  }
  protoOf(StringValue).value_lu1i8m_k$ = function (fallback) {
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp;
    if (fallback == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.StringValue.value.<anonymous>' call
      // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = fallback;
    }
    // Inline function 'kotlin.js.asDynamic' call
    return this.variableValue_ovgee5_k$(tmp);
  };
  protoOf(StringValue).value_66g3ir_k$ = function (fallback) {
    return this.value_lu1i8m_k$((fallback == null ? true : typeof fallback === 'string') ? fallback : THROW_CCE());
  };
  function StyleVariable(name, defaultFallback, prefix) {
    this.defaultFallback_1 = defaultFallback;
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
    tmp.name_1 = tmp1_elvis_lhs == null ? name : tmp1_elvis_lhs;
  }
  protoOf(StyleVariable).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(StyleVariable).value$default_36t2hw_k$ = function (fallback, $super) {
    fallback = fallback === VOID ? null : fallback;
    return $super === VOID ? this.value_66g3ir_k$(fallback) : $super.value_66g3ir_k$.call(this, fallback);
  };
  protoOf(StyleVariable).variableValue_ovgee5_k$ = function (fallback) {
    // Inline function 'org.jetbrains.compose.web.css.CSSVariableValue' call
    var tmp1_safe_receiver = fallback == null ? this.defaultFallback_1 : fallback;
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
    return 'var(--' + this.name_1 + (tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs) + ')';
  };
  function _get_defaultFallback__wdjuwe_0($this) {
    return $this.defaultFallback_1;
  }
  function _get_prefix__wiwq7t($this) {
    return $this.prefix_1;
  }
  function StyleVariablePropertyProvider(defaultFallback, prefix) {
    this.defaultFallback_1 = defaultFallback;
    this.prefix_1 = prefix;
  }
  protoOf(StyleVariablePropertyProvider).getValue_fbnwi2_k$ = function (thisRef, property) {
    return new PropertyValue(provideVariableName(thisRef, property), this.defaultFallback_1, this.prefix_1);
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
  function _get_defaultFallback__wdjuwe_1($this) {
    return $this.defaultFallback_1;
  }
  function _get_prefix__wiwq7t_0($this) {
    return $this.prefix_1;
  }
  function StyleVariableNumberProvider(defaultFallback, prefix) {
    this.defaultFallback_1 = defaultFallback;
    this.prefix_1 = prefix;
  }
  protoOf(StyleVariableNumberProvider).getValue_fbnwi2_k$ = function (thisRef, property) {
    return new NumberValue(provideVariableName(thisRef, property), this.defaultFallback_1, this.prefix_1);
  };
  function StyleVariable_3(defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariableNumberProvider(defaultFallback, prefix);
  }
  function setVariable(_this__u8e3s4, variable, value) {
    _this__u8e3s4.property_npxg1h_k$('--' + variable.name_1, value);
  }
  function provideVariableName(groupObject, property) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.provideVariableName.<anonymous>' call
    if (!(groupObject == null)) {
      this_0.append_22ad7x_k$(removeSuffix(removeSuffix(titleCamelCaseToKebabCase(ensureNotNull(getKClassFromExpression(groupObject).get_simpleName_r6f8py_k$())), '-vars'), '-variables'));
      this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(45));
    }
    this_0.append_22ad7x_k$(removeSuffix(removeSuffix(titleCamelCaseToKebabCase(property.callableName), '-var'), '-variable'));
    return this_0.toString();
  }
  function setVariable_0(_this__u8e3s4, variable, value) {
    _this__u8e3s4.property_jk9dw6_k$('--' + variable.name_1, value);
  }
  function _get_value__a43j40_14($this) {
    return $this.value_1;
  }
  function Companion_15() {
    Companion_instance_15 = this;
  }
  protoOf(Companion_15).get_None_wo6tgh_k$ = function () {
    return new UserSelect('none');
  };
  protoOf(Companion_15).get_Auto_wnyn88_k$ = function () {
    return new UserSelect('auto');
  };
  protoOf(Companion_15).get_Text_woag7q_k$ = function () {
    return new UserSelect('text');
  };
  protoOf(Companion_15).get_Contain_qhyalx_k$ = function () {
    return new UserSelect('contain');
  };
  protoOf(Companion_15).get_All_18jx7s_k$ = function () {
    return new UserSelect('all');
  };
  protoOf(Companion_15).get_Inherit_a1a9e6_k$ = function () {
    return new UserSelect('inherit');
  };
  protoOf(Companion_15).get_Initial_a0h2v9_k$ = function () {
    return new UserSelect('initial');
  };
  protoOf(Companion_15).get_Revert_3t1tzh_k$ = function () {
    return new UserSelect('revert');
  };
  protoOf(Companion_15).get_Unset_ii4mhs_k$ = function () {
    return new UserSelect('unset');
  };
  var Companion_instance_15;
  function Companion_getInstance_18() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function UserSelect(value) {
    Companion_getInstance_18();
    this.value_1 = value;
  }
  protoOf(UserSelect).toString = function () {
    return this.value_1;
  };
  function _get_value__a43j40_15($this) {
    return $this.value_1;
  }
  function Companion_16() {
    Companion_instance_16 = this;
  }
  protoOf(Companion_16).get_Normal_22avww_k$ = function () {
    return new WhiteSpace('normal');
  };
  protoOf(Companion_16).get_NoWrap_21tqz8_k$ = function () {
    return new WhiteSpace('nowrap');
  };
  protoOf(Companion_16).get_Pre_18jlye_k$ = function () {
    return new WhiteSpace('pre');
  };
  protoOf(Companion_16).get_PreWrap_nintz8_k$ = function () {
    return new WhiteSpace('pre-wrap');
  };
  protoOf(Companion_16).get_PreLine_nigmr2_k$ = function () {
    return new WhiteSpace('pre-line');
  };
  protoOf(Companion_16).get_BreakSpaces_6b23jx_k$ = function () {
    return new WhiteSpace('break-spaces');
  };
  protoOf(Companion_16).get_Inherit_a1a9e6_k$ = function () {
    return new WhiteSpace('inherit');
  };
  protoOf(Companion_16).get_Initial_a0h2v9_k$ = function () {
    return new WhiteSpace('initial');
  };
  protoOf(Companion_16).get_Revert_3t1tzh_k$ = function () {
    return new WhiteSpace('revert');
  };
  protoOf(Companion_16).get_Unset_ii4mhs_k$ = function () {
    return new WhiteSpace('unset');
  };
  var Companion_instance_16;
  function Companion_getInstance_19() {
    if (Companion_instance_16 == null)
      new Companion_16();
    return Companion_instance_16;
  }
  function WhiteSpace(value) {
    Companion_getInstance_19();
    this.value_1 = value;
  }
  protoOf(WhiteSpace).toString = function () {
    return this.value_1;
  };
  function _get_value__a43j40_16($this) {
    return $this.value_1;
  }
  function Companion_17() {
    Companion_instance_17 = this;
  }
  protoOf(Companion_17).get_Left_wo5bw0_k$ = function () {
    return new TextAlign('left');
  };
  protoOf(Companion_17).get_Right_igdsyb_k$ = function () {
    return new TextAlign('right');
  };
  protoOf(Companion_17).get_Center_3arb0i_k$ = function () {
    return new TextAlign('center');
  };
  protoOf(Companion_17).get_Justify_84qi6f_k$ = function () {
    return new TextAlign('justify');
  };
  protoOf(Companion_17).get_JustifyAll_vzjb16_k$ = function () {
    return new TextAlign('justify-all');
  };
  protoOf(Companion_17).get_Start_ih4i6x_k$ = function () {
    return new TextAlign('start');
  };
  protoOf(Companion_17).get_End_18ju7i_k$ = function () {
    return new TextAlign('end');
  };
  protoOf(Companion_17).get_MatchParent_4236be_k$ = function () {
    return new TextAlign('match-parent');
  };
  protoOf(Companion_17).get_Inherit_a1a9e6_k$ = function () {
    return new TextAlign('inherit');
  };
  protoOf(Companion_17).get_Initial_a0h2v9_k$ = function () {
    return new TextAlign('initial');
  };
  protoOf(Companion_17).get_Revert_3t1tzh_k$ = function () {
    return new TextAlign('revert');
  };
  protoOf(Companion_17).get_Unset_ii4mhs_k$ = function () {
    return new TextAlign('unset');
  };
  var Companion_instance_17;
  function Companion_getInstance_20() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function TextAlign(value) {
    Companion_getInstance_20();
    this.value_1 = value;
  }
  protoOf(TextAlign).toString = function () {
    return this.value_1;
  };
  function _get_value__a43j40_17($this) {
    return $this.value_1;
  }
  function Companion_18() {
    Companion_instance_18 = this;
  }
  protoOf(Companion_18).get_Underline_oo7egz_k$ = function () {
    return new TextDecorationLine('underline');
  };
  protoOf(Companion_18).get_Overline_lz0ci7_k$ = function () {
    return new TextDecorationLine('overline');
  };
  protoOf(Companion_18).get_LineThrough_pr9ajs_k$ = function () {
    return new TextDecorationLine('line-through');
  };
  protoOf(Companion_18).get_None_wo6tgh_k$ = function () {
    return new TextDecorationLine('none');
  };
  protoOf(Companion_18).get_Inherit_a1a9e6_k$ = function () {
    return new TextDecorationLine('inherit');
  };
  protoOf(Companion_18).get_Initial_a0h2v9_k$ = function () {
    return new TextDecorationLine('initial');
  };
  protoOf(Companion_18).get_Revert_3t1tzh_k$ = function () {
    return new TextDecorationLine('revert');
  };
  protoOf(Companion_18).get_Unset_ii4mhs_k$ = function () {
    return new TextDecorationLine('unset');
  };
  var Companion_instance_18;
  function Companion_getInstance_21() {
    if (Companion_instance_18 == null)
      new Companion_18();
    return Companion_instance_18;
  }
  function TextDecorationLine(value) {
    Companion_getInstance_21();
    this.value_1 = value;
  }
  protoOf(TextDecorationLine).toString = function () {
    return this.value_1;
  };
  function userSelect(_this__u8e3s4, userSelect) {
    _this__u8e3s4.property_npxg1h_k$('user-select', userSelect);
  }
  function whiteSpace(_this__u8e3s4, whiteSpace) {
    _this__u8e3s4.property_npxg1h_k$('white-space', whiteSpace);
  }
  function textAlign(_this__u8e3s4, textAlign) {
    _this__u8e3s4.property_npxg1h_k$('text-align', textAlign);
  }
  function textDecorationLine(_this__u8e3s4, textDecorationLines) {
    _this__u8e3s4.property_wcrait_k$('text-decoration-line', joinToString_0(textDecorationLines, ' '));
  }
  function translateX(_this__u8e3s4, tx) {
    translate(_this__u8e3s4, tx);
  }
  function translate(_this__u8e3s4, tx) {
    _this__u8e3s4.property_npxg1h_k$('translate', tx);
  }
  function Companion_19() {
    Companion_instance_19 = this;
  }
  protoOf(Companion_19).group_t9r796_k$ = function (properties, duration, timingFunction, delay) {
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(properties, 10));
    var tmp0_iterator = properties.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.compose.css.Companion.group.<anonymous>' call
      var tmp$ret$0 = CSSTransition_init_$Create$(item, duration, timingFunction, delay);
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    return copyToArray(destination);
  };
  protoOf(Companion_19).group$default_5lgzta_k$ = function (properties, duration, timingFunction, delay, $super) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    return $super === VOID ? this.group_t9r796_k$(properties, duration, timingFunction, delay) : $super.group_t9r796_k$.call(this, properties, duration, timingFunction, delay);
  };
  protoOf(Companion_19).group_9h9urd_k$ = function (properties, duration, timingFunction, delay) {
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(properties, 10));
    var tmp0_iterator = properties.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.compose.css.Companion.group.<anonymous>' call
      var tmp$ret$0 = new CSSTransition(item, duration, timingFunction, delay);
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    return copyToArray(destination);
  };
  protoOf(Companion_19).group$default_8rh311_k$ = function (properties, duration, timingFunction, delay, $super) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    return $super === VOID ? this.group_9h9urd_k$(properties, duration, timingFunction, delay) : $super.group_9h9urd_k$.call(this, properties, duration, timingFunction, delay);
  };
  var Companion_instance_19;
  function Companion_getInstance_22() {
    if (Companion_instance_19 == null)
      new Companion_19();
    return Companion_instance_19;
  }
  function CSSTransition_init_$Init$(property, duration, timingFunction, delay, $this) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    CSSTransition.call($this, Companion_getInstance_23().of_5gnbr7_k$(property), duration, timingFunction, delay);
    return $this;
  }
  function CSSTransition_init_$Create$(property, duration, timingFunction, delay) {
    return CSSTransition_init_$Init$(property, duration, timingFunction, delay, objectCreate(protoOf(CSSTransition)));
  }
  function CSSTransition(property, duration, timingFunction, delay) {
    Companion_getInstance_22();
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    this.property_1 = property;
    this.duration_1 = duration;
    this.timingFunction_1 = timingFunction;
    this.delay_1 = delay;
  }
  protoOf(CSSTransition).get_property_msvula_k$ = function () {
    return this.property_1;
  };
  protoOf(CSSTransition).get_duration_6a6kpp_k$ = function () {
    return this.duration_1;
  };
  protoOf(CSSTransition).get_timingFunction_3u6rat_k$ = function () {
    return this.timingFunction_1;
  };
  protoOf(CSSTransition).get_delay_iq7n8a_k$ = function () {
    return this.delay_1;
  };
  protoOf(CSSTransition).toString = function () {
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.CSSTransition.toString.<anonymous>' call
    this_0.add_utx5q5_k$(this.property_1.toString());
    var tmp0_safe_receiver = this.duration_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSTransition.toString.<anonymous>.<anonymous>' call
      this_0.add_utx5q5_k$(toString(tmp0_safe_receiver));
    }
    var tmp1_safe_receiver = this.timingFunction_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSTransition.toString.<anonymous>.<anonymous>' call
      this_0.add_utx5q5_k$(toString(tmp1_safe_receiver));
    }
    if (!(this.delay_1 == null)) {
      if (this.duration_1 == null) {
        this_0.add_utx5q5_k$('0s');
      }
      this_0.add_utx5q5_k$(toString(this.delay_1));
    }
    var tmp$ret$6 = this_0.build_1k0s4u_k$();
    return joinToString(tmp$ret$6, ' ');
  };
  protoOf(CSSTransition).component1_7eebsc_k$ = function () {
    return this.property_1;
  };
  protoOf(CSSTransition).component2_7eebsb_k$ = function () {
    return this.duration_1;
  };
  protoOf(CSSTransition).component3_7eebsa_k$ = function () {
    return this.timingFunction_1;
  };
  protoOf(CSSTransition).component4_7eebs9_k$ = function () {
    return this.delay_1;
  };
  protoOf(CSSTransition).copy_9p7glc_k$ = function (property, duration, timingFunction, delay) {
    return new CSSTransition(property, duration, timingFunction, delay);
  };
  protoOf(CSSTransition).copy$default_69riea_k$ = function (property, duration, timingFunction, delay, $super) {
    property = property === VOID ? this.property_1 : property;
    duration = duration === VOID ? this.duration_1 : duration;
    timingFunction = timingFunction === VOID ? this.timingFunction_1 : timingFunction;
    delay = delay === VOID ? this.delay_1 : delay;
    return $super === VOID ? this.copy_9p7glc_k$(property, duration, timingFunction, delay) : $super.copy_9p7glc_k$.call(this, property, duration, timingFunction, delay);
  };
  protoOf(CSSTransition).hashCode = function () {
    var result = hashCode(this.property_1);
    result = imul(result, 31) + (this.duration_1 == null ? 0 : hashCode(this.duration_1)) | 0;
    result = imul(result, 31) + (this.timingFunction_1 == null ? 0 : hashCode(this.timingFunction_1)) | 0;
    result = imul(result, 31) + (this.delay_1 == null ? 0 : hashCode(this.delay_1)) | 0;
    return result;
  };
  protoOf(CSSTransition).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSTransition))
      return false;
    var tmp0_other_with_cast = other instanceof CSSTransition ? other : THROW_CCE();
    if (!equals(this.property_1, tmp0_other_with_cast.property_1))
      return false;
    if (!equals(this.duration_1, tmp0_other_with_cast.duration_1))
      return false;
    if (!equals(this.timingFunction_1, tmp0_other_with_cast.timingFunction_1))
      return false;
    if (!equals(this.delay_1, tmp0_other_with_cast.delay_1))
      return false;
    return true;
  };
  function transition(_this__u8e3s4, transitions) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(transitions.length === 0)) {
      _this__u8e3s4.property_wcrait_k$('transition', joinToString_0(transitions));
    }
  }
  function _get_value__a43j40_18($this) {
    return $this.value_1;
  }
  function Companion_20() {
    Companion_instance_20 = this;
  }
  protoOf(Companion_20).of_5gnbr7_k$ = function (customValue) {
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
  protoOf(Companion_20).get_None_wo6tgh_k$ = function () {
    return new TransitionProperty('none');
  };
  protoOf(Companion_20).get_All_18jx7s_k$ = function () {
    return new TransitionProperty('all');
  };
  protoOf(Companion_20).get_Inherit_a1a9e6_k$ = function () {
    return new TransitionProperty('inherit');
  };
  protoOf(Companion_20).get_Initial_a0h2v9_k$ = function () {
    return new TransitionProperty('initial');
  };
  protoOf(Companion_20).get_Revert_3t1tzh_k$ = function () {
    return new TransitionProperty('revert');
  };
  protoOf(Companion_20).get_Unset_ii4mhs_k$ = function () {
    return new TransitionProperty('unset');
  };
  var Companion_instance_20;
  function Companion_getInstance_23() {
    if (Companion_instance_20 == null)
      new Companion_20();
    return Companion_instance_20;
  }
  function TransitionProperty(value) {
    Companion_getInstance_23();
    this.value_1 = value;
  }
  protoOf(TransitionProperty).toString = function () {
    return this.value_1;
  };
  function _get_value__a43j40_19($this) {
    return $this.value_1;
  }
  function Keyword_0(value) {
    CSSImage.call(this, value);
  }
  function Url(url) {
    CSSImage.call(this, url.toString());
  }
  function Gradient(gradient) {
    CSSImage.call(this, gradient.toString());
  }
  function Companion_21() {
    Companion_instance_21 = this;
  }
  protoOf(Companion_21).of_dq0j3b_k$ = function (url) {
    return new Url(url);
  };
  protoOf(Companion_21).of_jjeryt_k$ = function (gradient) {
    return new Gradient(gradient);
  };
  protoOf(Companion_21).get_None_wo6tgh_k$ = function () {
    return new Keyword_0('none');
  };
  protoOf(Companion_21).get_Inherit_a1a9e6_k$ = function () {
    return new Keyword_0('inherit');
  };
  protoOf(Companion_21).get_Initial_a0h2v9_k$ = function () {
    return new Keyword_0('initial');
  };
  protoOf(Companion_21).get_Revert_3t1tzh_k$ = function () {
    return new Keyword_0('revert');
  };
  protoOf(Companion_21).get_Unset_ii4mhs_k$ = function () {
    return new Keyword_0('unset');
  };
  var Companion_instance_21;
  function Companion_getInstance_24() {
    if (Companion_instance_21 == null)
      new Companion_21();
    return Companion_instance_21;
  }
  function CSSImage(value) {
    Companion_getInstance_24();
    this.value_1 = value;
  }
  protoOf(CSSImage).toString = function () {
    return this.value_1;
  };
  function calc(action) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    return action(CalcScopeInstance_getInstance());
  }
  function _get_value__a43j40_20($this) {
    return $this.value_1;
  }
  function CalcNum(value) {
    Number_0.call(this);
    this.value_1 = value;
  }
  protoOf(CalcNum).toString = function () {
    return this.value_1;
  };
  protoOf(CalcNum).toInt_1tsl84_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.value_1;
  };
  protoOf(CalcNum).toLong_edfucp_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.value_1;
  };
  protoOf(CalcNum).toFloat_jhbgwv_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.value_1;
  };
  protoOf(CalcNum).toDouble_ygsx0s_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.value_1;
  };
  protoOf(CalcNum).toByte_edm0nx_k$ = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(CalcNum).toShort_ja8oqn_k$ = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(CalcNum).plus_4ppioj_k$ = function (b) {
    return new CalcNum('calc(' + this + ' + ' + b + ')');
  };
  protoOf(CalcNum).minus_wfjn7n_k$ = function (b) {
    return new CalcNum('calc(' + this + ' - ' + b + ')');
  };
  protoOf(CalcNum).times_z3zgpl_k$ = function (b) {
    return new CalcNum('calc(' + this + ' * ' + b + ')');
  };
  protoOf(CalcNum).div_8ho5ac_k$ = function (b) {
    return new CalcNum('calc(' + this + ' / ' + b + ')');
  };
  protoOf(CalcNum).unaryMinus_6uz0qp_k$ = function () {
    return new CalcNum('calc(-1 * ' + this + ')');
  };
  protoOf(CalcNum).unaryPlus_g9fn1l_k$ = function () {
    return new CalcNum('calc(1 * ' + this + ')');
  };
  protoOf(CalcNum).plus_46f1vh_k$ = function (b) {
    return new CalcNum('calc(' + this + ' + ' + b + ')');
  };
  protoOf(CalcNum).minus_wyu40p_k$ = function (b) {
    return new CalcNum('calc(' + this + ' - ' + b + ')');
  };
  protoOf(CalcNum).times_zdu4gh_k$ = function (b) {
    return new CalcNum('calc(' + this + ' * ' + b + ')');
  };
  protoOf(CalcNum).div_90ym3e_k$ = function (b) {
    return new CalcNum('calc(' + this + ' / ' + b + ')');
  };
  function CalcScope() {
  }
  function CalcScopeInstance() {
    CalcScopeInstance_instance = this;
  }
  var CalcScopeInstance_instance;
  function CalcScopeInstance_getInstance() {
    if (CalcScopeInstance_instance == null)
      new CalcScopeInstance();
    return CalcScopeInstance_instance;
  }
  function Simple(value) {
    Color_0.call(this, '' + value);
  }
  function Stop(color, stop) {
    Color_0.call(this, '' + color + ' ' + stop);
  }
  function StopRange(color, from, to) {
    Color_0.call(this, '' + color + ' ' + from + ' ' + to);
  }
  function _get_entryStr__gktpos($this) {
    return $this.entryStr_1;
  }
  function Color_0(value) {
    Entry.call(this, value);
    this.value_1 = value;
  }
  protoOf(Color_0).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  function Hint(value) {
    Entry.call(this, '' + value);
    this.value_1 = value;
  }
  protoOf(Hint).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  function Entry(entryStr) {
    this.entryStr_1 = entryStr;
  }
  protoOf(Entry).toString = function () {
    return this.entryStr_1;
  };
  function _get_entries__iz8n5($this) {
    return $this.entries_1;
  }
  function ColorStopsBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.entries_1 = ArrayList_init_$Create$();
  }
  protoOf(ColorStopsBuilder).verifiedEntries_yuic0o_k$ = function () {
    // Inline function 'kotlin.check' call
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.collections.count' call
      var this_0 = this.entries_1;
      var tmp;
      if (isInterface(this_0, Collection)) {
        tmp = this_0.isEmpty_y1axqb_k$();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      var count = 0;
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'com.varabyte.kobweb.compose.css.functions.ColorStopsBuilder.verifiedEntries.<anonymous>' call
        if (element instanceof Color_0) {
          count = count + 1 | 0;
          checkCountOverflow(count);
        }
      }
      tmp$ret$0 = count;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!(tmp$ret$0 >= 2)) {
      // Inline function 'com.varabyte.kobweb.compose.css.functions.ColorStopsBuilder.verifiedEntries.<anonymous>' call
      var message = 'A gradient should consistent of at least two color entries (an initial color and an end color)';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var tmp0_iterator_0 = this.entries_1.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.compose.css.functions.ColorStopsBuilder.verifiedEntries.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var i = checkIndexOverflow(tmp1);
      if (item instanceof Hint) {
        // Inline function 'kotlin.check' call
        var tmp_0;
        var tmp_1 = getOrNull(this.entries_1, i - 1 | 0);
        if (tmp_1 instanceof Color_0) {
          var tmp_2 = getOrNull(this.entries_1, i + 1 | 0);
          tmp_0 = tmp_2 instanceof Color_0;
        } else {
          tmp_0 = false;
        }
        // Inline function 'kotlin.contracts.contract' call
        if (!tmp_0) {
          // Inline function 'com.varabyte.kobweb.compose.css.functions.ColorStopsBuilder.verifiedEntries.<anonymous>.<anonymous>' call
          var message_0 = 'A gradient color midpoint must only be added between two colors';
          throw IllegalStateException_init_$Create$(toString(message_0));
        }
      }
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = this.entries_1;
    return copyToArray(this_1);
  };
  protoOf(ColorStopsBuilder).add_ad4gbn_k$ = function (color) {
    return this.entries_1.add_utx5q5_k$(new Simple(color));
  };
  protoOf(ColorStopsBuilder).add_hkfvmd_k$ = function (color, stop) {
    return this.entries_1.add_utx5q5_k$(new Stop(color, stop));
  };
  protoOf(ColorStopsBuilder).add_8cat99_k$ = function (color, from, to) {
    return this.entries_1.add_utx5q5_k$(new StopRange(color, from, to));
  };
  protoOf(ColorStopsBuilder).setMidpoint_jac6ry_k$ = function (hint) {
    return this.entries_1.add_utx5q5_k$(new Hint(hint));
  };
  function Gradient_0() {
  }
  function CSSClamp(min, value, max) {
    this.min_1 = min;
    this.value_1 = value;
    this.max_1 = max;
  }
  protoOf(CSSClamp).get_min_18j0nr_k$ = function () {
    return this.min_1;
  };
  protoOf(CSSClamp).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(CSSClamp).get_max_18j0ud_k$ = function () {
    return this.max_1;
  };
  protoOf(CSSClamp).toString = function () {
    return 'clamp(' + this.min_1 + ', ' + this.value_1 + ', ' + this.max_1 + ')';
  };
  protoOf(CSSClamp).component1_7eebsc_k$ = function () {
    return this.min_1;
  };
  protoOf(CSSClamp).component2_7eebsb_k$ = function () {
    return this.value_1;
  };
  protoOf(CSSClamp).component3_7eebsa_k$ = function () {
    return this.max_1;
  };
  protoOf(CSSClamp).copy_qnqf6x_k$ = function (min, value, max) {
    return new CSSClamp(min, value, max);
  };
  protoOf(CSSClamp).copy$default_pbeh18_k$ = function (min, value, max, $super) {
    min = min === VOID ? this.min_1 : min;
    value = value === VOID ? this.value_1 : value;
    max = max === VOID ? this.max_1 : max;
    return $super === VOID ? this.copy_qnqf6x_k$(min, value, max) : $super.copy_qnqf6x_k$.call(this, min, value, max);
  };
  protoOf(CSSClamp).hashCode = function () {
    var result = hashCode(this.min_1);
    result = imul(result, 31) + hashCode(this.value_1) | 0;
    result = imul(result, 31) + hashCode(this.max_1) | 0;
    return result;
  };
  protoOf(CSSClamp).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSClamp))
      return false;
    var tmp0_other_with_cast = other instanceof CSSClamp ? other : THROW_CCE();
    if (!equals(this.min_1, tmp0_other_with_cast.min_1))
      return false;
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    if (!equals(this.max_1, tmp0_other_with_cast.max_1))
      return false;
    return true;
  };
  function clamp(min, value, max) {
    return new CSSClamp(min, value, max);
  }
  function _get_url__e6i4g2($this) {
    return $this.url_1;
  }
  function CSSUrl(url) {
    this.url_1 = url;
  }
  protoOf(CSSUrl).toString = function () {
    return 'url("' + this.url_1 + '")';
  };
  function _no_name_provided__qut3iv() {
  }
  protoOf(_no_name_provided__qut3iv).dispose_3nnxhr_k$ = function () {
    // Inline function 'com.varabyte.kobweb.compose.dom.Simple.invoke.<anonymous>' call
  };
  function Simple_0(handle) {
    RefCallback.call(this);
    this.handle_1 = handle;
  }
  protoOf(Simple_0).get_handle_e5p7ht_k$ = function () {
    return this.handle_1;
  };
  protoOf(Simple_0).invoke_64dhf5_k$ = function (scope, element) {
    this.handle_1(element);
    // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
    return new _no_name_provided__qut3iv();
  };
  function Disposable(effect) {
    RefCallback.call(this);
    this.effect_1 = effect;
  }
  protoOf(Disposable).get_effect_ct67x6_k$ = function () {
    return this.effect_1;
  };
  protoOf(Disposable).invoke_64dhf5_k$ = function (scope, element) {
    return this.effect_1(scope, element);
  };
  function _get_keyedCallbacks__mth523($this) {
    return $this.keyedCallbacks_1;
  }
  function RefCallback() {
  }
  function KeysToEffect(keys, refCallback) {
    this.keys_1 = keys;
    this.refCallback_1 = refCallback;
  }
  protoOf(KeysToEffect).get_keys_wop4xp_k$ = function () {
    return this.keys_1;
  };
  protoOf(KeysToEffect).get_refCallback_52b629_k$ = function () {
    return this.refCallback_1;
  };
  protoOf(KeysToEffect).component1_7eebsc_k$ = function () {
    return this.keys_1;
  };
  protoOf(KeysToEffect).component2_7eebsb_k$ = function () {
    return this.refCallback_1;
  };
  protoOf(KeysToEffect).copy_36kynk_k$ = function (keys, refCallback) {
    return new KeysToEffect(keys, refCallback);
  };
  protoOf(KeysToEffect).copy$default_2gjwzt_k$ = function (keys, refCallback, $super) {
    keys = keys === VOID ? this.keys_1 : keys;
    refCallback = refCallback === VOID ? this.refCallback_1 : refCallback;
    return $super === VOID ? this.copy_36kynk_k$(keys, refCallback) : $super.copy_36kynk_k$.call(this, keys, refCallback);
  };
  protoOf(KeysToEffect).toString = function () {
    return 'KeysToEffect(keys=' + this.keys_1 + ', refCallback=' + this.refCallback_1 + ')';
  };
  protoOf(KeysToEffect).hashCode = function () {
    var result = hashCode(this.keys_1);
    result = imul(result, 31) + hashCode(this.refCallback_1) | 0;
    return result;
  };
  protoOf(KeysToEffect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KeysToEffect))
      return false;
    var tmp0_other_with_cast = other instanceof KeysToEffect ? other : THROW_CCE();
    if (!equals(this.keys_1, tmp0_other_with_cast.keys_1))
      return false;
    if (!equals(this.refCallback_1, tmp0_other_with_cast.refCallback_1))
      return false;
    return true;
  };
  function Builder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.keyedCallbacks_1 = ArrayList_init_$Create$();
  }
  protoOf(Builder).ref_ilxxe0_k$ = function (keys, handle) {
    this.keyedCallbacks_1.add_utx5q5_k$(new KeysToEffect(toList(keys), new Simple_0(handle)));
  };
  protoOf(Builder).disposableRef_sdjxhc_k$ = function (keys, effect) {
    this.keyedCallbacks_1.add_utx5q5_k$(new KeysToEffect(toList(keys), new Disposable(effect)));
  };
  protoOf(Builder).add_uaq22z_k$ = function (other) {
    if (!(other == null)) {
      this.keyedCallbacks_1.addAll_4lagoh_k$(other.keyedCallbacks_1);
    }
  };
  protoOf(Builder).build_1k0s4u_k$ = function () {
    return new ElementRefScope(this.keyedCallbacks_1);
  };
  function ElementRefScope(keyedCallbacks) {
    this.keyedCallbacks_1 = keyedCallbacks;
  }
  protoOf(ElementRefScope).get_keyedCallbacks_7cgu1_k$ = function () {
    return this.keyedCallbacks_1;
  };
  protoOf(ElementRefScope).component1_7eebsc_k$ = function () {
    return this.keyedCallbacks_1;
  };
  protoOf(ElementRefScope).copy_veh9cs_k$ = function (keyedCallbacks) {
    return new ElementRefScope(keyedCallbacks);
  };
  protoOf(ElementRefScope).copy$default_dzqv18_k$ = function (keyedCallbacks, $super) {
    keyedCallbacks = keyedCallbacks === VOID ? this.keyedCallbacks_1 : keyedCallbacks;
    return $super === VOID ? this.copy_veh9cs_k$(keyedCallbacks) : $super.copy_veh9cs_k$.call(this, keyedCallbacks);
  };
  protoOf(ElementRefScope).toString = function () {
    return 'ElementRefScope(keyedCallbacks=' + this.keyedCallbacks_1 + ')';
  };
  protoOf(ElementRefScope).hashCode = function () {
    return hashCode(this.keyedCallbacks_1);
  };
  protoOf(ElementRefScope).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementRefScope))
      return false;
    var tmp0_other_with_cast = other instanceof ElementRefScope ? other : THROW_CCE();
    if (!equals(this.keyedCallbacks_1, tmp0_other_with_cast.keyedCallbacks_1))
      return false;
    return true;
  };
  function registerRefScope(_this__u8e3s4, scope, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(1057476357);
    if (isTraceInProgress()) {
      traceEventStart(1057476357, $changed, -1, 'com.varabyte.kobweb.compose.dom.registerRefScope (ElementRefScope.kt:91)');
    }
    $composer_0.startReplaceableGroup_ip860b_k$(49626842);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false ? true : it === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
      // Inline function 'com.varabyte.kobweb.compose.dom.registerRefScope.<anonymous>' call
      var value = registerRefScope$lambda;
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    registerRefScope_0(_this__u8e3s4, scope, tmp0_group, $composer_0, 456);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
  }
  var com_varabyte_kobweb_compose_dom_ElementRefScope$stable;
  function registerRefScope_0(_this__u8e3s4, scope, transform, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(1100234072);
    if (isTraceInProgress()) {
      traceEventStart(1100234072, $changed, -1, 'com.varabyte.kobweb.compose.dom.registerRefScope (ElementRefScope.kt:107)');
    }
    if (scope == null) {
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_0.endReplaceableGroup_ern0ak_k$();
      return Unit_getInstance();
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = scope.keyedCallbacks_1.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.compose.dom.registerRefScope.<anonymous>' call
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_0 = element.keys_1;
      var tmp = copyToArray(this_0).slice();
      DisposableEffect(tmp, registerRefScope$lambda_0(element, transform, _this__u8e3s4), $composer_0, 8);
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
  }
  function refScope(init) {
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.dom.refScope.<anonymous>' call
    // Inline function 'kotlin.apply' call
    var this_0 = new Builder();
    // Inline function 'kotlin.contracts.contract' call
    init(this_0);
    return this_0.build_1k0s4u_k$();
  }
  function registerRefScope$lambda(it) {
    return it;
  }
  function registerRefScope$lambda_0($keyedCallback, $transform, $this_registerRefScope) {
    return function ($this$DisposableEffect) {
      return $keyedCallback.refCallback_1.invoke_64dhf5_k$($this$DisposableEffect, $transform($this_registerRefScope.get_scopeElement_61kop2_k$($this$DisposableEffect)));
    };
  }
  function GenericTag(name, attrsStr, content, $composer, $changed, $default) {
    var attrsStr_0 = {_v: attrsStr};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(149040042);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(name) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(attrsStr_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content_0._v) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.get_skipping_3owdve_k$()) {
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
      $composer_0.startReplaceableGroup_ip860b_k$(1310333791);
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.compose.dom.GenericTag.<anonymous>' call
        $composer_0.startReplaceableGroup_ip860b_k$(746193806);
        // Inline function 'androidx.compose.runtime.cache' call
        var this_0 = $composer_0;
        var invalid = ($dirty & 112) === 32;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = this_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (invalid ? true : it === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
          // Inline function 'com.varabyte.kobweb.compose.dom.GenericTag.<anonymous>.<anonymous>' call
          var value = GenericTag$lambda(attrsStr_0);
          this_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        tmp = tmp0_group;
      }
      var tmp1_group = tmp;
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var attrs = tmp1_group;
      GenericTag_0(name, null, attrs, content_0._v, $composer_0, 48 | 14 & $dirty | 7168 & $dirty << 3, 0);
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
      tmp2_safe_receiver.updateScope_t8jcf_k$(GenericTag$lambda_0(name, attrsStr_0, content_0, $changed, $default));
    }
  }
  function GenericTag_0(name, namespace, attrs, content, $composer, $changed, $default) {
    var namespace_0 = {_v: namespace};
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-5556169);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(name) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(namespace_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content_0._v) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.get_skipping_3owdve_k$()) {
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
        tmp = Companion_getInstance_25().create_dmzjy4_k$(tmp0_safe_receiver, name);
      }
      var tmp1_elvis_lhs = tmp;
      var tmp_0 = tmp1_elvis_lhs == null ? Companion_getInstance_26().create_oysagu_k$(name) : tmp1_elvis_lhs;
      TagElement(isInterface(tmp_0, ElementBuilder) ? tmp_0 : THROW_CCE(), attrs_0._v, content_0._v, $composer_0, 8 | 112 & $dirty >> 3 | 896 & $dirty >> 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver_0 = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      tmp0_safe_receiver_0.updateScope_t8jcf_k$(GenericTag$lambda_1(name, namespace_0, attrs_0, content_0, $changed, $default));
    }
  }
  function _get_cachedBuilders__emr31r($this) {
    return $this.cachedBuilders_1;
  }
  function _get_namespace__iwxsq2($this) {
    return $this.namespace_1;
  }
  function _get_qualifiedName__o5yty($this) {
    return $this.qualifiedName_1;
  }
  function Companion_22() {
    Companion_instance_22 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.cachedBuilders_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(Companion_22).create_dmzjy4_k$ = function (namespace, qualifiedName) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.cachedBuilders_1;
    var key = to(namespace, qualifiedName);
    var value = this_0.get_wei43m_k$(key);
    var tmp;
    if (value == null) {
      // Inline function 'com.varabyte.kobweb.compose.dom.Companion.create.<anonymous>' call
      var answer = new GenericNamespacedElementBuilder(namespace, qualifiedName);
      this_0.put_4fpzoq_k$(key, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    return tmp;
  };
  var Companion_instance_22;
  function Companion_getInstance_25() {
    if (Companion_instance_22 == null)
      new Companion_22();
    return Companion_instance_22;
  }
  function _get_element__z0t21h($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.element$delegate_1;
    element$factory();
    return this_0.get_value_j01efc_k$();
  }
  function GenericNamespacedElementBuilder$element$delegate$lambda(this$0) {
    return function () {
      return document.createElementNS(this$0.namespace_1, this$0.qualifiedName_1);
    };
  }
  function GenericNamespacedElementBuilder(namespace, qualifiedName) {
    Companion_getInstance_25();
    this.namespace_1 = namespace;
    this.qualifiedName_1 = qualifiedName;
    var tmp = this;
    tmp.element$delegate_1 = lazy(GenericNamespacedElementBuilder$element$delegate$lambda(this));
  }
  protoOf(GenericNamespacedElementBuilder).create_md4cuc_k$ = function () {
    var tmp = _get_element__z0t21h(this).cloneNode();
    return tmp instanceof Element ? tmp : THROW_CCE();
  };
  function _get_cachedBuilders__emr31r_0($this) {
    return $this.cachedBuilders_1;
  }
  function _get_name__das4rk($this) {
    return $this.name_1;
  }
  function Companion_23() {
    Companion_instance_23 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.cachedBuilders_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(Companion_23).create_oysagu_k$ = function (name) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.cachedBuilders_1;
    var value = this_0.get_wei43m_k$(name);
    var tmp;
    if (value == null) {
      // Inline function 'com.varabyte.kobweb.compose.dom.Companion.create.<anonymous>' call
      var answer = new GenericElementBuilder(name);
      this_0.put_4fpzoq_k$(name, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    return tmp;
  };
  var Companion_instance_23;
  function Companion_getInstance_26() {
    if (Companion_instance_23 == null)
      new Companion_23();
    return Companion_instance_23;
  }
  function _get_element__z0t21h_0($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.element$delegate_1;
    element$factory_0();
    return this_0.get_value_j01efc_k$();
  }
  function GenericElementBuilder$element$delegate$lambda(this$0) {
    return function () {
      return document.createElement(this$0.name_1);
    };
  }
  function GenericElementBuilder(name) {
    Companion_getInstance_26();
    this.name_1 = name;
    var tmp = this;
    tmp.element$delegate_1 = lazy(GenericElementBuilder$element$delegate$lambda(this));
  }
  protoOf(GenericElementBuilder).create_md4cuc_k$ = function () {
    var tmp = _get_element__z0t21h_0(this).cloneNode();
    return tmp instanceof Element ? tmp : THROW_CCE();
  };
  function GenericTag$_anonymous_$_anonymous_$_anonymous_$parseAttrAssignment_r3pqj($this_null, attrAssignment) {
    var parts = split(attrAssignment, charArrayOf([_Char___init__impl__6a9atx(61)]), VOID, 2);
    var attr = parts.get_c1px32_k$(0);
    // Inline function 'kotlin.collections.getOrElse' call
    var tmp;
    if (1 >= 0 ? 1 <= get_lastIndex(parts) : false) {
      tmp = parts.get_c1px32_k$(1);
    } else {
      // Inline function 'com.varabyte.kobweb.compose.dom.GenericTag.<anonymous>$<anonymous>$<anonymous>$parseAttrAssignment.<anonymous>' call
      tmp = '';
    }
    var value = tmp;
    $this_null.attr_w68641_k$(attr, removeSurrounding(value, '"'));
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
          sb.append_am5a4z_k$(c);
        } else if (c === _Char___init__impl__6a9atx(32)) {
          if (insideQuotes) {
            sb.append_am5a4z_k$(c);
          } else {
            GenericTag$_anonymous_$_anonymous_$_anonymous_$parseAttrAssignment_r3pqj($this$null, sb.toString());
            sb.clear_1keqml_k$();
          }
        } else {
          sb.append_am5a4z_k$(c);
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
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function GenericTag$lambda_0($name, $attrsStr, $content, $$changed, $$default) {
    return function ($composer, $force) {
      GenericTag($name, $attrsStr._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function GenericTag$lambda_1($name, $namespace, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      GenericTag_0($name, $namespace._v, $attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
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
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-2079059220);
    var $dirty = $changed;
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs) ? 32 : 16);
    if (!(($dirty & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-2079059220, $dirty, -1, 'com.varabyte.kobweb.compose.dom.svg.Circle (Svg.kt:804)');
      }
      var tmp = Companion_getInstance_27().invoke_f9pwg4_k$(attrs);
      GenericTag_0('circle', 'http://www.w3.org/2000/svg', tmp, null, $composer_0, 54, 8);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(Circle$lambda(_this__u8e3s4, attrs, $changed));
    }
  }
  function SVGCircleAttrsScope$Companion$invoke$lambda($attrs) {
    return function ($this$null) {
      $attrs(new SVGCircleAttrsScope($this$null));
      return Unit_getInstance();
    };
  }
  function Companion_24() {
    Companion_instance_24 = this;
  }
  protoOf(Companion_24).invoke_f9pwg4_k$ = function (attrs) {
    return SVGCircleAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_24;
  function Companion_getInstance_27() {
    if (Companion_instance_24 == null)
      new Companion_24();
    return Companion_instance_24;
  }
  function SVGCircleAttrsScope(attrs) {
    Companion_getInstance_27();
    SVGGraphicalElementAttrsScope.call(this, attrs);
  }
  protoOf(SVGCircleAttrsScope).r_4ompmx_k$ = function (value) {
    this.attr_w68641_k$('r', toString(value));
  };
  protoOf(SVGCircleAttrsScope).r_uxqzt5_k$ = function (value) {
    this.attr_w68641_k$('r', toString(value));
  };
  function Line(_this__u8e3s4, attrs, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-846499000);
    var $dirty = $changed;
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs) ? 32 : 16);
    if (!(($dirty & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-846499000, $dirty, -1, 'com.varabyte.kobweb.compose.dom.svg.Line (Svg.kt:979)');
      }
      var tmp = Companion_getInstance_28().invoke_zctbq8_k$(attrs);
      GenericTag_0('line', 'http://www.w3.org/2000/svg', tmp, null, $composer_0, 54, 8);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(Line$lambda(_this__u8e3s4, attrs, $changed));
    }
  }
  function SVGLineAttrsScope$Companion$invoke$lambda($attrs) {
    return function ($this$null) {
      $attrs(new SVGLineAttrsScope($this$null));
      return Unit_getInstance();
    };
  }
  function Companion_25() {
    Companion_instance_25 = this;
  }
  protoOf(Companion_25).invoke_zctbq8_k$ = function (attrs) {
    return SVGLineAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_25;
  function Companion_getInstance_28() {
    if (Companion_instance_25 == null)
      new Companion_25();
    return Companion_instance_25;
  }
  function SVGLineAttrsScope(attrs) {
    Companion_getInstance_28();
    SVGGraphicalElementAttrsScope.call(this, attrs);
  }
  protoOf(SVGLineAttrsScope).x1_oqfh9a_k$ = function (value) {
    this.attr_w68641_k$('x1', toString(value));
  };
  protoOf(SVGLineAttrsScope).x2_mok5q7_k$ = function (value) {
    this.attr_w68641_k$('x2', toString(value));
  };
  protoOf(SVGLineAttrsScope).y1_w5klst_k$ = function (value) {
    this.attr_w68641_k$('y1', toString(value));
  };
  protoOf(SVGLineAttrsScope).y2_u3pa9q_k$ = function (value) {
    this.attr_w68641_k$('y2', toString(value));
  };
  protoOf(SVGLineAttrsScope).x1_97ul5q_k$ = function (value) {
    this.attr_w68641_k$('x1', toString(value));
  };
  protoOf(SVGLineAttrsScope).x2_lnaw73_k$ = function (value) {
    this.attr_w68641_k$('x2', toString(value));
  };
  protoOf(SVGLineAttrsScope).y1_vns8ir_k$ = function (value) {
    this.attr_w68641_k$('y1', toString(value));
  };
  protoOf(SVGLineAttrsScope).y2_j8bxhe_k$ = function (value) {
    this.attr_w68641_k$('y2', toString(value));
  };
  function SVGSvgAttrsScope$Companion$invoke$lambda($attrs) {
    return function ($this$null) {
      if (!($attrs == null))
        $attrs(new SVGSvgAttrsScope($this$null));
      return Unit_getInstance();
    };
  }
  function Companion_26() {
    Companion_instance_26 = this;
  }
  protoOf(Companion_26).invoke_uvzfhd_k$ = function (attrs) {
    return SVGSvgAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_26;
  function Companion_getInstance_29() {
    if (Companion_instance_26 == null)
      new Companion_26();
    return Companion_instance_26;
  }
  function SVGSvgAttrsScope(attrs) {
    Companion_getInstance_29();
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
    this.$$delegate_0__1 = attrs;
  }
  protoOf(SVGElementAttrsScope).addEventListener_pu8o1q_k$ = function (eventName, listener) {
    this.$$delegate_0__1.addEventListener_pu8o1q_k$(eventName, listener);
  };
  protoOf(SVGElementAttrsScope).addEventListener_xhf81m_k$ = function (eventName, listener) {
    this.$$delegate_0__1.addEventListener_xhf81m_k$(eventName, listener);
  };
  protoOf(SVGElementAttrsScope).attr_w68641_k$ = function (attr, value) {
    return this.$$delegate_0__1.attr_w68641_k$(attr, value);
  };
  protoOf(SVGElementAttrsScope).classes_ayghm2_k$ = function (classes) {
    this.$$delegate_0__1.classes_ayghm2_k$(classes);
  };
  protoOf(SVGElementAttrsScope).classes_ephr7k_k$ = function (classes) {
    this.$$delegate_0__1.classes_ephr7k_k$(classes);
  };
  protoOf(SVGElementAttrsScope).contentEditable_hbi188_k$ = function (value) {
    return this.$$delegate_0__1.contentEditable_hbi188_k$(value);
  };
  protoOf(SVGElementAttrsScope).dir_uokp4q_k$ = function (value) {
    return this.$$delegate_0__1.dir_uokp4q_k$(value);
  };
  protoOf(SVGElementAttrsScope).draggable_cxyxb5_k$ = function (value) {
    return this.$$delegate_0__1.draggable_cxyxb5_k$(value);
  };
  protoOf(SVGElementAttrsScope).hidden_k4uzbq_k$ = function () {
    return this.$$delegate_0__1.hidden_k4uzbq_k$();
  };
  protoOf(SVGElementAttrsScope).id_e4l56n_k$ = function (value) {
    return this.$$delegate_0__1.id_e4l56n_k$(value);
  };
  protoOf(SVGElementAttrsScope).inputMode_1lh0s3_k$ = function (value) {
    return this.$$delegate_0__1.inputMode_1lh0s3_k$(value);
  };
  protoOf(SVGElementAttrsScope).inputMode_7krh0f_k$ = function (value) {
    return this.$$delegate_0__1.inputMode_7krh0f_k$(value);
  };
  protoOf(SVGElementAttrsScope).lang_9i4u6k_k$ = function (value) {
    return this.$$delegate_0__1.lang_9i4u6k_k$(value);
  };
  protoOf(SVGElementAttrsScope).onAnimationEnd_l576ug_k$ = function (listener) {
    this.$$delegate_0__1.onAnimationEnd_l576ug_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onAnimationIteration_o79r9y_k$ = function (listener) {
    this.$$delegate_0__1.onAnimationIteration_o79r9y_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onAnimationStart_ir5kdr_k$ = function (listener) {
    this.$$delegate_0__1.onAnimationStart_ir5kdr_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onBlur_yy3d4s_k$ = function (listener) {
    this.$$delegate_0__1.onBlur_yy3d4s_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onClick_q9cds6_k$ = function (listener) {
    this.$$delegate_0__1.onClick_q9cds6_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onContextMenu_uus4bk_k$ = function (listener) {
    this.$$delegate_0__1.onContextMenu_uus4bk_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onCopy_4jq33g_k$ = function (listener) {
    this.$$delegate_0__1.onCopy_4jq33g_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onCut_wod3pf_k$ = function (listener) {
    this.$$delegate_0__1.onCut_wod3pf_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onDoubleClick_gh82mh_k$ = function (listener) {
    this.$$delegate_0__1.onDoubleClick_gh82mh_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onDrag_xkse65_k$ = function (listener) {
    this.$$delegate_0__1.onDrag_xkse65_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onDragEnd_4or1o2_k$ = function (listener) {
    this.$$delegate_0__1.onDragEnd_4or1o2_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onDragEnter_9tqs4v_k$ = function (listener) {
    this.$$delegate_0__1.onDragEnter_9tqs4v_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onDragLeave_nsncqa_k$ = function (listener) {
    this.$$delegate_0__1.onDragLeave_nsncqa_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onDragOver_tkxwb3_k$ = function (listener) {
    this.$$delegate_0__1.onDragOver_tkxwb3_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onDragStart_ispt2x_k$ = function (listener) {
    this.$$delegate_0__1.onDragStart_ispt2x_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onDrop_373vqw_k$ = function (listener) {
    this.$$delegate_0__1.onDrop_373vqw_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onFocus_ozgn2v_k$ = function (listener) {
    this.$$delegate_0__1.onFocus_ozgn2v_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onFocusIn_vryg4c_k$ = function (listener) {
    this.$$delegate_0__1.onFocusIn_vryg4c_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onFocusOut_jw1zh_k$ = function (listener) {
    this.$$delegate_0__1.onFocusOut_jw1zh_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onKeyDown_2pa1il_k$ = function (listener) {
    this.$$delegate_0__1.onKeyDown_2pa1il_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onKeyUp_g6q8ee_k$ = function (listener) {
    this.$$delegate_0__1.onKeyUp_g6q8ee_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onMouseDown_hebxzb_k$ = function (listener) {
    this.$$delegate_0__1.onMouseDown_hebxzb_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onMouseEnter_smfckd_k$ = function (listener) {
    this.$$delegate_0__1.onMouseEnter_smfckd_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onMouseLeave_j862le_k$ = function (listener) {
    this.$$delegate_0__1.onMouseLeave_j862le_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onMouseMove_r2z3wo_k$ = function (listener) {
    this.$$delegate_0__1.onMouseMove_r2z3wo_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onMouseOut_nootgn_k$ = function (listener) {
    this.$$delegate_0__1.onMouseOut_nootgn_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onMouseOver_o893qj_k$ = function (listener) {
    this.$$delegate_0__1.onMouseOver_o893qj_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onMouseUp_at21zm_k$ = function (listener) {
    this.$$delegate_0__1.onMouseUp_at21zm_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onPaste_8ucd2k_k$ = function (listener) {
    this.$$delegate_0__1.onPaste_8ucd2k_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onScroll_ur92mf_k$ = function (listener) {
    this.$$delegate_0__1.onScroll_ur92mf_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onTouchCancel_rg0d1t_k$ = function (listener) {
    this.$$delegate_0__1.onTouchCancel_rg0d1t_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onTouchEnd_ugz1se_k$ = function (listener) {
    this.$$delegate_0__1.onTouchEnd_ugz1se_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onTouchMove_wm6qxk_k$ = function (listener) {
    this.$$delegate_0__1.onTouchMove_wm6qxk_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onTouchStart_4yr0c9_k$ = function (listener) {
    this.$$delegate_0__1.onTouchStart_4yr0c9_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onWheel_59frrx_k$ = function (listener) {
    this.$$delegate_0__1.onWheel_59frrx_k$(listener);
  };
  protoOf(SVGElementAttrsScope).prop_cha5mt_k$ = function (update, value) {
    this.$$delegate_0__1.prop_cha5mt_k$(update, value);
  };
  protoOf(SVGElementAttrsScope).ref_wkg4fv_k$ = function (effect) {
    this.$$delegate_0__1.ref_o4g25g_k$(effect);
  };
  protoOf(SVGElementAttrsScope).ref_o4g25g_k$ = function (effect) {
    return this.ref_wkg4fv_k$(effect);
  };
  protoOf(SVGElementAttrsScope).registerEventListener_oiyxlj_k$ = function (listener) {
    this.$$delegate_0__1.registerEventListener_oiyxlj_k$(listener);
  };
  protoOf(SVGElementAttrsScope).spellCheck_hp5v6j_k$ = function (value) {
    return this.$$delegate_0__1.spellCheck_hp5v6j_k$(value);
  };
  protoOf(SVGElementAttrsScope).style_xwwy6r_k$ = function (builder) {
    this.$$delegate_0__1.style_xwwy6r_k$(builder);
  };
  protoOf(SVGElementAttrsScope).tabIndex_fn4aj_k$ = function (value) {
    return this.$$delegate_0__1.tabIndex_fn4aj_k$(value);
  };
  protoOf(SVGElementAttrsScope).title_qpfo4e_k$ = function (value) {
    return this.$$delegate_0__1.title_qpfo4e_k$(value);
  };
  protoOf(SVGElementAttrsScope).transform_smv5a6_k$ = function (transformScope) {
    var scope = new SVGTransformScope();
    transformScope(scope);
    this.attr_w68641_k$('transform', joinToString(scope.transformCommands_1, ' '));
  };
  function PresentationAttrs$strokeDashArray$lambda(it) {
    return toString(it);
  }
  function PresentationAttrs$strokeDashArray$lambda_0(it) {
    return toString(it);
  }
  function PresentationAttrs() {
  }
  function Companion_27() {
    Companion_instance_27 = this;
  }
  protoOf(Companion_27).sized_aiz6wt_k$ = function (width, height) {
    return new ViewBox(0, 0, width, height);
  };
  protoOf(Companion_27).sized$default_id0xg9_k$ = function (width, height, $super) {
    height = height === VOID ? width : height;
    return $super === VOID ? this.sized_aiz6wt_k$(width, height) : $super.sized_aiz6wt_k$.call(this, width, height);
  };
  var Companion_instance_27;
  function Companion_getInstance_30() {
    if (Companion_instance_27 == null)
      new Companion_27();
    return Companion_instance_27;
  }
  function ViewBox(x, y, width, height) {
    Companion_getInstance_30();
    this.x_1 = x;
    this.y_1 = y;
    this.width_1 = width;
    this.height_1 = height;
  }
  protoOf(ViewBox).get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  protoOf(ViewBox).get_y_1mhr68_k$ = function () {
    return this.y_1;
  };
  protoOf(ViewBox).get_width_j0q4yl_k$ = function () {
    return this.width_1;
  };
  protoOf(ViewBox).get_height_e7t92o_k$ = function () {
    return this.height_1;
  };
  function SVGTransformScope() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.transformCommands_1 = ArrayList_init_$Create$();
  }
  protoOf(SVGTransformScope).get_transformCommands_ho3623_k$ = function () {
    return this.transformCommands_1;
  };
  protoOf(SVGTransformScope).matrix_4qaz4h_k$ = function (a, b, c, d, e, f) {
    this.transformCommands_1.add_utx5q5_k$('matrix(' + toString(a) + ' ' + toString(b) + ' ' + toString(c) + ' ' + toString(d) + ' ' + toString(e) + ' ' + toString(f) + ')');
  };
  protoOf(SVGTransformScope).translate_es2bih_k$ = function (x, y) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.dom.svg.SVGTransformScope.translate.<anonymous>' call
    this_0.append_22ad7x_k$('translate(' + toString(x));
    if (y == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.dom.svg.SVGTransformScope.translate.<anonymous>.<anonymous>' call
      this_0.append_22ad7x_k$(' ' + toString(y));
    }
    this_0.append_22ad7x_k$(')');
    var tmp$ret$3 = this_0.toString();
    this.transformCommands_1.add_utx5q5_k$(tmp$ret$3);
  };
  protoOf(SVGTransformScope).translate$default_8lzvt7_k$ = function (x, y, $super) {
    y = y === VOID ? null : y;
    var tmp;
    if ($super === VOID) {
      this.translate_es2bih_k$(x, y);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.translate_es2bih_k$.call(this, x, y);
    }
    return tmp;
  };
  protoOf(SVGTransformScope).translateX_ud826n_k$ = function (value) {
    this.translate$default_8lzvt7_k$(value);
  };
  protoOf(SVGTransformScope).translateY_sbcqnk_k$ = function (value) {
    this.translate_es2bih_k$(0, value);
  };
  protoOf(SVGTransformScope).scale_c9i1jh_k$ = function (x, y) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.dom.svg.SVGTransformScope.scale.<anonymous>' call
    this_0.append_22ad7x_k$('scale(' + toString(x));
    if (y == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.dom.svg.SVGTransformScope.scale.<anonymous>.<anonymous>' call
      this_0.append_22ad7x_k$(' ' + toString(y));
    }
    this_0.append_22ad7x_k$(')');
    var tmp$ret$3 = this_0.toString();
    this.transformCommands_1.add_utx5q5_k$(tmp$ret$3);
  };
  protoOf(SVGTransformScope).scale$default_les05r_k$ = function (x, y, $super) {
    y = y === VOID ? null : y;
    var tmp;
    if ($super === VOID) {
      this.scale_c9i1jh_k$(x, y);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.scale_c9i1jh_k$.call(this, x, y);
    }
    return tmp;
  };
  protoOf(SVGTransformScope).scaleX_5vhlnx_k$ = function (value) {
    this.scale$default_les05r_k$(value);
  };
  protoOf(SVGTransformScope).scaleY_7xcx70_k$ = function (value) {
    this.scale_c9i1jh_k$(1, value);
  };
  protoOf(SVGTransformScope).rotate_lnsw20_k$ = function (angle, x, y) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.dom.svg.SVGTransformScope.rotate.<anonymous>' call
    this_0.append_22ad7x_k$('rotate(' + toString(angle));
    if (x == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.dom.svg.SVGTransformScope.rotate.<anonymous>.<anonymous>' call
      this_0.append_22ad7x_k$(' ' + toString(x));
    }
    if (y == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.dom.svg.SVGTransformScope.rotate.<anonymous>.<anonymous>' call
      this_0.append_22ad7x_k$(' ' + toString(y));
    }
    this_0.append_22ad7x_k$(')');
    var tmp$ret$5 = this_0.toString();
    this.transformCommands_1.add_utx5q5_k$(tmp$ret$5);
  };
  protoOf(SVGTransformScope).rotate$default_an1ocb_k$ = function (angle, x, y, $super) {
    x = x === VOID ? null : x;
    y = y === VOID ? null : y;
    var tmp;
    if ($super === VOID) {
      this.rotate_lnsw20_k$(angle, x, y);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.rotate_lnsw20_k$.call(this, angle, x, y);
    }
    return tmp;
  };
  protoOf(SVGTransformScope).rotate_t30zjy_k$ = function (angle, x, y) {
    this.rotate_lnsw20_k$(toDegrees(angle), x, y);
  };
  protoOf(SVGTransformScope).rotate$default_6p7g9n_k$ = function (angle, x, y, $super) {
    x = x === VOID ? null : x;
    y = y === VOID ? null : y;
    var tmp;
    if ($super === VOID) {
      this.rotate_t30zjy_k$(angle, x, y);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.rotate_t30zjy_k$.call(this, angle, x, y);
    }
    return tmp;
  };
  protoOf(SVGTransformScope).skewX_j3bzv7_k$ = function (angle) {
    this.transformCommands_1.add_utx5q5_k$('skewX(' + toString(angle) + ')');
  };
  protoOf(SVGTransformScope).skewX_vhgz95_k$ = function (angle) {
    this.skewX_j3bzv7_k$(toDegrees(angle));
  };
  protoOf(SVGTransformScope).skewY_h1goc4_k$ = function (angle) {
    this.transformCommands_1.add_utx5q5_k$('skewY(' + toString(angle) + ')');
  };
  protoOf(SVGTransformScope).skewY_yc4et6_k$ = function (angle) {
    this.skewY_h1goc4_k$(toDegrees(angle));
  };
  var SVGStrokeType_None_instance;
  var SVGStrokeType_CurrentColor_instance;
  function values_2() {
    return [SVGStrokeType_None_getInstance(), SVGStrokeType_CurrentColor_getInstance()];
  }
  function valueOf_2(value) {
    switch (value) {
      case 'None':
        return SVGStrokeType_None_getInstance();
      case 'CurrentColor':
        return SVGStrokeType_CurrentColor_getInstance();
      default:
        SVGStrokeType_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_2() {
    if ($ENTRIES_2 == null)
      $ENTRIES_2 = enumEntries(values_2());
    return $ENTRIES_2;
  }
  var SVGStrokeType_entriesInitialized;
  function SVGStrokeType_initEntries() {
    if (SVGStrokeType_entriesInitialized)
      return Unit_getInstance();
    SVGStrokeType_entriesInitialized = true;
    SVGStrokeType_None_instance = new SVGStrokeType('None', 0);
    SVGStrokeType_CurrentColor_instance = new SVGStrokeType('CurrentColor', 1);
  }
  var $ENTRIES_2;
  function SVGStrokeType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SVGStrokeType).toString = function () {
    return toSvgValue(this);
  };
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
  function _SvgId___get_hashReference__impl__naeswu($this) {
    return '#' + _SvgId___get_value__impl__pof1ma($this);
  }
  function SvgId__hashCode_impl_s5f9sj($this) {
    return getStringHashCode($this);
  }
  function SvgId__equals_impl_mxwuq9($this, other) {
    if (!(other instanceof SvgId))
      return false;
    if (!($this === (other instanceof SvgId ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function SvgId(value) {
    this.value_1 = value;
  }
  protoOf(SvgId).toString = function () {
    return SvgId__toString_impl_l4ivdq(this.value_1);
  };
  protoOf(SvgId).hashCode = function () {
    return SvgId__hashCode_impl_s5f9sj(this.value_1);
  };
  protoOf(SvgId).equals = function (other) {
    return SvgId__equals_impl_mxwuq9(this.value_1, other);
  };
  var SVGStrokeLineCap_Butt_instance;
  var SVGStrokeLineCap_Round_instance;
  var SVGStrokeLineCap_Square_instance;
  function values_3() {
    return [SVGStrokeLineCap_Butt_getInstance(), SVGStrokeLineCap_Round_getInstance(), SVGStrokeLineCap_Square_getInstance()];
  }
  function valueOf_3(value) {
    switch (value) {
      case 'Butt':
        return SVGStrokeLineCap_Butt_getInstance();
      case 'Round':
        return SVGStrokeLineCap_Round_getInstance();
      case 'Square':
        return SVGStrokeLineCap_Square_getInstance();
      default:
        SVGStrokeLineCap_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_3() {
    if ($ENTRIES_3 == null)
      $ENTRIES_3 = enumEntries(values_3());
    return $ENTRIES_3;
  }
  var SVGStrokeLineCap_entriesInitialized;
  function SVGStrokeLineCap_initEntries() {
    if (SVGStrokeLineCap_entriesInitialized)
      return Unit_getInstance();
    SVGStrokeLineCap_entriesInitialized = true;
    SVGStrokeLineCap_Butt_instance = new SVGStrokeLineCap('Butt', 0);
    SVGStrokeLineCap_Round_instance = new SVGStrokeLineCap('Round', 1);
    SVGStrokeLineCap_Square_instance = new SVGStrokeLineCap('Square', 2);
  }
  var $ENTRIES_3;
  function SVGStrokeLineCap(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SVGStrokeLineCap).toString = function () {
    return toSvgValue(this);
  };
  var SVGStrokeLineJoin_Miter_instance;
  var SVGStrokeLineJoin_Round_instance;
  var SVGStrokeLineJoin_Bevel_instance;
  function values_4() {
    return [SVGStrokeLineJoin_Miter_getInstance(), SVGStrokeLineJoin_Round_getInstance(), SVGStrokeLineJoin_Bevel_getInstance()];
  }
  function valueOf_4(value) {
    switch (value) {
      case 'Miter':
        return SVGStrokeLineJoin_Miter_getInstance();
      case 'Round':
        return SVGStrokeLineJoin_Round_getInstance();
      case 'Bevel':
        return SVGStrokeLineJoin_Bevel_getInstance();
      default:
        SVGStrokeLineJoin_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_4() {
    if ($ENTRIES_4 == null)
      $ENTRIES_4 = enumEntries(values_4());
    return $ENTRIES_4;
  }
  var SVGStrokeLineJoin_entriesInitialized;
  function SVGStrokeLineJoin_initEntries() {
    if (SVGStrokeLineJoin_entriesInitialized)
      return Unit_getInstance();
    SVGStrokeLineJoin_entriesInitialized = true;
    SVGStrokeLineJoin_Miter_instance = new SVGStrokeLineJoin('Miter', 0);
    SVGStrokeLineJoin_Round_instance = new SVGStrokeLineJoin('Round', 1);
    SVGStrokeLineJoin_Bevel_instance = new SVGStrokeLineJoin('Bevel', 2);
  }
  var $ENTRIES_4;
  function SVGStrokeLineJoin(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SVGStrokeLineJoin).toString = function () {
    return toSvgValue(this);
  };
  var SVGFillType_None_instance;
  var SVGFillType_CurrentColor_instance;
  function values_5() {
    return [SVGFillType_None_getInstance(), SVGFillType_CurrentColor_getInstance()];
  }
  function valueOf_5(value) {
    switch (value) {
      case 'None':
        return SVGFillType_None_getInstance();
      case 'CurrentColor':
        return SVGFillType_CurrentColor_getInstance();
      default:
        SVGFillType_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_5() {
    if ($ENTRIES_5 == null)
      $ENTRIES_5 = enumEntries(values_5());
    return $ENTRIES_5;
  }
  var SVGFillType_entriesInitialized;
  function SVGFillType_initEntries() {
    if (SVGFillType_entriesInitialized)
      return Unit_getInstance();
    SVGFillType_entriesInitialized = true;
    SVGFillType_None_instance = new SVGFillType('None', 0);
    SVGFillType_CurrentColor_instance = new SVGFillType('CurrentColor', 1);
  }
  var $ENTRIES_5;
  function SVGFillType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SVGFillType).toString = function () {
    return toSvgValue(this);
  };
  var SVGFillRule_NonZero_instance;
  var SVGFillRule_EvenOdd_instance;
  function values_6() {
    return [SVGFillRule_NonZero_getInstance(), SVGFillRule_EvenOdd_getInstance()];
  }
  function valueOf_6(value) {
    switch (value) {
      case 'NonZero':
        return SVGFillRule_NonZero_getInstance();
      case 'EvenOdd':
        return SVGFillRule_EvenOdd_getInstance();
      default:
        SVGFillRule_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_6() {
    if ($ENTRIES_6 == null)
      $ENTRIES_6 = enumEntries(values_6());
    return $ENTRIES_6;
  }
  var SVGFillRule_entriesInitialized;
  function SVGFillRule_initEntries() {
    if (SVGFillRule_entriesInitialized)
      return Unit_getInstance();
    SVGFillRule_entriesInitialized = true;
    SVGFillRule_NonZero_instance = new SVGFillRule('NonZero', 0);
    SVGFillRule_EvenOdd_instance = new SVGFillRule('EvenOdd', 1);
  }
  var $ENTRIES_6;
  function SVGFillRule(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SVGFillRule).toString = function () {
    return toSvgValue(this);
  };
  function toSvgValue(_this__u8e3s4) {
    // Inline function 'kotlin.text.replaceFirstChar' call
    var this_0 = _this__u8e3s4.get_name_woqyms_k$();
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
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(302969729);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(302969729, $dirty, -1, 'com.varabyte.kobweb.compose.dom.svg.Svg (Svg.kt:433)');
      }
      GenericTag_0('svg', 'http://www.w3.org/2000/svg', Companion_getInstance_29().invoke_uvzfhd_k$(attrs_0._v), content, $composer_0, 54 | 7168 & $dirty << 6, 0);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(Svg$lambda(attrs_0, content, $changed, $default));
    }
  }
  function Path(_this__u8e3s4, attrs, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(275418487);
    var $dirty = $changed;
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs) ? 32 : 16);
    if (!(($dirty & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(275418487, $dirty, -1, 'com.varabyte.kobweb.compose.dom.svg.Path (Svg.kt:1098)');
      }
      var tmp = Companion_getInstance_31().invoke_ck7z5b_k$(attrs);
      GenericTag_0('path', 'http://www.w3.org/2000/svg', tmp, null, $composer_0, 54, 8);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(Path$lambda(_this__u8e3s4, attrs, $changed));
    }
  }
  function SVGPathAttrsScope$Companion$invoke$lambda($attrs) {
    return function ($this$null) {
      $attrs(new SVGPathAttrsScope($this$null));
      return Unit_getInstance();
    };
  }
  function Companion_28() {
    Companion_instance_28 = this;
  }
  protoOf(Companion_28).invoke_ck7z5b_k$ = function (attrs) {
    return SVGPathAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_28;
  function Companion_getInstance_31() {
    if (Companion_instance_28 == null)
      new Companion_28();
    return Companion_instance_28;
  }
  function SVGPathAttrsScope(attrs) {
    Companion_getInstance_31();
    SVGGraphicalElementAttrsScope.call(this, attrs);
  }
  protoOf(SVGPathAttrsScope).d_tonr5x_k$ = function (pathDataScope) {
    // Inline function 'kotlin.apply' call
    var this_0 = new SVGPathDataScope();
    // Inline function 'kotlin.contracts.contract' call
    pathDataScope(this_0);
    this.attr_w68641_k$('d', joinToString(this_0.pathCommands_1, ' '));
  };
  protoOf(SVGPathAttrsScope).d_e5qqiu_k$ = function (value) {
    this.attr_w68641_k$('d', value);
  };
  function SVGPathDataScope() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.pathCommands_1 = ArrayList_init_$Create$();
  }
  protoOf(SVGPathDataScope).get_pathCommands_p1akmi_k$ = function () {
    return this.pathCommands_1;
  };
  protoOf(SVGPathDataScope).moveTo_3kg6ro_k$ = function (x, y) {
    this.pathCommands_1.add_utx5q5_k$('M ' + toString(x) + ' ' + toString(y));
  };
  protoOf(SVGPathDataScope).lineTo_wo5zt2_k$ = function (x, y, isRelative) {
    var command = isRelative ? 'l' : 'L';
    this.pathCommands_1.add_utx5q5_k$(command + ' ' + toString(x) + ' ' + toString(y));
  };
  protoOf(SVGPathDataScope).lineTo$default_92g2t9_k$ = function (x, y, isRelative, $super) {
    isRelative = isRelative === VOID ? false : isRelative;
    var tmp;
    if ($super === VOID) {
      this.lineTo_wo5zt2_k$(x, y, isRelative);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.lineTo_wo5zt2_k$.call(this, x, y, isRelative);
    }
    return tmp;
  };
  protoOf(SVGPathDataScope).verticalLineTo_1jzv3_k$ = function (x, isRelative) {
    var command = isRelative ? 'v' : 'V';
    this.pathCommands_1.add_utx5q5_k$(command + ' ' + toString(x));
  };
  protoOf(SVGPathDataScope).verticalLineTo$default_w5grj4_k$ = function (x, isRelative, $super) {
    isRelative = isRelative === VOID ? false : isRelative;
    var tmp;
    if ($super === VOID) {
      this.verticalLineTo_1jzv3_k$(x, isRelative);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.verticalLineTo_1jzv3_k$.call(this, x, isRelative);
    }
    return tmp;
  };
  protoOf(SVGPathDataScope).horizontalLineTo_vd3o5f_k$ = function (x, isRelative) {
    var command = isRelative ? 'h' : 'H';
    this.pathCommands_1.add_utx5q5_k$(command + ' ' + toString(x));
  };
  protoOf(SVGPathDataScope).horizontalLineTo$default_sdjoge_k$ = function (x, isRelative, $super) {
    isRelative = isRelative === VOID ? false : isRelative;
    var tmp;
    if ($super === VOID) {
      this.horizontalLineTo_vd3o5f_k$(x, isRelative);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.horizontalLineTo_vd3o5f_k$.call(this, x, isRelative);
    }
    return tmp;
  };
  protoOf(SVGPathDataScope).curveTo_dux3mz_k$ = function (x1, y1, x2, y2, x, y, isRelative) {
    var command = isRelative ? 'c' : 'C';
    this.pathCommands_1.add_utx5q5_k$(command + ' ' + toString(x1) + ' ' + toString(y1) + ' ' + toString(x2) + ' ' + toString(y2) + ' ' + toString(x) + ' ' + toString(y));
  };
  protoOf(SVGPathDataScope).curveTo$default_10zpsu_k$ = function (x1, y1, x2, y2, x, y, isRelative, $super) {
    isRelative = isRelative === VOID ? false : isRelative;
    var tmp;
    if ($super === VOID) {
      this.curveTo_dux3mz_k$(x1, y1, x2, y2, x, y, isRelative);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.curveTo_dux3mz_k$.call(this, x1, y1, x2, y2, x, y, isRelative);
    }
    return tmp;
  };
  protoOf(SVGPathDataScope).smoothCurveTo_m2p9yf_k$ = function (x2, y2, x, y, isRelative) {
    var command = isRelative ? 's' : 'S';
    this.pathCommands_1.add_utx5q5_k$(command + ' ' + toString(x2) + ' ' + toString(y2) + ' ' + toString(x) + ' ' + toString(y));
  };
  protoOf(SVGPathDataScope).smoothCurveTo$default_an6pv4_k$ = function (x2, y2, x, y, isRelative, $super) {
    isRelative = isRelative === VOID ? false : isRelative;
    var tmp;
    if ($super === VOID) {
      this.smoothCurveTo_m2p9yf_k$(x2, y2, x, y, isRelative);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.smoothCurveTo_m2p9yf_k$.call(this, x2, y2, x, y, isRelative);
    }
    return tmp;
  };
  protoOf(SVGPathDataScope).quadraticBezierCurve_4zqqkj_k$ = function (x1, y1, x, y, isRelative) {
    var command = isRelative ? 'q' : 'Q';
    this.pathCommands_1.add_utx5q5_k$(command + ' ' + toString(x1) + ' ' + toString(y1) + ' ' + toString(x) + ' ' + toString(y));
  };
  protoOf(SVGPathDataScope).smoothQuadraticBezierCurve_qx2ddd_k$ = function (x, y, isRelative) {
    var command = isRelative ? 't' : 'T';
    this.pathCommands_1.add_utx5q5_k$(command + ' ' + toString(x) + ' ' + toString(y));
  };
  protoOf(SVGPathDataScope).ellipticalArc_dlakgh_k$ = function (rx, ry, rotate, largeArcFlag, sweepFlag, x, y, isRelative) {
    var command = isRelative ? 'a' : 'A';
    this.pathCommands_1.add_utx5q5_k$(command + ' ' + toString(rx) + ' ' + toString(ry) + ' ' + toString(rotate) + ' ' + toString(largeArcFlag) + ' ' + toString(sweepFlag) + ' ' + toString(x) + ' ' + toString(y));
  };
  protoOf(SVGPathDataScope).ellipticalArc$default_j89yrk_k$ = function (rx, ry, rotate, largeArcFlag, sweepFlag, x, y, isRelative, $super) {
    isRelative = isRelative === VOID ? false : isRelative;
    var tmp;
    if ($super === VOID) {
      this.ellipticalArc_dlakgh_k$(rx, ry, rotate, largeArcFlag, sweepFlag, x, y, isRelative);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.ellipticalArc_dlakgh_k$.call(this, rx, ry, rotate, largeArcFlag, sweepFlag, x, y, isRelative);
    }
    return tmp;
  };
  protoOf(SVGPathDataScope).closePath_hm2tg3_k$ = function () {
    this.pathCommands_1.add_utx5q5_k$('Z');
  };
  function Polyline(_this__u8e3s4, attrs, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(741814780);
    var $dirty = $changed;
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs) ? 32 : 16);
    if (!(($dirty & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(741814780, $dirty, -1, 'com.varabyte.kobweb.compose.dom.svg.Polyline (Svg.kt:1161)');
      }
      var tmp = Companion_getInstance_32().invoke_cy68no_k$(attrs);
      GenericTag_0('polyline', 'http://www.w3.org/2000/svg', tmp, null, $composer_0, 54, 8);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(Polyline$lambda(_this__u8e3s4, attrs, $changed));
    }
  }
  function SVGPolylineAttrsScope$Companion$invoke$lambda($attrs) {
    return function ($this$null) {
      $attrs(new SVGPolylineAttrsScope($this$null));
      return Unit_getInstance();
    };
  }
  function Companion_29() {
    Companion_instance_29 = this;
  }
  protoOf(Companion_29).invoke_cy68no_k$ = function (attrs) {
    return SVGPolylineAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_29;
  function Companion_getInstance_32() {
    if (Companion_instance_29 == null)
      new Companion_29();
    return Companion_instance_29;
  }
  function SVGPolylineAttrsScope(attrs) {
    Companion_getInstance_32();
    SVGGraphicalElementAttrsScope.call(this, attrs);
  }
  function Rect(_this__u8e3s4, attrs, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(151044952);
    var $dirty = $changed;
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs) ? 32 : 16);
    if (!(($dirty & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(151044952, $dirty, -1, 'com.varabyte.kobweb.compose.dom.svg.Rect (Svg.kt:1223)');
      }
      var tmp = Companion_getInstance_33().invoke_ytzn80_k$(attrs);
      GenericTag_0('rect', 'http://www.w3.org/2000/svg', tmp, null, $composer_0, 54, 8);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(Rect$lambda(_this__u8e3s4, attrs, $changed));
    }
  }
  function SVGRectAttrsScope$Companion$invoke$lambda($attrs) {
    return function ($this$null) {
      $attrs(new SVGRectAttrsScope($this$null));
      return Unit_getInstance();
    };
  }
  function Companion_30() {
    Companion_instance_30 = this;
  }
  protoOf(Companion_30).invoke_ytzn80_k$ = function (attrs) {
    return SVGRectAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_30;
  function Companion_getInstance_33() {
    if (Companion_instance_30 == null)
      new Companion_30();
    return Companion_instance_30;
  }
  function SVGRectAttrsScope(attrs) {
    Companion_getInstance_33();
    SVGGraphicalElementAttrsScope.call(this, attrs);
  }
  protoOf(SVGRectAttrsScope).rx_neywol_k$ = function (value) {
    this.attr_w68641_k$('rx', toString(value));
  };
  protoOf(SVGRectAttrsScope).ry_pgu87o_k$ = function (value) {
    this.attr_w68641_k$('ry', toString(value));
  };
  protoOf(SVGRectAttrsScope).rx_h0fbf_k$ = function (value) {
    this.attr_w68641_k$('rx', toString(value));
  };
  protoOf(SVGRectAttrsScope).ry_cwgqcs_k$ = function (value) {
    this.attr_w68641_k$('ry', toString(value));
  };
  function Group(_this__u8e3s4, attrs, content, $composer, $changed, $default) {
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-214649536);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs_0._v) ? 32 : 16);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 256 : 128);
    if (!(($dirty & 721) === 144) ? true : !$composer_0.get_skipping_3owdve_k$()) {
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
        tmp = Companion_getInstance_34().invoke_cn7v_k$(tmp0_safe_receiver);
      }
      GenericTag_0('g', 'http://www.w3.org/2000/svg', tmp, content, $composer_0, 54 | 7168 & $dirty << 3, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver_0 = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      tmp0_safe_receiver_0.updateScope_t8jcf_k$(Group$lambda(_this__u8e3s4, attrs_0, content, $changed, $default));
    }
  }
  function SVGGroupAttrsScope$Companion$invoke$lambda($attrs) {
    return function ($this$null) {
      $attrs(new SVGGroupAttrsScope($this$null));
      return Unit_getInstance();
    };
  }
  function Companion_31() {
    Companion_instance_31 = this;
  }
  protoOf(Companion_31).invoke_cn7v_k$ = function (attrs) {
    return SVGGroupAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_31;
  function Companion_getInstance_34() {
    if (Companion_instance_31 == null)
      new Companion_31();
    return Companion_instance_31;
  }
  function SVGGroupAttrsScope(attrs) {
    Companion_getInstance_34();
    SVGContainerElementAttrsScope.call(this, attrs);
  }
  function PointsAttrs$points$lambda(it) {
    return toString(it.get_first_irdx8n_k$()) + ',' + toString(it.get_second_jf7fjx_k$());
  }
  function PointsAttrs() {
  }
  function Circle$lambda($this_Circle, $attrs, $$changed) {
    return function ($composer, $force) {
      Circle($this_Circle, $attrs, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Line$lambda($this_Line, $attrs, $$changed) {
    return function ($composer, $force) {
      Line($this_Line, $attrs, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Svg$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Svg($attrs._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Path$lambda($this_Path, $attrs, $$changed) {
    return function ($composer, $force) {
      Path($this_Path, $attrs, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Polyline$lambda($this_Polyline, $attrs, $$changed) {
    return function ($composer, $force) {
      Polyline($this_Polyline, $attrs, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Rect$lambda($this_Rect, $attrs, $$changed) {
    return function ($composer, $force) {
      Rect($this_Rect, $attrs, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Group$lambda($this_Group, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Group($this_Group, $attrs._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
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
  function SVGStrokeLineCap_Butt_getInstance() {
    SVGStrokeLineCap_initEntries();
    return SVGStrokeLineCap_Butt_instance;
  }
  function SVGStrokeLineCap_Round_getInstance() {
    SVGStrokeLineCap_initEntries();
    return SVGStrokeLineCap_Round_instance;
  }
  function SVGStrokeLineCap_Square_getInstance() {
    SVGStrokeLineCap_initEntries();
    return SVGStrokeLineCap_Square_instance;
  }
  function SVGStrokeLineJoin_Miter_getInstance() {
    SVGStrokeLineJoin_initEntries();
    return SVGStrokeLineJoin_Miter_instance;
  }
  function SVGStrokeLineJoin_Round_getInstance() {
    SVGStrokeLineJoin_initEntries();
    return SVGStrokeLineJoin_Round_instance;
  }
  function SVGStrokeLineJoin_Bevel_getInstance() {
    SVGStrokeLineJoin_initEntries();
    return SVGStrokeLineJoin_Bevel_instance;
  }
  function SVGFillType_None_getInstance() {
    SVGFillType_initEntries();
    return SVGFillType_None_instance;
  }
  function SVGFillType_CurrentColor_getInstance() {
    SVGFillType_initEntries();
    return SVGFillType_CurrentColor_instance;
  }
  function SVGFillRule_NonZero_getInstance() {
    SVGFillRule_initEntries();
    return SVGFillRule_NonZero_instance;
  }
  function SVGFillRule_EvenOdd_getInstance() {
    SVGFillRule_initEntries();
    return SVGFillRule_EvenOdd_instance;
  }
  //region block: post-declaration
  protoOf(ComparableAttrsScope).classes_ayghm2_k$ = classes;
  protoOf(ComparableAttrsScope).id_e4l56n_k$ = id;
  protoOf(ComparableAttrsScope).hidden_k4uzbq_k$ = hidden;
  protoOf(ComparableAttrsScope).title_qpfo4e_k$ = title;
  protoOf(ComparableAttrsScope).dir_uokp4q_k$ = dir;
  protoOf(ComparableAttrsScope).draggable_cxyxb5_k$ = draggable;
  protoOf(ComparableAttrsScope).contentEditable_hbi188_k$ = contentEditable;
  protoOf(ComparableAttrsScope).lang_9i4u6k_k$ = lang;
  protoOf(ComparableAttrsScope).tabIndex_fn4aj_k$ = tabIndex;
  protoOf(ComparableAttrsScope).spellCheck_hp5v6j_k$ = spellCheck;
  protoOf(ComparableAttrsScope).inputMode_1lh0s3_k$ = inputMode;
  protoOf(ComparableAttrsScope).inputMode_7krh0f_k$ = inputMode_0;
  protoOf(ComparableAttrsScope).onContextMenu_uus4bk_k$ = onContextMenu;
  protoOf(ComparableAttrsScope).onClick_q9cds6_k$ = onClick;
  protoOf(ComparableAttrsScope).onDoubleClick_gh82mh_k$ = onDoubleClick;
  protoOf(ComparableAttrsScope).onMouseDown_hebxzb_k$ = onMouseDown;
  protoOf(ComparableAttrsScope).onMouseUp_at21zm_k$ = onMouseUp;
  protoOf(ComparableAttrsScope).onMouseEnter_smfckd_k$ = onMouseEnter;
  protoOf(ComparableAttrsScope).onMouseLeave_j862le_k$ = onMouseLeave;
  protoOf(ComparableAttrsScope).onMouseMove_r2z3wo_k$ = onMouseMove;
  protoOf(ComparableAttrsScope).onMouseOut_nootgn_k$ = onMouseOut;
  protoOf(ComparableAttrsScope).onMouseOver_o893qj_k$ = onMouseOver;
  protoOf(ComparableAttrsScope).onWheel_59frrx_k$ = onWheel;
  protoOf(ComparableAttrsScope).onDrag_xkse65_k$ = onDrag;
  protoOf(ComparableAttrsScope).onDrop_373vqw_k$ = onDrop;
  protoOf(ComparableAttrsScope).onDragStart_ispt2x_k$ = onDragStart;
  protoOf(ComparableAttrsScope).onDragEnd_4or1o2_k$ = onDragEnd;
  protoOf(ComparableAttrsScope).onDragOver_tkxwb3_k$ = onDragOver;
  protoOf(ComparableAttrsScope).onDragEnter_9tqs4v_k$ = onDragEnter;
  protoOf(ComparableAttrsScope).onDragLeave_nsncqa_k$ = onDragLeave;
  protoOf(ComparableAttrsScope).onCopy_4jq33g_k$ = onCopy;
  protoOf(ComparableAttrsScope).onCut_wod3pf_k$ = onCut;
  protoOf(ComparableAttrsScope).onPaste_8ucd2k_k$ = onPaste;
  protoOf(ComparableAttrsScope).onKeyDown_2pa1il_k$ = onKeyDown;
  protoOf(ComparableAttrsScope).onKeyUp_g6q8ee_k$ = onKeyUp;
  protoOf(ComparableAttrsScope).onFocus_ozgn2v_k$ = onFocus;
  protoOf(ComparableAttrsScope).onBlur_yy3d4s_k$ = onBlur;
  protoOf(ComparableAttrsScope).onFocusIn_vryg4c_k$ = onFocusIn;
  protoOf(ComparableAttrsScope).onFocusOut_jw1zh_k$ = onFocusOut;
  protoOf(ComparableAttrsScope).onTouchCancel_rg0d1t_k$ = onTouchCancel;
  protoOf(ComparableAttrsScope).onTouchMove_wm6qxk_k$ = onTouchMove;
  protoOf(ComparableAttrsScope).onTouchEnd_ugz1se_k$ = onTouchEnd;
  protoOf(ComparableAttrsScope).onTouchStart_4yr0c9_k$ = onTouchStart;
  protoOf(ComparableAttrsScope).onAnimationEnd_l576ug_k$ = onAnimationEnd;
  protoOf(ComparableAttrsScope).onAnimationIteration_o79r9y_k$ = onAnimationIteration;
  protoOf(ComparableAttrsScope).onAnimationStart_ir5kdr_k$ = onAnimationStart;
  protoOf(ComparableAttrsScope).onScroll_ur92mf_k$ = onScroll;
  protoOf(ComparableAttrsScope).addEventListener_pu8o1q_k$ = addEventListener;
  protoOf(ComparableAttrsScope).addEventListener_xhf81m_k$ = addEventListener_0;
  protoOf(DummyAttrsScope).classes_ayghm2_k$ = classes;
  protoOf(DummyAttrsScope).id_e4l56n_k$ = id;
  protoOf(DummyAttrsScope).hidden_k4uzbq_k$ = hidden;
  protoOf(DummyAttrsScope).title_qpfo4e_k$ = title;
  protoOf(DummyAttrsScope).dir_uokp4q_k$ = dir;
  protoOf(DummyAttrsScope).draggable_cxyxb5_k$ = draggable;
  protoOf(DummyAttrsScope).contentEditable_hbi188_k$ = contentEditable;
  protoOf(DummyAttrsScope).lang_9i4u6k_k$ = lang;
  protoOf(DummyAttrsScope).tabIndex_fn4aj_k$ = tabIndex;
  protoOf(DummyAttrsScope).spellCheck_hp5v6j_k$ = spellCheck;
  protoOf(DummyAttrsScope).inputMode_1lh0s3_k$ = inputMode;
  protoOf(DummyAttrsScope).inputMode_7krh0f_k$ = inputMode_0;
  protoOf(DummyAttrsScope).onContextMenu_uus4bk_k$ = onContextMenu;
  protoOf(DummyAttrsScope).onClick_q9cds6_k$ = onClick;
  protoOf(DummyAttrsScope).onDoubleClick_gh82mh_k$ = onDoubleClick;
  protoOf(DummyAttrsScope).onMouseDown_hebxzb_k$ = onMouseDown;
  protoOf(DummyAttrsScope).onMouseUp_at21zm_k$ = onMouseUp;
  protoOf(DummyAttrsScope).onMouseEnter_smfckd_k$ = onMouseEnter;
  protoOf(DummyAttrsScope).onMouseLeave_j862le_k$ = onMouseLeave;
  protoOf(DummyAttrsScope).onMouseMove_r2z3wo_k$ = onMouseMove;
  protoOf(DummyAttrsScope).onMouseOut_nootgn_k$ = onMouseOut;
  protoOf(DummyAttrsScope).onMouseOver_o893qj_k$ = onMouseOver;
  protoOf(DummyAttrsScope).onWheel_59frrx_k$ = onWheel;
  protoOf(DummyAttrsScope).onDrag_xkse65_k$ = onDrag;
  protoOf(DummyAttrsScope).onDrop_373vqw_k$ = onDrop;
  protoOf(DummyAttrsScope).onDragStart_ispt2x_k$ = onDragStart;
  protoOf(DummyAttrsScope).onDragEnd_4or1o2_k$ = onDragEnd;
  protoOf(DummyAttrsScope).onDragOver_tkxwb3_k$ = onDragOver;
  protoOf(DummyAttrsScope).onDragEnter_9tqs4v_k$ = onDragEnter;
  protoOf(DummyAttrsScope).onDragLeave_nsncqa_k$ = onDragLeave;
  protoOf(DummyAttrsScope).onCopy_4jq33g_k$ = onCopy;
  protoOf(DummyAttrsScope).onCut_wod3pf_k$ = onCut;
  protoOf(DummyAttrsScope).onPaste_8ucd2k_k$ = onPaste;
  protoOf(DummyAttrsScope).onKeyDown_2pa1il_k$ = onKeyDown;
  protoOf(DummyAttrsScope).onKeyUp_g6q8ee_k$ = onKeyUp;
  protoOf(DummyAttrsScope).onFocus_ozgn2v_k$ = onFocus;
  protoOf(DummyAttrsScope).onBlur_yy3d4s_k$ = onBlur;
  protoOf(DummyAttrsScope).onFocusIn_vryg4c_k$ = onFocusIn;
  protoOf(DummyAttrsScope).onFocusOut_jw1zh_k$ = onFocusOut;
  protoOf(DummyAttrsScope).onTouchCancel_rg0d1t_k$ = onTouchCancel;
  protoOf(DummyAttrsScope).onTouchMove_wm6qxk_k$ = onTouchMove;
  protoOf(DummyAttrsScope).onTouchEnd_ugz1se_k$ = onTouchEnd;
  protoOf(DummyAttrsScope).onTouchStart_4yr0c9_k$ = onTouchStart;
  protoOf(DummyAttrsScope).onAnimationEnd_l576ug_k$ = onAnimationEnd;
  protoOf(DummyAttrsScope).onAnimationIteration_o79r9y_k$ = onAnimationIteration;
  protoOf(DummyAttrsScope).onAnimationStart_ir5kdr_k$ = onAnimationStart;
  protoOf(DummyAttrsScope).onScroll_ur92mf_k$ = onScroll;
  protoOf(DummyAttrsScope).addEventListener_pu8o1q_k$ = addEventListener;
  protoOf(DummyAttrsScope).addEventListener_xhf81m_k$ = addEventListener_0;
  protoOf(ComparableStyleScope).property_wcrait_k$ = property;
  protoOf(ComparableStyleScope).property_jk9dw6_k$ = property_0;
  protoOf(ComparableStyleScope).variable_kvosx8_k$ = variable;
  protoOf(ComparableStyleScope).variable_j4rwe5_k$ = variable_0;
  protoOf(ComparableStyleScope).invoke_77zbl8_k$ = invoke;
  protoOf(ComparableStyleScope).invoke_rxx4vw_k$ = invoke_0;
  protoOf(ComparableStyleScope).invoke_jsk60r_k$ = invoke_1;
  protoOf(CalcScopeInstance).times_cubebc_k$ = times;
  protoOf(CalcScopeInstance).times_6xg5ti_k$ = times_0;
  protoOf(CalcScopeInstance).div_wucann_k$ = div;
  protoOf(CalcScopeInstance).plus_g6zkc3_k$ = plus;
  protoOf(CalcScopeInstance).minus_29zpb7_k$ = minus;
  protoOf(CalcScopeInstance).unaryMinus_d2gf0y_k$ = unaryMinus;
  protoOf(CalcScopeInstance).unaryPlus_9h1xw6_k$ = unaryPlus;
  protoOf(CalcScopeInstance).num_5kpq4n_k$ = num;
  protoOf(SVGGraphicalElementAttrsScope).stroke_gwdh04_k$ = stroke;
  protoOf(SVGGraphicalElementAttrsScope).stroke_m42ljs_k$ = stroke_0;
  protoOf(SVGGraphicalElementAttrsScope).stroke_yaq6g6_k$ = stroke_1;
  protoOf(SVGGraphicalElementAttrsScope).strokeDashArray_61cnbu_k$ = strokeDashArray;
  protoOf(SVGGraphicalElementAttrsScope).strokeDashArray_w05e8t_k$ = strokeDashArray_0;
  protoOf(SVGGraphicalElementAttrsScope).strokeDashOffset_gmplu6_k$ = strokeDashOffset;
  protoOf(SVGGraphicalElementAttrsScope).strokeDashOffset_4g6nv2_k$ = strokeDashOffset_0;
  protoOf(SVGGraphicalElementAttrsScope).strokeLineCap_j27fru_k$ = strokeLineCap;
  protoOf(SVGGraphicalElementAttrsScope).strokeLineJoin_i3mwce_k$ = strokeLineJoin;
  protoOf(SVGGraphicalElementAttrsScope).strokeMiterLimit_cvov7h_k$ = strokeMiterLimit;
  protoOf(SVGGraphicalElementAttrsScope).strokeOpacity_9z0e14_k$ = strokeOpacity;
  protoOf(SVGGraphicalElementAttrsScope).strokeWidth_s6idgd_k$ = strokeWidth;
  protoOf(SVGGraphicalElementAttrsScope).strokeWidth_qi05wj_k$ = strokeWidth_0;
  protoOf(SVGGraphicalElementAttrsScope).fill_m6m1z3_k$ = fill;
  protoOf(SVGGraphicalElementAttrsScope).fill_wlycpl_k$ = fill_0;
  protoOf(SVGGraphicalElementAttrsScope).fill_gyvskv_k$ = fill_1;
  protoOf(SVGGraphicalElementAttrsScope).fillRule_uv8r2f_k$ = fillRule;
  protoOf(SVGGraphicalElementAttrsScope).fillOpacity_3uni2r_k$ = fillOpacity;
  protoOf(SVGGraphicalElementAttrsScope).filter_81gu56_k$ = filter;
  protoOf(SVGGraphicalElementAttrsScope).floodColor_c7kev5_k$ = floodColor;
  protoOf(SVGGraphicalElementAttrsScope).floodOpacity_dw0q4i_k$ = floodOpacity;
  protoOf(SVGGraphicalElementAttrsScope).lightingColor_3dqaer_k$ = lightingColor;
  protoOf(SVGCircleAttrsScope).cx_7c4b4q_k$ = cx;
  protoOf(SVGCircleAttrsScope).cx_pmhp9i_k$ = cx_0;
  protoOf(SVGCircleAttrsScope).cy_5a8zln_k$ = cy;
  protoOf(SVGCircleAttrsScope).cy_d71e85_k$ = cy_0;
  protoOf(SVGSvgAttrsScope).x_gzumtf_k$ = x;
  protoOf(SVGSvgAttrsScope).x_re57k3_k$ = x_0;
  protoOf(SVGSvgAttrsScope).y_j1pyci_k$ = y;
  protoOf(SVGSvgAttrsScope).y_eyowiq_k$ = y_0;
  protoOf(SVGSvgAttrsScope).height_azv3o_k$ = height;
  protoOf(SVGSvgAttrsScope).height_vnwjw4_k$ = height_0;
  protoOf(SVGSvgAttrsScope).width_ux3u5x_k$ = width_0;
  protoOf(SVGSvgAttrsScope).width_3dri8b_k$ = width_1;
  protoOf(SVGSvgAttrsScope).viewBox_s5pn86_k$ = viewBox;
  protoOf(SVGSvgAttrsScope).viewBox_cjnss5_k$ = viewBox_0;
  protoOf(SVGPolylineAttrsScope).points_buxj0r_k$ = points;
  protoOf(SVGRectAttrsScope).x_gzumtf_k$ = x;
  protoOf(SVGRectAttrsScope).x_re57k3_k$ = x_0;
  protoOf(SVGRectAttrsScope).y_j1pyci_k$ = y;
  protoOf(SVGRectAttrsScope).y_eyowiq_k$ = y_0;
  protoOf(SVGRectAttrsScope).height_azv3o_k$ = height;
  protoOf(SVGRectAttrsScope).height_vnwjw4_k$ = height_0;
  protoOf(SVGRectAttrsScope).width_ux3u5x_k$ = width_0;
  protoOf(SVGRectAttrsScope).width_3dri8b_k$ = width_1;
  //endregion
  //region block: init
  com_varabyte_kobweb_compose_dom_ElementRefScope$stable = 8;
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
  _.$_$.p = borderColor_0;
  _.$_$.q = borderColor_1;
  _.$_$.r = borderColor_2;
  _.$_$.s = borderLeft;
  _.$_$.t = borderStyle_1;
  _.$_$.u = borderStyle;
  _.$_$.v = borderStyle_2;
  _.$_$.w = borderStyle_0;
  _.$_$.x = borderTop;
  _.$_$.y = borderWidth;
  _.$_$.z = boxShadow;
  _.$_$.a1 = boxSizing_0;
  _.$_$.b1 = cursor;
  _.$_$.c1 = fontWeight;
  _.$_$.d1 = gridTemplateColumns_0;
  _.$_$.e1 = gridTemplateRows_0;
  _.$_$.f1 = grid;
  _.$_$.g1 = isNotEmpty;
  _.$_$.h1 = justifyItems;
  _.$_$.i1 = justifySelf;
  _.$_$.j1 = listStyle;
  _.$_$.k1 = marginBlock;
  _.$_$.l1 = marginInline;
  _.$_$.m1 = objectFit;
  _.$_$.n1 = outline;
  _.$_$.o1 = overflowWrap;
  _.$_$.p1 = overflowX;
  _.$_$.q1 = overflowY;
  _.$_$.r1 = overflow;
  _.$_$.s1 = paddingInline;
  _.$_$.t1 = scrollBehavior;
  _.$_$.u1 = setVariable;
  _.$_$.v1 = setVariable_0;
  _.$_$.w1 = textAlign;
  _.$_$.x1 = textDecorationLine;
  _.$_$.y1 = toDegrees;
  _.$_$.z1 = transition;
  _.$_$.a2 = translateX;
  _.$_$.b2 = userSelect;
  _.$_$.c2 = verticalAlign;
  _.$_$.d2 = whiteSpace;
  _.$_$.e2 = Circle;
  _.$_$.f2 = Group;
  _.$_$.g2 = Line;
  _.$_$.h2 = Path;
  _.$_$.i2 = Polyline;
  _.$_$.j2 = Rect;
  _.$_$.k2 = Svg;
  _.$_$.l2 = GenericTag;
  _.$_$.m2 = refScope;
  _.$_$.n2 = registerRefScope_0;
  _.$_$.o2 = registerRefScope;
  _.$_$.p2 = SVGFillType_CurrentColor_getInstance;
  _.$_$.q2 = SVGFillType_None_getInstance;
  _.$_$.r2 = SVGStrokeLineCap_Round_getInstance;
  _.$_$.s2 = SVGStrokeLineJoin_Round_getInstance;
  _.$_$.t2 = SVGStrokeType_CurrentColor_getInstance;
  _.$_$.u2 = SVGStrokeType_None_getInstance;
  _.$_$.v2 = ComparableAttrsScope_init_$Create$;
  _.$_$.w2 = CSSTransition_init_$Create$;
  _.$_$.x2 = Companion_getInstance_7;
  _.$_$.y2 = Companion_getInstance_5;
  _.$_$.z2 = Companion_getInstance_22;
  _.$_$.a3 = Companion_getInstance_6;
  _.$_$.b3 = Companion_getInstance_8;
  _.$_$.c3 = Companion_getInstance_2;
  _.$_$.d3 = Companion_getInstance_3;
  _.$_$.e3 = Companion_getInstance_12;
  _.$_$.f3 = Companion_getInstance_14;
  _.$_$.g3 = Companion_getInstance_15;
  _.$_$.h3 = Companion_getInstance_16;
  _.$_$.i3 = Companion_getInstance_17;
  _.$_$.j3 = Companion_getInstance_20;
  _.$_$.k3 = Companion_getInstance_21;
  _.$_$.l3 = Companion_getInstance_18;
  _.$_$.m3 = Companion_getInstance_11;
  _.$_$.n3 = Companion_getInstance_19;
  _.$_$.o3 = Companion_getInstance_30;
  //endregion
  return _;
}));
