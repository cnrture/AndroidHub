(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat'.");
    }
    root.kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat = factory(typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined' ? {} : kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.bf;
  var classMeta = kotlin_kotlin.$_$.pd;
  var setMetadataFor = kotlin_kotlin.$_$.cf;
  //endregion
  //region block: pre-declaration
  setMetadataFor(EventListenerHandler, 'EventListenerHandler', classMeta);
  //endregion
  function EventListener(handler) {
    return new EventListenerHandler(handler);
  }
  function _get_handler__z70553($this) {
    return $this.handler_1;
  }
  function EventListenerHandler(handler) {
    this.handler_1 = handler;
  }
  protoOf(EventListenerHandler).handleEvent_zcjn50_k$ = function (event) {
    this.handler_1(event);
  };
  protoOf(EventListenerHandler).handleEvent = function (event) {
    return this.handleEvent_zcjn50_k$(event);
  };
  protoOf(EventListenerHandler).toString = function () {
    return 'EventListenerHandler(' + this.handler_1 + ')';
  };
  function set(_this__u8e3s4, index, value) {
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4[index] = value;
  }
  function set_0(_this__u8e3s4, index, value) {
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4[index] = value;
  }
  function get(_this__u8e3s4, index) {
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4[index];
  }
  function get_ARRAYBUFFER(_this__u8e3s4) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'arraybuffer';
  }
  function get_FOLLOW(_this__u8e3s4) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'follow';
  }
  function get_MANUAL(_this__u8e3s4) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'manual';
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = EventListener;
  //endregion
  return _;
}));
