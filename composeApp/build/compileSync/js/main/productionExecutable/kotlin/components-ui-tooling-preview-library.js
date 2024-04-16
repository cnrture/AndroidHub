(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['components-ui-tooling-preview-library'] = factory(typeof this['components-ui-tooling-preview-library'] === 'undefined' ? {} : this['components-ui-tooling-preview-library']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=components-ui-tooling-preview-library.js.map
