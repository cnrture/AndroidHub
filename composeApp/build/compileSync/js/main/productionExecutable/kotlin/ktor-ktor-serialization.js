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
  var Exception = kotlin_kotlin.$_$.dg;
  var VOID = kotlin_kotlin.$_$.g;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.r1;
  var captureStack = kotlin_kotlin.$_$.ra;
  var protoOf = kotlin_kotlin.$_$.ic;
  var classMeta = kotlin_kotlin.$_$.xa;
  var setMetadataFor = kotlin_kotlin.$_$.jc;
  var Unit_instance = kotlin_kotlin.$_$.k5;
  var interfaceMeta = kotlin_kotlin.$_$.mb;
  var ensureNotNull = kotlin_kotlin.$_$.fh;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.f;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var parseAndSortHeader = kotlin_io_ktor_ktor_http.$_$.i1;
  var Companion_instance = kotlin_io_ktor_ktor_io.$_$.e;
  var CoroutineImpl = kotlin_kotlin.$_$.ja;
  var THROW_CCE = kotlin_kotlin.$_$.ng;
  var isInterface = kotlin_kotlin.$_$.vb;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.v9;
  var asFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
  var firstOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var NullBody_instance = kotlin_io_ktor_ktor_http.$_$.a;
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
      this.v89(contentType, converter, configuration);
      tmp_0 = Unit_instance;
    } else {
      tmp_0 = $super.v89.call(this, contentType, converter, configuration);
    }
    return tmp_0;
  }
  setMetadataFor(Configuration, 'Configuration', interfaceMeta);
  function serialize(contentType, charset, typeInfo, value, $completion) {
    return this.y89(contentType, charset, typeInfo, value, $completion);
  }
  function serializeNullable(contentType, charset, typeInfo, value, $completion) {
    return this.x89(contentType, charset, typeInfo, ensureNotNull(value), $completion);
  }
  setMetadataFor(ContentConverter, 'ContentConverter', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [4, 3]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(deserialize$o$collect$slambda, 'deserialize$o$collect$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$1, '$collectCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(deserialize$slambda, 'deserialize$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
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
    return Unit_instance;
  }
  function Configuration() {
  }
  function ContentConverter() {
  }
  function deserialize(_this__u8e3s4, body, typeInfo, charset, $completion) {
    var tmp = new $deserializeCOROUTINE$0(_this__u8e3s4, body, typeInfo, charset, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  }
  function suitableCharset(_this__u8e3s4, defaultCharset) {
    defaultCharset = defaultCharset === VOID ? Charsets_getInstance().u7n_1 : defaultCharset;
    var tmp0_elvis_lhs = suitableCharsetOrNull(_this__u8e3s4, defaultCharset);
    return tmp0_elvis_lhs == null ? defaultCharset : tmp0_elvis_lhs;
  }
  function suitableCharsetOrNull(_this__u8e3s4, defaultCharset) {
    defaultCharset = defaultCharset === VOID ? Charsets_getInstance().u7n_1 : defaultCharset;
    var tmp0_iterator = parseAndSortHeader(_this__u8e3s4.i7s(HttpHeaders_getInstance().e7z_1)).o();
    while (tmp0_iterator.d1()) {
      var charset = tmp0_iterator.f1().se();
      if (charset === '*')
        return defaultCharset;
      else if (Companion_instance.x7q(charset))
        return Companion_instance.w7q(charset);
    }
    return null;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.m8a_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).f18 = function (value, $completion) {
    return this.m8a_1(value, $completion);
  };
  function deserialize$o$collect$slambda($$this$unsafeFlow, $charset, $typeInfo, $body, resultContinuation) {
    this.v8a_1 = $$this$unsafeFlow;
    this.w8a_1 = $charset;
    this.x8a_1 = $typeInfo;
    this.y8a_1 = $body;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(deserialize$o$collect$slambda).e8b = function (value, $completion) {
    var tmp = this.f8b(value, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(deserialize$o$collect$slambda).yc = function (p1, $completion) {
    return this.e8b((!(p1 == null) ? isInterface(p1, ContentConverter) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(deserialize$o$collect$slambda).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 3;
            var tmp_0 = this;
            tmp_0.a8b_1 = this.v8a_1;
            var tmp_1 = this;
            tmp_1.b8b_1 = this.z8a_1;
            var tmp_2 = this;
            tmp_2.c8b_1 = this.b8b_1;
            this.ac_1 = 1;
            suspendResult = this.c8b_1.z89(this.w8a_1, this.x8a_1, this.y8a_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.d8b_1 = suspendResult;
            this.ac_1 = 2;
            suspendResult = this.a8b_1.f18(this.d8b_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.dc_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.bc_1 === 3) {
          throw e;
        } else {
          this.ac_1 = this.bc_1;
          this.dc_1 = e;
        }
      }
     while (true);
  };
  protoOf(deserialize$o$collect$slambda).f8b = function (value, completion) {
    var i = new deserialize$o$collect$slambda(this.v8a_1, this.w8a_1, this.x8a_1, this.y8a_1, completion);
    i.z8a_1 = value;
    return i;
  };
  function deserialize$o$collect$slambda_0($$this$unsafeFlow, $charset, $typeInfo, $body, resultContinuation) {
    var i = new deserialize$o$collect$slambda($$this$unsafeFlow, $charset, $typeInfo, $body, resultContinuation);
    var l = function (value, $completion) {
      return i.e8b(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$1(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o8b_1 = _this__u8e3s4;
    this.p8b_1 = collector;
  }
  protoOf($collectCOROUTINE$1).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 2;
            var tmp_0 = this;
            tmp_0.q8b_1 = this.p8b_1;
            this.ac_1 = 1;
            var tmp_1 = deserialize$o$collect$slambda_0(this.q8b_1, this.o8b_1.s8b_1, this.o8b_1.t8b_1, this.o8b_1.u8b_1, null);
            suspendResult = this.o8b_1.r8b_1.g18(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  function _no_name_provided__qut3iv($this, $charset, $typeInfo, $body) {
    this.r8b_1 = $this;
    this.s8b_1 = $charset;
    this.t8b_1 = $typeInfo;
    this.u8b_1 = $body;
  }
  protoOf(_no_name_provided__qut3iv).v8b = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$1(this, collector, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(_no_name_provided__qut3iv).g18 = function (collector, $completion) {
    return this.v8b(collector, $completion);
  };
  function deserialize$slambda($body, resultContinuation) {
    this.e8c_1 = $body;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(deserialize$slambda).g8c = function (it, $completion) {
    var tmp = this.h8c(it, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(deserialize$slambda).yc = function (p1, $completion) {
    return this.g8c((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(deserialize$slambda).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        if (tmp === 0) {
          this.bc_1 = 1;
          return !(this.f8c_1 == null) ? true : this.e8c_1.e7e();
        } else if (tmp === 1) {
          throw this.dc_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(deserialize$slambda).h8c = function (it, completion) {
    var i = new deserialize$slambda(this.e8c_1, completion);
    i.f8c_1 = it;
    return i;
  };
  function deserialize$slambda_0($body, resultContinuation) {
    var i = new deserialize$slambda($body, resultContinuation);
    var l = function (it, $completion) {
      return i.g8c(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $deserializeCOROUTINE$0(_this__u8e3s4, body, typeInfo, charset, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i8a_1 = _this__u8e3s4;
    this.j8a_1 = body;
    this.k8a_1 = typeInfo;
    this.l8a_1 = charset;
  }
  protoOf($deserializeCOROUTINE$0).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 2;
            this.ac_1 = 1;
            var this_0 = asFlow(this.i8a_1);
            var tmp_0 = new _no_name_provided__qut3iv(this_0, this.l8a_1, this.k8a_1, this.j8a_1);
            suspendResult = firstOrNull(tmp_0, deserialize$slambda_0(this.j8a_1, null), this);
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
              if (!this.j8a_1.e7e()) {
                tmp_1 = this.j8a_1;
              } else {
                var tmp0_safe_receiver = this.k8a_1.a7x_1;
                if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r7()) === true) {
                  tmp_1 = NullBody_instance;
                } else {
                  throw new ContentConvertException('No suitable converter found for ' + this.k8a_1);
                }
              }
            }

            return tmp_1;
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
