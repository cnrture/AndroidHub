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
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var protoOf = kotlin_kotlin.$_$.fa;
  var objectMeta = kotlin_kotlin.$_$.ea;
  var setMetadataFor = kotlin_kotlin.$_$.ga;
  var classMeta = kotlin_kotlin.$_$.v8;
  var VOID = kotlin_kotlin.$_$.g;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var interfaceMeta = kotlin_kotlin.$_$.h9;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.f1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.f2;
  var Unit_instance = kotlin_kotlin.$_$.h4;
  var THROW_CCE = kotlin_kotlin.$_$.kd;
  var equals = kotlin_kotlin.$_$.y8;
  var hashCode = kotlin_kotlin.$_$.f9;
  var joinToString = kotlin_kotlin.$_$.j6;
  var Map = kotlin_kotlin.$_$.v4;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var List = kotlin_kotlin.$_$.t4;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.i;
  var lazy = kotlin_kotlin.$_$.ge;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var toString = kotlin_kotlin.$_$.ka;
  var getBooleanHashCode = kotlin_kotlin.$_$.a9;
  var getStringHashCode = kotlin_kotlin.$_$.e9;
  var NumberFormatException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.v3;
  var numberRangeToNumber = kotlin_kotlin.$_$.y9;
  var ClosedRange = kotlin_kotlin.$_$.la;
  var isInterface = kotlin_kotlin.$_$.q9;
  var contains = kotlin_kotlin.$_$.pa;
  var toDouble = kotlin_kotlin.$_$.kc;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.x3;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var InlinePrimitiveDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var buildSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var lazy_0 = kotlin_kotlin.$_$.he;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var KProperty1 = kotlin_kotlin.$_$.wa;
  var getPropertyCallableRef = kotlin_kotlin.$_$.d9;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var captureStack = kotlin_kotlin.$_$.p8;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var charSequenceLength = kotlin_kotlin.$_$.t8;
  var charSequenceSubSequence = kotlin_kotlin.$_$.u8;
  var coerceAtLeast = kotlin_kotlin.$_$.ma;
  var coerceAtMost = kotlin_kotlin.$_$.na;
  var Companion_instance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.v;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var singleOrNull = kotlin_kotlin.$_$.h7;
  var emptyMap = kotlin_kotlin.$_$.w5;
  var getValue = kotlin_kotlin.$_$.f6;
  var copyOf = kotlin_kotlin.$_$.r5;
  var copyOf_0 = kotlin_kotlin.$_$.s5;
  var fillArrayVal = kotlin_kotlin.$_$.z8;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.zc;
  var invoke = kotlin_kotlin.$_$.de;
  var CoroutineImpl = kotlin_kotlin.$_$.i8;
  var DeepRecursiveScope = kotlin_kotlin.$_$.ad;
  var Unit = kotlin_kotlin.$_$.vd;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.u7;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var getKClass = kotlin_kotlin.$_$.e;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var ensureNotNull = kotlin_kotlin.$_$.ce;
  var contains_0 = kotlin_kotlin.$_$.bb;
  var plus = kotlin_kotlin.$_$.je;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var toLong = kotlin_kotlin.$_$.ia;
  var IllegalArgumentException = kotlin_kotlin.$_$.ed;
  var isFinite = kotlin_kotlin.$_$.fe;
  var isFinite_0 = kotlin_kotlin.$_$.ee;
  var charSequenceGet = kotlin_kotlin.$_$.s8;
  var toUInt = kotlin_kotlin.$_$.pc;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.v2;
  var toULong = kotlin_kotlin.$_$.qc;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.c3;
  var toUByte = kotlin_kotlin.$_$.oc;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.o2;
  var toUShort = kotlin_kotlin.$_$.rc;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.j3;
  var Companion_getInstance = kotlin_kotlin.$_$.e4;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.f4;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.d4;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.g4;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var setOf = kotlin_kotlin.$_$.g7;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.h2;
  var numberToChar = kotlin_kotlin.$_$.z9;
  var equals_0 = kotlin_kotlin.$_$.jb;
  var toString_0 = kotlin_kotlin.$_$.i2;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.m1;
  var ByteCompanionObject_instance = kotlin_kotlin.$_$.s3;
  var toByte = kotlin_kotlin.$_$.ha;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.w3;
  var toShort = kotlin_kotlin.$_$.ja;
  var single = kotlin_kotlin.$_$.yb;
  var Char = kotlin_kotlin.$_$.yc;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var emptySet = kotlin_kotlin.$_$.x5;
  var plus_0 = kotlin_kotlin.$_$.a7;
  var toInt = kotlin_kotlin.$_$.mc;
  var toList = kotlin_kotlin.$_$.m7;
  var Enum = kotlin_kotlin.$_$.bd;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ie;
  var last = kotlin_kotlin.$_$.p6;
  var removeLast = kotlin_kotlin.$_$.f7;
  var lastIndexOf = kotlin_kotlin.$_$.rb;
  var Long = kotlin_kotlin.$_$.gd;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.g2;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.b4;
  var numberToLong = kotlin_kotlin.$_$.ca;
  var charArray = kotlin_kotlin.$_$.r8;
  var indexOf = kotlin_kotlin.$_$.lb;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.o;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Json, 'Json', classMeta);
  setMetadataFor(Default, 'Default', objectMeta, Json);
  setMetadataFor(JsonClassDiscriminator, 'JsonClassDiscriminator', classMeta);
  setMetadataFor(JsonNames, 'JsonNames', classMeta);
  setMetadataFor(JsonConfiguration, 'JsonConfiguration', classMeta);
  setMetadataFor(JsonDecoder, 'JsonDecoder', interfaceMeta, VOID, [Decoder, CompositeDecoder]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(JsonElement, 'JsonElement', classMeta, VOID, VOID, VOID, VOID, {0: JsonElementSerializer_getInstance});
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(JsonObject, 'JsonObject', classMeta, JsonElement, [JsonElement, Map], VOID, VOID, {0: JsonObjectSerializer_getInstance});
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(JsonPrimitive, 'JsonPrimitive', classMeta, JsonElement, VOID, VOID, VOID, {0: JsonPrimitiveSerializer_getInstance});
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(JsonArray, 'JsonArray', classMeta, JsonElement, [JsonElement, List], VOID, VOID, {0: JsonArraySerializer_getInstance});
  setMetadataFor(JsonNull, 'JsonNull', objectMeta, JsonPrimitive, [JsonPrimitive, SerializerFactory], VOID, VOID, {0: JsonNull_getInstance});
  setMetadataFor(JsonLiteral, 'JsonLiteral', classMeta, JsonPrimitive);
  setMetadataFor(JsonElementSerializer, 'JsonElementSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonObjectDescriptor, 'JsonObjectDescriptor', objectMeta, VOID, [SerialDescriptor]);
  setMetadataFor(JsonObjectSerializer, 'JsonObjectSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonPrimitiveSerializer, 'JsonPrimitiveSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonNullSerializer, 'JsonNullSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonLiteralSerializer, 'JsonLiteralSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonArrayDescriptor, 'JsonArrayDescriptor', objectMeta, VOID, [SerialDescriptor]);
  setMetadataFor(JsonArraySerializer, 'JsonArraySerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(defer$1, VOID, classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(JsonElementMarker, 'JsonElementMarker', classMeta);
  setMetadataFor(JsonException, 'JsonException', classMeta, SerializationException);
  setMetadataFor(JsonDecodingException, 'JsonDecodingException', classMeta, JsonException);
  setMetadataFor(JsonEncodingException, 'JsonEncodingException', classMeta, JsonException);
  setMetadataFor(Tombstone, 'Tombstone', objectMeta);
  setMetadataFor(JsonPath, 'JsonPath', classMeta, VOID, VOID, JsonPath);
  setMetadataFor(JsonTreeReader$readDeepRecursive$slambda, 'JsonTreeReader$readDeepRecursive$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor($readObjectCOROUTINE$0, '$readObjectCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(JsonTreeReader, 'JsonTreeReader', classMeta, VOID, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(Key, 'Key', classMeta, VOID, VOID, Key);
  setMetadataFor(DescriptorSchemaCache, 'DescriptorSchemaCache', classMeta, VOID, VOID, DescriptorSchemaCache);
  setMetadataFor(DiscriminatorHolder, 'DiscriminatorHolder', classMeta);
  setMetadataFor(StreamingJsonDecoder, 'StreamingJsonDecoder', classMeta, AbstractDecoder, [JsonDecoder, AbstractDecoder]);
  setMetadataFor(JsonDecoderForUnsignedTypes, 'JsonDecoderForUnsignedTypes', classMeta, AbstractDecoder);
  setMetadataFor(AbstractJsonTreeDecoder, 'AbstractJsonTreeDecoder', classMeta, NamedValueDecoder, [NamedValueDecoder, JsonDecoder]);
  setMetadataFor(JsonTreeDecoder, 'JsonTreeDecoder', classMeta, AbstractJsonTreeDecoder);
  setMetadataFor(JsonTreeListDecoder, 'JsonTreeListDecoder', classMeta, AbstractJsonTreeDecoder);
  setMetadataFor(JsonPrimitiveDecoder, 'JsonPrimitiveDecoder', classMeta, AbstractJsonTreeDecoder);
  setMetadataFor(JsonTreeMapDecoder, 'JsonTreeMapDecoder', classMeta, JsonTreeDecoder);
  setMetadataFor(WriteMode, 'WriteMode', classMeta, Enum);
  setMetadataFor(AbstractJsonLexer, 'AbstractJsonLexer', classMeta);
  setMetadataFor(CharMappings, 'CharMappings', objectMeta);
  setMetadataFor(StringJsonLexer, 'StringJsonLexer', classMeta, AbstractJsonLexer);
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
    this.z35_1 = configuration;
    this.a36_1 = serializersModule;
    this.b36_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).u2t = function () {
    return this.a36_1;
  };
  protoOf(Json).c36 = function (deserializer, string) {
    var lexer = new StringJsonLexer(string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.k2q(), null);
    var result = input.f2t(deserializer);
    lexer.p36();
    return result;
  };
  function JsonClassDiscriminator() {
  }
  function JsonNames() {
  }
  function JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, namingStrategy, decodeEnumsCaseInsensitive) {
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
    this.q36_1 = encodeDefaults;
    this.r36_1 = ignoreUnknownKeys;
    this.s36_1 = isLenient;
    this.t36_1 = allowStructuredMapKeys;
    this.u36_1 = prettyPrint;
    this.v36_1 = explicitNulls;
    this.w36_1 = prettyPrintIndent;
    this.x36_1 = coerceInputValues;
    this.y36_1 = useArrayPolymorphism;
    this.z36_1 = classDiscriminator;
    this.a37_1 = allowSpecialFloatingPointValues;
    this.b37_1 = useAlternativeNames;
    this.c37_1 = namingStrategy;
    this.d37_1 = decodeEnumsCaseInsensitive;
  }
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.q36_1 + ', ignoreUnknownKeys=' + this.r36_1 + ', isLenient=' + this.s36_1 + ', ' + ('allowStructuredMapKeys=' + this.t36_1 + ', prettyPrint=' + this.u36_1 + ', explicitNulls=' + this.v36_1 + ', ') + ("prettyPrintIndent='" + this.w36_1 + "', coerceInputValues=" + this.x36_1 + ', useArrayPolymorphism=' + this.y36_1 + ', ') + ("classDiscriminator='" + this.z36_1 + "', allowSpecialFloatingPointValues=" + this.a37_1 + ', useAlternativeNames=' + this.b37_1 + ', ') + ('namingStrategy=' + this.c37_1 + ', decodeEnumsCaseInsensitive=' + this.d37_1 + ')');
  };
  function JsonDecoder() {
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
    var k = _name_for_destructuring_parameter_0__wldtmu.n2();
    // Inline function 'kotlin.collections.component2' call
    var v = _name_for_destructuring_parameter_0__wldtmu.o2();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.JsonObject.toString.<anonymous>.<anonymous>' call
    printQuoted(this_0, k);
    this_0.x5(_Char___init__impl__6a9atx(58));
    this_0.v5(v);
    return this_0.toString();
  }
  function JsonObject(content) {
    JsonElement.call(this);
    this.g37_1 = content;
  }
  protoOf(JsonObject).k2 = function () {
    return this.g37_1.k2();
  };
  protoOf(JsonObject).i2 = function () {
    return this.g37_1.i2();
  };
  protoOf(JsonObject).l = function () {
    return this.g37_1.l();
  };
  protoOf(JsonObject).j2 = function () {
    return this.g37_1.j2();
  };
  protoOf(JsonObject).h37 = function (key) {
    return this.g37_1.r2(key);
  };
  protoOf(JsonObject).r2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.h37((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).i37 = function (key) {
    return this.g37_1.u2(key);
  };
  protoOf(JsonObject).u2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.i37((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).s = function () {
    return this.g37_1.s();
  };
  protoOf(JsonObject).equals = function (other) {
    return equals(this.g37_1, other);
  };
  protoOf(JsonObject).hashCode = function () {
    return hashCode(this.g37_1);
  };
  protoOf(JsonObject).toString = function () {
    var tmp = this.g37_1.k2();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  };
  function error(_this__u8e3s4, element) {
    _init_properties_JsonElement_kt__7cbdc2();
    throw IllegalArgumentException_init_$Create$('Element ' + getKClassFromExpression(_this__u8e3s4) + ' is not a ' + element);
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
    return this.j37();
  };
  function Companion_2() {
  }
  var Companion_instance_3;
  function Companion_getInstance_7() {
    return Companion_instance_3;
  }
  function JsonArray(content) {
    JsonElement.call(this);
    this.k37_1 = content;
  }
  protoOf(JsonArray).l = function () {
    return this.k37_1.l();
  };
  protoOf(JsonArray).l37 = function (element) {
    return this.k37_1.q(element);
  };
  protoOf(JsonArray).q = function (element) {
    if (!(element instanceof JsonElement))
      return false;
    return this.l37(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).m37 = function (elements) {
    return this.k37_1.r(elements);
  };
  protoOf(JsonArray).r = function (elements) {
    return this.m37(elements);
  };
  protoOf(JsonArray).m = function (index) {
    return this.k37_1.m(index);
  };
  protoOf(JsonArray).n37 = function (element) {
    return this.k37_1.o(element);
  };
  protoOf(JsonArray).o = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.n37(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).s = function () {
    return this.k37_1.s();
  };
  protoOf(JsonArray).n = function () {
    return this.k37_1.n();
  };
  protoOf(JsonArray).p = function (index) {
    return this.k37_1.p(index);
  };
  protoOf(JsonArray).equals = function (other) {
    return equals(this.k37_1, other);
  };
  protoOf(JsonArray).hashCode = function () {
    return hashCode(this.k37_1);
  };
  protoOf(JsonArray).toString = function () {
    return joinToString(this.k37_1, ',', '[', ']');
  };
  function _get_$cachedSerializer__te6jhj($this) {
    return $this.p37_1.o2();
  }
  function JsonNull$_anonymous__enib48() {
    return JsonNullSerializer_getInstance();
  }
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.o37_1 = 'null';
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.p37_1 = lazy(tmp_0, JsonNull$_anonymous__enib48);
  }
  protoOf(JsonNull).j37 = function () {
    return this.o37_1;
  };
  protoOf(JsonNull).q37 = function () {
    return _get_$cachedSerializer__te6jhj(this);
  };
  protoOf(JsonNull).s2z = function (typeParamsSerializers) {
    return this.q37();
  };
  var JsonNull_instance;
  function JsonNull_getInstance() {
    if (JsonNull_instance == null)
      new JsonNull();
    return JsonNull_instance;
  }
  function JsonLiteral(body, isString, coerceToInlineType) {
    coerceToInlineType = coerceToInlineType === VOID ? null : coerceToInlineType;
    JsonPrimitive.call(this);
    this.r37_1 = isString;
    this.s37_1 = coerceToInlineType;
    this.t37_1 = toString(body);
    if (!(this.s37_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!this.s37_1.m2r()) {
        // Inline function 'kotlin.require.<anonymous>' call
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  protoOf(JsonLiteral).j37 = function () {
    return this.t37_1;
  };
  protoOf(JsonLiteral).toString = function () {
    var tmp;
    if (this.r37_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.JsonLiteral.toString.<anonymous>' call
      printQuoted(this_0, this.t37_1);
      tmp = this_0.toString();
    } else {
      tmp = this.t37_1;
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
    if (!(this.r37_1 === other.r37_1))
      return false;
    if (!(this.t37_1 === other.t37_1))
      return false;
    return true;
  };
  protoOf(JsonLiteral).hashCode = function () {
    var result = getBooleanHashCode(this.r37_1);
    result = imul(31, result) + getStringHashCode(this.t37_1) | 0;
    return result;
  };
  function JsonPrimitive_0(value) {
    _init_properties_JsonElement_kt__7cbdc2();
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, true);
  }
  function get_booleanOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toBooleanStrictOrNull(_this__u8e3s4.j37());
  }
  function get_int(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.mapExceptions' call
    var tmp;
    try {
      // Inline function 'kotlinx.serialization.json.<get-int>.<anonymous>' call
      tmp = (new StringJsonLexer(_this__u8e3s4.j37())).u37();
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
      throw NumberFormatException_init_$Create$(_this__u8e3s4.j37() + ' is not an Int');
    return result.fb();
  }
  function get_long(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.mapExceptions' call
    var tmp;
    try {
      // Inline function 'kotlinx.serialization.json.<get-long>.<anonymous>' call
      tmp = (new StringJsonLexer(_this__u8e3s4.j37())).u37();
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
    var this_0 = _this__u8e3s4.j37();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toDouble(this_0);
  }
  function get_double(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toDouble(_this__u8e3s4.j37());
  }
  function get_contentOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.j37();
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
  var properties_initialized_JsonElement_kt_abxy8s;
  function _init_properties_JsonElement_kt__7cbdc2() {
    if (!properties_initialized_JsonElement_kt_abxy8s) {
      properties_initialized_JsonElement_kt_abxy8s = true;
      jsonUnquotedLiteralDescriptor = InlinePrimitiveDescriptor('kotlinx.serialization.json.JsonUnquotedLiteral', serializer(StringCompanionObject_instance));
    }
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
  function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
    $this$buildSerialDescriptor.u2q('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
    $this$buildSerialDescriptor.u2q('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
    $this$buildSerialDescriptor.u2q('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
    $this$buildSerialDescriptor.u2q('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
    $this$buildSerialDescriptor.u2q('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
    return Unit_instance;
  }
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return JsonPrimitiveSerializer_getInstance().v37_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return JsonNullSerializer_getInstance().w37_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return JsonLiteralSerializer_getInstance().x37_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return JsonObjectSerializer_getInstance().y37_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return JsonArraySerializer_getInstance().z37_1;
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.a38_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
  }
  protoOf(JsonElementSerializer).k2q = function () {
    return this.a38_1;
  };
  protoOf(JsonElementSerializer).l2q = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.f37();
  };
  var JsonElementSerializer_instance;
  function JsonElementSerializer_getInstance() {
    if (JsonElementSerializer_instance == null)
      new JsonElementSerializer();
    return JsonElementSerializer_instance;
  }
  function JsonObjectDescriptor() {
    JsonObjectDescriptor_instance = this;
    this.b38_1 = MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).k2q();
    this.c38_1 = 'kotlinx.serialization.json.JsonObject';
  }
  protoOf(JsonObjectDescriptor).k2r = function () {
    return this.b38_1.k2r();
  };
  protoOf(JsonObjectDescriptor).l2r = function () {
    return this.b38_1.l2r();
  };
  protoOf(JsonObjectDescriptor).m2r = function () {
    return this.b38_1.m2r();
  };
  protoOf(JsonObjectDescriptor).f2r = function () {
    return this.b38_1.f2r();
  };
  protoOf(JsonObjectDescriptor).n2r = function () {
    return this.b38_1.n2r();
  };
  protoOf(JsonObjectDescriptor).o2r = function (index) {
    return this.b38_1.o2r(index);
  };
  protoOf(JsonObjectDescriptor).p2r = function (index) {
    return this.b38_1.p2r(index);
  };
  protoOf(JsonObjectDescriptor).q2r = function (name) {
    return this.b38_1.q2r(name);
  };
  protoOf(JsonObjectDescriptor).r2r = function (index) {
    return this.b38_1.r2r(index);
  };
  protoOf(JsonObjectDescriptor).s2r = function (index) {
    return this.b38_1.s2r(index);
  };
  protoOf(JsonObjectDescriptor).j2r = function () {
    return this.c38_1;
  };
  var JsonObjectDescriptor_instance;
  function JsonObjectDescriptor_getInstance() {
    if (JsonObjectDescriptor_instance == null)
      new JsonObjectDescriptor();
    return JsonObjectDescriptor_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this.y37_1 = JsonObjectDescriptor_getInstance();
  }
  protoOf(JsonObjectSerializer).k2q = function () {
    return this.y37_1;
  };
  protoOf(JsonObjectSerializer).l2q = function (decoder) {
    verify(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).l2q(decoder));
  };
  var JsonObjectSerializer_instance;
  function JsonObjectSerializer_getInstance() {
    if (JsonObjectSerializer_instance == null)
      new JsonObjectSerializer();
    return JsonObjectSerializer_instance;
  }
  function defer(deferred) {
    return new defer$1(deferred);
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this;
    this.v37_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
  }
  protoOf(JsonPrimitiveSerializer).k2q = function () {
    return this.v37_1;
  };
  protoOf(JsonPrimitiveSerializer).l2q = function (decoder) {
    var result = asJsonDecoder(decoder).f37();
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
    this.w37_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
  }
  protoOf(JsonNullSerializer).k2q = function () {
    return this.w37_1;
  };
  protoOf(JsonNullSerializer).l2q = function (decoder) {
    verify(decoder);
    if (decoder.r2s()) {
      throw new JsonDecodingException("Expected 'null' literal");
    }
    decoder.s2s();
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
    this.x37_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  protoOf(JsonLiteralSerializer).k2q = function () {
    return this.x37_1;
  };
  protoOf(JsonLiteralSerializer).l2q = function (decoder) {
    var result = asJsonDecoder(decoder).f37();
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
  function JsonArrayDescriptor() {
    JsonArrayDescriptor_instance = this;
    this.d38_1 = ListSerializer(JsonElementSerializer_getInstance()).k2q();
    this.e38_1 = 'kotlinx.serialization.json.JsonArray';
  }
  protoOf(JsonArrayDescriptor).k2r = function () {
    return this.d38_1.k2r();
  };
  protoOf(JsonArrayDescriptor).l2r = function () {
    return this.d38_1.l2r();
  };
  protoOf(JsonArrayDescriptor).m2r = function () {
    return this.d38_1.m2r();
  };
  protoOf(JsonArrayDescriptor).f2r = function () {
    return this.d38_1.f2r();
  };
  protoOf(JsonArrayDescriptor).n2r = function () {
    return this.d38_1.n2r();
  };
  protoOf(JsonArrayDescriptor).o2r = function (index) {
    return this.d38_1.o2r(index);
  };
  protoOf(JsonArrayDescriptor).p2r = function (index) {
    return this.d38_1.p2r(index);
  };
  protoOf(JsonArrayDescriptor).q2r = function (name) {
    return this.d38_1.q2r(name);
  };
  protoOf(JsonArrayDescriptor).r2r = function (index) {
    return this.d38_1.r2r(index);
  };
  protoOf(JsonArrayDescriptor).s2r = function (index) {
    return this.d38_1.s2r(index);
  };
  protoOf(JsonArrayDescriptor).j2r = function () {
    return this.e38_1;
  };
  var JsonArrayDescriptor_instance;
  function JsonArrayDescriptor_getInstance() {
    if (JsonArrayDescriptor_instance == null)
      new JsonArrayDescriptor();
    return JsonArrayDescriptor_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this.z37_1 = JsonArrayDescriptor_getInstance();
  }
  protoOf(JsonArraySerializer).k2q = function () {
    return this.z37_1;
  };
  protoOf(JsonArraySerializer).l2q = function (decoder) {
    verify(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).l2q(decoder));
  };
  var JsonArraySerializer_instance;
  function JsonArraySerializer_getInstance() {
    if (JsonArraySerializer_instance == null)
      new JsonArraySerializer();
    return JsonArraySerializer_instance;
  }
  function verify(decoder) {
    asJsonDecoder(decoder);
  }
  function _get_original__l7ku1m($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.f38_1;
    original$factory();
    return this_0.o2();
  }
  function defer$1($deferred) {
    this.f38_1 = lazy_0($deferred);
  }
  protoOf(defer$1).j2r = function () {
    return _get_original__l7ku1m(this).j2r();
  };
  protoOf(defer$1).n2r = function () {
    return _get_original__l7ku1m(this).n2r();
  };
  protoOf(defer$1).l2r = function () {
    return _get_original__l7ku1m(this).l2r();
  };
  protoOf(defer$1).r2r = function (index) {
    return _get_original__l7ku1m(this).r2r(index);
  };
  protoOf(defer$1).q2r = function (name) {
    return _get_original__l7ku1m(this).q2r(name);
  };
  protoOf(defer$1).o2r = function (index) {
    return _get_original__l7ku1m(this).o2r(index);
  };
  protoOf(defer$1).p2r = function (index) {
    return _get_original__l7ku1m(this).p2r(index);
  };
  protoOf(defer$1).s2r = function (index) {
    return _get_original__l7ku1m(this).s2r(index);
  };
  function original$factory() {
    return getPropertyCallableRef('original', 1, KProperty1, function (receiver) {
      return _get_original__l7ku1m(receiver);
    }, null);
  }
  function readIfAbsent($this, descriptor, index) {
    $this.h38_1 = !descriptor.s2r(index) ? descriptor.p2r(index).f2r() : false;
    return $this.h38_1;
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
    tmp.g38_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.h38_1 = false;
  }
  protoOf(JsonElementMarker).n2x = function (index) {
    this.g38_1.n2x(index);
  };
  protoOf(JsonElementMarker).o2x = function () {
    return this.g38_1.o2x();
  };
  function JsonDecodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonDecodingException);
  }
  function JsonDecodingException_0(offset, message, input) {
    return JsonDecodingException_1(offset, message + '\nJSON input: ' + minify(input, offset));
  }
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    _this__u8e3s4.i38('Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification', VOID, get_specialFlowingValuesHint());
  }
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.j2r() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.n2r() + "'.\n") + get_allowStructuredMapKeysHint());
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
  function JsonException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, JsonException);
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
  function unexpectedFpErrorMessage(value, key, output) {
    return 'Unexpected special floating-point value ' + toString(value) + ' with key ' + key + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + (get_specialFlowingValuesHint() + '\n') + ('Current output: ' + minify(output));
  }
  function get_JsonDeserializationNamesKey() {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return JsonDeserializationNamesKey;
  }
  var JsonDeserializationNamesKey;
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
    var index = _this__u8e3s4.q2r(name);
    if (!(index === -3))
      return index;
    if (!json.z35_1.b37_1)
      return index;
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  }
  function getJsonNameIndexOrThrow(_this__u8e3s4, json, name, suffix) {
    suffix = suffix === VOID ? '' : suffix;
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var index = getJsonNameIndex(_this__u8e3s4, json, name);
    if (index === -3)
      throw SerializationException_init_$Create$(_this__u8e3s4.j2r() + " does not contain element with name '" + name + "'" + suffix);
    return index;
  }
  function namingStrategy(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return equals(_this__u8e3s4.n2r(), CLASS_getInstance()) ? json.z35_1.c37_1 : null;
  }
  function deserializationNamesMap(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(_this__u8e3s4);
    var tmp_0 = get_JsonDeserializationNamesKey();
    return tmp.k38(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
  }
  function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return _this__u8e3s4.z35_1.d37_1 ? equals(descriptor.n2r(), ENUM_getInstance()) : false;
  }
  function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).u2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function buildDeserializationNamesMap(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var builder = LinkedHashMap_init_$Create$();
    var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
    var strategyForClasses = namingStrategy(_this__u8e3s4, json);
    var inductionVariable = 0;
    var last = _this__u8e3s4.l2r();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.filterIsInstance' call
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var this_0 = _this__u8e3s4.o2r(i);
        var destination = ArrayList_init_$Create$();
        var tmp0_iterator = this_0.n();
        while (tmp0_iterator.b1()) {
          var element = tmp0_iterator.d1();
          if (element instanceof JsonNames) {
            destination.y(element);
          }
        }
        var tmp1_safe_receiver = singleOrNull(destination);
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.l38_1;
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
          tmp_0 = _this__u8e3s4.r2r(i).toLowerCase();
        } else if (!(strategyForClasses == null)) {
          tmp_0 = strategyForClasses.m38(_this__u8e3s4, i, _this__u8e3s4.r2r(i));
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
    if (builder.s()) {
      // Inline function 'kotlinx.serialization.json.internal.buildDeserializationNamesMap.<anonymous>' call
      tmp_1 = emptyMap();
    } else {
      tmp_1 = builder;
    }
    return tmp_1;
  }
  function buildDeserializationNamesMap$putOrThrow(_this__u8e3s4, $this_buildDeserializationNamesMap, name, index) {
    var entity = equals($this_buildDeserializationNamesMap.n2r(), ENUM_getInstance()) ? 'enum value' : 'property';
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(_this__u8e3s4, Map) ? _this__u8e3s4 : THROW_CCE()).r2(name)) {
      throw new JsonException("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.r2r(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.r2r(getValue(_this__u8e3s4, name)) + ' in ' + $this_buildDeserializationNamesMap));
    }
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.l2(name, index);
  }
  function deserializationNamesMap$lambda($descriptor, $this_deserializationNamesMap) {
    return function () {
      return buildDeserializationNamesMap($descriptor, $this_deserializationNamesMap);
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
    var newSize = imul($this.p38_1, 2);
    $this.n38_1 = copyOf($this.n38_1, newSize);
    $this.o38_1 = copyOf_0($this.o38_1, newSize);
  }
  function JsonPath() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.n38_1 = fillArrayVal(Array(8), null);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.o38_1 = tmp_2;
    this.p38_1 = -1;
  }
  protoOf(JsonPath).q38 = function (sd) {
    this.p38_1 = this.p38_1 + 1 | 0;
    var depth = this.p38_1;
    if (depth === this.n38_1.length) {
      resize(this);
    }
    this.n38_1[depth] = sd;
  };
  protoOf(JsonPath).r38 = function (index) {
    this.o38_1[this.p38_1] = index;
  };
  protoOf(JsonPath).s38 = function (key) {
    var tmp;
    if (!(this.o38_1[this.p38_1] === -2)) {
      this.p38_1 = this.p38_1 + 1 | 0;
      tmp = this.p38_1 === this.n38_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.n38_1[this.p38_1] = key;
    this.o38_1[this.p38_1] = -2;
  };
  protoOf(JsonPath).t38 = function () {
    if (this.o38_1[this.p38_1] === -2) {
      this.n38_1[this.p38_1] = Tombstone_instance;
    }
  };
  protoOf(JsonPath).u38 = function () {
    var depth = this.p38_1;
    if (this.o38_1[depth] === -2) {
      this.o38_1[depth] = -1;
      this.p38_1 = this.p38_1 - 1 | 0;
    }
    if (!(this.p38_1 === -1)) {
      this.p38_1 = this.p38_1 - 1 | 0;
    }
  };
  protoOf(JsonPath).v38 = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>' call
    this_0.w5('$');
    // Inline function 'kotlin.repeat' call
    var times = this.p38_1 + 1 | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>.<anonymous>' call
        var element = this.n38_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.n2r(), LIST_getInstance())) {
            if (!(this.o38_1[index] === -1)) {
              this_0.w5('[');
              this_0.v5(this.o38_1[index]);
              this_0.w5(']');
            }
          } else {
            var idx = this.o38_1[index];
            if (idx >= 0) {
              this_0.w5('.');
              this_0.w5(element.r2r(idx));
            }
          }
        } else {
          if (!(element === Tombstone_instance)) {
            this_0.w5('[');
            this_0.w5("'");
            this_0.v5(element);
            this_0.w5("'");
            this_0.w5(']');
          }
        }
      }
       while (inductionVariable < times);
    return this_0.toString();
  };
  protoOf(JsonPath).toString = function () {
    return this.v38();
  };
  function readObject($this) {
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.w38_1.z38(get_TC_BEGIN_OBJ());
    if ($this.w38_1.a39() === get_TC_COMMA()) {
      $this.w38_1.i38('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.linkedMapOf' call
    var result = LinkedHashMap_init_$Create$();
    $l$loop: while ($this.w38_1.b39()) {
      var key = $this.x38_1 ? $this.w38_1.d39() : $this.w38_1.c39();
      $this.w38_1.z38(get_TC_COLON());
      // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObject.<anonymous>' call
      var element = $this.e39();
      // Inline function 'kotlin.collections.set' call
      result.l2(key, element);
      lastToken = $this.w38_1.f39();
      var tmp0_subject = lastToken;
      if (tmp0_subject !== get_TC_COMMA())
        if (tmp0_subject === get_TC_END_OBJ())
          break $l$loop;
        else {
          $this.w38_1.i38('Expected end of the object or comma');
        }
    }
    if (lastToken === get_TC_BEGIN_OBJ()) {
      $this.w38_1.z38(get_TC_END_OBJ());
    } else if (lastToken === get_TC_COMMA()) {
      $this.w38_1.i38('Unexpected trailing comma');
    }
    return new JsonObject(result);
  }
  function readObject_0(_this__u8e3s4, $this, $completion) {
    var tmp = new $readObjectCOROUTINE$0($this, _this__u8e3s4, $completion);
    tmp.cd_1 = Unit_instance;
    tmp.dd_1 = null;
    return tmp.md();
  }
  function readArray($this) {
    var lastToken = $this.w38_1.f39();
    if ($this.w38_1.a39() === get_TC_COMMA()) {
      $this.w38_1.i38('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.arrayListOf' call
    var result = ArrayList_init_$Create$();
    while ($this.w38_1.b39()) {
      var element = $this.e39();
      result.y(element);
      lastToken = $this.w38_1.f39();
      if (!(lastToken === get_TC_COMMA())) {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var this_0 = $this.w38_1;
        var condition = lastToken === get_TC_END_LIST();
        var position = this_0.l36_1;
        if (!condition) {
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readArray.<anonymous>' call
          var tmp$ret$1 = 'Expected end of the array or comma';
          this_0.i38(tmp$ret$1, position);
        }
      }
    }
    if (lastToken === get_TC_BEGIN_LIST()) {
      $this.w38_1.z38(get_TC_END_LIST());
    } else if (lastToken === get_TC_COMMA()) {
      $this.w38_1.i38('Unexpected trailing comma');
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.x38_1 ? true : !isString) {
      tmp = $this.w38_1.d39();
    } else {
      tmp = $this.w38_1.c39();
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
    this.c3a_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonTreeReader$readDeepRecursive$slambda).h3a = function ($this$$receiver, it, $completion) {
    var tmp = this.i3a($this$$receiver, it, $completion);
    tmp.cd_1 = Unit_instance;
    tmp.dd_1 = null;
    return tmp.md();
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).ai = function (p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.h3a(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).md = function () {
    var suspendResult = this.cd_1;
    $sm: do
      try {
        var tmp = this.ad_1;
        switch (tmp) {
          case 0:
            this.bd_1 = 3;
            this.f3a_1 = this.c3a_1.w38_1.a39();
            if (this.f3a_1 === get_TC_STRING()) {
              this.g3a_1 = readValue(this.c3a_1, true);
              this.ad_1 = 2;
              continue $sm;
            } else {
              if (this.f3a_1 === get_TC_OTHER()) {
                this.g3a_1 = readValue(this.c3a_1, false);
                this.ad_1 = 2;
                continue $sm;
              } else {
                if (this.f3a_1 === get_TC_BEGIN_OBJ()) {
                  this.ad_1 = 1;
                  suspendResult = readObject_0(this.d3a_1, this.c3a_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.f3a_1 === get_TC_BEGIN_LIST()) {
                    this.g3a_1 = readArray(this.c3a_1);
                    this.ad_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.c3a_1.w38_1.i38("Can't begin reading element, unexpected token");
                  }
                }
              }
            }

            break;
          case 1:
            this.g3a_1 = suspendResult;
            this.ad_1 = 2;
            continue $sm;
          case 2:
            return this.g3a_1;
          case 3:
            throw this.dd_1;
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
  protoOf(JsonTreeReader$readDeepRecursive$slambda).i3a = function ($this$$receiver, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.c3a_1, completion);
    i.d3a_1 = $this$$receiver;
    i.e3a_1 = it;
    return i;
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$$receiver, it, $completion) {
      return i.h3a($this$$receiver, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$0(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o39_1 = _this__u8e3s4;
    this.p39_1 = _this__u8e3s4_0;
  }
  protoOf($readObjectCOROUTINE$0).md = function () {
    var suspendResult = this.cd_1;
    $sm: do
      try {
        var tmp = this.ad_1;
        switch (tmp) {
          case 0:
            this.bd_1 = 5;
            var tmp_0 = this;
            tmp_0.q39_1 = this.o39_1;
            this.r39_1 = this.q39_1.w38_1.z38(get_TC_BEGIN_OBJ());
            if (this.q39_1.w38_1.a39() === get_TC_COMMA()) {
              this.q39_1.w38_1.i38('Unexpected leading comma');
            }

            var tmp_1 = this;
            tmp_1.s39_1 = LinkedHashMap_init_$Create$();
            this.ad_1 = 1;
            continue $sm;
          case 1:
            if (!this.q39_1.w38_1.b39()) {
              this.ad_1 = 4;
              continue $sm;
            }

            this.t39_1 = this.q39_1.x38_1 ? this.q39_1.w38_1.d39() : this.q39_1.w38_1.c39();
            this.q39_1.w38_1.z38(get_TC_COLON());
            this.ad_1 = 2;
            suspendResult = this.p39_1.sh(Unit_instance, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            var this_0 = this.s39_1;
            var key = this.t39_1;
            this_0.l2(key, element);
            this.r39_1 = this.q39_1.w38_1.f39();
            var tmp0_subject = this.r39_1;
            if (tmp0_subject === get_TC_COMMA()) {
              this.ad_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === get_TC_END_OBJ()) {
                this.ad_1 = 4;
                continue $sm;
              } else {
                this.q39_1.w38_1.i38('Expected end of the object or comma');
              }
            }

            break;
          case 3:
            this.ad_1 = 1;
            continue $sm;
          case 4:
            if (this.r39_1 === get_TC_BEGIN_OBJ()) {
              this.q39_1.w38_1.z38(get_TC_END_OBJ());
            } else if (this.r39_1 === get_TC_COMMA()) {
              this.q39_1.w38_1.i38('Unexpected trailing comma');
            }

            return new JsonObject(this.s39_1);
          case 5:
            throw this.dd_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.bd_1 === 5) {
          throw e;
        } else {
          this.ad_1 = this.bd_1;
          this.dd_1 = e;
        }
      }
     while (true);
  };
  function JsonTreeReader(configuration, lexer) {
    this.w38_1 = lexer;
    this.x38_1 = configuration.s36_1;
    this.y38_1 = 0;
  }
  protoOf(JsonTreeReader).e39 = function () {
    var token = this.w38_1.a39();
    var tmp;
    if (token === get_TC_STRING()) {
      tmp = readValue(this, true);
    } else if (token === get_TC_OTHER()) {
      tmp = readValue(this, false);
    } else if (token === get_TC_BEGIN_OBJ()) {
      var tmp_0;
      this.y38_1 = this.y38_1 + 1 | 0;
      if (this.y38_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      this.y38_1 = this.y38_1 - 1 | 0;
      tmp = result;
    } else if (token === get_TC_BEGIN_LIST()) {
      tmp = readArray(this);
    } else {
      this.w38_1.i38('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  };
  function classDiscriminator(_this__u8e3s4, json) {
    var tmp0_iterator = _this__u8e3s4.k2r().n();
    while (tmp0_iterator.b1()) {
      var annotation = tmp0_iterator.d1();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.j3a_1;
    }
    return json.z35_1.z36_1;
  }
  function decodeSerializableValuePolymorphic(_this__u8e3s4, deserializer) {
    var tmp;
    if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.e37().z35_1.y36_1;
    }
    if (tmp) {
      return deserializer.l2q(_this__u8e3s4);
    }
    var discriminator = classDiscriminator(deserializer.k2q(), _this__u8e3s4.e37());
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = _this__u8e3s4.f37();
    var descriptor = deserializer.k2q();
    if (!(value instanceof JsonObject)) {
      throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.j2r() + ', but had ' + getKClassFromExpression(value));
    }
    var jsonTree = value;
    var tmp0_safe_receiver = jsonTree.i37(discriminator);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    var type = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.j37();
    var tmp2_elvis_lhs = deserializer.z2q(_this__u8e3s4, type);
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      throwSerializerNotFound(type, jsonTree);
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var actualSerializer = tmp_0;
    var tmp_1 = _this__u8e3s4.e37();
    return readPolymorphicJson(tmp_1, discriminator, jsonTree, isInterface(actualSerializer, DeserializationStrategy) ? actualSerializer : THROW_CCE());
  }
  function throwSerializerNotFound(type, jsonTree) {
    var suffix = type == null ? "missing class discriminator ('null')" : "class discriminator '" + type + "'";
    throw JsonDecodingException_0(-1, 'Polymorphic serializer was not found for ' + suffix, jsonTree.toString());
  }
  function Key() {
  }
  function DescriptorSchemaCache() {
    this.j38_1 = createMapForCache(16);
  }
  protoOf(DescriptorSchemaCache).k3a = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.set' call
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.j38_1;
    var value_0 = this_0.u2(descriptor);
    var tmp;
    if (value_0 == null) {
      // Inline function 'kotlinx.serialization.json.internal.DescriptorSchemaCache.set.<anonymous>' call
      var answer = createMapForCache(2);
      this_0.l2(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var this_1 = tmp;
    var key_0 = key instanceof Key ? key : THROW_CCE();
    var value_1 = !(value == null) ? value : THROW_CCE();
    this_1.l2(key_0, value_1);
  };
  protoOf(DescriptorSchemaCache).k38 = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.l3a(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.k3a(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).l3a = function (descriptor, key) {
    var tmp0_safe_receiver = this.j38_1.u2(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.u2(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return !(tmp_0 == null) ? tmp_0 : null;
  };
  function DiscriminatorHolder(discriminatorToSkip) {
    this.m3a_1 = discriminatorToSkip;
  }
  function trySkip(_this__u8e3s4, $this, unknownKey) {
    if (_this__u8e3s4 == null)
      return false;
    if (_this__u8e3s4.m3a_1 === unknownKey) {
      _this__u8e3s4.m3a_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    $l$loop: while (true) {
      var tmp = $this.w2t(descriptor);
      if (!!(tmp === -1)) {
        break $l$loop;
      }
    }
  }
  function checkLeadingComma($this) {
    if ($this.f36_1.a39() === get_TC_COMMA()) {
      $this.f36_1.i38('Unexpected leading comma');
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.h36_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.h36_1 === -1)) {
        hasComma = $this.f36_1.o3a();
      }
    } else {
      $this.f36_1.n3a(get_COLON());
    }
    var tmp;
    if ($this.f36_1.b39()) {
      if (decodingKey) {
        if ($this.h36_1 === -1) {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var this_0 = $this.f36_1;
          var condition = !hasComma;
          var position = this_0.l36_1;
          if (!condition) {
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            var tmp$ret$0 = 'Unexpected trailing comma';
            this_0.i38(tmp$ret$0, position);
          }
        } else {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var this_1 = $this.f36_1;
          var condition_0 = hasComma;
          var position_0 = this_1.l36_1;
          if (!condition_0) {
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            var tmp$ret$1 = 'Expected comma after the key-value pair';
            this_1.i38(tmp$ret$1, position_0);
          }
        }
      }
      $this.h36_1 = $this.h36_1 + 1 | 0;
      tmp = $this.h36_1;
    } else {
      if (hasComma) {
        $this.f36_1.i38("Expected '}', but had ',' instead");
      }
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var this_0 = $this.d36_1;
      var elementDescriptor = descriptor.p2r(index);
      var tmp;
      if (!elementDescriptor.f2r()) {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        tmp = $this.f36_1.p3a(true);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.n2r(), ENUM_getInstance())) {
        var tmp_0;
        if (elementDescriptor.f2r()) {
          // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
          tmp_0 = $this.f36_1.p3a(false);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        var tmp0_elvis_lhs = $this.f36_1.q3a($this.j36_1.s36_1);
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
          $this.f36_1.c39();
          tmp$ret$1 = true;
          break $l$block_2;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.f36_1.o3a();
    while ($this.f36_1.b39()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.f36_1.n3a(get_COLON());
      var index = getJsonNameIndex(descriptor, $this.d36_1, key);
      var tmp;
      if (!(index === -3)) {
        var tmp_0;
        if ($this.j36_1.x36_1 ? coerceInputValue($this, descriptor, index) : false) {
          hasComma = $this.f36_1.o3a();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.k36_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.n2x(index);
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
    if (hasComma) {
      $this.f36_1.i38('Unexpected trailing comma');
    }
    var tmp1_safe_receiver = $this.k36_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.o2x();
    var tmp_1;
    if (tmp2_elvis_lhs == null) {
      tmp_1 = -1;
    } else {
      tmp_1 = tmp2_elvis_lhs;
    }
    return tmp_1;
  }
  function handleUnknown($this, key) {
    if ($this.j36_1.r36_1 ? true : trySkip($this.i36_1, $this, key)) {
      $this.f36_1.s3a($this.j36_1.s36_1);
    } else {
      $this.f36_1.r3a(key);
    }
    return $this.f36_1.o3a();
  }
  function decodeListIndex($this) {
    var hasComma = $this.f36_1.o3a();
    var tmp;
    if ($this.f36_1.b39()) {
      if (!($this.h36_1 === -1) ? !hasComma : false) {
        $this.f36_1.i38('Expected end of the array or comma');
      }
      $this.h36_1 = $this.h36_1 + 1 | 0;
      tmp = $this.h36_1;
    } else {
      if (hasComma) {
        $this.f36_1.i38('Unexpected trailing comma');
      }
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.j36_1.s36_1) {
      tmp = $this.f36_1.u3a();
    } else {
      tmp = $this.f36_1.t3a();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.d36_1 = json;
    this.e36_1 = mode;
    this.f36_1 = lexer;
    this.g36_1 = this.d36_1.u2t();
    this.h36_1 = -1;
    this.i36_1 = discriminatorHolder;
    this.j36_1 = this.d36_1.z35_1;
    this.k36_1 = this.j36_1.v36_1 ? null : new JsonElementMarker(descriptor);
  }
  protoOf(StreamingJsonDecoder).e37 = function () {
    return this.d36_1;
  };
  protoOf(StreamingJsonDecoder).u2t = function () {
    return this.g36_1;
  };
  protoOf(StreamingJsonDecoder).f37 = function () {
    return (new JsonTreeReader(this.d36_1.z35_1, this.f36_1)).e39();
  };
  protoOf(StreamingJsonDecoder).f2t = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.d36_1.z35_1.y36_1;
      }
      if (tmp) {
        return deserializer.l2q(this);
      }
      var discriminator = classDiscriminator(deserializer.k2q(), this.d36_1);
      var type = this.f36_1.v3a(discriminator, this.j36_1.s36_1);
      var actualSerializer = null;
      if (!(type == null)) {
        actualSerializer = deserializer.z2q(this, type);
      }
      if (actualSerializer == null) {
        return decodeSerializableValuePolymorphic(this, isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE());
      }
      this.i36_1 = new DiscriminatorHolder(discriminator);
      var tmp_0 = actualSerializer.l2q(this);
      var result = !(tmp_0 == null) ? tmp_0 : THROW_CCE();
      return result;
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        var e = $p;
        if (contains_0(ensureNotNull(e.message), 'at path'))
          throw e;
        throw new MissingFieldException(e.a2r_1, plus(e.message, ' at path: ') + this.f36_1.m36_1.v38(), e);
      } else {
        throw $p;
      }
    }
  };
  protoOf(StreamingJsonDecoder).g2t = function (descriptor) {
    var newMode = switchMode(this.d36_1, descriptor);
    this.f36_1.m36_1.q38(descriptor);
    this.f36_1.n3a(newMode.y3a_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.ta_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.d36_1, newMode, this.f36_1, descriptor, this.i36_1);
        break;
      default:
        var tmp_0;
        if (this.e36_1.equals(newMode) ? this.d36_1.z35_1.v36_1 : false) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.d36_1, newMode, this.f36_1, descriptor, this.i36_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).h2t = function (descriptor) {
    if (this.d36_1.z35_1.r36_1 ? descriptor.l2r() === 0 : false) {
      skipLeftoverElements(this, descriptor);
    }
    this.f36_1.n3a(this.e36_1.z3a_1);
    this.f36_1.m36_1.u38();
  };
  protoOf(StreamingJsonDecoder).r2s = function () {
    var tmp;
    var tmp0_safe_receiver = this.k36_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h38_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.f36_1.a3b();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).s2s = function () {
    return null;
  };
  protoOf(StreamingJsonDecoder).s2t = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.e36_1.equals(WriteMode_MAP_getInstance()) ? (index & 1) === 0 : false;
    if (isMapKey) {
      this.f36_1.m36_1.t38();
    }
    var value = protoOf(AbstractDecoder).s2t.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.f36_1.m36_1.s38(value);
    }
    return value;
  };
  protoOf(StreamingJsonDecoder).w2t = function (descriptor) {
    var index;
    switch (this.e36_1.ta_1) {
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
    if (!this.e36_1.equals(WriteMode_MAP_getInstance())) {
      this.f36_1.m36_1.r38(index);
    }
    return index;
  };
  protoOf(StreamingJsonDecoder).t2s = function () {
    var tmp;
    if (this.j36_1.s36_1) {
      tmp = this.f36_1.c3b();
    } else {
      tmp = this.f36_1.b3b();
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).u2s = function () {
    var value = this.f36_1.u37();
    if (!value.equals(toLong(value.rc()))) {
      this.f36_1.i38("Failed to parse byte for input '" + value.toString() + "'");
    }
    return value.rc();
  };
  protoOf(StreamingJsonDecoder).v2s = function () {
    var value = this.f36_1.u37();
    if (!value.equals(toLong(value.sc()))) {
      this.f36_1.i38("Failed to parse short for input '" + value.toString() + "'");
    }
    return value.sc();
  };
  protoOf(StreamingJsonDecoder).w2s = function () {
    var value = this.f36_1.u37();
    if (!value.equals(toLong(value.fb()))) {
      this.f36_1.i38("Failed to parse int for input '" + value.toString() + "'");
    }
    return value.fb();
  };
  protoOf(StreamingJsonDecoder).x2s = function () {
    return this.f36_1.u37();
  };
  protoOf(StreamingJsonDecoder).y2s = function () {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var this_0 = this.f36_1;
      var input = this_0.d39();
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
          this_0.i38("Failed to parse type '" + 'float' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.d36_1.z35_1.a37_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.f36_1, result);
  };
  protoOf(StreamingJsonDecoder).z2s = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var this_0 = this.f36_1;
      var input = this_0.d39();
      try {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeDouble.<anonymous>' call
        tmp$ret$1 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          this_0.i38("Failed to parse type '" + 'double' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.d36_1.z35_1.a37_1;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.f36_1, result);
  };
  protoOf(StreamingJsonDecoder).a2t = function () {
    var string = this.f36_1.d39();
    if (!(string.length === 1)) {
      this.f36_1.i38("Expected single char, but got '" + string + "'");
    }
    return charSequenceGet(string, 0);
  };
  protoOf(StreamingJsonDecoder).b2t = function () {
    var tmp;
    if (this.j36_1.s36_1) {
      tmp = this.f36_1.u3a();
    } else {
      tmp = this.f36_1.c39();
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).d2t = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.f36_1, this.d36_1) : protoOf(AbstractDecoder).d2t.call(this, descriptor);
  };
  protoOf(StreamingJsonDecoder).c2t = function (enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this.d36_1, this.b2t(), ' at path ' + this.f36_1.m36_1.v38());
  };
  function JsonDecoderForUnsignedTypes(lexer, json) {
    AbstractDecoder.call(this);
    this.d3b_1 = lexer;
    this.e3b_1 = json.u2t();
  }
  protoOf(JsonDecoderForUnsignedTypes).u2t = function () {
    return this.e3b_1;
  };
  protoOf(JsonDecoderForUnsignedTypes).w2t = function (descriptor) {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(JsonDecoderForUnsignedTypes).w2s = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var this_0 = this.d3b_1;
      var input = this_0.d39();
      try {
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeInt.<anonymous>' call
        // Inline function 'kotlin.UInt.toInt' call
        var this_1 = toUInt(input);
        tmp$ret$2 = _UInt___get_data__impl__f0vqqw(this_1);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          this_0.i38("Failed to parse type '" + 'UInt' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).x2s = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var this_0 = this.d3b_1;
      var input = this_0.d39();
      try {
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeLong.<anonymous>' call
        // Inline function 'kotlin.ULong.toLong' call
        var this_1 = toULong(input);
        tmp$ret$2 = _ULong___get_data__impl__fggpzb(this_1);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          this_0.i38("Failed to parse type '" + 'ULong' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).u2s = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var this_0 = this.d3b_1;
      var input = this_0.d39();
      try {
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeByte.<anonymous>' call
        // Inline function 'kotlin.UByte.toByte' call
        var this_1 = toUByte(input);
        tmp$ret$2 = _UByte___get_data__impl__jof9qr(this_1);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          this_0.i38("Failed to parse type '" + 'UByte' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).v2s = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var this_0 = this.d3b_1;
      var input = this_0.d39();
      try {
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeShort.<anonymous>' call
        // Inline function 'kotlin.UShort.toShort' call
        var this_1 = toUShort(input);
        tmp$ret$2 = _UShort___get_data__impl__g0245(this_1);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          this_0.i38("Failed to parse type '" + 'UShort' + "' for input '" + input + "'");
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
  function get_isUnsignedNumber(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.m2r() ? get_unsignedNumberDescriptors().q(_this__u8e3s4) : false;
  }
  var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
  function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
    if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
      properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
      unsignedNumberDescriptors = setOf([serializer_0(Companion_getInstance()).k2q(), serializer_1(Companion_getInstance_0()).k2q(), serializer_2(Companion_getInstance_1()).k2q(), serializer_3(Companion_getInstance_2()).k2q()]);
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
    _this__u8e3s4.x5(get_STRING());
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
          _this__u8e3s4.p8(value, lastPos, i);
          _this__u8e3s4.w5(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0)) {
      _this__u8e3s4.p8(value, lastPos, value.length);
    } else {
      _this__u8e3s4.w5(value);
    }
    _this__u8e3s4.x5(get_STRING());
  }
  function toBooleanStrictOrNull(_this__u8e3s4) {
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
    throw JsonDecodingException_0(-1, "Failed to parse literal as '" + primitive + "' value", toString($this.k3b()));
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
    this.h3b_1 = json;
    this.i3b_1 = value;
    this.j3b_1 = this.e37().z35_1;
  }
  protoOf(AbstractJsonTreeDecoder).e37 = function () {
    return this.h3b_1;
  };
  protoOf(AbstractJsonTreeDecoder).o2 = function () {
    return this.i3b_1;
  };
  protoOf(AbstractJsonTreeDecoder).u2t = function () {
    return this.e37().u2t();
  };
  protoOf(AbstractJsonTreeDecoder).k3b = function () {
    var tmp0_safe_receiver = this.c34();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.currentObject.<anonymous>' call
      tmp = this.l3b(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.o2() : tmp1_elvis_lhs;
  };
  protoOf(AbstractJsonTreeDecoder).f37 = function () {
    return this.k3b();
  };
  protoOf(AbstractJsonTreeDecoder).f2t = function (deserializer) {
    return decodeSerializableValuePolymorphic(this, deserializer);
  };
  protoOf(AbstractJsonTreeDecoder).d34 = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeDecoder).g2t = function (descriptor) {
    var currentObject = this.k3b();
    var tmp0_subject = descriptor.n2r();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.e37();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      if (!(currentObject instanceof JsonArray)) {
        throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.j2r() + ', but had ' + getKClassFromExpression(currentObject));
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.e37();
        var keyDescriptor = carrierDescriptor(descriptor.p2r(0), this_0.u2t());
        var keyKind = keyDescriptor.n2r();
        var tmp_2;
        var tmp_3;
        if (keyKind instanceof PrimitiveKind) {
          tmp_3 = true;
        } else {
          tmp_3 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_3) {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
          var tmp_4 = this.e37();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          if (!(currentObject instanceof JsonObject)) {
            throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.j2r() + ', but had ' + getKClassFromExpression(currentObject));
          }
          tmp_2 = new JsonTreeMapDecoder(tmp_4, currentObject);
        } else {
          if (this_0.z35_1.t36_1) {
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
            var tmp_5 = this.e37();
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            if (!(currentObject instanceof JsonArray)) {
              throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.j2r() + ', but had ' + getKClassFromExpression(currentObject));
            }
            tmp_2 = new JsonTreeListDecoder(tmp_5, currentObject);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_2;
      } else {
        var tmp_6 = this.e37();
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        if (!(currentObject instanceof JsonObject)) {
          throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.j2r() + ', but had ' + getKClassFromExpression(currentObject));
        }
        tmp = new JsonTreeDecoder(tmp_6, currentObject);
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).h2t = function (descriptor) {
  };
  protoOf(AbstractJsonTreeDecoder).r2s = function () {
    var tmp = this.k3b();
    return !(tmp instanceof JsonNull);
  };
  protoOf(AbstractJsonTreeDecoder).m3b = function (tag) {
    var currentElement = this.l3b(tag);
    var tmp0_elvis_lhs = currentElement instanceof JsonPrimitive ? currentElement : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_0(-1, 'Expected JsonPrimitive at ' + tag + ', found ' + currentElement, toString(this.k3b()));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).n3b = function (tag, enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this.e37(), this.m3b(tag).j37());
  };
  protoOf(AbstractJsonTreeDecoder).p34 = function (tag, enumDescriptor) {
    return this.n3b((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).o3b = function (tag) {
    return !(this.l3b(tag) === JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeDecoder).f34 = function (tag) {
    return this.o3b((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).p3b = function (tag) {
    var value = this.m3b(tag);
    if (!this.e37().z35_1.s36_1) {
      var literal = asLiteral(value, this, 'boolean');
      if (literal.r37_1)
        throw JsonDecodingException_0(-1, "Boolean literal for key '" + tag + "' should be unquoted.\n" + get_lenientHint(), toString(this.k3b()));
    }
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedBoolean.<anonymous>' call
        var tmp0_elvis_lhs = get_booleanOrNull(value);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          throw IllegalArgumentException_init_$Create$_0();
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var tmp0_elvis_lhs_0 = tmp;
        var tmp_0;
        if (tmp0_elvis_lhs_0 == null) {
          unparsedPrimitive(this, 'boolean');
        } else {
          tmp_0 = tmp0_elvis_lhs_0;
        }
        tmp$ret$1 = tmp_0;
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
  protoOf(AbstractJsonTreeDecoder).g34 = function (tag) {
    return this.p3b((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).q3b = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.m3b(tag);
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
  protoOf(AbstractJsonTreeDecoder).h34 = function (tag) {
    return this.q3b((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).r3b = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.m3b(tag);
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
  protoOf(AbstractJsonTreeDecoder).i34 = function (tag) {
    return this.r3b((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).s3b = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.m3b(tag);
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
  protoOf(AbstractJsonTreeDecoder).j34 = function (tag) {
    return this.s3b((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).t3b = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.m3b(tag);
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
  protoOf(AbstractJsonTreeDecoder).k34 = function (tag) {
    return this.t3b((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).u3b = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.m3b(tag);
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
    var specialFp = this.e37().z35_1.a37_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.k3b()));
  };
  protoOf(AbstractJsonTreeDecoder).l34 = function (tag) {
    return this.u3b((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).v3b = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.m3b(tag);
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
    var specialFp = this.e37().z35_1.a37_1;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.k3b()));
  };
  protoOf(AbstractJsonTreeDecoder).m34 = function (tag) {
    return this.v3b((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).w3b = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.m3b(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedChar.<anonymous>' call
        var tmp0_elvis_lhs = single(this_0.j37());
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
  protoOf(AbstractJsonTreeDecoder).n34 = function (tag) {
    return this.w3b((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).x3b = function (tag) {
    var value = this.m3b(tag);
    if (!this.e37().z35_1.s36_1) {
      var literal = asLiteral(value, this, 'string');
      if (!literal.r37_1)
        throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted.\n" + get_lenientHint(), toString(this.k3b()));
    }
    if (value instanceof JsonNull)
      throw JsonDecodingException_0(-1, "Unexpected 'null' value instead of string literal", toString(this.k3b()));
    return value.j37();
  };
  protoOf(AbstractJsonTreeDecoder).o34 = function (tag) {
    return this.x3b((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).y3b = function (tag, inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? new JsonDecoderForUnsignedTypes(new StringJsonLexer(this.m3b(tag).j37()), this.e37()) : protoOf(NamedValueDecoder).q34.call(this, tag, inlineDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).q34 = function (tag, inlineDescriptor) {
    return this.y3b((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).d2t = function (descriptor) {
    return !(this.c34() == null) ? protoOf(NamedValueDecoder).d2t.call(this, descriptor) : (new JsonPrimitiveDecoder(this.e37(), this.o2())).d2t(descriptor);
  };
  function coerceInputValue_0($this, descriptor, index, tag) {
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var this_0 = $this.e37();
      var elementDescriptor = descriptor.p2r(index);
      var tmp;
      if (!elementDescriptor.f2r()) {
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_0 = $this.l3b(tag);
        tmp = tmp_0 instanceof JsonNull;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.n2r(), ENUM_getInstance())) {
        var tmp_1;
        if (elementDescriptor.f2r()) {
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
          var tmp_2 = $this.l3b(tag);
          tmp_1 = tmp_2 instanceof JsonNull;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_3 = $this.l3b(tag);
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
    $this.i3c_1 = (!$this.e37().z35_1.v36_1 ? !descriptor.s2r(index) : false) ? descriptor.p2r(index).f2r() : false;
    return $this.i3c_1;
  }
  function JsonTreeDecoder(json, value, polyDiscriminator, polyDescriptor) {
    polyDiscriminator = polyDiscriminator === VOID ? null : polyDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    AbstractJsonTreeDecoder.call(this, json, value);
    this.e3c_1 = value;
    this.f3c_1 = polyDiscriminator;
    this.g3c_1 = polyDescriptor;
    this.h3c_1 = 0;
    this.i3c_1 = false;
  }
  protoOf(JsonTreeDecoder).o2 = function () {
    return this.e3c_1;
  };
  protoOf(JsonTreeDecoder).w2t = function (descriptor) {
    while (this.h3c_1 < descriptor.l2r()) {
      var tmp1 = this.h3c_1;
      this.h3c_1 = tmp1 + 1 | 0;
      var name = this.x33(descriptor, tmp1);
      var index = this.h3c_1 - 1 | 0;
      this.i3c_1 = false;
      var tmp;
      var tmp_0;
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var this_0 = this.o2();
      if ((isInterface(this_0, Map) ? this_0 : THROW_CCE()).r2(name)) {
        tmp_0 = true;
      } else {
        tmp_0 = absenceIsNull(this, descriptor, index);
      }
      if (tmp_0) {
        tmp = !this.j3b_1.x36_1 ? true : !coerceInputValue_0(this, descriptor, index, name);
      } else {
        tmp = false;
      }
      if (tmp) {
        return index;
      }
    }
    return -1;
  };
  protoOf(JsonTreeDecoder).r2s = function () {
    return !this.i3c_1 ? protoOf(AbstractJsonTreeDecoder).r2s.call(this) : false;
  };
  protoOf(JsonTreeDecoder).y33 = function (descriptor, index) {
    var strategy = namingStrategy(descriptor, this.e37());
    var baseName = descriptor.r2r(index);
    if (strategy == null) {
      if (!this.j3b_1.b37_1)
        return baseName;
      if (this.o2().i2().q(baseName))
        return baseName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.e37(), descriptor);
    // Inline function 'kotlin.collections.find' call
    var this_0 = this.o2().i2();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = this_0.n();
      while (tmp0_iterator.b1()) {
        var element = tmp0_iterator.d1();
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.elementName.<anonymous>' call
        if (deserializationNamesMap_0.u2(element) === index) {
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
    var fallbackName = strategy == null ? null : strategy.m38(descriptor, index, baseName);
    return fallbackName == null ? baseName : fallbackName;
  };
  protoOf(JsonTreeDecoder).l3b = function (tag) {
    return getValue(this.o2(), tag);
  };
  protoOf(JsonTreeDecoder).g2t = function (descriptor) {
    if (descriptor === this.g3c_1) {
      var tmp = this.e37();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.k3b();
      var descriptor_0 = this.g3c_1;
      if (!(value instanceof JsonObject)) {
        throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor_0.j2r() + ', but had ' + getKClassFromExpression(value));
      }
      return new JsonTreeDecoder(tmp, value, this.f3c_1, this.g3c_1);
    }
    return protoOf(AbstractJsonTreeDecoder).g2t.call(this, descriptor);
  };
  protoOf(JsonTreeDecoder).h2t = function (descriptor) {
    var tmp;
    if (this.j3b_1.r36_1) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.n2r();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_instance;
    var strategy = namingStrategy(descriptor, this.e37());
    var tmp_1;
    if (strategy == null ? !this.j3b_1.b37_1 : false) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else if (!(strategy == null)) {
      tmp_1 = deserializationNamesMap(this.e37(), descriptor).i2();
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_safe_receiver = get_schemaCache(this.e37()).l3a(descriptor, get_JsonDeserializationNamesKey());
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i2();
      var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var tmp1_iterator = this.o2().i2().n();
    while (tmp1_iterator.b1()) {
      var key = tmp1_iterator.d1();
      if (!names.q(key) ? !(key === this.f3c_1) : false) {
        throw UnknownKeyException(key, this.o2().toString());
      }
    }
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.o3c_1 = value;
    this.p3c_1 = this.o3c_1.l();
    this.q3c_1 = -1;
  }
  protoOf(JsonTreeListDecoder).o2 = function () {
    return this.o3c_1;
  };
  protoOf(JsonTreeListDecoder).y33 = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListDecoder).l3b = function (tag) {
    return this.o3c_1.m(toInt(tag));
  };
  protoOf(JsonTreeListDecoder).w2t = function (descriptor) {
    while (this.q3c_1 < (this.p3c_1 - 1 | 0)) {
      this.q3c_1 = this.q3c_1 + 1 | 0;
      return this.q3c_1;
    }
    return -1;
  };
  function JsonPrimitiveDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.w3c_1 = value;
    this.r34(get_PRIMITIVE_TAG());
  }
  protoOf(JsonPrimitiveDecoder).o2 = function () {
    return this.w3c_1;
  };
  protoOf(JsonPrimitiveDecoder).w2t = function (descriptor) {
    return 0;
  };
  protoOf(JsonPrimitiveDecoder).l3b = function (tag) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(tag === get_PRIMITIVE_TAG())) {
      // Inline function 'kotlinx.serialization.json.internal.JsonPrimitiveDecoder.currentElement.<anonymous>' call
      var message = "This input can only handle primitives with '" + get_PRIMITIVE_TAG() + "' tag";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.w3c_1;
  };
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder.call(this, json, value);
    this.h3d_1 = value;
    this.i3d_1 = toList(this.h3d_1.i2());
    this.j3d_1 = imul(this.i3d_1.l(), 2);
    this.k3d_1 = -1;
  }
  protoOf(JsonTreeMapDecoder).o2 = function () {
    return this.h3d_1;
  };
  protoOf(JsonTreeMapDecoder).y33 = function (descriptor, index) {
    var i = index / 2 | 0;
    return this.i3d_1.m(i);
  };
  protoOf(JsonTreeMapDecoder).w2t = function (descriptor) {
    while (this.k3d_1 < (this.j3d_1 - 1 | 0)) {
      this.k3d_1 = this.k3d_1 + 1 | 0;
      return this.k3d_1;
    }
    return -1;
  };
  protoOf(JsonTreeMapDecoder).l3b = function (tag) {
    return (this.k3d_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.h3d_1, tag);
  };
  protoOf(JsonTreeMapDecoder).h2t = function (descriptor) {
  };
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.k2q())).f2t(deserializer);
  }
  function get_PRIMITIVE_TAG() {
    return PRIMITIVE_TAG;
  }
  var PRIMITIVE_TAG;
  var WriteMode_OBJ_instance;
  var WriteMode_LIST_instance;
  var WriteMode_MAP_instance;
  var WriteMode_POLY_OBJ_instance;
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
  function WriteMode(name, ordinal, begin, end) {
    Enum.call(this, name, ordinal);
    this.y3a_1 = begin;
    this.z3a_1 = end;
  }
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.n2r();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.p2r(0), _this__u8e3s4.u2t());
          var keyKind = keyDescriptor.n2r();
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
            if (_this__u8e3s4.z35_1.t36_1) {
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
    if (equals(_this__u8e3s4.n2r(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.m2r()) {
      tmp = carrierDescriptor(_this__u8e3s4.p2r(0), module_0);
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
  function get_STRING() {
    return STRING;
  }
  var STRING;
  function appendEscape($this, lastPosition, current) {
    $this.l3d(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.l3d(lastPosition, currentPosition);
    var result = $this.o36_1.toString();
    $this.o36_1.u8(0);
    return result;
  }
  function takePeeked($this) {
    // Inline function 'kotlin.also' call
    var this_0 = ensureNotNull($this.n36_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.takePeeked.<anonymous>' call
    $this.n36_1 = null;
    return this_0;
  }
  function wasUnquotedString($this) {
    return !(charSequenceGet($this.m3d(), $this.l36_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.n3d(currentPosition);
    if (currentPosition === -1) {
      $this.i38('Expected escape sequence to continue, got EOF');
    }
    var tmp = $this.m3d();
    var tmp0 = currentPosition;
    currentPosition = tmp0 + 1 | 0;
    var currentChar = charSequenceGet(tmp, tmp0);
    if (currentChar === _Char___init__impl__6a9atx(117)) {
      return appendHex($this, $this.m3d(), currentPosition);
    }
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (c === _Char___init__impl__6a9atx(0)) {
      $this.i38("Invalid escaped char '" + toString_0(currentChar) + "'");
    }
    $this.o36_1.x5(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.l36_1 = startPos;
      $this.o3d();
      if (($this.l36_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.i38('Unexpected EOF during unicode escape');
      }
      return appendHex($this, source, $this.l36_1);
    }
    $this.o36_1.x5(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
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
      $this.i38("Invalid toHexChar char '" + toString_0(character) + "' in unicode escape");
    }
    return tmp;
  }
  function consumeBoolean($this, start) {
    var current = $this.n3d(start);
    if (current >= charSequenceLength($this.m3d()) ? true : current === -1) {
      $this.i38('EOF');
    }
    // Inline function 'kotlin.code' call
    var tmp = $this.m3d();
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
        $this.i38("Expected valid boolean literal prefix, but had '" + $this.d39() + "'");
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.m3d()) - current | 0) < literalSuffix.length) {
      $this.i38('Unexpected end of boolean literal');
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charSequenceGet(literalSuffix, i);
        var actual = charSequenceGet($this.m3d(), current + i | 0);
        // Inline function 'kotlin.code' call
        var tmp = Char__toInt_impl_vasixd(expected);
        // Inline function 'kotlin.code' call
        if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
          $this.i38("Expected valid boolean literal prefix, but had '" + $this.d39() + "'");
        }
      }
       while (inductionVariable <= last);
    $this.l36_1 = current + literalSuffix.length | 0;
  }
  function consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive) {
    var tmp;
    switch (isExponentPositive) {
      case false:
        // Inline function 'kotlin.math.pow' call

        var x = -exponentAccumulator.b7();
        tmp = Math.pow(10.0, x);
        break;
      case true:
        // Inline function 'kotlin.math.pow' call

        var x_0 = exponentAccumulator.b7();
        tmp = Math.pow(10.0, x_0);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function AbstractJsonLexer() {
    this.l36_1 = 0;
    this.m36_1 = new JsonPath();
    this.n36_1 = null;
    this.o36_1 = StringBuilder_init_$Create$();
  }
  protoOf(AbstractJsonLexer).o3d = function () {
  };
  protoOf(AbstractJsonLexer).p3d = function (c) {
    return (((c === _Char___init__impl__6a9atx(125) ? true : c === _Char___init__impl__6a9atx(93)) ? true : c === _Char___init__impl__6a9atx(58)) ? true : c === _Char___init__impl__6a9atx(44)) ? false : true;
  };
  protoOf(AbstractJsonLexer).p36 = function () {
    var nextToken = this.f39();
    if (!(nextToken === 10)) {
      this.i38('Expected EOF after parsing, but had ' + toString_0(charSequenceGet(this.m3d(), this.l36_1 - 1 | 0)) + ' instead');
    }
  };
  protoOf(AbstractJsonLexer).z38 = function (expected) {
    var token = this.f39();
    if (!(token === expected)) {
      this.q3d(expected);
    }
    return token;
  };
  protoOf(AbstractJsonLexer).n3a = function (expected) {
    this.o3d();
    var source = this.m3d();
    var cpos = this.l36_1;
    $l$loop_0: while (true) {
      cpos = this.n3d(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var tmp0 = cpos;
      cpos = tmp0 + 1 | 0;
      var c = charSequenceGet(source, tmp0);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9))
        continue $l$loop_0;
      this.l36_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.r3d(expected);
    }
    this.l36_1 = cpos;
    this.r3d(expected);
  };
  protoOf(AbstractJsonLexer).r3d = function (expected) {
    if (this.l36_1 > 0 ? expected === _Char___init__impl__6a9atx(34) : false) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.l36_1;
        try {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.unexpectedToken.<anonymous>' call
          this.l36_1 = this.l36_1 - 1 | 0;
          tmp$ret$1 = this.d39();
          break $l$block;
        }finally {
          this.l36_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$1;
      if (inputLiteral === 'null') {
        this.s3d("Expected string literal but 'null' literal was found", this.l36_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls to default values.");
      }
    }
    this.q3d(charToTokenClass(expected));
  };
  protoOf(AbstractJsonLexer).t3d = function (expectedToken, wasConsumed) {
    var expected = tokenDescription(expectedToken);
    var position = wasConsumed ? this.l36_1 - 1 | 0 : this.l36_1;
    var s = (this.l36_1 === charSequenceLength(this.m3d()) ? true : position < 0) ? 'EOF' : toString_0(charSequenceGet(this.m3d(), position));
    this.i38('Expected ' + expected + ", but had '" + s + "' instead", position);
  };
  protoOf(AbstractJsonLexer).q3d = function (expectedToken, wasConsumed, $super) {
    wasConsumed = wasConsumed === VOID ? true : wasConsumed;
    return $super === VOID ? this.t3d(expectedToken, wasConsumed) : $super.t3d.call(this, expectedToken, wasConsumed);
  };
  protoOf(AbstractJsonLexer).a39 = function () {
    var source = this.m3d();
    var cpos = this.l36_1;
    $l$loop_0: while (true) {
      cpos = this.n3d(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (((ch === _Char___init__impl__6a9atx(32) ? true : ch === _Char___init__impl__6a9atx(10)) ? true : ch === _Char___init__impl__6a9atx(13)) ? true : ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.l36_1 = cpos;
      return charToTokenClass(ch);
    }
    this.l36_1 = cpos;
    return 10;
  };
  protoOf(AbstractJsonLexer).p3a = function (doConsume) {
    var current = this.u3d();
    current = this.n3d(current);
    var len = charSequenceLength(this.m3d()) - current | 0;
    if (len < 4 ? true : current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charSequenceGet('null', i) === charSequenceGet(this.m3d(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 ? charToTokenClass(charSequenceGet(this.m3d(), current + 4 | 0)) === 0 : false)
      return false;
    if (doConsume) {
      this.l36_1 = current + 4 | 0;
    }
    return true;
  };
  protoOf(AbstractJsonLexer).a3b = function (doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.p3a(doConsume) : $super.p3a.call(this, doConsume);
  };
  protoOf(AbstractJsonLexer).u3d = function () {
    var current = this.l36_1;
    $l$loop_0: while (true) {
      current = this.n3d(current);
      if (current === -1)
        break $l$loop_0;
      var c = charSequenceGet(this.m3d(), current);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop_0;
      }
    }
    this.l36_1 = current;
    return current;
  };
  protoOf(AbstractJsonLexer).q3a = function (isLenient) {
    var token = this.a39();
    var tmp;
    if (isLenient) {
      if (!(token === 1) ? !(token === 0) : false)
        return null;
      tmp = this.d39();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.c39();
    }
    var string = tmp;
    this.n36_1 = string;
    return string;
  };
  protoOf(AbstractJsonLexer).v3d = function () {
    this.n36_1 = null;
  };
  protoOf(AbstractJsonLexer).w3d = function (startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.m3d();
    return toString(charSequenceSubSequence(this_0, startPos, endPos));
  };
  protoOf(AbstractJsonLexer).c39 = function () {
    if (!(this.n36_1 == null)) {
      return takePeeked(this);
    }
    return this.t3a();
  };
  protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.n3d(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.i38('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.l3d(lastPosition, currentPosition);
          currentPosition = this.n3d(currentPosition);
          if (currentPosition === -1) {
            this.i38('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.w3d(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.l36_1 = currentPosition + 1 | 0;
    return string;
  };
  protoOf(AbstractJsonLexer).u3a = function () {
    var result = this.d39();
    if (result === 'null' ? wasUnquotedString(this) : false) {
      this.i38("Unexpected 'null' value instead of string literal");
    }
    return result;
  };
  protoOf(AbstractJsonLexer).d39 = function () {
    if (!(this.n36_1 == null)) {
      return takePeeked(this);
    }
    var current = this.u3d();
    if (current >= charSequenceLength(this.m3d()) ? true : current === -1) {
      this.i38('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.m3d(), current));
    if (token === 1) {
      return this.c39();
    }
    if (!(token === 0)) {
      this.i38('Expected beginning of the string, but got ' + toString_0(charSequenceGet(this.m3d(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.m3d(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.m3d())) {
        usedAppend = true;
        this.l3d(this.l36_1, current);
        var eof = this.n3d(current);
        if (eof === -1) {
          this.l36_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.w3d(this.l36_1, current);
    } else {
      tmp = decodedString(this, this.l36_1, current);
    }
    var result = tmp;
    this.l36_1 = current;
    return result;
  };
  protoOf(AbstractJsonLexer).l3d = function (fromIndex, toIndex) {
    this.o36_1.p8(this.m3d(), fromIndex, toIndex);
  };
  protoOf(AbstractJsonLexer).s3a = function (allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList_init_$Create$();
    var lastToken = this.a39();
    if (!(lastToken === 8) ? !(lastToken === 6) : false) {
      this.d39();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.a39();
      if (lastToken === 1) {
        if (allowLenientStrings) {
          this.d39();
        } else {
          this.t3a();
        }
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 ? true : tmp0_subject === 6) {
        tokenStack.y(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.l36_1, 'found ] instead of } at path: ' + this.m36_1, this.m3d());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.l36_1, 'found } instead of ] at path: ' + this.m36_1, this.m3d());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.i38('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.f39();
      if (tokenStack.l() === 0)
        return Unit_instance;
    }
  };
  protoOf(AbstractJsonLexer).toString = function () {
    return "JsonReader(source='" + this.m3d() + "', currentPosition=" + this.l36_1 + ')';
  };
  protoOf(AbstractJsonLexer).r3a = function (key) {
    var processed = this.w3d(0, this.l36_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    this.s3d("Encountered an unknown key '" + key + "'", lastIndexOf_0, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.");
  };
  protoOf(AbstractJsonLexer).s3d = function (message, position, hint) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(hint) === 0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.m36_1.v38() + hintMessage, this.m3d());
  };
  protoOf(AbstractJsonLexer).i38 = function (message, position, hint, $super) {
    position = position === VOID ? this.l36_1 : position;
    hint = hint === VOID ? '' : hint;
    return $super === VOID ? this.s3d(message, position, hint) : $super.s3d.call(this, message, position, hint);
  };
  protoOf(AbstractJsonLexer).u37 = function () {
    var current = this.u3d();
    current = this.n3d(current);
    if (current >= charSequenceLength(this.m3d()) ? true : current === -1) {
      this.i38('EOF');
    }
    var tmp;
    if (charSequenceGet(this.m3d(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.m3d())) {
        this.i38('EOF');
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
    $l$loop_4: while (!(current === charSequenceLength(this.m3d()))) {
      var ch = charSequenceGet(this.m3d(), current);
      if ((ch === _Char___init__impl__6a9atx(101) ? true : ch === _Char___init__impl__6a9atx(69)) ? !hasExponent : false) {
        if (current === start) {
          this.i38('Unexpected symbol ' + toString_0(ch) + ' in numeric literal');
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) ? hasExponent : false) {
        if (current === start) {
          this.i38("Unexpected symbol '-' in numeric literal");
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) ? hasExponent : false) {
        if (current === start) {
          this.i38("Unexpected symbol '+' in numeric literal");
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.i38("Unexpected symbol '-' in numeric literal");
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
        this.i38("Unexpected symbol '" + toString_0(ch) + "' in numeric literal");
      }
      if (hasExponent) {
        // Inline function 'kotlin.Long.plus' call
        // Inline function 'kotlin.Long.times' call
        exponentAccumulator = exponentAccumulator.wa(toLong(10)).fc(toLong(digit));
        continue $l$loop_4;
      }
      // Inline function 'kotlin.Long.minus' call
      // Inline function 'kotlin.Long.times' call
      accumulator = accumulator.wa(toLong(10)).gc(toLong(digit));
      if (accumulator.xa(new Long(0, 0)) > 0) {
        this.i38('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current ? true : isNegative ? start === (current - 1 | 0) : false) {
      this.i38('Expected numeric literal');
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.i38('EOF');
      }
      if (!(charSequenceGet(this.m3d(), current) === _Char___init__impl__6a9atx(34))) {
        this.i38('Expected closing quotation mark');
      }
      current = current + 1 | 0;
    }
    this.l36_1 = current;
    if (hasExponent) {
      var doubleAccumulator = accumulator.b7() * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      var tmp_0;
      Companion_getInstance_3();
      if (doubleAccumulator > (new Long(-1, 2147483647)).b7()) {
        tmp_0 = true;
      } else {
        Companion_getInstance_3();
        tmp_0 = doubleAccumulator < (new Long(0, -2147483648)).b7();
      }
      if (tmp_0) {
        this.i38('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.i38("Can't convert " + doubleAccumulator + ' to Long');
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
        tmp_1 = accumulator.jc();
      } else {
        this.i38('Numeric value overflow');
      }
    }
    return tmp_1;
  };
  protoOf(AbstractJsonLexer).b3b = function () {
    return consumeBoolean(this, this.u3d());
  };
  protoOf(AbstractJsonLexer).c3b = function () {
    var current = this.u3d();
    if (current === charSequenceLength(this.m3d())) {
      this.i38('EOF');
    }
    var tmp;
    if (charSequenceGet(this.m3d(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean(this, current);
    if (hasQuotation) {
      if (this.l36_1 === charSequenceLength(this.m3d())) {
        this.i38('EOF');
      }
      if (!(charSequenceGet(this.m3d(), this.l36_1) === _Char___init__impl__6a9atx(34))) {
        this.i38('Expected closing quotation mark');
      }
      this.l36_1 = this.l36_1 + 1 | 0;
    }
    return result;
  };
  function charToTokenClass(c) {
    var tmp;
    // Inline function 'kotlin.code' call
    if (Char__toInt_impl_vasixd(c) < 126) {
      var tmp_0 = CharMappings_getInstance().y3d_1;
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
  function get_specialFlowingValuesHint() {
    return specialFlowingValuesHint;
  }
  var specialFlowingValuesHint;
  function get_allowStructuredMapKeysHint() {
    return allowStructuredMapKeysHint;
  }
  var allowStructuredMapKeysHint;
  function get_ignoreUnknownKeysHint() {
    return ignoreUnknownKeysHint;
  }
  var ignoreUnknownKeysHint;
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
    return c < 117 ? CharMappings_getInstance().x3d_1[c] : _Char___init__impl__6a9atx(0);
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
      $this.x3d_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.y3d_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.x3d_1 = charArray(117);
    this.y3d_1 = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
  var CharMappings_instance;
  function CharMappings_getInstance() {
    if (CharMappings_instance == null)
      new CharMappings();
    return CharMappings_instance;
  }
  function StringJsonLexer(source) {
    AbstractJsonLexer.call(this);
    this.d3e_1 = source;
  }
  protoOf(StringJsonLexer).m3d = function () {
    return this.d3e_1;
  };
  protoOf(StringJsonLexer).n3d = function (position) {
    return position < this.d3e_1.length ? position : -1;
  };
  protoOf(StringJsonLexer).f39 = function () {
    var source = this.d3e_1;
    $l$loop: while (!(this.l36_1 === -1) ? this.l36_1 < source.length : false) {
      var tmp1 = this.l36_1;
      this.l36_1 = tmp1 + 1 | 0;
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
  protoOf(StringJsonLexer).o3a = function () {
    var current = this.u3d();
    if (current === this.d3e_1.length ? true : current === -1)
      return false;
    if (charSequenceGet(this.d3e_1, current) === _Char___init__impl__6a9atx(44)) {
      this.l36_1 = this.l36_1 + 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(StringJsonLexer).b39 = function () {
    var current = this.l36_1;
    if (current === -1)
      return false;
    $l$loop: while (current < this.d3e_1.length) {
      var c = charSequenceGet(this.d3e_1, current);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.l36_1 = current;
      return this.p3d(c);
    }
    this.l36_1 = current;
    return false;
  };
  protoOf(StringJsonLexer).u3d = function () {
    var current = this.l36_1;
    if (current === -1)
      return current;
    $l$loop: while (current < this.d3e_1.length) {
      var c = charSequenceGet(this.d3e_1, current);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.l36_1 = current;
    return current;
  };
  protoOf(StringJsonLexer).n3a = function (expected) {
    if (this.l36_1 === -1) {
      this.r3d(expected);
    }
    var source = this.d3e_1;
    $l$loop: while (this.l36_1 < source.length) {
      var tmp1 = this.l36_1;
      this.l36_1 = tmp1 + 1 | 0;
      var c = charSequenceGet(source, tmp1);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      if (c === expected)
        return Unit_instance;
      this.r3d(expected);
    }
    this.l36_1 = -1;
    this.r3d(expected);
  };
  protoOf(StringJsonLexer).t3a = function () {
    this.n3a(get_STRING());
    var current = this.l36_1;
    var closingQuote = indexOf(this.d3e_1, _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.d39();
      this.t3d(get_TC_STRING(), false);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charSequenceGet(this.d3e_1, i) === get_STRING_ESC()) {
          return this.consumeString2(this.d3e_1, this.l36_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.l36_1 = closingQuote + 1 | 0;
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.d3e_1.substring(current, closingQuote);
  };
  protoOf(StringJsonLexer).v3a = function (keyToMatch, isLenient) {
    var positionSnapshot = this.l36_1;
    try {
      if (!(this.f39() === get_TC_BEGIN_OBJ()))
        return null;
      var firstKey = this.q3a(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.v3d();
      if (!(this.f39() === get_TC_COLON()))
        return null;
      return this.q3a(isLenient);
    }finally {
      this.l36_1 = positionSnapshot;
      this.v3d();
    }
  };
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.b36_1;
  }
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(defer$1).f2r = get_isNullable;
  protoOf(defer$1).m2r = get_isInline;
  protoOf(defer$1).k2r = get_annotations;
  //endregion
  //region block: init
  Companion_instance_0 = new Companion();
  Companion_instance_1 = new Companion_0();
  Companion_instance_2 = new Companion_1();
  Companion_instance_3 = new Companion_2();
  Tombstone_instance = new Tombstone();
  PRIMITIVE_TAG = 'primitive';
  STRING = _Char___init__impl__6a9atx(34);
  TC_WHITESPACE = 3;
  TC_EOF = 10;
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
  specialFlowingValuesHint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
  allowStructuredMapKeysHint = "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.";
  ignoreUnknownKeysHint = "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.";
  NULL = 'null';
  TC_OTHER = 0;
  TC_BEGIN_LIST = 8;
  TC_END_LIST = 9;
  TC_END_OBJ = 7;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Default_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json.js.map
