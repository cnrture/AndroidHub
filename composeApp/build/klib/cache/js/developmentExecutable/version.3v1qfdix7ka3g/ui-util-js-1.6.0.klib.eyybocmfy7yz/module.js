(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-util'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-util'.");
    }
    root['compose-multiplatform-core-compose-ui-ui-util'] = factory(typeof this['compose-multiplatform-core-compose-ui-ui-util'] === 'undefined' ? {} : this['compose-multiplatform-core-compose-ui-ui-util'], this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.bf;
  var THROW_CCE = kotlin_kotlin.$_$.vj;
  var Annotation = kotlin_kotlin.$_$.bj;
  var classMeta = kotlin_kotlin.$_$.pd;
  var setMetadataFor = kotlin_kotlin.$_$.cf;
  var VOID = kotlin_kotlin.$_$.g;
  var Long = kotlin_kotlin.$_$.oj;
  var toLong = kotlin_kotlin.$_$.ef;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.f5;
  var floatFromBits = kotlin_kotlin.$_$.wd;
  var toRawBits = kotlin_kotlin.$_$.il;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.o;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.l1;
  var Unit_getInstance = kotlin_kotlin.$_$.u5;
  var get_lastIndex = kotlin_kotlin.$_$.w9;
  var compareTo = kotlin_kotlin.$_$.qd;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.o2;
  var toString = kotlin_kotlin.$_$.kl;
  var Char = kotlin_kotlin.$_$.dj;
  var isCharSequence = kotlin_kotlin.$_$.ke;
  var addAll = kotlin_kotlin.$_$.a7;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.v;
  var roundToInt = kotlin_kotlin.$_$.lf;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ExperimentalComposeUiApi, 'ExperimentalComposeUiApi', classMeta, VOID, [Annotation]);
  setMetadataFor(InternalComposeUiApi, 'InternalComposeUiApi', classMeta, VOID, [Annotation]);
  //endregion
  function ExperimentalComposeUiApi() {
  }
  protoOf(ExperimentalComposeUiApi).equals = function (other) {
    if (!(other instanceof ExperimentalComposeUiApi))
      return false;
    other instanceof ExperimentalComposeUiApi || THROW_CCE();
    return true;
  };
  protoOf(ExperimentalComposeUiApi).hashCode = function () {
    return 0;
  };
  protoOf(ExperimentalComposeUiApi).toString = function () {
    return '@androidx.compose.ui.ExperimentalComposeUiApi()';
  };
  function InternalComposeUiApi() {
  }
  protoOf(InternalComposeUiApi).equals = function (other) {
    if (!(other instanceof InternalComposeUiApi))
      return false;
    other instanceof InternalComposeUiApi || THROW_CCE();
    return true;
  };
  protoOf(InternalComposeUiApi).hashCode = function () {
    return 0;
  };
  protoOf(InternalComposeUiApi).toString = function () {
    return '@androidx.compose.ui.InternalComposeUiApi()';
  };
  function unpackInt1(value) {
    return value.shr_9fl3wl_k$(32).toInt_1tsl84_k$();
  }
  function unpackInt2(value) {
    return value.and_4spn93_k$(new Long(-1, 0)).toInt_1tsl84_k$();
  }
  function packInts(val1, val2) {
    return toLong(val1).shl_bg8if3_k$(32).or_v7fvkl_k$(toLong(val2).and_4spn93_k$(new Long(-1, 0)));
  }
  function unpackFloat1(value) {
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var bits = value.shr_9fl3wl_k$(32).toInt_1tsl84_k$();
    return floatFromBits(bits);
  }
  function unpackFloat2(value) {
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var bits = value.and_4spn93_k$(new Long(-1, 0)).toInt_1tsl84_k$();
    return floatFromBits(bits);
  }
  function packFloats(val1, val2) {
    var v1 = toLong(toRawBits(val1));
    var v2 = toLong(toRawBits(val2));
    return v1.shl_bg8if3_k$(32).or_v7fvkl_k$(v2.and_4spn93_k$(new Long(-1, 0)));
  }
  function fastForEach(_this__u8e3s4, action) {
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index);
        action(item);
      }
       while (inductionVariable <= last);
  }
  function fastFilter(_this__u8e3s4, predicate) {
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(_this__u8e3s4.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index);
        // Inline function 'androidx.compose.ui.util.fastFilter.<anonymous>' call
        if (predicate(item)) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.add_utx5q5_k$(item);
        }
      }
       while (inductionVariable <= last);
    return target;
  }
  function fastAny(_this__u8e3s4, predicate) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index);
        // Inline function 'androidx.compose.ui.util.fastAny.<anonymous>' call
        if (predicate(item))
          return true;
      }
       while (inductionVariable <= last);
    return false;
  }
  function fastMap(_this__u8e3s4, transform) {
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(_this__u8e3s4.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        var element = transform(item);
        target.add_utx5q5_k$(element);
      }
       while (inductionVariable <= last);
    return target;
  }
  function fastFold(_this__u8e3s4, initial, operation) {
    // Inline function 'kotlin.contracts.contract' call
    var accumulator = initial;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index);
        // Inline function 'androidx.compose.ui.util.fastFold.<anonymous>' call
        accumulator = operation(accumulator, item);
      }
       while (inductionVariable <= last);
    return accumulator;
  }
  function fastJoinToString(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return fastJoinTo(_this__u8e3s4, StringBuilder_init_$Create$(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function fastAll(_this__u8e3s4, predicate) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index);
        // Inline function 'androidx.compose.ui.util.fastAll.<anonymous>' call
        if (!predicate(item))
          return false;
      }
       while (inductionVariable <= last);
    return true;
  }
  function fastMapNotNull(_this__u8e3s4, transform) {
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(_this__u8e3s4.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index);
        // Inline function 'androidx.compose.ui.util.fastMapNotNull.<anonymous>' call
        var tmp0_safe_receiver = transform(item);
        if (tmp0_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          target.add_utx5q5_k$(tmp0_safe_receiver);
        }
      }
       while (inductionVariable <= last);
    return target;
  }
  function fastForEachIndexed(_this__u8e3s4, action) {
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index);
        action(index, item);
      }
       while (inductionVariable <= last);
  }
  function fastMaxOfOrNull(_this__u8e3s4, selector) {
    // Inline function 'kotlin.contracts.contract' call
    if (_this__u8e3s4.isEmpty_y1axqb_k$())
      return null;
    var maxValue = selector(_this__u8e3s4.get_c1px32_k$(0));
    var inductionVariable = 1;
    var last = get_lastIndex(_this__u8e3s4);
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var v = selector(_this__u8e3s4.get_c1px32_k$(i));
        if (compareTo(v, maxValue) > 0)
          maxValue = v;
      }
       while (!(i === last));
    return maxValue;
  }
  function fastFirstOrNull(_this__u8e3s4, predicate) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index);
        // Inline function 'androidx.compose.ui.util.fastFirstOrNull.<anonymous>' call
        if (predicate(item))
          return item;
      }
       while (inductionVariable <= last);
    return null;
  }
  function fastSumBy(_this__u8e3s4, selector) {
    // Inline function 'kotlin.contracts.contract' call
    var sum = 0;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index);
        // Inline function 'androidx.compose.ui.util.fastSumBy.<anonymous>' call
        sum = sum + selector(item) | 0;
      }
       while (inductionVariable <= last);
    return sum;
  }
  function fastFirst(_this__u8e3s4, predicate) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index);
        // Inline function 'androidx.compose.ui.util.fastFirst.<anonymous>' call
        if (predicate(item))
          return item;
      }
       while (inductionVariable <= last);
    throw NoSuchElementException_init_$Create$('Collection contains no element matching the predicate.');
  }
  function fastJoinTo(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    buffer.append_jgojdo_k$(prefix);
    var count = 0;
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = _this__u8e3s4.get_c1px32_k$(index);
        count = count + 1 | 0;
        if (count > 1) {
          buffer.append_jgojdo_k$(separator);
        }
        if (limit < 0 ? true : count <= limit) {
          appendElement(buffer, element, transform);
        } else
          break $l$loop;
      }
       while (inductionVariable <= last);
    if (limit >= 0 ? count > limit : false) {
      buffer.append_jgojdo_k$(truncated);
    }
    buffer.append_jgojdo_k$(postfix);
    return buffer;
  }
  function appendElement(_this__u8e3s4, element, transform) {
    if (!(transform == null)) {
      _this__u8e3s4.append_jgojdo_k$(transform(element));
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this__u8e3s4.append_jgojdo_k$(element);
      } else {
        if (element instanceof Char) {
          _this__u8e3s4.append_am5a4z_k$(element.value_1);
        } else {
          _this__u8e3s4.append_jgojdo_k$(toString(element));
        }
      }
    }
  }
  function fastFlatMap(_this__u8e3s4, transform) {
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(_this__u8e3s4.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index);
        // Inline function 'androidx.compose.ui.util.fastFlatMap.<anonymous>' call
        var list = transform(item);
        addAll(target, list);
      }
       while (inductionVariable <= last);
    return target;
  }
  function fastMaxBy(_this__u8e3s4, selector) {
    // Inline function 'kotlin.contracts.contract' call
    if (_this__u8e3s4.isEmpty_y1axqb_k$())
      return null;
    var maxElem = _this__u8e3s4.get_c1px32_k$(0);
    var maxValue = selector(maxElem);
    var inductionVariable = 1;
    var last = get_lastIndex(_this__u8e3s4);
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var e = _this__u8e3s4.get_c1px32_k$(i);
        var v = selector(e);
        if (compareTo(maxValue, v) < 0) {
          maxElem = e;
          maxValue = v;
        }
      }
       while (!(i === last));
    return maxElem;
  }
  function fastDistinctBy(_this__u8e3s4, selector) {
    // Inline function 'kotlin.contracts.contract' call
    var set = HashSet_init_$Create$(_this__u8e3s4.get_size_woubt6_k$());
    var target = ArrayList_init_$Create$(_this__u8e3s4.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index);
        // Inline function 'androidx.compose.ui.util.fastDistinctBy.<anonymous>' call
        var key = selector(item);
        if (set.add_utx5q5_k$(key)) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.add_utx5q5_k$(item);
        }
      }
       while (inductionVariable <= last);
    return target;
  }
  function fastForEachReversed(_this__u8e3s4, action) {
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (0 <= inductionVariable)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index);
        action(item);
      }
       while (0 <= inductionVariable);
  }
  function lerp(start, stop, fraction) {
    return (1 - fraction) * start + fraction * stop;
  }
  function lerp_0(start, stop, fraction) {
    return start + roundToInt((stop - start | 0) * fraction) | 0;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = fastJoinToString;
  _.$_$.b = lerp;
  _.$_$.c = lerp_0;
  //endregion
  return _;
}));
