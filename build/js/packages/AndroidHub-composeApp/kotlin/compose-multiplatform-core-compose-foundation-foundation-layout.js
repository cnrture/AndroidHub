(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['compose-multiplatform-core-compose-foundation-foundation-layout'] = factory(typeof this['compose-multiplatform-core-compose-foundation-foundation-layout'] === 'undefined' ? {} : this['compose-multiplatform-core-compose-foundation-foundation-layout']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-foundation-foundation-layout.js.map
