(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-browser-ext'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-browser-ext'.");
    }
    if (typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-browser-ext'. Its dependency 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' was not found. Please, check whether 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' is loaded prior to 'kobweb-frontend-browser-ext'.");
    }
    root['kobweb-frontend-browser-ext'] = factory(typeof this['kobweb-frontend-browser-ext'] === 'undefined' ? {} : this['kobweb-frontend-browser-ext'], this['kotlin-kotlin-stdlib'], kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.m6;
  var classMeta = kotlin_kotlin.$_$.q5;
  var setMetadataFor = kotlin_kotlin.$_$.n6;
  var VOID = kotlin_kotlin.$_$.d;
  var objectMeta = kotlin_kotlin.$_$.l6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h;
  var Unit_instance = kotlin_kotlin.$_$.g2;
  var objectCreate = kotlin_kotlin.$_$.k6;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.p;
  var EventListener = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.d;
  var KProperty1 = kotlin_kotlin.$_$.y6;
  var getPropertyCallableRef = kotlin_kotlin.$_$.x5;
  var lazy = kotlin_kotlin.$_$.g9;
  var decapitalize = kotlin_kotlin.$_$.e7;
  var split = kotlin_kotlin.$_$.w7;
  var joinToString = kotlin_kotlin.$_$.o3;
  var isBlank = kotlin_kotlin.$_$.k7;
  var toString = kotlin_kotlin.$_$.p6;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.x;
  var charSequenceLength = kotlin_kotlin.$_$.p5;
  var charSequenceGet = kotlin_kotlin.$_$.o5;
  var isUpperCase = kotlin_kotlin.$_$.m7;
  var Char = kotlin_kotlin.$_$.o8;
  var isLowerCase = kotlin_kotlin.$_$.l7;
  var get_lastIndex = kotlin_kotlin.$_$.o7;
  var toString_0 = kotlin_kotlin.$_$.u1;
  var capitalize = kotlin_kotlin.$_$.b7;
  var _Duration___get_inWholeMilliseconds__impl__msfiry = kotlin_kotlin.$_$.r1;
  var Companion_getInstance = kotlin_kotlin.$_$.d2;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.e;
  var toDuration = kotlin_kotlin.$_$.n8;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ElementTarget$Companion$PreviousSibling$1, VOID, classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(Size, 'Size', classMeta);
  setMetadataFor(Entry, 'Entry', classMeta);
  setMetadataFor(ResizeObserver_0, 'ResizeObserver', classMeta);
  setMetadataFor(EventListenerManager, 'EventListenerManager', classMeta);
  setMetadataFor(HttpFetcher, 'HttpFetcher', classMeta, VOID, VOID, VOID, VOID, VOID, [3, 4]);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(CancellableActionHandle, 'CancellableActionHandle', classMeta);
  //endregion
  function ElementTarget$Companion$PreviousSibling$1() {
  }
  protoOf(ElementTarget$Companion$PreviousSibling$1).b17 = function (startingFrom) {
    var tmp = startingFrom.previousElementSibling;
    return tmp instanceof HTMLElement ? tmp : null;
  };
  function Companion() {
  }
  protoOf(Companion).c17 = function () {
    return new ElementTarget$Companion$PreviousSibling$1();
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    return Companion_instance;
  }
  function Companion_0() {
  }
  protoOf(Companion_0).d17 = function (actualSize) {
    return new Size(actualSize.blockSize, actualSize.inlineSize);
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    return Companion_instance_0;
  }
  function Companion_1() {
  }
  protoOf(Companion_1).e17 = function (actualEntry) {
    var tmp = actualEntry.target;
    // Inline function 'kotlin.collections.map' call
    var this_0 = actualEntry.borderBoxSize;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(this_0.length);
    var inductionVariable = 0;
    var last = this_0.length;
    while (inductionVariable < last) {
      var item = this_0[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.varabyte.kobweb.browser.dom.observers.Companion.from.<anonymous>' call
      var tmp$ret$0 = Companion_instance_0.d17(item);
      destination.u(tmp$ret$0);
    }
    var tmp_0 = destination;
    // Inline function 'kotlin.collections.map' call
    var this_1 = actualEntry.contentBoxSize;
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(this_1.length);
    var inductionVariable_0 = 0;
    var last_0 = this_1.length;
    while (inductionVariable_0 < last_0) {
      var item_0 = this_1[inductionVariable_0];
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      // Inline function 'com.varabyte.kobweb.browser.dom.observers.Companion.from.<anonymous>' call
      var tmp$ret$3 = Companion_instance_0.d17(item_0);
      destination_0.u(tmp$ret$3);
    }
    var tmp_1 = destination_0;
    var tmp_2 = actualEntry.contentRect;
    // Inline function 'kotlin.collections.map' call
    var this_2 = actualEntry.devicePixelContentBoxSize;
    // Inline function 'kotlin.collections.mapTo' call
    var destination_1 = ArrayList_init_$Create$(this_2.length);
    var inductionVariable_1 = 0;
    var last_1 = this_2.length;
    while (inductionVariable_1 < last_1) {
      var item_1 = this_2[inductionVariable_1];
      inductionVariable_1 = inductionVariable_1 + 1 | 0;
      // Inline function 'com.varabyte.kobweb.browser.dom.observers.Companion.from.<anonymous>' call
      var tmp$ret$6 = Companion_instance_0.d17(item_1);
      destination_1.u(tmp$ret$6);
    }
    return new Entry(tmp, tmp_0, tmp_1, tmp_2, destination_1);
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    return Companion_instance_1;
  }
  function ResizeObserver_init_$Init$(resized, $this) {
    ResizeObserver_0.call($this, ResizeObserver$_init_$lambda_4ha6n5(resized));
    return $this;
  }
  function ResizeObserver_init_$Create$(resized) {
    return ResizeObserver_init_$Init$(resized, objectCreate(protoOf(ResizeObserver_0)));
  }
  function Size(blockSize, inlineSize) {
    this.f17_1 = blockSize;
    this.g17_1 = inlineSize;
  }
  function Entry(target, borderBoxSize, contentBoxSize, contentRect, devicePixelContentBoxSize) {
    this.h17_1 = target;
    this.i17_1 = borderBoxSize;
    this.j17_1 = contentBoxSize;
    this.k17_1 = contentRect;
    this.l17_1 = devicePixelContentBoxSize;
  }
  function ResizeObserver$_init_$lambda_4ha6n5($resized) {
    return function (entries, _anonymous_parameter_1__qggqgd) {
      $resized(entries);
      return Unit_instance;
    };
  }
  function ResizeObserver$_actualObserver$lambda($resized, this$0) {
    return function (actualEntries, _anonymous_parameter_1__qggqgd) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(actualEntries.length);
      var inductionVariable = 0;
      var last = actualEntries.length;
      while (inductionVariable < last) {
        var item = actualEntries[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'com.varabyte.kobweb.browser.dom.observers.ResizeObserver._actualObserver.<anonymous>.<anonymous>' call
        var tmp$ret$0 = Companion_instance_1.e17(item);
        destination.u(tmp$ret$0);
      }
      $resized(destination, this$0);
      return Unit_instance;
    };
  }
  function ResizeObserver_0(resized) {
    var tmp = this;
    tmp.m17_1 = new ResizeObserver(ResizeObserver$_actualObserver$lambda(resized, this));
  }
  protoOf(ResizeObserver_0).n17 = function (element) {
    return this.m17_1.observe(element);
  };
  protoOf(ResizeObserver_0).o17 = function () {
    return this.m17_1.disconnect();
  };
  function EventListenerManager(element) {
    this.p17_1 = element;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.q17_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(EventListenerManager).r17 = function (type, listener) {
    // Inline function 'kotlin.collections.set' call
    this.q17_1.g2(type, listener);
    this.p17_1.addEventListener(type, listener);
  };
  protoOf(EventListenerManager).s17 = function (type, listener) {
    this.r17(type, EventListener(listener));
  };
  protoOf(EventListenerManager).t17 = function () {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.q17_1.f2().k();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.browser.events.EventListenerManager.clearAllListeners.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var type = element.i2();
      // Inline function 'kotlin.collections.component2' call
      var listener = element.j2();
      this.p17_1.removeEventListener(type, listener);
    }
    this.q17_1.b1();
  };
  function get_http(_this__u8e3s4) {
    _init_properties_HttpFetcher_kt__6mmkul();
    // Inline function 'kotlin.getValue' call
    var this_0 = http$delegate;
    http$factory();
    return this_0.j2();
  }
  var http$delegate;
  function HttpFetcher(window_0) {
    this.u17_1 = window_0;
    this.v17_1 = false;
  }
  function http$delegate$lambda() {
    _init_properties_HttpFetcher_kt__6mmkul();
    return new HttpFetcher(window);
  }
  function http$factory() {
    return getPropertyCallableRef('http', 1, KProperty1, function (receiver) {
      return get_http(receiver);
    }, null);
  }
  var properties_initialized_HttpFetcher_kt_uxns7j;
  function _init_properties_HttpFetcher_kt__6mmkul() {
    if (!properties_initialized_HttpFetcher_kt_uxns7j) {
      properties_initialized_HttpFetcher_kt_uxns7j = true;
      http$delegate = lazy(http$delegate$lambda);
    }
  }
  function kebabCaseToCamelCase(_this__u8e3s4) {
    return decapitalize(kebabCaseToTitleCamelCase(_this__u8e3s4));
  }
  function kebabCaseToTitleCamelCase(_this__u8e3s4) {
    var tmp = split(_this__u8e3s4, ['-']);
    return joinToString(tmp, '', VOID, VOID, VOID, VOID, kebabCaseToTitleCamelCase$lambda);
  }
  function titleCamelCaseToKebabCase(_this__u8e3s4) {
    return camelCaseToKebabCase(_this__u8e3s4);
  }
  function camelCaseToKebabCase(_this__u8e3s4) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isBlank(_this__u8e3s4)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var lastIsUpper = false;
    var str = _this__u8e3s4;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.browser.util.camelCaseToKebabCase.<anonymous>' call
    // Inline function 'kotlin.text.forEachIndexed' call
    var index = 0;
    var inductionVariable = 0;
    while (inductionVariable < charSequenceLength(str)) {
      var item = charSequenceGet(str, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.varabyte.kobweb.browser.util.camelCaseToKebabCase.<anonymous>.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var isUpper = isUpperCase(item);
      var tmp;
      if (isUpper) {
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(this_0) > 0) {
          if (!lastIsUpper ? true : tmp1 < get_lastIndex(str) ? isLowerCase(charSequenceGet(str, tmp1 + 1 | 0)) : false) {
            this_0.q5('-');
          }
        }
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = toString_0(item).toLowerCase();
      } else {
        tmp = new Char(item);
      }
      var cFinal = tmp;
      this_0.p5(cFinal);
      lastIsUpper = isUpper;
    }
    return this_0.toString();
  }
  function kebabCaseToTitleCamelCase$lambda(it) {
    return capitalize(it);
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.w17_1 = new CancellableActionHandle(0);
  }
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function CancellableActionHandle(id, isInterval) {
    Companion_getInstance_3();
    isInterval = isInterval === VOID ? false : isInterval;
    this.x17_1 = isInterval;
    this.y17_1 = id;
  }
  protoOf(CancellableActionHandle).z17 = function () {
    if (this.x17_1) {
      self.clearInterval(this.y17_1);
    } else {
      self.clearTimeout(this.y17_1);
    }
    this.y17_1 = 0;
  };
  function setInterval(_this__u8e3s4, delay, block) {
    var id = _this__u8e3s4.setInterval(block, _Duration___get_inWholeMilliseconds__impl__msfiry(delay).rb());
    return new CancellableActionHandle(id, true);
  }
  function invokeLater(_this__u8e3s4, block) {
    // Inline function 'kotlin.time.Companion.milliseconds' call
    Companion_getInstance();
    var tmp$ret$0 = toDuration(0, DurationUnit_MILLISECONDS_getInstance());
    return setTimeout(_this__u8e3s4, tmp$ret$0, block);
  }
  function setTimeout(_this__u8e3s4, timeout, block) {
    var id = _this__u8e3s4.setTimeout(block, _Duration___get_inWholeMilliseconds__impl__msfiry(timeout).rb());
    return new CancellableActionHandle(id);
  }
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = EventListenerManager;
  _.$_$.b = get_http;
  _.$_$.c = invokeLater;
  _.$_$.d = kebabCaseToCamelCase;
  _.$_$.e = kebabCaseToTitleCamelCase;
  _.$_$.f = setInterval;
  _.$_$.g = titleCamelCaseToKebabCase;
  _.$_$.h = ResizeObserver_init_$Create$;
  _.$_$.i = Companion_instance;
  _.$_$.j = Companion_getInstance_3;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-browser-ext.js.map
