(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-compose-runtime-runtime.js', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-runtime-runtime-saveable'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-runtime-runtime-saveable'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-runtime-runtime-saveable'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-runtime-runtime-saveable'.");
    }
    root['compose-multiplatform-core-compose-runtime-runtime-saveable'] = factory(typeof this['compose-multiplatform-core-compose-runtime-runtime-saveable'] === 'undefined' ? {} : this['compose-multiplatform-core-compose-runtime-runtime-saveable'], this['compose-multiplatform-core-compose-runtime-runtime'], this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var Unit_instance = kotlin_kotlin.$_$.k5;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var get_currentCompositeKeyHash = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var charSequenceLength = kotlin_kotlin.$_$.va;
  var toString = kotlin_kotlin.$_$.jf;
  var THROW_CCE = kotlin_kotlin.$_$.ng;
  var isInterface = kotlin_kotlin.$_$.vb;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p1;
  var SideEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var toString_0 = kotlin_kotlin.$_$.nc;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.v1;
  var protoOf = kotlin_kotlin.$_$.ic;
  var contentEquals = kotlin_kotlin.$_$.t6;
  var RememberObserver = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var classMeta = kotlin_kotlin.$_$.xa;
  var setMetadataFor = kotlin_kotlin.$_$.jc;
  var VOID = kotlin_kotlin.$_$.g;
  var toString_1 = kotlin_kotlin.$_$.yh;
  var referentialEqualityPolicy = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var structuralEqualityPolicy = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var neverEqualPolicy = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var SnapshotMutableState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var interfaceMeta = kotlin_kotlin.$_$.mb;
  //endregion
  //region block: pre-declaration
  setMetadataFor(SaveableHolder, 'SaveableHolder', classMeta, VOID, [RememberObserver]);
  setMetadataFor(Saver, 'Saver', interfaceMeta);
  setMetadataFor(Saver$1, VOID, classMeta, VOID, [Saver]);
  //endregion
  var MaxSupportedRadix;
  function rememberSaveable(inputs, saver, key, init, $composer, $changed, $default) {
    var saver_0 = {_v: saver};
    var key_0 = key;
    var $composer_0 = $composer;
    $composer_0.a1s(441892779);
    sourceInformation($composer_0, 'C(rememberSaveable)P(1,3,2)71@3180L23,81@3526L7,83@3552L313,93@3940L82:RememberSaveable.kt#r2ddri');
    if (!(($default & 2) === 0)) {
      saver_0._v = autoSaver();
    }
    if (!(($default & 4) === 0))
      key_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(441892779, $changed, -1, 'androidx.compose.runtime.saveable.rememberSaveable (RememberSaveable.kt:70)');
    }
    var compositeKey = get_currentCompositeKeyHash($composer_0, 0);
    var tmp;
    // Inline function 'kotlin.text.isNullOrEmpty' call
    var this_0 = key_0;
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0 == null ? true : charSequenceLength(this_0) === 0)) {
      tmp = key_0;
    } else {
      tmp = toString(compositeKey, MaxSupportedRadix);
    }
    var finalKey = tmp;
    var tmp_0 = saver_0._v;
    if (!(!(tmp_0 == null) ? isInterface(tmp_0, Saver) : false))
      THROW_CCE();
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_1 = get_LocalSaveableStateRegistry();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.y1t(this_1);
    sourceInformationMarkerEnd($composer_1);
    var registry = tmp0;
    $composer_0.a1s(1059366748);
    sourceInformation($composer_0, 'CC(remember):RememberSaveable.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.m1t();
    var tmp_1;
    if (false ? true : it === Companion_getInstance().s1m_1) {
      // Inline function 'androidx.compose.runtime.saveable.rememberSaveable.<anonymous>' call
      var tmp1_safe_receiver = registry == null ? null : registry.z2u(finalKey);
      var tmp_2;
      if (tmp1_safe_receiver == null) {
        tmp_2 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.saveable.rememberSaveable.<anonymous>.<anonymous>' call
        tmp_2 = saver_0._v.a2v(tmp1_safe_receiver);
      }
      var restored = tmp_2;
      var finalValue = restored == null ? init() : restored;
      var value = new SaveableHolder(saver_0._v, registry, finalKey, finalValue, inputs);
      $composer_0.s1t(value);
      tmp_1 = value;
    } else {
      tmp_1 = it;
    }
    var tmp_3 = tmp_1;
    var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
    $composer_0.b1s();
    var holder = tmp1_group;
    var tmp0_elvis_lhs = holder.i2v(inputs);
    var value_0 = tmp0_elvis_lhs == null ? init() : tmp0_elvis_lhs;
    SideEffect(rememberSaveable$lambda(holder, saver_0, registry, finalKey, value_0, inputs), $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.b1s();
    return value_0;
  }
  function register($this) {
    var registry = $this.c2v_1;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!($this.g2v_1 == null)) {
      // Inline function 'androidx.compose.runtime.saveable.SaveableHolder.register.<anonymous>' call
      var message = 'entry(' + $this.g2v_1 + ') is not null';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    if (!(registry == null)) {
      requireCanBeSaved(registry, $this.h2v_1());
      $this.g2v_1 = registry.j2v($this.d2v_1, $this.h2v_1);
    }
  }
  function SaveableHolder$valueProvider$lambda(this$0) {
    return function () {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.saveable.SaveableHolder.valueProvider.<anonymous>.<anonymous>' call
      var $this$with = this$0.b2v_1;
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.requireNotNull' call
        var value = this$0.e2v_1;
        // Inline function 'kotlin.contracts.contract' call
        if (value == null) {
          // Inline function 'androidx.compose.runtime.saveable.SaveableHolder.valueProvider.<anonymous>.<anonymous>.<anonymous>' call
          var message = 'Value should be initialized';
          throw IllegalArgumentException_init_$Create$(toString_0(message));
        } else {
          tmp$ret$1 = value;
          break $l$block;
        }
      }
      return $this$with.k2v(this$0, tmp$ret$1);
    };
  }
  function SaveableHolder(saver, registry, key, value, inputs) {
    this.b2v_1 = saver;
    this.c2v_1 = registry;
    this.d2v_1 = key;
    this.e2v_1 = value;
    this.f2v_1 = inputs;
    this.g2v_1 = null;
    var tmp = this;
    tmp.h2v_1 = SaveableHolder$valueProvider$lambda(this);
  }
  protoOf(SaveableHolder).l2v = function (saver, registry, key, value, inputs) {
    var entryIsOutdated = false;
    if (!(this.c2v_1 === registry)) {
      this.c2v_1 = registry;
      entryIsOutdated = true;
    }
    if (!(this.d2v_1 === key)) {
      this.d2v_1 = key;
      entryIsOutdated = true;
    }
    this.b2v_1 = saver;
    this.e2v_1 = value;
    this.f2v_1 = inputs;
    if (!(this.g2v_1 == null) ? entryIsOutdated : false) {
      var tmp0_safe_receiver = this.g2v_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.m2v();
      }
      this.g2v_1 = null;
      register(this);
    }
  };
  protoOf(SaveableHolder).k1x = function () {
    register(this);
  };
  protoOf(SaveableHolder).j1x = function () {
    var tmp0_safe_receiver = this.g2v_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.m2v();
    }
  };
  protoOf(SaveableHolder).l1x = function () {
    var tmp0_safe_receiver = this.g2v_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.m2v();
    }
  };
  protoOf(SaveableHolder).i2v = function (inputs) {
    var tmp;
    if (contentEquals(inputs, this.f2v_1)) {
      tmp = this.e2v_1;
    } else {
      tmp = null;
    }
    return tmp;
  };
  function requireCanBeSaved(_this__u8e3s4, value) {
    if (!(value == null) ? !_this__u8e3s4.n2v(value) : false) {
      var tmp;
      if (!(value == null) ? isInterface(value, SnapshotMutableState) : false) {
        var tmp_0;
        if ((!(value.m1z() === neverEqualPolicy()) ? !(value.m1z() === structuralEqualityPolicy()) : false) ? !(value.m1z() === referentialEqualityPolicy()) : false) {
          tmp_0 = 'If you use a custom SnapshotMutationPolicy for your MutableState you have to write a custom Saver';
        } else {
          tmp_0 = 'MutableState containing ' + toString_1(value.q2()) + ' cannot be saved using the current ' + 'SaveableStateRegistry. The default implementation only supports types ' + 'which can be stored inside the Bundle. Please consider implementing a ' + 'custom Saver for this class and pass it as a stateSaver parameter to ' + 'rememberSaveable().';
        }
        tmp = tmp_0;
      } else {
        tmp = toString_1(value) + ' cannot be saved using the current SaveableStateRegistry. The default ' + 'implementation only supports types which can be stored inside the Bundle' + '. Please consider implementing a custom Saver for this class and pass it' + ' to rememberSaveable().';
      }
      throw IllegalArgumentException_init_$Create$(tmp);
    }
  }
  function rememberSaveable$lambda($holder, $saver, $registry, $finalKey, $value, $inputs) {
    return function () {
      $holder.l2v($saver._v, $registry, $finalKey, $value, $inputs);
      return Unit_instance;
    };
  }
  function get_LocalSaveableStateRegistry() {
    _init_properties_SaveableStateRegistry_kt__lr5zhh();
    return LocalSaveableStateRegistry;
  }
  var LocalSaveableStateRegistry;
  function LocalSaveableStateRegistry$lambda() {
    _init_properties_SaveableStateRegistry_kt__lr5zhh();
    return null;
  }
  var properties_initialized_SaveableStateRegistry_kt_4lrdzt;
  function _init_properties_SaveableStateRegistry_kt__lr5zhh() {
    if (!properties_initialized_SaveableStateRegistry_kt_4lrdzt) {
      properties_initialized_SaveableStateRegistry_kt_4lrdzt = true;
      LocalSaveableStateRegistry = staticCompositionLocalOf(LocalSaveableStateRegistry$lambda);
    }
  }
  function get_AutoSaver() {
    _init_properties_Saver_kt__z47nhf();
    return AutoSaver;
  }
  var AutoSaver;
  function Saver() {
  }
  function Saver_0(save, restore) {
    _init_properties_Saver_kt__z47nhf();
    return new Saver$1(save, restore);
  }
  function autoSaver() {
    _init_properties_Saver_kt__z47nhf();
    var tmp = get_AutoSaver();
    return isInterface(tmp, Saver) ? tmp : THROW_CCE();
  }
  function AutoSaver$lambda($this$Saver, it) {
    _init_properties_Saver_kt__z47nhf();
    return it;
  }
  function AutoSaver$lambda_0(it) {
    _init_properties_Saver_kt__z47nhf();
    return it;
  }
  function Saver$1($save, $restore) {
    this.o2v_1 = $save;
    this.p2v_1 = $restore;
  }
  protoOf(Saver$1).k2v = function (_this__u8e3s4, value) {
    return this.o2v_1(_this__u8e3s4, value);
  };
  protoOf(Saver$1).a2v = function (value) {
    return this.p2v_1(value);
  };
  var properties_initialized_Saver_kt_ch40dh;
  function _init_properties_Saver_kt__z47nhf() {
    if (!properties_initialized_Saver_kt_ch40dh) {
      properties_initialized_Saver_kt_ch40dh = true;
      var tmp = AutoSaver$lambda;
      AutoSaver = Saver_0(tmp, AutoSaver$lambda_0);
    }
  }
  //region block: init
  MaxSupportedRadix = 36;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Saver_0;
  _.$_$.b = rememberSaveable;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-runtime-runtime-saveable.js.map
