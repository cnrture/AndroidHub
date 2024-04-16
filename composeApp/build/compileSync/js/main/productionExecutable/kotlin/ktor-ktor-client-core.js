(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './ktor-ktor-utils.js', './kotlinx-atomicfu.js', './ktor-ktor-events.js', './ktor-ktor-io.js', './ktor-ktor-http.js', './ktor-ktor-websockets.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./ktor-ktor-utils.js'), require('./kotlinx-atomicfu.js'), require('./ktor-ktor-events.js'), require('./ktor-ktor-io.js'), require('./ktor-ktor-http.js'), require('./ktor-ktor-websockets.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof this['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof this['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof this['ktor-ktor-events'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'ktor-ktor-events' was not found. Please, check whether 'ktor-ktor-events' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof this['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof this['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof this['ktor-ktor-websockets'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'ktor-ktor-websockets' was not found. Please, check whether 'ktor-ktor-websockets' is loaded prior to 'ktor-ktor-client-core'.");
    }
    root['ktor-ktor-client-core'] = factory(typeof this['ktor-ktor-client-core'] === 'undefined' ? {} : this['ktor-ktor-client-core'], this['kotlin-kotlin-stdlib'], this['kotlinx-coroutines-core'], this['ktor-ktor-utils'], this['kotlinx-atomicfu'], this['ktor-ktor-events'], this['ktor-ktor-io'], this['ktor-ktor-http'], this['ktor-ktor-websockets']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_io_ktor_ktor_utils, kotlin_org_jetbrains_kotlinx_atomicfu, kotlin_io_ktor_ktor_events, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_websockets) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.ic;
  var objectCreate = kotlin_kotlin.$_$.gc;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m1;
  var Unit_instance = kotlin_kotlin.$_$.k5;
  var CoroutineImpl = kotlin_kotlin.$_$.ja;
  var THROW_CCE = kotlin_kotlin.$_$.ng;
  var PipelineContext = kotlin_io_ktor_ktor_utils.$_$.g;
  var toString = kotlin_kotlin.$_$.nc;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.v9;
  var classMeta = kotlin_kotlin.$_$.xa;
  var setMetadataFor = kotlin_kotlin.$_$.jc;
  var VOID = kotlin_kotlin.$_$.g;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var AttributesJsFn = kotlin_io_ktor_ktor_utils.$_$.m;
  var Events = kotlin_io_ktor_ktor_events.$_$.b;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var ensureNotNull = kotlin_kotlin.$_$.fh;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.x;
  var PlatformUtils_getInstance = kotlin_io_ktor_ktor_utils.$_$.c;
  var ByteReadChannel = kotlin_io_ktor_ktor_io.$_$.d1;
  var isInterface = kotlin_kotlin.$_$.vb;
  var AttributeKey = kotlin_io_ktor_ktor_utils.$_$.l;
  var objectMeta = kotlin_kotlin.$_$.hc;
  var instanceOf = kotlin_io_ktor_ktor_utils.$_$.j;
  var NullBody_instance = kotlin_io_ktor_ktor_http.$_$.a;
  var equals = kotlin_kotlin.$_$.ab;
  var cancel_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.uh;
  var IllegalStateException = kotlin_kotlin.$_$.fg;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.x1;
  var captureStack = kotlin_kotlin.$_$.ra;
  var defineProp = kotlin_kotlin.$_$.za;
  var UnsupportedOperationException = kotlin_kotlin.$_$.zg;
  var UnsupportedOperationException_init_$Init$ = kotlin_kotlin.$_$.o2;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var trimIndent = kotlin_kotlin.$_$.pf;
  var ByteReadChannel_0 = kotlin_io_ktor_ktor_io.$_$.c1;
  var readBytes = kotlin_io_ktor_ktor_io.$_$.u;
  var IllegalStateException_init_$Init$_0 = kotlin_kotlin.$_$.z1;
  var WriterScope = kotlin_io_ktor_ktor_io.$_$.e1;
  var ReadChannelContent = kotlin_io_ktor_ktor_http.$_$.n;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.nh;
  var GlobalScope_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var writer = kotlin_io_ktor_ktor_io.$_$.g1;
  var WriteChannelContent = kotlin_io_ktor_ktor_http.$_$.o;
  var Companion_getInstance = kotlin_io_ktor_ktor_io.$_$.g;
  var NoContent = kotlin_io_ktor_ktor_http.$_$.l;
  var ProtocolUpgrade = kotlin_io_ktor_ktor_http.$_$.m;
  var ByteArrayContent = kotlin_io_ktor_ktor_http.$_$.k;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.v1;
  var JsType_instance = kotlin_io_ktor_ktor_utils.$_$.b;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.b5;
  var arrayOf = kotlin_kotlin.$_$.bh;
  var createKType = kotlin_kotlin.$_$.b;
  var typeInfoImpl = kotlin_io_ktor_ktor_utils.$_$.k;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.p;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s1;
  var async = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var emptySet = kotlin_kotlin.$_$.k7;
  var interfaceMeta = kotlin_kotlin.$_$.mb;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.n;
  var UnsafeHeaderException = kotlin_io_ktor_ktor_http.$_$.x;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var CoroutineName = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var SilentSupervisor = kotlin_io_ktor_ktor_utils.$_$.n;
  var lazy = kotlin_kotlin.$_$.mh;
  var CompletableJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z;
  var KProperty1 = kotlin_kotlin.$_$.kd;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ib;
  var setOf = kotlin_kotlin.$_$.b9;
  var get = kotlin_kotlin.$_$.fa;
  var fold = kotlin_kotlin.$_$.ea;
  var minusKey = kotlin_kotlin.$_$.ga;
  var plus = kotlin_kotlin.$_$.ia;
  var Element = kotlin_kotlin.$_$.ha;
  var joinToString = kotlin_kotlin.$_$.d8;
  var setOf_0 = kotlin_kotlin.$_$.c9;
  var PipelinePhase = kotlin_io_ktor_ktor_utils.$_$.h;
  var contentLength = kotlin_io_ktor_ktor_http.$_$.c1;
  var Companion_getInstance_0 = kotlin_io_ktor_ktor_http.$_$.i;
  var charSequenceLength = kotlin_kotlin.$_$.va;
  var URLBuilder = kotlin_io_ktor_ktor_http.$_$.v;
  var get_DEFAULT_PORT = kotlin_io_ktor_ktor_http.$_$.r;
  var ParametersBuilder = kotlin_io_ktor_ktor_http.$_$.u;
  var appendAll = kotlin_io_ktor_ktor_utils.$_$.t;
  var takeFrom = kotlin_io_ktor_ktor_http.$_$.j1;
  var first = kotlin_kotlin.$_$.s7;
  var checkBuilderCapacity = kotlin_kotlin.$_$.p6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.m;
  var HeadersBuilder = kotlin_io_ktor_ktor_http.$_$.s;
  var URLBuilder_0 = kotlin_io_ktor_ktor_http.$_$.w;
  var KtorSimpleLogger = kotlin_io_ktor_ktor_utils.$_$.f;
  var MalformedInputException = kotlin_io_ktor_ktor_io.$_$.h;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.b;
  var toLong = kotlin_kotlin.$_$.lc;
  var toLong_0 = kotlin_kotlin.$_$.if;
  var contentType = kotlin_io_ktor_ktor_http.$_$.d1;
  var isByteArray = kotlin_kotlin.$_$.pb;
  var Text_getInstance = kotlin_io_ktor_ktor_http.$_$.c;
  var TextContent = kotlin_io_ktor_ktor_http.$_$.q;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.e5;
  var Long = kotlin_kotlin.$_$.gg;
  var copyTo = kotlin_io_ktor_ktor_io.$_$.a;
  var CancellationException = kotlin_kotlin.$_$.u9;
  var cancel_1 = kotlin_io_ktor_ktor_io.$_$.f1;
  var HttpStatusCode = kotlin_io_ktor_ktor_http.$_$.t;
  var getKClass = kotlin_kotlin.$_$.e;
  var toByteArray = kotlin_io_ktor_ktor_utils.$_$.a;
  var Input = kotlin_io_ktor_ktor_io.$_$.r;
  var ByteReadPacket = kotlin_io_ktor_ktor_io.$_$.q;
  var Unit = kotlin_kotlin.$_$.yg;
  var Companion_getInstance_2 = kotlin_io_ktor_ktor_http.$_$.f;
  var toString_0 = kotlin_kotlin.$_$.yh;
  var toInt = kotlin_kotlin.$_$.gf;
  var reversed = kotlin_kotlin.$_$.a9;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.z;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.f;
  var charset = kotlin_io_ktor_ktor_http.$_$.b1;
  var withCharset = kotlin_io_ktor_ktor_http.$_$.m1;
  var compareValues = kotlin_kotlin.$_$.t9;
  var get_name = kotlin_io_ktor_ktor_io.$_$.l;
  var toList = kotlin_kotlin.$_$.k9;
  var sortedWith = kotlin_kotlin.$_$.g9;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.i1;
  var roundToInt = kotlin_kotlin.$_$.sc;
  var firstOrNull = kotlin_kotlin.$_$.p7;
  var charset_0 = kotlin_io_ktor_ktor_http.$_$.a1;
  var readText = kotlin_io_ktor_ktor_io.$_$.w;
  var get_authority = kotlin_io_ktor_ktor_http.$_$.z;
  var takeFrom_0 = kotlin_io_ktor_ktor_http.$_$.k1;
  var isSecure = kotlin_io_ktor_ktor_http.$_$.g1;
  var get_authority_0 = kotlin_io_ktor_ktor_http.$_$.y;
  var EventDefinition = kotlin_io_ktor_ktor_events.$_$.a;
  var Companion_getInstance_3 = kotlin_io_ktor_ktor_http.$_$.h;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var cancel_2 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p1;
  var trimMargin = kotlin_kotlin.$_$.qf;
  var get_lastIndex = kotlin_kotlin.$_$.g8;
  var downTo = kotlin_kotlin.$_$.ed;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var isWebsocket = kotlin_io_ktor_ktor_http.$_$.h1;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t1;
  var IOException = kotlin_io_ktor_ktor_io.$_$.a1;
  var IOException_init_$Init$ = kotlin_io_ktor_ktor_io.$_$.d;
  var IllegalStateException_init_$Init$_1 = kotlin_kotlin.$_$.b2;
  var putAll = kotlin_io_ktor_ktor_utils.$_$.w;
  var GMTDate = kotlin_io_ktor_ktor_utils.$_$.e;
  var Pipeline = kotlin_io_ktor_ktor_utils.$_$.i;
  var decode = kotlin_io_ktor_ktor_io.$_$.i;
  var hashCode = kotlin_kotlin.$_$.kb;
  var get_ByteArrayPool = kotlin_io_ktor_ktor_io.$_$.b1;
  var readAvailable = kotlin_io_ktor_ktor_io.$_$.b;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var equals_0 = kotlin_kotlin.$_$.be;
  var flatten = kotlin_kotlin.$_$.v7;
  var copyToArray = kotlin_kotlin.$_$.g7;
  var get_platform = kotlin_io_ktor_ktor_utils.$_$.v;
  var Companion_getInstance_4 = kotlin_io_ktor_ktor_http.$_$.g;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c1;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.e1;
  var cancel_3 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n1;
  var Companion_getInstance_5 = kotlin_io_ktor_ktor_http.$_$.d;
  var intercepted = kotlin_kotlin.$_$.x9;
  var get_MODE_CANCELLABLE = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x;
  var extendThrowable = kotlin_kotlin.$_$.bb;
  var Companion_instance = kotlin_kotlin.$_$.f5;
  var createFailure = kotlin_kotlin.$_$.eh;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.b3;
  var toTypedArray = kotlin_kotlin.$_$.r9;
  var writeFully = kotlin_io_ktor_ktor_io.$_$.c;
  var Error_init_$Create$ = kotlin_kotlin.$_$.l1;
  var Error_init_$Create$_0 = kotlin_kotlin.$_$.n1;
  var _ChannelResult___get_isSuccess__impl__odq1z9 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var Channel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var Companion_getInstance_6 = kotlin_io_ktor_ktor_websockets.$_$.f;
  var Codes_CLOSED_ABNORMALLY_getInstance = kotlin_io_ktor_ktor_websockets.$_$.a;
  var Text_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.e;
  var Binary_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.c;
  var CloseReason = kotlin_io_ktor_ktor_websockets.$_$.g;
  var Close_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.d;
  var String_0 = kotlin_io_ktor_ktor_io.$_$.s;
  var BytePacketBuilder = kotlin_io_ktor_ktor_io.$_$.p;
  var writeFully_0 = kotlin_io_ktor_ktor_io.$_$.x;
  var readShort = kotlin_io_ktor_ktor_io.$_$.v;
  var cancelConsumed = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var Codes_NORMAL_getInstance = kotlin_io_ktor_ktor_websockets.$_$.b;
  var CompletableDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var Factory_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  //endregion
  //region block: pre-declaration
  setMetadataFor(HttpClient$slambda, 'HttpClient$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(HttpClient$slambda_1, 'HttpClient$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor($executeCOROUTINE$0, '$executeCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(HttpClient, 'HttpClient', classMeta, VOID, [CoroutineScope], VOID, VOID, VOID, [1]);
  setMetadataFor(HttpClientConfig, 'HttpClientConfig', classMeta, VOID, VOID, HttpClientConfig);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor($bodyNullableCOROUTINE$1, '$bodyNullableCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(HttpClientCall, 'HttpClientCall', classMeta, VOID, [CoroutineScope], VOID, VOID, VOID, [0, 1]);
  setMetadataFor(DoubleReceiveException, 'DoubleReceiveException', classMeta, IllegalStateException);
  setMetadataFor(NoTransformationFoundException, 'NoTransformationFoundException', classMeta, UnsupportedOperationException);
  setMetadataFor(SavedHttpCall, 'SavedHttpCall', classMeta, HttpClientCall, VOID, VOID, VOID, VOID, [0, 1]);
  function get_coroutineContext() {
    return this.h9g().vo();
  }
  setMetadataFor(HttpRequest_0, 'HttpRequest', interfaceMeta, VOID, [CoroutineScope]);
  setMetadataFor(SavedHttpRequest, 'SavedHttpRequest', classMeta, VOID, [HttpRequest_0]);
  setMetadataFor(HttpResponse, 'HttpResponse', classMeta, VOID, [CoroutineScope]);
  setMetadataFor(SavedHttpResponse, 'SavedHttpResponse', classMeta, HttpResponse);
  setMetadataFor($saveCOROUTINE$3, '$saveCOROUTINE$3', classMeta, CoroutineImpl);
  setMetadataFor(UnsupportedContentTypeException, 'UnsupportedContentTypeException', classMeta, IllegalStateException);
  setMetadataFor(ObservableContent$content$slambda, 'ObservableContent$content$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(ObservableContent, 'ObservableContent', classMeta, ReadChannelContent);
  setMetadataFor(HttpClientEngine$install$slambda, 'HttpClientEngine$install$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(HttpClientEngine$executeWithinCallContext$slambda, 'HttpClientEngine$executeWithinCallContext$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($executeWithinCallContextCOROUTINE$4, '$executeWithinCallContextCOROUTINE$4', classMeta, CoroutineImpl);
  function get_supportedCapabilities() {
    return emptySet();
  }
  function install(client) {
    var tmp = Phases_getInstance_0().s9d_1;
    client.b9b_1.m7w(tmp, HttpClientEngine$install$slambda_0(client, this, null));
  }
  setMetadataFor(HttpClientEngine, 'HttpClientEngine', interfaceMeta, VOID, [CoroutineScope], VOID, VOID, VOID, [1]);
  setMetadataFor(ClientEngineClosedException, 'ClientEngineClosedException', classMeta, IllegalStateException, VOID, ClientEngineClosedException);
  setMetadataFor(HttpClientEngineBase, 'HttpClientEngineBase', classMeta, VOID, [HttpClientEngine], VOID, VOID, VOID, [1]);
  setMetadataFor(HttpClientEngineConfig, 'HttpClientEngineConfig', classMeta, VOID, VOID, HttpClientEngineConfig);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(KtorCallContextElement, 'KtorCallContextElement', classMeta, VOID, [Element]);
  setMetadataFor(HttpClientPlugin, 'HttpClientPlugin', interfaceMeta);
  setMetadataFor(Plugin, 'Plugin', objectMeta, VOID, [HttpClientPlugin]);
  setMetadataFor(BodyProgress$handle$slambda, 'BodyProgress$handle$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(BodyProgress$handle$slambda_1, 'BodyProgress$handle$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(BodyProgress, 'BodyProgress', classMeta);
  setMetadataFor(DefaultRequest$Plugin$install$slambda, 'DefaultRequest$Plugin$install$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(Plugin_0, 'Plugin', objectMeta, VOID, [HttpClientPlugin]);
  setMetadataFor(DefaultRequestBuilder, 'DefaultRequestBuilder', classMeta);
  setMetadataFor(DefaultRequest, 'DefaultRequest', classMeta);
  setMetadataFor(ResponseException, 'ResponseException', classMeta, IllegalStateException);
  setMetadataFor(RedirectResponseException, 'RedirectResponseException', classMeta, ResponseException);
  setMetadataFor(ClientRequestException, 'ClientRequestException', classMeta, ResponseException);
  setMetadataFor(ServerResponseException, 'ServerResponseException', classMeta, ResponseException);
  setMetadataFor(addDefaultResponseValidation$lambda$slambda, 'addDefaultResponseValidation$lambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(defaultTransformers$1$content$1, VOID, classMeta, ByteArrayContent);
  setMetadataFor(defaultTransformers$1$content$2, VOID, classMeta, ReadChannelContent);
  setMetadataFor(defaultTransformers$slambda, 'defaultTransformers$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(defaultTransformers$slambda$slambda, 'defaultTransformers$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(defaultTransformers$slambda_1, 'defaultTransformers$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(HttpCallValidator$Companion$install$slambda, 'HttpCallValidator$Companion$install$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(HttpCallValidator$Companion$install$slambda_1, 'HttpCallValidator$Companion$install$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(HttpCallValidator$Companion$install$slambda_3, 'HttpCallValidator$Companion$install$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(Config, 'Config', classMeta, VOID, VOID, Config);
  setMetadataFor(Companion_1, 'Companion', objectMeta, VOID, [HttpClientPlugin]);
  setMetadataFor($validateResponseCOROUTINE$5, '$validateResponseCOROUTINE$5', classMeta, CoroutineImpl);
  setMetadataFor($processExceptionCOROUTINE$6, '$processExceptionCOROUTINE$6', classMeta, CoroutineImpl);
  setMetadataFor(HttpCallValidator, 'HttpCallValidator', classMeta, VOID, VOID, VOID, VOID, VOID, [1, 2]);
  setMetadataFor(ExceptionHandlerWrapper, 'ExceptionHandlerWrapper', classMeta);
  setMetadataFor(RequestExceptionHandlerWrapper, 'RequestExceptionHandlerWrapper', classMeta);
  setMetadataFor(HttpRequest$1, VOID, classMeta, VOID, [HttpRequest_0]);
  setMetadataFor(HttpPlainText$Plugin$install$slambda, 'HttpPlainText$Plugin$install$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(HttpPlainText$Plugin$install$slambda_1, 'HttpPlainText$Plugin$install$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(Config_0, 'Config', classMeta, VOID, VOID, Config_0);
  setMetadataFor(Plugin_1, 'Plugin', objectMeta, VOID, [HttpClientPlugin]);
  setMetadataFor(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', classMeta);
  setMetadataFor(HttpPlainText, 'HttpPlainText', classMeta);
  setMetadataFor(HttpRedirect$Plugin$install$slambda, 'HttpRedirect$Plugin$install$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor($handleCallCOROUTINE$7, '$handleCallCOROUTINE$7', classMeta, CoroutineImpl);
  setMetadataFor(Config_1, 'Config', classMeta, VOID, VOID, Config_1);
  setMetadataFor(Plugin_2, 'Plugin', objectMeta, VOID, [HttpClientPlugin], VOID, VOID, VOID, [4]);
  setMetadataFor(HttpRedirect, 'HttpRedirect', classMeta);
  setMetadataFor(HttpRequestLifecycle$Plugin$install$slambda, 'HttpRequestLifecycle$Plugin$install$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(Plugin_3, 'Plugin', objectMeta, VOID, [HttpClientPlugin]);
  setMetadataFor(HttpRequestLifecycle, 'HttpRequestLifecycle', classMeta);
  setMetadataFor(HttpSend$Plugin$install$slambda, 'HttpSend$Plugin$install$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor($executeCOROUTINE$8, '$executeCOROUTINE$8', classMeta, CoroutineImpl);
  setMetadataFor(Config_2, 'Config', classMeta, VOID, VOID, Config_2);
  setMetadataFor(Plugin_4, 'Plugin', objectMeta, VOID, [HttpClientPlugin]);
  setMetadataFor(Sender, 'Sender', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(InterceptedSender, 'InterceptedSender', classMeta, VOID, [Sender], VOID, VOID, VOID, [1]);
  setMetadataFor(DefaultSender, 'DefaultSender', classMeta, VOID, [Sender], VOID, VOID, VOID, [1]);
  setMetadataFor(HttpSend, 'HttpSend', classMeta);
  setMetadataFor(SendCountExceedException, 'SendCountExceedException', classMeta, IllegalStateException);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(HttpTimeout$Plugin$install$slambda$slambda, 'HttpTimeout$Plugin$install$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(HttpTimeout$Plugin$install$slambda, 'HttpTimeout$Plugin$install$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(HttpTimeoutCapabilityConfiguration, 'HttpTimeoutCapabilityConfiguration', classMeta, VOID, VOID, HttpTimeoutCapabilityConfiguration_init_$Create$);
  setMetadataFor(Plugin_5, 'Plugin', objectMeta, VOID, [HttpClientPlugin]);
  setMetadataFor(HttpTimeout, 'HttpTimeout', classMeta);
  setMetadataFor(HttpRequestTimeoutException, 'HttpRequestTimeoutException', classMeta, IOException);
  setMetadataFor(DelegatedCall, 'DelegatedCall', classMeta, HttpClientCall, VOID, VOID, VOID, VOID, [0, 1]);
  setMetadataFor(DelegatedRequest, 'DelegatedRequest', classMeta, VOID, [HttpRequest_0]);
  setMetadataFor(DelegatedResponse, 'DelegatedResponse', classMeta, HttpResponse);
  setMetadataFor(WebSocketCapability, 'WebSocketCapability', objectMeta);
  setMetadataFor(WebSocketException, 'WebSocketException', classMeta, IllegalStateException);
  setMetadataFor(ClientUpgradeContent, 'ClientUpgradeContent', classMeta, NoContent, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(DefaultHttpRequest, 'DefaultHttpRequest', classMeta, VOID, [HttpRequest_0]);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(HttpRequestBuilder, 'HttpRequestBuilder', classMeta, VOID, VOID, HttpRequestBuilder);
  setMetadataFor(HttpRequestData, 'HttpRequestData', classMeta);
  setMetadataFor(HttpResponseData, 'HttpResponseData', classMeta);
  setMetadataFor(Phases, 'Phases', objectMeta);
  setMetadataFor(HttpRequestPipeline, 'HttpRequestPipeline', classMeta, Pipeline, VOID, HttpRequestPipeline, VOID, VOID, [2]);
  setMetadataFor(Phases_0, 'Phases', objectMeta);
  setMetadataFor(HttpSendPipeline, 'HttpSendPipeline', classMeta, Pipeline, VOID, HttpSendPipeline, VOID, VOID, [2]);
  setMetadataFor(DefaultHttpResponse, 'DefaultHttpResponse', classMeta, HttpResponse);
  setMetadataFor($bodyAsTextCOROUTINE$13, '$bodyAsTextCOROUTINE$13', classMeta, CoroutineImpl);
  setMetadataFor(Phases_1, 'Phases', objectMeta);
  setMetadataFor(HttpResponsePipeline, 'HttpResponsePipeline', classMeta, Pipeline, VOID, HttpResponsePipeline, VOID, VOID, [2]);
  setMetadataFor(Phases_2, 'Phases', objectMeta);
  setMetadataFor(HttpReceivePipeline, 'HttpReceivePipeline', classMeta, Pipeline, VOID, HttpReceivePipeline, VOID, VOID, [2]);
  setMetadataFor(HttpResponseContainer, 'HttpResponseContainer', classMeta);
  setMetadataFor(HttpStatement$execute$slambda, 'HttpStatement$execute$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($executeCOROUTINE$14, '$executeCOROUTINE$14', classMeta, CoroutineImpl);
  setMetadataFor($executeUnsafeCOROUTINE$15, '$executeUnsafeCOROUTINE$15', classMeta, CoroutineImpl);
  setMetadataFor($cleanupCOROUTINE$16, '$cleanupCOROUTINE$16', classMeta, CoroutineImpl);
  setMetadataFor(HttpStatement, 'HttpStatement', classMeta, VOID, VOID, VOID, VOID, VOID, [1, 0]);
  setMetadataFor(observable$slambda, 'observable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(HttpResponseReceiveFail, 'HttpResponseReceiveFail', classMeta);
  setMetadataFor(EmptyContent, 'EmptyContent', objectMeta, NoContent);
  setMetadataFor(Js, 'Js', objectMeta);
  setMetadataFor(JsClientEngine$createWebSocket$headers_capturingHack$1, VOID, classMeta);
  setMetadataFor($executeCOROUTINE$17, '$executeCOROUTINE$17', classMeta, CoroutineImpl);
  setMetadataFor($executeWebSocketRequestCOROUTINE$18, '$executeWebSocketRequestCOROUTINE$18', classMeta, CoroutineImpl);
  setMetadataFor(JsClientEngine, 'JsClientEngine', classMeta, HttpClientEngineBase, VOID, VOID, VOID, VOID, [1, 2]);
  setMetadataFor(JsError, 'JsError', classMeta, Error);
  setMetadataFor(toRaw$slambda, 'toRaw$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($toRawCOROUTINE$19, '$toRawCOROUTINE$19', classMeta, CoroutineImpl);
  setMetadataFor(channelFromStream$slambda, 'channelFromStream$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(readBodyNode$slambda, 'readBodyNode$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(JsWebSocketSession$slambda, 'JsWebSocketSession$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(JsWebSocketSession, 'JsWebSocketSession', classMeta, VOID, [CoroutineScope], VOID, VOID, VOID, [0, 1]);
  //endregion
  function HttpClient_init_$Init$(engine, userConfig, manageEngine, $this) {
    HttpClient.call($this, engine, userConfig);
    $this.v9a_1 = manageEngine;
    return $this;
  }
  function HttpClient_init_$Create$(engine, userConfig, manageEngine) {
    return HttpClient_init_$Init$(engine, userConfig, manageEngine, objectCreate(protoOf(HttpClient)));
  }
  function HttpClient$lambda(this$0) {
    return function (it) {
      var tmp;
      if (!(it == null)) {
        cancel(this$0.t9a_1);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function HttpClient$slambda(this$0, resultContinuation) {
    this.p9b_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpClient$slambda).t9b = function ($this$intercept, call, $completion) {
    var tmp = this.u9b($this$intercept, call, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(HttpClient$slambda).oi = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.t9b(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpClient$slambda).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 3;
            var tmp_0 = this.r9b_1;
            if (!(tmp_0 instanceof HttpClientCall)) {
              var message = 'Error: HttpClientCall expected, but found ' + toString(this.r9b_1) + '(' + getKClassFromExpression(this.r9b_1) + ').';
              throw IllegalStateException_init_$Create$(toString(message));
            }

            this.ac_1 = 1;
            suspendResult = this.p9b_1.c9b_1.h7w(Unit_instance, this.r9b_1.a9c(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.s9b_1 = suspendResult;
            this.r9b_1.b9c(this.s9b_1);
            this.ac_1 = 2;
            suspendResult = this.q9b_1.m7v(this.r9b_1, this);
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
  protoOf(HttpClient$slambda).u9b = function ($this$intercept, call, completion) {
    var i = new HttpClient$slambda(this.p9b_1, completion);
    i.q9b_1 = $this$intercept;
    i.r9b_1 = call;
    return i;
  };
  function HttpClient$slambda_0(this$0, resultContinuation) {
    var i = new HttpClient$slambda(this$0, resultContinuation);
    var l = function ($this$intercept, call, $completion) {
      return i.t9b($this$intercept, call, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function HttpClient$lambda_0($this$install) {
    defaultTransformers($this$install);
    return Unit_instance;
  }
  function HttpClient$slambda_1(this$0, resultContinuation) {
    this.k9c_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpClient$slambda_1).n9c = function ($this$intercept, it, $completion) {
    var tmp = this.o9c($this$intercept, it, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(HttpClient$slambda_1).oi = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.n9c(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpClient$slambda_1).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 3;
            this.bc_1 = 2;
            this.ac_1 = 1;
            suspendResult = this.l9c_1.n7v(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.bc_1 = 3;
            this.ac_1 = 4;
            continue $sm;
          case 2:
            this.bc_1 = 3;
            var tmp_0 = this.dc_1;
            if (tmp_0 instanceof Error) {
              var cause = this.dc_1;
              this.k9c_1.f9b_1.o9a(get_HttpResponseReceiveFailed(), new HttpResponseReceiveFail(this.l9c_1.i7w_1.a9c(), cause));
              throw cause;
            } else {
              throw this.dc_1;
            }

          case 3:
            throw this.dc_1;
          case 4:
            this.bc_1 = 3;
            return Unit_instance;
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
  protoOf(HttpClient$slambda_1).o9c = function ($this$intercept, it, completion) {
    var i = new HttpClient$slambda_1(this.k9c_1, completion);
    i.l9c_1 = $this$intercept;
    i.m9c_1 = it;
    return i;
  };
  function HttpClient$slambda_2(this$0, resultContinuation) {
    var i = new HttpClient$slambda_1(this$0, resultContinuation);
    var l = function ($this$intercept, it, $completion) {
      return i.n9c($this$intercept, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $executeCOROUTINE$0(_this__u8e3s4, builder, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x9c_1 = _this__u8e3s4;
    this.y9c_1 = builder;
  }
  protoOf($executeCOROUTINE$0).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 2;
            this.x9c_1.f9b_1.o9a(get_HttpRequestCreated(), this.y9c_1);
            this.ac_1 = 1;
            suspendResult = this.x9c_1.z9a_1.h7w(this.y9c_1, this.y9c_1.c9d_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult instanceof HttpClientCall ? suspendResult : THROW_CCE();
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
  function HttpClient(engine, userConfig) {
    userConfig = userConfig === VOID ? new HttpClientConfig() : userConfig;
    this.t9a_1 = engine;
    this.u9a_1 = userConfig;
    this.v9a_1 = false;
    this.w9a_1 = atomic$boolean$1(false);
    this.x9a_1 = Job(this.t9a_1.vo().hc(Key_instance));
    this.y9a_1 = this.t9a_1.vo().yf(this.x9a_1);
    this.z9a_1 = new HttpRequestPipeline(this.u9a_1.m9d_1);
    this.a9b_1 = new HttpResponsePipeline(this.u9a_1.m9d_1);
    this.b9b_1 = new HttpSendPipeline(this.u9a_1.m9d_1);
    this.c9b_1 = new HttpReceivePipeline(this.u9a_1.m9d_1);
    this.d9b_1 = AttributesJsFn(true);
    this.e9b_1 = this.t9a_1.n9d();
    this.f9b_1 = new Events();
    this.g9b_1 = new HttpClientConfig();
    if (this.v9a_1) {
      this.x9a_1.xp(HttpClient$lambda(this));
    }
    this.t9a_1.o9d(this);
    var tmp = Phases_getInstance_0().t9d_1;
    this.b9b_1.m7w(tmp, HttpClient$slambda_0(this, null));
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var $this$with = this.u9a_1;
    this.g9b_1.u9d(Plugin_getInstance_3());
    this.g9b_1.u9d(Plugin_getInstance());
    if ($this$with.k9d_1) {
      this.g9b_1.v9d('DefaultTransformers', HttpClient$lambda_0);
    }
    this.g9b_1.u9d(Plugin_getInstance_4());
    this.g9b_1.u9d(Companion_getInstance_9());
    if ($this$with.j9d_1) {
      this.g9b_1.u9d(Plugin_getInstance_2());
    }
    this.g9b_1.w9d($this$with);
    if ($this$with.k9d_1) {
      this.g9b_1.u9d(Plugin_getInstance_1());
    }
    addDefaultResponseValidation(this.g9b_1);
    this.g9b_1.o9d(this);
    var tmp_0 = Phases_getInstance_1().x9d_1;
    this.a9b_1.m7w(tmp_0, HttpClient$slambda_2(this, null));
  }
  protoOf(HttpClient).vo = function () {
    return this.y9a_1;
  };
  protoOf(HttpClient).c9e = function (builder, $completion) {
    var tmp = new $executeCOROUTINE$0(this, builder, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(HttpClient).toString = function () {
    return 'HttpClient[' + this.t9a_1 + ']';
  };
  function HttpClient_0(engineFactory, block) {
    var tmp;
    if (block === VOID) {
      tmp = HttpClient$lambda_1;
    } else {
      tmp = block;
    }
    block = tmp;
    // Inline function 'kotlin.apply' call
    var this_0 = new HttpClientConfig();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    var config = this_0;
    var engine = engineFactory.d9e(config.i9d_1);
    var client = HttpClient_init_$Create$(engine, config, true);
    var tmp_0 = ensureNotNull(client.y9a_1.hc(Key_instance));
    tmp_0.xp(HttpClient$lambda_2(engine));
    return client;
  }
  function HttpClient$lambda_1($this$null) {
    return Unit_instance;
  }
  function HttpClient$lambda_2($engine) {
    return function (it) {
      $engine.y1k();
      return Unit_instance;
    };
  }
  function HttpClientConfig$engineConfig$lambda($this$null) {
    return Unit_instance;
  }
  function HttpClientConfig$install$lambda($this$null) {
    return Unit_instance;
  }
  function HttpClientConfig$install$lambda_0($previousConfigBlock, $configure) {
    return function ($this$null) {
      var tmp0_safe_receiver = $previousConfigBlock;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver($this$null);
      $configure(!($this$null == null) ? $this$null : THROW_CCE());
      return Unit_instance;
    };
  }
  function HttpClientConfig$install$lambda$lambda() {
    return AttributesJsFn(true);
  }
  function HttpClientConfig$install$lambda_1($plugin) {
    return function (scope) {
      var tmp = get_PLUGIN_INSTALLED_LIST();
      var attributes = scope.d9b_1.t7r(tmp, HttpClientConfig$install$lambda$lambda);
      var config = ensureNotNull(scope.g9b_1.g9d_1.x2($plugin.p2()));
      var pluginData = $plugin.e9e(config);
      $plugin.f9e(pluginData, scope);
      attributes.r7r($plugin.p2(), pluginData);
      return Unit_instance;
    };
  }
  function HttpClientConfig() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.f9d_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.g9d_1 = LinkedHashMap_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.h9d_1 = LinkedHashMap_init_$Create$();
    var tmp_2 = this;
    tmp_2.i9d_1 = HttpClientConfig$engineConfig$lambda;
    this.j9d_1 = true;
    this.k9d_1 = true;
    this.l9d_1 = false;
    this.m9d_1 = PlatformUtils_getInstance().g7t_1;
  }
  protoOf(HttpClientConfig).g9e = function (plugin, configure) {
    var previousConfigBlock = this.g9d_1.x2(plugin.p2());
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.g9d_1;
    var key = plugin.p2();
    var value = HttpClientConfig$install$lambda_0(previousConfigBlock, configure);
    this_0.n2(key, value);
    if (this.f9d_1.u2(plugin.p2()))
      return Unit_instance;
    // Inline function 'kotlin.collections.set' call
    var this_1 = this.f9d_1;
    var key_0 = plugin.p2();
    var value_0 = HttpClientConfig$install$lambda_1(plugin);
    this_1.n2(key_0, value_0);
  };
  protoOf(HttpClientConfig).u9d = function (plugin, configure, $super) {
    var tmp;
    if (configure === VOID) {
      tmp = HttpClientConfig$install$lambda;
    } else {
      tmp = configure;
    }
    configure = tmp;
    var tmp_0;
    if ($super === VOID) {
      this.g9e(plugin, configure);
      tmp_0 = Unit_instance;
    } else {
      tmp_0 = $super.g9e.call(this, plugin, configure);
    }
    return tmp_0;
  };
  protoOf(HttpClientConfig).v9d = function (key, block) {
    // Inline function 'kotlin.collections.set' call
    this.h9d_1.n2(key, block);
  };
  protoOf(HttpClientConfig).o9d = function (client) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.f9d_1.l2().o();
    while (tmp0_iterator.d1()) {
      var element = tmp0_iterator.f1();
      // Inline function 'io.ktor.client.HttpClientConfig.install.<anonymous>' call
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      element(client);
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = this.h9d_1.l2().o();
    while (tmp0_iterator_0.d1()) {
      var element_0 = tmp0_iterator_0.f1();
      // Inline function 'io.ktor.client.HttpClientConfig.install.<anonymous>' call
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      element_0(client);
    }
  };
  protoOf(HttpClientConfig).w9d = function (other) {
    this.j9d_1 = other.j9d_1;
    this.k9d_1 = other.k9d_1;
    this.l9d_1 = other.l9d_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = this.f9d_1;
    var map = other.f9d_1;
    this_0.o2(map);
    // Inline function 'kotlin.collections.plusAssign' call
    var this_1 = this.g9d_1;
    var map_0 = other.g9d_1;
    this_1.o2(map_0);
    // Inline function 'kotlin.collections.plusAssign' call
    var this_2 = this.h9d_1;
    var map_1 = other.h9d_1;
    this_2.o2(map_1);
  };
  function HttpClientCall_init_$Init$(client, requestData, responseData, $this) {
    HttpClientCall.call($this, client);
    $this.x9b_1 = new DefaultHttpRequest($this, requestData);
    $this.y9b_1 = new DefaultHttpResponse($this, responseData);
    var tmp = responseData.l9e_1;
    if (!isInterface(tmp, ByteReadChannel)) {
      $this.o9e().r7r(Companion_getInstance_7().p9e_1, responseData.l9e_1);
    }
    return $this;
  }
  function HttpClientCall_init_$Create$(client, requestData, responseData) {
    return HttpClientCall_init_$Init$(client, requestData, responseData, objectCreate(protoOf(HttpClientCall)));
  }
  function Companion() {
    Companion_instance_0 = this;
    this.p9e_1 = new AttributeKey('CustomResponse');
  }
  var Companion_instance_0;
  function Companion_getInstance_7() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function $bodyNullableCOROUTINE$1(_this__u8e3s4, info, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y9e_1 = _this__u8e3s4;
    this.z9e_1 = info;
  }
  protoOf($bodyNullableCOROUTINE$1).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 10;
            this.ac_1 = 1;
            continue $sm;
          case 1:
            this.ac_1 = 2;
            continue $sm;
          case 2:
            this.bc_1 = 9;
            this.bc_1 = 8;
            if (instanceOf(this.y9e_1.a9c(), this.z9e_1.y7w_1)) {
              this.a9f_1 = this.y9e_1.a9c();
              this.bc_1 = 10;
              this.ac_1 = 7;
              continue $sm;
            } else {
              this.ac_1 = 3;
              continue $sm;
            }

          case 3:
            if (!this.y9e_1.f9f() ? !this.y9e_1.w9b_1.atomicfu$compareAndSet(false, true) : false) {
              throw new DoubleReceiveException(this.y9e_1);
            }

            this.b9f_1 = this.y9e_1.o9e().p7r(Companion_getInstance_7().p9e_1);
            if (this.b9f_1 == null) {
              this.ac_1 = 4;
              suspendResult = this.y9e_1.g9f(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.c9f_1 = this.b9f_1;
              this.ac_1 = 5;
              continue $sm;
            }

          case 4:
            this.c9f_1 = suspendResult;
            this.ac_1 = 5;
            continue $sm;
          case 5:
            this.d9f_1 = this.c9f_1;
            this.e9f_1 = new HttpResponseContainer(this.z9e_1, this.d9f_1);
            this.ac_1 = 6;
            suspendResult = this.y9e_1.v9b_1.a9b_1.h7w(this.y9e_1, this.e9f_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var ARGUMENT = suspendResult;
            var this_0 = ARGUMENT.i9f_1;
            var tmp_0;
            if (!equals(this_0, NullBody_instance)) {
              tmp_0 = this_0;
            } else {
              tmp_0 = null;
            }

            var result = tmp_0;
            if (!(result == null) ? !instanceOf(result, this.z9e_1.y7w_1) : false) {
              var from = getKClassFromExpression(result);
              var to = this.z9e_1.y7w_1;
              throw new NoTransformationFoundException(this.y9e_1.a9c(), from, to);
            }

            this.a9f_1 = result;
            this.bc_1 = 10;
            this.ac_1 = 7;
            var tmp_1 = this;
            continue $sm;
          case 7:
            var tmp_2 = this.a9f_1;
            this.bc_1 = 10;
            complete(this.y9e_1.a9c());
            return tmp_2;
          case 8:
            this.bc_1 = 9;
            var tmp_3 = this.dc_1;
            if (tmp_3 instanceof Error) {
              var cause = this.dc_1;
              var tmp_4 = this;
              cancel_0(this.y9e_1.a9c(), 'Receive failed', cause);
              throw cause;
            } else {
              throw this.dc_1;
            }

          case 9:
            this.bc_1 = 10;
            var t = this.dc_1;
            complete(this.y9e_1.a9c());
            throw t;
          case 10:
            throw this.dc_1;
          case 11:
            this.bc_1 = 10;
            complete(this.y9e_1.a9c());
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.bc_1 === 10) {
          throw e;
        } else {
          this.ac_1 = this.bc_1;
          this.dc_1 = e;
        }
      }
     while (true);
  };
  function HttpClientCall(client) {
    Companion_getInstance_7();
    this.v9b_1 = client;
    this.w9b_1 = atomic$boolean$1(false);
    this.z9b_1 = false;
  }
  protoOf(HttpClientCall).vo = function () {
    return this.a9c().vo();
  };
  protoOf(HttpClientCall).o9e = function () {
    return this.j9f().o9e();
  };
  protoOf(HttpClientCall).j9f = function () {
    var tmp = this.x9b_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('request');
    }
  };
  protoOf(HttpClientCall).a9c = function () {
    var tmp = this.y9b_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('response');
    }
  };
  protoOf(HttpClientCall).f9f = function () {
    return this.z9b_1;
  };
  protoOf(HttpClientCall).g9f = function ($completion) {
    return this.a9c().b92();
  };
  protoOf(HttpClientCall).k9f = function (info, $completion) {
    var tmp = new $bodyNullableCOROUTINE$1(this, info, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(HttpClientCall).toString = function () {
    return 'HttpClientCall[' + this.j9f().l9f() + ', ' + this.a9c().m9f() + ']';
  };
  protoOf(HttpClientCall).b9c = function (response) {
    this.y9b_1 = response;
  };
  function DoubleReceiveException(call) {
    IllegalStateException_init_$Init$(this);
    captureStack(this, DoubleReceiveException);
    this.n9f_1 = 'Response already received: ' + call;
  }
  protoOf(DoubleReceiveException).w6 = function () {
    return this.n9f_1;
  };
  function NoTransformationFoundException(response, from, to) {
    UnsupportedOperationException_init_$Init$(this);
    captureStack(this, NoTransformationFoundException);
    this.o9f_1 = trimIndent("\n        Expected response body of the type '" + to + "' but was '" + from + "'\n        In response from `" + get_request(response).l9f() + '`\n        Response status `' + response.m9f() + '`\n        Response header `ContentType: ' + response.g83().i7s(HttpHeaders_getInstance().v7z_1) + '` \n        Request header `Accept: ' + get_request(response).g83().i7s(HttpHeaders_getInstance().d7z_1) + '`\n        \n        You can read how to resolve NoTransformationFoundException at FAQ: \n        https://ktor.io/docs/faq.html#no-transformation-found-exception\n    ');
  }
  protoOf(NoTransformationFoundException).w6 = function () {
    return this.o9f_1;
  };
  function save(_this__u8e3s4, $completion) {
    var tmp = new $saveCOROUTINE$3(_this__u8e3s4, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  }
  function SavedHttpCall(client, request, response, responseBody) {
    HttpClientCall.call(this, client);
    this.d9g_1 = responseBody;
    this.x9b_1 = new SavedHttpRequest(this, request);
    this.y9b_1 = new SavedHttpResponse(this, this.d9g_1, response);
    this.e9g_1 = true;
  }
  protoOf(SavedHttpCall).g9f = function ($completion) {
    return ByteReadChannel_0(this.d9g_1);
  };
  protoOf(SavedHttpCall).f9f = function () {
    return this.e9g_1;
  };
  function SavedHttpRequest(call, origin) {
    this.f9g_1 = call;
    this.g9g_1 = origin;
  }
  protoOf(SavedHttpRequest).h9g = function () {
    return this.f9g_1;
  };
  protoOf(SavedHttpRequest).o9e = function () {
    return this.g9g_1.o9e();
  };
  protoOf(SavedHttpRequest).vo = function () {
    return this.g9g_1.vo();
  };
  protoOf(SavedHttpRequest).g83 = function () {
    return this.g9g_1.g83();
  };
  protoOf(SavedHttpRequest).i9g = function () {
    return this.g9g_1.i9g();
  };
  protoOf(SavedHttpRequest).l9f = function () {
    return this.g9g_1.l9f();
  };
  function SavedHttpResponse(call, body, origin) {
    HttpResponse.call(this);
    this.j9g_1 = call;
    this.k9g_1 = Job();
    this.l9g_1 = origin.m9f();
    this.m9g_1 = origin.s9g();
    this.n9g_1 = origin.t9g();
    this.o9g_1 = origin.u9g();
    this.p9g_1 = origin.g83();
    this.q9g_1 = origin.vo().yf(this.k9g_1);
    this.r9g_1 = ByteReadChannel_0(body);
  }
  protoOf(SavedHttpResponse).h9g = function () {
    return this.j9g_1;
  };
  protoOf(SavedHttpResponse).m9f = function () {
    return this.l9g_1;
  };
  protoOf(SavedHttpResponse).s9g = function () {
    return this.m9g_1;
  };
  protoOf(SavedHttpResponse).t9g = function () {
    return this.n9g_1;
  };
  protoOf(SavedHttpResponse).u9g = function () {
    return this.o9g_1;
  };
  protoOf(SavedHttpResponse).g83 = function () {
    return this.p9g_1;
  };
  protoOf(SavedHttpResponse).vo = function () {
    return this.q9g_1;
  };
  protoOf(SavedHttpResponse).b92 = function () {
    return this.r9g_1;
  };
  function $saveCOROUTINE$3(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x9f_1 = _this__u8e3s4;
  }
  protoOf($saveCOROUTINE$3).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 2;
            this.ac_1 = 1;
            suspendResult = this.x9f_1.a9c().b92().i7j(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            var responseBody = readBytes(ARGUMENT);
            return new SavedHttpCall(this.x9f_1.v9b_1, this.x9f_1.j9f(), this.x9f_1.a9c(), responseBody);
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
  function UnsupportedContentTypeException(content) {
    IllegalStateException_init_$Init$_0('Failed to write body: ' + getKClassFromExpression(content), this);
    captureStack(this, UnsupportedContentTypeException);
  }
  function ObservableContent$content$slambda(this$0, resultContinuation) {
    this.d9h_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ObservableContent$content$slambda).f9h = function ($this$writer, $completion) {
    var tmp = this.g9h($this$writer, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(ObservableContent$content$slambda).yc = function (p1, $completion) {
    return this.f9h((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ObservableContent$content$slambda).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 2;
            this.ac_1 = 1;
            suspendResult = this.d9h_1.i9h_1.r88(this.e9h_1.b12(), this);
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
  protoOf(ObservableContent$content$slambda).g9h = function ($this$writer, completion) {
    var i = new ObservableContent$content$slambda(this.d9h_1, completion);
    i.e9h_1 = $this$writer;
    return i;
  };
  function ObservableContent$content$slambda_0(this$0, resultContinuation) {
    var i = new ObservableContent$content$slambda(this$0, resultContinuation);
    var l = function ($this$writer, $completion) {
      return i.f9h($this$writer, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ObservableContent(delegate, callContext, listener) {
    ReadChannelContent.call(this);
    this.i9h_1 = delegate;
    this.j9h_1 = callContext;
    this.k9h_1 = listener;
    var tmp = this;
    var tmp0_subject = this.i9h_1;
    var tmp_0;
    if (tmp0_subject instanceof ByteArrayContent) {
      tmp_0 = ByteReadChannel_0(this.i9h_1.m88());
    } else {
      if (tmp0_subject instanceof ProtocolUpgrade) {
        throw new UnsupportedContentTypeException(this.i9h_1);
      } else {
        if (tmp0_subject instanceof NoContent) {
          tmp_0 = Companion_getInstance().k7k();
        } else {
          if (tmp0_subject instanceof ReadChannelContent) {
            tmp_0 = this.i9h_1.p88();
          } else {
            if (tmp0_subject instanceof WriteChannelContent) {
              var tmp_1 = GlobalScope_instance;
              tmp_0 = writer(tmp_1, this.j9h_1, true, ObservableContent$content$slambda_0(this, null)).b12();
            } else {
              noWhenBranchMatchedException();
            }
          }
        }
      }
    }
    tmp.l9h_1 = tmp_0;
  }
  protoOf(ObservableContent).k88 = function () {
    return this.i9h_1.k88();
  };
  protoOf(ObservableContent).l88 = function () {
    return this.i9h_1.l88();
  };
  protoOf(ObservableContent).g83 = function () {
    return this.i9h_1.g83();
  };
  protoOf(ObservableContent).p88 = function () {
    return observable(this.l9h_1, this.j9h_1, this.l88(), this.k9h_1);
  };
  function get_CALL_COROUTINE() {
    _init_properties_HttpClientEngine_kt__h91z5h();
    return CALL_COROUTINE;
  }
  var CALL_COROUTINE;
  function get_CLIENT_CONFIG() {
    _init_properties_HttpClientEngine_kt__h91z5h();
    return CLIENT_CONFIG;
  }
  var CLIENT_CONFIG;
  function HttpClientEngine$install$slambda$lambda($client, $response) {
    return function (it) {
      var tmp;
      if (!(it == null)) {
        $client.f9b_1.o9a(get_HttpResponseCancelled(), $response);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function _get_closed__iwkfs1($this) {
    var tmp0_safe_receiver = $this.vo().hc(Key_instance);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.wo();
    return !(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs);
  }
  function executeWithinCallContext($this, requestData, $completion) {
    var tmp = new $executeWithinCallContextCOROUTINE$4($this, requestData, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  }
  function checkExtensions($this, requestData) {
    var tmp0_iterator = requestData.e9i_1.o();
    while (tmp0_iterator.d1()) {
      var requestedExtension = tmp0_iterator.f1();
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!$this.f9i().s(requestedExtension)) {
        // Inline function 'io.ktor.client.engine.HttpClientEngine.checkExtensions.<anonymous>' call
        var message = "Engine doesn't support " + requestedExtension;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  function HttpClientEngine$install$slambda($client, this$0, resultContinuation) {
    this.o9i_1 = $client;
    this.p9i_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpClientEngine$install$slambda).t9b = function ($this$intercept, content, $completion) {
    var tmp = this.u9b($this$intercept, content, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(HttpClientEngine$install$slambda).oi = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.t9b(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpClientEngine$install$slambda).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 3;
            var tmp_0 = this;
            var this_0 = new HttpRequestBuilder();
            this_0.x9i(this.q9i_1.i7w_1);
            var body = this.r9i_1;
            if (body == null) {
              this_0.c9d_1 = NullBody_instance;
              var tmp_1 = JsType_instance;
              var tmp_2 = PrimitiveClasses_getInstance().s7();
              var tmp_3;
              try {
                tmp_3 = createKType(PrimitiveClasses_getInstance().s7(), arrayOf([]), false);
              } catch ($p) {
                var tmp_4;
                if ($p instanceof Error) {
                  var cause = $p;
                  tmp_4 = null;
                } else {
                  throw $p;
                }
                tmp_3 = tmp_4;
              }
              this_0.y9i(typeInfoImpl(tmp_1, tmp_2, tmp_3));
            } else {
              if (body instanceof OutgoingContent) {
                this_0.c9d_1 = body;
                this_0.y9i(null);
              } else {
                this_0.c9d_1 = body;
                var tmp_5 = JsType_instance;
                var tmp_6 = PrimitiveClasses_getInstance().s7();
                var tmp_7;
                try {
                  tmp_7 = createKType(PrimitiveClasses_getInstance().s7(), arrayOf([]), false);
                } catch ($p) {
                  var tmp_8;
                  if ($p instanceof Error) {
                    var cause_0 = $p;
                    tmp_8 = null;
                  } else {
                    throw $p;
                  }
                  tmp_7 = tmp_8;
                }
                this_0.y9i(typeInfoImpl(tmp_5, tmp_6, tmp_7));
              }
            }

            tmp_0.s9i_1 = this_0;
            this.o9i_1.f9b_1.o9a(get_HttpRequestIsReadyForSending(), this.s9i_1);
            var tmp_9 = this;
            var this_1 = this.s9i_1.e3();
            this_1.d9i_1.r7r(get_CLIENT_CONFIG(), this.o9i_1.g9b_1);
            tmp_9.t9i_1 = this_1;
            validateHeaders(this.t9i_1);
            checkExtensions(this.p9i_1, this.t9i_1);
            this.ac_1 = 1;
            suspendResult = executeWithinCallContext(this.p9i_1, this.t9i_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.u9i_1 = suspendResult;
            this.v9i_1 = HttpClientCall_init_$Create$(this.o9i_1, this.t9i_1, this.u9i_1);
            this.w9i_1 = this.v9i_1.a9c();
            this.o9i_1.f9b_1.o9a(get_HttpResponseReceived(), this.w9i_1);
            var tmp_10 = get_job(this.w9i_1.vo());
            tmp_10.xp(HttpClientEngine$install$slambda$lambda(this.o9i_1, this.w9i_1));
            this.ac_1 = 2;
            suspendResult = this.q9i_1.m7v(this.v9i_1, this);
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
  protoOf(HttpClientEngine$install$slambda).u9b = function ($this$intercept, content, completion) {
    var i = new HttpClientEngine$install$slambda(this.o9i_1, this.p9i_1, completion);
    i.q9i_1 = $this$intercept;
    i.r9i_1 = content;
    return i;
  };
  function HttpClientEngine$install$slambda_0($client, this$0, resultContinuation) {
    var i = new HttpClientEngine$install$slambda($client, this$0, resultContinuation);
    var l = function ($this$intercept, content, $completion) {
      return i.t9b($this$intercept, content, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function HttpClientEngine$executeWithinCallContext$slambda(this$0, $requestData, resultContinuation) {
    this.h9j_1 = this$0;
    this.i9j_1 = $requestData;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpClientEngine$executeWithinCallContext$slambda).k9j = function ($this$async, $completion) {
    var tmp = this.k20($this$async, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(HttpClientEngine$executeWithinCallContext$slambda).yc = function (p1, $completion) {
    return this.k9j((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HttpClientEngine$executeWithinCallContext$slambda).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 2;
            if (_get_closed__iwkfs1(this.h9j_1)) {
              throw new ClientEngineClosedException();
            }

            this.ac_1 = 1;
            suspendResult = this.h9j_1.l9j(this.i9j_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  protoOf(HttpClientEngine$executeWithinCallContext$slambda).k20 = function ($this$async, completion) {
    var i = new HttpClientEngine$executeWithinCallContext$slambda(this.h9j_1, this.i9j_1, completion);
    i.j9j_1 = $this$async;
    return i;
  };
  function HttpClientEngine$executeWithinCallContext$slambda_0(this$0, $requestData, resultContinuation) {
    var i = new HttpClientEngine$executeWithinCallContext$slambda(this$0, $requestData, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.k9j($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $executeWithinCallContextCOROUTINE$4(_this__u8e3s4, requestData, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u9h_1 = _this__u8e3s4;
    this.v9h_1 = requestData;
  }
  protoOf($executeWithinCallContextCOROUTINE$4).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 3;
            this.ac_1 = 1;
            suspendResult = createCallContext(this.u9h_1, this.v9h_1.c9i_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.w9h_1 = suspendResult;
            this.x9h_1 = this.w9h_1.yf(new KtorCallContextElement(this.w9h_1));
            this.ac_1 = 2;
            suspendResult = async(this.u9h_1, this.x9h_1, VOID, HttpClientEngine$executeWithinCallContext$slambda_0(this.u9h_1, this.v9h_1, null)).wr(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
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
  function HttpClientEngine() {
  }
  function validateHeaders(request) {
    _init_properties_HttpClientEngine_kt__h91z5h();
    var requestHeaders = request.a9i_1;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_0 = requestHeaders.k7t();
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = this_0.o();
    while (tmp0_iterator.d1()) {
      var element = tmp0_iterator.f1();
      // Inline function 'io.ktor.client.engine.validateHeaders.<anonymous>' call
      if (HttpHeaders_getInstance().y82_1.s(element)) {
        destination.a1(element);
      }
    }
    var unsafeRequestHeaders = destination;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!unsafeRequestHeaders.u()) {
      throw new UnsafeHeaderException(toString(unsafeRequestHeaders));
    }
  }
  function createCallContext(_this__u8e3s4, parentJob, $completion) {
    var callJob = Job(parentJob);
    var callContext = _this__u8e3s4.vo().yf(callJob).yf(get_CALL_COROUTINE());
    $l$block: {
      // Inline function 'io.ktor.client.engine.attachToUserJob' call
      // Inline function 'kotlin.js.getCoroutineContext' call
      var tmp0_elvis_lhs = $completion.s6().hc(Key_instance);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var userJob = tmp;
      var cleanupHandler = userJob.zp(true, VOID, createCallContext$lambda(callJob));
      callJob.xp(createCallContext$lambda_0(cleanupHandler));
    }
    return callContext;
  }
  function createCallContext$lambda($callJob) {
    return function (cause) {
      if (cause == null)
        return Unit_instance;
      $callJob.dq(CancellationException_init_$Create$(cause.message));
      return Unit_instance;
    };
  }
  function createCallContext$lambda_0($cleanupHandler) {
    return function (it) {
      $cleanupHandler.ss();
      return Unit_instance;
    };
  }
  var properties_initialized_HttpClientEngine_kt_5uiebb;
  function _init_properties_HttpClientEngine_kt__h91z5h() {
    if (!properties_initialized_HttpClientEngine_kt_5uiebb) {
      properties_initialized_HttpClientEngine_kt_5uiebb = true;
      CALL_COROUTINE = new CoroutineName('call-context');
      CLIENT_CONFIG = new AttributeKey('client-config');
    }
  }
  function ClientEngineClosedException(cause) {
    cause = cause === VOID ? null : cause;
    IllegalStateException_init_$Init$_0('Client already closed', this);
    captureStack(this, ClientEngineClosedException);
    this.m9j_1 = cause;
  }
  protoOf(ClientEngineClosedException).x6 = function () {
    return this.m9j_1;
  };
  function HttpClientEngineBase$coroutineContext$delegate$lambda(this$0) {
    return function () {
      return SilentSupervisor().yf(this$0.r9j()).yf(new CoroutineName(this$0.n9j_1 + '-context'));
    };
  }
  function HttpClientEngineBase(engineName) {
    this.n9j_1 = engineName;
    this.o9j_1 = atomic$boolean$1(false);
    this.p9j_1 = ioDispatcher();
    var tmp = this;
    tmp.q9j_1 = lazy(HttpClientEngineBase$coroutineContext$delegate$lambda(this));
  }
  protoOf(HttpClientEngineBase).r9j = function () {
    return this.p9j_1;
  };
  protoOf(HttpClientEngineBase).vo = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.q9j_1;
    coroutineContext$factory();
    return this_0.q2();
  };
  protoOf(HttpClientEngineBase).y1k = function () {
    if (!this.o9j_1.atomicfu$compareAndSet(false, true))
      return Unit_instance;
    var tmp = this.vo().hc(Key_instance);
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, CompletableJob) : false) ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var requestJob = tmp_0;
    requestJob.cv();
  };
  function coroutineContext$factory() {
    return getPropertyCallableRef('coroutineContext', 1, KProperty1, function (receiver) {
      return receiver.vo();
    }, null);
  }
  function get_ENGINE_CAPABILITIES_KEY() {
    _init_properties_HttpClientEngineCapability_kt__ifvyst();
    return ENGINE_CAPABILITIES_KEY;
  }
  var ENGINE_CAPABILITIES_KEY;
  var DEFAULT_CAPABILITIES;
  var properties_initialized_HttpClientEngineCapability_kt_qarzcf;
  function _init_properties_HttpClientEngineCapability_kt__ifvyst() {
    if (!properties_initialized_HttpClientEngineCapability_kt_qarzcf) {
      properties_initialized_HttpClientEngineCapability_kt_qarzcf = true;
      ENGINE_CAPABILITIES_KEY = new AttributeKey('EngineCapabilities');
      DEFAULT_CAPABILITIES = setOf(Plugin_getInstance_5());
    }
  }
  function HttpClientEngineConfig() {
    this.s9j_1 = 4;
    this.t9j_1 = false;
    this.u9j_1 = null;
  }
  function get_KTOR_DEFAULT_USER_AGENT() {
    _init_properties_Utils_kt__jo07cx();
    return KTOR_DEFAULT_USER_AGENT;
  }
  var KTOR_DEFAULT_USER_AGENT;
  function get_DATE_HEADERS() {
    _init_properties_Utils_kt__jo07cx();
    return DATE_HEADERS;
  }
  var DATE_HEADERS;
  function Companion_0() {
  }
  var Companion_instance_1;
  function Companion_getInstance_8() {
    return Companion_instance_1;
  }
  function KtorCallContextElement(callContext) {
    this.v9j_1 = callContext;
  }
  protoOf(KtorCallContextElement).p2 = function () {
    return Companion_instance_1;
  };
  function callContext($completion) {
    // Inline function 'kotlin.js.getCoroutineContext' call
    var tmp$ret$0 = $completion.s6();
    return ensureNotNull(tmp$ret$0.hc(Companion_instance_1)).v9j_1;
  }
  function mergeHeaders(requestHeaders, content, block) {
    _init_properties_Utils_kt__jo07cx();
    var tmp = buildHeaders(mergeHeaders$lambda(requestHeaders, content));
    tmp.m7t(mergeHeaders$lambda_0(block));
    var missingAgent = requestHeaders.i7s(HttpHeaders_getInstance().b82_1) == null ? content.g83().i7s(HttpHeaders_getInstance().b82_1) == null : false;
    if (missingAgent ? needUserAgent() : false) {
      block(HttpHeaders_getInstance().b82_1, get_KTOR_DEFAULT_USER_AGENT());
    }
    var tmp0_safe_receiver = content.k88();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
    var tmp2_elvis_lhs = tmp1_elvis_lhs == null ? content.g83().i7s(HttpHeaders_getInstance().v7z_1) : tmp1_elvis_lhs;
    var type = tmp2_elvis_lhs == null ? requestHeaders.i7s(HttpHeaders_getInstance().v7z_1) : tmp2_elvis_lhs;
    var tmp3_safe_receiver = content.l88();
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.toString();
    var tmp5_elvis_lhs = tmp4_elvis_lhs == null ? content.g83().i7s(HttpHeaders_getInstance().s7z_1) : tmp4_elvis_lhs;
    var length = tmp5_elvis_lhs == null ? requestHeaders.i7s(HttpHeaders_getInstance().s7z_1) : tmp5_elvis_lhs;
    if (type == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      block(HttpHeaders_getInstance().v7z_1, type);
    }
    if (length == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      block(HttpHeaders_getInstance().s7z_1, length);
    }
  }
  function needUserAgent() {
    _init_properties_Utils_kt__jo07cx();
    return !PlatformUtils_getInstance().c7t_1;
  }
  function mergeHeaders$lambda($requestHeaders, $content) {
    return function ($this$buildHeaders) {
      $this$buildHeaders.v7t($requestHeaders);
      $this$buildHeaders.v7t($content.g83());
      return Unit_instance;
    };
  }
  function mergeHeaders$lambda_0($block) {
    return function (key, values) {
      var tmp;
      if (HttpHeaders_getInstance().s7z_1 === key) {
        return Unit_instance;
      }
      var tmp_0;
      if (HttpHeaders_getInstance().v7z_1 === key) {
        return Unit_instance;
      }
      var tmp_1;
      if (get_DATE_HEADERS().s(key)) {
        var tmp0_iterator = values.o();
        while (tmp0_iterator.d1()) {
          var element = tmp0_iterator.f1();
          // Inline function 'io.ktor.client.engine.mergeHeaders.<anonymous>.<anonymous>' call
          $block(key, element);
        }
        tmp_1 = Unit_instance;
      } else {
        var separator = HttpHeaders_getInstance().w7z_1 === key ? '; ' : ',';
        tmp_1 = $block(key, joinToString(values, separator));
      }
      return Unit_instance;
    };
  }
  var properties_initialized_Utils_kt_xvi83j;
  function _init_properties_Utils_kt__jo07cx() {
    if (!properties_initialized_Utils_kt_xvi83j) {
      properties_initialized_Utils_kt_xvi83j = true;
      KTOR_DEFAULT_USER_AGENT = 'Ktor client';
      DATE_HEADERS = setOf_0([HttpHeaders_getInstance().y7z_1, HttpHeaders_getInstance().e80_1, HttpHeaders_getInstance().q80_1, HttpHeaders_getInstance().l80_1, HttpHeaders_getInstance().p80_1]);
    }
  }
  function get_UploadProgressListenerAttributeKey() {
    _init_properties_BodyProgress_kt__s0v569();
    return UploadProgressListenerAttributeKey;
  }
  var UploadProgressListenerAttributeKey;
  function get_DownloadProgressListenerAttributeKey() {
    _init_properties_BodyProgress_kt__s0v569();
    return DownloadProgressListenerAttributeKey;
  }
  var DownloadProgressListenerAttributeKey;
  function handle($this, scope) {
    var observableContentPhase = new PipelinePhase('ObservableContent');
    scope.z9a_1.j7w(Phases_getInstance().z9j_1, observableContentPhase);
    scope.z9a_1.m7w(observableContentPhase, BodyProgress$handle$slambda_0(null));
    var tmp = Phases_getInstance_2().d9k_1;
    scope.c9b_1.m7w(tmp, BodyProgress$handle$slambda_2(null));
  }
  function Plugin() {
    Plugin_instance = this;
    this.e9k_1 = new AttributeKey('BodyProgress');
  }
  protoOf(Plugin).p2 = function () {
    return this.e9k_1;
  };
  protoOf(Plugin).f9k = function (block) {
    return new BodyProgress();
  };
  protoOf(Plugin).e9e = function (block) {
    return this.f9k(block);
  };
  protoOf(Plugin).g9k = function (plugin, scope) {
    handle(plugin, scope);
  };
  protoOf(Plugin).f9e = function (plugin, scope) {
    return this.g9k(plugin instanceof BodyProgress ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance;
  function Plugin_getInstance() {
    if (Plugin_instance == null)
      new Plugin();
    return Plugin_instance;
  }
  function BodyProgress$handle$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BodyProgress$handle$slambda).t9b = function ($this$intercept, content, $completion) {
    var tmp = this.u9b($this$intercept, content, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(BodyProgress$handle$slambda).oi = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.t9b(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(BodyProgress$handle$slambda).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 2;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.p9k_1.i7w_1.e9d_1.p7r(get_UploadProgressListenerAttributeKey());
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              return Unit_instance;
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.r9k_1 = tmp_1;
            var tmp_2 = this;
            var tmp_3 = this.q9k_1;
            tmp_2.s9k_1 = new ObservableContent(tmp_3 instanceof OutgoingContent ? tmp_3 : THROW_CCE(), this.p9k_1.i7w_1.d9d_1, this.r9k_1);
            this.ac_1 = 1;
            suspendResult = this.p9k_1.m7v(this.s9k_1, this);
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
  protoOf(BodyProgress$handle$slambda).u9b = function ($this$intercept, content, completion) {
    var i = new BodyProgress$handle$slambda(completion);
    i.p9k_1 = $this$intercept;
    i.q9k_1 = content;
    return i;
  };
  function BodyProgress$handle$slambda_0(resultContinuation) {
    var i = new BodyProgress$handle$slambda(resultContinuation);
    var l = function ($this$intercept, content, $completion) {
      return i.t9b($this$intercept, content, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function BodyProgress$handle$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BodyProgress$handle$slambda_1).f9l = function ($this$intercept, response, $completion) {
    var tmp = this.g9l($this$intercept, response, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(BodyProgress$handle$slambda_1).oi = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.f9l(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $completion);
  };
  protoOf(BodyProgress$handle$slambda_1).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 2;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.c9l_1.h9g().j9f().o9e().p7r(get_DownloadProgressListenerAttributeKey());
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              return Unit_instance;
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.d9l_1 = tmp_1;
            this.e9l_1 = withObservableDownload(this.c9l_1, this.d9l_1);
            this.ac_1 = 1;
            suspendResult = this.b9l_1.m7v(this.e9l_1, this);
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
  protoOf(BodyProgress$handle$slambda_1).g9l = function ($this$intercept, response, completion) {
    var i = new BodyProgress$handle$slambda_1(completion);
    i.b9l_1 = $this$intercept;
    i.c9l_1 = response;
    return i;
  };
  function BodyProgress$handle$slambda_2(resultContinuation) {
    var i = new BodyProgress$handle$slambda_1(resultContinuation);
    var l = function ($this$intercept, response, $completion) {
      return i.f9l($this$intercept, response, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function BodyProgress() {
    Plugin_getInstance();
  }
  function withObservableDownload(_this__u8e3s4, listener) {
    _init_properties_BodyProgress_kt__s0v569();
    var observableByteChannel = observable(_this__u8e3s4.b92(), _this__u8e3s4.vo(), contentLength(_this__u8e3s4), listener);
    return wrapWithContent(_this__u8e3s4.h9g(), observableByteChannel).a9c();
  }
  var properties_initialized_BodyProgress_kt_pmfrhr;
  function _init_properties_BodyProgress_kt__s0v569() {
    if (!properties_initialized_BodyProgress_kt_pmfrhr) {
      properties_initialized_BodyProgress_kt_pmfrhr = true;
      UploadProgressListenerAttributeKey = new AttributeKey('UploadProgressListenerAttributeKey');
      DownloadProgressListenerAttributeKey = new AttributeKey('DownloadProgressListenerAttributeKey');
    }
  }
  function get_LOGGER() {
    _init_properties_DefaultRequest_kt__yzsodq();
    return LOGGER;
  }
  var LOGGER;
  function defaultRequest(_this__u8e3s4, block) {
    _init_properties_DefaultRequest_kt__yzsodq();
    var tmp = Plugin_getInstance_0();
    _this__u8e3s4.g9e(tmp, defaultRequest$lambda(block));
  }
  function mergeUrls($this, baseUrl, requestUrl) {
    if (requestUrl.h86_1.equals(Companion_getInstance_0().k87_1)) {
      requestUrl.h86_1 = baseUrl.t86_1;
    }
    // Inline function 'kotlin.text.isNotEmpty' call
    var this_0 = requestUrl.i86_1;
    if (charSequenceLength(this_0) > 0)
      return Unit_instance;
    var resultUrl = URLBuilder(baseUrl);
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.client.plugins.Plugin.mergeUrls.<anonymous>' call
    resultUrl.h86_1 = requestUrl.h86_1;
    if (!(requestUrl.j86_1 === get_DEFAULT_PORT())) {
      resultUrl.j86_1 = requestUrl.j86_1;
    }
    resultUrl.o86_1 = concatenatePath(Plugin_getInstance_0(), resultUrl.o86_1, requestUrl.o86_1);
    // Inline function 'kotlin.text.isNotEmpty' call
    var this_1 = requestUrl.n86_1;
    if (charSequenceLength(this_1) > 0) {
      resultUrl.n86_1 = requestUrl.n86_1;
    }
    // Inline function 'kotlin.apply' call
    var this_2 = ParametersBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.client.plugins.Plugin.mergeUrls.<anonymous>.<anonymous>' call
    appendAll(this_2, resultUrl.p86_1);
    var defaultParameters = this_2;
    resultUrl.v87(requestUrl.p86_1);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = defaultParameters.l7t().o();
    while (tmp0_iterator.d1()) {
      var element = tmp0_iterator.f1();
      // Inline function 'io.ktor.client.plugins.Plugin.mergeUrls.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var key = element.p2();
      // Inline function 'kotlin.collections.component2' call
      var values = element.q2();
      if (!resultUrl.p86_1.r7t(key)) {
        resultUrl.p86_1.q7t(key, values);
      }
    }
    takeFrom(requestUrl, resultUrl);
  }
  function concatenatePath($this, parent, child) {
    if (child.u())
      return parent;
    if (parent.u())
      return child;
    // Inline function 'kotlin.text.isEmpty' call
    var this_0 = first(child);
    if (charSequenceLength(this_0) === 0)
      return child;
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.buildListInternal' call
    var capacity = (parent.m() + child.m() | 0) - 1 | 0;
    checkBuilderCapacity(capacity);
    // Inline function 'kotlin.apply' call
    var this_1 = ArrayList_init_$Create$_0(capacity);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.client.plugins.Plugin.concatenatePath.<anonymous>' call
    var inductionVariable = 0;
    var last = parent.m() - 1 | 0;
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this_1.a1(parent.n(index));
      }
       while (inductionVariable < last);
    this_1.g1(child);
    return this_1.e3();
  }
  function DefaultRequest$Plugin$install$slambda($plugin, resultContinuation) {
    this.p9l_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultRequest$Plugin$install$slambda).t9b = function ($this$intercept, it, $completion) {
    var tmp = this.u9b($this$intercept, it, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(DefaultRequest$Plugin$install$slambda).oi = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.t9b(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(DefaultRequest$Plugin$install$slambda).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        if (tmp === 0) {
          this.bc_1 = 1;
          var originalUrlString = this.q9l_1.i7w_1.z9c_1.toString();
          var this_0 = new DefaultRequestBuilder();
          appendAll(this_0.s9l_1, this.q9l_1.i7w_1.b9d_1);
          this.p9l_1.v9l_1(this_0);
          var defaultRequest = this_0;
          var defaultUrl = defaultRequest.t9l_1.e3();
          mergeUrls(Plugin_getInstance_0(), defaultUrl, this.q9l_1.i7w_1.z9c_1);
          var tmp0_iterator = defaultRequest.u9l_1.u7r().o();
          while (tmp0_iterator.d1()) {
            var element = tmp0_iterator.f1();
            if (!this.q9l_1.i7w_1.e9d_1.q7r(element)) {
              this.q9l_1.i7w_1.e9d_1.r7r(element instanceof AttributeKey ? element : THROW_CCE(), defaultRequest.u9l_1.o7r(element));
            }
          }
          this.q9l_1.i7w_1.b9d_1.h1();
          this.q9l_1.i7w_1.b9d_1.v7t(defaultRequest.s9l_1.e3());
          get_LOGGER().d7x('Applied DefaultRequest to ' + originalUrlString + '. New url: ' + this.q9l_1.i7w_1.z9c_1);
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.dc_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(DefaultRequest$Plugin$install$slambda).u9b = function ($this$intercept, it, completion) {
    var i = new DefaultRequest$Plugin$install$slambda(this.p9l_1, completion);
    i.q9l_1 = $this$intercept;
    i.r9l_1 = it;
    return i;
  };
  function DefaultRequest$Plugin$install$slambda_0($plugin, resultContinuation) {
    var i = new DefaultRequest$Plugin$install$slambda($plugin, resultContinuation);
    var l = function ($this$intercept, it, $completion) {
      return i.t9b($this$intercept, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Plugin_0() {
    Plugin_instance_0 = this;
    this.w9l_1 = new AttributeKey('DefaultRequest');
  }
  protoOf(Plugin_0).p2 = function () {
    return this.w9l_1;
  };
  protoOf(Plugin_0).x9l = function (block) {
    return new DefaultRequest(block);
  };
  protoOf(Plugin_0).e9e = function (block) {
    return this.x9l(block);
  };
  protoOf(Plugin_0).y9l = function (plugin, scope) {
    var tmp = Phases_getInstance().w9j_1;
    scope.z9a_1.m7w(tmp, DefaultRequest$Plugin$install$slambda_0(plugin, null));
  };
  protoOf(Plugin_0).f9e = function (plugin, scope) {
    return this.y9l(plugin instanceof DefaultRequest ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance_0;
  function Plugin_getInstance_0() {
    if (Plugin_instance_0 == null)
      new Plugin_0();
    return Plugin_instance_0;
  }
  function DefaultRequestBuilder() {
    this.s9l_1 = new HeadersBuilder();
    this.t9l_1 = new URLBuilder_0();
    this.u9l_1 = AttributesJsFn(true);
  }
  protoOf(DefaultRequestBuilder).g83 = function () {
    return this.s9l_1;
  };
  function DefaultRequest(block) {
    Plugin_getInstance_0();
    this.v9l_1 = block;
  }
  function defaultRequest$lambda($block) {
    return function ($this$install) {
      $block($this$install);
      return Unit_instance;
    };
  }
  var properties_initialized_DefaultRequest_kt_au5efk;
  function _init_properties_DefaultRequest_kt__yzsodq() {
    if (!properties_initialized_DefaultRequest_kt_au5efk) {
      properties_initialized_DefaultRequest_kt_au5efk = true;
      LOGGER = KtorSimpleLogger('io.ktor.client.plugins.DefaultRequest');
    }
  }
  function get_ValidateMark() {
    _init_properties_DefaultResponseValidation_kt__wcn8vr();
    return ValidateMark;
  }
  var ValidateMark;
  function get_LOGGER_0() {
    _init_properties_DefaultResponseValidation_kt__wcn8vr();
    return LOGGER_0;
  }
  var LOGGER_0;
  function addDefaultResponseValidation(_this__u8e3s4) {
    _init_properties_DefaultResponseValidation_kt__wcn8vr();
    HttpResponseValidator(_this__u8e3s4, addDefaultResponseValidation$lambda(_this__u8e3s4));
  }
  function ResponseException(response, cachedResponseText) {
    IllegalStateException_init_$Init$_0('Bad response: ' + response + '. Text: "' + cachedResponseText + '"', this);
    captureStack(this, ResponseException);
    this.z9l_1 = response;
  }
  function RedirectResponseException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    captureStack(this, RedirectResponseException);
    this.b9m_1 = 'Unhandled redirect: ' + response.h9g().j9f().i9g().p83_1 + ' ' + response.h9g().j9f().l9f() + '. ' + ('Status: ' + response.m9f() + '. Text: "' + cachedResponseText + '"');
  }
  protoOf(RedirectResponseException).w6 = function () {
    return this.b9m_1;
  };
  function ClientRequestException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    captureStack(this, ClientRequestException);
    this.d9m_1 = 'Client request(' + response.h9g().j9f().i9g().p83_1 + ' ' + response.h9g().j9f().l9f() + ') ' + ('invalid: ' + response.m9f() + '. Text: "' + cachedResponseText + '"');
  }
  protoOf(ClientRequestException).w6 = function () {
    return this.d9m_1;
  };
  function ServerResponseException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    captureStack(this, ServerResponseException);
    this.f9m_1 = 'Server error(' + response.h9g().j9f().i9g().p83_1 + ' ' + response.h9g().j9f().l9f() + ': ' + ('' + response.m9f() + '. Text: "' + cachedResponseText + '"');
  }
  protoOf(ServerResponseException).w6 = function () {
    return this.f9m_1;
  };
  function addDefaultResponseValidation$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(addDefaultResponseValidation$lambda$slambda).w9m = function (response, $completion) {
    var tmp = this.x9m(response, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(addDefaultResponseValidation$lambda$slambda).yc = function (p1, $completion) {
    return this.w9m(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $completion);
  };
  protoOf(addDefaultResponseValidation$lambda$slambda).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 5;
            this.p9m_1 = this.o9m_1.h9g().o9e().o7r(get_ExpectSuccessAttributeKey());
            if (!this.p9m_1) {
              get_LOGGER_0().d7x('Skipping default response validation for ' + this.o9m_1.h9g().j9f().l9f());
              return Unit_instance;
            }

            this.q9m_1 = this.o9m_1.m9f().b86_1;
            this.r9m_1 = this.o9m_1.h9g();
            if (this.q9m_1 < 300 ? true : this.r9m_1.o9e().q7r(get_ValidateMark())) {
              return Unit_instance;
            }

            this.ac_1 = 1;
            suspendResult = save(this.r9m_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.s9m_1 = suspendResult;
            this.s9m_1.o9e().r7r(get_ValidateMark(), Unit_instance);
            this.t9m_1 = this.s9m_1;
            this.u9m_1 = this.t9m_1.a9c();
            this.bc_1 = 3;
            this.ac_1 = 2;
            suspendResult = bodyAsText(this.u9m_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.v9m_1 = suspendResult;
            this.bc_1 = 5;
            this.ac_1 = 4;
            continue $sm;
          case 3:
            this.bc_1 = 5;
            var tmp_0 = this.dc_1;
            if (tmp_0 instanceof MalformedInputException) {
              var _ = this.dc_1;
              var tmp_1 = this;
              tmp_1.v9m_1 = '<body failed decoding>';
              this.ac_1 = 4;
              continue $sm;
            } else {
              throw this.dc_1;
            }

          case 4:
            this.bc_1 = 5;
            var exceptionResponseText = this.v9m_1;
            var tmp0_subject = this.q9m_1;
            var exception = (300 <= tmp0_subject ? tmp0_subject <= 399 : false) ? new RedirectResponseException(this.u9m_1, exceptionResponseText) : (400 <= tmp0_subject ? tmp0_subject <= 499 : false) ? new ClientRequestException(this.u9m_1, exceptionResponseText) : (500 <= tmp0_subject ? tmp0_subject <= 599 : false) ? new ServerResponseException(this.u9m_1, exceptionResponseText) : new ResponseException(this.u9m_1, exceptionResponseText);
            get_LOGGER_0().d7x('Default response validation for ' + this.o9m_1.h9g().j9f().l9f() + ' failed with ' + exception);
            throw exception;
          case 5:
            throw this.dc_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.bc_1 === 5) {
          throw e;
        } else {
          this.ac_1 = this.bc_1;
          this.dc_1 = e;
        }
      }
     while (true);
  };
  protoOf(addDefaultResponseValidation$lambda$slambda).x9m = function (response, completion) {
    var i = new addDefaultResponseValidation$lambda$slambda(completion);
    i.o9m_1 = response;
    return i;
  };
  function addDefaultResponseValidation$lambda$slambda_0(resultContinuation) {
    var i = new addDefaultResponseValidation$lambda$slambda(resultContinuation);
    var l = function (response, $completion) {
      return i.w9m(response, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function addDefaultResponseValidation$lambda($this_addDefaultResponseValidation) {
    return function ($this$HttpResponseValidator) {
      $this$HttpResponseValidator.a9n_1 = $this_addDefaultResponseValidation.l9d_1;
      $this$HttpResponseValidator.b9n(addDefaultResponseValidation$lambda$slambda_0(null));
      return Unit_instance;
    };
  }
  var properties_initialized_DefaultResponseValidation_kt_akvzqt;
  function _init_properties_DefaultResponseValidation_kt__wcn8vr() {
    if (!properties_initialized_DefaultResponseValidation_kt_akvzqt) {
      properties_initialized_DefaultResponseValidation_kt_akvzqt = true;
      ValidateMark = new AttributeKey('ValidateMark');
      LOGGER_0 = KtorSimpleLogger('io.ktor.client.plugins.DefaultResponseValidation');
    }
  }
  function get_LOGGER_1() {
    _init_properties_DefaultTransform_kt__20knxx();
    return LOGGER_1;
  }
  var LOGGER_1;
  function defaultTransformers(_this__u8e3s4) {
    _init_properties_DefaultTransform_kt__20knxx();
    var tmp = Phases_getInstance().z9j_1;
    _this__u8e3s4.z9a_1.m7w(tmp, defaultTransformers$slambda_0(null));
    var tmp_0 = Phases_getInstance_1().y9d_1;
    _this__u8e3s4.a9b_1.m7w(tmp_0, defaultTransformers$slambda_2(null));
    platformResponseDefaultTransformers(_this__u8e3s4);
  }
  function defaultTransformers$1$content$1($contentType, $body) {
    this.f9n_1 = $body;
    ByteArrayContent.call(this);
    var tmp = this;
    tmp.d9n_1 = $contentType == null ? Application_getInstance().u7x_1 : $contentType;
    this.e9n_1 = toLong($body.length);
  }
  protoOf(defaultTransformers$1$content$1).k88 = function () {
    return this.d9n_1;
  };
  protoOf(defaultTransformers$1$content$1).l88 = function () {
    return this.e9n_1;
  };
  protoOf(defaultTransformers$1$content$1).m88 = function () {
    return this.f9n_1;
  };
  function defaultTransformers$1$content$2($this_intercept, $contentType, $body) {
    this.j9n_1 = $body;
    ReadChannelContent.call(this);
    var tmp = this;
    var tmp0_safe_receiver = $this_intercept.i7w_1.b9d_1.i7s(HttpHeaders_getInstance().s7z_1);
    tmp.h9n_1 = tmp0_safe_receiver == null ? null : toLong_0(tmp0_safe_receiver);
    var tmp_0 = this;
    tmp_0.i9n_1 = $contentType == null ? Application_getInstance().u7x_1 : $contentType;
  }
  protoOf(defaultTransformers$1$content$2).l88 = function () {
    return this.h9n_1;
  };
  protoOf(defaultTransformers$1$content$2).k88 = function () {
    return this.i9n_1;
  };
  protoOf(defaultTransformers$1$content$2).p88 = function () {
    return this.j9n_1;
  };
  function defaultTransformers$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(defaultTransformers$slambda).t9b = function ($this$intercept, body, $completion) {
    var tmp = this.u9b($this$intercept, body, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(defaultTransformers$slambda).oi = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.t9b(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(defaultTransformers$slambda).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 3;
            if (this.s9n_1.i7w_1.b9d_1.i7s(HttpHeaders_getInstance().d7z_1) == null) {
              this.s9n_1.i7w_1.b9d_1.u7t(HttpHeaders_getInstance().d7z_1, '*/*');
            }

            this.u9n_1 = contentType(this.s9n_1.i7w_1);
            var tmp_0 = this;
            var tmp0_subject = this.t9n_1;
            var tmp_1;
            if (typeof tmp0_subject === 'string') {
              var tmp1_elvis_lhs = this.u9n_1;
              tmp_1 = new TextContent(this.t9n_1, tmp1_elvis_lhs == null ? Text_getInstance().k7y_1 : tmp1_elvis_lhs);
            } else {
              if (isByteArray(tmp0_subject)) {
                tmp_1 = new defaultTransformers$1$content$1(this.u9n_1, this.t9n_1);
              } else {
                if (isInterface(tmp0_subject, ByteReadChannel)) {
                  tmp_1 = new defaultTransformers$1$content$2(this.s9n_1, this.u9n_1, this.t9n_1);
                } else {
                  if (tmp0_subject instanceof OutgoingContent) {
                    tmp_1 = this.t9n_1;
                  } else {
                    tmp_1 = platformRequestDefaultTransform(this.u9n_1, this.s9n_1.i7w_1, this.t9n_1);
                  }
                }
              }
            }

            tmp_0.v9n_1 = tmp_1;
            var tmp2_safe_receiver = this.v9n_1;
            if (!((tmp2_safe_receiver == null ? null : tmp2_safe_receiver.k88()) == null)) {
              this.s9n_1.i7w_1.b9d_1.w7t(HttpHeaders_getInstance().v7z_1);
              get_LOGGER_1().d7x('Transformed with default transformers request body for ' + this.s9n_1.i7w_1.z9c_1 + ' from ' + getKClassFromExpression(this.t9n_1));
              this.ac_1 = 1;
              suspendResult = this.s9n_1.m7v(this.v9n_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.ac_1 = 2;
              continue $sm;
            }

          case 1:
            this.ac_1 = 2;
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
  protoOf(defaultTransformers$slambda).u9b = function ($this$intercept, body, completion) {
    var i = new defaultTransformers$slambda(completion);
    i.s9n_1 = $this$intercept;
    i.t9n_1 = body;
    return i;
  };
  function defaultTransformers$slambda_0(resultContinuation) {
    var i = new defaultTransformers$slambda(resultContinuation);
    var l = function ($this$intercept, body, $completion) {
      return i.t9b($this$intercept, body, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function defaultTransformers$slambda$slambda($body, $response, resultContinuation) {
    this.e9o_1 = $body;
    this.f9o_1 = $response;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(defaultTransformers$slambda$slambda).f9h = function ($this$writer, $completion) {
    var tmp = this.g9h($this$writer, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(defaultTransformers$slambda$slambda).yc = function (p1, $completion) {
    return this.f9h((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(defaultTransformers$slambda$slambda).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 5;
            this.ac_1 = 1;
            continue $sm;
          case 1:
            this.bc_1 = 4;
            this.bc_1 = 3;
            this.ac_1 = 2;
            var tmp_0 = this.g9o_1.b12();
            Companion_getInstance_1();
            suspendResult = copyTo(this.e9o_1, tmp_0, new Long(-1, 2147483647), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_1 = this;
            tmp_1.h9o_1 = Unit_instance;
            this.bc_1 = 5;
            this.ac_1 = 6;
            continue $sm;
          case 3:
            this.bc_1 = 4;
            var tmp_2 = this.dc_1;
            if (tmp_2 instanceof CancellationException) {
              var cause = this.dc_1;
              var tmp_3 = this;
              cancel(this.f9o_1, cause);
              throw cause;
            } else {
              var tmp_4 = this.dc_1;
              if (tmp_4 instanceof Error) {
                var cause_0 = this.dc_1;
                var tmp_5 = this;
                cancel_0(this.f9o_1, 'Receive failed', cause_0);
                throw cause_0;
              } else {
                throw this.dc_1;
              }
            }

          case 4:
            this.bc_1 = 5;
            var t = this.dc_1;
            complete(this.f9o_1);
            throw t;
          case 5:
            throw this.dc_1;
          case 6:
            this.bc_1 = 5;
            complete(this.f9o_1);
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.bc_1 === 5) {
          throw e;
        } else {
          this.ac_1 = this.bc_1;
          this.dc_1 = e;
        }
      }
     while (true);
  };
  protoOf(defaultTransformers$slambda$slambda).g9h = function ($this$writer, completion) {
    var i = new defaultTransformers$slambda$slambda(this.e9o_1, this.f9o_1, completion);
    i.g9o_1 = $this$writer;
    return i;
  };
  function defaultTransformers$slambda$slambda_0($body, $response, resultContinuation) {
    var i = new defaultTransformers$slambda$slambda($body, $response, resultContinuation);
    var l = function ($this$writer, $completion) {
      return i.f9h($this$writer, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function defaultTransformers$slambda$lambda($responseJobHolder) {
    return function (it) {
      $responseJobHolder.cv();
      return Unit_instance;
    };
  }
  function defaultTransformers$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(defaultTransformers$slambda_1).n9c = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $completion) {
    var tmp = this.o9c($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(defaultTransformers$slambda_1).oi = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.n9c(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(defaultTransformers$slambda_1).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 11;
            this.s9o_1 = this.r9o_1.se();
            this.t9o_1 = this.r9o_1.te();
            var tmp_0 = this.t9o_1;
            if (!isInterface(tmp_0, ByteReadChannel))
              return Unit_instance;
            this.u9o_1 = this.q9o_1.i7w_1.a9c();
            this.v9o_1 = this.s9o_1.y7w_1;
            if (this.v9o_1.equals(getKClass(Unit))) {
              cancel_1(this.t9o_1);
              this.ac_1 = 9;
              suspendResult = this.q9o_1.m7v(new HttpResponseContainer(this.s9o_1, Unit_instance), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (this.v9o_1.equals(PrimitiveClasses_getInstance().y7())) {
                this.ac_1 = 7;
                suspendResult = this.t9o_1.i7j(VOID, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                if (this.v9o_1.equals(getKClass(ByteReadPacket)) ? true : this.v9o_1.equals(getKClass(Input))) {
                  this.ac_1 = 5;
                  suspendResult = this.t9o_1.i7j(VOID, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.v9o_1.equals(PrimitiveClasses_getInstance().g8())) {
                    this.ac_1 = 3;
                    suspendResult = toByteArray(this.t9o_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    if (this.v9o_1.equals(getKClass(ByteReadChannel))) {
                      this.x9o_1 = Job(this.u9o_1.vo().hc(Key_instance));
                      var tmp_1 = this;
                      var tmp_2 = this.u9o_1.vo();
                      var this_0 = writer(this.q9o_1, tmp_2, VOID, defaultTransformers$slambda$slambda_0(this.t9o_1, this.u9o_1, null));
                      this_0.xp(defaultTransformers$slambda$lambda(this.x9o_1));
                      tmp_1.y9o_1 = this_0.b12();
                      this.ac_1 = 2;
                      suspendResult = this.q9o_1.m7v(new HttpResponseContainer(this.s9o_1, this.y9o_1), this);
                      if (suspendResult === get_COROUTINE_SUSPENDED()) {
                        return suspendResult;
                      }
                      continue $sm;
                    } else {
                      if (this.v9o_1.equals(getKClass(HttpStatusCode))) {
                        cancel_1(this.t9o_1);
                        this.ac_1 = 1;
                        suspendResult = this.q9o_1.m7v(new HttpResponseContainer(this.s9o_1, this.u9o_1.m9f()), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                          return suspendResult;
                        }
                        continue $sm;
                      } else {
                        this.w9o_1 = null;
                        this.ac_1 = 10;
                        continue $sm;
                      }
                    }
                  }
                }
              }
            }

          case 1:
            this.w9o_1 = suspendResult;
            this.ac_1 = 10;
            continue $sm;
          case 2:
            this.w9o_1 = suspendResult;
            this.ac_1 = 10;
            continue $sm;
          case 3:
            this.z9o_1 = suspendResult;
            this.a9p_1 = contentLength(this.u9o_1);
            this.b9p_1 = !PlatformUtils_getInstance().c7t_1 ? this.u9o_1.g83().i7s(HttpHeaders_getInstance().q7z_1) == null : false;
            this.c9p_1 = !this.q9o_1.i7w_1.j9f().i9g().equals(Companion_getInstance_2().m83_1);
            if (((this.b9p_1 ? this.c9p_1 : false) ? !(this.a9p_1 == null) : false) ? this.a9p_1.x9(new Long(0, 0)) > 0 : false) {
              if (!(this.z9o_1.length === this.a9p_1.fa())) {
                var message = 'Expected ' + toString_0(this.a9p_1) + ', actual ' + this.z9o_1.length;
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }

            this.ac_1 = 4;
            suspendResult = this.q9o_1.m7v(new HttpResponseContainer(this.s9o_1, this.z9o_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.w9o_1 = suspendResult;
            this.ac_1 = 10;
            continue $sm;
          case 5:
            this.d9p_1 = suspendResult;
            this.e9p_1 = new HttpResponseContainer(this.s9o_1, this.d9p_1);
            this.ac_1 = 6;
            suspendResult = this.q9o_1.m7v(this.e9p_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            this.w9o_1 = suspendResult;
            this.ac_1 = 10;
            continue $sm;
          case 7:
            this.f9p_1 = suspendResult;
            this.g9p_1 = this.f9p_1.l7n();
            this.h9p_1 = toInt(this.g9p_1);
            this.i9p_1 = new HttpResponseContainer(this.s9o_1, this.h9p_1);
            this.ac_1 = 8;
            suspendResult = this.q9o_1.m7v(this.i9p_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            this.w9o_1 = suspendResult;
            this.ac_1 = 10;
            continue $sm;
          case 9:
            this.w9o_1 = suspendResult;
            this.ac_1 = 10;
            continue $sm;
          case 10:
            var result = this.w9o_1;
            if (!(result == null)) {
              get_LOGGER_1().d7x('Transformed with default transformers response body ' + ('for ' + this.q9o_1.i7w_1.j9f().l9f() + ' to ' + this.s9o_1.y7w_1));
            }

            return Unit_instance;
          case 11:
            throw this.dc_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.bc_1 === 11) {
          throw e;
        } else {
          this.ac_1 = this.bc_1;
          this.dc_1 = e;
        }
      }
     while (true);
  };
  protoOf(defaultTransformers$slambda_1).o9c = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, completion) {
    var i = new defaultTransformers$slambda_1(completion);
    i.q9o_1 = $this$intercept;
    i.r9o_1 = _name_for_destructuring_parameter_0__wldtmu;
    return i;
  };
  function defaultTransformers$slambda_2(resultContinuation) {
    var i = new defaultTransformers$slambda_1(resultContinuation);
    var l = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $completion) {
      return i.n9c($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $completion);
    };
    l.$arity = 2;
    return l;
  }
  var properties_initialized_DefaultTransform_kt_ossax9;
  function _init_properties_DefaultTransform_kt__20knxx() {
    if (!properties_initialized_DefaultTransform_kt_ossax9) {
      properties_initialized_DefaultTransform_kt_ossax9 = true;
      LOGGER_1 = KtorSimpleLogger('io.ktor.client.plugins.defaultTransformers');
    }
  }
  function get_LOGGER_2() {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    return LOGGER_2;
  }
  var LOGGER_2;
  function get_ExpectSuccessAttributeKey() {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    return ExpectSuccessAttributeKey;
  }
  var ExpectSuccessAttributeKey;
  function HttpCallValidator$Companion$install$slambda$lambda($plugin) {
    return function () {
      return $plugin.l9p_1;
    };
  }
  function HttpCallValidator$Companion$install$slambda($plugin, resultContinuation) {
    this.u9p_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpCallValidator$Companion$install$slambda).t9b = function ($this$intercept, it, $completion) {
    var tmp = this.u9b($this$intercept, it, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(HttpCallValidator$Companion$install$slambda).oi = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.t9b(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpCallValidator$Companion$install$slambda).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 5;
            this.bc_1 = 3;
            var tmp_0 = get_ExpectSuccessAttributeKey();
            this.v9p_1.i7w_1.e9d_1.t7r(tmp_0, HttpCallValidator$Companion$install$slambda$lambda(this.u9p_1));
            this.ac_1 = 1;
            suspendResult = this.v9p_1.m7v(this.w9p_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.bc_1 = 5;
            this.ac_1 = 2;
            continue $sm;
          case 2:
            this.bc_1 = 5;
            return Unit_instance;
          case 3:
            this.bc_1 = 5;
            var tmp_1 = this.dc_1;
            if (tmp_1 instanceof Error) {
              this.x9p_1 = this.dc_1;
              this.y9p_1 = unwrapCancellationException(this.x9p_1);
              this.ac_1 = 4;
              suspendResult = processException(this.u9p_1, this.y9p_1, HttpRequest(this.v9p_1.i7w_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.dc_1;
            }

          case 4:
            throw this.y9p_1;
          case 5:
            throw this.dc_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.bc_1 === 5) {
          throw e;
        } else {
          this.ac_1 = this.bc_1;
          this.dc_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpCallValidator$Companion$install$slambda).u9b = function ($this$intercept, it, completion) {
    var i = new HttpCallValidator$Companion$install$slambda(this.u9p_1, completion);
    i.v9p_1 = $this$intercept;
    i.w9p_1 = it;
    return i;
  };
  function HttpCallValidator$Companion$install$slambda_0($plugin, resultContinuation) {
    var i = new HttpCallValidator$Companion$install$slambda($plugin, resultContinuation);
    var l = function ($this$intercept, it, $completion) {
      return i.t9b($this$intercept, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function HttpCallValidator$Companion$install$slambda_1($plugin, resultContinuation) {
    this.h9q_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpCallValidator$Companion$install$slambda_1).n9c = function ($this$intercept, container, $completion) {
    var tmp = this.o9c($this$intercept, container, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(HttpCallValidator$Companion$install$slambda_1).oi = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.n9c(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpCallValidator$Companion$install$slambda_1).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 5;
            this.bc_1 = 3;
            this.ac_1 = 1;
            suspendResult = this.i9q_1.m7v(this.j9q_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.bc_1 = 5;
            this.ac_1 = 2;
            continue $sm;
          case 2:
            this.bc_1 = 5;
            return Unit_instance;
          case 3:
            this.bc_1 = 5;
            var tmp_0 = this.dc_1;
            if (tmp_0 instanceof Error) {
              this.k9q_1 = this.dc_1;
              this.l9q_1 = unwrapCancellationException(this.k9q_1);
              this.ac_1 = 4;
              suspendResult = processException(this.h9q_1, this.l9q_1, this.i9q_1.i7w_1.j9f(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.dc_1;
            }

          case 4:
            throw this.l9q_1;
          case 5:
            throw this.dc_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.bc_1 === 5) {
          throw e;
        } else {
          this.ac_1 = this.bc_1;
          this.dc_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpCallValidator$Companion$install$slambda_1).o9c = function ($this$intercept, container, completion) {
    var i = new HttpCallValidator$Companion$install$slambda_1(this.h9q_1, completion);
    i.i9q_1 = $this$intercept;
    i.j9q_1 = container;
    return i;
  };
  function HttpCallValidator$Companion$install$slambda_2($plugin, resultContinuation) {
    var i = new HttpCallValidator$Companion$install$slambda_1($plugin, resultContinuation);
    var l = function ($this$intercept, container, $completion) {
      return i.n9c($this$intercept, container, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function HttpCallValidator$Companion$install$slambda_3($plugin, resultContinuation) {
    this.u9q_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpCallValidator$Companion$install$slambda_3).y9q = function ($this$intercept, request, $completion) {
    var tmp = this.z9q($this$intercept, request, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(HttpCallValidator$Companion$install$slambda_3).oi = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, Sender) : false) ? p1 : THROW_CCE();
    return this.y9q(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpCallValidator$Companion$install$slambda_3).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 3;
            this.ac_1 = 1;
            suspendResult = this.v9q_1.c9e(this.w9q_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.x9q_1 = suspendResult;
            this.ac_1 = 2;
            suspendResult = validateResponse(this.u9q_1, this.x9q_1.a9c(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return this.x9q_1;
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
  protoOf(HttpCallValidator$Companion$install$slambda_3).z9q = function ($this$intercept, request, completion) {
    var i = new HttpCallValidator$Companion$install$slambda_3(this.u9q_1, completion);
    i.v9q_1 = $this$intercept;
    i.w9q_1 = request;
    return i;
  };
  function HttpCallValidator$Companion$install$slambda_4($plugin, resultContinuation) {
    var i = new HttpCallValidator$Companion$install$slambda_3($plugin, resultContinuation);
    var l = function ($this$intercept, request, $completion) {
      return i.y9q($this$intercept, request, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function validateResponse($this, response, $completion) {
    var tmp = new $validateResponseCOROUTINE$5($this, response, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  }
  function processException($this, cause, request, $completion) {
    var tmp = new $processExceptionCOROUTINE$6($this, cause, request, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  }
  function Config() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.y9m_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.z9m_1 = ArrayList_init_$Create$();
    this.a9n_1 = true;
  }
  protoOf(Config).b9n = function (block) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.y9m_1.a1(block);
  };
  function Companion_1() {
    Companion_instance_2 = this;
    this.d9s_1 = new AttributeKey('HttpResponseValidator');
  }
  protoOf(Companion_1).p2 = function () {
    return this.d9s_1;
  };
  protoOf(Companion_1).e9s = function (block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new Config();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    var config = this_0;
    return new HttpCallValidator(reversed(config.y9m_1), reversed(config.z9m_1), config.a9n_1);
  };
  protoOf(Companion_1).e9e = function (block) {
    return this.e9s(block);
  };
  protoOf(Companion_1).f9s = function (plugin_0, scope) {
    var tmp = Phases_getInstance().w9j_1;
    scope.z9a_1.m7w(tmp, HttpCallValidator$Companion$install$slambda_0(plugin_0, null));
    var BeforeReceive = new PipelinePhase('BeforeReceive');
    scope.a9b_1.l7w(Phases_getInstance_1().x9d_1, BeforeReceive);
    scope.a9b_1.m7w(BeforeReceive, HttpCallValidator$Companion$install$slambda_2(plugin_0, null));
    var tmp_0 = plugin(scope, Plugin_getInstance_4());
    tmp_0.i9s(HttpCallValidator$Companion$install$slambda_4(plugin_0, null));
  };
  protoOf(Companion_1).f9e = function (plugin, scope) {
    return this.f9s(plugin instanceof HttpCallValidator ? plugin : THROW_CCE(), scope);
  };
  var Companion_instance_2;
  function Companion_getInstance_9() {
    if (Companion_instance_2 == null)
      new Companion_1();
    return Companion_instance_2;
  }
  function $validateResponseCOROUTINE$5(_this__u8e3s4, response, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i9r_1 = _this__u8e3s4;
    this.j9r_1 = response;
  }
  protoOf($validateResponseCOROUTINE$5).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 4;
            get_LOGGER_2().d7x('Validating response for request ' + this.j9r_1.h9g().j9f().l9f());
            var tmp_0 = this;
            tmp_0.k9r_1 = this.i9r_1.j9p_1;
            this.l9r_1 = this.k9r_1.o();
            this.ac_1 = 1;
            continue $sm;
          case 1:
            if (!this.l9r_1.d1()) {
              this.ac_1 = 3;
              continue $sm;
            }

            this.m9r_1 = this.l9r_1.f1();
            this.ac_1 = 2;
            suspendResult = this.m9r_1(this.j9r_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.ac_1 = 1;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.dc_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.bc_1 === 4) {
          throw e;
        } else {
          this.ac_1 = this.bc_1;
          this.dc_1 = e;
        }
      }
     while (true);
  };
  function $processExceptionCOROUTINE$6(_this__u8e3s4, cause, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v9r_1 = _this__u8e3s4;
    this.w9r_1 = cause;
    this.x9r_1 = request;
  }
  protoOf($processExceptionCOROUTINE$6).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 6;
            get_LOGGER_2().d7x('Processing exception ' + this.w9r_1 + ' for request ' + this.x9r_1.l9f());
            var tmp_0 = this;
            tmp_0.y9r_1 = this.v9r_1.k9p_1;
            this.z9r_1 = this.y9r_1.o();
            this.ac_1 = 1;
            continue $sm;
          case 1:
            if (!this.z9r_1.d1()) {
              this.ac_1 = 5;
              continue $sm;
            }

            this.a9s_1 = this.z9r_1.f1();
            var tmp_1 = this;
            tmp_1.b9s_1 = this.a9s_1;
            this.c9s_1 = this.b9s_1;
            var tmp_2 = this.c9s_1;
            if (tmp_2 instanceof ExceptionHandlerWrapper) {
              this.ac_1 = 3;
              suspendResult = this.b9s_1.k9s_1(this.w9r_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_3 = this.c9s_1;
              if (tmp_3 instanceof RequestExceptionHandlerWrapper) {
                this.ac_1 = 2;
                suspendResult = this.b9s_1.j9s_1(this.w9r_1, this.x9r_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.ac_1 = 4;
                continue $sm;
              }
            }

          case 2:
            this.ac_1 = 4;
            continue $sm;
          case 3:
            this.ac_1 = 4;
            continue $sm;
          case 4:
            this.ac_1 = 1;
            continue $sm;
          case 5:
            return Unit_instance;
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
  function HttpCallValidator(responseValidators, callExceptionHandlers, expectSuccess) {
    Companion_getInstance_9();
    this.j9p_1 = responseValidators;
    this.k9p_1 = callExceptionHandlers;
    this.l9p_1 = expectSuccess;
  }
  function ExceptionHandlerWrapper() {
  }
  function RequestExceptionHandlerWrapper() {
  }
  function HttpRequest(builder) {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    return new HttpRequest$1(builder);
  }
  function HttpResponseValidator(_this__u8e3s4, block) {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    _this__u8e3s4.g9e(Companion_getInstance_9(), block);
  }
  function HttpRequest$1($builder) {
    this.p9s_1 = $builder;
    this.l9s_1 = $builder.a9d_1;
    this.m9s_1 = $builder.z9c_1.e3();
    this.n9s_1 = $builder.e9d_1;
    this.o9s_1 = $builder.b9d_1.e3();
  }
  protoOf(HttpRequest$1).h9g = function () {
    var message = 'Call is not initialized';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(HttpRequest$1).i9g = function () {
    return this.l9s_1;
  };
  protoOf(HttpRequest$1).l9f = function () {
    return this.m9s_1;
  };
  protoOf(HttpRequest$1).o9e = function () {
    return this.n9s_1;
  };
  protoOf(HttpRequest$1).g83 = function () {
    return this.o9s_1;
  };
  var properties_initialized_HttpCallValidator_kt_xrx49w;
  function _init_properties_HttpCallValidator_kt__r6yh2y() {
    if (!properties_initialized_HttpCallValidator_kt_xrx49w) {
      properties_initialized_HttpCallValidator_kt_xrx49w = true;
      LOGGER_2 = KtorSimpleLogger('io.ktor.client.plugins.HttpCallValidator');
      ExpectSuccessAttributeKey = new AttributeKey('ExpectSuccessAttributeKey');
    }
  }
  function get_PLUGIN_INSTALLED_LIST() {
    _init_properties_HttpClientPlugin_kt__cypu1m();
    return PLUGIN_INSTALLED_LIST;
  }
  var PLUGIN_INSTALLED_LIST;
  function plugin(_this__u8e3s4, plugin) {
    _init_properties_HttpClientPlugin_kt__cypu1m();
    var tmp0_elvis_lhs = pluginOrNull(_this__u8e3s4, plugin);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Plugin ' + plugin + ' is not installed. Consider using `install(' + plugin.p2() + ')` in client config first.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function HttpClientPlugin() {
  }
  function pluginOrNull(_this__u8e3s4, plugin) {
    _init_properties_HttpClientPlugin_kt__cypu1m();
    var tmp0_safe_receiver = _this__u8e3s4.d9b_1.p7r(get_PLUGIN_INSTALLED_LIST());
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p7r(plugin.p2());
  }
  var properties_initialized_HttpClientPlugin_kt_p98320;
  function _init_properties_HttpClientPlugin_kt__cypu1m() {
    if (!properties_initialized_HttpClientPlugin_kt_p98320) {
      properties_initialized_HttpClientPlugin_kt_p98320 = true;
      PLUGIN_INSTALLED_LIST = new AttributeKey('ApplicationPluginRegistry');
    }
  }
  function get_LOGGER_3() {
    _init_properties_HttpPlainText_kt__iy89z1();
    return LOGGER_3;
  }
  var LOGGER_3;
  function HttpPlainText$Plugin$install$slambda($plugin, resultContinuation) {
    this.y9s_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpPlainText$Plugin$install$slambda).t9b = function ($this$intercept, content, $completion) {
    var tmp = this.u9b($this$intercept, content, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(HttpPlainText$Plugin$install$slambda).oi = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.t9b(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpPlainText$Plugin$install$slambda).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 2;
            this.y9s_1.f9t(this.z9s_1.i7w_1);
            var tmp_0 = this.a9t_1;
            if (!(typeof tmp_0 === 'string'))
              return Unit_instance;
            this.b9t_1 = contentType(this.z9s_1.i7w_1);
            if (!(this.b9t_1 == null) ? !(this.b9t_1.u7y_1 === Text_getInstance().k7y_1.u7y_1) : false) {
              return Unit_instance;
            }

            this.ac_1 = 1;
            suspendResult = this.z9s_1.m7v(wrapContent(this.y9s_1, this.z9s_1.i7w_1, this.a9t_1, this.b9t_1), this);
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
  protoOf(HttpPlainText$Plugin$install$slambda).u9b = function ($this$intercept, content, completion) {
    var i = new HttpPlainText$Plugin$install$slambda(this.y9s_1, completion);
    i.z9s_1 = $this$intercept;
    i.a9t_1 = content;
    return i;
  };
  function HttpPlainText$Plugin$install$slambda_0($plugin, resultContinuation) {
    var i = new HttpPlainText$Plugin$install$slambda($plugin, resultContinuation);
    var l = function ($this$intercept, content, $completion) {
      return i.t9b($this$intercept, content, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function HttpPlainText$Plugin$install$slambda_1($plugin, resultContinuation) {
    this.o9t_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpPlainText$Plugin$install$slambda_1).n9c = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $completion) {
    var tmp = this.o9c($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(HttpPlainText$Plugin$install$slambda_1).oi = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.n9c(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpPlainText$Plugin$install$slambda_1).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 3;
            this.r9t_1 = this.q9t_1.se();
            this.s9t_1 = this.q9t_1.te();
            var tmp_0;
            if (!this.r9t_1.y7w_1.equals(PrimitiveClasses_getInstance().c8())) {
              tmp_0 = true;
            } else {
              var tmp_1 = this.s9t_1;
              tmp_0 = !isInterface(tmp_1, ByteReadChannel);
            }

            if (tmp_0)
              return Unit_instance;
            this.ac_1 = 1;
            suspendResult = this.s9t_1.i7j(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.t9t_1 = suspendResult;
            this.u9t_1 = this.o9t_1.v9t(this.p9t_1.i7w_1, this.t9t_1);
            this.ac_1 = 2;
            suspendResult = this.p9t_1.m7v(new HttpResponseContainer(this.r9t_1, this.u9t_1), this);
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
  protoOf(HttpPlainText$Plugin$install$slambda_1).o9c = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, completion) {
    var i = new HttpPlainText$Plugin$install$slambda_1(this.o9t_1, completion);
    i.p9t_1 = $this$intercept;
    i.q9t_1 = _name_for_destructuring_parameter_0__wldtmu;
    return i;
  };
  function HttpPlainText$Plugin$install$slambda_2($plugin, resultContinuation) {
    var i = new HttpPlainText$Plugin$install$slambda_1($plugin, resultContinuation);
    var l = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $completion) {
      return i.n9c($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Config_0() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp.w9t_1 = LinkedHashSet_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.x9t_1 = LinkedHashMap_init_$Create$();
    this.y9t_1 = null;
    this.z9t_1 = Charsets_getInstance().u7n_1;
  }
  function Plugin_1() {
    Plugin_instance_1 = this;
    this.a9u_1 = new AttributeKey('HttpPlainText');
  }
  protoOf(Plugin_1).p2 = function () {
    return this.a9u_1;
  };
  protoOf(Plugin_1).b9u = function (block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new Config_0();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    var config = this_0;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    return new HttpPlainText(config.w9t_1, config.x9t_1, config.y9t_1, config.z9t_1);
  };
  protoOf(Plugin_1).e9e = function (block) {
    return this.b9u(block);
  };
  protoOf(Plugin_1).c9u = function (plugin, scope) {
    var tmp = Phases_getInstance().z9j_1;
    scope.z9a_1.m7w(tmp, HttpPlainText$Plugin$install$slambda_0(plugin, null));
    var tmp_0 = Phases_getInstance_1().z9d_1;
    scope.a9b_1.m7w(tmp_0, HttpPlainText$Plugin$install$slambda_2(plugin, null));
  };
  protoOf(Plugin_1).f9e = function (plugin, scope) {
    return this.c9u(plugin instanceof HttpPlainText ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance_1;
  function Plugin_getInstance_1() {
    if (Plugin_instance_1 == null)
      new Plugin_1();
    return Plugin_instance_1;
  }
  function wrapContent($this, request, content, requestContentType) {
    var contentType = requestContentType == null ? Text_getInstance().k7y_1 : requestContentType;
    var tmp2_elvis_lhs = requestContentType == null ? null : charset(requestContentType);
    var charset_0 = tmp2_elvis_lhs == null ? $this.d9t_1 : tmp2_elvis_lhs;
    get_LOGGER_3().d7x('Sending request body to ' + request.z9c_1 + ' as text/plain with charset ' + charset_0);
    return new TextContent(content, withCharset(contentType, charset_0));
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.d9u_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).j9 = function (a, b) {
    return this.d9u_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.j9(a, b);
  };
  function HttpPlainText$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>' call
    var tmp = b.re_1;
    // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>' call
    var tmp$ret$1 = a.re_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function HttpPlainText$lambda_0(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>' call
    var tmp = get_name(a);
    // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>' call
    var tmp$ret$1 = get_name(b);
    return compareValues(tmp, tmp$ret$1);
  }
  function HttpPlainText(charsets, charsetQuality, sendCharset, responseCharsetFallback) {
    Plugin_getInstance_1();
    this.c9t_1 = responseCharsetFallback;
    // Inline function 'kotlin.collections.sortedByDescending' call
    var this_0 = toList(charsetQuality);
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp = HttpPlainText$lambda;
    var tmp$ret$0 = new sam$kotlin_Comparator$0(tmp);
    var withQuality = sortedWith(this_0, tmp$ret$0);
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = charsets.o();
    while (tmp0_iterator.d1()) {
      var element = tmp0_iterator.f1();
      // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>' call
      if (!charsetQuality.u2(element)) {
        destination.a1(element);
      }
    }
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_0 = HttpPlainText$lambda_0;
    var tmp$ret$5 = new sam$kotlin_Comparator$0(tmp_0);
    var withoutQuality = sortedWith(destination, tmp$ret$5);
    var tmp_1 = this;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_1 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = withoutQuality.o();
    while (tmp0_iterator_0.d1()) {
      var element_0 = tmp0_iterator_0.f1();
      // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(this_1) > 0) {
        this_1.x5(',');
      }
      this_1.x5(get_name(element_0));
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_1 = withQuality.o();
    while (tmp0_iterator_1.d1()) {
      var element_1 = tmp0_iterator_1.f1();
      // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>.<anonymous>' call
      var charset = element_1.se();
      var quality = element_1.te();
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(this_1) > 0) {
        this_1.x5(',');
      }
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(0.0 <= quality ? quality <= 1.0 : false)) {
        // Inline function 'kotlin.check.<anonymous>' call
        var message = 'Check failed.';
        throw IllegalStateException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.math.roundToInt' call
      var this_2 = 100 * quality;
      var truncatedQuality = roundToInt(this_2) / 100.0;
      this_1.x5(get_name(charset) + ';q=' + truncatedQuality);
    }
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(this_1) === 0) {
      this_1.x5(get_name(this.c9t_1));
    }
    tmp_1.e9t_1 = this_1.toString();
    var tmp_2 = this;
    var tmp2_elvis_lhs = sendCharset == null ? firstOrNull(withoutQuality) : sendCharset;
    var tmp_3;
    if (tmp2_elvis_lhs == null) {
      var tmp1_safe_receiver = firstOrNull(withQuality);
      tmp_3 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.qe_1;
    } else {
      tmp_3 = tmp2_elvis_lhs;
    }
    var tmp3_elvis_lhs = tmp_3;
    tmp_2.d9t_1 = tmp3_elvis_lhs == null ? Charsets_getInstance().u7n_1 : tmp3_elvis_lhs;
  }
  protoOf(HttpPlainText).v9t = function (call, body) {
    var tmp0_elvis_lhs = charset_0(call.a9c());
    var actualCharset = tmp0_elvis_lhs == null ? this.c9t_1 : tmp0_elvis_lhs;
    get_LOGGER_3().d7x('Reading response body for ' + call.j9f().l9f() + ' as String with charset ' + actualCharset);
    return readText(body, actualCharset);
  };
  protoOf(HttpPlainText).f9t = function (context) {
    if (!(context.b9d_1.i7s(HttpHeaders_getInstance().e7z_1) == null))
      return Unit_instance;
    get_LOGGER_3().d7x('Adding Accept-Charset=' + this.e9t_1 + ' to ' + context.z9c_1);
    context.b9d_1.s7t(HttpHeaders_getInstance().e7z_1, this.e9t_1);
  };
  var properties_initialized_HttpPlainText_kt_2nx4ox;
  function _init_properties_HttpPlainText_kt__iy89z1() {
    if (!properties_initialized_HttpPlainText_kt_2nx4ox) {
      properties_initialized_HttpPlainText_kt_2nx4ox = true;
      LOGGER_3 = KtorSimpleLogger('io.ktor.client.plugins.HttpPlainText');
    }
  }
  function get_ALLOWED_FOR_REDIRECT() {
    _init_properties_HttpRedirect_kt__ure7fo();
    return ALLOWED_FOR_REDIRECT;
  }
  var ALLOWED_FOR_REDIRECT;
  function get_LOGGER_4() {
    _init_properties_HttpRedirect_kt__ure7fo();
    return LOGGER_4;
  }
  var LOGGER_4;
  function handleCall(_this__u8e3s4, $this, context, origin, allowHttpsDowngrade, client, $completion) {
    var tmp = new $handleCallCOROUTINE$7($this, _this__u8e3s4, context, origin, allowHttpsDowngrade, client, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  }
  function HttpRedirect$Plugin$install$slambda($plugin, $scope, resultContinuation) {
    this.f9v_1 = $plugin;
    this.g9v_1 = $scope;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRedirect$Plugin$install$slambda).y9q = function ($this$intercept, context, $completion) {
    var tmp = this.z9q($this$intercept, context, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(HttpRedirect$Plugin$install$slambda).oi = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, Sender) : false) ? p1 : THROW_CCE();
    return this.y9q(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpRedirect$Plugin$install$slambda).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 3;
            this.ac_1 = 1;
            suspendResult = this.h9v_1.c9e(this.i9v_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.j9v_1 = suspendResult;
            if (this.f9v_1.k9v_1 ? !get_ALLOWED_FOR_REDIRECT().s(this.j9v_1.j9f().i9g()) : false) {
              return this.j9v_1;
            }

            this.ac_1 = 2;
            suspendResult = handleCall(this.h9v_1, Plugin_getInstance_2(), this.i9v_1, this.j9v_1, this.f9v_1.l9v_1, this.g9v_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
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
  protoOf(HttpRedirect$Plugin$install$slambda).z9q = function ($this$intercept, context, completion) {
    var i = new HttpRedirect$Plugin$install$slambda(this.f9v_1, this.g9v_1, completion);
    i.h9v_1 = $this$intercept;
    i.i9v_1 = context;
    return i;
  };
  function HttpRedirect$Plugin$install$slambda_0($plugin, $scope, resultContinuation) {
    var i = new HttpRedirect$Plugin$install$slambda($plugin, $scope, resultContinuation);
    var l = function ($this$intercept, context, $completion) {
      return i.y9q($this$intercept, context, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $handleCallCOROUTINE$7(_this__u8e3s4, _this__u8e3s4_0, context, origin, allowHttpsDowngrade, client, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m9u_1 = _this__u8e3s4;
    this.n9u_1 = _this__u8e3s4_0;
    this.o9u_1 = context;
    this.p9u_1 = origin;
    this.q9u_1 = allowHttpsDowngrade;
    this.r9u_1 = client;
  }
  protoOf($handleCallCOROUTINE$7).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 3;
            if (!isRedirect(this.p9u_1.a9c().m9f()))
              return this.p9u_1;
            this.s9u_1 = this.p9u_1;
            this.t9u_1 = this.o9u_1;
            this.u9u_1 = this.p9u_1.j9f().l9f().t86_1;
            this.v9u_1 = get_authority(this.p9u_1.j9f().l9f());
            this.ac_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.ac_1 = 4;
              continue $sm;
            }

            this.r9u_1.f9b_1.o9a(this.m9u_1.n9v_1, this.s9u_1.a9c());
            this.w9u_1 = this.s9u_1.a9c().g83().i7s(HttpHeaders_getInstance().r80_1);
            get_LOGGER_4().d7x('Received redirect response to ' + this.w9u_1 + ' for request ' + this.o9u_1.z9c_1);
            var tmp_0 = this;
            var this_0 = new HttpRequestBuilder();
            this_0.x9i(this.t9u_1);
            this_0.z9c_1.q86_1.h1();
            var tmp0_safe_receiver = this.w9u_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              takeFrom_0(this_0.z9c_1, tmp0_safe_receiver);
            }

            if ((!this.q9u_1 ? isSecure(this.u9u_1) : false) ? !isSecure(this_0.z9c_1.h86_1) : false) {
              get_LOGGER_4().d7x('Can not redirect ' + this.o9u_1.z9c_1 + ' because of security downgrade');
              return this.s9u_1;
            }

            if (!(this.v9u_1 === get_authority_0(this_0.z9c_1))) {
              this_0.b9d_1.w7t(HttpHeaders_getInstance().m7z_1);
              get_LOGGER_4().d7x('Removing Authorization header from redirect for ' + this.o9u_1.z9c_1);
            }

            tmp_0.t9u_1 = this_0;
            this.ac_1 = 2;
            suspendResult = this.n9u_1.c9e(this.t9u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.s9u_1 = suspendResult;
            if (!isRedirect(this.s9u_1.a9c().m9f()))
              return this.s9u_1;
            this.ac_1 = 1;
            continue $sm;
          case 3:
            throw this.dc_1;
          case 4:
            return Unit_instance;
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
  function Config_1() {
    this.o9v_1 = true;
    this.p9v_1 = false;
  }
  function Plugin_2() {
    Plugin_instance_2 = this;
    this.m9v_1 = new AttributeKey('HttpRedirect');
    this.n9v_1 = new EventDefinition();
  }
  protoOf(Plugin_2).p2 = function () {
    return this.m9v_1;
  };
  protoOf(Plugin_2).q9v = function (block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new Config_1();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    var config = this_0;
    return new HttpRedirect(config.o9v_1, config.p9v_1);
  };
  protoOf(Plugin_2).e9e = function (block) {
    return this.q9v(block);
  };
  protoOf(Plugin_2).r9v = function (plugin_0, scope) {
    var tmp = plugin(scope, Plugin_getInstance_4());
    tmp.i9s(HttpRedirect$Plugin$install$slambda_0(plugin_0, scope, null));
  };
  protoOf(Plugin_2).f9e = function (plugin, scope) {
    return this.r9v(plugin instanceof HttpRedirect ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance_2;
  function Plugin_getInstance_2() {
    if (Plugin_instance_2 == null)
      new Plugin_2();
    return Plugin_instance_2;
  }
  function HttpRedirect(checkHttpMethod, allowHttpsDowngrade) {
    Plugin_getInstance_2();
    this.k9v_1 = checkHttpMethod;
    this.l9v_1 = allowHttpsDowngrade;
  }
  function isRedirect(_this__u8e3s4) {
    _init_properties_HttpRedirect_kt__ure7fo();
    var tmp0_subject = _this__u8e3s4.b86_1;
    return ((((tmp0_subject === Companion_getInstance_3().k84_1.b86_1 ? true : tmp0_subject === Companion_getInstance_3().l84_1.b86_1) ? true : tmp0_subject === Companion_getInstance_3().q84_1.b86_1) ? true : tmp0_subject === Companion_getInstance_3().r84_1.b86_1) ? true : tmp0_subject === Companion_getInstance_3().m84_1.b86_1) ? true : false;
  }
  var properties_initialized_HttpRedirect_kt_klj746;
  function _init_properties_HttpRedirect_kt__ure7fo() {
    if (!properties_initialized_HttpRedirect_kt_klj746) {
      properties_initialized_HttpRedirect_kt_klj746 = true;
      ALLOWED_FOR_REDIRECT = setOf_0([Companion_getInstance_2().h83_1, Companion_getInstance_2().m83_1]);
      LOGGER_4 = KtorSimpleLogger('io.ktor.client.plugins.HttpRedirect');
    }
  }
  function get_LOGGER_5() {
    _init_properties_HttpRequestLifecycle_kt__jgkmfx();
    return LOGGER_5;
  }
  var LOGGER_5;
  function HttpRequestLifecycle$Plugin$install$slambda($scope, resultContinuation) {
    this.a9w_1 = $scope;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRequestLifecycle$Plugin$install$slambda).t9b = function ($this$intercept, it, $completion) {
    var tmp = this.u9b($this$intercept, it, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(HttpRequestLifecycle$Plugin$install$slambda).oi = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.t9b(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpRequestLifecycle$Plugin$install$slambda).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 6;
            this.d9w_1 = SupervisorJob(this.b9w_1.i7w_1.d9d_1);
            attachToClientEngineJob(this.d9w_1, ensureNotNull(this.a9w_1.y9a_1.hc(Key_instance)));
            this.ac_1 = 1;
            continue $sm;
          case 1:
            this.bc_1 = 4;
            this.bc_1 = 3;
            this.b9w_1.i7w_1.d9d_1 = this.d9w_1;
            this.ac_1 = 2;
            suspendResult = this.b9w_1.n7v(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_0 = this;
            tmp_0.e9w_1 = Unit_instance;
            this.bc_1 = 6;
            this.ac_1 = 5;
            continue $sm;
          case 3:
            this.bc_1 = 4;
            var tmp_1 = this.dc_1;
            if (tmp_1 instanceof Error) {
              var cause = this.dc_1;
              var tmp_2 = this;
              this.d9w_1.bv(cause);
              throw cause;
            } else {
              throw this.dc_1;
            }

          case 4:
            this.bc_1 = 6;
            var t = this.dc_1;
            this.d9w_1.cv();
            throw t;
          case 5:
            this.bc_1 = 6;
            this.d9w_1.cv();
            return Unit_instance;
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
  protoOf(HttpRequestLifecycle$Plugin$install$slambda).u9b = function ($this$intercept, it, completion) {
    var i = new HttpRequestLifecycle$Plugin$install$slambda(this.a9w_1, completion);
    i.b9w_1 = $this$intercept;
    i.c9w_1 = it;
    return i;
  };
  function HttpRequestLifecycle$Plugin$install$slambda_0($scope, resultContinuation) {
    var i = new HttpRequestLifecycle$Plugin$install$slambda($scope, resultContinuation);
    var l = function ($this$intercept, it, $completion) {
      return i.t9b($this$intercept, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Plugin_3() {
    Plugin_instance_3 = this;
    this.f9w_1 = new AttributeKey('RequestLifecycle');
  }
  protoOf(Plugin_3).p2 = function () {
    return this.f9w_1;
  };
  protoOf(Plugin_3).f9k = function (block) {
    return new HttpRequestLifecycle();
  };
  protoOf(Plugin_3).e9e = function (block) {
    return this.f9k(block);
  };
  protoOf(Plugin_3).g9w = function (plugin, scope) {
    var tmp = Phases_getInstance().w9j_1;
    scope.z9a_1.m7w(tmp, HttpRequestLifecycle$Plugin$install$slambda_0(scope, null));
  };
  protoOf(Plugin_3).f9e = function (plugin, scope) {
    return this.g9w(plugin instanceof HttpRequestLifecycle ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance_3;
  function Plugin_getInstance_3() {
    if (Plugin_instance_3 == null)
      new Plugin_3();
    return Plugin_instance_3;
  }
  function HttpRequestLifecycle() {
    Plugin_getInstance_3();
  }
  function attachToClientEngineJob(requestJob, clientEngineJob) {
    _init_properties_HttpRequestLifecycle_kt__jgkmfx();
    var handler = clientEngineJob.xp(attachToClientEngineJob$lambda(requestJob));
    requestJob.xp(attachToClientEngineJob$lambda_0(handler));
  }
  function attachToClientEngineJob$lambda($requestJob) {
    return function (cause) {
      var tmp;
      if (!(cause == null)) {
        get_LOGGER_5().d7x('Cancelling request because engine Job failed with error: ' + cause);
        cancel_2($requestJob, 'Engine failed', cause);
        tmp = Unit_instance;
      } else {
        get_LOGGER_5().d7x('Cancelling request because engine Job completed');
        $requestJob.cv();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function attachToClientEngineJob$lambda_0($handler) {
    return function (it) {
      $handler.ss();
      return Unit_instance;
    };
  }
  var properties_initialized_HttpRequestLifecycle_kt_3hmcrf;
  function _init_properties_HttpRequestLifecycle_kt__jgkmfx() {
    if (!properties_initialized_HttpRequestLifecycle_kt_3hmcrf) {
      properties_initialized_HttpRequestLifecycle_kt_3hmcrf = true;
      LOGGER_5 = KtorSimpleLogger('io.ktor.client.plugins.HttpRequestLifecycle');
    }
  }
  function HttpSend$Plugin$install$slambda($plugin, $scope, resultContinuation) {
    this.p9w_1 = $plugin;
    this.q9w_1 = $scope;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpSend$Plugin$install$slambda).t9b = function ($this$intercept, content, $completion) {
    var tmp = this.u9b($this$intercept, content, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(HttpSend$Plugin$install$slambda).oi = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.t9b(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpSend$Plugin$install$slambda).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 3;
            var tmp_0 = this.s9w_1;
            if (!(tmp_0 instanceof OutgoingContent)) {
              var message = trimMargin('\n|Fail to prepare request body for sending. \n|The body type is: ' + getKClassFromExpression(this.s9w_1) + ', with Content-Type: ' + contentType(this.r9w_1.i7w_1) + '.\n|\n|If you expect serialized body, please check that you have installed the corresponding plugin(like `ContentNegotiation`) and set `Content-Type` header.');
              throw IllegalStateException_init_$Create$(toString(message));
            }

            var this_0 = this.r9w_1.i7w_1;
            var body = this.s9w_1;
            if (body == null) {
              this_0.c9d_1 = NullBody_instance;
              var tmp_1 = JsType_instance;
              var tmp_2 = getKClass(OutgoingContent);
              var tmp_3;
              try {
                tmp_3 = createKType(getKClass(OutgoingContent), arrayOf([]), false);
              } catch ($p) {
                var tmp_4;
                if ($p instanceof Error) {
                  var cause = $p;
                  tmp_4 = null;
                } else {
                  throw $p;
                }
                tmp_3 = tmp_4;
              }
              this_0.y9i(typeInfoImpl(tmp_1, tmp_2, tmp_3));
            } else {
              if (body instanceof OutgoingContent) {
                this_0.c9d_1 = body;
                this_0.y9i(null);
              } else {
                this_0.c9d_1 = body;
                var tmp_5 = JsType_instance;
                var tmp_6 = getKClass(OutgoingContent);
                var tmp_7;
                try {
                  tmp_7 = createKType(getKClass(OutgoingContent), arrayOf([]), false);
                } catch ($p) {
                  var tmp_8;
                  if ($p instanceof Error) {
                    var cause_0 = $p;
                    tmp_8 = null;
                  } else {
                    throw $p;
                  }
                  tmp_7 = tmp_8;
                }
                this_0.y9i(typeInfoImpl(tmp_5, tmp_6, tmp_7));
              }
            }

            this.t9w_1 = new DefaultSender(this.p9w_1.g9s_1, this.q9w_1);
            this.u9w_1 = this.t9w_1;
            var tmp0_iterator = downTo(get_lastIndex(this.p9w_1.h9s_1), 0).o();
            while (tmp0_iterator.d1()) {
              var element = tmp0_iterator.f1();
              var interceptor = this.p9w_1.h9s_1.n(element);
              this.u9w_1 = new InterceptedSender(interceptor, this.u9w_1);
            }

            this.ac_1 = 1;
            suspendResult = this.u9w_1.c9e(this.r9w_1.i7w_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.v9w_1 = suspendResult;
            this.ac_1 = 2;
            suspendResult = this.r9w_1.m7v(this.v9w_1, this);
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
  protoOf(HttpSend$Plugin$install$slambda).u9b = function ($this$intercept, content, completion) {
    var i = new HttpSend$Plugin$install$slambda(this.p9w_1, this.q9w_1, completion);
    i.r9w_1 = $this$intercept;
    i.s9w_1 = content;
    return i;
  };
  function HttpSend$Plugin$install$slambda_0($plugin, $scope, resultContinuation) {
    var i = new HttpSend$Plugin$install$slambda($plugin, $scope, resultContinuation);
    var l = function ($this$intercept, content, $completion) {
      return i.t9b($this$intercept, content, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $executeCOROUTINE$8(_this__u8e3s4, requestBuilder, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e9x_1 = _this__u8e3s4;
    this.f9x_1 = requestBuilder;
  }
  protoOf($executeCOROUTINE$8).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 2;
            var tmp0_safe_receiver = this.e9x_1.j9x_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              cancel(tmp0_safe_receiver);
            }

            if (this.e9x_1.i9x_1 >= this.e9x_1.g9x_1) {
              throw new SendCountExceedException('Max send count ' + this.e9x_1.g9x_1 + ' exceeded. Consider increasing the property ' + 'maxSendCount if more is required.');
            }

            var tmp1_this = this.e9x_1;
            tmp1_this.i9x_1 = tmp1_this.i9x_1 + 1 | 0;
            this.ac_1 = 1;
            suspendResult = this.e9x_1.h9x_1.b9b_1.h7w(this.f9x_1, this.f9x_1.c9d_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var sendResult = suspendResult;
            var tmp3_elvis_lhs = sendResult instanceof HttpClientCall ? sendResult : null;
            var tmp_0;
            if (tmp3_elvis_lhs == null) {
              var message = 'Failed to execute send pipeline. Expected [HttpClientCall], but received ' + toString(sendResult);
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              tmp_0 = tmp3_elvis_lhs;
            }

            var call = tmp_0;
            this.e9x_1.j9x_1 = call;
            return call;
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
  function Config_2() {
    this.k9x_1 = 20;
  }
  function Plugin_4() {
    Plugin_instance_4 = this;
    this.l9x_1 = new AttributeKey('HttpSend');
  }
  protoOf(Plugin_4).p2 = function () {
    return this.l9x_1;
  };
  protoOf(Plugin_4).m9x = function (block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new Config_2();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    var config = this_0;
    return new HttpSend(config.k9x_1);
  };
  protoOf(Plugin_4).e9e = function (block) {
    return this.m9x(block);
  };
  protoOf(Plugin_4).n9x = function (plugin, scope) {
    var tmp = Phases_getInstance().a9k_1;
    scope.z9a_1.m7w(tmp, HttpSend$Plugin$install$slambda_0(plugin, scope, null));
  };
  protoOf(Plugin_4).f9e = function (plugin, scope) {
    return this.n9x(plugin instanceof HttpSend ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance_4;
  function Plugin_getInstance_4() {
    if (Plugin_instance_4 == null)
      new Plugin_4();
    return Plugin_instance_4;
  }
  function InterceptedSender(interceptor, nextSender) {
    this.o9x_1 = interceptor;
    this.p9x_1 = nextSender;
  }
  protoOf(InterceptedSender).c9e = function (requestBuilder, $completion) {
    return this.o9x_1(this.p9x_1, requestBuilder, $completion);
  };
  function DefaultSender(maxSendCount, client) {
    this.g9x_1 = maxSendCount;
    this.h9x_1 = client;
    this.i9x_1 = 0;
    this.j9x_1 = null;
  }
  protoOf(DefaultSender).c9e = function (requestBuilder, $completion) {
    var tmp = new $executeCOROUTINE$8(this, requestBuilder, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  function HttpSend(maxSendCount) {
    Plugin_getInstance_4();
    maxSendCount = maxSendCount === VOID ? 20 : maxSendCount;
    this.g9s_1 = maxSendCount;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.h9s_1 = ArrayList_init_$Create$();
  }
  protoOf(HttpSend).i9s = function (block) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.h9s_1.a1(block);
  };
  function Sender() {
  }
  function SendCountExceedException(message) {
    IllegalStateException_init_$Init$_0(message, this);
    captureStack(this, SendCountExceedException);
  }
  function get_LOGGER_6() {
    _init_properties_HttpTimeout_kt__pucqrr();
    return LOGGER_6;
  }
  var LOGGER_6;
  function HttpTimeoutCapabilityConfiguration_init_$Init$(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, $this) {
    requestTimeoutMillis = requestTimeoutMillis === VOID ? null : requestTimeoutMillis;
    connectTimeoutMillis = connectTimeoutMillis === VOID ? null : connectTimeoutMillis;
    socketTimeoutMillis = socketTimeoutMillis === VOID ? null : socketTimeoutMillis;
    HttpTimeoutCapabilityConfiguration.call($this);
    $this.t9x(requestTimeoutMillis);
    $this.u9x(connectTimeoutMillis);
    $this.v9x(socketTimeoutMillis);
    return $this;
  }
  function HttpTimeoutCapabilityConfiguration_init_$Create$(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis) {
    return HttpTimeoutCapabilityConfiguration_init_$Init$(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, objectCreate(protoOf(HttpTimeoutCapabilityConfiguration)));
  }
  function checkTimeoutValue($this, value) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(value == null ? true : value.x9(new Long(0, 0)) > 0)) {
      // Inline function 'io.ktor.client.plugins.HttpTimeoutCapabilityConfiguration.checkTimeoutValue.<anonymous>' call
      var message = 'Only positive timeout values are allowed, for infinite timeout use HttpTimeout.INFINITE_TIMEOUT_MS';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return value;
  }
  function Companion_2() {
    Companion_instance_3 = this;
    this.w9x_1 = new AttributeKey('TimeoutConfiguration');
  }
  var Companion_instance_3;
  function Companion_getInstance_10() {
    if (Companion_instance_3 == null)
      new Companion_2();
    return Companion_instance_3;
  }
  function HttpTimeout$Plugin$install$slambda$slambda($requestTimeout, $request, $executionContext, resultContinuation) {
    this.f9y_1 = $requestTimeout;
    this.g9y_1 = $request;
    this.h9y_1 = $executionContext;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpTimeout$Plugin$install$slambda$slambda).j20 = function ($this$launch, $completion) {
    var tmp = this.k20($this$launch, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(HttpTimeout$Plugin$install$slambda$slambda).yc = function (p1, $completion) {
    return this.j20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HttpTimeout$Plugin$install$slambda$slambda).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 2;
            this.ac_1 = 1;
            suspendResult = delay(this.f9y_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var cause = HttpRequestTimeoutException_init_$Create$(this.g9y_1);
            get_LOGGER_6().d7x('Request timeout: ' + this.g9y_1.z9c_1);
            cancel_2(this.h9y_1, ensureNotNull(cause.message), cause);
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
  protoOf(HttpTimeout$Plugin$install$slambda$slambda).k20 = function ($this$launch, completion) {
    var i = new HttpTimeout$Plugin$install$slambda$slambda(this.f9y_1, this.g9y_1, this.h9y_1, completion);
    i.i9y_1 = $this$launch;
    return i;
  };
  function HttpTimeout$Plugin$install$slambda$slambda_0($requestTimeout, $request, $executionContext, resultContinuation) {
    var i = new HttpTimeout$Plugin$install$slambda$slambda($requestTimeout, $request, $executionContext, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.j20($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function HttpTimeout$Plugin$install$slambda$lambda($killer) {
    return function (it) {
      $killer.eq();
      return Unit_instance;
    };
  }
  function HttpTimeout$Plugin$install$slambda($plugin, $scope, resultContinuation) {
    this.r9y_1 = $plugin;
    this.s9y_1 = $scope;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpTimeout$Plugin$install$slambda).y9q = function ($this$intercept, request, $completion) {
    var tmp = this.z9q($this$intercept, request, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(HttpTimeout$Plugin$install$slambda).oi = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, Sender) : false) ? p1 : THROW_CCE();
    return this.y9q(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpTimeout$Plugin$install$slambda).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 4;
            this.v9y_1 = isWebsocket(this.u9y_1.z9c_1.h86_1);
            var tmp_0;
            if (this.v9y_1) {
              tmp_0 = true;
            } else {
              var tmp_1 = this.u9y_1.c9d_1;
              tmp_0 = tmp_1 instanceof ClientUpgradeContent;
            }

            if (tmp_0) {
              this.ac_1 = 3;
              suspendResult = this.t9y_1.c9e(this.u9y_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.ac_1 = 1;
              continue $sm;
            }

          case 1:
            this.w9y_1 = this.u9y_1.x9y(Plugin_getInstance_5());
            if (this.w9y_1 == null ? hasNotNullTimeouts(this.r9y_1) : false) {
              this.w9y_1 = HttpTimeoutCapabilityConfiguration_init_$Create$();
              this.u9y_1.y9y(Plugin_getInstance_5(), this.w9y_1);
            }

            var tmp0_safe_receiver = this.w9y_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              l$ret$1: do {
                var tmp0_elvis_lhs = tmp0_safe_receiver.z9y();
                tmp0_safe_receiver.u9x(tmp0_elvis_lhs == null ? this.r9y_1.b9z_1 : tmp0_elvis_lhs);
                var tmp1_elvis_lhs = tmp0_safe_receiver.d9z();
                tmp0_safe_receiver.v9x(tmp1_elvis_lhs == null ? this.r9y_1.c9z_1 : tmp1_elvis_lhs);
                var tmp2_elvis_lhs = tmp0_safe_receiver.e9z();
                tmp0_safe_receiver.t9x(tmp2_elvis_lhs == null ? this.r9y_1.a9z_1 : tmp2_elvis_lhs);
                var tmp3_elvis_lhs = tmp0_safe_receiver.e9z();
                var requestTimeout = tmp3_elvis_lhs == null ? this.r9y_1.a9z_1 : tmp3_elvis_lhs;
                if (requestTimeout == null ? true : equals(requestTimeout, new Long(-1, 2147483647))) {
                  break l$ret$1;
                }
                var executionContext = this.u9y_1.d9d_1;
                var killer = launch(this.s9y_1, VOID, VOID, HttpTimeout$Plugin$install$slambda$slambda_0(requestTimeout, this.u9y_1, executionContext, null));
                var tmp_2 = this.u9y_1.d9d_1;
                tmp_2.xp(HttpTimeout$Plugin$install$slambda$lambda(killer));
              }
               while (false);
            }

            this.ac_1 = 2;
            suspendResult = this.t9y_1.c9e(this.u9y_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            return suspendResult;
          case 4:
            throw this.dc_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.bc_1 === 4) {
          throw e;
        } else {
          this.ac_1 = this.bc_1;
          this.dc_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpTimeout$Plugin$install$slambda).z9q = function ($this$intercept, request, completion) {
    var i = new HttpTimeout$Plugin$install$slambda(this.r9y_1, this.s9y_1, completion);
    i.t9y_1 = $this$intercept;
    i.u9y_1 = request;
    return i;
  };
  function HttpTimeout$Plugin$install$slambda_0($plugin, $scope, resultContinuation) {
    var i = new HttpTimeout$Plugin$install$slambda($plugin, $scope, resultContinuation);
    var l = function ($this$intercept, request, $completion) {
      return i.y9q($this$intercept, request, $completion);
    };
    l.$arity = 2;
    return l;
  }
  protoOf(HttpTimeoutCapabilityConfiguration).t9x = function (value) {
    this.q9x_1 = checkTimeoutValue(this, value);
  };
  protoOf(HttpTimeoutCapabilityConfiguration).e9z = function () {
    return this.q9x_1;
  };
  protoOf(HttpTimeoutCapabilityConfiguration).u9x = function (value) {
    this.r9x_1 = checkTimeoutValue(this, value);
  };
  protoOf(HttpTimeoutCapabilityConfiguration).z9y = function () {
    return this.r9x_1;
  };
  protoOf(HttpTimeoutCapabilityConfiguration).v9x = function (value) {
    this.s9x_1 = checkTimeoutValue(this, value);
  };
  protoOf(HttpTimeoutCapabilityConfiguration).d9z = function () {
    return this.s9x_1;
  };
  protoOf(HttpTimeoutCapabilityConfiguration).e3 = function () {
    return new HttpTimeout(this.e9z(), this.z9y(), this.d9z());
  };
  protoOf(HttpTimeoutCapabilityConfiguration).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof HttpTimeoutCapabilityConfiguration))
      THROW_CCE();
    if (!equals(this.q9x_1, other.q9x_1))
      return false;
    if (!equals(this.r9x_1, other.r9x_1))
      return false;
    if (!equals(this.s9x_1, other.s9x_1))
      return false;
    return true;
  };
  protoOf(HttpTimeoutCapabilityConfiguration).hashCode = function () {
    var tmp0_safe_receiver = this.q9x_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(31, result);
    var tmp2_safe_receiver = this.r9x_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.hashCode();
    result = tmp + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp4_safe_receiver = this.s9x_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.hashCode();
    result = tmp_0 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    return result;
  };
  function HttpTimeoutCapabilityConfiguration() {
    Companion_getInstance_10();
    this.q9x_1 = new Long(0, 0);
    this.r9x_1 = new Long(0, 0);
    this.s9x_1 = new Long(0, 0);
  }
  function hasNotNullTimeouts($this) {
    return (!($this.a9z_1 == null) ? true : !($this.b9z_1 == null)) ? true : !($this.c9z_1 == null);
  }
  function Plugin_5() {
    Plugin_instance_5 = this;
    this.f9z_1 = new AttributeKey('TimeoutPlugin');
    this.g9z_1 = new Long(-1, 2147483647);
  }
  protoOf(Plugin_5).p2 = function () {
    return this.f9z_1;
  };
  protoOf(Plugin_5).h9z = function (block) {
    // Inline function 'kotlin.apply' call
    var this_0 = HttpTimeoutCapabilityConfiguration_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    return this_0.e3();
  };
  protoOf(Plugin_5).e9e = function (block) {
    return this.h9z(block);
  };
  protoOf(Plugin_5).i9z = function (plugin_0, scope) {
    var tmp = plugin(scope, Plugin_getInstance_4());
    tmp.i9s(HttpTimeout$Plugin$install$slambda_0(plugin_0, scope, null));
  };
  protoOf(Plugin_5).f9e = function (plugin, scope) {
    return this.i9z(plugin instanceof HttpTimeout ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance_5;
  function Plugin_getInstance_5() {
    if (Plugin_instance_5 == null)
      new Plugin_5();
    return Plugin_instance_5;
  }
  function HttpTimeout(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis) {
    Plugin_getInstance_5();
    this.a9z_1 = requestTimeoutMillis;
    this.b9z_1 = connectTimeoutMillis;
    this.c9z_1 = socketTimeoutMillis;
  }
  function HttpRequestTimeoutException_init_$Init$(request, $this) {
    var tmp = request.z9c_1.w87();
    var tmp0_safe_receiver = request.x9y(Plugin_getInstance_5());
    HttpRequestTimeoutException.call($this, tmp, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e9z());
    return $this;
  }
  function HttpRequestTimeoutException_init_$Create$(request) {
    var tmp = HttpRequestTimeoutException_init_$Init$(request, objectCreate(protoOf(HttpRequestTimeoutException)));
    captureStack(tmp, HttpRequestTimeoutException_init_$Create$);
    return tmp;
  }
  function HttpRequestTimeoutException(url, timeoutMillis) {
    IOException_init_$Init$('Request timeout has expired [url=' + url + ', request_timeout=' + toString(timeoutMillis == null ? 'unknown' : timeoutMillis) + ' ms]', this);
    captureStack(this, HttpRequestTimeoutException);
  }
  var properties_initialized_HttpTimeout_kt_9oyjbd;
  function _init_properties_HttpTimeout_kt__pucqrr() {
    if (!properties_initialized_HttpTimeout_kt_9oyjbd) {
      properties_initialized_HttpTimeout_kt_9oyjbd = true;
      LOGGER_6 = KtorSimpleLogger('io.ktor.client.plugins.HttpTimeout');
    }
  }
  function wrapWithContent(_this__u8e3s4, content) {
    return new DelegatedCall(_this__u8e3s4.v9b_1, content, _this__u8e3s4);
  }
  function DelegatedCall(client, content, originCall) {
    HttpClientCall.call(this, client);
    this.x9b_1 = new DelegatedRequest(this, originCall.j9f());
    this.y9b_1 = new DelegatedResponse(this, content, originCall.a9c());
  }
  function DelegatedRequest(call, origin) {
    this.j9z_1 = call;
    this.k9z_1 = origin;
  }
  protoOf(DelegatedRequest).h9g = function () {
    return this.j9z_1;
  };
  protoOf(DelegatedRequest).o9e = function () {
    return this.k9z_1.o9e();
  };
  protoOf(DelegatedRequest).vo = function () {
    return this.k9z_1.vo();
  };
  protoOf(DelegatedRequest).g83 = function () {
    return this.k9z_1.g83();
  };
  protoOf(DelegatedRequest).i9g = function () {
    return this.k9z_1.i9g();
  };
  protoOf(DelegatedRequest).l9f = function () {
    return this.k9z_1.l9f();
  };
  function DelegatedResponse(call, content, origin) {
    HttpResponse.call(this);
    this.l9z_1 = call;
    this.m9z_1 = content;
    this.n9z_1 = origin;
    this.o9z_1 = this.n9z_1.vo();
  }
  protoOf(DelegatedResponse).h9g = function () {
    return this.l9z_1;
  };
  protoOf(DelegatedResponse).b92 = function () {
    return this.m9z_1;
  };
  protoOf(DelegatedResponse).vo = function () {
    return this.o9z_1;
  };
  protoOf(DelegatedResponse).m9f = function () {
    return this.n9z_1.m9f();
  };
  protoOf(DelegatedResponse).s9g = function () {
    return this.n9z_1.s9g();
  };
  protoOf(DelegatedResponse).t9g = function () {
    return this.n9z_1.t9g();
  };
  protoOf(DelegatedResponse).u9g = function () {
    return this.n9z_1.u9g();
  };
  protoOf(DelegatedResponse).g83 = function () {
    return this.n9z_1.g83();
  };
  function WebSocketCapability() {
  }
  protoOf(WebSocketCapability).toString = function () {
    return 'WebSocketCapability';
  };
  var WebSocketCapability_instance;
  function WebSocketCapability_getInstance() {
    return WebSocketCapability_instance;
  }
  function WebSocketException_init_$Init$(message, $this) {
    WebSocketException.call($this, message, null);
    return $this;
  }
  function WebSocketException_init_$Create$(message) {
    var tmp = WebSocketException_init_$Init$(message, objectCreate(protoOf(WebSocketException)));
    captureStack(tmp, WebSocketException_init_$Create$);
    return tmp;
  }
  function WebSocketException(message, cause) {
    IllegalStateException_init_$Init$_1(message, cause, this);
    captureStack(this, WebSocketException);
  }
  function ClientUpgradeContent() {
  }
  function DefaultHttpRequest(call, data) {
    this.p9z_1 = call;
    this.q9z_1 = data.z9h_1;
    this.r9z_1 = data.y9h_1;
    this.s9z_1 = data.b9i_1;
    this.t9z_1 = data.a9i_1;
    this.u9z_1 = data.d9i_1;
  }
  protoOf(DefaultHttpRequest).h9g = function () {
    return this.p9z_1;
  };
  protoOf(DefaultHttpRequest).vo = function () {
    return this.h9g().vo();
  };
  protoOf(DefaultHttpRequest).i9g = function () {
    return this.q9z_1;
  };
  protoOf(DefaultHttpRequest).l9f = function () {
    return this.r9z_1;
  };
  protoOf(DefaultHttpRequest).g83 = function () {
    return this.t9z_1;
  };
  protoOf(DefaultHttpRequest).o9e = function () {
    return this.u9z_1;
  };
  function HttpRequest_0() {
  }
  function Companion_3() {
  }
  var Companion_instance_4;
  function Companion_getInstance_11() {
    return Companion_instance_4;
  }
  function HttpRequestBuilder$setCapability$lambda() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    return LinkedHashMap_init_$Create$();
  }
  function HttpRequestBuilder() {
    this.z9c_1 = new URLBuilder_0();
    this.a9d_1 = Companion_getInstance_2().h83_1;
    this.b9d_1 = new HeadersBuilder();
    this.c9d_1 = EmptyContent_getInstance();
    this.d9d_1 = SupervisorJob();
    this.e9d_1 = AttributesJsFn(true);
  }
  protoOf(HttpRequestBuilder).g83 = function () {
    return this.b9d_1;
  };
  protoOf(HttpRequestBuilder).y9i = function (value) {
    if (!(value == null)) {
      this.e9d_1.r7r(get_BodyTypeAttributeKey(), value);
    } else {
      this.e9d_1.s7r(get_BodyTypeAttributeKey());
    }
  };
  protoOf(HttpRequestBuilder).v9z = function () {
    return this.e9d_1.p7r(get_BodyTypeAttributeKey());
  };
  protoOf(HttpRequestBuilder).e3 = function () {
    var tmp = this.z9c_1.e3();
    var tmp_0 = this.a9d_1;
    var tmp_1 = this.b9d_1.e3();
    var tmp_2 = this.c9d_1;
    var tmp0_elvis_lhs = tmp_2 instanceof OutgoingContent ? tmp_2 : null;
    var tmp_3;
    if (tmp0_elvis_lhs == null) {
      var message = 'No request transformation found: ' + toString(this.c9d_1);
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_3 = tmp0_elvis_lhs;
    }
    return new HttpRequestData(tmp, tmp_0, tmp_1, tmp_3, this.d9d_1, this.e9d_1);
  };
  protoOf(HttpRequestBuilder).x9i = function (builder) {
    this.d9d_1 = builder.d9d_1;
    return this.w9z(builder);
  };
  protoOf(HttpRequestBuilder).w9z = function (builder) {
    this.a9d_1 = builder.a9d_1;
    this.c9d_1 = builder.c9d_1;
    this.y9i(builder.v9z());
    takeFrom(this.z9c_1, builder.z9c_1);
    this.z9c_1.o86_1 = this.z9c_1.o86_1;
    appendAll(this.b9d_1, builder.b9d_1);
    putAll(this.e9d_1, builder.e9d_1);
    return this;
  };
  protoOf(HttpRequestBuilder).y9y = function (key, capability) {
    var tmp = get_ENGINE_CAPABILITIES_KEY();
    var capabilities = this.e9d_1.t7r(tmp, HttpRequestBuilder$setCapability$lambda);
    // Inline function 'kotlin.collections.set' call
    capabilities.n2(key, capability);
  };
  protoOf(HttpRequestBuilder).x9y = function (key) {
    var tmp0_safe_receiver = this.e9d_1.p7r(get_ENGINE_CAPABILITIES_KEY());
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x2(key);
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function HttpRequestData(url, method, headers, body, executionContext, attributes) {
    this.y9h_1 = url;
    this.z9h_1 = method;
    this.a9i_1 = headers;
    this.b9i_1 = body;
    this.c9i_1 = executionContext;
    this.d9i_1 = attributes;
    var tmp = this;
    var tmp0_safe_receiver = this.d9i_1.p7r(get_ENGINE_CAPABILITIES_KEY());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k2();
    tmp.e9i_1 = tmp1_elvis_lhs == null ? emptySet() : tmp1_elvis_lhs;
  }
  protoOf(HttpRequestData).toString = function () {
    return 'HttpRequestData(url=' + this.y9h_1 + ', method=' + this.z9h_1 + ')';
  };
  function HttpResponseData(statusCode, requestTime, headers, version, body, callContext) {
    this.h9e_1 = statusCode;
    this.i9e_1 = requestTime;
    this.j9e_1 = headers;
    this.k9e_1 = version;
    this.l9e_1 = body;
    this.m9e_1 = callContext;
    this.n9e_1 = GMTDate();
  }
  protoOf(HttpResponseData).toString = function () {
    return 'HttpResponseData=(statusCode=' + this.h9e_1 + ')';
  };
  function url(_this__u8e3s4, urlString) {
    takeFrom_0(_this__u8e3s4.z9c_1, urlString);
  }
  function isUpgradeRequest(_this__u8e3s4) {
    var tmp = _this__u8e3s4.b9i_1;
    return tmp instanceof ClientUpgradeContent;
  }
  function Phases() {
    Phases_instance = this;
    this.w9j_1 = new PipelinePhase('Before');
    this.x9j_1 = new PipelinePhase('State');
    this.y9j_1 = new PipelinePhase('Transform');
    this.z9j_1 = new PipelinePhase('Render');
    this.a9k_1 = new PipelinePhase('Send');
  }
  var Phases_instance;
  function Phases_getInstance() {
    if (Phases_instance == null)
      new Phases();
    return Phases_instance;
  }
  function HttpRequestPipeline(developmentMode) {
    Phases_getInstance();
    developmentMode = developmentMode === VOID ? false : developmentMode;
    Pipeline.call(this, [Phases_getInstance().w9j_1, Phases_getInstance().x9j_1, Phases_getInstance().y9j_1, Phases_getInstance().z9j_1, Phases_getInstance().a9k_1]);
    this.ea0_1 = developmentMode;
  }
  protoOf(HttpRequestPipeline).g7w = function () {
    return this.ea0_1;
  };
  function Phases_0() {
    Phases_instance_0 = this;
    this.p9d_1 = new PipelinePhase('Before');
    this.q9d_1 = new PipelinePhase('State');
    this.r9d_1 = new PipelinePhase('Monitoring');
    this.s9d_1 = new PipelinePhase('Engine');
    this.t9d_1 = new PipelinePhase('Receive');
  }
  var Phases_instance_0;
  function Phases_getInstance_0() {
    if (Phases_instance_0 == null)
      new Phases_0();
    return Phases_instance_0;
  }
  function HttpSendPipeline(developmentMode) {
    Phases_getInstance_0();
    developmentMode = developmentMode === VOID ? false : developmentMode;
    Pipeline.call(this, [Phases_getInstance_0().p9d_1, Phases_getInstance_0().q9d_1, Phases_getInstance_0().r9d_1, Phases_getInstance_0().s9d_1, Phases_getInstance_0().t9d_1]);
    this.ma0_1 = developmentMode;
  }
  protoOf(HttpSendPipeline).g7w = function () {
    return this.ma0_1;
  };
  function get_BodyTypeAttributeKey() {
    _init_properties_RequestBody_kt__bo3lwf();
    return BodyTypeAttributeKey;
  }
  var BodyTypeAttributeKey;
  var properties_initialized_RequestBody_kt_agyv1b;
  function _init_properties_RequestBody_kt__bo3lwf() {
    if (!properties_initialized_RequestBody_kt_agyv1b) {
      properties_initialized_RequestBody_kt_agyv1b = true;
      BodyTypeAttributeKey = new AttributeKey('BodyTypeAttributeKey');
    }
  }
  function accept(_this__u8e3s4, contentType) {
    return _this__u8e3s4.g83().u7t(HttpHeaders_getInstance().d7z_1, contentType.toString());
  }
  function DefaultHttpResponse(call, responseData) {
    HttpResponse.call(this);
    this.na0_1 = call;
    this.oa0_1 = responseData.m9e_1;
    this.pa0_1 = responseData.h9e_1;
    this.qa0_1 = responseData.k9e_1;
    this.ra0_1 = responseData.i9e_1;
    this.sa0_1 = responseData.n9e_1;
    var tmp = this;
    var tmp_0 = responseData.l9e_1;
    var tmp0_elvis_lhs = isInterface(tmp_0, ByteReadChannel) ? tmp_0 : null;
    tmp.ta0_1 = tmp0_elvis_lhs == null ? Companion_getInstance().k7k() : tmp0_elvis_lhs;
    this.ua0_1 = responseData.j9e_1;
  }
  protoOf(DefaultHttpResponse).h9g = function () {
    return this.na0_1;
  };
  protoOf(DefaultHttpResponse).vo = function () {
    return this.oa0_1;
  };
  protoOf(DefaultHttpResponse).m9f = function () {
    return this.pa0_1;
  };
  protoOf(DefaultHttpResponse).s9g = function () {
    return this.qa0_1;
  };
  protoOf(DefaultHttpResponse).t9g = function () {
    return this.ra0_1;
  };
  protoOf(DefaultHttpResponse).u9g = function () {
    return this.sa0_1;
  };
  protoOf(DefaultHttpResponse).b92 = function () {
    return this.ta0_1;
  };
  protoOf(DefaultHttpResponse).g83 = function () {
    return this.ua0_1;
  };
  function HttpResponse() {
  }
  protoOf(HttpResponse).toString = function () {
    return 'HttpResponse[' + get_request(this).l9f() + ', ' + this.m9f() + ']';
  };
  function get_request(_this__u8e3s4) {
    return _this__u8e3s4.h9g().j9f();
  }
  function complete(_this__u8e3s4) {
    var tmp = ensureNotNull(_this__u8e3s4.vo().hc(Key_instance));
    var job = isInterface(tmp, CompletableJob) ? tmp : THROW_CCE();
    job.cv();
  }
  function bodyAsText(_this__u8e3s4, fallbackCharset, $completion) {
    fallbackCharset = fallbackCharset === VOID ? Charsets_getInstance().u7n_1 : fallbackCharset;
    var tmp = new $bodyAsTextCOROUTINE$13(_this__u8e3s4, fallbackCharset, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  }
  function $bodyAsTextCOROUTINE$13(_this__u8e3s4, fallbackCharset, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.da1_1 = _this__u8e3s4;
    this.ea1_1 = fallbackCharset;
  }
  protoOf($bodyAsTextCOROUTINE$13).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 2;
            var tmp_0 = this;
            var tmp0_elvis_lhs = charset_0(this.da1_1);
            tmp_0.fa1_1 = tmp0_elvis_lhs == null ? this.ea1_1 : tmp0_elvis_lhs;
            this.ga1_1 = this.fa1_1.x7n();
            var tmp_1 = this;
            tmp_1.ha1_1 = this.da1_1;
            this.ac_1 = 1;
            var tmp_2 = this.ha1_1.h9g();
            var tmp_3 = JsType_instance;
            var tmp_4 = getKClass(ByteReadPacket);
            var tmp_5;
            try {
              tmp_5 = createKType(getKClass(ByteReadPacket), arrayOf([]), false);
            } catch ($p) {
              var tmp_6;
              if ($p instanceof Error) {
                var cause = $p;
                tmp_6 = null;
              } else {
                throw $p;
              }
              tmp_5 = tmp_6;
            }

            suspendResult = tmp_2.k9f(typeInfoImpl(tmp_3, tmp_4, tmp_5), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var input = suspendResult instanceof ByteReadPacket ? suspendResult : THROW_CCE();
            return decode(this.ga1_1, input);
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
  function Phases_1() {
    Phases_instance_1 = this;
    this.x9d_1 = new PipelinePhase('Receive');
    this.y9d_1 = new PipelinePhase('Parse');
    this.z9d_1 = new PipelinePhase('Transform');
    this.a9e_1 = new PipelinePhase('State');
    this.b9e_1 = new PipelinePhase('After');
  }
  var Phases_instance_1;
  function Phases_getInstance_1() {
    if (Phases_instance_1 == null)
      new Phases_1();
    return Phases_instance_1;
  }
  function HttpResponsePipeline(developmentMode) {
    Phases_getInstance_1();
    developmentMode = developmentMode === VOID ? false : developmentMode;
    Pipeline.call(this, [Phases_getInstance_1().x9d_1, Phases_getInstance_1().y9d_1, Phases_getInstance_1().z9d_1, Phases_getInstance_1().a9e_1, Phases_getInstance_1().b9e_1]);
    this.pa1_1 = developmentMode;
  }
  protoOf(HttpResponsePipeline).g7w = function () {
    return this.pa1_1;
  };
  function Phases_2() {
    Phases_instance_2 = this;
    this.b9k_1 = new PipelinePhase('Before');
    this.c9k_1 = new PipelinePhase('State');
    this.d9k_1 = new PipelinePhase('After');
  }
  var Phases_instance_2;
  function Phases_getInstance_2() {
    if (Phases_instance_2 == null)
      new Phases_2();
    return Phases_instance_2;
  }
  function HttpReceivePipeline(developmentMode) {
    Phases_getInstance_2();
    developmentMode = developmentMode === VOID ? false : developmentMode;
    Pipeline.call(this, [Phases_getInstance_2().b9k_1, Phases_getInstance_2().c9k_1, Phases_getInstance_2().d9k_1]);
    this.xa1_1 = developmentMode;
  }
  protoOf(HttpReceivePipeline).g7w = function () {
    return this.xa1_1;
  };
  function HttpResponseContainer(expectedType, response) {
    this.h9f_1 = expectedType;
    this.i9f_1 = response;
  }
  protoOf(HttpResponseContainer).se = function () {
    return this.h9f_1;
  };
  protoOf(HttpResponseContainer).te = function () {
    return this.i9f_1;
  };
  protoOf(HttpResponseContainer).toString = function () {
    return 'HttpResponseContainer(expectedType=' + this.h9f_1 + ', response=' + toString(this.i9f_1) + ')';
  };
  protoOf(HttpResponseContainer).hashCode = function () {
    var result = this.h9f_1.hashCode();
    result = imul(result, 31) + hashCode(this.i9f_1) | 0;
    return result;
  };
  protoOf(HttpResponseContainer).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpResponseContainer))
      return false;
    var tmp0_other_with_cast = other instanceof HttpResponseContainer ? other : THROW_CCE();
    if (!this.h9f_1.equals(tmp0_other_with_cast.h9f_1))
      return false;
    if (!equals(this.i9f_1, tmp0_other_with_cast.i9f_1))
      return false;
    return true;
  };
  function checkCapabilities($this) {
    var tmp0_safe_receiver = $this.ya1_1.e9d_1.p7r(get_ENGINE_CAPABILITIES_KEY());
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k2();
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.filterIsInstance' call
      // Inline function 'kotlin.collections.filterIsInstanceTo' call
      var destination = ArrayList_init_$Create$();
      var tmp0_iterator = tmp1_safe_receiver.o();
      while (tmp0_iterator.d1()) {
        var element = tmp0_iterator.f1();
        if (!(element == null) ? isInterface(element, HttpClientPlugin) : false) {
          destination.a1(element);
        }
      }
      tmp = destination;
    }
    var tmp2_safe_receiver = tmp;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = tmp2_safe_receiver.o();
      while (tmp0_iterator_0.d1()) {
        var element_0 = tmp0_iterator_0.f1();
        // Inline function 'io.ktor.client.statement.HttpStatement.checkCapabilities.<anonymous>' call
        $l$block: {
          // Inline function 'kotlin.requireNotNull' call
          // Inline function 'kotlin.contracts.contract' call
          if (pluginOrNull($this.za1_1, element_0) == null) {
            // Inline function 'io.ktor.client.statement.HttpStatement.checkCapabilities.<anonymous>.<anonymous>' call
            var message = 'Consider installing ' + element_0 + ' plugin because the request requires it to be installed';
            throw IllegalArgumentException_init_$Create$(toString(message));
          } else {
            break $l$block;
          }
        }
      }
    }
  }
  function HttpStatement$execute$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpStatement$execute$slambda).ja2 = function (it, $completion) {
    var tmp = this.x9m(it, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(HttpStatement$execute$slambda).yc = function (p1, $completion) {
    return this.ja2(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HttpStatement$execute$slambda).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 2;
            this.ac_1 = 1;
            suspendResult = save(this.ia2_1.h9g(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var savedCall = suspendResult;
            return savedCall.a9c();
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
  protoOf(HttpStatement$execute$slambda).x9m = function (it, completion) {
    var i = new HttpStatement$execute$slambda(completion);
    i.ia2_1 = it;
    return i;
  };
  function HttpStatement$execute$slambda_0(resultContinuation) {
    var i = new HttpStatement$execute$slambda(resultContinuation);
    var l = function (it, $completion) {
      return i.ja2(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $executeCOROUTINE$14(_this__u8e3s4, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.sa2_1 = _this__u8e3s4;
    this.ta2_1 = block;
  }
  protoOf($executeCOROUTINE$14).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 13;
            this.ac_1 = 1;
            continue $sm;
          case 1:
            this.bc_1 = 12;
            this.ac_1 = 2;
            suspendResult = this.sa2_1.za2(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.va2_1 = suspendResult;
            this.ac_1 = 3;
            continue $sm;
          case 3:
            this.ac_1 = 4;
            continue $sm;
          case 4:
            this.bc_1 = 10;
            this.ac_1 = 5;
            suspendResult = this.ta2_1(this.va2_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.wa2_1 = suspendResult;
            this.ac_1 = 6;
            var tmp_0 = this;
            continue $sm;
          case 6:
            this.xa2_1 = this.wa2_1;
            this.bc_1 = 12;
            this.ac_1 = 7;
            suspendResult = this.sa2_1.aa3(this.va2_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            return this.xa2_1;
          case 8:
            this.bc_1 = 12;
            this.ac_1 = 9;
            suspendResult = this.sa2_1.aa3(this.va2_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            var tmp_1 = this;
            tmp_1.ua2_1 = Unit_instance;
            this.bc_1 = 13;
            this.ac_1 = 15;
            continue $sm;
          case 10:
            this.bc_1 = 12;
            this.ya2_1 = this.dc_1;
            this.ac_1 = 11;
            suspendResult = this.sa2_1.aa3(this.va2_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 11:
            throw this.ya2_1;
          case 12:
            this.bc_1 = 13;
            var tmp_2 = this.dc_1;
            if (tmp_2 instanceof CancellationException) {
              var cause = this.dc_1;
              throw unwrapCancellationException(cause);
            } else {
              throw this.dc_1;
            }

          case 13:
            throw this.dc_1;
          case 14:
            this.bc_1 = 13;
            if (false) {
              this.ac_1 = 1;
              continue $sm;
            }

            this.ac_1 = 15;
            continue $sm;
          case 15:
            return this.ua2_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.bc_1 === 13) {
          throw e;
        } else {
          this.ac_1 = this.bc_1;
          this.dc_1 = e;
        }
      }
     while (true);
  };
  function $executeUnsafeCOROUTINE$15(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ja3_1 = _this__u8e3s4;
  }
  protoOf($executeUnsafeCOROUTINE$15).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 4;
            this.ac_1 = 1;
            continue $sm;
          case 1:
            this.bc_1 = 3;
            this.la3_1 = (new HttpRequestBuilder()).x9i(this.ja3_1.ya1_1);
            this.ac_1 = 2;
            suspendResult = this.ja3_1.za1_1.c9e(this.la3_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var call = suspendResult;
            var tmp_0 = this;
            return call.a9c();
          case 3:
            this.bc_1 = 4;
            var tmp_1 = this.dc_1;
            if (tmp_1 instanceof CancellationException) {
              var cause = this.dc_1;
              throw unwrapCancellationException(cause);
            } else {
              throw this.dc_1;
            }

          case 4:
            throw this.dc_1;
          case 5:
            this.bc_1 = 4;
            if (false) {
              this.ac_1 = 1;
              continue $sm;
            }

            this.ac_1 = 6;
            continue $sm;
          case 6:
            return this.ka3_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.bc_1 === 4) {
          throw e;
        } else {
          this.ac_1 = this.bc_1;
          this.dc_1 = e;
        }
      }
     while (true);
  };
  function $cleanupCOROUTINE$16(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ua3_1 = _this__u8e3s4;
    this.va3_1 = _this__u8e3s4_0;
  }
  protoOf($cleanupCOROUTINE$16).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 4;
            var tmp_0 = this;
            var tmp_1 = ensureNotNull(this.va3_1.vo().hc(Key_instance));
            tmp_0.wa3_1 = isInterface(tmp_1, CompletableJob) ? tmp_1 : THROW_CCE();
            var tmp_2 = this;
            tmp_2.xa3_1 = this.wa3_1;
            var tmp_3 = this;
            tmp_3.ya3_1 = this.xa3_1;
            this.ya3_1.cv();
            this.bc_1 = 1;
            cancel_1(this.va3_1.b92());
            this.bc_1 = 4;
            this.ac_1 = 2;
            continue $sm;
          case 1:
            this.bc_1 = 4;
            var tmp_4 = this.dc_1;
            if (tmp_4 instanceof Error) {
              this.za3_1 = this.dc_1;
              this.ac_1 = 2;
              continue $sm;
            } else {
              throw this.dc_1;
            }

          case 2:
            this.bc_1 = 4;
            this.ac_1 = 3;
            suspendResult = this.ya3_1.ev(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.dc_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.bc_1 === 4) {
          throw e;
        } else {
          this.ac_1 = this.bc_1;
          this.dc_1 = e;
        }
      }
     while (true);
  };
  function HttpStatement(builder, client) {
    this.ya1_1 = builder;
    this.za1_1 = client;
    checkCapabilities(this);
  }
  protoOf(HttpStatement).aa4 = function (block, $completion) {
    var tmp = new $executeCOROUTINE$14(this, block, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(HttpStatement).ba4 = function ($completion) {
    return this.aa4(HttpStatement$execute$slambda_0(null), $completion);
  };
  protoOf(HttpStatement).za2 = function ($completion) {
    var tmp = new $executeUnsafeCOROUTINE$15(this, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(HttpStatement).aa3 = function (_this__u8e3s4, $completion) {
    var tmp = new $cleanupCOROUTINE$16(this, _this__u8e3s4, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(HttpStatement).toString = function () {
    return 'HttpStatement[' + this.ya1_1.z9c_1 + ']';
  };
  function observable(_this__u8e3s4, context, contentLength, listener) {
    var tmp = GlobalScope_instance;
    return writer(tmp, context, true, observable$slambda_0(contentLength, _this__u8e3s4, listener, null)).b12();
  }
  function observable$slambda($contentLength, $this_observable, $listener, resultContinuation) {
    this.ka4_1 = $contentLength;
    this.la4_1 = $this_observable;
    this.ma4_1 = $listener;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(observable$slambda).f9h = function ($this$writer, $completion) {
    var tmp = this.g9h($this$writer, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(observable$slambda).yc = function (p1, $completion) {
    return this.f9h((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(observable$slambda).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 15;
            this.ac_1 = 1;
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.pa4_1 = get_ByteArrayPool();
            this.qa4_1 = this.pa4_1.h7m();
            this.ac_1 = 2;
            continue $sm;
          case 2:
            this.ac_1 = 3;
            continue $sm;
          case 3:
            this.bc_1 = 14;
            var tmp_1 = this;
            tmp_1.sa4_1 = this.qa4_1;
            var tmp_2 = this;
            var tmp0_elvis_lhs = this.ka4_1;
            tmp_2.ta4_1 = tmp0_elvis_lhs == null ? new Long(-1, -1) : tmp0_elvis_lhs;
            this.ua4_1 = new Long(0, 0);
            this.ac_1 = 4;
            continue $sm;
          case 4:
            if (!!this.la4_1.e7e()) {
              this.ac_1 = 8;
              continue $sm;
            }

            this.ac_1 = 5;
            suspendResult = readAvailable(this.la4_1, this.sa4_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.va4_1 = suspendResult;
            this.ac_1 = 6;
            suspendResult = this.na4_1.b12().g7j(this.sa4_1, 0, this.va4_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var tmp_3 = this;
            var this_0 = this.ua4_1;
            var other = this.va4_1;
            tmp_3.ua4_1 = this_0.eb(toLong(other));
            this.ac_1 = 7;
            suspendResult = this.ma4_1(this.ua4_1, this.ta4_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            this.ac_1 = 4;
            continue $sm;
          case 8:
            this.wa4_1 = this.la4_1.o7d();
            this.na4_1.b12().n16(this.wa4_1);
            if (this.wa4_1 == null ? this.ua4_1.equals(new Long(0, 0)) : false) {
              this.ac_1 = 9;
              suspendResult = this.ma4_1(this.ua4_1, this.ta4_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.ac_1 = 10;
              continue $sm;
            }

          case 9:
            this.ac_1 = 10;
            continue $sm;
          case 10:
            this.ra4_1 = Unit_instance;
            this.bc_1 = 15;
            this.ac_1 = 11;
            var tmp_4 = this;
            continue $sm;
          case 11:
            this.bc_1 = 15;
            var tmp_5 = this;
            this.pa4_1.i7m(this.qa4_1);
            tmp_5.oa4_1 = Unit_instance;
            this.ac_1 = 13;
            continue $sm;
          case 12:
            this.bc_1 = 15;
            this.pa4_1.i7m(this.qa4_1);
            if (false) {
              this.ac_1 = 1;
              continue $sm;
            }

            this.ac_1 = 13;
            continue $sm;
          case 13:
            return Unit_instance;
          case 14:
            this.bc_1 = 15;
            var t = this.dc_1;
            this.pa4_1.i7m(this.qa4_1);
            throw t;
          case 15:
            throw this.dc_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.bc_1 === 15) {
          throw e;
        } else {
          this.ac_1 = this.bc_1;
          this.dc_1 = e;
        }
      }
     while (true);
  };
  protoOf(observable$slambda).g9h = function ($this$writer, completion) {
    var i = new observable$slambda(this.ka4_1, this.la4_1, this.ma4_1, completion);
    i.na4_1 = $this$writer;
    return i;
  };
  function observable$slambda_0($contentLength, $this_observable, $listener, resultContinuation) {
    var i = new observable$slambda($contentLength, $this_observable, $listener, resultContinuation);
    var l = function ($this$writer, $completion) {
      return i.f9h($this$writer, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function get_HttpRequestCreated() {
    _init_properties_ClientEvents_kt__xuvbz8();
    return HttpRequestCreated;
  }
  var HttpRequestCreated;
  function get_HttpRequestIsReadyForSending() {
    _init_properties_ClientEvents_kt__xuvbz8();
    return HttpRequestIsReadyForSending;
  }
  var HttpRequestIsReadyForSending;
  function get_HttpResponseReceived() {
    _init_properties_ClientEvents_kt__xuvbz8();
    return HttpResponseReceived;
  }
  var HttpResponseReceived;
  function get_HttpResponseReceiveFailed() {
    _init_properties_ClientEvents_kt__xuvbz8();
    return HttpResponseReceiveFailed;
  }
  var HttpResponseReceiveFailed;
  function get_HttpResponseCancelled() {
    _init_properties_ClientEvents_kt__xuvbz8();
    return HttpResponseCancelled;
  }
  var HttpResponseCancelled;
  function HttpResponseReceiveFail(response, cause) {
    this.xa4_1 = response;
    this.ya4_1 = cause;
  }
  var properties_initialized_ClientEvents_kt_rdee4m;
  function _init_properties_ClientEvents_kt__xuvbz8() {
    if (!properties_initialized_ClientEvents_kt_rdee4m) {
      properties_initialized_ClientEvents_kt_rdee4m = true;
      HttpRequestCreated = new EventDefinition();
      HttpRequestIsReadyForSending = new EventDefinition();
      HttpResponseReceived = new EventDefinition();
      HttpResponseReceiveFailed = new EventDefinition();
      HttpResponseCancelled = new EventDefinition();
    }
  }
  function EmptyContent() {
    EmptyContent_instance = this;
    NoContent.call(this);
    this.aa5_1 = new Long(0, 0);
  }
  protoOf(EmptyContent).l88 = function () {
    return this.aa5_1;
  };
  protoOf(EmptyContent).toString = function () {
    return 'EmptyContent';
  };
  var EmptyContent_instance;
  function EmptyContent_getInstance() {
    if (EmptyContent_instance == null)
      new EmptyContent();
    return EmptyContent_instance;
  }
  function buildHeaders(block) {
    var tmp;
    if (block === VOID) {
      tmp = buildHeaders$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    // Inline function 'kotlin.apply' call
    var this_0 = new HeadersBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    return this_0.e3();
  }
  function buildHeaders$lambda($this$null) {
    return Unit_instance;
  }
  function HttpClient_1(block) {
    var tmp;
    if (block === VOID) {
      tmp = HttpClient$lambda_3;
    } else {
      tmp = block;
    }
    block = tmp;
    return HttpClient_0(JsClient(), block);
  }
  function HttpClient$lambda_3($this$null) {
    return Unit_instance;
  }
  function ioDispatcher() {
    return Dispatchers_getInstance().s10_1;
  }
  function JsClient() {
    return Js_instance;
  }
  function Js() {
  }
  protoOf(Js).ba5 = function (block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new HttpClientEngineConfig();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    return new JsClientEngine(this_0);
  };
  protoOf(Js).d9e = function (block) {
    return this.ba5(block);
  };
  var Js_instance;
  function Js_getInstance() {
    return Js_instance;
  }
  function createWebSocket($this, urlString_capturingHack, headers) {
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_0 = headers.k7t();
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = this_0.o();
    while (tmp0_iterator.d1()) {
      var element = tmp0_iterator.f1();
      // Inline function 'io.ktor.client.engine.js.JsClientEngine.createWebSocket.<anonymous>' call
      if (equals_0(element, 'sec-websocket-protocol', true)) {
        destination.a1(element);
      }
    }
    var protocolHeaderNames = destination;
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.collections.mapNotNull' call
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var destination_0 = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = protocolHeaderNames.o();
    while (tmp0_iterator_0.d1()) {
      var element_0 = tmp0_iterator_0.f1();
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      // Inline function 'io.ktor.client.engine.js.JsClientEngine.createWebSocket.<anonymous>' call
      var tmp0_safe_receiver = headers.j7t(element_0);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        destination_0.a1(tmp0_safe_receiver);
      }
    }
    var this_1 = flatten(destination_0);
    var protocols = copyToArray(this_1);
    var tmp;
    if (get_platform(PlatformUtils_getInstance()).t9_1 === 2) {
      tmp = new WebSocket(urlString_capturingHack, protocols);
    } else {
      var ws_capturingHack = eval('require')('ws');
      var headers_capturingHack = new JsClientEngine$createWebSocket$headers_capturingHack$1();
      headers.m7t(JsClientEngine$createWebSocket$lambda(headers_capturingHack));
      tmp = new ws_capturingHack(urlString_capturingHack, protocols, {headers: headers_capturingHack});
    }
    return tmp;
  }
  function executeWebSocketRequest($this, request, callContext, $completion) {
    var tmp = new $executeWebSocketRequestCOROUTINE$18($this, request, callContext, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  }
  function JsClientEngine$createWebSocket$headers_capturingHack$1() {
  }
  function JsClientEngine$createWebSocket$lambda($headers_capturingHack) {
    return function (name, values) {
      $headers_capturingHack[name] = joinToString(values, ',');
      return Unit_instance;
    };
  }
  function $executeCOROUTINE$17(_this__u8e3s4, data, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ya5_1 = _this__u8e3s4;
    this.za5_1 = data;
  }
  protoOf($executeCOROUTINE$17).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 6;
            this.ac_1 = 1;
            suspendResult = callContext(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.aa6_1 = suspendResult;
            this.ba6_1 = this.za5_1.d9i_1.o7r(get_CLIENT_CONFIG());
            if (isUpgradeRequest(this.za5_1)) {
              this.ac_1 = 5;
              suspendResult = executeWebSocketRequest(this.ya5_1, this.za5_1, this.aa6_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.ac_1 = 2;
              continue $sm;
            }

          case 2:
            this.ca6_1 = GMTDate();
            this.ac_1 = 3;
            suspendResult = toRaw(this.za5_1, this.ba6_1, this.aa6_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.da6_1 = suspendResult;
            this.ac_1 = 4;
            suspendResult = commonFetch(this.za5_1.y9h_1.toString(), this.da6_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var rawResponse = suspendResult;
            var status = new HttpStatusCode(rawResponse.status, rawResponse.statusText);
            var headers = mapToKtor(rawResponse.headers);
            var version = Companion_getInstance_4().r83_1;
            var body = readBody(CoroutineScope_0(this.aa6_1), rawResponse);
            return new HttpResponseData(status, this.ca6_1, headers, version, body, this.aa6_1);
          case 5:
            return suspendResult;
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
  function $executeWebSocketRequestCOROUTINE$18(_this__u8e3s4, request, callContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ka5_1 = _this__u8e3s4;
    this.la5_1 = request;
    this.ma5_1 = callContext;
  }
  protoOf($executeWebSocketRequestCOROUTINE$18).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 4;
            this.na5_1 = GMTDate();
            this.oa5_1 = this.la5_1.y9h_1.toString();
            this.pa5_1 = createWebSocket(this.ka5_1, this.oa5_1, this.la5_1.a9i_1);
            this.bc_1 = 2;
            this.ac_1 = 1;
            suspendResult = awaitConnection(this.pa5_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.bc_1 = 4;
            this.ac_1 = 3;
            continue $sm;
          case 2:
            this.bc_1 = 4;
            var tmp_0 = this.dc_1;
            if (tmp_0 instanceof Error) {
              var cause = this.dc_1;
              cancel_3(this.ma5_1, CancellationException_init_$Create$_0('Failed to connect to ' + this.oa5_1, cause));
              throw cause;
            } else {
              throw this.dc_1;
            }

          case 3:
            this.bc_1 = 4;
            var session = new JsWebSocketSession(this.ma5_1, this.pa5_1);
            return new HttpResponseData(Companion_getInstance_3().z83_1, this.na5_1, Companion_getInstance_5().a7z_1, Companion_getInstance_4().r83_1, session, this.ma5_1);
          case 4:
            throw this.dc_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.bc_1 === 4) {
          throw e;
        } else {
          this.ac_1 = this.bc_1;
          this.dc_1 = e;
        }
      }
     while (true);
  };
  function JsClientEngine(config) {
    HttpClientEngineBase.call(this, 'ktor-js');
    this.ia6_1 = config;
    this.ja6_1 = setOf_0([Plugin_getInstance_5(), WebSocketCapability_instance]);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.ia6_1.u9j_1 == null)) {
      // Inline function 'io.ktor.client.engine.js.JsClientEngine.<anonymous>' call
      var message = 'Proxy unsupported in Js engine.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  protoOf(JsClientEngine).n9d = function () {
    return this.ia6_1;
  };
  protoOf(JsClientEngine).f9i = function () {
    return this.ja6_1;
  };
  protoOf(JsClientEngine).l9j = function (data, $completion) {
    var tmp = new $executeCOROUTINE$17(this, data, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  function mapToKtor(_this__u8e3s4) {
    return buildHeaders(mapToKtor$lambda(_this__u8e3s4));
  }
  function awaitConnection(_this__u8e3s4, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.zt();
    $l$block: {
      // Inline function 'io.ktor.client.engine.js.awaitConnection.<anonymous>' call
      if (cancellable.bs()) {
        break $l$block;
      }
      var eventListener = awaitConnection$lambda(cancellable, _this__u8e3s4);
      _this__u8e3s4.addEventListener('open', eventListener);
      _this__u8e3s4.addEventListener('error', eventListener);
      cancellable.gs(awaitConnection$lambda_0(_this__u8e3s4, eventListener));
    }
    return cancellable.yq();
  }
  function asString(_this__u8e3s4) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.client.engine.js.asString.<anonymous>' call
    var tmp = JSON;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = ['message', 'target', 'type', 'isTrusted'];
    this_0.x5(tmp.stringify(_this__u8e3s4, tmp$ret$2));
    return this_0.toString();
  }
  function JsError(origin) {
    extendThrowable(this, 'Error from javascript[' + origin + '].');
    captureStack(this, JsError);
    this.ka6_1 = origin;
  }
  function mapToKtor$lambda$lambda($this_buildHeaders) {
    return function (value, key) {
      $this_buildHeaders.u7t(key, value);
      return Unit_instance;
    };
  }
  function mapToKtor$lambda($this_mapToKtor) {
    return function ($this$buildHeaders) {
      // Inline function 'kotlin.js.asDynamic' call
      $this_mapToKtor.forEach(mapToKtor$lambda$lambda($this$buildHeaders));
      return Unit_instance;
    };
  }
  function awaitConnection$lambda($continuation, $this_awaitConnection) {
    return function (event) {
      var tmp0_subject = event.type;
      var tmp;
      if (tmp0_subject === 'open') {
        // Inline function 'kotlin.coroutines.resume' call
        var this_0 = $continuation;
        // Inline function 'kotlin.Companion.success' call
        var value = $this_awaitConnection;
        var tmp$ret$0 = _Result___init__impl__xyqfz8(value);
        this_0.t6(tmp$ret$0);
        tmp = Unit_instance;
      } else if (tmp0_subject === 'error') {
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var this_1 = $continuation;
        // Inline function 'kotlin.Companion.failure' call
        var exception = WebSocketException_init_$Create$(asString(event));
        var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(exception));
        this_1.t6(tmp$ret$2);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function awaitConnection$lambda_0($this_awaitConnection, $eventListener) {
    return function (it) {
      $this_awaitConnection.removeEventListener('open', $eventListener);
      $this_awaitConnection.removeEventListener('error', $eventListener);
      var tmp;
      if (!(it == null)) {
        $this_awaitConnection.close();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function toRaw(_this__u8e3s4, clientConfig, callContext, $completion) {
    var tmp = new $toRawCOROUTINE$19(_this__u8e3s4, clientConfig, callContext, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  }
  function buildObject(block) {
    // Inline function 'kotlin.apply' call
    var tmp = {};
    var this_0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    return this_0;
  }
  function toRaw$lambda($jsHeaders) {
    return function (key, value) {
      $jsHeaders[key] = value;
      return Unit_instance;
    };
  }
  function toRaw$slambda($content, resultContinuation) {
    this.ha7_1 = $content;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(toRaw$slambda).f9h = function ($this$writer, $completion) {
    var tmp = this.g9h($this$writer, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(toRaw$slambda).yc = function (p1, $completion) {
    return this.f9h((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(toRaw$slambda).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 2;
            this.ac_1 = 1;
            suspendResult = this.ha7_1.r88(this.ia7_1.b12(), this);
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
  protoOf(toRaw$slambda).g9h = function ($this$writer, completion) {
    var i = new toRaw$slambda(this.ha7_1, completion);
    i.ia7_1 = $this$writer;
    return i;
  };
  function toRaw$slambda_0($content, resultContinuation) {
    var i = new toRaw$slambda($content, resultContinuation);
    var l = function ($this$writer, $completion) {
      return i.f9h($this$writer, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function toRaw$lambda_0($this_toRaw, $jsHeaders, $clientConfig, $bodyBytes) {
    return function ($this$buildObject) {
      $this$buildObject.method = $this_toRaw.z9h_1.p83_1;
      $this$buildObject.headers = $jsHeaders;
      var tmp;
      if ($clientConfig.j9d_1) {
        // Inline function 'org.w3c.fetch.FOLLOW' call
        null;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = 'follow';
      } else {
        // Inline function 'org.w3c.fetch.MANUAL' call
        null;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = 'manual';
      }
      $this$buildObject.redirect = tmp;
      var tmp0_safe_receiver = $bodyBytes;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        $this$buildObject.body = new Uint8Array(toTypedArray(tmp0_safe_receiver));
      }
      return Unit_instance;
    };
  }
  function $toRawCOROUTINE$19(_this__u8e3s4, clientConfig, callContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ta6_1 = _this__u8e3s4;
    this.ua6_1 = clientConfig;
    this.va6_1 = callContext;
  }
  protoOf($toRawCOROUTINE$19).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 4;
            this.wa6_1 = {};
            mergeHeaders(this.ta6_1.a9i_1, this.ta6_1.b9i_1, toRaw$lambda(this.wa6_1));
            this.xa6_1 = this.ta6_1.b9i_1;
            var tmp_0 = this.xa6_1;
            if (tmp_0 instanceof ByteArrayContent) {
              this.ya6_1 = this.xa6_1.m88();
              this.ac_1 = 3;
              continue $sm;
            } else {
              var tmp_1 = this.xa6_1;
              if (tmp_1 instanceof ReadChannelContent) {
                this.ac_1 = 2;
                suspendResult = this.xa6_1.p88().i7j(VOID, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                var tmp_2 = this.xa6_1;
                if (tmp_2 instanceof WriteChannelContent) {
                  this.ac_1 = 1;
                  var tmp_3 = GlobalScope_instance;
                  suspendResult = writer(tmp_3, this.va6_1, VOID, toRaw$slambda_0(this.xa6_1, null)).b12().i7j(VOID, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.ya6_1 = null;
                  this.ac_1 = 3;
                  continue $sm;
                }
              }
            }

          case 1:
            var ARGUMENT = suspendResult;
            this.ya6_1 = readBytes(ARGUMENT);
            this.ac_1 = 3;
            continue $sm;
          case 2:
            var ARGUMENT_0 = suspendResult;
            this.ya6_1 = readBytes(ARGUMENT_0);
            this.ac_1 = 3;
            continue $sm;
          case 3:
            var bodyBytes = this.ya6_1;
            return buildObject(toRaw$lambda_0(this.ta6_1, this.wa6_1, this.ua6_1, bodyBytes));
          case 4:
            throw this.dc_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.bc_1 === 4) {
          throw e;
        } else {
          this.ac_1 = this.bc_1;
          this.dc_1 = e;
        }
      }
     while (true);
  };
  function asByteArray(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    return new Int8Array(_this__u8e3s4.buffer, _this__u8e3s4.byteOffset, _this__u8e3s4.length);
  }
  function readBodyBrowser(_this__u8e3s4, response) {
    var tmp0_elvis_lhs = response.body;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Companion_getInstance().k7k();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var stream = tmp;
    return channelFromStream(_this__u8e3s4, stream);
  }
  function channelFromStream(_this__u8e3s4, stream) {
    return writer(_this__u8e3s4, VOID, VOID, channelFromStream$slambda_0(stream, null)).b12();
  }
  function readChunk(_this__u8e3s4, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.zt();
    // Inline function 'io.ktor.client.engine.js.browser.readChunk.<anonymous>' call
    var tmp = _this__u8e3s4.read();
    var tmp_0 = tmp.then(readChunk$lambda(cancellable));
    tmp_0.catch(readChunk$lambda_0(cancellable));
    return cancellable.yq();
  }
  function channelFromStream$slambda($stream, resultContinuation) {
    this.ra7_1 = $stream;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(channelFromStream$slambda).f9h = function ($this$writer, $completion) {
    var tmp = this.g9h($this$writer, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(channelFromStream$slambda).yc = function (p1, $completion) {
    return this.f9h((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(channelFromStream$slambda).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 6;
            this.ta7_1 = this.ra7_1.getReader();
            this.ac_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.ac_1 = 8;
              continue $sm;
            }

            this.bc_1 = 5;
            this.ac_1 = 2;
            suspendResult = readChunk(this.ta7_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.ua7_1 = suspendResult;
            if (this.ua7_1 == null) {
              this.bc_1 = 6;
              this.ac_1 = 8;
              var tmp_0 = this;
              continue $sm;
            } else {
              this.va7_1 = this.ua7_1;
              this.ac_1 = 3;
              continue $sm;
            }

          case 3:
            this.wa7_1 = this.va7_1;
            this.ac_1 = 4;
            suspendResult = writeFully(this.sa7_1.b12(), asByteArray(this.wa7_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.sa7_1.b12().p6();
            this.bc_1 = 6;
            this.ac_1 = 7;
            continue $sm;
          case 5:
            this.bc_1 = 6;
            var tmp_1 = this.dc_1;
            if (tmp_1 instanceof Error) {
              var cause = this.dc_1;
              this.ta7_1.cancel(cause);
              throw cause;
            } else {
              throw this.dc_1;
            }

          case 6:
            throw this.dc_1;
          case 7:
            this.bc_1 = 6;
            this.ac_1 = 1;
            continue $sm;
          case 8:
            return Unit_instance;
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
  protoOf(channelFromStream$slambda).g9h = function ($this$writer, completion) {
    var i = new channelFromStream$slambda(this.ra7_1, completion);
    i.sa7_1 = $this$writer;
    return i;
  };
  function channelFromStream$slambda_0($stream, resultContinuation) {
    var i = new channelFromStream$slambda($stream, resultContinuation);
    var l = function ($this$writer, $completion) {
      return i.f9h($this$writer, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function readChunk$lambda($continuation) {
    return function (it) {
      var chunk = it.value;
      var result = (it.done ? true : chunk == null) ? null : chunk;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(result);
      $continuation.t6(tmp$ret$0);
      return Unit_instance;
    };
  }
  function readChunk$lambda_0($continuation) {
    return function (cause) {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var this_0 = $continuation;
      // Inline function 'kotlin.Companion.failure' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
      this_0.t6(tmp$ret$0);
      return Unit_instance;
    };
  }
  function commonFetch(input, init, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.zt();
    // Inline function 'io.ktor.client.engine.js.compatibility.commonFetch.<anonymous>' call
    var controller = AbortController_0();
    init.signal = controller.signal;
    cancellable.gs(commonFetch$lambda(controller));
    var promise = get_platform(PlatformUtils_getInstance()).t9_1 === 2 ? fetch(input, init) : jsRequireNodeFetch()(input, init);
    var tmp = commonFetch$lambda_0(cancellable);
    promise.then(tmp, commonFetch$lambda_1(cancellable));
    return cancellable.yq();
  }
  function readBody(_this__u8e3s4, response) {
    return get_platform(PlatformUtils_getInstance()).t9_1 === 3 ? readBodyNode(_this__u8e3s4, response) : readBodyBrowser(_this__u8e3s4, response);
  }
  function AbortController_0() {
    var tmp;
    if (get_platform(PlatformUtils_getInstance()).t9_1 === 2) {
      tmp = new AbortController();
    } else {
      var controller = eval('require')('abort-controller');
      tmp = new controller();
    }
    return tmp;
  }
  function jsRequireNodeFetch() {
    var tmp;
    try {
      tmp = eval('require')('node-fetch');
    } catch ($p) {
      var tmp_0;
      var cause = $p;
      throw Error_init_$Create$("Error loading module 'node-fetch': " + cause);
    }
    return tmp;
  }
  function commonFetch$lambda($controller) {
    return function (it) {
      $controller.abort();
      return Unit_instance;
    };
  }
  function commonFetch$lambda_0($continuation) {
    return function (it) {
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(it);
      $continuation.t6(tmp$ret$0);
      return Unit_instance;
    };
  }
  function commonFetch$lambda_1($continuation) {
    return function (it) {
      // Inline function 'kotlin.Companion.failure' call
      var exception = Error_init_$Create$_0('Fail to fetch', it);
      var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
      $continuation.t6(tmp$ret$0);
      return Unit_instance;
    };
  }
  function readBodyNode(_this__u8e3s4, response) {
    return writer(_this__u8e3s4, VOID, VOID, readBodyNode$slambda_0(response, null)).b12();
  }
  function readBodyNode$slambda$lambda($responseData, $body) {
    return function (chunk) {
      _ChannelResult___get_isSuccess__impl__odq1z9($responseData.i16(asByteArray(new Uint8Array(chunk))));
      return $body.pause();
    };
  }
  function readBodyNode$slambda$lambda_0($responseData, $this_writer) {
    return function (error) {
      var cause = new JsError(error);
      $responseData.n16(cause);
      return $this_writer.b12().n16(cause);
    };
  }
  function readBodyNode$slambda$lambda_1($responseData) {
    return function () {
      return $responseData.p16();
    };
  }
  function readBodyNode$slambda($response, resultContinuation) {
    this.fa8_1 = $response;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(readBodyNode$slambda).f9h = function ($this$writer, $completion) {
    var tmp = this.g9h($this$writer, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(readBodyNode$slambda).yc = function (p1, $completion) {
    return this.f9h((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(readBodyNode$slambda).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 6;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.fa8_1.body;
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              var message = 'Fail to get body';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.ha8_1 = tmp_1;
            this.ia8_1 = Channel(1);
            this.ha8_1.on('data', readBodyNode$slambda$lambda(this.ia8_1, this.ha8_1));
            this.ha8_1.on('error', readBodyNode$slambda$lambda_0(this.ia8_1, this.ga8_1));
            this.ha8_1.on('end', readBodyNode$slambda$lambda_1(this.ia8_1));
            this.bc_1 = 5;
            this.ja8_1 = this.ia8_1.o();
            this.ac_1 = 1;
            continue $sm;
          case 1:
            this.ac_1 = 2;
            suspendResult = this.ja8_1.c15(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!suspendResult) {
              this.ac_1 = 4;
              continue $sm;
            }

            this.ka8_1 = this.ja8_1.f1();
            this.ac_1 = 3;
            suspendResult = writeFully(this.ga8_1.b12(), this.ka8_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.ga8_1.b12().p6();
            this.ha8_1.resume();
            this.ac_1 = 1;
            continue $sm;
          case 4:
            this.bc_1 = 6;
            this.ac_1 = 7;
            continue $sm;
          case 5:
            this.bc_1 = 6;
            var tmp_2 = this.dc_1;
            if (tmp_2 instanceof Error) {
              var cause = this.dc_1;
              this.ha8_1.destroy(cause);
              throw cause;
            } else {
              throw this.dc_1;
            }

          case 6:
            throw this.dc_1;
          case 7:
            this.bc_1 = 6;
            return Unit_instance;
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
  protoOf(readBodyNode$slambda).g9h = function ($this$writer, completion) {
    var i = new readBodyNode$slambda(this.fa8_1, completion);
    i.ga8_1 = $this$writer;
    return i;
  };
  function readBodyNode$slambda_0($response, resultContinuation) {
    var i = new readBodyNode$slambda($response, resultContinuation);
    var l = function ($this$writer, $completion) {
      return i.f9h($this$writer, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function platformRequestDefaultTransform(contentType, context, body) {
    return null;
  }
  function platformResponseDefaultTransformers(_this__u8e3s4) {
  }
  function isReservedStatusCode(_this__u8e3s4, $this) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.client.plugins.websocket.JsWebSocketSession.isReservedStatusCode.<anonymous>' call
    var resolved = Companion_getInstance_6().d89(_this__u8e3s4);
    return resolved == null ? true : equals(resolved, Codes_CLOSED_ABNORMALLY_getInstance());
  }
  function JsWebSocketSession$lambda(this$0) {
    return function (it) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var event = it;
      var data = event.data;
      var tmp;
      if (data instanceof ArrayBuffer) {
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$3 = new Int8Array(data);
        tmp = Binary_init_$Create$(false, tmp$ret$3);
      } else {
        if (!(data == null) ? typeof data === 'string' : false) {
          tmp = Text_init_$Create$(data);
        } else {
          var error = IllegalStateException_init_$Create$('Unknown frame type: ' + event.type);
          this$0.na8_1.bv(error);
          throw error;
        }
      }
      var frame = tmp;
      this$0.oa8_1.i16(frame);
      return Unit_instance;
    };
  }
  function JsWebSocketSession$lambda_0(this$0) {
    return function (it) {
      var cause = WebSocketException_init_$Create$('' + it);
      this$0.na8_1.bv(cause);
      this$0.oa8_1.n16(cause);
      this$0.pa8_1.r16();
      return Unit_instance;
    };
  }
  function JsWebSocketSession$lambda_1(this$0) {
    return function (event) {
      var tmp = event.code;
      var tmp_0 = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
      var tmp_1 = event.reason;
      var reason = new CloseReason(tmp_0, (!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) ? tmp_1 : THROW_CCE());
      this$0.na8_1.zu(reason);
      this$0.oa8_1.i16(Close_init_$Create$(reason));
      this$0.oa8_1.p16();
      this$0.pa8_1.r16();
      return Unit_instance;
    };
  }
  function JsWebSocketSession$slambda(this$0, resultContinuation) {
    this.ba9_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsWebSocketSession$slambda).j20 = function ($this$launch, $completion) {
    var tmp = this.k20($this$launch, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(JsWebSocketSession$slambda).yc = function (p1, $completion) {
    return this.j20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(JsWebSocketSession$slambda).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 10;
            var tmp_0 = this;
            tmp_0.da9_1 = this.ba9_1.pa8_1;
            this.ac_1 = 1;
            continue $sm;
          case 1:
            var tmp_1 = this;
            tmp_1.fa9_1 = this.da9_1;
            this.ga9_1 = null;
            this.ac_1 = 2;
            continue $sm;
          case 2:
            this.ac_1 = 3;
            continue $sm;
          case 3:
            this.bc_1 = 9;
            this.bc_1 = 8;
            var tmp_2 = this;
            tmp_2.ia9_1 = this.fa9_1;
            this.ja9_1 = this.ia9_1.o();
            this.ac_1 = 4;
            continue $sm;
          case 4:
            this.ac_1 = 5;
            suspendResult = this.ja9_1.c15(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            if (!suspendResult) {
              this.ac_1 = 6;
              continue $sm;
            }

            var e = this.ja9_1.f1();
            switch (e.p89_1.t9_1) {
              case 0:
                var text = e.q89_1;
                this.ba9_1.ma8_1.send(String_0(text));
                break;
              case 1:
                var tmp_3 = e.q89_1;
                var source = tmp_3 instanceof Int8Array ? tmp_3 : THROW_CCE();
                var frameData = source.buffer.slice(source.byteOffset, source.byteOffset + source.byteLength | 0);
                this.ba9_1.ma8_1.send(frameData);
                break;
              case 2:
                var tmp$ret$0;
                l$ret$1: do {
                  var builder = new BytePacketBuilder();
                  try {
                    writeFully_0(builder, e.q89_1);
                    tmp$ret$0 = builder.e3();
                    break l$ret$1;
                  } catch ($p) {
                    if ($p instanceof Error) {
                      var t = $p;
                      builder.mv();
                      throw t;
                    } else {
                      throw $p;
                    }
                  }
                }
                 while (false);
                var data = tmp$ret$0;
                var code = readShort(data);
                var reason = data.l7n();
                this.ba9_1.na8_1.zu(new CloseReason(code, reason));
                if (isReservedStatusCode(code, this.ba9_1)) {
                  this.ba9_1.ma8_1.close();
                } else {
                  this.ba9_1.ma8_1.close(code, reason);
                }

                break;
              case 3:
              case 4:
                break;
            }

            this.ac_1 = 4;
            continue $sm;
          case 6:
            this.ha9_1 = Unit_instance;
            this.bc_1 = 10;
            this.ac_1 = 7;
            var tmp_4 = this;
            continue $sm;
          case 7:
            this.bc_1 = 10;
            var tmp_5 = this;
            cancelConsumed(this.fa9_1, this.ga9_1);
            tmp_5.ea9_1 = Unit_instance;
            this.ac_1 = 12;
            continue $sm;
          case 8:
            this.bc_1 = 9;
            var tmp_6 = this.dc_1;
            if (tmp_6 instanceof Error) {
              var e_0 = this.dc_1;
              var tmp_7 = this;
              this.ga9_1 = e_0;
              throw e_0;
            } else {
              throw this.dc_1;
            }

          case 9:
            this.bc_1 = 10;
            var t_0 = this.dc_1;
            cancelConsumed(this.fa9_1, this.ga9_1);
            throw t_0;
          case 10:
            throw this.dc_1;
          case 11:
            this.bc_1 = 10;
            cancelConsumed(this.fa9_1, this.ga9_1);
            if (false) {
              this.ac_1 = 1;
              continue $sm;
            }

            this.ac_1 = 12;
            continue $sm;
          case 12:
            return Unit_instance;
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.bc_1 === 10) {
          throw e_1;
        } else {
          this.ac_1 = this.bc_1;
          this.dc_1 = e_1;
        }
      }
     while (true);
  };
  protoOf(JsWebSocketSession$slambda).k20 = function ($this$launch, completion) {
    var i = new JsWebSocketSession$slambda(this.ba9_1, completion);
    i.ca9_1 = $this$launch;
    return i;
  };
  function JsWebSocketSession$slambda_0(this$0, resultContinuation) {
    var i = new JsWebSocketSession$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.j20($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function JsWebSocketSession$lambda_2(this$0) {
    return function (cause) {
      var tmp;
      if (cause == null) {
        this$0.ma8_1.close();
        tmp = Unit_instance;
      } else {
        this$0.ma8_1.close(Codes_NORMAL_getInstance().a89_1, 'Client failed');
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function JsWebSocketSession(coroutineContext, websocket) {
    this.la8_1 = coroutineContext;
    this.ma8_1 = websocket;
    this.na8_1 = CompletableDeferred();
    var tmp = this;
    Factory_getInstance();
    tmp.oa8_1 = Channel(2147483647);
    var tmp_0 = this;
    Factory_getInstance();
    tmp_0.pa8_1 = Channel(2147483647);
    this.qa8_1 = this.oa8_1;
    this.ra8_1 = this.pa8_1;
    this.sa8_1 = this.na8_1;
    // Inline function 'org.w3c.dom.ARRAYBUFFER' call
    null;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = 'arraybuffer';
    this.ma8_1.binaryType = tmp$ret$2;
    this.ma8_1.addEventListener('message', JsWebSocketSession$lambda(this));
    this.ma8_1.addEventListener('error', JsWebSocketSession$lambda_0(this));
    this.ma8_1.addEventListener('close', JsWebSocketSession$lambda_1(this));
    launch(this, VOID, VOID, JsWebSocketSession$slambda_0(this, null));
    var tmp0_safe_receiver = this.la8_1.hc(Key_instance);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.xp(JsWebSocketSession$lambda_2(this));
    }
  }
  protoOf(JsWebSocketSession).vo = function () {
    return this.la8_1;
  };
  function unwrapCancellationException(_this__u8e3s4) {
    var exception = _this__u8e3s4;
    $l$loop: while (exception instanceof CancellationException) {
      if (equals(exception, exception.cause)) {
        return _this__u8e3s4;
      }
      exception = exception.cause;
    }
    var tmp0_elvis_lhs = exception;
    return tmp0_elvis_lhs == null ? _this__u8e3s4 : tmp0_elvis_lhs;
  }
  //region block: post-declaration
  defineProp(protoOf(DoubleReceiveException), 'message', function () {
    return this.w6();
  });
  defineProp(protoOf(NoTransformationFoundException), 'message', function () {
    return this.w6();
  });
  defineProp(protoOf(ClientEngineClosedException), 'cause', function () {
    return this.x6();
  });
  protoOf(HttpClientEngineBase).f9i = get_supportedCapabilities;
  protoOf(HttpClientEngineBase).o9d = install;
  protoOf(KtorCallContextElement).hc = get;
  protoOf(KtorCallContextElement).xf = fold;
  protoOf(KtorCallContextElement).wf = minusKey;
  protoOf(KtorCallContextElement).yf = plus;
  defineProp(protoOf(RedirectResponseException), 'message', function () {
    return this.w6();
  });
  defineProp(protoOf(ClientRequestException), 'message', function () {
    return this.w6();
  });
  defineProp(protoOf(ServerResponseException), 'message', function () {
    return this.w6();
  });
  protoOf(HttpRequest$1).vo = get_coroutineContext;
  //endregion
  //region block: init
  Companion_instance_1 = new Companion_0();
  WebSocketCapability_instance = new WebSocketCapability();
  Companion_instance_4 = new Companion_3();
  Js_instance = new Js();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Phases_getInstance;
  _.$_$.b = Phases_getInstance_1;
  _.$_$.c = EmptyContent_getInstance;
  _.$_$.d = HttpClientPlugin;
  _.$_$.e = defaultRequest;
  _.$_$.f = HttpRequestBuilder;
  _.$_$.g = accept;
  _.$_$.h = url;
  _.$_$.i = HttpResponseContainer;
  _.$_$.j = HttpStatement;
  _.$_$.k = HttpClient_1;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-core.js.map
