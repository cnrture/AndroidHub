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
  var protoOf = kotlin_kotlin.$_$.ic;
  var classMeta = kotlin_kotlin.$_$.xa;
  var setMetadataFor = kotlin_kotlin.$_$.jc;
  var VOID = kotlin_kotlin.$_$.g;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ThreadLocalRef, 'ThreadLocalRef', classMeta, VOID, VOID, ThreadLocalRef);
  //endregion
  function set_value(_this__u8e3s4, value) {
    _this__u8e3s4.p1z(value);
  }
  function ThreadLocalRef() {
    this.i78_1 = null;
  }
  protoOf(ThreadLocalRef).e1 = function () {
    set_value(this, null);
  };
  protoOf(ThreadLocalRef).hw = function () {
    return this.i78_1;
  };
  protoOf(ThreadLocalRef).p1z = function (value) {
    this.i78_1 = value;
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ThreadLocalRef;
  //endregion
  return _;
}));

//# sourceMappingURL=Stately-stately-concurrency.js.map
