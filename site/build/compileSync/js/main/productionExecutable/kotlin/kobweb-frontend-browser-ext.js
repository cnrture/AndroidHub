(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-browser-ext'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-browser-ext'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-browser-ext'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'kobweb-frontend-browser-ext'.");
    }
    root['kobweb-frontend-browser-ext'] = factory(typeof this['kobweb-frontend-browser-ext'] === 'undefined' ? {} : this['kobweb-frontend-browser-ext'], this['kotlin-kotlin-stdlib'], this['kotlinx-coroutines-core']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var VOID = kotlin_kotlin.$_$.g;
  var CompletableDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var json = kotlin_kotlin.$_$.v9;
  var Unit_instance = kotlin_kotlin.$_$.h4;
  var Enum = kotlin_kotlin.$_$.bd;
  var protoOf = kotlin_kotlin.$_$.fa;
  var classMeta = kotlin_kotlin.$_$.v8;
  var setMetadataFor = kotlin_kotlin.$_$.ga;
  var asCoroutineDispatcher = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var Exception = kotlin_kotlin.$_$.dd;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.f1;
  var decodeToString = kotlin_kotlin.$_$.eb;
  var THROW_CCE = kotlin_kotlin.$_$.kd;
  var isCharSequence = kotlin_kotlin.$_$.m9;
  var trim = kotlin_kotlin.$_$.uc;
  var toString = kotlin_kotlin.$_$.ka;
  var isBlank = kotlin_kotlin.$_$.mb;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.f2;
  var split = kotlin_kotlin.$_$.ac;
  var compareTo = kotlin_kotlin.$_$.w8;
  var repeat = kotlin_kotlin.$_$.vb;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.j1;
  var captureStack = kotlin_kotlin.$_$.p8;
  var CoroutineImpl = kotlin_kotlin.$_$.i8;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var isInterface = kotlin_kotlin.$_$.q9;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.u7;
  var Companion_instance = kotlin_kotlin.$_$.c4;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.j2;
  var intercepted = kotlin_kotlin.$_$.w7;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.d1;
  var returnIfSuspended = kotlin_kotlin.$_$.j;
  var KProperty1 = kotlin_kotlin.$_$.wa;
  var getPropertyCallableRef = kotlin_kotlin.$_$.d9;
  var lazy = kotlin_kotlin.$_$.he;
  var decapitalize = kotlin_kotlin.$_$.db;
  var joinToString = kotlin_kotlin.$_$.j6;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var charSequenceLength = kotlin_kotlin.$_$.t8;
  var charSequenceGet = kotlin_kotlin.$_$.s8;
  var isUpperCase = kotlin_kotlin.$_$.ob;
  var Char = kotlin_kotlin.$_$.yc;
  var isLowerCase = kotlin_kotlin.$_$.nb;
  var get_lastIndex = kotlin_kotlin.$_$.qb;
  var toString_0 = kotlin_kotlin.$_$.i2;
  var capitalize = kotlin_kotlin.$_$.ab;
  var objectMeta = kotlin_kotlin.$_$.ea;
  var _Duration___get_inWholeMilliseconds__impl__msfiry = kotlin_kotlin.$_$.d2;
  var Companion_getInstance = kotlin_kotlin.$_$.z3;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.h;
  var toDuration = kotlin_kotlin.$_$.xc;
  //endregion
  //region block: pre-declaration
  setMetadataFor(HttpMethod, 'HttpMethod', classMeta, Enum);
  setMetadataFor(ResponseException, 'ResponseException', classMeta, Exception);
  setMetadataFor(getBodyBytesAsync$slambda, 'getBodyBytesAsync$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($tryFetchCOROUTINE$0, '$tryFetchCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor($getBodyBytesCOROUTINE$1, '$getBodyBytesCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(HttpFetcher, 'HttpFetcher', classMeta, VOID, VOID, VOID, VOID, VOID, [3, 4]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(CancellableActionHandle, 'CancellableActionHandle', classMeta);
  //endregion
  function fetch(_this__u8e3s4, method, resource, headers, body, abortController, $completion) {
    headers = headers === VOID ? null : headers;
    body = body === VOID ? null : body;
    abortController = abortController === VOID ? null : abortController;
    var responseBytesDeferred = CompletableDeferred();
    var tmp;
    var tmp_0;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(headers == null ? true : headers.s())) {
      tmp_0 = true;
    } else {
      tmp_0 = !(body == null);
    }
    if (tmp_0) {
      // Inline function 'kotlin.apply' call
      var this_0 = json([]);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.browser.http.fetch.<anonymous>' call
      if (!(body == null)) {
        this_0['Content-Length'] = body.length;
      }
      if (headers == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.collections.iterator' call
        var tmp0_iterator = headers.k2().n();
        while (tmp0_iterator.b1()) {
          var tmp1_loop_parameter = tmp0_iterator.d1();
          // Inline function 'kotlin.collections.component1' call
          var key = tmp1_loop_parameter.n2();
          // Inline function 'kotlin.collections.component2' call
          var value = tmp1_loop_parameter.o2();
          this_0[key] = value;
        }
      }
      tmp = this_0;
    } else {
      tmp = null;
    }
    var headersJson = tmp;
    // Inline function 'org.w3c.fetch.RequestInit' call
    var method_0 = method.sa_1;
    var headers_0 = headersJson == null ? undefined : headersJson;
    var body_0 = body == null ? undefined : body;
    var referrer = undefined;
    var referrerPolicy = undefined;
    var mode = undefined;
    var credentials = undefined;
    var cache = undefined;
    var redirect = undefined;
    var integrity = undefined;
    var keepalive = undefined;
    var window_0 = undefined;
    var o = {};
    o['method'] = method_0;
    o['headers'] = headers_0;
    o['body'] = body_0;
    o['referrer'] = referrer;
    o['referrerPolicy'] = referrerPolicy;
    o['mode'] = mode;
    o['credentials'] = credentials;
    o['cache'] = cache;
    o['redirect'] = redirect;
    o['integrity'] = integrity;
    o['keepalive'] = keepalive;
    o['window'] = window_0;
    var requestInit = o;
    if (!(abortController == null)) {
      var requestInitDynamic = requestInit;
      requestInitDynamic['signal'] = abortController.nx_1;
    }
    var tmp_1 = _this__u8e3s4.window.fetch(resource, requestInit);
    var tmp_2 = fetch$lambda(responseBytesDeferred);
    tmp_1.then(tmp_2, fetch$lambda_0(responseBytesDeferred));
    return responseBytesDeferred.mp($completion);
  }
  var HttpMethod_DELETE_instance;
  var HttpMethod_GET_instance;
  var HttpMethod_HEAD_instance;
  var HttpMethod_OPTIONS_instance;
  var HttpMethod_PATCH_instance;
  var HttpMethod_POST_instance;
  var HttpMethod_PUT_instance;
  var HttpMethod_entriesInitialized;
  function HttpMethod_initEntries() {
    if (HttpMethod_entriesInitialized)
      return Unit_instance;
    HttpMethod_entriesInitialized = true;
    HttpMethod_DELETE_instance = new HttpMethod('DELETE', 0);
    HttpMethod_GET_instance = new HttpMethod('GET', 1);
    HttpMethod_HEAD_instance = new HttpMethod('HEAD', 2);
    HttpMethod_OPTIONS_instance = new HttpMethod('OPTIONS', 3);
    HttpMethod_PATCH_instance = new HttpMethod('PATCH', 4);
    HttpMethod_POST_instance = new HttpMethod('POST', 5);
    HttpMethod_PUT_instance = new HttpMethod('PUT', 6);
  }
  function HttpMethod(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function tryFetch(_this__u8e3s4, method, resource, headers, body, logOnError, abortController, $completion) {
    headers = headers === VOID ? null : headers;
    body = body === VOID ? null : body;
    logOnError = logOnError === VOID ? false : logOnError;
    abortController = abortController === VOID ? null : abortController;
    var tmp = new $tryFetchCOROUTINE$0(_this__u8e3s4, method, resource, headers, body, logOnError, abortController, $completion);
    tmp.cd_1 = Unit_instance;
    tmp.dd_1 = null;
    return tmp.md();
  }
  function getBodyBytesAsync(_this__u8e3s4, result) {
    var tmp = CoroutineScope(asCoroutineDispatcher(window));
    launch(tmp, VOID, VOID, getBodyBytesAsync$slambda_0(result, _this__u8e3s4, null));
  }
  function ResponseException(response, bodyBytes) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.browser.http.ResponseException.<init>.<anonymous>' call
    this_0.w5('URL = ' + response.url + ', Status = ' + response.status + ', Status Text = ' + response.statusText);
    var tmp1_safe_receiver = bodyBytes == null ? null : decodeToString(bodyBytes);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.text.trim' call
      tmp = toString(trim(isCharSequence(tmp1_safe_receiver) ? tmp1_safe_receiver : THROW_CCE()));
    }
    var tmp2_safe_receiver = tmp;
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_1;
      // Inline function 'com.varabyte.kobweb.browser.http.ResponseException.<init>.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.text.isNotBlank' call
      if (!isBlank(tmp2_safe_receiver)) {
        tmp_1 = tmp2_safe_receiver;
      } else {
        tmp_1 = null;
      }
      tmp_0 = tmp_1;
    }
    var bodyString = tmp_0;
    if (!(bodyString == null)) {
      // Inline function 'kotlin.text.appendLine' call
      this_0.x5(_Char___init__impl__6a9atx(10));
      var lines = split(bodyString, ['\n']);
      var tmp$ret$5;
      $l$block: {
        // Inline function 'kotlin.collections.maxOfOrNull' call
        var iterator = lines.n();
        if (!iterator.b1()) {
          tmp$ret$5 = null;
          break $l$block;
        }
        // Inline function 'com.varabyte.kobweb.browser.http.ResponseException.<init>.<anonymous>.<anonymous>' call
        var maxValue = iterator.d1().length;
        while (iterator.b1()) {
          // Inline function 'com.varabyte.kobweb.browser.http.ResponseException.<init>.<anonymous>.<anonymous>' call
          var v = iterator.d1().length;
          if (compareTo(maxValue, v) < 0) {
            maxValue = v;
          }
        }
        tmp$ret$5 = maxValue;
      }
      var tmp3_elvis_lhs = tmp$ret$5;
      var longestLineLength = tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs;
      var indent = '  ';
      var boundary = indent + repeat('-', longestLineLength);
      // Inline function 'kotlin.text.appendLine' call
      // Inline function 'kotlin.text.appendLine' call
      this_0.w5(boundary).x5(_Char___init__impl__6a9atx(10));
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = lines.n();
      while (tmp0_iterator.b1()) {
        var element = tmp0_iterator.d1();
        // Inline function 'com.varabyte.kobweb.browser.http.ResponseException.<init>.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.text.appendLine' call
        var value = indent + element;
        // Inline function 'kotlin.text.appendLine' call
        this_0.w5(value).x5(_Char___init__impl__6a9atx(10));
      }
      // Inline function 'kotlin.text.appendLine' call
      // Inline function 'kotlin.text.appendLine' call
      this_0.w5(boundary).x5(_Char___init__impl__6a9atx(10));
    }
    var tmp$ret$15 = this_0.toString();
    Exception_init_$Init$(tmp$ret$15, this);
    captureStack(this, ResponseException);
    this.ey_1 = response;
    this.fy_1 = bodyBytes;
  }
  function getBodyBytes(_this__u8e3s4, $completion) {
    var tmp = new $getBodyBytesCOROUTINE$1(_this__u8e3s4, $completion);
    tmp.cd_1 = Unit_instance;
    tmp.dd_1 = null;
    return tmp.md();
  }
  function fetch$lambda$lambda($responseBytesDeferred) {
    return function (bodyBytes) {
      $responseBytesDeferred.np(bodyBytes);
      return Unit_instance;
    };
  }
  function fetch$lambda$lambda_0($responseBytesDeferred, $res) {
    return function (bodyBytes) {
      $responseBytesDeferred.pp(new ResponseException($res, bodyBytes));
      return Unit_instance;
    };
  }
  function fetch$lambda($responseBytesDeferred) {
    return function (res) {
      var tmp;
      if (res.ok) {
        getBodyBytesAsync(res, fetch$lambda$lambda($responseBytesDeferred));
        tmp = Unit_instance;
      } else {
        getBodyBytesAsync(res, fetch$lambda$lambda_0($responseBytesDeferred, res));
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function fetch$lambda_0($responseBytesDeferred) {
    return function (t) {
      return $responseBytesDeferred.pp(t);
    };
  }
  function getBodyBytesAsync$slambda($result, $this_getBodyBytesAsync, resultContinuation) {
    this.xy_1 = $result;
    this.yy_1 = $this_getBodyBytesAsync;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(getBodyBytesAsync$slambda).az = function ($this$launch, $completion) {
    var tmp = this.bz($this$launch, $completion);
    tmp.cd_1 = Unit_instance;
    tmp.dd_1 = null;
    return tmp.md();
  };
  protoOf(getBodyBytesAsync$slambda).yd = function (p1, $completion) {
    return this.az((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(getBodyBytesAsync$slambda).md = function () {
    var suspendResult = this.cd_1;
    $sm: do
      try {
        var tmp = this.ad_1;
        switch (tmp) {
          case 0:
            this.bd_1 = 2;
            this.ad_1 = 1;
            suspendResult = getBodyBytes(this.yy_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.xy_1(ARGUMENT);
            return Unit_instance;
          case 2:
            throw this.dd_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.bd_1 === 2) {
          throw e;
        } else {
          this.ad_1 = this.bd_1;
          this.dd_1 = e;
        }
      }
     while (true);
  };
  protoOf(getBodyBytesAsync$slambda).bz = function ($this$launch, completion) {
    var i = new getBodyBytesAsync$slambda(this.xy_1, this.yy_1, completion);
    i.zy_1 = $this$launch;
    return i;
  };
  function getBodyBytesAsync$slambda_0($result, $this_getBodyBytesAsync, resultContinuation) {
    var i = new getBodyBytesAsync$slambda($result, $this_getBodyBytesAsync, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.az($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function getBodyBytes$lambda($cont) {
    return function (responseBuffer) {
      var int8Array = new Int8Array(responseBuffer);
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $cont;
      var tmp = 0;
      var tmp_0 = int8Array.length;
      var tmp_1 = new Int8Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_1[tmp_2] = int8Array[tmp_2];
        tmp = tmp + 1 | 0;
      }
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$3 = _Result___init__impl__xyqfz8(tmp_1);
      this_0.s6(tmp$ret$3);
      return Unit_instance;
    };
  }
  function getBodyBytes$lambda_0($cont) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $cont;
      // Inline function 'kotlin.Companion.success' call
      var value = new Int8Array(0);
      var tmp$ret$0 = _Result___init__impl__xyqfz8(value);
      this_0.s6(tmp$ret$0);
      return Unit_instance;
    };
  }
  function HttpMethod_GET_getInstance() {
    HttpMethod_initEntries();
    return HttpMethod_GET_instance;
  }
  function $tryFetchCOROUTINE$0(_this__u8e3s4, method, resource, headers, body, logOnError, abortController, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.wx_1 = _this__u8e3s4;
    this.xx_1 = method;
    this.yx_1 = resource;
    this.zx_1 = headers;
    this.ay_1 = body;
    this.by_1 = logOnError;
    this.cy_1 = abortController;
  }
  protoOf($tryFetchCOROUTINE$0).md = function () {
    var suspendResult = this.cd_1;
    $sm: do
      try {
        var tmp = this.ad_1;
        switch (tmp) {
          case 0:
            this.bd_1 = 3;
            this.bd_1 = 2;
            this.ad_1 = 1;
            suspendResult = fetch(this.wx_1, this.xx_1, this.yx_1, this.zx_1, this.ay_1, this.cy_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.dy_1 = suspendResult;
            this.bd_1 = 3;
            this.ad_1 = 4;
            continue $sm;
          case 2:
            this.bd_1 = 3;
            var tmp_0 = this.dd_1;
            if (tmp_0 instanceof Error) {
              var t = this.dd_1;
              var tmp_1 = this;
              if (this.by_1) {
                console.log('Error fetching resource "' + this.yx_1 + '"\n\n' + t);
              }
              tmp_1.dy_1 = null;
              this.ad_1 = 4;
              continue $sm;
            } else {
              throw this.dd_1;
            }

          case 3:
            throw this.dd_1;
          case 4:
            this.bd_1 = 3;
            return this.dy_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.bd_1 === 3) {
          throw e;
        } else {
          this.ad_1 = this.bd_1;
          this.dd_1 = e;
        }
      }
     while (true);
  };
  function $getBodyBytesCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.oy_1 = _this__u8e3s4;
  }
  protoOf($getBodyBytesCOROUTINE$1).md = function () {
    var suspendResult = this.cd_1;
    $sm: do
      try {
        var tmp = this.ad_1;
        switch (tmp) {
          case 0:
            this.bd_1 = 2;
            this.ad_1 = 1;
            var safe = SafeContinuation_init_$Create$(intercepted(this));
            var tmp_0 = this.oy_1.arrayBuffer();
            var tmp_1 = tmp_0.then(getBodyBytes$lambda(safe));
            tmp_1.catch(getBodyBytes$lambda_0(safe));
            suspendResult = returnIfSuspended(safe.t6(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.dd_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.bd_1 === 2) {
          throw e;
        } else {
          this.ad_1 = this.bd_1;
          this.dd_1 = e;
        }
      }
     while (true);
  };
  function get_http(_this__u8e3s4) {
    _init_properties_HttpFetcher_kt__6mmkul();
    // Inline function 'kotlin.getValue' call
    var this_0 = http$delegate;
    http$factory();
    return this_0.o2();
  }
  var http$delegate;
  function HttpFetcher(window_0) {
    this.cz_1 = window_0;
    this.dz_1 = false;
  }
  protoOf(HttpFetcher).ez = function (resource, headers, abortController, $completion) {
    return fetch(this.cz_1, HttpMethod_GET_getInstance(), resource, headers, null, abortController, $completion);
  };
  protoOf(HttpFetcher).fz = function (resource, headers, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.ez(resource, headers, abortController, $completion) : $super.ez.call(this, resource, headers, abortController, $completion);
  };
  protoOf(HttpFetcher).gz = function (resource, headers, abortController, $completion) {
    return tryFetch(this.cz_1, HttpMethod_GET_getInstance(), resource, headers, null, this.dz_1, abortController, $completion);
  };
  function http$delegate$lambda() {
    _init_properties_HttpFetcher_kt__6mmkul();
    return new HttpFetcher(window);
  }
  function http$factory() {
    return getPropertyCallableRef('http', 1, KProperty1, function (receiver) {
      return get_http(receiver);
    }, null);
  }
  var properties_initialized_HttpFetcher_kt_uxns7j;
  function _init_properties_HttpFetcher_kt__6mmkul() {
    if (!properties_initialized_HttpFetcher_kt_uxns7j) {
      properties_initialized_HttpFetcher_kt_uxns7j = true;
      http$delegate = lazy(http$delegate$lambda);
    }
  }
  function kebabCaseToCamelCase(_this__u8e3s4) {
    return decapitalize(kebabCaseToTitleCamelCase(_this__u8e3s4));
  }
  function kebabCaseToTitleCamelCase(_this__u8e3s4) {
    var tmp = split(_this__u8e3s4, ['-']);
    return joinToString(tmp, '', VOID, VOID, VOID, VOID, kebabCaseToTitleCamelCase$lambda);
  }
  function titleCamelCaseToKebabCase(_this__u8e3s4) {
    return camelCaseToKebabCase(_this__u8e3s4);
  }
  function camelCaseToKebabCase(_this__u8e3s4) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isBlank(_this__u8e3s4)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var lastIsUpper = false;
    var str = _this__u8e3s4;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.browser.util.camelCaseToKebabCase.<anonymous>' call
    // Inline function 'kotlin.text.forEachIndexed' call
    var index = 0;
    var inductionVariable = 0;
    while (inductionVariable < charSequenceLength(str)) {
      var item = charSequenceGet(str, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.varabyte.kobweb.browser.util.camelCaseToKebabCase.<anonymous>.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var isUpper = isUpperCase(item);
      var tmp;
      if (isUpper) {
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(this_0) > 0) {
          if (!lastIsUpper ? true : tmp1 < get_lastIndex(str) ? isLowerCase(charSequenceGet(str, tmp1 + 1 | 0)) : false) {
            this_0.w5('-');
          }
        }
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = toString_0(item).toLowerCase();
      } else {
        tmp = new Char(item);
      }
      var cFinal = tmp;
      this_0.v5(cFinal);
      lastIsUpper = isUpper;
    }
    return this_0.toString();
  }
  function kebabCaseToTitleCamelCase$lambda(it) {
    return capitalize(it);
  }
  function Companion() {
    Companion_instance_0 = this;
    this.hz_1 = new CancellableActionHandle(0);
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function CancellableActionHandle(id, isInterval) {
    Companion_getInstance_0();
    isInterval = isInterval === VOID ? false : isInterval;
    this.iz_1 = isInterval;
    this.jz_1 = id;
  }
  protoOf(CancellableActionHandle).kz = function () {
    if (this.iz_1) {
      self.clearInterval(this.jz_1);
    } else {
      self.clearTimeout(this.jz_1);
    }
    this.jz_1 = 0;
  };
  function setInterval(_this__u8e3s4, delay, block) {
    var id = _this__u8e3s4.setInterval(block, _Duration___get_inWholeMilliseconds__impl__msfiry(delay).fb());
    return new CancellableActionHandle(id, true);
  }
  function invokeLater(_this__u8e3s4, block) {
    // Inline function 'kotlin.time.Companion.milliseconds' call
    Companion_getInstance();
    var tmp$ret$0 = toDuration(0, DurationUnit_MILLISECONDS_getInstance());
    return setTimeout(_this__u8e3s4, tmp$ret$0, block);
  }
  function setTimeout(_this__u8e3s4, timeout, block) {
    var id = _this__u8e3s4.setTimeout(block, _Duration___get_inWholeMilliseconds__impl__msfiry(timeout).fb());
    return new CancellableActionHandle(id);
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_http;
  _.$_$.b = invokeLater;
  _.$_$.c = kebabCaseToCamelCase;
  _.$_$.d = kebabCaseToTitleCamelCase;
  _.$_$.e = setInterval;
  _.$_$.f = titleCamelCaseToKebabCase;
  _.$_$.g = Companion_getInstance_0;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-browser-ext.js.map
