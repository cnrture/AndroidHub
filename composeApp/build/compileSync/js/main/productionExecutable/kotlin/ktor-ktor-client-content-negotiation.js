(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './ktor-ktor-utils.js', './ktor-ktor-client-core.js', './ktor-ktor-http.js', './ktor-ktor-serialization.js', './ktor-ktor-io.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./ktor-ktor-utils.js'), require('./ktor-ktor-client-core.js'), require('./ktor-ktor-http.js'), require('./ktor-ktor-serialization.js'), require('./ktor-ktor-io.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-client-content-negotiation'.");
    }
    if (typeof this['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'ktor-ktor-client-content-negotiation'.");
    }
    if (typeof this['ktor-ktor-client-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation'. Its dependency 'ktor-ktor-client-core' was not found. Please, check whether 'ktor-ktor-client-core' is loaded prior to 'ktor-ktor-client-content-negotiation'.");
    }
    if (typeof this['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'ktor-ktor-client-content-negotiation'.");
    }
    if (typeof this['ktor-ktor-serialization'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation'. Its dependency 'ktor-ktor-serialization' was not found. Please, check whether 'ktor-ktor-serialization' is loaded prior to 'ktor-ktor-client-content-negotiation'.");
    }
    if (typeof this['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'ktor-ktor-client-content-negotiation'.");
    }
    root['ktor-ktor-client-content-negotiation'] = factory(typeof this['ktor-ktor-client-content-negotiation'] === 'undefined' ? {} : this['ktor-ktor-client-content-negotiation'], this['kotlin-kotlin-stdlib'], this['ktor-ktor-utils'], this['ktor-ktor-client-core'], this['ktor-ktor-http'], this['ktor-ktor-serialization'], this['ktor-ktor-io']);
  }
}(this, function (_, kotlin_kotlin, kotlin_io_ktor_ktor_utils, kotlin_io_ktor_ktor_client_core, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_serialization, kotlin_io_ktor_ktor_io) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.ic;
  var classMeta = kotlin_kotlin.$_$.xa;
  var setMetadataFor = kotlin_kotlin.$_$.jc;
  var VOID = kotlin_kotlin.$_$.g;
  var CoroutineImpl = kotlin_kotlin.$_$.ja;
  var Unit_instance = kotlin_kotlin.$_$.k5;
  var THROW_CCE = kotlin_kotlin.$_$.ng;
  var PipelineContext = kotlin_io_ktor_ktor_utils.$_$.g;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.v9;
  var HttpResponseContainer = kotlin_io_ktor_ktor_client_core.$_$.i;
  var contentType = kotlin_io_ktor_ktor_http.$_$.f1;
  var suitableCharset = kotlin_io_ktor_ktor_serialization.$_$.f;
  var plus = kotlin_kotlin.$_$.t8;
  var toMutableSet = kotlin_kotlin.$_$.p9;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.n;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.b;
  var register$default = kotlin_io_ktor_ktor_serialization.$_$.b;
  var Configuration = kotlin_io_ktor_ktor_serialization.$_$.c;
  var AttributeKey = kotlin_io_ktor_ktor_utils.$_$.l;
  var Phases_getInstance = kotlin_io_ktor_ktor_client_core.$_$.a;
  var Phases_getInstance_0 = kotlin_io_ktor_ktor_client_core.$_$.b;
  var HttpClientPlugin = kotlin_io_ktor_ktor_client_core.$_$.d;
  var objectMeta = kotlin_kotlin.$_$.hc;
  var toString = kotlin_kotlin.$_$.nc;
  var accept = kotlin_io_ktor_ktor_client_core.$_$.g;
  var Collection = kotlin_kotlin.$_$.s5;
  var isInterface = kotlin_kotlin.$_$.vb;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.p;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var contentType_0 = kotlin_io_ktor_ktor_http.$_$.d1;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var EmptyContent_getInstance = kotlin_io_ktor_ktor_client_core.$_$.c;
  var Unit = kotlin_kotlin.$_$.yg;
  var charset = kotlin_io_ktor_ktor_http.$_$.b1;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.f;
  var ensureNotNull = kotlin_kotlin.$_$.fh;
  var NullBody_instance = kotlin_io_ktor_ktor_http.$_$.a;
  var equals = kotlin_kotlin.$_$.ab;
  var joinToString = kotlin_kotlin.$_$.d8;
  var ByteReadChannel = kotlin_io_ktor_ktor_io.$_$.d1;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.r6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.m;
  var deserialize = kotlin_io_ktor_ktor_serialization.$_$.a;
  var Exception = kotlin_kotlin.$_$.dg;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.p1;
  var captureStack = kotlin_kotlin.$_$.ra;
  var KtorSimpleLogger = kotlin_io_ktor_ktor_utils.$_$.f;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.b5;
  var HttpStatusCode = kotlin_io_ktor_ktor_http.$_$.t;
  var getKClass = kotlin_kotlin.$_$.e;
  var setOf = kotlin_kotlin.$_$.c9;
  var endsWith = kotlin_kotlin.$_$.ae;
  var startsWith = kotlin_kotlin.$_$.we;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.z;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ConverterRegistration, 'ConverterRegistration', classMeta);
  setMetadataFor(ContentNegotiation$Config$defaultMatcher$1, VOID, classMeta);
  setMetadataFor(ContentNegotiation$Plugin$install$slambda, 'ContentNegotiation$Plugin$install$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(ContentNegotiation$Plugin$install$slambda_1, 'ContentNegotiation$Plugin$install$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(Config, 'Config', classMeta, VOID, [Configuration], Config);
  setMetadataFor(Plugin, 'Plugin', objectMeta, VOID, [HttpClientPlugin]);
  setMetadataFor($convertRequestCOROUTINE$0, '$convertRequestCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor($convertResponseCOROUTINE$1, '$convertResponseCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(ContentNegotiation, 'ContentNegotiation', classMeta, VOID, VOID, VOID, VOID, VOID, [2, 5]);
  setMetadataFor(ContentConverterException, 'ContentConverterException', classMeta, Exception);
  setMetadataFor(JsonContentTypeMatcher, 'JsonContentTypeMatcher', objectMeta);
  //endregion
  function get_LOGGER() {
    _init_properties_ContentNegotiation_kt__o183go();
    return LOGGER;
  }
  var LOGGER;
  function get_DefaultCommonIgnoredTypes() {
    _init_properties_ContentNegotiation_kt__o183go();
    return DefaultCommonIgnoredTypes;
  }
  var DefaultCommonIgnoredTypes;
  function ConverterRegistration(converter, contentTypeToSend, contentTypeMatcher) {
    this.ka9_1 = converter;
    this.la9_1 = contentTypeToSend;
    this.ma9_1 = contentTypeMatcher;
  }
  function defaultMatcher($this, pattern) {
    return new ContentNegotiation$Config$defaultMatcher$1(pattern);
  }
  function ContentNegotiation$Config$defaultMatcher$1($pattern) {
    this.na9_1 = $pattern;
  }
  protoOf(ContentNegotiation$Config$defaultMatcher$1).oa9 = function (contentType) {
    return contentType.y7y(this.na9_1);
  };
  function ContentNegotiation$Plugin$install$slambda($plugin, resultContinuation) {
    this.xa9_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ContentNegotiation$Plugin$install$slambda).t9b = function ($this$intercept, it, $completion) {
    var tmp = this.u9b($this$intercept, it, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(ContentNegotiation$Plugin$install$slambda).oi = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.t9b(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(ContentNegotiation$Plugin$install$slambda).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 3;
            this.ac_1 = 1;
            suspendResult = this.xa9_1.eaa(this.ya9_1.i7w_1, this.ya9_1.l7v(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.aaa_1 = suspendResult;
            var tmp_0 = this;
            var tmp_1;
            if (this.aaa_1 == null) {
              return Unit_instance;
            } else {
              tmp_1 = this.aaa_1;
            }

            tmp_0.baa_1 = tmp_1;
            this.ac_1 = 2;
            suspendResult = this.ya9_1.m7v(this.baa_1, this);
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
  protoOf(ContentNegotiation$Plugin$install$slambda).u9b = function ($this$intercept, it, completion) {
    var i = new ContentNegotiation$Plugin$install$slambda(this.xa9_1, completion);
    i.ya9_1 = $this$intercept;
    i.za9_1 = it;
    return i;
  };
  function ContentNegotiation$Plugin$install$slambda_0($plugin, resultContinuation) {
    var i = new ContentNegotiation$Plugin$install$slambda($plugin, resultContinuation);
    var l = function ($this$intercept, it, $completion) {
      return i.t9b($this$intercept, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function ContentNegotiation$Plugin$install$slambda_1($plugin, resultContinuation) {
    this.naa_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ContentNegotiation$Plugin$install$slambda_1).n9c = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $completion) {
    var tmp = this.o9c($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(ContentNegotiation$Plugin$install$slambda_1).oi = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.n9c(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(ContentNegotiation$Plugin$install$slambda_1).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 3;
            this.qaa_1 = this.paa_1.se();
            this.raa_1 = this.paa_1.te();
            var tmp_0 = this;
            var tmp0_elvis_lhs = contentType(this.oaa_1.i7w_1.a9c());
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              this.oaa_1;
              get_LOGGER().d7x('Response doesn\'t have "Content-Type" header, skipping ContentNegotiation plugin');
              return Unit_instance;
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.saa_1 = tmp_1;
            this.taa_1 = suitableCharset(this.oaa_1.i7w_1.j9f().g83());
            this.ac_1 = 1;
            suspendResult = this.naa_1.xaa(this.oaa_1.i7w_1.j9f().l9f(), this.qaa_1, this.raa_1, this.saa_1, this.taa_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.uaa_1 = suspendResult;
            var tmp_2 = this;
            var tmp_3;
            if (this.uaa_1 == null) {
              return Unit_instance;
            } else {
              tmp_3 = this.uaa_1;
            }

            tmp_2.vaa_1 = tmp_3;
            this.waa_1 = new HttpResponseContainer(this.qaa_1, this.vaa_1);
            this.ac_1 = 2;
            suspendResult = this.oaa_1.m7v(this.waa_1, this);
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
  protoOf(ContentNegotiation$Plugin$install$slambda_1).o9c = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, completion) {
    var i = new ContentNegotiation$Plugin$install$slambda_1(this.naa_1, completion);
    i.oaa_1 = $this$intercept;
    i.paa_1 = _name_for_destructuring_parameter_0__wldtmu;
    return i;
  };
  function ContentNegotiation$Plugin$install$slambda_2($plugin, resultContinuation) {
    var i = new ContentNegotiation$Plugin$install$slambda_1($plugin, resultContinuation);
    var l = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $completion) {
      return i.n9c($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Config() {
    this.yaa_1 = toMutableSet(plus(get_DefaultIgnoredTypes(), get_DefaultCommonIgnoredTypes()));
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.zaa_1 = ArrayList_init_$Create$();
  }
  protoOf(Config).v89 = function (contentType, converter, configuration) {
    var matcher = contentType.equals(Application_getInstance().r7x_1) ? JsonContentTypeMatcher_instance : defaultMatcher(this, contentType);
    this.aab(contentType, converter, matcher, configuration);
  };
  protoOf(Config).aab = function (contentTypeToSend, converter, contentTypeMatcher, configuration) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    configuration(converter);
    var registration = new ConverterRegistration(converter, contentTypeToSend, contentTypeMatcher);
    this.zaa_1.a1(registration);
  };
  function Plugin() {
    Plugin_instance = this;
    this.bab_1 = new AttributeKey('ContentNegotiation');
  }
  protoOf(Plugin).p2 = function () {
    return this.bab_1;
  };
  protoOf(Plugin).cab = function (block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new Config();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    var config = this_0;
    return new ContentNegotiation(config.zaa_1, config.yaa_1);
  };
  protoOf(Plugin).e9e = function (block) {
    return this.cab(block);
  };
  protoOf(Plugin).dab = function (plugin, scope) {
    var tmp = Phases_getInstance().y9j_1;
    scope.z9a_1.m7w(tmp, ContentNegotiation$Plugin$install$slambda_0(plugin, null));
    var tmp_0 = Phases_getInstance_0().z9d_1;
    scope.a9b_1.m7w(tmp_0, ContentNegotiation$Plugin$install$slambda_2(plugin, null));
  };
  protoOf(Plugin).f9e = function (plugin, scope) {
    return this.dab(plugin instanceof ContentNegotiation ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance;
  function Plugin_getInstance() {
    if (Plugin_instance == null)
      new Plugin();
    return Plugin_instance;
  }
  function ContentNegotiation$convertRequest$lambda(it) {
    return toString(it.ka9_1);
  }
  function $convertRequestCOROUTINE$0(_this__u8e3s4, request, body, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.mab_1 = _this__u8e3s4;
    this.nab_1 = request;
    this.oab_1 = body;
  }
  protoOf($convertRequestCOROUTINE$0).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 7;
            var tmp0_iterator = this.mab_1.caa_1.o();
            while (tmp0_iterator.d1()) {
              var element = tmp0_iterator.f1();
              get_LOGGER().d7x('Adding Accept=' + element.la9_1.u7y_1 + ' header for ' + this.nab_1.z9c_1);
              accept(this.nab_1, element.la9_1);
            }

            var tmp_0;
            var tmp_1 = this.oab_1;
            if (tmp_1 instanceof OutgoingContent) {
              tmp_0 = true;
            } else {
              var tmp$ret$0;
              l$ret$1: do {
                var this_0 = this.mab_1.daa_1;
                var tmp_2;
                if (isInterface(this_0, Collection)) {
                  tmp_2 = this_0.u();
                } else {
                  tmp_2 = false;
                }
                if (tmp_2) {
                  tmp$ret$0 = false;
                  break l$ret$1;
                }
                var tmp0_iterator_0 = this_0.o();
                while (tmp0_iterator_0.d1()) {
                  var element_0 = tmp0_iterator_0.f1();
                  if (element_0.c7(this.oab_1)) {
                    tmp$ret$0 = true;
                    break l$ret$1;
                  }
                }
                tmp$ret$0 = false;
              }
               while (false);
              tmp_0 = tmp$ret$0;
            }

            if (tmp_0) {
              get_LOGGER().d7x('Body type ' + getKClassFromExpression(this.oab_1) + ' is in ignored types. ' + ('Skipping ContentNegotiation for ' + this.nab_1.z9c_1 + '.'));
              return null;
            }

            var tmp_3 = this;
            var tmp0_elvis_lhs = contentType_0(this.nab_1);
            var tmp_4;
            if (tmp0_elvis_lhs == null) {
              this.mab_1;
              get_LOGGER().d7x("Request doesn't have Content-Type header. Skipping ContentNegotiation for " + this.nab_1.z9c_1 + '.');
              return null;
            } else {
              tmp_4 = tmp0_elvis_lhs;
            }

            tmp_3.pab_1 = tmp_4;
            var tmp_5 = this.oab_1;
            if (tmp_5 instanceof Unit) {
              get_LOGGER().d7x('Sending empty body for ' + this.nab_1.z9c_1);
              this.nab_1.b9d_1.w7t(HttpHeaders_getInstance().v7z_1);
              return EmptyContent_getInstance();
            }

            var tmp_6 = this;
            var this_1 = this.mab_1.caa_1;
            var destination = ArrayList_init_$Create$();
            var tmp0_iterator_1 = this_1.o();
            while (tmp0_iterator_1.d1()) {
              var element_1 = tmp0_iterator_1.f1();
              if (element_1.ma9_1.oa9(this.pab_1)) {
                destination.a1(element_1);
              }
            }

            var tmp_7;
            if (!destination.u()) {
              tmp_7 = destination;
            } else {
              tmp_7 = null;
            }

            var tmp1_elvis_lhs = tmp_7;
            var tmp_8;
            if (tmp1_elvis_lhs == null) {
              this.mab_1;
              get_LOGGER().d7x('None of the registered converters match request Content-Type=' + this.pab_1 + '. ' + ('Skipping ContentNegotiation for ' + this.nab_1.z9c_1 + '.'));
              return null;
            } else {
              tmp_8 = tmp1_elvis_lhs;
            }

            tmp_6.qab_1 = tmp_8;
            if (this.nab_1.v9z() == null) {
              get_LOGGER().d7x('Request has unknown body type. Skipping ContentNegotiation for ' + this.nab_1.z9c_1 + '.');
              return null;
            }

            this.nab_1.b9d_1.w7t(HttpHeaders_getInstance().v7z_1);
            this.ac_1 = 1;
            continue $sm;
          case 1:
            var tmp_9 = this;
            tmp_9.sab_1 = this.qab_1;
            this.tab_1 = this.sab_1.o();
            this.ac_1 = 2;
            continue $sm;
          case 2:
            if (!this.tab_1.d1()) {
              this.ac_1 = 5;
              continue $sm;
            }

            this.uab_1 = this.tab_1.f1();
            var tmp_10 = this;
            tmp_10.vab_1 = this.uab_1;
            this.ac_1 = 3;
            var tmp0_elvis_lhs_0 = charset(this.pab_1);
            var tmp_11 = tmp0_elvis_lhs_0 == null ? Charsets_getInstance().u7n_1 : tmp0_elvis_lhs_0;
            var tmp_12 = ensureNotNull(this.nab_1.v9z());
            var this_2 = this.oab_1;
            var tmp_13;
            if (!equals(this_2, NullBody_instance)) {
              tmp_13 = this_2;
            } else {
              tmp_13 = null;
            }

            suspendResult = this.vab_1.ka9_1.y89(this.pab_1, tmp_11, tmp_12, tmp_13, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var result = suspendResult;
            if (!(result == null)) {
              get_LOGGER().d7x('Converted request body using ' + this.vab_1.ka9_1 + ' for ' + this.nab_1.z9c_1);
            }

            var result_0 = result;
            if (!(result_0 == null)) {
              this.rab_1 = result_0;
              this.ac_1 = 6;
              continue $sm;
            } else {
              this.ac_1 = 4;
              continue $sm;
            }

          case 4:
            this.ac_1 = 2;
            continue $sm;
          case 5:
            this.rab_1 = null;
            if (false) {
              this.ac_1 = 1;
              continue $sm;
            }

            this.ac_1 = 6;
            continue $sm;
          case 6:
            var tmp2_elvis_lhs = this.rab_1;
            var tmp_14;
            if (tmp2_elvis_lhs == null) {
              var tmp_15 = "Can't convert " + toString(this.oab_1) + ' with contentType ' + this.pab_1 + ' using converters ';
              throw new ContentConverterException(tmp_15 + joinToString(this.qab_1, VOID, VOID, VOID, VOID, VOID, ContentNegotiation$convertRequest$lambda));
            } else {
              tmp_14 = tmp2_elvis_lhs;
            }

            var serializedContent = tmp_14;
            return serializedContent;
          case 7:
            throw this.dc_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.bc_1 === 7) {
          throw e;
        } else {
          this.ac_1 = this.bc_1;
          this.dc_1 = e;
        }
      }
     while (true);
  };
  function $convertResponseCOROUTINE$1(_this__u8e3s4, requestUrl, info, body, responseContentType, charset, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.eac_1 = _this__u8e3s4;
    this.fac_1 = requestUrl;
    this.gac_1 = info;
    this.hac_1 = body;
    this.iac_1 = responseContentType;
    this.jac_1 = charset;
  }
  protoOf($convertResponseCOROUTINE$1).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 2;
            var tmp_0 = this.hac_1;
            if (!isInterface(tmp_0, ByteReadChannel)) {
              get_LOGGER().d7x('Response body is already transformed. Skipping ContentNegotiation for ' + this.fac_1 + '.');
              return null;
            }

            if (this.eac_1.daa_1.s(this.gac_1.y7w_1)) {
              get_LOGGER().d7x('Response body type ' + this.gac_1.y7w_1 + ' is in ignored types. ' + ('Skipping ContentNegotiation for ' + this.fac_1 + '.'));
              return null;
            }

            var tmp_1 = this;
            var this_0 = this.eac_1.caa_1;
            var destination = ArrayList_init_$Create$();
            var tmp0_iterator = this_0.o();
            while (tmp0_iterator.d1()) {
              var element = tmp0_iterator.f1();
              if (element.ma9_1.oa9(this.iac_1)) {
                destination.a1(element);
              }
            }

            var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(destination, 10));
            var tmp0_iterator_0 = destination.o();
            while (tmp0_iterator_0.d1()) {
              var item = tmp0_iterator_0.f1();
              destination_0.a1(item.ka9_1);
            }

            var tmp_2;
            if (!destination_0.u()) {
              tmp_2 = destination_0;
            } else {
              tmp_2 = null;
            }

            var tmp0_elvis_lhs = tmp_2;
            var tmp_3;
            if (tmp0_elvis_lhs == null) {
              this.eac_1;
              get_LOGGER().d7x('None of the registered converters match response with Content-Type=' + this.iac_1 + '. ' + ('Skipping ContentNegotiation for ' + this.fac_1 + '.'));
              return null;
            } else {
              tmp_3 = tmp0_elvis_lhs;
            }

            tmp_1.kac_1 = tmp_3;
            this.ac_1 = 1;
            suspendResult = deserialize(this.kac_1, this.hac_1, this.gac_1, this.jac_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            if (!isInterface(result, ByteReadChannel)) {
              get_LOGGER().d7x('Response body was converted to ' + getKClassFromExpression(result) + ' for ' + this.fac_1 + '.');
            }

            return result;
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
  function ContentNegotiation(registrations, ignoredTypes) {
    Plugin_getInstance();
    this.caa_1 = registrations;
    this.daa_1 = ignoredTypes;
  }
  protoOf(ContentNegotiation).eaa = function (request, body, $completion) {
    var tmp = new $convertRequestCOROUTINE$0(this, request, body, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(ContentNegotiation).xaa = function (requestUrl, info, body, responseContentType, charset, $completion) {
    var tmp = new $convertResponseCOROUTINE$1(this, requestUrl, info, body, responseContentType, charset, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  function ContentConverterException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, ContentConverterException);
  }
  var properties_initialized_ContentNegotiation_kt_1ayduy;
  function _init_properties_ContentNegotiation_kt__o183go() {
    if (!properties_initialized_ContentNegotiation_kt_1ayduy) {
      properties_initialized_ContentNegotiation_kt_1ayduy = true;
      LOGGER = KtorSimpleLogger('io.ktor.client.plugins.contentnegotiation.ContentNegotiation');
      DefaultCommonIgnoredTypes = setOf([PrimitiveClasses_getInstance().g8(), PrimitiveClasses_getInstance().c8(), getKClass(HttpStatusCode), getKClass(ByteReadChannel), getKClass(OutgoingContent)]);
    }
  }
  function JsonContentTypeMatcher() {
  }
  protoOf(JsonContentTypeMatcher).oa9 = function (contentType) {
    if (contentType.y7y(Application_getInstance().r7x_1)) {
      return true;
    }
    var value = contentType.x7y().toString();
    return startsWith(value, 'application/') ? endsWith(value, '+json') : false;
  };
  var JsonContentTypeMatcher_instance;
  function JsonContentTypeMatcher_getInstance() {
    return JsonContentTypeMatcher_instance;
  }
  function get_DefaultIgnoredTypes() {
    _init_properties_DefaultIgnoredTypesJs_kt__rjtdk1();
    return DefaultIgnoredTypes;
  }
  var DefaultIgnoredTypes;
  var properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt;
  function _init_properties_DefaultIgnoredTypesJs_kt__rjtdk1() {
    if (!properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt) {
      properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt = true;
      // Inline function 'kotlin.collections.mutableSetOf' call
      DefaultIgnoredTypes = LinkedHashSet_init_$Create$();
    }
  }
  //region block: post-declaration
  protoOf(Config).w89 = register$default;
  //endregion
  //region block: init
  JsonContentTypeMatcher_instance = new JsonContentTypeMatcher();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Plugin_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-content-negotiation.js.map
