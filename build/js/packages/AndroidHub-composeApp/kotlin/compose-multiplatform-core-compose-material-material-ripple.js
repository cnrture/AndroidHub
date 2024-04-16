(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['compose-multiplatform-core-compose-material-material-ripple'] = factory(typeof this['compose-multiplatform-core-compose-material-material-ripple'] === 'undefined' ? {} : this['compose-multiplatform-core-compose-material-material-ripple']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-material-material-ripple.js.map
