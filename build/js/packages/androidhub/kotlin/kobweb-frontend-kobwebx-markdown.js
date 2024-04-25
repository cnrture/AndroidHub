(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['kobweb-frontend-kobwebx-markdown'] = factory(typeof this['kobweb-frontend-kobwebx-markdown'] === 'undefined' ? {} : this['kobweb-frontend-kobwebx-markdown']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-kobwebx-markdown.js.map
