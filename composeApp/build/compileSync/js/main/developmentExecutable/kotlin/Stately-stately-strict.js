(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['Stately-stately-strict'] = factory(typeof this['Stately-stately-strict'] === 'undefined' ? {} : this['Stately-stately-strict']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  function get_strictMemoryModel() {
    return strictMemoryModel;
  }
  var strictMemoryModel;
  //region block: init
  strictMemoryModel = false;
  //endregion
  return _;
}));

//# sourceMappingURL=Stately-stately-strict.js.map
