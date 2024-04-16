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
  var protoOf = kotlin_kotlin.$_$.bf;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g2;
  var classMeta = kotlin_kotlin.$_$.pd;
  var setMetadataFor = kotlin_kotlin.$_$.cf;
  var THROW_CCE = kotlin_kotlin.$_$.vj;
  var interfaceMeta = kotlin_kotlin.$_$.fe;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e2;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u1;
  var VOID = kotlin_kotlin.$_$.g;
  //endregion
  //region block: pre-declaration
  setMetadataFor(KMMViewModel, 'KMMViewModel', classMeta);
  setMetadataFor(ViewModelScope, 'ViewModelScope', interfaceMeta);
  setMetadataFor(ViewModelScopeImpl, 'ViewModelScopeImpl', classMeta, VOID, [ViewModelScope], ViewModelScopeImpl);
  //endregion
  function KMMViewModel() {
    this.viewModelScope_1 = new ViewModelScopeImpl();
  }
  protoOf(KMMViewModel).get_viewModelScope_ryv1dz_k$ = function () {
    return this.viewModelScope_1;
  };
  protoOf(KMMViewModel).onCleared_hwiuwz_k$ = function () {
    cancel(get_coroutineScope(this.viewModelScope_1));
  };
  function get_coroutineScope(_this__u8e3s4) {
    return (_this__u8e3s4 instanceof ViewModelScopeImpl ? _this__u8e3s4 : THROW_CCE()).coroutineScope_1;
  }
  function ViewModelScope() {
  }
  function ViewModelScopeImpl() {
    this.coroutineScope_1 = CoroutineScope(SupervisorJob().plus_s13ygv_k$(Dispatchers_getInstance().get_Main_wo5vz6_k$()));
  }
  protoOf(ViewModelScopeImpl).get_coroutineScope_5k7h45_k$ = function () {
    return this.coroutineScope_1;
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = KMMViewModel;
  _.$_$.b = get_coroutineScope;
  //endregion
  return _;
}));

//# sourceMappingURL=kmm-viewmodel-kmm-viewmodel-core.js.map
