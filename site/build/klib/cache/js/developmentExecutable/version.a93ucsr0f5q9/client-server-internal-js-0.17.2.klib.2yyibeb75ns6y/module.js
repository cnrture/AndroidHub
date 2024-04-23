(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-common-client-server-internal'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-common-client-server-internal'.");
    }
    root['kobweb-common-client-server-internal'] = factory(typeof this['kobweb-common-client-server-internal'] === 'undefined' ? {} : this['kobweb-common-client-server-internal'], this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Regex_init_$Create$ = kotlin_kotlin.$_$.e1;
  var protoOf = kotlin_kotlin.$_$.fc;
  var objectCreate = kotlin_kotlin.$_$.dc;
  var get_lastIndex = kotlin_kotlin.$_$.v7;
  var replace = kotlin_kotlin.$_$.ge;
  var classMeta = kotlin_kotlin.$_$.ua;
  var setMetadataFor = kotlin_kotlin.$_$.gc;
  //endregion
  //region block: pre-declaration
  setMetadataFor(PatternMapper, 'PatternMapper', classMeta);
  //endregion
  function PatternMapper_init_$Init$(pattern, target, $this) {
    PatternMapper.call($this, Regex_init_$Create$(pattern), target);
    return $this;
  }
  function PatternMapper_init_$Create$(pattern, target) {
    return PatternMapper_init_$Init$(pattern, target, objectCreate(protoOf(PatternMapper)));
  }
  function PatternMapper(pattern, target) {
    this.pattern_1 = pattern;
    this.target_1 = target;
  }
  protoOf(PatternMapper).get_pattern_btfv4p_k$ = function () {
    return this.pattern_1;
  };
  protoOf(PatternMapper).get_target_juba8q_k$ = function () {
    return this.target_1;
  };
  protoOf(PatternMapper).map_epzkwu_k$ = function (text) {
    var tmp0_safe_receiver = this.pattern_1.matchEntire_6100vb_k$(text);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var final = this.target_1;
      var inductionVariable = get_lastIndex(tmp0_safe_receiver.get_groupValues_rkv314_k$());
      if (0 <= inductionVariable)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          final = replace(final, '$' + i, tmp0_safe_receiver.get_groupValues_rkv314_k$().get_c1px32_k$(i));
        }
         while (0 <= inductionVariable);
      return final;
    }
    return tmp;
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = PatternMapper_init_$Create$;
  //endregion
  return _;
}));
