(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'Stately-stately-concurrency'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'Stately-stately-concurrency'.");
    }
    root['Stately-stately-concurrency'] = factory(typeof this['Stately-stately-concurrency'] === 'undefined' ? {} : this['Stately-stately-concurrency'], this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.bf;
  var classMeta = kotlin_kotlin.$_$.pd;
  var setMetadataFor = kotlin_kotlin.$_$.cf;
  var VOID = kotlin_kotlin.$_$.g;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ThreadLocalRef, 'ThreadLocalRef', classMeta, VOID, VOID, ThreadLocalRef);
  //endregion
  function set_value(_this__u8e3s4, value) {
    _this__u8e3s4.set_bjwkek_k$(value);
  }
  function get_value(_this__u8e3s4) {
    return _this__u8e3s4.get_26vq_k$();
  }
  function _set_localValue__8fhs41($this, _set____db54di) {
    $this.localValue_1 = _set____db54di;
  }
  function _get_localValue__6mqt17($this) {
    return $this.localValue_1;
  }
  function ThreadLocalRef() {
    this.localValue_1 = null;
  }
  protoOf(ThreadLocalRef).remove_ldkf9o_k$ = function () {
    set_value(this, null);
  };
  protoOf(ThreadLocalRef).get_26vq_k$ = function () {
    return this.localValue_1;
  };
  protoOf(ThreadLocalRef).set_bjwkek_k$ = function (value) {
    this.localValue_1 = value;
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ThreadLocalRef;
  //endregion
  return _;
}));
