(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './Stately-stately-concurrency.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./Stately-stately-concurrency.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'core-koin-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'core-koin-core'.");
    }
    if (typeof this['Stately-stately-concurrency'] === 'undefined') {
      throw new Error("Error loading module 'core-koin-core'. Its dependency 'Stately-stately-concurrency' was not found. Please, check whether 'Stately-stately-concurrency' is loaded prior to 'core-koin-core'.");
    }
    root['core-koin-core'] = factory(typeof this['core-koin-core'] === 'undefined' ? {} : this['core-koin-core'], this['kotlin-kotlin-stdlib'], this['Stately-stately-concurrency']);
  }
}(this, function (_, kotlin_kotlin, kotlin_co_touchlab_stately_concurrency) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.bf;
  var VOID = kotlin_kotlin.$_$.g;
  var Unit_getInstance = kotlin_kotlin.$_$.u5;
  var Pair = kotlin_kotlin.$_$.sj;
  var classMeta = kotlin_kotlin.$_$.pd;
  var setMetadataFor = kotlin_kotlin.$_$.cf;
  var objectMeta = kotlin_kotlin.$_$.af;
  var listOf = kotlin_kotlin.$_$.da;
  var toList = kotlin_kotlin.$_$.wb;
  var THROW_CCE = kotlin_kotlin.$_$.vj;
  var Annotation = kotlin_kotlin.$_$.bj;
  var interfaceMeta = kotlin_kotlin.$_$.fe;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var hashCode = kotlin_kotlin.$_$.de;
  var emptyList = kotlin_kotlin.$_$.t8;
  var equals = kotlin_kotlin.$_$.td;
  var joinToString = kotlin_kotlin.$_$.s9;
  var THROW_IAE = kotlin_kotlin.$_$.wj;
  var enumEntries = kotlin_kotlin.$_$.ed;
  var Enum = kotlin_kotlin.$_$.jj;
  var Exception = kotlin_kotlin.$_$.lj;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.t1;
  var captureStack = kotlin_kotlin.$_$.jd;
  var Exception_init_$Init$_0 = kotlin_kotlin.$_$.v1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.s;
  var Map = kotlin_kotlin.$_$.p6;
  var isInterface = kotlin_kotlin.$_$.oe;
  var toString = kotlin_kotlin.$_$.gf;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.h2;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.w;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.p;
  var addAll = kotlin_kotlin.$_$.z6;
  var addAll_0 = kotlin_kotlin.$_$.a7;
  var listOf_0 = kotlin_kotlin.$_$.ea;
  var plus = kotlin_kotlin.$_$.pa;
  var getStringHashCode = kotlin_kotlin.$_$.ce;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.b1;
  var get_lastIndex = kotlin_kotlin.$_$.w9;
  var toList_0 = kotlin_kotlin.$_$.vb;
  var copyToArray = kotlin_kotlin.$_$.q8;
  var arrayListOf = kotlin_kotlin.$_$.c7;
  var distinct = kotlin_kotlin.$_$.r8;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.r7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.o;
  var toString_0 = kotlin_kotlin.$_$.kl;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.n;
  var ThreadLocalRef = kotlin_co_touchlab_stately_concurrency.$_$.a;
  var removeAll = kotlin_kotlin.$_$.sa;
  var DurationUnit_NANOSECONDS_getInstance = kotlin_kotlin.$_$.i;
  var toDuration = kotlin_kotlin.$_$.aj;
  var Companion_getInstance = kotlin_kotlin.$_$.m5;
  var Duration__minus_impl_q5cfm7 = kotlin_kotlin.$_$.y2;
  var DurationUnit_SECONDS_getInstance = kotlin_kotlin.$_$.j;
  var Duration__toDouble_impl_a56y2b = kotlin_kotlin.$_$.z2;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.h;
  var println = kotlin_kotlin.$_$.fd;
  var isArray = kotlin_kotlin.$_$.ge;
  var roundToLong = kotlin_kotlin.$_$.mf;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.s1;
  var split = kotlin_kotlin.$_$.ci;
  var Default_getInstance = kotlin_kotlin.$_$.j5;
  var getNumberHashCode = kotlin_kotlin.$_$.zd;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$_$.k;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Koin, 'Koin', classMeta, VOID, VOID, Koin);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(KoinApplication, 'KoinApplication', classMeta);
  setMetadataFor(KoinInternalApi, 'KoinInternalApi', classMeta, VOID, [Annotation]);
  function getKoin() {
    return KoinPlatformTools_getInstance().defaultContext_m5e9ci_k$().get_26vq_k$();
  }
  setMetadataFor(KoinComponent, 'KoinComponent', interfaceMeta);
  function closeScope() {
    if (this.get_scope_iyfcq3_k$().isNotClosed_x1h9n9_k$()) {
      this.get_scope_iyfcq3_k$().close_yn9xrc_k$();
    }
  }
  setMetadataFor(KoinScopeComponent, 'KoinScopeComponent', interfaceMeta, VOID, [KoinComponent]);
  function loadKoinModules$default(module_0, createEagerInstances, $super) {
    createEagerInstances = createEagerInstances === VOID ? false : createEagerInstances;
    var tmp;
    if ($super === VOID) {
      this.loadKoinModules_pgeopx_k$(module_0, createEagerInstances);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.loadKoinModules_pgeopx_k$.call(this, module_0, createEagerInstances);
    }
    return tmp;
  }
  function loadKoinModules$default_0(modules, createEagerInstances, $super) {
    createEagerInstances = createEagerInstances === VOID ? false : createEagerInstances;
    var tmp;
    if ($super === VOID) {
      this.loadKoinModules_vsyvvn_k$(modules, createEagerInstances);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.loadKoinModules_vsyvvn_k$.call(this, modules, createEagerInstances);
    }
    return tmp;
  }
  setMetadataFor(KoinContext, 'KoinContext', interfaceMeta);
  setMetadataFor(BeanDefinition, 'BeanDefinition', classMeta);
  setMetadataFor(Kind, 'Kind', classMeta, Enum);
  setMetadataFor(Callbacks, 'Callbacks', classMeta, VOID, VOID, Callbacks);
  setMetadataFor(KoinDefinition, 'KoinDefinition', classMeta);
  setMetadataFor(ClosedScopeException, 'ClosedScopeException', classMeta, Exception);
  setMetadataFor(DefinitionOverrideException, 'DefinitionOverrideException', classMeta, Exception);
  setMetadataFor(DefinitionParameterException, 'DefinitionParameterException', classMeta, Exception);
  setMetadataFor(InstanceCreationException, 'InstanceCreationException', classMeta, Exception);
  setMetadataFor(KoinAppAlreadyStartedException, 'KoinAppAlreadyStartedException', classMeta, Exception);
  setMetadataFor(MissingPropertyException, 'MissingPropertyException', classMeta, Exception);
  setMetadataFor(NoBeanDefFoundException, 'NoBeanDefFoundException', classMeta, Exception);
  setMetadataFor(NoParameterFoundException, 'NoParameterFoundException', classMeta, Exception);
  setMetadataFor(ScopeAlreadyCreatedException, 'ScopeAlreadyCreatedException', classMeta, Exception);
  setMetadataFor(ScopeNotCreatedException, 'ScopeNotCreatedException', classMeta, Exception);
  setMetadataFor(ExtensionManager, 'ExtensionManager', classMeta);
  setMetadataFor(KoinExtension, 'KoinExtension', interfaceMeta);
  setMetadataFor(InstanceFactory, 'InstanceFactory', classMeta);
  setMetadataFor(FactoryInstanceFactory, 'FactoryInstanceFactory', classMeta, InstanceFactory);
  setMetadataFor(InstanceContext, 'InstanceContext', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(ScopedInstanceFactory, 'ScopedInstanceFactory', classMeta, InstanceFactory);
  setMetadataFor(SingleInstanceFactory, 'SingleInstanceFactory', classMeta, InstanceFactory);
  setMetadataFor(Logger, 'Logger', classMeta);
  setMetadataFor(EmptyLogger, 'EmptyLogger', classMeta, Logger, VOID, EmptyLogger);
  setMetadataFor(Level, 'Level', classMeta, Enum);
  setMetadataFor(KoinApplicationDslMarker, 'KoinApplicationDslMarker', classMeta, VOID, [Annotation]);
  setMetadataFor(KoinDslMarker, 'KoinDslMarker', classMeta, VOID, [Annotation]);
  setMetadataFor(OptionDslMarker, 'OptionDslMarker', classMeta, VOID, [Annotation]);
  setMetadataFor(Module, 'Module', classMeta, VOID, VOID, Module);
  setMetadataFor(ParametersHolder, 'ParametersHolder', classMeta, VOID, VOID, ParametersHolder);
  setMetadataFor(Qualifier, 'Qualifier', interfaceMeta);
  setMetadataFor(StringQualifier, 'StringQualifier', classMeta, VOID, [Qualifier]);
  setMetadataFor(TypeQualifier, 'TypeQualifier', classMeta, VOID, [Qualifier]);
  setMetadataFor(InstanceRegistry, 'InstanceRegistry', classMeta);
  setMetadataFor(PropertyRegistry, 'PropertyRegistry', classMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(ScopeRegistry, 'ScopeRegistry', classMeta);
  setMetadataFor(Scope, 'Scope', classMeta);
  setMetadataFor(ScopeCallback, 'ScopeCallback', interfaceMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(Timer, 'Timer', classMeta, VOID, VOID, Timer);
  setMetadataFor(ScopeDSL, 'ScopeDSL', classMeta);
  setMetadataFor(GlobalContext, 'GlobalContext', objectMeta, VOID, [KoinContext]);
  setMetadataFor(PrintLogger, 'PrintLogger', classMeta, Logger, VOID, PrintLogger);
  setMetadataFor(TimeSource, 'TimeSource', interfaceMeta);
  setMetadataFor(NodeJsHrTimeSource, 'NodeJsHrTimeSource', classMeta, VOID, [TimeSource], NodeJsHrTimeSource);
  setMetadataFor(PerformanceNowTimeSource, 'PerformanceNowTimeSource', classMeta, VOID, [TimeSource], PerformanceNowTimeSource);
  setMetadataFor(DateNowTimeSource, 'DateNowTimeSource', classMeta, VOID, [TimeSource], DateNowTimeSource);
  setMetadataFor(KoinPlatformTimeTools, 'KoinPlatformTimeTools', objectMeta);
  setMetadataFor(KoinPlatformTools, 'KoinPlatformTools', objectMeta);
  //endregion
  function _set_logger__t1fpfd($this, _set____db54di) {
    $this.logger_1 = _set____db54di;
  }
  function Koin() {
    this.scopeRegistry_1 = new ScopeRegistry(this);
    this.instanceRegistry_1 = new InstanceRegistry(this);
    this.propertyRegistry_1 = new PropertyRegistry(this);
    this.extensionManager_1 = new ExtensionManager(this);
    this.logger_1 = new EmptyLogger();
  }
  protoOf(Koin).get_scopeRegistry_7zu3y0_k$ = function () {
    return this.scopeRegistry_1;
  };
  protoOf(Koin).get_instanceRegistry_jmeu6d_k$ = function () {
    return this.instanceRegistry_1;
  };
  protoOf(Koin).get_propertyRegistry_kqppff_k$ = function () {
    return this.propertyRegistry_1;
  };
  protoOf(Koin).get_extensionManager_eii7d5_k$ = function () {
    return this.extensionManager_1;
  };
  protoOf(Koin).get_logger_g9gejd_k$ = function () {
    return this.logger_1;
  };
  protoOf(Koin).setupLogger_8irynp_k$ = function (logger) {
    this.logger_1 = logger;
  };
  protoOf(Koin).get_80ko8d_k$ = function (clazz, qualifier, parameters) {
    return this.scopeRegistry_1.get_rootScope_60k1zr_k$().get_80ko8d_k$(clazz, qualifier, parameters);
  };
  protoOf(Koin).get$default_drfz2l_k$ = function (clazz, qualifier, parameters, $super) {
    qualifier = qualifier === VOID ? null : qualifier;
    parameters = parameters === VOID ? null : parameters;
    return $super === VOID ? this.get_80ko8d_k$(clazz, qualifier, parameters) : $super.get_80ko8d_k$.call(this, clazz, qualifier, parameters);
  };
  protoOf(Koin).getOrNull_o6mr2b_k$ = function (clazz, qualifier, parameters) {
    return this.scopeRegistry_1.get_rootScope_60k1zr_k$().getOrNull_o6mr2b_k$(clazz, qualifier, parameters);
  };
  protoOf(Koin).getOrNull$default_ms9o3b_k$ = function (clazz, qualifier, parameters, $super) {
    qualifier = qualifier === VOID ? null : qualifier;
    parameters = parameters === VOID ? null : parameters;
    return $super === VOID ? this.getOrNull_o6mr2b_k$(clazz, qualifier, parameters) : $super.getOrNull_o6mr2b_k$.call(this, clazz, qualifier, parameters);
  };
  protoOf(Koin).createScope_icmya9_k$ = function (scopeId, qualifier, source) {
    return this.scopeRegistry_1.createScope_icmya9_k$(scopeId, qualifier, source);
  };
  protoOf(Koin).createScope$default_jqhc28_k$ = function (scopeId, qualifier, source, $super) {
    source = source === VOID ? null : source;
    return $super === VOID ? this.createScope_icmya9_k$(scopeId, qualifier, source) : $super.createScope_icmya9_k$.call(this, scopeId, qualifier, source);
  };
  protoOf(Koin).createScope_vgypkn_k$ = function (t) {
    var scopeId = getScopeId(t);
    var qualifier = getScopeName(t);
    return this.scopeRegistry_1.createScope_icmya9_k$(scopeId, qualifier, null);
  };
  protoOf(Koin).getOrCreateScope_esa8so_k$ = function (scopeId, qualifier, source) {
    var tmp0_elvis_lhs = this.scopeRegistry_1.getScopeOrNull_d5lpe6_k$(scopeId);
    return tmp0_elvis_lhs == null ? this.createScope_icmya9_k$(scopeId, qualifier, source) : tmp0_elvis_lhs;
  };
  protoOf(Koin).getOrCreateScope$default_600prd_k$ = function (scopeId, qualifier, source, $super) {
    source = source === VOID ? null : source;
    return $super === VOID ? this.getOrCreateScope_esa8so_k$(scopeId, qualifier, source) : $super.getOrCreateScope_esa8so_k$.call(this, scopeId, qualifier, source);
  };
  protoOf(Koin).getScope_tojh0k_k$ = function (scopeId) {
    var tmp0_elvis_lhs = this.scopeRegistry_1.getScopeOrNull_d5lpe6_k$(scopeId);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new ScopeNotCreatedException("No scope found for id '" + scopeId + "'");
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(Koin).getScopeOrNull_d5lpe6_k$ = function (scopeId) {
    return this.scopeRegistry_1.getScopeOrNull_d5lpe6_k$(scopeId);
  };
  protoOf(Koin).deleteScope_p820yn_k$ = function (scopeId) {
    this.scopeRegistry_1.deleteScope_p820yn_k$(scopeId);
  };
  protoOf(Koin).getProperty_c8t5i6_k$ = function (key, defaultValue) {
    var tmp0_elvis_lhs = this.propertyRegistry_1.getProperty_queixn_k$(key);
    return tmp0_elvis_lhs == null ? defaultValue : tmp0_elvis_lhs;
  };
  protoOf(Koin).getProperty_uqr2j4_k$ = function (key) {
    return this.propertyRegistry_1.getProperty_queixn_k$(key);
  };
  protoOf(Koin).setProperty_4bjgqz_k$ = function (key, value) {
    this.propertyRegistry_1.saveProperty_kph4l1_k$(key, value);
  };
  protoOf(Koin).deleteProperty_94w4qe_k$ = function (key) {
    this.propertyRegistry_1.deleteProperty_94w4qe_k$(key);
  };
  protoOf(Koin).close_yn9xrc_k$ = function () {
    this.scopeRegistry_1.close_yn9xrc_k$();
    this.instanceRegistry_1.close_yn9xrc_k$();
    this.propertyRegistry_1.close_yn9xrc_k$();
    this.extensionManager_1.close_yn9xrc_k$();
  };
  protoOf(Koin).loadModules_wryunp_k$ = function (modules, allowOverride, createEagerInstances) {
    var flattedModules = flatten(modules);
    this.instanceRegistry_1.loadModules_bcbsui_k$(flattedModules, allowOverride);
    this.scopeRegistry_1.loadScopes_dez92v_k$(flattedModules);
    if (createEagerInstances) {
      this.createEagerInstances_b5l376_k$();
    }
  };
  protoOf(Koin).loadModules$default_98npob_k$ = function (modules, allowOverride, createEagerInstances, $super) {
    allowOverride = allowOverride === VOID ? true : allowOverride;
    createEagerInstances = createEagerInstances === VOID ? false : createEagerInstances;
    var tmp;
    if ($super === VOID) {
      this.loadModules_wryunp_k$(modules, allowOverride, createEagerInstances);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.loadModules_wryunp_k$.call(this, modules, allowOverride, createEagerInstances);
    }
    return tmp;
  };
  protoOf(Koin).unloadModules_7hifhu_k$ = function (modules) {
    var flattedModules = flatten(modules);
    this.instanceRegistry_1.unloadModules_lbocss_k$(flattedModules);
  };
  protoOf(Koin).createEagerInstances_b5l376_k$ = function () {
    this.logger_1.debug_fck32h_k$('Create eager instances ...');
    // Inline function 'org.koin.core.time.measureDuration' call
    // Inline function 'org.koin.core.time.measureTimedValue' call
    var start = KoinPlatformTimeTools_getInstance().getTimeInNanoSeconds_rsnqv1_k$();
    this.instanceRegistry_1.createAllEagerInstances_wxccsb_k$();
    var value = Unit_getInstance();
    var stop = KoinPlatformTimeTools_getInstance().getTimeInNanoSeconds_rsnqv1_k$();
    // Inline function 'kotlin.Long.div' call
    var this_0 = stop.minus_mfbszm_k$(start);
    var other = Companion_getInstance_3().get_NANO_TO_MILLI_vas3xn_k$();
    var tmp$ret$0 = this_0.toDouble_ygsx0s_k$() / other;
    var duration = (new Pair(Unit_getInstance(), tmp$ret$0)).get_second_jf7fjx_k$();
    this.logger_1.debug_fck32h_k$('Created eager instances in ' + duration + ' ms');
  };
  function _set_allowOverride__dpyqb4($this, _set____db54di) {
    $this.allowOverride_1 = _set____db54di;
  }
  function _get_allowOverride__1hss78($this) {
    return $this.allowOverride_1;
  }
  function loadModules($this, modules) {
    $this.koin_1.loadModules_wryunp_k$(modules, $this.allowOverride_1, false);
  }
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).init_1xdsg_k$ = function () {
    var app = new KoinApplication();
    return app;
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function KoinApplication() {
    Companion_getInstance_0();
    this.koin_1 = new Koin();
    this.allowOverride_1 = true;
  }
  protoOf(KoinApplication).get_koin_wopbyq_k$ = function () {
    return this.koin_1;
  };
  protoOf(KoinApplication).modules_5mo3b5_k$ = function (modules) {
    return this.modules_r3qc1t_k$(listOf(modules));
  };
  protoOf(KoinApplication).modules_sihqt1_k$ = function (modules) {
    return this.modules_r3qc1t_k$(toList(modules));
  };
  protoOf(KoinApplication).modules_r3qc1t_k$ = function (modules) {
    if (this.koin_1.get_logger_g9gejd_k$().isAt_nsqhkh_k$(Level_INFO_getInstance())) {
      // Inline function 'org.koin.core.time.measureDuration' call
      // Inline function 'org.koin.core.time.measureTimedValue' call
      var start = KoinPlatformTimeTools_getInstance().getTimeInNanoSeconds_rsnqv1_k$();
      loadModules(this, modules);
      var value = Unit_getInstance();
      var stop = KoinPlatformTimeTools_getInstance().getTimeInNanoSeconds_rsnqv1_k$();
      // Inline function 'kotlin.Long.div' call
      var this_0 = stop.minus_mfbszm_k$(start);
      var other = Companion_getInstance_3().get_NANO_TO_MILLI_vas3xn_k$();
      var tmp$ret$0 = this_0.toDouble_ygsx0s_k$() / other;
      var duration = (new Pair(Unit_getInstance(), tmp$ret$0)).get_second_jf7fjx_k$();
      var count = this.koin_1.get_instanceRegistry_jmeu6d_k$().size_23och_k$();
      this.koin_1.get_logger_g9gejd_k$().display_r45kqo_k$(Level_INFO_getInstance(), 'Started ' + count + ' definitions in ' + duration + ' ms');
    } else {
      loadModules(this, modules);
    }
    return this;
  };
  protoOf(KoinApplication).createEagerInstances_b5l376_k$ = function () {
    this.koin_1.createEagerInstances_b5l376_k$();
  };
  protoOf(KoinApplication).allowOverride_uzcslc_k$ = function (override) {
    this.allowOverride_1 = override;
  };
  protoOf(KoinApplication).properties_die9e6_k$ = function (values) {
    this.koin_1.get_propertyRegistry_kqppff_k$().saveProperties_qx721n_k$(values);
    return this;
  };
  protoOf(KoinApplication).logger_5nhcko_k$ = function (logger) {
    this.koin_1.setupLogger_8irynp_k$(logger);
    return this;
  };
  protoOf(KoinApplication).printLogger_8bdywf_k$ = function (level) {
    this.koin_1.setupLogger_8irynp_k$(KoinPlatformTools_getInstance().defaultLogger_loj8wr_k$(level));
    return this;
  };
  protoOf(KoinApplication).printLogger$default_wn3y2s_k$ = function (level, $super) {
    level = level === VOID ? Level_INFO_getInstance() : level;
    return $super === VOID ? this.printLogger_8bdywf_k$(level) : $super.printLogger_8bdywf_k$.call(this, level);
  };
  protoOf(KoinApplication).close_yn9xrc_k$ = function () {
    this.koin_1.close_yn9xrc_k$();
  };
  protoOf(KoinApplication).unloadModules_7hifhu_k$ = function (modules) {
    this.koin_1.unloadModules_7hifhu_k$(modules);
  };
  protoOf(KoinApplication).unloadModules_unlnm8_k$ = function (module_0) {
    this.koin_1.unloadModules_7hifhu_k$(listOf(module_0));
  };
  function KoinInternalApi() {
  }
  protoOf(KoinInternalApi).equals = function (other) {
    if (!(other instanceof KoinInternalApi))
      return false;
    other instanceof KoinInternalApi || THROW_CCE();
    return true;
  };
  protoOf(KoinInternalApi).hashCode = function () {
    return 0;
  };
  protoOf(KoinInternalApi).toString = function () {
    return '@org.koin.core.annotation.KoinInternalApi()';
  };
  function KoinComponent() {
  }
  function KoinScopeComponent() {
  }
  function getScopeId(_this__u8e3s4) {
    return getFullName(getKClassFromExpression(_this__u8e3s4)) + '@' + hashCode(_this__u8e3s4);
  }
  function getScopeName(_this__u8e3s4) {
    return new TypeQualifier(getKClassFromExpression(_this__u8e3s4));
  }
  function startKoin(appDeclaration) {
    return KoinPlatformTools_getInstance().defaultContext_m5e9ci_k$().startKoin_5fxk64_k$(appDeclaration);
  }
  function KoinContext() {
  }
  function BeanDefinition$toString$lambda(it) {
    return getFullName(it);
  }
  function BeanDefinition(scopeQualifier, primaryType, qualifier, definition, kind, secondaryTypes) {
    qualifier = qualifier === VOID ? null : qualifier;
    var tmp;
    if (secondaryTypes === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = secondaryTypes;
    }
    secondaryTypes = tmp;
    this.scopeQualifier_1 = scopeQualifier;
    this.primaryType_1 = primaryType;
    this.qualifier_1 = qualifier;
    this.definition_1 = definition;
    this.kind_1 = kind;
    this.secondaryTypes_1 = secondaryTypes;
    this.callbacks_1 = new Callbacks();
    this._createdAtStart_1 = false;
  }
  protoOf(BeanDefinition).get_scopeQualifier_eby6kf_k$ = function () {
    return this.scopeQualifier_1;
  };
  protoOf(BeanDefinition).get_primaryType_gbcb1_k$ = function () {
    return this.primaryType_1;
  };
  protoOf(BeanDefinition).set_qualifier_ov6axa_k$ = function (_set____db54di) {
    this.qualifier_1 = _set____db54di;
  };
  protoOf(BeanDefinition).get_qualifier_c4gvsv_k$ = function () {
    return this.qualifier_1;
  };
  protoOf(BeanDefinition).get_definition_y2whcs_k$ = function () {
    return this.definition_1;
  };
  protoOf(BeanDefinition).get_kind_wop7ml_k$ = function () {
    return this.kind_1;
  };
  protoOf(BeanDefinition).set_secondaryTypes_oxpj23_k$ = function (_set____db54di) {
    this.secondaryTypes_1 = _set____db54di;
  };
  protoOf(BeanDefinition).get_secondaryTypes_du752m_k$ = function () {
    return this.secondaryTypes_1;
  };
  protoOf(BeanDefinition).set_callbacks_8s1r2a_k$ = function (_set____db54di) {
    this.callbacks_1 = _set____db54di;
  };
  protoOf(BeanDefinition).get_callbacks_8qyswr_k$ = function () {
    return this.callbacks_1;
  };
  protoOf(BeanDefinition).set__createdAtStart_ws9ues_k$ = function (_set____db54di) {
    this._createdAtStart_1 = _set____db54di;
  };
  protoOf(BeanDefinition).get__createdAtStart_6om28z_k$ = function () {
    return this._createdAtStart_1;
  };
  protoOf(BeanDefinition).toString = function () {
    var defKind = this.kind_1.toString();
    var defType = "'" + getFullName(this.primaryType_1) + "'";
    var tmp;
    if (this.qualifier_1 == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.koin.core.definition.BeanDefinition.toString.<anonymous>' call
      tmp = ',qualifier:' + this.qualifier_1;
    }
    var tmp1_elvis_lhs = tmp;
    var defName = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.koin.core.definition.BeanDefinition.toString.<anonymous>' call
    var it = this.scopeQualifier_1;
    var defScope = equals(it, Companion_getInstance_2().get_rootScopeQualifier_6qrm0v_k$()) ? '' : ',scope:' + this.scopeQualifier_1;
    var tmp_0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.secondaryTypes_1.isEmpty_y1axqb_k$()) {
      var tmp_1 = this.secondaryTypes_1;
      var typesAsString = joinToString(tmp_1, ',', VOID, VOID, VOID, VOID, BeanDefinition$toString$lambda);
      tmp_0 = ',binds:' + typesAsString;
    } else {
      tmp_0 = '';
    }
    var defOtherTypes = tmp_0;
    return '[' + defKind + ':' + defType + defName + defScope + defOtherTypes + ']';
  };
  protoOf(BeanDefinition).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BeanDefinition))
      THROW_CCE();
    if (!this.primaryType_1.equals(other.primaryType_1))
      return false;
    if (!equals(this.qualifier_1, other.qualifier_1))
      return false;
    if (!equals(this.scopeQualifier_1, other.scopeQualifier_1))
      return false;
    return true;
  };
  protoOf(BeanDefinition).hasType_kftgse_k$ = function (clazz) {
    return this.primaryType_1.equals(clazz) ? true : this.secondaryTypes_1.contains_aljjnj_k$(clazz);
  };
  protoOf(BeanDefinition).is_cbzrid_k$ = function (clazz, qualifier, scopeDefinition) {
    return (this.hasType_kftgse_k$(clazz) ? equals(this.qualifier_1, qualifier) : false) ? equals(this.scopeQualifier_1, scopeDefinition) : false;
  };
  protoOf(BeanDefinition).hashCode = function () {
    var tmp0_safe_receiver = this.qualifier_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    result = imul(31, result) + this.primaryType_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.scopeQualifier_1) | 0;
    return result;
  };
  protoOf(BeanDefinition).component1_7eebsc_k$ = function () {
    return this.scopeQualifier_1;
  };
  protoOf(BeanDefinition).component2_7eebsb_k$ = function () {
    return this.primaryType_1;
  };
  protoOf(BeanDefinition).component3_7eebsa_k$ = function () {
    return this.qualifier_1;
  };
  protoOf(BeanDefinition).component4_7eebs9_k$ = function () {
    return this.definition_1;
  };
  protoOf(BeanDefinition).component5_7eebs8_k$ = function () {
    return this.kind_1;
  };
  protoOf(BeanDefinition).component6_7eebs7_k$ = function () {
    return this.secondaryTypes_1;
  };
  protoOf(BeanDefinition).copy_g0lseo_k$ = function (scopeQualifier, primaryType, qualifier, definition, kind, secondaryTypes) {
    return new BeanDefinition(scopeQualifier, primaryType, qualifier, definition, kind, secondaryTypes);
  };
  protoOf(BeanDefinition).copy$default_fgfhh0_k$ = function (scopeQualifier, primaryType, qualifier, definition, kind, secondaryTypes, $super) {
    scopeQualifier = scopeQualifier === VOID ? this.scopeQualifier_1 : scopeQualifier;
    primaryType = primaryType === VOID ? this.primaryType_1 : primaryType;
    qualifier = qualifier === VOID ? this.qualifier_1 : qualifier;
    definition = definition === VOID ? this.definition_1 : definition;
    kind = kind === VOID ? this.kind_1 : kind;
    secondaryTypes = secondaryTypes === VOID ? this.secondaryTypes_1 : secondaryTypes;
    return $super === VOID ? this.copy_g0lseo_k$(scopeQualifier, primaryType, qualifier, definition, kind, secondaryTypes) : $super.copy_g0lseo_k$.call(this, scopeQualifier, primaryType, qualifier, definition, kind, secondaryTypes);
  };
  function indexKey(clazz, typeQualifier, scopeQualifier) {
    var tmp1_elvis_lhs = typeQualifier == null ? null : typeQualifier.get_value_j01efc_k$();
    var tq = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    return getFullName(clazz) + ':' + tq + ':' + scopeQualifier;
  }
  var Kind_Singleton_instance;
  var Kind_Factory_instance;
  var Kind_Scoped_instance;
  function values() {
    return [Kind_Singleton_getInstance(), Kind_Factory_getInstance(), Kind_Scoped_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'Singleton':
        return Kind_Singleton_getInstance();
      case 'Factory':
        return Kind_Factory_getInstance();
      case 'Scoped':
        return Kind_Scoped_getInstance();
      default:
        Kind_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var Kind_entriesInitialized;
  function Kind_initEntries() {
    if (Kind_entriesInitialized)
      return Unit_getInstance();
    Kind_entriesInitialized = true;
    Kind_Singleton_instance = new Kind('Singleton', 0);
    Kind_Factory_instance = new Kind('Factory', 1);
    Kind_Scoped_instance = new Kind('Scoped', 2);
  }
  var $ENTRIES;
  function Kind(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Kind_Singleton_getInstance() {
    Kind_initEntries();
    return Kind_Singleton_instance;
  }
  function Kind_Factory_getInstance() {
    Kind_initEntries();
    return Kind_Factory_instance;
  }
  function Kind_Scoped_getInstance() {
    Kind_initEntries();
    return Kind_Scoped_instance;
  }
  function Callbacks(onClose) {
    onClose = onClose === VOID ? null : onClose;
    this.onClose_1 = onClose;
  }
  protoOf(Callbacks).get_onClose_l3bvrk_k$ = function () {
    return this.onClose_1;
  };
  protoOf(Callbacks).component1_7eebsc_k$ = function () {
    return this.onClose_1;
  };
  protoOf(Callbacks).copy_1fqpt8_k$ = function (onClose) {
    return new Callbacks(onClose);
  };
  protoOf(Callbacks).copy$default_9bcw56_k$ = function (onClose, $super) {
    onClose = onClose === VOID ? this.onClose_1 : onClose;
    return $super === VOID ? this.copy_1fqpt8_k$(onClose) : $super.copy_1fqpt8_k$.call(this, onClose);
  };
  protoOf(Callbacks).toString = function () {
    return 'Callbacks(onClose=' + this.onClose_1 + ')';
  };
  protoOf(Callbacks).hashCode = function () {
    return this.onClose_1 == null ? 0 : hashCode(this.onClose_1);
  };
  protoOf(Callbacks).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Callbacks))
      return false;
    var tmp0_other_with_cast = other instanceof Callbacks ? other : THROW_CCE();
    if (!equals(this.onClose_1, tmp0_other_with_cast.onClose_1))
      return false;
    return true;
  };
  function KoinDefinition(module_0, factory) {
    this.module_1 = module_0;
    this.factory_1 = factory;
  }
  protoOf(KoinDefinition).get_module_gqgeid_k$ = function () {
    return this.module_1;
  };
  protoOf(KoinDefinition).get_factory_gsiw2n_k$ = function () {
    return this.factory_1;
  };
  protoOf(KoinDefinition).component1_7eebsc_k$ = function () {
    return this.module_1;
  };
  protoOf(KoinDefinition).component2_7eebsb_k$ = function () {
    return this.factory_1;
  };
  protoOf(KoinDefinition).copy_fw2x5j_k$ = function (module_0, factory) {
    return new KoinDefinition(module_0, factory);
  };
  protoOf(KoinDefinition).copy$default_esh854_k$ = function (module_0, factory, $super) {
    module_0 = module_0 === VOID ? this.module_1 : module_0;
    factory = factory === VOID ? this.factory_1 : factory;
    return $super === VOID ? this.copy_fw2x5j_k$(module_0, factory) : $super.copy_fw2x5j_k$.call(this, module_0, factory);
  };
  protoOf(KoinDefinition).toString = function () {
    return 'KoinDefinition(module=' + this.module_1 + ', factory=' + this.factory_1 + ')';
  };
  protoOf(KoinDefinition).hashCode = function () {
    var result = this.module_1.hashCode();
    result = imul(result, 31) + this.factory_1.hashCode() | 0;
    return result;
  };
  protoOf(KoinDefinition).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KoinDefinition))
      return false;
    var tmp0_other_with_cast = other instanceof KoinDefinition ? other : THROW_CCE();
    if (!this.module_1.equals(tmp0_other_with_cast.module_1))
      return false;
    if (!this.factory_1.equals(tmp0_other_with_cast.factory_1))
      return false;
    return true;
  };
  function ClosedScopeException(msg) {
    Exception_init_$Init$(msg, this);
    captureStack(this, ClosedScopeException);
  }
  function DefinitionOverrideException(msg) {
    Exception_init_$Init$(msg, this);
    captureStack(this, DefinitionOverrideException);
  }
  function DefinitionParameterException(str) {
    Exception_init_$Init$(str, this);
    captureStack(this, DefinitionParameterException);
  }
  function InstanceCreationException(msg, parent) {
    Exception_init_$Init$_0(msg, parent, this);
    captureStack(this, InstanceCreationException);
  }
  function KoinAppAlreadyStartedException(msg) {
    Exception_init_$Init$(msg, this);
    captureStack(this, KoinAppAlreadyStartedException);
  }
  function MissingPropertyException(msg) {
    Exception_init_$Init$(msg, this);
    captureStack(this, MissingPropertyException);
  }
  function NoBeanDefFoundException(msg) {
    Exception_init_$Init$(msg, this);
    captureStack(this, NoBeanDefFoundException);
  }
  function NoParameterFoundException(msg) {
    Exception_init_$Init$(msg, this);
    captureStack(this, NoParameterFoundException);
  }
  function ScopeAlreadyCreatedException(s) {
    Exception_init_$Init$(s, this);
    captureStack(this, ScopeAlreadyCreatedException);
  }
  function ScopeNotCreatedException(msg) {
    Exception_init_$Init$(msg, this);
    captureStack(this, ScopeNotCreatedException);
  }
  function ExtensionManager(_koin) {
    this._koin_1 = _koin;
    var tmp = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp.extensions_1 = HashMap_init_$Create$();
  }
  protoOf(ExtensionManager).get__koin_inkklb_k$ = function () {
    return this._koin_1;
  };
  protoOf(ExtensionManager).get_extensions_kxksyl_k$ = function () {
    return this.extensions_1;
  };
  protoOf(ExtensionManager).registerExtension_t5qwzt_k$ = function (id, extension) {
    // Inline function 'kotlin.collections.set' call
    this.extensions_1.put_4fpzoq_k$(id, extension);
    extension.set_koin_xx2ty4_k$(this._koin_1);
  };
  protoOf(ExtensionManager).close_yn9xrc_k$ = function () {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.extensions_1.get_values_ksazhn_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.koin.core.extension.ExtensionManager.close.<anonymous>' call
      element.onClose_84idtj_k$();
    }
  };
  function KoinExtension() {
  }
  function FactoryInstanceFactory(beanDefinition) {
    InstanceFactory.call(this, beanDefinition);
  }
  protoOf(FactoryInstanceFactory).isCreated_2qx692_k$ = function (context) {
    return false;
  };
  protoOf(FactoryInstanceFactory).drop_kiuzvc_k$ = function (scope) {
    var tmp0_safe_receiver = this.get_beanDefinition_b177zg_k$().get_callbacks_8qyswr_k$().get_onClose_l3bvrk_k$();
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(null);
  };
  protoOf(FactoryInstanceFactory).dropAll_wm06si_k$ = function () {
  };
  protoOf(FactoryInstanceFactory).get_4v0byd_k$ = function (context) {
    return this.create_o42e6t_k$(context);
  };
  function InstanceContext(logger, scope, parameters) {
    parameters = parameters === VOID ? null : parameters;
    this.logger_1 = logger;
    this.scope_1 = scope;
    this.parameters_1 = parameters;
  }
  protoOf(InstanceContext).get_logger_g9gejd_k$ = function () {
    return this.logger_1;
  };
  protoOf(InstanceContext).get_scope_iyfcq3_k$ = function () {
    return this.scope_1;
  };
  protoOf(InstanceContext).get_parameters_cl4rkd_k$ = function () {
    return this.parameters_1;
  };
  function Companion_0() {
    Companion_instance_0 = this;
    this.ERROR_SEPARATOR_1 = '\n\t';
  }
  protoOf(Companion_0).get_ERROR_SEPARATOR_l3t0ed_k$ = function () {
    return this.ERROR_SEPARATOR_1;
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function InstanceFactory(beanDefinition) {
    Companion_getInstance_1();
    this.beanDefinition_1 = beanDefinition;
  }
  protoOf(InstanceFactory).get_beanDefinition_b177zg_k$ = function () {
    return this.beanDefinition_1;
  };
  protoOf(InstanceFactory).create_o42e6t_k$ = function (context) {
    context.get_logger_g9gejd_k$().debug_fck32h_k$("| (+) '" + this.beanDefinition_1 + "'");
    try {
      var tmp0_elvis_lhs = context.get_parameters_cl4rkd_k$();
      var parameters = tmp0_elvis_lhs == null ? emptyParametersHolder() : tmp0_elvis_lhs;
      return this.beanDefinition_1.get_definition_y2whcs_k$()(context.get_scope_iyfcq3_k$(), parameters);
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var stack = KoinPlatformTools_getInstance().getStackTrace_pop6za_k$(e);
        context.get_logger_g9gejd_k$().error_5zor4u_k$("* Instance creation error : could not create instance for '" + this.beanDefinition_1 + "': " + stack);
        throw new InstanceCreationException("Could not create instance for '" + this.beanDefinition_1 + "'", e);
      } else {
        throw $p;
      }
    }
  };
  protoOf(InstanceFactory).isCreated$default_htty1b_k$ = function (context, $super) {
    context = context === VOID ? null : context;
    return $super === VOID ? this.isCreated_2qx692_k$(context) : $super.isCreated_2qx692_k$.call(this, context);
  };
  protoOf(InstanceFactory).drop$default_actzlz_k$ = function (scope, $super) {
    scope = scope === VOID ? null : scope;
    var tmp;
    if ($super === VOID) {
      this.drop_kiuzvc_k$(scope);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drop_kiuzvc_k$.call(this, scope);
    }
    return tmp;
  };
  protoOf(InstanceFactory).equals = function (other) {
    var tmp0_safe_receiver = other instanceof InstanceFactory ? other : null;
    var other_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.beanDefinition_1;
    return this.beanDefinition_1.equals(other_0);
  };
  protoOf(InstanceFactory).hashCode = function () {
    return this.beanDefinition_1.hashCode();
  };
  function _set_values__uvbruz($this, _set____db54di) {
    $this.values_1 = _set____db54di;
  }
  function _get_values__tel787($this) {
    return $this.values_1;
  }
  function ScopedInstanceFactory$get$lambda(this$0, $context) {
    return function () {
      var tmp;
      if (!this$0.isCreated_2qx692_k$($context)) {
        var this_0 = this$0.values_1;
        var key = $context.get_scope_iyfcq3_k$().get_id_kntnx8_k$();
        var value = this$0.create_o42e6t_k$($context);
        this_0.put_4fpzoq_k$(key, value);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ScopedInstanceFactory(beanDefinition) {
    InstanceFactory.call(this, beanDefinition);
    var tmp = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp.values_1 = HashMap_init_$Create$();
  }
  protoOf(ScopedInstanceFactory).isCreated_2qx692_k$ = function (context) {
    // Inline function 'kotlin.collections.get' call
    var this_0 = this.values_1;
    var tmp1_safe_receiver = context == null ? null : context.get_scope_iyfcq3_k$();
    var key = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_id_kntnx8_k$();
    return !((isInterface(this_0, Map) ? this_0 : THROW_CCE()).get_wei43m_k$(key) == null);
  };
  protoOf(ScopedInstanceFactory).drop_kiuzvc_k$ = function (scope) {
    if (scope == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.koin.core.instance.ScopedInstanceFactory.drop.<anonymous>' call
      var tmp0_safe_receiver = this.get_beanDefinition_b177zg_k$().get_callbacks_8qyswr_k$().get_onClose_l3bvrk_k$();
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver(this.values_1.get_wei43m_k$(scope.get_id_kntnx8_k$()));
      this.values_1.remove_gppy8k_k$(scope.get_id_kntnx8_k$());
    }
  };
  protoOf(ScopedInstanceFactory).create_o42e6t_k$ = function (context) {
    var tmp;
    if (this.values_1.get_wei43m_k$(context.get_scope_iyfcq3_k$().get_id_kntnx8_k$()) == null) {
      tmp = protoOf(InstanceFactory).create_o42e6t_k$.call(this, context);
    } else {
      var tmp0_elvis_lhs = this.values_1.get_wei43m_k$(context.get_scope_iyfcq3_k$().get_id_kntnx8_k$());
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        var message = 'Scoped instance not found for ' + context.get_scope_iyfcq3_k$().get_id_kntnx8_k$() + ' in ' + this.get_beanDefinition_b177zg_k$();
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(ScopedInstanceFactory).get_4v0byd_k$ = function (context) {
    if (!equals(context.get_scope_iyfcq3_k$().get_scopeQualifier_eby6kf_k$(), this.get_beanDefinition_b177zg_k$().get_scopeQualifier_eby6kf_k$())) {
      // Inline function 'kotlin.error' call
      var message = 'Wrong Scope: trying to open instance for ' + context.get_scope_iyfcq3_k$().get_id_kntnx8_k$() + ' in ' + this.get_beanDefinition_b177zg_k$();
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp = KoinPlatformTools_getInstance();
    tmp.synchronized_72old8_k$(this, ScopedInstanceFactory$get$lambda(this, context));
    var tmp0_elvis_lhs = this.values_1.get_wei43m_k$(context.get_scope_iyfcq3_k$().get_id_kntnx8_k$());
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      var message_0 = 'Scoped instance not found for ' + context.get_scope_iyfcq3_k$().get_id_kntnx8_k$() + ' in ' + this.get_beanDefinition_b177zg_k$();
      throw IllegalStateException_init_$Create$(toString(message_0));
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return tmp_0;
  };
  protoOf(ScopedInstanceFactory).dropAll_wm06si_k$ = function () {
    this.values_1.clear_j9egeb_k$();
  };
  protoOf(ScopedInstanceFactory).refreshInstance_9mc9vg_k$ = function (scopeID, instance) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.values_1;
    var value = !(instance == null) ? instance : THROW_CCE();
    this_0.put_4fpzoq_k$(scopeID, value);
  };
  function _set_value__lx0xdg($this, _set____db54di) {
    $this.value_1 = _set____db54di;
  }
  function _get_value__a43j40($this) {
    return $this.value_1;
  }
  function getValue($this) {
    var tmp0_elvis_lhs = $this.value_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = "Single instance created couldn't return value";
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function SingleInstanceFactory$get$lambda(this$0, $context) {
    return function () {
      var tmp;
      if (!this$0.isCreated_2qx692_k$($context)) {
        this$0.value_1 = this$0.create_o42e6t_k$($context);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function SingleInstanceFactory(beanDefinition) {
    InstanceFactory.call(this, beanDefinition);
    this.value_1 = null;
  }
  protoOf(SingleInstanceFactory).isCreated_2qx692_k$ = function (context) {
    return !(this.value_1 == null);
  };
  protoOf(SingleInstanceFactory).drop_kiuzvc_k$ = function (scope) {
    var tmp0_safe_receiver = this.get_beanDefinition_b177zg_k$().get_callbacks_8qyswr_k$().get_onClose_l3bvrk_k$();
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(this.value_1);
    this.value_1 = null;
  };
  protoOf(SingleInstanceFactory).dropAll_wm06si_k$ = function () {
    this.drop$default_actzlz_k$();
  };
  protoOf(SingleInstanceFactory).create_o42e6t_k$ = function (context) {
    var tmp;
    if (this.value_1 == null) {
      tmp = protoOf(InstanceFactory).create_o42e6t_k$.call(this, context);
    } else {
      tmp = getValue(this);
    }
    return tmp;
  };
  protoOf(SingleInstanceFactory).get_4v0byd_k$ = function (context) {
    var tmp = KoinPlatformTools_getInstance();
    tmp.synchronized_72old8_k$(this, SingleInstanceFactory$get$lambda(this, context));
    return getValue(this);
  };
  function EmptyLogger() {
    Logger.call(this, Level_NONE_getInstance());
  }
  protoOf(EmptyLogger).display_r45kqo_k$ = function (level, msg) {
  };
  function Logger(level) {
    level = level === VOID ? Level_INFO_getInstance() : level;
    this.level_1 = level;
  }
  protoOf(Logger).set_level_e92jfv_k$ = function (_set____db54di) {
    this.level_1 = _set____db54di;
  };
  protoOf(Logger).get_level_ium7h7_k$ = function () {
    return this.level_1;
  };
  protoOf(Logger).debug_fck32h_k$ = function (msg) {
    this.log_c6dgla_k$(Level_DEBUG_getInstance(), msg);
  };
  protoOf(Logger).info_c8jb2c_k$ = function (msg) {
    this.log_c6dgla_k$(Level_INFO_getInstance(), msg);
  };
  protoOf(Logger).warn_mz9voc_k$ = function (msg) {
    this.log_c6dgla_k$(Level_WARNING_getInstance(), msg);
  };
  protoOf(Logger).error_5zor4u_k$ = function (msg) {
    this.log_c6dgla_k$(Level_ERROR_getInstance(), msg);
  };
  protoOf(Logger).isAt_nsqhkh_k$ = function (lvl) {
    return this.level_1.compareTo_30rs7w_k$(lvl) <= 0;
  };
  protoOf(Logger).log_c6dgla_k$ = function (lvl, msg) {
    if (this.isAt_nsqhkh_k$(lvl)) {
      this.display_r45kqo_k$(lvl, msg);
    }
  };
  protoOf(Logger).log_qhov5w_k$ = function (lvl, msg) {
    if (this.isAt_nsqhkh_k$(lvl)) {
      this.display_r45kqo_k$(lvl, msg());
    }
  };
  var Level_DEBUG_instance;
  var Level_INFO_instance;
  var Level_WARNING_instance;
  var Level_ERROR_instance;
  var Level_NONE_instance;
  function values_0() {
    return [Level_DEBUG_getInstance(), Level_INFO_getInstance(), Level_WARNING_getInstance(), Level_ERROR_getInstance(), Level_NONE_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'DEBUG':
        return Level_DEBUG_getInstance();
      case 'INFO':
        return Level_INFO_getInstance();
      case 'WARNING':
        return Level_WARNING_getInstance();
      case 'ERROR':
        return Level_ERROR_getInstance();
      case 'NONE':
        return Level_NONE_getInstance();
      default:
        Level_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var Level_entriesInitialized;
  function Level_initEntries() {
    if (Level_entriesInitialized)
      return Unit_getInstance();
    Level_entriesInitialized = true;
    Level_DEBUG_instance = new Level('DEBUG', 0);
    Level_INFO_instance = new Level('INFO', 1);
    Level_WARNING_instance = new Level('WARNING', 2);
    Level_ERROR_instance = new Level('ERROR', 3);
    Level_NONE_instance = new Level('NONE', 4);
  }
  var $ENTRIES_0;
  function Level(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function get_KOIN_TAG() {
    return KOIN_TAG;
  }
  var KOIN_TAG;
  function Level_DEBUG_getInstance() {
    Level_initEntries();
    return Level_DEBUG_instance;
  }
  function Level_INFO_getInstance() {
    Level_initEntries();
    return Level_INFO_instance;
  }
  function Level_WARNING_getInstance() {
    Level_initEntries();
    return Level_WARNING_instance;
  }
  function Level_ERROR_getInstance() {
    Level_initEntries();
    return Level_ERROR_instance;
  }
  function Level_NONE_getInstance() {
    Level_initEntries();
    return Level_NONE_instance;
  }
  function KoinApplicationDslMarker() {
  }
  protoOf(KoinApplicationDslMarker).equals = function (other) {
    if (!(other instanceof KoinApplicationDslMarker))
      return false;
    other instanceof KoinApplicationDslMarker || THROW_CCE();
    return true;
  };
  protoOf(KoinApplicationDslMarker).hashCode = function () {
    return 0;
  };
  protoOf(KoinApplicationDslMarker).toString = function () {
    return '@org.koin.core.module.KoinApplicationDslMarker()';
  };
  function KoinDslMarker() {
  }
  protoOf(KoinDslMarker).equals = function (other) {
    if (!(other instanceof KoinDslMarker))
      return false;
    other instanceof KoinDslMarker || THROW_CCE();
    return true;
  };
  protoOf(KoinDslMarker).hashCode = function () {
    return 0;
  };
  protoOf(KoinDslMarker).toString = function () {
    return '@org.koin.core.module.KoinDslMarker()';
  };
  function OptionDslMarker() {
  }
  protoOf(OptionDslMarker).equals = function (other) {
    if (!(other instanceof OptionDslMarker))
      return false;
    other instanceof OptionDslMarker || THROW_CCE();
    return true;
  };
  protoOf(OptionDslMarker).hashCode = function () {
    return 0;
  };
  protoOf(OptionDslMarker).toString = function () {
    return '@org.koin.core.module.OptionDslMarker()';
  };
  function Module(_createdAtStart) {
    _createdAtStart = _createdAtStart === VOID ? false : _createdAtStart;
    this._createdAtStart_1 = _createdAtStart;
    this.id_1 = KoinPlatformTools_getInstance().generateId_52067k_k$();
    var tmp = this;
    // Inline function 'kotlin.collections.hashSetOf' call
    tmp.eagerInstances_1 = HashSet_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_0.mappings_1 = HashMap_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.hashSetOf' call
    tmp_1.scopes_1 = HashSet_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_2.includedModules_1 = ArrayList_init_$Create$();
  }
  protoOf(Module).get__createdAtStart_6om28z_k$ = function () {
    return this._createdAtStart_1;
  };
  protoOf(Module).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(Module).set_eagerInstances_w927ss_k$ = function (_set____db54di) {
    this.eagerInstances_1 = _set____db54di;
  };
  protoOf(Module).get_eagerInstances_3ljm7j_k$ = function () {
    return this.eagerInstances_1;
  };
  protoOf(Module).get_mappings_sl63f6_k$ = function () {
    return this.mappings_1;
  };
  protoOf(Module).get_isLoaded_w81k7s_k$ = function () {
    return this.mappings_1.get_size_woubt6_k$() > 0;
  };
  protoOf(Module).get_scopes_jebiqw_k$ = function () {
    return this.scopes_1;
  };
  protoOf(Module).get_includedModules_c46mo2_k$ = function () {
    return this.includedModules_1;
  };
  protoOf(Module).includes_gqhc2p_k$ = function (module_0) {
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = this.includedModules_1;
    addAll(this_0, module_0);
  };
  protoOf(Module).includes_dnzn6p_k$ = function (module_0) {
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = this.includedModules_1;
    addAll_0(this_0, module_0);
  };
  protoOf(Module).scope_mugu2t_k$ = function (qualifier, scopeSet) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    scopeSet(new ScopeDSL(qualifier, this));
    this.scopes_1.add_utx5q5_k$(qualifier);
  };
  protoOf(Module).indexPrimaryType_bfm8x4_k$ = function (instanceFactory) {
    var def = instanceFactory.get_beanDefinition_b177zg_k$();
    var mapping = indexKey(def.get_primaryType_gbcb1_k$(), def.get_qualifier_c4gvsv_k$(), def.get_scopeQualifier_eby6kf_k$());
    this.saveMapping_qui0vd_k$(mapping, instanceFactory);
  };
  protoOf(Module).indexSecondaryTypes_p1wbvf_k$ = function (instanceFactory) {
    var def = instanceFactory.get_beanDefinition_b177zg_k$();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = def.get_secondaryTypes_du752m_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.koin.core.module.Module.indexSecondaryTypes.<anonymous>' call
      var mapping = indexKey(element, def.get_qualifier_c4gvsv_k$(), def.get_scopeQualifier_eby6kf_k$());
      this.saveMapping_qui0vd_k$(mapping, instanceFactory);
    }
  };
  protoOf(Module).prepareForCreationAtStart_txiz47_k$ = function (instanceFactory) {
    this.eagerInstances_1.add_utx5q5_k$(instanceFactory);
  };
  protoOf(Module).saveMapping_qui0vd_k$ = function (mapping, factory) {
    // Inline function 'kotlin.collections.set' call
    this.mappings_1.put_4fpzoq_k$(mapping, factory);
  };
  protoOf(Module).plus_gnzej2_k$ = function (module_0) {
    return listOf_0([this, module_0]);
  };
  protoOf(Module).plus_rx3zjg_k$ = function (modules) {
    return plus(listOf(this), modules);
  };
  protoOf(Module).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof Module))
      THROW_CCE();
    if (!(this.id_1 === other.id_1))
      return false;
    return true;
  };
  protoOf(Module).hashCode = function () {
    return getStringHashCode(this.id_1);
  };
  function flatten(modules) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.collections.mutableSetOf' call
    var this_0 = LinkedHashSet_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.koin.core.module.flatten.<anonymous>' call
    flatten$flat(modules, this_0);
    return this_0;
  }
  function overrideError(factory, mapping) {
    throw new DefinitionOverrideException('Already existing definition for ' + factory.get_beanDefinition_b177zg_k$() + ' at ' + mapping);
  }
  function flatten$flat(modules, newModules) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = modules.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.koin.core.module.flatten.flat.<anonymous>' call
      // Inline function 'kotlin.collections.plusAssign' call
      newModules.add_utx5q5_k$(element);
      flatten$flat(element.includedModules_1, newModules);
    }
  }
  function onOptions(_this__u8e3s4, options) {
    options = options === VOID ? null : options;
    if (!(options == null)) {
      // Inline function 'org.koin.core.module.dsl.withOptions' call
      var def = _this__u8e3s4.get_factory_gsiw2n_k$().get_beanDefinition_b177zg_k$();
      var primary = def.get_qualifier_c4gvsv_k$();
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      options(def);
      if (!equals(def.get_qualifier_c4gvsv_k$(), primary)) {
        _this__u8e3s4.get_module_gqgeid_k$().indexPrimaryType_bfm8x4_k$(_this__u8e3s4.get_factory_gsiw2n_k$());
      }
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!def.get_secondaryTypes_du752m_k$().isEmpty_y1axqb_k$()) {
        _this__u8e3s4.get_module_gqgeid_k$().indexSecondaryTypes_p1wbvf_k$(_this__u8e3s4.get_factory_gsiw2n_k$());
      }
      var tmp;
      if (def.get__createdAtStart_6om28z_k$()) {
        var tmp_0 = _this__u8e3s4.get_factory_gsiw2n_k$();
        tmp = tmp_0 instanceof SingleInstanceFactory;
      } else {
        tmp = false;
      }
      if (tmp) {
        _this__u8e3s4.get_module_gqgeid_k$().prepareForCreationAtStart_txiz47_k$(_this__u8e3s4.get_factory_gsiw2n_k$());
      }
    }
    return _this__u8e3s4;
  }
  function withOptions(_this__u8e3s4, options) {
    var def = _this__u8e3s4.get_factory_gsiw2n_k$().get_beanDefinition_b177zg_k$();
    var primary = def.get_qualifier_c4gvsv_k$();
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.contracts.contract' call
    options(def);
    if (!equals(def.get_qualifier_c4gvsv_k$(), primary)) {
      _this__u8e3s4.get_module_gqgeid_k$().indexPrimaryType_bfm8x4_k$(_this__u8e3s4.get_factory_gsiw2n_k$());
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!def.get_secondaryTypes_du752m_k$().isEmpty_y1axqb_k$()) {
      _this__u8e3s4.get_module_gqgeid_k$().indexSecondaryTypes_p1wbvf_k$(_this__u8e3s4.get_factory_gsiw2n_k$());
    }
    var tmp;
    if (def.get__createdAtStart_6om28z_k$()) {
      var tmp_0 = _this__u8e3s4.get_factory_gsiw2n_k$();
      tmp = tmp_0 instanceof SingleInstanceFactory;
    } else {
      tmp = false;
    }
    if (tmp) {
      _this__u8e3s4.get_module_gqgeid_k$().prepareForCreationAtStart_txiz47_k$(_this__u8e3s4.get_factory_gsiw2n_k$());
    }
    return _this__u8e3s4;
  }
  function getFirstValue($this, clazz) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = $this._values_1.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'org.koin.core.parameter.ParametersHolder.getFirstValue.<anonymous>' call
        if (clazz.isInstance_6tn68w_k$(element)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.koin.core.parameter.ParametersHolder.getFirstValue.<anonymous>' call
      tmp = !(tmp0_safe_receiver == null) ? tmp0_safe_receiver : THROW_CCE();
    }
    return tmp;
  }
  function getIndexedValue($this, clazz) {
    // Inline function 'kotlin.takeIf' call
    var this_0 = $this._values_1.get_c1px32_k$($this.index_1);
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'org.koin.core.parameter.ParametersHolder.getIndexedValue.<anonymous>' call
    if (clazz.isInstance_6tn68w_k$(this_0)) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.koin.core.parameter.ParametersHolder.getIndexedValue.<anonymous>' call
      tmp_0 = !(tmp0_safe_receiver == null) ? tmp0_safe_receiver : THROW_CCE();
    }
    var currentValue = tmp_0;
    if (!(currentValue == null)) {
      $this.increaseIndex_9ck5cw_k$();
    }
    return currentValue;
  }
  function ParametersHolder(_values, useIndexedValues) {
    var tmp;
    if (_values === VOID) {
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp = ArrayList_init_$Create$();
    } else {
      tmp = _values;
    }
    _values = tmp;
    useIndexedValues = useIndexedValues === VOID ? null : useIndexedValues;
    this._values_1 = _values;
    this.useIndexedValues_1 = useIndexedValues;
    this.index_1 = 0;
  }
  protoOf(ParametersHolder).get__values_wfmpnc_k$ = function () {
    return this._values_1;
  };
  protoOf(ParametersHolder).get_useIndexedValues_yl18nf_k$ = function () {
    return this.useIndexedValues_1;
  };
  protoOf(ParametersHolder).get_values_ksazhn_k$ = function () {
    return this._values_1;
  };
  protoOf(ParametersHolder).elementAt_me7q97_k$ = function (i, clazz) {
    var tmp;
    if (this._values_1.get_size_woubt6_k$() > i) {
      var tmp_0 = this._values_1.get_c1px32_k$(i);
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      throw new NoParameterFoundException("Can't get injected parameter #" + i + ' from ' + this + " for type '" + getFullName(clazz) + "'");
    }
    return tmp;
  };
  protoOf(ParametersHolder).set_index_69f5xp_k$ = function (_set____db54di) {
    this.index_1 = _set____db54di;
  };
  protoOf(ParametersHolder).get_index_it478p_k$ = function () {
    return this.index_1;
  };
  protoOf(ParametersHolder).get_aw1de_k$ = function (i) {
    var tmp = this._values_1.get_c1px32_k$(i);
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(ParametersHolder).set_nxz5n_k$ = function (i, t) {
    this._values_1.set_82063s_k$(i, !(t == null) ? t : THROW_CCE());
  };
  protoOf(ParametersHolder).size_23och_k$ = function () {
    return this._values_1.get_size_woubt6_k$();
  };
  protoOf(ParametersHolder).isEmpty_y1axqb_k$ = function () {
    return this.size_23och_k$() === 0;
  };
  protoOf(ParametersHolder).isNotEmpty_cjxbwk_k$ = function () {
    return !this.isEmpty_y1axqb_k$();
  };
  protoOf(ParametersHolder).insert_qzsvdt_k$ = function (index, value) {
    this._values_1.add_dl6gt3_k$(index, value);
    return this;
  };
  protoOf(ParametersHolder).add_ylbznn_k$ = function (value) {
    this._values_1.add_utx5q5_k$(value);
    return this;
  };
  protoOf(ParametersHolder).getOrNull_7uxaxe_k$ = function (clazz) {
    var tmp;
    if (this._values_1.isEmpty_y1axqb_k$()) {
      tmp = null;
    } else {
      var tmp_0;
      switch (this.useIndexedValues_1) {
        case null:
          var tmp1_elvis_lhs = getIndexedValue(this, clazz);
          tmp_0 = tmp1_elvis_lhs == null ? getFirstValue(this, clazz) : tmp1_elvis_lhs;
          break;
        case true:
          tmp_0 = getIndexedValue(this, clazz);
          break;
        default:
          tmp_0 = getFirstValue(this, clazz);
          break;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(ParametersHolder).increaseIndex_9ck5cw_k$ = function () {
    if (this.index_1 < get_lastIndex(this._values_1)) {
      this.index_1 = this.index_1 + 1 | 0;
    }
  };
  protoOf(ParametersHolder).toString = function () {
    return 'DefinitionParameters' + toList_0(this._values_1);
  };
  function emptyParametersHolder() {
    return new ParametersHolder();
  }
  function Qualifier() {
  }
  function _q(name) {
    return new StringQualifier(name);
  }
  function StringQualifier(value) {
    this.value_1 = value;
  }
  protoOf(StringQualifier).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(StringQualifier).toString = function () {
    return this.value_1;
  };
  protoOf(StringQualifier).component1_7eebsc_k$ = function () {
    return this.value_1;
  };
  protoOf(StringQualifier).copy_a35qlh_k$ = function (value) {
    return new StringQualifier(value);
  };
  protoOf(StringQualifier).copy$default_mrados_k$ = function (value, $super) {
    value = value === VOID ? this.value_1 : value;
    return $super === VOID ? this.copy_a35qlh_k$(value) : $super.copy_a35qlh_k$.call(this, value);
  };
  protoOf(StringQualifier).hashCode = function () {
    return getStringHashCode(this.value_1);
  };
  protoOf(StringQualifier).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StringQualifier))
      return false;
    var tmp0_other_with_cast = other instanceof StringQualifier ? other : THROW_CCE();
    if (!(this.value_1 === tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  function TypeQualifier(type) {
    this.type_1 = type;
    this.value_1 = getFullName(this.type_1);
  }
  protoOf(TypeQualifier).get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  protoOf(TypeQualifier).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(TypeQualifier).toString = function () {
    return "q:'" + this.value_1 + "'";
  };
  protoOf(TypeQualifier).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof TypeQualifier))
      THROW_CCE();
    if (!(this.value_1 === other.value_1))
      return false;
    return true;
  };
  protoOf(TypeQualifier).hashCode = function () {
    return getStringHashCode(this.value_1);
  };
  function _get__instances__1pxuuk($this) {
    return $this._instances_1;
  }
  function _get_eagerInstances__e0lc9n($this) {
    return $this.eagerInstances_1;
  }
  function addAllEagerInstances($this, module_0) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = module_0.get_eagerInstances_3ljm7j_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.koin.core.registry.InstanceRegistry.addAllEagerInstances.<anonymous>' call
      // Inline function 'kotlin.collections.set' call
      var this_0 = $this.eagerInstances_1;
      var key = element.hashCode();
      this_0.put_4fpzoq_k$(key, element);
    }
  }
  function loadModule($this, module_0, allowOverride) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = module_0.get_mappings_sl63f6_k$().get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.koin.core.registry.InstanceRegistry.loadModule.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var mapping = element.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var factory = element.get_value_j01efc_k$();
      $this.saveMapping$default_974k59_k$(allowOverride, mapping, factory);
    }
  }
  function createEagerInstances($this, instances) {
    var defaultContext = new InstanceContext($this._koin_1.get_logger_g9gejd_k$(), $this._koin_1.get_scopeRegistry_7zu3y0_k$().get_rootScope_60k1zr_k$());
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = instances.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.koin.core.registry.InstanceRegistry.createEagerInstances.<anonymous>' call
      element.get_4v0byd_k$(defaultContext);
    }
  }
  function unloadModule($this, module_0) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = module_0.get_mappings_sl63f6_k$().get_keys_wop4xp_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.koin.core.registry.InstanceRegistry.unloadModule.<anonymous>' call
      if ($this._instances_1.containsKey_aw81wo_k$(element)) {
        var tmp0_safe_receiver = $this._instances_1.get_wei43m_k$(element);
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.dropAll_wm06si_k$();
        }
        $this._instances_1.remove_gppy8k_k$(element);
      }
    }
  }
  function InstanceRegistry(_koin) {
    this._koin_1 = _koin;
    this._instances_1 = KoinPlatformTools_getInstance().safeHashMap_vw883b_k$();
    var tmp = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp.eagerInstances_1 = HashMap_init_$Create$();
  }
  protoOf(InstanceRegistry).get__koin_inkklb_k$ = function () {
    return this._koin_1;
  };
  protoOf(InstanceRegistry).get_instances_8zuh1x_k$ = function () {
    return this._instances_1;
  };
  protoOf(InstanceRegistry).loadModules_bcbsui_k$ = function (modules, allowOverride) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = modules.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.koin.core.registry.InstanceRegistry.loadModules.<anonymous>' call
      loadModule(this, element, allowOverride);
      addAllEagerInstances(this, element);
    }
  };
  protoOf(InstanceRegistry).createAllEagerInstances_wxccsb_k$ = function () {
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = this.eagerInstances_1.get_values_ksazhn_k$();
    var tmp$ret$0 = copyToArray(this_0);
    var instances = arrayListOf(tmp$ret$0.slice());
    this.eagerInstances_1.clear_j9egeb_k$();
    createEagerInstances(this, instances);
  };
  protoOf(InstanceRegistry).saveMapping_8myqyh_k$ = function (allowOverride, mapping, factory, logWarning) {
    if (this._instances_1.containsKey_aw81wo_k$(mapping)) {
      if (!allowOverride) {
        overrideError(factory, mapping);
      } else {
        if (logWarning) {
          this._koin_1.get_logger_g9gejd_k$().warn_mz9voc_k$("(+) override index '" + mapping + "' -> '" + factory.get_beanDefinition_b177zg_k$() + "'");
        }
      }
    }
    this._koin_1.get_logger_g9gejd_k$().debug_fck32h_k$("(+) index '" + mapping + "' -> '" + factory.get_beanDefinition_b177zg_k$() + "'");
    // Inline function 'kotlin.collections.set' call
    this._instances_1.put_4fpzoq_k$(mapping, factory);
  };
  protoOf(InstanceRegistry).saveMapping$default_974k59_k$ = function (allowOverride, mapping, factory, logWarning, $super) {
    logWarning = logWarning === VOID ? true : logWarning;
    var tmp;
    if ($super === VOID) {
      this.saveMapping_8myqyh_k$(allowOverride, mapping, factory, logWarning);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.saveMapping_8myqyh_k$.call(this, allowOverride, mapping, factory, logWarning);
    }
    return tmp;
  };
  protoOf(InstanceRegistry).resolveDefinition_fwkwr4_k$ = function (clazz, qualifier, scopeQualifier) {
    var indexKey_0 = indexKey(clazz, qualifier, scopeQualifier);
    return this._instances_1.get_wei43m_k$(indexKey_0);
  };
  protoOf(InstanceRegistry).resolveInstance_6trb4v_k$ = function (qualifier, clazz, scopeQualifier, instanceContext) {
    var tmp0_safe_receiver = this.resolveDefinition_fwkwr4_k$(clazz, qualifier, scopeQualifier);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_4v0byd_k$(instanceContext);
    return (tmp == null ? true : !(tmp == null)) ? tmp : null;
  };
  protoOf(InstanceRegistry).dropScopeInstances_j4hg3v_k$ = function (scope) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.filterIsInstance' call
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var this_0 = this._instances_1.get_values_ksazhn_k$();
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      if (element instanceof ScopedInstanceFactory) {
        destination.add_utx5q5_k$(element);
      }
    }
    var tmp0_iterator_0 = destination.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'org.koin.core.registry.InstanceRegistry.dropScopeInstances.<anonymous>' call
      element_0.drop_kiuzvc_k$(scope);
    }
  };
  protoOf(InstanceRegistry).close_yn9xrc_k$ = function () {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this._instances_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.koin.core.registry.InstanceRegistry.close.<anonymous>' call
      // Inline function 'kotlin.collections.component2' call
      var factory = element.get_value_j01efc_k$();
      factory.dropAll_wm06si_k$();
    }
    this._instances_1.clear_j9egeb_k$();
  };
  protoOf(InstanceRegistry).getAll_pvx7te_k$ = function (clazz, instanceContext) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_0 = this._instances_1.get_values_ksazhn_k$();
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.koin.core.registry.InstanceRegistry.getAll.<anonymous>' call
      if (equals(element.get_beanDefinition_b177zg_k$().get_scopeQualifier_eby6kf_k$(), instanceContext.get_scope_iyfcq3_k$().get_scopeQualifier_eby6kf_k$())) {
        destination.add_utx5q5_k$(element);
      }
    }
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$();
    var tmp0_iterator_0 = destination.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'org.koin.core.registry.InstanceRegistry.getAll.<anonymous>' call
      if (element_0.get_beanDefinition_b177zg_k$().get_primaryType_gbcb1_k$().equals(clazz) ? true : element_0.get_beanDefinition_b177zg_k$().get_secondaryTypes_du752m_k$().contains_aljjnj_k$(clazz)) {
        destination_0.add_utx5q5_k$(element_0);
      }
    }
    var this_1 = distinct(destination_0);
    // Inline function 'kotlin.collections.mapTo' call
    var destination_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_1, 10));
    var tmp0_iterator_1 = this_1.iterator_jk1svi_k$();
    while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator_1.next_20eer_k$();
      // Inline function 'org.koin.core.registry.InstanceRegistry.getAll.<anonymous>' call
      var tmp = item.get_4v0byd_k$(instanceContext);
      var tmp$ret$6 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
      destination_1.add_utx5q5_k$(tmp$ret$6);
    }
    return destination_1;
  };
  protoOf(InstanceRegistry).unloadModules_lbocss_k$ = function (modules) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = modules.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.koin.core.registry.InstanceRegistry.unloadModules.<anonymous>' call
      unloadModule(this, element);
    }
  };
  protoOf(InstanceRegistry).size_23och_k$ = function () {
    return this._instances_1.get_size_woubt6_k$();
  };
  function _get__values__6yksts($this) {
    return $this._values_1;
  }
  function PropertyRegistry(_koin) {
    this._koin_1 = _koin;
    this._values_1 = KoinPlatformTools_getInstance().safeHashMap_vw883b_k$();
  }
  protoOf(PropertyRegistry).get__koin_inkklb_k$ = function () {
    return this._koin_1;
  };
  protoOf(PropertyRegistry).saveProperties_qx721n_k$ = function (properties) {
    this._koin_1.get_logger_g9gejd_k$().debug_fck32h_k$('load ' + properties.get_size_woubt6_k$() + ' properties');
    this._values_1.putAll_wgg6cj_k$(properties);
  };
  protoOf(PropertyRegistry).saveProperty_kph4l1_k$ = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    this._values_1.put_4fpzoq_k$(key, value);
  };
  protoOf(PropertyRegistry).deleteProperty_94w4qe_k$ = function (key) {
    this._values_1.remove_gppy8k_k$(key);
  };
  protoOf(PropertyRegistry).getProperty_queixn_k$ = function (key) {
    var tmp = this._values_1.get_wei43m_k$(key);
    return (tmp == null ? true : !(tmp == null)) ? tmp : null;
  };
  protoOf(PropertyRegistry).close_yn9xrc_k$ = function () {
    this._values_1.clear_j9egeb_k$();
  };
  function _get_ROOT_SCOPE_ID__69ax66($this) {
    return $this.ROOT_SCOPE_ID_1;
  }
  function _get__koin__kul7yv($this) {
    return $this._koin_1;
  }
  function _get__scopeDefinitions__3phb96($this) {
    return $this._scopeDefinitions_1;
  }
  function _get__scopes__yy5frn($this) {
    return $this._scopes_1;
  }
  function closeAllScopes($this) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = $this._scopes_1.get_values_ksazhn_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.koin.core.registry.ScopeRegistry.closeAllScopes.<anonymous>' call
      element.close_yn9xrc_k$();
    }
  }
  function loadModule_0($this, module_0) {
    $this._scopeDefinitions_1.addAll_4lagoh_k$(module_0.get_scopes_jebiqw_k$());
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.ROOT_SCOPE_ID_1 = '_root_';
    this.rootScopeQualifier_1 = _q('_root_');
  }
  protoOf(Companion_1).get_rootScopeQualifier_6qrm0v_k$ = function () {
    return this.rootScopeQualifier_1;
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function ScopeRegistry(_koin) {
    Companion_getInstance_2();
    this._koin_1 = _koin;
    this._scopeDefinitions_1 = HashSet_init_$Create$();
    this._scopes_1 = KoinPlatformTools_getInstance().safeHashMap_vw883b_k$();
    this.rootScope_1 = new Scope(Companion_getInstance_2().rootScopeQualifier_1, '_root_', true, this._koin_1);
    this._scopeDefinitions_1.add_utx5q5_k$(this.rootScope_1.get_scopeQualifier_eby6kf_k$());
    // Inline function 'kotlin.collections.set' call
    var this_0 = this._scopes_1;
    var key = this.rootScope_1.get_id_kntnx8_k$();
    var value = this.rootScope_1;
    this_0.put_4fpzoq_k$(key, value);
  }
  protoOf(ScopeRegistry).get_scopeDefinitions_dqva97_k$ = function () {
    return this._scopeDefinitions_1;
  };
  protoOf(ScopeRegistry).get_rootScope_60k1zr_k$ = function () {
    return this.rootScope_1;
  };
  protoOf(ScopeRegistry).getScopeOrNull_d5lpe6_k$ = function (scopeId) {
    return this._scopes_1.get_wei43m_k$(scopeId);
  };
  protoOf(ScopeRegistry).createScope_icmya9_k$ = function (scopeId, qualifier, source) {
    this._koin_1.get_logger_g9gejd_k$().debug_fck32h_k$("|- (+) Scope - id:'" + scopeId + "' q:" + qualifier);
    if (!this._scopeDefinitions_1.contains_aljjnj_k$(qualifier)) {
      this._koin_1.get_logger_g9gejd_k$().debug_fck32h_k$("| Scope '" + qualifier + "' not defined. Creating it ...");
      this._scopeDefinitions_1.add_utx5q5_k$(qualifier);
    }
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this._scopes_1;
    if ((isInterface(this_0, Map) ? this_0 : THROW_CCE()).containsKey_aw81wo_k$(scopeId)) {
      throw new ScopeAlreadyCreatedException("Scope with id '" + scopeId + "' is already created");
    }
    var scope = new Scope(qualifier, scopeId, VOID, this._koin_1);
    if (source == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this._koin_1.get_logger_g9gejd_k$().debug_fck32h_k$("|- Scope source set id:'" + scopeId + "' -> " + toString_0(source));
      scope.set__source_t8jtvy_k$(source);
    }
    scope.linkTo_7k79z5_k$([this.rootScope_1]);
    // Inline function 'kotlin.collections.set' call
    this._scopes_1.put_4fpzoq_k$(scopeId, scope);
    return scope;
  };
  protoOf(ScopeRegistry).createScope$default_tcjbsq_k$ = function (scopeId, qualifier, source, $super) {
    source = source === VOID ? null : source;
    return $super === VOID ? this.createScope_icmya9_k$(scopeId, qualifier, source) : $super.createScope_icmya9_k$.call(this, scopeId, qualifier, source);
  };
  protoOf(ScopeRegistry).deleteScope_p820yn_k$ = function (scopeId) {
    var tmp0_safe_receiver = this._scopes_1.get_wei43m_k$(scopeId);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.deleteScope_yeuy3p_k$(tmp0_safe_receiver);
    }
  };
  protoOf(ScopeRegistry).deleteScope_yeuy3p_k$ = function (scope) {
    this._koin_1.get_instanceRegistry_jmeu6d_k$().dropScopeInstances_j4hg3v_k$(scope);
    this._scopes_1.remove_gppy8k_k$(scope.get_id_kntnx8_k$());
  };
  protoOf(ScopeRegistry).close_yn9xrc_k$ = function () {
    closeAllScopes(this);
    this._scopes_1.clear_j9egeb_k$();
    this._scopeDefinitions_1.clear_j9egeb_k$();
  };
  protoOf(ScopeRegistry).loadScopes_dez92v_k$ = function (modules) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = modules.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.koin.core.registry.ScopeRegistry.loadScopes.<anonymous>' call
      loadModule_0(this, element);
    }
  };
  function _get_linkedScopes__komjf1($this) {
    return $this.linkedScopes_1;
  }
  function _get__callbacks__jvmpss($this) {
    return $this._callbacks_1;
  }
  function _set__closed__rya7c6($this, _set____db54di) {
    $this._closed_1 = _set____db54di;
  }
  function _get__closed__hglk9y($this) {
    return $this._closed_1;
  }
  function resolveInstance($this, qualifier, clazz, parameterDef) {
    if ($this._closed_1) {
      throw new ClosedScopeException("Scope '" + $this.id_1 + "' is closed");
    }
    var parameters = parameterDef == null ? null : parameterDef();
    var localDeque = null;
    if (!(parameters == null)) {
      var tmp = $this._koin_1.get_logger_g9gejd_k$();
      var tmp_0 = Level_DEBUG_getInstance();
      tmp.log_qhov5w_k$(tmp_0, Scope$resolveInstance$lambda(parameters));
      var tmp1_elvis_lhs = $this._parameterStackLocal_1.get_26vq_k$();
      var tmp_1;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_0 = ArrayDeque_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        $this._parameterStackLocal_1.set_bjwkek_k$(this_0);
        tmp_1 = this_0;
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      localDeque = tmp_1;
      localDeque.addFirst_7io6zl_k$(parameters);
    }
    var instanceContext = new InstanceContext($this._koin_1.get_logger_g9gejd_k$(), $this, parameters);
    var value = resolveValue($this, qualifier, clazz, instanceContext, parameterDef);
    if (!(localDeque == null)) {
      $this._koin_1.get_logger_g9gejd_k$().debug_fck32h_k$('| << parameters');
      localDeque.removeFirstOrNull_eges3a_k$();
    }
    return value;
  }
  function resolveValue($this, qualifier, clazz, instanceContext, parameterDef) {
    var tmp0_elvis_lhs = $this._koin_1.get_instanceRegistry_jmeu6d_k$().resolveInstance_6trb4v_k$(qualifier, clazz, $this.scopeQualifier_1, instanceContext);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.koin.core.scope.Scope.resolveValue.<anonymous>' call
      $this._koin_1.get_logger_g9gejd_k$().debug_fck32h_k$("|- ? t:'" + getFullName(clazz) + "' - q:'" + qualifier + "' look in injected parameters");
      var tmp0_safe_receiver = $this._parameterStackLocal_1.get_26vq_k$();
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.firstOrNull_j0zfvq_k$();
      tmp = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.getOrNull_7uxaxe_k$(clazz);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.koin.core.scope.Scope.resolveValue.<anonymous>' call
      var tmp_1;
      if (!$this.isRoot_1) {
        $this._koin_1.get_logger_g9gejd_k$().debug_fck32h_k$("|- ? t:'" + getFullName(clazz) + "' - q:'" + qualifier + "' look at scope source");
        var tmp0_safe_receiver_0 = $this._source_1;
        var tmp_2;
        if (tmp0_safe_receiver_0 == null) {
          tmp_2 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'org.koin.core.scope.Scope.resolveValue.<anonymous>.<anonymous>' call
          var tmp_3;
          if (clazz.isInstance_6tn68w_k$(tmp0_safe_receiver_0) ? qualifier == null : false) {
            var tmp_4 = $this._source_1;
            tmp_3 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : null;
          } else {
            tmp_3 = null;
          }
          tmp_2 = tmp_3;
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = null;
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var tmp2_elvis_lhs = tmp_0;
    var tmp_5;
    if (tmp2_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.koin.core.scope.Scope.resolveValue.<anonymous>' call
      $this._koin_1.get_logger_g9gejd_k$().debug_fck32h_k$("|- ? t:'" + getFullName(clazz) + "' - q:'" + qualifier + "' look in other scopes");
      tmp_5 = findInOtherScope($this, clazz, qualifier, parameterDef);
    } else {
      tmp_5 = tmp2_elvis_lhs;
    }
    var tmp3_elvis_lhs = tmp_5;
    var tmp_6;
    if (tmp3_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$8;
      // Inline function 'org.koin.core.scope.Scope.resolveValue.<anonymous>' call
      if (!(parameterDef == null)) {
        $this._parameterStackLocal_1.remove_ldkf9o_k$();
        $this._koin_1.get_logger_g9gejd_k$().debug_fck32h_k$('|- << parameters');
      }
      throwDefinitionNotFound($this, qualifier, clazz);
      tmp_6 = tmp$ret$8;
    } else {
      tmp_6 = tmp3_elvis_lhs;
    }
    return tmp_6;
  }
  function getFromSource($this, clazz) {
    var tmp;
    if (clazz.isInstance_6tn68w_k$($this._source_1)) {
      var tmp_0 = $this._source_1;
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : null;
    } else {
      tmp = null;
    }
    return tmp;
  }
  function findInOtherScope($this, clazz, qualifier, parameters) {
    var instance = null;
    var tmp0_iterator = $this.linkedScopes_1.iterator_jk1svi_k$();
    $l$loop: while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var scope = tmp0_iterator.next_20eer_k$();
      instance = scope.getOrNull_o6mr2b_k$(clazz, qualifier, parameters);
      if (!(instance == null))
        break $l$loop;
    }
    return instance;
  }
  function throwDefinitionNotFound($this, qualifier, clazz) {
    var tmp;
    if (qualifier == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.koin.core.scope.Scope.throwDefinitionNotFound.<anonymous>' call
      tmp = " and qualifier '" + qualifier + "'";
    }
    var tmp1_elvis_lhs = tmp;
    var qualifierString = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    throw new NoBeanDefFoundException("No definition found for type '" + getFullName(clazz) + "'" + qualifierString + '. Check your Modules configuration and add missing type and/or qualifier!');
  }
  function Scope$resolveInstance$lambda($parameters) {
    return function () {
      return '| >> parameters ' + $parameters + ' ';
    };
  }
  function Scope$close$lambda(this$0) {
    return function () {
      this$0._koin_1.get_logger_g9gejd_k$().debug_fck32h_k$("|- (-) Scope - id:'" + this$0.id_1 + "'");
      var tmp0_iterator = this$0._callbacks_1.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'org.koin.core.scope.Scope.close.<anonymous>.<anonymous>' call
        element.onScopeClose_19cv3p_k$(this$0);
      }
      this$0._callbacks_1.clear_j9egeb_k$();
      this$0._source_1 = null;
      this$0._closed_1 = true;
      this$0._koin_1.get_scopeRegistry_7zu3y0_k$().deleteScope_yeuy3p_k$(this$0);
      return Unit_getInstance();
    };
  }
  function Scope(scopeQualifier, id, isRoot, _koin) {
    isRoot = isRoot === VOID ? false : isRoot;
    this.scopeQualifier_1 = scopeQualifier;
    this.id_1 = id;
    this.isRoot_1 = isRoot;
    this._koin_1 = _koin;
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.linkedScopes_1 = ArrayList_init_$Create$();
    this._source_1 = null;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp_0._callbacks_1 = ArrayList_init_$Create$();
    this._parameterStackLocal_1 = new ThreadLocalRef();
    this._closed_1 = false;
  }
  protoOf(Scope).get_scopeQualifier_eby6kf_k$ = function () {
    return this.scopeQualifier_1;
  };
  protoOf(Scope).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(Scope).get_isRoot_ew5h6d_k$ = function () {
    return this.isRoot_1;
  };
  protoOf(Scope).get__koin_inkklb_k$ = function () {
    return this._koin_1;
  };
  protoOf(Scope).set__source_t8jtvy_k$ = function (_set____db54di) {
    this._source_1 = _set____db54di;
  };
  protoOf(Scope).get__source_v8cndd_k$ = function () {
    return this._source_1;
  };
  protoOf(Scope).get_closed_byjrzp_k$ = function () {
    return this._closed_1;
  };
  protoOf(Scope).isNotClosed_x1h9n9_k$ = function () {
    return !this.get_closed_byjrzp_k$();
  };
  protoOf(Scope).get__parameterStackLocal_ckbl0q_k$ = function () {
    return this._parameterStackLocal_1;
  };
  protoOf(Scope).get_logger_g9gejd_k$ = function () {
    return this._koin_1.get_logger_g9gejd_k$();
  };
  protoOf(Scope).create_kxeb1s_k$ = function (links) {
    this.linkedScopes_1.addAll_4lagoh_k$(links);
  };
  protoOf(Scope).linkTo_7k79z5_k$ = function (scopes) {
    if (!this.isRoot_1) {
      addAll(this.linkedScopes_1, scopes);
    } else {
      // Inline function 'kotlin.error' call
      var message = "Can't add scope link to a root scope";
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(Scope).unlink_cddh9_k$ = function (scopes) {
    if (!this.isRoot_1) {
      removeAll(this.linkedScopes_1, scopes);
    } else {
      // Inline function 'kotlin.error' call
      var message = "Can't remove scope link to a root scope";
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(Scope).getOrNull_o6mr2b_k$ = function (clazz, qualifier, parameters) {
    var tmp;
    try {
      tmp = this.get_80ko8d_k$(clazz, qualifier, parameters);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof ClosedScopeException) {
        var e = $p;
        this._koin_1.get_logger_g9gejd_k$().debug_fck32h_k$('* Scope closed - no instance found for ' + getFullName(clazz) + ' on scope ' + this.toString());
        tmp_0 = null;
      } else {
        if ($p instanceof NoBeanDefFoundException) {
          var e_0 = $p;
          this._koin_1.get_logger_g9gejd_k$().debug_fck32h_k$("* No instance found for type '" + getFullName(clazz) + "' on scope '" + this.toString() + "'");
          tmp_0 = null;
        } else {
          throw $p;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Scope).getOrNull$default_g0m78f_k$ = function (clazz, qualifier, parameters, $super) {
    qualifier = qualifier === VOID ? null : qualifier;
    parameters = parameters === VOID ? null : parameters;
    return $super === VOID ? this.getOrNull_o6mr2b_k$(clazz, qualifier, parameters) : $super.getOrNull_o6mr2b_k$.call(this, clazz, qualifier, parameters);
  };
  protoOf(Scope).get_80ko8d_k$ = function (clazz, qualifier, parameters) {
    var tmp;
    if (this._koin_1.get_logger_g9gejd_k$().isAt_nsqhkh_k$(Level_DEBUG_getInstance())) {
      var tmp_0;
      if (qualifier == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.koin.core.scope.Scope.get.<anonymous>' call
        tmp_0 = " with qualifier '" + qualifier + "'";
      }
      var tmp1_elvis_lhs = tmp_0;
      var qualifierString = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
      this._koin_1.get_logger_g9gejd_k$().display_r45kqo_k$(Level_DEBUG_getInstance(), "|- '" + getFullName(clazz) + "'" + qualifierString + ' ...');
      var start = KoinPlatformTimeTools_getInstance().getTimeInNanoSeconds_rsnqv1_k$();
      var instance = resolveInstance(this, qualifier, clazz, parameters);
      var stop = KoinPlatformTimeTools_getInstance().getTimeInNanoSeconds_rsnqv1_k$();
      // Inline function 'kotlin.Long.div' call
      var this_0 = stop.minus_mfbszm_k$(start);
      var other = Companion_getInstance_3().get_NANO_TO_MILLI_vas3xn_k$();
      var duration = this_0.toDouble_ygsx0s_k$() / other;
      this._koin_1.get_logger_g9gejd_k$().display_r45kqo_k$(Level_DEBUG_getInstance(), "|- '" + getFullName(clazz) + "' in " + duration + ' ms');
      tmp = instance;
    } else {
      tmp = resolveInstance(this, qualifier, clazz, parameters);
    }
    return tmp;
  };
  protoOf(Scope).get$default_5e2jih_k$ = function (clazz, qualifier, parameters, $super) {
    qualifier = qualifier === VOID ? null : qualifier;
    parameters = parameters === VOID ? null : parameters;
    return $super === VOID ? this.get_80ko8d_k$(clazz, qualifier, parameters) : $super.get_80ko8d_k$.call(this, clazz, qualifier, parameters);
  };
  protoOf(Scope).getKoin_18vqwx_k$ = function () {
    return this._koin_1;
  };
  protoOf(Scope).getScope_tojh0k_k$ = function (scopeID) {
    return this.getKoin_18vqwx_k$().getScope_tojh0k_k$(scopeID);
  };
  protoOf(Scope).registerCallback_uh4cbl_k$ = function (callback) {
    // Inline function 'kotlin.collections.plusAssign' call
    this._callbacks_1.add_utx5q5_k$(callback);
  };
  protoOf(Scope).getAll_ad5k2r_k$ = function (clazz) {
    var context = new InstanceContext(this._koin_1.get_logger_g9gejd_k$(), this);
    var tmp = this._koin_1.get_instanceRegistry_jmeu6d_k$().getAll_pvx7te_k$(clazz, context);
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var this_0 = this.linkedScopes_1;
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.koin.core.scope.Scope.getAll.<anonymous>' call
      var list = element.getAll_ad5k2r_k$(clazz);
      addAll_0(destination, list);
    }
    return plus(tmp, destination);
  };
  protoOf(Scope).getProperty_c8t5i6_k$ = function (key, defaultValue) {
    return this._koin_1.getProperty_c8t5i6_k$(key, defaultValue);
  };
  protoOf(Scope).getPropertyOrNull_qqvsxy_k$ = function (key) {
    return this._koin_1.getProperty_uqr2j4_k$(key);
  };
  protoOf(Scope).getProperty_uqr2j4_k$ = function (key) {
    var tmp0_elvis_lhs = this._koin_1.getProperty_uqr2j4_k$(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new MissingPropertyException("Property '" + key + "' not found");
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(Scope).close_yn9xrc_k$ = function () {
    var tmp = KoinPlatformTools_getInstance();
    return tmp.synchronized_72old8_k$(this, Scope$close$lambda(this));
  };
  protoOf(Scope).toString = function () {
    return "['" + this.id_1 + "']";
  };
  function ScopeCallback() {
  }
  function measureDuration(code) {
    // Inline function 'org.koin.core.time.measureTimedValue' call
    var start = KoinPlatformTimeTools_getInstance().getTimeInNanoSeconds_rsnqv1_k$();
    var value = code();
    var stop = KoinPlatformTimeTools_getInstance().getTimeInNanoSeconds_rsnqv1_k$();
    // Inline function 'kotlin.Long.div' call
    var this_0 = stop.minus_mfbszm_k$(start);
    var other = Companion_getInstance_3().get_NANO_TO_MILLI_vas3xn_k$();
    var tmp$ret$0 = this_0.toDouble_ygsx0s_k$() / other;
    return (new Pair(Unit_getInstance(), tmp$ret$0)).get_second_jf7fjx_k$();
  }
  function measureTimedValue(code) {
    var start = KoinPlatformTimeTools_getInstance().getTimeInNanoSeconds_rsnqv1_k$();
    var value = code();
    var stop = KoinPlatformTimeTools_getInstance().getTimeInNanoSeconds_rsnqv1_k$();
    // Inline function 'kotlin.Long.div' call
    var this_0 = stop.minus_mfbszm_k$(start);
    var other = Companion_getInstance_3().get_NANO_TO_MILLI_vas3xn_k$();
    var tmp$ret$0 = this_0.toDouble_ygsx0s_k$() / other;
    return new Pair(value, tmp$ret$0);
  }
  function _set_end__4w58cq($this, _set____db54di) {
    $this.end_1 = _set____db54di;
  }
  function _set_time__9ug0mi($this, _set____db54di) {
    $this.time_1 = _set____db54di;
  }
  function _get_time__de807y($this) {
    return $this.time_1;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.NANO_TO_MILLI_1 = 1000000.0;
  }
  protoOf(Companion_2).get_NANO_TO_MILLI_vas3xn_k$ = function () {
    return this.NANO_TO_MILLI_1;
  };
  protoOf(Companion_2).start_1tchgi_k$ = function () {
    return new Timer();
  };
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function Timer() {
    Companion_getInstance_3();
    this.start_1 = toDuration(KoinPlatformTimeTools_getInstance().getTimeInNanoSeconds_rsnqv1_k$(), DurationUnit_NANOSECONDS_getInstance());
    this.end_1 = Companion_getInstance().get_ZERO_dgocex_k$();
    this.time_1 = Companion_getInstance().get_ZERO_dgocex_k$();
  }
  protoOf(Timer).get_start_5xcpld_k$ = function () {
    return this.start_1;
  };
  protoOf(Timer).get_end_fjaidk_k$ = function () {
    return this.end_1;
  };
  protoOf(Timer).stop_pnug4y_k$ = function () {
    if (equals(this.end_1, Companion_getInstance().get_ZERO_dgocex_k$())) {
      this.end_1 = toDuration(KoinPlatformTimeTools_getInstance().getTimeInNanoSeconds_rsnqv1_k$(), DurationUnit_NANOSECONDS_getInstance());
      this.time_1 = Duration__minus_impl_q5cfm7(this.end_1, this.start_1);
    }
  };
  protoOf(Timer).getTimeInSeconds_yztox5_k$ = function () {
    return Duration__toDouble_impl_a56y2b(this.time_1, DurationUnit_SECONDS_getInstance());
  };
  protoOf(Timer).getTimeInMillis_nlapf2_k$ = function () {
    return Duration__toDouble_impl_a56y2b(this.time_1, DurationUnit_MILLISECONDS_getInstance());
  };
  protoOf(Timer).getTimeInNanos_wumpnb_k$ = function () {
    return Duration__toDouble_impl_a56y2b(this.time_1, DurationUnit_NANOSECONDS_getInstance());
  };
  function module_0(createdAtStart, moduleDeclaration) {
    createdAtStart = createdAtStart === VOID ? false : createdAtStart;
    var module_0 = new Module(createdAtStart);
    moduleDeclaration(module_0);
    return module_0;
  }
  function ScopeDSL(scopeQualifier, module_0) {
    this.scopeQualifier_1 = scopeQualifier;
    this.module_1 = module_0;
  }
  protoOf(ScopeDSL).get_scopeQualifier_eby6kf_k$ = function () {
    return this.scopeQualifier_1;
  };
  protoOf(ScopeDSL).get_module_gqgeid_k$ = function () {
    return this.module_1;
  };
  function get_classNames() {
    _init_properties_KClassExt_kt__5ro5b2();
    return classNames;
  }
  var classNames;
  function getFullName(_this__u8e3s4) {
    _init_properties_KClassExt_kt__5ro5b2();
    var tmp0_elvis_lhs = get_classNames().get_wei43m_k$(_this__u8e3s4);
    return tmp0_elvis_lhs == null ? saveCache(_this__u8e3s4) : tmp0_elvis_lhs;
  }
  function saveCache(_this__u8e3s4) {
    _init_properties_KClassExt_kt__5ro5b2();
    var name = KoinPlatformTools_getInstance().getClassName_sthbcr_k$(_this__u8e3s4);
    // Inline function 'kotlin.collections.set' call
    get_classNames().put_4fpzoq_k$(_this__u8e3s4, name);
    return name;
  }
  var properties_initialized_KClassExt_kt_dizwhw;
  function _init_properties_KClassExt_kt__5ro5b2() {
    if (!properties_initialized_KClassExt_kt_dizwhw) {
      properties_initialized_KClassExt_kt_dizwhw = true;
      classNames = KoinPlatformTools_getInstance().safeHashMap_vw883b_k$();
    }
  }
  function _set__koin__b6j8il($this, _set____db54di) {
    $this._koin_1 = _set____db54di;
  }
  function _get__koin__kul7yv_0($this) {
    return $this._koin_1;
  }
  function register($this, koinApplication) {
    if (!($this._koin_1 == null)) {
      throw new KoinAppAlreadyStartedException('A Koin Application has already been started');
    }
    $this._koin_1 = koinApplication.get_koin_wopbyq_k$();
  }
  function GlobalContext() {
    GlobalContext_instance = this;
    this._koin_1 = null;
  }
  protoOf(GlobalContext).get_26vq_k$ = function () {
    var tmp0_elvis_lhs = this._koin_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'KoinApplication has not been started';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(GlobalContext).getOrNull_bcsbgg_k$ = function () {
    return this._koin_1;
  };
  protoOf(GlobalContext).stopKoin_twq61x_k$ = function () {
    var tmp0_safe_receiver = this._koin_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.close_yn9xrc_k$();
    }
    this._koin_1 = null;
  };
  protoOf(GlobalContext).startKoin_cri6n9_k$ = function (koinApplication) {
    register(this, koinApplication);
    return koinApplication;
  };
  protoOf(GlobalContext).startKoin_5fxk64_k$ = function (appDeclaration) {
    var koinApplication = Companion_getInstance_0().init_1xdsg_k$();
    register(this, koinApplication);
    appDeclaration(koinApplication);
    return koinApplication;
  };
  protoOf(GlobalContext).loadKoinModules_pgeopx_k$ = function (module_0, createEagerInstances) {
    this.get_26vq_k$().loadModules$default_98npob_k$(listOf(module_0), VOID, createEagerInstances);
  };
  protoOf(GlobalContext).loadKoinModules_vsyvvn_k$ = function (modules, createEagerInstances) {
    this.get_26vq_k$().loadModules$default_98npob_k$(modules, VOID, createEagerInstances);
  };
  protoOf(GlobalContext).unloadKoinModules_djc75l_k$ = function (module_0) {
    this.get_26vq_k$().unloadModules_7hifhu_k$(listOf(module_0));
  };
  protoOf(GlobalContext).unloadKoinModules_qk68bb_k$ = function (modules) {
    this.get_26vq_k$().unloadModules_7hifhu_k$(modules);
  };
  var GlobalContext_instance;
  function GlobalContext_getInstance() {
    if (GlobalContext_instance == null)
      new GlobalContext();
    return GlobalContext_instance;
  }
  function PrintLogger(level) {
    level = level === VOID ? Level_INFO_getInstance() : level;
    Logger.call(this, level);
  }
  protoOf(PrintLogger).display_r45kqo_k$ = function (level, msg) {
    println('[' + level + '] ' + get_KOIN_TAG() + ' ' + msg);
  };
  function TimeSource() {
  }
  function getTimeSource() {
    var tmp = typeof process !== 'undefined' && process.versions && !!process.versions.node;
    var isNode = (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE();
    var tmp_0;
    if (isNode) {
      tmp_0 = new NodeJsHrTimeSource();
    } else {
      var tmp_1 = self.performance && !!self.performance.now;
      var isPerformanceNowSupported = (!(tmp_1 == null) ? typeof tmp_1 === 'boolean' : false) ? tmp_1 : THROW_CCE();
      var tmp_2;
      if (isPerformanceNowSupported) {
        tmp_2 = new PerformanceNowTimeSource();
      } else {
        tmp_2 = new DateNowTimeSource();
      }
      tmp_0 = tmp_2;
    }
    return tmp_0;
  }
  function NodeJsHrTimeSource() {
  }
  protoOf(NodeJsHrTimeSource).markNow_dvnky1_k$ = function () {
    var tmp = process.hrtime();
    var tmp0_container = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
    // Inline function 'kotlin.collections.component1' call
    var seconds = tmp0_container[0];
    // Inline function 'kotlin.collections.component2' call
    var nanos = tmp0_container[1];
    return roundToLong(seconds * 1000000000 + nanos);
  };
  function PerformanceNowTimeSource() {
  }
  protoOf(PerformanceNowTimeSource).markNow_dvnky1_k$ = function () {
    var tmp = self.performance.now();
    return roundToLong(((!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE()) * 1000000);
  };
  function DateNowTimeSource() {
  }
  protoOf(DateNowTimeSource).markNow_dvnky1_k$ = function () {
    return roundToLong(Date.now() * 1000000);
  };
  function KoinPlatformTimeTools() {
    KoinPlatformTimeTools_instance = this;
  }
  protoOf(KoinPlatformTimeTools).getTimeInNanoSeconds_rsnqv1_k$ = function () {
    return getTimeSource().markNow_dvnky1_k$();
  };
  var KoinPlatformTimeTools_instance;
  function KoinPlatformTimeTools_getInstance() {
    if (KoinPlatformTimeTools_instance == null)
      new KoinPlatformTimeTools();
    return KoinPlatformTimeTools_instance;
  }
  function KoinPlatformTools() {
    KoinPlatformTools_instance = this;
  }
  protoOf(KoinPlatformTools).getStackTrace_pop6za_k$ = function (e) {
    return e.toString() + split(Exception_init_$Create$().toString(), ['\n']);
  };
  protoOf(KoinPlatformTools).getClassName_sthbcr_k$ = function (kClass) {
    var tmp0_elvis_lhs = kClass.get_simpleName_r6f8py_k$();
    return tmp0_elvis_lhs == null ? 'KClass@' + kClass.hashCode() : tmp0_elvis_lhs;
  };
  protoOf(KoinPlatformTools).generateId_52067k_k$ = function () {
    return getNumberHashCode(Default_getInstance().nextDouble_s2xvfg_k$()).toString();
  };
  protoOf(KoinPlatformTools).defaultLazyMode_cannh4_k$ = function () {
    return LazyThreadSafetyMode_NONE_getInstance();
  };
  protoOf(KoinPlatformTools).defaultLogger_loj8wr_k$ = function (level) {
    return new PrintLogger(level);
  };
  protoOf(KoinPlatformTools).defaultLogger$default_zbbg1g_k$ = function (level, $super) {
    level = level === VOID ? Level_INFO_getInstance() : level;
    return $super === VOID ? this.defaultLogger_loj8wr_k$(level) : $super.defaultLogger_loj8wr_k$.call(this, level);
  };
  protoOf(KoinPlatformTools).defaultContext_m5e9ci_k$ = function () {
    return GlobalContext_getInstance();
  };
  protoOf(KoinPlatformTools).synchronized_72old8_k$ = function (lock, block) {
    return block();
  };
  protoOf(KoinPlatformTools).safeHashMap_vw883b_k$ = function () {
    return HashMap_init_$Create$();
  };
  var KoinPlatformTools_instance;
  function KoinPlatformTools_getInstance() {
    if (KoinPlatformTools_instance == null)
      new KoinPlatformTools();
    return KoinPlatformTools_instance;
  }
  //region block: post-declaration
  protoOf(GlobalContext).loadKoinModules$default_cywt0t_k$ = loadKoinModules$default;
  protoOf(GlobalContext).loadKoinModules$default_ataqzz_k$ = loadKoinModules$default_0;
  //endregion
  //region block: init
  KOIN_TAG = '[Koin]';
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Kind_Factory_getInstance;
  _.$_$.b = Kind_Singleton_getInstance;
  _.$_$.c = Companion_getInstance_2;
  _.$_$.d = startKoin;
  _.$_$.e = BeanDefinition;
  _.$_$.f = KoinDefinition;
  _.$_$.g = FactoryInstanceFactory;
  _.$_$.h = SingleInstanceFactory;
  _.$_$.i = onOptions;
  _.$_$.j = module_0;
  //endregion
  return _;
}));
