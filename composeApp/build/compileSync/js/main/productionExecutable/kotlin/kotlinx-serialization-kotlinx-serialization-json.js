(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    root['kotlinx-serialization-kotlinx-serialization-json'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-json'], this['kotlinx-serialization-kotlinx-serialization-core'], this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var protoOf = kotlin_kotlin.$_$.ic;
  var objectMeta = kotlin_kotlin.$_$.hc;
  var setMetadataFor = kotlin_kotlin.$_$.jc;
  var Unit_instance = kotlin_kotlin.$_$.k5;
  var StringFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var classMeta = kotlin_kotlin.$_$.xa;
  var VOID = kotlin_kotlin.$_$.g;
  var toString = kotlin_kotlin.$_$.nc;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.v1;
  var charSequenceLength = kotlin_kotlin.$_$.va;
  var charSequenceGet = kotlin_kotlin.$_$.ua;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.t2;
  var equals = kotlin_kotlin.$_$.ab;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var interfaceMeta = kotlin_kotlin.$_$.mb;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.i1;
  var THROW_CCE = kotlin_kotlin.$_$.ng;
  var hashCode = kotlin_kotlin.$_$.kb;
  var joinToString = kotlin_kotlin.$_$.d8;
  var Map = kotlin_kotlin.$_$.z5;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.j;
  var lazy = kotlin_kotlin.$_$.lh;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var getBooleanHashCode = kotlin_kotlin.$_$.eb;
  var getStringHashCode = kotlin_kotlin.$_$.jb;
  var List = kotlin_kotlin.$_$.x5;
  var NumberFormatException_init_$Create$ = kotlin_kotlin.$_$.j2;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.x4;
  var numberRangeToNumber = kotlin_kotlin.$_$.cc;
  var ClosedRange = kotlin_kotlin.$_$.vc;
  var isInterface = kotlin_kotlin.$_$.vb;
  var contains = kotlin_kotlin.$_$.dd;
  var toDouble = kotlin_kotlin.$_$.ef;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.z4;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var InlinePrimitiveDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var buildSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var toLongOrNull = kotlin_kotlin.$_$.hf;
  var toULongOrNull = kotlin_kotlin.$_$.mf;
  var ULong = kotlin_kotlin.$_$.vg;
  var Companion_getInstance = kotlin_kotlin.$_$.i5;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.z3;
  var toDoubleOrNull = kotlin_kotlin.$_$.df;
  var toBooleanStrictOrNull = kotlin_kotlin.$_$.cf;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var lazy_0 = kotlin_kotlin.$_$.mh;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var KProperty1 = kotlin_kotlin.$_$.kd;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ib;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var toLong = kotlin_kotlin.$_$.lc;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.p3;
  var UInt__toString_impl_dbgl21 = kotlin_kotlin.$_$.r3;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.y3;
  var ULong__toString_impl_f9au7k = kotlin_kotlin.$_$.b4;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.g3;
  var UByte__toString_impl_v72jg = kotlin_kotlin.$_$.i3;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.i4;
  var UShort__toString_impl_edaoee = kotlin_kotlin.$_$.k4;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var captureStack = kotlin_kotlin.$_$.ra;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var charSequenceSubSequence = kotlin_kotlin.$_$.wa;
  var coerceAtLeast = kotlin_kotlin.$_$.wc;
  var coerceAtMost = kotlin_kotlin.$_$.yc;
  var Companion_instance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.x;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.n;
  var singleOrNull = kotlin_kotlin.$_$.d9;
  var emptyMap = kotlin_kotlin.$_$.j7;
  var getValue = kotlin_kotlin.$_$.y7;
  var fillArrayVal = kotlin_kotlin.$_$.cb;
  var copyOf = kotlin_kotlin.$_$.e7;
  var copyOf_0 = kotlin_kotlin.$_$.f7;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.zf;
  var invoke = kotlin_kotlin.$_$.gh;
  var CoroutineImpl = kotlin_kotlin.$_$.ja;
  var DeepRecursiveScope = kotlin_kotlin.$_$.ag;
  var Unit = kotlin_kotlin.$_$.yg;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.v9;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var getKClass = kotlin_kotlin.$_$.e;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var ensureNotNull = kotlin_kotlin.$_$.fh;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var SealedClassSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var contextual = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var SerializersModuleCollector = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var substringBefore = kotlin_kotlin.$_$.ze;
  var removeSuffix = kotlin_kotlin.$_$.pe;
  var substringAfter = kotlin_kotlin.$_$.ye;
  var contains_0 = kotlin_kotlin.$_$.wd;
  var plus = kotlin_kotlin.$_$.oh;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c2;
  var IllegalArgumentException = kotlin_kotlin.$_$.eg;
  var isFinite = kotlin_kotlin.$_$.ih;
  var isFinite_0 = kotlin_kotlin.$_$.hh;
  var toUInt = kotlin_kotlin.$_$.lf;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.q3;
  var toULong = kotlin_kotlin.$_$.nf;
  var toUByte = kotlin_kotlin.$_$.kf;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.h3;
  var toUShort = kotlin_kotlin.$_$.of;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.j4;
  var objectCreate = kotlin_kotlin.$_$.gc;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var findPolymorphicSerializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h2;
  var toString_0 = kotlin_kotlin.$_$.a3;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.h5;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.g5;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.j5;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var setOf = kotlin_kotlin.$_$.c9;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.z2;
  var numberToChar = kotlin_kotlin.$_$.dc;
  var equals_0 = kotlin_kotlin.$_$.be;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var ByteCompanionObject_instance = kotlin_kotlin.$_$.u4;
  var toByte = kotlin_kotlin.$_$.kc;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.y4;
  var toShort = kotlin_kotlin.$_$.mc;
  var single = kotlin_kotlin.$_$.se;
  var Char = kotlin_kotlin.$_$.wf;
  var emptySet = kotlin_kotlin.$_$.k7;
  var plus_0 = kotlin_kotlin.$_$.t8;
  var toInt = kotlin_kotlin.$_$.gf;
  var toList = kotlin_kotlin.$_$.l9;
  var enumEntries = kotlin_kotlin.$_$.ma;
  var Enum = kotlin_kotlin.$_$.bg;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.nh;
  var last = kotlin_kotlin.$_$.k8;
  var removeLast = kotlin_kotlin.$_$.z8;
  var lastIndexOf = kotlin_kotlin.$_$.ne;
  var Long = kotlin_kotlin.$_$.gg;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.v2;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.e5;
  var numberToLong = kotlin_kotlin.$_$.fc;
  var charArray = kotlin_kotlin.$_$.ta;
  var indexOf = kotlin_kotlin.$_$.fe;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.h1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.p;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Json, 'Json', classMeta, VOID, [StringFormat]);
  setMetadataFor(Default, 'Default', objectMeta, Json);
  setMetadataFor(JsonBuilder, 'JsonBuilder', classMeta);
  setMetadataFor(JsonImpl, 'JsonImpl', classMeta, Json);
  setMetadataFor(JsonClassDiscriminator, 'JsonClassDiscriminator', classMeta);
  setMetadataFor(JsonNames, 'JsonNames', classMeta);
  setMetadataFor(JsonConfiguration, 'JsonConfiguration', classMeta);
  setMetadataFor(JsonDecoder, 'JsonDecoder', interfaceMeta, VOID, [Decoder, CompositeDecoder]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(JsonElement, 'JsonElement', classMeta, VOID, VOID, VOID, VOID, {0: JsonElementSerializer_getInstance});
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(JsonObject, 'JsonObject', classMeta, JsonElement, [JsonElement, Map], VOID, VOID, {0: JsonObjectSerializer_getInstance});
  setMetadataFor(JsonPrimitive, 'JsonPrimitive', classMeta, JsonElement, VOID, VOID, VOID, {0: JsonPrimitiveSerializer_getInstance});
  setMetadataFor(JsonNull, 'JsonNull', objectMeta, JsonPrimitive, [JsonPrimitive, SerializerFactory], VOID, VOID, {0: JsonNull_getInstance});
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(JsonLiteral, 'JsonLiteral', classMeta, JsonPrimitive);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(JsonArray, 'JsonArray', classMeta, JsonElement, [JsonElement, List], VOID, VOID, {0: JsonArraySerializer_getInstance});
  setMetadataFor(JsonElementSerializer, 'JsonElementSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonObjectDescriptor, 'JsonObjectDescriptor', objectMeta, VOID, [SerialDescriptor]);
  setMetadataFor(JsonObjectSerializer, 'JsonObjectSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonArrayDescriptor, 'JsonArrayDescriptor', objectMeta, VOID, [SerialDescriptor]);
  setMetadataFor(JsonArraySerializer, 'JsonArraySerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonPrimitiveSerializer, 'JsonPrimitiveSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonNullSerializer, 'JsonNullSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonLiteralSerializer, 'JsonLiteralSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(defer$1, VOID, classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(JsonEncoder, 'JsonEncoder', interfaceMeta, VOID, [Encoder, CompositeEncoder]);
  setMetadataFor(Composer, 'Composer', classMeta);
  setMetadataFor(ComposerForUnsignedNumbers, 'ComposerForUnsignedNumbers', classMeta, Composer);
  setMetadataFor(ComposerForUnquotedLiterals, 'ComposerForUnquotedLiterals', classMeta, Composer);
  setMetadataFor(ComposerWithPrettyPrint, 'ComposerWithPrettyPrint', classMeta, Composer);
  setMetadataFor(JsonElementMarker, 'JsonElementMarker', classMeta);
  setMetadataFor(JsonException, 'JsonException', classMeta, SerializationException);
  setMetadataFor(JsonEncodingException, 'JsonEncodingException', classMeta, JsonException);
  setMetadataFor(JsonDecodingException, 'JsonDecodingException', classMeta, JsonException);
  setMetadataFor(Tombstone, 'Tombstone', objectMeta);
  setMetadataFor(JsonPath, 'JsonPath', classMeta, VOID, VOID, JsonPath);
  setMetadataFor(JsonTreeReader$readDeepRecursive$slambda, 'JsonTreeReader$readDeepRecursive$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor($readObjectCOROUTINE$0, '$readObjectCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(JsonTreeReader, 'JsonTreeReader', classMeta, VOID, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(PolymorphismValidator, 'PolymorphismValidator', classMeta, VOID, [SerializersModuleCollector]);
  setMetadataFor(Key, 'Key', classMeta, VOID, VOID, Key);
  setMetadataFor(DescriptorSchemaCache, 'DescriptorSchemaCache', classMeta, VOID, VOID, DescriptorSchemaCache);
  setMetadataFor(DiscriminatorHolder, 'DiscriminatorHolder', classMeta);
  setMetadataFor(StreamingJsonDecoder, 'StreamingJsonDecoder', classMeta, AbstractDecoder, [JsonDecoder, AbstractDecoder]);
  setMetadataFor(JsonDecoderForUnsignedTypes, 'JsonDecoderForUnsignedTypes', classMeta, AbstractDecoder);
  setMetadataFor(StreamingJsonEncoder, 'StreamingJsonEncoder', classMeta, AbstractEncoder, [JsonEncoder, AbstractEncoder]);
  setMetadataFor(AbstractJsonTreeDecoder, 'AbstractJsonTreeDecoder', classMeta, NamedValueDecoder, [NamedValueDecoder, JsonDecoder]);
  setMetadataFor(JsonTreeDecoder, 'JsonTreeDecoder', classMeta, AbstractJsonTreeDecoder);
  setMetadataFor(JsonTreeListDecoder, 'JsonTreeListDecoder', classMeta, AbstractJsonTreeDecoder);
  setMetadataFor(JsonPrimitiveDecoder, 'JsonPrimitiveDecoder', classMeta, AbstractJsonTreeDecoder);
  setMetadataFor(JsonTreeMapDecoder, 'JsonTreeMapDecoder', classMeta, JsonTreeDecoder);
  setMetadataFor(WriteMode, 'WriteMode', classMeta, Enum);
  setMetadataFor(AbstractJsonLexer, 'AbstractJsonLexer', classMeta);
  setMetadataFor(CharMappings, 'CharMappings', objectMeta);
  setMetadataFor(StringJsonLexer, 'StringJsonLexer', classMeta, AbstractJsonLexer);
  setMetadataFor(JsonToStringWriter, 'JsonToStringWriter', classMeta, VOID, VOID, JsonToStringWriter);
  //endregion
  function Default() {
    Default_instance = this;
    Json.call(this, new JsonConfiguration(), EmptySerializersModule());
  }
  var Default_instance;
  function Default_getInstance() {
    if (Default_instance == null)
      new Default();
    return Default_instance;
  }
  function Json(configuration, serializersModule) {
    Default_getInstance();
    this.a90_1 = configuration;
    this.b90_1 = serializersModule;
    this.c90_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).w8f = function () {
    return this.b90_1;
  };
  protoOf(Json).b8d = function (serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.mv();
    }
  };
  protoOf(Json).c8d = function (deserializer, string) {
    var lexer = new StringJsonLexer(string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.i8c(), null);
    var result = input.g8f(deserializer);
    lexer.q90();
    return result;
  };
  function Json_0(from, builderAction) {
    from = from === VOID ? Default_getInstance() : from;
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.e3();
    return new JsonImpl(conf, builder.g91_1);
  }
  function JsonBuilder(json) {
    this.r90_1 = json.a90_1.h91_1;
    this.s90_1 = json.a90_1.m91_1;
    this.t90_1 = json.a90_1.i91_1;
    this.u90_1 = json.a90_1.j91_1;
    this.v90_1 = json.a90_1.k91_1;
    this.w90_1 = json.a90_1.l91_1;
    this.x90_1 = json.a90_1.n91_1;
    this.y90_1 = json.a90_1.o91_1;
    this.z90_1 = json.a90_1.p91_1;
    this.a91_1 = json.a90_1.q91_1;
    this.b91_1 = json.a90_1.r91_1;
    this.c91_1 = json.a90_1.s91_1;
    this.d91_1 = json.a90_1.t91_1;
    this.e91_1 = json.a90_1.u91_1;
    this.f91_1 = json.a90_1.v91_1;
    this.g91_1 = json.w8f();
  }
  protoOf(JsonBuilder).e3 = function () {
    if (this.z90_1) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this.a91_1 === 'type')) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    if (!this.w90_1) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this.x90_1 === '    ')) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message_0 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    } else if (!(this.x90_1 === '    ')) {
      var tmp$ret$3;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var indexedObject = this.x90_1;
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(indexedObject)) {
          var element = charSequenceGet(indexedObject, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
          if (!(((element === _Char___init__impl__6a9atx(32) ? true : element === _Char___init__impl__6a9atx(9)) ? true : element === _Char___init__impl__6a9atx(13)) ? true : element === _Char___init__impl__6a9atx(10))) {
            tmp$ret$3 = false;
            break $l$block;
          }
        }
        tmp$ret$3 = true;
      }
      var allWhitespaces = tmp$ret$3;
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!allWhitespaces) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message_1 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.x90_1;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    return new JsonConfiguration(this.r90_1, this.t90_1, this.u90_1, this.v90_1, this.w90_1, this.s90_1, this.x90_1, this.y90_1, this.z90_1, this.a91_1, this.b91_1, this.c91_1, this.d91_1, this.e91_1, this.f91_1);
  };
  function validateConfiguration($this) {
    if (equals($this.w8f(), EmptySerializersModule()))
      return Unit_instance;
    var collector = new PolymorphismValidator($this.a90_1.p91_1, $this.a90_1.q91_1);
    $this.w8f().o8u(collector);
  }
  function JsonImpl(configuration, module_0) {
    Json.call(this, configuration, module_0);
    validateConfiguration(this);
  }
  function JsonClassDiscriminator() {
  }
  function JsonNames() {
  }
  function JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, namingStrategy, decodeEnumsCaseInsensitive, allowTrailingComma) {
    encodeDefaults = encodeDefaults === VOID ? false : encodeDefaults;
    ignoreUnknownKeys = ignoreUnknownKeys === VOID ? false : ignoreUnknownKeys;
    isLenient = isLenient === VOID ? false : isLenient;
    allowStructuredMapKeys = allowStructuredMapKeys === VOID ? false : allowStructuredMapKeys;
    prettyPrint = prettyPrint === VOID ? false : prettyPrint;
    explicitNulls = explicitNulls === VOID ? true : explicitNulls;
    prettyPrintIndent = prettyPrintIndent === VOID ? '    ' : prettyPrintIndent;
    coerceInputValues = coerceInputValues === VOID ? false : coerceInputValues;
    useArrayPolymorphism = useArrayPolymorphism === VOID ? false : useArrayPolymorphism;
    classDiscriminator = classDiscriminator === VOID ? 'type' : classDiscriminator;
    allowSpecialFloatingPointValues = allowSpecialFloatingPointValues === VOID ? false : allowSpecialFloatingPointValues;
    useAlternativeNames = useAlternativeNames === VOID ? true : useAlternativeNames;
    namingStrategy = namingStrategy === VOID ? null : namingStrategy;
    decodeEnumsCaseInsensitive = decodeEnumsCaseInsensitive === VOID ? false : decodeEnumsCaseInsensitive;
    allowTrailingComma = allowTrailingComma === VOID ? false : allowTrailingComma;
    this.h91_1 = encodeDefaults;
    this.i91_1 = ignoreUnknownKeys;
    this.j91_1 = isLenient;
    this.k91_1 = allowStructuredMapKeys;
    this.l91_1 = prettyPrint;
    this.m91_1 = explicitNulls;
    this.n91_1 = prettyPrintIndent;
    this.o91_1 = coerceInputValues;
    this.p91_1 = useArrayPolymorphism;
    this.q91_1 = classDiscriminator;
    this.r91_1 = allowSpecialFloatingPointValues;
    this.s91_1 = useAlternativeNames;
    this.t91_1 = namingStrategy;
    this.u91_1 = decodeEnumsCaseInsensitive;
    this.v91_1 = allowTrailingComma;
  }
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.h91_1 + ', ignoreUnknownKeys=' + this.i91_1 + ', isLenient=' + this.j91_1 + ', ' + ('allowStructuredMapKeys=' + this.k91_1 + ', prettyPrint=' + this.l91_1 + ', explicitNulls=' + this.m91_1 + ', ') + ("prettyPrintIndent='" + this.n91_1 + "', coerceInputValues=" + this.o91_1 + ', useArrayPolymorphism=' + this.p91_1 + ', ') + ("classDiscriminator='" + this.q91_1 + "', allowSpecialFloatingPointValues=" + this.r91_1 + ', useAlternativeNames=' + this.s91_1 + ', ') + ('namingStrategy=' + this.t91_1 + ', decodeEnumsCaseInsensitive=' + this.u91_1 + ', allowTrailingComma=' + this.v91_1 + ')');
  };
  function JsonDecoder() {
  }
  function get_jsonUnquotedLiteralDescriptor() {
    _init_properties_JsonElement_kt__7cbdc2();
    return jsonUnquotedLiteralDescriptor;
  }
  var jsonUnquotedLiteralDescriptor;
  function Companion() {
  }
  var Companion_instance_0;
  function Companion_getInstance_4() {
    return Companion_instance_0;
  }
  function JsonElement() {
  }
  function Companion_0() {
  }
  var Companion_instance_1;
  function Companion_getInstance_5() {
    return Companion_instance_1;
  }
  function JsonObject$toString$lambda(_name_for_destructuring_parameter_0__wldtmu) {
    // Inline function 'kotlin.collections.component1' call
    var k = _name_for_destructuring_parameter_0__wldtmu.p2();
    // Inline function 'kotlin.collections.component2' call
    var v = _name_for_destructuring_parameter_0__wldtmu.q2();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.JsonObject.toString.<anonymous>.<anonymous>' call
    printQuoted(this_0, k);
    this_0.y5(_Char___init__impl__6a9atx(58));
    this_0.w5(v);
    return this_0.toString();
  }
  function JsonObject(content) {
    JsonElement.call(this);
    this.y91_1 = content;
  }
  protoOf(JsonObject).m2 = function () {
    return this.y91_1.m2();
  };
  protoOf(JsonObject).k2 = function () {
    return this.y91_1.k2();
  };
  protoOf(JsonObject).m = function () {
    return this.y91_1.m();
  };
  protoOf(JsonObject).l2 = function () {
    return this.y91_1.l2();
  };
  protoOf(JsonObject).h7s = function (key) {
    return this.y91_1.u2(key);
  };
  protoOf(JsonObject).u2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.h7s((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).i7s = function (key) {
    return this.y91_1.x2(key);
  };
  protoOf(JsonObject).x2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.i7s((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).u = function () {
    return this.y91_1.u();
  };
  protoOf(JsonObject).equals = function (other) {
    return equals(this.y91_1, other);
  };
  protoOf(JsonObject).hashCode = function () {
    return hashCode(this.y91_1);
  };
  protoOf(JsonObject).toString = function () {
    var tmp = this.y91_1.m2();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  };
  function _get_$cachedSerializer__te6jhj($this) {
    return $this.a92_1.q2();
  }
  function JsonNull$_anonymous__enib48() {
    return JsonNullSerializer_getInstance();
  }
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.z91_1 = 'null';
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.a92_1 = lazy(tmp_0, JsonNull$_anonymous__enib48);
  }
  protoOf(JsonNull).b92 = function () {
    return this.z91_1;
  };
  protoOf(JsonNull).c92 = function () {
    return _get_$cachedSerializer__te6jhj(this);
  };
  protoOf(JsonNull).x8m = function (typeParamsSerializers) {
    return this.c92();
  };
  var JsonNull_instance;
  function JsonNull_getInstance() {
    if (JsonNull_instance == null)
      new JsonNull();
    return JsonNull_instance;
  }
  function Companion_1() {
  }
  var Companion_instance_2;
  function Companion_getInstance_6() {
    return Companion_instance_2;
  }
  function JsonPrimitive() {
    JsonElement.call(this);
  }
  protoOf(JsonPrimitive).toString = function () {
    return this.b92();
  };
  function JsonPrimitive_0(value) {
    _init_properties_JsonElement_kt__7cbdc2();
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, true);
  }
  function JsonLiteral(body, isString, coerceToInlineType) {
    coerceToInlineType = coerceToInlineType === VOID ? null : coerceToInlineType;
    JsonPrimitive.call(this);
    this.d92_1 = isString;
    this.e92_1 = coerceToInlineType;
    this.f92_1 = toString(body);
    if (!(this.e92_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!this.e92_1.r8d()) {
        // Inline function 'kotlin.require.<anonymous>' call
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  protoOf(JsonLiteral).b92 = function () {
    return this.f92_1;
  };
  protoOf(JsonLiteral).toString = function () {
    var tmp;
    if (this.d92_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.JsonLiteral.toString.<anonymous>' call
      printQuoted(this_0, this.f92_1);
      tmp = this_0.toString();
    } else {
      tmp = this.f92_1;
    }
    return tmp;
  };
  protoOf(JsonLiteral).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof JsonLiteral))
      THROW_CCE();
    if (!(this.d92_1 === other.d92_1))
      return false;
    if (!(this.f92_1 === other.f92_1))
      return false;
    return true;
  };
  protoOf(JsonLiteral).hashCode = function () {
    var result = getBooleanHashCode(this.d92_1);
    result = imul(31, result) + getStringHashCode(this.f92_1) | 0;
    return result;
  };
  function Companion_2() {
  }
  var Companion_instance_3;
  function Companion_getInstance_7() {
    return Companion_instance_3;
  }
  function JsonArray(content) {
    JsonElement.call(this);
    this.g92_1 = content;
  }
  protoOf(JsonArray).m = function () {
    return this.g92_1.m();
  };
  protoOf(JsonArray).h92 = function (element) {
    return this.g92_1.s(element);
  };
  protoOf(JsonArray).s = function (element) {
    if (!(element instanceof JsonElement))
      return false;
    return this.h92(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).i92 = function (elements) {
    return this.g92_1.t(elements);
  };
  protoOf(JsonArray).t = function (elements) {
    return this.i92(elements);
  };
  protoOf(JsonArray).n = function (index) {
    return this.g92_1.n(index);
  };
  protoOf(JsonArray).j92 = function (element) {
    return this.g92_1.p(element);
  };
  protoOf(JsonArray).p = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.j92(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).u = function () {
    return this.g92_1.u();
  };
  protoOf(JsonArray).o = function () {
    return this.g92_1.o();
  };
  protoOf(JsonArray).q = function (index) {
    return this.g92_1.q(index);
  };
  protoOf(JsonArray).r = function (fromIndex, toIndex) {
    return this.g92_1.r(fromIndex, toIndex);
  };
  protoOf(JsonArray).equals = function (other) {
    return equals(this.g92_1, other);
  };
  protoOf(JsonArray).hashCode = function () {
    return hashCode(this.g92_1);
  };
  protoOf(JsonArray).toString = function () {
    return joinToString(this.g92_1, ',', '[', ']');
  };
  function get_booleanOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toBooleanStrictOrNull_0(_this__u8e3s4.b92());
  }
  function get_int(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.mapExceptions' call
    var tmp;
    try {
      // Inline function 'kotlinx.serialization.json.<get-int>.<anonymous>' call
      tmp = (new StringJsonLexer(_this__u8e3s4.b92())).k92();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof JsonDecodingException) {
        var e = $p;
        throw NumberFormatException_init_$Create$(e.message);
      } else {
        throw $p;
      }
    }
    var result = tmp;
    // Inline function 'kotlin.ranges.contains' call
    var this_0 = numberRangeToNumber(IntCompanionObject_instance.MIN_VALUE, IntCompanionObject_instance.MAX_VALUE);
    if (!contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result))
      throw NumberFormatException_init_$Create$(_this__u8e3s4.b92() + ' is not an Int');
    return result.fa();
  }
  function get_long(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.mapExceptions' call
    var tmp;
    try {
      // Inline function 'kotlinx.serialization.json.<get-long>.<anonymous>' call
      tmp = (new StringJsonLexer(_this__u8e3s4.b92())).k92();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof JsonDecodingException) {
        var e = $p;
        throw NumberFormatException_init_$Create$(e.message);
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function get_float(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlin.text.toFloat' call
    var this_0 = _this__u8e3s4.b92();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toDouble(this_0);
  }
  function get_double(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toDouble(_this__u8e3s4.b92());
  }
  function get_contentOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.b92();
    }
    return tmp;
  }
  function get_jsonPrimitive(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonPrimitive ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__u8e3s4, 'JsonPrimitive');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function error(_this__u8e3s4, element) {
    _init_properties_JsonElement_kt__7cbdc2();
    throw IllegalArgumentException_init_$Create$('Element ' + getKClassFromExpression(_this__u8e3s4) + ' is not a ' + element);
  }
  var properties_initialized_JsonElement_kt_abxy8s;
  function _init_properties_JsonElement_kt__7cbdc2() {
    if (!properties_initialized_JsonElement_kt_abxy8s) {
      properties_initialized_JsonElement_kt_abxy8s = true;
      jsonUnquotedLiteralDescriptor = InlinePrimitiveDescriptor('kotlinx.serialization.json.JsonUnquotedLiteral', serializer(StringCompanionObject_instance));
    }
  }
  function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
    $this$buildSerialDescriptor.t8c('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
    $this$buildSerialDescriptor.t8c('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
    $this$buildSerialDescriptor.t8c('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
    $this$buildSerialDescriptor.t8c('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
    $this$buildSerialDescriptor.t8c('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
    return Unit_instance;
  }
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return JsonPrimitiveSerializer_getInstance().l92_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return JsonNullSerializer_getInstance().m92_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return JsonLiteralSerializer_getInstance().n92_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return JsonObjectSerializer_getInstance().o92_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return JsonArraySerializer_getInstance().p92_1;
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.q92_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
  }
  protoOf(JsonElementSerializer).i8c = function () {
    return this.q92_1;
  };
  protoOf(JsonElementSerializer).r92 = function (encoder, value) {
    verify(encoder);
    if (value instanceof JsonPrimitive) {
      encoder.y8g(JsonPrimitiveSerializer_getInstance(), value);
    } else {
      if (value instanceof JsonObject) {
        encoder.y8g(JsonObjectSerializer_getInstance(), value);
      } else {
        if (value instanceof JsonArray) {
          encoder.y8g(JsonArraySerializer_getInstance(), value);
        }
      }
    }
  };
  protoOf(JsonElementSerializer).j8c = function (encoder, value) {
    return this.r92(encoder, value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(JsonElementSerializer).k8c = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.x91();
  };
  var JsonElementSerializer_instance;
  function JsonElementSerializer_getInstance() {
    if (JsonElementSerializer_instance == null)
      new JsonElementSerializer();
    return JsonElementSerializer_instance;
  }
  function JsonObjectDescriptor() {
    JsonObjectDescriptor_instance = this;
    this.s92_1 = MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).i8c();
    this.t92_1 = 'kotlinx.serialization.json.JsonObject';
  }
  protoOf(JsonObjectDescriptor).p8d = function () {
    return this.s92_1.p8d();
  };
  protoOf(JsonObjectDescriptor).q8d = function () {
    return this.s92_1.q8d();
  };
  protoOf(JsonObjectDescriptor).r8d = function () {
    return this.s92_1.r8d();
  };
  protoOf(JsonObjectDescriptor).k8d = function () {
    return this.s92_1.k8d();
  };
  protoOf(JsonObjectDescriptor).s8d = function () {
    return this.s92_1.s8d();
  };
  protoOf(JsonObjectDescriptor).t8d = function (index) {
    return this.s92_1.t8d(index);
  };
  protoOf(JsonObjectDescriptor).u8d = function (index) {
    return this.s92_1.u8d(index);
  };
  protoOf(JsonObjectDescriptor).v8d = function (name) {
    return this.s92_1.v8d(name);
  };
  protoOf(JsonObjectDescriptor).w8d = function (index) {
    return this.s92_1.w8d(index);
  };
  protoOf(JsonObjectDescriptor).x8d = function (index) {
    return this.s92_1.x8d(index);
  };
  protoOf(JsonObjectDescriptor).o8d = function () {
    return this.t92_1;
  };
  var JsonObjectDescriptor_instance;
  function JsonObjectDescriptor_getInstance() {
    if (JsonObjectDescriptor_instance == null)
      new JsonObjectDescriptor();
    return JsonObjectDescriptor_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this.o92_1 = JsonObjectDescriptor_getInstance();
  }
  protoOf(JsonObjectSerializer).i8c = function () {
    return this.o92_1;
  };
  protoOf(JsonObjectSerializer).u92 = function (encoder, value) {
    verify(encoder);
    MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).j8c(encoder, value);
  };
  protoOf(JsonObjectSerializer).j8c = function (encoder, value) {
    return this.u92(encoder, value instanceof JsonObject ? value : THROW_CCE());
  };
  protoOf(JsonObjectSerializer).k8c = function (decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).k8c(decoder));
  };
  var JsonObjectSerializer_instance;
  function JsonObjectSerializer_getInstance() {
    if (JsonObjectSerializer_instance == null)
      new JsonObjectSerializer();
    return JsonObjectSerializer_instance;
  }
  function JsonArrayDescriptor() {
    JsonArrayDescriptor_instance = this;
    this.v92_1 = ListSerializer(JsonElementSerializer_getInstance()).i8c();
    this.w92_1 = 'kotlinx.serialization.json.JsonArray';
  }
  protoOf(JsonArrayDescriptor).p8d = function () {
    return this.v92_1.p8d();
  };
  protoOf(JsonArrayDescriptor).q8d = function () {
    return this.v92_1.q8d();
  };
  protoOf(JsonArrayDescriptor).r8d = function () {
    return this.v92_1.r8d();
  };
  protoOf(JsonArrayDescriptor).k8d = function () {
    return this.v92_1.k8d();
  };
  protoOf(JsonArrayDescriptor).s8d = function () {
    return this.v92_1.s8d();
  };
  protoOf(JsonArrayDescriptor).t8d = function (index) {
    return this.v92_1.t8d(index);
  };
  protoOf(JsonArrayDescriptor).u8d = function (index) {
    return this.v92_1.u8d(index);
  };
  protoOf(JsonArrayDescriptor).v8d = function (name) {
    return this.v92_1.v8d(name);
  };
  protoOf(JsonArrayDescriptor).w8d = function (index) {
    return this.v92_1.w8d(index);
  };
  protoOf(JsonArrayDescriptor).x8d = function (index) {
    return this.v92_1.x8d(index);
  };
  protoOf(JsonArrayDescriptor).o8d = function () {
    return this.w92_1;
  };
  var JsonArrayDescriptor_instance;
  function JsonArrayDescriptor_getInstance() {
    if (JsonArrayDescriptor_instance == null)
      new JsonArrayDescriptor();
    return JsonArrayDescriptor_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this.p92_1 = JsonArrayDescriptor_getInstance();
  }
  protoOf(JsonArraySerializer).i8c = function () {
    return this.p92_1;
  };
  protoOf(JsonArraySerializer).x92 = function (encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).j8c(encoder, value);
  };
  protoOf(JsonArraySerializer).j8c = function (encoder, value) {
    return this.x92(encoder, value instanceof JsonArray ? value : THROW_CCE());
  };
  protoOf(JsonArraySerializer).k8c = function (decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).k8c(decoder));
  };
  var JsonArraySerializer_instance;
  function JsonArraySerializer_getInstance() {
    if (JsonArraySerializer_instance == null)
      new JsonArraySerializer();
    return JsonArraySerializer_instance;
  }
  function defer(deferred) {
    return new defer$1(deferred);
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this;
    this.l92_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
  }
  protoOf(JsonPrimitiveSerializer).i8c = function () {
    return this.l92_1;
  };
  protoOf(JsonPrimitiveSerializer).y92 = function (encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      encoder.y8g(JsonNullSerializer_getInstance(), JsonNull_getInstance());
      tmp = Unit_instance;
    } else {
      var tmp_0 = JsonLiteralSerializer_getInstance();
      encoder.y8g(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(JsonPrimitiveSerializer).j8c = function (encoder, value) {
    return this.y92(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  };
  protoOf(JsonPrimitiveSerializer).k8c = function (decoder) {
    var result = asJsonDecoder(decoder).x91();
    if (!(result instanceof JsonPrimitive))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonPrimitive, had ' + getKClassFromExpression(result), toString(result));
    return result;
  };
  var JsonPrimitiveSerializer_instance;
  function JsonPrimitiveSerializer_getInstance() {
    if (JsonPrimitiveSerializer_instance == null)
      new JsonPrimitiveSerializer();
    return JsonPrimitiveSerializer_instance;
  }
  function JsonNullSerializer() {
    JsonNullSerializer_instance = this;
    this.m92_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
  }
  protoOf(JsonNullSerializer).i8c = function () {
    return this.m92_1;
  };
  protoOf(JsonNullSerializer).z92 = function (encoder, value) {
    verify(encoder);
    encoder.c8g();
  };
  protoOf(JsonNullSerializer).j8c = function (encoder, value) {
    return this.z92(encoder, value instanceof JsonNull ? value : THROW_CCE());
  };
  protoOf(JsonNullSerializer).k8c = function (decoder) {
    verify_0(decoder);
    if (decoder.t8e()) {
      throw new JsonDecodingException("Expected 'null' literal");
    }
    decoder.u8e();
    return JsonNull_getInstance();
  };
  var JsonNullSerializer_instance;
  function JsonNullSerializer_getInstance() {
    if (JsonNullSerializer_instance == null)
      new JsonNullSerializer();
    return JsonNullSerializer_instance;
  }
  function JsonLiteralSerializer() {
    JsonLiteralSerializer_instance = this;
    this.n92_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  protoOf(JsonLiteralSerializer).i8c = function () {
    return this.n92_1;
  };
  protoOf(JsonLiteralSerializer).a93 = function (encoder, value) {
    verify(encoder);
    if (value.d92_1) {
      return encoder.l8g(value.f92_1);
    }
    if (!(value.e92_1 == null)) {
      return encoder.m8g(value.e92_1).l8g(value.f92_1);
    }
    var tmp0_safe_receiver = toLongOrNull(value.f92_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.h8g(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = toULongOrNull(value.f92_1);
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp_0 = tmp1_safe_receiver;
      // Inline function 'kotlin.contracts.contract' call
      var it = (tmp_0 == null ? null : new ULong(tmp_0)).yj_1;
      var tmp_1 = encoder.m8g(serializer_0(Companion_getInstance()).i8c());
      // Inline function 'kotlin.ULong.toLong' call
      var tmp$ret$1 = _ULong___get_data__impl__fggpzb(it);
      tmp_1.h8g(tmp$ret$1);
      return Unit_instance;
    }
    var tmp2_safe_receiver = toDoubleOrNull(value.f92_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.j8g(tmp2_safe_receiver);
    }
    var tmp3_safe_receiver = toBooleanStrictOrNull(value.f92_1);
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.d8g(tmp3_safe_receiver);
    }
    encoder.l8g(value.f92_1);
  };
  protoOf(JsonLiteralSerializer).j8c = function (encoder, value) {
    return this.a93(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  };
  protoOf(JsonLiteralSerializer).k8c = function (decoder) {
    var result = asJsonDecoder(decoder).x91();
    if (!(result instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonLiteral, had ' + getKClassFromExpression(result), toString(result));
    return result;
  };
  var JsonLiteralSerializer_instance;
  function JsonLiteralSerializer_getInstance() {
    if (JsonLiteralSerializer_instance == null)
      new JsonLiteralSerializer();
    return JsonLiteralSerializer_instance;
  }
  function verify(encoder) {
    asJsonEncoder(encoder);
  }
  function asJsonDecoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonDecoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Decoder to be JsonDecoder, got ' + getKClassFromExpression(_this__u8e3s4)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function verify_0(decoder) {
    asJsonDecoder(decoder);
  }
  function asJsonEncoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonEncoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Encoder to be JsonEncoder, got ' + getKClassFromExpression(_this__u8e3s4)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_original__l7ku1m($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.b93_1;
    original$factory();
    return this_0.q2();
  }
  function defer$1($deferred) {
    this.b93_1 = lazy_0($deferred);
  }
  protoOf(defer$1).o8d = function () {
    return _get_original__l7ku1m(this).o8d();
  };
  protoOf(defer$1).s8d = function () {
    return _get_original__l7ku1m(this).s8d();
  };
  protoOf(defer$1).q8d = function () {
    return _get_original__l7ku1m(this).q8d();
  };
  protoOf(defer$1).w8d = function (index) {
    return _get_original__l7ku1m(this).w8d(index);
  };
  protoOf(defer$1).v8d = function (name) {
    return _get_original__l7ku1m(this).v8d(name);
  };
  protoOf(defer$1).t8d = function (index) {
    return _get_original__l7ku1m(this).t8d(index);
  };
  protoOf(defer$1).u8d = function (index) {
    return _get_original__l7ku1m(this).u8d(index);
  };
  protoOf(defer$1).x8d = function (index) {
    return _get_original__l7ku1m(this).x8d(index);
  };
  function original$factory() {
    return getPropertyCallableRef('original', 1, KProperty1, function (receiver) {
      return _get_original__l7ku1m(receiver);
    }, null);
  }
  function JsonEncoder() {
  }
  function Composer(writer) {
    this.c93_1 = writer;
    this.d93_1 = true;
  }
  protoOf(Composer).e93 = function () {
    this.d93_1 = true;
  };
  protoOf(Composer).f93 = function () {
    return Unit_instance;
  };
  protoOf(Composer).g93 = function () {
    this.d93_1 = false;
  };
  protoOf(Composer).h93 = function () {
    return Unit_instance;
  };
  protoOf(Composer).i93 = function (v) {
    return this.c93_1.j93(v);
  };
  protoOf(Composer).k93 = function (v) {
    return this.c93_1.l93(v);
  };
  protoOf(Composer).m93 = function (v) {
    return this.c93_1.l93(v.toString());
  };
  protoOf(Composer).n93 = function (v) {
    return this.c93_1.l93(v.toString());
  };
  protoOf(Composer).o93 = function (v) {
    return this.c93_1.p93(toLong(v));
  };
  protoOf(Composer).q93 = function (v) {
    return this.c93_1.p93(toLong(v));
  };
  protoOf(Composer).r93 = function (v) {
    return this.c93_1.p93(toLong(v));
  };
  protoOf(Composer).s93 = function (v) {
    return this.c93_1.p93(v);
  };
  protoOf(Composer).t93 = function (v) {
    return this.c93_1.l93(v.toString());
  };
  protoOf(Composer).u93 = function (value) {
    return this.c93_1.v93(value);
  };
  function Composer_0(sb, json) {
    return json.a90_1.l91_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerForUnsignedNumbers(writer, forceQuoting) {
    Composer.call(this, writer);
    this.y93_1 = forceQuoting;
  }
  protoOf(ComposerForUnsignedNumbers).r93 = function (v) {
    if (this.y93_1) {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
      this.u93(UInt__toString_impl_dbgl21(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
      this.k93(UInt__toString_impl_dbgl21(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).s93 = function (v) {
    if (this.y93_1) {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$0 = _ULong___init__impl__c78o9k(v);
      this.u93(ULong__toString_impl_f9au7k(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$1 = _ULong___init__impl__c78o9k(v);
      this.k93(ULong__toString_impl_f9au7k(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).o93 = function (v) {
    if (this.y93_1) {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
      this.u93(UByte__toString_impl_v72jg(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
      this.k93(UByte__toString_impl_v72jg(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).q93 = function (v) {
    if (this.y93_1) {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$0 = _UShort___init__impl__jigrne(v);
      this.u93(UShort__toString_impl_edaoee(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$1 = _UShort___init__impl__jigrne(v);
      this.k93(UShort__toString_impl_edaoee(tmp$ret$1));
    }
  };
  function ComposerForUnquotedLiterals(writer, forceQuoting) {
    Composer.call(this, writer);
    this.b94_1 = forceQuoting;
  }
  protoOf(ComposerForUnquotedLiterals).u93 = function (value) {
    if (this.b94_1) {
      protoOf(Composer).u93.call(this, value);
    } else {
      protoOf(Composer).k93.call(this, value);
    }
  };
  function ComposerWithPrettyPrint(writer, json) {
    Composer.call(this, writer);
    this.e94_1 = json;
    this.f94_1 = 0;
  }
  protoOf(ComposerWithPrettyPrint).e93 = function () {
    this.d93_1 = true;
    this.f94_1 = this.f94_1 + 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).f93 = function () {
    this.f94_1 = this.f94_1 - 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).g93 = function () {
    this.d93_1 = false;
    this.k93('\n');
    // Inline function 'kotlin.repeat' call
    var times = this.f94_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.ComposerWithPrettyPrint.nextItem.<anonymous>' call
        this.k93(this.e94_1.a90_1.n91_1);
      }
       while (inductionVariable < times);
  };
  protoOf(ComposerWithPrettyPrint).h93 = function () {
    this.i93(_Char___init__impl__6a9atx(32));
  };
  function readIfAbsent($this, descriptor, index) {
    $this.h94_1 = !descriptor.x8d(index) ? descriptor.u8d(index).k8d() : false;
    return $this.h94_1;
  }
  function JsonElementMarker$readIfAbsent$ref($boundThis) {
    var l = function (p0, p1) {
      return readIfAbsent($boundThis, p0, p1);
    };
    l.callableName = 'readIfAbsent';
    return l;
  }
  function JsonElementMarker(descriptor) {
    var tmp = this;
    tmp.g94_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.h94_1 = false;
  }
  protoOf(JsonElementMarker).i8l = function (index) {
    this.g94_1.i8l(index);
  };
  protoOf(JsonElementMarker).j8l = function () {
    return this.g94_1.j8l();
  };
  function invalidTrailingComma(_this__u8e3s4, entity) {
    entity = entity === VOID ? 'object' : entity;
    _this__u8e3s4.i94('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.m90_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingCommas = true' in 'Json {}' builder to support them.");
  }
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    _this__u8e3s4.j94('Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification', VOID, get_specialFlowingValuesHint());
  }
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.o8d() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.s8d() + "'.\n") + get_allowStructuredMapKeysHint());
  }
  function JsonDecodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonDecodingException);
  }
  function JsonDecodingException_0(offset, message, input) {
    return JsonDecodingException_1(offset, message + '\nJSON input: ' + minify(input, offset));
  }
  function InvalidFloatingPointDecoded(value, key, output) {
    return JsonDecodingException_1(-1, unexpectedFpErrorMessage(value, key, output));
  }
  function JsonDecodingException_1(offset, message) {
    return new JsonDecodingException(offset >= 0 ? 'Unexpected JSON token at offset ' + offset + ': ' + message : message);
  }
  function UnknownKeyException(key, input) {
    return JsonDecodingException_1(-1, "Encountered an unknown key '" + key + "'.\n" + (get_ignoreUnknownKeysHint() + '\n') + ('Current input: ' + minify(input)));
  }
  function InvalidFloatingPointEncoded(value, output) {
    return new JsonEncodingException('Unexpected special floating-point value ' + toString(value) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + (get_specialFlowingValuesHint() + '\n') + ('Current output: ' + minify(output)));
  }
  function JsonException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, JsonException);
  }
  function unexpectedFpErrorMessage(value, key, output) {
    return 'Unexpected special floating-point value ' + toString(value) + ' with key ' + key + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + (get_specialFlowingValuesHint() + '\n') + ('Current output: ' + minify(output));
  }
  function minify(_this__u8e3s4, offset) {
    offset = offset === VOID ? -1 : offset;
    if (charSequenceLength(_this__u8e3s4) < 200)
      return _this__u8e3s4;
    if (offset === -1) {
      var start = charSequenceLength(_this__u8e3s4) - 60 | 0;
      if (start <= 0)
        return _this__u8e3s4;
      // Inline function 'kotlin.text.substring' call
      var endIndex = charSequenceLength(_this__u8e3s4);
      return '.....' + toString(charSequenceSubSequence(_this__u8e3s4, start, endIndex));
    }
    var start_0 = offset - 30 | 0;
    var end = offset + 30 | 0;
    var prefix = start_0 <= 0 ? '' : '.....';
    var suffix = end >= charSequenceLength(_this__u8e3s4) ? '' : '.....';
    // Inline function 'kotlin.text.substring' call
    var startIndex = coerceAtLeast(start_0, 0);
    var endIndex_0 = coerceAtMost(end, charSequenceLength(_this__u8e3s4));
    return prefix + toString(charSequenceSubSequence(_this__u8e3s4, startIndex, endIndex_0)) + suffix;
  }
  function get_JsonDeserializationNamesKey() {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return JsonDeserializationNamesKey;
  }
  var JsonDeserializationNamesKey;
  function get_JsonSerializationNamesKey() {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return JsonSerializationNamesKey;
  }
  var JsonSerializationNamesKey;
  function getJsonNameIndex(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    if (decodeCaseInsensitive(json, _this__u8e3s4)) {
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = name.toLowerCase();
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, tmp$ret$1);
    }
    var strategy = namingStrategy(_this__u8e3s4, json);
    if (!(strategy == null))
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
    var index = _this__u8e3s4.v8d(name);
    if (!(index === -3))
      return index;
    if (!json.a90_1.s91_1)
      return index;
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  }
  function getJsonElementName(_this__u8e3s4, json, index) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var strategy = namingStrategy(_this__u8e3s4, json);
    return strategy == null ? _this__u8e3s4.w8d(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
  }
  function namingStrategy(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return equals(_this__u8e3s4.s8d(), CLASS_getInstance()) ? json.a90_1.t91_1 : null;
  }
  function deserializationNamesMap(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(_this__u8e3s4);
    var tmp_0 = get_JsonDeserializationNamesKey();
    return tmp.l94(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
  }
  function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return _this__u8e3s4.a90_1.u91_1 ? equals(descriptor.s8d(), ENUM_getInstance()) : false;
  }
  function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).x2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializationNamesIndices(_this__u8e3s4, json, strategy) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(json);
    var tmp_0 = get_JsonSerializationNamesKey();
    return tmp.l94(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
  }
  function buildDeserializationNamesMap(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var builder = LinkedHashMap_init_$Create$();
    var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
    var strategyForClasses = namingStrategy(_this__u8e3s4, json);
    var inductionVariable = 0;
    var last = _this__u8e3s4.q8d();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.filterIsInstance' call
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var this_0 = _this__u8e3s4.t8d(i);
        var destination = ArrayList_init_$Create$();
        var tmp0_iterator = this_0.o();
        while (tmp0_iterator.d1()) {
          var element = tmp0_iterator.f1();
          if (element instanceof JsonNames) {
            destination.a1(element);
          }
        }
        var tmp1_safe_receiver = singleOrNull(destination);
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.m94_1;
        if (tmp2_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.collections.forEach' call
          var inductionVariable_0 = 0;
          var last_0 = tmp2_safe_receiver.length;
          while (inductionVariable_0 < last_0) {
            var element_0 = tmp2_safe_receiver[inductionVariable_0];
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'kotlinx.serialization.json.internal.buildDeserializationNamesMap.<anonymous>' call
            var tmp;
            if (useLowercaseEnums) {
              // Inline function 'kotlin.text.lowercase' call
              // Inline function 'kotlin.js.asDynamic' call
              tmp = element_0.toLowerCase();
            } else {
              tmp = element_0;
            }
            buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, tmp, i);
          }
        }
        var tmp_0;
        if (useLowercaseEnums) {
          // Inline function 'kotlin.text.lowercase' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_0 = _this__u8e3s4.w8d(i).toLowerCase();
        } else if (!(strategyForClasses == null)) {
          tmp_0 = strategyForClasses.n94(_this__u8e3s4, i, _this__u8e3s4.w8d(i));
        } else {
          tmp_0 = null;
        }
        var nameToPut = tmp_0;
        if (nameToPut == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, nameToPut, i);
        }
      }
       while (inductionVariable < last);
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp_1;
    if (builder.u()) {
      // Inline function 'kotlinx.serialization.json.internal.buildDeserializationNamesMap.<anonymous>' call
      tmp_1 = emptyMap();
    } else {
      tmp_1 = builder;
    }
    return tmp_1;
  }
  function buildDeserializationNamesMap$putOrThrow(_this__u8e3s4, $this_buildDeserializationNamesMap, name, index) {
    var entity = equals($this_buildDeserializationNamesMap.s8d(), ENUM_getInstance()) ? 'enum value' : 'property';
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(_this__u8e3s4, Map) ? _this__u8e3s4 : THROW_CCE()).u2(name)) {
      throw new JsonException("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.w8d(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.w8d(getValue(_this__u8e3s4, name)) + ' in ' + $this_buildDeserializationNamesMap));
    }
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.n2(name, index);
  }
  function deserializationNamesMap$lambda($descriptor, $this_deserializationNamesMap) {
    return function () {
      return buildDeserializationNamesMap($descriptor, $this_deserializationNamesMap);
    };
  }
  function serializationNamesIndices$lambda($this_serializationNamesIndices, $strategy) {
    return function () {
      var tmp = 0;
      var tmp_0 = $this_serializationNamesIndices.q8d();
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = fillArrayVal(Array(tmp_0), null);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var baseName = $this_serializationNamesIndices.w8d(tmp_2);
        tmp_1[tmp_2] = $strategy.n94($this_serializationNamesIndices, tmp_2, baseName);
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  var properties_initialized_JsonNamesMap_kt_ljpf42;
  function _init_properties_JsonNamesMap_kt__cbbp0k() {
    if (!properties_initialized_JsonNamesMap_kt_ljpf42) {
      properties_initialized_JsonNamesMap_kt_ljpf42 = true;
      JsonDeserializationNamesKey = new Key();
      JsonSerializationNamesKey = new Key();
    }
  }
  function Tombstone() {
  }
  var Tombstone_instance;
  function Tombstone_getInstance() {
    return Tombstone_instance;
  }
  function resize($this) {
    var newSize = imul($this.q94_1, 2);
    $this.o94_1 = copyOf($this.o94_1, newSize);
    $this.p94_1 = copyOf_0($this.p94_1, newSize);
  }
  function JsonPath() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.o94_1 = fillArrayVal(Array(8), null);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.p94_1 = tmp_2;
    this.q94_1 = -1;
  }
  protoOf(JsonPath).r94 = function (sd) {
    this.q94_1 = this.q94_1 + 1 | 0;
    var depth = this.q94_1;
    if (depth === this.o94_1.length) {
      resize(this);
    }
    this.o94_1[depth] = sd;
  };
  protoOf(JsonPath).s94 = function (index) {
    this.p94_1[this.q94_1] = index;
  };
  protoOf(JsonPath).t94 = function (key) {
    var tmp;
    if (!(this.p94_1[this.q94_1] === -2)) {
      this.q94_1 = this.q94_1 + 1 | 0;
      tmp = this.q94_1 === this.o94_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.o94_1[this.q94_1] = key;
    this.p94_1[this.q94_1] = -2;
  };
  protoOf(JsonPath).u94 = function () {
    if (this.p94_1[this.q94_1] === -2) {
      this.o94_1[this.q94_1] = Tombstone_instance;
    }
  };
  protoOf(JsonPath).v94 = function () {
    var depth = this.q94_1;
    if (this.p94_1[depth] === -2) {
      this.p94_1[depth] = -1;
      this.q94_1 = this.q94_1 - 1 | 0;
    }
    if (!(this.q94_1 === -1)) {
      this.q94_1 = this.q94_1 - 1 | 0;
    }
  };
  protoOf(JsonPath).w94 = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>' call
    this_0.x5('$');
    // Inline function 'kotlin.repeat' call
    var times = this.q94_1 + 1 | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>.<anonymous>' call
        var element = this.o94_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.s8d(), LIST_getInstance())) {
            if (!(this.p94_1[index] === -1)) {
              this_0.x5('[');
              this_0.p8(this.p94_1[index]);
              this_0.x5(']');
            }
          } else {
            var idx = this.p94_1[index];
            if (idx >= 0) {
              this_0.x5('.');
              this_0.x5(element.w8d(idx));
            }
          }
        } else {
          if (!(element === Tombstone_instance)) {
            this_0.x5('[');
            this_0.x5("'");
            this_0.w5(element);
            this_0.x5("'");
            this_0.x5(']');
          }
        }
      }
       while (inductionVariable < times);
    return this_0.toString();
  };
  protoOf(JsonPath).toString = function () {
    return this.w94();
  };
  function encodeByWriter(json, writer, serializer, value) {
    var tmp = WriteMode_OBJ_getInstance();
    // Inline function 'kotlin.arrayOfNulls' call
    var size = get_entries().m();
    var tmp$ret$0 = fillArrayVal(Array(size), null);
    var encoder = StreamingJsonEncoder_init_$Create$(writer, json, tmp, tmp$ret$0);
    encoder.y8g(serializer, value);
  }
  function readObject($this) {
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.f95_1.j95(get_TC_BEGIN_OBJ());
    if ($this.f95_1.k95() === get_TC_COMMA()) {
      $this.f95_1.j94('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.linkedMapOf' call
    var result = LinkedHashMap_init_$Create$();
    $l$loop: while ($this.f95_1.l95()) {
      var key = $this.g95_1 ? $this.f95_1.n95() : $this.f95_1.m95();
      $this.f95_1.j95(get_TC_COLON());
      // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObject.<anonymous>' call
      var element = $this.o95();
      // Inline function 'kotlin.collections.set' call
      result.n2(key, element);
      lastToken = $this.f95_1.p95();
      var tmp0_subject = lastToken;
      if (tmp0_subject !== get_TC_COMMA())
        if (tmp0_subject === get_TC_END_OBJ())
          break $l$loop;
        else {
          $this.f95_1.j94('Expected end of the object or comma');
        }
    }
    if (lastToken === get_TC_BEGIN_OBJ()) {
      $this.f95_1.j95(get_TC_END_OBJ());
    } else if (lastToken === get_TC_COMMA()) {
      if (!$this.h95_1) {
        invalidTrailingComma($this.f95_1);
      }
      $this.f95_1.j95(get_TC_END_OBJ());
    }
    return new JsonObject(result);
  }
  function readObject_0(_this__u8e3s4, $this, $completion) {
    var tmp = new $readObjectCOROUTINE$0($this, _this__u8e3s4, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  }
  function readArray($this) {
    var lastToken = $this.f95_1.p95();
    if ($this.f95_1.k95() === get_TC_COMMA()) {
      $this.f95_1.j94('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.arrayListOf' call
    var result = ArrayList_init_$Create$();
    while ($this.f95_1.l95()) {
      var element = $this.o95();
      result.a1(element);
      lastToken = $this.f95_1.p95();
      if (!(lastToken === get_TC_COMMA())) {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var this_0 = $this.f95_1;
        var condition = lastToken === get_TC_END_LIST();
        var position = this_0.m90_1;
        if (!condition) {
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readArray.<anonymous>' call
          var tmp$ret$1 = 'Expected end of the array or comma';
          this_0.j94(tmp$ret$1, position);
        }
      }
    }
    if (lastToken === get_TC_BEGIN_LIST()) {
      $this.f95_1.j95(get_TC_END_LIST());
    } else if (lastToken === get_TC_COMMA()) {
      if (!$this.h95_1) {
        invalidTrailingComma($this.f95_1, 'array');
      }
      $this.f95_1.j95(get_TC_END_LIST());
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.g95_1 ? true : !isString) {
      tmp = $this.f95_1.n95();
    } else {
      tmp = $this.f95_1.m95();
    }
    var string = tmp;
    if (!isString ? string === get_NULL() : false)
      return JsonNull_getInstance();
    return new JsonLiteral(string, isString);
  }
  function readDeepRecursive($this) {
    return invoke(new DeepRecursiveFunction(JsonTreeReader$readDeepRecursive$slambda_0($this, null)), Unit_instance);
  }
  function JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation) {
    this.m96_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonTreeReader$readDeepRecursive$slambda).r96 = function ($this$$receiver, it, $completion) {
    var tmp = this.s96($this$$receiver, it, $completion);
    tmp.cc_1 = Unit_instance;
    tmp.dc_1 = null;
    return tmp.mc();
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).oi = function (p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.r96(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 3;
            this.p96_1 = this.m96_1.f95_1.k95();
            if (this.p96_1 === get_TC_STRING()) {
              this.q96_1 = readValue(this.m96_1, true);
              this.ac_1 = 2;
              continue $sm;
            } else {
              if (this.p96_1 === get_TC_OTHER()) {
                this.q96_1 = readValue(this.m96_1, false);
                this.ac_1 = 2;
                continue $sm;
              } else {
                if (this.p96_1 === get_TC_BEGIN_OBJ()) {
                  this.ac_1 = 1;
                  suspendResult = readObject_0(this.n96_1, this.m96_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.p96_1 === get_TC_BEGIN_LIST()) {
                    this.q96_1 = readArray(this.m96_1);
                    this.ac_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.m96_1.f95_1.j94("Can't begin reading element, unexpected token");
                  }
                }
              }
            }

            break;
          case 1:
            this.q96_1 = suspendResult;
            this.ac_1 = 2;
            continue $sm;
          case 2:
            return this.q96_1;
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
  protoOf(JsonTreeReader$readDeepRecursive$slambda).s96 = function ($this$$receiver, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.m96_1, completion);
    i.n96_1 = $this$$receiver;
    i.o96_1 = it;
    return i;
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$$receiver, it, $completion) {
      return i.r96($this$$receiver, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$0(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y95_1 = _this__u8e3s4;
    this.z95_1 = _this__u8e3s4_0;
  }
  protoOf($readObjectCOROUTINE$0).mc = function () {
    var suspendResult = this.cc_1;
    $sm: do
      try {
        var tmp = this.ac_1;
        switch (tmp) {
          case 0:
            this.bc_1 = 5;
            var tmp_0 = this;
            tmp_0.a96_1 = this.y95_1;
            this.b96_1 = this.a96_1.f95_1.j95(get_TC_BEGIN_OBJ());
            if (this.a96_1.f95_1.k95() === get_TC_COMMA()) {
              this.a96_1.f95_1.j94('Unexpected leading comma');
            }

            var tmp_1 = this;
            tmp_1.c96_1 = LinkedHashMap_init_$Create$();
            this.ac_1 = 1;
            continue $sm;
          case 1:
            if (!this.a96_1.f95_1.l95()) {
              this.ac_1 = 4;
              continue $sm;
            }

            this.d96_1 = this.a96_1.g95_1 ? this.a96_1.f95_1.n95() : this.a96_1.f95_1.m95();
            this.a96_1.f95_1.j95(get_TC_COLON());
            this.ac_1 = 2;
            suspendResult = this.z95_1.gi(Unit_instance, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            var this_0 = this.c96_1;
            var key = this.d96_1;
            this_0.n2(key, element);
            this.b96_1 = this.a96_1.f95_1.p95();
            var tmp0_subject = this.b96_1;
            if (tmp0_subject === get_TC_COMMA()) {
              this.ac_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === get_TC_END_OBJ()) {
                this.ac_1 = 4;
                continue $sm;
              } else {
                this.a96_1.f95_1.j94('Expected end of the object or comma');
              }
            }

            break;
          case 3:
            this.ac_1 = 1;
            continue $sm;
          case 4:
            if (this.b96_1 === get_TC_BEGIN_OBJ()) {
              this.a96_1.f95_1.j95(get_TC_END_OBJ());
            } else if (this.b96_1 === get_TC_COMMA()) {
              if (!this.a96_1.h95_1) {
                invalidTrailingComma(this.a96_1.f95_1);
              }
              this.a96_1.f95_1.j95(get_TC_END_OBJ());
            }

            return new JsonObject(this.c96_1);
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
  function JsonTreeReader(configuration, lexer) {
    this.f95_1 = lexer;
    this.g95_1 = configuration.j91_1;
    this.h95_1 = configuration.v91_1;
    this.i95_1 = 0;
  }
  protoOf(JsonTreeReader).o95 = function () {
    var token = this.f95_1.k95();
    var tmp;
    if (token === get_TC_STRING()) {
      tmp = readValue(this, true);
    } else if (token === get_TC_OTHER()) {
      tmp = readValue(this, false);
    } else if (token === get_TC_BEGIN_OBJ()) {
      var tmp_0;
      this.i95_1 = this.i95_1 + 1 | 0;
      if (this.i95_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      this.i95_1 = this.i95_1 - 1 | 0;
      tmp = result;
    } else if (token === get_TC_BEGIN_LIST()) {
      tmp = readArray(this);
    } else {
      this.f95_1.j94('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  };
  function classDiscriminator(_this__u8e3s4, json) {
    var tmp0_iterator = _this__u8e3s4.p8d().o();
    while (tmp0_iterator.d1()) {
      var annotation = tmp0_iterator.f1();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.t96_1;
    }
    return json.a90_1.q91_1;
  }
  function decodeSerializableValuePolymorphic(_this__u8e3s4, deserializer) {
    var tmp;
    if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.w91().a90_1.p91_1;
    }
    if (tmp) {
      return deserializer.k8c(_this__u8e3s4);
    }
    var discriminator = classDiscriminator(deserializer.i8c(), _this__u8e3s4.w91());
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = _this__u8e3s4.x91();
    var descriptor = deserializer.i8c();
    if (!(value instanceof JsonObject)) {
      throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.o8d() + ', but had ' + getKClassFromExpression(value));
    }
    var jsonTree = value;
    var tmp0_safe_receiver = jsonTree.i7s(discriminator);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
    var tmp_0;
    try {
      tmp_0 = findPolymorphicSerializer(deserializer, _this__u8e3s4, type);
    } catch ($p) {
      var tmp_1;
      if ($p instanceof SerializationException) {
        var it = $p;
        throw JsonDecodingException_0(-1, ensureNotNull(it.message), jsonTree.toString());
      } else {
        throw $p;
      }
    }
    var tmp_2 = tmp_0;
    var actualSerializer = isInterface(tmp_2, DeserializationStrategy) ? tmp_2 : THROW_CCE();
    return readPolymorphicJson(_this__u8e3s4.w91(), discriminator, jsonTree, actualSerializer);
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!(serializer instanceof SealedClassSerializer))
      return Unit_instance;
    if (jsonCachedSerialNames(actualSerializer.i8c()).s(classDiscriminator)) {
      var baseName = serializer.i8c().o8d();
      var actualName = actualSerializer.i8c().o8d();
      // Inline function 'kotlin.error' call
      var message = "Sealed class '" + actualName + "' cannot be serialized as base class '" + baseName + "' because" + (" it has property name that conflicts with JSON class discriminator '" + classDiscriminator + "'. ") + 'You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation or fall back to array polymorphism';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function checkKind(kind) {
    if (kind instanceof ENUM) {
      // Inline function 'kotlin.error' call
      var message = "Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (kind instanceof PrimitiveKind) {
      // Inline function 'kotlin.error' call
      var message_0 = "Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    if (kind instanceof PolymorphicKind) {
      // Inline function 'kotlin.error' call
      var message_1 = 'Actual serializer for polymorphic cannot be polymorphic itself';
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
  }
  function validateIfSealed$accessor$1ad0flx(serializer, actualSerializer, classDiscriminator) {
    return validateIfSealed(serializer, actualSerializer, classDiscriminator);
  }
  function checkKind_0($this, descriptor, actualClass) {
    var kind = descriptor.s8d();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.b7() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.u96_1)
      return Unit_instance;
    var tmp_0;
    var tmp_1;
    if (equals(kind, LIST_getInstance()) ? true : equals(kind, MAP_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = kind instanceof PrimitiveKind;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = kind instanceof ENUM;
    }
    if (tmp_0) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.b7() + ' of kind ' + kind + ' cannot be serialized polymorphically with class discriminator.');
    }
  }
  function checkDiscriminatorCollisions($this, descriptor, actualClass) {
    var inductionVariable = 0;
    var last = descriptor.q8d();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = descriptor.w8d(i);
        if (name === $this.v96_1) {
          throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + actualClass + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
        }
      }
       while (inductionVariable < last);
  }
  function PolymorphismValidator(useArrayPolymorphism, discriminator) {
    this.u96_1 = useArrayPolymorphism;
    this.v96_1 = discriminator;
  }
  protoOf(PolymorphismValidator).w8u = function (kClass, provider) {
  };
  protoOf(PolymorphismValidator).z8u = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.i8c();
    checkKind_0(this, descriptor, actualClass);
    if (!this.u96_1) {
      checkDiscriminatorCollisions(this, descriptor, actualClass);
    }
  };
  protoOf(PolymorphismValidator).a8v = function (baseClass, defaultSerializerProvider) {
  };
  protoOf(PolymorphismValidator).b8v = function (baseClass, defaultDeserializerProvider) {
  };
  function Key() {
  }
  function DescriptorSchemaCache() {
    this.k94_1 = createMapForCache(16);
  }
  protoOf(DescriptorSchemaCache).w96 = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.set' call
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.k94_1;
    var value_0 = this_0.x2(descriptor);
    var tmp;
    if (value_0 == null) {
      // Inline function 'kotlinx.serialization.json.internal.DescriptorSchemaCache.set.<anonymous>' call
      var answer = createMapForCache(2);
      this_0.n2(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var this_1 = tmp;
    var key_0 = key instanceof Key ? key : THROW_CCE();
    var value_1 = !(value == null) ? value : THROW_CCE();
    this_1.n2(key_0, value_1);
  };
  protoOf(DescriptorSchemaCache).l94 = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.x96(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.w96(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).x96 = function (descriptor, key) {
    var tmp0_safe_receiver = this.k94_1.x2(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.x2(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return !(tmp_0 == null) ? tmp_0 : null;
  };
  function DiscriminatorHolder(discriminatorToSkip) {
    this.y96_1 = discriminatorToSkip;
  }
  function trySkip(_this__u8e3s4, $this, unknownKey) {
    if (_this__u8e3s4 == null)
      return false;
    if (_this__u8e3s4.y96_1 === unknownKey) {
      _this__u8e3s4.y96_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    $l$loop: while (true) {
      var tmp = $this.y8f(descriptor);
      if (!!(tmp === -1)) {
        break $l$loop;
      }
    }
  }
  function checkLeadingComma($this) {
    if ($this.g90_1.k95() === get_TC_COMMA()) {
      $this.g90_1.j94('Unexpected leading comma');
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.i90_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.i90_1 === -1)) {
        hasComma = $this.g90_1.a97();
      }
    } else {
      $this.g90_1.z96(get_COLON());
    }
    var tmp;
    if ($this.g90_1.l95()) {
      if (decodingKey) {
        if ($this.i90_1 === -1) {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var this_0 = $this.g90_1;
          var condition = !hasComma;
          var position = this_0.m90_1;
          if (!condition) {
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            var tmp$ret$0 = 'Unexpected leading comma';
            this_0.j94(tmp$ret$0, position);
          }
        } else {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var this_1 = $this.g90_1;
          var condition_0 = hasComma;
          var position_0 = this_1.m90_1;
          if (!condition_0) {
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            var tmp$ret$1 = 'Expected comma after the key-value pair';
            this_1.j94(tmp$ret$1, position_0);
          }
        }
      }
      $this.i90_1 = $this.i90_1 + 1 | 0;
      tmp = $this.i90_1;
    } else {
      if (hasComma ? !$this.e90_1.a90_1.v91_1 : false) {
        invalidTrailingComma($this.g90_1);
      }
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var this_0 = $this.e90_1;
      var elementDescriptor = descriptor.u8d(index);
      var tmp;
      if (!elementDescriptor.k8d()) {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        tmp = $this.g90_1.b97(true);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.s8d(), ENUM_getInstance())) {
        var tmp_0;
        if (elementDescriptor.k8d()) {
          // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
          tmp_0 = $this.g90_1.b97(false);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        var tmp0_elvis_lhs = $this.g90_1.c97($this.k90_1.j91_1);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_2;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_1;
        var enumIndex = getJsonNameIndex(elementDescriptor, this_0, enumValue);
        if (enumIndex === -3) {
          // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
          $this.g90_1.m95();
          tmp$ret$1 = true;
          break $l$block_2;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.g90_1.a97();
    while ($this.g90_1.l95()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.g90_1.z96(get_COLON());
      var index = getJsonNameIndex(descriptor, $this.e90_1, key);
      var tmp;
      if (!(index === -3)) {
        var tmp_0;
        if ($this.k90_1.o91_1 ? coerceInputValue($this, descriptor, index) : false) {
          hasComma = $this.g90_1.a97();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.l90_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.i8l(index);
          }
          return index;
        }
        tmp = tmp_0;
      } else {
        tmp = true;
      }
      var isUnknown = tmp;
      if (isUnknown) {
        hasComma = handleUnknown($this, key);
      }
    }
    if (hasComma ? !$this.e90_1.a90_1.v91_1 : false) {
      invalidTrailingComma($this.g90_1);
    }
    var tmp1_safe_receiver = $this.l90_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.j8l();
    var tmp_1;
    if (tmp2_elvis_lhs == null) {
      tmp_1 = -1;
    } else {
      tmp_1 = tmp2_elvis_lhs;
    }
    return tmp_1;
  }
  function handleUnknown($this, key) {
    if ($this.k90_1.i91_1 ? true : trySkip($this.j90_1, $this, key)) {
      $this.g90_1.e97($this.k90_1.j91_1);
    } else {
      $this.g90_1.d97(key);
    }
    return $this.g90_1.a97();
  }
  function decodeListIndex($this) {
    var hasComma = $this.g90_1.a97();
    var tmp;
    if ($this.g90_1.l95()) {
      if (!($this.i90_1 === -1) ? !hasComma : false) {
        $this.g90_1.j94('Expected end of the array or comma');
      }
      $this.i90_1 = $this.i90_1 + 1 | 0;
      tmp = $this.i90_1;
    } else {
      if (hasComma ? !$this.e90_1.a90_1.v91_1 : false) {
        invalidTrailingComma($this.g90_1, 'array');
      }
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.k90_1.j91_1) {
      tmp = $this.g90_1.g97();
    } else {
      tmp = $this.g90_1.f97();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.e90_1 = json;
    this.f90_1 = mode;
    this.g90_1 = lexer;
    this.h90_1 = this.e90_1.w8f();
    this.i90_1 = -1;
    this.j90_1 = discriminatorHolder;
    this.k90_1 = this.e90_1.a90_1;
    this.l90_1 = this.k90_1.m91_1 ? null : new JsonElementMarker(descriptor);
  }
  protoOf(StreamingJsonDecoder).w91 = function () {
    return this.e90_1;
  };
  protoOf(StreamingJsonDecoder).w8f = function () {
    return this.h90_1;
  };
  protoOf(StreamingJsonDecoder).x91 = function () {
    return (new JsonTreeReader(this.e90_1.a90_1, this.g90_1)).o95();
  };
  protoOf(StreamingJsonDecoder).g8f = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.e90_1.a90_1.p91_1;
      }
      if (tmp) {
        return deserializer.k8c(this);
      }
      var discriminator = classDiscriminator(deserializer.i8c(), this.e90_1);
      var tmp0_elvis_lhs = this.g90_1.h97(discriminator, this.k90_1.j91_1);
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        return decodeSerializableValuePolymorphic(this, isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE());
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var type = tmp_0;
      var tmp_1;
      try {
        tmp_1 = findPolymorphicSerializer(deserializer, this, type);
      } catch ($p) {
        var tmp_2;
        if ($p instanceof SerializationException) {
          var it = $p;
          var message = removeSuffix(substringBefore(ensureNotNull(it.message), _Char___init__impl__6a9atx(10)), '.');
          var hint = substringAfter(ensureNotNull(it.message), _Char___init__impl__6a9atx(10), '');
          this.g90_1.j94(message, VOID, hint);
        } else {
          throw $p;
        }
        tmp_1 = tmp_2;
      }
      var tmp_3 = tmp_1;
      var actualSerializer = isInterface(tmp_3, DeserializationStrategy) ? tmp_3 : THROW_CCE();
      this.j90_1 = new DiscriminatorHolder(discriminator);
      return actualSerializer.k8c(this);
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        var e = $p;
        if (contains_0(ensureNotNull(e.message), 'at path'))
          throw e;
        throw new MissingFieldException(e.f8d_1, plus(e.message, ' at path: ') + this.g90_1.n90_1.w94(), e);
      } else {
        throw $p;
      }
    }
  };
  protoOf(StreamingJsonDecoder).h8f = function (descriptor) {
    var newMode = switchMode(this.e90_1, descriptor);
    this.g90_1.n90_1.r94(descriptor);
    this.g90_1.z96(newMode.k97_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.t9_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.e90_1, newMode, this.g90_1, descriptor, this.j90_1);
        break;
      default:
        var tmp_0;
        if (this.f90_1.equals(newMode) ? this.e90_1.a90_1.m91_1 : false) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.e90_1, newMode, this.g90_1, descriptor, this.j90_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).i8f = function (descriptor) {
    if (this.e90_1.a90_1.i91_1 ? descriptor.q8d() === 0 : false) {
      skipLeftoverElements(this, descriptor);
    }
    if (this.g90_1.a97() ? !this.e90_1.a90_1.v91_1 : false) {
      invalidTrailingComma(this.g90_1, '');
    }
    this.g90_1.z96(this.f90_1.l97_1);
    this.g90_1.n90_1.v94();
  };
  protoOf(StreamingJsonDecoder).t8e = function () {
    var tmp;
    var tmp0_safe_receiver = this.l90_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h94_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.g90_1.m97();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).u8e = function () {
    return null;
  };
  protoOf(StreamingJsonDecoder).t8f = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.f90_1.equals(WriteMode_MAP_getInstance()) ? (index & 1) === 0 : false;
    if (isMapKey) {
      this.g90_1.n90_1.u94();
    }
    var value = protoOf(AbstractDecoder).t8f.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.g90_1.n90_1.t94(value);
    }
    return value;
  };
  protoOf(StreamingJsonDecoder).y8f = function (descriptor) {
    var index;
    switch (this.f90_1.t9_1) {
      case 0:
        index = decodeObjectIndex(this, descriptor);
        break;
      case 2:
        index = decodeMapIndex(this);
        break;
      default:
        index = decodeListIndex(this);
        break;
    }
    if (!this.f90_1.equals(WriteMode_MAP_getInstance())) {
      this.g90_1.n90_1.s94(index);
    }
    return index;
  };
  protoOf(StreamingJsonDecoder).v8e = function () {
    return this.g90_1.n97();
  };
  protoOf(StreamingJsonDecoder).w8e = function () {
    var value = this.g90_1.k92();
    if (!value.equals(toLong(value.rb()))) {
      this.g90_1.j94("Failed to parse byte for input '" + value.toString() + "'");
    }
    return value.rb();
  };
  protoOf(StreamingJsonDecoder).x8e = function () {
    var value = this.g90_1.k92();
    if (!value.equals(toLong(value.sb()))) {
      this.g90_1.j94("Failed to parse short for input '" + value.toString() + "'");
    }
    return value.sb();
  };
  protoOf(StreamingJsonDecoder).y8e = function () {
    var value = this.g90_1.k92();
    if (!value.equals(toLong(value.fa()))) {
      this.g90_1.j94("Failed to parse int for input '" + value.toString() + "'");
    }
    return value.fa();
  };
  protoOf(StreamingJsonDecoder).z8e = function () {
    return this.g90_1.k92();
  };
  protoOf(StreamingJsonDecoder).a8f = function () {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var this_0 = this.g90_1;
      var input = this_0.n95();
      try {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeFloat.<anonymous>' call
        // Inline function 'kotlin.text.toFloat' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$4 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          this_0.j94("Failed to parse type '" + 'float' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.e90_1.a90_1.r91_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.g90_1, result);
  };
  protoOf(StreamingJsonDecoder).b8f = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var this_0 = this.g90_1;
      var input = this_0.n95();
      try {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeDouble.<anonymous>' call
        tmp$ret$1 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          this_0.j94("Failed to parse type '" + 'double' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.e90_1.a90_1.r91_1;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.g90_1, result);
  };
  protoOf(StreamingJsonDecoder).c8f = function () {
    var string = this.g90_1.n95();
    if (!(string.length === 1)) {
      this.g90_1.j94("Expected single char, but got '" + string + "'");
    }
    return charSequenceGet(string, 0);
  };
  protoOf(StreamingJsonDecoder).d8f = function () {
    var tmp;
    if (this.k90_1.j91_1) {
      tmp = this.g90_1.g97();
    } else {
      tmp = this.g90_1.m95();
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).e8f = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.g90_1, this.e90_1) : protoOf(AbstractDecoder).e8f.call(this, descriptor);
  };
  function JsonDecoderForUnsignedTypes(lexer, json) {
    AbstractDecoder.call(this);
    this.o97_1 = lexer;
    this.p97_1 = json.w8f();
  }
  protoOf(JsonDecoderForUnsignedTypes).w8f = function () {
    return this.p97_1;
  };
  protoOf(JsonDecoderForUnsignedTypes).y8f = function (descriptor) {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(JsonDecoderForUnsignedTypes).y8e = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var this_0 = this.o97_1;
      var input = this_0.n95();
      try {
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeInt.<anonymous>' call
        // Inline function 'kotlin.UInt.toInt' call
        var this_1 = toUInt(input);
        tmp$ret$2 = _UInt___get_data__impl__f0vqqw(this_1);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          this_0.j94("Failed to parse type '" + 'UInt' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).z8e = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var this_0 = this.o97_1;
      var input = this_0.n95();
      try {
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeLong.<anonymous>' call
        // Inline function 'kotlin.ULong.toLong' call
        var this_1 = toULong(input);
        tmp$ret$2 = _ULong___get_data__impl__fggpzb(this_1);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          this_0.j94("Failed to parse type '" + 'ULong' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).w8e = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var this_0 = this.o97_1;
      var input = this_0.n95();
      try {
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeByte.<anonymous>' call
        // Inline function 'kotlin.UByte.toByte' call
        var this_1 = toUByte(input);
        tmp$ret$2 = _UByte___get_data__impl__jof9qr(this_1);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          this_0.j94("Failed to parse type '" + 'UByte' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).x8e = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var this_0 = this.o97_1;
      var input = this_0.n95();
      try {
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeShort.<anonymous>' call
        // Inline function 'kotlin.UShort.toShort' call
        var this_1 = toUShort(input);
        tmp$ret$2 = _UShort___get_data__impl__g0245(this_1);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          this_0.j94("Failed to parse type '" + 'UShort' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  function get_unsignedNumberDescriptors() {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return unsignedNumberDescriptors;
  }
  var unsignedNumberDescriptors;
  function StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, $this) {
    StreamingJsonEncoder.call($this, Composer_0(output, json), json, mode, modeReuseCache);
    return $this;
  }
  function StreamingJsonEncoder_init_$Create$(output, json, mode, modeReuseCache) {
    return StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, objectCreate(protoOf(StreamingJsonEncoder)));
  }
  function encodeTypeInfo($this, descriptor) {
    $this.x94_1.g93();
    $this.l8g(ensureNotNull($this.e95_1));
    $this.x94_1.i93(get_COLON());
    $this.x94_1.h93();
    $this.l8g(descriptor.o8d());
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.x94_1 = composer;
    this.y94_1 = json;
    this.z94_1 = mode;
    this.a95_1 = modeReuseCache;
    this.b95_1 = this.y94_1.w8f();
    this.c95_1 = this.y94_1.a90_1;
    this.d95_1 = false;
    this.e95_1 = null;
    var i = this.z94_1.t9_1;
    if (!(this.a95_1 == null)) {
      if (!(this.a95_1[i] === null) ? true : !(this.a95_1[i] === this)) {
        this.a95_1[i] = this;
      }
    }
  }
  protoOf(StreamingJsonEncoder).w91 = function () {
    return this.y94_1;
  };
  protoOf(StreamingJsonEncoder).w8f = function () {
    return this.b95_1;
  };
  protoOf(StreamingJsonEncoder).d8h = function (descriptor, index) {
    return this.c95_1.h91_1;
  };
  protoOf(StreamingJsonEncoder).y8g = function (serializer, value) {
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      var tmp;
      if (!(serializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.w91().a90_1.p91_1;
      }
      if (tmp) {
        serializer.j8c(this, value);
        break $l$block;
      }
      var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
      var baseClassDiscriminator = classDiscriminator(serializer.i8c(), this.w91());
      var actualSerializer = findPolymorphicSerializer_0(casted, this, !(value == null) ? value : THROW_CCE());
      validateIfSealed$accessor$1ad0flx(casted, actualSerializer, baseClassDiscriminator);
      checkKind(actualSerializer.i8c().s8d());
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.encodeSerializableValue.<anonymous>' call
      this.e95_1 = baseClassDiscriminator;
      actualSerializer.j8c(this, value);
    }
  };
  protoOf(StreamingJsonEncoder).h8f = function (descriptor) {
    var newMode = switchMode(this.y94_1, descriptor);
    if (!(newMode.k97_1 === get_INVALID())) {
      this.x94_1.i93(newMode.k97_1);
      this.x94_1.e93();
    }
    if (!(this.e95_1 == null)) {
      encodeTypeInfo(this, descriptor);
      this.e95_1 = null;
    }
    if (this.z94_1.equals(newMode)) {
      return this;
    }
    var tmp0_safe_receiver = this.a95_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver[newMode.t9_1];
    return tmp1_elvis_lhs == null ? new StreamingJsonEncoder(this.x94_1, this.y94_1, newMode, this.a95_1) : tmp1_elvis_lhs;
  };
  protoOf(StreamingJsonEncoder).i8f = function (descriptor) {
    if (!(this.z94_1.l97_1 === get_INVALID())) {
      this.x94_1.f93();
      this.x94_1.g93();
      this.x94_1.i93(this.z94_1.l97_1);
    }
  };
  protoOf(StreamingJsonEncoder).a8g = function (descriptor, index) {
    switch (this.z94_1.t9_1) {
      case 1:
        if (!this.x94_1.d93_1) {
          this.x94_1.i93(get_COMMA());
        }

        this.x94_1.g93();
        break;
      case 2:
        if (!this.x94_1.d93_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.x94_1.i93(get_COMMA());
            this.x94_1.g93();
            tmp_0 = true;
          } else {
            this.x94_1.i93(get_COLON());
            this.x94_1.h93();
            tmp_0 = false;
          }
          tmp.d95_1 = tmp_0;
        } else {
          this.d95_1 = true;
          this.x94_1.g93();
        }

        break;
      case 3:
        if (index === 0)
          this.d95_1 = true;
        if (index === 1) {
          this.x94_1.i93(get_COMMA());
          this.x94_1.h93();
          this.d95_1 = false;
        }

        break;
      default:
        if (!this.x94_1.d93_1) {
          this.x94_1.i93(get_COMMA());
        }

        this.x94_1.g93();
        this.l8g(getJsonElementName(descriptor, this.y94_1, index));
        this.x94_1.i93(get_COLON());
        this.x94_1.h93();
        break;
    }
    return true;
  };
  protoOf(StreamingJsonEncoder).z8g = function (descriptor, index, serializer, value) {
    if (!(value == null) ? true : this.c95_1.m91_1) {
      protoOf(AbstractEncoder).z8g.call(this, descriptor, index, serializer, value);
    }
  };
  protoOf(StreamingJsonEncoder).m8g = function (descriptor) {
    var tmp;
    if (get_isUnsignedNumber(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_0;
      var tmp_1 = this.x94_1;
      if (tmp_1 instanceof ComposerForUnsignedNumbers) {
        tmp_0 = this.x94_1;
      } else {
        tmp_0 = new ComposerForUnsignedNumbers(this.x94_1.c93_1, this.d95_1);
      }
      var tmp$ret$1 = tmp_0;
      tmp = new StreamingJsonEncoder(tmp$ret$1, this.y94_1, this.z94_1, null);
    } else if (get_isUnquotedLiteral(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_2;
      var tmp_3 = this.x94_1;
      if (tmp_3 instanceof ComposerForUnquotedLiterals) {
        tmp_2 = this.x94_1;
      } else {
        tmp_2 = new ComposerForUnquotedLiterals(this.x94_1.c93_1, this.d95_1);
      }
      var tmp$ret$3 = tmp_2;
      tmp = new StreamingJsonEncoder(tmp$ret$3, this.y94_1, this.z94_1, null);
    } else {
      tmp = protoOf(AbstractEncoder).m8g.call(this, descriptor);
    }
    return tmp;
  };
  protoOf(StreamingJsonEncoder).c8g = function () {
    this.x94_1.k93(get_NULL());
  };
  protoOf(StreamingJsonEncoder).d8g = function (value) {
    if (this.d95_1) {
      this.l8g(value.toString());
    } else {
      this.x94_1.t93(value);
    }
  };
  protoOf(StreamingJsonEncoder).e8g = function (value) {
    if (this.d95_1) {
      this.l8g(value.toString());
    } else {
      this.x94_1.o93(value);
    }
  };
  protoOf(StreamingJsonEncoder).f8g = function (value) {
    if (this.d95_1) {
      this.l8g(value.toString());
    } else {
      this.x94_1.q93(value);
    }
  };
  protoOf(StreamingJsonEncoder).g8g = function (value) {
    if (this.d95_1) {
      this.l8g(value.toString());
    } else {
      this.x94_1.r93(value);
    }
  };
  protoOf(StreamingJsonEncoder).h8g = function (value) {
    if (this.d95_1) {
      this.l8g(value.toString());
    } else {
      this.x94_1.s93(value);
    }
  };
  protoOf(StreamingJsonEncoder).i8g = function (value) {
    if (this.d95_1) {
      this.l8g(value.toString());
    } else {
      this.x94_1.m93(value);
    }
    if (!this.c95_1.r91_1 ? !isFinite(value) : false) {
      throw InvalidFloatingPointEncoded(value, toString(this.x94_1.c93_1));
    }
  };
  protoOf(StreamingJsonEncoder).j8g = function (value) {
    if (this.d95_1) {
      this.l8g(value.toString());
    } else {
      this.x94_1.n93(value);
    }
    if (!this.c95_1.r91_1 ? !isFinite_0(value) : false) {
      throw InvalidFloatingPointEncoded(value, toString(this.x94_1.c93_1));
    }
  };
  protoOf(StreamingJsonEncoder).k8g = function (value) {
    this.l8g(toString_0(value));
  };
  protoOf(StreamingJsonEncoder).l8g = function (value) {
    return this.x94_1.u93(value);
  };
  function get_isUnsignedNumber(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.r8d() ? get_unsignedNumberDescriptors().s(_this__u8e3s4) : false;
  }
  function get_isUnquotedLiteral(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.r8d() ? equals(_this__u8e3s4, get_jsonUnquotedLiteralDescriptor()) : false;
  }
  var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
  function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
    if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
      properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
      unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_0()).i8c(), serializer_0(Companion_getInstance()).i8c(), serializer_2(Companion_getInstance_1()).i8c(), serializer_3(Companion_getInstance_2()).i8c()]);
    }
  }
  function get_ESCAPE_STRINGS() {
    _init_properties_StringOps_kt__fcy1db();
    return ESCAPE_STRINGS;
  }
  var ESCAPE_STRINGS;
  var ESCAPE_MARKERS;
  function toHexChar(i) {
    _init_properties_StringOps_kt__fcy1db();
    var d = i & 15;
    var tmp;
    if (d < 10) {
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(48);
      var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
      tmp = numberToChar(d + tmp$ret$0 | 0);
    } else {
      var tmp_0 = d - 10 | 0;
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(97);
      var tmp$ret$1 = Char__toInt_impl_vasixd(this_1);
      tmp = numberToChar(tmp_0 + tmp$ret$1 | 0);
    }
    return tmp;
  }
  function printQuoted(_this__u8e3s4, value) {
    _init_properties_StringOps_kt__fcy1db();
    _this__u8e3s4.y5(get_STRING());
    var lastPos = 0;
    var inductionVariable = 0;
    var last = charSequenceLength(value) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_0 = charSequenceGet(value, i);
        var c = Char__toInt_impl_vasixd(this_0);
        if (c < get_ESCAPE_STRINGS().length ? !(get_ESCAPE_STRINGS()[c] == null) : false) {
          _this__u8e3s4.n8(value, lastPos, i);
          _this__u8e3s4.x5(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0)) {
      _this__u8e3s4.n8(value, lastPos, value.length);
    } else {
      _this__u8e3s4.x5(value);
    }
    _this__u8e3s4.y5(get_STRING());
  }
  function toBooleanStrictOrNull_0(_this__u8e3s4) {
    _init_properties_StringOps_kt__fcy1db();
    return equals_0(_this__u8e3s4, 'true', true) ? true : equals_0(_this__u8e3s4, 'false', true) ? false : null;
  }
  var properties_initialized_StringOps_kt_wzaea7;
  function _init_properties_StringOps_kt__fcy1db() {
    if (!properties_initialized_StringOps_kt_wzaea7) {
      properties_initialized_StringOps_kt_wzaea7 = true;
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.arrayOfNulls' call
      var this_0 = fillArrayVal(Array(93), null);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.ESCAPE_STRINGS.<anonymous>' call
      var inductionVariable = 0;
      if (inductionVariable <= 31)
        do {
          var c = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var c1 = toHexChar(c >> 12);
          var c2 = toHexChar(c >> 8);
          var c3 = toHexChar(c >> 4);
          var c4 = toHexChar(c);
          this_0[c] = '\\u' + toString_0(c1) + toString_0(c2) + toString_0(c3) + toString_0(c4);
        }
         while (inductionVariable <= 31);
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(34);
      this_0[Char__toInt_impl_vasixd(this_1)] = '\\"';
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(92);
      this_0[Char__toInt_impl_vasixd(this_2)] = '\\\\';
      // Inline function 'kotlin.code' call
      var this_3 = _Char___init__impl__6a9atx(9);
      this_0[Char__toInt_impl_vasixd(this_3)] = '\\t';
      // Inline function 'kotlin.code' call
      var this_4 = _Char___init__impl__6a9atx(8);
      this_0[Char__toInt_impl_vasixd(this_4)] = '\\b';
      // Inline function 'kotlin.code' call
      var this_5 = _Char___init__impl__6a9atx(10);
      this_0[Char__toInt_impl_vasixd(this_5)] = '\\n';
      // Inline function 'kotlin.code' call
      var this_6 = _Char___init__impl__6a9atx(13);
      this_0[Char__toInt_impl_vasixd(this_6)] = '\\r';
      this_0[12] = '\\f';
      ESCAPE_STRINGS = this_0;
      // Inline function 'kotlin.apply' call
      var this_7 = new Int8Array(93);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.ESCAPE_MARKERS.<anonymous>' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 <= 31)
        do {
          var c_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          this_7[c_0] = 1;
        }
         while (inductionVariable_0 <= 31);
      // Inline function 'kotlin.code' call
      var this_8 = _Char___init__impl__6a9atx(34);
      this_7[Char__toInt_impl_vasixd(this_8)] = 34;
      // Inline function 'kotlin.code' call
      var this_9 = _Char___init__impl__6a9atx(92);
      this_7[Char__toInt_impl_vasixd(this_9)] = 92;
      // Inline function 'kotlin.code' call
      var this_10 = _Char___init__impl__6a9atx(9);
      this_7[Char__toInt_impl_vasixd(this_10)] = 116;
      // Inline function 'kotlin.code' call
      var this_11 = _Char___init__impl__6a9atx(8);
      this_7[Char__toInt_impl_vasixd(this_11)] = 98;
      // Inline function 'kotlin.code' call
      var this_12 = _Char___init__impl__6a9atx(10);
      this_7[Char__toInt_impl_vasixd(this_12)] = 110;
      // Inline function 'kotlin.code' call
      var this_13 = _Char___init__impl__6a9atx(13);
      this_7[Char__toInt_impl_vasixd(this_13)] = 114;
      this_7[12] = 102;
      ESCAPE_MARKERS = this_7;
    }
  }
  function unparsedPrimitive($this, primitive) {
    throw JsonDecodingException_0(-1, "Failed to parse literal as '" + primitive + "' value", toString($this.v97()));
  }
  function asLiteral(_this__u8e3s4, $this, type) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonLiteral ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_1(-1, "Unexpected 'null' literal when non-nullable " + type + ' was expected');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function AbstractJsonTreeDecoder(json, value) {
    NamedValueDecoder.call(this);
    this.s97_1 = json;
    this.t97_1 = value;
    this.u97_1 = this.w91().a90_1;
  }
  protoOf(AbstractJsonTreeDecoder).w91 = function () {
    return this.s97_1;
  };
  protoOf(AbstractJsonTreeDecoder).q2 = function () {
    return this.t97_1;
  };
  protoOf(AbstractJsonTreeDecoder).w8f = function () {
    return this.w91().w8f();
  };
  protoOf(AbstractJsonTreeDecoder).v97 = function () {
    var tmp0_safe_receiver = this.p8s();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.currentObject.<anonymous>' call
      tmp = this.w97(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.q2() : tmp1_elvis_lhs;
  };
  protoOf(AbstractJsonTreeDecoder).x91 = function () {
    return this.v97();
  };
  protoOf(AbstractJsonTreeDecoder).g8f = function (deserializer) {
    return decodeSerializableValuePolymorphic(this, deserializer);
  };
  protoOf(AbstractJsonTreeDecoder).q8s = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeDecoder).h8f = function (descriptor) {
    var currentObject = this.v97();
    var tmp0_subject = descriptor.s8d();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.w91();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      if (!(currentObject instanceof JsonArray)) {
        throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.o8d() + ', but had ' + getKClassFromExpression(currentObject));
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.w91();
        var keyDescriptor = carrierDescriptor(descriptor.u8d(0), this_0.w8f());
        var keyKind = keyDescriptor.s8d();
        var tmp_2;
        var tmp_3;
        if (keyKind instanceof PrimitiveKind) {
          tmp_3 = true;
        } else {
          tmp_3 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_3) {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
          var tmp_4 = this.w91();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          if (!(currentObject instanceof JsonObject)) {
            throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.o8d() + ', but had ' + getKClassFromExpression(currentObject));
          }
          tmp_2 = new JsonTreeMapDecoder(tmp_4, currentObject);
        } else {
          if (this_0.a90_1.k91_1) {
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
            var tmp_5 = this.w91();
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            if (!(currentObject instanceof JsonArray)) {
              throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.o8d() + ', but had ' + getKClassFromExpression(currentObject));
            }
            tmp_2 = new JsonTreeListDecoder(tmp_5, currentObject);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_2;
      } else {
        var tmp_6 = this.w91();
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        if (!(currentObject instanceof JsonObject)) {
          throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.o8d() + ', but had ' + getKClassFromExpression(currentObject));
        }
        tmp = new JsonTreeDecoder(tmp_6, currentObject);
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).i8f = function (descriptor) {
  };
  protoOf(AbstractJsonTreeDecoder).t8e = function () {
    var tmp = this.v97();
    return !(tmp instanceof JsonNull);
  };
  protoOf(AbstractJsonTreeDecoder).x97 = function (tag) {
    var currentElement = this.w97(tag);
    var tmp0_elvis_lhs = currentElement instanceof JsonPrimitive ? currentElement : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_0(-1, 'Expected JsonPrimitive at ' + tag + ', found ' + currentElement, toString(this.v97()));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).y97 = function (tag) {
    return !(this.w97(tag) === JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeDecoder).s8s = function (tag) {
    return this.y97((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).z97 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.x97(tag);
      try {
        var tmp0_elvis_lhs = get_booleanOrNull(this_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'boolean');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'boolean');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).t8s = function (tag) {
    return this.z97((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).a98 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.x97(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedByte.<anonymous>' call
        var result = get_int(this_0);
        var tmp;
        var containsLower = ByteCompanionObject_instance.MIN_VALUE;
        if (result <= ByteCompanionObject_instance.MAX_VALUE ? containsLower <= result : false) {
          tmp = toByte(result);
        } else {
          tmp = null;
        }
        var tmp0_elvis_lhs = tmp;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'byte');
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'byte');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).u8s = function (tag) {
    return this.a98((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).b98 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.x97(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedShort.<anonymous>' call
        var result = get_int(this_0);
        var tmp;
        var containsLower = ShortCompanionObject_instance.MIN_VALUE;
        if (result <= ShortCompanionObject_instance.MAX_VALUE ? containsLower <= result : false) {
          tmp = toShort(result);
        } else {
          tmp = null;
        }
        var tmp0_elvis_lhs = tmp;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'short');
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'short');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).v8s = function (tag) {
    return this.b98((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).c98 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.x97(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedInt.<anonymous>' call
        var tmp0_elvis_lhs = get_int(this_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'int');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'int');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).w8s = function (tag) {
    return this.c98((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).d98 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.x97(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedLong.<anonymous>' call
        var tmp0_elvis_lhs = get_long(this_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'long');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'long');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).x8s = function (tag) {
    return this.d98((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).e98 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.x97(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedFloat.<anonymous>' call
        var tmp0_elvis_lhs = get_float(this_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'float');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'float');
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.w91().a90_1.r91_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.v97()));
  };
  protoOf(AbstractJsonTreeDecoder).y8s = function (tag) {
    return this.e98((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).f98 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.x97(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedDouble.<anonymous>' call
        var tmp0_elvis_lhs = get_double(this_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'double');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'double');
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.w91().a90_1.r91_1;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.v97()));
  };
  protoOf(AbstractJsonTreeDecoder).z8s = function (tag) {
    return this.f98((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).g98 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.x97(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedChar.<anonymous>' call
        var tmp0_elvis_lhs = single(this_0.b92());
        var tmp;
        var tmp_0 = tmp0_elvis_lhs;
        if ((tmp_0 == null ? null : new Char(tmp_0)) == null) {
          unparsedPrimitive(this, 'char');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'char');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).a8t = function (tag) {
    return this.g98((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).h98 = function (tag) {
    var value = this.x97(tag);
    if (!this.w91().a90_1.j91_1) {
      var literal = asLiteral(value, this, 'string');
      if (!literal.d92_1)
        throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted.\n" + get_lenientHint(), toString(this.v97()));
    }
    if (value instanceof JsonNull)
      throw JsonDecodingException_0(-1, "Unexpected 'null' value instead of string literal", toString(this.v97()));
    return value.b92();
  };
  protoOf(AbstractJsonTreeDecoder).b8t = function (tag) {
    return this.h98((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).i98 = function (tag, inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? new JsonDecoderForUnsignedTypes(new StringJsonLexer(this.x97(tag).b92()), this.w91()) : protoOf(NamedValueDecoder).c8t.call(this, tag, inlineDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).c8t = function (tag, inlineDescriptor) {
    return this.i98((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).e8f = function (descriptor) {
    return !(this.p8s() == null) ? protoOf(NamedValueDecoder).e8f.call(this, descriptor) : (new JsonPrimitiveDecoder(this.w91(), this.q2())).e8f(descriptor);
  };
  function coerceInputValue_0($this, descriptor, index, tag) {
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var this_0 = $this.w91();
      var elementDescriptor = descriptor.u8d(index);
      var tmp;
      if (!elementDescriptor.k8d()) {
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_0 = $this.w97(tag);
        tmp = tmp_0 instanceof JsonNull;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.s8d(), ENUM_getInstance())) {
        var tmp_1;
        if (elementDescriptor.k8d()) {
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
          var tmp_2 = $this.w97(tag);
          tmp_1 = tmp_2 instanceof JsonNull;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_3 = $this.w97(tag);
        var tmp0_safe_receiver = tmp_3 instanceof JsonPrimitive ? tmp_3 : null;
        var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : get_contentOrNull(tmp0_safe_receiver);
        var tmp_4;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_2;
        } else {
          tmp_4 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_4;
        var enumIndex = getJsonNameIndex(elementDescriptor, this_0, enumValue);
        if (enumIndex === -3) {
          // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue.<anonymous>' call
          tmp$ret$1 = true;
          break $l$block_2;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function absenceIsNull($this, descriptor, index) {
    $this.s98_1 = (!$this.w91().a90_1.m91_1 ? !descriptor.x8d(index) : false) ? descriptor.u8d(index).k8d() : false;
    return $this.s98_1;
  }
  function JsonTreeDecoder(json, value, polyDiscriminator, polyDescriptor) {
    polyDiscriminator = polyDiscriminator === VOID ? null : polyDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    AbstractJsonTreeDecoder.call(this, json, value);
    this.o98_1 = value;
    this.p98_1 = polyDiscriminator;
    this.q98_1 = polyDescriptor;
    this.r98_1 = 0;
    this.s98_1 = false;
  }
  protoOf(JsonTreeDecoder).q2 = function () {
    return this.o98_1;
  };
  protoOf(JsonTreeDecoder).y8f = function (descriptor) {
    while (this.r98_1 < descriptor.q8d()) {
      var tmp1 = this.r98_1;
      this.r98_1 = tmp1 + 1 | 0;
      var name = this.k8s(descriptor, tmp1);
      var index = this.r98_1 - 1 | 0;
      this.s98_1 = false;
      var tmp;
      var tmp_0;
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var this_0 = this.q2();
      if ((isInterface(this_0, Map) ? this_0 : THROW_CCE()).u2(name)) {
        tmp_0 = true;
      } else {
        tmp_0 = absenceIsNull(this, descriptor, index);
      }
      if (tmp_0) {
        tmp = !this.u97_1.o91_1 ? true : !coerceInputValue_0(this, descriptor, index, name);
      } else {
        tmp = false;
      }
      if (tmp) {
        return index;
      }
    }
    return -1;
  };
  protoOf(JsonTreeDecoder).t8e = function () {
    return !this.s98_1 ? protoOf(AbstractJsonTreeDecoder).t8e.call(this) : false;
  };
  protoOf(JsonTreeDecoder).l8s = function (descriptor, index) {
    var strategy = namingStrategy(descriptor, this.w91());
    var baseName = descriptor.w8d(index);
    if (strategy == null) {
      if (!this.u97_1.s91_1)
        return baseName;
      if (this.q2().k2().s(baseName))
        return baseName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.w91(), descriptor);
    // Inline function 'kotlin.collections.find' call
    var this_0 = this.q2().k2();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = this_0.o();
      while (tmp0_iterator.d1()) {
        var element = tmp0_iterator.f1();
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.elementName.<anonymous>' call
        if (deserializationNamesMap_0.x2(element) === index) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    var fallbackName = strategy == null ? null : strategy.n94(descriptor, index, baseName);
    return fallbackName == null ? baseName : fallbackName;
  };
  protoOf(JsonTreeDecoder).w97 = function (tag) {
    return getValue(this.q2(), tag);
  };
  protoOf(JsonTreeDecoder).h8f = function (descriptor) {
    if (descriptor === this.q98_1) {
      var tmp = this.w91();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.v97();
      var descriptor_0 = this.q98_1;
      if (!(value instanceof JsonObject)) {
        throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor_0.o8d() + ', but had ' + getKClassFromExpression(value));
      }
      return new JsonTreeDecoder(tmp, value, this.p98_1, this.q98_1);
    }
    return protoOf(AbstractJsonTreeDecoder).h8f.call(this, descriptor);
  };
  protoOf(JsonTreeDecoder).i8f = function (descriptor) {
    var tmp;
    if (this.u97_1.i91_1) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.s8d();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_instance;
    var strategy = namingStrategy(descriptor, this.w91());
    var tmp_1;
    if (strategy == null ? !this.u97_1.s91_1 : false) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else if (!(strategy == null)) {
      tmp_1 = deserializationNamesMap(this.w91(), descriptor).k2();
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_safe_receiver = get_schemaCache(this.w91()).x96(descriptor, get_JsonDeserializationNamesKey());
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k2();
      var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var tmp1_iterator = this.q2().k2().o();
    while (tmp1_iterator.d1()) {
      var key = tmp1_iterator.f1();
      if (!names.s(key) ? !(key === this.p98_1) : false) {
        throw UnknownKeyException(key, this.q2().toString());
      }
    }
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.y98_1 = value;
    this.z98_1 = this.y98_1.m();
    this.a99_1 = -1;
  }
  protoOf(JsonTreeListDecoder).q2 = function () {
    return this.y98_1;
  };
  protoOf(JsonTreeListDecoder).l8s = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListDecoder).w97 = function (tag) {
    return this.y98_1.n(toInt(tag));
  };
  protoOf(JsonTreeListDecoder).y8f = function (descriptor) {
    while (this.a99_1 < (this.z98_1 - 1 | 0)) {
      this.a99_1 = this.a99_1 + 1 | 0;
      return this.a99_1;
    }
    return -1;
  };
  function JsonPrimitiveDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.g99_1 = value;
    this.d8t(get_PRIMITIVE_TAG());
  }
  protoOf(JsonPrimitiveDecoder).q2 = function () {
    return this.g99_1;
  };
  protoOf(JsonPrimitiveDecoder).y8f = function (descriptor) {
    return 0;
  };
  protoOf(JsonPrimitiveDecoder).w97 = function (tag) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(tag === get_PRIMITIVE_TAG())) {
      // Inline function 'kotlinx.serialization.json.internal.JsonPrimitiveDecoder.currentElement.<anonymous>' call
      var message = "This input can only handle primitives with '" + get_PRIMITIVE_TAG() + "' tag";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.g99_1;
  };
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder.call(this, json, value);
    this.r99_1 = value;
    this.s99_1 = toList(this.r99_1.k2());
    this.t99_1 = imul(this.s99_1.m(), 2);
    this.u99_1 = -1;
  }
  protoOf(JsonTreeMapDecoder).q2 = function () {
    return this.r99_1;
  };
  protoOf(JsonTreeMapDecoder).l8s = function (descriptor, index) {
    var i = index / 2 | 0;
    return this.s99_1.n(i);
  };
  protoOf(JsonTreeMapDecoder).y8f = function (descriptor) {
    while (this.u99_1 < (this.t99_1 - 1 | 0)) {
      this.u99_1 = this.u99_1 + 1 | 0;
      return this.u99_1;
    }
    return -1;
  };
  protoOf(JsonTreeMapDecoder).w97 = function (tag) {
    return (this.u99_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.r99_1, tag);
  };
  protoOf(JsonTreeMapDecoder).i8f = function (descriptor) {
  };
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.i8c())).g8f(deserializer);
  }
  function get_PRIMITIVE_TAG() {
    return PRIMITIVE_TAG;
  }
  var PRIMITIVE_TAG;
  var WriteMode_OBJ_instance;
  var WriteMode_LIST_instance;
  var WriteMode_MAP_instance;
  var WriteMode_POLY_OBJ_instance;
  function values() {
    return [WriteMode_OBJ_getInstance(), WriteMode_LIST_getInstance(), WriteMode_MAP_getInstance(), WriteMode_POLY_OBJ_getInstance()];
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var WriteMode_entriesInitialized;
  function WriteMode_initEntries() {
    if (WriteMode_entriesInitialized)
      return Unit_instance;
    WriteMode_entriesInitialized = true;
    WriteMode_OBJ_instance = new WriteMode('OBJ', 0, get_BEGIN_OBJ(), get_END_OBJ());
    WriteMode_LIST_instance = new WriteMode('LIST', 1, get_BEGIN_LIST(), get_END_LIST());
    WriteMode_MAP_instance = new WriteMode('MAP', 2, get_BEGIN_OBJ(), get_END_OBJ());
    WriteMode_POLY_OBJ_instance = new WriteMode('POLY_OBJ', 3, get_BEGIN_LIST(), get_END_LIST());
  }
  var $ENTRIES;
  function WriteMode(name, ordinal, begin, end) {
    Enum.call(this, name, ordinal);
    this.k97_1 = begin;
    this.l97_1 = end;
  }
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.s8d();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.u8d(0), _this__u8e3s4.w8f());
          var keyKind = keyDescriptor.s8d();
          var tmp_0;
          var tmp_1;
          if (keyKind instanceof PrimitiveKind) {
            tmp_1 = true;
          } else {
            tmp_1 = equals(keyKind, ENUM_getInstance());
          }
          if (tmp_1) {
            // Inline function 'kotlinx.serialization.json.internal.switchMode.<anonymous>' call
            tmp_0 = WriteMode_MAP_getInstance();
          } else {
            if (_this__u8e3s4.a90_1.k91_1) {
              // Inline function 'kotlinx.serialization.json.internal.switchMode.<anonymous>' call
              tmp_0 = WriteMode_LIST_getInstance();
            } else {
              throw InvalidKeyKindException(keyDescriptor);
            }
          }
          tmp = tmp_0;
        } else {
          tmp = WriteMode_OBJ_getInstance();
        }
      }
    }
    return tmp;
  }
  function carrierDescriptor(_this__u8e3s4, module_0) {
    var tmp;
    if (equals(_this__u8e3s4.s8d(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.r8d()) {
      tmp = carrierDescriptor(_this__u8e3s4.u8d(0), module_0);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function WriteMode_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_OBJ_instance;
  }
  function WriteMode_LIST_getInstance() {
    WriteMode_initEntries();
    return WriteMode_LIST_instance;
  }
  function WriteMode_MAP_getInstance() {
    WriteMode_initEntries();
    return WriteMode_MAP_instance;
  }
  function WriteMode_POLY_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_POLY_OBJ_instance;
  }
  function appendEscape($this, lastPosition, current) {
    $this.v99(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.v99(lastPosition, currentPosition);
    var result = $this.p90_1.toString();
    $this.p90_1.s8(0);
    return result;
  }
  function takePeeked($this) {
    // Inline function 'kotlin.also' call
    var this_0 = ensureNotNull($this.o90_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.takePeeked.<anonymous>' call
    $this.o90_1 = null;
    return this_0;
  }
  function wasUnquotedString($this) {
    return !(charSequenceGet($this.w99(), $this.m90_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.x99(currentPosition);
    if (currentPosition === -1) {
      $this.j94('Expected escape sequence to continue, got EOF');
    }
    var tmp = $this.w99();
    var tmp0 = currentPosition;
    currentPosition = tmp0 + 1 | 0;
    var currentChar = charSequenceGet(tmp, tmp0);
    if (currentChar === _Char___init__impl__6a9atx(117)) {
      return appendHex($this, $this.w99(), currentPosition);
    }
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (c === _Char___init__impl__6a9atx(0)) {
      $this.j94("Invalid escaped char '" + toString_0(currentChar) + "'");
    }
    $this.p90_1.y5(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.m90_1 = startPos;
      $this.y99();
      if (($this.m90_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.j94('Unexpected EOF during unicode escape');
      }
      return appendHex($this, source, $this.m90_1);
    }
    $this.p90_1.y5(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
    return startPos + 4 | 0;
  }
  function fromHexChar($this, source, currentPosition) {
    var character = charSequenceGet(source, currentPosition);
    var tmp;
    if (_Char___init__impl__6a9atx(48) <= character ? character <= _Char___init__impl__6a9atx(57) : false) {
      // Inline function 'kotlin.code' call
      var tmp_0 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(48);
      tmp = tmp_0 - Char__toInt_impl_vasixd(this_0) | 0;
    } else if (_Char___init__impl__6a9atx(97) <= character ? character <= _Char___init__impl__6a9atx(102) : false) {
      // Inline function 'kotlin.code' call
      var tmp_1 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(97);
      tmp = (tmp_1 - Char__toInt_impl_vasixd(this_1) | 0) + 10 | 0;
    } else if (_Char___init__impl__6a9atx(65) <= character ? character <= _Char___init__impl__6a9atx(70) : false) {
      // Inline function 'kotlin.code' call
      var tmp_2 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(65);
      tmp = (tmp_2 - Char__toInt_impl_vasixd(this_2) | 0) + 10 | 0;
    } else {
      $this.j94("Invalid toHexChar char '" + toString_0(character) + "' in unicode escape");
    }
    return tmp;
  }
  function consumeBoolean($this, start) {
    var current = $this.x99(start);
    if (current >= charSequenceLength($this.w99()) ? true : current === -1) {
      $this.j94('EOF');
    }
    // Inline function 'kotlin.code' call
    var tmp = $this.w99();
    var tmp0 = current;
    current = tmp0 + 1 | 0;
    var this_0 = charSequenceGet(tmp, tmp0);
    var tmp1_subject = Char__toInt_impl_vasixd(this_0) | 32;
    var tmp_0;
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(116);
    if (tmp1_subject === Char__toInt_impl_vasixd(this_1)) {
      consumeBooleanLiteral($this, 'rue', current);
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(102);
      if (tmp1_subject === Char__toInt_impl_vasixd(this_2)) {
        consumeBooleanLiteral($this, 'alse', current);
        tmp_0 = false;
      } else {
        $this.j94("Expected valid boolean literal prefix, but had '" + $this.n95() + "'");
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.w99()) - current | 0) < literalSuffix.length) {
      $this.j94('Unexpected end of boolean literal');
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charSequenceGet(literalSuffix, i);
        var actual = charSequenceGet($this.w99(), current + i | 0);
        // Inline function 'kotlin.code' call
        var tmp = Char__toInt_impl_vasixd(expected);
        // Inline function 'kotlin.code' call
        if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
          $this.j94("Expected valid boolean literal prefix, but had '" + $this.n95() + "'");
        }
      }
       while (inductionVariable <= last);
    $this.m90_1 = current + literalSuffix.length | 0;
  }
  function consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive) {
    var tmp;
    switch (isExponentPositive) {
      case false:
        // Inline function 'kotlin.math.pow' call

        var x = -exponentAccumulator.y6();
        tmp = Math.pow(10.0, x);
        break;
      case true:
        // Inline function 'kotlin.math.pow' call

        var x_0 = exponentAccumulator.y6();
        tmp = Math.pow(10.0, x_0);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function AbstractJsonLexer() {
    this.m90_1 = 0;
    this.n90_1 = new JsonPath();
    this.o90_1 = null;
    this.p90_1 = StringBuilder_init_$Create$();
  }
  protoOf(AbstractJsonLexer).y99 = function () {
  };
  protoOf(AbstractJsonLexer).z99 = function (c) {
    return (((c === _Char___init__impl__6a9atx(125) ? true : c === _Char___init__impl__6a9atx(93)) ? true : c === _Char___init__impl__6a9atx(58)) ? true : c === _Char___init__impl__6a9atx(44)) ? false : true;
  };
  protoOf(AbstractJsonLexer).q90 = function () {
    var nextToken = this.p95();
    if (!(nextToken === 10)) {
      this.j94('Expected EOF after parsing, but had ' + toString_0(charSequenceGet(this.w99(), this.m90_1 - 1 | 0)) + ' instead');
    }
  };
  protoOf(AbstractJsonLexer).j95 = function (expected) {
    var token = this.p95();
    if (!(token === expected)) {
      this.a9a(expected);
    }
    return token;
  };
  protoOf(AbstractJsonLexer).z96 = function (expected) {
    this.y99();
    var source = this.w99();
    var cpos = this.m90_1;
    $l$loop_0: while (true) {
      cpos = this.x99(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var tmp0 = cpos;
      cpos = tmp0 + 1 | 0;
      var c = charSequenceGet(source, tmp0);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9))
        continue $l$loop_0;
      this.m90_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.b9a(expected);
    }
    this.m90_1 = cpos;
    this.b9a(expected);
  };
  protoOf(AbstractJsonLexer).b9a = function (expected) {
    if (this.m90_1 > 0 ? expected === _Char___init__impl__6a9atx(34) : false) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.m90_1;
        try {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.unexpectedToken.<anonymous>' call
          this.m90_1 = this.m90_1 - 1 | 0;
          tmp$ret$1 = this.n95();
          break $l$block;
        }finally {
          this.m90_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$1;
      if (inputLiteral === 'null') {
        this.i94("Expected string literal but 'null' literal was found", this.m90_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls to default values.");
      }
    }
    this.a9a(charToTokenClass(expected));
  };
  protoOf(AbstractJsonLexer).c9a = function (expectedToken, wasConsumed) {
    var expected = tokenDescription(expectedToken);
    var position = wasConsumed ? this.m90_1 - 1 | 0 : this.m90_1;
    var s = (this.m90_1 === charSequenceLength(this.w99()) ? true : position < 0) ? 'EOF' : toString_0(charSequenceGet(this.w99(), position));
    this.j94('Expected ' + expected + ", but had '" + s + "' instead", position);
  };
  protoOf(AbstractJsonLexer).a9a = function (expectedToken, wasConsumed, $super) {
    wasConsumed = wasConsumed === VOID ? true : wasConsumed;
    return $super === VOID ? this.c9a(expectedToken, wasConsumed) : $super.c9a.call(this, expectedToken, wasConsumed);
  };
  protoOf(AbstractJsonLexer).k95 = function () {
    var source = this.w99();
    var cpos = this.m90_1;
    $l$loop_0: while (true) {
      cpos = this.x99(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (((ch === _Char___init__impl__6a9atx(32) ? true : ch === _Char___init__impl__6a9atx(10)) ? true : ch === _Char___init__impl__6a9atx(13)) ? true : ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.m90_1 = cpos;
      return charToTokenClass(ch);
    }
    this.m90_1 = cpos;
    return 10;
  };
  protoOf(AbstractJsonLexer).b97 = function (doConsume) {
    var current = this.d9a();
    current = this.x99(current);
    var len = charSequenceLength(this.w99()) - current | 0;
    if (len < 4 ? true : current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charSequenceGet('null', i) === charSequenceGet(this.w99(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 ? charToTokenClass(charSequenceGet(this.w99(), current + 4 | 0)) === 0 : false)
      return false;
    if (doConsume) {
      this.m90_1 = current + 4 | 0;
    }
    return true;
  };
  protoOf(AbstractJsonLexer).m97 = function (doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.b97(doConsume) : $super.b97.call(this, doConsume);
  };
  protoOf(AbstractJsonLexer).d9a = function () {
    var current = this.m90_1;
    $l$loop_0: while (true) {
      current = this.x99(current);
      if (current === -1)
        break $l$loop_0;
      var c = charSequenceGet(this.w99(), current);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop_0;
      }
    }
    this.m90_1 = current;
    return current;
  };
  protoOf(AbstractJsonLexer).c97 = function (isLenient) {
    var token = this.k95();
    var tmp;
    if (isLenient) {
      if (!(token === 1) ? !(token === 0) : false)
        return null;
      tmp = this.n95();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.m95();
    }
    var string = tmp;
    this.o90_1 = string;
    return string;
  };
  protoOf(AbstractJsonLexer).e9a = function () {
    this.o90_1 = null;
  };
  protoOf(AbstractJsonLexer).f9a = function (startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.w99();
    return toString(charSequenceSubSequence(this_0, startPos, endPos));
  };
  protoOf(AbstractJsonLexer).m95 = function () {
    if (!(this.o90_1 == null)) {
      return takePeeked(this);
    }
    return this.f97();
  };
  protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.x99(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.j94('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.v99(lastPosition, currentPosition);
          currentPosition = this.x99(currentPosition);
          if (currentPosition === -1) {
            this.j94('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.f9a(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.m90_1 = currentPosition + 1 | 0;
    return string;
  };
  protoOf(AbstractJsonLexer).g97 = function () {
    var result = this.n95();
    if (result === 'null' ? wasUnquotedString(this) : false) {
      this.j94("Unexpected 'null' value instead of string literal");
    }
    return result;
  };
  protoOf(AbstractJsonLexer).n95 = function () {
    if (!(this.o90_1 == null)) {
      return takePeeked(this);
    }
    var current = this.d9a();
    if (current >= charSequenceLength(this.w99()) ? true : current === -1) {
      this.j94('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.w99(), current));
    if (token === 1) {
      return this.m95();
    }
    if (!(token === 0)) {
      this.j94('Expected beginning of the string, but got ' + toString_0(charSequenceGet(this.w99(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.w99(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.w99())) {
        usedAppend = true;
        this.v99(this.m90_1, current);
        var eof = this.x99(current);
        if (eof === -1) {
          this.m90_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.f9a(this.m90_1, current);
    } else {
      tmp = decodedString(this, this.m90_1, current);
    }
    var result = tmp;
    this.m90_1 = current;
    return result;
  };
  protoOf(AbstractJsonLexer).v99 = function (fromIndex, toIndex) {
    this.p90_1.n8(this.w99(), fromIndex, toIndex);
  };
  protoOf(AbstractJsonLexer).e97 = function (allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList_init_$Create$();
    var lastToken = this.k95();
    if (!(lastToken === 8) ? !(lastToken === 6) : false) {
      this.n95();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.k95();
      if (lastToken === 1) {
        if (allowLenientStrings) {
          this.n95();
        } else {
          this.f97();
        }
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 ? true : tmp0_subject === 6) {
        tokenStack.a1(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.m90_1, 'found ] instead of } at path: ' + this.n90_1, this.w99());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.m90_1, 'found } instead of ] at path: ' + this.n90_1, this.w99());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.j94('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.p95();
      if (tokenStack.m() === 0)
        return Unit_instance;
    }
  };
  protoOf(AbstractJsonLexer).toString = function () {
    return "JsonReader(source='" + this.w99() + "', currentPosition=" + this.m90_1 + ')';
  };
  protoOf(AbstractJsonLexer).d97 = function (key) {
    var processed = this.f9a(0, this.m90_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    this.i94("Encountered an unknown key '" + key + "'", lastIndexOf_0, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.");
  };
  protoOf(AbstractJsonLexer).i94 = function (message, position, hint) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(hint) === 0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.n90_1.w94() + hintMessage, this.w99());
  };
  protoOf(AbstractJsonLexer).j94 = function (message, position, hint, $super) {
    position = position === VOID ? this.m90_1 : position;
    hint = hint === VOID ? '' : hint;
    return $super === VOID ? this.i94(message, position, hint) : $super.i94.call(this, message, position, hint);
  };
  protoOf(AbstractJsonLexer).k92 = function () {
    var current = this.d9a();
    current = this.x99(current);
    if (current >= charSequenceLength(this.w99()) ? true : current === -1) {
      this.j94('EOF');
    }
    var tmp;
    if (charSequenceGet(this.w99(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.w99())) {
        this.j94('EOF');
      }
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var accumulator = new Long(0, 0);
    var exponentAccumulator = new Long(0, 0);
    var isNegative = false;
    var isExponentPositive = false;
    var hasExponent = false;
    var start = current;
    $l$loop_4: while (!(current === charSequenceLength(this.w99()))) {
      var ch = charSequenceGet(this.w99(), current);
      if ((ch === _Char___init__impl__6a9atx(101) ? true : ch === _Char___init__impl__6a9atx(69)) ? !hasExponent : false) {
        if (current === start) {
          this.j94('Unexpected symbol ' + toString_0(ch) + ' in numeric literal');
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) ? hasExponent : false) {
        if (current === start) {
          this.j94("Unexpected symbol '-' in numeric literal");
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) ? hasExponent : false) {
        if (current === start) {
          this.j94("Unexpected symbol '+' in numeric literal");
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.j94("Unexpected symbol '-' in numeric literal");
        }
        isNegative = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      var token = charToTokenClass(ch);
      if (!(token === 0))
        break $l$loop_4;
      current = current + 1 | 0;
      var digit = Char__minus_impl_a2frrh(ch, _Char___init__impl__6a9atx(48));
      if (!(0 <= digit ? digit <= 9 : false)) {
        this.j94("Unexpected symbol '" + toString_0(ch) + "' in numeric literal");
      }
      if (hasExponent) {
        // Inline function 'kotlin.Long.plus' call
        // Inline function 'kotlin.Long.times' call
        exponentAccumulator = exponentAccumulator.w9(toLong(10)).eb(toLong(digit));
        continue $l$loop_4;
      }
      // Inline function 'kotlin.Long.minus' call
      // Inline function 'kotlin.Long.times' call
      accumulator = accumulator.w9(toLong(10)).fb(toLong(digit));
      if (accumulator.x9(new Long(0, 0)) > 0) {
        this.j94('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current ? true : isNegative ? start === (current - 1 | 0) : false) {
      this.j94('Expected numeric literal');
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.j94('EOF');
      }
      if (!(charSequenceGet(this.w99(), current) === _Char___init__impl__6a9atx(34))) {
        this.j94('Expected closing quotation mark');
      }
      current = current + 1 | 0;
    }
    this.m90_1 = current;
    if (hasExponent) {
      var doubleAccumulator = accumulator.y6() * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      var tmp_0;
      Companion_getInstance_3();
      if (doubleAccumulator > (new Long(-1, 2147483647)).y6()) {
        tmp_0 = true;
      } else {
        Companion_getInstance_3();
        tmp_0 = doubleAccumulator < (new Long(0, -2147483648)).y6();
      }
      if (tmp_0) {
        this.j94('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.j94("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_1;
    if (isNegative) {
      tmp_1 = accumulator;
    } else {
      var tmp_2 = accumulator;
      Companion_getInstance_3();
      if (!tmp_2.equals(new Long(0, -2147483648))) {
        tmp_1 = accumulator.jb();
      } else {
        this.j94('Numeric value overflow');
      }
    }
    return tmp_1;
  };
  protoOf(AbstractJsonLexer).n97 = function () {
    var current = this.d9a();
    if (current === charSequenceLength(this.w99())) {
      this.j94('EOF');
    }
    var tmp;
    if (charSequenceGet(this.w99(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean(this, current);
    if (hasQuotation) {
      if (this.m90_1 === charSequenceLength(this.w99())) {
        this.j94('EOF');
      }
      if (!(charSequenceGet(this.w99(), this.m90_1) === _Char___init__impl__6a9atx(34))) {
        this.j94('Expected closing quotation mark');
      }
      this.m90_1 = this.m90_1 + 1 | 0;
    }
    return result;
  };
  function charToTokenClass(c) {
    var tmp;
    // Inline function 'kotlin.code' call
    if (Char__toInt_impl_vasixd(c) < 126) {
      var tmp_0 = CharMappings_getInstance().h9a_1;
      // Inline function 'kotlin.code' call
      tmp = tmp_0[Char__toInt_impl_vasixd(c)];
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function get_TC_WHITESPACE() {
    return TC_WHITESPACE;
  }
  var TC_WHITESPACE;
  function get_TC_EOF() {
    return TC_EOF;
  }
  var TC_EOF;
  function get_STRING() {
    return STRING;
  }
  var STRING;
  function get_TC_STRING() {
    return TC_STRING;
  }
  var TC_STRING;
  function get_STRING_ESC() {
    return STRING_ESC;
  }
  var STRING_ESC;
  function get_TC_BEGIN_OBJ() {
    return TC_BEGIN_OBJ;
  }
  var TC_BEGIN_OBJ;
  function get_TC_COLON() {
    return TC_COLON;
  }
  var TC_COLON;
  function get_TC_COMMA() {
    return TC_COMMA;
  }
  var TC_COMMA;
  function get_COLON() {
    return COLON;
  }
  var COLON;
  function get_BEGIN_OBJ() {
    return BEGIN_OBJ;
  }
  var BEGIN_OBJ;
  function get_END_OBJ() {
    return END_OBJ;
  }
  var END_OBJ;
  function get_BEGIN_LIST() {
    return BEGIN_LIST;
  }
  var BEGIN_LIST;
  function get_END_LIST() {
    return END_LIST;
  }
  var END_LIST;
  function get_lenientHint() {
    return lenientHint;
  }
  var lenientHint;
  function get_INVALID() {
    return INVALID;
  }
  var INVALID;
  function get_COMMA() {
    return COMMA;
  }
  var COMMA;
  function get_NULL() {
    return NULL;
  }
  var NULL;
  function tokenDescription(token) {
    return token === 1 ? "quotation mark '\"'" : token === 2 ? "string escape sequence '\\'" : token === 4 ? "comma ','" : token === 5 ? "colon ':'" : token === 6 ? "start of the object '{'" : token === 7 ? "end of the object '}'" : token === 8 ? "start of the array '['" : token === 9 ? "end of the array ']'" : token === 10 ? 'end of the input' : token === 127 ? 'invalid token' : 'valid token';
  }
  function get_TC_OTHER() {
    return TC_OTHER;
  }
  var TC_OTHER;
  function escapeToChar(c) {
    return c < 117 ? CharMappings_getInstance().g9a_1[c] : _Char___init__impl__6a9atx(0);
  }
  function get_TC_BEGIN_LIST() {
    return TC_BEGIN_LIST;
  }
  var TC_BEGIN_LIST;
  function get_TC_END_LIST() {
    return TC_END_LIST;
  }
  var TC_END_LIST;
  function get_TC_END_OBJ() {
    return TC_END_OBJ;
  }
  var TC_END_OBJ;
  function get_ignoreUnknownKeysHint() {
    return ignoreUnknownKeysHint;
  }
  var ignoreUnknownKeysHint;
  function initEscape($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 31)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2ESC($this, i, _Char___init__impl__6a9atx(117));
      }
       while (inductionVariable <= 31);
    initC2ESC($this, 8, _Char___init__impl__6a9atx(98));
    initC2ESC($this, 9, _Char___init__impl__6a9atx(116));
    initC2ESC($this, 10, _Char___init__impl__6a9atx(110));
    initC2ESC($this, 12, _Char___init__impl__6a9atx(102));
    initC2ESC($this, 13, _Char___init__impl__6a9atx(114));
    initC2ESC_0($this, _Char___init__impl__6a9atx(47), _Char___init__impl__6a9atx(47));
    initC2ESC_0($this, _Char___init__impl__6a9atx(34), _Char___init__impl__6a9atx(34));
    initC2ESC_0($this, _Char___init__impl__6a9atx(92), _Char___init__impl__6a9atx(92));
  }
  function initCharToToken($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2TC($this, i, 127);
      }
       while (inductionVariable <= 32);
    initC2TC($this, 9, 3);
    initC2TC($this, 10, 3);
    initC2TC($this, 13, 3);
    initC2TC($this, 32, 3);
    initC2TC_0($this, _Char___init__impl__6a9atx(44), 4);
    initC2TC_0($this, _Char___init__impl__6a9atx(58), 5);
    initC2TC_0($this, _Char___init__impl__6a9atx(123), 6);
    initC2TC_0($this, _Char___init__impl__6a9atx(125), 7);
    initC2TC_0($this, _Char___init__impl__6a9atx(91), 8);
    initC2TC_0($this, _Char___init__impl__6a9atx(93), 9);
    initC2TC_0($this, _Char___init__impl__6a9atx(34), 1);
    initC2TC_0($this, _Char___init__impl__6a9atx(92), 2);
  }
  function initC2ESC($this, c, esc) {
    if (!(esc === _Char___init__impl__6a9atx(117))) {
      // Inline function 'kotlin.code' call
      var tmp$ret$0 = Char__toInt_impl_vasixd(esc);
      $this.g9a_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.h9a_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.g9a_1 = charArray(117);
    this.h9a_1 = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
  var CharMappings_instance;
  function CharMappings_getInstance() {
    if (CharMappings_instance == null)
      new CharMappings();
    return CharMappings_instance;
  }
  function get_specialFlowingValuesHint() {
    return specialFlowingValuesHint;
  }
  var specialFlowingValuesHint;
  function get_allowStructuredMapKeysHint() {
    return allowStructuredMapKeysHint;
  }
  var allowStructuredMapKeysHint;
  function StringJsonLexer(source) {
    AbstractJsonLexer.call(this);
    this.m9a_1 = source;
  }
  protoOf(StringJsonLexer).w99 = function () {
    return this.m9a_1;
  };
  protoOf(StringJsonLexer).x99 = function (position) {
    return position < this.m9a_1.length ? position : -1;
  };
  protoOf(StringJsonLexer).p95 = function () {
    var source = this.m9a_1;
    $l$loop: while (!(this.m90_1 === -1) ? this.m90_1 < source.length : false) {
      var tmp1 = this.m90_1;
      this.m90_1 = tmp1 + 1 | 0;
      var ch = charSequenceGet(source, tmp1);
      var tc = charToTokenClass(ch);
      var tmp;
      if (tc === get_TC_WHITESPACE()) {
        continue $l$loop;
      } else {
        tmp = tc;
      }
      return tmp;
    }
    return get_TC_EOF();
  };
  protoOf(StringJsonLexer).a97 = function () {
    var current = this.d9a();
    if (current === this.m9a_1.length ? true : current === -1)
      return false;
    if (charSequenceGet(this.m9a_1, current) === _Char___init__impl__6a9atx(44)) {
      this.m90_1 = this.m90_1 + 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(StringJsonLexer).l95 = function () {
    var current = this.m90_1;
    if (current === -1)
      return false;
    $l$loop: while (current < this.m9a_1.length) {
      var c = charSequenceGet(this.m9a_1, current);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.m90_1 = current;
      return this.z99(c);
    }
    this.m90_1 = current;
    return false;
  };
  protoOf(StringJsonLexer).d9a = function () {
    var current = this.m90_1;
    if (current === -1)
      return current;
    $l$loop: while (current < this.m9a_1.length) {
      var c = charSequenceGet(this.m9a_1, current);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.m90_1 = current;
    return current;
  };
  protoOf(StringJsonLexer).z96 = function (expected) {
    if (this.m90_1 === -1) {
      this.b9a(expected);
    }
    var source = this.m9a_1;
    $l$loop: while (this.m90_1 < source.length) {
      var tmp1 = this.m90_1;
      this.m90_1 = tmp1 + 1 | 0;
      var c = charSequenceGet(source, tmp1);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      if (c === expected)
        return Unit_instance;
      this.b9a(expected);
    }
    this.m90_1 = -1;
    this.b9a(expected);
  };
  protoOf(StringJsonLexer).f97 = function () {
    this.z96(get_STRING());
    var current = this.m90_1;
    var closingQuote = indexOf(this.m9a_1, _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.n95();
      this.c9a(get_TC_STRING(), false);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charSequenceGet(this.m9a_1, i) === get_STRING_ESC()) {
          return this.consumeString2(this.m9a_1, this.m90_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.m90_1 = closingQuote + 1 | 0;
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.m9a_1.substring(current, closingQuote);
  };
  protoOf(StringJsonLexer).h97 = function (keyToMatch, isLenient) {
    var positionSnapshot = this.m90_1;
    try {
      if (!(this.p95() === get_TC_BEGIN_OBJ()))
        return null;
      var firstKey = this.c97(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.e9a();
      if (!(this.p95() === get_TC_COLON()))
        return null;
      return this.c97(isLenient);
    }finally {
      this.m90_1 = positionSnapshot;
      this.e9a();
    }
  };
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.c90_1;
  }
  function JsonToStringWriter() {
    this.d90_1 = StringBuilder_init_$Create$_0(128);
  }
  protoOf(JsonToStringWriter).p93 = function (value) {
    this.d90_1.q8(value);
  };
  protoOf(JsonToStringWriter).j93 = function (char) {
    this.d90_1.y5(char);
  };
  protoOf(JsonToStringWriter).l93 = function (text) {
    this.d90_1.x5(text);
  };
  protoOf(JsonToStringWriter).v93 = function (text) {
    printQuoted(this.d90_1, text);
  };
  protoOf(JsonToStringWriter).mv = function () {
    this.d90_1.t8();
  };
  protoOf(JsonToStringWriter).toString = function () {
    return this.d90_1.toString();
  };
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(defer$1).k8d = get_isNullable;
  protoOf(defer$1).r8d = get_isInline;
  protoOf(defer$1).p8d = get_annotations;
  protoOf(PolymorphismValidator).y8u = contextual;
  //endregion
  //region block: init
  Companion_instance_0 = new Companion();
  Companion_instance_1 = new Companion_0();
  Companion_instance_2 = new Companion_1();
  Companion_instance_3 = new Companion_2();
  Tombstone_instance = new Tombstone();
  PRIMITIVE_TAG = 'primitive';
  TC_WHITESPACE = 3;
  TC_EOF = 10;
  STRING = _Char___init__impl__6a9atx(34);
  TC_STRING = 1;
  STRING_ESC = _Char___init__impl__6a9atx(92);
  TC_BEGIN_OBJ = 6;
  TC_COLON = 5;
  TC_COMMA = 4;
  COLON = _Char___init__impl__6a9atx(58);
  BEGIN_OBJ = _Char___init__impl__6a9atx(123);
  END_OBJ = _Char___init__impl__6a9atx(125);
  BEGIN_LIST = _Char___init__impl__6a9atx(91);
  END_LIST = _Char___init__impl__6a9atx(93);
  lenientHint = "Use 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.";
  INVALID = _Char___init__impl__6a9atx(0);
  COMMA = _Char___init__impl__6a9atx(44);
  NULL = 'null';
  TC_OTHER = 0;
  TC_BEGIN_LIST = 8;
  TC_END_LIST = 9;
  TC_END_OBJ = 7;
  ignoreUnknownKeysHint = "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.";
  specialFlowingValuesHint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
  allowStructuredMapKeysHint = "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.";
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Json_0;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json.js.map
