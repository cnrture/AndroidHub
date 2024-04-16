(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['Kotlin-DateTime-library-kotlinx-datetime'] = factory(typeof this['Kotlin-DateTime-library-kotlinx-datetime'] === 'undefined' ? {} : this['Kotlin-DateTime-library-kotlinx-datetime']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=Kotlin-DateTime-library-kotlinx-datetime.js.map
