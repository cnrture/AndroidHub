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
  var Unit_instance = kotlin_kotlin.$_$.k5;
  var protoOf = kotlin_kotlin.$_$.ic;
  var Pair = kotlin_kotlin.$_$.kg;
  var classMeta = kotlin_kotlin.$_$.xa;
  var setMetadataFor = kotlin_kotlin.$_$.jc;
  var VOID = kotlin_kotlin.$_$.g;
  var objectMeta = kotlin_kotlin.$_$.hc;
  var emptyList = kotlin_kotlin.$_$.i7;
  var equals = kotlin_kotlin.$_$.ab;
  var joinToString = kotlin_kotlin.$_$.d8;
  var THROW_CCE = kotlin_kotlin.$_$.ng;
  var hashCode = kotlin_kotlin.$_$.kb;
  var Enum = kotlin_kotlin.$_$.bg;
  var Exception = kotlin_kotlin.$_$.dg;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.p1;
  var captureStack = kotlin_kotlin.$_$.ra;
  var Exception_init_$Init$_0 = kotlin_kotlin.$_$.r1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.q;
  var toString = kotlin_kotlin.$_$.nc;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.u;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.n;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var getStringHashCode = kotlin_kotlin.$_$.jb;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.z;
  var get_lastIndex = kotlin_kotlin.$_$.g8;
  var toList = kotlin_kotlin.$_$.l9;
  var copyToArray = kotlin_kotlin.$_$.g7;
  var arrayListOf = kotlin_kotlin.$_$.i6;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.l;
  var ThreadLocalRef = kotlin_co_touchlab_stately_concurrency.$_$.a;
  var isArray = kotlin_kotlin.$_$.nb;
  var roundToLong = kotlin_kotlin.$_$.tc;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.o1;
  var split = kotlin_kotlin.$_$.ve;
  var Default_getInstance = kotlin_kotlin.$_$.a5;
  var getNumberHashCode = kotlin_kotlin.$_$.gb;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Koin, 'Koin', classMeta, VOID, VOID, Koin);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(KoinApplication, 'KoinApplication', classMeta);
  setMetadataFor(BeanDefinition, 'BeanDefinition', classMeta);
  setMetadataFor(Kind, 'Kind', classMeta, Enum);
  setMetadataFor(Callbacks, 'Callbacks', classMeta, VOID, VOID, Callbacks);
  setMetadataFor(KoinDefinition, 'KoinDefinition', classMeta);
  setMetadataFor(ClosedScopeException, 'ClosedScopeException', classMeta, Exception);
  setMetadataFor(DefinitionOverrideException, 'DefinitionOverrideException', classMeta, Exception);
  setMetadataFor(InstanceCreationException, 'InstanceCreationException', classMeta, Exception);
  setMetadataFor(KoinAppAlreadyStartedException, 'KoinAppAlreadyStartedException', classMeta, Exception);
  setMetadataFor(NoBeanDefFoundException, 'NoBeanDefFoundException', classMeta, Exception);
  setMetadataFor(ExtensionManager, 'ExtensionManager', classMeta);
  setMetadataFor(InstanceFactory, 'InstanceFactory', classMeta);
  setMetadataFor(FactoryInstanceFactory, 'FactoryInstanceFactory', classMeta, InstanceFactory);
  setMetadataFor(InstanceContext, 'InstanceContext', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(SingleInstanceFactory, 'SingleInstanceFactory', classMeta, InstanceFactory);
  setMetadataFor(Logger, 'Logger', classMeta);
  setMetadataFor(EmptyLogger, 'EmptyLogger', classMeta, Logger, VOID, EmptyLogger);
  setMetadataFor(Level, 'Level', classMeta, Enum);
  setMetadataFor(Module, 'Module', classMeta, VOID, VOID, Module);
  setMetadataFor(ParametersHolder, 'ParametersHolder', classMeta, VOID, VOID, ParametersHolder);
  setMetadataFor(StringQualifier, 'StringQualifier', classMeta);
  setMetadataFor(InstanceRegistry, 'InstanceRegistry', classMeta);
  setMetadataFor(PropertyRegistry, 'PropertyRegistry', classMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(ScopeRegistry, 'ScopeRegistry', classMeta);
  setMetadataFor(Scope, 'Scope', classMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(GlobalContext, 'GlobalContext', objectMeta);
  setMetadataFor(NodeJsHrTimeSource, 'NodeJsHrTimeSource', classMeta, VOID, VOID, NodeJsHrTimeSource);
  setMetadataFor(PerformanceNowTimeSource, 'PerformanceNowTimeSource', classMeta, VOID, VOID, PerformanceNowTimeSource);
  setMetadataFor(DateNowTimeSource, 'DateNowTimeSource', classMeta, VOID, VOID, DateNowTimeSource);
  setMetadataFor(KoinPlatformTimeTools, 'KoinPlatformTimeTools', objectMeta);
  setMetadataFor(KoinPlatformTools, 'KoinPlatformTools', objectMeta);
  //endregion
  function Koin() {
    this.j78_1 = new ScopeRegistry(this);
    this.k78_1 = new InstanceRegistry(this);
    this.l78_1 = new PropertyRegistry(this);
    this.m78_1 = new ExtensionManager(this);
    this.n78_1 = new EmptyLogger();
  }
  protoOf(Koin).o78 = function (modules, allowOverride, createEagerInstances) {
    var flattedModules = flatten(modules);
    this.k78_1.s78(flattedModules, allowOverride);
    this.j78_1.x78(flattedModules);
    if (createEagerInstances) {
      this.y78();
    }
  };
  protoOf(Koin).y78 = function () {
    this.n78_1.a79('Create eager instances ...');
    // Inline function 'org.koin.core.time.measureDuration' call
    // Inline function 'org.koin.core.time.measureTimedValue' call
    var start = KoinPlatformTimeTools_instance.b79();
    this.k78_1.c79();
    var value = Unit_instance;
    var stop = KoinPlatformTimeTools_instance.b79();
    // Inline function 'kotlin.Long.div' call
    var tmp$ret$0 = stop.fb(start).y6() / 1000000.0;
    var duration = (new Pair(Unit_instance, tmp$ret$0)).re_1;
    this.n78_1.a79('Created eager instances in ' + duration + ' ms');
  };
  function loadModules($this, modules) {
    $this.d79_1.o78(modules, $this.e79_1, false);
  }
  function Companion() {
  }
  protoOf(Companion).f79 = function () {
    var app = new KoinApplication();
    return app;
  };
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function KoinApplication() {
    this.d79_1 = new Koin();
    this.e79_1 = true;
  }
  protoOf(KoinApplication).g79 = function (modules) {
    if (this.d79_1.n78_1.i79(Level_INFO_getInstance())) {
      // Inline function 'org.koin.core.time.measureDuration' call
      // Inline function 'org.koin.core.time.measureTimedValue' call
      var start = KoinPlatformTimeTools_instance.b79();
      loadModules(this, modules);
      var value = Unit_instance;
      var stop = KoinPlatformTimeTools_instance.b79();
      // Inline function 'kotlin.Long.div' call
      var tmp$ret$0 = stop.fb(start).y6() / 1000000.0;
      var duration = (new Pair(Unit_instance, tmp$ret$0)).re_1;
      var count = this.d79_1.k78_1.ko();
      this.d79_1.n78_1.h79(Level_INFO_getInstance(), 'Started ' + count + ' definitions in ' + duration + ' ms');
    } else {
      loadModules(this, modules);
    }
    return this;
  };
  function startKoin(appDeclaration) {
    return KoinPlatformTools_instance.j79().k79(appDeclaration);
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
    this.l79_1 = scopeQualifier;
    this.m79_1 = primaryType;
    this.n79_1 = qualifier;
    this.o79_1 = definition;
    this.p79_1 = kind;
    this.q79_1 = secondaryTypes;
    this.r79_1 = new Callbacks();
    this.s79_1 = false;
  }
  protoOf(BeanDefinition).toString = function () {
    var defKind = this.p79_1.toString();
    var defType = "'" + getFullName(this.m79_1) + "'";
    var tmp;
    if (this.n79_1 == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.koin.core.definition.BeanDefinition.toString.<anonymous>' call
      tmp = ',qualifier:' + this.n79_1;
    }
    var tmp1_elvis_lhs = tmp;
    var defName = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.koin.core.definition.BeanDefinition.toString.<anonymous>' call
    var it = this.l79_1;
    var defScope = equals(it, Companion_getInstance_1().u79_1) ? '' : ',scope:' + this.l79_1;
    var tmp_0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.q79_1.u()) {
      var tmp_1 = this.q79_1;
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
    if (!this.m79_1.equals(other.m79_1))
      return false;
    if (!equals(this.n79_1, other.n79_1))
      return false;
    if (!equals(this.l79_1, other.l79_1))
      return false;
    return true;
  };
  protoOf(BeanDefinition).hashCode = function () {
    var tmp0_safe_receiver = this.n79_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    result = imul(31, result) + this.m79_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.l79_1) | 0;
    return result;
  };
  function indexKey(clazz, typeQualifier, scopeQualifier) {
    var tmp1_elvis_lhs = typeQualifier == null ? null : typeQualifier.q2();
    var tq = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    return getFullName(clazz) + ':' + tq + ':' + scopeQualifier;
  }
  var Kind_Singleton_instance;
  var Kind_Factory_instance;
  var Kind_Scoped_instance;
  var Kind_entriesInitialized;
  function Kind_initEntries() {
    if (Kind_entriesInitialized)
      return Unit_instance;
    Kind_entriesInitialized = true;
    Kind_Singleton_instance = new Kind('Singleton', 0);
    Kind_Factory_instance = new Kind('Factory', 1);
    Kind_Scoped_instance = new Kind('Scoped', 2);
  }
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
  function Callbacks(onClose) {
    onClose = onClose === VOID ? null : onClose;
    this.v79_1 = onClose;
  }
  protoOf(Callbacks).toString = function () {
    return 'Callbacks(onClose=' + this.v79_1 + ')';
  };
  protoOf(Callbacks).hashCode = function () {
    return this.v79_1 == null ? 0 : hashCode(this.v79_1);
  };
  protoOf(Callbacks).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Callbacks))
      return false;
    var tmp0_other_with_cast = other instanceof Callbacks ? other : THROW_CCE();
    if (!equals(this.v79_1, tmp0_other_with_cast.v79_1))
      return false;
    return true;
  };
  function KoinDefinition(module_0, factory) {
    this.w79_1 = module_0;
    this.x79_1 = factory;
  }
  protoOf(KoinDefinition).toString = function () {
    return 'KoinDefinition(module=' + this.w79_1 + ', factory=' + this.x79_1 + ')';
  };
  protoOf(KoinDefinition).hashCode = function () {
    var result = this.w79_1.hashCode();
    result = imul(result, 31) + this.x79_1.hashCode() | 0;
    return result;
  };
  protoOf(KoinDefinition).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KoinDefinition))
      return false;
    var tmp0_other_with_cast = other instanceof KoinDefinition ? other : THROW_CCE();
    if (!this.w79_1.equals(tmp0_other_with_cast.w79_1))
      return false;
    if (!this.x79_1.equals(tmp0_other_with_cast.x79_1))
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
  function InstanceCreationException(msg, parent) {
    Exception_init_$Init$_0(msg, parent, this);
    captureStack(this, InstanceCreationException);
  }
  function KoinAppAlreadyStartedException(msg) {
    Exception_init_$Init$(msg, this);
    captureStack(this, KoinAppAlreadyStartedException);
  }
  function NoBeanDefFoundException(msg) {
    Exception_init_$Init$(msg, this);
    captureStack(this, NoBeanDefFoundException);
  }
  function ExtensionManager(_koin) {
    this.y79_1 = _koin;
    var tmp = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp.z79_1 = HashMap_init_$Create$();
  }
  function FactoryInstanceFactory(beanDefinition) {
    InstanceFactory.call(this, beanDefinition);
  }
  protoOf(FactoryInstanceFactory).b7a = function (context) {
    return this.d7a(context);
  };
  function InstanceContext(logger, scope, parameters) {
    parameters = parameters === VOID ? null : parameters;
    this.e7a_1 = logger;
    this.f7a_1 = scope;
    this.g7a_1 = parameters;
  }
  function Companion_0() {
    this.h7a_1 = '\n\t';
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function InstanceFactory(beanDefinition) {
    this.c7a_1 = beanDefinition;
  }
  protoOf(InstanceFactory).d7a = function (context) {
    context.e7a_1.a79("| (+) '" + this.c7a_1 + "'");
    try {
      var tmp0_elvis_lhs = context.g7a_1;
      var parameters = tmp0_elvis_lhs == null ? emptyParametersHolder() : tmp0_elvis_lhs;
      return this.c7a_1.o79_1(context.f7a_1, parameters);
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var stack = KoinPlatformTools_instance.i7a(e);
        context.e7a_1.j7a("* Instance creation error : could not create instance for '" + this.c7a_1 + "': " + stack);
        throw new InstanceCreationException("Could not create instance for '" + this.c7a_1 + "'", e);
      } else {
        throw $p;
      }
    }
  };
  protoOf(InstanceFactory).equals = function (other) {
    var tmp0_safe_receiver = other instanceof InstanceFactory ? other : null;
    var other_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c7a_1;
    return this.c7a_1.equals(other_0);
  };
  protoOf(InstanceFactory).hashCode = function () {
    return this.c7a_1.hashCode();
  };
  function getValue($this) {
    var tmp0_elvis_lhs = $this.l7a_1;
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
      if (!this$0.m7a($context)) {
        this$0.l7a_1 = this$0.d7a($context);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function SingleInstanceFactory(beanDefinition) {
    InstanceFactory.call(this, beanDefinition);
    this.l7a_1 = null;
  }
  protoOf(SingleInstanceFactory).m7a = function (context) {
    return !(this.l7a_1 == null);
  };
  protoOf(SingleInstanceFactory).d7a = function (context) {
    var tmp;
    if (this.l7a_1 == null) {
      tmp = protoOf(InstanceFactory).d7a.call(this, context);
    } else {
      tmp = getValue(this);
    }
    return tmp;
  };
  protoOf(SingleInstanceFactory).b7a = function (context) {
    var tmp = KoinPlatformTools_instance;
    tmp.n7a(this, SingleInstanceFactory$get$lambda(this, context));
    return getValue(this);
  };
  function EmptyLogger() {
    Logger.call(this, Level_NONE_getInstance());
  }
  protoOf(EmptyLogger).h79 = function (level, msg) {
  };
  function Logger(level) {
    level = level === VOID ? Level_INFO_getInstance() : level;
    this.z78_1 = level;
  }
  protoOf(Logger).a79 = function (msg) {
    this.q7a(Level_DEBUG_getInstance(), msg);
  };
  protoOf(Logger).p7a = function (msg) {
    this.q7a(Level_WARNING_getInstance(), msg);
  };
  protoOf(Logger).j7a = function (msg) {
    this.q7a(Level_ERROR_getInstance(), msg);
  };
  protoOf(Logger).i79 = function (lvl) {
    return this.z78_1.u9(lvl) <= 0;
  };
  protoOf(Logger).q7a = function (lvl, msg) {
    if (this.i79(lvl)) {
      this.h79(lvl, msg);
    }
  };
  protoOf(Logger).r7a = function (lvl, msg) {
    if (this.i79(lvl)) {
      this.h79(lvl, msg());
    }
  };
  var Level_DEBUG_instance;
  var Level_INFO_instance;
  var Level_WARNING_instance;
  var Level_ERROR_instance;
  var Level_NONE_instance;
  var Level_entriesInitialized;
  function Level_initEntries() {
    if (Level_entriesInitialized)
      return Unit_instance;
    Level_entriesInitialized = true;
    Level_DEBUG_instance = new Level('DEBUG', 0);
    Level_INFO_instance = new Level('INFO', 1);
    Level_WARNING_instance = new Level('WARNING', 2);
    Level_ERROR_instance = new Level('ERROR', 3);
    Level_NONE_instance = new Level('NONE', 4);
  }
  function Level(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
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
  function Module(_createdAtStart) {
    _createdAtStart = _createdAtStart === VOID ? false : _createdAtStart;
    this.s7a_1 = _createdAtStart;
    this.t7a_1 = KoinPlatformTools_instance.y7a();
    var tmp = this;
    // Inline function 'kotlin.collections.hashSetOf' call
    tmp.u7a_1 = HashSet_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_0.v7a_1 = HashMap_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.hashSetOf' call
    tmp_1.w7a_1 = HashSet_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_2.x7a_1 = ArrayList_init_$Create$();
  }
  protoOf(Module).z7a = function (instanceFactory) {
    var def = instanceFactory.c7a_1;
    var mapping = indexKey(def.m79_1, def.n79_1, def.l79_1);
    this.a7b(mapping, instanceFactory);
  };
  protoOf(Module).b7b = function (instanceFactory) {
    var def = instanceFactory.c7a_1;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = def.q79_1.o();
    while (tmp0_iterator.d1()) {
      var element = tmp0_iterator.f1();
      // Inline function 'org.koin.core.module.Module.indexSecondaryTypes.<anonymous>' call
      var mapping = indexKey(element, def.n79_1, def.l79_1);
      this.a7b(mapping, instanceFactory);
    }
  };
  protoOf(Module).c7b = function (instanceFactory) {
    this.u7a_1.a1(instanceFactory);
  };
  protoOf(Module).a7b = function (mapping, factory) {
    // Inline function 'kotlin.collections.set' call
    this.v7a_1.n2(mapping, factory);
  };
  protoOf(Module).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof Module))
      THROW_CCE();
    if (!(this.t7a_1 === other.t7a_1))
      return false;
    return true;
  };
  protoOf(Module).hashCode = function () {
    return getStringHashCode(this.t7a_1);
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
    throw new DefinitionOverrideException('Already existing definition for ' + factory.c7a_1 + ' at ' + mapping);
  }
  function flatten$flat(modules, newModules) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = modules.o();
    while (tmp0_iterator.d1()) {
      var element = tmp0_iterator.f1();
      // Inline function 'org.koin.core.module.flatten.flat.<anonymous>' call
      // Inline function 'kotlin.collections.plusAssign' call
      newModules.a1(element);
      flatten$flat(element.x7a_1, newModules);
    }
  }
  function onOptions(_this__u8e3s4, options) {
    options = options === VOID ? null : options;
    if (!(options == null)) {
      // Inline function 'org.koin.core.module.dsl.withOptions' call
      var def = _this__u8e3s4.x79_1.c7a_1;
      var primary = def.n79_1;
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      options(def);
      if (!equals(def.n79_1, primary)) {
        _this__u8e3s4.w79_1.z7a(_this__u8e3s4.x79_1);
      }
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!def.q79_1.u()) {
        _this__u8e3s4.w79_1.b7b(_this__u8e3s4.x79_1);
      }
      var tmp;
      if (def.s79_1) {
        var tmp_0 = _this__u8e3s4.x79_1;
        tmp = tmp_0 instanceof SingleInstanceFactory;
      } else {
        tmp = false;
      }
      if (tmp) {
        _this__u8e3s4.w79_1.c7b(_this__u8e3s4.x79_1);
      }
    }
    return _this__u8e3s4;
  }
  function getFirstValue($this, clazz) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = $this.d7b_1.o();
      while (tmp0_iterator.d1()) {
        var element = tmp0_iterator.f1();
        // Inline function 'org.koin.core.parameter.ParametersHolder.getFirstValue.<anonymous>' call
        if (clazz.c7(element)) {
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
    var this_0 = $this.d7b_1.n($this.f7b_1);
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'org.koin.core.parameter.ParametersHolder.getIndexedValue.<anonymous>' call
    if (clazz.c7(this_0)) {
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
      $this.g7b();
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
    this.d7b_1 = _values;
    this.e7b_1 = useIndexedValues;
    this.f7b_1 = 0;
  }
  protoOf(ParametersHolder).h7b = function (clazz) {
    var tmp;
    if (this.d7b_1.u()) {
      tmp = null;
    } else {
      var tmp_0;
      switch (this.e7b_1) {
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
  protoOf(ParametersHolder).g7b = function () {
    if (this.f7b_1 < get_lastIndex(this.d7b_1)) {
      this.f7b_1 = this.f7b_1 + 1 | 0;
    }
  };
  protoOf(ParametersHolder).toString = function () {
    return 'DefinitionParameters' + toList(this.d7b_1);
  };
  function emptyParametersHolder() {
    return new ParametersHolder();
  }
  function _q(name) {
    return new StringQualifier(name);
  }
  function StringQualifier(value) {
    this.i7b_1 = value;
  }
  protoOf(StringQualifier).q2 = function () {
    return this.i7b_1;
  };
  protoOf(StringQualifier).toString = function () {
    return this.i7b_1;
  };
  protoOf(StringQualifier).hashCode = function () {
    return getStringHashCode(this.i7b_1);
  };
  protoOf(StringQualifier).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StringQualifier))
      return false;
    var tmp0_other_with_cast = other instanceof StringQualifier ? other : THROW_CCE();
    if (!(this.i7b_1 === tmp0_other_with_cast.i7b_1))
      return false;
    return true;
  };
  function addAllEagerInstances($this, module_0) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = module_0.u7a_1.o();
    while (tmp0_iterator.d1()) {
      var element = tmp0_iterator.f1();
      // Inline function 'org.koin.core.registry.InstanceRegistry.addAllEagerInstances.<anonymous>' call
      // Inline function 'kotlin.collections.set' call
      var this_0 = $this.r78_1;
      var key = element.hashCode();
      this_0.n2(key, element);
    }
  }
  function loadModule($this, module_0, allowOverride) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = module_0.v7a_1.m2().o();
    while (tmp0_iterator.d1()) {
      var element = tmp0_iterator.f1();
      // Inline function 'org.koin.core.registry.InstanceRegistry.loadModule.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var mapping = element.p2();
      // Inline function 'kotlin.collections.component2' call
      var factory = element.q2();
      $this.j7b(allowOverride, mapping, factory);
    }
  }
  function createEagerInstances($this, instances) {
    var defaultContext = new InstanceContext($this.p78_1.n78_1, $this.p78_1.j78_1.w78_1);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = instances.o();
    while (tmp0_iterator.d1()) {
      var element = tmp0_iterator.f1();
      // Inline function 'org.koin.core.registry.InstanceRegistry.createEagerInstances.<anonymous>' call
      element.b7a(defaultContext);
    }
  }
  function InstanceRegistry(_koin) {
    this.p78_1 = _koin;
    this.q78_1 = KoinPlatformTools_instance.k7b();
    var tmp = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp.r78_1 = HashMap_init_$Create$();
  }
  protoOf(InstanceRegistry).s78 = function (modules, allowOverride) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = modules.o();
    while (tmp0_iterator.d1()) {
      var element = tmp0_iterator.f1();
      // Inline function 'org.koin.core.registry.InstanceRegistry.loadModules.<anonymous>' call
      loadModule(this, element, allowOverride);
      addAllEagerInstances(this, element);
    }
  };
  protoOf(InstanceRegistry).c79 = function () {
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = this.r78_1.l2();
    var tmp$ret$0 = copyToArray(this_0);
    var instances = arrayListOf(tmp$ret$0.slice());
    this.r78_1.h1();
    createEagerInstances(this, instances);
  };
  protoOf(InstanceRegistry).l7b = function (allowOverride, mapping, factory, logWarning) {
    if (this.q78_1.u2(mapping)) {
      if (!allowOverride) {
        overrideError(factory, mapping);
      } else {
        if (logWarning) {
          this.p78_1.n78_1.p7a("(+) override index '" + mapping + "' -> '" + factory.c7a_1 + "'");
        }
      }
    }
    this.p78_1.n78_1.a79("(+) index '" + mapping + "' -> '" + factory.c7a_1 + "'");
    // Inline function 'kotlin.collections.set' call
    this.q78_1.n2(mapping, factory);
  };
  protoOf(InstanceRegistry).j7b = function (allowOverride, mapping, factory, logWarning, $super) {
    logWarning = logWarning === VOID ? true : logWarning;
    var tmp;
    if ($super === VOID) {
      this.l7b(allowOverride, mapping, factory, logWarning);
      tmp = Unit_instance;
    } else {
      tmp = $super.l7b.call(this, allowOverride, mapping, factory, logWarning);
    }
    return tmp;
  };
  protoOf(InstanceRegistry).m7b = function (clazz, qualifier, scopeQualifier) {
    var indexKey_0 = indexKey(clazz, qualifier, scopeQualifier);
    return this.q78_1.x2(indexKey_0);
  };
  protoOf(InstanceRegistry).n7b = function (qualifier, clazz, scopeQualifier, instanceContext) {
    var tmp0_safe_receiver = this.m7b(clazz, qualifier, scopeQualifier);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.b7a(instanceContext);
    return (tmp == null ? true : !(tmp == null)) ? tmp : null;
  };
  protoOf(InstanceRegistry).ko = function () {
    return this.q78_1.m();
  };
  function PropertyRegistry(_koin) {
    this.o7b_1 = _koin;
    this.p7b_1 = KoinPlatformTools_instance.k7b();
  }
  function loadModule_0($this, module_0) {
    $this.u78_1.g1(module_0.w7a_1);
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.t79_1 = '_root_';
    this.u79_1 = _q('_root_');
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function ScopeRegistry(_koin) {
    Companion_getInstance_1();
    this.t78_1 = _koin;
    this.u78_1 = HashSet_init_$Create$();
    this.v78_1 = KoinPlatformTools_instance.k7b();
    this.w78_1 = new Scope(Companion_getInstance_1().u79_1, '_root_', true, this.t78_1);
    this.u78_1.a1(this.w78_1.q7b_1);
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.v78_1;
    var key = this.w78_1.r7b_1;
    var value = this.w78_1;
    this_0.n2(key, value);
  }
  protoOf(ScopeRegistry).x78 = function (modules) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = modules.o();
    while (tmp0_iterator.d1()) {
      var element = tmp0_iterator.f1();
      // Inline function 'org.koin.core.registry.ScopeRegistry.loadScopes.<anonymous>' call
      loadModule_0(this, element);
    }
  };
  function resolveInstance($this, qualifier, clazz, parameterDef) {
    if ($this.y7b_1) {
      throw new ClosedScopeException("Scope '" + $this.r7b_1 + "' is closed");
    }
    var parameters = parameterDef == null ? null : parameterDef();
    var localDeque = null;
    if (!(parameters == null)) {
      var tmp = $this.t7b_1.n78_1;
      var tmp_0 = Level_DEBUG_getInstance();
      tmp.r7a(tmp_0, Scope$resolveInstance$lambda(parameters));
      var tmp1_elvis_lhs = $this.x7b_1.hw();
      var tmp_1;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_0 = ArrayDeque_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        $this.x7b_1.p1z(this_0);
        tmp_1 = this_0;
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      localDeque = tmp_1;
      localDeque.td(parameters);
    }
    var instanceContext = new InstanceContext($this.t7b_1.n78_1, $this, parameters);
    var value = resolveValue($this, qualifier, clazz, instanceContext, parameterDef);
    if (!(localDeque == null)) {
      $this.t7b_1.n78_1.a79('| << parameters');
      localDeque.wd();
    }
    return value;
  }
  function resolveValue($this, qualifier, clazz, instanceContext, parameterDef) {
    var tmp0_elvis_lhs = $this.t7b_1.k78_1.n7b(qualifier, clazz, $this.q7b_1, instanceContext);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.koin.core.scope.Scope.resolveValue.<anonymous>' call
      $this.t7b_1.n78_1.a79("|- ? t:'" + getFullName(clazz) + "' - q:'" + qualifier + "' look in injected parameters");
      var tmp0_safe_receiver = $this.x7b_1.hw();
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.sd();
      tmp = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.h7b(clazz);
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
      if (!$this.s7b_1) {
        $this.t7b_1.n78_1.a79("|- ? t:'" + getFullName(clazz) + "' - q:'" + qualifier + "' look at scope source");
        var tmp0_safe_receiver_0 = $this.v7b_1;
        var tmp_2;
        if (tmp0_safe_receiver_0 == null) {
          tmp_2 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'org.koin.core.scope.Scope.resolveValue.<anonymous>.<anonymous>' call
          var tmp_3;
          if (clazz.c7(tmp0_safe_receiver_0) ? qualifier == null : false) {
            var tmp_4 = $this.v7b_1;
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
      $this.t7b_1.n78_1.a79("|- ? t:'" + getFullName(clazz) + "' - q:'" + qualifier + "' look in other scopes");
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
        $this.x7b_1.e1();
        $this.t7b_1.n78_1.a79('|- << parameters');
      }
      throwDefinitionNotFound($this, qualifier, clazz);
      tmp_6 = tmp$ret$8;
    } else {
      tmp_6 = tmp3_elvis_lhs;
    }
    return tmp_6;
  }
  function findInOtherScope($this, clazz, qualifier, parameters) {
    var instance = null;
    var tmp0_iterator = $this.u7b_1.o();
    $l$loop: while (tmp0_iterator.d1()) {
      var scope = tmp0_iterator.f1();
      instance = scope.z7b(clazz, qualifier, parameters);
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
  function Scope(scopeQualifier, id, isRoot, _koin) {
    isRoot = isRoot === VOID ? false : isRoot;
    this.q7b_1 = scopeQualifier;
    this.r7b_1 = id;
    this.s7b_1 = isRoot;
    this.t7b_1 = _koin;
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.u7b_1 = ArrayList_init_$Create$();
    this.v7b_1 = null;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp_0.w7b_1 = ArrayList_init_$Create$();
    this.x7b_1 = new ThreadLocalRef();
    this.y7b_1 = false;
  }
  protoOf(Scope).z7b = function (clazz, qualifier, parameters) {
    var tmp;
    try {
      tmp = this.a7c(clazz, qualifier, parameters);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof ClosedScopeException) {
        var e = $p;
        this.t7b_1.n78_1.a79('* Scope closed - no instance found for ' + getFullName(clazz) + ' on scope ' + this.toString());
        tmp_0 = null;
      } else {
        if ($p instanceof NoBeanDefFoundException) {
          var e_0 = $p;
          this.t7b_1.n78_1.a79("* No instance found for type '" + getFullName(clazz) + "' on scope '" + this.toString() + "'");
          tmp_0 = null;
        } else {
          throw $p;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Scope).a7c = function (clazz, qualifier, parameters) {
    var tmp;
    if (this.t7b_1.n78_1.i79(Level_DEBUG_getInstance())) {
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
      this.t7b_1.n78_1.h79(Level_DEBUG_getInstance(), "|- '" + getFullName(clazz) + "'" + qualifierString + ' ...');
      var start = KoinPlatformTimeTools_instance.b79();
      var instance = resolveInstance(this, qualifier, clazz, parameters);
      var stop = KoinPlatformTimeTools_instance.b79();
      // Inline function 'kotlin.Long.div' call
      var duration = stop.fb(start).y6() / 1000000.0;
      this.t7b_1.n78_1.h79(Level_DEBUG_getInstance(), "|- '" + getFullName(clazz) + "' in " + duration + ' ms');
      tmp = instance;
    } else {
      tmp = resolveInstance(this, qualifier, clazz, parameters);
    }
    return tmp;
  };
  protoOf(Scope).toString = function () {
    return "['" + this.r7b_1 + "']";
  };
  function Companion_2() {
    this.b7c_1 = 1000000.0;
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    return Companion_instance_2;
  }
  function module_0(createdAtStart, moduleDeclaration) {
    createdAtStart = createdAtStart === VOID ? false : createdAtStart;
    var module_0 = new Module(createdAtStart);
    moduleDeclaration(module_0);
    return module_0;
  }
  function get_classNames() {
    _init_properties_KClassExt_kt__5ro5b2();
    return classNames;
  }
  var classNames;
  function getFullName(_this__u8e3s4) {
    _init_properties_KClassExt_kt__5ro5b2();
    var tmp0_elvis_lhs = get_classNames().x2(_this__u8e3s4);
    return tmp0_elvis_lhs == null ? saveCache(_this__u8e3s4) : tmp0_elvis_lhs;
  }
  function saveCache(_this__u8e3s4) {
    _init_properties_KClassExt_kt__5ro5b2();
    var name = KoinPlatformTools_instance.c7c(_this__u8e3s4);
    // Inline function 'kotlin.collections.set' call
    get_classNames().n2(_this__u8e3s4, name);
    return name;
  }
  var properties_initialized_KClassExt_kt_dizwhw;
  function _init_properties_KClassExt_kt__5ro5b2() {
    if (!properties_initialized_KClassExt_kt_dizwhw) {
      properties_initialized_KClassExt_kt_dizwhw = true;
      classNames = KoinPlatformTools_instance.k7b();
    }
  }
  function register($this, koinApplication) {
    if (!($this.d7c_1 == null)) {
      throw new KoinAppAlreadyStartedException('A Koin Application has already been started');
    }
    $this.d7c_1 = koinApplication.d79_1;
  }
  function GlobalContext() {
    this.d7c_1 = null;
  }
  protoOf(GlobalContext).k79 = function (appDeclaration) {
    var koinApplication = Companion_instance.f79();
    register(this, koinApplication);
    appDeclaration(koinApplication);
    return koinApplication;
  };
  var GlobalContext_instance;
  function GlobalContext_getInstance() {
    return GlobalContext_instance;
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
  protoOf(NodeJsHrTimeSource).e7c = function () {
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
  protoOf(PerformanceNowTimeSource).e7c = function () {
    var tmp = self.performance.now();
    return roundToLong(((!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE()) * 1000000);
  };
  function DateNowTimeSource() {
  }
  protoOf(DateNowTimeSource).e7c = function () {
    return roundToLong(Date.now() * 1000000);
  };
  function KoinPlatformTimeTools() {
  }
  protoOf(KoinPlatformTimeTools).b79 = function () {
    return getTimeSource().e7c();
  };
  var KoinPlatformTimeTools_instance;
  function KoinPlatformTimeTools_getInstance() {
    return KoinPlatformTimeTools_instance;
  }
  function KoinPlatformTools() {
  }
  protoOf(KoinPlatformTools).i7a = function (e) {
    return e.toString() + split(Exception_init_$Create$().toString(), ['\n']);
  };
  protoOf(KoinPlatformTools).c7c = function (kClass) {
    var tmp0_elvis_lhs = kClass.b7();
    return tmp0_elvis_lhs == null ? 'KClass@' + kClass.hashCode() : tmp0_elvis_lhs;
  };
  protoOf(KoinPlatformTools).y7a = function () {
    return getNumberHashCode(Default_getInstance().ig()).toString();
  };
  protoOf(KoinPlatformTools).j79 = function () {
    return GlobalContext_instance;
  };
  protoOf(KoinPlatformTools).n7a = function (lock, block) {
    return block();
  };
  protoOf(KoinPlatformTools).k7b = function () {
    return HashMap_init_$Create$();
  };
  var KoinPlatformTools_instance;
  function KoinPlatformTools_getInstance() {
    return KoinPlatformTools_instance;
  }
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_2 = new Companion_2();
  GlobalContext_instance = new GlobalContext();
  KoinPlatformTimeTools_instance = new KoinPlatformTimeTools();
  KoinPlatformTools_instance = new KoinPlatformTools();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Kind_Factory_getInstance;
  _.$_$.b = Kind_Singleton_getInstance;
  _.$_$.c = Companion_getInstance_1;
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

//# sourceMappingURL=core-koin-core.js.map
