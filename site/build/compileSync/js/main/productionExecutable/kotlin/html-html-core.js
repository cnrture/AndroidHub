(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-runtime-runtime.js', './html-internal-html-core-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./html-internal-html-core-runtime.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'html-html-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'html-html-core'.");
    }
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'html-html-core'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'html-html-core'.");
    }
    if (typeof this['html-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'html-html-core'. Its dependency 'html-internal-html-core-runtime' was not found. Please, check whether 'html-internal-html-core-runtime' is loaded prior to 'html-html-core'.");
    }
    root['html-html-core'] = factory(typeof this['html-html-core'] === 'undefined' ? {} : this['html-html-core'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-compose-runtime-runtime'], this['html-internal-html-core-runtime']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_internal_html_core_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.h4;
  var protoOf = kotlin_kotlin.$_$.fa;
  var asList = kotlin_kotlin.$_$.e5;
  var interfaceMeta = kotlin_kotlin.$_$.h9;
  var setMetadataFor = kotlin_kotlin.$_$.ga;
  var VOID = kotlin_kotlin.$_$.g;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.v;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var addAll = kotlin_kotlin.$_$.b5;
  var classMeta = kotlin_kotlin.$_$.v8;
  var Enum = kotlin_kotlin.$_$.bd;
  var charSequenceLength = kotlin_kotlin.$_$.t8;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.x;
  var ensureNotNull = kotlin_kotlin.$_$.ce;
  var objectMeta = kotlin_kotlin.$_$.ea;
  var hashCode = kotlin_kotlin.$_$.f9;
  var THROW_CCE = kotlin_kotlin.$_$.kd;
  var equals = kotlin_kotlin.$_$.y8;
  var getStringHashCode = kotlin_kotlin.$_$.e9;
  var toString = kotlin_kotlin.$_$.pe;
  var numberToDouble = kotlin_kotlin.$_$.aa;
  var getNumberHashCode = kotlin_kotlin.$_$.c9;
  var defineProp = kotlin_kotlin.$_$.x8;
  var isInterface = kotlin_kotlin.$_$.q9;
  var Collection = kotlin_kotlin.$_$.o4;
  var toString_0 = kotlin_kotlin.$_$.ka;
  var objectCreate = kotlin_kotlin.$_$.da;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var listOfNotNull = kotlin_kotlin.$_$.q6;
  var joinToString = kotlin_kotlin.$_$.j6;
  var joinToString_0 = kotlin_kotlin.$_$.k6;
  var contains = kotlin_kotlin.$_$.bb;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var _SkippableUpdater___init__impl__4ft0t9 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var _SkippableUpdater___get_composer__impl__6t7yne = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var DisposableEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var DomNodeWrapper = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.b;
  var emptyList = kotlin_kotlin.$_$.v5;
  var copyToArray = kotlin_kotlin.$_$.t5;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.oe;
  var lazy = kotlin_kotlin.$_$.he;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var DomApplier = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.a;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var DisposableEffect_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h;
  var KProperty1 = kotlin_kotlin.$_$.wa;
  var getPropertyCallableRef = kotlin_kotlin.$_$.d9;
  //endregion
  //region block: pre-declaration
  function onClick(listener) {
    this.h2c(new MouseEventListener('click', listener));
  }
  function onAnimationEnd(listener) {
    this.h2c(new AnimationEventListener('animationend', listener));
  }
  setMetadataFor(EventsListenerScope, 'EventsListenerScope', interfaceMeta);
  function classes(classes) {
    return this.d2c(asList(classes));
  }
  function id(value) {
    return this.b2c('id', value);
  }
  function tabIndex(value) {
    return this.b2c('tabindex', value.toString());
  }
  setMetadataFor(AttrsScope, 'AttrsScope', interfaceMeta, VOID, [EventsListenerScope]);
  setMetadataFor(AttrsScopeBuilder, 'AttrsScopeBuilder', classMeta, VOID, [AttrsScope, EventsListenerScope], AttrsScopeBuilder);
  setMetadataFor(EventsListenerScopeBuilder, 'EventsListenerScopeBuilder', classMeta, VOID, [EventsListenerScope], EventsListenerScopeBuilder);
  setMetadataFor(ButtonType, 'ButtonType', classMeta, Enum);
  setMetadataFor(SyntheticEventListener, 'SyntheticEventListener', classMeta);
  setMetadataFor(MouseEventListener, 'MouseEventListener', classMeta, SyntheticEventListener);
  setMetadataFor(AnimationEventListener, 'AnimationEventListener', classMeta, SyntheticEventListener);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(CSSKeyframe, 'CSSKeyframe', classMeta);
  setMetadataFor(From, 'From', objectMeta, CSSKeyframe);
  setMetadataFor(To, 'To', objectMeta, CSSKeyframe);
  setMetadataFor(CSSStyledRuleDeclaration, 'CSSStyledRuleDeclaration', interfaceMeta);
  setMetadataFor(CSSKeyframeRuleDeclaration, 'CSSKeyframeRuleDeclaration', classMeta, VOID, [CSSStyledRuleDeclaration]);
  setMetadataFor(CSSKeyframesRuleDeclaration, 'CSSKeyframesRuleDeclaration', classMeta);
  setMetadataFor(Raw, 'Raw', classMeta);
  setMetadataFor(MediaFeature, 'MediaFeature', classMeta);
  setMetadataFor(CSSGroupingRuleDeclaration, 'CSSGroupingRuleDeclaration', interfaceMeta);
  setMetadataFor(CSSMediaRuleDeclaration, 'CSSMediaRuleDeclaration', classMeta, VOID, [CSSGroupingRuleDeclaration]);
  setMetadataFor(CSSStyleRuleDeclaration, 'CSSStyleRuleDeclaration', classMeta, VOID, [CSSStyledRuleDeclaration]);
  function property(propertyName, value) {
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.v2e(propertyName, value);
  }
  function property_0(propertyName, value) {
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.v2e(propertyName, value);
  }
  function variable(variableName, value) {
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.x2e(variableName, value);
  }
  setMetadataFor(StyleScope, 'StyleScope', interfaceMeta);
  setMetadataFor(StyleHolder, 'StyleHolder', interfaceMeta);
  setMetadataFor(StyleScopeBuilder, 'StyleScopeBuilder', classMeta, VOID, [StyleScope, StyleHolder], StyleScopeBuilder);
  setMetadataFor(CSSRuleBuilderImpl, 'CSSRuleBuilderImpl', classMeta, StyleScopeBuilder, [StyleScope, StyleScopeBuilder], CSSRuleBuilderImpl);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(CSSUnitValueTyped, 'CSSUnitValueTyped', classMeta);
  setMetadataFor(Color, 'Color', objectMeta);
  setMetadataFor(StylePropertyDeclaration, 'StylePropertyDeclaration', classMeta);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  function add(selector, style) {
    this.c2e(new CSSStyleRuleDeclaration(selector, style));
  }
  setMetadataFor(CSSRulesHolder, 'CSSRulesHolder', interfaceMeta);
  function returnUniversalSelector() {
    return get_Universal();
  }
  function returnHoverSelector() {
    return this.v2f();
  }
  function get_hover() {
    return new PseudoClassInternal('hover');
  }
  setMetadataFor(SelectorsScope, 'SelectorsScope', interfaceMeta);
  function invoke(_this__u8e3s4, cssRule) {
    this.s2f(new RawSelector(_this__u8e3s4), cssRule);
  }
  function style(_this__u8e3s4, cssRule) {
    this.s2f(new RawSelector(_this__u8e3s4), cssRule);
  }
  setMetadataFor(GenericStyleSheetBuilder, 'GenericStyleSheetBuilder', interfaceMeta, VOID, [CSSRulesHolder, SelectorsScope]);
  function style_0(selector, cssRule) {
    this.p2f(selector, buildCSSStyleRule(cssRule));
  }
  setMetadataFor(StyleSheetBuilder, 'StyleSheetBuilder', interfaceMeta, VOID, [CSSRulesHolder, GenericStyleSheetBuilder]);
  setMetadataFor(StyleSheet, 'StyleSheet', classMeta, VOID, [StyleSheetBuilder, CSSRulesHolder], StyleSheet_init_$Create$);
  setMetadataFor(CSSRulesHolderState, 'CSSRulesHolderState', classMeta, VOID, [CSSRulesHolder], CSSRulesHolderState);
  setMetadataFor(CSSSelector, 'CSSSelector', classMeta);
  setMetadataFor(RawSelector, 'RawSelector', classMeta, CSSSelector);
  setMetadataFor(PseudoClassInternal, 'PseudoClassInternal', classMeta, CSSSelector);
  setMetadataFor(CSSBorder, 'CSSBorder', classMeta, VOID, VOID, CSSBorder);
  setMetadataFor(DomElementWrapper, 'DomElementWrapper', classMeta, DomNodeWrapper);
  setMetadataFor(ElementScopeBase, 'ElementScopeBase', classMeta);
  setMetadataFor(ElementScopeImpl, 'ElementScopeImpl', classMeta, ElementScopeBase, VOID, ElementScopeImpl);
  setMetadataFor(ElementBuilder, 'ElementBuilder', interfaceMeta);
  setMetadataFor(ElementBuilderImplementation, 'ElementBuilderImplementation', classMeta, VOID, [ElementBuilder]);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta);
  setMetadataFor(SyntheticEvent, 'SyntheticEvent', classMeta);
  setMetadataFor(SyntheticAnimationEvent, 'SyntheticAnimationEvent', classMeta, SyntheticEvent);
  setMetadataFor(SyntheticMouseEvent, 'SyntheticMouseEvent', classMeta, SyntheticEvent);
  //endregion
  var setInputValue;
  var setTextAreaDefaultValue;
  var setCheckedValue;
  function type(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.b2c('type', value.a2c_1);
  }
  function alt(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.b2c('alt', value);
  }
  function src(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.b2c('src', value);
  }
  function href(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.b2c('href', value);
  }
  function setInputValue$lambda(e, v) {
    _init_properties_Attrs_kt__w5qjhs();
    if (!(v === e.value)) {
      e.value = v;
    }
    saveControlledInputState(e, v);
    return Unit_instance;
  }
  function setTextAreaDefaultValue$lambda(e, v) {
    _init_properties_Attrs_kt__w5qjhs();
    e.innerText = v;
    return Unit_instance;
  }
  function setCheckedValue$lambda(e, v) {
    _init_properties_Attrs_kt__w5qjhs();
    e.checked = v;
    saveControlledInputState(e, v);
    return Unit_instance;
  }
  var properties_initialized_Attrs_kt_uypsku;
  function _init_properties_Attrs_kt__w5qjhs() {
    if (!properties_initialized_Attrs_kt_uypsku) {
      properties_initialized_Attrs_kt_uypsku = true;
      setInputValue = setInputValue$lambda;
      setTextAreaDefaultValue = setTextAreaDefaultValue$lambda;
      setCheckedValue = setCheckedValue$lambda;
    }
  }
  function AttrsScope() {
  }
  function AttrsScopeBuilder(eventsListenerScopeBuilder) {
    eventsListenerScopeBuilder = eventsListenerScopeBuilder === VOID ? new EventsListenerScopeBuilder() : eventsListenerScopeBuilder;
    this.k2c_1 = eventsListenerScopeBuilder;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.l2c_1 = LinkedHashMap_init_$Create$();
    this.m2c_1 = new StyleScopeBuilder();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.n2c_1 = ArrayList_init_$Create$();
    this.o2c_1 = null;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.p2c_1 = ArrayList_init_$Create$();
    this.q2c_1 = 8;
  }
  protoOf(AttrsScopeBuilder).j2c = function (listener) {
    this.k2c_1.j2c(listener);
  };
  protoOf(AttrsScopeBuilder).i2c = function (listener) {
    this.k2c_1.i2c(listener);
  };
  protoOf(AttrsScopeBuilder).h2c = function (listener) {
    this.k2c_1.h2c(listener);
  };
  protoOf(AttrsScopeBuilder).d2c = function (classes) {
    this.p2c_1.e1(classes);
  };
  protoOf(AttrsScopeBuilder).e2c = function (classes) {
    addAll(this.p2c_1, classes);
  };
  protoOf(AttrsScopeBuilder).c2c = function (builder) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    builder(this.m2c_1);
  };
  protoOf(AttrsScopeBuilder).b2c = function (attr, value) {
    // Inline function 'kotlin.collections.set' call
    this.l2c_1.l2(attr, value);
    return this;
  };
  protoOf(AttrsScopeBuilder).t2c = function () {
    return this.l2c_1;
  };
  function EventsListenerScope() {
  }
  function EventsListenerScopeBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.r2c_1 = ArrayList_init_$Create$();
    this.s2c_1 = 8;
  }
  protoOf(EventsListenerScopeBuilder).h2c = function (listener) {
    this.r2c_1.y(listener);
  };
  protoOf(EventsListenerScopeBuilder).u2c = function () {
    return this.r2c_1;
  };
  var ButtonType_Button_instance;
  var ButtonType_Reset_instance;
  var ButtonType_Submit_instance;
  var ButtonType_entriesInitialized;
  function ButtonType_initEntries() {
    if (ButtonType_entriesInitialized)
      return Unit_instance;
    ButtonType_entriesInitialized = true;
    ButtonType_Button_instance = new ButtonType('Button', 0, 'button');
    ButtonType_Reset_instance = new ButtonType('Reset', 1, 'reset');
    ButtonType_Submit_instance = new ButtonType('Submit', 2, 'submit');
  }
  function ButtonType(name, ordinal, str) {
    Enum.call(this, name, ordinal);
    this.a2c_1 = str;
  }
  function ButtonType_Button_getInstance() {
    ButtonType_initEntries();
    return ButtonType_Button_instance;
  }
  function SyntheticEventListener(event, listener) {
    this.v2c_1 = event;
    this.w2c_1 = listener;
    this.x2c_1 = this.v2c_1;
    this.y2c_1 = 0;
  }
  protoOf(SyntheticEventListener).a1w = function () {
    return this.x2c_1;
  };
  protoOf(SyntheticEventListener).fk = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new SyntheticEvent(event);
    this.w2c_1(tmp$ret$1);
  };
  protoOf(SyntheticEventListener).handleEvent = function (event) {
    return this.fk(event);
  };
  function MouseEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
    this.d2d_1 = 0;
  }
  protoOf(MouseEventListener).fk = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this.w2c_1(new SyntheticMouseEvent(event));
  };
  protoOf(MouseEventListener).handleEvent = function (event) {
    return this.fk(event);
  };
  function AnimationEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
    this.i2d_1 = 0;
  }
  protoOf(AnimationEventListener).fk = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this.w2c_1(new SyntheticAnimationEvent(event, event));
  };
  protoOf(AnimationEventListener).handleEvent = function (event) {
    return this.fk(event);
  };
  function get_controlledInputsValuesWeakMap() {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    return controlledInputsValuesWeakMap;
  }
  var controlledInputsValuesWeakMap;
  function get_controlledRadioGroups() {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    return controlledRadioGroups;
  }
  var controlledRadioGroups;
  function saveControlledInputState(element, value) {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    get_controlledInputsValuesWeakMap().set(element, value);
    if (element instanceof HTMLInputElement) {
      updateRadioGroupIfNeeded(element);
    }
  }
  function updateRadioGroupIfNeeded(element) {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    var tmp;
    if (element.type === 'radio') {
      // Inline function 'kotlin.text.isNotEmpty' call
      var this_0 = element.name;
      tmp = charSequenceLength(this_0) > 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      if (!get_controlledRadioGroups().r2(element.name)) {
        // Inline function 'kotlin.collections.set' call
        var this_1 = get_controlledRadioGroups();
        var key = element.name;
        // Inline function 'kotlin.collections.mutableSetOf' call
        var value = LinkedHashSet_init_$Create$();
        this_1.l2(key, value);
      }
      ensureNotNull(get_controlledRadioGroups().u2(element.name)).y(element);
    }
  }
  var properties_initialized_InternalControlledInputUtils_kt_dwq2r0;
  function _init_properties_InternalControlledInputUtils_kt__h0qaxa() {
    if (!properties_initialized_InternalControlledInputUtils_kt_dwq2r0) {
      properties_initialized_InternalControlledInputUtils_kt_dwq2r0 = true;
      // Inline function 'kotlin.js.unsafeCast' call
      controlledInputsValuesWeakMap = new WeakMap();
      // Inline function 'kotlin.collections.mutableMapOf' call
      controlledRadioGroups = LinkedHashMap_init_$Create$();
    }
  }
  function Companion() {
  }
  var Companion_instance;
  function Companion_getInstance_0() {
    return Companion_instance;
  }
  function Companion_0() {
  }
  var Companion_instance_0;
  function Companion_getInstance_1() {
    return Companion_instance_0;
  }
  function Companion_1() {
  }
  var Companion_instance_1;
  function Companion_getInstance_2() {
    return Companion_instance_1;
  }
  function Companion_2() {
  }
  var Companion_instance_2;
  function Companion_getInstance_3() {
    return Companion_instance_2;
  }
  function Companion_3() {
  }
  var Companion_instance_3;
  function Companion_getInstance_4() {
    return Companion_instance_3;
  }
  function Companion_4() {
  }
  var Companion_instance_4;
  function Companion_getInstance_5() {
    return Companion_instance_4;
  }
  function Companion_5() {
  }
  var Companion_instance_5;
  function Companion_getInstance_6() {
    return Companion_instance_5;
  }
  function Companion_6() {
  }
  var Companion_instance_6;
  function Companion_getInstance_7() {
    return Companion_instance_6;
  }
  function Companion_7() {
  }
  var Companion_instance_7;
  function Companion_getInstance_8() {
    return Companion_instance_7;
  }
  function Companion_8() {
  }
  var Companion_instance_8;
  function Companion_getInstance_9() {
    return Companion_instance_8;
  }
  function From() {
    From_instance = this;
    CSSKeyframe.call(this);
    this.k2d_1 = 0;
  }
  protoOf(From).toString = function () {
    return 'from';
  };
  var From_instance;
  function From_getInstance() {
    if (From_instance == null)
      new From();
    return From_instance;
  }
  function To() {
    To_instance = this;
    CSSKeyframe.call(this);
    this.m2d_1 = 0;
  }
  protoOf(To).toString = function () {
    return 'to';
  };
  var To_instance;
  function To_getInstance() {
    if (To_instance == null)
      new To();
    return To_instance;
  }
  function CSSKeyframe() {
    this.n2d_1 = 0;
  }
  function CSSKeyframeRuleDeclaration(keyframe, style) {
    this.o2d_1 = keyframe;
    this.p2d_1 = style;
    this.q2d_1 = 8;
  }
  protoOf(CSSKeyframeRuleDeclaration).r2d = function () {
    return this.p2d_1;
  };
  protoOf(CSSKeyframeRuleDeclaration).s2d = function () {
    return this.o2d_1.toString();
  };
  protoOf(CSSKeyframeRuleDeclaration).toString = function () {
    return 'CSSKeyframeRuleDeclaration(keyframe=' + this.o2d_1 + ', style=' + this.p2d_1 + ')';
  };
  protoOf(CSSKeyframeRuleDeclaration).hashCode = function () {
    var result = hashCode(this.o2d_1);
    result = imul(result, 31) + hashCode(this.p2d_1) | 0;
    return result;
  };
  protoOf(CSSKeyframeRuleDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSKeyframeRuleDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof CSSKeyframeRuleDeclaration ? other : THROW_CCE();
    if (!equals(this.o2d_1, tmp0_other_with_cast.o2d_1))
      return false;
    if (!equals(this.p2d_1, tmp0_other_with_cast.p2d_1))
      return false;
    return true;
  };
  function CSSKeyframesRuleDeclaration(name, keys) {
    this.t2d_1 = name;
    this.u2d_1 = keys;
    this.v2d_1 = 8;
  }
  protoOf(CSSKeyframesRuleDeclaration).s2d = function () {
    return '@keyframes ' + this.t2d_1;
  };
  protoOf(CSSKeyframesRuleDeclaration).toString = function () {
    return 'CSSKeyframesRuleDeclaration(name=' + this.t2d_1 + ', keys=' + this.u2d_1 + ')';
  };
  protoOf(CSSKeyframesRuleDeclaration).hashCode = function () {
    var result = getStringHashCode(this.t2d_1);
    result = imul(result, 31) + hashCode(this.u2d_1) | 0;
    return result;
  };
  protoOf(CSSKeyframesRuleDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSKeyframesRuleDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof CSSKeyframesRuleDeclaration ? other : THROW_CCE();
    if (!(this.t2d_1 === tmp0_other_with_cast.t2d_1))
      return false;
    if (!equals(this.u2d_1, tmp0_other_with_cast.u2d_1))
      return false;
    return true;
  };
  function Raw(string) {
    this.w2d_1 = string;
    this.x2d_1 = 0;
  }
  protoOf(Raw).toString = function () {
    return this.w2d_1;
  };
  protoOf(Raw).hashCode = function () {
    return getStringHashCode(this.w2d_1);
  };
  protoOf(Raw).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Raw))
      return false;
    var tmp0_other_with_cast = other instanceof Raw ? other : THROW_CCE();
    if (!(this.w2d_1 === tmp0_other_with_cast.w2d_1))
      return false;
    return true;
  };
  function MediaFeature(name, value) {
    value = value === VOID ? null : value;
    this.y2d_1 = name;
    this.z2d_1 = value;
    this.a2e_1 = 8;
  }
  protoOf(MediaFeature).equals = function (other) {
    var tmp;
    if (other instanceof MediaFeature) {
      tmp = this.y2d_1 === other.y2d_1 ? toString(this.z2d_1) === toString(other.z2d_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MediaFeature).toString = function () {
    var tmp;
    if (this.z2d_1 == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.compose.web.css.MediaFeature.toString.<anonymous>' call
      tmp = ': ' + this.z2d_1 + ')';
    }
    var tmp1_elvis_lhs = tmp;
    return '(' + this.y2d_1 + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
  };
  function media(_this__u8e3s4, query, rulesBuild) {
    media_0(_this__u8e3s4, new Raw(query), rulesBuild);
  }
  function media_0(_this__u8e3s4, query, rulesBuild) {
    var rules = _this__u8e3s4.b2e(rulesBuild);
    _this__u8e3s4.c2e(new CSSMediaRuleDeclaration(query, rules));
  }
  function CSSMediaRuleDeclaration(query, rules) {
    this.d2e_1 = query;
    this.e2e_1 = rules;
    this.f2e_1 = 0;
  }
  protoOf(CSSMediaRuleDeclaration).g2e = function () {
    return this.e2e_1;
  };
  protoOf(CSSMediaRuleDeclaration).s2d = function () {
    return '@media ' + this.d2e_1;
  };
  protoOf(CSSMediaRuleDeclaration).equals = function (other) {
    var tmp;
    if (other instanceof CSSMediaRuleDeclaration) {
      tmp = equals(this.e2e_1, other.e2e_1) ? equals(this.d2e_1, other.d2e_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  function unaryMinus(_this__u8e3s4) {
    return new CSSUnitValueTyped(-_this__u8e3s4.value, _this__u8e3s4.unit);
  }
  function CSSGroupingRuleDeclaration() {
  }
  function CSSStyleRuleDeclaration(selector, style) {
    this.h2e_1 = selector;
    this.i2e_1 = style;
    this.j2e_1 = 8;
  }
  protoOf(CSSStyleRuleDeclaration).r2d = function () {
    return this.i2e_1;
  };
  protoOf(CSSStyleRuleDeclaration).s2d = function () {
    return this.h2e_1.l2e();
  };
  protoOf(CSSStyleRuleDeclaration).toString = function () {
    return 'CSSStyleRuleDeclaration(selector=' + this.h2e_1 + ', style=' + this.i2e_1 + ')';
  };
  protoOf(CSSStyleRuleDeclaration).hashCode = function () {
    var result = hashCode(this.h2e_1);
    result = imul(result, 31) + hashCode(this.i2e_1) | 0;
    return result;
  };
  protoOf(CSSStyleRuleDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSStyleRuleDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof CSSStyleRuleDeclaration ? other : THROW_CCE();
    if (!equals(this.h2e_1, tmp0_other_with_cast.h2e_1))
      return false;
    if (!equals(this.i2e_1, tmp0_other_with_cast.i2e_1))
      return false;
    return true;
  };
  function CSSStyledRuleDeclaration() {
  }
  function buildCSSStyleRule(cssRule) {
    var builder = new CSSRuleBuilderImpl();
    cssRule(builder);
    return builder;
  }
  function CSSRuleBuilderImpl() {
    StyleScopeBuilder.call(this);
    this.p2e_1 = 0;
  }
  function Companion_9() {
  }
  var Companion_instance_9;
  function Companion_getInstance_10() {
    return Companion_instance_9;
  }
  function get_cssRem(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.rem' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'rem');
  }
  function get_px(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'px');
  }
  function get_percent(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.percent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, '%');
  }
  function get_fr(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.fr' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'fr');
  }
  function get_ms(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.ms' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'ms');
  }
  function get_vh(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.vh' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'vh');
  }
  function get_em(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.em' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'em');
  }
  function CSSUnitValueTyped(value, unit) {
    this.a2f_1 = value;
    this.b2f_1 = unit;
    this.c2f_1 = 0;
  }
  protoOf(CSSUnitValueTyped).o2 = function () {
    return this.a2f_1;
  };
  protoOf(CSSUnitValueTyped).d2f = function () {
    return this.b2f_1;
  };
  protoOf(CSSUnitValueTyped).toString = function () {
    return '' + this.a2f_1 + this.b2f_1;
  };
  protoOf(CSSUnitValueTyped).hashCode = function () {
    var result = getNumberHashCode(this.a2f_1);
    result = imul(result, 31) + hashCode(this.b2f_1) | 0;
    return result;
  };
  protoOf(CSSUnitValueTyped).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSUnitValueTyped))
      return false;
    var tmp0_other_with_cast = other instanceof CSSUnitValueTyped ? other : THROW_CCE();
    if (!equals(this.a2f_1, tmp0_other_with_cast.a2f_1))
      return false;
    if (!equals(this.b2f_1, tmp0_other_with_cast.b2f_1))
      return false;
    return true;
  };
  function Color() {
    this.e2f_1 = 0;
  }
  var Color_instance;
  function Color_getInstance() {
    return Color_instance;
  }
  function Color_0(name) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return name;
  }
  function StyleScope() {
  }
  function StyleScopeBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.s2e_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.t2e_1 = ArrayList_init_$Create$();
    this.u2e_1 = 0;
  }
  protoOf(StyleScopeBuilder).y2e = function () {
    return this.s2e_1;
  };
  protoOf(StyleScopeBuilder).z2e = function () {
    return this.t2e_1;
  };
  protoOf(StyleScopeBuilder).v2e = function (propertyName, value) {
    this.y2e().y(new StylePropertyDeclaration(propertyName, value));
  };
  protoOf(StyleScopeBuilder).x2e = function (variableName, value) {
    this.z2e().y(new StylePropertyDeclaration(variableName, value));
  };
  protoOf(StyleScopeBuilder).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, StyleHolder) : false) {
      tmp = nativeEquals(this.y2e(), other.y2e()) ? nativeEquals(this.z2e(), other.z2e()) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  function StyleHolder() {
  }
  function StylePropertyDeclaration(name, value) {
    this.f2f_1 = name;
    this.g2f_1 = value;
    this.h2f_1 = 8;
  }
  protoOf(StylePropertyDeclaration).z6 = function () {
    return this.f2f_1;
  };
  protoOf(StylePropertyDeclaration).a7 = function () {
    return this.g2f_1;
  };
  protoOf(StylePropertyDeclaration).toString = function () {
    return 'StylePropertyDeclaration(name=' + this.f2f_1 + ', value=' + this.g2f_1 + ')';
  };
  protoOf(StylePropertyDeclaration).hashCode = function () {
    var result = getStringHashCode(this.f2f_1);
    result = imul(result, 31) + hashCode(this.g2f_1) | 0;
    return result;
  };
  protoOf(StylePropertyDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StylePropertyDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof StylePropertyDeclaration ? other : THROW_CCE();
    if (!(this.f2f_1 === tmp0_other_with_cast.f2f_1))
      return false;
    if (!equals(this.g2f_1, tmp0_other_with_cast.g2f_1))
      return false;
    return true;
  };
  function nativeEquals(_this__u8e3s4, properties) {
    if (!(_this__u8e3s4.l() === properties.l()))
      return false;
    var index = 0;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(_this__u8e3s4, Collection)) {
        tmp = _this__u8e3s4.s();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = _this__u8e3s4.n();
      while (tmp0_iterator.b1()) {
        var element = tmp0_iterator.d1();
        // Inline function 'org.jetbrains.compose.web.css.nativeEquals.<anonymous>' call
        var tmp0 = index;
        index = tmp0 + 1 | 0;
        var otherProp = properties.m(tmp0);
        if (!(element.f2f_1 === otherProp.f2f_1 ? toString_0(element.g2f_1) === toString_0(otherProp.g2f_1) : false)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  }
  function StyleSheet_init_$Init$(rulesHolder, usePrefix, $this) {
    rulesHolder = rulesHolder === VOID ? new CSSRulesHolderState() : rulesHolder;
    usePrefix = usePrefix === VOID ? true : usePrefix;
    StyleSheet.call($this, usePrefix ? null : '', rulesHolder);
    return $this;
  }
  function StyleSheet_init_$Create$(rulesHolder, usePrefix) {
    return StyleSheet_init_$Init$(rulesHolder, usePrefix, objectCreate(protoOf(StyleSheet)));
  }
  function Companion_10() {
    this.i2f_1 = 0;
  }
  var Companion_instance_10;
  function Companion_getInstance_11() {
    return Companion_instance_10;
  }
  function StyleSheet(customPrefix, rulesHolder) {
    rulesHolder = rulesHolder === VOID ? new CSSRulesHolderState() : rulesHolder;
    this.j2f_1 = rulesHolder;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.k2f_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    tmp_0.l2f_1 = customPrefix == null ? '' + getKClassFromExpression(this).e7() + '-' : customPrefix;
    this.m2f_1 = customPrefix == null;
    this.n2f_1 = 0;
  }
  protoOf(StyleSheet).o2f = function () {
    return this.j2f_1.o2f();
  };
  protoOf(StyleSheet).c2e = function (cssRule) {
    this.j2f_1.c2e(cssRule);
  };
  protoOf(StyleSheet).p2f = function (selector, style) {
    this.j2f_1.p2f(selector, style);
  };
  protoOf(StyleSheet).q2f = function (rulesBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = StyleSheet_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    rulesBuild(this_0);
    return this_0.o2f();
  };
  protoOf(StyleSheet).b2e = function (rulesBuild) {
    return this.q2f(rulesBuild);
  };
  protoOf(StyleSheet).s2f = function (selector, cssRule) {
    return this.r2f(selector, cssRule);
  };
  function CSSRulesHolderState() {
    this.w2f_1 = mutableStateListOf();
    this.x2f_1 = 0;
  }
  protoOf(CSSRulesHolderState).o2f = function () {
    return this.w2f_1;
  };
  protoOf(CSSRulesHolderState).c2e = function (cssRule) {
    this.w2f_1.z1c(cssRule);
  };
  function get_Universal() {
    _init_properties_StyleSheetBuilder_kt__ftybdn();
    return Universal;
  }
  var Universal;
  function RawSelector(selector) {
    CSSSelector.call(this);
    this.z2f_1 = selector;
  }
  protoOf(RawSelector).toString = function () {
    return this.z2f_1;
  };
  protoOf(RawSelector).hashCode = function () {
    return getStringHashCode(this.z2f_1);
  };
  protoOf(RawSelector).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RawSelector))
      return false;
    var tmp0_other_with_cast = other instanceof RawSelector ? other : THROW_CCE();
    if (!(this.z2f_1 === tmp0_other_with_cast.z2f_1))
      return false;
    return true;
  };
  function SelectorsScope() {
  }
  function PseudoClassInternal(name) {
    CSSSelector.call(this);
    this.b2g_1 = name;
  }
  protoOf(PseudoClassInternal).equals = function (other) {
    var tmp;
    if (other instanceof PseudoClassInternal) {
      tmp = this.b2g_1 === other.b2g_1 ? this.c2g() == other.c2g() : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(PseudoClassInternal).c2g = function () {
    return null;
  };
  protoOf(PseudoClassInternal).toString = function () {
    var tmp0_safe_receiver = this.c2g();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.compose.web.css.PseudoClassInternal.toString.<anonymous>' call
      tmp = '(' + tmp0_safe_receiver + ')';
    }
    var tmp1_elvis_lhs = tmp;
    return ':' + this.b2g_1 + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
  };
  function GenericStyleSheetBuilder() {
  }
  function CSSRulesHolder() {
  }
  function StyleSheetBuilder() {
  }
  var properties_initialized_StyleSheetBuilder_kt_uqx9b1;
  function _init_properties_StyleSheetBuilder_kt__ftybdn() {
    if (!properties_initialized_StyleSheetBuilder_kt_uqx9b1) {
      properties_initialized_StyleSheetBuilder_kt_uqx9b1 = true;
      Universal = new RawSelector('*');
    }
  }
  function backgroundColor(_this__u8e3s4, value) {
    _this__u8e3s4.v2e('background-color', value);
  }
  function borderRadius(_this__u8e3s4, r) {
    _this__u8e3s4.v2e('border-radius', r);
  }
  function border(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    border_0(_this__u8e3s4, border$lambda(width, style, color));
  }
  function borderRadius_0(_this__u8e3s4, topLeft, topRightAndBottomLeft, bottomRight) {
    _this__u8e3s4.q2e('border-radius', '' + topLeft + ' ' + topRightAndBottomLeft + ' ' + bottomRight);
  }
  function borderRadius_1(_this__u8e3s4, topLeft, topRight, bottomRight, bottomLeft) {
    _this__u8e3s4.q2e('border-radius', '' + topLeft + ' ' + topRight + ' ' + bottomRight + ' ' + bottomLeft);
  }
  function CSSBorder() {
    this.d2g_1 = null;
    this.e2g_1 = null;
    this.f2g_1 = null;
    this.g2g_1 = 8;
  }
  protoOf(CSSBorder).equals = function (other) {
    var tmp;
    if (other instanceof CSSBorder) {
      tmp = (equals(this.d2g_1, other.d2g_1) ? equals(this.e2g_1, other.e2g_1) : false) ? equals(this.f2g_1, other.f2g_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CSSBorder).toString = function () {
    var values = listOfNotNull([this.d2g_1, this.e2g_1, this.f2g_1]);
    return joinToString(values, ' ');
  };
  function width(_this__u8e3s4, size) {
    _this__u8e3s4.d2g_1 = size;
  }
  function style_1(_this__u8e3s4, style) {
    _this__u8e3s4.e2g_1 = style;
  }
  function color(_this__u8e3s4, color) {
    _this__u8e3s4.f2g_1 = color;
  }
  function border_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBorder();
    // Inline function 'kotlin.contracts.contract' call
    borderBuild(this_0);
    _this__u8e3s4.v2e('border', this_0);
  }
  function border$lambda($width, $style, $color) {
    return function ($this$border) {
      var tmp0_safe_receiver = $width;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        width($this$border, tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $style;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        style_1($this$border, tmp1_safe_receiver);
      }
      var tmp2_safe_receiver = $color;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        color($this$border, tmp2_safe_receiver);
      }
      return Unit_instance;
    };
  }
  function width_0(_this__u8e3s4, value) {
    _this__u8e3s4.v2e('width', value);
  }
  function minWidth(_this__u8e3s4, value) {
    _this__u8e3s4.v2e('min-width', value);
  }
  function height(_this__u8e3s4, value) {
    _this__u8e3s4.v2e('height', value);
  }
  function minHeight(_this__u8e3s4, value) {
    _this__u8e3s4.v2e('min-height', value);
  }
  function maxWidth(_this__u8e3s4, value) {
    _this__u8e3s4.v2e('max-width', value);
  }
  function boxSizing(_this__u8e3s4, value) {
    _this__u8e3s4.q2e('box-sizing', value);
  }
  function color_0(_this__u8e3s4, value) {
    _this__u8e3s4.v2e('color', value);
  }
  function flexGrow(_this__u8e3s4, value) {
    _this__u8e3s4.r2e('flex-grow', value);
  }
  function alignItems(_this__u8e3s4, alignItems) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.q2e('align-items', alignItems);
  }
  function alignSelf(_this__u8e3s4, alignSelf) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.q2e('align-self', alignSelf);
  }
  function flexDirection(_this__u8e3s4, flexDirection) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.q2e('flex-direction', flexDirection);
  }
  function justifyContent(_this__u8e3s4, justifyContent) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.q2e('justify-content', justifyContent);
  }
  function gap(_this__u8e3s4, value) {
    _this__u8e3s4.v2e('gap', value);
  }
  function gridRow(_this__u8e3s4, start, end) {
    _this__u8e3s4.q2e('grid-row', '' + start + ' / ' + end);
  }
  function gridTemplateColumns(_this__u8e3s4, value) {
    _this__u8e3s4.q2e('grid-template-columns', value);
  }
  function gridTemplateRows(_this__u8e3s4, value) {
    _this__u8e3s4.q2e('grid-template-rows', value);
  }
  function gridArea(_this__u8e3s4, rowStart, columnStart) {
    _this__u8e3s4.q2e('grid-area', rowStart + ' / ' + columnStart);
  }
  function gridAutoColumns(_this__u8e3s4, value) {
    _this__u8e3s4.q2e('grid-auto-columns', value);
  }
  function gridAutoRows(_this__u8e3s4, value) {
    _this__u8e3s4.q2e('grid-auto-rows', value);
  }
  function margin(_this__u8e3s4, value) {
    _this__u8e3s4.q2e('margin', joinToString_0(value, ' '));
  }
  function padding(_this__u8e3s4, value) {
    _this__u8e3s4.q2e('padding', joinToString_0(value, ' '));
  }
  function position(_this__u8e3s4, position) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.q2e('position', position);
  }
  function top(_this__u8e3s4, value) {
    _this__u8e3s4.v2e('top', value);
  }
  function left(_this__u8e3s4, value) {
    _this__u8e3s4.v2e('left', value);
  }
  function right(_this__u8e3s4, value) {
    _this__u8e3s4.v2e('right', value);
  }
  function bottom(_this__u8e3s4, value) {
    _this__u8e3s4.v2e('bottom', value);
  }
  function display(_this__u8e3s4, displayStyle) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.q2e('display', displayStyle);
  }
  function opacity(_this__u8e3s4, value) {
    _this__u8e3s4.r2e('opacity', value);
  }
  function lineHeight(_this__u8e3s4, value) {
    _this__u8e3s4.q2e('line-height', value);
  }
  function fontSize(_this__u8e3s4, value) {
    _this__u8e3s4.v2e('font-size', value);
  }
  function fontWeight(_this__u8e3s4, value) {
    _this__u8e3s4.r2e('font-weight', value);
  }
  function fontFamily(_this__u8e3s4, value) {
    _this__u8e3s4.q2e('font-family', joinToString_0(value, ', ', VOID, VOID, VOID, VOID, fontFamily$lambda));
  }
  function fontFamily$lambda(it) {
    return contains(it, ' ') ? '"' + it + '"' : it;
  }
  function CSSSelector() {
    this.k2e_1 = 0;
  }
  protoOf(CSSSelector).l2e = function () {
    return toString_0(this);
  };
  function TagElement(elementBuilder, applyAttrs, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.b1g(-576127026);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.c16(elementBuilder) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.e1f(applyAttrs) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.e1f(content) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.e1e()) {
      if (isTraceInProgress()) {
        traceEventStart(-576127026, $dirty, -1, 'org.jetbrains.compose.web.dom.TagElement (Base.kt:110)');
      }
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.j1e(-492369756);
      sourceInformation($composer_1, 'CC(remember):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.n1f();
      var tmp;
      if (false ? true : it === Companion_getInstance().b19_1) {
        // Inline function 'org.jetbrains.compose.web.dom.TagElement.<anonymous>' call
        var value = new ElementScopeImpl();
        $composer_1.t1f(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_1.k1e();
      var scope = tmp0;
      var refEffect = null;
      // Inline function 'org.jetbrains.compose.web.dom.ComposeDomNode' call
      var $composer_2 = $composer_0;
      $composer_2.z18();
      if ($composer_2.r1e()) {
        var tmp_1 = $composer_2;
        tmp_1.t1e(TagElement$lambda(elementBuilder, scope));
      } else {
        $composer_2.w1e();
      }
      // Inline function 'org.jetbrains.compose.web.dom.TagElement.<anonymous>' call
      var $this$ComposeDomNode = _SkippableUpdater___init__impl__4ft0t9($composer_2);
      var $composer_3 = $composer_2;
      var attrsScope = new AttrsScopeBuilder();
      if (applyAttrs == null)
        null;
      else
        applyAttrs(attrsScope);
      refEffect = attrsScope.o2c_1;
      // Inline function 'androidx.compose.runtime.SkippableUpdater.update' call
      _SkippableUpdater___get_composer__impl__6t7yne($this$ComposeDomNode).j1e(509942095);
      // Inline function 'org.jetbrains.compose.web.dom.TagElement.<anonymous>.<anonymous>' call
      var $this$update = _Updater___init__impl__rbfxm8(_SkippableUpdater___get_composer__impl__6t7yne($this$ComposeDomNode));
      Updater__set_impl_v7kwss($this$update, attrsScope.p2c_1, DomElementWrapper$updateClasses$ref());
      Updater__set_impl_v7kwss($this$update, attrsScope.m2c_1, DomElementWrapper$updateStyleDeclarations$ref());
      var tmp_2 = attrsScope.t2c();
      Updater__set_impl_v7kwss($this$update, tmp_2, DomElementWrapper$updateAttrs$ref());
      var tmp_3 = attrsScope.k2c_1.u2c();
      Updater__set_impl_v7kwss($this$update, tmp_3, DomElementWrapper$updateEventListeners$ref());
      Updater__set_impl_v7kwss($this$update, attrsScope.n2c_1, DomElementWrapper$updateProperties$ref());
      _SkippableUpdater___get_composer__impl__6t7yne($this$ComposeDomNode).k1e();
      $composer_2.j1e(2058660585);
      // Inline function 'org.jetbrains.compose.web.dom.TagElement.<anonymous>' call
      var $changed_0 = 8 & 64 >> 3 | 14 & 64 >> 3 | 112 & 64 >> 6;
      var $composer_4 = $composer_2;
      $composer_4.j1e(-914956529);
      content == null || content(scope, $composer_4, 14 & $changed_0 | 112 & $dirty >> 3);
      $composer_4.k1e();
      $composer_2.k1e();
      $composer_2.y1e();
      var tmp0_safe_receiver = refEffect;
      var tmp_4;
      if (tmp0_safe_receiver == null) {
        tmp_4 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        DisposableEffect(null, TagElement$lambda_0(tmp0_safe_receiver, scope), $composer_0, 6);
        tmp_4 = Unit_instance;
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.v18();
    }
    var tmp1_safe_receiver = $composer_0.c1g();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.y1k(TagElement$lambda_1(elementBuilder, applyAttrs, content, $changed));
    }
  }
  function DomElementWrapper(node) {
    DomNodeWrapper.call(this, node);
    this.j2g_1 = node;
    this.k2g_1 = emptyList();
  }
  protoOf(DomElementWrapper).l2a = function () {
    return this.j2g_1;
  };
  protoOf(DomElementWrapper).l2g = function (list) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.k2g_1.n();
    while (tmp0_iterator.b1()) {
      var element = tmp0_iterator.d1();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateEventListeners.<anonymous>' call
      this.j2g_1.removeEventListener(element.a1w(), element);
    }
    this.k2g_1 = list;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = this.k2g_1.n();
    while (tmp0_iterator_0.b1()) {
      var element_0 = tmp0_iterator_0.d1();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateEventListeners.<anonymous>' call
      this.j2g_1.addEventListener(element_0.a1w(), element_0);
    }
  };
  protoOf(DomElementWrapper).m2g = function (applicators) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = applicators.n();
    while (tmp0_iterator.b1()) {
      var element = tmp0_iterator.d1();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateProperties.<anonymous>' call
      var applicator = element.z6();
      var item = element.a7();
      applicator(this.j2g_1, item);
    }
  };
  protoOf(DomElementWrapper).n2g = function (styleApplier) {
    var tmp0_subject = this.j2g_1;
    var tmp;
    if (tmp0_subject instanceof HTMLElement) {
      tmp = true;
    } else {
      tmp = tmp0_subject instanceof SVGElement;
    }
    if (tmp) {
      this.j2g_1.removeAttribute('style');
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var style = this.j2g_1.style;
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = styleApplier.y2e().n();
      while (tmp0_iterator.b1()) {
        var element = tmp0_iterator.d1();
        // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateStyleDeclarations.<anonymous>' call
        var name = element.z6();
        var value = element.a7();
        style.setProperty(name, toString_0(value));
      }
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = styleApplier.z2e().n();
      while (tmp0_iterator_0.b1()) {
        var element_0 = tmp0_iterator_0.d1();
        // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateStyleDeclarations.<anonymous>' call
        var name_0 = element_0.z6();
        var value_0 = element_0.a7();
        style.setProperty(name_0, toString_0(value_0));
      }
    }
  };
  protoOf(DomElementWrapper).o2g = function (attrs) {
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = this.j2g_1.getAttributeNames();
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateAttrs.<anonymous>' call
      switch (element) {
        case 'style':
        case 'class':
          break;
        default:
          this.j2g_1.removeAttribute(element);
          break;
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = attrs.k2().n();
    while (tmp0_iterator.b1()) {
      var element_0 = tmp0_iterator.d1();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateAttrs.<anonymous>' call
      this.j2g_1.setAttribute(element_0.n2(), element_0.o2());
    }
  };
  protoOf(DomElementWrapper).p2g = function (classes) {
    this.j2g_1.removeAttribute('class');
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!classes.s()) {
      var tmp = this.j2g_1.classList;
      // Inline function 'kotlin.collections.toTypedArray' call
      var tmp$ret$1 = copyToArray(classes);
      (function () {
        var $externalVarargReceiverTmp = tmp;
        return $externalVarargReceiverTmp.add.apply($externalVarargReceiverTmp, [].slice.call(tmp$ret$1.slice()));
      }.call(this));
    }
  };
  function TagElement$lambda($elementBuilder, $scope) {
    return function () {
      // Inline function 'org.jetbrains.compose.web.dom.TagElement.<anonymous>' call
      var node = $elementBuilder.q1t();
      $scope.u2g(node);
      return new DomElementWrapper(node);
    };
  }
  function DomElementWrapper$updateClasses$ref() {
    var l = function (p0, p1) {
      p0.p2g(p1);
      return Unit_instance;
    };
    l.callableName = 'updateClasses';
    return l;
  }
  function DomElementWrapper$updateStyleDeclarations$ref() {
    var l = function (p0, p1) {
      p0.n2g(p1);
      return Unit_instance;
    };
    l.callableName = 'updateStyleDeclarations';
    return l;
  }
  function DomElementWrapper$updateAttrs$ref() {
    var l = function (p0, p1) {
      p0.o2g(p1);
      return Unit_instance;
    };
    l.callableName = 'updateAttrs';
    return l;
  }
  function DomElementWrapper$updateEventListeners$ref() {
    var l = function (p0, p1) {
      p0.l2g(p1);
      return Unit_instance;
    };
    l.callableName = 'updateEventListeners';
    return l;
  }
  function DomElementWrapper$updateProperties$ref() {
    var l = function (p0, p1) {
      p0.m2g(p1);
      return Unit_instance;
    };
    l.callableName = 'updateProperties';
    return l;
  }
  function TagElement$lambda_0($this, $scope) {
    return function ($this$DisposableEffect) {
      return $this($this$DisposableEffect, $scope.v2g());
    };
  }
  function TagElement$lambda_1($elementBuilder, $applyAttrs, $content, $$changed) {
    return function ($composer, $force) {
      TagElement($elementBuilder, $applyAttrs, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ElementScopeImpl() {
    ElementScopeBase.call(this);
    this.t2g_1 = 8;
  }
  protoOf(ElementScopeImpl).u2g = function (_set____db54di) {
    this.s2g_1 = _set____db54di;
  };
  protoOf(ElementScopeImpl).v2g = function () {
    var tmp = this.s2g_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('element');
    }
  };
  protoOf(ElementScopeImpl).w2g = function (_this__u8e3s4) {
    return this.v2g();
  };
  function ElementScopeBase() {
    this.x2g_1 = 0;
    this.y2g_1 = 8;
  }
  var Address;
  var Article;
  var Aside;
  var Header;
  var Area;
  var Audio;
  var Map;
  var Track;
  var Video;
  var Datalist;
  var Fieldset;
  var Legend;
  var Meter;
  var Output;
  var Progress;
  var Embed;
  var Iframe;
  var Object_0;
  var Param;
  var Picture;
  var Source;
  var Canvas;
  var DList;
  var DTerm;
  var DDescription;
  function get_Div() {
    _init_properties_Elements_kt__eyv5nt();
    return Div;
  }
  var Div;
  function get_A() {
    _init_properties_Elements_kt__eyv5nt();
    return A;
  }
  var A;
  var Input;
  function get_Button() {
    _init_properties_Elements_kt__eyv5nt();
    return Button;
  }
  var Button;
  function get_H1() {
    _init_properties_Elements_kt__eyv5nt();
    return H1;
  }
  var H1;
  function get_H2() {
    _init_properties_Elements_kt__eyv5nt();
    return H2;
  }
  var H2;
  function get_H3() {
    _init_properties_Elements_kt__eyv5nt();
    return H3;
  }
  var H3;
  function get_H4() {
    _init_properties_Elements_kt__eyv5nt();
    return H4;
  }
  var H4;
  var H5;
  var H6;
  function get_P() {
    _init_properties_Elements_kt__eyv5nt();
    return P;
  }
  var P;
  function get_Em() {
    _init_properties_Elements_kt__eyv5nt();
    return Em;
  }
  var Em;
  var I;
  var B;
  var Small;
  var Sup;
  var Sub;
  var Blockquote;
  function get_Span() {
    _init_properties_Elements_kt__eyv5nt();
    return Span;
  }
  var Span;
  var Br;
  function get_Ul() {
    _init_properties_Elements_kt__eyv5nt();
    return Ul;
  }
  var Ul;
  var Ol;
  function get_Li() {
    _init_properties_Elements_kt__eyv5nt();
    return Li;
  }
  var Li;
  function get_Img() {
    _init_properties_Elements_kt__eyv5nt();
    return Img;
  }
  var Img;
  var Form;
  var Select;
  var Option;
  var OptGroup;
  var Section;
  var TextArea;
  var Nav;
  function get_Pre() {
    _init_properties_Elements_kt__eyv5nt();
    return Pre;
  }
  var Pre;
  function get_Code() {
    _init_properties_Elements_kt__eyv5nt();
    return Code;
  }
  var Code;
  var Main;
  var Footer;
  function get_Hr() {
    _init_properties_Elements_kt__eyv5nt();
    return Hr;
  }
  var Hr;
  var Label;
  var Table;
  var Caption;
  var Col;
  var Colgroup;
  var Tr;
  var Thead;
  var Th;
  var Td;
  var Tbody;
  var Tfoot;
  function get_Style() {
    _init_properties_Elements_kt__eyv5nt();
    return Style;
  }
  var Style;
  function ElementBuilder() {
  }
  function _get_el__ndc0ck($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.a2h_1;
    el$factory();
    return this_0.o2();
  }
  function ElementBuilderImplementation$el$delegate$lambda(this$0) {
    return function () {
      return document.createElement(this$0.z2g_1);
    };
  }
  function ElementBuilderImplementation(tagName) {
    this.z2g_1 = tagName;
    var tmp = this;
    tmp.a2h_1 = lazy(ElementBuilderImplementation$el$delegate$lambda(this));
  }
  protoOf(ElementBuilderImplementation).q1t = function () {
    var tmp = _get_el__ndc0ck(this).cloneNode();
    return tmp instanceof Element ? tmp : THROW_CCE();
  };
  function Div_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.b1g(1121267064);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.e1f(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.e1f(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.e1e()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1121267064, $dirty, -1, 'org.jetbrains.compose.web.dom.Div (Elements.kt:495)');
      }
      TagElement(get_Div(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
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
      tmp0_safe_receiver.y1k(Div$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Text_0(value, $composer, $changed) {
    _init_properties_Elements_kt__eyv5nt();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.b1g(-1813500779);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.c16(value) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.e1e()) {
      if (isTraceInProgress()) {
        traceEventStart(-1813500779, $dirty, -1, 'org.jetbrains.compose.web.dom.Text (Elements.kt:482)');
      }
      // Inline function 'androidx.compose.runtime.ComposeNode' call
      $composer_0.j1e(-671462136);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.n1f();
      var tmp;
      if (false ? true : it === Companion_getInstance().b19_1) {
        // Inline function 'org.jetbrains.compose.web.dom.Text.<anonymous>' call
        var value_0 = Text$lambda;
        this_0.t1f(value_0);
        tmp = value_0;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.k1e();
      var $composer_1 = $composer_0;
      $composer_1.j1e(1886828752);
      sourceInformation($composer_1, 'CC(ComposeNode):Composables.kt#9igjgp');
      var tmp_1 = $composer_1.f1e();
      if (!(tmp_1 instanceof DomApplier)) {
        invalidApplier();
      }
      $composer_1.z18();
      if ($composer_1.r1e()) {
        var tmp_2 = $composer_1;
        tmp_2.t1e(Text$lambda_0(tmpCache));
      } else {
        $composer_1.w1e();
      }
      // Inline function 'org.jetbrains.compose.web.dom.Text.<anonymous>' call
      var $this$ComposeNode = _Updater___init__impl__rbfxm8($composer_1);
      Updater__set_impl_v7kwss($this$ComposeNode, value, Text$lambda_1);
      $composer_1.y1e();
      $composer_1.k1e();
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
      tmp0_safe_receiver.y1k(Text$lambda_2(value, $changed));
    }
  }
  function Code_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.b1g(960073712);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.e1f(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.e1f(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.e1e()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(960073712, $dirty, -1, 'org.jetbrains.compose.web.dom.Code (Elements.kt:810)');
      }
      TagElement(get_Code(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
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
      tmp0_safe_receiver.y1k(Code$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Li_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.b1g(-991532288);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.e1f(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.e1f(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.e1e()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-991532288, $dirty, -1, 'org.jetbrains.compose.web.dom.Li (Elements.kt:639)');
      }
      TagElement(get_Li(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
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
      tmp0_safe_receiver.y1k(Li$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Em_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.b1g(420948395);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.e1f(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.e1f(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.e1e()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(420948395, $dirty, -1, 'org.jetbrains.compose.web.dom.Em (Elements.kt:575)');
      }
      TagElement(get_Em(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
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
      tmp0_safe_receiver.y1k(Em$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function H1_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.b1g(867530828);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.e1f(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.e1f(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.e1e()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(867530828, $dirty, -1, 'org.jetbrains.compose.web.dom.H1 (Elements.kt:533)');
      }
      TagElement(get_H1(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
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
      tmp0_safe_receiver.y1k(H1$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function P_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.b1g(-892332201);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.e1f(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.e1f(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.e1e()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-892332201, $dirty, -1, 'org.jetbrains.compose.web.dom.P (Elements.kt:569)');
      }
      TagElement(get_P(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
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
      tmp0_safe_receiver.y1k(P$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function H2_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.b1g(881063629);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.e1f(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.e1f(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.e1e()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(881063629, $dirty, -1, 'org.jetbrains.compose.web.dom.H2 (Elements.kt:539)');
      }
      TagElement(get_H2(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
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
      tmp0_safe_receiver.y1k(H2$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function H3_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.b1g(894596430);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.e1f(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.e1f(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.e1e()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(894596430, $dirty, -1, 'org.jetbrains.compose.web.dom.H3 (Elements.kt:545)');
      }
      TagElement(get_H3(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
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
      tmp0_safe_receiver.y1k(H3$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function H4_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.b1g(908129231);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.e1f(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.e1f(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.e1e()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(908129231, $dirty, -1, 'org.jetbrains.compose.web.dom.H4 (Elements.kt:551)');
      }
      TagElement(get_H4(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
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
      tmp0_safe_receiver.y1k(H4$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Ul_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.b1g(-1470249702);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.e1f(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.e1f(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.e1e()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1470249702, $dirty, -1, 'org.jetbrains.compose.web.dom.Ul (Elements.kt:627)');
      }
      TagElement(get_Ul(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
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
      tmp0_safe_receiver.y1k(Ul$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Pre_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.b1g(1813332106);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.e1f(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.e1f(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.e1e()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1813332106, $dirty, -1, 'org.jetbrains.compose.web.dom.Pre (Elements.kt:798)');
      }
      TagElement(get_Pre(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
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
      tmp0_safe_receiver.y1k(Pre$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Span_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.b1g(-606646835);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.e1f(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.e1f(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.e1e()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-606646835, $dirty, -1, 'org.jetbrains.compose.web.dom.Span (Elements.kt:617)');
      }
      TagElement(get_Span(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
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
      tmp0_safe_receiver.y1k(Span$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Hr_0(attrs, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.b1g(1499320512);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.e1f(attrs_0._v) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.e1e()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1499320512, $dirty, -1, 'org.jetbrains.compose.web.dom.Hr (Elements.kt:845)');
      }
      TagElement(get_Hr(), attrs_0._v, null, $composer_0, 384 | 112 & $dirty << 3);
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
      tmp0_safe_receiver.y1k(Hr$lambda(attrs_0, $changed, $default));
    }
  }
  function Button_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.b1g(17018421);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.e1f(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.e1f(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.e1e()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(17018421, $dirty, -1, 'org.jetbrains.compose.web.dom.Button (Elements.kt:527)');
      }
      TagElement(get_Button(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
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
      tmp0_safe_receiver.y1k(Button$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Img_0(src, alt, attrs, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var alt_0 = {_v: alt};
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.b1g(140604733);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.c16(src) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.c16(alt_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.e1f(attrs_0._v) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.e1e()) {
      if (!(($default & 2) === 0)) {
        alt_0._v = '';
      }
      if (!(($default & 4) === 0)) {
        attrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(140604733, $dirty, -1, 'org.jetbrains.compose.web.dom.Img (Elements.kt:646)');
      }
      var tmp = get_Img();
      $composer_0.j1e(-671457079);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = !!(!!($composer_0.c16(src) | $composer_0.c16(alt_0._v)) | $composer_0.e1f(attrs_0._v));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.n1f();
      var tmp_0;
      if (invalid ? true : it === Companion_getInstance().b19_1) {
        // Inline function 'org.jetbrains.compose.web.dom.Img.<anonymous>' call
        var value = Img$lambda(src, alt_0, attrs_0);
        this_0.t1f(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.k1e();
      TagElement(tmp, tmpCache, null, $composer_0, 384);
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
      tmp0_safe_receiver.y1k(Img$lambda_0(src, alt_0, attrs_0, $changed, $default));
    }
  }
  function A_0(href, attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var href_0 = {_v: href};
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.b1g(1386364631);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.c16(href_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.e1f(attrs_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.e1f(content_0._v) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.e1e()) {
      if (!(($default & 1) === 0)) {
        href_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1386364631, $dirty, -1, 'org.jetbrains.compose.web.dom.A (Elements.kt:508)');
      }
      var tmp = get_A();
      $composer_0.j1e(-671461516);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = !!($composer_0.c16(href_0._v) | $composer_0.e1f(attrs_0._v));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.n1f();
      var tmp_0;
      if (invalid ? true : it === Companion_getInstance().b19_1) {
        // Inline function 'org.jetbrains.compose.web.dom.A.<anonymous>' call
        var value = A$lambda(href_0, attrs_0);
        this_0.t1f(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.k1e();
      TagElement(tmp, tmpCache, content_0._v, $composer_0, 896 & $dirty);
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
      tmp0_safe_receiver.y1k(A$lambda_0(href_0, attrs_0, content_0, $changed, $default));
    }
  }
  function Style_0(applyAttrs, cssRules, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var applyAttrs_0 = {_v: applyAttrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.b1g(244974285);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.e1f(applyAttrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.c16(cssRules) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.e1e()) {
      if (!(($default & 1) === 0)) {
        applyAttrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(244974285, $dirty, -1, 'org.jetbrains.compose.web.dom.Style (Elements.kt:1002)');
      }
      var tmp = get_Style();
      $composer_0.j1e(-671448825);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = $composer_0.e1f(applyAttrs_0._v);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.n1f();
      var tmp_0;
      if (invalid ? true : it === Companion_getInstance().b19_1) {
        // Inline function 'org.jetbrains.compose.web.dom.Style.<anonymous>' call
        var value = Style$lambda(applyAttrs_0);
        this_0.t1f(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.k1e();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.compose.web.dom.Style.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, 962227798, true, Style$lambda_0(cssRules));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.j1e(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.c16(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.n1f();
      var tmp_3;
      if (invalid_0 ? true : it_0 === Companion_getInstance().b19_1) {
        // Inline function 'org.jetbrains.compose.web.dom.Style.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_1.t1f(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_1.k1e();
      TagElement(tmp, tmpCache, tmp0, $composer_0, 384);
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
      tmp0_safe_receiver.y1k(Style$lambda_1(applyAttrs_0, cssRules, $changed, $default));
    }
  }
  function clearCSSRules(_this__u8e3s4) {
    _init_properties_Elements_kt__eyv5nt();
    // Inline function 'kotlin.repeat' call
    var times = _this__u8e3s4.cssRules.length;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.jetbrains.compose.web.dom.clearCSSRules.<anonymous>' call
        _this__u8e3s4.deleteRule(0);
      }
       while (inductionVariable < times);
  }
  function Div$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Div_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Text$lambda() {
    _init_properties_Elements_kt__eyv5nt();
    return new DomNodeWrapper(document.createTextNode(''));
  }
  function Text$lambda_0($factory) {
    return function () {
      return $factory();
    };
  }
  function Text$lambda_1($this$set, value) {
    _init_properties_Elements_kt__eyv5nt();
    var tmp = $this$set.l2a();
    (tmp instanceof Text ? tmp : THROW_CCE()).data = value;
    return Unit_instance;
  }
  function Text$lambda_2($value, $$changed) {
    return function ($composer, $force) {
      Text_0($value, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Code$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Code_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Li$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Li_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Em$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Em_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function H1$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      H1_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function P$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      P_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function H2$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      H2_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function H3$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      H3_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function H4$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      H4_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Ul$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Ul_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Pre$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Pre_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Span$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Span_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Hr$lambda($attrs, $$changed, $$default) {
    return function ($composer, $force) {
      Hr_0($attrs._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Button$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Button_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Img$lambda($src, $alt, $attrs) {
    return function ($this$TagElement) {
      alt(src($this$TagElement, $src), $alt._v);
      var tmp;
      if (!($attrs._v == null)) {
        tmp = $attrs._v($this$TagElement);
      }
      return Unit_instance;
    };
  }
  function Img$lambda_0($src, $alt, $attrs, $$changed, $$default) {
    return function ($composer, $force) {
      Img_0($src, $alt._v, $attrs._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function A$lambda($href, $attrs) {
    return function ($this$TagElement) {
      var tmp;
      if (!($href._v == null)) {
        href($this$TagElement, $href._v);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!($attrs._v == null)) {
        tmp_0 = $attrs._v($this$TagElement);
      }
      return Unit_instance;
    };
  }
  function A$lambda_0($href, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      A_0($href._v, $attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Style$lambda($applyAttrs) {
    return function ($this$TagElement) {
      var tmp;
      if (!($applyAttrs._v == null)) {
        tmp = $applyAttrs._v($this$TagElement);
      }
      return Unit_instance;
    };
  }
  function _no_name_provided__qut3iv($cssStylesheet) {
    this.b2h_1 = $cssStylesheet;
  }
  protoOf(_no_name_provided__qut3iv).fn = function () {
    // Inline function 'org.jetbrains.compose.web.dom.Style.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    var tmp0_safe_receiver = this.b2h_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      clearCSSRules(tmp0_safe_receiver);
    }
  };
  function Style$lambda$lambda($this_TagElement, $cssRules) {
    return function ($this$DisposableEffect) {
      var tmp = $this_TagElement.w2g($this$DisposableEffect).sheet;
      var cssStylesheet = tmp instanceof CSSStyleSheet ? tmp : null;
      if (cssStylesheet == null)
        null;
      else {
        setCSSRules(cssStylesheet, $cssRules);
      }
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv(cssStylesheet);
    };
  }
  function Style$lambda_0($cssRules) {
    return function ($this$TagElement, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.c16($this$TagElement) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.e1e()) {
        if (isTraceInProgress()) {
          traceEventStart(962227798, $dirty, -1, 'org.jetbrains.compose.web.dom.Style.<anonymous> (Elements.kt:1011)');
        }
        var tmp_1 = $cssRules.l();
        DisposableEffect_0($cssRules, tmp_1, Style$lambda$lambda($this$TagElement, $cssRules), $composer_0, 0);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_instance;
        }
        tmp_0 = tmp_2;
      } else {
        $composer_0.v18();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.y29(p0, p1, p2);
    };
  }
  function Style$lambda_1($applyAttrs, $cssRules, $$changed, $$default) {
    return function ($composer, $force) {
      Style_0($applyAttrs._v, $cssRules, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function el$factory() {
    return getPropertyCallableRef('el', 1, KProperty1, function (receiver) {
      return _get_el__ndc0ck(receiver);
    }, null);
  }
  var properties_initialized_Elements_kt_gtqiqv;
  function _init_properties_Elements_kt__eyv5nt() {
    if (!properties_initialized_Elements_kt_gtqiqv) {
      properties_initialized_Elements_kt_gtqiqv = true;
      Address = new ElementBuilderImplementation('address');
      Article = new ElementBuilderImplementation('article');
      Aside = new ElementBuilderImplementation('aside');
      Header = new ElementBuilderImplementation('header');
      Area = new ElementBuilderImplementation('area');
      Audio = new ElementBuilderImplementation('audio');
      Map = new ElementBuilderImplementation('map');
      Track = new ElementBuilderImplementation('track');
      Video = new ElementBuilderImplementation('video');
      Datalist = new ElementBuilderImplementation('datalist');
      Fieldset = new ElementBuilderImplementation('fieldset');
      Legend = new ElementBuilderImplementation('legend');
      Meter = new ElementBuilderImplementation('meter');
      Output = new ElementBuilderImplementation('output');
      Progress = new ElementBuilderImplementation('progress');
      Embed = new ElementBuilderImplementation('embed');
      Iframe = new ElementBuilderImplementation('iframe');
      Object_0 = new ElementBuilderImplementation('object');
      Param = new ElementBuilderImplementation('param');
      Picture = new ElementBuilderImplementation('picture');
      Source = new ElementBuilderImplementation('source');
      Canvas = new ElementBuilderImplementation('canvas');
      DList = new ElementBuilderImplementation('dl');
      DTerm = new ElementBuilderImplementation('dt');
      DDescription = new ElementBuilderImplementation('dd');
      Div = new ElementBuilderImplementation('div');
      A = new ElementBuilderImplementation('a');
      Input = new ElementBuilderImplementation('input');
      Button = new ElementBuilderImplementation('button');
      H1 = new ElementBuilderImplementation('h1');
      H2 = new ElementBuilderImplementation('h2');
      H3 = new ElementBuilderImplementation('h3');
      H4 = new ElementBuilderImplementation('h4');
      H5 = new ElementBuilderImplementation('h5');
      H6 = new ElementBuilderImplementation('h6');
      P = new ElementBuilderImplementation('p');
      Em = new ElementBuilderImplementation('em');
      I = new ElementBuilderImplementation('i');
      B = new ElementBuilderImplementation('b');
      Small = new ElementBuilderImplementation('small');
      Sup = new ElementBuilderImplementation('sup');
      Sub = new ElementBuilderImplementation('sub');
      Blockquote = new ElementBuilderImplementation('blockquote');
      Span = new ElementBuilderImplementation('span');
      Br = new ElementBuilderImplementation('br');
      Ul = new ElementBuilderImplementation('ul');
      Ol = new ElementBuilderImplementation('ol');
      Li = new ElementBuilderImplementation('li');
      Img = new ElementBuilderImplementation('img');
      Form = new ElementBuilderImplementation('form');
      Select = new ElementBuilderImplementation('select');
      Option = new ElementBuilderImplementation('option');
      OptGroup = new ElementBuilderImplementation('optgroup');
      Section = new ElementBuilderImplementation('section');
      TextArea = new ElementBuilderImplementation('textarea');
      Nav = new ElementBuilderImplementation('nav');
      Pre = new ElementBuilderImplementation('pre');
      Code = new ElementBuilderImplementation('code');
      Main = new ElementBuilderImplementation('main');
      Footer = new ElementBuilderImplementation('footer');
      Hr = new ElementBuilderImplementation('hr');
      Label = new ElementBuilderImplementation('label');
      Table = new ElementBuilderImplementation('table');
      Caption = new ElementBuilderImplementation('caption');
      Col = new ElementBuilderImplementation('col');
      Colgroup = new ElementBuilderImplementation('colgroup');
      Tr = new ElementBuilderImplementation('tr');
      Thead = new ElementBuilderImplementation('thead');
      Th = new ElementBuilderImplementation('th');
      Td = new ElementBuilderImplementation('td');
      Tbody = new ElementBuilderImplementation('tbody');
      Tfoot = new ElementBuilderImplementation('tfoot');
      Style = new ElementBuilderImplementation('style');
    }
  }
  function setCSSRules(_this__u8e3s4, cssRules) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = cssRules.n();
    while (tmp0_iterator.b1()) {
      var element = tmp0_iterator.d1();
      // Inline function 'org.jetbrains.compose.web.dom.setCSSRules.<anonymous>' call
      addRule(_this__u8e3s4, element);
    }
  }
  function addRule(_this__u8e3s4, cssRuleDeclaration) {
    var tmp0_safe_receiver = addRule_0(_this__u8e3s4, cssRuleDeclaration.s2d() + ' {}');
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      fillRule(cssRuleDeclaration, tmp0_safe_receiver);
    }
  }
  function addRule_0(_this__u8e3s4, cssRule) {
    var cssRuleIndex = _this__u8e3s4.insertRule(cssRule, _this__u8e3s4.cssRules.length);
    return _this__u8e3s4.cssRules.item(cssRuleIndex);
  }
  function fillRule(cssRuleDeclaration, cssRule) {
    if (isInterface(cssRuleDeclaration, CSSStyledRuleDeclaration)) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var cssStyleRule = cssRule;
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = cssRuleDeclaration.r2d().y2e().n();
      while (tmp0_iterator.b1()) {
        var element = tmp0_iterator.d1();
        // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
        var name = element.z6();
        var value = element.a7();
        setProperty(cssStyleRule.style, name, value);
      }
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = cssRuleDeclaration.r2d().z2e().n();
      while (tmp0_iterator_0.b1()) {
        var element_0 = tmp0_iterator_0.d1();
        // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
        var name_0 = element_0.z6();
        var value_0 = element_0.a7();
        setVariable(cssStyleRule.style, name_0, value_0);
      }
    } else {
      if (isInterface(cssRuleDeclaration, CSSGroupingRuleDeclaration)) {
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var cssGroupingRule = cssRule;
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator_1 = cssRuleDeclaration.g2e().n();
        while (tmp0_iterator_1.b1()) {
          var element_1 = tmp0_iterator_1.d1();
          // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
          addRule_1(cssGroupingRule, element_1);
        }
      } else {
        if (cssRuleDeclaration instanceof CSSKeyframesRuleDeclaration) {
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var cssGroupingRule_0 = cssRule;
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_iterator_2 = cssRuleDeclaration.u2d_1.n();
          while (tmp0_iterator_2.b1()) {
            var element_2 = tmp0_iterator_2.d1();
            // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
            addRule_2(cssGroupingRule_0, element_2);
          }
        }
      }
    }
  }
  function setProperty(style, name, value) {
    style.setProperty(name, toString_0(value));
  }
  function setVariable(style, name, value) {
    style.setProperty('--' + name, toString_0(value));
  }
  function addRule_1(_this__u8e3s4, cssRuleDeclaration) {
    var tmp0_safe_receiver = addRule_3(_this__u8e3s4, cssRuleDeclaration.s2d() + ' {}');
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      fillRule(cssRuleDeclaration, tmp0_safe_receiver);
    }
  }
  function addRule_2(_this__u8e3s4, cssRuleDeclaration) {
    var tmp0_safe_receiver = addRule_4(_this__u8e3s4, cssRuleDeclaration.s2d() + ' {}');
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      fillRule(cssRuleDeclaration, tmp0_safe_receiver);
    }
  }
  function addRule_3(_this__u8e3s4, cssRule) {
    var cssRuleIndex = _this__u8e3s4.insertRule(cssRule, _this__u8e3s4.cssRules.length);
    return _this__u8e3s4.cssRules.item(cssRuleIndex);
  }
  function addRule_4(_this__u8e3s4, cssRule) {
    // Inline function 'org.jetbrains.compose.web.css.appendRule' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.appendRule(cssRule);
    return _this__u8e3s4.cssRules.item(_this__u8e3s4.cssRules.length - 1 | 0);
  }
  function SyntheticAnimationEvent(nativeEvent, animationEventDetails) {
    SyntheticEvent.call(this, nativeEvent);
    this.o2h_1 = animationEventDetails.animationName;
    this.p2h_1 = animationEventDetails.elapsedTime;
    this.q2h_1 = animationEventDetails.pseudoElement;
    this.r2h_1 = 0;
  }
  function SyntheticEvent(nativeEvent) {
    this.s2h_1 = nativeEvent;
    var tmp = this;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.t2h_1 = this.s2h_1.target;
    this.u2h_1 = this.s2h_1.bubbles;
    this.v2h_1 = this.s2h_1.cancelable;
    this.w2h_1 = this.s2h_1.composed;
    this.x2h_1 = this.s2h_1.currentTarget;
    this.y2h_1 = this.s2h_1.eventPhase;
    this.z2h_1 = this.s2h_1.defaultPrevented;
    this.a2i_1 = this.s2h_1.timeStamp;
    this.b2i_1 = this.s2h_1.type;
    this.c2i_1 = this.s2h_1.isTrusted;
    this.d2i_1 = 0;
  }
  protoOf(SyntheticEvent).e2i = function () {
    return this.s2h_1.preventDefault();
  };
  protoOf(SyntheticEvent).f2i = function () {
    return this.s2h_1.stopPropagation();
  };
  function SyntheticMouseEvent(nativeEvent) {
    SyntheticEvent.call(this, nativeEvent);
    this.s2i_1 = nativeEvent;
    this.t2i_1 = nativeEvent.altKey;
    this.u2i_1 = nativeEvent.button;
    this.v2i_1 = nativeEvent.buttons;
    this.w2i_1 = nativeEvent.clientX;
    this.x2i_1 = nativeEvent.clientY;
    this.y2i_1 = nativeEvent.ctrlKey;
    this.z2i_1 = nativeEvent.metaKey;
    var tmp = this;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = nativeEvent.movementX;
    var tmp0_elvis_lhs = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : null;
    tmp.a2j_1 = tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
    var tmp_1 = this;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = nativeEvent.movementY;
    var tmp0_elvis_lhs_0 = (!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : null;
    tmp_1.b2j_1 = tmp0_elvis_lhs_0 == null ? 0 : tmp0_elvis_lhs_0;
    this.c2j_1 = nativeEvent.offsetX;
    this.d2j_1 = nativeEvent.offsetY;
    this.e2j_1 = nativeEvent.pageX;
    this.f2j_1 = nativeEvent.pageY;
    this.g2j_1 = nativeEvent.region;
    this.h2j_1 = nativeEvent.relatedTarget;
    this.i2j_1 = nativeEvent.screenX;
    this.j2j_1 = nativeEvent.screenY;
    this.k2j_1 = nativeEvent.shiftKey;
    this.l2j_1 = nativeEvent.x;
    this.m2j_1 = nativeEvent.y;
    this.n2j_1 = 0;
  }
  //region block: post-declaration
  protoOf(AttrsScopeBuilder).f2c = id;
  protoOf(AttrsScopeBuilder).g2c = tabIndex;
  protoOf(EventsListenerScopeBuilder).i2c = onClick;
  protoOf(EventsListenerScopeBuilder).j2c = onAnimationEnd;
  protoOf(StyleScopeBuilder).q2e = property;
  protoOf(StyleScopeBuilder).r2e = property_0;
  protoOf(StyleScopeBuilder).w2e = variable;
  defineProp(protoOf(CSSUnitValueTyped), 'value', function () {
    return this.o2();
  });
  defineProp(protoOf(CSSUnitValueTyped), 'unit', function () {
    return this.d2f();
  });
  protoOf(StyleSheet).r2f = style_0;
  protoOf(StyleSheet).t2f = style;
  protoOf(StyleSheet).u2f = invoke;
  protoOf(StyleSheet).returnUniversalSelector = returnUniversalSelector;
  protoOf(StyleSheet).returnHoverSelector = returnHoverSelector;
  protoOf(StyleSheet).v2f = get_hover;
  protoOf(CSSRulesHolderState).p2f = add;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  Companion_instance_2 = new Companion_2();
  Companion_instance_3 = new Companion_3();
  Companion_instance_4 = new Companion_4();
  Companion_instance_5 = new Companion_5();
  Companion_instance_6 = new Companion_6();
  Companion_instance_7 = new Companion_7();
  Companion_instance_8 = new Companion_8();
  Companion_instance_9 = new Companion_9();
  Color_instance = new Color();
  Companion_instance_10 = new Companion_10();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ButtonType_Button_getInstance;
  _.$_$.b = StyleSheet_init_$Init$;
  _.$_$.c = Companion_instance_5;
  _.$_$.d = Companion_instance_6;
  _.$_$.e = Companion_instance_3;
  _.$_$.f = Companion_instance_4;
  _.$_$.g = Companion_instance_2;
  _.$_$.h = From_getInstance;
  _.$_$.i = To_getInstance;
  _.$_$.j = Color_instance;
  _.$_$.k = Companion_instance;
  _.$_$.l = Companion_instance_7;
  _.$_$.m = Companion_instance_8;
  _.$_$.n = Companion_instance_0;
  _.$_$.o = Companion_instance_1;
  _.$_$.p = classes;
  _.$_$.q = id;
  _.$_$.r = tabIndex;
  _.$_$.s = AttrsScope;
  _.$_$.t = onAnimationEnd;
  _.$_$.u = onClick;
  _.$_$.v = type;
  _.$_$.w = CSSBorder;
  _.$_$.x = CSSKeyframeRuleDeclaration;
  _.$_$.y = CSSKeyframesRuleDeclaration;
  _.$_$.z = MediaFeature;
  _.$_$.a1 = Raw;
  _.$_$.b1 = Color_0;
  _.$_$.c1 = property;
  _.$_$.d1 = property_0;
  _.$_$.e1 = variable;
  _.$_$.f1 = StyleScopeBuilder;
  _.$_$.g1 = StyleScope;
  _.$_$.h1 = StyleSheet;
  _.$_$.i1 = alignItems;
  _.$_$.j1 = alignSelf;
  _.$_$.k1 = backgroundColor;
  _.$_$.l1 = borderRadius_0;
  _.$_$.m1 = borderRadius;
  _.$_$.n1 = borderRadius_1;
  _.$_$.o1 = border;
  _.$_$.p1 = bottom;
  _.$_$.q1 = boxSizing;
  _.$_$.r1 = color;
  _.$_$.s1 = color_0;
  _.$_$.t1 = get_cssRem;
  _.$_$.u1 = display;
  _.$_$.v1 = get_em;
  _.$_$.w1 = flexDirection;
  _.$_$.x1 = flexGrow;
  _.$_$.y1 = fontFamily;
  _.$_$.z1 = fontSize;
  _.$_$.a2 = fontWeight;
  _.$_$.b2 = get_fr;
  _.$_$.c2 = gap;
  _.$_$.d2 = gridArea;
  _.$_$.e2 = gridAutoColumns;
  _.$_$.f2 = gridAutoRows;
  _.$_$.g2 = gridRow;
  _.$_$.h2 = gridTemplateColumns;
  _.$_$.i2 = gridTemplateRows;
  _.$_$.j2 = height;
  _.$_$.k2 = justifyContent;
  _.$_$.l2 = left;
  _.$_$.m2 = lineHeight;
  _.$_$.n2 = margin;
  _.$_$.o2 = maxWidth;
  _.$_$.p2 = media;
  _.$_$.q2 = minHeight;
  _.$_$.r2 = minWidth;
  _.$_$.s2 = get_ms;
  _.$_$.t2 = opacity;
  _.$_$.u2 = padding;
  _.$_$.v2 = get_percent;
  _.$_$.w2 = position;
  _.$_$.x2 = get_px;
  _.$_$.y2 = right;
  _.$_$.z2 = style_1;
  _.$_$.a3 = top;
  _.$_$.b3 = unaryMinus;
  _.$_$.c3 = get_vh;
  _.$_$.d3 = width_0;
  _.$_$.e3 = width;
  _.$_$.f3 = A_0;
  _.$_$.g3 = Button_0;
  _.$_$.h3 = Code_0;
  _.$_$.i3 = Div_0;
  _.$_$.j3 = ElementBuilder;
  _.$_$.k3 = Em_0;
  _.$_$.l3 = H1_0;
  _.$_$.m3 = H2_0;
  _.$_$.n3 = H3_0;
  _.$_$.o3 = H4_0;
  _.$_$.p3 = Hr_0;
  _.$_$.q3 = Img_0;
  _.$_$.r3 = Li_0;
  _.$_$.s3 = Pre_0;
  _.$_$.t3 = P_0;
  _.$_$.u3 = Span_0;
  _.$_$.v3 = Style_0;
  _.$_$.w3 = TagElement;
  _.$_$.x3 = Text_0;
  _.$_$.y3 = Ul_0;
  //endregion
  return _;
}));

//# sourceMappingURL=html-html-core.js.map
