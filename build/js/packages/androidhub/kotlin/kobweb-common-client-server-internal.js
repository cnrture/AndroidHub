(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['kobweb-common-client-server-internal'] = factory(typeof this['kobweb-common-client-server-internal'] === 'undefined' ? {} : this['kobweb-common-client-server-internal']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-common-client-server-internal.js.map
