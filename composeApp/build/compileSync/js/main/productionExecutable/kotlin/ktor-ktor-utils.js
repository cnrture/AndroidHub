(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './ktor-ktor-io.js', './kotlinx-coroutines-core.js', './kotlinx-atomicfu.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./ktor-ktor-io.js'), require('./kotlinx-coroutines-core.js'), require('./kotlinx-atomicfu.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-utils'.");
    }
    if (typeof this['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'ktor-ktor-utils'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-utils'.");
    }
    if (typeof this['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'ktor-ktor-utils'.");
    }
    root['ktor-ktor-utils'] = factory(typeof this['ktor-ktor-utils'] === 'undefined' ? {} : this['ktor-ktor-utils'], this['kotlin-kotlin-stdlib'], this['ktor-ktor-io'], this['kotlinx-coroutines-core'], this['kotlinx-atomicfu']);
  }
}(this, function (_, kotlin_kotlin, kotlin_io_ktor_ktor_io, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var charSequenceLength = kotlin_kotlin.$_$.va;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var protoOf = kotlin_kotlin.$_$.ic;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var THROW_CCE = kotlin_kotlin.$_$.ng;
  var Unit_instance = kotlin_kotlin.$_$.k5;
  var getStringHashCode = kotlin_kotlin.$_$.jb;
  var classMeta = kotlin_kotlin.$_$.xa;
  var setMetadataFor = kotlin_kotlin.$_$.jc;
  var interfaceMeta = kotlin_kotlin.$_$.mb;
  var CoroutineImpl = kotlin_kotlin.$_$.ja;
  var VOID = kotlin_kotlin.$_$.g;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.v9;
  var readBytes = kotlin_io_ktor_ktor_io.$_$.u;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.x;
  var equals = kotlin_kotlin.$_$.ab;
  var hashCode = kotlin_kotlin.$_$.kb;
  var MutableMap = kotlin_kotlin.$_$.d6;
  var ensureNotNull = kotlin_kotlin.$_$.fh;
  var Entry = kotlin_kotlin.$_$.y5;
  var isInterface = kotlin_kotlin.$_$.vb;
  var MutableEntry = kotlin_kotlin.$_$.c6;
  var charArray = kotlin_kotlin.$_$.ta;
  var charSequenceGet = kotlin_kotlin.$_$.ua;
  var toString = kotlin_kotlin.$_$.a3;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.y9;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var Element = kotlin_kotlin.$_$.ha;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.r6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var Set = kotlin_kotlin.$_$.f6;
  var toString_0 = kotlin_kotlin.$_$.nc;
  var MutableSet = kotlin_kotlin.$_$.e6;
  var Enum = kotlin_kotlin.$_$.bg;
  var objectMeta = kotlin_kotlin.$_$.hc;
  var firstOrNull = kotlin_kotlin.$_$.p7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.n;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.w;
  var Map = kotlin_kotlin.$_$.z5;
  var emptyMap = kotlin_kotlin.$_$.j7;
  var getBooleanHashCode = kotlin_kotlin.$_$.eb;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.h1;
  var get_lastIndex = kotlin_kotlin.$_$.me;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.t2;
  var Char__plus_impl_qi7pgj = kotlin_kotlin.$_$.x2;
  var equals_0 = kotlin_kotlin.$_$.be;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var Long = kotlin_kotlin.$_$.gg;
  var Comparable = kotlin_kotlin.$_$.yf;
  var isSuspendFunction = kotlin_kotlin.$_$.yb;
  var MutableList = kotlin_kotlin.$_$.b6;
  var objectCreate = kotlin_kotlin.$_$.gc;
  var ArrayList = kotlin_kotlin.$_$.r5;
  var emptyList = kotlin_kotlin.$_$.i7;
  var get_lastIndex_0 = kotlin_kotlin.$_$.g8;
  var last = kotlin_kotlin.$_$.k8;
  var mutableListOf = kotlin_kotlin.$_$.r8;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var extendThrowable = kotlin_kotlin.$_$.bb;
  var captureStack = kotlin_kotlin.$_$.ra;
  var recoverStackTrace = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var Companion_instance = kotlin_kotlin.$_$.f5;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.b3;
  var createFailure = kotlin_kotlin.$_$.eh;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.c3;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.d3;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.x4;
  var Continuation = kotlin_kotlin.$_$.da;
  var fillArrayVal = kotlin_kotlin.$_$.cb;
  var intercepted = kotlin_kotlin.$_$.x9;
  var toList = kotlin_kotlin.$_$.l9;
  var isNaN_0 = kotlin_kotlin.$_$.kh;
  var numberToLong = kotlin_kotlin.$_$.fc;
  var IllegalStateException = kotlin_kotlin.$_$.fg;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.z1;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.f3;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.nh;
  //endregion
  //region block: pre-declaration
  setMetadataFor(AttributeKey, 'AttributeKey', classMeta);
  function get(key) {
    var tmp0_elvis_lhs = this.p7r(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('No instance for key ' + key);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  setMetadataFor(Attributes, 'Attributes', interfaceMeta);
  setMetadataFor($toByteArrayCOROUTINE$0, '$toByteArrayCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(CaseInsensitiveMap, 'CaseInsensitiveMap', classMeta, VOID, [MutableMap], CaseInsensitiveMap);
  setMetadataFor(Entry_0, 'Entry', classMeta, VOID, [MutableEntry]);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, Element]);
  setMetadataFor(DelegatingMutableSet$iterator$1, VOID, classMeta);
  setMetadataFor(DelegatingMutableSet, 'DelegatingMutableSet', classMeta, VOID, [MutableSet]);
  setMetadataFor(Platform, 'Platform', classMeta, Enum);
  setMetadataFor(PlatformUtils, 'PlatformUtils', objectMeta);
  function get_0(name) {
    var tmp0_safe_receiver = this.j7t(name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  }
  function forEach(body) {
    var tmp0_iterator = this.l7t().o();
    while (tmp0_iterator.d1()) {
      var element = tmp0_iterator.f1();
      // Inline function 'io.ktor.util.StringValues.forEach.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var k = element.p2();
      // Inline function 'kotlin.collections.component2' call
      var v = element.q2();
      body(k, v);
    }
    return Unit_instance;
  }
  setMetadataFor(StringValues, 'StringValues', interfaceMeta);
  setMetadataFor(StringValuesBuilderImpl, 'StringValuesBuilderImpl', classMeta, VOID, VOID, StringValuesBuilderImpl);
  setMetadataFor(StringValuesImpl, 'StringValuesImpl', classMeta, VOID, [StringValues], StringValuesImpl);
  setMetadataFor(CaseInsensitiveString, 'CaseInsensitiveString', classMeta);
  setMetadataFor(CopyOnWriteHashMap, 'CopyOnWriteHashMap', classMeta, VOID, VOID, CopyOnWriteHashMap);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(GMTDate, 'GMTDate', classMeta, VOID, [Comparable]);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(WeekDay, 'WeekDay', classMeta, Enum);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(Month, 'Month', classMeta, Enum);
  setMetadataFor($proceedLoopCOROUTINE$1, '$proceedLoopCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(PipelineContext, 'PipelineContext', classMeta, VOID, [CoroutineScope], VOID, VOID, VOID, [1, 0]);
  setMetadataFor(DebugPipelineContext, 'DebugPipelineContext', classMeta, PipelineContext, VOID, VOID, VOID, VOID, [1, 0]);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(PhaseContent, 'PhaseContent', classMeta);
  setMetadataFor(Pipeline, 'Pipeline', classMeta, VOID, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(PipelinePhase, 'PipelinePhase', classMeta);
  setMetadataFor(InvalidPhaseException, 'InvalidPhaseException', classMeta, Error);
  setMetadataFor(PipelinePhaseRelation, 'PipelinePhaseRelation', classMeta);
  setMetadataFor(After, 'After', classMeta, PipelinePhaseRelation);
  setMetadataFor(Before, 'Before', classMeta, PipelinePhaseRelation);
  setMetadataFor(Last, 'Last', objectMeta, PipelinePhaseRelation);
  setMetadataFor(SuspendFunctionGun$continuation$1, VOID, classMeta, VOID, [Continuation]);
  setMetadataFor(SuspendFunctionGun, 'SuspendFunctionGun', classMeta, PipelineContext, VOID, VOID, VOID, VOID, [0, 1]);
  setMetadataFor(TypeInfo, 'TypeInfo', classMeta);
  setMetadataFor(AttributesJs, 'AttributesJs', classMeta, VOID, [Attributes], AttributesJs);
  setMetadataFor(InvalidTimestampException, 'InvalidTimestampException', classMeta, IllegalStateException);
  setMetadataFor(KtorSimpleLogger$1, VOID, classMeta);
  setMetadataFor(LogLevel, 'LogLevel', classMeta, Enum);
  setMetadataFor(JsType, 'JsType', objectMeta);
  //endregion
  function AttributeKey(name) {
    this.n7r_1 = name;
    // Inline function 'kotlin.text.isEmpty' call
    var this_0 = this.n7r_1;
    if (charSequenceLength(this_0) === 0) {
      throw IllegalStateException_init_$Create$("Name can't be blank");
    }
  }
  protoOf(AttributeKey).toString = function () {
    return 'AttributeKey: ' + this.n7r_1;
  };
  protoOf(AttributeKey).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof AttributeKey))
      THROW_CCE();
    if (!(this.n7r_1 === other.n7r_1))
      return false;
    return true;
  };
  protoOf(AttributeKey).hashCode = function () {
    return getStringHashCode(this.n7r_1);
  };
  function Attributes() {
  }
  function putAll(_this__u8e3s4, other) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = other.u7r().o();
    while (tmp0_iterator.d1()) {
      var element = tmp0_iterator.f1();
      // Inline function 'io.ktor.util.putAll.<anonymous>' call
      _this__u8e3s4.r7r(element instanceof AttributeKey ? element : THROW_CCE(), other.o7r(element));
    }
  }
  function toByteArray(_this__u8e3s4, $completion) {
    var tmp = new $toByteArrayCOROUTINE$0(_this__u8e3s4, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  }
  function $toByteArrayCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d7s_1 = _this__u8e3s4;
  }
  protoOf($toByteArrayCOROUTINE$0).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 2;
            this.ac_1 = 1;
            suspendResult = this.d7s_1.i7j(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return readBytes(ARGUMENT);
          case 2:
            throw this.dc_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.bc_1 === 2) {
          throw e;
        } else {
          this.ac_1 = this.bc_1;
          this.dc_1 = e;
        }
      }
     while (true);
  };
  function CaseInsensitiveMap$_get_keys_$lambda_ptzlqj($this$$receiver) {
    return $this$$receiver.e7s_1;
  }
  function CaseInsensitiveMap$_get_keys_$lambda_ptzlqj_0($this$$receiver) {
    return caseInsensitive($this$$receiver);
  }
  function CaseInsensitiveMap$_get_entries_$lambda_r32w19($this$$receiver) {
    return new Entry_0($this$$receiver.p2().e7s_1, $this$$receiver.q2());
  }
  function CaseInsensitiveMap$_get_entries_$lambda_r32w19_0($this$$receiver) {
    return new Entry_0(caseInsensitive($this$$receiver.p2()), $this$$receiver.q2());
  }
  function CaseInsensitiveMap() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.g7s_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(CaseInsensitiveMap).m = function () {
    return this.g7s_1.m();
  };
  protoOf(CaseInsensitiveMap).h7s = function (key) {
    return this.g7s_1.u2(new CaseInsensitiveString(key));
  };
  protoOf(CaseInsensitiveMap).u2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.h7s((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).i7s = function (key) {
    return this.g7s_1.x2(caseInsensitive(key));
  };
  protoOf(CaseInsensitiveMap).x2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.i7s((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).u = function () {
    return this.g7s_1.u();
  };
  protoOf(CaseInsensitiveMap).h1 = function () {
    this.g7s_1.h1();
  };
  protoOf(CaseInsensitiveMap).j7s = function (key, value) {
    return this.g7s_1.n2(caseInsensitive(key), value);
  };
  protoOf(CaseInsensitiveMap).n2 = function (key, value) {
    var tmp = (!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE();
    return this.j7s(tmp, !(value == null) ? value : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).k7s = function (from) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = from.m2().o();
    while (tmp0_iterator.d1()) {
      var element = tmp0_iterator.f1();
      // Inline function 'io.ktor.util.CaseInsensitiveMap.putAll.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var key = element.p2();
      // Inline function 'kotlin.collections.component2' call
      var value = element.q2();
      this.j7s(key, value);
    }
  };
  protoOf(CaseInsensitiveMap).o2 = function (from) {
    return this.k7s(from);
  };
  protoOf(CaseInsensitiveMap).l7s = function (key) {
    return this.g7s_1.r2(caseInsensitive(key));
  };
  protoOf(CaseInsensitiveMap).r2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.l7s((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).k2 = function () {
    var tmp = this.g7s_1.k2();
    var tmp_0 = CaseInsensitiveMap$_get_keys_$lambda_ptzlqj;
    return new DelegatingMutableSet(tmp, tmp_0, CaseInsensitiveMap$_get_keys_$lambda_ptzlqj_0);
  };
  protoOf(CaseInsensitiveMap).m2 = function () {
    var tmp = this.g7s_1.m2();
    var tmp_0 = CaseInsensitiveMap$_get_entries_$lambda_r32w19;
    return new DelegatingMutableSet(tmp, tmp_0, CaseInsensitiveMap$_get_entries_$lambda_r32w19_0);
  };
  protoOf(CaseInsensitiveMap).l2 = function () {
    return this.g7s_1.l2();
  };
  protoOf(CaseInsensitiveMap).equals = function (other) {
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof CaseInsensitiveMap);
    }
    if (tmp)
      return false;
    return equals(other.g7s_1, this.g7s_1);
  };
  protoOf(CaseInsensitiveMap).hashCode = function () {
    return hashCode(this.g7s_1);
  };
  function Entry_0(key, value) {
    this.m7s_1 = key;
    this.n7s_1 = value;
  }
  protoOf(Entry_0).p2 = function () {
    return this.m7s_1;
  };
  protoOf(Entry_0).q2 = function () {
    return this.n7s_1;
  };
  protoOf(Entry_0).hashCode = function () {
    return (527 + hashCode(ensureNotNull(this.m7s_1)) | 0) + hashCode(ensureNotNull(this.n7s_1)) | 0;
  };
  protoOf(Entry_0).equals = function (other) {
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(!(other == null) ? isInterface(other, Entry) : false);
    }
    if (tmp)
      return false;
    return equals(other.p2(), this.m7s_1) ? equals(other.q2(), this.n7s_1) : false;
  };
  protoOf(Entry_0).toString = function () {
    return '' + this.m7s_1 + '=' + this.n7s_1;
  };
  function toCharArray(_this__u8e3s4) {
    var tmp = 0;
    var tmp_0 = _this__u8e3s4.length;
    var tmp_1 = charArray(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      tmp_1[tmp_2] = charSequenceGet(_this__u8e3s4, tmp_2);
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  }
  function isLowerCase(_this__u8e3s4) {
    // Inline function 'kotlin.text.lowercaseChar' call
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = toString(_this__u8e3s4).toLowerCase();
    return charSequenceGet(tmp$ret$2, 0) === _this__u8e3s4;
  }
  function caseInsensitiveMap() {
    return new CaseInsensitiveMap();
  }
  function SilentSupervisor(parent) {
    parent = parent === VOID ? null : parent;
    var tmp = SupervisorJob(parent);
    // Inline function 'kotlinx.coroutines.CoroutineExceptionHandler' call
    var tmp$ret$0 = new _no_name_provided__qut3iv();
    return tmp.yf(tmp$ret$0);
  }
  function _no_name_provided__qut3iv() {
    AbstractCoroutineContextElement.call(this, Key_instance);
  }
  protoOf(_no_name_provided__qut3iv).nv = function (context, exception) {
    // Inline function 'io.ktor.util.SilentSupervisor.<anonymous>' call
    return Unit_instance;
  };
  function DelegatingMutableSet$iterator$1(this$0) {
    this.q7s_1 = this$0;
    this.p7s_1 = this$0.r7s_1.o();
  }
  protoOf(DelegatingMutableSet$iterator$1).d1 = function () {
    return this.p7s_1.d1();
  };
  protoOf(DelegatingMutableSet$iterator$1).f1 = function () {
    return this.q7s_1.s7s_1(this.p7s_1.f1());
  };
  protoOf(DelegatingMutableSet$iterator$1).e1 = function () {
    return this.p7s_1.e1();
  };
  function DelegatingMutableSet(delegate, convertTo, convert) {
    this.r7s_1 = delegate;
    this.s7s_1 = convertTo;
    this.t7s_1 = convert;
    this.u7s_1 = this.r7s_1.m();
  }
  protoOf(DelegatingMutableSet).v7s = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(_this__u8e3s4, 10));
    var tmp0_iterator = _this__u8e3s4.o();
    while (tmp0_iterator.d1()) {
      var item = tmp0_iterator.f1();
      // Inline function 'io.ktor.util.DelegatingMutableSet.convert.<anonymous>' call
      var tmp$ret$0 = this.t7s_1(item);
      destination.a1(tmp$ret$0);
    }
    return destination;
  };
  protoOf(DelegatingMutableSet).w7s = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(_this__u8e3s4, 10));
    var tmp0_iterator = _this__u8e3s4.o();
    while (tmp0_iterator.d1()) {
      var item = tmp0_iterator.f1();
      // Inline function 'io.ktor.util.DelegatingMutableSet.convertTo.<anonymous>' call
      var tmp$ret$0 = this.s7s_1(item);
      destination.a1(tmp$ret$0);
    }
    return destination;
  };
  protoOf(DelegatingMutableSet).m = function () {
    return this.u7s_1;
  };
  protoOf(DelegatingMutableSet).x7s = function (element) {
    return this.r7s_1.a1(this.t7s_1(element));
  };
  protoOf(DelegatingMutableSet).a1 = function (element) {
    return this.x7s((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(DelegatingMutableSet).y7s = function (elements) {
    return this.r7s_1.g1(this.v7s(elements));
  };
  protoOf(DelegatingMutableSet).g1 = function (elements) {
    return this.y7s(elements);
  };
  protoOf(DelegatingMutableSet).h1 = function () {
    this.r7s_1.h1();
  };
  protoOf(DelegatingMutableSet).z7s = function (element) {
    return this.r7s_1.b1(this.t7s_1(element));
  };
  protoOf(DelegatingMutableSet).b1 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.z7s((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(DelegatingMutableSet).a7t = function (element) {
    return this.r7s_1.s(this.t7s_1(element));
  };
  protoOf(DelegatingMutableSet).s = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.a7t((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(DelegatingMutableSet).b7t = function (elements) {
    return this.r7s_1.t(this.v7s(elements));
  };
  protoOf(DelegatingMutableSet).t = function (elements) {
    return this.b7t(elements);
  };
  protoOf(DelegatingMutableSet).u = function () {
    return this.r7s_1.u();
  };
  protoOf(DelegatingMutableSet).o = function () {
    return new DelegatingMutableSet$iterator$1(this);
  };
  protoOf(DelegatingMutableSet).hashCode = function () {
    return hashCode(this.r7s_1);
  };
  protoOf(DelegatingMutableSet).equals = function (other) {
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(!(other == null) ? isInterface(other, Set) : false);
    }
    if (tmp)
      return false;
    var elements = this.w7s(this.r7s_1);
    var tmp_0;
    if (other.t(elements)) {
      // Inline function 'kotlin.collections.containsAll' call
      tmp_0 = elements.t(other);
    } else {
      tmp_0 = false;
    }
    return tmp_0;
  };
  protoOf(DelegatingMutableSet).toString = function () {
    return toString_0(this.w7s(this.r7s_1));
  };
  var Platform_Jvm_instance;
  var Platform_Native_instance;
  var Platform_Browser_instance;
  var Platform_Node_instance;
  var Platform_entriesInitialized;
  function Platform_initEntries() {
    if (Platform_entriesInitialized)
      return Unit_instance;
    Platform_entriesInitialized = true;
    Platform_Jvm_instance = new Platform('Jvm', 0);
    Platform_Native_instance = new Platform('Native', 1);
    Platform_Browser_instance = new Platform('Browser', 2);
    Platform_Node_instance = new Platform('Node', 3);
  }
  function Platform(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PlatformUtils() {
    PlatformUtils_instance = this;
    this.c7t_1 = get_platform(this).equals(Platform_Browser_getInstance());
    this.d7t_1 = get_platform(this).equals(Platform_Node_getInstance());
    this.e7t_1 = get_platform(this).equals(Platform_Jvm_getInstance());
    this.f7t_1 = get_platform(this).equals(Platform_Native_getInstance());
    this.g7t_1 = get_isDevelopmentMode(this);
    this.h7t_1 = get_isNewMemoryModel(this);
  }
  var PlatformUtils_instance;
  function PlatformUtils_getInstance() {
    if (PlatformUtils_instance == null)
      new PlatformUtils();
    return PlatformUtils_instance;
  }
  function Platform_Jvm_getInstance() {
    Platform_initEntries();
    return Platform_Jvm_instance;
  }
  function Platform_Native_getInstance() {
    Platform_initEntries();
    return Platform_Native_instance;
  }
  function Platform_Browser_getInstance() {
    Platform_initEntries();
    return Platform_Browser_instance;
  }
  function Platform_Node_getInstance() {
    Platform_initEntries();
    return Platform_Node_instance;
  }
  function StringValues() {
  }
  function ensureListForKey($this, name) {
    var tmp0_elvis_lhs = $this.o7t_1.x2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.collections.mutableListOf' call
      var this_0 = ArrayList_init_$Create$_0();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.ktor.util.StringValuesBuilderImpl.ensureListForKey.<anonymous>' call
      $this.p7t(name);
      // Inline function 'kotlin.collections.set' call
      $this.o7t_1.n2(name, this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function StringValuesBuilderImpl$appendAll$lambda(this$0) {
    return function (name, values) {
      this$0.q7t(name, values);
      return Unit_instance;
    };
  }
  function StringValuesBuilderImpl(caseInsensitiveName, size) {
    caseInsensitiveName = caseInsensitiveName === VOID ? false : caseInsensitiveName;
    size = size === VOID ? 8 : size;
    this.n7t_1 = caseInsensitiveName;
    this.o7t_1 = this.n7t_1 ? caseInsensitiveMap() : LinkedHashMap_init_$Create$_0(size);
  }
  protoOf(StringValuesBuilderImpl).i7t = function () {
    return this.n7t_1;
  };
  protoOf(StringValuesBuilderImpl).j7t = function (name) {
    return this.o7t_1.x2(name);
  };
  protoOf(StringValuesBuilderImpl).r7t = function (name) {
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this.o7t_1;
    return (isInterface(this_0, Map) ? this_0 : THROW_CCE()).u2(name);
  };
  protoOf(StringValuesBuilderImpl).k7t = function () {
    return this.o7t_1.k2();
  };
  protoOf(StringValuesBuilderImpl).u = function () {
    return this.o7t_1.u();
  };
  protoOf(StringValuesBuilderImpl).l7t = function () {
    return unmodifiable(this.o7t_1.m2());
  };
  protoOf(StringValuesBuilderImpl).s7t = function (name, value) {
    this.t7t(value);
    var list = ensureListForKey(this, name);
    list.h1();
    list.a1(value);
  };
  protoOf(StringValuesBuilderImpl).i7s = function (name) {
    var tmp0_safe_receiver = this.j7t(name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  };
  protoOf(StringValuesBuilderImpl).u7t = function (name, value) {
    this.t7t(value);
    ensureListForKey(this, name).a1(value);
  };
  protoOf(StringValuesBuilderImpl).v7t = function (stringValues) {
    stringValues.m7t(StringValuesBuilderImpl$appendAll$lambda(this));
  };
  protoOf(StringValuesBuilderImpl).q7t = function (name, values) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    var list = ensureListForKey(this, name);
    var tmp0_iterator = values.o();
    while (tmp0_iterator.d1()) {
      var element = tmp0_iterator.f1();
      // Inline function 'io.ktor.util.StringValuesBuilderImpl.appendAll.<anonymous>.<anonymous>' call
      this.t7t(element);
      list.a1(element);
    }
  };
  protoOf(StringValuesBuilderImpl).w7t = function (name) {
    this.o7t_1.r2(name);
  };
  protoOf(StringValuesBuilderImpl).h1 = function () {
    this.o7t_1.h1();
  };
  protoOf(StringValuesBuilderImpl).p7t = function (name) {
  };
  protoOf(StringValuesBuilderImpl).t7t = function (value) {
  };
  function listForKey($this, name) {
    return $this.y7t_1.x2(name);
  }
  function StringValuesImpl(caseInsensitiveName, values) {
    caseInsensitiveName = caseInsensitiveName === VOID ? false : caseInsensitiveName;
    values = values === VOID ? emptyMap() : values;
    this.x7t_1 = caseInsensitiveName;
    var tmp;
    if (this.x7t_1) {
      tmp = caseInsensitiveMap();
    } else {
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp = LinkedHashMap_init_$Create$();
    }
    var newMap = tmp;
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = values.m2().o();
    while (tmp0_iterator.d1()) {
      var element = tmp0_iterator.f1();
      // Inline function 'io.ktor.util.StringValuesImpl.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var key = element.p2();
      // Inline function 'kotlin.collections.component2' call
      var value = element.q2();
      // Inline function 'kotlin.collections.set' call
      // Inline function 'kotlin.collections.List' call
      // Inline function 'kotlin.collections.MutableList' call
      var size = value.m();
      var list = ArrayList_init_$Create$(size);
      // Inline function 'kotlin.repeat' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < size)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlin.collections.MutableList.<anonymous>' call
          // Inline function 'io.ktor.util.StringValuesImpl.<anonymous>.<anonymous>' call
          var tmp$ret$4 = value.n(index);
          list.a1(tmp$ret$4);
        }
         while (inductionVariable < size);
      newMap.n2(key, list);
    }
    this.y7t_1 = newMap;
  }
  protoOf(StringValuesImpl).i7t = function () {
    return this.x7t_1;
  };
  protoOf(StringValuesImpl).i7s = function (name) {
    var tmp0_safe_receiver = listForKey(this, name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  };
  protoOf(StringValuesImpl).j7t = function (name) {
    return listForKey(this, name);
  };
  protoOf(StringValuesImpl).k7t = function () {
    return unmodifiable(this.y7t_1.k2());
  };
  protoOf(StringValuesImpl).u = function () {
    return this.y7t_1.u();
  };
  protoOf(StringValuesImpl).l7t = function () {
    return unmodifiable(this.y7t_1.m2());
  };
  protoOf(StringValuesImpl).m7t = function (body) {
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.y7t_1.m2().o();
    while (tmp0_iterator.d1()) {
      var tmp1_loop_parameter = tmp0_iterator.f1();
      // Inline function 'kotlin.collections.component1' call
      var key = tmp1_loop_parameter.p2();
      // Inline function 'kotlin.collections.component2' call
      var value = tmp1_loop_parameter.q2();
      body(key, value);
    }
  };
  protoOf(StringValuesImpl).toString = function () {
    return 'StringValues(case=' + !this.x7t_1 + ') ' + this.l7t();
  };
  protoOf(StringValuesImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(!(other == null) ? isInterface(other, StringValues) : false))
      return false;
    if (!(this.x7t_1 === other.i7t()))
      return false;
    return entriesEquals(this.l7t(), other.l7t());
  };
  protoOf(StringValuesImpl).hashCode = function () {
    return entriesHashCode(this.l7t(), imul(31, getBooleanHashCode(this.x7t_1)));
  };
  function appendAll(_this__u8e3s4, builder) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.util.appendAll.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = builder.l7t().o();
    while (tmp0_iterator.d1()) {
      var element = tmp0_iterator.f1();
      // Inline function 'io.ktor.util.appendAll.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var name = element.p2();
      // Inline function 'kotlin.collections.component2' call
      var values = element.q2();
      _this__u8e3s4.q7t(name, values);
    }
    return _this__u8e3s4;
  }
  function entriesEquals(a, b) {
    return equals(a, b);
  }
  function entriesHashCode(entries, seed) {
    return imul(seed, 31) + hashCode(entries) | 0;
  }
  function toLowerCasePreservingASCIIRules(_this__u8e3s4) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.text.indexOfFirst' call
      var inductionVariable = 0;
      var last = charSequenceLength(_this__u8e3s4) - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'io.ktor.util.toLowerCasePreservingASCIIRules.<anonymous>' call
          var it = charSequenceGet(_this__u8e3s4, index);
          if (!(toLowerCasePreservingASCII(it) === it)) {
            tmp$ret$1 = index;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = -1;
    }
    var firstIndex = tmp$ret$1;
    if (firstIndex === -1) {
      return _this__u8e3s4;
    }
    var original = _this__u8e3s4;
    // Inline function 'kotlin.text.buildString' call
    var capacity = _this__u8e3s4.length;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$(capacity);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.util.toLowerCasePreservingASCIIRules.<anonymous>' call
    this_0.n8(original, 0, firstIndex);
    var inductionVariable_0 = firstIndex;
    var last_0 = get_lastIndex(original);
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        this_0.y5(toLowerCasePreservingASCII(charSequenceGet(original, index_0)));
      }
       while (!(index_0 === last_0));
    return this_0.toString();
  }
  function toLowerCasePreservingASCII(ch) {
    var tmp;
    if (_Char___init__impl__6a9atx(65) <= ch ? ch <= _Char___init__impl__6a9atx(90) : false) {
      tmp = Char__plus_impl_qi7pgj(ch, 32);
    } else if (_Char___init__impl__6a9atx(0) <= ch ? ch <= _Char___init__impl__6a9atx(127) : false) {
      tmp = ch;
    } else {
      // Inline function 'kotlin.text.lowercaseChar' call
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$2 = toString(ch).toLowerCase();
      tmp = charSequenceGet(tmp$ret$2, 0);
    }
    return tmp;
  }
  function CaseInsensitiveString(content) {
    this.e7s_1 = content;
    var tmp = this;
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = this.e7s_1.toLowerCase();
    tmp.f7s_1 = getStringHashCode(tmp$ret$1);
  }
  protoOf(CaseInsensitiveString).equals = function (other) {
    var tmp0_safe_receiver = other instanceof CaseInsensitiveString ? other : null;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e7s_1;
    return (tmp1_safe_receiver == null ? null : equals_0(tmp1_safe_receiver, this.e7s_1, true)) === true;
  };
  protoOf(CaseInsensitiveString).hashCode = function () {
    return this.f7s_1;
  };
  protoOf(CaseInsensitiveString).toString = function () {
    return this.e7s_1;
  };
  function caseInsensitive(_this__u8e3s4) {
    return new CaseInsensitiveString(_this__u8e3s4);
  }
  function CopyOnWriteHashMap() {
    this.z7t_1 = atomic$ref$1(emptyMap());
  }
  protoOf(CopyOnWriteHashMap).a7u = function (key) {
    return this.z7t_1.kotlinx$atomicfu$value.x2(key);
  };
  function Companion() {
    Companion_instance_0 = this;
    this.b7u_1 = GMTDate_0(new Long(0, 0));
  }
  var Companion_instance_0;
  function Companion_getInstance() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function GMTDate(seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp) {
    Companion_getInstance();
    this.c7u_1 = seconds;
    this.d7u_1 = minutes;
    this.e7u_1 = hours;
    this.f7u_1 = dayOfWeek;
    this.g7u_1 = dayOfMonth;
    this.h7u_1 = dayOfYear;
    this.i7u_1 = month;
    this.j7u_1 = year;
    this.k7u_1 = timestamp;
  }
  protoOf(GMTDate).l7u = function (other) {
    return this.k7u_1.x9(other.k7u_1);
  };
  protoOf(GMTDate).d = function (other) {
    return this.l7u(other instanceof GMTDate ? other : THROW_CCE());
  };
  protoOf(GMTDate).toString = function () {
    return 'GMTDate(seconds=' + this.c7u_1 + ', minutes=' + this.d7u_1 + ', hours=' + this.e7u_1 + ', dayOfWeek=' + this.f7u_1 + ', dayOfMonth=' + this.g7u_1 + ', dayOfYear=' + this.h7u_1 + ', month=' + this.i7u_1 + ', year=' + this.j7u_1 + ', timestamp=' + this.k7u_1.toString() + ')';
  };
  protoOf(GMTDate).hashCode = function () {
    var result = this.c7u_1;
    result = imul(result, 31) + this.d7u_1 | 0;
    result = imul(result, 31) + this.e7u_1 | 0;
    result = imul(result, 31) + this.f7u_1.hashCode() | 0;
    result = imul(result, 31) + this.g7u_1 | 0;
    result = imul(result, 31) + this.h7u_1 | 0;
    result = imul(result, 31) + this.i7u_1.hashCode() | 0;
    result = imul(result, 31) + this.j7u_1 | 0;
    result = imul(result, 31) + this.k7u_1.hashCode() | 0;
    return result;
  };
  protoOf(GMTDate).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GMTDate))
      return false;
    var tmp0_other_with_cast = other instanceof GMTDate ? other : THROW_CCE();
    if (!(this.c7u_1 === tmp0_other_with_cast.c7u_1))
      return false;
    if (!(this.d7u_1 === tmp0_other_with_cast.d7u_1))
      return false;
    if (!(this.e7u_1 === tmp0_other_with_cast.e7u_1))
      return false;
    if (!this.f7u_1.equals(tmp0_other_with_cast.f7u_1))
      return false;
    if (!(this.g7u_1 === tmp0_other_with_cast.g7u_1))
      return false;
    if (!(this.h7u_1 === tmp0_other_with_cast.h7u_1))
      return false;
    if (!this.i7u_1.equals(tmp0_other_with_cast.i7u_1))
      return false;
    if (!(this.j7u_1 === tmp0_other_with_cast.j7u_1))
      return false;
    if (!this.k7u_1.equals(tmp0_other_with_cast.k7u_1))
      return false;
    return true;
  };
  var WeekDay_MONDAY_instance;
  var WeekDay_TUESDAY_instance;
  var WeekDay_WEDNESDAY_instance;
  var WeekDay_THURSDAY_instance;
  var WeekDay_FRIDAY_instance;
  var WeekDay_SATURDAY_instance;
  var WeekDay_SUNDAY_instance;
  function Companion_0() {
  }
  protoOf(Companion_0).m7u = function (ordinal) {
    return values()[ordinal];
  };
  var Companion_instance_1;
  function Companion_getInstance_0() {
    return Companion_instance_1;
  }
  function values() {
    return [WeekDay_MONDAY_getInstance(), WeekDay_TUESDAY_getInstance(), WeekDay_WEDNESDAY_getInstance(), WeekDay_THURSDAY_getInstance(), WeekDay_FRIDAY_getInstance(), WeekDay_SATURDAY_getInstance(), WeekDay_SUNDAY_getInstance()];
  }
  var WeekDay_entriesInitialized;
  function WeekDay_initEntries() {
    if (WeekDay_entriesInitialized)
      return Unit_instance;
    WeekDay_entriesInitialized = true;
    WeekDay_MONDAY_instance = new WeekDay('MONDAY', 0, 'Mon');
    WeekDay_TUESDAY_instance = new WeekDay('TUESDAY', 1, 'Tue');
    WeekDay_WEDNESDAY_instance = new WeekDay('WEDNESDAY', 2, 'Wed');
    WeekDay_THURSDAY_instance = new WeekDay('THURSDAY', 3, 'Thu');
    WeekDay_FRIDAY_instance = new WeekDay('FRIDAY', 4, 'Fri');
    WeekDay_SATURDAY_instance = new WeekDay('SATURDAY', 5, 'Sat');
    WeekDay_SUNDAY_instance = new WeekDay('SUNDAY', 6, 'Sun');
  }
  function WeekDay(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.p7u_1 = value;
  }
  var Month_JANUARY_instance;
  var Month_FEBRUARY_instance;
  var Month_MARCH_instance;
  var Month_APRIL_instance;
  var Month_MAY_instance;
  var Month_JUNE_instance;
  var Month_JULY_instance;
  var Month_AUGUST_instance;
  var Month_SEPTEMBER_instance;
  var Month_OCTOBER_instance;
  var Month_NOVEMBER_instance;
  var Month_DECEMBER_instance;
  function Companion_1() {
  }
  protoOf(Companion_1).m7u = function (ordinal) {
    return values_0()[ordinal];
  };
  var Companion_instance_2;
  function Companion_getInstance_1() {
    return Companion_instance_2;
  }
  function values_0() {
    return [Month_JANUARY_getInstance(), Month_FEBRUARY_getInstance(), Month_MARCH_getInstance(), Month_APRIL_getInstance(), Month_MAY_getInstance(), Month_JUNE_getInstance(), Month_JULY_getInstance(), Month_AUGUST_getInstance(), Month_SEPTEMBER_getInstance(), Month_OCTOBER_getInstance(), Month_NOVEMBER_getInstance(), Month_DECEMBER_getInstance()];
  }
  var Month_entriesInitialized;
  function Month_initEntries() {
    if (Month_entriesInitialized)
      return Unit_instance;
    Month_entriesInitialized = true;
    Month_JANUARY_instance = new Month('JANUARY', 0, 'Jan');
    Month_FEBRUARY_instance = new Month('FEBRUARY', 1, 'Feb');
    Month_MARCH_instance = new Month('MARCH', 2, 'Mar');
    Month_APRIL_instance = new Month('APRIL', 3, 'Apr');
    Month_MAY_instance = new Month('MAY', 4, 'May');
    Month_JUNE_instance = new Month('JUNE', 5, 'Jun');
    Month_JULY_instance = new Month('JULY', 6, 'Jul');
    Month_AUGUST_instance = new Month('AUGUST', 7, 'Aug');
    Month_SEPTEMBER_instance = new Month('SEPTEMBER', 8, 'Sep');
    Month_OCTOBER_instance = new Month('OCTOBER', 9, 'Oct');
    Month_NOVEMBER_instance = new Month('NOVEMBER', 10, 'Nov');
    Month_DECEMBER_instance = new Month('DECEMBER', 11, 'Dec');
  }
  function Month(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.s7u_1 = value;
  }
  function WeekDay_MONDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_MONDAY_instance;
  }
  function WeekDay_TUESDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_TUESDAY_instance;
  }
  function WeekDay_WEDNESDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_WEDNESDAY_instance;
  }
  function WeekDay_THURSDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_THURSDAY_instance;
  }
  function WeekDay_FRIDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_FRIDAY_instance;
  }
  function WeekDay_SATURDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_SATURDAY_instance;
  }
  function WeekDay_SUNDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_SUNDAY_instance;
  }
  function Month_JANUARY_getInstance() {
    Month_initEntries();
    return Month_JANUARY_instance;
  }
  function Month_FEBRUARY_getInstance() {
    Month_initEntries();
    return Month_FEBRUARY_instance;
  }
  function Month_MARCH_getInstance() {
    Month_initEntries();
    return Month_MARCH_instance;
  }
  function Month_APRIL_getInstance() {
    Month_initEntries();
    return Month_APRIL_instance;
  }
  function Month_MAY_getInstance() {
    Month_initEntries();
    return Month_MAY_instance;
  }
  function Month_JUNE_getInstance() {
    Month_initEntries();
    return Month_JUNE_instance;
  }
  function Month_JULY_getInstance() {
    Month_initEntries();
    return Month_JULY_instance;
  }
  function Month_AUGUST_getInstance() {
    Month_initEntries();
    return Month_AUGUST_instance;
  }
  function Month_SEPTEMBER_getInstance() {
    Month_initEntries();
    return Month_SEPTEMBER_instance;
  }
  function Month_OCTOBER_getInstance() {
    Month_initEntries();
    return Month_OCTOBER_instance;
  }
  function Month_NOVEMBER_getInstance() {
    Month_initEntries();
    return Month_NOVEMBER_instance;
  }
  function Month_DECEMBER_getInstance() {
    Month_initEntries();
    return Month_DECEMBER_instance;
  }
  function proceedLoop($this, $completion) {
    var tmp = new $proceedLoopCOROUTINE$1($this, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  }
  function $proceedLoopCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b7v_1 = _this__u8e3s4;
  }
  protoOf($proceedLoopCOROUTINE$1).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 6;
            this.ac_1 = 1;
            continue $sm;
          case 1:
            this.c7v_1 = this.b7v_1.j7v_1;
            if (this.c7v_1 === -1) {
              this.ac_1 = 5;
              continue $sm;
            } else {
              this.ac_1 = 2;
              continue $sm;
            }

          case 2:
            this.d7v_1 = this.b7v_1.g7v_1;
            if (this.c7v_1 >= this.d7v_1.m()) {
              this.b7v_1.k7v();
              this.ac_1 = 5;
              continue $sm;
            } else {
              this.ac_1 = 3;
              continue $sm;
            }

          case 3:
            this.e7v_1 = this.d7v_1.n(this.c7v_1);
            this.b7v_1.j7v_1 = this.c7v_1 + 1 | 0;
            this.ac_1 = 4;
            var tmp_0 = this.e7v_1;
            suspendResult = (isSuspendFunction(tmp_0, 2) ? tmp_0 : THROW_CCE())(this.b7v_1, this.b7v_1.i7v_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.ac_1 = 1;
            continue $sm;
          case 5:
            return this.b7v_1.i7v_1;
          case 6:
            throw this.dc_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.bc_1 === 6) {
          throw e;
        } else {
          this.ac_1 = this.bc_1;
          this.dc_1 = e;
        }
      }
     while (true);
  };
  function DebugPipelineContext(context, interceptors, subject, coroutineContext) {
    PipelineContext.call(this, context);
    this.g7v_1 = interceptors;
    this.h7v_1 = coroutineContext;
    this.i7v_1 = subject;
    this.j7v_1 = 0;
  }
  protoOf(DebugPipelineContext).vo = function () {
    return this.h7v_1;
  };
  protoOf(DebugPipelineContext).l7v = function () {
    return this.i7v_1;
  };
  protoOf(DebugPipelineContext).k7v = function () {
    this.j7v_1 = -1;
  };
  protoOf(DebugPipelineContext).m7v = function (subject, $completion) {
    this.i7v_1 = subject;
    return this.n7v($completion);
  };
  protoOf(DebugPipelineContext).n7v = function ($completion) {
    var index = this.j7v_1;
    if (index < 0)
      return this.i7v_1;
    if (index >= this.g7v_1.m()) {
      this.k7v();
      return this.i7v_1;
    }
    return proceedLoop(this, $completion);
  };
  protoOf(DebugPipelineContext).o7v = function (initial, $completion) {
    this.j7v_1 = 0;
    this.i7v_1 = initial;
    return this.n7v($completion);
  };
  function PhaseContent_init_$Init$(phase, relation, $this) {
    var tmp = Companion_getInstance_2().p7v_1;
    PhaseContent.call($this, phase, relation, isInterface(tmp, MutableList) ? tmp : THROW_CCE());
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!Companion_getInstance_2().p7v_1.u()) {
      // Inline function 'io.ktor.util.pipeline.PhaseContent.<init>.<anonymous>' call
      var message = 'The shared empty array list has been modified';
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    return $this;
  }
  function PhaseContent_init_$Create$(phase, relation) {
    return PhaseContent_init_$Init$(phase, relation, objectCreate(protoOf(PhaseContent)));
  }
  function copyInterceptors($this) {
    $this.s7v_1 = $this.u7v();
    $this.t7v_1 = false;
  }
  function Companion_2() {
    Companion_instance_3 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.p7v_1 = ArrayList_init_$Create$_0();
  }
  var Companion_instance_3;
  function Companion_getInstance_2() {
    if (Companion_instance_3 == null)
      new Companion_2();
    return Companion_instance_3;
  }
  function PhaseContent(phase, relation, interceptors) {
    Companion_getInstance_2();
    this.q7v_1 = phase;
    this.r7v_1 = relation;
    this.s7v_1 = interceptors;
    this.t7v_1 = true;
  }
  protoOf(PhaseContent).o1o = function () {
    return this.s7v_1.u();
  };
  protoOf(PhaseContent).m = function () {
    return this.s7v_1.m();
  };
  protoOf(PhaseContent).v7v = function (interceptor) {
    if (this.t7v_1) {
      copyInterceptors(this);
    }
    this.s7v_1.a1(interceptor);
  };
  protoOf(PhaseContent).w7v = function (destination) {
    var interceptors = this.s7v_1;
    if (destination instanceof ArrayList) {
      destination.f3(destination.m() + interceptors.m() | 0);
    }
    var inductionVariable = 0;
    var last = interceptors.m();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        destination.a1(interceptors.n(index));
      }
       while (inductionVariable < last);
  };
  protoOf(PhaseContent).x7v = function () {
    this.t7v_1 = true;
    return this.s7v_1;
  };
  protoOf(PhaseContent).u7v = function () {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.collections.mutableListOf' call
    var this_0 = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.util.pipeline.PhaseContent.copiedInterceptors.<anonymous>' call
    this_0.g1(this.s7v_1);
    return this_0;
  };
  protoOf(PhaseContent).toString = function () {
    return 'Phase `' + this.q7v_1.y7v_1 + '`, ' + this.m() + ' handlers';
  };
  function _set_interceptors__wod97b($this, value) {
    $this.d7w_1.kotlinx$atomicfu$value = value;
  }
  function _get_interceptors__h4min7($this) {
    return $this.d7w_1.kotlinx$atomicfu$value;
  }
  function createContext($this, context, subject, coroutineContext) {
    return pipelineContextFor(context, sharedInterceptorsList($this), subject, coroutineContext, $this.g7w());
  }
  function findPhase($this, phase) {
    var phasesList = $this.b7w_1;
    var inductionVariable = 0;
    var last = phasesList.m();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var current = phasesList.n(index);
        if (current === phase) {
          var content = PhaseContent_init_$Create$(phase, Last_getInstance());
          phasesList.z(index, content);
          return content;
        }
        var tmp;
        if (current instanceof PhaseContent) {
          tmp = current.q7v_1 === phase;
        } else {
          tmp = false;
        }
        if (tmp) {
          return current instanceof PhaseContent ? current : THROW_CCE();
        }
      }
       while (inductionVariable < last);
    return null;
  }
  function findPhaseIndex($this, phase) {
    var phasesList = $this.b7w_1;
    var inductionVariable = 0;
    var last = phasesList.m();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var current = phasesList.n(index);
        var tmp;
        if (current === phase) {
          tmp = true;
        } else {
          var tmp_0;
          if (current instanceof PhaseContent) {
            tmp_0 = current.q7v_1 === phase;
          } else {
            tmp_0 = false;
          }
          tmp = tmp_0;
        }
        if (tmp) {
          return index;
        }
      }
       while (inductionVariable < last);
    return -1;
  }
  function hasPhase($this, phase) {
    var phasesList = $this.b7w_1;
    var inductionVariable = 0;
    var last = phasesList.m();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var current = phasesList.n(index);
        var tmp;
        if (current === phase) {
          tmp = true;
        } else {
          var tmp_0;
          if (current instanceof PhaseContent) {
            tmp_0 = current.q7v_1 === phase;
          } else {
            tmp_0 = false;
          }
          tmp = tmp_0;
        }
        if (tmp) {
          return true;
        }
      }
       while (inductionVariable < last);
    return false;
  }
  function cacheInterceptors($this) {
    var interceptorsQuantity = $this.c7w_1;
    if (interceptorsQuantity === 0) {
      notSharedInterceptorsList($this, emptyList());
      return emptyList();
    }
    var phases = $this.b7w_1;
    if (interceptorsQuantity === 1) {
      var inductionVariable = 0;
      var last = get_lastIndex_0(phases);
      if (inductionVariable <= last)
        $l$loop_0: do {
          var phaseIndex = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp = phases.n(phaseIndex);
          var tmp1_elvis_lhs = tmp instanceof PhaseContent ? tmp : null;
          var tmp_0;
          if (tmp1_elvis_lhs == null) {
            continue $l$loop_0;
          } else {
            tmp_0 = tmp1_elvis_lhs;
          }
          var phaseContent = tmp_0;
          if (phaseContent.o1o())
            continue $l$loop_0;
          var interceptors = phaseContent.x7v();
          setInterceptorsListFromPhase($this, phaseContent);
          return interceptors;
        }
         while (!(phaseIndex === last));
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var destination = ArrayList_init_$Create$_0();
    var inductionVariable_0 = 0;
    var last_0 = get_lastIndex_0(phases);
    if (inductionVariable_0 <= last_0)
      $l$loop_1: do {
        var phaseIndex_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp_1 = phases.n(phaseIndex_0);
        var tmp3_elvis_lhs = tmp_1 instanceof PhaseContent ? tmp_1 : null;
        var tmp_2;
        if (tmp3_elvis_lhs == null) {
          continue $l$loop_1;
        } else {
          tmp_2 = tmp3_elvis_lhs;
        }
        var phase = tmp_2;
        phase.w7v(destination);
      }
       while (!(phaseIndex_0 === last_0));
    notSharedInterceptorsList($this, destination);
    return destination;
  }
  function sharedInterceptorsList($this) {
    if (_get_interceptors__h4min7($this) == null) {
      cacheInterceptors($this);
    }
    $this.e7w_1 = true;
    return ensureNotNull(_get_interceptors__h4min7($this));
  }
  function resetInterceptorsList($this) {
    _set_interceptors__wod97b($this, null);
    $this.e7w_1 = false;
    $this.f7w_1 = null;
  }
  function notSharedInterceptorsList($this, list) {
    _set_interceptors__wod97b($this, list);
    $this.e7w_1 = false;
    $this.f7w_1 = null;
  }
  function setInterceptorsListFromPhase($this, phaseContent) {
    _set_interceptors__wod97b($this, phaseContent.x7v());
    $this.e7w_1 = false;
    $this.f7w_1 = phaseContent.q7v_1;
  }
  function tryAddToPhaseFastPath($this, phase, block) {
    var currentInterceptors = _get_interceptors__h4min7($this);
    if ($this.b7w_1.u() ? true : currentInterceptors == null) {
      return false;
    }
    var tmp;
    if ($this.e7w_1) {
      tmp = true;
    } else {
      tmp = !(!(currentInterceptors == null) ? isInterface(currentInterceptors, MutableList) : false);
    }
    if (tmp) {
      return false;
    }
    if (equals($this.f7w_1, phase)) {
      currentInterceptors.a1(block);
      return true;
    }
    if (equals(phase, last($this.b7w_1)) ? true : findPhaseIndex($this, phase) === get_lastIndex_0($this.b7w_1)) {
      ensureNotNull(findPhase($this, phase)).v7v(block);
      currentInterceptors.a1(block);
      return true;
    }
    return false;
  }
  function Pipeline(phases) {
    this.z7v_1 = AttributesJsFn(true);
    this.a7w_1 = false;
    this.b7w_1 = mutableListOf(phases.slice());
    this.c7w_1 = 0;
    this.d7w_1 = atomic$ref$1(null);
    this.e7w_1 = false;
    this.f7w_1 = null;
  }
  protoOf(Pipeline).g7w = function () {
    return this.a7w_1;
  };
  protoOf(Pipeline).h7w = function (context, subject, $completion) {
    // Inline function 'kotlin.js.getCoroutineContext' call
    var tmp$ret$0 = $completion.s6();
    return createContext(this, context, subject, tmp$ret$0).o7v(subject, $completion);
  };
  protoOf(Pipeline).j7w = function (reference, phase) {
    if (hasPhase(this, phase))
      return Unit_instance;
    var index = findPhaseIndex(this, reference);
    if (index === -1) {
      throw new InvalidPhaseException('Phase ' + reference + ' was not registered for this pipeline');
    }
    var lastRelatedPhaseIndex = index;
    var inductionVariable = index + 1 | 0;
    var last = get_lastIndex_0(this.b7w_1);
    if (inductionVariable <= last)
      $l$loop_0: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.b7w_1.n(i);
        var tmp1_safe_receiver = tmp instanceof PhaseContent ? tmp : null;
        var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.r7v_1;
        var tmp_0;
        if (tmp2_elvis_lhs == null) {
          break $l$loop_0;
        } else {
          tmp_0 = tmp2_elvis_lhs;
        }
        var relation = tmp_0;
        var tmp3_safe_receiver = relation instanceof After ? relation : null;
        var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.k7w_1;
        var tmp_1;
        if (tmp4_elvis_lhs == null) {
          continue $l$loop_0;
        } else {
          tmp_1 = tmp4_elvis_lhs;
        }
        var relatedTo = tmp_1;
        lastRelatedPhaseIndex = equals(relatedTo, reference) ? i : lastRelatedPhaseIndex;
      }
       while (!(i === last));
    this.b7w_1.y1(lastRelatedPhaseIndex + 1 | 0, PhaseContent_init_$Create$(phase, new After(reference)));
  };
  protoOf(Pipeline).l7w = function (reference, phase) {
    if (hasPhase(this, phase))
      return Unit_instance;
    var index = findPhaseIndex(this, reference);
    if (index === -1) {
      throw new InvalidPhaseException('Phase ' + reference + ' was not registered for this pipeline');
    }
    this.b7w_1.y1(index, PhaseContent_init_$Create$(phase, new Before(reference)));
  };
  protoOf(Pipeline).m7w = function (phase, block) {
    var tmp0_elvis_lhs = findPhase(this, phase);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new InvalidPhaseException('Phase ' + phase + ' was not registered for this pipeline');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var phaseContent = tmp;
    if (typeof block !== 'function')
      THROW_CCE();
    if (tryAddToPhaseFastPath(this, phase, block)) {
      this.c7w_1 = this.c7w_1 + 1 | 0;
      return Unit_instance;
    }
    phaseContent.v7v(block);
    this.c7w_1 = this.c7w_1 + 1 | 0;
    resetInterceptorsList(this);
    this.n7w();
  };
  protoOf(Pipeline).n7w = function () {
  };
  function PipelineContext(context) {
    this.i7w_1 = context;
  }
  function pipelineContextFor(context, interceptors, subject, coroutineContext, debugMode) {
    debugMode = debugMode === VOID ? false : debugMode;
    var tmp;
    if (get_DISABLE_SFG() ? true : debugMode) {
      tmp = new DebugPipelineContext(context, interceptors, subject, coroutineContext);
    } else {
      tmp = new SuspendFunctionGun(subject, context, interceptors);
    }
    return tmp;
  }
  function PipelinePhase(name) {
    this.y7v_1 = name;
  }
  protoOf(PipelinePhase).toString = function () {
    return "Phase('" + this.y7v_1 + "')";
  };
  function InvalidPhaseException(message) {
    extendThrowable(this, message);
    captureStack(this, InvalidPhaseException);
  }
  function After(relativeTo) {
    PipelinePhaseRelation.call(this);
    this.k7w_1 = relativeTo;
  }
  function Before(relativeTo) {
    PipelinePhaseRelation.call(this);
    this.o7w_1 = relativeTo;
  }
  function Last() {
    Last_instance = this;
    PipelinePhaseRelation.call(this);
  }
  var Last_instance;
  function Last_getInstance() {
    if (Last_instance == null)
      new Last();
    return Last_instance;
  }
  function PipelinePhaseRelation() {
  }
  function recoverStackTraceBridge(exception, continuation) {
    var tmp;
    try {
      tmp = withCause(recoverStackTrace(exception, continuation), exception.cause);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var _ = $p;
        tmp_0 = exception;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function loop($this, direct) {
    do {
      var currentIndex = $this.v7w_1;
      if (currentIndex === $this.q7w_1.m()) {
        if (!direct) {
          // Inline function 'kotlin.Companion.success' call
          var value = $this.s7w_1;
          var tmp$ret$0 = _Result___init__impl__xyqfz8(value);
          resumeRootWith($this, tmp$ret$0);
          return false;
        }
        return true;
      }
      $this.v7w_1 = currentIndex + 1 | 0;
      var next = $this.q7w_1.n(currentIndex);
      try {
        var result = next($this, $this.s7w_1, $this.r7w_1);
        if (result === get_COROUTINE_SUSPENDED())
          return false;
      } catch ($p) {
        if ($p instanceof Error) {
          var cause = $p;
          // Inline function 'kotlin.Companion.failure' call
          var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
          resumeRootWith($this, tmp$ret$1);
          return false;
        } else {
          throw $p;
        }
      }
    }
     while (true);
  }
  function resumeRootWith($this, result) {
    if ($this.u7w_1 < 0) {
      // Inline function 'kotlin.error' call
      var message = 'No more continuations to resume';
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    var next = ensureNotNull($this.t7w_1[$this.u7w_1]);
    var tmp1 = $this.u7w_1;
    $this.u7w_1 = tmp1 - 1 | 0;
    $this.t7w_1[tmp1] = null;
    if (!_Result___get_isFailure__impl__jpiriv(result)) {
      next.t6(result);
    } else {
      var exception = recoverStackTraceBridge(ensureNotNull(Result__exceptionOrNull_impl_p6xea9(result)), next);
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
      next.t6(tmp$ret$0);
    }
  }
  function discardLastRootContinuation($this) {
    if ($this.u7w_1 < 0)
      throw IllegalStateException_init_$Create$('No more continuations to resume');
    var tmp1 = $this.u7w_1;
    $this.u7w_1 = tmp1 - 1 | 0;
    $this.t7w_1[tmp1] = null;
  }
  function addContinuation($this, continuation) {
    $this.u7w_1 = $this.u7w_1 + 1 | 0;
    $this.t7w_1[$this.u7w_1] = continuation;
  }
  function SuspendFunctionGun$continuation$1(this$0) {
    this.x7w_1 = this$0;
    this.w7w_1 = IntCompanionObject_instance.MIN_VALUE;
  }
  protoOf(SuspendFunctionGun$continuation$1).s6 = function () {
    var tmp0_safe_receiver = this.x7w_1.t7w_1[this.x7w_1.u7w_1];
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s6();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var message = 'Not started';
      throw IllegalStateException_init_$Create$(toString_0(message));
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  };
  protoOf(SuspendFunctionGun$continuation$1).ef = function (result) {
    if (_Result___get_isFailure__impl__jpiriv(result)) {
      // Inline function 'kotlin.Companion.failure' call
      var exception = ensureNotNull(Result__exceptionOrNull_impl_p6xea9(result));
      var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
      resumeRootWith(this.x7w_1, tmp$ret$0);
      return Unit_instance;
    }
    loop(this.x7w_1, false);
  };
  protoOf(SuspendFunctionGun$continuation$1).t6 = function (result) {
    return this.ef(result);
  };
  function SuspendFunctionGun(initial, context, blocks) {
    PipelineContext.call(this, context);
    this.q7w_1 = blocks;
    var tmp = this;
    tmp.r7w_1 = new SuspendFunctionGun$continuation$1(this);
    this.s7w_1 = initial;
    var tmp_0 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.q7w_1.m();
    tmp_0.t7w_1 = fillArrayVal(Array(size), null);
    this.u7w_1 = -1;
    this.v7w_1 = 0;
  }
  protoOf(SuspendFunctionGun).vo = function () {
    return this.r7w_1.s6();
  };
  protoOf(SuspendFunctionGun).l7v = function () {
    return this.s7w_1;
  };
  protoOf(SuspendFunctionGun).n7v = function ($completion) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'io.ktor.util.pipeline.SuspendFunctionGun.proceed.<anonymous>' call
      if (this.v7w_1 === this.q7w_1.m()) {
        tmp$ret$0 = this.s7w_1;
        break $l$block_0;
      }
      addContinuation(this, intercepted($completion));
      if (loop(this, true)) {
        discardLastRootContinuation(this);
        tmp$ret$0 = this.s7w_1;
        break $l$block_0;
      }
      tmp$ret$0 = get_COROUTINE_SUSPENDED();
    }
    return tmp$ret$0;
  };
  protoOf(SuspendFunctionGun).m7v = function (subject, $completion) {
    this.s7w_1 = subject;
    return this.n7v($completion);
  };
  protoOf(SuspendFunctionGun).o7v = function (initial, $completion) {
    this.v7w_1 = 0;
    if (this.v7w_1 === this.q7w_1.m())
      return initial;
    this.s7w_1 = initial;
    if (this.u7w_1 >= 0)
      throw IllegalStateException_init_$Create$('Already started');
    return this.n7v($completion);
  };
  function TypeInfo(type, reifiedType, kotlinType) {
    kotlinType = kotlinType === VOID ? null : kotlinType;
    this.y7w_1 = type;
    this.z7w_1 = reifiedType;
    this.a7x_1 = kotlinType;
  }
  protoOf(TypeInfo).toString = function () {
    return 'TypeInfo(type=' + this.y7w_1 + ', reifiedType=' + this.z7w_1 + ', kotlinType=' + this.a7x_1 + ')';
  };
  protoOf(TypeInfo).hashCode = function () {
    var result = this.y7w_1.hashCode();
    result = imul(result, 31) + hashCode(this.z7w_1) | 0;
    result = imul(result, 31) + (this.a7x_1 == null ? 0 : hashCode(this.a7x_1)) | 0;
    return result;
  };
  protoOf(TypeInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TypeInfo))
      return false;
    var tmp0_other_with_cast = other instanceof TypeInfo ? other : THROW_CCE();
    if (!this.y7w_1.equals(tmp0_other_with_cast.y7w_1))
      return false;
    if (!equals(this.z7w_1, tmp0_other_with_cast.z7w_1))
      return false;
    if (!equals(this.a7x_1, tmp0_other_with_cast.a7x_1))
      return false;
    return true;
  };
  function AttributesJsFn(concurrent) {
    concurrent = concurrent === VOID ? false : concurrent;
    return new AttributesJs();
  }
  function AttributesJs() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.b7x_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(AttributesJs).p7r = function (key) {
    var tmp = this.b7x_1.x2(key);
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(AttributesJs).q7r = function (key) {
    return this.b7x_1.u2(key);
  };
  protoOf(AttributesJs).r7r = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    this.b7x_1.n2(key, value);
  };
  protoOf(AttributesJs).s7r = function (key) {
    this.b7x_1.r2(key);
  };
  protoOf(AttributesJs).t7r = function (key, block) {
    var tmp0_safe_receiver = this.b7x_1.x2(key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return !(tmp0_safe_receiver == null) ? tmp0_safe_receiver : THROW_CCE();
    }
    // Inline function 'kotlin.also' call
    var this_0 = block();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.util.AttributesJs.computeIfAbsent.<anonymous>' call
    // Inline function 'kotlin.collections.set' call
    this.b7x_1.n2(key, this_0);
    return this_0;
  };
  protoOf(AttributesJs).u7r = function () {
    return toList(this.b7x_1.k2());
  };
  function unmodifiable(_this__u8e3s4) {
    return _this__u8e3s4;
  }
  function get_platform(_this__u8e3s4) {
    var tmp = typeof process !== 'undefined' && process.versions != null && process.versions.node != null || (typeof window !== 'undefined' && typeof window.process !== 'undefined' && window.process.versions != null && window.process.versions.node != null);
    var hasNodeApi = (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE();
    return hasNodeApi ? Platform_Node_getInstance() : Platform_Browser_getInstance();
  }
  function get_isDevelopmentMode(_this__u8e3s4) {
    return false;
  }
  function get_isNewMemoryModel(_this__u8e3s4) {
    return true;
  }
  function GMTDate_0(timestamp) {
    timestamp = timestamp === VOID ? null : timestamp;
    var tmp1_safe_receiver = timestamp == null ? null : timestamp.y6();
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.ktor.util.date.GMTDate.<anonymous>' call
      tmp = new Date(tmp1_safe_receiver);
    }
    var tmp2_elvis_lhs = tmp;
    var date = tmp2_elvis_lhs == null ? new Date() : tmp2_elvis_lhs;
    if (isNaN_0(date.getTime()))
      throw new InvalidTimestampException(ensureNotNull(timestamp));
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var dayOfWeek = Companion_instance_1.m7u((date.getUTCDay() + 6 | 0) % 7 | 0);
    var month = Companion_instance_2.m7u(date.getUTCMonth());
    return new GMTDate(date.getUTCSeconds(), date.getUTCMinutes(), date.getUTCHours(), dayOfWeek, date.getUTCDate(), date.getUTCFullYear(), month, date.getUTCFullYear(), numberToLong(date.getTime()));
  }
  function InvalidTimestampException(timestamp) {
    IllegalStateException_init_$Init$('Invalid date timestamp exception: ' + timestamp.toString(), this);
    captureStack(this, InvalidTimestampException);
  }
  function KtorSimpleLogger(name) {
    return new KtorSimpleLogger$1();
  }
  function KtorSimpleLogger$1() {
    var tmp = this;
    var tmp_0;
    switch (PlatformUtils_getInstance().d7t_1) {
      case true:
        // Inline function 'kotlin.Result.getOrNull' call

        // Inline function 'kotlin.runCatching' call

        var tmp_1;
        try {
          // Inline function 'kotlin.Companion.success' call
          // Inline function 'io.ktor.util.logging.<no name provided>.level.<anonymous>' call
          var tmp_2 = process.env.KTOR_LOG_LEVEL;
          var value = (tmp_2 == null ? true : typeof tmp_2 === 'string') ? tmp_2 : THROW_CCE();
          tmp_1 = _Result___init__impl__xyqfz8(value);
        } catch ($p) {
          var tmp_3;
          if ($p instanceof Error) {
            var e = $p;
            // Inline function 'kotlin.Companion.failure' call
            tmp_3 = _Result___init__impl__xyqfz8(createFailure(e));
          } else {
            throw $p;
          }
          tmp_1 = tmp_3;
        }

        var this_0 = tmp_1;
        var tmp_4;
        if (_Result___get_isFailure__impl__jpiriv(this_0)) {
          tmp_4 = null;
        } else {
          var tmp_5 = _Result___get_value__impl__bjfvqg(this_0);
          tmp_4 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        }

        var tmp1_safe_receiver = tmp_4;
        var tmp_6;
        if (tmp1_safe_receiver == null) {
          tmp_6 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'io.ktor.util.logging.<no name provided>.level.<anonymous>' call
          var tmp$ret$6;
          $l$block: {
            // Inline function 'kotlin.collections.firstOrNull' call
            var indexedObject = values_1();
            var inductionVariable = 0;
            var last = indexedObject.length;
            while (inductionVariable < last) {
              var element = indexedObject[inductionVariable];
              inductionVariable = inductionVariable + 1 | 0;
              // Inline function 'io.ktor.util.logging.<no name provided>.level.<anonymous>.<anonymous>' call
              if (element.s9_1 === tmp1_safe_receiver) {
                tmp$ret$6 = element;
                break $l$block;
              }
            }
            tmp$ret$6 = null;
          }
          tmp_6 = tmp$ret$6;
        }

        var tmp2_elvis_lhs = tmp_6;
        tmp_0 = tmp2_elvis_lhs == null ? LogLevel_INFO_getInstance() : tmp2_elvis_lhs;
        break;
      case false:
        tmp_0 = LogLevel_TRACE_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    tmp.c7x_1 = tmp_0;
  }
  protoOf(KtorSimpleLogger$1).d7x = function (message) {
    if (this.c7x_1.u9(LogLevel_TRACE_getInstance()) > 0)
      return Unit_instance;
    console.debug('TRACE: ' + message);
  };
  var LogLevel_TRACE_instance;
  var LogLevel_DEBUG_instance;
  var LogLevel_INFO_instance;
  var LogLevel_WARN_instance;
  var LogLevel_ERROR_instance;
  var LogLevel_NONE_instance;
  function values_1() {
    return [LogLevel_TRACE_getInstance(), LogLevel_DEBUG_getInstance(), LogLevel_INFO_getInstance(), LogLevel_WARN_getInstance(), LogLevel_ERROR_getInstance(), LogLevel_NONE_getInstance()];
  }
  var LogLevel_entriesInitialized;
  function LogLevel_initEntries() {
    if (LogLevel_entriesInitialized)
      return Unit_instance;
    LogLevel_entriesInitialized = true;
    LogLevel_TRACE_instance = new LogLevel('TRACE', 0);
    LogLevel_DEBUG_instance = new LogLevel('DEBUG', 1);
    LogLevel_INFO_instance = new LogLevel('INFO', 2);
    LogLevel_WARN_instance = new LogLevel('WARN', 3);
    LogLevel_ERROR_instance = new LogLevel('ERROR', 4);
    LogLevel_NONE_instance = new LogLevel('NONE', 5);
  }
  function LogLevel(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function LogLevel_TRACE_getInstance() {
    LogLevel_initEntries();
    return LogLevel_TRACE_instance;
  }
  function LogLevel_DEBUG_getInstance() {
    LogLevel_initEntries();
    return LogLevel_DEBUG_instance;
  }
  function LogLevel_INFO_getInstance() {
    LogLevel_initEntries();
    return LogLevel_INFO_instance;
  }
  function LogLevel_WARN_getInstance() {
    LogLevel_initEntries();
    return LogLevel_WARN_instance;
  }
  function LogLevel_ERROR_getInstance() {
    LogLevel_initEntries();
    return LogLevel_ERROR_instance;
  }
  function LogLevel_NONE_getInstance() {
    LogLevel_initEntries();
    return LogLevel_NONE_instance;
  }
  function get_DISABLE_SFG() {
    return DISABLE_SFG;
  }
  var DISABLE_SFG;
  function withCause(_this__u8e3s4, cause) {
    return _this__u8e3s4;
  }
  function instanceOf(_this__u8e3s4, type) {
    return type.c7(_this__u8e3s4);
  }
  function typeInfoImpl(reifiedType, kClass, kType) {
    return new TypeInfo(kClass, reifiedType, kType);
  }
  function JsType() {
  }
  var JsType_instance;
  function JsType_getInstance() {
    return JsType_instance;
  }
  //region block: post-declaration
  protoOf(AttributesJs).o7r = get;
  //endregion
  //region block: init
  Companion_instance_1 = new Companion_0();
  Companion_instance_2 = new Companion_1();
  DISABLE_SFG = false;
  JsType_instance = new JsType();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = toByteArray;
  _.$_$.b = JsType_instance;
  _.$_$.c = PlatformUtils_getInstance;
  _.$_$.d = CopyOnWriteHashMap;
  _.$_$.e = GMTDate_0;
  _.$_$.f = KtorSimpleLogger;
  _.$_$.g = PipelineContext;
  _.$_$.h = PipelinePhase;
  _.$_$.i = Pipeline;
  _.$_$.j = instanceOf;
  _.$_$.k = typeInfoImpl;
  _.$_$.l = AttributeKey;
  _.$_$.m = AttributesJsFn;
  _.$_$.n = SilentSupervisor;
  _.$_$.o = forEach;
  _.$_$.p = get_0;
  _.$_$.q = StringValuesBuilderImpl;
  _.$_$.r = StringValuesImpl;
  _.$_$.s = StringValues;
  _.$_$.t = appendAll;
  _.$_$.u = isLowerCase;
  _.$_$.v = get_platform;
  _.$_$.w = putAll;
  _.$_$.x = toCharArray;
  _.$_$.y = toLowerCasePreservingASCIIRules;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-utils.js.map
