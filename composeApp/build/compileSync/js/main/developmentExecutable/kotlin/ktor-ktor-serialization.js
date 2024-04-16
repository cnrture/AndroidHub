(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './ktor-ktor-io.js', './ktor-ktor-http.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./ktor-ktor-io.js'), require('./ktor-ktor-http.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-serialization'.");
    }
    if (typeof this['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'ktor-ktor-serialization'.");
    }
    if (typeof this['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'ktor-ktor-serialization'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-serialization'.");
    }
    root['ktor-ktor-serialization'] = factory(typeof this['ktor-ktor-serialization'] === 'undefined' ? {} : this['ktor-ktor-serialization'], this['kotlin-kotlin-stdlib'], this['ktor-ktor-io'], this['ktor-ktor-http'], this['kotlinx-coroutines-core']);
  }
}(this, function (_, kotlin_kotlin, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_http, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var Exception = kotlin_kotlin.$_$.lj;
  var VOID = kotlin_kotlin.$_$.g;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.v1;
  var captureStack = kotlin_kotlin.$_$.jd;
  var protoOf = kotlin_kotlin.$_$.bf;
  var classMeta = kotlin_kotlin.$_$.pd;
  var setMetadataFor = kotlin_kotlin.$_$.cf;
  var Unit_getInstance = kotlin_kotlin.$_$.u5;
  var interfaceMeta = kotlin_kotlin.$_$.fe;
  var ensureNotNull = kotlin_kotlin.$_$.pk;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.g;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var parseAndSortHeader = kotlin_io_ktor_ktor_http.$_$.l1;
  var Companion_getInstance = kotlin_io_ktor_ktor_io.$_$.f;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var CoroutineImpl = kotlin_kotlin.$_$.yc;
  var THROW_CCE = kotlin_kotlin.$_$.vj;
  var isInterface = kotlin_kotlin.$_$.oe;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.jc;
  var Flow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var asFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h1;
  var firstOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var NullBody_getInstance = kotlin_io_ktor_ktor_http.$_$.a;
  var SuspendFunction1 = kotlin_kotlin.$_$.ad;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ContentConvertException, 'ContentConvertException', classMeta, Exception);
  setMetadataFor(JsonConvertException, 'JsonConvertException', classMeta, ContentConvertException);
  function register$default(contentType, converter, configuration, $super) {
    var tmp;
    if (configuration === VOID) {
      tmp = Configuration$register$lambda;
    } else {
      tmp = configuration;
    }
    configuration = tmp;
    var tmp_0;
    if ($super === VOID) {
      this.register_48t3rv_k$(contentType, converter, configuration);
      tmp_0 = Unit_getInstance();
    } else {
      tmp_0 = $super.register_48t3rv_k$.call(this, contentType, converter, configuration);
    }
    return tmp_0;
  }
  setMetadataFor(Configuration, 'Configuration', interfaceMeta);
  function serialize(contentType, charset, typeInfo, value, $completion) {
    return this.serializeNullable_vlzb1y_k$(contentType, charset, typeInfo, value, $completion);
  }
  function serializeNullable(contentType, charset, typeInfo, value, $completion) {
    return this.serialize_l3p0pi_k$(contentType, charset, typeInfo, ensureNotNull(value), $completion);
  }
  setMetadataFor(ContentConverter, 'ContentConverter', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [4, 3]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(deserialize$o$collect$slambda, 'deserialize$o$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$1, '$collectCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, VOID, [Flow], VOID, VOID, VOID, [1]);
  setMetadataFor(deserialize$slambda, 'deserialize$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor($deserializeCOROUTINE$0, '$deserializeCOROUTINE$0', classMeta, CoroutineImpl);
  //endregion
  function ContentConvertException(message, cause) {
    cause = cause === VOID ? null : cause;
    Exception_init_$Init$(message, cause, this);
    captureStack(this, ContentConvertException);
  }
  function JsonConvertException(message, cause) {
    cause = cause === VOID ? null : cause;
    ContentConvertException.call(this, message, cause);
    captureStack(this, JsonConvertException);
  }
  function Configuration$register$lambda($this$null) {
    return Unit_getInstance();
  }
  function Configuration() {
  }
  function ContentConverter() {
  }
  function deserialize(_this__u8e3s4, body, typeInfo, charset, $completion) {
    var tmp = new $deserializeCOROUTINE$0(_this__u8e3s4, body, typeInfo, charset, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function suitableCharset(_this__u8e3s4, defaultCharset) {
    defaultCharset = defaultCharset === VOID ? Charsets_getInstance().get_UTF_8_ihn39z_k$() : defaultCharset;
    var tmp0_elvis_lhs = suitableCharsetOrNull(_this__u8e3s4, defaultCharset);
    return tmp0_elvis_lhs == null ? defaultCharset : tmp0_elvis_lhs;
  }
  function suitableCharsetOrNull(_this__u8e3s4, defaultCharset) {
    defaultCharset = defaultCharset === VOID ? Charsets_getInstance().get_UTF_8_ihn39z_k$() : defaultCharset;
    var tmp0_iterator = parseAndSortHeader(_this__u8e3s4.get_6bo4tg_k$(HttpHeaders_getInstance().get_AcceptCharset_1vf6lh_k$())).iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var charset = tmp0_iterator.next_20eer_k$().component1_7eebsc_k$();
      if (charset === '*')
        return defaultCharset;
      else if (Companion_getInstance().isSupported_c9nas6_k$(charset))
        return Companion_getInstance().forName_etcah2_k$(charset);
    }
    return null;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).emit_t92u1f_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  function deserialize$o$collect$slambda($$this$unsafeFlow, $charset, $typeInfo, $body, resultContinuation) {
    this.$$this$unsafeFlow_1 = $$this$unsafeFlow;
    this.$charset_1 = $charset;
    this.$typeInfo_1 = $typeInfo;
    this.$body_1 = $body;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(deserialize$o$collect$slambda).invoke_1ln9et_k$ = function (value, $completion) {
    var tmp = this.create_qoq7u9_k$(value, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(deserialize$o$collect$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_1ln9et_k$((!(p1 == null) ? isInterface(p1, ContentConverter) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(deserialize$o$collect$slambda).doResume_5yljmg_k$ = function () {
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
            tmp_2.converter2__1 = this.value1__1;
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.converter2__1.deserialize_4o4t3i_k$(this.$charset_1, this.$typeInfo_1, this.$body_1, this);
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
  protoOf(deserialize$o$collect$slambda).create_qoq7u9_k$ = function (value, completion) {
    var i = new deserialize$o$collect$slambda(this.$$this$unsafeFlow_1, this.$charset_1, this.$typeInfo_1, this.$body_1, completion);
    i.value_1 = value;
    return i;
  };
  protoOf(deserialize$o$collect$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_qoq7u9_k$((!(value == null) ? isInterface(value, ContentConverter) : false) ? value : THROW_CCE(), completion);
  };
  function deserialize$o$collect$slambda_0($$this$unsafeFlow, $charset, $typeInfo, $body, resultContinuation) {
    var i = new deserialize$o$collect$slambda($$this$unsafeFlow, $charset, $typeInfo, $body, resultContinuation);
    var l = function (value, $completion) {
      return i.invoke_1ln9et_k$(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$1(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$1).doResume_5yljmg_k$ = function () {
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
            var tmp_1 = deserialize$o$collect$slambda_0(this.$this$unsafeFlow0__1, this._this__u8e3s4__1.$charset_1, this._this__u8e3s4__1.$typeInfo_1, this._this__u8e3s4__1.$body_1, null);
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
  function _no_name_provided__qut3iv($this, $charset, $typeInfo, $body) {
    this.$this_1 = $this;
    this.$charset_1 = $charset;
    this.$typeInfo_1 = $typeInfo;
    this.$body_1 = $body;
  }
  protoOf(_no_name_provided__qut3iv).collect_ooju95_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$1(this, collector, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(_no_name_provided__qut3iv).collect_aksokr_k$ = function (collector, $completion) {
    return this.collect_ooju95_k$(collector, $completion);
  };
  function deserialize$slambda($body, resultContinuation) {
    this.$body_1 = $body;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(deserialize$slambda).invoke_s5f16h_k$ = function (it, $completion) {
    var tmp = this.create_wyq9v6_k$(it, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(deserialize$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_s5f16h_k$((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(deserialize$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          return !(this.it_1 == null) ? true : this.$body_1.get_isClosedForRead_ajcc1s_k$();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(deserialize$slambda).create_wyq9v6_k$ = function (it, completion) {
    var i = new deserialize$slambda(this.$body_1, completion);
    i.it_1 = it;
    return i;
  };
  function deserialize$slambda_0($body, resultContinuation) {
    var i = new deserialize$slambda($body, resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_s5f16h_k$(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $deserializeCOROUTINE$0(_this__u8e3s4, body, typeInfo, charset, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.body_1 = body;
    this.typeInfo_1 = typeInfo;
    this.charset_1 = charset;
  }
  protoOf($deserializeCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var this_0 = asFlow(this._this__u8e3s4__1);
            var tmp_0 = new _no_name_provided__qut3iv(this_0, this.charset_1, this.typeInfo_1, this.body_1);
            suspendResult = firstOrNull(tmp_0, deserialize$slambda_0(this.body_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            var tmp_1;
            if (!(result == null)) {
              tmp_1 = result;
            } else {
              if (!this.body_1.get_isClosedForRead_ajcc1s_k$()) {
                tmp_1 = this.body_1;
              } else {
                var tmp0_safe_receiver = this.typeInfo_1.get_kotlinType_flgmsk_k$();
                if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_isMarkedNullable_4el8ow_k$()) === true) {
                  tmp_1 = NullBody_getInstance();
                } else {
                  throw new ContentConvertException('No suitable converter found for ' + this.typeInfo_1);
                }
              }
            }

            return tmp_1;
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
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = deserialize;
  _.$_$.b = register$default;
  _.$_$.c = Configuration;
  _.$_$.d = ContentConverter;
  _.$_$.e = JsonConvertException;
  _.$_$.f = suitableCharset;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-serialization.js.map
