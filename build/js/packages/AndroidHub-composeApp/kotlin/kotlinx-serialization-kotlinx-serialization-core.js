(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-core'.");
    }
    root['kotlinx-serialization-kotlinx-serialization-core'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-core'], this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.ic;
  var interfaceMeta = kotlin_kotlin.$_$.mb;
  var setMetadataFor = kotlin_kotlin.$_$.jc;
  var VOID = kotlin_kotlin.$_$.g;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.z4;
  var Unit_instance = kotlin_kotlin.$_$.k5;
  var emptyList = kotlin_kotlin.$_$.i7;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.j;
  var lazy = kotlin_kotlin.$_$.lh;
  var classMeta = kotlin_kotlin.$_$.xa;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var KProperty1 = kotlin_kotlin.$_$.kd;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ib;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.s1;
  var objectCreate = kotlin_kotlin.$_$.gc;
  var captureStack = kotlin_kotlin.$_$.ra;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.u1;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.w1;
  var IllegalArgumentException = kotlin_kotlin.$_$.eg;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.r6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var THROW_CCE = kotlin_kotlin.$_$.ng;
  var KClass = kotlin_kotlin.$_$.hd;
  var isInterface = kotlin_kotlin.$_$.vb;
  var Triple = kotlin_kotlin.$_$.pg;
  var getKClass = kotlin_kotlin.$_$.e;
  var Pair = kotlin_kotlin.$_$.kg;
  var Entry = kotlin_kotlin.$_$.y5;
  var LinkedHashMap = kotlin_kotlin.$_$.v5;
  var MutableMap = kotlin_kotlin.$_$.d6;
  var Map = kotlin_kotlin.$_$.z5;
  var HashMap = kotlin_kotlin.$_$.t5;
  var LinkedHashSet = kotlin_kotlin.$_$.w5;
  var MutableSet = kotlin_kotlin.$_$.e6;
  var Set = kotlin_kotlin.$_$.f6;
  var HashSet = kotlin_kotlin.$_$.u5;
  var ArrayList = kotlin_kotlin.$_$.r5;
  var MutableList = kotlin_kotlin.$_$.b6;
  var List = kotlin_kotlin.$_$.x5;
  var Collection = kotlin_kotlin.$_$.s5;
  var copyToArray = kotlin_kotlin.$_$.g7;
  var toString = kotlin_kotlin.$_$.nc;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.v1;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.f3;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.d3;
  var Result = kotlin_kotlin.$_$.lg;
  var ensureNotNull = kotlin_kotlin.$_$.fh;
  var equals = kotlin_kotlin.$_$.ab;
  var getStringHashCode = kotlin_kotlin.$_$.jb;
  var isBlank = kotlin_kotlin.$_$.ge;
  var toList = kotlin_kotlin.$_$.m9;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.n;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.u;
  var toHashSet = kotlin_kotlin.$_$.i9;
  var toBooleanArray = kotlin_kotlin.$_$.h9;
  var withIndex = kotlin_kotlin.$_$.s9;
  var to = kotlin_kotlin.$_$.zh;
  var toMap = kotlin_kotlin.$_$.n9;
  var lazy_0 = kotlin_kotlin.$_$.mh;
  var contentEquals = kotlin_kotlin.$_$.t6;
  var until = kotlin_kotlin.$_$.gd;
  var joinToString = kotlin_kotlin.$_$.d8;
  var objectMeta = kotlin_kotlin.$_$.hc;
  var Long = kotlin_kotlin.$_$.gg;
  var Char = kotlin_kotlin.$_$.wf;
  var Duration__toIsoString_impl_9h6wsm = kotlin_kotlin.$_$.s2;
  var Duration = kotlin_kotlin.$_$.sf;
  var Companion_getInstance = kotlin_kotlin.$_$.c5;
  var toIntOrNull = kotlin_kotlin.$_$.ff;
  var hashCode = kotlin_kotlin.$_$.kb;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.o;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.v;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.z;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.a1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.q;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.r;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.x;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.y;
  var isArray = kotlin_kotlin.$_$.nb;
  var arrayIterator = kotlin_kotlin.$_$.pa;
  var asList = kotlin_kotlin.$_$.j6;
  var step = kotlin_kotlin.$_$.fd;
  var getValue = kotlin_kotlin.$_$.y7;
  var longArray = kotlin_kotlin.$_$.bc;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.e5;
  var get_lastIndex = kotlin_kotlin.$_$.f8;
  var countTrailingZeroBits = kotlin_kotlin.$_$.dh;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.t;
  var KTypeParameter = kotlin_kotlin.$_$.ld;
  var fillArrayVal = kotlin_kotlin.$_$.cb;
  var booleanArray = kotlin_kotlin.$_$.qa;
  var emptyMap = kotlin_kotlin.$_$.j7;
  var contentHashCode = kotlin_kotlin.$_$.v6;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.d5;
  var isCharArray = kotlin_kotlin.$_$.qb;
  var charArray = kotlin_kotlin.$_$.ta;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.v4;
  var isDoubleArray = kotlin_kotlin.$_$.sb;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.w4;
  var isFloatArray = kotlin_kotlin.$_$.tb;
  var isLongArray = kotlin_kotlin.$_$.wb;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.i5;
  var _ULongArray___get_size__impl__ju6dtr = kotlin_kotlin.$_$.g4;
  var ULongArray = kotlin_kotlin.$_$.ug;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.c4;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.y3;
  var ULongArray__get_impl_pr71q9 = kotlin_kotlin.$_$.e4;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.z3;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.x4;
  var isIntArray = kotlin_kotlin.$_$.ub;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.h5;
  var _UIntArray___get_size__impl__r6l8ci = kotlin_kotlin.$_$.w3;
  var UIntArray = kotlin_kotlin.$_$.sg;
  var _UIntArray___init__impl__ghjpc6 = kotlin_kotlin.$_$.s3;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.p3;
  var UIntArray__get_impl_gp5kza = kotlin_kotlin.$_$.u3;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.q3;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.y4;
  var isShortArray = kotlin_kotlin.$_$.xb;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.j5;
  var _UShortArray___get_size__impl__jqto1b = kotlin_kotlin.$_$.p4;
  var UShortArray = kotlin_kotlin.$_$.wg;
  var _UShortArray___init__impl__9b26ef = kotlin_kotlin.$_$.l4;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.i4;
  var UShortArray__get_impl_fnbhmx = kotlin_kotlin.$_$.n4;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.j4;
  var ByteCompanionObject_instance = kotlin_kotlin.$_$.u4;
  var isByteArray = kotlin_kotlin.$_$.pb;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.g5;
  var _UByteArray___get_size__impl__h6pkdv = kotlin_kotlin.$_$.n3;
  var UByteArray = kotlin_kotlin.$_$.qg;
  var _UByteArray___init__impl__ip4y9n = kotlin_kotlin.$_$.k3;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.g3;
  var UByteArray__get_impl_t5f3hv = kotlin_kotlin.$_$.l3;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.h3;
  var BooleanCompanionObject_instance = kotlin_kotlin.$_$.t4;
  var isBooleanArray = kotlin_kotlin.$_$.ob;
  var coerceAtLeast = kotlin_kotlin.$_$.wc;
  var copyOf = kotlin_kotlin.$_$.a7;
  var copyOf_0 = kotlin_kotlin.$_$.c7;
  var copyOf_1 = kotlin_kotlin.$_$.d7;
  var copyOf_2 = kotlin_kotlin.$_$.y6;
  var _ULongArray___get_storage__impl__28e64j = kotlin_kotlin.$_$.h4;
  var _ULongArray___init__impl__twm1l3_0 = kotlin_kotlin.$_$.d4;
  var ULongArray__set_impl_z19mvh = kotlin_kotlin.$_$.f4;
  var copyOf_3 = kotlin_kotlin.$_$.f7;
  var _UIntArray___get_storage__impl__92a0v0 = kotlin_kotlin.$_$.x3;
  var _UIntArray___init__impl__ghjpc6_0 = kotlin_kotlin.$_$.t3;
  var UIntArray__set_impl_7f2zu2 = kotlin_kotlin.$_$.v3;
  var copyOf_4 = kotlin_kotlin.$_$.x6;
  var _UShortArray___get_storage__impl__t2jpv5 = kotlin_kotlin.$_$.q4;
  var _UShortArray___init__impl__9b26ef_0 = kotlin_kotlin.$_$.m4;
  var UShortArray__set_impl_6d8whp = kotlin_kotlin.$_$.o4;
  var copyOf_5 = kotlin_kotlin.$_$.b7;
  var _UByteArray___get_storage__impl__d4kctt = kotlin_kotlin.$_$.o3;
  var _UByteArray___init__impl__ip4y9n_0 = kotlin_kotlin.$_$.j3;
  var UByteArray__set_impl_jvcicn = kotlin_kotlin.$_$.m3;
  var copyOf_6 = kotlin_kotlin.$_$.z6;
  var Unit = kotlin_kotlin.$_$.yg;
  var trimIndent = kotlin_kotlin.$_$.pf;
  var equals_0 = kotlin_kotlin.$_$.be;
  var charSequenceLength = kotlin_kotlin.$_$.va;
  var charSequenceGet = kotlin_kotlin.$_$.ua;
  var toString_0 = kotlin_kotlin.$_$.a3;
  var titlecase = kotlin_kotlin.$_$.bf;
  var isLowerCase = kotlin_kotlin.$_$.je;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.b5;
  var ULong = kotlin_kotlin.$_$.vg;
  var UInt = kotlin_kotlin.$_$.tg;
  var UShort = kotlin_kotlin.$_$.xg;
  var UByte = kotlin_kotlin.$_$.rg;
  var mapOf = kotlin_kotlin.$_$.p8;
  var lastOrNull = kotlin_kotlin.$_$.i8;
  var get_lastIndex_0 = kotlin_kotlin.$_$.g8;
  var get_js = kotlin_kotlin.$_$.zb;
  var findAssociatedObject = kotlin_kotlin.$_$.c;
  var get_indices = kotlin_kotlin.$_$.a8;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.e2;
  var get_indices_0 = kotlin_kotlin.$_$.z7;
  var Companion_instance = kotlin_kotlin.$_$.f5;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.b3;
  var createFailure = kotlin_kotlin.$_$.eh;
  //endregion
  //region block: pre-declaration
  setMetadataFor(SerializationStrategy, 'SerializationStrategy', interfaceMeta);
  setMetadataFor(DeserializationStrategy, 'DeserializationStrategy', interfaceMeta);
  setMetadataFor(KSerializer, 'KSerializer', interfaceMeta, VOID, [SerializationStrategy, DeserializationStrategy]);
  setMetadataFor(AbstractPolymorphicSerializer, 'AbstractPolymorphicSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(PolymorphicSerializer, 'PolymorphicSerializer', classMeta, AbstractPolymorphicSerializer);
  setMetadataFor(SealedClassSerializer, 'SealedClassSerializer', classMeta, AbstractPolymorphicSerializer);
  setMetadataFor(StringFormat, 'StringFormat', interfaceMeta);
  setMetadataFor(BinaryFormat, 'BinaryFormat', interfaceMeta);
  setMetadataFor(SerializationException, 'SerializationException', classMeta, IllegalArgumentException, VOID, SerializationException_init_$Create$);
  setMetadataFor(UnknownFieldException, 'UnknownFieldException', classMeta, SerializationException);
  setMetadataFor(MissingFieldException, 'MissingFieldException', classMeta, SerializationException);
  function get_isNullable() {
    return false;
  }
  function get_isInline() {
    return false;
  }
  function get_annotations() {
    return emptyList();
  }
  setMetadataFor(SerialDescriptor, 'SerialDescriptor', interfaceMeta);
  setMetadataFor(ContextDescriptor, 'ContextDescriptor', classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(elementDescriptors$1$1, VOID, classMeta);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta);
  setMetadataFor(ClassSerialDescriptorBuilder, 'ClassSerialDescriptorBuilder', classMeta);
  setMetadataFor(CachedNames, 'CachedNames', interfaceMeta);
  setMetadataFor(SerialDescriptorImpl, 'SerialDescriptorImpl', classMeta, VOID, [SerialDescriptor, CachedNames]);
  setMetadataFor(SerialKind, 'SerialKind', classMeta);
  setMetadataFor(ENUM, 'ENUM', objectMeta, SerialKind);
  setMetadataFor(CONTEXTUAL, 'CONTEXTUAL', objectMeta, SerialKind);
  setMetadataFor(PrimitiveKind, 'PrimitiveKind', classMeta, SerialKind);
  setMetadataFor(BOOLEAN, 'BOOLEAN', objectMeta, PrimitiveKind);
  setMetadataFor(BYTE, 'BYTE', objectMeta, PrimitiveKind);
  setMetadataFor(CHAR, 'CHAR', objectMeta, PrimitiveKind);
  setMetadataFor(SHORT, 'SHORT', objectMeta, PrimitiveKind);
  setMetadataFor(INT, 'INT', objectMeta, PrimitiveKind);
  setMetadataFor(LONG, 'LONG', objectMeta, PrimitiveKind);
  setMetadataFor(FLOAT, 'FLOAT', objectMeta, PrimitiveKind);
  setMetadataFor(DOUBLE, 'DOUBLE', objectMeta, PrimitiveKind);
  setMetadataFor(STRING, 'STRING', objectMeta, PrimitiveKind);
  setMetadataFor(StructureKind, 'StructureKind', classMeta, SerialKind);
  setMetadataFor(CLASS, 'CLASS', objectMeta, StructureKind);
  setMetadataFor(LIST, 'LIST', objectMeta, StructureKind);
  setMetadataFor(MAP, 'MAP', objectMeta, StructureKind);
  setMetadataFor(OBJECT, 'OBJECT', objectMeta, StructureKind);
  setMetadataFor(PolymorphicKind, 'PolymorphicKind', classMeta, SerialKind);
  setMetadataFor(SEALED, 'SEALED', objectMeta, PolymorphicKind);
  setMetadataFor(OPEN, 'OPEN', objectMeta, PolymorphicKind);
  function decodeSerializableValue(deserializer) {
    return deserializer.k8c(this);
  }
  setMetadataFor(Decoder, 'Decoder', interfaceMeta);
  function decodeSequentially() {
    return false;
  }
  function decodeCollectionSize(descriptor) {
    return -1;
  }
  function decodeSerializableElement$default(descriptor, index, deserializer, previousValue, $super) {
    previousValue = previousValue === VOID ? null : previousValue;
    return $super === VOID ? this.t8f(descriptor, index, deserializer, previousValue) : $super.t8f.call(this, descriptor, index, deserializer, previousValue);
  }
  setMetadataFor(CompositeDecoder, 'CompositeDecoder', interfaceMeta);
  setMetadataFor(AbstractDecoder, 'AbstractDecoder', classMeta, VOID, [Decoder, CompositeDecoder]);
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.h8f(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.j8c(this, value);
  }
  function encodeNullableSerializableValue(serializer, value) {
    var isNullabilitySupported = serializer.i8c().k8d();
    if (isNullabilitySupported) {
      return this.y8g(isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
    }
    if (value == null) {
      this.c8g();
    } else {
      this.b8h();
      this.y8g(serializer, value);
    }
  }
  setMetadataFor(Encoder, 'Encoder', interfaceMeta);
  function shouldEncodeElementDefault(descriptor, index) {
    return true;
  }
  setMetadataFor(CompositeEncoder, 'CompositeEncoder', interfaceMeta);
  setMetadataFor(AbstractEncoder, 'AbstractEncoder', classMeta, VOID, [Encoder, CompositeEncoder]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(NothingSerializer_0, 'NothingSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(DurationSerializer, 'DurationSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(ListLikeDescriptor, 'ListLikeDescriptor', classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(ArrayListClassDesc, 'ArrayListClassDesc', classMeta, ListLikeDescriptor);
  setMetadataFor(HashSetClassDesc, 'HashSetClassDesc', classMeta, ListLikeDescriptor);
  setMetadataFor(LinkedHashSetClassDesc, 'LinkedHashSetClassDesc', classMeta, ListLikeDescriptor);
  setMetadataFor(MapLikeDescriptor, 'MapLikeDescriptor', classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(HashMapClassDesc, 'HashMapClassDesc', classMeta, MapLikeDescriptor);
  setMetadataFor(LinkedHashMapClassDesc, 'LinkedHashMapClassDesc', classMeta, MapLikeDescriptor);
  setMetadataFor(ArrayClassDesc, 'ArrayClassDesc', classMeta, ListLikeDescriptor);
  setMetadataFor(PrimitiveArrayDescriptor, 'PrimitiveArrayDescriptor', classMeta, ListLikeDescriptor);
  setMetadataFor(AbstractCollectionSerializer, 'AbstractCollectionSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(CollectionLikeSerializer, 'CollectionLikeSerializer', classMeta, AbstractCollectionSerializer);
  setMetadataFor(CollectionSerializer, 'CollectionSerializer', classMeta, CollectionLikeSerializer);
  setMetadataFor(ArrayListSerializer, 'ArrayListSerializer', classMeta, CollectionSerializer);
  setMetadataFor(HashSetSerializer, 'HashSetSerializer', classMeta, CollectionSerializer);
  setMetadataFor(LinkedHashSetSerializer, 'LinkedHashSetSerializer', classMeta, CollectionSerializer);
  setMetadataFor(MapLikeSerializer, 'MapLikeSerializer', classMeta, AbstractCollectionSerializer);
  setMetadataFor(HashMapSerializer, 'HashMapSerializer', classMeta, MapLikeSerializer);
  setMetadataFor(LinkedHashMapSerializer, 'LinkedHashMapSerializer', classMeta, MapLikeSerializer);
  setMetadataFor(ReferenceArraySerializer, 'ReferenceArraySerializer', classMeta, CollectionLikeSerializer);
  setMetadataFor(PrimitiveArraySerializer, 'PrimitiveArraySerializer', classMeta, CollectionLikeSerializer);
  setMetadataFor(PrimitiveArrayBuilder, 'PrimitiveArrayBuilder', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(ElementMarker, 'ElementMarker', classMeta);
  setMetadataFor(PluginGeneratedSerialDescriptor, 'PluginGeneratedSerialDescriptor', classMeta, VOID, [SerialDescriptor, CachedNames]);
  setMetadataFor(InlineClassDescriptor, 'InlineClassDescriptor', classMeta, PluginGeneratedSerialDescriptor);
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  setMetadataFor(GeneratedSerializer, 'GeneratedSerializer', interfaceMeta, VOID, [KSerializer]);
  setMetadataFor(InlinePrimitiveDescriptor$1, VOID, classMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(NoOpEncoder, 'NoOpEncoder', objectMeta, AbstractEncoder);
  setMetadataFor(NothingSerialDescriptor, 'NothingSerialDescriptor', objectMeta, VOID, [SerialDescriptor]);
  setMetadataFor(NullableSerializer, 'NullableSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(SerialDescriptorForNullable, 'SerialDescriptorForNullable', classMeta, VOID, [SerialDescriptor, CachedNames]);
  setMetadataFor(ObjectSerializer, 'ObjectSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(SerializerFactory, 'SerializerFactory', interfaceMeta);
  setMetadataFor(CharArraySerializer_0, 'CharArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(DoubleArraySerializer_0, 'DoubleArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(FloatArraySerializer_0, 'FloatArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(LongArraySerializer_0, 'LongArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(ULongArraySerializer_0, 'ULongArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(IntArraySerializer_0, 'IntArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(UIntArraySerializer_0, 'UIntArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(ShortArraySerializer_0, 'ShortArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(UShortArraySerializer_0, 'UShortArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(ByteArraySerializer_0, 'ByteArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(UByteArraySerializer_0, 'UByteArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(BooleanArraySerializer_0, 'BooleanArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(CharArrayBuilder, 'CharArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(DoubleArrayBuilder, 'DoubleArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(FloatArrayBuilder, 'FloatArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(LongArrayBuilder, 'LongArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(ULongArrayBuilder, 'ULongArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(IntArrayBuilder, 'IntArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(UIntArrayBuilder, 'UIntArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(ShortArrayBuilder, 'ShortArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(UShortArrayBuilder, 'UShortArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(ByteArrayBuilder, 'ByteArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(UByteArrayBuilder, 'UByteArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(BooleanArrayBuilder, 'BooleanArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(StringSerializer, 'StringSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(CharSerializer, 'CharSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(DoubleSerializer, 'DoubleSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(FloatSerializer, 'FloatSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(LongSerializer, 'LongSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(IntSerializer, 'IntSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(ShortSerializer, 'ShortSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(ByteSerializer, 'ByteSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(BooleanSerializer, 'BooleanSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UnitSerializer, 'UnitSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(PrimitiveSerialDescriptor_0, 'PrimitiveSerialDescriptor', classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(TaggedDecoder, 'TaggedDecoder', classMeta, VOID, [Decoder, CompositeDecoder]);
  setMetadataFor(NamedValueDecoder, 'NamedValueDecoder', classMeta, TaggedDecoder);
  setMetadataFor(MapEntry, 'MapEntry', classMeta, VOID, [Entry]);
  setMetadataFor(KeyValueSerializer, 'KeyValueSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(MapEntrySerializer_0, 'MapEntrySerializer', classMeta, KeyValueSerializer);
  setMetadataFor(PairSerializer_0, 'PairSerializer', classMeta, KeyValueSerializer);
  setMetadataFor(TripleSerializer_0, 'TripleSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(ULongSerializer, 'ULongSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UIntSerializer, 'UIntSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UShortSerializer, 'UShortSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UByteSerializer, 'UByteSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(SerializersModule, 'SerializersModule', classMeta);
  setMetadataFor(SerialModuleImpl, 'SerialModuleImpl', classMeta, SerializersModule);
  setMetadataFor(ContextualProvider, 'ContextualProvider', classMeta);
  setMetadataFor(Argless, 'Argless', classMeta, ContextualProvider);
  setMetadataFor(WithTypeArguments, 'WithTypeArguments', classMeta, ContextualProvider);
  function contextual(kClass, serializer) {
    return this.w8u(kClass, SerializersModuleCollector$contextual$lambda(serializer));
  }
  setMetadataFor(SerializersModuleCollector, 'SerializersModuleCollector', interfaceMeta);
  setMetadataFor(SerializableWith, 'SerializableWith', classMeta, VOID, VOID, VOID, 0);
  setMetadataFor(createCache$1, VOID, classMeta);
  setMetadataFor(createParametrizedCache$1, VOID, classMeta);
  //endregion
  function KSerializer() {
  }
  function SerializationStrategy() {
  }
  function DeserializationStrategy() {
  }
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.t8c('type', serializer_1(StringCompanionObject_instance).i8c());
      $this$buildSerialDescriptor.t8c('value', buildSerialDescriptor('kotlinx.serialization.Polymorphic<' + this$0.u8c_1.b7() + '>', CONTEXTUAL_getInstance(), []));
      $this$buildSerialDescriptor.n8c_1 = this$0.v8c_1;
      return Unit_instance;
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0)), this$0.u8c_1);
    };
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.u8c_1 = baseClass;
    this.v8c_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.w8c_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  protoOf(PolymorphicSerializer).x8c = function () {
    return this.u8c_1;
  };
  protoOf(PolymorphicSerializer).i8c = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.w8c_1;
    descriptor$factory();
    return this_0.q2();
  };
  protoOf(PolymorphicSerializer).toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + this.u8c_1 + ')';
  };
  function findPolymorphicSerializer(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.a8d(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__u8e3s4.x8c());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.z8c(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(klassName, _this__u8e3s4.x8c());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.i8c();
    }, null);
  }
  function SealedClassSerializer() {
  }
  function StringFormat() {
  }
  function BinaryFormat() {
  }
  function SerializationException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$() {
    var tmp = SerializationException_init_$Init$(objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$);
    return tmp;
  }
  function SerializationException_init_$Init$_0(message, $this) {
    IllegalArgumentException_init_$Init$_0(message, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$_0(message) {
    var tmp = SerializationException_init_$Init$_0(message, objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$_0);
    return tmp;
  }
  function SerializationException_init_$Init$_1(message, cause, $this) {
    IllegalArgumentException_init_$Init$_1(message, cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException() {
    captureStack(this, SerializationException);
  }
  function UnknownFieldException_init_$Init$(index, $this) {
    UnknownFieldException.call($this, 'An unknown field for index ' + index);
    return $this;
  }
  function UnknownFieldException_init_$Create$(index) {
    var tmp = UnknownFieldException_init_$Init$(index, objectCreate(protoOf(UnknownFieldException)));
    captureStack(tmp, UnknownFieldException_init_$Create$);
    return tmp;
  }
  function UnknownFieldException(message) {
    SerializationException_init_$Init$_0(message, this);
    captureStack(this, UnknownFieldException);
  }
  function MissingFieldException_init_$Init$(missingFields, serialName, $this) {
    MissingFieldException.call($this, missingFields, missingFields.m() === 1 ? "Field '" + missingFields.n(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + missingFields + " are required for type with serial name '" + serialName + "', but they were missing", null);
    return $this;
  }
  function MissingFieldException_init_$Create$(missingFields, serialName) {
    var tmp = MissingFieldException_init_$Init$(missingFields, serialName, objectCreate(protoOf(MissingFieldException)));
    captureStack(tmp, MissingFieldException_init_$Create$);
    return tmp;
  }
  function MissingFieldException(missingFields, message, cause) {
    SerializationException_init_$Init$_1(message, cause, this);
    captureStack(this, MissingFieldException);
    this.f8d_1 = missingFields;
  }
  function serializerOrNull(_this__u8e3s4) {
    var tmp0_elvis_lhs = compiledSerializerImpl(_this__u8e3s4);
    return tmp0_elvis_lhs == null ? builtinSerializerOrNull(_this__u8e3s4) : tmp0_elvis_lhs;
  }
  function serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer) {
    var tmp;
    if (failOnMissingTypeArgSerializer) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var tmp0_iterator = typeArguments.o();
      while (tmp0_iterator.d1()) {
        var item = tmp0_iterator.f1();
        // Inline function 'kotlinx.serialization.serializersForParameters.<anonymous>' call
        var tmp$ret$0 = serializer(_this__u8e3s4, item);
        destination.a1(tmp$ret$0);
      }
      tmp = destination;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var tmp0_iterator_0 = typeArguments.o();
      while (tmp0_iterator_0.d1()) {
        var item_0 = tmp0_iterator_0.f1();
        // Inline function 'kotlinx.serialization.serializersForParameters.<anonymous>' call
        var tmp0_elvis_lhs = serializerOrNull_0(_this__u8e3s4, item_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var tmp$ret$3 = tmp_0;
        destination_0.a1(tmp$ret$3);
      }
      tmp = destination_0;
    }
    var serializers = tmp;
    return serializers;
  }
  function parametrizedSerializerOrNull(_this__u8e3s4, serializers, elementClassifierIfArray) {
    var tmp0_elvis_lhs = builtinParametrizedSerializer(_this__u8e3s4, serializers, elementClassifierIfArray);
    return tmp0_elvis_lhs == null ? compiledParametrizedSerializer(_this__u8e3s4, serializers) : tmp0_elvis_lhs;
  }
  function serializer(_this__u8e3s4, type) {
    var tmp0_elvis_lhs = serializerByKTypeImpl(_this__u8e3s4, type, true);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      platformSpecificSerializerNotRegistered(kclass(type));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializerOrNull_0(_this__u8e3s4, type) {
    return serializerByKTypeImpl(_this__u8e3s4, type, false);
  }
  function builtinParametrizedSerializer(_this__u8e3s4, serializers, elementClassifierIfArray) {
    var tmp;
    if (((_this__u8e3s4.equals(getKClass(Collection)) ? true : _this__u8e3s4.equals(getKClass(List))) ? true : _this__u8e3s4.equals(getKClass(MutableList))) ? true : _this__u8e3s4.equals(getKClass(ArrayList))) {
      tmp = new ArrayListSerializer(serializers.n(0));
    } else if (_this__u8e3s4.equals(getKClass(HashSet))) {
      tmp = new HashSetSerializer(serializers.n(0));
    } else if ((_this__u8e3s4.equals(getKClass(Set)) ? true : _this__u8e3s4.equals(getKClass(MutableSet))) ? true : _this__u8e3s4.equals(getKClass(LinkedHashSet))) {
      tmp = new LinkedHashSetSerializer(serializers.n(0));
    } else if (_this__u8e3s4.equals(getKClass(HashMap))) {
      tmp = new HashMapSerializer(serializers.n(0), serializers.n(1));
    } else if ((_this__u8e3s4.equals(getKClass(Map)) ? true : _this__u8e3s4.equals(getKClass(MutableMap))) ? true : _this__u8e3s4.equals(getKClass(LinkedHashMap))) {
      tmp = new LinkedHashMapSerializer(serializers.n(0), serializers.n(1));
    } else if (_this__u8e3s4.equals(getKClass(Entry))) {
      tmp = MapEntrySerializer(serializers.n(0), serializers.n(1));
    } else if (_this__u8e3s4.equals(getKClass(Pair))) {
      tmp = PairSerializer(serializers.n(0), serializers.n(1));
    } else if (_this__u8e3s4.equals(getKClass(Triple))) {
      tmp = TripleSerializer(serializers.n(0), serializers.n(1), serializers.n(2));
    } else {
      var tmp_0;
      if (isReferenceArray(_this__u8e3s4)) {
        var tmp_1 = elementClassifierIfArray();
        tmp_0 = ArraySerializer((!(tmp_1 == null) ? isInterface(tmp_1, KClass) : false) ? tmp_1 : THROW_CCE(), serializers.n(0));
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function compiledParametrizedSerializer(_this__u8e3s4, serializers) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(serializers);
    return constructSerializerForGivenTypeArgs(_this__u8e3s4, tmp$ret$0.slice());
  }
  function serializerByKTypeImpl(_this__u8e3s4, type, failOnMissingTypeArgSerializer) {
    var rootClass = kclass(type);
    var isNullable = type.r7();
    // Inline function 'kotlin.collections.map' call
    var this_0 = type.q7();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.o();
    while (tmp0_iterator.d1()) {
      var item = tmp0_iterator.f1();
      // Inline function 'kotlinx.serialization.serializerByKTypeImpl.<anonymous>' call
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.requireNotNull' call
        var value = item.ph_1;
        // Inline function 'kotlin.contracts.contract' call
        if (value == null) {
          // Inline function 'kotlinx.serialization.serializerByKTypeImpl.<anonymous>.<anonymous>' call
          var message = 'Star projections in type arguments are not allowed, but had ' + type;
          throw IllegalArgumentException_init_$Create$(toString(message));
        } else {
          tmp$ret$1 = value;
          break $l$block;
        }
      }
      var tmp$ret$2 = tmp$ret$1;
      destination.a1(tmp$ret$2);
    }
    var typeArguments = destination;
    var tmp;
    if (typeArguments.u()) {
      tmp = findCachedSerializer(rootClass, isNullable);
    } else {
      // Inline function 'kotlin.Result.getOrNull' call
      var this_1 = findParametrizedCachedSerializer(rootClass, typeArguments, isNullable);
      var tmp_0;
      if (_Result___get_isFailure__impl__jpiriv(this_1)) {
        tmp_0 = null;
      } else {
        var tmp_1 = _Result___get_value__impl__bjfvqg(this_1);
        tmp_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      }
      tmp = tmp_0;
    }
    var cachedSerializer = tmp;
    if (cachedSerializer == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return cachedSerializer;
    }
    var tmp_2;
    if (typeArguments.u()) {
      tmp_2 = _this__u8e3s4.h8d(rootClass);
    } else {
      var tmp1_elvis_lhs = serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer);
      var tmp_3;
      if (tmp1_elvis_lhs == null) {
        return null;
      } else {
        tmp_3 = tmp1_elvis_lhs;
      }
      var serializers = tmp_3;
      var tmp2_elvis_lhs = parametrizedSerializerOrNull(rootClass, serializers, serializerByKTypeImpl$lambda(typeArguments));
      tmp_2 = tmp2_elvis_lhs == null ? _this__u8e3s4.g8d(rootClass, serializers) : tmp2_elvis_lhs;
    }
    var contextualSerializer = tmp_2;
    var tmp_4;
    if (contextualSerializer == null) {
      tmp_4 = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp_4 = isInterface(contextualSerializer, KSerializer) ? contextualSerializer : THROW_CCE();
    }
    var tmp4_safe_receiver = tmp_4;
    return tmp4_safe_receiver == null ? null : nullable(tmp4_safe_receiver, isNullable);
  }
  function nullable(_this__u8e3s4, shouldBeNullable) {
    if (shouldBeNullable)
      return get_nullable(_this__u8e3s4);
    return isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
  }
  function serializer_0(_this__u8e3s4) {
    var tmp0_elvis_lhs = serializerOrNull(_this__u8e3s4);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      serializerNotRegistered(_this__u8e3s4);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializerByKTypeImpl$lambda($typeArguments) {
    return function () {
      return $typeArguments.n(0).p7();
    };
  }
  function get_SERIALIZERS_CACHE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return SERIALIZERS_CACHE;
  }
  var SERIALIZERS_CACHE;
  function get_SERIALIZERS_CACHE_NULLABLE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return SERIALIZERS_CACHE_NULLABLE;
  }
  var SERIALIZERS_CACHE_NULLABLE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return PARAMETRIZED_SERIALIZERS_CACHE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  function findCachedSerializer(clazz, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp0_safe_receiver = get_SERIALIZERS_CACHE().i8d(clazz);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp_0 = isInterface(tmp0_safe_receiver, KSerializer) ? tmp0_safe_receiver : THROW_CCE();
      }
      tmp = tmp_0;
    } else {
      tmp = get_SERIALIZERS_CACHE_NULLABLE().i8d(clazz);
    }
    return tmp;
  }
  function findParametrizedCachedSerializer(clazz, types, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp_0 = get_PARAMETRIZED_SERIALIZERS_CACHE().j8d(clazz, types);
      tmp = new Result(tmp_0) instanceof Result ? tmp_0 : THROW_CCE();
    } else {
      tmp = get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE().j8d(clazz, types);
    }
    return tmp;
  }
  function SERIALIZERS_CACHE$lambda(it) {
    _init_properties_SerializersCache_kt__hgwi2p();
    return serializerOrNull(it);
  }
  function SERIALIZERS_CACHE_NULLABLE$lambda(it) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp0_safe_receiver = serializerOrNull(it);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_nullable(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp = isInterface(tmp1_safe_receiver, KSerializer) ? tmp1_safe_receiver : THROW_CCE();
    }
    return tmp;
  }
  function PARAMETRIZED_SERIALIZERS_CACHE$lambda(clazz, types) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    return parametrizedSerializerOrNull(clazz, serializers, PARAMETRIZED_SERIALIZERS_CACHE$lambda$lambda(types));
  }
  function PARAMETRIZED_SERIALIZERS_CACHE$lambda$lambda($types) {
    return function () {
      return $types.n(0).p7();
    };
  }
  function PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda(clazz, types) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    var tmp0_safe_receiver = parametrizedSerializerOrNull(clazz, serializers, PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda$lambda(types));
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_nullable(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp = isInterface(tmp1_safe_receiver, KSerializer) ? tmp1_safe_receiver : THROW_CCE();
    }
    return tmp;
  }
  function PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda$lambda($types) {
    return function () {
      return $types.n(0).p7();
    };
  }
  var properties_initialized_SerializersCache_kt_q8kf25;
  function _init_properties_SerializersCache_kt__hgwi2p() {
    if (!properties_initialized_SerializersCache_kt_q8kf25) {
      properties_initialized_SerializersCache_kt_q8kf25 = true;
      SERIALIZERS_CACHE = createCache(SERIALIZERS_CACHE$lambda);
      SERIALIZERS_CACHE_NULLABLE = createCache(SERIALIZERS_CACHE_NULLABLE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda);
    }
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.i8c().k8d()) {
      tmp = isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this__u8e3s4);
    }
    return tmp;
  }
  function serializer_1(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function serializer_2(_this__u8e3s4) {
    return CharSerializer_getInstance();
  }
  function CharArraySerializer() {
    return CharArraySerializer_getInstance();
  }
  function serializer_3(_this__u8e3s4) {
    return DoubleSerializer_getInstance();
  }
  function DoubleArraySerializer() {
    return DoubleArraySerializer_getInstance();
  }
  function serializer_4(_this__u8e3s4) {
    return FloatSerializer_getInstance();
  }
  function FloatArraySerializer() {
    return FloatArraySerializer_getInstance();
  }
  function serializer_5(_this__u8e3s4) {
    return LongSerializer_getInstance();
  }
  function LongArraySerializer() {
    return LongArraySerializer_getInstance();
  }
  function serializer_6(_this__u8e3s4) {
    return ULongSerializer_getInstance();
  }
  function ULongArraySerializer() {
    return ULongArraySerializer_getInstance();
  }
  function serializer_7(_this__u8e3s4) {
    return IntSerializer_getInstance();
  }
  function IntArraySerializer() {
    return IntArraySerializer_getInstance();
  }
  function serializer_8(_this__u8e3s4) {
    return UIntSerializer_getInstance();
  }
  function UIntArraySerializer() {
    return UIntArraySerializer_getInstance();
  }
  function serializer_9(_this__u8e3s4) {
    return ShortSerializer_getInstance();
  }
  function ShortArraySerializer() {
    return ShortArraySerializer_getInstance();
  }
  function serializer_10(_this__u8e3s4) {
    return UShortSerializer_getInstance();
  }
  function UShortArraySerializer() {
    return UShortArraySerializer_getInstance();
  }
  function serializer_11(_this__u8e3s4) {
    return ByteSerializer_getInstance();
  }
  function ByteArraySerializer() {
    return ByteArraySerializer_getInstance();
  }
  function serializer_12(_this__u8e3s4) {
    return UByteSerializer_getInstance();
  }
  function UByteArraySerializer() {
    return UByteArraySerializer_getInstance();
  }
  function serializer_13(_this__u8e3s4) {
    return BooleanSerializer_getInstance();
  }
  function BooleanArraySerializer() {
    return BooleanArraySerializer_getInstance();
  }
  function serializer_14(_this__u8e3s4) {
    return UnitSerializer_getInstance();
  }
  function NothingSerializer() {
    return NothingSerializer_getInstance();
  }
  function serializer_15(_this__u8e3s4) {
    return DurationSerializer_getInstance();
  }
  function MapEntrySerializer(keySerializer, valueSerializer) {
    return new MapEntrySerializer_0(keySerializer, valueSerializer);
  }
  function PairSerializer(keySerializer, valueSerializer) {
    return new PairSerializer_0(keySerializer, valueSerializer);
  }
  function TripleSerializer(aSerializer, bSerializer, cSerializer) {
    return new TripleSerializer_0(aSerializer, bSerializer, cSerializer);
  }
  function ArraySerializer(kClass, elementSerializer) {
    return new ReferenceArraySerializer(kClass, elementSerializer);
  }
  function MapSerializer(keySerializer, valueSerializer) {
    return new LinkedHashMapSerializer(keySerializer, valueSerializer);
  }
  function ListSerializer(elementSerializer) {
    return new ArrayListSerializer(elementSerializer);
  }
  function SetSerializer(elementSerializer) {
    return new LinkedHashSetSerializer(elementSerializer);
  }
  function withContext(_this__u8e3s4, context) {
    return new ContextDescriptor(_this__u8e3s4, context);
  }
  function ContextDescriptor(original, kClass) {
    this.l8d_1 = original;
    this.m8d_1 = kClass;
    this.n8d_1 = this.l8d_1.o8d() + '<' + this.m8d_1.b7() + '>';
  }
  protoOf(ContextDescriptor).p8d = function () {
    return this.l8d_1.p8d();
  };
  protoOf(ContextDescriptor).q8d = function () {
    return this.l8d_1.q8d();
  };
  protoOf(ContextDescriptor).r8d = function () {
    return this.l8d_1.r8d();
  };
  protoOf(ContextDescriptor).k8d = function () {
    return this.l8d_1.k8d();
  };
  protoOf(ContextDescriptor).s8d = function () {
    return this.l8d_1.s8d();
  };
  protoOf(ContextDescriptor).t8d = function (index) {
    return this.l8d_1.t8d(index);
  };
  protoOf(ContextDescriptor).u8d = function (index) {
    return this.l8d_1.u8d(index);
  };
  protoOf(ContextDescriptor).v8d = function (name) {
    return this.l8d_1.v8d(name);
  };
  protoOf(ContextDescriptor).w8d = function (index) {
    return this.l8d_1.w8d(index);
  };
  protoOf(ContextDescriptor).x8d = function (index) {
    return this.l8d_1.x8d(index);
  };
  protoOf(ContextDescriptor).o8d = function () {
    return this.n8d_1;
  };
  protoOf(ContextDescriptor).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof ContextDescriptor ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var another = tmp;
    return equals(this.l8d_1, another.l8d_1) ? another.m8d_1.equals(this.m8d_1) : false;
  };
  protoOf(ContextDescriptor).hashCode = function () {
    var result = this.m8d_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.n8d_1) | 0;
    return result;
  };
  protoOf(ContextDescriptor).toString = function () {
    return 'ContextDescriptor(kClass: ' + this.m8d_1 + ', original: ' + this.l8d_1 + ')';
  };
  function getContextualDescriptor(_this__u8e3s4, descriptor) {
    var tmp0_safe_receiver = get_capturedKClass(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.descriptors.getContextualDescriptor.<anonymous>' call
      var tmp0_safe_receiver_0 = _this__u8e3s4.h8d(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.i8c();
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.m8d_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.y8d_1);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function SerialDescriptor() {
  }
  function get_elementDescriptors(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new _no_name_provided__qut3iv(_this__u8e3s4);
  }
  function elementDescriptors$1$1($this_elementDescriptors) {
    this.c8e_1 = $this_elementDescriptors;
    this.b8e_1 = $this_elementDescriptors.q8d();
  }
  protoOf(elementDescriptors$1$1).d1 = function () {
    return this.b8e_1 > 0;
  };
  protoOf(elementDescriptors$1$1).f1 = function () {
    var tmp = this.c8e_1.q8d();
    var tmp1 = this.b8e_1;
    this.b8e_1 = tmp1 - 1 | 0;
    return this.c8e_1.u8d(tmp - tmp1 | 0);
  };
  function _no_name_provided__qut3iv($this_elementDescriptors) {
    this.d8e_1 = $this_elementDescriptors;
  }
  protoOf(_no_name_provided__qut3iv).o = function () {
    // Inline function 'kotlinx.serialization.descriptors.<get-elementDescriptors>.<anonymous>' call
    return new elementDescriptors$1$1(this.d8e_1);
  };
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    var tmp;
    if (builder === VOID) {
      tmp = buildSerialDescriptor$lambda;
    } else {
      tmp = builder;
    }
    builder = tmp;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isBlank(serialName)) {
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!equals(kind, CLASS_getInstance())) {
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      var message_0 = "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builder(sdBuilder);
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.o8c_1.m(), toList(typeParameters), sdBuilder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.l8c_1 = serialName;
    this.m8c_1 = false;
    this.n8c_1 = emptyList();
    this.o8c_1 = ArrayList_init_$Create$_0();
    this.p8c_1 = HashSet_init_$Create$();
    this.q8c_1 = ArrayList_init_$Create$_0();
    this.r8c_1 = ArrayList_init_$Create$_0();
    this.s8c_1 = ArrayList_init_$Create$_0();
  }
  protoOf(ClassSerialDescriptorBuilder).e8e = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.p8c_1.a1(elementName)) {
      // Inline function 'kotlinx.serialization.descriptors.ClassSerialDescriptorBuilder.element.<anonymous>' call
      var message = "Element with name '" + elementName + "' is already registered in " + this.l8c_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.plusAssign' call
    this.o8c_1.a1(elementName);
    // Inline function 'kotlin.collections.plusAssign' call
    this.q8c_1.a1(descriptor);
    // Inline function 'kotlin.collections.plusAssign' call
    this.r8c_1.a1(annotations);
    // Inline function 'kotlin.collections.plusAssign' call
    this.s8c_1.a1(isOptional);
  };
  protoOf(ClassSerialDescriptorBuilder).t8c = function (elementName, descriptor, annotations, isOptional, $super) {
    annotations = annotations === VOID ? emptyList() : annotations;
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.e8e(elementName, descriptor, annotations, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.e8e.call(this, elementName, descriptor, annotations, isOptional);
    }
    return tmp;
  };
  function buildClassSerialDescriptor(serialName, typeParameters, builderAction) {
    var tmp;
    if (builderAction === VOID) {
      tmp = buildClassSerialDescriptor$lambda;
    } else {
      tmp = builderAction;
    }
    builderAction = tmp;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isBlank(serialName)) {
      // Inline function 'kotlinx.serialization.descriptors.buildClassSerialDescriptor.<anonymous>' call
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builderAction(sdBuilder);
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.o8c_1.m(), toList(typeParameters), sdBuilder);
  }
  function _get__hashCode__tgwhef($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.q8e_1;
    _hashCode$factory();
    return this_0.q2();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.p8e_1);
    };
  }
  function SerialDescriptorImpl$toString$lambda(this$0) {
    return function (it) {
      return this$0.w8d(it) + ': ' + this$0.u8d(it).o8d();
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.f8e_1 = serialName;
    this.g8e_1 = kind;
    this.h8e_1 = elementsCount;
    this.i8e_1 = builder.n8c_1;
    this.j8e_1 = toHashSet(builder.o8c_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = builder.o8c_1;
    tmp.k8e_1 = copyToArray(this_0);
    this.l8e_1 = compactArray(builder.q8c_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = builder.r8c_1;
    tmp_0.m8e_1 = copyToArray(this_1);
    this.n8e_1 = toBooleanArray(builder.s8c_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var this_2 = withIndex(this.k8e_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var tmp0_iterator = this_2.o();
    while (tmp0_iterator.d1()) {
      var item = tmp0_iterator.f1();
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.name2Index.<anonymous>' call
      var tmp$ret$2 = to(item.ie_1, item.he_1);
      destination.a1(tmp$ret$2);
    }
    tmp_1.o8e_1 = toMap(destination);
    this.p8e_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.q8e_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).o8d = function () {
    return this.f8e_1;
  };
  protoOf(SerialDescriptorImpl).s8d = function () {
    return this.g8e_1;
  };
  protoOf(SerialDescriptorImpl).q8d = function () {
    return this.h8e_1;
  };
  protoOf(SerialDescriptorImpl).p8d = function () {
    return this.i8e_1;
  };
  protoOf(SerialDescriptorImpl).r8e = function () {
    return this.j8e_1;
  };
  protoOf(SerialDescriptorImpl).w8d = function (index) {
    return getChecked(this.k8e_1, index);
  };
  protoOf(SerialDescriptorImpl).v8d = function (name) {
    var tmp0_elvis_lhs = this.o8e_1.x2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(SerialDescriptorImpl).t8d = function (index) {
    return getChecked(this.m8e_1, index);
  };
  protoOf(SerialDescriptorImpl).u8d = function (index) {
    return getChecked(this.l8e_1, index);
  };
  protoOf(SerialDescriptorImpl).x8d = function (index) {
    return getChecked_0(this.n8e_1, index);
  };
  protoOf(SerialDescriptorImpl).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof SerialDescriptorImpl)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.o8d() === other.o8d())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.equals.<anonymous>' call
      if (!contentEquals(this.p8e_1, other.p8e_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.q8d() === other.q8d())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.q8d();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.u8d(index).o8d() === other.u8d(index).o8d())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.u8d(index).s8d(), other.u8d(index).s8d())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SerialDescriptorImpl).hashCode = function () {
    return _get__hashCode__tgwhef(this);
  };
  protoOf(SerialDescriptorImpl).toString = function () {
    var tmp = until(0, this.h8e_1);
    var tmp_0 = this.f8e_1 + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, SerialDescriptorImpl$toString$lambda(this));
  };
  function PrimitiveSerialDescriptor(serialName, kind) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isBlank(serialName)) {
      // Inline function 'kotlinx.serialization.descriptors.PrimitiveSerialDescriptor.<anonymous>' call
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return PrimitiveDescriptorSafe(serialName, kind);
  }
  function buildSerialDescriptor$lambda($this$null) {
    return Unit_instance;
  }
  function buildClassSerialDescriptor$lambda($this$null) {
    return Unit_instance;
  }
  function _hashCode$factory() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef(receiver);
    }, null);
  }
  function ENUM() {
    ENUM_instance = this;
    SerialKind.call(this);
  }
  var ENUM_instance;
  function ENUM_getInstance() {
    if (ENUM_instance == null)
      new ENUM();
    return ENUM_instance;
  }
  function CONTEXTUAL() {
    CONTEXTUAL_instance = this;
    SerialKind.call(this);
  }
  var CONTEXTUAL_instance;
  function CONTEXTUAL_getInstance() {
    if (CONTEXTUAL_instance == null)
      new CONTEXTUAL();
    return CONTEXTUAL_instance;
  }
  function SerialKind() {
  }
  protoOf(SerialKind).toString = function () {
    return ensureNotNull(getKClassFromExpression(this).b7());
  };
  protoOf(SerialKind).hashCode = function () {
    return getStringHashCode(this.toString());
  };
  function BOOLEAN() {
    BOOLEAN_instance = this;
    PrimitiveKind.call(this);
  }
  var BOOLEAN_instance;
  function BOOLEAN_getInstance() {
    if (BOOLEAN_instance == null)
      new BOOLEAN();
    return BOOLEAN_instance;
  }
  function BYTE() {
    BYTE_instance = this;
    PrimitiveKind.call(this);
  }
  var BYTE_instance;
  function BYTE_getInstance() {
    if (BYTE_instance == null)
      new BYTE();
    return BYTE_instance;
  }
  function CHAR() {
    CHAR_instance = this;
    PrimitiveKind.call(this);
  }
  var CHAR_instance;
  function CHAR_getInstance() {
    if (CHAR_instance == null)
      new CHAR();
    return CHAR_instance;
  }
  function SHORT() {
    SHORT_instance = this;
    PrimitiveKind.call(this);
  }
  var SHORT_instance;
  function SHORT_getInstance() {
    if (SHORT_instance == null)
      new SHORT();
    return SHORT_instance;
  }
  function INT() {
    INT_instance = this;
    PrimitiveKind.call(this);
  }
  var INT_instance;
  function INT_getInstance() {
    if (INT_instance == null)
      new INT();
    return INT_instance;
  }
  function LONG() {
    LONG_instance = this;
    PrimitiveKind.call(this);
  }
  var LONG_instance;
  function LONG_getInstance() {
    if (LONG_instance == null)
      new LONG();
    return LONG_instance;
  }
  function FLOAT() {
    FLOAT_instance = this;
    PrimitiveKind.call(this);
  }
  var FLOAT_instance;
  function FLOAT_getInstance() {
    if (FLOAT_instance == null)
      new FLOAT();
    return FLOAT_instance;
  }
  function DOUBLE() {
    DOUBLE_instance = this;
    PrimitiveKind.call(this);
  }
  var DOUBLE_instance;
  function DOUBLE_getInstance() {
    if (DOUBLE_instance == null)
      new DOUBLE();
    return DOUBLE_instance;
  }
  function STRING() {
    STRING_instance = this;
    PrimitiveKind.call(this);
  }
  var STRING_instance;
  function STRING_getInstance() {
    if (STRING_instance == null)
      new STRING();
    return STRING_instance;
  }
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  function CLASS() {
    CLASS_instance = this;
    StructureKind.call(this);
  }
  var CLASS_instance;
  function CLASS_getInstance() {
    if (CLASS_instance == null)
      new CLASS();
    return CLASS_instance;
  }
  function LIST() {
    LIST_instance = this;
    StructureKind.call(this);
  }
  var LIST_instance;
  function LIST_getInstance() {
    if (LIST_instance == null)
      new LIST();
    return LIST_instance;
  }
  function MAP() {
    MAP_instance = this;
    StructureKind.call(this);
  }
  var MAP_instance;
  function MAP_getInstance() {
    if (MAP_instance == null)
      new MAP();
    return MAP_instance;
  }
  function OBJECT() {
    OBJECT_instance = this;
    StructureKind.call(this);
  }
  var OBJECT_instance;
  function OBJECT_getInstance() {
    if (OBJECT_instance == null)
      new OBJECT();
    return OBJECT_instance;
  }
  function StructureKind() {
    SerialKind.call(this);
  }
  function SEALED() {
    SEALED_instance = this;
    PolymorphicKind.call(this);
  }
  var SEALED_instance;
  function SEALED_getInstance() {
    if (SEALED_instance == null)
      new SEALED();
    return SEALED_instance;
  }
  function OPEN() {
    OPEN_instance = this;
    PolymorphicKind.call(this);
  }
  var OPEN_instance;
  function OPEN_getInstance() {
    if (OPEN_instance == null)
      new OPEN();
    return OPEN_instance;
  }
  function PolymorphicKind() {
    SerialKind.call(this);
  }
  function AbstractDecoder() {
  }
  protoOf(AbstractDecoder).s8e = function () {
    throw SerializationException_init_$Create$_0('' + getKClassFromExpression(this) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).t8e = function () {
    return true;
  };
  protoOf(AbstractDecoder).u8e = function () {
    return null;
  };
  protoOf(AbstractDecoder).v8e = function () {
    var tmp = this.s8e();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).w8e = function () {
    var tmp = this.s8e();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).x8e = function () {
    var tmp = this.s8e();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).y8e = function () {
    var tmp = this.s8e();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).z8e = function () {
    var tmp = this.s8e();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).a8f = function () {
    var tmp = this.s8e();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).b8f = function () {
    var tmp = this.s8e();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).c8f = function () {
    var tmp = this.s8e();
    return tmp instanceof Char ? tmp.ja_1 : THROW_CCE();
  };
  protoOf(AbstractDecoder).d8f = function () {
    var tmp = this.s8e();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).e8f = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).f8f = function (deserializer, previousValue) {
    return this.g8f(deserializer);
  };
  protoOf(AbstractDecoder).h8f = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).i8f = function (descriptor) {
  };
  protoOf(AbstractDecoder).j8f = function (descriptor, index) {
    return this.v8e();
  };
  protoOf(AbstractDecoder).k8f = function (descriptor, index) {
    return this.w8e();
  };
  protoOf(AbstractDecoder).l8f = function (descriptor, index) {
    return this.x8e();
  };
  protoOf(AbstractDecoder).m8f = function (descriptor, index) {
    return this.y8e();
  };
  protoOf(AbstractDecoder).n8f = function (descriptor, index) {
    return this.z8e();
  };
  protoOf(AbstractDecoder).o8f = function (descriptor, index) {
    return this.a8f();
  };
  protoOf(AbstractDecoder).p8f = function (descriptor, index) {
    return this.b8f();
  };
  protoOf(AbstractDecoder).q8f = function (descriptor, index) {
    return this.c8f();
  };
  protoOf(AbstractDecoder).r8f = function (descriptor, index) {
    return this.d8f();
  };
  protoOf(AbstractDecoder).s8f = function (descriptor, index) {
    return this.e8f(descriptor.u8d(index));
  };
  protoOf(AbstractDecoder).t8f = function (descriptor, index, deserializer, previousValue) {
    return this.f8f(deserializer, previousValue);
  };
  protoOf(AbstractDecoder).v8f = function (descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
    var isNullabilitySupported = deserializer.i8c().k8d();
    var tmp;
    if (isNullabilitySupported ? true : this.t8e()) {
      // Inline function 'kotlinx.serialization.encoding.AbstractDecoder.decodeNullableSerializableElement.<anonymous>' call
      tmp = this.f8f(deserializer, previousValue);
    } else {
      tmp = this.u8e();
    }
    return tmp;
  };
  function AbstractEncoder() {
  }
  protoOf(AbstractEncoder).h8f = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).i8f = function (descriptor) {
  };
  protoOf(AbstractEncoder).a8g = function (descriptor, index) {
    return true;
  };
  protoOf(AbstractEncoder).b8g = function (value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + getKClassFromExpression(value) + ' is not supported by ' + getKClassFromExpression(this) + ' encoder');
  };
  protoOf(AbstractEncoder).c8g = function () {
    throw SerializationException_init_$Create$_0("'null' is not supported by default");
  };
  protoOf(AbstractEncoder).d8g = function (value) {
    return this.b8g(value);
  };
  protoOf(AbstractEncoder).e8g = function (value) {
    return this.b8g(value);
  };
  protoOf(AbstractEncoder).f8g = function (value) {
    return this.b8g(value);
  };
  protoOf(AbstractEncoder).g8g = function (value) {
    return this.b8g(value);
  };
  protoOf(AbstractEncoder).h8g = function (value) {
    return this.b8g(value);
  };
  protoOf(AbstractEncoder).i8g = function (value) {
    return this.b8g(value);
  };
  protoOf(AbstractEncoder).j8g = function (value) {
    return this.b8g(value);
  };
  protoOf(AbstractEncoder).k8g = function (value) {
    return this.b8g(new Char(value));
  };
  protoOf(AbstractEncoder).l8g = function (value) {
    return this.b8g(value);
  };
  protoOf(AbstractEncoder).m8g = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).n8g = function (descriptor, index, value) {
    if (this.a8g(descriptor, index)) {
      this.d8g(value);
    }
  };
  protoOf(AbstractEncoder).o8g = function (descriptor, index, value) {
    if (this.a8g(descriptor, index)) {
      this.e8g(value);
    }
  };
  protoOf(AbstractEncoder).p8g = function (descriptor, index, value) {
    if (this.a8g(descriptor, index)) {
      this.f8g(value);
    }
  };
  protoOf(AbstractEncoder).q8g = function (descriptor, index, value) {
    if (this.a8g(descriptor, index)) {
      this.g8g(value);
    }
  };
  protoOf(AbstractEncoder).r8g = function (descriptor, index, value) {
    if (this.a8g(descriptor, index)) {
      this.h8g(value);
    }
  };
  protoOf(AbstractEncoder).s8g = function (descriptor, index, value) {
    if (this.a8g(descriptor, index)) {
      this.i8g(value);
    }
  };
  protoOf(AbstractEncoder).t8g = function (descriptor, index, value) {
    if (this.a8g(descriptor, index)) {
      this.j8g(value);
    }
  };
  protoOf(AbstractEncoder).u8g = function (descriptor, index, value) {
    if (this.a8g(descriptor, index)) {
      this.k8g(value);
    }
  };
  protoOf(AbstractEncoder).v8g = function (descriptor, index, value) {
    if (this.a8g(descriptor, index)) {
      this.l8g(value);
    }
  };
  protoOf(AbstractEncoder).w8g = function (descriptor, index) {
    return this.a8g(descriptor, index) ? this.m8g(descriptor.u8d(index)) : NoOpEncoder_getInstance();
  };
  protoOf(AbstractEncoder).x8g = function (descriptor, index, serializer, value) {
    if (this.a8g(descriptor, index)) {
      this.y8g(serializer, value);
    }
  };
  protoOf(AbstractEncoder).z8g = function (descriptor, index, serializer, value) {
    if (this.a8g(descriptor, index)) {
      this.a8h(serializer, value);
    }
  };
  function Decoder() {
  }
  function Companion() {
    this.e8h_1 = -1;
    this.f8h_1 = -3;
  }
  var Companion_instance_0;
  function Companion_getInstance_6() {
    return Companion_instance_0;
  }
  function CompositeDecoder() {
  }
  function Encoder() {
  }
  function CompositeEncoder() {
  }
  function decodeSequentially_0($this, compositeDecoder) {
    var klassName = compositeDecoder.r8f($this.i8c(), 0);
    var serializer = findPolymorphicSerializer_0($this, compositeDecoder, klassName);
    return compositeDecoder.u8f($this.i8c(), 1, serializer);
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).y8c = function (encoder, value) {
    var actualSerializer = findPolymorphicSerializer(this, encoder, value);
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var descriptor = this.i8c();
    var composite = encoder.h8f(descriptor);
    // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.serialize.<anonymous>' call
    composite.v8g(this.i8c(), 0, actualSerializer.i8c().o8d());
    var tmp = this.i8c();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var tmp$ret$0 = isInterface(actualSerializer, SerializationStrategy) ? actualSerializer : THROW_CCE();
    composite.x8g(tmp, 1, tmp$ret$0, value);
    composite.i8f(descriptor);
  };
  protoOf(AbstractPolymorphicSerializer).j8c = function (encoder, value) {
    return this.y8c(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(AbstractPolymorphicSerializer).k8c = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.i8c();
    var composite = decoder.h8f(descriptor);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>' call
      var klassName = null;
      var value = null;
      if (composite.x8f()) {
        tmp$ret$0 = decodeSequentially_0(this, composite);
        break $l$block;
      }
      mainLoop: while (true) {
        var index = composite.y8f(this.i8c());
        if (index === -1) {
          break mainLoop;
        } else {
          if (index === 0) {
            klassName = composite.r8f(this.i8c(), index);
          } else {
            if (index === 1) {
              var tmp$ret$2;
              $l$block_0: {
                // Inline function 'kotlin.requireNotNull' call
                var value_0 = klassName;
                // Inline function 'kotlin.contracts.contract' call
                if (value_0 == null) {
                  // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>.<anonymous>' call
                  var message = 'Cannot read polymorphic value before its type token';
                  throw IllegalArgumentException_init_$Create$(toString(message));
                } else {
                  tmp$ret$2 = value_0;
                  break $l$block_0;
                }
              }
              klassName = tmp$ret$2;
              var serializer = findPolymorphicSerializer_0(this, composite, klassName);
              value = composite.u8f(this.i8c(), index, serializer);
            } else {
              var tmp0_elvis_lhs = klassName;
              throw SerializationException_init_$Create$_0('Invalid index in polymorphic deserialization of ' + (tmp0_elvis_lhs == null ? 'unknown class' : tmp0_elvis_lhs) + ('\n Expected 0, 1 or DECODE_DONE(-1), but found ' + index));
            }
          }
        }
      }
      var tmp$ret$4;
      $l$block_1: {
        // Inline function 'kotlin.requireNotNull' call
        var value_1 = value;
        // Inline function 'kotlin.contracts.contract' call
        if (value_1 == null) {
          // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>.<anonymous>' call
          var message_0 = 'Polymorphic value has not been read for class ' + klassName;
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        } else {
          tmp$ret$4 = value_1;
          break $l$block_1;
        }
      }
      var tmp = tmp$ret$4;
      tmp$ret$0 = !(tmp == null) ? tmp : THROW_CCE();
    }
    var result = tmp$ret$0;
    composite.i8f(descriptor);
    return result;
  };
  protoOf(AbstractPolymorphicSerializer).z8c = function (decoder, klassName) {
    return decoder.w8f().g8h(this.x8c(), klassName);
  };
  protoOf(AbstractPolymorphicSerializer).a8d = function (encoder, value) {
    return encoder.w8f().h8h(this.x8c(), value);
  };
  function throwSubtypeNotRegistered(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.b7();
    throwSubtypeNotRegistered_0(tmp0_elvis_lhs == null ? '' + subClass : tmp0_elvis_lhs, baseClass);
  }
  function throwSubtypeNotRegistered_0(subClassName, baseClass) {
    var scope = "in the polymorphic scope of '" + baseClass.b7() + "'";
    throw SerializationException_init_$Create$_0(subClassName == null ? 'Class discriminator was missing and no default serializers were registered ' + scope + '.' : "Serializer for subclass '" + subClassName + "' is not found " + scope + '.\n' + ("Check if class with serial name '" + subClassName + "' exists and serializer is registered in a corresponding SerializersModule.\n") + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.b7() + "' has to be sealed and '@Serializable'."));
  }
  function NothingSerializer_0() {
    NothingSerializer_instance = this;
    this.i8h_1 = NothingSerialDescriptor_getInstance();
  }
  protoOf(NothingSerializer_0).i8c = function () {
    return this.i8h_1;
  };
  protoOf(NothingSerializer_0).j8h = function (encoder, value) {
    throw SerializationException_init_$Create$_0("'kotlin.Nothing' cannot be serialized");
  };
  protoOf(NothingSerializer_0).j8c = function (encoder, value) {
    var tmp;
    if (false) {
      tmp = value;
    } else {
      tmp = THROW_CCE();
    }
    return this.j8h(encoder, tmp);
  };
  protoOf(NothingSerializer_0).k8c = function (decoder) {
    throw SerializationException_init_$Create$_0("'kotlin.Nothing' does not have instances");
  };
  var NothingSerializer_instance;
  function NothingSerializer_getInstance() {
    if (NothingSerializer_instance == null)
      new NothingSerializer_0();
    return NothingSerializer_instance;
  }
  function DurationSerializer() {
    DurationSerializer_instance = this;
    this.k8h_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  protoOf(DurationSerializer).i8c = function () {
    return this.k8h_1;
  };
  protoOf(DurationSerializer).l8h = function (encoder, value) {
    encoder.l8g(Duration__toIsoString_impl_9h6wsm(value));
  };
  protoOf(DurationSerializer).j8c = function (encoder, value) {
    return this.l8h(encoder, value instanceof Duration ? value.ei_1 : THROW_CCE());
  };
  protoOf(DurationSerializer).m8h = function (decoder) {
    return Companion_getInstance().di(decoder.d8f());
  };
  protoOf(DurationSerializer).k8c = function (decoder) {
    return new Duration(this.m8h(decoder));
  };
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function CachedNames() {
  }
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayListClassDesc).o8d = function () {
    return 'kotlin.collections.ArrayList';
  };
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(HashSetClassDesc).o8d = function () {
    return 'kotlin.collections.HashSet';
  };
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(LinkedHashSetClassDesc).o8d = function () {
    return 'kotlin.collections.LinkedHashSet';
  };
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.HashMap', keyDesc, valueDesc);
  }
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  function ArrayClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayClassDesc).o8d = function () {
    return 'kotlin.Array';
  };
  function ListLikeDescriptor(elementDescriptor) {
    this.p8h_1 = elementDescriptor;
    this.q8h_1 = 1;
  }
  protoOf(ListLikeDescriptor).s8d = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).q8d = function () {
    return this.q8h_1;
  };
  protoOf(ListLikeDescriptor).w8d = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).v8d = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListLikeDescriptor).x8d = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.isElementOptional.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.o8d() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(ListLikeDescriptor).t8d = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementAnnotations.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.o8d() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(ListLikeDescriptor).u8d = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.o8d() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.p8h_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.p8h_1, other.p8h_1) ? this.o8d() === other.o8d() : false)
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.p8h_1), 31) + getStringHashCode(this.o8d()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.o8d() + '(' + this.p8h_1 + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.v8h_1 = serialName;
    this.w8h_1 = keyDescriptor;
    this.x8h_1 = valueDescriptor;
    this.y8h_1 = 2;
  }
  protoOf(MapLikeDescriptor).o8d = function () {
    return this.v8h_1;
  };
  protoOf(MapLikeDescriptor).s8d = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).q8d = function () {
    return this.y8h_1;
  };
  protoOf(MapLikeDescriptor).w8d = function (index) {
    return index.toString();
  };
  protoOf(MapLikeDescriptor).v8d = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).x8d = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.isElementOptional.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.o8d() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(MapLikeDescriptor).t8d = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementAnnotations.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.o8d() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(MapLikeDescriptor).u8d = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.o8d() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.w8h_1;
        break;
      case 1:
        tmp = this.x8h_1;
        break;
      default:
        var message_0 = 'Unreached';
        throw IllegalStateException_init_$Create$(toString(message_0));
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapLikeDescriptor))
      return false;
    if (!(this.o8d() === other.o8d()))
      return false;
    if (!equals(this.w8h_1, other.w8h_1))
      return false;
    if (!equals(this.x8h_1, other.x8h_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.o8d());
    result = imul(31, result) + hashCode(this.w8h_1) | 0;
    result = imul(31, result) + hashCode(this.x8h_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.o8d() + '(' + this.w8h_1 + ', ' + this.x8h_1 + ')';
  };
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.d8i_1 = primitive.o8d() + 'Array';
  }
  protoOf(PrimitiveArrayDescriptor).o8d = function () {
    return this.d8i_1;
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.f8i_1 = new ArrayListClassDesc(element.i8c());
  }
  protoOf(ArrayListSerializer).i8c = function () {
    return this.f8i_1;
  };
  protoOf(ArrayListSerializer).j1m = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ArrayListSerializer).g8i = function (_this__u8e3s4) {
    return _this__u8e3s4.m();
  };
  protoOf(ArrayListSerializer).h8i = function (_this__u8e3s4) {
    return this.g8i(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).i8i = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).j8i = function (_this__u8e3s4) {
    return this.i8i(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).k8i = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(ArrayListSerializer).l8i = function (_this__u8e3s4) {
    return this.k8i((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, List) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).m8i = function (_this__u8e3s4, size) {
    return _this__u8e3s4.f3(size);
  };
  protoOf(ArrayListSerializer).n8i = function (_this__u8e3s4, size) {
    return this.m8i(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ArrayListSerializer).o8i = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.y1(index, element);
  };
  protoOf(ArrayListSerializer).p8i = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.o8i(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.a8j_1 = new HashSetClassDesc(eSerializer.i8c());
  }
  protoOf(HashSetSerializer).i8c = function () {
    return this.a8j_1;
  };
  protoOf(HashSetSerializer).j1m = function () {
    return HashSet_init_$Create$();
  };
  protoOf(HashSetSerializer).b8j = function (_this__u8e3s4) {
    return _this__u8e3s4.m();
  };
  protoOf(HashSetSerializer).h8i = function (_this__u8e3s4) {
    return this.b8j(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).c8j = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashSetSerializer).j8i = function (_this__u8e3s4) {
    return this.c8j(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).d8j = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashSetSerializer).l8i = function (_this__u8e3s4) {
    return this.d8j((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Set) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).e8j = function (_this__u8e3s4, size) {
  };
  protoOf(HashSetSerializer).n8i = function (_this__u8e3s4, size) {
    return this.e8j(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(HashSetSerializer).f8j = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.a1(element);
  };
  protoOf(HashSetSerializer).p8i = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE();
    return this.f8j(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.h8j_1 = new LinkedHashSetClassDesc(eSerializer.i8c());
  }
  protoOf(LinkedHashSetSerializer).i8c = function () {
    return this.h8j_1;
  };
  protoOf(LinkedHashSetSerializer).j1m = function () {
    // Inline function 'kotlin.collections.linkedSetOf' call
    return LinkedHashSet_init_$Create$();
  };
  protoOf(LinkedHashSetSerializer).i8j = function (_this__u8e3s4) {
    return _this__u8e3s4.m();
  };
  protoOf(LinkedHashSetSerializer).h8i = function (_this__u8e3s4) {
    return this.i8j(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).j8j = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashSetSerializer).j8i = function (_this__u8e3s4) {
    return this.j8j(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).d8j = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashSetSerializer).l8i = function (_this__u8e3s4) {
    return this.d8j((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Set) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).k8j = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashSetSerializer).n8i = function (_this__u8e3s4, size) {
    return this.k8j(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(LinkedHashSetSerializer).l8j = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.a1(element);
  };
  protoOf(LinkedHashSetSerializer).p8i = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE();
    return this.l8j(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.o8j_1 = new HashMapClassDesc(kSerializer.i8c(), vSerializer.i8c());
  }
  protoOf(HashMapSerializer).i8c = function () {
    return this.o8j_1;
  };
  protoOf(HashMapSerializer).p8j = function (_this__u8e3s4) {
    return _this__u8e3s4.m();
  };
  protoOf(HashMapSerializer).q8j = function (_this__u8e3s4) {
    return this.p8j((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).r8j = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.m2().o();
  };
  protoOf(HashMapSerializer).s8j = function (_this__u8e3s4) {
    return this.r8j((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).j1m = function () {
    return HashMap_init_$Create$();
  };
  protoOf(HashMapSerializer).t8j = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.m(), 2);
  };
  protoOf(HashMapSerializer).h8i = function (_this__u8e3s4) {
    return this.t8j(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).u8j = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashMapSerializer).j8i = function (_this__u8e3s4) {
    return this.u8j(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).v8j = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashMapSerializer).l8i = function (_this__u8e3s4) {
    return this.v8j((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).w8j = function (_this__u8e3s4, size) {
  };
  protoOf(HashMapSerializer).n8i = function (_this__u8e3s4, size) {
    return this.w8j(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.d8k_1 = new LinkedHashMapClassDesc(kSerializer.i8c(), vSerializer.i8c());
  }
  protoOf(LinkedHashMapSerializer).i8c = function () {
    return this.d8k_1;
  };
  protoOf(LinkedHashMapSerializer).p8j = function (_this__u8e3s4) {
    return _this__u8e3s4.m();
  };
  protoOf(LinkedHashMapSerializer).q8j = function (_this__u8e3s4) {
    return this.p8j((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).r8j = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.m2().o();
  };
  protoOf(LinkedHashMapSerializer).s8j = function (_this__u8e3s4) {
    return this.r8j((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).j1m = function () {
    return LinkedHashMap_init_$Create$();
  };
  protoOf(LinkedHashMapSerializer).e8k = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.m(), 2);
  };
  protoOf(LinkedHashMapSerializer).h8i = function (_this__u8e3s4) {
    return this.e8k(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).f8k = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashMapSerializer).j8i = function (_this__u8e3s4) {
    return this.f8k(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).v8j = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashMapSerializer).l8i = function (_this__u8e3s4) {
    return this.v8j((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).g8k = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashMapSerializer).n8i = function (_this__u8e3s4, size) {
    return this.g8k(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.i8k_1 = kClass;
    this.j8k_1 = new ArrayClassDesc(eSerializer.i8c());
  }
  protoOf(ReferenceArraySerializer).i8c = function () {
    return this.j8k_1;
  };
  protoOf(ReferenceArraySerializer).k8k = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ReferenceArraySerializer).q8j = function (_this__u8e3s4) {
    return this.k8k((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).l8k = function (_this__u8e3s4) {
    return arrayIterator(_this__u8e3s4);
  };
  protoOf(ReferenceArraySerializer).s8j = function (_this__u8e3s4) {
    return this.l8k((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).j1m = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ReferenceArraySerializer).m8k = function (_this__u8e3s4) {
    return _this__u8e3s4.m();
  };
  protoOf(ReferenceArraySerializer).h8i = function (_this__u8e3s4) {
    return this.m8k(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).n8k = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.i8k_1);
  };
  protoOf(ReferenceArraySerializer).j8i = function (_this__u8e3s4) {
    return this.n8k(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).o8k = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  protoOf(ReferenceArraySerializer).l8i = function (_this__u8e3s4) {
    return this.o8k((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).p8k = function (_this__u8e3s4, size) {
    return _this__u8e3s4.f3(size);
  };
  protoOf(ReferenceArraySerializer).n8i = function (_this__u8e3s4, size) {
    return this.p8k(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ReferenceArraySerializer).q8k = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.y1(index, element);
  };
  protoOf(ReferenceArraySerializer).p8i = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.q8k(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  protoOf(CollectionSerializer).r8i = function (_this__u8e3s4) {
    return _this__u8e3s4.m();
  };
  protoOf(CollectionSerializer).q8j = function (_this__u8e3s4) {
    return this.r8i((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CollectionSerializer).s8i = function (_this__u8e3s4) {
    return _this__u8e3s4.o();
  };
  protoOf(CollectionSerializer).s8j = function (_this__u8e3s4) {
    return this.s8i((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.x8j_1 = keySerializer;
    this.y8j_1 = valueSerializer;
  }
  protoOf(MapLikeSerializer).z8j = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(size >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readAll.<anonymous>' call
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var progression = step(until(0, imul(size, 2)), 2);
    var inductionVariable = progression.ba_1;
    var last = progression.ca_1;
    var step_0 = progression.da_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.a8k(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  protoOf(MapLikeSerializer).v8i = function (decoder, builder, startIndex, size) {
    return this.z8j(decoder, (!(builder == null) ? isInterface(builder, MutableMap) : false) ? builder : THROW_CCE(), startIndex, size);
  };
  protoOf(MapLikeSerializer).a8k = function (decoder, index, builder, checkIndex) {
    var key = decoder.u8f(this.i8c(), index, this.x8j_1);
    var tmp;
    if (checkIndex) {
      // Inline function 'kotlin.also' call
      var this_0 = decoder.y8f(this.i8c());
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readElement.<anonymous>' call
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this_0 === (index + 1 | 0))) {
        // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readElement.<anonymous>.<anonymous>' call
        var message = 'Value must follow key in a map, index for key: ' + index + ', returned index for value: ' + this_0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      tmp = this_0;
    } else {
      tmp = index + 1 | 0;
    }
    var vIndex = tmp;
    var tmp_0;
    var tmp_1;
    if (builder.u2(key)) {
      var tmp_2 = this.y8j_1.i8c().s8d();
      tmp_1 = !(tmp_2 instanceof PrimitiveKind);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = decoder.t8f(this.i8c(), vIndex, this.y8j_1, getValue(builder, key));
    } else {
      tmp_0 = decoder.u8f(this.i8c(), vIndex, this.y8j_1);
    }
    var value = tmp_0;
    // Inline function 'kotlin.collections.set' call
    builder.n2(key, value);
  };
  protoOf(MapLikeSerializer).w8i = function (decoder, index, builder, checkIndex) {
    return this.a8k(decoder, index, (!(builder == null) ? isInterface(builder, MutableMap) : false) ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(MapLikeSerializer).u8i = function (encoder, value) {
    var size = this.q8j(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.i8c();
    var composite = encoder.c8h(descriptor, size);
    // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.serialize.<anonymous>' call
    var iterator = this.s8j(value);
    var index = 0;
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = iterator;
    while (tmp0_iterator.d1()) {
      var element = tmp0_iterator.f1();
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.serialize.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var k = element.p2();
      // Inline function 'kotlin.collections.component2' call
      var v = element.q2();
      var tmp = this.i8c();
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      composite.x8g(tmp, tmp0, this.x8j_1, k);
      var tmp_0 = this.i8c();
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      composite.x8g(tmp_0, tmp1, this.y8j_1, v);
    }
    composite.i8f(descriptor);
  };
  protoOf(MapLikeSerializer).j8c = function (encoder, value) {
    return this.u8i(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.t8i_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).u8i = function (encoder, value) {
    var size = this.q8j(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.i8c();
    var composite = encoder.c8h(descriptor, size);
    // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.serialize.<anonymous>' call
    var iterator = this.s8j(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.x8g(this.i8c(), index, this.t8i_1, iterator.f1());
      }
       while (inductionVariable < size);
    composite.i8f(descriptor);
  };
  protoOf(CollectionLikeSerializer).j8c = function (encoder, value) {
    return this.u8i(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(CollectionLikeSerializer).v8i = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(size >= 0)) {
      // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.readAll.<anonymous>' call
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.w8i(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).w8i = function (decoder, index, builder, checkIndex) {
    this.p8i(builder, index, decoder.u8f(this.i8c(), index, this.t8i_1));
  };
  function readSize($this, decoder, builder) {
    var size = decoder.z8f($this.i8c());
    $this.n8i(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).y8i = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.l8i(previous);
    var builder = tmp1_elvis_lhs == null ? this.j1m() : tmp1_elvis_lhs;
    var startIndex = this.h8i(builder);
    var compositeDecoder = decoder.h8f(this.i8c());
    if (compositeDecoder.x8f()) {
      this.v8i(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.y8f(this.i8c());
        if (index === -1)
          break $l$loop;
        this.x8i(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.i8f(this.i8c());
    return this.j8i(builder);
  };
  protoOf(AbstractCollectionSerializer).k8c = function (decoder) {
    return this.y8i(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).x8i = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.w8i(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.w8i.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.s8k_1 = new PrimitiveArrayDescriptor(primitiveSerializer.i8c());
  }
  protoOf(PrimitiveArraySerializer).i8c = function () {
    return this.s8k_1;
  };
  protoOf(PrimitiveArraySerializer).t8k = function (_this__u8e3s4) {
    return _this__u8e3s4.t4h();
  };
  protoOf(PrimitiveArraySerializer).h8i = function (_this__u8e3s4) {
    return this.t8k(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).u8k = function (_this__u8e3s4) {
    return _this__u8e3s4.e3();
  };
  protoOf(PrimitiveArraySerializer).j8i = function (_this__u8e3s4) {
    return this.u8k(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).v8k = function (_this__u8e3s4, size) {
    return _this__u8e3s4.f3(size);
  };
  protoOf(PrimitiveArraySerializer).n8i = function (_this__u8e3s4, size) {
    return this.v8k(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(PrimitiveArraySerializer).w8k = function (_this__u8e3s4) {
    var message = 'This method lead to boxing and must not be used, use writeContents instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).s8j = function (_this__u8e3s4) {
    return this.w8k((_this__u8e3s4 == null ? true : !(_this__u8e3s4 == null)) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).x8k = function (_this__u8e3s4, index, element) {
    var message = 'This method lead to boxing and must not be used, use Builder.append instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).p8i = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE();
    return this.x8k(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).j1m = function () {
    return this.l8i(this.y8k());
  };
  protoOf(PrimitiveArraySerializer).b8l = function (encoder, value) {
    var size = this.q8j(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.s8k_1;
    var composite = encoder.c8h(descriptor, size);
    // Inline function 'kotlinx.serialization.internal.PrimitiveArraySerializer.serialize.<anonymous>' call
    this.a8l(composite, value, size);
    composite.i8f(descriptor);
  };
  protoOf(PrimitiveArraySerializer).j8c = function (encoder, value) {
    return this.b8l(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).u8i = function (encoder, value) {
    return this.b8l(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).k8c = function (decoder) {
    return this.y8i(decoder, null);
  };
  function PrimitiveArrayBuilder() {
  }
  protoOf(PrimitiveArrayBuilder).c8l = function (requiredCapacity, $super) {
    requiredCapacity = requiredCapacity === VOID ? this.t4h() + 1 | 0 : requiredCapacity;
    var tmp;
    if ($super === VOID) {
      this.f3(requiredCapacity);
      tmp = Unit_instance;
    } else {
      tmp = $super.f3.call(this, requiredCapacity);
    }
    return tmp;
  };
  function Companion_0() {
    Companion_instance_1 = this;
    this.d8l_1 = longArray(0);
  }
  var Companion_instance_1;
  function Companion_getInstance_7() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function prepareHighMarksArray($this, elementsCount) {
    var slotsCount = (elementsCount - 1 | 0) >>> 6 | 0;
    Companion_getInstance_0();
    var elementsInLastSlot = elementsCount & (64 - 1 | 0);
    var highMarks = longArray(slotsCount);
    if (!(elementsInLastSlot === 0)) {
      highMarks[get_lastIndex(highMarks)] = (new Long(-1, -1)).lb(elementsCount);
    }
    return highMarks;
  }
  function markHigh($this, index) {
    var slot = (index >>> 6 | 0) - 1 | 0;
    Companion_getInstance_0();
    var offsetInSlot = index & (64 - 1 | 0);
    $this.h8l_1[slot] = $this.h8l_1[slot].pb((new Long(1, 0)).lb(offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.h8l_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = slot + 1 | 0;
        Companion_getInstance_0();
        var slotOffset = imul(tmp, 64);
        var slotMarks = $this.h8l_1[slot];
        while (!slotMarks.equals(new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(slotMarks.kb());
          slotMarks = slotMarks.pb((new Long(1, 0)).lb(indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.f8l_1($this.e8l_1, index)) {
            $this.h8l_1[slot] = slotMarks;
            return index;
          }
        }
        $this.h8l_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance_7();
    this.e8l_1 = descriptor;
    this.f8l_1 = readIfAbsent;
    var elementsCount = this.e8l_1.q8d();
    Companion_getInstance_0();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      Companion_getInstance_0();
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = (new Long(-1, -1)).lb(elementsCount);
      }
      tmp.g8l_1 = tmp_0;
      this.h8l_1 = Companion_getInstance_7().d8l_1;
    } else {
      this.g8l_1 = new Long(0, 0);
      this.h8l_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  protoOf(ElementMarker).i8l = function (index) {
    Companion_getInstance_0();
    if (index < 64) {
      this.g8l_1 = this.g8l_1.pb((new Long(1, 0)).lb(index));
    } else {
      markHigh(this, index);
    }
  };
  protoOf(ElementMarker).j8l = function () {
    var elementsCount = this.e8l_1.q8d();
    while (!this.g8l_1.equals(new Long(-1, -1))) {
      var index = countTrailingZeroBits(this.g8l_1.kb());
      this.g8l_1 = this.g8l_1.pb((new Long(1, 0)).lb(index));
      if (this.f8l_1(this.e8l_1, index)) {
        return index;
      }
    }
    Companion_getInstance_0();
    if (elementsCount > 64) {
      return nextUnmarkedHighIndex(this);
    }
    return -1;
  };
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$1(primitiveSerializer));
  }
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this.w8l_1 = true;
  }
  protoOf(InlineClassDescriptor).r8d = function () {
    return this.w8l_1;
  };
  protoOf(InlineClassDescriptor).hashCode = function () {
    return imul(protoOf(PluginGeneratedSerialDescriptor).hashCode.call(this), 31);
  };
  protoOf(InlineClassDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof InlineClassDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.o8d() === other.o8d())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.InlineClassDescriptor.equals.<anonymous>' call
      if (!(other.w8l_1 ? contentEquals(this.j8m(), other.j8m()) : false)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.q8d() === other.q8d())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.q8d();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.u8d(index).o8d() === other.u8d(index).o8d())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.u8d(index).s8d(), other.u8d(index).s8d())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  function InlinePrimitiveDescriptor$1($primitiveSerializer) {
    this.l8m_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).m8m = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.l8m_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).i8c = function () {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).j8c = function (encoder, value) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).k8c = function (decoder) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function NoOpEncoder() {
    NoOpEncoder_instance = this;
    AbstractEncoder.call(this);
    this.o8m_1 = EmptySerializersModule_0();
  }
  protoOf(NoOpEncoder).w8f = function () {
    return this.o8m_1;
  };
  protoOf(NoOpEncoder).b8g = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).c8g = function () {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).d8g = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).e8g = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).f8g = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).g8g = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).h8g = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).i8g = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).j8g = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).k8g = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).l8g = function (value) {
    return Unit_instance;
  };
  var NoOpEncoder_instance;
  function NoOpEncoder_getInstance() {
    if (NoOpEncoder_instance == null)
      new NoOpEncoder();
    return NoOpEncoder_instance;
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Descriptor for type `kotlin.Nothing` does not have elements');
  }
  function NothingSerialDescriptor() {
    NothingSerialDescriptor_instance = this;
    this.p8m_1 = OBJECT_getInstance();
    this.q8m_1 = 'kotlin.Nothing';
  }
  protoOf(NothingSerialDescriptor).s8d = function () {
    return this.p8m_1;
  };
  protoOf(NothingSerialDescriptor).o8d = function () {
    return this.q8m_1;
  };
  protoOf(NothingSerialDescriptor).q8d = function () {
    return 0;
  };
  protoOf(NothingSerialDescriptor).w8d = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).v8d = function (name) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).x8d = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).u8d = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).t8d = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).toString = function () {
    return 'NothingSerialDescriptor';
  };
  protoOf(NothingSerialDescriptor).equals = function (other) {
    return this === other;
  };
  protoOf(NothingSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.q8m_1) + imul(31, this.p8m_1.hashCode()) | 0;
  };
  var NothingSerialDescriptor_instance;
  function NothingSerialDescriptor_getInstance() {
    if (NothingSerialDescriptor_instance == null)
      new NothingSerialDescriptor();
    return NothingSerialDescriptor_instance;
  }
  function NullableSerializer(serializer) {
    this.r8m_1 = serializer;
    this.s8m_1 = new SerialDescriptorForNullable(this.r8m_1.i8c());
  }
  protoOf(NullableSerializer).i8c = function () {
    return this.s8m_1;
  };
  protoOf(NullableSerializer).t8m = function (encoder, value) {
    if (!(value == null)) {
      encoder.b8h();
      encoder.y8g(this.r8m_1, value);
    } else {
      encoder.c8g();
    }
  };
  protoOf(NullableSerializer).j8c = function (encoder, value) {
    return this.t8m(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(NullableSerializer).k8c = function (decoder) {
    return decoder.t8e() ? decoder.g8f(this.r8m_1) : decoder.u8e();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.r8m_1, other.r8m_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.r8m_1);
  };
  function SerialDescriptorForNullable(original) {
    this.y8d_1 = original;
    this.z8d_1 = this.y8d_1.o8d() + '?';
    this.a8e_1 = cachedSerialNames(this.y8d_1);
  }
  protoOf(SerialDescriptorForNullable).p8d = function () {
    return this.y8d_1.p8d();
  };
  protoOf(SerialDescriptorForNullable).q8d = function () {
    return this.y8d_1.q8d();
  };
  protoOf(SerialDescriptorForNullable).r8d = function () {
    return this.y8d_1.r8d();
  };
  protoOf(SerialDescriptorForNullable).s8d = function () {
    return this.y8d_1.s8d();
  };
  protoOf(SerialDescriptorForNullable).t8d = function (index) {
    return this.y8d_1.t8d(index);
  };
  protoOf(SerialDescriptorForNullable).u8d = function (index) {
    return this.y8d_1.u8d(index);
  };
  protoOf(SerialDescriptorForNullable).v8d = function (name) {
    return this.y8d_1.v8d(name);
  };
  protoOf(SerialDescriptorForNullable).w8d = function (index) {
    return this.y8d_1.w8d(index);
  };
  protoOf(SerialDescriptorForNullable).x8d = function (index) {
    return this.y8d_1.x8d(index);
  };
  protoOf(SerialDescriptorForNullable).o8d = function () {
    return this.z8d_1;
  };
  protoOf(SerialDescriptorForNullable).r8e = function () {
    return this.a8e_1;
  };
  protoOf(SerialDescriptorForNullable).k8d = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.y8d_1, other.y8d_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return '' + this.y8d_1 + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.y8d_1), 31);
  };
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.n8c_1 = this$0.v8m_1;
      return Unit_instance;
    };
  }
  function ObjectSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = OBJECT_getInstance();
      return buildSerialDescriptor($serialName, tmp, [], ObjectSerializer$descriptor$delegate$lambda$lambda(this$0));
    };
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.u8m_1 = objectInstance;
    this.v8m_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.w8m_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  protoOf(ObjectSerializer).i8c = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.w8m_1;
    descriptor$factory_0();
    return this_0.q2();
  };
  protoOf(ObjectSerializer).y8c = function (encoder, value) {
    encoder.h8f(this.i8c()).i8f(this.i8c());
  };
  protoOf(ObjectSerializer).j8c = function (encoder, value) {
    return this.y8c(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(ObjectSerializer).k8c = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.i8c();
    var composite = decoder.h8f(descriptor);
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.serialization.internal.ObjectSerializer.deserialize.<anonymous>' call
      if (composite.x8f()) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      }
      var index = composite.y8f(this.i8c());
      if (index === -1) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      } else {
        throw SerializationException_init_$Create$_0('Unexpected index ' + index);
      }
    }
    var result = tmp$ret$0;
    composite.i8f(descriptor);
    return this.u8m_1;
  };
  function descriptor$factory_0() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.i8c();
    }, null);
  }
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    _init_properties_Platform_common_kt__3qzecs();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function cachedSerialNames(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.r8e();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.q8d());
    var inductionVariable = 0;
    var last = _this__u8e3s4.q8d();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.w8d(i);
        result.a1(element);
      }
       while (inductionVariable < last);
    return result;
  }
  function kclass(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var t = _this__u8e3s4.p7();
    var tmp;
    if (!(t == null) ? isInterface(t, KClass) : false) {
      tmp = t;
    } else {
      if (!(t == null) ? isInterface(t, KTypeParameter) : false) {
        var message = 'Captured type parameter ' + t + ' from generic non-reified function. ' + ('Such functionality cannot be supported as ' + t + ' is erased, either specify serializer explicitly or make ') + ('calling function inline with reified ' + t);
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        var message_0 = 'Only KClass supported as classifier, got ' + t;
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
    }
    var tmp_0 = tmp;
    return isInterface(tmp_0, KClass) ? tmp_0 : THROW_CCE();
  }
  function notRegisteredMessage(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var tmp0_elvis_lhs = _this__u8e3s4.b7();
    return notRegisteredMessage_0(tmp0_elvis_lhs == null ? '<local class name not available>' : tmp0_elvis_lhs);
  }
  function notRegisteredMessage_0(className) {
    _init_properties_Platform_common_kt__3qzecs();
    return "Serializer for class '" + className + "' is not found.\n" + "Please ensure that class is marked as '@Serializable' and that the serialization compiler plugin is applied.\n";
  }
  function compactArray(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    // Inline function 'kotlin.takeUnless' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'kotlinx.serialization.internal.compactArray.<anonymous>' call
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(_this__u8e3s4 == null ? true : _this__u8e3s4.u())) {
      tmp = _this__u8e3s4;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp_0 = copyToArray(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? get_EMPTY_DESCRIPTOR_ARRAY() : tmp1_elvis_lhs;
  }
  function serializerNotRegistered(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    throw SerializationException_init_$Create$_0(notRegisteredMessage(_this__u8e3s4));
  }
  var properties_initialized_Platform_common_kt_i7q4ty;
  function _init_properties_Platform_common_kt__3qzecs() {
    if (!properties_initialized_Platform_common_kt_i7q4ty) {
      properties_initialized_Platform_common_kt_i7q4ty = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_DESCRIPTOR_ARRAY = [];
    }
  }
  function throwMissingFieldException(seen, goldenMask, descriptor) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var missingFields = ArrayList_init_$Create$_0();
    var missingFieldsBits = goldenMask & ~seen;
    var inductionVariable = 0;
    if (inductionVariable < 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!((missingFieldsBits & 1) === 0)) {
          // Inline function 'kotlin.collections.plusAssign' call
          var element = descriptor.w8d(i);
          missingFields.a1(element);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.o8d());
  }
  function _get_childSerializers__7vnyfa($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.g8m_1;
    childSerializers$factory();
    return this_0.q2();
  }
  function _get__hashCode__tgwhef_0($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.i8m_1;
    _hashCode$factory_0();
    return this_0.q2();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.b8m_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.b8m_1[i];
        indices.n2(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.y8l_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m8m();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.y8l_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n8m();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$(tmp1_safe_receiver.length);
        var inductionVariable = 0;
        var last = tmp1_safe_receiver.length;
        while (inductionVariable < last) {
          var item = tmp1_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.typeParameterDescriptors$delegate.<anonymous>.<anonymous>' call
          var tmp$ret$0 = item.i8c();
          destination.a1(tmp$ret$0);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.j8m());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.w8d(i) + ': ' + this$0.u8d(i).o8d();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.x8l_1 = serialName;
    this.y8l_1 = generatedSerializer;
    this.z8l_1 = elementsCount;
    this.a8m_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.z8l_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.b8m_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.z8l_1;
    tmp_3.c8m_1 = fillArrayVal(Array(size), null);
    this.d8m_1 = null;
    this.e8m_1 = booleanArray(this.z8l_1);
    this.f8m_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.g8m_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.h8m_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.i8m_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).o8d = function () {
    return this.x8l_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).q8d = function () {
    return this.z8l_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).s8d = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).p8d = function () {
    var tmp0_elvis_lhs = this.d8m_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).r8e = function () {
    return this.f8m_1.k2();
  };
  protoOf(PluginGeneratedSerialDescriptor).j8m = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.h8m_1;
    typeParameterDescriptors$factory();
    return this_0.q2();
  };
  protoOf(PluginGeneratedSerialDescriptor).k8m = function (name, isOptional) {
    this.a8m_1 = this.a8m_1 + 1 | 0;
    this.b8m_1[this.a8m_1] = name;
    this.e8m_1[this.a8m_1] = isOptional;
    this.c8m_1[this.a8m_1] = null;
    if (this.a8m_1 === (this.z8l_1 - 1 | 0)) {
      this.f8m_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).u8d = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).i8c();
  };
  protoOf(PluginGeneratedSerialDescriptor).x8d = function (index) {
    return getChecked_0(this.e8m_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).t8d = function (index) {
    var tmp0_elvis_lhs = getChecked(this.c8m_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).w8d = function (index) {
    return getChecked(this.b8m_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).v8d = function (name) {
    var tmp0_elvis_lhs = this.f8m_1.x2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(PluginGeneratedSerialDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof PluginGeneratedSerialDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.o8d() === other.o8d())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.equals.<anonymous>' call
      if (!contentEquals(this.j8m(), other.j8m())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.q8d() === other.q8d())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.q8d();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.u8d(index).o8d() === other.u8d(index).o8d())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.u8d(index).s8d(), other.u8d(index).s8d())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(PluginGeneratedSerialDescriptor).hashCode = function () {
    return _get__hashCode__tgwhef_0(this);
  };
  protoOf(PluginGeneratedSerialDescriptor).toString = function () {
    var tmp = until(0, this.z8l_1);
    var tmp_0 = this.o8d() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, PluginGeneratedSerialDescriptor$toString$lambda(this));
  };
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.o8d());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = elementDescriptors.o();
    while (tmp0_iterator.d1()) {
      var element = tmp0_iterator.f1();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlin.hashCode' call
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      var tmp0_safe_receiver = element.o8d();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var namesHash = accumulator;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator_0 = 1;
    var tmp0_iterator_0 = elementDescriptors.o();
    while (tmp0_iterator_0.d1()) {
      var element_0 = tmp0_iterator_0.f1();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var hash_0 = accumulator_0;
      var tmp_0 = imul(31, hash_0);
      // Inline function 'kotlin.hashCode' call
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      var tmp0_safe_receiver_0 = element_0.s8d();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function childSerializers$factory() {
    return getPropertyCallableRef('childSerializers', 1, KProperty1, function (receiver) {
      return _get_childSerializers__7vnyfa(receiver);
    }, null);
  }
  function typeParameterDescriptors$factory() {
    return getPropertyCallableRef('typeParameterDescriptors', 1, KProperty1, function (receiver) {
      return receiver.j8m();
    }, null);
  }
  function _hashCode$factory_0() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef_0(receiver);
    }, null);
  }
  function get_EMPTY_SERIALIZER_ARRAY() {
    _init_properties_PluginHelperInterfaces_kt__xgvzfp();
    return EMPTY_SERIALIZER_ARRAY;
  }
  var EMPTY_SERIALIZER_ARRAY;
  function SerializerFactory() {
  }
  function GeneratedSerializer() {
  }
  var properties_initialized_PluginHelperInterfaces_kt_ap8in1;
  function _init_properties_PluginHelperInterfaces_kt__xgvzfp() {
    if (!properties_initialized_PluginHelperInterfaces_kt_ap8in1) {
      properties_initialized_PluginHelperInterfaces_kt_ap8in1 = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_SERIALIZER_ARRAY = [];
    }
  }
  function CharArraySerializer_0() {
    CharArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_2(Companion_getInstance_1()));
  }
  protoOf(CharArraySerializer_0).a8n = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(CharArraySerializer_0).q8j = function (_this__u8e3s4) {
    return this.a8n((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).b8n = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  protoOf(CharArraySerializer_0).l8i = function (_this__u8e3s4) {
    return this.b8n((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).y8k = function () {
    return charArray(0);
  };
  protoOf(CharArraySerializer_0).c8n = function (decoder, index, builder, checkIndex) {
    builder.f8n(decoder.q8f(this.s8k_1, index));
  };
  protoOf(CharArraySerializer_0).w8i = function (decoder, index, builder, checkIndex) {
    return this.c8n(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).z8k = function (decoder, index, builder, checkIndex) {
    return this.c8n(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).g8n = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.u8g(this.s8k_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(CharArraySerializer_0).a8l = function (encoder, content, size) {
    return this.g8n(encoder, (!(content == null) ? isCharArray(content) : false) ? content : THROW_CCE(), size);
  };
  var CharArraySerializer_instance;
  function CharArraySerializer_getInstance() {
    if (CharArraySerializer_instance == null)
      new CharArraySerializer_0();
    return CharArraySerializer_instance;
  }
  function DoubleArraySerializer_0() {
    DoubleArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_3(DoubleCompanionObject_instance));
  }
  protoOf(DoubleArraySerializer_0).j8n = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(DoubleArraySerializer_0).q8j = function (_this__u8e3s4) {
    return this.j8n((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).k8n = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  protoOf(DoubleArraySerializer_0).l8i = function (_this__u8e3s4) {
    return this.k8n((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).y8k = function () {
    return new Float64Array(0);
  };
  protoOf(DoubleArraySerializer_0).l8n = function (decoder, index, builder, checkIndex) {
    builder.o8n(decoder.p8f(this.s8k_1, index));
  };
  protoOf(DoubleArraySerializer_0).w8i = function (decoder, index, builder, checkIndex) {
    return this.l8n(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).z8k = function (decoder, index, builder, checkIndex) {
    return this.l8n(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).p8n = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.t8g(this.s8k_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(DoubleArraySerializer_0).a8l = function (encoder, content, size) {
    return this.p8n(encoder, (!(content == null) ? isDoubleArray(content) : false) ? content : THROW_CCE(), size);
  };
  var DoubleArraySerializer_instance;
  function DoubleArraySerializer_getInstance() {
    if (DoubleArraySerializer_instance == null)
      new DoubleArraySerializer_0();
    return DoubleArraySerializer_instance;
  }
  function FloatArraySerializer_0() {
    FloatArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_4(FloatCompanionObject_instance));
  }
  protoOf(FloatArraySerializer_0).s8n = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(FloatArraySerializer_0).q8j = function (_this__u8e3s4) {
    return this.s8n((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).t8n = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  protoOf(FloatArraySerializer_0).l8i = function (_this__u8e3s4) {
    return this.t8n((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).y8k = function () {
    return new Float32Array(0);
  };
  protoOf(FloatArraySerializer_0).u8n = function (decoder, index, builder, checkIndex) {
    builder.x8n(decoder.o8f(this.s8k_1, index));
  };
  protoOf(FloatArraySerializer_0).w8i = function (decoder, index, builder, checkIndex) {
    return this.u8n(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).z8k = function (decoder, index, builder, checkIndex) {
    return this.u8n(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).y8n = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.s8g(this.s8k_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(FloatArraySerializer_0).a8l = function (encoder, content, size) {
    return this.y8n(encoder, (!(content == null) ? isFloatArray(content) : false) ? content : THROW_CCE(), size);
  };
  var FloatArraySerializer_instance;
  function FloatArraySerializer_getInstance() {
    if (FloatArraySerializer_instance == null)
      new FloatArraySerializer_0();
    return FloatArraySerializer_instance;
  }
  function LongArraySerializer_0() {
    LongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_5(Companion_getInstance_0()));
  }
  protoOf(LongArraySerializer_0).b8o = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(LongArraySerializer_0).q8j = function (_this__u8e3s4) {
    return this.b8o((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).c8o = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  protoOf(LongArraySerializer_0).l8i = function (_this__u8e3s4) {
    return this.c8o((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).y8k = function () {
    return longArray(0);
  };
  protoOf(LongArraySerializer_0).d8o = function (decoder, index, builder, checkIndex) {
    builder.g8o(decoder.n8f(this.s8k_1, index));
  };
  protoOf(LongArraySerializer_0).w8i = function (decoder, index, builder, checkIndex) {
    return this.d8o(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).z8k = function (decoder, index, builder, checkIndex) {
    return this.d8o(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).h8o = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.r8g(this.s8k_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(LongArraySerializer_0).a8l = function (encoder, content, size) {
    return this.h8o(encoder, (!(content == null) ? isLongArray(content) : false) ? content : THROW_CCE(), size);
  };
  var LongArraySerializer_instance;
  function LongArraySerializer_getInstance() {
    if (LongArraySerializer_instance == null)
      new LongArraySerializer_0();
    return LongArraySerializer_instance;
  }
  function ULongArraySerializer_0() {
    ULongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_6(Companion_getInstance_2()));
  }
  protoOf(ULongArraySerializer_0).k8o = function (_this__u8e3s4) {
    return _ULongArray___get_size__impl__ju6dtr(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).q8j = function (_this__u8e3s4) {
    return this.k8o(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.dk_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).l8o = function (_this__u8e3s4) {
    return new ULongArrayBuilder(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).l8i = function (_this__u8e3s4) {
    return this.l8o(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.dk_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).m8o = function () {
    return _ULongArray___init__impl__twm1l3(0);
  };
  protoOf(ULongArraySerializer_0).y8k = function () {
    return new ULongArray(this.m8o());
  };
  protoOf(ULongArraySerializer_0).n8o = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.s8f(this.s8k_1, index).z8e();
    var tmp$ret$0 = _ULong___init__impl__c78o9k(this_0);
    builder.q8o(tmp$ret$0);
  };
  protoOf(ULongArraySerializer_0).w8i = function (decoder, index, builder, checkIndex) {
    return this.n8o(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).z8k = function (decoder, index, builder, checkIndex) {
    return this.n8o(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).r8o = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.w8g(this.s8k_1, i);
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = ULongArray__get_impl_pr71q9(content, i);
        var tmp$ret$0 = _ULong___get_data__impl__fggpzb(this_0);
        tmp.h8g(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(ULongArraySerializer_0).a8l = function (encoder, content, size) {
    return this.r8o(encoder, content instanceof ULongArray ? content.dk_1 : THROW_CCE(), size);
  };
  var ULongArraySerializer_instance;
  function ULongArraySerializer_getInstance() {
    if (ULongArraySerializer_instance == null)
      new ULongArraySerializer_0();
    return ULongArraySerializer_instance;
  }
  function IntArraySerializer_0() {
    IntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_7(IntCompanionObject_instance));
  }
  protoOf(IntArraySerializer_0).u8o = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(IntArraySerializer_0).q8j = function (_this__u8e3s4) {
    return this.u8o((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).v8o = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  protoOf(IntArraySerializer_0).l8i = function (_this__u8e3s4) {
    return this.v8o((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).y8k = function () {
    return new Int32Array(0);
  };
  protoOf(IntArraySerializer_0).w8o = function (decoder, index, builder, checkIndex) {
    builder.z8o(decoder.m8f(this.s8k_1, index));
  };
  protoOf(IntArraySerializer_0).w8i = function (decoder, index, builder, checkIndex) {
    return this.w8o(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).z8k = function (decoder, index, builder, checkIndex) {
    return this.w8o(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).a8p = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.q8g(this.s8k_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(IntArraySerializer_0).a8l = function (encoder, content, size) {
    return this.a8p(encoder, (!(content == null) ? isIntArray(content) : false) ? content : THROW_CCE(), size);
  };
  var IntArraySerializer_instance;
  function IntArraySerializer_getInstance() {
    if (IntArraySerializer_instance == null)
      new IntArraySerializer_0();
    return IntArraySerializer_instance;
  }
  function UIntArraySerializer_0() {
    UIntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_8(Companion_getInstance_3()));
  }
  protoOf(UIntArraySerializer_0).d8p = function (_this__u8e3s4) {
    return _UIntArray___get_size__impl__r6l8ci(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).q8j = function (_this__u8e3s4) {
    return this.d8p(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.rj_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).e8p = function (_this__u8e3s4) {
    return new UIntArrayBuilder(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).l8i = function (_this__u8e3s4) {
    return this.e8p(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.rj_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).f8p = function () {
    return _UIntArray___init__impl__ghjpc6(0);
  };
  protoOf(UIntArraySerializer_0).y8k = function () {
    return new UIntArray(this.f8p());
  };
  protoOf(UIntArraySerializer_0).g8p = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.s8f(this.s8k_1, index).y8e();
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(this_0);
    builder.j8p(tmp$ret$0);
  };
  protoOf(UIntArraySerializer_0).w8i = function (decoder, index, builder, checkIndex) {
    return this.g8p(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).z8k = function (decoder, index, builder, checkIndex) {
    return this.g8p(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).k8p = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.w8g(this.s8k_1, i);
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = UIntArray__get_impl_gp5kza(content, i);
        var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(this_0);
        tmp.g8g(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UIntArraySerializer_0).a8l = function (encoder, content, size) {
    return this.k8p(encoder, content instanceof UIntArray ? content.rj_1 : THROW_CCE(), size);
  };
  var UIntArraySerializer_instance;
  function UIntArraySerializer_getInstance() {
    if (UIntArraySerializer_instance == null)
      new UIntArraySerializer_0();
    return UIntArraySerializer_instance;
  }
  function ShortArraySerializer_0() {
    ShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_9(ShortCompanionObject_instance));
  }
  protoOf(ShortArraySerializer_0).n8p = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ShortArraySerializer_0).q8j = function (_this__u8e3s4) {
    return this.n8p((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).o8p = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(ShortArraySerializer_0).l8i = function (_this__u8e3s4) {
    return this.o8p((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).y8k = function () {
    return new Int16Array(0);
  };
  protoOf(ShortArraySerializer_0).p8p = function (decoder, index, builder, checkIndex) {
    builder.s8p(decoder.l8f(this.s8k_1, index));
  };
  protoOf(ShortArraySerializer_0).w8i = function (decoder, index, builder, checkIndex) {
    return this.p8p(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).z8k = function (decoder, index, builder, checkIndex) {
    return this.p8p(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).t8p = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.p8g(this.s8k_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ShortArraySerializer_0).a8l = function (encoder, content, size) {
    return this.t8p(encoder, (!(content == null) ? isShortArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ShortArraySerializer_instance;
  function ShortArraySerializer_getInstance() {
    if (ShortArraySerializer_instance == null)
      new ShortArraySerializer_0();
    return ShortArraySerializer_instance;
  }
  function UShortArraySerializer_0() {
    UShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_10(Companion_getInstance_4()));
  }
  protoOf(UShortArraySerializer_0).w8p = function (_this__u8e3s4) {
    return _UShortArray___get_size__impl__jqto1b(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).q8j = function (_this__u8e3s4) {
    return this.w8p(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.pk_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).x8p = function (_this__u8e3s4) {
    return new UShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).l8i = function (_this__u8e3s4) {
    return this.x8p(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.pk_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).y8p = function () {
    return _UShortArray___init__impl__9b26ef(0);
  };
  protoOf(UShortArraySerializer_0).y8k = function () {
    return new UShortArray(this.y8p());
  };
  protoOf(UShortArraySerializer_0).z8p = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.s8f(this.s8k_1, index).x8e();
    var tmp$ret$0 = _UShort___init__impl__jigrne(this_0);
    builder.c8q(tmp$ret$0);
  };
  protoOf(UShortArraySerializer_0).w8i = function (decoder, index, builder, checkIndex) {
    return this.z8p(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).z8k = function (decoder, index, builder, checkIndex) {
    return this.z8p(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).d8q = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.w8g(this.s8k_1, i);
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = UShortArray__get_impl_fnbhmx(content, i);
        var tmp$ret$0 = _UShort___get_data__impl__g0245(this_0);
        tmp.f8g(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UShortArraySerializer_0).a8l = function (encoder, content, size) {
    return this.d8q(encoder, content instanceof UShortArray ? content.pk_1 : THROW_CCE(), size);
  };
  var UShortArraySerializer_instance;
  function UShortArraySerializer_getInstance() {
    if (UShortArraySerializer_instance == null)
      new UShortArraySerializer_0();
    return UShortArraySerializer_instance;
  }
  function ByteArraySerializer_0() {
    ByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_11(ByteCompanionObject_instance));
  }
  protoOf(ByteArraySerializer_0).g8q = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ByteArraySerializer_0).q8j = function (_this__u8e3s4) {
    return this.g8q((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).h8q = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(ByteArraySerializer_0).l8i = function (_this__u8e3s4) {
    return this.h8q((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).y8k = function () {
    return new Int8Array(0);
  };
  protoOf(ByteArraySerializer_0).i8q = function (decoder, index, builder, checkIndex) {
    builder.l8q(decoder.k8f(this.s8k_1, index));
  };
  protoOf(ByteArraySerializer_0).w8i = function (decoder, index, builder, checkIndex) {
    return this.i8q(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).z8k = function (decoder, index, builder, checkIndex) {
    return this.i8q(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).m8q = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.o8g(this.s8k_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ByteArraySerializer_0).a8l = function (encoder, content, size) {
    return this.m8q(encoder, (!(content == null) ? isByteArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function UByteArraySerializer_0() {
    UByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_12(Companion_getInstance_5()));
  }
  protoOf(UByteArraySerializer_0).p8q = function (_this__u8e3s4) {
    return _UByteArray___get_size__impl__h6pkdv(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).q8j = function (_this__u8e3s4) {
    return this.p8q(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.fj_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).q8q = function (_this__u8e3s4) {
    return new UByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).l8i = function (_this__u8e3s4) {
    return this.q8q(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.fj_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).r8q = function () {
    return _UByteArray___init__impl__ip4y9n(0);
  };
  protoOf(UByteArraySerializer_0).y8k = function () {
    return new UByteArray(this.r8q());
  };
  protoOf(UByteArraySerializer_0).s8q = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.s8f(this.s8k_1, index).w8e();
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(this_0);
    builder.v8q(tmp$ret$0);
  };
  protoOf(UByteArraySerializer_0).w8i = function (decoder, index, builder, checkIndex) {
    return this.s8q(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).z8k = function (decoder, index, builder, checkIndex) {
    return this.s8q(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).w8q = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.w8g(this.s8k_1, i);
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = UByteArray__get_impl_t5f3hv(content, i);
        var tmp$ret$0 = _UByte___get_data__impl__jof9qr(this_0);
        tmp.e8g(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UByteArraySerializer_0).a8l = function (encoder, content, size) {
    return this.w8q(encoder, content instanceof UByteArray ? content.fj_1 : THROW_CCE(), size);
  };
  var UByteArraySerializer_instance;
  function UByteArraySerializer_getInstance() {
    if (UByteArraySerializer_instance == null)
      new UByteArraySerializer_0();
    return UByteArraySerializer_instance;
  }
  function BooleanArraySerializer_0() {
    BooleanArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_13(BooleanCompanionObject_instance));
  }
  protoOf(BooleanArraySerializer_0).z8q = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(BooleanArraySerializer_0).q8j = function (_this__u8e3s4) {
    return this.z8q((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).a8r = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  protoOf(BooleanArraySerializer_0).l8i = function (_this__u8e3s4) {
    return this.a8r((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).y8k = function () {
    return booleanArray(0);
  };
  protoOf(BooleanArraySerializer_0).b8r = function (decoder, index, builder, checkIndex) {
    builder.e8r(decoder.j8f(this.s8k_1, index));
  };
  protoOf(BooleanArraySerializer_0).w8i = function (decoder, index, builder, checkIndex) {
    return this.b8r(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).z8k = function (decoder, index, builder, checkIndex) {
    return this.b8r(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).f8r = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.n8g(this.s8k_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(BooleanArraySerializer_0).a8l = function (encoder, content, size) {
    return this.f8r(encoder, (!(content == null) ? isBooleanArray(content) : false) ? content : THROW_CCE(), size);
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.d8n_1 = bufferWithData;
    this.e8n_1 = bufferWithData.length;
    this.f3(10);
  }
  protoOf(CharArrayBuilder).t4h = function () {
    return this.e8n_1;
  };
  protoOf(CharArrayBuilder).f3 = function (requiredCapacity) {
    if (this.d8n_1.length < requiredCapacity)
      this.d8n_1 = copyOf(this.d8n_1, coerceAtLeast(requiredCapacity, imul(this.d8n_1.length, 2)));
  };
  protoOf(CharArrayBuilder).f8n = function (c) {
    this.c8l();
    var tmp = this.d8n_1;
    var tmp1 = this.e8n_1;
    this.e8n_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(CharArrayBuilder).e3 = function () {
    return copyOf(this.d8n_1, this.e8n_1);
  };
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.m8n_1 = bufferWithData;
    this.n8n_1 = bufferWithData.length;
    this.f3(10);
  }
  protoOf(DoubleArrayBuilder).t4h = function () {
    return this.n8n_1;
  };
  protoOf(DoubleArrayBuilder).f3 = function (requiredCapacity) {
    if (this.m8n_1.length < requiredCapacity)
      this.m8n_1 = copyOf_0(this.m8n_1, coerceAtLeast(requiredCapacity, imul(this.m8n_1.length, 2)));
  };
  protoOf(DoubleArrayBuilder).o8n = function (c) {
    this.c8l();
    var tmp = this.m8n_1;
    var tmp1 = this.n8n_1;
    this.n8n_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(DoubleArrayBuilder).e3 = function () {
    return copyOf_0(this.m8n_1, this.n8n_1);
  };
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.v8n_1 = bufferWithData;
    this.w8n_1 = bufferWithData.length;
    this.f3(10);
  }
  protoOf(FloatArrayBuilder).t4h = function () {
    return this.w8n_1;
  };
  protoOf(FloatArrayBuilder).f3 = function (requiredCapacity) {
    if (this.v8n_1.length < requiredCapacity)
      this.v8n_1 = copyOf_1(this.v8n_1, coerceAtLeast(requiredCapacity, imul(this.v8n_1.length, 2)));
  };
  protoOf(FloatArrayBuilder).x8n = function (c) {
    this.c8l();
    var tmp = this.v8n_1;
    var tmp1 = this.w8n_1;
    this.w8n_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(FloatArrayBuilder).e3 = function () {
    return copyOf_1(this.v8n_1, this.w8n_1);
  };
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.e8o_1 = bufferWithData;
    this.f8o_1 = bufferWithData.length;
    this.f3(10);
  }
  protoOf(LongArrayBuilder).t4h = function () {
    return this.f8o_1;
  };
  protoOf(LongArrayBuilder).f3 = function (requiredCapacity) {
    if (this.e8o_1.length < requiredCapacity)
      this.e8o_1 = copyOf_2(this.e8o_1, coerceAtLeast(requiredCapacity, imul(this.e8o_1.length, 2)));
  };
  protoOf(LongArrayBuilder).g8o = function (c) {
    this.c8l();
    var tmp = this.e8o_1;
    var tmp1 = this.f8o_1;
    this.f8o_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(LongArrayBuilder).e3 = function () {
    return copyOf_2(this.e8o_1, this.f8o_1);
  };
  function ULongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.o8o_1 = bufferWithData;
    this.p8o_1 = _ULongArray___get_size__impl__ju6dtr(bufferWithData);
    this.f3(10);
  }
  protoOf(ULongArrayBuilder).t4h = function () {
    return this.p8o_1;
  };
  protoOf(ULongArrayBuilder).f3 = function (requiredCapacity) {
    if (_ULongArray___get_size__impl__ju6dtr(this.o8o_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var this_0 = this.o8o_1;
      var newSize = coerceAtLeast(requiredCapacity, imul(_ULongArray___get_size__impl__ju6dtr(this.o8o_1), 2));
      tmp.o8o_1 = _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(this_0), newSize));
    }
  };
  protoOf(ULongArrayBuilder).q8o = function (c) {
    this.c8l();
    var tmp = this.o8o_1;
    var tmp1 = this.p8o_1;
    this.p8o_1 = tmp1 + 1 | 0;
    ULongArray__set_impl_z19mvh(tmp, tmp1, c);
  };
  protoOf(ULongArrayBuilder).g8r = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var this_0 = this.o8o_1;
    var newSize = this.p8o_1;
    return _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(this_0), newSize));
  };
  protoOf(ULongArrayBuilder).e3 = function () {
    return new ULongArray(this.g8r());
  };
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.x8o_1 = bufferWithData;
    this.y8o_1 = bufferWithData.length;
    this.f3(10);
  }
  protoOf(IntArrayBuilder).t4h = function () {
    return this.y8o_1;
  };
  protoOf(IntArrayBuilder).f3 = function (requiredCapacity) {
    if (this.x8o_1.length < requiredCapacity)
      this.x8o_1 = copyOf_3(this.x8o_1, coerceAtLeast(requiredCapacity, imul(this.x8o_1.length, 2)));
  };
  protoOf(IntArrayBuilder).z8o = function (c) {
    this.c8l();
    var tmp = this.x8o_1;
    var tmp1 = this.y8o_1;
    this.y8o_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(IntArrayBuilder).e3 = function () {
    return copyOf_3(this.x8o_1, this.y8o_1);
  };
  function UIntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.h8p_1 = bufferWithData;
    this.i8p_1 = _UIntArray___get_size__impl__r6l8ci(bufferWithData);
    this.f3(10);
  }
  protoOf(UIntArrayBuilder).t4h = function () {
    return this.i8p_1;
  };
  protoOf(UIntArrayBuilder).f3 = function (requiredCapacity) {
    if (_UIntArray___get_size__impl__r6l8ci(this.h8p_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var this_0 = this.h8p_1;
      var newSize = coerceAtLeast(requiredCapacity, imul(_UIntArray___get_size__impl__r6l8ci(this.h8p_1), 2));
      tmp.h8p_1 = _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(this_0), newSize));
    }
  };
  protoOf(UIntArrayBuilder).j8p = function (c) {
    this.c8l();
    var tmp = this.h8p_1;
    var tmp1 = this.i8p_1;
    this.i8p_1 = tmp1 + 1 | 0;
    UIntArray__set_impl_7f2zu2(tmp, tmp1, c);
  };
  protoOf(UIntArrayBuilder).h8r = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var this_0 = this.h8p_1;
    var newSize = this.i8p_1;
    return _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(this_0), newSize));
  };
  protoOf(UIntArrayBuilder).e3 = function () {
    return new UIntArray(this.h8r());
  };
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.q8p_1 = bufferWithData;
    this.r8p_1 = bufferWithData.length;
    this.f3(10);
  }
  protoOf(ShortArrayBuilder).t4h = function () {
    return this.r8p_1;
  };
  protoOf(ShortArrayBuilder).f3 = function (requiredCapacity) {
    if (this.q8p_1.length < requiredCapacity)
      this.q8p_1 = copyOf_4(this.q8p_1, coerceAtLeast(requiredCapacity, imul(this.q8p_1.length, 2)));
  };
  protoOf(ShortArrayBuilder).s8p = function (c) {
    this.c8l();
    var tmp = this.q8p_1;
    var tmp1 = this.r8p_1;
    this.r8p_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(ShortArrayBuilder).e3 = function () {
    return copyOf_4(this.q8p_1, this.r8p_1);
  };
  function UShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.a8q_1 = bufferWithData;
    this.b8q_1 = _UShortArray___get_size__impl__jqto1b(bufferWithData);
    this.f3(10);
  }
  protoOf(UShortArrayBuilder).t4h = function () {
    return this.b8q_1;
  };
  protoOf(UShortArrayBuilder).f3 = function (requiredCapacity) {
    if (_UShortArray___get_size__impl__jqto1b(this.a8q_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var this_0 = this.a8q_1;
      var newSize = coerceAtLeast(requiredCapacity, imul(_UShortArray___get_size__impl__jqto1b(this.a8q_1), 2));
      tmp.a8q_1 = _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(this_0), newSize));
    }
  };
  protoOf(UShortArrayBuilder).c8q = function (c) {
    this.c8l();
    var tmp = this.a8q_1;
    var tmp1 = this.b8q_1;
    this.b8q_1 = tmp1 + 1 | 0;
    UShortArray__set_impl_6d8whp(tmp, tmp1, c);
  };
  protoOf(UShortArrayBuilder).i8r = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var this_0 = this.a8q_1;
    var newSize = this.b8q_1;
    return _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(this_0), newSize));
  };
  protoOf(UShortArrayBuilder).e3 = function () {
    return new UShortArray(this.i8r());
  };
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.j8q_1 = bufferWithData;
    this.k8q_1 = bufferWithData.length;
    this.f3(10);
  }
  protoOf(ByteArrayBuilder).t4h = function () {
    return this.k8q_1;
  };
  protoOf(ByteArrayBuilder).f3 = function (requiredCapacity) {
    if (this.j8q_1.length < requiredCapacity)
      this.j8q_1 = copyOf_5(this.j8q_1, coerceAtLeast(requiredCapacity, imul(this.j8q_1.length, 2)));
  };
  protoOf(ByteArrayBuilder).l8q = function (c) {
    this.c8l();
    var tmp = this.j8q_1;
    var tmp1 = this.k8q_1;
    this.k8q_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(ByteArrayBuilder).e3 = function () {
    return copyOf_5(this.j8q_1, this.k8q_1);
  };
  function UByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.t8q_1 = bufferWithData;
    this.u8q_1 = _UByteArray___get_size__impl__h6pkdv(bufferWithData);
    this.f3(10);
  }
  protoOf(UByteArrayBuilder).t4h = function () {
    return this.u8q_1;
  };
  protoOf(UByteArrayBuilder).f3 = function (requiredCapacity) {
    if (_UByteArray___get_size__impl__h6pkdv(this.t8q_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var this_0 = this.t8q_1;
      var newSize = coerceAtLeast(requiredCapacity, imul(_UByteArray___get_size__impl__h6pkdv(this.t8q_1), 2));
      tmp.t8q_1 = _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(this_0), newSize));
    }
  };
  protoOf(UByteArrayBuilder).v8q = function (c) {
    this.c8l();
    var tmp = this.t8q_1;
    var tmp1 = this.u8q_1;
    this.u8q_1 = tmp1 + 1 | 0;
    UByteArray__set_impl_jvcicn(tmp, tmp1, c);
  };
  protoOf(UByteArrayBuilder).j8r = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var this_0 = this.t8q_1;
    var newSize = this.u8q_1;
    return _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(this_0), newSize));
  };
  protoOf(UByteArrayBuilder).e3 = function () {
    return new UByteArray(this.j8r());
  };
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.c8r_1 = bufferWithData;
    this.d8r_1 = bufferWithData.length;
    this.f3(10);
  }
  protoOf(BooleanArrayBuilder).t4h = function () {
    return this.d8r_1;
  };
  protoOf(BooleanArrayBuilder).f3 = function (requiredCapacity) {
    if (this.c8r_1.length < requiredCapacity)
      this.c8r_1 = copyOf_6(this.c8r_1, coerceAtLeast(requiredCapacity, imul(this.c8r_1.length, 2)));
  };
  protoOf(BooleanArrayBuilder).e8r = function (c) {
    this.c8l();
    var tmp = this.c8r_1;
    var tmp1 = this.d8r_1;
    this.d8r_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(BooleanArrayBuilder).e3 = function () {
    return copyOf_6(this.c8r_1, this.d8r_1);
  };
  function get_BUILTIN_SERIALIZERS() {
    _init_properties_Primitives_kt__k0eto4();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function builtinSerializerOrNull(_this__u8e3s4) {
    _init_properties_Primitives_kt__k0eto4();
    var tmp = get_BUILTIN_SERIALIZERS().x2(_this__u8e3s4);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : THROW_CCE();
  }
  function StringSerializer() {
    StringSerializer_instance = this;
    this.k8r_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).i8c = function () {
    return this.k8r_1;
  };
  protoOf(StringSerializer).l8r = function (encoder, value) {
    return encoder.l8g(value);
  };
  protoOf(StringSerializer).j8c = function (encoder, value) {
    return this.l8r(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  protoOf(StringSerializer).k8c = function (decoder) {
    return decoder.d8f();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.m8r_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  protoOf(CharSerializer).i8c = function () {
    return this.m8r_1;
  };
  protoOf(CharSerializer).n8r = function (encoder, value) {
    return encoder.k8g(value);
  };
  protoOf(CharSerializer).j8c = function (encoder, value) {
    return this.n8r(encoder, value instanceof Char ? value.ja_1 : THROW_CCE());
  };
  protoOf(CharSerializer).o8r = function (decoder) {
    return decoder.c8f();
  };
  protoOf(CharSerializer).k8c = function (decoder) {
    return new Char(this.o8r(decoder));
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.p8r_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).i8c = function () {
    return this.p8r_1;
  };
  protoOf(DoubleSerializer).q8r = function (encoder, value) {
    return encoder.j8g(value);
  };
  protoOf(DoubleSerializer).j8c = function (encoder, value) {
    return this.q8r(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(DoubleSerializer).k8c = function (decoder) {
    return decoder.b8f();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.r8r_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  protoOf(FloatSerializer).i8c = function () {
    return this.r8r_1;
  };
  protoOf(FloatSerializer).s8r = function (encoder, value) {
    return encoder.i8g(value);
  };
  protoOf(FloatSerializer).j8c = function (encoder, value) {
    return this.s8r(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(FloatSerializer).k8c = function (decoder) {
    return decoder.a8f();
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.t8r_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).i8c = function () {
    return this.t8r_1;
  };
  protoOf(LongSerializer).u8r = function (encoder, value) {
    return encoder.h8g(value);
  };
  protoOf(LongSerializer).j8c = function (encoder, value) {
    return this.u8r(encoder, value instanceof Long ? value : THROW_CCE());
  };
  protoOf(LongSerializer).k8c = function (decoder) {
    return decoder.z8e();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.v8r_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).i8c = function () {
    return this.v8r_1;
  };
  protoOf(IntSerializer).w8r = function (encoder, value) {
    return encoder.g8g(value);
  };
  protoOf(IntSerializer).j8c = function (encoder, value) {
    return this.w8r(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(IntSerializer).k8c = function (decoder) {
    return decoder.y8e();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.x8r_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  protoOf(ShortSerializer).i8c = function () {
    return this.x8r_1;
  };
  protoOf(ShortSerializer).y8r = function (encoder, value) {
    return encoder.f8g(value);
  };
  protoOf(ShortSerializer).j8c = function (encoder, value) {
    return this.y8r(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ShortSerializer).k8c = function (decoder) {
    return decoder.x8e();
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.z8r_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  protoOf(ByteSerializer).i8c = function () {
    return this.z8r_1;
  };
  protoOf(ByteSerializer).a8s = function (encoder, value) {
    return encoder.e8g(value);
  };
  protoOf(ByteSerializer).j8c = function (encoder, value) {
    return this.a8s(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ByteSerializer).k8c = function (decoder) {
    return decoder.w8e();
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.b8s_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).i8c = function () {
    return this.b8s_1;
  };
  protoOf(BooleanSerializer).c8s = function (encoder, value) {
    return encoder.d8g(value);
  };
  protoOf(BooleanSerializer).j8c = function (encoder, value) {
    return this.c8s(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  protoOf(BooleanSerializer).k8c = function (decoder) {
    return decoder.v8e();
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.d8s_1 = new ObjectSerializer('kotlin.Unit', Unit_instance);
  }
  protoOf(UnitSerializer).i8c = function () {
    return this.d8s_1.i8c();
  };
  protoOf(UnitSerializer).e8s = function (decoder) {
    this.d8s_1.k8c(decoder);
  };
  protoOf(UnitSerializer).k8c = function (decoder) {
    this.e8s(decoder);
    return Unit_instance;
  };
  protoOf(UnitSerializer).f8s = function (encoder, value) {
    this.d8s_1.y8c(encoder, Unit_instance);
  };
  protoOf(UnitSerializer).j8c = function (encoder, value) {
    return this.f8s(encoder, value instanceof Unit ? value : THROW_CCE());
  };
  var UnitSerializer_instance;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance == null)
      new UnitSerializer();
    return UnitSerializer_instance;
  }
  function error_0($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.g8s_1 = serialName;
    this.h8s_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor_0).o8d = function () {
    return this.g8s_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).s8d = function () {
    return this.h8s_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).q8d = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor_0).w8d = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).v8d = function (name) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).x8d = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).u8d = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).t8d = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).toString = function () {
    return 'PrimitiveDescriptor(' + this.g8s_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor_0))
      return false;
    if (this.g8s_1 === other.g8s_1 ? equals(this.h8s_1, other.h8s_1) : false)
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor_0).hashCode = function () {
    return getStringHashCode(this.g8s_1) + imul(31, this.h8s_1.hashCode()) | 0;
  };
  function PrimitiveDescriptorSafe(serialName, kind) {
    _init_properties_Primitives_kt__k0eto4();
    checkName(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function checkName(serialName) {
    _init_properties_Primitives_kt__k0eto4();
    var keys = get_BUILTIN_SERIALIZERS().k2();
    var tmp0_iterator = keys.o();
    while (tmp0_iterator.d1()) {
      var primitive = tmp0_iterator.f1();
      var simpleName = capitalize(ensureNotNull(primitive.b7()));
      var qualifiedName = 'kotlin.' + simpleName;
      if (equals_0(serialName, qualifiedName, true) ? true : equals_0(serialName, simpleName, true)) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exist ' + capitalize(simpleName) + 'Serializer.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
      }
    }
  }
  function capitalize(_this__u8e3s4) {
    _init_properties_Primitives_kt__k0eto4();
    // Inline function 'kotlin.text.replaceFirstChar' call
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(_this__u8e3s4) > 0) {
      // Inline function 'kotlinx.serialization.internal.capitalize.<anonymous>' call
      var it = charSequenceGet(_this__u8e3s4, 0);
      var tmp$ret$1 = isLowerCase(it) ? titlecase(it) : toString_0(it);
      var tmp_0 = toString(tmp$ret$1);
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = tmp_0 + _this__u8e3s4.substring(1);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  var properties_initialized_Primitives_kt_6dpii6;
  function _init_properties_Primitives_kt__k0eto4() {
    if (!properties_initialized_Primitives_kt_6dpii6) {
      properties_initialized_Primitives_kt_6dpii6 = true;
      BUILTIN_SERIALIZERS = mapOf([to(PrimitiveClasses_getInstance().c8(), serializer_1(StringCompanionObject_instance)), to(getKClass(Char), serializer_2(Companion_getInstance_1())), to(PrimitiveClasses_getInstance().f8(), CharArraySerializer()), to(PrimitiveClasses_getInstance().a8(), serializer_3(DoubleCompanionObject_instance)), to(PrimitiveClasses_getInstance().l8(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().z7(), serializer_4(FloatCompanionObject_instance)), to(PrimitiveClasses_getInstance().k8(), FloatArraySerializer()), to(getKClass(Long), serializer_5(Companion_getInstance_0())), to(PrimitiveClasses_getInstance().j8(), LongArraySerializer()), to(getKClass(ULong), serializer_6(Companion_getInstance_2())), to(getKClass(ULongArray), ULongArraySerializer()), to(PrimitiveClasses_getInstance().y7(), serializer_7(IntCompanionObject_instance)), to(PrimitiveClasses_getInstance().i8(), IntArraySerializer()), to(getKClass(UInt), serializer_8(Companion_getInstance_3())), to(getKClass(UIntArray), UIntArraySerializer()), to(PrimitiveClasses_getInstance().x7(), serializer_9(ShortCompanionObject_instance)), to(PrimitiveClasses_getInstance().h8(), ShortArraySerializer()), to(getKClass(UShort), serializer_10(Companion_getInstance_4())), to(getKClass(UShortArray), UShortArraySerializer()), to(PrimitiveClasses_getInstance().w7(), serializer_11(ByteCompanionObject_instance)), to(PrimitiveClasses_getInstance().g8(), ByteArraySerializer()), to(getKClass(UByte), serializer_12(Companion_getInstance_5())), to(getKClass(UByteArray), UByteArraySerializer()), to(PrimitiveClasses_getInstance().v7(), serializer_13(BooleanCompanionObject_instance)), to(PrimitiveClasses_getInstance().e8(), BooleanArraySerializer()), to(getKClass(Unit), serializer_14(Unit_instance)), to(PrimitiveClasses_getInstance().u7(), NothingSerializer()), to(getKClass(Duration), serializer_15(Companion_getInstance()))]);
    }
  }
  function NamedValueDecoder() {
    TaggedDecoder.call(this);
  }
  protoOf(NamedValueDecoder).k8s = function (_this__u8e3s4, index) {
    return this.m8s(this.l8s(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).m8s = function (nestedName) {
    var tmp0_elvis_lhs = this.p8s();
    return this.q8s(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).l8s = function (descriptor, index) {
    return descriptor.w8d(index);
  };
  protoOf(NamedValueDecoder).q8s = function (parentName, childName) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(parentName) === 0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  function tagBlock($this, tag, block) {
    $this.d8t(tag);
    var r = block();
    if (!$this.o8s_1) {
      $this.e8t();
    }
    $this.o8s_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.f8f($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
      var this_0 = this$0;
      var isNullabilitySupported = $deserializer.i8c().k8d();
      var tmp;
      if (isNullabilitySupported ? true : this_0.t8e()) {
        // Inline function 'kotlinx.serialization.internal.TaggedDecoder.decodeNullableSerializableElement.<anonymous>.<anonymous>' call
        tmp = this$0.f8f($deserializer, $previousValue);
      } else {
        tmp = this_0.u8e();
      }
      return tmp;
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.n8s_1 = ArrayList_init_$Create$_0();
    this.o8s_1 = false;
  }
  protoOf(TaggedDecoder).w8f = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).r8s = function (tag) {
    throw SerializationException_init_$Create$_0('' + getKClassFromExpression(this) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).s8s = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).t8s = function (tag) {
    var tmp = this.r8s(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).u8s = function (tag) {
    var tmp = this.r8s(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).v8s = function (tag) {
    var tmp = this.r8s(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).w8s = function (tag) {
    var tmp = this.r8s(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).x8s = function (tag) {
    var tmp = this.r8s(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).y8s = function (tag) {
    var tmp = this.r8s(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).z8s = function (tag) {
    var tmp = this.r8s(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).a8t = function (tag) {
    var tmp = this.r8s(tag);
    return tmp instanceof Char ? tmp.ja_1 : THROW_CCE();
  };
  protoOf(TaggedDecoder).b8t = function (tag) {
    var tmp = this.r8s(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).c8t = function (tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.internal.TaggedDecoder.decodeTaggedInline.<anonymous>' call
    this.d8t(tag);
    return this;
  };
  protoOf(TaggedDecoder).f8f = function (deserializer, previousValue) {
    return this.g8f(deserializer);
  };
  protoOf(TaggedDecoder).e8f = function (descriptor) {
    return this.c8t(this.e8t(), descriptor);
  };
  protoOf(TaggedDecoder).t8e = function () {
    var tmp0_elvis_lhs = this.p8s();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.s8s(currentTag);
  };
  protoOf(TaggedDecoder).u8e = function () {
    return null;
  };
  protoOf(TaggedDecoder).v8e = function () {
    return this.t8s(this.e8t());
  };
  protoOf(TaggedDecoder).w8e = function () {
    return this.u8s(this.e8t());
  };
  protoOf(TaggedDecoder).x8e = function () {
    return this.v8s(this.e8t());
  };
  protoOf(TaggedDecoder).y8e = function () {
    return this.w8s(this.e8t());
  };
  protoOf(TaggedDecoder).z8e = function () {
    return this.x8s(this.e8t());
  };
  protoOf(TaggedDecoder).a8f = function () {
    return this.y8s(this.e8t());
  };
  protoOf(TaggedDecoder).b8f = function () {
    return this.z8s(this.e8t());
  };
  protoOf(TaggedDecoder).c8f = function () {
    return this.a8t(this.e8t());
  };
  protoOf(TaggedDecoder).d8f = function () {
    return this.b8t(this.e8t());
  };
  protoOf(TaggedDecoder).h8f = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).i8f = function (descriptor) {
  };
  protoOf(TaggedDecoder).j8f = function (descriptor, index) {
    return this.t8s(this.k8s(descriptor, index));
  };
  protoOf(TaggedDecoder).k8f = function (descriptor, index) {
    return this.u8s(this.k8s(descriptor, index));
  };
  protoOf(TaggedDecoder).l8f = function (descriptor, index) {
    return this.v8s(this.k8s(descriptor, index));
  };
  protoOf(TaggedDecoder).m8f = function (descriptor, index) {
    return this.w8s(this.k8s(descriptor, index));
  };
  protoOf(TaggedDecoder).n8f = function (descriptor, index) {
    return this.x8s(this.k8s(descriptor, index));
  };
  protoOf(TaggedDecoder).o8f = function (descriptor, index) {
    return this.y8s(this.k8s(descriptor, index));
  };
  protoOf(TaggedDecoder).p8f = function (descriptor, index) {
    return this.z8s(this.k8s(descriptor, index));
  };
  protoOf(TaggedDecoder).q8f = function (descriptor, index) {
    return this.a8t(this.k8s(descriptor, index));
  };
  protoOf(TaggedDecoder).r8f = function (descriptor, index) {
    return this.b8t(this.k8s(descriptor, index));
  };
  protoOf(TaggedDecoder).s8f = function (descriptor, index) {
    return this.c8t(this.k8s(descriptor, index), descriptor.u8d(index));
  };
  protoOf(TaggedDecoder).t8f = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.k8s(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).v8f = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.k8s(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).p8s = function () {
    return lastOrNull(this.n8s_1);
  };
  protoOf(TaggedDecoder).d8t = function (name) {
    this.n8s_1.a1(name);
  };
  protoOf(TaggedDecoder).e8t = function () {
    var r = this.n8s_1.m1(get_lastIndex_0(this.n8s_1));
    this.o8s_1 = true;
    return r;
  };
  function get_NULL() {
    _init_properties_Tuples_kt__dz0qyd();
    return NULL;
  }
  var NULL;
  function MapEntry(key, value) {
    this.f8t_1 = key;
    this.g8t_1 = value;
  }
  protoOf(MapEntry).p2 = function () {
    return this.f8t_1;
  };
  protoOf(MapEntry).q2 = function () {
    return this.g8t_1;
  };
  protoOf(MapEntry).toString = function () {
    return 'MapEntry(key=' + this.f8t_1 + ', value=' + this.g8t_1 + ')';
  };
  protoOf(MapEntry).hashCode = function () {
    var result = this.f8t_1 == null ? 0 : hashCode(this.f8t_1);
    result = imul(result, 31) + (this.g8t_1 == null ? 0 : hashCode(this.g8t_1)) | 0;
    return result;
  };
  protoOf(MapEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    var tmp0_other_with_cast = other instanceof MapEntry ? other : THROW_CCE();
    if (!equals(this.f8t_1, tmp0_other_with_cast.f8t_1))
      return false;
    if (!equals(this.g8t_1, tmp0_other_with_cast.g8t_1))
      return false;
    return true;
  };
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.t8c('key', $keySerializer.i8c());
      $this$buildSerialDescriptor.t8c('value', $valueSerializer.i8c());
      return Unit_instance;
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.j8t_1 = buildSerialDescriptor('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(MapEntrySerializer_0).i8c = function () {
    return this.j8t_1;
  };
  protoOf(MapEntrySerializer_0).k8t = function (_this__u8e3s4) {
    return _this__u8e3s4.p2();
  };
  protoOf(MapEntrySerializer_0).l8t = function (_this__u8e3s4) {
    return this.k8t((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).m8t = function (_this__u8e3s4) {
    return _this__u8e3s4.q2();
  };
  protoOf(MapEntrySerializer_0).n8t = function (_this__u8e3s4) {
    return this.m8t((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).o8t = function (key, value) {
    return new MapEntry(key, value);
  };
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.t8c('first', $keySerializer.i8c());
      $this$buildClassSerialDescriptor.t8c('second', $valueSerializer.i8c());
      return Unit_instance;
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.u8t_1 = buildClassSerialDescriptor('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(PairSerializer_0).i8c = function () {
    return this.u8t_1;
  };
  protoOf(PairSerializer_0).v8t = function (_this__u8e3s4) {
    return _this__u8e3s4.qe_1;
  };
  protoOf(PairSerializer_0).l8t = function (_this__u8e3s4) {
    return this.v8t(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).w8t = function (_this__u8e3s4) {
    return _this__u8e3s4.re_1;
  };
  protoOf(PairSerializer_0).n8t = function (_this__u8e3s4) {
    return this.w8t(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).o8t = function (key, value) {
    return to(key, value);
  };
  function decodeSequentially_1($this, composite) {
    var a = composite.u8f($this.a8u_1, 0, $this.x8t_1);
    var b = composite.u8f($this.a8u_1, 1, $this.y8t_1);
    var c = composite.u8f($this.a8u_1, 2, $this.z8t_1);
    composite.i8f($this.a8u_1);
    return new Triple(a, b, c);
  }
  function decodeStructure($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.y8f($this.a8u_1);
      if (index === -1) {
        break mainLoop;
      } else {
        if (index === 0) {
          a = composite.u8f($this.a8u_1, 0, $this.x8t_1);
        } else {
          if (index === 1) {
            b = composite.u8f($this.a8u_1, 1, $this.y8t_1);
          } else {
            if (index === 2) {
              c = composite.u8f($this.a8u_1, 2, $this.z8t_1);
            } else {
              throw SerializationException_init_$Create$_0('Unexpected index ' + index);
            }
          }
        }
      }
    }
    composite.i8f($this.a8u_1);
    if (a === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'first' is missing");
    if (b === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'second' is missing");
    if (c === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'third' is missing");
    var tmp = (a == null ? true : !(a == null)) ? a : THROW_CCE();
    var tmp_0 = (b == null ? true : !(b == null)) ? b : THROW_CCE();
    return new Triple(tmp, tmp_0, (c == null ? true : !(c == null)) ? c : THROW_CCE());
  }
  function TripleSerializer$descriptor$lambda(this$0) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.t8c('first', this$0.x8t_1.i8c());
      $this$buildClassSerialDescriptor.t8c('second', this$0.y8t_1.i8c());
      $this$buildClassSerialDescriptor.t8c('third', this$0.z8t_1.i8c());
      return Unit_instance;
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.x8t_1 = aSerializer;
    this.y8t_1 = bSerializer;
    this.z8t_1 = cSerializer;
    var tmp = this;
    tmp.a8u_1 = buildClassSerialDescriptor('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this));
  }
  protoOf(TripleSerializer_0).i8c = function () {
    return this.a8u_1;
  };
  protoOf(TripleSerializer_0).b8u = function (encoder, value) {
    var structuredEncoder = encoder.h8f(this.a8u_1);
    structuredEncoder.x8g(this.a8u_1, 0, this.x8t_1, value.ti_1);
    structuredEncoder.x8g(this.a8u_1, 1, this.y8t_1, value.ui_1);
    structuredEncoder.x8g(this.a8u_1, 2, this.z8t_1, value.vi_1);
    structuredEncoder.i8f(this.a8u_1);
  };
  protoOf(TripleSerializer_0).j8c = function (encoder, value) {
    return this.b8u(encoder, value instanceof Triple ? value : THROW_CCE());
  };
  protoOf(TripleSerializer_0).k8c = function (decoder) {
    var composite = decoder.h8f(this.a8u_1);
    if (composite.x8f()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure(this, composite);
  };
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.p8t_1 = keySerializer;
    this.q8t_1 = valueSerializer;
  }
  protoOf(KeyValueSerializer).r8t = function (encoder, value) {
    var structuredEncoder = encoder.h8f(this.i8c());
    structuredEncoder.x8g(this.i8c(), 0, this.p8t_1, this.l8t(value));
    structuredEncoder.x8g(this.i8c(), 1, this.q8t_1, this.n8t(value));
    structuredEncoder.i8f(this.i8c());
  };
  protoOf(KeyValueSerializer).j8c = function (encoder, value) {
    return this.r8t(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(KeyValueSerializer).k8c = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.i8c();
    var composite = decoder.h8f(descriptor);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.internal.KeyValueSerializer.deserialize.<anonymous>' call
      if (composite.x8f()) {
        var key = composite.u8f(this.i8c(), 0, this.p8t_1);
        var value = composite.u8f(this.i8c(), 1, this.q8t_1);
        tmp$ret$0 = this.o8t(key, value);
        break $l$block;
      }
      var key_0 = get_NULL();
      var value_0 = get_NULL();
      mainLoop: while (true) {
        var idx = composite.y8f(this.i8c());
        if (idx === -1) {
          break mainLoop;
        } else {
          if (idx === 0) {
            key_0 = composite.u8f(this.i8c(), 0, this.p8t_1);
          } else {
            if (idx === 1) {
              value_0 = composite.u8f(this.i8c(), 1, this.q8t_1);
            } else {
              throw SerializationException_init_$Create$_0('Invalid index: ' + idx);
            }
          }
        }
      }
      if (key_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'key' is missing");
      if (value_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'value' is missing");
      var tmp = (key_0 == null ? true : !(key_0 == null)) ? key_0 : THROW_CCE();
      tmp$ret$0 = this.o8t(tmp, (value_0 == null ? true : !(value_0 == null)) ? value_0 : THROW_CCE());
    }
    var result = tmp$ret$0;
    composite.i8f(descriptor);
    return result;
  };
  var properties_initialized_Tuples_kt_3vs7ar;
  function _init_properties_Tuples_kt__dz0qyd() {
    if (!properties_initialized_Tuples_kt_3vs7ar) {
      properties_initialized_Tuples_kt_3vs7ar = true;
      NULL = new Object();
    }
  }
  function ULongSerializer() {
    ULongSerializer_instance = this;
    this.c8u_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_5(Companion_getInstance_0()));
  }
  protoOf(ULongSerializer).i8c = function () {
    return this.c8u_1;
  };
  protoOf(ULongSerializer).d8u = function (encoder, value) {
    var tmp = encoder.m8g(this.c8u_1);
    // Inline function 'kotlin.ULong.toLong' call
    var tmp$ret$0 = _ULong___get_data__impl__fggpzb(value);
    tmp.h8g(tmp$ret$0);
  };
  protoOf(ULongSerializer).j8c = function (encoder, value) {
    return this.d8u(encoder, value instanceof ULong ? value.yj_1 : THROW_CCE());
  };
  protoOf(ULongSerializer).e8u = function (decoder) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.e8f(this.c8u_1).z8e();
    return _ULong___init__impl__c78o9k(this_0);
  };
  protoOf(ULongSerializer).k8c = function (decoder) {
    return new ULong(this.e8u(decoder));
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.f8u_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_7(IntCompanionObject_instance));
  }
  protoOf(UIntSerializer).i8c = function () {
    return this.f8u_1;
  };
  protoOf(UIntSerializer).g8u = function (encoder, value) {
    var tmp = encoder.m8g(this.f8u_1);
    // Inline function 'kotlin.UInt.toInt' call
    var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(value);
    tmp.g8g(tmp$ret$0);
  };
  protoOf(UIntSerializer).j8c = function (encoder, value) {
    return this.g8u(encoder, value instanceof UInt ? value.mj_1 : THROW_CCE());
  };
  protoOf(UIntSerializer).h8u = function (decoder) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.e8f(this.f8u_1).y8e();
    return _UInt___init__impl__l7qpdl(this_0);
  };
  protoOf(UIntSerializer).k8c = function (decoder) {
    return new UInt(this.h8u(decoder));
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.i8u_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_9(ShortCompanionObject_instance));
  }
  protoOf(UShortSerializer).i8c = function () {
    return this.i8u_1;
  };
  protoOf(UShortSerializer).j8u = function (encoder, value) {
    var tmp = encoder.m8g(this.i8u_1);
    // Inline function 'kotlin.UShort.toShort' call
    var tmp$ret$0 = _UShort___get_data__impl__g0245(value);
    tmp.f8g(tmp$ret$0);
  };
  protoOf(UShortSerializer).j8c = function (encoder, value) {
    return this.j8u(encoder, value instanceof UShort ? value.kk_1 : THROW_CCE());
  };
  protoOf(UShortSerializer).k8u = function (decoder) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.e8f(this.i8u_1).x8e();
    return _UShort___init__impl__jigrne(this_0);
  };
  protoOf(UShortSerializer).k8c = function (decoder) {
    return new UShort(this.k8u(decoder));
  };
  var UShortSerializer_instance;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance == null)
      new UShortSerializer();
    return UShortSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.l8u_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_11(ByteCompanionObject_instance));
  }
  protoOf(UByteSerializer).i8c = function () {
    return this.l8u_1;
  };
  protoOf(UByteSerializer).m8u = function (encoder, value) {
    var tmp = encoder.m8g(this.l8u_1);
    // Inline function 'kotlin.UByte.toByte' call
    var tmp$ret$0 = _UByte___get_data__impl__jof9qr(value);
    tmp.e8g(tmp$ret$0);
  };
  protoOf(UByteSerializer).j8c = function (encoder, value) {
    return this.m8u(encoder, value instanceof UByte ? value.aj_1 : THROW_CCE());
  };
  protoOf(UByteSerializer).n8u = function (decoder) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.e8f(this.l8u_1).w8e();
    return _UByte___init__impl__g9hnc4(this_0);
  };
  protoOf(UByteSerializer).k8c = function (decoder) {
    return new UByte(this.n8u(decoder));
  };
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function get_EmptySerializersModuleLegacyJs() {
    _init_properties_SerializersModule_kt__u78ha3();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  protoOf(SerializersModule).h8d = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.g8d(kClass, typeArgumentsSerializers) : $super.g8d.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider) {
    SerializersModule.call(this);
    this.p8u_1 = class2ContextualFactory;
    this.q8u_1 = polyBase2Serializers;
    this.r8u_1 = polyBase2DefaultSerializerProvider;
    this.s8u_1 = polyBase2NamedSerializers;
    this.t8u_1 = polyBase2DefaultDeserializerProvider;
  }
  protoOf(SerialModuleImpl).h8h = function (baseClass, value) {
    if (!baseClass.c7(value))
      return null;
    var tmp0_safe_receiver = this.q8u_1.x2(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x2(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.r8u_1.x2(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  protoOf(SerialModuleImpl).g8h = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.s8u_1.x2(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.get' call
      tmp = (isInterface(tmp0_safe_receiver, Map) ? tmp0_safe_receiver : THROW_CCE()).x2(serializedClassName);
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.t8u_1.x2(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).g8d = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.p8u_1.x2(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u8u(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  protoOf(SerialModuleImpl).o8u = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.p8u_1.m2().o();
    while (tmp0_iterator.d1()) {
      var element = tmp0_iterator.f1();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var kclass = element.p2();
      // Inline function 'kotlin.collections.component2' call
      var serial = element.q2();
      if (serial instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.x8u_1;
        collector.y8u(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (serial instanceof WithTypeArguments) {
          collector.w8u(kclass, serial.v8u_1);
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_0 = this.q8u_1.m2().o();
    while (tmp0_iterator_0.d1()) {
      var element_0 = tmp0_iterator_0.f1();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass = element_0.p2();
      // Inline function 'kotlin.collections.component2' call
      var classMap = element_0.q2();
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator_1 = classMap.m2().o();
      while (tmp0_iterator_1.d1()) {
        var element_1 = tmp0_iterator_1.f1();
        // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.component1' call
        var actualClass = element_1.p2();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element_1.q2();
        var tmp_1 = isInterface(baseClass, KClass) ? baseClass : THROW_CCE();
        var tmp_2 = isInterface(actualClass, KClass) ? actualClass : THROW_CCE();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var tmp$ret$9 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
        collector.z8u(tmp_1, tmp_2, tmp$ret$9);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_2 = this.r8u_1.m2().o();
    while (tmp0_iterator_2.d1()) {
      var element_2 = tmp0_iterator_2.f1();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass_0 = element_2.p2();
      // Inline function 'kotlin.collections.component2' call
      var provider = element_2.q2();
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.a8v(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_3 = this.t8u_1.m2().o();
    while (tmp0_iterator_3.d1()) {
      var element_3 = tmp0_iterator_3.f1();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass_1 = element_3.p2();
      // Inline function 'kotlin.collections.component2' call
      var provider_0 = element_3.q2();
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.b8v(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
    }
  };
  function Argless() {
  }
  function WithTypeArguments() {
  }
  function ContextualProvider() {
  }
  var properties_initialized_SerializersModule_kt_fjigjn;
  function _init_properties_SerializersModule_kt__u78ha3() {
    if (!properties_initialized_SerializersModule_kt_fjigjn) {
      properties_initialized_SerializersModule_kt_fjigjn = true;
      EmptySerializersModule = new SerialModuleImpl(emptyMap(), emptyMap(), emptyMap(), emptyMap(), emptyMap());
    }
  }
  function EmptySerializersModule_0() {
    return get_EmptySerializersModuleLegacyJs();
  }
  function SerializersModuleCollector$contextual$lambda($serializer) {
    return function (it) {
      return $serializer;
    };
  }
  function SerializersModuleCollector() {
  }
  function SerializableWith(serializer) {
    this.c8v_1 = serializer;
  }
  protoOf(SerializableWith).equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.c8v_1.equals(tmp0_other_with_cast.c8v_1))
      return false;
    return true;
  };
  protoOf(SerializableWith).hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.c8v_1.hashCode();
  };
  protoOf(SerializableWith).toString = function () {
    return '@kotlinx.serialization.SerializableWith(serializer=' + this.c8v_1 + ')';
  };
  function createCache(factory) {
    return new createCache$1(factory);
  }
  function createParametrizedCache(factory) {
    return new createParametrizedCache$1(factory);
  }
  function compiledSerializerImpl(_this__u8e3s4) {
    var tmp1_elvis_lhs = constructSerializerForGivenTypeArgs(_this__u8e3s4, []);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp_0;
      if (_this__u8e3s4 === PrimitiveClasses_getInstance().u7()) {
        tmp_0 = NothingSerializer_getInstance();
      } else {
        // Inline function 'kotlin.js.asDynamic' call
        var tmp0_safe_receiver = get_js(_this__u8e3s4).Companion;
        tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.serializer();
      }
      var tmp_1 = tmp_0;
      tmp = (!(tmp_1 == null) ? isInterface(tmp_1, KSerializer) : false) ? tmp_1 : null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function platformSpecificSerializerNotRegistered(_this__u8e3s4) {
    throw SerializationException_init_$Create$_0(notRegisteredMessage(_this__u8e3s4) + 'To get enum serializer on Kotlin/JS, it should be annotated with @Serializable annotation.');
  }
  function isReferenceArray(rootClass) {
    return rootClass.equals(PrimitiveClasses_getInstance().b8());
  }
  function constructSerializerForGivenTypeArgs(_this__u8e3s4, args) {
    var tmp;
    try {
      // Inline function 'kotlin.reflect.findAssociatedObject' call
      var assocObject = findAssociatedObject(_this__u8e3s4, getKClass(SerializableWith));
      var tmp_0;
      if (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) {
        tmp_0 = (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) ? assocObject : THROW_CCE();
      } else {
        if (!(assocObject == null) ? isInterface(assocObject, SerializerFactory) : false) {
          var tmp_1 = assocObject.x8m(args.slice());
          tmp_0 = isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
        } else {
          if (get_isInterface(_this__u8e3s4)) {
            tmp_0 = new PolymorphicSerializer(_this__u8e3s4);
          } else {
            tmp_0 = null;
          }
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      var e = $p;
      tmp_2 = null;
      tmp = tmp_2;
    }
    return tmp;
  }
  function get_isInterface(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver = get_js(_this__u8e3s4).$metadata$;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kind) == 'interface';
  }
  function toNativeArrayImpl(_this__u8e3s4, eClass) {
    // Inline function 'kotlin.collections.toTypedArray' call
    return copyToArray(_this__u8e3s4);
  }
  function getChecked(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4));
    return _this__u8e3s4[index];
  }
  function getChecked_0(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices_0(_this__u8e3s4));
    return _this__u8e3s4[index];
  }
  function createCache$1($factory) {
    this.d8v_1 = $factory;
  }
  protoOf(createCache$1).i8d = function (key) {
    return this.d8v_1(key);
  };
  function createParametrizedCache$1($factory) {
    this.e8v_1 = $factory;
  }
  protoOf(createParametrizedCache$1).j8d = function (key, types) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      // Inline function 'kotlinx.serialization.internal.<no name provided>.get.<anonymous>' call
      var value = this.e8v_1(key, types);
      tmp = _Result___init__impl__xyqfz8(value);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  //region block: post-declaration
  protoOf(SerialDescriptorImpl).k8d = get_isNullable;
  protoOf(SerialDescriptorImpl).r8d = get_isInline;
  protoOf(AbstractDecoder).u8f = decodeSerializableElement$default;
  protoOf(AbstractDecoder).g8f = decodeSerializableValue;
  protoOf(AbstractDecoder).x8f = decodeSequentially;
  protoOf(AbstractDecoder).z8f = decodeCollectionSize;
  protoOf(AbstractEncoder).b8h = encodeNotNullMark;
  protoOf(AbstractEncoder).c8h = beginCollection;
  protoOf(AbstractEncoder).y8g = encodeSerializableValue;
  protoOf(AbstractEncoder).a8h = encodeNullableSerializableValue;
  protoOf(AbstractEncoder).d8h = shouldEncodeElementDefault;
  protoOf(ListLikeDescriptor).k8d = get_isNullable;
  protoOf(ListLikeDescriptor).r8d = get_isInline;
  protoOf(ListLikeDescriptor).p8d = get_annotations;
  protoOf(MapLikeDescriptor).k8d = get_isNullable;
  protoOf(MapLikeDescriptor).r8d = get_isInline;
  protoOf(MapLikeDescriptor).p8d = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).k8d = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).r8d = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).n8m = typeParametersSerializers;
  protoOf(NothingSerialDescriptor).k8d = get_isNullable;
  protoOf(NothingSerialDescriptor).r8d = get_isInline;
  protoOf(NothingSerialDescriptor).p8d = get_annotations;
  protoOf(PrimitiveSerialDescriptor_0).k8d = get_isNullable;
  protoOf(PrimitiveSerialDescriptor_0).r8d = get_isInline;
  protoOf(PrimitiveSerialDescriptor_0).p8d = get_annotations;
  protoOf(TaggedDecoder).u8f = decodeSerializableElement$default;
  protoOf(TaggedDecoder).g8f = decodeSerializableValue;
  protoOf(TaggedDecoder).x8f = decodeSequentially;
  protoOf(TaggedDecoder).z8f = decodeCollectionSize;
  //endregion
  //region block: init
  Companion_instance_0 = new Companion();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = SerializationException_init_$Init$_0;
  _.$_$.b = UnknownFieldException_init_$Create$;
  _.$_$.c = SEALED_getInstance;
  _.$_$.d = STRING_getInstance;
  _.$_$.e = CONTEXTUAL_getInstance;
  _.$_$.f = ENUM_getInstance;
  _.$_$.g = CLASS_getInstance;
  _.$_$.h = LIST_getInstance;
  _.$_$.i = MAP_getInstance;
  _.$_$.j = Companion_instance_0;
  _.$_$.k = IntSerializer_getInstance;
  _.$_$.l = StringSerializer_getInstance;
  _.$_$.m = ListSerializer;
  _.$_$.n = MapSerializer;
  _.$_$.o = SetSerializer;
  _.$_$.p = get_nullable;
  _.$_$.q = serializer_1;
  _.$_$.r = serializer_10;
  _.$_$.s = serializer_8;
  _.$_$.t = serializer_12;
  _.$_$.u = serializer_6;
  _.$_$.v = PolymorphicKind;
  _.$_$.w = PrimitiveKind;
  _.$_$.x = PrimitiveSerialDescriptor;
  _.$_$.y = get_annotations;
  _.$_$.z = get_isInline;
  _.$_$.a1 = get_isNullable;
  _.$_$.b1 = SerialDescriptor;
  _.$_$.c1 = ENUM;
  _.$_$.d1 = buildSerialDescriptor;
  _.$_$.e1 = getContextualDescriptor;
  _.$_$.f1 = AbstractDecoder;
  _.$_$.g1 = AbstractEncoder;
  _.$_$.h1 = CompositeDecoder;
  _.$_$.i1 = CompositeEncoder;
  _.$_$.j1 = Decoder;
  _.$_$.k1 = Encoder;
  _.$_$.l1 = AbstractPolymorphicSerializer;
  _.$_$.m1 = ArrayListSerializer;
  _.$_$.n1 = ElementMarker;
  _.$_$.o1 = typeParametersSerializers;
  _.$_$.p1 = GeneratedSerializer;
  _.$_$.q1 = InlinePrimitiveDescriptor;
  _.$_$.r1 = NamedValueDecoder;
  _.$_$.s1 = PluginGeneratedSerialDescriptor;
  _.$_$.t1 = SerializerFactory;
  _.$_$.u1 = jsonCachedSerialNames;
  _.$_$.v1 = throwMissingFieldException;
  _.$_$.w1 = EmptySerializersModule_0;
  _.$_$.x1 = contextual;
  _.$_$.y1 = SerializersModuleCollector;
  _.$_$.z1 = BinaryFormat;
  _.$_$.a2 = DeserializationStrategy;
  _.$_$.b2 = KSerializer;
  _.$_$.c2 = MissingFieldException;
  _.$_$.d2 = SealedClassSerializer;
  _.$_$.e2 = SerializationException;
  _.$_$.f2 = StringFormat;
  _.$_$.g2 = findPolymorphicSerializer_0;
  _.$_$.h2 = findPolymorphicSerializer;
  _.$_$.i2 = serializerOrNull_0;
  _.$_$.j2 = serializer_0;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core.js.map
