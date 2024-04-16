(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'components-ui-tooling-preview-library'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'components-ui-tooling-preview-library'.");
    }
    root['components-ui-tooling-preview-library'] = factory(typeof this['components-ui-tooling-preview-library'] === 'undefined' ? {} : this['components-ui-tooling-preview-library'], this['kotlin-kotlin-stdlib']);
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
  //endregion
  //region block: pre-declaration
  setMetadataFor(Preview, 'Preview', classMeta, VOID, [Annotation]);
  //endregion
  function Preview() {
  }
  protoOf(Preview).equals = function (other) {
    if (!(other instanceof Preview))
      return false;
    other instanceof Preview || THROW_CCE();
    return true;
  };
  protoOf(Preview).hashCode = function () {
    return 0;
  };
  protoOf(Preview).toString = function () {
    return '@org.jetbrains.compose.ui.tooling.preview.Preview()';
  };
  return _;
}));

//# sourceMappingURL=components-ui-tooling-preview-library.js.map
