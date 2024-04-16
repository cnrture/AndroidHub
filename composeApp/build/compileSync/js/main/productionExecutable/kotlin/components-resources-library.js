(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['components-resources-library'] = factory(typeof this['components-resources-library'] === 'undefined' ? {} : this['components-resources-library']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=components-resources-library.js.map
