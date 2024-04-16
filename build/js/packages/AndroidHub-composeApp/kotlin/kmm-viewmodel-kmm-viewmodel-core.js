(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kmm-viewmodel-kmm-viewmodel-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kmm-viewmodel-kmm-viewmodel-core'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'kmm-viewmodel-kmm-viewmodel-core'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'kmm-viewmodel-kmm-viewmodel-core'.");
    }
    root['kmm-viewmodel-kmm-viewmodel-core'] = factory(typeof this['kmm-viewmodel-kmm-viewmodel-core'] === 'undefined' ? {} : this['kmm-viewmodel-kmm-viewmodel-core'], this['kotlin-kotlin-stdlib'], this['kotlinx-coroutines-core']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.ic;
  var classMeta = kotlin_kotlin.$_$.xa;
  var setMetadataFor = kotlin_kotlin.$_$.jc;
  var THROW_CCE = kotlin_kotlin.$_$.ng;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c1;
  var VOID = kotlin_kotlin.$_$.g;
  //endregion
  //region block: pre-declaration
  setMetadataFor(KMMViewModel, 'KMMViewModel', classMeta);
  setMetadataFor(ViewModelScopeImpl, 'ViewModelScopeImpl', classMeta, VOID, VOID, ViewModelScopeImpl);
  //endregion
  function KMMViewModel() {
    this.g78_1 = new ViewModelScopeImpl();
  }
  function get_coroutineScope(_this__u8e3s4) {
    return (_this__u8e3s4 instanceof ViewModelScopeImpl ? _this__u8e3s4 : THROW_CCE()).h78_1;
  }
  function ViewModelScopeImpl() {
    this.h78_1 = CoroutineScope(SupervisorJob().yf(Dispatchers_getInstance().w10()));
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = KMMViewModel;
  _.$_$.b = get_coroutineScope;
  //endregion
  return _;
}));

//# sourceMappingURL=kmm-viewmodel-kmm-viewmodel-core.js.map
