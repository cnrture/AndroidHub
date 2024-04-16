(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-core.js', './ktor-ktor-http.js', './kotlinx-coroutines-core.js', './ktor-ktor-io.js', './ktor-ktor-serialization.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./ktor-ktor-http.js'), require('./kotlinx-coroutines-core.js'), require('./ktor-ktor-io.js'), require('./ktor-ktor-serialization.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-serialization-kotlinx'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'ktor-ktor-serialization-kotlinx'.");
    }
    if (typeof this['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'ktor-ktor-serialization-kotlinx'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-serialization-kotlinx'.");
    }
    if (typeof this['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'ktor-ktor-serialization-kotlinx'.");
    }
    if (typeof this['ktor-ktor-serialization'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx'. Its dependency 'ktor-ktor-serialization' was not found. Please, check whether 'ktor-ktor-serialization' is loaded prior to 'ktor-ktor-serialization-kotlinx'.");
    }
    root['ktor-ktor-serialization-kotlinx'] = factory(typeof this['ktor-ktor-serialization-kotlinx'] === 'undefined' ? {} : this['ktor-ktor-serialization-kotlinx'], this['kotlin-kotlin-stdlib'], this['kotlinx-serialization-kotlinx-serialization-core'], this['ktor-ktor-http'], this['kotlinx-coroutines-core'], this['ktor-ktor-io'], this['ktor-ktor-serialization']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_io_ktor_ktor_http, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_serialization) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.bf;
  var interfaceMeta = kotlin_kotlin.$_$.fe;
  var setMetadataFor = kotlin_kotlin.$_$.cf;
  var VOID = kotlin_kotlin.$_$.g;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.p;
  var Unit_getInstance = kotlin_kotlin.$_$.u5;
  var CoroutineImpl = kotlin_kotlin.$_$.yc;
  var THROW_CCE = kotlin_kotlin.$_$.vj;
  var isInterface = kotlin_kotlin.$_$.oe;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.jc;
  var classMeta = kotlin_kotlin.$_$.pd;
  var toString = kotlin_kotlin.$_$.gf;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.h2;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var ByteArrayContent = kotlin_io_ktor_ktor_http.$_$.j;
  var BinaryFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var withCharsetIfNeeded = kotlin_io_ktor_ktor_http.$_$.p1;
  var TextContent = kotlin_io_ktor_ktor_http.$_$.q;
  var StringFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j2;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var Flow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.p;
  var asFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h1;
  var firstOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i2;
  var discard = kotlin_io_ktor_ktor_io.$_$.v;
  var readBytes = kotlin_io_ktor_ktor_io.$_$.w;
  var readText = kotlin_io_ktor_ktor_io.$_$.y;
  var JsonConvertException = kotlin_io_ktor_ktor_serialization.$_$.e;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.b2;
  var ContentConverter = kotlin_io_ktor_ktor_serialization.$_$.d;
  var SuspendFunction1 = kotlin_kotlin.$_$.ad;
  var serializerOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l2;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m2;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var Map = kotlin_kotlin.$_$.p6;
  var SetSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var Set = kotlin_kotlin.$_$.y6;
  var firstOrNull_0 = kotlin_kotlin.$_$.e9;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.i5;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var isArray = kotlin_kotlin.$_$.ge;
  var List = kotlin_kotlin.$_$.n6;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var filterNotNull = kotlin_kotlin.$_$.a9;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.r7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.o;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.w;
  var singleOrNull = kotlin_kotlin.$_$.bb;
  var Collection = kotlin_kotlin.$_$.e6;
  var emptyList = kotlin_kotlin.$_$.t8;
  //endregion
  //region block: pre-declaration
  setMetadataFor(KotlinxSerializationExtension, 'KotlinxSerializationExtension', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [4, 3]);
  setMetadataFor(KotlinxSerializationExtensionProvider, 'KotlinxSerializationExtensionProvider', interfaceMeta);
  setMetadataFor(KotlinxSerializationConverter$serializeNullable$o$collect$slambda, 'KotlinxSerializationConverter$serializeNullable$o$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$2, '$collectCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor(KotlinxSerializationConverter$deserialize$o$collect$slambda, 'KotlinxSerializationConverter$deserialize$o$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$3, '$collectCOROUTINE$3', classMeta, CoroutineImpl);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, VOID, [Flow], VOID, VOID, VOID, [1]);
  setMetadataFor(KotlinxSerializationConverter$serializeNullable$slambda, 'KotlinxSerializationConverter$serializeNullable$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta, VOID, [Flow], VOID, VOID, VOID, [1]);
  setMetadataFor(KotlinxSerializationConverter$deserialize$slambda, 'KotlinxSerializationConverter$deserialize$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor($serializeNullableCOROUTINE$0, '$serializeNullableCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor($deserializeCOROUTINE$1, '$deserializeCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(KotlinxSerializationConverter, 'KotlinxSerializationConverter', classMeta, VOID, [ContentConverter], VOID, VOID, VOID, [4, 3]);
  //endregion
  function KotlinxSerializationExtension() {
  }
  function extensions(format) {
    // Inline function 'kotlin.collections.mapNotNull' call
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var this_0 = get_providers();
    var destination = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      // Inline function 'io.ktor.serialization.kotlinx.extensions.<anonymous>' call
      var tmp0_safe_receiver = element.extension_u1a1up_k$(format);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        destination.add_utx5q5_k$(tmp0_safe_receiver);
      }
    }
    return destination;
  }
  function KotlinxSerializationExtensionProvider() {
  }
  function serialization(_this__u8e3s4, contentType, format) {
    _this__u8e3s4.register$default_yp0q2f_k$(contentType, new KotlinxSerializationConverter(format));
  }
  function KotlinxSerializationConverter$serializeNullable$o$collect$slambda($$this$unsafeFlow, $contentType, $charset, $typeInfo, $value, resultContinuation) {
    this.$$this$unsafeFlow_1 = $$this$unsafeFlow;
    this.$contentType_1 = $contentType;
    this.$charset_1 = $charset;
    this.$typeInfo_1 = $typeInfo;
    this.$value_1 = $value;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KotlinxSerializationConverter$serializeNullable$o$collect$slambda).invoke_3gcbvi_k$ = function (value, $completion) {
    var tmp = this.create_e9xnz6_k$(value, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KotlinxSerializationConverter$serializeNullable$o$collect$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_3gcbvi_k$((!(p1 == null) ? isInterface(p1, KotlinxSerializationExtension) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KotlinxSerializationConverter$serializeNullable$o$collect$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_0 = this;
            tmp_0.$this$unsafeTransform0__1 = this.$$this$unsafeFlow_1;
            var tmp_1 = this;
            tmp_1.value1__1 = this.value_1;
            var tmp_2 = this;
            tmp_2.it2__1 = this.value1__1;
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.it2__1.serialize_vlmgdn_k$(this.$contentType_1, this.$charset_1, this.$typeInfo_1, this.$value_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ARGUMENT3__1 = suspendResult;
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.$this$unsafeTransform0__1.emit_t92u1f_k$(this.ARGUMENT3__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(KotlinxSerializationConverter$serializeNullable$o$collect$slambda).create_e9xnz6_k$ = function (value, completion) {
    var i = new KotlinxSerializationConverter$serializeNullable$o$collect$slambda(this.$$this$unsafeFlow_1, this.$contentType_1, this.$charset_1, this.$typeInfo_1, this.$value_1, completion);
    i.value_1 = value;
    return i;
  };
  protoOf(KotlinxSerializationConverter$serializeNullable$o$collect$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_e9xnz6_k$((!(value == null) ? isInterface(value, KotlinxSerializationExtension) : false) ? value : THROW_CCE(), completion);
  };
  function KotlinxSerializationConverter$serializeNullable$o$collect$slambda_0($$this$unsafeFlow, $contentType, $charset, $typeInfo, $value, resultContinuation) {
    var i = new KotlinxSerializationConverter$serializeNullable$o$collect$slambda($$this$unsafeFlow, $contentType, $charset, $typeInfo, $value, resultContinuation);
    var l = function (value, $completion) {
      return i.invoke_3gcbvi_k$(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$2(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$2).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this;
            tmp_0.$this$unsafeFlow0__1 = this.collector_1;
            this.set_state_rjd8d0_k$(1);
            var tmp_1 = KotlinxSerializationConverter$serializeNullable$o$collect$slambda_0(this.$this$unsafeFlow0__1, this._this__u8e3s4__1.$contentType_1, this._this__u8e3s4__1.$charset_1, this._this__u8e3s4__1.$typeInfo_1, this._this__u8e3s4__1.$value_1, null);
            suspendResult = this._this__u8e3s4__1.$this_1.collect_aksokr_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function KotlinxSerializationConverter$deserialize$o$collect$slambda($$this$unsafeFlow, $charset, $typeInfo, $content, resultContinuation) {
    this.$$this$unsafeFlow_1 = $$this$unsafeFlow;
    this.$charset_1 = $charset;
    this.$typeInfo_1 = $typeInfo;
    this.$content_1 = $content;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KotlinxSerializationConverter$deserialize$o$collect$slambda).invoke_3gcbvi_k$ = function (value, $completion) {
    var tmp = this.create_e9xnz6_k$(value, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KotlinxSerializationConverter$deserialize$o$collect$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_3gcbvi_k$((!(p1 == null) ? isInterface(p1, KotlinxSerializationExtension) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KotlinxSerializationConverter$deserialize$o$collect$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_0 = this;
            tmp_0.$this$unsafeTransform0__1 = this.$$this$unsafeFlow_1;
            var tmp_1 = this;
            tmp_1.value1__1 = this.value_1;
            var tmp_2 = this;
            tmp_2.it2__1 = this.value1__1;
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.it2__1.deserialize_4o4t3i_k$(this.$charset_1, this.$typeInfo_1, this.$content_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ARGUMENT3__1 = suspendResult;
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.$this$unsafeTransform0__1.emit_t92u1f_k$(this.ARGUMENT3__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(KotlinxSerializationConverter$deserialize$o$collect$slambda).create_e9xnz6_k$ = function (value, completion) {
    var i = new KotlinxSerializationConverter$deserialize$o$collect$slambda(this.$$this$unsafeFlow_1, this.$charset_1, this.$typeInfo_1, this.$content_1, completion);
    i.value_1 = value;
    return i;
  };
  protoOf(KotlinxSerializationConverter$deserialize$o$collect$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_e9xnz6_k$((!(value == null) ? isInterface(value, KotlinxSerializationExtension) : false) ? value : THROW_CCE(), completion);
  };
  function KotlinxSerializationConverter$deserialize$o$collect$slambda_0($$this$unsafeFlow, $charset, $typeInfo, $content, resultContinuation) {
    var i = new KotlinxSerializationConverter$deserialize$o$collect$slambda($$this$unsafeFlow, $charset, $typeInfo, $content, resultContinuation);
    var l = function (value, $completion) {
      return i.invoke_3gcbvi_k$(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$3(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$3).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this;
            tmp_0.$this$unsafeFlow0__1 = this.collector_1;
            this.set_state_rjd8d0_k$(1);
            var tmp_1 = KotlinxSerializationConverter$deserialize$o$collect$slambda_0(this.$this$unsafeFlow0__1, this._this__u8e3s4__1.$charset_1, this._this__u8e3s4__1.$typeInfo_1, this._this__u8e3s4__1.$content_1, null);
            suspendResult = this._this__u8e3s4__1.$this_1.collect_aksokr_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function _get_format__qlarck($this) {
    return $this.format_1;
  }
  function _get_extensions__zgcsuh($this) {
    return $this.extensions_1;
  }
  function serializeContent($this, serializer, format, value, contentType, charset) {
    var tmp;
    if (isInterface(format, StringFormat)) {
      var content = format.encodeToString_k0apqx_k$(isInterface(serializer, KSerializer) ? serializer : THROW_CCE(), value);
      tmp = new TextContent(content, withCharsetIfNeeded(contentType, charset));
    } else {
      if (isInterface(format, BinaryFormat)) {
        var content_0 = format.encodeToByteArray_n90khx_k$(isInterface(serializer, KSerializer) ? serializer : THROW_CCE(), value);
        tmp = new ByteArrayContent(content_0, contentType);
      } else {
        var message = 'Unsupported format ' + format;
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
    return tmp;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).emit_t92u1f_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).emit_t92u1f_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  function _no_name_provided__qut3iv($this, $contentType, $charset, $typeInfo, $value) {
    this.$this_1 = $this;
    this.$contentType_1 = $contentType;
    this.$charset_1 = $charset;
    this.$typeInfo_1 = $typeInfo;
    this.$value_1 = $value;
  }
  protoOf(_no_name_provided__qut3iv).collect_2ahbzo_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$2(this, collector, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(_no_name_provided__qut3iv).collect_aksokr_k$ = function (collector, $completion) {
    return this.collect_2ahbzo_k$(collector, $completion);
  };
  function KotlinxSerializationConverter$serializeNullable$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KotlinxSerializationConverter$serializeNullable$slambda).invoke_tf1dmz_k$ = function (it, $completion) {
    var tmp = this.create_ldx8i_k$(it, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KotlinxSerializationConverter$serializeNullable$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_tf1dmz_k$((p1 == null ? true : p1 instanceof OutgoingContent) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KotlinxSerializationConverter$serializeNullable$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          return !(this.it_1 == null);
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KotlinxSerializationConverter$serializeNullable$slambda).create_ldx8i_k$ = function (it, completion) {
    var i = new KotlinxSerializationConverter$serializeNullable$slambda(completion);
    i.it_1 = it;
    return i;
  };
  protoOf(KotlinxSerializationConverter$serializeNullable$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_ldx8i_k$((value == null ? true : value instanceof OutgoingContent) ? value : THROW_CCE(), completion);
  };
  function KotlinxSerializationConverter$serializeNullable$slambda_0(resultContinuation) {
    var i = new KotlinxSerializationConverter$serializeNullable$slambda(resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_tf1dmz_k$(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _no_name_provided__qut3iv_0($this, $charset, $typeInfo, $content) {
    this.$this_1 = $this;
    this.$charset_1 = $charset;
    this.$typeInfo_1 = $typeInfo;
    this.$content_1 = $content;
  }
  protoOf(_no_name_provided__qut3iv_0).collect_ooju95_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$3(this, collector, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(_no_name_provided__qut3iv_0).collect_aksokr_k$ = function (collector, $completion) {
    return this.collect_ooju95_k$(collector, $completion);
  };
  function KotlinxSerializationConverter$deserialize$slambda($content, resultContinuation) {
    this.$content_1 = $content;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KotlinxSerializationConverter$deserialize$slambda).invoke_s5f16h_k$ = function (it, $completion) {
    var tmp = this.create_wyq9v6_k$(it, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KotlinxSerializationConverter$deserialize$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_s5f16h_k$((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KotlinxSerializationConverter$deserialize$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          return !(this.it_1 == null) ? true : this.$content_1.get_isClosedForRead_ajcc1s_k$();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KotlinxSerializationConverter$deserialize$slambda).create_wyq9v6_k$ = function (it, completion) {
    var i = new KotlinxSerializationConverter$deserialize$slambda(this.$content_1, completion);
    i.it_1 = it;
    return i;
  };
  function KotlinxSerializationConverter$deserialize$slambda_0($content, resultContinuation) {
    var i = new KotlinxSerializationConverter$deserialize$slambda($content, resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_s5f16h_k$(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $serializeNullableCOROUTINE$0(_this__u8e3s4, contentType, charset, typeInfo, value, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.contentType_1 = contentType;
    this.charset_1 = charset;
    this.typeInfo_1 = typeInfo;
    this.value_1 = value;
  }
  protoOf($serializeNullableCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var this_0 = asFlow(this._this__u8e3s4__1.extensions_1);
            var tmp_0 = new _no_name_provided__qut3iv(this_0, this.contentType_1, this.charset_1, this.typeInfo_1, this.value_1);
            suspendResult = firstOrNull(tmp_0, KotlinxSerializationConverter$serializeNullable$slambda_0(null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var fromExtension = suspendResult;
            if (!(fromExtension == null))
              return fromExtension;
            var tmp_1;
            try {
              tmp_1 = serializerForTypeInfo(this._this__u8e3s4__1.format_1.get_serializersModule_piitvg_k$(), this.typeInfo_1);
            } catch ($p) {
              var tmp_2;
              if ($p instanceof SerializationException) {
                var cause = $p;
                tmp_2 = guessSerializer(this.value_1, this._this__u8e3s4__1.format_1.get_serializersModule_piitvg_k$());
              } else {
                throw $p;
              }
              tmp_1 = tmp_2;
            }

            var serializer = tmp_1;
            return serializeContent(this._this__u8e3s4__1, serializer, this._this__u8e3s4__1.format_1, this.value_1, this.contentType_1, this.charset_1);
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $deserializeCOROUTINE$1(_this__u8e3s4, charset, typeInfo, content, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.charset_1 = charset;
    this.typeInfo_1 = typeInfo;
    this.content_1 = content;
  }
  protoOf($deserializeCOROUTINE$1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(1);
            var this_0 = asFlow(this._this__u8e3s4__1.extensions_1);
            var tmp_0 = new _no_name_provided__qut3iv_0(this_0, this.charset_1, this.typeInfo_1, this.content_1);
            suspendResult = firstOrNull(tmp_0, KotlinxSerializationConverter$deserialize$slambda_0(this.content_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.fromExtension0__1 = suspendResult;
            var tmp_1;
            if (!this._this__u8e3s4__1.extensions_1.isEmpty_y1axqb_k$()) {
              tmp_1 = !(this.fromExtension0__1 == null) ? true : this.content_1.get_isClosedForRead_ajcc1s_k$();
            } else {
              tmp_1 = false;
            }

            if (tmp_1)
              return this.fromExtension0__1;
            this.serializer1__1 = serializerForTypeInfo(this._this__u8e3s4__1.format_1.get_serializersModule_piitvg_k$(), this.typeInfo_1);
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.content_1.readRemaining$default_g3e7gf_k$(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var contentPacket = suspendResult;
            this.set_exceptionState_fex74n_k$(3);
            var tmp0_subject = this._this__u8e3s4__1.format_1;
            var tmp_2;
            if (isInterface(tmp0_subject, StringFormat)) {
              tmp_2 = this._this__u8e3s4__1.format_1.decodeFromString_jwu9sq_k$(this.serializer1__1, readText(contentPacket, this.charset_1));
            } else {
              if (isInterface(tmp0_subject, BinaryFormat)) {
                tmp_2 = this._this__u8e3s4__1.format_1.decodeFromByteArray_8opj5c_k$(this.serializer1__1, readBytes(contentPacket));
              } else {
                discard(contentPacket);
                var message = 'Unsupported format ' + this._this__u8e3s4__1.format_1;
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }

            return tmp_2;
          case 3:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_3 = this.get_exception_x0n6w6_k$();
            if (tmp_3 instanceof Error) {
              var cause = this.get_exception_x0n6w6_k$();
              throw new JsonConvertException('Illegal input: ' + cause.message, cause);
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 4:
            this.set_exceptionState_fex74n_k$(5);
            return Unit_getInstance();
          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function KotlinxSerializationConverter(format) {
    this.format_1 = format;
    this.extensions_1 = extensions(this.format_1);
    // Inline function 'kotlin.require' call
    var tmp;
    var tmp_0 = this.format_1;
    if (isInterface(tmp_0, BinaryFormat)) {
      tmp = true;
    } else {
      var tmp_1 = this.format_1;
      tmp = isInterface(tmp_1, StringFormat);
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp) {
      // Inline function 'io.ktor.serialization.kotlinx.KotlinxSerializationConverter.<anonymous>' call
      var message = 'Only binary and string formats are supported, ' + this.format_1 + ' is not supported.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(KotlinxSerializationConverter).serialize_e3d7mn_k$ = function (contentType, charset, typeInfo, value, $completion) {
    return this.serializeNullable_p74fup_k$(contentType, charset, typeInfo, value, $completion);
  };
  protoOf(KotlinxSerializationConverter).serialize_l3p0pi_k$ = function (contentType, charset, typeInfo, value, $completion) {
    return this.serialize_e3d7mn_k$(contentType, charset, typeInfo, value, $completion);
  };
  protoOf(KotlinxSerializationConverter).serializeNullable_p74fup_k$ = function (contentType, charset, typeInfo, value, $completion) {
    var tmp = new $serializeNullableCOROUTINE$0(this, contentType, charset, typeInfo, value, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KotlinxSerializationConverter).serializeNullable_vlzb1y_k$ = function (contentType, charset, typeInfo, value, $completion) {
    return this.serializeNullable_p74fup_k$(contentType, charset, typeInfo, value, $completion);
  };
  protoOf(KotlinxSerializationConverter).deserialize_4o4t3i_k$ = function (charset, typeInfo, content, $completion) {
    var tmp = new $deserializeCOROUTINE$1(this, charset, typeInfo, content, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function serializerForTypeInfo(_this__u8e3s4, typeInfo) {
    var module_0 = _this__u8e3s4;
    var tmp0_safe_receiver = typeInfo.get_kotlinType_flgmsk_k$();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.ktor.serialization.kotlinx.serializerForTypeInfo.<anonymous>' call
      var tmp_0;
      if (tmp0_safe_receiver.get_arguments_p5ddub_k$().isEmpty_y1axqb_k$()) {
        tmp_0 = null;
      } else {
        tmp_0 = serializerOrNull(module_0, tmp0_safe_receiver);
      }
      tmp = tmp_0;
    }
    var tmp2_elvis_lhs = tmp;
    var tmp_1;
    if (tmp2_elvis_lhs == null) {
      var tmp1_safe_receiver = module_0.getContextual$default_o8kdzb_k$(typeInfo.get_type_wovaf7_k$());
      tmp_1 = tmp1_safe_receiver == null ? null : maybeNullable(tmp1_safe_receiver, typeInfo);
    } else {
      tmp_1 = tmp2_elvis_lhs;
    }
    var tmp3_elvis_lhs = tmp_1;
    return tmp3_elvis_lhs == null ? maybeNullable(serializer(typeInfo.get_type_wovaf7_k$()), typeInfo) : tmp3_elvis_lhs;
  }
  function guessSerializer(value, module_0) {
    var tmp;
    if (value == null) {
      tmp = get_nullable(serializer_0(StringCompanionObject_getInstance()));
    } else {
      if (!(value == null) ? isInterface(value, List) : false) {
        tmp = ListSerializer(elementSerializer(value, module_0));
      } else {
        if (!(value == null) ? isArray(value) : false) {
          var tmp1_safe_receiver = firstOrNull_0(value);
          var tmp_0;
          if (tmp1_safe_receiver == null) {
            tmp_0 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'io.ktor.serialization.kotlinx.guessSerializer.<anonymous>' call
            tmp_0 = guessSerializer(tmp1_safe_receiver, module_0);
          }
          var tmp2_elvis_lhs = tmp_0;
          tmp = tmp2_elvis_lhs == null ? ListSerializer(serializer_0(StringCompanionObject_getInstance())) : tmp2_elvis_lhs;
        } else {
          if (!(value == null) ? isInterface(value, Set) : false) {
            tmp = SetSerializer(elementSerializer(value, module_0));
          } else {
            if (!(value == null) ? isInterface(value, Map) : false) {
              var keySerializer = elementSerializer(value.get_keys_wop4xp_k$(), module_0);
              var valueSerializer = elementSerializer(value.get_values_ksazhn_k$(), module_0);
              tmp = MapSerializer(keySerializer, valueSerializer);
            } else {
              var tmp3_elvis_lhs = module_0.getContextual$default_o8kdzb_k$(getKClassFromExpression(value));
              tmp = tmp3_elvis_lhs == null ? serializer(getKClassFromExpression(value)) : tmp3_elvis_lhs;
            }
          }
        }
      }
    }
    var tmp_1 = tmp;
    return isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
  }
  function maybeNullable(_this__u8e3s4, typeInfo) {
    var tmp;
    var tmp0_safe_receiver = typeInfo.get_kotlinType_flgmsk_k$();
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_isMarkedNullable_4el8ow_k$()) === true) {
      tmp = get_nullable(_this__u8e3s4);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function elementSerializer(_this__u8e3s4, module_0) {
    // Inline function 'kotlin.collections.distinctBy' call
    // Inline function 'kotlin.collections.map' call
    var this_0 = filterNotNull(_this__u8e3s4);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'io.ktor.serialization.kotlinx.elementSerializer.<anonymous>' call
      var tmp$ret$0 = guessSerializer(item, module_0);
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    var set = HashSet_init_$Create$();
    var list = ArrayList_init_$Create$();
    var tmp0_iterator_0 = destination.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var e = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'io.ktor.serialization.kotlinx.elementSerializer.<anonymous>' call
      var key = e.get_descriptor_wjt6a0_k$().get_serialName_u2rqhk_k$();
      if (set.add_utx5q5_k$(key)) {
        list.add_utx5q5_k$(e);
      }
    }
    var serializers = list;
    if (serializers.get_size_woubt6_k$() > 1) {
      // Inline function 'kotlin.error' call
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(serializers, 10));
      var tmp0_iterator_1 = serializers.iterator_jk1svi_k$();
      while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
        var item_0 = tmp0_iterator_1.next_20eer_k$();
        // Inline function 'io.ktor.serialization.kotlinx.elementSerializer.<anonymous>' call
        var tmp$ret$5 = item_0.get_descriptor_wjt6a0_k$().get_serialName_u2rqhk_k$();
        destination_0.add_utx5q5_k$(tmp$ret$5);
      }
      var message = 'Serializing collections of different element types is not yet supported. ' + ('Selected serializers: ' + destination_0);
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp0_elvis_lhs = singleOrNull(serializers);
    var selected = tmp0_elvis_lhs == null ? serializer_0(StringCompanionObject_getInstance()) : tmp0_elvis_lhs;
    if (selected.get_descriptor_wjt6a0_k$().get_isNullable_67sy7o_k$()) {
      return selected;
    }
    if (!isInterface(selected, KSerializer))
      THROW_CCE();
    var tmp$ret$8;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp;
      if (isInterface(_this__u8e3s4, Collection)) {
        tmp = _this__u8e3s4.isEmpty_y1axqb_k$();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$8 = false;
        break $l$block_0;
      }
      var tmp0_iterator_2 = _this__u8e3s4.iterator_jk1svi_k$();
      while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator_2.next_20eer_k$();
        // Inline function 'io.ktor.serialization.kotlinx.elementSerializer.<anonymous>' call
        if (element == null) {
          tmp$ret$8 = true;
          break $l$block_0;
        }
      }
      tmp$ret$8 = false;
    }
    if (tmp$ret$8) {
      return get_nullable(selected);
    }
    return selected;
  }
  function get_providers() {
    return emptyList();
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = serialization;
  //endregion
  return _;
}));
